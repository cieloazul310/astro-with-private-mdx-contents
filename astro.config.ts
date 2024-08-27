import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import rehypeClassNames from "rehype-class-names";
import mdxClasses from "./src/components/mdx-classes";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  markdown: {
    rehypePlugins: [[rehypeClassNames, mdxClasses]],
  },
});
