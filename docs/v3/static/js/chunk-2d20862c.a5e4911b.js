(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20862c"],{a524:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v(" 设置 "),n("table-api-link",{attrs:{prop:"keep-source"}}),e._v(" 开启保持原始值状态和 "),n("table-api-link",{attrs:{prop:"edit-config"}}),e._v("={showStatus, showUpdateStatus, showInsertStatus} 开启编辑状态显示功能，还可以通过 icon 自定义编辑状态的图标，例如第三方图标库：font-awesome、inconfont"),n("br"),e._v(" 对于某些需要局部保存的场景，可以在数据保存完成后调用 "),n("table-api-link",{attrs:{prop:"reloadRow"}}),e._v(" 方法加载行数据并恢复到初始状态"),n("br"),n("span",{staticClass:"red"},[e._v("（注：开启 showStatus 后如果使用自定义渲染需要配合 "),n("table-api-link",{attrs:{prop:"updateStatus"}}),e._v(" 方法使用，在对应单元格的值发生改变时调用更新状态）")],1)],1),n("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[n("vxe-button",{attrs:{icon:"fa fa-plus"},on:{click:e.insertEvent}},[e._v("新增")]),n("vxe-button",{on:{click:function(t){return e.$refs.xTable.removeCheckboxRow()}}},[e._v("删除选中")]),n("vxe-button",{on:{click:e.getInsertEvent}},[e._v("获取新增")]),n("vxe-button",{on:{click:e.getRemoveEvent}},[e._v("获取删除")]),n("vxe-button",{on:{click:e.getUpdateEvent}},[e._v("获取修改")]),n("vxe-button",{on:{click:e.saveEvent}},[e._v("保存")])]},proxy:!0}])}),n("vxe-table",{ref:"xTable",attrs:{border:"","show-overflow":"","keep-source":"",loading:e.loading,data:e.tableData,"edit-config":{trigger:"click",mode:"cell",showStatus:!0,icon:"fa fa-pencil-square-o"}}},[n("vxe-column",{attrs:{type:"checkbox",width:"60"}}),n("vxe-column",{attrs:{type:"seq",width:"60"}}),n("vxe-column",{attrs:{field:"name",title:"Name","edit-render":{autofocus:".myinput"}},scopedSlots:e._u([{key:"edit",fn:function(t){return[n("input",{directives:[{name:"model",rawName:"v-model",value:t.row.name,expression:"scope.row.name"}],staticClass:"myinput",attrs:{type:"text"},domProps:{value:t.row.name},on:{input:[function(n){n.target.composing||e.$set(t.row,"name",n.target.value)},function(n){return e.$refs.xTable.updateStatus(t)}]}})]}}])}),n("vxe-column",{attrs:{field:"sex",title:"Sex","edit-render":{autofocus:".myinput"}},scopedSlots:e._u([{key:"edit",fn:function(t){return[n("input",{directives:[{name:"model",rawName:"v-model",value:t.row.sex,expression:"scope.row.sex"}],staticClass:"myinput",attrs:{type:"text"},domProps:{value:t.row.sex},on:{input:[function(n){n.target.composing||e.$set(t.row,"sex",n.target.value)},function(n){return e.$refs.xTable.updateStatus(t)}]}})]}}])}),n("vxe-column",{attrs:{field:"address",title:"Address","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(t){return[n("input",{directives:[{name:"model",rawName:"v-model",value:t.row.address,expression:"scope.row.address"}],attrs:{type:"text"},domProps:{value:t.row.address},on:{input:[function(n){n.target.composing||e.$set(t.row,"address",n.target.value)},function(n){return e.$refs.xTable.updateStatus(t)}]}})]}}])}),n("vxe-column",{attrs:{field:"date3",title:"Date",formatter:"formatDate","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(t){return[n("input",{directives:[{name:"model",rawName:"v-model",value:t.row.date3,expression:"scope.row.date3"}],attrs:{type:"date"},domProps:{value:t.row.date3},on:{input:[function(n){n.target.composing||e.$set(t.row,"date3",n.target.value)},function(n){return e.$refs.xTable.updateStatus(t)}]}})]}}])}),n("vxe-column",{attrs:{title:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e.$refs.xTable.isUpdateByRow(a)?[n("vxe-button",{attrs:{loading:a.loading},on:{click:function(t){return e.saveUpdateEvent(a)}}},[e._v("局部保存")])]:e._e()]}}])})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},s=[],o=n("a388"),r=n.n(o),l={data:function(){return{loading:!1,tableData:[{id:10001,name:"Test1",role:"Develop",sex:"0",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"1",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"0",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"1",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"1",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"1",age:21,address:"test abc"}],demoCodes:['\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button icon="fa fa-plus" @click="insertEvent">新增</vxe-button>\n            <vxe-button @click="$refs.xTable.removeCheckboxRow()">删除选中</vxe-button>\n            <vxe-button @click="getInsertEvent">获取新增</vxe-button>\n            <vxe-button @click="getRemoveEvent">获取删除</vxe-button>\n            <vxe-button @click="getUpdateEvent">获取修改</vxe-button>\n            <vxe-button @click="saveEvent">保存</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          show-overflow\n          keep-source\n          ref="xTable"\n          :loading="loading"\n          :data="tableData"\n          :edit-config="{trigger: \'click\', mode: \'cell\', showStatus: true, icon: \'fa fa-pencil-square-o\'}">\n          <vxe-column type="checkbox" width="60"></vxe-column>\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" :edit-render="{autofocus: \'.myinput\'}">\n            <template #edit="scope">\n              <input type="text" class="myinput" v-model="scope.row.name" @input="$refs.xTable.updateStatus(scope)"/>\n            </template>\n          </vxe-column>\n          <vxe-column field="sex" title="Sex" :edit-render="{autofocus: \'.myinput\'}">\n            <template #edit="scope">\n              <input type="text" class="myinput" v-model="scope.row.sex" @input="$refs.xTable.updateStatus(scope)"/>\n            </template>\n          </vxe-column>\n          <vxe-column field="address" title="Address" :edit-render="{}">\n            <template #edit="scope">\n              <input type="text" v-model="scope.row.address" @input="$refs.xTable.updateStatus(scope)"/>\n            </template>\n          </vxe-column>\n          <vxe-column field="date3" title="Date" formatter="formatDate" :edit-render="{}">\n            <template #edit="scope">\n              <input type="date" v-model="scope.row.date3" @input="$refs.xTable.updateStatus(scope)"/>\n            </template>\n          </vxe-column>\n          <vxe-column title="操作" width="200">\n            <template #default="{ row }">\n              <template v-if="$refs.xTable.isUpdateByRow(row)">\n                <vxe-button @click="saveUpdateEvent(row)" :loading="row.loading">局部保存</vxe-button>\n              </template>\n            </template>\n          </vxe-column>\n        </vxe-table>\n        ',"\n        import VXETable from 'vxe-table'\n        \n        export default {\n          data () {\n            return {\n              loading: false,\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }\n              ]\n            }\n          },\n          methods: {\n            insertEvent () {\n              const $table = this.$refs.xTable\n              $table.insert().then(({ row }) => {\n                $table.setActiveCell(row, 'name')\n              })\n            },\n            saveUpdateEvent (row) {\n              const $table = this.$refs.xTable\n              if ($table.isUpdateByRow(row)) {\n                row.loading = true\n                // 模拟异步\n                setTimeout(() => {\n                  row.loading = false\n                  // 保存完成后将行恢复到初始状态\n                  $table.reloadRow(row, {})\n                  VXETable.modal.message({ content: '保存成功！', status: 'success' })\n                }, 300)\n              } else {\n                VXETable.modal.message({ content: '数据未改动！', status: 'info' })\n              }\n            },\n            saveEvent () {\n              this.loading = true\n              // 默认异步\n              setTimeout(() => {\n                this.loading = false\n                // 保存完成后重新刷新数据\n                this.tableData = [\n                  { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },\n                  { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },\n                  { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },\n                  { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },\n                  { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },\n                  { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }\n                ]\n              }, 300)\n            },\n            getInsertEvent () {\n              const $table = this.$refs.xTable\n              const insertRecords = $table.getInsertRecords()\n              VXETable.modal.alert(insertRecords.length)\n            },\n            getRemoveEvent () {\n              const $table = this.$refs.xTable\n              const removeRecords = $table.getRemoveRecords()\n              VXETable.modal.alert(removeRecords.length)\n            },\n            getUpdateEvent () {\n              const $table = this.$refs.xTable\n              const updateRecords = $table.getUpdateRecords()\n              VXETable.modal.alert(updateRecords.length)\n            }\n          }\n        }\n        "]}},methods:{insertEvent:function(){var e=this.$refs.xTable;e.insert().then((function(t){var n=t.row;e.setActiveCell(n,"name")}))},saveUpdateEvent:function(e){var t=this.$refs.xTable;t.isUpdateByRow(e)?(e.loading=!0,setTimeout((function(){e.loading=!1,t.reloadRow(e,{}),r.a.modal.message({content:"保存成功！",status:"success"})}),300)):r.a.modal.message({content:"数据未改动！",status:"info"})},saveEvent:function(){var e=this;this.loading=!0,setTimeout((function(){e.loading=!1,e.tableData=[{id:10001,name:"Test1",role:"Develop",sex:"0",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"1",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"0",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"1",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"1",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"1",age:21,address:"test abc"}]}),300)},getInsertEvent:function(){var e=this.$refs.xTable,t=e.getInsertRecords();r.a.modal.alert(t.length)},getRemoveEvent:function(){var e=this.$refs.xTable,t=e.getRemoveRecords();r.a.modal.alert(t.length)},getUpdateEvent:function(){var e=this.$refs.xTable,t=e.getUpdateRecords();r.a.modal.alert(t.length)}}},d=l,i=n("2877"),u=Object(i["a"])(d,a,s,!1,null,null,null);t["default"]=u.exports}}]);