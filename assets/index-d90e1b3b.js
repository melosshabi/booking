function IS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function CS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ys={},NS={get exports(){return Ys},set exports(t){Ys=t}},Yl={},T={},AS={get exports(){return T},set exports(t){T=t}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bo=Symbol.for("react.element"),RS=Symbol.for("react.portal"),DS=Symbol.for("react.fragment"),PS=Symbol.for("react.strict_mode"),bS=Symbol.for("react.profiler"),xS=Symbol.for("react.provider"),LS=Symbol.for("react.context"),OS=Symbol.for("react.forward_ref"),MS=Symbol.for("react.suspense"),$S=Symbol.for("react.memo"),US=Symbol.for("react.lazy"),Bp=Symbol.iterator;function FS(t){return t===null||typeof t!="object"?null:(t=Bp&&t[Bp]||t["@@iterator"],typeof t=="function"?t:null)}var Ry={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dy=Object.assign,Py={};function Xi(t,e,n){this.props=t,this.context=e,this.refs=Py,this.updater=n||Ry}Xi.prototype.isReactComponent={};Xi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function by(){}by.prototype=Xi.prototype;function Ad(t,e,n){this.props=t,this.context=e,this.refs=Py,this.updater=n||Ry}var Rd=Ad.prototype=new by;Rd.constructor=Ad;Dy(Rd,Xi.prototype);Rd.isPureReactComponent=!0;var jp=Array.isArray,xy=Object.prototype.hasOwnProperty,Dd={current:null},Ly={key:!0,ref:!0,__self:!0,__source:!0};function Oy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xy.call(e,r)&&!Ly.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:bo,type:t,key:s,ref:o,props:i,_owner:Dd.current}}function VS(t,e){return{$$typeof:bo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===bo}function BS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zp=/\/+/g;function Ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?BS(""+t.key):e.toString(36)}function $a(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case bo:case RS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ju(o,0):r,jp(i)?(n="",t!=null&&(n=t.replace(zp,"$&/")+"/"),$a(i,e,n,"",function(u){return u})):i!=null&&(Pd(i)&&(i=VS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(zp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",jp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ju(s,a);o+=$a(s,e,n,l,i)}else if(l=FS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ju(s,a++),o+=$a(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ua(t,e,n){if(t==null)return t;var r=[],i=0;return $a(t,r,"","",function(s){return e.call(n,s,i++)}),r}function jS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ct={current:null},Ua={transition:null},zS={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:Ua,ReactCurrentOwner:Dd};J.Children={map:ua,forEach:function(t,e,n){ua(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ua(t,function(){e++}),e},toArray:function(t){return ua(t,function(e){return e})||[]},only:function(t){if(!Pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Component=Xi;J.Fragment=DS;J.Profiler=bS;J.PureComponent=Ad;J.StrictMode=PS;J.Suspense=MS;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zS;J.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Dy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)xy.call(e,l)&&!Ly.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:bo,type:t.type,key:i,ref:s,props:r,_owner:o}};J.createContext=function(t){return t={$$typeof:LS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xS,_context:t},t.Consumer=t};J.createElement=Oy;J.createFactory=function(t){var e=Oy.bind(null,t);return e.type=t,e};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:OS,render:t}};J.isValidElement=Pd;J.lazy=function(t){return{$$typeof:US,_payload:{_status:-1,_result:t},_init:jS}};J.memo=function(t,e){return{$$typeof:$S,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=Ua.transition;Ua.transition={};try{t()}finally{Ua.transition=e}};J.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};J.useCallback=function(t,e){return ct.current.useCallback(t,e)};J.useContext=function(t){return ct.current.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t){return ct.current.useDeferredValue(t)};J.useEffect=function(t,e){return ct.current.useEffect(t,e)};J.useId=function(){return ct.current.useId()};J.useImperativeHandle=function(t,e,n){return ct.current.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return ct.current.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return ct.current.useLayoutEffect(t,e)};J.useMemo=function(t,e){return ct.current.useMemo(t,e)};J.useReducer=function(t,e,n){return ct.current.useReducer(t,e,n)};J.useRef=function(t){return ct.current.useRef(t)};J.useState=function(t){return ct.current.useState(t)};J.useSyncExternalStore=function(t,e,n){return ct.current.useSyncExternalStore(t,e,n)};J.useTransition=function(){return ct.current.useTransition()};J.version="18.2.0";(function(t){t.exports=J})(AS);const qS=CS(T),Qc=IS({__proto__:null,default:qS},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HS=T,KS=Symbol.for("react.element"),WS=Symbol.for("react.fragment"),GS=Object.prototype.hasOwnProperty,QS=HS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,YS={key:!0,ref:!0,__self:!0,__source:!0};function My(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)GS.call(e,r)&&!YS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:KS,type:t,key:s,ref:o,props:i,_owner:QS.current}}Yl.Fragment=WS;Yl.jsx=My;Yl.jsxs=My;(function(t){t.exports=Yl})(NS);const Ut=Ys.Fragment,h=Ys.jsx,v=Ys.jsxs;var Yc={},Xc={},XS={get exports(){return Xc},set exports(t){Xc=t}},At={},Jc={},JS={get exports(){return Jc},set exports(t){Jc=t}},$y={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(E,P){var O=E.length;E.push(P);e:for(;0<O;){var B=O-1>>>1,ae=E[B];if(0<i(ae,P))E[B]=P,E[O]=ae,O=B;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var P=E[0],O=E.pop();if(O!==P){E[0]=O;e:for(var B=0,ae=E.length,si=ae>>>1;B<si;){var dn=2*(B+1)-1,ds=E[dn],Er=dn+1,la=E[Er];if(0>i(ds,O))Er<ae&&0>i(la,ds)?(E[B]=la,E[Er]=O,B=Er):(E[B]=ds,E[dn]=O,B=dn);else if(Er<ae&&0>i(la,O))E[B]=la,E[Er]=O,B=Er;else break e}}return P}function i(E,P){var O=E.sortIndex-P.sortIndex;return O!==0?O:E.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,w=!1,S=!1,y=!1,I=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(E){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=E)r(u),P.sortIndex=P.expirationTime,e(l,P);else break;P=n(u)}}function _(E){if(y=!1,m(E),!S)if(n(l)!==null)S=!0,Vt(R);else{var P=n(u);P!==null&&ke(_,P.startTime-E)}}function R(E,P){S=!1,y&&(y=!1,g(L),L=-1),w=!0;var O=f;try{for(m(P),d=n(l);d!==null&&(!(d.expirationTime>P)||E&&!z());){var B=d.callback;if(typeof B=="function"){d.callback=null,f=d.priorityLevel;var ae=B(d.expirationTime<=P);P=t.unstable_now(),typeof ae=="function"?d.callback=ae:d===n(l)&&r(l),m(P)}else r(l);d=n(l)}if(d!==null)var si=!0;else{var dn=n(u);dn!==null&&ke(_,dn.startTime-P),si=!1}return si}finally{d=null,f=O,w=!1}}var N=!1,A=null,L=-1,k=5,D=-1;function z(){return!(t.unstable_now()-D<k)}function q(){if(A!==null){var E=t.unstable_now();D=E;var P=!0;try{P=A(!0,E)}finally{P?oe():(N=!1,A=null)}}else N=!1}var oe;if(typeof p=="function")oe=function(){p(q)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,Ke=Z.port2;Z.port1.onmessage=q,oe=function(){Ke.postMessage(null)}}else oe=function(){I(q,0)};function Vt(E){A=E,N||(N=!0,oe())}function ke(E,P){L=I(function(){E(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(E){E.callback=null},t.unstable_continueExecution=function(){S||w||(S=!0,Vt(R))},t.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<E?Math.floor(1e3/E):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(E){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var O=f;f=P;try{return E()}finally{f=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(E,P){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var O=f;f=E;try{return P()}finally{f=O}},t.unstable_scheduleCallback=function(E,P,O){var B=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?B+O:B):O=B,E){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=O+ae,E={id:c++,callback:P,priorityLevel:E,startTime:O,expirationTime:ae,sortIndex:-1},O>B?(E.sortIndex=O,e(u,E),n(l)===null&&E===n(u)&&(y?(g(L),L=-1):y=!0,ke(_,O-B))):(E.sortIndex=ae,e(l,E),S||w||(S=!0,Vt(R))),E},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(E){var P=f;return function(){var O=f;f=P;try{return E.apply(this,arguments)}finally{f=O}}}})($y);(function(t){t.exports=$y})(JS);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uy=T,Ct=Jc;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fy=new Set,Xs={};function Yr(t,e){Li(t,e),Li(t+"Capture",e)}function Li(t,e){for(Xs[t]=e,t=0;t<e.length;t++)Fy.add(e[t])}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=Object.prototype.hasOwnProperty,ZS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qp={},Hp={};function e_(t){return Zc.call(Hp,t)?!0:Zc.call(qp,t)?!1:ZS.test(t)?Hp[t]=!0:(qp[t]=!0,!1)}function t_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function n_(t,e,n,r){if(e===null||typeof e>"u"||t_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var bd=/[\-:]([a-z])/g;function xd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bd,xd);qe[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bd,xd);qe[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bd,xd);qe[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ld(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(n_(e,n,i,r)&&(n=null),r||i===null?e_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ln=Uy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ca=Symbol.for("react.element"),ui=Symbol.for("react.portal"),ci=Symbol.for("react.fragment"),Od=Symbol.for("react.strict_mode"),eh=Symbol.for("react.profiler"),Vy=Symbol.for("react.provider"),By=Symbol.for("react.context"),Md=Symbol.for("react.forward_ref"),th=Symbol.for("react.suspense"),nh=Symbol.for("react.suspense_list"),$d=Symbol.for("react.memo"),Un=Symbol.for("react.lazy"),jy=Symbol.for("react.offscreen"),Kp=Symbol.iterator;function fs(t){return t===null||typeof t!="object"?null:(t=Kp&&t[Kp]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,Zu;function Is(t){if(Zu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zu=e&&e[1]||""}return`
`+Zu+t}var ec=!1;function tc(t,e){if(!t||ec)return"";ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ec=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Is(t):""}function r_(t){switch(t.tag){case 5:return Is(t.type);case 16:return Is("Lazy");case 13:return Is("Suspense");case 19:return Is("SuspenseList");case 0:case 2:case 15:return t=tc(t.type,!1),t;case 11:return t=tc(t.type.render,!1),t;case 1:return t=tc(t.type,!0),t;default:return""}}function rh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ci:return"Fragment";case ui:return"Portal";case eh:return"Profiler";case Od:return"StrictMode";case th:return"Suspense";case nh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case By:return(t.displayName||"Context")+".Consumer";case Vy:return(t._context.displayName||"Context")+".Provider";case Md:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $d:return e=t.displayName||null,e!==null?e:rh(t.type)||"Memo";case Un:e=t._payload,t=t._init;try{return rh(t(e))}catch{}}return null}function i_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rh(e);case 8:return e===Od?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function s_(t){var e=zy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ha(t){t._valueTracker||(t._valueTracker=s_(t))}function qy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=zy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ih(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hy(t,e){e=e.checked,e!=null&&Ld(t,"checked",e,!1)}function sh(t,e){Hy(t,e);var n=lr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?oh(t,e.type,n):e.hasOwnProperty("defaultValue")&&oh(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function oh(t,e,n){(e!=="number"||rl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Cs=Array.isArray;function ki(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ah(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(Cs(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function Ky(t,e){var n=lr(e.value),r=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Yp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var da,Gy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(da=da||document.createElement("div"),da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},o_=["Webkit","ms","Moz","O"];Object.keys(Os).forEach(function(t){o_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Os[e]=Os[t]})});function Qy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Os.hasOwnProperty(t)&&Os[t]?(""+e).trim():e+"px"}function Yy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var a_=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uh(t,e){if(e){if(a_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function ch(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hh=null;function Ud(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dh=null,Ti=null,Ii=null;function Xp(t){if(t=Oo(t)){if(typeof dh!="function")throw Error(b(280));var e=t.stateNode;e&&(e=tu(e),dh(t.stateNode,t.type,e))}}function Xy(t){Ti?Ii?Ii.push(t):Ii=[t]:Ti=t}function Jy(){if(Ti){var t=Ti,e=Ii;if(Ii=Ti=null,Xp(t),e)for(t=0;t<e.length;t++)Xp(e[t])}}function Zy(t,e){return t(e)}function ev(){}var nc=!1;function tv(t,e,n){if(nc)return t(e,n);nc=!0;try{return Zy(t,e,n)}finally{nc=!1,(Ti!==null||Ii!==null)&&(ev(),Jy())}}function Zs(t,e){var n=t.stateNode;if(n===null)return null;var r=tu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var fh=!1;if(Tn)try{var ps={};Object.defineProperty(ps,"passive",{get:function(){fh=!0}}),window.addEventListener("test",ps,ps),window.removeEventListener("test",ps,ps)}catch{fh=!1}function l_(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ms=!1,il=null,sl=!1,ph=null,u_={onError:function(t){Ms=!0,il=t}};function c_(t,e,n,r,i,s,o,a,l){Ms=!1,il=null,l_.apply(u_,arguments)}function h_(t,e,n,r,i,s,o,a,l){if(c_.apply(this,arguments),Ms){if(Ms){var u=il;Ms=!1,il=null}else throw Error(b(198));sl||(sl=!0,ph=u)}}function Xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function nv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jp(t){if(Xr(t)!==t)throw Error(b(188))}function d_(t){var e=t.alternate;if(!e){if(e=Xr(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Jp(i),t;if(s===r)return Jp(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function rv(t){return t=d_(t),t!==null?iv(t):null}function iv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=iv(t);if(e!==null)return e;t=t.sibling}return null}var sv=Ct.unstable_scheduleCallback,Zp=Ct.unstable_cancelCallback,f_=Ct.unstable_shouldYield,p_=Ct.unstable_requestPaint,Te=Ct.unstable_now,m_=Ct.unstable_getCurrentPriorityLevel,Fd=Ct.unstable_ImmediatePriority,ov=Ct.unstable_UserBlockingPriority,ol=Ct.unstable_NormalPriority,g_=Ct.unstable_LowPriority,av=Ct.unstable_IdlePriority,Xl=null,rn=null;function y_(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Xl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:E_,v_=Math.log,w_=Math.LN2;function E_(t){return t>>>=0,t===0?32:31-(v_(t)/w_|0)|0}var fa=64,pa=4194304;function Ns(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function al(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ns(a):(s&=o,s!==0&&(r=Ns(s)))}else o=n&~i,o!==0?r=Ns(o):s!==0&&(r=Ns(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ht(e),i=1<<n,r|=t[n],e&=~i;return r}function S_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function __(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ht(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=S_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function mh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lv(){var t=fa;return fa<<=1,!(fa&4194240)&&(fa=64),t}function rc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ht(e),t[e]=n}function k_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ht(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Vd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ht(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var se=0;function uv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var cv,Bd,hv,dv,fv,gh=!1,ma=[],Yn=null,Xn=null,Jn=null,eo=new Map,to=new Map,Vn=[],T_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function em(t,e){switch(t){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":eo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(e.pointerId)}}function ms(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Oo(e),e!==null&&Bd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function I_(t,e,n,r,i){switch(e){case"focusin":return Yn=ms(Yn,t,e,n,r,i),!0;case"dragenter":return Xn=ms(Xn,t,e,n,r,i),!0;case"mouseover":return Jn=ms(Jn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return eo.set(s,ms(eo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,to.set(s,ms(to.get(s)||null,t,e,n,r,i)),!0}return!1}function pv(t){var e=Ir(t.target);if(e!==null){var n=Xr(e);if(n!==null){if(e=n.tag,e===13){if(e=nv(n),e!==null){t.blockedOn=e,fv(t.priority,function(){hv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);hh=r,n.target.dispatchEvent(r),hh=null}else return e=Oo(n),e!==null&&Bd(e),t.blockedOn=n,!1;e.shift()}return!0}function tm(t,e,n){Fa(t)&&n.delete(e)}function C_(){gh=!1,Yn!==null&&Fa(Yn)&&(Yn=null),Xn!==null&&Fa(Xn)&&(Xn=null),Jn!==null&&Fa(Jn)&&(Jn=null),eo.forEach(tm),to.forEach(tm)}function gs(t,e){t.blockedOn===e&&(t.blockedOn=null,gh||(gh=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,C_)))}function no(t){function e(i){return gs(i,t)}if(0<ma.length){gs(ma[0],t);for(var n=1;n<ma.length;n++){var r=ma[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Yn!==null&&gs(Yn,t),Xn!==null&&gs(Xn,t),Jn!==null&&gs(Jn,t),eo.forEach(e),to.forEach(e),n=0;n<Vn.length;n++)r=Vn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Vn.length&&(n=Vn[0],n.blockedOn===null);)pv(n),n.blockedOn===null&&Vn.shift()}var Ci=Ln.ReactCurrentBatchConfig,ll=!0;function N_(t,e,n,r){var i=se,s=Ci.transition;Ci.transition=null;try{se=1,jd(t,e,n,r)}finally{se=i,Ci.transition=s}}function A_(t,e,n,r){var i=se,s=Ci.transition;Ci.transition=null;try{se=4,jd(t,e,n,r)}finally{se=i,Ci.transition=s}}function jd(t,e,n,r){if(ll){var i=yh(t,e,n,r);if(i===null)fc(t,e,r,ul,n),em(t,r);else if(I_(i,t,e,n,r))r.stopPropagation();else if(em(t,r),e&4&&-1<T_.indexOf(t)){for(;i!==null;){var s=Oo(i);if(s!==null&&cv(s),s=yh(t,e,n,r),s===null&&fc(t,e,r,ul,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else fc(t,e,r,null,n)}}var ul=null;function yh(t,e,n,r){if(ul=null,t=Ud(r),t=Ir(t),t!==null)if(e=Xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=nv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ul=t,null}function mv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(m_()){case Fd:return 1;case ov:return 4;case ol:case g_:return 16;case av:return 536870912;default:return 16}default:return 16}}var Wn=null,zd=null,Va=null;function gv(){if(Va)return Va;var t,e=zd,n=e.length,r,i="value"in Wn?Wn.value:Wn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Va=i.slice(t,1<r?1-r:void 0)}function Ba(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ga(){return!0}function nm(){return!1}function Rt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ga:nm,this.isPropagationStopped=nm,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),e}var Ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qd=Rt(Ji),Lo=ve({},Ji,{view:0,detail:0}),R_=Rt(Lo),ic,sc,ys,Jl=ve({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ys&&(ys&&t.type==="mousemove"?(ic=t.screenX-ys.screenX,sc=t.screenY-ys.screenY):sc=ic=0,ys=t),ic)},movementY:function(t){return"movementY"in t?t.movementY:sc}}),rm=Rt(Jl),D_=ve({},Jl,{dataTransfer:0}),P_=Rt(D_),b_=ve({},Lo,{relatedTarget:0}),oc=Rt(b_),x_=ve({},Ji,{animationName:0,elapsedTime:0,pseudoElement:0}),L_=Rt(x_),O_=ve({},Ji,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),M_=Rt(O_),$_=ve({},Ji,{data:0}),im=Rt($_),U_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=V_[t])?!!e[t]:!1}function Hd(){return B_}var j_=ve({},Lo,{key:function(t){if(t.key){var e=U_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ba(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?F_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hd,charCode:function(t){return t.type==="keypress"?Ba(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ba(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),z_=Rt(j_),q_=ve({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sm=Rt(q_),H_=ve({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hd}),K_=Rt(H_),W_=ve({},Ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),G_=Rt(W_),Q_=ve({},Jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Y_=Rt(Q_),X_=[9,13,27,32],Kd=Tn&&"CompositionEvent"in window,$s=null;Tn&&"documentMode"in document&&($s=document.documentMode);var J_=Tn&&"TextEvent"in window&&!$s,yv=Tn&&(!Kd||$s&&8<$s&&11>=$s),om=String.fromCharCode(32),am=!1;function vv(t,e){switch(t){case"keyup":return X_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hi=!1;function Z_(t,e){switch(t){case"compositionend":return wv(e);case"keypress":return e.which!==32?null:(am=!0,om);case"textInput":return t=e.data,t===om&&am?null:t;default:return null}}function ek(t,e){if(hi)return t==="compositionend"||!Kd&&vv(t,e)?(t=gv(),Va=zd=Wn=null,hi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yv&&e.locale!=="ko"?null:e.data;default:return null}}var tk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tk[t.type]:e==="textarea"}function Ev(t,e,n,r){Xy(r),e=cl(e,"onChange"),0<e.length&&(n=new qd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Us=null,ro=null;function nk(t){Pv(t,0)}function Zl(t){var e=pi(t);if(qy(e))return t}function rk(t,e){if(t==="change")return e}var Sv=!1;if(Tn){var ac;if(Tn){var lc="oninput"in document;if(!lc){var um=document.createElement("div");um.setAttribute("oninput","return;"),lc=typeof um.oninput=="function"}ac=lc}else ac=!1;Sv=ac&&(!document.documentMode||9<document.documentMode)}function cm(){Us&&(Us.detachEvent("onpropertychange",_v),ro=Us=null)}function _v(t){if(t.propertyName==="value"&&Zl(ro)){var e=[];Ev(e,ro,t,Ud(t)),tv(nk,e)}}function ik(t,e,n){t==="focusin"?(cm(),Us=e,ro=n,Us.attachEvent("onpropertychange",_v)):t==="focusout"&&cm()}function sk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zl(ro)}function ok(t,e){if(t==="click")return Zl(e)}function ak(t,e){if(t==="input"||t==="change")return Zl(e)}function lk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gt=typeof Object.is=="function"?Object.is:lk;function io(t,e){if(Gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zc.call(e,i)||!Gt(t[i],e[i]))return!1}return!0}function hm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dm(t,e){var n=hm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hm(n)}}function kv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?kv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Tv(){for(var t=window,e=rl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=rl(t.document)}return e}function Wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uk(t){var e=Tv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&kv(n.ownerDocument.documentElement,n)){if(r!==null&&Wd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=dm(n,s);var o=dm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ck=Tn&&"documentMode"in document&&11>=document.documentMode,di=null,vh=null,Fs=null,wh=!1;function fm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wh||di==null||di!==rl(r)||(r=di,"selectionStart"in r&&Wd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fs&&io(Fs,r)||(Fs=r,r=cl(vh,"onSelect"),0<r.length&&(e=new qd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=di)))}function ya(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fi={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},uc={},Iv={};Tn&&(Iv=document.createElement("div").style,"AnimationEvent"in window||(delete fi.animationend.animation,delete fi.animationiteration.animation,delete fi.animationstart.animation),"TransitionEvent"in window||delete fi.transitionend.transition);function eu(t){if(uc[t])return uc[t];if(!fi[t])return t;var e=fi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Iv)return uc[t]=e[n];return t}var Cv=eu("animationend"),Nv=eu("animationiteration"),Av=eu("animationstart"),Rv=eu("transitionend"),Dv=new Map,pm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,e){Dv.set(t,e),Yr(e,[t])}for(var cc=0;cc<pm.length;cc++){var hc=pm[cc],hk=hc.toLowerCase(),dk=hc[0].toUpperCase()+hc.slice(1);pr(hk,"on"+dk)}pr(Cv,"onAnimationEnd");pr(Nv,"onAnimationIteration");pr(Av,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(Rv,"onTransitionEnd");Li("onMouseEnter",["mouseout","mouseover"]);Li("onMouseLeave",["mouseout","mouseover"]);Li("onPointerEnter",["pointerout","pointerover"]);Li("onPointerLeave",["pointerout","pointerover"]);Yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var As="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fk=new Set("cancel close invalid load scroll toggle".split(" ").concat(As));function mm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,h_(r,e,void 0,t),t.currentTarget=null}function Pv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;mm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;mm(i,a,u),s=l}}}if(sl)throw t=ph,sl=!1,ph=null,t}function ce(t,e){var n=e[Th];n===void 0&&(n=e[Th]=new Set);var r=t+"__bubble";n.has(r)||(bv(e,t,2,!1),n.add(r))}function dc(t,e,n){var r=0;e&&(r|=4),bv(n,t,r,e)}var va="_reactListening"+Math.random().toString(36).slice(2);function so(t){if(!t[va]){t[va]=!0,Fy.forEach(function(n){n!=="selectionchange"&&(fk.has(n)||dc(n,!1,t),dc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[va]||(e[va]=!0,dc("selectionchange",!1,e))}}function bv(t,e,n,r){switch(mv(e)){case 1:var i=N_;break;case 4:i=A_;break;default:i=jd}n=i.bind(null,e,n,t),i=void 0,!fh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function fc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ir(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}tv(function(){var u=s,c=Ud(n),d=[];e:{var f=Dv.get(t);if(f!==void 0){var w=qd,S=t;switch(t){case"keypress":if(Ba(n)===0)break e;case"keydown":case"keyup":w=z_;break;case"focusin":S="focus",w=oc;break;case"focusout":S="blur",w=oc;break;case"beforeblur":case"afterblur":w=oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=P_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=K_;break;case Cv:case Nv:case Av:w=L_;break;case Rv:w=G_;break;case"scroll":w=R_;break;case"wheel":w=Y_;break;case"copy":case"cut":case"paste":w=M_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=sm}var y=(e&4)!==0,I=!y&&t==="scroll",g=y?f!==null?f+"Capture":null:f;y=[];for(var p=u,m;p!==null;){m=p;var _=m.stateNode;if(m.tag===5&&_!==null&&(m=_,g!==null&&(_=Zs(p,g),_!=null&&y.push(oo(p,_,m)))),I)break;p=p.return}0<y.length&&(f=new w(f,S,null,n,c),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",f&&n!==hh&&(S=n.relatedTarget||n.fromElement)&&(Ir(S)||S[In]))break e;if((w||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,w?(S=n.relatedTarget||n.toElement,w=u,S=S?Ir(S):null,S!==null&&(I=Xr(S),S!==I||S.tag!==5&&S.tag!==6)&&(S=null)):(w=null,S=u),w!==S)){if(y=rm,_="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=sm,_="onPointerLeave",g="onPointerEnter",p="pointer"),I=w==null?f:pi(w),m=S==null?f:pi(S),f=new y(_,p+"leave",w,n,c),f.target=I,f.relatedTarget=m,_=null,Ir(c)===u&&(y=new y(g,p+"enter",S,n,c),y.target=m,y.relatedTarget=I,_=y),I=_,w&&S)t:{for(y=w,g=S,p=0,m=y;m;m=oi(m))p++;for(m=0,_=g;_;_=oi(_))m++;for(;0<p-m;)y=oi(y),p--;for(;0<m-p;)g=oi(g),m--;for(;p--;){if(y===g||g!==null&&y===g.alternate)break t;y=oi(y),g=oi(g)}y=null}else y=null;w!==null&&gm(d,f,w,y,!1),S!==null&&I!==null&&gm(d,I,S,y,!0)}}e:{if(f=u?pi(u):window,w=f.nodeName&&f.nodeName.toLowerCase(),w==="select"||w==="input"&&f.type==="file")var R=rk;else if(lm(f))if(Sv)R=ak;else{R=sk;var N=ik}else(w=f.nodeName)&&w.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=ok);if(R&&(R=R(t,u))){Ev(d,R,n,c);break e}N&&N(t,f,u),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&oh(f,"number",f.value)}switch(N=u?pi(u):window,t){case"focusin":(lm(N)||N.contentEditable==="true")&&(di=N,vh=u,Fs=null);break;case"focusout":Fs=vh=di=null;break;case"mousedown":wh=!0;break;case"contextmenu":case"mouseup":case"dragend":wh=!1,fm(d,n,c);break;case"selectionchange":if(ck)break;case"keydown":case"keyup":fm(d,n,c)}var A;if(Kd)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else hi?vv(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(yv&&n.locale!=="ko"&&(hi||L!=="onCompositionStart"?L==="onCompositionEnd"&&hi&&(A=gv()):(Wn=c,zd="value"in Wn?Wn.value:Wn.textContent,hi=!0)),N=cl(u,L),0<N.length&&(L=new im(L,t,null,n,c),d.push({event:L,listeners:N}),A?L.data=A:(A=wv(n),A!==null&&(L.data=A)))),(A=J_?Z_(t,n):ek(t,n))&&(u=cl(u,"onBeforeInput"),0<u.length&&(c=new im("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=A))}Pv(d,e)})}function oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zs(t,n),s!=null&&r.unshift(oo(t,s,i)),s=Zs(t,e),s!=null&&r.push(oo(t,s,i))),t=t.return}return r}function oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Zs(n,s),l!=null&&o.unshift(oo(n,l,a))):i||(l=Zs(n,s),l!=null&&o.push(oo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pk=/\r\n?/g,mk=/\u0000|\uFFFD/g;function ym(t){return(typeof t=="string"?t:""+t).replace(pk,`
`).replace(mk,"")}function wa(t,e,n){if(e=ym(e),ym(t)!==e&&n)throw Error(b(425))}function hl(){}var Eh=null,Sh=null;function _h(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kh=typeof setTimeout=="function"?setTimeout:void 0,gk=typeof clearTimeout=="function"?clearTimeout:void 0,vm=typeof Promise=="function"?Promise:void 0,yk=typeof queueMicrotask=="function"?queueMicrotask:typeof vm<"u"?function(t){return vm.resolve(null).then(t).catch(vk)}:kh;function vk(t){setTimeout(function(){throw t})}function pc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),no(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);no(e)}function Zn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zi=Math.random().toString(36).slice(2),en="__reactFiber$"+Zi,ao="__reactProps$"+Zi,In="__reactContainer$"+Zi,Th="__reactEvents$"+Zi,wk="__reactListeners$"+Zi,Ek="__reactHandles$"+Zi;function Ir(t){var e=t[en];if(e)return e;for(var n=t.parentNode;n;){if(e=n[In]||n[en]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wm(t);t!==null;){if(n=t[en])return n;t=wm(t)}return e}t=n,n=t.parentNode}return null}function Oo(t){return t=t[en]||t[In],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function pi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function tu(t){return t[ao]||null}var Ih=[],mi=-1;function mr(t){return{current:t}}function de(t){0>mi||(t.current=Ih[mi],Ih[mi]=null,mi--)}function le(t,e){mi++,Ih[mi]=t.current,t.current=e}var ur={},nt=mr(ur),gt=mr(!1),$r=ur;function Oi(t,e){var n=t.type.contextTypes;if(!n)return ur;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function yt(t){return t=t.childContextTypes,t!=null}function dl(){de(gt),de(nt)}function Em(t,e,n){if(nt.current!==ur)throw Error(b(168));le(nt,e),le(gt,n)}function xv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,i_(t)||"Unknown",i));return ve({},n,r)}function fl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,$r=nt.current,le(nt,t),le(gt,gt.current),!0}function Sm(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=xv(t,e,$r),r.__reactInternalMemoizedMergedChildContext=t,de(gt),de(nt),le(nt,t)):de(gt),le(gt,n)}var mn=null,nu=!1,mc=!1;function Lv(t){mn===null?mn=[t]:mn.push(t)}function Sk(t){nu=!0,Lv(t)}function gr(){if(!mc&&mn!==null){mc=!0;var t=0,e=se;try{var n=mn;for(se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mn=null,nu=!1}catch(i){throw mn!==null&&(mn=mn.slice(t+1)),sv(Fd,gr),i}finally{se=e,mc=!1}}return null}var gi=[],yi=0,pl=null,ml=0,Pt=[],bt=0,Ur=null,gn=1,yn="";function Sr(t,e){gi[yi++]=ml,gi[yi++]=pl,pl=t,ml=e}function Ov(t,e,n){Pt[bt++]=gn,Pt[bt++]=yn,Pt[bt++]=Ur,Ur=t;var r=gn;t=yn;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var s=32-Ht(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,gn=1<<32-Ht(e)+i|n<<i|r,yn=s+t}else gn=1<<s|n<<i|r,yn=t}function Gd(t){t.return!==null&&(Sr(t,1),Ov(t,1,0))}function Qd(t){for(;t===pl;)pl=gi[--yi],gi[yi]=null,ml=gi[--yi],gi[yi]=null;for(;t===Ur;)Ur=Pt[--bt],Pt[bt]=null,yn=Pt[--bt],Pt[bt]=null,gn=Pt[--bt],Pt[bt]=null}var It=null,_t=null,fe=!1,qt=null;function Mv(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _m(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,It=t,_t=Zn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,It=t,_t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ur!==null?{id:gn,overflow:yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,It=t,_t=null,!0):!1;default:return!1}}function Ch(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nh(t){if(fe){var e=_t;if(e){var n=e;if(!_m(t,e)){if(Ch(t))throw Error(b(418));e=Zn(n.nextSibling);var r=It;e&&_m(t,e)?Mv(r,n):(t.flags=t.flags&-4097|2,fe=!1,It=t)}}else{if(Ch(t))throw Error(b(418));t.flags=t.flags&-4097|2,fe=!1,It=t}}}function km(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;It=t}function Ea(t){if(t!==It)return!1;if(!fe)return km(t),fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_h(t.type,t.memoizedProps)),e&&(e=_t)){if(Ch(t))throw $v(),Error(b(418));for(;e;)Mv(t,e),e=Zn(e.nextSibling)}if(km(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_t=Zn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_t=null}}else _t=It?Zn(t.stateNode.nextSibling):null;return!0}function $v(){for(var t=_t;t;)t=Zn(t.nextSibling)}function Mi(){_t=It=null,fe=!1}function Yd(t){qt===null?qt=[t]:qt.push(t)}var _k=Ln.ReactCurrentBatchConfig;function jt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var gl=mr(null),yl=null,vi=null,Xd=null;function Jd(){Xd=vi=yl=null}function Zd(t){var e=gl.current;de(gl),t._currentValue=e}function Ah(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ni(t,e){yl=t,Xd=vi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mt=!0),t.firstContext=null)}function Mt(t){var e=t._currentValue;if(Xd!==t)if(t={context:t,memoizedValue:e,next:null},vi===null){if(yl===null)throw Error(b(308));vi=t,yl.dependencies={lanes:0,firstContext:t}}else vi=vi.next=t;return e}var Cr=null;function ef(t){Cr===null?Cr=[t]:Cr.push(t)}function Uv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ef(e)):(n.next=i.next,i.next=n),e.interleaved=n,Cn(t,r)}function Cn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fn=!1;function tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Cn(t,n)}return i=r.interleaved,i===null?(e.next=e,ef(r)):(e.next=i.next,i.next=e),r.interleaved=e,Cn(t,n)}function ja(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vd(t,n)}}function Tm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vl(t,e,n,r){var i=t.updateQueue;Fn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,w=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,y=a;switch(f=e,w=n,y.tag){case 1:if(S=y.payload,typeof S=="function"){d=S.call(w,d,f);break e}d=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=y.payload,f=typeof S=="function"?S.call(w,d,f):S,f==null)break e;d=ve({},d,f);break e;case 2:Fn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else w={eventTime:w,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=w,l=d):c=c.next=w,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Vr|=o,t.lanes=o,t.memoizedState=d}}function Im(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var Vv=new Uy.Component().refs;function Rh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ru={isMounted:function(t){return(t=t._reactInternals)?Xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),i=nr(t),s=Sn(r,i);s.payload=e,n!=null&&(s.callback=n),e=er(t,s,i),e!==null&&(Kt(e,t,i,r),ja(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),i=nr(t),s=Sn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=er(t,s,i),e!==null&&(Kt(e,t,i,r),ja(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=nr(t),i=Sn(n,r);i.tag=2,e!=null&&(i.callback=e),e=er(t,i,r),e!==null&&(Kt(e,t,r,n),ja(e,t,r))}};function Cm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!io(n,r)||!io(i,s):!0}function Bv(t,e,n){var r=!1,i=ur,s=e.contextType;return typeof s=="object"&&s!==null?s=Mt(s):(i=yt(e)?$r:nt.current,r=e.contextTypes,s=(r=r!=null)?Oi(t,i):ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ru,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Nm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ru.enqueueReplaceState(e,e.state,null)}function Dh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Vv,tf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Mt(s):(s=yt(e)?$r:nt.current,i.context=Oi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ru.enqueueReplaceState(i,i.state,null),vl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Vv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function Sa(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Am(t){var e=t._init;return e(t._payload)}function jv(t){function e(g,p){if(t){var m=g.deletions;m===null?(g.deletions=[p],g.flags|=16):m.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=rr(g,p),g.index=0,g.sibling=null,g}function s(g,p,m){return g.index=m,t?(m=g.alternate,m!==null?(m=m.index,m<p?(g.flags|=2,p):m):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,m,_){return p===null||p.tag!==6?(p=_c(m,g.mode,_),p.return=g,p):(p=i(p,m),p.return=g,p)}function l(g,p,m,_){var R=m.type;return R===ci?c(g,p,m.props.children,_,m.key):p!==null&&(p.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Un&&Am(R)===p.type)?(_=i(p,m.props),_.ref=vs(g,p,m),_.return=g,_):(_=Ga(m.type,m.key,m.props,null,g.mode,_),_.ref=vs(g,p,m),_.return=g,_)}function u(g,p,m,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=kc(m,g.mode,_),p.return=g,p):(p=i(p,m.children||[]),p.return=g,p)}function c(g,p,m,_,R){return p===null||p.tag!==7?(p=br(m,g.mode,_,R),p.return=g,p):(p=i(p,m),p.return=g,p)}function d(g,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=_c(""+p,g.mode,m),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ca:return m=Ga(p.type,p.key,p.props,null,g.mode,m),m.ref=vs(g,null,p),m.return=g,m;case ui:return p=kc(p,g.mode,m),p.return=g,p;case Un:var _=p._init;return d(g,_(p._payload),m)}if(Cs(p)||fs(p))return p=br(p,g.mode,m,null),p.return=g,p;Sa(g,p)}return null}function f(g,p,m,_){var R=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return R!==null?null:a(g,p,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ca:return m.key===R?l(g,p,m,_):null;case ui:return m.key===R?u(g,p,m,_):null;case Un:return R=m._init,f(g,p,R(m._payload),_)}if(Cs(m)||fs(m))return R!==null?null:c(g,p,m,_,null);Sa(g,m)}return null}function w(g,p,m,_,R){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(m)||null,a(p,g,""+_,R);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ca:return g=g.get(_.key===null?m:_.key)||null,l(p,g,_,R);case ui:return g=g.get(_.key===null?m:_.key)||null,u(p,g,_,R);case Un:var N=_._init;return w(g,p,m,N(_._payload),R)}if(Cs(_)||fs(_))return g=g.get(m)||null,c(p,g,_,R,null);Sa(p,_)}return null}function S(g,p,m,_){for(var R=null,N=null,A=p,L=p=0,k=null;A!==null&&L<m.length;L++){A.index>L?(k=A,A=null):k=A.sibling;var D=f(g,A,m[L],_);if(D===null){A===null&&(A=k);break}t&&A&&D.alternate===null&&e(g,A),p=s(D,p,L),N===null?R=D:N.sibling=D,N=D,A=k}if(L===m.length)return n(g,A),fe&&Sr(g,L),R;if(A===null){for(;L<m.length;L++)A=d(g,m[L],_),A!==null&&(p=s(A,p,L),N===null?R=A:N.sibling=A,N=A);return fe&&Sr(g,L),R}for(A=r(g,A);L<m.length;L++)k=w(A,g,L,m[L],_),k!==null&&(t&&k.alternate!==null&&A.delete(k.key===null?L:k.key),p=s(k,p,L),N===null?R=k:N.sibling=k,N=k);return t&&A.forEach(function(z){return e(g,z)}),fe&&Sr(g,L),R}function y(g,p,m,_){var R=fs(m);if(typeof R!="function")throw Error(b(150));if(m=R.call(m),m==null)throw Error(b(151));for(var N=R=null,A=p,L=p=0,k=null,D=m.next();A!==null&&!D.done;L++,D=m.next()){A.index>L?(k=A,A=null):k=A.sibling;var z=f(g,A,D.value,_);if(z===null){A===null&&(A=k);break}t&&A&&z.alternate===null&&e(g,A),p=s(z,p,L),N===null?R=z:N.sibling=z,N=z,A=k}if(D.done)return n(g,A),fe&&Sr(g,L),R;if(A===null){for(;!D.done;L++,D=m.next())D=d(g,D.value,_),D!==null&&(p=s(D,p,L),N===null?R=D:N.sibling=D,N=D);return fe&&Sr(g,L),R}for(A=r(g,A);!D.done;L++,D=m.next())D=w(A,g,L,D.value,_),D!==null&&(t&&D.alternate!==null&&A.delete(D.key===null?L:D.key),p=s(D,p,L),N===null?R=D:N.sibling=D,N=D);return t&&A.forEach(function(q){return e(g,q)}),fe&&Sr(g,L),R}function I(g,p,m,_){if(typeof m=="object"&&m!==null&&m.type===ci&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ca:e:{for(var R=m.key,N=p;N!==null;){if(N.key===R){if(R=m.type,R===ci){if(N.tag===7){n(g,N.sibling),p=i(N,m.props.children),p.return=g,g=p;break e}}else if(N.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Un&&Am(R)===N.type){n(g,N.sibling),p=i(N,m.props),p.ref=vs(g,N,m),p.return=g,g=p;break e}n(g,N);break}else e(g,N);N=N.sibling}m.type===ci?(p=br(m.props.children,g.mode,_,m.key),p.return=g,g=p):(_=Ga(m.type,m.key,m.props,null,g.mode,_),_.ref=vs(g,p,m),_.return=g,g=_)}return o(g);case ui:e:{for(N=m.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(g,p.sibling),p=i(p,m.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=kc(m,g.mode,_),p.return=g,g=p}return o(g);case Un:return N=m._init,I(g,p,N(m._payload),_)}if(Cs(m))return S(g,p,m,_);if(fs(m))return y(g,p,m,_);Sa(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,m),p.return=g,g=p):(n(g,p),p=_c(m,g.mode,_),p.return=g,g=p),o(g)):n(g,p)}return I}var $i=jv(!0),zv=jv(!1),Mo={},sn=mr(Mo),lo=mr(Mo),uo=mr(Mo);function Nr(t){if(t===Mo)throw Error(b(174));return t}function nf(t,e){switch(le(uo,e),le(lo,t),le(sn,Mo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lh(e,t)}de(sn),le(sn,e)}function Ui(){de(sn),de(lo),de(uo)}function qv(t){Nr(uo.current);var e=Nr(sn.current),n=lh(e,t.type);e!==n&&(le(lo,t),le(sn,n))}function rf(t){lo.current===t&&(de(sn),de(lo))}var ge=mr(0);function wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gc=[];function sf(){for(var t=0;t<gc.length;t++)gc[t]._workInProgressVersionPrimary=null;gc.length=0}var za=Ln.ReactCurrentDispatcher,yc=Ln.ReactCurrentBatchConfig,Fr=0,ye=null,De=null,$e=null,El=!1,Vs=!1,co=0,kk=0;function We(){throw Error(b(321))}function of(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gt(t[n],e[n]))return!1;return!0}function af(t,e,n,r,i,s){if(Fr=s,ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,za.current=t===null||t.memoizedState===null?Nk:Ak,t=n(r,i),Vs){s=0;do{if(Vs=!1,co=0,25<=s)throw Error(b(301));s+=1,$e=De=null,e.updateQueue=null,za.current=Rk,t=n(r,i)}while(Vs)}if(za.current=Sl,e=De!==null&&De.next!==null,Fr=0,$e=De=ye=null,El=!1,e)throw Error(b(300));return t}function lf(){var t=co!==0;return co=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?ye.memoizedState=$e=t:$e=$e.next=t,$e}function $t(){if(De===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=$e===null?ye.memoizedState:$e.next;if(e!==null)$e=e,De=t;else{if(t===null)throw Error(b(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},$e===null?ye.memoizedState=$e=t:$e=$e.next=t}return $e}function ho(t,e){return typeof e=="function"?e(t):e}function vc(t){var e=$t(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Fr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ye.lanes|=c,Vr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Gt(r,e.memoizedState)||(mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ye.lanes|=s,Vr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wc(t){var e=$t(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Gt(s,e.memoizedState)||(mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Hv(){}function Kv(t,e){var n=ye,r=$t(),i=e(),s=!Gt(r.memoizedState,i);if(s&&(r.memoizedState=i,mt=!0),r=r.queue,uf(Qv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,fo(9,Gv.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(b(349));Fr&30||Wv(n,e,i)}return i}function Wv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gv(t,e,n,r){e.value=n,e.getSnapshot=r,Yv(e)&&Xv(t)}function Qv(t,e,n){return n(function(){Yv(e)&&Xv(t)})}function Yv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gt(t,n)}catch{return!0}}function Xv(t){var e=Cn(t,1);e!==null&&Kt(e,t,1,-1)}function Rm(t){var e=Zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:t},e.queue=t,t=t.dispatch=Ck.bind(null,ye,t),[e.memoizedState,t]}function fo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Jv(){return $t().memoizedState}function qa(t,e,n,r){var i=Zt();ye.flags|=t,i.memoizedState=fo(1|e,n,void 0,r===void 0?null:r)}function iu(t,e,n,r){var i=$t();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&of(r,o.deps)){i.memoizedState=fo(e,n,s,r);return}}ye.flags|=t,i.memoizedState=fo(1|e,n,s,r)}function Dm(t,e){return qa(8390656,8,t,e)}function uf(t,e){return iu(2048,8,t,e)}function Zv(t,e){return iu(4,2,t,e)}function ew(t,e){return iu(4,4,t,e)}function tw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nw(t,e,n){return n=n!=null?n.concat([t]):null,iu(4,4,tw.bind(null,e,t),n)}function cf(){}function rw(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&of(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function iw(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&of(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function sw(t,e,n){return Fr&21?(Gt(n,e)||(n=lv(),ye.lanes|=n,Vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mt=!0),t.memoizedState=n)}function Tk(t,e){var n=se;se=n!==0&&4>n?n:4,t(!0);var r=yc.transition;yc.transition={};try{t(!1),e()}finally{se=n,yc.transition=r}}function ow(){return $t().memoizedState}function Ik(t,e,n){var r=nr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},aw(t))lw(e,n);else if(n=Uv(t,e,n,r),n!==null){var i=ut();Kt(n,t,r,i),uw(n,e,r)}}function Ck(t,e,n){var r=nr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(aw(t))lw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Gt(a,o)){var l=e.interleaved;l===null?(i.next=i,ef(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Uv(t,e,i,r),n!==null&&(i=ut(),Kt(n,t,r,i),uw(n,e,r))}}function aw(t){var e=t.alternate;return t===ye||e!==null&&e===ye}function lw(t,e){Vs=El=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function uw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vd(t,n)}}var Sl={readContext:Mt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},Nk={readContext:Mt,useCallback:function(t,e){return Zt().memoizedState=[t,e===void 0?null:e],t},useContext:Mt,useEffect:Dm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,qa(4194308,4,tw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return qa(4194308,4,t,e)},useInsertionEffect:function(t,e){return qa(4,2,t,e)},useMemo:function(t,e){var n=Zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ik.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var e=Zt();return t={current:t},e.memoizedState=t},useState:Rm,useDebugValue:cf,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=Rm(!1),e=t[0];return t=Tk.bind(null,t[1]),Zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ye,i=Zt();if(fe){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),Ue===null)throw Error(b(349));Fr&30||Wv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Dm(Qv.bind(null,r,s,t),[t]),r.flags|=2048,fo(9,Gv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Zt(),e=Ue.identifierPrefix;if(fe){var n=yn,r=gn;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ak={readContext:Mt,useCallback:rw,useContext:Mt,useEffect:uf,useImperativeHandle:nw,useInsertionEffect:Zv,useLayoutEffect:ew,useMemo:iw,useReducer:vc,useRef:Jv,useState:function(){return vc(ho)},useDebugValue:cf,useDeferredValue:function(t){var e=$t();return sw(e,De.memoizedState,t)},useTransition:function(){var t=vc(ho)[0],e=$t().memoizedState;return[t,e]},useMutableSource:Hv,useSyncExternalStore:Kv,useId:ow,unstable_isNewReconciler:!1},Rk={readContext:Mt,useCallback:rw,useContext:Mt,useEffect:uf,useImperativeHandle:nw,useInsertionEffect:Zv,useLayoutEffect:ew,useMemo:iw,useReducer:wc,useRef:Jv,useState:function(){return wc(ho)},useDebugValue:cf,useDeferredValue:function(t){var e=$t();return De===null?e.memoizedState=t:sw(e,De.memoizedState,t)},useTransition:function(){var t=wc(ho)[0],e=$t().memoizedState;return[t,e]},useMutableSource:Hv,useSyncExternalStore:Kv,useId:ow,unstable_isNewReconciler:!1};function Fi(t,e){try{var n="",r=e;do n+=r_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ph(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Dk=typeof WeakMap=="function"?WeakMap:Map;function cw(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){kl||(kl=!0,Bh=r),Ph(t,e)},n}function hw(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ph(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ph(t,e),typeof r!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Dk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=qk.bind(null,t,e,n),e.then(t,t))}function bm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sn(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var Pk=Ln.ReactCurrentOwner,mt=!1;function ot(t,e,n,r){e.child=t===null?zv(e,null,n,r):$i(e,t.child,n,r)}function Lm(t,e,n,r,i){n=n.render;var s=e.ref;return Ni(e,i),r=af(t,e,n,r,s,i),n=lf(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nn(t,e,i)):(fe&&n&&Gd(e),e.flags|=1,ot(t,e,r,i),e.child)}function Om(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!vf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dw(t,e,s,r,i)):(t=Ga(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:io,n(o,r)&&t.ref===e.ref)return Nn(t,e,i)}return e.flags|=1,t=rr(s,r),t.ref=e.ref,t.return=e,e.child=t}function dw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(io(s,r)&&t.ref===e.ref)if(mt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(mt=!0);else return e.lanes=t.lanes,Nn(t,e,i)}return bh(t,e,n,r,i)}function fw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Ei,Et),Et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,le(Ei,Et),Et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,le(Ei,Et),Et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,le(Ei,Et),Et|=r;return ot(t,e,i,n),e.child}function pw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bh(t,e,n,r,i){var s=yt(n)?$r:nt.current;return s=Oi(e,s),Ni(e,i),n=af(t,e,n,r,s,i),r=lf(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nn(t,e,i)):(fe&&r&&Gd(e),e.flags|=1,ot(t,e,n,i),e.child)}function Mm(t,e,n,r,i){if(yt(n)){var s=!0;fl(e)}else s=!1;if(Ni(e,i),e.stateNode===null)Ha(t,e),Bv(e,n,r),Dh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Mt(u):(u=yt(n)?$r:nt.current,u=Oi(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Nm(e,o,r,u),Fn=!1;var f=e.memoizedState;o.state=f,vl(e,r,o,i),l=e.memoizedState,a!==r||f!==l||gt.current||Fn?(typeof c=="function"&&(Rh(e,n,c,r),l=e.memoizedState),(a=Fn||Cm(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Fv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:jt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Mt(l):(l=yt(n)?$r:nt.current,l=Oi(e,l));var w=n.getDerivedStateFromProps;(c=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Nm(e,o,r,l),Fn=!1,f=e.memoizedState,o.state=f,vl(e,r,o,i);var S=e.memoizedState;a!==d||f!==S||gt.current||Fn?(typeof w=="function"&&(Rh(e,n,w,r),S=e.memoizedState),(u=Fn||Cm(e,n,u,r,f,S,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return xh(t,e,n,r,s,i)}function xh(t,e,n,r,i,s){pw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Sm(e,n,!1),Nn(t,e,s);r=e.stateNode,Pk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=$i(e,t.child,null,s),e.child=$i(e,null,a,s)):ot(t,e,a,s),e.memoizedState=r.state,i&&Sm(e,n,!0),e.child}function mw(t){var e=t.stateNode;e.pendingContext?Em(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Em(t,e.context,!1),nf(t,e.containerInfo)}function $m(t,e,n,r,i){return Mi(),Yd(i),e.flags|=256,ot(t,e,n,r),e.child}var Lh={dehydrated:null,treeContext:null,retryLane:0};function Oh(t){return{baseLanes:t,cachePool:null,transitions:null}}function gw(t,e,n){var r=e.pendingProps,i=ge.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),le(ge,i&1),t===null)return Nh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=au(o,r,0,null),t=br(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Oh(n),e.memoizedState=Lh,t):hf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return bk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=rr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=rr(a,s):(s=br(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Oh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lh,r}return s=t.child,t=s.sibling,r=rr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function hf(t,e){return e=au({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _a(t,e,n,r){return r!==null&&Yd(r),$i(e,t.child,null,n),t=hf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ec(Error(b(422))),_a(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=au({mode:"visible",children:r.children},i,0,null),s=br(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&$i(e,t.child,null,o),e.child.memoizedState=Oh(o),e.memoizedState=Lh,s);if(!(e.mode&1))return _a(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(b(419)),r=Ec(s,r,void 0),_a(t,e,o,r)}if(a=(o&t.childLanes)!==0,mt||a){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Cn(t,i),Kt(r,t,i,-1))}return yf(),r=Ec(Error(b(421))),_a(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Hk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,_t=Zn(i.nextSibling),It=e,fe=!0,qt=null,t!==null&&(Pt[bt++]=gn,Pt[bt++]=yn,Pt[bt++]=Ur,gn=t.id,yn=t.overflow,Ur=e),e=hf(e,r.children),e.flags|=4096,e)}function Um(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ah(t.return,e,n)}function Sc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function yw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ot(t,e,r.children,n),r=ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Um(t,n,e);else if(t.tag===19)Um(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(le(ge,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&wl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&wl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sc(e,!0,n,null,s);break;case"together":Sc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ha(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xk(t,e,n){switch(e.tag){case 3:mw(e),Mi();break;case 5:qv(e);break;case 1:yt(e.type)&&fl(e);break;case 4:nf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;le(gl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(le(ge,ge.current&1),e.flags|=128,null):n&e.child.childLanes?gw(t,e,n):(le(ge,ge.current&1),t=Nn(t,e,n),t!==null?t.sibling:null);le(ge,ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return yw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(ge,ge.current),r)break;return null;case 22:case 23:return e.lanes=0,fw(t,e,n)}return Nn(t,e,n)}var vw,Mh,ww,Ew;vw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mh=function(){};ww=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Nr(sn.current);var s=null;switch(n){case"input":i=ih(t,i),r=ih(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=ah(t,i),r=ah(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hl)}uh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ce("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ew=function(t,e,n,r){n!==r&&(e.flags|=4)};function ws(t,e){if(!fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Lk(t,e,n){var r=e.pendingProps;switch(Qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(e),null;case 1:return yt(e.type)&&dl(),Ge(e),null;case 3:return r=e.stateNode,Ui(),de(gt),de(nt),sf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ea(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qt!==null&&(qh(qt),qt=null))),Mh(t,e),Ge(e),null;case 5:rf(e);var i=Nr(uo.current);if(n=e.type,t!==null&&e.stateNode!=null)ww(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return Ge(e),null}if(t=Nr(sn.current),Ea(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[en]=e,r[ao]=s,t=(e.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<As.length;i++)ce(As[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":Wp(r,s),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ce("invalid",r);break;case"textarea":Qp(r,s),ce("invalid",r)}uh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&wa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&wa(r.textContent,a,t),i=["children",""+a]):Xs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ce("scroll",r)}switch(n){case"input":ha(r),Gp(r,s,!0);break;case"textarea":ha(r),Yp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[en]=e,t[ao]=r,vw(t,e,!1,!1),e.stateNode=t;e:{switch(o=ch(n,r),n){case"dialog":ce("cancel",t),ce("close",t),i=r;break;case"iframe":case"object":case"embed":ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<As.length;i++)ce(As[i],t);i=r;break;case"source":ce("error",t),i=r;break;case"img":case"image":case"link":ce("error",t),ce("load",t),i=r;break;case"details":ce("toggle",t),i=r;break;case"input":Wp(t,r),i=ih(t,r),ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),ce("invalid",t);break;case"textarea":Qp(t,r),i=ah(t,r),ce("invalid",t);break;default:i=r}uh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Yy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gy(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Js(t,l):typeof l=="number"&&Js(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ce("scroll",t):l!=null&&Ld(t,s,l,o))}switch(n){case"input":ha(t),Gp(t,r,!1);break;case"textarea":ha(t),Yp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+lr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ki(t,!!r.multiple,s,!1):r.defaultValue!=null&&ki(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=hl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ge(e),null;case 6:if(t&&e.stateNode!=null)Ew(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Nr(uo.current),Nr(sn.current),Ea(e)){if(r=e.stateNode,n=e.memoizedProps,r[en]=e,(s=r.nodeValue!==n)&&(t=It,t!==null))switch(t.tag){case 3:wa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[en]=e,e.stateNode=r}return Ge(e),null;case 13:if(de(ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(fe&&_t!==null&&e.mode&1&&!(e.flags&128))$v(),Mi(),e.flags|=98560,s=!1;else if(s=Ea(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[en]=e}else Mi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ge(e),s=!1}else qt!==null&&(qh(qt),qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ge.current&1?Pe===0&&(Pe=3):yf())),e.updateQueue!==null&&(e.flags|=4),Ge(e),null);case 4:return Ui(),Mh(t,e),t===null&&so(e.stateNode.containerInfo),Ge(e),null;case 10:return Zd(e.type._context),Ge(e),null;case 17:return yt(e.type)&&dl(),Ge(e),null;case 19:if(de(ge),s=e.memoizedState,s===null)return Ge(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ws(s,!1);else{if(Pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wl(t),o!==null){for(e.flags|=128,ws(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return le(ge,ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>Vi&&(e.flags|=128,r=!0,ws(s,!1),e.lanes=4194304)}else{if(!r)if(t=wl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!fe)return Ge(e),null}else 2*Te()-s.renderingStartTime>Vi&&n!==1073741824&&(e.flags|=128,r=!0,ws(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=ge.current,le(ge,r?n&1|2:n&1),e):(Ge(e),null);case 22:case 23:return gf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Et&1073741824&&(Ge(e),e.subtreeFlags&6&&(e.flags|=8192)):Ge(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function Ok(t,e){switch(Qd(e),e.tag){case 1:return yt(e.type)&&dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ui(),de(gt),de(nt),sf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rf(e),null;case 13:if(de(ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));Mi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(ge),null;case 4:return Ui(),null;case 10:return Zd(e.type._context),null;case 22:case 23:return gf(),null;case 24:return null;default:return null}}var ka=!1,Xe=!1,Mk=typeof WeakSet=="function"?WeakSet:Set,M=null;function wi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(t,e,r)}else n.current=null}function $h(t,e,n){try{n()}catch(r){we(t,e,r)}}var Fm=!1;function $k(t,e){if(Eh=ll,t=Tv(),Wd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var w;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(w=d.firstChild)!==null;)f=d,d=w;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(w=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=w}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sh={focusedElem:t,selectionRange:n},ll=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var y=S.memoizedProps,I=S.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:jt(e.type,y),I);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(_){we(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return S=Fm,Fm=!1,S}function Bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&$h(e,n,s)}i=i.next}while(i!==r)}}function su(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Uh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Sw(t){var e=t.alternate;e!==null&&(t.alternate=null,Sw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[en],delete e[ao],delete e[Th],delete e[wk],delete e[Ek])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _w(t){return t.tag===5||t.tag===3||t.tag===4}function Vm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_w(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hl));else if(r!==4&&(t=t.child,t!==null))for(Fh(t,e,n),t=t.sibling;t!==null;)Fh(t,e,n),t=t.sibling}function Vh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Vh(t,e,n),t=t.sibling;t!==null;)Vh(t,e,n),t=t.sibling}var Ve=null,zt=!1;function Mn(t,e,n){for(n=n.child;n!==null;)kw(t,e,n),n=n.sibling}function kw(t,e,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Xl,n)}catch{}switch(n.tag){case 5:Xe||wi(n,e);case 6:var r=Ve,i=zt;Ve=null,Mn(t,e,n),Ve=r,zt=i,Ve!==null&&(zt?(t=Ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(zt?(t=Ve,n=n.stateNode,t.nodeType===8?pc(t.parentNode,n):t.nodeType===1&&pc(t,n),no(t)):pc(Ve,n.stateNode));break;case 4:r=Ve,i=zt,Ve=n.stateNode.containerInfo,zt=!0,Mn(t,e,n),Ve=r,zt=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$h(n,e,o),i=i.next}while(i!==r)}Mn(t,e,n);break;case 1:if(!Xe&&(wi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){we(n,e,a)}Mn(t,e,n);break;case 21:Mn(t,e,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,Mn(t,e,n),Xe=r):Mn(t,e,n);break;default:Mn(t,e,n)}}function Bm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Mk),e.forEach(function(r){var i=Kk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ve=a.stateNode,zt=!1;break e;case 3:Ve=a.stateNode.containerInfo,zt=!0;break e;case 4:Ve=a.stateNode.containerInfo,zt=!0;break e}a=a.return}if(Ve===null)throw Error(b(160));kw(s,o,i),Ve=null,zt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){we(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tw(e,t),e=e.sibling}function Tw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bt(e,t),Jt(t),r&4){try{Bs(3,t,t.return),su(3,t)}catch(y){we(t,t.return,y)}try{Bs(5,t,t.return)}catch(y){we(t,t.return,y)}}break;case 1:Bt(e,t),Jt(t),r&512&&n!==null&&wi(n,n.return);break;case 5:if(Bt(e,t),Jt(t),r&512&&n!==null&&wi(n,n.return),t.flags&32){var i=t.stateNode;try{Js(i,"")}catch(y){we(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Hy(i,s),ch(a,o);var u=ch(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Yy(i,d):c==="dangerouslySetInnerHTML"?Gy(i,d):c==="children"?Js(i,d):Ld(i,c,d,u)}switch(a){case"input":sh(i,s);break;case"textarea":Ky(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?ki(i,!!s.multiple,w,!1):f!==!!s.multiple&&(s.defaultValue!=null?ki(i,!!s.multiple,s.defaultValue,!0):ki(i,!!s.multiple,s.multiple?[]:"",!1))}i[ao]=s}catch(y){we(t,t.return,y)}}break;case 6:if(Bt(e,t),Jt(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){we(t,t.return,y)}}break;case 3:if(Bt(e,t),Jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{no(e.containerInfo)}catch(y){we(t,t.return,y)}break;case 4:Bt(e,t),Jt(t);break;case 13:Bt(e,t),Jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(pf=Te())),r&4&&Bm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Xe=(u=Xe)||c,Bt(e,t),Xe=u):Bt(e,t),Jt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(M=t,c=t.child;c!==null;){for(d=M=c;M!==null;){switch(f=M,w=f.child,f.tag){case 0:case 11:case 14:case 15:Bs(4,f,f.return);break;case 1:wi(f,f.return);var S=f.stateNode;if(typeof S.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(y){we(r,n,y)}}break;case 5:wi(f,f.return);break;case 22:if(f.memoizedState!==null){zm(d);continue}}w!==null?(w.return=f,M=w):zm(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Qy("display",o))}catch(y){we(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){we(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Bt(e,t),Jt(t),r&4&&Bm(t);break;case 21:break;default:Bt(e,t),Jt(t)}}function Jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_w(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Js(i,""),r.flags&=-33);var s=Vm(t);Vh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Vm(t);Fh(t,a,o);break;default:throw Error(b(161))}}catch(l){we(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Uk(t,e,n){M=t,Iw(t)}function Iw(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ka;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Xe;a=ka;var u=Xe;if(ka=o,(Xe=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?qm(i):l!==null?(l.return=o,M=l):qm(i);for(;s!==null;)M=s,Iw(s),s=s.sibling;M=i,ka=a,Xe=u}jm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):jm(t)}}function jm(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xe||su(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Im(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Im(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&no(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Xe||e.flags&512&&Uh(e)}catch(f){we(e,e.return,f)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function zm(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function qm(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{su(4,e)}catch(l){we(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){we(e,i,l)}}var s=e.return;try{Uh(e)}catch(l){we(e,s,l)}break;case 5:var o=e.return;try{Uh(e)}catch(l){we(e,o,l)}}}catch(l){we(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var Fk=Math.ceil,_l=Ln.ReactCurrentDispatcher,df=Ln.ReactCurrentOwner,Ot=Ln.ReactCurrentBatchConfig,te=0,Ue=null,Ae=null,je=0,Et=0,Ei=mr(0),Pe=0,po=null,Vr=0,ou=0,ff=0,js=null,ft=null,pf=0,Vi=1/0,pn=null,kl=!1,Bh=null,tr=null,Ta=!1,Gn=null,Tl=0,zs=0,jh=null,Ka=-1,Wa=0;function ut(){return te&6?Te():Ka!==-1?Ka:Ka=Te()}function nr(t){return t.mode&1?te&2&&je!==0?je&-je:_k.transition!==null?(Wa===0&&(Wa=lv()),Wa):(t=se,t!==0||(t=window.event,t=t===void 0?16:mv(t.type)),t):1}function Kt(t,e,n,r){if(50<zs)throw zs=0,jh=null,Error(b(185));xo(t,n,r),(!(te&2)||t!==Ue)&&(t===Ue&&(!(te&2)&&(ou|=n),Pe===4&&Bn(t,je)),vt(t,r),n===1&&te===0&&!(e.mode&1)&&(Vi=Te()+500,nu&&gr()))}function vt(t,e){var n=t.callbackNode;__(t,e);var r=al(t,t===Ue?je:0);if(r===0)n!==null&&Zp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Zp(n),e===1)t.tag===0?Sk(Hm.bind(null,t)):Lv(Hm.bind(null,t)),yk(function(){!(te&6)&&gr()}),n=null;else{switch(uv(r)){case 1:n=Fd;break;case 4:n=ov;break;case 16:n=ol;break;case 536870912:n=av;break;default:n=ol}n=xw(n,Cw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cw(t,e){if(Ka=-1,Wa=0,te&6)throw Error(b(327));var n=t.callbackNode;if(Ai()&&t.callbackNode!==n)return null;var r=al(t,t===Ue?je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Il(t,r);else{e=r;var i=te;te|=2;var s=Aw();(Ue!==t||je!==e)&&(pn=null,Vi=Te()+500,Pr(t,e));do try{jk();break}catch(a){Nw(t,a)}while(1);Jd(),_l.current=s,te=i,Ae!==null?e=0:(Ue=null,je=0,e=Pe)}if(e!==0){if(e===2&&(i=mh(t),i!==0&&(r=i,e=zh(t,i))),e===1)throw n=po,Pr(t,0),Bn(t,r),vt(t,Te()),n;if(e===6)Bn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Vk(i)&&(e=Il(t,r),e===2&&(s=mh(t),s!==0&&(r=s,e=zh(t,s))),e===1))throw n=po,Pr(t,0),Bn(t,r),vt(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:_r(t,ft,pn);break;case 3:if(Bn(t,r),(r&130023424)===r&&(e=pf+500-Te(),10<e)){if(al(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=kh(_r.bind(null,t,ft,pn),e);break}_r(t,ft,pn);break;case 4:if(Bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ht(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fk(r/1960))-r,10<r){t.timeoutHandle=kh(_r.bind(null,t,ft,pn),r);break}_r(t,ft,pn);break;case 5:_r(t,ft,pn);break;default:throw Error(b(329))}}}return vt(t,Te()),t.callbackNode===n?Cw.bind(null,t):null}function zh(t,e){var n=js;return t.current.memoizedState.isDehydrated&&(Pr(t,e).flags|=256),t=Il(t,e),t!==2&&(e=ft,ft=n,e!==null&&qh(e)),t}function qh(t){ft===null?ft=t:ft.push.apply(ft,t)}function Vk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Gt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bn(t,e){for(e&=~ff,e&=~ou,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ht(e),r=1<<n;t[n]=-1,e&=~r}}function Hm(t){if(te&6)throw Error(b(327));Ai();var e=al(t,0);if(!(e&1))return vt(t,Te()),null;var n=Il(t,e);if(t.tag!==0&&n===2){var r=mh(t);r!==0&&(e=r,n=zh(t,r))}if(n===1)throw n=po,Pr(t,0),Bn(t,e),vt(t,Te()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,ft,pn),vt(t,Te()),null}function mf(t,e){var n=te;te|=1;try{return t(e)}finally{te=n,te===0&&(Vi=Te()+500,nu&&gr())}}function Br(t){Gn!==null&&Gn.tag===0&&!(te&6)&&Ai();var e=te;te|=1;var n=Ot.transition,r=se;try{if(Ot.transition=null,se=1,t)return t()}finally{se=r,Ot.transition=n,te=e,!(te&6)&&gr()}}function gf(){Et=Ei.current,de(Ei)}function Pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gk(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(Qd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:Ui(),de(gt),de(nt),sf();break;case 5:rf(r);break;case 4:Ui();break;case 13:de(ge);break;case 19:de(ge);break;case 10:Zd(r.type._context);break;case 22:case 23:gf()}n=n.return}if(Ue=t,Ae=t=rr(t.current,null),je=Et=e,Pe=0,po=null,ff=ou=Vr=0,ft=js=null,Cr!==null){for(e=0;e<Cr.length;e++)if(n=Cr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Cr=null}return t}function Nw(t,e){do{var n=Ae;try{if(Jd(),za.current=Sl,El){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}El=!1}if(Fr=0,$e=De=ye=null,Vs=!1,co=0,df.current=null,n===null||n.return===null){Pe=1,po=e,Ae=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=je,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var w=bm(o);if(w!==null){w.flags&=-257,xm(w,o,a,s,e),w.mode&1&&Pm(s,u,e),e=w,l=u;var S=e.updateQueue;if(S===null){var y=new Set;y.add(l),e.updateQueue=y}else S.add(l);break e}else{if(!(e&1)){Pm(s,u,e),yf();break e}l=Error(b(426))}}else if(fe&&a.mode&1){var I=bm(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),xm(I,o,a,s,e),Yd(Fi(l,a));break e}}s=l=Fi(l,a),Pe!==4&&(Pe=2),js===null?js=[s]:js.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=cw(s,l,e);Tm(s,g);break e;case 1:a=l;var p=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(tr===null||!tr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=hw(s,a,e);Tm(s,_);break e}}s=s.return}while(s!==null)}Dw(n)}catch(R){e=R,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function Aw(){var t=_l.current;return _l.current=Sl,t===null?Sl:t}function yf(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Ue===null||!(Vr&268435455)&&!(ou&268435455)||Bn(Ue,je)}function Il(t,e){var n=te;te|=2;var r=Aw();(Ue!==t||je!==e)&&(pn=null,Pr(t,e));do try{Bk();break}catch(i){Nw(t,i)}while(1);if(Jd(),te=n,_l.current=r,Ae!==null)throw Error(b(261));return Ue=null,je=0,Pe}function Bk(){for(;Ae!==null;)Rw(Ae)}function jk(){for(;Ae!==null&&!f_();)Rw(Ae)}function Rw(t){var e=bw(t.alternate,t,Et);t.memoizedProps=t.pendingProps,e===null?Dw(t):Ae=e,df.current=null}function Dw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ok(n,e),n!==null){n.flags&=32767,Ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pe=6,Ae=null;return}}else if(n=Lk(n,e,Et),n!==null){Ae=n;return}if(e=e.sibling,e!==null){Ae=e;return}Ae=e=t}while(e!==null);Pe===0&&(Pe=5)}function _r(t,e,n){var r=se,i=Ot.transition;try{Ot.transition=null,se=1,zk(t,e,n,r)}finally{Ot.transition=i,se=r}return null}function zk(t,e,n,r){do Ai();while(Gn!==null);if(te&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(k_(t,s),t===Ue&&(Ae=Ue=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ta||(Ta=!0,xw(ol,function(){return Ai(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ot.transition,Ot.transition=null;var o=se;se=1;var a=te;te|=4,df.current=null,$k(t,n),Tw(n,t),uk(Sh),ll=!!Eh,Sh=Eh=null,t.current=n,Uk(n),p_(),te=a,se=o,Ot.transition=s}else t.current=n;if(Ta&&(Ta=!1,Gn=t,Tl=i),s=t.pendingLanes,s===0&&(tr=null),y_(n.stateNode),vt(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(kl)throw kl=!1,t=Bh,Bh=null,t;return Tl&1&&t.tag!==0&&Ai(),s=t.pendingLanes,s&1?t===jh?zs++:(zs=0,jh=t):zs=0,gr(),null}function Ai(){if(Gn!==null){var t=uv(Tl),e=Ot.transition,n=se;try{if(Ot.transition=null,se=16>t?16:t,Gn===null)var r=!1;else{if(t=Gn,Gn=null,Tl=0,te&6)throw Error(b(331));var i=te;for(te|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:Bs(8,c,s)}var d=c.child;if(d!==null)d.return=c,M=d;else for(;M!==null;){c=M;var f=c.sibling,w=c.return;if(Sw(c),c===u){M=null;break}if(f!==null){f.return=w,M=f;break}M=w}}}var S=s.alternate;if(S!==null){var y=S.child;if(y!==null){S.child=null;do{var I=y.sibling;y.sibling=null,y=I}while(y!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bs(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,M=g;break e}M=s.return}}var p=t.current;for(M=p;M!==null;){o=M;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,M=m;else e:for(o=p;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:su(9,a)}}catch(R){we(a,a.return,R)}if(a===o){M=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,M=_;break e}M=a.return}}if(te=i,gr(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Xl,t)}catch{}r=!0}return r}finally{se=n,Ot.transition=e}}return!1}function Km(t,e,n){e=Fi(n,e),e=cw(t,e,1),t=er(t,e,1),e=ut(),t!==null&&(xo(t,1,e),vt(t,e))}function we(t,e,n){if(t.tag===3)Km(t,t,n);else for(;e!==null;){if(e.tag===3){Km(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tr===null||!tr.has(r))){t=Fi(n,t),t=hw(e,t,1),e=er(e,t,1),t=ut(),e!==null&&(xo(e,1,t),vt(e,t));break}}e=e.return}}function qk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(je&n)===n&&(Pe===4||Pe===3&&(je&130023424)===je&&500>Te()-pf?Pr(t,0):ff|=n),vt(t,e)}function Pw(t,e){e===0&&(t.mode&1?(e=pa,pa<<=1,!(pa&130023424)&&(pa=4194304)):e=1);var n=ut();t=Cn(t,e),t!==null&&(xo(t,e,n),vt(t,n))}function Hk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Pw(t,n)}function Kk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),Pw(t,n)}var bw;bw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gt.current)mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mt=!1,xk(t,e,n);mt=!!(t.flags&131072)}else mt=!1,fe&&e.flags&1048576&&Ov(e,ml,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ha(t,e),t=e.pendingProps;var i=Oi(e,nt.current);Ni(e,n),i=af(null,e,r,t,i,n);var s=lf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yt(r)?(s=!0,fl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tf(e),i.updater=ru,e.stateNode=i,i._reactInternals=e,Dh(e,r,t,n),e=xh(null,e,r,!0,s,n)):(e.tag=0,fe&&s&&Gd(e),ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ha(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Gk(r),t=jt(r,t),i){case 0:e=bh(null,e,r,t,n);break e;case 1:e=Mm(null,e,r,t,n);break e;case 11:e=Lm(null,e,r,t,n);break e;case 14:e=Om(null,e,r,jt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),bh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Mm(t,e,r,i,n);case 3:e:{if(mw(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Fv(t,e),vl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Fi(Error(b(423)),e),e=$m(t,e,r,n,i);break e}else if(r!==i){i=Fi(Error(b(424)),e),e=$m(t,e,r,n,i);break e}else for(_t=Zn(e.stateNode.containerInfo.firstChild),It=e,fe=!0,qt=null,n=zv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mi(),r===i){e=Nn(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return qv(e),t===null&&Nh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,_h(r,i)?o=null:s!==null&&_h(r,s)&&(e.flags|=32),pw(t,e),ot(t,e,o,n),e.child;case 6:return t===null&&Nh(e),null;case 13:return gw(t,e,n);case 4:return nf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$i(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Lm(t,e,r,i,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,le(gl,r._currentValue),r._currentValue=o,s!==null)if(Gt(s.value,o)){if(s.children===i.children&&!gt.current){e=Nn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Sn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ah(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ah(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ni(e,n),i=Mt(i),r=r(i),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,i=jt(r,e.pendingProps),i=jt(r.type,i),Om(t,e,r,i,n);case 15:return dw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Ha(t,e),e.tag=1,yt(r)?(t=!0,fl(e)):t=!1,Ni(e,n),Bv(e,r,i),Dh(e,r,i,n),xh(null,e,r,!0,t,n);case 19:return yw(t,e,n);case 22:return fw(t,e,n)}throw Error(b(156,e.tag))};function xw(t,e){return sv(t,e)}function Wk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new Wk(t,e,n,r)}function vf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gk(t){if(typeof t=="function")return vf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Md)return 11;if(t===$d)return 14}return 2}function rr(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ga(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")vf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ci:return br(n.children,i,s,e);case Od:o=8,i|=8;break;case eh:return t=Lt(12,n,e,i|2),t.elementType=eh,t.lanes=s,t;case th:return t=Lt(13,n,e,i),t.elementType=th,t.lanes=s,t;case nh:return t=Lt(19,n,e,i),t.elementType=nh,t.lanes=s,t;case jy:return au(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vy:o=10;break e;case By:o=9;break e;case Md:o=11;break e;case $d:o=14;break e;case Un:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function br(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function au(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=jy,t.lanes=n,t.stateNode={isHidden:!1},t}function _c(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function kc(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Qk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rc(0),this.expirationTimes=rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wf(t,e,n,r,i,s,o,a,l){return t=new Qk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tf(s),t}function Yk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ui,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Lw(t){if(!t)return ur;t=t._reactInternals;e:{if(Xr(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(yt(n))return xv(t,n,e)}return e}function Ow(t,e,n,r,i,s,o,a,l){return t=wf(n,r,!0,t,i,s,o,a,l),t.context=Lw(null),n=t.current,r=ut(),i=nr(n),s=Sn(r,i),s.callback=e??null,er(n,s,i),t.current.lanes=i,xo(t,i,r),vt(t,r),t}function lu(t,e,n,r){var i=e.current,s=ut(),o=nr(i);return n=Lw(n),e.context===null?e.context=n:e.pendingContext=n,e=Sn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=er(i,e,o),t!==null&&(Kt(t,i,o,s),ja(t,i,o)),o}function Cl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ef(t,e){Wm(t,e),(t=t.alternate)&&Wm(t,e)}function Xk(){return null}var Mw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sf(t){this._internalRoot=t}uu.prototype.render=Sf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));lu(t,e,null,null)};uu.prototype.unmount=Sf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){lu(null,t,null,null)}),e[In]=null}};function uu(t){this._internalRoot=t}uu.prototype.unstable_scheduleHydration=function(t){if(t){var e=dv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vn.length&&e!==0&&e<Vn[n].priority;n++);Vn.splice(n,0,t),n===0&&pv(t)}};function _f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gm(){}function Jk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Cl(o);s.call(u)}}var o=Ow(e,r,t,0,null,!1,!1,"",Gm);return t._reactRootContainer=o,t[In]=o.current,so(t.nodeType===8?t.parentNode:t),Br(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Cl(l);a.call(u)}}var l=wf(t,0,!1,null,null,!1,!1,"",Gm);return t._reactRootContainer=l,t[In]=l.current,so(t.nodeType===8?t.parentNode:t),Br(function(){lu(e,l,n,r)}),l}function hu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Cl(o);a.call(l)}}lu(e,o,t,i)}else o=Jk(n,e,t,i,r);return Cl(o)}cv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ns(e.pendingLanes);n!==0&&(Vd(e,n|1),vt(e,Te()),!(te&6)&&(Vi=Te()+500,gr()))}break;case 13:Br(function(){var r=Cn(t,1);if(r!==null){var i=ut();Kt(r,t,1,i)}}),Ef(t,1)}};Bd=function(t){if(t.tag===13){var e=Cn(t,134217728);if(e!==null){var n=ut();Kt(e,t,134217728,n)}Ef(t,134217728)}};hv=function(t){if(t.tag===13){var e=nr(t),n=Cn(t,e);if(n!==null){var r=ut();Kt(n,t,e,r)}Ef(t,e)}};dv=function(){return se};fv=function(t,e){var n=se;try{return se=t,e()}finally{se=n}};dh=function(t,e,n){switch(e){case"input":if(sh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=tu(r);if(!i)throw Error(b(90));qy(r),sh(r,i)}}}break;case"textarea":Ky(t,n);break;case"select":e=n.value,e!=null&&ki(t,!!n.multiple,e,!1)}};Zy=mf;ev=Br;var Zk={usingClientEntryPoint:!1,Events:[Oo,pi,tu,Xy,Jy,mf]},Es={findFiberByHostInstance:Ir,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},eT={bundleType:Es.bundleType,version:Es.version,rendererPackageName:Es.rendererPackageName,rendererConfig:Es.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=rv(t),t===null?null:t.stateNode},findFiberByHostInstance:Es.findFiberByHostInstance||Xk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ia.isDisabled&&Ia.supportsFiber)try{Xl=Ia.inject(eT),rn=Ia}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zk;At.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_f(e))throw Error(b(200));return Yk(t,e,null,n)};At.createRoot=function(t,e){if(!_f(t))throw Error(b(299));var n=!1,r="",i=Mw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wf(t,1,!1,null,null,n,!1,r,i),t[In]=e.current,so(t.nodeType===8?t.parentNode:t),new Sf(e)};At.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=rv(e),t=t===null?null:t.stateNode,t};At.flushSync=function(t){return Br(t)};At.hydrate=function(t,e,n){if(!cu(e))throw Error(b(200));return hu(null,t,e,!0,n)};At.hydrateRoot=function(t,e,n){if(!_f(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Mw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ow(e,null,t,1,n??null,i,!1,s,o),t[In]=e.current,so(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new uu(e)};At.render=function(t,e,n){if(!cu(e))throw Error(b(200));return hu(null,t,e,!1,n)};At.unmountComponentAtNode=function(t){if(!cu(t))throw Error(b(40));return t._reactRootContainer?(Br(function(){hu(null,null,t,!1,function(){t._reactRootContainer=null,t[In]=null})}),!0):!1};At.unstable_batchedUpdates=mf;At.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!cu(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return hu(t,e,n,!1,r)};At.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=At})(XS);var Qm=Xc;Yc.createRoot=Qm.createRoot,Yc.hydrateRoot=Qm.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},mo.apply(this,arguments)}var Qn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qn||(Qn={}));const Ym="popstate";function tT(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Jr(i.location.hash.substr(1));return Hh("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:Nl(s))}function r(i,s){du(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return rT(e,n,r,t)}function be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function du(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function nT(){return Math.random().toString(36).substr(2,8)}function Xm(t,e){return{usr:t.state,key:t.key,idx:e}}function Hh(t,e,n,r){return n===void 0&&(n=null),mo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Jr(e):e,{state:n,key:e&&e.key||r||nT()})}function Nl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Jr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function rT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Qn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(mo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Qn.Pop;let I=c(),g=I==null?null:I-u;u=I,l&&l({action:a,location:y.location,delta:g})}function f(I,g){a=Qn.Push;let p=Hh(y.location,I,g);n&&n(p,I),u=c()+1;let m=Xm(p,u),_=y.createHref(p);try{o.pushState(m,"",_)}catch{i.location.assign(_)}s&&l&&l({action:a,location:y.location,delta:1})}function w(I,g){a=Qn.Replace;let p=Hh(y.location,I,g);n&&n(p,I),u=c();let m=Xm(p,u),_=y.createHref(p);o.replaceState(m,"",_),s&&l&&l({action:a,location:y.location,delta:0})}function S(I){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof I=="string"?I:Nl(I);return be(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let y={get action(){return a},get location(){return t(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ym,d),l=I,()=>{i.removeEventListener(Ym,d),l=null}},createHref(I){return e(i,I)},createURL:S,encodeLocation(I){let g=S(I);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:w,go(I){return o.go(I)}};return y}var Jm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Jm||(Jm={}));function iT(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Jr(e):e,i=kf(r.pathname||"/",n);if(i==null)return null;let s=$w(t);sT(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=pT(s[a],yT(i));return o}function $w(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(be(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ir([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),$w(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:dT(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Uw(s.path))i(s,o,l)}),e}function Uw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Uw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function sT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:fT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const oT=/^:\w+$/,aT=3,lT=2,uT=1,cT=10,hT=-2,Zm=t=>t==="*";function dT(t,e){let n=t.split("/"),r=n.length;return n.some(Zm)&&(r+=hT),e&&(r+=lT),n.filter(i=>!Zm(i)).reduce((i,s)=>i+(oT.test(s)?aT:s===""?uT:cT),r)}function fT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function pT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=mT({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:ir([i,c.pathname]),pathnameBase:ST(ir([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=ir([i,c.pathnameBase]))}return s}function mT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=gT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=vT(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function gT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),du(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function yT(t){try{return decodeURI(t)}catch(e){return du(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function vT(t,e){try{return decodeURIComponent(t)}catch(n){return du(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function kf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function wT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Jr(t):t;return{pathname:n?n.startsWith("/")?n:ET(n,e):e,search:_T(r),hash:kT(i)}}function ET(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Tc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Fw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Vw(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Jr(t):(i=mo({},t),be(!i.pathname||!i.pathname.includes("?"),Tc("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),Tc("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),Tc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=wT(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ir=t=>t.join("/").replace(/\/\/+/g,"/"),ST=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_T=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,kT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function TT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function IT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const CT=typeof Object.is=="function"?Object.is:IT,{useState:NT,useEffect:AT,useLayoutEffect:RT,useDebugValue:DT}=Qc;function PT(t,e,n){const r=e(),[{inst:i},s]=NT({inst:{value:r,getSnapshot:e}});return RT(()=>{i.value=r,i.getSnapshot=e,Ic(i)&&s({inst:i})},[t,r,e]),AT(()=>(Ic(i)&&s({inst:i}),t(()=>{Ic(i)&&s({inst:i})})),[t]),DT(r),r}function Ic(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!CT(n,r)}catch{return!0}}function bT(t,e,n){return e()}const xT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",LT=!xT,OT=LT?bT:PT;"useSyncExternalStore"in Qc&&(t=>t.useSyncExternalStore)(Qc);const Bw=T.createContext(null),jw=T.createContext(null),$o=T.createContext(null),fu=T.createContext(null),es=T.createContext({outlet:null,matches:[]}),zw=T.createContext(null);function Kh(){return Kh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Kh.apply(this,arguments)}function MT(t,e){let{relative:n}=e===void 0?{}:e;Uo()||be(!1);let{basename:r,navigator:i}=T.useContext($o),{hash:s,pathname:o,search:a}=qw(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ir([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Uo(){return T.useContext(fu)!=null}function On(){return Uo()||be(!1),T.useContext(fu).location}function Ft(){Uo()||be(!1);let{basename:t,navigator:e}=T.useContext($o),{matches:n}=T.useContext(es),{pathname:r}=On(),i=JSON.stringify(Fw(n).map(a=>a.pathnameBase)),s=T.useRef(!1);return T.useEffect(()=>{s.current=!0}),T.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=Vw(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:ir([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function qw(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=T.useContext(es),{pathname:i}=On(),s=JSON.stringify(Fw(r).map(o=>o.pathnameBase));return T.useMemo(()=>Vw(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function $T(t,e){Uo()||be(!1);let{navigator:n}=T.useContext($o),r=T.useContext(jw),{matches:i}=T.useContext(es),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=On(),u;if(e){var c;let y=typeof e=="string"?Jr(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||be(!1),u=y}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",w=iT(t,{pathname:f}),S=BT(w&&w.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:ir([a,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:ir([a,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return e&&S?T.createElement(fu.Provider,{value:{location:Kh({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Qn.Pop}},S):S}function UT(){let t=HT(),e=TT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,s)}class FT extends T.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?T.createElement(es.Provider,{value:this.props.routeContext},T.createElement(zw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function VT(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(Bw);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(es.Provider,{value:e},r)}function BT(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||be(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=T.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=T.createElement(UT,null));let c=e.concat(r.slice(0,a+1)),d=()=>{let f=s;return l?f=u:o.route.Component?f=T.createElement(o.route.Component,null):o.route.element&&(f=o.route.element),T.createElement(VT,{match:o,routeContext:{outlet:s,matches:c},children:f})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?T.createElement(FT,{location:n.location,component:u,error:l,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var eg;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(eg||(eg={}));var Al;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Al||(Al={}));function jT(t){let e=T.useContext(jw);return e||be(!1),e}function zT(t){let e=T.useContext(es);return e||be(!1),e}function qT(t){let e=zT(),n=e.matches[e.matches.length-1];return n.route.id||be(!1),n.route.id}function HT(){var t;let e=T.useContext(zw),n=jT(Al.UseRouteError),r=qT(Al.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Dt(t){be(!1)}function KT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Qn.Pop,navigator:s,static:o=!1}=t;Uo()&&be(!1);let a=e.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Jr(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:w="default"}=r,S=T.useMemo(()=>{let y=kf(u,a);return y==null?null:{location:{pathname:y,search:c,hash:d,state:f,key:w},navigationType:i}},[a,u,c,d,f,w,i]);return S==null?null:T.createElement($o.Provider,{value:l},T.createElement(fu.Provider,{children:n,value:S}))}function WT(t){let{children:e,location:n}=t,r=T.useContext(Bw),i=r&&!e?r.router.routes:Wh(e);return $T(i,n)}var tg;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(tg||(tg={}));new Promise(()=>{});function Wh(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;if(r.type===T.Fragment){n.push.apply(n,Wh(r.props.children,e));return}r.type!==Dt&&be(!1),!r.props.index||!r.props.children||be(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Wh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gh(){return Gh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gh.apply(this,arguments)}function GT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function QT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function YT(t,e){return t.button===0&&(!e||e==="_self")&&!QT(t)}const XT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function JT(t){let{basename:e,children:n,window:r}=t,i=T.useRef();i.current==null&&(i.current=tT({window:r,v5Compat:!0}));let s=i.current,[o,a]=T.useState({action:s.action,location:s.location});return T.useLayoutEffect(()=>s.listen(a),[s]),T.createElement(KT,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const ZT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Y=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=GT(e,XT),{basename:f}=T.useContext($o),w,S=!1;if(typeof u=="string"&&eI.test(u)&&(w=u,ZT)){let p=new URL(window.location.href),m=u.startsWith("//")?new URL(p.protocol+u):new URL(u),_=kf(m.pathname,f);m.origin===p.origin&&_!=null?u=_+m.search+m.hash:S=!0}let y=MT(u,{relative:i}),I=tI(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(p){r&&r(p),p.defaultPrevented||I(p)}return T.createElement("a",Gh({},d,{href:w||y,onClick:S||s?r:g,ref:n,target:l}))});var ng;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(ng||(ng={}));var rg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(rg||(rg={}));function tI(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Ft(),l=On(),u=qw(t,{relative:o});return T.useCallback(c=>{if(YT(c,n)){c.preventDefault();let d=r!==void 0?r:Nl(l)===Nl(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Kw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,w=u&63;l||(w=64,o||(f=64)),r.push(n[c],n[d],n[f],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new rI;const f=s<<2|a>>4;if(r.push(f),u!==64){const w=a<<4&240|u>>2;if(r.push(w),d!==64){const S=u<<6&192|d;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iI=function(t){const e=Hw(t);return Kw.encodeByteArray(e,!0)},Rl=function(t){return iI(t).replace(/\./g,"")},Ww=function(t){try{return Kw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=()=>sI().__FIREBASE_DEFAULTS__,aI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ww(t[1]);return e&&JSON.parse(e)},pu=()=>{try{return oI()||aI()||lI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gw=t=>{var e,n;return(n=(e=pu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Qw=t=>{const e=Gw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},uI=()=>{var t;return(t=pu())===null||t===void 0?void 0:t.config},Yw=t=>{var e;return(e=pu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Rl(JSON.stringify(n)),Rl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function dI(){var t;const e=(t=pu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mI(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gI(){try{return typeof indexedDB=="object"}catch{return!1}}function yI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="FirebaseError";class hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vI,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fo.prototype.create)}}class Fo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new hn(i,a,r)}}function wI(t,e){return t.replace(EI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const EI=/\{\$([^}]+)}/g;function SI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ig(s)&&ig(o)){if(!Dl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ig(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Rs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ds(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function _I(t,e){const n=new kI(t,e);return n.subscribe.bind(n)}class kI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Cc),i.error===void 0&&(i.error=Cc),i.complete===void 0&&(i.complete=Cc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Cc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t){return t&&t._delegate?t._delegate:t}class cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NI(e))try{this.getOrInitializeService({instanceIdentifier:kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kr){return this.instances.has(e)}getOptions(e=kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kr){return this.component?this.component.multipleInstances?e:kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CI(t){return t===kr?void 0:t}function NI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new II(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const RI={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},DI=ne.INFO,PI={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},bI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=PI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tf{constructor(e){this.name=e,this._logLevel=DI,this._logHandler=bI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const xI=(t,e)=>e.some(n=>t instanceof n);let sg,og;function LI(){return sg||(sg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OI(){return og||(og=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jw=new WeakMap,Qh=new WeakMap,Zw=new WeakMap,Nc=new WeakMap,If=new WeakMap;function MI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jw.set(n,t)}).catch(()=>{}),If.set(e,t),e}function $I(t){if(Qh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qh.set(t,e)}let Yh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UI(t){Yh=t(Yh)}function FI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ac(this),e,...n);return Zw.set(r,e.sort?e.sort():[e]),sr(r)}:OI().includes(t)?function(...e){return t.apply(Ac(this),e),sr(Jw.get(this))}:function(...e){return sr(t.apply(Ac(this),e))}}function VI(t){return typeof t=="function"?FI(t):(t instanceof IDBTransaction&&$I(t),xI(t,LI())?new Proxy(t,Yh):t)}function sr(t){if(t instanceof IDBRequest)return MI(t);if(Nc.has(t))return Nc.get(t);const e=VI(t);return e!==t&&(Nc.set(t,e),If.set(e,t)),e}const Ac=t=>If.get(t);function BI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=sr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(sr(o.result),l.oldVersion,l.newVersion,sr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const jI=["get","getKey","getAll","getAllKeys","count"],zI=["put","add","delete","clear"],Rc=new Map;function ag(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rc.get(e))return Rc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=zI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Rc.set(e,s),s}UI(t=>({...t,get:(e,n,r)=>ag(e,n)||t.get(e,n,r),has:(e,n)=>!!ag(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xh="@firebase/app",lg="0.9.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new Tf("@firebase/app"),KI="@firebase/app-compat",WI="@firebase/analytics-compat",GI="@firebase/analytics",QI="@firebase/app-check-compat",YI="@firebase/app-check",XI="@firebase/auth",JI="@firebase/auth-compat",ZI="@firebase/database",eC="@firebase/database-compat",tC="@firebase/functions",nC="@firebase/functions-compat",rC="@firebase/installations",iC="@firebase/installations-compat",sC="@firebase/messaging",oC="@firebase/messaging-compat",aC="@firebase/performance",lC="@firebase/performance-compat",uC="@firebase/remote-config",cC="@firebase/remote-config-compat",hC="@firebase/storage",dC="@firebase/storage-compat",fC="@firebase/firestore",pC="@firebase/firestore-compat",mC="firebase",gC="9.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="[DEFAULT]",yC={[Xh]:"fire-core",[KI]:"fire-core-compat",[GI]:"fire-analytics",[WI]:"fire-analytics-compat",[YI]:"fire-app-check",[QI]:"fire-app-check-compat",[XI]:"fire-auth",[JI]:"fire-auth-compat",[ZI]:"fire-rtdb",[eC]:"fire-rtdb-compat",[tC]:"fire-fn",[nC]:"fire-fn-compat",[rC]:"fire-iid",[iC]:"fire-iid-compat",[sC]:"fire-fcm",[oC]:"fire-fcm-compat",[aC]:"fire-perf",[lC]:"fire-perf-compat",[uC]:"fire-rc",[cC]:"fire-rc-compat",[hC]:"fire-gcs",[dC]:"fire-gcs-compat",[fC]:"fire-fst",[pC]:"fire-fst-compat","fire-js":"fire-js",[mC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=new Map,Zh=new Map;function vC(t,e){try{t.container.addComponent(e)}catch(n){jr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zr(t){const e=t.name;if(Zh.has(e))return jr.debug(`There were multiple attempts to register component ${e}.`),!1;Zh.set(e,t);for(const n of Pl.values())vC(n,t);return!0}function mu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},or=new Fo("app","Firebase",wC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=gC;function e0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw or.create("bad-app-name",{appName:String(i)});if(n||(n=uI()),!n)throw or.create("no-options");const s=Pl.get(i);if(s){if(Dl(n,s.options)&&Dl(r,s.config))return s;throw or.create("duplicate-app",{appName:i})}const o=new AI(i);for(const l of Zh.values())o.addComponent(l);const a=new EC(n,r,o);return Pl.set(i,a),a}function Cf(t=Jh){const e=Pl.get(t);if(!e&&t===Jh)return e0();if(!e)throw or.create("no-app",{appName:t});return e}function on(t,e,n){var r;let i=(r=yC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jr.warn(a.join(" "));return}zr(new cr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC="firebase-heartbeat-database",_C=1,go="firebase-heartbeat-store";let Dc=null;function t0(){return Dc||(Dc=BI(SC,_C,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(go)}}}).catch(t=>{throw or.create("idb-open",{originalErrorMessage:t.message})})),Dc}async function kC(t){try{return(await t0()).transaction(go).objectStore(go).get(n0(t))}catch(e){if(e instanceof hn)jr.warn(e.message);else{const n=or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jr.warn(n.message)}}}async function ug(t,e){try{const r=(await t0()).transaction(go,"readwrite");return await r.objectStore(go).put(e,n0(t)),r.done}catch(n){if(n instanceof hn)jr.warn(n.message);else{const r=or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jr.warn(r.message)}}}function n0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=1024,IC=30*24*60*60*1e3;class CC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=cg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=IC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=cg(),{heartbeatsToSend:n,unsentEntries:r}=NC(this._heartbeatsCache.heartbeats),i=Rl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function cg(){return new Date().toISOString().substring(0,10)}function NC(t,e=TC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),hg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),hg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class AC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gI()?yI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await kC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ug(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ug(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function hg(t){return Rl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(t){zr(new cr("platform-logger",e=>new qI(e),"PRIVATE")),zr(new cr("heartbeat",e=>new CC(e),"PRIVATE")),on(Xh,lg,t),on(Xh,lg,"esm2017"),on("fire-js","")}RC("");var DC="firebase",PC="9.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on(DC,PC,"app");function Nf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function r0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bC=r0,i0=new Fo("auth","Firebase",r0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=new Tf("@firebase/auth");function Qa(t,...e){dg.logLevel<=ne.ERROR&&dg.error(`Auth (${ts}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,...e){throw Af(t,...e)}function an(t,...e){return Af(t,...e)}function xC(t,e,n){const r=Object.assign(Object.assign({},bC()),{[e]:n});return new Fo("auth","Firebase",r).create(e,{appName:t.name})}function Af(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return i0.create(t,...e)}function j(t,e,...n){if(!t)throw Af(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qa(e),new Error(e)}function An(t,e){t||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=new Map;function wn(t){An(t instanceof Function,"Expected a class definition");let e=fg.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fg.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(t,e){const n=mu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Dl(s,e??{}))return i;Qt(i,"already-initialized")}return n.initialize({options:e})}function OC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function MC(){return pg()==="http:"||pg()==="https:"}function pg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MC()||fI()||"connection"in navigator)?navigator.onLine:!0}function UC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=hI()||pI()}get(){return $C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC=new Bo(3e4,6e4);function ns(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zr(t,e,n,r,i={}){return o0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Vo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),s0.fetch()(a0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function o0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},FC),e);try{const i=new BC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ca(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ca(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ca(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ca(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xC(t,c,u);Qt(t,c)}}catch(i){if(i instanceof hn)throw i;Qt(t,"internal-error",{message:String(i)})}}async function jo(t,e,n,r,i={}){const s=await Zr(t,e,n,r,i);return"mfaPendingCredential"in s&&Qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function a0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Rf(t.config,i):`${t.config.apiScheme}://${i}`}class BC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),VC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ca(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=an(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jC(t,e){return Zr(t,"POST","/v1/accounts:delete",e)}async function zC(t,e){return Zr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qC(t,e=!1){const n=me(t),r=await n.getIdToken(e),i=Df(r);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:qs(Pc(i.auth_time)),issuedAtTime:qs(Pc(i.iat)),expirationTime:qs(Pc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Pc(t){return Number(t)*1e3}function Df(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ww(n);return i?JSON.parse(i):(Qa("Failed to decode base64 JWT payload"),null)}catch(i){return Qa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function HC(t){const e=Df(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hn&&KC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function KC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qs(this.lastLoginAt),this.creationTime=qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await qr(t,zC(n,{idToken:r}));j(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?YC(s.providerUserInfo):[],a=QC(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new l0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function GC(t){const e=me(t);await bl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function YC(t){return t.map(e=>{var{providerId:n}=e,r=Nf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC(t,e){const n=await o0(t,{},async()=>{const r=Vo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=a0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",s0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):HC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await XC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new yo;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yo,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Nf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new WC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new l0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await qr(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qC(this,e)}reload(){return GC(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await bl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qr(this,jC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:_,isAnonymous:R,providerData:N,stsTokenManager:A}=n;j(m&&A,e,"internal-error");const L=yo.fromJSON(this.name,A);j(typeof m=="string",e,"internal-error"),$n(d,e.name),$n(f,e.name),j(typeof _=="boolean",e,"internal-error"),j(typeof R=="boolean",e,"internal-error"),$n(w,e.name),$n(S,e.name),$n(y,e.name),$n(I,e.name),$n(g,e.name),$n(p,e.name);const k=new xr({uid:m,auth:e,email:f,emailVerified:_,displayName:d,isAnonymous:R,photoURL:S,phoneNumber:w,tenantId:y,stsTokenManager:L,createdAt:g,lastLoginAt:p});return N&&Array.isArray(N)&&(k.providerData=N.map(D=>Object.assign({},D))),I&&(k._redirectEventId=I),k}static async _fromIdTokenResponse(e,n,r=!1){const i=new yo;i.updateFromServerResponse(n);const s=new xr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await bl(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}u0.type="NONE";const mg=u0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t,e,n){return`firebase:${t}:${e}:${n}`}class Ri{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ya(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ya("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ri(wn(mg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||wn(mg);const o=Ya(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=xr._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ri(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ri(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(d0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(c0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(p0(e))return"Blackberry";if(m0(e))return"Webos";if(Pf(e))return"Safari";if((e.includes("chrome/")||h0(e))&&!e.includes("edge/"))return"Chrome";if(f0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function c0(t=rt()){return/firefox\//i.test(t)}function Pf(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function h0(t=rt()){return/crios\//i.test(t)}function d0(t=rt()){return/iemobile/i.test(t)}function f0(t=rt()){return/android/i.test(t)}function p0(t=rt()){return/blackberry/i.test(t)}function m0(t=rt()){return/webos/i.test(t)}function gu(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function JC(t=rt()){var e;return gu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ZC(){return mI()&&document.documentMode===10}function g0(t=rt()){return gu(t)||f0(t)||m0(t)||p0(t)||/windows phone/i.test(t)||d0(t)}function eN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(t,e=[]){let n;switch(t){case"Browser":n=gg(rt());break;case"Worker":n=`${gg(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ts}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yg(this),this.idTokenSubscription=new yg(this),this.beforeStateQueue=new tN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=i0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ri.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?me(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await Ri.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=y0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function zo(t){return me(t)}class yg{constructor(e){this.auth=e,this.observer=null,this.addObserver=_I(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function rN(t,e,n){const r=zo(t);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=v0(e),{host:o,port:a}=iN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||sN()}function v0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iN(t){const e=v0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:vg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:vg(o)}}}function vg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}async function w0(t,e){return Zr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oN(t,e){return jo(t,"POST","/v1/accounts:signInWithPassword",ns(t,e))}async function aN(t,e){return Zr(t,"POST","/v1/accounts:sendOobCode",ns(t,e))}async function lN(t,e){return aN(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uN(t,e){return jo(t,"POST","/v1/accounts:signInWithEmailLink",ns(t,e))}async function cN(t,e){return jo(t,"POST","/v1/accounts:signInWithEmailLink",ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends bf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new vo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new vo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return oN(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return uN(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return w0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return cN(e,{idToken:n,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(t,e){return jo(t,"POST","/v1/accounts:signInWithIdp",ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN="http://localhost";class Hr extends bf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Nf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Hr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Di(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Di(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Di(e,n)}buildRequest(){const e={requestUri:hN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fN(t){const e=Rs(Ds(t)).link,n=e?Rs(Ds(e)).deep_link_id:null,r=Rs(Ds(t)).deep_link_id;return(r?Rs(Ds(r)).link:null)||r||n||e||t}class xf{constructor(e){var n,r,i,s,o,a;const l=Rs(Ds(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=dN((i=l.mode)!==null&&i!==void 0?i:null);j(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=fN(e);try{return new xf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.providerId=rs.PROVIDER_ID}static credential(e,n){return vo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xf.parseLink(n);return j(r,"argument-error"),vo._fromEmailAndCode(e,r.code,r.tenantId)}}rs.PROVIDER_ID="password";rs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends E0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends qo{constructor(){super("facebook.com")}static credential(e){return Hr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends qo{constructor(){super("github.com")}static credential(e){return Hr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends qo{constructor(){super("twitter.com")}static credential(e,n){return Hr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pN(t,e){return jo(t,"POST","/v1/accounts:signUp",ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await xr._fromIdTokenResponse(e,r,i),o=wg(r);return new Kr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=wg(r);return new Kr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function wg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends hn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new xl(e,n,r,i)}}function S0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xl._fromErrorAndOperation(t,s,e,r):s})}async function mN(t,e,n=!1){const r=await qr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await qr(t,S0(r,i,e,t),n);j(s.idToken,r,"internal-error");const o=Df(s.idToken);j(o,r,"internal-error");const{sub:a}=o;return j(t.uid===a,r,"user-mismatch"),Kr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _0(t,e,n=!1){const r="signIn",i=await S0(t,r,e),s=await Kr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function yN(t,e){return _0(zo(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(t,e,n){var r;j(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),j(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(j(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(j(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k0(t,e,n){const r=me(t),i={requestType:"PASSWORD_RESET",email:e};n&&vN(r,i,n),await lN(r,i)}async function wN(t,e,n){const r=zo(t),i=await pN(r,{returnSecureToken:!0,email:e,password:n}),s=await Kr._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function EN(t,e,n){return yN(me(t),rs.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SN(t,e){return Zr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T0(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=me(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await qr(r,SN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function _N(t,e){return kN(me(t),e,null)}async function kN(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await qr(t,w0(r,s));await t._updateTokensIfNecessary(o,!0)}function TN(t,e,n,r){return me(t).onIdTokenChanged(e,n,r)}function IN(t,e,n){return me(t).beforeAuthStateChanged(e,n)}function CN(t){return me(t).signOut()}const Ll="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ll,"1"),this.storage.removeItem(Ll),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(){const t=rt();return Pf(t)||gu(t)}const AN=1e3,RN=10;class C0 extends I0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=NN()&&eN(),this.fallbackToPolling=g0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ZC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,RN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},AN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}C0.type="LOCAL";const DN=C0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0 extends I0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}N0.type="SESSION";const A0=N0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new yu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await PN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Lf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function xN(t){ln().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function LN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ON(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function MN(){return R0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0="firebaseLocalStorageDb",$N=1,Ol="firebaseLocalStorage",P0="fbase_key";class Ho{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vu(t,e){return t.transaction([Ol],e?"readwrite":"readonly").objectStore(Ol)}function UN(){const t=indexedDB.deleteDatabase(D0);return new Ho(t).toPromise()}function td(){const t=indexedDB.open(D0,$N);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ol,{keyPath:P0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ol)?e(r):(r.close(),await UN(),e(await td()))})})}async function Eg(t,e,n){const r=vu(t,!0).put({[P0]:e,value:n});return new Ho(r).toPromise()}async function FN(t,e){const n=vu(t,!1).get(e),r=await new Ho(n).toPromise();return r===void 0?null:r.value}function Sg(t,e){const n=vu(t,!0).delete(e);return new Ho(n).toPromise()}const VN=800,BN=3;class b0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await td(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>BN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return R0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yu._getInstance(MN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await LN(),!this.activeServiceWorker)return;this.sender=new bN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ON()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await td();return await Eg(e,Ll,"1"),await Sg(e,Ll),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Eg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>FN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=vu(i,!1).getAll();return new Ho(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}b0.type="LOCAL";const jN=b0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function qN(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=an("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",zN().appendChild(r)})}function HN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Bo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(t,e){return e?wn(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of extends bf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WN(t){return _0(t.auth,new Of(t),t.bypassAuthState)}function GN(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),gN(n,new Of(t),t.bypassAuthState)}async function QN(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),mN(n,new Of(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WN;case"linkViaPopup":case"linkViaRedirect":return QN;case"reauthViaPopup":case"reauthViaRedirect":return GN;default:Qt(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=new Bo(2e3,1e4);class Si extends x0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Si.currentPopupAction&&Si.currentPopupAction.cancel(),Si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=Lf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,YN.get())};e()}}Si.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN="pendingRedirect",Xa=new Map;class JN extends x0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xa.get(this.auth._key());if(!e){try{const r=await ZN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xa.set(this.auth._key(),e)}return this.bypassAuthState||Xa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZN(t,e){const n=nA(e),r=tA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function eA(t,e){Xa.set(t._key(),e)}function tA(t){return wn(t._redirectPersistence)}function nA(t){return Ya(XN,t.config.apiKey,t.name)}async function rA(t,e,n=!1){const r=zo(t),i=KN(r,e),o=await new JN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=10*60*1e3;class sA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!L0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iA&&this.cachedEventUids.clear(),this.cachedEventUids.has(_g(e))}saveEventToCache(e){this.cachedEventUids.add(_g(e)),this.lastProcessedEventTime=Date.now()}}function _g(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function L0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return L0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(t,e={}){return Zr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uA=/^https?/;async function cA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await aA(t);for(const n of e)try{if(hA(n))return}catch{}Qt(t,"unauthorized-domain")}function hA(t){const e=ed(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!uA.test(n))return!1;if(lA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA=new Bo(3e4,6e4);function kg(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fA(t){return new Promise((e,n)=>{var r,i,s;function o(){kg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kg(),n(an(t,"network-request-failed"))},timeout:dA.get()})}if(!((i=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ln().gapi)===null||s===void 0)&&s.load)o();else{const a=HN("iframefcb");return ln()[a]=()=>{gapi.load?o():n(an(t,"network-request-failed"))},qN(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ja=null,e})}let Ja=null;function pA(t){return Ja=Ja||fA(t),Ja}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=new Bo(5e3,15e3),gA="__/auth/iframe",yA="emulator/auth/iframe",vA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EA(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rf(e,yA):`https://${t.config.authDomain}/${gA}`,r={apiKey:e.apiKey,appName:t.name,v:ts},i=wA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Vo(r).slice(1)}`}async function SA(t){const e=await pA(t),n=ln().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:EA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),a=ln().setTimeout(()=>{s(o)},mA.get());function l(){ln().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kA=500,TA=600,IA="_blank",CA="http://localhost";class Tg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NA(t,e,n,r=kA,i=TA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},_A),{width:r.toString(),height:i.toString(),top:s,left:o}),u=rt().toLowerCase();n&&(a=h0(u)?IA:n),c0(u)&&(e=e||CA,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[w,S])=>`${f}${w}=${S},`,"");if(JC(u)&&a!=="_self")return AA(e||"",a),new Tg(null);const d=window.open(e||"",a,c);j(d,t,"popup-blocked");try{d.focus()}catch{}return new Tg(d)}function AA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="__/auth/handler",DA="emulator/auth/handler";function Ig(t,e,n,r,i,s){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ts,eventId:i};if(e instanceof E0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",SI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof qo){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${PA(t)}?${Vo(a).slice(1)}`}function PA({config:t}){return t.emulator?Rf(t,DA):`https://${t.authDomain}/${RA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="webStorageSupport";class bA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=A0,this._completeRedirectFn=rA,this._overrideRedirectResult=eA}async _openPopup(e,n,r,i){var s;An((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Ig(e,n,r,ed(),i);return NA(e,o,Lf())}async _openRedirect(e,n,r,i){return await this._originValidation(e),xN(Ig(e,n,r,ed(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(An(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await SA(e),r=new sA(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bc,{type:bc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[bc];o!==void 0&&n(!!o),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return g0()||Pf()||gu()}}const xA=bA;var Cg="@firebase/auth",Ng="0.21.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function MA(t){zr(new cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{j(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),j(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:y0(t)},c=new nN(a,l,u);return OC(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zr(new cr("auth-internal",e=>{const n=zo(e.getProvider("auth").getImmediate());return(r=>new LA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(Cg,Ng,OA(t)),on(Cg,Ng,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=5*60,UA=Yw("authIdTokenMaxAge")||$A;let Ag=null;const FA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>UA)return;const i=n==null?void 0:n.token;Ag!==i&&(Ag=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function VA(t=Cf()){const e=mu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LC(t,{popupRedirectResolver:xA,persistence:[jN,DN,A0]}),r=Yw("authTokenSyncURL");if(r){const s=FA(r);IN(n,s,()=>s(n.currentUser)),TN(n,o=>s(o))}const i=Gw("auth");return i&&rN(n,`http://${i}`),n}MA("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0="firebasestorage.googleapis.com",M0="storageBucket",BA=2*60*1e3,jA=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends hn{constructor(e,n,r=0){super(xc(e),`Firebase Storage: ${n} (${xc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_e.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ee;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ee||(Ee={}));function xc(t){return"storage/"+t}function Mf(){const t="An unknown error occurred, please check the error payload for server response.";return new _e(Ee.UNKNOWN,t)}function zA(t){return new _e(Ee.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function qA(t){return new _e(Ee.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function HA(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new _e(Ee.UNAUTHENTICATED,t)}function KA(){return new _e(Ee.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function WA(t){return new _e(Ee.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function GA(){return new _e(Ee.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function QA(){return new _e(Ee.CANCELED,"User canceled the upload/download.")}function YA(t){return new _e(Ee.INVALID_URL,"Invalid URL '"+t+"'.")}function XA(t){return new _e(Ee.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function JA(){return new _e(Ee.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+M0+"' property when initializing the app?")}function ZA(){return new _e(Ee.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function eR(){return new _e(Ee.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function tR(t){return new _e(Ee.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function nd(t){return new _e(Ee.INVALID_ARGUMENT,t)}function $0(){return new _e(Ee.APP_DELETED,"The Firebase app was deleted.")}function nR(t){return new _e(Ee.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Hs(t,e){return new _e(Ee.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ss(t){throw new _e(Ee.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=kt.makeFromUrl(e,n)}catch{return new kt(e,"")}if(r.path==="")return r;throw XA(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",w=new RegExp(`^https?://${d}/${c}/b/${i}/o${f}`,"i"),S={bucket:1,path:3},y=n===O0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",g=new RegExp(`^https?://${y}/${i}/${I}`,"i"),m=[{regex:a,indices:l,postModify:s},{regex:w,indices:S,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<m.length;_++){const R=m[_],N=R.regex.exec(e);if(N){const A=N[R.indices.bucket];let L=N[R.indices.path];L||(L=""),r=new kt(A,L),R.postModify(r);break}}if(r==null)throw YA(e);return r}}class rR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...I){u||(u=!0,e.apply(null,I))}function d(I){i=setTimeout(()=>{i=null,t(w,l())},I)}function f(){s&&clearTimeout(s)}function w(I,...g){if(u){f();return}if(I){f(),c.call(null,I,...g);return}if(l()||o){f(),c.call(null,I,...g);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,d(m)}let S=!1;function y(I){S||(S=!0,f(),!u&&(i!==null?(I||(a=2),clearTimeout(i),d(0)):I||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function sR(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(t){return t!==void 0}function aR(t){return typeof t=="object"&&!Array.isArray(t)}function $f(t){return typeof t=="string"||t instanceof String}function Rg(t){return Uf()&&t instanceof Blob}function Uf(){return typeof Blob<"u"&&!dI()}function Dg(t,e,n,r){if(r<e)throw nd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw nd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function U0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Lr||(Lr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e,n,r,i,s,o,a,l,u,c,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,S)=>{this.resolve_=w,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Na(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Lr.NO_ERROR,l=s.getStatus();if(!a||lR(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Lr.ABORT;r(!1,new Na(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Na(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());oR(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Mf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?$0():QA();o(l)}else{const l=GA();o(l)}};this.canceled_?n(!1,new Na(!1,null,!0)):this.backoffId_=iR(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&sR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Na{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function cR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function hR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function dR(t,e){e&&(t["X-Firebase-GMPID"]=e)}function fR(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function pR(t,e,n,r,i,s,o=!0){const a=U0(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return dR(u,e),cR(u,n),hR(u,s),fR(u,r),new uR(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function gR(...t){const e=mR();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Uf())return new Blob(t);throw new _e(Ee.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function yR(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(t){if(typeof atob>"u")throw tR("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Lc{constructor(e,n){this.data=e,this.contentType=n||null}}function wR(t,e){switch(t){case nn.RAW:return new Lc(F0(e));case nn.BASE64:case nn.BASE64URL:return new Lc(V0(t,e));case nn.DATA_URL:return new Lc(SR(e),_R(e))}throw Mf()}function F0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function ER(t){let e;try{e=decodeURIComponent(t)}catch{throw Hs(nn.DATA_URL,"Malformed data URL.")}return F0(e)}function V0(t,e){switch(t){case nn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Hs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case nn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Hs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=vR(e)}catch(i){throw i.message.includes("polyfill")?i:Hs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class B0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Hs(nn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=kR(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function SR(t){const e=new B0(t);return e.base64?V0(nn.BASE64,e.rest):ER(e.rest)}function _R(t){return new B0(t).contentType}function kR(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n){let r=0,i="";Rg(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Rg(this.data_)){const r=this.data_,i=yR(r,e,n);return i===null?null:new Kn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Kn(r,!0)}}static getBlob(...e){if(Uf()){const n=e.map(r=>r instanceof Kn?r.data_:r);return new Kn(gR.apply(null,n))}else{const n=e.map(o=>$f(o)?wR(nn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Kn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(t){let e;try{e=JSON.parse(t)}catch{return null}return aR(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function IR(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function z0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CR(t,e){return e}class st{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||CR}}let Aa=null;function NR(t){return!$f(t)||t.length<2?t:z0(t)}function q0(){if(Aa)return Aa;const t=[];t.push(new st("bucket")),t.push(new st("generation")),t.push(new st("metageneration")),t.push(new st("name","fullPath",!0));function e(s,o){return NR(o)}const n=new st("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new st("size");return i.xform=r,t.push(i),t.push(new st("timeCreated")),t.push(new st("updated")),t.push(new st("md5Hash",null,!0)),t.push(new st("cacheControl",null,!0)),t.push(new st("contentDisposition",null,!0)),t.push(new st("contentEncoding",null,!0)),t.push(new st("contentLanguage",null,!0)),t.push(new st("contentType",null,!0)),t.push(new st("metadata","customMetadata",!0)),Aa=t,Aa}function AR(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new kt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function RR(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return AR(r,t),r}function H0(t,e,n){const r=j0(e);return r===null?null:RR(t,r,n)}function DR(t,e,n,r){const i=j0(e);if(i===null||!$f(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,f="/b/"+o(c)+"/o/"+o(d),w=Ff(f,n,r),S=U0({alt:"media",token:u});return w+S})[0]}function PR(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class K0{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t){if(!t)throw Mf()}function bR(t,e){function n(r,i){const s=H0(t,i,e);return W0(s!==null),s}return n}function xR(t,e){function n(r,i){const s=H0(t,i,e);return W0(s!==null),DR(s,i,t.host,t._protocol)}return n}function G0(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=KA():i=HA():n.getStatus()===402?i=qA(t.bucket):n.getStatus()===403?i=WA(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function LR(t){const e=G0(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=zA(t.path)),s.serverResponse=i.serverResponse,s}return n}function OR(t,e,n){const r=e.fullServerUrl(),i=Ff(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new K0(i,s,xR(t,n),o);return a.errorHandler=LR(e),a}function MR(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function $R(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=MR(null,e)),r}function UR(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let m="";for(let _=0;_<2;_++)m=m+Math.random().toString().slice(2);return m}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=$R(e,r,i),c=PR(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",w=Kn.getBlob(d,r,f);if(w===null)throw ZA();const S={name:u.fullPath},y=Ff(s,t.host,t._protocol),I="POST",g=t.maxUploadRetryTime,p=new K0(y,I,bR(t,n),g);return p.urlParams=S,p.headers=o,p.body=w.uploadData(),p.errorHandler=G0(e),p}class FR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Lr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Lr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Lr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ss("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ss("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ss("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ss("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ss("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class VR extends FR{initXhr(){this.xhr_.responseType="text"}}function Q0(){return new VR}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n){this._service=e,n instanceof kt?this._location=n:this._location=kt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Wr(e,n)}get root(){const e=new kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return z0(this._location.path)}get storage(){return this._service}get parent(){const e=TR(this._location.path);if(e===null)return null;const n=new kt(this._location.bucket,e);return new Wr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw nR(e)}}function BR(t,e,n){t._throwIfRoot("uploadBytes");const r=UR(t.storage,t._location,q0(),new Kn(e,!0),n);return t.storage.makeRequestWithTokens(r,Q0).then(i=>({metadata:i,ref:t}))}function jR(t){t._throwIfRoot("getDownloadURL");const e=OR(t.storage,t._location,q0());return t.storage.makeRequestWithTokens(e,Q0).then(n=>{if(n===null)throw eR();return n})}function zR(t,e){const n=IR(t._location.path,e),r=new kt(t._location.bucket,n);return new Wr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(t){return/^[A-Za-z]+:\/\//.test(t)}function HR(t,e){return new Wr(t,e)}function Y0(t,e){if(t instanceof Vf){const n=t;if(n._bucket==null)throw JA();const r=new Wr(n,n._bucket);return e!=null?Y0(r,e):r}else return e!==void 0?zR(t,e):t}function KR(t,e){if(e&&qR(e)){if(t instanceof Vf)return HR(t,e);throw nd("To use ref(service, url), the first argument must be a Storage instance.")}else return Y0(t,e)}function Pg(t,e){const n=e==null?void 0:e[M0];return n==null?null:kt.makeFromBucketSpec(n,t)}function WR(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Xw(i,t.app.options.projectId))}class Vf{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=O0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=BA,this._maxUploadRetryTime=jA,this._requests=new Set,i!=null?this._bucket=kt.makeFromBucketSpec(i,this._host):this._bucket=Pg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=kt.makeFromBucketSpec(this._url,e):this._bucket=Pg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Dg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Dg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Wr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new rR($0());{const o=pR(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const bg="@firebase/storage",xg="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="storage";function Bf(t,e,n){return t=me(t),BR(t,e,n)}function jf(t){return t=me(t),jR(t)}function Bi(t,e){return t=me(t),KR(t,e)}function GR(t=Cf(),e){t=me(t);const r=mu(t,X0).getImmediate({identifier:e}),i=Qw("storage");return i&&QR(r,...i),r}function QR(t,e,n,r={}){WR(t,e,n,r)}function YR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Vf(n,r,i,e,ts)}function XR(){zr(new cr(X0,YR,"PUBLIC").setMultipleInstances(!0)),on(bg,xg,""),on(bg,xg,"esm2017")}XR();var JR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,zf=zf||{},K=JR||self;function Ml(){}function wu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ko(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ZR(t){return Object.prototype.hasOwnProperty.call(t,Oc)&&t[Oc]||(t[Oc]=++eD)}var Oc="closure_uid_"+(1e9*Math.random()>>>0),eD=0;function tD(t,e,n){return t.call.apply(t.bind,arguments)}function nD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=tD:et=nD,et.apply(null,arguments)}function Ra(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function He(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function yr(){this.s=this.s,this.o=this.o}var rD=0;yr.prototype.s=!1;yr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),rD!=0)&&ZR(this)};yr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const J0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function qf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Lg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(wu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var iD=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",Ml,e),K.removeEventListener("test",Ml,e)}catch{}return t}();function $l(t){return/^[\s\xa0]*$/.test(t)}var Og=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Mc(t,e){return t<e?-1:t>e?1:0}function Eu(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function tn(t){return Eu().indexOf(t)!=-1}function Hf(t){return Hf[" "](t),t}Hf[" "]=Ml;function sD(t){var e=lD;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var oD=tn("Opera"),ji=tn("Trident")||tn("MSIE"),Z0=tn("Edge"),rd=Z0||ji,e1=tn("Gecko")&&!(Eu().toLowerCase().indexOf("webkit")!=-1&&!tn("Edge"))&&!(tn("Trident")||tn("MSIE"))&&!tn("Edge"),aD=Eu().toLowerCase().indexOf("webkit")!=-1&&!tn("Edge");function t1(){var t=K.document;return t?t.documentMode:void 0}var Ul;e:{var $c="",Uc=function(){var t=Eu();if(e1)return/rv:([^\);]+)(\)|;)/.exec(t);if(Z0)return/Edge\/([\d\.]+)/.exec(t);if(ji)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(aD)return/WebKit\/(\S+)/.exec(t);if(oD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Uc&&($c=Uc?Uc[1]:""),ji){var Fc=t1();if(Fc!=null&&Fc>parseFloat($c)){Ul=String(Fc);break e}}Ul=$c}var lD={};function uD(){return sD(function(){let t=0;const e=Og(String(Ul)).split("."),n=Og("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Mc(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Mc(i[2].length==0,s[2].length==0)||Mc(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var id;if(K.document&&ji){var Mg=t1();id=Mg||parseInt(Ul,10)||void 0}else id=void 0;var cD=id;function wo(t,e){if(tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(e1){e:{try{Hf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:hD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&wo.X.h.call(this)}}He(wo,tt);var hD={2:"touch",3:"pen",4:"mouse"};wo.prototype.h=function(){wo.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Wo="closure_listenable_"+(1e6*Math.random()|0),dD=0;function fD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++dD,this.ba=this.ea=!1}function Su(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Kf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function n1(t){const e={};for(const n in t)e[n]=t[n];return e}const $g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function r1(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<$g.length;s++)n=$g[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function _u(t){this.src=t,this.g={},this.h=0}_u.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=od(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new fD(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function sd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=J0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Su(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function od(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Wf="closure_lm_"+(1e6*Math.random()|0),Vc={};function i1(t,e,n,r,i){if(r&&r.once)return o1(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)i1(t,e[s],n,r,i);return null}return n=Yf(n),t&&t[Wo]?t.N(e,n,Ko(r)?!!r.capture:!!r,i):s1(t,e,n,!1,r,i)}function s1(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ko(i)?!!i.capture:!!i,a=Qf(t);if(a||(t[Wf]=a=new _u(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=pD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)iD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(l1(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function pD(){function t(n){return e.call(t.src,t.listener,n)}const e=mD;return t}function o1(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)o1(t,e[s],n,r,i);return null}return n=Yf(n),t&&t[Wo]?t.O(e,n,Ko(r)?!!r.capture:!!r,i):s1(t,e,n,!0,r,i)}function a1(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)a1(t,e[s],n,r,i);else r=Ko(r)?!!r.capture:!!r,n=Yf(n),t&&t[Wo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=od(s,n,r,i),-1<n&&(Su(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Qf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=od(e,n,r,i)),(n=-1<t?e[t]:null)&&Gf(n))}function Gf(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Wo])sd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(l1(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Qf(e))?(sd(n,t),n.h==0&&(n.src=null,e[Wf]=null)):Su(t)}}}function l1(t){return t in Vc?Vc[t]:Vc[t]="on"+t}function mD(t,e){if(t.ba)t=!0;else{e=new wo(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Gf(t),t=n.call(r,e)}return t}function Qf(t){return t=t[Wf],t instanceof _u?t:null}var Bc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yf(t){return typeof t=="function"?t:(t[Bc]||(t[Bc]=function(e){return t.handleEvent(e)}),t[Bc])}function Fe(){yr.call(this),this.i=new _u(this),this.P=this,this.I=null}He(Fe,yr);Fe.prototype[Wo]=!0;Fe.prototype.removeEventListener=function(t,e,n,r){a1(this,t,e,n,r)};function ze(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new tt(e,t);else if(e instanceof tt)e.target=e.target||t;else{var i=e;e=new tt(r,t),r1(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Da(o,r,!0,e)&&i}if(o=e.g=t,i=Da(o,r,!0,e)&&i,i=Da(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Da(o,r,!1,e)&&i}Fe.prototype.M=function(){if(Fe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Su(n[r]);delete t.g[e],t.h--}}this.I=null};Fe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Fe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Da(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&sd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Xf=K.JSON.stringify;function gD(){var t=h1;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class yD{constructor(){this.h=this.g=null}add(e,n){const r=u1.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var u1=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new vD,t=>t.reset());class vD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function wD(t){K.setTimeout(()=>{throw t},0)}function c1(t,e){ad||ED(),ld||(ad(),ld=!0),h1.add(t,e)}var ad;function ED(){var t=K.Promise.resolve(void 0);ad=function(){t.then(SD)}}var ld=!1,h1=new yD;function SD(){for(var t;t=gD();){try{t.h.call(t.g)}catch(n){wD(n)}var e=u1;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ld=!1}function ku(t,e){Fe.call(this),this.h=t||1,this.g=e||K,this.j=et(this.lb,this),this.l=Date.now()}He(ku,Fe);U=ku.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ze(this,"tick"),this.ca&&(Jf(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Jf(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){ku.X.M.call(this),Jf(this),delete this.g};function Zf(t,e,n){if(typeof t=="function")n&&(t=et(t,n));else if(t&&typeof t.handleEvent=="function")t=et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function d1(t){t.g=Zf(()=>{t.g=null,t.i&&(t.i=!1,d1(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class _D extends yr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:d1(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Eo(t){yr.call(this),this.h=t,this.g={}}He(Eo,yr);var Ug=[];function f1(t,e,n,r){Array.isArray(n)||(n&&(Ug[0]=n.toString()),n=Ug);for(var i=0;i<n.length;i++){var s=i1(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function p1(t){Kf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Gf(e)},t),t.g={}}Eo.prototype.M=function(){Eo.X.M.call(this),p1(this)};Eo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Tu(){this.g=!0}Tu.prototype.Aa=function(){this.g=!1};function kD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function TD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function _i(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+CD(t,n)+(r?" "+r:"")})}function ID(t,e){t.info(function(){return"TIMEOUT: "+e})}Tu.prototype.info=function(){};function CD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Xf(n)}catch{return e}}var ei={},Fg=null;function Iu(){return Fg=Fg||new Fe}ei.Pa="serverreachability";function m1(t){tt.call(this,ei.Pa,t)}He(m1,tt);function So(t){const e=Iu();ze(e,new m1(e))}ei.STAT_EVENT="statevent";function g1(t,e){tt.call(this,ei.STAT_EVENT,t),this.stat=e}He(g1,tt);function lt(t){const e=Iu();ze(e,new g1(e,t))}ei.Qa="timingevent";function y1(t,e){tt.call(this,ei.Qa,t),this.size=e}He(y1,tt);function Go(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var Cu={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},v1={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ep(){}ep.prototype.h=null;function Vg(t){return t.h||(t.h=t.i())}function w1(){}var Qo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function tp(){tt.call(this,"d")}He(tp,tt);function np(){tt.call(this,"c")}He(np,tt);var ud;function Nu(){}He(Nu,ep);Nu.prototype.g=function(){return new XMLHttpRequest};Nu.prototype.i=function(){return{}};ud=new Nu;function Yo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Eo(this),this.O=ND,t=rd?125:void 0,this.T=new ku(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new E1}function E1(){this.i=null,this.g="",this.h=!1}var ND=45e3,cd={},Fl={};U=Yo.prototype;U.setTimeout=function(t){this.O=t};function hd(t,e,n){t.K=1,t.v=Ru(Rn(e)),t.s=n,t.P=!0,S1(t,null)}function S1(t,e){t.F=Date.now(),Xo(t),t.A=Rn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),R1(n.i,"t",r),t.C=0,n=t.l.H,t.h=new E1,t.g=Y1(t.l,n?e:null,!t.s),0<t.N&&(t.L=new _D(et(t.La,t,t.g),t.N)),f1(t.S,t.g,"readystatechange",t.ib),e=t.H?n1(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),So(),kD(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&En(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const c=En(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>c)&&(c!=3||rd||this.g&&(this.h.h||this.g.fa()||qg(this.g)))){this.I||c!=4||e==7||(e==8||0>=d?So(3):So(2)),Au(this);var n=this.g.aa();this.Y=n;t:if(_1(this)){var r=qg(this.g);t="";var i=r.length,s=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ar(this),Ks(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,TD(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$l(a)){var u=a;break t}}u=null}if(n=u)_i(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,dd(this,n);else{this.i=!1,this.o=3,lt(12),Ar(this),Ks(this);break e}}this.P?(k1(this,c,o),rd&&this.i&&c==3&&(f1(this.S,this.T,"tick",this.hb),this.T.start())):(_i(this.j,this.m,o,null),dd(this,o)),c==4&&Ar(this),this.i&&!this.I&&(c==4?K1(this.l,this):(this.i=!1,Xo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,lt(12)):(this.o=0,lt(13)),Ar(this),Ks(this)}}}catch{}finally{}};function _1(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function k1(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=AD(t,n),i==Fl){e==4&&(t.o=4,lt(14),r=!1),_i(t.j,t.m,null,"[Incomplete Response]");break}else if(i==cd){t.o=4,lt(15),_i(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else _i(t.j,t.m,i,null),dd(t,i);_1(t)&&i!=Fl&&i!=cd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,lt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),up(e),e.K=!0,lt(11))):(_i(t.j,t.m,n,"[Invalid Chunked Response]"),Ar(t),Ks(t))}U.hb=function(){if(this.g){var t=En(this.g),e=this.g.fa();this.C<e.length&&(Au(this),k1(this,t,e),this.i&&t!=4&&Xo(this))}};function AD(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Fl:(n=Number(e.substring(n,r)),isNaN(n)?cd:(r+=1,r+n>e.length?Fl:(e=e.substr(r,n),t.C=r+n,e)))}U.cancel=function(){this.I=!0,Ar(this)};function Xo(t){t.V=Date.now()+t.O,T1(t,t.O)}function T1(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Go(et(t.gb,t),e)}function Au(t){t.B&&(K.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(ID(this.j,this.A),this.K!=2&&(So(),lt(17)),Ar(this),this.o=2,Ks(this)):T1(this,this.V-t)};function Ks(t){t.l.G==0||t.I||K1(t.l,t)}function Ar(t){Au(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Jf(t.T),p1(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function dd(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||fd(n.h,t))){if(!t.J&&fd(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)jl(n),bu(n);else break e;lp(n),lt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Go(et(n.cb,n),6e3));if(1>=b1(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Rr(n,11)}else if((t.J||n.g==t)&&jl(n),!$l(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const d=u[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const w=t.g;if(w){const S=w.g?w.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(S){var s=r.h;s.g||S.indexOf("spdy")==-1&&S.indexOf("quic")==-1&&S.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(rp(s,s.h),s.h=null))}if(r.D){const y=w.g?w.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,pe(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=Q1(r,r.H?r.ka:null,r.V),o.J){x1(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Au(a),Xo(a)),r.g=o}else q1(r);0<n.i.length&&xu(n)}else u[0]!="stop"&&u[0]!="close"||Rr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Rr(n,7):ap(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}So(4)}catch{}}function RD(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(wu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function DD(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(wu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function I1(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(wu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=DD(t),r=RD(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var C1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function PD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Or(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Or){this.h=e!==void 0?e:t.h,Vl(this,t.j),this.s=t.s,this.g=t.g,Bl(this,t.m),this.l=t.l,e=t.i;var n=new _o;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Bg(this,n),this.o=t.o}else t&&(n=String(t).match(C1))?(this.h=!!e,Vl(this,n[1]||"",!0),this.s=Ps(n[2]||""),this.g=Ps(n[3]||"",!0),Bl(this,n[4]),this.l=Ps(n[5]||"",!0),Bg(this,n[6]||"",!0),this.o=Ps(n[7]||"")):(this.h=!!e,this.i=new _o(null,this.h))}Or.prototype.toString=function(){var t=[],e=this.j;e&&t.push(bs(e,jg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(bs(e,jg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(bs(n,n.charAt(0)=="/"?LD:xD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",bs(n,MD)),t.join("")};function Rn(t){return new Or(t)}function Vl(t,e,n){t.j=n?Ps(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Bl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Bg(t,e,n){e instanceof _o?(t.i=e,$D(t.i,t.h)):(n||(e=bs(e,OD)),t.i=new _o(e,t.h))}function pe(t,e,n){t.i.set(e,n)}function Ru(t){return pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ps(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function bs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,bD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function bD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var jg=/[#\/\?@]/g,xD=/[#\?:]/g,LD=/[#\?]/g,OD=/[#\?@]/g,MD=/#/g;function _o(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function vr(t){t.g||(t.g=new Map,t.h=0,t.i&&PD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=_o.prototype;U.add=function(t,e){vr(this),this.i=null,t=is(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function N1(t,e){vr(t),e=is(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function A1(t,e){return vr(t),e=is(t,e),t.g.has(e)}U.forEach=function(t,e){vr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};U.oa=function(){vr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};U.W=function(t){vr(this);let e=[];if(typeof t=="string")A1(this,t)&&(e=e.concat(this.g.get(is(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return vr(this),this.i=null,t=is(this,t),A1(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function R1(t,e,n){N1(t,e),0<n.length&&(t.i=null,t.g.set(is(t,e),qf(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function is(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function $D(t,e){e&&!t.j&&(vr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(N1(this,r),R1(this,i,n))},t)),t.j=e}var UD=class{constructor(e,n){this.h=e,this.g=n}};function D1(t){this.l=t||FD,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ga&&K.g.Ga()&&K.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var FD=10;function P1(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function b1(t){return t.h?1:t.g?t.g.size:0}function fd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function rp(t,e){t.g?t.g.add(e):t.h=e}function x1(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}D1.prototype.cancel=function(){if(this.i=L1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function L1(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return qf(t.i)}function ip(){}ip.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};ip.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function VD(){this.g=new ip}function BD(t,e,n){const r=n||"";try{I1(t,function(i,s){let o=i;Ko(i)&&(o=Xf(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function jD(t,e){const n=new Tu;if(K.Image){const r=new Image;r.onload=Ra(Pa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ra(Pa,n,r,"TestLoadImage: error",!1,e),r.onabort=Ra(Pa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ra(Pa,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Pa(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Jo(t){this.l=t.ac||null,this.j=t.jb||!1}He(Jo,ep);Jo.prototype.g=function(){return new Du(this.l,this.j)};Jo.prototype.i=function(t){return function(){return t}}({});function Du(t,e){Fe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=sp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}He(Du,Fe);var sp=0;U=Du.prototype;U.open=function(t,e){if(this.readyState!=sp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ko(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zo(this)),this.readyState=sp};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ko(this)),this.g&&(this.readyState=3,ko(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;O1(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function O1(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Zo(this):ko(this),this.readyState==3&&O1(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,Zo(this))};U.Ua=function(t){this.g&&(this.response=t,Zo(this))};U.ga=function(){this.g&&Zo(this)};function Zo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ko(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ko(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Du.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var zD=K.JSON.parse;function Se(t){Fe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=M1,this.K=this.L=!1}He(Se,Fe);var M1="",qD=/^https?$/i,HD=["POST","PUT"];U=Se.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ud.g(),this.C=this.u?Vg(this.u):Vg(ud),this.g.onreadystatechange=et(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){zg(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=K.FormData&&t instanceof K.FormData,!(0<=J0(HD,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{F1(this),0<this.B&&((this.K=KD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.qa,this)):this.A=Zf(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){zg(this,s)}};function KD(t){return ji&&uD()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof zf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ze(this,"timeout"),this.abort(8))};function zg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$1(t),Pu(t)}function $1(t){t.D||(t.D=!0,ze(t,"complete"),ze(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ze(this,"complete"),ze(this,"abort"),Pu(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Pu(this,!0)),Se.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?U1(this):this.fb())};U.fb=function(){U1(this)};function U1(t){if(t.h&&typeof zf<"u"&&(!t.C[1]||En(t)!=4||t.aa()!=2)){if(t.v&&En(t)==4)Zf(t.Ha,0,t);else if(ze(t,"readystatechange"),En(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(C1)[1]||null;if(!i&&K.self&&K.self.location){var s=K.self.location.protocol;i=s.substr(0,s.length-1)}r=!qD.test(i?i.toLowerCase():"")}n=r}if(n)ze(t,"complete"),ze(t,"success");else{t.m=6;try{var o=2<En(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",$1(t)}}finally{Pu(t)}}}}function Pu(t,e){if(t.g){F1(t);const n=t.g,r=t.C[0]?Ml:null;t.g=null,t.C=null,e||ze(t,"ready");try{n.onreadystatechange=r}catch{}}}function F1(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function En(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),zD(e)}};function qg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case M1:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function V1(t){let e="";return Kf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function op(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=V1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):pe(t,e,n))}function _s(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function B1(t){this.Ca=0,this.i=[],this.j=new Tu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=_s("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=_s("baseRetryDelayMs",5e3,t),this.bb=_s("retryDelaySeedMs",1e4,t),this.$a=_s("forwardChannelMaxRetries",2,t),this.ta=_s("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new D1(t&&t.concurrentRequestLimit),this.Fa=new VD,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=B1.prototype;U.ma=8;U.G=1;function ap(t){if(j1(t),t.G==3){var e=t.U++,n=Rn(t.F);pe(n,"SID",t.I),pe(n,"RID",e),pe(n,"TYPE","terminate"),ea(t,n),e=new Yo(t,t.j,e,void 0),e.K=2,e.v=Ru(Rn(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=Y1(e.l,null),e.g.da(e.v)),e.F=Date.now(),Xo(e)}G1(t)}function bu(t){t.g&&(up(t),t.g.cancel(),t.g=null)}function j1(t){bu(t),t.u&&(K.clearTimeout(t.u),t.u=null),jl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function xu(t){P1(t.h)||t.m||(t.m=!0,c1(t.Ja,t),t.C=0)}function WD(t,e){return b1(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Go(et(t.Ja,t,e),W1(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Yo(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=n1(s),r1(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=z1(this,i,e),n=Rn(this.F),pe(n,"RID",t),pe(n,"CVER",22),this.D&&pe(n,"X-HTTP-Session-Id",this.D),ea(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(V1(s)))+"&"+e:this.o&&op(n,this.o,s)),rp(this.h,i),this.Ya&&pe(n,"TYPE","init"),this.O?(pe(n,"$req",e),pe(n,"SID","null"),i.Z=!0,hd(i,n,null)):hd(i,n,e),this.G=2}}else this.G==3&&(t?Hg(this,t):this.i.length==0||P1(this.h)||Hg(this))};function Hg(t,e){var n;e?n=e.m:n=t.U++;const r=Rn(t.F);pe(r,"SID",t.I),pe(r,"RID",n),pe(r,"AID",t.T),ea(t,r),t.o&&t.s&&op(r,t.o,t.s),n=new Yo(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=z1(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),rp(t.h,n),hd(n,r,e)}function ea(t,e){t.ia&&Kf(t.ia,function(n,r){pe(e,r,n)}),t.l&&I1({},function(n,r){pe(e,r,n)})}function z1(t,e,n){n=Math.min(t.i.length,n);var r=t.l?et(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{BD(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function q1(t){t.g||t.u||(t.Z=1,c1(t.Ia,t),t.A=0)}function lp(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Go(et(t.Ia,t),W1(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,H1(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Go(et(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,lt(10),bu(this),H1(this))};function up(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function H1(t){t.g=new Yo(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Rn(t.sa);pe(e,"RID","rpc"),pe(e,"SID",t.I),pe(e,"CI",t.L?"0":"1"),pe(e,"AID",t.T),pe(e,"TYPE","xmlhttp"),ea(t,e),t.o&&t.s&&op(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ru(Rn(e)),n.s=null,n.P=!0,S1(n,t)}U.cb=function(){this.v!=null&&(this.v=null,bu(this),lp(this),lt(19))};function jl(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function K1(t,e){var n=null;if(t.g==e){jl(t),up(t),t.g=null;var r=2}else if(fd(t.h,e))n=e.D,x1(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Iu(),ze(r,new y1(r,n)),xu(t)}else q1(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&WD(t,e)||r==2&&lp(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Rr(t,5);break;case 4:Rr(t,10);break;case 3:Rr(t,6);break;default:Rr(t,2)}}}function W1(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Rr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=et(t.kb,t);n||(n=new Or("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||Vl(n,"https"),Ru(n)),jD(n.toString(),r)}else lt(2);t.G=0,t.l&&t.l.va(e),G1(t),j1(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function G1(t){if(t.G=0,t.la=[],t.l){const e=L1(t.h);(e.length!=0||t.i.length!=0)&&(Lg(t.la,e),Lg(t.la,t.i),t.h.i.length=0,qf(t.i),t.i.length=0),t.l.ua()}}function Q1(t,e,n){var r=n instanceof Or?Rn(n):new Or(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Bl(r,r.m);else{var i=K.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Or(null,void 0);r&&Vl(s,r),e&&(s.g=e),i&&Bl(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&pe(r,n,e),pe(r,"VER",t.ma),ea(t,r),r}function Y1(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Se(new Jo({jb:!0})):new Se(t.ra),e.Ka(t.H),e}function X1(){}U=X1.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function zl(){if(ji&&!(10<=Number(cD)))throw Error("Environmental error: no available transport.")}zl.prototype.g=function(t,e){return new Nt(t,e)};function Nt(t,e){Fe.call(this),this.g=new B1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!$l(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$l(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ss(this)}He(Nt,Fe);Nt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;lt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Q1(t,null,t.V),xu(t)};Nt.prototype.close=function(){ap(this.g)};Nt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Xf(t),t=n);e.i.push(new UD(e.ab++,t)),e.G==3&&xu(e)};Nt.prototype.M=function(){this.g.l=null,delete this.j,ap(this.g),delete this.g,Nt.X.M.call(this)};function J1(t){tp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}He(J1,tp);function Z1(){np.call(this),this.status=1}He(Z1,np);function ss(t){this.g=t}He(ss,X1);ss.prototype.xa=function(){ze(this.g,"a")};ss.prototype.wa=function(t){ze(this.g,new J1(t))};ss.prototype.va=function(t){ze(this.g,new Z1)};ss.prototype.ua=function(){ze(this.g,"b")};zl.prototype.createWebChannel=zl.prototype.g;Nt.prototype.send=Nt.prototype.u;Nt.prototype.open=Nt.prototype.m;Nt.prototype.close=Nt.prototype.close;Cu.NO_ERROR=0;Cu.TIMEOUT=8;Cu.HTTP_ERROR=6;v1.COMPLETE="complete";w1.EventType=Qo;Qo.OPEN="a";Qo.CLOSE="b";Qo.ERROR="c";Qo.MESSAGE="d";Fe.prototype.listen=Fe.prototype.N;Se.prototype.listenOnce=Se.prototype.O;Se.prototype.getLastError=Se.prototype.Oa;Se.prototype.getLastErrorCode=Se.prototype.Ea;Se.prototype.getStatus=Se.prototype.aa;Se.prototype.getResponseJson=Se.prototype.Sa;Se.prototype.getResponseText=Se.prototype.fa;Se.prototype.send=Se.prototype.da;Se.prototype.setWithCredentials=Se.prototype.Ka;var GD=function(){return new zl},QD=function(){return Iu()},jc=Cu,YD=v1,XD=ei,Kg={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},JD=Jo,ba=w1,ZD=Se;const Wg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let os="9.18.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=new Tf("@firebase/firestore");function Gg(){return Gr.logLevel}function F(t,...e){if(Gr.logLevel<=ne.DEBUG){const n=e.map(cp);Gr.debug(`Firestore (${os}): ${t}`,...n)}}function Dn(t,...e){if(Gr.logLevel<=ne.ERROR){const n=e.map(cp);Gr.error(`Firestore (${os}): ${t}`,...n)}}function pd(t,...e){if(Gr.logLevel<=ne.WARN){const n=e.map(cp);Gr.warn(`Firestore (${os}): ${t}`,...n)}}function cp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t="Unexpected state"){const e=`FIRESTORE (${os}) INTERNAL ASSERTION FAILED: `+t;throw Dn(e),new Error(e)}function ue(t,e){t||H()}function G(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class eP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class tP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class nP{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new _n;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new _n,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new _n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new eE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new Ye(e)}}class rP{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ue(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class iP{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new rP(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oP{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string"),this.A=n.token,new sP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=aP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function zi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new xe(0,0))}static max(){return new W(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n,r){n===void 0?n=0:n>e.length&&H(),r===void 0?r=e.length-n:r>e.length-n&&H(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return To.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof To?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class he extends To{construct(e,n,r){return new he(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new he(n)}static emptyPath(){return new he([])}}const lP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends To{construct(e,n,r){return new Ze(e,n,r)}static isValidIdentifier(e){return lP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(he.fromString(e))}static fromName(e){return new V(he.fromString(e).popFirst(5))}static empty(){return new V(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new he(e.slice()))}}function uP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new hr(i,V.empty(),e)}function cP(t){return new hr(t.readTime,t.key,-1)}class hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hr(W.min(),V.empty(),-1)}static max(){return new hr(W.max(),V.empty(),-1)}}function hP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==dP)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function na(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}hp.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Io{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Io("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Io&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ti(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function nE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t){return t==null}function ql(t){return t===0&&1/t==-1/0}function mP(t){return typeof t=="number"&&Number.isInteger(t)&&!ql(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw i instanceof DOMException?new gP("Invalid base64 string: "+i):i}}(e);return new it(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const yP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dr(t){if(ue(!!t),typeof t=="string"){let e=0;const n=yP.exec(t);if(ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function qi(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function iE(t){const e=t.mapValue.fields.__previous_value__;return rE(e)?iE(e):e}function Co(t){const e=dr(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rE(t)?4:vP(t)?9007199254740991:10:H()}function cn(t,e){if(t===e)return!0;const n=Qr(t);if(n!==Qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Co(t).isEqual(Co(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=dr(r.timestampValue),o=dr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return qi(r.bytesValue).isEqual(qi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ne(r.geoPointValue.latitude)===Ne(i.geoPointValue.latitude)&&Ne(r.geoPointValue.longitude)===Ne(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ne(r.integerValue)===Ne(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ne(r.doubleValue),o=Ne(i.doubleValue);return s===o?ql(s)===ql(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return zi(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Qg(s)!==Qg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!cn(s[a],o[a])))return!1;return!0}(t,e);default:return H()}}function No(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function Hi(t,e){if(t===e)return 0;const n=Qr(t),r=Qr(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ne(i.integerValue||i.doubleValue),a=Ne(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Yg(t.timestampValue,e.timestampValue);case 4:return Yg(Co(t),Co(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(i,s){const o=qi(i),a=qi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=re(o[l],a[l]);if(u!==0)return u}return re(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=re(Ne(i.latitude),Ne(s.latitude));return o!==0?o:re(Ne(i.longitude),Ne(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Hi(o[l],a[l]);if(u)return u}return re(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===xa.mapValue&&s===xa.mapValue)return 0;if(i===xa.mapValue)return 1;if(s===xa.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const d=re(a[c],u[c]);if(d!==0)return d;const f=Hi(o[a[c]],l[u[c]]);if(f!==0)return f}return re(a.length,u.length)}(t.mapValue,e.mapValue);default:throw H()}}function Yg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=dr(t),r=dr(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function Ki(t){return md(t)}function md(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=dr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?qi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,V.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=md(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${md(r.fields[a])}`;return s+"}"}(t.mapValue):H();var e,n}function Xg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gd(t){return!!t&&"integerValue"in t}function dp(t){return!!t&&"arrayValue"in t}function Jg(t){return!!t&&"nullValue"in t}function Zg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Za(t){return!!t&&"mapValue"in t}function Ws(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ti(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ws(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ws(t.arrayValue.values[n]);return e}return Object.assign({},t)}function vP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n){this.position=e,this.inclusive=n}}function ey(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=Hi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ty(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{}class Re extends sE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new EP(e,n,r):n==="array-contains"?new kP(e,r):n==="in"?new TP(e,r):n==="not-in"?new IP(e,r):n==="array-contains-any"?new CP(e,r):new Re(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new SP(e,r):new _P(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Hi(n,this.value)):n!==null&&Qr(this.value)===Qr(n)&&this.matchesComparison(Hi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Yt extends sE{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Yt(e,n)}matches(e){return oE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function oE(t){return t.op==="and"}function aE(t){return wP(t)&&oE(t)}function wP(t){for(const e of t.filters)if(e instanceof Yt)return!1;return!0}function yd(t){if(t instanceof Re)return t.field.canonicalString()+t.op.toString()+Ki(t.value);if(aE(t))return t.filters.map(e=>yd(e)).join(",");{const e=t.filters.map(n=>yd(n)).join(",");return`${t.op}(${e})`}}function lE(t,e){return t instanceof Re?function(n,r){return r instanceof Re&&n.op===r.op&&n.field.isEqual(r.field)&&cn(n.value,r.value)}(t,e):t instanceof Yt?function(n,r){return r instanceof Yt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&lE(s,r.filters[o]),!0):!1}(t,e):void H()}function uE(t){return t instanceof Re?function(e){return`${e.field.canonicalString()} ${e.op} ${Ki(e.value)}`}(t):t instanceof Yt?function(e){return e.op.toString()+" {"+e.getFilters().map(uE).join(" ,")+"}"}(t):"Filter"}class EP extends Re{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class SP extends Re{constructor(e,n){super(e,"in",n),this.keys=cE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class _P extends Re{constructor(e,n){super(e,"not-in",n),this.keys=cE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class kP extends Re{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dp(n)&&No(n.arrayValue,this.value)}}class TP extends Re{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&No(this.value.arrayValue,n)}}class IP extends Re{constructor(e,n){super(e,"not-in",n)}matches(e){if(No(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!No(this.value.arrayValue,n)}}class CP extends Re{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>No(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n="asc"){this.field=e,this.dir=n}}function NP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new La(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new La(this.root,e,this.comparator,!1)}getReverseIterator(){return new La(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new La(this.root,e,this.comparator,!0)}}class La{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Be.RED,this.left=i??Be.EMPTY,this.right=s??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Be(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ny(this.data.getIterator())}getIteratorFrom(e){return new ny(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Le(this.comparator);return n.data=e,n}}class ny{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Tt([])}unionWith(e){let n=new Le(Ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Za(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ws(n)}setAll(e){let n=Ze.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ws(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Za(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Za(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ti(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new pt(Ws(this.value))}}function hE(t){const e=[];return ti(t.fields,(n,r)=>{const i=new Ze([n]);if(Za(r)){const s=hE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Tt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Je(e,0,W.min(),W.min(),W.min(),pt.empty(),0)}static newFoundDocument(e,n,r,i){return new Je(e,1,n,W.min(),r,i,0)}static newNoDocument(e,n){return new Je(e,2,n,W.min(),W.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,W.min(),W.min(),pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this._t=null}}function ry(t,e=null,n=[],r=[],i=null,s=null,o=null){return new AP(t,e,n,r,i,s,o)}function fp(t){const e=G(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Lu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ki(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ki(r)).join(",")),e._t=n}return e._t}function pp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!NP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!lE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ty(t.startAt,e.startAt)&&ty(t.endAt,e.endAt)}function vd(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this.gt=null,this.startAt,this.endAt}}function RP(t,e,n,r,i,s,o,a){return new as(t,e,n,r,i,s,o,a)}function mp(t){return new as(t)}function iy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ou(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function dE(t){return t.collectionGroup!==null}function bi(t){const e=G(t);if(e.wt===null){e.wt=[];const n=Ou(e),r=gp(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Pi(n)),e.wt.push(new Pi(Ze.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Pi(Ze.keyField(),s))}}}return e.wt}function Pn(t){const e=G(t);if(!e.gt)if(e.limitType==="F")e.gt=ry(e.path,e.collectionGroup,bi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of bi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Pi(s.field,o))}const r=e.endAt?new Hl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Hl(e.startAt.position,e.startAt.inclusive):null;e.gt=ry(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.gt}function wd(t,e){e.getFirstInequalityField(),Ou(t);const n=t.filters.concat([e]);return new as(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ed(t,e,n){return new as(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Mu(t,e){return pp(Pn(t),Pn(e))&&t.limitType===e.limitType}function fE(t){return`${fp(Pn(t))}|lt:${t.limitType}`}function Sd(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>uE(r)).join(", ")}]`),Lu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ki(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ki(r)).join(",")),`Target(${n})`}(Pn(t))}; limitType=${t.limitType})`}function $u(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):V.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of bi(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=ey(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,bi(n),r)||n.endAt&&!function(i,s,o){const a=ey(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,bi(n),r))}(t,e)}function DP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pE(t){return(e,n)=>{let r=!1;for(const i of bi(t)){const s=PP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function PP(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Hi(a,l):H()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ql(e)?"-0":e}}function gE(t){return{integerValue:""+t}}function bP(t,e){return mP(e)?gE(e):mE(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(){this._=void 0}}function xP(t,e,n){return t instanceof Ao?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ro?vE(t,e):t instanceof Do?wE(t,e):function(r,i){const s=yE(r,i),o=sy(s)+sy(r.It);return gd(s)&&gd(r.It)?gE(o):mE(r.Tt,o)}(t,e)}function LP(t,e,n){return t instanceof Ro?vE(t,e):t instanceof Do?wE(t,e):n}function yE(t,e){return t instanceof Kl?gd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ao extends Uu{}class Ro extends Uu{constructor(e){super(),this.elements=e}}function vE(t,e){const n=EE(e);for(const r of t.elements)n.some(i=>cn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Do extends Uu{constructor(e){super(),this.elements=e}}function wE(t,e){let n=EE(e);for(const r of t.elements)n=n.filter(i=>!cn(i,r));return{arrayValue:{values:n}}}class Kl extends Uu{constructor(e,n){super(),this.Tt=e,this.It=n}}function sy(t){return Ne(t.integerValue||t.doubleValue)}function EE(t){return dp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(e,n){this.field=e,this.transform=n}}function MP(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ro&&r instanceof Ro||n instanceof Do&&r instanceof Do?zi(n.elements,r.elements,cn):n instanceof Kl&&r instanceof Kl?cn(n.It,r.It):n instanceof Ao&&r instanceof Ao}(t.transform,e.transform)}class $P{constructor(e,n){this.version=e,this.transformResults=n}}class Wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function el(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fu{}function SE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new yp(t.key,Wt.none()):new ra(t.key,t.data,Wt.none());{const n=t.data,r=pt.empty();let i=new Le(Ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new wr(t.key,r,new Tt(i.toArray()),Wt.none())}}function UP(t,e,n){t instanceof ra?function(r,i,s){const o=r.value.clone(),a=ay(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof wr?function(r,i,s){if(!el(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=ay(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(_E(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Gs(t,e,n,r){return t instanceof ra?function(i,s,o,a){if(!el(i.precondition,s))return o;const l=i.value.clone(),u=ly(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof wr?function(i,s,o,a){if(!el(i.precondition,s))return o;const l=ly(i.fieldTransforms,a,s),u=s.data;return u.setAll(_E(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return el(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function FP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=yE(r.transform,i||null);s!=null&&(n===null&&(n=pt.empty()),n.set(r.field,s))}return n||null}function oy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&zi(n,r,(i,s)=>MP(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ra extends Fu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class wr extends Fu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function _E(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ay(t,e,n){const r=new Map;ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,LP(o,a,n[i]))}return r}function ly(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,xP(s,o,e))}return r}class yp extends Fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VP extends Fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,ee;function jP(t){switch(t){default:return H();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function kE(t){if(t===void 0)return Dn("GRPC error has no .code"),C.UNKNOWN;switch(t){case Ce.OK:return C.OK;case Ce.CANCELLED:return C.CANCELLED;case Ce.UNKNOWN:return C.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return C.INTERNAL;case Ce.UNAVAILABLE:return C.UNAVAILABLE;case Ce.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Ce.NOT_FOUND:return C.NOT_FOUND;case Ce.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Ce.ABORTED:return C.ABORTED;case Ce.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Ce.DATA_LOSS:return C.DATA_LOSS;default:return H()}}(ee=Ce||(Ce={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ti(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return nE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=new Oe(V.comparator);function bn(){return zP}const TE=new Oe(V.comparator);function xs(...t){let e=TE;for(const n of t)e=e.insert(n.key,n);return e}function IE(t){let e=TE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Dr(){return Qs()}function CE(){return Qs()}function Qs(){return new ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const qP=new Oe(V.comparator),HP=new Le(V.comparator);function X(...t){let e=HP;for(const n of t)e=e.add(n);return e}const KP=new Le(re);function NE(){return KP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ia.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Vu(W.min(),i,NE(),bn(),X())}}class ia{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ia(r,n,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n,r,i){this.Et=e,this.removedTargetIds=n,this.key=r,this.At=i}}class AE{constructor(e,n){this.targetId=e,this.Rt=n}}class RE{constructor(e,n,r=it.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class uy{constructor(){this.Pt=0,this.vt=hy(),this.bt=it.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return this.Pt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.bt=e)}Nt(){let e=X(),n=X(),r=X();return this.vt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:H()}}),new ia(this.bt,this.Vt,e,n,r)}kt(){this.St=!1,this.vt=hy()}$t(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class WP{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=bn(),this.Kt=cy(),this.Gt=new Le(re)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const r=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&r.xt(e.resumeToken);break;case 1:r.Ft(),r.Dt||r.kt(),r.xt(e.resumeToken);break;case 2:r.Ft(),r.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(r.Bt(),r.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),r.xt(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((r,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,r=e.Rt.count,i=this.Xt(n);if(i){const s=i.target;if(vd(s))if(r===0){const o=new V(s.path);this.zt(n,o,Je.newNoDocument(o,W.min()))}else ue(r===1);else this.te(n)!==r&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&vd(a.target)){const l=new V(a.target.path);this.Ut.get(l)!==null||this.ne(o,l)||this.zt(o,l,Je.newNoDocument(l,e))}s.Ct&&(n.set(o,s.Nt()),s.kt())}});let r=X();this.Kt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Vu(e,n,this.Gt,this.Ut,r);return this.Ut=bn(),this.Kt=cy(),this.Gt=new Le(re),i}jt(e,n){if(!this.Jt(e))return;const r=this.ne(e,n.key)?2:0;this.Ht(e).$t(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,r){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.$t(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Ht(e).Ot()}Ht(e){let n=this.qt.get(e);return n||(n=new uy,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new Le(re),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new uy),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function cy(){return new Oe(V.comparator)}function hy(){return new Oe(V.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),QP=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),YP=(()=>({and:"AND",or:"OR"}))();class XP{constructor(e,n){this.databaseId=e,this.yt=n}}function Wl(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function DE(t,e){return t.yt?e.toBase64():e.toUint8Array()}function JP(t,e){return Wl(t,e.toTimestamp())}function un(t){return ue(!!t),W.fromTimestamp(function(e){const n=dr(e);return new xe(n.seconds,n.nanos)}(t))}function vp(t,e){return function(n){return new he(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function PE(t){const e=he.fromString(t);return ue(OE(e)),e}function _d(t,e){return vp(t.databaseId,e.path)}function zc(t,e){const n=PE(e);if(n.get(1)!==t.databaseId.projectId)throw new $(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(bE(n))}function kd(t,e){return vp(t.databaseId,e)}function ZP(t){const e=PE(t);return e.length===4?he.emptyPath():bE(e)}function Td(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bE(t){return ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function dy(t,e,n){return{name:_d(t,e),fields:n.value.mapValue.fields}}function eb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.yt?(ue(u===void 0||typeof u=="string"),it.fromBase64String(u||"")):(ue(u===void 0||u instanceof Uint8Array),it.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?C.UNKNOWN:kE(l.code);return new $(u,l.message||"")}(o);n=new RE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=zc(t,r.document.name),s=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):W.min(),a=new pt({mapValue:{fields:r.document.fields}}),l=Je.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new tl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=zc(t,r.document),s=r.readTime?un(r.readTime):W.min(),o=Je.newNoDocument(i,s),a=r.removedTargetIds||[];n=new tl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=zc(t,r.document),s=r.removedTargetIds||[];n=new tl([],s,i,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new BP(i),o=r.targetId;n=new AE(o,s)}}return n}function tb(t,e){let n;if(e instanceof ra)n={update:dy(t,e.key,e.value)};else if(e instanceof yp)n={delete:_d(t,e.key)};else if(e instanceof wr)n={update:dy(t,e.key,e.data),updateMask:cb(e.fieldMask)};else{if(!(e instanceof VP))return H();n={verify:_d(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ao)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ro)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Do)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Kl)return{fieldPath:s.field.canonicalString(),increment:o.It};throw H()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:JP(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H()}(t,e.precondition)),n}function nb(t,e){return t&&t.length>0?(ue(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?un(r.updateTime):un(i);return s.isEqual(W.min())&&(s=un(i)),new $P(s,r.transformResults||[])}(n,e))):[]}function rb(t,e){return{documents:[kd(t,e.path)]}}function ib(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=kd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=kd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return LE(Yt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ai(c.field),direction:ab(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.yt||Lu(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function sb(t){let e=ZP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const d=xE(c);return d instanceof Yt&&aE(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(d){return new Pi(li(d.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,Lu(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,f=c.values||[];return new Hl(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,f=c.values||[];return new Hl(f,d)}(n.endAt)),RP(e,i,o,s,a,"F",l,u)}function ob(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return H()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function xE(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=li(e.unaryFilter.field);return Re.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=li(e.unaryFilter.field);return Re.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=li(e.unaryFilter.field);return Re.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=li(e.unaryFilter.field);return Re.create(s,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(e){return Re.create(li(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Yt.create(e.compositeFilter.filters.map(n=>xE(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return H()}}(e.compositeFilter.op))}(t):H()}function ab(t){return GP[t]}function lb(t){return QP[t]}function ub(t){return YP[t]}function ai(t){return{fieldPath:t.canonicalString()}}function li(t){return Ze.fromServerFormat(t.fieldPath)}function LE(t){return t instanceof Re?function(e){if(e.op==="=="){if(Zg(e.value))return{unaryFilter:{field:ai(e.field),op:"IS_NAN"}};if(Jg(e.value))return{unaryFilter:{field:ai(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Zg(e.value))return{unaryFilter:{field:ai(e.field),op:"IS_NOT_NAN"}};if(Jg(e.value))return{unaryFilter:{field:ai(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ai(e.field),op:lb(e.op),value:e.value}}}(t):t instanceof Yt?function(e){const n=e.getFilters().map(r=>LE(r));return n.length===1?n[0]:{compositeFilter:{op:ub(e.op),filters:n}}}(t):H()}function cb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function OE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&UP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Gs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Gs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=CE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=SE(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),X())}isEqual(e){return this.batchId===e.batchId&&zi(this.mutations,e.mutations,(n,r)=>oy(n,r))&&zi(this.baseMutations,e.baseMutations,(n,r)=>oy(n,r))}}class wp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length);let i=qP;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new wp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,r,i,s=W.min(),o=W.min(),a=it.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e){this.oe=e}}function pb(t){const e=sb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ed(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(){this.Ze=new gb}addToCollectionParentIndex(e,n){return this.Ze.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(hr.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(hr.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class gb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Le(he.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Le(he.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Vn(){return new Wi(0)}static Sn(){return new Wi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(){this.changes=new ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Gs(r.mutation,i,Tt.empty(),xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,X()).next(()=>r))}getLocalViewOfDocuments(e,n,r=X()){const i=Dr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=xs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,X()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=bn();const o=Qs(),a=Qs();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof wr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Gs(c.mutation,u,c.mutation.getFieldMask(),xe.now())):o.set(u.key,Tt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new vb(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Qs();let i=new Oe((o,a)=>o-a),s=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Tt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||X()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=CE();c.forEach(f=>{if(!s.has(f)){const w=SE(n.get(f),r.get(f));w!==null&&d.set(f,w),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return V.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(Dr());let a=-1,l=s;return o.next(u=>x.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?x.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,X())).next(c=>({batchId:a,changes:IE(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let i=xs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=xs();return this.indexManager.getCollectionParents(e,i).next(o=>x.forEach(o,a=>{const l=function(u,c){return new as(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Je.newInvalidDocument(u)))});let o=xs();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Gs(u.mutation,l,Tt.empty(),xe.now()),$u(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return x.resolve(this.es.get(n))}saveBundleMetadata(e,n){var r;return this.es.set(n.id,{id:(r=n).id,version:r.version,createTime:un(r.createTime)}),x.resolve()}getNamedQuery(e,n){return x.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(r){return{name:r.name,query:pb(r.bundledQuery),readTime:un(r.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(){this.overlays=new Oe(V.comparator),this.ss=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Dr();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ce(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ss.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ss.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=Dr(),s=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Oe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Dr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Dr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return x.resolve(a)}ce(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(r.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new db(n,r));let s=this.ss.get(n);s===void 0&&(s=X(),this.ss.set(n,s)),this.ss.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(){this.rs=new Le(Me.os),this.us=new Le(Me.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const r=new Me(e,n);this.rs=this.rs.add(r),this.us=this.us.add(r)}hs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ls(new Me(e,n))}fs(e,n){e.forEach(r=>this.removeReference(r,n))}ds(e){const n=new V(new he([])),r=new Me(n,e),i=new Me(n,e+1),s=[];return this.us.forEachInRange([r,i],o=>{this.ls(o),s.push(o.key)}),s}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new V(new he([])),r=new Me(n,e),i=new Me(n,e+1);let s=X();return this.us.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Me(e,0),r=this.rs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return V.comparator(e.key,n.key)||re(e.gs,n.gs)}static cs(e,n){return re(e.gs,n.gs)||V.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new Le(Me.os)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hb(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new Me(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ts(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),s=[];return this.ps.forEachInRange([r,i],o=>{const a=this.Is(o.gs);s.push(a)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Le(re);return n.forEach(i=>{const s=new Me(i,0),o=new Me(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([s,o],a=>{r=r.add(a.gs)})}),x.resolve(this.Es(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new Me(new V(s),0);let a=new Le(re);return this.ps.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gs)),!0)},o),x.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(r=>{const i=this.Is(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ps;return x.forEach(n.mutations,i=>{const s=new Me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=r})}Pn(e){}containsKey(e,n){const r=new Me(n,0),i=this.ps.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e){this.Rs=e,this.docs=new Oe(V.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let r=bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Je.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=bn();const o=n.path,a=new V(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||hP(cP(c),r)<=0||(i.has(c.key)||$u(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,n,r,i){H()}Ps(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Tb(this)}getSize(e){return x.resolve(this.size)}}class Tb extends yb{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e){this.persistence=e,this.vs=new ls(n=>fp(n),pp),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.bs=0,this.Vs=new Ep,this.targetCount=0,this.Ss=Wi.Vn()}forEachTarget(e,n){return this.vs.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),x.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Wi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.xn(n),x.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.vs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.vs.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Vs.hs(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Vs.fs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Vs.ws(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new hp(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new Ib(this),this.indexManager=new mb,this.remoteDocumentCache=function(r){return new kb(r)}(r=>this.referenceDelegate.ks(r)),this.Tt=new fb(n),this.$s=new Eb(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Sb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ds[e.toKey()];return r||(r=new _b(n,this.referenceDelegate),this.Ds[e.toKey()]=r),r}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new Nb(this.Cs.next());return this.referenceDelegate.Ms(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Fs(e,n){return x.or(Object.values(this.Ds).map(r=>()=>r.containsKey(e,n)))}}class Nb extends fP{constructor(e){super(),this.currentSequenceNumber=e}}class Sp{constructor(e){this.persistence=e,this.Bs=new Ep,this.Ls=null}static qs(e){return new Sp(e)}get Us(){if(this.Ls)return this.Ls;throw H()}addReference(e,n,r){return this.Bs.addReference(r,n),this.Us.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Bs.removeReference(r,n),this.Us.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),x.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Us.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ms(){this.Ls=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Us,r=>{const i=V.fromPath(r);return this.Ks(e,i).next(s=>{s||n.removeEntry(i,W.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(r=>{r?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return x.or([()=>x.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Fs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ci=r,this.xi=i}static Ni(e,n){let r=X(),i=X();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _p(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(){this.ki=!1}initialize(e,n){this.$i=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Mi(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Fi(e,n))}Mi(e,n){if(iy(n))return x.resolve(null);let r=Pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ed(n,null,"F"),r=Pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=X(...s);return this.$i.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Bi(n,a);return this.Li(n,u,o,l.readTime)?this.Mi(e,Ed(n,null,"F")):this.qi(e,u,n,l)}))})))}Oi(e,n,r,i){return iy(n)||i.isEqual(W.min())?this.Fi(e,n):this.$i.getDocuments(e,r).next(s=>{const o=this.Bi(n,s);return this.Li(n,o,r,i)?this.Fi(e,n):(Gg()<=ne.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Sd(n)),this.qi(e,o,n,uP(i,-1)))})}Bi(e,n){let r=new Le(pE(e));return n.forEach((i,s)=>{$u(e,s)&&(r=r.add(s))}),r}Li(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fi(e,n){return Gg()<=ne.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Sd(n)),this.$i.getDocumentsMatchingQuery(e,n,hr.min())}qi(e,n,r,i){return this.$i.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,n,r,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new Oe(re),this.Gi=new ls(s=>fp(s),pp),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.$s=e.getBundleCache(),this.zi(r)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wb(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function Db(t,e,n,r){return new Rb(t,e,n,r)}async function ME(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=X();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Wi:u,removedBatchIds:o,addedBatchIds:a}))})})}function Pb(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,d=c.keys();let f=x.resolve();return d.forEach(w=>{f=f.next(()=>u.getEntry(a,w)).next(S=>{const y=l.docVersions.get(w);ue(y!==null),S.version.compareTo(y)<0&&(c.applyToRemoteDocument(S,l),S.isValidDocument()&&(S.setReadTime(l.commitVersion),u.addEntry(S)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=X();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function $E(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function bb(t,e){const n=G(t),r=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((c,d)=>{const f=i.get(d);if(!f)return;a.push(n.Ns.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Ns.addMatchingKeys(s,c.addedDocuments,d)));let w=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(d)?w=w.withResumeToken(it.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):c.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(c.resumeToken,r)),i=i.insert(d,w),function(S,y,I){return S.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(f,w,c)&&a.push(n.Ns.updateTargetData(s,w))});let l=bn(),u=X();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(xb(s,o,e.documentUpdates).next(c=>{l=c.Hi,u=c.Ji})),!r.isEqual(W.min())){const c=n.Ns.getLastRemoteSnapshotVersion(s).next(d=>n.Ns.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return x.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ki=i,s))}function xb(t,e,n){let r=X(),i=X();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=bn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Hi:o,Ji:i}})}function Lb(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ob(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ns.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.Ns.allocateTargetId(r).next(o=>(i=new Mr(e,o,0,r.currentSequenceNumber),n.Ns.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ki.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(r.targetId,r),n.Gi.set(e,r.targetId)),r})}async function Id(t,e,n){const r=G(t),i=r.Ki.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!na(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ki=r.Ki.remove(e),r.Gi.delete(i.target)}function fy(t,e,n){const r=G(t);let i=W.min(),s=X();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=G(a),d=c.Gi.get(u);return d!==void 0?x.resolve(c.Ki.get(d)):c.Ns.getTargetData(l,u)}(r,o,Pn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ns.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Ui.getDocumentsMatchingQuery(o,e,n?i:W.min(),n?s:X())).next(a=>(Mb(r,DP(e),a),{documents:a,Yi:s})))}function Mb(t,e,n){let r=t.Qi.get(e)||W.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Qi.set(e,r)}class py{constructor(){this.activeTargetIds=NE()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $b{constructor(){this.Ur=new py,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,r){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new py,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oa=null;function qc(){return Oa===null?Oa=268435456+Math.round(2147483648*Math.random()):Oa++,"0x"+Oa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="WebChannelConnection";class Bb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,r,i,s){const o=qc(),a=this.fo(e,n);F("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this._o(l,i,s),this.wo(e,a,l,r).then(u=>(F("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw pd("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}mo(e,n,r,i,s,o){return this.lo(e,n,r,i,s)}_o(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+os,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}fo(e,n){const r=Fb[e];return`${this.co}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,r,i){const s=qc();return new Promise((o,a)=>{const l=new ZD;l.setWithCredentials(!0),l.listenOnce(YD.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case jc.NO_ERROR:const c=l.getResponseJson();F(Qe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case jc.TIMEOUT:F(Qe,`RPC '${e}' ${s} timed out`),a(new $(C.DEADLINE_EXCEEDED,"Request time out"));break;case jc.HTTP_ERROR:const d=l.getStatus();if(F(Qe,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const w=f==null?void 0:f.error;if(w&&w.status&&w.message){const S=function(y){const I=y.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(I)>=0?I:C.UNKNOWN}(w.status);a(new $(S,w.message))}else a(new $(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new $(C.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{F(Qe,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);F(Qe,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}yo(e,n,r){const i=qc(),s=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=GD(),a=QD(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new JD({})),this._o(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");F(Qe,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let d=!1,f=!1;const w=new Vb({Yr:y=>{f?F(Qe,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(d||(F(Qe,`Opening RPC '${e}' stream ${i} transport.`),c.open(),d=!0),F(Qe,`RPC '${e}' stream ${i} sending:`,y),c.send(y))},Zr:()=>c.close()}),S=(y,I,g)=>{y.listen(I,p=>{try{g(p)}catch(m){setTimeout(()=>{throw m},0)}})};return S(c,ba.EventType.OPEN,()=>{f||F(Qe,`RPC '${e}' stream ${i} transport opened.`)}),S(c,ba.EventType.CLOSE,()=>{f||(f=!0,F(Qe,`RPC '${e}' stream ${i} transport closed`),w.oo())}),S(c,ba.EventType.ERROR,y=>{f||(f=!0,pd(Qe,`RPC '${e}' stream ${i} transport errored:`,y),w.oo(new $(C.UNAVAILABLE,"The operation could not be completed")))}),S(c,ba.EventType.MESSAGE,y=>{var I;if(!f){const g=y.data[0];ue(!!g);const p=g,m=p.error||((I=p[0])===null||I===void 0?void 0:I.error);if(m){F(Qe,`RPC '${e}' stream ${i} received error:`,m);const _=m.status;let R=function(A){const L=Ce[A];if(L!==void 0)return kE(L)}(_),N=m.message;R===void 0&&(R=C.INTERNAL,N="Unknown error status: "+_+" with message "+m.message),f=!0,w.oo(new $(R,N)),c.close()}else F(Qe,`RPC '${e}' stream ${i} received:`,g),w.uo(g)}}),S(a,XD.STAT_EVENT,y=>{y.stat===Kg.PROXY?F(Qe,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===Kg.NOPROXY&&F(Qe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.ro()},0),w}}function Hc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t){return new XP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ys=e,this.timerId=n,this.po=r,this.Io=i,this.To=s,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.bo()),r=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,n,r,i,s,o,a,l){this.Ys=e,this.So=r,this.Do=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new UE(e,n)}$o(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(Dn(n.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Co===n&&this.jo(r,i)},r=>{e(()=>{const i=new $(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.zo(i)})})}jo(e,n){const r=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{r(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{r(()=>this.zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jb extends FE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.Tt=s}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=eb(this.Tt,e),r=function(i){if(!("targetChange"in i))return W.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?W.min():s.readTime?un(s.readTime):W.min()}(e);return this.listener.Ho(n,r)}Jo(e){const n={};n.database=Td(this.Tt),n.addTarget=function(i,s){let o;const a=s.target;return o=vd(a)?{documents:rb(i,a)}:{query:ib(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=DE(i,s.resumeToken):s.snapshotVersion.compareTo(W.min())>0&&(o.readTime=Wl(i,s.snapshotVersion.toTimestamp())),o}(this.Tt,e);const r=ob(this.Tt,e);r&&(n.labels=r),this.qo(n)}Yo(e){const n={};n.database=Td(this.Tt),n.removeTarget=e,this.qo(n)}}class zb extends FE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.Tt=s,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=nb(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.eu(r,n)}return ue(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Td(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>tb(this.Tt,r))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new $(C.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.lo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(C.UNKNOWN,i.toString())})}mo(e,n,r,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.mo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(C.UNKNOWN,s.toString())})}terminate(){this.iu=!0}}class Hb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Dn(n),this.cu=!1):F("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=s,this.yu.Gr(o=>{r.enqueueAndForget(async()=>{ni(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=G(a);l.mu.add(4),await sa(l),l.pu.set("Unknown"),l.mu.delete(4),await ju(l)}(this))})}),this.pu=new Hb(r,i)}}async function ju(t){if(ni(t))for(const e of t.gu)await e(!0)}async function sa(t){for(const e of t.gu)await e(!1)}function VE(t,e){const n=G(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Ip(n)?Tp(n):us(n).Mo()&&kp(n,e))}function BE(t,e){const n=G(t),r=us(n);n.wu.delete(e),r.Mo()&&jE(n,e),n.wu.size===0&&(r.Mo()?r.Bo():ni(n)&&n.pu.set("Unknown"))}function kp(t,e){t.Iu.Ot(e.targetId),us(t).Jo(e)}function jE(t,e){t.Iu.Ot(e),us(t).Yo(e)}function Tp(t){t.Iu=new WP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),us(t).start(),t.pu.au()}function Ip(t){return ni(t)&&!us(t).$o()&&t.wu.size>0}function ni(t){return G(t).mu.size===0}function zE(t){t.Iu=void 0}async function Wb(t){t.wu.forEach((e,n)=>{kp(t,e)})}async function Gb(t,e){zE(t),Ip(t)?(t.pu.fu(e),Tp(t)):t.pu.set("Unknown")}async function Qb(t,e,n){if(t.pu.set("Online"),e instanceof RE&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.wu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.wu.delete(o),r.Iu.removeTarget(o))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gl(t,r)}else if(e instanceof tl?t.Iu.Qt(e):e instanceof AE?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(W.min()))try{const r=await $E(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Iu.ee(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.wu.get(l);u&&i.wu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.wu.get(a);if(!l)return;i.wu.set(a,l.withResumeToken(it.EMPTY_BYTE_STRING,l.snapshotVersion)),jE(i,a);const u=new Mr(l.target,a,1,l.sequenceNumber);kp(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Gl(t,r)}}async function Gl(t,e,n){if(!na(e))throw e;t.mu.add(1),await sa(t),t.pu.set("Offline"),n||(n=()=>$E(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await ju(t)})}function qE(t,e){return e().catch(n=>Gl(t,n,e))}async function zu(t){const e=G(t),n=fr(e);let r=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;Yb(e);)try{const i=await Lb(e.localStore,r);if(i===null){e._u.length===0&&n.Bo();break}r=i.batchId,Xb(e,i)}catch(i){await Gl(e,i)}HE(e)&&KE(e)}function Yb(t){return ni(t)&&t._u.length<10}function Xb(t,e){t._u.push(e);const n=fr(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function HE(t){return ni(t)&&!fr(t).$o()&&t._u.length>0}function KE(t){fr(t).start()}async function Jb(t){fr(t).su()}async function Zb(t){const e=fr(t);for(const n of t._u)e.tu(n.mutations)}async function ex(t,e,n){const r=t._u.shift(),i=wp.from(r,e,n);await qE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await zu(t)}async function tx(t,e){e&&fr(t).Xo&&await async function(n,r){if(i=r.code,jP(i)&&i!==C.ABORTED){const s=n._u.shift();fr(n).Fo(),await qE(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await zu(n)}var i}(t,e),HE(t)&&KE(t)}async function gy(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=ni(n);n.mu.add(3),await sa(n),r&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await ju(n)}async function nx(t,e){const n=G(t);e?(n.mu.delete(2),await ju(n)):e||(n.mu.add(2),await sa(n),n.pu.set("Unknown"))}function us(t){return t.Tu||(t.Tu=function(e,n,r){const i=G(e);return i.ru(),new jb(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(t.datastore,t.asyncQueue,{Xr:Wb.bind(null,t),no:Gb.bind(null,t),Ho:Qb.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.Fo(),Ip(t)?Tp(t):t.pu.set("Unknown")):(await t.Tu.stop(),zE(t))})),t.Tu}function fr(t){return t.Eu||(t.Eu=function(e,n,r){const i=G(e);return i.ru(),new zb(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(t.datastore,t.asyncQueue,{Xr:Jb.bind(null,t),no:tx.bind(null,t),nu:Zb.bind(null,t),eu:ex.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.Fo(),await zu(t)):(await t.Eu.stop(),t._u.length>0&&(F("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new _n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Cp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Np(t,e){if(Dn("AsyncQueue",`${e}: ${t}`),na(t))return new $(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=xs(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new xi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new xi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(){this.Au=new Oe(V.comparator)}track(e){const n=e.doc.key,r=this.Au.get(n);r?e.type!==0&&r.type===3?this.Au=this.Au.insert(n,e):e.type===3&&r.type!==1?this.Au=this.Au.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Au=this.Au.remove(n):e.type===1&&r.type===2?this.Au=this.Au.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):H():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,r)=>{e.push(r)}),e}}class Gi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Gi(e,n,xi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(){this.Pu=void 0,this.listeners=[]}}class ix{constructor(){this.queries=new ls(e=>fE(e),Mu),this.onlineState="Unknown",this.vu=new Set}}async function WE(t,e){const n=G(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new rx),i)try{s.Pu=await n.onListen(r)}catch(o){const a=Np(o,`Initialization of query '${Sd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Pu&&e.Vu(s.Pu)&&Ap(n)}async function GE(t,e){const n=G(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function sx(t,e){const n=G(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Vu(i)&&(r=!0);o.Pu=i}}r&&Ap(n)}function ox(t,e,n){const r=G(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Ap(t){t.vu.forEach(e=>{e.next()})}class QE{constructor(e,n,r){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=r||{}}Vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Gi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.$u||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e){this.key=e}}class XE{constructor(e){this.key=e}}class ax{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=X(),this.mutatedKeys=X(),this.ju=pE(e),this.zu=new xi(this.ju)}get Wu(){return this.Ku}Hu(e,n){const r=n?n.Ju:new yy,i=n?n.zu:this.zu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const f=i.get(c),w=$u(this.query,d)?d:null,S=!!f&&this.mutatedKeys.has(f.key),y=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let I=!1;f&&w?f.data.isEqual(w.data)?S!==y&&(r.track({type:3,doc:w}),I=!0):this.Yu(f,w)||(r.track({type:2,doc:w}),I=!0,(l&&this.ju(w,l)>0||u&&this.ju(w,u)<0)&&(a=!0)):!f&&w?(r.track({type:0,doc:w}),I=!0):f&&!w&&(r.track({type:1,doc:f}),I=!0,(l||u)&&(a=!0)),I&&(w?(o=o.add(w),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{zu:o,Ju:r,Li:a,mutatedKeys:s}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const s=e.Ju.Ru();s.sort((u,c)=>function(d,f){const w=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return w(d)-w(f)}(u.type,c.type)||this.ju(u.doc,c.doc)),this.Zu(r);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,l=a!==this.Gu;return this.Gu=a,s.length!==0||l?{snapshot:new Gi(this.query,e.zu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new yy,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=X(),this.zu.forEach(r=>{this.ec(r.key)&&(this.Qu=this.Qu.add(r.key))});const n=[];return e.forEach(r=>{this.Qu.has(r)||n.push(new XE(r))}),this.Qu.forEach(r=>{e.has(r)||n.push(new YE(r))}),n}nc(e){this.Ku=e.Yi,this.Qu=X();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Gi.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class lx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ux{constructor(e){this.key=e,this.ic=!1}}class cx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new ls(a=>fE(a),Mu),this.uc=new Map,this.cc=new Set,this.ac=new Oe(V.comparator),this.hc=new Map,this.lc=new Ep,this.fc={},this.dc=new Map,this._c=Wi.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function hx(t,e){const n=Sx(t);let r,i;const s=n.oc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.sc();else{const o=await Ob(n.localStore,Pn(e));n.isPrimaryClient&&VE(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await dx(n,e,r,a==="current",o.resumeToken)}return i}async function dx(t,e,n,r,i){t.mc=(d,f,w)=>async function(S,y,I,g){let p=y.view.Hu(I);p.Li&&(p=await fy(S.localStore,y.query,!1).then(({documents:R})=>y.view.Hu(R,p)));const m=g&&g.targetChanges.get(y.targetId),_=y.view.applyChanges(p,S.isPrimaryClient,m);return wy(S,y.targetId,_.tc),_.snapshot}(t,d,f,w);const s=await fy(t.localStore,e,!0),o=new ax(e,s.Yi),a=o.Hu(s.documents),l=ia.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);wy(t,n,u.tc);const c=new lx(e,n,o);return t.oc.set(e,c),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),u.snapshot}async function fx(t,e){const n=G(t),r=n.oc.get(e),i=n.uc.get(r.targetId);if(i.length>1)return n.uc.set(r.targetId,i.filter(s=>!Mu(s,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Id(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),BE(n.remoteStore,r.targetId),Cd(n,r.targetId)}).catch(ta)):(Cd(n,r.targetId),await Id(n.localStore,r.targetId,!0))}async function px(t,e,n){const r=_x(t);try{const i=await function(s,o){const a=G(s),l=xe.now(),u=o.reduce((f,w)=>f.add(w.key),X());let c,d;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let w=bn(),S=X();return a.ji.getEntries(f,u).next(y=>{w=y,w.forEach((I,g)=>{g.isValidDocument()||(S=S.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,w)).next(y=>{c=y;const I=[];for(const g of o){const p=FP(g,c.get(g.key).overlayedDocument);p!=null&&I.push(new wr(g.key,p,hE(p.value.mapValue),Wt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,I,o)}).next(y=>{d=y;const I=y.applyToLocalDocumentSet(c,S);return a.documentOverlayCache.saveOverlays(f,y.batchId,I)})}).then(()=>({batchId:d.batchId,changes:IE(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.fc[s.currentUser.toKey()];l||(l=new Oe(re)),l=l.insert(o,a),s.fc[s.currentUser.toKey()]=l}(r,i.batchId,n),await oa(r,i.changes),await zu(r.remoteStore)}catch(i){const s=Np(i,"Failed to persist write");n.reject(s)}}async function JE(t,e){const n=G(t);try{const r=await bb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.hc.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?ue(o.ic):i.removedDocuments.size>0&&(ue(o.ic),o.ic=!1))}),await oa(n,r,e)}catch(r){await ta(r)}}function vy(t,e,n){const r=G(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.oc.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=G(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const d of c.listeners)d.bu(o)&&(l=!0)}),l&&Ap(a)}(r.eventManager,e),i.length&&r.rc.Ho(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mx(t,e,n){const r=G(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.hc.get(e),s=i&&i.key;if(s){let o=new Oe(V.comparator);o=o.insert(s,Je.newNoDocument(s,W.min()));const a=X().add(s),l=new Vu(W.min(),new Map,new Le(re),o,a);await JE(r,l),r.ac=r.ac.remove(s),r.hc.delete(e),Rp(r)}else await Id(r.localStore,e,!1).then(()=>Cd(r,e,n)).catch(ta)}async function gx(t,e){const n=G(t),r=e.batch.batchId;try{const i=await Pb(n.localStore,e);eS(n,r,null),ZE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await oa(n,i)}catch(i){await ta(i)}}async function yx(t,e,n){const r=G(t);try{const i=await function(s,o){const a=G(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ue(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);eS(r,e,n),ZE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await oa(r,i)}catch(i){await ta(i)}}function ZE(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function eS(t,e,n){const r=G(t);let i=r.fc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fc[r.currentUser.toKey()]=i}}function Cd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.uc.get(e))t.oc.delete(r),n&&t.rc.gc(r,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(r=>{t.lc.containsKey(r)||tS(t,r)})}function tS(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(BE(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Rp(t))}function wy(t,e,n){for(const r of n)r instanceof YE?(t.lc.addReference(r.key,e),vx(t,r)):r instanceof XE?(F("SyncEngine","Document no longer in limbo: "+r.key),t.lc.removeReference(r.key,e),t.lc.containsKey(r.key)||tS(t,r.key)):H()}function vx(t,e){const n=e.key,r=n.path.canonicalString();t.ac.get(n)||t.cc.has(r)||(F("SyncEngine","New document in limbo: "+n),t.cc.add(r),Rp(t))}function Rp(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new V(he.fromString(e)),r=t._c.next();t.hc.set(r,new ux(n)),t.ac=t.ac.insert(n,r),VE(t.remoteStore,new Mr(Pn(mp(n.path)),r,2,hp.at))}}async function oa(t,e,n){const r=G(t),i=[],s=[],o=[];r.oc.isEmpty()||(r.oc.forEach((a,l)=>{o.push(r.mc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=_p.Ni(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.rc.Ho(i),await async function(a,l){const u=G(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>x.forEach(l,d=>x.forEach(d.Ci,f=>u.persistence.referenceDelegate.addReference(c,d.targetId,f)).next(()=>x.forEach(d.xi,f=>u.persistence.referenceDelegate.removeReference(c,d.targetId,f)))))}catch(c){if(!na(c))throw c;F("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const d=c.targetId;if(!c.fromCache){const f=u.Ki.get(d),w=f.snapshotVersion,S=f.withLastLimboFreeSnapshotVersion(w);u.Ki=u.Ki.insert(d,S)}}}(r.localStore,s))}async function wx(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await ME(n.localStore,e);n.currentUser=e,function(i,s){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new $(C.CANCELLED,s))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await oa(n,r.Wi)}}function Ex(t,e){const n=G(t),r=n.hc.get(e);if(r&&r.ic)return X().add(r.key);{let i=X();const s=n.uc.get(e);if(!s)return i;for(const o of s){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function Sx(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=JE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ex.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mx.bind(null,e),e.rc.Ho=sx.bind(null,e.eventManager),e.rc.gc=ox.bind(null,e.eventManager),e}function _x(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yx.bind(null,e),e}class kx{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Bu(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return Db(this.persistence,new Ab,e.initialUser,this.Tt)}Tc(e){return new Cb(Sp.qs,this.Tt)}Ic(e){return new $b}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Tx{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wx.bind(null,this.syncEngine),await nx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ix}createDatastore(e){const n=Bu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new Bb(i));var i;return function(s,o,a,l){return new qb(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>vy(this.syncEngine,a,0),o=my.C()?new my:new Ub,new Kb(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new cx(r,i,s,o,a,l);return u&&(c.wc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=G(e);F("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await sa(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Dn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ye.UNAUTHENTICATED,this.clientId=tE.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{F("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(F("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Np(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Cx(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ME(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Nx(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ax(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>gy(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>gy(e.remoteStore,s)),t.onlineComponents=e}async function Ax(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await Cx(t,new kx)),t.offlineComponents}async function rS(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await Nx(t,new Tx)),t.onlineComponents}function Rx(t){return rS(t).then(e=>e.syncEngine)}async function iS(t){const e=await rS(t),n=e.eventManager;return n.onListen=hx.bind(null,e.syncEngine),n.onUnlisten=fx.bind(null,e.syncEngine),n}function Dx(t,e,n={}){const r=new _n;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new nS({next:d=>{s.enqueueAndForget(()=>GE(i,c));const f=d.docs.has(o);!f&&d.fromCache?l.reject(new $(C.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&a&&a.source==="server"?l.reject(new $(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new QE(mp(o.path),u,{includeMetadataChanges:!0,$u:!0});return WE(i,c)}(await iS(t),t.asyncQueue,e,n,r)),r.promise}function Px(t,e,n={}){const r=new _n;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new nS({next:d=>{s.enqueueAndForget(()=>GE(i,c)),d.fromCache&&a.source==="server"?l.reject(new $(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new QE(o,u,{includeMetadataChanges:!0,$u:!0});return WE(i,c)}(await iS(t),t.asyncQueue,e,n,r)),r.promise}const Ey=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(t,e,n){if(!n)throw new $(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bx(t,e,n,r){if(e===!0&&r===!0)throw new $(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sy(t){if(!V.isDocumentKey(t))throw new $(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _y(t){if(V.isDocumentKey(t))throw new $(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function xn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qu(t);throw new $(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,bx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ky({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ky(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new eP;switch(n.type){case"gapi":const r=n.client;return new iP(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new $(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ey.get(e);n&&(F("ComponentProvider","Removing Datastore"),Ey.delete(e),n.terminate())}(this),Promise.resolve()}}function xx(t,e,n,r={}){var i;const s=(t=xn(t,Hu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&pd("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Ye.MOCK_USER;else{o=Xw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new $(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ye(l)}t._authCredentials=new tP(new eE(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class ri{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ri(this.firestore,e,this._query)}}class ar extends ri{constructor(e,n,r){super(e,n,mp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new V(e))}withConverter(e){return new ar(this.firestore,e,this._path)}}function Ie(t,e,...n){if(t=me(t),sS("collection","path",e),t instanceof Hu){const r=he.fromString(e,...n);return _y(r),new ar(t,null,r)}{if(!(t instanceof wt||t instanceof ar))throw new $(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return _y(r),new ar(t.firestore,null,r)}}function kn(t,e,...n){if(t=me(t),arguments.length===1&&(e=tE.R()),sS("doc","path",e),t instanceof Hu){const r=he.fromString(e,...n);return Sy(r),new wt(t,null,new V(r))}{if(!(t instanceof wt||t instanceof ar))throw new $(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return Sy(r),new wt(t.firestore,t instanceof ar?t.converter:null,new V(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new UE(this,"async_queue_retry"),this.Hc=()=>{const n=Hc();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Hc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Hc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new _n;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!na(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(r=>{this.Qc=r,this.jc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Dn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.jc=!1,r))));return this.qc=n,n}enqueueAfterDelay(e,n,r){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=Cp.createAndSchedule(this,e,n,r,s=>this.Xc(s));return this.Gc.push(i),i}Jc(){this.Qc&&H()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}class cs extends Hu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Lx,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oS(this),this._firestoreClient.terminate()}}function Ox(t,e){const n=typeof t=="object"?t:Cf(),r=typeof t=="string"?t:e||"(default)",i=mu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Qw("firestore");s&&xx(i,...s)}return i}function Dp(t){return t._firestoreClient||oS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function oS(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new pP(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ix(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qi(it.fromBase64String(e))}catch(n){throw new $(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qi(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx=/^__.*__$/;class $x{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ra(e,this.data,n,this.fieldTransforms)}}class aS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new wr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function lS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class bp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.Tt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ia(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new bp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:r,ca:!1});return i.aa(e),i}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:r,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Ql(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(lS(this.ra)&&Mx.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class Ux{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=r||Bu(e)}wa(e,n,r,i=!1){return new bp({ra:e,methodName:n,_a:r,path:Ze.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function xp(t){const e=t._freezeSettings(),n=Bu(t._databaseId);return new Ux(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Fx(t,e,n,r,i,s={}){const o=t.wa(s.merge||s.mergeFields?2:0,e,n,i);Op("Data must be an object, but it was:",o,r);const a=uS(r,o);let l,u;if(s.merge)l=new Tt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const f=Nd(e,d,n);if(!o.contains(f))throw new $(C.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);hS(c,f)||c.push(f)}l=new Tt(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new $x(new pt(a),l,u)}class Gu extends Wu{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gu}}class Lp extends Wu{_toFieldTransform(e){return new OP(e.path,new Ao)}isEqual(e){return e instanceof Lp}}function Vx(t,e,n,r){const i=t.wa(1,e,n);Op("Data must be an object, but it was:",i,r);const s=[],o=pt.empty();ti(r,(l,u)=>{const c=Mp(e,l,n);u=me(u);const d=i.ha(c);if(u instanceof Gu)s.push(c);else{const f=aa(u,d);f!=null&&(s.push(c),o.set(c,f))}});const a=new Tt(s);return new aS(o,a,i.fieldTransforms)}function Bx(t,e,n,r,i,s){const o=t.wa(1,e,n),a=[Nd(e,r,n)],l=[i];if(s.length%2!=0)throw new $(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Nd(e,s[f])),l.push(s[f+1]);const u=[],c=pt.empty();for(let f=a.length-1;f>=0;--f)if(!hS(u,a[f])){const w=a[f];let S=l[f];S=me(S);const y=o.ha(w);if(S instanceof Gu)u.push(w);else{const I=aa(S,y);I!=null&&(u.push(w),c.set(w,I))}}const d=new Tt(u);return new aS(c,d,o.fieldTransforms)}function jx(t,e,n,r=!1){return aa(n,t.wa(r?4:3,e))}function aa(t,e){if(cS(t=me(t)))return Op("Unsupported field value:",e,t),uS(t,e);if(t instanceof Wu)return function(n,r){if(!lS(r.ra))throw r.fa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=aa(o,r.la(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=me(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return bP(r.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=xe.fromDate(n);return{timestampValue:Wl(r.Tt,i)}}if(n instanceof xe){const i=new xe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Wl(r.Tt,i)}}if(n instanceof Pp)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Qi)return{bytesValue:DE(r.Tt,n._byteString)};if(n instanceof wt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:vp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.fa(`Unsupported field value: ${qu(n)}`)}(t,e)}function uS(t,e){const n={};return nE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ti(t,(r,i)=>{const s=aa(i,e.ua(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function cS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof Pp||t instanceof Qi||t instanceof wt||t instanceof Wu)}function Op(t,e,n){if(!cS(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=qu(n);throw r==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+r)}}function Nd(t,e,n){if((e=me(e))instanceof Ku)return e._internalPath;if(typeof e=="string")return Mp(t,e);throw Ql("Field path arguments must be of type string or ",t,!1,void 0,n)}const zx=new RegExp("[~\\*/\\[\\]]");function Mp(t,e,n){if(e.search(zx)>=0)throw Ql(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ku(...e.split("."))._internalPath}catch{throw Ql(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ql(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new $(C.INVALID_ARGUMENT,a+t+l)}function hS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qx extends dS{data(){return super.data()}}function Qu(t,e){return typeof e=="string"?Mp(t,e):e instanceof Ku?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $p{}class fS extends $p{}function St(t,e,...n){let r=[];e instanceof $p&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Up).length,o=i.filter(a=>a instanceof Yu).length;if(s>1||s>0&&o>0)throw new $(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Yu extends fS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Yu(e,n,r)}_apply(e){const n=this._parse(e);return pS(e._query,n),new ri(e.firestore,e.converter,wd(e._query,n))}_parse(e){const n=xp(e.firestore);return function(i,s,o,a,l,u,c){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new $(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Iy(c,u);const f=[];for(const w of c)f.push(Ty(a,i,w));d={arrayValue:{values:f}}}else d=Ty(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Iy(c,u),d=jx(o,s,c,u==="in"||u==="not-in");return Re.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function xt(t,e,n){const r=e,i=Qu("where",t);return Yu._create(i,r,n)}class Up extends $p{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Up(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Yt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)pS(s,a),s=wd(s,a)}(e._query,n),new ri(e.firestore,e.converter,wd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Fp extends fS{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Fp(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new $(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new $(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Pi(i,s);return function(a,l){if(gp(a)===null){const u=Ou(a);u!==null&&mS(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new ri(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new as(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Kx(t,e="asc"){const n=e,r=Qu("orderBy",t);return Fp._create(r,n)}function Ty(t,e,n){if(typeof(n=me(n))=="string"){if(n==="")throw new $(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dE(e)&&n.indexOf("/")!==-1)throw new $(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(he.fromString(n));if(!V.isDocumentKey(r))throw new $(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xg(t,new V(r))}if(n instanceof wt)return Xg(t,n._key);throw new $(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qu(n)}.`)}function Iy(t,e){if(!Array.isArray(t)||t.length===0)throw new $(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pS(t,e){if(e.isInequality()){const r=Ou(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new $(C.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=gp(t);s!==null&&mS(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function mS(t,e,n){if(!n.isEqual(e))throw new $(C.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Wx{convertValue(e,n="none"){switch(Qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(qi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){const r={};return ti(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Pp(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=iE(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Co(e));default:return null}}convertTimestamp(e){const n=dr(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=he.fromString(e);ue(OE(r));const i=new Io(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(n)||Dn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gS extends dS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new nl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Qu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class nl extends gS{data(e={}){return super.data(e)}}class Qx{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ls(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new nl(this._firestore,this._userDataWriter,r.key,r,new Ls(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new nl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ls(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new nl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ls(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:Yx(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Yx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(t){t=xn(t,wt);const e=xn(t.firestore,cs);return Dx(Dp(e),t._key).then(n=>Jx(e,t,n))}class yS extends Wx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function at(t){t=xn(t,ri);const e=xn(t.firestore,cs),n=Dp(e),r=new yS(e);return Hx(t._query),Px(n,t._query).then(i=>new Qx(e,r,t,i))}function Po(t,e,n,...r){t=xn(t,wt);const i=xn(t.firestore,cs),s=xp(i);let o;return o=typeof(e=me(e))=="string"||e instanceof Ku?Bx(s,"updateDoc",t._key,e,n,r):Vx(s,"updateDoc",t._key,e),Vp(i,[o.toMutation(t._key,Wt.exists(!0))])}function vS(t){return Vp(xn(t.firestore,cs),[new yp(t._key,Wt.none())])}function hs(t,e){const n=xn(t.firestore,cs),r=kn(t),i=Gx(t.converter,e);return Vp(n,[Fx(xp(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Wt.exists(!1))]).then(()=>r)}function Vp(t,e){return function(n,r){const i=new _n;return n.asyncQueue.enqueueAndForget(async()=>px(await Rx(n),r,i)),i.promise}(Dp(t),e)}function Jx(t,e,n){const r=n.docs.get(e._key),i=new yS(t);return new gS(t,i,e._key,r,new Ls(n.hasPendingWrites,n.fromCache),e.converter)}function Xu(){return new Lp("serverTimestamp")}(function(t,e=!0){(function(n){os=n})(ts),zr(new cr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new cs(new nP(n.getProvider("auth-internal")),new oP(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new $(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Io(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),on(Wg,"3.9.0",t),on(Wg,"3.9.0","esm2017")})();const Zx={apiKey:"AIzaSyBSL-lj1EFQZhWbxcQ8kLx70H7eKqrKe2o",authDomain:"booking-15a0f.firebaseapp.com",projectId:"booking-15a0f",storageBucket:"booking-15a0f.appspot.com",messagingSenderId:"375275740498",appId:"1:375275740498:web:538d5263dfd6a88cc4ae8b"},eL=e0(Zx),Q=VA(eL),ie=Ox(),Yi=GR();/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var wS=rL,Cy=iL,tL=decodeURIComponent,nL=encodeURIComponent,Ma=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function rL(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");for(var n={},r=e||{},i=t.split(";"),s=r.decode||tL,o=0;o<i.length;o++){var a=i[o],l=a.indexOf("=");if(!(l<0)){var u=a.substring(0,l).trim();if(n[u]==null){var c=a.substring(l+1,a.length).trim();c[0]==='"'&&(c=c.slice(1,-1)),n[u]=sL(c,s)}}}return n}function iL(t,e,n){var r=n||{},i=r.encode||nL;if(typeof i!="function")throw new TypeError("option encode is invalid");if(!Ma.test(t))throw new TypeError("argument name is invalid");var s=i(e);if(s&&!Ma.test(s))throw new TypeError("argument val is invalid");var o=t+"="+s;if(r.maxAge!=null){var a=r.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!Ma.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!Ma.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.sameSite){var l=typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite;switch(l){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return o}function sL(t,e){try{return e(t)}catch{return t}}function oL(){return typeof document=="object"&&typeof document.cookie=="string"}function aL(t,e){return typeof t=="string"?wS(t,e):typeof t=="object"&&t!==null?t:{}}function lL(t,e){return typeof e>"u"&&(e=!t||t[0]!=="{"&&t[0]!=="["&&t[0]!=='"'),!e}function Ny(t,e){e===void 0&&(e={});var n=uL(t);if(lL(n,e.doNotParse))try{return JSON.parse(n)}catch{}return t}function uL(t){return t&&t[0]==="j"&&t[1]===":"?t.substr(2):t}var Tr=globalThis&&globalThis.__assign||function(){return Tr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Tr.apply(this,arguments)},cL=function(){function t(e,n){var r=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=aL(e,n),new Promise(function(){r.HAS_DOCUMENT_COOKIE=oL()}).catch(function(){})}return t.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=wS(document.cookie,e))},t.prototype._emitChange=function(e){for(var n=0;n<this.changeListeners.length;++n)this.changeListeners[n](e)},t.prototype.get=function(e,n,r){return n===void 0&&(n={}),this._updateBrowserValues(r),Ny(this.cookies[e],n)},t.prototype.getAll=function(e,n){e===void 0&&(e={}),this._updateBrowserValues(n);var r={};for(var i in this.cookies)r[i]=Ny(this.cookies[i],e);return r},t.prototype.set=function(e,n,r){var i;typeof n=="object"&&(n=JSON.stringify(n)),this.cookies=Tr(Tr({},this.cookies),(i={},i[e]=n,i)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=Cy(e,n,r)),this._emitChange({name:e,value:n,options:r})},t.prototype.remove=function(e,n){var r=n=Tr(Tr({},n),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=Tr({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=Cy(e,"",r)),this._emitChange({name:e,value:void 0,options:n})},t.prototype.addChangeListener=function(e){this.changeListeners.push(e)},t.prototype.removeChangeListener=function(e){var n=this.changeListeners.indexOf(e);n>=0&&this.changeListeners.splice(n,1)},t}();const ii=cL,Ay="/booking/assets/white-caret-a27c1ad3.svg",ES="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAQAAABQ8GUWAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cEBgwgLlc2qI8AAAH9SURBVHja5dtNjoJAEIbhFm4AyRBvKsafk8BCj2SIRjfEiBshegK+WeBMMkHlr+muqum1JryP0tqVoADXBeZzIE2BokAZRYDnKWEL8DwgjoGiqFpnM8B1FRCGqK0kQRkEti9aW3wZBECS1DvDUAHnM16uwwGYTm1f/PD4ry9gt3vdmKYKyHO8Xby/Ce8/+ecqbzdV3fOfFk+ExngAKKPouTk0vJAZQqt4JMnvZv/5PuG1J7RqKff7WosEhN7xEhAGx3NG0BbPEUF7PCeE0eI5IIweTxnBWDxFBOPxlBCsxVNAsB5vE4FMvA0EcvEmEcjGm0AgHz8mApv4MRDYxetEYBuvA4F9/BAEMfF9EMTFd0M4nao4YfHdEITGD0aQEN8bQVL8H4Sm+/1nXzAY79iGqUtNJrYvQX9T532AxsjdUrwghME/g5wR2sUfj80bI0OELn9vKUybrcV3eg8HhCEHG/YIOk51bBF0HmnZIYxxnmeDMOYwgzyCiUkOWQSTYyxyCDZmeGQQbA4wrSNQmN5aQ6AQbw2BUrxxBIrxxhAox4+OwCF+NARO8doROMZrQ+AcPxhBQnxvBMD3/+9DU76vgO1WUnw3hM1GAY+HtPj2CPe7Aq5XifHtELJMAeu11PhmhNVKAY4DLJdAllXPEcex7Mfn8xy4XFAuFoDjfAP/jftJNAjwmQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wNC0wNlQxMjozMjo0NiswMDowMAjDdnUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDQtMDZUMTI6MzI6NDYrMDA6MDB5ns7JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTA0LTA2VDEyOjMyOjQ2KzAwOjAwLovvFgAAAABJRU5ErkJggg==",hL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cECBYWNaUhoYMAAAIFSURBVFjDzZc7L0RBFMf/Z91gd4kKm12FVyFKEo9G2GQlVGqfxQcgQusTiEKFzms3GnFVEsRus68sLYlKmL9icNl43Hu5c51qJpn5n9+cO3POPQIAVB0dkKUlIJMBYjF4sosLcGZGIvf33va9GJlIkDc3/JWNjflyDsACVleBREJP83mwWvWkILYN2LZfAJC3t/oUZ2dkQ4NvIZ8WAdra9PDyUuTpKQSAcC0QACrLIicnqVpbw4mArKwA2Sxg22QyaR4AjY0aZGAAyGbJVOrrcL3ZxsZfuSfjcfLw0NEuFsmeHmMAWjcWo9rfd/RLJbK31xiAA7G35/gol8m+PmMAWj8apdrddfxUKlT9/cYAAICqqYnc3nZ8VauvEJa30wwNoT6ErjdvbkJGRoDOTqCrC5LLUaXTrgGoRkeB42OIyN/EJZUCtrbCTcVCuo6ARE5OyOFh8N0F8mTNzZDlZf0JAKBWA+fmDF7CnZ1PX4L5Z1iXC8wnorpsGGwqPjj4mIo/qQfmilF39xeLgwBYW3N08/nvynFAeeDhQZNcXQFTUyK12je0AURAWRbVxARVS8tPaz3VArcmkcdH4OjIzdr/8Fd8d6eHg4NhNCZCrq8D8/N6WiiAlYo3idNTyMKCiFK+CHRzen39u+Z0fNx3BACAqr0dWFyETE8D8bg3ifNzcHbWb3v+DADIX4hw6hmjAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTA0LTA4VDIyOjIyOjUzKzAwOjAwCzxV/AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wNC0wOFQyMjoyMjo1MyswMDowMHph7UAAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjMtMDQtMDhUMjI6MjI6NTMrMDA6MDAtdMyfAAAAAElFTkSuQmCC",dt=new ii;function Xt(){const t=Ft();function e(){const s=document.querySelector(".more-options-btn img"),o=document.querySelector(".more-options");s.classList.toggle("active-btn-caret"),o.classList.toggle("active-options")}function n(){const s=document.querySelector(".mobile-caret"),o=document.querySelector(".mobile-more-options");s.classList.toggle("active-mobile-caret"),o.classList.toggle("active-mobile-options")}async function r(){await CN(Q).then(()=>{dt.remove("auth-token"),dt.remove("name"),dt.remove("id"),dt.remove("email"),t("/")})}function i(){const s=document.querySelector(".sidebar");s.classList.contains("active-sidebar")?(s.classList.remove("active-sidebar"),document.documentElement.style.overflowY="scroll"):(s.classList.add("active-sidebar"),document.documentElement.style.overflowY="hidden")}return v("div",{children:[v("nav",{children:[h(Y,{className:"h1",to:"/",children:"Booking"}),v("div",{className:"sign-in-wrapper",children:[h(Y,{id:"list-prop",to:"/listProperty",children:"List your property"}),!dt.get("auth-token")&&h(Y,{className:"auth-links",to:"/signUp",children:"Register"}),!dt.get("auth-token")&&h(Y,{className:"auth-links",to:"/signIn",children:"Sign in"}),dt.get("auth-token")&&v("div",{className:"more-options-btn",onClick:e,children:[dt.get("name"),h("img",{src:Ay,alt:"Caret"}),h("div",{className:"more-options",children:v("ul",{children:[h("li",{children:h(Y,{to:"/userProfile",children:"My Profile"})}),Q.onAuthStateChanged(()=>Q.currentUser==="uf5IaiAiv1Y4OlIruvX1Er2I0Sd2")&&h("li",{children:h(Y,{to:"/adminPage",children:"Admin Page"})}),h("li",{children:h("button",{className:"sign-out-btn",onClick:r,children:"Sign Out"})})]})})]})]}),v("div",{className:"hamburger-btn",onClick:i,children:[h("div",{}),h("div",{}),h("div",{})]})]}),v("div",{className:"sidebar",children:[h("div",{className:"close-sidebar-btn",onClick:i,children:h("img",{src:ES,alt:"Close Sidebar Icon",className:"close-sidebar-icon"})}),h("div",{className:"sidebar-options",children:v("ul",{children:[h("li",{children:h(Y,{to:"/",onClick:i,children:"Home"})}),dt.get("auth-token")&&h("li",{children:h(Y,{to:"/listProperty",onClick:i,children:"List your property"})})]})}),v("div",{className:"sidebar-user-div",children:[!dt.get("auth-token")&&h(Y,{className:"mobile-auth-links",to:"/signUp",children:"Register"}),!dt.get("auth-token")&&h(Y,{className:"mobile-auth-links",to:"/signIn",children:"Sign in"}),dt.get("auth-token")&&v("div",{className:"mobile-more-options-btn",onClick:n,children:[dt.get("name")," ",h("img",{src:Ay,alt:"Caret",className:"mobile-caret"}),h("div",{className:"mobile-more-options",children:v("ul",{children:[h("li",{children:h(Y,{to:"/userProfile",children:"My Profile"})}),Q.onAuthStateChanged(()=>Q.currentUser==="uf5IaiAiv1Y4OlIruvX1Er2I0Sd2")&&h("li",{children:h(Y,{to:"/adminPage",onClick:i,children:"Admin Page"})})]})})]}),dt.get("auth-token")&&h("button",{className:"mobile-signout-btn",onClick:r,children:h("img",{src:hL})})]})]})]})}const ks=new ii;function dL(){const t=Ft();T.useEffect(()=>{ks.get("auth-token")&&t("/")},[]);const[e,n]=T.useState(""),[r,i]=T.useState(""),[s,o]=T.useState(""),[a,l]=T.useState("");async function u(c){c.preventDefault();try{await wN(Q,r,s).then(f=>{ks.set("auth-token",f.user.refreshToken),ks.set("name",e),ks.set("email",f.user.email),ks.set("id",f.user.uid)}),await T0(Q.currentUser,{displayName:e}).then(()=>window.location.reload);const d=Ie(ie,"users");await hs(d,{name:e,email:r,id:Q.currentUser.uid,accountCreatedAt:Xu(),submittedReservations:{},savedProperties:{}}).then(()=>window.location.reload())}catch(d){switch(d.code){case"auth/email-already-in-use":l("Email already in use");break;case"auth/weak-password":l("Password must be at least 6 characters long");break;case"auth/invalid-email":l("Please enter a valid email");break}}}return v(Ut,{children:[h(Xt,{}),v("div",{className:"sign-up-form-wrapper",children:[v("div",{className:"sign-up-decoration-div",children:[h("h2",{children:"Welcome!"}),h("h3",{children:"Create your account to get started with our services"})]}),v("form",{className:"sign-up-form",onSubmit:c=>u(c),children:[h("h2",{children:"Sign up"}),v("div",{className:"sign-up-inputs-wrapper",children:[v("div",{className:"sign-up-label-wrappers",children:[h("label",{children:"Full Name"}),h("input",{type:"text",className:"name",required:!0,value:e,onChange:c=>n(c.target.value)})]}),v("div",{className:"sign-up-label-wrappers",children:[h("label",{className:"sign-up-email-label",children:"Email"}),h("input",{className:"email",type:"email",required:!0,value:r,onChange:c=>i(c.target.value)})]}),v("div",{className:"sign-up-label-wrappers",children:[h("label",{className:"sign-up-password-label",children:"Password"}),h("input",{className:"password",type:"password",required:!0,value:s,onChange:c=>o(c.target.value)}),h("p",{id:"error",children:a})]})]}),h("button",{className:"sign-up-btn",children:"Sign up"}),v("p",{className:"dont-have-acc",children:["Already have an account? ",h(Y,{to:"/signIn",children:"Sign In"})]})]})]})]})}const Ts=new ii;function fL(){const t=Ft();T.useEffect(()=>{Ts.get("auth-token")&&t("/")},[]);const[e,n]=T.useState(""),[r,i]=T.useState(""),[s,o]=T.useState("");async function a(l){l.preventDefault();try{await EN(Q,e,r).then(u=>{Ts.set("auth-token",u.user.refreshToken),Ts.set("email",u.user.email),Ts.set("name",u.user.displayName),Ts.set("id",u.user.uid),console.log(Q.currentUser),window.location.reload()})}catch(u){switch(u.code){case"auth/wrong-password":o("Incorrect Password");break;case"auth/user-not-found":o("Account does not exist");break;case"auth/invalid-email":o("Please enter a valid email");break}}}return v(Ut,{children:[h(Xt,{}),v("div",{className:"sign-in-form-wrapper",children:[v("div",{className:"sign-in-decoration-div",children:[h("h2",{children:"Welcome Back!"}),h("h3",{children:"Sign in to get back to using our services"})]}),v("form",{className:"sign-in-form",onSubmit:l=>a(l),children:[h("h2",{children:"Sign in"}),v("div",{className:"sign-in-inputs-wrapper",children:[v("div",{className:"sign-in-label-wrappers",children:[h("label",{className:"sign-in-email-label",children:"Email"}),h("input",{className:"email",type:"email",required:!0,value:e,onChange:l=>n(l.target.value)})]}),v("div",{className:"sign-in-label-wrappers",children:[h("label",{className:"sign-in-password-label",children:"Password"}),h("input",{className:"password",type:"password",required:!0,value:r,onChange:l=>i(l.target.value)}),h("p",{id:"error",children:s})]})]}),h("button",{className:"sign-in-btn",children:"Sign In"}),v("p",{className:"dont-have-acc",children:["Don't have an account? ",h(Y,{to:"/signUp",children:"Sign Up"})]})]})]})]})}const SS="/booking/assets/hotel-fc11edd4.jpeg",_S="/booking/assets/resorts-fa9f5dbe.jpeg",kS="/booking/assets/apartments-d2234ba0.jpeg";function pL(){const t=Ft(),[e,n]=T.useState(""),[r,i]=T.useState("");function s(a){n(a.target.value);const l=document.querySelector(".prop-search-error");l.classList.contains("active-error")&&l.classList.remove("active-error")}async function o(){if(e===""||r==="")return;const a=Ie(ie,r.toLowerCase()),l=St(a,xt("propertyDetails.address","==",e)),u=[],c=await at(l);console.log(c.docs.length),c.docs.length===0?document.querySelector(".prop-search-error").classList.add("active-error"):(c.forEach(d=>u.push({...d.data(),docId:d.id})),t("/queryResults",{state:{docs:u}}))}return v("div",{className:"home-wrapper",children:[h(Xt,{}),h("div",{className:"home-content-wrapper",children:v("div",{className:"home-text",children:[h("h2",{children:"Find your next stay"}),h("h3",{children:"Search deals on hotels, homes and much more..."})]})}),h("div",{className:"search-wrapper",children:v("div",{className:"inputs-wrapper",children:[h("input",{id:"search-bar",type:"text",placeholder:"Where are you going?",value:e.current,onChange:a=>s(a)}),v("select",{onChange:a=>i(a.target.value),children:[h("option",{children:"-Select Property Type-"}),h("option",{children:"Apartments"}),h("option",{children:"Hotels"}),h("option",{children:"Resorts"})]}),h("button",{className:"search-btn",onClick:o,children:"Search"}),h("p",{className:"prop-search-error",children:"Couldn't find any property that matches your details"})]})}),v("div",{className:"recommendations",children:[h("h3",{children:"Browse by property type"}),v("div",{className:"property-types",children:[v("div",{className:"hotels",children:[h(Y,{to:"/propertyBrowser",state:{propertyType:"hotels"},children:h("img",{src:SS})}),h(Y,{children:"Hotels"})]}),v("div",{className:"apartments",children:[h(Y,{to:"/propertyBrowser",state:{propertyType:"apartments"},children:h("img",{src:kS})}),h(Y,{children:"Apartments"})]}),v("div",{className:"resorts",children:[h(Y,{to:"/propertyBrowser",state:{propertyType:"resorts"},children:h("img",{src:_S})}),h(Y,{children:"Resorts"})]})]})]})]})}function mL(){return v(Ut,{children:[h(Xt,{}),v("div",{className:"list-property-wrapper",children:[h("h2",{children:"To get started choose your property type below:"}),v("div",{className:"property-types-wrapper",children:[v("div",{children:[h("img",{src:SS}),h("h3",{children:"Hotel"}),h(Y,{className:"list-prop-btn",to:"/listPropertyForm",state:{propertyType:"hotel"},children:"List your property"})]}),v("div",{children:[h("img",{src:kS}),h("h3",{children:"Apartment"}),h(Y,{className:"list-prop-btn",to:"/listPropertyForm",state:{propertyType:"apartment"},children:"List your property"})]}),v("div",{children:[h("img",{src:_S}),h("h3",{children:"Resort"}),h(Y,{className:"list-prop-btn",to:"/listPropertyForm",state:{propertyType:"resort"},children:"List your property"})]})]})]})]})}const Kc=new ii;function gL(){const t=Ft(),[e,n]=T.useState(""),[r,i]=T.useState(""),[s,o]=T.useState(""),[a,l]=T.useState(""),[u,c]=T.useState(""),[d,f]=T.useState(""),[w,S]=T.useState([]),[y,I]=T.useState(""),[g,p]=T.useState(""),[m,_]=T.useState(!1);function R(){const A=document.querySelector(".left-div"),L=document.querySelector(".right-div"),k=document.querySelector(".next-btn"),D=document.querySelector(".buttons-wrapper");L.classList.contains("active-right-div")?(L.classList.remove("active-right-div"),A.classList.add("active-left-div"),k.innerText="Next",_(!1),D.classList.remove("buttons-wrapper-space-between")):A.classList.contains("active-left-div")&&(A.classList.remove("active-left-div"),L.classList.add("active-right-div"),k.innerText="Go back",D.classList.add("buttons-wrapper-space-between"),_(!0))}async function N(A){A.preventDefault(),window.scrollTo(0,0),document.documentElement.style.overflow="hidden",document.querySelector(".creating-listing").classList.add("active-creating");let L=[];for(let D=0;D<w.length;D++){const z=Q.currentUser?Bi(Yi,`${Kc.get("id")}/apartments/${r}/${r+D}`):Bi(Yi,`${e}/apartments/${r}/${r+D}`);await Bf(z,w[D]),await jf(z).then(q=>L.push(q))}const k=Ie(ie,"apartments");await hs(k,{propertyDetails:{propertyName:r,country:s,address:a,address2:u,zipCode:d,pricePerNight:y,propertyType:"apartment",pictures:{...L},dateCreated:Xu()},landLordName:Kc.get("name"),landLordId:Kc.get("id")}).then(()=>{alert("Property listed Successfully"),document.documentElement.style.overflowY="scroll",t("/")})}return v("div",{className:"form-wrapper",children:[h("div",{className:"decoration-div",children:h("div",{className:"decoration-text-wrapper",children:h("h3",{children:"Your apartment listing form is your opportunity to showcase the unique features and amenities of your property, enticing potential renters to make it their new home."})})}),v("form",{className:"list-property-form-apartment",onSubmit:A=>N(A),children:[h("h2",{children:"Fill out the form below to list your apartment"}),v("div",{className:"animation-div",children:[v("div",{className:"left-div active-left-div",children:[v("div",{className:"inputs-wrappers",children:[h("label",{children:"Property Name"}),h("input",{type:"text",required:!0,value:r,onChange:A=>i(A.target.value)})]}),!Q.currentUser&&v("div",{className:"inputs-wrappers",children:[h("label",{children:"Your Full Name"}),h("input",{type:"text",value:e,onChange:A=>n(A.target.value)})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"Country/Region"}),v("select",{onChange:A=>o(A.target.value),children:[h("option",{children:"Select Country/Region"}),h("option",{children:"Kosovo"}),h("option",{children:"Albania"})]})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"City"}),h("input",{type:"text",required:!0,value:a,onChange:A=>l(A.target.value)})]})]}),v("div",{className:"right-div",children:[v("div",{className:"inputs-wrappers",children:[h("label",{children:"Street name and house number"}),h("input",{type:"text",required:!0,value:u,onChange:A=>c(A.target.value)})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"ZIP Code"}),h("input",{type:"number",required:!0,value:d,onChange:A=>f(A.target.value)})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"Price Per Night"}),h("input",{type:"number",required:!0,value:y,onChange:A=>I(A.target.value)})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"Select at least 5 pictures of your property"}),h("input",{type:"file",multiple:!0,onChange:A=>S(A.target.files)}),h("span",{id:"error",children:g})]})]})]}),v("div",{className:"buttons-wrapper",children:[h("button",{className:"next-btn",type:"button",onClick:R,children:"Next"}),m&&h("button",{className:"create-list-btn",children:"Create Listing"})]})]})]})}const Wc=new ii;function yL(){const t=Ft(),[e,n]=T.useState(""),[r,i]=T.useState(""),[s,o]=T.useState(""),[a,l]=T.useState(""),[u,c]=T.useState(""),[d,f]=T.useState(""),[w,S]=T.useState([]);T.useState("");const[y,I]=T.useState(""),[g,p]=T.useState(""),[m,_]=T.useState(""),[R,N]=T.useState(!1);function A(){const k=document.querySelector(".left-div"),D=document.querySelector(".right-div"),z=document.querySelector(".next-btn"),q=document.querySelector(".buttons-wrapper");D.classList.contains("active-right-div")?(D.classList.remove("active-right-div"),k.classList.add("active-left-div"),z.innerText="Next",N(!1),q.classList.remove("buttons-wrapper-space-between")):k.classList.contains("active-left-div")&&(k.classList.remove("active-left-div"),D.classList.add("active-right-div"),z.innerText="Go back",q.classList.add("buttons-wrapper-space-between"),N(!0))}async function L(k){k.preventDefault(),window.scrollTo(0,0),document.documentElement.style.overflow="hidden",document.querySelector(".creating-listing").classList.add("active-creating");let D=[];for(let q=0;q<w.length;q++){const oe=Q.currentUser?Bi(Yi,`${Wc.get("id")}/hotels/${r}/${r+q}`):Bi(Yi,`${e}/hotels/${r}/${r+q}`);await Bf(oe,w[q]),await jf(oe).then(Z=>D.push(Z))}const z=Ie(ie,"hotels");await hs(z,{propertyDetails:{propertyName:r,country:s,address:a,address2:u,zipCode:d,propertyType:"hotel",rating:y,roomCount:g,pricePerNight:m,pictures:{...D},dateCreated:Xu()},landLordName:Wc.get("name"),landLordId:Wc.get("id")}).then(()=>{alert("Property listed Successfully"),document.documentElement.style.overflowY="scroll",t("/")})}return v("div",{className:"form-wrapper",children:[h("div",{className:"decoration-div hotel-decoration",children:h("div",{className:"decoration-text-wrapper",children:h("h3",{children:"Your hotel listing form is your first impression - make it count!"})})}),v("form",{className:"list-property-form-hotel",onSubmit:k=>L(k),children:[h("h2",{children:"Fill out the form below to list your hotel"}),v(Ut,{children:[v("div",{className:"animation-div",children:[v("div",{className:"left-div active-left-div",children:[v("div",{className:"inputs-wrappers",children:[h("label",{children:"Property Name"}),h("input",{type:"text",required:!0,value:r,onChange:k=>i(k.target.value)})]}),!Q.currentUser&&v("div",{className:"inputs-wrappers",children:[h("label",{children:"Your Full Name"}),h("input",{type:"text",value:e,onChange:k=>n(k.target.value)})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"Star Rating"}),v("select",{onChange:k=>I(k.target.value),children:[h("option",{children:"N/A"}),h("option",{children:"1 Star"}),h("option",{children:"2 Stars"}),h("option",{children:"3 Stars"}),h("option",{children:"4 Stars"}),h("option",{children:"5 Stars"})]})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"Room Count"}),h("input",{type:"number",required:!0,value:g,onChange:k=>p(k.target.value)})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"Price for 1 person"}),v("div",{style:{display:"flex",alignItems:"center"},children:["$/per night",h("input",{style:{width:"50%",marginLeft:"20px"},value:m,onChange:k=>_(k.target.value)})]})]})]}),v("div",{className:"right-div",children:[v("div",{className:"inputs-wrappers",children:[h("label",{children:"Country/Region"}),v("select",{onChange:k=>o(k.target.value),children:[h("option",{children:"Select Country/Region"}),h("option",{children:"Kosovo"}),h("option",{children:"Albania"})]})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"City"}),h("input",{type:"text",required:!0,value:a,onChange:k=>l(k.target.value)})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"Address"}),h("input",{type:"text",required:!0,value:u,onChange:k=>c(k.target.value)})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"ZIP Code"}),h("input",{type:"number",required:!0,value:d,onChange:k=>f(k.target.value)})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"Select at least 3 photos"}),h("input",{type:"file",multiple:!0,onChange:k=>S(D=>[...D,...k.target.files])})]})]})]}),v("div",{className:"buttons-wrapper",children:[h("button",{className:"next-btn",type:"button",onClick:A,children:"Next"}),R&&h("button",{className:"create-list-btn",children:"Create Listing"})]})]})]})]})}const Gc=new ii;function vL(){const t=Ft(),[e,n]=T.useState(""),[r,i]=T.useState(""),[s,o]=T.useState(""),[a,l]=T.useState(""),[u,c]=T.useState(""),[d,f]=T.useState(""),[w,S]=T.useState([]);T.useState(""),T.useState("");const[y,I]=T.useState(""),[g,p]=T.useState(""),[m,_]=T.useState(""),[R,N]=T.useState(!1);function A(){const k=document.querySelector(".left-div"),D=document.querySelector(".right-div"),z=document.querySelector(".next-btn"),q=document.querySelector(".buttons-wrapper");D.classList.contains("active-right-div")?(D.classList.remove("active-right-div"),k.classList.add("active-left-div"),z.innerText="Next",N(!1),q.classList.remove("buttons-wrapper-space-between")):k.classList.contains("active-left-div")&&(k.classList.remove("active-left-div"),D.classList.add("active-right-div"),z.innerText="Go back",q.classList.add("buttons-wrapper-space-between"),N(!0))}async function L(k){k.preventDefault(),window.scrollTo(0,0),document.documentElement.style.overflow="hidden",document.querySelector(".creating-listing").classList.add("active-creating");let D=[];for(let q=0;q<w.length;q++){const oe=Q.currentUser?Bi(Yi,`${Gc.get("id")}/resorts/${r}/${r+q}`):Bi(Yi,`${e}/hotels/${r}/${r+q}`);await Bf(oe,w[q]),await jf(oe).then(Z=>D.push(Z))}const z=Ie(ie,"resorts");await hs(z,{propertyDetails:{propertyName:r,country:s,address:a,address2:u,zipCode:d,propertyType:"resort",roomCount:y,allowedPeoplePerRoom:g,pricePerMonth:m,pictures:{...D},dateCreated:Xu()},landLordName:Gc.get("name"),landLordId:Gc.get("id")}).then(()=>{alert("Property listed Successfully"),document.documentElement.style.overflow="scroll",t("/")})}return v("div",{className:"form-wrapper",children:[h("div",{className:"decoration-div resort-decoration",children:h("div",{className:"decoration-text-wrapper",children:h("h3",{children:"Make your resort listing form irresistible - showcase the experiences and amenities that make your property a must-visit destination."})})}),v("form",{className:"list-property-form-resort",onSubmit:k=>L(k),children:[h("h2",{children:"Fill out the form below to list your resort"}),v(Ut,{children:[v("div",{className:"animation-div",children:[v("div",{className:"left-div active-left-div",children:[v("div",{className:"inputs-wrappers",children:[h("label",{children:"Property Name"}),h("input",{type:"text",required:!0,value:r,onChange:k=>i(k.target.value)})]}),!Q.currentUser&&v("div",{className:"inputs-wrappers",children:[h("label",{children:"Your Full Name"}),h("input",{type:"text",value:e,onChange:k=>n(k.target.value)})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"Room Count"}),h("input",{type:"number",required:!0,value:y,onChange:k=>I(k.target.value)})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"Allowed people per room"}),h("input",{type:"number",value:g,onChange:k=>p(k.target.value),required:!0})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"Rent"}),v("div",{style:{display:"flex",alignItems:"center"},children:["$/per month",h("input",{style:{width:"50%",marginLeft:"20px"},value:m,onChange:k=>_(k.target.value)})]})]})]}),v("div",{className:"right-div",children:[v("div",{className:"inputs-wrappers",children:[h("label",{children:"Country/Region"}),v("select",{onChange:k=>o(k.target.value),children:[h("option",{children:"Select Country/Region"}),h("option",{children:"Kosovo"}),h("option",{children:"Albania"})]})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"Street name and house number"}),h("input",{type:"text",required:!0,value:a,onChange:k=>l(k.target.value)})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"Address Line 2"}),h("input",{type:"text",required:!0,value:u,onChange:k=>c(k.target.value)})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"ZIP Code"}),h("input",{type:"number",required:!0,value:d,onChange:k=>f(k.target.value)})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"Select at least 1 photo"}),h("input",{type:"file",multiple:!0,onChange:k=>S(D=>[...D,...k.target.files])})]})]})]}),v("div",{className:"buttons-wrapper",children:[h("button",{className:"next-btn",type:"button",onClick:A,children:"Next"}),R&&h("button",{className:"create-list-btn",children:"Create Listing"})]})]})]})]})}function wL(){const t=On(),e=Ft();return Q.onAuthStateChanged(()=>{Q.currentUser===null&&e("/signIn")}),v(Ut,{children:[h(Xt,{}),v("div",{className:"list-property-form-wrapper",children:[h("div",{className:"creating-listing",children:h("h2",{children:"Creating Listing..."})}),t.state.propertyType==="apartment"&&h(gL,{}),t.state.propertyType==="hotel"&&h(yL,{}),t.state.propertyType==="resort"&&h(vL,{})]})]})}function TS(t){let e=t.split(""),n=e[0].toUpperCase();return e[0]=n,e.join("")}function EL(){const t=On(),[e,n]=T.useState([]);return T.useEffect(()=>{let r=[];async function i(){const s=Ie(ie,t.state.propertyType),o=St(s,Kx("propertyDetails.dateCreated"));(await at(o)).forEach(l=>r.push({...l.data(),docId:l.id})),n(r)}i()},[]),v(Ut,{children:[h(Xt,{}),v("div",{className:"property-browser-wrapper",children:[v("h2",{children:["Find the perfect ",TS(t.state.propertyType)," on booking"]}),v("div",{className:"properties-wrapper",children:[h("h3",{children:"Find a great deal on a hotel for tonight or an upcoming trip"}),e.map((r,i)=>v("div",{className:"property-div",children:[h("div",{className:"property-img-wrapper",children:h(Y,{to:"/propertyDetails",state:{property:r},children:h("img",{className:"property-img",src:r.propertyDetails.pictures[0]})})}),v("div",{className:"property-details",children:[h(Y,{to:"/propertyDetails",state:{property:r},className:"property-name",children:r.propertyDetails.propertyName}),h("p",{className:"property-address",children:r.propertyDetails.address})]}),v("div",{className:"price-div",children:[h("span",{className:"price-spans",children:"From"}),v("p",{children:["$",r.propertyDetails.propertyType==="hotel"|r.propertyDetails.propertyType==="apartment"?r.propertyDetails.pricePerNight:r.propertyDetails.pricePerMonth]}),v("span",{className:"price-spans",children:["Per ",r.propertyDetails.propertyType==="hotel"|r.propertyDetails.propertyType==="apartment"?"Night":"Month"]})]})]},i))]})]})]})}const SL="/booking/assets/user-97006626.svg";function _L(){const e=On().state.property,n=T.useRef([]),r=e.propertyDetails.pictures,i=T.useRef();for(let y=0;y<Object.keys(r).length;y++)n.current.push(r[y]);Q.onAuthStateChanged(async()=>{if(Q.currentUser===null){document.querySelector(".review-input").disabled=!0;const N=document.querySelector(".post-review-btn");N.disabled=!0,N.classList.remove("post-review-btn"),N.classList.add("disabled-review-btn")}const y=Ie(ie,"users"),I=St(y,xt("id","==",Q.currentUser.uid)),g=await at(I);let p;g.forEach(N=>p=N.data()),i.current=p;const m=Object.keys(i.current.savedProperties).length,_=document.querySelector(".save-btn"),R=document.querySelector(".unsave-btn");for(let N=0;N<m;N++)if(i.current.savedProperties[`property${N}`].propertyDocId===e.docId)_.style.display="none",R.style.display="block";else continue});const[s,o]=T.useState([]);T.useEffect(()=>{async function y(){const I=Ie(ie,"reviews"),g=St(I,xt("reviewedPropertyId","==",e.docId));let p=[];(await at(g)).forEach(_=>p.push({..._.data(),reviewDocId:_.id})),o(p)}return y(),()=>y()},[]);const a=T.useRef(0),l={next:"NEXT",previous:"PREVIOUS"};function u(y){const I=document.getElementsByClassName("prop-img");for(let g=0;g<I.length;g++)I[g].classList.remove("active-img");y===l.next?(a.current=a.current+1,a.current===I.length&&(a.current=0)):y===l.previous&&(a.current===0?a.current=I.length-1:a.current=a.current-1),I[a.current].classList.add("active-img")}async function c(y,I){const g=Ie(ie,"users"),p=St(g,xt("id","==",`${Q.currentUser.uid}`)),m=await at(p);let _={};m.forEach(A=>_={...A.data(),userDocId:A.id});const R=Object.keys(_.savedProperties).length;_.savedProperties[`property${R}`]={propertyDocId:y,propertyType:I.toLowerCase()};const N=kn(ie,"users",_.userDocId);delete _.userDocId,await Po(N,_).then(()=>window.location.reload())}async function d(y){const I=Ie(ie,"users"),g=St(I,xt("id","==",Q.currentUser.uid)),p=await at(g);let m={};p.forEach(N=>m={...N.data(),userDocId:N.id});let _=Object.keys(m.savedProperties).length;for(let N=0;N<_;N++)if(m.savedProperties[`property${N}`].propertyDocId===y)if(m.savedProperties[`property${N}`]===m.savedProperties[`property${_-1}`])delete m.savedProperties[`property${N}`];else{let A=m.savedProperties[`property${_-1}`];delete m.savedProperties[`property${N}`],delete m.savedProperties[`property${_-1}`],m.savedProperties[`property${N}`]=A,_=Object.keys(m.savedProperties).length}const R=kn(ie,"users",m.userDocId);delete m.userDocId,await Po(R,m).then(()=>window.location.reload())}const[f,w]=T.useState("");async function S(y){y.disabled=!0,y.classList.remove("post-review-btn"),y.classList.add("disabled-review-btn"),y.innerText="Posting Review...";const I=Ie(ie,"reviews");await hs(I,{reviewerId:Q.currentUser.uid,reviewerName:Q.currentUser.displayName,review:f,reviewedPropertyId:e.docId,reviewedPropertyType:e.propertyDetails.propertyType}).then(()=>window.location.reload())}return v(Ut,{children:[h(Xt,{}),v("div",{className:"property-details-wrapper",children:[h("h2",{children:e.propertyDetails.propertyName}),h("span",{className:"address-span",children:e.propertyDetails.country+", "+e.propertyDetails.address+", "+e.propertyDetails.address2}),h("br",{}),e.propertyDetails.propertyType==="hotel"&&v("span",{children:[e.propertyDetails.roomCount," rooms available"]}),e.propertyDetails.propertyType==="hotel"&&v("span",{children:[h("br",{}),"Price per night for 1 person: ",e.propertyDetails.pricePerNight,"$"]}),e.propertyDetails.propertyType==="apartment"&&v("span",{children:["Price per night: ",e.propertyDetails.pricePerNight,"$"]}),e.propertyDetails.propertyType==="resort"&&v("span",{children:["Price per month: ",e.propertyDetails.pricePerMonth,"$"]}),e.propertyDetails.propertyType==="resort"&&v("span",{children:[h("br",{}),"Allowed people per room: ",e.propertyDetails.allowedPeoplePerRoom]}),h("h3",{className:"landlord",children:e.landLordName}),v("div",{className:"property-details-images-wrapper",children:[h("button",{className:"prev-arrow",onClick:()=>u(l.previous),children:"‹"}),n.current.map((y,I)=>I===0?h("img",{src:y,className:"prop-img active-img"},I):h("img",{src:y,className:"prop-img"},I)),h("button",{className:"next-arrow",onClick:()=>u(l.next),children:"›"})]}),v("div",{className:"property-details-btns-wrapper",children:[h(Y,{className:"reserve-btn",to:"/reserveForm",state:{...e},children:"Reserve Now"}),h("button",{className:"save-btn",onClick:()=>c(e.docId,e.propertyDetails.propertyType),children:"Save property"}),h("button",{className:"unsave-btn",onClick:()=>d(e.docId),children:"Unsave Property"})]})]}),v("div",{className:"reviews-wrapper",children:[h("h2",{children:"Reviews"}),v("div",{className:"review-input-wrapper",children:[h("textarea",{className:"review-input",placeholder:"What was your experience with this place?",value:f,onChange:y=>w(y.target.value)}),h("button",{className:"post-review-btn",onClick:y=>S(y.target),children:"Post Review"})]}),h("div",{className:"reviews",children:s.map((y,I)=>v("div",{className:"review",children:[h("div",{className:"review-img-wrapper",children:h("img",{src:SL})}),h("div",{className:"reviewer-name-wrapper",children:v("p",{style:{fontSize:"1.1em",fontWeight:"600px",marginRight:"20px"},children:[y.reviewerName,":"]})}),h("div",{className:"review-text",children:h("p",{children:y.review})})]},I))})]})]})}function kL(){const t=Ft(),n=On().state,[r,i]=T.useState(""),[s,o]=T.useState(""),[a,l]=T.useState(""),[u,c]=T.useState(""),[d,f]=T.useState(""),[w,S]=T.useState(""),[y,I]=T.useState("");function g(){const m=document.querySelector(".reservation-form-left-div"),_=document.querySelector(".reservation-form-right-div"),R=document.querySelector(".next-reservation-btn");m.classList.contains("active-form-left-div")?(m.classList.remove("active-form-left-div"),_.classList.add("active-form-right-div"),R.innerText="Back"):(_.classList.remove("active-form-right-div"),m.classList.add("active-form-left-div"),R.innerText="Next")}async function p(m){m.preventDefault();const _=Ie(ie,"reservations");await hs(_,{clientId:Q.currentUser.uid,clientName:`${r} ${s}`,clientEmail:a,clientPhoneNumber:u,specialRequests:d,arrivalDate:w,arrivalTime:y,reservedProperty:{...n}});const R=Ie(ie,"users"),N=St(R,xt("id","==",Q.currentUser.uid)),A=await at(N);let L={};A.forEach(z=>L={...z.data(),userDocId:z.id});const k=Object.keys(L.submittedReservations).length;L.submittedReservations[`reservation${k}`]={propertyDocId:n.docId,propertyType:n.propertyDetails.propertyType.toLowerCase()};const D=kn(ie,"users",L.userDocId);delete L.userDocId,await Po(D,L).then(()=>{alert("Your reservation was submitted successfully. Thank you"),t("/")})}return v(Ut,{children:[h(Xt,{}),v("div",{className:"reserve-form-wrapper",children:[v("div",{className:"selected-property",children:[h("div",{className:"selected-property-image-wrapper",children:h("img",{className:"selected-property-img",src:n.propertyDetails.pictures[0]})}),v("div",{className:"selected-property-details",children:[h("span",{children:TS(n.propertyDetails.propertyType)}),h("h2",{style:{marginBottom:"10px"},children:n.propertyDetails.propertyName}),h("span",{style:{display:"block",marginBottom:"5px"},children:n.propertyDetails.address+" "+n.propertyDetails.address2})]})]}),v("form",{className:"selected-property-reservation-form",onSubmit:m=>p(m),children:[h("h2",{children:"Fill out the form below to make your reservation"}),v("div",{className:"animation-div reservation-animation-div",children:[v("div",{className:"reservation-form-left-div active-form-left-div",children:[v("div",{className:"inputs-wrappers",children:[h("label",{children:"First Name"}),h("input",{type:"text",required:!0,value:r,onChange:m=>i(m.target.value)})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"Last Name"}),h("input",{type:"text",required:!0,value:s,onChange:m=>o(m.target.value)})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"Email"}),h("input",{type:"text",required:!0,value:a,onChange:m=>l(m.target.value)})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"Phone Number"}),h("input",{type:"number",required:!0,value:u,onChange:m=>c(m.target.value)})]})]}),v("div",{className:"reservation-form-right-div",children:[v("div",{className:"inputs-wrappers arrival-time",children:[h("h3",{children:"Your arrival time"}),h("input",{type:"date",required:!0,onChange:m=>S(m.target.value)}),v("select",{required:!0,onChange:m=>I(m.target.value),children:[h("option",{children:"--Arrival Time--"}),h("option",{children:"I don't know"}),h("option",{children:"3:00 PM - 4:00 PM"}),h("option",{children:"5:00 PM - 6:00 PM"}),h("option",{children:"7:00 PM - 8:00 PM"}),h("option",{children:"9:00 PM - 10:00 PM"}),h("option",{children:"11:00 PM - 12:00 AM"}),h("option",{children:"12:00 AM - 1:00 AM 	(The next day)"}),h("option",{children:"1:00 AM - 2:00 AM 	(The next day)"})]})]}),v("div",{className:"inputs-wrappers",children:[h("label",{children:"Special Requests"}),h("textarea",{className:"special-requests",maxLength:"5000",value:d,onChange:m=>f(m.target.value)})]})]})]}),v("div",{className:"reservation-form-btns-wrapper",children:[h("button",{className:"next-reservation-btn",onClick:g,type:"button",children:"Next"}),h("button",{className:"finish-reservation-btn",children:"Make Reservation"})]})]})]})]})}const fn=new ii;function TL(){const[t,e]=T.useState(fn.get("name")),[n,r]=T.useState(fn.get("email")),[i,s]=T.useState([]),[o,a]=T.useState([]),[l,u]=T.useState([]),[c,d]=T.useState([]),f=Ft();T.useEffect(()=>{window.screen.width<=1024&&document.querySelector(".user-profile-sidebar").classList.add("mobile-user-profile-sidebar"),Q.onAuthStateChanged(()=>{async function k(){const D=Ie(ie,"users"),z=St(D,xt("id","==",Q.currentUser.uid)),q=await at(z);let oe={};q.forEach(O=>oe={...O.data(),id:O.id});const Z=Object.keys(oe.savedProperties).length;let Ke=[];for(let O=0;O<Z;O++)Ke.push(oe.savedProperties[`property${O}`]);const Vt=Ie(ie,"reservations"),ke=St(Vt,xt("clientId","==",Q.currentUser.uid));let E=[];(await at(ke)).forEach(O=>{E.push({...O.data(),reservationDocId:O.id})}),s(Ke),u(E)}k()})},[]);async function w(k){const D=document.querySelector(".loader-wrapper");if(k===document.querySelector(".edit-profile-btn")){document.querySelector(".save-changes-btn").style.display="block",document.querySelector(".edit-profile-btn").style.display="none";const z=document.querySelectorAll(".profile-inputs");document.querySelector(".reset-password-btn").style.display="block";for(let q=0;q<z.length;q++)z[q].disabled=!1}else k===document.querySelector(".save-changes-btn")&&(D.style.display="flex",await T0(Q.currentUser,{displayName:t}),await _N(Q.currentUser,n).then(()=>{fn.set("name",t),fn.set("email",n),alert("Profile Updated Successfully"),window.location.reload()}))}async function S(){await k0(Q,fn.get("email")).then(()=>{fn.remove("auth-token"),fn.remove("email"),fn.remove("id"),fn.remove("name"),alert("Reset password email has been sent!"),f("/")})}const y={profile:"profile",savedProperties:"savedProperties",reservations:"reservations",myProperties:"myProperties"},[I,g]=T.useState(y.profile);function p(k,D){if(k===I)return;const z=document.querySelector(".user-profile-sidebar"),q=document.querySelector(".user-profile-sidebar-options");z.classList.contains("mobile-user-profile-sidebar")&&(z.classList.toggle("active-user-profile-sidebar"),q.classList.toggle("active-user-profile-sidebar-options"));const oe=document.querySelectorAll(".user-sidebar-btns");for(let Z=0;Z<oe.length;Z++)oe[Z].classList.remove("user-active-option");D.classList.add("user-active-option"),g(k),k===y.savedProperties&&m(),k===y.myProperties&&_()}async function m(){let k=[];for(let D=0;D<i.length;D++){const z=kn(ie,`${i[D].propertyType}s`,i[D].propertyDocId),q=await Xx(z);if(q._document!==null){let oe={...q.data(),docId:q.id};k.push(oe)}}a(k)}async function _(){const k=Ie(ie,"apartments"),D=St(k,xt("landLordId","==",Q.currentUser.uid)),z=await at(D);let q=[];z.forEach(P=>q.push({...P.data(),docId:P.id}));const oe=Ie(ie,"hotels"),Z=St(oe,xt("landLordId","==",Q.currentUser.uid));(await at(Z)).forEach(P=>q.push({...P.data(),docId:P.id}));const Vt=Ie(ie,"resorts"),ke=St(Vt,xt("landLordId","==",Q.currentUser.uid));(await at(ke)).forEach(P=>q.push({...P.data(),docId:P.id})),d(q)}function R(k){document.querySelectorAll(".unlist-property-btn")[k].classList.toggle("active-unlist-btn")}async function N(k,D){D.classList.remove("active-unlist-btn");const z=Ie(ie,"users"),q=St(z,xt("id","==",Q.currentUser.uid)),oe=await at(q);let Z={};oe.forEach(ke=>Z={...ke.data(),userDocId:ke.id});let Ke=Object.keys(Z.savedProperties).length;for(let ke=0;ke<Ke;ke++)if(Z.savedProperties[`property${ke}`].propertyDocId===k)if(Z.savedProperties[`property${ke}`]===Z.savedProperties[`property${Ke-1}`])delete Z.savedProperties[`property${ke}`];else{let E=Z.savedProperties[`property${Ke-1}`];delete Z.savedProperties[`property${ke}`],console.log(E),delete Z.savedProperties[`property${Ke-1}`],Z.savedProperties[`property${ke}`]=E,Ke=Object.keys(Z.savedProperties).length}const Vt=kn(ie,"users",Z.userDocId);delete Z.userDocId,await Po(Vt,Z).then(()=>window.location.reload())}async function A(k,D,z){document.querySelectorAll(".unlist-btn")[z];const Z=kn(ie,k==="hotel"?"hotels":k==="apartment"?"apartments":k==="resort"?"resorts":"",D);await vS(Z).then(()=>{alert("Property was unlisted!"),window.location.reload()})}function L(){const k=document.querySelector(".user-profile-sidebar"),D=document.querySelector(".user-profile-sidebar-options");k.classList.contains("active-user-profile-sidebar")?(k.classList.remove("active-user-profile-sidebar"),D.classList.remove("active-user-profile-sidebar-options")):(k.classList.add("active-user-profile-sidebar"),D.classList.add("active-user-profile-sidebar-options"))}return v(Ut,{children:[h(Xt,{}),v("div",{className:"user-profile-wrapper",children:[h("div",{className:"loader-wrapper",children:h("span",{className:"loader"})}),v("div",{className:"user-profile-sidebar",children:[v("div",{className:"user-profile-hamburger-btn",onClick:L,children:[h("div",{}),h("div",{}),h("div",{})]}),v("ul",{className:"user-profile-sidebar-options",children:[h("li",{children:h("button",{className:"user-sidebar-btns user-active-option",onClick:k=>p(y.profile,k.target),children:"Profile"})}),h("li",{children:h("button",{className:"user-sidebar-btns",onClick:k=>p(y.savedProperties,k.target),children:"Saved Properties"})}),h("li",{children:h("button",{className:"user-sidebar-btns",onClick:k=>p(y.reservations,k.target),children:"Reservations"})}),h("li",{children:h("button",{className:"user-sidebar-btns",onClick:k=>p(y.myProperties,k.target),children:"My Properties"})})]})]}),v("div",{className:"details-div",children:[I===y.profile&&v("div",{className:"profile-div",children:[h("h2",{children:"Edit Information"}),v("div",{className:"profile-info-wrapper",children:[v("div",{className:"profile-inputs-wrapper",children:[h("label",{children:"Name"}),h("input",{className:"profile-inputs",type:"text",value:t,onChange:k=>e(k.target.value),disabled:!0})]}),v("div",{className:"profile-inputs-wrapper",children:[h("label",{children:"Email"}),h("input",{className:"profile-inputs",type:"text",value:n,onChange:k=>r(k.target.value),disabled:!0})]}),v("div",{className:"profile-inputs-wrapper",children:[h("label",{children:"Password"}),v("div",{className:"reset-password-wrapper",children:[h("input",{className:"password-input",type:"password",value:"*********",disabled:!0}),h("button",{className:"reset-password-btn",onClick:()=>S(),children:"Reset Password"})]}),h("button",{className:"edit-profile-btn",onClick:k=>w(k.target),children:"Edit Profile"}),h("button",{className:"edit-profile-btn save-changes-btn",onClick:k=>w(k.target),children:"Save Changes"})]})]})]}),I===y.savedProperties&&v("div",{className:"saved-properties-div",children:[h("h2",{children:"Saved Properties"}),o.map((k,D)=>v("div",{className:"saved-property-wrapper",style:{position:"relative"},children:[h("button",{className:"properties-more-options-btn",onClick:()=>R(D),children:"···"}),h("button",{className:"unlist-property-btn",onClick:z=>N(k.docId,z.target),children:"Unsave Property"}),h("div",{className:"saved-property-img-wrapper",children:h("img",{src:k.propertyDetails.pictures[0]})}),v("div",{className:"saved-property-details-wrapper",children:[h(Y,{className:"saved-property-link",to:"/propertyDetails",state:{property:k},children:k.propertyDetails.propertyName}),h("span",{children:k.propertyDetails.address+" "+k.propertyDetails.address2})]})]},D))]}),I===y.reservations&&v("div",{className:"made-reservations-div",children:[h("h2",{children:"My Reservations"}),l.map((k,D)=>v("div",{className:"made-reservation-wrapper",children:[h("div",{className:"made-reservation-img-wrapper",children:h("img",{src:k.reservedProperty.propertyDetails.pictures[0]})}),v("div",{className:"booked-property-details",children:[h(Y,{className:"reservation-links",to:"/propertyDetails",state:{property:k.reservedProperty},children:k.reservedProperty.propertyDetails.propertyName}),h("span",{children:k.reservedProperty.propertyDetails.address+" "+k.reservedProperty.propertyDetails.address2}),v("p",{children:["Booked for: ",k.arrivalDate]}),k.reservedProperty.propertyDetails.propertyType.toLowerCase()==="hotel"&&h("span",{className:"hotel-rating",children:k.reservedProperty.propertyDetails.rating})]})]},D))]}),I===y.myProperties&&v("div",{className:"listed-properties-wrapper",children:[h("h2",{children:"My Properties"}),c.map((k,D)=>v("div",{className:"listed-property",style:{position:"relative"},children:[h("button",{className:"properties-more-options-btn",onClick:()=>R(D),children:"···"}),h("button",{className:"unlist-property-btn",onClick:()=>A(k.propertyDetails.propertyType,k.docId,D),children:"Unlist Property"}),h("div",{className:"listed-property-img-wrapper",children:h("img",{src:k.propertyDetails.pictures[0]})}),v("div",{className:"listed-property-details",children:[h(Y,{className:"myProperties-links",to:"/propertyDetails",state:{property:k},children:k.propertyDetails.propertyName}),h("span",{children:k.propertyDetails.address+" "+k.propertyDetails.address2})]})]},D))]})]})]})]})}function IL(){const e=On().state.docs;return console.log(e),v(Ut,{children:[h(Xt,{}),v("div",{className:"query-results-wrapper",children:[v("h2",{children:["Properties in ",e[0].propertyDetails.address]}),h("div",{className:"query-properties-wrapper",children:e.map((n,r)=>v("div",{className:"query-property",children:[h("div",{className:"query-property-img-wrapper",children:h(Y,{to:"/propertyDetails",state:{property:n},children:h("img",{src:n.propertyDetails.pictures[0]})})}),v("div",{className:"query-property-details",children:[h(Y,{className:"query-property-link",to:"/propertyDetails",state:{property:n},children:n.propertyDetails.propertyName}),h("span",{children:n.propertyDetails.address+" "+n.propertyDetails.address2})]})]},r))})]})]})}function CL(){const t=Ft();T.useEffect(()=>((Q.currentUser===null||Q.currentUser.uid!=="uf5IaiAiv1Y4OlIruvX1Er2I0Sd2")&&t("/"),w(),window.screen.width<=834&&document.querySelector(".admin-sidebar").classList.add("mobile-admin-sidebar"),()=>w()),[]);const e={users:"view users",hotels:"view hotels",apartments:"view apartments",resorts:"view resorts"},[n,r]=T.useState(e.users),[i,s]=T.useState([]),[o,a]=T.useState([]),[l,u]=T.useState([]),[c,d]=T.useState([]);async function f(E,P){const O=document.querySelector(".admin-sidebar"),B=document.querySelectorAll(".sidebar-btns");for(let ae=0;ae<B.length;ae++)B[ae].classList.remove("active-btn");E.classList.add("active-btn"),O.classList.contains("active-mobile-admin-sidebar")&&ke(),P===e.hotels?S("hotels"):P===e.apartments?S("apartments"):P===e.resorts&&S("resorts"),r(P)}async function w(){const E=Ie(ie,"users");let P=[];(await at(E)).forEach(B=>P.push({...B.data(),userDocId:B.id})),s(P)}async function S(E){const P=Ie(ie,E),O=await at(P);let B=[];O.forEach(ae=>B.push({...ae.data(),docId:ae.id})),E==="hotels"?a(B):E==="apartments"?u(B):E==="resorts"&&d(B)}function y(E){let P=E.getFullYear(),O,B=E.getDate();switch(E.getMonth()){case 0:O="January";break;case 1:O="February";break;case 2:O="March";break;case 3:O="April";break;case 4:O="May";break;case 5:O="June";break;case 6:O="July";break;case 7:O="August";break;case 8:O="September";break;case 9:O="October";break;case 10:O="Noveber";break;case 11:O="December";break;default:O="Error";break}return{day:B,month:O,year:P}}function I(E,P){P==="usersMenu"?document.querySelectorAll(".users-more-admin-options")[E].classList.toggle("active-admin-options"):P==="property"&&document.querySelectorAll(".properties-more-admin-options")[E].classList.toggle("active-admin-options")}async function g(E,P){document.querySelectorAll(".users-more-admin-options")[P].classList.toggle("active-admin-options"),await k0(Q,E).then(()=>alert("Reset password email was sent!"))}async function p(E,P){const O=kn(ie,E,P);await vS(O).then(()=>{alert("Property Deleted Successfully!"),window.location.reload()})}const[m,_]=T.useState({}),[R,N]=T.useState(""),[A,L]=T.useState(""),[k,D]=T.useState(""),[z,q]=T.useState(""),[oe,Z]=T.useState("");function Ke(E,P){const O=document.querySelector(".edit-property-wrapper");E==="show"?(O.style.display="flex",_(P),N(P.propertyDetails.propertyName),D(P.propertyDetails.address),q(P.propertyDetails.address2),Z(P.propertyDetails.zipCode),document.documentElement.style.overflow="hidden",document.documentElement.scrollTo(0,0)):E==="hide"&&(O.style.display="none")}async function Vt(E,P,O,B,ae,si,dn){P.preventDefault(),document.querySelector(".submit-editted-property").classList.add("disabled-btn");const ds=kn(ie,`${E.propertyDetails.propertyType}s`,E.docId);await Po(ds,{landLordId:E.landLordId,landLordName:E.landLordName,propertyDetails:{...E.propertyDetails,propertyName:O,country:B,address:ae,address2:si,zipCode:dn}}).then(()=>{alert("Property has been updated successfully"),window.location.reload()})}function ke(){const E=document.querySelector(".mobile-admin-sidebar"),P=document.querySelector(".admin-sidebar ul");E.classList.contains("active-mobile-admin-sidebar")?(E.classList.remove("active-mobile-admin-sidebar"),P.style.display="none"):(E.classList.add("active-mobile-admin-sidebar"),P.style.display="flex")}return v(Ut,{children:[h(Xt,{}),v("div",{className:"admin-page-wrapper",children:[v("div",{className:"admin-sidebar",children:[v("div",{className:"admin-hamburger-btn",onClick:ke,children:[h("div",{}),h("div",{}),h("div",{})]}),v("ul",{children:[h("li",{children:h("button",{className:"sidebar-btns active-btn",onClick:E=>f(E.target,e.users),children:"View Users"})}),h("li",{children:h("button",{className:"sidebar-btns",onClick:E=>f(E.target,e.hotels),children:"View Hotels"})}),h("li",{children:h("button",{className:"sidebar-btns",onClick:E=>f(E.target,e.apartments),children:"View Apartments"})}),h("li",{children:h("button",{className:"sidebar-btns",onClick:E=>f(E.target,e.resorts),children:"View Resorts"})})]})]}),v("div",{className:"admin-page-details-div",children:[h("h2",{style:{textAlign:"center",fontSize:"2em",margin:"20px 0"},children:"Admin Page"}),n===e.users&&v("div",{className:"users",children:[h("h2",{style:{fontSize:"2em",textAlign:"center"},children:"Users"}),i.map((E,P)=>{let O=E.accountCreatedAt.toDate(),B=y(O);return v("div",{className:"user",children:[h("button",{className:"more-admin-options-btn",onClick:()=>I(P,"usersMenu"),children:"···"}),h("div",{className:"users-more-admin-options",children:h("button",{onClick:()=>g(E.email,P),children:"Send Reset Password Email"})}),v("h2",{children:["Name: ",E.name]}),v("h3",{children:["Email: ",E.email]}),v("p",{children:["ID: ",E.id]}),v("p",{children:["User joined on: ",B.day,"    of ",B.month," ",B.year]})]},P)})]}),n===e.hotels&&v("div",{className:"hotels-wrapper",children:[h("h2",{children:"Hotels"}),o.map((E,P)=>{let O=E.propertyDetails.dateCreated.toDate(),B=y(O);return v("div",{className:"listed-property admin-listed-property",style:{position:"relative"},children:[h("button",{className:"more-admin-options-btn",onClick:()=>I(P,"property"),children:"···"}),v("div",{className:"properties-more-admin-options",children:[h("button",{onClick:()=>p("hotels",E.docId),children:"Delete Property"}),h("button",{onClick:()=>Ke("show",E),children:"Edit Property"})]}),h("div",{className:"listed-property-img-wrapper admin-listed-property-img-wrapper",children:h(Y,{to:"/propertyDetails",state:{property:E},children:h("img",{src:E.propertyDetails.pictures[0]})})}),v("div",{className:"listed-property-details",children:[h(Y,{to:"/propertyDetails",className:"myProperties-links",style:{marginBottom:"20px"},state:{property:E},children:E.propertyDetails.propertyName}),h("p",{children:E.propertyDetails.address+" "+E.propertyDetails.address2}),v("p",{className:"p-details",children:["Landlord name: ",E.landLordName]}),v("p",{className:"p-details",children:["Landlord ID: ",E.landLordId]}),v("p",{className:"p-details",children:["Property was listed on: ",B.day," of ",B.month," ",B.year]})]})]},P)})]}),n===e.apartments&&v("div",{className:"apartments-wrapper",children:[h("h2",{children:"Apartments"}),l.map((E,P)=>{let O=E.propertyDetails.dateCreated.toDate(),B=y(O);return v("div",{className:"listed-property admin-listed-property",style:{position:"relative"},children:[h("button",{className:"more-admin-options-btn",onClick:()=>I(P,"property"),children:"···"}),v("div",{className:"properties-more-admin-options",children:[h("button",{onClick:()=>p("apartments",E.docId),children:"Delete Property"}),h("button",{onClick:()=>Ke("show",E),children:"Edit Property"})]}),h("div",{className:"listed-property-img-wrapper admin-listed-property-img-wrapper",children:h(Y,{to:"/propertyDetails",state:{property:E},children:h("img",{src:E.propertyDetails.pictures[0]})})}),v("div",{className:"listed-property-details",children:[h(Y,{to:"/propertyDetails",className:"myProperties-links",state:{property:E},children:E.propertyDetails.propertyName}),h("p",{className:"p-details",children:E.propertyDetails.address+" "+E.propertyDetails.address2}),v("p",{className:"p-details",children:["Landlord name: ",E.landLordName]}),v("p",{className:"p-details",children:["Landlord ID: ",E.landLordId]}),v("p",{className:"p-details",children:["Property was listed on: ",B.day," of ",B.month," ",B.year]})]})]},P)})]}),n===e.resorts&&v("div",{className:"resorts-wrapper",children:[h("h2",{children:"Resorts"}),c.map((E,P)=>{let O=E.propertyDetails.dateCreated.toDate(),B=y(O);return v("div",{className:"listed-property admin-listed-property",style:{position:"relative"},children:[h("button",{className:"more-admin-options-btn",onClick:()=>I(P,"property"),children:"···"}),v("div",{className:"properties-more-admin-options",children:[h("button",{onClick:()=>p("resorts",E.docId),children:"Delete Property"}),h("button",{onClick:()=>Ke("show",E),children:"Edit Property"})]}),h("div",{className:"listed-property-img-wrapper admin-listed-property-img-wrapper",children:h(Y,{to:"/propertyDetails",state:{property:E},children:h("img",{src:E.propertyDetails.pictures[0]})})}),v("div",{className:"listed-property-details",children:[h(Y,{to:"/propertyDetails",className:"myProperties-links",state:{property:E},children:E.propertyDetails.propertyName}),h("p",{className:"p-details",children:E.propertyDetails.address+" "+E.propertyDetails.address2}),v("p",{className:"p-details",children:["Landlord name: ",E.landLordName]}),v("p",{className:"p-details",children:["Landlord ID: ",E.landLordId]}),v("p",{className:"p-details",children:["Property was listed on: ",B.day," of ",B.month," ",B.year]})]})]},P)})]}),v("div",{className:"edit-property-wrapper",children:[h("button",{className:"close-edit-form",onClick:()=>Ke("hide"),children:h("img",{src:ES})}),v("form",{className:"edit-property-form",onSubmit:E=>Vt(m,E,R,A,k,z,oe),children:[v("div",{className:"edit-inputs-wrappers",children:[h("label",{children:"Property Name"}),h("input",{required:!0,type:"text",placeholder:"Property Name",value:R,onChange:E=>N(E.target.value)})]}),v("select",{required:!0,onChange:E=>L(E.target.value),children:[h("option",{children:"--Select Country--"}),h("option",{children:"Kosovo"}),h("option",{children:"Albania"})]}),v("div",{className:"edit-inputs-wrappers",children:[h("label",{children:"City"}),h("input",{required:!0,type:"text",placeholder:"City",value:k,onChange:E=>D(E.target.value)})]}),v("div",{className:"edit-inputs-wrappers",children:[h("label",{children:"Address"}),h("input",{required:!0,type:"text",placeholder:"Address",value:z,onChange:E=>q(E.target.value)})]}),v("div",{className:"edit-inputs-wrappers",children:[h("label",{children:"Zip Code"}),h("input",{required:!0,type:"text",placeholder:"Zip Code",value:oe,onChange:E=>Z(E.target.value)})]}),h("button",{className:"submit-editted-property",children:"Save Changes"})]})]})]})]})]})}function NL(){return h(JT,{children:v(WT,{children:[h(Dt,{path:"/",exact:!0,element:h(pL,{})}),h(Dt,{path:"/signUp",exact:!0,element:h(dL,{})}),h(Dt,{path:"/signIn",exact:!0,element:h(fL,{})}),h(Dt,{path:"/listProperty",exact:!0,element:h(mL,{})}),h(Dt,{path:"/listPropertyForm",exact:!0,element:h(wL,{})}),h(Dt,{path:"/propertyBrowser",exact:!0,element:h(EL,{})}),h(Dt,{path:"/propertyDetails",exact:!0,element:h(_L,{})}),h(Dt,{path:"/queryResults",exact:!0,element:h(IL,{})}),h(Dt,{path:"/reserveForm",exact:!0,element:h(kL,{})}),h(Dt,{path:"/userProfile",exact:!0,element:h(TL,{})}),h(Dt,{path:"/adminPage",exact:!0,element:h(CL,{})})]})})}Yc.createRoot(document.getElementById("root")).render(h(NL,{}));
