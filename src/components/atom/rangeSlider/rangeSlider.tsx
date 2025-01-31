import { Accessor, Setter } from "solid-js";
import * as styles from "./rangeSlider.css";
import { themeVars } from "@styles/theme/themeContract.css";

export interface RangeSliderProps {
  getInput: Accessor<number>;
  setInput: Setter<number>;
}

export const RangeSlider = (props: RangeSliderProps) => {
  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={props.getInput()}
        class={styles.rangeSlider}
        onInput={(e) => {
          props.setInput(Number(e.target.value));
        }}
        style={{
          background: `linear-gradient(to right, ${
            themeVars.color.primary[10]
          } 0%, ${
            themeVars.color.primary[10]
          } ${props.getInput()}%, #fff ${props.getInput()}%, #fff 100%)`,
        }}
      />
      {props.getInput()}
    </div>
  );
};
