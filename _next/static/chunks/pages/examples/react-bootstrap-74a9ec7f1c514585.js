(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1599],{23508:function(e,t,a){"use strict";var r=a(95318);t.Z=void 0;var n=r(a(64938)),s=a(85893),l=(0,n.default)((0,s.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=l},94184:function(e,t){var a;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)){if(a.length){var l=n.apply(null,a);l&&e.push(l)}}else if("object"===s)if(a.toString===Object.prototype.toString)for(var o in a)r.call(a,o)&&a[o]&&e.push(o);else e.push(a.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},40316:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/react-bootstrap",function(){return a(49326)}])},49072:function(e,t,a){"use strict";var r=a(85893),n=a(82280),s=a(38895),l=a(22797),o=a(23508);var i=function(e){var t="____PLACEHOLDER____",a=[],r=JSON.stringify(e,(function(e,r){return"function"===typeof r?(a.push(r),t):(n=r,(null!=(s=RegExp)&&"undefined"!==typeof Symbol&&s[Symbol.hasInstance]?s[Symbol.hasInstance](n):n instanceof s)?(a.push("/"+r.source+"/"),t):r);var n,s}),2);return r=r.replace(new RegExp('"'+t+'"',"g"),(function(){return a.shift()}))};t.Z=function(e){var t=e.currentRules,a=e.header,c=void 0===a?"Current Rules":a;return(0,r.jsx)("div",{className:"currentRuleInfoDiv",children:(0,r.jsxs)(n.Z,{children:[(0,r.jsx)(s.Z,{expandIcon:(0,r.jsx)(o.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,r.jsx)("span",{className:"currentRuleLabel",children:c})}),(0,r.jsx)(l.Z,{children:(0,r.jsx)("span",{className:"currentRuleString",children:i(t)})})]})})}},6630:function(e,t,a){"use strict";var r=a(85893),n=function(e){var t="____PLACEHOLDER____",a=[],r=JSON.stringify(e,(function(e,r){return"function"===typeof r?(a.push(r),t):r}),2);return r=r.replace(new RegExp('"'+t+'"',"g"),(function(){return a.shift()}))};t.Z=function(e){var t=e.formData;return(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:"formDataString",children:n(t)})})}},73952:function(e,t,a){"use strict";var r=a(85893),n=(a(25675),a(365));t.Z=function(e){var t,a=e.isValid,s="";return a?(t="".concat(n.O,"/valid.png"),s="valid"):(t="".concat(n.O,"/invalid.png"),s="invalid"),(0,r.jsxs)("div",{className:"validationResultDiv",children:[(0,r.jsx)("span",{children:"Validation Result: "}),(0,r.jsx)("img",{src:t,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,r.jsx)("span",{className:a?"validationResultInfoSuccess":"validationResultInfoFail",children:s})]})}},75017:function(e,t,a){"use strict";a.d(t,{Y:function(){return r}});var r=["Asia","Europe","North America","South America","Africa","Australia","Antarctica"]},49326:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ie}});var r=a(85893),n=a(67294),s=a(64459),l=a(94184),o=a.n(l),i=a(45697),c=a.n(i);const u={type:c().string,tooltip:c().bool,as:c().elementType},d=n.forwardRef((({as:e="div",className:t,type:a="valid",tooltip:n=!1,...s},l)=>(0,r.jsx)(e,{...s,ref:l,className:o()(t,`${a}-${n?"tooltip":"feedback"}`)})));d.displayName="Feedback",d.propTypes=u;var f=d;var p=n.createContext({});const m=n.createContext({prefixes:{}}),{Consumer:x,Provider:v}=m;function h(e,t){const{prefixes:a}=(0,n.useContext)(m);return e||a[t]||t}const b=n.forwardRef((({id:e,bsPrefix:t,className:a,type:s="checkbox",isValid:l=!1,isInvalid:i=!1,as:c="input",...u},d)=>{const{controlId:f}=(0,n.useContext)(p);return t=h(t,"form-check-input"),(0,r.jsx)(c,{...u,ref:d,type:s,id:e||f,className:o()(a,t,l&&"is-valid",i&&"is-invalid")})}));b.displayName="FormCheckInput";var y=b;const j=n.forwardRef((({bsPrefix:e,className:t,htmlFor:a,...s},l)=>{const{controlId:i}=(0,n.useContext)(p);return e=h(e,"form-check-label"),(0,r.jsx)("label",{...s,ref:l,htmlFor:a||i,className:o()(t,e)})}));j.displayName="FormCheckLabel";var N=j;const g=n.forwardRef((({id:e,bsPrefix:t,bsSwitchPrefix:a,inline:s=!1,disabled:l=!1,isValid:i=!1,isInvalid:c=!1,feedbackTooltip:u=!1,feedback:d,feedbackType:m,className:x,style:v,title:b="",type:j="checkbox",label:g,children:V,as:C="input",...I},R)=>{t=h(t,"form-check"),a=h(a,"form-switch");const{controlId:w}=(0,n.useContext)(p),_=(0,n.useMemo)((()=>({controlId:e||w})),[w,e]),k=null!=g&&!1!==g&&!V,P=(0,r.jsx)(y,{...I,type:"switch"===j?"checkbox":j,ref:R,isValid:i,isInvalid:c,disabled:l,as:C});return(0,r.jsx)(p.Provider,{value:_,children:(0,r.jsx)("div",{style:v,className:o()(x,g&&t,s&&`${t}-inline`,"switch"===j&&a),children:V||(0,r.jsxs)(r.Fragment,{children:[P,k&&(0,r.jsx)(N,{title:b,children:g}),d&&(0,r.jsx)(f,{type:m,tooltip:u,children:d})]})})})}));g.displayName="FormCheck";var V=Object.assign(g,{Input:y,Label:N});a(42473);const C=n.forwardRef((({bsPrefix:e,type:t,size:a,htmlSize:s,id:l,className:i,isValid:c=!1,isInvalid:u=!1,plaintext:d,readOnly:f,as:m="input",...x},v)=>{const{controlId:b}=(0,n.useContext)(p);let y;return e=h(e,"form-control"),y=d?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${a}`]:a},(0,r.jsx)(m,{...x,type:t,size:s,ref:v,readOnly:f,id:l||b,className:o()(i,y,c&&"is-valid",u&&"is-invalid","color"===t&&`${e}-color`)})}));C.displayName="FormControl";var I=Object.assign(C,{Feedback:f}),R=/-(.)/g;const w=e=>{return e[0].toUpperCase()+(t=e,t.replace(R,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var _=function(e,{displayName:t=w(e),Component:a,defaultProps:s}={}){const l=n.forwardRef((({className:t,bsPrefix:n,as:s=a||"div",...l},i)=>{const c=h(n,e);return(0,r.jsx)(s,{ref:i,className:o()(t,c),...l})}));return l.defaultProps=s,l.displayName=t,l}("form-floating");const k=n.forwardRef((({controlId:e,as:t="div",...a},s)=>{const l=(0,n.useMemo)((()=>({controlId:e})),[e]);return(0,r.jsx)(p.Provider,{value:l,children:(0,r.jsx)(t,{...a,ref:s})})}));k.displayName="FormGroup";var P=k;const S=["xxl","xl","lg","md","sm","xs"];const F=n.forwardRef(((e,t)=>{const[{className:a,...n},{as:s="div",bsPrefix:l,spans:i}]=function({as:e,bsPrefix:t,className:a,...r}){t=h(t,"col");const n=[],s=[];return S.forEach((e=>{const a=r[e];let l,o,i;delete r[e],"object"===typeof a&&null!=a?({span:l,offset:o,order:i}=a):l=a;const c="xs"!==e?`-${e}`:"";l&&n.push(!0===l?`${t}${c}`:`${t}${c}-${l}`),null!=i&&s.push(`order${c}-${i}`),null!=o&&s.push(`offset${c}-${o}`)})),[{...r,className:o()(a,...n,...s)},{as:e,bsPrefix:t,spans:n}]}(e);return(0,r.jsx)(s,{...n,ref:t,className:o()(a,!i.length&&l)})}));F.displayName="Col";var O=F;const $=n.forwardRef((({as:e="label",bsPrefix:t,column:a,visuallyHidden:s,className:l,htmlFor:i,...c},u)=>{const{controlId:d}=(0,n.useContext)(p);t=h(t,"form-label");let f="col-form-label";"string"===typeof a&&(f=`${f} ${f}-${a}`);const m=o()(l,t,s&&"visually-hidden",a&&f);return i=i||d,a?(0,r.jsx)(O,{ref:u,as:"label",className:m,htmlFor:i,...c}):(0,r.jsx)(e,{ref:u,className:m,htmlFor:i,...c})}));$.displayName="FormLabel",$.defaultProps={column:!1,visuallyHidden:!1};var T=$;const E=n.forwardRef((({bsPrefix:e,className:t,id:a,...s},l)=>{const{controlId:i}=(0,n.useContext)(p);return e=h(e,"form-range"),(0,r.jsx)("input",{...s,type:"range",ref:l,className:o()(t,e),id:a||i})}));E.displayName="FormRange";var L=E;const Z=n.forwardRef((({bsPrefix:e,size:t,htmlSize:a,className:s,isValid:l=!1,isInvalid:i=!1,id:c,...u},d)=>{const{controlId:f}=(0,n.useContext)(p);return e=h(e,"form-select"),(0,r.jsx)("select",{...u,size:a,ref:d,className:o()(s,e,t&&`${e}-${t}`,l&&"is-valid",i&&"is-invalid"),id:c||f})}));Z.displayName="FormSelect";var D=Z;const A=n.forwardRef((({bsPrefix:e,className:t,as:a="small",muted:n,...s},l)=>(e=h(e,"form-text"),(0,r.jsx)(a,{...s,ref:l,className:o()(t,e,n&&"text-muted")}))));A.displayName="FormText";var B=A;const z=n.forwardRef(((e,t)=>(0,r.jsx)(V,{...e,ref:t,type:"switch"})));z.displayName="Switch";var G=Object.assign(z,{Input:V.Input,Label:V.Label});const U=n.forwardRef((({bsPrefix:e,className:t,children:a,controlId:n,label:s,...l},i)=>(e=h(e,"form-floating"),(0,r.jsxs)(P,{ref:i,className:o()(t,e),controlId:n,...l,children:[a,(0,r.jsx)("label",{htmlFor:n,children:s})]}))));U.displayName="FloatingLabel";var q=U;const H={_ref:c().any,validated:c().bool,as:c().elementType},M=n.forwardRef((({className:e,validated:t,as:a="form",...n},s)=>(0,r.jsx)(a,{...n,ref:s,className:o()(e,t&&"was-validated")})));M.displayName="Form",M.propTypes=H;var W=Object.assign(M,{Group:P,Control:I,Floating:_,Check:V,Switch:G,Label:T,Text:B,Range:L,Select:D,FloatingLabel:q});const Y=["as","disabled"];function J({tagName:e,disabled:t,href:a,target:r,rel:n,onClick:s,tabIndex:l=0,type:o}){e||(e=null!=a||null!=r||null!=n?"a":"button");const i={tagName:e};if("button"===e)return[{type:o||"button",disabled:t},i];const c=r=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(a))&&r.preventDefault(),t?r.stopPropagation():null==s||s(r)};return[{role:"button",disabled:void 0,tabIndex:t?void 0:l,href:"a"===e&&t?void 0:a,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?n:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},i]}const X=n.forwardRef(((e,t)=>{let{as:a,disabled:n}=e,s=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,Y);const[l,{tagName:o}]=J(Object.assign({tagName:a,disabled:n},s));return(0,r.jsx)(o,Object.assign({},s,l,{ref:t}))}));X.displayName="Button";const K=n.forwardRef((({as:e,bsPrefix:t,variant:a,size:n,active:s,className:l,...i},c)=>{const u=h(t,"btn"),[d,{tagName:f}]=J({tagName:e,...i}),p=f;return(0,r.jsx)(p,{...i,...d,ref:c,className:o()(l,u,s&&"active",a&&`${u}-${a}`,n&&`${u}-${n}`,i.href&&i.disabled&&"disabled")})}));K.displayName="Button",K.defaultProps={variant:"primary",active:!1,disabled:!1};var Q=K,ee=a(64666),te=a(18557),ae=a(75017),re=a(73952),ne=a(49072),se=a(2386),le=a(6630),oe=[{path:"textVal1",ruleSet:[{rule:"required"}]},{path:"textVal2",ruleSet:[{rule:"required"}]},{path:"numVal",ruleSet:[{rule:"required"}]},{path:"selectVal",ruleSet:[{rule:"required"}]}],ie=function(){var e=(0,s.c)({rules:oe,hideBeforeSubmit:!0,showAfterBlur:!0,focusToErrorAfterSubmit:!0}),t=e.isValid,a=e.formData,l=e.setPathValue,o=e.setFormIsSubmitted,i=e.setPathIsBlurred,c=e.getValue,u=e.getError,d=(0,n.useState)(!1),f=d[0],p=d[1];return(0,r.jsxs)(se.Z,{header:"Example Usage with React-Bootstrap Components",codeUrl:"components/examples/react-bootstrap.js",children:[(0,r.jsxs)(W,{className:"my-bootstrap-form",children:[(0,r.jsxs)(W.Group,{controlId:"textVal1",children:[(0,r.jsx)(W.Label,{children:"Text1"}),(0,r.jsx)(W.Control,{placeholder:"Text1",value:c("textVal1")||"",onBlur:function(){return i("textVal1")},onChange:function(e){return l("textVal1",e.target.value)},isInvalid:!!u("textVal1")}),u("textVal1")?(0,r.jsx)(W.Control.Feedback,{type:"invalid",children:u("textVal1")||" "}):(0,r.jsx)("div",{className:"my-bootstrap-empty-feedback"})]}),(0,r.jsxs)(W.Group,{controlId:"textVal2",children:[(0,r.jsx)(W.Label,{children:"Text2"}),(0,r.jsx)(W.Control,{placeholder:"Text2",value:c("textVal2")||"",onBlur:function(){return i("textVal2")},onChange:function(e){return l("textVal2",e.target.value)},isInvalid:!!u("textVal2")}),u("textVal2")?(0,r.jsx)(W.Control.Feedback,{type:"invalid",children:u("textVal2")||" "}):(0,r.jsx)("div",{className:"my-bootstrap-empty-feedback"})]}),(0,r.jsxs)(W.Group,{controlId:"numVal",children:[(0,r.jsx)(W.Label,{children:"Num Val"}),(0,r.jsx)(W.Control,{type:"number",placeholder:"Num Val",value:c("numVal")||"",onBlur:function(){return i("numVal")},onChange:function(e){return l("numVal",e.target.value)},isInvalid:!!u("numVal")}),u("numVal")?(0,r.jsx)(W.Control.Feedback,{type:"invalid",children:u("numVal")||" "}):(0,r.jsx)("div",{className:"my-bootstrap-empty-feedback"})]}),(0,r.jsxs)(W.Group,{controlId:"selectVal",children:[(0,r.jsx)(W.Label,{children:"Select Val"}),(0,r.jsxs)(W.Select,{value:c("selectVal")||"",onBlur:function(){return i("selectVal")},onChange:function(e){return l("selectVal",e.target.value)},isInvalid:!!u("selectVal"),children:[(0,r.jsx)("option",{value:"",children:""},"empty"),ae.Y.map((function(e){return(0,r.jsx)("option",{value:e,children:e},e)}))]}),u("selectVal")?(0,r.jsx)(W.Control.Feedback,{type:"invalid",children:u("selectVal")||" "}):(0,r.jsx)("div",{className:"my-bootstrap-empty-feedback"})]}),(0,r.jsx)(Q,{className:"mySubmitButton",variant:"primary",onClick:function(){o()&&p(!0)},children:"Submit"}),(0,r.jsx)(re.Z,{isValid:t}),(0,r.jsx)(ne.Z,{currentRules:oe})]}),(0,r.jsxs)(ee.Z,{open:f,onClose:function(){return p(!1)},children:[(0,r.jsx)(te.Z,{children:"Form Data Submitted"}),(0,r.jsx)(le.Z,{formData:a})]})]})}},92703:function(e,t,a){"use strict";var r=a(50414);function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,s,l){if(l!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:n};return a.PropTypes=a,a}},45697:function(e,t,a){e.exports=a(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},42473:function(e){"use strict";var t=function(){};e.exports=t}},function(e){e.O(0,[9774,2888,179],(function(){return t=40316,e(e.s=t);var t}));var t=e.O();_N_E=t}]);