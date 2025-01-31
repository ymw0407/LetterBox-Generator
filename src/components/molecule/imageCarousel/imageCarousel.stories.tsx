import type { Meta, StoryObj } from "storybook-solidjs";
import { ImageCarousel } from "./imageCarousel";

const meta: Meta<typeof ImageCarousel> = {
  title: "Components/Molecule/ImageCarousel",
  component: ImageCarousel,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ImageCarousel>;

export const Example: Story = {
  args: {},
};
