import { IoChevronDown } from "solid-icons/io";
import { createSignal, JSX, Show } from "solid-js";
import * as styles from "./selector.css";
import { H1StyleText } from "@components/atom/text";
import { themeVars } from "@styles/theme/themeContract.css";

export interface SelectorProps {
  title: string;
  value: JSX.Element;

  children?: JSX.Element;
}

export const Selector = (props: SelectorProps) => {
  const [selected, setSelected] = createSignal<boolean>(false);

  const downIconClickHandler = () => {
    setSelected(!selected());
  };

  return (
    <div class={styles.selectorContainer}>
      <div class={styles.selector}>
        <div class={styles.titleConatiner}>
          <H1StyleText
            text={props.title}
            fontWeight={700}
            color={themeVars.color.neutral.white}
          />
        </div>
        <div
          class={styles.valueContainer}
          onclick={() => {
            downIconClickHandler();
          }}
        >
          {props.value}
          <IoChevronDown class={selected() ? styles.upIcon : styles.downIcon} />
        </div>
      </div>
      <Show when={props.children && selected()}>
        <div class={styles.selectorListConatiner}>{props.children}</div>
      </Show>
    </div>
  );
};
