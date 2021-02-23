"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeading = void 0;
var remark_1 = __importDefault(require("remark"));
var unist_util_visit_1 = __importDefault(require("unist-util-visit"));
// TODO: cleanup
// This function parses "h1" from markdown AST
function getHeading(source) {
    var needle = null;
    remark_1.default()
        .use(function () { return function (tree, file) {
        unist_util_visit_1.default(tree, 'heading', function (node) {
            if (node.depth === 1) {
                needle = node;
            }
        });
    }; })
        .process(source);
    // @ts-ignore
    return needle === null || needle === void 0 ? void 0 : needle.children[0].value;
}
exports.getHeading = getHeading;
