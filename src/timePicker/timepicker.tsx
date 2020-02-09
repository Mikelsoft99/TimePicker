import * as React from "react";
import { MinutesPicker } from "./components/minutesPicker";
import { HourPicker } from "./components/hourPicker";
import moment from "moment";

interface Props {
  hour: number;
  minute: number;
  OnSelectHour: (n: number) => void;
  OnSelectMin: (n: number) => void;
}
interface State {}

class TimePickerInput extends React.Component<Props, State> {
  constructor(p) {
    super(p);
  }

  render() {
    return (
      <div className="tp">
        <div className="tp_hour">
          <HourPicker
            selected={this.props.hour}
            onSelect={this.props.OnSelectHour}
          />
        </div>
        <div className="tp_min">
          <MinutesPicker
            selected={this.props.minute}
            onSelect={this.props.OnSelectMin}
          />
        </div>
      </div>
    );
  }
}

// wrapper for date logic
interface ITPProps {
  Time: Date;
  OnChange: (d: Date) => void;
}
export class TimePicker extends React.Component<ITPProps, {}> {
  constructor(p) {
    super(p);

    this.changeMin = this.changeMin.bind(this);
    this.changeHour = this.changeHour.bind(this);
  }

  changeMin(n: number) {
    let newTime: Date = moment(this.props.Time)
      .minute(n)
      .second(0)
      .toDate();
    this.props.OnChange(newTime);
  }
  changeHour(n: number) {
    let newTime: Date = moment(this.props.Time)
      .hour(n)
      .second(0)
      .toDate();
    this.props.OnChange(newTime);
  }

  render() {
    let hour = moment(this.props.Time).hour();
    let min = moment(this.props.Time).minute();

    return (
      <TimePickerInput
        hour={hour}
        minute={min}
        OnSelectHour={this.changeHour}
        OnSelectMin={this.changeMin}
      />
    );
  }
}

export default TimePicker;
