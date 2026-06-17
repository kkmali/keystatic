import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    authorImage: z.string().optional(),
    authorName: z.string().optional(),
  }),
});

// ── Tax Credit Hero ───────────────────────────────────────────────────────────
const taxCreditHero = defineCollection({
  loader: glob({ base: "./src/content/tax-credit-hero", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    eyebrow: z.string().optional(),
    heading: z.string().optional(),
    headingHighlight: z.string().optional(),
    subheading: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    ctaLabel: z.string().optional(),
    ctaHref: z.string().optional(),
    ctaNote: z.string().optional(),
    infoNote: z.string().optional(),
    rating: z
      .object({
        score: z.number().optional(),
        label: z.string().optional(),
        reviewCount: z.string().optional(),
      })
      .optional(),
    bullets: z
      .array(
        z.object({
          text: z.string(),
          bold: z.string().optional(),
        })
      )
      .optional(),
  }),
});

// ── How It Works ─────────────────────────────────────────────────────────────
const howItWorks = defineCollection({
  loader: glob({ base: "./src/content/how-it-works", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    eyebrow: z.string().optional(),
    heading: z.string().optional(),
    subheading: z.string().optional(),
    steps: z.array(
      z.object({
        number: z.string(),
        title: z.string(),
        description: z.string(),
      })
    ),
  }),
});

// ── Trusted By Thousands ─────────────────────────────────────────────────────
const trustedByThousands = defineCollection({
  loader: glob({ base: "./src/content/trusted-by-thousands", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    heading: z.string().optional(),
    stats: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    ),
  }),
});

// ── Guides Hero ──────────────────────────────────────────────────────────────
const guidesHero = defineCollection({
  loader: glob({ base: "./src/content/guides-hero", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    heading: z.string().optional(),
    headingHighlight: z.string().optional(),
    body: z.array(z.string()).optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

// ── Why Guides ───────────────────────────────────────────────────────────────
const whyGuides = defineCollection({
  loader: glob({ base: "./src/content/why-guides", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    heading: z.string().optional(),
    paragraphs: z.array(z.string()).optional(),
  }),
});

// ── Pages ────────────────────────────────────────────────────────────────────
const pages = defineCollection({
  loader: glob({ base: "./src/content/pages", pattern: "**/*.{md,mdx}" }),
  schema: z.any().optional(),
});

export const collections = { blog, taxCreditHero, howItWorks, trustedByThousands, guidesHero, whyGuides, pages };

