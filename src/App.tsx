import * as React from "react";
import TimePicker from "./timePicker/timepicker";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TimePicker hour={4} minute={10} />
    </div>
  );
}
