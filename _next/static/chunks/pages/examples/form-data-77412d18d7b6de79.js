(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2181],{23508:function(e,t,r){"use strict";var n=r(95318);t.Z=void 0;var a=n(r(64938)),l=r(85893),u=(0,a.default)((0,l.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=u},75951:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/form-data",function(){return r(33684)}])},49072:function(e,t,r){"use strict";var n=r(85893),a=r(82280),l=r(38895),u=r(22797),i=r(23508);var s=function(e){var t="____PLACEHOLDER____",r=[],n=JSON.stringify(e,(function(e,n){return"function"===typeof n?(r.push(n),t):(a=n,(null!=(l=RegExp)&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](a):a instanceof l)?(r.push("/"+n.source+"/"),t):n);var a,l}),2);return n=n.replace(new RegExp('"'+t+'"',"g"),(function(){return r.shift()}))};t.Z=function(e){var t=e.currentRules,r=e.header,o=void 0===r?"Current Rules":r;return(0,n.jsx)("div",{className:"currentRuleInfoDiv",children:(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(l.Z,{expandIcon:(0,n.jsx)(i.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,n.jsx)("span",{className:"currentRuleLabel",children:o})}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("span",{className:"currentRuleString",children:s(t)})})]})})}},6630:function(e,t,r){"use strict";var n=r(85893),a=function(e){var t="____PLACEHOLDER____",r=[],n=JSON.stringify(e,(function(e,n){return"function"===typeof n?(r.push(n),t):n}),2);return n=n.replace(new RegExp('"'+t+'"',"g"),(function(){return r.shift()}))};t.Z=function(e){var t=e.formData;return(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:"formDataString",children:a(t)})})}},73952:function(e,t,r){"use strict";var n=r(85893),a=r(25675);t.Z=function(e){var t=e.isValid,r="https://maliksenpai.github.io/react-validatable-form-demo-nextjs/",l="";return t?(r+="/valid.png",l="valid"):(r+="/invalid.png",l="invalid"),(0,n.jsxs)("div",{className:"validationResultDiv",children:[(0,n.jsx)("span",{children:"Validation Result: "}),(0,n.jsx)(a.default,{src:r,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,n.jsx)("span",{className:t?"validationResultInfoSuccess":"validationResultInfoFail",children:l})]})}},75017:function(e,t,r){"use strict";r.d(t,{Y:function(){return n}});var n=["Asia","Europe","North America","South America","Africa","Australia","Antarctica"]},33684:function(e,t,r){"use strict";r.r(t);var n=r(85893),a=r(67294),l=r(64459),u=r(37840),i=r(93828),s=r(11057),o=r(64666),c=r(18557),d=r(75017),f=r(73952),h=r(49072),x=r(2386),p=r(6630);function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=[{path:"textVal1",ruleSet:[{rule:"required"}]},{path:"textVal2",ruleSet:[{rule:"required"}]},{path:"numVal",ruleSet:[{rule:"required"}]},{path:"selectVal",ruleSet:[{rule:"required"}]}],V=[{path:"textVal1",ruleSet:[{rule:"required"},{rule:"length",greaterThanOrEqualTo:10}]},{path:"textVal2",ruleSet:[{rule:"required"},{rule:"length",greaterThanOrEqualTo:15}]},{path:"numVal",ruleSet:[{rule:"required"}]},{path:"selectVal",ruleSet:[{rule:"required"}]}],j=[{path:"textVal1",ruleSet:[{rule:"required"},{rule:"length",greaterThanOrEqualTo:13}]},{path:"textVal2",ruleSet:[{rule:"required"},{rule:"length",greaterThanOrEqualTo:25}]},{path:"numVal",ruleSet:[{rule:"required"}]},{path:"selectVal",ruleSet:[{rule:"required"}]}];t.default=function(){var e=(0,l.c)({rules:v,focusToErrorAfterSubmit:!0}),t=e.isValid,r=e.formData,g=e.setPathValue,b=e.setFormDataAndRules,S=e.setFormIsSubmitted,_=e.setPathIsBlurred,E=e.getValue,Z=e.getError,y=(0,a.useState)(!1),T=y[0],O=y[1],R=(0,a.useState)(v),N=R[0],q=R[1],w=(0,a.useState)(0),D=w[0],C=w[1];(0,a.useEffect)((function(){setTimeout((function(){b({textVal1:"aa",textVal2:"bb",numVal:5,selectVal:["Europe","South America"]},V),C(1),q(V)}),2e3)}),[]),(0,a.useEffect)((function(){setTimeout((function(){b({textVal1:"aa",numVal:8,selectVal:["Europe"]},j),C(2),q(j)}),4e3)}),[]);return(0,n.jsxs)(x.Z,{header:"formData",codeUrl:"components/examples/form-data.js",children:[(0,n.jsxs)("div",{children:[0===D?"Please wait for 2 seconds...":1===D?"Wait for another 2 seconds...":"Thanks for waiting 4 seconds",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{children:(0,n.jsx)(u.Z,{error:!!Z("textVal1"),helperText:Z("textVal1")||" ",label:"Text1",type:"text",value:E("textVal1")||"",onChange:function(e){return g("textVal1",e.target.value)},onBlur:function(){return _("textVal1")},id:"textVal1"})}),(0,n.jsx)("div",{children:(0,n.jsx)(u.Z,{error:!!Z("textVal2"),helperText:Z("textVal2")||" ",label:"Text2",type:"text",value:E("textVal2")||"",onChange:function(e){return g("textVal2",e.target.value)},onBlur:function(){return _("textVal2")},id:"textVal2"})}),(0,n.jsx)("div",{children:(0,n.jsx)(u.Z,{error:!!Z("numVal"),helperText:Z("numVal")||" ",label:"Num Val",type:"number",value:E("numVal")||"",onChange:function(e){return g("numVal",e.target.value)},onBlur:function(){return _("numVal")},id:"numVal"})}),(0,n.jsx)("div",{children:(0,n.jsx)(i.Z,{id:"selectVal",onBlur:function(){return _("selectVal")},multiple:!0,value:E("selectVal")||[],onChange:function(e,t){g("selectVal",t)},options:d.Y,renderInput:function(e){return(0,n.jsx)(u.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){m(e,t,r[t])}))}return e}({},e,{error:!!Z("selectVal"),helperText:Z("selectVal")||" ",label:"Select Val"}))}})}),(0,n.jsx)("div",{children:(0,n.jsx)(s.Z,{className:"mySubmitButton",variant:"contained",onClick:function(){S()&&O(!0)},children:"Submit Form"})}),(0,n.jsx)(f.Z,{isValid:t}),(0,n.jsx)(h.Z,{currentRules:r,header:"Current formData"}),(0,n.jsx)(h.Z,{currentRules:N})]}),(0,n.jsxs)(o.Z,{open:T,onClose:function(){return O(!1)},children:[(0,n.jsx)(c.Z,{children:"Form Data Submitted"}),(0,n.jsx)(p.Z,{formData:r})]})]})}}},function(e){e.O(0,[9774,2888,179],(function(){return t=75951,e(e.s=t);var t}));var t=e.O();_N_E=t}]);