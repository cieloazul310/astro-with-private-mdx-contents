import type { Options as rehypeClassNamesOptions } from "rehype-class-names";
import { cx } from "../../styled-system/css";
import { divider, bleed, articleItem } from "../../styled-system/patterns";

export const heading1 = articleItem({
  textStyle: "headings",
  fontSize: ["xl", "2xl", "4xl"],
  mt: "calc({spacing.md} + {spacing.lg})",
  mb: "calc({spacing.sm} + {spacing.md})",
});

export const heading2 = articleItem({
  textStyle: "headings",
  fontSize: ["xl", "2xl", "3xl"],
  mt: "calc({spacing.md} + {spacing.lg})",
  mb: "md",
});

export const heading3 = articleItem({
  textStyle: "headings",
  fontSize: ["lg", "lg", "2xl"],
  mt: "calc({spacing.md} + {spacing.lg})",
  mb: "md",
});

export const heading4 = articleItem({
  textStyle: "headings",
  fontSize: ["md", "lg", "xl"],
  mt: "lg",
  mb: "md",
});

export const heading5 = articleItem({
  textStyle: "headings",
  fontSize: ["md", "md", "lg"],
  mt: "md",
  mb: "sm",
});

export const paragraph = articleItem({
  fontSize: "md",
  my: "sm",
  overflowWrap: "break-word",
});

export const anchor = articleItem({
  color: { base: "amber.900", _hover: "amber.700" },
  textDecoration: { _hover: "underline" },
  _dark: { color: { base: "gray.300", _hover: "gray.200" } },
});

export const blockquote = articleItem({
  bg: "primary.alpha",
  rounded: "md",
  my: "md",
  px: "md",
  py: "lg",
});

export const hr = divider({
  orientation: "horizontal",
  color: { base: "primary.alpha", _dark: "gray.950" },
  my: "lg",
});

export const unorderedList = articleItem({
  my: "md",
  listStyleType: "disc",
  paddingInlineStart: 4,
});

export const orderedList = articleItem({
  my: "md",
  listStyleType: "decimal",
  paddingInlineStart: 4,
});

export const img = cx(
  articleItem({
    my: "xl",
    rounded: "xl",
  }),
  bleed({ inline: "block" }),
);

export const pre = articleItem({
  colorPalette: "primary",
  my: "lg",
  overflowX: "auto",
  maxWidth: "100%",
  rounded: "md",
  px: "md",
  py: "lg",
});

export const code = articleItem({
  ":not(pre) > &": {
    color: { base: "amber.800", _dark: "amber.400" },
    bg: "primary.alpha",
    px: 1,
    rounded: "md",
  },
});

export const iframe = cx(
  articleItem({
    maxWidth: "100%",
  }),
  bleed({ inline: "block" }),
);

const componentClasses: rehypeClassNamesOptions = {
  h1: heading1,
  h2: heading2,
  h3: heading3,
  h4: heading4,
  h5: heading5,
  p: paragraph,
  a: anchor,
  blockquote,
  hr,
  ul: unorderedList,
  ol: orderedList,
  img,
  pre,
  code,
  iframe,
};

export default componentClasses;
