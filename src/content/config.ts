import { z, defineCollection, reference } from "astro:content";
import generateJsonSchema from "@/utils/generate-json-schema";

export const author = z.object({
  name: z.string(),
  description: z.string(),
  image: z.string().nullish(),
  social: z
    .object({
      web: z.object({ title: z.string(), url: z.string().url() }),
      twitter: z.string().url(),
      github: z.string().url(),
    })
    .partial()
    .nullish(),
});

export const category = z.object({
  name: z.string(),
  description: z.string(),
});

const post = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      author: z.string(),
      category: reference("category").nullish(),
      draft: z.boolean().nullish(),
      featuredImg: image()
        .nullish()
        .catch((ctx) => {
          /* eslint-disable-next-line @typescript-eslint/no-unused-expressions */
          ctx.error;
          return undefined;
        }),
      featuredImgAlt: z.string().nullish(),
    }),
});

export const collections = {
  author: defineCollection({
    type: "data",
    schema: ({ image }) =>
      author.omit({ image: true }).merge(
        z.object({
          image: image()
            .nullish()
            .catch((ctx) => {
              console.log(ctx.input);
              /* eslint-disable-next-line @typescript-eslint/no-unused-expressions */
              ctx.error;
              return ctx.input;
            }),
        }),
      ),
  }),
  category: defineCollection({
    type: "data",
    schema: category,
  }),
  post,
};

generateJsonSchema({
  author,
  category,
});
