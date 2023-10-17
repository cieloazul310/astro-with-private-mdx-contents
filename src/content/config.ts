
import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      featuredImg: image()
        .optional()
        .catch((ctx) => {
          /* eslint-disable-next-line @typescript-eslint/no-unused-expressions */
          ctx.error;
          return undefined;
        }),
      featuredImgAlt: z.string().optional(),
    }),
});

export const collections = {
  posts: postsCollection,
};
