import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Content'
    },
    {
      name: 'meta',
      title: 'Meta'
    }
  ],
  fields: [
    defineField({
      group: 'meta',
      name: 'meta_title',
      title: 'Meta Title',
      type: 'string',
    }),
    defineField({
      group: 'content',
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      group: 'meta',
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      group: 'meta',
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      group: 'content',
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      group: 'content',
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      group: 'content',
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      group: 'content',
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
