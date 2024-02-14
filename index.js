// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("stream"),require("buffer"),require("process")):"function"==typeof define&&define.amd?define(["stream","buffer","process"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).stridedArrayStream=r(e.require$$0$3,e.require$$0$1,e.require$$0$2)}(this,(function(e,r,t){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var i=Object.defineProperty;function o(e){return"number"==typeof e}function a(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function u(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+a(i):a(i)+e,n&&(e="-"+e)),e}var c=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function s(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=u(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=u(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===l.call(e.specifier)?l.call(t):c.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var p=Math.abs,g=String.prototype.toLowerCase,d=String.prototype.toUpperCase,h=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,_=/\.0*e/,j=/(\..*[^0])0*e/;function O(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!o(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=h.call(t,j,"$1e"),t=h.call(t,_,"e"),t=h.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=h.call(t,y,"e+0$1"),t=h.call(t,b,"e-0$1"),e.alternate&&(t=h.call(t,v,"$1."),t=h.call(t,m,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===d.call(e.specifier)?d.call(t):g.call(t)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function S(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var T=String.fromCharCode,k=isNaN,V=Array.isArray;function P(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,n,i,o,a,c,l,p;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,l=0;l<e.length;l++)if(f(n=e[l]))a+=n;else{if(r=void 0!==n.precision,!(n=P(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,k(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!k(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(o)?String(n.arg):T(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=O(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=u(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,n,i;for(t=[],i=0,n=A.exec(e);n;)(r=e.slice(i,A.lastIndex-n[0].length)).length&&t.push(r),t.push(F(n)),i=A.lastIndex,n=A.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function M(e){return"string"==typeof e}function $(e){var r,t;if(!M(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[I(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return x.apply(null,r)}var N,C=Object.prototype,z=C.toString,B=C.__defineGetter__,W=C.__defineSetter__,G=C.__lookupGetter__,L=C.__lookupSetter__;N=function(){try{return n({},"x",{}),!0}catch(e){return!1}}()?i:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===z.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===z.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(e,r)||L.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&B&&B.call(e,r,t.get),a&&W&&W.call(e,r,t.set),e};var R=N;function q(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var Z=Math.floor;function J(e){return Z(e)===e}function Y(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&J(e.length)&&e.length>=0&&e.length<=9007199254740991}var U=Object,D=/./;function H(e){return"boolean"==typeof e}var K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Q(){return K&&"symbol"==typeof Symbol.toStringTag}var ee=Object.prototype.toString;var re=Object.prototype.hasOwnProperty;function te(e,r){return null!=e&&re.call(e,r)}var ne="function"==typeof Symbol?Symbol:void 0,ie="function"==typeof ne?ne.toStringTag:"";var oe=Q()?function(e){var r,t,n;if(null==e)return ee.call(e);t=e[ie],r=te(e,ie);try{e[ie]=void 0}catch(r){return ee.call(e)}return n=ee.call(e),r?e[ie]=t:delete e[ie],n}:function(e){return ee.call(e)},ae=Boolean,ue=Boolean.prototype.toString;var ce=Q();function le(e){return"object"==typeof e&&(e instanceof ae||(ce?function(e){try{return ue.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===oe(e)))}function se(e){return H(e)||le(e)}function fe(){return new Function("return this;")()}q(se,"isPrimitive",H),q(se,"isObject",le);var pe="object"==typeof self?self:null,ge="object"==typeof window?window:null,de="object"==typeof global?global:null,he="object"==typeof globalThis?globalThis:null;var ye=function(e){if(arguments.length){if(!H(e))throw new TypeError($("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return fe()}if(he)return he;if(pe)return pe;if(ge)return ge;if(de)return de;throw new Error("unexpected error. Unable to resolve global object.")}(),be=ye.document&&ye.document.childNodes,ve=Int8Array;function me(){return/^\s*function\s*([^(]*)/i}var we=/^\s*function\s*([^(]*)/i;q(me,"REGEXP",we);var _e=Array.isArray?Array.isArray:function(e){return"[object Array]"===oe(e)};function je(e){return null!==e&&"object"==typeof e}function Oe(e){return je(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function Ee(e){var r,t,n;if(("Object"===(t=oe(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=we.exec(n.toString()))return r[1]}return Oe(e)?"Buffer":t}q(je,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError($("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!_e(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(je));var Se="function"==typeof D||"object"==typeof ve||"function"==typeof be?function(e){return Ee(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Ee(e).toLowerCase():r};function Te(e){return"function"===Se(e)}var ke,Ve=Object.getPrototypeOf;ke=Te(Object.getPrototypeOf)?Ve:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===oe(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Pe=ke;function xe(e){return null==e?null:(e=U(e),Pe(e))}function Ae(e){return"number"==typeof e}var Fe=Number,Ie=Fe.prototype.toString;var Me=Q();function $e(e){return"object"==typeof e&&(e instanceof Fe||(Me?function(e){try{return Ie.call(e),!0}catch(e){return!1}}(e):"[object Number]"===oe(e)))}function Ne(e){return Ae(e)||$e(e)}q(Ne,"isPrimitive",Ae),q(Ne,"isObject",$e);var Ce=Number.POSITIVE_INFINITY,ze=Fe.NEGATIVE_INFINITY;function Be(e){return e<Ce&&e>ze&&J(e)}function We(e){return Ae(e)&&Be(e)}function Ge(e){return $e(e)&&Be(e.valueOf())}function Le(e){return We(e)||Ge(e)}function Re(e){return We(e)&&e>=0}function qe(e){return Ge(e)&&e.valueOf()>=0}function Xe(e){return Re(e)||qe(e)}q(Le,"isPrimitive",We),q(Le,"isObject",Ge),q(Xe,"isPrimitive",Re),q(Xe,"isObject",qe);var Ze=Te(Object.assign),Je=Object.assign;function Ye(e){return Object.keys(Object(e))}var Ue,De=void 0!==Object.keys;function He(e){return"[object Arguments]"===oe(e)}Ue=function(){return He(arguments)}();var Ke=Ue;function Qe(e){return"string"==typeof e}var er=String.prototype.valueOf;var rr=Q();function tr(e){return"object"==typeof e&&(e instanceof String||(rr?function(e){try{return er.call(e),!0}catch(e){return!1}}(e):"[object String]"===oe(e)))}function nr(e){return Qe(e)||tr(e)}function ir(e){return e!=e}function or(e){return Ae(e)&&ir(e)}function ar(e){return $e(e)&&ir(e.valueOf())}function ur(e){return or(e)||ar(e)}q(nr,"isPrimitive",Qe),q(nr,"isObject",tr),q(ur,"isPrimitive",or),q(ur,"isObject",ar);var cr=Object.prototype.propertyIsEnumerable;var lr=!cr.call("beep","0");function sr(e,r){var t;return null!=e&&(!(t=cr.call(e,r))&&lr&&nr(e)?!or(r=+r)&&We(r)&&r>=0&&r<e.length:t)}var fr=Ke?He:function(e){return null!==e&&"object"==typeof e&&!_e(e)&&"number"==typeof e.length&&J(e.length)&&e.length>=0&&e.length<=4294967295&&te(e,"callee")&&!sr(e,"callee")},pr=Array.prototype.slice;var gr=sr((function(){}),"prototype"),dr=!sr({toString:null},"toString");function hr(e){return e!=e}function yr(e){return Ae(e)&&hr(e)}function br(e){return $e(e)&&hr(e.valueOf())}function vr(e){return yr(e)||br(e)}function mr(e,r,t){var n,i;if(!Y(e)&&!Qe(e))throw new TypeError($("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!We(t))throw new TypeError($("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(vr(r)){for(;i<n;i++)if(vr(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}function wr(e){return e.constructor&&e.constructor.prototype===e}q(vr,"isPrimitive",yr),q(vr,"isObject",br);var _r=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],jr="undefined"==typeof window?void 0:window;var Or=function(){var e;if("undefined"===Se(jr))return!1;for(e in jr)try{-1===mr(_r,e)&&te(jr,e)&&null!==jr[e]&&"object"===Se(jr[e])&&wr(jr[e])}catch(e){return!0}return!1}(),Er="undefined"!=typeof window;var Sr,Tr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Sr=De?function(){return 2!==(Ye(arguments)||"").length}(1,2)?function(e){return fr(e)?Ye(pr.call(e)):Ye(e)}:Ye:function(e){var r,t,n,i,o,a,u;if(i=[],fr(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!te(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof e)&&!je(e))return i;t=gr&&n}for(o in e)t&&"prototype"===o||!te(e,o)||i.push(String(o));if(dr)for(r=function(e){if(!1===Er&&!Or)return wr(e);try{return wr(e)}catch(e){return!1}}(e),u=0;u<Tr.length;u++)a=Tr[u],r&&"constructor"===a||!te(e,a)||i.push(String(a));return i};var kr=Sr,Vr=void 0!==Object.getOwnPropertySymbols,Pr=U.getOwnPropertySymbols;var xr,Ar=Vr?function(e){return Pr(U(e))}:function(){return[]};function Fr(e){var r,t,n;for(r=kr(e),t=Ar(e),n=0;n<t.length;n++)sr(e,t[n])&&r.push(t[n]);return r}xr=Ze?Je:function(e){var r,t,n,i,o,a,u;if(null==e)throw new TypeError($("invalid argument. First argument must be a non-null object. Value: `%s`.",e));for(o=U(e),a=1;a<arguments.length;a++)if(null!=(r=arguments[a]))for(i=(t=Fr(U(r))).length,u=0;u<i;u++)o[n=t[u]]=r[n];return o};var Ir=xr,Mr="function"==typeof Object.defineProperty?Object.defineProperty:null;var $r,Nr=Object.defineProperty,Cr=Object.prototype,zr=Cr.toString,Br=Cr.__defineGetter__,Wr=Cr.__defineSetter__,Gr=Cr.__lookupGetter__,Lr=Cr.__lookupSetter__;$r=function(){try{return Mr({},"x",{}),!0}catch(e){return!1}}()?Nr:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===zr.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===zr.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Gr.call(e,r)||Lr.call(e,r)?(n=e.__proto__,e.__proto__=Cr,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Br&&Br.call(e,r,t.get),a&&Wr&&Wr.call(e,r,t.set),e};var Rr=$r;function qr(e){var r=typeof e;return null===e||"object"!==r&&"function"!==r?new TypeError($("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `%s`.",e)):null}var Xr=Object.create;function Zr(){}var Jr="function"==typeof Xr?Xr:function(e){return Zr.prototype=e,new Zr};var Yr="function"==typeof Object.defineProperty?Object.defineProperty:null;var Ur,Dr=Object.defineProperty,Hr=Object.prototype,Kr=Hr.toString,Qr=Hr.__defineGetter__,et=Hr.__defineSetter__,rt=Hr.__lookupGetter__,tt=Hr.__lookupSetter__;Ur=function(){try{return Yr({},"x",{}),!0}catch(e){return!1}}()?Dr:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===Kr.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Kr.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(rt.call(e,r)||tt.call(e,r)?(n=e.__proto__,e.__proto__=Hr,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Qr&&Qr.call(e,r,t.get),a&&et&&et.call(e,r,t.set),e};var nt=Ur;function it(e,r,t){nt(e,r,{configurable:!0,enumerable:!1,writable:!0,value:t})}var ot="function"==typeof Buffer?Buffer:null;var at,ut=r.Buffer;at=function(){var e,r;if("function"!=typeof ot)return!1;try{e=Oe(r="function"==typeof ot.from?ot.from([1,2,3,4]):new ot([1,2,3,4]))&&1===r[0]&&2===r[1]&&3===r[2]&&4===r[3]}catch(r){e=!1}return e}()?ut:function(){throw new Error("not implemented")};var ct,lt=at;ct=Te(lt.from)?function(e,r){if(!Qe(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1){if(!Qe(r))throw new TypeError($("invalid argument. Second argument must be a string. Value: `%s`.",r));return lt.from(e,r)}return lt.from(e,"utf8")}:function(e,r){if(!Qe(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1){if(!Qe(r))throw new TypeError($("invalid argument. Second argument must be a string. Value: `%s`.",r));return new lt(e,r)}return new lt(e,"utf8")};var st=ct,ft=t;var pt={objectMode:!1,encoding:null,sep:"\n"};var gt=Object.prototype;function dt(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!_e(e)}(e)&&(!(r=xe(e))||!te(e,"constructor")&&te(r,"constructor")&&Te(r.constructor)&&"[object Function]"===oe(r.constructor)&&te(r,"isPrototypeOf")&&Te(r.isPrototypeOf)&&(r===gt||function(e){var r;for(r in e)if(!te(e,r))return!1;return!0}(e)))}function ht(e){return Ae(e)&&e>=0}function yt(e){return $e(e)&&e.valueOf()>=0}function bt(e){return ht(e)||yt(e)}function vt(e,r){return dt(r)?te(r,"sep")&&(e.sep=r.sep,!Qe(e.sep))?new TypeError($("invalid option. `%s` option must be a string. Option: `%s`.","sep",e.sep)):te(r,"objectMode")&&(e.objectMode=r.objectMode,!H(e.objectMode))?new TypeError($("invalid option. `%s` option must be a boolean. Option: `%s`.","objectMode",e.objectMode)):te(r,"encoding")&&(e.encoding=r.encoding,!Qe(e.encoding)&&null!==e.encoding)?new TypeError($("invalid option. `%s` option must be a string or null. Option: `%s`.","encoding",e.encoding)):te(r,"highWaterMark")&&(e.highWaterMark=r.highWaterMark,!ht(e.highWaterMark))?new TypeError($("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","highWaterMark",e.highWaterMark)):te(r,"serialize")&&(e.serialize=r.serialize,!Te(e.serialize))?new TypeError($("invalid option. `%s` option must be a function. Option: `%s`.","serialize",e.serialize)):null:new TypeError($("invalid argument. Options argument must be an object. Value: `%s`.",r))}q(bt,"isPrimitive",ht),q(bt,"isObject",yt);var mt=X(Object.freeze({__proto__:null,default:()=>()=>{}}))("from-strided-array-stream"),wt=e.Readable;function _t(e,r,t,n,i){var o,a,u;if(!(this instanceof _t))return arguments.length>4?new _t(e,r,t,n,i):new _t(e,r,t,n);if(!Re(e))throw new TypeError($("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",e));if(!Y(r))throw new TypeError($("invalid argument. Second argument must be an array-like object. Value: `%s`.",r));if(!We(t))throw new TypeError($("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(!Re(n))throw new TypeError($("invalid argument. Fourth argument must be a nonnegative integer. Value: `%s`.",n));if(e>0&&(u=n+(e-1)*t,n>=r.length||u<0||u>=r.length))throw new RangeError("invalid arguments. Strided array parameters are incompatible with the provided array-like object. Linear index exceeds array bounds.");if(o=Ir({},pt),arguments.length>4&&(a=vt(o,i)))throw a;return mt("Creating a readable stream configured with the following options: %s.",JSON.stringify(o)),wt.call(this,o),it(this,"_destroyed",!1),q(this,"_objectMode",o.objectMode),q(this,"_sep",o.sep),q(this,"_serialize",o.serialize||JSON.stringify),q(this,"_buffer",r),q(this,"_N",e),q(this,"_stride",t),q(this,"_offset",n),it(this,"_idx",n),it(this,"_i",0),this}return function(e,r){var t=qr(e);if(t)throw t;if(t=qr(r))throw t;if(void 0===r.prototype)throw new TypeError($("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `%s`.",r.prototype));e.prototype=Jr(r.prototype),Rr(e.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:e})}(_t,wt),q(_t.prototype,"_read",(function(){var e,r,t;if(!this._destroyed)for(e=!0;e;){if(r=null,this._i+=1,this._i>this._N)return mt("Finished iteration."),this.push(null);t=this._buffer[this._idx],mt("Value: %s. Idx: %d. Iter: %d.",JSON.stringify(t),this._idx,this._i),this._idx+=this._stride,!1===this._objectMode&&("string"==typeof(t=this._serialize(t))?t=1===this._i?st(t):st(this._sep+t):Oe(t)?this._i>1&&(t=lt.concat([st(this._sep),t])):r=new Error($("invalid operation. Serialization function must return a string or Buffer. Value: `%s`.",t))),r?this.emit("error",r):e=this.push(t)}})),q(_t.prototype,"destroy",(function(e){var r;return this._destroyed?(mt("Attempted to destroy an already destroyed stream."),this):(r=this,this._destroyed=!0,function(e){var r,t;for(r=[],t=1;t<arguments.length;t++)r.push(arguments[t]);function n(){e.apply(null,r)}ft.nextTick(n)}((function(){e&&(mt("Stream was destroyed due to an error. Error: %s.",function(e){if("object"!=typeof e||null===e)return!1;if(e instanceof Error)return!0;for(;e;){if("[object Error]"===oe(e))return!0;e=xe(e)}return!1}(e)?e.message:JSON.stringify(e)),r.emit("error",e));mt("Closing the stream..."),r.emit("close")})),this)})),q(_t,"objectMode",(function(e,r,t,n,i){var o;if(arguments.length>4){if(!dt(o=i))throw new TypeError($("invalid argument. Options argument must be an object. Value: `%s`.",o));o=Ir({},i)}else o={};return o.objectMode=!0,new _t(e,r,t,n,o)})),q(_t,"factory",(function(e){var r;if(arguments.length){if(!dt(e))throw new TypeError($("invalid argument. Options argument must be an object. Value: `%s`.",e));r=Ir({},e)}else r={};return t;function t(e,t,n,i){return new _t(e,t,n,i,r)}})),_t}));
//# sourceMappingURL=index.js.map
