(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2282],{23508:function(e,n,a){"use strict";var t=a(95318);n.Z=void 0;var r=t(a(64938)),l=a(85893),i=(0,r.default)((0,l.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");n.Z=i},31588:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rules/custom-on-hook",function(){return a(76898)}])},49072:function(e,n,a){"use strict";var t=a(85893),r=a(82280),l=a(38895),i=a(22797),s=a(23508);var u=function(e){var n="____PLACEHOLDER____",a=[],t=JSON.stringify(e,(function(e,t){return"function"===typeof t?(a.push(t),n):(r=t,(null!=(l=RegExp)&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](r):r instanceof l)?(a.push("/"+t.source+"/"),n):t);var r,l}),2);return t=t.replace(new RegExp('"'+n+'"',"g"),(function(){return a.shift()}))};n.Z=function(e){var n=e.currentRules,a=e.header,o=void 0===a?"Current Rules":a;return(0,t.jsx)("div",{className:"currentRuleInfoDiv",children:(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(l.Z,{expandIcon:(0,t.jsx)(s.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,t.jsx)("span",{className:"currentRuleLabel",children:o})}),(0,t.jsx)(i.Z,{children:(0,t.jsx)("span",{className:"currentRuleString",children:u(n)})})]})})}},73952:function(e,n,a){"use strict";var t=a(85893),r=a(25675);n.Z=function(e){var n=e.isValid,a="https://maliksenpai.github.io/react-validatable-form-demo-nextjs/",l="";return n?(a+="/valid.png",l="valid"):(a+="/invalid.png",l="invalid"),(0,t.jsxs)("div",{className:"validationResultDiv",children:[(0,t.jsx)("span",{children:"Validation Result: "}),(0,t.jsx)(r.default,{src:a,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,t.jsx)("span",{className:n?"validationResultInfoSuccess":"validationResultInfoFail",children:l})]})}},76898:function(e,n,a){"use strict";a.r(n);var t=a(85893),r=a(64459),l=a(2386),i=a(37840),s=a(73952),u=a(49072),o={val:"aa"},c=[{path:"val",ruleSet:["required",{rule:function(e){var n=e.value;return n&&(!n.includes("g")||n.length<5)?"this field should include letter `g` and its length should be greater than 5":null}}]}];n.default=function(){var e=(0,r.c)({rules:c,initialFormData:o}),n=e.isValid,a=e.setPathValue,d=e.getValue,h=e.getError;return(0,t.jsxs)(l.Z,{header:"customly defined on hook",codeUrl:"components/rules/custom-on-hook.js",children:[(0,t.jsx)("p",{className:"infoParagraph",children:"Custom rules can be defined as a function and given as a rule definition."}),(0,t.jsx)("div",{children:(0,t.jsx)(i.Z,{error:!!h("val"),helperText:h("val")||" ",label:"val",type:"text",value:d("val")||"",onChange:function(e){return a("val",e.target.value)}})}),(0,t.jsx)(s.Z,{isValid:n}),(0,t.jsx)(u.Z,{currentRules:c})]})}}},function(e){e.O(0,[9774,2888,179],(function(){return n=31588,e(e.s=n);var n}));var n=e.O();_N_E=n}]);