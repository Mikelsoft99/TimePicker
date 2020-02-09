import * as React from "react";

interface Props {
  selected: number;
  onSelect: (n: number) => void;
}

export class HourPicker extends React.Component<Props, {}> {
  constructor(p) {
    super(p);
  }

  hours: number[] = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23
  ];

  render() {
    return (
      <div className="tp_hour_wrapper">
        <div className="tp_hour_scrollwrapper">
          {this.hours.map((h, i) => {
            let s: boolean = false;
            if (this.props.selected === h) {
              s = true;
            }
            return (
              <HourItem
                key={i}
                text={h}
                selected={s}
                onClick={this.props.onSelect}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

interface ItemProps {
  text: number;
  selected: boolean;
  onClick: (n: number) => void;
}
class HourItem extends React.Component<ItemProps, {}> {
  constructor(p) {
    super(p);
    this.click = this.click.bind(this);
  }

  click() {
    this.props.onClick(this.props.text);
  }

  render() {
    let css = this.props.selected ? "selected" : "";

    return (
      <div className={"tp_hour_item " + css} onClick={this.click}>
        {this.props.text}
      </div>
    );
  }
}
