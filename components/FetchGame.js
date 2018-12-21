import React from "react";
import getGameData from "../getGameData";
import Timer from "../components/Timer";

// 計分模組
const getScore = time => {
  if (time > 25) return 10;
  if (time > 20) return 9;
  if (time > 15) return 8;
  if (time > 10) return 7;
  if (time > 5) return 6;
  return 5;
};

export default class extends React.Component {
  state = {
    score: 0,
    level: 0,
    games: []
  };

  async componentDidMount() {
    // Fetch first level
    const { access_token } = this.props;
    const { games, level } = this.state;
    const game = await getGameData({ access_token, singer: "周杰倫", level });
    this.setState({ games: games.concat(game) });
  }

  handleAnswer = async (id, time) => {
    console.log("ID >>>", id);
    const { access_token } = this.props;
    const { score, games, level } = this.state;
    const currentGame = games[level];
    let newScore;
    if (id === currentGame.answer) {
      const earn = getScore(time);
      alert(`Correct! Get ${earn} points.`);
      newScore = score + earn;
    } else {
      const correctOpt = currentGame.options.find(
        opt => opt.id === currentGame.answer
      );
      alert(`Wrong answer. Answer is ${correctOpt.name}`);
      newScore = score;
    }
    const game = await getGameData({ access_token, singer: "周杰倫", level });
    this.setState({
      level: level + 1,
      score: newScore,
      games: games.concat(game)
    });
  };
  render() {
    const { score, games, level } = this.state;
    const { children } = this.props;

    if (level > 4) return <div>{`Final Score: ${score}`}</div>;
    return (
      <div>
        <div>{`Score: ${score}`}</div>
        <div>{`Level: ${level}`}</div>
        {children({ game: games[level], handleAnswer: this.handleAnswer })}
      </div>
    );
  }
}
