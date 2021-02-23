"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = exports.getStaticPaths = void 0;
var head_1 = __importDefault(require("next/head"));
var render_to_string_1 = __importDefault(require("next-mdx-remote/render-to-string"));
var options_1 = require("../../plugins/options");
var data_1 = require("../../data");
var data_2 = require("../../data/"); //TODO, move this to getFile, etc
var Article_1 = __importStar(require("../../components/Article"));
var ArticlePage = function (_a) {
    var source = _a.source, title = _a.title, summary = _a.summary;
    return (<>
      <head_1.default>
        <title>{title}</title>
        <meta name="description" content={summary}/>
        <meta property="og:title" content={summary}/>
      </head_1.default>
      <style jsx>{"\n        margin: 16px;\n      "}</style>
      <main className="root">
        <Article_1.default source={source}/>
      </main>
    </>);
};
function getStaticPaths() {
    return __awaiter(this, void 0, void 0, function () {
        var articles;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, data_1.getArticleFilenames()];
                case 1:
                    articles = _a.sent();
                    return [2 /*return*/, {
                            paths: articles.map(function (filename) { return ({
                                params: {
                                    filename: filename,
                                },
                            }); }),
                            fallback: false,
                        }];
            }
        });
    });
}
exports.getStaticPaths = getStaticPaths;
var getStaticProps = function (_a) {
    var params = _a.params;
    return __awaiter(void 0, void 0, void 0, function () {
        var _b, content, rest, mdxSource;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, data_1.getFile(data_2.articleDir + "/" + (params === null || params === void 0 ? void 0 : params.filename))];
                case 1:
                    _b = _c.sent(), content = _b.content, rest = __rest(_b, ["content"]);
                    return [4 /*yield*/, render_to_string_1.default(content, {
                            components: Article_1.components,
                            mdxOptions: options_1.mdxOptions,
                        })];
                case 2:
                    mdxSource = _c.sent();
                    return [2 /*return*/, { props: __assign({ source: mdxSource }, rest) }];
            }
        });
    });
};
exports.getStaticProps = getStaticProps;
exports.default = ArticlePage;
