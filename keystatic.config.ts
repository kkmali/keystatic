import { config, fields, collection, singleton } from '@keystatic/core';
import { lucideIcon } from './src/components/KeystaticIconPicker';

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
        image: fields.image({
          label: 'Image',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        authorImage: fields.image({
          label: 'Author Image',
          directory: 'public/avatar',
          publicPath: '/avatar/',
        }),
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
                image: fields.image({
                  label: 'Image',
                  directory: 'public',
                  publicPath: '/',
                }),
                features: fields.array(
                  fields.object({
                    title: fields.text({ label: 'Title' }),
                    description: fields.text({ label: 'Description', multiline: true }),
                    icon: lucideIcon({ label: 'Icon Name (e.g. lu:CircleDot)', defaultValue: 'lu:CircleDot' }),
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
                    logo: fields.image({
                      label: 'Logo',
                      directory: 'public/logos',
                      publicPath: '/logos/',
                    }),
                    width: fields.integer({ label: 'Width' }),
                    height: fields.integer({ label: 'Height' }),
                    href: fields.text({ label: 'Link' }),
                  }),
                  { label: 'Top Row Companies' }
                ),
                bottomRowCompanies: fields.array(
                  fields.object({
                    name: fields.text({ label: 'Company Name' }),
                    logo: fields.image({
                      label: 'Logo',
                      directory: 'public/logos',
                      publicPath: '/logos/',
                    }),
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
                    image: fields.image({
                      label: 'Image',
                      directory: 'public/features',
                      publicPath: '/features/',
                    }),
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
                        src: fields.image({
                          label: 'Image',
                          directory: 'public/resource-allocation',
                          publicPath: '/resource-allocation/',
                        }),
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
                        src: fields.image({
                          label: 'Image',
                          directory: 'public/resource-allocation',
                          publicPath: '/resource-allocation/',
                        }),
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
                    image: fields.image({
                      label: 'Image',
                      directory: 'public/testimonials',
                      publicPath: '/testimonials/',
                    }),
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
                    src: fields.image({
                      label: 'Image',
                      directory: 'public/about',
                      publicPath: '/about/',
                    }),
                    alt: fields.text({ label: 'Alt' }),
                  }),
                  { label: 'Left Images' }
                ),
                rightParagraphs: fields.array(fields.text({ label: 'Paragraph' }), { label: 'Right Paragraphs' }),
                rightImages: fields.array(
                  fields.object({
                    src: fields.image({
                      label: 'Image',
                      directory: 'public/about',
                      publicPath: '/about/',
                    }),
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
                    image: fields.image({
                      label: 'Image',
                      directory: 'public/investors',
                      publicPath: '/investors/',
                    }),
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
  singletons: {
    site: singleton({
      label: 'Site Settings',
      path: 'src/config/site',
      format: { data: 'json' },
      schema: {
        site: fields.object({
          title: fields.text({ label: 'Title' }),
          base_url: fields.text({ label: 'Base URL' }),
          base_path: fields.text({ label: 'Base Path' }),
          trailing_slash: fields.checkbox({ label: 'Trailing Slash', defaultValue: true }),
          favicon: fields.text({ label: 'Favicon Path' }),
          logo: fields.text({ label: 'Logo Path' }),
          logo_width: fields.text({ label: 'Logo Width' }),
          logo_height: fields.text({ label: 'Logo Height' }),
          logo_text: fields.text({ label: 'Logo Text' }),
        }, { label: 'Site Basic Info' }),
        settings: fields.object({
          pagination: fields.integer({ label: 'Pagination' }),
          summary_length: fields.integer({ label: 'Summary Length' }),
          blog_folder: fields.text({ label: 'Blog Folder' }),
        }, { label: 'Settings' }),
        params: fields.object({
          contact_form_action: fields.text({ label: 'Contact Form Action' }),
          footer_description: fields.text({ label: 'Footer Description', multiline: true }),
          copyright: fields.text({ label: 'Copyright Text' }),
        }, { label: 'Parameters' }),
        google_tag_manager: fields.object({
          enable: fields.checkbox({ label: 'Enable Google Tag Manager', defaultValue: false }),
          gtm_id: fields.text({ label: 'GTM ID' }),
        }, { label: 'Google Tag Manager' }),
        navigation_buttons: fields.object({
          dashboard: fields.object({
            label: fields.text({ label: 'Dashboard Button Label' }),
            link: fields.text({ label: 'Dashboard Button Link' }),
          }, { label: 'Dashboard Button' }),
          login: fields.object({
            label: fields.text({ label: 'Login Button Label' }),
            link: fields.text({ label: 'Login Button Link' }),
          }, { label: 'Login Button' }),
        }, { label: 'Navigation Buttons' }),
        metadata: fields.object({
          meta_author: fields.text({ label: 'Meta Author' }),
          meta_image: fields.text({ label: 'Meta Image' }),
          meta_description: fields.text({ label: 'Meta Description', multiline: true }),
        }, { label: 'Metadata' }),
      },
    }),
    menu: singleton({
      label: 'Menu Settings',
      path: 'src/config/menu',
      format: { data: 'json' },
      schema: {
        main: fields.array(
          fields.object({
            name: fields.text({ label: 'Name' }),
            url: fields.text({ label: 'URL' }),
            dropdownItems: fields.array(
              fields.object({
                title: fields.text({ label: 'Title' }),
                href: fields.text({ label: 'Link' }),
                description: fields.text({ label: 'Description', multiline: true }),
              }),
              {
                label: 'Dropdown Items',
                itemLabel: (item) => item.fields.title.value || 'Dropdown Item',
              }
            ),
          }),
          {
            label: 'Main Menu',
            itemLabel: (item) => item.fields.name.value || 'Menu Item',
          }
        ),
        footer_menu: fields.array(
          fields.object({
            name: fields.text({ label: 'Name' }),
            url: fields.text({ label: 'URL' }),
          }),
          {
            label: 'Footer Menu',
            itemLabel: (item) => item.fields.name.value || 'Menu Item',
          }
        ),
        footer_quick_links: fields.array(
          fields.object({
            name: fields.text({ label: 'Name' }),
            url: fields.text({ label: 'URL' }),
          }),
          {
            label: 'Footer Quick Links',
            itemLabel: (item) => item.fields.name.value || 'Link Item',
          }
        ),
      },
    }),
    social: singleton({
      label: 'Social Settings',
      path: 'src/config/social',
      format: { data: 'json' },
      schema: {
        main: fields.array(
          fields.object({
            name: fields.text({ label: 'Name' }),
            icon: fields.text({ label: 'Icon (e.g. FaLinkedin, FaXTwitter)' }),
            link: fields.text({ label: 'Link' }),
          }),
          {
            label: 'Social Links',
            itemLabel: (item) => item.fields.name.value || 'Social Link',
          }
        ),
      },
    }),
    theme: singleton({
      label: 'Theme Settings',
      path: 'src/config/theme',
      format: { data: 'json' },
      schema: {
        colors: fields.object({
          default: fields.object({
            theme_color: fields.object({
              primary: fields.text({ label: 'Primary' }),
              secondary: fields.text({ label: 'Secondary' }),
              tertiary: fields.text({ label: 'Tertiary' }),
              body: fields.text({ label: 'Body' }),
              border: fields.text({ label: 'Border' }),
              light: fields.text({ label: 'Light' }),
            }, { label: 'Theme Colors (oklch or hex/rgb)' }),
            text_color: fields.object({
              text: fields.text({ label: 'Text' }),
              'text-dark': fields.text({ label: 'Text Dark' }),
              'text-light': fields.text({ label: 'Text Light' }),
            }, { label: 'Text Colors' }),
          }, { label: 'Default' }),
        }, { label: 'Colors' }),
        fonts: fields.object({
          font_family: fields.object({
            primary: fields.text({ label: 'Primary Font' }),
            primary_type: fields.text({ label: 'Primary Font Type (e.g. sans-serif)' }),
            secondary: fields.text({ label: 'Secondary Font' }),
            secondary_type: fields.text({ label: 'Secondary Font Type (e.g. sans-serif)' }),
          }, { label: 'Font Family' }),
          font_size: fields.object({
            base: fields.text({ label: 'Base Font Size' }),
            scale: fields.text({ label: 'Font Scale' }),
          }, { label: 'Font Size' }),
        }, { label: 'Fonts' }),
      },
    }),
    deploy: singleton({
      label: 'Deploy Settings',
      path: 'src/config/deploy',
      format: { data: 'json' },
      schema: {
        staging: fields.object({
          trigger: fields.text({ label: 'Trigger Number', description: 'Increase this number by 1 to push your changes to the staging website for review.' }),
          _note: fields.text({ label: 'Note' }),
        }, { label: 'Staging' }),
        production: fields.object({
          trigger: fields.text({ label: 'Trigger Number', description: 'Increase this number by 1 to publish your changes live. Make sure you have reviewed the staging website first.' }),
          _note: fields.text({ label: 'Note' }),
        }, { label: 'Production' }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
      },
    }),
  },
});
