(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7682],{96540:function(e,t,n){"use strict";var i=n(95318);t.Z=void 0;var r=i(n(64938)),l=n(85893),a=(0,r.default)((0,l.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=a},41733:function(e,t,n){"use strict";var i=n(95318);t.Z=void 0;var r=i(n(64938)),l=n(85893),a=(0,r.default)((0,l.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=a},23508:function(e,t,n){"use strict";var i=n(95318);t.Z=void 0;var r=i(n(64938)),l=n(85893),a=(0,r.default)((0,l.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=a},31682:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/advanced/validate-list-of-objects",function(){return n(67616)}])},49072:function(e,t,n){"use strict";var i=n(85893),r=n(82280),l=n(38895),a=n(22797),s=n(23508);var u=function(e){var t="____PLACEHOLDER____",n=[],i=JSON.stringify(e,(function(e,i){return"function"===typeof i?(n.push(i),t):(r=i,(null!=(l=RegExp)&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](r):r instanceof l)?(n.push("/"+i.source+"/"),t):i);var r,l}),2);return i=i.replace(new RegExp('"'+t+'"',"g"),(function(){return n.shift()}))};t.Z=function(e){var t=e.currentRules,n=e.header,c=void 0===n?"Current Rules":n;return(0,i.jsx)("div",{className:"currentRuleInfoDiv",children:(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(l.Z,{expandIcon:(0,i.jsx)(s.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,i.jsx)("span",{className:"currentRuleLabel",children:c})}),(0,i.jsx)(a.Z,{children:(0,i.jsx)("span",{className:"currentRuleString",children:u(t)})})]})})}},6630:function(e,t,n){"use strict";var i=n(85893),r=function(e){var t="____PLACEHOLDER____",n=[],i=JSON.stringify(e,(function(e,i){return"function"===typeof i?(n.push(i),t):i}),2);return i=i.replace(new RegExp('"'+t+'"',"g"),(function(){return n.shift()}))};t.Z=function(e){var t=e.formData;return(0,i.jsx)("div",{children:(0,i.jsx)("span",{className:"formDataString",children:r(t)})})}},73952:function(e,t,n){"use strict";var i=n(85893),r=(n(25675),n(365));t.Z=function(e){var t,n=e.isValid,l="";return n?(t="".concat(r.O,"/valid.png"),l="valid"):(t="".concat(r.O,"/invalid.png"),l="invalid"),(0,i.jsxs)("div",{className:"validationResultDiv",children:[(0,i.jsx)("span",{children:"Validation Result: "}),(0,i.jsx)("img",{src:t,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,i.jsx)("span",{className:n?"validationResultInfoSuccess":"validationResultInfoFail",children:l})]})}},67616:function(e,t,n){"use strict";n.r(t);var i=n(85893),r=n(67294),l=n(64459),a=n(41664),s=n(85071),u=n(37840),c=n(11057),o=n(96540),d=n(41733),h=n(64666),f=n(18557),b=n(73952),m=n(49072),v=n(2386),y=n(6630);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function x(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j=function(e,t){return e.disableAllSubkey2Rule||e.listChild[t].disableSubkey2Rule},k=[{listPath:"listChild",subRules:[{path:"subkey1",ruleSet:["required",{rule:"length",greaterThan:3}]},{path:"subkey2",ruleSet:[{rule:"required",disableIf:j},{rule:"number",greaterThan:5,disableIf:j}]},{path:"subkey3",ruleSet:["required"],elementId:"subkey3ElementId"}],dependantPaths:["disableAllSubkey2Rule"]},{path:"listChild",ruleSet:["required",{rule:"listSize",greaterThan:2}],elementId:"listErrorFocusElement"}];t.default=function(){var e=(0,l.c)({rules:k,initialFormData:{listChild:[{id:1}]},hideBeforeSubmit:!0,showAfterBlur:!0,focusToErrorAfterSubmit:!0}),t=e.isValid,n=e.formData,p=e.setPathValue,j=e.setFormIsSubmitted,C=e.setPathIsBlurred,g=e.getValue,S=e.getError,Z=(0,r.useState)(2),_=Z[0],N=Z[1],R=(0,r.useState)(!1),E=R[0],I=R[1],w=null;return n.listChild&&n.listChild.length>0&&(w=n.listChild.map((function(e,t){return(0,i.jsxs)("div",{className:"formListItem",children:[(0,i.jsx)(u.Z,{style:{width:200},error:!!S("listChild{".concat(t,"}.subkey1")),helperText:S("listChild{".concat(t,"}.subkey1"))||" ",label:"lengthGreaterThan3",type:"text",value:g("listChild[".concat(t,"].subkey1"))||"",onChange:function(e){return p("listChild[".concat(t,"].subkey1"),e.target.value)},onBlur:function(){return C("listChild{".concat(t,"}.subkey1"))},id:"listChild{".concat(t,"}.subkey1")}),(0,i.jsx)(u.Z,{style:{width:200},error:!!S("listChild{".concat(t,"}.subkey2")),helperText:S("listChild{".concat(t,"}.subkey2"))||" ",label:"numberGreaterThan5",type:"number",value:g("listChild[".concat(t,"].subkey2"))||"",onChange:function(e){return p("listChild[".concat(t,"].subkey2"),e.target.value)},onBlur:function(){return C("listChild{".concat(t,"}.subkey2"))},id:"listChild{".concat(t,"}.subkey2")}),"disable",(0,i.jsx)(s.Z,{checked:g("listChild[".concat(t,"].disableSubkey2Rule"))||!1,onChange:function(e){return p("listChild[".concat(t,"].disableSubkey2Rule"),e.target.checked)}}),(0,i.jsx)(u.Z,{style:{width:200},error:!!S("listChild{".concat(t,"}.subkey3")),helperText:S("listChild{".concat(t,"}.subkey3"))||" ",label:"required",type:"text",value:g("listChild[".concat(t,"].subkey3"))||"",onChange:function(e){return p("listChild[".concat(t,"].subkey3"),e.target.value)},onBlur:function(){return C("listChild{".concat(t,"}.subkey3"))},id:"listChild{".concat(t,"}.subkey3ElementId")}),(0,i.jsxs)(c.Z,{className:"myDeleteButton",variant:"contained",onClick:function(){return function(e){var t=n.listChild.filter((function(t){return t.id!==e}));p("listChild",t)}(e.id)},children:[(0,i.jsx)("span",{className:"myShinkableButtonSpan",children:"Delete Element"}),(0,i.jsx)(d.Z,{className:"myShinkableButtonIcon"})]})]},e.id)}))),(0,i.jsxs)(v.Z,{header:"Validate List of Objects",codeUrl:"components/advanced/ValidateListOfObjects.js",children:[(0,i.jsxs)("p",{className:"infoParagraph",children:["An array of objects with more than one subkeys can be validated using"," ",(0,i.jsx)(a.default,{className:"inner-link",href:"/library-api/path",children:"listPath"})," ","and each subkey can have different rules which should be defined in ",(0,i.jsx)("b",{children:"subRules"})," key."]}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)(c.Z,{className:"myAddButton",variant:"contained",onClick:function(){return function(){var e=x(n.listChild);e.push({id:_}),N(_+1),p("listChild",e)}()},id:"listErrorFocusElement",children:[(0,i.jsx)("span",{className:"myShinkableButtonSpan",children:"Add New Element"}),(0,i.jsx)(o.Z,{className:"myShinkableButtonIcon"})]}),(0,i.jsx)("span",{style:{marginLeft:10},children:"disable all subkey2 rows"}),(0,i.jsx)(s.Z,{checked:g("disableAllSubkey2Rule")||!1,onChange:function(e){return p("disableAllSubkey2Rule",e.target.checked)}})]}),(0,i.jsx)("div",{className:"formListField",children:w}),(0,i.jsx)("div",{className:"errorInfoText",children:S("listChild")}),(0,i.jsx)("div",{children:(0,i.jsx)(c.Z,{className:"mySubmitButton",variant:"contained",onClick:function(){j()&&I(!0)},children:"Submit Form"})}),(0,i.jsx)(b.Z,{isValid:t}),(0,i.jsx)(m.Z,{currentRules:k})]}),(0,i.jsxs)(h.Z,{open:E,onClose:function(){return I(!1)},children:[(0,i.jsx)(f.Z,{children:"Form Data Submitted"}),(0,i.jsx)(y.Z,{formData:n})]})]})}}},function(e){e.O(0,[9774,2888,179],(function(){return t=31682,e(e.s=t);var t}));var t=e.O();_N_E=t}]);