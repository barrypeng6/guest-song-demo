import React from "react";

export default ({ tip, isReady, answer }) => (
  <div className="dialog" style={{ height: isReady ? 300 : 750 }}>
    {/* 顯示內容文字 */}
    <div className="content">{tip.content}</div>
    {/* 開始鍵 */}
    <div className="button-wrapper" style={{ bottom: isReady ? 100 : 400 }}>
    <div className="start-button">
      <div className="fake-btn">開始</div>
      <iframe
        src={`https://widget.kkbox.com/v1/?id=${answer}&type=song&terr=TW&lang=TC`}
        height="100"
        frameBorder="0"
      />
    </div>
    </div>
    <style jsx>{`
      div.dialog {
        position: absolute;
        bottom: -300px;
        left: 0;
        width: 100%;
        max-width: 375px;
        background-color: blue;
        border-radius: 30px;
        transition: all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
      }
      div.content {
        position: relative;
        top: 100px;
        text-align: center;
        font-size: 24px;
        height: 120px;
        width: 100%;
        padding: 10px 30px;
      }
      div.button-wrapper {
        position: absolute;
        padding: 0 30px;
        width: 100%;
        transition: all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
      }
      div.start-button {
        position: relative;
        height: 60px;
        width: 100%;
        overflow: hidden;
        border-radius: 157.5px;
      }
      div.fake-btn {
        height: 60px;
        width: 100%;
        line-height: 60px;
        text-align: center;
        background-color: red;
      }
      iframe {
        position: absolute;
        top: -1150px;
        left: -1630px;
        transform: scale(15);
        transform-origin: 0 0;
        opacity: 0.2;
      }
    `}</style>
  </div>
);
