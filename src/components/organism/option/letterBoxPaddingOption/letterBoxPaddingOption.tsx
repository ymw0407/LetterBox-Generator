import { RangeSlider } from "@components/molecule/rangeSlider/rangeSlider";
import { Selector } from "@components/molecule/selector/selector";
import { Accessor, Setter } from "solid-js";
import * as styles from "./letterBoxPaddingOption.css";

export interface LetterBoxPaddingOptionProps {
  title: string;
  getValue: Accessor<number>;
  setValue: Setter<number>;
}

export const LetterBoxPaddingOption = (props: LetterBoxPaddingOptionProps) => {
  const ValueComponent = () => {
    return (
      <div style={{ "margin-right": "0.5rem" }} class={styles.valueComponent}>
        {`${props.getValue()}%`}
      </div>
    );
  };

  return (
    <div>
      <Selector title={props.title} value={ValueComponent()}>
        <div style={{ "margin-left": "0.5rem", "margin-right": "0.5rem" }}>
          <RangeSlider
            title="비율"
            getInput={props.getValue}
            setInput={props.setValue}
          />
        </div>
      </Selector>
    </div>
  );
};
