import {
  defineSarkaraConfig,
} from "@cieloazul310/astro-sarkara/preset";

// https://panda-css.com/docs/references/config
export default defineSarkaraConfig({
  // primary and secondary colors is required
  // https://panda-css.com/docs/customization/theme#colors
  palette: { primary: "indigo", secondary: "amber" },

  // Where to look for your css declarations
  include: ["./src/**/*.{js,ts,astro,mdx}"],

  // customizing theme
  theme: {
    extend: {

    },
  },
});
