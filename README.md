# Astro Sarkara Starter Kit

Astro starter based on [@cieloazul310/astro-sarkara](https://github.com/cieloazul310/astro-sarkara) package.

[![npm version](https://badge.fury.io/js/@cieloazul310%2Fastro-sarkara.svg)](https://badge.fury.io/js/@cieloazul310%2Fastro-sarkara) [![Netlify Status](https://api.netlify.com/api/v1/badges/86a9d564-8ece-455e-a4d7-1f9806f8ebc8/deploy-status)](https://app.netlify.com/sites/astro-sarkara-starter/deploys)

@cieloazul310/astro-sarkara  
<https://github.com/cieloazul310/astro-sarkara>

Astro  
<https://astro.build/>

Panda CSS  
<https://panda-css.com/>

## Demo

GitHub Pages  
<https://cieloazul310.github.io/astro-sarkara-starter>

Netlify  
<https://astro-sarkara-starter.netlify.app>

## Getting started

```sh
npm create astro@latest -- --template cieloazul310/astro-sarkara-starter
```

Getting Started  
<https://docs.astro.build/en/getting-started/>

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   ├── components/
│   ├── content
│   │   ├── posts/ <= Markdown / MDX contents
│   │   └── config.ts
│   ├── data/
│   │   └── index.ts
│   ├── layout/
│   │   └── markdown.astro
│   ├── pages/
│   │   ├── posts/
│   │   │   ├── [...page].astro <= for post list pages
│   │   │   └── [...slug].astro <= for each `.md/.mdx` page
│   │   └── index.mdx
│   └── utils/
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Configure

### panda.config.ts

```ts
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
```

## Deploy configure

### GitHub Pages

1. Settings > Code and automation > Actions > General  
    Workflow permissions: **Read and write permissions**
2. Settings > Code and automation > Pages  
    Build and deployment Source: **GitHub Actions**

### Netlify

1. Site configuration > Build & Deploy > Continuous deployment  
    Build settings Build command:  
    `npm run build -- --site $URL`

## Astro Sarkara Tutorial

<https://cieloazul310.github.io/astro-sarkara/tutorial>
