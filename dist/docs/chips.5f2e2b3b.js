webpackJsonp([28],{479:function(e,t,l){var a=l(0)(l(510),l(581),null,null);e.exports=a.exports},510:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{fruits:["Orange","Apple","Pineapple"],contacts:["Marcos Moura"],cities:["Amsterdam","London","Tokio"]}}},e.exports=t.default},581:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("page-content",{attrs:{"page-title":"Components - Chips"}},[l("docs-component",[l("div",{slot:"description"},[l("p",[e._v("A chip may contain entities such as a photo, text, rules, an icon, or a contact.")])]),e._v(" "),l("div",{slot:"api"},[l("api-table",{attrs:{name:"md-chip"}},[l("md-table",{slot:"properties"},[l("md-table-header",[l("md-table-row",[l("md-table-head",[e._v("Name")]),e._v(" "),l("md-table-head",[e._v("Type")]),e._v(" "),l("md-table-head",[e._v("Description")])],1)],1),e._v(" "),l("md-table-body",[l("md-table-row",[l("md-table-cell",[e._v("disabled")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Boolean")])]),e._v(" "),l("md-table-cell",[e._v("Disable the chip and prevent his actions. Default: "),l("code",[e._v("false")])])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-deletable")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Boolean")])]),e._v(" "),l("md-table-cell",[e._v("Enable delete button. Default: "),l("code",[e._v("false")])])],1)],1)],1),e._v(" "),l("md-table",{slot:"events"},[l("md-table-header",[l("md-table-row",[l("md-table-head",[e._v("Name")]),e._v(" "),l("md-table-head",[e._v("Value")]),e._v(" "),l("md-table-head",[e._v("Description")])],1)],1),e._v(" "),l("md-table-body",[l("md-table-row",[l("md-table-cell",[e._v("delete")]),e._v(" "),l("md-table-cell",[e._v("None")]),e._v(" "),l("md-table-cell",[e._v("Triggered when delete button is clicked.")])],1)],1)],1)],1),e._v(" "),l("api-table",{attrs:{name:"md-chips"}},[l("md-table",{slot:"properties"},[l("md-table-header",[l("md-table-row",[l("md-table-head",[e._v("Name")]),e._v(" "),l("md-table-head",[e._v("Type")]),e._v(" "),l("md-table-head",[e._v("Description")])],1)],1),e._v(" "),l("md-table-body",[l("md-table-row",[l("md-table-cell",[e._v("v-model")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Array")])]),e._v(" "),l("md-table-cell",[e._v("A required model object to bind the value.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("disabled")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Boolean")])]),e._v(" "),l("md-table-cell",[e._v("Disable the chips and prevent his actions. Default: "),l("code",[e._v("false")])])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-input-id")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("The chips input id.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-input-name")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("The chips input name.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-input-placeholder")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("The chips input placeholder.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-input-type")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v('The chips input type. Cannot be "file". Default: '),l("code",[e._v("text")])])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-static")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Boolean")])]),e._v(" "),l("md-table-cell",[e._v("Display read only chips. Default: "),l("code",[e._v("false")])])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-max")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Number")])]),e._v(" "),l("md-table-cell",[e._v("The max number of chips to be added. This property works only for new chips. If the initial value in the v-model have more chips than the max value, all the chips will be rendered. Default: "),l("code",[e._v("Infinity")])])],1)],1)],1),e._v(" "),l("md-table",{slot:"events"},[l("md-table-header",[l("md-table-row",[l("md-table-head",[e._v("Name")]),e._v(" "),l("md-table-head",[e._v("Value")]),e._v(" "),l("md-table-head",[e._v("Description")])],1)],1),e._v(" "),l("md-table-body",[l("md-table-row",[l("md-table-cell",[e._v("change")]),e._v(" "),l("md-table-cell",[e._v("The selcted chips Array")]),e._v(" "),l("md-table-cell",[e._v("Triggered when the chips is created or deleted.")])],1)],1)],1)],1)],1),e._v(" "),l("div",{slot:"example"},[l("example-box",{attrs:{"card-title":"Single Chips"}},[l("div",{slot:"demo"},[l("md-chip",[e._v("Marcos Moura")]),e._v(" "),l("md-chip",{attrs:{"md-deletable":""}},[e._v("Luiza Ivanenko")])],1),e._v(" "),l("div",{slot:"code"},[l("code-block",{attrs:{lang:"xml"}},[e._v("\n            <md-chip>Marcos Moura</md-chip>\n            <md-chip md-deletable>Luiza Ivanenko</md-chip>\n          ")])],1)]),e._v(" "),l("example-box",{attrs:{"card-title":"Static"}},[l("div",{slot:"demo"},[l("md-chips",{attrs:{"md-static":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.value))]}}]),model:{value:e.fruits,callback:function(t){e.fruits=t},expression:"fruits"}})],1),e._v(" "),l("div",{slot:"code"},[l("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-chips v-model="fruits" md-static>\n              <template scope="chip">'+e._s("{{ chip.value }}")+"</template>\n            </md-chips>\n          ")]),e._v(" "),l("code-block",{attrs:{lang:"javascript"}},[e._v("\n            export default {\n              data: () => ({\n                fruits: ['Orange', 'Apple', 'Pineapple']\n              })\n            };\n          ")])],1)]),e._v(" "),l("example-box",{attrs:{"card-title":"Editable"}},[l("div",{slot:"demo"},[l("md-chips",{attrs:{"md-input-placeholder":"Add a contact"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.value))]}}]),model:{value:e.contacts,callback:function(t){e.contacts=t},expression:"contacts"}})],1),e._v(" "),l("div",{slot:"code"},[l("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-chips v-model="contacts" md-input-placeholder="Add a contact">\n              <template scope="chip">'+e._s("{{ chip.value }}")+"</template>\n            </md-chips>\n          ")]),e._v(" "),l("code-block",{attrs:{lang:"javascript"}},[e._v("\n            export default {\n              data: () => ({\n                contacts: ['Marcos Moura'],\n              })\n            };\n          ")])],1)]),e._v(" "),l("example-box",{attrs:{"card-title":"Limit"}},[l("div",{slot:"demo"},[l("md-chips",{attrs:{"md-max":5,"md-input-placeholder":"Cities..."},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.value))]),e._v(" "),"Amsterdam"===t.value?l("small",[e._v("(favorite)")]):e._e()]}}]),model:{value:e.cities,callback:function(t){e.cities=t},expression:"cities"}})],1),e._v(" "),l("div",{slot:"code"},[l("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-chips v-model="cities" :md-max="5" md-input-placeholder="Cities...">\n              <template scope="chip">\n                <span>'+e._s("{{ chip.value }}")+"</span>\n                <small v-if=\"chip.value === 'Amsterdam'\">(favorite)</small>\n              </template>\n            </md-chips>\n          ")]),e._v(" "),l("code-block",{attrs:{lang:"javascript"}},[e._v("\n            export default {\n              data: () => ({\n                  cities: ['Amsterdam', 'London', 'Tokio']\n              })\n            };\n          ")])],1)])],1)])],1)},staticRenderFns:[]}}});