webpackJsonp([24],{496:function(e,t,d){var c=d(0)(d(522),d(590),null,null);e.exports=c.exports},522:function(e,t,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{checked0:!0,checked1:!0,checked2:!0,checked3:!0,checked4:!0,checked5:!0,checked6:!0,checked7:!0,checked8:!0,checked9:!0,checked10:!0}},methods:{submit:function(){alert("This switch submits the form")}}},e.exports=t.default},590:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("page-content",{attrs:{"page-title":"Components - Switch"}},[d("docs-component",[d("div",{slot:"description"},[d("p",[e._v("On/off switches toggle the state of a single settings option. The option that the switch controls, as well as the state it’s in, should be made clear from the corresponding inline label.")]),e._v(" "),d("p",[e._v("The following classes can be applied to change the color palette:")]),e._v(" "),d("ul",{staticClass:"md-body-2"},[d("li",[d("code",[e._v("md-primary")])]),e._v(" "),d("li",[d("code",[e._v("md-warn")])])])]),e._v(" "),d("div",{slot:"api"},[d("api-table",{attrs:{name:"md-switch"}},[d("md-table",{slot:"properties"},[d("md-table-header",[d("md-table-row",[d("md-table-head",[e._v("Name")]),e._v(" "),d("md-table-head",[e._v("Type")]),e._v(" "),d("md-table-head",[e._v("Description")])],1)],1),e._v(" "),d("md-table-body",[d("md-table-row",[d("md-table-cell",[e._v("v-model")]),e._v(" "),d("md-table-cell",[d("code",[e._v("String")])]),e._v(" "),d("md-table-cell",[e._v("A required model object to bind the value.")])],1),e._v(" "),d("md-table-row",[d("md-table-cell",[e._v("type")]),e._v(" "),d("md-table-cell",[d("code",[e._v("String")])]),e._v(" "),d("md-table-cell",[e._v("Sets the type. Default "),d("code",[e._v("button")])])],1),e._v(" "),d("md-table-row",[d("md-table-cell",[e._v("name")]),e._v(" "),d("md-table-cell",[d("code",[e._v("String")])]),e._v(" "),d("md-table-cell",[e._v("Set the switch name.")])],1),e._v(" "),d("md-table-row",[d("md-table-cell",[e._v("id")]),e._v(" "),d("md-table-cell",[d("code",[e._v("String")])]),e._v(" "),d("md-table-cell",[e._v("Set the switch id.")])],1),e._v(" "),d("md-table-row",[d("md-table-cell",[e._v("disabled")]),e._v(" "),d("md-table-cell",[d("code",[e._v("Boolean")])]),e._v(" "),d("md-table-cell",[e._v("Disable the switch and prevent his actions. Default "),d("code",[e._v("false")])])],1)],1)],1),e._v(" "),d("md-table",{slot:"events"},[d("md-table-header",[d("md-table-row",[d("md-table-head",[e._v("Name")]),e._v(" "),d("md-table-head",[e._v("Value")]),e._v(" "),d("md-table-head",[e._v("Description")])],1)],1),e._v(" "),d("md-table-body",[d("md-table-row",[d("md-table-cell",[e._v("change")]),e._v(" "),d("md-table-cell",[e._v("Receive the state of the switch")]),e._v(" "),d("md-table-cell",[e._v("Triggered when the switch changes his value.")])],1)],1)],1)],1)],1),e._v(" "),d("div",{slot:"example"},[d("example-box",{attrs:{"card-title":"Default"}},[d("div",{slot:"demo"},[d("div",[d("md-switch",{attrs:{id:"my-test0",name:"my-test0"},model:{value:e.checked0,callback:function(t){e.checked0=t},expression:"checked0"}})],1),e._v(" "),d("div",[d("md-switch",{staticClass:"md-primary",attrs:{id:"my-test1",name:"my-test1"},model:{value:e.checked1,callback:function(t){e.checked1=t},expression:"checked1"}},[e._v("Primary Color")])],1),e._v(" "),d("div",[d("md-switch",{staticClass:"md-warn",attrs:{id:"my-test2",name:"my-test2"},model:{value:e.checked2,callback:function(t){e.checked2=t},expression:"checked2"}},[e._v("Warn Color")])],1),e._v(" "),d("div",[d("md-switch",{attrs:{id:"my-test3",name:"my-test3",disabled:""},model:{value:e.checked3,callback:function(t){e.checked3=t},expression:"checked3"}},[e._v("Disabled")])],1)]),e._v(" "),d("div",{slot:"code"},[d("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-switch v-model="checked0" id="my-test0" name="my-test0"></md-switch>\n            <md-switch v-model="checked1" id="my-test1" name="my-test1" class="md-primary">Primary Color</md-switch>\n            <md-switch v-model="checked2" id="my-test2" name="my-test2" class="md-warn">Warn Color</md-switch>\n            <md-switch v-model="checked3" id="my-test3" name="my-test3" disabled>Disabled</md-switch>\n          ')])],1)]),e._v(" "),d("example-box",{attrs:{"card-title":"With type"}},[d("div",{slot:"demo"},[d("md-switch",{attrs:{id:"my-test8",name:"my-test8"},model:{value:e.checked8,callback:function(t){e.checked8=t},expression:"checked8"}},[e._v("Default")]),e._v(" "),d("form",{on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.submit(t)}}},[d("md-switch",{staticClass:"md-primary",attrs:{type:"submit",id:"my-test9",name:"my-test9"},model:{value:e.checked9,callback:function(t){e.checked9=t},expression:"checked9"}},[e._v("Submit")])],1)],1),e._v(" "),d("div",{slot:"code"},[d("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-switch v-model="checked8" id="my-test8" name="my-test8">Default</md-switch>\n\n            <form @click.stop.prevent="submit">\n              <md-switch type="submit" v-model="checked9" id="my-test9" name="my-test9" class="md-primary">Submit</md-switch>\n            </form>\n          ')])],1)]),e._v(" "),d("example-box",{attrs:{"card-title":"Themes"}},[d("div",{slot:"demo"},[d("div",[d("md-switch",{staticClass:"md-primary",attrs:{"md-theme":"orange",id:"my-test4",name:"my-test4"},model:{value:e.checked4,callback:function(t){e.checked4=t},expression:"checked4"}})],1),e._v(" "),d("div",[d("md-switch",{staticClass:"md-primary",attrs:{"md-theme":"green",id:"my-test5",name:"my-test5"},model:{value:e.checked5,callback:function(t){e.checked5=t},expression:"checked5"}},[e._v("Green Primary Color")])],1),e._v(" "),d("div",[d("md-switch",{staticClass:"md-primary",attrs:{"md-theme":"brown",id:"my-test6",name:"my-test6"},model:{value:e.checked6,callback:function(t){e.checked6=t},expression:"checked6"}},[e._v("Brown Primary Color")])],1),e._v(" "),d("div",[d("md-switch",{staticClass:"md-primary",attrs:{"md-theme":"light-blue",id:"my-test7",name:"my-test7",disabled:""},model:{value:e.checked7,callback:function(t){e.checked7=t},expression:"checked7"}},[e._v("Light Blue Primary Color Disabled")])],1)]),e._v(" "),d("div",{slot:"code"},[d("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-switch md-theme="orange" v-model="checked4" id="my-test4" name="my-test4" class="md-primary"></md-switch>\n            <md-switch md-theme="green" v-model="checked5" id="my-test5" name="my-test5" class="md-primary">Green Primary Color</md-switch>\n            <md-switch md-theme="brown" v-model="checked6" id="my-test6" name="my-test6" class="md-primary">Brown Primary Color</md-switch>\n            <md-switch md-theme="light-blue" v-model="checked7" id="my-test7" name="my-test7" class="md-primary" disabled>Light Blue Primary Color Disabled</md-switch>\n          ')])],1)])],1)])],1)},staticRenderFns:[]}}});