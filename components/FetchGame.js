import React from "react";
import getGames from "../getGames";

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
    time: 30,
    isReady: false,
    score: 0,
    level: 0,
    games: [],
    tip: {
      title: 'Ready?',
      content: 'Press start button.',
    }
  };

  async componentDidMount() {
    // Fetch first level
    const { access_token } = this.props;
    const games = await getGames({ access_token, singer: "周杰倫" });
    this.setState({ games });

    // Detect clicking in iframe
    window.addEventListener("blur", () => {
      if (this.tmr) clearInterval(this.tmr);
      this.tmr = setInterval(() => {
        const { handleAnswer } = this.props;
        const { time } = this.state;
        if (time < 1) {
          this.setState({ time: 30 });
          this.handleAnswer();
        } else {
          this.setState({ isReady: true, time: time - 1 });
        }
      }, 1000);
    });

    // window.addEventListener("focus", () => {
    //   if (this.tmr) clearInterval(this.tmr);
    // });
  }

  componentWillUnmount() {
    if (this.tmr) clearInterval(this.tmr);
  }

  handleAnswer = async id => {
    console.log("ID >>>", id);
    if (this.tmr) clearInterval(this.tmr);
    window.focus();

    const { access_token } = this.props;
    const { time, score, games, level } = this.state;
    const currentGame = games[level];
    let newScore, content;
    if (id === currentGame.answer) {
      const earn = getScore(time);
      content = `Correct! Get ${earn} points.`;
      newScore = score + earn;
    } else {
      const correctOpt = currentGame.options.find(
        opt => opt.id === currentGame.answer
      );
      content = `Wrong answer. Answer is ${correctOpt.name}`;
      newScore = score;
    }

    this.setState({
      isReady: false,
      time: 30,
      level: level + 1,
      score: newScore,
      tip: {
        title: 'Result',
        content,
      },
    });
  };
  render() {
    const { time, isReady, tip, score, games, level } = this.state;
    const { children } = this.props;

    if (level > 4) return <div>{`Final Score: ${score}`}</div>;
    return (
      <div>
        {children({ time, isReady, tip, score, level, game: games[level], handleAnswer: this.handleAnswer })}
      </div>
    );
  }
}
