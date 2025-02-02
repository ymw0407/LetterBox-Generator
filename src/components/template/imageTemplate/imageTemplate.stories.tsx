import type { Meta, StoryObj } from "storybook-solidjs";
import { ImageTemplate } from "./imageTemplate";
import { createSignal } from "solid-js";
import { ImageInfo } from "@/types/imageInfoType";
import { RatioValueType } from "@components/molecule/selectorList/selectorList";

const meta: Meta<typeof ImageTemplate> = {
  title: "Components/Template/ImageTemplate",
  component: ImageTemplate,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ImageTemplate>;

const [imageInfoList, setImageInfoList] = createSignal<ImageInfo[]>([]);
const [getImageRatioOption] = createSignal<RatioValueType>({ x: 0, y: 0 });
const [getLetterBoxStyleOption] = createSignal<number>(0);
const [getLetterBoxPaddingOption] = createSignal<number>(0);

export const Example: Story = {
  args: {
    getImageInfoList: imageInfoList,
    setImageInfoList: setImageInfoList,

    getImageRatioOption,

    getLetterBoxStyleOption,

    getLetterBoxPaddingOption,
  },
};
