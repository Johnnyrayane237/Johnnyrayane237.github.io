const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./agents-CbPjZlFO.js","./GLTFLoader-C-ujm4As.js","./glass-D-F166Mz.js"])))=>i.map(i=>d[i]);
var k_=Object.defineProperty;var B_=(r,e,t)=>e in r?k_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ve=(r,e,t)=>B_(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const z_="modulepreload",H_=function(r,e){return new URL(r,e).href},Sf={},Qm=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let o=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");i=o(t.map(u=>{if(u=H_(u,n),u in Sf)return;Sf[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!n)for(let _=a.length-1;_>=0;_--){const g=a[_];if(g.href===u&&(!h||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":z_,h||(m.as="script"),m.crossOrigin="",m.href=u,c&&m.setAttribute("nonce",c),document.head.appendChild(m),h)return new Promise((_,g)=>{m.addEventListener("load",_),m.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};function ar(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function e0(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var fi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Mo={duration:.5,overwrite:!1,delay:0},Ad,Mn,Gt,wi=1e8,Nt=1/wi,sh=Math.PI*2,V_=sh/4,G_=0,t0=Math.sqrt,W_=Math.cos,q_=Math.sin,xn=function(e){return typeof e=="string"},Kt=function(e){return typeof e=="function"},_r=function(e){return typeof e=="number"},Cd=function(e){return typeof e>"u"},Ji=function(e){return typeof e=="object"},$n=function(e){return e!==!1},Rd=function(){return typeof window<"u"},il=function(e){return Kt(e)||xn(e)},n0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ln=Array.isArray,oh=/(?:-?\.?\d|\.)+/gi,i0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,oo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,r0=/[+-]=-?[.\d]+/,s0=/[^,'"\[\]\s]+/gi,X_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xt,Vi,ah,Pd,mi={},_c={},o0,a0=function(e){return(_c=To(e,mi))&&Qn},Ld=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Na=function(e,t){return!t&&console.warn(e)},l0=function(e,t){return e&&(mi[e]=t)&&_c&&(_c[e]=t)||mi},Oa=function(){return 0},j_={suppressEvents:!0,isStart:!0,kill:!1},Kl={suppressEvents:!0,kill:!1},$_={suppressEvents:!0},Dd={},Hr=[],lh={},c0,ai={},iu={},Mf=30,Zl=[],Id="",Fd=function(e){var t=e[0],n,i;if(Ji(t)||Kt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Zl.length;i--&&!Zl[i].targetTest(t););n=Zl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new I0(e[i],n)))||e.splice(i,1);return e},ys=function(e){return e._gsap||Fd(Ei(e))[0]._gsap},u0=function(e,t,n){return(n=e[t])&&Kt(n)?e[t]():Cd(n)&&e.getAttribute&&e.getAttribute(t)||n},Yn=function(e,t){return(e=e.split(",")).forEach(t)||e},en=function(e){return Math.round(e*1e5)/1e5||0},an=function(e){return Math.round(e*1e7)/1e7||0},ho=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Y_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},vc=function(){var e=Hr.length,t=Hr.slice(0),n,i;for(lh={},Hr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ud=function(e){return!!(e._initted||e._startAt||e.add)},h0=function(e,t,n,i){Hr.length&&!Mn&&vc(),e.render(t,n,!!(Mn&&t<0&&Ud(e))),Hr.length&&!Mn&&vc()},d0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(s0).length<2?t:xn(e)?e.trim():e},f0=function(e){return e},gi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},J_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},To=function(e,t){for(var n in t)e[n]=t[n];return e},Tf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ji(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},xc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ga=function(e){var t=e.parent||Xt,n=e.keyframes?J_(Ln(e.keyframes)):gi;if($n(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},K_=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},p0=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Wc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Xr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},bs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Z_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ch=function(e,t,n,i){return e._startAt&&(Mn?e._startAt.revert(Kl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Q_=function r(e){return!e||e._ts&&r(e.parent)},wf=function(e){return e._repeat?wo(e._tTime,e=e.duration()+e._rDelay)*e:0},wo=function(e,t){var n=Math.floor(e=an(e/t));return e&&n===e?n-1:n},yc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},qc=function(e){return e._end=an(e._start+(e._tDur/Math.abs(e._ts||e._rts||Nt)||0))},Xc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=an(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),qc(e),n._dirty||bs(n,e)),e},m0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=yc(e.rawTime(),t),(!t._dur||Ka(0,t.totalDuration(),n)-t._tTime>Nt)&&t.render(n,!0)),bs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Nt}},qi=function(e,t,n,i){return t.parent&&Xr(t),t._start=an((_r(n)?n:n||e!==Xt?bi(e,n,t):e._time)+t._delay),t._end=an(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),p0(e,t,"_first","_last",e._sort?"_start":0),uh(t)||(e._recent=t),i||m0(e,t),e._ts<0&&Xc(e,e._tTime),e},g0=function(e,t){return(mi.ScrollTrigger||Ld("scrollTrigger",t))&&mi.ScrollTrigger.create(t,e)},_0=function(e,t,n,i,s){if(Od(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&c0!==ci.frame)return Hr.push(e),e._lazy=[s,i],1},ev=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},uh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},tv=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&ev(e)&&!(!e._initted&&uh(e))||(e._ts<0||e._dp._ts<0)&&!uh(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Ka(0,e._tDur,t),u=wo(l,a),e._yoyo&&u&1&&(o=1-o),u!==wo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Mn||i||e._zTime===Nt||!t&&e._zTime){if(!e._initted&&_0(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Nt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&ch(e,t,n,!0),e._onUpdate&&!n&&hi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&hi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Xr(e,1),!n&&!Mn&&(hi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},nv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Eo=function(e,t,n,i){var s=e._repeat,o=an(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:an(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Xc(e,e._tTime=e._tDur*a),e.parent&&qc(e),n||bs(e.parent,e),e},Ef=function(e){return e instanceof Hn?bs(e):Eo(e,e._dur)},iv={_start:0,endTime:Oa,totalDuration:Oa},bi=function r(e,t,n){var i=e.labels,s=e._recent||iv,o=e.duration()>=wi?s.endTime(!1):e._dur,a,l,c;return xn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Ln(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},_a=function(e,t,n){var i=_r(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=$n(l.vars.inherit)&&l.parent;o.immediateRender=$n(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new on(t[0],o,t[s+1])},Jr=function(e,t){return e||e===0?t(e):t},Ka=function(e,t,n){return n<e?e:n>t?t:n},Rn=function(e,t){return!xn(e)||!(t=X_.exec(e))?"":t[1]},rv=function(e,t,n){return Jr(n,function(i){return Ka(e,t,i)})},hh=[].slice,v0=function(e,t){return e&&Ji(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ji(e[0]))&&!e.nodeType&&e!==Vi},sv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return xn(i)&&!t||v0(i,1)?(s=n).push.apply(s,Ei(i)):n.push(i)})||n},Ei=function(e,t,n){return Gt&&!t&&Gt.selector?Gt.selector(e):xn(e)&&!n&&(ah||!Ao())?hh.call((t||Pd).querySelectorAll(e),0):Ln(e)?sv(e,n):v0(e)?hh.call(e,0):e?[e]:[]},dh=function(e){return e=Ei(e)[0]||Na("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ei(t,n.querySelectorAll?n:n===e?Na("Invalid scope")||Pd.createElement("div"):e)}},x0=function(e){return e.sort(function(){return .5-Math.random()})},y0=function(e){if(Kt(e))return e;var t=Ji(e)?e:{each:e},n=Ss(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return xn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,m){var _=(m||t).length,g=o[_],p,x,y,v,M,b,S,C,w;if(!g){if(w=t.grid==="auto"?0:(t.grid||[1,wi])[1],!w){for(S=-wi;S<(S=m[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(g=o[_]=[],p=l?Math.min(w,_)*u-.5:i%w,x=w===wi?0:l?_*h/w-.5:i/w|0,S=0,C=wi,b=0;b<_;b++)y=b%w-p,v=x-(b/w|0),g[b]=M=c?Math.abs(c==="y"?v:y):t0(y*y+v*v),M>S&&(S=M),M<C&&(C=M);i==="random"&&x0(g),g.max=S-C,g.min=C,g.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(w>_?_-1:c?c==="y"?_/w:w:Math.max(w,_/w))||0)*(i==="edges"?-1:1),g.b=_<0?s-_:s,g.u=Rn(t.amount||t.each)||0,n=n&&_<0?P0(n):n}return _=(g[d]-g.min)/g.max||0,an(g.b+(n?n(_):_)*g.v)+g.u}},fh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=an(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(_r(n)?0:Rn(n))}},b0=function(e,t){var n=Ln(e),i,s;return!n&&Ji(e)&&(i=n=e.radius||wi,e.values?(e=Ei(e.values),(s=!_r(e[0]))&&(i*=i)):e=fh(e.increment)),Jr(t,n?Kt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=wi,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,s||u===o||_r(o)?u:u+Rn(o)}:fh(e))},S0=function(e,t,n,i){return Jr(Ln(e)?!t:n===!0?!!(n=0):!i,function(){return Ln(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},ov=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},av=function(e,t){return function(n){return e(parseFloat(n))+(t||Rn(n))}},lv=function(e,t,n){return T0(e,t,0,1,n)},M0=function(e,t,n){return Jr(n,function(i){return e[~~t(i)]})},cv=function r(e,t,n){var i=t-e;return Ln(e)?M0(e,r(0,e.length),t):Jr(n,function(s){return(i+(s-e)%i)%i+e})},uv=function r(e,t,n){var i=t-e,s=i*2;return Ln(e)?M0(e,r(0,e.length-1),t):Jr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},ka=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?s0:oh),n+=e.substr(t,i-t)+S0(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},T0=function(e,t,n,i,s){var o=t-e,a=i-n;return Jr(s,function(l){return n+((l-e)/o*a||0)})},hv=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=xn(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Ln(e)&&!Ln(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(m){m*=h;var _=Math.min(d,~~m);return u[_](m-_)},n=t}else i||(e=To(Ln(e)?[]:{},e));if(!u){for(l in t)Nd.call(a,e,l,"get",t[l]);s=function(m){return zd(m,a)||(o?e.p:e)}}}return Jr(n,s)},Af=function(e,t,n){var i=e.labels,s=wi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},hi=function(e,t,n){var i=e.vars,s=i[t],o=Gt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Hr.length&&vc(),a&&(Gt=a),u=l?s.apply(c,l):s.call(c),Gt=o,u},sa=function(e){return Xr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Mn),e.progress()<1&&hi(e,"onInterrupt"),e},ao,w0=[],E0=function(e){if(e)if(e=!e.name&&e.default||e,Rd()||e.headless){var t=e.name,n=Kt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Oa,render:zd,add:Nd,kill:Av,modifier:Ev,rawVars:0},o={targetTest:0,get:0,getSetter:Bd,aliases:{},register:0};if(Ao(),e!==i){if(ai[t])return;gi(i,gi(xc(e,s),o)),To(i.prototype,To(s,xc(e,o))),ai[i.prop=t]=i,e.targetTest&&(Zl.push(i),Dd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}l0(t,i),e.register&&e.register(Qn,i,Jn)}else w0.push(e)},Ut=255,oa={aqua:[0,Ut,Ut],lime:[0,Ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ut],navy:[0,0,128],white:[Ut,Ut,Ut],olive:[128,128,0],yellow:[Ut,Ut,0],orange:[Ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ut,0,0],pink:[Ut,192,203],cyan:[0,Ut,Ut],transparent:[Ut,Ut,Ut,0]},ru=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ut+.5|0},A0=function(e,t,n){var i=e?_r(e)?[e>>16,e>>8&Ut,e&Ut]:0:oa.black,s,o,a,l,c,u,h,d,f,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),oa[e])i=oa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ut,i&Ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ut,e&Ut]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(oh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=ru(l+1/3,s,o),i[1]=ru(l,s,o),i[2]=ru(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(i0),n&&i.length<4&&(i[3]=1),i}else i=e.match(oh)||oa.transparent;i=i.map(Number)}return t&&!m&&(s=i[0]/Ut,o=i[1]/Ut,a=i[2]/Ut,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},C0=function(e){var t=[],n=[],i=-1;return e.split(Vr).forEach(function(s){var o=s.match(oo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Cf=function(e,t,n){var i="",s=(e+i).match(Vr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=A0(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=C0(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Vr,"1").split(oo),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Vr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Vr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in oa)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),dv=/hsl[a]?\(/,R0=function(e){var t=e.join(" "),n;if(Vr.lastIndex=0,Vr.test(t))return n=dv.test(t),e[1]=Cf(e[1],n),e[0]=Cf(e[0],n,C0(e[1])),!0},Ba,ci=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,m=function _(g){var p=r()-i,x=g===!0,y,v,M,b;if((p>e||p<0)&&(n+=p-t),i+=p,M=i-n,y=M-o,(y>0||x)&&(b=++h.frame,d=M-h.time*1e3,h.time=M=M/1e3,o+=y+(y>=s?4:s-y),v=1),x||(l=c(_)),v)for(f=0;f<a.length;f++)a[f](M,d,b,g)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){o0&&(!ah&&Rd()&&(Vi=ah=window,Pd=Vi.document||{},mi.gsap=Qn,(Vi.gsapVersions||(Vi.gsapVersions=[])).push(Qn.version),a0(_c||Vi.GreenSockGlobals||!Vi.gsap&&Vi||{}),w0.forEach(E0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(g){return setTimeout(g,o-h.time*1e3+1|0)},Ba=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ba=0,c=Oa},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){s=1e3/(g||240),o=h.time*1e3+s},add:function(g,p,x){var y=p?function(v,M,b,S){g(v,M,b,S),h.remove(y)}:g;return h.remove(g),a[x?"unshift":"push"](y),Ao(),y},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},h})(),Ao=function(){return!Ba&&ci.wake()},vt={},fv=/^[\d.\-M][\d.\-,\s]/,pv=/["']/g,mv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(pv,"").trim():+c,i=l.substr(a+1).trim();return t},gv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},_v=function(e){var t=(e+"").split("("),n=vt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[mv(t[1])]:gv(e).split(",").map(d0)):vt._CE&&fv.test(e)?vt._CE("",e):n},P0=function(e){return function(t){return 1-e(1-t)}},L0=function r(e,t){for(var n=e._first,i;n;)n instanceof Hn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ss=function(e,t){return e&&(Kt(e)?e:vt[e]||_v(e))||t},Is=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Yn(e,function(a){vt[a]=mi[a]=s,vt[o=a.toLowerCase()]=n;for(var l in s)vt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=vt[a+"."+l]=s[l]}),s},D0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},su=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/sh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*q_((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:D0(a);return s=sh/s,l.config=function(c,u){return r(e,c,u)},l},ou=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:D0(n);return i.config=function(s){return r(e,s)},i};Yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Is(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});vt.Linear.easeNone=vt.none=vt.Linear.easeIn;Is("Elastic",su("in"),su("out"),su());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Is("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Is("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Is("Circ",function(r){return-(t0(1-r*r)-1)});Is("Sine",function(r){return r===1?1:-W_(r*V_)+1});Is("Back",ou("in"),ou("out"),ou());vt.SteppedEase=vt.steps=mi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Nt;return function(a){return((i*Ka(0,o,a)|0)+s)*n}}};Mo.ease=vt["quad.out"];Yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Id+=r+","+r+"Params,"});var I0=function(e,t){this.id=G_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:u0,this.set=t?t.getSetter:Bd},za=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Eo(this,+t.duration,1,1),this.data=t.data,Gt&&(this._ctx=Gt,Gt.data.push(this)),Ba||ci.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Eo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ao(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Xc(this,n),!s._dp||s.parent||m0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&qi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Nt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),h0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+wf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+wf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?wo(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Nt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?yc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Nt?0:this._rts,this.totalTime(Ka(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),qc(this),Z_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ao(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Nt&&(this._tTime-=Nt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&qi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+($n(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?yc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=$_);var i=Mn;return Mn=n,Ud(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Mn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ef(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ef(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(bi(this,n),$n(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,$n(i)),this._dur||(this._zTime=-Nt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Nt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Nt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Nt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Kt(n)?n:f0,a=function(){var c=i.then;i.then=null,Kt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){sa(this)},r})();gi(za.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Nt,_prom:0,_ps:!1,_rts:1});var Hn=(function(r){e0(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=$n(n.sortChildren),Xt&&qi(n.parent||Xt,ar(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&g0(ar(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return _a(0,arguments,this),this},t.from=function(i,s,o){return _a(1,arguments,this),this},t.fromTo=function(i,s,o,a){return _a(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ga(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new on(i,s,bi(this,o),1),this},t.call=function(i,s,o){return qi(this,on.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new on(i,o,bi(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,ga(o).immediateRender=$n(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,ga(a).immediateRender=$n(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:an(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,m,_,g,p,x,y,v,M,b,S;if(this!==Xt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,v=this._start,y=this._ts,p=!y,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(d=an(u%g),u===l?(_=this._repeat,d=c):(M=an(u/g),_=~~M,_&&_===M&&(d=c,_--),d>c&&(d=c)),M=wo(this._tTime,g),!a&&this._tTime&&M!==_&&this._tTime-M*g-this._dur<=0&&(M=_),b&&_&1&&(d=c-d,S=1),_!==M&&!this._lock){var C=b&&M&1,w=C===(b&&_&1);if(_<M&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(S?0:an(_*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&hi(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;L0(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=nv(this,an(a),an(d)),x&&(u-=d-(d=x._start))),this._tTime=u,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!s&&!M&&(hi(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||d>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){x=0,m&&(u+=this._zTime=-Nt);break}}f=m}else{f=this._last;for(var T=i<0?i:d;f;){if(m=f._prev,(f._act||T<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(T-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(T-f._start)*f._ts,s,o||Mn&&Ud(f)),d!==this._time||!this._ts&&!p){x=0,m&&(u+=this._zTime=T?-Nt:Nt);break}}f=m}}if(x&&!s&&(this.pause(),x.render(d>=a?0:-Nt)._zTime=d>=a?1:-1,this._ts))return this._start=v,qc(this),this.render(i,s,o);this._onUpdate&&!s&&hi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Xr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(hi(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(_r(s)||(s=bi(this,s,i)),!(i instanceof za)){if(Ln(i))return i.forEach(function(a){return o.add(a,s)}),this;if(xn(i))return this.addLabel(i,s);if(Kt(i))i=on.delayedCall(0,i);else return this}return this!==i?qi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-wi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof on?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return xn(i)?this.removeLabel(i):Kt(i)?this.killTweensOf(i):(i.parent===this&&Wc(this,i),i===this._recent&&(this._recent=this._last),bs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=an(ci.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=bi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=on.delayedCall(0,s||Oa,o);return a.data="isPause",this._hasPause=1,qi(this,a,bi(this,i))},t.removePause=function(i){var s=this._first;for(i=bi(this,i);s;)s._start===i&&s.data==="isPause"&&Xr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Fr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Ei(i),l=this._first,c=_r(s),u;l;)l instanceof on?Y_(l._targets,a)&&(c?(!Fr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=bi(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,m=on.to(o,gi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Nt,onStart:function(){if(o.pause(),!f){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==g&&Eo(m,g,0,1).render(m._time,!0,!0),f=1}u&&u.apply(m,h||[])}},s));return d?m.render(0):m},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,gi({startAt:{time:bi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Af(this,bi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Af(this,bi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Nt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return bs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),bs(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=wi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,qi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Eo(o,o===Xt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Xt._ts&&(h0(Xt,yc(i,Xt)),c0=ci.frame),ci.frame>=Mf){Mf+=fi.autoSleep||120;var s=Xt._first;if((!s||!s._ts)&&fi.autoSleep&&ci._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ci.sleep()}}},e})(za);gi(Hn.prototype,{_lock:0,_hasPause:0,_forcing:0});var vv=function(e,t,n,i,s,o,a){var l=new Jn(this._pt,e,t,0,1,B0,null,s),c=0,u=0,h,d,f,m,_,g,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ka(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),d=n.match(nu)||[];h=nu.exec(i);)m=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==d[u++]&&(g=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:g,c:m.charAt(1)==="="?ho(g,m)-g:parseFloat(m)-g,m:f&&f<4?Math.round:0},c=nu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(r0.test(i)||p)&&(l.e=0),this._pt=l,l},Nd=function(e,t,n,i,s,o,a,l,c,u){Kt(i)&&(i=i(s||0,e,o));var h=e[t],d=n!=="get"?n:Kt(h)?c?e[t.indexOf("set")||!Kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Kt(h)?c?Mv:O0:kd,m;if(xn(i)&&(~i.indexOf("random(")&&(i=ka(i)),i.charAt(1)==="="&&(m=ho(d,i)+(Rn(d)||0),(m||m===0)&&(i=m))),!u||d!==i||ph)return!isNaN(d*i)&&i!==""?(m=new Jn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?wv:k0,0,f),c&&(m.fp=c),a&&m.modifier(a,this,e),this._pt=m):(!h&&!(t in e)&&Ld(t,i),vv.call(this,e,t,d,i,f,l||fi.stringFilter,c))},xv=function(e,t,n,i,s){if(Kt(e)&&(e=va(e,s,t,n,i)),!Ji(e)||e.style&&e.nodeType||Ln(e)||n0(e))return xn(e)?va(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=va(e[a],s,t,n,i);return o},F0=function(e,t,n,i,s,o){var a,l,c,u;if(ai[e]&&(a=new ai[e]).init(s,a.rawVars?t[e]:xv(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Jn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ao))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Fr,ph,Od=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,m=e._dur,_=e._startAt,g=e._targets,p=e.parent,x=p&&p.data==="nested"?p.vars.targets:g,y=e._overwrite==="auto"&&!Ad,v=e.timeline,M,b,S,C,w,T,P,F,k,N,z,G,$;if(v&&(!d||!s)&&(s="none"),e._ease=Ss(s,Mo.ease),e._yEase=h?P0(Ss(h===!0?s:h,Mo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!i.runBackwards,!v||d&&!i.stagger){if(F=g[0]?ys(g[0]).harness:0,G=F&&i[F.prop],M=xc(i,Dd),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!f?_.render(-1,!0):_.revert(u&&m?Kl:j_),_._lazy=0),o){if(Xr(e._startAt=on.set(g,gi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&$n(l),startAt:null,delay:0,onUpdate:c&&function(){return hi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn||!a&&!f)&&e._startAt.revert(Kl),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&m&&!_){if(t&&(a=!1),S=gi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&$n(l),immediateRender:a,stagger:0,parent:p},M),G&&(S[F.prop]=G),Xr(e._startAt=on.set(g,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn?e._startAt.revert(Kl):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Nt,Nt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&$n(l)||l&&!m,b=0;b<g.length;b++){if(w=g[b],P=w._gsap||Fd(g)[b]._gsap,e._ptLookup[b]=N={},lh[P.id]&&Hr.length&&vc(),z=x===g?b:x.indexOf(w),F&&(k=new F).init(w,G||M,e,z,x)!==!1&&(e._pt=C=new Jn(e._pt,w,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(H){N[H]=C}),k.priority&&(T=1)),!F||G)for(S in M)ai[S]&&(k=F0(S,M,e,z,w,x))?k.priority&&(T=1):N[S]=C=Nd.call(e,w,S,"get",M[S],z,x,0,i.stringFilter);e._op&&e._op[b]&&e.kill(w,e._op[b]),y&&e._pt&&(Fr=e,Xt.killTweensOf(w,N,e.globalTime(t)),$=!e.parent,Fr=0),e._pt&&l&&(lh[P.id]=1)}T&&z0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,d&&t<=0&&v.render(wi,!0,!0)},yv=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return ph=1,e.vars[t]="+=0",Od(e,a),ph=0,l?Na(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=en(n)+Rn(h.e)),h.b&&(h.b=u.s+Rn(h.b))},bv=function(e,t){var n=e[0]?ys(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=To({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Sv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Ln(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},va=function(e,t,n,i,s){return Kt(e)?e.call(t,n,i,s):xn(e)&&~e.indexOf("random(")?ka(e):e},U0=Id+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",N0={};Yn(U0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return N0[r]=1});var on=(function(r){e0(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ga(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,g=l.scrollTrigger,p=l.yoyoEase,x=i.parent||Xt,y=(Ln(n)||n0(n)?_r(n[0]):"length"in i)?[n]:Ei(n),v,M,b,S,C,w,T,P;if(a._targets=y.length?Fd(y):Na("GSAP target "+n+" not found. https://gsap.com",!fi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||d||il(c)||il(u)){if(i=a.vars,v=a.timeline=new Hn({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:y}),v.kill(),v.parent=v._dp=ar(a),v._start=0,d||il(c)||il(u)){if(S=y.length,T=d&&y0(d),Ji(d))for(C in d)~U0.indexOf(C)&&(P||(P={}),P[C]=d[C]);for(M=0;M<S;M++)b=xc(i,N0),b.stagger=0,p&&(b.yoyoEase=p),P&&To(b,P),w=y[M],b.duration=+va(c,ar(a),M,w,y),b.delay=(+va(u,ar(a),M,w,y)||0)-a._delay,!d&&S===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),v.to(w,b,T?T(M,w,y):0),v._ease=vt.none;v.duration()?c=u=0:a.timeline=0}else if(m){ga(gi(v.vars.defaults,{ease:"none"})),v._ease=Ss(m.ease||i.ease||"none");var F=0,k,N,z;if(Ln(m))m.forEach(function(G){return v.to(y,G,">")}),v.duration();else{b={};for(C in m)C==="ease"||C==="easeEach"||Sv(C,m[C],b,m.easeEach);for(C in b)for(k=b[C].sort(function(G,$){return G.t-$.t}),F=0,M=0;M<k.length;M++)N=k[M],z={ease:N.e,duration:(N.t-(M?k[M-1].t:0))/100*c},z[C]=N.v,v.to(y,z,F),F+=z.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return f===!0&&!Ad&&(Fr=ar(a),Xt.killTweensOf(y),Fr=0),qi(x,ar(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!m&&a._start===an(x._time)&&$n(h)&&Q_(ar(a))&&x.data!=="nested")&&(a._tTime=-Nt,a.render(Math.max(0,-u)||0)),g&&g0(ar(a),g),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Nt&&!u?l:i<Nt?0:i,d,f,m,_,g,p,x,y,v;if(!c)tv(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(d=an(h%_),h===l?(m=this._repeat,d=c):(g=an(h/_),m=~~g,m&&m===g?(d=c,m--):d>c&&(d=c)),p=this._yoyo&&m&1,p&&(v=this._yEase,d=c-d),g=wo(this._tTime,_),d===a&&!o&&this._initted&&m===g)return this._tTime=h,this;m!==g&&(y&&this._yEase&&L0(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(an(_*m),!0).invalidate()._lock=0))}if(!this._initted){if(_0(this,u?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==g))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(v||this._ease)(d/c),this._from&&(this.ratio=x=1-x),!a&&h&&!s&&!g&&(hi(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&ch(this,i,s,o),hi(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!s&&this.parent&&hi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&ch(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Xr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(hi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Ba||ci.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Od(this,c),u=this._ease(c/this._dur),yv(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Xc(this,0),this.parent||p0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?sa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Fr&&Fr.vars.overwrite!==!0)._first||sa(this),this.parent&&o!==this.timeline.totalDuration()&&Eo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Ei(i):a,c=this._ptLookup,u=this._pt,h,d,f,m,_,g,p;if((!s||s==="all")&&K_(a,l))return s==="all"&&(this._pt=0),sa(this);for(h=this._op=this._op||[],s!=="all"&&(xn(s)&&(_={},Yn(s,function(x){return _[x]=1}),s=_),s=bv(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(h[p]=s,m=d,f={}):(f=h[p]=h[p]||{},m=s);for(_ in m)g=d&&d[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&Wc(this,g,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&sa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return _a(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return _a(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Xt.killTweensOf(i,s,o)},e})(za);gi(on.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Yn("staggerTo,staggerFrom,staggerFromTo",function(r){on[r]=function(){var e=new Hn,t=hh.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var kd=function(e,t,n){return e[t]=n},O0=function(e,t,n){return e[t](n)},Mv=function(e,t,n,i){return e[t](i.fp,n)},Tv=function(e,t,n){return e.setAttribute(t,n)},Bd=function(e,t){return Kt(e[t])?O0:Cd(e[t])&&e.setAttribute?Tv:kd},k0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},wv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},B0=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},zd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Ev=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Av=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Wc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Cv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},z0=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Jn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||k0,this.d=l||this,this.set=c||kd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Cv,this.m=n,this.mt=s,this.tween=i},r})();Yn(Id+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Dd[r]=1});mi.TweenMax=mi.TweenLite=on;mi.TimelineLite=mi.TimelineMax=Hn;Xt=new Hn({sortChildren:!1,defaults:Mo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});fi.stringFilter=R0;var Ms=[],Ql={},Rv=[],Rf=0,Pv=0,au=function(e){return(Ql[e]||Rv).map(function(t){return t()})},mh=function(){var e=Date.now(),t=[];e-Rf>2&&(au("matchMediaInit"),Ms.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Vi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),au("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Rf=e,au("matchMedia"))},H0=(function(){function r(t,n){this.selector=n&&dh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Pv++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Kt(n)&&(s=i,i=n,n=Kt);var o=this,a=function(){var c=Gt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=dh(s)),Gt=o,h=i.apply(o,arguments),Kt(h)&&o._r.push(h),Gt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Kt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Gt;Gt=null,n(this),Gt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof on&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Hn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof on)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ms.length;o--;)Ms[o].id===this.id&&Ms.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),Lv=(function(){function r(t){this.contexts=[],this.scope=t,Gt&&Gt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ji(n)||(n={matches:n});var o=new H0(0,s||this.scope),a=o.conditions={},l,c,u;Gt&&!o.selector&&(o.selector=Gt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Vi.matchMedia(n[c]),l&&(Ms.indexOf(o)<0&&Ms.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(mh):l.addEventListener("change",mh)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),bc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return E0(i)})},timeline:function(e){return new Hn(e)},getTweensOf:function(e,t){return Xt.getTweensOf(e,t)},getProperty:function(e,t,n,i){xn(e)&&(e=Ei(e)[0]);var s=ys(e||{}).get,o=n?f0:d0;return n==="native"&&(n=""),e&&(t?o((ai[t]&&ai[t].get||s)(e,t,n,i)):function(a,l,c){return o((ai[a]&&ai[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Ei(e),e.length>1){var i=e.map(function(u){return Qn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=ai[t],a=ys(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;ao._pt=0,h.init(e,n?u+n:u,ao,0,[e]),h.render(1,h),ao._pt&&zd(1,ao)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Qn.to(e,gi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ss(e.ease,Mo.ease)),Tf(Mo,e||{})},config:function(e){return Tf(fi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ai[a]&&!mi[a]&&Na(t+" effect requires "+a+" plugin.")}),iu[t]=function(a,l,c){return n(Ei(a),gi(l||{},s),c)},o&&(Hn.prototype[t]=function(a,l,c){return this.add(iu[t](a,Ji(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){vt[e]=Ss(t)},parseEase:function(e,t){return arguments.length?Ss(e,t):vt},getById:function(e){return Xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Hn(e),i,s;for(n.smoothChildTiming=$n(e.smoothChildTiming),Xt.remove(n),n._dp=0,n._time=n._tTime=Xt._time,i=Xt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof on&&i.vars.onComplete===i._targets[0]))&&qi(n,i,i._start-i._delay),i=s;return qi(Xt,n,0),n},context:function(e,t){return e?new H0(e,t):Gt},matchMedia:function(e){return new Lv(e)},matchMediaRefresh:function(){return Ms.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||mh()},addEventListener:function(e,t){var n=Ql[e]||(Ql[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ql[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:cv,wrapYoyo:uv,distribute:y0,random:S0,snap:b0,normalize:lv,getUnit:Rn,clamp:rv,splitColor:A0,toArray:Ei,selector:dh,mapRange:T0,pipe:ov,unitize:av,interpolate:hv,shuffle:x0},install:a0,effects:iu,ticker:ci,updateRoot:Hn.updateRoot,plugins:ai,globalTimeline:Xt,core:{PropTween:Jn,globals:l0,Tween:on,Timeline:Hn,Animation:za,getCache:ys,_removeLinkedListItem:Wc,reverting:function(){return Mn},context:function(e){return e&&Gt&&(Gt.data.push(e),e._ctx=Gt),Gt},suppressOverwrites:function(e){return Ad=e}}};Yn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return bc[r]=on[r]});ci.add(Hn.updateRoot);ao=bc.to({},{duration:0});var Dv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Iv=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Dv(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},lu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(xn(s)&&(l={},Yn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Iv(a,s)}}}},Qn=bc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Mn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},lu("roundProps",fh),lu("modifiers"),lu("snap",b0))||bc;on.version=Hn.version=Qn.version="3.13.0";o0=1;Rd()&&Ao();vt.Power0;vt.Power1;vt.Power2;vt.Power3;vt.Power4;vt.Linear;vt.Quad;vt.Cubic;vt.Quart;vt.Quint;vt.Strong;vt.Elastic;vt.Back;vt.SteppedEase;vt.Bounce;vt.Sine;vt.Expo;vt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pf,Ur,fo,Hd,ps,Lf,Vd,Fv=function(){return typeof window<"u"},vr={},as=180/Math.PI,po=Math.PI/180,Ns=Math.atan2,Df=1e8,Gd=/([A-Z])/g,Uv=/(left|right|width|margin|padding|x)/i,Nv=/[\s,\(]\S/,Xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},gh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ov=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Bv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},V0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},G0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},zv=function(e,t,n){return e.style[t]=n},Hv=function(e,t,n){return e.style.setProperty(t,n)},Vv=function(e,t,n){return e._gsap[t]=n},Gv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Wv=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},qv=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},jt="transform",Kn=jt+"Origin",Xv=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in vr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Xi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=lr(i,a)}):this.tfm[e]=o.x?o[e]:lr(i,e),e===Kn&&(this.tfm.zOrigin=o.zOrigin);else return Xi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(jt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Kn,t,"")),e=jt}(s||t)&&this.props.push(e,t,s[e])},W0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},jv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Gd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Vd(),(!s||!s.isStart)&&!n[jt]&&(W0(n),i.zOrigin&&n[Kn]&&(n[Kn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},q0=function(e,t){var n={target:e,props:[],revert:jv,save:Xv};return e._gsap||Qn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},X0,_h=function(e,t){var n=Ur.createElementNS?Ur.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ur.createElement(e);return n&&n.style?n:Ur.createElement(e)},Ai=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Gd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Co(t)||t,1)||""},If="O,Moz,ms,Ms,Webkit".split(","),Co=function(e,t,n){var i=t||ps,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(If[o]+e in s););return o<0?null:(o===3?"ms":o>=0?If[o]:"")+e},vh=function(){Fv()&&window.document&&(Pf=window,Ur=Pf.document,fo=Ur.documentElement,ps=_h("div")||{style:{}},_h("div"),jt=Co(jt),Kn=jt+"Origin",ps.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",X0=!!Co("perspective"),Vd=Qn.core.reverting,Hd=1)},Ff=function(e){var t=e.ownerSVGElement,n=_h("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),fo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),fo.removeChild(n),s},Uf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},j0=function(e){var t,n;try{t=e.getBBox()}catch{t=Ff(e),n=1}return t&&(t.width||t.height)||n||(t=Ff(e)),t&&!t.width&&!t.x&&!t.y?{x:+Uf(e,["x","cx","x1"])||0,y:+Uf(e,["y","cy","y1"])||0,width:0,height:0}:t},$0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&j0(e))},As=function(e,t){if(t){var n=e.style,i;t in vr&&t!==Kn&&(t=jt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Gd,"-$1").toLowerCase())):n.removeAttribute(t)}},Nr=function(e,t,n,i,s,o){var a=new Jn(e._pt,t,n,0,1,o?G0:V0);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Nf={deg:1,rad:1,turn:1},$v={grid:1,flex:1},jr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ps.style,l=Uv.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",m,_,g,p;if(i===o||!s||Nf[i]||Nf[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&$0(e),(f||o==="%")&&(vr[t]||~t.indexOf("adius")))return m=p?e.getBBox()[l?"width":"height"]:e[u],en(f?s/m*h:s/100*m);if(a[l?"width":"height"]=h+(d?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ur||!_.appendChild)&&(_=Ur.body),g=_._gsap,g&&f&&g.width&&l&&g.time===ci.time&&!g.uncache)return en(s/g.width*h);if(f&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+i,m=e[u],x?e.style[t]=x:As(e,t)}else(f||o==="%")&&!$v[Ai(_,"display")]&&(a.position=Ai(e,"position")),_===e&&(a.position="static"),_.appendChild(ps),m=ps[u],_.removeChild(ps),a.position="absolute";return l&&f&&(g=ys(_),g.time=ci.time,g.width=_[u]),en(d?m*s/h:m&&s?h/m*s:0)},lr=function(e,t,n,i){var s;return Hd||vh(),t in Xi&&t!=="transform"&&(t=Xi[t],~t.indexOf(",")&&(t=t.split(",")[0])),vr[t]&&t!=="transform"?(s=Va(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Mc(Ai(e,Kn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Sc[t]&&Sc[t](e,t,n)||Ai(e,t)||u0(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?jr(e,t,s,n)+n:s},Yv=function(e,t,n,i){if(!n||n==="none"){var s=Co(t,e,1),o=s&&Ai(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ai(e,"borderTopColor"))}var a=new Jn(this._pt,e.style,t,0,1,B0),l=0,c=0,u,h,d,f,m,_,g,p,x,y,v,M;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ai(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Ai(e,t)||i,_?e.style[t]=_:As(e,t)),u=[n,i],R0(u),n=u[0],i=u[1],d=n.match(oo)||[],M=i.match(oo)||[],M.length){for(;h=oo.exec(i);)g=h[0],x=i.substring(l,h.index),m?m=(m+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(m=1),g!==(_=d[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),g.charAt(1)==="="&&(g=ho(f,g)+v),p=parseFloat(g),y=g.substr((p+"").length),l=oo.lastIndex-y.length,y||(y=y||fi.units[t]||v,l===i.length&&(i+=y,a.e+=y)),v!==y&&(f=jr(e,t,_,y)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:f,c:p-f,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?G0:V0;return r0.test(i)&&(a.e=0),this._pt=a,a},Of={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Jv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Of[n]||n,t[1]=Of[i]||i,t.join(" ")},Kv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],vr[a]&&(l=1,a=a==="transformOrigin"?Kn:jt),As(n,a);l&&(As(n,jt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Va(n,1),o.uncache=1,W0(i)))}},Sc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Jn(e._pt,t,n,0,0,Kv);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ha=[1,0,0,1,0,0],Y0={},J0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},kf=function(e){var t=Ai(e,jt);return J0(t)?Ha:t.substr(7).match(i0).map(en)},Wd=function(e,t){var n=e._gsap||ys(e),i=e.style,s=kf(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ha:s):(s===Ha&&!e.offsetParent&&e!==fo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,fo.appendChild(e)),s=kf(e),l?i.display=l:As(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):fo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},xh=function(e,t,n,i,s,o){var a=e._gsap,l=s||Wd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],m=l[1],_=l[2],g=l[3],p=l[4],x=l[5],y=t.split(" "),v=parseFloat(y[0])||0,M=parseFloat(y[1])||0,b,S,C,w;n?l!==Ha&&(S=f*g-m*_)&&(C=v*(g/S)+M*(-_/S)+(_*x-g*p)/S,w=v*(-m/S)+M*(f/S)-(f*x-m*p)/S,v=C,M=w):(b=j0(e),v=b.x+(~y[0].indexOf("%")?v/100*b.width:v),M=b.y+(~(y[1]||y[0]).indexOf("%")?M/100*b.height:M)),i||i!==!1&&a.smooth?(p=v-c,x=M-u,a.xOffset=h+(p*f+x*_)-p,a.yOffset=d+(p*m+x*g)-x):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Kn]="0px 0px",o&&(Nr(o,a,"xOrigin",c,v),Nr(o,a,"yOrigin",u,M),Nr(o,a,"xOffset",h,a.xOffset),Nr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+M)},Va=function(e,t){var n=e._gsap||new I0(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ai(e,Kn)||"0",u,h,d,f,m,_,g,p,x,y,v,M,b,S,C,w,T,P,F,k,N,z,G,$,H,ne,I,re,Le,Ge,j,ee;return u=h=d=_=g=p=x=y=v=0,f=m=1,n.svg=!!(e.getCTM&&$0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[jt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[jt]!=="none"?l[jt]:"")),i.scale=i.rotate=i.translate="none"),S=Wd(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),xh(e,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,S)),M=n.xOrigin||0,b=n.yOrigin||0,S!==Ha&&(P=S[0],F=S[1],k=S[2],N=S[3],u=z=S[4],h=G=S[5],S.length===6?(f=Math.sqrt(P*P+F*F),m=Math.sqrt(N*N+k*k),_=P||F?Ns(F,P)*as:0,x=k||N?Ns(k,N)*as+_:0,x&&(m*=Math.abs(Math.cos(x*po))),n.svg&&(u-=M-(M*P+b*k),h-=b-(M*F+b*N))):(ee=S[6],Ge=S[7],I=S[8],re=S[9],Le=S[10],j=S[11],u=S[12],h=S[13],d=S[14],C=Ns(ee,Le),g=C*as,C&&(w=Math.cos(-C),T=Math.sin(-C),$=z*w+I*T,H=G*w+re*T,ne=ee*w+Le*T,I=z*-T+I*w,re=G*-T+re*w,Le=ee*-T+Le*w,j=Ge*-T+j*w,z=$,G=H,ee=ne),C=Ns(-k,Le),p=C*as,C&&(w=Math.cos(-C),T=Math.sin(-C),$=P*w-I*T,H=F*w-re*T,ne=k*w-Le*T,j=N*T+j*w,P=$,F=H,k=ne),C=Ns(F,P),_=C*as,C&&(w=Math.cos(C),T=Math.sin(C),$=P*w+F*T,H=z*w+G*T,F=F*w-P*T,G=G*w-z*T,P=$,z=H),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,p=180-p),f=en(Math.sqrt(P*P+F*F+k*k)),m=en(Math.sqrt(G*G+ee*ee)),C=Ns(z,G),x=Math.abs(C)>2e-4?C*as:0,v=j?1/(j<0?-j:j):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!J0(Ai(e,jt)),$&&e.setAttribute("transform",$))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(f*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=en(f),n.scaleY=en(m),n.rotation=en(_)+a,n.rotationX=en(g)+a,n.rotationY=en(p)+a,n.skewX=x+a,n.skewY=y+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Kn]=Mc(c)),n.xOffset=n.yOffset=0,n.force3D=fi.force3D,n.renderTransform=n.svg?Qv:X0?K0:Zv,n.uncache=0,n},Mc=function(e){return(e=e.split(" "))[0]+" "+e[1]},cu=function(e,t,n){var i=Rn(t);return en(parseFloat(t)+parseFloat(jr(e,"x",n+"px",i)))+i},Zv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,K0(e,t)},Qr="0deg",jo="0px",es=") ",K0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,g=n.transformPerspective,p=n.force3D,x=n.target,y=n.zOrigin,v="",M=p==="auto"&&e&&e!==1||p===!0;if(y&&(h!==Qr||u!==Qr)){var b=parseFloat(u)*po,S=Math.sin(b),C=Math.cos(b),w;b=parseFloat(h)*po,w=Math.cos(b),o=cu(x,o,S*w*-y),a=cu(x,a,-Math.sin(b)*-y),l=cu(x,l,C*w*-y+y)}g!==jo&&(v+="perspective("+g+es),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(M||o!==jo||a!==jo||l!==jo)&&(v+=l!==jo||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+es),c!==Qr&&(v+="rotate("+c+es),u!==Qr&&(v+="rotateY("+u+es),h!==Qr&&(v+="rotateX("+h+es),(d!==Qr||f!==Qr)&&(v+="skew("+d+", "+f+es),(m!==1||_!==1)&&(v+="scale("+m+", "+_+es),x.style[jt]=v||"translate(0, 0)"},Qv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,g=n.xOffset,p=n.yOffset,x=n.forceCSS,y=parseFloat(o),v=parseFloat(a),M,b,S,C,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=po,c*=po,M=Math.cos(l)*h,b=Math.sin(l)*h,S=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(u*=po,w=Math.tan(c-u),w=Math.sqrt(1+w*w),S*=w,C*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),M*=w,b*=w)),M=en(M),b=en(b),S=en(S),C=en(C)):(M=h,C=d,b=S=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=jr(f,"x",o,"px"),v=jr(f,"y",a,"px")),(m||_||g||p)&&(y=en(y+m-(m*M+_*S)+g),v=en(v+_-(m*b+_*C)+p)),(i||s)&&(w=f.getBBox(),y=en(y+i/100*w.width),v=en(v+s/100*w.height)),w="matrix("+M+","+b+","+S+","+C+","+y+","+v+")",f.setAttribute("transform",w),x&&(f.style[jt]=w)},ex=function(e,t,n,i,s){var o=360,a=xn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?as:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Df)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Df)%o-~~(c/o)*o)),e._pt=d=new Jn(e._pt,t,n,i,c,Ov),d.e=u,d.u="deg",e._props.push(n),d},Bf=function(e,t){for(var n in t)e[n]=t[n];return e},tx=function(e,t,n){var i=Bf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[jt]=t,a=Va(n,1),As(n,jt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[jt],o[jt]=t,a=Va(n,1),o[jt]=c);for(l in vr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=Rn(c),m=Rn(u),h=f!==m?jr(n,l,c,m):parseFloat(c),d=parseFloat(u),e._pt=new Jn(e._pt,a,l,h,d-h,gh),e._pt.u=m||0,e._props.push(l));Bf(a,i)};Yn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Sc[e>1?"border"+r:r]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(m){return lr(a,m,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(m,_){return f[m]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,h)}});var Z0={name:"css",register:vh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,m,_,g,p,x,y,v,M,b,S,C;Hd||vh(),this.styles=this.styles||q0(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ai[_]&&F0(_,t,n,i,e,s)))){if(f=typeof u,m=Sc[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=ka(u)),m)m(this,e,_,u,n)&&(S=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Vr.lastIndex=0,Vr.test(c)||(g=Rn(c),p=Rn(u)),p?g!==p&&(c=jr(e,_,c,p)+p):g&&(u+=g),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],xn(c)&&~c.indexOf("random(")&&(c=ka(c)),Rn(c+"")||c==="auto"||(c+=fi.units[_]||Rn(lr(e,_))||""),(c+"").charAt(1)==="="&&(c=lr(e,_))):c=lr(e,_),d=parseFloat(c),x=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),_ in Xi&&(_==="autoAlpha"&&(d===1&&lr(e,"visibility")==="hidden"&&h&&(d=0),C.push("visibility",0,a.visibility),Nr(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Xi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in vr,y){if(this.styles.save(_),f==="string"&&u.substring(0,6)==="var(--"&&(u=Ai(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),v||(M=e._gsap,M.renderTransform&&!t.parseTransform||Va(e,t.parseTransform),b=t.smoothOrigin!==!1&&M.smooth,v=this._pt=new Jn(this._pt,a,jt,0,1,M.renderTransform,M,0,-1),v.dep=1),_==="scale")this._pt=new Jn(this._pt,M,"scaleY",M.scaleY,(x?ho(M.scaleY,x+h):h)-M.scaleY||0,gh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Kn,0,a[Kn]),u=Jv(u),M.svg?xh(e,u,0,b,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==M.zOrigin&&Nr(this,M,"zOrigin",M.zOrigin,p),Nr(this,a,_,Mc(c),Mc(u)));continue}else if(_==="svgOrigin"){xh(e,u,1,b,0,this);continue}else if(_ in Y0){ex(this,M,_,d,x?ho(d,x+u):u);continue}else if(_==="smoothOrigin"){Nr(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){tx(this,u,e);continue}}else _ in a||(_=Co(_)||_);if(y||(h||h===0)&&(d||d===0)&&!Nv.test(u)&&_ in a)g=(c+"").substr((d+"").length),h||(h=0),p=Rn(u)||(_ in fi.units?fi.units[_]:g),g!==p&&(d=jr(e,_,c,p)),this._pt=new Jn(this._pt,y?M:a,_,d,(x?ho(d,x+h):h)-d,!y&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Bv:gh),this._pt.u=p||0,g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=kv);else if(_ in a)Yv.call(this,e,_,c,x?x+u:u);else if(_ in e)this.add(e,_,c||e[_],x?x+u:u,i,s);else if(_!=="parseTransform"){Ld(_,u);continue}y||(_ in a?C.push(_,0,a[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),o.push(_)}}S&&z0(this)},render:function(e,t){if(t.tween._time||!Vd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:lr,aliases:Xi,getSetter:function(e,t,n){var i=Xi[t];return i&&i.indexOf(",")<0&&(t=i),t in vr&&t!==Kn&&(e._gsap.x||lr(e,"x"))?n&&Lf===n?t==="scale"?Gv:Vv:(Lf=n||{})&&(t==="scale"?Wv:qv):e.style&&!Cd(e.style[t])?zv:~t.indexOf("-")?Hv:Bd(e,t)},core:{_removeProperty:As,_getMatrix:Wd}};Qn.utils.checkPrefix=Co;Qn.core.getStyleSaver=q0;(function(r,e,t,n){var i=Yn(r+","+e+","+t,function(s){vr[s]=1});Yn(e,function(s){fi.units[s]="deg",Y0[s]=1}),Xi[i[13]]=r+","+e,Yn(n,function(s){var o=s.split(":");Xi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){fi.units[r]="px"});Qn.registerPlugin(Z0);var fe=Qn.registerPlugin(Z0)||Qn;fe.core.Tween;function nx(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function ix(r,e,t){return e&&nx(r.prototype,e),r}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Sn,ec,ui,Or,kr,mo,Q0,ls,xa,eg,hr,Ui,tg,ng=function(){return Sn||typeof window<"u"&&(Sn=window.gsap)&&Sn.registerPlugin&&Sn},ig=1,lo=[],dt=[],Yi=[],ya=Date.now,yh=function(e,t){return t},rx=function(){var e=xa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,dt),i.push.apply(i,Yi),dt=n,Yi=i,yh=function(o,a){return t[o](a)}},Gr=function(e,t){return~Yi.indexOf(e)&&Yi[Yi.indexOf(e)+1][t]},ba=function(e){return!!~eg.indexOf(e)},Nn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Fn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},rl="scrollLeft",sl="scrollTop",bh=function(){return hr&&hr.isPressed||dt.cache++},Tc=function(e,t){var n=function i(s){if(s||s===0){ig&&(ui.history.scrollRestoration="manual");var o=hr&&hr.isPressed;s=i.v=Math.round(s)||(hr&&hr.iOS?1:0),e(s),i.cacheID=dt.cache,o&&yh("ss",s)}else(t||dt.cache!==i.cacheID||yh("ref"))&&(i.cacheID=dt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Vn={s:rl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Tc(function(r){return arguments.length?ui.scrollTo(r,dn.sc()):ui.pageXOffset||Or[rl]||kr[rl]||mo[rl]||0})},dn={s:sl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Vn,sc:Tc(function(r){return arguments.length?ui.scrollTo(Vn.sc(),r):ui.pageYOffset||Or[sl]||kr[sl]||mo[sl]||0})},qn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Sn.utils.toArray)(e)[0]||(typeof e=="string"&&Sn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},sx=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},$r=function(e,t){var n=t.s,i=t.sc;ba(e)&&(e=Or.scrollingElement||kr);var s=dt.indexOf(e),o=i===dn.sc?1:2;!~s&&(s=dt.push(e)-1),dt[s+o]||Nn(e,"scroll",bh);var a=dt[s+o],l=a||(dt[s+o]=Tc(Gr(e,n),!0)||(ba(e)?i:Tc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Sn.getProperty(e,"scrollBehavior")==="smooth"),l},Sh=function(e,t,n){var i=e,s=e,o=ya(),a=o,l=t||50,c=Math.max(500,l*3),u=function(m,_){var g=ya();_||g-o>l?(s=i,i=m,a=o,o=g):n?i+=m:i=s+(m-s)/(g-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},d=function(m){var _=a,g=s,p=ya();return(m||m===0)&&m!==i&&u(m),o===a||p-a>c?0:(i+(n?g:-g))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:d}},$o=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},zf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},rg=function(){xa=Sn.core.globals().ScrollTrigger,xa&&xa.core&&rx()},sg=function(e){return Sn=e||ng(),!ec&&Sn&&typeof document<"u"&&document.body&&(ui=window,Or=document,kr=Or.documentElement,mo=Or.body,eg=[ui,Or,kr,mo],Sn.utils.clamp,tg=Sn.core.context||function(){},ls="onpointerenter"in mo?"pointer":"mouse",Q0=tn.isTouch=ui.matchMedia&&ui.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ui||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ui=tn.eventTypes=("ontouchstart"in kr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in kr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ig=0},500),rg(),ec=1),ec};Vn.op=dn;dt.cache=0;var tn=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){ec||sg(Sn)||console.warn("Please gsap.registerPlugin(Observer)"),xa||rg();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,m=n.wheelSpeed,_=n.event,g=n.onDragStart,p=n.onDragEnd,x=n.onDrag,y=n.onPress,v=n.onRelease,M=n.onRight,b=n.onLeft,S=n.onUp,C=n.onDown,w=n.onChangeX,T=n.onChangeY,P=n.onChange,F=n.onToggleX,k=n.onToggleY,N=n.onHover,z=n.onHoverEnd,G=n.onMove,$=n.ignoreCheck,H=n.isNormalizer,ne=n.onGestureStart,I=n.onGestureEnd,re=n.onWheel,Le=n.onEnable,Ge=n.onDisable,j=n.onClick,ee=n.scrollSpeed,oe=n.capture,ie=n.allowClicks,pe=n.lockAxis,Ee=n.onLockAxis;this.target=a=qn(a)||kr,this.vars=n,f&&(f=Sn.utils.toArray(f)),i=i||1e-9,s=s||0,m=m||1,ee=ee||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ui.getComputedStyle(mo).lineHeight)||22);var ye,et,tt,be,U,Tt,Ke,W=this,Ae=0,mt=0,Ie=n.passive||!u&&n.passive!==!1,R=$r(a,Vn),E=$r(a,dn),q=R(),Q=E(),te=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ui[0]==="pointerdown",K=ba(a),xe=a.ownerDocument||Or,ue=[0,0,0],Ue=[0,0,0],Oe=0,se=function(){return Oe=ya()},ce=function(Re,Ye){return(W.event=Re)&&f&&sx(Re.target,f)||Ye&&te&&Re.pointerType!=="touch"||$&&$(Re,Ye)},He=function(){W._vx.reset(),W._vy.reset(),et.pause(),h&&h(W)},ke=function(){var Re=W.deltaX=zf(ue),Ye=W.deltaY=zf(Ue),ge=Math.abs(Re)>=i,Je=Math.abs(Ye)>=i;P&&(ge||Je)&&P(W,Re,Ye,ue,Ue),ge&&(M&&W.deltaX>0&&M(W),b&&W.deltaX<0&&b(W),w&&w(W),F&&W.deltaX<0!=Ae<0&&F(W),Ae=W.deltaX,ue[0]=ue[1]=ue[2]=0),Je&&(C&&W.deltaY>0&&C(W),S&&W.deltaY<0&&S(W),T&&T(W),k&&W.deltaY<0!=mt<0&&k(W),mt=W.deltaY,Ue[0]=Ue[1]=Ue[2]=0),(be||tt)&&(G&&G(W),tt&&(g&&tt===1&&g(W),x&&x(W),tt=0),be=!1),Tt&&!(Tt=!1)&&Ee&&Ee(W),U&&(re(W),U=!1),ye=0},le=function(Re,Ye,ge){ue[ge]+=Re,Ue[ge]+=Ye,W._vx.update(Re),W._vy.update(Ye),c?ye||(ye=requestAnimationFrame(ke)):ke()},nt=function(Re,Ye){pe&&!Ke&&(W.axis=Ke=Math.abs(Re)>Math.abs(Ye)?"x":"y",Tt=!0),Ke!=="y"&&(ue[2]+=Re,W._vx.update(Re,!0)),Ke!=="x"&&(Ue[2]+=Ye,W._vy.update(Ye,!0)),c?ye||(ye=requestAnimationFrame(ke)):ke()},qe=function(Re){if(!ce(Re,1)){Re=$o(Re,u);var Ye=Re.clientX,ge=Re.clientY,Je=Ye-W.x,Fe=ge-W.y,Xe=W.isDragging;W.x=Ye,W.y=ge,(Xe||(Je||Fe)&&(Math.abs(W.startX-Ye)>=s||Math.abs(W.startY-ge)>=s))&&(tt=Xe?2:1,Xe||(W.isDragging=!0),nt(Je,Fe))}},rt=W.onPress=function(Te){ce(Te,1)||Te&&Te.button||(W.axis=Ke=null,et.pause(),W.isPressed=!0,Te=$o(Te),Ae=mt=0,W.startX=W.x=Te.clientX,W.startY=W.y=Te.clientY,W._vx.reset(),W._vy.reset(),Nn(H?a:xe,Ui[1],qe,Ie,!0),W.deltaX=W.deltaY=0,y&&y(W))},O=W.onRelease=function(Te){if(!ce(Te,1)){Fn(H?a:xe,Ui[1],qe,!0);var Re=!isNaN(W.y-W.startY),Ye=W.isDragging,ge=Ye&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),Je=$o(Te);!ge&&Re&&(W._vx.reset(),W._vy.reset(),u&&ie&&Sn.delayedCall(.08,function(){if(ya()-Oe>300&&!Te.defaultPrevented){if(Te.target.click)Te.target.click();else if(xe.createEvent){var Fe=xe.createEvent("MouseEvents");Fe.initMouseEvent("click",!0,!0,ui,1,Je.screenX,Je.screenY,Je.clientX,Je.clientY,!1,!1,!1,!1,0,null),Te.target.dispatchEvent(Fe)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,h&&Ye&&!H&&et.restart(!0),tt&&ke(),p&&Ye&&p(W),v&&v(W,ge)}},he=function(Re){return Re.touches&&Re.touches.length>1&&(W.isGesturing=!0)&&ne(Re,W.isDragging)},Y=function(){return(W.isGesturing=!1)||I(W)},Z=function(Re){if(!ce(Re)){var Ye=R(),ge=E();le((Ye-q)*ee,(ge-Q)*ee,1),q=Ye,Q=ge,h&&et.restart(!0)}},de=function(Re){if(!ce(Re)){Re=$o(Re,u),re&&(U=!0);var Ye=(Re.deltaMode===1?l:Re.deltaMode===2?ui.innerHeight:1)*m;le(Re.deltaX*Ye,Re.deltaY*Ye,0),h&&!H&&et.restart(!0)}},me=function(Re){if(!ce(Re)){var Ye=Re.clientX,ge=Re.clientY,Je=Ye-W.x,Fe=ge-W.y;W.x=Ye,W.y=ge,be=!0,h&&et.restart(!0),(Je||Fe)&&nt(Je,Fe)}},je=function(Re){W.event=Re,N(W)},lt=function(Re){W.event=Re,z(W)},Ft=function(Re){return ce(Re)||$o(Re,u)&&j(W)};et=W._dc=Sn.delayedCall(d||.25,He).pause(),W.deltaX=W.deltaY=0,W._vx=Sh(0,50,!0),W._vy=Sh(0,50,!0),W.scrollX=R,W.scrollY=E,W.isDragging=W.isGesturing=W.isPressed=!1,tg(this),W.enable=function(Te){return W.isEnabled||(Nn(K?xe:a,"scroll",bh),o.indexOf("scroll")>=0&&Nn(K?xe:a,"scroll",Z,Ie,oe),o.indexOf("wheel")>=0&&Nn(a,"wheel",de,Ie,oe),(o.indexOf("touch")>=0&&Q0||o.indexOf("pointer")>=0)&&(Nn(a,Ui[0],rt,Ie,oe),Nn(xe,Ui[2],O),Nn(xe,Ui[3],O),ie&&Nn(a,"click",se,!0,!0),j&&Nn(a,"click",Ft),ne&&Nn(xe,"gesturestart",he),I&&Nn(xe,"gestureend",Y),N&&Nn(a,ls+"enter",je),z&&Nn(a,ls+"leave",lt),G&&Nn(a,ls+"move",me)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=be=tt=!1,W._vx.reset(),W._vy.reset(),q=R(),Q=E(),Te&&Te.type&&rt(Te),Le&&Le(W)),W},W.disable=function(){W.isEnabled&&(lo.filter(function(Te){return Te!==W&&ba(Te.target)}).length||Fn(K?xe:a,"scroll",bh),W.isPressed&&(W._vx.reset(),W._vy.reset(),Fn(H?a:xe,Ui[1],qe,!0)),Fn(K?xe:a,"scroll",Z,oe),Fn(a,"wheel",de,oe),Fn(a,Ui[0],rt,oe),Fn(xe,Ui[2],O),Fn(xe,Ui[3],O),Fn(a,"click",se,!0),Fn(a,"click",Ft),Fn(xe,"gesturestart",he),Fn(xe,"gestureend",Y),Fn(a,ls+"enter",je),Fn(a,ls+"leave",lt),Fn(a,ls+"move",me),W.isEnabled=W.isPressed=W.isDragging=!1,Ge&&Ge(W))},W.kill=W.revert=function(){W.disable();var Te=lo.indexOf(W);Te>=0&&lo.splice(Te,1),hr===W&&(hr=0)},lo.push(W),H&&ba(a)&&(hr=W),W.enable(_)},ix(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();tn.version="3.13.0";tn.create=function(r){return new tn(r)};tn.register=sg;tn.getAll=function(){return lo.slice()};tn.getById=function(r){return lo.filter(function(e){return e.vars.id===r})[0]};ng()&&Sn.registerPlugin(tn);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var De,no,ht,kt,li,Et,qd,wc,Ga,Sa,aa,ol,An,jc,Mh,Bn,Hf,Vf,io,og,uu,ag,kn,Th,lg,cg,Lr,wh,Xd,go,jd,Ec,Eh,hu,al=1,Cn=Date.now,du=Cn(),Pi=0,la=0,Gf=function(e,t,n){var i=si(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Wf=function(e,t){return t&&(!si(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},ox=function r(){return la&&requestAnimationFrame(r)},qf=function(){return jc=1},Xf=function(){return jc=0},Gi=function(e){return e},ca=function(e){return Math.round(e*1e5)/1e5||0},ug=function(){return typeof window<"u"},hg=function(){return De||ug()&&(De=window.gsap)&&De.registerPlugin&&De},Cs=function(e){return!!~qd.indexOf(e)},dg=function(e){return(e==="Height"?jd:ht["inner"+e])||li["client"+e]||Et["client"+e]},fg=function(e){return Gr(e,"getBoundingClientRect")||(Cs(e)?function(){return sc.width=ht.innerWidth,sc.height=jd,sc}:function(){return cr(e)})},ax=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Gr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?dg(s):e["client"+s])||0}},lx=function(e,t){return!t||~Yi.indexOf(e)?fg(e):function(){return sc}},ji=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Gr(e,n))?o()-fg(e)()[s]:Cs(e)?(li[n]||Et[n])-dg(i):e[n]-e["offset"+i])},ll=function(e,t){for(var n=0;n<io.length;n+=3)(!t||~t.indexOf(io[n+1]))&&e(io[n],io[n+1],io[n+2])},si=function(e){return typeof e=="string"},Pn=function(e){return typeof e=="function"},ua=function(e){return typeof e=="number"},cs=function(e){return typeof e=="object"},Yo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},fu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Os=Math.abs,pg="left",mg="top",$d="right",Yd="bottom",Ts="width",ws="height",Ma="Right",Ta="Left",wa="Top",Ea="Bottom",sn="padding",Mi="margin",Ro="Width",Jd="Height",un="px",Ti=function(e){return ht.getComputedStyle(e)},cx=function(e){var t=Ti(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},jf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},cr=function(e,t){var n=t&&Ti(e)[Mh]!=="matrix(1, 0, 0, 1, 0, 0)"&&De.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ac=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},gg=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},ux=function(e){return function(t){return De.utils.snap(gg(e),t)}},Kd=function(e){var t=De.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},hx=function(e){return function(t,n){return Kd(gg(e))(t,n.direction)}},cl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},vn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},_n=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ul=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},$f={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},hl={toggleActions:"play",anticipatePin:0},Cc={top:0,left:0,center:.5,bottom:1,right:1},tc=function(e,t){if(si(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Cc?Cc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},dl=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,m=kt.createElement("div"),_=Cs(n)||Gr(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,p=_?Et:n,x=e.indexOf("start")!==-1,y=x?c:u,v="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(v+=(i===dn?$d:Yd)+":"+(o+parseFloat(d))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=x,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=v,m.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(m,p.children[0]):p.appendChild(m),m._offset=m["offset"+i.op.d2],nc(m,0,i,x),m},nc=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ro]=1,s["border"+a+Ro]=0,s[n.p]=t+"px",De.set(e,s)},ct=[],Ah={},Wa,Yf=function(){return Cn()-Pi>34&&(Wa||(Wa=requestAnimationFrame(pr)))},ks=function(){(!kn||!kn.isPressed||kn.startX>Et.clientWidth)&&(dt.cache++,kn?Wa||(Wa=requestAnimationFrame(pr)):pr(),Pi||Ps("scrollStart"),Pi=Cn())},pu=function(){cg=ht.innerWidth,lg=ht.innerHeight},ha=function(e){dt.cache++,(e===!0||!An&&!ag&&!kt.fullscreenElement&&!kt.webkitFullscreenElement&&(!Th||cg!==ht.innerWidth||Math.abs(ht.innerHeight-lg)>ht.innerHeight*.25))&&wc.restart(!0)},Rs={},dx=[],_g=function r(){return _n(ze,"scrollEnd",r)||ms(!0)},Ps=function(e){return Rs[e]&&Rs[e].map(function(t){return t()})||dx},ii=[],vg=function(e){for(var t=0;t<ii.length;t+=5)(!e||ii[t+4]&&ii[t+4].query===e)&&(ii[t].style.cssText=ii[t+1],ii[t].getBBox&&ii[t].setAttribute("transform",ii[t+2]||""),ii[t+3].uncache=1)},Zd=function(e,t){var n;for(Bn=0;Bn<ct.length;Bn++)n=ct[Bn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ec=!0,t&&vg(t),t||Ps("revert")},xg=function(e,t){dt.cache++,(t||!zn)&&dt.forEach(function(n){return Pn(n)&&n.cacheID++&&(n.rec=0)}),si(e)&&(ht.history.scrollRestoration=Xd=e)},zn,Es=0,Jf,fx=function(){if(Jf!==Es){var e=Jf=Es;requestAnimationFrame(function(){return e===Es&&ms(!0)})}},yg=function(){Et.appendChild(go),jd=!kn&&go.offsetHeight||ht.innerHeight,Et.removeChild(go)},Kf=function(e){return Ga(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ms=function(e,t){if(li=kt.documentElement,Et=kt.body,qd=[ht,kt,li,Et],Pi&&!e&&!Ec){vn(ze,"scrollEnd",_g);return}yg(),zn=ze.isRefreshing=!0,dt.forEach(function(i){return Pn(i)&&++i.cacheID&&(i.rec=i())});var n=Ps("refreshInit");og&&ze.sort(),t||Zd(),dt.forEach(function(i){Pn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ct.slice(0).forEach(function(i){return i.refresh()}),Ec=!1,ct.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Eh=1,Kf(!0),ct.forEach(function(i){var s=ji(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Kf(!1),Eh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),dt.forEach(function(i){Pn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),xg(Xd,1),wc.pause(),Es++,zn=2,pr(2),ct.forEach(function(i){return Pn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),zn=ze.isRefreshing=!1,Ps("refresh")},Ch=0,ic=1,Aa,pr=function(e){if(e===2||!zn&&!Ec){ze.isUpdating=!0,Aa&&Aa.update(0);var t=ct.length,n=Cn(),i=n-du>=50,s=t&&ct[0].scroll();if(ic=Ch>s?-1:1,zn||(Ch=s),i&&(Pi&&!jc&&n-Pi>200&&(Pi=0,Ps("scrollEnd")),aa=du,du=n),ic<0){for(Bn=t;Bn-- >0;)ct[Bn]&&ct[Bn].update(0,i);ic=1}else for(Bn=0;Bn<t;Bn++)ct[Bn]&&ct[Bn].update(0,i);ze.isUpdating=!1}Wa=0},Rh=[pg,mg,Yd,$d,Mi+Ea,Mi+Ma,Mi+wa,Mi+Ta,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],rc=Rh.concat([Ts,ws,"boxSizing","max"+Ro,"max"+Jd,"position",Mi,sn,sn+wa,sn+Ma,sn+Ea,sn+Ta]),px=function(e,t,n){_o(n);var i=e._gsap;if(i.spacerIsNative)_o(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},mu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Rh.length,o=t.style,a=e.style,l;s--;)l=Rh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Yd]=a[$d]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ts]=Ac(e,Vn)+un,o[ws]=Ac(e,dn)+un,o[sn]=a[Mi]=a[mg]=a[pg]="0",_o(i),a[Ts]=a["max"+Ro]=n[Ts],a[ws]=a["max"+Jd]=n[ws],a[sn]=n[sn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},mx=/([A-Z])/g,_o=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||De.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(mx,"-$1").toLowerCase())}},fl=function(e){for(var t=rc.length,n=e.style,i=[],s=0;s<t;s++)i.push(rc[s],n[rc[s]]);return i.t=e,i},gx=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},sc={left:0,top:0},Zf=function(e,t,n,i,s,o,a,l,c,u,h,d,f,m){Pn(e)&&(e=e(l)),si(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?tc("0"+e.substr(3),n):0));var _=f?f.time():0,g,p,x;if(f&&f.seek(0),isNaN(e)||(e=+e),ua(e))f&&(e=De.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&nc(a,n,i,!0);else{Pn(t)&&(t=t(l));var y=(e||"0").split(" "),v,M,b,S;x=qn(t,l)||Et,v=cr(x)||{},(!v||!v.left&&!v.top)&&Ti(x).display==="none"&&(S=x.style.display,x.style.display="block",v=cr(x),S?x.style.display=S:x.style.removeProperty("display")),M=tc(y[0],v[i.d]),b=tc(y[1]||"0",n),e=v[i.p]-c[i.p]-u+M+s-b,a&&nc(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var C=e+n,w=o._isStart;g="scroll"+i.d2,nc(o,C,i,w&&C>20||!w&&(h?Math.max(Et[g],li[g]):o.parentNode[g])<=C+1),h&&(c=cr(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+un))}return f&&x&&(g=cr(x),f.seek(d),p=cr(x),f._caScrollDist=g[i.p]-p[i.p],e=e/f._caScrollDist*d),f&&f.seek(_),f?e:Math.round(e)},_x=/(webkit|moz|length|cssText|inset)/i,Qf=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===Et){e._stOrig=s.cssText,a=Ti(e);for(o in a)!+o&&!_x.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;De.core.getCache(e).uncache=1,t.appendChild(e)}},bg=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},pl=function(e,t,n){var i={};i[t.p]="+="+n,De.set(e,i)},ep=function(e,t){var n=$r(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var d=o.tween,f=l.onComplete,m={};c=c||n();var _=bg(n,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){dt.cache++,o.tween&&pr()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=De.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},vn(e,"wheel",n.wheelHandler),ze.isTouch&&vn(e,"touchmove",n.wheelHandler),s},ze=(function(){function r(t,n){no||r.register(De)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),wh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!la){this.update=this.refresh=this.kill=Gi;return}n=jf(si(n)||ua(n)||n.nodeType?{trigger:n}:n,hl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,p=s.onScrubComplete,x=s.onSnapComplete,y=s.once,v=s.snap,M=s.pinReparent,b=s.pinSpacer,S=s.containerAnimation,C=s.fastScrollEnd,w=s.preventOverlaps,T=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Vn:dn,P=!h&&h!==0,F=qn(n.scroller||ht),k=De.core.getCache(F),N=Cs(F),z=("pinType"in n?n.pinType:Gr(F,"pinType")||N&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],$=P&&n.toggleActions.split(" "),H="markers"in n?n.markers:hl.markers,ne=N?0:parseFloat(Ti(F)["border"+T.p2+Ro])||0,I=this,re=n.onRefreshInit&&function(){return n.onRefreshInit(I)},Le=ax(F,N,T),Ge=lx(F,N),j=0,ee=0,oe=0,ie=$r(F,T),pe,Ee,ye,et,tt,be,U,Tt,Ke,W,Ae,mt,Ie,R,E,q,Q,te,K,xe,ue,Ue,Oe,se,ce,He,ke,le,nt,qe,rt,O,he,Y,Z,de,me,je,lt;if(I._startClamp=I._endClamp=!1,I._dir=T,g*=45,I.scroller=F,I.scroll=S?S.time.bind(S):ie,et=ie(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(og=1,n.refreshPriority===-9999&&(Aa=I)),k.tweenScroll=k.tweenScroll||{top:ep(F,dn),left:ep(F,Vn)},I.tweenTo=pe=k.tweenScroll[T.p],I.scrubDuration=function(ge){he=ua(ge)&&ge,he?O?O.duration(ge):O=De.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:he,paused:!0,onComplete:function(){return p&&p(I)}}):(O&&O.progress(1).kill(),O=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(h),qe=0,l||(l=i.vars.id)),v&&((!cs(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Et.style&&De.set(N?[Et,li]:F,{scrollBehavior:"auto"}),dt.forEach(function(ge){return Pn(ge)&&ge.target===(N?kt.scrollingElement||li:F)&&(ge.smooth=!1)}),ye=Pn(v.snapTo)?v.snapTo:v.snapTo==="labels"?ux(i):v.snapTo==="labelsDirectional"?hx(i):v.directional!==!1?function(ge,Je){return Kd(v.snapTo)(ge,Cn()-ee<500?0:Je.direction)}:De.utils.snap(v.snapTo),Y=v.duration||{min:.1,max:2},Y=cs(Y)?Sa(Y.min,Y.max):Sa(Y,Y),Z=De.delayedCall(v.delay||he/2||.1,function(){var ge=ie(),Je=Cn()-ee<500,Fe=pe.tween;if((Je||Math.abs(I.getVelocity())<10)&&!Fe&&!jc&&j!==ge){var Xe=(ge-be)/R,zt=i&&!P?i.totalProgress():Xe,st=Je?0:(zt-rt)/(Cn()-aa)*1e3||0,xt=De.utils.clamp(-Xe,1-Xe,Os(st/2)*st/.185),Zt=Xe+(v.inertia===!1?0:xt),At,yt,gt=v,yn=gt.onStart,bt=gt.onInterrupt,cn=gt.onComplete;if(At=ye(Zt,I),ua(At)||(At=Zt),yt=Math.max(0,Math.round(be+At*R)),ge<=U&&ge>=be&&yt!==ge){if(Fe&&!Fe._initted&&Fe.data<=Os(yt-ge))return;v.inertia===!1&&(xt=At-Xe),pe(yt,{duration:Y(Os(Math.max(Os(Zt-zt),Os(At-zt))*.185/st/.05||0)),ease:v.ease||"power3",data:Os(yt-ge),onInterrupt:function(){return Z.restart(!0)&&bt&&bt(I)},onComplete:function(){I.update(),j=ie(),i&&!P&&(O?O.resetTo("totalProgress",At,i._tTime/i._tDur):i.progress(At)),qe=rt=i&&!P?i.totalProgress():I.progress,x&&x(I),cn&&cn(I)}},ge,xt*R,yt-ge-xt*R),yn&&yn(I,pe.tween)}}else I.isActive&&j!==ge&&Z.restart(!0)}).pause()),l&&(Ah[l]=I),d=I.trigger=qn(d||f!==!0&&f),lt=d&&d._gsap&&d._gsap.stRevert,lt&&(lt=lt(I)),f=f===!0?d:qn(f),si(a)&&(a={targets:d,className:a}),f&&(m===!1||m===Mi||(m=!m&&f.parentNode&&f.parentNode.style&&Ti(f.parentNode).display==="flex"?!1:sn),I.pin=f,Ee=De.core.getCache(f),Ee.spacer?E=Ee.pinState:(b&&(b=qn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),Ee.spacerIsNative=!!b,b&&(Ee.spacerState=fl(b))),Ee.spacer=te=b||kt.createElement("div"),te.classList.add("pin-spacer"),l&&te.classList.add("pin-spacer-"+l),Ee.pinState=E=fl(f)),n.force3D!==!1&&De.set(f,{force3D:!0}),I.spacer=te=Ee.spacer,nt=Ti(f),se=nt[m+T.os2],xe=De.getProperty(f),ue=De.quickSetter(f,T.a,un),mu(f,te,nt),Q=fl(f)),H){mt=cs(H)?jf(H,$f):$f,W=dl("scroller-start",l,F,T,mt,0),Ae=dl("scroller-end",l,F,T,mt,0,W),K=W["offset"+T.op.d2];var Ft=qn(Gr(F,"content")||F);Tt=this.markerStart=dl("start",l,Ft,T,mt,K,0,S),Ke=this.markerEnd=dl("end",l,Ft,T,mt,K,0,S),S&&(je=De.quickSetter([Tt,Ke],T.a,un)),!z&&!(Yi.length&&Gr(F,"fixedMarkers")===!0)&&(cx(N?Et:F),De.set([W,Ae],{force3D:!0}),He=De.quickSetter(W,T.a,un),le=De.quickSetter(Ae,T.a,un))}if(S){var Te=S.vars.onUpdate,Re=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){I.update(0,0,1),Te&&Te.apply(S,Re||[])})}if(I.previous=function(){return ct[ct.indexOf(I)-1]},I.next=function(){return ct[ct.indexOf(I)+1]},I.revert=function(ge,Je){if(!Je)return I.kill(!0);var Fe=ge!==!1||!I.enabled,Xe=An;Fe!==I.isReverted&&(Fe&&(de=Math.max(ie(),I.scroll.rec||0),oe=I.progress,me=i&&i.progress()),Tt&&[Tt,Ke,W,Ae].forEach(function(zt){return zt.style.display=Fe?"none":"block"}),Fe&&(An=I,I.update(Fe)),f&&(!M||!I.isActive)&&(Fe?px(f,te,E):mu(f,te,Ti(f),ce)),Fe||I.update(Fe),An=Xe,I.isReverted=Fe)},I.refresh=function(ge,Je,Fe,Xe){if(!((An||!I.enabled)&&!Je)){if(f&&ge&&Pi){vn(r,"scrollEnd",_g);return}!zn&&re&&re(I),An=I,pe.tween&&!Fe&&(pe.tween.kill(),pe.tween=0),O&&O.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(Ne){return Ne.vars.immediateRender&&Ne.render(0,!0,!0)})),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var zt=Le(),st=Ge(),xt=S?S.duration():ji(F,T),Zt=R<=.01||!R,At=0,yt=Xe||0,gt=cs(Fe)?Fe.end:n.end,yn=n.endTrigger||d,bt=cs(Fe)?Fe.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),cn=I.pinnedContainer=n.pinnedContainer&&qn(n.pinnedContainer,I),bn=d&&Math.max(0,ct.indexOf(I))||0,Yt=bn,Qt,A,V,X,L,D,J,ae,Me,_e,Ce,Pe,Se;for(H&&cs(Fe)&&(Pe=De.getProperty(W,T.p),Se=De.getProperty(Ae,T.p));Yt-- >0;)D=ct[Yt],D.end||D.refresh(0,1)||(An=I),J=D.pin,J&&(J===d||J===f||J===cn)&&!D.isReverted&&(_e||(_e=[]),_e.unshift(D),D.revert(!0,!0)),D!==ct[Yt]&&(bn--,Yt--);for(Pn(bt)&&(bt=bt(I)),bt=Gf(bt,"start",I),be=Zf(bt,d,zt,T,ie(),Tt,W,I,st,ne,z,xt,S,I._startClamp&&"_startClamp")||(f?-.001:0),Pn(gt)&&(gt=gt(I)),si(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(si(bt)?bt.split(" ")[0]:"")+gt:(At=tc(gt.substr(2),zt),gt=si(bt)?bt:(S?De.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,be):be)+At,yn=d)),gt=Gf(gt,"end",I),U=Math.max(be,Zf(gt||(yn?"100% 0":xt),yn,zt,T,ie()+At,Ke,Ae,I,st,ne,z,xt,S,I._endClamp&&"_endClamp"))||-.001,At=0,Yt=bn;Yt--;)D=ct[Yt],J=D.pin,J&&D.start-D._pinPush<=be&&!S&&D.end>0&&(Qt=D.end-(I._startClamp?Math.max(0,D.start):D.start),(J===d&&D.start-D._pinPush<be||J===cn)&&isNaN(bt)&&(At+=Qt*(1-D.progress)),J===f&&(yt+=Qt));if(be+=At,U+=At,I._startClamp&&(I._startClamp+=At),I._endClamp&&!zn&&(I._endClamp=U||-.001,U=Math.min(U,ji(F,T))),R=U-be||(be-=.01)&&.001,Zt&&(oe=De.utils.clamp(0,1,De.utils.normalize(be,U,de))),I._pinPush=yt,Tt&&At&&(Qt={},Qt[T.a]="+="+At,cn&&(Qt[T.p]="-="+ie()),De.set([Tt,Ke],Qt)),f&&!(Eh&&I.end>=ji(F,T)))Qt=Ti(f),X=T===dn,V=ie(),Ue=parseFloat(xe(T.a))+yt,!xt&&U>1&&(Ce=(N?kt.scrollingElement||li:F).style,Ce={style:Ce,value:Ce["overflow"+T.a.toUpperCase()]},N&&Ti(Et)["overflow"+T.a.toUpperCase()]!=="scroll"&&(Ce.style["overflow"+T.a.toUpperCase()]="scroll")),mu(f,te,Qt),Q=fl(f),A=cr(f,!0),ae=z&&$r(F,X?Vn:dn)(),m?(ce=[m+T.os2,R+yt+un],ce.t=te,Yt=m===sn?Ac(f,T)+R+yt:0,Yt&&(ce.push(T.d,Yt+un),te.style.flexBasis!=="auto"&&(te.style.flexBasis=Yt+un)),_o(ce),cn&&ct.forEach(function(Ne){Ne.pin===cn&&Ne.vars.pinSpacing!==!1&&(Ne._subPinOffset=!0)}),z&&ie(de)):(Yt=Ac(f,T),Yt&&te.style.flexBasis!=="auto"&&(te.style.flexBasis=Yt+un)),z&&(L={top:A.top+(X?V-be:ae)+un,left:A.left+(X?ae:V-be)+un,boxSizing:"border-box",position:"fixed"},L[Ts]=L["max"+Ro]=Math.ceil(A.width)+un,L[ws]=L["max"+Jd]=Math.ceil(A.height)+un,L[Mi]=L[Mi+wa]=L[Mi+Ma]=L[Mi+Ea]=L[Mi+Ta]="0",L[sn]=Qt[sn],L[sn+wa]=Qt[sn+wa],L[sn+Ma]=Qt[sn+Ma],L[sn+Ea]=Qt[sn+Ea],L[sn+Ta]=Qt[sn+Ta],q=gx(E,L,M),zn&&ie(0)),i?(Me=i._initted,uu(1),i.render(i.duration(),!0,!0),Oe=xe(T.a)-Ue+R+yt,ke=Math.abs(R-Oe)>1,z&&ke&&q.splice(q.length-2,2),i.render(0,!0,!0),Me||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),uu(0)):Oe=R,Ce&&(Ce.value?Ce.style["overflow"+T.a.toUpperCase()]=Ce.value:Ce.style.removeProperty("overflow-"+T.a));else if(d&&ie()&&!S)for(A=d.parentNode;A&&A!==Et;)A._pinOffset&&(be-=A._pinOffset,U-=A._pinOffset),A=A.parentNode;_e&&_e.forEach(function(Ne){return Ne.revert(!1,!0)}),I.start=be,I.end=U,et=tt=zn?de:ie(),!S&&!zn&&(et<de&&ie(de),I.scroll.rec=0),I.revert(!1,!0),ee=Cn(),Z&&(j=-1,Z.restart(!0)),An=0,i&&P&&(i._initted||me)&&i.progress()!==me&&i.progress(me||0,!0).render(i.time(),!0,!0),(Zt||oe!==I.progress||S||_||i&&!i._initted)&&(i&&!P&&(i._initted||oe||i.vars.immediateRender!==!1)&&i.totalProgress(S&&be<-.001&&!oe?De.utils.normalize(be,U,0):oe,!0),I.progress=Zt||(et-be)/R===oe?0:oe),f&&m&&(te._pinOffset=Math.round(I.progress*Oe)),O&&O.invalidate(),isNaN(Pe)||(Pe-=De.getProperty(W,T.p),Se-=De.getProperty(Ae,T.p),pl(W,T,Pe),pl(Tt,T,Pe-(Xe||0)),pl(Ae,T,Se),pl(Ke,T,Se-(Xe||0))),Zt&&!zn&&I.update(),u&&!zn&&!Ie&&(Ie=!0,u(I),Ie=!1)}},I.getVelocity=function(){return(ie()-tt)/(Cn()-aa)*1e3||0},I.endAnimation=function(){Yo(I.callbackAnimation),i&&(O?O.progress(1):i.paused()?P||Yo(i,I.direction<0,1):Yo(i,i.reversed()))},I.labelToScroll=function(ge){return i&&i.labels&&(be||I.refresh()||be)+i.labels[ge]/i.duration()*R||0},I.getTrailing=function(ge){var Je=ct.indexOf(I),Fe=I.direction>0?ct.slice(0,Je).reverse():ct.slice(Je+1);return(si(ge)?Fe.filter(function(Xe){return Xe.vars.preventOverlaps===ge}):Fe).filter(function(Xe){return I.direction>0?Xe.end<=be:Xe.start>=U})},I.update=function(ge,Je,Fe){if(!(S&&!Fe&&!ge)){var Xe=zn===!0?de:I.scroll(),zt=ge?0:(Xe-be)/R,st=zt<0?0:zt>1?1:zt||0,xt=I.progress,Zt,At,yt,gt,yn,bt,cn,bn;if(Je&&(tt=et,et=S?ie():Xe,v&&(rt=qe,qe=i&&!P?i.totalProgress():st)),g&&f&&!An&&!al&&Pi&&(!st&&be<Xe+(Xe-tt)/(Cn()-aa)*g?st=1e-4:st===1&&U>Xe+(Xe-tt)/(Cn()-aa)*g&&(st=.9999)),st!==xt&&I.enabled){if(Zt=I.isActive=!!st&&st<1,At=!!xt&&xt<1,bt=Zt!==At,yn=bt||!!st!=!!xt,I.direction=st>xt?1:-1,I.progress=st,yn&&!An&&(yt=st&&!xt?0:st===1?1:xt===1?2:3,P&&(gt=!bt&&$[yt+1]!=="none"&&$[yt+1]||$[yt],bn=i&&(gt==="complete"||gt==="reset"||gt in i))),w&&(bt||bn)&&(bn||h||!i)&&(Pn(w)?w(I):I.getTrailing(w).forEach(function(V){return V.endAnimation()})),P||(O&&!An&&!al?(O._dp._time-O._start!==O._time&&O.render(O._dp._time-O._start),O.resetTo?O.resetTo("totalProgress",st,i._tTime/i._tDur):(O.vars.totalProgress=st,O.invalidate().restart())):i&&i.totalProgress(st,!!(An&&(ee||ge)))),f){if(ge&&m&&(te.style[m+T.os2]=se),!z)ue(ca(Ue+Oe*st));else if(yn){if(cn=!ge&&st>xt&&U+1>Xe&&Xe+1>=ji(F,T),M)if(!ge&&(Zt||cn)){var Yt=cr(f,!0),Qt=Xe-be;Qf(f,Et,Yt.top+(T===dn?Qt:0)+un,Yt.left+(T===dn?0:Qt)+un)}else Qf(f,te);_o(Zt||cn?q:Q),ke&&st<1&&Zt||ue(Ue+(st===1&&!cn?Oe:0))}}v&&!pe.tween&&!An&&!al&&Z.restart(!0),a&&(bt||y&&st&&(st<1||!hu))&&Ga(a.targets).forEach(function(V){return V.classList[Zt||y?"add":"remove"](a.className)}),o&&!P&&!ge&&o(I),yn&&!An?(P&&(bn&&(gt==="complete"?i.pause().totalProgress(1):gt==="reset"?i.restart(!0).pause():gt==="restart"?i.restart(!0):i[gt]()),o&&o(I)),(bt||!hu)&&(c&&bt&&fu(I,c),G[yt]&&fu(I,G[yt]),y&&(st===1?I.kill(!1,1):G[yt]=0),bt||(yt=st===1?1:3,G[yt]&&fu(I,G[yt]))),C&&!Zt&&Math.abs(I.getVelocity())>(ua(C)?C:2500)&&(Yo(I.callbackAnimation),O?O.progress(1):Yo(i,gt==="reverse"?1:!st,1))):P&&o&&!An&&o(I)}if(le){var A=S?Xe/S.duration()*(S._caScrollDist||0):Xe;He(A+(W._isFlipped?1:0)),le(A)}je&&je(-Xe/S.duration()*(S._caScrollDist||0))}},I.enable=function(ge,Je){I.enabled||(I.enabled=!0,vn(F,"resize",ha),N||vn(F,"scroll",ks),re&&vn(r,"refreshInit",re),ge!==!1&&(I.progress=oe=0,et=tt=j=ie()),Je!==!1&&I.refresh())},I.getTween=function(ge){return ge&&pe?pe.tween:O},I.setPositions=function(ge,Je,Fe,Xe){if(S){var zt=S.scrollTrigger,st=S.duration(),xt=zt.end-zt.start;ge=zt.start+xt*ge/st,Je=zt.start+xt*Je/st}I.refresh(!1,!1,{start:Wf(ge,Fe&&!!I._startClamp),end:Wf(Je,Fe&&!!I._endClamp)},Xe),I.update()},I.adjustPinSpacing=function(ge){if(ce&&ge){var Je=ce.indexOf(T.d)+1;ce[Je]=parseFloat(ce[Je])+ge+un,ce[1]=parseFloat(ce[1])+ge+un,_o(ce)}},I.disable=function(ge,Je){if(I.enabled&&(ge!==!1&&I.revert(!0,!0),I.enabled=I.isActive=!1,Je||O&&O.pause(),de=0,Ee&&(Ee.uncache=1),re&&_n(r,"refreshInit",re),Z&&(Z.pause(),pe.tween&&pe.tween.kill()&&(pe.tween=0)),!N)){for(var Fe=ct.length;Fe--;)if(ct[Fe].scroller===F&&ct[Fe]!==I)return;_n(F,"resize",ha),N||_n(F,"scroll",ks)}},I.kill=function(ge,Je){I.disable(ge,Je),O&&!Je&&O.kill(),l&&delete Ah[l];var Fe=ct.indexOf(I);Fe>=0&&ct.splice(Fe,1),Fe===Bn&&ic>0&&Bn--,Fe=0,ct.forEach(function(Xe){return Xe.scroller===I.scroller&&(Fe=1)}),Fe||zn||(I.scroll.rec=0),i&&(i.scrollTrigger=null,ge&&i.revert({kill:!1}),Je||i.kill()),Tt&&[Tt,Ke,W,Ae].forEach(function(Xe){return Xe.parentNode&&Xe.parentNode.removeChild(Xe)}),Aa===I&&(Aa=0),f&&(Ee&&(Ee.uncache=1),Fe=0,ct.forEach(function(Xe){return Xe.pin===f&&Fe++}),Fe||(Ee.spacer=0)),n.onKill&&n.onKill(I)},ct.push(I),I.enable(!1,!1),lt&&lt(I),i&&i.add&&!R){var Ye=I.update;I.update=function(){I.update=Ye,dt.cache++,be||U||I.refresh()},De.delayedCall(.01,I.update),R=.01,be=U=0}else I.refresh();f&&fx()},r.register=function(n){return no||(De=n||hg(),ug()&&window.document&&r.enable(),no=la),no},r.defaults=function(n){if(n)for(var i in n)hl[i]=n[i];return hl},r.disable=function(n,i){la=0,ct.forEach(function(o){return o[i?"kill":"disable"](n)}),_n(ht,"wheel",ks),_n(kt,"scroll",ks),clearInterval(ol),_n(kt,"touchcancel",Gi),_n(Et,"touchstart",Gi),cl(_n,kt,"pointerdown,touchstart,mousedown",qf),cl(_n,kt,"pointerup,touchend,mouseup",Xf),wc.kill(),ll(_n);for(var s=0;s<dt.length;s+=3)ul(_n,dt[s],dt[s+1]),ul(_n,dt[s],dt[s+2])},r.enable=function(){if(ht=window,kt=document,li=kt.documentElement,Et=kt.body,De&&(Ga=De.utils.toArray,Sa=De.utils.clamp,wh=De.core.context||Gi,uu=De.core.suppressOverwrites||Gi,Xd=ht.history.scrollRestoration||"auto",Ch=ht.pageYOffset||0,De.core.globals("ScrollTrigger",r),Et)){la=1,go=document.createElement("div"),go.style.height="100vh",go.style.position="absolute",yg(),ox(),tn.register(De),r.isTouch=tn.isTouch,Lr=tn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Th=tn.isTouch===1,vn(ht,"wheel",ks),qd=[ht,kt,li,Et],De.matchMedia?(r.matchMedia=function(c){var u=De.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},De.addEventListener("matchMediaInit",function(){return Zd()}),De.addEventListener("matchMediaRevert",function(){return vg()}),De.addEventListener("matchMedia",function(){ms(0,1),Ps("matchMedia")}),De.matchMedia().add("(orientation: portrait)",function(){return pu(),pu})):console.warn("Requires GSAP 3.11.0 or later"),pu(),vn(kt,"scroll",ks);var n=Et.hasAttribute("style"),i=Et.style,s=i.borderTopStyle,o=De.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=cr(Et),dn.m=Math.round(a.top+dn.sc())||0,Vn.m=Math.round(a.left+Vn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Et.setAttribute("style",""),Et.removeAttribute("style")),ol=setInterval(Yf,250),De.delayedCall(.5,function(){return al=0}),vn(kt,"touchcancel",Gi),vn(Et,"touchstart",Gi),cl(vn,kt,"pointerdown,touchstart,mousedown",qf),cl(vn,kt,"pointerup,touchend,mouseup",Xf),Mh=De.utils.checkPrefix("transform"),rc.push(Mh),no=Cn(),wc=De.delayedCall(.2,ms).pause(),io=[kt,"visibilitychange",function(){var c=ht.innerWidth,u=ht.innerHeight;kt.hidden?(Hf=c,Vf=u):(Hf!==c||Vf!==u)&&ha()},kt,"DOMContentLoaded",ms,ht,"load",ms,ht,"resize",ha],ll(vn),ct.forEach(function(c){return c.enable(0,1)}),l=0;l<dt.length;l+=3)ul(_n,dt[l],dt[l+1]),ul(_n,dt[l],dt[l+2])}},r.config=function(n){"limitCallbacks"in n&&(hu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ol)||(ol=i)&&setInterval(Yf,i),"ignoreMobileResize"in n&&(Th=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ll(_n)||ll(vn,n.autoRefreshEvents||"none"),ag=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=qn(n),o=dt.indexOf(s),a=Cs(s);~o&&dt.splice(o,a?6:2),i&&(a?Yi.unshift(ht,i,Et,i,li,i):Yi.unshift(s,i))},r.clearMatchMedia=function(n){ct.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(si(n)?qn(n):n).getBoundingClientRect(),a=o[s?Ts:ws]*i||0;return s?o.right-a>0&&o.left+a<ht.innerWidth:o.bottom-a>0&&o.top+a<ht.innerHeight},r.positionInViewport=function(n,i,s){si(n)&&(n=qn(n));var o=n.getBoundingClientRect(),a=o[s?Ts:ws],l=i==null?a/2:i in Cc?Cc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ht.innerWidth:(o.top+l)/ht.innerHeight},r.killAll=function(n){if(ct.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Rs.killAll||[];Rs={},i.forEach(function(s){return s()})}},r})();ze.version="3.13.0";ze.saveStyles=function(r){return r?Ga(r).forEach(function(e){if(e&&e.style){var t=ii.indexOf(e);t>=0&&ii.splice(t,5),ii.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),De.core.getCache(e),wh())}}):ii};ze.revert=function(r,e){return Zd(!r,e)};ze.create=function(r,e){return new ze(r,e)};ze.refresh=function(r){return r?ha(!0):(no||ze.register())&&ms(!0)};ze.update=function(r){return++dt.cache&&pr(r===!0?2:0)};ze.clearScrollMemory=xg;ze.maxScroll=function(r,e){return ji(r,e?Vn:dn)};ze.getScrollFunc=function(r,e){return $r(qn(r),e?Vn:dn)};ze.getById=function(r){return Ah[r]};ze.getAll=function(){return ct.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ze.isScrolling=function(){return!!Pi};ze.snapDirectional=Kd;ze.addEventListener=function(r,e){var t=Rs[r]||(Rs[r]=[]);~t.indexOf(e)||t.push(e)};ze.removeEventListener=function(r,e){var t=Rs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ze.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],d=[],f=De.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(m){h.length||f.restart(!0),h.push(m.trigger),d.push(m),s<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Pn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Pn(s)&&(s=s(),vn(ze,"refresh",function(){return s=e.batchMax()})),Ga(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ze.create(c))}),t};var tp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},gu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(tn.isTouch?" pinch-zoom":""):"none",e===li&&r(Et,t)},ml={auto:1,scroll:1},vx=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||De.core.getCache(s),a=Cn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Et&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ml[(l=Ti(s)).overflowY]||ml[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Cs(s)&&(ml[(l=Ti(s)).overflowY]||ml[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Sg=function(e,t,n,i){return tn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&vx,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&vn(kt,tn.eventTypes[0],ip,!1,!0)},onDisable:function(){return _n(kt,tn.eventTypes[0],ip,!0)}})},xx=/(input|label|select|textarea)/i,np,ip=function(e){var t=xx.test(e.target.tagName);(t||np)&&(e._gsapAllow=!0,np=t)},yx=function(e){cs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=qn(e.target)||li,u=De.core.globals().ScrollSmoother,h=u&&u.get(),d=Lr&&(e.content&&qn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=$r(c,dn),m=$r(c,Vn),_=1,g=(tn.isTouch&&ht.visualViewport?ht.visualViewport.scale*ht.visualViewport.width:ht.outerWidth)/ht.innerWidth,p=0,x=Pn(i)?function(){return i(a)}:function(){return i||2.8},y,v,M=Sg(c,e.type,!0,s),b=function(){return v=!1},S=Gi,C=Gi,w=function(){l=ji(c,dn),C=Sa(Lr?1:0,l),n&&(S=Sa(0,ji(c,Vn))),y=Es},T=function(){d._gsap.y=ca(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(v){requestAnimationFrame(b);var H=ca(a.deltaY/2),ne=C(f.v-H);if(d&&ne!==f.v+f.offset){f.offset=ne-f.v;var I=ca((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",d._gsap.y=I+"px",f.cacheID=dt.cache,pr()}return!0}f.offset&&T(),v=!0},F,k,N,z,G=function(){w(),F.isActive()&&F.vars.scrollY>l&&(f()>l?F.progress(1)&&f(l):F.resetTo("scrollY",l))};return d&&De.set(d,{y:"+=0"}),e.ignoreCheck=function($){return Lr&&$.type==="touchmove"&&P()||_>1.05&&$.type!=="touchstart"||a.isGesturing||$.touches&&$.touches.length>1},e.onPress=function(){v=!1;var $=_;_=ca((ht.visualViewport&&ht.visualViewport.scale||1)/g),F.pause(),$!==_&&gu(c,_>1.01?!0:n?!1:"x"),k=m(),N=f(),w(),y=Es},e.onRelease=e.onGestureStart=function($,H){if(f.offset&&T(),!H)z.restart(!0);else{dt.cache++;var ne=x(),I,re;n&&(I=m(),re=I+ne*.05*-$.velocityX/.227,ne*=tp(m,I,re,ji(c,Vn)),F.vars.scrollX=S(re)),I=f(),re=I+ne*.05*-$.velocityY/.227,ne*=tp(f,I,re,ji(c,dn)),F.vars.scrollY=C(re),F.invalidate().duration(ne).play(.01),(Lr&&F.vars.scrollY>=l||I>=l-1)&&De.to({},{onUpdate:G,duration:ne})}o&&o($)},e.onWheel=function(){F._ts&&F.pause(),Cn()-p>1e3&&(y=0,p=Cn())},e.onChange=function($,H,ne,I,re){if(Es!==y&&w(),H&&n&&m(S(I[2]===H?k+($.startX-$.x):m()+H-I[1])),ne){f.offset&&T();var Le=re[2]===ne,Ge=Le?N+$.startY-$.y:f()+ne-re[1],j=C(Ge);Le&&Ge!==j&&(N+=j-Ge),f(j)}(ne||H)&&pr()},e.onEnable=function(){gu(c,n?!1:"x"),ze.addEventListener("refresh",G),vn(ht,"resize",G),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),M.enable()},e.onDisable=function(){gu(c,!0),_n(ht,"resize",G),ze.removeEventListener("refresh",G),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new tn(e),a.iOS=Lr,Lr&&!f()&&f(1),Lr&&De.ticker.add(Gi),z=a._dc,F=De.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:bg(f,f(),function(){return F.pause()})},onUpdate:pr,onComplete:z.vars.onComplete}),a};ze.sort=function(r){if(Pn(r))return ct.sort(r);var e=ht.pageYOffset||0;return ze.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ht.innerHeight}),ct.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ze.observe=function(r){return new tn(r)};ze.normalizeScroll=function(r){if(typeof r>"u")return kn;if(r===!0&&kn)return kn.enable();if(r===!1){kn&&kn.kill(),kn=r;return}var e=r instanceof tn?r:yx(r);return kn&&kn.target===e.target&&kn.kill(),Cs(e.target)&&(kn=e),e};ze.core={_getVelocityProp:Sh,_inputObserver:Sg,_scrollers:dt,_proxies:Yi,bridge:{ss:function(){Pi||Ps("scrollStart"),Pi=Cn()},ref:function(){return An}}};hg()&&De.registerPlugin(ze);var bx="1.3.4";function Mg(r,e,t){return Math.max(r,Math.min(e,t))}function Sx(r,e,t){return(1-t)*r+t*e}function Mx(r,e,t,n){return Sx(r,e,1-Math.exp(-t*n))}function Tx(r,e){return(r%e+e)%e}var wx=class{constructor(){Ve(this,"isRunning",!1);Ve(this,"value",0);Ve(this,"from",0);Ve(this,"to",0);Ve(this,"currentTime",0);Ve(this,"lerp");Ve(this,"duration");Ve(this,"easing");Ve(this,"onUpdate")}advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=Mg(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Mx(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function Ex(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var Ax=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){Ve(this,"width",0);Ve(this,"height",0);Ve(this,"scrollHeight",0);Ve(this,"scrollWidth",0);Ve(this,"debouncedResize");Ve(this,"wrapperResizeObserver");Ve(this,"contentResizeObserver");Ve(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ve(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ve(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=Ex(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Tg=class{constructor(){Ve(this,"events",{})}emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},rp=100/6,Sr={passive:!1},Cx=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){Ve(this,"touchStart",{x:0,y:0});Ve(this,"lastDelta",{x:0,y:0});Ve(this,"window",{width:0,height:0});Ve(this,"emitter",new Tg);Ve(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Ve(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Ve(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Ve(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?rp:n===2?this.window.width:1,s=n===1?rp:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});Ve(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Sr),this.element.addEventListener("touchstart",this.onTouchStart,Sr),this.element.addEventListener("touchmove",this.onTouchMove,Sr),this.element.addEventListener("touchend",this.onTouchEnd,Sr)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Sr),this.element.removeEventListener("touchstart",this.onTouchStart,Sr),this.element.removeEventListener("touchmove",this.onTouchMove,Sr),this.element.removeEventListener("touchend",this.onTouchEnd,Sr)}},sp=r=>Math.min(1,1.001-Math.pow(2,-10*r)),Rx=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:o=35,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:d="vertical",touchMultiplier:f=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:g,virtualScroll:p,overscroll:x=!0,autoRaf:y=!1,anchors:v=!1,autoToggle:M=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:S=!1}={}){Ve(this,"_isScrolling",!1);Ve(this,"_isStopped",!1);Ve(this,"_isLocked",!1);Ve(this,"_preventNextNativeScrollEvent",!1);Ve(this,"_resetVelocityTimeout",null);Ve(this,"__rafID",null);Ve(this,"isTouching");Ve(this,"time",0);Ve(this,"userData",{});Ve(this,"lastVelocity",0);Ve(this,"velocity",0);Ve(this,"direction",0);Ve(this,"options");Ve(this,"targetScroll");Ve(this,"animatedScroll");Ve(this,"animate",new wx);Ve(this,"emitter",new Tg);Ve(this,"dimensions");Ve(this,"virtualScroll");Ve(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Ve(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ve(this,"onTransitionEnd",r=>{if(r.propertyName.includes("overflow")){const e=this.isHorizontal?"overflow-x":"overflow-y",t=getComputedStyle(this.rootElement)[e];["hidden","clip"].includes(t)?this.stop():this.start()}});Ve(this,"onClick",r=>{const t=r.composedPath().find(n=>n instanceof HTMLAnchorElement&&(n.getAttribute("href")?.startsWith("#")||n.getAttribute("href")?.startsWith("/#")||n.getAttribute("href")?.startsWith("./#")));if(t){const n=t.getAttribute("href");if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;let s=`#${n.split("#")[1]}`;["#","/#","./#","#top","/#top","./#top"].includes(n)&&(s=0),this.scrollTo(s,i)}}});Ve(this,"onPointerDown",r=>{r.button===1&&this.reset()});Ve(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(g=>g instanceof HTMLElement&&(typeof u=="function"&&u?.(g)||g.hasAttribute?.("data-lenis-prevent")||i&&g.hasAttribute?.("data-lenis-prevent-touch")||s&&g.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(g,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.preventDefault();const f=i&&this.options.syncTouch,_=i&&n.type==="touchend"&&Math.abs(d)>5;_&&(d=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ve(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ve(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=bx,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=sp:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:h,touchMultiplier:f,wheelMultiplier:m,autoResize:_,prevent:g,virtualScroll:p,overscroll:x,autoRaf:y,anchors:v,autoToggle:M,allowNestedScroll:b,__experimental__naiveDimensions:S},this.dimensions=new Ax(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Cx(t,{touchMultiplier:f,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:u=!0,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let d;if(typeof r=="string"?d=document.querySelector(r):r instanceof HTMLElement&&r?.nodeType&&(d=r),d){if(this.options.wrapper!==window){const m=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?m.left:m.top}const f=d.getBoundingClientRect();r=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(u){this.targetScroll=this.animatedScroll=this.scroll;const d=r-this.animatedScroll;d>this.limit/2?r=r-this.limit:d<-this.limit/2&&(r=r+this.limit)}}else r=Mg(0,r,this.limit);if(r===this.targetScroll){a?.(this),l?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=r),typeof i=="number"&&typeof s!="function"?s=sp:typeof s=="function"&&typeof i!="number"&&(i=1),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a?.(this)},onUpdate:(d,f)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),u&&(this.targetScroll=d),f||this.emit(),f&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??(r._lenis={});let s,o,a,l,c,u,h,d;const f=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const M=window.getComputedStyle(r);i.computedStyle=M;const b=M.overflowX,S=M.overflowY;if(s=["auto","overlay","scroll"].includes(b),o=["auto","overlay","scroll"].includes(S),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||f==="vertical"&&!o||f==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,d=r.clientHeight,a=c>h,l=u>d,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=h,i.clientHeight=d}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,d=i.clientHeight;if(!s&&!o||!a&&!l||f==="vertical"&&(!o||!l)||f==="horizontal"&&(!s||!a))return!1;let m;if(f==="horizontal")m="x";else if(f==="vertical")m="y";else{const M=e!==0,b=t!==0;M&&s&&a&&(m="x"),b&&o&&l&&(m="y")}if(!m)return!1;let _,g,p,x,y;if(m==="x")_=r.scrollLeft,g=c-h,p=e,x=s,y=a;else if(m==="y")_=r.scrollTop,g=u-d,p=t,x=o,y=l;else return!1;return(p>0?_<g:_>0)&&x&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Tx(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const Bs="https://johnnyrayane237.github.io/jobhunter-poste-de-pilotage/",zs="https://johnnyrayane237.github.io/aiguilleur/",op="https://github.com/Johnnyrayane237/standardiste-vocal-ia",ap="https://github.com/Johnnyrayane237/accueil-client-sms-ia",lp="https://github.com/Johnnyrayane237/devis-ia-relance-automatique",cp="https://johanne.vorchex.tech",up="https://github.com/Johnnyrayane237/rapport-du-lundi-ia",hp="https://github.com/Johnnyrayane237/fin-des-doubles-saisies",dp={fr:{meta:{title:"Johanne Pamegne — Le futur de vos tâches, déjà construit",description:"Portfolio de Johanne Rayane Nkeuchatchou Pamegne, alternant automatisation et IA : un voyage des tâches manuelles d'aujourd'hui vers leur futur automatisé — agents IA, sites et pubs. Disponible en alternance ou stage alterné."},ui:{"nav.horizon":"Voyage","nav.agents":"Agents","nav.atelier":"Atelier","nav.path":"Trajectoire","nav.contact":"Contact","nav.menu":"Menu","nav.close":"Fermer",status:"Disponible — alternance ou stage alterné","hero.fullname":"Johanne Rayane Nkeuchatchou Pamegne","hero.kicker":'Alternant <span class="u-accent">Automatisation &amp; IA</span><br>Agents · sites · pubs',"hero.lede":"Les tâches que vous faites à la main aujourd'hui ont déjà un futur automatisé. Je le construis, avec une règle : une personne valide chaque action qui compte.","hero.scroll":"Faites défiler","hero.loc":"Saint-Denis · Île-de-France","hero.resume":"Reprendre","manifesto.label":"(01) Manifeste","manifesto.text":"Chaque tâche répétitive a un futur. Le téléphone qu'on ne peut pas décrocher, le devis du dimanche soir, la facture à relancer : je les confie à des agents. Et je garde une règle : une personne valide chaque action qui compte.","manifesto.method":"Méthode : je pilote l'IA (Claude Code) pour écrire le code, puis je teste, je mesure les coûts et je documente.","trades.label":"Trois métiers, une seule méthode","horizon.label":"(02) Le voyage","horizon.title":"Douze tâches d'aujourd'hui, <em>et leur futur.</em>","horizon.hint":"Faites défiler : chaque tâche faite à la main bascule dans son futur automatisé, que j'ai déjà commencé à construire.","horizon.note":"Le statut dit où en est vraiment chaque projet.","horizon.open":"Ouvrir le projet","horizon.today":"Aujourd'hui · à la main","horizon.future":"Demain · automatisé","agents.label":"(03) Salle des agents","agents.title":"Trois missions, <em>une personne aux commandes.</em>","agents.intro":"Chaque forme est un agent. Les fibres montrent qui parle à qui, et les points de lumière, ce qui passe de l'un à l'autre. Au bout de chaque mission, rien ne part sans un humain : ici, c'est vous.","agents.play":"Lecture","agents.pause":"Pause","agents.skip":"Passer","agents.replay":"Revoir","agents.scroll":"Faites défiler pour avancer la mission","agents.log":"Journal","atelier.label":"(04) Atelier","atelier.title":"Ce que j'ai <em>réalisé.</em>","atelier.intro":"Des sites en ligne, des films et des pubs animés en code. Le film DT Design est publié avec l'accord de la marque.","atelier.sites":"Sites en ligne","atelier.films":"Films et pubs","atelier.edition":"Édition","atelier.visit":"Visiter","motion.play":"Lire avec le son","mdm.title":"Le Meilleur des mondes","mdm.text":"Présentation éditoriale en 4 pages verticales : mise en page en HTML et CSS, schémas SVG générés en JavaScript, export PDF automatique. Réalisée avec Tissio Fumtul Donald.","path.label":"(05) Trajectoire","path.title":"Apprendre vite, <em>livrer vraiment.</em>","path.tools":"Boîte à outils","contact.label":"(06) Épilogue","contact.title":"Quelle tâche ne voulez-vous <em>plus jamais faire ?</em>","contact.ask":"Écrivez-la ici. Votre messagerie s'ouvre avec le message prêt : je vous réponds avec la façon dont je l'automatiserais, et qui garderait la main.","contact.placeholder":"Ex. : relancer les devis restés sans réponse","contact.send":"Me l'envoyer","contact.echo":"Ça ressemble à {p} : la Machine en prend la forme.","contact.subject":"Une tâche à ne plus jamais faire","contact.body":`Bonjour Johanne,

La tâche que je ne veux plus jamais faire :
`,"contact.text":"Je cherche une alternance ou un stage alterné en automatisation et IA, en Île-de-France ou à distance. Le développement web m'intéresse aussi. Rythme école / entreprise au choix de l'entreprise, disponible dès maintenant.","contact.mail":"Écrire un e-mail","contact.cv":"Télécharger le CV","contact.copy":"Copier l'adresse","contact.copied":"Adresse copiée","footer.credit":"Conçu et codé par Johanne.","footer.top":"Revenir au départ","footer.time":"Heure locale","footer.night":"nuit à Paris : la Machine tourne au ralenti","case.close":"Fermer","case.results":"Résultats mesurés","case.built":"Ce que j'ai construit","case.stack":"Outils","case.next":"Projet suivant","case.glass":"Glisser pour tourner","quick.btn":"Recruteur pressé ?","quick.btn.time":"30 s","quick.top":"L'essentiel en 30 s","loader.title":"Tâches du jour","loader.done":"confiée à un agent","lang.switch":"Switch to English",skip:"Aller au contenu"},loader:["Décrocher le téléphone","Rappeler les appels manqués","Chiffrer le devis","Relancer la facture","Trier les e-mails","Créer le site","Lancer la pub"],trades:[["Automatiser","Agents IA et workflows n8n qui décrochent, chiffrent, trient et relancent.","#horizon"],["Créer des sites","Vitrines, tableaux de bord et outils internes, du plan à la mise en ligne.","#atelier"],["Lancer des pubs","Films et pubs animés en code : script, voix off, montage et son.","#atelier"]],horizon:{horizon:"Horizon",autonomy:"Autonomie",today:"Aujourd'hui",repeat:"fois à la main",station:"Station",level:"niveau",status:{service:"En service",prototype:"Prototype",vision:"Vision"},stations:{voice:{task:"Décrocher le téléphone",today:"En plein chantier, le téléphone sonne. Personne ne peut décrocher : le client appelle ailleurs.",future:"Un agent vocal décroche, prend ou déplace le rendez-vous, et prévient le responsable en cas d'urgence."},sms:{task:"Rappeler les appels manqués",today:"Le soir, on fait défiler les appels manqués et on rappelle un par un, quand on y pense.",future:"Dans la minute, un SMS répond, comprend la demande et propose trois créneaux vraiment libres."},devis:{task:"Chiffrer les devis",today:"Le dimanche soir, on recopie la grille de prix dans un tableur, ligne après ligne.",future:"La demande devient un devis chiffré depuis la grille de l'entreprise. L'IA ne fixe jamais un prix : le responsable valide."},invoice:{task:"Relancer les factures",today:"On cherche qui n'a pas payé, on rédige la relance, on l'envoie… et on oublie la suivante.",future:"Relances et PDF partent seuls, tout est journalisé, et rien de juridique ne part sans validation humaine."},doublons:{task:"Recopier chaque client",today:"Le même client, ressaisi dans le CRM, la facturation, le tableur et l’agenda. Une faute de frappe, et voilà un doublon.",future:"Saisi une seule fois, le client est partout à jour en moins d’une minute. Un doublon ressaisi autrement est bloqué, raison à l’appui."},switch:{task:"Trier les e-mails",today:"La boîte contact@ déborde. Chaque e-mail est lu, transféré, parfois perdu.",future:"Chaque e-mail est classé, résumé et confié au bon collègue, avec un brouillon de réponse à valider."},radar:{task:"Chercher des offres",today:"On ouvre dix sites, on copie, on compare, puis on écrit chaque candidature à la main.",future:"Des agents cherchent, notent et préparent chaque candidature ; un vérificateur relit tout avant qu’une personne valide."},rapport:{task:"Préparer le rapport du lundi",today:"Le lundi matin, on nettoie l’export des ventes, on refait les calculs et on écrit le point de la semaine.",future:"Le rapport part seul, erreurs du fichier écartées. L’IA rédige le commentaire, et chaque nombre est vérifié avant l’envoi."},site:{task:"Créer un site",today:"Des allers-retours sans fin entre un brief flou, une maquette et le code.",future:"Une équipe d'agents écrit le plan, la charte et le code ; une personne valide la mise en ligne. C'est encore une vision."},wave:{task:"Doubler une vidéo",today:"Traduire, réenregistrer, recaler la voix… puis tout recommencer pour chaque langue.",future:"La vidéo envoyée sur Telegram revient doublée dans une autre langue, avec la voix d'origine."},film:{task:"Monter une pub",today:"Script, voix, montage, son : chaque format refait à la main.",future:"Script, voix off, animation et son sont produits en code ; chaque version est contrôlée avant diffusion."},server:{task:"Faire tenir le tout",today:"Des outils éparpillés, des accès partout, et personne ne sait vraiment ce qui tourne.",future:"Un serveur que j'administre fait tourner les équipes d'agents. Au centre, une personne garde la main."}}},agents:{gate:"Valider",gateWait:"En attente de votre validation",done:"Mission terminée",kinds:{ring:"écoute",probe:"cherche",prism:"analyse",quill:"rédige",lens:"vérifie",compass:"oriente",planes:"structure",blades:"assemble",fork:"donne de la voix",ribbon:"met en forme",human:"décide"},missions:{jobhunter:{tab:"JobHunter",title:"Trouver une alternance",status:"Prototype",note:"Rejeu d’un vrai test : les chiffres sont mesurés, les noms d’entreprises sont fictifs.",agents:["Chercheur","Évaluateur","Enquêteur","Rédacteur","Vérificateur","Vous"],say:["Je ne suis pas une IA : j'interroge l'API La bonne alternance.","Je note chaque offre selon le profil.","Je trouve à qui écrire.","Je prépare la candidature.","Je relis tout. Sans relecture réussie, la base refuse l’e-mail.","À vous de valider."],log:["74 offres reçues · 68 nouvelles après les doublons","34 offres retenues sur 68","contact trouvé : service recrutement, Atelier Nova (fictif)","candidature prête · 0,07 $ la carte","relecture réussie · 0,001 $ · 13/13 bien vérifiées sur le test","validé par vous · Gmail n’est pas encore branché : l’envoi reste manuel"]},site:{tab:"Créer un site",title:"Créer un site vitrine",status:"Vision",note:"Démonstration, données fictives.",agents:["Brief","Architecte","Designer","Développeur","Testeur","Vous"],say:["Une céramiste veut une vitrine et une prise de rendez-vous.","Quatre pages : accueil, créations, atelier, contact.","Couleurs et polices tirées de son logo.","J’écris le code, version téléphone comprise.","Je teste le clavier, les contrastes et le téléphone.","À vous de valider la mise en ligne."],log:["brief compris · Atelier Lune, céramiste (fictif)","plan : 4 pages","charte : 2 couleurs, 2 polices","code généré · mobile compris","contrôles passés : clavier, contrastes, téléphone","mise en ligne validée par vous"]},pub:{tab:"Lancer une pub",title:"Lancer une pub verticale",status:"Prototype",note:"Démonstration, données fictives. La méthode est celle de mes vraies pubs.",agents:["Stratège","Scénariste","Voix","Monteur","Contrôle","Vous"],say:["Cible : les voisins du quartier. Un seul message.","Un script de 30 s, et sa version de 15 s.","La voix off est enregistrée.","Animation en code, sous-titres posés.","Son à −14 LUFS, format 9:16 : prêt pour les réseaux.","À vous de valider la diffusion."],log:["cible et message fixés · Boulangerie du Canal (fictive)","script 30 s + version 15 s","voix off ElevenLabs générée","montage HyperFrames · sous-titres","contrôle : −14 LUFS, 9:16","diffusion validée par vous"]}}},quick:{label:"L'essentiel en 30 secondes",title:"Johanne Pamegne, <em>alternant Automatisation &amp; IA.</em>",lede:"Je construis le futur automatisé des tâches répétitives : agents IA et workflows n8n, sites, pubs animées en code. Chaque chiffre ci-dessous est mesuré sur un vrai projet.",proofs:[["< 1 min","de la demande au devis chiffré, sans qu'aucun prix soit inventé","Devis IA et relance automatique · n8n + Claude","devis"],["69","tests automatiques, 48 blocs n8n générés par du code","Accueil client IA par SMS · n8n + Twilio","accueil-sms"],["100 %","de précision sur 10 000 fiches : aucun vrai client bloqué à tort","Fin des doubles saisies · n8n + HubSpot","doublons"],["0,07 $","coût mesuré par candidature","JobHunter · multi-agent + Supabase","jobhunter"]],facts:[["Je cherche","Alternance ou stage alterné en automatisation et IA, ou en développement web"],["Disponibilité","Dès maintenant"],["Rythme","Au choix de l'entreprise"],["Lieu","Île-de-France ou à distance"],["Formation","Bachelor informatique, 2e année — ESIIA, Torcy"]],stack:["n8n","Python","API Claude","Agents IA","API REST","Retell AI","Twilio","Docker","PostgreSQL","Supabase","React","three.js","GSAP"],cv:"Télécharger le CV",mail:"Écrire un e-mail",more:"Voir tout le voyage",see:"Voir le projet"},projects:[{id:"standardiste",short:"Standardiste",color:"#C49BFF",year:"2026",img:"media/standardiste.webp",title:"Standardiste vocal IA",sub:"Une assistante qui décroche quand personne ne peut",tags:["Retell AI","n8n","API Claude","ElevenLabs"],summary:"« Lucie » répond au téléphone quand l'équipe est occupée. Elle prend, déplace et annule les rendez-vous, repère les urgences et prévient le responsable. Démo réalisée pour un plombier, réglable pour tout métier qui vit de ses rendez-vous.",metrics:[["60","blocs n8n générés par du code"],["65","tests automatiques au vert"],["6","fonctions appelées par l'agent en plein appel"],["30 j","de conservation des enregistrements (RGPD)"]],built:["Agent vocal Retell AI, voix ElevenLabs, consignes et 6 fonctions","Chaque action revérifiée avant d'écrire dans l'agenda","Urgence : alerte immédiate au responsable, puis transfert de l'appel","Récapitulatif chaque soir, effacement automatique des vieilles données","Testé en appels réels, construit en pilotant Claude Code"],stack:["Retell AI","n8n","API Claude","ElevenLabs","ntfy","Coolify","Node.js"],links:[["Voir le code sur GitHub",op]]},{id:"accueil-sms",short:"Accueil SMS",color:"#FF7AD9",year:"2026",img:"media/accueil-sms.webp",title:"Accueil client IA par SMS",sub:"Plus aucun client perdu, plus aucun rendez-vous oublié",tags:["n8n","API Claude","Twilio","SMS"],summary:"Quand personne ne peut décrocher, l'appelant reçoit un SMS dans la minute. L'IA comprend sa demande, propose trois créneaux vraiment libres et réserve, puis rappelle le rendez-vous, gère les annulations et la liste d'attente. Sans application : un simple SMS suffit.",metrics:[["3","créneaux vraiment libres proposés par SMS"],["48","blocs n8n générés par du code"],["69","tests automatiques au vert"],["2","rappels avant chaque rendez-vous, réponse en un mot"]],built:["Appel manqué : SMS d'accueil dans la minute, alerte au responsable sur son téléphone","Claude comprend les messages libres ; des règles de secours prennent le relais si l'IA ne répond pas","Rappels la veille à 18 h et 3 h avant : le client répond OUI, DEPLACER ou ANNULER","Place libérée offerte à la liste d'attente : le premier OUI l'emporte","Démo à deux téléphones, testée de bout en bout avec un vrai appel, construite en pilotant Claude Code"],stack:["n8n","API Claude","Twilio","ntfy","Node.js","Coolify"],links:[["Voir le code sur GitHub",ap]]},{id:"devis",short:"Devis IA",color:"#D2F65A",year:"2026",img:"media/devis.webp",title:"Devis IA et relance automatique",sub:"Chaque demande chiffrée, chaque devis relancé",tags:["n8n","API Claude","Devis","Relances"],summary:"Une demande écrite en quelques lignes devient un devis chiffré en moins d'une minute, à partir de la grille de prix de l'entreprise : l'IA ne fixe jamais un prix. Le responsable valide d'un geste, le client accepte en ligne, et sans réponse des relances personnalisées partent toutes seules. Démo réalisée pour une entreprise de rénovation fictive, réglable pour tout métier qui vit de devis.",metrics:[["< 1 min","de la demande au brouillon de devis chiffré"],["0","prix fixé par l'IA : chaque montant vient de la grille"],["3","relances sur mesure, arrêtées dès que le client répond"],["41","tests automatiques au vert, 44 blocs n8n"]],built:["Claude repère les ouvrages et les quantités ; le code calcule chaque montant, la TVA, l'acompte et la marge","Contrôles avant envoi : postes oubliés, doublons, quantités anormales ; un poste hors grille bloque l'envoi","Alerte sur le téléphone du responsable : rien ne part sans sa validation","Devis en ligne : le client accepte, pose une question ou décline ; l'IA lit sa réponse et conseille le responsable","Testé de bout en bout avec la vraie API Claude, construit en pilotant Claude Code"],stack:["n8n","API Claude","ntfy","Node.js","Coolify"],links:[["Voir le code sur GitHub",lp]]},{id:"encaisse",short:"Encaisse",color:"#FFB347",year:"2026",img:null,title:"Encaisse",sub:"Recouvrement de factures BTP — en cours",tags:["n8n","PostgreSQL","Gotenberg"],summary:"Automatisation du recouvrement de factures pour le BTP : relances, PDF, envois. Tout est journalisé, et aucune action juridique ne part sans validation humaine.",metrics:[["3/3","fichiers de tests SQL au vert"],["13","règles de conception écrites avant le code"],["PDF","générés automatiquement par Gotenberg"],["0","envoi réel tant que le mode test est actif"]],built:["PostgreSQL 16, Gotenberg 8, Mailpit en développement","Montants en centimes entiers, paramètres en base","Chaque envoi contrôlé, chaque action journalisée"],stack:["n8n","PostgreSQL","Gotenberg","Docker"],links:[]},{id:"doublons",short:"Zéro doublon",color:"#5CF6FF",year:"2026",img:"media/doublons.webp",title:"Un client saisi une fois, partout à jour",sub:"CRM, facturation, tableur et agenda synchronisés, doublons bloqués",tags:["n8n","API REST","HubSpot","Zoho Invoice"],summary:"Dans beaucoup d'entreprises, un nouveau client est saisi trois ou quatre fois : CRM, facturation, tableur de suivi, agenda. Ici, il est saisi une seule fois dans HubSpot ; en moins d'une minute, il apparaît dans Zoho Invoice, dans un tableur Google et dans Google Agenda, avec son premier rendez-vous posé sur un créneau libre. Si un collègue le ressaisit autrement, le doublon est bloqué et la raison est expliquée en clair. Démo réalisée avec des clients fictifs sur de vrais comptes, adaptable à tout métier qui gère des clients.",metrics:[["100 %","de précision : aucun vrai client bloqué par erreur"],["99,6 %","des doublons bloqués d'office, 100 % avec la vérification humaine"],["10 000","fiches de test jamais vues, dont 800 doublons cachés"],["< 1 min","entre la saisie dans HubSpot et la copie dans les 3 outils"]],built:["Fiches remises au propre avant comparaison : téléphone au format international, nom sans forme juridique ni accents, e-mail normalisé","Score de ressemblance explicable (téléphone, e-mail, SIRET vérifié, nom approché, adresse) : chaque doublon bloqué dit pourquoi","Une seule action par client : créer, mettre à jour, bloquer ou ne rien faire ; une empreinte empêche toute double copie","Fiable quand un outil tombe : 3 essais, alerte claire sur le téléphone, et chaque nuit les 4 outils comparés champ par champ","Un vrai défaut de HubSpot repéré pendant les essais réels, corrigé et ajouté aux tests automatiques"],stack:["n8n","HubSpot","Zoho Invoice","Google Sheets","Google Agenda","JavaScript"],links:[["Voir le code sur GitHub",hp]]},{id:"aiguilleur",short:"Aiguilleur",color:"#FFC46B",year:"2026",img:"media/aiguilleur.webp",title:"Aiguilleur IA",sub:"Tri automatique des e-mails clients",tags:["n8n","API Claude","Gmail","Google Sheets"],summary:"Il relève la boîte contact@ d'une entreprise toutes les 15 secondes. Un seul appel à Claude classe l'e-mail, mesure l'urgence, résume, rédige un brouillon et le confie au bon collègue.",metrics:[["32/32","e-mails de test bien classés"],["1,5 ct","par e-mail analysé"],["15 s","entre deux relèves de la boîte"],["85 %","de confiance minimum, sinon une personne tranche"]],built:["Relève la boîte toutes les 15 s, pièces jointes PDF et photos comprises","Une fiche claire au bon collègue : résumé, action à faire, proposition de réponse","Réponses automatiques en brouillon à valider par défaut","Déclinable par métier : syndic, commerce"],stack:["n8n","API Claude","Gmail","Google Sheets","Telegram","Docker"],links:[["Voir la présentation",zs]]},{id:"jobhunter",short:"JobHunter",color:"#35E08B",year:"2026",img:"media/jobhunter.webp",title:"JobHunter",sub:"Système multi-agent de recherche d'alternance",tags:["n8n","Supabase","API Claude","React"],summary:"Des agents cherchent les offres, les notent, trouvent le bon contact et préparent chaque candidature. Un agent vérificateur relit tout : la base refuse un e-mail sans relecture réussie. L'envoi par Gmail n'est pas encore branché.",metrics:[["74 → 34","offres reçues puis retenues, sur un test réel"],["13/13","candidatures correctement vérifiées"],["0,07 $","coût mesuré par candidature"],["68","offres nouvelles une fois les doublons écartés"]],built:["Recherche par l'API La bonne alternance, puis notation par Claude","13 workflows générés depuis le code et déployés par script","Base Supabase : 21 tables protégées par RLS","Poste de pilotage React 19 + TypeScript, testé avec Vitest","Coût de chaque appel à l’IA enregistré"],stack:["n8n","Supabase","API Claude","Telegram","React 19","TypeScript","Zustand","Vitest"],links:[["Voir le poste de pilotage",Bs]]},{id:"rapport-lundi",short:"Rapport IA",color:"#FFD84D",year:"2026",img:"media/rapport-lundi.webp",title:"Le rapport du lundi qui se vérifie tout seul",sub:"Des chiffres justes, un commentaire IA vérifié nombre par nombre",tags:["Python","pandas","API Claude","Power BI"],summary:"Chaque lundi matin, l'export des ventes devient un rapport prêt à lire : les erreurs du fichier sont trouvées et écartées, les chiffres clés calculés, et l'IA rédige le commentaire. Avant l'envoi, chaque nombre de ce commentaire est comparé aux calculs : un seul chiffre inventé, et le texte est rejeté. Démo réalisée pour une entreprise fictive, adaptable à tout service qui fait un point chiffré chaque semaine.",metrics:[["42 239 €","d'erreurs écartées en une semaine : le rapport aurait annoncé +47 % au lieu de −2,2 %"],["18/18","nombres du commentaire IA retrouvés dans les calculs, 0 inventé"],["9","erreurs du fichier trouvées et traitées, chaque décision notée"],["33","tests automatiques : si un seul échoue, rien ne part"]],built:["6 contrôles : doublons, champs vides, région retrouvée par le code postal, valeurs impossibles, montant différent de quantité × prix","L'erreur évitée chiffrée chaque semaine : le même calcul sur le fichier brut montre ce que les contrôles ont empêché","Claude reçoit seulement les chiffres calculés ; un nombre inconnu dans sa réponse et c'est un second essai, puis un texte de secours : le rapport part toujours","Rapport HTML lisible dans un e-mail, chaque nombre relié à son origine ; 4 fichiers propres pour Power BI","Lancé chaque lundi par GitHub Actions après les tests, construit en pilotant Claude Code"],stack:["Python","pandas","API Claude","pytest","GitHub Actions","Power BI"],links:[["Voir le code sur GitHub",up]]},{id:"sites",short:"Sites",color:"#5EC8FF",year:"2026",img:"media/aiguilleur-2.webp",title:"Sites et outils web",sub:"Vitrines, tableaux de bord, outils internes",tags:["three.js","GSAP","React","Vite"],summary:"Je crée aussi les sites : ce portfolio en three.js et GSAP, la vitrine de l'Aiguilleur, le poste de pilotage de JobHunter en React. La station « Sites » imagine l'étape suivante : une équipe d'agents qui construit le site, et une personne qui valide la mise en ligne. Cette partie-là est encore une vision.",metrics:[["3","sites en ligne présentés dans l'atelier"],["26 000","points de lumière dans le nuage de ce portfolio"],["React 19","pour le poste de pilotage de JobHunter"]],built:["Ce portfolio : un seul nuage de particules qui prend la forme de chaque étape, shaders écrits à la main","Mode calme, mouvement réduit, navigation au clavier, version téléphone","Vitrine de l'Aiguilleur et poste de pilotage JobHunter publiés sur GitHub Pages"],stack:["three.js","GSAP","Lenis","Vite","React","TypeScript","HTML","CSS"],links:[["Voir la vitrine de l'Aiguilleur",zs],["Voir le poste de pilotage",Bs]]},{id:"doublage",short:"Doublage",color:"#7CF5D0",year:"2026",img:"media/doublage.webp",title:"Agence IA de doublage vidéo",sub:"Multi-agent · voix clonée",tags:["n8n","API Claude","ElevenLabs","Telegram"],summary:"Une vidéo envoyée sur Telegram revient doublée dans une autre langue, avec la voix d'origine. Un agent directeur coordonne une équipe d'agents : traduction, voix, contrôle qualité.",metrics:[["4 min 40","pour doubler une vidéo réelle de 2 min 10"],["8/10","au contrôle qualité, voix jamais accélérée"],["32","workflows n8n décrits en JavaScript"],["102","tests automatisés"]],built:["Bot Telegram qui répond en 3,5 à 5,6 secondes","Voix clonée avec ElevenLabs, vidéos rangées dans Google Drive","Services simulés pour tout tester sans dépenser","Construit en 3 jours, en pilotant Claude Code"],stack:["n8n","API Claude","ElevenLabs","Telegram","Google Drive","Docker","Node.js"],links:[]},{id:"motion",short:"Pubs",color:"#FF6B6B",year:"2026",img:"media/dt-motion.webp",title:"Pubs et motion design",sub:"Pubs et films de marque animés en code",tags:["HyperFrames","GSAP","ElevenLabs","FFmpeg"],summary:"Des pubs et un film de marque animés en code : HTML et GSAP avec HyperFrames, voix off ElevenLabs, son mixé à −14 LUFS pour Instagram et TikTok.",metrics:[["3 min","film de marque pour DT Design"],["6","publicités verticales 9:16 (30 s et 15 s)"],["4","entreprises accompagnées"],["−14 LUFS","son prêt pour les réseaux"]],built:["Storyboard, voix off, détourage par IA, contrôle qualité","Tout est piloté avec Claude Code","Extraits dans l'atelier"],stack:["HyperFrames","GSAP","ElevenLabs","FFmpeg","Claude Code"],links:[["Voir les films dans l'atelier","#atelier"]]},{id:"vorchex",short:"VorcheX",color:"#35E08B",year:"2026",img:null,title:"Infrastructure VorcheX",sub:"Serveur d'automatisation auto-hébergé",tags:["VPS Ubuntu","Docker","Coolify","PostgreSQL"],summary:"Mon propre serveur d'automatisation : un n8n central et sa base PostgreSQL sur un VPS que j'administre, déployés avec Docker et Coolify, sous mon domaine. Ce portfolio y est aussi hébergé.",metrics:[["3","ports ouverts seulement : 22, 80, 443"],["HTTPS","sur chaque sous-domaine"],["1","n8n central pour toutes les agences"],["8 Go","de RAM, architecture pensée pour tenir dedans"]],built:["DNS en joker vers le VPS, certificats automatiques","Pare-feu, fail2ban, swap, mises à jour","Sauvegarde hebdomadaire du serveur"],stack:["Ubuntu","Docker","Coolify","PostgreSQL","DNS","HTTPS"],links:[]}],atelier:{sites:[{title:"Portfolio HORIZON",meta:"three.js · GSAP · ce site",url:cp,img:"media/og.jpg"},{title:"Aiguilleur — vitrine",meta:"HTML · CSS · GitHub Pages",url:zs,img:"media/aiguilleur-2.webp"},{title:"JobHunter — poste de pilotage",meta:"React 19 · TypeScript · Vitest",url:Bs,img:"media/jobhunter.webp"}]},motion:[{id:"dt-film",src:"media/dt-film-9x16.mp4",poster:"media/dt-film.webp",ratio:"9/16",title:"DT Design — « Promesses tenues »",meta:"Pub 9:16 · 30 s"},{id:"dt-motion",src:"media/dt-motion-16x9.mp4",poster:"media/dt-motion.webp",ratio:"16/9",title:"DT Design — film de marque",meta:"16:9 · extrait 22 s"},{id:"dt-logo",src:"media/dt-logo-9x16.mp4",poster:"media/dt-logo.webp",ratio:"9/16",title:"DT Design — logo animé",meta:"9:16 · 8 s"},{id:"rhonda",src:"media/rhonda-intro.mp4",poster:"media/rhonda.webp",ratio:"16/9",title:"Rhonda — intro du logo",meta:"16:9 · 15 s · film personnel"},{id:"rjp",src:"media/rjp-intro.mp4",poster:"media/rjp.webp",ratio:"16/9",title:"RJP — « Prêt à courir ? »",meta:"16:9 · 10 s · film personnel"}],tools:["n8n","API Claude","Agents IA","Retell AI","Twilio","ElevenLabs","PostgreSQL","Supabase","Docker","Coolify","JavaScript","TypeScript","React","three.js","GSAP","HyperFrames","FFmpeg","Python","Git"],path:[["2026 —","Bachelor informatique, 2e année","ESIIA, Torcy","En cours. 1re année de janvier à juillet 2026."],["2026 —","Fondateur, VorcheX","Projet entrepreneurial","Démonstrateurs d'automatisation IA pour les PME et l'infrastructure qui les héberge."],["2026 —","Équipier polyvalent","McDonald's Paris Louvre","Forte cadence, procédures strictes, travail en équipe — en parallèle des études."],["2025","Baccalauréat informatique","Lycée Bilingue de Tonga Rural, Cameroun",""],["2025","Équipier polyvalent","La Paillote, Douala","Septembre à décembre 2025."],["2024","Formation en développement web","INFOPRO, Douala","Formation en présentiel, de janvier à décembre 2024."]]},en:{meta:{title:"Johanne Pamegne — The future of your tasks, already built",description:"Portfolio of Johanne Rayane Nkeuchatchou Pamegne, automation and AI apprentice: a journey from today’s manual tasks to their automated future — AI agents, websites and ads. Open to a work-study position (alternance) in France."},ui:{"nav.horizon":"Journey","nav.agents":"Agents","nav.atelier":"Workshop","nav.path":"Path","nav.contact":"Contact","nav.menu":"Menu","nav.close":"Close",status:"Available — work-study or alternating internship","hero.fullname":"Johanne Rayane Nkeuchatchou Pamegne","hero.kicker":'<span class="u-accent">Automation &amp; AI</span> apprentice<br>Agents · websites · ads',"hero.lede":"The tasks you do by hand today already have an automated future. I build it, with one rule: a person approves every action that matters.","hero.scroll":"Scroll","hero.loc":"Saint-Denis · Paris region","hero.resume":"Continue","manifesto.label":"(01) Manifesto","manifesto.text":"Every repetitive task has a future. The phone no one can pick up, the Sunday-night quote, the invoice to chase: I hand them to agents. And I keep one rule: a person approves every action that matters.","manifesto.method":"Method: I steer AI (Claude Code) to write the code, then I test, measure costs and document.","trades.label":"Three crafts, one method","horizon.label":"(02) The journey","horizon.title":"Twelve tasks of today, <em>and their future.</em>","horizon.hint":"Scroll: each task done by hand switches to its automated future, which I have already started building.","horizon.note":"The status says where each project really stands.","horizon.open":"Open the project","horizon.today":"Today · by hand","horizon.future":"Tomorrow · automated","agents.label":"(03) Agent room","agents.title":"Three missions, <em>one person in charge.</em>","agents.intro":"Each shape is an agent. The fibres show who talks to whom, and the points of light, what passes between them. At the end of every mission, nothing goes out without a human: here, that’s you.","agents.play":"Play","agents.pause":"Pause","agents.skip":"Skip","agents.replay":"Replay","agents.scroll":"Scroll to move the mission forward","agents.log":"Log","atelier.label":"(04) Workshop","atelier.title":"What I have <em>built.</em>","atelier.intro":"Live websites, films and ads animated in code. The DT Design film is shown with the brand’s consent.","atelier.sites":"Live websites","atelier.films":"Films and ads","atelier.edition":"Editorial","atelier.visit":"Visit","motion.play":"Play with sound","mdm.title":"Brave New World","mdm.text":"An editorial presentation in 4 vertical pages: HTML and CSS layout, SVG diagrams generated in JavaScript, automatic PDF export. Made with Tissio Fumtul Donald.","path.label":"(05) Path","path.title":"Learn fast, <em>ship for real.</em>","path.tools":"Toolkit","contact.label":"(06) Epilogue","contact.title":"Which task do you never <em>want to do again?</em>","contact.ask":"Write it here. Your email app opens with the message ready: I’ll reply with how I would automate it, and who would stay in control.","contact.placeholder":"E.g. chasing quotes that never got an answer","contact.send":"Send it to me","contact.echo":"Looks like {p}: the Machine takes its shape.","contact.subject":"A task I never want to do again","contact.body":`Hello Johanne,

The task I never want to do again:
`,"contact.text":"I’m looking for a work-study position (alternance) or an alternating internship in automation and AI, in the Paris region or remote. I’m also open to web development. The company sets the school/work rhythm; available now.","contact.mail":"Send an email","contact.cv":"Download my CV","contact.copy":"Copy address","contact.copied":"Address copied","footer.credit":"Designed and built by Johanne.","footer.top":"Back to the start","footer.time":"Local time","footer.night":"night in Paris: the Machine runs slow","case.close":"Close","case.results":"Measured results","case.built":"What I built","case.stack":"Tools","case.next":"Next project","case.glass":"Drag to turn","quick.btn":"Recruiter in a hurry?","quick.btn.time":"30 s","quick.top":"The essentials in 30 s","loader.title":"Today’s tasks","loader.done":"handed to an agent","lang.switch":"Passer en français",skip:"Skip to content"},loader:["Pick up the phone","Call back missed calls","Price the quote","Chase the invoice","Sort the emails","Build the website","Launch the ad"],trades:[["Automate","AI agents and n8n workflows that pick up, price, sort and follow up.","#horizon"],["Build websites","Showcase sites, dashboards and internal tools, from plan to launch.","#atelier"],["Launch ads","Films and ads animated in code: script, voice-over, editing and sound.","#atelier"]],horizon:{horizon:"Horizon",autonomy:"Autonomy",today:"Today",repeat:"times by hand",station:"Station",level:"level",status:{service:"In service",prototype:"Prototype",vision:"Vision"},stations:{voice:{task:"Pick up the phone",today:"Mid-job, the phone rings. No one can answer: the customer calls someone else.",future:"A voice agent picks up, books or moves the appointment, and alerts the person in charge in an emergency."},sms:{task:"Call back missed calls",today:"In the evening, you scroll through missed calls and ring them back one by one, when you remember.",future:"Within a minute, a text replies, understands the request and offers three truly free slots."},devis:{task:"Price the quotes",today:"Sunday night, copying the price list into a spreadsheet, line after line.",future:"The request becomes a priced quote from the company’s own price list. The AI never sets a price: the person in charge approves."},invoice:{task:"Chase the invoices",today:"Find who hasn’t paid, write the reminder, send it… and forget the next one.",future:"Reminders and PDFs go out on their own, everything is logged, and nothing legal goes out without human approval."},doublons:{task:"Retype every customer",today:"The same customer, typed again into the CRM, the invoicing tool, the spreadsheet and the calendar. One typo, and there is a duplicate.",future:"Entered once, the customer is up to date everywhere in under a minute. A duplicate typed differently is blocked, with the reason why."},switch:{task:"Sort the emails",today:"The contact@ inbox overflows. Every email is read, forwarded, sometimes lost.",future:"Every email is categorised, summarised and handed to the right teammate, with a draft reply to approve."},radar:{task:"Search for job offers",today:"Open ten websites, copy, compare, then write every application by hand.",future:"Agents search, score and prepare each application; a reviewer checks everything before a person approves."},rapport:{task:"Prepare the Monday report",today:"Monday morning: clean the sales export, redo the calculations and write the weekly update.",future:"The report goes out on its own, file errors set aside. The AI writes the commentary, and every number is checked before it is sent."},site:{task:"Build a website",today:"Endless back-and-forth between a vague brief, a mockup and the code.",future:"A team of agents writes the plan, the brand guide and the code; a person approves the launch. This one is still a vision."},wave:{task:"Dub a video",today:"Translate, re-record, re-sync the voice… then start again for every language.",future:"A video sent on Telegram comes back dubbed in another language, in the original voice."},film:{task:"Edit an ad",today:"Script, voice, editing, sound: every format redone by hand.",future:"Script, voice-over, animation and sound are produced in code; every version is checked before release."},server:{task:"Hold it all together",today:"Scattered tools, logins everywhere, and no one really knows what is running.",future:"A server I administer runs the agent teams. At the centre, a person stays in control."}}},agents:{gate:"Approve",gateWait:"Waiting for your approval",done:"Mission complete",kinds:{ring:"listens",probe:"searches",prism:"analyses",quill:"writes",lens:"checks",compass:"sets direction",planes:"structures",blades:"assembles",fork:"gives voice",ribbon:"styles",human:"decides"},missions:{jobhunter:{tab:"JobHunter",title:"Find a work-study position",status:"Prototype",note:"Replay of a real test: the figures are measured, the company names are fictitious.",agents:["Searcher","Scorer","Investigator","Writer","Reviewer","You"],say:["I’m not an AI: I query the La bonne alternance API.","I score each offer against the profile.","I find who to write to.","I draft the application.","I check everything. Without a passed review, the database refuses the email.","Your call."],log:["74 offers received · 68 new after duplicates","34 offers shortlisted out of 68","contact found: hiring team, Atelier Nova (fictitious)","application ready · $0.07 per card","review passed · $0.001 · 13/13 checked correctly in the test","approved by you · Gmail isn’t connected yet: sending stays manual"]},site:{tab:"Build a site",title:"Build a showcase website",status:"Vision",note:"Demo, fictitious data.",agents:["Brief","Architect","Designer","Developer","Tester","You"],say:["A ceramicist wants a showcase and online booking.","Four pages: home, work, studio, contact.","Colours and fonts taken from her logo.","I write the code, phone version included.","I test keyboard, contrast and phone.","Your call on the launch."],log:["brief understood · Atelier Lune, ceramicist (fictitious)","plan: 4 pages","brand guide: 2 colours, 2 fonts","code generated · mobile included","checks passed: keyboard, contrast, phone","launch approved by you"]},pub:{tab:"Launch an ad",title:"Launch a vertical ad",status:"Prototype",note:"Demo, fictitious data. The method is the one behind my real ads.",agents:["Strategist","Scriptwriter","Voice","Editor","QC","You"],say:["Audience: the neighbourhood. One single message.","A 30 s script, and its 15 s cut.","The voice-over is recorded.","Animated in code, captions in place.","Sound at −14 LUFS, 9:16: ready for social media.","Your call on the release."],log:["audience and message set · Boulangerie du Canal (fictitious)","script 30 s + 15 s cut","ElevenLabs voice-over generated","HyperFrames edit · captions","QC: −14 LUFS, 9:16","release approved by you"]}}},quick:{label:"The essentials in 30 seconds",title:"Johanne Pamegne, <em>Automation &amp; AI apprentice.</em>",lede:"I build the automated future of repetitive tasks: AI agents and n8n workflows, websites, ads animated in code. Every figure below was measured on a real project.",proofs:[["< 1 min","from request to priced quote, with no price ever invented","AI quotes and follow-up · n8n + Claude","devis"],["69","automated tests, 48 n8n nodes generated from code","AI text-message front desk · n8n + Twilio","accueil-sms"],["100%","precision on 10,000 records: no real customer wrongly blocked","No more double entry · n8n + HubSpot","doublons"],["$0.07","measured cost per application","JobHunter · multi-agent + Supabase","jobhunter"]],facts:[["Looking for","A work-study position (alternance) in automation and AI, or in web development"],["Availability","Right now"],["Rhythm","The company decides"],["Location","Paris region or remote"],["Education","Bachelor in computer science, year 2 — ESIIA, Torcy"]],stack:["n8n","Python","Claude API","AI agents","REST APIs","Retell AI","Twilio","Docker","PostgreSQL","Supabase","React","three.js","GSAP"],cv:"Download my CV",mail:"Send an email",more:"See the whole journey",see:"See the project"},projects:[{id:"standardiste",short:"Receptionist",color:"#C49BFF",year:"2026",img:"media/standardiste.webp",title:"AI voice receptionist",sub:"An assistant that answers when no one can",tags:["Retell AI","n8n","Claude API","ElevenLabs"],summary:"“Lucie” answers the phone when the team is busy. She books, moves and cancels appointments, spots emergencies and alerts the person in charge. Demo built for a plumber, configurable for any business that runs on appointments.",metrics:[["60","n8n nodes generated from code"],["65","automated tests passing"],["6","functions the agent calls mid-call"],["30 d","recording retention (GDPR)"]],built:["Retell AI voice agent, ElevenLabs voice, prompt and 6 functions","Every action double-checked before touching the calendar","Emergency: instant alert to the person in charge, then call transfer","Evening summary, automatic deletion of old data","Tested with real calls, built by steering Claude Code"],stack:["Retell AI","n8n","Claude API","ElevenLabs","ntfy","Coolify","Node.js"],links:[["See the code on GitHub",op]]},{id:"accueil-sms",short:"SMS desk",color:"#FF7AD9",year:"2026",img:"media/accueil-sms.webp",title:"AI text-message front desk",sub:"No more lost customers, no more forgotten appointments",tags:["n8n","Claude API","Twilio","SMS"],summary:"When no one can pick up, the caller gets a text within a minute. The AI understands the request, offers three truly free slots and books one, then sends reminders, handles cancellations and the waiting list. No app to install: a plain text is enough.",metrics:[["3","truly free slots offered by text"],["48","n8n nodes generated from code"],["69","automated tests passing"],["2","reminders before each appointment, one-word replies"]],built:["Missed call: welcome text within a minute, alert on the manager’s phone","Claude understands free-form messages; fallback rules take over if the AI does not answer","Reminders the evening before (6 pm) and 3 hours before: the customer replies yes, move or cancel","Freed slot offered to the waiting list: the first yes wins","Two-phone demo, tested end to end with a real call, built by steering Claude Code"],stack:["n8n","Claude API","Twilio","ntfy","Node.js","Coolify"],links:[["See the code on GitHub",ap]]},{id:"devis",short:"AI quotes",color:"#D2F65A",year:"2026",img:"media/devis.webp",title:"AI quotes and automatic follow-up",sub:"Every request priced, every quote followed up",tags:["n8n","Claude API","Quotes","Follow-ups"],summary:"A request written in a few lines becomes a priced quote in under a minute, built from the company’s own price list: the AI never sets a price. The person in charge approves it in one tap, the customer accepts online, and if there is no answer, personalised follow-ups go out on their own. Demo built for a fictitious renovation company, configurable for any business that runs on quotes.",metrics:[["< 1 min","from request to priced draft quote"],["0","prices set by the AI: every amount comes from the price list"],["3","tailored follow-ups, stopped as soon as the customer replies"],["41","automated tests passing, 44 n8n nodes"]],built:["Claude spots the work items and quantities; code calculates every amount, VAT, deposit and margin","Checks before sending: forgotten items, duplicates, unusual quantities; an item missing from the price list blocks sending","Alert on the phone of the person in charge: nothing goes out without their approval","Online quote: the customer accepts, asks a question or declines; the AI reads the reply and advises the person in charge","Tested end to end with the real Claude API, built by steering Claude Code"],stack:["n8n","Claude API","ntfy","Node.js","Coolify"],links:[["See the code on GitHub",lp]]},{id:"encaisse",short:"Encaisse",color:"#FFB347",year:"2026",img:null,title:"Encaisse",sub:"Construction invoice collection — in progress",tags:["n8n","PostgreSQL","Gotenberg"],summary:"Automated invoice collection for construction companies: reminders, PDFs, sending. Everything is logged, and no legal action goes out without human approval.",metrics:[["3/3","SQL test files passing"],["13","design rules written before the code"],["PDF","generated automatically by Gotenberg"],["0","real sends while test mode is on"]],built:["PostgreSQL 16, Gotenberg 8, Mailpit for development","Amounts stored as integer cents, settings in the database","Every send checked, every action logged"],stack:["n8n","PostgreSQL","Gotenberg","Docker"],links:[]},{id:"doublons",short:"No duplicates",color:"#5CF6FF",year:"2026",img:"media/doublons.webp",title:"A customer entered once, up to date everywhere",sub:"CRM, invoicing, spreadsheet and calendar in sync, duplicates blocked",tags:["n8n","REST APIs","HubSpot","Zoho Invoice"],summary:"In many companies, a new customer is typed in three or four times: CRM, invoicing, tracking spreadsheet, calendar. Here, they are entered once in HubSpot; within a minute, they appear in Zoho Invoice, in a Google Sheet and in Google Calendar, with their first appointment booked in a free slot. If a colleague enters them again in a different way, the duplicate is blocked and the reason is explained in plain words. Demo built with fictitious customers on real accounts, adaptable to any business that manages customers.",metrics:[["100%","precision: no real customer blocked by mistake"],["99.6%","of duplicates blocked outright, 100% with the human check"],["10,000","unseen test records, including 800 hidden duplicates"],["< 1 min","from entry in HubSpot to the copy in all 3 tools"]],built:["Records cleaned before comparison: phone in international format, name without legal form or accents, normalised email","Explainable similarity score (phone, email, verified SIRET, fuzzy name, address): every blocked duplicate says why","One action per customer: create, update, block or do nothing; a fingerprint prevents any double copy","Reliable when a tool goes down: 3 retries, a clear alert on the phone, and every night the 4 tools compared field by field","A real HubSpot quirk caught during live tests, fixed and added to the automated tests"],stack:["n8n","HubSpot","Zoho Invoice","Google Sheets","Google Calendar","JavaScript"],links:[["See the code on GitHub",hp]]},{id:"aiguilleur",short:"Aiguilleur",color:"#FFC46B",year:"2026",img:"media/aiguilleur.webp",title:"Aiguilleur IA",sub:"Automatic customer email triage",tags:["n8n","Claude API","Gmail","Google Sheets"],summary:"It checks a company’s contact@ inbox every 15 seconds. One single Claude call categorises the email, rates urgency, summarises, drafts a reply and hands it to the right teammate.",metrics:[["32/32","test emails routed correctly"],["1.5 ¢","per analysed email"],["15 s","between two inbox checks"],["85 %","minimum confidence, otherwise a person decides"]],built:["Checks the inbox every 15 s, PDF and photo attachments included","A clear brief for the right teammate: summary, action, suggested reply","Automatic replies saved as drafts to approve by default","Adaptable per trade: property management, retail"],stack:["n8n","Claude API","Gmail","Google Sheets","Telegram","Docker"],links:[["See the presentation",zs]]},{id:"jobhunter",short:"JobHunter",color:"#35E08B",year:"2026",img:"media/jobhunter.webp",title:"JobHunter",sub:"Multi-agent work-study job search",tags:["n8n","Supabase","Claude API","React"],summary:"Agents find job offers, score them, look up the right contact and draft each application. A reviewer agent checks everything: the database refuses any email without a passed review. Sending through Gmail isn’t connected yet.",metrics:[["74 → 34","offers received then shortlisted, real-world test"],["13/13","applications reviewed correctly"],["$0.07","measured cost per application"],["68","new offers once duplicates are removed"]],built:["Search through the La bonne alternance API, then scoring by Claude","13 workflows generated from code and deployed by script","Supabase database: 21 tables secured with RLS","React 19 + TypeScript control room, tested with Vitest","Cost of every AI call recorded"],stack:["n8n","Supabase","Claude API","Telegram","React 19","TypeScript","Zustand","Vitest"],links:[["Open the control room",Bs]]},{id:"rapport-lundi",short:"AI report",color:"#FFD84D",year:"2026",img:"media/rapport-lundi.webp",title:"The Monday report that checks itself",sub:"Accurate figures, an AI commentary checked number by number",tags:["Python","pandas","Claude API","Power BI"],summary:"Every Monday morning, the sales export becomes a ready-to-read report: errors in the file are found and set aside, key figures are calculated, and the AI writes the commentary. Before it goes out, every number in that commentary is checked against the calculations: one invented figure and the text is rejected. Demo built for a fictitious company, adaptable to any team that reviews its figures every week.",metrics:[["€42,239","of errors set aside in one week: the report would have shown +47% instead of −2.2%"],["18/18","numbers in the AI commentary found in the calculations, 0 invented"],["9","file errors found and handled, every decision logged"],["33","automated tests: if a single one fails, nothing is sent"]],built:["6 checks: duplicates, empty fields, region recovered from the postcode, impossible values, amount different from quantity × price","The avoided error, measured every week: the same calculation on the raw file shows what the checks prevented","Claude only receives the calculated figures; an unknown number in its reply means a second try, then a fallback text: the report always goes out","HTML report readable in an email, every number linked to its source; 4 clean files for Power BI","Run every Monday by GitHub Actions after the tests, built by steering Claude Code"],stack:["Python","pandas","Claude API","pytest","GitHub Actions","Power BI"],links:[["See the code on GitHub",up]]},{id:"sites",short:"Websites",color:"#5EC8FF",year:"2026",img:"media/aiguilleur-2.webp",title:"Websites and web tools",sub:"Showcase sites, dashboards, internal tools",tags:["three.js","GSAP","React","Vite"],summary:"I build websites too: this portfolio in three.js and GSAP, the Aiguilleur showcase, the JobHunter control room in React. The Websites station imagines the next step: a team of agents building the site, and a person approving the launch. That part is still a vision.",metrics:[["3","live websites shown in the workshop"],["26,000","points of light in this portfolio’s cloud"],["React 19","for the JobHunter control room"]],built:["This portfolio: a single particle cloud that takes the shape of each step, hand-written shaders","Calm mode, reduced motion, keyboard navigation, phone version","Aiguilleur showcase and JobHunter control room published on GitHub Pages"],stack:["three.js","GSAP","Lenis","Vite","React","TypeScript","HTML","CSS"],links:[["See the Aiguilleur showcase",zs],["Open the control room",Bs]]},{id:"doublage",short:"Dubbing",color:"#7CF5D0",year:"2026",img:"media/doublage.webp",title:"AI video dubbing agency",sub:"Multi-agent · cloned voice",tags:["n8n","Claude API","ElevenLabs","Telegram"],summary:"Send a video on Telegram and it comes back dubbed in another language, in the original voice. A director agent coordinates a team of agents: translation, voice, quality control.",metrics:[["4 min 40","to dub a real 2 min 10 video"],["8/10","quality score, voice never sped up"],["32","n8n workflows defined in JavaScript"],["102","automated tests"]],built:["Telegram bot answering in 3.5 to 5.6 seconds","Voice cloned with ElevenLabs, videos filed in Google Drive","Mocked services to test everything at no cost","Built in 3 days by steering Claude Code"],stack:["n8n","Claude API","ElevenLabs","Telegram","Google Drive","Docker","Node.js"],links:[]},{id:"motion",short:"Ads",color:"#FF6B6B",year:"2026",img:"media/dt-motion.webp",title:"Ads and motion design",sub:"Ads and brand films animated in code",tags:["HyperFrames","GSAP","ElevenLabs","FFmpeg"],summary:"Ads and a brand film animated in code: HTML and GSAP with HyperFrames, ElevenLabs voice-over, sound mixed at −14 LUFS for Instagram and TikTok.",metrics:[["3 min","brand film for DT Design"],["6","vertical 9:16 ads (30 s and 15 s)"],["4","companies"],["−14 LUFS","sound ready for social media"]],built:["Storyboard, voice-over, AI cut-outs, quality control","All steered with Claude Code","Excerpts in the workshop"],stack:["HyperFrames","GSAP","ElevenLabs","FFmpeg","Claude Code"],links:[["See the films in the workshop","#atelier"]]},{id:"vorchex",short:"VorcheX",color:"#35E08B",year:"2026",img:null,title:"VorcheX infrastructure",sub:"Self-hosted automation server",tags:["Ubuntu VPS","Docker","Coolify","PostgreSQL"],summary:"My own automation server: a central n8n and its PostgreSQL database on a VPS I administer, deployed with Docker and Coolify, under my own domain. This portfolio is hosted there too.",metrics:[["3","open ports only: 22, 80, 443"],["HTTPS","on every subdomain"],["1","central n8n for every agency"],["8 GB","of RAM, architecture designed to fit"]],built:["Wildcard DNS to the VPS, automatic certificates","Firewall, fail2ban, swap, updates","Weekly server backup"],stack:["Ubuntu","Docker","Coolify","PostgreSQL","DNS","HTTPS"],links:[]}],atelier:{sites:[{title:"HORIZON portfolio",meta:"three.js · GSAP · this site",url:cp,img:"media/og.jpg"},{title:"Aiguilleur — showcase",meta:"HTML · CSS · GitHub Pages",url:zs,img:"media/aiguilleur-2.webp"},{title:"JobHunter — control room",meta:"React 19 · TypeScript · Vitest",url:Bs,img:"media/jobhunter.webp"}]},motion:[{id:"dt-film",src:"media/dt-film-9x16.mp4",poster:"media/dt-film.webp",ratio:"9/16",title:"DT Design — “Promises kept”",meta:"9:16 ad · 30 s"},{id:"dt-motion",src:"media/dt-motion-16x9.mp4",poster:"media/dt-motion.webp",ratio:"16/9",title:"DT Design — brand film",meta:"16:9 · 22 s excerpt"},{id:"dt-logo",src:"media/dt-logo-9x16.mp4",poster:"media/dt-logo.webp",ratio:"9/16",title:"DT Design — animated logo",meta:"9:16 · 8 s"},{id:"rhonda",src:"media/rhonda-intro.mp4",poster:"media/rhonda.webp",ratio:"16/9",title:"Rhonda — logo intro",meta:"16:9 · 15 s · personal film"},{id:"rjp",src:"media/rjp-intro.mp4",poster:"media/rjp.webp",ratio:"16/9",title:"RJP — “Ready to race?”",meta:"16:9 · 10 s · personal film"}],tools:["n8n","Claude API","AI agents","Retell AI","Twilio","ElevenLabs","PostgreSQL","Supabase","Docker","Coolify","JavaScript","TypeScript","React","three.js","GSAP","HyperFrames","FFmpeg","Python","Git"],path:[["2026 —","Bachelor in computer science, year 2","ESIIA, Torcy","Ongoing. Year 1 from January to July 2026."],["2026 —","Founder, VorcheX","Entrepreneurial project","AI automation demos for small businesses and the infrastructure that hosts them."],["2026 —","Crew member","McDonald's Paris Louvre","High pace, strict procedures, teamwork — alongside my studies."],["2025","Baccalauréat, computer science","Lycée Bilingue de Tonga Rural, Cameroon",""],["2025","Crew member","La Paillote, Douala","September to December 2025."],["2024","Web development training","INFOPRO, Douala","In-person training, January to December 2024."]]}},gs={email:"johannepamegne@gmail.com",phone:"07 49 16 37 92",phoneIntl:"+33749163792",github:"https://github.com/Johnnyrayane237",cv:"media/CV_Johanne-Rayane_NKEUCHATCHOU-PAMEGNE.pdf"};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qd="176",Px=0,fp=1,Lx=2,wg=1,Dx=2,or=3,Yr=0,Zn=1,ur=2,Wr=0,vo=1,co=2,pp=3,mp=4,Ix=5,ds=100,Fx=101,Ux=102,Nx=103,Ox=104,kx=200,Bx=201,zx=202,Hx=203,Ph=204,Lh=205,Vx=206,Gx=207,Wx=208,qx=209,Xx=210,jx=211,$x=212,Yx=213,Jx=214,Dh=0,Ih=1,Fh=2,Po=3,Uh=4,Nh=5,Oh=6,kh=7,Eg=0,Kx=1,Zx=2,qr=0,Qx=1,ey=2,ty=3,ny=4,iy=5,ry=6,sy=7,gp="attached",oy="detached",Ag=300,Lo=301,Do=302,Bh=303,zh=304,$c=306,Hh=1e3,_s=1001,Vh=1002,pi=1003,ay=1004,gl=1005,$i=1006,_u=1007,vs=1008,Ki=1009,Cg=1010,Rg=1011,qa=1012,ef=1013,Ls=1014,ki=1015,Za=1016,tf=1017,nf=1018,Xa=1020,Pg=35902,Lg=1021,Dg=1022,Ci=1023,ja=1026,$a=1027,rf=1028,sf=1029,Ig=1030,of=1031,af=1033,oc=33776,ac=33777,lc=33778,cc=33779,Gh=35840,Wh=35841,qh=35842,Xh=35843,jh=36196,$h=37492,Yh=37496,Jh=37808,Kh=37809,Zh=37810,Qh=37811,ed=37812,td=37813,nd=37814,id=37815,rd=37816,sd=37817,od=37818,ad=37819,ld=37820,cd=37821,uc=36492,ud=36494,hd=36495,Fg=36283,dd=36284,fd=36285,pd=36286,Rc=2300,md=2301,vu=2302,_p=2400,vp=2401,xp=2402,ly=2500,sA=0,oA=1,aA=2,cy=3200,uy=3201,Ug=0,hy=1,Ir="",Si="srgb",Io="srgb-linear",Pc="linear",Pt="srgb",Hs=7680,yp=519,dy=512,fy=513,py=514,Ng=515,my=516,gy=517,_y=518,vy=519,gd=35044,bp="300 es",dr=2e3,Lc=2001;class ko{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sp=1234567;const Ca=Math.PI/180,Fo=180/Math.PI;function Bi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function ut(r,e,t){return Math.max(e,Math.min(t,r))}function lf(r,e){return(r%e+e)%e}function xy(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function yy(r,e,t){return r!==e?(t-r)/(e-r):0}function Ra(r,e,t){return(1-t)*r+t*e}function by(r,e,t,n){return Ra(r,e,1-Math.exp(-t*n))}function Sy(r,e=1){return e-Math.abs(lf(r,e*2)-e)}function My(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Ty(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function wy(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ey(r,e){return r+Math.random()*(e-r)}function Ay(r){return r*(.5-Math.random())}function Cy(r){r!==void 0&&(Sp=r);let e=Sp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ry(r){return r*Ca}function Py(r){return r*Fo}function Ly(r){return(r&r-1)===0&&r!==0}function Dy(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Iy(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Fy(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ni(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ct(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const lA={DEG2RAD:Ca,RAD2DEG:Fo,generateUUID:Bi,clamp:ut,euclideanModulo:lf,mapLinear:xy,inverseLerp:yy,lerp:Ra,damp:by,pingpong:Sy,smoothstep:My,smootherstep:Ty,randInt:wy,randFloat:Ey,randFloatSpread:Ay,seededRandom:Cy,degToRad:Ry,radToDeg:Py,isPowerOfTwo:Ly,ceilPowerOfTwo:Dy,floorPowerOfTwo:Iy,setQuaternionFromProperEuler:Fy,normalize:Ct,denormalize:Ni};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,n,i,s,o,a,l,c){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],x=i[1],y=i[4],v=i[7],M=i[2],b=i[5],S=i[8];return s[0]=o*_+a*x+l*M,s[3]=o*g+a*y+l*b,s[6]=o*p+a*v+l*S,s[1]=c*_+u*x+h*M,s[4]=c*g+u*y+h*b,s[7]=c*p+u*v+h*S,s[2]=d*_+f*x+m*M,s[5]=d*g+f*y+m*b,s[8]=d*p+f*v+m*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,m=t*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xu.makeScale(e,t)),this}rotate(e){return this.premultiply(xu.makeRotation(-e)),this}translate(e,t){return this.premultiply(xu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xu=new ot;function Og(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ya(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Uy(){const r=Ya("canvas");return r.style.display="block",r}const Mp={};function hc(r){r in Mp||(Mp[r]=!0,console.warn(r))}function Ny(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Oy(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ky(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Tp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function By(){const r={enabled:!0,workingColorSpace:Io,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Pt&&(i.r=mr(i.r),i.g=mr(i.g),i.b=mr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Pt&&(i.r=xo(i.r),i.g=xo(i.g),i.b=xo(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ir?Pc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Io]:{primaries:e,whitePoint:n,transfer:Pc,toXYZ:Tp,fromXYZ:wp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:e,whitePoint:n,transfer:Pt,toXYZ:Tp,fromXYZ:wp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const St=By();function mr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function xo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Vs;class zy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vs===void 0&&(Vs=Ya("canvas")),Vs.width=e.width,Vs.height=e.height;const i=Vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ya("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=mr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mr(t[n]/255)*255):t[n]=mr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hy=0;class cf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Bi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(yu(i[o].image)):s.push(yu(i[o]))}else s=yu(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function yu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?zy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vy=0;class Dn extends ko{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,n=_s,i=_s,s=$i,o=vs,a=Ci,l=Ki,c=Dn.DEFAULT_ANISOTROPY,u=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Bi(),this.name="",this.source=new cf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ag)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hh:e.x=e.x-Math.floor(e.x);break;case _s:e.x=e.x<0?0:1;break;case Vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hh:e.y=e.y-Math.floor(e.y);break;case _s:e.y=e.y<0?0:1;break;case Vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Ag;Dn.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,i=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(f+1)/2,M=(p+1)/2,b=(u+d)/4,S=(h+_)/4,C=(m+g)/4;return y>v&&y>M?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=b/n,s=S/n):v>M?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=b/i,s=C/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=S/s,i=C/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gy extends ko{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const i={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const s=new Dn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new cf(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ds extends Gy{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class kg extends Dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pi,this.minFilter=pi,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wy extends Dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pi,this.minFilter=pi,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==m){let g=1-a;const p=l*d+c*f+u*m+h*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const M=Math.sqrt(y),b=Math.atan2(M,p*x);g=Math.sin(g*b)/M,a=Math.sin(a*b)/M}const v=a*x;if(l=l*g+d*v,c=c*g+f*v,u=u*g+m*v,h=h*g+_*v,g===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+u*h+l*f-c*d,e[t+1]=l*m+u*d+c*h-a*f,e[t+2]=c*m+u*f+a*d-l*h,e[t+3]=u*m-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ep.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ep.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bu.copy(this).projectOnVector(e),this.sub(bu)}reflect(e){return this.sub(bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bu=new B,Ep=new Bo;class Kr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Di):Di.fromBufferAttribute(s,o),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_l.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_l.copy(n.boundingBox)),_l.applyMatrix4(e.matrixWorld),this.union(_l)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),vl.subVectors(this.max,Jo),Gs.subVectors(e.a,Jo),Ws.subVectors(e.b,Jo),qs.subVectors(e.c,Jo),Mr.subVectors(Ws,Gs),Tr.subVectors(qs,Ws),ts.subVectors(Gs,qs);let t=[0,-Mr.z,Mr.y,0,-Tr.z,Tr.y,0,-ts.z,ts.y,Mr.z,0,-Mr.x,Tr.z,0,-Tr.x,ts.z,0,-ts.x,-Mr.y,Mr.x,0,-Tr.y,Tr.x,0,-ts.y,ts.x,0];return!Su(t,Gs,Ws,qs,vl)||(t=[1,0,0,0,1,0,0,0,1],!Su(t,Gs,Ws,qs,vl))?!1:(xl.crossVectors(Mr,Tr),t=[xl.x,xl.y,xl.z],Su(t,Gs,Ws,qs,vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qi=[new B,new B,new B,new B,new B,new B,new B,new B],Di=new B,_l=new Kr,Gs=new B,Ws=new B,qs=new B,Mr=new B,Tr=new B,ts=new B,Jo=new B,vl=new B,xl=new B,ns=new B;function Su(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ns.fromArray(r,s);const a=i.x*Math.abs(ns.x)+i.y*Math.abs(ns.y)+i.z*Math.abs(ns.z),l=e.dot(ns),c=t.dot(ns),u=n.dot(ns);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const qy=new Kr,Ko=new B,Mu=new B;class yr{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qy.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);const t=Ko.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ko,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(Mu)),this.expandByPoint(Ko.copy(e.center).sub(Mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const er=new B,Tu=new B,yl=new B,wr=new B,wu=new B,bl=new B,Eu=new B;class Yc{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(er.copy(this.origin).addScaledVector(this.direction,t),er.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Tu.copy(e).add(t).multiplyScalar(.5),yl.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(Tu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(yl),a=wr.dot(this.direction),l=-wr.dot(yl),c=wr.lengthSq(),u=Math.abs(1-o*o);let h,d,f,m;if(u>0)if(h=o*l-a,d=o*a-l,m=s*u,h>=0)if(d>=-m)if(d<=m){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Tu).addScaledVector(yl,d),f}intersectSphere(e,t){er.subVectors(e.center,this.origin);const n=er.dot(this.direction),i=er.dot(er)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,er)!==null}intersectTriangle(e,t,n,i,s){wu.subVectors(t,e),bl.subVectors(n,e),Eu.crossVectors(wu,bl);let o=this.direction.dot(Eu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wr.subVectors(this.origin,e);const l=a*this.direction.dot(bl.crossVectors(wr,bl));if(l<0)return null;const c=a*this.direction.dot(wu.cross(wr));if(c<0||l+c>o)return null;const u=-a*wr.dot(Eu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,m,_,g){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,f,m,_,g)}set(e,t,n,i,s,o,a,l,c,u,h,d,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Xs.setFromMatrixColumn(e,0).length(),s=1/Xs.setFromMatrixColumn(e,1).length(),o=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,m=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+m*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,m=c*u,_=c*h;t[0]=d+_*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,m=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,m=a*u,_=a*h;t[0]=l*u,t[4]=m*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+m,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xy,e,jy)}lookAt(e,t,n){const i=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Er.crossVectors(n,ti),Er.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Er.crossVectors(n,ti)),Er.normalize(),Sl.crossVectors(ti,Er),i[0]=Er.x,i[4]=Sl.x,i[8]=ti.x,i[1]=Er.y,i[5]=Sl.y,i[9]=ti.y,i[2]=Er.z,i[6]=Sl.z,i[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],y=n[7],v=n[11],M=n[15],b=i[0],S=i[4],C=i[8],w=i[12],T=i[1],P=i[5],F=i[9],k=i[13],N=i[2],z=i[6],G=i[10],$=i[14],H=i[3],ne=i[7],I=i[11],re=i[15];return s[0]=o*b+a*T+l*N+c*H,s[4]=o*S+a*P+l*z+c*ne,s[8]=o*C+a*F+l*G+c*I,s[12]=o*w+a*k+l*$+c*re,s[1]=u*b+h*T+d*N+f*H,s[5]=u*S+h*P+d*z+f*ne,s[9]=u*C+h*F+d*G+f*I,s[13]=u*w+h*k+d*$+f*re,s[2]=m*b+_*T+g*N+p*H,s[6]=m*S+_*P+g*z+p*ne,s[10]=m*C+_*F+g*G+p*I,s[14]=m*w+_*k+g*$+p*re,s[3]=x*b+y*T+v*N+M*H,s[7]=x*S+y*P+v*z+M*ne,s[11]=x*C+y*F+v*G+M*I,s[15]=x*w+y*k+v*$+M*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+g*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],x=h*g*c-_*d*c+_*l*f-a*g*f-h*l*p+a*d*p,y=m*d*c-u*g*c-m*l*f+o*g*f+u*l*p-o*d*p,v=u*_*c-m*h*c+m*a*f-o*_*f-u*a*p+o*h*p,M=m*h*l-u*_*l-m*a*d+o*_*d+u*a*g-o*h*g,b=t*x+n*y+i*v+s*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/b;return e[0]=x*S,e[1]=(_*d*s-h*g*s-_*i*f+n*g*f+h*i*p-n*d*p)*S,e[2]=(a*g*s-_*l*s+_*i*c-n*g*c-a*i*p+n*l*p)*S,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*S,e[4]=y*S,e[5]=(u*g*s-m*d*s+m*i*f-t*g*f-u*i*p+t*d*p)*S,e[6]=(m*l*s-o*g*s-m*i*c+t*g*c+o*i*p-t*l*p)*S,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*S,e[8]=v*S,e[9]=(m*h*s-u*_*s-m*n*f+t*_*f+u*n*p-t*h*p)*S,e[10]=(o*_*s-m*a*s+m*n*c-t*_*c-o*n*p+t*a*p)*S,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*S,e[12]=M*S,e[13]=(u*_*i-m*h*i+m*n*d-t*_*d-u*n*g+t*h*g)*S,e[14]=(m*a*i-o*_*i-m*n*l+t*_*l+o*n*g-t*a*g)*S,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,m=s*h,_=o*u,g=o*h,p=a*h,x=l*c,y=l*u,v=l*h,M=n.x,b=n.y,S=n.z;return i[0]=(1-(_+p))*M,i[1]=(f+v)*M,i[2]=(m-y)*M,i[3]=0,i[4]=(f-v)*b,i[5]=(1-(d+p))*b,i[6]=(g+x)*b,i[7]=0,i[8]=(m+y)*S,i[9]=(g-x)*S,i[10]=(1-(d+_))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Xs.set(i[0],i[1],i[2]).length();const o=Xs.set(i[4],i[5],i[6]).length(),a=Xs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ii.copy(this);const c=1/s,u=1/o,h=1/a;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=u,Ii.elements[5]*=u,Ii.elements[6]*=u,Ii.elements[8]*=h,Ii.elements[9]*=h,Ii.elements[10]*=h,t.setFromRotationMatrix(Ii),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=dr){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,m;if(a===dr)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Lc)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=dr){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),d=(t+e)*c,f=(n+i)*u;let m,_;if(a===dr)m=(o+s)*h,_=-2*h;else if(a===Lc)m=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xs=new B,Ii=new pt,Xy=new B(0,0,0),jy=new B(1,1,1),Er=new B,Sl=new B,ti=new B,Ap=new pt,Cp=new Bo;class Zi{constructor(e=0,t=0,n=0,i=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ap.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ap,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cp.setFromEuler(this),this.setFromQuaternion(Cp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class Bg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $y=0;const Rp=new B,js=new Bo,tr=new pt,Ml=new B,Zo=new B,Yy=new B,Jy=new Bo,Pp=new B(1,0,0),Lp=new B(0,1,0),Dp=new B(0,0,1),Ip={type:"added"},Ky={type:"removed"},$s={type:"childadded",child:null},Au={type:"childremoved",child:null};class nn extends ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new B,t=new Zi,n=new Bo,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pt},normalMatrix:{value:new ot}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(Pp,e)}rotateY(e){return this.rotateOnAxis(Lp,e)}rotateZ(e){return this.rotateOnAxis(Dp,e)}translateOnAxis(e,t){return Rp.copy(e).applyQuaternion(this.quaternion),this.position.add(Rp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pp,e)}translateY(e){return this.translateOnAxis(Lp,e)}translateZ(e){return this.translateOnAxis(Dp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ml.copy(e):Ml.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(Zo,Ml,this.up):tr.lookAt(Ml,Zo,this.up),this.quaternion.setFromRotationMatrix(tr),i&&(tr.extractRotation(i.matrixWorld),js.setFromRotationMatrix(tr),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ip),$s.child=e,this.dispatchEvent($s),$s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ky),Au.child=e,this.dispatchEvent(Au),Au.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ip),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,Yy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,Jy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}nn.DEFAULT_UP=new B(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new B,nr=new B,Cu=new B,ir=new B,Ys=new B,Js=new B,Fp=new B,Ru=new B,Pu=new B,Lu=new B,Du=new Mt,Iu=new Mt,Fu=new Mt;class Oi{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Fi.subVectors(e,t),i.cross(Fi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Fi.subVectors(i,t),nr.subVectors(n,t),Cu.subVectors(e,t);const o=Fi.dot(Fi),a=Fi.dot(nr),l=Fi.dot(Cu),c=nr.dot(nr),u=nr.dot(Cu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,m=(o*u-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,ir)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ir.x),l.addScaledVector(o,ir.y),l.addScaledVector(a,ir.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Du.setScalar(0),Iu.setScalar(0),Fu.setScalar(0),Du.fromBufferAttribute(e,t),Iu.fromBufferAttribute(e,n),Fu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Du,s.x),o.addScaledVector(Iu,s.y),o.addScaledVector(Fu,s.z),o}static isFrontFacing(e,t,n,i){return Fi.subVectors(n,t),nr.subVectors(e,t),Fi.cross(nr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),Fi.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Oi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ys.subVectors(i,n),Js.subVectors(s,n),Ru.subVectors(e,n);const l=Ys.dot(Ru),c=Js.dot(Ru);if(l<=0&&c<=0)return t.copy(n);Pu.subVectors(e,i);const u=Ys.dot(Pu),h=Js.dot(Pu);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ys,o);Lu.subVectors(e,s);const f=Ys.dot(Lu),m=Js.dot(Lu);if(m>=0&&f<=m)return t.copy(s);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Js,a);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return Fp.subVectors(s,i),a=(h-u)/(h-u+(f-m)),t.copy(i).addScaledVector(Fp,a);const p=1/(g+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Ys,o).addScaledVector(Js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function Uu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=St.workingColorSpace){if(e=lf(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Uu(o,s,e+1/3),this.g=Uu(o,s,e),this.b=Uu(o,s,e-1/3)}return St.toWorkingColorSpace(this,i),this}setStyle(e,t=Si){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Si){const n=zg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=xo(e.r),this.g=xo(e.g),this.b=xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return St.fromWorkingColorSpace(En.copy(this),e),Math.round(ut(En.r*255,0,255))*65536+Math.round(ut(En.g*255,0,255))*256+Math.round(ut(En.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(En.copy(this),t);const n=En.r,i=En.g,s=En.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=Si){St.fromWorkingColorSpace(En.copy(this),e);const t=En.r,n=En.g,i=En.b;return e!==Si?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+t,Ar.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ar),e.getHSL(Tl);const n=Ra(Ar.h,Tl.h,t),i=Ra(Ar.s,Tl.s,t),s=Ra(Ar.l,Tl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new Ze;Ze.NAMES=zg;let Zy=0;class Fs extends ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=vo,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=Lh,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vo&&(n.blending=this.blending),this.side!==Yr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ph&&(n.blendSrc=this.blendSrc),this.blendDst!==Lh&&(n.blendDst=this.blendDst),this.blendEquation!==ds&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Po&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hg extends Fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=Eg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new B,wl=new $e;let Qy=0;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gd,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gd&&(e.usage=this.usage),e}}class Vg extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gg extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tn extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let e1=0;const xi=new pt,Nu=new nn,Ks=new B,ni=new Kr,Qo=new Kr,mn=new B;class Gn extends ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Og(e)?Gg:Vg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ot().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,n){return xi.makeTranslation(e,t,n),this.applyMatrix4(xi),this}scale(e,t,n){return xi.makeScale(e,t,n),this.applyMatrix4(xi),this}lookAt(e){return Nu.lookAt(e),Nu.updateMatrix(),this.applyMatrix4(Nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ni.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Qo.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(ni.min,Qo.min),ni.expandByPoint(mn),mn.addVectors(ni.max,Qo.max),ni.expandByPoint(mn)):(ni.expandByPoint(Qo.min),ni.expandByPoint(Qo.max))}ni.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)mn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(mn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mn.fromBufferAttribute(a,c),l&&(Ks.fromBufferAttribute(e,c),mn.add(Ks)),i=Math.max(i,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new B,l[C]=new B;const c=new B,u=new B,h=new B,d=new $e,f=new $e,m=new $e,_=new B,g=new B;function p(C,w,T){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,T),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,w),m.fromBufferAttribute(s,T),u.sub(c),h.sub(c),f.sub(d),m.sub(d);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(P),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(P),a[C].add(_),a[w].add(_),a[T].add(_),l[C].add(g),l[w].add(g),l[T].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,w=x.length;C<w;++C){const T=x[C],P=T.start,F=T.count;for(let k=P,N=P+F;k<N;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new B,v=new B,M=new B,b=new B;function S(C){M.fromBufferAttribute(i,C),b.copy(M);const w=a[C];y.copy(w),y.sub(M.multiplyScalar(M.dot(w))).normalize(),v.crossVectors(b,w);const P=v.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,w=x.length;C<w;++C){const T=x[C],P=T.start,F=T.count;for(let k=P,N=P+F;k<N;k+=3)S(e.getX(k+0)),S(e.getX(k+1)),S(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new qt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Up=new pt,is=new Yc,El=new yr,Np=new B,Al=new B,Cl=new B,Rl=new B,Ou=new B,Pl=new B,Op=new B,Ll=new B;class di extends nn{constructor(e=new Gn,t=new Hg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Pl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Ou.fromBufferAttribute(h,e),o?Pl.addScaledVector(Ou,u):Pl.addScaledVector(Ou.sub(t),u))}t.add(Pl)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),El.copy(n.boundingSphere),El.applyMatrix4(s),is.copy(e.ray).recast(e.near),!(El.containsPoint(is.origin)===!1&&(is.intersectSphere(El,Np)===null||is.origin.distanceToSquared(Np)>(e.far-e.near)**2))&&(Up.copy(s).invert(),is.copy(e.ray).applyMatrix4(Up),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,M=y;v<M;v+=3){const b=a.getX(v),S=a.getX(v+1),C=a.getX(v+2);i=Dl(this,p,e,n,c,u,h,b,S,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);i=Dl(this,o,e,n,c,u,h,x,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,M=y;v<M;v+=3){const b=v,S=v+1,C=v+2;i=Dl(this,p,e,n,c,u,h,b,S,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=g,y=g+1,v=g+2;i=Dl(this,o,e,n,c,u,h,x,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function t1(r,e,t,n,i,s,o,a){let l;if(e.side===Zn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Yr,a),l===null)return null;Ll.copy(a),Ll.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ll);return c<t.near||c>t.far?null:{distance:c,point:Ll.clone(),object:r}}function Dl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Al),r.getVertexPosition(l,Cl),r.getVertexPosition(c,Rl);const u=t1(r,e,t,n,Al,Cl,Rl,Op);if(u){const h=new B;Oi.getBarycoord(Op,Al,Cl,Rl,h),i&&(u.uv=Oi.getInterpolatedAttribute(i,a,l,c,h,new $e)),s&&(u.uv1=Oi.getInterpolatedAttribute(s,a,l,c,h,new $e)),o&&(u.normal=Oi.getInterpolatedAttribute(o,a,l,c,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};Oi.getNormal(Al,Cl,Rl,d.normal),u.face=d,u.barycoord=h}return u}class Qa extends Gn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Tn(c,3)),this.setAttribute("normal",new Tn(u,3)),this.setAttribute("uv",new Tn(h,2));function m(_,g,p,x,y,v,M,b,S,C,w){const T=v/S,P=M/C,F=v/2,k=M/2,N=b/2,z=S+1,G=C+1;let $=0,H=0;const ne=new B;for(let I=0;I<G;I++){const re=I*P-k;for(let Le=0;Le<z;Le++){const Ge=Le*T-F;ne[_]=Ge*x,ne[g]=re*y,ne[p]=N,c.push(ne.x,ne.y,ne.z),ne[_]=0,ne[g]=0,ne[p]=b>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(Le/S),h.push(1-I/C),$+=1}}for(let I=0;I<C;I++)for(let re=0;re<S;re++){const Le=d+re+z*I,Ge=d+re+z*(I+1),j=d+(re+1)+z*(I+1),ee=d+(re+1)+z*I;l.push(Le,Ge,ee),l.push(Ge,j,ee),H+=6}a.addGroup(f,H,w),f+=H,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Uo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function On(r){const e={};for(let t=0;t<r.length;t++){const n=Uo(r[t]);for(const i in n)e[i]=n[i]}return e}function n1(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Wg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const i1={clone:Uo,merge:On};var r1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r1,this.fragmentShader=s1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Uo(e.uniforms),this.uniformsGroups=n1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qg extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=dr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new B,kp=new $e,Bp=new $e;class Xn extends qg{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,t){return this.getViewBounds(e,kp,Bp),t.subVectors(Bp,kp)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ca*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zs=-90,Qs=1;class o1 extends nn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xn(Zs,Qs,e,t);i.layers=this.layers,this.add(i);const s=new Xn(Zs,Qs,e,t);s.layers=this.layers,this.add(s);const o=new Xn(Zs,Qs,e,t);o.layers=this.layers,this.add(o);const a=new Xn(Zs,Qs,e,t);a.layers=this.layers,this.add(a);const l=new Xn(Zs,Qs,e,t);l.layers=this.layers,this.add(l);const c=new Xn(Zs,Qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===dr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Xg extends Dn{constructor(e=[],t=Lo,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class a1 extends Ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xg(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$i}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qa(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:Uo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zn,blending:Wr});s.uniforms.tEquirect.value=t;const o=new di(i,s),a=t.minFilter;return t.minFilter===vs&&(t.minFilter=$i),new o1(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class da extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const l1={type:"move"};class ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new da,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new da,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new da,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(l1)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new da;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class c1 extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gd,this.updateRanges=[],this.version=0,this.uuid=Bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Un=new B;class jg{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jg(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const zp=new B,Hp=new Mt,Vp=new Mt,u1=new B,Gp=new pt,Il=new B,Bu=new yr,Wp=new pt,zu=new Yc;class uA extends di{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gp,this.bindMatrix=new pt,this.bindMatrixInverse=new pt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Il),this.boundingBox.expandByPoint(Il)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Il),this.boundingSphere.expandByPoint(Il)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bu.copy(this.boundingSphere),Bu.applyMatrix4(i),e.ray.intersectsSphere(Bu)!==!1&&(Wp.copy(i).invert(),zu.copy(e.ray).applyMatrix4(Wp),!(this.boundingBox!==null&&zu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,zu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===gp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===oy?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Hp.fromBufferAttribute(i.attributes.skinIndex,e),Vp.fromBufferAttribute(i.attributes.skinWeight,e),zp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Vp.getComponent(s);if(o!==0){const a=Hp.getComponent(s);Gp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(u1.copy(zp).applyMatrix4(Gp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class h1 extends nn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $g extends Dn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=pi,u=pi,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qp=new pt,d1=new pt;class Yg{constructor(e=[],t=[]){this.uuid=Bi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new pt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new pt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:d1;qp.multiplyMatrices(a,t[s]),qp.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Yg(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new $g(t,e,e,Ci,ki);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new h1),this.bones.push(o),this.boneInverses.push(new pt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Xp extends qt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const eo=new pt,jp=new pt,Fl=[],$p=new Kr,f1=new pt,ea=new di,ta=new yr;class hA extends di{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xp(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,f1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,eo),$p.copy(e.boundingBox).applyMatrix4(eo),this.boundingBox.union($p)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,eo),ta.copy(e.boundingSphere).applyMatrix4(eo),this.boundingSphere.union(ta)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ea.geometry=this.geometry,ea.material=this.material,ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(n),e.ray.intersectsSphere(ta)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,eo),jp.multiplyMatrices(n,eo),ea.matrixWorld=jp,ea.raycast(e,Fl);for(let o=0,a=Fl.length;o<a;o++){const l=Fl[o];l.instanceId=s,l.object=this,t.push(l)}Fl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new $g(new Float32Array(i*this.count),i,this.count,rf,ki));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Hu=new B,p1=new B,m1=new ot;class us{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Hu.subVectors(n,t).cross(p1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Hu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||m1.getNormalMatrix(e),i=this.coplanarPoint(Hu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new yr,Ul=new B;class uf{constructor(e=new us,t=new us,n=new us,i=new us,s=new us,o=new us){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dr){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],m=i[9],_=i[10],g=i[11],p=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,g-f,v-p).normalize(),n[1].setComponents(l+s,d+c,g+f,v+p).normalize(),n[2].setComponents(l+o,d+u,g+m,v+x).normalize(),n[3].setComponents(l-o,d-u,g-m,v-x).normalize(),n[4].setComponents(l-a,d-h,g-_,v-y).normalize(),t===dr)n[5].setComponents(l+a,d+h,g+_,v+y).normalize();else if(t===Lc)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ul.x=i.normal.x>0?e.max.x:e.min.x,Ul.y=i.normal.y>0?e.max.y:e.min.y,Ul.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jg extends Fs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dc=new B,Ic=new B,Yp=new pt,na=new Yc,Nl=new yr,Vu=new B,Jp=new B;class Kg extends nn{constructor(e=new Gn,t=new Jg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Dc.fromBufferAttribute(t,i-1),Ic.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Dc.distanceTo(Ic);e.setAttribute("lineDistance",new Tn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nl.copy(n.boundingSphere),Nl.applyMatrix4(i),Nl.radius+=s,e.ray.intersectsSphere(Nl)===!1)return;Yp.copy(i).invert(),na.copy(e.ray).applyMatrix4(Yp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){const p=u.getX(_),x=u.getX(_+1),y=Ol(this,e,na,l,p,x,_);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(f),p=Ol(this,e,na,l,_,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){const p=Ol(this,e,na,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Ol(this,e,na,l,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ol(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Dc.fromBufferAttribute(a,i),Ic.fromBufferAttribute(a,s),t.distanceSqToSegment(Dc,Ic,Vu,Jp)>n)return;Vu.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Vu);if(!(c<e.near||c>e.far))return{distance:c,point:Jp.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Kp=new B,Zp=new B;class g1 extends Kg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Kp.fromBufferAttribute(t,i),Zp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Kp.distanceTo(Zp);e.setAttribute("lineDistance",new Tn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dA extends Kg{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _1 extends Fs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qp=new pt,_d=new Yc,kl=new yr,Bl=new B;class Gu extends nn{constructor(e=new Gn,t=new _1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kl.copy(n.boundingSphere),kl.applyMatrix4(i),kl.radius+=s,e.ray.intersectsSphere(kl)===!1)return;Qp.copy(i).invert(),_d.copy(e.ray).applyMatrix4(Qp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const g=c.getX(m);Bl.fromBufferAttribute(h,g),em(Bl,g,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,_=f;m<_;m++)Bl.fromBufferAttribute(h,m),em(Bl,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function em(r,e,t,n,i,s,o){const a=_d.distanceSqToPoint(r);if(a<t){const l=new B;_d.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Zg extends Dn{constructor(e,t,n=Ls,i,s,o,a=pi,l=pi,c,u=ja){if(u!==ja&&u!==$a)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class br{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new $e:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new B,i=[],s=[],o=[],a=new B,l=new pt;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(ut(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(ut(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Qg extends br{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new $e){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class v1 extends Qg{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function hf(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const zl=new B,Wu=new hf,qu=new hf,Xu=new hf;class x1 extends br{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new B){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(zl.subVectors(i[0],i[1]).add(i[0]),c=zl);const h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(zl.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=zl),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Wu.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,_,g),qu.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,_,g),Xu.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(Wu.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),qu.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Xu.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Wu.calc(l),qu.calc(l),Xu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new B().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function tm(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function y1(r,e){const t=1-r;return t*t*e}function b1(r,e){return 2*(1-r)*r*e}function S1(r,e){return r*r*e}function Pa(r,e,t,n){return y1(r,e)+b1(r,t)+S1(r,n)}function M1(r,e){const t=1-r;return t*t*t*e}function T1(r,e){const t=1-r;return 3*t*t*r*e}function w1(r,e){return 3*(1-r)*r*r*e}function E1(r,e){return r*r*r*e}function La(r,e,t,n,i){return M1(r,e)+T1(r,t)+w1(r,n)+E1(r,i)}class A1 extends br{constructor(e=new $e,t=new $e,n=new $e,i=new $e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new $e){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(La(e,i.x,s.x,o.x,a.x),La(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class C1 extends br{constructor(e=new B,t=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new B){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(La(e,i.x,s.x,o.x,a.x),La(e,i.y,s.y,o.y,a.y),La(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class R1 extends br{constructor(e=new $e,t=new $e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $e){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class P1 extends br{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class L1 extends br{constructor(e=new $e,t=new $e,n=new $e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new $e){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Pa(e,i.x,s.x,o.x),Pa(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class e_ extends br{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Pa(e,i.x,s.x,o.x),Pa(e,i.y,s.y,o.y),Pa(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class D1 extends br{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $e){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(tm(a,l.x,c.x,u.x,h.x),tm(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new $e().fromArray(i))}return this}}var I1=Object.freeze({__proto__:null,ArcCurve:v1,CatmullRomCurve3:x1,CubicBezierCurve:A1,CubicBezierCurve3:C1,EllipseCurve:Qg,LineCurve:R1,LineCurve3:P1,QuadraticBezierCurve:L1,QuadraticBezierCurve3:e_,SplineCurve:D1});class el extends Gn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const x=p*d-o;for(let y=0;y<c;y++){const v=y*h-s;m.push(v,-x,0),_.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const y=x+c*p,v=x+c*(p+1),M=x+1+c*(p+1),b=x+1+c*p;f.push(y,v,b),f.push(v,M,b)}this.setIndex(f),this.setAttribute("position",new Tn(m,3)),this.setAttribute("normal",new Tn(_,3)),this.setAttribute("uv",new Tn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.widthSegments,e.heightSegments)}}class t_ extends Gn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new B,d=new B,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let M=0;M<=t;M++){const b=M/t;h.x=-e*Math.cos(i+b*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(i+b*s)*Math.sin(o+y*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(b+v,1-y),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const y=u[p][x+1],v=u[p][x],M=u[p+1][x],b=u[p+1][x+1];(p!==0||o>0)&&f.push(y,v,b),(p!==n-1||l<Math.PI)&&f.push(v,M,b)}this.setIndex(f),this.setAttribute("position",new Tn(m,3)),this.setAttribute("normal",new Tn(_,3)),this.setAttribute("uv",new Tn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t_(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class n_ extends Gn{constructor(e=new e_(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new B,l=new B,c=new $e;let u=new B;const h=[],d=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Tn(h,3)),this.setAttribute("normal",new Tn(d,3)),this.setAttribute("uv",new Tn(f,2));function _(){for(let y=0;y<t;y++)g(y);g(s===!1?t:0),x(),p()}function g(y){u=e.getPointAt(y/t,u);const v=o.normals[y],M=o.binormals[y];for(let b=0;b<=i;b++){const S=b/i*Math.PI*2,C=Math.sin(S),w=-Math.cos(S);l.x=w*v.x+C*M.x,l.y=w*v.y+C*M.y,l.z=w*v.z+C*M.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let v=1;v<=i;v++){const M=(i+1)*(y-1)+(v-1),b=(i+1)*y+(v-1),S=(i+1)*y+v,C=(i+1)*(y-1)+v;m.push(M,b,C),m.push(b,S,C)}}function x(){for(let y=0;y<=t;y++)for(let v=0;v<=i;v++)c.x=y/t,c.y=v/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n_(new I1[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class F1 extends Fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ug,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fA extends F1{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class U1 extends Fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class N1 extends Fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Hl(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function O1(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function k1(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function nm(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function i_(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Jc{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class B1 extends Jc{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_p,endingEnd:_p}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case vp:s=e,a=2*t-n;break;case xp:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vp:o=e,l=2*n-t;break;case xp:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,x=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*_+.5*m,v=f*g-f*_;for(let M=0;M!==a;++M)s[M]=p*o[u+M]+x*o[c+M]+y*o[l+M]+v*o[h+M];return s}}class z1 extends Jc{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class H1 extends Jc{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Hi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hl(t,this.TimeBufferType),this.values=Hl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hl(e.times,Array),values:Hl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new H1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new z1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new B1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Rc:t=this.InterpolantFactoryMethodDiscrete;break;case md:t=this.InterpolantFactoryMethodLinear;break;case vu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rc;case this.InterpolantFactoryMethodLinear:return md;case this.InterpolantFactoryMethodSmooth:return vu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&O1(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===vu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){const _=t[h+m];if(_!==t[d+m]||_!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Hi.prototype.ValueTypeName="";Hi.prototype.TimeBufferType=Float32Array;Hi.prototype.ValueBufferType=Float32Array;Hi.prototype.DefaultInterpolation=md;class zo extends Hi{constructor(e,t,n){super(e,t,n)}}zo.prototype.ValueTypeName="bool";zo.prototype.ValueBufferType=Array;zo.prototype.DefaultInterpolation=Rc;zo.prototype.InterpolantFactoryMethodLinear=void 0;zo.prototype.InterpolantFactoryMethodSmooth=void 0;class r_ extends Hi{constructor(e,t,n,i){super(e,t,n,i)}}r_.prototype.ValueTypeName="color";class Fc extends Hi{constructor(e,t,n,i){super(e,t,n,i)}}Fc.prototype.ValueTypeName="number";class V1 extends Jc{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Bo.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Kc extends Hi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new V1(this.times,this.values,this.getValueSize(),e)}}Kc.prototype.ValueTypeName="quaternion";Kc.prototype.InterpolantFactoryMethodSmooth=void 0;class Ho extends Hi{constructor(e,t,n){super(e,t,n)}}Ho.prototype.ValueTypeName="string";Ho.prototype.ValueBufferType=Array;Ho.prototype.DefaultInterpolation=Rc;Ho.prototype.InterpolantFactoryMethodLinear=void 0;Ho.prototype.InterpolantFactoryMethodSmooth=void 0;class Uc extends Hi{constructor(e,t,n,i){super(e,t,n,i)}}Uc.prototype.ValueTypeName="vector";class pA{constructor(e="",t=-1,n=[],i=ly){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Bi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(W1(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Hi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=k1(l);l=nm(l,1,u),c=nm(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Fc(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,m,_){if(f.length!==0){const g=[],p=[];i_(f,g,p,m),g.length!==0&&_.push(new h(d,g,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){const y=d[m];g.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new Fc(".morphTargetInfluence["+_+"]",g,p))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(Uc,f+".position",d,"pos",i),n(Kc,f+".quaternion",d,"rot",i),n(Uc,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function G1(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fc;case"vector":case"vector2":case"vector3":case"vector4":return Uc;case"color":return r_;case"quaternion":return Kc;case"bool":case"boolean":return zo;case"string":return Ho}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function W1(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=G1(r.type);if(r.times===void 0){const t=[],n=[];i_(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Br={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class q1{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}}const X1=new q1;class tl{constructor(e){this.manager=e!==void 0?e:X1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}tl.DEFAULT_MATERIAL_NAME="__DEFAULT";const rr={};class j1 extends Error{constructor(e,t){super(e),this.response=t}}class mA extends tl{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Br.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(rr[e]!==void 0){rr[e].push({onLoad:t,onProgress:n,onError:i});return}rr[e]=[],rr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=rr[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){x();function x(){h.read().then(({done:y,value:v})=>{if(y)p.close();else{_+=v.byteLength;const M=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let b=0,S=u.length;b<S;b++){const C=u[b];C.onProgress&&C.onProgress(M)}p.enqueue(v),x()}},y=>{p.error(y)})}}});return new Response(g)}else throw new j1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Br.add(e,c);const u=rr[e];delete rr[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=rr[e];if(u===void 0)throw this.manager.itemError(e),c;delete rr[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $1 extends tl{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Br.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ya("img");function l(){u(),Br.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class gA extends tl{constructor(e){super(e)}load(e,t,n,i){const s=new Dn,o=new $1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class df extends nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ju=new pt,im=new B,rm=new B;class ff{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=Ki,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uf,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;im.setFromMatrixPosition(e.matrixWorld),t.position.copy(im),rm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rm),t.updateMatrixWorld(),ju.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ju),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ju)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Y1 extends ff{constructor(){super(new Xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Fo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class _A extends df{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Y1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const sm=new pt,ia=new B,$u=new B;class J1 extends ff{constructor(){super(new Xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ia.setFromMatrixPosition(e.matrixWorld),n.position.copy(ia),$u.copy(n.position),$u.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($u),n.updateMatrixWorld(),i.makeTranslation(-ia.x,-ia.y,-ia.z),sm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sm)}}class vA extends df{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new J1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class s_ extends qg{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class K1 extends ff{constructor(){super(new s_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xA extends df{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new K1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yA{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class bA extends tl{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Br.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Br.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Br.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Br.add(e,l),s.manager.itemStart(e)}}class Z1 extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const pf="\\[\\]\\.:\\/",Q1=new RegExp("["+pf+"]","g"),mf="[^"+pf+"]",eb="[^"+pf.replace("\\.","")+"]",tb=/((?:WC+[\/:])*)/.source.replace("WC",mf),nb=/(WCOD+)?/.source.replace("WCOD",eb),ib=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mf),rb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mf),sb=new RegExp("^"+tb+nb+ib+rb+"$"),ob=["material","materials","bones","map"];class ab{constructor(e,t,n){const i=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Lt{constructor(e,t,n){this.path=t,this.parsedPath=n||Lt.parseTrackName(t),this.node=Lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Lt.Composite(e,t,n):new Lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Q1,"")}static parseTrackName(e){const t=sb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);ob.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Lt.Composite=ab;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class SA extends g1{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ze(n),i=new Ze(i);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,m=-a;d<=t;d++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const _=d===s?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const u=new Gn;u.setAttribute("position",new Tn(l,3)),u.setAttribute("color",new Tn(c,3));const h=new Jg({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function om(r,e,t,n){const i=lb(n);switch(t){case Lg:return r*e;case rf:return r*e/i.components*i.byteLength;case sf:return r*e/i.components*i.byteLength;case Ig:return r*e*2/i.components*i.byteLength;case of:return r*e*2/i.components*i.byteLength;case Dg:return r*e*3/i.components*i.byteLength;case Ci:return r*e*4/i.components*i.byteLength;case af:return r*e*4/i.components*i.byteLength;case oc:case ac:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case lc:case cc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wh:case Xh:return Math.max(r,16)*Math.max(e,8)/4;case Gh:case qh:return Math.max(r,8)*Math.max(e,8)/2;case jh:case $h:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Yh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ed:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case td:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case nd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case id:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case rd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case sd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case od:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ad:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ld:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case cd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case uc:case ud:case hd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Fg:case dd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case fd:case pd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lb(r){switch(r){case Ki:case Cg:return{byteLength:1,components:1};case qa:case Rg:case Za:return{byteLength:2,components:1};case tf:case nf:return{byteLength:2,components:4};case Ls:case ef:case ki:return{byteLength:4,components:1};case Pg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function o_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function cb(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],_=h[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const _=h[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var ub=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hb=`#ifdef USE_ALPHAHASH
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
#endif`,db=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gb=`#ifdef USE_AOMAP
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
#endif`,_b=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mb=`#ifdef USE_IRIDESCENCE
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
#endif`,Tb=`#ifdef USE_BUMPMAP
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
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ib=`#define PI 3.141592653589793
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
} // validated`,Fb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ub=`vec3 transformedNormal = objectNormal;
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
#endif`,Nb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ob=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vb=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Gb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wb=`#ifdef USE_ENVMAP
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
#endif`,qb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xb=`#ifdef USE_ENVMAP
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
#endif`,jb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$b=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kb=`#ifdef USE_GRADIENTMAP
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
}`,Zb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tS=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,nS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,iS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aS=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,lS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,cS=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,uS=`#if defined( RE_IndirectDiffuse )
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
#endif`,hS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_S=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xS=`#if defined( USE_POINTS_UV )
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
#endif`,yS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ES=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,RS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DS=`#ifdef USE_NORMALMAP
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
#endif`,IS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,US=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,BS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,XS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$S=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,YS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JS=`#ifdef USE_SKINNING
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
#endif`,KS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZS=`#ifdef USE_SKINNING
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
#endif`,QS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nM=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iM=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rM=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uM=`uniform sampler2D t2D;
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
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mM=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,gM=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_M=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,vM=`#define DISTANCE
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
}`,xM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bM=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 diffuse;
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
}`,MM=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,TM=`uniform vec3 diffuse;
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
}`,wM=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,EM=`#define LAMBERT
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
}`,AM=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,CM=`#define MATCAP
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
}`,RM=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,PM=`#define NORMAL
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
}`,LM=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,DM=`#define PHONG
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
}`,IM=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,FM=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,UM=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,NM=`#define TOON
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
}`,OM=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,kM=`uniform vec3 diffuse;
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
}`,BM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,zM=`uniform vec3 color;
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
}`,HM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,VM=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:ub,alphahash_pars_fragment:hb,alphamap_fragment:db,alphamap_pars_fragment:fb,alphatest_fragment:pb,alphatest_pars_fragment:mb,aomap_fragment:gb,aomap_pars_fragment:_b,batching_pars_vertex:vb,batching_vertex:xb,begin_vertex:yb,beginnormal_vertex:bb,bsdfs:Sb,iridescence_fragment:Mb,bumpmap_pars_fragment:Tb,clipping_planes_fragment:wb,clipping_planes_pars_fragment:Eb,clipping_planes_pars_vertex:Ab,clipping_planes_vertex:Cb,color_fragment:Rb,color_pars_fragment:Pb,color_pars_vertex:Lb,color_vertex:Db,common:Ib,cube_uv_reflection_fragment:Fb,defaultnormal_vertex:Ub,displacementmap_pars_vertex:Nb,displacementmap_vertex:Ob,emissivemap_fragment:kb,emissivemap_pars_fragment:Bb,colorspace_fragment:zb,colorspace_pars_fragment:Hb,envmap_fragment:Vb,envmap_common_pars_fragment:Gb,envmap_pars_fragment:Wb,envmap_pars_vertex:qb,envmap_physical_pars_fragment:nS,envmap_vertex:Xb,fog_vertex:jb,fog_pars_vertex:$b,fog_fragment:Yb,fog_pars_fragment:Jb,gradientmap_pars_fragment:Kb,lightmap_pars_fragment:Zb,lights_lambert_fragment:Qb,lights_lambert_pars_fragment:eS,lights_pars_begin:tS,lights_toon_fragment:iS,lights_toon_pars_fragment:rS,lights_phong_fragment:sS,lights_phong_pars_fragment:oS,lights_physical_fragment:aS,lights_physical_pars_fragment:lS,lights_fragment_begin:cS,lights_fragment_maps:uS,lights_fragment_end:hS,logdepthbuf_fragment:dS,logdepthbuf_pars_fragment:fS,logdepthbuf_pars_vertex:pS,logdepthbuf_vertex:mS,map_fragment:gS,map_pars_fragment:_S,map_particle_fragment:vS,map_particle_pars_fragment:xS,metalnessmap_fragment:yS,metalnessmap_pars_fragment:bS,morphinstance_vertex:SS,morphcolor_vertex:MS,morphnormal_vertex:TS,morphtarget_pars_vertex:wS,morphtarget_vertex:ES,normal_fragment_begin:AS,normal_fragment_maps:CS,normal_pars_fragment:RS,normal_pars_vertex:PS,normal_vertex:LS,normalmap_pars_fragment:DS,clearcoat_normal_fragment_begin:IS,clearcoat_normal_fragment_maps:FS,clearcoat_pars_fragment:US,iridescence_pars_fragment:NS,opaque_fragment:OS,packing:kS,premultiplied_alpha_fragment:BS,project_vertex:zS,dithering_fragment:HS,dithering_pars_fragment:VS,roughnessmap_fragment:GS,roughnessmap_pars_fragment:WS,shadowmap_pars_fragment:qS,shadowmap_pars_vertex:XS,shadowmap_vertex:jS,shadowmask_pars_fragment:$S,skinbase_vertex:YS,skinning_pars_vertex:JS,skinning_vertex:KS,skinnormal_vertex:ZS,specularmap_fragment:QS,specularmap_pars_fragment:eM,tonemapping_fragment:tM,tonemapping_pars_fragment:nM,transmission_fragment:iM,transmission_pars_fragment:rM,uv_pars_fragment:sM,uv_pars_vertex:oM,uv_vertex:aM,worldpos_vertex:lM,background_vert:cM,background_frag:uM,backgroundCube_vert:hM,backgroundCube_frag:dM,cube_vert:fM,cube_frag:pM,depth_vert:mM,depth_frag:gM,distanceRGBA_vert:_M,distanceRGBA_frag:vM,equirect_vert:xM,equirect_frag:yM,linedashed_vert:bM,linedashed_frag:SM,meshbasic_vert:MM,meshbasic_frag:TM,meshlambert_vert:wM,meshlambert_frag:EM,meshmatcap_vert:AM,meshmatcap_frag:CM,meshnormal_vert:RM,meshnormal_frag:PM,meshphong_vert:LM,meshphong_frag:DM,meshphysical_vert:IM,meshphysical_frag:FM,meshtoon_vert:UM,meshtoon_frag:NM,points_vert:OM,points_frag:kM,shadow_vert:BM,shadow_frag:zM,sprite_vert:HM,sprite_frag:VM},we={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Wi={basic:{uniforms:On([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:On([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ze(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:On([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:On([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:On([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ze(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:On([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:On([we.points,we.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:On([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:On([we.common,we.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:On([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:On([we.sprite,we.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:On([we.common,we.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:On([we.lights,we.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Wi.physical={uniforms:On([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Vl={r:0,b:0,g:0},ss=new Zi,GM=new pt;function WM(r,e,t,n,i,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function m(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const M=m(y);M===null?p(a,l):M&&M.isColor&&(p(M,1),v=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,v){const M=m(v);M&&(M.isCubeTexture||M.mapping===$c)?(u===void 0&&(u=new di(new Qa(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Uo(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ss.copy(v.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(GM.makeRotationFromEuler(ss)),u.material.toneMapped=St.getTransfer(M.colorSpace)!==Pt,(h!==M||d!==M.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,f=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new di(new el(2,2),new Ri({name:"BackgroundMaterial",uniforms:Uo(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=St.getTransfer(M.colorSpace)!==Pt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(Vl,Wg(r)),n.buffers.color.setClear(Vl.r,Vl.g,Vl.b,v,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:g,dispose:x}}function qM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(T,P,F,k,N){let z=!1;const G=h(k,F,P);s!==G&&(s=G,c(s.object)),z=f(T,k,F,N),z&&m(T,k,F,N),N!==null&&e.update(N,r.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(T,P,F,k),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return r.createVertexArray()}function c(T){return r.bindVertexArray(T)}function u(T){return r.deleteVertexArray(T)}function h(T,P,F){const k=F.wireframe===!0;let N=n[T.id];N===void 0&&(N={},n[T.id]=N);let z=N[P.id];z===void 0&&(z={},N[P.id]=z);let G=z[k];return G===void 0&&(G=d(l()),z[k]=G),G}function d(T){const P=[],F=[],k=[];for(let N=0;N<t;N++)P[N]=0,F[N]=0,k[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:k,object:T,attributes:{},index:null}}function f(T,P,F,k){const N=s.attributes,z=P.attributes;let G=0;const $=F.getAttributes();for(const H in $)if($[H].location>=0){const I=N[H];let re=z[H];if(re===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(re=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(re=T.instanceColor)),I===void 0||I.attribute!==re||re&&I.data!==re.data)return!0;G++}return s.attributesNum!==G||s.index!==k}function m(T,P,F,k){const N={},z=P.attributes;let G=0;const $=F.getAttributes();for(const H in $)if($[H].location>=0){let I=z[H];I===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(I=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(I=T.instanceColor));const re={};re.attribute=I,I&&I.data&&(re.data=I.data),N[H]=re,G++}s.attributes=N,s.attributesNum=G,s.index=k}function _(){const T=s.newAttributes;for(let P=0,F=T.length;P<F;P++)T[P]=0}function g(T){p(T,0)}function p(T,P){const F=s.newAttributes,k=s.enabledAttributes,N=s.attributeDivisors;F[T]=1,k[T]===0&&(r.enableVertexAttribArray(T),k[T]=1),N[T]!==P&&(r.vertexAttribDivisor(T,P),N[T]=P)}function x(){const T=s.newAttributes,P=s.enabledAttributes;for(let F=0,k=P.length;F<k;F++)P[F]!==T[F]&&(r.disableVertexAttribArray(F),P[F]=0)}function y(T,P,F,k,N,z,G){G===!0?r.vertexAttribIPointer(T,P,F,N,z):r.vertexAttribPointer(T,P,F,k,N,z)}function v(T,P,F,k){_();const N=k.attributes,z=F.getAttributes(),G=P.defaultAttributeValues;for(const $ in z){const H=z[$];if(H.location>=0){let ne=N[$];if(ne===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(ne=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(ne=T.instanceColor)),ne!==void 0){const I=ne.normalized,re=ne.itemSize,Le=e.get(ne);if(Le===void 0)continue;const Ge=Le.buffer,j=Le.type,ee=Le.bytesPerElement,oe=j===r.INT||j===r.UNSIGNED_INT||ne.gpuType===ef;if(ne.isInterleavedBufferAttribute){const ie=ne.data,pe=ie.stride,Ee=ne.offset;if(ie.isInstancedInterleavedBuffer){for(let ye=0;ye<H.locationSize;ye++)p(H.location+ye,ie.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ye=0;ye<H.locationSize;ye++)g(H.location+ye);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let ye=0;ye<H.locationSize;ye++)y(H.location+ye,re/H.locationSize,j,I,pe*ee,(Ee+re/H.locationSize*ye)*ee,oe)}else{if(ne.isInstancedBufferAttribute){for(let ie=0;ie<H.locationSize;ie++)p(H.location+ie,ne.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ie=0;ie<H.locationSize;ie++)g(H.location+ie);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let ie=0;ie<H.locationSize;ie++)y(H.location+ie,re/H.locationSize,j,I,re*ee,re/H.locationSize*ie*ee,oe)}}else if(G!==void 0){const I=G[$];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(H.location,I);break;case 3:r.vertexAttrib3fv(H.location,I);break;case 4:r.vertexAttrib4fv(H.location,I);break;default:r.vertexAttrib1fv(H.location,I)}}}}x()}function M(){C();for(const T in n){const P=n[T];for(const F in P){const k=P[F];for(const N in k)u(k[N].object),delete k[N];delete P[F]}delete n[T]}}function b(T){if(n[T.id]===void 0)return;const P=n[T.id];for(const F in P){const k=P[F];for(const N in k)u(k[N].object),delete k[N];delete P[F]}delete n[T.id]}function S(T){for(const P in n){const F=n[P];if(F[T.id]===void 0)continue;const k=F[T.id];for(const N in k)u(k[N].object),delete k[N];delete F[T.id]}}function C(){w(),o=!0,s!==i&&(s=i,c(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:w,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function XM(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*d[_];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){return!(S!==Ci&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const C=S===Za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Ki&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==ki&&!C)}function l(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=m>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:M,maxSamples:b}}function $M(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new us,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=r.get(h);if(!i||m===null||m.length===0||s&&!g)s?u(null):c();else{const x=s?0:n,y=x*4;let v=p.clippingState||null;l.value=v,v=u(m,d,y,f);for(let M=0;M!==y;++M)v[M]=t[M];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)o.copy(h[y]).applyMatrix4(x,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function YM(r){let e=new WeakMap;function t(o,a){return a===Bh?o.mapping=Lo:a===zh&&(o.mapping=Do),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bh||a===zh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new a1(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const uo=4,am=[.125,.215,.35,.446,.526,.582],fs=20,Yu=new s_,lm=new Ze;let Ju=null,Ku=0,Zu=0,Qu=!1;const hs=(1+Math.sqrt(5))/2,to=1/hs,cm=[new B(-hs,to,0),new B(hs,to,0),new B(-to,0,hs),new B(to,0,hs),new B(0,hs,-to),new B(0,hs,to),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],JM=new B;class um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=JM}=s;Ju=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ju,Ku,Zu),this._renderer.xr.enabled=Qu,e.scissorTest=!1,Gl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lo||e.mapping===Do?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ju=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$i,minFilter:$i,generateMipmaps:!1,type:Za,format:Ci,colorSpace:Io,depthBuffer:!1},i=hm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KM(s)),this._blurMaterial=ZM(s,e,t)}return i}_compileMaterial(e){const t=new di(this._lodPlanes[0],e);this._renderer.compile(t,Yu)}_sceneToCubeUV(e,t,n,i,s){const l=new Xn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(lm),h.toneMapping=qr,h.autoClear=!1;const m=new Hg({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),_=new di(new Qa,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(lm),g=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const v=this._cubeSize;Gl(i,y*v,x>2?v:0,v,v),h.setRenderTarget(i),g&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Lo||e.mapping===Do;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dm());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new di(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Gl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Yu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=cm[(i-s-1)%cm.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new di(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*fs-1),_=s/m,g=isFinite(s)?1+Math.floor(u*_):fs;g>fs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fs}`);const p=[];let x=0;for(let S=0;S<fs;++S){const C=S/_,w=Math.exp(-C*C/2);p.push(w),S===0?x+=w:S<g&&(x+=2*w)}for(let S=0;S<p.length;S++)p[S]=p[S]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const v=this._sizeLods[i],M=3*v*(i>y-uo?i-y+uo:0),b=4*(this._cubeSize-v);Gl(t,M,b,3*v,2*v),l.setRenderTarget(t),l.render(h,Yu)}}function KM(r){const e=[],t=[],n=[];let i=r;const s=r-uo+1+am.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-uo?l=am[o-r+uo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*f),y=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let b=0;b<f;b++){const S=b%3*2/3-1,C=b>2?0:-1,w=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];x.set(w,_*m*b),y.set(d,g*m*b);const T=[b,b,b,b,b,b];v.set(T,p*m*b)}const M=new Gn;M.setAttribute("position",new qt(x,_)),M.setAttribute("uv",new qt(y,g)),M.setAttribute("faceIndex",new qt(v,p)),e.push(M),i>uo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hm(r,e,t){const n=new Ds(r,e,t);return n.texture.mapping=$c,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gl(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function ZM(r,e,t){const n=new Float32Array(fs),i=new B(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gf(),fragmentShader:`

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
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function dm(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gf(),fragmentShader:`

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
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function fm(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function gf(){return`

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
	`}function QM(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Bh||l===zh,u=l===Lo||l===Do;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new um(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new um(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function eT(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&hc("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function tT(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,m=h.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,v=x.length;y<v;y+=3){const M=x[y+0],b=x[y+1],S=x[y+2];d.push(M,b,b,S,S,M)}}else if(m!==void 0){const x=m.array;_=m.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const M=y+0,b=y+1,S=y+2;d.push(M,b,b,S,S,M)}}else return;const g=new(Og(d)?Gg:Vg)(d,1);g.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function nT(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,d*o,m),t.update(f,n,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function h(d,f,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,m);let p=0;for(let x=0;x<m;x++)p+=f[x]*_[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function iT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function rT(r,e,t){const n=new WeakMap,i=new Mt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let w=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let v=a.attributes.position.count*y,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const b=new Float32Array(v*M*4*h),S=new kg(b,v,M,h);S.type=ki,S.needsUpdate=!0;const C=y*4;for(let T=0;T<h;T++){const P=g[T],F=p[T],k=x[T],N=v*M*4*T;for(let z=0;z<P.count;z++){const G=z*C;f===!0&&(i.fromBufferAttribute(P,z),b[N+G+0]=i.x,b[N+G+1]=i.y,b[N+G+2]=i.z,b[N+G+3]=0),m===!0&&(i.fromBufferAttribute(F,z),b[N+G+4]=i.x,b[N+G+5]=i.y,b[N+G+6]=i.z,b[N+G+7]=0),_===!0&&(i.fromBufferAttribute(k,z),b[N+G+8]=i.x,b[N+G+9]=i.y,b[N+G+10]=i.z,b[N+G+11]=k.itemSize===4?i.w:1)}}d={count:h,texture:S,size:new $e(v,M)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function sT(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const a_=new Dn,pm=new Zg(1,1),l_=new kg,c_=new Wy,u_=new Xg,mm=[],gm=[],_m=new Float32Array(16),vm=new Float32Array(9),xm=new Float32Array(4);function Vo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=mm[i];if(s===void 0&&(s=new Float32Array(i),mm[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function fn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function pn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Zc(r,e){let t=gm[e];t===void 0&&(t=new Int32Array(e),gm[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function oT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function aT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2fv(this.addr,e),pn(t,e)}}function lT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;r.uniform3fv(this.addr,e),pn(t,e)}}function cT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4fv(this.addr,e),pn(t,e)}}function uT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;xm.set(n),r.uniformMatrix2fv(this.addr,!1,xm),pn(t,n)}}function hT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;vm.set(n),r.uniformMatrix3fv(this.addr,!1,vm),pn(t,n)}}function dT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;_m.set(n),r.uniformMatrix4fv(this.addr,!1,_m),pn(t,n)}}function fT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function pT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2iv(this.addr,e),pn(t,e)}}function mT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3iv(this.addr,e),pn(t,e)}}function gT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4iv(this.addr,e),pn(t,e)}}function _T(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function vT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2uiv(this.addr,e),pn(t,e)}}function xT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3uiv(this.addr,e),pn(t,e)}}function yT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4uiv(this.addr,e),pn(t,e)}}function bT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(pm.compareFunction=Ng,s=pm):s=a_,t.setTexture2D(e||s,i)}function ST(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||c_,i)}function MT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||u_,i)}function TT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||l_,i)}function wT(r){switch(r){case 5126:return oT;case 35664:return aT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return hT;case 35676:return dT;case 5124:case 35670:return fT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return _T;case 36294:return vT;case 36295:return xT;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return bT;case 35679:case 36299:case 36307:return ST;case 35680:case 36300:case 36308:case 36293:return MT;case 36289:case 36303:case 36311:case 36292:return TT}}function ET(r,e){r.uniform1fv(this.addr,e)}function AT(r,e){const t=Vo(e,this.size,2);r.uniform2fv(this.addr,t)}function CT(r,e){const t=Vo(e,this.size,3);r.uniform3fv(this.addr,t)}function RT(r,e){const t=Vo(e,this.size,4);r.uniform4fv(this.addr,t)}function PT(r,e){const t=Vo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function LT(r,e){const t=Vo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function DT(r,e){const t=Vo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function IT(r,e){r.uniform1iv(this.addr,e)}function FT(r,e){r.uniform2iv(this.addr,e)}function UT(r,e){r.uniform3iv(this.addr,e)}function NT(r,e){r.uniform4iv(this.addr,e)}function OT(r,e){r.uniform1uiv(this.addr,e)}function kT(r,e){r.uniform2uiv(this.addr,e)}function BT(r,e){r.uniform3uiv(this.addr,e)}function zT(r,e){r.uniform4uiv(this.addr,e)}function HT(r,e,t){const n=this.cache,i=e.length,s=Zc(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a_,s[o])}function VT(r,e,t){const n=this.cache,i=e.length,s=Zc(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||c_,s[o])}function GT(r,e,t){const n=this.cache,i=e.length,s=Zc(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||u_,s[o])}function WT(r,e,t){const n=this.cache,i=e.length,s=Zc(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||l_,s[o])}function qT(r){switch(r){case 5126:return ET;case 35664:return AT;case 35665:return CT;case 35666:return RT;case 35674:return PT;case 35675:return LT;case 35676:return DT;case 5124:case 35670:return IT;case 35667:case 35671:return FT;case 35668:case 35672:return UT;case 35669:case 35673:return NT;case 5125:return OT;case 36294:return kT;case 36295:return BT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return HT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return WT}}class XT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wT(t.type)}}class jT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qT(t.type)}}class $T{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const eh=/(\w+)(\])?(\[|\.)?/g;function ym(r,e){r.seq.push(e),r.map[e.id]=e}function YT(r,e,t){const n=r.name,i=n.length;for(eh.lastIndex=0;;){const s=eh.exec(n),o=eh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ym(t,c===void 0?new XT(a,r,e):new jT(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new $T(a),ym(t,h)),t=h}}}class dc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);YT(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function bm(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const JT=37297;let KT=0;function ZT(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Sm=new ot;function QT(r){St._getMatrix(Sm,St.workingColorSpace,r);const e=`mat3( ${Sm.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(r)){case Pc:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Mm(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+ZT(r.getShaderSource(e),o)}else return i}function ew(r,e){const t=QT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function tw(r,e){let t;switch(e){case Qx:t="Linear";break;case ey:t="Reinhard";break;case ty:t="Cineon";break;case ny:t="ACESFilmic";break;case ry:t="AgX";break;case sy:t="Neutral";break;case iy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wl=new B;function nw(){St.getLuminanceCoefficients(Wl);const r=Wl.x.toFixed(4),e=Wl.y.toFixed(4),t=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function rw(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sw(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function fa(r){return r!==""}function Tm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ow=/^[ \t]*#include +<([\w\d./]+)>/gm;function vd(r){return r.replace(ow,lw)}const aw=new Map;function lw(r,e){let t=at[e];if(t===void 0){const n=aw.get(e);if(n!==void 0)t=at[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vd(t)}const cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Em(r){return r.replace(cw,uw)}function uw(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Am(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===wg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Dx?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===or&&(e="SHADOWMAP_TYPE_VSM"),e}function dw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Lo:case Do:e="ENVMAP_TYPE_CUBE";break;case $c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Do:e="ENVMAP_MODE_REFRACTION";break}return e}function pw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Eg:e="ENVMAP_BLENDING_MULTIPLY";break;case Kx:e="ENVMAP_BLENDING_MIX";break;case Zx:e="ENVMAP_BLENDING_ADD";break}return e}function mw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function gw(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=hw(t),c=dw(t),u=fw(t),h=pw(t),d=mw(t),f=iw(t),m=rw(s),_=i.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(fa).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(fa).join(`
`),p.length>0&&(p+=`
`)):(g=[Am(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),p=[Am(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qr?"#define TONE_MAPPING":"",t.toneMapping!==qr?at.tonemapping_pars_fragment:"",t.toneMapping!==qr?tw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,ew("linearToOutputTexel",t.outputColorSpace),nw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fa).join(`
`)),o=vd(o),o=Tm(o,t),o=wm(o,t),a=vd(a),a=Tm(a,t),a=wm(a,t),o=Em(o),a=Em(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===bp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+g+o,v=x+p+a,M=bm(i,i.VERTEX_SHADER,y),b=bm(i,i.FRAGMENT_SHADER,v);i.attachShader(_,M),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function S(P){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),k=i.getShaderInfoLog(M).trim(),N=i.getShaderInfoLog(b).trim();let z=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,M,b);else{const $=Mm(i,M,"vertex"),H=Mm(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+$+`
`+H)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(k===""||N==="")&&(G=!1);G&&(P.diagnostics={runnable:z,programLog:F,vertexShader:{log:k,prefix:g},fragmentShader:{log:N,prefix:p}})}i.deleteShader(M),i.deleteShader(b),C=new dc(i,_),w=sw(i,_)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(_,JT)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=KT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=b,this}let _w=0;class vw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xw(e),t.set(e,n)),n}}class xw{constructor(e){this.id=_w++,this.code=e,this.usedTimes=0}}function yw(r,e,t,n,i,s,o){const a=new Bg,l=new vw,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,T,P,F,k){const N=F.fog,z=k.geometry,G=w.isMeshStandardMaterial?F.environment:null,$=(w.isMeshStandardMaterial?t:e).get(w.envMap||G),H=$&&$.mapping===$c?$.image.height:null,ne=m[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const I=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,re=I!==void 0?I.length:0;let Le=0;z.morphAttributes.position!==void 0&&(Le=1),z.morphAttributes.normal!==void 0&&(Le=2),z.morphAttributes.color!==void 0&&(Le=3);let Ge,j,ee,oe;if(ne){const Te=Wi[ne];Ge=Te.vertexShader,j=Te.fragmentShader}else Ge=w.vertexShader,j=w.fragmentShader,l.update(w),ee=l.getVertexShaderID(w),oe=l.getFragmentShaderID(w);const ie=r.getRenderTarget(),pe=r.state.buffers.depth.getReversed(),Ee=k.isInstancedMesh===!0,ye=k.isBatchedMesh===!0,et=!!w.map,tt=!!w.matcap,be=!!$,U=!!w.aoMap,Tt=!!w.lightMap,Ke=!!w.bumpMap,W=!!w.normalMap,Ae=!!w.displacementMap,mt=!!w.emissiveMap,Ie=!!w.metalnessMap,R=!!w.roughnessMap,E=w.anisotropy>0,q=w.clearcoat>0,Q=w.dispersion>0,te=w.iridescence>0,K=w.sheen>0,xe=w.transmission>0,ue=E&&!!w.anisotropyMap,Ue=q&&!!w.clearcoatMap,Oe=q&&!!w.clearcoatNormalMap,se=q&&!!w.clearcoatRoughnessMap,ce=te&&!!w.iridescenceMap,He=te&&!!w.iridescenceThicknessMap,ke=K&&!!w.sheenColorMap,le=K&&!!w.sheenRoughnessMap,nt=!!w.specularMap,qe=!!w.specularColorMap,rt=!!w.specularIntensityMap,O=xe&&!!w.transmissionMap,he=xe&&!!w.thicknessMap,Y=!!w.gradientMap,Z=!!w.alphaMap,de=w.alphaTest>0,me=!!w.alphaHash,je=!!w.extensions;let lt=qr;w.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(lt=r.toneMapping);const Ft={shaderID:ne,shaderType:w.type,shaderName:w.name,vertexShader:Ge,fragmentShader:j,defines:w.defines,customVertexShaderID:ee,customFragmentShaderID:oe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ye,batchingColor:ye&&k._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&k.instanceColor!==null,instancingMorph:Ee&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?r.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Io,alphaToCoverage:!!w.alphaToCoverage,map:et,matcap:tt,envMap:be,envMapMode:be&&$.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:Tt,bumpMap:Ke,normalMap:W,displacementMap:d&&Ae,emissiveMap:mt,normalMapObjectSpace:W&&w.normalMapType===hy,normalMapTangentSpace:W&&w.normalMapType===Ug,metalnessMap:Ie,roughnessMap:R,anisotropy:E,anisotropyMap:ue,clearcoat:q,clearcoatMap:Ue,clearcoatNormalMap:Oe,clearcoatRoughnessMap:se,dispersion:Q,iridescence:te,iridescenceMap:ce,iridescenceThicknessMap:He,sheen:K,sheenColorMap:ke,sheenRoughnessMap:le,specularMap:nt,specularColorMap:qe,specularIntensityMap:rt,transmission:xe,transmissionMap:O,thicknessMap:he,gradientMap:Y,opaque:w.transparent===!1&&w.blending===vo&&w.alphaToCoverage===!1,alphaMap:Z,alphaTest:de,alphaHash:me,combine:w.combine,mapUv:et&&_(w.map.channel),aoMapUv:U&&_(w.aoMap.channel),lightMapUv:Tt&&_(w.lightMap.channel),bumpMapUv:Ke&&_(w.bumpMap.channel),normalMapUv:W&&_(w.normalMap.channel),displacementMapUv:Ae&&_(w.displacementMap.channel),emissiveMapUv:mt&&_(w.emissiveMap.channel),metalnessMapUv:Ie&&_(w.metalnessMap.channel),roughnessMapUv:R&&_(w.roughnessMap.channel),anisotropyMapUv:ue&&_(w.anisotropyMap.channel),clearcoatMapUv:Ue&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:He&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:le&&_(w.sheenRoughnessMap.channel),specularMapUv:nt&&_(w.specularMap.channel),specularColorMapUv:qe&&_(w.specularColorMap.channel),specularIntensityMapUv:rt&&_(w.specularIntensityMap.channel),transmissionMapUv:O&&_(w.transmissionMap.channel),thicknessMapUv:he&&_(w.thicknessMap.channel),alphaMapUv:Z&&_(w.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(W||E),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!z.attributes.uv&&(et||Z),fog:!!N,useFog:w.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:pe,skinning:k.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Le,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:lt,decodeVideoTexture:et&&w.map.isVideoTexture===!0&&St.getTransfer(w.map.colorSpace)===Pt,decodeVideoTextureEmissive:mt&&w.emissiveMap.isVideoTexture===!0&&St.getTransfer(w.emissiveMap.colorSpace)===Pt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ur,flipSided:w.side===Zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:je&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&w.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function p(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)T.push(P),T.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(x(T,w),y(T,w),T.push(r.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function x(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function y(w,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const T=m[w.type];let P;if(T){const F=Wi[T];P=i1.clone(F.uniforms)}else P=w.uniforms;return P}function M(w,T){let P;for(let F=0,k=u.length;F<k;F++){const N=u[F];if(N.cacheKey===T){P=N,++P.usedTimes;break}}return P===void 0&&(P=new gw(r,T,w,s),u.push(P)),P}function b(w){if(--w.usedTimes===0){const T=u.indexOf(w);u[T]=u[u.length-1],u.pop(),w.destroy()}}function S(w){l.remove(w)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:M,releaseProgram:b,releaseShaderCache:S,programs:u,dispose:C}}function bw(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Sw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Cm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Rm(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,m,_,g){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function a(h,d,f,m,_,g){const p=o(h,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,m,_,g){const p=o(h,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||Sw),n.length>1&&n.sort(d||Cm),i.length>1&&i.sort(d||Cm)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Mw(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Rm,r.set(n,[o])):i>=s.length?(o=new Rm,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Tw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ze};break;case"SpotLight":t={position:new B,direction:new B,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function ww(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ew=0;function Aw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Cw(r){const e=new Tw,t=ww(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,s=new pt,o=new pt;function a(c){let u=0,h=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,x=0,y=0,v=0,M=0,b=0,S=0;c.sort(Aw);for(let w=0,T=c.length;w<T;w++){const P=c[w],F=P.color,k=P.intensity,N=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=F.r*k,h+=F.g*k,d+=F.b*k;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],k);S++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,H=t.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=G,f++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(F).multiplyScalar(k),G.distance=N,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;const $=P.shadow;if(P.map&&(n.spotLightMap[M]=P.map,M++,$.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[_]=$.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=z,v++}_++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(F).multiplyScalar(k),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=G,g++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const $=P.shadow,H=t.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=P.shadow.matrix,y++}n.point[m]=G,m++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(k),G.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[p]=G,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==m||C.spotLength!==_||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==M||C.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+M-b,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=S,C.directionalLength=f,C.pointLength=m,C.spotLength=_,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=M,C.numLightProbes=S,n.version=Ew++)}function l(c,u){let h=0,d=0,f=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),h++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Pm(r){const e=new Cw(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Rw(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Pm(r),e.set(i,[a])):s>=o.length?(a=new Pm(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Pw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lw=`uniform sampler2D shadow_pass;
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
}`;function Dw(r,e,t){let n=new uf;const i=new $e,s=new $e,o=new Mt,a=new U1({depthPacking:uy}),l=new N1,c={},u=t.maxTextureSize,h={[Yr]:Zn,[Zn]:Yr,[ur]:ur},d=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:Pw,fragmentShader:Lw}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Gn;m.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new di(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wg;let p=this.type;this.render=function(b,S,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const w=r.getRenderTarget(),T=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Wr),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=p!==or&&this.type===or,N=p===or&&this.type!==or;for(let z=0,G=b.length;z<G;z++){const $=b[z],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ne=H.getFrameExtents();if(i.multiply(ne),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ne.x),i.x=s.x*ne.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ne.y),i.y=s.y*ne.y,H.mapSize.y=s.y)),H.map===null||k===!0||N===!0){const re=this.type!==or?{minFilter:pi,magFilter:pi}:{};H.map!==null&&H.map.dispose(),H.map=new Ds(i.x,i.y,re),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const I=H.getViewportCount();for(let re=0;re<I;re++){const Le=H.getViewport(re);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),F.viewport(o),H.updateMatrices($,re),n=H.getFrustum(),v(S,C,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===or&&x(H,C),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(w,T,P)};function x(b,S){const C=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ds(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(S,null,C,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(S,null,C,f,_,null)}function y(b,S,C,w){let T=null;const P=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)T=P;else if(T=C.isPointLight===!0?l:a,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){const F=T.uuid,k=S.uuid;let N=c[F];N===void 0&&(N={},c[F]=N);let z=N[k];z===void 0&&(z=T.clone(),N[k]=z,S.addEventListener("dispose",M)),T=z}if(T.visible=S.visible,T.wireframe=S.wireframe,w===or?T.side=S.shadowSide!==null?S.shadowSide:S.side:T.side=S.shadowSide!==null?S.shadowSide:h[S.side],T.alphaMap=S.alphaMap,T.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,T.map=S.map,T.clipShadows=S.clipShadows,T.clippingPlanes=S.clippingPlanes,T.clipIntersection=S.clipIntersection,T.displacementMap=S.displacementMap,T.displacementScale=S.displacementScale,T.displacementBias=S.displacementBias,T.wireframeLinewidth=S.wireframeLinewidth,T.linewidth=S.linewidth,C.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const F=r.properties.get(T);F.light=C}return T}function v(b,S,C,w,T){if(b.visible===!1)return;if(b.layers.test(S.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===or)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const k=e.update(b),N=b.material;if(Array.isArray(N)){const z=k.groups;for(let G=0,$=z.length;G<$;G++){const H=z[G],ne=N[H.materialIndex];if(ne&&ne.visible){const I=y(b,ne,w,T);b.onBeforeShadow(r,b,S,C,k,I,H),r.renderBufferDirect(C,null,k,I,b,H),b.onAfterShadow(r,b,S,C,k,I,H)}}}else if(N.visible){const z=y(b,N,w,T);b.onBeforeShadow(r,b,S,C,k,z,null),r.renderBufferDirect(C,null,k,z,b,null),b.onAfterShadow(r,b,S,C,k,z,null)}}const F=b.children;for(let k=0,N=F.length;k<N;k++)v(F[k],S,C,w,T)}function M(b){b.target.removeEventListener("dispose",M);for(const C in c){const w=c[C],T=b.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}const Iw={[Dh]:Ih,[Fh]:Oh,[Uh]:kh,[Po]:Nh,[Ih]:Dh,[Oh]:Fh,[kh]:Uh,[Nh]:Po};function Fw(r,e){function t(){let O=!1;const he=new Mt;let Y=null;const Z=new Mt(0,0,0,0);return{setMask:function(de){Y!==de&&!O&&(r.colorMask(de,de,de,de),Y=de)},setLocked:function(de){O=de},setClear:function(de,me,je,lt,Ft){Ft===!0&&(de*=lt,me*=lt,je*=lt),he.set(de,me,je,lt),Z.equals(he)===!1&&(r.clearColor(de,me,je,lt),Z.copy(he))},reset:function(){O=!1,Y=null,Z.set(-1,0,0,0)}}}function n(){let O=!1,he=!1,Y=null,Z=null,de=null;return{setReversed:function(me){if(he!==me){const je=e.get("EXT_clip_control");me?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),he=me;const lt=de;de=null,this.setClear(lt)}},getReversed:function(){return he},setTest:function(me){me?ie(r.DEPTH_TEST):pe(r.DEPTH_TEST)},setMask:function(me){Y!==me&&!O&&(r.depthMask(me),Y=me)},setFunc:function(me){if(he&&(me=Iw[me]),Z!==me){switch(me){case Dh:r.depthFunc(r.NEVER);break;case Ih:r.depthFunc(r.ALWAYS);break;case Fh:r.depthFunc(r.LESS);break;case Po:r.depthFunc(r.LEQUAL);break;case Uh:r.depthFunc(r.EQUAL);break;case Nh:r.depthFunc(r.GEQUAL);break;case Oh:r.depthFunc(r.GREATER);break;case kh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=me}},setLocked:function(me){O=me},setClear:function(me){de!==me&&(he&&(me=1-me),r.clearDepth(me),de=me)},reset:function(){O=!1,Y=null,Z=null,de=null,he=!1}}}function i(){let O=!1,he=null,Y=null,Z=null,de=null,me=null,je=null,lt=null,Ft=null;return{setTest:function(Te){O||(Te?ie(r.STENCIL_TEST):pe(r.STENCIL_TEST))},setMask:function(Te){he!==Te&&!O&&(r.stencilMask(Te),he=Te)},setFunc:function(Te,Re,Ye){(Y!==Te||Z!==Re||de!==Ye)&&(r.stencilFunc(Te,Re,Ye),Y=Te,Z=Re,de=Ye)},setOp:function(Te,Re,Ye){(me!==Te||je!==Re||lt!==Ye)&&(r.stencilOp(Te,Re,Ye),me=Te,je=Re,lt=Ye)},setLocked:function(Te){O=Te},setClear:function(Te){Ft!==Te&&(r.clearStencil(Te),Ft=Te)},reset:function(){O=!1,he=null,Y=null,Z=null,de=null,me=null,je=null,lt=null,Ft=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,x=null,y=null,v=null,M=null,b=null,S=new Ze(0,0,0),C=0,w=!1,T=null,P=null,F=null,k=null,N=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,$=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=$>=2);let ne=null,I={};const re=r.getParameter(r.SCISSOR_BOX),Le=r.getParameter(r.VIEWPORT),Ge=new Mt().fromArray(re),j=new Mt().fromArray(Le);function ee(O,he,Y,Z){const de=new Uint8Array(4),me=r.createTexture();r.bindTexture(O,me),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<Y;je++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,de):r.texImage2D(he+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,de);return me}const oe={};oe[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),oe[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),oe[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(r.DEPTH_TEST),o.setFunc(Po),Ke(!1),W(fp),ie(r.CULL_FACE),U(Wr);function ie(O){u[O]!==!0&&(r.enable(O),u[O]=!0)}function pe(O){u[O]!==!1&&(r.disable(O),u[O]=!1)}function Ee(O,he){return h[O]!==he?(r.bindFramebuffer(O,he),h[O]=he,O===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=he),O===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=he),!0):!1}function ye(O,he){let Y=f,Z=!1;if(O){Y=d.get(he),Y===void 0&&(Y=[],d.set(he,Y));const de=O.textures;if(Y.length!==de.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let me=0,je=de.length;me<je;me++)Y[me]=r.COLOR_ATTACHMENT0+me;Y.length=de.length,Z=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,Z=!0);Z&&r.drawBuffers(Y)}function et(O){return m!==O?(r.useProgram(O),m=O,!0):!1}const tt={[ds]:r.FUNC_ADD,[Fx]:r.FUNC_SUBTRACT,[Ux]:r.FUNC_REVERSE_SUBTRACT};tt[Nx]=r.MIN,tt[Ox]=r.MAX;const be={[kx]:r.ZERO,[Bx]:r.ONE,[zx]:r.SRC_COLOR,[Ph]:r.SRC_ALPHA,[Xx]:r.SRC_ALPHA_SATURATE,[Wx]:r.DST_COLOR,[Vx]:r.DST_ALPHA,[Hx]:r.ONE_MINUS_SRC_COLOR,[Lh]:r.ONE_MINUS_SRC_ALPHA,[qx]:r.ONE_MINUS_DST_COLOR,[Gx]:r.ONE_MINUS_DST_ALPHA,[jx]:r.CONSTANT_COLOR,[$x]:r.ONE_MINUS_CONSTANT_COLOR,[Yx]:r.CONSTANT_ALPHA,[Jx]:r.ONE_MINUS_CONSTANT_ALPHA};function U(O,he,Y,Z,de,me,je,lt,Ft,Te){if(O===Wr){_===!0&&(pe(r.BLEND),_=!1);return}if(_===!1&&(ie(r.BLEND),_=!0),O!==Ix){if(O!==g||Te!==w){if((p!==ds||v!==ds)&&(r.blendEquation(r.FUNC_ADD),p=ds,v=ds),Te)switch(O){case vo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case co:r.blendFunc(r.ONE,r.ONE);break;case pp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case mp:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case vo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case co:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case pp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case mp:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,y=null,M=null,b=null,S.set(0,0,0),C=0,g=O,w=Te}return}de=de||he,me=me||Y,je=je||Z,(he!==p||de!==v)&&(r.blendEquationSeparate(tt[he],tt[de]),p=he,v=de),(Y!==x||Z!==y||me!==M||je!==b)&&(r.blendFuncSeparate(be[Y],be[Z],be[me],be[je]),x=Y,y=Z,M=me,b=je),(lt.equals(S)===!1||Ft!==C)&&(r.blendColor(lt.r,lt.g,lt.b,Ft),S.copy(lt),C=Ft),g=O,w=!1}function Tt(O,he){O.side===ur?pe(r.CULL_FACE):ie(r.CULL_FACE);let Y=O.side===Zn;he&&(Y=!Y),Ke(Y),O.blending===vo&&O.transparent===!1?U(Wr):U(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const Z=O.stencilWrite;a.setTest(Z),Z&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),mt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ie(r.SAMPLE_ALPHA_TO_COVERAGE):pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(O){T!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),T=O)}function W(O){O!==Px?(ie(r.CULL_FACE),O!==P&&(O===fp?r.cullFace(r.BACK):O===Lx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pe(r.CULL_FACE),P=O}function Ae(O){O!==F&&(G&&r.lineWidth(O),F=O)}function mt(O,he,Y){O?(ie(r.POLYGON_OFFSET_FILL),(k!==he||N!==Y)&&(r.polygonOffset(he,Y),k=he,N=Y)):pe(r.POLYGON_OFFSET_FILL)}function Ie(O){O?ie(r.SCISSOR_TEST):pe(r.SCISSOR_TEST)}function R(O){O===void 0&&(O=r.TEXTURE0+z-1),ne!==O&&(r.activeTexture(O),ne=O)}function E(O,he,Y){Y===void 0&&(ne===null?Y=r.TEXTURE0+z-1:Y=ne);let Z=I[Y];Z===void 0&&(Z={type:void 0,texture:void 0},I[Y]=Z),(Z.type!==O||Z.texture!==he)&&(ne!==Y&&(r.activeTexture(Y),ne=Y),r.bindTexture(O,he||oe[O]),Z.type=O,Z.texture=he)}function q(){const O=I[ne];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Q(){try{r.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{r.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{r.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{r.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{r.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(){try{r.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{r.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{r.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{r.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(){try{r.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(O){Ge.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),Ge.copy(O))}function le(O){j.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),j.copy(O))}function nt(O,he){let Y=c.get(he);Y===void 0&&(Y=new WeakMap,c.set(he,Y));let Z=Y.get(O);Z===void 0&&(Z=r.getUniformBlockIndex(he,O.name),Y.set(O,Z))}function qe(O,he){const Z=c.get(he).get(O);l.get(he)!==Z&&(r.uniformBlockBinding(he,Z,O.__bindingPointIndex),l.set(he,Z))}function rt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ne=null,I={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,x=null,y=null,v=null,M=null,b=null,S=new Ze(0,0,0),C=0,w=!1,T=null,P=null,F=null,k=null,N=null,Ge.set(0,0,r.canvas.width,r.canvas.height),j.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:pe,bindFramebuffer:Ee,drawBuffers:ye,useProgram:et,setBlending:U,setMaterial:Tt,setFlipSided:Ke,setCullFace:W,setLineWidth:Ae,setPolygonOffset:mt,setScissorTest:Ie,activeTexture:R,bindTexture:E,unbindTexture:q,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:ce,texImage3D:He,updateUBOMapping:nt,uniformBlockBinding:qe,texStorage2D:Oe,texStorage3D:se,texSubImage2D:K,texSubImage3D:xe,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ue,scissor:ke,viewport:le,reset:rt}}function Uw(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,E){return f?new OffscreenCanvas(R,E):Ya("canvas")}function _(R,E,q){let Q=1;const te=Ie(R);if((te.width>q||te.height>q)&&(Q=q/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Q*te.width),xe=Math.floor(Q*te.height);h===void 0&&(h=m(K,xe));const ue=E?m(K,xe):h;return ue.width=K,ue.height=xe,ue.getContext("2d").drawImage(R,0,0,K,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+xe+")."),ue}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(R,E,q,Q,te=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=E;if(E===r.RED&&(q===r.FLOAT&&(K=r.R32F),q===r.HALF_FLOAT&&(K=r.R16F),q===r.UNSIGNED_BYTE&&(K=r.R8)),E===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(K=r.R8UI),q===r.UNSIGNED_SHORT&&(K=r.R16UI),q===r.UNSIGNED_INT&&(K=r.R32UI),q===r.BYTE&&(K=r.R8I),q===r.SHORT&&(K=r.R16I),q===r.INT&&(K=r.R32I)),E===r.RG&&(q===r.FLOAT&&(K=r.RG32F),q===r.HALF_FLOAT&&(K=r.RG16F),q===r.UNSIGNED_BYTE&&(K=r.RG8)),E===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(K=r.RG8UI),q===r.UNSIGNED_SHORT&&(K=r.RG16UI),q===r.UNSIGNED_INT&&(K=r.RG32UI),q===r.BYTE&&(K=r.RG8I),q===r.SHORT&&(K=r.RG16I),q===r.INT&&(K=r.RG32I)),E===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(K=r.RGB8UI),q===r.UNSIGNED_SHORT&&(K=r.RGB16UI),q===r.UNSIGNED_INT&&(K=r.RGB32UI),q===r.BYTE&&(K=r.RGB8I),q===r.SHORT&&(K=r.RGB16I),q===r.INT&&(K=r.RGB32I)),E===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),q===r.UNSIGNED_INT&&(K=r.RGBA32UI),q===r.BYTE&&(K=r.RGBA8I),q===r.SHORT&&(K=r.RGBA16I),q===r.INT&&(K=r.RGBA32I)),E===r.RGB&&q===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),E===r.RGBA){const xe=te?Pc:St.getTransfer(Q);q===r.FLOAT&&(K=r.RGBA32F),q===r.HALF_FLOAT&&(K=r.RGBA16F),q===r.UNSIGNED_BYTE&&(K=xe===Pt?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(R,E){let q;return R?E===null||E===Ls||E===Xa?q=r.DEPTH24_STENCIL8:E===ki?q=r.DEPTH32F_STENCIL8:E===qa&&(q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ls||E===Xa?q=r.DEPTH_COMPONENT24:E===ki?q=r.DEPTH_COMPONENT32F:E===qa&&(q=r.DEPTH_COMPONENT16),q}function M(R,E){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==pi&&R.minFilter!==$i?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function b(R){const E=R.target;E.removeEventListener("dispose",b),C(E),E.isVideoTexture&&u.delete(E)}function S(R){const E=R.target;E.removeEventListener("dispose",S),T(E)}function C(R){const E=n.get(R);if(E.__webglInit===void 0)return;const q=R.source,Q=d.get(q);if(Q){const te=Q[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(R),Object.keys(Q).length===0&&d.delete(q)}n.remove(R)}function w(R){const E=n.get(R);r.deleteTexture(E.__webglTexture);const q=R.source,Q=d.get(q);delete Q[E.__cacheKey],o.memory.textures--}function T(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let te=0;te<E.__webglFramebuffer[Q].length;te++)r.deleteFramebuffer(E.__webglFramebuffer[Q][te]);else r.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)r.deleteFramebuffer(E.__webglFramebuffer[Q]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=R.textures;for(let Q=0,te=q.length;Q<te;Q++){const K=n.get(q[Q]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(q[Q])}n.remove(R)}let P=0;function F(){P=0}function k(){const R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function N(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function z(R,E){const q=n.get(R);if(R.isVideoTexture&&Ae(R),R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(q,R,E);return}}t.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+E)}function G(R,E){const q=n.get(R);if(R.version>0&&q.__version!==R.version){j(q,R,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+E)}function $(R,E){const q=n.get(R);if(R.version>0&&q.__version!==R.version){j(q,R,E);return}t.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+E)}function H(R,E){const q=n.get(R);if(R.version>0&&q.__version!==R.version){ee(q,R,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+E)}const ne={[Hh]:r.REPEAT,[_s]:r.CLAMP_TO_EDGE,[Vh]:r.MIRRORED_REPEAT},I={[pi]:r.NEAREST,[ay]:r.NEAREST_MIPMAP_NEAREST,[gl]:r.NEAREST_MIPMAP_LINEAR,[$i]:r.LINEAR,[_u]:r.LINEAR_MIPMAP_NEAREST,[vs]:r.LINEAR_MIPMAP_LINEAR},re={[dy]:r.NEVER,[vy]:r.ALWAYS,[fy]:r.LESS,[Ng]:r.LEQUAL,[py]:r.EQUAL,[_y]:r.GEQUAL,[my]:r.GREATER,[gy]:r.NOTEQUAL};function Le(R,E){if(E.type===ki&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===$i||E.magFilter===_u||E.magFilter===gl||E.magFilter===vs||E.minFilter===$i||E.minFilter===_u||E.minFilter===gl||E.minFilter===vs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ne[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ne[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ne[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,I[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,I[E.minFilter]),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===pi||E.minFilter!==gl&&E.minFilter!==vs||E.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ge(R,E){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",b));const Q=E.source;let te=d.get(Q);te===void 0&&(te={},d.set(Q,te));const K=N(E);if(K!==R.__cacheKey){te[K]===void 0&&(te[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,q=!0),te[K].usedTimes++;const xe=te[R.__cacheKey];xe!==void 0&&(te[R.__cacheKey].usedTimes--,xe.usedTimes===0&&w(E)),R.__cacheKey=K,R.__webglTexture=te[K].texture}return q}function j(R,E,q){let Q=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=r.TEXTURE_3D);const te=Ge(R,E),K=E.source;t.bindTexture(Q,R.__webglTexture,r.TEXTURE0+q);const xe=n.get(K);if(K.version!==xe.__version||te===!0){t.activeTexture(r.TEXTURE0+q);const ue=St.getPrimaries(St.workingColorSpace),Ue=E.colorSpace===Ir?null:St.getPrimaries(E.colorSpace),Oe=E.colorSpace===Ir||ue===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let se=_(E.image,!1,i.maxTextureSize);se=mt(E,se);const ce=s.convert(E.format,E.colorSpace),He=s.convert(E.type);let ke=y(E.internalFormat,ce,He,E.colorSpace,E.isVideoTexture);Le(Q,E);let le;const nt=E.mipmaps,qe=E.isVideoTexture!==!0,rt=xe.__version===void 0||te===!0,O=K.dataReady,he=M(E,se);if(E.isDepthTexture)ke=v(E.format===$a,E.type),rt&&(qe?t.texStorage2D(r.TEXTURE_2D,1,ke,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,ke,se.width,se.height,0,ce,He,null));else if(E.isDataTexture)if(nt.length>0){qe&&rt&&t.texStorage2D(r.TEXTURE_2D,he,ke,nt[0].width,nt[0].height);for(let Y=0,Z=nt.length;Y<Z;Y++)le=nt[Y],qe?O&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,le.width,le.height,ce,He,le.data):t.texImage2D(r.TEXTURE_2D,Y,ke,le.width,le.height,0,ce,He,le.data);E.generateMipmaps=!1}else qe?(rt&&t.texStorage2D(r.TEXTURE_2D,he,ke,se.width,se.height),O&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,ce,He,se.data)):t.texImage2D(r.TEXTURE_2D,0,ke,se.width,se.height,0,ce,He,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){qe&&rt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,ke,nt[0].width,nt[0].height,se.depth);for(let Y=0,Z=nt.length;Y<Z;Y++)if(le=nt[Y],E.format!==Ci)if(ce!==null)if(qe){if(O)if(E.layerUpdates.size>0){const de=om(le.width,le.height,E.format,E.type);for(const me of E.layerUpdates){const je=le.data.subarray(me*de/le.data.BYTES_PER_ELEMENT,(me+1)*de/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,me,le.width,le.height,1,ce,je)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,le.width,le.height,se.depth,ce,le.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,ke,le.width,le.height,se.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?O&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,le.width,le.height,se.depth,ce,He,le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Y,ke,le.width,le.height,se.depth,0,ce,He,le.data)}else{qe&&rt&&t.texStorage2D(r.TEXTURE_2D,he,ke,nt[0].width,nt[0].height);for(let Y=0,Z=nt.length;Y<Z;Y++)le=nt[Y],E.format!==Ci?ce!==null?qe?O&&t.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,le.width,le.height,ce,le.data):t.compressedTexImage2D(r.TEXTURE_2D,Y,ke,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?O&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,le.width,le.height,ce,He,le.data):t.texImage2D(r.TEXTURE_2D,Y,ke,le.width,le.height,0,ce,He,le.data)}else if(E.isDataArrayTexture)if(qe){if(rt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,ke,se.width,se.height,se.depth),O)if(E.layerUpdates.size>0){const Y=om(se.width,se.height,E.format,E.type);for(const Z of E.layerUpdates){const de=se.data.subarray(Z*Y/se.data.BYTES_PER_ELEMENT,(Z+1)*Y/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,se.width,se.height,1,ce,He,de)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ce,He,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ke,se.width,se.height,se.depth,0,ce,He,se.data);else if(E.isData3DTexture)qe?(rt&&t.texStorage3D(r.TEXTURE_3D,he,ke,se.width,se.height,se.depth),O&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ce,He,se.data)):t.texImage3D(r.TEXTURE_3D,0,ke,se.width,se.height,se.depth,0,ce,He,se.data);else if(E.isFramebufferTexture){if(rt)if(qe)t.texStorage2D(r.TEXTURE_2D,he,ke,se.width,se.height);else{let Y=se.width,Z=se.height;for(let de=0;de<he;de++)t.texImage2D(r.TEXTURE_2D,de,ke,Y,Z,0,ce,He,null),Y>>=1,Z>>=1}}else if(nt.length>0){if(qe&&rt){const Y=Ie(nt[0]);t.texStorage2D(r.TEXTURE_2D,he,ke,Y.width,Y.height)}for(let Y=0,Z=nt.length;Y<Z;Y++)le=nt[Y],qe?O&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,ce,He,le):t.texImage2D(r.TEXTURE_2D,Y,ke,ce,He,le);E.generateMipmaps=!1}else if(qe){if(rt){const Y=Ie(se);t.texStorage2D(r.TEXTURE_2D,he,ke,Y.width,Y.height)}O&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ce,He,se)}else t.texImage2D(r.TEXTURE_2D,0,ke,ce,He,se);g(E)&&p(Q),xe.__version=K.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ee(R,E,q){if(E.image.length!==6)return;const Q=Ge(R,E),te=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+q);const K=n.get(te);if(te.version!==K.__version||Q===!0){t.activeTexture(r.TEXTURE0+q);const xe=St.getPrimaries(St.workingColorSpace),ue=E.colorSpace===Ir?null:St.getPrimaries(E.colorSpace),Ue=E.colorSpace===Ir||xe===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const Oe=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,ce=[];for(let Z=0;Z<6;Z++)!Oe&&!se?ce[Z]=_(E.image[Z],!0,i.maxCubemapSize):ce[Z]=se?E.image[Z].image:E.image[Z],ce[Z]=mt(E,ce[Z]);const He=ce[0],ke=s.convert(E.format,E.colorSpace),le=s.convert(E.type),nt=y(E.internalFormat,ke,le,E.colorSpace),qe=E.isVideoTexture!==!0,rt=K.__version===void 0||Q===!0,O=te.dataReady;let he=M(E,He);Le(r.TEXTURE_CUBE_MAP,E);let Y;if(Oe){qe&&rt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,he,nt,He.width,He.height);for(let Z=0;Z<6;Z++){Y=ce[Z].mipmaps;for(let de=0;de<Y.length;de++){const me=Y[de];E.format!==Ci?ke!==null?qe?O&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,0,0,me.width,me.height,ke,me.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,nt,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,0,0,me.width,me.height,ke,le,me.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,nt,me.width,me.height,0,ke,le,me.data)}}}else{if(Y=E.mipmaps,qe&&rt){Y.length>0&&he++;const Z=Ie(ce[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,he,nt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(se){qe?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ce[Z].width,ce[Z].height,ke,le,ce[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,nt,ce[Z].width,ce[Z].height,0,ke,le,ce[Z].data);for(let de=0;de<Y.length;de++){const je=Y[de].image[Z].image;qe?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,0,0,je.width,je.height,ke,le,je.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,nt,je.width,je.height,0,ke,le,je.data)}}else{qe?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ke,le,ce[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,nt,ke,le,ce[Z]);for(let de=0;de<Y.length;de++){const me=Y[de];qe?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,0,0,ke,le,me.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,nt,ke,le,me.image[Z])}}}g(E)&&p(r.TEXTURE_CUBE_MAP),K.__version=te.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function oe(R,E,q,Q,te,K){const xe=s.convert(q.format,q.colorSpace),ue=s.convert(q.type),Ue=y(q.internalFormat,xe,ue,q.colorSpace),Oe=n.get(E),se=n.get(q);if(se.__renderTarget=E,!Oe.__hasExternalTextures){const ce=Math.max(1,E.width>>K),He=Math.max(1,E.height>>K);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,K,Ue,ce,He,E.depth,0,xe,ue,null):t.texImage2D(te,K,Ue,ce,He,0,xe,ue,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),W(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,te,se.__webglTexture,0,Ke(E)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,te,se.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ie(R,E,q){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer){const Q=E.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,K=v(E.stencilBuffer,te),xe=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=Ke(E);W(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue,K,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,K,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,K,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,R)}else{const Q=E.textures;for(let te=0;te<Q.length;te++){const K=Q[te],xe=s.convert(K.format,K.colorSpace),ue=s.convert(K.type),Ue=y(K.internalFormat,xe,ue,K.colorSpace),Oe=Ke(E);q&&W(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,Ue,E.width,E.height):W(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Oe,Ue,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ue,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pe(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);const te=Q.__webglTexture,K=Ke(E);if(E.depthTexture.format===ja)W(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(E.depthTexture.format===$a)W(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ee(R){const E=n.get(R),q=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=Q}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const Q=R.texture.mipmaps;Q&&Q.length>0?pe(E.__webglFramebuffer[0],R):pe(E.__webglFramebuffer,R)}else if(q){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=r.createRenderbuffer(),ie(E.__webglDepthbuffer[Q],R,!1);else{const te=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,K)}}else{const Q=R.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),ie(E.__webglDepthbuffer,R,!1);else{const te=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,K)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ye(R,E,q){const Q=n.get(R);E!==void 0&&oe(Q.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&Ee(R)}function et(R){const E=R.texture,q=n.get(R),Q=n.get(E);R.addEventListener("dispose",S);const te=R.textures,K=R.isWebGLCubeRenderTarget===!0,xe=te.length>1;if(xe||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=E.version,o.memory.textures++),K){q.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[ue]=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)q.__webglFramebuffer[ue][Ue]=r.createFramebuffer()}else q.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)q.__webglFramebuffer[ue]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(xe)for(let ue=0,Ue=te.length;ue<Ue;ue++){const Oe=n.get(te[ue]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&W(R)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const Ue=te[ue];q.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[ue]);const Oe=s.convert(Ue.format,Ue.colorSpace),se=s.convert(Ue.type),ce=y(Ue.internalFormat,Oe,se,Ue.colorSpace,R.isXRRenderTarget===!0),He=Ke(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,He,ce,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,q.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),ie(q.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Le(r.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)oe(q.__webglFramebuffer[ue][Ue],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue);else oe(q.__webglFramebuffer[ue],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(E)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ue=0,Ue=te.length;ue<Ue;ue++){const Oe=te[ue],se=n.get(Oe);t.bindTexture(r.TEXTURE_2D,se.__webglTexture),Le(r.TEXTURE_2D,Oe),oe(q.__webglFramebuffer,R,Oe,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,0),g(Oe)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let ue=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,Q.__webglTexture),Le(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)oe(q.__webglFramebuffer[Ue],R,E,r.COLOR_ATTACHMENT0,ue,Ue);else oe(q.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,ue,0);g(E)&&p(ue),t.unbindTexture()}R.depthBuffer&&Ee(R)}function tt(R){const E=R.textures;for(let q=0,Q=E.length;q<Q;q++){const te=E[q];if(g(te)){const K=x(R),xe=n.get(te).__webglTexture;t.bindTexture(K,xe),p(K),t.unbindTexture()}}}const be=[],U=[];function Tt(R){if(R.samples>0){if(W(R)===!1){const E=R.textures,q=R.width,Q=R.height;let te=r.COLOR_BUFFER_BIT;const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=n.get(R),ue=E.length>1;if(ue)for(let Oe=0;Oe<E.length;Oe++)t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Ue=R.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Oe=0;Oe<E.length;Oe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xe.__webglColorRenderbuffer[Oe]);const se=n.get(E[Oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,se,0)}r.blitFramebuffer(0,0,q,Q,0,0,q,Q,te,r.NEAREST),l===!0&&(be.length=0,U.length=0,be.push(r.COLOR_ATTACHMENT0+Oe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(be.push(K),U.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let Oe=0;Oe<E.length;Oe++){t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,xe.__webglColorRenderbuffer[Oe]);const se=n.get(E[Oe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Ke(R){return Math.min(i.maxSamples,R.samples)}function W(R){const E=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ae(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function mt(R,E){const q=R.colorSpace,Q=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||q!==Io&&q!==Ir&&(St.getTransfer(q)===Pt?(Q!==Ci||te!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}function Ie(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=z,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=ye,this.setupRenderTarget=et,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=W}function Nw(r,e){function t(n,i=Ir){let s;const o=St.getTransfer(i);if(n===Ki)return r.UNSIGNED_BYTE;if(n===tf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===nf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Pg)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Cg)return r.BYTE;if(n===Rg)return r.SHORT;if(n===qa)return r.UNSIGNED_SHORT;if(n===ef)return r.INT;if(n===Ls)return r.UNSIGNED_INT;if(n===ki)return r.FLOAT;if(n===Za)return r.HALF_FLOAT;if(n===Lg)return r.ALPHA;if(n===Dg)return r.RGB;if(n===Ci)return r.RGBA;if(n===ja)return r.DEPTH_COMPONENT;if(n===$a)return r.DEPTH_STENCIL;if(n===rf)return r.RED;if(n===sf)return r.RED_INTEGER;if(n===Ig)return r.RG;if(n===of)return r.RG_INTEGER;if(n===af)return r.RGBA_INTEGER;if(n===oc||n===ac||n===lc||n===cc)if(o===Pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===oc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===oc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ac)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gh||n===Wh||n===qh||n===Xh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jh||n===$h||n===Yh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===jh||n===$h)return o===Pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Yh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jh||n===Kh||n===Zh||n===Qh||n===ed||n===td||n===nd||n===id||n===rd||n===sd||n===od||n===ad||n===ld||n===cd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Jh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ed)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===td)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nd)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===id)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rd)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sd)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===od)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ad)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ld)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cd)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uc||n===ud||n===hd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===uc)return o===Pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ud)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fg||n===dd||n===fd||n===pd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===uc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===dd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xa?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Ow=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Dn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ri({vertexShader:Ow,fragmentShader:kw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new di(new el(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zw extends ko{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null;const _=new Bw,g=t.getContextAttributes();let p=null,x=null;const y=[],v=[],M=new $e;let b=null;const S=new Xn;S.viewport=new Mt;const C=new Xn;C.viewport=new Mt;const w=[S,C],T=new Z1;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=y[j];return ee===void 0&&(ee=new ku,y[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=y[j];return ee===void 0&&(ee=new ku,y[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=y[j];return ee===void 0&&(ee=new ku,y[j]=ee),ee.getHandSpace()};function k(j){const ee=v.indexOf(j.inputSource);if(ee===-1)return;const oe=y[ee];oe!==void 0&&(oe.update(j.inputSource,j.frame,c||o),oe.dispatchEvent({type:j.type,data:j.inputSource}))}function N(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",z);for(let j=0;j<y.length;j++){const ee=v[j];ee!==null&&(v[j]=null,y[j].disconnect(ee))}P=null,F=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,i=null,x=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",N),i.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(M),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,ie=null,pe=null;g.depth&&(pe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=g.stencil?$a:ja,ie=g.stencil?Xa:Ls);const Ee={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Ee),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Ds(d.textureWidth,d.textureHeight,{format:Ci,type:Ki,depthTexture:new Zg(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const oe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ds(f.framebufferWidth,f.framebufferHeight,{format:Ci,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ge.setContext(i),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(j){for(let ee=0;ee<j.removed.length;ee++){const oe=j.removed[ee],ie=v.indexOf(oe);ie>=0&&(v[ie]=null,y[ie].disconnect(oe))}for(let ee=0;ee<j.added.length;ee++){const oe=j.added[ee];let ie=v.indexOf(oe);if(ie===-1){for(let Ee=0;Ee<y.length;Ee++)if(Ee>=v.length){v.push(oe),ie=Ee;break}else if(v[Ee]===null){v[Ee]=oe,ie=Ee;break}if(ie===-1)break}const pe=y[ie];pe&&pe.connect(oe)}}const G=new B,$=new B;function H(j,ee,oe){G.setFromMatrixPosition(ee.matrixWorld),$.setFromMatrixPosition(oe.matrixWorld);const ie=G.distanceTo($),pe=ee.projectionMatrix.elements,Ee=oe.projectionMatrix.elements,ye=pe[14]/(pe[10]-1),et=pe[14]/(pe[10]+1),tt=(pe[9]+1)/pe[5],be=(pe[9]-1)/pe[5],U=(pe[8]-1)/pe[0],Tt=(Ee[8]+1)/Ee[0],Ke=ye*U,W=ye*Tt,Ae=ie/(-U+Tt),mt=Ae*-U;if(ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(mt),j.translateZ(Ae),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),pe[10]===-1)j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Ie=ye+Ae,R=et+Ae,E=Ke-mt,q=W+(ie-mt),Q=tt*et/R*Ie,te=be*et/R*Ie;j.projectionMatrix.makePerspective(E,q,Q,te,Ie,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ne(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ee=j.near,oe=j.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(oe=_.depthFar)),T.near=C.near=S.near=ee,T.far=C.far=S.far=oe,(P!==T.near||F!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,F=T.far),S.layers.mask=j.layers.mask|2,C.layers.mask=j.layers.mask|4,T.layers.mask=S.layers.mask|C.layers.mask;const ie=j.parent,pe=T.cameras;ne(T,ie);for(let Ee=0;Ee<pe.length;Ee++)ne(pe[Ee],ie);pe.length===2?H(T,S,C):T.projectionMatrix.copy(S.projectionMatrix),I(j,T,ie)};function I(j,ee,oe){oe===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(oe.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Fo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(T)};let re=null;function Le(j,ee){if(u=ee.getViewerPose(c||o),m=ee,u!==null){const oe=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ie=!1;oe.length!==T.cameras.length&&(T.cameras.length=0,ie=!0);for(let ye=0;ye<oe.length;ye++){const et=oe[ye];let tt=null;if(f!==null)tt=f.getViewport(et);else{const U=h.getViewSubImage(d,et);tt=U.viewport,ye===0&&(e.setRenderTargetTextures(x,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(x))}let be=w[ye];be===void 0&&(be=new Xn,be.layers.enable(ye),be.viewport=new Mt,w[ye]=be),be.matrix.fromArray(et.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(et.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(tt.x,tt.y,tt.width,tt.height),ye===0&&(T.matrix.copy(be.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ie===!0&&T.cameras.push(be)}const pe=i.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const ye=h.getDepthInformation(oe[0]);ye&&ye.isValid&&ye.texture&&_.init(e,ye,i.renderState)}}for(let oe=0;oe<y.length;oe++){const ie=v[oe],pe=y[oe];ie!==null&&pe!==void 0&&pe.update(ie,ee,c||o)}re&&re(j,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),m=null}const Ge=new o_;Ge.setAnimationLoop(Le),this.setAnimationLoop=function(j){re=j},this.dispose=function(){}}}const os=new Zi,Hw=new pt;function Vw(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Wg(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Zn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Zn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,v=x.envMapRotation;y&&(g.envMap.value=y,os.copy(v),os.x*=-1,os.y*=-1,os.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),g.envMapRotation.value.setFromMatrix4(Hw.makeRotationFromEuler(os)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gw(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(m(x),v=u(x),i[x.id]=v,x.addEventListener("dispose",g));const M=y.program;n.updateUBOMapping(x,M);const b=e.render.frame;s[x.id]!==b&&(d(x),s[x.id]=b)}function u(x){const y=h();x.__bindingPointIndex=y;const v=r.createBuffer(),M=x.__size,b=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,M,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=i[x.id],v=x.uniforms,M=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let b=0,S=v.length;b<S;b++){const C=Array.isArray(v[b])?v[b]:[v[b]];for(let w=0,T=C.length;w<T;w++){const P=C[w];if(f(P,b,w,M)===!0){const F=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let N=0;for(let z=0;z<k.length;z++){const G=k[z],$=_(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,F+N,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,N),N+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,y,v,M){const b=x.value,S=y+"_"+v;if(M[S]===void 0)return typeof b=="number"||typeof b=="boolean"?M[S]=b:M[S]=b.clone(),!0;{const C=M[S];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return M[S]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function m(x){const y=x.uniforms;let v=0;const M=16;for(let S=0,C=y.length;S<C;S++){const w=Array.isArray(y[S])?y[S]:[y[S]];for(let T=0,P=w.length;T<P;T++){const F=w[T],k=Array.isArray(F.value)?F.value:[F.value];for(let N=0,z=k.length;N<z;N++){const G=k[N],$=_(G),H=v%M,ne=H%$.boundary,I=H+ne;v+=ne,I!==0&&M-I<$.storage&&(v+=M-I),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=$.storage}}}const b=v%M;return b>0&&(v+=M-b),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Ww{constructor(e={}){const{canvas:t=Uy(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let M=!1;this._outputColorSpace=Si;let b=0,S=0,C=null,w=-1,T=null;const P=new Mt,F=new Mt;let k=null;const N=new Ze(0);let z=0,G=t.width,$=t.height,H=1,ne=null,I=null;const re=new Mt(0,0,G,$),Le=new Mt(0,0,G,$);let Ge=!1;const j=new uf;let ee=!1,oe=!1;const ie=new pt,pe=new pt,Ee=new B,ye=new Mt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function be(){return C===null?H:1}let U=n;function Tt(A,V){return t.getContext(A,V)}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qd}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",me,!1),U===null){const V="webgl2";if(U=Tt(V,A),U===null)throw Tt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ke,W,Ae,mt,Ie,R,E,q,Q,te,K,xe,ue,Ue,Oe,se,ce,He,ke,le,nt,qe,rt,O;function he(){Ke=new eT(U),Ke.init(),qe=new Nw(U,Ke),W=new jM(U,Ke,e,qe),Ae=new Fw(U,Ke),W.reverseDepthBuffer&&d&&Ae.buffers.depth.setReversed(!0),mt=new iT(U),Ie=new bw,R=new Uw(U,Ke,Ae,Ie,W,qe,mt),E=new YM(v),q=new QM(v),Q=new cb(U),rt=new qM(U,Q),te=new tT(U,Q,mt,rt),K=new sT(U,te,Q,mt),ke=new rT(U,W,R),se=new $M(Ie),xe=new yw(v,E,q,Ke,W,rt,se),ue=new Vw(v,Ie),Ue=new Mw,Oe=new Rw(Ke),He=new WM(v,E,q,Ae,K,f,l),ce=new Dw(v,K,W),O=new Gw(U,mt,W,Ae),le=new XM(U,Ke,mt),nt=new nT(U,Ke,mt),mt.programs=xe.programs,v.capabilities=W,v.extensions=Ke,v.properties=Ie,v.renderLists=Ue,v.shadowMap=ce,v.state=Ae,v.info=mt}he();const Y=new zw(v,U);this.xr=Y,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=Ke.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ke.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(G,$,!1))},this.getSize=function(A){return A.set(G,$)},this.setSize=function(A,V,X=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,$=V,t.width=Math.floor(A*H),t.height=Math.floor(V*H),X===!0&&(t.style.width=A+"px",t.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(G*H,$*H).floor()},this.setDrawingBufferSize=function(A,V,X){G=A,$=V,H=X,t.width=Math.floor(A*X),t.height=Math.floor(V*X),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(re)},this.setViewport=function(A,V,X,L){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,V,X,L),Ae.viewport(P.copy(re).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(Le)},this.setScissor=function(A,V,X,L){A.isVector4?Le.set(A.x,A.y,A.z,A.w):Le.set(A,V,X,L),Ae.scissor(F.copy(Le).multiplyScalar(H).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(A){Ae.setScissorTest(Ge=A)},this.setOpaqueSort=function(A){ne=A},this.setTransparentSort=function(A){I=A},this.getClearColor=function(A){return A.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,X=!0){let L=0;if(A){let D=!1;if(C!==null){const J=C.texture.format;D=J===af||J===of||J===sf}if(D){const J=C.texture.type,ae=J===Ki||J===Ls||J===qa||J===Xa||J===tf||J===nf,Me=He.getClearColor(),_e=He.getClearAlpha(),Ce=Me.r,Pe=Me.g,Se=Me.b;ae?(m[0]=Ce,m[1]=Pe,m[2]=Se,m[3]=_e,U.clearBufferuiv(U.COLOR,0,m)):(_[0]=Ce,_[1]=Pe,_[2]=Se,_[3]=_e,U.clearBufferiv(U.COLOR,0,_))}else L|=U.COLOR_BUFFER_BIT}V&&(L|=U.DEPTH_BUFFER_BIT),X&&(L|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",me,!1),He.dispose(),Ue.dispose(),Oe.dispose(),Ie.dispose(),E.dispose(),q.dispose(),K.dispose(),rt.dispose(),O.dispose(),xe.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",ge),Y.removeEventListener("sessionend",Je),Fe.stop()};function Z(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=mt.autoReset,V=ce.enabled,X=ce.autoUpdate,L=ce.needsUpdate,D=ce.type;he(),mt.autoReset=A,ce.enabled=V,ce.autoUpdate=X,ce.needsUpdate=L,ce.type=D}function me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function je(A){const V=A.target;V.removeEventListener("dispose",je),lt(V)}function lt(A){Ft(A),Ie.remove(A)}function Ft(A){const V=Ie.get(A).programs;V!==void 0&&(V.forEach(function(X){xe.releaseProgram(X)}),A.isShaderMaterial&&xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,X,L,D,J){V===null&&(V=et);const ae=D.isMesh&&D.matrixWorld.determinant()<0,Me=yn(A,V,X,L,D);Ae.setMaterial(L,ae);let _e=X.index,Ce=1;if(L.wireframe===!0){if(_e=te.getWireframeAttribute(X),_e===void 0)return;Ce=2}const Pe=X.drawRange,Se=X.attributes.position;let Ne=Pe.start*Ce,it=(Pe.start+Pe.count)*Ce;J!==null&&(Ne=Math.max(Ne,J.start*Ce),it=Math.min(it,(J.start+J.count)*Ce)),_e!==null?(Ne=Math.max(Ne,0),it=Math.min(it,_e.count)):Se!=null&&(Ne=Math.max(Ne,0),it=Math.min(it,Se.count));const Ht=it-Ne;if(Ht<0||Ht===1/0)return;rt.setup(D,L,Me,X,_e);let Ot,_t=le;if(_e!==null&&(Ot=Q.get(_e),_t=nt,_t.setIndex(Ot)),D.isMesh)L.wireframe===!0?(Ae.setLineWidth(L.wireframeLinewidth*be()),_t.setMode(U.LINES)):_t.setMode(U.TRIANGLES);else if(D.isLine){let We=L.linewidth;We===void 0&&(We=1),Ae.setLineWidth(We*be()),D.isLineSegments?_t.setMode(U.LINES):D.isLineLoop?_t.setMode(U.LINE_LOOP):_t.setMode(U.LINE_STRIP)}else D.isPoints?_t.setMode(U.POINTS):D.isSprite&&_t.setMode(U.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)hc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))_t.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const We=D._multiDrawStarts,Jt=D._multiDrawCounts,wt=D._multiDrawCount,Li=_e?Q.get(_e).bytesPerElement:1,Us=Ie.get(L).currentProgram.getUniforms();for(let ei=0;ei<wt;ei++)Us.setValue(U,"_gl_DrawID",ei),_t.render(We[ei]/Li,Jt[ei])}else if(D.isInstancedMesh)_t.renderInstances(Ne,Ht,D.count);else if(X.isInstancedBufferGeometry){const We=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Jt=Math.min(X.instanceCount,We);_t.renderInstances(Ne,Ht,Jt)}else _t.render(Ne,Ht)};function Te(A,V,X){A.transparent===!0&&A.side===ur&&A.forceSinglePass===!1?(A.side=Zn,A.needsUpdate=!0,At(A,V,X),A.side=Yr,A.needsUpdate=!0,At(A,V,X),A.side=ur):At(A,V,X)}this.compile=function(A,V,X=null){X===null&&(X=A),p=Oe.get(X),p.init(V),y.push(p),X.traverseVisible(function(D){D.isLight&&D.layers.test(V.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),A!==X&&A.traverseVisible(function(D){D.isLight&&D.layers.test(V.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();const L=new Set;return A.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const J=D.material;if(J)if(Array.isArray(J))for(let ae=0;ae<J.length;ae++){const Me=J[ae];Te(Me,X,D),L.add(Me)}else Te(J,X,D),L.add(J)}),p=y.pop(),L},this.compileAsync=function(A,V,X=null){const L=this.compile(A,V,X);return new Promise(D=>{function J(){if(L.forEach(function(ae){Ie.get(ae).currentProgram.isReady()&&L.delete(ae)}),L.size===0){D(A);return}setTimeout(J,10)}Ke.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Re=null;function Ye(A){Re&&Re(A)}function ge(){Fe.stop()}function Je(){Fe.start()}const Fe=new o_;Fe.setAnimationLoop(Ye),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(A){Re=A,Y.setAnimationLoop(A),A===null?Fe.stop():Fe.start()},Y.addEventListener("sessionstart",ge),Y.addEventListener("sessionend",Je),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(V),V=Y.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,V,C),p=Oe.get(A,y.length),p.init(V),y.push(p),pe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),j.setFromProjectionMatrix(pe),oe=this.localClippingEnabled,ee=se.init(this.clippingPlanes,oe),g=Ue.get(A,x.length),g.init(),x.push(g),Y.enabled===!0&&Y.isPresenting===!0){const J=v.xr.getDepthSensingMesh();J!==null&&Xe(J,V,-1/0,v.sortObjects)}Xe(A,V,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ne,I),tt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,tt&&He.addToRenderList(g,A),this.info.render.frame++,ee===!0&&se.beginShadows();const X=p.state.shadowsArray;ce.render(X,A,V),ee===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const L=g.opaque,D=g.transmissive;if(p.setupLights(),V.isArrayCamera){const J=V.cameras;if(D.length>0)for(let ae=0,Me=J.length;ae<Me;ae++){const _e=J[ae];st(L,D,A,_e)}tt&&He.render(A);for(let ae=0,Me=J.length;ae<Me;ae++){const _e=J[ae];zt(g,A,_e,_e.viewport)}}else D.length>0&&st(L,D,A,V),tt&&He.render(A),zt(g,A,V);C!==null&&S===0&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(v,A,V),rt.resetDefaultState(),w=-1,T=null,y.pop(),y.length>0?(p=y[y.length-1],ee===!0&&se.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Xe(A,V,X,L){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){L&&ye.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pe);const ae=K.update(A),Me=A.material;Me.visible&&g.push(A,ae,Me,X,ye.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const ae=K.update(A),Me=A.material;if(L&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ye.copy(A.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),ye.copy(ae.boundingSphere.center)),ye.applyMatrix4(A.matrixWorld).applyMatrix4(pe)),Array.isArray(Me)){const _e=ae.groups;for(let Ce=0,Pe=_e.length;Ce<Pe;Ce++){const Se=_e[Ce],Ne=Me[Se.materialIndex];Ne&&Ne.visible&&g.push(A,ae,Ne,X,ye.z,Se)}}else Me.visible&&g.push(A,ae,Me,X,ye.z,null)}}const J=A.children;for(let ae=0,Me=J.length;ae<Me;ae++)Xe(J[ae],V,X,L)}function zt(A,V,X,L){const D=A.opaque,J=A.transmissive,ae=A.transparent;p.setupLightsView(X),ee===!0&&se.setGlobalState(v.clippingPlanes,X),L&&Ae.viewport(P.copy(L)),D.length>0&&xt(D,V,X),J.length>0&&xt(J,V,X),ae.length>0&&xt(ae,V,X),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function st(A,V,X,L){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[L.id]===void 0&&(p.state.transmissionRenderTarget[L.id]=new Ds(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?Za:Ki,minFilter:vs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const J=p.state.transmissionRenderTarget[L.id],ae=L.viewport||P;J.setSize(ae.z*v.transmissionResolutionScale,ae.w*v.transmissionResolutionScale);const Me=v.getRenderTarget();v.setRenderTarget(J),v.getClearColor(N),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),tt&&He.render(X);const _e=v.toneMapping;v.toneMapping=qr;const Ce=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),p.setupLightsView(L),ee===!0&&se.setGlobalState(v.clippingPlanes,L),xt(A,X,L),R.updateMultisampleRenderTarget(J),R.updateRenderTargetMipmap(J),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Se=0,Ne=V.length;Se<Ne;Se++){const it=V[Se],Ht=it.object,Ot=it.geometry,_t=it.material,We=it.group;if(_t.side===ur&&Ht.layers.test(L.layers)){const Jt=_t.side;_t.side=Zn,_t.needsUpdate=!0,Zt(Ht,X,L,Ot,_t,We),_t.side=Jt,_t.needsUpdate=!0,Pe=!0}}Pe===!0&&(R.updateMultisampleRenderTarget(J),R.updateRenderTargetMipmap(J))}v.setRenderTarget(Me),v.setClearColor(N,z),Ce!==void 0&&(L.viewport=Ce),v.toneMapping=_e}function xt(A,V,X){const L=V.isScene===!0?V.overrideMaterial:null;for(let D=0,J=A.length;D<J;D++){const ae=A[D],Me=ae.object,_e=ae.geometry,Ce=ae.group;let Pe=ae.material;Pe.allowOverride===!0&&L!==null&&(Pe=L),Me.layers.test(X.layers)&&Zt(Me,V,X,_e,Pe,Ce)}}function Zt(A,V,X,L,D,J){A.onBeforeRender(v,V,X,L,D,J),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),D.onBeforeRender(v,V,X,L,A,J),D.transparent===!0&&D.side===ur&&D.forceSinglePass===!1?(D.side=Zn,D.needsUpdate=!0,v.renderBufferDirect(X,V,L,D,A,J),D.side=Yr,D.needsUpdate=!0,v.renderBufferDirect(X,V,L,D,A,J),D.side=ur):v.renderBufferDirect(X,V,L,D,A,J),A.onAfterRender(v,V,X,L,D,J)}function At(A,V,X){V.isScene!==!0&&(V=et);const L=Ie.get(A),D=p.state.lights,J=p.state.shadowsArray,ae=D.state.version,Me=xe.getParameters(A,D.state,J,V,X),_e=xe.getProgramCacheKey(Me);let Ce=L.programs;L.environment=A.isMeshStandardMaterial?V.environment:null,L.fog=V.fog,L.envMap=(A.isMeshStandardMaterial?q:E).get(A.envMap||L.environment),L.envMapRotation=L.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Ce===void 0&&(A.addEventListener("dispose",je),Ce=new Map,L.programs=Ce);let Pe=Ce.get(_e);if(Pe!==void 0){if(L.currentProgram===Pe&&L.lightsStateVersion===ae)return gt(A,Me),Pe}else Me.uniforms=xe.getUniforms(A),A.onBeforeCompile(Me,v),Pe=xe.acquireProgram(Me,_e),Ce.set(_e,Pe),L.uniforms=Me.uniforms;const Se=L.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Se.clippingPlanes=se.uniform),gt(A,Me),L.needsLights=cn(A),L.lightsStateVersion=ae,L.needsLights&&(Se.ambientLightColor.value=D.state.ambient,Se.lightProbe.value=D.state.probe,Se.directionalLights.value=D.state.directional,Se.directionalLightShadows.value=D.state.directionalShadow,Se.spotLights.value=D.state.spot,Se.spotLightShadows.value=D.state.spotShadow,Se.rectAreaLights.value=D.state.rectArea,Se.ltc_1.value=D.state.rectAreaLTC1,Se.ltc_2.value=D.state.rectAreaLTC2,Se.pointLights.value=D.state.point,Se.pointLightShadows.value=D.state.pointShadow,Se.hemisphereLights.value=D.state.hemi,Se.directionalShadowMap.value=D.state.directionalShadowMap,Se.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Se.spotShadowMap.value=D.state.spotShadowMap,Se.spotLightMatrix.value=D.state.spotLightMatrix,Se.spotLightMap.value=D.state.spotLightMap,Se.pointShadowMap.value=D.state.pointShadowMap,Se.pointShadowMatrix.value=D.state.pointShadowMatrix),L.currentProgram=Pe,L.uniformsList=null,Pe}function yt(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=dc.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function gt(A,V){const X=Ie.get(A);X.outputColorSpace=V.outputColorSpace,X.batching=V.batching,X.batchingColor=V.batchingColor,X.instancing=V.instancing,X.instancingColor=V.instancingColor,X.instancingMorph=V.instancingMorph,X.skinning=V.skinning,X.morphTargets=V.morphTargets,X.morphNormals=V.morphNormals,X.morphColors=V.morphColors,X.morphTargetsCount=V.morphTargetsCount,X.numClippingPlanes=V.numClippingPlanes,X.numIntersection=V.numClipIntersection,X.vertexAlphas=V.vertexAlphas,X.vertexTangents=V.vertexTangents,X.toneMapping=V.toneMapping}function yn(A,V,X,L,D){V.isScene!==!0&&(V=et),R.resetTextureUnits();const J=V.fog,ae=L.isMeshStandardMaterial?V.environment:null,Me=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Io,_e=(L.isMeshStandardMaterial?q:E).get(L.envMap||ae),Ce=L.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Pe=!!X.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),Se=!!X.morphAttributes.position,Ne=!!X.morphAttributes.normal,it=!!X.morphAttributes.color;let Ht=qr;L.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ht=v.toneMapping);const Ot=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_t=Ot!==void 0?Ot.length:0,We=Ie.get(L),Jt=p.state.lights;if(ee===!0&&(oe===!0||A!==T)){const In=A===T&&L.id===w;se.setState(L,A,In)}let wt=!1;L.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Jt.state.version||We.outputColorSpace!==Me||D.isBatchedMesh&&We.batching===!1||!D.isBatchedMesh&&We.batching===!0||D.isBatchedMesh&&We.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&We.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&We.instancing===!1||!D.isInstancedMesh&&We.instancing===!0||D.isSkinnedMesh&&We.skinning===!1||!D.isSkinnedMesh&&We.skinning===!0||D.isInstancedMesh&&We.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&We.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&We.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&We.instancingMorph===!1&&D.morphTexture!==null||We.envMap!==_e||L.fog===!0&&We.fog!==J||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==se.numPlanes||We.numIntersection!==se.numIntersection)||We.vertexAlphas!==Ce||We.vertexTangents!==Pe||We.morphTargets!==Se||We.morphNormals!==Ne||We.morphColors!==it||We.toneMapping!==Ht||We.morphTargetsCount!==_t)&&(wt=!0):(wt=!0,We.__version=L.version);let Li=We.currentProgram;wt===!0&&(Li=At(L,V,D));let Us=!1,ei=!1,Xo=!1;const Vt=Li.getUniforms(),_i=We.uniforms;if(Ae.useProgram(Li.program)&&(Us=!0,ei=!0,Xo=!0),L.id!==w&&(w=L.id,ei=!0),Us||T!==A){Ae.buffers.depth.getReversed()?(ie.copy(A.projectionMatrix),Oy(ie),ky(ie),Vt.setValue(U,"projectionMatrix",ie)):Vt.setValue(U,"projectionMatrix",A.projectionMatrix),Vt.setValue(U,"viewMatrix",A.matrixWorldInverse);const Wn=Vt.map.cameraPosition;Wn!==void 0&&Wn.setValue(U,Ee.setFromMatrixPosition(A.matrixWorld)),W.logarithmicDepthBuffer&&Vt.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&Vt.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,ei=!0,Xo=!0)}if(D.isSkinnedMesh){Vt.setOptional(U,D,"bindMatrix"),Vt.setOptional(U,D,"bindMatrixInverse");const In=D.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),Vt.setValue(U,"boneTexture",In.boneTexture,R))}D.isBatchedMesh&&(Vt.setOptional(U,D,"batchingTexture"),Vt.setValue(U,"batchingTexture",D._matricesTexture,R),Vt.setOptional(U,D,"batchingIdTexture"),Vt.setValue(U,"batchingIdTexture",D._indirectTexture,R),Vt.setOptional(U,D,"batchingColorTexture"),D._colorsTexture!==null&&Vt.setValue(U,"batchingColorTexture",D._colorsTexture,R));const vi=X.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&ke.update(D,X,Li),(ei||We.receiveShadow!==D.receiveShadow)&&(We.receiveShadow=D.receiveShadow,Vt.setValue(U,"receiveShadow",D.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(_i.envMap.value=_e,_i.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),L.isMeshStandardMaterial&&L.envMap===null&&V.environment!==null&&(_i.envMapIntensity.value=V.environmentIntensity),ei&&(Vt.setValue(U,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&bt(_i,Xo),J&&L.fog===!0&&ue.refreshFogUniforms(_i,J),ue.refreshMaterialUniforms(_i,L,H,$,p.state.transmissionRenderTarget[A.id]),dc.upload(U,yt(We),_i,R)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(dc.upload(U,yt(We),_i,R),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&Vt.setValue(U,"center",D.center),Vt.setValue(U,"modelViewMatrix",D.modelViewMatrix),Vt.setValue(U,"normalMatrix",D.normalMatrix),Vt.setValue(U,"modelMatrix",D.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const In=L.uniformsGroups;for(let Wn=0,tu=In.length;Wn<tu;Wn++){const Zr=In[Wn];O.update(Zr,Li),O.bind(Zr,Li)}}return Li}function bt(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function cn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,V,X){const L=Ie.get(A);L.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,L.__autoAllocateDepthBuffer===!1&&(L.__useRenderToTexture=!1),Ie.get(A.texture).__webglTexture=V,Ie.get(A.depthTexture).__webglTexture=L.__autoAllocateDepthBuffer?void 0:X,L.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){const X=Ie.get(A);X.__webglFramebuffer=V,X.__useDefaultFramebuffer=V===void 0};const bn=U.createFramebuffer();this.setRenderTarget=function(A,V=0,X=0){C=A,b=V,S=X;let L=!0,D=null,J=!1,ae=!1;if(A){const _e=Ie.get(A);if(_e.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(U.FRAMEBUFFER,null),L=!1;else if(_e.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(_e.__hasExternalTextures)R.rebindTextures(A,Ie.get(A.texture).__webglTexture,Ie.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Se=A.depthTexture;if(_e.__boundDepthTexture!==Se){if(Se!==null&&Ie.has(Se)&&(A.width!==Se.image.width||A.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const Ce=A.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ae=!0);const Pe=Ie.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Pe[V])?D=Pe[V][X]:D=Pe[V],J=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?D=Ie.get(A).__webglMultisampledFramebuffer:Array.isArray(Pe)?D=Pe[X]:D=Pe,P.copy(A.viewport),F.copy(A.scissor),k=A.scissorTest}else P.copy(re).multiplyScalar(H).floor(),F.copy(Le).multiplyScalar(H).floor(),k=Ge;if(X!==0&&(D=bn),Ae.bindFramebuffer(U.FRAMEBUFFER,D)&&L&&Ae.drawBuffers(A,D),Ae.viewport(P),Ae.scissor(F),Ae.setScissorTest(k),J){const _e=Ie.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,_e.__webglTexture,X)}else if(ae){const _e=Ie.get(A.texture),Ce=V;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,_e.__webglTexture,X,Ce)}else if(A!==null&&X!==0){const _e=Ie.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_e.__webglTexture,X)}w=-1},this.readRenderTargetPixels=function(A,V,X,L,D,J,ae){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ae!==void 0&&(Me=Me[ae]),Me){Ae.bindFramebuffer(U.FRAMEBUFFER,Me);try{const _e=A.texture,Ce=_e.format,Pe=_e.type;if(!W.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-L&&X>=0&&X<=A.height-D&&U.readPixels(V,X,L,D,qe.convert(Ce),qe.convert(Pe),J)}finally{const _e=C!==null?Ie.get(C).__webglFramebuffer:null;Ae.bindFramebuffer(U.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(A,V,X,L,D,J,ae){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ae!==void 0&&(Me=Me[ae]),Me)if(V>=0&&V<=A.width-L&&X>=0&&X<=A.height-D){Ae.bindFramebuffer(U.FRAMEBUFFER,Me);const _e=A.texture,Ce=_e.format,Pe=_e.type;if(!W.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Se=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Se),U.bufferData(U.PIXEL_PACK_BUFFER,J.byteLength,U.STREAM_READ),U.readPixels(V,X,L,D,qe.convert(Ce),qe.convert(Pe),0);const Ne=C!==null?Ie.get(C).__webglFramebuffer:null;Ae.bindFramebuffer(U.FRAMEBUFFER,Ne);const it=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ny(U,it,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Se),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,J),U.deleteBuffer(Se),U.deleteSync(it),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,X=0){const L=Math.pow(2,-X),D=Math.floor(A.image.width*L),J=Math.floor(A.image.height*L),ae=V!==null?V.x:0,Me=V!==null?V.y:0;R.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,ae,Me,D,J),Ae.unbindTexture()};const Yt=U.createFramebuffer(),Qt=U.createFramebuffer();this.copyTextureToTexture=function(A,V,X=null,L=null,D=0,J=null){J===null&&(D!==0?(hc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=D,D=0):J=0);let ae,Me,_e,Ce,Pe,Se,Ne,it,Ht;const Ot=A.isCompressedTexture?A.mipmaps[J]:A.image;if(X!==null)ae=X.max.x-X.min.x,Me=X.max.y-X.min.y,_e=X.isBox3?X.max.z-X.min.z:1,Ce=X.min.x,Pe=X.min.y,Se=X.isBox3?X.min.z:0;else{const vi=Math.pow(2,-D);ae=Math.floor(Ot.width*vi),Me=Math.floor(Ot.height*vi),A.isDataArrayTexture?_e=Ot.depth:A.isData3DTexture?_e=Math.floor(Ot.depth*vi):_e=1,Ce=0,Pe=0,Se=0}L!==null?(Ne=L.x,it=L.y,Ht=L.z):(Ne=0,it=0,Ht=0);const _t=qe.convert(V.format),We=qe.convert(V.type);let Jt;V.isData3DTexture?(R.setTexture3D(V,0),Jt=U.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(R.setTexture2DArray(V,0),Jt=U.TEXTURE_2D_ARRAY):(R.setTexture2D(V,0),Jt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const wt=U.getParameter(U.UNPACK_ROW_LENGTH),Li=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Us=U.getParameter(U.UNPACK_SKIP_PIXELS),ei=U.getParameter(U.UNPACK_SKIP_ROWS),Xo=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ot.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ot.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ce),U.pixelStorei(U.UNPACK_SKIP_ROWS,Pe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Se);const Vt=A.isDataArrayTexture||A.isData3DTexture,_i=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){const vi=Ie.get(A),In=Ie.get(V),Wn=Ie.get(vi.__renderTarget),tu=Ie.get(In.__renderTarget);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,Wn.__webglFramebuffer),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,tu.__webglFramebuffer);for(let Zr=0;Zr<_e;Zr++)Vt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.get(A).__webglTexture,D,Se+Zr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.get(V).__webglTexture,J,Ht+Zr)),U.blitFramebuffer(Ce,Pe,ae,Me,Ne,it,ae,Me,U.DEPTH_BUFFER_BIT,U.NEAREST);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(D!==0||A.isRenderTargetTexture||Ie.has(A)){const vi=Ie.get(A),In=Ie.get(V);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,Yt),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,Qt);for(let Wn=0;Wn<_e;Wn++)Vt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,vi.__webglTexture,D,Se+Wn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,vi.__webglTexture,D),_i?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,In.__webglTexture,J,Ht+Wn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,In.__webglTexture,J),D!==0?U.blitFramebuffer(Ce,Pe,ae,Me,Ne,it,ae,Me,U.COLOR_BUFFER_BIT,U.NEAREST):_i?U.copyTexSubImage3D(Jt,J,Ne,it,Ht+Wn,Ce,Pe,ae,Me):U.copyTexSubImage2D(Jt,J,Ne,it,Ce,Pe,ae,Me);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else _i?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Jt,J,Ne,it,Ht,ae,Me,_e,_t,We,Ot.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(Jt,J,Ne,it,Ht,ae,Me,_e,_t,Ot.data):U.texSubImage3D(Jt,J,Ne,it,Ht,ae,Me,_e,_t,We,Ot):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,J,Ne,it,ae,Me,_t,We,Ot.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,J,Ne,it,Ot.width,Ot.height,_t,Ot.data):U.texSubImage2D(U.TEXTURE_2D,J,Ne,it,ae,Me,_t,We,Ot);U.pixelStorei(U.UNPACK_ROW_LENGTH,wt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Li),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Us),U.pixelStorei(U.UNPACK_SKIP_ROWS,ei),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Xo),J===0&&V.generateMipmaps&&U.generateMipmap(Jt),Ae.unbindTexture()},this.copyTextureToTexture3D=function(A,V,X=null,L=null,D=0){return hc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,V,X,L,D)},this.initRenderTarget=function(A){Ie.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),Ae.unbindTexture()},this.resetState=function(){b=0,S=0,C=null,Ae.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}const Dt=[{id:"voice",project:"standardiste",level:1,status:"prototype",color:"#C49BFF"},{id:"sms",project:"accueil-sms",level:1,status:"prototype",color:"#FF7AD9"},{id:"devis",project:"devis",level:2,status:"prototype",color:"#D2F65A"},{id:"invoice",project:"encaisse",level:2,status:"prototype",color:"#FFB347"},{id:"doublons",project:"doublons",level:2,status:"prototype",color:"#5CF6FF"},{id:"switch",project:"aiguilleur",level:2,status:"prototype",color:"#FFC46B"},{id:"radar",project:"jobhunter",level:3,status:"prototype",color:"#35E08B"},{id:"rapport",project:"rapport-lundi",level:3,status:"prototype",color:"#FFD84D"},{id:"site",project:"sites",level:4,status:"vision",color:"#5EC8FF"},{id:"wave",project:"doublage",level:5,status:"prototype",color:"#7CF5D0"},{id:"film",project:"motion",level:5,status:"prototype",color:"#FF6B6B"},{id:"server",project:"vorchex",level:6,status:"service",color:"#35E08B"}],qw=new Set([]),Nc=r=>r.status==="service"&&!qw.has(r.id)?"prototype":r.status,fc=Object.fromEntries(Dt.map((r,e)=>[r.id,{...r,index:e}])),Xw=827476035;function jw(r){const e=new DataView(r);if(e.getUint32(0,!0)!==Xw)throw new Error("format .chr inconnu");const t=e.getFloat32(4,!0)/32767,n=e.getUint16(8,!0),i=[];let s=10;for(let o=0;o<n;o++){const a=e.getUint8(s)/255,l=e.getUint8(s+1)/20,c=e.getUint8(s+2)/255,u=e.getFloat32(s+4,!0),h=e.getUint16(s+8,!0),d=e.getUint16(s+10,!0),f=e.getUint16(s+12,!0);s+=14;const m=new Float32Array(h*3),_=new Uint16Array(d*2),g=new Uint16Array(f*3);for(let p=0;p<h*3;p++,s+=2)m[p]=e.getInt16(s,!0)*t;for(let p=0;p<d*2;p++,s+=2)_[p]=e.getUint16(s,!0);for(let p=0;p<f*3;p++,s+=2)g[p]=e.getUint16(s,!0);i.push({ton:a,dens:l,aretes:c,prm:u,v:m,e:_,t:g})}return i}const Lm=(r,e)=>{let t=0,n=r.length-1;for(;t<n;){const i=t+n>>1;r[i]<e?t=i+1:n=i}return t};function $w(r,e,t,{surface:n=2.2,jitter:i=.007}={}){const s=r.map(a=>{const{v:l,e:c,t:u}=a,h=new Float32Array(c.length/2),d=new Float32Array(u.length/3);let f=0,m=0;for(let p=0;p<h.length;p++){const x=c[p*2]*3,y=c[p*2+1]*3;f+=Math.hypot(l[y]-l[x],l[y+1]-l[x+1],l[y+2]-l[x+2]),h[p]=f}for(let p=0;p<d.length;p++){const x=u[p*3]*3,y=u[p*3+1]*3,v=u[p*3+2]*3,M=l[y]-l[x],b=l[y+1]-l[x+1],S=l[y+2]-l[x+2],C=l[v]-l[x],w=l[v+1]-l[x+1],T=l[v+2]-l[x+2];m+=.5*Math.hypot(b*T-S*w,S*C-M*T,M*w-b*C),d[p]=m}const _=f>0?a.dens*a.aretes*f:0,g=m>0?a.dens*(1-a.aretes)*m*n:0;return{p:a,eCum:h,tCum:d,L:f,A:m,wE:_,wA:g}}),o=s.reduce((a,l)=>a+l.wE+l.wA,0)||1;for(const{p:a,eCum:l,tCum:c,L:u,A:h,wE:d,wA:f}of s){const{v:m,e:_,t:g,ton:p,prm:x}=a;for(let y=0,v=Math.round(t*d/o);y<v;y++){const M=Lm(l,e.rnd()*u),b=_[M*2]*3,S=_[M*2+1]*3,C=e.rnd();e.put(m[b]+(m[S]-m[b])*C+e.j(i),m[b+1]+(m[S+1]-m[b+1])*C+e.j(i),m[b+2]+(m[S+2]-m[b+2])*C+e.j(i),p,x)}for(let y=0,v=Math.round(t*f/o);y<v;y++){const M=Lm(c,e.rnd()*h),b=g[M*3]*3,S=g[M*3+1]*3,C=g[M*3+2]*3;let w=e.rnd(),T=e.rnd();w+T>1&&(w=1-w,T=1-T),e.put(m[b]+(m[S]-m[b])*w+(m[C]-m[b])*T,m[b+1]+(m[S+1]-m[b+1])*w+(m[C+1]-m[b+1])*T,m[b+2]+(m[S+2]-m[b+2])*w+(m[C+2]-m[b+2])*T,p,x)}}}const th=new Map;function Yw(r){return th.has(r)||th.set(r,fetch(new URL(`models/${r}.chr`,document.baseURI)).then(e=>e.ok?e.arrayBuffer():Promise.reject(new Error(e.status))).then(jw).catch(()=>null)),th.get(r)}const oi=Math.PI*2,h_=Math.tan(35*Math.PI/360),Qe=(r,e,t)=>r+(e-r)*t,Jw=[-1.3,.05,0],Rt=["cloud","name","sphere","terrain",...Dt.flatMap(r=>[`auj_${r.id}`,r.id]),"dim","path","end"],hn=Object.fromEntries(Rt.map((r,e)=>[r,e])),Kw=r=>r.startsWith("auj_"),Zw=r=>fc[Kw(r)?r.slice(4):r]||null;function d_(r){let e=r>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function gn(r,e){const t=new Float32Array(r*3),n=new Float32Array(r*2),i=d_(e);let s=0;const o=c=>(i()-.5)*c,a=(c,u,h,d=0,f=0)=>{s>=r||(t[s*3]=c,t[s*3+1]=u,t[s*3+2]=h,n[s*2]=d,n[s*2+1]=f,s++)},l={rnd:i,j:o,put:a,n:c=>Math.max(1,Math.floor(r*c)),line(c,u,h,d=0,f=.012,m=0,_=1){for(let g=0;g<c;g++){const p=i();a(Qe(u[0],h[0],p)+o(f),Qe(u[1],h[1],p)+o(f),Qe(u[2],h[2],p)+o(f),d,Qe(m,_,p))}},curve(c,u,h=0,d=.012,f=0,m=1){for(let _=0;_<c;_++){const g=i(),p=u(g);a(p[0]+o(d),p[1]+o(d),p[2]+o(d),h,Qe(f,m,g))}},ring(c,u,h,d="xy",f=0,m=.012,_=null){for(let g=0;g<c;g++){const p=i()*oi,x=Math.cos(p)*h,y=Math.sin(p)*h,v=d==="xy"?[x,y,0]:d==="xz"?[x,0,y]:[0,x,y];a(u[0]+v[0]+o(m),u[1]+v[1]+o(m),u[2]+v[2]+o(m),f,_??p/oi)}},box(c,u,h,d=0,f=.008,m=0){for(let _=0;_<c;_++){const g=Math.floor(i()*3),p=i()-.5,x=i()<.5?-.5:.5,y=i()<.5?-.5:.5,v=g===0?[p,x,y]:g===1?[x,p,y]:[x,y,p];a(u[0]+v[0]*h[0]+o(f),u[1]+v[1]*h[1]+o(f),u[2]+v[2]*h[2]+o(f),d,m)}},shell(c,u,h,d=0,f=0){for(let m=0;m<c;m++){const _=i()*2-1,g=i()*oi,p=Math.sqrt(1-_*_);a(u[0]+Math.cos(g)*p*h,u[1]+_*h,u[2]+Math.sin(g)*p*h,d,f)}},agent(c,u=1){l.ring(l.n(.016),c,.24*u,"xy",1,.008,40),l.ring(l.n(.006),c,.15*u,"xy",.5,.006,40);for(let h=0,d=l.n(.008);h<d;h++)a(c[0]+(i()-.5)*.24*u,c[1]+o(.022*u),c[2]+.02+o(.01),1,41)},done(c=[5.2,3.2,2.6]){for(;s<r;)a(o(c[0]*2),o(c[1]*2),o(c[2]*2)-.6,0,-1);for(let u=r-1;u>0;u--){const h=Math.floor(i()*(u+1));for(let d=0;d<3;d++){const f=t[u*3+d];t[u*3+d]=t[h*3+d],t[h*3+d]=f}for(let d=0;d<2;d++){const f=n[u*2+d];n[u*2+d]=n[h*2+d],n[h*2+d]=f}}return{pos:t,meta:n}}};return l}function Rr(r,e,t,n){const i=e-2*n,s=t-2*n,o=Math.PI*n/2,a=Math.PI/2,l=(h,d,f)=>m=>[h+Math.cos(f-m*a)*n,d+Math.sin(f-m*a)*n],c=[[i,h=>[-i/2+h*i,t/2]],[o,l(i/2,s/2,a)],[s,h=>[e/2,s/2-h*s]],[o,l(i/2,-s/2,0)],[i,h=>[i/2-h*i,-t/2]],[o,l(-i/2,-s/2,-a)],[s,h=>[-e/2,-s/2+h*s]],[o,l(-i/2,s/2,Math.PI)]];let u=r*(2*i+2*s+4*o);for(const[h,d]of c){if(u<=h)return d(h>0?u/h:0);u-=h}return c[0][1](0)}const Oc={cloud(r){const e=gn(r,11);for(let t=0;t<r;t++){const n=2.6+Math.pow(e.rnd(),.6)*6,i=e.rnd()*oi;e.put(Math.cos(i)*n,e.j(3.4),Math.sin(i)*n*.7-1.2,e.rnd()>.8?1:0,0)}return e.done()},name(r){const n=document.createElement("canvas");n.width=1600,n.height=720;const i=n.getContext("2d",{willReadFrequently:!0}),s=M=>{i.font=`800 ${M}px "Inter Tight Variable", "Inter Tight", system-ui, sans-serif`;try{i.letterSpacing=`${-M*.055}px`}catch{}};let o=300;s(o);const a=Math.max(i.measureText("JOHANNE").width,i.measureText("PAMEGNE.").width);o=o*1600*.95/a,s(o);const l=Math.max(i.measureText("JOHANNE").width,i.measureText("PAMEGNE.").width),c=o*.72,u=o*.86,h=(720-(u+c))/2,d=(1600-l)/2;i.textBaseline="alphabetic",i.fillStyle="#00ff00",i.fillText("JOHANNE",d,h+c);const f=i.measureText("PAMEGNE").width,m=i.measureText(".").width,_=d+l-(f+m);i.fillText("PAMEGNE",_,h+c+u),i.fillStyle="#ff0000",i.fillText(".",_+f,h+c+u);const g=i.getImageData(0,0,1600,720).data,p=[];for(let M=0;M<720;M+=2)for(let b=0;b<1600;b+=2){const S=(M*1600+b)*4;g[S+3]>128&&p.push(b,M,g[S]>128?1:0)}if(p.length<300)return Oc.sphere(r);const x=gn(r,12),y=p.length/3,v=x.n(.94);for(let M=0;M<v;M++){const b=Math.floor(x.rnd()*y)*3;x.put((p[b]+x.j(2)-1600/2)/(1600/2),-(p[b+1]+x.j(2)-720/2)/(1600/2),x.j(.03),p[b+2],0)}return x.done([1.3,.75,.5])},sphere(r){const e=gn(r,5),t=Math.PI*(3-Math.sqrt(5)),n=1.75;for(let i=0;i<r;i++){const s=1-i/(r-1)*2,o=Math.sqrt(1-s*s),a=t*i;e.put(Math.cos(a)*o*n,s*n,Math.sin(a)*o*n,e.rnd()>.86?1:0,0)}return e.done()},terrain(r){const e=gn(r,6),t=Math.round(Math.sqrt(r*2.2)),n=r/t;for(let i=0;i<r;i++)e.put((i%t/t-.5)*9.5,-1.15,(Math.floor(i/t)/n-.5)*6.5,e.rnd()>.86?1:0,0);return e.done()},wave(r){const e=gn(r,21),t=64,n=Math.floor(e.n(.66)/t);for(let i=0;i<t;i++){const s=i/(t-1),o=(s-.5)*3.9;if(Math.abs(o)<.17)continue;const a=.22+.95*Math.exp(-Math.pow(o*.62,2)),l=a*(.3+.7*Math.abs(Math.sin(i*1.7)*Math.cos(i*.63+1.2)));for(let c=0;c<n;c++){const u=Math.floor(e.rnd()*3)-1;e.put(o+e.j(.018),(e.rnd()*2-1)*l*(1-Math.abs(u)*.35),u*.3+e.j(.02),o>0?1:0,s)}}return e.ring(e.n(.1),[0,0,0],1.28,"yz",.5,.015,2),e.ring(e.n(.06),[0,0,0],.92,"yz",1,.012,3),e.agent([0,1.45,0],.85),e.done()},sms(r){const e=gn(r,111),t=1.22,n=2.3,i=.2,s=(c,u,h,d,f,m,_,g,p,x=.008)=>{for(let y=0;y<c;y++){const v=Rr(e.rnd(),u,h,d);e.put(f+v[0]+e.j(x),m+v[1]+e.j(x),_+e.j(x),g,p)}};s(e.n(.06),t,n,i,0,0,.06,0,4.1),s(e.n(.045),t,n,i,0,0,-.06,0,4),s(e.n(.035),t-.12,n-.12,i-.05,0,0,.065,0,4.2),e.line(e.n(.006),[-.14,n/2-.12,.07],[.14,n/2-.12,.07],0,.008,4,4),e.line(e.n(.006),[-.2,-n/2+.1,.07],[.2,-n/2+.1,.07],0,.008,4,4),e.shell(e.n(.008),[t/2-.2,n/2-.22,.09],.05,1,1.6);const o=[[1,.8,.27],[0,.6,.2],[1,.84,.44],[0,.28,.18],[1,.72,.24]];let a=n/2-.36;o.forEach(([c,u,h],d)=>{const f=c?t/2-.13-u/2:-t/2+.13+u/2,m=a-h/2,_=1+d*.08,g=c?1:0;s(e.n(.022),u,h,Math.min(.09,h/2),f,m,.08,g,_,.006);const p=Math.max(1,Math.round((h-.08)/.1)),x=Math.floor(e.n(.026)/p);for(let M=0;M<p;M++){const b=p===1?m:m+h/2-.12-M*.1,S=(u-.18)*(p>1&&M===p-1?.55:1),C=f-(u-.18)/2;e.line(x,[C,b,.08],[C+S,b,.08],g,.01,_,_)}const y=c?f+u/2-.06:f-u/2+.06,v=c?1:-1;e.line(e.n(.004),[y,m-h/2,.08],[y+v*.07,m-h/2-.06,.08],g,.008,_,_),a-=h+.1});for(let c=0;c<3;c++)for(let u=0,h=e.n(.045);u<h;u++){const d=e.rnd()*oi;e.put(Math.cos(d)+e.j(.012),Math.sin(d)*1.3+e.j(.012),-.3+e.j(.012),.6,2+c*.1)}const l=1.48;e.ring(e.n(.025),[0,0,0],l,"xz",0,.01,3.3);for(let c=0;c<3;c++){const u=.55+c*oi/3,h=[Math.cos(u)*l,0,Math.sin(u)*l],d=[-Math.sin(u),0,Math.cos(u)],f=c===1,m=3+c*.1,_=(g,p,x)=>e.put(h[0]+d[0]*g+e.j(.006),p+e.j(.006),h[2]+d[2]*g+e.j(.006),x,m);for(let g=0,p=e.n(.03);g<p;g++){const x=Rr(e.rnd(),.58,.2,.1);_(x[0],x[1],f?1:.35)}if(f){for(let p=0,x=e.n(.03);p<x;p++)_((e.rnd()-.5)*.5,(e.rnd()-.5)*.13,1);const g=[[-.09,0],[-.03,-.05],[.09,.06]];for(let p=0,x=e.n(.01);p<x;p++){const y=e.rnd(),v=y<.35?0:1,M=v?(y-.35)/.65:y/.35,b=g[v],S=g[v+1];e.put(h[0]*1.03+d[0]*Qe(b[0],S[0],M),Qe(b[1],S[1],M),h[2]*1.03+d[2]*Qe(b[0],S[0],M),1,m)}}}return e.ring(e.n(.03),[0,-1.5,0],1.7,"xz",0,.012,4),e.agent([-1.2,1.2,.3],.9),e.done()},doublons(r){const e=gn(r,157),t=.05,n=-.4,i=.48,s=-.58,o=-1.27,a=1.02,l=[[a,.98,.16],[a+.1,.1,0],[a,-.78,-.16]],c=(M,b,S,C,w,T,P,F,k,N=.008)=>{for(let z=0;z<M;z++){const G=Rr(e.rnd(),b,S,C);e.put(w+G[0]+e.j(N),T+G[1]+e.j(N),P+e.j(N),F,k)}},u=(M,b,S,C,w,T,P=.006)=>{for(let F=0;F<M;F++){const k=e.rnd()*oi;k/oi*C%1>.55||e.put(b[0]+Math.cos(k)*S+e.j(P),b[1]+Math.sin(k)*S+e.j(P),b[2]+e.j(P),w,T)}},h=(M,b,S,C,w,T,P)=>{const F=[[b-w,S],[b-w*.3,S-w*.75],[b+w,S+w*.8]];for(let k=0;k<M;k++){const N=e.rnd(),z=N<.35?0:1,G=z?(N-.35)/.65:N/.35;e.put(Qe(F[z][0],F[z+1][0],G)+e.j(.006),Qe(F[z][1],F[z+1][1],G)+e.j(.006),C,T,P)}},d=(M,b,S,C,w)=>{c(e.n(.05),.66,.6,.06,o,M,t,b,S),c(e.n(.014),.66,.6,.06,o+.07,M-.07,t-.16,b,S,.012),e.ring(e.n(.007),[o-.19,M+.155,t],.034,"xy",b||1,.005,C(3));for(let T=0,P=e.n(.008);T<P;T++){const F=Math.PI*e.rnd();e.put(o-.19+Math.cos(F)*.075+e.j(.006),M+.03+Math.sin(F)*.07+e.j(.006),t,b||1,C(3))}e.line(e.n(.003),[o-.265,M+.03,t],[o-.115,M+.03,t],b||1,.005,C(3),C(3)),[[-.07,.13,w[0]],[-.07,.05,w[1]],[-.26,-.1,w[2]],[-.26,-.19,w[3]]].forEach(([T,P,F],k)=>e.line(e.n(.007),[o+T,M+P,t],[o+T+F,M+P,t],b,k?.01:.016,C(Math.min(k,2)),C(Math.min(k,2))))};d(i,0,5,M=>1+M*.1,[.3,.2,.44,.34]),d(s,.15,3,()=>3.1,[.36,.14,.5,.4]),e.ring(e.n(.007),[o+.33,i+.3,t+.04],.06,"xy",1,.005,1.3),e.line(e.n(.003),[o+.3,i+.3,t+.04],[o+.36,i+.3,t+.04],1,.005,1.3,1.3),e.line(e.n(.003),[o+.33,i+.27,t+.04],[o+.33,i+.33,t+.04],1,.005,1.3,1.3);const f=M=>b=>{if(b<.3)return[Qe(o+.36,n,b/.3),i,t];const S=(b-.3)/.7,C=S*S*(3-2*S),w=l[M];return[Qe(n,w[0]-.4,S),Qe(i,w[1],C),Qe(t,w[2],C)]};for(let M=0;M<3;M++)e.curve(e.n(.032),f(M),1,.009,M*.3,M*.3+.28),e.curve(e.n(.03),f(M),1,.034,6+M*.3,6+M*.3+.28);[-.05,.05].forEach(M=>e.line(e.n(.013),[n+M,-1.1,.1],[n+M,1.1,.1],1,.006,1.75,1.75)),[-1.1,1.1].forEach(M=>e.line(e.n(.004),[n-.1,M,.1],[n+.1,M,.1],1,.008,1.75,1.75));for(let M=-1;M<=1.001;M+=.2)e.line(e.n(.0012),[n-.09,M,.1],[n-.06,M,.1],0,.004,5.1,5.1);u(e.n(.014),[n,i,.12],.13,6,1,1.8),u(e.n(.014),[n,i,.12],.2,10,1,1.8),e.shell(e.n(.004),[n,i,.12],.03,1,1.8),u(e.n(.022),[n,s,.14],.21,8,1,4.1,.008),e.ring(e.n(.01),[n,s,.14],.15,"xy",1,.006,4),e.line(e.n(.011),[n-.085,s-.085,.15],[n+.085,s+.085,.15],1,.02,4,4),e.line(e.n(.011),[n-.085,s+.085,.15],[n+.085,s-.085,.15],1,.02,4,4);const m=o-.33,_=.66,g=s-.42;e.line(e.n(.005),[m,g,t],[m+_,g,t],.15,.004,3,3),e.line(e.n(.003),[m+_*.8,g-.05,t],[m+_*.8,g+.05,t],.15,.004,3.1,3.1),[[0,.35],[.35,.7],[.7,.8]].forEach(([M,b],S)=>e.line(e.n(.006),[m+_*M+.012,g,t],[m+_*b-.012,g,t],1,.022,3.5+S*.1,3.5+S*.1));const p=(M,b,S,C)=>{c(e.n(.03),b,S,.05,M[0],M[1],M[2],0,5),c(e.n(.011),b,S,.05,M[0]+.06,M[1]-.06,M[2]-.14,0,5,.012),e.ring(e.n(.006),[M[0]+b/2-.02,M[1]+S/2-.02,M[2]+.04],.065,"xy",1,.005,C),h(e.n(.004),M[0]+b/2-.02,M[1]+S/2-.02,M[2]+.04,.032,1,C)};let[x,y,v]=l[0];p(l[0],.72,.52,2),e.line(e.n(.006),[x-.28,y+.15,v],[x+.02,y+.15,v],0,.014,5.1,5.1),[.04,-.05].forEach(M=>{e.line(e.n(.004),[x-.28,y+M,v],[x+.08,y+M,v],0,.008,5,5),e.line(e.n(.002),[x+.16,y+M,v],[x+.28,y+M,v],0,.008,5,5)}),e.line(e.n(.003),[x-.28,y-.11,v],[x+.28,y-.11,v],0,.004,5,5),e.line(e.n(.008),[x+.06,y-.17,v],[x+.28,y-.17,v],1,.026,2,2),[x,y,v]=l[1],p(l[1],.72,.5,2.1),[.13,.01,-.11].forEach(M=>e.line(e.n(.005),[x-.34,y+M,v],[x+.34,y+M,v],0,.004,5,5)),[-.12,.12].forEach(M=>e.line(e.n(.004),[x+M,y+.23,v],[x+M,y-.23,v],0,.004,5,5)),[[-.3,-.16],[-.08,.08],[.16,.3]].forEach(([M,b])=>e.line(e.n(.004),[x+M,y-.18,v],[x+b,y-.18,v],1,.022,2.1,2.1)),[x,y,v]=l[2],p(l[2],.72,.56,2.2),e.line(e.n(.006),[x-.34,y+.17,v],[x+.34,y+.17,v],0,.006,5.1,5.1);for(let M=0;M<5;M++)for(let b=0;b<3;b++){const S=x-.26+M*.13,C=y+.06-b*.12;M===2&&b===1?(c(e.n(.007),.11,.08,.02,S,C,v,1,2.2,.004),e.shell(e.n(.003),[S,C,v],.022,1,2.2),e.ring(e.n(.008),[S,C,v+.01],.07,"xy",1,.004,2.3)):e.shell(e.n(.0012),[S,C,v],.014,0,5)}e.ring(e.n(.026),[-.1,-1.45,0],1.7,"xz",0,.012,5);for(let M=0,b=e.n(.012);M<b;M++){const S=e.rnd()*oi;S/oi*48%1>.5||e.put(-.1+Math.cos(S)*1.25,-1.45,Math.sin(S)*1.25,1,5)}return e.agent([-1.3,1.16,.2],.75),e.done()},rapport(r){const e=gn(r,151),t=.55,n=.05,i=1.4,s=2.05,o=.04,a=-.5,l=t-.56,c=t+.56,u=[1.18,.95],h=(y,v,M,b,S,C,w,T,P,F=.008)=>{for(let k=0;k<y;k++){const N=Rr(e.rnd(),v,M,b);e.put(S+N[0]+e.j(F),C+N[1]+e.j(F),w+e.j(F),T,P)}};h(e.n(.07),i,s,.07,t,n,0,0,5),h(e.n(.028),i,s,.07,t+.1,n-.1,-.16,0,5),e.line(e.n(.012),[l,.9,o],[l+.5,.9,o],0,.022,5.1,5.1),e.line(e.n(.005),[l,.81,o],[l+.26,.81,o],0,.008,5,5),e.line(e.n(.01),[l,.73,o],[c,.73,o],0,.006,5,5),[[-1,.52],[1,.52],[-1,.2],[1,.2]].forEach(([y,v],M)=>{const b=t+y*.29,S=1+M*.1;h(e.n(.014),.52,.27,.04,b,v,o,0,5,.005),e.line(e.n(.004),[b-.2,v+.07,o],[b-.04,v+.07,o],0,.006,5,5),e.line(e.n(.013),[b-.2,v-.04,o],[b+.12,v-.04,o],1,.028,S,S)}),e.line(e.n(.008),[l,-.44,o],[c,-.44,o],0,.005,5,5);const d=[.35,.5,.42,.62,.55,.78,.86,.8],f=y=>{const v=y*7,M=Math.min(6,Math.floor(v)),b=v-M,S=b*b*(3-2*b);return[l+.04+y*1.04,-.42+Qe(d[M],d[M+1],S)*.4,o]};e.curve(e.n(.03),f,1,.012,2,2.5),d.forEach((y,v)=>{const M=f(v/7);for(let b=0,S=e.n(.002);b<S;b++)e.put(M[0]+e.j(.03),M[1]+e.j(.03),o,1,2+v/7*.5)});const m=[[.22,.62],[.08,.5,.82],[.36]];let _=0;[-.56,-.69,-.82].forEach((y,v)=>{const M=(c-l)*(v===2?.7:1),b=m[v].map(S=>S*(c-l));for(let S=0,C=0;S<M;C++){const w=S,T=Math.min(M,S+.05+(C*37+v*11)%7*.016);S=T+.035,!b.some(P=>w<P+.08&&T>P-.08)&&e.line(Math.max(2,Math.round(e.n(.0012)*(T-w)/.1)),[l+w,y,o],[l+T,y,o],0,.01,5,5)}b.forEach(S=>{const C=3+_++*.1;e.line(e.n(.006),[l+S-.065,y,o],[l+S+.065,y,o],1,.018,C,C)})}),e.ring(e.n(.014),[u[0],u[1],o+.03],.17,"xy",1,.008,4),e.ring(e.n(.009),[u[0],u[1],o+.03],.13,"xy",1,.006,4);const g=[[u[0]-.07,u[1]],[u[0]-.02,u[1]-.055],[u[0]+.075,u[1]+.06]];for(let y=0,v=e.n(.009);y<v;y++){const M=e.rnd(),b=M<.35?0:1,S=b?(M-.35)/.65:M/.35,C=g[b],w=g[b+1];e.put(Qe(C[0],w[0],S)+e.j(.008),Qe(C[1],w[1],S)+e.j(.008),o+.04,1,4)}e.ring(e.n(.014),[u[0],u[1],o+.03],.17,"xy",1,.008,4.5);const p=-1.65,x=a-.05;for(let y=0;y<6;y++){const v=.58-y*.2,M=5;for(let b=0,S=e.n(.03);b<S;b++){const C=Math.floor(e.rnd()*M),w=e.rnd()*.62,T=(C+w)/M,P=(C*3+y*2)%7===2;w*9%2.1>1.85||e.put(Qe(p,x,T)+e.j(.006),v+e.j(.02),.1+e.j(.02),P?.15:0,y*.15+T*.14)}}return e.line(e.n(.025),[a,-.62,.1],[a,.74,.1],1,.012,1.75,1.75),e.line(e.n(.004),[a-.08,.74,.1],[a+.08,.74,.1],1,.008,1.75,1.75),e.line(e.n(.004),[a-.08,-.62,.1],[a+.08,-.62,.1],1,.008,1.75,1.75),h(e.n(.012),.42,.14,.03,a-.12,-.98,.1,0,5,.005),e.ring(e.n(.03),[-.1,-1.32,0],1.65,"xz",0,.012,5),e.agent([-1.12,1.02,.3],.8),e.done()},devis(r){const e=gn(r,131),t=1.5,n=2.1,i=.05,s=.04,o=(d,f,m,_,g,p,x,y,v,M=.008)=>{for(let b=0;b<d;b++){const S=Rr(e.rnd(),f,m,_);e.put(g+S[0]+e.j(M),p+S[1]+e.j(M),x+e.j(M),y,v)}},a=(d,f,m,_,g,p,x,y)=>{for(let v=0;v<d;v++)e.put(Qe(f,m,e.rnd()),Qe(_,g,e.rnd()),p+e.j(.006),x,y)};o(e.n(.075),t,n,.07,0,i,0,0,5),o(e.n(.03),t,n,.07,.1,i-.1,-.16,0,5),a(e.n(.014),-.62,-.44,.8,.96,s,1,5.1),e.line(e.n(.012),[-.34,.92,s],[.04,.92,s],0,.022,5.1,5.1),e.line(e.n(.006),[-.34,.83,s],[-.1,.83,s],0,.008,5,5),e.line(e.n(.006),[.3,.92,s],[.62,.92,s],0,.008,5,5),e.line(e.n(.006),[.38,.84,s],[.62,.84,s],0,.008,5,5),e.line(e.n(.012),[-.62,.71,s],[.62,.71,s],0,.006,5,5),[.62,.48,.66,.4,.56,.5].forEach((d,f)=>{const m=.55-f*.17,_=1+f*.1;e.line(e.n(.02),[-.62,m,s],[-.62+d,m,s],0,.014,_,_),e.line(e.n(.004),[.12,m,s],[.2,m,s],0,.012,_,_),e.line(e.n(.009),[.34,m,s],[.62,m,s],1,.016,_+.05,_+.05)}),e.line(e.n(.012),[.06,-.43,s],[.62,-.43,s],0,.006,1.6,1.6),e.line(e.n(.01),[-.62,-.58,s],[-.3,-.58,s],0,.02,2,2),o(e.n(.024),.6,.2,.05,.34,-.58,s,1,2,.006),e.line(e.n(.016),[.16,-.58,s],[.54,-.58,s],1,.03,2,2),o(e.n(.012),.15,.15,.025,-.52,-.84,s,1,4,.005);const l=[[-.58,-.84],[-.53,-.89],[-.44,-.77]];for(let d=0,f=e.n(.01);d<f;d++){const m=e.rnd(),_=m<.35?0:1,g=_?(m-.35)/.65:m/.35,p=l[_],x=l[_+1];e.put(Qe(p[0],x[0],g)+e.j(.008),Qe(p[1],x[1],g)+e.j(.008),s+.02,1,4)}e.curve(e.n(.016),d=>[-.32+d*.6,-.84+Math.sin(d*15)*.035*(1-d*.5)+d*.03,s],1,.008,4,4);const c=(d,f)=>{const m=1-d,_=[-1.85,.95-f*.13,.5],g=[-1.35,1.3-f*.13,.32],p=[-.82,.4-f*.1,s];return[0,1,2].map(x=>m*m*_[x]+2*m*d*g[x]+d*d*p[x])};for(let d=0;d<3;d++){const f=13+d*3;for(let m=0,_=e.n(.045);m<_;m++){const g=Math.floor(e.rnd()*f),p=(g+e.rnd()*(.45+(g*7+d)%4*.08))/f,x=c(p,d);e.put(x[0]+e.j(.01),x[1]+e.j(.01),x[2]+e.j(.01),(g*5+d)%7===3?1:0,d/3+p*.3)}}const u=[.66,-.58,s-.06],h=(d,f)=>[u[0]+.82*f,u[1]+(1.5-d*.62)*Math.sin(f*Math.PI/2),u[2]+.3*f];for(let d=0;d<3;d++){const f=3+d*.1;for(let m=0,_=e.n(.02);m<_;m++){const g=Rr(e.rnd(),.36,.24,.03);e.put(u[0]+g[0]+e.j(.006),u[1]+g[1]+e.j(.006),u[2]+e.j(.006),1,f)}e.line(e.n(.007),[u[0]-.17,u[1]+.11,u[2]],[u[0],u[1]-.02,u[2]],1,.008,f,f),e.line(e.n(.007),[u[0]+.17,u[1]+.11,u[2]],[u[0],u[1]-.02,u[2]],1,.008,f,f);for(let m=0,_=e.n(.012);m<_;m++){const g=(Math.floor(e.rnd()*22)+e.rnd()*.35)/22,p=h(d,.12+g*.88);e.put(p[0]+e.j(.008),p[1]+e.j(.008),p[2]+e.j(.008),.35,5)}}return e.line(e.n(.02),[-.7,0,s+.03],[.7,0,s+.03],1,.01,1.75,1.75),e.ring(e.n(.016),[-.52,-.84,s+.02],.12,"xy",1,.008,4.5),e.ring(e.n(.03),[0,-1.32,0],1.65,"xz",0,.012,5),e.agent([-1.35,-.55,.3],.85),e.done()},voice(r){const e=gn(r,101),t=Jw,n=.34;e.shell(e.n(.05),t,n,1,2),e.shell(e.n(.025),t,n*.55,1,2);for(let x=0;x<3;x++)e.curve(e.n(.045),b=>{const S=Qe(-.9,.9,b);return[t[0]+Math.cos(S)*.56,t[1]+Math.sin(S)*.56,t[2]]},0,.014,1+x*.15,1+x*.15);const i=[.9,-.05,0],s=1.7,o=1.6,a=i[1]+o/2;e.box(e.n(.07),i,[s,o,.12],0,.008,4),e.line(e.n(.018),[i[0]-s/2,a-.3,.06],[i[0]+s/2,a-.3,.06],0,.008,4,4),[-.45,.45].forEach(x=>e.ring(e.n(.012),[i[0]+x,a,0],.09,"yz",1,.008,4));const l=i[0]-s/2+.07,c=a-.37,u=(s-.14)/5,h=(c-(i[1]-o/2+.07))/4;for(let x=0;x<5;x++)e.line(e.n(.006),[l+u*(x+.5)-.07,a-.15,.06],[l+u*(x+.5)+.07,a-.15,.06],0,.008,4,4);let d=null;for(let x=0;x<5;x++)for(let y=0;y<4;y++){const v=l+u*(x+.5),M=c-h*(y+.5),b=x===2&&y===1;b&&(d=[v,M,.04]),e.box(e.n(b?.02:.011),[v,M,.03],[u*.78,h*.72,.03],b?1:0,.006,b?3:x*.18+y*.03)}for(let x=0,y=e.n(.05);x<y;x++)e.put(d[0]+(e.rnd()-.5)*u*.74,d[1]+(e.rnd()-.5)*h*.68,d[2]+e.j(.03),1,3);const f=[t[0]+n+.06,t[1]+.05,0],m=[-.35,1.05,.4],_=[.5,.95,.45],g=d,p=x=>{const y=1-x;return[0,1,2].map(v=>y*y*y*f[v]+3*y*y*x*m[v]+3*y*x*x*_[v]+x*x*x*g[v])};for(let x=0,y=e.n(.13);x<y;x++){const v=e.rnd(),M=p(v),b=.085*Math.pow(1-v,1.6)*Math.sin(v*46);e.put(M[0]+e.j(.012),M[1]+b+e.j(.012),M[2]+e.j(.012),e.rnd()<.18?1:0,v*.98)}return e.ring(e.n(.04),[.1,-1.08,0],1.95,"xz",0,.012,4),e.agent([-1.3,.92,.1],.85),e.done()},radar(r){const e=gn(r,31),t=.36,n=.23,i=(a,l,c,u,h,d,f=0,m=.006)=>{const _=Math.cos(f),g=Math.sin(f),p=(x,y)=>e.put(l+x*_-y*g+e.j(m),c+x*g+y*_+e.j(m),u+e.j(m),h,d);for(let x=0;x<a*.6;x++){const y=Rr(e.rnd(),t,n,.035);p(y[0],y[1])}for(let x=0;x<a*.1;x++)p(-.12+e.j(.05),.045+e.j(.05));for(let x=0;x<a*.17;x++)p(-.065+e.rnd()*.2,.055);for(let x=0;x<a*.13;x++)p(-.145+e.rnd()*.19,-.05)};[1,0,1,1,0,0].forEach((a,l)=>{i(e.n(.032),0,0,0,0,1+l*.1+a*.05),i(e.n(.032),0,0,0,a?1:.15,1+l*.1+a*.05+.025)}),e.line(e.n(.025),[-1.32,-.08,-.02],[-.02,-.08,-.02],0,.006,0,0),e.line(e.n(.03),[.08,-.24,.04],[.08,.42,.04],1,.008,2,2);for(let a=0,l=e.n(.01);a<l;a++)e.put(.08+(e.rnd()-.5)*.26,.52+e.j(.022),.05+e.j(.01),1,41);for(let a=0;a<7;a++)i(e.n(.026),1.28+a*.012,.62+a*.034,-.2+a*.03,1,3);const o=[1.28+6*.012,.62+6*.034,-.2+6*.03+.01];e.line(e.n(.005),[o[0]+.07,o[1]-.04,o[2]],[o[0]+.095,o[1]-.07,o[2]],1,.006,3.5,3.5),e.line(e.n(.008),[o[0]+.095,o[1]-.07,o[2]],[o[0]+.15,o[1]-.01,o[2]],1,.006,3.5,3.5);for(let a=0;a<6;a++)i(e.n(.018),1.23+e.j(.12),-.82+a*.026,-.2+a*.03,.15,4,e.j(.5));return e.done()},switch(r){const e=gn(r,41),t=(h,d,f,m)=>_=>{const g=1-_,p=g*g*g,x=3*g*g*_,y=3*g*_*_,v=_*_*_;return[p*h[0]+x*d[0]+y*f[0]+v*m[0],p*h[1]+x*d[1]+y*f[1]+v*m[1],p*h[2]+x*d[2]+y*f[2]+v*m[2]]},n=(h,d,f,m)=>{for(let _=0;_<h;_++){let g=e.rnd();const p=e.rnd()>.72;p&&(g=Math.round(g*22)/22);const x=d(g),y=d(Math.min(1,g+.01)),v=y[0]-x[0],M=y[1]-x[1],b=Math.hypot(v,M)||1,S=p?(e.rnd()*2-1)*.08:(e.rnd()<.5?1:-1)*.055;e.put(x[0]+-M/b*S+e.j(.008),x[1]+v/b*S+e.j(.008),x[2]+e.j(.008),0,Qe(f,m,g))}},i=[-.35,0,0],s=[[1.4,.98,-.3],[1.55,0,.2],[1.4,-.98,-.3]];n(e.n(.16),h=>[Qe(-1.95,i[0],h),0,0],0,.4),s.forEach(h=>{n(e.n(.15),t(i,[.4,0,0],[h[0]-.85,h[1],h[2]],h),.4,1),e.box(e.n(.05),[h[0]+.27,h[1],h[2]],[.46,.46,.46],1,.008,1),e.shell(e.n(.014),[h[0]+.27,h[1],h[2]],.09,1,1)});const o=-1.55,a=.52,l=.3,c=.2,u=e.n(.012);return e.line(u,[o-l,a-c,0],[o+l,a-c,0],1,.01,0,0),e.line(u,[o-l,a+c,0],[o+l,a+c,0],1,.01,0,0),e.line(u,[o-l,a-c,0],[o-l,a+c,0],1,.01,0,0),e.line(u,[o+l,a-c,0],[o+l,a+c,0],1,.01,0,0),e.line(u,[o-l,a+c,0],[o,a-.02,0],1,.01,0,0),e.line(u,[o+l,a+c,0],[o,a-.02,0],1,.01,0,0),e.ring(e.n(.03),i,.17,"xy",1,.01,.4),e.agent([-.35,.62,.1],.8),e.done()},server(r){const e=gn(r,51),t=s=>[0,1,2,3].map(o=>s>>o&1?1:-1),n=s=>{const o=2.8/(3.2-s[3]);return[s[0]*o*.55,s[1]*o*.55,s[2]*o*.55]};for(let s=0;s<16;s++)for(let o=0;o<4;o++){if(s>>o&1)continue;const a=t(s),l=t(s|1<<o);for(let c=0,u=e.n(.02);c<u;c++){const h=e.rnd(),d=n(a.map((f,m)=>Qe(f,l[m],h)));e.put(d[0]+e.j(.014),d[1]+e.j(.014),d[2]+e.j(.014),o===3?.35:0,1+(s*4+o)/64+h*(.9/64))}}for(let s=0;s<16;s++){const o=n(t(s));for(let a=0,l=e.n(.01);a<l;a++)e.put(o[0]+e.j(.09),o[1]+e.j(.09),o[2]+e.j(.09),1,2+s/16)}const i=.15;[[-i,-i,i,-i],[i,-i,i,i],[i,i,-i,i],[-i,i,-i,-i]].forEach(([s,o,a,l])=>e.line(e.n(.008),[s,o,.05],[a,l,.05],1,.006,3,3));for(let s=0,o=e.n(.022);s<o;s++)e.put((e.rnd()-.5)*2*i*.82,(e.rnd()-.5)*2*i*.82,.05+e.j(.01),1,3);return e.done()},site(r){const e=gn(r,141),t=2.7,n=1.95,i=0,s=(l,c,u,h,d,f,m,_=i)=>{for(let g=0;g<l;g++){const p=Rr(e.rnd(),h,d,Math.min(.05,d/2));e.put(c+p[0]+e.j(.006),u+p[1]+e.j(.006),_+e.j(.006),f,m)}},o=(l,c,u,h,d,f,m,_=i+.02)=>{for(let g=0;g<l;g++)e.put(c+(e.rnd()-.5)*h,u+(e.rnd()-.5)*d,_+e.j(.006),f,m)};return s(e.n(.08),0,0,t,n,0,0),s(e.n(.03),.14,-.12,t,n,0,0,-.25),e.line(e.n(.016),[-t/2,n/2-.2,i],[t/2,n/2-.2,i],0,.006,0,0),[-1.22,-1.12,-1.02].forEach(l=>e.ring(e.n(.004),[l,n/2-.1,i],.025,"xy",0,.004,0)),s(e.n(.012),.15,n/2-.1,1.5,.09,0,0),[()=>{s(e.n(.02),0,.62,t-.2,.16,0,1),o(e.n(.008),-1.05,.62,.3,.06,1,1)},()=>{s(e.n(.03),-.55,.18,1.4,.6,0,1.15)},()=>{o(e.n(.016),-.62,.3,1.1,.07,1,1.25),o(e.n(.01),-.75,.13,.85,.04,0,1.25)},()=>{s(e.n(.02),.78,.18,.86,.6,0,1.35),o(e.n(.012),.78,.18,.7,.44,.35,1.35)},()=>{[-.86,0,.86].forEach((l,c)=>{s(e.n(.014),l,-.46,.76,.5,0,1.5+c*.08),o(e.n(.006),l,-.36,.56,.05,0,1.5+c*.08)})},()=>{s(e.n(.016),0,-.84,.62,.15,1,1.78),o(e.n(.012),0,-.84,.5,.08,1,1.78)}].forEach(l=>l()),e.agent([-1.62,1.18,.35],.85),e.curve(e.n(.014),l=>[Qe(-1.4,-.9,l),Qe(1.05,.7,l)+Math.sin(l*Math.PI)*.1,Qe(.3,.04,l)],1,.006,2,2),e.ring(e.n(.03),[0,-1.3,0],1.7,"xz",0,.012,0),e.done()},invoice(r){const e=gn(r,61),t=1.3,n=1.8;for(let i=0;i<3;i++){const s=-.3+i*.3,o=.14-i*.14,a=-.55+i*.55,l=-.09+i*.07,c=Math.cos(l),u=Math.sin(l),h=i===2,d=h?.36:.2,f=(m,_,g)=>e.put(s+m*c-_*u+e.j(.008),o+m*u+_*c+e.j(.008),a+e.j(.008),g,_/n+.5);for(let m=0,_=e.n(d*.3);m<_;m++){const g=Math.floor(e.rnd()*4),p=e.rnd()*2-1;f(g<2?p*t/2:(g===2?-1:1)*t/2,g<2?(g===0?-1:1)*n/2:p*n/2,0)}for(let m=0,_=e.n(d*.12);m<_;m++)f(-t/2+.12+e.rnd()*.5,n/2-.2+e.j(.05),h?1:0);for(let m=0,_=e.n(d*.5);m<_;m++){const g=Math.floor(e.rnd()*9),p=.45+g*37%10/10*.5;f(-t/2+.12+e.rnd()*(t-.24)*p,n/2-.48-g*.125,0)}for(let m=0,_=e.n(d*.08);m<_;m++)f(t/2-.12-e.rnd()*.42,-n/2+.2+e.j(.03),h?1:0)}return e.ring(e.n(.05),[.64,-.58,.62],.3,"xy",1,.012,2),e.line(e.n(.02),[.49,-.58,.62],[.59,-.69,.62],1,.014,2,2),e.line(e.n(.035),[.59,-.69,.62],[.81,-.44,.62],1,.014,2,2),e.agent([-1.15,1.25,.4],.85),e.done()},film(r){const e=gn(r,71),t=.36,n=9,i=(c,u,h,d=.008)=>{const f=c*.7;e.put(c*1.9+e.j(d),Math.sin(c*Math.PI)*.5+Math.cos(f)*u+e.j(d),Math.cos(c*Math.PI)*.55-.2+Math.sin(f)*u+e.j(d),h,(c+1)/2)};for(let c=0,u=e.n(.2);c<u;c++)i(e.rnd()*2-1,e.rnd()<.5?t:-t,0);for(let c=0,u=e.n(.14);c<u;c++)i(Math.round((e.rnd()*2-1)*22)/22+e.j(.012),(e.rnd()<.5?1:-1)*(t-.06)+e.j(.02),0,.004);for(let c=0,u=e.n(.2);c<u;c++){const h=Math.floor(e.rnd()*n),d=-1+h*(2/n)+.02,f=d+2/n-.04,m=t-.13,_=Math.floor(e.rnd()*4),g=e.rnd();i(_<2?Qe(d,f,g):_===2?d:f,_<2?_===0?-m:m:Qe(-m,m,g),0)}for(let c=0,u=e.n(.12);c<u;c++){const h=Math.floor(e.rnd()*5)*2,d=-1+h*(2/n)+.03;i(d+e.rnd()*(2/n-.06),(e.rnd()*2-1)*(t-.15),.35)}const s=[-.2,.28],o=[-.2,-.28],a=[.3,0],l=.95;[[s,o],[o,a],[a,s]].forEach(([c,u])=>e.line(e.n(.022),[c[0],c[1],l],[u[0],u[1],l],1,.012,.5,.5));for(let c=0,u=e.n(.05);c<u;c++){let h=e.rnd(),d=e.rnd();h+d>1&&(h=1-h,d=1-d),e.put(s[0]+(o[0]-s[0])*h+(a[0]-s[0])*d,s[1]+(o[1]-s[1])*h+(a[1]-s[1])*d,l+e.j(.01),1,.5)}return e.ring(e.n(.06),[0,0,l],.58,"xy",1,.012,.5),e.agent([1.45,1.05,.3],.8),e.done()},helix(r){const e=gn(r,91),t=4.4,n=.78,i=2.6,s=.7,o=(a,l)=>{const c=a*i*oi+l;return[Math.cos(c)*n,(a-.5)*t,Math.sin(c)*n]};for(const a of[0,Math.PI]){e.curve(e.n(.2),l=>o(l*s,a),0,.014,0,s);for(let l=0,c=e.n(.05);l<c;l++){const u=s+(Math.floor(e.rnd()*26)+e.rnd()*.32)/26*(1-s),h=o(u,a);e.put(h[0]+e.j(.01),h[1]+e.j(.01),h[2]+e.j(.01),.6,u)}}for(let a=0,l=e.n(.15);a<l;a++){const c=Math.round(e.rnd()*20)/20*s,u=o(c,0),h=o(c,Math.PI),d=e.rnd();e.put(Qe(u[0],h[0],d),u[1]+e.j(.01),Qe(u[2],h[2],d),0,c)}for(let a=0;a<6;a++)e.shell(e.n(.02),o(.08+a*.12,0),.12,1,.08+a*.12);return e.ring(e.n(.03),o(.97,0),.22,"xz",1,.008,.97),e.done()}},_f={};for(const r of Dt){const e=`auj_${r.id}`;Oc[e]=t=>{const n=_f[e];if(!n)return Oc[r.id](t);const i=gn(t,300+r.level*7+r.id.length);let s=1/0,o=-1/0,a=1/0,l=-1/0,c=1/0,u=-1/0;for(const g of n)for(let p=0;p<g.v.length;p+=3)s=Math.min(s,g.v[p]),o=Math.max(o,g.v[p]),a=Math.min(a,g.v[p+1]),l=Math.max(l,g.v[p+1]),c=Math.min(c,g.v[p+2]),u=Math.max(u,g.v[p+2]);const h=Math.min(3.1/Math.max(.001,o-s),2.85/Math.max(.001,l-a)),d=(s+o)/2,f=(a+l)/2,m=(c+u)/2,_={...i,put:(g,p,x,y,v)=>i.put((g-d)*h,(p-f)*h,(x-m)*h,y,v)};return $w(n,_,i.n(.94)),i.done()}}const Qw=3.2,eE=3.1,yi=(r,e,t,n=1)=>{const i=r.stages&&r.stages[r.cur];if(i&&r.W){const s=i.top?-.4:0,o=h_*(7.2-s),a=o*r.aspect,l=((i.x+i.w/2)/r.W*2-1)*a,c=(1-(i.y+i.h/2)/r.H*2)*o,u=Math.min(i.w/r.W*2*a/Qw,i.h/r.H*2*o/eE);return[l,c,s,e,i.top?t*.6:t,0,n*Math.max(.3,Math.min(i.top?.62:1,u))]}return r.mobile?[0,r.hh*.47,-.4,e,t*.6,0,.5*n]:[r.hw*.47,.05,0,e,t,0,n]},ri={cloud:{shape:"cloud",fx:0,col:["#2F80FF","#EAF1FF"],fade:0,halo:0,sway:0,pose:()=>[0,0,-1,0,0,0,1.2]},name:{shape:"name",fx:0,col:["#DCE8FF","#2F80FF"],fade:.95,halo:.2,sway:.05,pose:r=>[0,r.mobile?.25:.05,0,0,0,0,r.hw*.9]},sphere:{shape:"sphere",fx:1,col:["#2F80FF","#EAF1FF"],fade:1,halo:1,sway:0,pose:r=>[0,0,0,0,0,.18,r.mobile?.77:1]},terrain:{shape:"terrain",fx:2,col:["#2F80FF","#EAF1FF"],fade:.42,halo:0,sway:0,pose:()=>[0,0,0,.55,0,.18,1]},doublons:{shape:"doublons",fx:15,col:["#2F80FF","#5CF6FF"],fade:1,halo:.35,sway:.2,pose:r=>yi(r,.1,-.4,1.06)},rapport:{shape:"rapport",fx:16,col:["#2F80FF","#FFD84D"],fade:1,halo:.35,sway:.2,pose:r=>yi(r,.1,-.5,.95)},devis:{shape:"devis",fx:13,col:["#2F80FF","#D2F65A"],fade:1,halo:.35,sway:.2,pose:r=>yi(r,.1,-.5,.95)},sms:{shape:"sms",fx:12,col:["#2F80FF","#FF7AD9"],fade:1,halo:.35,sway:.2,pose:r=>yi(r,.06,-.36,.92)},voice:{shape:"voice",fx:11,col:["#2F80FF","#C49BFF"],fade:1,halo:.35,sway:.18,pose:r=>yi(r,.06,-.42,.95)},wave:{shape:"wave",fx:3,col:["#2F80FF","#7CF5D0"],fade:1,halo:.35,sway:.22,pose:r=>yi(r,.12,-.5,.92)},radar:{shape:"radar",fx:4,col:["#2F80FF","#35E08B"],fade:1,halo:.3,sway:.16,pose:r=>yi(r,.06,-.34,.95)},switch:{shape:"switch",fx:5,col:["#2F80FF","#FFC46B"],fade:1,halo:.3,sway:.2,pose:r=>yi(r,.1,-.38,.95)},server:{shape:"server",fx:6,col:["#35E08B","#F4F7FF"],fade:1,halo:.45,sway:.16,pose:r=>yi(r,.12,-.3,.98)},invoice:{shape:"invoice",fx:7,col:["#5C9BFF","#FFB347"],fade:1,halo:.3,sway:.2,pose:r=>yi(r,.08,-.48,1)},film:{shape:"film",fx:8,col:["#2F80FF","#FF6B6B"],fade:1,halo:.3,sway:.2,pose:r=>yi(r,.1,-.35,.95)},site:{shape:"site",fx:14,col:["#2F80FF","#5EC8FF"],fade:1,halo:.32,sway:.18,pose:r=>yi(r,.06,-.4,.98)},dim:{shape:"terrain",fx:2,col:["#2F80FF","#EAF1FF"],fade:.3,halo:0,sway:0,pose:()=>[0,0,0,.55,0,.18,1]},path:{shape:"helix",fx:10,col:["#2F80FF","#8AB8FF"],fade:.6,halo:.15,sway:.1,pose:r=>r.mobile?[r.hw*.55,0,-1.2,0,0,.12,.7]:[r.hw*.72,0,-.4,0,0,.14,1]},end:{shape:"sphere",fx:1,col:["#2F80FF","#EAF1FF"],fade:.62,halo:.6,sway:0,pose:r=>r.mobile?[0,r.hh*.45,-1.8,0,0,.18,.58]:[r.hw*.74,.3,-1.8,0,0,.18,.74]}},tE=["#9DA4AE","#7FA2DC"];for(const r of Dt){const e=`auj_${r.id}`,t=ri[r.id];ri[e]={shape:e,col:tE,fade:.86,halo:0,sway:.05,old:1,pose:t.pose,get fx(){return _f[e]?20:t.fx}}}const f_={cloud:[6,0],name:[0,0],server:[8,0],path:[20,0]};Dt.forEach(r=>{f_[`auj_${r.id}`]=[0,0]});const pa=r=>f_[Rt[r]]||[14,1],ql=Rt.map((r,e)=>{let t=0;for(let n=0;n<e;n++)t+=pa(n)[0];return t}),nh=r=>Zw(r)?.color||(ri[r].col[1]==="#EAF1FF"?"#8AB8FF":ri[r].col[1]),nE=r=>r*r*(3-2*r)-.055*Math.sin(oi*r)*(1-Math.abs(2*r-1)*.35),iE=r=>2.4*.043*Math.cos(r*.043)+1.1*.107*Math.cos(r*.107+1.3),ro=96,rE=`
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`,sE=`
uniform float uTime; uniform float uMix; uniform float uSize; uniform float uPixel; uniform float uVel;
uniform float uFlight; uniform float uWarp; uniform float uAspect;
uniform float uFxA; uniform float uFxB; uniform float uScatter; uniform float uFocus;
uniform vec3 uMouse; uniform float uMouseStrength; uniform vec3 uPulsePos; uniform float uPulse;
uniform float uOldA; uniform float uOldB;
// Mise en lumière d'une partie de la sculpture (un chiffre clé survolé) : points dont prm ∈ [x, y] et ton ∈ [z, w],
// avec une intensité propre à chacune des deux formes en cours (uHiAB.x pour A, .y pour B).
uniform vec4 uHi; uniform vec2 uHiAB;
uniform float uLife;
attribute vec3 aTo; attribute vec2 aMetaA; attribute vec2 aMetaB; attribute vec3 aRand;
varying float vAlpha; varying float vToneA; varying float vToneB; varying float vM; varying float vStretch; varying vec2 vDir;
${rE}
mat2 rot(float a){ float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
float hiOf(vec2 meta){ return step(uHi.x, meta.y) * step(meta.y, uHi.y) * step(uHi.z, meta.x) * step(meta.x, uHi.w); }
// La partie désignée s'avive, le reste de la sculpture s'efface à moitié (sans jamais disparaître).
float lit(float g, vec2 meta, float amt){ return mix(g, mix(min(g, -.15) - .38, max(g, .3) + .9, hiOf(meta)), amt); }

// Chaque forme a sa vie propre : déplacement + éclat. T est son horloge : à pleine vitesse pour le futur,
// ralentie pour le travail manuel d'aujourd'hui (« le manuel peine, l'automatique coule »). Toujours fluide :
// une animation saccadée se confondait avec un ordinateur qui rame.
vec3 life(vec3 p, vec2 meta, float id, float T, out float glow){
  glow = 0.;
  float tone = meta.x, prm = meta.y;
  if (prm < -.5) { p.y += sin(uTime * .25 + aRand.x * 6.283) * .14; p.x += cos(uTime * .2 + aRand.y * 6.283) * .12; return p; }
  // La marque d'agent, commune à toutes les formes du futur : l'anneau respire, la barre de regard travaille.
  if (prm > 39.5) { glow = prm > 40.5 ? .55 + .45 * sin(uTime * 3.1 + p.x * 4.) : .22 + .12 * sin(uTime * 1.2 + aRand.x * 6.283); return p; }
  if (id > 19.5) {
    // Le geste manuel, en boucle (silhouettes Blender) : 0 structure · 1–1,99 séquence qui grossit puis recommence
    // · 2 partie qui vibre (sonnerie) · 3 voyant lent · 4 va-et-vient vertical (tampon, crayon, claquette).
    glow = .1 + .05 * sin(uTime * .8 + p.y * 3.) + tone * .14;
    if (prm > 3.5) { float d = smoothstep(.55, 1., .5 + .5 * sin(uTime * 2.3)); p.y -= d * .24; glow += d * .55 * tone; }
    else if (prm > 2.5) glow = .3 + .5 * (.5 + .5 * sin(uTime * 2.));
    else if (prm > 1.995) { float ring = step(.5, fract(uTime * .45)); p.x += ring * sin(uTime * 61.) * .022; p.z += ring * cos(uTime * 47.) * .018; glow += ring * .2; }
    else if (prm > .999) {
      float s = fract(uTime / 2.6) * 1.18, r = prm - 1., age = s - r;
      float on = step(0., age);
      p.y -= (1. - smoothstep(0., .05, age)) * .1;
      glow = on > .5 ? glow + .12 + smoothstep(.06, 0., age) * .6 : -5.;
    }
    return p;
  }
  if (id > 15.5) {
    // Rapport du lundi (cycle d'environ 11 s) : les lignes du fichier passent la porte de contrôle, les fautives tombent dans le bac ;
    // les chiffres clés s'allument, la courbe se trace, chaque nombre du commentaire est vérifié, puis le sceau se pose.
    float s = fract(uTime * .09), fin = 1. - smoothstep(.95, 1., s);
    vec2 C = vec2(1.18, .95);
    if (prm > 4.9) glow = (prm > 5.05 ? .3 : .08) + .08 * sin(uTime * .8 + p.y * 3.);
    else if (prm > 4.4) {
      float d = clamp((s - .86) / .09, 0., 1.), act = step(.86, s) * (1. - step(.999, d));
      p.xy = C + (p.xy - C) * (act > .5 ? 1. + d * 2.4 : 0.);
      p.z -= (1. - act) * .4;
      glow = act > .5 ? (1. - d) * 1.8 - .3 : -5.;
    }
    else if (prm > 3.9) {
      float on = smoothstep(.84, .88, s) * fin;
      p.xy = C + (p.xy - C) * (1. + (1. - on) * .45);
      p.z += (1. - on) * .2;
      glow = mix(-.62, .7 + .3 * sin(uTime * 4.), on) + smoothstep(.84, .86, s) * (1. - smoothstep(.86, .93, s)) * 1.3;
    }
    else if (prm > 2.9) {
      float k = floor((prm - 3.) * 10. + .5), st = .5 + k * .05, on = smoothstep(st, st + .02, s) * fin;
      glow = mix(-.55, .7 + .25 * sin(uTime * 3. + k), on) + smoothstep(st, st + .01, s) * (1. - smoothstep(st + .01, st + .08, s)) * 1.6;
    }
    else if (prm > 1.9) {
      float f = (prm - 2.) * 2., st = .3 + f * .14, on = smoothstep(st, st + .015, s) * fin;
      p.y -= (1. - on) * .05;
      glow = mix(-.7, .5 + .2 * sin(uTime * 2. + f * 6.), on) + smoothstep(st, st + .01, s) * (1. - smoothstep(st + .01, st + .06, s)) * 1.2;
    }
    else if (prm > 1.65) {
      float y = mix(.74, -.62, fract(uTime * .45));
      glow = .45 + exp(-pow((p.y - y) * 7., 2.)) * 1.3;
    }
    else if (prm > .999) {
      float k = floor((prm - 1.) * 10. + .5), st = .06 + k * .055, on = smoothstep(st, st + .02, s) * fin;
      p.y -= (1. - on) * .04;
      glow = mix(-.62, .65, on) + smoothstep(st, st + .01, s) * (1. - smoothstep(st + .01, st + .09, s)) * 1.5;
    }
    else {
      // Les lignes avancent dans leur couloir ; à la porte, les bonnes entrent, les fautives sont écartées vers le bac.
      float l = floor(prm / .15 + .001), t = (prm - l * .15) / .14, tt = fract(t + uTime * .07);
      p.x += (tt - t) * 1.1;
      float env = smoothstep(0., .1, tt);
      if (abs(tone - .15) < .05) {
        float d = smoothstep(.84, 1., tt);
        p.y -= d * d * (1.53 - l * .2);
        p.x += d * .12;
        glow = mix(-.7, .45, env * (1. - smoothstep(.96, 1., tt))) + smoothstep(.78, .88, tt) * (1. - smoothstep(.95, 1., tt)) * 1.3;
      } else {
        glow = mix(-.7, .35, env * (1. - smoothstep(.9, 1., tt)));
      }
    }
    return p;
  }
  if (id > 14.5) {
    // Fin des doubles saisies (cycle d'environ 12 s) : la fiche s'allume, trois paquets de lumière passent la porte et filent vers
    // la facturation, le tableur et l'agenda, qui se valident l'un après l'autre ; puis la fiche ressaisie glisse vers la porte,
    // son score se remplit, le bouclier se ferme en tournant, et la copie en trop éclate en fragments.
    float s = fract(uTime * .085), fin = 1. - smoothstep(.95, 1., s), shut = smoothstep(.72, .74, s) * (1. - smoothstep(.9, .94, s));
    float slide = smoothstep(.5, .62, s), boom = smoothstep(.82, .93, s), shake = smoothstep(.72, .73, s) * (1. - smoothstep(.74, .8, s));
    if (prm > 5.9) {
      float q = prm - 6., d = floor(q / .3 + .001), t = (q - d * .3) / .28, h = (s - .1 - d * .04) / .25;
      float g = exp(-pow((t - h) * 13., 2.));
      glow = g > .03 ? g * 2.6 - .2 : -5.;
      p.z += g * .05;
    }
    else if (prm > 4.9) glow = (prm > 5.05 ? .3 : .08) + .08 * sin(uTime * .8 + p.y * 3.);
    else if (prm > 3.9) {
      vec2 C = vec2(-.4, -.58);
      p.xy = C + (prm > 4.05 ? rot(uTime * 1.4) : mat2(1.)) * (p.xy - C) * (.35 + .65 * shut);
      glow = mix(-.8, .9 + .3 * sin(uTime * 7.), shut) + smoothstep(.72, .73, s) * (1. - smoothstep(.73, .8, s)) * 1.5;
    }
    else if (prm > 2.9) {
      // La fiche ressaisie et son score : arrivée, glissade, secousse devant la porte, puis éclatement.
      p.x += mix(-.35, .24, slide) + sin(uTime * 55.) * .025 * shake;
      p += normalize(aRand - .5) * boom * boom * .85;
      float vis = smoothstep(.48, .54, s) * (1. - boom) + boom * (1. - boom) * 2.2;
      if (prm > 3.45) {
        float k = floor((prm - 3.5) * 10. + .5), st = .62 + k * .035, on = smoothstep(st, st + .015, s);
        glow = vis < .02 ? -5. : mix(-.6, .8, on * vis) + smoothstep(st, st + .01, s) * (1. - smoothstep(st + .01, st + .06, s)) * 1.3;
      } else glow = vis < .02 ? -5. : mix(-.8, prm > 3.05 ? .42 : .26, vis);
    }
    else if (prm > 1.9) {
      float k = floor((prm - 2.) * 10. + .5), st = .35 + k * .04, on = smoothstep(st, st + .015, s) * fin;
      if (k > 2.5) {
        // L'onde autour du rendez-vous qui vient d'être posé.
        vec2 C = vec2(1.02, -.84); float e = fract(max(0., s - .43) * 2.6);
        p.xy = C + (p.xy - C) * (.4 + e * 1.6);
        glow = s > .43 ? (1. - e) * 1.2 * fin - .2 : -5.;
      } else {
        p.y -= (1. - on) * .04;
        glow = mix(-.6, .75 + .2 * sin(uTime * 3. + k), on) + smoothstep(st, st + .01, s) * (1. - smoothstep(st + .01, st + .08, s)) * 1.7;
      }
    }
    else if (prm > 1.77) {
      // La lentille de comparaison : deux anneaux en pointillés qui tournent en sens contraire, plus vite pendant un contrôle.
      vec2 C = vec2(-.4, .48); float r = length(p.xy - C);
      p.xy = C + rot(uTime * (r < .16 ? .8 : -.5) * (1. + shut * 2.5)) * (p.xy - C);
      glow = .55 + .35 * exp(-pow((s - .12) * 25., 2.)) + shut * .3;
    }
    else if (prm > 1.65) {
      float y = mix(1.1, -1.1, fract(uTime * .45));
      glow = .4 + exp(-pow((p.y - y) * 7., 2.)) * 1.3 + shut * .5;
    }
    else if (prm > .999) {
      float k = floor((prm - 1.) * 10. + .5), st = .02 + k * .025, on = smoothstep(st, st + .02, s) * fin;
      glow = mix(-.55, .62, on) + smoothstep(st, st + .01, s) * (1. - smoothstep(st + .01, st + .08, s)) * 1.4;
    }
    else {
      // Les câbles : le chemin parcouru par la copie reste allumé, de petites impulsions y circulent en continu.
      float d = floor(prm / .3 + .001), t = (prm - d * .3) / .28, h = (s - .1 - d * .04) / .25;
      glow = .1 + step(t, h) * .42 * fin + pow(fract(t * 3. - uTime * .6), 14.) * .5;
    }
    return p;
  }
  if (id > 13.5) {
    // Le site qui se construit (cycle d'environ 10 s) : chaque bloc arrive du fond à son tour, l'agent veille.
    float s = fract(uTime * .1);
    if (prm > 1.95) glow = .4 + .3 * sin(uTime * 4.);
    else if (prm > .999) {
      float r = (prm - 1.) * .72 + .04, on = smoothstep(r, r + .05, s) * (1. - smoothstep(.93, .99, s));
      p.z -= (1. - on) * .6; p.y -= (1. - on) * .12;
      glow = on > .01 ? mix(-.65, .3 + tone * .4, on) + smoothstep(r + .05, r, s) * step(r, s) * 1.2 : -5.;
    }
    else glow = .16 + .06 * sin(uTime * .8 + p.x * 2.);
    return p;
  }
  if (id < .5) {
    glow = .4 + .3 * sin(uTime * 2.2 + aRand.x * 40.);
  } else if (id < 1.5) {
    p.xz = rot(uTime * .07) * p.xz;
    float n = snoise(p * 1.25 + vec3(0., 0., uTime * .12));
    p += normalize(p) * n * .22; glow = n * .9;
  } else if (id < 2.5) {
    p.xz = rot(uTime * .07) * p.xz;
    p.y += sin(p.x * 1.4 + uTime * .55) * .16 + cos(p.z * 1.7 + uTime * .4) * .14;
  } else if (id < 3.5) {
    if (prm < 1.5) { float w = .5 + .5 * sin(prm * 26. - uTime * 3.2), w2 = .5 + .5 * sin(prm * 9. + uTime * 1.3); p.y *= .32 + .68 * w * (.55 + .45 * w2); glow = w * .55; }
    else { p.yz = rot(uTime * (prm > 2.5 ? -.45 : .3)) * p.yz; glow = .35 + .25 * sin(uTime * 2. + prm); }
  } else if (id < 4.5) {
    // JobHunter, le tri (une fiche toutes les 2 s, trajet de 12 s) : la fiche glisse sur le rail, marque un temps
    // sous le trait de lecture, change d'aspect une fois lue, puis part sur sa pile. Le trait s'éclaire à chaque lecture.
    if (prm > 3.9) glow = .02 + .04 * sin(uTime * .6 + p.x * 4.);
    else if (prm > 3.4) glow = .6 + .3 * sin(uTime * 2.2);
    else if (prm > 2.9) glow = .22 + .1 * sin(uTime * .9 + p.y * 7.);
    else if (prm > 1.9) glow = .18 + pow(1. - fract(uTime / 2. - .72), 6.) * 1.3;
    else if (prm > .999) {
      float x = (prm - 1.) * 10. + .001, k = floor(x), r = x - k, kept = step(.4, r), after = step(.2, r - kept * .5);
      float t = fract(k / 6. + uTime / 12.), e = smoothstep(.66, .97, t), u = 1. - e;
      // Repères de radar() : rail de x = −1,32 au trait de lecture (x = 0,08), dessus des deux piles.
      vec3 R = vec3(.08, .1, .08);
      vec3 c = vec3(mix(-1.32, .08, min(t / .58, 1.)), .1, smoothstep(.48, .6, t) * .08);
      if (t > .66) {
        vec3 E = kept > .5 ? vec3(1.364, .858, .01) : vec3(1.23, -.664, -.02);
        vec3 C1 = kept > .5 ? vec3(.63, .8, .45) : vec3(.63, -.2, .35);
        c = u * u * R + 2. * u * e * C1 + e * e * E;
      }
      // Une offre écartée bascule en tombant ; une retenue reste droite.
      if (kept < .5) p.xy = rot(-.45 * e) * p.xy;
      p += c;
      float vis = after > .5 ? smoothstep(.6, .64, t) * (1. - smoothstep(.93, .985, t)) : smoothstep(0., .06, t) * (1. - smoothstep(.6, .64, t));
      float level = after > .5 ? (kept > .5 ? .45 : mix(.05, -.4, e)) : .16;
      glow = vis > .05 ? mix(-.7, level + exp(-pow((t - .62) / .02, 2.)) * 1.1, vis) : -5.;
    }
    else glow = .05 + .04 * sin(uTime * .8 + p.x * 3.);
  } else if (id < 5.5) {
    glow = pow(.5 + .5 * sin((prm - uTime * .22) * 12.566), 14.) * 1.9;
    if (tone > .9) glow += .2;
  } else if (id < 6.5) {
    // L'hypercube : rotation dans les plans XW puis YW, projection en perspective depuis la 4e dimension,
    // puis une légère inclinaison pour lire la profondeur. Le cube intérieur devient l'extérieur, et inversement.
    if (prm > 2.95) glow = .75 + .15 * sin(uTime * 1.3);
    else {
      bool vx = prm > 1.995;
      float q = vx ? (prm - 2.) * 16. : (prm - 1.) * 64., idx = floor(q + 1e-3);
      float t = vx ? 0. : clamp(fract(q + 1e-3) / .9, 0., 1.), v = vx ? idx : floor(idx / 4.), d = idx - floor(idx / 4.) * 4.;
      vec4 A = vec4(mod(floor(v), 2.), mod(floor(v / 2.), 2.), mod(floor(v / 4.), 2.), mod(floor(v / 8.), 2.)) * 2. - 1.;
      vec4 P = A + (vx ? vec4(0.) : (1. - step(.5, abs(vec4(d) - vec4(0., 1., 2., 3.)))) * 2. * t);
      float a = uTime * .21, c = cos(a), s = sin(a);
      P = vec4(P.x * c - P.w * s, P.y, P.z, P.x * s + P.w * c);
      a = uTime * .13 + .6; c = cos(a); s = sin(a);
      P = vec4(P.x, P.y * c - P.w * s, P.z, P.y * s + P.w * c);
      float f = 2.8 / (3.2 - P.w);
      p = P.xyz * f * .55;
      p.xz = rot(uTime * .07 + .5) * p.xz; p.yz = rot(.32) * p.yz;
      p += (aRand - .5) * (vx ? .09 : .016);
      // Plus proche dans la 4e dimension = plus vif. Les messages courent sur les arêtes, chacune à son rythme.
      float near = (f - 1.) * .4;
      glow = vx ? .5 + .2 * sin(uTime * 1.7 + v * 1.3) + near
                : .08 + near + pow(fract(t * .5 - uTime * .32 + idx * .618), 16.) * 1.8;
    }
  } else if (id < 7.5) {
    if (prm > 1.5) glow = .5 + .45 * sin(uTime * 2.6);
    else { glow = smoothstep(.07, 0., abs(prm - (1. - fract(uTime * .22)))) * 1.7; p.z += sin(uTime * .9 + prm * 3.) * .035; }
  } else if (id < 8.5) {
    if (tone > .9) glow = .35 + .3 * sin(uTime * 2.4);
    else { p.y += sin(prm * 9.42 + uTime * 1.1) * .07; glow = pow(.5 + .5 * sin((prm - uTime * .18) * 18.85), 10.) * 1.3; }
  } else if (id > 12.5) {
    // Devis IA (cycle d'environ 11 s) : la demande coule vers la feuille, le devis s'écrit ligne par ligne, le total s'allume,
    // les trois relances partent en éventail, puis la case « Bon pour accord » se coche.
    float s = fract(uTime * .09), fin = 1. - smoothstep(.95, 1., s);
    float scanY = max(.55 - 2.833 * (s - .03), -.6), scanOn = smoothstep(0., .03, s) * (1. - smoothstep(.4, .45, s));
    if (prm > 4.9) glow = (prm > 5.05 ? .3 : .08) + .08 * sin(uTime * .8 + p.y * 3.) + exp(-pow((p.y - scanY) * 9., 2.)) * scanOn * step(abs(p.x), .8) * .9;
    else if (prm > 4.4) {
      vec2 C = vec2(-.52, -.84);
      float d = clamp((s - .86) / .09, 0., 1.), act = step(.86, s) * (1. - step(.999, d));
      p.xy = C + (p.xy - C) * (act > .5 ? .5 + d * 3.2 : 0.);
      p.z -= (1. - act) * .4;
      glow = act > .5 ? (1. - d) * 1.8 - .3 : -5.;
    }
    else if (prm > 3.9) {
      float on = smoothstep(.84, .88, s) * fin;
      p.z += (1. - on) * .2;
      glow = mix(-.62, .6 + .35 * sin(uTime * 4.), on) + smoothstep(.84, .86, s) * (1. - smoothstep(.86, .93, s)) * 1.2;
    }
    else if (prm > 2.9) {
      float k = floor((prm - 3.) * 10. + .5), st = .48 + k * .1, d = clamp((s - st) / .3, 0., 1.), e = d * d * (3. - 2. * d);
      float launched = step(st, s) * step(.5, fin);
      vec3 S0 = vec3(.66, -.58, -.02);
      p = S0 + (p - S0) * launched * smoothstep(0., .035, s - st);
      p += vec3(.82 * e, (1.5 - k * .62) * sin(e * 1.5708) + sin(e * 9.42 + k) * .035 * e, .3 * e);
      p.z -= (1. - launched) * .5;
      glow = launched > .5 ? mix(1.1 + .3 * sin(uTime * 5. + k * 2.), .15, smoothstep(.6, 1., d)) : -5.;
    }
    else if (prm > 1.9) {
      float on = smoothstep(.4, .43, s) * fin;
      glow = mix(-.62, .5 + .3 * sin(uTime * 3.), on) + smoothstep(.4, .42, s) * (1. - smoothstep(.42, .52, s)) * 1.4;
    }
    else if (prm > 1.65) {
      p.y += scanY;
      p.x *= smoothstep(0., .6, scanOn);
      p.z -= (1. - scanOn) * .4;
      glow = scanOn > .01 ? mix(-.7, 1.1 + .3 * sin(uTime * 9. + p.x * 6.), scanOn) : -5.;
    }
    else if (prm > .999) {
      float age = s - .03 - (prm - 1.) * .6, on = smoothstep(0., .02, age) * fin;
      p.x -= (1. - on) * .12;
      glow = mix(-.62, tone > .5 ? .5 : .2, on) + smoothstep(0., .01, age) * (1. - smoothstep(.01, .09, age)) * 1.4;
    }
    else {
      // Les mots glissent le long de leur rangée jusqu'à la feuille, où ils s'éteignent.
      float l = floor(prm * 3. + .001), t = (prm - l / 3.) / .3, tt = fract(t + uTime * .06), u = 1. - t, v = 1. - tt;
      vec3 P0 = vec3(-1.85, .95 - l * .13, .5), P1 = vec3(-1.35, 1.3 - l * .13, .32), P2 = vec3(-.82, .4 - l * .1, .04);
      p += (v * v * P0 + 2. * v * tt * P1 + tt * tt * P2) - (u * u * P0 + 2. * u * t * P1 + t * t * P2);
      float env = smoothstep(0., .12, tt) * (1. - smoothstep(.82, 1., tt));
      glow = mix(-.7, (tone > .5 ? .9 : .4) * (.45 + .55 * (1. - smoothstep(.35, .5, s))), env);
    }
  } else if (id > 11.5) {
    // Accueil SMS : le voyant clignote, les ondes de l'appel manqué s'élargissent, la conversation s'écrit bulle après bulle,
    // les trois créneaux tournent sur une orbite inclinée, et celui choisi par le client bat.
    if (prm > 3.5) glow = (prm > 4.05 ? .24 : .07) + .1 * sin(uTime * .8 + p.y * 3.);
    else if (prm > 2.5) {
      p.xz = rot(uTime * .28) * p.xz; p.yz = rot(.34) * p.yz;
      glow = tone > .9 ? .5 + .45 * sin(uTime * 3.2) : .1 + .08 * sin(uTime * 1.4 + prm * 30.);
    }
    else if (prm > 1.9) { float d = fract(uTime * .32 - (prm - 2.) * 3.333); p.xy *= .85 + d * 1.15; glow = pow(1. - d, 2.) * 1.5 - .35; }
    else if (prm > 1.5) glow = .4 + .9 * step(.5, fract(uTime * 1.1));
    else {
      float s = fract(uTime * .1) * 1.3, at = (prm - 1.) / .08 / 5.5, age = s - at, on = smoothstep(0., .03, age);
      p.y -= (1. - on) * .12;
      glow = mix(-.62, .22, on) + smoothstep(0., .012, age) * smoothstep(.16, .02, age) * 1.5;
    }
  } else if (id > 10.5) {
    // Standardiste : l'orbe respire et parle, les ondes partent vers l'agenda, le créneau réservé bat.
    vec3 c = vec3(-1.3, .05, 0.);
    if (prm > 3.5) glow = .08 + .1 * sin(uTime * .8 + p.x * 3.);
    else if (prm > 2.5) { float h = .5 + .5 * sin(uTime * 2.8); glow = .45 + h * .9; p.z += h * .03; }
    else if (prm > 1.5) { float n = snoise(p * 2.6 + vec3(0., 0., uTime * .7)); float talk = .5 + .5 * sin(uTime * 7.) * sin(uTime * 2.3); p = c + (p - c) * (1. + n * .14 + talk * .07); glow = .45 + n * .8 + talk * .3; }
    else if (prm > .999) { float d = fract(uTime * .42 - (prm - 1.) * 2.222); p = c + (p - c) * (.62 + d * .8); glow = pow(1. - d, 2.) * 1.7 - .25; }
    else { glow = pow(.5 + .5 * sin((prm - uTime * .24) * 18.85), 10.) * 1.5; if (tone > .9) glow += .3; }
  } else {
    // La trajectoire : la lumière monte le long du chemin parcouru ; au-delà de 2026, les pointillés scintillent doucement.
    p.xz = rot(uTime * .3) * p.xz;
    if (prm > .7 && tone < .9) glow = .1 + .4 * pow(.5 + .5 * sin(uTime * 1.4 - prm * 30.), 4.);
    else { glow = pow(fract(prm * 2. - uTime * .25), 6.) * 1.5; if (tone > .9) glow += .35; }
  }
  return p;
}

void main(){
  float gA; float gB;
  // L'horloge de la vie des formes (uLife) : elle recule quand on remonte la page — le geste se rembobine —
  // et ralentit la nuit à Paris. Celle du travail manuel est encore ralentie, jamais saccadée.
  float tSlow = uLife * .6;
  vec3 a = life(position, aMetaA, uFxA, mix(uLife, tSlow, uOldA), gA);
  vec3 b = life(aTo, aMetaB, uFxB, mix(uLife, tSlow, uOldB), gB);
  // Une forme peut cacher un point en renvoyant un éclat < −2 : il devient transparent, sans fantôme.
  float hA = step(-2., gA), hB = step(-2., gB); gA = max(gA, -.7); gB = max(gB, -.7);
  if (uHiAB.x + uHiAB.y > .001) { gA = max(lit(gA, aMetaA, uHiAB.x), -.7); gB = max(lit(gB, aMetaB, uHiAB.y), -.7); }
  // Chaque point part à son heure : la forme se défait puis se reforme par vagues.
  float m = clamp(uMix * 1.65 - aRand.x * .65, 0., 1.);
  m = m * m * (3. - 2. * m);
  float mid = sin(m * 3.14159);
  // Le voyage : la forme quittée file vers le visiteur et le dépasse, la suivante arrive du fond de l'espace.
  float leave = 1. - step(.5, m), u = min(m * 2., 1.), v = max(m * 2. - 1., 0.);
  vec3 pos = mix(mix(a, b, m), mix(b, a, leave), uFlight);
  vec3 sw = vec3(sin(pos.y * 1.9 + uTime * .9 + aRand.y * 6.283), cos(pos.z * 1.7 + uTime * .7 + aRand.z * 6.283), sin(pos.x * 2.1 + uTime * .8 + aRand.x * 6.283));
  pos += sw * mid * uScatter * (.3 + aRand.z * .9) * (1. - uFlight * .6);
  vec4 world = modelMatrix * vec4(pos, 1.);
  vec3 dm = world.xyz - uMouse; float dist = length(dm);
  world.xyz += normalize(dm + 1e-4) * smoothstep(1.1, 0., dist) * .42 * uMouseStrength;
  // Onde de choc au clic : un anneau part du doigt et bouscule les points.
  vec3 dp = world.xyz - uPulsePos; float pd = length(dp) - (1. - uPulse) * 4.2; float ring = exp(-pd * pd * 6.) * uPulse;
  world.xyz += normalize(dp + 1e-4) * ring * .5;
  vec4 mv = viewMatrix * world;
  float depth = -mv.z;
  float go = uFlight * leave * u * u, come = uFlight * (1. - leave) * (1. - v) * (1. - v);
  mv.z += go * (depth - 1.1);
  mv.xy *= 1. + go * (.4 + aRand.y * 1.1);
  mv.z -= come * (14. + aRand.z * 30.);
  gl_Position = projectionMatrix * mv;
  float glow = clamp(mix(gA, gB, m) + ring * 1.6, -.7, 2.4);
  float dust = mix(step(aMetaA.y, -.5), step(aMetaB.y, -.5), m);
  float big = step(.955, aRand.y);
  float coc = abs(depth - uFocus);
  // Traînées : verticales quand la page défile, rayonnantes quand on file d'une étape à l'autre.
  vec2 sc = gl_Position.xy / max(gl_Position.w, .001);
  vDir = normalize(mix(vec2(0., 1.), normalize(vec2(sc.x * uAspect, sc.y) + 1e-4), uWarp) + 1e-4);
  vStretch = 1. + uVel * (2.2 + aRand.x * 2.6) + uWarp * (1.2 + aRand.x * 2.8);
  float size = uSize * (.55 + aRand.z * .9) * (1. + max(glow, 0.) * .45) * mix(1., 3.4, big) * (1. + coc * .18) * (1. + mid * .5 * (1. - uFlight));
  float fly = mix(1., leave > .5 ? 1. - smoothstep(.42, 1., u) : smoothstep(0., .55, v), uFlight);
  vAlpha = (.5 + .5 * glow) * mix(1., .16, big) * mix(1., .3, dust) / (1. + coc * .5) * mix(hA, hB, m) * fly * smoothstep(1.3, 2.8, -mv.z);
  gl_PointSize = vAlpha > .002 ? size * uPixel / max(-mv.z, 1.6) * vStretch : 0.;
  vToneA = aMetaA.x; vToneB = aMetaB.x; vM = m;
}`,oE=`
uniform vec3 uBaseA; uniform vec3 uAccA; uniform vec3 uBaseB; uniform vec3 uAccB; uniform float uFade; uniform float uWarp; uniform float uNight;
varying float vAlpha; varying float vToneA; varying float vToneB; varying float vM; varying float vStretch; varying vec2 vDir;
void main(){
  vec2 c = gl_PointCoord - .5, dr = vec2(vDir.x, -vDir.y);
  c = vec2(dot(c, vec2(-dr.y, dr.x)) * vStretch, dot(c, dr)); float d = length(c);
  if (d > .5) discard;
  float a = smoothstep(.5, .05, d) + smoothstep(.16, 0., d) * .5;
  vec3 col = mix(mix(uBaseA, uAccA, vToneA), mix(uBaseB, uAccB, vToneB), vM);
  // La nuit à Paris, la palette refroidit : un peu moins saturée, tirée vers le bleu.
  col = mix(col, vec3(dot(col, vec3(.3, .59, .11))) * vec3(.78, .9, 1.18), uNight * .38);
  // Aberration chromatique radiale pendant un saut : le rouge en tête de la traînée, le bleu en queue.
  col = max(col + vec3(.55, 0., -.55) * c.y * uWarp * 1.3, 0.);
  gl_FragColor = vec4(col, a * vAlpha * uFade / sqrt(vStretch));
}`,aE=sE.replace(/vec3 life\([\s\S]*?\n}\n/,r=>r.replaceAll("uTime","T")),lE=`
uniform float uTravel; uniform float uDrift; uniform float uWarp; uniform float uPixel; uniform float uTime; uniform float uFade; uniform float uAspect; uniform float uEnd;
uniform vec3 uTint; uniform float uEra;
attribute vec4 aP; attribute vec4 aS; attribute vec3 aC;
varying float vA; varying vec2 vDir; varying float vStretch; varying vec3 vCol;
float bend(float x){ return 2.4 * sin(x * .043) + 1.1 * sin(x * .107 + 1.3); }
void main(){
  float kind = aP.w, L = ${ro.toFixed(1)};
  float dz = kind > 1.5 ? aP.z - uTravel : mod(aP.z - uTravel - (kind < .5 ? uDrift : 0.), L);
  float s = uTravel + dz;
  vec3 p = vec3(aP.x + bend(s) - bend(uTravel), aP.y, 7.2 - dz);
  vec4 mv = modelViewMatrix * vec4(p, 1.);
  gl_Position = projectionMatrix * mv;
  vec2 sc = gl_Position.xy / max(gl_Position.w, .001);
  vDir = normalize(vec2(sc.x * uAspect, sc.y) + 1e-4);
  float streak = min(uWarp * 34. / (dz + 3.), 10.), size, a;
  if (kind < .5) { size = aS.z * 58.; a = (.3 + .7 * aS.x) * (.65 + .35 * sin(uTime * (.8 + aS.y * 2.) + aS.y * 40.)); a *= smoothstep(.8, 4., dz); }
  else if (kind < 1.5) { size = aS.z * 24.; a = .6 + aS.y * .6; streak *= .4; a *= smoothstep(3., 8., dz) * step(s, uEnd + 7.4); }
  else { size = 84.; float here = 1. - smoothstep(.5, 3., abs(dz - 7.2)); a = (.5 + .3 * sin(uTime * 2.2 + aS.x * 1.7)) * (.45 + here * .8); streak = 0.; a *= smoothstep(3., 6., dz); }
  vStretch = 1. + streak;
  vA = a * (1. - smoothstep(L * .45, L, dz)) * step(0., dz) * uFade;
  // Les points trop fins pour l'écran gardent deux pixels, en devenant plus discrets : ainsi ils restent visibles.
  float ps = size * uPixel / max(-mv.z, 1.), floorPs = 2.2 * uPixel;
  vA *= pow(min(1., ps / floorPs), .65);
  gl_PointSize = vA > .003 ? max(ps, floorPs) * vStretch : 0.;
  vCol = mix(aC, uTint, kind < .5 ? step(.8, aS.y) * .75 : 0.);
  // Étalonnage : aujourd'hui (uEra = 0), un gris de bureau sous néon froid ; le futur (1), la palette du projet.
  vCol = mix(vec3(dot(vCol, vec3(.3, .59, .11))) * vec3(.82, .9, 1.04), vCol, uEra);
  vA *= .72 + .28 * uEra;
}`,cE=`
varying float vA; varying vec2 vDir; varying float vStretch; varying vec3 vCol;
void main(){
  vec2 c = gl_PointCoord - .5, dr = vec2(vDir.x, -vDir.y);
  vec2 q = vec2(dot(c, dr), dot(c, vec2(-dr.y, dr.x)) * vStretch);
  float r = length(q) * 2.; if (r > 1.) discard;
  gl_FragColor = vec4(vCol, (smoothstep(1., .0, r) * .75 + smoothstep(.45, .0, r) * .5) * vA / sqrt(vStretch));
}`;function uE(r,{reduced:e=!1,onQuality:t=null,onFrame:n=null,seed:i=0}={}){const s=new Ww({canvas:r,antialias:!1,alpha:!0,powerPreference:"high-performance"}),o=window.matchMedia("(max-width: 760px)").matches;let a=Math.min(window.devicePixelRatio||1,o?1.5:1.75);s.setPixelRatio(a);const l=new c1,c=new Xn(35,1,.1,100);c.position.set(0,0,7.2);const u=o?11e3:26e3,h={},d=L=>h[L]||(h[L]=Oc[L](u)),f=new Gn,m=i?d_(i):Math.random,_=new Float32Array(u*3);for(let L=0;L<u*3;L++)_[L]=m();const g={a:new qt(new Float32Array(u*3),3),b:new qt(new Float32Array(u*3),3),ma:new qt(new Float32Array(u*2),2),mb:new qt(new Float32Array(u*2),2)};f.setAttribute("position",g.a),f.setAttribute("aTo",g.b),f.setAttribute("aMetaA",g.ma),f.setAttribute("aMetaB",g.mb),f.setAttribute("aRand",new qt(_,3));const p={uTime:{value:0},uMix:{value:0},uSize:{value:o?22:25},uPixel:{value:a},uVel:{value:0},uFlight:{value:0},uWarp:{value:0},uAspect:{value:1},uFxA:{value:0},uFxB:{value:0},uScatter:{value:.55},uFocus:{value:7.2},uMouse:{value:new B(9,9,0)},uMouseStrength:{value:0},uFade:{value:1},uPulsePos:{value:new B(9,9,0)},uPulse:{value:0},uBaseA:{value:new Ze},uAccA:{value:new Ze},uBaseB:{value:new Ze},uAccB:{value:new Ze},uOldA:{value:0},uOldB:{value:0},uHi:{value:new Mt(0,0,-1,2)},uHiAB:{value:new $e(0,0)},uLife:{value:0},uNight:{value:0}},x=new Ri({vertexShader:aE,fragmentShader:oE,uniforms:p,transparent:!0,depthWrite:!1,blending:co}),y=new Gu(f,x);y.frustumCulled=!1;const v=new da;v.add(y),l.add(v);const M=new Ri({transparent:!0,depthWrite:!1,blending:co,uniforms:{uFade:{value:0},uTime:p.uTime,uTint:{value:new Ze("#2F80FF")}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:"uniform float uFade; uniform vec3 uTint; varying vec2 vUv; void main(){ float d = length(vUv - .5) * 2.; float core = pow(max(0., 1. - d), 4.); vec3 c = mix(uTint * .7, vec3(.62, .78, 1.), core * .6); gl_FragColor = vec4(c, core * .42 * uFade); }"}),b=new di(new el(8.05,8.05),M);l.add(b);const S=o?240:560,C=new Float32Array(S*3),w=new Float32Array(S*3);for(let L=0;L<S;L++)C[L*3]=(Math.random()-.5)*13,C[L*3+1]=(Math.random()-.5)*8,C[L*3+2]=(Math.random()-.5)*6+1,w[L*3]=.08+Math.random()*.32,w[L*3+1]=Math.random(),w[L*3+2]=.4+Math.random()*1.6;const T=new Gn;T.setAttribute("position",new qt(C,3)),T.setAttribute("aSeed",new qt(w,3));const P=new Ri({transparent:!0,depthWrite:!1,blending:co,uniforms:{uTime:p.uTime,uPixel:p.uPixel,uFade:{value:1}},vertexShader:"uniform float uTime; uniform float uPixel; attribute vec3 aSeed; varying float vA; varying float vT; void main(){ vec3 p = position; p.y = mod(p.y + uTime * aSeed.x + 4., 8.) - 4.; p.x += sin(uTime * .5 + aSeed.y * 6.283) * .35; p.z += cos(uTime * .4 + aSeed.y * 9.) * .25; vec4 mv = modelViewMatrix * vec4(p, 1.); gl_Position = projectionMatrix * mv; gl_PointSize = aSeed.z * uPixel * 34. / -mv.z; vA = smoothstep(4., 2.4, abs(p.y)) * (.45 + .55 * sin(uTime * 1.7 + aSeed.y * 40.)); vT = aSeed.y; }",fragmentShader:"uniform float uFade; varying float vA; varying float vT; void main(){ float d = length(gl_PointCoord - .5); if (d > .5) discard; float a = pow(1. - d * 2., 2.2); vec3 c = mix(vec3(1., .72, .38), vec3(.35, .62, 1.), step(.42, vT)); gl_FragColor = vec4(c, a * vA * uFade * .9); }"});l.add(new Gu(T,P));const F=o?900:2200,k=o?300:560,N=Rt.length-hn.sphere,z=F+k+N,G=new Float32Array(z*4),$=new Float32Array(z*4),H=new Float32Array(z*3),ne=new Ze,I=["#FFFFFF","#CFE0FF","#8AB8FF","#FFE2B8"];for(let L=0;L<z;L++){let D=0,J=-1.95,ae=0,Me=0,_e=Math.random(),Ce=Math.random(),Pe=1;if(L<F){const Se=Math.random()*oi,Ne=2.4+Math.pow(Math.random(),.7)*15;D=Math.cos(Se)*Ne,J=Math.sin(Se)*Ne*.78,ae=Math.random()*ro,Pe=.35+Math.pow(Math.random(),3)*1.5,ne.set(I[Math.floor(Math.random()*I.length)])}else if(L<F+k){const Se=(L-F)/k;Me=1,ae=Se*ro,D=(Math.random()-.5)*.03,J=-1.95+(Math.random()-.5)*.02;const Ne=Math.round(Se*ro)%7===0&&Math.abs(Se*ro-Math.round(Se*ro))<.12;Ce=Ne?1:Math.random()*.25,Pe=Ne?1.9:.55+Math.random()*.4,ne.set(Ne?"#CFE0FF":"#5C9BFF")}else{const Se=hn.sphere+(L-F-k);Me=2,ae=ql[Se]+7.2,_e=Se,ne.set(nh(Rt[Se]))}G.set([D,J,ae,Me],L*4),$.set([_e,Ce,Pe,0],L*4),H.set([ne.r,ne.g,ne.b],L*3)}const re=new Gn;re.setAttribute("position",new qt(new Float32Array(z*3),3)),re.setAttribute("aP",new qt(G,4)),re.setAttribute("aS",new qt($,4)),re.setAttribute("aC",new qt(H,3));const Le={uTravel:{value:0},uDrift:{value:0},uWarp:p.uWarp,uPixel:p.uPixel,uTime:p.uTime,uFade:{value:1},uAspect:p.uAspect,uEnd:{value:ql[hn.end]},uTint:{value:new Ze("#2F80FF")},uEra:{value:1}},Ge=new Gu(re,new Ri({vertexShader:lE,fragmentShader:cE,uniforms:Le,transparent:!0,depthWrite:!1,blending:co}));Ge.frustumCulled=!1,Ge.renderOrder=-2,l.add(Ge);const j=[];for(let L=hn.sphere;L<hn.end;L++)pa(L)[1]&&j.push({at:ql[L]+pa(L)[0]*.88,label:Rt[L+1]});const ee={hw:3.6,hh:2.27,mobile:o},oe={},ie=()=>{const L=r.clientWidth||window.innerWidth,D=r.clientHeight||window.innerHeight;s.setSize(L,D,!1),c.aspect=L/D,c.updateProjectionMatrix(),ee.hh=h_*7.2,ee.hw=ee.hh*c.aspect,ee.mobile=L<=760,ee.W=L,ee.H=D,ee.aspect=c.aspect,p.uAspect.value=c.aspect,pe()};function pe(){Rt.forEach(L=>{ee.cur=L,oe[L]=ri[L].pose(ee)})}ie(),window.addEventListener("resize",ie);let Ee=-1;const ye=L=>{Ee=L,W(ri[Rt[L]],ri[Rt[L+1]])};let et=null,tt=null,be=0,U=null;const Tt=()=>et&&ke>hn.end-.7?hn.end:ke,Ke=L=>{Ee=-2,U=L,W(ri.end,ri[L])},W=(L,D)=>{const J=d(L.shape),ae=d(D.shape);g.a.array.set(J.pos),g.b.array.set(ae.pos),g.ma.array.set(J.meta),g.mb.array.set(ae.meta),g.a.needsUpdate=g.b.needsUpdate=g.ma.needsUpdate=g.mb.needsUpdate=!0,p.uFxA.value=L.fx,p.uFxB.value=D.fx,p.uOldA.value=L.old?1:0,p.uOldB.value=D.old?1:0,p.uBaseA.value.set(L.col[0]),p.uAccA.value.set(L.col[1]),p.uBaseB.value.set(D.col[0]),p.uAccB.value.set(D.col[1])};document.fonts?.load('800 100px "Inter Tight Variable"').then(()=>{delete h.name,Ee>=0&&Ee<=hn.name&&ye(Ee)}).catch(()=>{});let Ae=!0;const mt=async()=>{for(const L of Dt){const D=`auj_${L.id}`,J=await Yw(D);if(!Ae)return;J&&(_f[D]=J,delete h[D],Ee>=0&&(Rt[Ee]===D||Rt[Ee+1]===D)&&ye(Ee))}};(window.requestIdleCallback||(L=>setTimeout(L,1200)))(()=>mt(),{timeout:2500});const R=new $e(0,0),E=new B(9,9,0),q=new B;let Q=0;const te=L=>{R.x=L.clientX/window.innerWidth*2-1,R.y=-(L.clientY/window.innerHeight)*2+1,q.set(R.x,R.y,.5).unproject(c).sub(c.position).normalize(),E.copy(c.position).add(q.multiplyScalar(-c.position.z/q.z)),Q=1};window.addEventListener("pointermove",te,{passive:!0});let K=0;const xe=L=>{te(L),p.uPulsePos.value.copy(E),K=1};window.addEventListener("pointerdown",xe,{passive:!0});const ue=L=>{L.gamma==null||L.beta==null||(R.x=Math.max(-1,Math.min(1,L.gamma/28)),R.y=Math.max(-1,Math.min(1,(L.beta-50)/28)))};!window.matchMedia("(hover: hover) and (pointer: fine)").matches&&!e&&window.addEventListener("deviceorientation",ue,{passive:!0});let Oe=!0,se=0,ce=performance.now(),He=0,ke=0,le=0,nt=0,qe=1,rt=0,O=0,he=0,Y=0,Z=!1,de=0,me=!1,je=0,lt=1,Ft=0,Te={i:0,f:0,a:Rt[0],b:Rt[1],flight:0},Re=null,Ye=0,ge=0,Je=0,Fe=0,Xe=0;const zt=L=>L>=22||L<6?1:L>=20?(L-20)/2:L<8?1-(L-6)/2:0,st=()=>{try{const L=Object.fromEntries(new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Paris",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(new Date).map(D=>[D.type,D.value]));return+L.hour+ +L.minute/60}catch{return 12}};let xt=zt(st());const Zt=setInterval(()=>{xt=zt(st()),p.uNight.value=xt,e&&X()},6e4);p.uNight.value=xt;const At=new Ze,yt=new Ze,gt=new Ze,yn=L=>{const D=Math.min(Rt.length-2,Math.max(0,Math.floor(L))),J=Math.min(1,Math.max(0,L-D)),ae=tt&&be>.001&&D===hn.end-1&&J>.98;ae?(Ee!==-2||U!==tt)&&Ke(tt):D!==Ee&&ye(D),p.uHiAB.value.set(Rt[D]===Re?Ye:0,Rt[D+1]===Re?Ye:0);const Me=pa(D),_e=e||Z?0:Me[1],Ce=ri[Rt[D]],Pe=ri[Rt[D+1]],Se=oe[Rt[D]],Ne=oe[Rt[D+1]],it=_e?nE(J):J*J*(3-2*J),Ht=Math.sin(Math.min(1,Math.max(0,it))*Math.PI);p.uMix.value=J,rt=ql[D]+Me[0]*it,lt=Qe(Ce.old?0:1,Pe.old?0:1,J*J*(3-2*J)),Le.uEra.value=lt,Te={i:D,f:J,a:Rt[D],b:Rt[D+1],flight:_e},p.uFlight.value=_e;const Ot=_e*Ht;c.position.z=7.2-Ot*.55,c.lookAt(0,0,0),c.rotateZ(Ot*(.075*(D%2?1:-1)-iE(rt+18)*.45));const _t=35+Ot*11+he*4;Math.abs(c.fov-_t)>.01&&(c.fov=_t,c.updateProjectionMatrix());const We=Qe(Se[2],Ne[2],it)+Ht*.9*(1-_e);v.position.set(Qe(Se[0],Ne[0],it),Qe(Se[1],Ne[1],it),We),v.rotation.set(Qe(Se[3],Ne[3],it)+R.y*-.1,Qe(Se[4],Ne[4],it)+Math.sin(He*.32)*Qe(Ce.sway,Pe.sway,it)+R.x*.16,Qe(Se[5],Ne[5],it));let Jt=Qe(Se[6],Ne[6],it)*(ae?1-.14*be:1);ae&&ee.mobile&&(v.position.x*=1-be,v.position.y=Qe(v.position.y,ee.hh*.98,be),Jt=Qe(Jt,.3,be)),v.scale.setScalar(Jt),ae&&(p.uMix.value=be),p.uFade.value=Qe(Ce.fade,Pe.fade,it)*qe,p.uFocus.value=c.position.z-We,b.position.set(v.position.x,v.position.y,We-.7),b.scale.setScalar(Jt*(1+Math.sin(He*.6)*.04)),M.uniforms.uFade.value=(Qe(Ce.halo,Pe.halo,it)*(1-Ht*(.5+_e*.45))+de*.6)*qe,yt.set(Ce.col[0]),gt.set(Pe.col[0]),M.uniforms.uTint.value.copy(At.copy(yt).lerp(gt,it)),P.uniforms.uFade.value=(.35+p.uFade.value*.65)*(1-he*.7)*(.3+.7*lt),Le.uTravel.value=rt,Le.uDrift.value=Y,Le.uFade.value=qe*(.75+.25*Qe(Ce.fade,Pe.fade,it)),yt.set(nh(Rt[D])),gt.set(nh(Rt[D+1])),Le.uTint.value.copy(yt).lerp(gt,it)};let bt=0,cn=0,bn=0,Yt=0;const Qt=()=>{bt++,bt===1?(a=Math.min(a,1),s.setPixelRatio(a),p.uPixel.value=a,ie(),f.setDrawRange(0,Math.floor(u*.7))):bt===2&&(f.setDrawRange(0,Math.floor(u*.42)),p.uSize.value*=1.25,A(.45)),t?.(bt)},A=L=>{const D=Math.floor(F*L);G.copyWithin(D*4,F*4,z*4),$.copyWithin(D*4,F*4,z*4),H.copyWithin(D*3,F*3,z*3),re.attributes.aP.needsUpdate=re.attributes.aS.needsUpdate=re.attributes.aC.needsUpdate=!0,re.setDrawRange(0,D+k+N)},V=L=>{se=requestAnimationFrame(V);const D=(L-ce)/1e3,J=Math.min(D,.05);if(ce=L,!Oe)return;He+=J,p.uTime.value=He,Fe*=Math.exp(-J*2.5),Xe+=(Fe-Xe)*(1-Math.exp(-J*8));const ae=(Xe<0?1+Xe*2.6:1+Xe*.35)*(1-.3*xt);Je+=J*Math.max(-2.2,Math.min(2,ae)),p.uLife.value=Je,Yt+=J,Yt>2.5&&D<.25&&bt<3&&(cn+=D,bn++,bn>=80&&(cn/bn>1/27&&Qt(),cn=0,bn=0));const Me=!Z&&pa(Math.min(Rt.length-2,Math.max(0,Math.floor(le))))[1]?3.6:6.5,_e=Tt();le+=(_e-le)*(1-Math.exp(-J*Me)),Math.abs(_e-le)<1e-4&&(le=_e),c.position.x+=(R.x*.5-c.position.x)*.04,c.position.y+=(R.y*.32-c.position.y)*.04,Z||(Y+=J*.6),!me&&le>=hn.end-.02&&je<hn.end-.02&&le>je&&!Z&&(me=!0,de=1,p.uPulsePos.value.copy(v.position),K=1),le<hn.end-.3&&(me=!1),de=Math.max(0,de-J*.45),je=le,Ye+=(ge-Ye)*(1-Math.exp(-J*7)),Ye<.001&&!ge&&(Ye=0,Re=null),et!==tt&&be<.02&&(tt=et);const Ce=et&&et===tt&&le>hn.end-.02?1:0;be+=(Ce-be)*(1-Math.exp(-J*2.4)),!Ce&&be<.001&&(be=0),yn(le);let Pe=null;if(!Z&&rt!==O)for(const Ne of j)(O<Ne.at&&rt>=Ne.at||O>Ne.at&&rt<=Ne.at)&&(Pe=Ne,Ft=1);Ft=Math.max(0,Ft-J*18);const Se=Math.abs(rt-O)/Math.max(J,.001);O=rt,he+=((Z?0:Math.min(1,Se/26))-he)*(1-Math.exp(-J*7)),p.uWarp.value=Math.min(1,he+Ft*.22),n?.({k:le,era:lt,warp:he,crossed:Pe?Pe.label:null,...Te}),p.uVel.value+=(nt-p.uVel.value)*.14,nt*=.9,K=Math.max(0,K-J*.85),p.uPulse.value=K,p.uMouse.value.lerp(E,.12),Q*=.985,p.uMouseStrength.value+=(Q-p.uMouseStrength.value)*.1,s.render(l,c)},X=()=>{yn(le),s.render(l,c),n?.({k:le,era:lt,warp:0,crossed:null,...Te})};return yn(0),e?X():se=requestAnimationFrame(V),{get k(){return ke},set k(L){ke=L,e&&(le=Tt(),X())},jump(L){ke=le=L,e&&X()},set dim(L){qe=L},set stages(L){ee.stages=L,pe(),e&&X()},set calm(L){Z=!!L,e&&X()},set velocity(L){nt=Math.max(nt,L)},set flow(L){Fe=Math.max(-2.5,Math.min(2.5,L))},get night(){return xt},get life(){return Je},set night(L){xt=Math.max(0,Math.min(1,L)),p.uNight.value=xt,e&&X()},highlight(L,D){L&&D?(Re!==L&&(Ye=0),Re=L,p.uHi.value.set(D[0],D[1],D[2]??-1,D[3]??2),ge=1):ge=0,e&&(Ye=ge,ge||(Re=null),X())},preview(L){et=L&&ri[L]&&!ri[L].old?L:null,e&&(le=Tt(),tt=et,be=et&&le>hn.end-.02?1:0,X())},get level(){return bt},play(){Oe=!0,ce=performance.now()},pause(){Oe=!1},get era(){return lt},destroy(){Ae=!1,cancelAnimationFrame(se),clearInterval(Zt),window.removeEventListener("pointermove",te),window.removeEventListener("pointerdown",xe),window.removeEventListener("deviceorientation",ue),window.removeEventListener("resize",ie),l.traverse(L=>{L.geometry?.dispose(),L.material?.dispose()});for(const L in h)delete h[L];s.dispose()}}}const Dm={fr:{soundOn:"Son : activé",soundOff:"Son : coupé",fxOn:"Réduire les effets",fxOff:"Rétablir les effets",mail:"Écrire à",route:"Itinéraire du voyage",go:"Aller à",here:"Vous êtes ici",land:"Arrivée"},en:{soundOn:"Sound: on",soundOff:"Sound: off",fxOn:"Reduce effects",fxOff:"Restore effects",mail:"Write to",route:"Journey route",go:"Go to",here:"You are here",land:"Arrival"}},Im={get:r=>{try{return localStorage.getItem(r)}catch{return null}},set:(r,e)=>{try{localStorage.setItem(r,e)}catch{}}};function hE(){let r=null,e=null,t=null,n=!1;const i=()=>{r=new(window.AudioContext||window.webkitAudioContext),e=r.createGain(),e.gain.value=0,e.connect(r.destination),t=r.createBiquadFilter(),t.type="lowpass",t.frequency.value=320,t.Q.value=.7;const o=r.createGain();o.gain.value=.5,t.connect(o),o.connect(e),[[55,"sine",.5],[82.41,"triangle",.22],[110.4,"sine",.18],[164.8,"sine",.07]].forEach(([a,l,c],u)=>{const h=r.createOscillator(),d=r.createGain(),f=r.createOscillator(),m=r.createGain();h.type=l,h.frequency.value=a,d.gain.value=c,f.frequency.value=.05+u*.03,m.gain.value=c*.5,f.connect(m),m.connect(d.gain),h.connect(d),d.connect(t),h.start(),f.start()})},s=(o,a,l,c,u="sine")=>{if(!n)return;const h=r.currentTime,d=r.createOscillator(),f=r.createGain();d.type=u,d.frequency.setValueAtTime(o,h),d.frequency.exponentialRampToValueAtTime(a,h+l),f.gain.setValueAtTime(c,h),f.gain.exponentialRampToValueAtTime(1e-4,h+l),d.connect(f),f.connect(e),d.start(h),d.stop(h+l+.02)};return{get on(){return n},toggle(){return r||i(),n=!n,r.resume(),e.gain.cancelScheduledValues(r.currentTime),e.gain.linearRampToValueAtTime(n?.16:0,r.currentTime+(n?1.2:.4)),n},hover:()=>s(1400,2100,.07,.05),click:()=>{s(220,60,.28,.35,"triangle"),s(900,1800,.12,.05)},open:()=>s(140,520,.5,.2,"sine"),jump:()=>{s(90,420,.9,.16,"sine"),s(600,1400,.6,.03,"triangle")},land:()=>s(520,330,.35,.07,"sine"),approve:()=>{s(660,660,.18,.08,"sine"),setTimeout(()=>s(990,990,.3,.07,"sine"),120)},velocity(o){n&&t&&t.frequency.setTargetAtTime(320+Math.min(Math.abs(o),4e3)*.35,r.currentTime,.2)}}}const Fm="ABCDEFGHKLMNPRSTUVXYZ0123456789#/<>_";function ih(r,e=.9){const t=r.dataset.txt||(r.dataset.txt=r.textContent),n={p:0};fe.to(n,{p:1,duration:e,ease:"power2.out",onUpdate:()=>{const i=Math.floor(n.p*t.length);r.textContent=t.slice(0,i)+[...t.slice(i)].map(s=>s===" "?" ":Fm[Math.random()*Fm.length|0]).join("")},onComplete:()=>{r.textContent=t}})}function dE({lenis:r,hero:e,reduced:t,fine:n,lang:i,sections:s,routeStops:o}){const a=Dm[i]||Dm.fr,l=document.documentElement,c=(N,z=document)=>z.querySelector(N),u=(N,z=document)=>[...z.querySelectorAll(N)],h=hE(),d=document.createElement("div");d.className="aurora",d.setAttribute("aria-hidden","true"),d.innerHTML="<i></i><i></i><i></i>",document.body.prepend(d);const f=document.createElement("a");f.className="bigmail",f.href="mailto:johannepamegne@gmail.com",f.setAttribute("aria-label",`${a.mail} johannepamegne@gmail.com`),f.innerHTML=[..."johannepamegne@gmail.com"].map(N=>`<span aria-hidden="true">${N}</span>`).join(""),c(".contact__actions").before(f);const m=document.createElement("div");m.className="hud mono",m.innerHTML=`<div class="hud__left"><button type="button" id="soundBtn" aria-pressed="false"><span class="eq"><i></i><i></i><i></i><i></i></span><span>${a.soundOff}</span></button>
    <button type="button" id="fxBtn" aria-pressed="false"><span>${a.fxOn}</span></button></div>
    <div class="hud__right"><span id="hudSection">00 — ${s[0][1]}</span><span class="hud__bar"><i id="hudBar"></i></span><span id="hudPct">000</span></div>`,document.body.append(m);const _=c("#soundBtn"),g=c("#fxBtn");_.addEventListener("click",()=>{const N=h.toggle();_.setAttribute("aria-pressed",N),_.classList.toggle("is-on",N),_.lastElementChild.textContent=N?a.soundOn:a.soundOff});const p=(N,z=!0)=>{l.classList.toggle("fx-off",N),e&&(e.calm=N),g.setAttribute("aria-pressed",N),g.lastElementChild.textContent=N?a.fxOff:a.fxOn,z&&Im.set("fx",N?"off":"on")};if(g.addEventListener("click",()=>p(!l.classList.contains("fx-off"))),Im.get("fx")==="off"&&p(!0),window.addEventListener("world:slow",()=>{l.classList.contains("fx-off")||l.classList.add("fx-lite")}),document.addEventListener("pointerover",N=>{const z=N.target.closest("a, button, .row, .clip");z&&z!==document._lastHover&&(document._lastHover=z,h.hover()),z||(document._lastHover=null)}),document.addEventListener("click",N=>{N.target.closest(".row, .clip")?h.open():N.target.closest("a, button")&&h.click()}),window.addEventListener("saut:depart",()=>h.jump()),window.addEventListener("saut:arrivee",()=>h.land()),window.addEventListener("agents:approve",()=>h.approve()),o){const N=document.createElement("nav");N.className="route mono",N.setAttribute("aria-label",a.route),N.innerHTML='<span class="route__line"><i></i></span><span class="route__ship" aria-hidden="true"><b></b></span>',document.body.append(N);const z=N.querySelector(".route__line i"),G=N.querySelector(".route__ship"),$=G.querySelector("b");let H=[],ne=[],I=-1,re=0;const Le=()=>{H=o(),ne.forEach(j=>j.remove()),ne=H.map((j,ee)=>{const oe=document.createElement("button");return oe.type="button",oe.className="route__stop"+(j.sub?" is-sub":""),oe.style.top=`${ee/(H.length-1)*100}%`,oe.dataset.label=j.label,oe.setAttribute("aria-label",`${a.go} : ${j.label}`),j.color&&oe.style.setProperty("--c",j.color),oe.addEventListener("click",()=>{r?r.scrollTo(j.y,{duration:1.8}):window.scrollTo({top:j.y,behavior:t?"auto":"smooth"})}),N.append(oe),oe}),I=-1,Ge()},Ge=()=>{if(H.length<2)return;const j=window.scrollY;let ee=H.length-1;for(let pe=0;pe<H.length-1;pe++){const Ee=H[pe].y,ye=H[pe+1].y;if(j<ye){ee=pe+(ye>Ee?Math.max(0,(j-Ee)/(ye-Ee)):0);break}}const oe=ee/(H.length-1);G.style.top=`${oe*100}%`,z.style.transform=`scaleY(${oe})`;const ie=Math.round(ee);if(ie!==I){I=ie;const pe=H[ie];ne.forEach((Ee,ye)=>{Ee.classList.toggle("is-here",ye===ie),Ee.classList.toggle("is-done",ye<ie),Ee.toggleAttribute("aria-current",ye===ie)}),N.style.setProperty("--c",pe.color||"var(--accent)"),$.dataset.txt=pe.end?`${a.land} — ${pe.label}`:pe.label,N.classList.toggle("is-landed",!!pe.end),t?$.textContent=$.dataset.txt:ih($,.45),N.classList.add("is-talking"),clearTimeout(re),pe.end||(re=setTimeout(()=>N.classList.remove("is-talking"),2600))}};ze.addEventListener("refresh",Le),ze.create({start:0,end:"max",onUpdate:Ge}),Le()}const x=c("#hudBar"),y=c("#hudPct"),v=c("#hudSection");if(ze.create({start:0,end:"max",onUpdate:N=>{x.style.transform=`scaleX(${N.progress})`,y.textContent=String(Math.round(N.progress*100)).padStart(3,"0"),h.velocity(N.getVelocity())}}),s.forEach(([N,z],G)=>ze.create({trigger:N,start:"top 55%",end:"bottom 55%",onToggle:$=>{$.isActive&&(v.dataset.txt=`${String(G).padStart(2,"0")} — ${z}`,t?v.textContent=v.dataset.txt:ih(v,.5))}})),c("#horizon")&&ze.create({trigger:"#horizon",start:"top 50%",end:"bottom 50%",toggleClass:{targets:l,className:"in-voyage"}}),t)return;u(".label").forEach(N=>ze.create({trigger:N,start:"top 92%",once:!0,onEnter:()=>ih(N,1.1)}));const M=u("#atSites, #mdmPages, #tools"),b={v:0},S=fe.quickSetter(M,"skewY","deg");ze.create({start:0,end:"max",onUpdate:N=>{if(l.classList.contains("fx-off"))return;const z=fe.utils.clamp(-3.5,3.5,N.getVelocity()/-420);Math.abs(z)>Math.abs(b.v)&&(b.v=z,fe.to(b,{v:0,duration:.9,ease:"power3.out",overwrite:!0,onUpdate:()=>S(b.v)}))}});const C=u(".aurora i");fe.ticker.add(N=>{l.classList.contains("fx-off")||C.forEach((z,G)=>{z.style.transform=`translate3d(${Math.sin(N*.11+G*2.1)*16}vw, ${Math.cos(N*.09+G*1.3)*12}vh, 0)`})}),fe.to(".aurora",{opacity:1,scrollTrigger:{trigger:"#manifeste",start:"top 80%",end:"top 20%",scrub:!0}});const w=u(".bigmail span");if(fe.from(w,{yPercent:110,opacity:0,rotate:8,duration:1.1,stagger:.022,ease:"expo.out",scrollTrigger:{trigger:f,start:"top 92%"}}),f.addEventListener("pointerenter",()=>fe.to(w,{keyframes:[{y:"-0.22em",color:"#2f80ff",duration:.25},{y:0,color:"#eceef2",duration:.5,ease:"elastic.out(1,0.4)"}],stagger:.018,overwrite:!0})),!n)return;const T=u(".hero__line .char"),P=c(".hero__title");let F=[];const k=()=>{F=T.map(N=>{const z=N.getBoundingClientRect();return[z.left+z.width/2,z.top+z.height/2+window.scrollY]})};setTimeout(k,4200),window.addEventListener("resize",k),P.addEventListener("pointermove",N=>{F.length||k(),T.forEach((z,G)=>{const $=Math.hypot(N.clientX-F[G][0],N.clientY+window.scrollY-F[G][1]),H=Math.max(0,1-$/320);fe.to(z,{y:`${-.11*H}em`,scaleY:1+.16*H,skewX:-9*H,color:H>.55?"#8ab8ff":"#eceef2",duration:.45,ease:"power3.out",overwrite:"auto"})})}),P.addEventListener("pointerleave",()=>fe.to(T,{y:0,scaleY:1,skewX:0,color:"#eceef2",duration:.9,ease:"elastic.out(1,0.5)",stagger:.01})),u(".case__img, .mdm__pages img").forEach(N=>fe.fromTo(N,{scale:1.08},{scale:1,ease:"none",scrollTrigger:{trigger:N,start:"top bottom",end:"bottom top",scrub:!0}}))}const Um={fr:{doublons:[["Saisi une seule fois","Le client est créé dans HubSpot ; la facturation, le tableur et l'agenda se remplissent seuls en moins d'une minute."],["Premier rendez-vous posé","L'agenda reçoit un rendez-vous de 30 minutes sur le premier créneau libre du prochain jour ouvré, sans chevauchement."],["Le doublon que le CRM laisse passer","Nom en majuscules, e-mail personnel, téléphone écrit avec des points : HubSpot accepte la fiche, la synchronisation la bloque."],["Une raison en clair","« Doublon de Menuiserie Lefèvre : même téléphone, nom identique, même interlocuteur » : chaque blocage s'explique."],["Jamais un faux doublon","Homonymes dans deux villes, deux sociétés du même gérant : 0 piège sur 480 bloqué à tort ; les cas douteux vont à un humain."],["Mesuré sur 10 000 fiches","Réglé sur un jeu d'essai, puis mesuré sur 20 jeux jamais vus : 100 % de précision, 99,6 % des doublons bloqués."],["Aucune double copie","Chaque client a une empreinte : s'il n'a pas changé, rien n'est renvoyé, même après 1 440 passages par jour."],["Une panne, une alerte utile","3 essais par appel, puis un message sur le téléphone : quel outil, quelle cause, que faire. Une seule alerte toutes les 30 minutes."],["Contrôle de nuit","À 2 h, les 4 outils sont comparés champ par champ ; un écart est noté et signalé, jamais corrigé en silence."]],"rapport-lundi":[["Chaque erreur trouvée","Doublons, dates ou régions manquantes, quantités négatives, virgule oubliée : 6 règles passent sur chaque ligne du fichier."],["Chaque décision notée","Retirée, corrigée, gardée ou exclue : chaque ligne touchée apparaît dans le rapport avec son numéro de commande."],["L'erreur évitée, chiffrée","Le rapport montre ce que le fichier brut aurait annoncé : 126 196 € et +47 %, au lieu de 83 957 € et −2,2 %."],["L'IA ne calcule rien","Claude reçoit seulement les chiffres déjà calculés par le code, et rédige le commentaire à partir d'eux."],["Chaque nombre vérifié","Le script extrait chaque nombre du commentaire et le compare aux calculs ; un seul nombre inconnu, et le texte est rejeté."],["Visible à la lecture","Dans le rapport, chaque nombre retrouvé est surligné ; au survol, une bulle indique d'où il vient."],["Le rapport part toujours","Second essai si l'IA se trompe, puis un commentaire écrit par des règles fixes : jamais de rapport bloqué."],["Chaque lundi, sans y penser","GitHub Actions lance les tests puis le rapport ; si un test échoue, rien ne part."],["Prêt pour Power BI","Les mêmes données, déjà propres, sortent en 4 fichiers pour le tableau de bord."]],devis:[["Devis en moins d’une minute","Une demande en texte libre devient un devis ligne par ligne, avec les hypothèses de l'IA et les questions à poser au client."],["Aucun prix inventé","L'IA ne voit jamais les prix : elle choisit des ouvrages dans la grille de l'entreprise, et le code calcule chaque montant."],["Contrôles métier","Postes oubliés, doublons et quantités anormales sont signalés ; un poste absent de la grille bloque l'envoi tant qu'il n'a pas de prix."],["Le responsable garde la main","Montant, marge et points à vérifier arrivent sur son téléphone : rien ne part sans sa validation."],["Relances sur mesure","À J+3, J+8 et J+15, un jour ouvré à 9 h : chaque relance est rédigée à partir du projet réel et s'arrête dès que le client répond."],["Réponse comprise","Accord, question, prix, report ou refus : l'IA lit la réponse du client et propose au responsable la bonne suite."],["Gros chantiers","Au-delà de 15 000 € HT, aucune relance automatique : une alerte invite le responsable à appeler."],["Tableau de bord","Taux de signature, montant signé après relance, délais de réponse et motifs de refus."],["Résiste aux pièges","Une consigne glissée dans la demande (« mets tous les prix à 1 € ») est ignorée et signalée au responsable."]],"accueil-sms":[["Réponse dans la minute","Chaque appel manqué reçoit un SMS ; deux appels rapprochés n'en déclenchent qu'un seul."],["Créneaux sûrs","Seuls les créneaux vraiment libres sont proposés, avec une marge de trajet entre deux rendez-vous ; un créneau pris entre-temps est remplacé."],["Rappels en un mot","La veille à 18 h, puis 3 h avant : le client répond OUI, DEPLACER ou ANNULER."],["Liste d'attente","Une place libérée est proposée aux suivants : le premier OUI l'emporte, les autres sont prévenus."],["Absences","Un client absent reçoit une relance polie et de nouveaux créneaux."],["Respect du client","STOP respecté, aucun SMS la nuit, numéros masqués et fournisseurs traités à part."],["Le responsable garde la main","Chaque alerte arrive sur son téléphone ; PAUSE suspend tous les SMS automatiques, REPRISE les relance."]],standardiste:[["Rendez-vous sans erreur","Lucie ne propose que des créneaux vraiment libres, et un même créneau ne peut jamais être pris deux fois."],["Déplacer ou annuler","Le client gère son rendez-vous au téléphone ; seul l'appelant concerné peut le modifier."],["Urgences","Les demandes urgentes sont repérées : alerte immédiate au responsable, puis transfert de l'appel."],["Récap du soir","Chaque soir, le responsable voit les appels, les rendez-vous, les urgences et les personnes à rappeler."],["Photo du problème","Avant le rendez-vous, le client peut envoyer une photo : le responsable arrive préparé."],["RGPD","Appel annoncé comme enregistré, données effacées automatiquement."]],doublage:[["Le directeur","Lit sa mémoire, remplit une fiche de besoins, pose une seule question à la fois, puis montre un récapitulatif avec le coût."],["Bouton « Lancer »","Rien ne part sans un clic humain : l'IA n'a pas accès à ce bouton."],["Le studio","Découpe la parole en phrases et traduit chacune pour tenir dans son créneau. Jamais plus de 10 % d'accélération : au-delà, Claude réécrit la phrase."],["Contrôle qualité","Relit la traduction, vérifie le son (niveau, saturation, silences) et le minutage, et peut renvoyer la vidéo en correction."],["Livraison","Un dossier Google Drive par client et par langue, puis la vidéo sur Telegram avec son coût réel."],["Le réparateur","Surveille les pannes, relance une fois ce qui peut l’être sans risque et prévient sur Telegram."],["Salle de contrôle","Chaque agent au travail, en direct, en lecture seule."],["Garde-fous en base","La base refuse un clone de voix sans accord écrit enregistré ; le tunnel n'expose que les webhooks, jamais l'interface de n8n."],["Coûts mesurés","Le coût réel de chaque exécution est enregistré ; une alerte part sous 20 % de crédits ElevenLabs."],["Simulateur","Telegram, Claude, ElevenLabs et Google sont simulés : le test de bout en bout fait tourner le vrai n8n et le vrai ffmpeg sans dépenser un centime."],["Prospection prête","Un éclaireur note des créateurs, un commercial rédige dans leur langue, et chaque envoi attend une validation sur Telegram."]],jobhunter:[["Bot Telegram sécurisé","Sans le secret Telegram, refus immédiat ; un identifiant inconnu est ignoré et journalisé sans son message."],["Profileur","Lit le CV en PDF, cadre la recherche question par question et ne s’active qu’au clic sur « Confirmer »."],["Chercheur","74 opportunités reçues sur un test réel, 68 nouvelles, et 0 doublon au second passage."],["Analyste","Note chaque offre : 15 cas de test sur 15 corrects, trois fois de suite, grâce à des plafonds stricts."],["Enquêteur","Retrouve le vrai site de l'entreprise (19 cas sur 19) et n'invente jamais une adresse e-mail."],["Rédacteur et vérificateur","Le vérificateur relit chaque candidature contre le CV et l’offre ; la base refuse un e-mail sans relecture réussie."],["Coûts mesurés","0,07 $ par candidature rédigée, 0,01 $ pour noter 68 offres."],["Poste de pilotage","Radar des offres par département, agents en direct, tableau à glisser-déposer, palette Ctrl K, entonnoir et test A/B."],["Machine à états","Une seule table de règles pour le tableau, la simulation et les tests ; la page « Coulisses » la dessine à partir du code."],["Accessibilité","Clavier, annonces vocales en français, mouvement réduit et contrôles automatiques avec axe."]],aiguilleur:[["Bon collègue","Une fiche claire au bon collègue : résumé, action à faire, proposition de réponse."],["Urgences","Alerte sur Telegram et relance après 30 min sans prise en charge."],["Rapport du lundi","La semaine de la direction, chaque lundi à 8 h."],["Garde-fous","Rien ne part sans validation ; repli vers l’accueil si Claude ne répond pas."]]},en:{doublons:[["Saisi une seule fois","Le client est créé dans HubSpot ; la facturation, le tableur et l'agenda se remplissent seuls en moins d'une minute."],["Premier rendez-vous posé","L'agenda reçoit un rendez-vous de 30 minutes sur le premier créneau libre du prochain jour ouvré, sans chevauchement."],["Le doublon que le CRM laisse passer","Nom en majuscules, e-mail personnel, téléphone écrit avec des points : HubSpot accepte la fiche, la synchronisation la bloque."],["Une raison en clair","« Doublon de Menuiserie Lefèvre : même téléphone, nom identique, même interlocuteur » : chaque blocage s'explique."],["Jamais un faux doublon","Homonymes dans deux villes, deux sociétés du même gérant : 0 piège sur 480 bloqué à tort ; les cas douteux vont à un humain."],["Mesuré sur 10 000 fiches","Réglé sur un jeu d'essai, puis mesuré sur 20 jeux jamais vus : 100 % de précision, 99,6 % des doublons bloqués."],["Aucune double copie","Chaque client a une empreinte : s'il n'a pas changé, rien n'est renvoyé, même après 1 440 passages par jour."],["Une panne, une alerte utile","3 essais par appel, puis un message sur le téléphone : quel outil, quelle cause, que faire. Une seule alerte toutes les 30 minutes."],["Contrôle de nuit","À 2 h, les 4 outils sont comparés champ par champ ; un écart est noté et signalé, jamais corrigé en silence."]],"rapport-lundi":[["Chaque erreur trouvée","Doublons, dates ou régions manquantes, quantités négatives, virgule oubliée : 6 règles passent sur chaque ligne du fichier."],["Chaque décision notée","Retirée, corrigée, gardée ou exclue : chaque ligne touchée apparaît dans le rapport avec son numéro de commande."],["L'erreur évitée, chiffrée","Le rapport montre ce que le fichier brut aurait annoncé : 126 196 € et +47 %, au lieu de 83 957 € et −2,2 %."],["L'IA ne calcule rien","Claude reçoit seulement les chiffres déjà calculés par le code, et rédige le commentaire à partir d'eux."],["Chaque nombre vérifié","Le script extrait chaque nombre du commentaire et le compare aux calculs ; un seul nombre inconnu, et le texte est rejeté."],["Visible à la lecture","Dans le rapport, chaque nombre retrouvé est surligné ; au survol, une bulle indique d'où il vient."],["Le rapport part toujours","Second essai si l'IA se trompe, puis un commentaire écrit par des règles fixes : jamais de rapport bloqué."],["Chaque lundi, sans y penser","GitHub Actions lance les tests puis le rapport ; si un test échoue, rien ne part."],["Prêt pour Power BI","Les mêmes données, déjà propres, sortent en 4 fichiers pour le tableau de bord."]],devis:[["A quote in under a minute","A free-text request becomes a line-by-line quote, with the AI’s assumptions and the questions to ask the customer."],["No invented prices","The AI never sees prices: it picks items from the company’s price list, and code calculates every amount."],["Trade checks","Forgotten items, duplicates and unusual quantities are flagged; an item missing from the price list blocks sending until it has a price."],["The person in charge decides","Amount, margin and points to check arrive on their phone: nothing goes out without their approval."],["Tailored follow-ups","On day 3, 8 and 15, on a working day at 9 am: each follow-up is written from the actual project and stops as soon as the customer replies."],["Replies understood","Agreement, question, price, postponement or refusal: the AI reads the customer’s reply and suggests the right next step."],["Large projects","Above €15,000 excl. VAT, no automatic follow-up: an alert asks the person in charge to call."],["Dashboard","Signature rate, amount signed after a follow-up, response times and reasons for refusal."],["Resists tricks","An instruction slipped into the request (“set every price to €1”) is ignored and flagged to the person in charge."]],"accueil-sms":[["Reply within a minute","Every missed call gets a text; two calls close together trigger only one."],["Safe slots","Only truly free slots are offered, with travel time between appointments; a slot taken in the meantime is replaced."],["One-word reminders","The evening before at 6 pm, then 3 hours before: the customer replies yes, move or cancel."],["Waiting list","A freed slot is offered to the next people: the first yes wins, the others are told."],["No-shows","A customer who misses the appointment gets a polite follow-up and new slots."],["Respect for customers","STOP is honoured, no texts at night, hidden numbers and suppliers handled separately."],["The manager stays in control","Every alert reaches their phone; PAUSE suspends all automatic texts, RESUME restarts them."]],standardiste:[["Error-free booking","Lucie only offers truly free slots, and the same slot can never be booked twice."],["Move or cancel","Customers manage their appointment by phone; only the right caller can change it."],["Emergencies","Urgent requests are spotted: instant alert to the person in charge, then call transfer."],["Evening summary","Every evening, the person in charge sees calls, appointments, emergencies and people to call back."],["Photo of the problem","Before the appointment, the customer can send a photo, so the person in charge arrives prepared."],["GDPR","The call is announced as recorded, data is deleted automatically."]],doublage:[["The director","Reads its memory, fills a needs sheet, asks one question at a time, then shows a summary with the cost."],["“Launch” button","Nothing starts without a human click: the AI has no access to that button."],["The studio","Splits speech into sentences and translates each to fit its original slot. Never sped up more than 10 %: beyond that, Claude rewrites the sentence."],["Quality control","Reviews the translation, checks the audio (level, clipping, silences) and timing, and can send the video back for fixes."],["Delivery","One Google Drive folder per client and language, then the video on Telegram with its real cost."],["The fixer","Watches for failures, retries once whatever is safe to retry and warns on Telegram."],["Control room","Every agent at work, live, read-only."],["Database guardrails","The database rejects a voice clone without a recorded written consent; the tunnel only exposes webhooks, never the n8n UI."],["Measured costs","The real cost of every run is stored; an alert fires under 20 % of ElevenLabs credits."],["Simulator","Telegram, Claude, ElevenLabs and Google are mocked: the end-to-end test runs real n8n and real ffmpeg for free."],["Prospecting ready","A scout rates creators, a sales agent writes in their language, and every send waits for approval on Telegram."]],jobhunter:[["Secured Telegram bot","Rejected without the Telegram secret; an unknown ID is ignored and logged without its message."],["Profiler","Reads the PDF CV, frames the search question by question and only activates on “Confirm”."],["Researcher","74 opportunities received in a real test, 68 new, and 0 duplicate on the second pass."],["Analyst","Scores each offer: 15 test cases out of 15 correct, three times in a row, thanks to strict caps."],["Investigator","Finds the company’s real website (19 cases out of 19) and never invents an email address."],["Writer and reviewer","The reviewer checks each application against the CV and the offer; the database refuses an email without a passed review."],["Measured costs","$0.07 per drafted application, $0.01 to score 68 offers."],["Control room","Offer radar by département, live agents, drag-and-drop board, Ctrl K palette, funnel and A/B test."],["State machine","One rules table for the board, the simulation and the tests; the “Backstage” page draws it from the code."],["Accessibility","Keyboard, French screen-reader announcements, reduced motion and automated axe checks."]],aiguilleur:[["Right teammate","A clear brief for the right teammate: summary, action, suggested reply."],["Emergencies","Telegram alert and follow-up after 30 min without pickup."],["Monday report","Management’s week, every Monday at 8 am."],["Guardrails","Nothing is sent without approval; fallback to the front desk if Claude fails."]]}},Nm=r=>String(r).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),fE=r=>String(r).padStart(2,"0");function pE(r,e){const t=(Um[r]||Um.fr)[e];return t?`<section class="feats"><h4>${r==="fr"?"Sous le capot":"Under the hood"}</h4><div class="feats__grid">${t.map(([i,s],o)=>`<div class="feat"><span class="mono">${fE(o+1)}</span><b>${Nm(i)}</b><p>${Nm(s)}</p></div>`).join("")}</div></section>`:""}/*!
 * paths 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var mE=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,gE=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,_E=Math.PI/180,Xl=Math.sin,jl=Math.cos,Da=Math.abs,ra=Math.sqrt,vE=function(e){return typeof e=="number"},Om=1e5,Pr=function(e){return Math.round(e*Om)/Om||0};function xE(r,e,t,n,i,s,o){for(var a=r.length,l,c,u,h,d;--a>-1;)for(l=r[a],c=l.length,u=0;u<c;u+=2)h=l[u],d=l[u+1],l[u]=h*e+d*n+s,l[u+1]=h*t+d*i+o;return r._dirty=1,r}function yE(r,e,t,n,i,s,o,a,l){if(!(r===a&&e===l)){t=Da(t),n=Da(n);var c=i%360*_E,u=jl(c),h=Xl(c),d=Math.PI,f=d*2,m=(r-a)/2,_=(e-l)/2,g=u*m+h*_,p=-h*m+u*_,x=g*g,y=p*p,v=x/(t*t)+y/(n*n);v>1&&(t=ra(v)*t,n=ra(v)*n);var M=t*t,b=n*n,S=(M*b-M*y-b*x)/(M*y+b*x);S<0&&(S=0);var C=(s===o?-1:1)*ra(S),w=C*(t*p/n),T=C*-(n*g/t),P=(r+a)/2,F=(e+l)/2,k=P+(u*w-h*T),N=F+(h*w+u*T),z=(g-w)/t,G=(p-T)/n,$=(-g-w)/t,H=(-p-T)/n,ne=z*z+G*G,I=(G<0?-1:1)*Math.acos(z/ra(ne)),re=(z*H-G*$<0?-1:1)*Math.acos((z*$+G*H)/ra(ne*($*$+H*H)));isNaN(re)&&(re=d),!o&&re>0?re-=f:o&&re<0&&(re+=f),I%=f,re%=f;var Le=Math.ceil(Da(re)/(f/4)),Ge=[],j=re/Le,ee=4/3*Xl(j/2)/(1+jl(j/2)),oe=u*t,ie=h*t,pe=h*-n,Ee=u*n,ye;for(ye=0;ye<Le;ye++)i=I+ye*j,g=jl(i),p=Xl(i),z=jl(i+=j),G=Xl(i),Ge.push(g-ee*p,p+ee*g,z+ee*G,G-ee*z,z,G);for(ye=0;ye<Ge.length;ye+=2)g=Ge[ye],p=Ge[ye+1],Ge[ye]=g*oe+p*pe+k,Ge[ye+1]=g*ie+p*Ee+N;return Ge[ye-2]=a,Ge[ye-1]=l,Ge}}function bE(r){var e=(r+"").replace(gE,function(w){var T=+w;return T<1e-4&&T>-1e-4?0:T}).match(mE)||[],t=[],n=0,i=0,s=2/3,o=e.length,a=0,l="ERROR: malformed path: "+r,c,u,h,d,f,m,_,g,p,x,y,v,M,b,S,C=function(T,P,F,k){x=(F-T)/3,y=(k-P)/3,_.push(T+x,P+y,F-x,k-y,F,k)};if(!r||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(M=f,isNaN(e[c])?(f=e[c].toUpperCase(),m=f!==e[c]):c--,h=+e[c+1],d=+e[c+2],m&&(h+=n,d+=i),c||(g=h,p=d),f==="M")_&&(_.length<8?t.length-=1:a+=_.length),n=g=h,i=p=d,_=[h,d],t.push(_),c+=2,f="L";else if(f==="C")_||(_=[0,0]),m||(n=i=0),_.push(h,d,n+e[c+3]*1,i+e[c+4]*1,n+=e[c+5]*1,i+=e[c+6]*1),c+=6;else if(f==="S")x=n,y=i,(M==="C"||M==="S")&&(x+=n-_[_.length-4],y+=i-_[_.length-3]),m||(n=i=0),_.push(x,y,h,d,n+=e[c+3]*1,i+=e[c+4]*1),c+=4;else if(f==="Q")x=n+(h-n)*s,y=i+(d-i)*s,m||(n=i=0),n+=e[c+3]*1,i+=e[c+4]*1,_.push(x,y,n+(h-n)*s,i+(d-i)*s,n,i),c+=4;else if(f==="T")x=n-_[_.length-4],y=i-_[_.length-3],_.push(n+x,i+y,h+(n+x*1.5-h)*s,d+(i+y*1.5-d)*s,n=h,i=d),c+=2;else if(f==="H")C(n,i,n=h,i),c+=1;else if(f==="V")C(n,i,n,i=h+(m?i-n:0)),c+=1;else if(f==="L"||f==="Z")f==="Z"&&(h=g,d=p,_.closed=!0),(f==="L"||Da(n-h)>.5||Da(i-d)>.5)&&(C(n,i,h,d),f==="L"&&(c+=2)),n=h,i=d;else if(f==="A"){if(b=e[c+4],S=e[c+5],x=e[c+6],y=e[c+7],u=7,b.length>1&&(b.length<3?(y=x,x=S,u--):(y=S,x=b.substr(2),u-=2),S=b.charAt(1),b=b.charAt(0)),v=yE(n,i,+e[c+1],+e[c+2],+e[c+3],+b,+S,(m?n:0)+x*1,(m?i:0)+y*1),c+=u,v)for(u=0;u<v.length;u++)_.push(v[u]);n=_[_.length-2],i=_[_.length-1]}else console.log(l);return c=_.length,c<6?(t.pop(),c=0):_[0]===_[c-2]&&_[1]===_[c-1]&&(_.closed=!0),t.totalPoints=a+c,t}function SE(r){vE(r[0])&&(r=[r]);var e="",t=r.length,n,i,s,o;for(i=0;i<t;i++){for(o=r[i],e+="M"+Pr(o[0])+","+Pr(o[1])+" C",n=o.length,s=2;s<n;s++)e+=Pr(o[s++])+","+Pr(o[s++])+" "+Pr(o[s++])+","+Pr(o[s++])+" "+Pr(o[s++])+","+Pr(o[s])+" ";o.closed&&(e+="z")}return e}/*!
 * CustomEase 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var jn,p_,m_=function(){return jn||typeof window<"u"&&(jn=window.gsap)&&jn.registerPlugin&&jn},km=function(){jn=m_(),jn?(jn.registerEase("_CE",Go.create),p_=1):console.warn("Please gsap.registerPlugin(CustomEase)")},ME=1e20,$l=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},TE=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,wE=/[cLlsSaAhHvVtTqQ]/g,EE=function(e){var t=e.length,n=ME,i;for(i=1;i<t;i+=6)+e[i]<n&&(n=+e[i]);return n},AE=function(e,t,n){!n&&n!==0&&(n=Math.max(+e[e.length-1],+e[1]));var i=+e[0]*-1,s=-n,o=e.length,a=1/(+e[o-2]+i),l=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?EE(e)+s:+e[o-1]+s),c;for(l?l=1/l:l=-a,c=0;c<o;c+=2)e[c]=(+e[c]+i)*a,e[c+1]=(+e[c+1]+s)*l},CE=function r(e,t,n,i,s,o,a,l,c,u,h){var d=(e+n)/2,f=(t+i)/2,m=(n+s)/2,_=(i+o)/2,g=(s+a)/2,p=(o+l)/2,x=(d+m)/2,y=(f+_)/2,v=(m+g)/2,M=(_+p)/2,b=(x+v)/2,S=(y+M)/2,C=a-e,w=l-t,T=Math.abs((n-a)*w-(i-l)*C),P=Math.abs((s-a)*w-(o-l)*C),F;return u||(u=[{x:e,y:t},{x:a,y:l}],h=1),u.splice(h||u.length-1,0,{x:b,y:S}),(T+P)*(T+P)>c*(C*C+w*w)&&(F=u.length,r(e,t,d,f,x,y,b,S,c,u,h),r(b,S,v,M,g,p,a,l,c,u,h+1+(u.length-F))),u},Go=(function(){function r(t,n,i){p_||km(),this.id=t,this.setData(n,i)}var e=r.prototype;return e.setData=function(n,i){i=i||{},n=n||"0,0,1,1";var s=n.match(TE),o=1,a=[],l=[],c=i.precision||1,u=c<=1,h,d,f,m,_,g,p,x,y;if(this.data=n,(wE.test(n)||~n.indexOf("M")&&n.indexOf("C")<0)&&(s=bE(n)[0]),h=s.length,h===4)s.unshift(0,0),s.push(1,1),h=8;else if((h-2)%6)throw"Invalid CustomEase";for((+s[0]!=0||+s[h-2]!=1)&&AE(s,i.height,i.originY),this.segment=s,m=2;m<h;m+=6)d={x:+s[m-2],y:+s[m-1]},f={x:+s[m+4],y:+s[m+5]},a.push(d,f),CE(d.x,d.y,+s[m],+s[m+1],+s[m+2],+s[m+3],f.x,f.y,1/(c*2e5),a,a.length-1);for(h=a.length,m=0;m<h;m++)p=a[m],x=a[m-1]||p,(p.x>x.x||x.y!==p.y&&x.x===p.x||p===x)&&p.x<=1?(x.cx=p.x-x.x,x.cy=p.y-x.y,x.n=p,x.nx=p.x,u&&m>1&&Math.abs(x.cy/x.cx-a[m-2].cy/a[m-2].cx)>2&&(u=0),x.cx<o&&(x.cx?o=x.cx:(x.cx=.001,m===h-1&&(x.x-=.001,o=Math.min(o,.001),u=0)))):(a.splice(m--,1),h--);if(h=1/o+1|0,_=1/h,g=0,p=a[0],u){for(m=0;m<h;m++)y=m*_,p.nx<y&&(p=a[++g]),d=p.y+(y-p.x)/p.cx*p.cy,l[m]={x:y,cx:_,y:d,cy:0,nx:9},m&&(l[m-1].cy=d-l[m-1].y);g=a[a.length-1],l[h-1].cy=g.y-d,l[h-1].cx=g.x-l[l.length-1].x}else{for(m=0;m<h;m++)p.nx<m*_&&(p=a[++g]),l[m]=p;g<a.length-1&&(l[m-1]=a[a.length-2])}return this.ease=function(v){var M=l[v*h|0]||l[h-1];return M.nx<v&&(M=M.n),M.y+(v-M.x)/M.cx*M.cy},this.ease.custom=this,this.id&&jn&&jn.registerEase(this.id,this.ease),this},e.getSVGData=function(n){return r.getSVGData(this,n)},r.create=function(n,i,s){return new r(n,i,s).ease},r.register=function(n){jn=n,km()},r.get=function(n){return jn.parseEase(n)},r.getSVGData=function(n,i){i=i||{};var s=i.width||100,o=i.height||100,a=i.x||0,l=(i.y||0)+o,c=jn.utils.toArray(i.path)[0],u,h,d,f,m,_,g,p,x,y;if(i.invert&&(o=-o,l=0),typeof n=="string"&&(n=jn.parseEase(n)),n.custom&&(n=n.custom),n instanceof r)u=SE(xE([n.segment],s,0,0,-o,a,l));else{for(u=[a,l],g=Math.max(5,(i.precision||1)*200),f=1/g,g+=2,p=5/g,x=$l(a+f*s),y=$l(l+n(f)*-o),h=(y-l)/(x-a),d=2;d<g;d++)m=$l(a+d*f*s),_=$l(l+n(d*f)*-o),(Math.abs((_-y)/(m-x)-h)>p||d===g-1)&&(u.push(x,y),h=(_-y)/(m-x)),x=m,y=_;u="M"+u.join(",")}return c&&c.setAttribute("d",u),u},r})();Go.version="3.13.0";Go.headless=!0;m_()&&jn.registerPlugin(Go);fe.registerPlugin(Go);Go.create("elan","M0,0 C0.18,0 0.22,-0.06 0.38,0.32 0.52,0.7 0.6,1.06 0.74,1.04 0.86,1.02 0.92,1 1,1");const Yl=(r,e)=>window.dispatchEvent(new CustomEvent(r,{detail:e})),RE=r=>String(r).padStart(4,"0");function PE({mount:r,texts:e,reduced:t=!1}){const n=document.documentElement,i=document.createElement("div");i.className="dash mono",i.setAttribute("aria-hidden","true");const s=()=>`<span class="dash__col"><span>${[..."0123456789"].map(S=>`<i>${S}</i>`).join("")}</span></span>`;i.innerHTML=`<div class="dash__head"><span class="dash__dot"></span><span>${e.horizon}</span><span class="dash__clock">--:--:--</span></div>
    <div class="dash__big"><span class="dash__num">${s()}</span><span class="dash__of">/6</span><span class="dash__side"><span class="dash__lbl">${e.autonomy}</span><span class="dash__gauge">${"<i></i>".repeat(6)}</span></span></div>
    <div class="dash__row"><span class="dash__status"></span><span class="dash__rep"></span></div>`,r.append(i);const o=document.createElement("p");o.className="sr-only",o.setAttribute("aria-live","polite"),r.append(o);const a=i.querySelector(".dash__col > span"),l=[...i.querySelectorAll(".dash__gauge i")],c=i.querySelector(".dash__status"),u=i.querySelector(".dash__rep"),h=i.querySelector(".dash__clock"),d={level:-1,status:"",station:-2,future:null,era:-1};let f=0,m=0,_=!1,g=0,p=null;const x=(S,C=!1)=>{S!==d.level&&(d.level=S,fe.to(a,{yPercent:-S*10,duration:C||t?0:1.1,ease:"elan",overwrite:!0}),l.forEach((w,T)=>w.classList.toggle("is-on",T<S)))},y=(S,C)=>{S!==d.status&&(d.status=S,c.className=`dash__status badge badge--${S}`,c.textContent=C)};x(0,!0),y("today",e.today);const v=new Intl.DateTimeFormat("fr-FR",{timeZone:"Europe/Paris",hour:"2-digit",minute:"2-digit",second:"2-digit"}),M=S=>{h.textContent=v.format(new Date(Date.now()+f)),m=S};function b(S,C=1/60){const w=performance.now();let T=-1,P=!1;const F=S.a.startsWith("auj_")?fc[S.a.slice(4)]:null,k=fc[S.a]||null,N=S.b.startsWith("auj_")?fc[S.b.slice(4)]:null;F&&S.b===F.id?(T=F.index,P=S.f>=.5):k&&N?(T=S.f<.5?k.index:N.index,P=S.f<.5):k?(T=k.index,P=!0):N&&(T=S.f>.5?N.index:-1);const z=T>=0?Dt[T]:null,G=T>0?Dt[T-1].level:0,$=!z&&["dim","path","end"].includes(S.a)||S.a==="server"&&S.b==="dim";if(x(z?P?z.level:G:$?6:0),z){const ne=Nc(z);y(P?ne:"today",P?e.status[ne]:e.today)}if(z&&!P?((d.future!==!1||d.station!==T)&&(g=w),u.textContent=`↻ ${RE(Math.floor((w-g)/2600)+1)} ${e.repeat}`):u.textContent="",T!==d.station){if(d.station=T,z){const ne=e.stations[z.id];o.textContent=`${e.station} ${T+1} / ${Dt.length} · ${ne.task}. ${e.level} ${z.level}, ${e.status[Nc(z)]}.`}Yl("station:change",{index:T,id:z?.id||null})}d.future=P,i.classList.toggle("is-future",!!P),i.style.setProperty("--c",z?P?z.color:"#9DA4AE":"var(--accent)");const H=S.flight&&k&&N?`${k.id}>${N.id}`:null;H&&S.f>.02&&S.f<.98?(!_||p!==H)&&(_=!0,p=H,Yl("saut:depart",{from:k.id,to:N.id})):_&&(_=!1,Yl("saut:arrivee",{to:p?.split(">")[1]})),S.crossed&&Yl("saut:seuil",{label:S.crossed}),_&&!t&&(f+=S.warp*C*1e3*3600*1.6),(_||w-m>500)&&M(w),Math.abs(S.era-d.era)>.01&&(d.era=S.era,n.style.setProperty("--era",S.era.toFixed(3)))}return{update:b,get skew(){return f},destroy(){i.remove(),o.remove()}}}const LE=new Set(["flux","horizon"]);function DE({mount:r,scenes:e={},reduced:t=!1,mobile:n=!1}){const i=document.documentElement,s=navigator.connection?.saveData===!0,o=[0,1].map(()=>{const b=document.createElement("video");return b.muted=!0,b.loop=!0,b.playsInline=!0,b.preload="none",b.setAttribute("muted",""),b.setAttribute("playsinline",""),b.setAttribute("aria-hidden","true"),b.tabIndex=-1,r.append(b),b}),a=document.createElement("div");a.className="cine__tint",r.append(a);let l=null,c=-1,u,h=0,d=0;const f=()=>s||i.classList.contains("fx-off")||i.classList.contains("fx-lite"),m=(b,S)=>new URL(`cinema/${b}${S}`,document.baseURI).href,_=b=>e[b]?.plan,g=b=>b&&LE.has(_(b))&&!f()?b:null,p=b=>{b.classList.remove("is-on"),setTimeout(()=>{b.classList.contains("is-on")||b.pause()},1300)};function x(b){const S=g(b);if(S===l)return;const C=_(l),w=o[c];if(l=S,!S){w&&p(w),c=-1,r.classList.remove("has-scene");return}if(a.style.backgroundColor=e[S].tint||"#2F80FF",r.classList.add("has-scene"),w&&_(S)===C&&w.classList.contains("is-on"))return;const T=c===0?1:0,P=o[T],F=_(S);if(P.poster=m(F,".webp"),P.classList.toggle("is-fade",++d%2===0),t)P.removeAttribute("src"),P.load();else{const k=m(F,n?"-m.mp4":".mp4");P.dataset.src!==k&&(P.dataset.src=k,P.src=k),P.play().catch(()=>{})}requestAnimationFrame(()=>{P.classList.add("is-on"),w&&w!==P&&p(w)}),c=T}function y(b){const S=g(b);S!==u&&(u=S,clearTimeout(h),h=0,S!==l&&(h=setTimeout(()=>{h=0,x(u)},l&&S?220:120)))}const v=()=>{const b=o[c];!b||t||(document.hidden?b.pause():b.play().catch(()=>{}))};document.addEventListener("visibilitychange",v);const M=new MutationObserver(()=>{f()&&l&&x(null)});return M.observe(i,{attributes:!0,attributeFilter:["class"]}),{set:y,get scene(){return l},destroy(){clearTimeout(h),document.removeEventListener("visibilitychange",v),M.disconnect(),o.forEach(b=>b.remove()),a.remove()}}}fe.registerPlugin(ze);ze.addEventListener("refreshInit",()=>ze.sort((r,e)=>{const t=r.trigger,n=e.trigger;if(!t||!n||t===n)return t===n?0:t?1:-1;const i=t.compareDocumentPosition(n);return i&Node.DOCUMENT_POSITION_CONTAINED_BY?1:i&Node.DOCUMENT_POSITION_CONTAINS||i&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}));const ve=(r,e=document)=>e.querySelector(r),Wt=(r,e=document)=>[...e.querySelectorAll(r)],Bt=window.matchMedia("(prefers-reduced-motion: reduce)").matches,g_=window.matchMedia("(hover: hover) and (pointer: fine)").matches,Qc=window.matchMedia("(max-width: 760px)").matches,No=new URLSearchParams(location.search),xd=Bt||No.has("og")||No.has("capture");let Ja=!1,kc=!1,__=null;try{__=localStorage.getItem("lang")}catch{}const zi=No.get("lang")||__||((navigator.language||"fr").startsWith("fr")?"fr":"en"),ln=dp[zi]||dp.fr,ft=ln.ui;document.documentElement.lang=zi;document.title=ln.meta.title;ve('meta[name="description"]').setAttribute("content",ln.meta.description);Wt("[data-i18n]").forEach(r=>{const e=ft[r.dataset.i18n];e!=null&&(r.innerHTML=e)});const v_=ve("#langBtn");v_.setAttribute("aria-label",ft["lang.switch"]);ve(".lang__on").textContent=zi.toUpperCase();ve(".lang__off").textContent=zi==="fr"?"EN":"FR";const Be=r=>String(r).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),xr=r=>String(r).padStart(2,"0"),Ia=ln.horizon,gr=Dt.length,nl=r=>ln.projects.find(e=>e.id===r.project);ve("#loaderList").innerHTML=ln.loader.map(r=>`<li><i class="loader__box"></i><span class="loader__t">${Be(r)}</span><em class="mono">${Be(ft["loader.done"])}</em></li>`).join("");ve("#loaderCount").textContent=`0/${ln.loader.length}`;ve("#trades").innerHTML=ln.trades.map(([r,e,t],n)=>`<a class="trade" href="${t}"><span class="trade__n mono">${xr(n+1)}</span><h3>${Be(r)}</h3><p>${Be(e)}</p><span class="trade__go" aria-hidden="true">→</span></a>`).join("");ve("#hzStage").innerHTML=Dt.map((r,e)=>{const t=nl(r),n=Ia.stations[r.id],i=Nc(r);return`<article class="hz-slide" data-i="${e}" style="--c:${r.color}" aria-hidden="true">
  <p class="hz-slide__n mono"><b>${xr(e+1)}</b> / ${xr(gr)} — ${Be(Ia.level)} ${r.level}/6</p>
  <div class="hz-ph hz-ph--today">
    <p class="hz-ph__tag mono"><i></i>${Be(ft["horizon.today"])}</p>
    <h3 class="hz-ph__task">${Be(n.task)}</h3>
    <p class="hz-ph__txt">${Be(n.today)}</p>
  </div>
  <div class="hz-ph hz-ph--future">
    <p class="hz-ph__tag mono"><i></i><span class="hz-ph__say" aria-label="${Be(ft["horizon.future"])}">${[...ft["horizon.future"]].map(s=>`<span aria-hidden="true">${Be(s)}</span>`).join("")}</span> · <span class="badge badge--${i}">${Be(Ia.status[i])}</span></p>
    <h3 class="hz-ph__title">${Be(t.title)}</h3>
    <p class="hz-ph__txt">${Be(n.future)}</p>
    <div class="slide__metrics">${t.metrics.slice(0,3).map(([s,o])=>`<div><b>${Be(s)}</b><span>${Be(o)}</span></div>`).join("")}</div>
    <div class="slide__foot"><button class="btn btn--primary slide__open" type="button" data-open="${t.id}" data-magnetic><span class="btn__fill"></span><span class="btn__label">${Be(ft["horizon.open"])}</span><span class="btn__arrow">→</span></button></div>
  </div></article>`}).join("");ve("#hzRail").innerHTML=Dt.map((r,e)=>`<button type="button" data-go="${e}" style="--c:${r.color}"><i>${xr(e+1)}</i><span>${Be(nl(r).short)}</span></button>`).join("")+'<span class="work__bar"><i id="hzBar"></i></span>';ve("#atSites").innerHTML=ln.atelier.sites.map(r=>`<a class="site" href="${r.url}" target="_blank" rel="noopener" data-cursor="view">
  <span class="site__bar" aria-hidden="true"><i></i><i></i><i></i><span class="mono">${Be(r.url.replace(/^https?:\/\//,"").replace(/\/$/,""))}</span></span>
  <span class="site__shot"><img src="${r.img}" alt="" loading="lazy" /></span>
  <span class="site__cap"><b>${Be(r.title)}</b><span class="mono">${Be(r.meta)}</span><em class="mono">${Be(ft["atelier.visit"])} ↗</em></span></a>`).join("");ve("#reel").innerHTML=ln.motion.map((r,e)=>`<button class="clip${r.ratio==="9/16"?" clip--tall":""}" type="button" style="--ratio:${r.ratio}" data-video="${r.src}" data-cursor="view" aria-label="${Be(ft["motion.play"])} — ${Be(r.title)}">
  <video muted loop playsinline preload="none" poster="${r.poster}" data-src="${r.src}"></video><span class="clip__n mono">${xr(e+1)}</span>
  <span class="clip__cap"><strong>${Be(r.title)}</strong><span class="mono">${Be(r.meta)}</span></span></button>`).join("");ve("#path").innerHTML=ln.path.map(([r,e,t,n])=>`<li class="step"><span class="step__y mono">${Be(r)}</span><div><h3>${Be(e)}</h3><p class="step__o">${Be(t)}</p></div><p class="step__d">${Be(n)}</p></li>`).join("");ve("#tools").innerHTML=ln.tools.map(r=>`<i class="tag">${Be(r)}</i>`).join("");ve("#askInput").setAttribute("placeholder",ft["contact.placeholder"]);function x_(r,e="w"){const t=n=>{[...n.childNodes].forEach(i=>{if(i.nodeType===3){const s=document.createDocumentFragment();i.textContent.split(/(\s+)/).forEach(o=>{if(!o)return;if(/^\s+$/.test(o)){s.append(" ");return}const a=document.createElement("span");if(a.className=e,e==="w"){const l=document.createElement("span");l.textContent=o,a.append(l)}else a.textContent=o;s.append(a)}),i.replaceWith(s)}else i.nodeType===1&&t(i)})};t(r)}Wt('[data-split="chars"]').forEach(r=>{const e=[...r.childNodes].map(t=>t.nodeType===3?[...t.textContent].map(n=>`<span class="char">${n}</span>`).join(""):`<span class="char">${t.outerHTML}</span>`).join("");r.innerHTML=e});Wt(".title, .contact__title, .hz-ph__title, .hz-ph__task").forEach(r=>x_(r));x_(ve("#manifestoText"),"mw");Wt(".hz-ph__task").forEach(r=>Wt(".w",r).forEach((e,t)=>e.style.setProperty("--wi",t)));function y_(r,e=0){if(!r.dataset.roll){const n=r.textContent;r.dataset.roll=n,r.setAttribute("aria-label",n),r.classList.add("is-roll"),r.innerHTML=[...n].map(i=>/\d/.test(i)?`<span class="rl" aria-hidden="true"><span>${[..."0123456789"].map(s=>`<i>${s}</i>`).join("")}</span></span>`:`<span aria-hidden="true">${Be(i)}</span>`).join("")}const t=[...r.dataset.roll].filter(n=>/\d/.test(n));Wt(".rl > span",r).forEach((n,i)=>fe.fromTo(n,{yPercent:0},{yPercent:-10*+t[i],duration:1.15+i*.07,delay:e+i*.05,ease:"expo.out",overwrite:!0}))}let $t=null;Bt||($t=new Rx({duration:1.15,smoothWheel:!0}),$t.on("scroll",ze.update),ze.addEventListener("refresh",()=>$t.resize()),fe.ticker.add(r=>$t.raf(r*1e3)),fe.ticker.lagSmoothing(0),xd||$t.stop());const IE=r=>{const e=ve(r);e&&($t?$t.scrollTo(e,{duration:1.6}):e.scrollIntoView())};document.addEventListener("click",r=>{const e=r.target.closest('a[href^="#"]');e&&(r.preventDefault(),eu(),bf(),qo(),IE(e.getAttribute("href")))});const b_=Bt?null:PE({mount:ve("#hzDash"),texts:Ia,reduced:Bt});let Bm=performance.now();const S_=r=>{const e=performance.now();b_?.update(r,Math.min(.1,(e-Bm)/1e3)),Bm=e};let It=null,yd=!1;try{It=uE(ve("#gl"),{reduced:Bt,seed:No.has("capture")?7:0,onFrame:S_,onQuality:r=>{r>=2&&window.dispatchEvent(new CustomEvent("world:slow"))}})}catch{ve("#gl").remove()}It&&No.has("nuit")&&(It.night=+No.get("nuit")||0);const vf=[],zr={},yo=(r,e)=>{const t=ze.create(r);return vf.push({st:t,map:e}),t},FE=r=>{const e=Math.min(Rt.length-2,Math.max(0,Math.floor(r))),t=Math.min(1,r-e),n=Rt[e],i=Rt[e+1],s=o=>o.startsWith("auj_");return{k:r,i:e,f:t,a:n,b:i,flight:s(n)||e<2?0:1,era:s(n)&&s(i)?0:s(n)?t:s(i)?1-t:1,warp:0,crossed:null}};function M_(){if(yd)return;let r=hn.sphere;vf.forEach(({st:e,map:t})=>{r+=t?t(e.progress):e.progress}),It?It.k=r:S_(FE(r))}const zm=(r,e,t)=>{const n=Math.min(1,Math.max(0,(t-r)/(e-r)));return n*n*(3-2*n)},UE=r=>{const e=Math.min(gr-1e-4,r*gr),t=Math.floor(e),n=e-t;let i=zm(.2,.46,n);return t<gr-1&&(i+=zm(.76,1,n)),2*t+i},NE=r=>{const e=Math.min(gr-1e-4,Math.max(0,r)*gr),t=Math.floor(e),n=e-t;return n>.88&&t<gr-1?[t+1,!1]:[t,n>=.33]};let T_=!1;try{T_=sessionStorage.getItem("seen")==="1",sessionStorage.setItem("seen","1")}catch{}function bd(r=0){return fe.timeline({defaults:{ease:"expo.out"}}).fromTo(".hero__line .char",{yPercent:120,rotate:6,rotateX:-85,transformPerspective:700},{yPercent:0,rotate:0,rotateX:0,duration:1.5,stagger:.035},r).fromTo(".hero__top > *, .hero__bottom > *",{y:26,opacity:0},{y:0,opacity:1,duration:1.1,stagger:.08},r+.55).fromTo(".header > *",{y:-30,opacity:0},{y:0,opacity:1,duration:1,stagger:.08},r+.45).from(".hero__bottom",{"--line":0,duration:1},r+.45)}function OE(){if(document.body.classList.remove("is-loading"),!It){$t?.start(),bd(),ze.refresh();return}yd=!0;const r={k:hn.cloud},e=()=>{It.k=r.k};fe.timeline().to(r,{k:hn.name,duration:1.7,ease:"power3.out",onUpdate:e}).to(r,{k:hn.sphere,duration:1.7,ease:"power2.inOut",onUpdate:e},"+=0.55").add(()=>{bd(),$t?.start()},"-=1.25").add(()=>{yd=!1,M_(),ze.refresh()})}if(xd||T_)ve("#loader").remove(),document.body.classList.remove("is-loading"),$t?.start(),It?.jump(hn.sphere),xd||bd(.1);else{fe.set(".hero__line .char",{yPercent:120}),fe.set(".hero__top > *, .hero__bottom > *, .header > *",{opacity:0});const r=Wt("#loaderList li"),e=r.length,t={v:0};fe.timeline().to(r,{opacity:1,y:0,duration:.3,stagger:.09,ease:"power2.out"},.05).to(t,{v:e,duration:e*.16,ease:"none",onUpdate:()=>{const n=Math.floor(t.v);r.forEach((i,s)=>i.classList.toggle("is-done",s<n)),ve("#loaderCount").textContent=`${n}/${e}`}},.5).to("#loaderBar",{scaleX:1,duration:e*.16,ease:"none"},.5).to(".loader__todo, .loader__name",{yPercent:-30,opacity:0,duration:.45,ease:"power3.in",stagger:.04},"+=0.25").add(OE,"-=0.1").to("#loader",{clipPath:"inset(0 0 100% 0)",duration:.9,ease:"expo.inOut"},"-=0.1").set("#loader",{display:"none"})}if(!Bt){yo({trigger:".hero",start:"top top",end:"bottom top"}),zr.manifeste=vf[0].st,yo({trigger:"#horizon",start:"top 75%",endTrigger:"#hzPin",end:"top top"}),fe.to(".hero__title",{yPercent:-18,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}}),fe.to(".hero__line--right",{xPercent:-6,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}});const r=ve("#marquee");r.innerHTML+=r.innerHTML;let e=0,t=1;ze.create({start:0,end:"max",onUpdate:n=>{const i=n.getVelocity();t=1+Math.min(Math.abs(i)/220,9)*(n.direction||1),It&&(It.velocity=Math.min(Math.abs(i)/3200,1),It.flow=i/1e3)}}),fe.ticker.add(M_),fe.ticker.add(()=>{e-=t*.9,t+=(1-t)*.06;const n=r.scrollWidth/2;e<=-n&&(e+=n),e>0&&(e-=n),r.style.transform=`translate3d(${e}px,0,0)`}),fe.to("#manifestoText .mw",{opacity:1,stagger:.06,ease:"none",scrollTrigger:{trigger:"#manifestoText",start:"top 82%",end:"bottom 45%",scrub:.6}}),Wt(".title, .contact__title").forEach(n=>{n.closest(".ag")||fe.from(Wt(".w > span",n),{yPercent:115,rotate:4,duration:1.25,ease:"expo.out",stagger:.06,scrollTrigger:{trigger:n,start:"top 88%"}})}),fe.from(".trade",{y:46,opacity:0,rotateX:-60,transformPerspective:900,transformOrigin:"50% 0%",duration:1.15,stagger:.09,ease:"expo.out",scrollTrigger:{trigger:"#trades",start:"top 88%"}}),Wt(".step").forEach(n=>fe.from(n,{y:34,opacity:0,rotateX:-40,transformPerspective:900,transformOrigin:"50% 0%",duration:1.1,ease:"expo.out",scrollTrigger:{trigger:n,start:"top 92%"}})),fe.from("#tools .tag",{y:16,opacity:0,duration:.6,stagger:.025,ease:"power3.out",scrollTrigger:{trigger:"#tools",start:"top 92%"}}),fe.from(".site",{y:60,opacity:0,rotateX:-24,transformPerspective:1200,transformOrigin:"50% 0%",duration:1.2,stagger:.1,ease:"expo.out",scrollTrigger:{trigger:"#atSites",start:"top 85%"}}),fe.from(".clip",{y:50,opacity:0,duration:1.1,stagger:.08,ease:"expo.out",scrollTrigger:{trigger:"#reel",start:"top 88%"}}),fe.set("#mdmPages",{perspective:1500}),fe.from("#mdmPages img",{yPercent:n=>20+n*12,rotateY:n=>-58+n*9,rotateX:12,z:n=>-280-n*70,opacity:.25,transformOrigin:"0% 50%",ease:"none",scrollTrigger:{trigger:"#mdmPages",start:"top bottom",end:"bottom 72%",scrub:.8}}),fe.from(".ask, .contact__text, .contact__actions > *, .contact__list > div",{y:30,opacity:0,duration:1,stagger:.06,ease:"expo.out",scrollTrigger:{trigger:".ask",start:"top 92%"}}),ze.create({start:200,end:"max",onUpdate:n=>ve("#header").classList.toggle("is-hidden",n.direction===1&&!Ja)})}const xs=Wt(".hz-slide"),w_=Wt("#hzRail button"),kE=ve("#hzBar"),Bc=ve("#hzPin");let Dr=-1,Sd=null,ma=null;const Hm=[39.5,41.5],Vm=[-.4,39],BE={voice:[[3.5,4.5],[2.5,3.5],[.99,2.5]],sms:[[2.5,3.5],[3.5,4.5],[.99,1.45]],doublons:[[2.9,3.71],[3.9,4.2],Vm],rapport:[[-.01,.99],[2.9,3.6],[-.01,.99,.1,.2]],devis:[[0,1.7],[1.9,2.1],[2.9,3.3]],invoice:[[1.9,2.1],[0,1.01,-1,.5],[0,1.01]],switch:[[.41,1.01],[-.01,.01,.9,1.1],[0,.41,-1,.5]],radar:[[2.9,3.6],[1.9,2.1],[.99,1.6]],site:[[.99,1.99],Vm,[-.01,.01]],wave:[[0,1.01],[1.9,3.1],Hm],film:[[0,1.01,-1,.5],[.45,.55,.9,1.1],Hm],server:[[.99,1.99],[1.99,2.94],[2.95,3.5]]};let Md=0,Gm="mouse";const Td=()=>{clearTimeout(Md),Wt(".slide__metrics > .is-lit").forEach(r=>r.classList.remove("is-lit")),It?.highlight?.(null)},Wm=r=>{const e=r.closest(".hz-slide");if(!e||!e.classList.contains("is-active")||!e.classList.contains("is-future"))return;const t=Dt[+e.dataset.i],n=BE[t.id]?.[[...r.parentNode.children].indexOf(r)];n&&(Wt(".slide__metrics > .is-lit").forEach(i=>i.classList.remove("is-lit")),r.classList.add("is-lit"),It?.highlight?.(t.id,n))};Wt("#hzStage .slide__metrics > div").forEach(r=>{r.addEventListener("pointerdown",e=>{Gm=e.pointerType}),r.addEventListener("pointerenter",e=>{e.pointerType!=="touch"&&Wm(r)}),r.addEventListener("pointerleave",e=>{e.pointerType!=="touch"&&Td()}),r.addEventListener("click",()=>{Gm==="touch"&&(Wm(r),clearTimeout(Md),Md=setTimeout(Td,2600))})});const zc={get:r=>{try{return localStorage.getItem(r)}catch{return null}},set:(r,e)=>{try{localStorage.setItem(r,e)}catch{}}},pc=new Set((zc.get("hz:vus")||"").split(",").filter(r=>Dt.some(e=>e.id===r))),so=Dt.findIndex(r=>r.id===zc.get("hz:fin")),E_=()=>w_.forEach((r,e)=>r.classList.toggle("is-seen",pc.has(Dt[e].id)));E_();let qm=so;const zE=r=>{const e=Dt[r].id;r>qm&&(qm=r,zc.set("hz:fin",e)),pc.has(e)||(pc.add(e),zc.set("hz:vus",[...pc].join(",")),E_())};function Xm(r,e){if(r===Dr&&e===Sd)return;Td(),e&&zE(r);const t=r!==Dr,n=r>Dr?1:-1,i=xs[Dr],s=xs[r];Dr=r,Sd=e,w_.forEach((l,c)=>{l.classList.toggle("is-active",c===r),l.classList.toggle("is-done",c<r),l.setAttribute("aria-current",c===r?"true":"false")}),Bc.style.setProperty("--c",e?Dt[r].color:"#9DA4AE"),Bc.classList.toggle("is-future",e),s.classList.toggle("is-future",e),t&&(xs.forEach((l,c)=>l.setAttribute("aria-hidden",c===r?"false":"true")),i&&(fe.killTweensOf(i),fe.to(i,{y:-36*n,opacity:0,filter:"blur(8px)",duration:.34,ease:"power2.in",onComplete:()=>{xs[Dr]!==i&&i.classList.remove("is-active"),fe.set(i,{clearProps:"filter"})}})),s.classList.add("is-active"),fe.killTweensOf(s),fe.fromTo(s,{y:50*n,opacity:0,filter:"blur(10px)"},{y:0,opacity:1,filter:"blur(0px)",duration:.9,ease:"expo.out",delay:i?.14:0,clearProps:"filter"}));const o=ve(e?".hz-ph--future":".hz-ph--today",s),a=e&&!t?.45:0;fe.fromTo(Wt(".w > span",o),{yPercent:115},{yPercent:0,duration:1,ease:"expo.out",stagger:.035,delay:(t&&i?.18:.05)+a,overwrite:!0}),e&&(fe.fromTo(Wt(".hz-ph__say > span",s),{opacity:0},{opacity:1,duration:.01,stagger:.035,delay:.1+a,overwrite:!0}),Wt(".slide__metrics b",s).forEach((l,c)=>y_(l,.3+a+c*.09))),window.dispatchEvent(new CustomEvent("station:phase",{detail:{index:r,future:e}}))}Bt?(ve("#horizon").classList.add("hz--static"),xs.forEach(r=>{r.classList.add("is-active","is-future"),r.setAttribute("aria-hidden","false")})):(Xm(0,!1),ma=yo({trigger:Bc,start:"top top",end:()=>`+=${Math.round(window.innerHeight*1.05*gr)}`,pin:!0,scrub:!0,invalidateOnRefresh:!0,onUpdate:r=>{const[e,t]=NE(r.progress);Xm(e,t),kE.style.transform=`scaleX(${r.progress})`}},UE));function jm(){if(!It||Bt)return;const r=Bc.getBoundingClientRect(),e=ve("#hzStage").getBoundingClientRect(),t=ve("#hzDash").getBoundingClientRect(),n=Math.max(e.top,Qc?e.top:t.bottom+8)-r.top,i=ve("#hzRail").getBoundingClientRect().top-r.top-12,s={},o=a=>a.w>60&&a.h>60?Math.min(a.w/3.2,a.h/3.1):0;xs.forEach((a,l)=>{const c=a.getBoundingClientRect(),u=Math.min(...Wt(".hz-ph",a).map(_=>_.offsetTop))+c.top-r.top-16,h=c.right+28,d={x:h,y:n,w:e.right-h,h:i-n},f={x:e.left,y:t.bottom-r.top+6,w:e.width,top:!0};f.h=u-f.y;const m=o(d)>=o(f)?d:f;s[Dt[l].id]=m,s[`auj_${Dt[l].id}`]=m}),It.stages=s}It&&!Bt&&(jm(),ze.addEventListener("refresh",jm));const xf=(r,e=.6)=>ma?ma.start+(ma.end-ma.start)*((r+e)/gr):xs[r].getBoundingClientRect().top+window.scrollY;ve("#hzRail").addEventListener("click",r=>{const e=r.target.closest("[data-go]");if(!e)return;const t=xf(+e.dataset.go);$t?$t.scrollTo(t,{duration:1.4}):window.scrollTo(0,t)});const Jl=ve("#resume");so>=1&&(Jl.textContent=`${ft["hero.resume"]} · ${xr(so+1)} ${nl(Dt[so]).short} →`,Jl.style.setProperty("--c",Dt[so].color),Jl.hidden=!1,Jl.addEventListener("click",r=>{r.preventDefault();const e=xf(so);$t?$t.scrollTo(e,{duration:2.4}):window.scrollTo(0,e)}));const Oo=ve("#agents");let wd=null,$m=null,mc=null,rh=null,A_=0;const C_=()=>rh||(rh=Qm(async()=>{const{initAgentRoom:r}=await import("./agents-CbPjZlFO.js");return{initAgentRoom:r}},__vite__mapDeps([0,1]),import.meta.url).then(({initAgentRoom:r})=>(mc=r({els:{section:Oo,stage:ve("#agStage"),log:ve("#agLog"),tabs:ve("#agTabs"),ctl:ve("#agCtl"),note:ve("#agNote")},texts:ln.agents,reduced:Bt,compact:Qc,ui:{play:ft["agents.play"],pause:ft["agents.pause"],skip:ft["agents.skip"],replay:ft["agents.replay"],scroll:ft["agents.scroll"],log:ft["agents.log"]}}),Bt||mc.scroll(A_),mc)).catch(()=>(rh=null,null))),R_=new IntersectionObserver(r=>{r.some(e=>e.isIntersecting)&&(R_.disconnect(),C_())},{rootMargin:"0px 0px 200% 0px"});R_.observe(Oo);setTimeout(C_,9e3);Bt||(zr.agents=yo({trigger:Oo,start:"top bottom",end:"top top"}),wd=ze.create({trigger:"#agPin",start:"top top",end:()=>`+=${Math.round(window.innerHeight*(Qc?2.4:2.8))}`,pin:!0,scrub:.4,invalidateOnRefresh:!0,onUpdate:r=>{A_=r.progress,mc?.scroll(r.progress)},onToggle:r=>{It&&($m?.kill(),r.isActive?$m=fe.delayedCall(1.6,()=>It.pause()):It.play())}}),fe.from(".ag__head .w > span",{yPercent:115,duration:1.2,ease:"expo.out",stagger:.05,scrollTrigger:{trigger:Oo,start:"top 70%"}}),zr.path=yo({trigger:"#trajectoire",start:"top bottom",end:"top 25%"}),zr.contact=yo({trigger:"#contact",start:"top 80%",end:"bottom bottom"}));const P_={epilogue:{plan:"horizon",tint:"#2F80FF"}};Dt.forEach(r=>{P_[r.id]={plan:"flux",tint:r.color}});const HE=DE({mount:ve("#cine"),scenes:P_,reduced:Bt,mobile:Qc}),VE=()=>{const r=window.innerHeight/2,e=t=>{if(!t)return!1;const n=t.getBoundingClientRect();return n.top<=r&&n.bottom>=r};return e(ve("#horizon"))?Sd&&Dt[Dr]?Dt[Dr].id:null:e(Oo)?"agents":e(ve("#contact"))?"epilogue":null};let GE=0;fe.ticker.add(()=>{++GE%8||HE.set(VE())});function WE(){const r=ze.maxScroll(window),e=n=>n?n.getBoundingClientRect().top+window.scrollY-window.innerHeight*.3:0,t=[{label:zi==="fr"?"Accueil":"Home",y:0},{label:zi==="fr"?"Manifeste":"Manifesto",y:zr.manifeste?zr.manifeste.end:e(ve("#manifeste"))},...Dt.map((n,i)=>({label:`${xr(i+1)} · ${nl(n).short}`,color:n.color,sub:!0,y:xf(i)})),{label:ft["nav.agents"],y:wd?wd.start:e(Oo)},{label:ft["nav.atelier"],y:e(ve("#atelier"))},{label:ft["nav.path"],y:zr.path?zr.path.end:e(ve("#trajectoire"))},{label:ft["nav.contact"],y:r,end:!0}];return t.forEach(n=>{n.y=Math.max(0,Math.min(r,n.y))}),t}Wt(".clip");const qE=new IntersectionObserver(r=>r.forEach(e=>{const t=e.target;e.isIntersecting?(t.src||(t.src=t.dataset.src),Bt||t.play().catch(()=>{})):t.pause()}),{threshold:.25});Wt(".clip video").forEach(r=>qE.observe(r));const fr=ve("#lightbox"),bo=ve("#lightboxVideo");let Wo=null;function XE(r){Wo=document.activeElement,bo.src=r,fr.setAttribute("aria-hidden","false"),fe.set(fr,{visibility:"visible"}),fe.to(fr,{opacity:1,duration:.4}),fe.fromTo(bo,{scale:.9,y:30},{scale:1,y:0,duration:.8,ease:"expo.out"}),$t?.stop(),bo.play().catch(()=>{}),ve("#lightboxClose").focus()}function yf(){fr.getAttribute("aria-hidden")!=="true"&&(fr.setAttribute("aria-hidden","true"),bo.pause(),fe.to(fr,{opacity:0,duration:.3,onComplete:()=>{fe.set(fr,{visibility:"hidden"}),bo.removeAttribute("src"),bo.load()}}),$t?.start(),Wo?.focus())}ve("#reel").addEventListener("click",r=>{const e=r.target.closest(".clip");e&&XE(e.dataset.video)});ve("#lightboxClose").addEventListener("click",yf);fr.addEventListener("click",r=>{r.target===fr&&yf()});const Hc=ve("#case"),L_=ve("#caseBody");let gc=null;const jE=(r,e)=>{const t=ve("#caseBody .case__glass");t&&(gc||(gc=Qm(()=>import("./glass-D-F166Mz.js"),__vite__mapDeps([2,1]),import.meta.url).then(n=>n.initGlass({reduced:Bt,calm:()=>document.documentElement.classList.contains("fx-off")})).catch(()=>(gc=null,null))),gc.then(n=>n?.show(t,r,e)).catch(()=>{}))};function Ed(r){const e=ln.projects.findIndex(o=>o.id===r),t=ln.projects[e],n=ln.projects[(e+1)%ln.projects.length],i=Dt.find(o=>o.project===r),s=i?Nc(i):null;L_.innerHTML=`<header class="case__head"><div><p class="case__n mono">${xr(e+1)} / ${xr(ln.projects.length)}${i?` · <span class="badge badge--${s}">${Be(Ia.status[s])}</span>`:""}</p>
    <h2 class="case__title" id="caseTitle">${Be(t.title)}</h2><p class="case__sub">${Be(t.sub)}</p></div>
    <div class="case__glass" aria-hidden="true"><span class="case__glass-hint mono">${Be(ft["case.glass"])}</span></div></header>
    <div class="case__grid"><div><p class="case__summary">${Be(t.summary)}</p>${t.img?`<img class="case__img" src="${t.img}" alt="${Be(t.title)}" />`:""}
      <div class="case__links">${t.links.map(([o,a])=>`<a class="btn btn--primary" href="${a}"${a.startsWith("#")?"":' target="_blank" rel="noopener"'}><span class="btn__fill"></span><span>${Be(o)}</span><span class="btn__arrow">→</span></a>`).join("")}
        <button class="btn" type="button" data-next="${n.id}"><span class="btn__fill"></span><span>${Be(ft["case.next"])} — ${Be(n.title)}</span><span class="btn__arrow">→</span></button></div></div>
      <div><h4>${Be(ft["case.results"])}</h4><div class="metrics">${t.metrics.map(([o,a])=>`<div class="metric"><b>${Be(o)}</b><span>${Be(a)}</span></div>`).join("")}</div>
        <h4>${Be(ft["case.stack"])}</h4><div class="case__stack">${t.stack.map(o=>`<i class="tag">${Be(o)}</i>`).join("")}</div>
        <h4>${Be(ft["case.built"])}</h4><ul class="case__built">${t.built.map(o=>`<li>${Be(o)}</li>`).join("")}</ul></div>${pE(zi,t.id)}</div>`,ve(".case__scroll").scrollTop=0,jE(t.id,i?.color),Bt||fe.from("#caseBody .case__n, #caseBody .case__title, #caseBody .case__sub, #caseBody .case__glass, #caseBody .case__summary, #caseBody .case__img, #caseBody .metric, #caseBody .case__built li, #caseBody .case__links, #caseBody .feat",{y:40,opacity:0,duration:.9,stagger:.04,ease:"expo.out",delay:.15})}let Fa=null;const D_=r=>{const e=r.getBoundingClientRect();return`inset(${e.top}px ${window.innerWidth-e.right}px ${window.innerHeight-e.bottom}px ${e.left}px round 28px)`},I_=r=>{if(!r?.isConnected)return!1;const e=r.getBoundingClientRect();return e.width>0&&e.bottom>0&&e.top<window.innerHeight};function F_(r,e=null){if(Wo=document.activeElement,kc=!0,Hc.setAttribute("aria-hidden","false"),$t?.stop(),KE(),fe.set(Hc,{visibility:"visible"}),Fa=I_(e)?e:null,Bt)fe.set(".case__scroll",{clipPath:"inset(0% 0 0 0)"}),Ed(r);else{const t=fe.timeline();Fa?t.set(".case__curtain",{scaleY:1}).fromTo(".case__curtain",{clipPath:D_(Fa)},{clipPath:"inset(0px 0px 0px 0px round 0px)",duration:.8,ease:"expo.inOut"}):t.fromTo(".case__curtain",{scaleY:0,transformOrigin:"bottom",clipPath:"none"},{scaleY:1,duration:.6,ease:"expo.inOut"}),t.add(()=>Ed(r)).fromTo(".case__scroll",{clipPath:"inset(100% 0 0 0)"},{clipPath:"inset(0% 0 0 0)",duration:.8,ease:"expo.inOut"},"-=0.15")}ve("#caseClose").focus()}function bf(){if(!kc)return;kc=!1,Hc.setAttribute("aria-hidden","true"),gc?.then(t=>t?.stop());const r=!Bt&&I_(Fa),e=fe.timeline({onComplete:()=>{fe.set(Hc,{visibility:"hidden"}),fe.set(".case__curtain",{clearProps:"clipPath"}),$t?.start(),Wo?.focus?.()}}).to(".case__scroll",{clipPath:"inset(0 0 100% 0)",duration:Bt?0:.6,ease:"expo.inOut"});r?e.to(".case__curtain",{clipPath:D_(Fa),duration:.7,ease:"expo.inOut"},"-=0.3").set(".case__curtain",{scaleY:0}):e.to(".case__curtain",{scaleY:0,transformOrigin:"top",duration:Bt?0:.5,ease:"expo.inOut"},"-=0.3")}ve("#hzStage").addEventListener("click",r=>{const e=r.target.closest("[data-open]");e&&F_(e.dataset.open,e)});const Vc=ve("#quick"),sr=ln.quick,Ym={v:1};let Gc=!1,U_=null;ve("#quickBody").innerHTML=`<p class="label mono">${Be(sr.label)}</p>
  <h2 class="quick__title" id="quickTitle">${sr.title}</h2>
  <p class="quick__lede">${Be(sr.lede)}</p>
  <div class="quick__trades">${ln.trades.map(([r,e])=>`<div><b>${Be(r)}</b><span>${Be(e)}</span></div>`).join("")}</div>
  <div class="quick__proofs">${sr.proofs.map(([r,e,t,n])=>`<button class="proof" type="button" data-proof="${n}"><b>${Be(r)}</b><span>${Be(e)}</span><i class="mono">${Be(t)} →</i></button>`).join("")}</div>
  <dl class="quick__facts">${sr.facts.map(([r,e])=>`<div><dt class="mono">${Be(r)}</dt><dd>${Be(e)}</dd></div>`).join("")}</dl>
  <div class="quick__stack">${sr.stack.map(r=>`<i class="tag">${Be(r)}</i>`).join("")}</div>
  <div class="quick__actions">
    <a class="btn btn--primary" href="${gs.cv}" download><span class="btn__fill"></span><span class="btn__label">${Be(sr.cv)}</span><span class="btn__arrow">↓</span></a>
    <a class="btn" href="mailto:${gs.email}"><span class="btn__fill"></span><span class="btn__label">${Be(sr.mail)}</span><span class="btn__arrow">→</span></a>
    <a class="btn" href="tel:${gs.phoneIntl}"><span class="btn__fill"></span><span class="btn__label">${gs.phone}</span></a>
    <button class="btn btn--ghost" type="button" id="quickMore"><span class="btn__fill"></span><span class="btn__label">${Be(sr.more)}</span><span class="btn__arrow">↓</span></button>
  </div>
  <div class="quick__timer" aria-hidden="true"><span class="quick__track"><i id="quickTimer"></i></span><span class="mono" id="quickSec">30 s</span></div>`;const N_=r=>fe.to(Ym,{v:r,duration:.6,overwrite:!0,onUpdate:()=>{It&&(It.dim=Ym.v)}});function $E(){Gc||(Gc=!0,Wo=document.activeElement,eu(),Vc.setAttribute("aria-hidden","false"),$t?.stop(),fe.set(Vc,{visibility:"visible"}),N_(.3),ve(".quick__panel").scrollTop=0,Bt?(fe.set(".quick__veil",{opacity:1}),fe.set(".quick__panel",{clipPath:"inset(0 0 0% 0)"})):U_=fe.timeline().fromTo(".quick__veil",{opacity:0},{opacity:1,duration:.4}).fromTo(".quick__panel",{clipPath:"inset(0 0 100% 0)"},{clipPath:"inset(0 0 0% 0)",duration:.85,ease:"expo.inOut"},0).fromTo("#quickBody > *",{y:36,opacity:0},{y:0,opacity:1,duration:.9,stagger:.07,ease:"expo.out"},.35).fromTo(".proof",{rotateX:-60,transformPerspective:800,transformOrigin:"50% 0%",opacity:0},{rotateX:0,opacity:1,duration:1,stagger:.09,ease:"expo.out"},.5).add(()=>Wt(".proof b").forEach((r,e)=>y_(r,e*.08)),.6).fromTo("#quickTimer",{scaleX:0},{scaleX:1,duration:30,ease:"none",onUpdate(){ve("#quickSec").textContent=`${Math.max(0,Math.ceil(30-this.time()))} s`}},.4),ve("#quickClose").focus())}function qo(){Gc&&(Gc=!1,Vc.setAttribute("aria-hidden","true"),U_?.kill(),N_(1),fe.timeline({onComplete:()=>{fe.set(Vc,{visibility:"hidden"}),kc||$t?.start(),Wo?.focus?.()}}).to(".quick__panel",{clipPath:"inset(0 0 100% 0)",duration:Bt?0:.55,ease:"expo.inOut"}).to(".quick__veil",{opacity:0,duration:Bt?0:.3},"-=0.2"))}document.addEventListener("click",r=>{r.target.closest("[data-quick]")&&$E()});ve("#quickClose").addEventListener("click",qo);ve(".quick__veil").addEventListener("click",qo);ve("#quickMore").addEventListener("click",qo);ve("#quickBody").addEventListener("click",r=>{const e=r.target.closest("[data-proof]");if(e){const t=YE(e);qo(),F_(e.dataset.proof,t)}});function YE(r){const e=r.getBoundingClientRect(),t=document.createElement("i");return Object.assign(t.style,{position:"fixed",left:`${e.left}px`,top:`${e.top}px`,width:`${e.width}px`,height:`${e.height}px`,pointerEvents:"none",visibility:"hidden"}),document.body.append(t),setTimeout(()=>t.remove(),1500),t}L_.addEventListener("click",r=>{const e=r.target.closest("[data-next]");e&&Ed(e.dataset.next)});ve("#caseClose").addEventListener("click",bf);const So=ve("#menu"),Ua=ve("#menuBtn");function eu(){Ja&&(Ja=!1,Ua.setAttribute("aria-expanded","false"),So.setAttribute("aria-hidden","true"),ve("span",Ua).textContent=ft["nav.menu"],fe.to(So,{clipPath:"inset(0 0 100% 0)",duration:.6,ease:"expo.inOut",onComplete:()=>fe.set(So,{visibility:"hidden"})}),$t?.start())}Ua.addEventListener("click",()=>{if(Ja)return eu();Ja=!0,Ua.setAttribute("aria-expanded","true"),So.setAttribute("aria-hidden","false"),ve("span",Ua).textContent=ft["nav.close"],$t?.stop(),fe.set(So,{visibility:"visible"}),fe.fromTo(So,{clipPath:"inset(0 0 100% 0)"},{clipPath:"inset(0 0 0% 0)",duration:.7,ease:"expo.inOut"}),fe.from(".menu__nav a",{yPercent:100,opacity:0,duration:.8,stagger:.06,ease:"expo.out",delay:.25})});document.addEventListener("keydown",r=>{r.key==="Escape"&&(yf(),bf(),eu(),qo())});const JE=ve("#preview");function KE(){fe.to(JE,{opacity:0,duration:.3})}if(g_&&!Bt){const r=ve(".cursor"),e=ve(".cursor__dot"),t=ve(".cursor__ring"),n=ve(".cursor__label"),i=fe.quickTo(e,"x",{duration:.08}),s=fe.quickTo(e,"y",{duration:.08}),o=fe.quickTo(t,"x",{duration:.45,ease:"power3"}),a=fe.quickTo(t,"y",{duration:.45,ease:"power3"});window.addEventListener("pointermove",h=>{i(h.clientX),s(h.clientY),o(h.clientX),a(h.clientY)},{passive:!0}),document.addEventListener("pointerover",h=>{const d=h.target.closest('[data-cursor="view"]'),f=h.target.closest("a, button");r.classList.toggle("is-view",!!d),r.classList.toggle("is-link",!d&&!!f),n.textContent=d?d.classList.contains("clip")?"▶":"↗":""}),Wt("[data-magnetic]").forEach(h=>{const d=fe.quickTo(h,"x",{duration:.6,ease:"elastic.out(1,0.5)"}),f=fe.quickTo(h,"y",{duration:.6,ease:"elastic.out(1,0.5)"});h.addEventListener("pointermove",m=>{const _=h.getBoundingClientRect();d((m.clientX-_.left-_.width/2)*.35),f((m.clientY-_.top-_.height/2)*.35)}),h.addEventListener("pointerleave",()=>{d(0),f(0)})}),Wt(".trade, .site, .clip").forEach(h=>{fe.set(h,{transformPerspective:900});const d=fe.quickTo(h,"rotationY",{duration:.6,ease:"power3"}),f=fe.quickTo(h,"rotationX",{duration:.6,ease:"power3"});h.addEventListener("pointermove",m=>{const _=h.getBoundingClientRect();d(((m.clientX-_.left)/_.width-.5)*7),f(-((m.clientY-_.top)/_.height-.5)*7),h.style.setProperty("--mx",`${m.clientX-_.left}px`),h.style.setProperty("--my",`${m.clientY-_.top}px`)}),h.addEventListener("pointerleave",()=>{d(0),f(0)})});const l=ve(".hero__title");fe.set(l,{transformPerspective:1200});const c=fe.quickTo(l,"rotationY",{duration:1.1,ease:"power3"}),u=fe.quickTo(l,"rotationX",{duration:1.1,ease:"power3"});window.addEventListener("pointermove",h=>{window.scrollY<window.innerHeight&&(c((h.clientX/window.innerWidth-.5)*9),u(-(h.clientY/window.innerHeight-.5)*6))},{passive:!0})}dE({lenis:$t,hero:It,reduced:Bt,fine:g_,lang:zi,routeStops:WE,sections:[["#top",zi==="fr"?"Accueil":"Home"],["#manifeste",zi==="fr"?"Manifeste":"Manifesto"],["#horizon",ft["nav.horizon"]],["#agents",ft["nav.agents"]],["#atelier",ft["nav.atelier"]],["#trajectoire",ft["nav.path"]],["#contact",ft["nav.contact"]]]});const ZE=[["invoice",["factur","impaye","paiement","encaiss","compta","invoice","payment","unpaid","billing","accounting"]],["doublons",["doublon","ressais","saisie","crm","hubspot","fichier client","synchro","duplicate","data entry","sync"]],["rapport",["rapport","reporting","tableau de bord","ventes","kpi","excel","power bi","report","dashboard","sales figures"]],["devis",["devis","chiffr","tarif","quote","quotation","estimate","pricing"]],["wave",["doubl","tradu","sous-titr","voix off","dub","translat","subtitl","voice-over","voiceover","podcast"]],["sms",["sms","texto","rendez-vous","rdv","creneau","agenda","rappel","reservation","appointment","booking","reminder","text message"]],["voice",["appel","telephon","standard","repondeur","decroch","call","phone","voicemail"]],["radar",["candidat","emploi","recrut","cv","veille","prospect","offres d","job","hiring","apply","applicat","lead","scrap"]],["switch",["mail","e-mail","email","courriel","boite","trier","classer","inbox","sort","triage"]],["film",["video","montage","film","pub","motion","reseaux","instagram","tiktok","clip","ads","advert","social"]],["site",["site","web","landing","boutique","e-commerce","shop","store","page"]],["server",["serveur","heberg","sauvegard","deploi","infra","securi","server","hosting","backup","deploy","secur"]]].map(([r,e])=>[r,e.map(t=>new RegExp(`(^|[^a-z0-9])${t.replace(/[-\s]/g,"[-\\s]?")}`))]),QE=r=>r.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),eA=r=>{const e=QE(r);let t=null,n=0;for(const[i,s]of ZE){const o=s.filter(a=>a.test(e)).length;o>n&&(n=o,t=i)}return t},Jm=ve("#askEcho");let Km=0,Zm=null;ve("#askInput").addEventListener("input",r=>{clearTimeout(Km),Km=setTimeout(()=>{const e=eA(r.target.value);if(e===Zm)return;Zm=e,It?.preview?.(e);const t=Dt.find(n=>n.id===e);Jm.style.setProperty("--c",t?t.color:"transparent"),Jm.textContent=t?ft["contact.echo"].replace("{p}",nl(t).title):""},300)});ve("#askForm").addEventListener("submit",r=>{r.preventDefault();const e=ve("#askInput").value.trim(),t=`${ft["contact.body"]}${e||"…"}
`;window.location.href=`mailto:${gs.email}?subject=${encodeURIComponent(ft["contact.subject"])}&body=${encodeURIComponent(t)}`});v_.addEventListener("click",()=>{const r=zi==="fr"?"en":"fr";try{localStorage.setItem("lang",r)}catch{}const e=()=>{const n=new URL(location.href);n.searchParams.delete("lang"),n.hash="",location.replace(n)};if(Bt)return e();const t=document.createElement("div");t.className="wipe",document.body.append(t),fe.to(t,{scaleY:1,duration:.6,ease:"expo.inOut",onComplete:e})});ve("#copyBtn").addEventListener("click",async()=>{const r=ve("#copyBtn .btn__label");try{await navigator.clipboard.writeText(gs.email),r.textContent=ft["contact.copied"]}catch{r.textContent=gs.email}setTimeout(()=>{r.textContent=ft["contact.copy"]},2200)});const tA=ve("#clock"),nA=new Intl.DateTimeFormat("fr-FR",{timeZone:"Europe/Paris",hour:"2-digit",minute:"2-digit",second:"2-digit"}),iA=ve("#nightNote"),O_=()=>{tA.textContent=nA.format(new Date(Date.now()+(b_?.skew||0))),It&&(iA.hidden=It.night<.5)};O_();setInterval(O_,1e3);document.addEventListener("visibilitychange",()=>{It&&(document.hidden?It.pause():It.play())});window.addEventListener("load",()=>ze.refresh());document.fonts?.ready.then(()=>ze.refresh());export{cA as $,ny as A,Qa as B,Ze as C,xA as D,$e as E,Tn as F,SA as G,Za as H,Io as I,Si as J,_A as K,g1 as L,di as M,vA as N,hA as O,Xn as P,Bo as Q,Xp as R,Ri as S,n_ as T,i1 as U,B as V,Ds as W,nn as X,gA as Y,bA as Z,qt as _,us as a,vs as a0,gl as a1,_u as a2,ay as a3,$i as a4,pi as a5,Hh as a6,Vh as a7,_s as a8,_1 as a9,Fs as aa,Lt as ab,uA as ac,Kg as ad,dA as ae,Gu as af,lA as ag,s_ as ah,Yg as ai,pA as aj,h1 as ak,Rc as al,md as am,jg as an,Dn as ao,Uc as ap,Fc as aq,Kc as ar,St as as,Jc as at,yr as au,pt as b,Mt as c,Ww as d,c1 as e,um as f,F1 as g,fA as h,el as i,co as j,da as k,Hg as l,Zn as m,Jg as n,t_ as o,x1 as p,ur as q,Gn as r,Yr as s,Kr as t,sA as u,aA as v,oA as w,tl as x,yA as y,mA as z};
