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
    const {
      time,
      isReady,
      content,
      score,
      level,
      game,
      handleAnswer
    } = this.props;
    if (!game) return <div>Loading ...</div>;
    const { title, answer, options } = game || {};

    return (
      <div className="wrapper">
        <Layout>
          <Bar score={score} level={level} />
          <div className="title">{title}</div>
          <Timer time={time} />
          {/* <AudioPlayer answer={answer} /> */}
          <section className="ans">
            <AnswerArea
              options={options}
              handleClickAnswer={this.handleClickAnswer}
            />
          </section>
        </Layout>
        <StartButton isReady={isReady} content={content} answer={answer} />
        <style jsx>{`
          div.title {
            height: 100px;
            line-height: 100px;
            text-align: center;
            font-size: 36px;
            color: #fff;
            margin: 10px 30px;
            background-color: #00a6ff;
          }
          div.wrapper {
            height: 100vh;
            max-width: 375px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
          }
          section.ans {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 55%;
            background-color: #eeeeee80;
          }
        `}</style>
      </div>
    );
  }
}

const Bar = ({ score, level }) => (
  <div className="bar-wrapper">
    <div className="level-wrapper">
      LEVEL
      <br />
      {level}
    </div>
    <div className="score-wrapper">
      <div className="avatar" />
      <div className="score">Score: {score}</div>
    </div>
    <style jsx>{`
      div.bar-wrapper {
        padding: 10px 0 10px 30px;
        display: flex;
      }
      div.level-wrapper {
        margin-right: 30px;
        color: #fff;
        text-align: center;
        line-height: 30px;
      }
      div.score-wrapper {
        line-height: 60px;
        height: 60px;
        width: 100%;
        background-color: #00a6ff;
        border-radius: 30px 0px 0px 30px;
        display: flex;
      }
      div.avatar {
        height: 40px;
        width: 40px;
        margin-top: 10px;
        margin-left: 10px;
        border-radius: 20px;
        background-color: #eee;
      }
      div.score {
        color: #fff;
        font-size: 24px;
        font-weight: bold;
        margin-left: 20px;
      }
    `}</style>
  </div>
);
