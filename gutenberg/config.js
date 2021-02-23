"use strict";
exports.__esModule = true;
exports.gaTrackingId = exports.links = exports.subtitle = exports.sections = exports.headline = exports.title = exports.owner = exports.keywords = exports.domainName = exports.description = exports.about = void 0;
var config = require("../config");
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
