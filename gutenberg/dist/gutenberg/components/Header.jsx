"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = __importDefault(require("next/link"));
var hooks_1 = require("../hooks");
var Header = function (_a) {
    var domainName = _a.domainName;
    var isScrolled = hooks_1.useIsScrolled();
    return (<header className="root">
      <style jsx>{"\n        .root {\n          top: 0;\n          position: fixed;\n          width: 850px; /* TODO: magic number */\n          background-color: rgba(var(--primary-background), 1);\n        }\n\n        .is-scrolled {\n          box-shadow: rgba(var(--primary-foreground)) 0px 4px 6px -6px;\n        }\n\n        .nav {\n          display: flex;\n          justify-content: left;\n          align-items: center;\n\n          padding: 0px var(--theme-space-4);\n          min-height: var(--header-height);\n        }\n\n        color: rgba(var(--primary-foreground), 1);\n        font-size: 105%;\n\n        .link:hover {\n          /*font-size: 90%;*/\n          color: rgba(var(--highlight), 1);\n        }\n        a {\n          text-decoration: none;\n        }\n      "}</style>
      <nav className={"nav " + (isScrolled ? 'is-scrolled' : '')}>
        <link_1.default key="/" href="/">
          <a className="link" href="/">
            <div>{domainName}</div>
          </a>
        </link_1.default>
      </nav>
    </header>);
};
exports.default = Header;
