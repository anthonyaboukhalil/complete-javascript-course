function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},o={},i=t.parcelRequire3a11;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire3a11=i),i.register("27Lyk",(function(t,n){var r,o;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("27Lyk").register(JSON.parse('{"fSgek":"index.faef14e4.js","deYEc":"icons.c14567a0.svg"}'));var a,s,c={},u=function(e){return e&&e.Math==Math&&e};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,d;l=!(d=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var f,p={};f=!d((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h,v=Function.prototype.call;p=f?v.bind(v):function(){return v.apply(v,arguments)};var g={}.propertyIsEnumerable,m=Object.getOwnPropertyDescriptor,y=m&&!g.call({1:2},1);h=y?function(e){var t=m(this,e);return!!t&&t.enumerable}:g;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var _,w,k={},E={},S=Function.prototype,O=S.bind,j=S.call,F=f&&O.bind(j,j),L=(E=f?function(e){return e&&F(e)}:function(e){return e&&function(){return j.apply(e,arguments)}})({}.toString),$=E("".slice);w=function(e){return $(L(e),8,-1)};var x=Object,P=E("".split);k=d((function(){return!x("z").propertyIsEnumerable(0)}))?function(e){return"String"==w(e)?P(e,""):x(e)}:x;var M,T=TypeError;M=function(e){if(null==e)throw T("Can't call method on "+e);return e},_=function(e){return k(M(e))};var q,H,I,N;N=function(e){return"function"==typeof e},I=function(e){return"object"==typeof e?null!==e:N(e)};var A,C={},R=function(e){return N(e)?e:void 0};A=function(e,t){return arguments.length<2?R(c[e]):c[e]&&c[e][t]};var W={};W=E({}.isPrototypeOf);var z,D,U,G={};G=A("navigator","userAgent")||"";var Y,B,J=c.process,Q=c.Deno,V=J&&J.versions||Q&&Q.version,X=V&&V.v8;X&&(B=(Y=X.split("."))[0]>0&&Y[0]<4?1:+(Y[0]+Y[1])),!B&&G&&(!(Y=G.match(/Edge\/(\d+)/))||Y[1]>=74)&&(Y=G.match(/Chrome\/(\d+)/))&&(B=+Y[1]),U=B,D=!!Object.getOwnPropertySymbols&&!d((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&U&&U<41})),z=D&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var K=Object;C=z?function(e){return"symbol"==typeof e}:function(e){var t=A("Symbol");return N(t)&&W(t.prototype,K(e))};var Z,ee,te,ne=String;te=function(e){try{return ne(e)}catch(e){return"Object"}};var re=TypeError;ee=function(e){if(N(e))return e;throw re(te(e)+" is not a function")},Z=function(e,t){var n=e[t];return null==n?void 0:ee(n)};var oe,ie=TypeError;oe=function(e,t){var n,r;if("string"===t&&N(n=e.toString)&&!I(r=p(n,e)))return r;if(N(n=e.valueOf)&&!I(r=p(n,e)))return r;if("string"!==t&&N(n=e.toString)&&!I(r=p(n,e)))return r;throw ie("Can't convert object to primitive value")};var ae,se;var ce,ue={},le=Object.defineProperty;ce=function(e,t){try{le(c,e,{value:t,configurable:!0,writable:!0})}catch(n){c[e]=t}return t};var de=c["__core-js_shared__"]||ce("__core-js_shared__",{});ue=de,(se=function(e,t){return ue[e]||(ue[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.8",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.8/LICENSE",source:"https://github.com/zloirock/core-js"});var fe,pe={},he=Object;fe=function(e){return he(M(e))};var ve=E({}.hasOwnProperty);pe=Object.hasOwn||function(e,t){return ve(fe(e),t)};var ge,me=0,ye=Math.random(),be=E(1..toString);ge=function(e){return"Symbol("+(void 0===e?"":e)+")_"+be(++me+ye,36)};var _e=se("wks"),we=c.Symbol,ke=we&&we.for,Ee=z?we:we&&we.withoutSetter||ge;ae=function(e){if(!pe(_e,e)||!D&&"string"!=typeof _e[e]){var t="Symbol."+e;D&&pe(we,e)?_e[e]=we[e]:_e[e]=z&&ke?ke(t):Ee(t)}return _e[e]};var Se=TypeError,Oe=ae("toPrimitive");H=function(e,t){if(!I(e)||C(e))return e;var n,r=Z(e,Oe);if(r){if(void 0===t&&(t="default"),n=p(r,e,t),!I(n)||C(n))return n;throw Se("Can't convert object to primitive value")}return void 0===t&&(t="number"),oe(e,t)},q=function(e){var t=H(e,"string");return C(t)?t:t+""};var je,Fe,Le=c.document,$e=I(Le)&&I(Le.createElement);Fe=function(e){return $e?Le.createElement(e):{}},je=!l&&!d((function(){return 7!=Object.defineProperty(Fe("div"),"a",{get:function(){return 7}}).a}));var xe,Pe,Me=Object.getOwnPropertyDescriptor,Te=s=l?Me:function(e,t){if(e=_(e),t=q(t),je)try{return Me(e,t)}catch(e){}if(pe(e,t))return b(!p(h,e,t),e[t])},qe={};Pe=l&&d((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var He,Ie=String,Ne=TypeError;He=function(e){if(I(e))return e;throw Ne(Ie(e)+" is not an object")};var Ae=TypeError,Ce=Object.defineProperty,Re=Object.getOwnPropertyDescriptor;xe=l?Pe?function(e,t,n){if(He(e),t=q(t),He(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=Re(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Ce(e,t,n)}:Ce:function(e,t,n){if(He(e),t=q(t),He(n),je)try{return Ce(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Ae("Accessors not supported");return"value"in n&&(e[t]=n.value),e},qe=l?function(e,t,n){return xe(e,t,b(1,n))}:function(e,t,n){return e[t]=n,e};var We,ze,De=Function.prototype,Ue=l&&Object.getOwnPropertyDescriptor,Ge=pe(De,"name"),Ye={EXISTS:Ge,PROPER:Ge&&"something"===function(){}.name,CONFIGURABLE:Ge&&(!l||l&&Ue(De,"name").configurable)}.CONFIGURABLE,Be={},Je=E(Function.toString);N(ue.inspectSource)||(ue.inspectSource=function(e){return Je(e)}),Be=ue.inspectSource;var Qe,Ve,Xe=c.WeakMap;Ve=N(Xe)&&/native code/.test(Be(Xe));var Ke,Ze=se("keys");Ke=function(e){return Ze[e]||(Ze[e]=ge(e))};var et={};et={};var tt,nt,rt,ot=c.TypeError,it=c.WeakMap;if(Ve||ue.state){var at=ue.state||(ue.state=new it),st=E(at.get),ct=E(at.has),ut=E(at.set);tt=function(e,t){if(ct(at,e))throw new ot("Object already initialized");return t.facade=e,ut(at,e,t),t},nt=function(e){return st(at,e)||{}},rt=function(e){return ct(at,e)}}else{var lt=Ke("state");et[lt]=!0,tt=function(e,t){if(pe(e,lt))throw new ot("Object already initialized");return t.facade=e,qe(e,lt,t),t},nt=function(e){return pe(e,lt)?e[lt]:{}},rt=function(e){return pe(e,lt)}}var dt=(Qe={set:tt,get:nt,has:rt,enforce:function(e){return rt(e)?nt(e):tt(e,{})},getterFor:function(e){return function(t){var n;if(!I(t)||(n=nt(t)).type!==e)throw ot("Incompatible receiver, "+e+" required");return n}}}).enforce,ft=Qe.get,pt=Object.defineProperty,ht=l&&!d((function(){return 8!==pt((function(){}),"length",{value:8}).length})),vt=String(String).split("String"),gt=ze=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!pe(e,"name")||Ye&&e.name!==t)&&pt(e,"name",{value:t,configurable:!0}),ht&&n&&pe(n,"arity")&&e.length!==n.arity&&pt(e,"length",{value:n.arity});try{n&&pe(n,"constructor")&&n.constructor?l&&pt(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=dt(e);return pe(r,"source")||(r.source=vt.join("string"==typeof t?t:"")),e};Function.prototype.toString=gt((function(){return N(this)&&ft(this).source||Be(this)}),"toString"),We=function(e,t,n,r){r||(r={});var o=r.enumerable,i=void 0!==r.name?r.name:t;return N(n)&&ze(n,i,r),r.global?o?e[t]=n:ce(t,n):(r.unsafe?e[t]&&(o=!0):delete e[t],o?e[t]=n:qe(e,t,n)),e};var mt,yt,bt,_t,wt,kt,Et={},St={},Ot=Math.ceil,jt=Math.floor;St=Math.trunc||function(e){var t=+e;return(t>0?jt:Ot)(t)},kt=function(e){var t=+e;return t!=t||0===t?0:St(t)};var Ft=Math.max,Lt=Math.min;wt=function(e,t){var n=kt(e);return n<0?Ft(n+t,0):Lt(n,t)};var $t,xt,Pt=Math.min;xt=function(e){return e>0?Pt(kt(e),9007199254740991):0},$t=function(e){return xt(e.length)};var Mt=function(e){return function(t,n,r){var o,i=_(t),a=$t(i),s=wt(r,a);if(e&&n!=n){for(;a>s;)if((o=i[s++])!=o)return!0}else for(;a>s;s++)if((e||s in i)&&i[s]===n)return e||s||0;return!e&&-1}},Tt=(_t={includes:Mt(!0),indexOf:Mt(!1)}).indexOf,qt=E([].push);bt=function(e,t){var n,r=_(e),o=0,i=[];for(n in r)!pe(et,n)&&pe(r,n)&&qt(i,n);for(;t.length>o;)pe(r,n=t[o++])&&(~Tt(i,n)||qt(i,n));return i};var Ht,It={},Nt=(It=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]).concat("length","prototype");yt=Object.getOwnPropertyNames||function(e){return bt(e,Nt)},Ht=Object.getOwnPropertySymbols;var At=E([].concat);Et=A("Reflect","ownKeys")||function(e){var t=yt(He(e));return Ht?At(t,Ht(e)):t},mt=function(e,t,n){for(var r=Et(t),o=xe,i=s,a=0;a<r.length;a++){var c=r[a];pe(e,c)||n&&pe(n,c)||o(e,c,i(t,c))}};var Ct={},Rt=/#|\.prototype\./,Wt=function(e,t){var n=Dt[zt(e)];return n==Gt||n!=Ut&&(N(t)?d(t):!!t)},zt=Wt.normalize=function(e){return String(e).replace(Rt,".").toLowerCase()},Dt=Wt.data={},Ut=Wt.NATIVE="N",Gt=Wt.POLYFILL="P";Ct=Wt,a=function(e,t){var n,r,o,i,a,s=e.target,u=e.global,l=e.stat;if(n=u?c:l?c[s]||ce(s,{}):(c[s]||{}).prototype)for(r in t){if(i=t[r],o=e.dontCallGetSet?(a=Te(n,r))&&a.value:n[r],!Ct(u?r:s+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;mt(i,o)}(e.sham||o&&o.sham)&&qe(i,"sham",!0),We(n,r,i,e)}};var Yt,Bt,Jt=_t.includes,Qt={},Vt={};Vt=Object.keys||function(e){return bt(e,It)},Bt=l&&!Pe?Object.defineProperties:function(e,t){He(e);for(var n,r=_(t),o=Vt(t),i=o.length,a=0;i>a;)xe(e,n=o[a++],r[n]);return e};var Xt={};Xt=A("document","documentElement");var Kt,Zt=Ke("IE_PROTO"),en=function(){},tn=function(e){return"<script>"+e+"<\/script>"},nn=function(e){e.write(tn("")),e.close();var t=e.parentWindow.Object;return e=null,t},rn=function(){try{Kt=new ActiveXObject("htmlfile")}catch(e){}var e,t;rn="undefined"!=typeof document?document.domain&&Kt?nn(Kt):((t=Fe("iframe")).style.display="none",Xt.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(tn("document.F=Object")),e.close(),e.F):nn(Kt);for(var n=It.length;n--;)delete rn.prototype[It[n]];return rn()};et[Zt]=!0,Qt=Object.create||function(e,t){var n;return null!==e?(en.prototype=He(e),n=new en,en.prototype=null,n[Zt]=e):n=rn(),void 0===t?n:Bt(n,t)};var on=xe,an=ae("unscopables"),sn=Array.prototype;null==sn[an]&&on(sn,an,{configurable:!0,value:Qt(null)}),Yt=function(e){sn[an][e]=!0},a({target:"Array",proto:!0,forced:d((function(){return!Array(1).includes()}))},{includes:function(e){return Jt(this,e,arguments.length>1?arguments[1]:void 0)}}),Yt("includes");var cn,un={},ln=Function.prototype,dn=ln.apply,fn=ln.call;un="object"==typeof Reflect&&Reflect.apply||(f?fn.bind(dn):function(){return fn.apply(dn,arguments)});var pn,hn=E(E.bind);pn=function(e,t){return ee(e),void 0===t?e:f?hn(e,t):function(){return e.apply(t,arguments)}};var vn={};vn=E([].slice);var gn,mn=TypeError;gn=function(e,t){if(e<t)throw mn("Not enough arguments");return e};var yn;yn=/(?:ipad|iphone|ipod).*applewebkit/i.test(G);var bn;bn="process"==w(c.process);var _n,wn,kn,En,Sn=c.setImmediate,On=c.clearImmediate,jn=c.process,Fn=c.Dispatch,Ln=c.Function,$n=c.MessageChannel,xn=c.String,Pn=0,Mn={};try{_n=c.location}catch(e){}var Tn=function(e){if(pe(Mn,e)){var t=Mn[e];delete Mn[e],t()}},qn=function(e){return function(){Tn(e)}},Hn=function(e){Tn(e.data)},In=function(e){c.postMessage(xn(e),_n.protocol+"//"+_n.host)};Sn&&On||(Sn=function(e){gn(arguments.length,1);var t=N(e)?e:Ln(e),n=vn(arguments,1);return Mn[++Pn]=function(){un(t,void 0,n)},wn(Pn),Pn},On=function(e){delete Mn[e]},bn?wn=function(e){jn.nextTick(qn(e))}:Fn&&Fn.now?wn=function(e){Fn.now(qn(e))}:$n&&!yn?(En=(kn=new $n).port2,kn.port1.onmessage=Hn,wn=pn(En.postMessage,En)):c.addEventListener&&N(c.postMessage)&&!c.importScripts&&_n&&"file:"!==_n.protocol&&!d(In)?(wn=In,c.addEventListener("message",Hn,!1)):wn="onreadystatechange"in Fe("script")?function(e){Xt.appendChild(Fe("script")).onreadystatechange=function(){Xt.removeChild(this),Tn(e)}}:function(e){setTimeout(qn(e),0)});var Nn=(cn={set:Sn,clear:On}).clear;a({global:!0,bind:!0,enumerable:!0,forced:c.clearImmediate!==Nn},{clearImmediate:Nn});var An=cn.set;a({global:!0,bind:!0,enumerable:!0,forced:c.setImmediate!==An},{setImmediate:An});var Cn=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof g?t:g,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(e,t,n){var r=d;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return x()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=O(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?h:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(e,n,a),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",v={};function g(){}function m(){}function y(){}var b={};c(b,i,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_($([])));w&&w!==n&&r.call(w,i)&&(b=w);var k=y.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(o,i,a,s){var c=l(e[o],e,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function O(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function $(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:x}}function x(){return{value:t,done:!0}}return m.prototype=y,c(k,"constructor",y),c(y,"constructor",m),m.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new S(u(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),c(k,s,"Generator"),c(k,i,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=$,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),F(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;F(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:$(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=Cn}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=Cn:Function("r","regeneratorRuntime = r")(Cn)}const Rn=async function(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),o=await Promise.race([r,(n=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]),i=await o.json();if(!o.ok)throw new Error(`${i.message} (${o.status})`);return i}catch(e){throw e}var n},Wn={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},zn=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},Dn=function(e=Wn.search.page){Wn.search.page=e;const t=(e-1)*Wn.search.resultsPerPage,n=e*Wn.search.resultsPerPage;return Wn.search.results.slice(t,n)},Un=function(){localStorage.setItem("bookmarks",JSON.stringify(Wn.bookmarks))},Gn=function(e){Wn.bookmarks.push(e),e.id===Wn.recipe.id&&(Wn.recipe.bookmarked=!0),Un()};!function(){const e=localStorage.getItem("bookmarks");e&&(Wn.bookmarks=JSON.parse(e))}();var Yn,Bn,Jn,Qn;Yn=new URL(i("27Lyk").resolve("deYEc"),import.meta.url).toString();class Vn{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),o=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=o[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const e=`\n      <div class="spinner">\n        <svg>\n          <use href="${n(Yn)}#icon-loader"></use>\n        </svg>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${n(Yn)}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${n(Yn)}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,o=num.split(" ");if(o[0]&&(n=o[0]),o[1]&&(r=o[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var i=n.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(Jn=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},Qn=function(e,t){if(t){var n=Math.pow(10,t);return Math.round(e*n)/n}return Math.round(e)},function(){if(Jn(this.denominator)){var e=Qn(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}Jn(this.numerator)&&(e=Qn(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),o=Fraction.primeFactors(t);return r.forEach((function(e){var t=o.indexOf(e);t>=0&&(n.push(e),o.splice(t,1))})),0===n.length?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},Bn=Fraction;var Xn=new class extends Vn{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--update-servings");if(!n)return;const{updateTo:r}=n.dataset;+r>0&&e(+r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`\n      <figure class="recipe__fig">\n        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n        <h1 class="recipe__title">\n          <span>${this._data.title}</span>\n        </h1>\n      </figure>\n\n      <div class="recipe__details">\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${n(Yn)}#icon-clock"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n          <span class="recipe__info-text">minutes</span>\n        </div>\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${n(Yn)}#icon-users"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n          <span class="recipe__info-text">servings</span>\n\n          <div class="recipe__info-buttons">\n            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n              <svg>\n                <use href="${n(Yn)}#icon-minus-circle"></use>\n              </svg>\n            </button>\n            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n              <svg>\n                <use href="${n(Yn)}#icon-plus-circle"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n\n        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n          <svg>\n            <use href="${n(Yn)}#icon-user"></use>\n          </svg>\n        </div>\n        <button class="btn--round btn--bookmark">\n          <svg class="">\n            <use href="${n(Yn)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n          </svg>\n        </button>\n      </div>\n\n      <div class="recipe__ingredients">\n        <h2 class="heading--2">Recipe ingredients</h2>\n        <ul class="recipe__ingredient-list">\n          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n      </div>\n\n      <div class="recipe__directions">\n        <h2 class="heading--2">How to cook it</h2>\n        <p class="recipe__directions-text">\n          This recipe was carefully designed and tested by\n          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n          directions at their website.\n        </p>\n        <a\n          class="btn--small recipe__btn"\n          href="${this._data.sourceUrl}"\n          target="_blank"\n        >\n          <span>Directions</span>\n          <svg class="search__icon">\n            <use href="${n(Yn)}#icon-arrow-right"></use>\n          </svg>\n        </a>\n      </div>\n    `}_generateMarkupIngredient(e){return`\n    <li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${n(Yn)}#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${e.quantity?new Bn(e.quantity).toString():""}</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${e.unit}</span>\n        ${e.description}\n      </div>\n    </li>\n  `}};var Kn=new class{_parentEl=document.querySelector(".search");getQuery(){const e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var Zn=new class extends Vn{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n      <li class="preview">\n        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n          <figure class="preview__fig">\n            <img src="${this._data.image}" alt="${this._data.title}" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${this._data.title}</h4>\n            <p class="preview__publisher">${this._data.publisher}</p>\n            <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n              <svg>\n              <use href="${n(Yn)}#icon-user"></use>\n              </svg>\n            </div>\n          </div>\n        </a>\n      </li>\n    `}};var er=new class extends Vn{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map((e=>Zn.render(e,!1))).join("")}};var tr=new class extends Vn{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`\n        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n          <span>Page ${e+1}</span>\n          <svg class="search__icon">\n            <use href="${n(Yn)}#icon-arrow-right"></use>\n          </svg>\n        </button>\n      `:e===t&&t>1?`\n        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="${n(Yn)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${e-1}</span>\n        </button>\n      `:e<t?`\n        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="${n(Yn)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${e-1}</span>\n        </button>\n        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n          <span>Page ${e+1}</span>\n          <svg class="search__icon">\n            <use href="${n(Yn)}#icon-arrow-right"></use>\n          </svg>\n        </button>\n      `:""}};var nr=new class extends Vn{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>Zn.render(e,!1))).join("")}};var rr=new class extends Vn{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_generateMarkup(){}};const or=async function(){try{const e=window.location.hash.slice(1);if(!e)return;Xn.renderSpinner(),er.update(Dn()),nr.update(Wn.bookmarks),await async function(e){try{const t=await Rn(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=908ce6fd-9fac-4178-9a5f-cb333fc634f1`);Wn.recipe=zn(t),Wn.bookmarks.some((t=>t.id===e))?Wn.recipe.bookmarked=!0:Wn.recipe.bookmarked=!1,console.log(Wn.recipe)}catch(e){throw console.error(`${e} 💥💥💥💥`),e}}(e),Xn.render(Wn.recipe)}catch(e){Xn.renderError(),console.error(e)}},ir=async function(){try{er.renderSpinner();const e=Kn.getQuery();if(!e)throw error;await async function(e){try{Wn.search.query=e;const t=await Rn(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=908ce6fd-9fac-4178-9a5f-cb333fc634f1`);console.log(t),Wn.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),Wn.search.page=1}catch(e){throw console.error(`${e} 💥💥💥💥`),e}}(e),er.render(Dn()),tr.render(Wn.search)}catch(e){er.renderError()}},ar=function(e){er.render(Dn(e)),tr.render(Wn.search)},sr=function(e){!function(e){Wn.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/Wn.recipe.servings})),Wn.recipe.servings=e}(e),Xn.update(Wn.recipe)},cr=function(){Wn.recipe.bookmarked?function(e){const t=Wn.bookmarks.findIndex((t=>t.id===e));Wn.bookmarks.splice(t,1),e===Wn.recipe.id&&(Wn.recipe.bookmarked=!1),Un()}(Wn.recipe.id):Gn(Wn.recipe),Xn.update(Wn.recipe),nr.render(Wn.bookmarks)},ur=function(){nr.render(Wn.bookmarks)},lr=async function(e){try{rr.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient fromat! Please use the correct format");const[n,r,o]=t;return{quantity:n?+n:null,unit:r,description:o}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await Rn("https://forkify-api.herokuapp.com/api/v2/recipes/?key=908ce6fd-9fac-4178-9a5f-cb333fc634f1",n);Wn.recipe=zn(r),Gn(Wn.recipe)}catch(e){throw e}}(e),console.log(Wn.recipe),Xn.render(Wn.recipe),rr.renderMessage(),nr.render(Wn.bookmarks),window.history.pushState(null,"",`#${Wn.recipe.id}`),setTimeout((function(){rr.toggleWindow()}),2500)}catch(e){console.error("💥",e),rr.renderError(e.message)}};nr.addHandlerRender(ur),Xn.addHandlerRender(or),Xn.addHandlerUpdateServings(sr),Xn.addHandlerAddBookmark(cr),Kn.addHandlerSearch(ir),tr.addHandlerClick(ar),rr.addHandlerUpload(lr);
//# sourceMappingURL=index.faef14e4.js.map
