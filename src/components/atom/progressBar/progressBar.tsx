import { Accessor } from "solid-js";
import * as styles from "./progressBar.css";

export interface ProgressBarProps {
  borderRadius: string;
  getPercent: Accessor<number>;
}

export const ProgressBar = (props: ProgressBarProps) => {
  return (
    <div
      class={styles.progressBarContainer}
      style={{
        "border-radius": props.borderRadius,
        "background-position": `${100 - props.getPercent()}%`,
      }}
    ></div>
  );
};
