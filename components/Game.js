import React from "react";
import Timer from "./Timer";

export default class extends React.PureComponent {
  state = {
    time: 30
  };

  // handleLoadSong = () => {
  //   if (this.tmr) clearInterval(this.tmr);
  //   this.tmr = setInterval(() => {
  //     const { handleAnswer } = this.props;
  //     const { time } = this.state;
  //     if (time < 1) {
  //       this.setState({ time: 30 });
  //       handleAnswer();
  //     } else {
  //       this.setState({ time: time - 1 });
  //     }
  //   }, 1000);
  // };
  
  componentDidMount() {
    window.addEventListener('blur', () => {
      if (this.tmr) clearInterval(this.tmr);
      this.tmr = setInterval(() => {
        const { handleAnswer } = this.props;
        const { time } = this.state;
        if (time < 1) {
          this.setState({ time: 30 });
          handleAnswer();
        } else {
          this.setState({ time: time - 1 });
        }
      }, 1000);
    });

    window.addEventListener('focus', () => {
      if (this.tmr) clearInterval(this.tmr);
    });
  }

  componentWillUnmount() {
    if (this.tmr) clearInterval(this.tmr);
  }

  handleClickAnswer = id => {
    const { handleAnswer } = this.props;
    handleAnswer(id, this.state.time);
    this.setState({ time: 30 });
  };

  render() {
    const {
      game: { title, answer, options },
      handleAnswer
    } = this.props;
    const { time } = this.state;
    return (
      <div>
        <Timer time={time} />
        <h3>{title}</h3>
        <div className="wrapper">
          <iframe
            src={`https://widget.kkbox.com/v1/?id=${answer}&type=song&terr=TW&lang=TC`}
            height="100"
            // allow="autoplay"
            // onLoad={this.handleLoadSong}
          />
        </div>
        <section>
          {options.map(({ id, name }) => (
            <div key={id} onClick={() => this.handleClickAnswer(id)}>
              {name}
            </div>
          ))}
        </section>
        <style jsx>{`
          div.wrapper {
            position: relative;
            overflow: hidden;
            height: 60px;
          }
          iframe {
            position: absolute;
            top: -60px;
            left: -100px;
          }
        `}</style>
      </div>
    );
  }
}
