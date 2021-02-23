"use strict";
// @media (min-width:320px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
// @media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ }
// @media (min-width:600px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
// @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
// @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
// @media (min-width:1281px) { /* hi-res laptops and desktops */ }
Object.defineProperty(exports, "__esModule", { value: true });
// iPhone 5 = 320 x 568 (original iPhone)
// iPhone X = 375 x 812
// iPhone 12 = 390 x 844
// iPhone Pro Max = 428 x 926
// iPad = 768 x 1024
// iPad Pro = 1024 x 1366
// desktop = 1280+
var breakpoints = {
    // Other targeting ideas: [360, 768, 1024, 1280] or [360, 568, 1280]
    sm: 0,
    md: 569,
    lg: 1280,
};
exports.default = (function () {
    function up(key) {
        // [key, infinity): Greater than and including the size
        return "screen and (min-width: " + breakpoints[key] + "px)";
    }
    function down(key) {
        // [0, key): Less than the size
        return "screen and (max-width: " + (breakpoints[key] - 1) + "px)";
    }
    function between(start, end) {
        // [start, end)
        return "screen and (min-width: " + breakpoints[start] + "px) and (max-width: " + (breakpoints[end] - 1) + "px)";
    }
    return {
        up: up,
        down: down,
        between: between,
    };
})();
