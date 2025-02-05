import type { Meta, StoryObj } from "storybook-solidjs";
import { Description } from "./description";

const meta: Meta<typeof Description> = {
  title: "Components/Molecule/Description",
  component: Description,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Description>;

export const Example: Story = {
  args: {},
};
