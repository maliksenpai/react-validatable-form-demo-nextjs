(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1213],{7686:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/set-form-data",function(){return n(44415)}])},49072:function(e,t,n){"use strict";var r=n(85893),a=n(82280),l=n(38895),u=n(22797),i=n(23508);var s=function(e){var t="____PLACEHOLDER____",n=[],r=JSON.stringify(e,(function(e,r){return"function"===typeof r?(n.push(r),t):(a=r,(null!=(l=RegExp)&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](a):a instanceof l)?(n.push("/"+r.source+"/"),t):r);var a,l}),2);return r=r.replace(new RegExp('"'+t+'"',"g"),(function(){return n.shift()}))};t.Z=function(e){var t=e.currentRules,n=e.header,c=void 0===n?"Current Rules":n;return(0,r.jsx)("div",{className:"currentRuleInfoDiv",children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(l.Z,{expandIcon:(0,r.jsx)(i.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,r.jsx)("span",{className:"currentRuleLabel",children:c})}),(0,r.jsx)(u.Z,{children:(0,r.jsx)("span",{className:"currentRuleString",children:s(t)})})]})})}},6630:function(e,t,n){"use strict";var r=n(85893),a=function(e){var t="____PLACEHOLDER____",n=[],r=JSON.stringify(e,(function(e,r){return"function"===typeof r?(n.push(r),t):r}),2);return r=r.replace(new RegExp('"'+t+'"',"g"),(function(){return n.shift()}))};t.Z=function(e){var t=e.formData;return(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:"formDataString",children:a(t)})})}},73952:function(e,t,n){"use strict";var r=n(85893),a=n(25675);t.Z=function(e){var t,n=e.isValid,l="";return n?(t="/valid.png",l="valid"):(t="/invalid.png",l="invalid"),(0,r.jsxs)("div",{className:"validationResultDiv",children:[(0,r.jsx)("span",{children:"Validation Result: "}),(0,r.jsx)(a.default,{src:t,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,r.jsx)("span",{className:n?"validationResultInfoSuccess":"validationResultInfoFail",children:l})]})}},75017:function(e,t,n){"use strict";n.d(t,{Y:function(){return r}});var r=["Asia","Europe","North America","South America","Africa","Australia","Antarctica"]},44415:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(67294),l=n(64459),u=n(29208),i=n.n(u),s=n(37840),c=n(93828),o=n(11057),f=n(64666),d=n(18557),x=n(75017),h=n(73952),m=n(49072),p=n(2386),v=n(6630);function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=[{path:"textVal1",ruleSet:[{rule:"required"}]},{path:"textVal2",ruleSet:[{rule:"required"}]},{path:"numVal",ruleSet:[{rule:"required"}]},{path:"selectVal",ruleSet:[{rule:"required"}]}];t.default=function(){var e=(0,l.c)({rules:j,focusToErrorAfterSubmit:!0}),t=e.isValid,n=e.validationError,u=e.formData,b=e.setPathValue,_=e.setFormData,g=e.setFormIsSubmitted,S=e.setPathIsBlurred,y=(0,a.useState)(!1),E=y[0],Z=y[1],N=(0,a.useState)(0),R=N[0],w=N[1];(0,a.useEffect)((function(){setTimeout((function(){_({textVal1:"aa",textVal2:"bb",numVal:5,selectVal:["Europe","South America"]}),w(1)}),2e3)}),[]),(0,a.useEffect)((function(){setTimeout((function(){_({textVal1:"aa",numVal:8,selectVal:["Europe"]}),w(2)}),4e3)}),[]);return(0,r.jsxs)(p.Z,{header:"setFormData",codeUrl:"components/examples/SetFormData.js",children:[(0,r.jsxs)("div",{children:[0===R?"Please wait for 2 seconds...":1===R?"Wait for another 2 seconds...":"Thanks for waiting 4 seconds",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{children:(0,r.jsx)(s.Z,{error:!!i()(n,"textVal1"),helperText:i()(n,"textVal1")||" ",label:"Text1",type:"text",value:i()(u,"textVal1")||"",onChange:function(e){return b("textVal1",e.target.value)},onBlur:function(){return S("textVal1")},id:"textVal1"})}),(0,r.jsx)("div",{children:(0,r.jsx)(s.Z,{error:!!i()(n,"textVal2"),helperText:i()(n,"textVal2")||" ",label:"Text2",type:"text",value:i()(u,"textVal2")||"",onChange:function(e){return b("textVal2",e.target.value)},onBlur:function(){return S("textVal2")},id:"textVal2"})}),(0,r.jsx)("div",{children:(0,r.jsx)(s.Z,{error:!!i()(n,"numVal"),helperText:i()(n,"numVal")||" ",label:"Num Val",type:"number",value:i()(u,"numVal")||"",onChange:function(e){return b("numVal",e.target.value)},onBlur:function(){return S("numVal")},id:"numVal"})}),(0,r.jsx)("div",{children:(0,r.jsx)(c.Z,{id:"selectVal",onBlur:function(){return S("selectVal")},multiple:!0,value:i()(u,"selectVal")||[],onChange:function(e,t){b("selectVal",t)},options:x.Y,renderInput:function(e){return(0,r.jsx)(s.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){V(e,t,n[t])}))}return e}({},e,{error:!!i()(n,"selectVal"),helperText:i()(n,"selectVal")||" ",label:"Select Val"}))}})}),(0,r.jsx)("div",{children:(0,r.jsx)(o.Z,{className:"mySubmitButton",variant:"contained",onClick:function(){g()&&Z(!0)},children:"Submit Form"})}),(0,r.jsx)(h.Z,{isValid:t}),(0,r.jsx)(m.Z,{currentRules:j})]}),(0,r.jsxs)(f.Z,{open:E,onClose:function(){return Z(!1)},children:[(0,r.jsx)(d.Z,{children:"Form Data Submitted"}),(0,r.jsx)(v.Z,{formData:u})]})]})}}},function(e){e.O(0,[4041,9774,2888,179],(function(){return t=7686,e(e.s=t);var t}));var t=e.O();_N_E=t}]);