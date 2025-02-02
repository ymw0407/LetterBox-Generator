import type { Meta, StoryObj } from "storybook-solidjs";
import { OptionsTemplate } from "./optionsTemplate";
import { createSignal } from "solid-js";
import { RatioValueType } from "@components/molecule/selectorList/selectorList";

const meta: Meta<typeof OptionsTemplate> = {
  title: "Components/Template/OptionsTemplate",
  component: OptionsTemplate,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof OptionsTemplate>;
const [letterBoxStyleOption, setLetterBoxStyleOption] = createSignal<number>(0);
const [imageRatioOption, setimageRatioOption] = createSignal<RatioValueType>({
  x: 4,
  y: 3,
});
const [letterBoxPaddingOption, setLetterBoxPaddingOption] =
  createSignal<number>(0);

export const Example: Story = {
  args: {
    letterBoxStyleOption: {
      getValue: letterBoxStyleOption,
      setValue: setLetterBoxStyleOption,
    },
    imageRatioOption: {
      getValue: imageRatioOption,
      setValue: setimageRatioOption,
    },
    letterBoxPaddingOption: {
      getValue: letterBoxPaddingOption,
      setValue: setLetterBoxPaddingOption,
    },
  },
};
