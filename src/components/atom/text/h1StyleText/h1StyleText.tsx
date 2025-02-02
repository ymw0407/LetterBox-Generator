import * as styles from "./h1StyleText.css";

export interface H1StyleTextProps {
  text: string;
  fontWeight: 300 | 500 | 700;
  color: string;
}

export const H1StyleText = (props: H1StyleTextProps) => {
  return (
    <h1
      class={styles.h1StyleText}
      style={{
        "font-weight": props.fontWeight,
        color: props.color,
      }}
    >
      {props.text}
    </h1>
  );
};
