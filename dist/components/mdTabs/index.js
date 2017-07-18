/*!
* Vue Material v0.11.3
* Made with love by Marcos Moura
* And RTL Support By Hussein Jahanbakhsh
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})(this,(function(){return (function(t){function e(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=434)})({0:function(t,e){t.exports=function(t,e,n,a){var i,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(i=t,r=t.default);var s="function"==typeof r?r.options:r;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),a){var c=s.computed||(s.computed={});Object.keys(a).forEach((function(t){var e=a[t];c[t]=function(){return e}}))}return{esModule:i,exports:r,options:s}}},1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(t){return!(!t||!t.$el||0===t._uid)&&(t.mdTheme||t.mdName?t:this.getClosestThemedParent(t.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var t=this.closestThemedParent.mdTheme;return t||(t=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+t}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},t.exports=e.default},10:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function t(e,n){return!(!e||!e.$el)&&(0!==e._uid&&(e.$el.classList.contains(n)?e:t(e.$parent,n)))};e.default=a,t.exports=e.default},102:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-tabs",o.default),t.component("md-tab",c.default),t.material.styles.push(u.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(330),o=a(r),s=n(329),c=a(s),d=n(263),u=a(d);t.exports=e.default},11:function(t,e,n){var a=n(7),i=n(17);t.exports=n(3)?function(t,e,n){return a.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},116:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t,e){var n=!1;return function(){n||(t.call(),n=!0,window.setTimeout((function(){n=!1}),e))}};e.default=a,t.exports=e.default},13:function(t,e,n){var a=n(6);t.exports=function(t){if(!a(t))throw TypeError(t+" is not an object!");return t}},14:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},15:function(t,e){var n=Math.ceil,a=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?a:n)(t)}},16:function(t,e,n){var a=n(2),i=n(4),r=n(27),o=n(11),s=function(t,e,n){var c,d,u,f=t&s.F,l=t&s.G,b=t&s.S,m=t&s.P,h=t&s.B,p=t&s.W,v=l?i:i[e]||(i[e]={}),T=v.prototype,g=l?a:b?a[e]:(a[e]||{}).prototype;l&&(n=e);for(c in n)(d=!f&&g&&void 0!==g[c])&&c in v||(u=d?g[c]:n[c],v[c]=l&&"function"!=typeof g[c]?n[c]:h&&d?r(u,a):p&&g[c]==u?(function(t){var e=function(e,n,a){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,a)}return t.apply(this,arguments)};return e.prototype=t.prototype,e})(u):m&&"function"==typeof u?r(Function.call,u):u,m&&((v.virtual||(v.virtual={}))[c]=u,t&s.R&&T&&!T[c]&&o(T,c,u)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},17:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},171:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(41),r=a(i),o=n(10),s=a(o);e.default={props:{id:[String,Number],mdLabel:[String,Number],mdIcon:String,mdActive:Boolean,mdDisabled:Boolean,mdTooltip:String,isRtl:{type:Boolean,default:!0},mdTooltipDelay:{type:String,default:"0"},mdTooltipDirection:{type:String,default:"bottom"}},data:function(){return!0===this.isRtl?{mounted:!1,tabId:this.id||"tab-"+(0,r.default)(),width:"0px",right:"0px"}:{mounted:!1,tabId:this.id||"tab-"+(0,r.default)(),width:"0px",left:"0px"}},watch:{mdActive:function(){this.updateTabData()},mdDisabled:function(){this.updateTabData()},mdIcon:function(){this.updateTabData()},mdLabel:function(){this.updateTabData()},mdTooltip:function(){this.updateTabData()},mdTooltipDelay:function(){this.updateTabData()},mdTooltipDirection:function(){this.updateTabData()}},computed:{styles:function(){return!0===this.isRtl?{width:this.width,right:this.left}:{width:this.width,left:this.left}}},methods:{getTabData:function(){return{id:this.tabId,label:this.mdLabel,icon:this.mdIcon,active:this.mdActive,disabled:this.mdDisabled,tooltip:this.mdTooltip,tooltipDelay:this.mdTooltipDelay,tooltipDirection:this.mdTooltipDirection,ref:this}},updateTabData:function(){this.parentTabs.updateTab(this.getTabData())}},mounted:function(){var t=this.getTabData();if(this.parentTabs=(0,s.default)(this.$parent,"md-tabs"),!this.parentTabs)throw new Error("You must wrap the md-tab in a md-tabs");this.mounted=!0,this.parentTabs.updateTab(t),this.mdActive&&this.parentTabs.setActiveTab(t)},beforeDestroy:function(){this.parentTabs.unregisterTab(this.getTabData())}},t.exports=e.default},172:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(38),r=a(i),o=n(1),s=a(o),c=n(116),d=a(c);e.default={props:{mdFixed:Boolean,mdCentered:Boolean,mdRight:Boolean,mdDynamicHeight:{type:Boolean,default:!0},mdElevation:{type:[String,Number],default:0}},mixins:[s.default],data:function(){return{tabList:{},activeTab:null,activeTabNumber:0,hasIcons:!1,hasLabel:!1,transitionControl:null,transitionOff:!1,contentHeight:"0px",contentWidth:"0px"}},computed:{tabClasses:function(){return{"md-dynamic-height":this.mdDynamicHeight,"md-transition-off":this.transitionOff}},navigationClasses:function(){return{"md-has-icon":this.hasIcons,"md-has-label":this.hasLabel,"md-fixed":this.mdFixed,"md-right":!this.mdCentered&&this.mdRight,"md-centered":this.mdCentered||this.mdFixed}},indicatorClasses:function(){var t=this.lastIndicatorNumber>this.activeTabNumber;return this.lastIndicatorNumber=this.activeTabNumber,{"md-transition-off":this.transitionOff,"md-to-right":!t,"md-to-left":t}}},methods:{getHeaderClass:function(t){return{"md-active":this.activeTab===t.id,"md-disabled":t.disabled}},registerTab:function(t){this.tabList[t.id]=t},unregisterTab:function(t){delete this.tabList[t.id]},updateTab:function(t){if(this.registerTab(t),t.active)if(t.disabled){if((0,r.default)(this.tabList).length){var e=(0,r.default)(this.tabList),n=e.indexOf(t.id)+1,a=e[n];a?this.setActiveTab(this.tabList[a]):this.setActiveTab(this.tabList[0])}}else this.setActiveTab(t)},observeElementChanges:function(){this.parentObserver=new MutationObserver((0,d.default)(this.calculateOnWatch,50)),this.parentObserver.observe(this.$refs.tabContent,{childList:!0,attributes:!0,subtree:!0})},getTabIndex:function(t){return(0,r.default)(this.tabList).indexOf(t)},calculateIndicatorPos:function(){if(this.$refs.tabHeader&&this.$refs.tabHeader[this.activeTabNumber]){var t=this.$el.offsetWidth,e=this.$refs.tabHeader[this.activeTabNumber],n=e.offsetLeft,a=t-n-e.offsetWidth;this.$refs.indicator.style.left=n+"px",this.$refs.indicator.style.right=a+"px"}},calculateTabsWidthAndPosition:function(){var t=this.$el.offsetWidth,e=0;this.contentWidth=t*this.activeTabNumber+"px";for(var n in this.tabList){var a=this.tabList[n];a.ref.width=t+"px",a.ref.left=t*e+"px",e++}},calculateContentHeight:function(){var t=this;this.$nextTick((function(){if((0,r.default)(t.tabList).length){var e=t.tabList[t.activeTab].ref.$el.offsetHeight;t.contentHeight=e+"px"}}))},calculatePosition:function(){var t=this;window.requestAnimationFrame((function(){t.calculateIndicatorPos(),t.calculateTabsWidthAndPosition(),t.calculateContentHeight()}))},debounceTransition:function(){var t=this;window.clearTimeout(this.transitionControl),this.transitionControl=window.setTimeout((function(){t.calculatePosition(),t.transitionOff=!1}),200)},calculateOnWatch:function(){this.calculatePosition(),this.debounceTransition()},calculateOnResize:function(){this.transitionOff=!0,this.calculateOnWatch()},setActiveTab:function(t){this.hasIcons=!!t.icon,this.hasLabel=!!t.label,this.activeTab=t.id,this.activeTabNumber=this.getTabIndex(this.activeTab),this.calculatePosition(),this.$emit("change",this.activeTabNumber)}},mounted:function(){var t=this;this.$nextTick((function(){if(t.observeElementChanges(),window.addEventListener("resize",t.calculateOnResize),(0,r.default)(t.tabList).length&&!t.activeTab){var e=(0,r.default)(t.tabList)[0];t.setActiveTab(t.tabList[e])}}))},beforeDestroy:function(){this.parentObserver&&this.parentObserver.disconnect(),window.removeEventListener("resize",this.calculateOnResize)}},t.exports=e.default},18:function(t,e,n){var a=n(31),i=n(21);t.exports=Object.keys||function(t){return a(t,i)}},19:function(t,e,n){var a=n(22)("keys"),i=n(20);t.exports=function(t){return a[t]||(a[t]=i(t))}},2:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},20:function(t,e){var n=0,a=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+a).toString(36))}},21:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},218:function(t,e){},22:function(t,e,n){var a=n(2),i=a["__core-js_shared__"]||(a["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},23:function(t,e,n){var a=n(14);t.exports=function(t){return Object(a(t))}},24:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},25:function(t,e,n){var a=n(6),i=n(2).document,r=a(i)&&a(i.createElement);t.exports=function(t){return r?i.createElement(t):{}}},26:function(t,e,n){var a=n(6);t.exports=function(t,e){if(!a(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!a(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!a(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!a(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},263:function(t,e){t.exports=".THEME_NAME.md-tabs>.md-tabs-navigation{background-color:PRIMARY-COLOR}.THEME_NAME.md-tabs>.md-tabs-navigation .md-tab-header{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-tabs>.md-tabs-navigation .md-tab-header.md-active,.THEME_NAME.md-tabs>.md-tabs-navigation .md-tab-header:focus{color:PRIMARY-CONTRAST}.THEME_NAME.md-tabs>.md-tabs-navigation .md-tab-header.md-disabled{color:PRIMARY-CONTRAST-0.26}.THEME_NAME.md-tabs>.md-tabs-navigation .md-tab-indicator{background-color:ACCENT-COLOR}.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation{background-color:transparent;border-bottom:1px solid BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation .md-tab-header{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation .md-tab-header.md-active,.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation .md-tab-header:focus{color:PRIMARY-COLOR}.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation .md-tab-header.md-disabled{color:BACKGROUND-CONTRAST-0.26}.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation .md-tab-indicator{background-color:PRIMARY-COLOR}.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation{background-color:ACCENT-COLOR}.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation .md-tab-header{color:ACCENT-CONTRAST-0.54}.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation .md-tab-header.md-active,.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation .md-tab-header:focus{color:ACCENT-CONTRAST}.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation .md-tab-header.md-disabled{color:ACCENT-CONTRAST-0.26}.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation .md-tab-indicator{background-color:BACKGROUND-COLOR}.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation{background-color:WARN-COLOR}.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation .md-tab-header{color:WARN-CONTRAST-0.54}.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation .md-tab-header.md-active,.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation .md-tab-header:focus{color:WARN-CONTRAST}.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation .md-tab-header.md-disabled{color:WARN-CONTRAST-0.26}.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation .md-tab-indicator{background-color:BACKGROUND-COLOR}\n"},27:function(t,e,n){var a=n(32);t.exports=function(t,e,n){if(a(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,a){return t.call(e,n,a)};case 3:return function(n,a,i){return t.call(e,n,a,i)}}return function(){return t.apply(e,arguments)}}},28:function(t,e,n){var a=n(24);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==a(t)?t.split(""):Object(t)}},29:function(t,e,n){var a=n(15),i=Math.min;t.exports=function(t){return t>0?i(a(t),9007199254740991):0}},3:function(t,e,n){t.exports=!n(5)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},30:function(t,e,n){t.exports=!n(3)&&!n(5)((function(){return 7!=Object.defineProperty(n(25)("div"),"a",{get:function(){return 7}}).a}))},31:function(t,e,n){var a=n(9),i=n(8),r=n(33)(!1),o=n(19)("IE_PROTO");t.exports=function(t,e){var n,s=i(t),c=0,d=[];for(n in s)n!=o&&a(s,n)&&d.push(n);for(;e.length>c;)a(s,n=e[c++])&&(~r(d,n)||d.push(n));return d}},32:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},329:function(t,e,n){var a=n(0)(n(171),n(336),null,null);t.exports=a.exports},33:function(t,e,n){var a=n(8),i=n(29),r=n(35);t.exports=function(t){return function(e,n,o){var s,c=a(e),d=i(c.length),u=r(o,d);if(t&&n!=n){for(;d>u;)if((s=c[u++])!=s)return!0}else for(;d>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}}},330:function(t,e,n){n(218);var a=n(0)(n(172),n(366),null,null);t.exports=a.exports},336:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"md-tab",style:t.styles,attrs:{id:t.tabId}},[t._t("default")],2)},staticRenderFns:[]}},35:function(t,e,n){var a=n(15),i=Math.max,r=Math.min;t.exports=function(t,e){return t=a(t),t<0?i(t+e,0):r(t,e)}},366:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-tabs",class:[t.themeClass,t.tabClasses]},[n("md-whiteframe",{ref:"tabNavigation",staticClass:"md-tabs-navigation",class:t.navigationClasses,attrs:{"md-tag":"nav","md-elevation":t.mdElevation}},[t._l(t.tabList,(function(e){return n("button",{key:e.id,ref:"tabHeader",refInFor:!0,staticClass:"md-tab-header",class:t.getHeaderClass(e),attrs:{type:"button",disabled:e.disabled},on:{click:function(n){t.setActiveTab(e)}}},[n("md-ink-ripple",{attrs:{"md-disabled":e.disabled}}),t._v(" "),n("div",{staticClass:"md-tab-header-container"},[e.icon?n("md-icon",[t._v(t._s(e.icon))]):t._e(),t._v(" "),e.label?n("span",[t._v(t._s(e.label))]):t._e(),t._v(" "),e.tooltip?n("md-tooltip",{attrs:{"md-direction":e.tooltipDirection,"md-delay":e.tooltipDelay}},[t._v(t._s(e.tooltip))]):t._e()],1)],1)})),t._v(" "),n("span",{ref:"indicator",staticClass:"md-tab-indicator",class:t.indicatorClasses})],2),t._v(" "),n("div",{ref:"tabContent",staticClass:"md-tabs-content",style:{height:t.contentHeight}},[n("div",{staticClass:"md-tabs-wrapper",style:{transform:"translate3D("+t.contentWidth+", 0, 0)"}},[t._t("default")],2)])],1)},staticRenderFns:[]}},38:function(t,e,n){t.exports={default:n(42),__esModule:!0}},4:function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},41:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){return Math.random().toString(36).slice(4)};e.default=a,t.exports=e.default},42:function(t,e,n){n(48),t.exports=n(4).Object.keys},434:function(t,e,n){t.exports=n(102)},46:function(t,e,n){var a=n(16),i=n(4),r=n(5);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],o={};o[t]=e(n),a(a.S+a.F*r((function(){n(1)})),"Object",o)}},48:function(t,e,n){var a=n(23),i=n(18);n(46)("keys",(function(){return function(t){return i(a(t))}}))},5:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},6:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},7:function(t,e,n){var a=n(13),i=n(30),r=n(26),o=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(a(t),e=r(e,!0),a(n),i)try{return o(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},8:function(t,e,n){var a=n(28),i=n(14);t.exports=function(t){return a(i(t))}},9:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}}})}));