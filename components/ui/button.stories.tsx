import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button"

import { action } from "@storybook/addon-actions"

const meta: Meta<typeof Button> = {
    title: "Components/ui/button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
        layout: "centered"
    },
    argTypes: {
        variant: {
            control: "select",
            description: "Button variants",
            options: [
                "default",
                "destructive",
                "outline",
                "ghost",
                "secondary",
                "link"
            ]
        },
        size:{
            control:"select",
            description:"Select size",
            options:[
                "default",
                "lm",
                "lg",
                "icon"
            ]
        }
    }
};

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "default",
        size: "sm",
        disabled: false,
        onClick: action("default click"),
        children: "Default button",
        className: "shadow-lg"
    }
}

export const Destructive: Story = {
    args: {
        variant: "destructive",
        size: "lg",
        disabled: false,
        onClick: action("destructive click"),
        children: "Default button",
        className: "shadow-lg"
    }
}
export const Outline: Story = {
    args: {
        variant: "outline",
        size: "sm",
        disabled: false,
        onClick: action("default click"),
        children: "Outline button",
        className: "shadow-lg"
    }
}

export const Secondary: Story = {
    args: {
        variant: "secondary",
        size: "sm",
        disabled: false,
        onClick: action("default click"),
        children: "Secondary button",
        className: "shadow-lg"
    }
}

export const Ghost: Story = {
    args: {
        variant: "ghost",
        size: "sm",
        disabled: false,
        onClick: action("default click"),
        children: "Ghost button",
        className: "shadow-lg"
    }
}

export const Link: Story = {
    args: {
        variant: "link",
        size: "lg",
        disabled: false,
        onClick: action("link click"),
        children: "Link button",
        className: "shadow-lg"
    }
}