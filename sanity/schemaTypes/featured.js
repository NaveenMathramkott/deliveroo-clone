import {defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'featured menu categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'featured category name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'short description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
  ],
})
