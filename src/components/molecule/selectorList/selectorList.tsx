import {
  Accessor,
  createSignal,
  For,
  JSX,
  onMount,
  Setter,
  Show,
} from "solid-js";
import * as styles from "./selectorList.css";
import { BrandIcon, BrandIconProps } from "@components/atom/icon";
import { H1StyleText } from "@components/atom/text";
import { themeVars } from "@styles/theme/themeContract.css";

export type SelectorValueType = RatioValueType | number | string;

export interface SelectorListProps<T extends SelectorValueType> {
  selectorList: SelectorListType<T>[];
  getSelectedIndex: Accessor<number>;
  setSelectedIndex: Setter<number>;
  setValue: Setter<T>;
  isIconEnable: boolean;
}

export interface SelectorListType<T> {
  icon?: BrandIconProps;
  key: string;
  value: T;
  component: JSX.Element;
}

export interface RatioValueType {
  x: number;
  y: number;
}

export const SelectorList = <T extends SelectorValueType>(
  props: SelectorListProps<T>
) => {
  const [show, setShow] = createSignal(false);

  onMount(() => {
    setShow(true);
  });

  return (
    <div class={show() ? styles.fadeInClass : ""}>
      <div class={styles.selectorList}>
        <For each={props.selectorList}>
          {(selector, index) => {
            let selectorContainerCss: JSX.CSSProperties = {};
            if (index() === 0) {
              selectorContainerCss = {
                "border-top-left-radius": "4px",
                "border-top-right-radius": "4px",
              };
            } else if (index() === props.selectorList.length - 1) {
              selectorContainerCss = {
                "border-bottom-left-radius": "4px",
                "border-bottom-right-radius": "4px",
              };
            }

            return (
              <div
                class={
                  props.getSelectedIndex() == index()
                    ? styles.selectedSelectorContainer
                    : styles.selectorContainer
                }
                style={selectorContainerCss}
                onclick={() => {
                  props.setSelectedIndex(index());
                  props.setValue(() => selector.value);
                }}
              >
                <div style={{ display: "flex", "align-items": "center" }}>
                  <Show when={props.isIconEnable}>
                    <div class={styles.brandIcon}>
                      <BrandIcon
                        brand={selector.icon ? selector.icon.brand : undefined}
                      />
                    </div>
                  </Show>
                  <H1StyleText
                    text={selector.key}
                    fontWeight={300}
                    color={themeVars.color.neutral.black}
                  />
                </div>
                {selector.component}
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
};
