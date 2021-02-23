"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logException = exports.logEvent = exports.logPageView = exports.initialize = void 0;
var react_ga_1 = __importDefault(require("react-ga"));
var config_1 = require("../config");
var isProduction = (function () {
    var _a;
    var regex = new RegExp(config_1.domainName + '$'); // ensure domain name includes top-level domain
    var hostname = process.browser ? (_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.hostname : '';
    return regex.test(hostname) && config_1.gaTrackingId !== null;
})();
function initialize() {
    if (isProduction)
        react_ga_1.default.initialize(config_1.gaTrackingId);
}
exports.initialize = initialize;
function logPageView(pathname) {
    if (pathname === void 0) { pathname = window.location.pathname; }
    if (isProduction)
        react_ga_1.default.pageview(pathname);
}
exports.logPageView = logPageView;
function logEvent(_args) { }
exports.logEvent = logEvent;
function logException() { }
exports.logException = logException;
