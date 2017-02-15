import {validators} from "../../../../src";

let languages = [
    {
        "name": "Vue.js",
        "language": "JavaScript"
    },
    {
        "name": "Rails",
        "language": "Ruby"
    },
    {
        "name": "Sinatra",
        "language": "Ruby"
    }
];

export default {
    fields: [
        {
            type: "select",
            label: "Simple select",
            model: "simple",
            values: [
                "Personal",
                "Business"
            ]
        },
        {
            type: "select",
            label: "Language",
            model: "withObjects",
            required: true,
            values() {
                return [
                    {id: "en-GB", name: "English (GB)"},
                    {id: "en-US", name: "English (US)"},
                    {id: "de", name: "German"},
                    {id: "it", name: "Italic"},
                    {id: "fr", name: "French"}
                ]
            },
            visible(model){
                return model && model.dynamic != "Business";
            },
            validator: validators.required
        },
        {
            type: "select",
            label: "Changes the visibility of another select",
            model: "dynamic",
            values: [
                "Personal",
                "Business"
            ]
        },
        {
            type: "label",
            label: "--Vue-multiselect-- (supports all props from the original component)",
            styleClasses: "alert alert-info"
        },
        {
            type: "vueMultiSelect",
            multiSelect: true,
            label: "Skills",
            model: "vueMultiSelect",
            values: ["Javascript", "VueJS", "CSS3", "HTML5"]
        },
        {
            type: "vueMultiSelect",
            model: "objectSelection",
            label: "Libraries",
            placeholder: "Object selection",
            required: true,
            multiSelect: false,
            selectOptions: {
                key: "name",
                label: "name",
                searchable: false,
                closeOnSelect: false,
                allowEmpty: false
            },
            values: languages,
            validator: validators.required,
        },
        {
            type: "vueMultiSelect",
            model: "library",
            label: "Libraries",
            placeholder: "Select with search and tagging",
            required: true,
            multiSelect: true,
            validator: validators.required,
            selectOptions: {
                key: "code",
                label: "name",
                searchable: true,
                taggable: true,
                tagPlaceholder: "Add this as new tag",
                onNewTag: function (newTag, id, options, value) {
                    const tag = {
                        name: newTag,
                        // Just for example needs as we use Array of Objects that should have other properties filled.
                        // For primitive values you can simply push the tag into options and selected arrays.
                        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
                    }
                    options.push(tag);
                    value.push(tag);
                }
            },
            onChanged: function (model, newVal, oldVal, field) {
                console.log('@tag: ', newVal);
            },
            values: [
                {
                    "name": "Javascript",
                    "code": "js"
                },
                {
                    "name": "Monterail",
                    "code": "pl"
                },
                {
                    "name": "Open Source",
                    "code": "os"
                },
                {
                    "name": "Vue.js",
                    "code": "vu"
                }
            ]
        },
        {
            type: "label",
            label: "--jQuery selectEx--",
            styleClasses: "alert alert-info"
        },
        {
            type: "selectEx",
            label: "Skills",
            model: "selectEx",
            multiple: true,
            multi: true,
            selectOptions: {
                liveSearch: true,
                maxOptions: 3,
                size: 4,
                selectedTextFormat: "count > 3"
            },
            values: [
                "HTML5",
                "Javascript",
                "CSS3",
                "CoffeeScript",
                "AngularJS",
                "ReactJS",
                "VueJS"
            ]
        }
    ],

}