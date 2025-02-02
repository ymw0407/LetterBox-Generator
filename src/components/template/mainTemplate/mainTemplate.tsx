import {
  DescriptionStyleText,
  DescriptionStyleTextProps,
  TitleStyleText,
  TitleStyleTextProps,
} from "@components/atom/text";
import * as styles from "./mainTemplate.css";

export interface MainTemplateProps {
  title: TitleStyleTextProps;
  description: DescriptionStyleTextProps;
}

export const MainTemplate = (props: MainTemplateProps) => {
  return (
    <div>
      <div class={styles.titleContainer}>
        <TitleStyleText {...props.title} />
      </div>
      <DescriptionStyleText {...props.description} />
    </div>
  );
};
