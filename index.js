// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("stream"),require("buffer"),require("process")):"function"==typeof define&&define.amd?define(["stream","buffer","process"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).stridedArrayStream=r(e.require$$0$3,e.require$$0$1,e.require$$0$2)}(this,(function(e,r,t){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var i,o=Object.defineProperty,a=Object.prototype,u=a.toString,c=a.__defineGetter__,f=a.__defineSetter__,s=a.__lookupGetter__,l=a.__lookupSetter__;i=function(){try{return n({},"x",{}),!0}catch(e){return!1}}()?o:function(e,r,t){var n,i,o,p;if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(s.call(e,r)||l.call(e,r)?(n=e.__proto__,e.__proto__=a,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,p="set"in t,i&&(o||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&c&&c.call(e,r,t.get),p&&f&&f.call(e,r,t.set),e};var p=i;function g(e,r,t){p(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function h(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var d=Math.floor;function y(e){return d(e)===e}function b(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&y(e.length)&&e.length>=0&&e.length<=9007199254740991}var v=/./;function w(e){return"boolean"==typeof e}var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function j(){return m&&"symbol"==typeof Symbol.toStringTag}var _=Object.prototype.toString;var E=Object.prototype.hasOwnProperty;function O(e,r){return null!=e&&E.call(e,r)}var S="function"==typeof Symbol?Symbol.toStringTag:"";var T=j()?function(e){var r,t,n;if(null==e)return _.call(e);t=e[S],r=O(e,S);try{e[S]=void 0}catch(r){return _.call(e)}return n=_.call(e),r?e[S]=t:delete e[S],n}:function(e){return _.call(e)},k=Boolean.prototype.toString;var x=j();function I(e){return"object"==typeof e&&(e instanceof Boolean||(x?function(e){try{return k.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===T(e)))}function P(e){return w(e)||I(e)}function M(){return new Function("return this;")()}g(P,"isPrimitive",w),g(P,"isObject",I);var V="object"==typeof self?self:null,A="object"==typeof window?window:null,F="object"==typeof global?global:null;var $=function(e){if(arguments.length){if(!w(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return M()}if(V)return V;if(A)return A;if(F)return F;throw new Error("unexpected error. Unable to resolve global object.")}(),N=$.document&&$.document.childNodes,C=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var W=/^\s*function\s*([^(]*)/i;g(B,"REGEXP",W);var z=Array.isArray?Array.isArray:function(e){return"[object Array]"===T(e)};function R(e){return null!==e&&"object"==typeof e}function L(e){return R(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function q(e){var r,t,n;if(("Object"===(t=T(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=W.exec(n.toString()))return r[1]}return L(e)?"Buffer":t}g(R,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!z(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(R));var G="function"==typeof v||"object"==typeof C||"function"==typeof N?function(e){return q(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?q(e).toLowerCase():r};function X(e){return"function"===G(e)}var Z,J=Object.getPrototypeOf;Z=X(Object.getPrototypeOf)?J:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===T(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var U=Z;function Y(e){return null==e?null:(e=Object(e),U(e))}function D(e){return"number"==typeof e}var H=Number,K=H.prototype.toString;var Q=j();function ee(e){return"object"==typeof e&&(e instanceof H||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Number]"===T(e)))}function re(e){return D(e)||ee(e)}g(re,"isPrimitive",D),g(re,"isObject",ee);var te=Number.POSITIVE_INFINITY,ne=H.NEGATIVE_INFINITY;function ie(e){return e<te&&e>ne&&y(e)}function oe(e){return D(e)&&ie(e)}function ae(e){return ee(e)&&ie(e.valueOf())}function ue(e){return oe(e)||ae(e)}function ce(e){return oe(e)&&e>=0}function fe(e){return ae(e)&&e.valueOf()>=0}function se(e){return ce(e)||fe(e)}g(ue,"isPrimitive",oe),g(ue,"isObject",ae),g(se,"isPrimitive",ce),g(se,"isObject",fe);var le=X(Object.assign),pe=Object.assign,ge=Object;function he(e){return Object.keys(Object(e))}var de,ye=void 0!==Object.keys;function be(e){return"[object Arguments]"===T(e)}de=function(){return be(arguments)}();var ve=de;function we(e){return"string"==typeof e}var me=String.prototype.valueOf;var je=j();function _e(e){return"object"==typeof e&&(e instanceof String||(je?function(e){try{return me.call(e),!0}catch(e){return!1}}(e):"[object String]"===T(e)))}function Ee(e){return we(e)||_e(e)}function Oe(e){return e!=e}function Se(e){return D(e)&&Oe(e)}function Te(e){return ee(e)&&Oe(e.valueOf())}function ke(e){return Se(e)||Te(e)}g(Ee,"isPrimitive",we),g(Ee,"isObject",_e),g(ke,"isPrimitive",Se),g(ke,"isObject",Te);var xe=Object.prototype.propertyIsEnumerable;var Ie=!xe.call("beep","0");function Pe(e,r){var t;return null!=e&&(!(t=xe.call(e,r))&&Ie&&Ee(e)?!Se(r=+r)&&oe(r)&&r>=0&&r<e.length:t)}var Me=ve?be:function(e){return null!==e&&"object"==typeof e&&!z(e)&&"number"==typeof e.length&&y(e.length)&&e.length>=0&&e.length<=4294967295&&O(e,"callee")&&!Pe(e,"callee")},Ve=Array.prototype.slice;var Ae=Pe((function(){}),"prototype"),Fe=!Pe({toString:null},"toString");function $e(e,r,t){var n,i;if(!b(e)&&!we(e))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+e+"`.");if(0===(n=e.length))return-1;if(3===arguments.length){if(!oe(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(ke(r)){for(;i<n;i++)if(ke(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}function Ne(e){return e.constructor&&e.constructor.prototype===e}var Ce=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Be="undefined"==typeof window?void 0:window;var We=function(){var e;if("undefined"===G(Be))return!1;for(e in Be)try{-1===$e(Ce,e)&&O(Be,e)&&null!==Be[e]&&"object"===G(Be[e])&&Ne(Be[e])}catch(e){return!0}return!1}(),ze="undefined"!=typeof window;var Re,Le=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Re=ye?function(){return 2!==(he(arguments)||"").length}(1,2)?function(e){return Me(e)?he(Ve.call(e)):he(e)}:he:function(e){var r,t,n,i,o,a,u;if(i=[],Me(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!O(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof e)&&!R(e))return i;t=Ae&&n}for(o in e)t&&"prototype"===o||!O(e,o)||i.push(String(o));if(Fe)for(r=function(e){if(!1===ze&&!We)return Ne(e);try{return Ne(e)}catch(e){return!1}}(e),u=0;u<Le.length;u++)a=Le[u],r&&"constructor"===a||!O(e,a)||i.push(String(a));return i};var qe,Ge=Re,Xe=ge.getOwnPropertyDescriptor;qe=le?pe:function(e){var r,t,n,i,o,a,u,c;if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(a=ge(e),u=1;u<arguments.length;u++)if(null!=(r=arguments[u]))for(o=(n=Ge(ge(r))).length,c=0;c<o;c++)i=n[c],void 0!==(t=Xe(r,i))&&t.enumerable&&(a[i]=r[i]);return a};var Ze=qe;function Je(e){var r=typeof e;return null===e||"object"!==r&&"function"!==r?new TypeError("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `"+e+"`."):null}var Ue=Object.create;function Ye(){}var De="function"==typeof Ue?Ue:function(e){return Ye.prototype=e,new Ye};function He(e,r,t){p(e,r,{configurable:!0,enumerable:!1,writable:!0,value:t})}var Ke="function"==typeof Buffer?Buffer:null;var Qe,er=r.Buffer;Qe=function(){var e,r;if("function"!=typeof Ke)return!1;try{e=L(r="function"==typeof Ke.from?Ke.from([1,2,3,4]):new Ke([1,2,3,4]))&&1===r[0]&&2===r[1]&&3===r[2]&&4===r[3]}catch(r){e=!1}return e}()?er:function(){throw new Error("not implemented")};var rr=Qe,tr=X(rr.from);function nr(e){return"number"==typeof e}function ir(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function or(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+ir(i):ir(i)+e,n&&(e="-"+e)),e}var ar=String.prototype.toLowerCase,ur=String.prototype.toUpperCase;function cr(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!nr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=or(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=or(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ur.call(e.specifier)?ur.call(t):ar.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function fr(e){return"string"==typeof e}var sr=Math.abs,lr=String.prototype.toLowerCase,pr=String.prototype.toUpperCase,gr=String.prototype.replace,hr=/e\+(\d)$/,dr=/e-(\d)$/,yr=/^(\d+)$/,br=/^(\d+)e/,vr=/\.0$/,wr=/\.0*e/,mr=/(\..*[^0])0*e/;function jr(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!nr(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":sr(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=gr.call(t,mr,"$1e"),t=gr.call(t,wr,"e"),t=gr.call(t,vr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=gr.call(t,hr,"e+0$1"),t=gr.call(t,dr,"e-0$1"),e.alternate&&(t=gr.call(t,yr,"$1."),t=gr.call(t,br,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===pr.call(e.specifier)?pr.call(t):lr.call(t)}function _r(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Er(e,r,t){var n=r-e.length;return n<0?e:e=t?e+_r(n):_r(n)+e}var Or=String.fromCharCode,Sr=isNaN,Tr=Array.isArray;function kr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function xr(e){var r,t,n,i,o,a,u,c,f;if(!Tr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,c=0;c<e.length;c++)if(fr(n=e[c]))a+=n;else{if(r=void 0!==n.precision,!(n=kr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Sr(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Sr(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=cr(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!Sr(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Sr(o)?String(n.arg):Or(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=jr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=or(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Er(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var Ir,Pr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Mr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Vr(e){var r,t,n,i;for(t=[],i=0,n=Pr.exec(e);n;)(r=e.slice(i,Pr.lastIndex-n[0].length)).length&&t.push(r),t.push(Mr(n)),i=Pr.lastIndex,n=Pr.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function Ar(e){return"string"==typeof e}function Fr(e){var r,t,n;if(!Ar(e))throw new TypeError(Fr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Vr(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return xr.apply(null,t)}Ir=tr?function(e,r){if(!we(e))throw new TypeError(Fr("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1){if(!we(r))throw new TypeError(Fr("invalid argument. Second argument must be a string. Value: `%s`.",r));return rr.from(e,r)}return rr.from(e,"utf8")}:function(e,r){if(!we(e))throw new TypeError(Fr("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1){if(!we(r))throw new TypeError(Fr("invalid argument. Second argument must be a string. Value: `%s`.",r));return new rr(e,r)}return new rr(e,"utf8")};var $r=Ir;function Nr(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}var Cr=t;var Br={objectMode:!1,encoding:null,sep:"\n"};var Wr=Object.prototype;function zr(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!z(e)}(e)&&(!(r=Y(e))||!O(e,"constructor")&&O(r,"constructor")&&X(r.constructor)&&"[object Function]"===T(r.constructor)&&O(r,"isPrototypeOf")&&X(r.isPrototypeOf)&&(r===Wr||function(e){var r;for(r in e)if(!O(e,r))return!1;return!0}(e)))}function Rr(e){return D(e)&&e>=0}function Lr(e){return ee(e)&&e.valueOf()>=0}function qr(e){return Rr(e)||Lr(e)}function Gr(e,r){return zr(r)?O(r,"sep")&&(e.sep=r.sep,!we(e.sep))?new TypeError(Nr("0g22i","sep",e.sep)):O(r,"objectMode")&&(e.objectMode=r.objectMode,!w(e.objectMode))?new TypeError(Nr("0g230","objectMode",e.objectMode)):O(r,"encoding")&&(e.encoding=r.encoding,!we(e.encoding)&&null!==e.encoding)?new TypeError(Nr("0g284","encoding",e.encoding)):O(r,"highWaterMark")&&(e.highWaterMark=r.highWaterMark,!Rr(e.highWaterMark))?new TypeError(Nr("0g24x","highWaterMark",e.highWaterMark)):O(r,"serialize")&&(e.serialize=r.serialize,!X(e.serialize))?new TypeError(Nr("0g278","serialize",e.serialize)):null:new TypeError(Nr("0g22h",r))}g(qr,"isPrimitive",Rr),g(qr,"isObject",Lr);var Xr=h(Object.freeze({__proto__:null,default:()=>()=>{}}))("from-strided-array-stream"),Zr=e.Readable;function Jr(e,r,t,n,i){var o,a,u;if(!(this instanceof Jr))return arguments.length>4?new Jr(e,r,t,n,i):new Jr(e,r,t,n);if(!ce(e))throw new TypeError(Nr("0g22p",e));if(!b(r))throw new TypeError(Nr("0g23A",r));if(!oe(t))throw new TypeError(Nr("0g23B",t));if(!ce(n))throw new TypeError(Nr("0g23C",n));if(e>0&&(u=n+(e-1)*t,n>=r.length||u<0||u>=r.length))throw new RangeError(Nr("0g21R"));if(o=Ze({},Br),arguments.length>4&&(a=Gr(o,i)))throw a;return Xr("Creating a readable stream configured with the following options: %s.",JSON.stringify(o)),Zr.call(this,o),He(this,"_destroyed",!1),g(this,"_objectMode",o.objectMode),g(this,"_sep",o.sep),g(this,"_serialize",o.serialize||JSON.stringify),g(this,"_buffer",r),g(this,"_N",e),g(this,"_stride",t),g(this,"_offset",n),He(this,"_idx",n),He(this,"_i",0),this}return function(e,r){var t=Je(e);if(t)throw t;if(t=Je(r))throw t;if(void 0===r.prototype)throw new TypeError("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `"+r.prototype+"`.");e.prototype=De(r.prototype),p(e.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:e})}(Jr,Zr),g(Jr.prototype,"_read",(function(){var e,r,t;if(!this._destroyed)for(e=!0;e;){if(r=null,this._i+=1,this._i>this._N)return Xr("Finished iteration."),this.push(null);t=this._buffer[this._idx],Xr("Value: %s. Idx: %d. Iter: %d.",JSON.stringify(t),this._idx,this._i),this._idx+=this._stride,!1===this._objectMode&&("string"==typeof(t=this._serialize(t))?t=1===this._i?$r(t):$r(this._sep+t):L(t)?this._i>1&&(t=rr.concat([$r(this._sep),t])):r=new Error(Nr("0g2Au",t))),r?this.emit("error",r):e=this.push(t)}})),g(Jr.prototype,"destroy",(function(e){var r;return this._destroyed?(Xr("Attempted to destroy an already destroyed stream."),this):(r=this,this._destroyed=!0,function(e){var r,t;for(r=[],t=1;t<arguments.length;t++)r.push(arguments[t]);function n(){e.apply(null,r)}Cr.nextTick(n)}((function(){e&&(Xr("Stream was destroyed due to an error. Error: %s.",function(e){if("object"!=typeof e||null===e)return!1;if(e instanceof Error)return!0;for(;e;){if("[object Error]"===T(e))return!0;e=Y(e)}return!1}(e)?e.message:JSON.stringify(e)),r.emit("error",e));Xr("Closing the stream..."),r.emit("close")})),this)})),g(Jr,"objectMode",(function(e,r,t,n,i){var o;if(arguments.length>4){if(!zr(o=i))throw new TypeError(Nr("0g22h",o));o=Ze({},i)}else o={};return o.objectMode=!0,new Jr(e,r,t,n,o)})),g(Jr,"factory",(function(e){var r;return r=arguments.length?Ze({},e):{},t;function t(e,t,n,i){return new Jr(e,t,n,i,r)}})),Jr}));
//# sourceMappingURL=index.js.map
