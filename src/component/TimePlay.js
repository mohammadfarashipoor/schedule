import React from "react";

function TimePlay(props) {
  const playtime = (props.width * 150) / props.runtime;
  return (
    <div>
      <div className="white-bg"></div>
      <div className="red-bg" style={{ width: playtime }}></div>
    </div>
  );
}

export default TimePlay;
