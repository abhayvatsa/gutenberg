"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var head_1 = __importDefault(require("next/head"));
var router_1 = __importDefault(require("next/router"));
var globals_1 = __importDefault(require("../styles/globals"));
var analytics_1 = require("../lib/analytics");
var Header_1 = __importDefault(require("../components/Header"));
var Footer_1 = __importDefault(require("../components/Footer"));
var theme_1 = __importDefault(require("../styles/theme"));
var config_1 = require("../config");
function App(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    react_1.useEffect(function () {
        analytics_1.initialize();
        analytics_1.logPageView(); // Initial page view
        router_1.default.events.on('routeChangeComplete', analytics_1.logPageView);
    }, []);
    return (<>
      <head_1.default>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width"/>
        <config_1.title>{config_1.title}</config_1.title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="description" content={config_1.description}/>
        <meta name="keywords" content={config_1.keywords.join(', ')}/>
        <meta name="author" content={config_1.owner}/>
      </head_1.default>
      <style jsx global>
        {theme_1.default}
      </style>
      <style jsx global>
        {globals_1.default}
      </style>
      <Header_1.default domainName={config_1.domainName}/>
      <Component {...pageProps}/>
      <Footer_1.default links={config_1.links}/>
    </>);
}
exports.default = App;
