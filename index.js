// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("stream"),require("buffer"),require("process")):"function"==typeof define&&define.amd?define(["stream","buffer","process"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).stridedArrayStream=e(r.require$$0$3,r.require$$0$1,r.require$$0$2)}(this,(function(r,e,t){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o=Object.defineProperty;function i(r){return"number"==typeof r}function a(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function u(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+a(o):a(o)+r,n&&(r="-"+r)),r}var c=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function s(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=u(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=u(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===f.call(r.specifier)?f.call(t):c.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var l=Math.abs,p=String.prototype.toLowerCase,g=String.prototype.toUpperCase,h=String.prototype.replace,d=/e\+(\d)$/,y=/e-(\d)$/,b=/^(\d+)$/,v=/^(\d+)e/,w=/\.0$/,m=/\.0*e/,j=/(\..*[^0])0*e/;function _(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":l(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=h.call(t,j,"$1e"),t=h.call(t,m,"e"),t=h.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=h.call(t,d,"e+0$1"),t=h.call(t,y,"e-0$1"),r.alternate&&(t=h.call(t,b,"$1."),t=h.call(t,v,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===g.call(r.specifier)?g.call(t):p.call(t)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var O=String.fromCharCode,S=Array.isArray;function T(r){return r!=r}function M(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,i,a,c,f,l,p,g,h,d;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,f=0;f<r.length;f++)if(n=r[f],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=M(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,T(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!T(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(i)?String(n.arg):O(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=u(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,h=n.padRight,d=void 0,(d=g-p.length)<0?p:p=h?p+E(d):E(d)+p)),a+=n.arg||"",c+=1}return a}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,o;for(t=[],o=0,n=x.exec(r);n;)(e=r.slice(o,x.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),o=x.lastIndex,n=x.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function I(r){var e,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[P(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return k.apply(null,e)}var A,F=Object.prototype,$=F.toString,H=F.__defineGetter__,N=F.__defineSetter__,W=F.__lookupGetter__,z=F.__lookupSetter__;A=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?o:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(W.call(r,e)||z.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&H&&H.call(r,e,t.get),a&&N&&N.call(r,e,t.set),r};var C=A;function B(r,e,t){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function R(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var L=Math.floor;function q(r){return L(r)===r}var G=9007199254740991;function X(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&q(r.length)&&r.length>=0&&r.length<=G}var Z=Object,J=/./;function U(r){return"boolean"==typeof r}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function D(){return Y&&"symbol"==typeof Symbol.toStringTag}var K=Object.prototype.toString;var Q=Object.prototype.hasOwnProperty;function rr(r,e){return null!=r&&Q.call(r,e)}var er="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof er?er.toStringTag:"";var nr=D()?function(r){var e,t,n;if(null==r)return K.call(r);t=r[tr],e=rr(r,tr);try{r[tr]=void 0}catch(e){return K.call(r)}return n=K.call(r),e?r[tr]=t:delete r[tr],n}:function(r){return K.call(r)},or=Boolean,ir=Boolean.prototype.toString;var ar=D();function ur(r){return"object"==typeof r&&(r instanceof or||(ar?function(r){try{return ir.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===nr(r)))}function cr(r){return U(r)||ur(r)}B(cr,"isPrimitive",U),B(cr,"isObject",ur);var fr="object"==typeof self?self:null,sr="object"==typeof window?window:null,lr="object"==typeof global?global:null,pr="object"==typeof globalThis?globalThis:null;var gr=function(r){if(arguments.length){if(!U(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(pr)return pr;if(fr)return fr;if(sr)return sr;if(lr)return lr;throw new Error("unexpected error. Unable to resolve global object.")}(),hr=gr.document&&gr.document.childNodes,dr=Int8Array;function yr(){return/^\s*function\s*([^(]*)/i}var br=/^\s*function\s*([^(]*)/i;B(yr,"REGEXP",br);var vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===nr(r)};function wr(r){return null!==r&&"object"==typeof r}function mr(r){return wr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function jr(r){var e,t,n;if(("Object"===(t=nr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=br.exec(n.toString()))return e[1]}return mr(r)?"Buffer":t}B(wr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!vr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(wr));var _r="function"==typeof J||"object"==typeof dr||"function"==typeof hr?function(r){return jr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?jr(r).toLowerCase():e};function Er(r){return"function"===_r(r)}var Or,Sr=Object.getPrototypeOf;Or=Er(Object.getPrototypeOf)?Sr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===nr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Tr=Or;function Mr(r){return null==r?null:(r=Z(r),Tr(r))}function kr(r){return"number"==typeof r}var xr=Number,Vr=xr.prototype.toString;var Pr=D();function Ir(r){return"object"==typeof r&&(r instanceof xr||(Pr?function(r){try{return Vr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===nr(r)))}function Ar(r){return kr(r)||Ir(r)}B(Ar,"isPrimitive",kr),B(Ar,"isObject",Ir);var Fr=Number.POSITIVE_INFINITY,$r=xr.NEGATIVE_INFINITY;function Hr(r){return r<Fr&&r>$r&&q(r)}function Nr(r){return kr(r)&&Hr(r)}function Wr(r){return Ir(r)&&Hr(r.valueOf())}function zr(r){return Nr(r)||Wr(r)}function Cr(r){return Nr(r)&&r>=0}function Br(r){return Wr(r)&&r.valueOf()>=0}function Rr(r){return Cr(r)||Br(r)}B(zr,"isPrimitive",Nr),B(zr,"isObject",Wr),B(Rr,"isPrimitive",Cr),B(Rr,"isObject",Br);var Lr=Er(Object.assign),qr=Object.assign;function Gr(r){return Object.keys(Object(r))}var Xr,Zr=void 0!==Object.keys;function Jr(r){return"[object Arguments]"===nr(r)}Xr=function(){return Jr(arguments)}();var Ur=Xr;function Yr(r){return"string"==typeof r}var Dr=String.prototype.valueOf;var Kr=D();function Qr(r){return"object"==typeof r&&(r instanceof String||(Kr?function(r){try{return Dr.call(r),!0}catch(r){return!1}}(r):"[object String]"===nr(r)))}function re(r){return Yr(r)||Qr(r)}function ee(r){return r!=r}function te(r){return kr(r)&&ee(r)}function ne(r){return Ir(r)&&ee(r.valueOf())}function oe(r){return te(r)||ne(r)}B(re,"isPrimitive",Yr),B(re,"isObject",Qr),B(oe,"isPrimitive",te),B(oe,"isObject",ne);var ie=Object.prototype.propertyIsEnumerable;var ae=!ie.call("beep","0");function ue(r,e){var t;return null!=r&&(!(t=ie.call(r,e))&&ae&&re(r)?!te(e=+e)&&Nr(e)&&e>=0&&e<r.length:t)}var ce=Ur?Jr:function(r){return null!==r&&"object"==typeof r&&!vr(r)&&"number"==typeof r.length&&q(r.length)&&r.length>=0&&r.length<=4294967295&&rr(r,"callee")&&!ue(r,"callee")},fe=Array.prototype.slice;var se=ue((function(){}),"prototype"),le=!ue({toString:null},"toString");function pe(r,e,t){var n,o;if(!X(r)&&!Yr(r))throw new TypeError(I("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Nr(t))throw new TypeError(I("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(oe(e)){for(;o<n;o++)if(oe(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}function ge(r){return r.constructor&&r.constructor.prototype===r}var he=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],de="undefined"==typeof window?void 0:window;var ye=function(){var r;if("undefined"===_r(de))return!1;for(r in de)try{-1===pe(he,r)&&rr(de,r)&&null!==de[r]&&"object"===_r(de[r])&&ge(de[r])}catch(r){return!0}return!1}(),be="undefined"!=typeof window;var ve,we=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ve=Zr?function(){return 2!==(Gr(arguments)||"").length}(1,2)?function(r){return ce(r)?Gr(fe.call(r)):Gr(r)}:Gr:function(r){var e,t,n,o,i,a,u;if(o=[],ce(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!rr(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!wr(r))return o;t=se&&n}for(i in r)t&&"prototype"===i||!rr(r,i)||o.push(String(i));if(le)for(e=function(r){if(!1===be&&!ye)return ge(r);try{return ge(r)}catch(r){return!1}}(r),u=0;u<we.length;u++)a=we[u],e&&"constructor"===a||!rr(r,a)||o.push(String(a));return o};var me=ve,je=void 0!==Object.getOwnPropertySymbols,_e=Z.getOwnPropertySymbols;var Ee,Oe=je?function(r){return _e(Z(r))}:function(){return[]};function Se(r){var e,t,n;for(e=me(r),t=Oe(r),n=0;n<t.length;n++)ue(r,t[n])&&e.push(t[n]);return e}Ee=Lr?qr:function(r){var e,t,n,o,i,a,u;if(null==r)throw new TypeError(I("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(i=Z(r),a=1;a<arguments.length;a++)if(null!=(e=arguments[a]))for(o=(t=Se(Z(e))).length,u=0;u<o;u++)i[n=t[u]]=e[n];return i};var Te=Ee;function Me(r){var e=typeof r;return null===r||"object"!==e&&"function"!==e?new TypeError(I("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `%s`.",r)):null}var ke=Object.create;function xe(){}var Ve="function"==typeof ke?ke:function(r){return xe.prototype=r,new xe};function Pe(r,e,t){C(r,e,{configurable:!0,enumerable:!1,writable:!0,value:t})}var Ie="function"==typeof Buffer?Buffer:null;var Ae,Fe=e.Buffer;Ae=function(){var r,e;if("function"!=typeof Ie)return!1;try{r=mr(e="function"==typeof Ie.from?Ie.from([1,2,3,4]):new Ie([1,2,3,4]))&&1===e[0]&&2===e[1]&&3===e[2]&&4===e[3]}catch(e){r=!1}return r}()?Fe:function(){throw new Error("not implemented")};var $e,He=Ae;$e=Er(He.from)?function(r,e){if(!Yr(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!Yr(e))throw new TypeError(I("invalid argument. Second argument must be a string. Value: `%s`.",e));return He.from(r,e)}return He.from(r,"utf8")}:function(r,e){if(!Yr(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!Yr(e))throw new TypeError(I("invalid argument. Second argument must be a string. Value: `%s`.",e));return new He(r,e)}return new He(r,"utf8")};var Ne=$e;function We(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}var ze=t;var Ce={objectMode:!1,encoding:null,sep:"\n"};var Be=Object.prototype;function Re(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!vr(r)}(r)&&(!(e=Mr(r))||!rr(r,"constructor")&&rr(e,"constructor")&&Er(e.constructor)&&"[object Function]"===nr(e.constructor)&&rr(e,"isPrototypeOf")&&Er(e.isPrototypeOf)&&(e===Be||function(r){var e;for(e in r)if(!rr(r,e))return!1;return!0}(r)))}function Le(r){return kr(r)&&r>=0}function qe(r){return Ir(r)&&r.valueOf()>=0}function Ge(r){return Le(r)||qe(r)}B(Ge,"isPrimitive",Le),B(Ge,"isObject",qe);var Xe=R(Object.freeze({__proto__:null,default:()=>()=>{}}))("from-strided-array-stream"),Ze=r.Readable;function Je(r,e,t,n,o){var i,a,u;if(!(this instanceof Je))return arguments.length>4?new Je(r,e,t,n,o):new Je(r,e,t,n);if(!Cr(r))throw new TypeError(We("1MH2d",r));if(!X(e))throw new TypeError(We("1MH2y",e));if(!Nr(t))throw new TypeError(We("1MH2z",t));if(!Cr(n))throw new TypeError(We("1MH30",n));if(r>0&&(u=n+(r-1)*t,n>=e.length||u<0||u>=e.length))throw new RangeError(We("1MH1K"));if(i=Te({},Ce),arguments.length>4&&(a=function(r,e){return Re(e)?rr(e,"sep")&&(r.sep=e.sep,!Yr(r.sep))?new TypeError(We("1MH2W","sep",r.sep)):rr(e,"objectMode")&&(r.objectMode=e.objectMode,!U(r.objectMode))?new TypeError(We("1MH2o","objectMode",r.objectMode)):rr(e,"encoding")&&(r.encoding=e.encoding,!Yr(r.encoding)&&null!==r.encoding)?new TypeError(We("1MH7n","encoding",r.encoding)):rr(e,"highWaterMark")&&(r.highWaterMark=e.highWaterMark,!Le(r.highWaterMark))?new TypeError(We("1MH4k","highWaterMark",r.highWaterMark)):rr(e,"serialize")&&(r.serialize=e.serialize,!Er(r.serialize))?new TypeError(We("1MH6p","serialize",r.serialize)):null:new TypeError(We("1MH2V",e))}(i,o),a))throw a;return Xe("Creating a readable stream configured with the following options: %s.",JSON.stringify(i)),Ze.call(this,i),Pe(this,"_destroyed",!1),B(this,"_objectMode",i.objectMode),B(this,"_sep",i.sep),B(this,"_serialize",i.serialize||JSON.stringify),B(this,"_buffer",e),B(this,"_N",r),B(this,"_stride",t),B(this,"_offset",n),Pe(this,"_idx",n),Pe(this,"_i",0),this}return function(r,e){var t=Me(r);if(t)throw t;if(t=Me(e))throw t;if(void 0===e.prototype)throw new TypeError(I("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `%s`.",e.prototype));r.prototype=Ve(e.prototype),C(r.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:r})}(Je,Ze),B(Je.prototype,"_read",(function(){var r,e,t;if(!this._destroyed)for(r=!0;r;){if(e=null,this._i+=1,this._i>this._N)return Xe("Finished iteration."),this.push(null);t=this._buffer[this._idx],Xe("Value: %s. Idx: %d. Iter: %d.",JSON.stringify(t),this._idx,this._i),this._idx+=this._stride,!1===this._objectMode&&("string"==typeof(t=this._serialize(t))?t=1===this._i?Ne(t):Ne(this._sep+t):mr(t)?this._i>1&&(t=He.concat([Ne(this._sep),t])):e=new Error(We("1MHA9",t))),e?this.emit("error",e):r=this.push(t)}})),B(Je.prototype,"destroy",(function(r){var e;return this._destroyed?(Xe("Attempted to destroy an already destroyed stream."),this):(e=this,this._destroyed=!0,function(r){var e,t;for(e=[],t=1;t<arguments.length;t++)e.push(arguments[t]);ze.nextTick((function(){r.apply(null,e)}))}((function(){r&&(Xe("Stream was destroyed due to an error. Error: %s.",function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===nr(r))return!0;r=Mr(r)}return!1}(r)?r.message:JSON.stringify(r)),e.emit("error",r));Xe("Closing the stream..."),e.emit("close")})),this)})),B(Je,"objectMode",(function(r,e,t,n,o){var i;if(arguments.length>4){if(!Re(i=o))throw new TypeError(We("1MH2V",i));i=Te({},o)}else i={};return i.objectMode=!0,new Je(r,e,t,n,i)})),B(Je,"factory",(function(r){var e;if(arguments.length){if(!Re(r))throw new TypeError(We("1MH2V",r));e=Te({},r)}else e={};return function(r,t,n,o){return new Je(r,t,n,o,e)}})),Je}));
//# sourceMappingURL=index.js.map
