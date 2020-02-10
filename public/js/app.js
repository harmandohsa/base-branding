!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var t={},i={},n={},o={}.hasOwnProperty,s=/^\.\.?(\/|$)/,r=function(e,t){for(var i,n=[],o=(s.test(t)?e+"/"+t:t).split("/"),r=0,a=o.length;r<a;r++)i=o[r],".."===i?n.pop():"."!==i&&""!==i&&n.push(i);return n.join("/")},a=function(e){return e.split("/").slice(0,-1).join("/")},l=function(t){return function(i){var n=r(a(t),i);return e.require(n,t)}},c=function(e,t){var n=m&&m.createHot(e),o={id:e,exports:{},hot:n};return i[e]=o,t(o.exports,l(e),o),o.exports},u=function(e){var t=n[e];return t&&e!==t?u(t):e},g=function(e,t){return u(r(a(e),t))},d=function(e,n){null==n&&(n="/");var s=u(e);if(o.call(i,s))return i[s].exports;if(o.call(t,s))return c(s,t[s]);throw new Error("Cannot find module '"+e+"' from '"+n+"'")};d.alias=function(e,t){n[t]=e};var p=/\.[^.\/]+$/,f=/\/index(\.[^\/]+)?$/,h=function(e){if(p.test(e)){var t=e.replace(p,"");o.call(n,t)&&n[t].replace(p,"")!==t+"/index"||(n[t]=e)}if(f.test(e)){var i=e.replace(f,"");o.call(n,i)||(n[i]=e)}};d.register=d.define=function(e,n){if(e&&"object"==typeof e)for(var s in e)o.call(e,s)&&d.register(s,e[s]);else t[e]=n,delete i[e],h(e)},d.list=function(){var e=[];for(var i in t)o.call(t,i)&&e.push(i);return e};var m=e._hmr&&new e._hmr(g,d,t,i);d._cache=i,d.hmr=m&&m.wrap,d.brunch=!0,e.require=d}}(),function(){var e;"undefined"==typeof window?this:window;require.register("js/i18next-config.js",function(e,t,i){"use strict";var n=t("./settings"),o=t("i18next"),s=t("jquery-i18next"),r=t("i18next-service-backend")["default"],a=t("i18next-browser-languagedetector"),l=t("i18next-localstorage-cache"),c=t("domurl"),u=t("js-cookie"),g={service:"https://l-a.site",projectId:"",apiKey:"",referenceLng:"en",version:"locales"},d=new r;d.init(null,g);var p=new c,f="la-lang-session",h={backend:g,fallbackLng:{zh:["en"],"default":["en"]},sendMissingTo:"fallback",interpolation:{escapeValue:!1,formatSeparator:",",format:function(e,t,i){return"uppercase"===t?e.toUpperCase():e instanceof Date?moment(e).format(t):"number"===t?Intl.NumberFormat(i).format(e):e}},whitelist:n.enabledLangs,load:"languageOnly",debug:!0,ns:"common",defaultNS:"common",saveMissing:!0,saveMissingTo:"en",keySeparator:"ß",nsSeparator:"ð",pluralSeparator:"đ"},m={order:["querystring","cookie","navigator","localStorage","htmlTag"],lookupQuerystring:"lang",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",cookieMinutes:525600,caches:["cookie"],excludeCacheFor:["cimode"]};"localhost:3333"!==document.location.host&&(m.cookieDomain=n.mainDomain);var v={enabled:!1,prefix:"i18next_res_",expirationTime:6048e5,versions:{}};h.cache=v,h.detection=m,h.sendMissing=!1,h.missingKeyHandler=function(e,t,i,n){console.log('"'+i+'": "'+n+'"')},o.on("languageChanged",function(e){o.services.languageDetector&&(console.log("On lang changed "+e),o.services.languageDetector.cacheUserLanguage(e))}),o.use(d).use(a).use(l).init(h,function(e,t){if(e)return void console.error(e);if(console.log("Language initialized: "+o.language),s.init(o,$),$("body").localize(),$(".locale-link").on("click",function(e){e.preventDefault();var t=$(this).data("locale");console.log("Lang clicked "+t),o.changeLanguage(t),p.query.lang=t,document.location.search=p.query}),"undefined"==typeof u.get(f)&&"undefined"==typeof p.query.lang){var i=1/48;u.set(f,"/",{expires:i}),p.query.lang=o.language,document.location.search=p.query}})}),require.register("js/index-auth.js",function(e,t,i){"use strict";var n=t("js-cookie"),o=t("./settings"),s="ALA-Auth";if(document.location.host===o.mainDomain||"localhost:3333"===document.location.host){o.isDevel&&console.log("We are in the main url, let's see if we are authenticated");var r=n.get(s),a=1/48;"undefined"==typeof r&&o.isDevel&&(console.log("We set a test cookie if we are in development"),n.set(s,"/",{expires:a})),"undefined"!=typeof r?(o.isDevel&&console.log("Auth cookie present so logged in"),$("#drawer-nav-menu").removeClass("signedOut").addClass("signedIn")):(o.isDevel&&console.log("No auth cookie not present so not-logged in"),$("#drawer-nav-menu").removeClass("signedIn").addClass("signedOut"))}else o.isDevel&&console.log("We aren't in the main url")}),require.register("js/init.js",function(e,t,i){"use strict";t("./settings.js")["default"],t("./index-auth.js"),t("./i18next-config.js"),document.addEventListener("DOMContentLoaded",function(){console.log("LA skin initialized")})}),require.register("js/settings.js",function(e,t,i){"use strict";i.exports={isDevel:!0,enabledLangs:["en","es","zh"],mainDomain:"l-a.site",mainLAUrl:"https://l-a.site",baseFooterUrl:"https://l-a.site",services:{collectory:{url:"https://collections.l-a.site",title:"Collections"},biocache:{url:"https://biocache.l-a.site",title:"Occurrence records"},bie:{url:"https://especies.gbif.es",title:"Species"},bieDis:{url:"https://species.l-a.site",title:"Species"},regions:{url:"https://regions.l-a.site",title:"Regions"},lists:{url:"https://lists.l-a.site",title:"Species List"},spatial:{url:"https://spatial.l-a.site",title:"Spatial Portal"},images:{url:"https://images.l-a.site",title:"Images Service"},cas:{url:"https://auth.l-a.site",title:"CAS"}},otherLinks:[{title:"Datasets",url:"https://collections.l-a.site/datasets"},{title:"Explore your area",url:"http://biocache.l-a.site/explore/your-area/"},{title:"Datasets",url:"https://collections.l-a.site/datasets"},{title:"twitter",url:"",icon:"twitter"}]}}),require.alias("process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,t,i){})}(),require("___globals___");