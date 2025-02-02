import { H1StyleText } from "@components/atom/text";
import { Selector } from "@components/molecule/selector/selector";

import {
  SelectorList,
  SelectorListProps,
  SelectorListType,
} from "@components/molecule/selectorList/selectorList";
import { themeVars } from "@styles/theme/themeContract.css";
import { createSignal, Setter } from "solid-js";

export interface CommonOptionProps {
  title: string;
  selectorList: SelectorListType<number>[];
  setValue: Setter<number>;
}

export const CommonOption = (props: CommonOptionProps) => {
  const [selectedIndex, setSelectedIndex] = createSignal<number>(0);

  const commonComponent = () => {
    return (
      <H1StyleText
        text={`${props.selectorList[selectedIndex()].key}`}
        fontWeight={700}
        color={themeVars.color.neutral.black}
      />
    );
  };

  const selectorListProps: SelectorListProps<number> = {
    selectorList: props.selectorList,
    getSelectedIndex: selectedIndex,
    setSelectedIndex: setSelectedIndex,
    setValue: props.setValue,
    isIconEnable: false,
  };

  return (
    <div>
      <Selector title={props.title} value={commonComponent()}>
        <SelectorList {...selectorListProps} />
      </Selector>
    </div>
  );
};
