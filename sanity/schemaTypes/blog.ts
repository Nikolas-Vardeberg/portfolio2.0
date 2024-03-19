import { defineType } from "sanity";

export const blog = defineType({
    name: 'blog',
    type: 'document',
    title: 'Prosjekter',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title of blog article',
      },
      {
        name: 'tags',
        type: 'array',
        of: [{type: "reference", to: [{type:"tag"}]}]
      },
      {
        name: "githubrepo",
        type: "string",
        title: "Github Repo link",
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug of your blog article',
        options: {
          source: 'title',
        },
      },
      {
        name: 'titleImage',
        type: 'image',
        title: 'Title Image',
      },
      {
        name: "gallery",
        title: "Gallery",
        type: "array",
        of: [{ type: "image",
        options: {
          hotspot: true
        }
      }]
      },
      {
        name: 'smallDescription',
        type: 'text',
        title: 'Small Description',
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
          {
            type: 'block',
          },
        ],
      },
      
    ],
  })