import { config, fields, collection } from '@keystatic/core';

const isProd = import.meta.env.PROD;

export default config({
  storage: isProd
    ? {
        kind: 'github',
        repo: {
          owner: 'kkmali',
          name: 'keystatic',
        },
      }
    : {
        kind: 'local',
      },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { data: 'yaml', contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        pubDate: fields.date({ label: 'Publication Date' }),
        updatedDate: fields.date({ label: 'Updated Date' }),
        image: fields.text({ label: 'Image URL' }),
        authorImage: fields.text({ label: 'Author Image URL' }),
        authorName: fields.text({ label: 'Author Name' }),
        content: fields.mdx({ label: 'Content' }),
      },
    }),
    pages: collection({
      label: 'Pages',
      slugField: 'title',
      path: 'src/content/pages/*',
      format: { data: 'yaml', contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        layout: fields.text({ label: 'Layout', defaultValue: '../../layouts/DefaultLayout.astro' }),
        sections: fields.blocks(
          {
            hero: {
              label: 'Hero',
              schema: fields.object({
                enable: fields.checkbox({ label: 'Enable', defaultValue: true }),
                badge: fields.text({ label: 'Badge' }),
                title: fields.text({ label: 'Title' }),
                description: fields.text({ label: 'Description', multiline: true }),
                button_primary: fields.object({
                  label: fields.text({ label: 'Label' }),
                  link: fields.text({ label: 'Link' }),
                }),
                button_secondary: fields.object({
                  label: fields.text({ label: 'Label' }),
                  link: fields.text({ label: 'Link' }),
                }),
                image: fields.text({ label: 'Image Path' }),
                features: fields.array(
                  fields.object({
                    title: fields.text({ label: 'Title' }),
                    description: fields.text({ label: 'Description', multiline: true }),
                    icon: fields.text({ label: 'Icon Name (e.g. lu:CircleDot)' }),
                  }),
                  { label: 'Features' }
                ),
              }),
            },
            logos: {
              label: 'Logos',
              schema: fields.object({
                enable: fields.checkbox({ label: 'Enable', defaultValue: true }),
                title: fields.text({ label: 'Title' }),
                subtitle: fields.text({ label: 'Subtitle' }),
                topRowCompanies: fields.array(
                  fields.object({
                    name: fields.text({ label: 'Company Name' }),
                    logo: fields.text({ label: 'Logo Path' }),
                    width: fields.integer({ label: 'Width' }),
                    height: fields.integer({ label: 'Height' }),
                    href: fields.text({ label: 'Link' }),
                  }),
                  { label: 'Top Row Companies' }
                ),
                bottomRowCompanies: fields.array(
                  fields.object({
                    name: fields.text({ label: 'Company Name' }),
                    logo: fields.text({ label: 'Logo Path' }),
                    width: fields.integer({ label: 'Width' }),
                    height: fields.integer({ label: 'Height' }),
                    href: fields.text({ label: 'Link' }),
                  }),
                  { label: 'Bottom Row Companies' }
                ),
              }),
            },
            features: {
              label: 'Features',
              schema: fields.object({
                enable: fields.checkbox({ label: 'Enable', defaultValue: true }),
                badge: fields.text({ label: 'Badge' }),
                title: fields.text({ label: 'Title' }),
                description: fields.text({ label: 'Description', multiline: true }),
                items: fields.array(
                  fields.object({
                    title: fields.text({ label: 'Title' }),
                    image: fields.text({ label: 'Image Path' }),
                  }),
                  { label: 'Features Items' }
                ),
              }),
            },
            resource_allocation: {
              label: 'Resource Allocation',
              schema: fields.object({
                enable: fields.checkbox({ label: 'Enable', defaultValue: true }),
                title: fields.text({ label: 'Title' }),
                topItems: fields.array(
                  fields.object({
                    title: fields.text({ label: 'Title' }),
                    description: fields.text({ label: 'Description', multiline: true }),
                    images: fields.array(
                      fields.object({
                        src: fields.text({ label: 'Image Path' }),
                        alt: fields.text({ label: 'Alt Text' }),
                        width: fields.integer({ label: 'Width' }),
                        height: fields.integer({ label: 'Height' }),
                      }),
                      { label: 'Images' }
                    ),
                    className: fields.text({ label: 'CSS Class Name' }),
                    fade: fields.array(fields.text({ label: 'Fade' }), { label: 'Fade Directions' }),
                  }),
                  { label: 'Top Items' }
                ),
                bottomItems: fields.array(
                  fields.object({
                    title: fields.text({ label: 'Title' }),
                    description: fields.text({ label: 'Description', multiline: true }),
                    images: fields.array(
                      fields.object({
                        src: fields.text({ label: 'Image Path' }),
                        alt: fields.text({ label: 'Alt Text' }),
                        width: fields.integer({ label: 'Width' }),
                        height: fields.integer({ label: 'Height' }),
                      }),
                      { label: 'Images' }
                    ),
                    className: fields.text({ label: 'CSS Class Name' }),
                    fade: fields.array(fields.text({ label: 'Fade' }), { label: 'Fade Directions' }),
                  }),
                  { label: 'Bottom Items' }
                ),
              }),
            },
            testimonials: {
              label: 'Testimonials',
              schema: fields.object({
                enable: fields.checkbox({ label: 'Enable', defaultValue: true }),
                title: fields.text({ label: 'Title' }),
                description: fields.text({ label: 'Description', multiline: true }),
                button_primary: fields.object({
                  label: fields.text({ label: 'Label' }),
                  link: fields.text({ label: 'Link' }),
                }),
                items: fields.array(
                  fields.object({
                    quote: fields.text({ label: 'Quote', multiline: true }),
                    author: fields.text({ label: 'Author Name' }),
                    role: fields.text({ label: 'Role' }),
                    company: fields.text({ label: 'Company' }),
                    image: fields.text({ label: 'Image Path' }),
                  }),
                  { label: 'Testimonial Items' }
                ),
              }),
            },
            pricing: {
              label: 'Pricing',
              schema: fields.object({
                enable: fields.checkbox({ label: 'Enable', defaultValue: true }),
                title: fields.text({ label: 'Title' }),
                description: fields.text({ label: 'Description', multiline: true }),
                plans: fields.array(
                  fields.object({
                    name: fields.text({ label: 'Plan Name' }),
                    monthlyPrice: fields.text({ label: 'Monthly Price' }),
                    yearlyPrice: fields.text({ label: 'Yearly Price' }),
                    description: fields.text({ label: 'Description' }),
                    features: fields.array(fields.text({ label: 'Feature Description' }), { label: 'Features List' }),
                  }),
                  { label: 'Plans' }
                ),
              }),
            },
            pricing_table: {
              label: 'Pricing Table',
              schema: fields.object({
                enable: fields.checkbox({ label: 'Enable', defaultValue: true }),
              }),
            },
            faq: {
              label: 'FAQ',
              schema: fields.object({
                enable: fields.checkbox({ label: 'Enable', defaultValue: true }),
                title: fields.text({ label: 'Title' }),
                description: fields.text({ label: 'Description', multiline: true }),
                categories: fields.array(
                  fields.object({
                    title: fields.text({ label: 'Category Title' }),
                    questions: fields.array(
                      fields.object({
                        question: fields.text({ label: 'Question' }),
                        answer: fields.text({ label: 'Answer', multiline: true }),
                      }),
                      { label: 'Questions' }
                    ),
                  }),
                  { label: 'Categories' }
                ),
              }),
            },
            contact: {
              label: 'Contact',
              schema: fields.object({
                enable: fields.checkbox({ label: 'Enable', defaultValue: true }),
                title: fields.text({ label: 'Title' }),
                description: fields.text({ label: 'Description', multiline: true }),
                officeTitle: fields.text({ label: 'Office Title' }),
                officeAddress: fields.object({
                  line1: fields.text({ label: 'Address Line 1' }),
                  line2: fields.text({ label: 'Address Line 2' }),
                }),
                emailTitle: fields.text({ label: 'Email Title' }),
                emails: fields.array(
                  fields.object({
                    label: fields.text({ label: 'Label' }),
                    email: fields.text({ label: 'Email' }),
                  }),
                  { label: 'Emails' }
                ),
                socialTitle: fields.text({ label: 'Social Title' }),
                socials: fields.array(
                  fields.object({
                    platform: fields.text({ label: 'Platform' }),
                    href: fields.text({ label: 'URL' }),
                  }),
                  { label: 'Social Links' }
                ),
              }),
            },
            about_hero: {
              label: 'About Hero',
              schema: fields.object({
                enable: fields.checkbox({ label: 'Enable', defaultValue: true }),
                title: fields.text({ label: 'Title' }),
                subtitle: fields.text({ label: 'Subtitle' }),
                description: fields.array(fields.text({ label: 'Paragraph' }), { label: 'Description Paragraphs' }),
                stats: fields.array(
                  fields.object({
                    value: fields.text({ label: 'Value' }),
                    label: fields.text({ label: 'Label' }),
                  }),
                  { label: 'Stats' }
                ),
              }),
            },
            about_section: {
              label: 'About Section',
              schema: fields.object({
                enable: fields.checkbox({ label: 'Enable', defaultValue: true }),
                leftTitle: fields.text({ label: 'Left Title' }),
                leftParagraphs: fields.array(fields.text({ label: 'Paragraph' }), { label: 'Left Paragraphs' }),
                leftCtaButton: fields.object({
                  href: fields.text({ label: 'Link' }),
                  text: fields.text({ label: 'Text' }),
                }),
                leftImages: fields.array(
                  fields.object({
                    src: fields.text({ label: 'Image Path' }),
                    alt: fields.text({ label: 'Alt' }),
                  }),
                  { label: 'Left Images' }
                ),
                rightParagraphs: fields.array(fields.text({ label: 'Paragraph' }), { label: 'Right Paragraphs' }),
                rightImages: fields.array(
                  fields.object({
                    src: fields.text({ label: 'Image Path' }),
                    alt: fields.text({ label: 'Alt' }),
                  }),
                  { label: 'Right Images' }
                ),
              }),
            },
            investors: {
              label: 'Investors',
              schema: fields.object({
                enable: fields.checkbox({ label: 'Enable', defaultValue: true }),
                title: fields.text({ label: 'Title' }),
                investors: fields.array(
                  fields.object({
                    name: fields.text({ label: 'Name' }),
                    company: fields.text({ label: 'Company' }),
                    image: fields.text({ label: 'Image Path' }),
                  }),
                  { label: 'Investors List' }
                ),
              }),
            },
            signup: {
              label: 'Signup',
              schema: fields.object({
                enable: fields.checkbox({ label: 'Enable', defaultValue: true }),
                title: fields.text({ label: 'Title' }),
                subtitle: fields.text({ label: 'Subtitle' }),
                buttonLabel: fields.text({ label: 'Button Label' }),
                googleButtonLabel: fields.text({ label: 'Google Button Label' }),
                loginLabel: fields.text({ label: 'Login Label' }),
                loginLink: fields.text({ label: 'Login Link' }),
                loginText: fields.text({ label: 'Login Text' }),
              }),
            },
            login: {
              label: 'Login',
              schema: fields.object({
                enable: fields.checkbox({ label: 'Enable', defaultValue: true }),
                title: fields.text({ label: 'Title' }),
                subtitle: fields.text({ label: 'Subtitle' }),
                buttonLabel: fields.text({ label: 'Button Label' }),
                googleButtonLabel: fields.text({ label: 'Google Button Label' }),
                signupLabel: fields.text({ label: 'Signup Label' }),
                signupLink: fields.text({ label: 'Signup Link' }),
                signupText: fields.text({ label: 'Signup Text' }),
              }),
            },
            not_found: {
              label: 'Not Found',
              schema: fields.object({
                enable: fields.checkbox({ label: 'Enable', defaultValue: true }),
                title: fields.text({ label: 'Title' }),
                description: fields.text({ label: 'Description', multiline: true }),
                button_primary: fields.object({
                  label: fields.text({ label: 'Label' }),
                  link: fields.text({ label: 'Link' }),
                }),
                button_secondary: fields.object({
                  label: fields.text({ label: 'Label' }),
                  link: fields.text({ label: 'Link' }),
                }),
              }),
            },
          },
          { label: 'Page Sections' }
        ),
        content: fields.mdx({ label: 'Content Body' }),
      },
    }),
  },
});
