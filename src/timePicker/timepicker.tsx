import * as React from "react";
import { MinutesPicker } from "./components/minutesPicker";
import { HourPicker } from "./components/hourPicker";

interface Props {
  hour: number;
  minute: number;
  OnSelectHour: (n: number) => void;
  OnSelectMin: (n: number) => void;
}

interface State {}

export class TimePicker extends React.Component<Props, State> {
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

export default TimePicker;
