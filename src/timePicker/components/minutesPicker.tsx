import * as React from "react";

function minutesPicker(selected: number) {
  let min: number[] = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  return (
    <div className="tp_min_wrapper">
      {min.map((x, i) => {
        let c: boolean = false;
        if (selected === x) {
          c = true;
        }
        if (i % 3 === 0) {
          return (
            <>
              <div className="tp_min_linebreak" />
              {minute(x, c)}
            </>
          );
        } else {
          return minute(x, c);
        }
      })}
    </div>
  );
}

function minute(text: string | number, selected?: boolean) {
  let css: string = selected ? "selected" : "";
  return <div className={"tp_min_item " + css}>{text}</div>;
}

export default minutesPicker;
