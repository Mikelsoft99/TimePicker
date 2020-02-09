import * as React from "react";

interface Props {
  selected: number;
  onSelect: (n: number) => void;
}
export class MinutesPicker extends React.Component<Props, {}> {
  constructor(p) {
    super(p);
  }

  min: number[] = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  render() {
    return (
      <div className="tp_min_wrapper">
        {this.min.map((x, i) => {
          let c: boolean = false;
          if (this.props.selected === x) {
            c = true;
          }
          if (i % 3 === 0) {
            return (
              <>
                <div className="tp_min_linebreak" />
                <Minute
                  key={i}
                  text={x}
                  selected={c}
                  onClick={this.props.onSelect}
                />
              </>
            );
          } else {
            return (
              <Minute
                key={i}
                text={x}
                selected={c}
                onClick={this.props.onSelect}
              />
            );
          }
        })}
      </div>
    );
  }
}
interface ItemProps {
  text: number;
  selected: boolean;
  onClick: (n: number) => void;
}

class Minute extends React.Component<ItemProps, {}> {
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
      <div className={"tp_min_item " + css} onClick={this.click}>
        {this.props.text}
      </div>
    );
  }
}
