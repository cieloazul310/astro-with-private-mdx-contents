# With Private MDX content repo

> Astro example with private mdx contents

MDX contents repository  
<https://github.com/cieloazul310/mdx-contents-example>

1. `{mdx-repo}/src/content` dir replaces `{project}/src/content` dir except `config.ts`
2. `{mdx-repo}/src/assets` dir overrides `{project}/public/assets` dir.

## Demo

GitHub Pages  
<https://cieloazul310.github.io/astro-with-private-mdx-contents>

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   ├── assets/
├── src/
│   ├── components/
│   ├── content
│   │   ├── author/ <= YAML data
│   │   ├── category/ <= YAML data
│   │   ├── posts/ <= Markdown / MDX contents
│   │   └── config.ts
│   ├── data/
│   │   └── index.ts
│   ├── layout/
│   ├── pages/
│   │   ├── author/
│   │   │   ├── [id].astro <= page for each author
│   │   │   └── index.astro <= author index page
│   │   ├── category/
│   │   │   ├── [id].astro <= page for each category
│   │   │   └── index.astro <= category index page
│   │   ├── posts/
│   │   │   ├── [...page].astro <= for post list pages
│   │   │   └── [...slug].astro <= for each `.md/.mdx` page
│   │   └── index.mdx
│   ├── templates/
│   └── utils/
└── package.json
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
