"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsScrolled = void 0;
var react_1 = require("react");
var useIsScrolled = function () {
    var _a = react_1.useState(false), isScrolled = _a[0], setIsScrolled = _a[1];
    react_1.useEffect(function () {
        var handleScroll = function () {
            var scrollTop = document.body != undefined ? document.body.scrollTop : 0;
            // Call react hook isScrolled has a delta
            if (isScrolled !== (window.pageYOffset || scrollTop) > 0) {
                setIsScrolled(!isScrolled);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return function () { return window.removeEventListener('scroll', handleScroll); };
    }, [isScrolled]);
    return isScrolled;
};
exports.useIsScrolled = useIsScrolled;
