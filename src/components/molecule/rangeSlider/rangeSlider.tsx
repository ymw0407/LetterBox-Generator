import { Accessor, createSignal, onMount, Setter } from "solid-js";
import * as styles from "./rangeSlider.css";
import { themeVars } from "@styles/theme/themeContract.css";
import { H1StyleText } from "@components/atom/text";

export interface RangeSliderProps {
  title: string;

  getInput: Accessor<number>;
  setInput: Setter<number>;
}

export const RangeSlider = (props: RangeSliderProps) => {
  const [show, setShow] = createSignal(false);

  onMount(() => {
    setShow(true);
  });

  return (
    <div class={show() ? styles.fadeInClass : ""}>
      <div class={styles.rangeSliderContainer}>
        <div class={styles.titleContainer}>
          <H1StyleText
            text={props.title}
            fontWeight={500}
            color={themeVars.color.neutral.black}
          />
        </div>
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
            background: `linear-gradient(to right, 
          ${themeVars.color.primary[60]} 0%, 
          ${themeVars.color.primary[60]} ${props.getInput()}%, 
          ${themeVars.color.primary[80]} ${props.getInput()}%, 
          ${themeVars.color.primary[80]} 100%)`,
          }}
        />

        <div class={styles.rangeSliderValueContainer}>
          <div class={styles.rangeSliderValue}>{`${props.getInput()}%`}</div>
        </div>
      </div>
    </div>
  );
};
