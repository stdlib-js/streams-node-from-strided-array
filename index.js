// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("stream"),require("buffer"),require("process")):"function"==typeof define&&define.amd?define(["stream","buffer","process"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).stridedArrayStream=e(r.require$$0$3,r.require$$0$1,r.require$$0$2)}(this,(function(r,e,t){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o,i=Object.defineProperty,a=Object.prototype,u=a.toString,c=a.__defineGetter__,f=a.__defineSetter__,l=a.__lookupGetter__,s=a.__lookupSetter__;o=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?i:function(r,e,t){var n,o,i,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(l.call(r,e)||s.call(r,e)?(n=r.__proto__,r.__proto__=a,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,p="set"in t,o&&(i||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&c&&c.call(r,e,t.get),p&&f&&f.call(r,e,t.set),r};var p=o;function y(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function g(r){var e=r.default;if("function"==typeof e){var t=function(){return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var h=Math.floor;function d(r){return h(r)===r}function v(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&d(r.length)&&r.length>=0&&r.length<=9007199254740991}var b=/./;function w(r){return"boolean"==typeof r}var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function j(){return m&&"symbol"==typeof Symbol.toStringTag}var A=Object.prototype.toString;var O=Object.prototype.hasOwnProperty;function E(r,e){return null!=r&&O.call(r,e)}var _="function"==typeof Symbol?Symbol.toStringTag:"";var S=j()?function(r){var e,t,n;if(null==r)return A.call(r);t=r[_],e=E(r,_);try{r[_]=void 0}catch(e){return A.call(r)}return n=A.call(r),e?r[_]=t:delete r[_],n}:function(r){return A.call(r)},I=Boolean.prototype.toString;var T=j();function x(r){return"object"==typeof r&&(r instanceof Boolean||(T?function(r){try{return I.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===S(r)))}function k(r){return w(r)||x(r)}function F(){return new Function("return this;")()}y(k,"isPrimitive",w),y(k,"isObject",x);var U="object"==typeof self?self:null,P="object"==typeof window?window:null,V="object"==typeof global?global:null;var M=function(r){if(arguments.length){if(!w(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return F()}if(U)return U;if(P)return P;if(V)return V;throw new Error("unexpected error. Unable to resolve global object.")}(),$=M.document&&M.document.childNodes,N=Int8Array;function C(){return/^\s*function\s*([^(]*)/i}var z=/^\s*function\s*([^(]*)/i;y(C,"REGEXP",z);var B=Array.isArray?Array.isArray:function(r){return"[object Array]"===S(r)};function R(r){return null!==r&&"object"==typeof r}function W(r){return R(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function L(r){var e,t,n;if(("Object"===(t=S(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=z.exec(n.toString()))return e[1]}return W(r)?"Buffer":t}y(R,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!B(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(R));var G="function"==typeof b||"object"==typeof N||"function"==typeof $?function(r){return L(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?L(r).toLowerCase():e};function q(r){return"function"===G(r)}var X,D=Object.getPrototypeOf;X=q(Object.getPrototypeOf)?D:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===S(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Z=X;function J(r){return null==r?null:(r=Object(r),Z(r))}function Y(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===S(r))return!0;r=J(r)}return!1}function H(r){return"number"==typeof r}var K=Number,Q=K.prototype.toString;var rr=j();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Number]"===S(r)))}function tr(r){return H(r)||er(r)}y(tr,"isPrimitive",H),y(tr,"isObject",er);var nr=Number.POSITIVE_INFINITY,or=K.NEGATIVE_INFINITY;function ir(r){return r<nr&&r>or&&d(r)}function ar(r){return H(r)&&ir(r)}function ur(r){return er(r)&&ir(r.valueOf())}function cr(r){return ar(r)||ur(r)}function fr(r){return ar(r)&&r>=0}function lr(r){return ur(r)&&r.valueOf()>=0}function sr(r){return fr(r)||lr(r)}function pr(r){return"string"==typeof r}y(cr,"isPrimitive",ar),y(cr,"isObject",ur),y(sr,"isPrimitive",fr),y(sr,"isObject",lr);var yr=String.prototype.valueOf;var gr=j();function hr(r){return"object"==typeof r&&(r instanceof String||(gr?function(r){try{return yr.call(r),!0}catch(r){return!1}}(r):"[object String]"===S(r)))}function dr(r){return pr(r)||hr(r)}function vr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function br(r){return"number"==typeof r}function wr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function mr(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+wr(o):wr(o)+r,n&&(r="-"+r)),r}y(dr,"isPrimitive",pr),y(dr,"isObject",hr),y(vr,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/);var jr=String.prototype.toLowerCase,Ar=String.prototype.toUpperCase;function Or(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!br(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=mr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=mr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Ar.call(r.specifier)?Ar.call(t):jr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Er(r){return"string"==typeof r}var _r=Math.abs,Sr=String.prototype.toLowerCase,Ir=String.prototype.toUpperCase,Tr=String.prototype.replace,xr=/e\+(\d)$/,kr=/e-(\d)$/,Fr=/^(\d+)$/,Ur=/^(\d+)e/,Pr=/\.0$/,Vr=/\.0*e/,Mr=/(\..*[^0])0*e/;function $r(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!br(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":_r(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Tr.call(t,Mr,"$1e"),t=Tr.call(t,Vr,"e"),t=Tr.call(t,Pr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Tr.call(t,xr,"e+0$1"),t=Tr.call(t,kr,"e-0$1"),r.alternate&&(t=Tr.call(t,Fr,"$1."),t=Tr.call(t,Ur,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Ir.call(r.specifier)?Ir.call(t):Sr.call(t)}function Nr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Cr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Nr(n):Nr(n)+r}var zr=String.fromCharCode,Br=isNaN,Rr=Array.isArray;function Wr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Lr(r){var e,t,n,o,i,a,u,c,f;if(!Rr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(Er(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=Wr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Br(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Br(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Or(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Br(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Br(i)?String(n.arg):zr(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=$r(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=mr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Cr(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var Gr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function qr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Xr(r){var e,t,n,o;for(t=[],o=0,n=Gr.exec(r);n;)(e=r.slice(o,Gr.lastIndex-n[0].length)).length&&t.push(e),t.push(qr(n)),o=Gr.lastIndex,n=Gr.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function Dr(r){return"string"==typeof r}function Zr(r){var e,t,n;if(!Dr(r))throw new TypeError(Zr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Xr(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Lr.apply(null,t)}function Jr(r){return r!=r}function Yr(r){return H(r)&&Jr(r)}function Hr(r){return er(r)&&Jr(r.valueOf())}function Kr(r){return Yr(r)||Hr(r)}function Qr(r,e,t){var n,o;if(!v(r)&&!pr(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!ar(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Kr(e)){for(;o<n;o++)if(Kr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}function re(r){return Object.keys(Object(r))}y(Kr,"isPrimitive",Yr),y(Kr,"isObject",Hr);var ee,te=void 0!==Object.keys;function ne(r){return"[object Arguments]"===S(r)}ee=function(){return ne(arguments)}();var oe=ee,ie=Object.prototype.propertyIsEnumerable;var ae=!ie.call("beep","0");function ue(r,e){var t;return null!=r&&(!(t=ie.call(r,e))&&ae&&dr(r)?!Yr(e=+e)&&ar(e)&&e>=0&&e<r.length:t)}var ce=4294967295;var fe=oe?ne:function(r){return null!==r&&"object"==typeof r&&!B(r)&&"number"==typeof r.length&&d(r.length)&&r.length>=0&&r.length<=ce&&E(r,"callee")&&!ue(r,"callee")},le=Array.prototype.slice;var se=ue((function(){}),"prototype"),pe=!ue({toString:null},"toString");function ye(r){return r.constructor&&r.constructor.prototype===r}var ge=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],he="undefined"==typeof window?void 0:window;var de=function(){var r;if("undefined"===G(he))return!1;for(r in he)try{-1===Qr(ge,r)&&E(he,r)&&null!==he[r]&&"object"===G(he[r])&&ye(he[r])}catch(r){return!0}return!1}(),ve="undefined"!=typeof window;var be,we=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];be=te?function(){return 2!==(re(arguments)||"").length}(1,2)?function(r){return fe(r)?re(le.call(r)):re(r)}:re:function(r){var e,t,n,o,i,a,u;if(o=[],fe(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!E(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!R(r))return o;t=se&&n}for(i in r)t&&"prototype"===i||!E(r,i)||o.push(String(i));if(pe)for(e=function(r){if(!1===ve&&!de)return ye(r);try{return ye(r)}catch(r){return!1}}(r),u=0;u<we.length;u++)a=we[u],e&&"constructor"===a||!E(r,a)||o.push(String(a));return o};var me=be,je=void 0!==Object.getOwnPropertyNames,Ae=Object.getOwnPropertyNames;var Oe=je?function(r){return Ae(Object(r))}:function(r){return me(Object(r))},Ee=void 0!==Object.getOwnPropertyDescriptor,_e=Object.getOwnPropertyDescriptor;var Se=Ee?function(r,e){var t;return null==r||void 0===(t=_e(r,e))?null:t}:function(r,e){return E(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null},Ie="function"==typeof Buffer?Buffer:null;var Te,xe=e.Buffer;Te=function(){var r,e;if("function"!=typeof Ie)return!1;try{r=W(e="function"==typeof Ie.from?Ie.from([1,2,3,4]):new Ie([1,2,3,4]))&&1===e[0]&&2===e[1]&&3===e[2]&&4===e[3]}catch(e){r=!1}return r}()?xe:function(){throw new Error("not implemented")};var ke=Te;var Fe=q(ke.from)?function(r){if(!W(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return ke.from(r)}:function(r){if(!W(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return new ke(r)},Ue="function"==typeof Int8Array;var Pe="function"==typeof Int8Array?Int8Array:null;var Ve,Me="function"==typeof Int8Array?Int8Array:void 0;Ve=function(){var r,e,t;if("function"!=typeof Pe)return!1;try{e=new Pe([1,3.14,-3.14,128]),t=e,r=(Ue&&t instanceof Int8Array||"[object Int8Array]"===S(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Me:function(){throw new Error("not implemented")};var $e=Ve,Ne="function"==typeof Uint8Array;var Ce="function"==typeof Uint8Array?Uint8Array:null;var ze,Be="function"==typeof Uint8Array?Uint8Array:void 0;ze=function(){var r,e,t;if("function"!=typeof Ce)return!1;try{e=new Ce(e=[1,3.14,-3.14,256,257]),t=e,r=(Ne&&t instanceof Uint8Array||"[object Uint8Array]"===S(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Be:function(){throw new Error("not implemented")};var Re=ze,We="function"==typeof Uint8ClampedArray;var Le="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Ge,qe="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;Ge=function(){var r,e,t;if("function"!=typeof Le)return!1;try{e=new Le([-1,0,1,3.14,4.99,255,256]),t=e,r=(We&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===S(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?qe:function(){throw new Error("not implemented")};var Xe=Ge,De="function"==typeof Int16Array;var Ze="function"==typeof Int16Array?Int16Array:null;var Je,Ye="function"==typeof Int16Array?Int16Array:void 0;Je=function(){var r,e,t;if("function"!=typeof Ze)return!1;try{e=new Ze([1,3.14,-3.14,32768]),t=e,r=(De&&t instanceof Int16Array||"[object Int16Array]"===S(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Ye:function(){throw new Error("not implemented")};var He=Je,Ke="function"==typeof Uint16Array;var Qe="function"==typeof Uint16Array?Uint16Array:null;var rt,et="function"==typeof Uint16Array?Uint16Array:void 0;rt=function(){var r,e,t;if("function"!=typeof Qe)return!1;try{e=new Qe(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Ke&&t instanceof Uint16Array||"[object Uint16Array]"===S(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?et:function(){throw new Error("not implemented")};var tt=rt,nt="function"==typeof Int32Array;var ot="function"==typeof Int32Array?Int32Array:null;var it,at="function"==typeof Int32Array?Int32Array:void 0;it=function(){var r,e,t;if("function"!=typeof ot)return!1;try{e=new ot([1,3.14,-3.14,2147483648]),t=e,r=(nt&&t instanceof Int32Array||"[object Int32Array]"===S(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?at:function(){throw new Error("not implemented")};var ut=it,ct="function"==typeof Uint32Array;var ft="function"==typeof Uint32Array?Uint32Array:null;var lt,st="function"==typeof Uint32Array?Uint32Array:void 0;lt=function(){var r,e,t;if("function"!=typeof ft)return!1;try{e=new ft(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(ct&&t instanceof Uint32Array||"[object Uint32Array]"===S(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?st:function(){throw new Error("not implemented")};var pt=lt,yt="function"==typeof Float32Array;var gt="function"==typeof Float32Array?Float32Array:null;var ht,dt="function"==typeof Float32Array?Float32Array:void 0;ht=function(){var r,e,t;if("function"!=typeof gt)return!1;try{e=new gt([1,3.14,-3.14,5e40]),t=e,r=(yt&&t instanceof Float32Array||"[object Float32Array]"===S(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===nr}catch(e){r=!1}return r}()?dt:function(){throw new Error("not implemented")};var vt=ht,bt="function"==typeof Float64Array;var wt="function"==typeof Float64Array?Float64Array:null;var mt,jt="function"==typeof Float64Array?Float64Array:void 0;mt=function(){var r,e,t;if("function"!=typeof wt)return!1;try{e=new wt([1,3.14,-3.14,NaN]),t=e,r=(bt&&t instanceof Float64Array||"[object Float64Array]"===S(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?jt:function(){throw new Error("not implemented")};var At=mt;function Ot(r){return new $e(r)}function Et(r){return new Re(r)}function _t(r){return new Xe(r)}function St(r){return new He(r)}function It(r){return new tt(r)}function Tt(r){return new ut(r)}function xt(r){return new pt(r)}function kt(r){return new vt(r)}function Ft(r){return new At(r)}var Ut={int8array:Ot,uint8array:Et,uint8clampedarray:_t,int16array:St,uint16array:It,int32array:Tt,uint32array:xt,float32array:kt,float64array:Ft};function Pt(r,e,t,n,o){var i,a,u,c,f,l,s,y,g,h;if(o-=1,"object"!=typeof r||null===r)return r;if(W(r))return Fe(r);if(Y(r))return function(r){var e,t,n,o,i,a,u=[],c=[];for(i=new r.constructor(r.message),u.push(r),c.push(i),r.stack&&(i.stack=r.stack),r.code&&(i.code=r.code),r.errno&&(i.errno=r.errno),r.syscall&&(i.syscall=r.syscall),e=me(r),a=0;a<e.length;a++)o=e[a],E(t=Se(r,o),"value")&&(n=B(r[o])?[]:{},t.value=Pt(r[o],n,u,c,-1)),p(i,o,t);return i}(r);if("date"===(u=G(r)))return new Date(+r);if("regexp"===u)return function(r){if(!pr(r))throw new TypeError(Zr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return(r=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(r))?new RegExp(r[1],r[2]):null}(r.toString());if("set"===u)return new Set(r);if("map"===u)return new Map(r);if("string"===u||"boolean"===u||"number"===u)return r.valueOf();if(f=Ut[u])return f(r);if("array"!==u&&"object"!==u)return"function"==typeof Object.freeze?function(r){var e,t,n,o,i,a,u,c;for(e=[],o=[],u=Object.create(J(r)),e.push(r),o.push(u),t=Oe(r),c=0;c<t.length;c++)n=t[c],E(i=Se(r,n),"value")&&(a=B(r[n])?[]:{},i.value=Pt(r[n],a,e,o,-1)),p(u,n,i);return Object.isExtensible(r)||Object.preventExtensions(u),Object.isSealed(r)&&Object.seal(u),Object.isFrozen(r)&&Object.freeze(u),u}(r):{};if(a=me(r),o>0)for(i=u,h=0;h<a.length;h++)y=r[l=a[h]],u=G(y),"object"!=typeof y||null===y||"array"!==u&&"object"!==u||W(y)?"object"===i?(E(c=Se(r,l),"value")&&(c.value=Pt(y)),p(e,l,c)):e[l]=Pt(y):-1===(g=Qr(t,y))?(s=B(y)?new Array(y.length):{},t.push(y),n.push(s),"array"===i?e[l]=Pt(y,s,t,n,o):(E(c=Se(r,l),"value")&&(c.value=Pt(y,s,t,n,o)),p(e,l,c))):e[l]=n[g];else if("array"===u)for(h=0;h<a.length;h++)e[l=a[h]]=r[l];else for(h=0;h<a.length;h++)l=a[h],c=Se(r,l),p(e,l,c);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}function Vt(r,e){var t;if(arguments.length>1){if(!fr(e))throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `"+e+"`.");if(0===e)return r}else e=nr;return Pt(r,t=B(r)?new Array(r.length):{},[r],[t],e)}function Mt(r){var e=typeof r;return null===r||"object"!==e&&"function"!==e?new TypeError("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `"+r+"`."):null}var $t=Object.create;function Nt(){}var Ct,zt="function"==typeof $t?$t:function(r){return Nt.prototype=r,new Nt};function Bt(r,e,t){p(r,e,{configurable:!0,enumerable:!1,writable:!0,value:t})}Ct=q(ke.from)?function(r,e){if(!pr(r))throw new TypeError(Zr("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!pr(e))throw new TypeError(Zr("invalid argument. Second argument must be a string. Value: `%s`.",e));return ke.from(r,e)}return ke.from(r,"utf8")}:function(r,e){if(!pr(r))throw new TypeError(Zr("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!pr(e))throw new TypeError(Zr("invalid argument. Second argument must be a string. Value: `%s`.",e));return new ke(r,e)}return new ke(r,"utf8")};var Rt=Ct;function Wt(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}var Lt=t;var Gt={objectMode:!1,encoding:null,sep:"\n"};var qt=Object.prototype;function Xt(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!B(r)}(r)&&(!(e=J(r))||!E(r,"constructor")&&E(e,"constructor")&&q(e.constructor)&&"[object Function]"===S(e.constructor)&&E(e,"isPrototypeOf")&&q(e.isPrototypeOf)&&(e===qt||function(r){var e;for(e in r)if(!E(r,e))return!1;return!0}(r)))}function Dt(r){return H(r)&&r>=0}function Zt(r){return er(r)&&r.valueOf()>=0}function Jt(r){return Dt(r)||Zt(r)}function Yt(r,e){return Xt(e)?E(e,"sep")&&(r.sep=e.sep,!pr(r.sep))?new TypeError(Wt("0g22i","sep",r.sep)):E(e,"objectMode")&&(r.objectMode=e.objectMode,!w(r.objectMode))?new TypeError(Wt("0g230","objectMode",r.objectMode)):E(e,"encoding")&&(r.encoding=e.encoding,!pr(r.encoding)&&null!==r.encoding)?new TypeError(Wt("0g284","encoding",r.encoding)):E(e,"highWaterMark")&&(r.highWaterMark=e.highWaterMark,!Dt(r.highWaterMark))?new TypeError(Wt("0g24x","highWaterMark",r.highWaterMark)):E(e,"serialize")&&(r.serialize=e.serialize,!q(r.serialize))?new TypeError(Wt("0g278","serialize",r.serialize)):null:new TypeError(Wt("0g22h",e))}y(Jt,"isPrimitive",Dt),y(Jt,"isObject",Zt);var Ht=g(Object.freeze({__proto__:null,default:()=>()=>{}}))("from-strided-array-stream"),Kt=r.Readable;function Qt(r,e,t,n,o){var i,a,u;if(!(this instanceof Qt))return arguments.length>4?new Qt(r,e,t,n,o):new Qt(r,e,t,n);if(!fr(r))throw new TypeError(Wt("0g22p",r));if(!v(e))throw new TypeError(Wt("0g23A",e));if(!ar(t))throw new TypeError(Wt("0g23B",t));if(!fr(n))throw new TypeError(Wt("0g23C",n));if(r>0&&(u=n+(r-1)*t,n>=e.length||u<0||u>=e.length))throw new RangeError(Wt("0g21R"));if(i=Vt(Gt),arguments.length>4&&(a=Yt(i,o)))throw a;return Ht("Creating a readable stream configured with the following options: %s.",JSON.stringify(i)),Kt.call(this,i),Bt(this,"_destroyed",!1),y(this,"_objectMode",i.objectMode),y(this,"_sep",i.sep),y(this,"_serialize",i.serialize||JSON.stringify),y(this,"_buffer",e),y(this,"_N",r),y(this,"_stride",t),y(this,"_offset",n),Bt(this,"_idx",n),Bt(this,"_i",0),this}return function(r,e){var t=Mt(r);if(t)throw t;if(t=Mt(e))throw t;if(void 0===e.prototype)throw new TypeError("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `"+e.prototype+"`.");r.prototype=zt(e.prototype),p(r.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:r})}(Qt,Kt),y(Qt.prototype,"_read",(function(){var r,e,t;if(!this._destroyed)for(r=!0;r;){if(e=null,this._i+=1,this._i>this._N)return Ht("Finished iteration."),this.push(null);t=this._buffer[this._idx],Ht("Value: %s. Idx: %d. Iter: %d.",JSON.stringify(t),this._idx,this._i),this._idx+=this._stride,!1===this._objectMode&&("string"==typeof(t=this._serialize(t))?t=1===this._i?Rt(t):Rt(this._sep+t):W(t)?this._i>1&&(t=ke.concat([Rt(this._sep),t])):e=new Error(Wt("0g2Au",t))),e?this.emit("error",e):r=this.push(t)}})),y(Qt.prototype,"destroy",(function(r){var e;return this._destroyed?(Ht("Attempted to destroy an already destroyed stream."),this):(e=this,this._destroyed=!0,function(r){var e,t;for(e=[],t=1;t<arguments.length;t++)e.push(arguments[t]);function n(){r.apply(null,e)}Lt.nextTick(n)}((function(){r&&(Ht("Stream was destroyed due to an error. Error: %s.",Y(r)?r.message:JSON.stringify(r)),e.emit("error",r));Ht("Closing the stream..."),e.emit("close")})),this)})),y(Qt,"objectMode",(function(r,e,t,n,o){var i;if(arguments.length>4){if(!Xt(i=o))throw new TypeError(Wt("0g22h",i));i=Vt(o,1)}else i={};return i.objectMode=!0,new Qt(r,e,t,n,i)})),y(Qt,"factory",(function(r){var e;return e=arguments.length?Vt(r,1):{},t;function t(r,t,n,o){return new Qt(r,t,n,o,e)}})),Qt}));
//# sourceMappingURL=index.js.map
