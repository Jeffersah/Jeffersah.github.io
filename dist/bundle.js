!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=8)}([function(t,n){t.exports=React},function(t,n,e){"use strict";function r(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}e.d(n,"a",function(){return r})},function(t,n,e){t.exports=e(11)()},,function(t,n,e){"use strict";(function(t){var r=e(0),o=e.n(r),i=e(1),a=e(2),c=e.n(a),u=1073741823,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:{};var f=o.a.createContext||function(t,n){var e,o,a,f="__create-react-context-"+(s[a="__global_unique_id__"]=(s[a]||0)+1)+"__",l=function(t){function e(){var n,e,r;return(n=t.apply(this,arguments)||this).emitter=(e=n.props.value,r=[],{on:function(t){r.push(t)},off:function(t){r=r.filter(function(n){return n!==t})},get:function(){return e},set:function(t,n){e=t,r.forEach(function(t){return t(e,n)})}}),n}Object(i.a)(e,t);var r=e.prototype;return r.getChildContext=function(){var t;return(t={})[f]=this.emitter,t},r.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var e,r=this.props.value,o=t.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?e=0:(e="function"==typeof n?n(r,o):u,0!=(e|=0)&&this.emitter.set(t.value,e))}var i,a},r.render=function(){return this.props.children},e}(r.Component);l.childContextTypes=((e={})[f]=c.a.object.isRequired,e);var p=function(n){function e(){var t;return(t=n.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(n,e){0!=((0|t.observedBits)&e)&&t.setState({value:t.getValue()})},t}Object(i.a)(e,n);var r=e.prototype;return r.componentWillReceiveProps=function(t){var n=t.observedBits;this.observedBits=null==n?u:n},r.componentDidMount=function(){this.context[f]&&this.context[f].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?u:t},r.componentWillUnmount=function(){this.context[f]&&this.context[f].off(this.onUpdate)},r.getValue=function(){return this.context[f]?this.context[f].get():t},r.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},e}(r.Component);return p.contextTypes=((o={})[f]=c.a.object,o),{Provider:l,Consumer:p}};n.a=f}).call(this,e(13))},function(t,n,e){var r=e(14);t.exports=h,t.exports.parse=i,t.exports.compile=function(t,n){return c(i(t,n),n)},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,n){for(var e,r=[],i=0,a=0,c="",f=n&&n.delimiter||"/";null!=(e=o.exec(t));){var l=e[0],p=e[1],h=e.index;if(c+=t.slice(a,h),a=h+l.length,p)c+=p[1];else{var d=t[a],v=e[2],m=e[3],y=e[4],g=e[5],w=e[6],b=e[7];c&&(r.push(c),c="");var x=null!=v&&null!=d&&d!==v,P="+"===w||"*"===w,O="?"===w||"*"===w,E=e[2]||f,C=y||g;r.push({name:m||i++,prefix:v||"",delimiter:E,optional:O,repeat:P,partial:x,asterisk:!!b,pattern:C?s(C):b?".*":"[^"+u(E)+"]+?"})}}return a<t.length&&(c+=t.substr(a)),c&&r.push(c),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function c(t,n){for(var e=new Array(t.length),o=0;o<t.length;o++)"object"==typeof t[o]&&(e[o]=new RegExp("^(?:"+t[o].pattern+")$",l(n)));return function(n,o){for(var i="",c=n||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<t.length;s++){var f=t[s];if("string"!=typeof f){var l,p=c[f.name];if(null==p){if(f.optional){f.partial&&(i+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(r(p)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(l=u(p[h]),!e[s].test(l))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===h?f.prefix:f.delimiter)+l}}else{if(l=f.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):u(p),!e[s].test(l))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+l+'"');i+=f.prefix+l}}else i+=f}return i}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function f(t,n){return t.keys=n,t}function l(t){return t&&t.sensitive?"":"i"}function p(t,n,e){r(n)||(e=n||e,n=[]);for(var o=(e=e||{}).strict,i=!1!==e.end,a="",c=0;c<t.length;c++){var s=t[c];if("string"==typeof s)a+=u(s);else{var p=u(s.prefix),h="(?:"+s.pattern+")";n.push(s),s.repeat&&(h+="(?:"+p+h+")*"),a+=h=s.optional?s.partial?p+"("+h+")?":"(?:"+p+"("+h+"))?":p+"("+h+")"}}var d=u(e.delimiter||"/"),v=a.slice(-d.length)===d;return o||(a=(v?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+d+"|$)",f(new RegExp("^"+a,l(e)),n)}function h(t,n,e){return r(n)||(e=n||e,n=[]),e=e||{},t instanceof RegExp?function(t,n){var e=t.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)n.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(t,n)}(t,n):r(t)?function(t,n,e){for(var r=[],o=0;o<t.length;o++)r.push(h(t[o],n,e).source);return f(new RegExp("(?:"+r.join("|")+")",l(e)),n)}(t,n,e):function(t,n,e){return p(i(t,e),n,e)}(t,n,e)}},function(t,n,e){"use strict";t.exports=e(15)},function(t,n,e){"use strict";var r=e(6),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(t){return r.isMemo(t)?a:c[t.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=a;var s=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,d=Object.prototype;t.exports=function t(n,e,r){if("string"!=typeof e){if(d){var o=h(e);o&&o!==d&&t(n,o,r)}var a=f(e);l&&(a=a.concat(l(e)));for(var c=u(n),v=u(e),m=0;m<a.length;++m){var y=a[m];if(!(i[y]||r&&r[y]||v&&v[y]||c&&c[y])){var g=p(e,y);try{s(n,y,g)}catch(t){}}}}return n}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(0),o=e(9),i=e(10);o.render(r.createElement(i.default,null),document.getElementById("react_content"))},function(t,n){t.exports=ReactDOM},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(0),o=e(18),i=e(16);n.default=function(){return r.createElement(o.BrowserRouter,{basename:"/"},r.createElement(o.Route,{exact:!0,path:"/",component:i.HomeComponent}),r.createElement(o.Route,{path:"/projects/",component:i.ProjectsComponent}))}},function(t,n,e){"use strict";var r=e(12);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,n,e,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return t}t.isRequired=t;var e={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return e.PropTypes=e,e}},function(t,n,e){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},function(t,n,e){"use strict";
/** @license React v16.8.4
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(n,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,h=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,v=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116;function y(t){if("object"==typeof t&&null!==t){var n=t.$$typeof;switch(n){case o:switch(t=t.type){case l:case p:case a:case u:case c:case d:return t;default:switch(t=t&&t.$$typeof){case f:case h:case s:return t;default:return n}}case m:case v:case i:return n}}}function g(t){return y(t)===p}n.typeOf=y,n.AsyncMode=l,n.ConcurrentMode=p,n.ContextConsumer=f,n.ContextProvider=s,n.Element=o,n.ForwardRef=h,n.Fragment=a,n.Lazy=m,n.Memo=v,n.Portal=i,n.Profiler=u,n.StrictMode=c,n.Suspense=d,n.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===a||t===p||t===u||t===c||t===d||"object"==typeof t&&null!==t&&(t.$$typeof===m||t.$$typeof===v||t.$$typeof===s||t.$$typeof===f||t.$$typeof===h)},n.isAsyncMode=function(t){return g(t)||y(t)===l},n.isConcurrentMode=g,n.isContextConsumer=function(t){return y(t)===f},n.isContextProvider=function(t){return y(t)===s},n.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===o},n.isForwardRef=function(t){return y(t)===h},n.isFragment=function(t){return y(t)===a},n.isLazy=function(t){return y(t)===m},n.isMemo=function(t){return y(t)===v},n.isPortal=function(t){return y(t)===i},n.isProfiler=function(t){return y(t)===u},n.isStrictMode=function(t){return y(t)===c},n.isSuspense=function(t){return y(t)===d}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(17);n.HomeComponent=r.HomeComponent;var o=e(19);n.ProjectsComponent=o.ProjectsComponent},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(0),o=e(18);n.HomeComponent=function(){return r.createElement("div",null,r.createElement("h1",null,"Hi!"),r.createElement(o.Link,{to:"/projects/"},"Projects"))}},function(t,n,e){"use strict";e.r(n);var r=e(1),o=e(0),i=e.n(o);e(2);function a(){return(a=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function c(t){return"/"===t.charAt(0)}function u(t,n){for(var e=n,r=e+1,o=t.length;r<o;e+=1,r+=1)t[e]=t[r];t.pop()}var s=function(t,n){void 0===n&&(n="");var e,r=t&&t.split("/")||[],o=n&&n.split("/")||[],i=t&&c(t),a=n&&c(n),s=i||a;if(t&&c(t)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var f=o[o.length-1];e="."===f||".."===f||""===f}else e=!1;for(var l=0,p=o.length;p>=0;p--){var h=o[p];"."===h?u(o,p):".."===h?(u(o,p),l++):l&&(u(o,p),l--)}if(!s)for(;l--;l)o.unshift("..");!s||""===o[0]||o[0]&&c(o[0])||o.unshift("");var d=o.join("/");return e&&"/"!==d.substr(-1)&&(d+="/"),d};function f(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}var l=function t(n,e){if(n===e)return!0;if(null==n||null==e)return!1;if(Array.isArray(n))return Array.isArray(e)&&n.length===e.length&&n.every(function(n,r){return t(n,e[r])});if("object"==typeof n||"object"==typeof e){var r=f(n),o=f(e);return r!==n||o!==e?t(r,o):Object.keys(Object.assign({},n,e)).every(function(r){return t(n[r],e[r])})}return!1},p=!0,h="Invariant failed";var d=function(t,n){if(!t){if(p)throw new Error(h);throw new Error(h+": "+(n||""))}};function v(t){return"/"===t.charAt(0)?t:"/"+t}function m(t){return"/"===t.charAt(0)?t.substr(1):t}function y(t,n){return function(t,n){return 0===t.toLowerCase().indexOf(n.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(n.length))}(t,n)?t.substr(n.length):t}function g(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function w(t){var n=t.pathname,e=t.search,r=t.hash,o=n||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function b(t,n,e,r){var o;"string"==typeof t?(o=function(t){var n=t||"/",e="",r="",o=n.indexOf("#");-1!==o&&(r=n.substr(o),n=n.substr(0,o));var i=n.indexOf("?");return-1!==i&&(e=n.substr(i),n=n.substr(0,i)),{pathname:n,search:"?"===e?"":e,hash:"#"===r?"":r}}(t)).state=n:(void 0===(o=a({},t)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==n&&void 0===o.state&&(o.state=n));try{o.pathname=decodeURI(o.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return e&&(o.key=e),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=s(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function x(){var t=null;var n=[];return{setPrompt:function(n){return t=n,function(){t===n&&(t=null)}},confirmTransitionTo:function(n,e,r,o){if(null!=t){var i="function"==typeof t?t(n,e):t;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(t){var e=!0;function r(){e&&t.apply(void 0,arguments)}return n.push(r),function(){e=!1,n=n.filter(function(t){return t!==r})}},notifyListeners:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];n.forEach(function(t){return t.apply(void 0,e)})}}}var P=!("undefined"==typeof window||!window.document||!window.document.createElement);function O(t,n){n(window.confirm(t))}var E="popstate",C="hashchange";function R(){try{return window.history.state||{}}catch(t){return{}}}function j(t){void 0===t&&(t={}),P||d(!1);var n,e=window.history,r=(-1===(n=window.navigator.userAgent).indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,o=!(-1===window.navigator.userAgent.indexOf("Trident")),i=t,c=i.forceRefresh,u=void 0!==c&&c,s=i.getUserConfirmation,f=void 0===s?O:s,l=i.keyLength,p=void 0===l?6:l,h=t.basename?g(v(t.basename)):"";function m(t){var n=t||{},e=n.key,r=n.state,o=window.location,i=o.pathname+o.search+o.hash;return h&&(i=y(i,h)),b(i,r,e)}function j(){return Math.random().toString(36).substr(2,p)}var S=x();function T(t){a(F,t),F.length=e.length,S.notifyListeners(F.location,F.action)}function A(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||M(m(t.state))}function _(){M(m(R()))}var k=!1;function M(t){if(k)k=!1,T();else{S.confirmTransitionTo(t,"POP",f,function(n){n?T({action:"POP",location:t}):function(t){var n=F.location,e=U.indexOf(n.key);-1===e&&(e=0);var r=U.indexOf(t.key);-1===r&&(r=0);var o=e-r;o&&(k=!0,H(o))}(t)})}}var L=m(R()),U=[L.key];function $(t){return h+w(t)}function H(t){e.go(t)}var N=0;function I(t){1===(N+=t)&&1===t?(window.addEventListener(E,A),o&&window.addEventListener(C,_)):0===N&&(window.removeEventListener(E,A),o&&window.removeEventListener(C,_))}var B=!1;var F={length:e.length,action:"POP",location:L,createHref:$,push:function(t,n){var o=b(t,n,j(),F.location);S.confirmTransitionTo(o,"PUSH",f,function(t){if(t){var n=$(o),i=o.key,a=o.state;if(r)if(e.pushState({key:i,state:a},null,n),u)window.location.href=n;else{var c=U.indexOf(F.location.key),s=U.slice(0,c+1);s.push(o.key),U=s,T({action:"PUSH",location:o})}else window.location.href=n}})},replace:function(t,n){var o=b(t,n,j(),F.location);S.confirmTransitionTo(o,"REPLACE",f,function(t){if(t){var n=$(o),i=o.key,a=o.state;if(r)if(e.replaceState({key:i,state:a},null,n),u)window.location.replace(n);else{var c=U.indexOf(F.location.key);-1!==c&&(U[c]=o.key),T({action:"REPLACE",location:o})}else window.location.replace(n)}})},go:H,goBack:function(){H(-1)},goForward:function(){H(1)},block:function(t){void 0===t&&(t=!1);var n=S.setPrompt(t);return B||(I(1),B=!0),function(){return B&&(B=!1,I(-1)),n()}},listen:function(t){var n=S.appendListener(t);return I(1),function(){I(-1),n()}}};return F}var S="hashchange",T={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+m(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:m,decodePath:v},slash:{encodePath:v,decodePath:v}};function A(t){var n=t.indexOf("#");return-1===n?t:t.slice(0,n)}function _(){var t=window.location.href,n=t.indexOf("#");return-1===n?"":t.substring(n+1)}function k(t){window.location.replace(A(window.location.href)+"#"+t)}function M(t){void 0===t&&(t={}),P||d(!1);var n=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),t),r=e.getUserConfirmation,o=void 0===r?O:r,i=e.hashType,c=void 0===i?"slash":i,u=t.basename?g(v(t.basename)):"",s=T[c],f=s.encodePath,l=s.decodePath;function p(){var t=l(_());return u&&(t=y(t,u)),b(t)}var h=x();function m(t){a(B,t),B.length=n.length,h.notifyListeners(B.location,B.action)}var E=!1,C=null;function R(){var t,n,e=_(),r=f(e);if(e!==r)k(r);else{var i=p(),a=B.location;if(!E&&(n=i,(t=a).pathname===n.pathname&&t.search===n.search&&t.hash===n.hash))return;if(C===w(i))return;C=null,function(t){if(E)E=!1,m();else{h.confirmTransitionTo(t,"POP",o,function(n){n?m({action:"POP",location:t}):function(t){var n=B.location,e=U.lastIndexOf(w(n));-1===e&&(e=0);var r=U.lastIndexOf(w(t));-1===r&&(r=0);var o=e-r;o&&(E=!0,$(o))}(t)})}}(i)}}var j=_(),M=f(j);j!==M&&k(M);var L=p(),U=[w(L)];function $(t){n.go(t)}var H=0;function N(t){1===(H+=t)&&1===t?window.addEventListener(S,R):0===H&&window.removeEventListener(S,R)}var I=!1;var B={length:n.length,action:"POP",location:L,createHref:function(t){var n=document.querySelector("base"),e="";return n&&n.getAttribute("href")&&(e=A(window.location.href)),e+"#"+f(u+w(t))},push:function(t,n){var e=b(t,void 0,void 0,B.location);h.confirmTransitionTo(e,"PUSH",o,function(t){if(t){var n=w(e),r=f(u+n);if(_()!==r){C=n,function(t){window.location.hash=t}(r);var o=U.lastIndexOf(w(B.location)),i=U.slice(0,o+1);i.push(n),U=i,m({action:"PUSH",location:e})}else m()}})},replace:function(t,n){var e=b(t,void 0,void 0,B.location);h.confirmTransitionTo(e,"REPLACE",o,function(t){if(t){var n=w(e),r=f(u+n);_()!==r&&(C=n,k(r));var o=U.indexOf(w(B.location));-1!==o&&(U[o]=n),m({action:"REPLACE",location:e})}})},go:$,goBack:function(){$(-1)},goForward:function(){$(1)},block:function(t){void 0===t&&(t=!1);var n=h.setPrompt(t);return I||(N(1),I=!0),function(){return I&&(I=!1,N(-1)),n()}},listen:function(t){var n=h.appendListener(t);return N(1),function(){N(-1),n()}}};return B}function L(t,n,e){return Math.min(Math.max(t,n),e)}var U=e(4),$=e(5),H=e.n($);e(6);function N(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}var I=e(7),B=e.n(I),F=function(t){var n=Object(U.a)();return n.displayName=t,n}("Router-History"),D=function(t){var n=Object(U.a)();return n.displayName=t,n}("Router"),W=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={location:n.history.location},e._isMounted=!1,e._pendingLocation=null,n.staticContext||(e.unlisten=n.history.listen(function(t){e._isMounted?e.setState({location:t}):e._pendingLocation=t})),e}Object(r.a)(n,t),n.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var e=n.prototype;return e.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&this.unlisten()},e.render=function(){return i.a.createElement(D.Provider,{value:{history:this.props.history,location:this.state.location,match:n.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},i.a.createElement(F.Provider,{children:this.props.children||null,value:this.props.history}))},n}(i.a.Component);var V=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=function(t){void 0===t&&(t={});var n=t,e=n.getUserConfirmation,r=n.initialEntries,o=void 0===r?["/"]:r,i=n.initialIndex,c=void 0===i?0:i,u=n.keyLength,s=void 0===u?6:u,f=x();function l(t){a(y,t),y.length=y.entries.length,f.notifyListeners(y.location,y.action)}function p(){return Math.random().toString(36).substr(2,s)}var h=L(c,0,o.length-1),d=o.map(function(t){return b(t,void 0,"string"==typeof t?p():t.key||p())}),v=w;function m(t){var n=L(y.index+t,0,y.entries.length-1),r=y.entries[n];f.confirmTransitionTo(r,"POP",e,function(t){t?l({action:"POP",location:r,index:n}):l()})}var y={length:d.length,action:"POP",location:d[h],index:h,entries:d,createHref:v,push:function(t,n){var r=b(t,n,p(),y.location);f.confirmTransitionTo(r,"PUSH",e,function(t){if(t){var n=y.index+1,e=y.entries.slice(0);e.length>n?e.splice(n,e.length-n,r):e.push(r),l({action:"PUSH",location:r,index:n,entries:e})}})},replace:function(t,n){var r=b(t,n,p(),y.location);f.confirmTransitionTo(r,"REPLACE",e,function(t){t&&(y.entries[y.index]=r,l({action:"REPLACE",location:r}))})},go:m,goBack:function(){m(-1)},goForward:function(){m(1)},canGo:function(t){var n=y.index+t;return n>=0&&n<y.entries.length},block:function(t){return void 0===t&&(t=!1),f.setPrompt(t)},listen:function(t){return f.appendListener(t)}};return y}(n.props),n}return Object(r.a)(n,t),n.prototype.render=function(){return i.a.createElement(W,{history:this.history,children:this.props.children})},n}(i.a.Component);var q=function(t){function n(){return t.apply(this,arguments)||this}Object(r.a)(n,t);var e=n.prototype;return e.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},e.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},e.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},e.render=function(){return null},n}(i.a.Component);function K(t){var n=t.message,e=t.when,r=void 0===e||e;return i.a.createElement(D.Consumer,null,function(t){if(t||d(!1),!r||t.staticContext)return null;var e=t.history.block;return i.a.createElement(q,{onMount:function(t){t.release=e(n)},onUpdate:function(t,r){r.message!==n&&(t.release(),t.release=e(n))},onUnmount:function(t){t.release()},message:n})})}var z={},J=1e4,G=0;function Y(t,n){return void 0===t&&(t="/"),void 0===n&&(n={}),"/"===t?t:function(t){if(z[t])return z[t];var n=H.a.compile(t);return G<J&&(z[t]=n,G++),n}(t)(n,{pretty:!0})}function Q(t){var n=t.computedMatch,e=t.to,r=t.push,o=void 0!==r&&r;return i.a.createElement(D.Consumer,null,function(t){t||d(!1);var r=t.history,c=t.staticContext,u=o?r.push:r.replace,s=b(n?"string"==typeof e?Y(e,n.params):a({},e,{pathname:Y(e.pathname,n.params)}):e);return c?(u(s),null):i.a.createElement(q,{onMount:function(){u(s)},onUpdate:function(t,n){var e,r,o=b(n.to);e=o,r=a({},s,{key:o.key}),e.pathname===r.pathname&&e.search===r.search&&e.hash===r.hash&&e.key===r.key&&l(e.state,r.state)||u(s)},to:e})})}var X={},Z=1e4,tt=0;function nt(t,n){void 0===n&&(n={}),("string"==typeof n||Array.isArray(n))&&(n={path:n});var e=n,r=e.path,o=e.exact,i=void 0!==o&&o,a=e.strict,c=void 0!==a&&a,u=e.sensitive,s=void 0!==u&&u;return[].concat(r).reduce(function(n,e){if(!e&&""!==e)return null;if(n)return n;var r=function(t,n){var e=""+n.end+n.strict+n.sensitive,r=X[e]||(X[e]={});if(r[t])return r[t];var o=[],i={regexp:H()(t,o,n),keys:o};return tt<Z&&(r[t]=i,tt++),i}(e,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(t);if(!u)return null;var f=u[0],l=u.slice(1),p=t===f;return i&&!p?null:{path:e,url:"/"===e&&""===f?"/":f,isExact:p,params:a.reduce(function(t,n,e){return t[n.name]=l[e],t},{})}},null)}var et=function(t){function n(){return t.apply(this,arguments)||this}return Object(r.a)(n,t),n.prototype.render=function(){var t=this;return i.a.createElement(D.Consumer,null,function(n){n||d(!1);var e=t.props.location||n.location,r=a({},n,{location:e,match:t.props.computedMatch?t.props.computedMatch:t.props.path?nt(e.pathname,t.props):n.match}),o=t.props,c=o.children,u=o.component,s=o.render;return Array.isArray(c)&&0===c.length&&(c=null),i.a.createElement(D.Provider,{value:r},r.match?c?"function"==typeof c?c(r):c:u?i.a.createElement(u,r):s?s(r):null:"function"==typeof c?c(r):null)})},n}(i.a.Component);function rt(t){return"/"===t.charAt(0)?t:"/"+t}function ot(t,n){if(!t)return n;var e=rt(t);return 0!==n.pathname.indexOf(e)?n:a({},n,{pathname:n.pathname.substr(e.length)})}function it(t){return"string"==typeof t?t:w(t)}function at(t){return function(){d(!1)}}function ct(){}var ut=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).handlePush=function(t){return n.navigateTo(t,"PUSH")},n.handleReplace=function(t){return n.navigateTo(t,"REPLACE")},n.handleListen=function(){return ct},n.handleBlock=function(){return ct},n}Object(r.a)(n,t);var e=n.prototype;return e.navigateTo=function(t,n){var e=this.props,r=e.basename,o=void 0===r?"":r,i=e.context,c=void 0===i?{}:i;c.action=n,c.location=function(t,n){return t?a({},n,{pathname:rt(t)+n.pathname}):n}(o,b(t)),c.url=it(c.location)},e.render=function(){var t=this.props,n=t.basename,e=void 0===n?"":n,r=t.context,o=void 0===r?{}:r,c=t.location,u=void 0===c?"/":c,s=N(t,["basename","context","location"]),f={createHref:function(t){return rt(e+it(t))},action:"POP",location:ot(e,b(u)),push:this.handlePush,replace:this.handleReplace,go:at(),goBack:at(),goForward:at(),listen:this.handleListen,block:this.handleBlock};return i.a.createElement(W,a({},s,{history:f,staticContext:o}))},n}(i.a.Component);var st=function(t){function n(){return t.apply(this,arguments)||this}return Object(r.a)(n,t),n.prototype.render=function(){var t=this;return i.a.createElement(D.Consumer,null,function(n){n||d(!1);var e,r,o=t.props.location||n.location;return i.a.Children.forEach(t.props.children,function(t){if(null==r&&i.a.isValidElement(t)){e=t;var c=t.props.path||t.props.from;r=c?nt(o.pathname,a({},t.props,{path:c})):n.match}}),r?i.a.cloneElement(e,{location:o,computedMatch:r}):null})},n}(i.a.Component);function ft(t){var n="withRouter("+(t.displayName||t.name)+")",e=function(n){var e=n.wrappedComponentRef,r=N(n,["wrappedComponentRef"]);return i.a.createElement(D.Consumer,null,function(n){return n||d(!1),i.a.createElement(t,a({},r,n,{ref:e}))})};return e.displayName=n,e.WrappedComponent=t,B()(e,t)}var lt=i.a.useContext;function pt(){return lt(F)}function ht(){return lt(D).location}function dt(){var t=lt(D).match;return t?t.params:{}}function vt(t){var n=ht(),e=lt(D).match;return t?nt(n.pathname,t):e}e.d(n,"BrowserRouter",function(){return mt}),e.d(n,"HashRouter",function(){return yt}),e.d(n,"Link",function(){return Ot}),e.d(n,"NavLink",function(){return Rt}),e.d(n,"MemoryRouter",function(){return V}),e.d(n,"Prompt",function(){return K}),e.d(n,"Redirect",function(){return Q}),e.d(n,"Route",function(){return et}),e.d(n,"Router",function(){return W}),e.d(n,"StaticRouter",function(){return ut}),e.d(n,"Switch",function(){return st}),e.d(n,"generatePath",function(){return Y}),e.d(n,"matchPath",function(){return nt}),e.d(n,"useHistory",function(){return pt}),e.d(n,"useLocation",function(){return ht}),e.d(n,"useParams",function(){return dt}),e.d(n,"useRouteMatch",function(){return vt}),e.d(n,"withRouter",function(){return ft});var mt=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=j(n.props),n}return Object(r.a)(n,t),n.prototype.render=function(){return i.a.createElement(W,{history:this.history,children:this.props.children})},n}(i.a.Component);var yt=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=M(n.props),n}return Object(r.a)(n,t),n.prototype.render=function(){return i.a.createElement(W,{history:this.history,children:this.props.children})},n}(i.a.Component);var gt=function(t,n){return"function"==typeof t?t(n):t},wt=function(t,n){return"string"==typeof t?b(t,null,null,n):t},bt=function(t){return t},xt=i.a.forwardRef;void 0===xt&&(xt=bt);var Pt=xt(function(t,n){var e=t.innerRef,r=t.navigate,o=t.onClick,c=N(t,["innerRef","navigate","onClick"]),u=c.target,s=a({},c,{onClick:function(t){try{o&&o(t)}catch(n){throw t.preventDefault(),n}t.defaultPrevented||0!==t.button||u&&"_self"!==u||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return s.ref=bt!==xt&&n||e,i.a.createElement("a",s)});var Ot=xt(function(t,n){var e=t.component,r=void 0===e?Pt:e,o=t.replace,c=t.to,u=t.innerRef,s=N(t,["component","replace","to","innerRef"]);return i.a.createElement(D.Consumer,null,function(t){t||d(!1);var e=t.history,f=wt(gt(c,t.location),t.location),l=f?e.createHref(f):"",p=a({},s,{href:l,navigate:function(){var n=gt(c,t.location);(o?e.replace:e.push)(n)}});return bt!==xt?p.ref=n||u:p.innerRef=u,i.a.createElement(r,p)})}),Et=function(t){return t},Ct=i.a.forwardRef;void 0===Ct&&(Ct=Et);var Rt=Ct(function(t,n){var e=t["aria-current"],r=void 0===e?"page":e,o=t.activeClassName,c=void 0===o?"active":o,u=t.activeStyle,s=t.className,f=t.exact,l=t.isActive,p=t.location,h=t.sensitive,v=t.strict,m=t.style,y=t.to,g=t.innerRef,w=N(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.a.createElement(D.Consumer,null,function(t){t||d(!1);var e=p||t.location,o=wt(gt(y,e),e),b=o.pathname,x=b&&b.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1"),P=x?nt(e.pathname,{path:x,exact:f,sensitive:h,strict:v}):null,O=!!(l?l(P,e):P),E=O?function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.filter(function(t){return t}).join(" ")}(s,c):s,C=O?a({},m,{},u):m,R=a({"aria-current":O&&r||null,className:E,style:C,to:o},w);return Et!==Ct?R.ref=n||g:R.innerRef=g,i.a.createElement(Ot,R)})})},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(0);n.ProjectsComponent=function(){return r.createElement("div",null,r.createElement("h1",null,"Let's see some projects!"))}}]);
//# sourceMappingURL=bundle.js.map