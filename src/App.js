import { useState } from "react";
import DatePersian from "./component/DatePersian";
import DailyPlay from "./component/DailyPlay";
import data from "./component/data/data";

import "./Style.css";
function App() {
  const [mydata, setMydata] = useState(data);
  const hanldesetdata = (input) => {};
  return (
    <>
      <DatePersian setdata={hanldesetdata} />
      <DailyPlay data={mydata} />
    </>
  );
}

export default App;
