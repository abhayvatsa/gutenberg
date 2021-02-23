"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typography_1 = __importDefault(require("typography"));
var systemFonts = [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
];
// https://make.wordpress.org/core/2016/07/07/native-fonts-in-4-6/
// Use system fonts for performance: https://bitsofco.de/the-new-system-font-stack/
exports.default = new typography_1.default({
    overrideStyles: function () { return ({}); },
    headerFontFamily: systemFonts,
    bodyFontFamily: systemFonts,
    headerWeight: 'normal',
});
