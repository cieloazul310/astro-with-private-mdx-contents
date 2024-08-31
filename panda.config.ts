import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{ts,js,astro,mdx}"],
  exclude: [],

  conditions: {
    extend: {
      drawerOpen: "[data-drawer-open=true] &",
    },
  },

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
        sizes: {
          header: { value: "56px" },
        },
        zIndex: {
          docked: { value: 7 },
          fab: { value: 100 },
          drawer: { value: 200 },
          drawerBackdrop: { value: 199 },
          header: { value: 10 },
        },
      },
      semanticTokens: {
        colors: {
          bg: {
            default: { value: { base: "#fcfcf7", _dark: "#171311" } },
            canvas: { value: { base: "#fffffc", _dark: "#252321" } },
          },
          fg: { value: { base: "#321", _dark: "#fcfcf7" } },
          primary: {
            alpha: {
              value: {
                base: "color-mix(in srgb, {colors.amber.900} 4%, transparent)",
                _dark:
                  "color-mix(in srgb, {colors.amber.900} 10%, transparent)",
              },
            },
          },
        },
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
      button: {
        transform(props) {
          return {
            p: "{spacing.sm}",
            rounded: "sm",
            fontWeight: "bold",
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
      _drawerOpen: {
        overflowY: "hidden",
      },
    },
  },

  outdir: "styled-system",
});
