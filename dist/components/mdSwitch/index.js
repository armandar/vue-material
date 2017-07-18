/*!
* Vue Material v0.11.3
* Made with love by Marcos Moura
* And RTL Support By Hussein Jahanbakhsh
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})(this,(function(){return (function(t){function e(d){if(n[d])return n[d].exports;var a=n[d]={i:d,l:!1,exports:{}};return t[d].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,d){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:d})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=432)})({0:function(t,e){t.exports=function(t,e,n,d){var a,i=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(a=t,i=t.default);var o="function"==typeof i?i.options:i;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),n&&(o._scopeId=n),d){var r=o.computed||(o.computed={});Object.keys(d).forEach((function(t){var e=d[t];r[t]=function(){return e}}))}return{esModule:a,exports:i,options:o}}},1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(t){return!(!t||!t.$el||0===t._uid)&&(t.mdTheme||t.mdName?t:this.getClosestThemedParent(t.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var t=this.closestThemedParent.mdTheme;return t||(t=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+t}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},t.exports=e.default},100:function(t,e,n){"use strict";function d(t){return t&&t.__esModule?t:{default:t}}function a(t){t.component("md-switch",c.default),t.material.styles.push(r.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var i=n(320),c=d(i),o=n(261),r=d(o);t.exports=e.default},162:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var d=n(1),a=(function(t){return t&&t.__esModule?t:{default:t}})(d);e.default={props:{name:String,value:Boolean,id:String,disabled:Boolean,type:{type:String,default:"button"},vValidate:{type:String|Object|Array|Boolean|Function},dataVvAs:{type:String|Object|Array|Boolean|Function},dataVvDelay:{type:String|Object|Array|Boolean|Function},dataVvName:{type:String|Object|Array|Boolean|Function},dataVvValuePath:{type:String|Object|Array|Boolean|Function},dataVvValidateOn:{type:String|Object|Array|Boolean|Function}},mixins:[a.default],data:function(){return{leftPos:"-1px",checked:this.value}},computed:{classes:function(){return{"md-checked":Boolean(this.value),"md-disabled":this.disabled}},styles:function(){return{transform:"translate3D("+this.leftPos+", -50%, 0)"}}},watch:{checked:function(){this.setPosition()},value:function(t){this.changeState(t)}},methods:{setPosition:function(){this.leftPos=this.checked?"75%":"-1px"},changeState:function(t,e){void 0!==e?(this.$emit("change",t,e),e.defaultPrevented||(this.checked=t),this.$emit("input",this.checked,e)):this.checked=t},toggle:function(t){this.disabled||this.changeState(!this.checked,t)}},mounted:function(){this.$nextTick(this.setPosition)}},t.exports=e.default},230:function(t,e){},261:function(t,e){t.exports=".THEME_NAME.md-switch.md-checked .md-switch-container{background-color:ACCENT-COLOR-500-0.5}.THEME_NAME.md-switch.md-checked .md-switch-thumb{background-color:ACCENT-COLOR}.THEME_NAME.md-switch.md-checked .md-ink-ripple{color:ACCENT-COLOR}.THEME_NAME.md-switch.md-checked .md-ripple{opacity:.38}.THEME_NAME.md-switch.md-checked.md-primary .md-switch-container{background-color:PRIMARY-COLOR-500-0.5}.THEME_NAME.md-switch.md-checked.md-primary .md-switch-thumb{background-color:PRIMARY-COLOR}.THEME_NAME.md-switch.md-checked.md-primary .md-ink-ripple{color:PRIMARY-COLOR}.THEME_NAME.md-switch.md-checked.md-warn .md-switch-container{background-color:WARN-COLOR-500-0.5}.THEME_NAME.md-switch.md-checked.md-warn .md-switch-thumb{background-color:WARN-COLOR}.THEME_NAME.md-switch.md-checked.md-warn .md-ink-ripple{color:WARN-COLOR}.THEME_NAME.md-switch.md-disabled .md-switch-container,.THEME_NAME.md-switch.md-disabled.md-checked .md-switch-container{background-color:rgba(0,0,0,0.12)}.THEME_NAME.md-switch.md-disabled .md-switch-thumb,.THEME_NAME.md-switch.md-disabled.md-checked .md-switch-thumb{background-color:#bdbdbd}\n"},320:function(t,e,n){n(230);var d=n(0)(n(162),n(391),null,null);t.exports=d.exports},391:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-switch",class:[t.themeClass,t.classes]},[n("div",{staticClass:"md-switch-container",on:{click:function(e){t.toggle(e)}}},[n("div",{staticClass:"md-switch-thumb",style:t.styles},[n("input",{attrs:{type:"checkbox",name:t.name,id:t.id,disabled:t.disabled,"v-validate":t.vValidate,"data-vv-as":t.dataVvAs,"data-vv-delay":t.dataVvDelay,"data-vv-name":t.dataVvName,"data-vv-value-path":t.dataVvValuePath,"data-vv-validate-on":t.dataVvValidateOn},domProps:{value:t.value}}),t._v(" "),n("button",{staticClass:"md-switch-holder",attrs:{type:t.type}}),t._v(" "),n("md-ink-ripple",{attrs:{"md-disabled":t.disabled}})],1)]),t._v(" "),t.$slots.default?n("label",{staticClass:"md-switch-label",attrs:{for:t.id||t.name}},[t._t("default")],2):t._e()])},staticRenderFns:[]}},432:function(t,e,n){t.exports=n(100)}})}));