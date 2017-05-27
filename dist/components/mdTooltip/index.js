/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})(this,(function(){return (function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=436)})({0:function(t,e){t.exports=function(t,e,n,o){var r,i=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(r=t,i=t.default);var c="function"==typeof i?i.options:i;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),n&&(c._scopeId=n),o){var s=c.computed||(c.computed={});Object.keys(o).forEach((function(t){var e=o[t];s[t]=function(){return e}}))}return{esModule:r,exports:i,options:c}}},104:function(t,e,n){"use strict";function o(t){t.component("md-tooltip",i.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(332),i=(function(t){return t&&t.__esModule?t:{default:t}})(r);t.exports=e.default},11:function(t,e,n){var o=n(7),r=n(17);t.exports=n(3)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},12:function(t,e,n){var o=n(22)("wks"),r=n(20),i=n(2).Symbol,u="function"==typeof i;(t.exports=function(t){return o[t]||(o[t]=u&&i[t]||(u?i:r)("Symbol."+t))}).store=o},13:function(t,e,n){var o=n(6);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},14:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},15:function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},16:function(t,e,n){var o=n(2),r=n(4),i=n(27),u=n(11),c=function(t,e,n){var s,f,a,l=t&c.F,p=t&c.G,d=t&c.S,v=t&c.P,h=t&c.B,m=t&c.W,y=p?r:r[e]||(r[e]={}),x=y.prototype,b=p?o:d?o[e]:(o[e]||{}).prototype;p&&(n=e);for(s in n)(f=!l&&b&&void 0!==b[s])&&s in y||(a=f?b[s]:n[s],y[s]=p&&"function"!=typeof b[s]?n[s]:h&&f?i(a,o):m&&b[s]==a?(function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e})(a):v&&"function"==typeof a?i(Function.call,a):a,v&&((y.virtual||(y.virtual={}))[s]=a,t&c.R&&x&&!x[s]&&u(x,s,a)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},17:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},174:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(61),i=o(r),u=n(37),c=o(u);e.default={props:{mdDirection:{type:String,default:"bottom"},mdDelay:{type:String,default:"0"}},data:function(){return{active:!1,parentClass:null,transitionOff:!1,topPosition:!1,leftPosition:!1}},computed:{classes:function(){var t={"md-active":this.active,"md-transition-off":this.transitionOff,"md-tooltip-top":"top"===this.mdDirection,"md-tooltip-right":"right"===this.mdDirection,"md-tooltip-bottom":"bottom"===this.mdDirection,"md-tooltip-left":"left"===this.mdDirection};return this.parentClass&&(t[this.parentClass]=!0),t},style:function(){return{"transition-delay":this.mdDelay+"ms",top:this.topPosition+"px",left:this.leftPosition+"px"}}},watch:{mdDirection:function(){this.calculateTooltipPosition()}},methods:{removeTooltips:function(){this.tooltipElement.parentNode&&(this.tooltipElement.removeEventListener(c.default,this.removeTooltips),this.tooltipElement.parentNode.removeChild(this.tooltipElement))},calculateTooltipPosition:function(){var t=this.parentElement.getBoundingClientRect(),e={};switch(this.mdDirection){case"top":e.top=t.top-this.$el.offsetHeight,e.left=t.left+t.width/2;break;case"right":e.top=t.top,e.left=t.left+t.width;break;case"bottom":e.top=t.bottom,e.left=t.left+t.width/2;break;case"left":e.top=t.top,e.left=t.left-this.$el.offsetWidth;break;default:console.warn("Invalid "+this.mdDirection+" option to md-direction option")}this.topPosition=e.top,this.leftPosition=e.left},generateTooltipClasses:function(){var t=[];[].concat((0,i.default)(this.parentElement.classList)).forEach((function(e){e.indexOf("md-")>=0&&"md-active"!==e&&t.push(e+"-tooltip")})),this.parentClass=t.join(" ")},open:function(){var t=this;this.removeTooltips(),this.$nextTick((function(){document.body.appendChild(t.tooltipElement),getComputedStyle(t.tooltipElement).top,t.transitionOff=!0,t.generateTooltipClasses(),t.calculateTooltipPosition(),window.setTimeout((function(){t.transitionOff=!1,t.active=!0}),10)}))},close:function(){this.active=!1,this.tooltipElement.removeEventListener(c.default,this.removeTooltips),this.tooltipElement.addEventListener(c.default,this.removeTooltips)}},mounted:function(){var t=this;this.$nextTick((function(){t.tooltipElement=t.$el,t.parentElement=t.tooltipElement.parentNode,t.$el.parentNode.removeChild(t.$el),t.parentElement.addEventListener("mouseenter",t.open),t.parentElement.addEventListener("focus",t.open),t.parentElement.addEventListener("mouseleave",t.close),t.parentElement.addEventListener("blur",t.close)}))},beforeDestroy:function(){this.active=!1,this.removeTooltips(),this.parentElement&&(this.parentElement.removeEventListener("mouseenter",this.open),this.parentElement.removeEventListener("focus",this.open),this.parentElement.removeEventListener("mouseleave",this.close),this.parentElement.removeEventListener("blur",this.close))}},t.exports=e.default},18:function(t,e,n){var o=n(31),r=n(21);t.exports=Object.keys||function(t){return o(t,r)}},19:function(t,e,n){var o=n(22)("keys"),r=n(20);t.exports=function(t){return o[t]||(o[t]=r(t))}},2:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},20:function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},21:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},22:function(t,e,n){var o=n(2),r=o["__core-js_shared__"]||(o["__core-js_shared__"]={});t.exports=function(t){return r[t]||(r[t]={})}},23:function(t,e,n){var o=n(14);t.exports=function(t){return Object(o(t))}},234:function(t,e){},24:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},25:function(t,e,n){var o=n(6),r=n(2).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},26:function(t,e,n){var o=n(6);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},27:function(t,e,n){var o=n(32);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},28:function(t,e,n){var o=n(24);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},29:function(t,e,n){var o=n(15),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},3:function(t,e,n){t.exports=!n(5)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},30:function(t,e,n){t.exports=!n(3)&&!n(5)((function(){return 7!=Object.defineProperty(n(25)("div"),"a",{get:function(){return 7}}).a}))},31:function(t,e,n){var o=n(9),r=n(8),i=n(33)(!1),u=n(19)("IE_PROTO");t.exports=function(t,e){var n,c=r(t),s=0,f=[];for(n in c)n!=u&&o(c,n)&&f.push(n);for(;e.length>s;)o(c,n=e[s++])&&(~i(f,n)||f.push(n));return f}},32:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},33:function(t,e,n){var o=n(8),r=n(29),i=n(35);t.exports=function(t){return function(e,n,u){var c,s=o(e),f=r(s.length),a=i(u,f);if(t&&n!=n){for(;f>a;)if((c=s[a++])!=c)return!0}else for(;f>a;a++)if((t||a in s)&&s[a]===n)return t||a||0;return!t&&-1}}},332:function(t,e,n){n(234);var o=n(0)(n(174),n(396),null,null);t.exports=o.exports},34:function(t,e){t.exports={}},35:function(t,e,n){var o=n(15),r=Math.max,i=Math.min;t.exports=function(t,e){return t=o(t),t<0?r(t+e,0):i(t,e)}},36:function(t,e,n){var o=n(7).f,r=n(9),i=n(12)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e})}},37:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=(function(){var t=document.createElement("span"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in e)if(void 0!==t.style[n])return e[n]})(),t.exports=e.default},39:function(t,e){t.exports=!0},396:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"md-tooltip",class:t.classes,style:t.style},[t._t("default")],2)},staticRenderFns:[]}},4:function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},43:function(t,e,n){"use strict";var o=n(39),r=n(16),i=n(47),u=n(11),c=n(9),s=n(34),f=n(52),a=n(36),l=n(54),p=n(12)("iterator"),d=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,h,m,y,x){f(n,e,h);var b,g,E,_=function(t){if(!d&&t in P)return P[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",w="values"==m,j=!1,P=t.prototype,T=P[p]||P["@@iterator"]||m&&P[m],M=T||_(m),S=m?w?_("entries"):M:void 0,A="Array"==e?P.entries||T:T;if(A&&(E=l(A.call(new t)))!==Object.prototype&&(a(E,O,!0),o||c(E,p)||u(E,p,v)),w&&T&&"values"!==T.name&&(j=!0,M=function(){return T.call(this)}),o&&!x||!d&&!j&&P[p]||u(P,p,M),s[e]=M,s[O]=v,m)if(b={values:w?M:_("values"),keys:y?M:_("keys"),entries:S},x)for(g in b)g in P||i(P,g,b[g]);else r(r.P+r.F*(d||j),e,b);return b}},436:function(t,e,n){t.exports=n(104)},44:function(t,e,n){var o=n(13),r=n(53),i=n(21),u=n(19)("IE_PROTO"),c=function(){},s=function(){var t,e=n(25)("iframe"),o=i.length;for(e.style.display="none",n(51).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;o--;)delete s.prototype[i[o]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=o(t),n=new c,c.prototype=null,n[u]=t):n=s(),void 0===e?n:r(n,e)}},47:function(t,e,n){t.exports=n(11)},49:function(t,e,n){"use strict";var o=n(55)(!0);n(43)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})}))},5:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},51:function(t,e,n){t.exports=n(2).document&&document.documentElement},52:function(t,e,n){"use strict";var o=n(44),r=n(17),i=n(36),u={};n(11)(u,n(12)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=o(u,{next:r(1,n)}),i(t,e+" Iterator")}},53:function(t,e,n){var o=n(7),r=n(13),i=n(18);t.exports=n(3)?Object.defineProperties:function(t,e){r(t);for(var n,u=i(e),c=u.length,s=0;c>s;)o.f(t,n=u[s++],e[n]);return t}},54:function(t,e,n){var o=n(9),r=n(23),i=n(19)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},55:function(t,e,n){var o=n(15),r=n(14);t.exports=function(t){return function(e,n){var i,u,c=String(r(e)),s=o(n),f=c.length;return s<0||s>=f?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===f||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):u-56320+(i-55296<<10)+65536)}}},6:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},61:function(t,e,n){"use strict";e.__esModule=!0;var o=n(62),r=(function(t){return t&&t.__esModule?t:{default:t}})(o);e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,r.default)(t)}},62:function(t,e,n){t.exports={default:n(63),__esModule:!0}},63:function(t,e,n){n(49),n(73),t.exports=n(4).Array.from},65:function(t,e,n){var o=n(24),r=n(12)("toStringTag"),i="Arguments"==o(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),r))?n:i?o(e):"Object"==(c=o(e))&&"function"==typeof e.callee?"Arguments":c}},66:function(t,e,n){"use strict";var o=n(7),r=n(17);t.exports=function(t,e,n){e in t?o.f(t,e,r(0,n)):t[e]=n}},67:function(t,e,n){var o=n(34),r=n(12)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||i[r]===t)}},68:function(t,e,n){var o=n(13);t.exports=function(t,e,n,r){try{return r?e(o(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&o(i.call(t)),e}}},69:function(t,e,n){var o=n(12)("iterator"),r=!1;try{var i=[7][o]();i.return=function(){r=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var i=[7],u=i[o]();u.next=function(){return{done:n=!0}},i[o]=function(){return u},t(i)}catch(t){}return n}},7:function(t,e,n){var o=n(13),r=n(30),i=n(26),u=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},72:function(t,e,n){var o=n(65),r=n(12)("iterator"),i=n(34);t.exports=n(4).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||i[o(t)]}},73:function(t,e,n){"use strict";var o=n(27),r=n(16),i=n(23),u=n(68),c=n(67),s=n(29),f=n(66),a=n(72);r(r.S+r.F*!n(69)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,r,l,p=i(t),d="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,m=void 0!==h,y=0,x=a(p);if(m&&(h=o(h,v>2?arguments[2]:void 0,2)),void 0==x||d==Array&&c(x))for(e=s(p.length),n=new d(e);e>y;y++)f(n,y,m?h(p[y],y):p[y]);else for(l=x.call(p),n=new d;!(r=l.next()).done;y++)f(n,y,m?u(l,h,[r.value,y],!0):r.value);return n.length=y,n}})},8:function(t,e,n){var o=n(28),r=n(14);t.exports=function(t){return o(r(t))}},9:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}}})}));