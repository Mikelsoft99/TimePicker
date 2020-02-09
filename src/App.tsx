import * as React from "react";
import "react-datepicker";
import TimePicker from "./timePicker/timepicker";
import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";

import ReactDatePicker from "react-datepicker";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TimePicker hour={4} minute={10} />
      <div className="divider" />
      <ReactDatePicker
        onChange={e => alert(e)}
        showTimeSelect
        showTimeSelectOnly
        selected={new Date()}
        dateFormat="h:mm aa"
        timeIntervals={5}
      />
    </div>
  );
}
