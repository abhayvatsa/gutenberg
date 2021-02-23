module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YNMu");


/***/ }),

/***/ "YNMu":
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/abhayvatsa/Desktop/gutenberg/gutenberg/node_modules/next/dist/build/webpack/loaders/next-babel-loader.js):\nSyntaxError: /Users/abhayvatsa/Desktop/gutenberg/gutenberg/dist/gutenberg/pages/_app.jsx: Expected a template literal or String literal as the child of the JSX Style tag (eg: <style jsx>{`some css`}</style>), but got MemberExpression\n  20 |         router_1.default.events.on('routeChangeComplete', analytics_1.logPageView);\n  21 |     }, []);\n> 22 |     return (<>\n     |             ^\n  23 |       <head_1.default>\n  24 |         <meta charSet=\"utf-8\"/>\n  25 |         <meta name=\"viewport\" content=\"width=device-width\"/>\n    at File.buildCodeFrameError (/Users/abhayvatsa/Desktop/gutenberg/gutenberg/node_modules/next/dist/compiled/babel/bundle.js:13:10556)\n    at NodePath.buildCodeFrameError (/Users/abhayvatsa/Desktop/gutenberg/gutenberg/node_modules/next/dist/compiled/babel/bundle.js:2192:109137)\n    at PluginPass.enter (/Users/abhayvatsa/Desktop/gutenberg/gutenberg/node_modules/styled-jsx/dist/babel.js:110:24)\n    at NodePath._call (/Users/abhayvatsa/Desktop/gutenberg/gutenberg/node_modules/next/dist/compiled/babel/bundle.js:2192:83914)\n    at NodePath.call (/Users/abhayvatsa/Desktop/gutenberg/gutenberg/node_modules/next/dist/compiled/babel/bundle.js:2192:83738)\n    at NodePath.visit (/Users/abhayvatsa/Desktop/gutenberg/gutenberg/node_modules/next/dist/compiled/babel/bundle.js:2192:84689)\n    at TraversalContext.visitQueue (/Users/abhayvatsa/Desktop/gutenberg/gutenberg/node_modules/next/dist/compiled/babel/bundle.js:2192:75651)\n    at TraversalContext.visitSingle (/Users/abhayvatsa/Desktop/gutenberg/gutenberg/node_modules/next/dist/compiled/babel/bundle.js:2192:75298)\n    at TraversalContext.visit (/Users/abhayvatsa/Desktop/gutenberg/gutenberg/node_modules/next/dist/compiled/babel/bundle.js:2192:75960)\n    at Function.traverse.node (/Users/abhayvatsa/Desktop/gutenberg/gutenberg/node_modules/next/dist/compiled/babel/bundle.js:2192:78305)\n    at NodePath.visit (/Users/abhayvatsa/Desktop/gutenberg/gutenberg/node_modules/next/dist/compiled/babel/bundle.js:2192:84808)\n    at TraversalContext.visitQueue (/Users/abhayvatsa/Desktop/gutenberg/gutenberg/node_modules/next/dist/compiled/babel/bundle.js:2192:75651)\n    at TraversalContext.visitMultiple (/Users/abhayvatsa/Desktop/gutenberg/gutenberg/node_modules/next/dist/compiled/babel/bundle.js:2192:75228)\n    at TraversalContext.visit (/Users/abhayvatsa/Desktop/gutenberg/gutenberg/node_modules/next/dist/compiled/babel/bundle.js:2192:75922)\n    at Function.traverse.node (/Users/abhayvatsa/Desktop/gutenberg/gutenberg/node_modules/next/dist/compiled/babel/bundle.js:2192:78305)\n    at NodePath.visit (/Users/abhayvatsa/Desktop/gutenberg/gutenberg/node_modules/next/dist/compiled/babel/bundle.js:2192:84808)");

/***/ })

/******/ });