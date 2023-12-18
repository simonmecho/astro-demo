import { defineCollection, z } from "astro:content";
// import { format } from "date-fns";

const postsCollection = defineCollection({
    schema: ({ image }) =>
        z.object({
            author: z.string(),
            title: z.string(),
            date: z.string(),
            image: image(),
            categories: z.array(z.string()),
        }),
});

const authorsCollection = defineCollection({
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            image: image(),
        }),
});

export const collections = {
    posts: postsCollection,
    authors: authorsCollection,
};
