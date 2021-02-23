"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.gaTrackingId = exports.links = exports.subtitle = exports.sections = exports.headline = exports.title = exports.owner = exports.keywords = exports.domainName = exports.description = exports.about = void 0;
var config = __importStar(require("../config"));
exports.about = config.about;
exports.description = config.description;
exports.domainName = config.domainName;
exports.keywords = config.keywords;
exports.owner = config.owner;
exports.title = config.title;
exports.headline = config.headline;
exports.sections = config.sections;
exports.subtitle = config.subtitle;
exports.links = config.links;
// Analytics
exports.gaTrackingId = config.gaTrackingId || null;
