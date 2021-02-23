"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mdxOptions = void 0;
var remark_breaks_1 = __importDefault(require("remark-breaks"));
var remark_emoji_1 = __importDefault(require("remark-emoji"));
var remark_external_links_1 = __importDefault(require("remark-external-links"));
var remark_gfm_1 = __importDefault(require("remark-gfm"));
var remark_slug_1 = __importDefault(require("remark-slug"));
var remark_toc_1 = __importDefault(require("remark-toc"));
// Future:
// sectionize: wrap each heading and the content that follows it in a <section> tag,
// remark-autolink-headings: links to headings
// NOTE: Order of plugins matters;
exports.mdxOptions = {
    remarkPlugins: [
        remark_slug_1.default,
        remark_emoji_1.default,
        [remark_external_links_1.default, { rel: ['noopener', 'noreferrer'] }],
        remark_toc_1.default,
        // See standard: https://commonmark.org/help/tutorial/03-paragraphs.html
        remark_breaks_1.default,
        remark_gfm_1.default,
    ],
};
