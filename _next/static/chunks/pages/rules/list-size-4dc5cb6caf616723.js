(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7425],{23508:function(e,r,n){"use strict";var t=n(95318);r.Z=void 0;var a=t(n(64938)),o=n(85893),i=(0,a.default)((0,o.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");r.Z=i},53457:function(e,r,n){"use strict";n.d(r,{Z:function(){return h}});var t=n(63366),a=n(87462),o=n(67294),i=n(86010),s=n(77463),l=n(11496),u=n(33616),c=n(21420);function f(e){return(0,c.Z)("MuiFormGroup",e)}(0,n(11271).Z)("MuiFormGroup",["root","row"]);var p=n(85893);const d=["className","row"],m=(0,l.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,n.row&&r.row]}})((({ownerState:e})=>(0,a.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})));var h=o.forwardRef((function(e,r){const n=(0,u.Z)({props:e,name:"MuiFormGroup"}),{className:o,row:l=!1}=n,c=(0,t.Z)(n,d),h=(0,a.Z)({},n,{row:l}),v=(e=>{const{classes:r,row:n}=e,t={root:["root",n&&"row"]};return(0,s.Z)(t,f,r)})(h);return(0,p.jsx)(m,(0,a.Z)({className:(0,i.Z)(v.root,o),ownerState:h,ref:r},c))}))},58945:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rules/list-size",function(){return n(78221)}])},49072:function(e,r,n){"use strict";var t=n(85893),a=n(82280),o=n(38895),i=n(22797),s=n(23508);var l=function(e){var r="____PLACEHOLDER____",n=[],t=JSON.stringify(e,(function(e,t){return"function"===typeof t?(n.push(t),r):(a=t,(null!=(o=RegExp)&&"undefined"!==typeof Symbol&&o[Symbol.hasInstance]?o[Symbol.hasInstance](a):a instanceof o)?(n.push("/"+t.source+"/"),r):t);var a,o}),2);return t=t.replace(new RegExp('"'+r+'"',"g"),(function(){return n.shift()}))};r.Z=function(e){var r=e.currentRules,n=e.header,u=void 0===n?"Current Rules":n;return(0,t.jsx)("div",{className:"currentRuleInfoDiv",children:(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(o.Z,{expandIcon:(0,t.jsx)(s.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,t.jsx)("span",{className:"currentRuleLabel",children:u})}),(0,t.jsx)(i.Z,{children:(0,t.jsx)("span",{className:"currentRuleString",children:l(r)})})]})})}},73952:function(e,r,n){"use strict";var t=n(85893),a=n(25675);r.Z=function(e){var r=e.isValid,n="https://maliksenpai.github.io/react-validatable-form-demo-nextjs/",o="";return r?(n+="/valid.png",o="valid"):(n+="/invalid.png",o="invalid"),(0,t.jsxs)("div",{className:"validationResultDiv",children:[(0,t.jsx)("span",{children:"Validation Result: "}),(0,t.jsx)(a.default,{src:n,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,t.jsx)("span",{className:r?"validationResultInfoSuccess":"validationResultInfoFail",children:o})]})}},39564:function(e,r,n){"use strict";n.d(r,{q:function(){return t}});var t=["equalTo","lessThan","lessThanOrEqualTo","greaterThan","greaterThanOrEqualTo","notEqualTo"]},75017:function(e,r,n){"use strict";n.d(r,{Y:function(){return t}});var t=["Asia","Europe","North America","South America","Africa","Australia","Antarctica"]},78221:function(e,r,n){"use strict";n.r(r);var t=n(85893),a=n(67294),o=n(64459),i=n(53457),s=n(50480),l=n(85071),u=n(39564),c=n(2386),f=n(37840),p=n(93828),d=n(73952),m=n(49072),h=n(75017);function v(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function b(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function j(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){b(e,r,n[r])}))}return e}function x(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return v(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g={rule:"listSize"};g[u.q[0]]=3;var y=[{path:"val",ruleSet:["required",g],dependantPaths:["comparisonValue"]}],w={val:x(h.Y).slice(0,2),ruleOption:u.q[0],comparisonValue:3};r.default=function(){var e=(0,o.c)({rules:y,initialFormData:w}),r=e.isValid,n=e.setPathValue,v=e.setRules,b=e.getValue,g=e.getError,Z=(0,a.useState)(y),S=Z[0],N=Z[1],O=(0,a.useState)(u.q[0]),_=O[0],R=O[1],E=(0,a.useState)(!1),A=E[0],C=E[1],T=function(e,r){var n=JSON.parse(JSON.stringify(y)),t=x(n[0].ruleSet),a={rule:"listSize"};a[r]=e?function(e){return e.comparisonValue}:3,t.splice(1,1,a),n[0].ruleSet=t,N(n),v(n)};return(0,t.jsxs)(c.Z,{header:"listSize",codeUrl:"components/rules/list-size.js",children:[(0,t.jsxs)("p",{className:"infoParagraph",children:[(0,t.jsx)("b",{children:"listSize"})," rule checks the length of an array. ",(0,t.jsx)("b",{children:u.q.join(", ")})," parameters are used to make comparisons with given comparison values."]}),(0,t.jsxs)("div",{className:"comparisonDiv",children:[(0,t.jsx)(p.Z,{multiple:!0,value:b("val"),onChange:function(e,r){n("val",r)},options:h.Y,renderInput:function(e){return(0,t.jsx)(f.Z,j({},e,{error:!!g("val"),helperText:g("val")||" ",label:"equalTo"}))}}),(0,t.jsx)(p.Z,{className:"ruleOptionComponent",value:_,onChange:function(e,r){!function(e){T(A,e),R(e)}(r)},options:u.q,disableClearable:!0,renderInput:function(e){return(0,t.jsx)(f.Z,j({},e,{label:"ruleOption"}))}}),A?(0,t.jsx)(f.Z,{className:"comparisonComponent",label:"comparisonValue",type:"number",value:b("comparisonValue"),onChange:function(e){return n("comparisonValue",e.target.value)}}):(0,t.jsx)(f.Z,{disabled:!0,className:"comparisonComponent",label:"comparisonValue",type:"number",value:3,onChange:function(){}}),(0,t.jsx)(i.Z,{className:"checkboxOnRight",children:(0,t.jsx)(s.Z,{control:(0,t.jsx)(l.Z,{checked:A,onChange:function(e){return r=e.target.checked,T(r,_),void C(r);var r}}),label:"as Function"})})]}),(0,t.jsx)(d.Z,{isValid:r}),(0,t.jsx)(m.Z,{currentRules:S})]})}}},function(e){e.O(0,[9774,2888,179],(function(){return r=58945,e(e.s=r);var r}));var r=e.O();_N_E=r}]);