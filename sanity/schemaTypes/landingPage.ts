import { defineType } from "sanity";

export const landingPage = defineType({
    name: 'landingPage',
    type: 'document',
    title: 'Pages',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'subtitle',
        type: 'string',
        title: 'Subtitle',
      },
    ],
  })