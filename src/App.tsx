import * as React from "react";
import "react-datepicker";
import TimePicker from "./timePicker/timepicker";
import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";

import ReactDatePicker from "react-datepicker";

interface AppState {
  start: Date;
}

export default class App extends React.Component<{}, AppState> {
  constructor(p) {
    super(p);
    this.state = {
      start: new Date()
    };

    this.changeStart = this.changeStart.bind(this);
  }

  changeStart(d: Date) {
    console.log("click start date");
    this.setState({ start: d });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <TimePicker OnChange={this.changeStart} Time={this.state.start} />
        <div className="divider" />
        <div>{this.state.start.toLocaleString()}</div>
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
}
