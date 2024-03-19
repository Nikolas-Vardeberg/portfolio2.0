import { defineType } from "sanity";

export const tag = defineType({
    name: "tag",
    type: "document",
    fields: [
        {
            name: "name",
            type: "string"
        },
    ]
})