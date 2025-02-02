import { JSX } from "solid-js/jsx-runtime";
import * as styles from "./dottedLineRectangle.css";

export interface DottedLineRectangleProps {
  children?: JSX.Element;
  style?: JSX.CSSProperties;
}

export const DottedLineRectangle = (props: DottedLineRectangleProps) => {
  return (
    <div
      class={styles.dottedLineRectangle}
      draggable={false}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
