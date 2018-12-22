import React from "react";
import Layout from "./Layout";
import AnswerArea from "./AnswerArea";
import StartButton from "./StartButton";
import Timer from "./Timer";

export default class extends React.PureComponent {

  handleClickAnswer = id => {
    const { handleAnswer } = this.props;
    handleAnswer(id);
  };

  render() {
    const { time, isReady, tip, score, level, game, handleAnswer } = this.props;
    if (!game) return <div>Loading ...</div>;
    console.log('readdy: ', isReady)
    const { title, answer, options } = game || {};

    return (
      <>
        <StartButton isReady={isReady} tip={tip} answer={answer} />
        {isReady && (
          <Layout>
            <div>{`Score: ${score}`}</div>
            <div>{`Level: ${level}`}</div>
            <Timer time={time} />
            <h3>{title}</h3>
            {/* <AudioPlayer answer={answer} /> */}
            <section>
              <AnswerArea
                options={options}
                handleClickAnswer={this.handleClickAnswer}
              />
            </section>
          </Layout>
        )}
      </>
    );
  }
}
