# Gutenberg

**Very much a work in progress**

A site generator for markdown/MDX documents. See it live at
https://abhayvatsa.com

## Goal

Expose an easy interface to publish markdown/MDX documents with a core library
of React components. Additionally, provide a good user experience and integrate
with analytics, [Open Graph](https://ogp.me/), etc.

## Features

- [Autogenerated table of contents](https://github.com/remarkjs/remark-toc)
- [Allow JSX in your markdown with MDX](https://github.com/mdx-js/mdx)
- [GitHub Flavored Markdown features](https://github.com/remarkjs/remark-gfm)
- [Break support without needing spaces](https://github.com/remarkjs/remark-breaks)
- [Convert :emoji: to real UTF-8 emojis](https://github.com/rhysd/remark-emoji)
- [Automatically add `target` and `rel` to external links](https://github.com/remarkjs/remark-external-links)
- [Add `id` to headings](https://github.com/remarkjs/remark-slug)
- [Syntax highlighting for codeblocks](https://github.com/FormidableLabs/prism-react-renderer)

## Usage

### `./a/${filename}`: markdown/MDX files

Markdown/MDX files with YAML frontmatter. The `filename` maps to the slug that
identifies the URL i.e. `./a/${filename}` => `my.domain.name/a/${filename}`. You
can specify YAML frontmatter per below specification.

- **YAML frontmatter**
  - `publishTime`: a date string that for `new Date(publishTime)`
  - `summary`: a string description of the article
  - `keywords`: keywords related to article
  - `type`: a string specify type of article, useful in filtering for `sections`

### `./config.ts`: application-level metadata

- **Site elements**:
  - `headline`: Headline for `<Hero />` component
  - `subheadline`: Subheadline for `<Hero />` component
  - `sections`: Array that defines <Preview /> sections on home page
    - schema: [{ title: "Title", filter: `${type}` }"
    - e.g.
      `[{title: 'Posts', filter='project'}, [{title: 'Recent OtherTypes', filter='othertype'}]`
  - `links`: Array of URLs for github, linkedin, twitter.
  - `about` boolean enabling link to /about/ page
- **Meta:**
  - `title`: `document.title` for application
  - `description`: meta description
  - `keywords`: meta keywords
  - `owner`: meta owner
  - `domainName`: domain name of website
- **Analytics**:
  - `gaTrackingId`: Enable GA by a providing analytics tracking code

## Future

I have ambitions to:

- Add offline-search
- Improve the interface/documentation to gutenberg
- Add more error handling & add tests
- Styling: Improve design, increase legibility, ensure layout works varying
  content length
- Provide generic components (like charts, etc) usable in markdown
