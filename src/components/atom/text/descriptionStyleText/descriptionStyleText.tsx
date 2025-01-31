import * as styles from "./descriptionStyleText.css";

export interface DescriptionStyleTextProps {
  text: string;
}

export const DescriptionStyleText = (props: DescriptionStyleTextProps) => {
  return <p class={styles.descriptionStyleText}>{props.text}</p>;
};
