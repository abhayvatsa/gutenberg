"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = __importDefault(require("next/link"));
var Hero = function (_a) {
    var headline = _a.headline, text = _a.text, _b = _a.about, about = _b === void 0 ? false : _b;
    return (<>
      <style jsx>{"\n        .hero {\n          min-width: 320px;\n          padding: var(--theme-space-16) var(--theme-space-4);\n          text-align: center;\n        }\n\n        .headline {\n          color: rgba(var(--highlight-hover), 1);\n          font-size: 3em;\n          line-height: 1;\n        }\n\n        p {\n          font-size: 1.5em;\n          line-height: 1;\n          margin-bottom: 0px;\n        }\n        a {\n          display: block;\n          text-align: right;\n        }\n      "}</style>
      <section className="hero">
        <h1 className="headline">{headline}</h1>
        <p>{text}</p>
      </section>
      {about && (<link_1.default href="/a/about">
          <a>About</a>
        </link_1.default>)}
    </>);
};
exports.default = Hero;
