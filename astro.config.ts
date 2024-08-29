import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import rehypeClassNames from "rehype-class-names";
import mdxClasses from "./src/components/mdx-classes";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), icon()],
  markdown: {
    rehypePlugins: [[rehypeClassNames, mdxClasses]],
  },
});
