(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4239],{96540:function(n,t,e){"use strict";var r=e(95318);t.Z=void 0;var i=r(e(64938)),a=e(85893),l=(0,i.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=l},41733:function(n,t,e){"use strict";var r=e(95318);t.Z=void 0;var i=r(e(64938)),a=e(85893),l=(0,i.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=l},23508:function(n,t,e){"use strict";var r=e(95318);t.Z=void 0;var i=r(e(64938)),a=e(85893),l=(0,i.default)((0,a.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=l},36422:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/advanced/validate-lists",function(){return e(45494)}])},49072:function(n,t,e){"use strict";var r=e(85893),i=e(82280),a=e(38895),l=e(22797),s=e(23508);var c=function(n){var t="____PLACEHOLDER____",e=[],r=JSON.stringify(n,(function(n,r){return"function"===typeof r?(e.push(r),t):(i=r,(null!=(a=RegExp)&&"undefined"!==typeof Symbol&&a[Symbol.hasInstance]?a[Symbol.hasInstance](i):i instanceof a)?(e.push("/"+r.source+"/"),t):r);var i,a}),2);return r=r.replace(new RegExp('"'+t+'"',"g"),(function(){return e.shift()}))};t.Z=function(n){var t=n.currentRules,e=n.header,u=void 0===e?"Current Rules":e;return(0,r.jsx)("div",{className:"currentRuleInfoDiv",children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.Z,{expandIcon:(0,r.jsx)(s.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,r.jsx)("span",{className:"currentRuleLabel",children:u})}),(0,r.jsx)(l.Z,{children:(0,r.jsx)("span",{className:"currentRuleString",children:c(t)})})]})})}},6630:function(n,t,e){"use strict";var r=e(85893),i=function(n){var t="____PLACEHOLDER____",e=[],r=JSON.stringify(n,(function(n,r){return"function"===typeof r?(e.push(r),t):r}),2);return r=r.replace(new RegExp('"'+t+'"',"g"),(function(){return e.shift()}))};t.Z=function(n){var t=n.formData;return(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:"formDataString",children:i(t)})})}},73952:function(n,t,e){"use strict";var r=e(85893),i=(e(25675),e(365));t.Z=function(n){var t,e=n.isValid,a="";return e?(t="".concat(i.O,"/valid.png"),a="valid"):(t="".concat(i.O,"/invalid.png"),a="invalid"),(0,r.jsxs)("div",{className:"validationResultDiv",children:[(0,r.jsx)("span",{children:"Validation Result: "}),(0,r.jsx)("img",{src:t,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,r.jsx)("span",{className:e?"validationResultInfoSuccess":"validationResultInfoFail",children:a})]})}},45494:function(n,t,e){"use strict";e.r(t);var r=e(85893),i=e(67294),a=e(64459),l=e(41664),s=e(37840),c=e(11057),u=e(96540),o=e(41733),d=e(64666),h=e(18557),f=e(73952),v=e(49072),m=e(2386),p=e(6630);function x(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function j(n){return function(n){if(Array.isArray(n))return x(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"===typeof n)return x(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return x(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=[{path:"listChild",ruleSet:["required",{rule:"listSize",greaterThan:2}]},{listPath:"listChild",ruleSet:["required",{rule:"length",greaterThan:3}]}];t.default=function(){var n=(0,a.c)({rules:y,initialFormData:{listChild:[""]}}),t=n.isValid,e=n.formData,x=n.setPathValue,g=n.setFormIsSubmitted,_=n.getValue,S=n.getError,b=(0,i.useState)(!1),C=b[0],N=b[1],Z=null;return e.listChild&&e.listChild.length>0&&(Z=e.listChild.map((function(n,t){return(0,r.jsxs)("div",{children:[(0,r.jsx)(s.Z,{error:!!S("listChild{".concat(t,"}")),helperText:S("listChild{".concat(t,"}"))||" ",label:"lengthGreaterThan3",type:"text",value:_("listChild[".concat(t,"]"))||"",onChange:function(n){return x("listChild[".concat(t,"]"),n.target.value)}}),(0,r.jsxs)(c.Z,{className:"myDeleteButton",variant:"contained",onClick:function(){return function(n){var t=e.listChild.filter((function(t,e){return e!==n}));x("listChild",t)}(t)},children:[(0,r.jsx)("span",{className:"myShinkableButtonSpan",children:"Delete Element"}),(0,r.jsx)(o.Z,{className:"myShinkableButtonIcon"})]})]},t)}))),(0,r.jsxs)(m.Z,{header:"Validate Lists",codeUrl:"components/advanced/validate-lists.js",children:[(0,r.jsxs)("p",{className:"infoParagraph",children:["An array of values can be validated using"," ",(0,r.jsx)(l.default,{className:"inner-link",href:"/library-api/path",children:"listPath"})," ","key."]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:(0,r.jsxs)(c.Z,{className:"myAddButton",variant:"contained",onClick:function(){return function(){var n=j(e.listChild);n.push(""),x("listChild",n)}()},children:[(0,r.jsx)("span",{className:"myShinkableButtonSpan",children:"Add New Element"}),(0,r.jsx)(u.Z,{className:"myShinkableButtonIcon"})]})}),(0,r.jsx)("div",{className:"formListField",children:Z}),(0,r.jsx)("div",{className:"errorInfoText",children:S("listChild")}),(0,r.jsx)("div",{children:(0,r.jsx)(c.Z,{className:"mySubmitButton",variant:"contained",onClick:function(){g()&&N(!0)},children:"Submit Form"})}),(0,r.jsx)(f.Z,{isValid:t}),(0,r.jsx)(v.Z,{currentRules:y})]}),(0,r.jsxs)(d.Z,{open:C,onClose:function(){return N(!1)},children:[(0,r.jsx)(h.Z,{children:"Form Data Submitted"}),(0,r.jsx)(p.Z,{formData:e})]})]})}}},function(n){n.O(0,[9774,2888,179],(function(){return t=36422,n(n.s=t);var t}));var t=n.O();_N_E=t}]);