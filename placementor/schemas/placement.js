import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'placement',
  title: 'Placement',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
      
    }),
    defineField({
      name: 'company_name',
      title: 'company_name',
      type: 'string',
    }),
    // defineField({
    //   name: 'logo',
    //   title: 'logo',
    //   type: 'string',
    //   //this one is for github link during the development phase not tobe used later
    // }),
    defineField({
      name: 'role',
      title: 'role',
      type: 'string',
    }),
    defineField({
      name: 'eligible_branch',
      title: 'eligible_branch',
      type: 'string',
    }),
    defineField({
      name: 'CGPA',
      title: 'CGPA',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'year',
      type: 'number',
    }),
    defineField({
      name: 'selection_process',
      title: 'selection_process',
      type: 'object',
      fields: [
        {
          name: 'step1',
          title: 'round1',
          type: 'string',
        },
        {
          name: 'step2',
          title: 'group discussion',
          type: 'string',
        },
        {
          name: 'step3',
          title: 'interview round',
          type: 'string',
        }
      ]
    }),
    defineField({
      name: 'interview_round',
      title: 'interview rounds',
      type: 'object',
      fields: [
        {
          name: 'round1',
          title: 'round1',
          type: 'string',
          initialValue: '',
        },
        {
          name: 'round2',
          title: 'round2',
          type: 'string',
          initialValue: '',
        },
        {
          name: 'round3',
          title: 'round3',
          type: 'string',
          initialValue: '',
        },
        {
          name: 'round4',
          title: 'round4',
          type: 'string',
          initialValue: '',
        },
      ]
    }),
    defineField({
      name: 'influence_of',
      title: 'influence_of',
      type: 'object',
      fields: [
        {
          name: 'PORs',
          title: 'PORs',
          type: 'string',
        },
        {
          name: 'projects',
          title: 'projects',
          type: 'string',
        },
      ]
    }),
    defineField({
      name: 'takeaways',
      title: 'takeaways',
      type: 'string',
    }),
    defineField({
      name: 'test_series',
      title: 'Test series',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "selected",
      title: 'Selected Candidates',
      type: 'array',
      of: [
        {
          type: 'string',
          initialValue: '',
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})