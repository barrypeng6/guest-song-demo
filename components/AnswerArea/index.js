import React from "react";

export default class extends React.PureComponent {
  render() {
    const { options, handleClickAnswer } = this.props;
    return (
      <div>
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
            margin: 5px 10px;
            color: white;
            text-align: center;
            background-color: gray;
            border-radius: 2px;
            cursor: pointer;
          }
          div.select-opt:hover {
            background-color: #999;
          }
          div {
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin-top: 10px;
          }
        `}</style>
      </div>
    );
  }
}
