import type { Meta, StoryObj } from "storybook-solidjs";
import { ImageCarousel } from "./imageCarousel";
import { createSignal } from "solid-js";
import { ImageInfo } from "@/types/imageInfoType";

const meta: Meta<typeof ImageCarousel> = {
  title: "Components/Organism/ImageCarousel",
  component: ImageCarousel,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ImageCarousel>;

const [imageInfoList] = createSignal<ImageInfo[]>([]);
const [getLetterBoxStyleOption] = createSignal<number>(0);
const [getLetterBoxPaddingOption] = createSignal<number>(0);

export const Example: Story = {
  args: {
    getImageInfoList: imageInfoList,
    getLetterBoxStyleOption,
    getLetterBoxPaddingOption,
  },
};
