import type { Meta, StoryObj } from "storybook-solidjs";
import { BrandIcon } from "./brandIcon";

const meta: Meta<typeof BrandIcon> = {
  title: "Components/Atom/Icon/BrandIcon",
  component: BrandIcon,
  tags: ["autodocs"],

  argTypes: {
    brand: {
      options: ["instagram", "youtube", undefined],
      control: {
        type: "select",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof BrandIcon>;

export const Example: Story = {
  args: {
    brand: "instagram",
  },
};
