import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{ts,js,astro}"],
  exclude: [],

  theme: {
    extend: {
      recipes: {
        article: {
          base: {
            p: "{spacing.block}",
          },
        },
      },
      tokens: {
        colors: {
          bg: {
            default: { value: "#fcfcf7" },
            canvas: { value: "#fffffc" },
          },
          fg: { value: "#321" },
        },
        sizes: {
          header: { value: "56px" },
        },
      },
      semanticTokens: {
        sizes: {
          container: { value: "{sizes.6xl}" },
        },
        spacing: {
          xs: { value: "{spacing.1}" },
          sm: { value: "{spacing.2}" },
          md: { value: "{spacing.4}" },
          lg: { value: "{spacing.8}" },
          xl: { value: "{spacing.16}" },
          "2xl": { value: "{spacing.32}" },
          block: {
            value: {
              base: "{spacing.md}",
              sm: "{spacing.lg}",
              md: "{spacing.xl}",
            },
          },
        },
      },
      textStyles: {
        headings: {
          value: {
            fontWeight: "bold",
            lineHeight: 1.2,
          },
        },
      },
    },
  },

  patterns: {
    extend: {
      articleItem: {
        transform(props) {
          return {
            _first: {
              mt: 0,
            },
            _last: {
              mb: 0,
            },
            ...props,
          };
        },
      },
    },
  },

  globalCss: {
    html: {
      bg: "bg.default",
      color: "fg",
    },
    body: {
      bg: "bg.default",
      color: "fg",
    },
  },

  outdir: "styled-system",
});
