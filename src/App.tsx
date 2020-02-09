import * as React from "react";
import "react-datepicker";
import TimePicker from "./timePicker/timepicker";
import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";

import ReactDatePicker from "react-datepicker";

interface AppState {
  hour: number;
  minute: number;
}

export default class App extends React.Component<{}, AppState> {
  constructor(p) {
    super(p);
    this.state = {
      hour: 4,
      minute: 10
    };

    this.minuteChange = this.minuteChange.bind(this);
    this.hourChange = this.hourChange.bind(this);
  }

  minuteChange(n: number) {
    console.log("click min");
    this.setState({ minute: n });
  }
  hourChange(n: number) {
    console.log("click hour");
    this.setState({ hour: n });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <TimePicker
          hour={this.state.hour}
          OnSelectHour={this.hourChange}
          minute={this.state.minute}
          OnSelectMin={this.minuteChange}
        />
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
