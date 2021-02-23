"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = __importDefault(require("next/link"));
function NotFound() {
    return (<main>
      <style jsx>{"\n        main {\n          padding: var(--theme-space-16) 0;\n          height: 100%;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          flex-direction: column;\n        }\n      "}</style>
      <h2>Not Found</h2>
      <p>Sorry, there is nothing at this URL.</p>
      <p>
        <link_1.default href="/">
          <a aria-label="Back to Home">Go back home</a>
        </link_1.default>
      </p>
    </main>);
}
exports.default = NotFound;
