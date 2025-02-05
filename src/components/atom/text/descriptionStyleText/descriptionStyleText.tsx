import * as styles from "./descriptionStyleText.css";

export interface DescriptionStyleTextProps {
  text: string;
}

export const DescriptionStyleText = (props: DescriptionStyleTextProps) => {
  return <span class={styles.descriptionStyleText}>{props.text}</span>;
};
