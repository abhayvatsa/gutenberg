"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Twitter_1 = __importDefault(require("../icons/Twitter"));
var Github_1 = __importDefault(require("../icons/Github"));
var Linkedin_1 = __importDefault(require("../icons/Linkedin"));
var Gram_1 = __importDefault(require("../icons/Gram"));
function parseLinks(links) {
    // TODO: improve this
    var linkedin = links.find(function (e) { return e.indexOf('linkedin.com') >= 0; });
    var github = links.find(function (e) { return e.indexOf('github.com') >= 0; });
    var twitter = links.find(function (e) { return e.indexOf('twitter.com') >= 0; });
    var gram = links.find(function (e) { return e.indexOf('vatsagram.com') >= 0; });
    return {
        linkedin: linkedin,
        github: github,
        twitter: twitter,
        gram: gram,
    };
}
var Footer = function (_a) {
    var links = _a.links;
    var _b = parseLinks(links), twitter = _b.twitter, github = _b.github, linkedin = _b.linkedin, gram = _b.gram;
    return (<footer className="root">
      <style jsx>{"\n        .root {\n          display: flex;\n          justify-content: space-evenly;\n          align-items: center;\n\n          z-index: 1;\n          padding: 0px var(--theme-space-4);\n          min-height: var(--header-height);\n          color: rgba(var(--primary-foreground), 1);\n          font-size: 105%;\n        }\n      "}</style>
      <Twitter_1.default href={twitter}/>
      <Github_1.default href={github}/>
      <Linkedin_1.default href={linkedin}/>
      <Gram_1.default href={gram}/>
    </footer>);
};
exports.default = Footer;
