import { useState, useRef, useEffect } from "react";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
// import persian_fa from "react-date-object/locales/persian_fa"
// import e from "react-date-object/calendars/persian";
import IconRight from "./IconRight";
import IconLeft from "./IconLeft";
function DatePersian(props) {
  //   const date = new DateObject().convert(persian, persian_fa);
  const today = useRef();
  useEffect(() => {
    showtoday();
  }, []);
  const showtoday = () => {
    today.current.click();
  };
  // convert persian number to number
  function ctnp(string) {
    return string
      .replace(/[\u0660-\u0669]/g, function (c) {
        return c.charCodeAt(0) - 0x0660;
      })
      .replace(/[\u06f0-\u06f9]/g, function (c) {
        return c.charCodeAt(0) - 0x06f0;
      });
  }
  let dayweek;
  let arr = [];
  const dailyshow = () => {
    for (let i = 0; i < 15; i++) {
      dayweek = new DateObject({ calendar: persian }).add(i, "days").format();
      const arryday = dayweek.split("/");
      const days = [
        "یکشنبه",
        "دوشنبه",
        "سه شنبه",
        "چهارشنبه",
        "پنج شنبه",
        "جمعه",
        "شنبه"
      ];
      let day;
      if (new Date().getDay() + i > 6) {
        day = days[new Date().getDay() + i - 7];
      }
      if (new Date().getDay() + i > 13) {
        day = days[new Date().getDay() + i - 14];
      }
      if (new Date().getDay() + i <= 6) {
        day = days[new Date().getDay() + i];
      }

      const months = [
        "فروردين",
        "ارديبهشت",
        "خرداد",
        "تير",
        "مرداد",
        "شهريور",
        "مهر",
        "آبان",
        "آذر",
        "دي",
        "بهمن",
        "اسفند"
      ];
      let month = months[ctnp(arryday[1]) - 1];

      arr.push({
        id: i,
        day: day,
        month: month,
        date: ctnp(arryday[2])
      });
    }
  };
  dailyshow();

  const [item, setItem] = useState(0);
  const preitem = () => {
    if (item !== 0) {
      setItem(item - 1);
    }
    handleChange(arr[item].id);
    scrollToRef("right");
  };
  const nxtitem = () => {
    if (item !== 14) {
      setItem(item + 1);
    }
    handleChange(arr[item].id);
    scrollToRef("left");
  };
  const [style, setStyle] = useState("btn");
  const handleChange = (input) => {
    setStyle(input);
    scrollToRef();
    props.setdata(input);
  };
  const handleSet = (input) => {
    setItem(input);
  };
  const handleSelect = (input) => {
    if (style === input) return "btn2";
    else return "btn";
  };
  const myRef = useRef(null);
  const scrollToRef = (arrow) => {
    if (myRef !== null && arrow === "right") {
      myRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
    }
    if (item !== 0 && arrow === "left") {
      myRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="items">
        <button className="icon" onClick={preitem}>
          <IconRight />
        </button>
        <div className="List">
          {arr.map((items) => (
            <button
              key={items.id}
              onClick={() => {
                handleChange(items.id);
                handleSet(items.id);
              }}
              className="btn"
              id={handleSelect(items.id)}
              ref={handleSelect(items.id) === "btn2" ? myRef : null}
            >
              <div className="slide">
                <div className="day">{items.day}</div>
                <div className="detial">
                  <div className="date">{items.date}</div>
                  <div className="month">{items.month}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
        <button className="icon" onClick={nxtitem} ref={today}>
          <IconLeft />
        </button>
      </div>
    </>
  );
}

export default DatePersian;
