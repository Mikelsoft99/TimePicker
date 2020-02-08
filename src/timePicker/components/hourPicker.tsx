import * as React from "react";

function hourPicker(selected: number) {
  let hours: number[] = [
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

  return (
    <div className="tp_hour_wrapper">
      <div className="tp_hour_scrollwrapper">
        {hours.map((h, i) => {
          let s: boolean = false;
          if (selected === h) {
            s = true;
          }
          return hourItem(h, s);
        })}
      </div>
    </div>
  );
}

function hourItem(text: any, selected: boolean) {
  let css = selected ? "selected" : "";

  return <div className={"tp_hour_item " + css}>{text}</div>;
}

export default hourPicker;
