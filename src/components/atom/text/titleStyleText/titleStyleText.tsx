import * as styles from "./titleStyleText.css";

export interface TitleStyleTextProps {
  text: string;
}

export const TitleStyleText = (props: TitleStyleTextProps) => {
  return <h1 class={styles.titleStyleText}> {props.text} </h1>;
};
