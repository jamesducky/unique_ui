import { Input } from "@components/ui/input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "text",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
  },
};

export const WithPlaceholder: Story = {
  args: {
    type: "text",
    placeholder: "Enter your name",
  },
};

export const Disabled: Story = {
  args: {
    type: "text",
    disabled: true,
    placeholder: "Disabled input",
  },
};

export const File: Story = {
  args: {
    type: "file",
  },
};

export const Small: Story = {
  args: {
    type: "text",
    placeholder: "Small input",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    type: "text",
    placeholder: "Large input",
    size: "lg",
  },
};

export const Outline: Story = {
  args: {
    type: "text",
    placeholder: "Outline input",
    variant: "outline",
  },
};

export const Filled: Story = {
  args: {
    type: "text",
    placeholder: "Filled input",
    variant: "filled",
  },
};
