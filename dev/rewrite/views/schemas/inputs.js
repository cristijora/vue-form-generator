import {validators} from "../../../../src";

export default {
    fields: [
        {
            type: "input",
            inputType: "text",
            model: "simple",
            label: "Simple text input"
        },
        {
            type: "input",
            inputType: "text",
            model: "withHelp",
            placeholder: "Placeholder text",
            label: "With help and placeholder",
            hint: "A block of help text that breaks onto a new line."
        },

        {
            type: "input",
            inputType: "password",
            model: "password",
            label: "Password with validation",
            required: true,
            placeholder: "Password",
            min: 6,
            validator: validators.string
        },
        {
            type: "input",
            inputType: "email",
            label: "Email marked as important",
            model: "email",
            required: true,
            featured: true,
            placeholder: "Email",
            validator: validators.email
        },
        {
            type: "input",
            inputType: "text",
            label: "Disabled input",
            model: "disabled",
            disabled: true,
        },
        {
            type: "input",
            inputType: "hidden",
            label: "Hidden input",
            model: "hidden",
        },
        {
            type: "input",
            inputType: "number",
            label: "Number",
            model: "number",
        },
        {
            type: "input",
            inputType: "range",
            label: "Range with min and max",
            model: "range",
            help: "This is a help hint",
            min: 1,
            max: 10
        },
        {
            type: "input",
            inputType: "color",
            model: "color",
            label: "Pick a color",
        }

    ]
}