import { H1StyleText } from "@components/atom/text";
import { Selector } from "@components/molecule/selector/selector";

import {
  RatioValueType,
  SelectorList,
  SelectorListProps,
  SelectorListType,
} from "@components/molecule/selectorList/selectorList";
import { themeVars } from "@styles/theme/themeContract.css";
import { Accessor, createSignal, Setter } from "solid-js";

export interface ImageRatioOptionProps {
  title: string;
  selectorList: SelectorListType<RatioValueType>[];
  getValue: Accessor<RatioValueType>;
  setValue: Setter<RatioValueType>;
}

export const ImageRatioOption = (props: ImageRatioOptionProps) => {
  const [selectedIndex, setSelectedIndex] = createSignal<number>(-1);

  const ratioValueComponent = () => {
    return (
      <H1StyleText
        text={`${props.getValue().x} : ${props.getValue().y}`}
        fontWeight={700}
        color={themeVars.color.neutral.black}
      />
    );
  };

  const selectorListProps: SelectorListProps<RatioValueType> = {
    selectorList: props.selectorList,
    getSelectedIndex: selectedIndex,
    setSelectedIndex: setSelectedIndex,
    setValue: props.setValue,
    isIconEnable: true,
  };

  return (
    <div>
      <Selector title={props.title} value={ratioValueComponent()}>
        <SelectorList {...selectorListProps} />
      </Selector>
    </div>
  );
};
