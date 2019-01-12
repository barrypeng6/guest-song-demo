import React from "react";
import Layout from "./Layout";

export default ({ score }) => (
  <Layout>
    <br />
    <br />
    <br />
    <div
      style={{ textAlign: "center", fontSize: 36 }}
    >{`Final Score: ${score}.`}</div>
    <div
      style={{ textAlign: "center", cursor: "pointer", fontSize: "20px" }}
      onClick={() => {
        window.location.reload();
      }}
    >
      再挑戰一次
    </div>
  </Layout>
);
