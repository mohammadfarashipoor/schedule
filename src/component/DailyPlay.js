import React, { useEffect, useRef, useState } from "react";
import TimePlay from "./TimePlay";
import Icon from "./Icon";

function DailyPlay(props) {
  const nowtime = new Date();
  const hours = nowtime.getHours();
  const minute = nowtime.getMinutes();
  const scrollRef = useRef(<Icon />);
  const newlist = props.data;
  let colorply = "#ffff";

  useEffect(() => {
    scrollauto();
  }, []);

  const playtime = (item) => {
    const nxt =
      newlist[item.id + 1] === newlist.length
        ? newlist[0]
        : newlist[item.id + 1];
    const prv = newlist[item.id - 1];

    if (
      parseInt(item.hours) <= hours &&
      hours <=
        parseInt(item.hours) +
          Math.floor((item.Runtime + parseInt(item.minute)) / 60)
    ) {
      if (
        parseInt(prv.hours) * 60 + parseInt(prv.minute) < hours * 60 + minute &&
        hours * 60 + minute < parseInt(nxt.hours) * 60 + parseInt(nxt.minute) &&
        parseInt(item.hours) * 60 +
          parseInt(item.minute) +
          parseInt(item.Runtime) >
          hours * 60 + minute
      ) {
        return <Icon refs={scrollRef} />;
      }
    }
  };
  const timeplay = (item) => {
    const nxt =
      newlist[item.id + 1] === newlist.length
        ? newlist[0]
        : newlist[item.id + 1];
    const prv = newlist[item.id - 1];

    if (
      parseInt(item.hours) <= hours &&
      hours <=
        parseInt(item.hours) +
          Math.floor((item.Runtime + parseInt(item.minute)) / 60)
    ) {
      if (
        parseInt(prv.hours) * 60 + parseInt(prv.minute) < hours * 60 + minute &&
        hours * 60 + minute < parseInt(nxt.hours) * 60 + parseInt(nxt.minute) &&
        parseInt(item.hours) * 60 +
          parseInt(item.minute) +
          parseInt(item.Runtime) >
          hours * 60 + minute
      ) {
        colorply = "#f8163a";
        let playsign = minute - parseInt(item.minute);
        return <TimePlay width={playsign} runtime={item.Runtime} />;
      }
    }
    colorply = "#ffff";
  };

  const scrollauto = () => {
    scrollRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  return (
    <>
      <ul className="list-play">
        {props.data.map((item) => (
          <li key={item.id} className="item-play">
            <a href="!#">
              <div className="item-img">
                <img src={item.img} alt={item.title} />
                {timeplay(item)}
              </div>
              <div className="item-detial">
                <div style={{ color: colorply }}>
                  <div className="item-time">
                    {item.hours}:{item.minute}
                  </div>
                  <div className="item-title">{item.title}</div>
                </div>
                {playtime(item)}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DailyPlay;
