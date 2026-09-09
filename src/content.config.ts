import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const services = defineCollection({
  loader: glob({ base: "./src/content/services", pattern: "**/*.json" }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    icon: z.array(z.string()),
    ctaLabel: z.string(),
    ctaUrl: z.string(),
    order: z.number().int(),
    active: z.boolean(),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.json" }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    description: z.string(),
    featured: z.boolean(),
    active: z.boolean(),
    order: z.number().int(),
    projectUrl: z.string(),
    image: z.object({
      variant: z.enum(["repromedic", "doctor", "portfolio"]),
      browserLabel: z.string(),
      tagLabel: z.string(),
      tagValue: z.string(),
    }),
  }),
});

const packages = defineCollection({
  loader: glob({ base: "./src/content/packages", pattern: "**/*.json" }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    currency: z.string(),
    price: z.number().nonnegative(),
    priceLabel: z.string(),
    description: z.string(),
    features: z.array(z.string()),
    badge: z.string(),
    featured: z.boolean(),
    active: z.boolean(),
    showPrice: z.boolean(),
    ctaLabel: z.string(),
    ctaUrl: z.string(),
    order: z.number().int(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ base: "./src/content/testimonials", pattern: "**/*.json" }),
  schema: z.object({
    id: z.string(),
    quote: z.string(),
    author: z.string(),
    role: z.string(),
    active: z.boolean(),
    order: z.number().int(),
  }),
});

const faq = defineCollection({
  loader: glob({ base: "./src/content/faq", pattern: "**/*.json" }),
  schema: z.object({
    id: z.string(),
    question: z.string(),
    answer: z.string(),
    active: z.boolean(),
    order: z.number().int(),
  }),
});

export const collections = { services, projects, packages, testimonials, faq };
