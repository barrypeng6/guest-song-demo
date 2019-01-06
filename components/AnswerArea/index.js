import React from "react";

export default class extends React.PureComponent {
  render() {
    const { options, handleClickAnswer } = this.props;
    return (
      <div className="option-wrapper">
        {options.map(({ id, name }) => (
          <div
            key={id}
            className="select-opt"
            onClick={() => {
              handleClickAnswer(id)
            }}
          >
            {name}
          </div>
        ))}
        <style jsx>{`
          div.select-opt {
            display: block;
            color: white;
            text-align: center;
            background-color: #00a6ff;
            border-radius: 30px;
            height: 60px;
            width: 100%;
            line-height: 60px;
            cursor: pointer;
            font-size: 24px;
          }
          div.select-opt:hover {
            background-color: #017bbd;
          }
          div.option-wrapper {
            display: flex;
            justify-content: space-between;
            padding: 30px;
            height: 100%;
            flex-direction: column;
          }
        `}</style>
      </div>
    );
  }
}
