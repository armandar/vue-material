/*!
* Vue Material v0.11.3
* Made with love by Marcos Moura
* And RTL Support By Hussein Jahanbakhsh
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=414)})({0:function(e,t){e.exports=function(e,t,n,i){var s,d=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(s=e,d=e.default);var u="function"==typeof d?d.options:d;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),i){var l=u.computed||(u.computed={});Object.keys(i).forEach((function(e){var t=i[e];l[e]=function(){return t}}))}return{esModule:s,exports:d,options:u}}},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},130:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=(function(e){return e&&e.__esModule?e:{default:e}})(i);t.default={props:{disabled:Boolean,mdDeletable:Boolean},mixins:[s.default],computed:{classes:function(){return{"md-deletable":this.mdDeletable,"md-disabled":this.disabled}}}},e.exports=t.default},131:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),d=i(s),r=n(41),u=i(r);t.default={props:{value:Array,disabled:Boolean,mdInputId:String,mdInputName:String,mdInputPlaceholder:String,mdInputType:{type:String,default:"text"},mdStatic:Boolean,mdMax:{type:Number,default:1/0}},mixins:[d.default],data:function(){return{currentChip:null,selectedChips:this.value,inputId:this.mdInputId||"chips-"+(0,u.default)()}},watch:{value:function(e){this.selectedChips=e}},computed:{classes:function(){return{"md-static":this.mdStatic,"md-disabled":this.disabled}}},methods:{applyInputFocus:function(){var e=this;this.$nextTick((function(){e.$refs.input.$el.focus()}))},addChip:function(){if(this.currentChip&&this.selectedChips.length<this.mdMax){var e=this.currentChip.trim();this.selectedChips.indexOf(e)<0&&(this.selectedChips.push(e),this.currentChip=null,this.$emit("input",this.selectedChips),this.$emit("change",this.selectedChips),this.applyInputFocus())}},deleteChip:function(e){var t=this.selectedChips.indexOf(e);t>=0&&this.selectedChips.splice(t,1),this.$emit("change",this.selectedChips),this.applyInputFocus()},deleteLastChip:function(){this.currentChip||(this.selectedChips.pop(),this.$emit("change",this.selectedChips),this.applyInputFocus())}}},e.exports=t.default},225:function(e,t){},245:function(e,t){e.exports=".THEME_NAME.md-chip{background-color:BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-chip.md-deletable:hover,.THEME_NAME.md-chip.md-deletable:focus{background-color:BACKGROUND-CONTRAST-0.54;color:BACKGROUND-COLOR}.THEME_NAME.md-chip.md-deletable:hover .md-delete,.THEME_NAME.md-chip.md-deletable:focus .md-delete{color:BACKGROUND-COLOR}.THEME_NAME.md-chip .md-delete{color:BACKGROUND-CONTRAST-0.38}.THEME_NAME.md-chip .md-delete .md-ripple{color:BACKGROUND-COLOR}\n"},283:function(e,t,n){var i=n(0)(n(130),n(360),null,null);e.exports=i.exports},284:function(e,t,n){n(225);var i=n(0)(n(131),n(377),null,null);e.exports=i.exports},360:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-chip",class:[e.themeClass,e.classes],attrs:{tabindex:"0"}},[e._t("default"),e._v(" "),e.mdDeletable?n("md-button",{staticClass:"md-icon-button md-dense md-delete",attrs:{tabindex:"-1"},nativeOn:{click:function(t){!e.disabled&&e.$emit("delete")},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"delete",[8,46]))return null;!e.disabled&&e.$emit("delete")}}},[n("md-icon",{staticClass:"md-icon-delete"},[e._v("cancel")])],1):e._e()],2)},staticRenderFns:[]}},377:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-chips",class:[e.themeClass,e.classes]},[n("md-input-container",{nativeOn:{click:function(t){e.applyInputFocus(t)}}},[e._l(e.selectedChips,(function(t){return n("md-chip",{attrs:{"md-deletable":!e.mdStatic,disabled:e.disabled},on:{delete:function(n){e.deleteChip(t)}}},[e._t("default",null,{value:t})],2)})),e._v(" "),n("md-input",{directives:[{name:"show",rawName:"v-show",value:!e.mdStatic,expression:"!mdStatic"}],ref:"input",attrs:{type:e.mdInputType,placeholder:e.mdInputPlaceholder,id:e.inputId,name:e.mdInputName,disabled:e.disabled,tabindex:"0"},nativeOn:{keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"delete",[8,46]))return null;e.deleteLastChip(t)},function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;t.preventDefault(),e.addChip(t)},function(t){if(!("button"in t)&&186!==t.keyCode)return null;t.preventDefault(),e.addChip(t)}]},model:{value:e.currentChip,callback:function(t){e.currentChip=t},expression:"currentChip"}})],2)],1)},staticRenderFns:[]}},41:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){return Math.random().toString(36).slice(4)};t.default=i,e.exports=t.default},414:function(e,t,n){e.exports=n(82)},82:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function s(e){e.component("md-chips",r.default),e.component("md-chip",l.default),e.material.styles.push(a.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var d=n(284),r=i(d),u=n(283),l=i(u),o=n(245),a=i(o);e.exports=t.default}})}));