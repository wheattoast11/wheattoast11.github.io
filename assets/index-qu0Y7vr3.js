var Jx=Object.defineProperty;var Qx=(t,e,n)=>e in t?Jx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ta=(t,e,n)=>Qx(t,typeof e!="symbol"?e+"":e,n);function eS(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function tS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gv={exports:{}},vu={},Wv={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=Symbol.for("react.element"),nS=Symbol.for("react.portal"),iS=Symbol.for("react.fragment"),rS=Symbol.for("react.strict_mode"),oS=Symbol.for("react.profiler"),sS=Symbol.for("react.provider"),aS=Symbol.for("react.context"),lS=Symbol.for("react.forward_ref"),uS=Symbol.for("react.suspense"),cS=Symbol.for("react.memo"),dS=Symbol.for("react.lazy"),vp=Symbol.iterator;function fS(t){return t===null||typeof t!="object"?null:(t=vp&&t[vp]||t["@@iterator"],typeof t=="function"?t:null)}var jv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$v=Object.assign,Xv={};function qo(t,e,n){this.props=t,this.context=e,this.refs=Xv,this.updater=n||jv}qo.prototype.isReactComponent={};qo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Yv(){}Yv.prototype=qo.prototype;function Ff(t,e,n){this.props=t,this.context=e,this.refs=Xv,this.updater=n||jv}var Of=Ff.prototype=new Yv;Of.constructor=Ff;$v(Of,qo.prototype);Of.isPureReactComponent=!0;var _p=Array.isArray,qv=Object.prototype.hasOwnProperty,kf={current:null},Kv={key:!0,ref:!0,__self:!0,__source:!0};function Zv(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)qv.call(e,i)&&!Kv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:la,type:t,key:o,ref:s,props:r,_owner:kf.current}}function hS(t,e){return{$$typeof:la,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bf(t){return typeof t=="object"&&t!==null&&t.$$typeof===la}function pS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yp=/\/+/g;function ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pS(""+t.key):e.toString(36)}function _l(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case la:case nS:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+ec(s,0):i,_p(r)?(n="",t!=null&&(n=t.replace(yp,"$&/")+"/"),_l(r,e,n,"",function(u){return u})):r!=null&&(Bf(r)&&(r=hS(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(yp,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",_p(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+ec(o,a);s+=_l(o,e,n,l,r)}else if(l=fS(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+ec(o,a++),s+=_l(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ca(t,e,n){if(t==null)return t;var i=[],r=0;return _l(t,i,"","",function(o){return e.call(n,o,r++)}),i}function mS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},yl={transition:null},gS={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:yl,ReactCurrentOwner:kf};function Jv(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Ca,forEach:function(t,e,n){Ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ca(t,function(){e++}),e},toArray:function(t){return Ca(t,function(e){return e})||[]},only:function(t){if(!Bf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=qo;qe.Fragment=iS;qe.Profiler=oS;qe.PureComponent=Ff;qe.StrictMode=rS;qe.Suspense=uS;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gS;qe.act=Jv;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=$v({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=kf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)qv.call(e,l)&&!Kv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:la,type:t.type,key:r,ref:o,props:i,_owner:s}};qe.createContext=function(t){return t={$$typeof:aS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sS,_context:t},t.Consumer=t};qe.createElement=Zv;qe.createFactory=function(t){var e=Zv.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:lS,render:t}};qe.isValidElement=Bf;qe.lazy=function(t){return{$$typeof:dS,_payload:{_status:-1,_result:t},_init:mS}};qe.memo=function(t,e){return{$$typeof:cS,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=yl.transition;yl.transition={};try{t()}finally{yl.transition=e}};qe.unstable_act=Jv;qe.useCallback=function(t,e){return rn.current.useCallback(t,e)};qe.useContext=function(t){return rn.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};qe.useEffect=function(t,e){return rn.current.useEffect(t,e)};qe.useId=function(){return rn.current.useId()};qe.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return rn.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};qe.useRef=function(t){return rn.current.useRef(t)};qe.useState=function(t){return rn.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return rn.current.useTransition()};qe.version="18.3.1";Wv.exports=qe;var y=Wv.exports;const Ge=tS(y),vS=eS({__proto__:null,default:Ge},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _S=y,yS=Symbol.for("react.element"),xS=Symbol.for("react.fragment"),SS=Object.prototype.hasOwnProperty,ES=_S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wS={key:!0,ref:!0,__self:!0,__source:!0};function Qv(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)SS.call(e,i)&&!wS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:yS,type:t,key:o,ref:s,props:r,_owner:ES.current}}vu.Fragment=xS;vu.jsx=Qv;vu.jsxs=Qv;Gv.exports=vu;var b=Gv.exports,e0={exports:{}},Tn={},t0={exports:{}},n0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,O){var H=U.length;U.push(O);e:for(;0<H;){var X=H-1>>>1,Q=U[X];if(0<r(Q,O))U[X]=O,U[H]=Q,H=X;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var O=U[0],H=U.pop();if(H!==O){U[0]=H;e:for(var X=0,Q=U.length,ge=Q>>>1;X<ge;){var j=2*(X+1)-1,K=U[j],ne=j+1,de=U[ne];if(0>r(K,H))ne<Q&&0>r(de,K)?(U[X]=de,U[ne]=H,X=ne):(U[X]=K,U[j]=H,X=j);else if(ne<Q&&0>r(de,H))U[X]=de,U[ne]=H,X=ne;else break e}}return O}function r(U,O){var H=U.sortIndex-O.sortIndex;return H!==0?H:U.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,h=3,g=!1,_=!1,S=!1,p=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(U){for(var O=n(u);O!==null;){if(O.callback===null)i(u);else if(O.startTime<=U)i(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function E(U){if(S=!1,v(U),!_)if(n(l)!==null)_=!0,F(M);else{var O=n(u);O!==null&&Z(E,O.startTime-U)}}function M(U,O){_=!1,S&&(S=!1,f(L),L=-1),g=!0;var H=h;try{for(v(O),d=n(l);d!==null&&(!(d.expirationTime>O)||U&&!A());){var X=d.callback;if(typeof X=="function"){d.callback=null,h=d.priorityLevel;var Q=X(d.expirationTime<=O);O=t.unstable_now(),typeof Q=="function"?d.callback=Q:d===n(l)&&i(l),v(O)}else i(l);d=n(l)}if(d!==null)var ge=!0;else{var j=n(u);j!==null&&Z(E,j.startTime-O),ge=!1}return ge}finally{d=null,h=H,g=!1}}var w=!1,T=null,L=-1,B=5,x=-1;function A(){return!(t.unstable_now()-x<B)}function k(){if(T!==null){var U=t.unstable_now();x=U;var O=!0;try{O=T(!0,U)}finally{O?z():(w=!1,T=null)}}else w=!1}var z;if(typeof m=="function")z=function(){m(k)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,G=D.port2;D.port1.onmessage=k,z=function(){G.postMessage(null)}}else z=function(){p(k,0)};function F(U){T=U,w||(w=!0,z())}function Z(U,O){L=p(function(){U(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,F(M))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var H=h;h=O;try{return U()}finally{h=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,O){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var H=h;h=U;try{return O()}finally{h=H}},t.unstable_scheduleCallback=function(U,O,H){var X=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?X+H:X):H=X,U){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=H+Q,U={id:c++,callback:O,priorityLevel:U,startTime:H,expirationTime:Q,sortIndex:-1},H>X?(U.sortIndex=H,e(u,U),n(l)===null&&U===n(u)&&(S?(f(L),L=-1):S=!0,Z(E,H-X))):(U.sortIndex=Q,e(l,U),_||g||(_=!0,F(M))),U},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(U){var O=h;return function(){var H=h;h=O;try{return U.apply(this,arguments)}finally{h=H}}}})(n0);t0.exports=n0;var MS=t0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TS=y,Mn=MS;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i0=new Set,Hs={};function Wr(t,e){ko(t,e),ko(t+"Capture",e)}function ko(t,e){for(Hs[t]=e,t=0;t<e.length;t++)i0.add(e[t])}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hd=Object.prototype.hasOwnProperty,CS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xp={},Sp={};function AS(t){return hd.call(Sp,t)?!0:hd.call(xp,t)?!1:CS.test(t)?Sp[t]=!0:(xp[t]=!0,!1)}function bS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function RS(t,e,n,i){if(e===null||typeof e>"u"||bS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var zf=/[\-:]([a-z])/g;function Vf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zf,Vf);Ht[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zf,Vf);Ht[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zf,Vf);Ht[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hf(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(RS(e,n,r,i)&&(n=null),i||r===null?AS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var bi=TS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),po=Symbol.for("react.portal"),mo=Symbol.for("react.fragment"),Gf=Symbol.for("react.strict_mode"),pd=Symbol.for("react.profiler"),r0=Symbol.for("react.provider"),o0=Symbol.for("react.context"),Wf=Symbol.for("react.forward_ref"),md=Symbol.for("react.suspense"),gd=Symbol.for("react.suspense_list"),jf=Symbol.for("react.memo"),Fi=Symbol.for("react.lazy"),s0=Symbol.for("react.offscreen"),Ep=Symbol.iterator;function fs(t){return t===null||typeof t!="object"?null:(t=Ep&&t[Ep]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,tc;function bs(t){if(tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tc=e&&e[1]||""}return`
`+tc+t}var nc=!1;function ic(t,e){if(!t||nc)return"";nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bs(t):""}function PS(t){switch(t.tag){case 5:return bs(t.type);case 16:return bs("Lazy");case 13:return bs("Suspense");case 19:return bs("SuspenseList");case 0:case 2:case 15:return t=ic(t.type,!1),t;case 11:return t=ic(t.type.render,!1),t;case 1:return t=ic(t.type,!0),t;default:return""}}function vd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case mo:return"Fragment";case po:return"Portal";case pd:return"Profiler";case Gf:return"StrictMode";case md:return"Suspense";case gd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case o0:return(t.displayName||"Context")+".Consumer";case r0:return(t._context.displayName||"Context")+".Provider";case Wf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jf:return e=t.displayName||null,e!==null?e:vd(t.type)||"Memo";case Fi:e=t._payload,t=t._init;try{return vd(t(e))}catch{}}return null}function LS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vd(e);case 8:return e===Gf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function a0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function NS(t){var e=a0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ba(t){t._valueTracker||(t._valueTracker=NS(t))}function l0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=a0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ul(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _d(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function u0(t,e){e=e.checked,e!=null&&Hf(t,"checked",e,!1)}function yd(t,e){u0(t,e);var n=nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xd(t,e.type,n):e.hasOwnProperty("defaultValue")&&xd(t,e.type,nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xd(t,e,n){(e!=="number"||Ul(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Rs=Array.isArray;function Ro(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Sd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Tp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Rs(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:nr(n)}}function c0(t,e){var n=nr(e.value),i=nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Cp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function d0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ed(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?d0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ra,f0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ra=Ra||document.createElement("div"),Ra.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ra.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Gs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ds={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},DS=["Webkit","ms","Moz","O"];Object.keys(Ds).forEach(function(t){DS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ds[e]=Ds[t]})});function h0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ds.hasOwnProperty(t)&&Ds[t]?(""+e).trim():e+"px"}function p0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=h0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var IS=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wd(t,e){if(e){if(IS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Md(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Td=null;function $f(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cd=null,Po=null,Lo=null;function Ap(t){if(t=da(t)){if(typeof Cd!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Eu(e),Cd(t.stateNode,t.type,e))}}function m0(t){Po?Lo?Lo.push(t):Lo=[t]:Po=t}function g0(){if(Po){var t=Po,e=Lo;if(Lo=Po=null,Ap(t),e)for(t=0;t<e.length;t++)Ap(e[t])}}function v0(t,e){return t(e)}function _0(){}var rc=!1;function y0(t,e,n){if(rc)return t(e,n);rc=!0;try{return v0(t,e,n)}finally{rc=!1,(Po!==null||Lo!==null)&&(_0(),g0())}}function Ws(t,e){var n=t.stateNode;if(n===null)return null;var i=Eu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Ad=!1;if(wi)try{var hs={};Object.defineProperty(hs,"passive",{get:function(){Ad=!0}}),window.addEventListener("test",hs,hs),window.removeEventListener("test",hs,hs)}catch{Ad=!1}function US(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Is=!1,Fl=null,Ol=!1,bd=null,FS={onError:function(t){Is=!0,Fl=t}};function OS(t,e,n,i,r,o,s,a,l){Is=!1,Fl=null,US.apply(FS,arguments)}function kS(t,e,n,i,r,o,s,a,l){if(OS.apply(this,arguments),Is){if(Is){var u=Fl;Is=!1,Fl=null}else throw Error(oe(198));Ol||(Ol=!0,bd=u)}}function jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function x0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bp(t){if(jr(t)!==t)throw Error(oe(188))}function BS(t){var e=t.alternate;if(!e){if(e=jr(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return bp(r),t;if(o===i)return bp(r),e;o=o.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function S0(t){return t=BS(t),t!==null?E0(t):null}function E0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=E0(t);if(e!==null)return e;t=t.sibling}return null}var w0=Mn.unstable_scheduleCallback,Rp=Mn.unstable_cancelCallback,zS=Mn.unstable_shouldYield,VS=Mn.unstable_requestPaint,St=Mn.unstable_now,HS=Mn.unstable_getCurrentPriorityLevel,Xf=Mn.unstable_ImmediatePriority,M0=Mn.unstable_UserBlockingPriority,kl=Mn.unstable_NormalPriority,GS=Mn.unstable_LowPriority,T0=Mn.unstable_IdlePriority,_u=null,ii=null;function WS(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(_u,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:XS,jS=Math.log,$S=Math.LN2;function XS(t){return t>>>=0,t===0?32:31-(jS(t)/$S|0)|0}var Pa=64,La=4194304;function Ps(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Ps(a):(o&=s,o!==0&&(i=Ps(o)))}else s=n&~r,s!==0?i=Ps(s):o!==0&&(i=Ps(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function YS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Xn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=YS(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Rd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function C0(){var t=Pa;return Pa<<=1,!(Pa&4194240)&&(Pa=64),t}function oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function KS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Yf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function A0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var b0,qf,R0,P0,L0,Pd=!1,Na=[],Wi=null,ji=null,$i=null,js=new Map,$s=new Map,ki=[],ZS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pp(t,e){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":js.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$s.delete(e.pointerId)}}function ps(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=da(e),e!==null&&qf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function JS(t,e,n,i,r){switch(e){case"focusin":return Wi=ps(Wi,t,e,n,i,r),!0;case"dragenter":return ji=ps(ji,t,e,n,i,r),!0;case"mouseover":return $i=ps($i,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return js.set(o,ps(js.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,$s.set(o,ps($s.get(o)||null,t,e,n,i,r)),!0}return!1}function N0(t){var e=Cr(t.target);if(e!==null){var n=jr(e);if(n!==null){if(e=n.tag,e===13){if(e=x0(n),e!==null){t.blockedOn=e,L0(t.priority,function(){R0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ld(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Td=i,n.target.dispatchEvent(i),Td=null}else return e=da(n),e!==null&&qf(e),t.blockedOn=n,!1;e.shift()}return!0}function Lp(t,e,n){xl(t)&&n.delete(e)}function QS(){Pd=!1,Wi!==null&&xl(Wi)&&(Wi=null),ji!==null&&xl(ji)&&(ji=null),$i!==null&&xl($i)&&($i=null),js.forEach(Lp),$s.forEach(Lp)}function ms(t,e){t.blockedOn===e&&(t.blockedOn=null,Pd||(Pd=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,QS)))}function Xs(t){function e(r){return ms(r,t)}if(0<Na.length){ms(Na[0],t);for(var n=1;n<Na.length;n++){var i=Na[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Wi!==null&&ms(Wi,t),ji!==null&&ms(ji,t),$i!==null&&ms($i,t),js.forEach(e),$s.forEach(e),n=0;n<ki.length;n++)i=ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ki.length&&(n=ki[0],n.blockedOn===null);)N0(n),n.blockedOn===null&&ki.shift()}var No=bi.ReactCurrentBatchConfig,zl=!0;function eE(t,e,n,i){var r=rt,o=No.transition;No.transition=null;try{rt=1,Kf(t,e,n,i)}finally{rt=r,No.transition=o}}function tE(t,e,n,i){var r=rt,o=No.transition;No.transition=null;try{rt=4,Kf(t,e,n,i)}finally{rt=r,No.transition=o}}function Kf(t,e,n,i){if(zl){var r=Ld(t,e,n,i);if(r===null)mc(t,e,i,Vl,n),Pp(t,i);else if(JS(r,t,e,n,i))i.stopPropagation();else if(Pp(t,i),e&4&&-1<ZS.indexOf(t)){for(;r!==null;){var o=da(r);if(o!==null&&b0(o),o=Ld(t,e,n,i),o===null&&mc(t,e,i,Vl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else mc(t,e,i,null,n)}}var Vl=null;function Ld(t,e,n,i){if(Vl=null,t=$f(i),t=Cr(t),t!==null)if(e=jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=x0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Vl=t,null}function D0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(HS()){case Xf:return 1;case M0:return 4;case kl:case GS:return 16;case T0:return 536870912;default:return 16}default:return 16}}var zi=null,Zf=null,Sl=null;function I0(){if(Sl)return Sl;var t,e=Zf,n=e.length,i,r="value"in zi?zi.value:zi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Sl=r.slice(t,1<i?1-i:void 0)}function El(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Da(){return!0}function Np(){return!1}function Cn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Da:Np,this.isPropagationStopped=Np,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),e}var Ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jf=Cn(Ko),ca=gt({},Ko,{view:0,detail:0}),nE=Cn(ca),sc,ac,gs,yu=gt({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gs&&(gs&&t.type==="mousemove"?(sc=t.screenX-gs.screenX,ac=t.screenY-gs.screenY):ac=sc=0,gs=t),sc)},movementY:function(t){return"movementY"in t?t.movementY:ac}}),Dp=Cn(yu),iE=gt({},yu,{dataTransfer:0}),rE=Cn(iE),oE=gt({},ca,{relatedTarget:0}),lc=Cn(oE),sE=gt({},Ko,{animationName:0,elapsedTime:0,pseudoElement:0}),aE=Cn(sE),lE=gt({},Ko,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uE=Cn(lE),cE=gt({},Ko,{data:0}),Ip=Cn(cE),dE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hE[t])?!!e[t]:!1}function Qf(){return pE}var mE=gt({},ca,{key:function(t){if(t.key){var e=dE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=El(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qf,charCode:function(t){return t.type==="keypress"?El(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?El(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gE=Cn(mE),vE=gt({},yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=Cn(vE),_E=gt({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qf}),yE=Cn(_E),xE=gt({},Ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),SE=Cn(xE),EE=gt({},yu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wE=Cn(EE),ME=[9,13,27,32],eh=wi&&"CompositionEvent"in window,Us=null;wi&&"documentMode"in document&&(Us=document.documentMode);var TE=wi&&"TextEvent"in window&&!Us,U0=wi&&(!eh||Us&&8<Us&&11>=Us),Fp=" ",Op=!1;function F0(t,e){switch(t){case"keyup":return ME.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function O0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var go=!1;function CE(t,e){switch(t){case"compositionend":return O0(e);case"keypress":return e.which!==32?null:(Op=!0,Fp);case"textInput":return t=e.data,t===Fp&&Op?null:t;default:return null}}function AE(t,e){if(go)return t==="compositionend"||!eh&&F0(t,e)?(t=I0(),Sl=Zf=zi=null,go=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return U0&&e.locale!=="ko"?null:e.data;default:return null}}var bE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bE[t.type]:e==="textarea"}function k0(t,e,n,i){m0(i),e=Hl(e,"onChange"),0<e.length&&(n=new Jf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Fs=null,Ys=null;function RE(t){q0(t,0)}function xu(t){var e=yo(t);if(l0(e))return t}function PE(t,e){if(t==="change")return e}var B0=!1;if(wi){var uc;if(wi){var cc="oninput"in document;if(!cc){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),cc=typeof Bp.oninput=="function"}uc=cc}else uc=!1;B0=uc&&(!document.documentMode||9<document.documentMode)}function zp(){Fs&&(Fs.detachEvent("onpropertychange",z0),Ys=Fs=null)}function z0(t){if(t.propertyName==="value"&&xu(Ys)){var e=[];k0(e,Ys,t,$f(t)),y0(RE,e)}}function LE(t,e,n){t==="focusin"?(zp(),Fs=e,Ys=n,Fs.attachEvent("onpropertychange",z0)):t==="focusout"&&zp()}function NE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xu(Ys)}function DE(t,e){if(t==="click")return xu(e)}function IE(t,e){if(t==="input"||t==="change")return xu(e)}function UE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:UE;function qs(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!hd.call(e,r)||!qn(t[r],e[r]))return!1}return!0}function Vp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hp(t,e){var n=Vp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vp(n)}}function V0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?V0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function H0(){for(var t=window,e=Ul();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ul(t.document)}return e}function th(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function FE(t){var e=H0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&V0(n.ownerDocument.documentElement,n)){if(i!==null&&th(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Hp(n,o);var s=Hp(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var OE=wi&&"documentMode"in document&&11>=document.documentMode,vo=null,Nd=null,Os=null,Dd=!1;function Gp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dd||vo==null||vo!==Ul(i)||(i=vo,"selectionStart"in i&&th(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Os&&qs(Os,i)||(Os=i,i=Hl(Nd,"onSelect"),0<i.length&&(e=new Jf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=vo)))}function Ia(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _o={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionend:Ia("Transition","TransitionEnd")},dc={},G0={};wi&&(G0=document.createElement("div").style,"AnimationEvent"in window||(delete _o.animationend.animation,delete _o.animationiteration.animation,delete _o.animationstart.animation),"TransitionEvent"in window||delete _o.transitionend.transition);function Su(t){if(dc[t])return dc[t];if(!_o[t])return t;var e=_o[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in G0)return dc[t]=e[n];return t}var W0=Su("animationend"),j0=Su("animationiteration"),$0=Su("animationstart"),X0=Su("transitionend"),Y0=new Map,Wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){Y0.set(t,e),Wr(e,[t])}for(var fc=0;fc<Wp.length;fc++){var hc=Wp[fc],kE=hc.toLowerCase(),BE=hc[0].toUpperCase()+hc.slice(1);sr(kE,"on"+BE)}sr(W0,"onAnimationEnd");sr(j0,"onAnimationIteration");sr($0,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(X0,"onTransitionEnd");ko("onMouseEnter",["mouseout","mouseover"]);ko("onMouseLeave",["mouseout","mouseover"]);ko("onPointerEnter",["pointerout","pointerover"]);ko("onPointerLeave",["pointerout","pointerover"]);Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ls));function jp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,kS(i,e,void 0,t),t.currentTarget=null}function q0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;jp(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;jp(r,a,u),o=l}}}if(Ol)throw t=bd,Ol=!1,bd=null,t}function lt(t,e){var n=e[kd];n===void 0&&(n=e[kd]=new Set);var i=t+"__bubble";n.has(i)||(K0(e,t,2,!1),n.add(i))}function pc(t,e,n){var i=0;e&&(i|=4),K0(n,t,i,e)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function Ks(t){if(!t[Ua]){t[Ua]=!0,i0.forEach(function(n){n!=="selectionchange"&&(zE.has(n)||pc(n,!1,t),pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ua]||(e[Ua]=!0,pc("selectionchange",!1,e))}}function K0(t,e,n,i){switch(D0(e)){case 1:var r=eE;break;case 4:r=tE;break;default:r=Kf}n=r.bind(null,e,n,t),r=void 0,!Ad||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function mc(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Cr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}y0(function(){var u=o,c=$f(n),d=[];e:{var h=Y0.get(t);if(h!==void 0){var g=Jf,_=t;switch(t){case"keypress":if(El(n)===0)break e;case"keydown":case"keyup":g=gE;break;case"focusin":_="focus",g=lc;break;case"focusout":_="blur",g=lc;break;case"beforeblur":case"afterblur":g=lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=rE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=yE;break;case W0:case j0:case $0:g=aE;break;case X0:g=SE;break;case"scroll":g=nE;break;case"wheel":g=wE;break;case"copy":case"cut":case"paste":g=uE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Up}var S=(e&4)!==0,p=!S&&t==="scroll",f=S?h!==null?h+"Capture":null:h;S=[];for(var m=u,v;m!==null;){v=m;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,f!==null&&(E=Ws(m,f),E!=null&&S.push(Zs(m,E,v)))),p)break;m=m.return}0<S.length&&(h=new g(h,_,null,n,c),d.push({event:h,listeners:S}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Td&&(_=n.relatedTarget||n.fromElement)&&(Cr(_)||_[Mi]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Cr(_):null,_!==null&&(p=jr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(S=Dp,E="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(S=Up,E="onPointerLeave",f="onPointerEnter",m="pointer"),p=g==null?h:yo(g),v=_==null?h:yo(_),h=new S(E,m+"leave",g,n,c),h.target=p,h.relatedTarget=v,E=null,Cr(c)===u&&(S=new S(f,m+"enter",_,n,c),S.target=v,S.relatedTarget=p,E=S),p=E,g&&_)t:{for(S=g,f=_,m=0,v=S;v;v=Yr(v))m++;for(v=0,E=f;E;E=Yr(E))v++;for(;0<m-v;)S=Yr(S),m--;for(;0<v-m;)f=Yr(f),v--;for(;m--;){if(S===f||f!==null&&S===f.alternate)break t;S=Yr(S),f=Yr(f)}S=null}else S=null;g!==null&&$p(d,h,g,S,!1),_!==null&&p!==null&&$p(d,p,_,S,!0)}}e:{if(h=u?yo(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var M=PE;else if(kp(h))if(B0)M=IE;else{M=NE;var w=LE}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(M=DE);if(M&&(M=M(t,u))){k0(d,M,n,c);break e}w&&w(t,h,u),t==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&xd(h,"number",h.value)}switch(w=u?yo(u):window,t){case"focusin":(kp(w)||w.contentEditable==="true")&&(vo=w,Nd=u,Os=null);break;case"focusout":Os=Nd=vo=null;break;case"mousedown":Dd=!0;break;case"contextmenu":case"mouseup":case"dragend":Dd=!1,Gp(d,n,c);break;case"selectionchange":if(OE)break;case"keydown":case"keyup":Gp(d,n,c)}var T;if(eh)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else go?F0(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(U0&&n.locale!=="ko"&&(go||L!=="onCompositionStart"?L==="onCompositionEnd"&&go&&(T=I0()):(zi=c,Zf="value"in zi?zi.value:zi.textContent,go=!0)),w=Hl(u,L),0<w.length&&(L=new Ip(L,t,null,n,c),d.push({event:L,listeners:w}),T?L.data=T:(T=O0(n),T!==null&&(L.data=T)))),(T=TE?CE(t,n):AE(t,n))&&(u=Hl(u,"onBeforeInput"),0<u.length&&(c=new Ip("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=T))}q0(d,e)})}function Zs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Ws(t,n),o!=null&&i.unshift(Zs(t,o,r)),o=Ws(t,e),o!=null&&i.push(Zs(t,o,r))),t=t.return}return i}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $p(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ws(n,o),l!=null&&s.unshift(Zs(n,l,a))):r||(l=Ws(n,o),l!=null&&s.push(Zs(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var VE=/\r\n?/g,HE=/\u0000|\uFFFD/g;function Xp(t){return(typeof t=="string"?t:""+t).replace(VE,`
`).replace(HE,"")}function Fa(t,e,n){if(e=Xp(e),Xp(t)!==e&&n)throw Error(oe(425))}function Gl(){}var Id=null,Ud=null;function Fd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Od=typeof setTimeout=="function"?setTimeout:void 0,GE=typeof clearTimeout=="function"?clearTimeout:void 0,Yp=typeof Promise=="function"?Promise:void 0,WE=typeof queueMicrotask=="function"?queueMicrotask:typeof Yp<"u"?function(t){return Yp.resolve(null).then(t).catch(jE)}:Od;function jE(t){setTimeout(function(){throw t})}function gc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Xs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Xs(e)}function Xi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zo=Math.random().toString(36).slice(2),ei="__reactFiber$"+Zo,Js="__reactProps$"+Zo,Mi="__reactContainer$"+Zo,kd="__reactEvents$"+Zo,$E="__reactListeners$"+Zo,XE="__reactHandles$"+Zo;function Cr(t){var e=t[ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mi]||n[ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qp(t);t!==null;){if(n=t[ei])return n;t=qp(t)}return e}t=n,n=t.parentNode}return null}function da(t){return t=t[ei]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function yo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Eu(t){return t[Js]||null}var Bd=[],xo=-1;function ar(t){return{current:t}}function ct(t){0>xo||(t.current=Bd[xo],Bd[xo]=null,xo--)}function at(t,e){xo++,Bd[xo]=t.current,t.current=e}var ir={},qt=ar(ir),dn=ar(!1),Fr=ir;function Bo(t,e){var n=t.type.contextTypes;if(!n)return ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function Wl(){ct(dn),ct(qt)}function Kp(t,e,n){if(qt.current!==ir)throw Error(oe(168));at(qt,e),at(dn,n)}function Z0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,LS(t)||"Unknown",r));return gt({},n,i)}function jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Fr=qt.current,at(qt,t),at(dn,dn.current),!0}function Zp(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=Z0(t,e,Fr),i.__reactInternalMemoizedMergedChildContext=t,ct(dn),ct(qt),at(qt,t)):ct(dn),at(dn,n)}var gi=null,wu=!1,vc=!1;function J0(t){gi===null?gi=[t]:gi.push(t)}function YE(t){wu=!0,J0(t)}function lr(){if(!vc&&gi!==null){vc=!0;var t=0,e=rt;try{var n=gi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,wu=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),w0(Xf,lr),r}finally{rt=e,vc=!1}}return null}var So=[],Eo=0,$l=null,Xl=0,Rn=[],Pn=0,Or=null,yi=1,xi="";function yr(t,e){So[Eo++]=Xl,So[Eo++]=$l,$l=t,Xl=e}function Q0(t,e,n){Rn[Pn++]=yi,Rn[Pn++]=xi,Rn[Pn++]=Or,Or=t;var i=yi;t=xi;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var o=32-Xn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,yi=1<<32-Xn(e)+r|n<<r|i,xi=o+t}else yi=1<<o|n<<r|i,xi=t}function nh(t){t.return!==null&&(yr(t,1),Q0(t,1,0))}function ih(t){for(;t===$l;)$l=So[--Eo],So[Eo]=null,Xl=So[--Eo],So[Eo]=null;for(;t===Or;)Or=Rn[--Pn],Rn[Pn]=null,xi=Rn[--Pn],Rn[Pn]=null,yi=Rn[--Pn],Rn[Pn]=null}var wn=null,En=null,dt=!1,Wn=null;function e_(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wn=t,En=Xi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Or!==null?{id:yi,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wn=t,En=null,!0):!1;default:return!1}}function zd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vd(t){if(dt){var e=En;if(e){var n=e;if(!Jp(t,e)){if(zd(t))throw Error(oe(418));e=Xi(n.nextSibling);var i=wn;e&&Jp(t,e)?e_(i,n):(t.flags=t.flags&-4097|2,dt=!1,wn=t)}}else{if(zd(t))throw Error(oe(418));t.flags=t.flags&-4097|2,dt=!1,wn=t}}}function Qp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wn=t}function Oa(t){if(t!==wn)return!1;if(!dt)return Qp(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fd(t.type,t.memoizedProps)),e&&(e=En)){if(zd(t))throw t_(),Error(oe(418));for(;e;)e_(t,e),e=Xi(e.nextSibling)}if(Qp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=Xi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=wn?Xi(t.stateNode.nextSibling):null;return!0}function t_(){for(var t=En;t;)t=Xi(t.nextSibling)}function zo(){En=wn=null,dt=!1}function rh(t){Wn===null?Wn=[t]:Wn.push(t)}var qE=bi.ReactCurrentBatchConfig;function vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function ka(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function em(t){var e=t._init;return e(t._payload)}function n_(t){function e(f,m){if(t){var v=f.deletions;v===null?(f.deletions=[m],f.flags|=16):v.push(m)}}function n(f,m){if(!t)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function i(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function r(f,m){return f=Zi(f,m),f.index=0,f.sibling=null,f}function o(f,m,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<m?(f.flags|=2,m):v):(f.flags|=2,m)):(f.flags|=1048576,m)}function s(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,m,v,E){return m===null||m.tag!==6?(m=Mc(v,f.mode,E),m.return=f,m):(m=r(m,v),m.return=f,m)}function l(f,m,v,E){var M=v.type;return M===mo?c(f,m,v.props.children,E,v.key):m!==null&&(m.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Fi&&em(M)===m.type)?(E=r(m,v.props),E.ref=vs(f,m,v),E.return=f,E):(E=Rl(v.type,v.key,v.props,null,f.mode,E),E.ref=vs(f,m,v),E.return=f,E)}function u(f,m,v,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Tc(v,f.mode,E),m.return=f,m):(m=r(m,v.children||[]),m.return=f,m)}function c(f,m,v,E,M){return m===null||m.tag!==7?(m=Nr(v,f.mode,E,M),m.return=f,m):(m=r(m,v),m.return=f,m)}function d(f,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Mc(""+m,f.mode,v),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Aa:return v=Rl(m.type,m.key,m.props,null,f.mode,v),v.ref=vs(f,null,m),v.return=f,v;case po:return m=Tc(m,f.mode,v),m.return=f,m;case Fi:var E=m._init;return d(f,E(m._payload),v)}if(Rs(m)||fs(m))return m=Nr(m,f.mode,v,null),m.return=f,m;ka(f,m)}return null}function h(f,m,v,E){var M=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:a(f,m,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Aa:return v.key===M?l(f,m,v,E):null;case po:return v.key===M?u(f,m,v,E):null;case Fi:return M=v._init,h(f,m,M(v._payload),E)}if(Rs(v)||fs(v))return M!==null?null:c(f,m,v,E,null);ka(f,v)}return null}function g(f,m,v,E,M){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(v)||null,a(m,f,""+E,M);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Aa:return f=f.get(E.key===null?v:E.key)||null,l(m,f,E,M);case po:return f=f.get(E.key===null?v:E.key)||null,u(m,f,E,M);case Fi:var w=E._init;return g(f,m,v,w(E._payload),M)}if(Rs(E)||fs(E))return f=f.get(v)||null,c(m,f,E,M,null);ka(m,E)}return null}function _(f,m,v,E){for(var M=null,w=null,T=m,L=m=0,B=null;T!==null&&L<v.length;L++){T.index>L?(B=T,T=null):B=T.sibling;var x=h(f,T,v[L],E);if(x===null){T===null&&(T=B);break}t&&T&&x.alternate===null&&e(f,T),m=o(x,m,L),w===null?M=x:w.sibling=x,w=x,T=B}if(L===v.length)return n(f,T),dt&&yr(f,L),M;if(T===null){for(;L<v.length;L++)T=d(f,v[L],E),T!==null&&(m=o(T,m,L),w===null?M=T:w.sibling=T,w=T);return dt&&yr(f,L),M}for(T=i(f,T);L<v.length;L++)B=g(T,f,L,v[L],E),B!==null&&(t&&B.alternate!==null&&T.delete(B.key===null?L:B.key),m=o(B,m,L),w===null?M=B:w.sibling=B,w=B);return t&&T.forEach(function(A){return e(f,A)}),dt&&yr(f,L),M}function S(f,m,v,E){var M=fs(v);if(typeof M!="function")throw Error(oe(150));if(v=M.call(v),v==null)throw Error(oe(151));for(var w=M=null,T=m,L=m=0,B=null,x=v.next();T!==null&&!x.done;L++,x=v.next()){T.index>L?(B=T,T=null):B=T.sibling;var A=h(f,T,x.value,E);if(A===null){T===null&&(T=B);break}t&&T&&A.alternate===null&&e(f,T),m=o(A,m,L),w===null?M=A:w.sibling=A,w=A,T=B}if(x.done)return n(f,T),dt&&yr(f,L),M;if(T===null){for(;!x.done;L++,x=v.next())x=d(f,x.value,E),x!==null&&(m=o(x,m,L),w===null?M=x:w.sibling=x,w=x);return dt&&yr(f,L),M}for(T=i(f,T);!x.done;L++,x=v.next())x=g(T,f,L,x.value,E),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?L:x.key),m=o(x,m,L),w===null?M=x:w.sibling=x,w=x);return t&&T.forEach(function(k){return e(f,k)}),dt&&yr(f,L),M}function p(f,m,v,E){if(typeof v=="object"&&v!==null&&v.type===mo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Aa:e:{for(var M=v.key,w=m;w!==null;){if(w.key===M){if(M=v.type,M===mo){if(w.tag===7){n(f,w.sibling),m=r(w,v.props.children),m.return=f,f=m;break e}}else if(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Fi&&em(M)===w.type){n(f,w.sibling),m=r(w,v.props),m.ref=vs(f,w,v),m.return=f,f=m;break e}n(f,w);break}else e(f,w);w=w.sibling}v.type===mo?(m=Nr(v.props.children,f.mode,E,v.key),m.return=f,f=m):(E=Rl(v.type,v.key,v.props,null,f.mode,E),E.ref=vs(f,m,v),E.return=f,f=E)}return s(f);case po:e:{for(w=v.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(f,m.sibling),m=r(m,v.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else e(f,m);m=m.sibling}m=Tc(v,f.mode,E),m.return=f,f=m}return s(f);case Fi:return w=v._init,p(f,m,w(v._payload),E)}if(Rs(v))return _(f,m,v,E);if(fs(v))return S(f,m,v,E);ka(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(f,m.sibling),m=r(m,v),m.return=f,f=m):(n(f,m),m=Mc(v,f.mode,E),m.return=f,f=m),s(f)):n(f,m)}return p}var Vo=n_(!0),i_=n_(!1),Yl=ar(null),ql=null,wo=null,oh=null;function sh(){oh=wo=ql=null}function ah(t){var e=Yl.current;ct(Yl),t._currentValue=e}function Hd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Do(t,e){ql=t,oh=wo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(oh!==t)if(t={context:t,memoizedValue:e,next:null},wo===null){if(ql===null)throw Error(oe(308));wo=t,ql.dependencies={lanes:0,firstContext:t}}else wo=wo.next=t;return e}var Ar=null;function lh(t){Ar===null?Ar=[t]:Ar.push(t)}function r_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,lh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ti(t,i)}function Ti(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Oi=!1;function uh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function o_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ti(t,n)}return r=i.interleaved,r===null?(e.next=e,lh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ti(t,n)}function wl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Yf(t,n)}}function tm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Kl(t,e,n,i){var r=t.updateQueue;Oi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,g=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,S=a;switch(h=e,g=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){d=_.call(g,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,h=typeof _=="function"?_.call(g,d,h):_,h==null)break e;d=gt({},d,h);break e;case 2:Oi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Br|=s,t.lanes=s,t.memoizedState=d}}function nm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var fa={},ri=ar(fa),Qs=ar(fa),ea=ar(fa);function br(t){if(t===fa)throw Error(oe(174));return t}function ch(t,e){switch(at(ea,e),at(Qs,t),at(ri,fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ed(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ed(e,t)}ct(ri),at(ri,e)}function Ho(){ct(ri),ct(Qs),ct(ea)}function s_(t){br(ea.current);var e=br(ri.current),n=Ed(e,t.type);e!==n&&(at(Qs,t),at(ri,n))}function dh(t){Qs.current===t&&(ct(ri),ct(Qs))}var pt=ar(0);function Zl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _c=[];function fh(){for(var t=0;t<_c.length;t++)_c[t]._workInProgressVersionPrimary=null;_c.length=0}var Ml=bi.ReactCurrentDispatcher,yc=bi.ReactCurrentBatchConfig,kr=0,mt=null,bt=null,Ut=null,Jl=!1,ks=!1,ta=0,KE=0;function Wt(){throw Error(oe(321))}function hh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function ph(t,e,n,i,r,o){if(kr=o,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ml.current=t===null||t.memoizedState===null?ew:tw,t=n(i,r),ks){o=0;do{if(ks=!1,ta=0,25<=o)throw Error(oe(301));o+=1,Ut=bt=null,e.updateQueue=null,Ml.current=nw,t=n(i,r)}while(ks)}if(Ml.current=Ql,e=bt!==null&&bt.next!==null,kr=0,Ut=bt=mt=null,Jl=!1,e)throw Error(oe(300));return t}function mh(){var t=ta!==0;return ta=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?mt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Fn(){if(bt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Ut===null?mt.memoizedState:Ut.next;if(e!==null)Ut=e,bt=t;else{if(t===null)throw Error(oe(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ut===null?mt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function na(t,e){return typeof e=="function"?e(t):e}function xc(t){var e=Fn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((kr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,mt.lanes|=c,Br|=c}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,qn(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,mt.lanes|=o,Br|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Sc(t){var e=Fn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);qn(o,e.memoizedState)||(cn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function a_(){}function l_(t,e){var n=mt,i=Fn(),r=e(),o=!qn(i.memoizedState,r);if(o&&(i.memoizedState=r,cn=!0),i=i.queue,gh(d_.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,ia(9,c_.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(oe(349));kr&30||u_(n,e,r)}return r}function u_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function c_(t,e,n,i){e.value=n,e.getSnapshot=i,f_(e)&&h_(t)}function d_(t,e,n){return n(function(){f_(e)&&h_(t)})}function f_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function h_(t){var e=Ti(t,1);e!==null&&Yn(e,t,1,-1)}function im(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},e.queue=t,t=t.dispatch=QE.bind(null,mt,t),[e.memoizedState,t]}function ia(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function p_(){return Fn().memoizedState}function Tl(t,e,n,i){var r=Jn();mt.flags|=t,r.memoizedState=ia(1|e,n,void 0,i===void 0?null:i)}function Mu(t,e,n,i){var r=Fn();i=i===void 0?null:i;var o=void 0;if(bt!==null){var s=bt.memoizedState;if(o=s.destroy,i!==null&&hh(i,s.deps)){r.memoizedState=ia(e,n,o,i);return}}mt.flags|=t,r.memoizedState=ia(1|e,n,o,i)}function rm(t,e){return Tl(8390656,8,t,e)}function gh(t,e){return Mu(2048,8,t,e)}function m_(t,e){return Mu(4,2,t,e)}function g_(t,e){return Mu(4,4,t,e)}function v_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function __(t,e,n){return n=n!=null?n.concat([t]):null,Mu(4,4,v_.bind(null,e,t),n)}function vh(){}function y_(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&hh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function x_(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&hh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function S_(t,e,n){return kr&21?(qn(n,e)||(n=C0(),mt.lanes|=n,Br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function ZE(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=yc.transition;yc.transition={};try{t(!1),e()}finally{rt=n,yc.transition=i}}function E_(){return Fn().memoizedState}function JE(t,e,n){var i=Ki(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},w_(t))M_(e,n);else if(n=r_(t,e,n,i),n!==null){var r=en();Yn(n,t,i,r),T_(n,e,i)}}function QE(t,e,n){var i=Ki(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(w_(t))M_(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,qn(a,s)){var l=e.interleaved;l===null?(r.next=r,lh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=r_(t,e,r,i),n!==null&&(r=en(),Yn(n,t,i,r),T_(n,e,i))}}function w_(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function M_(t,e){ks=Jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function T_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Yf(t,n)}}var Ql={readContext:Un,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},ew={readContext:Un,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:rm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Tl(4194308,4,v_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Tl(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=JE.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:im,useDebugValue:vh,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=im(!1),e=t[0];return t=ZE.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=Jn();if(dt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Ft===null)throw Error(oe(349));kr&30||u_(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,rm(d_.bind(null,i,o,t),[t]),i.flags|=2048,ia(9,c_.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Jn(),e=Ft.identifierPrefix;if(dt){var n=xi,i=yi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=KE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},tw={readContext:Un,useCallback:y_,useContext:Un,useEffect:gh,useImperativeHandle:__,useInsertionEffect:m_,useLayoutEffect:g_,useMemo:x_,useReducer:xc,useRef:p_,useState:function(){return xc(na)},useDebugValue:vh,useDeferredValue:function(t){var e=Fn();return S_(e,bt.memoizedState,t)},useTransition:function(){var t=xc(na)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:a_,useSyncExternalStore:l_,useId:E_,unstable_isNewReconciler:!1},nw={readContext:Un,useCallback:y_,useContext:Un,useEffect:gh,useImperativeHandle:__,useInsertionEffect:m_,useLayoutEffect:g_,useMemo:x_,useReducer:Sc,useRef:p_,useState:function(){return Sc(na)},useDebugValue:vh,useDeferredValue:function(t){var e=Fn();return bt===null?e.memoizedState=t:S_(e,bt.memoizedState,t)},useTransition:function(){var t=Sc(na)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:a_,useSyncExternalStore:l_,useId:E_,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tu={isMounted:function(t){return(t=t._reactInternals)?jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=en(),r=Ki(t),o=Ei(i,r);o.payload=e,n!=null&&(o.callback=n),e=Yi(t,o,r),e!==null&&(Yn(e,t,r,i),wl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=en(),r=Ki(t),o=Ei(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Yi(t,o,r),e!==null&&(Yn(e,t,r,i),wl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),i=Ki(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=Yi(t,r,i),e!==null&&(Yn(e,t,i,n),wl(e,t,i))}};function om(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!qs(n,i)||!qs(r,o):!0}function C_(t,e,n){var i=!1,r=ir,o=e.contextType;return typeof o=="object"&&o!==null?o=Un(o):(r=fn(e)?Fr:qt.current,i=e.contextTypes,o=(i=i!=null)?Bo(t,r):ir),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function sm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Tu.enqueueReplaceState(e,e.state,null)}function Wd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},uh(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Un(o):(o=fn(e)?Fr:qt.current,r.context=Bo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Gd(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Tu.enqueueReplaceState(r,r.state,null),Kl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Go(t,e){try{var n="",i=e;do n+=PS(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function jd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iw=typeof WeakMap=="function"?WeakMap:Map;function A_(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){tu||(tu=!0,tf=i),jd(t,e)},n}function b_(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){jd(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){jd(t,e),typeof i!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function am(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new iw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=vw.bind(null,t,e,n),e.then(t,t))}function lm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function um(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,Yi(n,e,1))),n.lanes|=1),t)}var rw=bi.ReactCurrentOwner,cn=!1;function Jt(t,e,n,i){e.child=t===null?i_(e,null,n,i):Vo(e,t.child,n,i)}function cm(t,e,n,i,r){n=n.render;var o=e.ref;return Do(e,r),i=ph(t,e,n,i,o,r),n=mh(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(dt&&n&&nh(e),e.flags|=1,Jt(t,e,i,r),e.child)}function dm(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Th(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,R_(t,e,o,i,r)):(t=Rl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:qs,n(s,i)&&t.ref===e.ref)return Ci(t,e,r)}return e.flags|=1,t=Zi(o,i),t.ref=e.ref,t.return=e,e.child=t}function R_(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(qs(o,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Ci(t,e,r)}return $d(t,e,n,i,r)}function P_(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(To,xn),xn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(To,xn),xn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,at(To,xn),xn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,at(To,xn),xn|=i;return Jt(t,e,r,n),e.child}function L_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $d(t,e,n,i,r){var o=fn(n)?Fr:qt.current;return o=Bo(e,o),Do(e,r),n=ph(t,e,n,i,o,r),i=mh(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(dt&&i&&nh(e),e.flags|=1,Jt(t,e,n,r),e.child)}function fm(t,e,n,i,r){if(fn(n)){var o=!0;jl(e)}else o=!1;if(Do(e,r),e.stateNode===null)Cl(t,e),C_(e,n,i),Wd(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Un(u):(u=fn(n)?Fr:qt.current,u=Bo(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&sm(e,s,i,u),Oi=!1;var h=e.memoizedState;s.state=h,Kl(e,i,s,r),l=e.memoizedState,a!==i||h!==l||dn.current||Oi?(typeof c=="function"&&(Gd(e,n,c,i),l=e.memoizedState),(a=Oi||om(e,n,a,i,h,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,o_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Hn(e.type,a),s.props=u,d=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=fn(n)?Fr:qt.current,l=Bo(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&sm(e,s,i,l),Oi=!1,h=e.memoizedState,s.state=h,Kl(e,i,s,r);var _=e.memoizedState;a!==d||h!==_||dn.current||Oi?(typeof g=="function"&&(Gd(e,n,g,i),_=e.memoizedState),(u=Oi||om(e,n,u,i,h,_,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),s.props=i,s.state=_,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Xd(t,e,n,i,o,r)}function Xd(t,e,n,i,r,o){L_(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Zp(e,n,!1),Ci(t,e,o);i=e.stateNode,rw.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Vo(e,t.child,null,o),e.child=Vo(e,null,a,o)):Jt(t,e,a,o),e.memoizedState=i.state,r&&Zp(e,n,!0),e.child}function N_(t){var e=t.stateNode;e.pendingContext?Kp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kp(t,e.context,!1),ch(t,e.containerInfo)}function hm(t,e,n,i,r){return zo(),rh(r),e.flags|=256,Jt(t,e,n,i),e.child}var Yd={dehydrated:null,treeContext:null,retryLane:0};function qd(t){return{baseLanes:t,cachePool:null,transitions:null}}function D_(t,e,n){var i=e.pendingProps,r=pt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(pt,r&1),t===null)return Vd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=bu(s,i,0,null),t=Nr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=qd(n),e.memoizedState=Yd,t):_h(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ow(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Zi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Zi(a,o):(o=Nr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?qd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Yd,i}return o=t.child,t=o.sibling,i=Zi(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function _h(t,e){return e=bu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ba(t,e,n,i){return i!==null&&rh(i),Vo(e,t.child,null,n),t=_h(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ow(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Ec(Error(oe(422))),Ba(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=bu({mode:"visible",children:i.children},r,0,null),o=Nr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Vo(e,t.child,null,s),e.child.memoizedState=qd(s),e.memoizedState=Yd,o);if(!(e.mode&1))return Ba(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(oe(419)),i=Ec(o,i,void 0),Ba(t,e,s,i)}if(a=(s&t.childLanes)!==0,cn||a){if(i=Ft,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Ti(t,r),Yn(i,t,r,-1))}return Mh(),i=Ec(Error(oe(421))),Ba(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=_w.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,En=Xi(r.nextSibling),wn=e,dt=!0,Wn=null,t!==null&&(Rn[Pn++]=yi,Rn[Pn++]=xi,Rn[Pn++]=Or,yi=t.id,xi=t.overflow,Or=e),e=_h(e,i.children),e.flags|=4096,e)}function pm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Hd(t.return,e,n)}function wc(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function I_(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Jt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pm(t,n,e);else if(t.tag===19)pm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Zl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),wc(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Zl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}wc(e,!0,n,null,o);break;case"together":wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Zi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sw(t,e,n){switch(e.tag){case 3:N_(e),zo();break;case 5:s_(e);break;case 1:fn(e.type)&&jl(e);break;case 4:ch(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(Yl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?D_(t,e,n):(at(pt,pt.current&1),t=Ci(t,e,n),t!==null?t.sibling:null);at(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return I_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,P_(t,e,n)}return Ci(t,e,n)}var U_,Kd,F_,O_;U_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kd=function(){};F_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,br(ri.current);var o=null;switch(n){case"input":r=_d(t,r),i=_d(t,i),o=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),o=[];break;case"textarea":r=Sd(t,r),i=Sd(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Gl)}wd(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&lt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};O_=function(t,e,n,i){n!==i&&(e.flags|=4)};function _s(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function aw(t,e,n){var i=e.pendingProps;switch(ih(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return fn(e.type)&&Wl(),jt(e),null;case 3:return i=e.stateNode,Ho(),ct(dn),ct(qt),fh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(of(Wn),Wn=null))),Kd(t,e),jt(e),null;case 5:dh(e);var r=br(ea.current);if(n=e.type,t!==null&&e.stateNode!=null)F_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return jt(e),null}if(t=br(ri.current),Oa(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ei]=e,i[Js]=o,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<Ls.length;r++)lt(Ls[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":wp(i,o),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},lt("invalid",i);break;case"textarea":Tp(i,o),lt("invalid",i)}wd(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Fa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Fa(i.textContent,a,t),r=["children",""+a]):Hs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&lt("scroll",i)}switch(n){case"input":ba(i),Mp(i,o,!0);break;case"textarea":ba(i),Cp(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Gl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=d0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[ei]=e,t[Js]=i,U_(t,e,!1,!1),e.stateNode=t;e:{switch(s=Md(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ls.length;r++)lt(Ls[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":wp(t,i),r=_d(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":Tp(t,i),r=Sd(t,i),lt("invalid",t);break;default:r=i}wd(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?p0(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&f0(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Gs(t,l):typeof l=="number"&&Gs(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Hs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&lt("scroll",t):l!=null&&Hf(t,o,l,s))}switch(n){case"input":ba(t),Mp(t,i,!1);break;case"textarea":ba(t),Cp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+nr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Ro(t,!!i.multiple,o,!1):i.defaultValue!=null&&Ro(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Gl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)O_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=br(ea.current),br(ri.current),Oa(e)){if(i=e.stateNode,n=e.memoizedProps,i[ei]=e,(o=i.nodeValue!==n)&&(t=wn,t!==null))switch(t.tag){case 3:Fa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fa(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return jt(e),null;case 13:if(ct(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&En!==null&&e.mode&1&&!(e.flags&128))t_(),zo(),e.flags|=98560,o=!1;else if(o=Oa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(oe(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(oe(317));o[ei]=e}else zo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),o=!1}else Wn!==null&&(of(Wn),Wn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Rt===0&&(Rt=3):Mh())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return Ho(),Kd(t,e),t===null&&Ks(e.stateNode.containerInfo),jt(e),null;case 10:return ah(e.type._context),jt(e),null;case 17:return fn(e.type)&&Wl(),jt(e),null;case 19:if(ct(pt),o=e.memoizedState,o===null)return jt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)_s(o,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Zl(t),s!==null){for(e.flags|=128,_s(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(pt,pt.current&1|2),e.child}t=t.sibling}o.tail!==null&&St()>Wo&&(e.flags|=128,i=!0,_s(o,!1),e.lanes=4194304)}else{if(!i)if(t=Zl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_s(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!dt)return jt(e),null}else 2*St()-o.renderingStartTime>Wo&&n!==1073741824&&(e.flags|=128,i=!0,_s(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=St(),e.sibling=null,n=pt.current,at(pt,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return wh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function lw(t,e){switch(ih(e),e.tag){case 1:return fn(e.type)&&Wl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ho(),ct(dn),ct(qt),fh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dh(e),null;case 13:if(ct(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));zo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(pt),null;case 4:return Ho(),null;case 10:return ah(e.type._context),null;case 22:case 23:return wh(),null;case 24:return null;default:return null}}var za=!1,Yt=!1,uw=typeof WeakSet=="function"?WeakSet:Set,me=null;function Mo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function Zd(t,e,n){try{n()}catch(i){yt(t,e,i)}}var mm=!1;function cw(t,e){if(Id=zl,t=H0(),th(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=s),h===o&&++c===i&&(l=s),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ud={focusedElem:t,selectionRange:n},zl=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,p=_.memoizedState,f=e.stateNode,m=f.getSnapshotBeforeUpdate(e.elementType===e.type?S:Hn(e.type,S),p);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(E){yt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return _=mm,mm=!1,_}function Bs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Zd(e,n,o)}r=r.next}while(r!==i)}}function Cu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Jd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function k_(t){var e=t.alternate;e!==null&&(t.alternate=null,k_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ei],delete e[Js],delete e[kd],delete e[$E],delete e[XE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function B_(t){return t.tag===5||t.tag===3||t.tag===4}function gm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||B_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gl));else if(i!==4&&(t=t.child,t!==null))for(Qd(t,e,n),t=t.sibling;t!==null;)Qd(t,e,n),t=t.sibling}function ef(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ef(t,e,n),t=t.sibling;t!==null;)ef(t,e,n),t=t.sibling}var kt=null,Gn=!1;function Ri(t,e,n){for(n=n.child;n!==null;)z_(t,e,n),n=n.sibling}function z_(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(_u,n)}catch{}switch(n.tag){case 5:Yt||Mo(n,e);case 6:var i=kt,r=Gn;kt=null,Ri(t,e,n),kt=i,Gn=r,kt!==null&&(Gn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Gn?(t=kt,n=n.stateNode,t.nodeType===8?gc(t.parentNode,n):t.nodeType===1&&gc(t,n),Xs(t)):gc(kt,n.stateNode));break;case 4:i=kt,r=Gn,kt=n.stateNode.containerInfo,Gn=!0,Ri(t,e,n),kt=i,Gn=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Zd(n,e,s),r=r.next}while(r!==i)}Ri(t,e,n);break;case 1:if(!Yt&&(Mo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){yt(n,e,a)}Ri(t,e,n);break;case 21:Ri(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,Ri(t,e,n),Yt=i):Ri(t,e,n);break;default:Ri(t,e,n)}}function vm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new uw),e.forEach(function(i){var r=yw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Gn=!1;break e;case 3:kt=a.stateNode.containerInfo,Gn=!0;break e;case 4:kt=a.stateNode.containerInfo,Gn=!0;break e}a=a.return}if(kt===null)throw Error(oe(160));z_(o,s,r),kt=null,Gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)V_(e,t),e=e.sibling}function V_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Zn(t),i&4){try{Bs(3,t,t.return),Cu(3,t)}catch(S){yt(t,t.return,S)}try{Bs(5,t,t.return)}catch(S){yt(t,t.return,S)}}break;case 1:On(e,t),Zn(t),i&512&&n!==null&&Mo(n,n.return);break;case 5:if(On(e,t),Zn(t),i&512&&n!==null&&Mo(n,n.return),t.flags&32){var r=t.stateNode;try{Gs(r,"")}catch(S){yt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&u0(r,o),Md(a,s);var u=Md(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?p0(r,d):c==="dangerouslySetInnerHTML"?f0(r,d):c==="children"?Gs(r,d):Hf(r,c,d,u)}switch(a){case"input":yd(r,o);break;case"textarea":c0(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Ro(r,!!o.multiple,g,!1):h!==!!o.multiple&&(o.defaultValue!=null?Ro(r,!!o.multiple,o.defaultValue,!0):Ro(r,!!o.multiple,o.multiple?[]:"",!1))}r[Js]=o}catch(S){yt(t,t.return,S)}}break;case 6:if(On(e,t),Zn(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(S){yt(t,t.return,S)}}break;case 3:if(On(e,t),Zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xs(e.containerInfo)}catch(S){yt(t,t.return,S)}break;case 4:On(e,t),Zn(t);break;case 13:On(e,t),Zn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Sh=St())),i&4&&vm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(u=Yt)||c,On(e,t),Yt=u):On(e,t),Zn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(me=t,c=t.child;c!==null;){for(d=me=c;me!==null;){switch(h=me,g=h.child,h.tag){case 0:case 11:case 14:case 15:Bs(4,h,h.return);break;case 1:Mo(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(S){yt(i,n,S)}}break;case 5:Mo(h,h.return);break;case 22:if(h.memoizedState!==null){ym(d);continue}}g!==null?(g.return=h,me=g):ym(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=h0("display",s))}catch(S){yt(t,t.return,S)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(S){yt(t,t.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:On(e,t),Zn(t),i&4&&vm(t);break;case 21:break;default:On(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(B_(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Gs(r,""),i.flags&=-33);var o=gm(t);ef(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=gm(t);Qd(t,a,s);break;default:throw Error(oe(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dw(t,e,n){me=t,H_(t)}function H_(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||za;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Yt;a=za;var u=Yt;if(za=s,(Yt=l)&&!u)for(me=r;me!==null;)s=me,l=s.child,s.tag===22&&s.memoizedState!==null?xm(r):l!==null?(l.return=s,me=l):xm(r);for(;o!==null;)me=o,H_(o),o=o.sibling;me=r,za=a,Yt=u}_m(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,me=o):_m(t)}}function _m(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||Cu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&nm(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}nm(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Xs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Yt||e.flags&512&&Jd(e)}catch(h){yt(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function ym(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function xm(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cu(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var o=e.return;try{Jd(e)}catch(l){yt(e,o,l)}break;case 5:var s=e.return;try{Jd(e)}catch(l){yt(e,s,l)}}}catch(l){yt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var fw=Math.ceil,eu=bi.ReactCurrentDispatcher,yh=bi.ReactCurrentOwner,Dn=bi.ReactCurrentBatchConfig,Je=0,Ft=null,Tt=null,zt=0,xn=0,To=ar(0),Rt=0,ra=null,Br=0,Au=0,xh=0,zs=null,ln=null,Sh=0,Wo=1/0,mi=null,tu=!1,tf=null,qi=null,Va=!1,Vi=null,nu=0,Vs=0,nf=null,Al=-1,bl=0;function en(){return Je&6?St():Al!==-1?Al:Al=St()}function Ki(t){return t.mode&1?Je&2&&zt!==0?zt&-zt:qE.transition!==null?(bl===0&&(bl=C0()),bl):(t=rt,t!==0||(t=window.event,t=t===void 0?16:D0(t.type)),t):1}function Yn(t,e,n,i){if(50<Vs)throw Vs=0,nf=null,Error(oe(185));ua(t,n,i),(!(Je&2)||t!==Ft)&&(t===Ft&&(!(Je&2)&&(Au|=n),Rt===4&&Bi(t,zt)),hn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Wo=St()+500,wu&&lr()))}function hn(t,e){var n=t.callbackNode;qS(t,e);var i=Bl(t,t===Ft?zt:0);if(i===0)n!==null&&Rp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Rp(n),e===1)t.tag===0?YE(Sm.bind(null,t)):J0(Sm.bind(null,t)),WE(function(){!(Je&6)&&lr()}),n=null;else{switch(A0(i)){case 1:n=Xf;break;case 4:n=M0;break;case 16:n=kl;break;case 536870912:n=T0;break;default:n=kl}n=K_(n,G_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function G_(t,e){if(Al=-1,bl=0,Je&6)throw Error(oe(327));var n=t.callbackNode;if(Io()&&t.callbackNode!==n)return null;var i=Bl(t,t===Ft?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=iu(t,i);else{e=i;var r=Je;Je|=2;var o=j_();(Ft!==t||zt!==e)&&(mi=null,Wo=St()+500,Lr(t,e));do try{mw();break}catch(a){W_(t,a)}while(!0);sh(),eu.current=o,Je=r,Tt!==null?e=0:(Ft=null,zt=0,e=Rt)}if(e!==0){if(e===2&&(r=Rd(t),r!==0&&(i=r,e=rf(t,r))),e===1)throw n=ra,Lr(t,0),Bi(t,i),hn(t,St()),n;if(e===6)Bi(t,i);else{if(r=t.current.alternate,!(i&30)&&!hw(r)&&(e=iu(t,i),e===2&&(o=Rd(t),o!==0&&(i=o,e=rf(t,o))),e===1))throw n=ra,Lr(t,0),Bi(t,i),hn(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:xr(t,ln,mi);break;case 3:if(Bi(t,i),(i&130023424)===i&&(e=Sh+500-St(),10<e)){if(Bl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){en(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Od(xr.bind(null,t,ln,mi),e);break}xr(t,ln,mi);break;case 4:if(Bi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Xn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*fw(i/1960))-i,10<i){t.timeoutHandle=Od(xr.bind(null,t,ln,mi),i);break}xr(t,ln,mi);break;case 5:xr(t,ln,mi);break;default:throw Error(oe(329))}}}return hn(t,St()),t.callbackNode===n?G_.bind(null,t):null}function rf(t,e){var n=zs;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=iu(t,e),t!==2&&(e=ln,ln=n,e!==null&&of(e)),t}function of(t){ln===null?ln=t:ln.push.apply(ln,t)}function hw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!qn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bi(t,e){for(e&=~xh,e&=~Au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function Sm(t){if(Je&6)throw Error(oe(327));Io();var e=Bl(t,0);if(!(e&1))return hn(t,St()),null;var n=iu(t,e);if(t.tag!==0&&n===2){var i=Rd(t);i!==0&&(e=i,n=rf(t,i))}if(n===1)throw n=ra,Lr(t,0),Bi(t,e),hn(t,St()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xr(t,ln,mi),hn(t,St()),null}function Eh(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Wo=St()+500,wu&&lr())}}function zr(t){Vi!==null&&Vi.tag===0&&!(Je&6)&&Io();var e=Je;Je|=1;var n=Dn.transition,i=rt;try{if(Dn.transition=null,rt=1,t)return t()}finally{rt=i,Dn.transition=n,Je=e,!(Je&6)&&lr()}}function wh(){xn=To.current,ct(To)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,GE(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(ih(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Wl();break;case 3:Ho(),ct(dn),ct(qt),fh();break;case 5:dh(i);break;case 4:Ho();break;case 13:ct(pt);break;case 19:ct(pt);break;case 10:ah(i.type._context);break;case 22:case 23:wh()}n=n.return}if(Ft=t,Tt=t=Zi(t.current,null),zt=xn=e,Rt=0,ra=null,xh=Au=Br=0,ln=zs=null,Ar!==null){for(e=0;e<Ar.length;e++)if(n=Ar[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Ar=null}return t}function W_(t,e){do{var n=Tt;try{if(sh(),Ml.current=Ql,Jl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Jl=!1}if(kr=0,Ut=bt=mt=null,ks=!1,ta=0,yh.current=null,n===null||n.return===null){Rt=1,ra=e,Tt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=lm(s);if(g!==null){g.flags&=-257,um(g,s,a,o,e),g.mode&1&&am(o,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var S=new Set;S.add(l),e.updateQueue=S}else _.add(l);break e}else{if(!(e&1)){am(o,u,e),Mh();break e}l=Error(oe(426))}}else if(dt&&a.mode&1){var p=lm(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),um(p,s,a,o,e),rh(Go(l,a));break e}}o=l=Go(l,a),Rt!==4&&(Rt=2),zs===null?zs=[o]:zs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=A_(o,l,e);tm(o,f);break e;case 1:a=l;var m=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(qi===null||!qi.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var E=b_(o,a,e);tm(o,E);break e}}o=o.return}while(o!==null)}X_(n)}catch(M){e=M,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function j_(){var t=eu.current;return eu.current=Ql,t===null?Ql:t}function Mh(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Ft===null||!(Br&268435455)&&!(Au&268435455)||Bi(Ft,zt)}function iu(t,e){var n=Je;Je|=2;var i=j_();(Ft!==t||zt!==e)&&(mi=null,Lr(t,e));do try{pw();break}catch(r){W_(t,r)}while(!0);if(sh(),Je=n,eu.current=i,Tt!==null)throw Error(oe(261));return Ft=null,zt=0,Rt}function pw(){for(;Tt!==null;)$_(Tt)}function mw(){for(;Tt!==null&&!zS();)$_(Tt)}function $_(t){var e=q_(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?X_(t):Tt=e,yh.current=null}function X_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=lw(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,Tt=null;return}}else if(n=aw(n,e,xn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Rt===0&&(Rt=5)}function xr(t,e,n){var i=rt,r=Dn.transition;try{Dn.transition=null,rt=1,gw(t,e,n,i)}finally{Dn.transition=r,rt=i}return null}function gw(t,e,n,i){do Io();while(Vi!==null);if(Je&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(KS(t,o),t===Ft&&(Tt=Ft=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Va||(Va=!0,K_(kl,function(){return Io(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Dn.transition,Dn.transition=null;var s=rt;rt=1;var a=Je;Je|=4,yh.current=null,cw(t,n),V_(n,t),FE(Ud),zl=!!Id,Ud=Id=null,t.current=n,dw(n),VS(),Je=a,rt=s,Dn.transition=o}else t.current=n;if(Va&&(Va=!1,Vi=t,nu=r),o=t.pendingLanes,o===0&&(qi=null),WS(n.stateNode),hn(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(tu)throw tu=!1,t=tf,tf=null,t;return nu&1&&t.tag!==0&&Io(),o=t.pendingLanes,o&1?t===nf?Vs++:(Vs=0,nf=t):Vs=0,lr(),null}function Io(){if(Vi!==null){var t=A0(nu),e=Dn.transition,n=rt;try{if(Dn.transition=null,rt=16>t?16:t,Vi===null)var i=!1;else{if(t=Vi,Vi=null,nu=0,Je&6)throw Error(oe(331));var r=Je;for(Je|=4,me=t.current;me!==null;){var o=me,s=o.child;if(me.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(me=u;me!==null;){var c=me;switch(c.tag){case 0:case 11:case 15:Bs(8,c,o)}var d=c.child;if(d!==null)d.return=c,me=d;else for(;me!==null;){c=me;var h=c.sibling,g=c.return;if(k_(c),c===u){me=null;break}if(h!==null){h.return=g,me=h;break}me=g}}}var _=o.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var p=S.sibling;S.sibling=null,S=p}while(S!==null)}}me=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,me=s;else e:for(;me!==null;){if(o=me,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Bs(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,me=f;break e}me=o.return}}var m=t.current;for(me=m;me!==null;){s=me;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,me=v;else e:for(s=m;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Cu(9,a)}}catch(M){yt(a,a.return,M)}if(a===s){me=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,me=E;break e}me=a.return}}if(Je=r,lr(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(_u,t)}catch{}i=!0}return i}finally{rt=n,Dn.transition=e}}return!1}function Em(t,e,n){e=Go(n,e),e=A_(t,e,1),t=Yi(t,e,1),e=en(),t!==null&&(ua(t,1,e),hn(t,e))}function yt(t,e,n){if(t.tag===3)Em(t,t,n);else for(;e!==null;){if(e.tag===3){Em(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qi===null||!qi.has(i))){t=Go(n,t),t=b_(e,t,1),e=Yi(e,t,1),t=en(),e!==null&&(ua(e,1,t),hn(e,t));break}}e=e.return}}function vw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(zt&n)===n&&(Rt===4||Rt===3&&(zt&130023424)===zt&&500>St()-Sh?Lr(t,0):xh|=n),hn(t,e)}function Y_(t,e){e===0&&(t.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var n=en();t=Ti(t,e),t!==null&&(ua(t,e,n),hn(t,n))}function _w(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Y_(t,n)}function yw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),Y_(t,n)}var q_;q_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,sw(t,e,n);cn=!!(t.flags&131072)}else cn=!1,dt&&e.flags&1048576&&Q0(e,Xl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Cl(t,e),t=e.pendingProps;var r=Bo(e,qt.current);Do(e,n),r=ph(null,e,i,t,r,n);var o=mh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(o=!0,jl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,uh(e),r.updater=Tu,e.stateNode=r,r._reactInternals=e,Wd(e,i,t,n),e=Xd(null,e,i,!0,o,n)):(e.tag=0,dt&&o&&nh(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Cl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Sw(i),t=Hn(i,t),r){case 0:e=$d(null,e,i,t,n);break e;case 1:e=fm(null,e,i,t,n);break e;case 11:e=cm(null,e,i,t,n);break e;case 14:e=dm(null,e,i,Hn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),$d(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),fm(t,e,i,r,n);case 3:e:{if(N_(e),t===null)throw Error(oe(387));i=e.pendingProps,o=e.memoizedState,r=o.element,o_(t,e),Kl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Go(Error(oe(423)),e),e=hm(t,e,i,n,r);break e}else if(i!==r){r=Go(Error(oe(424)),e),e=hm(t,e,i,n,r);break e}else for(En=Xi(e.stateNode.containerInfo.firstChild),wn=e,dt=!0,Wn=null,n=i_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zo(),i===r){e=Ci(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return s_(e),t===null&&Vd(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Fd(i,r)?s=null:o!==null&&Fd(i,o)&&(e.flags|=32),L_(t,e),Jt(t,e,s,n),e.child;case 6:return t===null&&Vd(e),null;case 13:return D_(t,e,n);case 4:return ch(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Vo(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),cm(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,at(Yl,i._currentValue),i._currentValue=s,o!==null)if(qn(o.value,s)){if(o.children===r.children&&!dn.current){e=Ci(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Ei(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Hd(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(oe(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Hd(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Do(e,n),r=Un(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),dm(t,e,i,r,n);case 15:return R_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Cl(t,e),e.tag=1,fn(i)?(t=!0,jl(e)):t=!1,Do(e,n),C_(e,i,r),Wd(e,i,r,n),Xd(null,e,i,!0,t,n);case 19:return I_(t,e,n);case 22:return P_(t,e,n)}throw Error(oe(156,e.tag))};function K_(t,e){return w0(t,e)}function xw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new xw(t,e,n,i)}function Th(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sw(t){if(typeof t=="function")return Th(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wf)return 11;if(t===jf)return 14}return 2}function Zi(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Rl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")Th(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case mo:return Nr(n.children,r,o,e);case Gf:s=8,r|=8;break;case pd:return t=Nn(12,n,e,r|2),t.elementType=pd,t.lanes=o,t;case md:return t=Nn(13,n,e,r),t.elementType=md,t.lanes=o,t;case gd:return t=Nn(19,n,e,r),t.elementType=gd,t.lanes=o,t;case s0:return bu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case r0:s=10;break e;case o0:s=9;break e;case Wf:s=11;break e;case jf:s=14;break e;case Fi:s=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Nn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Nr(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function bu(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=s0,t.lanes=n,t.stateNode={isHidden:!1},t}function Mc(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function Tc(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ew(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oc(0),this.expirationTimes=oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ch(t,e,n,i,r,o,s,a,l){return t=new Ew(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Nn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uh(o),t}function ww(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:po,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Z_(t){if(!t)return ir;t=t._reactInternals;e:{if(jr(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(fn(n))return Z0(t,n,e)}return e}function J_(t,e,n,i,r,o,s,a,l){return t=Ch(n,i,!0,t,r,o,s,a,l),t.context=Z_(null),n=t.current,i=en(),r=Ki(n),o=Ei(i,r),o.callback=e??null,Yi(n,o,r),t.current.lanes=r,ua(t,r,i),hn(t,i),t}function Ru(t,e,n,i){var r=e.current,o=en(),s=Ki(r);return n=Z_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Yi(r,e,s),t!==null&&(Yn(t,r,s,o),wl(t,r,s)),s}function ru(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ah(t,e){wm(t,e),(t=t.alternate)&&wm(t,e)}function Mw(){return null}var Q_=typeof reportError=="function"?reportError:function(t){console.error(t)};function bh(t){this._internalRoot=t}Pu.prototype.render=bh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Ru(t,e,null,null)};Pu.prototype.unmount=bh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zr(function(){Ru(null,t,null,null)}),e[Mi]=null}};function Pu(t){this._internalRoot=t}Pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=P0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ki.length&&e!==0&&e<ki[n].priority;n++);ki.splice(n,0,t),n===0&&N0(t)}};function Rh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mm(){}function Tw(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=ru(s);o.call(u)}}var s=J_(e,i,t,0,null,!1,!1,"",Mm);return t._reactRootContainer=s,t[Mi]=s.current,Ks(t.nodeType===8?t.parentNode:t),zr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=ru(l);a.call(u)}}var l=Ch(t,0,!1,null,null,!1,!1,"",Mm);return t._reactRootContainer=l,t[Mi]=l.current,Ks(t.nodeType===8?t.parentNode:t),zr(function(){Ru(e,l,n,i)}),l}function Nu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=ru(s);a.call(l)}}Ru(e,s,t,r)}else s=Tw(n,e,t,r,i);return ru(s)}b0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ps(e.pendingLanes);n!==0&&(Yf(e,n|1),hn(e,St()),!(Je&6)&&(Wo=St()+500,lr()))}break;case 13:zr(function(){var i=Ti(t,1);if(i!==null){var r=en();Yn(i,t,1,r)}}),Ah(t,1)}};qf=function(t){if(t.tag===13){var e=Ti(t,134217728);if(e!==null){var n=en();Yn(e,t,134217728,n)}Ah(t,134217728)}};R0=function(t){if(t.tag===13){var e=Ki(t),n=Ti(t,e);if(n!==null){var i=en();Yn(n,t,e,i)}Ah(t,e)}};P0=function(){return rt};L0=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Cd=function(t,e,n){switch(e){case"input":if(yd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Eu(i);if(!r)throw Error(oe(90));l0(i),yd(i,r)}}}break;case"textarea":c0(t,n);break;case"select":e=n.value,e!=null&&Ro(t,!!n.multiple,e,!1)}};v0=Eh;_0=zr;var Cw={usingClientEntryPoint:!1,Events:[da,yo,Eu,m0,g0,Eh]},ys={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Aw={bundleType:ys.bundleType,version:ys.version,rendererPackageName:ys.rendererPackageName,rendererConfig:ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=S0(t),t===null?null:t.stateNode},findFiberByHostInstance:ys.findFiberByHostInstance||Mw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ha.isDisabled&&Ha.supportsFiber)try{_u=Ha.inject(Aw),ii=Ha}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cw;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rh(e))throw Error(oe(200));return ww(t,e,null,n)};Tn.createRoot=function(t,e){if(!Rh(t))throw Error(oe(299));var n=!1,i="",r=Q_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ch(t,1,!1,null,null,n,!1,i,r),t[Mi]=e.current,Ks(t.nodeType===8?t.parentNode:t),new bh(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=S0(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return zr(t)};Tn.hydrate=function(t,e,n){if(!Lu(e))throw Error(oe(200));return Nu(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!Rh(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=Q_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=J_(e,null,t,1,n??null,r,!1,o,s),t[Mi]=e.current,Ks(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Pu(e)};Tn.render=function(t,e,n){if(!Lu(e))throw Error(oe(200));return Nu(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!Lu(t))throw Error(oe(40));return t._reactRootContainer?(zr(function(){Nu(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1};Tn.unstable_batchedUpdates=Eh;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Lu(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Nu(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function ey(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ey)}catch(t){console.error(t)}}ey(),e0.exports=Tn;var sf=e0.exports,Ph,Tm=sf;Ph=Tm.createRoot,Tm.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oa(){return oa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},oa.apply(this,arguments)}var Hi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Hi||(Hi={}));const Cm="popstate";function bw(t){t===void 0&&(t={});function e(i,r){let{pathname:o,search:s,hash:a}=i.location;return af("",{pathname:o,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:ou(r)}return Pw(e,n,null,t)}function Et(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ty(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Rw(){return Math.random().toString(36).substr(2,8)}function Am(t,e){return{usr:t.state,key:t.key,idx:e}}function af(t,e,n,i){return n===void 0&&(n=null),oa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Jo(e):e,{state:n,key:e&&e.key||i||Rw()})}function ou(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Jo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Pw(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a=Hi.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(oa({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function d(){a=Hi.Pop;let p=c(),f=p==null?null:p-u;u=p,l&&l({action:a,location:S.location,delta:f})}function h(p,f){a=Hi.Push;let m=af(S.location,p,f);u=c()+1;let v=Am(m,u),E=S.createHref(m);try{s.pushState(v,"",E)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;r.location.assign(E)}o&&l&&l({action:a,location:S.location,delta:1})}function g(p,f){a=Hi.Replace;let m=af(S.location,p,f);u=c();let v=Am(m,u),E=S.createHref(m);s.replaceState(v,"",E),o&&l&&l({action:a,location:S.location,delta:0})}function _(p){let f=r.location.origin!=="null"?r.location.origin:r.location.href,m=typeof p=="string"?p:ou(p);return m=m.replace(/ $/,"%20"),Et(f,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,f)}let S={get action(){return a},get location(){return t(r,s)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Cm,d),l=p,()=>{r.removeEventListener(Cm,d),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let f=_(p);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:g,go(p){return s.go(p)}};return S}var bm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(bm||(bm={}));function Lw(t,e,n){return n===void 0&&(n="/"),Nw(t,e,n,!1)}function Nw(t,e,n,i){let r=typeof e=="string"?Jo(e):e,o=Lh(r.pathname||"/",n);if(o==null)return null;let s=ny(t);Dw(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=Ww(o);a=Hw(s[l],u,i)}return a}function ny(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Et(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=Ji([i,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(Et(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ny(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:zw(u,o.index),routesMeta:c})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,s);else for(let l of iy(o.path))r(o,s,l)}),e}function iy(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let s=iy(i.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),r&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Dw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Vw(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Iw=/^:[\w-]+$/,Uw=3,Fw=2,Ow=1,kw=10,Bw=-2,Rm=t=>t==="*";function zw(t,e){let n=t.split("/"),i=n.length;return n.some(Rm)&&(i+=Bw),e&&(i+=Fw),n.filter(r=>!Rm(r)).reduce((r,o)=>r+(Iw.test(o)?Uw:o===""?Ow:kw),i)}function Vw(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function Hw(t,e,n){let{routesMeta:i}=t,r={},o="/",s=[];for(let a=0;a<i.length;++a){let l=i[a],u=a===i.length-1,c=o==="/"?e:e.slice(o.length)||"/",d=Pm({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),h=l.route;if(!d&&u&&n&&!i[i.length-1].route.index&&(d=Pm({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!d)return null;Object.assign(r,d.params),s.push({params:r,pathname:Ji([o,d.pathname]),pathnameBase:Yw(Ji([o,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(o=Ji([o,d.pathnameBase]))}return s}function Pm(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=Gw(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,c,d)=>{let{paramName:h,isOptional:g}=c;if(h==="*"){let S=a[d]||"";s=o.slice(0,o.length-S.length).replace(/(.)\/+$/,"$1")}const _=a[d];return g&&!_?u[h]=void 0:u[h]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:t}}function Gw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ty(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function Ww(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ty(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Lh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function jw(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Jo(t):t;return{pathname:n?n.startsWith("/")?n:$w(n,e):e,search:qw(i),hash:Kw(r)}}function $w(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Cc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Nh(t,e){let n=Xw(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Dh(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Jo(t):(r=oa({},t),Et(!r.pathname||!r.pathname.includes("?"),Cc("?","pathname","search",r)),Et(!r.pathname||!r.pathname.includes("#"),Cc("#","pathname","hash",r)),Et(!r.search||!r.search.includes("#"),Cc("#","search","hash",r)));let o=t===""||r.pathname==="",s=o?"/":r.pathname,a;if(s==null)a=n;else{let d=e.length-1;if(!i&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=jw(r,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Ji=t=>t.join("/").replace(/\/\/+/g,"/"),Yw=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),qw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Kw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Zw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ry=["post","put","patch","delete"];new Set(ry);const Jw=["get",...ry];new Set(Jw);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sa(){return sa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},sa.apply(this,arguments)}const Ih=y.createContext(null),Qw=y.createContext(null),ur=y.createContext(null),Du=y.createContext(null),cr=y.createContext({outlet:null,matches:[],isDataRoute:!1}),oy=y.createContext(null);function eM(t,e){let{relative:n}=e===void 0?{}:e;Qo()||Et(!1);let{basename:i,navigator:r}=y.useContext(ur),{hash:o,pathname:s,search:a}=ly(t,{relative:n}),l=s;return i!=="/"&&(l=s==="/"?i:Ji([i,s])),r.createHref({pathname:l,search:a,hash:o})}function Qo(){return y.useContext(Du)!=null}function ha(){return Qo()||Et(!1),y.useContext(Du).location}function sy(t){y.useContext(ur).static||y.useLayoutEffect(t)}function ay(){let{isDataRoute:t}=y.useContext(cr);return t?hM():tM()}function tM(){Qo()||Et(!1);let t=y.useContext(Ih),{basename:e,future:n,navigator:i}=y.useContext(ur),{matches:r}=y.useContext(cr),{pathname:o}=ha(),s=JSON.stringify(Nh(r,n.v7_relativeSplatPath)),a=y.useRef(!1);return sy(()=>{a.current=!0}),y.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){i.go(u);return}let d=Dh(u,JSON.parse(s),o,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Ji([e,d.pathname])),(c.replace?i.replace:i.push)(d,c.state,c)},[e,i,s,o,t])}function ly(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=y.useContext(ur),{matches:r}=y.useContext(cr),{pathname:o}=ha(),s=JSON.stringify(Nh(r,i.v7_relativeSplatPath));return y.useMemo(()=>Dh(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function nM(t,e){return iM(t,e)}function iM(t,e,n,i){Qo()||Et(!1);let{navigator:r}=y.useContext(ur),{matches:o}=y.useContext(cr),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=ha(),c;if(e){var d;let p=typeof e=="string"?Jo(e):e;l==="/"||(d=p.pathname)!=null&&d.startsWith(l)||Et(!1),c=p}else c=u;let h=c.pathname||"/",g=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let _=Lw(t,{pathname:g}),S=lM(_&&_.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:Ji([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Ji([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),o,n,i);return e&&S?y.createElement(Du.Provider,{value:{location:sa({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Hi.Pop}},S):S}function rM(){let t=fM(),e=Zw(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},e),n?y.createElement("pre",{style:r},n):null,null)}const oM=y.createElement(rM,null);class sM extends y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?y.createElement(cr.Provider,{value:this.props.routeContext},y.createElement(oy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function aM(t){let{routeContext:e,match:n,children:i}=t,r=y.useContext(Ih);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(cr.Provider,{value:e},i)}function lM(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=i)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let c=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);c>=0||Et(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let c=0;c<s.length;c++){let d=s[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:h,errors:g}=n,_=d.route.loader&&h[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||_){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,d,h)=>{let g,_=!1,S=null,p=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,S=d.route.errorElement||oM,l&&(u<0&&h===0?(_=!0,p=null):u===h&&(_=!0,p=d.route.hydrateFallbackElement||null)));let f=e.concat(s.slice(0,h+1)),m=()=>{let v;return g?v=S:_?v=p:d.route.Component?v=y.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=c,y.createElement(aM,{match:d,routeContext:{outlet:c,matches:f,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?y.createElement(sM,{location:n.location,revalidation:n.revalidation,component:S,error:g,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var uy=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(uy||{}),su=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(su||{});function uM(t){let e=y.useContext(Ih);return e||Et(!1),e}function cM(t){let e=y.useContext(Qw);return e||Et(!1),e}function dM(t){let e=y.useContext(cr);return e||Et(!1),e}function cy(t){let e=dM(),n=e.matches[e.matches.length-1];return n.route.id||Et(!1),n.route.id}function fM(){var t;let e=y.useContext(oy),n=cM(su.UseRouteError),i=cy(su.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function hM(){let{router:t}=uM(uy.UseNavigateStable),e=cy(su.UseNavigateStable),n=y.useRef(!1);return sy(()=>{n.current=!0}),y.useCallback(function(r,o){o===void 0&&(o={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,sa({fromRouteId:e},o)))},[t,e])}const Lm={};function pM(t,e){Lm[e]||(Lm[e]=!0,console.warn(e))}const Nm=(t,e,n)=>pM(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function mM(t,e){t!=null&&t.v7_startTransition||Nm("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(t!=null&&t.v7_relativeSplatPath)&&!e&&Nm("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function gM(t){let{to:e,replace:n,state:i,relative:r}=t;Qo()||Et(!1);let{future:o,static:s}=y.useContext(ur),{matches:a}=y.useContext(cr),{pathname:l}=ha(),u=ay(),c=Dh(e,Nh(a,o.v7_relativeSplatPath),l,r==="path"),d=JSON.stringify(c);return y.useEffect(()=>u(JSON.parse(d),{replace:n,state:i,relative:r}),[u,d,r,n,i]),null}function Pl(t){Et(!1)}function vM(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Hi.Pop,navigator:o,static:s=!1,future:a}=t;Qo()&&Et(!1);let l=e.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:l,navigator:o,static:s,future:sa({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof i=="string"&&(i=Jo(i));let{pathname:c="/",search:d="",hash:h="",state:g=null,key:_="default"}=i,S=y.useMemo(()=>{let p=Lh(c,l);return p==null?null:{location:{pathname:p,search:d,hash:h,state:g,key:_},navigationType:r}},[l,c,d,h,g,_,r]);return S==null?null:y.createElement(ur.Provider,{value:u},y.createElement(Du.Provider,{children:n,value:S}))}function _M(t){let{children:e,location:n}=t;return nM(lf(e),n)}new Promise(()=>{});function lf(t,e){e===void 0&&(e=[]);let n=[];return y.Children.forEach(t,(i,r)=>{if(!y.isValidElement(i))return;let o=[...e,r];if(i.type===y.Fragment){n.push.apply(n,lf(i.props.children,o));return}i.type!==Pl&&Et(!1),!i.props.index||!i.props.children||Et(!1);let s={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=lf(i.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uf(){return uf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},uf.apply(this,arguments)}function yM(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function xM(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function SM(t,e){return t.button===0&&(!e||e==="_self")&&!xM(t)}const EM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],wM="6";try{window.__reactRouterVersion=wM}catch{}const MM="startTransition",Dm=vS[MM];function TM(t){let{basename:e,children:n,future:i,window:r}=t,o=y.useRef();o.current==null&&(o.current=bw({window:r,v5Compat:!0}));let s=o.current,[a,l]=y.useState({action:s.action,location:s.location}),{v7_startTransition:u}=i||{},c=y.useCallback(d=>{u&&Dm?Dm(()=>l(d)):l(d)},[l,u]);return y.useLayoutEffect(()=>s.listen(c),[s,c]),y.useEffect(()=>mM(i),[i]),y.createElement(vM,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:i})}const CM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",AM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dy=y.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c,viewTransition:d}=e,h=yM(e,EM),{basename:g}=y.useContext(ur),_,S=!1;if(typeof u=="string"&&AM.test(u)&&(_=u,CM))try{let v=new URL(window.location.href),E=u.startsWith("//")?new URL(v.protocol+u):new URL(u),M=Lh(E.pathname,g);E.origin===v.origin&&M!=null?u=M+E.search+E.hash:S=!0}catch{}let p=eM(u,{relative:r}),f=bM(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:r,viewTransition:d});function m(v){i&&i(v),v.defaultPrevented||f(v)}return y.createElement("a",uf({},h,{href:_||p,onClick:S||o?i:m,ref:n,target:l}))});var Im;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Im||(Im={}));var Um;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Um||(Um={}));function bM(t,e){let{target:n,replace:i,state:r,preventScrollReset:o,relative:s,viewTransition:a}=e===void 0?{}:e,l=ay(),u=ha(),c=ly(t,{relative:s});return y.useCallback(d=>{if(SM(d,n)){d.preventDefault();let h=i!==void 0?i:ou(u)===ou(c);l(t,{replace:h,state:r,preventScrollReset:o,relative:s,viewTransition:a})}},[u,l,c,i,r,n,t,o,s,a])}function RM({onMount:t}){return y.useEffect(()=>{t()},[t]),b.jsxs("div",{id:"app",children:[b.jsx("canvas",{id:"bg"}),b.jsxs("header",{children:[b.jsx("h1",{children:"Intuition Labs"}),b.jsx("p",{className:"tagline",children:"Pioneering the future of AI through research and strategic innovation"})]}),b.jsx("div",{className:"platforms-marquee",children:b.jsxs("div",{className:"platforms-track",children:[b.jsx("span",{className:"platform-name platform-terminals",children:"terminals"}),b.jsx("span",{className:"platform-name platform-radical",children:"radical"}),b.jsx("span",{className:"platform-name platform-pathfinder",children:"pathfinder"}),b.jsx("span",{className:"platform-name platform-wuji",children:"wuji"}),b.jsx("span",{className:"platform-name platform-boom",children:"boom"}),b.jsx("span",{className:"platform-name platform-journey",children:"journey"}),b.jsx("span",{className:"platform-name platform-terminals",children:"terminals"}),b.jsx("span",{className:"platform-name platform-radical",children:"radical"}),b.jsx("span",{className:"platform-name platform-pathfinder",children:"pathfinder"}),b.jsx("span",{className:"platform-name platform-wuji",children:"wuji"}),b.jsx("span",{className:"platform-name platform-boom",children:"boom"}),b.jsx("span",{className:"platform-name platform-journey",children:"journey"})]})}),b.jsxs("section",{className:"section",children:[b.jsx("h2",{children:"Our Vision"}),b.jsx("p",{children:"Transforming enterprises through cutting-edge AI solutions and polymathic expertise"}),b.jsxs("div",{className:"cta-container",children:[b.jsx("a",{href:"https://zcal.co/terminals",className:"cta-button",children:"Schedule Consultation"}),b.jsx(dy,{to:"/manifesto",className:"text-link",children:"Read Our Manifesto"})]})]}),b.jsxs("section",{className:"section apps-grid",children:[b.jsx("h2",{children:"Featured Solutions"}),b.jsxs("div",{className:"grid",children:[b.jsxs("div",{className:"card",children:[b.jsx("h3",{children:"Enterprise AI Strategy"}),b.jsx("p",{children:"Comprehensive AI implementation and transformation roadmaps"}),b.jsx("a",{href:"#strategy",className:"learn-more",children:"Learn More →"}),b.jsx("div",{className:"learn-more-content",children:b.jsxs("ul",{children:[b.jsx("li",{children:"Enterprise AI Implementation Strategy"}),b.jsx("li",{children:"LLM & Agent System Architecture"}),b.jsx("li",{children:"GTM Strategy Development"}),b.jsx("li",{children:"Complex System Integration"})]})})]}),b.jsxs("div",{className:"card",children:[b.jsx("h3",{children:"LLM Systems"}),b.jsx("p",{children:"Custom language model development and integration"}),b.jsx("a",{href:"#llm",className:"learn-more",children:"Learn More →"}),b.jsx("div",{className:"learn-more-content",children:b.jsxs("ul",{children:[b.jsx("li",{children:"Custom AI Agent Development"}),b.jsx("li",{children:"Advanced Prompt Engineering"}),b.jsx("li",{children:"Multi-modal System Design"}),b.jsx("li",{children:"Process Automation & Optimization"})]})})]}),b.jsxs("div",{className:"card",children:[b.jsx("h3",{children:"AI Agents"}),b.jsx("p",{children:"Autonomous agent systems for process automation"}),b.jsx("a",{href:"#agents",className:"learn-more",children:"Learn More →"}),b.jsx("div",{className:"learn-more-content",children:b.jsxs("ul",{children:[b.jsx("li",{children:"30k+ hours annual productivity improvement"}),b.jsx("li",{children:"Enterprise systems architecture across industries"}),b.jsx("li",{children:"Performance management for mega-cap enterprises"}),b.jsx("li",{children:"Cloud-wide tech stack transformation"})]})})]})]})]}),b.jsxs("footer",{children:[b.jsxs("div",{className:"social-links",children:[b.jsx("a",{href:"https://www.linkedin.com/company/intuition-labs",children:"LinkedIn"}),b.jsx("a",{href:"https://github.com/wheattoast11",children:"GitHub"}),b.jsx("a",{href:"https://www.youtube.com/@IntuitionLabsLLC",children:"YouTube"})]}),b.jsx("p",{className:"copyright",children:"© 2024 Intuition Labs LLC. Pioneering the future of AI."})]})]})}function PM({onMount:t}){return y.useEffect(()=>{t()},[t]),b.jsxs("div",{id:"app",children:[b.jsx("canvas",{id:"bg"}),b.jsxs("header",{children:[b.jsx(dy,{to:"/",className:"back-link",children:"← Back to Home"}),b.jsx("h1",{children:"Our Manifesto"}),b.jsx("p",{className:"tagline",children:"Shaping the future of AI with purpose and responsibility"})]}),b.jsxs("section",{className:"section manifesto-content",children:[b.jsxs("div",{className:"manifesto-grid",children:[b.jsxs("div",{className:"manifesto-item",children:[b.jsx("h2",{children:"Purpose"}),b.jsx("p",{children:"We believe AI should augment human capabilities, not replace them. Our mission is to create AI systems that enhance human potential while maintaining ethical boundaries and promoting sustainable innovation."})]}),b.jsxs("div",{className:"manifesto-item",children:[b.jsx("h2",{children:"Innovation"}),b.jsx("p",{children:"True innovation comes from understanding both the technical and human aspects of AI. We combine cutting-edge technology with deep industry knowledge to create solutions that matter."})]}),b.jsxs("div",{className:"manifesto-item",children:[b.jsx("h2",{children:"Ethics"}),b.jsx("p",{children:"We are committed to developing AI systems that are transparent, fair, and accountable. Our ethical framework ensures that every solution we create considers its impact on society and individuals."})]}),b.jsxs("div",{className:"manifesto-item",children:[b.jsx("h2",{children:"Collaboration"}),b.jsx("p",{children:"The best solutions emerge from diverse perspectives. We work closely with our clients, fostering partnerships that drive meaningful transformation and sustainable growth."})]})]}),b.jsxs("div",{className:"principles",children:[b.jsx("h2",{children:"Our Guiding Principles"}),b.jsxs("ul",{className:"experience-list",children:[b.jsx("li",{children:"Human-centered AI development that prioritizes user needs and experiences"}),b.jsx("li",{children:"Continuous learning and adaptation to emerging technologies and methodologies"}),b.jsx("li",{children:"Transparent communication and collaboration with stakeholders"}),b.jsx("li",{children:"Sustainable and responsible AI implementation practices"}),b.jsx("li",{children:"Commitment to diversity, equity, and inclusion in AI development"})]})]})]}),b.jsxs("footer",{children:[b.jsxs("div",{className:"social-links",children:[b.jsx("a",{href:"https://www.linkedin.com/company/intuition-labs",children:"LinkedIn"}),b.jsx("a",{href:"https://github.com/wheattoast11",children:"GitHub"}),b.jsx("a",{href:"https://www.youtube.com/@IntuitionLabsLLC",children:"YouTube"})]}),b.jsx("p",{className:"copyright",children:"© 2024 Intuition Labs LLC. Pioneering the future of AI."})]})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uh="161",LM=0,Fm=1,NM=2,fy=1,DM=2,pi=3,rr=0,pn=1,vi=2,Qi=0,Uo=1,Om=2,km=3,Bm=4,IM=5,Mr=100,UM=101,FM=102,zm=103,Vm=104,OM=200,kM=201,BM=202,zM=203,cf=204,df=205,VM=206,HM=207,GM=208,WM=209,jM=210,$M=211,XM=212,YM=213,qM=214,KM=0,ZM=1,JM=2,au=3,QM=4,e1=5,t1=6,n1=7,Fh=0,i1=1,r1=2,er=0,o1=1,s1=2,a1=3,l1=4,u1=5,c1=6,hy=300,jo=301,$o=302,ff=303,hf=304,Iu=306,pf=1e3,jn=1001,mf=1002,Qt=1003,Hm=1004,xs=1005,an=1006,Ac=1007,Rr=1008,tr=1009,d1=1010,f1=1011,Oh=1012,py=1013,Gi=1014,_i=1015,aa=1016,my=1017,gy=1018,Dr=1020,h1=1021,$n=1023,p1=1024,m1=1025,Ir=1026,Xo=1027,g1=1028,vy=1029,v1=1030,_y=1031,yy=1033,bc=33776,Rc=33777,Pc=33778,Lc=33779,Gm=35840,Wm=35841,jm=35842,$m=35843,xy=36196,Xm=37492,Ym=37496,qm=37808,Km=37809,Zm=37810,Jm=37811,Qm=37812,eg=37813,tg=37814,ng=37815,ig=37816,rg=37817,og=37818,sg=37819,ag=37820,lg=37821,Nc=36492,ug=36494,cg=36495,_1=36283,dg=36284,fg=36285,hg=36286,Sy=3e3,Ur=3001,y1=3200,x1=3201,Ey=0,S1=1,Ln="",Bt="srgb",Ai="srgb-linear",kh="display-p3",Uu="display-p3-linear",lu="linear",ut="srgb",uu="rec709",cu="p3",qr=7680,pg=519,E1=512,w1=513,M1=514,wy=515,T1=516,C1=517,A1=518,b1=519,mg=35044,gg="300 es",gf=1035,Si=2e3,du=2001;class es{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dc=Math.PI/180,vf=180/Math.PI;function pa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function un(t,e,n){return Math.max(e,Math.min(n,t))}function R1(t,e){return(t%e+e)%e}function Ic(t,e,n){return(1-n)*t+n*e}function vg(t){return(t&t-1)===0&&t!==0}function _f(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ss(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,n,i,r,o,s,a,l,u){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],g=i[5],_=i[8],S=r[0],p=r[3],f=r[6],m=r[1],v=r[4],E=r[7],M=r[2],w=r[5],T=r[8];return o[0]=s*S+a*m+l*M,o[3]=s*p+a*v+l*w,o[6]=s*f+a*E+l*T,o[1]=u*S+c*m+d*M,o[4]=u*p+c*v+d*w,o[7]=u*f+c*E+d*T,o[2]=h*S+g*m+_*M,o[5]=h*p+g*v+_*w,o[8]=h*f+g*E+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*s-a*u,h=a*l-c*o,g=u*o-s*l,_=n*d+i*h+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=d*S,e[1]=(r*u-c*i)*S,e[2]=(a*i-r*s)*S,e[3]=h*S,e[4]=(c*n-r*l)*S,e[5]=(r*o-a*n)*S,e[6]=g*S,e[7]=(i*l-u*n)*S,e[8]=(s*n-i*o)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Uc.makeScale(e,n)),this}rotate(e){return this.premultiply(Uc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Uc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uc=new Xe;function My(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function fu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function P1(){const t=fu("canvas");return t.style.display="block",t}const _g={};function Fo(t){t in _g||(_g[t]=!0,console.warn(t))}const yg=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xg=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ga={[Ai]:{transfer:lu,primaries:uu,toReference:t=>t,fromReference:t=>t},[Bt]:{transfer:ut,primaries:uu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Uu]:{transfer:lu,primaries:cu,toReference:t=>t.applyMatrix3(xg),fromReference:t=>t.applyMatrix3(yg)},[kh]:{transfer:ut,primaries:cu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(xg),fromReference:t=>t.applyMatrix3(yg).convertLinearToSRGB()}},L1=new Set([Ai,Uu]),ot={enabled:!0,_workingColorSpace:Ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!L1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ga[e].toReference,r=Ga[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ga[t].primaries},getTransfer:function(t){return t===Ln?lu:Ga[t].transfer}};function Oo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Fc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Kr;class Ty{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kr===void 0&&(Kr=fu("canvas")),Kr.width=e.width,Kr.height=e.height;const i=Kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=fu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Oo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Oo(n[i]/255)*255):n[i]=Oo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let N1=0;class Cy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:N1++}),this.uuid=pa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Oc(r[s].image)):o.push(Oc(r[s]))}else o=Oc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Oc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Ty.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let D1=0;class mn extends es{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=jn,r=jn,o=an,s=Rr,a=$n,l=tr,u=mn.DEFAULT_ANISOTROPY,c=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D1++}),this.uuid=pa(),this.name="",this.source=new Cy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Ur?Bt:Ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pf:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case mf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pf:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case mf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Bt?Ur:Sy}set encoding(e){Fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ur?Bt:Ln}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=hy;mn.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,n=0,i=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],g=l[5],_=l[9],S=l[2],p=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-S)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+S)<.1&&Math.abs(_+p)<.1&&Math.abs(u+g+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,E=(g+1)/2,M=(f+1)/2,w=(c+h)/4,T=(d+S)/4,L=(_+p)/4;return v>E&&v>M?v<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(v),r=w/i,o=T/i):E>M?E<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(E),i=w/r,o=L/r):M<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(M),i=T/o,r=L/o),this.set(i,r,o,n),this}let m=Math.sqrt((p-_)*(p-_)+(d-S)*(d-S)+(h-c)*(h-c));return Math.abs(m)<.001&&(m=1),this.x=(p-_)/m,this.y=(d-S)/m,this.z=(h-c)/m,this.w=Math.acos((u+g+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class I1 extends es{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ft(0,0,e,n),this.scissorTest=!1,this.viewport=new ft(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Fo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ur?Bt:Ln),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Cy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vr extends I1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ay extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class U1 extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ma{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=o[s+0],g=o[s+1],_=o[s+2],S=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=g,e[n+2]=_,e[n+3]=S;return}if(d!==S||l!==h||u!==g||c!==_){let p=1-a;const f=l*h+u*g+c*_+d*S,m=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const M=Math.sqrt(v),w=Math.atan2(M,f*m);p=Math.sin(p*w)/M,a=Math.sin(a*w)/M}const E=a*m;if(l=l*p+h*E,u=u*p+g*E,c=c*p+_*E,d=d*p+S*E,p===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=M,u*=M,c*=M,d*=M}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=o[s],h=o[s+1],g=o[s+2],_=o[s+3];return e[n]=a*_+c*d+l*g-u*h,e[n+1]=l*_+c*h+u*d-a*g,e[n+2]=u*_+c*g+a*h-l*d,e[n+3]=c*_-a*d-l*h-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(o/2),h=l(i/2),g=l(r/2),_=l(o/2);switch(s){case"XYZ":this._x=h*c*d+u*g*_,this._y=u*g*d-h*c*_,this._z=u*c*_+h*g*d,this._w=u*c*d-h*g*_;break;case"YXZ":this._x=h*c*d+u*g*_,this._y=u*g*d-h*c*_,this._z=u*c*_-h*g*d,this._w=u*c*d+h*g*_;break;case"ZXY":this._x=h*c*d-u*g*_,this._y=u*g*d+h*c*_,this._z=u*c*_+h*g*d,this._w=u*c*d-h*g*_;break;case"ZYX":this._x=h*c*d-u*g*_,this._y=u*g*d+h*c*_,this._z=u*c*_-h*g*d,this._w=u*c*d+h*g*_;break;case"YZX":this._x=h*c*d+u*g*_,this._y=u*g*d+h*c*_,this._z=u*c*_-h*g*d,this._w=u*c*d-h*g*_;break;case"XZY":this._x=h*c*d-u*g*_,this._y=u*g*d-h*c*_,this._z=u*c*_+h*g*d,this._w=u*c*d+h*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],h=i+a+d;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(c-l)*g,this._y=(o-u)*g,this._z=(s-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(c-l)/g,this._x=.25*g,this._y=(r+s)/g,this._z=(o+u)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(o-u)/g,this._x=(r+s)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(s-r)/g,this._x=(o+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*s+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),c=2*(a*n-o*r),d=2*(o*i-s*n);return this.x=n+l*u+s*d-a*c,this.y=i+l*c+a*u-o*d,this.z=r+l*d+o*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kc.copy(this).projectOnVector(e),this.sub(kc)}reflect(e){return this.sub(kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kc=new V,Sg=new ma;class ga{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,kn):kn.fromBufferAttribute(o,s),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wa.copy(i.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),ja.subVectors(this.max,Es),Zr.subVectors(e.a,Es),Jr.subVectors(e.b,Es),Qr.subVectors(e.c,Es),Pi.subVectors(Jr,Zr),Li.subVectors(Qr,Jr),mr.subVectors(Zr,Qr);let n=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-mr.z,mr.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,mr.z,0,-mr.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-mr.y,mr.x,0];return!Bc(n,Zr,Jr,Qr,ja)||(n=[1,0,0,0,1,0,0,0,1],!Bc(n,Zr,Jr,Qr,ja))?!1:($a.crossVectors(Pi,Li),n=[$a.x,$a.y,$a.z],Bc(n,Zr,Jr,Qr,ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new V,new V,new V,new V,new V,new V,new V,new V],kn=new V,Wa=new ga,Zr=new V,Jr=new V,Qr=new V,Pi=new V,Li=new V,mr=new V,Es=new V,ja=new V,$a=new V,gr=new V;function Bc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){gr.fromArray(t,o);const a=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),l=e.dot(gr),u=n.dot(gr),c=i.dot(gr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const F1=new ga,ws=new V,zc=new V;class Fu{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):F1.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);const n=ws.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ws,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(zc)),this.expandByPoint(ws.copy(e.center).sub(zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new V,Vc=new V,Xa=new V,Ni=new V,Hc=new V,Ya=new V,Gc=new V;class by{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,n),ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Vc.copy(e).add(n).multiplyScalar(.5),Xa.copy(n).sub(e).normalize(),Ni.copy(this.origin).sub(Vc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Xa),a=Ni.dot(this.direction),l=-Ni.dot(Xa),u=Ni.lengthSq(),c=Math.abs(1-s*s);let d,h,g,_;if(c>0)if(d=s*l-a,h=s*a-l,_=o*c,d>=0)if(h>=-_)if(h<=_){const S=1/c;d*=S,h*=S,g=d*(d+s*h+2*a)+h*(s*d+h+2*l)+u}else h=o,d=Math.max(0,-(s*h+a)),g=-d*d+h*(h+2*l)+u;else h=-o,d=Math.max(0,-(s*h+a)),g=-d*d+h*(h+2*l)+u;else h<=-_?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),g=-d*d+h*(h+2*l)+u):h<=_?(d=0,h=Math.min(Math.max(-o,-l),o),g=h*(h+2*l)+u):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),g=-d*d+h*(h+2*l)+u);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),g=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Vc).addScaledVector(Xa,h),g}intersectSphere(e,n){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),r=ci.dot(ci)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(o=(e.min.y-h.y)*c,s=(e.max.y-h.y)*c):(o=(e.max.y-h.y)*c,s=(e.min.y-h.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,n,i,r,o){Hc.subVectors(n,e),Ya.subVectors(i,e),Gc.crossVectors(Hc,Ya);let s=this.direction.dot(Gc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ni.subVectors(this.origin,e);const l=a*this.direction.dot(Ya.crossVectors(Ni,Ya));if(l<0)return null;const u=a*this.direction.dot(Hc.cross(Ni));if(u<0||l+u>s)return null;const c=-a*Ni.dot(Gc);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,n,i,r,o,s,a,l,u,c,d,h,g,_,S,p){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,d,h,g,_,S,p)}set(e,n,i,r,o,s,a,l,u,c,d,h,g,_,S,p){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=g,f[7]=_,f[11]=S,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/eo.setFromMatrixColumn(e,0).length(),o=1/eo.setFromMatrixColumn(e,1).length(),s=1/eo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=s*c,g=s*d,_=a*c,S=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=g+_*u,n[5]=h-S*u,n[9]=-a*l,n[2]=S-h*u,n[6]=_+g*u,n[10]=s*l}else if(e.order==="YXZ"){const h=l*c,g=l*d,_=u*c,S=u*d;n[0]=h+S*a,n[4]=_*a-g,n[8]=s*u,n[1]=s*d,n[5]=s*c,n[9]=-a,n[2]=g*a-_,n[6]=S+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*c,g=l*d,_=u*c,S=u*d;n[0]=h-S*a,n[4]=-s*d,n[8]=_+g*a,n[1]=g+_*a,n[5]=s*c,n[9]=S-h*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*c,g=s*d,_=a*c,S=a*d;n[0]=l*c,n[4]=_*u-g,n[8]=h*u+S,n[1]=l*d,n[5]=S*u+h,n[9]=g*u-_,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,g=s*u,_=a*l,S=a*u;n[0]=l*c,n[4]=S-h*d,n[8]=_*d+g,n[1]=d,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=g*d+_,n[10]=h-S*d}else if(e.order==="XZY"){const h=s*l,g=s*u,_=a*l,S=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=h*d+S,n[5]=s*c,n[9]=g*d-_,n[2]=_*d-g,n[6]=a*c,n[10]=S*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O1,e,k1)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Di.crossVectors(i,vn),Di.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Di.crossVectors(i,vn)),Di.normalize(),qa.crossVectors(vn,Di),r[0]=Di.x,r[4]=qa.x,r[8]=vn.x,r[1]=Di.y,r[5]=qa.y,r[9]=vn.y,r[2]=Di.z,r[6]=qa.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],g=i[13],_=i[2],S=i[6],p=i[10],f=i[14],m=i[3],v=i[7],E=i[11],M=i[15],w=r[0],T=r[4],L=r[8],B=r[12],x=r[1],A=r[5],k=r[9],z=r[13],D=r[2],G=r[6],F=r[10],Z=r[14],U=r[3],O=r[7],H=r[11],X=r[15];return o[0]=s*w+a*x+l*D+u*U,o[4]=s*T+a*A+l*G+u*O,o[8]=s*L+a*k+l*F+u*H,o[12]=s*B+a*z+l*Z+u*X,o[1]=c*w+d*x+h*D+g*U,o[5]=c*T+d*A+h*G+g*O,o[9]=c*L+d*k+h*F+g*H,o[13]=c*B+d*z+h*Z+g*X,o[2]=_*w+S*x+p*D+f*U,o[6]=_*T+S*A+p*G+f*O,o[10]=_*L+S*k+p*F+f*H,o[14]=_*B+S*z+p*Z+f*X,o[3]=m*w+v*x+E*D+M*U,o[7]=m*T+v*A+E*G+M*O,o[11]=m*L+v*k+E*F+M*H,o[15]=m*B+v*z+E*Z+M*X,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],g=e[14],_=e[3],S=e[7],p=e[11],f=e[15];return _*(+o*l*d-r*u*d-o*a*h+i*u*h+r*a*g-i*l*g)+S*(+n*l*g-n*u*h+o*s*h-r*s*g+r*u*c-o*l*c)+p*(+n*u*d-n*a*g-o*s*d+i*s*g+o*a*c-i*u*c)+f*(-r*a*c-n*l*d+n*a*h+r*s*d-i*s*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],g=e[11],_=e[12],S=e[13],p=e[14],f=e[15],m=d*p*u-S*h*u+S*l*g-a*p*g-d*l*f+a*h*f,v=_*h*u-c*p*u-_*l*g+s*p*g+c*l*f-s*h*f,E=c*S*u-_*d*u+_*a*g-s*S*g-c*a*f+s*d*f,M=_*d*l-c*S*l-_*a*h+s*S*h+c*a*p-s*d*p,w=n*m+i*v+r*E+o*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=m*T,e[1]=(S*h*o-d*p*o-S*r*g+i*p*g+d*r*f-i*h*f)*T,e[2]=(a*p*o-S*l*o+S*r*u-i*p*u-a*r*f+i*l*f)*T,e[3]=(d*l*o-a*h*o-d*r*u+i*h*u+a*r*g-i*l*g)*T,e[4]=v*T,e[5]=(c*p*o-_*h*o+_*r*g-n*p*g-c*r*f+n*h*f)*T,e[6]=(_*l*o-s*p*o-_*r*u+n*p*u+s*r*f-n*l*f)*T,e[7]=(s*h*o-c*l*o+c*r*u-n*h*u-s*r*g+n*l*g)*T,e[8]=E*T,e[9]=(_*d*o-c*S*o-_*i*g+n*S*g+c*i*f-n*d*f)*T,e[10]=(s*S*o-_*a*o+_*i*u-n*S*u-s*i*f+n*a*f)*T,e[11]=(c*a*o-s*d*o-c*i*u+n*d*u+s*i*g-n*a*g)*T,e[12]=M*T,e[13]=(c*S*r-_*d*r+_*i*h-n*S*h-c*i*p+n*d*p)*T,e[14]=(_*a*r-s*S*r-_*i*l+n*S*l+s*i*p-n*a*p)*T,e[15]=(s*d*r-c*a*r+c*i*l-n*d*l-s*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,d=a+a,h=o*u,g=o*c,_=o*d,S=s*c,p=s*d,f=a*d,m=l*u,v=l*c,E=l*d,M=i.x,w=i.y,T=i.z;return r[0]=(1-(S+f))*M,r[1]=(g+E)*M,r[2]=(_-v)*M,r[3]=0,r[4]=(g-E)*w,r[5]=(1-(h+f))*w,r[6]=(p+m)*w,r[7]=0,r[8]=(_+v)*T,r[9]=(p-m)*T,r[10]=(1-(h+S))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=eo.set(r[0],r[1],r[2]).length();const s=eo.set(r[4],r[5],r[6]).length(),a=eo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const u=1/o,c=1/s,d=1/a;return Bn.elements[0]*=u,Bn.elements[1]*=u,Bn.elements[2]*=u,Bn.elements[4]*=c,Bn.elements[5]*=c,Bn.elements[6]*=c,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,n.setFromRotationMatrix(Bn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Si){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let g,_;if(a===Si)g=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===du)g=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Si){const l=this.elements,u=1/(n-e),c=1/(i-r),d=1/(s-o),h=(n+e)*u,g=(i+r)*c;let _,S;if(a===Si)_=(s+o)*d,S=-2*d;else if(a===du)_=o*d,S=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const eo=new V,Bn=new wt,O1=new V(0,0,0),k1=new V(1,1,1),Di=new V,qa=new V,vn=new V,Eg=new wt,wg=new ma;class Ou{constructor(e=0,n=0,i=0,r=Ou.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-un(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-un(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Eg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wg.setFromEuler(this),this.setFromQuaternion(wg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ou.DEFAULT_ORDER="XYZ";class Ry{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let B1=0;const Mg=new V,to=new ma,di=new wt,Ka=new V,Ms=new V,z1=new V,V1=new ma,Tg=new V(1,0,0),Cg=new V(0,1,0),Ag=new V(0,0,1),H1={type:"added"},G1={type:"removed"};class tn extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new V,n=new Ou,i=new ma,r=new V(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new Xe}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ry,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return to.setFromAxisAngle(e,n),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,n){return to.setFromAxisAngle(e,n),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(Tg,e)}rotateY(e){return this.rotateOnAxis(Cg,e)}rotateZ(e){return this.rotateOnAxis(Ag,e)}translateOnAxis(e,n){return Mg.copy(e).applyQuaternion(this.quaternion),this.position.add(Mg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Tg,e)}translateY(e){return this.translateOnAxis(Cg,e)}translateZ(e){return this.translateOnAxis(Ag,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ka.copy(e):Ka.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Ms,Ka,this.up):di.lookAt(Ka,Ms,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),to.setFromRotationMatrix(di),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(H1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(G1)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,z1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,V1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),d=s(e.shapes),h=s(e.skeletons),g=s(e.animations),_=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new V(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new V,fi=new V,Wc=new V,hi=new V,no=new V,io=new V,bg=new V,jc=new V,$c=new V,Xc=new V;class ti{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){zn.subVectors(r,n),fi.subVectors(i,n),Wc.subVectors(e,n);const s=zn.dot(zn),a=zn.dot(fi),l=zn.dot(Wc),u=fi.dot(fi),c=fi.dot(Wc),d=s*u-a*a;if(d===0)return o.set(0,0,0),null;const h=1/d,g=(u*l-a*c)*h,_=(s*c-a*l)*h;return o.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,hi.x),l.addScaledVector(s,hi.y),l.addScaledVector(a,hi.z),l)}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),fi.subVectors(e,n),zn.cross(fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),zn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;no.subVectors(r,i),io.subVectors(o,i),jc.subVectors(e,i);const l=no.dot(jc),u=io.dot(jc);if(l<=0&&u<=0)return n.copy(i);$c.subVectors(e,r);const c=no.dot($c),d=io.dot($c);if(c>=0&&d<=c)return n.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(no,s);Xc.subVectors(e,o);const g=no.dot(Xc),_=io.dot(Xc);if(_>=0&&g<=_)return n.copy(o);const S=g*u-l*_;if(S<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(io,a);const p=c*_-g*d;if(p<=0&&d-c>=0&&g-_>=0)return bg.subVectors(o,r),a=(d-c)/(d-c+(g-_)),n.copy(r).addScaledVector(bg,a);const f=1/(p+S+h);return s=S*f,a=h*f,n.copy(i).addScaledVector(no,s).addScaledVector(io,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Py={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Yc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=R1(e,1),n=un(n,0,1),i=un(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Yc(s,o,e+1/3),this.g=Yc(s,o,e),this.b=Yc(s,o,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,n=Bt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bt){const i=Py[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oo(e.r),this.g=Oo(e.g),this.b=Oo(e.b),this}copyLinearToSRGB(e){return this.r=Fc(e.r),this.g=Fc(e.g),this.b=Fc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return ot.fromWorkingColorSpace(Xt.copy(this),e),Math.round(un(Xt.r*255,0,255))*65536+Math.round(un(Xt.g*255,0,255))*256+Math.round(un(Xt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,o=Xt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const d=s-a;switch(u=c<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=ot.workingColorSpace){return ot.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Bt){ot.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==Bt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+n,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ii),e.getHSL(Za);const i=Ic(Ii.h,Za.h,n),r=Ic(Ii.s,Za.s,n),o=Ic(Ii.l,Za.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Ze;Ze.NAMES=Py;let W1=0;class ts extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=pa(),this.name="",this.type="Material",this.blending=Uo,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cf,this.blendDst=df,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=au,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Uo&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cf&&(i.blendSrc=this.blendSrc),this.blendDst!==df&&(i.blendDst=this.blendDst),this.blendEquation!==Mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==au&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ly extends ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new V,Ja=new Ye;class oi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=mg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Fo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ja.fromBufferAttribute(this,n),Ja.applyMatrix3(e),this.setXY(n,Ja.x,Ja.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ss(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ss(n,this.array)),n}setX(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ss(n,this.array)),n}setY(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ss(n,this.array)),n}setZ(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ss(n,this.array)),n}setW(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array),o=sn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mg&&(e.usage=this.usage),e}}class Ny extends oi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Dy extends oi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class In extends oi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let j1=0;const bn=new wt,qc=new tn,ro=new V,_n=new ga,Ts=new ga,It=new V;class si extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=pa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(My(e)?Dy:Ny)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Xe().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return qc.lookAt(e),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new In(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];_n.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(_n.min,Ts.min),_n.expandByPoint(It),It.addVectors(_n.max,Ts.max),_n.expandByPoint(It)):(_n.expandByPoint(Ts.min),_n.expandByPoint(Ts.max))}_n.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)It.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(It));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)It.fromBufferAttribute(a,u),l&&(ro.fromBufferAttribute(e,u),It.add(ro)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let x=0;x<a;x++)u[x]=new V,c[x]=new V;const d=new V,h=new V,g=new V,_=new Ye,S=new Ye,p=new Ye,f=new V,m=new V;function v(x,A,k){d.fromArray(r,x*3),h.fromArray(r,A*3),g.fromArray(r,k*3),_.fromArray(s,x*2),S.fromArray(s,A*2),p.fromArray(s,k*2),h.sub(d),g.sub(d),S.sub(_),p.sub(_);const z=1/(S.x*p.y-p.x*S.y);isFinite(z)&&(f.copy(h).multiplyScalar(p.y).addScaledVector(g,-S.y).multiplyScalar(z),m.copy(g).multiplyScalar(S.x).addScaledVector(h,-p.x).multiplyScalar(z),u[x].add(f),u[A].add(f),u[k].add(f),c[x].add(m),c[A].add(m),c[k].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let x=0,A=E.length;x<A;++x){const k=E[x],z=k.start,D=k.count;for(let G=z,F=z+D;G<F;G+=3)v(i[G+0],i[G+1],i[G+2])}const M=new V,w=new V,T=new V,L=new V;function B(x){T.fromArray(o,x*3),L.copy(T);const A=u[x];M.copy(A),M.sub(T.multiplyScalar(T.dot(A))).normalize(),w.crossVectors(L,A);const z=w.dot(c[x])<0?-1:1;l[x*4]=M.x,l[x*4+1]=M.y,l[x*4+2]=M.z,l[x*4+3]=z}for(let x=0,A=E.length;x<A;++x){const k=E[x],z=k.start,D=k.count;for(let G=z,F=z+D;G<F;G+=3)B(i[G+0]),B(i[G+1]),B(i[G+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new V,o=new V,s=new V,a=new V,l=new V,u=new V,c=new V,d=new V;if(e)for(let h=0,g=e.count;h<g;h+=3){const _=e.getX(h+0),S=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,S),s.fromBufferAttribute(n,p),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let g=0,_=0;for(let S=0,p=l.length;S<p;S++){a.isInterleavedBufferAttribute?g=l[S]*a.data.stride+a.offset:g=l[S]*c;for(let f=0;f<c;f++)h[_++]=u[g++]}return new oi(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new si,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],g=e(h,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const g=u[d];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],d=o[u];for(let h=0,g=d.length;h<g;h++)c.push(d[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rg=new wt,vr=new by,Qa=new Fu,Pg=new V,oo=new V,so=new V,ao=new V,Kc=new V,el=new V,tl=new Ye,nl=new Ye,il=new Ye,Lg=new V,Ng=new V,Dg=new V,rl=new V,ol=new V;class ni extends tn{constructor(e=new si,n=new Ly){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){el.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],d=o[l];c!==0&&(Kc.fromBufferAttribute(d,e),s?el.addScaledVector(Kc,c):el.addScaledVector(Kc.sub(n),c))}n.add(el)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(o),vr.copy(e.ray).recast(e.near),!(Qa.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Qa,Pg)===null||vr.origin.distanceToSquared(Pg)>(e.far-e.near)**2))&&(Rg.copy(o).invert(),vr.copy(e.ray).applyMatrix4(Rg),!(i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,vr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,d=o.attributes.normal,h=o.groups,g=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,S=h.length;_<S;_++){const p=h[_],f=s[p.materialIndex],m=Math.max(p.start,g.start),v=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let E=m,M=v;E<M;E+=3){const w=a.getX(E),T=a.getX(E+1),L=a.getX(E+2);r=sl(this,f,e,i,u,c,d,w,T,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),S=Math.min(a.count,g.start+g.count);for(let p=_,f=S;p<f;p+=3){const m=a.getX(p),v=a.getX(p+1),E=a.getX(p+2);r=sl(this,s,e,i,u,c,d,m,v,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,S=h.length;_<S;_++){const p=h[_],f=s[p.materialIndex],m=Math.max(p.start,g.start),v=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let E=m,M=v;E<M;E+=3){const w=E,T=E+1,L=E+2;r=sl(this,f,e,i,u,c,d,w,T,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let p=_,f=S;p<f;p+=3){const m=p,v=p+1,E=p+2;r=sl(this,s,e,i,u,c,d,m,v,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function $1(t,e,n,i,r,o,s,a){let l;if(e.side===pn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===rr,a),l===null)return null;ol.copy(a),ol.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ol);return u<n.near||u>n.far?null:{distance:u,point:ol.clone(),object:t}}function sl(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,oo),t.getVertexPosition(l,so),t.getVertexPosition(u,ao);const c=$1(t,e,n,i,oo,so,ao,rl);if(c){r&&(tl.fromBufferAttribute(r,a),nl.fromBufferAttribute(r,l),il.fromBufferAttribute(r,u),c.uv=ti.getInterpolation(rl,oo,so,ao,tl,nl,il,new Ye)),o&&(tl.fromBufferAttribute(o,a),nl.fromBufferAttribute(o,l),il.fromBufferAttribute(o,u),c.uv1=ti.getInterpolation(rl,oo,so,ao,tl,nl,il,new Ye),c.uv2=c.uv1),s&&(Lg.fromBufferAttribute(s,a),Ng.fromBufferAttribute(s,l),Dg.fromBufferAttribute(s,u),c.normal=ti.getInterpolation(rl,oo,so,ao,Lg,Ng,Dg,new V),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new V,materialIndex:0};ti.getNormal(oo,so,ao,d.normal),c.face=d}return c}class va extends si{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],d=[];let h=0,g=0;_("z","y","x",-1,-1,i,n,e,s,o,0),_("z","y","x",1,-1,i,n,-e,s,o,1),_("x","z","y",1,1,e,i,n,r,s,2),_("x","z","y",1,-1,e,i,-n,r,s,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new In(u,3)),this.setAttribute("normal",new In(c,3)),this.setAttribute("uv",new In(d,2));function _(S,p,f,m,v,E,M,w,T,L,B){const x=E/T,A=M/L,k=E/2,z=M/2,D=w/2,G=T+1,F=L+1;let Z=0,U=0;const O=new V;for(let H=0;H<F;H++){const X=H*A-z;for(let Q=0;Q<G;Q++){const ge=Q*x-k;O[S]=ge*m,O[p]=X*v,O[f]=D,u.push(O.x,O.y,O.z),O[S]=0,O[p]=0,O[f]=w>0?1:-1,c.push(O.x,O.y,O.z),d.push(Q/T),d.push(1-H/L),Z+=1}}for(let H=0;H<L;H++)for(let X=0;X<T;X++){const Q=h+X+G*H,ge=h+X+G*(H+1),j=h+(X+1)+G*(H+1),K=h+(X+1)+G*H;l.push(Q,ge,K),l.push(ge,j,K),U+=6}a.addGroup(g,U,B),g+=U,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=Yo(t[n]);for(const r in i)e[r]=i[r]}return e}function X1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Iy(t){return t.getRenderTarget()===null?t.outputColorSpace:ot.workingColorSpace}const Y1={clone:Yo,merge:Zt};var q1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q1,this.fragmentShader=K1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yo(e.uniforms),this.uniformsGroups=X1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Uy extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Si}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new V,Ig=new Ye,Ug=new Ye;class Sn extends Uy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vf*2*Math.atan(Math.tan(Dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,n){return this.getViewBounds(e,Ig,Ug),n.subVectors(Ug,Ig)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Dc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const lo=-90,uo=1;class Z1 extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(lo,uo,e,n);r.layers=this.layers,this.add(r);const o=new Sn(lo,uo,e,n);o.layers=this.layers,this.add(o);const s=new Sn(lo,uo,e,n);s.layers=this.layers,this.add(s);const a=new Sn(lo,uo,e,n);a.layers=this.layers,this.add(a);const l=new Sn(lo,uo,e,n);l.layers=this.layers,this.add(l);const u=new Sn(lo,uo,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===du)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(d,h,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Fy extends mn{constructor(e,n,i,r,o,s,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:jo,super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class J1 extends Vr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Fo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ur?Bt:Ln),this.texture=new Fy(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:an}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new va(5,5,5),o=new or({name:"CubemapFromEquirect",uniforms:Yo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Qi});o.uniforms.tEquirect.value=n;const s=new ni(r,o),a=n.minFilter;return n.minFilter===Rr&&(n.minFilter=an),new Z1(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Zc=new V,Q1=new V,eT=new Xe;class Sr{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Zc.subVectors(i,n).cross(Q1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Zc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||eT.getNormalMatrix(e),r=this.coplanarPoint(Zc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Fu,al=new V;class Bh{constructor(e=new Sr,n=new Sr,i=new Sr,r=new Sr,o=new Sr,s=new Sr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Si){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],g=r[8],_=r[9],S=r[10],p=r[11],f=r[12],m=r[13],v=r[14],E=r[15];if(i[0].setComponents(l-o,h-u,p-g,E-f).normalize(),i[1].setComponents(l+o,h+u,p+g,E+f).normalize(),i[2].setComponents(l+s,h+c,p+_,E+m).normalize(),i[3].setComponents(l-s,h-c,p-_,E-m).normalize(),i[4].setComponents(l-a,h-d,p-S,E-v).normalize(),n===Si)i[5].setComponents(l+a,h+d,p+S,E+v).normalize();else if(n===du)i[5].setComponents(a,d,S,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(al.x=r.normal.x>0?e.max.x:e.min.x,al.y=r.normal.y>0?e.max.y:e.min.y,al.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(al)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oy(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function tT(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,g=d.byteLength,_=t.createBuffer();t.bindBuffer(c,_),t.bufferData(c,d,h),u.onUploadCallback();let S;if(d instanceof Float32Array)S=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)S=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=t.SHORT;else if(d instanceof Uint32Array)S=t.UNSIGNED_INT;else if(d instanceof Int32Array)S=t.INT;else if(d instanceof Int8Array)S=t.BYTE;else if(d instanceof Uint8Array)S=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:g}}function o(u,c,d){const h=c.array,g=c._updateRange,_=c.updateRanges;if(t.bindBuffer(d,u),g.count===-1&&_.length===0&&t.bufferSubData(d,0,h),_.length!==0){for(let S=0,p=_.length;S<p;S++){const f=_[S];n?t.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):t.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(d,g.offset*h.BYTES_PER_ELEMENT,h,g.offset,g.count):t.bufferSubData(d,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1),c.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,c));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(d.buffer,u,c),d.version=u.version}}return{get:s,remove:a,update:l}}class ku extends si{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=n/l,g=[],_=[],S=[],p=[];for(let f=0;f<c;f++){const m=f*h-s;for(let v=0;v<u;v++){const E=v*d-o;_.push(E,-m,0),S.push(0,0,1),p.push(v/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<a;m++){const v=m+u*f,E=m+u*(f+1),M=m+1+u*(f+1),w=m+1+u*f;g.push(v,E,w),g.push(E,M,w)}this.setIndex(g),this.setAttribute("position",new In(_,3)),this.setAttribute("normal",new In(S,3)),this.setAttribute("uv",new In(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ku(e.width,e.height,e.widthSegments,e.heightSegments)}}var nT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cT=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ST=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ET=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,MT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,TT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,CT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,AT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NT="gl_FragColor = linearToOutputTexel( gl_FragColor );",DT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,IT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,UT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,FT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,OT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,BT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,WT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$T=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,KT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,uC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mC=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,vC=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_C=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,yC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,SC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,TC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,LC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,kC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,BC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,VC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,GC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$C=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,KC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ZC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,eA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,uA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_A=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,EA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,CA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,PA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,DA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:nT,alphahash_pars_fragment:iT,alphamap_fragment:rT,alphamap_pars_fragment:oT,alphatest_fragment:sT,alphatest_pars_fragment:aT,aomap_fragment:lT,aomap_pars_fragment:uT,batching_pars_vertex:cT,batching_vertex:dT,begin_vertex:fT,beginnormal_vertex:hT,bsdfs:pT,iridescence_fragment:mT,bumpmap_pars_fragment:gT,clipping_planes_fragment:vT,clipping_planes_pars_fragment:_T,clipping_planes_pars_vertex:yT,clipping_planes_vertex:xT,color_fragment:ST,color_pars_fragment:ET,color_pars_vertex:wT,color_vertex:MT,common:TT,cube_uv_reflection_fragment:CT,defaultnormal_vertex:AT,displacementmap_pars_vertex:bT,displacementmap_vertex:RT,emissivemap_fragment:PT,emissivemap_pars_fragment:LT,colorspace_fragment:NT,colorspace_pars_fragment:DT,envmap_fragment:IT,envmap_common_pars_fragment:UT,envmap_pars_fragment:FT,envmap_pars_vertex:OT,envmap_physical_pars_fragment:qT,envmap_vertex:kT,fog_vertex:BT,fog_pars_vertex:zT,fog_fragment:VT,fog_pars_fragment:HT,gradientmap_pars_fragment:GT,lightmap_fragment:WT,lightmap_pars_fragment:jT,lights_lambert_fragment:$T,lights_lambert_pars_fragment:XT,lights_pars_begin:YT,lights_toon_fragment:KT,lights_toon_pars_fragment:ZT,lights_phong_fragment:JT,lights_phong_pars_fragment:QT,lights_physical_fragment:eC,lights_physical_pars_fragment:tC,lights_fragment_begin:nC,lights_fragment_maps:iC,lights_fragment_end:rC,logdepthbuf_fragment:oC,logdepthbuf_pars_fragment:sC,logdepthbuf_pars_vertex:aC,logdepthbuf_vertex:lC,map_fragment:uC,map_pars_fragment:cC,map_particle_fragment:dC,map_particle_pars_fragment:fC,metalnessmap_fragment:hC,metalnessmap_pars_fragment:pC,morphcolor_vertex:mC,morphnormal_vertex:gC,morphtarget_pars_vertex:vC,morphtarget_vertex:_C,normal_fragment_begin:yC,normal_fragment_maps:xC,normal_pars_fragment:SC,normal_pars_vertex:EC,normal_vertex:wC,normalmap_pars_fragment:MC,clearcoat_normal_fragment_begin:TC,clearcoat_normal_fragment_maps:CC,clearcoat_pars_fragment:AC,iridescence_pars_fragment:bC,opaque_fragment:RC,packing:PC,premultiplied_alpha_fragment:LC,project_vertex:NC,dithering_fragment:DC,dithering_pars_fragment:IC,roughnessmap_fragment:UC,roughnessmap_pars_fragment:FC,shadowmap_pars_fragment:OC,shadowmap_pars_vertex:kC,shadowmap_vertex:BC,shadowmask_pars_fragment:zC,skinbase_vertex:VC,skinning_pars_vertex:HC,skinning_vertex:GC,skinnormal_vertex:WC,specularmap_fragment:jC,specularmap_pars_fragment:$C,tonemapping_fragment:XC,tonemapping_pars_fragment:YC,transmission_fragment:qC,transmission_pars_fragment:KC,uv_pars_fragment:ZC,uv_pars_vertex:JC,uv_vertex:QC,worldpos_vertex:eA,background_vert:tA,background_frag:nA,backgroundCube_vert:iA,backgroundCube_frag:rA,cube_vert:oA,cube_frag:sA,depth_vert:aA,depth_frag:lA,distanceRGBA_vert:uA,distanceRGBA_frag:cA,equirect_vert:dA,equirect_frag:fA,linedashed_vert:hA,linedashed_frag:pA,meshbasic_vert:mA,meshbasic_frag:gA,meshlambert_vert:vA,meshlambert_frag:_A,meshmatcap_vert:yA,meshmatcap_frag:xA,meshnormal_vert:SA,meshnormal_frag:EA,meshphong_vert:wA,meshphong_frag:MA,meshphysical_vert:TA,meshphysical_frag:CA,meshtoon_vert:AA,meshtoon_frag:bA,points_vert:RA,points_frag:PA,shadow_vert:LA,shadow_frag:NA,sprite_vert:DA,sprite_frag:IA},ce={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Qn={basic:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Zt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Zt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Zt([ce.points,ce.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Zt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Zt([ce.common,ce.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Zt([ce.sprite,ce.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Zt([ce.common,ce.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Zt([ce.lights,ce.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Qn.physical={uniforms:Zt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const ll={r:0,b:0,g:0};function UA(t,e,n,i,r,o,s){const a=new Ze(0);let l=o===!0?0:1,u,c,d=null,h=0,g=null;function _(p,f){let m=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?n:e).get(v)),v===null?S(a,l):v&&v.isColor&&(S(v,1),m=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Iu)?(c===void 0&&(c=new ni(new va(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:Yo(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=ot.getTransfer(v.colorSpace)!==ut,(d!==v||h!==v.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,g=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new ni(new ku(2,2),new or({name:"BackgroundMaterial",uniforms:Yo(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=ot.getTransfer(v.colorSpace)!==ut,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,g=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function S(p,f){p.getRGB(ll,Iy(t)),i.buffers.color.setClear(ll.r,ll.g,ll.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),l=f,S(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,S(a,l)},render:_}}function FA(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=p(null);let u=l,c=!1;function d(D,G,F,Z,U){let O=!1;if(s){const H=S(Z,F,G);u!==H&&(u=H,g(u.object)),O=f(D,Z,F,U),O&&m(D,Z,F,U)}else{const H=G.wireframe===!0;(u.geometry!==Z.id||u.program!==F.id||u.wireframe!==H)&&(u.geometry=Z.id,u.program=F.id,u.wireframe=H,O=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(O||c)&&(c=!1,L(D,G,F,Z),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function h(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function g(D){return i.isWebGL2?t.bindVertexArray(D):o.bindVertexArrayOES(D)}function _(D){return i.isWebGL2?t.deleteVertexArray(D):o.deleteVertexArrayOES(D)}function S(D,G,F){const Z=F.wireframe===!0;let U=a[D.id];U===void 0&&(U={},a[D.id]=U);let O=U[G.id];O===void 0&&(O={},U[G.id]=O);let H=O[Z];return H===void 0&&(H=p(h()),O[Z]=H),H}function p(D){const G=[],F=[],Z=[];for(let U=0;U<r;U++)G[U]=0,F[U]=0,Z[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:F,attributeDivisors:Z,object:D,attributes:{},index:null}}function f(D,G,F,Z){const U=u.attributes,O=G.attributes;let H=0;const X=F.getAttributes();for(const Q in X)if(X[Q].location>=0){const j=U[Q];let K=O[Q];if(K===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),j===void 0||j.attribute!==K||K&&j.data!==K.data)return!0;H++}return u.attributesNum!==H||u.index!==Z}function m(D,G,F,Z){const U={},O=G.attributes;let H=0;const X=F.getAttributes();for(const Q in X)if(X[Q].location>=0){let j=O[Q];j===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));const K={};K.attribute=j,j&&j.data&&(K.data=j.data),U[Q]=K,H++}u.attributes=U,u.attributesNum=H,u.index=Z}function v(){const D=u.newAttributes;for(let G=0,F=D.length;G<F;G++)D[G]=0}function E(D){M(D,0)}function M(D,G){const F=u.newAttributes,Z=u.enabledAttributes,U=u.attributeDivisors;F[D]=1,Z[D]===0&&(t.enableVertexAttribArray(D),Z[D]=1),U[D]!==G&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,G),U[D]=G)}function w(){const D=u.newAttributes,G=u.enabledAttributes;for(let F=0,Z=G.length;F<Z;F++)G[F]!==D[F]&&(t.disableVertexAttribArray(F),G[F]=0)}function T(D,G,F,Z,U,O,H){H===!0?t.vertexAttribIPointer(D,G,F,U,O):t.vertexAttribPointer(D,G,F,Z,U,O)}function L(D,G,F,Z){if(i.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const U=Z.attributes,O=F.getAttributes(),H=G.defaultAttributeValues;for(const X in O){const Q=O[X];if(Q.location>=0){let ge=U[X];if(ge===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(ge=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(ge=D.instanceColor)),ge!==void 0){const j=ge.normalized,K=ge.itemSize,ne=n.get(ge);if(ne===void 0)continue;const de=ne.buffer,ye=ne.type,ve=ne.bytesPerElement,ze=i.isWebGL2===!0&&(ye===t.INT||ye===t.UNSIGNED_INT||ge.gpuType===py);if(ge.isInterleavedBufferAttribute){const be=ge.data,I=be.stride,nt=ge.offset;if(be.isInstancedInterleavedBuffer){for(let _e=0;_e<Q.locationSize;_e++)M(Q.location+_e,be.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let _e=0;_e<Q.locationSize;_e++)E(Q.location+_e);t.bindBuffer(t.ARRAY_BUFFER,de);for(let _e=0;_e<Q.locationSize;_e++)T(Q.location+_e,K/Q.locationSize,ye,j,I*ve,(nt+K/Q.locationSize*_e)*ve,ze)}else{if(ge.isInstancedBufferAttribute){for(let be=0;be<Q.locationSize;be++)M(Q.location+be,ge.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let be=0;be<Q.locationSize;be++)E(Q.location+be);t.bindBuffer(t.ARRAY_BUFFER,de);for(let be=0;be<Q.locationSize;be++)T(Q.location+be,K/Q.locationSize,ye,j,K*ve,K/Q.locationSize*be*ve,ze)}}else if(H!==void 0){const j=H[X];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(Q.location,j);break;case 3:t.vertexAttrib3fv(Q.location,j);break;case 4:t.vertexAttrib4fv(Q.location,j);break;default:t.vertexAttrib1fv(Q.location,j)}}}}w()}function B(){k();for(const D in a){const G=a[D];for(const F in G){const Z=G[F];for(const U in Z)_(Z[U].object),delete Z[U];delete G[F]}delete a[D]}}function x(D){if(a[D.id]===void 0)return;const G=a[D.id];for(const F in G){const Z=G[F];for(const U in Z)_(Z[U].object),delete Z[U];delete G[F]}delete a[D.id]}function A(D){for(const G in a){const F=a[G];if(F[D.id]===void 0)continue;const Z=F[D.id];for(const U in Z)_(Z[U].object),delete Z[U];delete F[D.id]}}function k(){z(),c=!0,u!==l&&(u=l,g(u.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:z,dispose:B,releaseStatesOfGeometry:x,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:E,disableUnusedAttributes:w}}function OA(t,e,n,i){const r=i.isWebGL2;let o;function s(c){o=c}function a(c,d){t.drawArrays(o,c,d),n.update(d,o,1)}function l(c,d,h){if(h===0)return;let g,_;if(r)g=t,_="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](o,c,d,h),n.update(d,o,h)}function u(c,d,h){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<h;_++)this.render(c[_],d[_]);else{g.multiDrawArraysWEBGL(o,c,0,d,0,h);let _=0;for(let S=0;S<h;S++)_+=d[S];n.update(_,o,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function kA(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=s||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),S=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,E=s||e.has("OES_texture_float"),M=v&&E,w=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:m,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:M,maxSamples:w}}function BA(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Sr,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const g=d.length!==0||h||i!==0||r;return r=h,i=d.length,g},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){n=c(d,h,0)},this.setState=function(d,h,g){const _=d.clippingPlanes,S=d.clipIntersection,p=d.clipShadows,f=t.get(d);if(!r||_===null||_.length===0||o&&!p)o?c(null):u();else{const m=o?0:i,v=m*4;let E=f.clippingState||null;l.value=E,E=c(_,h,v,g);for(let M=0;M!==v;++M)E[M]=n[M];f.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,g,_){const S=d!==null?d.length:0;let p=null;if(S!==0){if(p=l.value,_!==!0||p===null){const f=g+S*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,E=g;v!==S;++v,E+=4)s.copy(d[v]).applyMatrix4(m,a),s.normal.toArray(p,E),p[E+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}function zA(t){let e=new WeakMap;function n(s,a){return a===ff?s.mapping=jo:a===hf&&(s.mapping=$o),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===ff||a===hf)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new J1(l.height);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class VA extends Uy{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Co=4,Fg=[.125,.215,.35,.446,.526,.582],Tr=20,Jc=new VA,Og=new Ze;let Qc=null,ed=0,td=0;const Er=(1+Math.sqrt(5))/2,co=1/Er,kg=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Er,co),new V(0,Er,-co),new V(co,0,Er),new V(-co,0,Er),new V(Er,co,0),new V(-Er,co,0)];class Bg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Qc=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qc,ed,td),e.scissorTest=!1,ul(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===jo||e.mapping===$o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qc=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:aa,format:$n,colorSpace:Ai,depthBuffer:!1},r=zg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zg(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HA(o)),this._blurMaterial=GA(o,e,n)}return r}_compileMaterial(e){const n=new ni(this._lodPlanes[0],e);this._renderer.compile(n,Jc)}_sceneToCubeUV(e,n,i,r){const a=new Sn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(Og),c.toneMapping=er,c.autoClear=!1;const g=new Ly({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),_=new ni(new va,g);let S=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,S=!0):(g.color.copy(Og),S=!0);for(let f=0;f<6;f++){const m=f%3;m===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):m===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const v=this._cubeSize;ul(r,m*v,f>2?v:0,v,v),c.setRenderTarget(r),S&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===jo||e.mapping===$o;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vg());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new ni(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;ul(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Jc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=kg[(r-1)%kg.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new ni(this._lodPlanes[r],u),h=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*g):2*Math.PI/(2*Tr-1),S=o/_,p=isFinite(o)?1+Math.floor(c*S):Tr;p>Tr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Tr}`);const f=[];let m=0;for(let T=0;T<Tr;++T){const L=T/S,B=Math.exp(-L*L/2);f.push(B),T===0?m+=B:T<p&&(m+=2*B)}for(let T=0;T<f.length;T++)f[T]=f[T]/m;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const E=this._sizeLods[r],M=3*E*(r>v-Co?r-v+Co:0),w=4*(this._cubeSize-E);ul(n,M,w,3*E,2*E),l.setRenderTarget(n),l.render(d,Jc)}}function HA(t){const e=[],n=[],i=[];let r=t;const o=t-Co+1+Fg.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-Co?l=Fg[s-t+Co-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],g=6,_=6,S=3,p=2,f=1,m=new Float32Array(S*_*g),v=new Float32Array(p*_*g),E=new Float32Array(f*_*g);for(let w=0;w<g;w++){const T=w%3*2/3-1,L=w>2?0:-1,B=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];m.set(B,S*_*w),v.set(h,p*_*w);const x=[w,w,w,w,w,w];E.set(x,f*_*w)}const M=new si;M.setAttribute("position",new oi(m,S)),M.setAttribute("uv",new oi(v,p)),M.setAttribute("faceIndex",new oi(E,f)),e.push(M),r>Co&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function zg(t,e,n){const i=new Vr(t,e,n);return i.texture.mapping=Iu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ul(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function GA(t,e,n){const i=new Float32Array(Tr),r=new V(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Vg(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Hg(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function zh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function WA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===ff||l===hf,c=l===jo||l===$o;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Bg(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new Bg(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",o),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function jA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function $A(t,e,n,i){const r={},o=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const S=h.morphAttributes[_];for(let p=0,f=S.length;p<f;p++)e.remove(S[p])}h.removeEventListener("dispose",s),delete r[h.id];const g=o.get(h);g&&(e.remove(g),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const g=d.morphAttributes;for(const _ in g){const S=g[_];for(let p=0,f=S.length;p<f;p++)e.update(S[p],t.ARRAY_BUFFER)}}function u(d){const h=[],g=d.index,_=d.attributes.position;let S=0;if(g!==null){const m=g.array;S=g.version;for(let v=0,E=m.length;v<E;v+=3){const M=m[v+0],w=m[v+1],T=m[v+2];h.push(M,w,w,T,T,M)}}else if(_!==void 0){const m=_.array;S=_.version;for(let v=0,E=m.length/3-1;v<E;v+=3){const M=v+0,w=v+1,T=v+2;h.push(M,w,w,T,T,M)}}else return;const p=new(My(h)?Dy:Ny)(h,1);p.version=S;const f=o.get(d);f&&e.remove(f),o.set(d,p)}function c(d){const h=o.get(d);if(h){const g=d.index;g!==null&&h.version<g.version&&u(d)}else u(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function XA(t,e,n,i){const r=i.isWebGL2;let o;function s(g){o=g}let a,l;function u(g){a=g.type,l=g.bytesPerElement}function c(g,_){t.drawElements(o,_,a,g*l),n.update(_,o,1)}function d(g,_,S){if(S===0)return;let p,f;if(r)p=t,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](o,_,a,g*l,S),n.update(_,o,S)}function h(g,_,S){if(S===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<S;f++)this.render(g[f]/l,_[f]);else{p.multiDrawElementsWEBGL(o,_,0,a,g,0,S);let f=0;for(let m=0;m<S;m++)f+=_[m];n.update(f,o,1)}}this.setMode=s,this.setIndex=u,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function YA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function qA(t,e){return t[0]-e[0]}function KA(t,e){return Math.abs(e[1])-Math.abs(t[1])}function ZA(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new ft,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,S=_!==void 0?_.length:0;let p=o.get(c);if(p===void 0||p.count!==S){let G=function(){z.dispose(),o.delete(c),c.removeEventListener("dispose",G)};var g=G;p!==void 0&&p.texture.dispose();const v=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,w=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let B=0;v===!0&&(B=1),E===!0&&(B=2),M===!0&&(B=3);let x=c.attributes.position.count*B,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const k=new Float32Array(x*A*4*S),z=new Ay(k,x,A,S);z.type=_i,z.needsUpdate=!0;const D=B*4;for(let F=0;F<S;F++){const Z=w[F],U=T[F],O=L[F],H=x*A*4*F;for(let X=0;X<Z.count;X++){const Q=X*D;v===!0&&(s.fromBufferAttribute(Z,X),k[H+Q+0]=s.x,k[H+Q+1]=s.y,k[H+Q+2]=s.z,k[H+Q+3]=0),E===!0&&(s.fromBufferAttribute(U,X),k[H+Q+4]=s.x,k[H+Q+5]=s.y,k[H+Q+6]=s.z,k[H+Q+7]=0),M===!0&&(s.fromBufferAttribute(O,X),k[H+Q+8]=s.x,k[H+Q+9]=s.y,k[H+Q+10]=s.z,k[H+Q+11]=O.itemSize===4?s.w:1)}}p={count:S,texture:z,size:new Ye(x,A)},o.set(c,p),c.addEventListener("dispose",G)}let f=0;for(let v=0;v<h.length;v++)f+=h[v];const m=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",m),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let S=i[c.id];if(S===void 0||S.length!==_){S=[];for(let E=0;E<_;E++)S[E]=[E,0];i[c.id]=S}for(let E=0;E<_;E++){const M=S[E];M[0]=E,M[1]=h[E]}S.sort(KA);for(let E=0;E<8;E++)E<_&&S[E][1]?(a[E][0]=S[E][0],a[E][1]=S[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(qA);const p=c.morphAttributes.position,f=c.morphAttributes.normal;let m=0;for(let E=0;E<8;E++){const M=a[E],w=M[0],T=M[1];w!==Number.MAX_SAFE_INTEGER&&T?(p&&c.getAttribute("morphTarget"+E)!==p[w]&&c.setAttribute("morphTarget"+E,p[w]),f&&c.getAttribute("morphNormal"+E)!==f[w]&&c.setAttribute("morphNormal"+E,f[w]),r[E]=T,m+=T):(p&&c.hasAttribute("morphTarget"+E)===!0&&c.deleteAttribute("morphTarget"+E),f&&c.hasAttribute("morphNormal"+E)===!0&&c.deleteAttribute("morphNormal"+E),r[E]=0)}const v=c.morphTargetsRelative?1:1-m;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function JA(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class ky extends mn{constructor(e,n,i,r,o,s,a,l,u,c){if(c=c!==void 0?c:Ir,c!==Ir&&c!==Xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ir&&(i=Gi),i===void 0&&c===Xo&&(i=Dr),super(null,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const By=new mn,zy=new ky(1,1);zy.compareFunction=wy;const Vy=new Ay,Hy=new U1,Gy=new Fy,Gg=[],Wg=[],jg=new Float32Array(16),$g=new Float32Array(9),Xg=new Float32Array(4);function ns(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Gg[r];if(o===void 0&&(o=new Float32Array(r),Gg[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Bu(t,e){let n=Wg[e];n===void 0&&(n=new Int32Array(e),Wg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function QA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function eb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function tb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function nb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function ib(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Xg.set(i),t.uniformMatrix2fv(this.addr,!1,Xg),Lt(n,i)}}function rb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;$g.set(i),t.uniformMatrix3fv(this.addr,!1,$g),Lt(n,i)}}function ob(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;jg.set(i),t.uniformMatrix4fv(this.addr,!1,jg),Lt(n,i)}}function sb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function lb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function ub(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function cb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function db(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function fb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function hb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function pb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?zy:By;n.setTexture2D(e||o,r)}function mb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Hy,r)}function gb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Gy,r)}function vb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Vy,r)}function _b(t){switch(t){case 5126:return QA;case 35664:return eb;case 35665:return tb;case 35666:return nb;case 35674:return ib;case 35675:return rb;case 35676:return ob;case 5124:case 35670:return sb;case 35667:case 35671:return ab;case 35668:case 35672:return lb;case 35669:case 35673:return ub;case 5125:return cb;case 36294:return db;case 36295:return fb;case 36296:return hb;case 35678:case 36198:case 36298:case 36306:case 35682:return pb;case 35679:case 36299:case 36307:return mb;case 35680:case 36300:case 36308:case 36293:return gb;case 36289:case 36303:case 36311:case 36292:return vb}}function yb(t,e){t.uniform1fv(this.addr,e)}function xb(t,e){const n=ns(e,this.size,2);t.uniform2fv(this.addr,n)}function Sb(t,e){const n=ns(e,this.size,3);t.uniform3fv(this.addr,n)}function Eb(t,e){const n=ns(e,this.size,4);t.uniform4fv(this.addr,n)}function wb(t,e){const n=ns(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Mb(t,e){const n=ns(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Tb(t,e){const n=ns(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Cb(t,e){t.uniform1iv(this.addr,e)}function Ab(t,e){t.uniform2iv(this.addr,e)}function bb(t,e){t.uniform3iv(this.addr,e)}function Rb(t,e){t.uniform4iv(this.addr,e)}function Pb(t,e){t.uniform1uiv(this.addr,e)}function Lb(t,e){t.uniform2uiv(this.addr,e)}function Nb(t,e){t.uniform3uiv(this.addr,e)}function Db(t,e){t.uniform4uiv(this.addr,e)}function Ib(t,e,n){const i=this.cache,r=e.length,o=Bu(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||By,o[s])}function Ub(t,e,n){const i=this.cache,r=e.length,o=Bu(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||Hy,o[s])}function Fb(t,e,n){const i=this.cache,r=e.length,o=Bu(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||Gy,o[s])}function Ob(t,e,n){const i=this.cache,r=e.length,o=Bu(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||Vy,o[s])}function kb(t){switch(t){case 5126:return yb;case 35664:return xb;case 35665:return Sb;case 35666:return Eb;case 35674:return wb;case 35675:return Mb;case 35676:return Tb;case 5124:case 35670:return Cb;case 35667:case 35671:return Ab;case 35668:case 35672:return bb;case 35669:case 35673:return Rb;case 5125:return Pb;case 36294:return Lb;case 36295:return Nb;case 36296:return Db;case 35678:case 36198:case 36298:case 36306:case 35682:return Ib;case 35679:case 36299:case 36307:return Ub;case 35680:case 36300:case 36308:case 36293:return Fb;case 36289:case 36303:case 36311:case 36292:return Ob}}class Bb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=_b(n.type)}}class zb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=kb(n.type)}}class Vb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const nd=/(\w+)(\])?(\[|\.)?/g;function Yg(t,e){t.seq.push(e),t.map[e.id]=e}function Hb(t,e,n){const i=t.name,r=i.length;for(nd.lastIndex=0;;){const o=nd.exec(i),s=nd.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){Yg(n,u===void 0?new Bb(a,t,e):new zb(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new Vb(a),Yg(n,d)),n=d}}}class Ll{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);Hb(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function qg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Gb=37297;let Wb=0;function jb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function $b(t){const e=ot.getPrimaries(ot.workingColorSpace),n=ot.getPrimaries(t);let i;switch(e===n?i="":e===cu&&n===uu?i="LinearDisplayP3ToLinearSRGB":e===uu&&n===cu&&(i="LinearSRGBToLinearDisplayP3"),t){case Ai:case Uu:return[i,"LinearTransferOETF"];case Bt:case kh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Kg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+jb(t.getShaderSource(e),s)}else return r}function Xb(t,e){const n=$b(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Yb(t,e){let n;switch(e){case o1:n="Linear";break;case s1:n="Reinhard";break;case a1:n="OptimizedCineon";break;case l1:n="ACESFilmic";break;case c1:n="AgX";break;case u1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function qb(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ao).join(`
`)}function Kb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function Zb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Jb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Ao(t){return t!==""}function Zg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qb=/^[ \t]*#include +<([\w\d./]+)>/gm;function yf(t){return t.replace(Qb,tR)}const eR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function tR(t,e){let n=We[e];if(n===void 0){const i=eR.get(e);if(i!==void 0)n=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yf(n)}const nR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qg(t){return t.replace(nR,iR)}function iR(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function ev(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===fy?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===DM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function oR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case jo:case $o:e="ENVMAP_TYPE_CUBE";break;case Iu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case $o:e="ENVMAP_MODE_REFRACTION";break}return e}function aR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Fh:e="ENVMAP_BLENDING_MULTIPLY";break;case i1:e="ENVMAP_BLENDING_MIX";break;case r1:e="ENVMAP_BLENDING_ADD";break}return e}function lR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function uR(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=rR(n),u=oR(n),c=sR(n),d=aR(n),h=lR(n),g=n.isWebGL2?"":qb(n),_=Kb(n),S=Zb(o),p=r.createProgram();let f,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(Ao).join(`
`),f.length>0&&(f+=`
`),m=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(Ao).join(`
`),m.length>0&&(m+=`
`)):(f=[ev(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),m=[g,ev(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==er?"#define TONE_MAPPING":"",n.toneMapping!==er?We.tonemapping_pars_fragment:"",n.toneMapping!==er?Yb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Xb("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ao).join(`
`)),s=yf(s),s=Zg(s,n),s=Jg(s,n),a=yf(a),a=Zg(a,n),a=Jg(a,n),s=Qg(s),a=Qg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===gg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=v+f+s,M=v+m+a,w=qg(r,r.VERTEX_SHADER,E),T=qg(r,r.FRAGMENT_SHADER,M);r.attachShader(p,w),r.attachShader(p,T),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function L(k){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(w).trim(),G=r.getShaderInfoLog(T).trim();let F=!0,Z=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(F=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,w,T);else{const U=Kg(r,w,"vertex"),O=Kg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+z+`
`+U+`
`+O)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(D===""||G==="")&&(Z=!1);Z&&(k.diagnostics={runnable:F,programLog:z,vertexShader:{log:D,prefix:f},fragmentShader:{log:G,prefix:m}})}r.deleteShader(w),r.deleteShader(T),B=new Ll(r,p),x=Jb(r,p)}let B;this.getUniforms=function(){return B===void 0&&L(this),B};let x;this.getAttributes=function(){return x===void 0&&L(this),x};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(p,Gb)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Wb++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=T,this}let cR=0;class dR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new fR(e),n.set(e,i)),i}}class fR{constructor(e){this.id=cR++,this.code=e,this.usedTimes=0}}function hR(t,e,n,i,r,o,s){const a=new Ry,l=new dR,u=new Set,c=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,g=r.vertexTextures;let _=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return u.add(x),x===0?"uv":`uv${x}`}function f(x,A,k,z,D){const G=z.fog,F=D.geometry,Z=x.isMeshStandardMaterial?z.environment:null,U=(x.isMeshStandardMaterial?n:e).get(x.envMap||Z),O=U&&U.mapping===Iu?U.image.height:null,H=S[x.type];x.precision!==null&&(_=r.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const X=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Q=X!==void 0?X.length:0;let ge=0;F.morphAttributes.position!==void 0&&(ge=1),F.morphAttributes.normal!==void 0&&(ge=2),F.morphAttributes.color!==void 0&&(ge=3);let j,K,ne,de;if(H){const st=Qn[H];j=st.vertexShader,K=st.fragmentShader}else j=x.vertexShader,K=x.fragmentShader,l.update(x),ne=l.getVertexShaderID(x),de=l.getFragmentShaderID(x);const ye=t.getRenderTarget(),ve=D.isInstancedMesh===!0,ze=D.isBatchedMesh===!0,be=!!x.map,I=!!x.matcap,nt=!!U,_e=!!x.aoMap,Ce=!!x.lightMap,xe=!!x.bumpMap,Oe=!!x.normalMap,Me=!!x.displacementMap,P=!!x.emissiveMap,C=!!x.metalnessMap,$=!!x.roughnessMap,ie=x.anisotropy>0,ee=x.clearcoat>0,re=x.iridescence>0,he=x.sheen>0,ue=x.transmission>0,fe=ie&&!!x.anisotropyMap,Se=ee&&!!x.clearcoatMap,Le=ee&&!!x.clearcoatNormalMap,te=ee&&!!x.clearcoatRoughnessMap,Ke=re&&!!x.iridescenceMap,Ie=re&&!!x.iridescenceThicknessMap,Re=he&&!!x.sheenColorMap,Ee=he&&!!x.sheenRoughnessMap,se=!!x.specularMap,ke=!!x.specularColorMap,Qe=!!x.specularIntensityMap,et=ue&&!!x.transmissionMap,Ve=ue&&!!x.thicknessMap,it=!!x.gradientMap,N=!!x.alphaMap,ae=x.alphaTest>0,le=!!x.alphaHash,we=!!x.extensions;let Pe=er;x.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Pe=t.toneMapping);const tt={isWebGL2:d,shaderID:H,shaderType:x.type,shaderName:x.name,vertexShader:j,fragmentShader:K,defines:x.defines,customVertexShaderID:ne,customFragmentShaderID:de,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:ze,instancing:ve,instancingColor:ve&&D.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:ye===null?t.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Ai,alphaToCoverage:!!x.alphaToCoverage,map:be,matcap:I,envMap:nt,envMapMode:nt&&U.mapping,envMapCubeUVHeight:O,aoMap:_e,lightMap:Ce,bumpMap:xe,normalMap:Oe,displacementMap:g&&Me,emissiveMap:P,normalMapObjectSpace:Oe&&x.normalMapType===S1,normalMapTangentSpace:Oe&&x.normalMapType===Ey,metalnessMap:C,roughnessMap:$,anisotropy:ie,anisotropyMap:fe,clearcoat:ee,clearcoatMap:Se,clearcoatNormalMap:Le,clearcoatRoughnessMap:te,iridescence:re,iridescenceMap:Ke,iridescenceThicknessMap:Ie,sheen:he,sheenColorMap:Re,sheenRoughnessMap:Ee,specularMap:se,specularColorMap:ke,specularIntensityMap:Qe,transmission:ue,transmissionMap:et,thicknessMap:Ve,gradientMap:it,opaque:x.transparent===!1&&x.blending===Uo&&x.alphaToCoverage===!1,alphaMap:N,alphaTest:ae,alphaHash:le,combine:x.combine,mapUv:be&&p(x.map.channel),aoMapUv:_e&&p(x.aoMap.channel),lightMapUv:Ce&&p(x.lightMap.channel),bumpMapUv:xe&&p(x.bumpMap.channel),normalMapUv:Oe&&p(x.normalMap.channel),displacementMapUv:Me&&p(x.displacementMap.channel),emissiveMapUv:P&&p(x.emissiveMap.channel),metalnessMapUv:C&&p(x.metalnessMap.channel),roughnessMapUv:$&&p(x.roughnessMap.channel),anisotropyMapUv:fe&&p(x.anisotropyMap.channel),clearcoatMapUv:Se&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:Le&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&p(x.sheenRoughnessMap.channel),specularMapUv:se&&p(x.specularMap.channel),specularColorMapUv:ke&&p(x.specularColorMap.channel),specularIntensityMapUv:Qe&&p(x.specularIntensityMap.channel),transmissionMapUv:et&&p(x.transmissionMap.channel),thicknessMapUv:Ve&&p(x.thicknessMap.channel),alphaMapUv:N&&p(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Oe||ie),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(be||N),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ge,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:Pe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:be&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===ut,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===vi,flipSided:x.side===pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:we&&x.extensions.derivatives===!0,extensionFragDepth:we&&x.extensions.fragDepth===!0,extensionDrawBuffers:we&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:we&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return tt.vertexUv1s=u.has(1),tt.vertexUv2s=u.has(2),tt.vertexUv3s=u.has(3),u.clear(),tt}function m(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)A.push(k),A.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(v(A,x),E(A,x),A.push(t.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function v(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function E(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.alphaToCoverage&&a.enable(20),x.push(a.mask)}function M(x){const A=S[x.type];let k;if(A){const z=Qn[A];k=Y1.clone(z.uniforms)}else k=x.uniforms;return k}function w(x,A){let k;for(let z=0,D=c.length;z<D;z++){const G=c[z];if(G.cacheKey===A){k=G,++k.usedTimes;break}}return k===void 0&&(k=new uR(t,A,x,o),c.push(k)),k}function T(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),x.destroy()}}function L(x){l.remove(x)}function B(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:M,acquireProgram:w,releaseProgram:T,releaseShaderCache:L,programs:c,dispose:B}}function pR(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function mR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function tv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function nv(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d,h,g,_,S,p){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:g,groupOrder:_,renderOrder:d.renderOrder,z:S,group:p},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=g,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=S,f.group=p),e++,f}function a(d,h,g,_,S,p){const f=s(d,h,g,_,S,p);g.transmission>0?i.push(f):g.transparent===!0?r.push(f):n.push(f)}function l(d,h,g,_,S,p){const f=s(d,h,g,_,S,p);g.transmission>0?i.unshift(f):g.transparent===!0?r.unshift(f):n.unshift(f)}function u(d,h){n.length>1&&n.sort(d||mR),i.length>1&&i.sort(h||tv),r.length>1&&r.sort(h||tv)}function c(){for(let d=e,h=t.length;d<h;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:c,sort:u}}function gR(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new nv,t.set(i,[s])):r>=o.length?(s=new nv,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function vR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new Ze};break;case"SpotLight":n={position:new V,direction:new V,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function _R(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let yR=0;function xR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function SR(t,e){const n=new vR,i=_R(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new V);const o=new V,s=new wt,a=new wt;function l(c,d){let h=0,g=0,_=0;for(let k=0;k<9;k++)r.probe[k].set(0,0,0);let S=0,p=0,f=0,m=0,v=0,E=0,M=0,w=0,T=0,L=0,B=0;c.sort(xR);const x=d===!0?Math.PI:1;for(let k=0,z=c.length;k<z;k++){const D=c[k],G=D.color,F=D.intensity,Z=D.distance,U=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=G.r*F*x,g+=G.g*F*x,_+=G.b*F*x;else if(D.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(D.sh.coefficients[O],F);B++}else if(D.isDirectionalLight){const O=n.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity*x),D.castShadow){const H=D.shadow,X=i.get(D);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,r.directionalShadow[S]=X,r.directionalShadowMap[S]=U,r.directionalShadowMatrix[S]=D.shadow.matrix,E++}r.directional[S]=O,S++}else if(D.isSpotLight){const O=n.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(G).multiplyScalar(F*x),O.distance=Z,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,r.spot[f]=O;const H=D.shadow;if(D.map&&(r.spotLightMap[T]=D.map,T++,H.updateMatrices(D),D.castShadow&&L++),r.spotLightMatrix[f]=H.matrix,D.castShadow){const X=i.get(D);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,r.spotShadow[f]=X,r.spotShadowMap[f]=U,w++}f++}else if(D.isRectAreaLight){const O=n.get(D);O.color.copy(G).multiplyScalar(F),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),r.rectArea[m]=O,m++}else if(D.isPointLight){const O=n.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity*x),O.distance=D.distance,O.decay=D.decay,D.castShadow){const H=D.shadow,X=i.get(D);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,X.shadowCameraNear=H.camera.near,X.shadowCameraFar=H.camera.far,r.pointShadow[p]=X,r.pointShadowMap[p]=U,r.pointShadowMatrix[p]=D.shadow.matrix,M++}r.point[p]=O,p++}else if(D.isHemisphereLight){const O=n.get(D);O.skyColor.copy(D.color).multiplyScalar(F*x),O.groundColor.copy(D.groundColor).multiplyScalar(F*x),r.hemi[v]=O,v++}}m>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=g,r.ambient[2]=_;const A=r.hash;(A.directionalLength!==S||A.pointLength!==p||A.spotLength!==f||A.rectAreaLength!==m||A.hemiLength!==v||A.numDirectionalShadows!==E||A.numPointShadows!==M||A.numSpotShadows!==w||A.numSpotMaps!==T||A.numLightProbes!==B)&&(r.directional.length=S,r.spot.length=f,r.rectArea.length=m,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=w+T-L,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=B,A.directionalLength=S,A.pointLength=p,A.spotLength=f,A.rectAreaLength=m,A.hemiLength=v,A.numDirectionalShadows=E,A.numPointShadows=M,A.numSpotShadows=w,A.numSpotMaps=T,A.numLightProbes=B,r.version=yR++)}function u(c,d){let h=0,g=0,_=0,S=0,p=0;const f=d.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const E=c[m];if(E.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(f),h++}else if(E.isSpotLight){const M=r.spot[_];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(f),_++}else if(E.isRectAreaLight){const M=r.rectArea[S];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(f),a.identity(),s.copy(E.matrixWorld),s.premultiply(f),a.extractRotation(s),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),S++}else if(E.isPointLight){const M=r.point[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(f),g++}else if(E.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(f),p++}}}return{setup:l,setupView:u,state:r}}function iv(t,e){const n=new SR(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function ER(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new iv(t,e),n.set(o,[l])):s>=a.length?(l=new iv(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class wR extends ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=y1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MR extends ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const TR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function AR(t,e,n){let i=new Bh;const r=new Ye,o=new Ye,s=new ft,a=new wR({depthPacking:x1}),l=new MR,u={},c=n.maxTextureSize,d={[rr]:pn,[pn]:rr,[vi]:vi},h=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:TR,fragmentShader:CR}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const _=new si;_.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ni(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fy;let f=this.type;this.render=function(w,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const B=t.getRenderTarget(),x=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Qi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=f!==pi&&this.type===pi,D=f===pi&&this.type!==pi;for(let G=0,F=w.length;G<F;G++){const Z=w[G],U=Z.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const O=U.getFrameExtents();if(r.multiply(O),o.copy(U.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/O.x),r.x=o.x*O.x,U.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/O.y),r.y=o.y*O.y,U.mapSize.y=o.y)),U.map===null||z===!0||D===!0){const X=this.type!==pi?{minFilter:Qt,magFilter:Qt}:{};U.map!==null&&U.map.dispose(),U.map=new Vr(r.x,r.y,X),U.map.texture.name=Z.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const H=U.getViewportCount();for(let X=0;X<H;X++){const Q=U.getViewport(X);s.set(o.x*Q.x,o.y*Q.y,o.x*Q.z,o.y*Q.w),k.viewport(s),U.updateMatrices(Z,X),i=U.getFrustum(),E(T,L,U.camera,Z,this.type)}U.isPointLightShadow!==!0&&this.type===pi&&m(U,L),U.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(B,x,A)};function m(w,T){const L=e.update(S);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Vr(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(T,null,L,h,S,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(T,null,L,g,S,null)}function v(w,T,L,B){let x=null;const A=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)x=A;else if(x=L.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=x.uuid,z=T.uuid;let D=u[k];D===void 0&&(D={},u[k]=D);let G=D[z];G===void 0&&(G=x.clone(),D[z]=G,T.addEventListener("dispose",M)),x=G}if(x.visible=T.visible,x.wireframe=T.wireframe,B===pi?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=t.properties.get(x);k.light=L}return x}function E(w,T,L,B,x){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===pi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const z=e.update(w),D=w.material;if(Array.isArray(D)){const G=z.groups;for(let F=0,Z=G.length;F<Z;F++){const U=G[F],O=D[U.materialIndex];if(O&&O.visible){const H=v(w,O,B,x);w.onBeforeShadow(t,w,T,L,z,H,U),t.renderBufferDirect(L,null,z,H,w,U),w.onAfterShadow(t,w,T,L,z,H,U)}}}else if(D.visible){const G=v(w,D,B,x);w.onBeforeShadow(t,w,T,L,z,G,null),t.renderBufferDirect(L,null,z,G,w,null),w.onAfterShadow(t,w,T,L,z,G,null)}}const k=w.children;for(let z=0,D=k.length;z<D;z++)E(k[z],T,L,B,x)}function M(w){w.target.removeEventListener("dispose",M);for(const L in u){const B=u[L],x=w.target.uuid;x in B&&(B[x].dispose(),delete B[x])}}}function bR(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const ae=new ft;let le=null;const we=new ft(0,0,0,0);return{setMask:function(Pe){le!==Pe&&!N&&(t.colorMask(Pe,Pe,Pe,Pe),le=Pe)},setLocked:function(Pe){N=Pe},setClear:function(Pe,tt,st,Ct,Kt){Kt===!0&&(Pe*=Ct,tt*=Ct,st*=Ct),ae.set(Pe,tt,st,Ct),we.equals(ae)===!1&&(t.clearColor(Pe,tt,st,Ct),we.copy(ae))},reset:function(){N=!1,le=null,we.set(-1,0,0,0)}}}function o(){let N=!1,ae=null,le=null,we=null;return{setTest:function(Pe){Pe?ve(t.DEPTH_TEST):ze(t.DEPTH_TEST)},setMask:function(Pe){ae!==Pe&&!N&&(t.depthMask(Pe),ae=Pe)},setFunc:function(Pe){if(le!==Pe){switch(Pe){case KM:t.depthFunc(t.NEVER);break;case ZM:t.depthFunc(t.ALWAYS);break;case JM:t.depthFunc(t.LESS);break;case au:t.depthFunc(t.LEQUAL);break;case QM:t.depthFunc(t.EQUAL);break;case e1:t.depthFunc(t.GEQUAL);break;case t1:t.depthFunc(t.GREATER);break;case n1:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=Pe}},setLocked:function(Pe){N=Pe},setClear:function(Pe){we!==Pe&&(t.clearDepth(Pe),we=Pe)},reset:function(){N=!1,ae=null,le=null,we=null}}}function s(){let N=!1,ae=null,le=null,we=null,Pe=null,tt=null,st=null,Ct=null,Kt=null;return{setTest:function(Te){N||(Te?ve(t.STENCIL_TEST):ze(t.STENCIL_TEST))},setMask:function(Te){ae!==Te&&!N&&(t.stencilMask(Te),ae=Te)},setFunc:function(Te,Ue,vt){(le!==Te||we!==Ue||Pe!==vt)&&(t.stencilFunc(Te,Ue,vt),le=Te,we=Ue,Pe=vt)},setOp:function(Te,Ue,vt){(tt!==Te||st!==Ue||Ct!==vt)&&(t.stencilOp(Te,Ue,vt),tt=Te,st=Ue,Ct=vt)},setLocked:function(Te){N=Te},setClear:function(Te){Kt!==Te&&(t.clearStencil(Te),Kt=Te)},reset:function(){N=!1,ae=null,le=null,we=null,Pe=null,tt=null,st=null,Ct=null,Kt=null}}}const a=new r,l=new o,u=new s,c=new WeakMap,d=new WeakMap;let h={},g={},_=new WeakMap,S=[],p=null,f=!1,m=null,v=null,E=null,M=null,w=null,T=null,L=null,B=new Ze(0,0,0),x=0,A=!1,k=null,z=null,D=null,G=null,F=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,O=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(H)[1]),U=O>=1):H.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),U=O>=2);let X=null,Q={};const ge=t.getParameter(t.SCISSOR_BOX),j=t.getParameter(t.VIEWPORT),K=new ft().fromArray(ge),ne=new ft().fromArray(j);function de(N,ae,le,we){const Pe=new Uint8Array(4),tt=t.createTexture();t.bindTexture(N,tt),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let st=0;st<le;st++)i&&(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)?t.texImage3D(ae,0,t.RGBA,1,1,we,0,t.RGBA,t.UNSIGNED_BYTE,Pe):t.texImage2D(ae+st,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Pe);return tt}const ye={};ye[t.TEXTURE_2D]=de(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=de(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ye[t.TEXTURE_2D_ARRAY]=de(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=de(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ve(t.DEPTH_TEST),l.setFunc(au),Me(!1),P(Fm),ve(t.CULL_FACE),xe(Qi);function ve(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function ze(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function be(N,ae){return g[N]!==ae?(t.bindFramebuffer(N,ae),g[N]=ae,i&&(N===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=ae),N===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=ae)),!0):!1}function I(N,ae){let le=S,we=!1;if(N)if(le=_.get(ae),le===void 0&&(le=[],_.set(ae,le)),N.isWebGLMultipleRenderTargets){const Pe=N.texture;if(le.length!==Pe.length||le[0]!==t.COLOR_ATTACHMENT0){for(let tt=0,st=Pe.length;tt<st;tt++)le[tt]=t.COLOR_ATTACHMENT0+tt;le.length=Pe.length,we=!0}}else le[0]!==t.COLOR_ATTACHMENT0&&(le[0]=t.COLOR_ATTACHMENT0,we=!0);else le[0]!==t.BACK&&(le[0]=t.BACK,we=!0);we&&(n.isWebGL2?t.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function nt(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const _e={[Mr]:t.FUNC_ADD,[UM]:t.FUNC_SUBTRACT,[FM]:t.FUNC_REVERSE_SUBTRACT};if(i)_e[zm]=t.MIN,_e[Vm]=t.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(_e[zm]=N.MIN_EXT,_e[Vm]=N.MAX_EXT)}const Ce={[OM]:t.ZERO,[kM]:t.ONE,[BM]:t.SRC_COLOR,[cf]:t.SRC_ALPHA,[jM]:t.SRC_ALPHA_SATURATE,[GM]:t.DST_COLOR,[VM]:t.DST_ALPHA,[zM]:t.ONE_MINUS_SRC_COLOR,[df]:t.ONE_MINUS_SRC_ALPHA,[WM]:t.ONE_MINUS_DST_COLOR,[HM]:t.ONE_MINUS_DST_ALPHA,[$M]:t.CONSTANT_COLOR,[XM]:t.ONE_MINUS_CONSTANT_COLOR,[YM]:t.CONSTANT_ALPHA,[qM]:t.ONE_MINUS_CONSTANT_ALPHA};function xe(N,ae,le,we,Pe,tt,st,Ct,Kt,Te){if(N===Qi){f===!0&&(ze(t.BLEND),f=!1);return}if(f===!1&&(ve(t.BLEND),f=!0),N!==IM){if(N!==m||Te!==A){if((v!==Mr||w!==Mr)&&(t.blendEquation(t.FUNC_ADD),v=Mr,w=Mr),Te)switch(N){case Uo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Om:t.blendFunc(t.ONE,t.ONE);break;case km:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Uo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Om:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case km:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,M=null,T=null,L=null,B.set(0,0,0),x=0,m=N,A=Te}return}Pe=Pe||ae,tt=tt||le,st=st||we,(ae!==v||Pe!==w)&&(t.blendEquationSeparate(_e[ae],_e[Pe]),v=ae,w=Pe),(le!==E||we!==M||tt!==T||st!==L)&&(t.blendFuncSeparate(Ce[le],Ce[we],Ce[tt],Ce[st]),E=le,M=we,T=tt,L=st),(Ct.equals(B)===!1||Kt!==x)&&(t.blendColor(Ct.r,Ct.g,Ct.b,Kt),B.copy(Ct),x=Kt),m=N,A=!1}function Oe(N,ae){N.side===vi?ze(t.CULL_FACE):ve(t.CULL_FACE);let le=N.side===pn;ae&&(le=!le),Me(le),N.blending===Uo&&N.transparent===!1?xe(Qi):xe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const we=N.stencilWrite;u.setTest(we),we&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),$(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ve(t.SAMPLE_ALPHA_TO_COVERAGE):ze(t.SAMPLE_ALPHA_TO_COVERAGE)}function Me(N){k!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),k=N)}function P(N){N!==LM?(ve(t.CULL_FACE),N!==z&&(N===Fm?t.cullFace(t.BACK):N===NM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ze(t.CULL_FACE),z=N}function C(N){N!==D&&(U&&t.lineWidth(N),D=N)}function $(N,ae,le){N?(ve(t.POLYGON_OFFSET_FILL),(G!==ae||F!==le)&&(t.polygonOffset(ae,le),G=ae,F=le)):ze(t.POLYGON_OFFSET_FILL)}function ie(N){N?ve(t.SCISSOR_TEST):ze(t.SCISSOR_TEST)}function ee(N){N===void 0&&(N=t.TEXTURE0+Z-1),X!==N&&(t.activeTexture(N),X=N)}function re(N,ae,le){le===void 0&&(X===null?le=t.TEXTURE0+Z-1:le=X);let we=Q[le];we===void 0&&(we={type:void 0,texture:void 0},Q[le]=we),(we.type!==N||we.texture!==ae)&&(X!==le&&(t.activeTexture(le),X=le),t.bindTexture(N,ae||ye[N]),we.type=N,we.texture=ae)}function he(){const N=Q[X];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ue(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ke(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(N){K.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),K.copy(N))}function Qe(N){ne.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),ne.copy(N))}function et(N,ae){let le=d.get(ae);le===void 0&&(le=new WeakMap,d.set(ae,le));let we=le.get(N);we===void 0&&(we=t.getUniformBlockIndex(ae,N.name),le.set(N,we))}function Ve(N,ae){const we=d.get(ae).get(N);c.get(ae)!==we&&(t.uniformBlockBinding(ae,we,N.__bindingPointIndex),c.set(ae,we))}function it(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},X=null,Q={},g={},_=new WeakMap,S=[],p=null,f=!1,m=null,v=null,E=null,M=null,w=null,T=null,L=null,B=new Ze(0,0,0),x=0,A=!1,k=null,z=null,D=null,G=null,F=null,K.set(0,0,t.canvas.width,t.canvas.height),ne.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ve,disable:ze,bindFramebuffer:be,drawBuffers:I,useProgram:nt,setBlending:xe,setMaterial:Oe,setFlipSided:Me,setCullFace:P,setLineWidth:C,setPolygonOffset:$,setScissorTest:ie,activeTexture:ee,bindTexture:re,unbindTexture:he,compressedTexImage2D:ue,compressedTexImage3D:fe,texImage2D:Ee,texImage3D:se,updateUBOMapping:et,uniformBlockBinding:Ve,texStorage2D:Ie,texStorage3D:Re,texSubImage2D:Se,texSubImage3D:Le,compressedTexSubImage2D:te,compressedTexSubImage3D:Ke,scissor:ke,viewport:Qe,reset:it}}function RR(t,e,n,i,r,o,s){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,C){return g?new OffscreenCanvas(P,C):fu("canvas")}function S(P,C,$,ie){let ee=1;if((P.width>ie||P.height>ie)&&(ee=ie/Math.max(P.width,P.height)),ee<1||C===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const re=C?_f:Math.floor,he=re(ee*P.width),ue=re(ee*P.height);d===void 0&&(d=_(he,ue));const fe=$?_(he,ue):d;return fe.width=he,fe.height=ue,fe.getContext("2d").drawImage(P,0,0,he,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+he+"x"+ue+")."),fe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function p(P){return vg(P.width)&&vg(P.height)}function f(P){return a?!1:P.wrapS!==jn||P.wrapT!==jn||P.minFilter!==Qt&&P.minFilter!==an}function m(P,C){return P.generateMipmaps&&C&&P.minFilter!==Qt&&P.minFilter!==an}function v(P){t.generateMipmap(P)}function E(P,C,$,ie,ee=!1){if(a===!1)return C;if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let re=C;if(C===t.RED&&($===t.FLOAT&&(re=t.R32F),$===t.HALF_FLOAT&&(re=t.R16F),$===t.UNSIGNED_BYTE&&(re=t.R8)),C===t.RED_INTEGER&&($===t.UNSIGNED_BYTE&&(re=t.R8UI),$===t.UNSIGNED_SHORT&&(re=t.R16UI),$===t.UNSIGNED_INT&&(re=t.R32UI),$===t.BYTE&&(re=t.R8I),$===t.SHORT&&(re=t.R16I),$===t.INT&&(re=t.R32I)),C===t.RG&&($===t.FLOAT&&(re=t.RG32F),$===t.HALF_FLOAT&&(re=t.RG16F),$===t.UNSIGNED_BYTE&&(re=t.RG8)),C===t.RGBA){const he=ee?lu:ot.getTransfer(ie);$===t.FLOAT&&(re=t.RGBA32F),$===t.HALF_FLOAT&&(re=t.RGBA16F),$===t.UNSIGNED_BYTE&&(re=he===ut?t.SRGB8_ALPHA8:t.RGBA8),$===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),$===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function M(P,C,$){return m(P,$)===!0||P.isFramebufferTexture&&P.minFilter!==Qt&&P.minFilter!==an?Math.log2(Math.max(C.width,C.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?C.mipmaps.length:1}function w(P){return P===Qt||P===Hm||P===xs?t.NEAREST:t.LINEAR}function T(P){const C=P.target;C.removeEventListener("dispose",T),B(C),C.isVideoTexture&&c.delete(C)}function L(P){const C=P.target;C.removeEventListener("dispose",L),A(C)}function B(P){const C=i.get(P);if(C.__webglInit===void 0)return;const $=P.source,ie=h.get($);if(ie){const ee=ie[C.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&x(P),Object.keys(ie).length===0&&h.delete($)}i.remove(P)}function x(P){const C=i.get(P);t.deleteTexture(C.__webglTexture);const $=P.source,ie=h.get($);delete ie[C.__cacheKey],s.memory.textures--}function A(P){const C=P.texture,$=i.get(P),ie=i.get(C);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),s.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray($.__webglFramebuffer[ee]))for(let re=0;re<$.__webglFramebuffer[ee].length;re++)t.deleteFramebuffer($.__webglFramebuffer[ee][re]);else t.deleteFramebuffer($.__webglFramebuffer[ee]);$.__webglDepthbuffer&&t.deleteRenderbuffer($.__webglDepthbuffer[ee])}else{if(Array.isArray($.__webglFramebuffer))for(let ee=0;ee<$.__webglFramebuffer.length;ee++)t.deleteFramebuffer($.__webglFramebuffer[ee]);else t.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&t.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&t.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let ee=0;ee<$.__webglColorRenderbuffer.length;ee++)$.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer($.__webglColorRenderbuffer[ee]);$.__webglDepthRenderbuffer&&t.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ee=0,re=C.length;ee<re;ee++){const he=i.get(C[ee]);he.__webglTexture&&(t.deleteTexture(he.__webglTexture),s.memory.textures--),i.remove(C[ee])}i.remove(C),i.remove(P)}let k=0;function z(){k=0}function D(){const P=k;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),k+=1,P}function G(P){const C=[];return C.push(P.wrapS),C.push(P.wrapT),C.push(P.wrapR||0),C.push(P.magFilter),C.push(P.minFilter),C.push(P.anisotropy),C.push(P.internalFormat),C.push(P.format),C.push(P.type),C.push(P.generateMipmaps),C.push(P.premultiplyAlpha),C.push(P.flipY),C.push(P.unpackAlignment),C.push(P.colorSpace),C.join()}function F(P,C){const $=i.get(P);if(P.isVideoTexture&&Oe(P),P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){const ie=P.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K($,P,C);return}}n.bindTexture(t.TEXTURE_2D,$.__webglTexture,t.TEXTURE0+C)}function Z(P,C){const $=i.get(P);if(P.version>0&&$.__version!==P.version){K($,P,C);return}n.bindTexture(t.TEXTURE_2D_ARRAY,$.__webglTexture,t.TEXTURE0+C)}function U(P,C){const $=i.get(P);if(P.version>0&&$.__version!==P.version){K($,P,C);return}n.bindTexture(t.TEXTURE_3D,$.__webglTexture,t.TEXTURE0+C)}function O(P,C){const $=i.get(P);if(P.version>0&&$.__version!==P.version){ne($,P,C);return}n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture,t.TEXTURE0+C)}const H={[pf]:t.REPEAT,[jn]:t.CLAMP_TO_EDGE,[mf]:t.MIRRORED_REPEAT},X={[Qt]:t.NEAREST,[Hm]:t.NEAREST_MIPMAP_NEAREST,[xs]:t.NEAREST_MIPMAP_LINEAR,[an]:t.LINEAR,[Ac]:t.LINEAR_MIPMAP_NEAREST,[Rr]:t.LINEAR_MIPMAP_LINEAR},Q={[E1]:t.NEVER,[b1]:t.ALWAYS,[w1]:t.LESS,[wy]:t.LEQUAL,[M1]:t.EQUAL,[A1]:t.GEQUAL,[T1]:t.GREATER,[C1]:t.NOTEQUAL};function ge(P,C,$){if(C.type===_i&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===an||C.magFilter===Ac||C.magFilter===xs||C.magFilter===Rr||C.minFilter===an||C.minFilter===Ac||C.minFilter===xs||C.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),$?(t.texParameteri(P,t.TEXTURE_WRAP_S,H[C.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,H[C.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,H[C.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,X[C.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,X[C.minFilter])):(t.texParameteri(P,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(P,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(C.wrapS!==jn||C.wrapT!==jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(P,t.TEXTURE_MAG_FILTER,w(C.magFilter)),t.texParameteri(P,t.TEXTURE_MIN_FILTER,w(C.minFilter)),C.minFilter!==Qt&&C.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Q[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===Qt||C.minFilter!==xs&&C.minFilter!==Rr||C.type===_i&&e.has("OES_texture_float_linear")===!1||a===!1&&C.type===aa&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||i.get(C).__currentAnisotropy)&&(t.texParameterf(P,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy)}}function j(P,C){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,C.addEventListener("dispose",T));const ie=C.source;let ee=h.get(ie);ee===void 0&&(ee={},h.set(ie,ee));const re=G(C);if(re!==P.__cacheKey){ee[re]===void 0&&(ee[re]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,$=!0),ee[re].usedTimes++;const he=ee[P.__cacheKey];he!==void 0&&(ee[P.__cacheKey].usedTimes--,he.usedTimes===0&&x(C)),P.__cacheKey=re,P.__webglTexture=ee[re].texture}return $}function K(P,C,$){let ie=t.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ie=t.TEXTURE_3D);const ee=j(P,C),re=C.source;n.bindTexture(ie,P.__webglTexture,t.TEXTURE0+$);const he=i.get(re);if(re.version!==he.__version||ee===!0){n.activeTexture(t.TEXTURE0+$);const ue=ot.getPrimaries(ot.workingColorSpace),fe=C.colorSpace===Ln?null:ot.getPrimaries(C.colorSpace),Se=C.colorSpace===Ln||ue===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Le=f(C)&&p(C.image)===!1;let te=S(C.image,Le,!1,r.maxTextureSize);te=Me(C,te);const Ke=p(te)||a,Ie=o.convert(C.format,C.colorSpace);let Re=o.convert(C.type),Ee=E(C.internalFormat,Ie,Re,C.colorSpace,C.isVideoTexture);ge(ie,C,Ke);let se;const ke=C.mipmaps,Qe=a&&C.isVideoTexture!==!0&&Ee!==xy,et=he.__version===void 0||ee===!0,Ve=re.dataReady,it=M(C,te,Ke);if(C.isDepthTexture)Ee=t.DEPTH_COMPONENT,a?C.type===_i?Ee=t.DEPTH_COMPONENT32F:C.type===Gi?Ee=t.DEPTH_COMPONENT24:C.type===Dr?Ee=t.DEPTH24_STENCIL8:Ee=t.DEPTH_COMPONENT16:C.type===_i&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Ir&&Ee===t.DEPTH_COMPONENT&&C.type!==Oh&&C.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Gi,Re=o.convert(C.type)),C.format===Xo&&Ee===t.DEPTH_COMPONENT&&(Ee=t.DEPTH_STENCIL,C.type!==Dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Dr,Re=o.convert(C.type))),et&&(Qe?n.texStorage2D(t.TEXTURE_2D,1,Ee,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Ee,te.width,te.height,0,Ie,Re,null));else if(C.isDataTexture)if(ke.length>0&&Ke){Qe&&et&&n.texStorage2D(t.TEXTURE_2D,it,Ee,ke[0].width,ke[0].height);for(let N=0,ae=ke.length;N<ae;N++)se=ke[N],Qe?Ve&&n.texSubImage2D(t.TEXTURE_2D,N,0,0,se.width,se.height,Ie,Re,se.data):n.texImage2D(t.TEXTURE_2D,N,Ee,se.width,se.height,0,Ie,Re,se.data);C.generateMipmaps=!1}else Qe?(et&&n.texStorage2D(t.TEXTURE_2D,it,Ee,te.width,te.height),Ve&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,te.width,te.height,Ie,Re,te.data)):n.texImage2D(t.TEXTURE_2D,0,Ee,te.width,te.height,0,Ie,Re,te.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Qe&&et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,it,Ee,ke[0].width,ke[0].height,te.depth);for(let N=0,ae=ke.length;N<ae;N++)se=ke[N],C.format!==$n?Ie!==null?Qe?Ve&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,N,0,0,0,se.width,se.height,te.depth,Ie,se.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,N,Ee,se.width,se.height,te.depth,0,se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?Ve&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,N,0,0,0,se.width,se.height,te.depth,Ie,Re,se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,N,Ee,se.width,se.height,te.depth,0,Ie,Re,se.data)}else{Qe&&et&&n.texStorage2D(t.TEXTURE_2D,it,Ee,ke[0].width,ke[0].height);for(let N=0,ae=ke.length;N<ae;N++)se=ke[N],C.format!==$n?Ie!==null?Qe?Ve&&n.compressedTexSubImage2D(t.TEXTURE_2D,N,0,0,se.width,se.height,Ie,se.data):n.compressedTexImage2D(t.TEXTURE_2D,N,Ee,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?Ve&&n.texSubImage2D(t.TEXTURE_2D,N,0,0,se.width,se.height,Ie,Re,se.data):n.texImage2D(t.TEXTURE_2D,N,Ee,se.width,se.height,0,Ie,Re,se.data)}else if(C.isDataArrayTexture)Qe?(et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,it,Ee,te.width,te.height,te.depth),Ve&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Ie,Re,te.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,te.width,te.height,te.depth,0,Ie,Re,te.data);else if(C.isData3DTexture)Qe?(et&&n.texStorage3D(t.TEXTURE_3D,it,Ee,te.width,te.height,te.depth),Ve&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Ie,Re,te.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,te.width,te.height,te.depth,0,Ie,Re,te.data);else if(C.isFramebufferTexture){if(et)if(Qe)n.texStorage2D(t.TEXTURE_2D,it,Ee,te.width,te.height);else{let N=te.width,ae=te.height;for(let le=0;le<it;le++)n.texImage2D(t.TEXTURE_2D,le,Ee,N,ae,0,Ie,Re,null),N>>=1,ae>>=1}}else if(ke.length>0&&Ke){Qe&&et&&n.texStorage2D(t.TEXTURE_2D,it,Ee,ke[0].width,ke[0].height);for(let N=0,ae=ke.length;N<ae;N++)se=ke[N],Qe?Ve&&n.texSubImage2D(t.TEXTURE_2D,N,0,0,Ie,Re,se):n.texImage2D(t.TEXTURE_2D,N,Ee,Ie,Re,se);C.generateMipmaps=!1}else Qe?(et&&n.texStorage2D(t.TEXTURE_2D,it,Ee,te.width,te.height),Ve&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ie,Re,te)):n.texImage2D(t.TEXTURE_2D,0,Ee,Ie,Re,te);m(C,Ke)&&v(ie),he.__version=re.version,C.onUpdate&&C.onUpdate(C)}P.__version=C.version}function ne(P,C,$){if(C.image.length!==6)return;const ie=j(P,C),ee=C.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+$);const re=i.get(ee);if(ee.version!==re.__version||ie===!0){n.activeTexture(t.TEXTURE0+$);const he=ot.getPrimaries(ot.workingColorSpace),ue=C.colorSpace===Ln?null:ot.getPrimaries(C.colorSpace),fe=C.colorSpace===Ln||he===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Se=C.isCompressedTexture||C.image[0].isCompressedTexture,Le=C.image[0]&&C.image[0].isDataTexture,te=[];for(let N=0;N<6;N++)!Se&&!Le?te[N]=S(C.image[N],!1,!0,r.maxCubemapSize):te[N]=Le?C.image[N].image:C.image[N],te[N]=Me(C,te[N]);const Ke=te[0],Ie=p(Ke)||a,Re=o.convert(C.format,C.colorSpace),Ee=o.convert(C.type),se=E(C.internalFormat,Re,Ee,C.colorSpace),ke=a&&C.isVideoTexture!==!0,Qe=re.__version===void 0||ie===!0,et=ee.dataReady;let Ve=M(C,Ke,Ie);ge(t.TEXTURE_CUBE_MAP,C,Ie);let it;if(Se){ke&&Qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ve,se,Ke.width,Ke.height);for(let N=0;N<6;N++){it=te[N].mipmaps;for(let ae=0;ae<it.length;ae++){const le=it[ae];C.format!==$n?Re!==null?ke?et&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,ae,0,0,le.width,le.height,Re,le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,ae,se,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?et&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,ae,0,0,le.width,le.height,Re,Ee,le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,ae,se,le.width,le.height,0,Re,Ee,le.data)}}}else{it=C.mipmaps,ke&&Qe&&(it.length>0&&Ve++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Ve,se,te[0].width,te[0].height));for(let N=0;N<6;N++)if(Le){ke?et&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,te[N].width,te[N].height,Re,Ee,te[N].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,se,te[N].width,te[N].height,0,Re,Ee,te[N].data);for(let ae=0;ae<it.length;ae++){const we=it[ae].image[N].image;ke?et&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,ae+1,0,0,we.width,we.height,Re,Ee,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,ae+1,se,we.width,we.height,0,Re,Ee,we.data)}}else{ke?et&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,Re,Ee,te[N]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,se,Re,Ee,te[N]);for(let ae=0;ae<it.length;ae++){const le=it[ae];ke?et&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,ae+1,0,0,Re,Ee,le.image[N]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,ae+1,se,Re,Ee,le.image[N])}}}m(C,Ie)&&v(t.TEXTURE_CUBE_MAP),re.__version=ee.version,C.onUpdate&&C.onUpdate(C)}P.__version=C.version}function de(P,C,$,ie,ee,re){const he=o.convert($.format,$.colorSpace),ue=o.convert($.type),fe=E($.internalFormat,he,ue,$.colorSpace);if(!i.get(C).__hasExternalTextures){const Le=Math.max(1,C.width>>re),te=Math.max(1,C.height>>re);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,re,fe,Le,te,C.depth,0,he,ue,null):n.texImage2D(ee,re,fe,Le,te,0,he,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),xe(C)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,i.get($).__webglTexture,0,Ce(C)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,i.get($).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ye(P,C,$){if(t.bindRenderbuffer(t.RENDERBUFFER,P),C.depthBuffer&&!C.stencilBuffer){let ie=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if($||xe(C)){const ee=C.depthTexture;ee&&ee.isDepthTexture&&(ee.type===_i?ie=t.DEPTH_COMPONENT32F:ee.type===Gi&&(ie=t.DEPTH_COMPONENT24));const re=Ce(C);xe(C)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,ie,C.width,C.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,re,ie,C.width,C.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,C.width,C.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,P)}else if(C.depthBuffer&&C.stencilBuffer){const ie=Ce(C);$&&xe(C)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,C.width,C.height):xe(C)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,C.width,C.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,P)}else{const ie=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ee=0;ee<ie.length;ee++){const re=ie[ee],he=o.convert(re.format,re.colorSpace),ue=o.convert(re.type),fe=E(re.internalFormat,he,ue,re.colorSpace),Se=Ce(C);$&&xe(C)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,fe,C.width,C.height):xe(C)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Se,fe,C.width,C.height):t.renderbufferStorage(t.RENDERBUFFER,fe,C.width,C.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ve(P,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),F(C.depthTexture,0);const ie=i.get(C.depthTexture).__webglTexture,ee=Ce(C);if(C.depthTexture.format===Ir)xe(C)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(C.depthTexture.format===Xo)xe(C)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ze(P){const C=i.get(P),$=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!C.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");ve(C.__webglFramebuffer,P)}else if($){C.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,C.__webglFramebuffer[ie]),C.__webglDepthbuffer[ie]=t.createRenderbuffer(),ye(C.__webglDepthbuffer[ie],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=t.createRenderbuffer(),ye(C.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(P,C,$){const ie=i.get(P);C!==void 0&&de(ie.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),$!==void 0&&ze(P)}function I(P){const C=P.texture,$=i.get(P),ie=i.get(C);P.addEventListener("dispose",L),P.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=C.version,s.memory.textures++);const ee=P.isWebGLCubeRenderTarget===!0,re=P.isWebGLMultipleRenderTargets===!0,he=p(P)||a;if(ee){$.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer[ue]=[];for(let fe=0;fe<C.mipmaps.length;fe++)$.__webglFramebuffer[ue][fe]=t.createFramebuffer()}else $.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(a&&C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer=[];for(let ue=0;ue<C.mipmaps.length;ue++)$.__webglFramebuffer[ue]=t.createFramebuffer()}else $.__webglFramebuffer=t.createFramebuffer();if(re)if(r.drawBuffers){const ue=P.texture;for(let fe=0,Se=ue.length;fe<Se;fe++){const Le=i.get(ue[fe]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&xe(P)===!1){const ue=re?C:[C];$.__webglMultisampledFramebuffer=t.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let fe=0;fe<ue.length;fe++){const Se=ue[fe];$.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,$.__webglColorRenderbuffer[fe]);const Le=o.convert(Se.format,Se.colorSpace),te=o.convert(Se.type),Ke=E(Se.internalFormat,Le,te,Se.colorSpace,P.isXRRenderTarget===!0),Ie=Ce(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,Ke,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,$.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=t.createRenderbuffer(),ye($.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),ge(t.TEXTURE_CUBE_MAP,C,he);for(let ue=0;ue<6;ue++)if(a&&C.mipmaps&&C.mipmaps.length>0)for(let fe=0;fe<C.mipmaps.length;fe++)de($.__webglFramebuffer[ue][fe],P,C,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,fe);else de($.__webglFramebuffer[ue],P,C,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(C,he)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){const ue=P.texture;for(let fe=0,Se=ue.length;fe<Se;fe++){const Le=ue[fe],te=i.get(Le);n.bindTexture(t.TEXTURE_2D,te.__webglTexture),ge(t.TEXTURE_2D,Le,he),de($.__webglFramebuffer,P,Le,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(Le,he)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?ue=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ue,ie.__webglTexture),ge(ue,C,he),a&&C.mipmaps&&C.mipmaps.length>0)for(let fe=0;fe<C.mipmaps.length;fe++)de($.__webglFramebuffer[fe],P,C,t.COLOR_ATTACHMENT0,ue,fe);else de($.__webglFramebuffer,P,C,t.COLOR_ATTACHMENT0,ue,0);m(C,he)&&v(ue),n.unbindTexture()}P.depthBuffer&&ze(P)}function nt(P){const C=p(P)||a,$=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ie=0,ee=$.length;ie<ee;ie++){const re=$[ie];if(m(re,C)){const he=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ue=i.get(re).__webglTexture;n.bindTexture(he,ue),v(he),n.unbindTexture()}}}function _e(P){if(a&&P.samples>0&&xe(P)===!1){const C=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],$=P.width,ie=P.height;let ee=t.COLOR_BUFFER_BIT;const re=[],he=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(P),fe=P.isWebGLMultipleRenderTargets===!0;if(fe)for(let Se=0;Se<C.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Se=0;Se<C.length;Se++){re.push(t.COLOR_ATTACHMENT0+Se),P.depthBuffer&&re.push(he);const Le=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Le===!1&&(P.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),fe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[Se]),Le===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[he]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[he])),fe){const te=i.get(C[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,$,ie,0,0,$,ie,ee,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let Se=0;Se<C.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,ue.__webglColorRenderbuffer[Se]);const Le=i.get(C[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,Le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Ce(P){return Math.min(r.maxSamples,P.samples)}function xe(P){const C=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Oe(P){const C=s.render.frame;c.get(P)!==C&&(c.set(P,C),P.update())}function Me(P,C){const $=P.colorSpace,ie=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===gf||$!==Ai&&$!==Ln&&(ot.getTransfer($)===ut?a===!1?e.has("EXT_sRGB")===!0&&ie===$n?(P.format=gf,P.minFilter=an,P.generateMipmaps=!1):C=Ty.sRGBToLinear(C):(ie!==$n||ee!==tr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),C}this.allocateTextureUnit=D,this.resetTextureUnits=z,this.setTexture2D=F,this.setTexture2DArray=Z,this.setTexture3D=U,this.setTextureCube=O,this.rebindTextures=be,this.setupRenderTarget=I,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=de,this.useMultisampledRTT=xe}function PR(t,e,n){const i=n.isWebGL2;function r(o,s=Ln){let a;const l=ot.getTransfer(s);if(o===tr)return t.UNSIGNED_BYTE;if(o===my)return t.UNSIGNED_SHORT_4_4_4_4;if(o===gy)return t.UNSIGNED_SHORT_5_5_5_1;if(o===d1)return t.BYTE;if(o===f1)return t.SHORT;if(o===Oh)return t.UNSIGNED_SHORT;if(o===py)return t.INT;if(o===Gi)return t.UNSIGNED_INT;if(o===_i)return t.FLOAT;if(o===aa)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===h1)return t.ALPHA;if(o===$n)return t.RGBA;if(o===p1)return t.LUMINANCE;if(o===m1)return t.LUMINANCE_ALPHA;if(o===Ir)return t.DEPTH_COMPONENT;if(o===Xo)return t.DEPTH_STENCIL;if(o===gf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===g1)return t.RED;if(o===vy)return t.RED_INTEGER;if(o===v1)return t.RG;if(o===_y)return t.RG_INTEGER;if(o===yy)return t.RGBA_INTEGER;if(o===bc||o===Rc||o===Pc||o===Lc)if(l===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===bc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===bc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Rc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Pc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Lc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Gm||o===Wm||o===jm||o===$m)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Gm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Wm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===jm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===$m)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===xy)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Xm||o===Ym)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Xm)return l===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Ym)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===qm||o===Km||o===Zm||o===Jm||o===Qm||o===eg||o===tg||o===ng||o===ig||o===rg||o===og||o===sg||o===ag||o===lg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===qm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Km)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Zm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Jm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Qm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===eg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===tg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===ng)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===ig)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===rg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===og)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===sg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===ag)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===lg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Nc||o===ug||o===cg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Nc)return l===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===ug)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===cg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===_1||o===dg||o===fg||o===hg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Nc)return a.COMPRESSED_RED_RGTC1_EXT;if(o===dg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===fg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===hg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Dr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class LR extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ns extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NR={type:"move"};class id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const S of e.hand.values()){const p=n.getJointPose(S,i),f=this._getHandJoint(u,S);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),g=.02,_=.005;u.inputState.pinching&&h>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(NR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ns;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const DR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class UR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new mn,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new or({extensions:{fragDepth:!0},vertexShader:DR,fragmentShader:IR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ni(new ku(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class FR extends es{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,g=null,_=null;const S=new UR,p=n.getContextAttributes();let f=null,m=null;const v=[],E=[],M=new Ye;let w=null;const T=new Sn;T.layers.enable(1),T.viewport=new ft;const L=new Sn;L.layers.enable(2),L.viewport=new ft;const B=[T,L],x=new LR;x.layers.enable(1),x.layers.enable(2);let A=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let K=v[j];return K===void 0&&(K=new id,v[j]=K),K.getTargetRaySpace()},this.getControllerGrip=function(j){let K=v[j];return K===void 0&&(K=new id,v[j]=K),K.getGripSpace()},this.getHand=function(j){let K=v[j];return K===void 0&&(K=new id,v[j]=K),K.getHandSpace()};function z(j){const K=E.indexOf(j.inputSource);if(K===-1)return;const ne=v[K];ne!==void 0&&(ne.update(j.inputSource,j.frame,u||s),ne.dispatchEvent({type:j.type,data:j.inputSource}))}function D(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",G);for(let j=0;j<v.length;j++){const K=E[j];K!==null&&(E[j]=null,v[j].disconnect(K))}A=null,k=null,S.reset(),e.setRenderTarget(f),g=null,h=null,d=null,r=null,m=null,ge.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",D),r.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};g=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),m=new Vr(g.framebufferWidth,g.framebufferHeight,{format:$n,type:tr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let K=null,ne=null,de=null;p.depth&&(de=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=p.stencil?Xo:Ir,ne=p.stencil?Dr:Gi);const ye={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:o};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(ye),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),m=new Vr(h.textureWidth,h.textureHeight,{format:$n,type:tr,depthTexture:new ky(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const ve=e.properties.get(m);ve.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),ge.setContext(r),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(j){for(let K=0;K<j.removed.length;K++){const ne=j.removed[K],de=E.indexOf(ne);de>=0&&(E[de]=null,v[de].disconnect(ne))}for(let K=0;K<j.added.length;K++){const ne=j.added[K];let de=E.indexOf(ne);if(de===-1){for(let ve=0;ve<v.length;ve++)if(ve>=E.length){E.push(ne),de=ve;break}else if(E[ve]===null){E[ve]=ne,de=ve;break}if(de===-1)break}const ye=v[de];ye&&ye.connect(ne)}}const F=new V,Z=new V;function U(j,K,ne){F.setFromMatrixPosition(K.matrixWorld),Z.setFromMatrixPosition(ne.matrixWorld);const de=F.distanceTo(Z),ye=K.projectionMatrix.elements,ve=ne.projectionMatrix.elements,ze=ye[14]/(ye[10]-1),be=ye[14]/(ye[10]+1),I=(ye[9]+1)/ye[5],nt=(ye[9]-1)/ye[5],_e=(ye[8]-1)/ye[0],Ce=(ve[8]+1)/ve[0],xe=ze*_e,Oe=ze*Ce,Me=de/(-_e+Ce),P=Me*-_e;K.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(P),j.translateZ(Me),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const C=ze+Me,$=be+Me,ie=xe-P,ee=Oe+(de-P),re=I*be/$*C,he=nt*be/$*C;j.projectionMatrix.makePerspective(ie,ee,re,he,C,$),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function O(j,K){K===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(K.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;S.texture!==null&&(j.near=S.depthNear,j.far=S.depthFar),x.near=L.near=T.near=j.near,x.far=L.far=T.far=j.far,(A!==x.near||k!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,k=x.far,T.near=A,T.far=k,L.near=A,L.far=k,T.updateProjectionMatrix(),L.updateProjectionMatrix(),j.updateProjectionMatrix());const K=j.parent,ne=x.cameras;O(x,K);for(let de=0;de<ne.length;de++)O(ne[de],K);ne.length===2?U(x,T,L):x.projectionMatrix.copy(T.projectionMatrix),H(j,x,K)};function H(j,K,ne){ne===null?j.matrix.copy(K.matrixWorld):(j.matrix.copy(ne.matrixWorld),j.matrix.invert(),j.matrix.multiply(K.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(K.projectionMatrix),j.projectionMatrixInverse.copy(K.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=vf*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=j)},this.hasDepthSensing=function(){return S.texture!==null};let X=null;function Q(j,K){if(c=K.getViewerPose(u||s),_=K,c!==null){const ne=c.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let de=!1;ne.length!==x.cameras.length&&(x.cameras.length=0,de=!0);for(let ve=0;ve<ne.length;ve++){const ze=ne[ve];let be=null;if(g!==null)be=g.getViewport(ze);else{const nt=d.getViewSubImage(h,ze);be=nt.viewport,ve===0&&(e.setRenderTargetTextures(m,nt.colorTexture,h.ignoreDepthValues?void 0:nt.depthStencilTexture),e.setRenderTarget(m))}let I=B[ve];I===void 0&&(I=new Sn,I.layers.enable(ve),I.viewport=new ft,B[ve]=I),I.matrix.fromArray(ze.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(ze.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(be.x,be.y,be.width,be.height),ve===0&&(x.matrix.copy(I.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),de===!0&&x.cameras.push(I)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const ve=d.getDepthInformation(ne[0]);ve&&ve.isValid&&ve.texture&&S.init(e,ve,r.renderState)}}for(let ne=0;ne<v.length;ne++){const de=E[ne],ye=v[ne];de!==null&&ye!==void 0&&ye.update(de,K,u||s)}S.render(e,x),X&&X(j,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const ge=new Oy;ge.setAnimationLoop(Q),this.setAnimationLoop=function(j){X=j},this.dispose=function(){}}}function OR(t,e){function n(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Iy(t)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,m,v,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(p,f):f.isMeshToonMaterial?(o(p,f),d(p,f)):f.isMeshPhongMaterial?(o(p,f),c(p,f)):f.isMeshStandardMaterial?(o(p,f),h(p,f),f.isMeshPhysicalMaterial&&g(p,f,E)):f.isMeshMatcapMaterial?(o(p,f),_(p,f)):f.isMeshDepthMaterial?o(p,f):f.isMeshDistanceMaterial?(o(p,f),S(p,f)):f.isMeshNormalMaterial?o(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,m,v):f.isSpriteMaterial?u(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===pn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===pn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const m=e.get(f).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,n(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,m,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*m,p.scale.value=v*.5,f.map&&(p.map.value=f.map,n(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function g(p,f,m){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===pn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function S(p,f){const m=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(m.matrixWorld),p.nearDistance.value=m.shadow.camera.near,p.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function kR(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,v){const E=v.program;i.uniformBlockBinding(m,E)}function u(m,v){let E=r[m.id];E===void 0&&(_(m),E=c(m),r[m.id]=E,m.addEventListener("dispose",p));const M=v.program;i.updateUBOMapping(m,M);const w=e.render.frame;o[m.id]!==w&&(h(m),o[m.id]=w)}function c(m){const v=d();m.__bindingPointIndex=v;const E=t.createBuffer(),M=m.__size,w=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,M,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,E),E}function d(){for(let m=0;m<a;m++)if(s.indexOf(m)===-1)return s.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const v=r[m.id],E=m.uniforms,M=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let w=0,T=E.length;w<T;w++){const L=Array.isArray(E[w])?E[w]:[E[w]];for(let B=0,x=L.length;B<x;B++){const A=L[B];if(g(A,w,B,M)===!0){const k=A.__offset,z=Array.isArray(A.value)?A.value:[A.value];let D=0;for(let G=0;G<z.length;G++){const F=z[G],Z=S(F);typeof F=="number"||typeof F=="boolean"?(A.__data[0]=F,t.bufferSubData(t.UNIFORM_BUFFER,k+D,A.__data)):F.isMatrix3?(A.__data[0]=F.elements[0],A.__data[1]=F.elements[1],A.__data[2]=F.elements[2],A.__data[3]=0,A.__data[4]=F.elements[3],A.__data[5]=F.elements[4],A.__data[6]=F.elements[5],A.__data[7]=0,A.__data[8]=F.elements[6],A.__data[9]=F.elements[7],A.__data[10]=F.elements[8],A.__data[11]=0):(F.toArray(A.__data,D),D+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,A.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(m,v,E,M){const w=m.value,T=v+"_"+E;if(M[T]===void 0)return typeof w=="number"||typeof w=="boolean"?M[T]=w:M[T]=w.clone(),!0;{const L=M[T];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return M[T]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function _(m){const v=m.uniforms;let E=0;const M=16;for(let T=0,L=v.length;T<L;T++){const B=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,A=B.length;x<A;x++){const k=B[x],z=Array.isArray(k.value)?k.value:[k.value];for(let D=0,G=z.length;D<G;D++){const F=z[D],Z=S(F),U=E%M;U!==0&&M-U<Z.boundary&&(E+=M-U),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=Z.storage}}}const w=E%M;return w>0&&(E+=M-w),m.__size=E,m.__cache={},this}function S(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function p(m){const v=m.target;v.removeEventListener("dispose",p);const E=s.indexOf(v.__bindingPointIndex);s.splice(E,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function f(){for(const m in r)t.deleteBuffer(r[m]);s=[],r={},o={}}return{bind:l,update:u,dispose:f}}class Wy{constructor(e={}){const{canvas:n=P1(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=s;const g=new Uint32Array(4),_=new Int32Array(4);let S=null,p=null;const f=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this._useLegacyLights=!1,this.toneMapping=er,this.toneMappingExposure=1;const v=this;let E=!1,M=0,w=0,T=null,L=-1,B=null;const x=new ft,A=new ft;let k=null;const z=new Ze(0);let D=0,G=n.width,F=n.height,Z=1,U=null,O=null;const H=new ft(0,0,G,F),X=new ft(0,0,G,F);let Q=!1;const ge=new Bh;let j=!1,K=!1,ne=null;const de=new wt,ye=new Ye,ve=new V,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return T===null?Z:1}let I=i;function nt(R,W){for(let q=0;q<R.length;q++){const J=R[q],Y=n.getContext(J,W);if(Y!==null)return Y}return null}try{const R={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Uh}`),n.addEventListener("webglcontextlost",it,!1),n.addEventListener("webglcontextrestored",N,!1),n.addEventListener("webglcontextcreationerror",ae,!1),I===null){const W=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&W.shift(),I=nt(W,R),I===null)throw nt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let _e,Ce,xe,Oe,Me,P,C,$,ie,ee,re,he,ue,fe,Se,Le,te,Ke,Ie,Re,Ee,se,ke,Qe;function et(){_e=new jA(I),Ce=new kA(I,_e,e),_e.init(Ce),se=new PR(I,_e,Ce),xe=new bR(I,_e,Ce),Oe=new YA(I),Me=new pR,P=new RR(I,_e,xe,Me,Ce,se,Oe),C=new zA(v),$=new WA(v),ie=new tT(I,Ce),ke=new FA(I,_e,ie,Ce),ee=new $A(I,ie,Oe,ke),re=new JA(I,ee,ie,Oe),Ie=new ZA(I,Ce,P),Le=new BA(Me),he=new hR(v,C,$,_e,Ce,ke,Le),ue=new OR(v,Me),fe=new gR,Se=new ER(_e,Ce),Ke=new UA(v,C,$,xe,re,h,l),te=new AR(v,re,Ce),Qe=new kR(I,Oe,Ce,xe),Re=new OA(I,_e,Oe,Ce),Ee=new XA(I,_e,Oe,Ce),Oe.programs=he.programs,v.capabilities=Ce,v.extensions=_e,v.properties=Me,v.renderLists=fe,v.shadowMap=te,v.state=xe,v.info=Oe}et();const Ve=new FR(v,I);this.xr=Ve,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=_e.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=_e.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(G,F,!1))},this.getSize=function(R){return R.set(G,F)},this.setSize=function(R,W,q=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=R,F=W,n.width=Math.floor(R*Z),n.height=Math.floor(W*Z),q===!0&&(n.style.width=R+"px",n.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(G*Z,F*Z).floor()},this.setDrawingBufferSize=function(R,W,q){G=R,F=W,Z=q,n.width=Math.floor(R*q),n.height=Math.floor(W*q),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(x)},this.getViewport=function(R){return R.copy(H)},this.setViewport=function(R,W,q,J){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,W,q,J),xe.viewport(x.copy(H).multiplyScalar(Z).floor())},this.getScissor=function(R){return R.copy(X)},this.setScissor=function(R,W,q,J){R.isVector4?X.set(R.x,R.y,R.z,R.w):X.set(R,W,q,J),xe.scissor(A.copy(X).multiplyScalar(Z).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(R){xe.setScissorTest(Q=R)},this.setOpaqueSort=function(R){U=R},this.setTransparentSort=function(R){O=R},this.getClearColor=function(R){return R.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(R=!0,W=!0,q=!0){let J=0;if(R){let Y=!1;if(T!==null){const pe=T.texture.format;Y=pe===yy||pe===_y||pe===vy}if(Y){const pe=T.texture.type,Ae=pe===tr||pe===Gi||pe===Oh||pe===Dr||pe===my||pe===gy,Ne=Ke.getClearColor(),Fe=Ke.getClearAlpha(),je=Ne.r,Be=Ne.g,He=Ne.b;Ae?(g[0]=je,g[1]=Be,g[2]=He,g[3]=Fe,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=je,_[1]=Be,_[2]=He,_[3]=Fe,I.clearBufferiv(I.COLOR,0,_))}else J|=I.COLOR_BUFFER_BIT}W&&(J|=I.DEPTH_BUFFER_BIT),q&&(J|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",it,!1),n.removeEventListener("webglcontextrestored",N,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),fe.dispose(),Se.dispose(),Me.dispose(),C.dispose(),$.dispose(),re.dispose(),ke.dispose(),Qe.dispose(),he.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Kt),Ve.removeEventListener("sessionend",Te),ne&&(ne.dispose(),ne=null),Ue.stop()};function it(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const R=Oe.autoReset,W=te.enabled,q=te.autoUpdate,J=te.needsUpdate,Y=te.type;et(),Oe.autoReset=R,te.enabled=W,te.autoUpdate=q,te.needsUpdate=J,te.type=Y}function ae(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function le(R){const W=R.target;W.removeEventListener("dispose",le),we(W)}function we(R){Pe(R),Me.remove(R)}function Pe(R){const W=Me.get(R).programs;W!==void 0&&(W.forEach(function(q){he.releaseProgram(q)}),R.isShaderMaterial&&he.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,q,J,Y,pe){W===null&&(W=ze);const Ae=Y.isMesh&&Y.matrixWorld.determinant()<0,Ne=Yx(R,W,q,J,Y);xe.setMaterial(J,Ae);let Fe=q.index,je=1;if(J.wireframe===!0){if(Fe=ee.getWireframeAttribute(q),Fe===void 0)return;je=2}const Be=q.drawRange,He=q.attributes.position;let xt=Be.start*je,gn=(Be.start+Be.count)*je;pe!==null&&(xt=Math.max(xt,pe.start*je),gn=Math.min(gn,(pe.start+pe.count)*je)),Fe!==null?(xt=Math.max(xt,0),gn=Math.min(gn,Fe.count)):He!=null&&(xt=Math.max(xt,0),gn=Math.min(gn,He.count));const Dt=gn-xt;if(Dt<0||Dt===1/0)return;ke.setup(Y,J,Ne,q,Fe);let li,ht=Re;if(Fe!==null&&(li=ie.get(Fe),ht=Ee,ht.setIndex(li)),Y.isMesh)J.wireframe===!0?(xe.setLineWidth(J.wireframeLinewidth*be()),ht.setMode(I.LINES)):ht.setMode(I.TRIANGLES);else if(Y.isLine){let $e=J.linewidth;$e===void 0&&($e=1),xe.setLineWidth($e*be()),Y.isLineSegments?ht.setMode(I.LINES):Y.isLineLoop?ht.setMode(I.LINE_LOOP):ht.setMode(I.LINE_STRIP)}else Y.isPoints?ht.setMode(I.POINTS):Y.isSprite&&ht.setMode(I.TRIANGLES);if(Y.isBatchedMesh)ht.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)ht.renderInstances(xt,Dt,Y.count);else if(q.isInstancedBufferGeometry){const $e=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ku=Math.min(q.instanceCount,$e);ht.renderInstances(xt,Dt,Ku)}else ht.render(xt,Dt)};function tt(R,W,q){R.transparent===!0&&R.side===vi&&R.forceSinglePass===!1?(R.side=pn,R.needsUpdate=!0,Ma(R,W,q),R.side=rr,R.needsUpdate=!0,Ma(R,W,q),R.side=vi):Ma(R,W,q)}this.compile=function(R,W,q=null){q===null&&(q=R),p=Se.get(q),p.init(),m.push(p),q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),R!==q&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights(v._useLegacyLights);const J=new Set;return R.traverse(function(Y){const pe=Y.material;if(pe)if(Array.isArray(pe))for(let Ae=0;Ae<pe.length;Ae++){const Ne=pe[Ae];tt(Ne,q,Y),J.add(Ne)}else tt(pe,q,Y),J.add(pe)}),m.pop(),p=null,J},this.compileAsync=function(R,W,q=null){const J=this.compile(R,W,q);return new Promise(Y=>{function pe(){if(J.forEach(function(Ae){Me.get(Ae).currentProgram.isReady()&&J.delete(Ae)}),J.size===0){Y(R);return}setTimeout(pe,10)}_e.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let st=null;function Ct(R){st&&st(R)}function Kt(){Ue.stop()}function Te(){Ue.start()}const Ue=new Oy;Ue.setAnimationLoop(Ct),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(R){st=R,Ve.setAnimationLoop(R),R===null?Ue.stop():Ue.start()},Ve.addEventListener("sessionstart",Kt),Ve.addEventListener("sessionend",Te),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(W),W=Ve.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,W,T),p=Se.get(R,m.length),p.init(),m.push(p),de.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ge.setFromProjectionMatrix(de),K=this.localClippingEnabled,j=Le.init(this.clippingPlanes,K),S=fe.get(R,f.length),S.init(),f.push(S),vt(R,W,0,v.sortObjects),S.finish(),v.sortObjects===!0&&S.sort(U,O),this.info.render.frame++,j===!0&&Le.beginShadows();const q=p.state.shadowsArray;if(te.render(q,R,W),j===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1)&&Ke.render(S,R),p.setupLights(v._useLegacyLights),W.isArrayCamera){const J=W.cameras;for(let Y=0,pe=J.length;Y<pe;Y++){const Ae=J[Y];ai(S,R,Ae,Ae.viewport)}}else ai(S,R,W);T!==null&&(P.updateMultisampleRenderTarget(T),P.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(v,R,W),ke.resetDefaultState(),L=-1,B=null,m.pop(),m.length>0?p=m[m.length-1]:p=null,f.pop(),f.length>0?S=f[f.length-1]:S=null};function vt(R,W,q,J){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ge.intersectsSprite(R)){J&&ve.setFromMatrixPosition(R.matrixWorld).applyMatrix4(de);const Ae=re.update(R),Ne=R.material;Ne.visible&&S.push(R,Ae,Ne,q,ve.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ge.intersectsObject(R))){const Ae=re.update(R),Ne=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ve.copy(R.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ve.copy(Ae.boundingSphere.center)),ve.applyMatrix4(R.matrixWorld).applyMatrix4(de)),Array.isArray(Ne)){const Fe=Ae.groups;for(let je=0,Be=Fe.length;je<Be;je++){const He=Fe[je],xt=Ne[He.materialIndex];xt&&xt.visible&&S.push(R,Ae,xt,q,ve.z,He)}}else Ne.visible&&S.push(R,Ae,Ne,q,ve.z,null)}}const pe=R.children;for(let Ae=0,Ne=pe.length;Ae<Ne;Ae++)vt(pe[Ae],W,q,J)}function ai(R,W,q,J){const Y=R.opaque,pe=R.transmissive,Ae=R.transparent;p.setupLightsView(q),j===!0&&Le.setGlobalState(v.clippingPlanes,q),pe.length>0&&dp(Y,pe,W,q),J&&xe.viewport(x.copy(J)),Y.length>0&&wa(Y,W,q),pe.length>0&&wa(pe,W,q),Ae.length>0&&wa(Ae,W,q),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function dp(R,W,q,J){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const pe=Ce.isWebGL2;ne===null&&(ne=new Vr(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?aa:tr,minFilter:Rr,samples:pe?4:0})),v.getDrawingBufferSize(ye),pe?ne.setSize(ye.x,ye.y):ne.setSize(_f(ye.x),_f(ye.y));const Ae=v.getRenderTarget();v.setRenderTarget(ne),v.getClearColor(z),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Ne=v.toneMapping;v.toneMapping=er,wa(R,q,J),P.updateMultisampleRenderTarget(ne),P.updateRenderTargetMipmap(ne);let Fe=!1;for(let je=0,Be=W.length;je<Be;je++){const He=W[je],xt=He.object,gn=He.geometry,Dt=He.material,li=He.group;if(Dt.side===vi&&xt.layers.test(J.layers)){const ht=Dt.side;Dt.side=pn,Dt.needsUpdate=!0,fp(xt,q,J,gn,Dt,li),Dt.side=ht,Dt.needsUpdate=!0,Fe=!0}}Fe===!0&&(P.updateMultisampleRenderTarget(ne),P.updateRenderTargetMipmap(ne)),v.setRenderTarget(Ae),v.setClearColor(z,D),v.toneMapping=Ne}function wa(R,W,q){const J=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,pe=R.length;Y<pe;Y++){const Ae=R[Y],Ne=Ae.object,Fe=Ae.geometry,je=J===null?Ae.material:J,Be=Ae.group;Ne.layers.test(q.layers)&&fp(Ne,W,q,Fe,je,Be)}}function fp(R,W,q,J,Y,pe){R.onBeforeRender(v,W,q,J,Y,pe),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(v,W,q,J,R,pe),Y.transparent===!0&&Y.side===vi&&Y.forceSinglePass===!1?(Y.side=pn,Y.needsUpdate=!0,v.renderBufferDirect(q,W,J,Y,R,pe),Y.side=rr,Y.needsUpdate=!0,v.renderBufferDirect(q,W,J,Y,R,pe),Y.side=vi):v.renderBufferDirect(q,W,J,Y,R,pe),R.onAfterRender(v,W,q,J,Y,pe)}function Ma(R,W,q){W.isScene!==!0&&(W=ze);const J=Me.get(R),Y=p.state.lights,pe=p.state.shadowsArray,Ae=Y.state.version,Ne=he.getParameters(R,Y.state,pe,W,q),Fe=he.getProgramCacheKey(Ne);let je=J.programs;J.environment=R.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(R.isMeshStandardMaterial?$:C).get(R.envMap||J.environment),je===void 0&&(R.addEventListener("dispose",le),je=new Map,J.programs=je);let Be=je.get(Fe);if(Be!==void 0){if(J.currentProgram===Be&&J.lightsStateVersion===Ae)return pp(R,Ne),Be}else Ne.uniforms=he.getUniforms(R),R.onBuild(q,Ne,v),R.onBeforeCompile(Ne,v),Be=he.acquireProgram(Ne,Fe),je.set(Fe,Be),J.uniforms=Ne.uniforms;const He=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(He.clippingPlanes=Le.uniform),pp(R,Ne),J.needsLights=Kx(R),J.lightsStateVersion=Ae,J.needsLights&&(He.ambientLightColor.value=Y.state.ambient,He.lightProbe.value=Y.state.probe,He.directionalLights.value=Y.state.directional,He.directionalLightShadows.value=Y.state.directionalShadow,He.spotLights.value=Y.state.spot,He.spotLightShadows.value=Y.state.spotShadow,He.rectAreaLights.value=Y.state.rectArea,He.ltc_1.value=Y.state.rectAreaLTC1,He.ltc_2.value=Y.state.rectAreaLTC2,He.pointLights.value=Y.state.point,He.pointLightShadows.value=Y.state.pointShadow,He.hemisphereLights.value=Y.state.hemi,He.directionalShadowMap.value=Y.state.directionalShadowMap,He.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,He.spotShadowMap.value=Y.state.spotShadowMap,He.spotLightMatrix.value=Y.state.spotLightMatrix,He.spotLightMap.value=Y.state.spotLightMap,He.pointShadowMap.value=Y.state.pointShadowMap,He.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=Be,J.uniformsList=null,Be}function hp(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Ll.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function pp(R,W){const q=Me.get(R);q.outputColorSpace=W.outputColorSpace,q.batching=W.batching,q.instancing=W.instancing,q.instancingColor=W.instancingColor,q.skinning=W.skinning,q.morphTargets=W.morphTargets,q.morphNormals=W.morphNormals,q.morphColors=W.morphColors,q.morphTargetsCount=W.morphTargetsCount,q.numClippingPlanes=W.numClippingPlanes,q.numIntersection=W.numClipIntersection,q.vertexAlphas=W.vertexAlphas,q.vertexTangents=W.vertexTangents,q.toneMapping=W.toneMapping}function Yx(R,W,q,J,Y){W.isScene!==!0&&(W=ze),P.resetTextureUnits();const pe=W.fog,Ae=J.isMeshStandardMaterial?W.environment:null,Ne=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ai,Fe=(J.isMeshStandardMaterial?$:C).get(J.envMap||Ae),je=J.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Be=!!q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),He=!!q.morphAttributes.position,xt=!!q.morphAttributes.normal,gn=!!q.morphAttributes.color;let Dt=er;J.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Dt=v.toneMapping);const li=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ht=li!==void 0?li.length:0,$e=Me.get(J),Ku=p.state.lights;if(j===!0&&(K===!0||R!==B)){const An=R===B&&J.id===L;Le.setState(J,R,An)}let _t=!1;J.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Ku.state.version||$e.outputColorSpace!==Ne||Y.isBatchedMesh&&$e.batching===!1||!Y.isBatchedMesh&&$e.batching===!0||Y.isInstancedMesh&&$e.instancing===!1||!Y.isInstancedMesh&&$e.instancing===!0||Y.isSkinnedMesh&&$e.skinning===!1||!Y.isSkinnedMesh&&$e.skinning===!0||Y.isInstancedMesh&&$e.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&$e.instancingColor===!1&&Y.instanceColor!==null||$e.envMap!==Fe||J.fog===!0&&$e.fog!==pe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Le.numPlanes||$e.numIntersection!==Le.numIntersection)||$e.vertexAlphas!==je||$e.vertexTangents!==Be||$e.morphTargets!==He||$e.morphNormals!==xt||$e.morphColors!==gn||$e.toneMapping!==Dt||Ce.isWebGL2===!0&&$e.morphTargetsCount!==ht)&&(_t=!0):(_t=!0,$e.__version=J.version);let hr=$e.currentProgram;_t===!0&&(hr=Ma(J,W,Y));let mp=!1,ds=!1,Zu=!1;const Gt=hr.getUniforms(),pr=$e.uniforms;if(xe.useProgram(hr.program)&&(mp=!0,ds=!0,Zu=!0),J.id!==L&&(L=J.id,ds=!0),mp||B!==R){Gt.setValue(I,"projectionMatrix",R.projectionMatrix),Gt.setValue(I,"viewMatrix",R.matrixWorldInverse);const An=Gt.map.cameraPosition;An!==void 0&&An.setValue(I,ve.setFromMatrixPosition(R.matrixWorld)),Ce.logarithmicDepthBuffer&&Gt.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Gt.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),B!==R&&(B=R,ds=!0,Zu=!0)}if(Y.isSkinnedMesh){Gt.setOptional(I,Y,"bindMatrix"),Gt.setOptional(I,Y,"bindMatrixInverse");const An=Y.skeleton;An&&(Ce.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),Gt.setValue(I,"boneTexture",An.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Gt.setOptional(I,Y,"batchingTexture"),Gt.setValue(I,"batchingTexture",Y._matricesTexture,P));const Ju=q.morphAttributes;if((Ju.position!==void 0||Ju.normal!==void 0||Ju.color!==void 0&&Ce.isWebGL2===!0)&&Ie.update(Y,q,hr),(ds||$e.receiveShadow!==Y.receiveShadow)&&($e.receiveShadow=Y.receiveShadow,Gt.setValue(I,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(pr.envMap.value=Fe,pr.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ds&&(Gt.setValue(I,"toneMappingExposure",v.toneMappingExposure),$e.needsLights&&qx(pr,Zu),pe&&J.fog===!0&&ue.refreshFogUniforms(pr,pe),ue.refreshMaterialUniforms(pr,J,Z,F,ne),Ll.upload(I,hp($e),pr,P)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ll.upload(I,hp($e),pr,P),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Gt.setValue(I,"center",Y.center),Gt.setValue(I,"modelViewMatrix",Y.modelViewMatrix),Gt.setValue(I,"normalMatrix",Y.normalMatrix),Gt.setValue(I,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const An=J.uniformsGroups;for(let Qu=0,Zx=An.length;Qu<Zx;Qu++)if(Ce.isWebGL2){const gp=An[Qu];Qe.update(gp,hr),Qe.bind(gp,hr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hr}function qx(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Kx(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,W,q){Me.get(R.texture).__webglTexture=W,Me.get(R.depthTexture).__webglTexture=q;const J=Me.get(R);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=q===void 0,J.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,W){const q=Me.get(R);q.__webglFramebuffer=W,q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,q=0){T=R,M=W,w=q;let J=!0,Y=null,pe=!1,Ae=!1;if(R){const Fe=Me.get(R);Fe.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(I.FRAMEBUFFER,null),J=!1):Fe.__webglFramebuffer===void 0?P.setupRenderTarget(R):Fe.__hasExternalTextures&&P.rebindTextures(R,Me.get(R.texture).__webglTexture,Me.get(R.depthTexture).__webglTexture);const je=R.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ae=!0);const Be=Me.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Be[W])?Y=Be[W][q]:Y=Be[W],pe=!0):Ce.isWebGL2&&R.samples>0&&P.useMultisampledRTT(R)===!1?Y=Me.get(R).__webglMultisampledFramebuffer:Array.isArray(Be)?Y=Be[q]:Y=Be,x.copy(R.viewport),A.copy(R.scissor),k=R.scissorTest}else x.copy(H).multiplyScalar(Z).floor(),A.copy(X).multiplyScalar(Z).floor(),k=Q;if(xe.bindFramebuffer(I.FRAMEBUFFER,Y)&&Ce.drawBuffers&&J&&xe.drawBuffers(R,Y),xe.viewport(x),xe.scissor(A),xe.setScissorTest(k),pe){const Fe=Me.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Fe.__webglTexture,q)}else if(Ae){const Fe=Me.get(R.texture),je=W||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.__webglTexture,q||0,je)}L=-1},this.readRenderTargetPixels=function(R,W,q,J,Y,pe,Ae){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Me.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne){xe.bindFramebuffer(I.FRAMEBUFFER,Ne);try{const Fe=R.texture,je=Fe.format,Be=Fe.type;if(je!==$n&&se.convert(je)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Be===aa&&(_e.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Be!==tr&&se.convert(Be)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===_i&&(Ce.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-J&&q>=0&&q<=R.height-Y&&I.readPixels(W,q,J,Y,se.convert(je),se.convert(Be),pe)}finally{const Fe=T!==null?Me.get(T).__webglFramebuffer:null;xe.bindFramebuffer(I.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(R,W,q=0){const J=Math.pow(2,-q),Y=Math.floor(W.image.width*J),pe=Math.floor(W.image.height*J);P.setTexture2D(W,0),I.copyTexSubImage2D(I.TEXTURE_2D,q,0,0,R.x,R.y,Y,pe),xe.unbindTexture()},this.copyTextureToTexture=function(R,W,q,J=0){const Y=W.image.width,pe=W.image.height,Ae=se.convert(q.format),Ne=se.convert(q.type);P.setTexture2D(q,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,q.unpackAlignment),W.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,J,R.x,R.y,Y,pe,Ae,Ne,W.image.data):W.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,J,R.x,R.y,W.mipmaps[0].width,W.mipmaps[0].height,Ae,W.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,J,R.x,R.y,Ae,Ne,W.image),J===0&&q.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(R,W,q,J,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=R.max.x-R.min.x+1,Ae=R.max.y-R.min.y+1,Ne=R.max.z-R.min.z+1,Fe=se.convert(J.format),je=se.convert(J.type);let Be;if(J.isData3DTexture)P.setTexture3D(J,0),Be=I.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)P.setTexture2DArray(J,0),Be=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,J.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,J.unpackAlignment);const He=I.getParameter(I.UNPACK_ROW_LENGTH),xt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),gn=I.getParameter(I.UNPACK_SKIP_PIXELS),Dt=I.getParameter(I.UNPACK_SKIP_ROWS),li=I.getParameter(I.UNPACK_SKIP_IMAGES),ht=q.isCompressedTexture?q.mipmaps[Y]:q.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ht.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,R.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,R.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,R.min.z),q.isDataTexture||q.isData3DTexture?I.texSubImage3D(Be,Y,W.x,W.y,W.z,pe,Ae,Ne,Fe,je,ht.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Be,Y,W.x,W.y,W.z,pe,Ae,Ne,Fe,ht.data)):I.texSubImage3D(Be,Y,W.x,W.y,W.z,pe,Ae,Ne,Fe,je,ht),I.pixelStorei(I.UNPACK_ROW_LENGTH,He),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,gn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Dt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,li),Y===0&&J.generateMipmaps&&I.generateMipmap(Be),xe.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),xe.unbindTexture()},this.resetState=function(){M=0,w=0,T=null,xe.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===kh?"display-p3":"srgb",n.unpackColorSpace=ot.workingColorSpace===Uu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Bt?Ur:Sy}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ur?Bt:Ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class BR extends Wy{}BR.prototype.isWebGL1Renderer=!0;let zR=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}};class jy extends ts{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rv=new V,ov=new V,sv=new wt,rd=new by,cl=new Fu;class VR extends tn{constructor(e=new si,n=new jy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)rv.fromBufferAttribute(n,r-1),ov.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=rv.distanceTo(ov);e.setAttribute("lineDistance",new In(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(r),cl.radius+=o,e.ray.intersectsSphere(cl)===!1)return;sv.copy(r).invert(),rd.copy(e.ray).applyMatrix4(sv);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new V,c=new V,d=new V,h=new V,g=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const f=Math.max(0,s.start),m=Math.min(_.count,s.start+s.count);for(let v=f,E=m-1;v<E;v+=g){const M=_.getX(v),w=_.getX(v+1);if(u.fromBufferAttribute(p,M),c.fromBufferAttribute(p,w),rd.distanceSqToSegment(u,c,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(h);L<e.near||L>e.far||n.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,s.start),m=Math.min(p.count,s.start+s.count);for(let v=f,E=m-1;v<E;v+=g){if(u.fromBufferAttribute(p,v),c.fromBufferAttribute(p,v+1),rd.distanceSqToSegment(u,c,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||n.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}const av=new V,lv=new V;class HR extends VR{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)av.fromBufferAttribute(n,r),lv.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+av.distanceTo(lv);e.setAttribute("lineDistance",new In(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vh extends si{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const o=[],s=[];a(r),u(i),c(),this.setAttribute("position",new In(o,3)),this.setAttribute("normal",new In(o.slice(),3)),this.setAttribute("uv",new In(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const v=new V,E=new V,M=new V;for(let w=0;w<n.length;w+=3)g(n[w+0],v),g(n[w+1],E),g(n[w+2],M),l(v,E,M,m)}function l(m,v,E,M){const w=M+1,T=[];for(let L=0;L<=w;L++){T[L]=[];const B=m.clone().lerp(E,L/w),x=v.clone().lerp(E,L/w),A=w-L;for(let k=0;k<=A;k++)k===0&&L===w?T[L][k]=B:T[L][k]=B.clone().lerp(x,k/A)}for(let L=0;L<w;L++)for(let B=0;B<2*(w-L)-1;B++){const x=Math.floor(B/2);B%2===0?(h(T[L][x+1]),h(T[L+1][x]),h(T[L][x])):(h(T[L][x+1]),h(T[L+1][x+1]),h(T[L+1][x]))}}function u(m){const v=new V;for(let E=0;E<o.length;E+=3)v.x=o[E+0],v.y=o[E+1],v.z=o[E+2],v.normalize().multiplyScalar(m),o[E+0]=v.x,o[E+1]=v.y,o[E+2]=v.z}function c(){const m=new V;for(let v=0;v<o.length;v+=3){m.x=o[v+0],m.y=o[v+1],m.z=o[v+2];const E=p(m)/2/Math.PI+.5,M=f(m)/Math.PI+.5;s.push(E,1-M)}_(),d()}function d(){for(let m=0;m<s.length;m+=6){const v=s[m+0],E=s[m+2],M=s[m+4],w=Math.max(v,E,M),T=Math.min(v,E,M);w>.9&&T<.1&&(v<.2&&(s[m+0]+=1),E<.2&&(s[m+2]+=1),M<.2&&(s[m+4]+=1))}}function h(m){o.push(m.x,m.y,m.z)}function g(m,v){const E=m*3;v.x=e[E+0],v.y=e[E+1],v.z=e[E+2]}function _(){const m=new V,v=new V,E=new V,M=new V,w=new Ye,T=new Ye,L=new Ye;for(let B=0,x=0;B<o.length;B+=9,x+=6){m.set(o[B+0],o[B+1],o[B+2]),v.set(o[B+3],o[B+4],o[B+5]),E.set(o[B+6],o[B+7],o[B+8]),w.set(s[x+0],s[x+1]),T.set(s[x+2],s[x+3]),L.set(s[x+4],s[x+5]),M.copy(m).add(v).add(E).divideScalar(3);const A=p(M);S(w,x+0,m,A),S(T,x+2,v,A),S(L,x+4,E,A)}}function S(m,v,E,M){M<0&&m.x===1&&(s[v]=m.x-1),E.x===0&&E.z===0&&(s[v]=M/2/Math.PI+.5)}function p(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vh(e.vertices,e.indices,e.radius,e.details)}}class Hh extends Vh{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,o,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Hh(e.radius,e.detail)}}class GR extends ts{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ey,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $y extends tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const od=new wt,uv=new V,cv=new V;class WR{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bh,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;uv.setFromMatrixPosition(e.matrixWorld),n.position.copy(uv),cv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(cv),n.updateMatrixWorld(),od.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(od),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(od)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const dv=new wt,Cs=new V,sd=new V;class jR extends WR{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Cs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Cs),sd.copy(i.position),sd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(sd),i.updateMatrixWorld(),r.makeTranslation(-Cs.x,-Cs.y,-Cs.z),dv.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dv)}}class $R extends $y{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new jR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class XR extends $y{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uh);const Xy=Math.sqrt(5),YR=(Xy-1)/4,Ot=(5-Xy)/20,dl=t=>Math.floor(t)|0,fl=new Float64Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]);function Yy(t=Math.random){const e=qR(t),n=new Float64Array(e).map(s=>fl[s%32*4]),i=new Float64Array(e).map(s=>fl[s%32*4+1]),r=new Float64Array(e).map(s=>fl[s%32*4+2]),o=new Float64Array(e).map(s=>fl[s%32*4+3]);return function(a,l,u,c){let d,h,g,_,S;const p=(a+l+u+c)*YR,f=dl(a+p),m=dl(l+p),v=dl(u+p),E=dl(c+p),M=(f+m+v+E)*Ot,w=f-M,T=m-M,L=v-M,B=E-M,x=a-w,A=l-T,k=u-L,z=c-B;let D=0,G=0,F=0,Z=0;x>A?D++:G++,x>k?D++:F++,x>z?D++:Z++,A>k?G++:F++,A>z?G++:Z++,k>z?F++:Z++;const U=D>=3?1:0,O=G>=3?1:0,H=F>=3?1:0,X=Z>=3?1:0,Q=D>=2?1:0,ge=G>=2?1:0,j=F>=2?1:0,K=Z>=2?1:0,ne=D>=1?1:0,de=G>=1?1:0,ye=F>=1?1:0,ve=Z>=1?1:0,ze=x-U+Ot,be=A-O+Ot,I=k-H+Ot,nt=z-X+Ot,_e=x-Q+2*Ot,Ce=A-ge+2*Ot,xe=k-j+2*Ot,Oe=z-K+2*Ot,Me=x-ne+3*Ot,P=A-de+3*Ot,C=k-ye+3*Ot,$=z-ve+3*Ot,ie=x-1+4*Ot,ee=A-1+4*Ot,re=k-1+4*Ot,he=z-1+4*Ot,ue=f&255,fe=m&255,Se=v&255,Le=E&255;let te=.6-x*x-A*A-k*k-z*z;if(te<0)d=0;else{const se=ue+e[fe+e[Se+e[Le]]];te*=te,d=te*te*(n[se]*x+i[se]*A+r[se]*k+o[se]*z)}let Ke=.6-ze*ze-be*be-I*I-nt*nt;if(Ke<0)h=0;else{const se=ue+U+e[fe+O+e[Se+H+e[Le+X]]];Ke*=Ke,h=Ke*Ke*(n[se]*ze+i[se]*be+r[se]*I+o[se]*nt)}let Ie=.6-_e*_e-Ce*Ce-xe*xe-Oe*Oe;if(Ie<0)g=0;else{const se=ue+Q+e[fe+ge+e[Se+j+e[Le+K]]];Ie*=Ie,g=Ie*Ie*(n[se]*_e+i[se]*Ce+r[se]*xe+o[se]*Oe)}let Re=.6-Me*Me-P*P-C*C-$*$;if(Re<0)_=0;else{const se=ue+ne+e[fe+de+e[Se+ye+e[Le+ve]]];Re*=Re,_=Re*Re*(n[se]*Me+i[se]*P+r[se]*C+o[se]*$)}let Ee=.6-ie*ie-ee*ee-re*re-he*he;if(Ee<0)S=0;else{const se=ue+1+e[fe+1+e[Se+1+e[Le+1]]];Ee*=Ee,S=Ee*Ee*(n[se]*ie+i[se]*ee+r[se]*re+o[se]*he)}return 27*(d+h+g+_+S)}}function qR(t){const n=new Uint8Array(512);for(let i=0;i<512/2;i++)n[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(t()*(256-i)),o=n[i];n[i]=n[r],n[r]=o}for(let i=256;i<512;i++)n[i]=n[i-256];return n}class KR{constructor(){this.noise4D=Yy(),this.group=new Ns,this.geometry=new si,this.material=new jy({color:8035999,transparent:!0,opacity:.3}),this.init()}init(){const e=[];for(let o=0;o<100;o++){let s=(Math.random()-.5)*100,a=(Math.random()-.5)*100,l=(Math.random()-.5)*100;for(let u=0;u<75;u++){e.push(new V(s,a,l));const c=.015,d=this.noise4D(s*c,a*c,l*c,Date.now()*3e-5);s+=Math.cos(d*Math.PI*2)*.4,a+=Math.sin(d*Math.PI*2)*.4,l+=(Math.cos(d*Math.PI)+Math.sin(d*Math.PI))*.2}}this.geometry.setFromPoints(e);const r=new HR(this.geometry,this.material);this.group.add(r)}update(e){this.group.rotation.x+=1e-4,this.group.rotation.y+=1e-4;const n=this.geometry.attributes.position.array;for(let i=0;i<n.length;i+=3){const r=n[i],o=n[i+1],s=n[i+2],a=.015,l=this.noise4D(r*a,o*a,s*a,e);n[i]+=Math.cos(l*Math.PI*2)*.015,n[i+1]+=Math.sin(l*Math.PI*2)*.015,n[i+2]+=Math.cos(l*Math.PI)*.015}this.geometry.attributes.position.needsUpdate=!0}}class ZR{constructor(){this.spheres=[],this.geometry=new Hh(1,3),this.material=new GR({color:5270655,transparent:!0,opacity:.2,shininess:100,specular:8035999}),this.init()}init(){for(let e=0;e<15;e++){const n=new ni(this.geometry,this.material);n.position.set((Math.random()-.5)*60,(Math.random()-.5)*60,(Math.random()-.5)*60),n.scale.setScalar(Math.random()*2+1),this.spheres.push(n)}}update(e){this.spheres.forEach((n,i)=>{n.position.y+=Math.sin(e+i)*.004,n.rotation.x+=.001,n.rotation.y+=.001})}}class JR{constructor(){this.scene=new zR,this.camera=new Sn(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new Wy({canvas:document.querySelector("#bg"),antialias:!0,alpha:!0}),this.flowField=new KR,this.spheres=new ZR,this.time=0,this.init(),this.setupLights(),this.setupEventListeners()}init(){this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.position.setZ(30),this.scene.add(this.flowField.group),this.spheres.spheres.forEach(e=>this.scene.add(e))}setupLights(){const e=new XR(4210752,.8),n=new $R(8035999,1);n.position.set(10,10,10),this.scene.add(e),this.scene.add(n)}setupEventListeners(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}),document.addEventListener("mousemove",e=>{const n=(e.clientX-window.innerWidth/2)*4e-5,i=(e.clientY-window.innerHeight/2)*4e-5;this.flowField.group.rotation.y+=n,this.flowField.group.rotation.x+=i})}animate(){requestAnimationFrame(()=>this.animate()),this.time+=3e-4,this.flowField.update(this.time),this.spheres.update(this.time),this.renderer.render(this.scene,this.camera)}dispose(){window.removeEventListener("resize",this.handleResize),document.removeEventListener("mousemove",this.handleMouseMove),this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())}),this.renderer.dispose()}}class QR{constructor(){this.init()}init(){document.querySelectorAll(".card").forEach(n=>{n.addEventListener("mousemove",r=>{const o=n.getBoundingClientRect(),s=(r.clientX-o.left)/o.width*100,a=(r.clientY-o.top)/o.height*100;n.style.setProperty("--x",`${s}%`),n.style.setProperty("--y",`${a}%`)}),n.querySelectorAll(".learn-more-content li").forEach((r,o)=>{r.style.transitionDelay=`${o*50}ms`})})}}class eP{constructor(){this.init()}init(){const e=document.querySelectorAll(".section"),n=new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting&&r.target.classList.add("visible")})},{threshold:.1});e.forEach(i=>n.observe(i))}}var tP=Object.defineProperty,qy=(t,e)=>{for(var n in e)tP(t,n,{get:e[n],enumerable:!0,configurable:!0,set:i=>e[n]=()=>i})};if(typeof y.createContext!="function"){const t=['Remotion requires React.createContext, but it is "undefined".','If you are in a React Server Component, turn it into a client component by adding "use client" at the top of the file.',"","Before:",'  import {useCurrentFrame} from "remotion";',"","After:",'  "use client";','  import {useCurrentFrame} from "remotion";'];throw new Error(t.join(`
`))}function fv(){return["NOD","E_EN","V"].join("")}var hv=()=>["e","nv"].join(""),Nt=()=>{const t=typeof window<"u"&&window.remotion_isPlayer,e=typeof window<"u"&&typeof window.process<"u"&&typeof window.process.env<"u"&&(window.process[hv()][fv()]==="test"||window.process[hv()][fv()]==="production"&&typeof window<"u"&&typeof window.remotion_puppeteerTimeout<"u");return{isStudio:typeof window<"u"&&window.remotion_isStudio,isRendering:e,isPlayer:t}},nP=Ge.createElement,Ky=[],Zy=()=>{if(!Nt().isStudio)return;const t=new Proxy(nP,{apply(e,n,i){if(Ky.includes(i[0])){const[r,o,...s]=i,a={...o??{},stack:new Error().stack};return Reflect.apply(e,n,[r,a,...s])}return Reflect.apply(e,n,i)}});Ge.createElement=t},_a=t=>{Ky.push(t),Zy()},Jy=y.createContext(!1),iP=({children:t})=>b.jsx(Jy.Provider,{value:!0,children:t}),Gh=()=>y.useContext(Jy);function Wh(t){return!!t}var hl="4.0.230",rP=()=>{if(typeof globalThis>"u")return;const t=globalThis.remotion_imported||typeof window<"u"&&window.remotion_imported;if(t){if(t===hl)return;throw new TypeError(`🚨 Multiple versions of Remotion detected: ${[hl,typeof t=="string"?t:"an older version"].filter(Wh).join(" and ")}. This will cause things to break in an unexpected way.
Check that all your Remotion packages are on the same version. If your dependencies depend on Remotion, make them peer dependencies. You can also run \`npx remotion versions\` from your terminal to see which versions are mismatching.`)}globalThis.remotion_imported=hl,typeof window<"u"&&(window.remotion_imported=hl)},oP=(t,e)=>{const{style:n,...i}=t,r=y.useMemo(()=>({position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%",height:"100%",display:"flex",flexDirection:"column",...n}),[n]);return b.jsx("div",{ref:e,style:r,...i})},jh=y.forwardRef(oP),nn=y.createContext(null),is=Ge.createContext({registerSequence:()=>{throw new Error("SequenceManagerContext not initialized")},unregisterSequence:()=>{throw new Error("SequenceManagerContext not initialized")},sequences:[]}),ya=Ge.createContext({hidden:{},setHidden:()=>{throw new Error("SequenceVisibilityToggle not initialized")}}),sP=({children:t})=>{const[e,n]=y.useState([]),[i,r]=y.useState({}),o=y.useCallback(u=>{n(c=>[...c,u])},[]),s=y.useCallback(u=>{n(c=>c.filter(d=>d.id!==u))},[]),a=y.useMemo(()=>({registerSequence:o,sequences:e,unregisterSequence:s}),[o,e,s]),l=y.useMemo(()=>({hidden:i,setHidden:r}),[i]);return b.jsx(is.Provider,{value:a,children:b.jsx(ya.Provider,{value:l,children:t})})},rs=y.createContext({getNonce:()=>0,fastRefreshes:0}),$h=()=>{const t=y.useContext(rs),[e,n]=y.useState(()=>t.getNonce()),i=y.useRef(t);return y.useEffect(()=>{i.current!==t&&(i.current=t,n(t.getNonce))},[t]),e},Qy={};qy(Qy,{useTimelineSetFrame:()=>hx,useTimelinePosition:()=>ss,usePlayingState:()=>Kh,persistCurrentFrame:()=>cx,getInitialFrameState:()=>dx,getFrameForComposition:()=>fx,TimelineContext:()=>Kn,SetTimelineContext:()=>os});var dr=y.createContext({compositions:[],registerComposition:()=>{},unregisterComposition:()=>{},registerFolder:()=>{},unregisterFolder:()=>{},setCurrentCompositionMetadata:()=>{},updateCompositionDefaultProps:()=>{},folders:[],currentCompositionMetadata:null,canvasContent:null,setCanvasContent:()=>{}}),zu=y.createContext({props:{},updateProps:()=>{throw new Error("Not implemented")},resetUnsaved:()=>{throw new Error("Not implemented")}}),ex=Ge.createRef(),tx=({children:t})=>{const[e,n]=Ge.useState({}),i=y.useCallback(({defaultProps:s,id:a,newProps:l})=>{n(u=>({...u,[a]:typeof l=="function"?l(u[a]??s):l}))},[]),r=y.useCallback(()=>{n({})},[]);y.useImperativeHandle(ex,()=>({getProps:()=>e,setProps:n}),[e]);const o=y.useMemo(()=>({props:e,updateProps:i,resetUnsaved:r}),[e,r,i]);return b.jsx(zu.Provider,{value:o,children:t})},aP={"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";"},pv={},lP=t=>{pv[t]||(console.warn(t),pv[t]=!0)},uP=t=>{for(const e of Object.keys(aP))if(t.includes(e))return{containsHex:!0,hexCode:e};return{containsHex:!1}},xf=t=>t.startsWith("/")?xf(t.substring(1)):t,cP=t=>{if(typeof window<"u"&&window.remotion_staticBase){if(t.startsWith(window.remotion_staticBase))throw new Error(`The value "${t}" is already prefixed with the static base ${window.remotion_staticBase}. You don't need to call staticFile() on it.`);return`${window.remotion_staticBase}/${xf(t)}`}return`/${xf(t)}`},dP=t=>t.split("/").map(r=>encodeURIComponent(r)).join("/"),fP=t=>{if(t===null)throw new TypeError("null was passed to staticFile()");if(typeof t>"u")throw new TypeError("undefined was passed to staticFile()");if(t.startsWith("http://")||t.startsWith("https://"))throw new TypeError(`staticFile() does not support remote URLs - got "${t}". Instead, pass the URL without wrapping it in staticFile(). See: https://remotion.dev/docs/staticfile-remote-urls`);if(t.startsWith("..")||t.startsWith("./"))throw new TypeError(`staticFile() does not support relative paths - got "${t}". Instead, pass the name of a file that is inside the public/ folder. See: https://remotion.dev/docs/staticfile-relative-paths`);if(t.startsWith("/Users")||t.startsWith("/home")||t.startsWith("/tmp")||t.startsWith("/etc")||t.startsWith("/opt")||t.startsWith("/var")||t.startsWith("C:")||t.startsWith("D:")||t.startsWith("E:"))throw new TypeError(`staticFile() does not support absolute paths - got "${t}". Instead, pass the name of a file that is inside the public/ folder. See: https://remotion.dev/docs/staticfile-relative-paths`);if(t.startsWith("public/"))throw new TypeError(`Do not include the public/ prefix when using staticFile() - got "${t}". See: https://remotion.dev/docs/staticfile-relative-paths`);const e=uP(t);e.containsHex&&lP(`WARNING: You seem to pass an already encoded path (path contains ${e.hexCode}). Since Remotion 4.0, the encoding is done by staticFile() itself. You may want to remove a encodeURIComponent() wrapping.`);const n=dP(t),i=cP(n);return i.startsWith("/")?i:`/${i}`},Sf="remotion-date:",Ef="remotion-file:",hP=({data:t,indent:e,staticBase:n})=>{let i=!1,r=!1,o=!1,s=!1;try{return{serializedString:JSON.stringify(t,function(l,u){const c=this[l];return c instanceof Date?(i=!0,`${Sf}${c.toISOString()}`):c instanceof Map?(o=!0,u):c instanceof Set?(s=!0,u):typeof c=="string"&&n!==null&&c.startsWith(n)?(r=!0,`${Ef}${c.replace(n+"/","")}`):u},e),customDateUsed:i,customFileUsed:r,mapUsed:o,setUsed:s}}catch(a){throw new Error("Could not serialize the passed input props to JSON: "+a.message)}},nx=t=>JSON.parse(t,(e,n)=>typeof n=="string"&&n.startsWith(Sf)?new Date(n.replace(Sf,"")):typeof n=="string"&&n.startsWith(Ef)?fP(n.replace(Ef,"")):n),wr=t=>Nt().isStudio?nx(hP({data:t,indent:2,staticBase:window.remotion_staticBase}).serializedString):t,mv=!1,pP=()=>{mv||(mv=!0,console.warn("Called `getInputProps()` on the server. This function is not available server-side and has returned an empty object."),console.warn("To hide this warning, don't call this function on the server:"),console.warn("  typeof window === 'undefined' ? {} : getInputProps()"))},ix=()=>{if(typeof window>"u")return pP(),{};if(Nt().isPlayer)throw new Error("You cannot call `getInputProps()` from a <Player>. Instead, the props are available as React props from component that you passed as `component` prop.");const t=window.remotion_inputProps;return t?nx(t):{}},gv=["h264","h265","vp8","vp9","mp3","aac","wav","prores","h264-mkv","h264-ts","gif"];function mP(t,e){if(!(typeof t>"u")){if(typeof t!="string")throw new TypeError(`The "defaultCodec" prop ${e} must be a string, but you passed a value of type ${typeof t}.`);if(!gv.includes(t))throw new Error(`The "defaultCodec" prop ${e} must be one of ${gv.join(", ")}, but you passed ${t}.`)}}function hu(t,e,n){if(typeof t!="number")throw new Error(`The "${e}" prop ${n} must be a number, but you passed a value of type ${typeof t}`);if(isNaN(t))throw new TypeError(`The "${e}" prop ${n} must not be NaN, but is NaN.`);if(!Number.isFinite(t))throw new TypeError(`The "${e}" prop ${n} must be finite, but is ${t}.`);if(t%1!==0)throw new TypeError(`The "${e}" prop ${n} must be an integer, but is ${t}.`);if(t<=0)throw new TypeError(`The "${e}" prop ${n} must be positive, but got ${t}.`)}function Xh(t,e){const{allowFloats:n,component:i}=e;if(typeof t>"u")throw new Error(`The "durationInFrames" prop ${i} is missing.`);if(typeof t!="number")throw new Error(`The "durationInFrames" prop ${i} must be a number, but you passed a value of type ${typeof t}`);if(t<=0)throw new TypeError(`The "durationInFrames" prop ${i} must be positive, but got ${t}.`);if(!n&&t%1!==0)throw new TypeError(`The "durationInFrames" prop ${i} must be an integer, but got ${t}.`);if(!Number.isFinite(t))throw new TypeError(`The "durationInFrames" prop ${i} must be finite, but got ${t}.`)}function rx(t,e,n){if(typeof t!="number")throw new Error(`"fps" must be a number, but you passed a value of type ${typeof t} ${e}`);if(!Number.isFinite(t))throw new Error(`"fps" must be a finite, but you passed ${t} ${e}`);if(isNaN(t))throw new Error(`"fps" must not be NaN, but got ${t} ${e}`);if(t<=0)throw new TypeError(`"fps" must be positive, but got ${t} ${e}`)}var vv=({calculated:t,compositionId:e,compositionFps:n,compositionHeight:i,compositionWidth:r,compositionDurationInFrames:o})=>{const s=`calculated by calculateMetadata() for the composition "${e}"`,a=`of the "<Composition />" component with the id "${e}"`,l=(t==null?void 0:t.width)??r??void 0;hu(l,"width",t!=null&&t.width?s:a);const u=(t==null?void 0:t.height)??i??void 0;hu(u,"height",t!=null&&t.height?s:a);const c=(t==null?void 0:t.fps)??n??null;rx(c,t!=null&&t.fps?s:a);const d=(t==null?void 0:t.durationInFrames)??o??null;Xh(d,{allowFloats:!1,component:`of the "<Composition />" component with the id "${e}"`});const h=t==null?void 0:t.defaultCodec;return mP(h,s),{width:l,height:u,fps:c,durationInFrames:d,defaultCodec:h}},ox=({calculateMetadata:t,signal:e,defaultProps:n,originalProps:i,compositionId:r,compositionDurationInFrames:o,compositionFps:s,compositionHeight:a,compositionWidth:l})=>{const u=t?t({defaultProps:n,props:i,abortSignal:e,compositionId:r}):null;if(u!==null&&typeof u=="object"&&"then"in u)return u.then(d=>{const{height:h,width:g,durationInFrames:_,fps:S,defaultCodec:p}=vv({calculated:d,compositionDurationInFrames:o,compositionFps:s,compositionHeight:a,compositionWidth:l,compositionId:r});return{width:g,height:h,fps:S,durationInFrames:_,id:r,defaultProps:wr(n),props:wr(d.props??i),defaultCodec:p??null}});const c=vv({calculated:u,compositionDurationInFrames:o,compositionFps:s,compositionHeight:a,compositionWidth:l,compositionId:r});return u===null?{...c,id:r,defaultProps:wr(n??{}),props:wr(i),defaultCodec:null}:{...c,id:r,defaultProps:wr(n??{}),props:wr(u.props??i),defaultCodec:u.defaultCodec??null}},gP=t=>{try{return{type:"success",result:ox(t)}}catch(e){return{type:"error",error:e}}},Vu=y.createContext(null),sx=y.createRef(),ax=t=>!!t.calculateMetadata,lx="remotion.propsUpdatedExternally",ux=({children:t})=>{const[e,n]=y.useState(null),{compositions:i,canvasContent:r,currentCompositionMetadata:o}=y.useContext(dr),{fastRefreshes:s}=y.useContext(rs),a=y.useMemo(()=>i.find(L=>r&&r.type==="composition"&&r.compositionId===L.id),[r,i]),l=i.find(L=>L.id===e),{props:u}=y.useContext(zu),c=y.useMemo(()=>typeof window>"u"||Nt().isPlayer?{}:ix()??{},[]),[d,h]=y.useState({}),g=y.useMemo(()=>a?u[a.id]??{}:{},[u,a]),_=y.useMemo(()=>l?u[l.id]??{}:{},[u,l]),S=!!o,p=y.useCallback(({calculateMetadata:L,combinedProps:B,compositionDurationInFrames:x,compositionFps:A,compositionHeight:k,compositionId:z,compositionWidth:D,defaultProps:G})=>{const F=new AbortController;if(S)return F;const{signal:Z}=F,U=gP({compositionId:z,calculateMetadata:L,originalProps:B,signal:Z,defaultProps:G,compositionDurationInFrames:x,compositionFps:A,compositionHeight:k,compositionWidth:D});if(U.type==="error")return h(H=>({...H,[z]:{type:"error",error:U.error}})),F;const O=U.result;return typeof O=="object"&&"then"in O?(h(H=>{const X=H[z];return(X==null?void 0:X.type)==="success"||(X==null?void 0:X.type)==="success-and-refreshing"?{...H,[z]:{type:"success-and-refreshing",result:X.result}}:{...H,[z]:{type:"loading"}}}),O.then(H=>{F.signal.aborted||h(X=>({...X,[z]:{type:"success",result:H}}))}).catch(H=>{F.signal.aborted||h(X=>({...X,[z]:{type:"error",error:H}}))})):h(H=>({...H,[z]:{type:"success",result:O}})),F},[S]),f=(r==null?void 0:r.type)==="composition"?r.compositionId:null;y.useImperativeHandle(sx,()=>({setCurrentRenderModalComposition:L=>{n(L)},reloadCurrentlySelectedComposition:()=>{if(!f)return;const L=i.find(k=>k.id===f);if(!L)throw new Error(`Could not find composition with id ${f}`);const B=u[f]??{},x={...L.defaultProps??{},...B??{}},A={...x,...c??{}};p({defaultProps:x,calculateMetadata:L.calculateMetadata,combinedProps:A,compositionDurationInFrames:L.durationInFrames??null,compositionFps:L.fps??null,compositionHeight:L.height??null,compositionWidth:L.width??null,compositionId:L.id})}}),[u,i,f,p,c]);const m=(a==null?void 0:a.id)===(l==null?void 0:l.id),v=y.useMemo(()=>({...(a==null?void 0:a.defaultProps)??{},...g??{}}),[a==null?void 0:a.defaultProps,g]),E=y.useMemo(()=>({...v,...c??{}}),[v,c]),M=a&&ax(a),w=typeof window<"u"&&window.remotion_ignoreFastRefreshUpdate&&s<=window.remotion_ignoreFastRefreshUpdate;y.useEffect(()=>{if(!w&&M){const L=p({calculateMetadata:a.calculateMetadata,combinedProps:E,compositionDurationInFrames:a.durationInFrames??null,compositionFps:a.fps??null,compositionHeight:a.height??null,compositionWidth:a.width??null,defaultProps:v,compositionId:a.id});return()=>{L.abort()}}},[M,v,p,E,a==null?void 0:a.calculateMetadata,a==null?void 0:a.durationInFrames,a==null?void 0:a.fps,a==null?void 0:a.height,a==null?void 0:a.id,a==null?void 0:a.width,w]),y.useEffect(()=>{w||window.dispatchEvent(new CustomEvent(lx,{detail:{resetUnsaved:!0}}))},[s]),y.useEffect(()=>{if(l&&!m){const L={...l.defaultProps??{},..._??{},...c??{}},B=p({calculateMetadata:l.calculateMetadata,compositionDurationInFrames:l.durationInFrames??null,compositionFps:l.fps??null,compositionHeight:l.height??null,compositionId:l.id,compositionWidth:l.width??null,defaultProps:v,combinedProps:L});return()=>{B.abort()}}},[v,p,c,m,l,_]);const T=y.useMemo(()=>{const L=i.filter(B=>B.calculateMetadata===null);return{...d,...L.reduce((B,x)=>({...B,[x.id]:{type:"success",result:{...x,defaultProps:x.defaultProps??{}}}}),{})}},[i,d]);return b.jsx(Vu.Provider,{value:T,children:t})},Yh=t=>{const e=y.useContext(Vu),{props:n}=y.useContext(zu),{compositions:i,canvasContent:r,currentCompositionMetadata:o}=y.useContext(dr),s=(r==null?void 0:r.type)==="composition"?r.compositionId:null,a=t??s,l=i.find(c=>c.id===a),u=y.useMemo(()=>l?n[l.id]??{}:{},[n,l]);return y.useMemo(()=>l?o?{type:"success",result:{...o,id:l.id,props:o.props,defaultProps:l.defaultProps??{},defaultCodec:o.defaultCodec}}:ax(l)?e[l.id]?e[l.id]:null:(Xh(l.durationInFrames,{allowFloats:!1,component:`in <Composition id="${l.id}">`}),rx(l.fps,`in <Composition id="${l.id}">`),hu(l.width,"width",`in <Composition id="${l.id}">`),hu(l.height,"height",`in <Composition id="${l.id}">`),{type:"success",result:{width:l.width,height:l.height,fps:l.fps,id:l.id,durationInFrames:l.durationInFrames,defaultProps:l.defaultProps??{},props:{...l.defaultProps??{},...u??{},...typeof window>"u"||Nt().isPlayer?{}:ix()??{}},defaultCodec:null}}):null,[l,e,o,u])},Hu=()=>{const{canvasContent:t,compositions:e,currentCompositionMetadata:n}=y.useContext(dr),i=e.find(o=>(t==null?void 0:t.type)==="composition"&&o.id===t.compositionId),r=Yh((i==null?void 0:i.id)??null);return y.useMemo(()=>!r||r.type==="error"||r.type==="loading"||!i?null:{...r.result,defaultProps:i.defaultProps??{},id:i.id,...n??{},component:i.component},[n,r,i])},Kn=y.createContext({frame:{},playing:!1,playbackRate:1,rootId:"",imperativePlaying:{current:!1},setPlaybackRate:()=>{throw new Error("default")},audioAndVideoTags:{current:[]}}),os=y.createContext({setFrame:()=>{throw new Error("default")},setPlaying:()=>{throw new Error("default")}}),qh=()=>"remotion.time-all",cx=t=>{localStorage.setItem(qh(),JSON.stringify(t))},dx=()=>{const t=localStorage.getItem(qh())??"{}";return JSON.parse(t)},fx=t=>{const e=localStorage.getItem(qh())??"{}",n=JSON.parse(e);return n[t]!==void 0?Number(n[t]):typeof window>"u"?0:window.remotion_initialFrame??0},ss=()=>{const t=Hu(),e=y.useContext(Kn);if(!t)return typeof window>"u"?0:window.remotion_initialFrame??0;const n=e.frame[t.id]??(Nt().isPlayer?0:fx(t.id));return Math.min(t.durationInFrames-1,n)},hx=()=>{const{setFrame:t}=y.useContext(os);return t},Kh=()=>{const{playing:t,imperativePlaying:e}=y.useContext(Kn),{setPlaying:n}=y.useContext(os);return y.useMemo(()=>[t,n,e],[e,t,n])},$r=y.createContext(!1),wf=({children:t})=>b.jsx($r.Provider,{value:!0,children:t}),Zh=()=>{const t=y.useContext(nn),e=(t==null?void 0:t.width)??null,n=(t==null?void 0:t.height)??null,i=(t==null?void 0:t.durationInFrames)??null,r=Hu();return y.useMemo(()=>{if(!r)return null;const{id:o,durationInFrames:s,fps:a,height:l,width:u,defaultProps:c,props:d,defaultCodec:h}=r;return{id:o,width:e??u,height:n??l,fps:a,durationInFrames:i??s,defaultProps:c,props:d,defaultCodec:h}},[i,n,e,r])},fr=()=>{const t=Zh(),e=y.useContext($r),n=Gh();if(!t)throw typeof window<"u"&&window.remotion_isPlayer||n?new Error(["No video config found. Likely reasons:","- You are probably calling useVideoConfig() from outside the component passed to <Player />. See https://www.remotion.dev/docs/player/examples for how to set up the Player correctly.","- You have multiple versions of Remotion installed which causes the React context to get lost."].join("-")):new Error("No video config found. You are probably calling useVideoConfig() from a component which has not been registered as a <Composition />. See https://www.remotion.dev/docs/the-fundamentals#defining-compositions for more information.");if(!e)throw new Error("Called useVideoConfig() outside a Remotion composition.");return t},Xr=()=>{if(!y.useContext($r))throw Nt().isPlayer?new Error("useCurrentFrame can only be called inside a component that was passed to <Player>. See: https://www.remotion.dev/docs/player/examples"):new Error("useCurrentFrame() can only be called inside a component that was registered as a composition. See https://www.remotion.dev/docs/the-fundamentals#defining-compositions");const e=ss(),n=y.useContext(nn),i=n?n.cumulatedFrom+n.relativeFrom:0;return e-i},vP=({frame:t,children:e,active:n=!0})=>{const i=Xr(),r=fr();if(typeof t>"u")throw new Error("The <Freeze /> component requires a 'frame' prop, but none was passed.");if(typeof t!="number")throw new Error(`The 'frame' prop of <Freeze /> must be a number, but is of type ${typeof t}`);if(Number.isNaN(t))throw new Error("The 'frame' prop of <Freeze /> must be a real number, but it is NaN.");if(!Number.isFinite(t))throw new Error(`The 'frame' prop of <Freeze /> must be a finite number, but it is ${t}.`);const o=y.useMemo(()=>{if(typeof n=="boolean")return n;if(typeof n=="function")return n(i)},[n,i]),s=y.useContext(Kn),a=y.useContext(nn),l=(a==null?void 0:a.relativeFrom)??0,u=y.useMemo(()=>o?{...s,playing:!1,imperativePlaying:{current:!1},frame:{[r.id]:t+l}}:s,[o,s,r.id,t,l]);return b.jsx(Kn.Provider,{value:u,children:e})},_P=({from:t=0,durationInFrames:e=1/0,children:n,name:i,height:r,width:o,showInTimeline:s=!0,_remotionInternalLoopDisplay:a,_remotionInternalStack:l,_remotionInternalPremountDisplay:u,...c},d)=>{const{layout:h="absolute-fill"}=c,[g]=y.useState(()=>String(Math.random())),_=y.useContext(nn),{rootId:S}=y.useContext(Kn),p=_?_.cumulatedFrom+_.relativeFrom:0,f=$h();if(h!=="absolute-fill"&&h!=="none")throw new TypeError(`The layout prop of <Sequence /> expects either "absolute-fill" or "none", but you passed: ${h}`);if(h==="none"&&typeof c.style<"u")throw new TypeError('If layout="none", you may not pass a style.');if(typeof e!="number")throw new TypeError(`You passed to durationInFrames an argument of type ${typeof e}, but it must be a number.`);if(e<=0)throw new TypeError(`durationInFrames must be positive, but got ${e}`);if(typeof t!="number")throw new TypeError(`You passed to the "from" props of your <Sequence> an argument of type ${typeof t}, but it must be a number.`);if(!Number.isFinite(t))throw new TypeError(`The "from" prop of a sequence must be finite, but got ${t}.`);const m=ss(),v=fr(),E=_?Math.min(_.durationInFrames-t,e):e,M=Math.max(0,Math.min(v.durationInFrames-t,E)),{registerSequence:w,unregisterSequence:T}=y.useContext(is),{hidden:L}=y.useContext(ya),B=y.useMemo(()=>(_==null?void 0:_.premounting)??!!c._remotionInternalIsPremounting,[c._remotionInternalIsPremounting,_==null?void 0:_.premounting]),x=y.useMemo(()=>({cumulatedFrom:p,relativeFrom:t,durationInFrames:M,parentFrom:(_==null?void 0:_.relativeFrom)??0,id:g,height:r??(_==null?void 0:_.height)??null,width:o??(_==null?void 0:_.width)??null,premounting:B}),[p,t,M,_,g,r,o,B]),A=y.useMemo(()=>i??"",[i]);y.useEffect(()=>{if(Nt().isStudio)return w({from:t,duration:M,id:g,displayName:A,parent:(_==null?void 0:_.id)??null,type:"sequence",rootId:S,showInTimeline:s,nonce:f,loopDisplay:a,stack:l??null,premountDisplay:u??null}),()=>{T(g)}},[e,g,i,w,A,T,_==null?void 0:_.id,M,S,t,s,f,a,l,u]);const k=Math.ceil(p+t+e-1),z=m<p+t||m>k?null:n,D=c.layout==="none"?void 0:c.style,G=y.useMemo(()=>({flexDirection:void 0,...o?{width:o}:{},...r?{height:r}:{},...D??{}}),[r,D,o]);if(d!==null&&h==="none")throw new TypeError('It is not supported to pass both a `ref` and `layout="none"` to <Sequence />.');return L[g]??!1?null:b.jsx(nn.Provider,{value:x,children:z===null?null:c.layout==="none"?z:b.jsx(jh,{ref:d,style:G,className:c.className,children:z})})},yP=y.forwardRef(_P),xP=(t,e)=>{const n=Xr();if(t.layout==="none")throw new Error('`<Sequence>` with `premountFor` prop does not support layout="none"');const{style:i,from:r=0,premountFor:o=0,...s}=t,a=n<r&&n>=r-o,l=y.useMemo(()=>({...i,opacity:a?0:1,pointerEvents:a?"none":(i==null?void 0:i.pointerEvents)??void 0}),[a,i]);return b.jsx(vP,{frame:r,active:a,children:b.jsx(xa,{ref:e,from:r,style:l,_remotionInternalPremountDisplay:o,_remotionInternalIsPremounting:a,...s})})},SP=y.forwardRef(xP),EP=(t,e)=>t.layout!=="none"&&t.premountFor&&!Nt().isRendering?b.jsx(SP,{...t,ref:e}):b.jsx(yP,{...t,ref:e}),xa=y.forwardRef(EP),wP=t=>{if(typeof t!="string")throw new TypeError(`The "filename" must be a string, but you passed a value of type ${typeof t}`);if(t.trim()==="")throw new Error("The `filename` must not be empty");if(!t.match(/^([0-9a-zA-Z-!_.*'()/:&$@=;+,?]+)/g))throw new Error('The `filename` must match "/^([0-9a-zA-Z-!_.*\'()/:&$@=;+,?]+)/g". Use forward slashes only, even on Windows.')},MP=t=>{if(typeof t!="string"&&!(t instanceof Uint8Array))throw new TypeError(`The "content" must be a string or Uint8Array, but you passed a value of type ${typeof t}`);if(typeof t=="string"&&t.trim()==="")throw new Error("The `content` must not be empty")},px=t=>{t.type==="artifact"&&(wP(t.filename),MP(t.content))},as=y.createContext({registerRenderAsset:()=>{},unregisterRenderAsset:()=>{},renderAssets:[]}),TP=({children:t})=>{const[e,n]=y.useState([]),i=y.useCallback(s=>{px(s),n(a=>[...a,s])},[]),r=y.useCallback(s=>{n(a=>a.filter(l=>l.id!==s))},[]);y.useLayoutEffect(()=>{typeof window<"u"&&(window.remotion_collectAssets=()=>(n([]),e))},[e]);const o=y.useMemo(()=>({registerRenderAsset:i,unregisterRenderAsset:r,renderAssets:e}),[e,i,r]);return b.jsx(as.Provider,{value:o,children:t})},Hr=t=>typeof window>"u"?t:new URL(t,window.origin).href,mx=({endAt:t,mediaDuration:e,playbackRate:n,startFrom:i})=>{let r=e;typeof t<"u"&&(r=t),typeof i<"u"&&(r-=i);const o=r/n;return Math.floor(o)};function Jh(t){let e;throw CP(t)?(e=t,e.stack||(e.stack=new Error(e.message).stack)):typeof t=="string"?e=Error(t):e=Error("Rendering was cancelled"),window.remotion_cancelledError=e.stack,e}var CP=t=>t instanceof Error?!0:!(t===null||typeof t!="object"||!("stack"in t)||typeof t.stack!="string"||!("message"in t)||typeof t.message!="string"),gx=y.createContext(null),AP=()=>Ge.useContext(gx),Gu=({durationInFrames:t,times:e=1/0,children:n,name:i,...r})=>{const o=Xr(),{durationInFrames:s}=fr();if(Xh(t,{component:"of the <Loop /> component",allowFloats:!0}),typeof e!="number")throw new TypeError(`You passed to "times" an argument of type ${typeof e}, but it must be a number.`);if(e!==1/0&&e%1!==0)throw new TypeError(`The "times" prop of a loop must be an integer, but got ${e}.`);if(e<0)throw new TypeError(`The "times" prop of a loop must be at least 0, but got ${e}`);const a=Math.ceil(s/t),l=Math.min(a,e),u=r.layout==="none"?void 0:r.style,c=t*(l-1),h=Math.floor(o/t)*t,g=Math.min(h,c),_=y.useMemo(()=>({numberOfTimes:l,startOffset:-g,durationInFrames:t}),[l,t,g]),S=y.useMemo(()=>({iteration:Math.floor(o/t),durationInFrames:t}),[o,t]);return b.jsx(gx.Provider,{value:S,children:b.jsx(xa,{durationInFrames:t,from:g,name:i??"<Loop>",_remotionInternalLoopDisplay:_,layout:r.layout,style:u,children:n})})};Gu.useLoop=AP;var Wu=y.createContext({}),_v={},ad=[],vx=({children:t})=>{const[e,n]=y.useState(()=>_v);return y.useEffect(()=>{const i=()=>{n(_v)};return ad.push(i),()=>{ad=ad.filter(r=>r!==i)}},[]),b.jsx(Wu.Provider,{value:e,children:t})},ls=t=>y.useContext(Wu)[t]??t,_x=(t,e)=>{if(typeof t.volume!="number"&&typeof t.volume!="function"&&typeof t.volume<"u")throw new TypeError(`You have passed a volume of type ${typeof t.volume} to your <${e} /> component. Volume must be a number or a function with the signature '(frame: number) => number' undefined.`);if(typeof t.volume=="number"&&t.volume<0)throw new TypeError(`You have passed a volume below 0 to your <${e} /> component. Volume must be between 0 and 1`);if(typeof t.playbackRate!="number"&&typeof t.playbackRate<"u")throw new TypeError(`You have passed a playbackRate of type ${typeof t.playbackRate} to your <${e} /> component. Playback rate must a real number or undefined.`);if(typeof t.playbackRate=="number"&&(isNaN(t.playbackRate)||!Number.isFinite(t.playbackRate)||t.playbackRate<=0))throw new TypeError(`You have passed a playbackRate of ${t.playbackRate} to your <${e} /> component. Playback rate must be a real number above 0.`)},yx=(t,e)=>{if(typeof t<"u"){if(typeof t!="number")throw new TypeError(`type of startFrom prop must be a number, instead got type ${typeof t}.`);if(isNaN(t)||t===1/0)throw new TypeError("startFrom prop can not be NaN or Infinity.");if(t<0)throw new TypeError(`startFrom must be greater than equal to 0 instead got ${t}.`)}if(typeof e<"u"){if(typeof e!="number")throw new TypeError(`type of endAt prop must be a number, instead got type ${typeof e}.`);if(isNaN(e))throw new TypeError("endAt prop can not be NaN.");if(e<=0)throw new TypeError(`endAt must be a positive number, instead got ${e}.`)}if(e<t)throw new TypeError("endAt prop must be greater than startFrom prop.")},bP=(t,e)=>{switch(e.type){case"got-duration":{const n=Hr(e.src);return t[n]===e.durationInSeconds?t:{...t,[n]:e.durationInSeconds}}default:return t}},Qh=y.createContext({durations:{},setDurations:()=>{throw new Error("context missing")}}),xx=({children:t})=>{const[e,n]=y.useReducer(bP,{}),i=y.useMemo(()=>({durations:e,setDurations:n}),[e]);return b.jsx(Qh.Provider,{value:i,children:t})};function yv(t){let e=t+1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function RP(t){let e=0,n=0,i=0;for(e=0;e<t.length;e++)n=t.charCodeAt(e),i=(i<<5)-i+n,i|=0;return i}var us=(t,e)=>{if(t===null)return Math.random();if(typeof t=="string")return yv(RP(t));if(typeof t=="number")return yv(t*1e10);throw new Error("random() argument must be a number or a string")},Sa=()=>{const t=y.useContext(nn);return Math.min(0,(t==null?void 0:t.relativeFrom)??0)},ju=t=>{const e=Gu.useLoop(),n=Xr(),i=Sa();return t==="repeat"||e===null?n+i:n+i+e.durationInFrames*e.iteration},PP=t=>{if(/data:|blob:/.test(t.substring(0,5)))return"Data URL";const e=t.split("/").map(n=>n.split("\\")).flat(1);return e[e.length-1]},pu=(t,e,n)=>{const{current:i}=t;if(!i)return;const r=i.play();r.catch&&r.catch(o=>{if(i&&!o.message.includes("request was interrupted by a call to pause")&&!o.message.includes("The operation was aborted.")&&!o.message.includes("The fetching process for the media resource was aborted by the user agent")&&!o.message.includes("request was interrupted by a new load request")&&!o.message.includes("because the media was removed from the document")&&!(o.message.includes("user didn't interact with the document")&&i.muted)&&(console.log(`Could not play ${e} due to following error: `,o),!i.muted)){if(n){n();return}console.log("The video will be muted and we'll retry playing it."),e==="video"&&Nt().isPlayer&&console.log("Use onAutoPlayError() to handle this error yourself."),i.muted=!0,i.play()}})},Ea=({frame:t,volume:e,mediaVolume:n=1,allowAmplificationDuringRender:i})=>{const r=i?1/0:1;if(typeof e=="number")return Math.min(r,e*n);if(typeof e>"u")return Number(n);const o=e(t)*n;if(typeof o!="number")throw new TypeError(`You passed in a a function to the volume prop but it did not return a number but a value of type ${typeof o} for frame ${t}`);if(Number.isNaN(o))throw new TypeError(`You passed in a function to the volume prop but it returned NaN for frame ${t}.`);if(!Number.isFinite(o))throw new TypeError(`You passed in a function to the volume prop but it returned a non-finite number for frame ${t}.`);return Math.max(0,Math.min(r,o))},xv={},LP=t=>{xv[t]||(console.warn(t),xv[t]=!0)},Sx=({volume:t,mediaVolume:e,mediaRef:n,src:i,mediaType:r,playbackRate:o,displayName:s,id:a,stack:l,showInTimeline:u,premountDisplay:c,onAutoPlayError:d})=>{const h=fr(),{rootId:g,audioAndVideoTags:_}=y.useContext(Kn),S=y.useContext(nn),p=S?S.relativeFrom+S.cumulatedFrom:0,[f]=Kh(),m=Sa(),{registerSequence:v,unregisterSequence:E}=y.useContext(is),[M]=y.useState(()=>t),w=$h(),T=S?Math.min(S.durationInFrames,h.durationInFrames):h.durationInFrames,L=typeof t=="function",B=y.useMemo(()=>typeof t=="number"?t:new Array(Math.floor(Math.max(0,T+m))).fill(!0).map((x,A)=>Ea({frame:A+m,volume:t,mediaVolume:e,allowAmplificationDuringRender:!1})).join(","),[T,m,t,e]);y.useEffect(()=>{typeof t=="number"&&t!==M&&LP(`Remotion: The ${r} with src ${i} has changed it's volume. Prefer the callback syntax for setting volume to get better timeline display: https://www.remotion.dev/docs/using-audio/#controlling-volume`)},[M,r,i,t]),y.useEffect(()=>{var x,A;if(n.current){if(!i)throw new Error("No src passed");if(!(!Nt().isStudio&&((A=(x=window.process)==null?void 0:x.env)==null?void 0:A.NODE_ENV)!=="test")&&u)return v({type:r,src:i,id:a,duration:T,from:0,parent:(S==null?void 0:S.id)??null,displayName:s??PP(i),rootId:g,volume:B,showInTimeline:!0,nonce:w,startMediaFrom:0-m,doesVolumeChange:L,loopDisplay:void 0,playbackRate:o,stack:l,premountDisplay:c}),()=>{E(a)}}},[p,T,a,S,i,v,g,E,h,B,L,w,n,r,m,o,s,l,u,c]),y.useEffect(()=>{const x={id:a,play:()=>{if(f)return pu(n,r,d)}};return _.current.push(x),()=>{_.current=_.current.filter(A=>A.id!==a)}},[_,a,n,r,d,f])},NP=()=>{const[t,e]=y.useState([]),[n,i]=y.useState([]),[r,o]=y.useState([]),s=y.useRef(!1),a=y.useCallback(c=>(e(d=>[...d,c]),{unblock:()=>{e(d=>{const h=d.filter(g=>g!==c);return h.length===d.length?d:h})}}),[]),l=y.useCallback(c=>(i(d=>[...d,c]),{remove:()=>{i(d=>d.filter(h=>h!==c))}}),[]),u=y.useCallback(c=>(o(d=>[...d,c]),{remove:()=>{o(d=>d.filter(h=>h!==c))}}),[]);return y.useEffect(()=>{t.length>0&&n.forEach(c=>c())},[t]),y.useEffect(()=>{t.length===0&&r.forEach(c=>c())},[t]),y.useMemo(()=>({addBlock:a,listenForBuffering:l,listenForResume:u,buffering:s}),[a,s,l,u])},cs=Ge.createContext(null),Ex=({children:t})=>{const e=NP();return b.jsx(cs.Provider,{value:e,children:t})},DP=t=>{const[e,n]=y.useState(t.buffering.current);return y.useEffect(()=>{const i=()=>{n(!0)},r=()=>{n(!1)};return t.listenForBuffering(i),t.listenForResume(r),()=>{t.listenForBuffering(()=>{}),t.listenForResume(()=>{})}},[t]),e},ep=()=>{const t=y.useContext(cs),e=t?t.addBlock:null;return y.useMemo(()=>({delayPlayback:()=>{if(!e)throw new Error("Tried to enable the buffering state, but a Remotion context was not found. This API can only be called in a component that was passed to the Remotion Player or a <Composition>. Or you might have experienced a version mismatch - run `npx remotion versions` and ensure all packages have the same version. This error is thrown by the buffer state https://remotion.dev/docs/player/buffer-state");const{unblock:n}=e({id:String(Math.random())});return{unblock:n}}}),[e])},IP=({mediaRef:t,mediaType:e,onVariableFpsVideoDetected:n,pauseWhenBuffering:i})=>{const r=y.useRef(!1),{delayPlayback:o}=ep(),s=y.useCallback(a=>{if(e!=="video"||!i)return;const l=t.current;if(!l||!l.requestVideoFrameCallback)return;r.current=!0;const u=o(),c=()=>{u.unblock(),l.removeEventListener("ended",c,{once:!0}),l.removeEventListener("pause",c,{once:!0}),r.current=!1},d=()=>{c()};l.requestVideoFrameCallback((h,g)=>{Math.abs(g.mediaTime-a)>.5&&n(),c()}),l.addEventListener("ended",d,{once:!0}),l.addEventListener("pause",d,{once:!0}),l.addEventListener("canplay",d,{once:!0})},[o,t,e,n,i]);return y.useMemo(()=>({isBuffering:()=>r.current,bufferUntilFirstFrame:s}),[s])},UP=({element:t,shouldBuffer:e,isPremounting:n})=>{const i=ep(),[r,o]=y.useState(!1);return y.useEffect(()=>{let s=[];const{current:a}=t;if(!a||!e||n)return;const l=()=>{s.forEach(d=>d()),s=[],o(!1)},u=()=>{o(!0);const{unblock:d}=i.delayPlayback(),h=()=>{l(),c()},g=()=>{l(),c()};a.addEventListener("canplay",h,{once:!0}),s.push(()=>{a.removeEventListener("canplay",h)}),a.addEventListener("error",g,{once:!0}),s.push(()=>{a.removeEventListener("error",g)}),s.push(()=>{d()})},c=()=>{a.readyState<a.HAVE_FUTURE_DATA?(u(),navigator.userAgent.includes("Firefox/")||a.load()):(a.addEventListener("waiting",u),s.push(()=>{a.removeEventListener("waiting",u)}))};return c(),()=>{l()}},[i,t,n,e]),r},FP=({mediaRef:t,mediaType:e,lastSeek:n,onVariableFpsVideoDetected:i})=>{const r=y.useRef(null);return y.useEffect(()=>{const{current:o}=t;if(o)r.current=o.currentTime;else{r.current=null;return}if(e!=="video"){r.current=null;return}const s=o;if(!s.requestVideoFrameCallback)return;let a=()=>{};const l=()=>{if(!s)return;const u=s.requestVideoFrameCallback((c,d)=>{if(r.current!==null){const h=Math.abs(r.current-d.mediaTime),g=Math.abs(n.current===null?1/0:d.mediaTime-n.current);h>.5&&g>.5&&d.mediaTime>r.current&&i()}r.current=d.mediaTime,l()});a=()=>{s.cancelVideoFrameCallback(u),a=()=>{}}};return l(),()=>{a()}},[n,t,e,i]),r};function OP(t,e,n,i){const{extrapolateLeft:r,extrapolateRight:o,easing:s}=i;let a=t;const[l,u]=e,[c,d]=n;if(a<l){if(r==="identity")return a;if(r==="clamp")a=l;else if(r==="wrap"){const h=u-l;a=((a-l)%h+h)%h+l}}if(a>u){if(o==="identity")return a;if(o==="clamp")a=u;else if(o==="wrap"){const h=u-l;a=((a-l)%h+h)%h+l}}return c===d?c:(a=(a-l)/(u-l),a=s(a),a=a*(d-c)+c,a)}function kP(t,e){let n;for(n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}function BP(t){for(let e=1;e<t.length;++e)if(!(t[e]>t[e-1]))throw new Error(`inputRange must be strictly monotonically increasing but got [${t.join(",")}]`)}function Sv(t,e){if(e.length<2)throw new Error(t+" must have at least 2 elements");for(const n of e){if(typeof n!="number")throw new Error(`${t} must contain only numbers`);if(!Number.isFinite(n))throw new Error(`${t} must contain only finite numbers, but got [${e.join(",")}]`)}}function wx(t,e,n,i){if(typeof t>"u")throw new Error("input can not be undefined");if(typeof e>"u")throw new Error("inputRange can not be undefined");if(typeof n>"u")throw new Error("outputRange can not be undefined");if(e.length!==n.length)throw new Error("inputRange ("+e.length+") and outputRange ("+n.length+") must have the same length");Sv("inputRange",e),Sv("outputRange",n),BP(e);const r=(i==null?void 0:i.easing)??(l=>l);let o="extend";(i==null?void 0:i.extrapolateLeft)!==void 0&&(o=i.extrapolateLeft);let s="extend";if((i==null?void 0:i.extrapolateRight)!==void 0&&(s=i.extrapolateRight),typeof t!="number")throw new TypeError("Cannot interpolate an input which is not a number");const a=kP(t,e);return OP(t,[e[a],e[a+1]],[n[a],n[a+1]],{easing:r,extrapolateLeft:o,extrapolateRight:s})}var zP=({frame:t,playbackRate:e,startFrom:n})=>wx(t,[-1,n,n+1],[-1,n,n+e]),Mx=({fps:t,frame:e,playbackRate:n,startFrom:i})=>{const r=zP({frame:e,playbackRate:n,startFrom:i}),o=1e3/t;return r*o/1e3},Tx=(t,e)=>Math.round(t/e*100)/100,$u=()=>{if(typeof window>"u")return!1;const t=/iP(ad|od|hone)/i.test(window.navigator.userAgent),e=/AppleWebKit/.test(window.navigator.userAgent);return t&&e},VP=t=>$u()&&t.startsWith("blob:"),Mf=({actualFrom:t,fps:e})=>Tx(Math.max(0,-t),e),Tf=({duration:t,fps:e})=>Tx(t,e),HP=({actualSrc:t,actualFrom:e,duration:n,fps:i})=>{if(VP(t)||t.startsWith("data:")||!!new URL(t,(typeof window>"u"?null:window.location.href)??"http://localhost:3000").hash||!Number.isFinite(e))return t;const o=`${t}#t=${Mf({actualFrom:e,fps:i})}`;return Number.isFinite(n)?`${o},${Tf({duration:n,fps:i})}`:o},GP=({prevStartFrom:t,newStartFrom:e,prevDuration:n,newDuration:i,fps:r})=>{const o=Mf({actualFrom:t,fps:r}),s=Mf({actualFrom:e,fps:r}),a=Tf({duration:n,fps:r}),l=Tf({duration:i,fps:r});return!(s<o||l>a)},WP=({actualSrc:t,actualFrom:e,duration:n,fps:i})=>{const r=y.useRef(e),o=y.useRef(n),s=y.useRef(t);return(!GP({prevStartFrom:r.current,newStartFrom:e,prevDuration:o.current,newDuration:n,fps:i})||t!==s.current)&&(r.current=e,o.current=n,s.current=t),HP({actualSrc:s.current,actualFrom:r.current,duration:o.current,fps:i})},Ev={},jP=(t,e)=>{if(t===null||t.seekable.length===0||t.seekable.length>1||Ev[t.src])return;const n={start:t.seekable.start(0),end:t.seekable.end(0)};if(n.start===0&&n.end===0){const i=[`The media ${t.src} cannot be seeked. This could be one of few reasons:`,"1) The media resource was replaced while the video is playing but it was not loaded yet.","2) The media does not support seeking.","3) The media was loaded with security headers prventing it from being included.","Please see https://remotion.dev/docs/non-seekable-media for assistance."].join(`
`);if(e==="console-error")console.error(i);else if(e==="console-warning")console.warn(`The media ${t.src} does not support seeking. The video will render fine, but may not play correctly in the Remotion Studio and in the <Player>. See https://remotion.dev/docs/non-seekable-media for an explanation.`);else throw new Error(i);Ev[t.src]=!0}},tp=.45,ld=(t,e)=>{if(!t.current)return;const n=$u()?Number(e.toFixed(1)):e;t.current.currentTime=n},Cx=({mediaRef:t,src:e,mediaType:n,playbackRate:i,onlyWarnForMediaSeekingError:r,acceptableTimeshift:o,pauseWhenBuffering:s,isPremounting:a,debugSeeking:l,onAutoPlayError:u})=>{const{playbackRate:c}=y.useContext(Kn),d=Xr(),h=ss(),[g]=Kh(),_=y.useContext(cs),{fps:S}=fr(),p=Sa(),f=y.useRef(null),m=y.useRef(null);if(!_)throw new Error("useMediaPlayback must be used inside a <BufferingContext>");const v=y.useRef({}),E=y.useCallback(()=>{e&&(l&&console.log(`Detected ${e} as a variable FPS video. Disabling buffering while seeking.`),v.current[e]=!0)},[l,e]),M=FP({mediaRef:t,mediaType:n,lastSeek:m,onVariableFpsVideoDetected:E}),w=Mx({frame:d,playbackRate:i,startFrom:-p,fps:S}),T=UP({element:t,shouldBuffer:s,isPremounting:a}),{bufferUntilFirstFrame:L,isBuffering:B}=IP({mediaRef:t,mediaType:n,onVariableFpsVideoDetected:E,pauseWhenBuffering:s}),x=i*c,A=(()=>{var z;return(z=t.current)!=null&&z.duration?Math.min(t.current.duration,o??tp):o})(),k=DP(_);y.useEffect(()=>{var D,G;if(!g){(D=t.current)==null||D.pause();return}const z=T||B();k&&!z&&((G=t.current)==null||G.pause())},[B,T,k,t,g]),y.useEffect(()=>{const z=n==="audio"?"<Audio>":"<Video>";if(!t.current)throw new Error(`No ${n} ref found`);if(!e)throw new Error(`No 'src' attribute was passed to the ${z} element.`);const D=Math.max(0,x);t.current.playbackRate!==D&&(t.current.playbackRate=D);const{duration:G}=t.current,F=!Number.isNaN(G)&&Number.isFinite(G)?Math.min(G,w):w,Z=t.current.currentTime,U=M.current??null,O=v.current[e],H=Math.abs(F-Z),X=U?Math.abs(F-U):null,Q=X&&!O?X:H;if(l&&console.log({mediaTagTime:Z,rvcTime:U,shouldBeTime:F,state:t.current.readyState,playing:!t.current.paused,isVariableFpsVideo:O}),Q>A&&f.current!==F){l&&console.log("Seeking",{shouldBeTime:F,isTime:Z,rvcTime:U,timeShift:Q,isVariableFpsVideo:O}),ld(t,F),m.current=F,f.current=F,g&&!O&&(x>0&&L(F),t.current.paused&&pu(t,n,u)),r||jP(t.current,r?"console-warning":"console-error");return}const ge=g?.15:1e-5,j=Math.abs(t.current.currentTime-F)>ge,K=T||B(),ne=_.buffering.current&&!K;if(!g||ne){j&&(ld(t,F),m.current=F);return}(t.current.paused&&!t.current.ended||h===0)&&(j&&(ld(t,F),m.current=F),pu(t,n,u),O||x>0&&L(F))},[h,A,L,_.buffering,M,l,w,B,T,t,n,r,x,g,e,u])},Ax=t=>{const[e,n]=y.useState(1);return y.useEffect(()=>{const i=t.current;if(!i)return;const r=()=>{n(i.volume)};return i.addEventListener("volumechange",r),()=>i.removeEventListener("volumechange",r)},[t]),y.useEffect(()=>{const i=t.current;i&&i.volume!==e&&n(i.volume)},[e,t]),e},$P=1e-5,np=(t,e)=>Math.abs(t-e)<$P,bx=({volumePropFrame:t,actualVolume:e,volume:n,mediaVolume:i,mediaRef:r})=>{y.useEffect(()=>{const o=Ea({frame:t,volume:n,mediaVolume:i,allowAmplificationDuringRender:!1});!np(o,e)&&r.current&&(r.current.volume=o)},[e,t,r,n,i])},ip=y.createContext({mediaMuted:!1,mediaVolume:1}),rp=y.createContext({setMediaMuted:()=>{throw new Error("default")},setMediaVolume:()=>{throw new Error("default")}}),op=()=>{const{mediaVolume:t}=y.useContext(ip),{setMediaVolume:e}=y.useContext(rp);return y.useMemo(()=>[t,e],[t,e])},sp=()=>{const{mediaMuted:t}=y.useContext(ip),{setMediaMuted:e}=y.useContext(rp);return y.useMemo(()=>[t,e],[t,e])},wv="data:audio/mp3;base64,/+MYxAAJcAV8AAgAABn//////+/gQ5BAMA+D4Pg+BAQBAEAwD4Pg+D4EBAEAQDAPg++hYBH///hUFQVBUFREDQNHmf///////+MYxBUGkAGIMAAAAP/29Xt6lUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/+MYxDUAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",XP=(t,e)=>{const n=Object.keys(t).sort(),i=Object.keys(e).sort();if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r]!==i[r]||t[n[r]]!==e[i[r]])return!1;return!0},YP=(t,e,n)=>t==="src"&&!n.startsWith("data:")&&!e.startsWith("data:")?new URL(n,window.origin).toString()!==new URL(e,window.origin).toString():n!==e,Xu=y.createContext(null),Rx=({children:t,numberOfAudioTags:e,component:n})=>{const i=y.useRef([]),[r]=y.useState(e);if(e!==r)throw new Error("The number of shared audio tags has changed dynamically. Once you have set this property, you cannot change it afterwards.");const o=y.useMemo(()=>new Array(e).fill(!0).map(()=>({id:Math.random(),ref:y.createRef()})),[e]),s=y.useRef(new Array(e).fill(!1)),a=y.useCallback(()=>{o.forEach(({ref:_,id:S})=>{var m;const p=(m=i.current)==null?void 0:m.find(v=>v.id===S),{current:f}=_;if(f){if(p===void 0){f.src=wv;return}if(!p)throw new TypeError("Expected audio data to be there");Object.keys(p.props).forEach(v=>{YP(v,p.props[v],f[v])&&(f[v]=p.props[v])})}})},[o]),l=y.useCallback((_,S)=>{var w,T;const p=(w=i.current)==null?void 0:w.find(L=>L.audioId===S);if(p)return p;const f=s.current.findIndex(L=>L===!1);if(f===-1)throw new Error(`Tried to simultaneously mount ${e+1} <Audio /> tags at the same time. With the current settings, the maximum amount of <Audio /> tags is limited to ${e} at the same time. Remotion pre-mounts silent audio tags to help avoid browser autoplay restrictions. See https://remotion.dev/docs/player/autoplay#use-the-numberofsharedaudiotags-property for more information on how to increase this limit.`);const{id:m,ref:v}=o[f],E=[...s.current];E[f]=m,s.current=E;const M={props:_,id:m,el:v,audioId:S};return(T=i.current)==null||T.push(M),a(),M},[e,o,a]),u=y.useCallback(_=>{var f;const S=[...s.current],p=o.findIndex(m=>m.id===_);if(p===-1)throw new TypeError("Error occured in ");S[p]=!1,s.current=S,i.current=(f=i.current)==null?void 0:f.filter(m=>m.id!==_),a()},[o,a]),c=y.useCallback(({aud:_,audioId:S,id:p})=>{var m;let f=!1;i.current=(m=i.current)==null?void 0:m.map(v=>v.id===p?XP(_,v.props)?v:(f=!0,{...v,props:_,audioId:S}):v),f&&a()},[a]),d=y.useCallback(()=>{o.forEach(_=>{pu(_.ref,"audio",null)})},[o]),h=y.useMemo(()=>({registerAudio:l,unregisterAudio:u,updateAudio:c,playAllAudios:d,numberOfAudioTags:e}),[e,d,l,u,c]),g=y.useCallback(()=>{s.current=new Array(e).fill(!1),i.current=[],a()},[e,a]);return y.useEffect(()=>()=>{g()},[n,g]),b.jsxs(Xu.Provider,{value:h,children:[o.map(({id:_,ref:S})=>b.jsx("audio",{ref:S,preload:"metadata",src:wv},_)),t]})},qP=(t,e)=>{const n=y.useContext(Xu),[i]=y.useState(()=>n&&n.numberOfAudioTags>0?n.registerAudio(t,e):{el:Ge.createRef(),id:Math.random(),props:t,audioId:e}),r=Ge.useInsertionEffect??Ge.useLayoutEffect;return typeof document<"u"&&(r(()=>{n&&n.numberOfAudioTags>0&&n.updateAudio({id:i.id,aud:t,audioId:e})},[t,n,i.id,e]),r(()=>()=>{n&&n.numberOfAudioTags>0&&n.unregisterAudio(i.id)},[n,i.id])),i},KP=(t,e)=>{const[n]=y.useState(t.shouldPreMountAudioTags);if(t.shouldPreMountAudioTags!==n)throw new Error("Cannot change the behavior for pre-mounting audio tags dynamically.");const{volume:i,muted:r,playbackRate:o,shouldPreMountAudioTags:s,src:a,onDuration:l,acceptableTimeShiftInSeconds:u,_remotionInternalNeedsDurationCalculation:c,_remotionInternalNativeLoopPassed:d,_remotionInternalStack:h,_remotionDebugSeeking:g,allowAmplificationDuringRender:_,name:S,pauseWhenBuffering:p,showInTimeline:f,loopVolumeCurveBehavior:m,stack:v,...E}=t,[M]=op(),[w]=sp(),T=ju(m??"repeat"),{hidden:L}=y.useContext(ya);if(!a)throw new TypeError("No 'src' was passed to <Audio>.");const B=ls(a),x=y.useContext(nn),[A]=y.useState(()=>String(Math.random())),k=L[A]??!1,z=Ea({frame:T,volume:i,mediaVolume:M,allowAmplificationDuringRender:!1}),D=y.useMemo(()=>({muted:r||w||k||z<=0,src:B,loop:d,...E}),[d,k,w,r,E,B,z]),G=y.useMemo(()=>`audio-${us(a??"")}-${x==null?void 0:x.relativeFrom}-${x==null?void 0:x.cumulatedFrom}-${x==null?void 0:x.durationInFrames}-muted:${t.muted}-loop:${t.loop}`,[a,x==null?void 0:x.relativeFrom,x==null?void 0:x.cumulatedFrom,x==null?void 0:x.durationInFrames,t.muted,t.loop]),F=qP(D,G).el,Z=Ax(F);bx({volumePropFrame:T,actualVolume:Z,volume:i,mediaVolume:M,mediaRef:F}),Sx({volume:i,mediaVolume:M,mediaRef:F,src:a,mediaType:"audio",playbackRate:o??1,displayName:S??null,id:A,stack:h,showInTimeline:f,premountDisplay:null,onAutoPlayError:null}),Cx({mediaRef:F,src:a,mediaType:"audio",playbackRate:o??1,onlyWarnForMediaSeekingError:!1,acceptableTimeshift:u??tp,isPremounting:!!(x!=null&&x.premounting),pauseWhenBuffering:p,debugSeeking:g,onAutoPlayError:null}),y.useImperativeHandle(e,()=>F.current,[F]);const U=y.useRef();return U.current=l,y.useEffect(()=>{var X;const{current:O}=F;if(!O)return;if(O.duration){(X=U.current)==null||X.call(U,O.src,O.duration);return}const H=()=>{var Q;(Q=U.current)==null||Q.call(U,O.src,O.duration)};return O.addEventListener("loadedmetadata",H),()=>{O.removeEventListener("loadedmetadata",H)}},[F,a]),n?null:b.jsx("audio",{ref:F,preload:"metadata",...D})},ZP=y.forwardRef(KP);typeof window<"u"&&(window.remotion_renderReady=!1);var Nl=[];typeof window<"u"&&(window.remotion_delayRenderTimeouts={});var JP="The delayRender was called:",QP="Retries left: ",e2="- Rendering the frame will be retried.",Mv=3e4,Gr=(t,e)=>{var r;if(typeof t!="string"&&typeof t<"u")throw new Error("The label parameter of delayRender() must be a string or undefined, got: "+JSON.stringify(t));const n=Math.random();Nl.push(n);const i=((r=Error().stack)==null?void 0:r.replace(/^Error/g,""))??"";if(Nt().isRendering){const o=((e==null?void 0:e.timeoutInMilliseconds)??(typeof window>"u"?Mv:window.remotion_puppeteerTimeout??Mv))-2e3;if(typeof window<"u"){const s=((e==null?void 0:e.retries)??0)-(window.remotion_attempt-1);window.remotion_delayRenderTimeouts[n]={label:t??null,timeout:setTimeout(()=>{const a=["A delayRender()",t?`"${t}"`:null,`was called but not cleared after ${o}ms. See https://remotion.dev/docs/timeout for help.`,s>0?QP+s:null,s>0?e2:null,JP,i].filter(Wh).join(" ");Jh(Error(a))},o)}}}return typeof window<"u"&&(window.remotion_renderReady=!1),n},At=t=>{if(typeof t>"u")throw new TypeError("The continueRender() method must be called with a parameter that is the return value of delayRender(). No value was passed.");if(typeof t!="number")throw new TypeError("The parameter passed into continueRender() must be the return value of delayRender() which is a number. Got: "+JSON.stringify(t));Nl=Nl.filter(e=>e===t?(Nt().isRendering&&(clearTimeout(window.remotion_delayRenderTimeouts[t].timeout),delete window.remotion_delayRenderTimeouts[t]),!1):!0),Nl.length===0&&typeof window<"u"&&(window.remotion_renderReady=!0)},t2=(t,e)=>{const n=y.useRef(null),{volume:i,playbackRate:r,allowAmplificationDuringRender:o,onDuration:s,toneFrequency:a,_remotionInternalNeedsDurationCalculation:l,_remotionInternalNativeLoopPassed:u,acceptableTimeShiftInSeconds:c,name:d,onError:h,delayRenderRetries:g,delayRenderTimeoutInMilliseconds:_,loopVolumeCurveBehavior:S,pauseWhenBuffering:p,...f}=t,m=ss(),v=ju(S??"repeat"),E=Xr(),M=y.useContext(nn),{registerRenderAsset:w,unregisterRenderAsset:T}=y.useContext(as),L=y.useMemo(()=>`audio-${us(t.src??"")}-${M==null?void 0:M.relativeFrom}-${M==null?void 0:M.cumulatedFrom}-${M==null?void 0:M.durationInFrames}`,[t.src,M==null?void 0:M.relativeFrom,M==null?void 0:M.cumulatedFrom,M==null?void 0:M.durationInFrames]),B=Ea({volume:i,frame:v,mediaVolume:1,allowAmplificationDuringRender:o??!1});y.useImperativeHandle(e,()=>n.current,[]),y.useEffect(()=>{if(!t.src)throw new Error("No src passed");if(window.remotion_audioEnabled&&!t.muted&&!(B<=0))return w({type:"audio",src:Hr(t.src),id:L,frame:m,volume:B,mediaFrame:E,playbackRate:t.playbackRate??1,allowAmplificationDuringRender:o??!1,toneFrequency:a??null,audioStartFrame:Math.max(0,-((M==null?void 0:M.relativeFrom)??0))}),()=>T(L)},[t.muted,t.src,w,m,L,T,B,v,E,r,t.playbackRate,o,a,M==null?void 0:M.relativeFrom]);const{src:x}=t,A=e||l;return y.useLayoutEffect(()=>{var G,F;if(((F=(G=window.process)==null?void 0:G.env)==null?void 0:F.NODE_ENV)==="test"||!A)return;const k=Gr("Loading <Audio> duration with src="+x,{retries:g??void 0,timeoutInMilliseconds:_??void 0}),{current:z}=n,D=()=>{z!=null&&z.duration&&s(z.src,z.duration),At(k)};return z!=null&&z.duration?(s(z.src,z.duration),At(k)):z==null||z.addEventListener("loadedmetadata",D,{once:!0}),()=>{z==null||z.removeEventListener("loadedmetadata",D),At(k)}},[x,s,A,g,_]),A?b.jsx("audio",{ref:n,...f}):null},n2=y.forwardRef(t2),i2=(t,e)=>{const n=y.useContext(Xu),{startFrom:i,endAt:r,name:o,stack:s,pauseWhenBuffering:a,showInTimeline:l,_remotionDebugSeeking:u,...c}=t,{loop:d,...h}=t,{fps:g}=fr(),_=Nt(),{durations:S,setDurations:p}=y.useContext(Qh);if(typeof t.src!="string")throw new TypeError(`The \`<Audio>\` tag requires a string for \`src\`, but got ${JSON.stringify(t.src)} instead.`);const f=ls(t.src),m=y.useCallback(M=>{console.log(M.currentTarget.error);const w=`Could not play audio with src ${f}: ${M.currentTarget.error}. See https://remotion.dev/docs/media-playback-error for help.`;d?Jh(new Error(w)):console.warn(w)},[d,f]),v=y.useCallback((M,w)=>{p({type:"got-duration",durationInSeconds:w,src:M})},[p]),E=S[Hr(f)]??S[Hr(t.src)];if(d&&E!==void 0){if(!Number.isFinite(E))return b.jsx(Dl,{...h,ref:e,_remotionInternalNativeLoopPassed:!0});const M=E*g;return b.jsx(Gu,{layout:"none",durationInFrames:mx({endAt:r,mediaDuration:M,playbackRate:t.playbackRate??1,startFrom:i}),children:b.jsx(Dl,{...h,ref:e,_remotionInternalNativeLoopPassed:!0})})}if(typeof i<"u"||typeof r<"u"){yx(i,r);const M=i??0,w=r??1/0;return b.jsx(xa,{layout:"none",from:0-M,showInTimeline:!1,durationInFrames:w,name:o,children:b.jsx(Dl,{_remotionInternalNeedsDurationCalculation:!!d,pauseWhenBuffering:a??!1,...c,ref:e})})}return _x(t,"Audio"),_.isRendering?b.jsx(n2,{onDuration:v,...t,ref:e,onError:m,_remotionInternalNeedsDurationCalculation:!!d}):b.jsx(ZP,{_remotionInternalNativeLoopPassed:t._remotionInternalNativeLoopPassed??!1,_remotionDebugSeeking:u??!1,_remotionInternalStack:s??null,shouldPreMountAudioTags:n!==null&&n.numberOfAudioTags>0,...t,ref:e,onError:m,onDuration:v,pauseWhenBuffering:a??!1,_remotionInternalNeedsDurationCalculation:!!d,showInTimeline:l??!0})},Dl=y.forwardRef(i2);_a(Dl);var r2=y.createContext({folderName:null,parentName:null}),o2={transform:"rotate(90deg)"},Tv=40,s2={color:"white",fontSize:14,fontFamily:"sans-serif"},a2={justifyContent:"center",alignItems:"center"},l2=()=>b.jsxs(jh,{style:a2,id:"remotion-comp-loading",children:[b.jsx("style",{type:"text/css",children:`
				@keyframes anim {
					from {
						opacity: 0
					}
					to {
						opacity: 1
					}
				}
				#remotion-comp-loading {
					animation: anim 2s;
					animation-fill-mode: forwards;
				}
			`}),b.jsx("svg",{width:Tv,height:Tv,viewBox:"-100 -100 400 400",style:o2,children:b.jsx("path",{fill:"#555",stroke:"#555",strokeWidth:"100",strokeLinejoin:"round",d:"M 2 172 a 196 100 0 0 0 195 5 A 196 240 0 0 0 100 2.259 A 196 240 0 0 0 2 172 z"})}),b.jsxs("p",{style:s2,children:["Resolving ","<Suspense>","..."]})]}),yn=null,Cf=()=>{if(!yn){if(typeof document>"u")throw new Error("Tried to call an API that only works in the browser from outside the browser");yn=document.createElement("div"),yn.style.position="absolute",yn.style.top="0px",yn.style.left="0px",yn.style.right="0px",yn.style.bottom="0px",yn.style.width="100%",yn.style.height="100%",yn.style.display="flex",yn.style.flexDirection="column";const t=document.createElement("div");t.style.position="fixed",t.style.top="-999999px",t.appendChild(yn),document.body.appendChild(t)}return yn},Px=t=>y.useMemo(()=>{if("lazyComponent"in t&&typeof t.lazyComponent<"u")return Ge.lazy(t.lazyComponent);if("component"in t)return typeof document>"u"?t.component:Ge.lazy(()=>Promise.resolve({default:t.component}));throw new Error("You must pass either 'component' or 'lazyComponent'")},[t.component,t.lazyComponent]),Lx=()=>/^([a-zA-Z0-9-\u4E00-\u9FFF])+$/g,Nx=t=>t.match(Lx()),u2=t=>{if(!Nx(t))throw new Error(`Composition id can only contain a-z, A-Z, 0-9, CJK characters and -. You passed ${t}`)},c2=`Composition ID must match ${String(Lx())}`,d2=(t,e,n)=>{if(t){if(typeof t!="object")throw new Error(`"${e}" must be an object, but you passed a value of type ${typeof t}`);if(Array.isArray(t))throw new Error(`"${e}" must be an object, an array was passed ${n?`for composition "${n}"`:""}`)}},f2=()=>(y.useEffect(()=>{const t=Gr("Waiting for Root component to unsuspend");return()=>At(t)},[]),null),Cv=({width:t,height:e,fps:n,durationInFrames:i,id:r,defaultProps:o,schema:s,...a})=>{const{registerComposition:l,unregisterComposition:u}=y.useContext(dr),c=Hu(),d=Px(a),h=$h(),g=Gh(),_=Nt();if(y.useContext($r))throw g?new Error("<Composition> was mounted inside the `component` that was passed to the <Player>. See https://remotion.dev/docs/wrong-composition-mount for help."):new Error("<Composition> mounted inside another composition. See https://remotion.dev/docs/wrong-composition-mount for help.");const{folderName:p,parentName:f}=y.useContext(r2);y.useEffect(()=>{if(!r)throw new Error("No id for composition passed.");return u2(r),d2(o,"defaultProps",r),l({durationInFrames:i??void 0,fps:n??void 0,height:e??void 0,width:t??void 0,id:r,folderName:p,component:d,defaultProps:wr(o??{}),nonce:h,parentFolderName:f,schema:s??null,calculateMetadata:a.calculateMetadata??null}),()=>{u(r)}},[i,n,e,d,r,p,o,l,u,t,h,f,s,a.calculateMetadata]);const m=Yh(r);if(_.isStudio&&c&&c.component===d){const v=d;return m===null||m.type!=="success"?null:sf.createPortal(b.jsx(wf,{children:b.jsx(y.Suspense,{fallback:b.jsx(l2,{}),children:b.jsx(v,{...m.result.props??{}})})}),Cf())}if(_.isRendering&&c&&c.component===d){const v=d;return m===null||m.type!=="success"?null:sf.createPortal(b.jsx(wf,{children:b.jsx(y.Suspense,{fallback:b.jsx(f2,{}),children:b.jsx(v,{...m.result.props??{}})})}),Cf())}return null},Dx=Ge.createRef(),h2=({children:t,numberOfAudioTags:e})=>{const[n,i]=y.useState([]),r=y.useRef(n),[o,s]=y.useState([]),[a,l]=y.useState(null),[u,c]=y.useState(null),d=y.useCallback(v=>{i(E=>{const M=v(E);return r.current=M,M})},[]),h=y.useCallback(v=>{d(E=>{if(E.find(w=>w.id===v.id))throw new Error(`Multiple composition with id ${v.id} are registered.`);return[...E,v].slice().sort((w,T)=>w.nonce-T.nonce)})},[d]),g=y.useCallback(v=>{i(E=>E.filter(M=>M.id!==v))},[]),_=y.useCallback((v,E)=>{s(M=>[...M,{name:v,parent:E}])},[]),S=y.useCallback((v,E)=>{s(M=>M.filter(w=>!(w.name===v&&w.parent===E)))},[]);y.useImperativeHandle(Dx,()=>({getCompositions:()=>r.current}),[]);const p=n.find(v=>(a==null?void 0:a.type)==="composition"?v.id===a.compositionId:null),f=y.useCallback((v,E)=>{i(M=>M.map(T=>T.id===v?{...T,defaultProps:E}:T))},[]),m=y.useMemo(()=>({compositions:n,registerComposition:h,unregisterComposition:g,folders:o,registerFolder:_,unregisterFolder:S,currentCompositionMetadata:u,setCurrentCompositionMetadata:c,canvasContent:a,setCanvasContent:l,updateCompositionDefaultProps:f}),[n,h,g,o,_,S,u,a,f]);return b.jsx(dr.Provider,{value:m,children:b.jsx(sP,{children:b.jsx(TP,{children:b.jsx(ux,{children:b.jsx(Rx,{numberOfAudioTags:e,component:(p==null?void 0:p.component)??null,children:t})})})})})},p2=({onLoad:t,onError:e,delayRenderRetries:n,delayRenderTimeoutInMilliseconds:i,...r},o)=>{const[s]=y.useState(()=>Gr(`Loading <IFrame> with source ${r.src}`,{retries:n??void 0,timeoutInMilliseconds:i??void 0})),a=y.useCallback(u=>{At(s),t==null||t(u)},[s,t]),l=y.useCallback(u=>{At(s),e?e(u):console.error("Error loading iframe:",u,"Handle the event using the onError() prop to make this message disappear.")},[s,e]);return b.jsx("iframe",{...r,ref:o,onError:l,onLoad:a})};y.forwardRef(p2);function m2(t){return 1e3*2**(t-1)}var g2=({onError:t,maxRetries:e=2,src:n,pauseWhenLoading:i,delayRenderRetries:r,delayRenderTimeoutInMilliseconds:o,onImageFrame:s,...a},l)=>{const u=y.useRef(null),c=y.useRef({}),{delayPlayback:d}=ep(),h=y.useContext(nn);if(!n)throw new Error('No "src" prop was passed to <Img>.');y.useImperativeHandle(l,()=>u.current,[]);const g=ls(n),_=y.useCallback(p=>{if(!u.current)return;const f=u.current.src;setTimeout(()=>{var v;if(!u.current)return;const m=(v=u.current)==null?void 0:v.src;m===f&&(u.current.removeAttribute("src"),u.current.setAttribute("src",m))},p)},[]),S=y.useCallback(p=>{var f,m,v,E,M,w,T;if(c.current){if(c.current[(f=u.current)==null?void 0:f.src]=(c.current[(m=u.current)==null?void 0:m.src]??0)+1,t&&(c.current[(v=u.current)==null?void 0:v.src]??0)>e){t(p);return}if((c.current[(E=u.current)==null?void 0:E.src]??0)<=e){const L=m2(c.current[(M=u.current)==null?void 0:M.src]??0);console.warn(`Could not load image with source ${(w=u.current)==null?void 0:w.src}, retrying again in ${L}ms`),_(L);return}Jh("Error loading image with src: "+((T=u.current)==null?void 0:T.src))}},[e,t,_]);if(typeof window<"u"){const p=!!(h!=null&&h.premounting);y.useLayoutEffect(()=>{var T,L;if(((L=(T=window.process)==null?void 0:T.env)==null?void 0:L.NODE_ENV)==="test"){u.current&&(u.current.src=g);return}const f=Gr("Loading <Img> with src="+g,{retries:r??void 0,timeoutInMilliseconds:o??void 0}),m=i&&!p?d().unblock:()=>{},{current:v}=u;let E=!1;const M=()=>{var B,x,A;E||((c.current[(B=u.current)==null?void 0:B.src]??0)>0&&(delete c.current[(x=u.current)==null?void 0:x.src],console.info(`Retry successful - ${(A=u.current)==null?void 0:A.src} is now loaded`)),v&&(v.src=g,s==null||s(v)),m(),At(f))},w=new Image;return w.src=g,w.decode().then(M).catch(B=>{console.warn(B),w.complete?M():w.addEventListener("load",M)}),()=>{E=!0,w.removeEventListener("load",M),m(),At(f)}},[g,d,r,o,i,p,s])}return b.jsx("img",{...a,ref:u,onError:S})};y.forwardRef(g2);var Ix={};qy(Ix,{makeDefaultPreviewCSS:()=>_2,injectCSS:()=>v2,OFFTHREAD_VIDEO_CLASS_NAME:()=>Af});var Av={},v2=t=>{if(typeof document>"u"||Av[t])return;const e=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.appendChild(document.createTextNode(t)),e.prepend(n),Av[t]=!0},Af="__remotion_offthreadvideo",_2=(t,e)=>t?`
    ${t} * {
      box-sizing: border-box;
    }
    ${t} *:-webkit-full-screen {
      width: 100%;
      height: 100%;
    }
    ${t} .${Af} {
      object-fit: contain;
    }
  `:`
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
	    background-color: ${e};
    }
    .${Af} {
      object-fit: contain;
    }
    `,Ux="__remotion-studio-container",y2=()=>document.getElementById(Ux),x2=null,ud=[],S2=()=>x2,E2=t=>(ud.push(t),()=>{ud=ud.filter(e=>e!==t)}),w2=({children:t,numberOfAudioTags:e})=>{const[n]=y.useState(()=>String(us(null))),[i,r]=y.useState(()=>dx()),[o,s]=y.useState(!1),a=y.useRef(!1),[l,u]=y.useState(0),[c,d]=y.useState(1),h=y.useRef([]);typeof window<"u"&&y.useLayoutEffect(()=>{window.remotion_setFrame=(p,f,m)=>{window.remotion_attempt=m;const v=Gr(`Setting the current frame to ${p}`);let E=!0;r(M=>(M[f]??window.remotion_initialFrame)===p?(E=!1,M):{...M,[f]:p}),E?requestAnimationFrame(()=>At(v)):At(v)},window.remotion_isPlayer=!1},[]);const g=y.useMemo(()=>({frame:i,playing:o,imperativePlaying:a,rootId:n,playbackRate:c,setPlaybackRate:d,audioAndVideoTags:h}),[i,c,o,n]),_=y.useMemo(()=>({setFrame:r,setPlaying:s}),[]),S=y.useMemo(()=>{let p=0;return{getNonce:()=>p++,fastRefreshes:l}},[l]);return y.useEffect(()=>{typeof __webpack_module__<"u"&&__webpack_module__.hot&&__webpack_module__.hot.addStatusHandler(p=>{p==="idle"&&u(f=>f+1)})},[]),b.jsx(rs.Provider,{value:S,children:b.jsx(Kn.Provider,{value:g,children:b.jsx(os.Provider,{value:_,children:b.jsx(tx,{children:b.jsx(vx,{children:b.jsx(h2,{numberOfAudioTags:e,children:b.jsx(xx,{children:b.jsx(Ex,{children:t})})})})})})})})},M2=()=>{if(Nt().isRendering){const t=window.remotion_envVariables;return t?{...JSON.parse(t),NODE_ENV:"production"}:{}}return{NODE_ENV:"production"}},T2=()=>{const t=M2();window.process||(window.process={}),window.process.env||(window.process.env={}),Object.keys(t).forEach(e=>{window.process.env[e]=t[e]})},C2=Ge.createContext(null),A2=y.createContext({setSize:()=>{},size:{size:"auto",translation:{x:0,y:0}}}),b2=({canvasSize:t,compositionHeight:e,compositionWidth:n,previewSize:i})=>{const r=t.height/e,o=t.width/n,s=Math.min(r,o);return i==="auto"?s:Number(i)},R2="remotion_staticFilesChanged";function P2(){const t=Ge.useContext(dr),e=Ge.useContext(Kn),n=Ge.useContext(os),i=Ge.useContext(nn),r=Ge.useContext(rs),o=Ge.useContext($r),s=Ge.useContext(Wu),a=Ge.useContext(Vu),l=Ge.useContext(as),u=Ge.useContext(is),c=Ge.useContext(cs);return y.useMemo(()=>({compositionManagerCtx:t,timelineContext:e,setTimelineContext:n,sequenceContext:i,nonceContext:r,canUseRemotionHooksContext:o,preloadContext:s,resolveCompositionContext:a,renderAssetManagerContext:l,sequenceManagerContext:u,bufferManagerContext:c}),[t,r,i,n,e,o,s,a,l,u,c])}var L2=t=>{const{children:e,contexts:n}=t;return b.jsx($r.Provider,{value:n.canUseRemotionHooksContext,children:b.jsx(rs.Provider,{value:n.nonceContext,children:b.jsx(Wu.Provider,{value:n.preloadContext,children:b.jsx(dr.Provider,{value:n.compositionManagerCtx,children:b.jsx(is.Provider,{value:n.sequenceManagerContext,children:b.jsx(as.Provider,{value:n.renderAssetManagerContext,children:b.jsx(Vu.Provider,{value:n.resolveCompositionContext,children:b.jsx(Kn.Provider,{value:n.timelineContext,children:b.jsx(os.Provider,{value:n.setTimelineContext,children:b.jsx(nn.Provider,{value:n.sequenceContext,children:b.jsx(cs.Provider,{value:n.bufferManagerContext,children:e})})})})})})})})})})})},De={useUnsafeVideoConfig:Zh,Timeline:Qy,CompositionManager:dr,SequenceManager:is,SequenceVisibilityToggleContext:ya,RemotionRoot:w2,useVideo:Hu,getRoot:S2,useMediaVolumeState:op,useMediaMutedState:sp,useLazyComponent:Px,truthy:Wh,SequenceContext:nn,useRemotionContexts:P2,RemotionContextProvider:L2,CSSUtils:Ix,setupEnvVariables:T2,MediaVolumeContext:ip,SetMediaVolumeContext:rp,getRemotionEnvironment:Nt,SharedAudioContext:Xu,SharedAudioContextProvider:Rx,invalidCompositionErrorMessage:c2,isCompositionIdValid:Nx,getPreviewDomElement:y2,compositionsRef:Dx,portalNode:Cf,waitForRoot:E2,CanUseRemotionHooksProvider:wf,CanUseRemotionHooks:$r,PrefetchProvider:vx,DurationsContextProvider:xx,IsPlayerContextProvider:iP,useIsPlayer:Gh,EditorPropsProvider:tx,EditorPropsContext:zu,usePreload:ls,NonceContext:rs,resolveVideoConfig:ox,useResolvedVideoConfig:Yh,resolveCompositionsRef:sx,ResolveCompositionConfig:ux,REMOTION_STUDIO_CONTAINER_ELEMENT:Ux,RenderAssetManager:as,persistCurrentFrame:cx,useTimelineSetFrame:hx,isIosSafari:$u,WATCH_REMOTION_STATIC_FILES:R2,addSequenceStackTraces:_a,useMediaStartsAt:Sa,BufferingProvider:Ex,BufferingContextReact:cs,enableSequenceStackTraces:Zy,CurrentScaleContext:C2,PreviewSizeContext:A2,calculateScale:b2,editorPropsProviderRef:ex,PROPS_UPDATED_EXTERNALLY:lx,validateRenderAsset:px},Fx=y.createContext(!1),N2=({children:t})=>b.jsx(Fx.Provider,{value:!1,children:t}),D2=()=>{if(!Ge.useContext(Fx))throw new Error("This component must be inside a <Series /> component.")},I2=({children:t},e)=>(D2(),b.jsx(N2,{children:t})),U2=y.forwardRef(I2);_a(U2);var F2=({ref:t,onVideoFrame:e})=>{y.useEffect(()=>{const{current:n}=t;if(!n||!e)return;let i=0;const r=()=>{t.current&&(e(t.current),i=t.current.requestVideoFrameCallback(r))};return r(),()=>{n.cancelVideoFrameCallback(i)}},[e,t])},O2=(t,e)=>{const n=y.useRef(null),{volume:i,muted:r,playbackRate:o,onlyWarnForMediaSeekingError:s,src:a,onDuration:l,acceptableTimeShift:u,acceptableTimeShiftInSeconds:c,toneFrequency:d,name:h,_remotionInternalNativeLoopPassed:g,_remotionInternalStack:_,_remotionDebugSeeking:S,style:p,pauseWhenBuffering:f,showInTimeline:m,loopVolumeCurveBehavior:v,onError:E,onAutoPlayError:M,onVideoFrame:w,crossOrigin:T,...L}=t,B=ju(v??"repeat"),{fps:x,durationInFrames:A}=fr(),k=y.useContext(nn),{hidden:z}=y.useContext(ya),[D]=y.useState(()=>String(Math.random())),G=z[D]??!1;if(typeof u<"u")throw new Error("acceptableTimeShift has been removed. Use acceptableTimeShiftInSeconds instead.");const F=Ax(n),[Z]=op(),[U]=sp();Sx({mediaRef:n,volume:i,mediaVolume:Z,mediaType:"video",src:a,playbackRate:t.playbackRate??1,displayName:h??null,id:D,stack:_,showInTimeline:m,premountDisplay:null,onAutoPlayError:M??null}),bx({volumePropFrame:B,actualVolume:F,volume:i,mediaVolume:Z,mediaRef:n}),Cx({mediaRef:n,src:a,mediaType:"video",playbackRate:t.playbackRate??1,onlyWarnForMediaSeekingError:s,acceptableTimeshift:c??tp,isPremounting:!!(k!=null&&k.premounting),pauseWhenBuffering:f,debugSeeking:S,onAutoPlayError:M??null});const O=k?k.relativeFrom:0,H=k?Math.min(k.durationInFrames,A):A,X=WP({actualSrc:ls(a),actualFrom:O,duration:H,fps:x});y.useImperativeHandle(e,()=>n.current,[]),y.useEffect(()=>{const{current:K}=n;if(!K)return;const ne=()=>{var de;if(K.error){if(console.error("Error occurred in video",K==null?void 0:K.error),E){const ye=new Error(`Code ${K.error.code}: ${K.error.message}`);E(ye);return}throw new Error(`The browser threw an error while playing the video ${a}: Code ${K.error.code} - ${(de=K==null?void 0:K.error)==null?void 0:de.message}. See https://remotion.dev/docs/media-playback-error for help. Pass an onError() prop to handle the error.`)}else{if(E){const ye=new Error(`The browser threw an error while playing the video ${a}`);E(ye);return}throw new Error("The browser threw an error while playing the video")}};return K.addEventListener("error",ne,{once:!0}),()=>{K.removeEventListener("error",ne)}},[E,a]);const Q=y.useRef();Q.current=l,F2({ref:n,onVideoFrame:w}),y.useEffect(()=>{var de;const{current:K}=n;if(!K)return;if(K.duration){(de=Q.current)==null||de.call(Q,a,K.duration);return}const ne=()=>{var ye;(ye=Q.current)==null||ye.call(Q,a,K.duration)};return K.addEventListener("loadedmetadata",ne),()=>{K.removeEventListener("loadedmetadata",ne)}},[a]),y.useEffect(()=>{const{current:K}=n;K&&($u()?K.preload="metadata":K.preload="auto")},[]);const ge=y.useMemo(()=>({...p,opacity:G?0:(p==null?void 0:p.opacity)??1}),[G,p]),j=T??(w?"anonymous":void 0);return b.jsx("video",{ref:n,muted:r||U,playsInline:!0,src:X,loop:g,style:ge,disableRemotePlayback:!0,crossOrigin:j,...L})},k2=y.forwardRef(O2),bv=t=>Math.round(t*1e5)/1e5,cd=(t,e)=>{if(np(t.currentTime,e))return{wait:Promise.resolve(e),cancel:()=>{}};t.currentTime=e;let n,i=null;const r=new Promise(s=>{n=t.requestVideoFrameCallback((a,l)=>{const u=l.expectedDisplayTime-a;if(u<=0){s(l.mediaTime);return}setTimeout(()=>{s(l.mediaTime)},u+150)})}),o=new Promise(s=>{const a=()=>{s()};t.addEventListener("seeked",a,{once:!0}),i=()=>{t.removeEventListener("seeked",a)}});return{wait:Promise.all([r,o]).then(([s])=>s),cancel:()=>{i==null||i(),t.cancelVideoFrameCallback(n)}}},B2=(t,e,n)=>{const i=1/n/2;let r=()=>{};return Number.isFinite(t.duration)&&t.currentTime>=t.duration&&e>=t.duration?{prom:Promise.resolve(),cancel:()=>{}}:{prom:new Promise((s,a)=>{const l=cd(t,e+i);l.wait.then(u=>{if(Math.abs(e-u)<=i)return s();const d=e>u?1:-1,h=cd(t,u+i*d);r=h.cancel,h.wait.then(g=>{const _=Math.abs(e-g);if(bv(_)<=bv(i))return s();const S=cd(t,e+i);return r=S.cancel,S.wait.then(()=>{s()}).catch(p=>{a(p)})}).catch(g=>{a(g)})}),r=l.cancel}),cancel:()=>{r()}}},z2=({onError:t,volume:e,allowAmplificationDuringRender:n,playbackRate:i,onDuration:r,toneFrequency:o,name:s,acceptableTimeShiftInSeconds:a,delayRenderRetries:l,delayRenderTimeoutInMilliseconds:u,loopVolumeCurveBehavior:c,...d},h)=>{const g=ss(),_=Xr(),S=ju(c??"repeat"),p=Zh(),f=y.useRef(null),m=y.useContext(nn),v=Sa(),E=Nt(),{registerRenderAsset:M,unregisterRenderAsset:w}=y.useContext(as),T=y.useMemo(()=>`video-${us(d.src??"")}-${m==null?void 0:m.cumulatedFrom}-${m==null?void 0:m.relativeFrom}-${m==null?void 0:m.durationInFrames}`,[d.src,m==null?void 0:m.cumulatedFrom,m==null?void 0:m.relativeFrom,m==null?void 0:m.durationInFrames]);if(!p)throw new Error("No video config found");const L=Ea({volume:e,frame:S,mediaVolume:1,allowAmplificationDuringRender:n??!1});y.useEffect(()=>{if(!d.src)throw new Error("No src passed");if(!d.muted&&!(L<=0)&&window.remotion_audioEnabled)return M({type:"video",src:Hr(d.src),id:T,frame:g,volume:L,mediaFrame:_,playbackRate:i??1,allowAmplificationDuringRender:n??!1,toneFrequency:o??null,audioStartFrame:Math.max(0,-((m==null?void 0:m.relativeFrom)??0))}),()=>w(T)},[d.muted,d.src,M,T,w,L,_,g,i,n,o,m==null?void 0:m.relativeFrom]),y.useImperativeHandle(h,()=>f.current,[]),y.useEffect(()=>{var F,Z;if(!window.remotion_videoEnabled)return;const{current:x}=f;if(!x)return;const A=Mx({frame:_,playbackRate:i||1,startFrom:-v,fps:p.fps}),k=Gr(`Rendering <Video /> with src="${d.src}" at time ${A}`,{retries:l??void 0,timeoutInMilliseconds:u??void 0});if(((Z=(F=window.process)==null?void 0:F.env)==null?void 0:Z.NODE_ENV)==="test"){At(k);return}if(np(x.currentTime,A)){if(x.readyState>=2){At(k);return}const U=()=>{At(k)};return x.addEventListener("loadeddata",U,{once:!0}),()=>{x.removeEventListener("loadeddata",U)}}const z=()=>{At(k)},D=B2(x,A,p.fps);D.prom.then(()=>{At(k)}),x.addEventListener("ended",z,{once:!0});const G=()=>{var U;if(x!=null&&x.error){if(console.error("Error occurred in video",x==null?void 0:x.error),t)return;throw new Error(`The browser threw an error while playing the video ${d.src}: Code ${x.error.code} - ${(U=x==null?void 0:x.error)==null?void 0:U.message}. See https://remotion.dev/docs/media-playback-error for help. Pass an onError() prop to handle the error.`)}else throw new Error("The browser threw an error")};return x.addEventListener("error",G,{once:!0}),()=>{D.cancel(),x.removeEventListener("ended",z),x.removeEventListener("error",G),At(k)}},[S,d.src,i,p.fps,_,v,t,l,u]);const{src:B}=d;return E.isRendering&&y.useLayoutEffect(()=>{var z,D;if(((D=(z=window.process)==null?void 0:z.env)==null?void 0:D.NODE_ENV)==="test")return;const x=Gr("Loading <Video> duration with src="+B,{retries:l??void 0,timeoutInMilliseconds:u??void 0}),{current:A}=f,k=()=>{A!=null&&A.duration&&r(B,A.duration),At(x)};return A!=null&&A.duration?(r(B,A.duration),At(x)):A==null||A.addEventListener("loadedmetadata",k,{once:!0}),()=>{A==null||A.removeEventListener("loadedmetadata",k),At(x)}},[B,r,l,u]),b.jsx("video",{ref:f,disableRemotePlayback:!0,...d})},V2=y.forwardRef(z2),H2=(t,e)=>{const{startFrom:n,endAt:i,name:r,pauseWhenBuffering:o,stack:s,_remotionInternalNativeLoopPassed:a,showInTimeline:l,onAutoPlayError:u,...c}=t,{loop:d,_remotionDebugSeeking:h,...g}=t,{fps:_}=fr(),S=Nt(),{durations:p,setDurations:f}=y.useContext(Qh);if(typeof e=="string")throw new Error("string refs are not supported");if(typeof t.src!="string")throw new TypeError(`The \`<Video>\` tag requires a string for \`src\`, but got ${JSON.stringify(t.src)} instead.`);const m=ls(t.src),v=y.useCallback((w,T)=>{f({type:"got-duration",durationInSeconds:T,src:w})},[f]),E=y.useCallback(()=>{},[]),M=p[Hr(m)]??p[Hr(t.src)];if(d&&M!==void 0){if(!Number.isFinite(M))return b.jsx(Il,{...g,ref:e,_remotionInternalNativeLoopPassed:!0});const w=M*_;return b.jsx(Gu,{durationInFrames:mx({endAt:i,mediaDuration:w,playbackRate:t.playbackRate??1,startFrom:n}),layout:"none",name:r,children:b.jsx(Il,{...g,ref:e,_remotionInternalNativeLoopPassed:!0})})}if(typeof n<"u"||typeof i<"u"){yx(n,i);const w=n??0,T=i??1/0;return b.jsx(xa,{layout:"none",from:0-w,showInTimeline:!1,durationInFrames:T,name:r,children:b.jsx(Il,{pauseWhenBuffering:o??!1,...c,ref:e})})}return _x(t,"Video"),S.isRendering?b.jsx(V2,{onDuration:v,onVideoFrame:E??null,...c,ref:e}):b.jsx(k2,{onlyWarnForMediaSeekingError:!1,...c,ref:e,onVideoFrame:null,pauseWhenBuffering:o??!1,onDuration:v,_remotionInternalStack:s??null,_remotionInternalNativeLoopPassed:a??!1,_remotionDebugSeeking:h??!1,showInTimeline:l??!0,onAutoPlayError:u??void 0})},Il=y.forwardRef(H2);_a(Il);rP();var G2={},W2=new Proxy(G2,{get(t,e){return e==="Bundling"||e==="Rendering"||e==="Log"||e==="Puppeteer"||e==="Output"?W2:()=>{console.warn("⚠️  The CLI configuration has been extracted from Remotion Core."),console.warn("Update the import from the config file:"),console.warn(),console.warn("- Delete:"),console.warn('import {Config} from "remotion";'),console.warn("+ Replace:"),console.warn('import {Config} from "@remotion/cli/config";'),console.warn(),console.warn("For more information, see https://www.remotion.dev/docs/4-0-migration."),process.exit(1)}}});_a(xa);function j2(t,e,n,i){const{extrapolateLeft:r,extrapolateRight:o,easing:s}=i;let a=t;const[l,u]=e,[c,d]=n;if(a<l){if(r==="identity")return a;if(r==="clamp")a=l;else if(r==="wrap"){const h=u-l;a=((a-l)%h+h)%h+l}}if(a>u){if(o==="identity")return a;if(o==="clamp")a=u;else if(o==="wrap"){const h=u-l;a=((a-l)%h+h)%h+l}}return c===d?c:(a=(a-l)/(u-l),a=s(a),a=a*(d-c)+c,a)}function $2(t,e){let n;for(n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}function X2(t){for(let e=1;e<t.length;++e)if(!(t[e]>t[e-1]))throw new Error(`inputRange must be strictly monotonically increasing but got [${t.join(",")}]`)}function Rv(t,e){if(e.length<2)throw new Error(t+" must have at least 2 elements");for(const n of e){if(typeof n!="number")throw new Error(`${t} must contain only numbers`);if(!Number.isFinite(n))throw new Error(`${t} must contain only finite numbers, but got [${e.join(",")}]`)}}function Y2(t,e,n,i){if(typeof t>"u")throw new Error("input can not be undefined");if(typeof e>"u")throw new Error("inputRange can not be undefined");if(typeof n>"u")throw new Error("outputRange can not be undefined");if(e.length!==n.length)throw new Error("inputRange ("+e.length+") and outputRange ("+n.length+") must have the same length");Rv("inputRange",e),Rv("outputRange",n),X2(e);const r=l=>l;let o="extend",s="extend";if(typeof t!="number")throw new TypeError("Cannot interpolate an input which is not a number");const a=$2(t,e);return j2(t,[e[a],e[a+1]],[n[a],n[a+1]],{easing:r,extrapolateLeft:o,extrapolateRight:s})}function q2(t){return!!t}typeof window<"u"&&(window.remotion_renderReady=!1);typeof window<"u"&&(window.remotion_delayRenderTimeouts={});var K2="The delayRender was called:",Z2="Retries left: ",J2="- Rendering the frame will be retried.",Q2={"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";"},Pv={},eL=t=>{Pv[t]||(console.warn(t),Pv[t]=!0)},tL=t=>{for(const e of Object.keys(Q2))if(t.includes(e))return{containsHex:!0,hexCode:e};return{containsHex:!1}},bf=t=>t.startsWith("/")?bf(t.substring(1)):t,nL=t=>{if(typeof window<"u"&&window.remotion_staticBase){if(t.startsWith(window.remotion_staticBase))throw new Error(`The value "${t}" is already prefixed with the static base ${window.remotion_staticBase}. You don't need to call staticFile() on it.`);return`${window.remotion_staticBase}/${bf(t)}`}return`/${bf(t)}`},iL=t=>t.split("/").map(r=>encodeURIComponent(r)).join("/"),rL=t=>{if(t===null)throw new TypeError("null was passed to staticFile()");if(typeof t>"u")throw new TypeError("undefined was passed to staticFile()");if(t.startsWith("http://")||t.startsWith("https://"))throw new TypeError(`staticFile() does not support remote URLs - got "${t}". Instead, pass the URL without wrapping it in staticFile(). See: https://remotion.dev/docs/staticfile-remote-urls`);if(t.startsWith("..")||t.startsWith("./"))throw new TypeError(`staticFile() does not support relative paths - got "${t}". Instead, pass the name of a file that is inside the public/ folder. See: https://remotion.dev/docs/staticfile-relative-paths`);if(t.startsWith("/Users")||t.startsWith("/home")||t.startsWith("/tmp")||t.startsWith("/etc")||t.startsWith("/opt")||t.startsWith("/var")||t.startsWith("C:")||t.startsWith("D:")||t.startsWith("E:"))throw new TypeError(`staticFile() does not support absolute paths - got "${t}". Instead, pass the name of a file that is inside the public/ folder. See: https://remotion.dev/docs/staticfile-relative-paths`);if(t.startsWith("public/"))throw new TypeError(`Do not include the public/ prefix when using staticFile() - got "${t}". See: https://remotion.dev/docs/staticfile-relative-paths`);const e=tL(t);e.containsHex&&eL(`WARNING: You seem to pass an already encoded path (path contains ${e.hexCode}). Since Remotion 4.0, the encoding is done by staticFile() itself. You may want to remove a encodeURIComponent() wrapping.`);const n=iL(t),i=nL(n);return i.startsWith("/")?i:`/${i}`},mu="remotion-date:",gu="remotion-file:",oL=({data:t,indent:e,staticBase:n})=>{let i=!1,r=!1,o=!1,s=!1;try{return{serializedString:JSON.stringify(t,function(l,u){const c=this[l];return c instanceof Date?(i=!0,`${mu}${c.toISOString()}`):c instanceof Map?(o=!0,u):c instanceof Set?(s=!0,u):typeof c=="string"&&n!==null&&c.startsWith(n)?(r=!0,`${gu}${c.replace(n+"/","")}`):u},e),customDateUsed:i,customFileUsed:r,mapUsed:o,setUsed:s}}catch(a){throw new Error("Could not serialize the passed input props to JSON: "+a.message)}},sL=t=>JSON.parse(t,(e,n)=>typeof n=="string"&&n.startsWith(mu)?new Date(n.replace(mu,"")):typeof n=="string"&&n.startsWith(gu)?rL(n.replace(gu,"")):n);function pl(...t){return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}function aL(){const t={rgb:void 0,rgba:void 0,hsl:void 0,hsla:void 0,hex3:void 0,hex4:void 0,hex5:void 0,hex6:void 0,hex8:void 0};return t.rgb===void 0&&(t.rgb=new RegExp("rgb"+pl(Vn,Vn,Vn)),t.rgba=new RegExp("rgba"+pl(Vn,Vn,Vn,Vn)),t.hsl=new RegExp("hsl"+pl(Vn,gl,gl)),t.hsla=new RegExp("hsla"+pl(Vn,gl,gl,Vn)),t.hex3=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,t.hex4=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,t.hex6=/^#([0-9a-fA-F]{6})$/,t.hex8=/^#([0-9a-fA-F]{8})$/),t}function dd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Lv(t,e,n){const i=n<.5?n*(1+e):n+e-n*e,r=2*n-i,o=dd(r,i,t+1/3),s=dd(r,i,t),a=dd(r,i,t-1/3);return Math.round(o*255)<<24|Math.round(s*255)<<16|Math.round(a*255)<<8}function fo(t){const e=Number.parseInt(t,10);return e<0?0:e>255?255:e}function Nv(t){return(Number.parseFloat(t)%360+360)%360/360}function Dv(t){const e=Number.parseFloat(t);return e<0?0:e>1?255:Math.round(e*255)}function ml(t){const e=Number.parseFloat(t);return e<0?0:e>100?1:e/100}function lL(t){const e=aL();let n;if(e.hex6&&(n=e.hex6.exec(t)))return Number.parseInt(n[1]+"ff",16)>>>0;if(Rf[t]!==void 0)return Rf[t];if(e.rgb&&(n=e.rgb.exec(t)))return(fo(n[1])<<24|fo(n[2])<<16|fo(n[3])<<8|255)>>>0;if(e.rgba&&(n=e.rgba.exec(t)))return(fo(n[1])<<24|fo(n[2])<<16|fo(n[3])<<8|Dv(n[4]))>>>0;if(e.hex3&&(n=e.hex3.exec(t)))return Number.parseInt(n[1]+n[1]+n[2]+n[2]+n[3]+n[3]+"ff",16)>>>0;if(e.hex8&&(n=e.hex8.exec(t)))return Number.parseInt(n[1],16)>>>0;if(e.hex4&&(n=e.hex4.exec(t)))return Number.parseInt(n[1]+n[1]+n[2]+n[2]+n[3]+n[3]+n[4]+n[4],16)>>>0;if(e.hsl&&(n=e.hsl.exec(t)))return(Lv(Nv(n[1]),ml(n[2]),ml(n[3]))|255)>>>0;if(e.hsla&&(n=e.hsla.exec(t)))return(Lv(Nv(n[1]),ml(n[2]),ml(n[3]))|Dv(n[4]))>>>0;throw new Error(`invalid color string ${t} provided`)}function uL(t){const e=lL(t);return(e<<24|e>>>8)>>>0}var Vn="[-+]?\\d*\\.?\\d+",gl=Vn+"%",Rf={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},cL=!1,dL=({allowFloats:t,durationInFrames:e,frame:n})=>{if(typeof n>"u")throw new TypeError('Argument missing for parameter "frame"');if(typeof n!="number")throw new TypeError(`Argument passed for "frame" is not a number: ${n}`);if(!Number.isFinite(n))throw new RangeError(`Frame ${n} is not finite`);if(n%1!==0&&!t)throw new RangeError(`Argument for frame must be an integer, but got ${n}`);if(n<0&&n<-e)throw new RangeError(`Cannot use frame ${n}: Duration of composition is ${e}, therefore the lowest frame that can be rendered is ${-e}`);if(n>e-1)throw new RangeError(`Cannot use frame ${n}: Duration of composition is ${e}, therefore the highest frame that can be rendered is ${e-1}`)},fL=(t,e,n)=>{if(t){if(typeof t!="object")throw new Error(`"${e}" must be an object, but you passed a value of type ${typeof t}`);if(Array.isArray(t))throw new Error(`"${e}" must be an object, an array was passed ${n?`for composition "${n}"`:""}`)}};function hL(t,e,n){if(typeof t!="number")throw new Error(`The "${e}" prop ${n} must be a number, but you passed a value of type ${typeof t}`);if(isNaN(t))throw new TypeError(`The "${e}" prop ${n} must not be NaN, but is NaN.`);if(!Number.isFinite(t))throw new TypeError(`The "${e}" prop ${n} must be finite, but is ${t}.`);if(t%1!==0)throw new TypeError(`The "${e}" prop ${n} must be an integer, but is ${t}.`);if(t<=0)throw new TypeError(`The "${e}" prop ${n} must be positive, but got ${t}.`)}function pL(t,e){const{allowFloats:n,component:i}=e;if(typeof t>"u")throw new Error(`The "durationInFrames" prop ${i} is missing.`);if(typeof t!="number")throw new Error(`The "durationInFrames" prop ${i} must be a number, but you passed a value of type ${typeof t}`);if(t<=0)throw new TypeError(`The "durationInFrames" prop ${i} must be positive, but got ${t}.`);if(!n&&t%1!==0)throw new TypeError(`The "durationInFrames" prop ${i} must be an integer, but got ${t}.`);if(!Number.isFinite(t))throw new TypeError(`The "durationInFrames" prop ${i} must be finite, but got ${t}.`)}function mL(t,e,n){if(typeof t!="number")throw new Error(`"fps" must be a number, but you passed a value of type ${typeof t} ${e}`);if(!Number.isFinite(t))throw new Error(`"fps" must be a finite, but you passed ${t} ${e}`);if(isNaN(t))throw new Error(`"fps" must not be NaN, but got ${t} ${e}`);if(t<=0)throw new TypeError(`"fps" must be positive, but got ${t} ${e}`);if(n&&t>50)throw new TypeError("The FPS for a GIF cannot be higher than 50. Use the --every-nth-frame option to lower the FPS: https://remotion.dev/docs/render-as-gif")}var gL=({frame:t,playbackRate:e,startFrom:n})=>Y2(t,[-1,n,n+1],[-1,n,n+e]),vL=t=>typeof window>"u"?t:new URL(t,window.origin).href,_L=({src:t,transparent:e,currentTime:n,toneMapped:i})=>`http://localhost:${window.remotion_proxyPort}/proxy?src=${encodeURIComponent(vL(t))}&time=${encodeURIComponent(n)}&transparent=${String(e)}&toneMapped=${String(i)}`,Yu={processColor:uL,truthy:q2,validateFps:mL,validateDimension:hL,validateDurationInFrames:pL,validateDefaultAndInputProps:fL,validateFrame:dL,serializeJSONWithDate:oL,bundleName:"bundle.js",bundleMapName:"bundle.js.map",deserializeJSONWithCustomFields:sL,DELAY_RENDER_CALLSTACK_TOKEN:K2,DELAY_RENDER_RETRY_TOKEN:J2,DELAY_RENDER_ATTEMPT_TOKEN:Z2,getOffthreadVideoSource:_L,getExpectedMediaFrameUncorrected:gL,ENABLE_V5_BREAKING_CHANGES:cL,MIN_NODE_VERSION:16,MIN_BUN_VERSION:"1.0.3",colorNames:Rf,DATE_TOKEN:mu,FILE_TOKEN:gu},Vt=25,Pf=16,yL=()=>b.jsx("svg",{width:Vt,height:Vt,viewBox:"0 0 25 25",fill:"none",children:b.jsx("path",{d:"M8 6.375C7.40904 8.17576 7.06921 10.2486 7.01438 12.3871C6.95955 14.5255 7.19163 16.6547 7.6875 18.5625C9.95364 18.2995 12.116 17.6164 14.009 16.5655C15.902 15.5147 17.4755 14.124 18.6088 12.5C17.5158 10.8949 15.9949 9.51103 14.1585 8.45082C12.3222 7.3906 10.2174 6.68116 8 6.375Z",fill:"white",stroke:"white",strokeWidth:"6.25",strokeLinejoin:"round"})}),xL=()=>b.jsxs("svg",{viewBox:"0 0 100 100",width:Vt,height:Vt,children:[b.jsx("rect",{x:"25",y:"20",width:"20",height:"60",fill:"#fff",ry:"5",rx:"5"}),b.jsx("rect",{x:"55",y:"20",width:"20",height:"60",fill:"#fff",ry:"5",rx:"5"})]}),SL=({isFullscreen:t})=>{const i=t?0:3,r=t?6*1.6:6/2,o=t?6*1.6:6*2;return b.jsxs("svg",{viewBox:"0 0 32 32",height:Pf,width:Pf,children:[b.jsx("path",{d:`
				M ${i} ${o}
				L ${r} ${r}
				L ${o} ${i}
				`,stroke:"#fff",strokeWidth:6,fill:"none"}),b.jsx("path",{d:`
				M ${32-i} ${o}
				L ${32-r} ${r}
				L ${32-o} ${i}
				`,stroke:"#fff",strokeWidth:6,fill:"none"}),b.jsx("path",{d:`
				M ${i} ${32-o}
				L ${r} ${32-r}
				L ${o} ${32-i}
				`,stroke:"#fff",strokeWidth:6,fill:"none"}),b.jsx("path",{d:`
				M ${32-i} ${32-o}
				L ${32-r} ${32-r}
				L ${32-o} ${32-i}
				`,stroke:"#fff",strokeWidth:6,fill:"none"})]})},EL=()=>b.jsx("svg",{width:Vt,height:Vt,viewBox:"0 0 24 24",children:b.jsx("path",{d:"M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 101.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12A4.5 4.5 0 0014 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z",fill:"#fff"})}),wL=()=>b.jsx("svg",{width:Vt,height:Vt,viewBox:"0 0 24 24",children:b.jsx("path",{d:"M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z",fill:"#fff"})}),Iv="__remotion_buffering_indicator",Uv="__remotion_buffering_animation",ML={width:Vt,height:Vt,overflow:"hidden",lineHeight:"normal",fontSize:"inherit"},TL={width:14,height:14,overflow:"hidden",lineHeight:"normal",fontSize:"inherit"},CL=({type:t})=>{const e=t==="player"?ML:TL;return b.jsxs(b.Fragment,{children:[b.jsx("style",{type:"text/css",children:`
				@keyframes ${Uv} {
          0% {
            rotate: 0deg;
          }
          100% {
            rotate: 360deg;
          }
        }
        
        .${Iv} {
            animation: ${Uv} 1s linear infinite;
        }        
			`}),b.jsx("div",{style:e,children:b.jsx("svg",{viewBox:t==="player"?"0 0 22 22":"0 0 18 18",style:e,className:Iv,children:b.jsx("path",{d:t==="player"?"M 11 4 A 7 7 0 0 1 15.1145 16.66312":"M 9 2 A 7 7 0 0 1 13.1145 14.66312",stroke:"white",strokeLinecap:"round",fill:"none",strokeWidth:3})})})]})},AL=({currentSize:t,width:e,height:n,compositionWidth:i,compositionHeight:r})=>e!==void 0&&n===void 0?{aspectRatio:[i,r].join("/")}:n!==void 0&&e===void 0?{aspectRatio:[i,r].join("/")}:t?{width:i,height:r}:{width:i,height:r},Ox=({previewSize:t,compositionWidth:e,compositionHeight:n,canvasSize:i})=>{const r=De.calculateScale({canvasSize:i,compositionHeight:n,compositionWidth:e,previewSize:t}),o=0-(1-r)/2,s=o*e,a=o*n,l=e*r,u=n*r,c=i.width/2-l/2,d=i.height/2-u/2;return{centerX:c,centerY:d,xCorrection:s,yCorrection:a,scale:r}},kx=({config:t,style:e,canvasSize:n,overflowVisible:i,layout:r})=>t?{position:"relative",overflow:i?"visible":"hidden",...AL({compositionHeight:t.height,compositionWidth:t.width,currentSize:n,height:e==null?void 0:e.height,width:e==null?void 0:e.width}),opacity:r?1:0,...e}:{},Bx=({config:t,canvasSize:e,layout:n,scale:i,overflowVisible:r})=>!t||!e||!n?{}:{position:"absolute",width:t.width,height:t.height,display:"flex",transform:`scale(${i})`,marginLeft:n.xCorrection,marginTop:n.yCorrection,overflow:r?"visible":"hidden"},zx=({layout:t,scale:e,config:n,overflowVisible:i})=>{if(!t||!n)return{};const{centerX:r,centerY:o}=t;return{width:n.width*e,height:n.height*e,display:"flex",flexDirection:"column",position:"absolute",left:r,top:o,overflow:i?"visible":"hidden"}},Vx=Ge.createContext(void 0),Hx=Ge.createContext(void 0);class bL{constructor(){Ta(this,"listeners",{ended:[],error:[],pause:[],play:[],ratechange:[],scalechange:[],seeked:[],timeupdate:[],frameupdate:[],fullscreenchange:[],volumechange:[],mutechange:[],waiting:[],resume:[]})}addEventListener(e,n){this.listeners[e].push(n)}removeEventListener(e,n){this.listeners[e]=this.listeners[e].filter(i=>i!==n)}dispatchEvent(e,n){this.listeners[e].forEach(i=>{i({detail:n})})}dispatchSeek(e){this.dispatchEvent("seeked",{frame:e})}dispatchVolumeChange(e){this.dispatchEvent("volumechange",{volume:e})}dispatchPause(){this.dispatchEvent("pause",void 0)}dispatchPlay(){this.dispatchEvent("play",void 0)}dispatchEnded(){this.dispatchEvent("ended",void 0)}dispatchRateChange(e){this.dispatchEvent("ratechange",{playbackRate:e})}dispatchScaleChange(e){this.dispatchEvent("scalechange",{scale:e})}dispatchError(e){this.dispatchEvent("error",{error:e})}dispatchTimeUpdate(e){this.dispatchEvent("timeupdate",e)}dispatchFrameUpdate(e){this.dispatchEvent("frameupdate",e)}dispatchFullscreenChange(e){this.dispatchEvent("fullscreenchange",e)}dispatchMuteChange(e){this.dispatchEvent("mutechange",e)}dispatchWaiting(e){this.dispatchEvent("waiting",e)}dispatchResume(e){this.dispatchEvent("resume",e)}}class RL{constructor(){Ta(this,"listeners",{error:[],waiting:[],resume:[]})}addEventListener(e,n){this.listeners[e].push(n)}removeEventListener(e,n){this.listeners[e]=this.listeners[e].filter(i=>i!==n)}dispatchEvent(e,n){this.listeners[e].forEach(i=>{i({detail:n})})}dispatchError(e){this.dispatchEvent("error",{error:e})}dispatchWaiting(e){this.dispatchEvent("waiting",e)}dispatchResume(e){this.dispatchEvent("resume",e)}}var Gx=t=>{const e=y.useContext(De.BufferingContextReact);if(!e)throw new Error("BufferingContextReact not found");y.useEffect(()=>{const n=e.listenForBuffering(()=>{e.buffering.current=!0,t.dispatchWaiting({})}),i=e.listenForResume(()=>{e.buffering.current=!1,t.dispatchResume({})});return()=>{n.remove(),i.remove()}},[e,t])},PL=({children:t,currentPlaybackRate:e})=>{const[n]=y.useState(()=>new bL);if(!y.useContext(De.BufferingContextReact))throw new Error("BufferingContextReact not found");return y.useEffect(()=>{e&&n.dispatchRateChange(e)},[n,e]),Gx(n),b.jsx(Vx.Provider,{value:n,children:t})},ap=(t,e)=>{const[n,i]=y.useState(!1);return y.useEffect(()=>{const{current:r}=t;if(!r)return;let o;const s=()=>{e&&(clearTimeout(o),o=setTimeout(()=>{i(!1)},e===!0?3e3:e))},a=()=>{i(!0),s()},l=()=>{i(!1),clearTimeout(o)},u=()=>{i(!0),s()};return r.addEventListener("mouseenter",a),r.addEventListener("mouseleave",l),r.addEventListener("mousemove",u),()=>{r.removeEventListener("mouseenter",a),r.removeEventListener("mouseleave",l),r.removeEventListener("mousemove",u),clearTimeout(o)}},[e,t]),n},qu=()=>{const[t,e,n]=De.Timeline.usePlayingState(),[i,r]=y.useState(!1),o=De.Timeline.useTimelinePosition(),s=y.useRef(o),a=De.Timeline.useTimelineSetFrame(),l=De.Timeline.useTimelineSetFrame(),u=y.useContext(De.SharedAudioContext),{audioAndVideoTags:c}=y.useContext(De.Timeline.TimelineContext),d=y.useRef(o);d.current=o;const h=De.useVideo(),g=De.useUnsafeVideoConfig(),_=y.useContext(Vx),S=((g==null?void 0:g.durationInFrames)??1)-1,p=o===S,f=o===0;if(!_)throw new TypeError("Expected Player event emitter context");const m=y.useContext(De.BufferingContextReact);if(!m)throw new Error("Missing the buffering context. Most likely you have a Remotion version mismatch.");const{buffering:v}=m,E=y.useCallback(k=>{h!=null&&h.id&&l(z=>({...z,[h.id]:k})),d.current=k,_.dispatchSeek(k)},[_,l,h==null?void 0:h.id]),M=y.useCallback(k=>{n.current||(r(!0),p&&E(0),u&&u.numberOfAudioTags>0&&k&&u.playAllAudios(),c.current.forEach(z=>z.play()),n.current=!0,e(!0),s.current=d.current,_.dispatchPlay())},[n,p,u,e,_,E,c]),w=y.useCallback(()=>{n.current&&(n.current=!1,e(!1),_.dispatchPause())},[_,n,e]),T=y.useCallback(()=>{n.current&&(n.current=!1,d.current=s.current,g&&(l(k=>({...k,[g.id]:s.current})),e(!1),_.dispatchPause()))},[g,_,n,e,l]),L=h==null?void 0:h.id,B=y.useCallback(k=>{if(!L)return null;n.current||a(z=>{const D=z[L]??window.remotion_initialFrame??0;return{...z,[L]:Math.max(0,D-k)}})},[n,a,L]),x=y.useCallback(k=>{if(!L)return null;n.current||a(z=>{const D=z[L]??window.remotion_initialFrame??0;return{...z,[L]:Math.min(S,D+k)}})},[L,n,S,a]);return y.useMemo(()=>({frameBack:B,frameForward:x,isLastFrame:p,emitter:_,playing:t,play:M,pause:w,seek:E,isFirstFrame:f,getCurrentFrame:()=>d.current,isPlaying:()=>n.current,isBuffering:()=>v.current,pauseAndReturnToPlayStart:T,hasPlayed:i,remotionInternal_currentFrameRef:d}),[B,x,p,_,t,M,w,E,f,T,i,n,v])},LL=({browserMediaControlsBehavior:t,videoConfig:e,playbackRate:n})=>{const{playing:i,pause:r,play:o,emitter:s,getCurrentFrame:a,seek:l}=qu();y.useEffect(()=>{navigator.mediaSession&&t.mode!=="do-nothing"&&(i?navigator.mediaSession.playbackState="playing":navigator.mediaSession.playbackState="paused")},[t.mode,i]),y.useEffect(()=>{if(!navigator.mediaSession||t.mode==="do-nothing")return;const u=()=>{e&&navigator.mediaSession&&navigator.mediaSession.setPositionState({duration:e.durationInFrames/e.fps,playbackRate:n,position:a()/e.fps})};return s.addEventListener("timeupdate",u),()=>{s.removeEventListener("timeupdate",u)}},[t.mode,s,a,n,e]),y.useEffect(()=>{if(navigator.mediaSession&&t.mode!=="do-nothing")return navigator.mediaSession.setActionHandler("play",()=>{t.mode==="register-media-session"&&o()}),navigator.mediaSession.setActionHandler("pause",()=>{t.mode==="register-media-session"&&r()}),navigator.mediaSession.setActionHandler("seekto",u=>{t.mode==="register-media-session"&&u.seekTime!==void 0&&e&&l(Math.round(u.seekTime*e.fps))}),navigator.mediaSession.setActionHandler("seekbackward",()=>{t.mode==="register-media-session"&&e&&l(Math.max(0,Math.round((a()-10)*e.fps)))}),navigator.mediaSession.setActionHandler("seekforward",()=>{t.mode==="register-media-session"&&e&&l(Math.max(e.durationInFrames-1,Math.round((a()+10)*e.fps)))}),navigator.mediaSession.setActionHandler("previoustrack",()=>{t.mode==="register-media-session"&&l(0)}),()=>{navigator.mediaSession.metadata=null,navigator.mediaSession.setActionHandler("play",null),navigator.mediaSession.setActionHandler("pause",null),navigator.mediaSession.setActionHandler("seekto",null),navigator.mediaSession.setActionHandler("seekbackward",null),navigator.mediaSession.setActionHandler("seekforward",null),navigator.mediaSession.setActionHandler("previoustrack",null)}},[t.mode,a,r,o,l,e])},NL=({time:t,currentFrame:e,playbackSpeed:n,fps:i,actualLastFrame:r,actualFirstFrame:o,framesAdvanced:s,shouldLoop:a})=>{const u=(n<0?Math.ceil:Math.floor)(t*n/(1e3/i))-s,c=u+e,d=e>r||e<o,h=c>r||c<o,g=!a&&h&&!d;return n>0?h?{nextFrame:o,framesToAdvance:u,hasEnded:g}:{nextFrame:c,framesToAdvance:u,hasEnded:g}:h?{nextFrame:r,framesToAdvance:u,hasEnded:g}:{nextFrame:c,framesToAdvance:u,hasEnded:g}},Fv=()=>typeof document>"u"?!1:document.visibilityState==="hidden",DL=()=>{const t=y.useRef(Fv());return y.useEffect(()=>{const e=()=>{t.current=Fv()};return document.addEventListener("visibilitychange",e),()=>{document.removeEventListener("visibilitychange",e)}},[]),t},IL=({loop:t,playbackRate:e,moveToBeginningWhenEnded:n,inFrame:i,outFrame:r,frameRef:o,browserMediaControlsBehavior:s})=>{const a=De.useUnsafeVideoConfig(),l=De.Timeline.useTimelinePosition(),{playing:u,pause:c,emitter:d}=qu(),h=De.Timeline.useTimelineSetFrame(),g=y.useRef(null),_=DL(),S=y.useRef(null),p=y.useContext(De.BufferingContextReact);if(!p)throw new Error("Missing the buffering context. Most likely you have a Remotion version mismatch.");LL({browserMediaControlsBehavior:s,playbackRate:e,videoConfig:a}),y.useEffect(()=>{const f=p.listenForBuffering(()=>{g.current=performance.now()}),m=p.listenForResume(()=>{g.current=null});return()=>{f.remove(),m.remove()}},[p]),y.useEffect(()=>{if(!a||!u)return;let f=!1,m=null,v=performance.now(),E=0;const M=()=>{m!==null&&(m.type==="raf"?cancelAnimationFrame(m.id):clearTimeout(m.id))},w=()=>{f=!0,M()},T=()=>{const x=performance.now()-v,A=r??a.durationInFrames-1,k=i??0,z=o.current,{nextFrame:D,framesToAdvance:G,hasEnded:F}=NL({time:x,currentFrame:z,playbackSpeed:e,fps:a.fps,actualFirstFrame:k,actualLastFrame:A,framesAdvanced:E,shouldLoop:t});if(E+=G,D!==o.current&&(!F||n)&&h(Z=>({...Z,[a.id]:D})),F){w(),c(),d.dispatchEnded();return}f||L()},L=()=>{if(g.current){const x=p.listenForResume(()=>{x.remove(),!f&&(v=performance.now(),E=0,T())});return}_.current?m={type:"timeout",id:setTimeout(T,1e3/a.fps)}:m={type:"raf",id:requestAnimationFrame(T)}};L();const B=()=>{document.visibilityState!=="visible"&&(M(),T())};return window.addEventListener("visibilitychange",B),()=>{window.removeEventListener("visibilitychange",B),w()}},[a,t,c,u,h,d,e,i,r,n,_,o,g,p]),y.useEffect(()=>{const f=setInterval(()=>{S.current!==o.current&&(d.dispatchTimeUpdate({frame:o.current}),S.current=o.current)},250);return()=>clearInterval(f)},[d,o]),y.useEffect(()=>{d.dispatchFrameUpdate({frame:l})},[d,l])},fd=[],lp=(t,e)=>{const[n,i]=y.useState(()=>{if(!t.current)return null;const s=t.current.getClientRects();return s[0]?{width:s[0].width,height:s[0].height,left:s[0].x,top:s[0].y,windowSize:{height:window.innerHeight,width:window.innerWidth}}:null}),r=y.useMemo(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(s=>{const{contentRect:a,target:l}=s[0],u=l.getClientRects();if(!(u!=null&&u[0])){i(null);return}const c=a.width===0?1:u[0].width/a.width,d=e.shouldApplyCssTransforms?u[0].width:u[0].width*(1/c),h=e.shouldApplyCssTransforms?u[0].height:u[0].height*(1/c);i({width:d,height:h,left:u[0].x,top:u[0].y,windowSize:{height:window.innerHeight,width:window.innerWidth}})}),[e.shouldApplyCssTransforms]),o=y.useCallback(()=>{if(!t.current)return;const s=t.current.getClientRects();if(!s[0]){i(null);return}i(a=>a&&a.width===s[0].width&&a.height===s[0].height&&a.left===s[0].x&&a.top===s[0].y&&a.windowSize.height===window.innerHeight&&a.windowSize.width===window.innerWidth?a:{width:s[0].width,height:s[0].height,left:s[0].x,top:s[0].y,windowSize:{height:window.innerHeight,width:window.innerWidth}})},[t]);return y.useEffect(()=>{if(!r)return;const{current:s}=t;return s&&r.observe(s),()=>{s&&r.unobserve(s)}},[r,t,o]),y.useEffect(()=>{if(e.triggerOnWindowResize)return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[e.triggerOnWindowResize,o]),y.useEffect(()=>(fd.push(o),()=>{fd=fd.filter(s=>s!==o)}),[o]),y.useMemo(()=>n?{...n,refresh:o}:null,[n,o])},Ov=({playing:t,buffering:e})=>t&&e?b.jsx(CL,{type:"player"}):t?b.jsx(xL,{}):b.jsx(yL,{}),ho=12,kv=5,UL=({volume:t,isVertical:e,onBlur:n,inputRef:i,setVolume:r})=>{const o=y.useMemo(()=>{const h={paddingLeft:5,height:Vt,width:Pr,display:"inline-flex",alignItems:"center"};return e?{...h,position:"absolute",transform:`rotate(-90deg) translateX(${Pr/2+Vt/2}px)`}:{...h}},[e]),s=typeof Ge.useId>"u"?"volume-slider":Ge.useId(),[a]=y.useState(()=>`__remotion-volume-slider-${us(s)}`.replace(".","")),l=y.useCallback(d=>{r(parseFloat(d.target.value))},[r]),u=y.useMemo(()=>{const d={WebkitAppearance:"none",backgroundColor:"rgba(255, 255, 255, 0.5)",borderRadius:kv/2,cursor:"pointer",height:kv,width:Pr,backgroundImage:`linear-gradient(
				to right,
				white ${t*100}%, rgba(255, 255, 255, 0) ${t*100}%
			)`};return e?{...d,bottom:Vt+Pr/2}:d},[e,t]),c=`
	.${a}::-webkit-slider-thumb {
		-webkit-appearance: none;
		background-color: white;
		border-radius: ${ho/2}px;
		box-shadow: 0 0 2px black;
		height: ${ho}px;
		width: ${ho}px;
	}

	.${a}::-moz-range-thumb {
		-webkit-appearance: none;
		background-color: white;
		border-radius: ${ho/2}px;
		box-shadow: 0 0 2px black;
		height: ${ho}px;
		width: ${ho}px;
	}
`;return b.jsxs("div",{style:o,children:[b.jsx("style",{dangerouslySetInnerHTML:{__html:c}}),b.jsx("input",{ref:i,"aria-label":"Change volume",className:a,max:1,min:0,onBlur:n,onChange:l,step:.01,type:"range",value:t,style:u})]})},FL=t=>b.jsx(UL,{...t}),Pr=100,OL=({displayVerticalVolumeSlider:t,renderMuteButton:e,renderVolumeSlider:n})=>{const[i,r]=De.useMediaMutedState(),[o,s]=De.useMediaVolumeState(),[a,l]=y.useState(!1),u=y.useRef(null),c=y.useRef(null),d=ap(u,!1),h=y.useCallback(()=>{setTimeout(()=>{c.current&&document.activeElement!==c.current&&l(!1)},10)},[]),g=o===0,_=y.useCallback(()=>{if(g){s(1),r(!1);return}r(E=>!E)},[g,r,s]),S=y.useMemo(()=>({display:"inline-flex",background:"none",border:"none",justifyContent:"center",alignItems:"center",touchAction:"none",...t&&{position:"relative"}}),[t]),p=y.useMemo(()=>({display:"inline",width:Vt,height:Vt,cursor:"pointer",appearance:"none",background:"none",border:"none",padding:0}),[]),f=y.useCallback(({muted:E,volume:M})=>{const w=E||M===0;return b.jsx("button",{"aria-label":w?"Unmute sound":"Mute sound",title:w?"Unmute sound":"Mute sound",onClick:_,onBlur:h,onFocus:()=>l(!0),style:p,type:"button",children:w?b.jsx(EL,{}):b.jsx(wL,{})})},[h,_,p]),m=y.useMemo(()=>e?e({muted:i,volume:o}):f({muted:i,volume:o}),[i,o,f,e]),v=y.useMemo(()=>(a||d)&&!i&&!De.isIosSafari()?(n??FL)({isVertical:t,volume:o,onBlur:()=>l(!1),inputRef:c,setVolume:s}):null,[t,a,d,i,o,n,s]);return b.jsxs("div",{ref:u,style:S,children:[m,v]})};function kL(t){const[e,n]=y.useState(t),i=y.useRef(null);return y.useEffect(()=>{const r=o=>{i.current&&!i.current.contains(o.target)&&n(!1)};return document.addEventListener("pointerup",r,!0),()=>{document.removeEventListener("pointerup",r,!0)}},[]),{ref:i,isComponentVisible:e,setIsComponentVisible:n}}var BL=35,zL=70,VL={height:30,paddingRight:15,paddingLeft:12,display:"flex",flexDirection:"row",alignItems:"center"},HL={width:22,display:"flex",alignItems:"center"},GL={width:14,height:14,color:"black"},WL=()=>b.jsx("svg",{viewBox:"0 0 512 512",style:GL,children:b.jsx("path",{fill:"currentColor",d:"M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"})}),jL=({rate:t,onSelect:e,selectedRate:n,keyboardSelectedRate:i})=>{const r=y.useCallback(d=>{d.stopPropagation(),d.preventDefault(),e(t)},[e,t]),[o,s]=y.useState(!1),a=y.useCallback(()=>{s(!0)},[]),l=y.useCallback(()=>{s(!1)},[]),u=i===t,c=y.useMemo(()=>({...VL,backgroundColor:o||u?"#eee":"transparent"}),[o,u]);return b.jsxs("div",{onMouseEnter:a,onMouseLeave:l,tabIndex:0,style:c,onClick:r,children:[b.jsx("div",{style:HL,children:t===n?b.jsx(WL,{}):null}),t.toFixed(1),"x"]},t)},$L=({setIsComponentVisible:t,playbackRates:e,canvasSize:n})=>{const{setPlaybackRate:i,playbackRate:r}=y.useContext(De.Timeline.TimelineContext),[o,s]=y.useState(r);y.useEffect(()=>{const u=c=>{if(c.preventDefault(),c.key==="ArrowUp"){const d=e.findIndex(h=>h===o);if(d===0)return;s(d===-1?e[0]:e[d-1])}else if(c.key==="ArrowDown"){const d=e.findIndex(h=>h===o);if(d===e.length-1)return;s(d===-1?e[e.length-1]:e[d+1])}else c.key==="Enter"&&(i(o),t(!1))};return window.addEventListener("keydown",u),()=>{window.removeEventListener("keydown",u)}},[e,o,i,t]);const a=y.useCallback(u=>{i(u),t(!1)},[t,i]),l=y.useMemo(()=>({position:"absolute",right:0,width:125,maxHeight:n.height-zL-BL,bottom:35,background:"#fff",borderRadius:4,overflow:"auto",color:"black",textAlign:"left"}),[n.height]);return b.jsx("div",{style:l,children:e.map(u=>b.jsx(jL,{selectedRate:r,onSelect:a,rate:u,keyboardSelectedRate:o},u))})},XL={fontSize:13,fontWeight:"bold",color:"white",border:"2px solid white",borderRadius:20,paddingLeft:8,paddingRight:8,paddingTop:2,paddingBottom:2},Lf={appearance:"none",backgroundColor:"transparent",border:"none",cursor:"pointer",paddingLeft:0,paddingRight:0,paddingTop:6,paddingBottom:6,height:37,display:"inline-flex",marginBottom:0,marginTop:0,alignItems:"center"},YL={...Lf,position:"relative"},qL=({playbackRates:t,canvasSize:e})=>{const{ref:n,isComponentVisible:i,setIsComponentVisible:r}=kL(!1),{playbackRate:o}=y.useContext(De.Timeline.TimelineContext),s=y.useCallback(a=>{a.stopPropagation(),a.preventDefault(),r(l=>!l)},[r]);return b.jsx("div",{ref:n,children:b.jsxs("button",{type:"button","aria-label":"Change playback rate",style:YL,onClick:s,children:[b.jsxs("div",{style:XL,children:[o,"x"]}),i&&b.jsx($L,{canvasSize:e,playbackRates:t,setIsComponentVisible:r})]})})},Bv=(t,e,n)=>Math.round(wx(t,[0,n],[0,e-1],{extrapolateLeft:"clamp",extrapolateRight:"clamp"})),bo=5,As=12,Nf=4,KL={userSelect:"none",WebkitUserSelect:"none",paddingTop:Nf,paddingBottom:Nf,boxSizing:"border-box",cursor:"pointer",position:"relative",touchAction:"none"},ZL={height:bo,backgroundColor:"rgba(255, 255, 255, 0.25)",width:"100%",borderRadius:bo/2},JL=t=>{let e=t;for(;e.parentElement;)e=e.parentElement;return e},QL=({durationInFrames:t,onSeekEnd:e,onSeekStart:n,inFrame:i,outFrame:r})=>{const o=y.useRef(null),s=ap(o,!1),a=lp(o,{triggerOnWindowResize:!0,shouldApplyCssTransforms:!0}),{seek:l,play:u,pause:c,playing:d}=qu(),h=De.Timeline.useTimelinePosition(),[g,_]=y.useState({dragging:!1}),S=(a==null?void 0:a.width)??0,p=y.useCallback(w=>{var B;if(w.button!==0)return;const T=(B=o.current)==null?void 0:B.getBoundingClientRect().left,L=Bv(w.clientX-T,t,S);c(),l(L),_({dragging:!0,wasPlaying:d}),n()},[t,S,c,l,d,n]),f=y.useCallback(w=>{var B;if(!a)throw new Error("Player has no size");if(!g.dragging)return;const T=(B=o.current)==null?void 0:B.getBoundingClientRect().left,L=Bv(w.clientX-T,t,a.width);l(L)},[g.dragging,t,l,a]),m=y.useCallback(()=>{_({dragging:!1}),g.dragging&&(g.wasPlaying?u():c(),e())},[g,e,c,u]);y.useEffect(()=>{if(!g.dragging)return;const w=JL(o.current);return w.addEventListener("pointermove",f),w.addEventListener("pointerup",m),()=>{w.removeEventListener("pointermove",f),w.removeEventListener("pointerup",m)}},[g.dragging,f,m]);const v=y.useMemo(()=>({height:As,width:As,borderRadius:As/2,position:"absolute",top:Nf-As/2+5/2,backgroundColor:"white",left:Math.max(0,h/Math.max(1,t-1)*S-As/2),boxShadow:"0 0 2px black",opacity:Number(s)}),[s,t,h,S]),E=y.useMemo(()=>({height:bo,backgroundColor:"rgba(255, 255, 255, 1)",width:(h-(i??0))/(t-1)*100+"%",marginLeft:(i??0)/(t-1)*100+"%",borderRadius:bo/2}),[t,h,i]),M=y.useMemo(()=>({height:bo,backgroundColor:"rgba(255, 255, 255, 0.25)",width:((r??t-1)-(i??0))/(t-1)*100+"%",marginLeft:(i??0)/(t-1)*100+"%",borderRadius:bo/2,position:"absolute"}),[t,i,r]);return b.jsxs("div",{ref:o,onPointerDown:p,style:KL,children:[b.jsxs("div",{style:ZL,children:[b.jsx("div",{style:M}),b.jsx("div",{style:E})]}),b.jsx("div",{style:v})]})},zv=t=>{const e=Math.floor(t/60),n=Math.floor(t-e*60);return`${String(e)}:${String(n).padStart(2,"0")}`},e3=10,Df=12,t3=({allowFullscreen:t,playerWidth:e})=>y.useMemo(()=>{const i=Vt,r=Vt,o=t?Pf:0,s=r+i+o+Df*2+e3*2,a=e-s,l=Math.max(a,0),u=l-Pr,d=(u<Pr?l:u)+s+Pr,h=e<d;return{maxTimeLabelWidth:l===0?null:l,displayVerticalVolumeSlider:h}},[t,e]),n3=[0,.013,.049,.104,.175,.259,.352,.45,.55,.648,.741,.825,.896,.951,.987],i3=[0,8.1,15.5,22.5,29,35.3,41.2,47.1,52.9,58.8,64.7,71,77.5,84.5,91.9],r3=1/.7,o3={boxSizing:"border-box",position:"absolute",bottom:0,width:"100%",paddingTop:40,paddingBottom:10,backgroundImage:`linear-gradient(to bottom,${n3.map((t,e)=>`hsla(0, 0%, 0%, ${t}) ${i3[e]*r3}%`).join(", ")}, hsl(0, 0%, 0%) 100%)`,backgroundSize:"auto 145px",display:"flex",paddingRight:Df,paddingLeft:Df,flexDirection:"column",transition:"opacity 0.3s"},s3={display:"flex",flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center",userSelect:"none",WebkitUserSelect:"none"},a3={display:"flex",flexDirection:"row",userSelect:"none",WebkitUserSelect:"none",alignItems:"center"},vl={width:12},l3={height:8},u3={flex:1},c3={},d3=({durationInFrames:t,isFullscreen:e,fps:n,player:i,showVolumeControls:r,onFullscreenButtonClick:o,allowFullscreen:s,onExitFullscreenButtonClick:a,spaceKeyToPlayOrPause:l,onSeekEnd:u,onSeekStart:c,inFrame:d,outFrame:h,initiallyShowControls:g,canvasSize:_,renderPlayPauseButton:S,renderFullscreenButton:p,alwaysShowControls:f,showPlaybackRateControl:m,containerRef:v,buffering:E,hideControlsWhenPointerDoesntMove:M,onPointerDown:w,onDoubleClick:T,renderMuteButton:L,renderVolumeSlider:B})=>{const x=y.useRef(null),A=De.Timeline.useTimelinePosition(),[k,z]=y.useState(!1),D=ap(v,M),{maxTimeLabelWidth:G,displayVerticalVolumeSlider:F}=t3({allowFullscreen:s,playerWidth:(_==null?void 0:_.width)??0}),[Z,U]=y.useState(()=>{if(typeof g=="boolean")return g;if(typeof g=="number"){if(g%1!==0)throw new Error("initiallyShowControls must be an integer or a boolean");if(Number.isNaN(g))throw new Error("initiallyShowControls must not be NaN");if(!Number.isFinite(g))throw new Error("initiallyShowControls must be finite");if(g<=0)throw new Error("initiallyShowControls must be a positive integer");return g}throw new TypeError("initiallyShowControls must be a number or a boolean")}),O=y.useMemo(()=>{const ne=D||!i.playing||Z||f;return{...o3,opacity:Number(ne)}},[D,Z,i.playing,f]);y.useEffect(()=>{x.current&&l&&x.current.focus({preventScroll:!0})},[i.playing,l]),y.useEffect(()=>{z((typeof document<"u"&&(document.fullscreenEnabled||document.webkitFullscreenEnabled))??!1)},[]),y.useEffect(()=>{if(Z===!1)return;const de=setTimeout(()=>{U(!1)},Z===!0?2e3:Z);return()=>{clearInterval(de)}},[Z]);const H=y.useMemo(()=>({color:"white",fontFamily:"sans-serif",fontSize:14,maxWidth:G===null?void 0:G,overflow:"hidden",textOverflow:"ellipsis"}),[G]),X=y.useMemo(()=>{if(m===!0)return[.5,.8,1,1.2,1.5,1.8,2,2.5,3];if(Array.isArray(m)){for(const ne of m){if(typeof ne!="number")throw new Error("Every item in showPlaybackRateControl must be a number");if(ne<=0)throw new Error("Every item in showPlaybackRateControl must be positive")}return m}return null},[m]),Q=y.useRef(null),ge=y.useRef(null),j=y.useCallback(ne=>{(ne.target===Q.current||ne.target===ge.current)&&(w==null||w(ne))},[w]),K=y.useCallback(ne=>{(ne.target===Q.current||ne.target===ge.current)&&(T==null||T(ne))},[T]);return b.jsxs("div",{ref:Q,style:O,onPointerDown:j,onDoubleClick:K,children:[b.jsxs("div",{ref:ge,style:s3,children:[b.jsxs("div",{style:a3,children:[b.jsx("button",{ref:x,type:"button",style:Lf,onClick:i.playing?i.pause:i.play,"aria-label":i.playing?"Pause video":"Play video",title:i.playing?"Pause video":"Play video",children:S===null?b.jsx(Ov,{buffering:E,playing:i.playing}):S({playing:i.playing,isBuffering:E})??b.jsx(Ov,{buffering:E,playing:i.playing})}),r?b.jsxs(b.Fragment,{children:[b.jsx("div",{style:vl}),b.jsx(OL,{renderMuteButton:L,renderVolumeSlider:B,displayVerticalVolumeSlider:F})]}):null,b.jsx("div",{style:vl}),b.jsxs("div",{style:H,children:[zv(A/n)," / ",zv(t/n)]}),b.jsx("div",{style:vl})]}),b.jsx("div",{style:u3}),X&&_&&b.jsx(qL,{canvasSize:_,playbackRates:X}),X&&k&&s?b.jsx("div",{style:vl}):null,b.jsx("div",{style:c3,children:k&&s?b.jsx("button",{type:"button","aria-label":e?"Exit fullscreen":"Enter Fullscreen",title:e?"Exit fullscreen":"Enter Fullscreen",style:Lf,onClick:e?a:o,children:p===null?b.jsx(SL,{isFullscreen:e}):p({isFullscreen:e})}):null})]}),b.jsx("div",{style:l3}),b.jsx(QL,{onSeekEnd:u,onSeekStart:c,durationInFrames:t,inFrame:d,outFrame:h})]})},f3={display:"flex",justifyContent:"center",alignItems:"center",flex:1,height:"100%",width:"100%"};class Wx extends Ge.Component{constructor(){super(...arguments);Ta(this,"state",{hasError:null})}static getDerivedStateFromError(n){return{hasError:n}}componentDidCatch(n){this.props.onError(n)}render(){return this.state.hasError?b.jsx("div",{style:f3,children:this.props.errorFallback({error:this.state.hasError})}):this.props.children}}var up="__remotion-player",jx=typeof document>"u",h3=t=>{let e=!1;return{promise:new Promise((i,r)=>{t.then(o=>{if(e){r({isCanceled:e,value:o});return}i(o)}).catch(o=>{r({isCanceled:e,error:o})})}),cancel:()=>{e=!0}}},p3=t=>new Promise(e=>setTimeout(e,t)),m3=()=>{const t=y.useRef([]),e=y.useCallback(o=>{t.current=[...t.current,o]},[]),n=y.useCallback(o=>{t.current=t.current.filter(s=>s!==o)},[]),i=y.useCallback(()=>t.current.map(o=>o.cancel()),[]);return y.useMemo(()=>({appendPendingPromise:e,removePendingPromise:n,clearPendingPromises:i}),[e,i,n])},g3=(t,e,n)=>{const i=m3(),r=y.useCallback(async l=>{if(l instanceof PointerEvent?l.pointerType==="touch":l.nativeEvent.pointerType==="touch"){t(l);return}i.clearPendingPromises();const u=h3(p3(200));i.appendPendingPromise(u);try{await u.promise,i.removePendingPromise(u),t(l)}catch(c){const d=c;if(i.removePendingPromise(u),!d.isCanceled)throw d.error}},[i,t]),o=y.useCallback(()=>{document.addEventListener("pointerup",l=>{r(l)},{once:!0})},[r]),s=y.useCallback(()=>{i.clearPendingPromises(),e()},[i,e]);return y.useMemo(()=>n?{handlePointerDown:o,handleDoubleClick:s}:{handlePointerDown:t,handleDoubleClick:()=>{}},[n,s,o,t])},If=Ge.version.split(".")[0];if(If==="0")throw new Error(`Version ${If} of "react" is not supported by Remotion`);var v3=parseInt(If,10)>=18,_3=({controls:t,style:e,loop:n,autoPlay:i,allowFullscreen:r,inputProps:o,clickToPlay:s,showVolumeControls:a,doubleClickToFullscreen:l,spaceKeyToPlayOrPause:u,errorFallback:c,playbackRate:d,renderLoading:h,renderPoster:g,className:_,moveToBeginningWhenEnded:S,showPosterWhenUnplayed:p,showPosterWhenEnded:f,showPosterWhenPaused:m,showPosterWhenBuffering:v,inFrame:E,outFrame:M,initiallyShowControls:w,renderFullscreen:T,renderPlayPauseButton:L,renderMuteButton:B,renderVolumeSlider:x,alwaysShowControls:A,showPlaybackRateControl:k,posterFillMode:z,bufferStateDelayInMilliseconds:D,hideControlsWhenPointerDoesntMove:G,overflowVisible:F,browserMediaControlsBehavior:Z},U)=>{const O=De.useUnsafeVideoConfig(),H=De.useVideo(),X=y.useRef(null),Q=lp(X,{triggerOnWindowResize:!1,shouldApplyCssTransforms:!1}),[ge,j]=y.useState(!1),[K,ne]=y.useState(i),[de,ye]=y.useState(()=>!1),[ve,ze]=y.useState(!1),be=y.useMemo(()=>typeof document>"u"?!1:!!(document.fullscreenEnabled||document.webkitFullscreenEnabled),[]),I=qu();IL({loop:n,playbackRate:d,moveToBeginningWhenEnded:S,inFrame:E,outFrame:M,frameRef:I.remotionInternal_currentFrameRef,browserMediaControlsBehavior:Z}),y.useEffect(()=>{ge&&!I.playing&&(j(!1),I.play())},[ge,I]),y.useEffect(()=>{const{current:Te}=X;if(!Te)return;const Ue=()=>{const vt=document.fullscreenElement===Te||document.webkitFullscreenElement===Te;ye(vt)};return document.addEventListener("fullscreenchange",Ue),document.addEventListener("webkitfullscreenchange",Ue),()=>{document.removeEventListener("fullscreenchange",Ue),document.removeEventListener("webkitfullscreenchange",Ue)}},[]);const nt=y.useCallback(Te=>{I.isPlaying()?I.pause():I.play(Te)},[I]),_e=y.useCallback(()=>{if(!r)throw new Error("allowFullscreen is false");if(!be)throw new Error("Browser doesnt support fullscreen");if(!X.current)throw new Error("No player ref found");X.current.webkitRequestFullScreen?X.current.webkitRequestFullScreen():X.current.requestFullscreen()},[r,be]),Ce=y.useCallback(()=>{document.webkitExitFullscreen?document.webkitExitFullscreen():document.exitFullscreen()},[]);y.useEffect(()=>{const{current:Te}=X;if(!Te)return;const Ue=()=>{const vt=document.webkitFullscreenElement??document.fullscreenElement;vt&&vt===X.current?I.emitter.dispatchFullscreenChange({isFullscreen:!0}):I.emitter.dispatchFullscreenChange({isFullscreen:!1})};return Te.addEventListener("webkitfullscreenchange",Ue),Te.addEventListener("fullscreenchange",Ue),()=>{Te.removeEventListener("webkitfullscreenchange",Ue),Te.removeEventListener("fullscreenchange",Ue)}},[I.emitter]);const xe=(O==null?void 0:O.durationInFrames)??1,Oe=y.useMemo(()=>!O||!Q?null:Ox({canvasSize:Q,compositionHeight:O.height,compositionWidth:O.width,previewSize:"auto"}),[Q,O]),Me=(Oe==null?void 0:Oe.scale)??1,P=y.useRef(!1);y.useEffect(()=>{if(!P.current){P.current=!0;return}I.emitter.dispatchScaleChange(Me)},[I.emitter,Me]);const{setMediaVolume:C,setMediaMuted:$}=y.useContext(De.SetMediaVolumeContext),{mediaMuted:ie,mediaVolume:ee}=y.useContext(De.MediaVolumeContext);y.useEffect(()=>{I.emitter.dispatchVolumeChange(ee)},[I.emitter,ee]);const re=ie||ee===0;y.useEffect(()=>{I.emitter.dispatchMuteChange({isMuted:re})},[I.emitter,re]);const[he,ue]=y.useState(!1);y.useEffect(()=>{let Te=null,Ue=!1;const vt=()=>{Ue=!1,requestAnimationFrame(()=>{D===0?ue(!0):Te=setTimeout(()=>{Ue||ue(!0)},D)})},ai=()=>{requestAnimationFrame(()=>{Ue=!0,ue(!1),Te&&clearTimeout(Te)})};return I.emitter.addEventListener("waiting",vt),I.emitter.addEventListener("resume",ai),()=>{I.emitter.removeEventListener("waiting",vt),I.emitter.removeEventListener("resume",ai),ue(!1),Te&&clearTimeout(Te),Ue=!0}},[D,I.emitter]),y.useImperativeHandle(U,()=>{const Te={play:I.play,pause:()=>{j(!1),I.pause()},toggle:nt,getContainerNode:()=>X.current,getCurrentFrame:I.getCurrentFrame,isPlaying:I.isPlaying,seekTo:Ue=>{const vt=xe-1,ai=Math.max(0,Math.min(vt,Ue));I.isPlaying()&&(j(ai!==vt||n),I.pause()),ai===vt&&!n&&I.emitter.dispatchEnded(),I.seek(ai)},isFullscreen:()=>{const{current:Ue}=X;return Ue?document.fullscreenElement===Ue||document.webkitFullscreenElement===Ue:!1},requestFullscreen:_e,exitFullscreen:Ce,getVolume:()=>ie?0:ee,setVolume:Ue=>{if(typeof Ue!="number")throw new TypeError(`setVolume() takes a number, got value of type ${typeof Ue}`);if(isNaN(Ue))throw new TypeError("setVolume() got a number that is NaN. Volume must be between 0 and 1.");if(Ue<0||Ue>1)throw new TypeError(`setVolume() got a number that is out of range. Must be between 0 and 1, got ${typeof Ue}`);C(Ue)},isMuted:()=>re,mute:()=>{$(!0)},unmute:()=>{$(!1)},getScale:()=>Me,pauseAndReturnToPlayStart:()=>{I.pauseAndReturnToPlayStart()}};return Object.assign(I.emitter,Te)},[xe,Ce,n,ie,re,ee,I,_e,$,C,nt,Me]);const fe=H?H.component:null,Se=y.useMemo(()=>kx({canvasSize:Q,config:O,style:e,overflowVisible:F,layout:Oe}),[Q,O,Oe,F,e]),Le=y.useMemo(()=>zx({config:O,layout:Oe,scale:Me,overflowVisible:F}),[O,Oe,F,Me]),te=y.useMemo(()=>Bx({canvasSize:Q,config:O,layout:Oe,scale:Me,overflowVisible:F}),[Q,O,Oe,F,Me]),Ke=y.useCallback(Te=>{I.pause(),I.emitter.dispatchError(Te)},[I]),Ie=y.useCallback(Te=>{Te.stopPropagation(),_e()},[_e]),Re=y.useCallback(Te=>{Te.stopPropagation(),Ce()},[Ce]),Ee=y.useCallback(Te=>{(Te instanceof MouseEvent?Te.button===2:Te.nativeEvent.button)||nt(Te)},[nt]),se=y.useCallback(()=>{ze(!0)},[]),ke=y.useCallback(()=>{ze(!1)},[]),Qe=y.useCallback(()=>{de?Ce():_e()},[Ce,de,_e]),{handlePointerDown:et,handleDoubleClick:Ve}=g3(Ee,Qe,l&&r&&be);y.useEffect(()=>{K&&(I.play(),ne(!1))},[K,I]);const it=y.useMemo(()=>h?h({height:Se.height,width:Se.width,isBuffering:he}):null,[Se.height,Se.width,h,he]),N=y.useMemo(()=>({type:"scale",scale:Me}),[Me]);if(!O)return null;const ae=g?g({height:z==="player-size"?Se.height:O.height,width:z==="player-size"?Se.width:O.width,isBuffering:he}):null;if(ae===void 0)throw new TypeError("renderPoster() must return a React element, but undefined was returned");const le=ae&&[m&&!I.isPlaying()&&!ve,f&&I.isLastFrame&&!I.isPlaying(),p&&!I.hasPlayed&&!I.isPlaying(),v&&he&&I.isPlaying()].some(Boolean),{left:we,top:Pe,width:tt,height:st,...Ct}=Le,Kt=b.jsxs(b.Fragment,{children:[b.jsx("div",{style:Le,onPointerDown:s?et:void 0,onDoubleClick:l?Ve:void 0,children:b.jsxs("div",{style:te,className:up,children:[fe?b.jsx(Wx,{onError:Ke,errorFallback:c,children:b.jsx(De.CurrentScaleContext.Provider,{value:N,children:b.jsx(fe,{...(H==null?void 0:H.props)??{},...o??{}})})}):null,le&&z==="composition-size"?b.jsx("div",{style:{...Ct,width:O.width,height:O.height},onPointerDown:s?et:void 0,onDoubleClick:l?Ve:void 0,children:ae}):null]})}),le&&z==="player-size"?b.jsx("div",{style:Le,onPointerDown:s?et:void 0,onDoubleClick:l?Ve:void 0,children:ae}):null,t?b.jsx(d3,{fps:O.fps,durationInFrames:O.durationInFrames,player:I,containerRef:X,onFullscreenButtonClick:Ie,isFullscreen:de,allowFullscreen:r,showVolumeControls:a,onExitFullscreenButtonClick:Re,spaceKeyToPlayOrPause:u,onSeekEnd:ke,onSeekStart:se,inFrame:E,outFrame:M,initiallyShowControls:w,canvasSize:Q,renderFullscreenButton:T,renderPlayPauseButton:L,alwaysShowControls:A,showPlaybackRateControl:k,buffering:he,hideControlsWhenPointerDoesntMove:G,onDoubleClick:l?Ve:void 0,onPointerDown:s?et:void 0,renderMuteButton:B,renderVolumeSlider:x}):null]});return jx&&!v3?b.jsx("div",{ref:X,style:Se,className:_,children:Kt}):b.jsx("div",{ref:X,style:Se,className:_,children:b.jsx(y.Suspense,{fallback:it,children:Kt})})},y3=y.forwardRef(_3),$x="remotion.volumePreference",x3=t=>{if(!(typeof window>"u"))try{window.localStorage.setItem($x,String(t))}catch(e){console.log("Could not persist volume",e)}},S3=()=>{if(typeof window>"u")return 1;try{const t=window.localStorage.getItem($x);return t?Number(t):1}catch{return 1}},cp="player-comp",Xx=({children:t,timelineContext:e,fps:n,compositionHeight:i,compositionWidth:r,durationInFrames:o,component:s,numberOfSharedAudioTags:a,initiallyMuted:l})=>{const u=y.useMemo(()=>({compositions:[{component:s,durationInFrames:o,height:i,width:r,fps:n,id:cp,nonce:777,folderName:null,parentFolderName:null,schema:null,calculateMetadata:null}],folders:[],registerFolder:()=>{},unregisterFolder:()=>{},registerComposition:()=>{},unregisterComposition:()=>{},currentCompositionMetadata:null,setCurrentCompositionMetadata:()=>{},canvasContent:{type:"composition",compositionId:"player-comp"},setCanvasContent:()=>{},updateCompositionDefaultProps:()=>{}}),[s,o,i,r,n]),[c,d]=y.useState(()=>l),[h,g]=y.useState(()=>S3()),_=y.useMemo(()=>({mediaMuted:c,mediaVolume:h}),[c,h]),S=y.useCallback(f=>{g(f),x3(f)},[]),p=y.useMemo(()=>({setMediaMuted:d,setMediaVolume:S}),[S]);return b.jsx(De.CanUseRemotionHooksProvider,{children:b.jsx(De.Timeline.TimelineContext.Provider,{value:e,children:b.jsx(De.CompositionManager.Provider,{value:u,children:b.jsx(De.ResolveCompositionConfig,{children:b.jsx(De.PrefetchProvider,{children:b.jsx(De.DurationsContextProvider,{children:b.jsx(De.MediaVolumeContext.Provider,{value:_,children:b.jsx(De.SetMediaVolumeContext.Provider,{value:p,children:b.jsx(De.SharedAudioContextProvider,{numberOfAudioTags:a,component:s,children:b.jsx(De.BufferingProvider,{children:t})})})})})})})})})})},Vv=(t,e)=>{if(typeof t>"u"||t===null)return t??null;if(typeof t!="number")throw new TypeError(`"${e}" must be a number, but is ${JSON.stringify(t)}`);if(Number.isNaN(t))throw new TypeError(`"${e}" must not be NaN, but is ${JSON.stringify(t)}`);if(!Number.isFinite(t))throw new TypeError(`"${e}" must be finite, but is ${JSON.stringify(t)}`);if(t%1!==0)throw new TypeError(`"${e}" must be an integer, but is ${JSON.stringify(t)}`);return t},E3=({inFrame:t,durationInFrames:e,outFrame:n})=>{const i=Vv(t,"inFrame"),r=Vv(n,"outFrame");if(!(i===null&&r===null)){if(i!==null&&i>e-1)throw new Error("inFrame must be less than (durationInFrames - 1), but is "+i);if(r!==null&&r>e-1)throw new Error("outFrame must be less than (durationInFrames - 1), but is "+r);if(i!==null&&i<0)throw new Error("inFrame must be greater than 0, but is "+i);if(r!==null&&r<=0)throw new Error(`outFrame must be greater than 0, but is ${r}. If you want to render a single frame, use <Thumbnail /> instead.`);if(r!==null&&i!==null&&r<=i)throw new Error("outFrame must be greater than inFrame, but is "+r+" <= "+i)}},w3=({initialFrame:t,durationInFrames:e})=>{if(typeof e!="number")throw new Error(`\`durationInFrames\` must be a number, but is ${JSON.stringify(e)}`);if(!(typeof t>"u")){if(typeof t!="number")throw new Error(`\`initialFrame\` must be a number, but is ${JSON.stringify(t)}`);if(Number.isNaN(t))throw new Error("`initialFrame` must be a number, but is NaN");if(!Number.isFinite(t))throw new Error("`initialFrame` must be a number, but is Infinity");if(t%1!==0)throw new Error(`\`initialFrame\` must be an integer, but is ${JSON.stringify(t)}`);if(t>e-1)throw new Error(`\`initialFrame\` must be less or equal than \`durationInFrames - 1\`, but is ${JSON.stringify(t)}`)}},M3=t=>{if(t!==void 0){if(t>4)throw new Error(`The highest possible playback rate is 4. You passed: ${t}`);if(t<-4)throw new Error(`The lowest possible playback rate is -4. You passed: ${t}`);if(t===0)throw new Error("A playback rate of 0 is not supported.")}},T3=Yu.validateFps,Hv=Yu.validateDimension,C3=Yu.validateDurationInFrames,A3=Yu.validateDefaultAndInputProps,b3=t=>"component"in t?t.component:null,R3=({durationInFrames:t,compositionHeight:e,compositionWidth:n,fps:i,inputProps:r,style:o,controls:s=!1,loop:a=!1,autoPlay:l=!1,showVolumeControls:u=!0,allowFullscreen:c=!0,clickToPlay:d,doubleClickToFullscreen:h=!1,spaceKeyToPlayOrPause:g=!0,moveToBeginningWhenEnded:_=!0,numberOfSharedAudioTags:S=5,errorFallback:p=()=>"⚠️",playbackRate:f=1,renderLoading:m,className:v,showPosterWhenUnplayed:E,showPosterWhenEnded:M,showPosterWhenPaused:w,showPosterWhenBuffering:T,initialFrame:L,renderPoster:B,inFrame:x,outFrame:A,initiallyShowControls:k,renderFullscreenButton:z,renderPlayPauseButton:D,renderVolumeSlider:G,alwaysShowControls:F=!1,initiallyMuted:Z=!1,showPlaybackRateControl:U=!1,posterFillMode:O="player-size",bufferStateDelayInMilliseconds:H,hideControlsWhenPointerDoesntMove:X=!0,overflowVisible:Q=!1,renderMuteButton:ge,browserMediaControlsBehavior:j,...K},ne)=>{if(typeof window<"u"&&y.useLayoutEffect(()=>{window.remotion_isPlayer=!0},[]),K.defaultProps!==void 0)throw new Error("The <Player /> component does not accept `defaultProps`, but some were passed. Use `inputProps` instead.");const de=b3(K);if((de==null?void 0:de.type)===Cv)throw new TypeError("'component' should not be an instance of <Composition/>. Pass the React component directly, and set the duration, fps and dimensions as separate props. See https://www.remotion.dev/docs/player/examples for an example.");if(de===Cv)throw new TypeError("'component' must not be the 'Composition' component. Pass your own React component directly, and set the duration, fps and dimensions as separate props. See https://www.remotion.dev/docs/player/examples for an example.");const ye=De.useLazyComponent(K);w3({initialFrame:L,durationInFrames:t});const[ve,ze]=y.useState(()=>({[cp]:L??0})),[be,I]=y.useState(!1),[nt]=y.useState("player-comp"),_e=y.useRef(null),Ce=y.useRef([]),xe=y.useRef(!1),[Oe,Me]=y.useState(f);if(typeof e!="number")throw new TypeError(`'compositionHeight' must be a number but got '${typeof e}' instead`);if(typeof n!="number")throw new TypeError(`'compositionWidth' must be a number but got '${typeof n}' instead`);if(Hv(e,"compositionHeight","of the <Player /> component"),Hv(n,"compositionWidth","of the <Player /> component"),C3(t,{component:"of the <Player/> component",allowFloats:!1}),T3(i,"as a prop of the <Player/> component",!1),A3(r,"inputProps",null),E3({durationInFrames:t,inFrame:x,outFrame:A}),typeof s!="boolean"&&typeof s<"u")throw new TypeError(`'controls' must be a boolean or undefined but got '${typeof s}' instead`);if(typeof l!="boolean"&&typeof l<"u")throw new TypeError(`'autoPlay' must be a boolean or undefined but got '${typeof l}' instead`);if(typeof a!="boolean"&&typeof a<"u")throw new TypeError(`'loop' must be a boolean or undefined but got '${typeof a}' instead`);if(typeof h!="boolean"&&typeof h<"u")throw new TypeError(`'doubleClickToFullscreen' must be a boolean or undefined but got '${typeof h}' instead`);if(typeof u!="boolean"&&typeof u<"u")throw new TypeError(`'showVolumeControls' must be a boolean or undefined but got '${typeof u}' instead`);if(typeof c!="boolean"&&typeof c<"u")throw new TypeError(`'allowFullscreen' must be a boolean or undefined but got '${typeof c}' instead`);if(typeof d!="boolean"&&typeof d<"u")throw new TypeError(`'clickToPlay' must be a boolean or undefined but got '${typeof d}' instead`);if(typeof g!="boolean"&&typeof g<"u")throw new TypeError(`'spaceKeyToPlayOrPause' must be a boolean or undefined but got '${typeof g}' instead`);if(typeof S!="number"||S%1!==0||!Number.isFinite(S)||Number.isNaN(S)||S<0)throw new TypeError(`'numberOfSharedAudioTags' must be an integer but got '${S}' instead`);M3(Oe),y.useEffect(()=>{Me(f)},[f]),y.useImperativeHandle(ne,()=>_e.current,[]);const P=y.useMemo(()=>({frame:ve,playing:be,rootId:nt,playbackRate:Oe,imperativePlaying:xe,setPlaybackRate:ee=>{Me(ee)},audioAndVideoTags:Ce}),[ve,Oe,be,nt]),C=y.useMemo(()=>({setFrame:ze,setPlaying:I}),[ze]);typeof window<"u"&&y.useLayoutEffect(()=>{De.CSSUtils.injectCSS(De.CSSUtils.makeDefaultPreviewCSS(`.${up}`,"#fff"))},[]);const $=y.useMemo(()=>r??{},[r]),ie=y.useMemo(()=>j??{mode:"prevent-media-session"},[j]);return b.jsx(De.IsPlayerContextProvider,{children:b.jsx(Xx,{timelineContext:P,component:ye,compositionHeight:e,compositionWidth:n,durationInFrames:t,fps:i,numberOfSharedAudioTags:S,initiallyMuted:Z,children:b.jsx(De.Timeline.SetTimelineContext.Provider,{value:C,children:b.jsx(PL,{currentPlaybackRate:Oe,children:b.jsx(y3,{ref:_e,posterFillMode:O,renderLoading:m,autoPlay:!!l,loop:!!a,controls:!!s,errorFallback:p,style:o,inputProps:$,allowFullscreen:!!c,moveToBeginningWhenEnded:!!_,clickToPlay:typeof d=="boolean"?d:!!s,showVolumeControls:!!u,doubleClickToFullscreen:!!h,spaceKeyToPlayOrPause:!!g,playbackRate:Oe,className:v??void 0,showPosterWhenUnplayed:!!E,showPosterWhenEnded:!!M,showPosterWhenPaused:!!w,showPosterWhenBuffering:!!T,renderPoster:B,inFrame:x??null,outFrame:A??null,initiallyShowControls:k??!0,renderFullscreen:z??null,renderPlayPauseButton:D??null,renderMuteButton:ge??null,renderVolumeSlider:G??null,alwaysShowControls:F,showPlaybackRateControl:U,bufferStateDelayInMilliseconds:H??300,hideControlsWhenPointerDoesntMove:X,overflowVisible:Q,browserMediaControlsBehavior:ie})})})})})},P3=y.forwardRef,L3=P3(R3),N3=()=>{const t=y.useContext(Hx);if(!t)throw new TypeError("Expected Player event emitter context");return y.useMemo(()=>({emitter:t}),[t])},Uf=Ge.version.split(".")[0];if(Uf==="0")throw new Error(`Version ${Uf} of "react" is not supported by Remotion`);var D3=parseInt(Uf,10)>=18,I3=({style:t,inputProps:e,errorFallback:n,renderLoading:i,className:r,overflowVisible:o},s)=>{const a=De.useUnsafeVideoConfig(),l=De.useVideo(),u=y.useRef(null),c=lp(u,{triggerOnWindowResize:!1,shouldApplyCssTransforms:!1}),d=y.useMemo(()=>!a||!c?null:Ox({canvasSize:c,compositionHeight:a.height,compositionWidth:a.width,previewSize:"auto"}),[c,a]),h=(d==null?void 0:d.scale)??1,g=N3();Gx(g.emitter),y.useImperativeHandle(s,()=>{const w={getContainerNode:()=>u.current,getScale:()=>h};return Object.assign(g.emitter,w)},[h,g.emitter]);const _=l?l.component:null,S=y.useMemo(()=>kx({config:a,style:t,canvasSize:c,overflowVisible:o,layout:d}),[c,a,d,o,t]),p=y.useMemo(()=>zx({config:a,layout:d,scale:h,overflowVisible:o}),[a,d,o,h]),f=y.useMemo(()=>Bx({canvasSize:c,config:a,layout:d,scale:h,overflowVisible:o}),[c,a,d,o,h]),m=y.useCallback(w=>{g.emitter.dispatchError(w)},[g.emitter]),v=y.useMemo(()=>i?i({height:S.height,width:S.width,isBuffering:!1}):null,[S.height,S.width,i]),E=y.useMemo(()=>({type:"scale",scale:h}),[h]);if(!a)return null;const M=b.jsx("div",{style:p,children:b.jsx("div",{style:f,className:up,children:_?b.jsx(Wx,{onError:m,errorFallback:n,children:b.jsx(De.CurrentScaleContext.Provider,{value:E,children:b.jsx(_,{...(l==null?void 0:l.props)??{},...e??{}})})}):null})});return jx&&!D3?b.jsx("div",{ref:u,style:S,className:r,children:M}):b.jsx("div",{ref:u,style:S,className:r,children:b.jsx(y.Suspense,{fallback:v,children:M})})},U3=y.forwardRef(I3),F3=({frameToDisplay:t,style:e,inputProps:n,compositionHeight:i,compositionWidth:r,durationInFrames:o,fps:s,className:a,errorFallback:l=()=>"⚠️",renderLoading:u,overflowVisible:c=!1,...d},h)=>{typeof window<"u"&&y.useLayoutEffect(()=>{window.remotion_isPlayer=!0},[]);const[g]=y.useState(()=>String(us(null))),_=y.useRef(null),S=y.useMemo(()=>({playing:!1,frame:{[cp]:t},rootId:g,imperativePlaying:{current:!1},playbackRate:1,setPlaybackRate:()=>{throw new Error("thumbnail")},audioAndVideoTags:{current:[]}}),[t,g]);y.useImperativeHandle(h,()=>_.current,[]);const p=De.useLazyComponent(d),[f]=y.useState(()=>new RL),m=y.useMemo(()=>n??{},[n]);return b.jsx(De.IsPlayerContextProvider,{children:b.jsx(Xx,{timelineContext:S,component:p,compositionHeight:i,compositionWidth:r,durationInFrames:o,fps:s,numberOfSharedAudioTags:0,initiallyMuted:!0,children:b.jsx(Hx.Provider,{value:f,children:b.jsx(U3,{ref:_,className:a,errorFallback:l,inputProps:m,renderLoading:u,style:e,overflowVisible:c})})})})},O3=y.forwardRef;O3(F3);const k3=()=>{const t=Yy(),[e,n]=Ge.useState({width:window.innerWidth,height:window.innerHeight});return Ge.useEffect(()=>{const i=()=>{n({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),Ge.useEffect(()=>{const i=document.getElementById("remotionCanvas");if(!i)return;const r=i.getContext("2d");let o,s=Array.from({length:100},()=>({x:Math.random()*e.width,y:Math.random()*e.height,size:Math.random()*2+1,speedX:(Math.random()-.5)*.5,speedY:(Math.random()-.5)*.5}));const a=l=>{i.width=e.width,i.height=e.height;const u=r.createLinearGradient(0,0,i.width,i.height);u.addColorStop(0,"rgba(122, 158, 159, 0.05)"),u.addColorStop(1,"rgba(80, 108, 127, 0.05)"),r.fillStyle=u,r.fillRect(0,0,i.width,i.height),s.forEach(c=>{const d=t(c.x*.001,c.y*.001,l*1e-4,0),h=t(c.x*.001,c.y*.001,0,l*1e-4);c.x+=c.speedX+d,c.y+=c.speedY+h,c.x<0&&(c.x=i.width),c.x>i.width&&(c.x=0),c.y<0&&(c.y=i.height),c.y>i.height&&(c.y=0),r.beginPath(),r.arc(c.x,c.y,c.size,0,Math.PI*2),r.fillStyle=`rgba(122, 158, 159, ${.1+Math.abs(d)*.5})`,r.fill()}),r.beginPath(),r.strokeStyle="rgba(122, 158, 159, 0.1)",r.lineWidth=1;for(let c=0;c<i.width;c+=50){const d=i.height/2;r.moveTo(c,d);for(let h=0;h<i.width;h+=10){const g=d+Math.sin(h*.01+l*.001)*50+t(h*.001,d*.001,l*1e-4,0)*30;r.lineTo(h,g)}}r.stroke(),o=requestAnimationFrame(a)};return a(0),()=>{o&&cancelAnimationFrame(o)}},[e]),b.jsx(jh,{style:{background:"transparent"},children:b.jsx("canvas",{id:"remotionCanvas",style:{width:"100%",height:"100%",opacity:.6,mixBlendMode:"screen"}})})},B3=()=>{const[t,e]=Ge.useState({width:window.innerWidth,height:window.innerHeight});return Ge.useEffect(()=>{const n=()=>{e({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),b.jsx(L3,{component:k3,durationInFrames:300,compositionWidth:t.width,compositionHeight:t.height,fps:30,style:{width:"100%",height:"100%",position:"fixed",top:0,left:0,zIndex:-1},loop:!0})};function z3(){const[t,e]=y.useState(null),[n,i]=y.useState({card:null,scroll:null});y.useEffect(()=>{const o=new JR;o.animate(),e(o);const s=new QR,a=new eP;i({card:s,scroll:a});const l=document.createElement("div");l.id="remotion-video",document.body.appendChild(l);const u=document.createElement("div");return u.id="remotion-root",l.appendChild(u),Ph(u).render(b.jsx(B3,{})),()=>{t&&t.dispose(),l.parentNode&&l.parentNode.removeChild(l)}},[]);const r=()=>{n.card&&n.card.init(),n.scroll&&n.scroll.init()};return b.jsxs(TM,{children:[b.jsx("canvas",{id:"bg"}),b.jsxs(_M,{children:[b.jsx(Pl,{path:"/",element:b.jsx(RM,{onMount:r})}),b.jsx(Pl,{path:"/manifesto",element:b.jsx(PM,{onMount:r})}),b.jsx(Pl,{path:"*",element:b.jsx(gM,{to:"/"})})]})]})}const V3=Ph(document.getElementById("root"));V3.render(b.jsx(Ge.StrictMode,{children:b.jsx(z3,{})}));
