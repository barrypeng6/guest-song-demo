import React from "react";

export default ({ children }) => (
  <div className="container">
    <div className="wrapper">{children}</div>
    <style jsx>{`
      div.container {
        display: flex;
        justify-content: center;
        background-color: black;
      }
      div.wrapper {
        margin-top: 20px;
        padding: 20px;
        border: 1px solid white;
        border-radius: 10px;
        width: 300px;
      }
    `}</style>
  </div>
);
