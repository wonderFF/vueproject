webpackJsonp([12],{465:function(t,e,r){function a(t){r(946)}var s=r(25)(r(911),r(967),a,null,null);t.exports=s.exports},911:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},s=r(73);e.default={data:function(){return{}},methods:{edit_strates:function(){this.$router.push({path:"/config/strates_chg"})}},computed:a({},(0,s.mapState)("stratery",["results_curgroups","cur_strateInfo"])),mounted:function(){this.$store.dispatch("stratery/stratesCur")}}},929:function(t,e,r){e=t.exports=r(459)(!1),e.push([t.i,".page_stratery .cell{padding:0 6px}.page_stratery .page_stratery_info{margin:10px auto}.page_stratery .tag_parnode{padding:4px}.page_stratery .col_1,.page_stratery .col_2,.page_stratery .col_3{height:35px;line-height:35px}.page_stratery .col_1{font-size:16px;font-weight:700}.page_stratery .col_2{text-align:center;font-size:15px}.page_stratery .col_3{text-align:right}",""])},946:function(t,e,r){var a=r(929);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(460)("0545b456",a,!0)},967:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page_inner page_stratery"},[r("div",{staticClass:"page_head"},[r("el-breadcrumb",{attrs:{separator:">"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/config/stratery"}}},[t._v("玩偶组列表")]),t._v(" "),r("el-breadcrumb-item",{attrs:{to:{path:"/config/stratery"}}},[t._v("当前运行玩偶组")])],1)],1),t._v(" "),r("div",{staticClass:"page_body"},[r("div",{staticClass:"page_stratery_info"},[r("el-row",{attrs:{align:"bottom"}},[r("el-col",{attrs:{span:6}},[r("div",{staticClass:"col_1"},[t._v("当前运行玩偶组")])]),t._v(" "),r("el-col",{attrs:{span:12}},[r("div",{staticClass:"col_2"},[r("span",{staticStyle:{"font-weight":"bold"}},[t._v("\n              "+t._s(t.cur_strateInfo.name)+"\n            ")]),t._v(" "),t.cur_strateInfo.start_time?r("span",[t._v("\n              "+t._s("("+t.cur_strateInfo.start_time.replace(/\-/g,"/")+"开始启动)")+"\n            ")]):t._e()])]),t._v(" "),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"col_3"},[r("el-button",{attrs:{type:"primary"},on:{click:t.edit_strates}},[t._v("更改玩偶组")])],1)])],1)],1),t._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{stripe:!0,border:"","highlight-current-row":!1,data:t.results_curgroups}},[r("el-table-column",{attrs:{prop:"_order",width:"50",align:"center",label:"序号"}}),t._v(" "),r("el-table-column",{attrs:{prop:"name",width:"140",align:"center",label:"玩偶名称"}}),t._v(" "),r("el-table-column",{attrs:{label:"启动探针",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v("\n            "+t._s(e.row.is_start_client?"是":"否")+"\n          ")])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"事件/时间/比率控制",width:"250",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",[r("span",{domProps:{textContent:t._s(e.row.risk_body[0].risk_name)}}),t._v("\n             \n            "),e.row.risk_body[0].is_immediate?[r("span",{staticClass:"tag_inner_w_144"},[r("el-tag",{attrs:{type:"primary"}},[t._v("- -")])],1)]:[r("el-tag",{attrs:{type:"primary"}},[r("span",{staticStyle:{color:"#000"},domProps:{textContent:t._s(e.row.risk_body[0].time[0].start_time+"~"+e.row.risk_body[0].time[0].end_time)}}),t._v("\n                 \n                "),r("span",{domProps:{textContent:t._s(e.row.risk_body[0].time[0].ratio.padStart(2,"0")+"%")}})]),t._v(" "),r("el-popover",{attrs:{placement:"right",width:"420",trigger:"hover"}},[r("div",{staticClass:"event_popover"},t._l(e.row.risk_body,function(e){return r("div",{staticStyle:{"margin-bottom":"6px"}},[r("div",{staticClass:"l_e_t_r"},[r("span",{domProps:{textContent:t._s(e.risk_name)}})]),t._v(" "),r("div",{staticClass:"r_e_t_r"},[e.is_immediate?[r("el-tag",{attrs:{type:"primary"}},[t._v("--")])]:t._l(e.time,function(e){return r("el-tag",{key:e,attrs:{type:"primary"}},[r("span",{staticStyle:{color:"#000"},domProps:{textContent:t._s(e.start_time+"~"+e.end_time)}}),t._v("\n                           \n                          "),r("span",{domProps:{textContent:t._s(e.ratio.padStart(2,"0")+"%")}})])})],2)])})),t._v(" "),r("el-button",{attrs:{type:"text",icon:"more"},slot:"reference"})],1)]],2)]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"manufacturer",label:"品牌控制",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.manufacturer.includes(",")?[r("el-tag",{attrs:{type:"primary"},domProps:{textContent:t._s(e.row.manufacturer.split(",")[0])}}),t._v(" "),r("el-popover",{attrs:{placement:"right",width:"160",trigger:"hover"}},[r("div",{staticClass:"basic_popover"},[t._l(e.row.manufacturer.split(","),function(e){return[r("el-tag",{attrs:{type:"primary"},domProps:{textContent:t._s(e)}})]})],2),t._v(" "),r("el-button",{attrs:{type:"text",icon:"more"},slot:"reference"})],1)]:[r("el-tag",{attrs:{type:"primary"},domProps:{textContent:t._s(e.row.manufacturer.split(",")[0])}}),t._v(" "),r("span",{staticClass:"opacity_0"},[r("el-button",{attrs:{type:"text",icon:"more"}})],1)]]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"系统",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.os_version.includes(",")?[r("el-tag",{attrs:{type:"primary"},domProps:{textContent:t._s(e.row.os_version.split(",")[0])}}),t._v(" "),r("el-popover",{attrs:{placement:"right",width:"160",trigger:"hover"}},[r("div",{staticClass:"basic_popover"},[t._l(e.row.os_version.split(","),function(e){return[r("el-tag",{attrs:{type:"primary"},domProps:{textContent:t._s(e)}})]})],2),t._v(" "),r("el-button",{attrs:{type:"text",icon:"more"},slot:"reference"})],1)]:[r("el-tag",{attrs:{type:"primary"},domProps:{textContent:t._s(e.row.os_version.split(",")[0])}}),t._v(" "),r("span",{staticClass:"opacity_0"},[r("el-button",{attrs:{type:"text",icon:"more"}})],1)]]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"APP版本",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.app_version.includes(",")?[r("el-tag",{attrs:{type:"primary"},domProps:{textContent:t._s(e.row.app_version.split(",")[0])}}),t._v(" "),r("el-popover",{attrs:{placement:"right",width:"160",trigger:"hover"}},[r("div",{staticClass:"basic_popover"},[t._l(e.row.app_version.split(","),function(e){return[r("el-tag",{attrs:{type:"primary"},domProps:{textContent:t._s(e)}})]})],2),t._v(" "),r("el-button",{attrs:{type:"text",icon:"more"},slot:"reference"})],1)]:[r("el-tag",{attrs:{type:"primary"},domProps:{textContent:t._s(e.row.app_version.split(",")[0])}}),t._v(" "),r("span",{staticClass:"opacity_0"},[r("el-button",{attrs:{type:"text",icon:"more"}})],1)]]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"location",label:"区域控制",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.location.includes(",")?[r("el-tag",{attrs:{type:"primary"},domProps:{textContent:t._s(e.row.location.split(",")[0])}}),t._v(" "),r("el-popover",{attrs:{placement:"left",width:"160",trigger:"hover"}},[r("div",{staticClass:"basic_popover"},[t._l(e.row.location.split(","),function(e){return[r("el-tag",{attrs:{type:"primary"},domProps:{textContent:t._s(e)}})]})],2),t._v(" "),r("el-button",{attrs:{type:"text",icon:"more"},slot:"reference"})],1)]:[r("el-tag",{attrs:{type:"primary"},domProps:{textContent:t._s(e.row.location.split(",")[0])}}),t._v(" "),r("span",{staticClass:"opacity_0"},[r("el-button",{attrs:{type:"text",icon:"more"}})],1)]]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"ROOT",align:"center",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v("\n            "+t._s(e.row.is_root?"是":"否")+"\n          ")])]}}])})],1)],1)])},staticRenderFns:[]}}});