import { onMount, Setter } from "solid-js";
import * as styles from "./errorToast.css";
import { IoCloseCircle } from "solid-icons/io";
import { Portal } from "solid-js/web";

export interface ErrorToastProps {
  setToastOn: Setter<boolean>;

  title: string;
  description: string;
  sec: number;
}

export const ErrorToast = (props: ErrorToastProps) => {
  onMount(() => {
    const timer = setTimeout(() => {
      props.setToastOn(false);
    }, props.sec * 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Portal>
      <div class={styles.errorToastContainer}>
        <div class={styles.iconContainer}>
          <IoCloseCircle class={styles.icon} />
        </div>
        <div class={styles.messageContainer}>
          <div>
            <div class={styles.title}>{props.title}</div>
            <div class={styles.description}>{props.description}</div>
          </div>
        </div>
      </div>
    </Portal>
  );
};
