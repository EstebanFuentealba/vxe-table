(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bced1"],{"2a8d":function(e,t,i){"use strict";i.r(t);var a=i("7a23"),n=Object(a["j"])("p",{class:"tip"},[Object(a["l"])("通过内置事件拦截器可以很容易的处理表格事件行为与第三方组件的兼容性；比如这些插件 "),Object(a["j"])("a",{class:"link",href:"https://www.npmjs.com/package/vxe-table-plugin-element",target:"_blank"},"vxe-table-plugin-element")],-1),l=Object(a["j"])("h2",null,"可选值",-1),c=Object(a["j"])("h2",null,"示例",-1),p=Object(a["j"])("p",{class:"tip"},[Object(a["l"])(" 例子：比如自定义渲染某个组件后，由于弹出层面板不在单元格之内，按键事件的交互行为存在冲突"),Object(a["j"])("br"),Object(a["l"])(" 当然还有最简单的用法，只需给弹出面板加上 class=vxe-table--ignore-clear 即可 ")],-1),s=Object(a["l"])("      "),r=Object(a["l"])("\r\n    ");function d(e,t,i,d,o,b){var m=Object(a["L"])("vxe-column"),j=Object(a["L"])("vxe-table"),O=Object(a["L"])("pre-code");return Object(a["D"])(),Object(a["i"])("div",null,[Object(a["j"])("h1",null,Object(a["O"])(e.$t("app.aside.nav.interceptor")),1),n,Object(a["m"])(j,{resizable:"","highlight-current-row":"","highlight-hover-row":"","highlight-current-column":"",class:"api-table",data:e.tableData},{default:Object(a["V"])((function(){return[Object(a["m"])(m,{field:"name",title:"app.api.title.prop","min-width":"280","tree-node":""}),Object(a["m"])(m,{field:"desc",title:"app.api.title.desc","min-width":"200"}),Object(a["m"])(m,{field:"type",title:"app.api.title.type","min-width":"140"}),Object(a["m"])(m,{field:"enum",title:"app.api.title.enum","min-width":"150"}),Object(a["m"])(m,{field:"defVal",title:"app.api.title.defVal","min-width":"160"}),Object(a["m"])(m,{field:"version",title:e.$t("app.api.title.version"),width:"120"},{default:Object(a["V"])((function(e){var t=e.row;return[Object(a["W"])(Object(a["j"])("span",{class:"compatibility"},"v"+Object(a["O"])(t.version),513),[[a["T"],t.version]])]})),_:1},8,["title"])]})),_:1},8,["data"]),l,Object(a["m"])(j,{resizable:"","highlight-hover-row":"",class:"api-table",data:e.typeList},{default:Object(a["V"])((function(){return[Object(a["m"])(m,{field:"name",title:"app.api.title.prop","min-width":"280","tree-node":""}),Object(a["m"])(m,{field:"desc",title:"app.api.title.desc","min-width":"200"}),Object(a["m"])(m,{field:"type",title:"app.api.title.type","min-width":"140"}),Object(a["m"])(m,{field:"enum",title:"app.api.title.enum","min-width":"150"}),Object(a["m"])(m,{field:"defVal",title:"app.api.title.defVal","min-width":"160"}),Object(a["m"])(m,{field:"version",title:e.$t("app.api.title.version"),width:"120"},{default:Object(a["V"])((function(e){var t=e.row;return[Object(a["W"])(Object(a["j"])("span",{class:"compatibility"},"v"+Object(a["O"])(t.version),513),[[a["T"],t.version]])]})),_:1},8,["title"])]})),_:1},8,["data"]),c,p,Object(a["j"])("pre",null,[s,Object(a["m"])(O,{class:"typescript"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[0]),1)]})),_:1}),r])])}var o=Object(a["n"])({setup:function(){var e=Object(a["I"])([{name:"add(type, callback)",desc:"添加一个",version:"",type:"",enum:"",defVal:"type: string, callback: (params, event) => any",list:[]},{name:"mixin(options)",desc:"添加多个",version:"",type:"",enum:"",defVal:"options?: { [type: string]: (params, event) => any }",list:[]},{name:"delete(type)",desc:"删除",version:"",type:"",enum:"",defVal:"type: string",list:[]}]),t=Object(a["I"])([{name:"event.clearActived",desc:"清除激活单元格之前触发，允许返回 false 阻止默认行为",version:"",type:"Boolean",enum:"",defVal:"",list:[]},{name:"event.clearFilter",desc:"清除筛选面板之前触发，允许返回 false 阻止默认行为",version:"",type:"Boolean",enum:"",defVal:"",list:[]},{name:"event.clearAreas",desc:"如果功能被支持，清除单元格区域之前触发，允许返回 false 阻止默认行为",version:"",type:"Boolean",enum:"",defVal:"",list:[]},{name:"event.keydown",desc:"键盘按下之前触发，允许返回 false 阻止默认行为",version:"",type:"Boolean",enum:"",defVal:"",list:[]},{name:"event.showMenu",desc:"显示右键菜单之前触发，允许返回 false 阻止默认行为",version:"",type:"Boolean",enum:"",defVal:"",list:[]},{name:"event.import",desc:"工具栏中导入之前触发，允许返回 false 阻止默认行为",version:"",type:"Boolean",enum:"",defVal:"",list:[]},{name:"event.export",desc:"工具栏中导出之前触发，允许返回 false 阻止默认行为",version:"",type:"Boolean",enum:"",defVal:"",list:[]}]);return{tableData:e,typeList:t,demoCodes:["\n        import VXETable from 'vxe-table'\n\n        VXETable.interceptor.add('event.clearActived', (params, event) => {\n          // 比如点击了某个组件的弹出层面板之后，此时被激活单元格不应该被自动关闭，通过返回 false 可以阻止默认的行为。\n          if (event.target.className.indexOf('other-popper') > -1) {\n            return false\n          }\n        })\n        "]}}}),b=i("6b0d"),m=i.n(b);const j=m()(o,[["render",d]]);t["default"]=j}}]);