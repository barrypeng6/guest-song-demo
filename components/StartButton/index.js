import React from "react";

export default ({ tip, isReady, answer }) => (
  <div className="dialog" style={{ top: isReady ? -300 : 50 }}>
    {/* 顯示標題 */}
    <div className="title">{tip.title}</div>
    {/* 顯示內容文字 */}
    <div className="content">{tip.content}</div>
    {/* 開始鍵 */}
    <div className="button-wrapper">
      <div className="fake-btn">Start</div>
      <iframe
        src={`https://widget.kkbox.com/v1/?id=${answer}&type=song&terr=TW&lang=TC`}
        height="100"
        frameBorder="0"
      />
    </div>
    <style jsx>{`
      div.dialog {
        position: relative;
        height: 240px;
        width: 240px;
        margin: 0 auto;
        background-color: black;
        border-radius: 5px;
        border: 1px solid white;
        transition: all 2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
      }
      div.title {
        padding: 10px 30px;
        font-size: 20px;
        text-align: center;
      }
      div.content {
        height: 120px;
        width: 100%;
        padding: 10px 30px;
      }
      div.button-wrapper {
        position: relative;
        border: 1px solid black;
        height: 50px;
        width: 150px;
        overflow: hidden;
        margin: 0 auto;
      }
      div.fake-btn {
        height: 50px;
        width: 150px;
        line-height: 50px;
        text-align: center;
        background-color: red;
        border-radius: 5px;
      }
      iframe {
        position: absolute;
        top: -815px;
        left: -1120px;
        transform: scale(10);
        transform-origin: 0 0;
        opacity: 0.2;
      }
    `}</style>
  </div>
);
