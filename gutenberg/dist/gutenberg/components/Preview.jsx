"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = __importDefault(require("next/link"));
var breakpoints_1 = __importDefault(require("../styles/breakpoints"));
var Card = function (_a) {
    var children = _a.children, slug = _a.slug;
    return (<div className="card-container">
    <style jsx>{"\n      .card-container {\n        padding: var(--theme-space);\n        width: 100%;\n      }\n      @media " + breakpoints_1.default.up('md') + " {\n        .card-container {\n          width: 50%;\n        }\n      }\n      .card {\n        display: block;\n        height: 100%;\n        overflow: hidden;\n        box-sizing: border-box;\n\n        border-radius: var(--theme-space);\n        box-shadow: rgba(var(--primary-foreground)) 0px 0px 4px -2px;\n      }\n\n      a {\n        display: block;\n        padding: var(--theme-space-4);\n        background-color: rgba(var(--foreground-min-solid));\n        height: 100%;\n\n        text-decoration: none;\n        border-radius: var(--theme-space);\n        color: rgba(var(--primary-foreground));\n      }\n      a:hover {\n        color: rgba(var(--highlight-accent));\n      }\n    "}</style>
    <div className="card">
      <link_1.default href={slug}>
        <a>
          <div>{children}</div>
        </a>
      </link_1.default>
    </div>
  </div>);
};
var Body = function (_a) {
    var children = _a.children;
    return (<p>
    <style jsx>{"\n      margin-bottom: 0;\n    "}</style>
    {children}
  </p>);
};
var Preview = function (_a) {
    var title = _a.title, _b = _a.articles, articles = _b === void 0 ? [] : _b, _c = _a.filter, filter = _c === void 0 ? 'article' : _c;
    return (<section className="preview">
      <style jsx>{"\n        .container {\n          /*TODO change negative margin*/\n          margin: 0px -4px;\n          display: flex;\n          flex-wrap: wrap;\n\n          margin-bottom: var(--theme-space-8);\n        }\n      "}</style>
      <style jsx global>{""}</style>
      <h2>{title}</h2>
      <div className="container">
        {articles
        .filter(function (a) { return a.type === filter; })
        .map(function (_a) {
        var title = _a.title, slug = _a.slug, summary = _a.summary;
        return (<Card key={title} slug={slug}>
              <h3>{title}</h3>
              <Body>{summary}</Body>
            </Card>);
    })}
      </div>
    </section>);
};
exports.default = Preview;
