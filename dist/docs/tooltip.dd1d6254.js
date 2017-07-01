webpackJsonp([22],{500:function(t,o,d){d(597);var a=d(0)(null,d(560),"data-v-1ca5cafe",null);t.exports=a.exports},529:function(t,o,d){o=t.exports=d(5)(),o.push([t.i,".md-avatar[data-v-1ca5cafe],.md-button[data-v-1ca5cafe]{margin:24px}",""])},560:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,d=t._self._c||o;return d("page-content",{attrs:{"page-title":"Components - Tooltip"}},[d("docs-component",[d("div",{slot:"description"},[d("p",[t._v("Tooltips identify an element when they are activated. They may contain brief helper text about its function. For example, they may contain text information about actionable icons.")])]),t._v(" "),d("div",{slot:"api"},[d("api-table",{attrs:{name:"md-tooltip"}},[d("md-table",{slot:"properties"},[d("md-table-header",[d("md-table-row",[d("md-table-head",[t._v("Name")]),t._v(" "),d("md-table-head",[t._v("Type")]),t._v(" "),d("md-table-head",[t._v("Description")])],1)],1),t._v(" "),d("md-table-body",[d("md-table-row",[d("md-table-cell",[t._v("md-direction")]),t._v(" "),d("md-table-cell",[d("code",[t._v("String")])]),t._v(" "),d("md-table-cell",[t._v("Sets the direction position of the parent element. "),d("br"),t._v("Default: "),d("code",[t._v("bottom")]),t._v(" "),d("br"),t._v("Accepts: "),d("code",[t._v("top")]),t._v("|"),d("code",[t._v("right")]),t._v("|"),d("code",[t._v("bottom")]),t._v("|"),d("code",[t._v("left")])])],1),t._v(" "),d("md-table-row",[d("md-table-cell",[t._v("md-delay")]),t._v(" "),d("md-table-cell",[d("code",[t._v("Number")])]),t._v(" "),d("md-table-cell",[t._v("Sets the delay to show the tooltip in ms. "),d("br"),t._v("Default: "),d("code",[t._v("0")])])],1)],1)],1)],1)],1),t._v(" "),d("div",{slot:"example"},[d("example-box",{attrs:{"card-title":"Default"}},[d("div",{slot:"demo"},[d("div",[d("md-button",{staticClass:"md-icon-button md-raised md-primary"},[d("md-icon",[t._v("folder")]),t._v(" "),d("md-tooltip",{attrs:{"md-direction":"top"}},[t._v("My tooltip")])],1),t._v(" "),d("md-avatar",[d("img",{attrs:{src:"assets/avatar-2.jpg",alt:"People"}}),t._v(" "),d("md-tooltip",{attrs:{"md-direction":"bottom"}},[t._v("My tooltip")])],1)],1),t._v(" "),d("div",[d("md-button",{staticClass:"md-icon-button md-raised md-warn"},[d("md-icon",[t._v("home")]),t._v(" "),d("md-tooltip",{attrs:{"md-direction":"left"}},[t._v("My tooltip")])],1),t._v(" "),d("md-avatar",{staticClass:"md-avatar-icon"},[d("md-icon",[t._v("person")]),t._v(" "),d("md-tooltip",{attrs:{"md-direction":"right"}},[t._v("My tooltip")])],1)],1)]),t._v(" "),d("div",{slot:"code"},[d("code-block",{attrs:{lang:"xml"}},[t._v('\n            <div>\n              <md-button class="md-icon-button md-raised md-primary">\n                <md-icon>folder</md-icon>\n                <md-tooltip md-direction="top">My tooltip</md-tooltip>\n              </md-button>\n\n              <md-avatar>\n                <img src="assets/avatar-2.jpg" alt="People">\n                <md-tooltip md-direction="bottom">My tooltip</md-tooltip>\n              </md-avatar>\n            </div>\n\n            <div>\n              <md-button class="md-icon-button md-raised md-warn">\n                <md-icon>home</md-icon>\n                <md-tooltip md-direction="left">My tooltip</md-tooltip>\n              </md-button>\n\n              <md-avatar class="md-avatar-icon">\n                <md-icon>person</md-icon>\n                <md-tooltip md-direction="right">My tooltip</md-tooltip>\n              </md-avatar>\n            </div>\n          ')])],1)]),t._v(" "),d("example-box",{attrs:{"card-title":"Delay"}},[d("div",{slot:"demo"},[d("div",[d("md-button",{staticClass:"md-icon-button md-raised md-primary"},[d("md-icon",[t._v("folder")]),t._v(" "),d("md-tooltip",{attrs:{"md-delay":"400","md-direction":"top"}},[t._v("My tooltip")])],1),t._v(" "),d("md-avatar",[d("img",{attrs:{src:"assets/avatar-2.jpg",alt:"People"}}),t._v(" "),d("md-tooltip",{attrs:{"md-delay":"400","md-direction":"bottom"}},[t._v("My tooltip")])],1)],1),t._v(" "),d("div",[d("md-button",{staticClass:"md-icon-button md-raised md-warn"},[d("md-icon",[t._v("home")]),t._v(" "),d("md-tooltip",{attrs:{"md-delay":"400","md-direction":"left"}},[t._v("My tooltip")])],1),t._v(" "),d("md-avatar",{staticClass:"md-avatar-icon"},[d("md-icon",[t._v("person")]),t._v(" "),d("md-tooltip",{attrs:{"md-delay":"400","md-direction":"right"}},[t._v("My tooltip")])],1)],1)]),t._v(" "),d("div",{slot:"code"},[d("code-block",{attrs:{lang:"xml"}},[t._v('\n            <div>\n              <md-button class="md-icon-button md-raised md-primary">\n                <md-icon>folder</md-icon>\n                <md-tooltip md-delay="400" md-direction="top">My tooltip</md-tooltip>\n              </md-button>\n\n              <md-avatar>\n                <img src="assets/avatar-2.jpg" alt="People">\n                <md-tooltip md-delay="400" md-direction="bottom">My tooltip</md-tooltip>\n              </md-avatar>\n            </div>\n\n            <div>\n              <md-button class="md-icon-button md-raised md-warn">\n                <md-icon>home</md-icon>\n                <md-tooltip md-delay="400" md-direction="left">My tooltip</md-tooltip>\n              </md-button>\n\n              <md-avatar class="md-avatar-icon">\n                <md-icon>person</md-icon>\n                <md-tooltip md-delay="400" md-direction="right">My tooltip</md-tooltip>\n              </md-avatar>\n            </div>\n          ')])],1)])],1)])],1)},staticRenderFns:[]}},597:function(t,o,d){var a=d(529);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);d(6)("75fdf504",a,!0)}});