import breaks from 'remark-breaks'
import emoji from 'remark-emoji'
import externalLinks from 'remark-external-links'
import gfm from 'remark-gfm'
import slug from 'remark-slug'
import toc from 'remark-toc'

// Future:
// sectionize: wrap each heading and the content that follows it in a <section> tag,
// remark-autolink-headings: links to headings

// NOTE: Order of plugins matters;
export const mdxOptions = {
  remarkPlugins: [
    slug, // add anchor headings using GitHub's algorithm

    emoji, // replace :emoji: with UTF-8 emojis in text

    [externalLinks, { rel: ['noopener', 'noreferrer'] }], // target/rel for links

    toc, // generate a table of contents.

    // See standard: https://commonmark.org/help/tutorial/03-paragraphs.html
    breaks, // add break support, without needing two spaces

    gfm, // GFM: autolink literals, table alignment, and more
  ],
}
