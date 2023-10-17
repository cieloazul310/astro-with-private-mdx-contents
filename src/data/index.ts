import { defineMenu } from "@cieloazul310/astro-sarkara";

export const siteMetadata = {
	title: "Astro Sarkara Starter",
	description: "Starter project for astro-sarkara."
};
export const menu = defineMenu([
  { title: "Top", href: "/" },
  { title: "Posts", href: "/posts" },
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
