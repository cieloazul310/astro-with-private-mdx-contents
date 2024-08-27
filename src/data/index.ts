import { defineMenu } from "@/utils/defineMenu";

export const siteMetadata = {
	title: "Astro + MDX",
	description: "Astro example for private MDX repository"
};
export const menu = defineMenu([
  { title: "Top", href: "/" },
  { title: "Post", href: "/post" },
  { title: "Category", href: "/category" },
  { title: "Author", href: "/author" },
  {
    title: "Link",
    items: [
      { title: "Astro", href: "https://astro.build/" },
      { title: "Panda CSS", href: "https://panda-css.com/" },
      {
        title: "GitHub Repo",
        href: "https://github.com/cieloazul310/astro-sarkara",
      },
    ],
  },
]);
export const pageSize = 25;
