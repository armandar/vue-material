/*!
* Vue Material v0.11.2
* Made with love by Marcos Moura
* And RTL Support By Hussein Jahanbakhsh
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})(this,(function(){return (function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=423)})({0:function(t,e){t.exports=function(t,e,n,i){var o,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,r=t.default);var u="function"==typeof r?r.options:r;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),i){var d=u.computed||(u.computed={});Object.keys(i).forEach((function(t){var e=i[t];d[t]=function(){return e}}))}return{esModule:o,exports:r,options:u}}},10:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function t(e,n){return!(!e||!e.$el)&&(0!==e._uid&&(e.$el.classList.contains(n)?e:t(e.$parent,n)))};e.default=i,t.exports=e.default},115:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t,e){return e.top<=8-parseInt(getComputedStyle(t).marginTop,10)},o=function(t,e){return e.top+t.offsetHeight+8>=window.innerHeight-parseInt(getComputedStyle(t).marginTop,10)},r=function(t,e){return e.left<=8-parseInt(getComputedStyle(t).marginLeft,10)},s=function(t,e){return e.left+t.offsetWidth+8>=window.innerWidth-parseInt(getComputedStyle(t).marginLeft,10)},u=function(t,e){var n=getComputedStyle(t);return i(t,e)&&(e.top=8-parseInt(n.marginTop,10)),r(t,e)&&(e.left=8-parseInt(n.marginLeft,10)),s(t,e)&&(e.left=window.innerWidth-8-t.offsetWidth-parseInt(n.marginLeft,10)),o(t,e)&&(e.top=window.innerHeight-8-t.offsetHeight-parseInt(n.marginTop,10)),e};e.default=u,t.exports=e.default},150:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(37),r=i(o),s=n(115),u=i(s);e.default={props:{mdSize:{type:[Number,String],default:0},mdDirection:{type:String,default:"bottom right"},mdAlignTrigger:{type:Boolean,default:!1},mdOffsetX:{type:[Number,String],default:0},mdOffsetY:{type:[Number,String],default:0},mdCloseOnSelect:{type:Boolean,default:!0}},data:function(){return{active:!1}},watch:{mdSize:function(t,e){t>=1&&t<=7&&(this.removeLastSizeMenuContentClass(e),this.addNewSizeMenuContentClass(t))},mdDirection:function(t,e){this.removeLastDirectionMenuContentClass(e),this.addNewDirectionMenuContentClass(t)},mdAlignTrigger:function(t){this.handleAlignTriggerClass(t)}},methods:{validateMenu:function(){if(!this.menuContent)throw this.$destroy(),new Error("You must have a md-menu-content inside your menu.");if(!this.menuTrigger)throw this.$destroy(),new Error("You must have an element with a md-menu-trigger attribute inside your menu.")},removeLastSizeMenuContentClass:function(t){this.menuContent.classList.remove("md-size-"+t)},removeLastDirectionMenuContentClass:function(t){this.menuContent.classList.remove("md-direction-"+t.replace(/ /g,"-"))},addNewSizeMenuContentClass:function(t){this.menuContent.classList.add("md-size-"+t)},addNewDirectionMenuContentClass:function(t){this.menuContent.classList.add("md-direction-"+t.replace(/ /g,"-"))},handleAlignTriggerClass:function(t){t&&this.menuContent.classList.add("md-align-trigger")},getPosition:function(t,e){var n=this.menuTrigger.getBoundingClientRect(),i="top"===t?n.top+n.height-this.menuContent.offsetHeight:n.top,o="left"===e?n.left-this.menuContent.offsetWidth+n.width:n.left;return i+=parseInt(this.mdOffsetY,10),o+=parseInt(this.mdOffsetX,10),this.mdAlignTrigger&&("top"===t?i-=n.height+11:i+=n.height+11),{top:i,left:o}},calculateMenuContentPos:function(){var t=void 0;t=this.mdDirection?this.getPosition.apply(this,this.mdDirection.trim().split(" ")):this.getPosition("bottom","right"),t=(0,u.default)(this.menuContent,t),this.menuContent.style.top=t.top+window.pageYOffset+"px",this.menuContent.style.left=t.left+window.pageXOffset+"px"},recalculateOnResize:function(){window.requestAnimationFrame(this.calculateMenuContentPos)},open:function(){document.body.contains(this.menuContent)&&document.body.removeChild(this.menuContent),document.body.appendChild(this.menuContent),document.body.appendChild(this.backdropElement),window.addEventListener("resize",this.recalculateOnResize),this.calculateMenuContentPos(),getComputedStyle(this.menuContent).top,this.menuContent.classList.add("md-active"),this.menuContent.focus(),this.active=!0,this.$emit("open")},close:function(){var t=this,e=function e(n){if(t.menuContent&&n.target===t.menuContent){var i=t.menuContent.querySelector(".md-ripple.md-active");t.menuContent.removeEventListener(r.default,e),t.menuTrigger.focus(),t.active=!1,i&&i.classList.remove("md-active"),document.body.removeChild(t.menuContent),document.body.removeChild(t.backdropElement),window.removeEventListener("resize",t.recalculateOnResize)}};this.menuContent.addEventListener(r.default,e),this.menuContent.classList.remove("md-active"),this.$emit("close")},toggle:function(){this.active?this.close():this.open()}},mounted:function(){var t=this;this.$nextTick((function(){t.menuTrigger=t.$el.querySelector("[md-menu-trigger]"),t.menuContent=t.$el.querySelector(".md-menu-content"),t.backdropElement=t.$refs.backdrop.$el,t.validateMenu(),t.handleAlignTriggerClass(t.mdAlignTrigger),t.addNewSizeMenuContentClass(t.mdSize),t.addNewDirectionMenuContentClass(t.mdDirection),t.$el.removeChild(t.$refs.backdrop.$el),t.menuContent.parentNode.removeChild(t.menuContent),t.menuTrigger.addEventListener("click",t.toggle)}))},beforeDestroy:function(){document.body.contains(this.menuContent)&&(document.body.removeChild(this.menuContent),document.body.removeChild(this.backdropElement)),this.menuTrigger.removeEventListener("click",this.toggle),window.removeEventListener("resize",this.recalculateOnResize)}},t.exports=e.default},151:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{oldHighlight:!1,highlighted:!1,itemsAmount:0}},methods:{close:function(){this.highlighted=!1,this.$parent.close()},highlightItem:function(t){this.oldHighlight=this.highlighted,"up"===t&&(1===this.highlighted?this.highlighted=this.itemsAmount:this.highlighted--),"down"===t&&(this.highlighted===this.itemsAmount?this.highlighted=1:this.highlighted++)},fireClick:function(){this.highlighted>0&&this.$children[0].$children[this.highlighted-1].$el.click()}},mounted:function(){if(!this.$parent.$el.classList.contains("md-menu"))throw this.$destroy(),new Error("You must wrap the md-menu-content in a md-menu")}},t.exports=e.default},152:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(10),o=(function(t){return t&&t.__esModule?t:{default:t}})(i);n(205),e.default={props:{href:String,target:String,disabled:Boolean},data:function(){return{parentContent:{},index:0}},computed:{classes:function(){return{"md-highlighted":this.highlighted}},highlighted:function(){return this.index===this.parentContent.highlighted&&(this.disabled&&(this.parentContent.oldHighlight>this.parentContent.highlighted?this.parentContent.highlighted--:this.parentContent.highlighted++),1===this.index?this.parentContent.$el.scrollTop=0:this.index===this.parentContent.itemsAmount?this.parentContent.$el.scrollTop=this.parentContent.$el.scrollHeight:this.$el.scrollIntoViewIfNeeded(!1),!0)}},methods:{close:function(t){this.disabled||(this.parentMenu.mdCloseOnSelect&&this.parentContent.close(),this.$emit("selected",t))}},mounted:function(){if(this.parentContent=(0,o.default)(this.$parent,"md-menu-content"),this.parentMenu=(0,o.default)(this.$parent,"md-menu"),!this.parentContent)throw this.$destroy(),new Error("You must wrap the md-menu-item in a md-menu-content");this.parentContent.itemsAmount++,this.index=this.parentContent.itemsAmount}},t.exports=e.default},205:function(t,e){Element.prototype.scrollIntoViewIfNeeded||(Element.prototype.scrollIntoViewIfNeeded=function(t){t=0===arguments.length||!!t;var e=this.parentNode,n=window.getComputedStyle(e,null),i=parseInt(n.getPropertyValue("border-top-width")),o=parseInt(n.getPropertyValue("border-left-width")),r=this.offsetTop-e.offsetTop<e.scrollTop,s=this.offsetTop-e.offsetTop+this.clientHeight-i>e.scrollTop+e.clientHeight,u=this.offsetLeft-e.offsetLeft<e.scrollLeft,d=this.offsetLeft-e.offsetLeft+this.clientWidth-o>e.scrollLeft+e.clientWidth,l=r&&!s;(r||s)&&t&&(e.scrollTop=this.offsetTop-e.offsetTop-e.clientHeight/2-i+this.clientHeight/2),(u||d)&&t&&(e.scrollLeft=this.offsetLeft-e.offsetLeft-e.clientWidth/2-o+this.clientWidth/2),(r||s||u||d)&&!t&&this.scrollIntoView(l)})},237:function(t,e){},252:function(t,e){t.exports=".THEME_NAME.md-menu-content .md-list{background-color:BACKGROUND-COLOR;color:BACKGROUND-CONTRAST}.THEME_NAME.md-menu-content .md-list .md-menu-item:hover .md-button:not([disabled]),.THEME_NAME.md-menu-content .md-list .md-menu-item:focus .md-button:not([disabled]),.THEME_NAME.md-menu-content .md-list .md-menu-item.md-highlighted .md-button:not([disabled]){background-color:BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-menu-content .md-list .md-menu-item[disabled]{color:BACKGROUND-CONTRAST-0.38}\n"},308:function(t,e,n){n(237);var i=n(0)(n(150),n(399),null,null);t.exports=i.exports},309:function(t,e,n){var i=n(0)(n(151),n(392),null,null);t.exports=i.exports},310:function(t,e,n){var i=n(0)(n(152),n(349),null,null);t.exports=i.exports},349:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("md-list-item",{staticClass:"md-menu-item",class:t.classes,attrs:{href:t.href,target:t.target,disabled:t.disabled},nativeOn:{click:function(e){t.close(e)}}},[t._t("default")],2)},staticRenderFns:[]}},37:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=(function(){var t=document.createElement("span"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in e)if(void 0!==t.style[n])return e[n]})(),t.exports=e.default},392:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-menu-content",attrs:{tabindex:"-1"},on:{keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27))return null;e.preventDefault(),t.close(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"tab",9))return null;e.preventDefault(),t.close(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38))return null;e.preventDefault(),t.highlightItem("up")},function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40))return null;e.preventDefault(),t.highlightItem("down")},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;e.preventDefault(),t.fireClick(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"space",32))return null;e.preventDefault(),t.fireClick(e)}]}},[n("md-list",[t._t("default")],2)],1)},staticRenderFns:[]}},399:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-menu"},[t._t("default"),t._v(" "),n("md-backdrop",{ref:"backdrop",staticClass:"md-menu-backdrop md-transparent md-active",on:{close:t.close}})],2)},staticRenderFns:[]}},423:function(t,e,n){t.exports=n(91)},91:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t){t.component("md-menu",s.default),t.component("md-menu-item",d.default),t.component("md-menu-content",a.default),t.material.styles.push(f.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(308),s=i(r),u=n(310),d=i(u),l=n(309),a=i(l),c=n(252),f=i(c);t.exports=e.default}})}));