import * as React from "react";
import minutesPicker from "./components/minutesPicker";
import hourPicker from "./components/hourPicker";

interface Props {
  hour: number;
  minute: number;
}

interface State {}

export class TimePicker extends React.Component<Props, State> {
  render() {
    return (
      <div className="tp">
        <div className="tp_hour">{hourPicker(this.props.hour)}</div>
        <div className="tp_min">{minutesPicker(this.props.minute)}</div>
      </div>
    );
  }
}

export default TimePicker;
