import type { Meta, StoryObj } from "storybook-solidjs";
import { Selector } from "./selector";

const meta: Meta<typeof Selector> = {
  title: "Components/Molecule/Selector",
  component: Selector,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Selector>;

export const Example: Story = {
  args: {
    title: "X축",
    value: <div>test</div>,
  },
};
