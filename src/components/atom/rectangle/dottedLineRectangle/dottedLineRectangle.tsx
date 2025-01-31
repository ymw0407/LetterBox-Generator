import { JSX } from "solid-js/jsx-runtime";
import * as styles from "./dottedLineRectangle.css";

export interface DottedLineRectangleProps {
  children?: JSX.Element;
}

export const DottedLineRectangle = (props: DottedLineRectangleProps) => {
  return <div class={styles.dottedLineRectangle}>{props.children}</div>;
};
