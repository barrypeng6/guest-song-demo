import React from "react";

export default ({ answer }) => (
  <div>
    <iframe
      src={`https://widget.kkbox.com/v1/?id=${answer}&type=song&terr=TW&lang=TC`}
      height="100"
      frameBorder="0"
      // allow="autoplay"
    />
    <style jsx>{`
      div {
        position: relative;
        border: 1px solid black;
        height: 35px;
        width: 195px;
        overflow: hidden;
        margin: 0 auto;
      }
      iframe {
        position: absolute;
        top: -60px;
        left: -100px;
      }
    `}</style>
  </div>
);
