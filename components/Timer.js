import React from "react";

export default ({ time }) => (
  <div className="timer">
    {`00:${time}`}
    <style jsx>{`
      div.timer {
        text-align: center;
        color: #fff;
        font-size: 46px;
      }
    `}</style>
  </div>
);
