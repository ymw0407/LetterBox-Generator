import * as styles from "./button.css";

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <div
      class={styles.button}
      onClick={() => {
        props.onClick();
      }}
    >
      <div class={styles.text}>{props.text}</div>
    </div>
  );
};
