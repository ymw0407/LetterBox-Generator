import {
  DescriptionStyleTextProps,
  TitleStyleText,
  TitleStyleTextProps,
} from "@components/atom/text";
import * as styles from "./mainTemplate.css";
import { Description } from "@components/molecule/description/description";

export interface MainTemplateProps {
  title: TitleStyleTextProps;
  clickTitleFunction?: () => void;
  description: DescriptionStyleTextProps;
}

export const MainTemplate = (props: MainTemplateProps) => {
  return (
    <div>
      <div
        class={styles.titleContainer}
        onClick={() => {
          if (props.clickTitleFunction) {
            props.clickTitleFunction();
          }
        }}
      >
        <TitleStyleText {...props.title} />
      </div>
      <Description />
    </div>
  );
};
