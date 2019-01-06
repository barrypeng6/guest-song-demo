import React from "react";

export default ({ children }) => (
  <div className="container">
    <div className="wrapper">{children}</div>
    <style jsx>{`
      div.container {
        background-color: #6AB1D7;
        height: 100vh;
      }
      div.wrapper {
      }
    `}</style>
  </div>
);
