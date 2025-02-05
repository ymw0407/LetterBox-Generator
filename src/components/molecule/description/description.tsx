import {
  brandNameForDescription,
  brandNameLink,
  descriptionCommentList,
  mailForDescription,
  mailLink,
  serviceNameForDescription,
} from "@/constant/description";
import { DescriptionStyleText } from "@components/atom/text";
import * as styles from "./description.css";

export const Description = () => {
  return (
    <div>
      <p class={styles.pText}>
        <DescriptionStyleText text={descriptionCommentList[0]} />
        <span class={styles.serviceNameText}>{serviceNameForDescription}</span>
        <DescriptionStyleText text={descriptionCommentList[1]} />
      </p>
      <p class={styles.pText}>
        <DescriptionStyleText text={descriptionCommentList[2]} />
      </p>
      <p class={styles.pText}>
        <DescriptionStyleText text={descriptionCommentList[3]} />
        <a class={styles.aText} href={brandNameLink} target="_blank">
          {brandNameForDescription}
        </a>
        <DescriptionStyleText text={descriptionCommentList[4]} />
        <a class={styles.aText} href={`mailto:${mailLink}`} target="_blank">
          {mailForDescription}
        </a>
        <DescriptionStyleText text={descriptionCommentList[5]} />
      </p>
    </div>
  );
};
