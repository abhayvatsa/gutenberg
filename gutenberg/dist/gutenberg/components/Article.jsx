"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.components = exports.NextLink = exports.Heading1 = void 0;
var link_1 = __importDefault(require("next/link"));
var hydrate_1 = __importDefault(require("next-mdx-remote/hydrate"));
var prism_react_renderer_1 = __importStar(require("prism-react-renderer"));
var vsDark_1 = __importDefault(require("prism-react-renderer/themes/vsDark")); // https://github.com/PrismJS/prism-themes
// See: https://mdxjs.com/guides/syntax-highlighting#prism-react-renderer
var CodeBlock = function (_a) {
    var children = _a.children, className = _a.className;
    var language = className.replace(/language-/, '');
    return (<prism_react_renderer_1.default {...prism_react_renderer_1.defaultProps} theme={vsDark_1.default} code={children} language={language}>
      {function (_a) {
        var className = _a.className, style = _a.style, tokens = _a.tokens, getLineProps = _a.getLineProps, getTokenProps = _a.getTokenProps;
        return (<pre className={className} style={__assign(__assign({}, style), { padding: '20px' })}>
          {tokens.map(function (line, i) { return (<div key={i} {...getLineProps({ line: line, key: i })}>
              {line.map(function (token, key) { return (<span key={key} {...getTokenProps({ token: token, key: key })}/>); })}
            </div>); })}
        </pre>);
    }}
    </prism_react_renderer_1.default>);
};
// Enhance appearance of h1 and add semantic meaning
var Heading1 = function (_a) {
    var children = _a.children;
    // TODO: I don't like styling/classes at the component level
    return (<header className="article-header-container">
      <h1 className="article-header">{children}</h1>
    </header>);
};
exports.Heading1 = Heading1;
// Enable client-side routing for anchor tags
var NextLink = function (_a) {
    var children = _a.children, href = _a.href, rel = _a.rel, target = _a.target;
    // TODO: double check if this is necessary
    var link = href.startsWith('#') && process.browser
        ? window.location.pathname + href
        : href;
    // TODO: double check props below
    return (<link_1.default href={link}>
      <a href={href} rel={rel} target={target}>
        {children}
      </a>
    </link_1.default>);
};
exports.NextLink = NextLink;
exports.components = {
    h1: exports.Heading1,
    a: exports.NextLink,
    code: CodeBlock,
};
var Article = function (_a) {
    var source = _a.source;
    var content = hydrate_1.default(source, { components: exports.components });
    return (
    // TODO: revisit these globals
    <article>
      <style global jsx>{"\n        .article-header-container {\n          padding: var(--theme-space-24) 0;\n        }\n        article {\n          margin-bottom: var(--theme-space-8);\n        }\n        .article-header {\n          text-align: center;\n          margin: 0;\n          font-size: 2.5em;\n          color: rgba(var(--highlight), 1);\n        }\n\n        pre {\n          border-radius: var(--theme-space-4);\n          width: 100%;\n          overflow-x: scroll;\n        }\n        table {\n          display: block;\n          overflow: auto;\n        }\n      "}</style>
      {content}
    </article>);
};
exports.default = Article;
