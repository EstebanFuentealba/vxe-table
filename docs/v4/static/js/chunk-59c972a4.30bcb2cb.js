(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59c972a4"],{"83b2":function(e,n,t){"use strict";t.r(n);t("b0c0");var o=t("7a23"),r={class:"tip"},u=Object(o["l"])(" 通过 "),a=Object(o["l"])("插槽（实时） 或者 "),c=Object(o["l"])(" 格式化内容（值改变时），自动计算联动的行数据，如果是用原生输入框可以通过添加 "),l=Object(o["l"])(" 启用实时运算"),m=Object(o["j"])("br",null,null,-1),i=Object(o["j"])("span",{class:"red"},"（具体请自行实现，该示例仅供参考）",-1),b={class:"demo-code"},d=Object(o["l"])("      "),f=Object(o["l"])("\r\n      "),p=Object(o["l"])("\r\n    ");function s(e,n,t,s,j,O){var v=Object(o["L"])("table-column-api-link"),w=Object(o["L"])("vxe-column"),x=Object(o["L"])("vxe-input"),h=Object(o["L"])("vxe-table"),V=Object(o["L"])("pre-code");return Object(o["D"])(),Object(o["i"])("div",null,[Object(o["j"])("p",r,[u,Object(o["m"])(v,{prop:"slot"}),a,Object(o["m"])(v,{prop:"formatter"}),c,Object(o["m"])(v,{prop:"immediate"}),l,m,i]),Object(o["m"])(h,{border:"",resizable:"","show-overflow":"","show-footer":"",data:e.tableData,"footer-method":e.footerMethod,"edit-config":{trigger:"click",mode:"cell"}},{default:Object(o["V"])((function(){return[Object(o["m"])(w,{type:"seq",width:"60"}),Object(o["m"])(w,{field:"name",title:"书名","edit-render":{}},{edit:Object(o["V"])((function(e){var n=e.row;return[Object(o["m"])(x,{modelValue:n.name,"onUpdate:modelValue":function(e){return n.name=e},type:"text"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(o["m"])(w,{field:"amount",title:"单价","edit-render":{}},{edit:Object(o["V"])((function(e){var n=e.row;return[Object(o["m"])(x,{modelValue:n.amount,"onUpdate:modelValue":function(e){return n.amount=e},type:"number"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(o["m"])(w,{field:"number",title:"数量","edit-render":{}},{edit:Object(o["V"])((function(e){var n=e.row;return[Object(o["m"])(x,{modelValue:n.number,"onUpdate:modelValue":function(e){return n.number=e},type:"number"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(o["m"])(w,{title:"总价"},{default:Object(o["V"])((function(n){var t=n.row;return[Object(o["j"])("span",null,Object(o["O"])(e.countAmount(t))+" 元",1)]})),_:1})]})),_:1},8,["data","footer-method"]),Object(o["j"])("p",b,Object(o["O"])(e.$t("app.body.button.showCode")),1),Object(o["j"])("pre",null,[d,Object(o["m"])(V,{class:"xml"},{default:Object(o["V"])((function(){return[Object(o["l"])(Object(o["O"])(e.demoCodes[0]),1)]})),_:1}),f,Object(o["m"])(V,{class:"typescript"},{default:Object(o["V"])((function(){return[Object(o["l"])(Object(o["O"])(e.demoCodes[1]),1)]})),_:1}),p])])}t("d3b7"),t("159b"),t("a9e3"),t("d81d");var j=Object(o["n"])({setup:function(){var e=Object(o["I"])([{name:"test abc",amount:80,number:5},{name:"JavaScript 权威指南",amount:40,number:3},{name:"Vue 入门到精通",amount:90,number:9},{name:"深入现代 JavaScript 应用开发",amount:60,number:1}]),n=function(e){return e.amount*e.number},t=function(e){var t=0;return e.forEach((function(e){t+=n(e)})),t},r=function(e,n){var t=0;return e.forEach((function(e){t+=Number(e[n])})),t},u=function(e){var n=e.columns,o=e.data;return[n.map((function(e,n){return 0===n?"合计":3===n?"".concat(r(o,"number")," 本"):4===n?"共 ".concat(t(o)," 元"):"-"}))]};return{tableData:e,countAmount:n,footerMethod:u,demoCodes:['\n        <vxe-table\n          border\n          resizable\n          show-overflow\n          show-footer\n          :data="tableData"\n          :footer-method="footerMethod"\n          :edit-config="{trigger: \'click\', mode: \'cell\'}">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="书名" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.name" type="text"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="amount" title="单价" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.amount" type="number"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="number" title="数量" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.number" type="number"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column title="总价">\n            <template #default="{ row }">\n              <span>{{ countAmount(row) }} 元</span>\n            </template>\n          </vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, ref } from 'vue'\n        import { VxeTablePropTypes } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            const tableData = ref([\n              { name: 'test abc', amount: 80, number: 5 },\n              { name: 'JavaScript 权威指南', amount: 40, number: 3 },\n              { name: 'Vue 入门到精通', amount: 90, number: 9 },\n              { name: '深入现代 JavaScript 应用开发', amount: 60, number: 1 }\n            ])\n\n            const countAmount = (row: any) => {\n              return row.amount * row.number\n            }\n\n            const countAllAmount = (data: any[]) => {\n              let count = 0\n              data.forEach(row => {\n                count += countAmount(row)\n              })\n              return count\n            }\n\n            const sumNum = (list: any[], field: string) => {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count\n            }\n\n            const footerMethod: VxeTablePropTypes.FooterMethod = ({ columns, data }) => {\n              return [\n                columns.map((column, columnIndex) => {\n                  if (columnIndex === 0) {\n                    return '合计'\n                  }\n                  if (columnIndex === 3) {\n                    return `${sumNum(data, 'number')} 本`\n                  } else if (columnIndex === 4) {\n                    return `共 ${countAllAmount(data)} 元`\n                  }\n                  return '-'\n                })\n              ]\n            }\n\n            return {\n              tableData,\n              countAmount,\n              footerMethod\n            }\n          }\n        })\n        "]}}}),O=t("6b0d"),v=t.n(O);const w=v()(j,[["render",s]]);n["default"]=w},a9e3:function(e,n,t){"use strict";var o=t("83ab"),r=t("da84"),u=t("e330"),a=t("94ca"),c=t("6eeb"),l=t("1a2d"),m=t("7156"),i=t("3a9b"),b=t("d9b5"),d=t("c04e"),f=t("d039"),p=t("241c").f,s=t("06cf").f,j=t("9bf2").f,O=t("408a"),v=t("58a8").trim,w="Number",x=r[w],h=x.prototype,V=r.TypeError,I=u("".slice),N=u("".charCodeAt),y=function(e){var n=d(e,"number");return"bigint"==typeof n?n:A(n)},A=function(e){var n,t,o,r,u,a,c,l,m=d(e,"number");if(b(m))throw V("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=v(m),n=N(m,0),43===n||45===n){if(t=N(m,2),88===t||120===t)return NaN}else if(48===n){switch(N(m,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+m}for(u=I(m,2),a=u.length,c=0;c<a;c++)if(l=N(u,c),l<48||l>r)return NaN;return parseInt(u,o)}return+m};if(a(w,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var g,E=function(e){var n=arguments.length<1?0:x(y(e)),t=this;return i(h,t)&&f((function(){O(t)}))?m(Object(n),t,E):n},_=o?p(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),S=0;_.length>S;S++)l(x,g=_[S])&&!l(E,g)&&j(E,g,s(x,g));E.prototype=h,h.constructor=E,c(r,w,E)}}}]);