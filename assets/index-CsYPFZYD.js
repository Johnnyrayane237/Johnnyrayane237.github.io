var bm=Object.defineProperty;var wm=(r,e,t)=>e in r?bm(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ie=(r,e,t)=>wm(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Gi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function mf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Vs={duration:.5,overwrite:!1,delay:0},Ou,on,Pt,hi=1e8,bt=1/hi,Ec=Math.PI*2,Am=Ec/4,Cm=0,_f=Math.sqrt,Rm=Math.cos,Pm=Math.sin,rn=function(e){return typeof e=="string"},Nt=function(e){return typeof e=="function"},Ji=function(e){return typeof e=="number"},Bu=function(e){return typeof e>"u"},Ui=function(e){return typeof e=="object"},In=function(e){return e!==!1},ku=function(){return typeof window<"u"},io=function(e){return Nt(e)||rn(e)},gf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},mn=Array.isArray,Tc=/(?:-?\.?\d|\.)+/gi,vf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Cs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Pl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,xf=/[+-]=-?[.\d]+/,Sf=/[^,'"\[\]\s]+/gi,Dm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Dt,bi,bc,zu,ti={},il={},yf,Mf=function(e){return(il=Ws(e,ti))&&zn},Hu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Na=function(e,t){return!t&&console.warn(e)},Ef=function(e,t){return e&&(ti[e]=t)&&il&&(il[e]=t)||ti},Fa=function(){return 0},Lm={suppressEvents:!0,isStart:!0,kill:!1},Ho={suppressEvents:!0,kill:!1},Im={suppressEvents:!0},Gu={},gr=[],wc={},Tf,$n={},Dl={},Md=30,Go=[],Vu="",Wu=function(e){var t=e[0],n,i;if(Ui(t)||Nt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Go.length;i--&&!Go[i].targetTest(t););n=Go[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new $f(e[i],n)))||e.splice(i,1);return e},Yr=function(e){return e._gsap||Wu(fi(e))[0]._gsap},bf=function(e,t,n){return(n=e[t])&&Nt(n)?e[t]():Bu(n)&&e.getAttribute&&e.getAttribute(t)||n},Un=function(e,t){return(e=e.split(",")).forEach(t)||e},Ot=function(e){return Math.round(e*1e5)/1e5||0},Xt=function(e){return Math.round(e*1e7)/1e7||0},Is=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Um=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},rl=function(){var e=gr.length,t=gr.slice(0),n,i;for(wc={},gr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Xu=function(e){return!!(e._initted||e._startAt||e.add)},wf=function(e,t,n,i){gr.length&&!on&&rl(),e.render(t,n,!!(on&&t<0&&Xu(e))),gr.length&&!on&&rl()},Af=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Sf).length<2?t:rn(e)?e.trim():e},Cf=function(e){return e},ni=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Nm=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ws=function(e,t){for(var n in t)e[n]=t[n];return e},Ed=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ui(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},sl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ya=function(e){var t=e.parent||Dt,n=e.keyframes?Nm(mn(e.keyframes)):ni;if(In(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Fm=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Rf=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Sl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Mr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},$r=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Om=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ac=function(e,t,n,i){return e._startAt&&(on?e._startAt.revert(Ho):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Bm=function r(e){return!e||e._ts&&r(e.parent)},Td=function(e){return e._repeat?Xs(e._tTime,e=e.duration()+e._rDelay)*e:0},Xs=function(e,t){var n=Math.floor(e=Xt(e/t));return e&&n===e?n-1:n},al=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},yl=function(e){return e._end=Xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||bt)||0))},Ml=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Xt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),yl(e),n._dirty||$r(n,e)),e},Pf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=al(e.rawTime(),t),(!t._dur||ja(0,t.totalDuration(),n)-t._tTime>bt)&&t.render(n,!0)),$r(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-bt}},Ci=function(e,t,n,i){return t.parent&&Mr(t),t._start=Xt((Ji(n)?n:n||e!==Dt?oi(e,n,t):e._time)+t._delay),t._end=Xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Rf(e,t,"_first","_last",e._sort?"_start":0),Cc(t)||(e._recent=t),i||Pf(e,t),e._ts<0&&Ml(e,e._tTime),e},Df=function(e,t){return(ti.ScrollTrigger||Hu("scrollTrigger",t))&&ti.ScrollTrigger.create(t,e)},Lf=function(e,t,n,i,s){if(Yu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!on&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Tf!==Kn.frame)return gr.push(e),e._lazy=[s,i],1},km=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Cc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},zm=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&km(e)&&!(!e._initted&&Cc(e))||(e._ts<0||e._dp._ts<0)&&!Cc(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=ja(0,e._tDur,t),u=Xs(l,o),e._yoyo&&u&1&&(a=1-a),u!==Xs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||on||i||e._zTime===bt||!t&&e._zTime){if(!e._initted&&Lf(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?bt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Ac(e,t,n,!0),e._onUpdate&&!n&&Jn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Jn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Mr(e,1),!n&&!on&&(Jn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Hm=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},qs=function(e,t,n,i){var s=e._repeat,a=Xt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Xt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Ml(e,e._tTime=e._tDur*o),e.parent&&yl(e),n||$r(e.parent,e),e},bd=function(e){return e instanceof Tn?$r(e):qs(e,e._dur)},Gm={_start:0,endTime:Fa,totalDuration:Fa},oi=function r(e,t,n){var i=e.labels,s=e._recent||Gm,a=e.duration()>=hi?s.endTime(!1):e._dur,o,l,c;return rn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(mn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ma=function(e,t,n){var i=Ji(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=In(l.vars.inherit)&&l.parent;a.immediateRender=In(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Wt(t[0],a,t[s+1])},wr=function(e,t){return e||e===0?t(e):t},ja=function(e,t,n){return n<e?e:n>t?t:n},hn=function(e,t){return!rn(e)||!(t=Dm.exec(e))?"":t[1]},Vm=function(e,t,n){return wr(n,function(i){return ja(e,t,i)})},Rc=[].slice,If=function(e,t){return e&&Ui(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ui(e[0]))&&!e.nodeType&&e!==bi},Wm=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return rn(i)&&!t||If(i,1)?(s=n).push.apply(s,fi(i)):n.push(i)})||n},fi=function(e,t,n){return Pt&&!t&&Pt.selector?Pt.selector(e):rn(e)&&!n&&(bc||!Ys())?Rc.call((t||zu).querySelectorAll(e),0):mn(e)?Wm(e,n):If(e)?Rc.call(e,0):e?[e]:[]},Pc=function(e){return e=fi(e)[0]||Na("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return fi(t,n.querySelectorAll?n:n===e?Na("Invalid scope")||zu.createElement("div"):e)}},Uf=function(e){return e.sort(function(){return .5-Math.random()})},Nf=function(e){if(Nt(e))return e;var t=Ui(e)?e:{each:e},n=jr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return rn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,f,g){var _=(g||t).length,m=a[_],p,E,T,x,w,A,b,P,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,hi])[1],!S){for(b=-hi;b<(b=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=a[_]=[],p=l?Math.min(S,_)*u-.5:i%S,E=S===hi?0:l?_*h/S-.5:i/S|0,b=0,P=hi,A=0;A<_;A++)T=A%S-p,x=E-(A/S|0),m[A]=w=c?Math.abs(c==="y"?x:T):_f(T*T+x*x),w>b&&(b=w),w<P&&(P=w);i==="random"&&Uf(m),m.max=b-P,m.min=P,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=hn(t.amount||t.each)||0,n=n&&_<0?Xf(n):n}return _=(m[d]-m.min)/m.max||0,Xt(m.b+(n?n(_):_)*m.v)+m.u}},Dc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Xt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ji(n)?0:hn(n))}},Ff=function(e,t){var n=mn(e),i,s;return!n&&Ui(e)&&(i=n=e.radius||hi,e.values?(e=fi(e.values),(s=!Ji(e[0]))&&(i*=i)):e=Dc(e.increment)),wr(t,n?Nt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=hi,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-o,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:a,s||u===a||Ji(a)?u:u+hn(a)}:Dc(e))},Of=function(e,t,n,i){return wr(mn(e)?!t:n===!0?!!(n=0):!i,function(){return mn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Xm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},qm=function(e,t){return function(n){return e(parseFloat(n))+(t||hn(n))}},Ym=function(e,t,n){return kf(e,t,0,1,n)},Bf=function(e,t,n){return wr(n,function(i){return e[~~t(i)]})},$m=function r(e,t,n){var i=t-e;return mn(e)?Bf(e,r(0,e.length),t):wr(n,function(s){return(i+(s-e)%i)%i+e})},jm=function r(e,t,n){var i=t-e,s=i*2;return mn(e)?Bf(e,r(0,e.length-1),t):wr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Oa=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?Sf:Tc),n+=e.substr(t,i-t)+Of(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},kf=function(e,t,n,i,s){var a=t-e,o=i-n;return wr(s,function(l){return n+((l-e)/a*o||0)})},Km=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=rn(e),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(mn(e)&&!mn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else i||(e=Ws(mn(e)?[]:{},e));if(!u){for(l in t)qu.call(o,e,l,"get",t[l]);s=function(g){return Ku(g,o)||(a?e.p:e)}}}return wr(n,s)},wd=function(e,t,n){var i=e.labels,s=hi,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Jn=function(e,t,n){var i=e.vars,s=i[t],a=Pt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&gr.length&&rl(),o&&(Pt=o),u=l?s.apply(c,l):s.call(c),Pt=a,u},fa=function(e){return Mr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!on),e.progress()<1&&Jn(e,"onInterrupt"),e},Rs,zf=[],Hf=function(e){if(e)if(e=!e.name&&e.default||e,ku()||e.headless){var t=e.name,n=Nt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Fa,render:Ku,add:qu,kill:h_,modifier:d_,rawVars:0},a={targetTest:0,get:0,getSetter:ju,aliases:{},register:0};if(Ys(),e!==i){if($n[t])return;ni(i,ni(sl(e,s),a)),Ws(i.prototype,Ws(s,sl(e,a))),$n[i.prop=t]=i,e.targetTest&&(Go.push(i),Gu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ef(t,i),e.register&&e.register(zn,i,Nn)}else zf.push(e)},Tt=255,pa={aqua:[0,Tt,Tt],lime:[0,Tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tt],navy:[0,0,128],white:[Tt,Tt,Tt],olive:[128,128,0],yellow:[Tt,Tt,0],orange:[Tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tt,0,0],pink:[Tt,192,203],cyan:[0,Tt,Tt],transparent:[Tt,Tt,Tt,0]},Ll=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Tt+.5|0},Gf=function(e,t,n){var i=e?Ji(e)?[e>>16,e>>8&Tt,e&Tt]:0:pa.black,s,a,o,l,c,u,h,d,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),pa[e])i=pa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Tt,i&Tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Tt,e&Tt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Tc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Ll(l+1/3,s,a),i[1]=Ll(l,s,a),i[2]=Ll(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(vf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Tc)||pa.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Tt,a=i[1]/Tt,o=i[2]/Tt,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(a-o)/f+(a<o?6:0):h===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Vf=function(e){var t=[],n=[],i=-1;return e.split(vr).forEach(function(s){var a=s.match(Cs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Ad=function(e,t,n){var i="",s=(e+i).match(vr),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=Gf(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Vf(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(vr,"1").split(Cs),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(vr),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},vr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in pa)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Zm=/hsl[a]?\(/,Wf=function(e){var t=e.join(" "),n;if(vr.lastIndex=0,vr.test(t))return n=Zm.test(t),e[1]=Ad(e[1],n),e[0]=Ad(e[0],n,Vf(e[1])),!0},Ba,Kn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,d,f,g=function _(m){var p=r()-i,E=m===!0,T,x,w,A;if((p>e||p<0)&&(n+=p-t),i+=p,w=i-n,T=w-a,(T>0||E)&&(A=++h.frame,d=w-h.time*1e3,h.time=w=w/1e3,a+=T+(T>=s?4:s-T),x=1),E||(l=c(_)),x)for(f=0;f<o.length;f++)o[f](w,d,A,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){yf&&(!bc&&ku()&&(bi=bc=window,zu=bi.document||{},ti.gsap=zn,(bi.gsapVersions||(bi.gsapVersions=[])).push(zn.version),Mf(il||bi.GreenSockGlobals||!bi.gsap&&bi||{}),zf.forEach(Hf)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},Ba=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ba=0,c=Fa},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,p,E){var T=p?function(x,w,A,b){m(x,w,A,b),h.remove(T)}:m;return h.remove(m),o[E?"unshift":"push"](T),Ys(),T},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},h})(),Ys=function(){return!Ba&&Kn.wake()},ot={},Jm=/^[\d.\-M][\d.\-,\s]/,Qm=/["']/g,e_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Qm,"").trim():+c,i=l.substr(o+1).trim();return t},t_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},n_=function(e){var t=(e+"").split("("),n=ot[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[e_(t[1])]:t_(e).split(",").map(Af)):ot._CE&&Jm.test(e)?ot._CE("",e):n},Xf=function(e){return function(t){return 1-e(1-t)}},qf=function r(e,t){for(var n=e._first,i;n;)n instanceof Tn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},jr=function(e,t){return e&&(Nt(e)?e:ot[e]||n_(e))||t},os=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Un(e,function(o){ot[o]=ti[o]=s,ot[a=o.toLowerCase()]=n;for(var l in s)ot[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ot[o+"."+l]=s[l]}),s},Yf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Il=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Ec*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Pm((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Yf(o);return s=Ec/s,l.config=function(c,u){return r(e,c,u)},l},Ul=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Yf(n);return i.config=function(s){return r(e,s)},i};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;os(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;os("Elastic",Il("in"),Il("out"),Il());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};os("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);os("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});os("Circ",function(r){return-(_f(1-r*r)-1)});os("Sine",function(r){return r===1?1:-Rm(r*Am)+1});os("Back",Ul("in"),Ul("out"),Ul());ot.SteppedEase=ot.steps=ti.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-bt;return function(o){return((i*ja(0,a,o)|0)+s)*n}}};Vs.ease=ot["quad.out"];Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Vu+=r+","+r+"Params,"});var $f=function(e,t){this.id=Cm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:bf,this.set=t?t.getSetter:ju},ka=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,qs(this,+t.duration,1,1),this.data=t.data,Pt&&(this._ctx=Pt,Pt.data.push(this)),Ba||Kn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ys(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ml(this,n),!s._dp||s.parent||Pf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ci(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===bt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),wf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Td(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Td(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Xs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?al(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-bt?0:this._rts,this.totalTime(ja(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),yl(this),Om(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ys(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bt&&(this._tTime-=bt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ci(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(In(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?al(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Im);var i=on;return on=n,Xu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),on=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,bd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,bd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(oi(this,n),In(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,In(i)),this._dur||(this._zTime=-bt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-bt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=Nt(n)?n:Cf,o=function(){var c=i.then;i.then=null,Nt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){fa(this)},r})();ni(ka.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var Tn=(function(r){mf(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=In(n.sortChildren),Dt&&Ci(n.parent||Dt,Gi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Df(Gi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Ma(0,arguments,this),this},t.from=function(i,s,a){return Ma(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Ma(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,ya(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Wt(i,s,oi(this,a),1),this},t.call=function(i,s,a){return Ci(this,Wt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Wt(i,a,oi(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ya(a).immediateRender=In(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,ya(o).immediateRender=In(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Xt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,m,p,E,T,x,w,A,b;if(this!==Dt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,x=this._start,T=this._ts,p=!T,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=Xt(u%m),u===l?(_=this._repeat,d=c):(w=Xt(u/m),_=~~w,_&&_===w&&(d=c,_--),d>c&&(d=c)),w=Xs(this._tTime,m),!o&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),A&&_&1&&(d=c-d,b=1),_!==w&&!this._lock){var P=A&&w&1,S=P===(A&&_&1);if(_<w&&(P=!P),o=P?0:u%c?c:u,this._lock=1,this.render(o||(b?0:Xt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Jn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;qf(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=Hm(this,Xt(o),Xt(d)),E&&(u-=d-(d=E._start))),this._tTime=u,this._time=d,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&!s&&!w&&(Jn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&E!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){E=0,g&&(u+=this._zTime=-bt);break}}f=g}else{f=this._last;for(var v=i<0?i:d;f;){if(g=f._prev,(f._act||v<=f._end)&&f._ts&&E!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(v-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(v-f._start)*f._ts,s,a||on&&Xu(f)),d!==this._time||!this._ts&&!p){E=0,g&&(u+=this._zTime=v?-bt:bt);break}}f=g}}if(E&&!s&&(this.pause(),E.render(d>=o?0:-bt)._zTime=d>=o?1:-1,this._ts))return this._start=x,yl(this),this.render(i,s,a);this._onUpdate&&!s&&Jn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Mr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Jn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Ji(s)||(s=oi(this,s,i)),!(i instanceof ka)){if(mn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(rn(i))return this.addLabel(i,s);if(Nt(i))i=Wt.delayedCall(0,i);else return this}return this!==i?Ci(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-hi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Wt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return rn(i)?this.removeLabel(i):Nt(i)?this.killTweensOf(i):(i.parent===this&&Sl(this,i),i===this._recent&&(this._recent=this._last),$r(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xt(Kn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=oi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Wt.delayedCall(0,s||Fa,a);return o.data="isPause",this._hasPause=1,Ci(this,o,oi(this,i))},t.removePause=function(i){var s=this._first;for(i=oi(this,i);s;)s._start===i&&s.data==="isPause"&&Mr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)hr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=fi(i),l=this._first,c=Ji(s),u;l;)l instanceof Wt?Um(l._targets,o)&&(c?(!hr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=oi(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,g=Wt.to(a,ni({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||bt,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&qs(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ni({startAt:{time:oi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),wd(this,oi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),wd(this,oi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return $r(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),$r(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=hi,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ci(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;qs(a,a===Dt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Dt._ts&&(wf(Dt,al(i,Dt)),Tf=Kn.frame),Kn.frame>=Md){Md+=ei.autoSleep||120;var s=Dt._first;if((!s||!s._ts)&&ei.autoSleep&&Kn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Kn.sleep()}}},e})(ka);ni(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var i_=function(e,t,n,i,s,a,o){var l=new Nn(this._pt,e,t,0,1,ep,null,s),c=0,u=0,h,d,f,g,_,m,p,E;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Oa(i)),a&&(E=[n,i],a(E,e,t),n=E[0],i=E[1]),d=n.match(Pl)||[];h=Pl.exec(i);)g=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Is(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=Pl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(xf.test(i)||p)&&(l.e=0),this._pt=l,l},qu=function(e,t,n,i,s,a,o,l,c,u){Nt(i)&&(i=i(s||0,e,a));var h=e[t],d=n!=="get"?n:Nt(h)?c?e[t.indexOf("set")||!Nt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Nt(h)?c?l_:Jf:$u,g;if(rn(i)&&(~i.indexOf("random(")&&(i=Oa(i)),i.charAt(1)==="="&&(g=Is(d,i)+(hn(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Lc)return!isNaN(d*i)&&i!==""?(g=new Nn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?u_:Qf,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&Hu(t,i),i_.call(this,e,t,d,i,f,l||ei.stringFilter,c))},r_=function(e,t,n,i,s){if(Nt(e)&&(e=Ea(e,s,t,n,i)),!Ui(e)||e.style&&e.nodeType||mn(e)||gf(e))return rn(e)?Ea(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Ea(e[o],s,t,n,i);return a},jf=function(e,t,n,i,s,a){var o,l,c,u;if($n[e]&&(o=new $n[e]).init(s,o.rawVars?t[e]:r_(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Nn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Rs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},hr,Lc,Yu=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,E=p&&p.data==="nested"?p.vars.targets:m,T=e._overwrite==="auto"&&!Ou,x=e.timeline,w,A,b,P,S,v,D,N,U,B,X,W,H;if(x&&(!d||!s)&&(s="none"),e._ease=jr(s,Vs.ease),e._yEase=h?Xf(jr(h===!0?s:h,Vs.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(N=m[0]?Yr(m[0]).harness:0,W=N&&i[N.prop],w=sl(i,Gu),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&g?Ho:Lm),_._lazy=0),a){if(Mr(e._startAt=Wt.set(m,ni({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&In(l),startAt:null,delay:0,onUpdate:c&&function(){return Jn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on||!o&&!f)&&e._startAt.revert(Ho),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),b=ni({overwrite:!1,data:"isFromStart",lazy:o&&!_&&In(l),immediateRender:o,stagger:0,parent:p},w),W&&(b[N.prop]=W),Mr(e._startAt=Wt.set(m,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on?e._startAt.revert(Ho):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&In(l)||l&&!g,A=0;A<m.length;A++){if(S=m[A],D=S._gsap||Wu(m)[A]._gsap,e._ptLookup[A]=B={},wc[D.id]&&gr.length&&rl(),X=E===m?A:E.indexOf(S),N&&(U=new N).init(S,W||w,e,X,E)!==!1&&(e._pt=P=new Nn(e._pt,S,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(z){B[z]=P}),U.priority&&(v=1)),!N||W)for(b in w)$n[b]&&(U=jf(b,w,e,X,S,E))?U.priority&&(v=1):B[b]=P=qu.call(e,S,b,"get",w[b],X,E,0,i.stringFilter);e._op&&e._op[A]&&e.kill(S,e._op[A]),T&&e._pt&&(hr=e,Dt.killTweensOf(S,B,e.globalTime(t)),H=!e.parent,hr=0),e._pt&&l&&(wc[D.id]=1)}v&&tp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!H,d&&t<=0&&x.render(hi,!0,!0)},s_=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Lc=1,e.vars[t]="+=0",Yu(e,o),Lc=0,l?Na(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Ot(n)+hn(h.e)),h.b&&(h.b=u.s+hn(h.b))},a_=function(e,t){var n=e[0]?Yr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Ws({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},o_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(mn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ea=function(e,t,n,i,s){return Nt(e)?e.call(t,n,i,s):rn(e)&&~e.indexOf("random(")?Oa(e):e},Kf=Vu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Zf={};Un(Kf+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Zf[r]=1});var Wt=(function(r){mf(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ya(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,E=i.parent||Dt,T=(mn(n)||gf(n)?Ji(n[0]):"length"in i)?[n]:fi(n),x,w,A,b,P,S,v,D;if(o._targets=T.length?Wu(T):Na("GSAP target "+n+" not found. https://gsap.com",!ei.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||d||io(c)||io(u)){if(i=o.vars,x=o.timeline=new Tn({data:"nested",defaults:_||{},targets:E&&E.data==="nested"?E.vars.targets:T}),x.kill(),x.parent=x._dp=Gi(o),x._start=0,d||io(c)||io(u)){if(b=T.length,v=d&&Nf(d),Ui(d))for(P in d)~Kf.indexOf(P)&&(D||(D={}),D[P]=d[P]);for(w=0;w<b;w++)A=sl(i,Zf),A.stagger=0,p&&(A.yoyoEase=p),D&&Ws(A,D),S=T[w],A.duration=+Ea(c,Gi(o),w,S,T),A.delay=(+Ea(u,Gi(o),w,S,T)||0)-o._delay,!d&&b===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),x.to(S,A,v?v(w,S,T):0),x._ease=ot.none;x.duration()?c=u=0:o.timeline=0}else if(g){ya(ni(x.vars.defaults,{ease:"none"})),x._ease=jr(g.ease||i.ease||"none");var N=0,U,B,X;if(mn(g))g.forEach(function(W){return x.to(T,W,">")}),x.duration();else{A={};for(P in g)P==="ease"||P==="easeEach"||o_(P,g[P],A,g.easeEach);for(P in A)for(U=A[P].sort(function(W,H){return W.t-H.t}),N=0,w=0;w<U.length;w++)B=U[w],X={ease:B.e,duration:(B.t-(w?U[w-1].t:0))/100*c},X[P]=B.v,x.to(T,X,N),N+=X.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return f===!0&&!Ou&&(hr=Gi(o),Dt.killTweensOf(T),hr=0),Ci(E,Gi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===Xt(E._time)&&In(h)&&Bm(Gi(o))&&E.data!=="nested")&&(o._tTime=-bt,o.render(Math.max(0,-u)||0)),m&&Df(Gi(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-bt&&!u?l:i<bt?0:i,d,f,g,_,m,p,E,T,x;if(!c)zm(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,T=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(d=Xt(h%_),h===l?(g=this._repeat,d=c):(m=Xt(h/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(x=this._yEase,d=c-d),m=Xs(this._tTime,_),d===o&&!a&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(T&&this._yEase&&qf(T,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(Xt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Lf(this,u?i:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(x||this._ease)(d/c),this._from&&(this.ratio=E=1-E),!o&&h&&!s&&!m&&(Jn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(E,f.d),f=f._next;T&&T.render(i<0?i:T._dur*T._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Ac(this,i,s,a),Jn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Jn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Ac(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Mr(this,1),!s&&!(u&&!o)&&(h||o||p)&&(Jn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Ba||Kn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Yu(this,c),u=this._ease(c/this._dur),s_(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Ml(this,0),this.parent||Rf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?fa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!on),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,hr&&hr.vars.overwrite!==!0)._first||fa(this),this.parent&&a!==this.timeline.totalDuration()&&qs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?fi(i):o,c=this._ptLookup,u=this._pt,h,d,f,g,_,m,p;if((!s||s==="all")&&Fm(o,l))return s==="all"&&(this._pt=0),fa(this);for(h=this._op=this._op||[],s!=="all"&&(rn(s)&&(_={},Un(s,function(E){return _[E]=1}),s=_),s=a_(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(h[p]=s,g=d,f={}):(f=h[p]=h[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Sl(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&fa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ma(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Ma(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Dt.killTweensOf(i,s,a)},e})(ka);ni(Wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Un("staggerTo,staggerFrom,staggerFromTo",function(r){Wt[r]=function(){var e=new Tn,t=Rc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var $u=function(e,t,n){return e[t]=n},Jf=function(e,t,n){return e[t](n)},l_=function(e,t,n,i){return e[t](i.fp,n)},c_=function(e,t,n){return e.setAttribute(t,n)},ju=function(e,t){return Nt(e[t])?Jf:Bu(e[t])&&e.setAttribute?c_:$u},Qf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},u_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ep=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ku=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},d_=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},h_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Sl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},f_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},tp=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Nn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Qf,this.d=l||this,this.set=c||$u,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=f_,this.m=n,this.mt=s,this.tween=i},r})();Un(Vu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Gu[r]=1});ti.TweenMax=ti.TweenLite=Wt;ti.TimelineLite=ti.TimelineMax=Tn;Dt=new Tn({sortChildren:!1,defaults:Vs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ei.stringFilter=Wf;var Kr=[],Vo={},p_=[],Cd=0,m_=0,Nl=function(e){return(Vo[e]||p_).map(function(t){return t()})},Ic=function(){var e=Date.now(),t=[];e-Cd>2&&(Nl("matchMediaInit"),Kr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=bi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Nl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Cd=e,Nl("matchMedia"))},np=(function(){function r(t,n){this.selector=n&&Pc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=m_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Nt(n)&&(s=i,i=n,n=Nt);var a=this,o=function(){var c=Pt,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Pc(s)),Pt=a,h=i.apply(a,arguments),Nt(h)&&a._r.push(h),Pt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Nt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Pt;Pt=null,n(this),Pt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Wt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Wt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Kr.length;a--;)Kr[a].id===this.id&&Kr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),__=(function(){function r(t){this.contexts=[],this.scope=t,Pt&&Pt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ui(n)||(n={matches:n});var a=new np(0,s||this.scope),o=a.conditions={},l,c,u;Pt&&!a.selector&&(a.selector=Pt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=bi.matchMedia(n[c]),l&&(Kr.indexOf(a)<0&&Kr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ic):l.addEventListener("change",Ic)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),ol={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Hf(i)})},timeline:function(e){return new Tn(e)},getTweensOf:function(e,t){return Dt.getTweensOf(e,t)},getProperty:function(e,t,n,i){rn(e)&&(e=fi(e)[0]);var s=Yr(e||{}).get,a=n?Cf:Af;return n==="native"&&(n=""),e&&(t?a(($n[t]&&$n[t].get||s)(e,t,n,i)):function(o,l,c){return a(($n[o]&&$n[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=fi(e),e.length>1){var i=e.map(function(u){return zn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=$n[t],o=Yr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Rs._pt=0,h.init(e,n?u+n:u,Rs,0,[e]),h.render(1,h),Rs._pt&&Ku(1,Rs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=zn.to(e,ni((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=jr(e.ease,Vs.ease)),Ed(Vs,e||{})},config:function(e){return Ed(ei,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!$n[o]&&!ti[o]&&Na(t+" effect requires "+o+" plugin.")}),Dl[t]=function(o,l,c){return n(fi(o),ni(l||{},s),c)},a&&(Tn.prototype[t]=function(o,l,c){return this.add(Dl[t](o,Ui(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ot[e]=jr(t)},parseEase:function(e,t){return arguments.length?jr(e,t):ot},getById:function(e){return Dt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Tn(e),i,s;for(n.smoothChildTiming=In(e.smoothChildTiming),Dt.remove(n),n._dp=0,n._time=n._tTime=Dt._time,i=Dt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Wt&&i.vars.onComplete===i._targets[0]))&&Ci(n,i,i._start-i._delay),i=s;return Ci(Dt,n,0),n},context:function(e,t){return e?new np(e,t):Pt},matchMedia:function(e){return new __(e)},matchMediaRefresh:function(){return Kr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ic()},addEventListener:function(e,t){var n=Vo[e]||(Vo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Vo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:$m,wrapYoyo:jm,distribute:Nf,random:Of,snap:Ff,normalize:Ym,getUnit:hn,clamp:Vm,splitColor:Gf,toArray:fi,selector:Pc,mapRange:kf,pipe:Xm,unitize:qm,interpolate:Km,shuffle:Uf},install:Mf,effects:Dl,ticker:Kn,updateRoot:Tn.updateRoot,plugins:$n,globalTimeline:Dt,core:{PropTween:Nn,globals:Ef,Tween:Wt,Timeline:Tn,Animation:ka,getCache:Yr,_removeLinkedListItem:Sl,reverting:function(){return on},context:function(e){return e&&Pt&&(Pt.data.push(e),e._ctx=Pt),Pt},suppressOverwrites:function(e){return Ou=e}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ol[r]=Wt[r]});Kn.add(Tn.updateRoot);Rs=ol.to({},{duration:0});var g_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},v_=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=g_(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Fl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(rn(s)&&(l={},Un(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}v_(o,s)}}}},zn=ol.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)on?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Fl("roundProps",Dc),Fl("modifiers"),Fl("snap",Ff))||ol;Wt.version=Tn.version=zn.version="3.13.0";yf=1;ku()&&Ys();ot.Power0;ot.Power1;ot.Power2;ot.Power3;ot.Power4;ot.Linear;ot.Quad;ot.Cubic;ot.Quart;ot.Quint;ot.Strong;ot.Elastic;ot.Back;ot.SteppedEase;ot.Bounce;ot.Sine;ot.Expo;ot.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Rd,fr,Us,Zu,Vr,Pd,Ju,x_=function(){return typeof window<"u"},Qi={},Fr=180/Math.PI,Ns=Math.PI/180,cs=Math.atan2,Dd=1e8,Qu=/([A-Z])/g,S_=/(left|right|width|margin|padding|x)/i,y_=/[\s,\(]\S/,Ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Uc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},M_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},E_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},T_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},ip=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},rp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},b_=function(e,t,n){return e.style[t]=n},w_=function(e,t,n){return e.style.setProperty(t,n)},A_=function(e,t,n){return e._gsap[t]=n},C_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},R_=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},P_=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Lt="transform",Fn=Lt+"Origin",D_=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Qi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ri[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Vi(i,o)}):this.tfm[e]=a.x?a[e]:Vi(i,e),e===Fn&&(this.tfm.zOrigin=a.zOrigin);else return Ri.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Lt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Fn,t,"")),e=Lt}(s||t)&&this.props.push(e,t,s[e])},sp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},L_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Qu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ju(),(!s||!s.isStart)&&!n[Lt]&&(sp(n),i.zOrigin&&n[Fn]&&(n[Fn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},ap=function(e,t){var n={target:e,props:[],revert:L_,save:D_};return e._gsap||zn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},op,Nc=function(e,t){var n=fr.createElementNS?fr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):fr.createElement(e);return n&&n.style?n:fr.createElement(e)},pi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Qu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,$s(t)||t,1)||""},Ld="O,Moz,ms,Ms,Webkit".split(","),$s=function(e,t,n){var i=t||Vr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Ld[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Ld[a]:"")+e},Fc=function(){x_()&&window.document&&(Rd=window,fr=Rd.document,Us=fr.documentElement,Vr=Nc("div")||{style:{}},Nc("div"),Lt=$s(Lt),Fn=Lt+"Origin",Vr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",op=!!$s("perspective"),Ju=zn.core.reverting,Zu=1)},Id=function(e){var t=e.ownerSVGElement,n=Nc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Us.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Us.removeChild(n),s},Ud=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},lp=function(e){var t,n;try{t=e.getBBox()}catch{t=Id(e),n=1}return t&&(t.width||t.height)||n||(t=Id(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ud(e,["x","cx","x1"])||0,y:+Ud(e,["y","cy","y1"])||0,width:0,height:0}:t},cp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&lp(e))},ts=function(e,t){if(t){var n=e.style,i;t in Qi&&t!==Fn&&(t=Lt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Qu,"-$1").toLowerCase())):n.removeAttribute(t)}},pr=function(e,t,n,i,s,a){var o=new Nn(e._pt,t,n,0,1,a?rp:ip);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Nd={deg:1,rad:1,turn:1},I_={grid:1,flex:1},Er=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Vr.style,l=S_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",g,_,m,p;if(i===a||!s||Nd[i]||Nd[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&cp(e),(f||a==="%")&&(Qi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Ot(f?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(d?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===fr||!_.appendChild)&&(_=fr.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Kn.time&&!m.uncache)return Ot(s/m.width*h);if(f&&(t==="height"||t==="width")){var E=e.style[t];e.style[t]=h+i,g=e[u],E?e.style[t]=E:ts(e,t)}else(f||a==="%")&&!I_[pi(_,"display")]&&(o.position=pi(e,"position")),_===e&&(o.position="static"),_.appendChild(Vr),g=Vr[u],_.removeChild(Vr),o.position="absolute";return l&&f&&(m=Yr(_),m.time=Kn.time,m.width=_[u]),Ot(d?g*s/h:g&&s?h/g*s:0)},Vi=function(e,t,n,i){var s;return Zu||Fc(),t in Ri&&t!=="transform"&&(t=Ri[t],~t.indexOf(",")&&(t=t.split(",")[0])),Qi[t]&&t!=="transform"?(s=Ha(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:cl(pi(e,Fn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ll[t]&&ll[t](e,t,n)||pi(e,t)||bf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Er(e,t,s,n)+n:s},U_=function(e,t,n,i){if(!n||n==="none"){var s=$s(t,e,1),a=s&&pi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=pi(e,"borderTopColor"))}var o=new Nn(this._pt,e.style,t,0,1,ep),l=0,c=0,u,h,d,f,g,_,m,p,E,T,x,w;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=pi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=pi(e,t)||i,_?e.style[t]=_:ts(e,t)),u=[n,i],Wf(u),n=u[0],i=u[1],d=n.match(Cs)||[],w=i.match(Cs)||[],w.length){for(;h=Cs.exec(i);)m=h[0],E=i.substring(l,h.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),m.charAt(1)==="="&&(m=Is(f,m)+x),p=parseFloat(m),T=m.substr((p+"").length),l=Cs.lastIndex-T.length,T||(T=T||ei.units[t]||x,l===i.length&&(i+=T,o.e+=T)),x!==T&&(f=Er(e,t,_,T)||0),o._pt={_next:o._pt,p:E||c===1?E:",",s:f,c:p-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?rp:ip;return xf.test(i)&&(o.e=0),this._pt=o,o},Fd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},N_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Fd[n]||n,t[1]=Fd[i]||i,t.join(" ")},F_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Qi[o]&&(l=1,o=o==="transformOrigin"?Fn:Lt),ts(n,o);l&&(ts(n,Lt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ha(n,1),a.uncache=1,sp(i)))}},ll={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Nn(e._pt,t,n,0,0,F_);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},za=[1,0,0,1,0,0],up={},dp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Od=function(e){var t=pi(e,Lt);return dp(t)?za:t.substr(7).match(vf).map(Ot)},ed=function(e,t){var n=e._gsap||Yr(e),i=e.style,s=Od(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?za:s):(s===za&&!e.offsetParent&&e!==Us&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Us.appendChild(e)),s=Od(e),l?i.display=l:ts(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Us.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Oc=function(e,t,n,i,s,a){var o=e._gsap,l=s||ed(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],E=l[5],T=t.split(" "),x=parseFloat(T[0])||0,w=parseFloat(T[1])||0,A,b,P,S;n?l!==za&&(b=f*m-g*_)&&(P=x*(m/b)+w*(-_/b)+(_*E-m*p)/b,S=x*(-g/b)+w*(f/b)-(f*E-g*p)/b,x=P,w=S):(A=lp(e),x=A.x+(~T[0].indexOf("%")?x/100*A.width:x),w=A.y+(~(T[1]||T[0]).indexOf("%")?w/100*A.height:w)),i||i!==!1&&o.smooth?(p=x-c,E=w-u,o.xOffset=h+(p*f+E*_)-p,o.yOffset=d+(p*g+E*m)-E):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=w,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Fn]="0px 0px",a&&(pr(a,o,"xOrigin",c,x),pr(a,o,"yOrigin",u,w),pr(a,o,"xOffset",h,o.xOffset),pr(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+w)},Ha=function(e,t){var n=e._gsap||new $f(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=pi(e,Fn)||"0",u,h,d,f,g,_,m,p,E,T,x,w,A,b,P,S,v,D,N,U,B,X,W,H,z,q,R,ne,Re,fe,$,ie;return u=h=d=_=m=p=E=T=x=0,f=g=1,n.svg=!!(e.getCTM&&cp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Lt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Lt]!=="none"?l[Lt]:"")),i.scale=i.rotate=i.translate="none"),b=ed(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),Oc(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,b)),w=n.xOrigin||0,A=n.yOrigin||0,b!==za&&(D=b[0],N=b[1],U=b[2],B=b[3],u=X=b[4],h=W=b[5],b.length===6?(f=Math.sqrt(D*D+N*N),g=Math.sqrt(B*B+U*U),_=D||N?cs(N,D)*Fr:0,E=U||B?cs(U,B)*Fr+_:0,E&&(g*=Math.abs(Math.cos(E*Ns))),n.svg&&(u-=w-(w*D+A*U),h-=A-(w*N+A*B))):(ie=b[6],fe=b[7],R=b[8],ne=b[9],Re=b[10],$=b[11],u=b[12],h=b[13],d=b[14],P=cs(ie,Re),m=P*Fr,P&&(S=Math.cos(-P),v=Math.sin(-P),H=X*S+R*v,z=W*S+ne*v,q=ie*S+Re*v,R=X*-v+R*S,ne=W*-v+ne*S,Re=ie*-v+Re*S,$=fe*-v+$*S,X=H,W=z,ie=q),P=cs(-U,Re),p=P*Fr,P&&(S=Math.cos(-P),v=Math.sin(-P),H=D*S-R*v,z=N*S-ne*v,q=U*S-Re*v,$=B*v+$*S,D=H,N=z,U=q),P=cs(N,D),_=P*Fr,P&&(S=Math.cos(P),v=Math.sin(P),H=D*S+N*v,z=X*S+W*v,N=N*S-D*v,W=W*S-X*v,D=H,X=z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Ot(Math.sqrt(D*D+N*N+U*U)),g=Ot(Math.sqrt(W*W+ie*ie)),P=cs(X,W),E=Math.abs(P)>2e-4?P*Fr:0,x=$?1/($<0?-$:$):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!dp(pi(e,Lt)),H&&e.setAttribute("transform",H))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(f*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Ot(f),n.scaleY=Ot(g),n.rotation=Ot(_)+o,n.rotationX=Ot(m)+o,n.rotationY=Ot(p)+o,n.skewX=E+o,n.skewY=T+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Fn]=cl(c)),n.xOffset=n.yOffset=0,n.force3D=ei.force3D,n.renderTransform=n.svg?B_:op?hp:O_,n.uncache=0,n},cl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ol=function(e,t,n){var i=hn(t);return Ot(parseFloat(t)+parseFloat(Er(e,"x",n+"px",i)))+i},O_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,hp(e,t)},Cr="0deg",sa="0px",Rr=") ",hp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,E=n.target,T=n.zOrigin,x="",w=p==="auto"&&e&&e!==1||p===!0;if(T&&(h!==Cr||u!==Cr)){var A=parseFloat(u)*Ns,b=Math.sin(A),P=Math.cos(A),S;A=parseFloat(h)*Ns,S=Math.cos(A),a=Ol(E,a,b*S*-T),o=Ol(E,o,-Math.sin(A)*-T),l=Ol(E,l,P*S*-T+T)}m!==sa&&(x+="perspective("+m+Rr),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(w||a!==sa||o!==sa||l!==sa)&&(x+=l!==sa||w?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Rr),c!==Cr&&(x+="rotate("+c+Rr),u!==Cr&&(x+="rotateY("+u+Rr),h!==Cr&&(x+="rotateX("+h+Rr),(d!==Cr||f!==Cr)&&(x+="skew("+d+", "+f+Rr),(g!==1||_!==1)&&(x+="scale("+g+", "+_+Rr),E.style[Lt]=x||"translate(0, 0)"},B_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,E=n.forceCSS,T=parseFloat(a),x=parseFloat(o),w,A,b,P,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ns,c*=Ns,w=Math.cos(l)*h,A=Math.sin(l)*h,b=Math.sin(l-c)*-d,P=Math.cos(l-c)*d,c&&(u*=Ns,S=Math.tan(c-u),S=Math.sqrt(1+S*S),b*=S,P*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),w*=S,A*=S)),w=Ot(w),A=Ot(A),b=Ot(b),P=Ot(P)):(w=h,P=d,A=b=0),(T&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(T=Er(f,"x",a,"px"),x=Er(f,"y",o,"px")),(g||_||m||p)&&(T=Ot(T+g-(g*w+_*b)+m),x=Ot(x+_-(g*A+_*P)+p)),(i||s)&&(S=f.getBBox(),T=Ot(T+i/100*S.width),x=Ot(x+s/100*S.height)),S="matrix("+w+","+A+","+b+","+P+","+T+","+x+")",f.setAttribute("transform",S),E&&(f.style[Lt]=S)},k_=function(e,t,n,i,s){var a=360,o=rn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Fr:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Dd)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Dd)%a-~~(c/a)*a)),e._pt=d=new Nn(e._pt,t,n,i,c,M_),d.e=u,d.u="deg",e._props.push(n),d},Bd=function(e,t){for(var n in t)e[n]=t[n];return e},z_=function(e,t,n){var i=Bd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Lt]=t,o=Ha(n,1),ts(n,Lt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Lt],a[Lt]=t,o=Ha(n,1),a[Lt]=c);for(l in Qi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=hn(c),g=hn(u),h=f!==g?Er(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new Nn(e._pt,o,l,h,d-h,Uc),e._pt.u=g||0,e._props.push(l));Bd(o,i)};Un("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});ll[e>1?"border"+r:r]=function(o,l,c,u,h){var d,f;if(arguments.length<4)return d=a.map(function(g){return Vi(o,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,f,h)}});var fp={name:"css",register:Fc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,f,g,_,m,p,E,T,x,w,A,b,P;Zu||Fc(),this.styles=this.styles||ap(e),P=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!($n[_]&&jf(_,t,n,i,e,s)))){if(f=typeof u,g=ll[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Oa(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",vr.lastIndex=0,vr.test(c)||(m=hn(c),p=hn(u)),p?m!==p&&(c=Er(e,_,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),P.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],rn(c)&&~c.indexOf("random(")&&(c=Oa(c)),hn(c+"")||c==="auto"||(c+=ei.units[_]||hn(Vi(e,_))||""),(c+"").charAt(1)==="="&&(c=Vi(e,_))):c=Vi(e,_),d=parseFloat(c),E=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),h=parseFloat(u),_ in Ri&&(_==="autoAlpha"&&(d===1&&Vi(e,"visibility")==="hidden"&&h&&(d=0),P.push("visibility",0,o.visibility),pr(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Ri[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in Qi,T){if(this.styles.save(_),f==="string"&&u.substring(0,6)==="var(--"&&(u=pi(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),x||(w=e._gsap,w.renderTransform&&!t.parseTransform||Ha(e,t.parseTransform),A=t.smoothOrigin!==!1&&w.smooth,x=this._pt=new Nn(this._pt,o,Lt,0,1,w.renderTransform,w,0,-1),x.dep=1),_==="scale")this._pt=new Nn(this._pt,w,"scaleY",w.scaleY,(E?Is(w.scaleY,E+h):h)-w.scaleY||0,Uc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(Fn,0,o[Fn]),u=N_(u),w.svg?Oc(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&pr(this,w,"zOrigin",w.zOrigin,p),pr(this,o,_,cl(c),cl(u)));continue}else if(_==="svgOrigin"){Oc(e,u,1,A,0,this);continue}else if(_ in up){k_(this,w,_,d,E?Is(d,E+u):u);continue}else if(_==="smoothOrigin"){pr(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){z_(this,u,e);continue}}else _ in o||(_=$s(_)||_);if(T||(h||h===0)&&(d||d===0)&&!y_.test(u)&&_ in o)m=(c+"").substr((d+"").length),h||(h=0),p=hn(u)||(_ in ei.units?ei.units[_]:m),m!==p&&(d=Er(e,_,c,p)),this._pt=new Nn(this._pt,T?w:o,_,d,(E?Is(d,E+h):h)-d,!T&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?T_:Uc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=E_);else if(_ in o)U_.call(this,e,_,c,E?E+u:u);else if(_ in e)this.add(e,_,c||e[_],E?E+u:u,i,s);else if(_!=="parseTransform"){Hu(_,u);continue}T||(_ in o?P.push(_,0,o[_]):typeof e[_]=="function"?P.push(_,2,e[_]()):P.push(_,1,c||e[_])),a.push(_)}}b&&tp(this)},render:function(e,t){if(t.tween._time||!Ju())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Vi,aliases:Ri,getSetter:function(e,t,n){var i=Ri[t];return i&&i.indexOf(",")<0&&(t=i),t in Qi&&t!==Fn&&(e._gsap.x||Vi(e,"x"))?n&&Pd===n?t==="scale"?C_:A_:(Pd=n||{})&&(t==="scale"?R_:P_):e.style&&!Bu(e.style[t])?b_:~t.indexOf("-")?w_:ju(e,t)},core:{_removeProperty:ts,_getMatrix:ed}};zn.utils.checkPrefix=$s;zn.core.getStyleSaver=ap;(function(r,e,t,n){var i=Un(r+","+e+","+t,function(s){Qi[s]=1});Un(e,function(s){ei.units[s]="deg",up[s]=1}),Ri[i[13]]=r+","+e,Un(n,function(s){var a=s.split(":");Ri[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ei.units[r]="px"});zn.registerPlugin(fp);var ge=zn.registerPlugin(fp)||zn;ge.core.Tween;function H_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function G_(r,e,t){return e&&H_(r.prototype,e),r}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var an,Wo,Zn,mr,_r,Fs,pp,Or,Ta,mp,qi,Si,_p,gp=function(){return an||typeof window<"u"&&(an=window.gsap)&&an.registerPlugin&&an},vp=1,Ps=[],it=[],Ii=[],ba=Date.now,Bc=function(e,t){return t},V_=function(){var e=Ta.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,it),i.push.apply(i,Ii),it=n,Ii=i,Bc=function(a,o){return t[a](o)}},xr=function(e,t){return~Ii.indexOf(e)&&Ii[Ii.indexOf(e)+1][t]},wa=function(e){return!!~mp.indexOf(e)},xn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},vn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ro="scrollLeft",so="scrollTop",kc=function(){return qi&&qi.isPressed||it.cache++},ul=function(e,t){var n=function i(s){if(s||s===0){vp&&(Zn.history.scrollRestoration="manual");var a=qi&&qi.isPressed;s=i.v=Math.round(s)||(qi&&qi.iOS?1:0),e(s),i.cacheID=it.cache,a&&Bc("ss",s)}else(t||it.cache!==i.cacheID||Bc("ref"))&&(i.cacheID=it.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},bn={s:ro,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ul(function(r){return arguments.length?Zn.scrollTo(r,Kt.sc()):Zn.pageXOffset||mr[ro]||_r[ro]||Fs[ro]||0})},Kt={s:so,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:bn,sc:ul(function(r){return arguments.length?Zn.scrollTo(bn.sc(),r):Zn.pageYOffset||mr[so]||_r[so]||Fs[so]||0})},Dn=function(e,t){return(t&&t._ctx&&t._ctx.selector||an.utils.toArray)(e)[0]||(typeof e=="string"&&an.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},W_=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Tr=function(e,t){var n=t.s,i=t.sc;wa(e)&&(e=mr.scrollingElement||_r);var s=it.indexOf(e),a=i===Kt.sc?1:2;!~s&&(s=it.push(e)-1),it[s+a]||xn(e,"scroll",kc);var o=it[s+a],l=o||(it[s+a]=ul(xr(e,n),!0)||(wa(e)?i:ul(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=an.getProperty(e,"scrollBehavior")==="smooth"),l},zc=function(e,t,n){var i=e,s=e,a=ba(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=ba();_||m-a>l?(s=i,i=g,o=a,a=m):n?i+=g:i=s+(g-s)/(m-o)*(a-o)},h=function(){s=i=n?0:i,o=a=0},d=function(g){var _=o,m=s,p=ba();return(g||g===0)&&g!==i&&u(g),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-_)*1e3};return{update:u,reset:h,getVelocity:d}},aa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},kd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},xp=function(){Ta=an.core.globals().ScrollTrigger,Ta&&Ta.core&&V_()},Sp=function(e){return an=e||gp(),!Wo&&an&&typeof document<"u"&&document.body&&(Zn=window,mr=document,_r=mr.documentElement,Fs=mr.body,mp=[Zn,mr,_r,Fs],an.utils.clamp,_p=an.core.context||function(){},Or="onpointerenter"in Fs?"pointer":"mouse",pp=kt.isTouch=Zn.matchMedia&&Zn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Zn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Si=kt.eventTypes=("ontouchstart"in _r?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in _r?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return vp=0},500),xp(),Wo=1),Wo};bn.op=Kt;it.cache=0;var kt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Wo||Sp(an)||console.warn("Please gsap.registerPlugin(Observer)"),Ta||xp();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,E=n.onDrag,T=n.onPress,x=n.onRelease,w=n.onRight,A=n.onLeft,b=n.onUp,P=n.onDown,S=n.onChangeX,v=n.onChangeY,D=n.onChange,N=n.onToggleX,U=n.onToggleY,B=n.onHover,X=n.onHoverEnd,W=n.onMove,H=n.ignoreCheck,z=n.isNormalizer,q=n.onGestureStart,R=n.onGestureEnd,ne=n.onWheel,Re=n.onEnable,fe=n.onDisable,$=n.onClick,ie=n.scrollSpeed,ce=n.capture,se=n.allowClicks,Ee=n.lockAxis,Ve=n.onLockAxis;this.target=o=Dn(o)||_r,this.vars=n,f&&(f=an.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,ie=ie||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Zn.getComputedStyle(Fs).lineHeight)||22);var Ne,rt,et,ye,L,yt,Xe,k=this,Te=0,st=0,we=n.passive||!u&&n.passive!==!1,C=Tr(o,bn),y=Tr(o,Kt),G=C(),J=y(),ee=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Si[0]==="pointerdown",Z=wa(o),ue=o.ownerDocument||mr,oe=[0,0,0],Ae=[0,0,0],De=0,re=function(){return De=ba()},ae=function(Ce,Ke){return(k.event=Ce)&&f&&W_(Ce.target,f)||Ke&&ee&&Ce.pointerType!=="touch"||H&&H(Ce,Ke)},Oe=function(){k._vx.reset(),k._vy.reset(),rt.pause(),h&&h(k)},Fe=function(){var Ce=k.deltaX=kd(oe),Ke=k.deltaY=kd(Ae),pe=Math.abs(Ce)>=i,Ye=Math.abs(Ke)>=i;D&&(pe||Ye)&&D(k,Ce,Ke,oe,Ae),pe&&(w&&k.deltaX>0&&w(k),A&&k.deltaX<0&&A(k),S&&S(k),N&&k.deltaX<0!=Te<0&&N(k),Te=k.deltaX,oe[0]=oe[1]=oe[2]=0),Ye&&(P&&k.deltaY>0&&P(k),b&&k.deltaY<0&&b(k),v&&v(k),U&&k.deltaY<0!=st<0&&U(k),st=k.deltaY,Ae[0]=Ae[1]=Ae[2]=0),(ye||et)&&(W&&W(k),et&&(m&&et===1&&m(k),E&&E(k),et=0),ye=!1),yt&&!(yt=!1)&&Ve&&Ve(k),L&&(ne(k),L=!1),Ne=0},xe=function(Ce,Ke,pe){oe[pe]+=Ce,Ae[pe]+=Ke,k._vx.update(Ce),k._vy.update(Ke),c?Ne||(Ne=requestAnimationFrame(Fe)):Fe()},je=function(Ce,Ke){Ee&&!Xe&&(k.axis=Xe=Math.abs(Ce)>Math.abs(Ke)?"x":"y",yt=!0),Xe!=="y"&&(oe[2]+=Ce,k._vx.update(Ce,!0)),Xe!=="x"&&(Ae[2]+=Ke,k._vy.update(Ke,!0)),c?Ne||(Ne=requestAnimationFrame(Fe)):Fe()},Ge=function(Ce){if(!ae(Ce,1)){Ce=aa(Ce,u);var Ke=Ce.clientX,pe=Ce.clientY,Ye=Ke-k.x,Pe=pe-k.y,qe=k.isDragging;k.x=Ke,k.y=pe,(qe||(Ye||Pe)&&(Math.abs(k.startX-Ke)>=s||Math.abs(k.startY-pe)>=s))&&(et=qe?2:1,qe||(k.isDragging=!0),je(Ye,Pe))}},lt=k.onPress=function(ve){ae(ve,1)||ve&&ve.button||(k.axis=Xe=null,rt.pause(),k.isPressed=!0,ve=aa(ve),Te=st=0,k.startX=k.x=ve.clientX,k.startY=k.y=ve.clientY,k._vx.reset(),k._vy.reset(),xn(z?o:ue,Si[1],Ge,we,!0),k.deltaX=k.deltaY=0,T&&T(k))},I=k.onRelease=function(ve){if(!ae(ve,1)){vn(z?o:ue,Si[1],Ge,!0);var Ce=!isNaN(k.y-k.startY),Ke=k.isDragging,pe=Ke&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),Ye=aa(ve);!pe&&Ce&&(k._vx.reset(),k._vy.reset(),u&&se&&an.delayedCall(.08,function(){if(ba()-De>300&&!ve.defaultPrevented){if(ve.target.click)ve.target.click();else if(ue.createEvent){var Pe=ue.createEvent("MouseEvents");Pe.initMouseEvent("click",!0,!0,Zn,1,Ye.screenX,Ye.screenY,Ye.clientX,Ye.clientY,!1,!1,!1,!1,0,null),ve.target.dispatchEvent(Pe)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,h&&Ke&&!z&&rt.restart(!0),et&&Fe(),p&&Ke&&p(k),x&&x(k,pe)}},de=function(Ce){return Ce.touches&&Ce.touches.length>1&&(k.isGesturing=!0)&&q(Ce,k.isDragging)},K=function(){return(k.isGesturing=!1)||R(k)},Q=function(Ce){if(!ae(Ce)){var Ke=C(),pe=y();xe((Ke-G)*ie,(pe-J)*ie,1),G=Ke,J=pe,h&&rt.restart(!0)}},le=function(Ce){if(!ae(Ce)){Ce=aa(Ce,u),ne&&(L=!0);var Ke=(Ce.deltaMode===1?l:Ce.deltaMode===2?Zn.innerHeight:1)*g;xe(Ce.deltaX*Ke,Ce.deltaY*Ke,0),h&&!z&&rt.restart(!0)}},he=function(Ce){if(!ae(Ce)){var Ke=Ce.clientX,pe=Ce.clientY,Ye=Ke-k.x,Pe=pe-k.y;k.x=Ke,k.y=pe,ye=!0,h&&rt.restart(!0),(Ye||Pe)&&je(Ye,Pe)}},We=function(Ce){k.event=Ce,B(k)},dt=function(Ce){k.event=Ce,X(k)},It=function(Ce){return ae(Ce)||aa(Ce,u)&&$(k)};rt=k._dc=an.delayedCall(d||.25,Oe).pause(),k.deltaX=k.deltaY=0,k._vx=zc(0,50,!0),k._vy=zc(0,50,!0),k.scrollX=C,k.scrollY=y,k.isDragging=k.isGesturing=k.isPressed=!1,_p(this),k.enable=function(ve){return k.isEnabled||(xn(Z?ue:o,"scroll",kc),a.indexOf("scroll")>=0&&xn(Z?ue:o,"scroll",Q,we,ce),a.indexOf("wheel")>=0&&xn(o,"wheel",le,we,ce),(a.indexOf("touch")>=0&&pp||a.indexOf("pointer")>=0)&&(xn(o,Si[0],lt,we,ce),xn(ue,Si[2],I),xn(ue,Si[3],I),se&&xn(o,"click",re,!0,!0),$&&xn(o,"click",It),q&&xn(ue,"gesturestart",de),R&&xn(ue,"gestureend",K),B&&xn(o,Or+"enter",We),X&&xn(o,Or+"leave",dt),W&&xn(o,Or+"move",he)),k.isEnabled=!0,k.isDragging=k.isGesturing=k.isPressed=ye=et=!1,k._vx.reset(),k._vy.reset(),G=C(),J=y(),ve&&ve.type&&lt(ve),Re&&Re(k)),k},k.disable=function(){k.isEnabled&&(Ps.filter(function(ve){return ve!==k&&wa(ve.target)}).length||vn(Z?ue:o,"scroll",kc),k.isPressed&&(k._vx.reset(),k._vy.reset(),vn(z?o:ue,Si[1],Ge,!0)),vn(Z?ue:o,"scroll",Q,ce),vn(o,"wheel",le,ce),vn(o,Si[0],lt,ce),vn(ue,Si[2],I),vn(ue,Si[3],I),vn(o,"click",re,!0),vn(o,"click",It),vn(ue,"gesturestart",de),vn(ue,"gestureend",K),vn(o,Or+"enter",We),vn(o,Or+"leave",dt),vn(o,Or+"move",he),k.isEnabled=k.isPressed=k.isDragging=!1,fe&&fe(k))},k.kill=k.revert=function(){k.disable();var ve=Ps.indexOf(k);ve>=0&&Ps.splice(ve,1),qi===k&&(qi=0)},Ps.push(k),z&&wa(o)&&(qi=k),k.enable(_)},G_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();kt.version="3.13.0";kt.create=function(r){return new kt(r)};kt.register=Sp;kt.getAll=function(){return Ps.slice()};kt.getById=function(r){return Ps.filter(function(e){return e.vars.id===r})[0]};gp()&&an.registerPlugin(kt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var be,ws,nt,At,jn,vt,td,dl,Ga,Aa,ma,ao,un,El,Hc,Mn,zd,Hd,As,yp,Bl,Mp,yn,Gc,Ep,Tp,cr,Vc,nd,Os,id,hl,Wc,kl,oo=1,dn=Date.now,zl=dn(),mi=0,_a=0,Gd=function(e,t,n){var i=Yn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Vd=function(e,t){return t&&(!Yn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},X_=function r(){return _a&&requestAnimationFrame(r)},Wd=function(){return El=1},Xd=function(){return El=0},wi=function(e){return e},ga=function(e){return Math.round(e*1e5)/1e5||0},bp=function(){return typeof window<"u"},wp=function(){return be||bp()&&(be=window.gsap)&&be.registerPlugin&&be},ns=function(e){return!!~td.indexOf(e)},Ap=function(e){return(e==="Height"?id:nt["inner"+e])||jn["client"+e]||vt["client"+e]},Cp=function(e){return xr(e,"getBoundingClientRect")||(ns(e)?function(){return jo.width=nt.innerWidth,jo.height=id,jo}:function(){return Wi(e)})},q_=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=xr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Ap(s):e["client"+s])||0}},Y_=function(e,t){return!t||~Ii.indexOf(e)?Cp(e):function(){return jo}},Pi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=xr(e,n))?a()-Cp(e)()[s]:ns(e)?(jn[n]||vt[n])-Ap(i):e[n]-e["offset"+i])},lo=function(e,t){for(var n=0;n<As.length;n+=3)(!t||~t.indexOf(As[n+1]))&&e(As[n],As[n+1],As[n+2])},Yn=function(e){return typeof e=="string"},fn=function(e){return typeof e=="function"},va=function(e){return typeof e=="number"},Br=function(e){return typeof e=="object"},oa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Hl=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},us=Math.abs,Rp="left",Pp="top",rd="right",sd="bottom",Zr="width",Jr="height",Ca="Right",Ra="Left",Pa="Top",Da="Bottom",Vt="padding",ci="margin",js="Width",ad="Height",jt="px",ui=function(e){return nt.getComputedStyle(e)},$_=function(e){var t=ui(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},qd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Wi=function(e,t){var n=t&&ui(e)[Hc]!=="matrix(1, 0, 0, 1, 0, 0)"&&be.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},fl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Dp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},j_=function(e){return function(t){return be.utils.snap(Dp(e),t)}},od=function(e){var t=be.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},K_=function(e){return function(t,n){return od(Dp(e))(t,n.direction)}},co=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},tn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},en=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},uo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Yd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ho={toggleActions:"play",anticipatePin:0},pl={top:0,left:0,center:.5,bottom:1,right:1},Xo=function(e,t){if(Yn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in pl?pl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},fo=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,g=At.createElement("div"),_=ns(n)||xr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?vt:n,E=e.indexOf("start")!==-1,T=E?c:u,x="border-color:"+T+";font-size:"+h+";color:"+T+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(x+=(i===Kt?rd:sd)+":"+(a+parseFloat(d))+"px;"),o&&(x+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=E,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=x,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],qo(g,0,i,E),g},qo=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+js]=1,s["border"+o+js]=0,s[n.p]=t+"px",be.set(e,s)},Qe=[],Xc={},Va,$d=function(){return dn()-mi>34&&(Va||(Va=requestAnimationFrame(Ki)))},ds=function(){(!yn||!yn.isPressed||yn.startX>vt.clientWidth)&&(it.cache++,yn?Va||(Va=requestAnimationFrame(Ki)):Ki(),mi||rs("scrollStart"),mi=dn())},Gl=function(){Tp=nt.innerWidth,Ep=nt.innerHeight},xa=function(e){it.cache++,(e===!0||!un&&!Mp&&!At.fullscreenElement&&!At.webkitFullscreenElement&&(!Gc||Tp!==nt.innerWidth||Math.abs(nt.innerHeight-Ep)>nt.innerHeight*.25))&&dl.restart(!0)},is={},Z_=[],Lp=function r(){return en(ke,"scrollEnd",r)||Wr(!0)},rs=function(e){return is[e]&&is[e].map(function(t){return t()})||Z_},qn=[],Ip=function(e){for(var t=0;t<qn.length;t+=5)(!e||qn[t+4]&&qn[t+4].query===e)&&(qn[t].style.cssText=qn[t+1],qn[t].getBBox&&qn[t].setAttribute("transform",qn[t+2]||""),qn[t+3].uncache=1)},ld=function(e,t){var n;for(Mn=0;Mn<Qe.length;Mn++)n=Qe[Mn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));hl=!0,t&&Ip(t),t||rs("revert")},Up=function(e,t){it.cache++,(t||!En)&&it.forEach(function(n){return fn(n)&&n.cacheID++&&(n.rec=0)}),Yn(e)&&(nt.history.scrollRestoration=nd=e)},En,Qr=0,jd,J_=function(){if(jd!==Qr){var e=jd=Qr;requestAnimationFrame(function(){return e===Qr&&Wr(!0)})}},Np=function(){vt.appendChild(Os),id=!yn&&Os.offsetHeight||nt.innerHeight,vt.removeChild(Os)},Kd=function(e){return Ga(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Wr=function(e,t){if(jn=At.documentElement,vt=At.body,td=[nt,At,jn,vt],mi&&!e&&!hl){tn(ke,"scrollEnd",Lp);return}Np(),En=ke.isRefreshing=!0,it.forEach(function(i){return fn(i)&&++i.cacheID&&(i.rec=i())});var n=rs("refreshInit");yp&&ke.sort(),t||ld(),it.forEach(function(i){fn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Qe.slice(0).forEach(function(i){return i.refresh()}),hl=!1,Qe.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Wc=1,Kd(!0),Qe.forEach(function(i){var s=Pi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Kd(!1),Wc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),it.forEach(function(i){fn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Up(nd,1),dl.pause(),Qr++,En=2,Ki(2),Qe.forEach(function(i){return fn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),En=ke.isRefreshing=!1,rs("refresh")},qc=0,Yo=1,La,Ki=function(e){if(e===2||!En&&!hl){ke.isUpdating=!0,La&&La.update(0);var t=Qe.length,n=dn(),i=n-zl>=50,s=t&&Qe[0].scroll();if(Yo=qc>s?-1:1,En||(qc=s),i&&(mi&&!El&&n-mi>200&&(mi=0,rs("scrollEnd")),ma=zl,zl=n),Yo<0){for(Mn=t;Mn-- >0;)Qe[Mn]&&Qe[Mn].update(0,i);Yo=1}else for(Mn=0;Mn<t;Mn++)Qe[Mn]&&Qe[Mn].update(0,i);ke.isUpdating=!1}Va=0},Yc=[Rp,Pp,sd,rd,ci+Da,ci+Ca,ci+Pa,ci+Ra,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],$o=Yc.concat([Zr,Jr,"boxSizing","max"+js,"max"+ad,"position",ci,Vt,Vt+Pa,Vt+Ca,Vt+Da,Vt+Ra]),Q_=function(e,t,n){Bs(n);var i=e._gsap;if(i.spacerIsNative)Bs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Vl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Yc.length,a=t.style,o=e.style,l;s--;)l=Yc[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[sd]=o[rd]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Zr]=fl(e,bn)+jt,a[Jr]=fl(e,Kt)+jt,a[Vt]=o[ci]=o[Pp]=o[Rp]="0",Bs(i),o[Zr]=o["max"+js]=n[Zr],o[Jr]=o["max"+ad]=n[Jr],o[Vt]=n[Vt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},eg=/([A-Z])/g,Bs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||be.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(eg,"-$1").toLowerCase())}},po=function(e){for(var t=$o.length,n=e.style,i=[],s=0;s<t;s++)i.push($o[s],n[$o[s]]);return i.t=e,i},tg=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},jo={left:0,top:0},Zd=function(e,t,n,i,s,a,o,l,c,u,h,d,f,g){fn(e)&&(e=e(l)),Yn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Xo("0"+e.substr(3),n):0));var _=f?f.time():0,m,p,E;if(f&&f.seek(0),isNaN(e)||(e=+e),va(e))f&&(e=be.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),o&&qo(o,n,i,!0);else{fn(t)&&(t=t(l));var T=(e||"0").split(" "),x,w,A,b;E=Dn(t,l)||vt,x=Wi(E)||{},(!x||!x.left&&!x.top)&&ui(E).display==="none"&&(b=E.style.display,E.style.display="block",x=Wi(E),b?E.style.display=b:E.style.removeProperty("display")),w=Xo(T[0],x[i.d]),A=Xo(T[1]||"0",n),e=x[i.p]-c[i.p]-u+w+s-A,o&&qo(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var P=e+n,S=a._isStart;m="scroll"+i.d2,qo(a,P,i,S&&P>20||!S&&(h?Math.max(vt[m],jn[m]):a.parentNode[m])<=P+1),h&&(c=Wi(o),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+jt))}return f&&E&&(m=Wi(E),f.seek(d),p=Wi(E),f._caScrollDist=m[i.p]-p[i.p],e=e/f._caScrollDist*d),f&&f.seek(_),f?e:Math.round(e)},ng=/(webkit|moz|length|cssText|inset)/i,Jd=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===vt){e._stOrig=s.cssText,o=ui(e);for(a in o)!+a&&!ng.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;be.core.getCache(e).uncache=1,t.appendChild(e)}},Fp=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},mo=function(e,t,n){var i={};i[t.p]="+="+n,be.set(e,i)},Qd=function(e,t){var n=Tr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,h){var d=a.tween,f=l.onComplete,g={};c=c||n();var _=Fp(n,c,function(){d.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,d&&d.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){it.cache++,a.tween&&Ki()},l.onComplete=function(){a.tween=0,f&&f.call(d)},d=a.tween=be.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},tn(e,"wheel",n.wheelHandler),ke.isTouch&&tn(e,"touchmove",n.wheelHandler),s},ke=(function(){function r(t,n){ws||r.register(be)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Vc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!_a){this.update=this.refresh=this.kill=wi;return}n=qd(Yn(n)||va(n)||n.nodeType?{trigger:n}:n,ho);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,E=s.onSnapComplete,T=s.once,x=s.snap,w=s.pinReparent,A=s.pinSpacer,b=s.containerAnimation,P=s.fastScrollEnd,S=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?bn:Kt,D=!h&&h!==0,N=Dn(n.scroller||nt),U=be.core.getCache(N),B=ns(N),X=("pinType"in n?n.pinType:xr(N,"pinType")||B&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],H=D&&n.toggleActions.split(" "),z="markers"in n?n.markers:ho.markers,q=B?0:parseFloat(ui(N)["border"+v.p2+js])||0,R=this,ne=n.onRefreshInit&&function(){return n.onRefreshInit(R)},Re=q_(N,B,v),fe=Y_(N,B),$=0,ie=0,ce=0,se=Tr(N,v),Ee,Ve,Ne,rt,et,ye,L,yt,Xe,k,Te,st,we,C,y,G,J,ee,Z,ue,oe,Ae,De,re,ae,Oe,Fe,xe,je,Ge,lt,I,de,K,Q,le,he,We,dt;if(R._startClamp=R._endClamp=!1,R._dir=v,m*=45,R.scroller=N,R.scroll=b?b.time.bind(b):se,rt=se(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(yp=1,n.refreshPriority===-9999&&(La=R)),U.tweenScroll=U.tweenScroll||{top:Qd(N,Kt),left:Qd(N,bn)},R.tweenTo=Ee=U.tweenScroll[v.p],R.scrubDuration=function(pe){de=va(pe)&&pe,de?I?I.duration(pe):I=be.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:de,paused:!0,onComplete:function(){return p&&p(R)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(h),Ge=0,l||(l=i.vars.id)),x&&((!Br(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in vt.style&&be.set(B?[vt,jn]:N,{scrollBehavior:"auto"}),it.forEach(function(pe){return fn(pe)&&pe.target===(B?At.scrollingElement||jn:N)&&(pe.smooth=!1)}),Ne=fn(x.snapTo)?x.snapTo:x.snapTo==="labels"?j_(i):x.snapTo==="labelsDirectional"?K_(i):x.directional!==!1?function(pe,Ye){return od(x.snapTo)(pe,dn()-ie<500?0:Ye.direction)}:be.utils.snap(x.snapTo),K=x.duration||{min:.1,max:2},K=Br(K)?Aa(K.min,K.max):Aa(K,K),Q=be.delayedCall(x.delay||de/2||.1,function(){var pe=se(),Ye=dn()-ie<500,Pe=Ee.tween;if((Ye||Math.abs(R.getVelocity())<10)&&!Pe&&!El&&$!==pe){var qe=(pe-ye)/C,Ft=i&&!D?i.totalProgress():qe,tt=Ye?0:(Ft-lt)/(dn()-ma)*1e3||0,wt=be.utils.clamp(-qe,1-qe,us(tt/2)*tt/.185),qt=qe+(x.inertia===!1?0:wt),Mt,Et,mt=x,Gn=mt.onStart,Ct=mt.onInterrupt,_n=mt.onComplete;if(Mt=Ne(qt,R),va(Mt)||(Mt=qt),Et=Math.max(0,Math.round(ye+Mt*C)),pe<=L&&pe>=ye&&Et!==pe){if(Pe&&!Pe._initted&&Pe.data<=us(Et-pe))return;x.inertia===!1&&(wt=Mt-qe),Ee(Et,{duration:K(us(Math.max(us(qt-Ft),us(Mt-Ft))*.185/tt/.05||0)),ease:x.ease||"power3",data:us(Et-pe),onInterrupt:function(){return Q.restart(!0)&&Ct&&Ct(R)},onComplete:function(){R.update(),$=se(),i&&!D&&(I?I.resetTo("totalProgress",Mt,i._tTime/i._tDur):i.progress(Mt)),Ge=lt=i&&!D?i.totalProgress():R.progress,E&&E(R),_n&&_n(R)}},pe,wt*C,Et-pe-wt*C),Gn&&Gn(R,Ee.tween)}}else R.isActive&&$!==pe&&Q.restart(!0)}).pause()),l&&(Xc[l]=R),d=R.trigger=Dn(d||f!==!0&&f),dt=d&&d._gsap&&d._gsap.stRevert,dt&&(dt=dt(R)),f=f===!0?d:Dn(f),Yn(o)&&(o={targets:d,className:o}),f&&(g===!1||g===ci||(g=!g&&f.parentNode&&f.parentNode.style&&ui(f.parentNode).display==="flex"?!1:Vt),R.pin=f,Ve=be.core.getCache(f),Ve.spacer?y=Ve.pinState:(A&&(A=Dn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Ve.spacerIsNative=!!A,A&&(Ve.spacerState=po(A))),Ve.spacer=ee=A||At.createElement("div"),ee.classList.add("pin-spacer"),l&&ee.classList.add("pin-spacer-"+l),Ve.pinState=y=po(f)),n.force3D!==!1&&be.set(f,{force3D:!0}),R.spacer=ee=Ve.spacer,je=ui(f),re=je[g+v.os2],ue=be.getProperty(f),oe=be.quickSetter(f,v.a,jt),Vl(f,ee,je),J=po(f)),z){st=Br(z)?qd(z,Yd):Yd,k=fo("scroller-start",l,N,v,st,0),Te=fo("scroller-end",l,N,v,st,0,k),Z=k["offset"+v.op.d2];var It=Dn(xr(N,"content")||N);yt=this.markerStart=fo("start",l,It,v,st,Z,0,b),Xe=this.markerEnd=fo("end",l,It,v,st,Z,0,b),b&&(We=be.quickSetter([yt,Xe],v.a,jt)),!X&&!(Ii.length&&xr(N,"fixedMarkers")===!0)&&($_(B?vt:N),be.set([k,Te],{force3D:!0}),Oe=be.quickSetter(k,v.a,jt),xe=be.quickSetter(Te,v.a,jt))}if(b){var ve=b.vars.onUpdate,Ce=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){R.update(0,0,1),ve&&ve.apply(b,Ce||[])})}if(R.previous=function(){return Qe[Qe.indexOf(R)-1]},R.next=function(){return Qe[Qe.indexOf(R)+1]},R.revert=function(pe,Ye){if(!Ye)return R.kill(!0);var Pe=pe!==!1||!R.enabled,qe=un;Pe!==R.isReverted&&(Pe&&(le=Math.max(se(),R.scroll.rec||0),ce=R.progress,he=i&&i.progress()),yt&&[yt,Xe,k,Te].forEach(function(Ft){return Ft.style.display=Pe?"none":"block"}),Pe&&(un=R,R.update(Pe)),f&&(!w||!R.isActive)&&(Pe?Q_(f,ee,y):Vl(f,ee,ui(f),ae)),Pe||R.update(Pe),un=qe,R.isReverted=Pe)},R.refresh=function(pe,Ye,Pe,qe){if(!((un||!R.enabled)&&!Ye)){if(f&&pe&&mi){tn(r,"scrollEnd",Lp);return}!En&&ne&&ne(R),un=R,Ee.tween&&!Pe&&(Ee.tween.kill(),Ee.tween=0),I&&I.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function($e){return $e.vars.immediateRender&&$e.render(0,!0,!0)})),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ft=Re(),tt=fe(),wt=b?b.duration():Pi(N,v),qt=C<=.01||!C,Mt=0,Et=qe||0,mt=Br(Pe)?Pe.end:n.end,Gn=n.endTrigger||d,Ct=Br(Pe)?Pe.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),_n=R.pinnedContainer=n.pinnedContainer&&Dn(n.pinnedContainer,R),ii=d&&Math.max(0,Qe.indexOf(R))||0,Yt=ii,$t,M,O,Y,V,F,te,me,Me,Se,Ue,Be,Le;for(z&&Br(Pe)&&(Be=be.getProperty(k,v.p),Le=be.getProperty(Te,v.p));Yt-- >0;)F=Qe[Yt],F.end||F.refresh(0,1)||(un=R),te=F.pin,te&&(te===d||te===f||te===_n)&&!F.isReverted&&(Se||(Se=[]),Se.unshift(F),F.revert(!0,!0)),F!==Qe[Yt]&&(ii--,Yt--);for(fn(Ct)&&(Ct=Ct(R)),Ct=Gd(Ct,"start",R),ye=Zd(Ct,d,Ft,v,se(),yt,k,R,tt,q,X,wt,b,R._startClamp&&"_startClamp")||(f?-.001:0),fn(mt)&&(mt=mt(R)),Yn(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(Yn(Ct)?Ct.split(" ")[0]:"")+mt:(Mt=Xo(mt.substr(2),Ft),mt=Yn(Ct)?Ct:(b?be.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,ye):ye)+Mt,Gn=d)),mt=Gd(mt,"end",R),L=Math.max(ye,Zd(mt||(Gn?"100% 0":wt),Gn,Ft,v,se()+Mt,Xe,Te,R,tt,q,X,wt,b,R._endClamp&&"_endClamp"))||-.001,Mt=0,Yt=ii;Yt--;)F=Qe[Yt],te=F.pin,te&&F.start-F._pinPush<=ye&&!b&&F.end>0&&($t=F.end-(R._startClamp?Math.max(0,F.start):F.start),(te===d&&F.start-F._pinPush<ye||te===_n)&&isNaN(Ct)&&(Mt+=$t*(1-F.progress)),te===f&&(Et+=$t));if(ye+=Mt,L+=Mt,R._startClamp&&(R._startClamp+=Mt),R._endClamp&&!En&&(R._endClamp=L||-.001,L=Math.min(L,Pi(N,v))),C=L-ye||(ye-=.01)&&.001,qt&&(ce=be.utils.clamp(0,1,be.utils.normalize(ye,L,le))),R._pinPush=Et,yt&&Mt&&($t={},$t[v.a]="+="+Mt,_n&&($t[v.p]="-="+se()),be.set([yt,Xe],$t)),f&&!(Wc&&R.end>=Pi(N,v)))$t=ui(f),Y=v===Kt,O=se(),Ae=parseFloat(ue(v.a))+Et,!wt&&L>1&&(Ue=(B?At.scrollingElement||jn:N).style,Ue={style:Ue,value:Ue["overflow"+v.a.toUpperCase()]},B&&ui(vt)["overflow"+v.a.toUpperCase()]!=="scroll"&&(Ue.style["overflow"+v.a.toUpperCase()]="scroll")),Vl(f,ee,$t),J=po(f),M=Wi(f,!0),me=X&&Tr(N,Y?bn:Kt)(),g?(ae=[g+v.os2,C+Et+jt],ae.t=ee,Yt=g===Vt?fl(f,v)+C+Et:0,Yt&&(ae.push(v.d,Yt+jt),ee.style.flexBasis!=="auto"&&(ee.style.flexBasis=Yt+jt)),Bs(ae),_n&&Qe.forEach(function($e){$e.pin===_n&&$e.vars.pinSpacing!==!1&&($e._subPinOffset=!0)}),X&&se(le)):(Yt=fl(f,v),Yt&&ee.style.flexBasis!=="auto"&&(ee.style.flexBasis=Yt+jt)),X&&(V={top:M.top+(Y?O-ye:me)+jt,left:M.left+(Y?me:O-ye)+jt,boxSizing:"border-box",position:"fixed"},V[Zr]=V["max"+js]=Math.ceil(M.width)+jt,V[Jr]=V["max"+ad]=Math.ceil(M.height)+jt,V[ci]=V[ci+Pa]=V[ci+Ca]=V[ci+Da]=V[ci+Ra]="0",V[Vt]=$t[Vt],V[Vt+Pa]=$t[Vt+Pa],V[Vt+Ca]=$t[Vt+Ca],V[Vt+Da]=$t[Vt+Da],V[Vt+Ra]=$t[Vt+Ra],G=tg(y,V,w),En&&se(0)),i?(Me=i._initted,Bl(1),i.render(i.duration(),!0,!0),De=ue(v.a)-Ae+C+Et,Fe=Math.abs(C-De)>1,X&&Fe&&G.splice(G.length-2,2),i.render(0,!0,!0),Me||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Bl(0)):De=C,Ue&&(Ue.value?Ue.style["overflow"+v.a.toUpperCase()]=Ue.value:Ue.style.removeProperty("overflow-"+v.a));else if(d&&se()&&!b)for(M=d.parentNode;M&&M!==vt;)M._pinOffset&&(ye-=M._pinOffset,L-=M._pinOffset),M=M.parentNode;Se&&Se.forEach(function($e){return $e.revert(!1,!0)}),R.start=ye,R.end=L,rt=et=En?le:se(),!b&&!En&&(rt<le&&se(le),R.scroll.rec=0),R.revert(!1,!0),ie=dn(),Q&&($=-1,Q.restart(!0)),un=0,i&&D&&(i._initted||he)&&i.progress()!==he&&i.progress(he||0,!0).render(i.time(),!0,!0),(qt||ce!==R.progress||b||_||i&&!i._initted)&&(i&&!D&&(i._initted||ce||i.vars.immediateRender!==!1)&&i.totalProgress(b&&ye<-.001&&!ce?be.utils.normalize(ye,L,0):ce,!0),R.progress=qt||(rt-ye)/C===ce?0:ce),f&&g&&(ee._pinOffset=Math.round(R.progress*De)),I&&I.invalidate(),isNaN(Be)||(Be-=be.getProperty(k,v.p),Le-=be.getProperty(Te,v.p),mo(k,v,Be),mo(yt,v,Be-(qe||0)),mo(Te,v,Le),mo(Xe,v,Le-(qe||0))),qt&&!En&&R.update(),u&&!En&&!we&&(we=!0,u(R),we=!1)}},R.getVelocity=function(){return(se()-et)/(dn()-ma)*1e3||0},R.endAnimation=function(){oa(R.callbackAnimation),i&&(I?I.progress(1):i.paused()?D||oa(i,R.direction<0,1):oa(i,i.reversed()))},R.labelToScroll=function(pe){return i&&i.labels&&(ye||R.refresh()||ye)+i.labels[pe]/i.duration()*C||0},R.getTrailing=function(pe){var Ye=Qe.indexOf(R),Pe=R.direction>0?Qe.slice(0,Ye).reverse():Qe.slice(Ye+1);return(Yn(pe)?Pe.filter(function(qe){return qe.vars.preventOverlaps===pe}):Pe).filter(function(qe){return R.direction>0?qe.end<=ye:qe.start>=L})},R.update=function(pe,Ye,Pe){if(!(b&&!Pe&&!pe)){var qe=En===!0?le:R.scroll(),Ft=pe?0:(qe-ye)/C,tt=Ft<0?0:Ft>1?1:Ft||0,wt=R.progress,qt,Mt,Et,mt,Gn,Ct,_n,ii;if(Ye&&(et=rt,rt=b?se():qe,x&&(lt=Ge,Ge=i&&!D?i.totalProgress():tt)),m&&f&&!un&&!oo&&mi&&(!tt&&ye<qe+(qe-et)/(dn()-ma)*m?tt=1e-4:tt===1&&L>qe+(qe-et)/(dn()-ma)*m&&(tt=.9999)),tt!==wt&&R.enabled){if(qt=R.isActive=!!tt&&tt<1,Mt=!!wt&&wt<1,Ct=qt!==Mt,Gn=Ct||!!tt!=!!wt,R.direction=tt>wt?1:-1,R.progress=tt,Gn&&!un&&(Et=tt&&!wt?0:tt===1?1:wt===1?2:3,D&&(mt=!Ct&&H[Et+1]!=="none"&&H[Et+1]||H[Et],ii=i&&(mt==="complete"||mt==="reset"||mt in i))),S&&(Ct||ii)&&(ii||h||!i)&&(fn(S)?S(R):R.getTrailing(S).forEach(function(O){return O.endAnimation()})),D||(I&&!un&&!oo?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",tt,i._tTime/i._tDur):(I.vars.totalProgress=tt,I.invalidate().restart())):i&&i.totalProgress(tt,!!(un&&(ie||pe)))),f){if(pe&&g&&(ee.style[g+v.os2]=re),!X)oe(ga(Ae+De*tt));else if(Gn){if(_n=!pe&&tt>wt&&L+1>qe&&qe+1>=Pi(N,v),w)if(!pe&&(qt||_n)){var Yt=Wi(f,!0),$t=qe-ye;Jd(f,vt,Yt.top+(v===Kt?$t:0)+jt,Yt.left+(v===Kt?0:$t)+jt)}else Jd(f,ee);Bs(qt||_n?G:J),Fe&&tt<1&&qt||oe(Ae+(tt===1&&!_n?De:0))}}x&&!Ee.tween&&!un&&!oo&&Q.restart(!0),o&&(Ct||T&&tt&&(tt<1||!kl))&&Ga(o.targets).forEach(function(O){return O.classList[qt||T?"add":"remove"](o.className)}),a&&!D&&!pe&&a(R),Gn&&!un?(D&&(ii&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),a&&a(R)),(Ct||!kl)&&(c&&Ct&&Hl(R,c),W[Et]&&Hl(R,W[Et]),T&&(tt===1?R.kill(!1,1):W[Et]=0),Ct||(Et=tt===1?1:3,W[Et]&&Hl(R,W[Et]))),P&&!qt&&Math.abs(R.getVelocity())>(va(P)?P:2500)&&(oa(R.callbackAnimation),I?I.progress(1):oa(i,mt==="reverse"?1:!tt,1))):D&&a&&!un&&a(R)}if(xe){var M=b?qe/b.duration()*(b._caScrollDist||0):qe;Oe(M+(k._isFlipped?1:0)),xe(M)}We&&We(-qe/b.duration()*(b._caScrollDist||0))}},R.enable=function(pe,Ye){R.enabled||(R.enabled=!0,tn(N,"resize",xa),B||tn(N,"scroll",ds),ne&&tn(r,"refreshInit",ne),pe!==!1&&(R.progress=ce=0,rt=et=$=se()),Ye!==!1&&R.refresh())},R.getTween=function(pe){return pe&&Ee?Ee.tween:I},R.setPositions=function(pe,Ye,Pe,qe){if(b){var Ft=b.scrollTrigger,tt=b.duration(),wt=Ft.end-Ft.start;pe=Ft.start+wt*pe/tt,Ye=Ft.start+wt*Ye/tt}R.refresh(!1,!1,{start:Vd(pe,Pe&&!!R._startClamp),end:Vd(Ye,Pe&&!!R._endClamp)},qe),R.update()},R.adjustPinSpacing=function(pe){if(ae&&pe){var Ye=ae.indexOf(v.d)+1;ae[Ye]=parseFloat(ae[Ye])+pe+jt,ae[1]=parseFloat(ae[1])+pe+jt,Bs(ae)}},R.disable=function(pe,Ye){if(R.enabled&&(pe!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Ye||I&&I.pause(),le=0,Ve&&(Ve.uncache=1),ne&&en(r,"refreshInit",ne),Q&&(Q.pause(),Ee.tween&&Ee.tween.kill()&&(Ee.tween=0)),!B)){for(var Pe=Qe.length;Pe--;)if(Qe[Pe].scroller===N&&Qe[Pe]!==R)return;en(N,"resize",xa),B||en(N,"scroll",ds)}},R.kill=function(pe,Ye){R.disable(pe,Ye),I&&!Ye&&I.kill(),l&&delete Xc[l];var Pe=Qe.indexOf(R);Pe>=0&&Qe.splice(Pe,1),Pe===Mn&&Yo>0&&Mn--,Pe=0,Qe.forEach(function(qe){return qe.scroller===R.scroller&&(Pe=1)}),Pe||En||(R.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),Ye||i.kill()),yt&&[yt,Xe,k,Te].forEach(function(qe){return qe.parentNode&&qe.parentNode.removeChild(qe)}),La===R&&(La=0),f&&(Ve&&(Ve.uncache=1),Pe=0,Qe.forEach(function(qe){return qe.pin===f&&Pe++}),Pe||(Ve.spacer=0)),n.onKill&&n.onKill(R)},Qe.push(R),R.enable(!1,!1),dt&&dt(R),i&&i.add&&!C){var Ke=R.update;R.update=function(){R.update=Ke,it.cache++,ye||L||R.refresh()},be.delayedCall(.01,R.update),C=.01,ye=L=0}else R.refresh();f&&J_()},r.register=function(n){return ws||(be=n||wp(),bp()&&window.document&&r.enable(),ws=_a),ws},r.defaults=function(n){if(n)for(var i in n)ho[i]=n[i];return ho},r.disable=function(n,i){_a=0,Qe.forEach(function(a){return a[i?"kill":"disable"](n)}),en(nt,"wheel",ds),en(At,"scroll",ds),clearInterval(ao),en(At,"touchcancel",wi),en(vt,"touchstart",wi),co(en,At,"pointerdown,touchstart,mousedown",Wd),co(en,At,"pointerup,touchend,mouseup",Xd),dl.kill(),lo(en);for(var s=0;s<it.length;s+=3)uo(en,it[s],it[s+1]),uo(en,it[s],it[s+2])},r.enable=function(){if(nt=window,At=document,jn=At.documentElement,vt=At.body,be&&(Ga=be.utils.toArray,Aa=be.utils.clamp,Vc=be.core.context||wi,Bl=be.core.suppressOverwrites||wi,nd=nt.history.scrollRestoration||"auto",qc=nt.pageYOffset||0,be.core.globals("ScrollTrigger",r),vt)){_a=1,Os=document.createElement("div"),Os.style.height="100vh",Os.style.position="absolute",Np(),X_(),kt.register(be),r.isTouch=kt.isTouch,cr=kt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Gc=kt.isTouch===1,tn(nt,"wheel",ds),td=[nt,At,jn,vt],be.matchMedia?(r.matchMedia=function(c){var u=be.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},be.addEventListener("matchMediaInit",function(){return ld()}),be.addEventListener("matchMediaRevert",function(){return Ip()}),be.addEventListener("matchMedia",function(){Wr(0,1),rs("matchMedia")}),be.matchMedia().add("(orientation: portrait)",function(){return Gl(),Gl})):console.warn("Requires GSAP 3.11.0 or later"),Gl(),tn(At,"scroll",ds);var n=vt.hasAttribute("style"),i=vt.style,s=i.borderTopStyle,a=be.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Wi(vt),Kt.m=Math.round(o.top+Kt.sc())||0,bn.m=Math.round(o.left+bn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(vt.setAttribute("style",""),vt.removeAttribute("style")),ao=setInterval($d,250),be.delayedCall(.5,function(){return oo=0}),tn(At,"touchcancel",wi),tn(vt,"touchstart",wi),co(tn,At,"pointerdown,touchstart,mousedown",Wd),co(tn,At,"pointerup,touchend,mouseup",Xd),Hc=be.utils.checkPrefix("transform"),$o.push(Hc),ws=dn(),dl=be.delayedCall(.2,Wr).pause(),As=[At,"visibilitychange",function(){var c=nt.innerWidth,u=nt.innerHeight;At.hidden?(zd=c,Hd=u):(zd!==c||Hd!==u)&&xa()},At,"DOMContentLoaded",Wr,nt,"load",Wr,nt,"resize",xa],lo(tn),Qe.forEach(function(c){return c.enable(0,1)}),l=0;l<it.length;l+=3)uo(en,it[l],it[l+1]),uo(en,it[l],it[l+2])}},r.config=function(n){"limitCallbacks"in n&&(kl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ao)||(ao=i)&&setInterval($d,i),"ignoreMobileResize"in n&&(Gc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(lo(en)||lo(tn,n.autoRefreshEvents||"none"),Mp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Dn(n),a=it.indexOf(s),o=ns(s);~a&&it.splice(a,o?6:2),i&&(o?Ii.unshift(nt,i,vt,i,jn,i):Ii.unshift(s,i))},r.clearMatchMedia=function(n){Qe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Yn(n)?Dn(n):n).getBoundingClientRect(),o=a[s?Zr:Jr]*i||0;return s?a.right-o>0&&a.left+o<nt.innerWidth:a.bottom-o>0&&a.top+o<nt.innerHeight},r.positionInViewport=function(n,i,s){Yn(n)&&(n=Dn(n));var a=n.getBoundingClientRect(),o=a[s?Zr:Jr],l=i==null?o/2:i in pl?pl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/nt.innerWidth:(a.top+l)/nt.innerHeight},r.killAll=function(n){if(Qe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=is.killAll||[];is={},i.forEach(function(s){return s()})}},r})();ke.version="3.13.0";ke.saveStyles=function(r){return r?Ga(r).forEach(function(e){if(e&&e.style){var t=qn.indexOf(e);t>=0&&qn.splice(t,5),qn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),be.core.getCache(e),Vc())}}):qn};ke.revert=function(r,e){return ld(!r,e)};ke.create=function(r,e){return new ke(r,e)};ke.refresh=function(r){return r?xa(!0):(ws||ke.register())&&Wr(!0)};ke.update=function(r){return++it.cache&&Ki(r===!0?2:0)};ke.clearScrollMemory=Up;ke.maxScroll=function(r,e){return Pi(r,e?bn:Kt)};ke.getScrollFunc=function(r,e){return Tr(Dn(r),e?bn:Kt)};ke.getById=function(r){return Xc[r]};ke.getAll=function(){return Qe.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ke.isScrolling=function(){return!!mi};ke.snapDirectional=od;ke.addEventListener=function(r,e){var t=is[r]||(is[r]=[]);~t.indexOf(e)||t.push(e)};ke.removeEventListener=function(r,e){var t=is[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ke.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var h=[],d=[],f=be.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(g){h.length||f.restart(!0),h.push(g.trigger),d.push(g),s<=h.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&fn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return fn(s)&&(s=s(),tn(ke,"refresh",function(){return s=e.batchMax()})),Ga(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(ke.create(c))}),t};var eh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Wl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(kt.isTouch?" pinch-zoom":""):"none",e===jn&&r(vt,t)},_o={auto:1,scroll:1},ig=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||be.core.getCache(s),o=dn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==vt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(_o[(l=ui(s)).overflowY]||_o[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!ns(s)&&(_o[(l=ui(s)).overflowY]||_o[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Op=function(e,t,n,i){return kt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&ig,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&tn(At,kt.eventTypes[0],nh,!1,!0)},onDisable:function(){return en(At,kt.eventTypes[0],nh,!0)}})},rg=/(input|label|select|textarea)/i,th,nh=function(e){var t=rg.test(e.target.tagName);(t||th)&&(e._gsapAllow=!0,th=t)},sg=function(e){Br(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Dn(e.target)||jn,u=be.core.globals().ScrollSmoother,h=u&&u.get(),d=cr&&(e.content&&Dn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=Tr(c,Kt),g=Tr(c,bn),_=1,m=(kt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,p=0,E=fn(i)?function(){return i(o)}:function(){return i||2.8},T,x,w=Op(c,e.type,!0,s),A=function(){return x=!1},b=wi,P=wi,S=function(){l=Pi(c,Kt),P=Aa(cr?1:0,l),n&&(b=Aa(0,Pi(c,bn))),T=Qr},v=function(){d._gsap.y=ga(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(x){requestAnimationFrame(A);var z=ga(o.deltaY/2),q=P(f.v-z);if(d&&q!==f.v+f.offset){f.offset=q-f.v;var R=ga((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",d._gsap.y=R+"px",f.cacheID=it.cache,Ki()}return!0}f.offset&&v(),x=!0},N,U,B,X,W=function(){S(),N.isActive()&&N.vars.scrollY>l&&(f()>l?N.progress(1)&&f(l):N.resetTo("scrollY",l))};return d&&be.set(d,{y:"+=0"}),e.ignoreCheck=function(H){return cr&&H.type==="touchmove"&&D()||_>1.05&&H.type!=="touchstart"||o.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){x=!1;var H=_;_=ga((nt.visualViewport&&nt.visualViewport.scale||1)/m),N.pause(),H!==_&&Wl(c,_>1.01?!0:n?!1:"x"),U=g(),B=f(),S(),T=Qr},e.onRelease=e.onGestureStart=function(H,z){if(f.offset&&v(),!z)X.restart(!0);else{it.cache++;var q=E(),R,ne;n&&(R=g(),ne=R+q*.05*-H.velocityX/.227,q*=eh(g,R,ne,Pi(c,bn)),N.vars.scrollX=b(ne)),R=f(),ne=R+q*.05*-H.velocityY/.227,q*=eh(f,R,ne,Pi(c,Kt)),N.vars.scrollY=P(ne),N.invalidate().duration(q).play(.01),(cr&&N.vars.scrollY>=l||R>=l-1)&&be.to({},{onUpdate:W,duration:q})}a&&a(H)},e.onWheel=function(){N._ts&&N.pause(),dn()-p>1e3&&(T=0,p=dn())},e.onChange=function(H,z,q,R,ne){if(Qr!==T&&S(),z&&n&&g(b(R[2]===z?U+(H.startX-H.x):g()+z-R[1])),q){f.offset&&v();var Re=ne[2]===q,fe=Re?B+H.startY-H.y:f()+q-ne[1],$=P(fe);Re&&fe!==$&&(B+=$-fe),f($)}(q||z)&&Ki()},e.onEnable=function(){Wl(c,n?!1:"x"),ke.addEventListener("refresh",W),tn(nt,"resize",W),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),w.enable()},e.onDisable=function(){Wl(c,!0),en(nt,"resize",W),ke.removeEventListener("refresh",W),w.kill()},e.lockAxis=e.lockAxis!==!1,o=new kt(e),o.iOS=cr,cr&&!f()&&f(1),cr&&be.ticker.add(wi),X=o._dc,N=be.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Fp(f,f(),function(){return N.pause()})},onUpdate:Ki,onComplete:X.vars.onComplete}),o};ke.sort=function(r){if(fn(r))return Qe.sort(r);var e=nt.pageYOffset||0;return ke.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+nt.innerHeight}),Qe.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ke.observe=function(r){return new kt(r)};ke.normalizeScroll=function(r){if(typeof r>"u")return yn;if(r===!0&&yn)return yn.enable();if(r===!1){yn&&yn.kill(),yn=r;return}var e=r instanceof kt?r:sg(r);return yn&&yn.target===e.target&&yn.kill(),ns(e.target)&&(yn=e),e};ke.core={_getVelocityProp:zc,_inputObserver:Op,_scrollers:it,_proxies:Ii,bridge:{ss:function(){mi||rs("scrollStart"),mi=dn()},ref:function(){return un}}};wp()&&be.registerPlugin(ke);var ag="1.3.4";function Bp(r,e,t){return Math.max(r,Math.min(e,t))}function og(r,e,t){return(1-t)*r+t*e}function lg(r,e,t,n){return og(r,e,1-Math.exp(-t*n))}function cg(r,e){return(r%e+e)%e}var ug=class{constructor(){Ie(this,"isRunning",!1);Ie(this,"value",0);Ie(this,"from",0);Ie(this,"to",0);Ie(this,"currentTime",0);Ie(this,"lerp");Ie(this,"duration");Ie(this,"easing");Ie(this,"onUpdate")}advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=Bp(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=lg(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=a}};function dg(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var hg=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){Ie(this,"width",0);Ie(this,"height",0);Ie(this,"scrollHeight",0);Ie(this,"scrollWidth",0);Ie(this,"debouncedResize");Ie(this,"wrapperResizeObserver");Ie(this,"contentResizeObserver");Ie(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ie(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ie(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=dg(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},kp=class{constructor(){Ie(this,"events",{})}emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},ih=100/6,nr={passive:!1},fg=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){Ie(this,"touchStart",{x:0,y:0});Ie(this,"lastDelta",{x:0,y:0});Ie(this,"window",{width:0,height:0});Ie(this,"emitter",new kp);Ie(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Ie(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Ie(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Ie(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?ih:n===2?this.window.width:1,s=n===1?ih:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});Ie(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,nr),this.element.addEventListener("touchstart",this.onTouchStart,nr),this.element.addEventListener("touchmove",this.onTouchMove,nr),this.element.addEventListener("touchend",this.onTouchEnd,nr)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,nr),this.element.removeEventListener("touchstart",this.onTouchStart,nr),this.element.removeEventListener("touchmove",this.onTouchMove,nr),this.element.removeEventListener("touchend",this.onTouchEnd,nr)}},rh=r=>Math.min(1,1.001-Math.pow(2,-10*r)),pg=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:a=35,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:d="vertical",touchMultiplier:f=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:E=!0,autoRaf:T=!1,anchors:x=!1,autoToggle:w=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:b=!1}={}){Ie(this,"_isScrolling",!1);Ie(this,"_isStopped",!1);Ie(this,"_isLocked",!1);Ie(this,"_preventNextNativeScrollEvent",!1);Ie(this,"_resetVelocityTimeout",null);Ie(this,"__rafID",null);Ie(this,"isTouching");Ie(this,"time",0);Ie(this,"userData",{});Ie(this,"lastVelocity",0);Ie(this,"velocity",0);Ie(this,"direction",0);Ie(this,"options");Ie(this,"targetScroll");Ie(this,"animatedScroll");Ie(this,"animate",new ug);Ie(this,"emitter",new kp);Ie(this,"dimensions");Ie(this,"virtualScroll");Ie(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Ie(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ie(this,"onTransitionEnd",r=>{if(r.propertyName.includes("overflow")){const e=this.isHorizontal?"overflow-x":"overflow-y",t=getComputedStyle(this.rootElement)[e];["hidden","clip"].includes(t)?this.stop():this.start()}});Ie(this,"onClick",r=>{const t=r.composedPath().find(n=>n instanceof HTMLAnchorElement&&(n.getAttribute("href")?.startsWith("#")||n.getAttribute("href")?.startsWith("/#")||n.getAttribute("href")?.startsWith("./#")));if(t){const n=t.getAttribute("href");if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;let s=`#${n.split("#")[1]}`;["#","/#","./#","#top","/#top","./#top"].includes(n)&&(s=0),this.scrollTo(s,i)}}});Ie(this,"onPointerDown",r=>{r.button===1&&this.reset()});Ie(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof u=="function"&&u?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.preventDefault();const f=i&&this.options.syncTouch,_=i&&n.type==="touchend"&&Math.abs(d)>5;_&&(d=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ie(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ie(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=ag,(!r||r===document.documentElement)&&(r=window),typeof o=="number"&&typeof l!="function"?l=rh:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:h,touchMultiplier:f,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:E,autoRaf:T,anchors:x,autoToggle:w,allowNestedScroll:A,__experimental__naiveDimensions:b},this.dimensions=new hg(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new fg(t,{touchMultiplier:f,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:a=this.options.lerp,onStart:o,onComplete:l,force:c=!1,programmatic:u=!0,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let d;if(typeof r=="string"?d=document.querySelector(r):r instanceof HTMLElement&&r?.nodeType&&(d=r),d){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const f=d.getBoundingClientRect();r=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(u){this.targetScroll=this.animatedScroll=this.scroll;const d=r-this.animatedScroll;d>this.limit/2?r=r-this.limit:d<-this.limit/2&&(r=r+this.limit)}}else r=Bp(0,r,this.limit);if(r===this.targetScroll){o?.(this),l?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=r),typeof i=="number"&&typeof s!="function"?s=rh:typeof s=="function"&&typeof i!="number"&&(i=1),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:a,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",o?.(this)},onUpdate:(d,f)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),u&&(this.targetScroll=d),f||this.emit(),f&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??(r._lenis={});let s,a,o,l,c,u,h,d;const f=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const w=window.getComputedStyle(r);i.computedStyle=w;const A=w.overflowX,b=w.overflowY;if(s=["auto","overlay","scroll"].includes(A),a=["auto","overlay","scroll"].includes(b),i.hasOverflowX=s,i.hasOverflowY=a,!s&&!a||f==="vertical"&&!a||f==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,d=r.clientHeight,o=c>h,l=u>d,i.isScrollableX=o,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=h,i.clientHeight=d}else o=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,a=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,d=i.clientHeight;if(!s&&!a||!o&&!l||f==="vertical"&&(!a||!l)||f==="horizontal"&&(!s||!o))return!1;let g;if(f==="horizontal")g="x";else if(f==="vertical")g="y";else{const w=e!==0,A=t!==0;w&&s&&o&&(g="x"),A&&a&&l&&(g="y")}if(!g)return!1;let _,m,p,E,T;if(g==="x")_=r.scrollLeft,m=c-h,p=e,E=s,T=o;else if(g==="y")_=r.scrollTop,m=u-d,p=t,E=a,T=l;else return!1;return(p>0?_<m:_>0)&&E&&T}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?cg(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const sh="https://johnnyrayane237.github.io/jobhunter-poste-de-pilotage/",ah="https://johnnyrayane237.github.io/aiguilleur/",oh={fr:{meta:{title:"Johanne Pamegne — Automatisation & IA, motion design",description:"Portfolio de Johanne Rayane Nkeuchatchou Pamegne : agents IA, workflows n8n, infrastructure auto-hébergée et motion design en code. Disponible en alternance ou stage alterné."},ui:{"nav.work":"Travaux","nav.pipeline":"Pipeline","nav.motion":"Motion","nav.path":"Parcours","nav.contact":"Contact","nav.menu":"Menu","nav.close":"Fermer",status:"Disponible — alternance ou stage alterné","hero.fullname":"Johanne Rayane Nkeuchatchou Pamegne","hero.kicker":'Alternant <span class="u-accent">Automatisation &amp; IA</span><br>Motion design écrit en code',"hero.lede":"Je conçois des systèmes qui travaillent tout seuls — agents IA, workflows n8n, serveurs — et je leur donne du mouvement.","hero.scroll":"Faire défiler","hero.loc":"Saint-Denis · Île-de-France","manifesto.label":"(01) Manifeste","manifesto.text":"Je construis des systèmes qui font le travail répétitif à la place des équipes. Des agents qui lisent, trient et rédigent. Des workflows qui tournent la nuit. Une seule règle : une personne valide chaque action qui compte.","manifesto.method":"Méthode : je pilote l'IA (Claude Code) pour écrire le code, puis je teste, je mesure les coûts et je documente.","work.label":"(02) Travaux sélectionnés","work.title":"Des systèmes <em>qui tournent,</em> pas des maquettes.","work.hint":"Cliquer pour ouvrir le projet","pipeline.label":"(03) Pipeline en direct","pipeline.title":"Un e-mail traverse <em>l'Aiguilleur IA.</em>","pipeline.intro":"Fais défiler : chaque étape s'allume comme dans n8n. Un seul appel à Claude, une sortie JSON imposée, et une personne valide avant tout envoi.","pipeline.note":"Exemple fictif, inspiré des 32 e-mails de test.","motion.label":"(05) Motion design","motion.title":"Du mouvement <em>écrit en code.</em>","motion.intro":"Animé en HTML et GSAP avec HyperFrames, voix off ElevenLabs, montage et son avec FFmpeg — le tout piloté avec Claude Code. Le film DT Design est publié avec l'accord de la marque.","motion.play":"Lire avec le son","mdm.title":"Le Meilleur des mondes","mdm.text":"Présentation éditoriale en 4 pages verticales : mise en page en HTML et CSS, schémas SVG générés en JavaScript, export PDF automatique. Réalisée avec Tissio Fumtul Donald.","cap.label":"(06) Capacités","cap.title":"Une boîte à outils <em>de bout en bout.</em>","path.label":"(07) Parcours","path.title":"Apprendre vite, <em>livrer vraiment.</em>","contact.label":"(08) Contact","contact.title":"Parlons <em>alternance.</em>","contact.text":"Je cherche une alternance ou un stage alterné en automatisation et IA, en Île-de-France ou à distance. Rythme école / entreprise flexible, disponible dès maintenant.","contact.mail":"Écrire un e-mail","contact.cv":"Télécharger le CV","contact.copy":"Copier l'adresse","contact.copied":"Adresse copiée","footer.credit":"Conçu et codé par Johanne.","footer.top":"Haut de page","footer.time":"Heure locale","case.close":"Fermer","case.results":"Résultats mesurés","case.built":"Ce que j'ai construit","case.stack":"Outils","case.next":"Projet suivant","loader.1":"démarrage de n8n","loader.2":"connexion à Claude","loader.3":"chargement des workflows","loader.4":"validation humaine : ok","lang.switch":"Switch to English",skip:"Aller au contenu"},stats:[{n:5,suffix:"",label:"systèmes n8n construits en 2026"},{n:32,suffix:"",label:"workflows dans l'agence de doublage"},{n:102,suffix:"",label:"tests automatisés sur un seul projet"},{n:32,suffix:"/32",label:"e-mails de test bien classés par l'Aiguilleur"}],projects:[{id:"doublage",year:"2026",img:"media/doublage.webp",title:"Agence IA de doublage vidéo",sub:"Multi-agent · voix clonée",tags:["n8n","API Claude","ElevenLabs","Telegram"],summary:"Une vidéo envoyée sur Telegram revient doublée dans une autre langue, avec la voix d'origine. Un agent directeur coordonne une équipe d'agents : traduction, voix, contrôle qualité.",metrics:[["4 min 40","pour doubler une vidéo réelle de 2 min 10"],["8/10","au contrôle qualité, voix jamais accélérée"],["32","workflows n8n décrits en JavaScript"],["102","tests automatisés"]],built:["Bot Telegram qui répond en 3,5 à 5,6 secondes","Voix clonée avec ElevenLabs, vidéos rangées dans Google Drive","Services simulés pour tout tester sans dépenser","Construit en 3 jours, en pilotant Claude Code"],stack:["n8n","API Claude","ElevenLabs","Telegram","Google Drive","Docker","Node.js"],links:[]},{id:"jobhunter",year:"2026",img:"media/jobhunter.webp",title:"JobHunter",sub:"Système multi-agent de recherche d'alternance",tags:["n8n","Supabase","API Claude","React"],summary:"Des agents cherchent les offres, les notent, trouvent le bon contact et préparent chaque candidature. Un agent vérificateur relit tout : la base refuse un e-mail sans relecture réussie.",metrics:[["74 → 34","offres reçues puis retenues, sur un test réel"],["13/13","candidatures correctement vérifiées"],["0,07 $","coût mesuré par candidature"],["3 000","pas de simulation sans franchir une étape réservée à l'humain"]],built:["13 workflows générés depuis le code et déployés par script","Base Supabase : 21 tables protégées par RLS","Poste de pilotage React 19 + TypeScript, testé avec Vitest","Coût de chaque appel à l’IA enregistré"],stack:["n8n","Supabase","API Claude","Telegram","React 19","TypeScript","Zustand","Vitest"],links:[["Voir le poste de pilotage",sh]]},{id:"aiguilleur",year:"2026",img:"media/aiguilleur.webp",title:"Aiguilleur IA",sub:"Tri automatique des e-mails clients",tags:["n8n","API Claude","Gmail","Google Sheets"],summary:"Il relève la boîte contact@ d'une entreprise toutes les 15 secondes. Un seul appel à Claude classe l'e-mail, mesure l'urgence, résume, rédige un brouillon et le confie au bon collègue.",metrics:[["32/32","e-mails de test bien classés"],["1,5 ct","par e-mail analysé"],["15 s","entre deux relèves de la boîte"],["85 %","de confiance minimum, sinon une personne tranche"]],built:["Relève la boîte toutes les 15 s, pièces jointes PDF et photos comprises","Une fiche claire au bon collègue : résumé, action à faire, proposition de réponse","Réponses automatiques en brouillon à valider par défaut","Déclinable par métier : syndic, commerce"],stack:["n8n","API Claude","Gmail","Google Sheets","Telegram","Docker"],links:[["Voir sous le capot","#sous-le-capot"],["Voir la présentation",ah]]},{id:"vorchex",year:"2026",img:null,title:"Infrastructure VorcheX",sub:"Serveur d'automatisation auto-hébergé",tags:["VPS Ubuntu","Docker","Coolify","PostgreSQL"],summary:"Mon propre serveur d'automatisation : un n8n central et sa base PostgreSQL sur un VPS que j'administre, déployés avec Docker et Coolify, sous mon domaine.",metrics:[["3","ports ouverts seulement : 22, 80, 443"],["HTTPS","sur chaque sous-domaine"],["1","n8n central pour toutes les agences"],["8 Go","de RAM, architecture pensée pour tenir dedans"]],built:["DNS en joker vers le VPS, certificats automatiques","Pare-feu, fail2ban, swap, mises à jour","Sauvegarde hebdomadaire du serveur"],stack:["Ubuntu","Docker","Coolify","PostgreSQL","DNS","HTTPS"],links:[]},{id:"encaisse",year:"2026",img:null,title:"Encaisse",sub:"Recouvrement de factures BTP — en cours",tags:["n8n","PostgreSQL","Gotenberg"],summary:"Automatisation du recouvrement de factures pour le BTP : relances, PDF, envois. Tout est journalisé, et aucune action juridique ne part sans validation humaine.",metrics:[["3/3","fichiers de tests SQL au vert"],["13","règles de conception écrites avant le code"],["PDF","générés automatiquement par Gotenberg"],["0","envoi réel tant que le mode test est actif"]],built:["PostgreSQL 16, Gotenberg 8, Mailpit en développement","Montants en centimes entiers, paramètres en base","Chaque envoi contrôlé, chaque action journalisée"],stack:["n8n","PostgreSQL","Gotenberg","Docker"],links:[]},{id:"motion",year:"2026",img:"media/dt-motion.webp",title:"Motion design",sub:"Pubs et films de marque animés en code",tags:["HyperFrames","GSAP","ElevenLabs","FFmpeg"],summary:"Des pubs et un film de marque animés en code : HTML et GSAP avec HyperFrames, voix off ElevenLabs, son mixé à −14 LUFS pour Instagram et TikTok.",metrics:[["3 min","film de marque pour DT Design"],["6","publicités verticales 9:16 (30 s et 15 s)"],["4","entreprises accompagnées"],["−14 LUFS","son prêt pour les réseaux"]],built:["Storyboard, voix off, détourage par IA, contrôle qualité","Tout est piloté avec Claude Code","Extraits dans la section Motion"],stack:["HyperFrames","GSAP","ElevenLabs","FFmpeg","Claude Code"],links:[["Voir les extraits","#motion"]]}],pipeline:{nodes:[["Gmail","relève toutes les 15 s"],["Préparer","contexte + corrections"],["Claude","1 appel · JSON imposé"],["Décision","confiance ≥ 85 %"],["Brouillon","à valider"],["Alerte","Telegram"],["Journal","Google Sheets"]],log:["09:41:07  nouvel e-mail — « Fuite d'eau au 3e étage, c'est urgent »","09:41:07  contexte : résidence Les Tilleuls · 3 corrections proches","09:41:09  Claude → catégorie : sinistre · urgence : haute · confiance 0,93","09:41:09  décision : urgence haute → alerte + brouillon","09:41:10  brouillon prêt — en attente de validation","09:41:10  Telegram → équipe gestion : « Je m'en occupe ? »","09:41:10  journal Google Sheets mis à jour"]},motion:[{id:"dt-motion",src:"media/dt-motion-16x9.mp4",poster:"media/dt-motion.webp",ratio:"16/9",title:"DT Design — film de marque",meta:"16:9 · extrait 22 s"},{id:"dt-film",src:"media/dt-film-9x16.mp4",poster:"media/dt-film.webp",ratio:"9/16",title:"DT Design — « Promesses tenues »",meta:"9:16 · 30 s"},{id:"rhonda",src:"media/rhonda-intro.mp4",poster:"media/rhonda.webp",ratio:"16/9",title:"Rhonda — intro du logo",meta:"16:9 · 15 s · ma marque"},{id:"rjp",src:"media/rjp-intro.mp4",poster:"media/rjp.webp",ratio:"16/9",title:"RJP — « Prêt à courir ? »",meta:"16:9 · 10 s"},{id:"dt-logo",src:"media/dt-logo-9x16.mp4",poster:"media/dt-logo.webp",ratio:"9/16",title:"DT Design — logo animé",meta:"9:16 · 8 s"}],caps:[["Automatisation",["n8n : workflows, webhooks, nœuds Code","Gestion des erreurs et relances","API REST, JSON, cron","Gmail, Telegram, Google Sheets"]],["IA générative",["Agents et systèmes multi-agents","API Claude (Anthropic)","Prompt engineering, sorties JSON","Contrôle qualité des réponses"]],["Données",["PostgreSQL, SQL, migrations","Supabase et sécurité RLS","Google Drive, Google Sheets","Gotenberg (génération de PDF)"]],["Infrastructure",["Docker, Docker Compose","Coolify sur VPS Ubuntu","DNS, HTTPS, pare-feu, nginx","Sauvegardes et surveillance"]],["Développement",["JavaScript / Node.js, TypeScript","React, HTML, CSS","Python, Git, GitHub Actions","Tests automatisés (Vitest)"]],["Motion design",["HyperFrames, GSAP","Voix off ElevenLabs","FFmpeg : montage et mixage","Storyboard et direction artistique"]]],path:[["2026 —","Bachelor informatique, 2e année","ESIIA, Torcy","En cours. 1re année de janvier à juillet 2026."],["2026 —","Fondateur, VorcheX","Projet entrepreneurial","Démonstrateurs d'automatisation IA pour les PME et l'infrastructure qui les héberge."],["2026 —","Équipier polyvalent","McDonald's Paris Louvre","Forte cadence, procédures strictes, travail en équipe — en parallèle des études."],["2025","Baccalauréat informatique","Lycée Bilingue de Tonga Rural, Cameroun",""],["2025","Équipier polyvalent","La Paillote, Douala","Septembre à décembre 2025."],["2024","Formation en développement web","INFOPRO, Douala","Formation en présentiel, de janvier à décembre 2024."]]},en:{meta:{title:"Johanne Pamegne — Automation & AI, motion design",description:"Portfolio of Johanne Rayane Nkeuchatchou Pamegne: AI agents, n8n workflows, self-hosted infrastructure and motion design in code. Open to a work-study position (alternance) in France."},ui:{"nav.work":"Work","nav.pipeline":"Pipeline","nav.motion":"Motion","nav.path":"Path","nav.contact":"Contact","nav.menu":"Menu","nav.close":"Close",status:"Available — work-study or alternating internship","hero.fullname":"Johanne Rayane Nkeuchatchou Pamegne","hero.kicker":'<span class="u-accent">Automation &amp; AI</span> apprentice<br>Motion design written in code',"hero.lede":"I design systems that work on their own — AI agents, n8n workflows, servers — and I give them motion.","hero.scroll":"Scroll","hero.loc":"Saint-Denis · Paris region","manifesto.label":"(01) Manifesto","manifesto.text":"I build systems that take repetitive work off people’s plates. Agents that read, sort and draft. Workflows that run through the night. One rule: a person approves every action that matters.","manifesto.method":"Method: I steer AI (Claude Code) to write the code, then I test, measure costs and document.","work.label":"(02) Selected work","work.title":"Systems <em>that run,</em> not mockups.","work.hint":"Click to open the project","pipeline.label":"(03) Live pipeline","pipeline.title":"An email travels through <em>the AI Dispatcher.</em>","pipeline.intro":"Scroll: each step lights up like in n8n. One single Claude call, an enforced JSON output, and a person approves before anything is sent.","pipeline.note":"Fictional example, based on the 32 test emails.","motion.label":"(05) Motion design","motion.title":"Motion <em>written in code.</em>","motion.intro":"Animated in HTML and GSAP with HyperFrames, ElevenLabs voice-over, editing and sound with FFmpeg — all steered with Claude Code. The DT Design film is shown with the brand’s consent.","motion.play":"Play with sound","mdm.title":"Brave New World","mdm.text":"An editorial presentation in 4 vertical pages: HTML and CSS layout, SVG diagrams generated in JavaScript, automatic PDF export. Made with Tissio Fumtul Donald.","cap.label":"(06) Capabilities","cap.title":"An <em>end-to-end</em> toolkit.","path.label":"(07) Path","path.title":"Learn fast, <em>ship for real.</em>","contact.label":"(08) Contact","contact.title":"Let’s talk <em>work-study.</em>","contact.text":"I’m looking for a work-study position (alternance) or an alternating internship in automation and AI, in the Paris region or remote. Flexible school/company rhythm, available now.","contact.mail":"Send an email","contact.cv":"Download my CV","contact.copy":"Copy address","contact.copied":"Address copied","footer.credit":"Designed and built by Johanne.","footer.top":"Back to top","footer.time":"Local time","case.close":"Close","case.results":"Measured results","case.built":"What I built","case.stack":"Tools","case.next":"Next project","loader.1":"starting n8n","loader.2":"connecting to Claude","loader.3":"loading workflows","loader.4":"human approval: ok","lang.switch":"Passer en français",skip:"Skip to content"},stats:[{n:5,suffix:"",label:"n8n systems built in 2026"},{n:32,suffix:"",label:"workflows in the dubbing agency"},{n:102,suffix:"",label:"automated tests on a single project"},{n:32,suffix:"/32",label:"test emails routed correctly by the Dispatcher"}],projects:[{id:"doublage",year:"2026",img:"media/doublage.webp",title:"AI video dubbing agency",sub:"Multi-agent · cloned voice",tags:["n8n","Claude API","ElevenLabs","Telegram"],summary:"Send a video on Telegram and it comes back dubbed in another language, in the original voice. A director agent coordinates a team of agents: translation, voice, quality control.",metrics:[["4 min 40","to dub a real 2 min 10 video"],["8/10","quality score, voice never sped up"],["32","n8n workflows defined in JavaScript"],["102","automated tests"]],built:["Telegram bot answering in 3.5 to 5.6 seconds","Voice cloned with ElevenLabs, videos filed in Google Drive","Mocked services to test everything at no cost","Built in 3 days by steering Claude Code"],stack:["n8n","Claude API","ElevenLabs","Telegram","Google Drive","Docker","Node.js"],links:[]},{id:"jobhunter",year:"2026",img:"media/jobhunter.webp",title:"JobHunter",sub:"Multi-agent work-study job search",tags:["n8n","Supabase","Claude API","React"],summary:"Agents find job offers, score them, look up the right contact and draft each application. A reviewer agent checks everything: the database refuses any email without a passed review.",metrics:[["74 → 34","offers received then shortlisted, real-world test"],["13/13","applications reviewed correctly"],["$0.07","measured cost per application"],["3,000","simulation steps without crossing a human-only step"]],built:["13 workflows generated from code and deployed by script","Supabase database: 21 tables secured with RLS","React 19 + TypeScript control room, tested with Vitest","Cost of every AI call recorded"],stack:["n8n","Supabase","Claude API","Telegram","React 19","TypeScript","Zustand","Vitest"],links:[["Open the control room",sh]]},{id:"aiguilleur",year:"2026",img:"media/aiguilleur.webp",title:"Aiguilleur IA",sub:"Automatic customer email triage",tags:["n8n","Claude API","Gmail","Google Sheets"],summary:"It checks a company’s contact@ inbox every 15 seconds. One single Claude call categorises the email, rates urgency, summarises, drafts a reply and hands it to the right teammate.",metrics:[["32/32","test emails routed correctly"],["1.5 ¢","per analysed email"],["15 s","between two inbox checks"],["85 %","minimum confidence, otherwise a person decides"]],built:["Checks the inbox every 15 s, PDF and photo attachments included","A clear brief for the right teammate: summary, action, suggested reply","Automatic replies saved as drafts to approve by default","Adaptable per trade: property management, retail"],stack:["n8n","Claude API","Gmail","Google Sheets","Telegram","Docker"],links:[["See under the hood","#sous-le-capot"],["See the presentation",ah]]},{id:"vorchex",year:"2026",img:null,title:"VorcheX infrastructure",sub:"Self-hosted automation server",tags:["Ubuntu VPS","Docker","Coolify","PostgreSQL"],summary:"My own automation server: a central n8n and its PostgreSQL database on a VPS I administer, deployed with Docker and Coolify, under my own domain.",metrics:[["3","open ports only: 22, 80, 443"],["HTTPS","on every subdomain"],["1","central n8n for every agency"],["8 GB","of RAM, architecture designed to fit"]],built:["Wildcard DNS to the VPS, automatic certificates","Firewall, fail2ban, swap, updates","Weekly server backup"],stack:["Ubuntu","Docker","Coolify","PostgreSQL","DNS","HTTPS"],links:[]},{id:"encaisse",year:"2026",img:null,title:"Encaisse",sub:"Construction invoice collection — in progress",tags:["n8n","PostgreSQL","Gotenberg"],summary:"Automated invoice collection for construction companies: reminders, PDFs, sending. Everything is logged, and no legal action goes out without human approval.",metrics:[["3/3","SQL test files passing"],["13","design rules written before the code"],["PDF","generated automatically by Gotenberg"],["0","real sends while test mode is on"]],built:["PostgreSQL 16, Gotenberg 8, Mailpit for development","Amounts stored as integer cents, settings in the database","Every send checked, every action logged"],stack:["n8n","PostgreSQL","Gotenberg","Docker"],links:[]},{id:"motion",year:"2026",img:"media/dt-motion.webp",title:"Motion design",sub:"Ads and brand films animated in code",tags:["HyperFrames","GSAP","ElevenLabs","FFmpeg"],summary:"Ads and a brand film animated in code: HTML and GSAP with HyperFrames, ElevenLabs voice-over, sound mixed at −14 LUFS for Instagram and TikTok.",metrics:[["3 min","brand film for DT Design"],["6","vertical 9:16 ads (30 s and 15 s)"],["4","companies"],["−14 LUFS","sound ready for social media"]],built:["Storyboard, voice-over, AI cut-outs, quality control","All steered with Claude Code","Excerpts in the Motion section"],stack:["HyperFrames","GSAP","ElevenLabs","FFmpeg","Claude Code"],links:[["See the excerpts","#motion"]]}],pipeline:{nodes:[["Gmail","checked every 15 s"],["Prepare","context + corrections"],["Claude","1 call · enforced JSON"],["Decision","confidence ≥ 85 %"],["Draft","awaiting approval"],["Alert","Telegram"],["Log","Google Sheets"]],log:["09:41:07  new email — “Water leak on the 3rd floor, it’s urgent”","09:41:07  context: Les Tilleuls residence · 3 similar corrections","09:41:09  Claude → category: damage · urgency: high · confidence 0.93","09:41:09  decision: high urgency → alert + draft","09:41:10  draft ready — awaiting approval","09:41:10  Telegram → property team: “Shall I take it?”","09:41:10  Google Sheets log updated"]},motion:[{id:"dt-motion",src:"media/dt-motion-16x9.mp4",poster:"media/dt-motion.webp",ratio:"16/9",title:"DT Design — brand film",meta:"16:9 · 22 s excerpt"},{id:"dt-film",src:"media/dt-film-9x16.mp4",poster:"media/dt-film.webp",ratio:"9/16",title:"DT Design — “Promises kept”",meta:"9:16 · 30 s"},{id:"rhonda",src:"media/rhonda-intro.mp4",poster:"media/rhonda.webp",ratio:"16/9",title:"Rhonda — logo intro",meta:"16:9 · 15 s · my brand"},{id:"rjp",src:"media/rjp-intro.mp4",poster:"media/rjp.webp",ratio:"16/9",title:"RJP — “Ready to race?”",meta:"16:9 · 10 s"},{id:"dt-logo",src:"media/dt-logo-9x16.mp4",poster:"media/dt-logo.webp",ratio:"9/16",title:"DT Design — animated logo",meta:"9:16 · 8 s"}],caps:[["Automation",["n8n: workflows, webhooks, Code nodes","Error handling and retries","REST APIs, JSON, cron","Gmail, Telegram, Google Sheets"]],["Generative AI",["Agents and multi-agent systems","Claude API (Anthropic)","Prompt engineering, JSON outputs","Output quality control"]],["Data",["PostgreSQL, SQL, migrations","Supabase and RLS security","Google Drive, Google Sheets","Gotenberg (PDF generation)"]],["Infrastructure",["Docker, Docker Compose","Coolify on an Ubuntu VPS","DNS, HTTPS, firewall, nginx","Backups and monitoring"]],["Development",["JavaScript / Node.js, TypeScript","React, HTML, CSS","Python, Git, GitHub Actions","Automated tests (Vitest)"]],["Motion design",["HyperFrames, GSAP","ElevenLabs voice-over","FFmpeg: editing and mixing","Storyboard and art direction"]]],path:[["2026 —","Bachelor in computer science, year 2","ESIIA, Torcy","Ongoing. Year 1 from January to July 2026."],["2026 —","Founder, VorcheX","Entrepreneurial project","AI automation demos for small businesses and the infrastructure that hosts them."],["2026 —","Crew member","McDonald's Paris Louvre","High pace, strict procedures, teamwork — alongside my studies."],["2025","Baccalauréat, computer science","Lycée Bilingue de Tonga Rural, Cameroon",""],["2025","Crew member","La Paillote, Douala","September to December 2025."],["2024","Web development training","INFOPRO, Douala","In-person training, January to December 2024."]]}},lh={email:"johannepamegne@gmail.com",phone:"07 49 16 37 92",phoneIntl:"+33749163792",github:"https://github.com/Johnnyrayane237",cv:"media/CV_Johanne-Rayane_NKEUCHATCHOU-PAMEGNE.pdf"};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cd="176",mg=0,ch=1,_g=2,zp=1,gg=2,Hi=3,br=0,On=1,Xi=2,Sr=0,ks=1,Ia=2,uh=3,dh=4,vg=5,Hr=100,xg=101,Sg=102,yg=103,Mg=104,Eg=200,Tg=201,bg=202,wg=203,$c=204,jc=205,Ag=206,Cg=207,Rg=208,Pg=209,Dg=210,Lg=211,Ig=212,Ug=213,Ng=214,Kc=0,Zc=1,Jc=2,Ks=3,Qc=4,eu=5,tu=6,nu=7,Hp=0,Fg=1,Og=2,yr=0,Bg=1,kg=2,zg=3,Hg=4,Gg=5,Vg=6,Wg=7,Gp=300,Zs=301,Js=302,iu=303,ru=304,Tl=306,su=1e3,Xr=1001,au=1002,Ei=1003,Xg=1004,go=1005,Di=1006,Xl=1007,qr=1008,er=1009,Vp=1010,Wp=1011,Wa=1012,ud=1013,ss=1014,Yi=1015,Ka=1016,dd=1017,hd=1018,Xa=1020,Xp=35902,qp=1021,Yp=1022,Mi=1023,qa=1026,Ya=1027,$p=1028,fd=1029,jp=1030,pd=1031,md=1033,Ko=33776,Zo=33777,Jo=33778,Qo=33779,ou=35840,lu=35841,cu=35842,uu=35843,du=36196,hu=37492,fu=37496,pu=37808,mu=37809,_u=37810,gu=37811,vu=37812,xu=37813,Su=37814,yu=37815,Mu=37816,Eu=37817,Tu=37818,bu=37819,wu=37820,Au=37821,el=36492,Cu=36494,Ru=36495,Kp=36283,Pu=36284,Du=36285,Lu=36286,qg=3200,Yg=3201,$g=0,jg=1,dr="",li="srgb",Qs="srgb-linear",ml="linear",xt="srgb",hs=7680,hh=519,Kg=512,Zg=513,Jg=514,Zp=515,Qg=516,e0=517,t0=518,n0=519,fh=35044,ph="300 es",$i=2e3,_l=2001;class na{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ql=Math.PI/180,Iu=180/Math.PI;function Za(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[r&255]+ln[r>>8&255]+ln[r>>16&255]+ln[r>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function at(r,e,t){return Math.max(e,Math.min(t,r))}function i0(r,e){return(r%e+e)%e}function Yl(r,e,t){return(1-t)*r+t*e}function la(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class St{constructor(e=0,t=0){St.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,i,s,a,o,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],E=i[1],T=i[4],x=i[7],w=i[2],A=i[5],b=i[8];return s[0]=a*_+o*E+l*w,s[3]=a*m+o*T+l*A,s[6]=a*p+o*x+l*b,s[1]=c*_+u*E+h*w,s[4]=c*m+u*T+h*A,s[7]=c*p+u*x+h*b,s[2]=d*_+f*E+g*w,s[5]=d*m+f*T+g*A,s[8]=d*p+f*x+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($l.makeScale(e,t)),this}rotate(e){return this.premultiply($l.makeRotation(-e)),this}translate(e,t){return this.premultiply($l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $l=new Ze;function Jp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function gl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function r0(){const r=gl("canvas");return r.style.display="block",r}const mh={};function tl(r){r in mh||(mh[r]=!0,console.warn(r))}function s0(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function a0(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function o0(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _h=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gh=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function l0(){const r={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xt&&(i.r=Zi(i.r),i.g=Zi(i.g),i.b=Zi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(i.r=zs(i.r),i.g=zs(i.g),i.b=zs(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===dr?ml:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Qs]:{primaries:e,whitePoint:n,transfer:ml,toXYZ:_h,fromXYZ:gh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:_h,fromXYZ:gh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),r}const ft=l0();function Zi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let fs;class c0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fs===void 0&&(fs=gl("canvas")),fs.width=e.width,fs.height=e.height;const i=fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=fs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Zi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zi(t[n]/255)*255):t[n]=Zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let u0=0;class _d{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Za(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(jl(i[a].image)):s.push(jl(i[a]))}else s=jl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function jl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?c0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let d0=0;class Bn extends na{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,n=Xr,i=Xr,s=Di,a=qr,o=Mi,l=er,c=Bn.DEFAULT_ANISOTROPY,u=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Za(),this.name="",this.source=new _d(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case su:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case au:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case su:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case au:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Gp;Bn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,n=0,i=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,x=(f+1)/2,w=(p+1)/2,A=(u+d)/4,b=(h+_)/4,P=(g+m)/4;return T>x&&T>w?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=A/n,s=b/n):x>w?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=P/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=b/s,i=P/s),this.set(n,i,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(d-u)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class h0 extends na{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const i={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const s=new Bn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new _d(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class as extends h0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qp extends Bn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class f0 extends Bn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ja{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-o;const p=l*d+c*f+u*g+h*_,E=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const w=Math.sqrt(T),A=Math.atan2(w,p*E);m=Math.sin(m*A)/w,o=Math.sin(o*A)/w}const x=o*E;if(l=l*m+d*x,c=c*m+f*x,u=u*m+g*x,h=h*m+_*x,m===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kl.copy(this).projectOnVector(e),this.sub(Kl)}reflect(e){return this.sub(Kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kl=new j,vh=new Ja;class Qa{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gi):gi.fromBufferAttribute(s,a),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vo.copy(n.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),xo.subVectors(this.max,ca),ps.subVectors(e.a,ca),ms.subVectors(e.b,ca),_s.subVectors(e.c,ca),ir.subVectors(ms,ps),rr.subVectors(_s,ms),Pr.subVectors(ps,_s);let t=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Pr.z,Pr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Pr.z,0,-Pr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Pr.y,Pr.x,0];return!Zl(t,ps,ms,_s,xo)||(t=[1,0,0,0,1,0,0,0,1],!Zl(t,ps,ms,_s,xo))?!1:(So.crossVectors(ir,rr),t=[So.x,So.y,So.z],Zl(t,ps,ms,_s,xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new j,new j,new j,new j,new j,new j,new j,new j],gi=new j,vo=new Qa,ps=new j,ms=new j,_s=new j,ir=new j,rr=new j,Pr=new j,ca=new j,xo=new j,So=new j,Dr=new j;function Zl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Dr.fromArray(r,s);const o=i.x*Math.abs(Dr.x)+i.y*Math.abs(Dr.y)+i.z*Math.abs(Dr.z),l=e.dot(Dr),c=t.dot(Dr),u=n.dot(Dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const p0=new Qa,ua=new j,Jl=new j;class bl{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):p0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ua.subVectors(e,this.center);const t=ua.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ua,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ua.copy(e.center).add(Jl)),this.expandByPoint(ua.copy(e.center).sub(Jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new j,Ql=new j,yo=new j,sr=new j,ec=new j,Mo=new j,tc=new j;class em{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ql.copy(e).add(t).multiplyScalar(.5),yo.copy(t).sub(e).normalize(),sr.copy(this.origin).sub(Ql);const s=e.distanceTo(t)*.5,a=-this.direction.dot(yo),o=sr.dot(this.direction),l=-sr.dot(yo),c=sr.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ql).addScaledVector(yo,d),f}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const n=Oi.dot(this.direction),i=Oi.dot(Oi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,i,s){ec.subVectors(t,e),Mo.subVectors(n,e),tc.crossVectors(ec,Mo);let a=this.direction.dot(tc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;sr.subVectors(this.origin,e);const l=o*this.direction.dot(Mo.crossVectors(sr,Mo));if(l<0)return null;const c=o*this.direction.dot(ec.cross(sr));if(c<0||l+c>a)return null;const u=-o*sr.dot(tc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,t,n,i,s,a,o,l,c,u,h,d,f,g,_,m){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,d,f,g,_,m)}set(e,t,n,i,s,a,o,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/gs.setFromMatrixColumn(e,0).length(),s=1/gs.setFromMatrixColumn(e,1).length(),a=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m0,e,_0)}lookAt(e,t,n){const i=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),ar.crossVectors(n,Wn),ar.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),ar.crossVectors(n,Wn)),ar.normalize(),Eo.crossVectors(Wn,ar),i[0]=ar.x,i[4]=Eo.x,i[8]=Wn.x,i[1]=ar.y,i[5]=Eo.y,i[9]=Wn.y,i[2]=ar.z,i[6]=Eo.z,i[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],T=n[7],x=n[11],w=n[15],A=i[0],b=i[4],P=i[8],S=i[12],v=i[1],D=i[5],N=i[9],U=i[13],B=i[2],X=i[6],W=i[10],H=i[14],z=i[3],q=i[7],R=i[11],ne=i[15];return s[0]=a*A+o*v+l*B+c*z,s[4]=a*b+o*D+l*X+c*q,s[8]=a*P+o*N+l*W+c*R,s[12]=a*S+o*U+l*H+c*ne,s[1]=u*A+h*v+d*B+f*z,s[5]=u*b+h*D+d*X+f*q,s[9]=u*P+h*N+d*W+f*R,s[13]=u*S+h*U+d*H+f*ne,s[2]=g*A+_*v+m*B+p*z,s[6]=g*b+_*D+m*X+p*q,s[10]=g*P+_*N+m*W+p*R,s[14]=g*S+_*U+m*H+p*ne,s[3]=E*A+T*v+x*B+w*z,s[7]=E*b+T*D+x*X+w*q,s[11]=E*P+T*N+x*W+w*R,s[15]=E*S+T*U+x*H+w*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*f-n*l*f)+_*(+t*l*f-t*c*d+s*a*d-i*a*f+i*c*u-s*l*u)+m*(+t*c*h-t*o*f-s*a*h+n*a*f+s*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],E=h*m*c-_*d*c+_*l*f-o*m*f-h*l*p+o*d*p,T=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,x=u*_*c-g*h*c+g*o*f-a*_*f-u*o*p+a*h*p,w=g*h*l-u*_*l-g*o*d+a*_*d+u*o*m-a*h*m,A=t*E+n*T+i*x+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=E*b,e[1]=(_*d*s-h*m*s-_*i*f+n*m*f+h*i*p-n*d*p)*b,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*b,e[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*f-n*l*f)*b,e[4]=T*b,e[5]=(u*m*s-g*d*s+g*i*f-t*m*f-u*i*p+t*d*p)*b,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*p-t*l*p)*b,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*f+t*l*f)*b,e[8]=x*b,e[9]=(g*h*s-u*_*s-g*n*f+t*_*f+u*n*p-t*h*p)*b,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*b,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*f-t*o*f)*b,e[12]=w*b,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*b,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*b,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,g=s*h,_=a*u,m=a*h,p=o*h,E=l*c,T=l*u,x=l*h,w=n.x,A=n.y,b=n.z;return i[0]=(1-(_+p))*w,i[1]=(f+x)*w,i[2]=(g-T)*w,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(d+p))*A,i[6]=(m+E)*A,i[7]=0,i[8]=(g+T)*b,i[9]=(m-E)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=gs.set(i[0],i[1],i[2]).length();const a=gs.set(i[4],i[5],i[6]).length(),o=gs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],vi.copy(this);const c=1/s,u=1/a,h=1/o;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=u,vi.elements[5]*=u,vi.elements[6]*=u,vi.elements[8]*=h,vi.elements[9]*=h,vi.elements[10]*=h,t.setFromRotationMatrix(vi),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=$i){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(o===$i)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===_l)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=$i){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-s),d=(t+e)*c,f=(n+i)*u;let g,_;if(o===$i)g=(a+s)*h,_=-2*h;else if(o===_l)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gs=new j,vi=new zt,m0=new j(0,0,0),_0=new j(1,1,1),ar=new j,Eo=new j,Wn=new j,xh=new zt,Sh=new Ja;class tr{constructor(e=0,t=0,n=0,i=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class tm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let g0=0;const yh=new j,vs=new Ja,Bi=new zt,To=new j,da=new j,v0=new j,x0=new Ja,Mh=new j(1,0,0),Eh=new j(0,1,0),Th=new j(0,0,1),bh={type:"added"},S0={type:"removed"},xs={type:"childadded",child:null},nc={type:"childremoved",child:null};class kn extends na{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new j,t=new tr,n=new Ja,i=new j(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new zt},normalMatrix:{value:new Ze}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Mh,e)}rotateY(e){return this.rotateOnAxis(Eh,e)}rotateZ(e){return this.rotateOnAxis(Th,e)}translateOnAxis(e,t){return yh.copy(e).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mh,e)}translateY(e){return this.translateOnAxis(Eh,e)}translateZ(e){return this.translateOnAxis(Th,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?To.copy(e):To.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(da,To,this.up):Bi.lookAt(To,da,this.up),this.quaternion.setFromRotationMatrix(Bi),i&&(Bi.extractRotation(i.matrixWorld),vs.setFromRotationMatrix(Bi),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bh),xs.child=e,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(S0),nc.child=e,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bh),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,v0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,x0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?{min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}:void 0,boundingSphere:o.boundingSphere?{radius:o.boundingSphere.radius,center:o.boundingSphere.center.toArray()}:void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}kn.DEFAULT_UP=new j(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new j,ki=new j,ic=new j,zi=new j,Ss=new j,ys=new j,wh=new j,rc=new j,sc=new j,ac=new j,oc=new Bt,lc=new Bt,cc=new Bt;class yi{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xi.subVectors(e,t),i.cross(xi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){xi.subVectors(i,t),ki.subVectors(n,t),ic.subVectors(e,t);const a=xi.dot(xi),o=xi.dot(ki),l=xi.dot(ic),c=ki.dot(ki),u=ki.dot(ic),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zi.x),l.addScaledVector(a,zi.y),l.addScaledVector(o,zi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return oc.setScalar(0),lc.setScalar(0),cc.setScalar(0),oc.fromBufferAttribute(e,t),lc.fromBufferAttribute(e,n),cc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(oc,s.x),a.addScaledVector(lc,s.y),a.addScaledVector(cc,s.z),a}static isFrontFacing(e,t,n,i){return xi.subVectors(n,t),ki.subVectors(e,t),xi.cross(ki).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),xi.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return yi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ss.subVectors(i,n),ys.subVectors(s,n),rc.subVectors(e,n);const l=Ss.dot(rc),c=ys.dot(rc);if(l<=0&&c<=0)return t.copy(n);sc.subVectors(e,i);const u=Ss.dot(sc),h=ys.dot(sc);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ss,a);ac.subVectors(e,s);const f=Ss.dot(ac),g=ys.dot(ac);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ys,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return wh.subVectors(s,i),o=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(wh,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Ss,a).addScaledVector(ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},bo={h:0,s:0,l:0};function uc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class pt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=i0(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=uc(a,s,e+1/3),this.g=uc(a,s,e),this.b=uc(a,s,e-1/3)}return ft.toWorkingColorSpace(this,i),this}setStyle(e,t=li){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=li){const n=nm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return ft.fromWorkingColorSpace(cn.copy(this),e),Math.round(at(cn.r*255,0,255))*65536+Math.round(at(cn.g*255,0,255))*256+Math.round(at(cn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(cn.copy(this),t);const n=cn.r,i=cn.g,s=cn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=li){ft.fromWorkingColorSpace(cn.copy(this),e);const t=cn.r,n=cn.g,i=cn.b;return e!==li?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(bo);const n=Yl(or.h,bo.h,t),i=Yl(or.s,bo.s,t),s=Yl(or.l,bo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new pt;pt.NAMES=nm;let y0=0;class eo extends na{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Za(),this.name="",this.type="Material",this.blending=ks,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=jc,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==br&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$c&&(n.blendSrc=this.blendSrc),this.blendDst!==jc&&(n.blendDst=this.blendDst),this.blendEquation!==Hr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class im extends eo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=Hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new j,wo=new St;let M0=0;class wn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:M0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fh,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wo.fromBufferAttribute(this,t),wo.applyMatrix3(e),this.setXY(t,wo.x,wo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=la(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=la(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=la(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=la(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=la(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),i=Pn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),i=Pn(i,this.array),s=Pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fh&&(e.usage=this.usage),e}}class rm extends wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sm extends wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class es extends wn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let E0=0;const ai=new zt,dc=new kn,Ms=new j,Xn=new Qa,ha=new Qa,Qt=new j;class Ni extends na{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jp(e)?sm:rm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,n){return ai.makeTranslation(e,t,n),this.applyMatrix4(ai),this}scale(e,t,n){return ai.makeScale(e,t,n),this.applyMatrix4(ai),this}lookAt(e){return dc.lookAt(e),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new es(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ha.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(Xn.min,ha.min),Xn.expandByPoint(Qt),Qt.addVectors(Xn.max,ha.max),Xn.expandByPoint(Qt)):(Xn.expandByPoint(ha.min),Xn.expandByPoint(ha.max))}Xn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Qt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Qt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Qt.fromBufferAttribute(o,c),l&&(Ms.fromBufferAttribute(e,c),Qt.add(Ms)),i=Math.max(i,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new j,l[P]=new j;const c=new j,u=new j,h=new j,d=new St,f=new St,g=new St,_=new j,m=new j;function p(P,S,v){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,v),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,v),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(D),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),o[P].add(_),o[S].add(_),o[v].add(_),l[P].add(m),l[S].add(m),l[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,S=E.length;P<S;++P){const v=E[P],D=v.start,N=v.count;for(let U=D,B=D+N;U<B;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const T=new j,x=new j,w=new j,A=new j;function b(P){w.fromBufferAttribute(i,P),A.copy(w);const S=o[P];T.copy(S),T.sub(w.multiplyScalar(w.dot(S))).normalize(),x.crossVectors(A,S);const D=x.dot(l[P])<0?-1:1;a.setXYZW(P,T.x,T.y,T.z,D)}for(let P=0,S=E.length;P<S;++P){const v=E[P],D=v.start,N=v.count;for(let U=D,B=D+N;U<B;U+=3)b(e.getX(U+0)),b(e.getX(U+1)),b(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new j,s=new j,a=new j,o=new j,l=new j,c=new j,u=new j,h=new j;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new wn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ni,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ah=new zt,Lr=new em,Ao=new bl,Ch=new j,Co=new j,Ro=new j,Po=new j,hc=new j,Do=new j,Rh=new j,Lo=new j;class Li extends kn{constructor(e=new Ni,t=new im){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Do.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(hc.fromBufferAttribute(h,e),a?Do.addScaledVector(hc,u):Do.addScaledVector(hc.sub(t),u))}t.add(Do)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(Ao.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Ao,Ch)===null||Lr.origin.distanceToSquared(Ch)>(e.far-e.near)**2))&&(Ah.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(Ah),!(n.boundingBox!==null&&Lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Lr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=E,w=T;x<w;x+=3){const A=o.getX(x),b=o.getX(x+1),P=o.getX(x+2);i=Io(this,p,e,n,c,u,h,A,b,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=o.getX(m),T=o.getX(m+1),x=o.getX(m+2);i=Io(this,a,e,n,c,u,h,E,T,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=E,w=T;x<w;x+=3){const A=x,b=x+1,P=x+2;i=Io(this,p,e,n,c,u,h,A,b,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=m,T=m+1,x=m+2;i=Io(this,a,e,n,c,u,h,E,T,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function T0(r,e,t,n,i,s,a,o){let l;if(e.side===On?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===br,o),l===null)return null;Lo.copy(o),Lo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Lo);return c<t.near||c>t.far?null:{distance:c,point:Lo.clone(),object:r}}function Io(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Co),r.getVertexPosition(l,Ro),r.getVertexPosition(c,Po);const u=T0(r,e,t,n,Co,Ro,Po,Rh);if(u){const h=new j;yi.getBarycoord(Rh,Co,Ro,Po,h),i&&(u.uv=yi.getInterpolatedAttribute(i,o,l,c,h,new St)),s&&(u.uv1=yi.getInterpolatedAttribute(s,o,l,c,h,new St)),a&&(u.normal=yi.getInterpolatedAttribute(a,o,l,c,h,new j),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new j,materialIndex:0};yi.getNormal(Co,Ro,Po,d.normal),u.face=d,u.barycoord=h}return u}class to extends Ni{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new es(c,3)),this.setAttribute("normal",new es(u,3)),this.setAttribute("uv",new es(h,2));function g(_,m,p,E,T,x,w,A,b,P,S){const v=x/b,D=w/P,N=x/2,U=w/2,B=A/2,X=b+1,W=P+1;let H=0,z=0;const q=new j;for(let R=0;R<W;R++){const ne=R*D-U;for(let Re=0;Re<X;Re++){const fe=Re*v-N;q[_]=fe*E,q[m]=ne*T,q[p]=B,c.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[p]=A>0?1:-1,u.push(q.x,q.y,q.z),h.push(Re/b),h.push(1-R/P),H+=1}}for(let R=0;R<P;R++)for(let ne=0;ne<b;ne++){const Re=d+ne+X*R,fe=d+ne+X*(R+1),$=d+(ne+1)+X*(R+1),ie=d+(ne+1)+X*R;l.push(Re,fe,ie),l.push(fe,$,ie),z+=6}o.addGroup(f,z,S),f+=z,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ea(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Sn(r){const e={};for(let t=0;t<r.length;t++){const n=ea(r[t]);for(const i in n)e[i]=n[i]}return e}function b0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function am(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const w0={clone:ea,merge:Sn};var A0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends eo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A0,this.fragmentShader=C0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=b0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class om extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new j,Ph=new St,Dh=new St;class di extends om{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Iu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ql*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Iu*2*Math.atan(Math.tan(ql*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,Ph,Dh),t.subVectors(Dh,Ph)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ql*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Es=-90,Ts=1;class R0 extends kn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new di(Es,Ts,e,t);i.layers=this.layers,this.add(i);const s=new di(Es,Ts,e,t);s.layers=this.layers,this.add(s);const a=new di(Es,Ts,e,t);a.layers=this.layers,this.add(a);const o=new di(Es,Ts,e,t);o.layers=this.layers,this.add(o);const l=new di(Es,Ts,e,t);l.layers=this.layers,this.add(l);const c=new di(Es,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===$i)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_l)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class lm extends Bn{constructor(e=[],t=Zs,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class P0 extends as{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new lm(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Di}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new to(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:ea(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:Sr});s.uniforms.tEquirect.value=t;const a=new Li(i,s),o=t.minFilter;return t.minFilter===qr&&(t.minFilter=Di),new R0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class Uo extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D0={type:"move"};class fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(D0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Uo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class L0 extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pc=new j,I0=new j,U0=new Ze;class kr{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=pc.subVectors(n,t).cross(I0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(pc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||U0.getNormalMatrix(e),i=this.coplanarPoint(pc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new bl,No=new j;class cm{constructor(e=new kr,t=new kr,n=new kr,i=new kr,s=new kr,a=new kr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$i){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],E=i[13],T=i[14],x=i[15];if(n[0].setComponents(l-s,d-c,m-f,x-p).normalize(),n[1].setComponents(l+s,d+c,m+f,x+p).normalize(),n[2].setComponents(l+a,d+u,m+g,x+E).normalize(),n[3].setComponents(l-a,d-u,m-g,x-E).normalize(),n[4].setComponents(l-o,d-h,m-_,x-T).normalize(),t===$i)n[5].setComponents(l+o,d+h,m+_,x+T).normalize();else if(t===_l)n[5].setComponents(o,h,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(No.x=i.normal.x>0?e.max.x:e.min.x,No.y=i.normal.y>0?e.max.y:e.min.y,No.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class N0 extends eo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lh=new zt,Uu=new em,Fo=new bl,Oo=new j;class Ih extends kn{constructor(e=new Ni,t=new N0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(i),Fo.radius+=s,e.ray.intersectsSphere(Fo)===!1)return;Lh.copy(i).invert(),Uu.copy(e.ray).applyMatrix4(Lh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Oo.fromBufferAttribute(h,m),Uh(Oo,m,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Oo.fromBufferAttribute(h,g),Uh(Oo,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Uh(r,e,t,n,i,s,a){const o=Uu.distanceSqToPoint(r);if(o<t){const l=new j;Uu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class um extends Bn{constructor(e,t,n=ss,i,s,a,o=Ei,l=Ei,c,u=qa){if(u!==qa&&u!==Ya)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _d(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class no extends Ni{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*d-a;for(let T=0;T<c;T++){const x=T*h-s;g.push(x,-E,0),_.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const T=E+c*p,x=E+c*(p+1),w=E+1+c*(p+1),A=E+1+c*p;f.push(T,x,A),f.push(x,w,A)}this.setIndex(f),this.setAttribute("position",new es(g,3)),this.setAttribute("normal",new es(_,3)),this.setAttribute("uv",new es(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.widthSegments,e.heightSegments)}}class F0 extends eo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class O0 extends eo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class B0 extends om{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class k0 extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Nh(r,e,t,n){const i=z0(n);switch(t){case qp:return r*e;case $p:return r*e/i.components*i.byteLength;case fd:return r*e/i.components*i.byteLength;case jp:return r*e*2/i.components*i.byteLength;case pd:return r*e*2/i.components*i.byteLength;case Yp:return r*e*3/i.components*i.byteLength;case Mi:return r*e*4/i.components*i.byteLength;case md:return r*e*4/i.components*i.byteLength;case Ko:case Zo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Jo:case Qo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case lu:case uu:return Math.max(r,16)*Math.max(e,8)/4;case ou:case cu:return Math.max(r,8)*Math.max(e,8)/2;case du:case hu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case fu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case pu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case _u:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case gu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case vu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case xu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Su:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case yu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Mu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Eu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Tu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case bu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case wu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Au:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case el:case Cu:case Ru:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Kp:case Pu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Du:case Lu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function z0(r){switch(r){case er:case Vp:return{byteLength:1,components:1};case Wa:case Wp:case Ka:return{byteLength:2,components:1};case dd:case hd:return{byteLength:2,components:4};case ss:case ud:case Yi:return{byteLength:4,components:1};case Xp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dm(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function H0(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var G0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V0=`#ifdef USE_ALPHAHASH
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
#endif`,W0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$0=`#ifdef USE_AOMAP
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
#endif`,j0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K0=`#ifdef USE_BATCHING
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
#endif`,Z0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ev=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tv=`#ifdef USE_IRIDESCENCE
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
#endif`,nv=`#ifdef USE_BUMPMAP
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
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ov=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dv=`#define PI 3.141592653589793
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
} // validated`,hv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fv=`vec3 transformedNormal = objectNormal;
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
#endif`,pv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_v=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vv="gl_FragColor = linearToOutputTexel( gl_FragColor );",xv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sv=`#ifdef USE_ENVMAP
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
#endif`,yv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mv=`#ifdef USE_ENVMAP
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
#endif`,Ev=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tv=`#ifdef USE_ENVMAP
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
#endif`,bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Av=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rv=`#ifdef USE_GRADIENTMAP
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
}`,Pv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iv=`uniform bool receiveShadow;
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
#endif`,Uv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ov=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kv=`PhysicalMaterial material;
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
#endif`,zv=`struct PhysicalMaterial {
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
}`,Hv=`
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
#endif`,Gv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$v=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zv=`#if defined( USE_POINTS_UV )
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
#endif`,Jv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`#ifdef USE_MORPHTARGETS
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
#endif`,rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ax=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ux=`#ifdef USE_NORMALMAP
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
#endif`,dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_x=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wx=`float getShadowMask() {
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
}`,Ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cx=`#ifdef USE_SKINNING
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
#endif`,Rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Px=`#ifdef USE_SKINNING
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
#endif`,Dx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ux=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nx=`#ifdef USE_TRANSMISSION
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
#endif`,Fx=`#ifdef USE_TRANSMISSION
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gx=`uniform sampler2D t2D;
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
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`#include <common>
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
}`,$x=`#if DEPTH_PACKING == 3200
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
}`,jx=`#define DISTANCE
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
}`,Kx=`#define DISTANCE
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
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`uniform float scale;
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
}`,eS=`uniform vec3 diffuse;
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
}`,tS=`#include <common>
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
}`,nS=`uniform vec3 diffuse;
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
}`,iS=`#define LAMBERT
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
}`,rS=`#define LAMBERT
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
}`,sS=`#define MATCAP
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
}`,aS=`#define MATCAP
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
}`,oS=`#define NORMAL
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
}`,lS=`#define NORMAL
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
}`,cS=`#define PHONG
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
}`,uS=`#define PHONG
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
}`,dS=`#define STANDARD
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
}`,hS=`#define STANDARD
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
}`,fS=`#define TOON
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
}`,pS=`#define TOON
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
}`,mS=`uniform float size;
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
}`,_S=`uniform vec3 diffuse;
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
}`,gS=`#include <common>
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
}`,vS=`uniform vec3 color;
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
}`,xS=`uniform float rotation;
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
}`,SS=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:G0,alphahash_pars_fragment:V0,alphamap_fragment:W0,alphamap_pars_fragment:X0,alphatest_fragment:q0,alphatest_pars_fragment:Y0,aomap_fragment:$0,aomap_pars_fragment:j0,batching_pars_vertex:K0,batching_vertex:Z0,begin_vertex:J0,beginnormal_vertex:Q0,bsdfs:ev,iridescence_fragment:tv,bumpmap_pars_fragment:nv,clipping_planes_fragment:iv,clipping_planes_pars_fragment:rv,clipping_planes_pars_vertex:sv,clipping_planes_vertex:av,color_fragment:ov,color_pars_fragment:lv,color_pars_vertex:cv,color_vertex:uv,common:dv,cube_uv_reflection_fragment:hv,defaultnormal_vertex:fv,displacementmap_pars_vertex:pv,displacementmap_vertex:mv,emissivemap_fragment:_v,emissivemap_pars_fragment:gv,colorspace_fragment:vv,colorspace_pars_fragment:xv,envmap_fragment:Sv,envmap_common_pars_fragment:yv,envmap_pars_fragment:Mv,envmap_pars_vertex:Ev,envmap_physical_pars_fragment:Uv,envmap_vertex:Tv,fog_vertex:bv,fog_pars_vertex:wv,fog_fragment:Av,fog_pars_fragment:Cv,gradientmap_pars_fragment:Rv,lightmap_pars_fragment:Pv,lights_lambert_fragment:Dv,lights_lambert_pars_fragment:Lv,lights_pars_begin:Iv,lights_toon_fragment:Nv,lights_toon_pars_fragment:Fv,lights_phong_fragment:Ov,lights_phong_pars_fragment:Bv,lights_physical_fragment:kv,lights_physical_pars_fragment:zv,lights_fragment_begin:Hv,lights_fragment_maps:Gv,lights_fragment_end:Vv,logdepthbuf_fragment:Wv,logdepthbuf_pars_fragment:Xv,logdepthbuf_pars_vertex:qv,logdepthbuf_vertex:Yv,map_fragment:$v,map_pars_fragment:jv,map_particle_fragment:Kv,map_particle_pars_fragment:Zv,metalnessmap_fragment:Jv,metalnessmap_pars_fragment:Qv,morphinstance_vertex:ex,morphcolor_vertex:tx,morphnormal_vertex:nx,morphtarget_pars_vertex:ix,morphtarget_vertex:rx,normal_fragment_begin:sx,normal_fragment_maps:ax,normal_pars_fragment:ox,normal_pars_vertex:lx,normal_vertex:cx,normalmap_pars_fragment:ux,clearcoat_normal_fragment_begin:dx,clearcoat_normal_fragment_maps:hx,clearcoat_pars_fragment:fx,iridescence_pars_fragment:px,opaque_fragment:mx,packing:_x,premultiplied_alpha_fragment:gx,project_vertex:vx,dithering_fragment:xx,dithering_pars_fragment:Sx,roughnessmap_fragment:yx,roughnessmap_pars_fragment:Mx,shadowmap_pars_fragment:Ex,shadowmap_pars_vertex:Tx,shadowmap_vertex:bx,shadowmask_pars_fragment:wx,skinbase_vertex:Ax,skinning_pars_vertex:Cx,skinning_vertex:Rx,skinnormal_vertex:Px,specularmap_fragment:Dx,specularmap_pars_fragment:Lx,tonemapping_fragment:Ix,tonemapping_pars_fragment:Ux,transmission_fragment:Nx,transmission_pars_fragment:Fx,uv_pars_fragment:Ox,uv_pars_vertex:Bx,uv_vertex:kx,worldpos_vertex:zx,background_vert:Hx,background_frag:Gx,backgroundCube_vert:Vx,backgroundCube_frag:Wx,cube_vert:Xx,cube_frag:qx,depth_vert:Yx,depth_frag:$x,distanceRGBA_vert:jx,distanceRGBA_frag:Kx,equirect_vert:Zx,equirect_frag:Jx,linedashed_vert:Qx,linedashed_frag:eS,meshbasic_vert:tS,meshbasic_frag:nS,meshlambert_vert:iS,meshlambert_frag:rS,meshmatcap_vert:sS,meshmatcap_frag:aS,meshnormal_vert:oS,meshnormal_frag:lS,meshphong_vert:cS,meshphong_frag:uS,meshphysical_vert:dS,meshphysical_frag:hS,meshtoon_vert:fS,meshtoon_frag:pS,points_vert:mS,points_frag:_S,shadow_vert:gS,shadow_frag:vS,sprite_vert:xS,sprite_frag:SS},_e={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Ai={basic:{uniforms:Sn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Sn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new pt(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Sn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Sn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Sn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new pt(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Sn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Sn([_e.points,_e.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Sn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Sn([_e.common,_e.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Sn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Sn([_e.sprite,_e.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Sn([_e.common,_e.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Sn([_e.lights,_e.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Ai.physical={uniforms:Sn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Bo={r:0,b:0,g:0},Ur=new tr,yS=new zt;function MS(r,e,t,n,i,s,a){const o=new pt(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(T){let x=T.isScene===!0?T.background:null;return x&&x.isTexture&&(x=(T.backgroundBlurriness>0?t:e).get(x)),x}function _(T){let x=!1;const w=g(T);w===null?p(o,l):w&&w.isColor&&(p(w,1),x=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(T,x){const w=g(x);w&&(w.isCubeTexture||w.mapping===Tl)?(u===void 0&&(u=new Li(new to(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:ea(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ur.copy(x.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yS.makeRotationFromEuler(Ur)),u.material.toneMapped=ft.getTransfer(w.colorSpace)!==xt,(h!==w||d!==w.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=w,d=w.version,f=r.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Li(new no(2,2),new Ti({name:"BackgroundMaterial",uniforms:ea(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ft.getTransfer(w.colorSpace)!==xt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,f=r.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,x){T.getRGB(Bo,am(r)),n.buffers.color.setClear(Bo.r,Bo.g,Bo.b,x,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,x=1){o.set(T),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(o,l)},render:_,addToRenderList:m,dispose:E}}function ES(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(v,D,N,U,B){let X=!1;const W=h(U,N,D);s!==W&&(s=W,c(s.object)),X=f(v,U,N,B),X&&g(v,U,N,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(v,D,N,U),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function h(v,D,N){const U=N.wireframe===!0;let B=n[v.id];B===void 0&&(B={},n[v.id]=B);let X=B[D.id];X===void 0&&(X={},B[D.id]=X);let W=X[U];return W===void 0&&(W=d(l()),X[U]=W),W}function d(v){const D=[],N=[],U=[];for(let B=0;B<t;B++)D[B]=0,N[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:U,object:v,attributes:{},index:null}}function f(v,D,N,U){const B=s.attributes,X=D.attributes;let W=0;const H=N.getAttributes();for(const z in H)if(H[z].location>=0){const R=B[z];let ne=X[z];if(ne===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(ne=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(ne=v.instanceColor)),R===void 0||R.attribute!==ne||ne&&R.data!==ne.data)return!0;W++}return s.attributesNum!==W||s.index!==U}function g(v,D,N,U){const B={},X=D.attributes;let W=0;const H=N.getAttributes();for(const z in H)if(H[z].location>=0){let R=X[z];R===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(R=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(R=v.instanceColor));const ne={};ne.attribute=R,R&&R.data&&(ne.data=R.data),B[z]=ne,W++}s.attributes=B,s.attributesNum=W,s.index=U}function _(){const v=s.newAttributes;for(let D=0,N=v.length;D<N;D++)v[D]=0}function m(v){p(v,0)}function p(v,D){const N=s.newAttributes,U=s.enabledAttributes,B=s.attributeDivisors;N[v]=1,U[v]===0&&(r.enableVertexAttribArray(v),U[v]=1),B[v]!==D&&(r.vertexAttribDivisor(v,D),B[v]=D)}function E(){const v=s.newAttributes,D=s.enabledAttributes;for(let N=0,U=D.length;N<U;N++)D[N]!==v[N]&&(r.disableVertexAttribArray(N),D[N]=0)}function T(v,D,N,U,B,X,W){W===!0?r.vertexAttribIPointer(v,D,N,B,X):r.vertexAttribPointer(v,D,N,U,B,X)}function x(v,D,N,U){_();const B=U.attributes,X=N.getAttributes(),W=D.defaultAttributeValues;for(const H in X){const z=X[H];if(z.location>=0){let q=B[H];if(q===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(q=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(q=v.instanceColor)),q!==void 0){const R=q.normalized,ne=q.itemSize,Re=e.get(q);if(Re===void 0)continue;const fe=Re.buffer,$=Re.type,ie=Re.bytesPerElement,ce=$===r.INT||$===r.UNSIGNED_INT||q.gpuType===ud;if(q.isInterleavedBufferAttribute){const se=q.data,Ee=se.stride,Ve=q.offset;if(se.isInstancedInterleavedBuffer){for(let Ne=0;Ne<z.locationSize;Ne++)p(z.location+Ne,se.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ne=0;Ne<z.locationSize;Ne++)m(z.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let Ne=0;Ne<z.locationSize;Ne++)T(z.location+Ne,ne/z.locationSize,$,R,Ee*ie,(Ve+ne/z.locationSize*Ne)*ie,ce)}else{if(q.isInstancedBufferAttribute){for(let se=0;se<z.locationSize;se++)p(z.location+se,q.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let se=0;se<z.locationSize;se++)m(z.location+se);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let se=0;se<z.locationSize;se++)T(z.location+se,ne/z.locationSize,$,R,ne*ie,ne/z.locationSize*se*ie,ce)}}else if(W!==void 0){const R=W[H];if(R!==void 0)switch(R.length){case 2:r.vertexAttrib2fv(z.location,R);break;case 3:r.vertexAttrib3fv(z.location,R);break;case 4:r.vertexAttrib4fv(z.location,R);break;default:r.vertexAttrib1fv(z.location,R)}}}}E()}function w(){P();for(const v in n){const D=n[v];for(const N in D){const U=D[N];for(const B in U)u(U[B].object),delete U[B];delete D[N]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const D=n[v.id];for(const N in D){const U=D[N];for(const B in U)u(U[B].object),delete U[B];delete D[N]}delete n[v.id]}function b(v){for(const D in n){const N=n[D];if(N[v.id]===void 0)continue;const U=N[v.id];for(const B in U)u(U[B].object),delete U[B];delete N[v.id]}}function P(){S(),a=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function TS(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function bS(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==Mi&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const P=b===Ka&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==er&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Yi&&!P)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:x,vertexTextures:w,maxSamples:A}}function wS(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new kr,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const E=s?0:n,T=E*4;let x=p.clippingState||null;l.value=x,x=u(g,d,T,f);for(let w=0;w!==T;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,x=f;T!==_;++T,x+=4)a.copy(h[T]).applyMatrix4(E,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function AS(r){let e=new WeakMap;function t(a,o){return o===iu?a.mapping=Zs:o===ru&&(a.mapping=Js),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===iu||o===ru)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new P0(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ds=4,Fh=[.125,.215,.35,.446,.526,.582],Gr=20,mc=new B0,Oh=new pt;let _c=null,gc=0,vc=0,xc=!1;const zr=(1+Math.sqrt(5))/2,bs=1/zr,Bh=[new j(-zr,bs,0),new j(zr,bs,0),new j(-bs,0,zr),new j(bs,0,zr),new j(0,zr,-bs),new j(0,zr,bs),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],CS=new j;class kh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=CS}=s;_c=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_c,gc,vc),this._renderer.xr.enabled=xc,e.scissorTest=!1,ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_c=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:Ka,format:Mi,colorSpace:Qs,depthBuffer:!1},i=zh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RS(s)),this._blurMaterial=PS(s,e,t)}return i}_compileMaterial(e){const t=new Li(this._lodPlanes[0],e);this._renderer.compile(t,mc)}_sceneToCubeUV(e,t,n,i,s){const l=new di(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Oh),h.toneMapping=yr,h.autoClear=!1;const g=new im({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),_=new Li(new to,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Oh),m=!0);for(let E=0;E<6;E++){const T=E%3;T===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):T===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const x=this._cubeSize;ko(i,T*x,E>2?x:0,x,x),h.setRenderTarget(i),m&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Zs||e.mapping===Js;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Li(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ko(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,mc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Bh[(i-s-1)%Bh.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Li(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Gr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Gr;m>Gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gr}`);const p=[];let E=0;for(let b=0;b<Gr;++b){const P=b/_,S=Math.exp(-P*P/2);p.push(S),b===0?E+=S:b<m&&(E+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;const x=this._sizeLods[i],w=3*x*(i>T-Ds?i-T+Ds:0),A=4*(this._cubeSize-x);ko(t,w,A,3*x,2*x),l.setRenderTarget(t),l.render(h,mc)}}function RS(r){const e=[],t=[],n=[];let i=r;const s=r-Ds+1+Fh.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Ds?l=Fh[a-r+Ds-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*f),T=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const b=A%3*2/3-1,P=A>2?0:-1,S=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];E.set(S,_*g*A),T.set(d,m*g*A);const v=[A,A,A,A,A,A];x.set(v,p*g*A)}const w=new Ni;w.setAttribute("position",new wn(E,_)),w.setAttribute("uv",new wn(T,m)),w.setAttribute("faceIndex",new wn(x,p)),e.push(w),i>Ds&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zh(r,e,t){const n=new as(r,e,t);return n.texture.mapping=Tl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ko(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function PS(r,e,t){const n=new Float32Array(Gr),i=new j(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gd(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Hh(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gd(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Gh(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function gd(){return`

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
	`}function DS(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===iu||l===ru,u=l===Zs||l===Js;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new kh(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new kh(r)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function LS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&tl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function IS(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let T=0,x=E.length;T<x;T+=3){const w=E[T+0],A=E[T+1],b=E[T+2];d.push(w,A,A,b,b,w)}}else if(g!==void 0){const E=g.array;_=g.version;for(let T=0,x=E.length/3-1;T<x;T+=3){const w=T+0,A=T+1,b=T+2;d.push(w,A,A,b,b,w)}}else return;const m=new(Jp(d)?sm:rm)(d,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function US(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*_[E];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function NS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function FS(r,e,t){const n=new WeakMap,i=new Bt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let v=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let w=o.attributes.position.count*x,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const b=new Float32Array(w*A*4*h),P=new Qp(b,w,A,h);P.type=Yi,P.needsUpdate=!0;const S=x*4;for(let D=0;D<h;D++){const N=p[D],U=E[D],B=T[D],X=w*A*4*D;for(let W=0;W<N.count;W++){const H=W*S;g===!0&&(i.fromBufferAttribute(N,W),b[X+H+0]=i.x,b[X+H+1]=i.y,b[X+H+2]=i.z,b[X+H+3]=0),_===!0&&(i.fromBufferAttribute(U,W),b[X+H+4]=i.x,b[X+H+5]=i.y,b[X+H+6]=i.z,b[X+H+7]=0),m===!0&&(i.fromBufferAttribute(B,W),b[X+H+8]=i.x,b[X+H+9]=i.y,b[X+H+10]=i.z,b[X+H+11]=B.itemSize===4?i.w:1)}}d={count:h,texture:P,size:new St(w,A)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function OS(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const hm=new Bn,Vh=new um(1,1),fm=new Qp,pm=new f0,mm=new lm,Wh=[],Xh=[],qh=new Float32Array(16),Yh=new Float32Array(9),$h=new Float32Array(4);function ia(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Wh[i];if(s===void 0&&(s=new Float32Array(i),Wh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Zt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Jt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function wl(r,e){let t=Xh[e];t===void 0&&(t=new Int32Array(e),Xh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function BS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function kS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2fv(this.addr,e),Jt(t,e)}}function zS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;r.uniform3fv(this.addr,e),Jt(t,e)}}function HS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4fv(this.addr,e),Jt(t,e)}}function GS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;$h.set(n),r.uniformMatrix2fv(this.addr,!1,$h),Jt(t,n)}}function VS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;Yh.set(n),r.uniformMatrix3fv(this.addr,!1,Yh),Jt(t,n)}}function WS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;qh.set(n),r.uniformMatrix4fv(this.addr,!1,qh),Jt(t,n)}}function XS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function qS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2iv(this.addr,e),Jt(t,e)}}function YS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3iv(this.addr,e),Jt(t,e)}}function $S(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4iv(this.addr,e),Jt(t,e)}}function jS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function KS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2uiv(this.addr,e),Jt(t,e)}}function ZS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3uiv(this.addr,e),Jt(t,e)}}function JS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4uiv(this.addr,e),Jt(t,e)}}function QS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Vh.compareFunction=Zp,s=Vh):s=hm,t.setTexture2D(e||s,i)}function ey(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||pm,i)}function ty(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||mm,i)}function ny(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||fm,i)}function iy(r){switch(r){case 5126:return BS;case 35664:return kS;case 35665:return zS;case 35666:return HS;case 35674:return GS;case 35675:return VS;case 35676:return WS;case 5124:case 35670:return XS;case 35667:case 35671:return qS;case 35668:case 35672:return YS;case 35669:case 35673:return $S;case 5125:return jS;case 36294:return KS;case 36295:return ZS;case 36296:return JS;case 35678:case 36198:case 36298:case 36306:case 35682:return QS;case 35679:case 36299:case 36307:return ey;case 35680:case 36300:case 36308:case 36293:return ty;case 36289:case 36303:case 36311:case 36292:return ny}}function ry(r,e){r.uniform1fv(this.addr,e)}function sy(r,e){const t=ia(e,this.size,2);r.uniform2fv(this.addr,t)}function ay(r,e){const t=ia(e,this.size,3);r.uniform3fv(this.addr,t)}function oy(r,e){const t=ia(e,this.size,4);r.uniform4fv(this.addr,t)}function ly(r,e){const t=ia(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function cy(r,e){const t=ia(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function uy(r,e){const t=ia(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function dy(r,e){r.uniform1iv(this.addr,e)}function hy(r,e){r.uniform2iv(this.addr,e)}function fy(r,e){r.uniform3iv(this.addr,e)}function py(r,e){r.uniform4iv(this.addr,e)}function my(r,e){r.uniform1uiv(this.addr,e)}function _y(r,e){r.uniform2uiv(this.addr,e)}function gy(r,e){r.uniform3uiv(this.addr,e)}function vy(r,e){r.uniform4uiv(this.addr,e)}function xy(r,e,t){const n=this.cache,i=e.length,s=wl(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||hm,s[a])}function Sy(r,e,t){const n=this.cache,i=e.length,s=wl(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||pm,s[a])}function yy(r,e,t){const n=this.cache,i=e.length,s=wl(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||mm,s[a])}function My(r,e,t){const n=this.cache,i=e.length,s=wl(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||fm,s[a])}function Ey(r){switch(r){case 5126:return ry;case 35664:return sy;case 35665:return ay;case 35666:return oy;case 35674:return ly;case 35675:return cy;case 35676:return uy;case 5124:case 35670:return dy;case 35667:case 35671:return hy;case 35668:case 35672:return fy;case 35669:case 35673:return py;case 5125:return my;case 36294:return _y;case 36295:return gy;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return Sy;case 35680:case 36300:case 36308:case 36293:return yy;case 36289:case 36303:case 36311:case 36292:return My}}class Ty{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=iy(t.type)}}class by{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ey(t.type)}}class wy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Sc=/(\w+)(\])?(\[|\.)?/g;function jh(r,e){r.seq.push(e),r.map[e.id]=e}function Ay(r,e,t){const n=r.name,i=n.length;for(Sc.lastIndex=0;;){const s=Sc.exec(n),a=Sc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){jh(t,c===void 0?new Ty(o,r,e):new by(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new wy(o),jh(t,h)),t=h}}}class nl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Ay(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Kh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Cy=37297;let Ry=0;function Py(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Zh=new Ze;function Dy(r){ft._getMatrix(Zh,ft.workingColorSpace,r);const e=`mat3( ${Zh.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(r)){case ml:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Jh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Py(r.getShaderSource(e),a)}else return i}function Ly(r,e){const t=Dy(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Iy(r,e){let t;switch(e){case Bg:t="Linear";break;case kg:t="Reinhard";break;case zg:t="Cineon";break;case Hg:t="ACESFilmic";break;case Vg:t="AgX";break;case Wg:t="Neutral";break;case Gg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zo=new j;function Uy(){ft.getLuminanceCoefficients(zo);const r=zo.x.toFixed(4),e=zo.y.toFixed(4),t=zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ny(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function Fy(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Oy(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Sa(r){return r!==""}function Qh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ef(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const By=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nu(r){return r.replace(By,zy)}const ky=new Map;function zy(r,e){let t=Je[e];if(t===void 0){const n=ky.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Nu(t)}const Hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tf(r){return r.replace(Hy,Gy)}function Gy(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function nf(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function Vy(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===zp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===gg?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function Wy(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Zs:case Js:e="ENVMAP_TYPE_CUBE";break;case Tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xy(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function qy(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Hp:e="ENVMAP_BLENDING_MULTIPLY";break;case Fg:e="ENVMAP_BLENDING_MIX";break;case Og:e="ENVMAP_BLENDING_ADD";break}return e}function Yy(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $y(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Vy(t),c=Wy(t),u=Xy(t),h=qy(t),d=Yy(t),f=Ny(t),g=Fy(s),_=i.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Sa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Sa).join(`
`),p.length>0&&(p+=`
`)):(m=[nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),p=[nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yr?"#define TONE_MAPPING":"",t.toneMapping!==yr?Je.tonemapping_pars_fragment:"",t.toneMapping!==yr?Iy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Ly("linearToOutputTexel",t.outputColorSpace),Uy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sa).join(`
`)),a=Nu(a),a=Qh(a,t),a=ef(a,t),o=Nu(o),o=Qh(o,t),o=ef(o,t),a=tf(a),o=tf(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=E+m+a,x=E+p+o,w=Kh(i,i.VERTEX_SHADER,T),A=Kh(i,i.FRAGMENT_SHADER,x);i.attachShader(_,w),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(D){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),U=i.getShaderInfoLog(w).trim(),B=i.getShaderInfoLog(A).trim();let X=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,w,A);else{const H=Jh(i,w,"vertex"),z=Jh(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+H+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||B==="")&&(W=!1);W&&(D.diagnostics={runnable:X,programLog:N,vertexShader:{log:U,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(w),i.deleteShader(A),P=new nl(i,_),S=Oy(i,_)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Cy)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ry++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=A,this}let jy=0;class Ky{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zy(e),t.set(e,n)),n}}class Zy{constructor(e){this.id=jy++,this.code=e,this.usedTimes=0}}function Jy(r,e,t,n,i,s,a){const o=new tm,l=new Ky,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,v,D,N,U){const B=N.fog,X=U.geometry,W=S.isMeshStandardMaterial?N.environment:null,H=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),z=H&&H.mapping===Tl?H.image.height:null,q=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const R=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ne=R!==void 0?R.length:0;let Re=0;X.morphAttributes.position!==void 0&&(Re=1),X.morphAttributes.normal!==void 0&&(Re=2),X.morphAttributes.color!==void 0&&(Re=3);let fe,$,ie,ce;if(q){const ve=Ai[q];fe=ve.vertexShader,$=ve.fragmentShader}else fe=S.vertexShader,$=S.fragmentShader,l.update(S),ie=l.getVertexShaderID(S),ce=l.getFragmentShaderID(S);const se=r.getRenderTarget(),Ee=r.state.buffers.depth.getReversed(),Ve=U.isInstancedMesh===!0,Ne=U.isBatchedMesh===!0,rt=!!S.map,et=!!S.matcap,ye=!!H,L=!!S.aoMap,yt=!!S.lightMap,Xe=!!S.bumpMap,k=!!S.normalMap,Te=!!S.displacementMap,st=!!S.emissiveMap,we=!!S.metalnessMap,C=!!S.roughnessMap,y=S.anisotropy>0,G=S.clearcoat>0,J=S.dispersion>0,ee=S.iridescence>0,Z=S.sheen>0,ue=S.transmission>0,oe=y&&!!S.anisotropyMap,Ae=G&&!!S.clearcoatMap,De=G&&!!S.clearcoatNormalMap,re=G&&!!S.clearcoatRoughnessMap,ae=ee&&!!S.iridescenceMap,Oe=ee&&!!S.iridescenceThicknessMap,Fe=Z&&!!S.sheenColorMap,xe=Z&&!!S.sheenRoughnessMap,je=!!S.specularMap,Ge=!!S.specularColorMap,lt=!!S.specularIntensityMap,I=ue&&!!S.transmissionMap,de=ue&&!!S.thicknessMap,K=!!S.gradientMap,Q=!!S.alphaMap,le=S.alphaTest>0,he=!!S.alphaHash,We=!!S.extensions;let dt=yr;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(dt=r.toneMapping);const It={shaderID:q,shaderType:S.type,shaderName:S.name,vertexShader:fe,fragmentShader:$,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&U._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&U.instanceColor!==null,instancingMorph:Ve&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Qs,alphaToCoverage:!!S.alphaToCoverage,map:rt,matcap:et,envMap:ye,envMapMode:ye&&H.mapping,envMapCubeUVHeight:z,aoMap:L,lightMap:yt,bumpMap:Xe,normalMap:k,displacementMap:d&&Te,emissiveMap:st,normalMapObjectSpace:k&&S.normalMapType===jg,normalMapTangentSpace:k&&S.normalMapType===$g,metalnessMap:we,roughnessMap:C,anisotropy:y,anisotropyMap:oe,clearcoat:G,clearcoatMap:Ae,clearcoatNormalMap:De,clearcoatRoughnessMap:re,dispersion:J,iridescence:ee,iridescenceMap:ae,iridescenceThicknessMap:Oe,sheen:Z,sheenColorMap:Fe,sheenRoughnessMap:xe,specularMap:je,specularColorMap:Ge,specularIntensityMap:lt,transmission:ue,transmissionMap:I,thicknessMap:de,gradientMap:K,opaque:S.transparent===!1&&S.blending===ks&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:le,alphaHash:he,combine:S.combine,mapUv:rt&&_(S.map.channel),aoMapUv:L&&_(S.aoMap.channel),lightMapUv:yt&&_(S.lightMap.channel),bumpMapUv:Xe&&_(S.bumpMap.channel),normalMapUv:k&&_(S.normalMap.channel),displacementMapUv:Te&&_(S.displacementMap.channel),emissiveMapUv:st&&_(S.emissiveMap.channel),metalnessMapUv:we&&_(S.metalnessMap.channel),roughnessMapUv:C&&_(S.roughnessMap.channel),anisotropyMapUv:oe&&_(S.anisotropyMap.channel),clearcoatMapUv:Ae&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:De&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(S.sheenRoughnessMap.channel),specularMapUv:je&&_(S.specularMap.channel),specularColorMapUv:Ge&&_(S.specularColorMap.channel),specularIntensityMapUv:lt&&_(S.specularIntensityMap.channel),transmissionMapUv:I&&_(S.transmissionMap.channel),thicknessMapUv:de&&_(S.thicknessMap.channel),alphaMapUv:Q&&_(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(k||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(rt||Q),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ee,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Re,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:dt,decodeVideoTexture:rt&&S.map.isVideoTexture===!0&&ft.getTransfer(S.map.colorSpace)===xt,decodeVideoTextureEmissive:st&&S.emissiveMap.isVideoTexture===!0&&ft.getTransfer(S.emissiveMap.colorSpace)===xt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xi,flipSided:S.side===On,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:We&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&S.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function p(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)v.push(D),v.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(E(v,S),T(v,S),v.push(r.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function E(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function T(S,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const v=g[S.type];let D;if(v){const N=Ai[v];D=w0.clone(N.uniforms)}else D=S.uniforms;return D}function w(S,v){let D;for(let N=0,U=u.length;N<U;N++){const B=u[N];if(B.cacheKey===v){D=B,++D.usedTimes;break}}return D===void 0&&(D=new $y(r,v,S,s),u.push(D)),D}function A(S){if(--S.usedTimes===0){const v=u.indexOf(S);u[v]=u[u.length-1],u.pop(),S.destroy()}}function b(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:P}}function Qy(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function eM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function rf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function sf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,f,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||eM),n.length>1&&n.sort(d||rf),i.length>1&&i.sort(d||rf)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function tM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new sf,r.set(n,[a])):i>=s.length?(a=new sf,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function nM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new pt};break;case"SpotLight":t={position:new j,direction:new j,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new j,halfWidth:new j,halfHeight:new j};break}return r[e.id]=t,t}}}function iM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let rM=0;function sM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function aM(r){const e=new nM,t=iM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new j);const i=new j,s=new zt,a=new zt;function o(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,E=0,T=0,x=0,w=0,A=0,b=0;c.sort(sM);for(let S=0,v=c.length;S<v;S++){const D=c[S],N=D.color,U=D.intensity,B=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=N.r*U,h+=N.g*U,d+=N.b*U;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],U);b++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const H=D.shadow,z=t.get(D);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=D.shadow.matrix,E++}n.directional[f]=W,f++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(N).multiplyScalar(U),W.distance=B,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[_]=W;const H=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,H.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[_]=H.matrix,D.castShadow){const z=t.get(D);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=X,x++}_++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(N).multiplyScalar(U),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=W,m++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const H=D.shadow,z=t.get(D);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,z.shadowCameraNear=H.camera.near,z.shadowCameraFar=H.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=D.shadow.matrix,T++}n.point[g]=W,g++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(U),W.groundColor.copy(D.groundColor).multiplyScalar(U),n.hemi[p]=W,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==E||P.numPointShadows!==T||P.numSpotShadows!==x||P.numSpotMaps!==w||P.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=x+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=E,P.numPointShadows=T,P.numSpotShadows=x,P.numSpotMaps=w,P.numLightProbes=b,n.version=rM++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const T=c[p];if(T.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(T.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(T.width*.5,0,0),x.halfHeight.set(0,T.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(T.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function af(r){const e=new aM(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function oM(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new af(r),e.set(i,[o])):s>=a.length?(o=new af(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const lM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cM=`uniform sampler2D shadow_pass;
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
}`;function uM(r,e,t){let n=new cm;const i=new St,s=new St,a=new Bt,o=new F0({depthPacking:Yg}),l=new O0,c={},u=t.maxTextureSize,h={[br]:On,[On]:br,[Xi]:Xi},d=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:lM,fragmentShader:cM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ni;g.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Li(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zp;let p=this.type;this.render=function(A,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=r.getRenderTarget(),v=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),N=r.state;N.setBlending(Sr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=p!==Hi&&this.type===Hi,B=p===Hi&&this.type!==Hi;for(let X=0,W=A.length;X<W;X++){const H=A[X],z=H.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const q=z.getFrameExtents();if(i.multiply(q),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/q.x),i.x=s.x*q.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/q.y),i.y=s.y*q.y,z.mapSize.y=s.y)),z.map===null||U===!0||B===!0){const ne=this.type!==Hi?{minFilter:Ei,magFilter:Ei}:{};z.map!==null&&z.map.dispose(),z.map=new as(i.x,i.y,ne),z.map.texture.name=H.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const R=z.getViewportCount();for(let ne=0;ne<R;ne++){const Re=z.getViewport(ne);a.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),N.viewport(a),z.updateMatrices(H,ne),n=z.getFrustum(),x(b,P,z.camera,H,this.type)}z.isPointLightShadow!==!0&&this.type===Hi&&E(z,P),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,v,D)};function E(A,b){const P=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new as(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(b,null,P,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(b,null,P,f,_,null)}function T(A,b,P,S){let v=null;const D=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)v=D;else if(v=P.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const N=v.uuid,U=b.uuid;let B=c[N];B===void 0&&(B={},c[N]=B);let X=B[U];X===void 0&&(X=v.clone(),B[U]=X,b.addEventListener("dispose",w)),v=X}if(v.visible=b.visible,v.wireframe=b.wireframe,S===Hi?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:h[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=r.properties.get(v);N.light=P}return v}function x(A,b,P,S,v){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Hi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const U=e.update(A),B=A.material;if(Array.isArray(B)){const X=U.groups;for(let W=0,H=X.length;W<H;W++){const z=X[W],q=B[z.materialIndex];if(q&&q.visible){const R=T(A,q,S,v);A.onBeforeShadow(r,A,b,P,U,R,z),r.renderBufferDirect(P,null,U,R,A,z),A.onAfterShadow(r,A,b,P,U,R,z)}}}else if(B.visible){const X=T(A,B,S,v);A.onBeforeShadow(r,A,b,P,U,X,null),r.renderBufferDirect(P,null,U,X,A,null),A.onAfterShadow(r,A,b,P,U,X,null)}}const N=A.children;for(let U=0,B=N.length;U<B;U++)x(N[U],b,P,S,v)}function w(A){A.target.removeEventListener("dispose",w);for(const P in c){const S=c[P],v=A.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const dM={[Kc]:Zc,[Jc]:tu,[Qc]:nu,[Ks]:eu,[Zc]:Kc,[tu]:Jc,[nu]:Qc,[eu]:Ks};function hM(r,e){function t(){let I=!1;const de=new Bt;let K=null;const Q=new Bt(0,0,0,0);return{setMask:function(le){K!==le&&!I&&(r.colorMask(le,le,le,le),K=le)},setLocked:function(le){I=le},setClear:function(le,he,We,dt,It){It===!0&&(le*=dt,he*=dt,We*=dt),de.set(le,he,We,dt),Q.equals(de)===!1&&(r.clearColor(le,he,We,dt),Q.copy(de))},reset:function(){I=!1,K=null,Q.set(-1,0,0,0)}}}function n(){let I=!1,de=!1,K=null,Q=null,le=null;return{setReversed:function(he){if(de!==he){const We=e.get("EXT_clip_control");he?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),de=he;const dt=le;le=null,this.setClear(dt)}},getReversed:function(){return de},setTest:function(he){he?se(r.DEPTH_TEST):Ee(r.DEPTH_TEST)},setMask:function(he){K!==he&&!I&&(r.depthMask(he),K=he)},setFunc:function(he){if(de&&(he=dM[he]),Q!==he){switch(he){case Kc:r.depthFunc(r.NEVER);break;case Zc:r.depthFunc(r.ALWAYS);break;case Jc:r.depthFunc(r.LESS);break;case Ks:r.depthFunc(r.LEQUAL);break;case Qc:r.depthFunc(r.EQUAL);break;case eu:r.depthFunc(r.GEQUAL);break;case tu:r.depthFunc(r.GREATER);break;case nu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Q=he}},setLocked:function(he){I=he},setClear:function(he){le!==he&&(de&&(he=1-he),r.clearDepth(he),le=he)},reset:function(){I=!1,K=null,Q=null,le=null,de=!1}}}function i(){let I=!1,de=null,K=null,Q=null,le=null,he=null,We=null,dt=null,It=null;return{setTest:function(ve){I||(ve?se(r.STENCIL_TEST):Ee(r.STENCIL_TEST))},setMask:function(ve){de!==ve&&!I&&(r.stencilMask(ve),de=ve)},setFunc:function(ve,Ce,Ke){(K!==ve||Q!==Ce||le!==Ke)&&(r.stencilFunc(ve,Ce,Ke),K=ve,Q=Ce,le=Ke)},setOp:function(ve,Ce,Ke){(he!==ve||We!==Ce||dt!==Ke)&&(r.stencilOp(ve,Ce,Ke),he=ve,We=Ce,dt=Ke)},setLocked:function(ve){I=ve},setClear:function(ve){It!==ve&&(r.clearStencil(ve),It=ve)},reset:function(){I=!1,de=null,K=null,Q=null,le=null,he=null,We=null,dt=null,It=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,T=null,x=null,w=null,A=null,b=new pt(0,0,0),P=0,S=!1,v=null,D=null,N=null,U=null,B=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,H=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(z)[1]),W=H>=1):z.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),W=H>=2);let q=null,R={};const ne=r.getParameter(r.SCISSOR_BOX),Re=r.getParameter(r.VIEWPORT),fe=new Bt().fromArray(ne),$=new Bt().fromArray(Re);function ie(I,de,K,Q){const le=new Uint8Array(4),he=r.createTexture();r.bindTexture(I,he),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let We=0;We<K;We++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(de,0,r.RGBA,1,1,Q,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(de+We,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return he}const ce={};ce[r.TEXTURE_2D]=ie(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(r.DEPTH_TEST),a.setFunc(Ks),Xe(!1),k(ch),se(r.CULL_FACE),L(Sr);function se(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function Ee(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Ve(I,de){return h[I]!==de?(r.bindFramebuffer(I,de),h[I]=de,I===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=de),I===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=de),!0):!1}function Ne(I,de){let K=f,Q=!1;if(I){K=d.get(de),K===void 0&&(K=[],d.set(de,K));const le=I.textures;if(K.length!==le.length||K[0]!==r.COLOR_ATTACHMENT0){for(let he=0,We=le.length;he<We;he++)K[he]=r.COLOR_ATTACHMENT0+he;K.length=le.length,Q=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,Q=!0);Q&&r.drawBuffers(K)}function rt(I){return g!==I?(r.useProgram(I),g=I,!0):!1}const et={[Hr]:r.FUNC_ADD,[xg]:r.FUNC_SUBTRACT,[Sg]:r.FUNC_REVERSE_SUBTRACT};et[yg]=r.MIN,et[Mg]=r.MAX;const ye={[Eg]:r.ZERO,[Tg]:r.ONE,[bg]:r.SRC_COLOR,[$c]:r.SRC_ALPHA,[Dg]:r.SRC_ALPHA_SATURATE,[Rg]:r.DST_COLOR,[Ag]:r.DST_ALPHA,[wg]:r.ONE_MINUS_SRC_COLOR,[jc]:r.ONE_MINUS_SRC_ALPHA,[Pg]:r.ONE_MINUS_DST_COLOR,[Cg]:r.ONE_MINUS_DST_ALPHA,[Lg]:r.CONSTANT_COLOR,[Ig]:r.ONE_MINUS_CONSTANT_COLOR,[Ug]:r.CONSTANT_ALPHA,[Ng]:r.ONE_MINUS_CONSTANT_ALPHA};function L(I,de,K,Q,le,he,We,dt,It,ve){if(I===Sr){_===!0&&(Ee(r.BLEND),_=!1);return}if(_===!1&&(se(r.BLEND),_=!0),I!==vg){if(I!==m||ve!==S){if((p!==Hr||x!==Hr)&&(r.blendEquation(r.FUNC_ADD),p=Hr,x=Hr),ve)switch(I){case ks:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ia:r.blendFunc(r.ONE,r.ONE);break;case uh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case dh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ks:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ia:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case uh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case dh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,T=null,w=null,A=null,b.set(0,0,0),P=0,m=I,S=ve}return}le=le||de,he=he||K,We=We||Q,(de!==p||le!==x)&&(r.blendEquationSeparate(et[de],et[le]),p=de,x=le),(K!==E||Q!==T||he!==w||We!==A)&&(r.blendFuncSeparate(ye[K],ye[Q],ye[he],ye[We]),E=K,T=Q,w=he,A=We),(dt.equals(b)===!1||It!==P)&&(r.blendColor(dt.r,dt.g,dt.b,It),b.copy(dt),P=It),m=I,S=!1}function yt(I,de){I.side===Xi?Ee(r.CULL_FACE):se(r.CULL_FACE);let K=I.side===On;de&&(K=!K),Xe(K),I.blending===ks&&I.transparent===!1?L(Sr):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const Q=I.stencilWrite;o.setTest(Q),Q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),st(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):Ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(I){v!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),v=I)}function k(I){I!==mg?(se(r.CULL_FACE),I!==D&&(I===ch?r.cullFace(r.BACK):I===_g?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ee(r.CULL_FACE),D=I}function Te(I){I!==N&&(W&&r.lineWidth(I),N=I)}function st(I,de,K){I?(se(r.POLYGON_OFFSET_FILL),(U!==de||B!==K)&&(r.polygonOffset(de,K),U=de,B=K)):Ee(r.POLYGON_OFFSET_FILL)}function we(I){I?se(r.SCISSOR_TEST):Ee(r.SCISSOR_TEST)}function C(I){I===void 0&&(I=r.TEXTURE0+X-1),q!==I&&(r.activeTexture(I),q=I)}function y(I,de,K){K===void 0&&(q===null?K=r.TEXTURE0+X-1:K=q);let Q=R[K];Q===void 0&&(Q={type:void 0,texture:void 0},R[K]=Q),(Q.type!==I||Q.texture!==de)&&(q!==K&&(r.activeTexture(K),q=K),r.bindTexture(I,de||ce[I]),Q.type=I,Q.texture=de)}function G(){const I=R[q];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{r.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{r.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{r.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{r.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{r.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{r.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{r.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{r.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{r.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Oe(){try{r.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(I){fe.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),fe.copy(I))}function xe(I){$.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function je(I,de){let K=c.get(de);K===void 0&&(K=new WeakMap,c.set(de,K));let Q=K.get(I);Q===void 0&&(Q=r.getUniformBlockIndex(de,I.name),K.set(I,Q))}function Ge(I,de){const Q=c.get(de).get(I);l.get(de)!==Q&&(r.uniformBlockBinding(de,Q,I.__bindingPointIndex),l.set(de,Q))}function lt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},q=null,R={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,T=null,x=null,w=null,A=null,b=new pt(0,0,0),P=0,S=!1,v=null,D=null,N=null,U=null,B=null,fe.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:Ee,bindFramebuffer:Ve,drawBuffers:Ne,useProgram:rt,setBlending:L,setMaterial:yt,setFlipSided:Xe,setCullFace:k,setLineWidth:Te,setPolygonOffset:st,setScissorTest:we,activeTexture:C,bindTexture:y,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:ee,texImage2D:ae,texImage3D:Oe,updateUBOMapping:je,uniformBlockBinding:Ge,texStorage2D:De,texStorage3D:re,texSubImage2D:Z,texSubImage3D:ue,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ae,scissor:Fe,viewport:xe,reset:lt}}function fM(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return f?new OffscreenCanvas(C,y):gl("canvas")}function _(C,y,G){let J=1;const ee=we(C);if((ee.width>G||ee.height>G)&&(J=G/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(J*ee.width),ue=Math.floor(J*ee.height);h===void 0&&(h=g(Z,ue));const oe=y?g(Z,ue):h;return oe.width=Z,oe.height=ue,oe.getContext("2d").drawImage(C,0,0,Z,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+ue+")."),oe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(C,y,G,J,ee=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=y;if(y===r.RED&&(G===r.FLOAT&&(Z=r.R32F),G===r.HALF_FLOAT&&(Z=r.R16F),G===r.UNSIGNED_BYTE&&(Z=r.R8)),y===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.R8UI),G===r.UNSIGNED_SHORT&&(Z=r.R16UI),G===r.UNSIGNED_INT&&(Z=r.R32UI),G===r.BYTE&&(Z=r.R8I),G===r.SHORT&&(Z=r.R16I),G===r.INT&&(Z=r.R32I)),y===r.RG&&(G===r.FLOAT&&(Z=r.RG32F),G===r.HALF_FLOAT&&(Z=r.RG16F),G===r.UNSIGNED_BYTE&&(Z=r.RG8)),y===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RG8UI),G===r.UNSIGNED_SHORT&&(Z=r.RG16UI),G===r.UNSIGNED_INT&&(Z=r.RG32UI),G===r.BYTE&&(Z=r.RG8I),G===r.SHORT&&(Z=r.RG16I),G===r.INT&&(Z=r.RG32I)),y===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),G===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),G===r.UNSIGNED_INT&&(Z=r.RGB32UI),G===r.BYTE&&(Z=r.RGB8I),G===r.SHORT&&(Z=r.RGB16I),G===r.INT&&(Z=r.RGB32I)),y===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),G===r.UNSIGNED_INT&&(Z=r.RGBA32UI),G===r.BYTE&&(Z=r.RGBA8I),G===r.SHORT&&(Z=r.RGBA16I),G===r.INT&&(Z=r.RGBA32I)),y===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),y===r.RGBA){const ue=ee?ml:ft.getTransfer(J);G===r.FLOAT&&(Z=r.RGBA32F),G===r.HALF_FLOAT&&(Z=r.RGBA16F),G===r.UNSIGNED_BYTE&&(Z=ue===xt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(C,y){let G;return C?y===null||y===ss||y===Xa?G=r.DEPTH24_STENCIL8:y===Yi?G=r.DEPTH32F_STENCIL8:y===Wa&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ss||y===Xa?G=r.DEPTH_COMPONENT24:y===Yi?G=r.DEPTH_COMPONENT32F:y===Wa&&(G=r.DEPTH_COMPONENT16),G}function w(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ei&&C.minFilter!==Di?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){const y=C.target;y.removeEventListener("dispose",A),P(y),y.isVideoTexture&&u.delete(y)}function b(C){const y=C.target;y.removeEventListener("dispose",b),v(y)}function P(C){const y=n.get(C);if(y.__webglInit===void 0)return;const G=C.source,J=d.get(G);if(J){const ee=J[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(C),Object.keys(J).length===0&&d.delete(G)}n.remove(C)}function S(C){const y=n.get(C);r.deleteTexture(y.__webglTexture);const G=C.source,J=d.get(G);delete J[y.__cacheKey],a.memory.textures--}function v(C){const y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let ee=0;ee<y.__webglFramebuffer[J].length;ee++)r.deleteFramebuffer(y.__webglFramebuffer[J][ee]);else r.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)r.deleteFramebuffer(y.__webglFramebuffer[J]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=C.textures;for(let J=0,ee=G.length;J<ee;J++){const Z=n.get(G[J]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(G[J])}n.remove(C)}let D=0;function N(){D=0}function U(){const C=D;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function B(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function X(C,y){const G=n.get(C);if(C.isVideoTexture&&Te(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(G,C,y);return}}t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+y)}function W(C,y){const G=n.get(C);if(C.version>0&&G.__version!==C.version){$(G,C,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+y)}function H(C,y){const G=n.get(C);if(C.version>0&&G.__version!==C.version){$(G,C,y);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+y)}function z(C,y){const G=n.get(C);if(C.version>0&&G.__version!==C.version){ie(G,C,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+y)}const q={[su]:r.REPEAT,[Xr]:r.CLAMP_TO_EDGE,[au]:r.MIRRORED_REPEAT},R={[Ei]:r.NEAREST,[Xg]:r.NEAREST_MIPMAP_NEAREST,[go]:r.NEAREST_MIPMAP_LINEAR,[Di]:r.LINEAR,[Xl]:r.LINEAR_MIPMAP_NEAREST,[qr]:r.LINEAR_MIPMAP_LINEAR},ne={[Kg]:r.NEVER,[n0]:r.ALWAYS,[Zg]:r.LESS,[Zp]:r.LEQUAL,[Jg]:r.EQUAL,[t0]:r.GEQUAL,[Qg]:r.GREATER,[e0]:r.NOTEQUAL};function Re(C,y){if(y.type===Yi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Di||y.magFilter===Xl||y.magFilter===go||y.magFilter===qr||y.minFilter===Di||y.minFilter===Xl||y.minFilter===go||y.minFilter===qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,q[y.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,q[y.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,q[y.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,R[y.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,R[y.minFilter]),y.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ne[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ei||y.minFilter!==go&&y.minFilter!==qr||y.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function fe(C,y){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",A));const J=y.source;let ee=d.get(J);ee===void 0&&(ee={},d.set(J,ee));const Z=B(y);if(Z!==C.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ee[Z].usedTimes++;const ue=ee[C.__cacheKey];ue!==void 0&&(ee[C.__cacheKey].usedTimes--,ue.usedTimes===0&&S(y)),C.__cacheKey=Z,C.__webglTexture=ee[Z].texture}return G}function $(C,y,G){let J=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=r.TEXTURE_3D);const ee=fe(C,y),Z=y.source;t.bindTexture(J,C.__webglTexture,r.TEXTURE0+G);const ue=n.get(Z);if(Z.version!==ue.__version||ee===!0){t.activeTexture(r.TEXTURE0+G);const oe=ft.getPrimaries(ft.workingColorSpace),Ae=y.colorSpace===dr?null:ft.getPrimaries(y.colorSpace),De=y.colorSpace===dr||oe===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let re=_(y.image,!1,i.maxTextureSize);re=st(y,re);const ae=s.convert(y.format,y.colorSpace),Oe=s.convert(y.type);let Fe=T(y.internalFormat,ae,Oe,y.colorSpace,y.isVideoTexture);Re(J,y);let xe;const je=y.mipmaps,Ge=y.isVideoTexture!==!0,lt=ue.__version===void 0||ee===!0,I=Z.dataReady,de=w(y,re);if(y.isDepthTexture)Fe=x(y.format===Ya,y.type),lt&&(Ge?t.texStorage2D(r.TEXTURE_2D,1,Fe,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,Fe,re.width,re.height,0,ae,Oe,null));else if(y.isDataTexture)if(je.length>0){Ge&&lt&&t.texStorage2D(r.TEXTURE_2D,de,Fe,je[0].width,je[0].height);for(let K=0,Q=je.length;K<Q;K++)xe=je[K],Ge?I&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,xe.width,xe.height,ae,Oe,xe.data):t.texImage2D(r.TEXTURE_2D,K,Fe,xe.width,xe.height,0,ae,Oe,xe.data);y.generateMipmaps=!1}else Ge?(lt&&t.texStorage2D(r.TEXTURE_2D,de,Fe,re.width,re.height),I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,re.width,re.height,ae,Oe,re.data)):t.texImage2D(r.TEXTURE_2D,0,Fe,re.width,re.height,0,ae,Oe,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ge&&lt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,Fe,je[0].width,je[0].height,re.depth);for(let K=0,Q=je.length;K<Q;K++)if(xe=je[K],y.format!==Mi)if(ae!==null)if(Ge){if(I)if(y.layerUpdates.size>0){const le=Nh(xe.width,xe.height,y.format,y.type);for(const he of y.layerUpdates){const We=xe.data.subarray(he*le/xe.data.BYTES_PER_ELEMENT,(he+1)*le/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,he,xe.width,xe.height,1,ae,We)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,xe.width,xe.height,re.depth,ae,xe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,Fe,xe.width,xe.height,re.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?I&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,xe.width,xe.height,re.depth,ae,Oe,xe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,K,Fe,xe.width,xe.height,re.depth,0,ae,Oe,xe.data)}else{Ge&&lt&&t.texStorage2D(r.TEXTURE_2D,de,Fe,je[0].width,je[0].height);for(let K=0,Q=je.length;K<Q;K++)xe=je[K],y.format!==Mi?ae!==null?Ge?I&&t.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,xe.width,xe.height,ae,xe.data):t.compressedTexImage2D(r.TEXTURE_2D,K,Fe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?I&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,xe.width,xe.height,ae,Oe,xe.data):t.texImage2D(r.TEXTURE_2D,K,Fe,xe.width,xe.height,0,ae,Oe,xe.data)}else if(y.isDataArrayTexture)if(Ge){if(lt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,Fe,re.width,re.height,re.depth),I)if(y.layerUpdates.size>0){const K=Nh(re.width,re.height,y.format,y.type);for(const Q of y.layerUpdates){const le=re.data.subarray(Q*K/re.data.BYTES_PER_ELEMENT,(Q+1)*K/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,ae,Oe,le)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ae,Oe,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,re.width,re.height,re.depth,0,ae,Oe,re.data);else if(y.isData3DTexture)Ge?(lt&&t.texStorage3D(r.TEXTURE_3D,de,Fe,re.width,re.height,re.depth),I&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ae,Oe,re.data)):t.texImage3D(r.TEXTURE_3D,0,Fe,re.width,re.height,re.depth,0,ae,Oe,re.data);else if(y.isFramebufferTexture){if(lt)if(Ge)t.texStorage2D(r.TEXTURE_2D,de,Fe,re.width,re.height);else{let K=re.width,Q=re.height;for(let le=0;le<de;le++)t.texImage2D(r.TEXTURE_2D,le,Fe,K,Q,0,ae,Oe,null),K>>=1,Q>>=1}}else if(je.length>0){if(Ge&&lt){const K=we(je[0]);t.texStorage2D(r.TEXTURE_2D,de,Fe,K.width,K.height)}for(let K=0,Q=je.length;K<Q;K++)xe=je[K],Ge?I&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,ae,Oe,xe):t.texImage2D(r.TEXTURE_2D,K,Fe,ae,Oe,xe);y.generateMipmaps=!1}else if(Ge){if(lt){const K=we(re);t.texStorage2D(r.TEXTURE_2D,de,Fe,K.width,K.height)}I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae,Oe,re)}else t.texImage2D(r.TEXTURE_2D,0,Fe,ae,Oe,re);m(y)&&p(J),ue.__version=Z.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ie(C,y,G){if(y.image.length!==6)return;const J=fe(C,y),ee=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+G);const Z=n.get(ee);if(ee.version!==Z.__version||J===!0){t.activeTexture(r.TEXTURE0+G);const ue=ft.getPrimaries(ft.workingColorSpace),oe=y.colorSpace===dr?null:ft.getPrimaries(y.colorSpace),Ae=y.colorSpace===dr||ue===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const De=y.isCompressedTexture||y.image[0].isCompressedTexture,re=y.image[0]&&y.image[0].isDataTexture,ae=[];for(let Q=0;Q<6;Q++)!De&&!re?ae[Q]=_(y.image[Q],!0,i.maxCubemapSize):ae[Q]=re?y.image[Q].image:y.image[Q],ae[Q]=st(y,ae[Q]);const Oe=ae[0],Fe=s.convert(y.format,y.colorSpace),xe=s.convert(y.type),je=T(y.internalFormat,Fe,xe,y.colorSpace),Ge=y.isVideoTexture!==!0,lt=Z.__version===void 0||J===!0,I=ee.dataReady;let de=w(y,Oe);Re(r.TEXTURE_CUBE_MAP,y);let K;if(De){Ge&&lt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,de,je,Oe.width,Oe.height);for(let Q=0;Q<6;Q++){K=ae[Q].mipmaps;for(let le=0;le<K.length;le++){const he=K[le];y.format!==Mi?Fe!==null?Ge?I&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,0,0,he.width,he.height,Fe,he.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,je,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,0,0,he.width,he.height,Fe,xe,he.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,je,he.width,he.height,0,Fe,xe,he.data)}}}else{if(K=y.mipmaps,Ge&&lt){K.length>0&&de++;const Q=we(ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,de,je,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){Ge?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ae[Q].width,ae[Q].height,Fe,xe,ae[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,je,ae[Q].width,ae[Q].height,0,Fe,xe,ae[Q].data);for(let le=0;le<K.length;le++){const We=K[le].image[Q].image;Ge?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,0,0,We.width,We.height,Fe,xe,We.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,je,We.width,We.height,0,Fe,xe,We.data)}}else{Ge?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Fe,xe,ae[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,je,Fe,xe,ae[Q]);for(let le=0;le<K.length;le++){const he=K[le];Ge?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,0,0,Fe,xe,he.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,je,Fe,xe,he.image[Q])}}}m(y)&&p(r.TEXTURE_CUBE_MAP),Z.__version=ee.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ce(C,y,G,J,ee,Z){const ue=s.convert(G.format,G.colorSpace),oe=s.convert(G.type),Ae=T(G.internalFormat,ue,oe,G.colorSpace),De=n.get(y),re=n.get(G);if(re.__renderTarget=y,!De.__hasExternalTextures){const ae=Math.max(1,y.width>>Z),Oe=Math.max(1,y.height>>Z);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,Z,Ae,ae,Oe,y.depth,0,ue,oe,null):t.texImage2D(ee,Z,Ae,ae,Oe,0,ue,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),k(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,ee,re.__webglTexture,0,Xe(y)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,ee,re.__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function se(C,y,G){if(r.bindRenderbuffer(r.RENDERBUFFER,C),y.depthBuffer){const J=y.depthTexture,ee=J&&J.isDepthTexture?J.type:null,Z=x(y.stencilBuffer,ee),ue=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=Xe(y);k(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,Z,y.width,y.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,Z,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Z,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,C)}else{const J=y.textures;for(let ee=0;ee<J.length;ee++){const Z=J[ee],ue=s.convert(Z.format,Z.colorSpace),oe=s.convert(Z.type),Ae=T(Z.internalFormat,ue,oe,Z.colorSpace),De=Xe(y);G&&k(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,De,Ae,y.width,y.height):k(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,De,Ae,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Ae,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ee(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(y.depthTexture);J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const ee=J.__webglTexture,Z=Xe(y);if(y.depthTexture.format===qa)k(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0);else if(y.depthTexture.format===Ya)k(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ve(C){const y=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){const ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",ee)};J.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=J}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const J=C.texture.mipmaps;J&&J.length>0?Ee(y.__webglFramebuffer[0],C):Ee(y.__webglFramebuffer,C)}else if(G){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=r.createRenderbuffer(),se(y.__webglDepthbuffer[J],C,!1);else{const ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,Z)}}else{const J=C.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),se(y.__webglDepthbuffer,C,!1);else{const ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,Z)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(C,y,G){const J=n.get(C);y!==void 0&&ce(J.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Ve(C)}function rt(C){const y=C.texture,G=n.get(C),J=n.get(y);C.addEventListener("dispose",b);const ee=C.textures,Z=C.isWebGLCubeRenderTarget===!0,ue=ee.length>1;if(ue||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=y.version,a.memory.textures++),Z){G.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[oe]=[];for(let Ae=0;Ae<y.mipmaps.length;Ae++)G.__webglFramebuffer[oe][Ae]=r.createFramebuffer()}else G.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let oe=0;oe<y.mipmaps.length;oe++)G.__webglFramebuffer[oe]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(ue)for(let oe=0,Ae=ee.length;oe<Ae;oe++){const De=n.get(ee[oe]);De.__webglTexture===void 0&&(De.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&k(C)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let oe=0;oe<ee.length;oe++){const Ae=ee[oe];G.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[oe]);const De=s.convert(Ae.format,Ae.colorSpace),re=s.convert(Ae.type),ae=T(Ae.internalFormat,De,re,Ae.colorSpace,C.isXRRenderTarget===!0),Oe=Xe(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,ae,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,G.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),se(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Re(r.TEXTURE_CUBE_MAP,y);for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ae=0;Ae<y.mipmaps.length;Ae++)ce(G.__webglFramebuffer[oe][Ae],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae);else ce(G.__webglFramebuffer[oe],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(y)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let oe=0,Ae=ee.length;oe<Ae;oe++){const De=ee[oe],re=n.get(De);t.bindTexture(r.TEXTURE_2D,re.__webglTexture),Re(r.TEXTURE_2D,De),ce(G.__webglFramebuffer,C,De,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,0),m(De)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,J.__webglTexture),Re(oe,y),y.mipmaps&&y.mipmaps.length>0)for(let Ae=0;Ae<y.mipmaps.length;Ae++)ce(G.__webglFramebuffer[Ae],C,y,r.COLOR_ATTACHMENT0,oe,Ae);else ce(G.__webglFramebuffer,C,y,r.COLOR_ATTACHMENT0,oe,0);m(y)&&p(oe),t.unbindTexture()}C.depthBuffer&&Ve(C)}function et(C){const y=C.textures;for(let G=0,J=y.length;G<J;G++){const ee=y[G];if(m(ee)){const Z=E(C),ue=n.get(ee).__webglTexture;t.bindTexture(Z,ue),p(Z),t.unbindTexture()}}}const ye=[],L=[];function yt(C){if(C.samples>0){if(k(C)===!1){const y=C.textures,G=C.width,J=C.height;let ee=r.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=n.get(C),oe=y.length>1;if(oe)for(let De=0;De<y.length;De++)t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const Ae=C.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let De=0;De<y.length;De++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ue.__webglColorRenderbuffer[De]);const re=n.get(y[De]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,re,0)}r.blitFramebuffer(0,0,G,J,0,0,G,J,ee,r.NEAREST),l===!0&&(ye.length=0,L.length=0,ye.push(r.COLOR_ATTACHMENT0+De),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ye.push(Z),L.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let De=0;De<y.length;De++){t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,ue.__webglColorRenderbuffer[De]);const re=n.get(y[De]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Xe(C){return Math.min(i.maxSamples,C.samples)}function k(C){const y=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Te(C){const y=a.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function st(C,y){const G=C.colorSpace,J=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Qs&&G!==dr&&(ft.getTransfer(G)===xt?(J!==Mi||ee!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}function we(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=H,this.setTextureCube=z,this.rebindTextures=Ne,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=k}function pM(r,e){function t(n,i=dr){let s;const a=ft.getTransfer(i);if(n===er)return r.UNSIGNED_BYTE;if(n===dd)return r.UNSIGNED_SHORT_4_4_4_4;if(n===hd)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Xp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Vp)return r.BYTE;if(n===Wp)return r.SHORT;if(n===Wa)return r.UNSIGNED_SHORT;if(n===ud)return r.INT;if(n===ss)return r.UNSIGNED_INT;if(n===Yi)return r.FLOAT;if(n===Ka)return r.HALF_FLOAT;if(n===qp)return r.ALPHA;if(n===Yp)return r.RGB;if(n===Mi)return r.RGBA;if(n===qa)return r.DEPTH_COMPONENT;if(n===Ya)return r.DEPTH_STENCIL;if(n===$p)return r.RED;if(n===fd)return r.RED_INTEGER;if(n===jp)return r.RG;if(n===pd)return r.RG_INTEGER;if(n===md)return r.RGBA_INTEGER;if(n===Ko||n===Zo||n===Jo||n===Qo)if(a===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ko)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ko)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ou||n===lu||n===cu||n===uu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ou)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===du||n===hu||n===fu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===du||n===hu)return a===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===fu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pu||n===mu||n===_u||n===gu||n===vu||n===xu||n===Su||n===yu||n===Mu||n===Eu||n===Tu||n===bu||n===wu||n===Au)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===pu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_u)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Su)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Au)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===el||n===Cu||n===Ru)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===el)return a===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ru)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kp||n===Pu||n===Du||n===Lu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===el)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Pu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Du)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xa?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const mM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_M=`
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

}`;class gM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Bn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ti({vertexShader:mM,fragmentShader:_M,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Li(new no(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vM extends na{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=new gM,m=t.getContextAttributes();let p=null,E=null;const T=[],x=[],w=new St;let A=null;const b=new di;b.viewport=new Bt;const P=new di;P.viewport=new Bt;const S=[b,P],v=new k0;let D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=T[$];return ie===void 0&&(ie=new fc,T[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=T[$];return ie===void 0&&(ie=new fc,T[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=T[$];return ie===void 0&&(ie=new fc,T[$]=ie),ie.getHandSpace()};function U($){const ie=x.indexOf($.inputSource);if(ie===-1)return;const ce=T[ie];ce!==void 0&&(ce.update($.inputSource,$.frame,c||a),ce.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",X);for(let $=0;$<T.length;$++){const ie=x[$];ie!==null&&(x[$]=null,T[$].disconnect(ie))}D=null,N=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,i=null,E=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",B),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,se=null,Ee=null;m.depth&&(Ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=m.stencil?Ya:qa,se=m.stencil?Xa:ss);const Ve={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Ve),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new as(d.textureWidth,d.textureHeight,{format:Mi,type:er,depthTexture:new um(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new as(f.framebufferWidth,f.framebufferHeight,{format:Mi,type:er,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X($){for(let ie=0;ie<$.removed.length;ie++){const ce=$.removed[ie],se=x.indexOf(ce);se>=0&&(x[se]=null,T[se].disconnect(ce))}for(let ie=0;ie<$.added.length;ie++){const ce=$.added[ie];let se=x.indexOf(ce);if(se===-1){for(let Ve=0;Ve<T.length;Ve++)if(Ve>=x.length){x.push(ce),se=Ve;break}else if(x[Ve]===null){x[Ve]=ce,se=Ve;break}if(se===-1)break}const Ee=T[se];Ee&&Ee.connect(ce)}}const W=new j,H=new j;function z($,ie,ce){W.setFromMatrixPosition(ie.matrixWorld),H.setFromMatrixPosition(ce.matrixWorld);const se=W.distanceTo(H),Ee=ie.projectionMatrix.elements,Ve=ce.projectionMatrix.elements,Ne=Ee[14]/(Ee[10]-1),rt=Ee[14]/(Ee[10]+1),et=(Ee[9]+1)/Ee[5],ye=(Ee[9]-1)/Ee[5],L=(Ee[8]-1)/Ee[0],yt=(Ve[8]+1)/Ve[0],Xe=Ne*L,k=Ne*yt,Te=se/(-L+yt),st=Te*-L;if(ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(st),$.translateZ(Te),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ee[10]===-1)$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const we=Ne+Te,C=rt+Te,y=Xe-st,G=k+(se-st),J=et*rt/C*we,ee=ye*rt/C*we;$.projectionMatrix.makePerspective(y,G,J,ee,we,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function q($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ie=$.near,ce=$.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(ce=_.depthFar)),v.near=P.near=b.near=ie,v.far=P.far=b.far=ce,(D!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),D=v.near,N=v.far),b.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,v.layers.mask=b.layers.mask|P.layers.mask;const se=$.parent,Ee=v.cameras;q(v,se);for(let Ve=0;Ve<Ee.length;Ve++)q(Ee[Ve],se);Ee.length===2?z(v,b,P):v.projectionMatrix.copy(b.projectionMatrix),R($,v,se)};function R($,ie,ce){ce===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(ce.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Iu*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ne=null;function Re($,ie){if(u=ie.getViewerPose(c||a),g=ie,u!==null){const ce=u.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let se=!1;ce.length!==v.cameras.length&&(v.cameras.length=0,se=!0);for(let Ne=0;Ne<ce.length;Ne++){const rt=ce[Ne];let et=null;if(f!==null)et=f.getViewport(rt);else{const L=h.getViewSubImage(d,rt);et=L.viewport,Ne===0&&(e.setRenderTargetTextures(E,L.colorTexture,L.depthStencilTexture),e.setRenderTarget(E))}let ye=S[Ne];ye===void 0&&(ye=new di,ye.layers.enable(Ne),ye.viewport=new Bt,S[Ne]=ye),ye.matrix.fromArray(rt.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(rt.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(et.x,et.y,et.width,et.height),Ne===0&&(v.matrix.copy(ye.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),se===!0&&v.cameras.push(ye)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const Ne=h.getDepthInformation(ce[0]);Ne&&Ne.isValid&&Ne.texture&&_.init(e,Ne,i.renderState)}}for(let ce=0;ce<T.length;ce++){const se=x[ce],Ee=T[ce];se!==null&&Ee!==void 0&&Ee.update(se,ie,c||a)}ne&&ne($,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const fe=new dm;fe.setAnimationLoop(Re),this.setAnimationLoop=function($){ne=$},this.dispose=function(){}}}const Nr=new tr,xM=new zt;function SM(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,am(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,T,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===On&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===On&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),T=E.envMap,x=E.envMapRotation;T&&(m.envMap.value=T,Nr.copy(x),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),m.envMapRotation.value.setFromMatrix4(xM.makeRotationFromEuler(Nr)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===On&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yM(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){const x=T.program;n.uniformBlockBinding(E,x)}function c(E,T){let x=i[E.id];x===void 0&&(g(E),x=u(E),i[E.id]=x,E.addEventListener("dispose",m));const w=T.program;n.updateUBOMapping(E,w);const A=e.render.frame;s[E.id]!==A&&(d(E),s[E.id]=A)}function u(E){const T=h();E.__bindingPointIndex=T;const x=r.createBuffer(),w=E.__size,A=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,w,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,x),x}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const T=i[E.id],x=E.uniforms,w=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let A=0,b=x.length;A<b;A++){const P=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,v=P.length;S<v;S++){const D=P[S];if(f(D,A,S,w)===!0){const N=D.__offset,U=Array.isArray(D.value)?D.value:[D.value];let B=0;for(let X=0;X<U.length;X++){const W=U[X],H=_(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,N+B,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,B),B+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(E,T,x,w){const A=E.value,b=T+"_"+x;if(w[b]===void 0)return typeof A=="number"||typeof A=="boolean"?w[b]=A:w[b]=A.clone(),!0;{const P=w[b];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return w[b]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(E){const T=E.uniforms;let x=0;const w=16;for(let b=0,P=T.length;b<P;b++){const S=Array.isArray(T[b])?T[b]:[T[b]];for(let v=0,D=S.length;v<D;v++){const N=S[v],U=Array.isArray(N.value)?N.value:[N.value];for(let B=0,X=U.length;B<X;B++){const W=U[B],H=_(W),z=x%w,q=z%H.boundary,R=z+q;x+=q,R!==0&&w-R<H.storage&&(x+=w-R),N.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=H.storage}}}const A=x%w;return A>0&&(x+=w-A),E.__size=x,E.__cache={},this}function _(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){const T=E.target;T.removeEventListener("dispose",m);const x=a.indexOf(T.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function p(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class MM{constructor(e={}){const{canvas:t=r0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let w=!1;this._outputColorSpace=li;let A=0,b=0,P=null,S=-1,v=null;const D=new Bt,N=new Bt;let U=null;const B=new pt(0);let X=0,W=t.width,H=t.height,z=1,q=null,R=null;const ne=new Bt(0,0,W,H),Re=new Bt(0,0,W,H);let fe=!1;const $=new cm;let ie=!1,ce=!1;const se=new zt,Ee=new zt,Ve=new j,Ne=new Bt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function ye(){return P===null?z:1}let L=n;function yt(M,O){return t.getContext(M,O)}try{const M={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cd}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",he,!1),L===null){const O="webgl2";if(L=yt(O,M),L===null)throw yt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Xe,k,Te,st,we,C,y,G,J,ee,Z,ue,oe,Ae,De,re,ae,Oe,Fe,xe,je,Ge,lt,I;function de(){Xe=new LS(L),Xe.init(),Ge=new pM(L,Xe),k=new bS(L,Xe,e,Ge),Te=new hM(L,Xe),k.reverseDepthBuffer&&d&&Te.buffers.depth.setReversed(!0),st=new NS(L),we=new Qy,C=new fM(L,Xe,Te,we,k,Ge,st),y=new AS(x),G=new DS(x),J=new H0(L),lt=new ES(L,J),ee=new IS(L,J,st,lt),Z=new OS(L,ee,J,st),Fe=new FS(L,k,C),re=new wS(we),ue=new Jy(x,y,G,Xe,k,lt,re),oe=new SM(x,we),Ae=new tM,De=new oM(Xe),Oe=new MS(x,y,G,Te,Z,f,l),ae=new uM(x,Z,k),I=new yM(L,st,k,Te),xe=new TS(L,Xe,st),je=new US(L,Xe,st),st.programs=ue.programs,x.capabilities=k,x.extensions=Xe,x.properties=we,x.renderLists=Ae,x.shadowMap=ae,x.state=Te,x.info=st}de();const K=new vM(x,L);this.xr=K,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=Xe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Xe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(M){M!==void 0&&(z=M,this.setSize(W,H,!1))},this.getSize=function(M){return M.set(W,H)},this.setSize=function(M,O,Y=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,H=O,t.width=Math.floor(M*z),t.height=Math.floor(O*z),Y===!0&&(t.style.width=M+"px",t.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(W*z,H*z).floor()},this.setDrawingBufferSize=function(M,O,Y){W=M,H=O,z=Y,t.width=Math.floor(M*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(ne)},this.setViewport=function(M,O,Y,V){M.isVector4?ne.set(M.x,M.y,M.z,M.w):ne.set(M,O,Y,V),Te.viewport(D.copy(ne).multiplyScalar(z).round())},this.getScissor=function(M){return M.copy(Re)},this.setScissor=function(M,O,Y,V){M.isVector4?Re.set(M.x,M.y,M.z,M.w):Re.set(M,O,Y,V),Te.scissor(N.copy(Re).multiplyScalar(z).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(M){Te.setScissorTest(fe=M)},this.setOpaqueSort=function(M){q=M},this.setTransparentSort=function(M){R=M},this.getClearColor=function(M){return M.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,Y=!0){let V=0;if(M){let F=!1;if(P!==null){const te=P.texture.format;F=te===md||te===pd||te===fd}if(F){const te=P.texture.type,me=te===er||te===ss||te===Wa||te===Xa||te===dd||te===hd,Me=Oe.getClearColor(),Se=Oe.getClearAlpha(),Ue=Me.r,Be=Me.g,Le=Me.b;me?(g[0]=Ue,g[1]=Be,g[2]=Le,g[3]=Se,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Ue,_[1]=Be,_[2]=Le,_[3]=Se,L.clearBufferiv(L.COLOR,0,_))}else V|=L.COLOR_BUFFER_BIT}O&&(V|=L.DEPTH_BUFFER_BIT),Y&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Oe.dispose(),Ae.dispose(),De.dispose(),we.dispose(),y.dispose(),G.dispose(),Z.dispose(),lt.dispose(),I.dispose(),ue.dispose(),K.dispose(),K.removeEventListener("sessionstart",pe),K.removeEventListener("sessionend",Ye),Pe.stop()};function Q(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const M=st.autoReset,O=ae.enabled,Y=ae.autoUpdate,V=ae.needsUpdate,F=ae.type;de(),st.autoReset=M,ae.enabled=O,ae.autoUpdate=Y,ae.needsUpdate=V,ae.type=F}function he(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function We(M){const O=M.target;O.removeEventListener("dispose",We),dt(O)}function dt(M){It(M),we.remove(M)}function It(M){const O=we.get(M).programs;O!==void 0&&(O.forEach(function(Y){ue.releaseProgram(Y)}),M.isShaderMaterial&&ue.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,Y,V,F,te){O===null&&(O=rt);const me=F.isMesh&&F.matrixWorld.determinant()<0,Me=Gn(M,O,Y,V,F);Te.setMaterial(V,me);let Se=Y.index,Ue=1;if(V.wireframe===!0){if(Se=ee.getWireframeAttribute(Y),Se===void 0)return;Ue=2}const Be=Y.drawRange,Le=Y.attributes.position;let $e=Be.start*Ue,_t=(Be.start+Be.count)*Ue;te!==null&&($e=Math.max($e,te.start*Ue),_t=Math.min(_t,(te.start+te.count)*Ue)),Se!==null?($e=Math.max($e,0),_t=Math.min(_t,Se.count)):Le!=null&&($e=Math.max($e,0),_t=Math.min(_t,Le.count));const Ht=_t-$e;if(Ht<0||Ht===1/0)return;lt.setup(F,V,Me,Y,Se);let Ut,ht=xe;if(Se!==null&&(Ut=J.get(Se),ht=je,ht.setIndex(Ut)),F.isMesh)V.wireframe===!0?(Te.setLineWidth(V.wireframeLinewidth*ye()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(F.isLine){let ze=V.linewidth;ze===void 0&&(ze=1),Te.setLineWidth(ze*ye()),F.isLineSegments?ht.setMode(L.LINES):F.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else F.isPoints?ht.setMode(L.POINTS):F.isSprite&&ht.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)tl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))ht.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const ze=F._multiDrawStarts,sn=F._multiDrawCounts,gt=F._multiDrawCount,_i=Se?J.get(Se).bytesPerElement:1,ls=we.get(V).currentProgram.getUniforms();for(let Vn=0;Vn<gt;Vn++)ls.setValue(L,"_gl_DrawID",Vn),ht.render(ze[Vn]/_i,sn[Vn])}else if(F.isInstancedMesh)ht.renderInstances($e,Ht,F.count);else if(Y.isInstancedBufferGeometry){const ze=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,sn=Math.min(Y.instanceCount,ze);ht.renderInstances($e,Ht,sn)}else ht.render($e,Ht)};function ve(M,O,Y){M.transparent===!0&&M.side===Xi&&M.forceSinglePass===!1?(M.side=On,M.needsUpdate=!0,Mt(M,O,Y),M.side=br,M.needsUpdate=!0,Mt(M,O,Y),M.side=Xi):Mt(M,O,Y)}this.compile=function(M,O,Y=null){Y===null&&(Y=M),p=De.get(Y),p.init(O),T.push(p),Y.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),M!==Y&&M.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const V=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const te=F.material;if(te)if(Array.isArray(te))for(let me=0;me<te.length;me++){const Me=te[me];ve(Me,Y,F),V.add(Me)}else ve(te,Y,F),V.add(te)}),p=T.pop(),V},this.compileAsync=function(M,O,Y=null){const V=this.compile(M,O,Y);return new Promise(F=>{function te(){if(V.forEach(function(me){we.get(me).currentProgram.isReady()&&V.delete(me)}),V.size===0){F(M);return}setTimeout(te,10)}Xe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Ce=null;function Ke(M){Ce&&Ce(M)}function pe(){Pe.stop()}function Ye(){Pe.start()}const Pe=new dm;Pe.setAnimationLoop(Ke),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(M){Ce=M,K.setAnimationLoop(M),M===null?Pe.stop():Pe.start()},K.addEventListener("sessionstart",pe),K.addEventListener("sessionend",Ye),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(O),O=K.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,O,P),p=De.get(M,T.length),p.init(O),T.push(p),Ee.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$.setFromProjectionMatrix(Ee),ce=this.localClippingEnabled,ie=re.init(this.clippingPlanes,ce),m=Ae.get(M,E.length),m.init(),E.push(m),K.enabled===!0&&K.isPresenting===!0){const te=x.xr.getDepthSensingMesh();te!==null&&qe(te,O,-1/0,x.sortObjects)}qe(M,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(q,R),et=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,et&&Oe.addToRenderList(m,M),this.info.render.frame++,ie===!0&&re.beginShadows();const Y=p.state.shadowsArray;ae.render(Y,M,O),ie===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,F=m.transmissive;if(p.setupLights(),O.isArrayCamera){const te=O.cameras;if(F.length>0)for(let me=0,Me=te.length;me<Me;me++){const Se=te[me];tt(V,F,M,Se)}et&&Oe.render(M);for(let me=0,Me=te.length;me<Me;me++){const Se=te[me];Ft(m,M,Se,Se.viewport)}}else F.length>0&&tt(V,F,M,O),et&&Oe.render(M),Ft(m,M,O);P!==null&&b===0&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(x,M,O),lt.resetDefaultState(),S=-1,v=null,T.pop(),T.length>0?(p=T[T.length-1],ie===!0&&re.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function qe(M,O,Y,V){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$.intersectsSprite(M)){V&&Ne.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ee);const me=Z.update(M),Me=M.material;Me.visible&&m.push(M,me,Me,Y,Ne.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||$.intersectsObject(M))){const me=Z.update(M),Me=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ne.copy(M.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ne.copy(me.boundingSphere.center)),Ne.applyMatrix4(M.matrixWorld).applyMatrix4(Ee)),Array.isArray(Me)){const Se=me.groups;for(let Ue=0,Be=Se.length;Ue<Be;Ue++){const Le=Se[Ue],$e=Me[Le.materialIndex];$e&&$e.visible&&m.push(M,me,$e,Y,Ne.z,Le)}}else Me.visible&&m.push(M,me,Me,Y,Ne.z,null)}}const te=M.children;for(let me=0,Me=te.length;me<Me;me++)qe(te[me],O,Y,V)}function Ft(M,O,Y,V){const F=M.opaque,te=M.transmissive,me=M.transparent;p.setupLightsView(Y),ie===!0&&re.setGlobalState(x.clippingPlanes,Y),V&&Te.viewport(D.copy(V)),F.length>0&&wt(F,O,Y),te.length>0&&wt(te,O,Y),me.length>0&&wt(me,O,Y),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function tt(M,O,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new as(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Ka:er,minFilter:qr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const te=p.state.transmissionRenderTarget[V.id],me=V.viewport||D;te.setSize(me.z*x.transmissionResolutionScale,me.w*x.transmissionResolutionScale);const Me=x.getRenderTarget();x.setRenderTarget(te),x.getClearColor(B),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),et&&Oe.render(Y);const Se=x.toneMapping;x.toneMapping=yr;const Ue=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),ie===!0&&re.setGlobalState(x.clippingPlanes,V),wt(M,Y,V),C.updateMultisampleRenderTarget(te),C.updateRenderTargetMipmap(te),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Le=0,$e=O.length;Le<$e;Le++){const _t=O[Le],Ht=_t.object,Ut=_t.geometry,ht=_t.material,ze=_t.group;if(ht.side===Xi&&Ht.layers.test(V.layers)){const sn=ht.side;ht.side=On,ht.needsUpdate=!0,qt(Ht,Y,V,Ut,ht,ze),ht.side=sn,ht.needsUpdate=!0,Be=!0}}Be===!0&&(C.updateMultisampleRenderTarget(te),C.updateRenderTargetMipmap(te))}x.setRenderTarget(Me),x.setClearColor(B,X),Ue!==void 0&&(V.viewport=Ue),x.toneMapping=Se}function wt(M,O,Y){const V=O.isScene===!0?O.overrideMaterial:null;for(let F=0,te=M.length;F<te;F++){const me=M[F],Me=me.object,Se=me.geometry,Ue=me.group;let Be=me.material;Be.allowOverride===!0&&V!==null&&(Be=V),Me.layers.test(Y.layers)&&qt(Me,O,Y,Se,Be,Ue)}}function qt(M,O,Y,V,F,te){M.onBeforeRender(x,O,Y,V,F,te),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(x,O,Y,V,M,te),F.transparent===!0&&F.side===Xi&&F.forceSinglePass===!1?(F.side=On,F.needsUpdate=!0,x.renderBufferDirect(Y,O,V,F,M,te),F.side=br,F.needsUpdate=!0,x.renderBufferDirect(Y,O,V,F,M,te),F.side=Xi):x.renderBufferDirect(Y,O,V,F,M,te),M.onAfterRender(x,O,Y,V,F,te)}function Mt(M,O,Y){O.isScene!==!0&&(O=rt);const V=we.get(M),F=p.state.lights,te=p.state.shadowsArray,me=F.state.version,Me=ue.getParameters(M,F.state,te,O,Y),Se=ue.getProgramCacheKey(Me);let Ue=V.programs;V.environment=M.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(M.isMeshStandardMaterial?G:y).get(M.envMap||V.environment),V.envMapRotation=V.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Ue===void 0&&(M.addEventListener("dispose",We),Ue=new Map,V.programs=Ue);let Be=Ue.get(Se);if(Be!==void 0){if(V.currentProgram===Be&&V.lightsStateVersion===me)return mt(M,Me),Be}else Me.uniforms=ue.getUniforms(M),M.onBeforeCompile(Me,x),Be=ue.acquireProgram(Me,Se),Ue.set(Se,Be),V.uniforms=Me.uniforms;const Le=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=re.uniform),mt(M,Me),V.needsLights=_n(M),V.lightsStateVersion=me,V.needsLights&&(Le.ambientLightColor.value=F.state.ambient,Le.lightProbe.value=F.state.probe,Le.directionalLights.value=F.state.directional,Le.directionalLightShadows.value=F.state.directionalShadow,Le.spotLights.value=F.state.spot,Le.spotLightShadows.value=F.state.spotShadow,Le.rectAreaLights.value=F.state.rectArea,Le.ltc_1.value=F.state.rectAreaLTC1,Le.ltc_2.value=F.state.rectAreaLTC2,Le.pointLights.value=F.state.point,Le.pointLightShadows.value=F.state.pointShadow,Le.hemisphereLights.value=F.state.hemi,Le.directionalShadowMap.value=F.state.directionalShadowMap,Le.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Le.spotShadowMap.value=F.state.spotShadowMap,Le.spotLightMatrix.value=F.state.spotLightMatrix,Le.spotLightMap.value=F.state.spotLightMap,Le.pointShadowMap.value=F.state.pointShadowMap,Le.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Be,V.uniformsList=null,Be}function Et(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=nl.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function mt(M,O){const Y=we.get(M);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function Gn(M,O,Y,V,F){O.isScene!==!0&&(O=rt),C.resetTextureUnits();const te=O.fog,me=V.isMeshStandardMaterial?O.environment:null,Me=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Qs,Se=(V.isMeshStandardMaterial?G:y).get(V.envMap||me),Ue=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Be=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Le=!!Y.morphAttributes.position,$e=!!Y.morphAttributes.normal,_t=!!Y.morphAttributes.color;let Ht=yr;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ht=x.toneMapping);const Ut=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ht=Ut!==void 0?Ut.length:0,ze=we.get(V),sn=p.state.lights;if(ie===!0&&(ce===!0||M!==v)){const gn=M===v&&V.id===S;re.setState(V,M,gn)}let gt=!1;V.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==sn.state.version||ze.outputColorSpace!==Me||F.isBatchedMesh&&ze.batching===!1||!F.isBatchedMesh&&ze.batching===!0||F.isBatchedMesh&&ze.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&ze.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&ze.instancing===!1||!F.isInstancedMesh&&ze.instancing===!0||F.isSkinnedMesh&&ze.skinning===!1||!F.isSkinnedMesh&&ze.skinning===!0||F.isInstancedMesh&&ze.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ze.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&ze.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&ze.instancingMorph===!1&&F.morphTexture!==null||ze.envMap!==Se||V.fog===!0&&ze.fog!==te||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==re.numPlanes||ze.numIntersection!==re.numIntersection)||ze.vertexAlphas!==Ue||ze.vertexTangents!==Be||ze.morphTargets!==Le||ze.morphNormals!==$e||ze.morphColors!==_t||ze.toneMapping!==Ht||ze.morphTargetsCount!==ht)&&(gt=!0):(gt=!0,ze.__version=V.version);let _i=ze.currentProgram;gt===!0&&(_i=Mt(V,O,F));let ls=!1,Vn=!1,ra=!1;const Rt=_i.getUniforms(),ri=ze.uniforms;if(Te.useProgram(_i.program)&&(ls=!0,Vn=!0,ra=!0),V.id!==S&&(S=V.id,Vn=!0),ls||v!==M){Te.buffers.depth.getReversed()?(se.copy(M.projectionMatrix),a0(se),o0(se),Rt.setValue(L,"projectionMatrix",se)):Rt.setValue(L,"projectionMatrix",M.projectionMatrix),Rt.setValue(L,"viewMatrix",M.matrixWorldInverse);const Rn=Rt.map.cameraPosition;Rn!==void 0&&Rn.setValue(L,Ve.setFromMatrixPosition(M.matrixWorld)),k.logarithmicDepthBuffer&&Rt.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Rt.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),v!==M&&(v=M,Vn=!0,ra=!0)}if(F.isSkinnedMesh){Rt.setOptional(L,F,"bindMatrix"),Rt.setOptional(L,F,"bindMatrixInverse");const gn=F.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Rt.setValue(L,"boneTexture",gn.boneTexture,C))}F.isBatchedMesh&&(Rt.setOptional(L,F,"batchingTexture"),Rt.setValue(L,"batchingTexture",F._matricesTexture,C),Rt.setOptional(L,F,"batchingIdTexture"),Rt.setValue(L,"batchingIdTexture",F._indirectTexture,C),Rt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&Rt.setValue(L,"batchingColorTexture",F._colorsTexture,C));const si=Y.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&Fe.update(F,Y,_i),(Vn||ze.receiveShadow!==F.receiveShadow)&&(ze.receiveShadow=F.receiveShadow,Rt.setValue(L,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ri.envMap.value=Se,ri.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(ri.envMapIntensity.value=O.environmentIntensity),Vn&&(Rt.setValue(L,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&Ct(ri,ra),te&&V.fog===!0&&oe.refreshFogUniforms(ri,te),oe.refreshMaterialUniforms(ri,V,z,H,p.state.transmissionRenderTarget[M.id]),nl.upload(L,Et(ze),ri,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(nl.upload(L,Et(ze),ri,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Rt.setValue(L,"center",F.center),Rt.setValue(L,"modelViewMatrix",F.modelViewMatrix),Rt.setValue(L,"normalMatrix",F.normalMatrix),Rt.setValue(L,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const gn=V.uniformsGroups;for(let Rn=0,Rl=gn.length;Rn<Rl;Rn++){const Ar=gn[Rn];I.update(Ar,_i),I.bind(Ar,_i)}}return _i}function Ct(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function _n(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,O,Y){const V=we.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),we.get(M.texture).__webglTexture=O,we.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){const Y=we.get(M);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0};const ii=L.createFramebuffer();this.setRenderTarget=function(M,O=0,Y=0){P=M,A=O,b=Y;let V=!0,F=null,te=!1,me=!1;if(M){const Se=we.get(M);if(Se.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(Se.__webglFramebuffer===void 0)C.setupRenderTarget(M);else if(Se.__hasExternalTextures)C.rebindTextures(M,we.get(M.texture).__webglTexture,we.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Le=M.depthTexture;if(Se.__boundDepthTexture!==Le){if(Le!==null&&we.has(Le)&&(M.width!==Le.image.width||M.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(M)}}const Ue=M.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(me=!0);const Be=we.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[O])?F=Be[O][Y]:F=Be[O],te=!0):M.samples>0&&C.useMultisampledRTT(M)===!1?F=we.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?F=Be[Y]:F=Be,D.copy(M.viewport),N.copy(M.scissor),U=M.scissorTest}else D.copy(ne).multiplyScalar(z).floor(),N.copy(Re).multiplyScalar(z).floor(),U=fe;if(Y!==0&&(F=ii),Te.bindFramebuffer(L.FRAMEBUFFER,F)&&V&&Te.drawBuffers(M,F),Te.viewport(D),Te.scissor(N),Te.setScissorTest(U),te){const Se=we.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Se.__webglTexture,Y)}else if(me){const Se=we.get(M.texture),Ue=O;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.__webglTexture,Y,Ue)}else if(M!==null&&Y!==0){const Se=we.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Se.__webglTexture,Y)}S=-1},this.readRenderTargetPixels=function(M,O,Y,V,F,te,me){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=we.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){Te.bindFramebuffer(L.FRAMEBUFFER,Me);try{const Se=M.texture,Ue=Se.format,Be=Se.type;if(!k.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-V&&Y>=0&&Y<=M.height-F&&L.readPixels(O,Y,V,F,Ge.convert(Ue),Ge.convert(Be),te)}finally{const Se=P!==null?we.get(P).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(M,O,Y,V,F,te,me){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=we.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me)if(O>=0&&O<=M.width-V&&Y>=0&&Y<=M.height-F){Te.bindFramebuffer(L.FRAMEBUFFER,Me);const Se=M.texture,Ue=Se.format,Be=Se.type;if(!k.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Le=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Le),L.bufferData(L.PIXEL_PACK_BUFFER,te.byteLength,L.STREAM_READ),L.readPixels(O,Y,V,F,Ge.convert(Ue),Ge.convert(Be),0);const $e=P!==null?we.get(P).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,$e);const _t=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await s0(L,_t,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Le),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,te),L.deleteBuffer(Le),L.deleteSync(_t),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,Y=0){const V=Math.pow(2,-Y),F=Math.floor(M.image.width*V),te=Math.floor(M.image.height*V),me=O!==null?O.x:0,Me=O!==null?O.y:0;C.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,me,Me,F,te),Te.unbindTexture()};const Yt=L.createFramebuffer(),$t=L.createFramebuffer();this.copyTextureToTexture=function(M,O,Y=null,V=null,F=0,te=null){te===null&&(F!==0?(tl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=F,F=0):te=0);let me,Me,Se,Ue,Be,Le,$e,_t,Ht;const Ut=M.isCompressedTexture?M.mipmaps[te]:M.image;if(Y!==null)me=Y.max.x-Y.min.x,Me=Y.max.y-Y.min.y,Se=Y.isBox3?Y.max.z-Y.min.z:1,Ue=Y.min.x,Be=Y.min.y,Le=Y.isBox3?Y.min.z:0;else{const si=Math.pow(2,-F);me=Math.floor(Ut.width*si),Me=Math.floor(Ut.height*si),M.isDataArrayTexture?Se=Ut.depth:M.isData3DTexture?Se=Math.floor(Ut.depth*si):Se=1,Ue=0,Be=0,Le=0}V!==null?($e=V.x,_t=V.y,Ht=V.z):($e=0,_t=0,Ht=0);const ht=Ge.convert(O.format),ze=Ge.convert(O.type);let sn;O.isData3DTexture?(C.setTexture3D(O,0),sn=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(C.setTexture2DArray(O,0),sn=L.TEXTURE_2D_ARRAY):(C.setTexture2D(O,0),sn=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const gt=L.getParameter(L.UNPACK_ROW_LENGTH),_i=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ls=L.getParameter(L.UNPACK_SKIP_PIXELS),Vn=L.getParameter(L.UNPACK_SKIP_ROWS),ra=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ut.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ut.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ue),L.pixelStorei(L.UNPACK_SKIP_ROWS,Be),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Le);const Rt=M.isDataArrayTexture||M.isData3DTexture,ri=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const si=we.get(M),gn=we.get(O),Rn=we.get(si.__renderTarget),Rl=we.get(gn.__renderTarget);Te.bindFramebuffer(L.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,Rl.__webglFramebuffer);for(let Ar=0;Ar<Se;Ar++)Rt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(M).__webglTexture,F,Le+Ar),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(O).__webglTexture,te,Ht+Ar)),L.blitFramebuffer(Ue,Be,me,Me,$e,_t,me,Me,L.DEPTH_BUFFER_BIT,L.NEAREST);Te.bindFramebuffer(L.READ_FRAMEBUFFER,null),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||we.has(M)){const si=we.get(M),gn=we.get(O);Te.bindFramebuffer(L.READ_FRAMEBUFFER,Yt),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,$t);for(let Rn=0;Rn<Se;Rn++)Rt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,si.__webglTexture,F,Le+Rn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,si.__webglTexture,F),ri?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gn.__webglTexture,te,Ht+Rn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,gn.__webglTexture,te),F!==0?L.blitFramebuffer(Ue,Be,me,Me,$e,_t,me,Me,L.COLOR_BUFFER_BIT,L.NEAREST):ri?L.copyTexSubImage3D(sn,te,$e,_t,Ht+Rn,Ue,Be,me,Me):L.copyTexSubImage2D(sn,te,$e,_t,Ue,Be,me,Me);Te.bindFramebuffer(L.READ_FRAMEBUFFER,null),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ri?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(sn,te,$e,_t,Ht,me,Me,Se,ht,ze,Ut.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(sn,te,$e,_t,Ht,me,Me,Se,ht,Ut.data):L.texSubImage3D(sn,te,$e,_t,Ht,me,Me,Se,ht,ze,Ut):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,te,$e,_t,me,Me,ht,ze,Ut.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,te,$e,_t,Ut.width,Ut.height,ht,Ut.data):L.texSubImage2D(L.TEXTURE_2D,te,$e,_t,me,Me,ht,ze,Ut);L.pixelStorei(L.UNPACK_ROW_LENGTH,gt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_i),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ls),L.pixelStorei(L.UNPACK_SKIP_ROWS,Vn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ra),te===0&&O.generateMipmaps&&L.generateMipmap(sn),Te.unbindTexture()},this.copyTextureToTexture3D=function(M,O,Y=null,V=null,F=0){return tl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,O,Y,V,F)},this.initRenderTarget=function(M){we.get(M).__webglFramebuffer===void 0&&C.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?C.setTextureCube(M,0):M.isData3DTexture?C.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?C.setTexture2DArray(M,0):C.setTexture2D(M,0),Te.unbindTexture()},this.resetState=function(){A=0,b=0,P=null,Te.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}const EM=`
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
}`,TM=`
uniform float uTime; uniform float uMorph; uniform float uSize; uniform float uPixel;
uniform vec3 uMouse; uniform float uMouseStrength; uniform float uIntro;
attribute vec3 aPlane; attribute float aRand;
varying float vAlpha; varying float vTone;
${EM}
void main(){
  vec3 s = position * uIntro;
  float n = snoise(s * 1.25 + vec3(0., 0., uTime * .12));
  s += normalize(position) * n * .22;
  vec3 p = aPlane;
  p.y += sin(p.x * 1.4 + uTime * .55) * .16 + cos(p.z * 1.7 + uTime * .4) * .14;
  float m = smoothstep(0., 1., clamp(uMorph * 1.5 - aRand * .5, 0., 1.));
  vec3 pos = mix(s, p, m);
  vec4 world = modelMatrix * vec4(pos, 1.);
  vec3 d = world.xyz - uMouse; float dist = length(d);
  world.xyz += normalize(d + 1e-4) * smoothstep(1.1, 0., dist) * .42 * uMouseStrength;
  vec4 mv = viewMatrix * world;
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uSize * uPixel * (.55 + aRand * .9) / -mv.z;
  vAlpha = (.28 + .72 * (.5 + .5 * n)) * (1. - m * .35);
  vTone = aRand;
}`,bM=`
uniform vec3 uColorA; uniform vec3 uColorB; uniform float uFade;
varying float vAlpha; varying float vTone;
void main(){
  vec2 c = gl_PointCoord - .5; float d = length(c);
  if (d > .5) discard;
  float a = smoothstep(.5, .05, d);
  vec3 col = mix(uColorA, uColorB, step(.86, vTone));
  gl_FragColor = vec4(col, a * vAlpha * uFade);
}`;function wM(r,{reduced:e=!1}={}){const t=new MM({canvas:r,antialias:!1,alpha:!0,powerPreference:"high-performance"}),n=Math.min(window.devicePixelRatio||1,1.75);t.setPixelRatio(n);const i=new L0,s=new di(35,1,.1,100);s.position.set(0,0,7.2);const a=window.matchMedia("(max-width: 760px)").matches,o=a?9e3:2e4,l=new Float32Array(o*3),c=new Float32Array(o*3),u=new Float32Array(o),h=Math.PI*(3-Math.sqrt(5)),d=a?1.35:1.75,f=Math.round(Math.sqrt(o*2.2));for(let fe=0;fe<o;fe++){const $=1-fe/(o-1)*2,ie=Math.sqrt(1-$*$),ce=h*fe;l[fe*3]=Math.cos(ce)*ie*d,l[fe*3+1]=$*d,l[fe*3+2]=Math.sin(ce)*ie*d;const se=fe%f,Ee=Math.floor(fe/f);c[fe*3]=(se/f-.5)*9.5,c[fe*3+1]=-1.15,c[fe*3+2]=(Ee/(o/f)-.5)*6.5,u[fe]=Math.random()}const g=new Ni;g.setAttribute("position",new wn(l,3)),g.setAttribute("aPlane",new wn(c,3)),g.setAttribute("aRand",new wn(u,1));const _={uTime:{value:0},uMorph:{value:0},uSize:{value:a?26:30},uPixel:{value:n},uMouse:{value:new j(9,9,0)},uMouseStrength:{value:0},uIntro:{value:e?1:.001},uColorA:{value:new pt("#2F80FF")},uColorB:{value:new pt("#EAF1FF")},uFade:{value:1}},m=new Ti({vertexShader:TM,fragmentShader:bM,uniforms:_,transparent:!0,depthWrite:!1,blending:Ia}),p=new Ih(g,m);p.rotation.z=.18,i.add(p);const E=new Ti({transparent:!0,depthWrite:!1,blending:Ia,uniforms:{uFade:{value:1},uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:"uniform float uFade; uniform float uTime; varying vec2 vUv; void main(){ float d = length(vUv - .5) * 2.; float core = pow(max(0., 1. - d), 3.2); float ring = smoothstep(.62, .5, d) * smoothstep(.3, .5, d) * .22; vec3 c = mix(vec3(.18, .5, 1.), vec3(.75, .86, 1.), core); gl_FragColor = vec4(c, (core * .55 + ring * (.6 + .4 * sin(uTime * .8))) * uFade); }"}),T=new Li(new no(d*4.6,d*4.6),E);T.position.z=-.6,i.add(T);const x=a?260:620,w=new Float32Array(x*3),A=new Float32Array(x*3);for(let fe=0;fe<x;fe++)w[fe*3]=(Math.random()-.5)*13,w[fe*3+1]=(Math.random()-.5)*8,w[fe*3+2]=(Math.random()-.5)*6+1,A[fe*3]=.08+Math.random()*.32,A[fe*3+1]=Math.random(),A[fe*3+2]=.4+Math.random()*1.6;const b=new Ni;b.setAttribute("position",new wn(w,3)),b.setAttribute("aSeed",new wn(A,3));const P=new Ti({transparent:!0,depthWrite:!1,blending:Ia,uniforms:{uTime:_.uTime,uPixel:_.uPixel,uFade:{value:1}},vertexShader:"uniform float uTime; uniform float uPixel; attribute vec3 aSeed; varying float vA; varying float vT; void main(){ vec3 p = position; p.y = mod(p.y + uTime * aSeed.x + 4., 8.) - 4.; p.x += sin(uTime * .5 + aSeed.y * 6.283) * .35; p.z += cos(uTime * .4 + aSeed.y * 9.) * .25; vec4 mv = modelViewMatrix * vec4(p, 1.); gl_Position = projectionMatrix * mv; gl_PointSize = aSeed.z * uPixel * 34. / -mv.z; vA = smoothstep(4., 2.4, abs(p.y)) * (.45 + .55 * sin(uTime * 1.7 + aSeed.y * 40.)); vT = aSeed.y; }",fragmentShader:"uniform float uFade; varying float vA; varying float vT; void main(){ float d = length(gl_PointCoord - .5); if (d > .5) discard; float a = pow(1. - d * 2., 2.2); vec3 c = mix(vec3(1., .72, .38), vec3(.35, .62, 1.), step(.42, vT)); gl_FragColor = vec4(c, a * vA * uFade * .9); }"}),S=new Ih(b,P);i.add(S);const v=new St(9,9),D=new j(9,9,0),N=new j;let U=0;const B=fe=>{v.x=fe.clientX/window.innerWidth*2-1,v.y=-(fe.clientY/window.innerHeight)*2+1,N.set(v.x,v.y,.5).unproject(s).sub(s.position).normalize();const $=-s.position.z/N.z;D.copy(s.position).add(N.multiplyScalar($)),U=1};window.addEventListener("pointermove",B,{passive:!0});const X=()=>{const fe=r.clientWidth||window.innerWidth,$=r.clientHeight||window.innerHeight;t.setSize(fe,$,!1),s.aspect=fe/$,s.updateProjectionMatrix()};X(),window.addEventListener("resize",X);let W=!0,H=0,z=performance.now(),q=0,R=0;const ne={morph:0,fade:1,scrollTilt:0},Re=fe=>{H=requestAnimationFrame(Re);const $=Math.min((fe-z)/1e3,.05);z=fe,W&&(q+=$,R+=$*.07,p.rotation.y=R,p.rotation.x=ne.scrollTilt*.55,_.uTime.value=q,_.uMorph.value+=(ne.morph-_.uMorph.value)*.08,_.uFade.value=ne.fade,E.uniforms.uTime.value=q,E.uniforms.uFade.value=ne.fade*(1-_.uMorph.value*.85),P.uniforms.uFade.value=.35+ne.fade*.65,T.scale.setScalar(1+Math.sin(q*.6)*.04),s.position.x+=(v.x*.55*(Math.abs(v.x)<2?1:0)-s.position.x)*.04,s.position.y+=(v.y*.35*(Math.abs(v.y)<2?1:0)-s.position.y)*.04,s.lookAt(0,0,0),_.uMouse.value.lerp(D,.12),U*=.985,_.uMouseStrength.value+=(U-_.uMouseStrength.value)*.1,t.render(i,s))};return e?t.render(i,s):H=requestAnimationFrame(Re),{uniforms:_,set morph(fe){ne.morph=fe,e&&(_.uMorph.value=fe,t.render(i,s))},set fade(fe){ne.fade=fe},set tilt(fe){ne.scrollTilt=fe},play(){W=!0},pause(){W=!1},destroy(){cancelAnimationFrame(H),window.removeEventListener("pointermove",B),window.removeEventListener("resize",X),t.dispose()}}}const of={fr:{soundOn:"Son : activé",soundOff:"Son : coupé",fxOn:"Réduire les effets",fxOff:"Rétablir les effets",mail:"Écrire à"},en:{soundOn:"Sound: on",soundOff:"Sound: off",fxOn:"Reduce effects",fxOff:"Restore effects",mail:"Write to"}},lf={get:r=>{try{return localStorage.getItem(r)}catch{return null}},set:(r,e)=>{try{localStorage.setItem(r,e)}catch{}}};function AM(){let r=null,e=null,t=null,n=!1;const i=()=>{r=new(window.AudioContext||window.webkitAudioContext),e=r.createGain(),e.gain.value=0,e.connect(r.destination),t=r.createBiquadFilter(),t.type="lowpass",t.frequency.value=320,t.Q.value=.7;const a=r.createGain();a.gain.value=.5,t.connect(a),a.connect(e),[[55,"sine",.5],[82.41,"triangle",.22],[110.4,"sine",.18],[164.8,"sine",.07]].forEach(([o,l,c],u)=>{const h=r.createOscillator(),d=r.createGain(),f=r.createOscillator(),g=r.createGain();h.type=l,h.frequency.value=o,d.gain.value=c,f.frequency.value=.05+u*.03,g.gain.value=c*.5,f.connect(g),g.connect(d.gain),h.connect(d),d.connect(t),h.start(),f.start()})},s=(a,o,l,c,u="sine")=>{if(!n)return;const h=r.currentTime,d=r.createOscillator(),f=r.createGain();d.type=u,d.frequency.setValueAtTime(a,h),d.frequency.exponentialRampToValueAtTime(o,h+l),f.gain.setValueAtTime(c,h),f.gain.exponentialRampToValueAtTime(1e-4,h+l),d.connect(f),f.connect(e),d.start(h),d.stop(h+l+.02)};return{get on(){return n},toggle(){return r||i(),n=!n,r.resume(),e.gain.cancelScheduledValues(r.currentTime),e.gain.linearRampToValueAtTime(n?.16:0,r.currentTime+(n?1.2:.4)),n},hover:()=>s(1400,2100,.07,.05),click:()=>{s(220,60,.28,.35,"triangle"),s(900,1800,.12,.05)},open:()=>s(140,520,.5,.2,"sine"),velocity(a){n&&t&&t.frequency.setTargetAtTime(320+Math.min(Math.abs(a),4e3)*.35,r.currentTime,.2)}}}const cf="ABCDEFGHKLMNPRSTUVXYZ0123456789#/<>_";function uf(r,e=.9){const t=r.dataset.txt||(r.dataset.txt=r.textContent),n={p:0};ge.to(n,{p:1,duration:e,ease:"power2.out",onUpdate:()=>{const i=Math.floor(n.p*t.length);r.textContent=t.slice(0,i)+[...t.slice(i)].map(s=>s===" "?" ":cf[Math.random()*cf.length|0]).join("")},onComplete:()=>{r.textContent=t}})}function CM({lenis:r,hero:e,reduced:t,fine:n,lang:i,sections:s}){const a=of[i]||of.fr,o=document.documentElement,l=(U,B=document)=>B.querySelector(U),c=(U,B=document)=>[...B.querySelectorAll(U)],u=AM(),h=document.createElement("div");h.className="aurora",h.setAttribute("aria-hidden","true"),h.innerHTML="<i></i><i></i><i></i>",document.body.prepend(h);const d=document.createElement("a");d.className="bigmail",d.href="mailto:johannepamegne@gmail.com",d.setAttribute("aria-label",`${a.mail} johannepamegne@gmail.com`),d.innerHTML=[..."johannepamegne@gmail.com"].map(U=>`<span aria-hidden="true">${U}</span>`).join(""),l(".contact__actions").before(d);const f=document.createElement("div");f.className="hud mono",f.innerHTML=`<div class="hud__left"><button type="button" id="soundBtn" aria-pressed="false"><span class="eq"><i></i><i></i><i></i><i></i></span><span>${a.soundOff}</span></button>
    <button type="button" id="fxBtn" aria-pressed="false"><span>${a.fxOn}</span></button></div>
    <div class="hud__right"><span id="hudSection">00 — ${s[0][1]}</span><span class="hud__bar"><i id="hudBar"></i></span><span id="hudPct">000</span></div>`,document.body.append(f);const g=l("#soundBtn"),_=l("#fxBtn");g.addEventListener("click",()=>{const U=u.toggle();g.setAttribute("aria-pressed",U),g.classList.toggle("is-on",U),g.lastElementChild.textContent=U?a.soundOn:a.soundOff});const m=U=>{o.classList.toggle("fx-off",U),_.setAttribute("aria-pressed",U),_.lastElementChild.textContent=U?a.fxOff:a.fxOn,e&&(U?e.pause():e.play()),lf.set("fx",U?"off":"on")};_.addEventListener("click",()=>m(!o.classList.contains("fx-off"))),lf.get("fx")==="off"&&m(!0),document.addEventListener("pointerover",U=>{const B=U.target.closest("a, button, .row, .clip");B&&B!==document._lastHover&&(document._lastHover=B,u.hover()),B||(document._lastHover=null)}),document.addEventListener("click",U=>{U.target.closest(".row, .clip")?u.open():U.target.closest("a, button")&&u.click()});const p=l("#hudBar"),E=l("#hudPct"),T=l("#hudSection");if(ke.create({start:0,end:"max",onUpdate:U=>{p.style.transform=`scaleX(${U.progress})`,E.textContent=String(Math.round(U.progress*100)).padStart(3,"0"),u.velocity(U.getVelocity())}}),s.forEach(([U,B],X)=>ke.create({trigger:U,start:"top 55%",end:"bottom 55%",onToggle:W=>{W.isActive&&(T.dataset.txt=`${String(X).padStart(2,"0")} — ${B}`,t?T.textContent=T.dataset.txt:uf(T,.5))}})),t)return;c(".label").forEach(U=>ke.create({trigger:U,start:"top 92%",once:!0,onEnter:()=>uf(U,1.1)}));const x=c("#workList, #mdmPages, #caps, .stats"),w={v:0},A=ge.quickSetter(x,"skewY","deg");ke.create({onUpdate:U=>{if(o.classList.contains("fx-off"))return;const B=ge.utils.clamp(-3.5,3.5,U.getVelocity()/-420);Math.abs(B)>Math.abs(w.v)&&(w.v=B,ge.to(w,{v:0,duration:.9,ease:"power3.out",overwrite:!0,onUpdate:()=>A(w.v)}))}});const b=c(".aurora i");ge.ticker.add(U=>{o.classList.contains("fx-off")||b.forEach((B,X)=>{B.style.transform=`translate3d(${Math.sin(U*.11+X*2.1)*16}vw, ${Math.cos(U*.09+X*1.3)*12}vh, 0)`})}),ge.to(".aurora",{opacity:1,scrollTrigger:{trigger:"#manifeste",start:"top 80%",end:"top 20%",scrub:!0}});const P=c(".bigmail span");if(ge.from(P,{yPercent:110,opacity:0,rotate:8,duration:1.1,stagger:.022,ease:"expo.out",scrollTrigger:{trigger:d,start:"top 92%"}}),d.addEventListener("pointerenter",()=>ge.to(P,{keyframes:[{y:"-0.22em",color:"#2f80ff",duration:.25},{y:0,color:"#eceef2",duration:.5,ease:"elastic.out(1,0.4)"}],stagger:.018,overwrite:!0})),!n)return;const S=c(".hero__line .char"),v=l(".hero__title");let D=[];const N=()=>{D=S.map(U=>{const B=U.getBoundingClientRect();return[B.left+B.width/2,B.top+B.height/2+window.scrollY]})};setTimeout(N,4200),window.addEventListener("resize",N),v.addEventListener("pointermove",U=>{D.length||N(),S.forEach((B,X)=>{const W=Math.hypot(U.clientX-D[X][0],U.clientY+window.scrollY-D[X][1]),H=Math.max(0,1-W/320);ge.to(B,{y:`${-.11*H}em`,scaleY:1+.16*H,skewX:-9*H,color:H>.55?"#8ab8ff":"#eceef2",duration:.45,ease:"power3.out",overwrite:"auto"})})}),v.addEventListener("pointerleave",()=>ge.to(S,{y:0,scaleY:1,skewX:0,color:"#eceef2",duration:.9,ease:"elastic.out(1,0.5)",stagger:.01})),c(".case__img, .mdm__pages img").forEach(U=>ge.fromTo(U,{scale:1.08},{scale:1,ease:"none",scrollTrigger:{trigger:U,start:"top bottom",end:"bottom top",scrub:!0}}))}const df={fr:{label:"(04) Sous le capot",title:"Trier un e-mail ne suffit pas. <em>Voici tout le reste.</em>",intro:"Pour qu'une entreprise confie sa boîte contact@ à l'Aiguilleur IA, il faut des workflows qui surveillent, relancent, rendent des comptes et apprennent. Chaque tuile ci-dessous en est un.",note:"Animations de démonstration — cabinet fictif « Lisière Syndic ».",tiles:[{id:"tower",size:"xl",title:"Tour de contrôle",text:"Chaque e-mail trié apparaît en direct : catégorie, urgence, qui s'en occupe. La tour garde une copie du journal, relue au plus toutes les 10 s, pour ne jamais dépasser le quota de Google (60 lectures par minute)."},{id:"watchdog",size:"m",title:"Chien de garde",text:"Toutes les 15 minutes, il vérifie Gmail, Claude, la Google Sheet, les e-mails bloqués et le budget IA du jour. En cas de panne : alerte Telegram et e-mail, rappel toutes les 3 h, puis « tout est rentré dans l'ordre »."},{id:"report",size:"m",title:"Rapport du lundi",text:"Chaque lundi à 8 h, la direction reçoit sa semaine : e-mails triés, temps gagné, délai de prise en charge des urgences, charge de l'équipe, sujets, sécurité, coût — et un résumé sur Telegram."},{id:"relance",size:"s",title:"Urgences et relance",text:"Une urgence part sur Telegram avec un bouton « Je m'en occupe ». Sans clic en 30 minutes, l'Aiguilleur relance."},{id:"learn",size:"s",title:"Apprentissage des corrections",text:"« Mal aiguillé ? » : l'équipe corrige en un formulaire. Les 3 corrections les plus proches sont montrées à Claude à chaque nouvel e-mail."},{id:"deadline",size:"s",title:"Mémoire et échéances",text:"Claude voit les messages des 30 derniers jours du même expéditeur. Les délais légaux sont comptés en jours ouvrés, hors fériés, avec rappel la veille à 8 h."},{id:"guards",size:"l",title:"Garde-fous",text:"L'IA propose, les règles décident : pas de réponse automatique si l'expéditeur est mécontent, si l'urgence est haute ou si la confiance est sous 85 %. Faux blocs « système » neutralisés, IBAN jamais affiché en entier, et si Claude ne répond pas, l'e-mail part quand même à l'accueil."},{id:"bench",size:"l",title:"Banc d'essai et démo filmée",text:"Avant chaque démo, 32 e-mails pièges passent au banc d'essai sans rien envoyer (environ 1,5 centime par e-mail). Un script allume l'Aiguilleur, filme l'écran, envoie les e-mails et range la vidéo tout seul."},{id:"errors",size:"l",title:"Alertes d'erreur",text:"Toute exécution en échec, même une connexion Gmail coupée, est signalée — une seule fois par demi-heure pour la même erreur, pour ne pas noyer l'équipe."},{id:"multi",size:"l",title:"Une entreprise, un dossier",text:"Le moteur est commun ; chaque métier (syndic, commerce) apporte ses catégories et ses délais, chaque entreprise son profil. Workflows, Google Sheet, libellés et filtres Gmail sont générés par script."}],viz:{tower:{head:"Tour de contrôle",live:"en direct",kpis:["e-mails triés","urgences","en attente"],feed:[["09:41","Sinistre","Hugo · Gestion","u"],["09:38","Comptabilité","Lina · Compta",""],["09:35","Question","brouillon prêt","q"],["09:31","Spam","archivé","s"],["09:27","Assemblée générale","Hugo · Gestion",""],["09:22","Travaux","Inès · Technique",""],["09:18","Relance","Lina · Compta","u"]]},watchdog:{checks:["Gmail répond","Aucun e-mail bloqué > 10 min","Google Sheet joignable","Claude répond","Budget IA du jour"],next:"prochain contrôle"},report:{from:"Lundi · 08:00 — Aiguilleur IA",subj:"Votre semaine en un coup d'œil",rows:["E-mails triés","Temps gagné","Urgences prises en charge","Corrections de l'équipe ↓"]},relance:{app:"Telegram · Aiguilleur",msg:"🚨 Urgence — « Fuite d'eau au 3e étage »",btn:"Je m'en occupe",tag:"relance"},learn:{cards:["Compta → Gestion","Question → Travaux","Spam → Client"],badge:"Aiguillé d'après une correction de l'équipe"},deadline:{days:["L","M","M","J","V","S","D","L","M","M"],holiday:"férié",due:"échéance",remind:"rappel 8 h"},guards:{rules:["Expéditeur mécontent","Urgence haute","Confiance < 85 %","Bloc « système » injecté"],block:"pas de réponse auto"},bench:{lines:["$ node outils/banc-essai.js","32/32 catégories correctes · ~1,5 ct/e-mail","$ node outils/tournage.js","● REC  la démo se filme toute seule"]},errors:{lines:["✕ Connexion Gmail coupée","→ alerte Telegram + e-mail","✕ même erreur, 12 min plus tard","→ ignorée (1 alerte / 30 min)"]},multi:{trades:["syndic","commerce"],files:["profil.js","connaissances","référentiel","e-mails de test"],out:["7+ workflows","Google Sheet","libellés Gmail","filtres Gmail"]}}},en:{label:"(04) Under the hood",title:"Sorting an email is not enough. <em>Here is everything else.</em>",intro:"For a company to trust the AI Dispatcher with its contact@ inbox, it needs workflows that watch, follow up, report and learn. Each tile below is one of them.",note:"Demo animations — fictional “Lisière Syndic” agency.",tiles:[{id:"tower",size:"xl",title:"Control tower",text:"Every sorted email shows up live: category, urgency, who handles it. The tower keeps a copy of the log, re-read at most every 10 s, so it never exceeds Google’s quota (60 reads per minute)."},{id:"watchdog",size:"m",title:"Watchdog",text:"Every 15 minutes it checks Gmail, Claude, the Google Sheet, stuck emails and the daily AI budget. If something breaks: Telegram + email alert, a reminder every 3 h, then “all back to normal”."},{id:"report",size:"m",title:"Monday report",text:"Every Monday at 8 am, management gets its week: emails sorted, time saved, urgent response times, team workload, topics, security, cost — plus a Telegram summary."},{id:"relance",size:"s",title:"Urgent alerts & follow-up",text:"An urgent email goes to Telegram with a “I’ll take it” button. No click within 30 minutes and the Dispatcher follows up."},{id:"learn",size:"s",title:"Learning from corrections",text:"“Misrouted?”: the team fixes it in one form. The 3 most similar corrections are shown to Claude with every new email."},{id:"deadline",size:"s",title:"Memory & legal deadlines",text:"Claude sees the sender’s messages from the last 30 days. Legal deadlines are counted in business days, excluding holidays, with a reminder the day before at 8 am."},{id:"guards",size:"l",title:"Guardrails",text:"AI suggests, rules decide: no automatic reply if the sender is upset, urgency is high or confidence is under 85 %. Fake “system” blocks neutralised, IBANs never shown in full, and if Claude fails the email still reaches the front desk."},{id:"bench",size:"l",title:"Test bench & filmed demo",text:"Before every demo, 32 trap emails run through the test bench without sending anything (about 1.5 ¢ each). A script turns the Dispatcher on, records the screen, sends the emails and files the video by itself."},{id:"errors",size:"l",title:"Error alerts",text:"Every failed run, even a dropped Gmail connection, is reported — only once per half hour for the same error, so the team isn’t flooded."},{id:"multi",size:"l",title:"One company, one folder",text:"The engine is shared; each trade (property management, retail) brings its categories and deadlines, each company its profile. Workflows, Google Sheet, Gmail labels and filters are generated by script."}],viz:{tower:{head:"Control tower",live:"live",kpis:["emails sorted","urgent","waiting"],feed:[["09:41","Damage","Hugo · Property","u"],["09:38","Accounting","Lina · Accounts",""],["09:35","Question","draft ready","q"],["09:31","Spam","archived","s"],["09:27","General meeting","Hugo · Property",""],["09:22","Works","Inès · Technical",""],["09:18","Follow-up","Lina · Accounts","u"]]},watchdog:{checks:["Gmail responds","No email stuck > 10 min","Google Sheet reachable","Claude responds","Daily AI budget"],next:"next check in"},report:{from:"Monday · 08:00 — AI Dispatcher",subj:"Your week at a glance",rows:["Emails sorted","Time saved","Urgent emails handled","Team corrections ↓"]},relance:{app:"Telegram · Dispatcher",msg:"🚨 Urgent — “Water leak on the 3rd floor”",btn:"I’ll take it",tag:"follow-up"},learn:{cards:["Accounts → Property","Question → Works","Spam → Client"],badge:"Routed from a team correction"},deadline:{days:["M","T","W","T","F","S","S","M","T","W"],holiday:"holiday",due:"deadline",remind:"reminder 8 am"},guards:{rules:["Upset sender","High urgency","Confidence < 85 %","Injected “system” block"],block:"no auto-reply"},bench:{lines:["$ node outils/banc-essai.js","32/32 correct categories · ~1.5 ¢/email","$ node outils/tournage.js","● REC  the demo films itself"]},errors:{lines:["✕ Gmail connection dropped","→ Telegram + email alert","✕ same error, 12 min later","→ skipped (1 alert / 30 min)"]},multi:{trades:["property","retail"],files:["profil.js","knowledge","registry","test emails"],out:["7+ workflows","Google Sheet","Gmail labels","Gmail filters"]}}}},hf={fr:{doublage:[["Le directeur","Lit sa mémoire, remplit une fiche de besoins, pose une seule question à la fois, puis montre un récapitulatif avec le coût."],["Bouton « Lancer »","Rien ne part sans un clic humain : l'IA n'a pas accès à ce bouton."],["Le studio","Découpe la parole en phrases et traduit chacune pour tenir dans son créneau. Jamais plus de 10 % d'accélération : au-delà, Claude réécrit la phrase."],["Contrôle qualité","Relit la traduction, vérifie le son (niveau, saturation, silences) et le minutage, et peut renvoyer la vidéo en correction."],["Livraison","Un dossier Google Drive par client et par langue, puis la vidéo sur Telegram avec son coût réel."],["Le réparateur","Surveille les pannes, relance une fois ce qui peut l’être sans risque et prévient sur Telegram."],["Salle de contrôle","Chaque agent au travail, en direct, en lecture seule."],["Garde-fous en base","La base refuse un clone de voix sans accord écrit enregistré ; le tunnel n'expose que les webhooks, jamais l'interface de n8n."],["Coûts mesurés","Le coût réel de chaque exécution est enregistré ; une alerte part sous 20 % de crédits ElevenLabs."],["Simulateur","Telegram, Claude, ElevenLabs et Google sont simulés : le test de bout en bout fait tourner le vrai n8n et le vrai ffmpeg sans dépenser un centime."],["Prospection prête","Un éclaireur note des créateurs, un commercial rédige dans leur langue, et chaque envoi attend une validation sur Telegram."]],jobhunter:[["Bot Telegram sécurisé","Sans le secret Telegram, refus immédiat ; un identifiant inconnu est ignoré et journalisé sans son message."],["Profileur","Lit le CV en PDF, cadre la recherche question par question et ne s’active qu’au clic sur « Confirmer »."],["Chercheur","74 opportunités reçues sur un test réel, 68 nouvelles, et 0 doublon au second passage."],["Analyste","Note chaque offre : 15 cas de test sur 15 corrects, trois fois de suite, grâce à des plafonds stricts."],["Enquêteur","Retrouve le vrai site de l'entreprise (19 cas sur 19) et n'invente jamais une adresse e-mail."],["Rédacteur et vérificateur","Le vérificateur relit chaque candidature contre le CV et l’offre ; la base refuse un e-mail sans relecture réussie."],["Coûts mesurés","0,07 $ par candidature rédigée, 0,01 $ pour noter 68 offres."],["Poste de pilotage","Radar des offres par département, agents en direct, tableau à glisser-déposer, palette Ctrl K, entonnoir et test A/B."],["Machine à états","Une seule table de règles pour le tableau, la simulation et les tests ; la page « Coulisses » la dessine à partir du code."],["Accessibilité","Clavier, annonces vocales en français, mouvement réduit et contrôles automatiques avec axe."]],aiguilleur:[["Tour de contrôle","Le journal affiché en direct, avec une copie locale pour respecter le quota de Google."],["Chien de garde","Contrôle toutes les 15 min : Gmail, Claude, Google Sheet, e-mails bloqués, budget IA."],["Rapport du lundi","La semaine de la direction, chaque lundi à 8 h, par e-mail et sur Telegram."],["Relance des urgences","Bouton « Je m’en occupe » sur Telegram, relance après 30 min sans prise en charge."],["Corrections","Les 3 corrections les plus proches guident Claude à chaque nouvel e-mail."],["Échéances légales","Délais en jours ouvrés hors fériés, rappel la veille à 8 h, direction en copie le jour J."],["Garde-fous","Règles codées en dur, anti-manipulation, IBAN masqué, repli vers l’accueil si Claude ne répond pas."],["Banc d’essai","32 e-mails pièges testés sans rien envoyer avant chaque démo."]]},en:{doublage:[["The director","Reads its memory, fills a needs sheet, asks one question at a time, then shows a summary with the cost."],["“Launch” button","Nothing starts without a human click: the AI has no access to that button."],["The studio","Splits speech into sentences and translates each to fit its original slot. Never sped up more than 10 %: beyond that, Claude rewrites the sentence."],["Quality control","Reviews the translation, checks the audio (level, clipping, silences) and timing, and can send the video back for fixes."],["Delivery","One Google Drive folder per client and language, then the video on Telegram with its real cost."],["The fixer","Watches for failures, retries once whatever is safe to retry and warns on Telegram."],["Control room","Every agent at work, live, read-only."],["Database guardrails","The database rejects a voice clone without a recorded written consent; the tunnel only exposes webhooks, never the n8n UI."],["Measured costs","The real cost of every run is stored; an alert fires under 20 % of ElevenLabs credits."],["Simulator","Telegram, Claude, ElevenLabs and Google are mocked: the end-to-end test runs real n8n and real ffmpeg for free."],["Prospecting ready","A scout rates creators, a sales agent writes in their language, and every send waits for approval on Telegram."]],jobhunter:[["Secured Telegram bot","Rejected without the Telegram secret; an unknown ID is ignored and logged without its message."],["Profiler","Reads the PDF CV, frames the search question by question and only activates on “Confirm”."],["Researcher","74 opportunities received in a real test, 68 new, and 0 duplicate on the second pass."],["Analyst","Scores each offer: 15 test cases out of 15 correct, three times in a row, thanks to strict caps."],["Investigator","Finds the company’s real website (19 cases out of 19) and never invents an email address."],["Writer and reviewer","The reviewer checks each application against the CV and the offer; the database refuses an email without a passed review."],["Measured costs","$0.07 per drafted application, $0.01 to score 68 offers."],["Control room","Offer radar by département, live agents, drag-and-drop board, Ctrl K palette, funnel and A/B test."],["State machine","One rules table for the board, the simulation and the tests; the “Backstage” page draws it from the code."],["Accessibility","Keyboard, French screen-reader announcements, reduced motion and automated axe checks."]],aiguilleur:[["Control tower","The log shown live, with a local copy to respect Google’s quota."],["Watchdog","Checks every 15 min: Gmail, Claude, Google Sheet, stuck emails, AI budget."],["Monday report","Management’s week, every Monday at 8 am, by email and Telegram."],["Urgent follow-up","“I’ll take it” button on Telegram, follow-up after 30 min without pickup."],["Corrections","The 3 closest corrections guide Claude with every new email."],["Legal deadlines","Business-day deadlines excluding holidays, reminder the day before at 8 am, management copied on the day."],["Guardrails","Hard-coded rules, anti-manipulation, masked IBAN, fallback to the front desk if Claude fails."],["Test bench","32 trap emails tested without sending anything before every demo."]]}},ct=r=>String(r).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),ur=r=>String(r).padStart(2,"0"),RM={tower:r=>`<div class="viz tw" aria-hidden="true">
    <div class="tw__head mono"><span><i class="live"></i>${ct(r.head)}</span><span>${ct(r.live)}</span></div>
    <div class="tw__kpis">${r.kpis.map((e,t)=>`<div><b data-kpi="${t}">${[128,3,0][t]}</b><small>${ct(e)}</small></div>`).join("")}</div>
    <ul class="tw__feed" data-feed></ul>
    <svg class="tw__spark" viewBox="0 0 300 54" preserveAspectRatio="none"><defs><linearGradient id="twg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f80ff" stop-opacity=".45"/><stop offset="1" stop-color="#2f80ff" stop-opacity="0"/></linearGradient></defs>
      <path class="tw__area" d="M0 44 C25 40 35 30 60 32 S95 18 120 24 S160 36 185 20 S230 8 255 16 S285 10 300 6 V54 H0Z" fill="url(#twg)"/>
      <path class="tw__line" d="M0 44 C25 40 35 30 60 32 S95 18 120 24 S160 36 185 20 S230 8 255 16 S285 10 300 6" fill="none" stroke="#2f80ff" stroke-width="2"/></svg>
  </div>`,watchdog:r=>`<div class="viz wd" aria-hidden="true">
    <svg class="wd__ecg" viewBox="0 0 300 64" preserveAspectRatio="none"><path class="wd__base" d="M0 34 H300"/><path class="wd__line" d="M0 34 H48 L58 34 L66 10 L76 56 L84 34 H140 L150 34 L158 14 L168 52 L176 34 H232 L242 34 L250 10 L260 56 L268 34 H300"/></svg>
    <ul class="wd__checks mono">${r.checks.map(e=>`<li><i></i>${ct(e)}</li>`).join("")}</ul>
    <div class="wd__timer mono">${ct(r.next)} <b data-timer>15:00</b></div>
  </div>`,report:r=>`<div class="viz rp" aria-hidden="true">
    <div class="rp__from mono">${ct(r.from)}</div><div class="rp__subj">${ct(r.subj)}</div>
    ${r.rows.map((e,t)=>`<div class="rp__row"><span>${ct(e)}</span><i style="--w:${[86,64,92,34][t]}%"></i></div>`).join("")}
  </div>`,relance:r=>`<div class="viz rl" aria-hidden="true">
    <div class="rl__msg"><span class="mono">${ct(r.app)}</span><p>${ct(r.msg)}</p><span class="rl__btn">${ct(r.btn)}</span></div>
    <div class="rl__clock"><svg viewBox="0 0 80 80"><circle class="bg" cx="40" cy="40" r="34"/><circle class="fg" cx="40" cy="40" r="34"/></svg><span class="mono" data-countdown>30:00</span><em class="mono">${ct(r.tag)}</em></div>
  </div>`,learn:r=>`<div class="viz ln" aria-hidden="true">
    <div class="ln__cards">${r.cards.map((e,t)=>`<span class="ln__card mono" style="--i:${t}">${ct(e)}</span>`).join("")}</div>
    <span class="ln__arrow">→</span><span class="ln__claude">Claude</span>
    <span class="ln__badge mono">${ct(r.badge)}</span>
  </div>`,deadline:r=>`<div class="viz dl" aria-hidden="true">
    <div class="dl__days">${r.days.map((e,t)=>`<span class="dl__d${t===5||t===6?" is-off":""}${t===8?" is-hol":""}${t===9?" is-due":""}" data-day="${t}"><b>${ct(e)}</b>${t===8?`<small>${ct(r.holiday)}</small>`:""}${t===9?`<small>${ct(r.due)}</small>`:""}${t===7?`<small class="dl__rem">${ct(r.remind)}</small>`:""}</span>`).join("")}</div>
    <div class="dl__mem"><i></i><i></i><i></i><i></i><i></i><span class="mono">30 j</span></div>
  </div>`,guards:r=>`<div class="viz gd" aria-hidden="true">
    <ul class="gd__rules">${r.rules.map(e=>`<li><span class="gd__lock">🔒</span><span>${ct(e)}</span><em class="mono">${ct(r.block)}</em></li>`).join("")}</ul>
    <div class="gd__iban mono">IBAN <b data-iban>FR76 3000 6000 0112 3456 7890 189</b></div>
  </div>`,bench:r=>`<div class="viz tm" aria-hidden="true"><div class="tm__bar"><i></i><i></i><i></i></div><div class="tm__body mono" data-term data-lines="${ct(JSON.stringify(r.lines))}"></div></div>`,errors:r=>`<div class="viz er" aria-hidden="true">${r.lines.map((e,t)=>`<p class="mono${e.startsWith("✕")?" is-err":""}${t===3?" is-mute":""}" style="--i:${t}">${ct(e)}</p>`).join("")}</div>`,multi:r=>`<div class="viz mt" aria-hidden="true">
    <div class="mt__col">${r.trades.map(e=>`<span class="mt__chip">${ct(e)}</span>`).join("")}</div>
    <div class="mt__flow"><i></i><i></i><i></i></div>
    <div class="mt__col">${r.files.map(e=>`<span class="mt__file mono">${ct(e)}</span>`).join("")}</div>
    <div class="mt__flow"><i></i><i></i><i></i></div>
    <div class="mt__col">${r.out.map(e=>`<span class="mt__out mono">${ct(e)}</span>`).join("")}</div>
  </div>`};function vd(r){return df[r]||df.fr}function PM(r){const e=vd(r);return e.tiles.map((t,n)=>`<article class="tile tile--${t.size} tile--${t.id}">
    <div class="tile__viz">${RM[t.id](e.viz[t.id])}</div>
    <div class="tile__txt"><span class="tile__n mono">${ur(n+1)}</span><h3>${ct(t.title)}</h3><p>${ct(t.text)}</p></div>
  </article>`).join("")}function DM(r,e){const t=(hf[r]||hf.fr)[e];return t?`<section class="feats"><h4>${r==="fr"?"Sous le capot":"Under the hood"}</h4><div class="feats__grid">${t.map(([i,s],a)=>`<div class="feat"><span class="mono">${ur(a+1)}</span><b>${ct(i)}</b><p>${ct(s)}</p></div>`).join("")}</div></section>`:""}function LM({reduced:r,lang:e}){const t=document.getElementById("hood");if(!t)return;const n=[...t.querySelectorAll(".tile")],i=vd(e),s=q=>q.closest(".tile").classList.contains("is-live")&&!document.documentElement.classList.contains("fx-off");if(r){n.forEach(q=>q.classList.add("is-live","is-static")),IM(t,i);return}const a=new IntersectionObserver(q=>q.forEach(R=>R.target.classList.toggle("is-live",R.isIntersecting)),{threshold:.2});n.forEach(q=>a.observe(q)),ge.from(n,{y:70,opacity:0,clipPath:"inset(18% 0 0 0 round 22px)",duration:1.2,ease:"expo.out",stagger:.07,scrollTrigger:{trigger:t,start:"top 82%"}}),n.forEach(q=>q.addEventListener("pointermove",R=>{const ne=q.getBoundingClientRect();q.style.setProperty("--mx",`${R.clientX-ne.left}px`),q.style.setProperty("--my",`${R.clientY-ne.top}px`)}));const o=t.querySelector("[data-feed]"),l=i.viz.tower.feed,c=[...t.querySelectorAll("[data-kpi]")],u=7;let h=0,d=581;const f=q=>`${ur(Math.floor(q/60)%24)}:${ur(q%60)}`,g=([q,R,ne,Re])=>`<li class="t-${Re||"n"}"><span class="mono">${q}</span><b>${ct(R)}</b><span>${ct(ne)}</span></li>`;l.slice(0,u).forEach(q=>o.insertAdjacentHTML("beforeend",g(q))),setInterval(()=>{if(!s(o))return;const q=l[h++%l.length];d+=1+h%3,o.insertAdjacentHTML("afterbegin",g([f(d),q[1],q[2],q[3]]));const R=o.firstElementChild;for(ge.from(R,{height:0,opacity:0,y:-14,duration:.6,ease:"expo.out"}),ge.fromTo(R,{backgroundColor:"rgba(47,128,255,.28)"},{backgroundColor:"rgba(47,128,255,0)",duration:1.6});o.children.length>u;)o.lastElementChild.remove();c[0].textContent=+c[0].textContent+1,q[3]==="u"&&(c[1].textContent=+c[1].textContent+1,ge.fromTo(c[1],{color:"#ff6b6b"},{color:"#eceef2",duration:1.4}))},2300);const _=[...t.querySelectorAll(".wd__checks li")],m=t.querySelector("[data-timer]");let p=0,E=900;setInterval(()=>{s(m)&&(E=E<=1?900:E-1,m.textContent=`${ur(Math.floor(E/60))}:${ur(E%60)}`)},1e3),setInterval(()=>{if(s(m)){if(p===_.length){_.forEach(q=>q.classList.remove("is-ok")),p=0;return}_[p++].classList.add("is-ok")}},700);const T=t.querySelector("[data-countdown]"),x=t.querySelector(".rl__clock .fg"),w=t.querySelector(".rl"),A=2*Math.PI*34;x.style.strokeDasharray=A;const b=ge.timeline({repeat:-1,paused:!0,repeatDelay:.6}).fromTo(x,{strokeDashoffset:0},{strokeDashoffset:A,duration:6,ease:"none",onUpdate(){const q=Math.round(1800*(1-this.progress()));T.textContent=`${ur(Math.floor(q/60))}:${ur(q%60)}`}}).add(()=>w.classList.add("is-fired")).to({},{duration:1.6}).add(()=>w.classList.remove("is-fired")),P=[...t.querySelectorAll(".dl__d")],S=ge.timeline({repeat:-1,paused:!0,repeatDelay:1});P.forEach((q,R)=>{!q.classList.contains("is-off")&&!q.classList.contains("is-hol")&&S.add(()=>q.classList.add("is-count"),R*.45)}),S.add(()=>P.forEach(q=>q.classList.remove("is-count")),"+=1.4");const v=[...t.querySelectorAll(".gd__rules li")],D=t.querySelector("[data-iban]"),N=D.textContent,U=N.replace(/^(\S+)(.*)(\s\S+)$/,(q,R,ne,Re)=>R+ne.replace(/\d/g,"•")+Re),B=ge.timeline({repeat:-1,paused:!0,repeatDelay:.8});v.forEach((q,R)=>B.add(()=>{v.forEach(ne=>ne.classList.remove("is-hit")),q.classList.add("is-hit")},R*.9)),B.add(()=>{v.forEach(q=>q.classList.remove("is-hit"))},"+=0.9"),B.add(()=>{D.textContent=U,D.classList.add("is-masked")},.5).add(()=>{D.textContent=N,D.classList.remove("is-masked")},"+=0.2");const X=t.querySelector("[data-term]"),W=JSON.parse(X.dataset.lines),H=ge.timeline({repeat:-1,paused:!0,repeatDelay:1.6});H.add(()=>{X.innerHTML=""}),W.forEach((q,R)=>{const ne={n:0};H.add(()=>X.insertAdjacentHTML("beforeend",`<p class="${q.startsWith("$")?"is-cmd":q.startsWith("●")?"is-rec":"is-out"}"></p>`)),H.to(ne,{n:q.length,duration:q.startsWith("$")?q.length*.035:.25,ease:"none",onUpdate:()=>{X.children[R].textContent=q.slice(0,Math.round(ne.n))}}),H.to({},{duration:.35})});const z=[[w,b],[P[0],S],[D,B],[X,H]];setInterval(()=>z.forEach(([q,R])=>{s(q)?R.paused()&&R.play():R.paused()||R.pause()}),300)}function IM(r,e){const t=r.querySelector("[data-feed]");t.innerHTML=e.viz.tower.feed.slice(0,7).map(([i,s,a,o])=>`<li class="t-${o||"n"}"><span class="mono">${i}</span><b>${ct(s)}</b><span>${ct(a)}</span></li>`).join(""),r.querySelectorAll(".wd__checks li").forEach(i=>i.classList.add("is-ok"));const n=r.querySelector("[data-term]");n.innerHTML=JSON.parse(n.dataset.lines).map(i=>`<p class="${i.startsWith("$")?"is-cmd":i.startsWith("●")?"is-rec":"is-out"}">${ct(i)}</p>`).join(""),r.querySelectorAll(".dl__d:not(.is-off):not(.is-hol)").forEach(i=>i.classList.add("is-count"))}ge.registerPlugin(ke);const He=(r,e=document)=>e.querySelector(r),Qn=(r,e=document)=>[...e.querySelectorAll(r)],Hn=window.matchMedia("(prefers-reduced-motion: reduce)").matches,_m=window.matchMedia("(hover: hover) and (pointer: fine)").matches,gm=new URLSearchParams(location.search),vm=Hn||gm.has("og");let $a=!1,vl=!1,xm=null;try{xm=localStorage.getItem("lang")}catch{}const An=gm.get("lang")||xm||((navigator.language||"fr").startsWith("fr")?"fr":"en"),Cn=oh[An]||oh.fr,pn=Cn.ui;document.documentElement.lang=An;document.title=Cn.meta.title;He('meta[name="description"]').setAttribute("content",Cn.meta.description);Qn("[data-i18n]").forEach(r=>{const e=pn[r.dataset.i18n];e!=null&&(r.innerHTML=e)});const Sm=He("#langBtn");Sm.setAttribute("aria-label",pn["lang.switch"]);He(".lang__on").textContent=An.toUpperCase();He(".lang__off").textContent=An==="fr"?"EN":"FR";const ut=r=>String(r).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),ta=r=>String(r).padStart(2,"0");He("#stats").innerHTML=Cn.stats.map(r=>`<div class="stat"><div class="stat__n"><span data-count="${r.n}">0</span><small>${ut(r.suffix)}</small></div><p>${ut(r.label)}</p></div>`).join("");He("#workList").innerHTML=Cn.projects.map((r,e)=>`<li><button class="row" type="button" data-project="${r.id}" data-cursor="view"${r.img?` data-img="${r.img}"`:""}>
  <span class="row__n mono">${ta(e+1)}</span><span class="row__title">${ut(r.title)}</span><span class="row__sub">${ut(r.sub)}</span>
  <span class="row__tags">${r.tags.map(t=>`<i class="tag">${ut(t)}</i>`).join("")}</span><span class="row__arrow" aria-hidden="true">→</span></button></li>`).join("");He("#pipelineGraph").innerHTML=Cn.pipeline.nodes.map(([r,e],t)=>`<div class="node"><div class="node__box"><div class="node__i mono"><span>${ta(t+1)}</span><b></b></div><div class="node__t">${ut(r)}</div><div class="node__d">${ut(e)}</div></div><i class="node__link"></i></div>`).join("");He("#pipelineLog").innerHTML=Cn.pipeline.log.map(r=>`<p>${ut(r)}</p>`).join("");He("#reel").innerHTML=Cn.motion.map((r,e)=>`<button class="clip" type="button" style="aspect-ratio:${r.ratio}" data-video="${r.src}" data-cursor="view" aria-label="${ut(pn["motion.play"])} — ${ut(r.title)}">
  <video muted loop playsinline preload="none" poster="${r.poster}" data-src="${r.src}"></video><span class="clip__n mono">${ta(e+1)}</span>
  <span class="clip__cap"><strong>${ut(r.title)}</strong><span class="mono">${ut(r.meta)}</span></span></button>`).join("");const Al=vd(An);He("#hoodLabel").textContent=Al.label;He("#hoodTitle").innerHTML=Al.title;He("#hoodIntro").textContent=Al.intro;He("#hoodNote").textContent=Al.note;He("#hood").innerHTML=PM(An);He("#caps").innerHTML=Cn.caps.map(([r,e],t)=>`<article class="cap"><span class="cap__n mono">${ta(t+1)}</span><h3>${ut(r)}</h3><ul>${e.map(n=>`<li>${ut(n)}</li>`).join("")}</ul></article>`).join("");He("#path").innerHTML=Cn.path.map(([r,e,t,n])=>`<li class="step"><span class="step__y mono">${ut(r)}</span><div><h3>${ut(e)}</h3><p class="step__o">${ut(t)}</p></div><p class="step__d">${ut(n)}</p></li>`).join("");function ym(r,e="w"){const t=n=>{[...n.childNodes].forEach(i=>{if(i.nodeType===3){const s=document.createDocumentFragment();i.textContent.split(/(\s+)/).forEach(a=>{if(!a)return;if(/^\s+$/.test(a)){s.append(" ");return}const o=document.createElement("span");if(o.className=e,e==="w"){const l=document.createElement("span");l.textContent=a,o.append(l)}else o.textContent=a;s.append(o)}),i.replaceWith(s)}else i.nodeType===1&&t(i)})};t(r)}Qn('[data-split="chars"]').forEach(r=>{const e=[...r.childNodes].map(t=>t.nodeType===3?[...t.textContent].map(n=>`<span class="char">${n}</span>`).join(""):`<span class="char">${t.outerHTML}</span>`).join("");r.innerHTML=e});Qn(".title, .contact__title").forEach(r=>ym(r));ym(He("#manifestoText"),"mw");let Ln=null;Hn||(Ln=new pg({duration:1.15,smoothWheel:!0}),Ln.on("scroll",ke.update),ge.ticker.add(r=>Ln.raf(r*1e3)),ge.ticker.lagSmoothing(0),vm||Ln.stop());const UM=r=>{const e=He(r);e&&(Ln?Ln.scrollTo(e,{duration:1.6}):e.scrollIntoView())};document.addEventListener("click",r=>{const e=r.target.closest('a[href^="#"]');e&&(r.preventDefault(),yd(),Sd(),UM(e.getAttribute("href")))});let nn=null;try{nn=wM(He("#gl"),{reduced:Hn})}catch{He("#gl").remove()}function NM(){document.body.classList.remove("is-loading"),Ln?.start();const r=ge.timeline({defaults:{ease:"expo.out"}});nn&&r.to(nn.uniforms.uIntro,{value:1,duration:2.4,ease:"expo.out"},0),r.from(".hero__line .char",{yPercent:120,rotate:6,duration:1.5,stagger:.035},.1).from(".hero__top > *, .hero__bottom > *",{y:26,opacity:0,duration:1.1,stagger:.08},.7).from(".header > *",{y:-30,opacity:0,duration:1,stagger:.08},.6).from(".hero__bottom",{"--line":0,duration:1},.6),ke.refresh()}if(vm)He("#loader").remove(),document.body.classList.remove("is-loading"),nn&&(nn.uniforms.uIntro.value=1);else{const r={v:0};ge.timeline({onComplete:NM}).to(".loader__log li",{opacity:1,y:0,duration:.4,stagger:.32,ease:"power2.out"},.1).to(r,{v:100,duration:1.9,ease:"power2.inOut",onUpdate:()=>{He("#loaderCount").textContent=String(Math.round(r.v)).padStart(3,"0")}},0).to("#loaderBar",{scaleX:1,duration:1.9,ease:"power2.inOut"},0).to(".loader__count, .loader__log, .loader__name",{yPercent:-40,opacity:0,duration:.6,ease:"power3.in",stagger:.04},"+=0.15").to("#loader",{clipPath:"inset(0 0 100% 0)",duration:1,ease:"expo.inOut"},"-=0.25").set("#loader",{display:"none"})}if(!Hn){nn&&(ke.create({trigger:".hero",start:"top top",end:"bottom top",scrub:!0,onUpdate:n=>{nn.morph=n.progress,nn.tilt=n.progress,nn.fade=1-n.progress*.55}}),ke.create({trigger:"#manifeste",start:"top 60%",endTrigger:"#contact",end:"top 80%",onEnter:()=>{nn.fade=.3},onLeaveBack:()=>{nn.fade=.45}}),ke.create({trigger:"#contact",start:"top 75%",end:"bottom bottom",scrub:!0,onUpdate:n=>{nn.morph=1-n.progress,nn.tilt=1-n.progress,nn.fade=.3+n.progress*.6}})),ge.to(".hero__title",{yPercent:-18,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}}),ge.to(".hero__line--right",{xPercent:-6,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}});const r=He("#marquee");r.innerHTML+=r.innerHTML;let e=0,t=1;ke.create({onUpdate:n=>{t=1+Math.min(Math.abs(n.getVelocity())/220,9)*(n.direction||1)}}),ge.ticker.add(()=>{e-=t*.9,t+=(1-t)*.06;const n=r.scrollWidth/2;e<=-n&&(e+=n),e>0&&(e-=n),r.style.transform=`translate3d(${e}px,0,0)`}),ge.to("#manifestoText .mw",{opacity:1,stagger:.06,ease:"none",scrollTrigger:{trigger:"#manifestoText",start:"top 82%",end:"bottom 45%",scrub:.6}}),Qn(".title, .contact__title").forEach(n=>{n.closest(".pipeline")||ge.from(Qn(".w > span",n),{yPercent:115,rotate:4,duration:1.25,ease:"expo.out",stagger:.06,scrollTrigger:{trigger:n,start:"top 88%"}})}),Qn("[data-count]").forEach(n=>{const i={v:0},s=+n.dataset.count;ge.to(i,{v:s,duration:1.8,ease:"power3.out",onUpdate:()=>{n.textContent=Math.round(i.v)},scrollTrigger:{trigger:n,start:"top 90%"}})}),ge.from(".stat",{y:40,opacity:0,duration:1,stagger:.09,ease:"expo.out",scrollTrigger:{trigger:"#stats",start:"top 88%"}}),ge.from("#workList li",{y:60,opacity:0,duration:1.1,stagger:.08,ease:"expo.out",scrollTrigger:{trigger:"#workList",start:"top 85%"}}),ge.from(".cap",{y:50,opacity:0,duration:1,stagger:.07,ease:"expo.out",scrollTrigger:{trigger:"#caps",start:"top 85%"}}),Qn(".step").forEach(n=>ge.from(n,{y:34,opacity:0,duration:1,ease:"expo.out",scrollTrigger:{trigger:n,start:"top 92%"}})),ge.from("#mdmPages img",{yPercent:n=>18+n*14,rotate:n=>n%2?3:-3,ease:"none",scrollTrigger:{trigger:"#mdmPages",start:"top bottom",end:"bottom 60%",scrub:.8}}),ge.from(".contact__text, .contact__actions > *, .contact__list > div",{y:30,opacity:0,duration:1,stagger:.06,ease:"expo.out",scrollTrigger:{trigger:".contact__text",start:"top 92%"}}),ke.create({start:200,onUpdate:n=>He("#header").classList.toggle("is-hidden",n.direction===1&&!$a)})}const ff=Qn(".node"),FM=Qn("#pipelineLog p");function yc(r){const e=ff.length,t=r*e;ff.forEach((n,i)=>{n.classList.toggle("is-on",t>=i+.15),He(".node__link",n).style.setProperty("--p",Math.max(0,Math.min(1,t-i-.35)*1.6).toFixed(3))}),FM.forEach((n,i)=>n.classList.toggle("is-on",t>=i+.3))}const pf=ge.matchMedia();Hn?yc(1):(pf.add("(min-width: 761px)",()=>{ge.from(".pipeline .w > span",{yPercent:115,duration:1.2,ease:"expo.out",stagger:.05,scrollTrigger:{trigger:".pipeline",start:"top 70%"}}),ke.create({trigger:".pipeline__pin",start:"top top",end:"+=2400",pin:!0,scrub:.5,onUpdate:t=>yc(t.progress*1.08)});const r=He("#reel"),e=()=>Math.max(0,r.scrollWidth-window.innerWidth+parseFloat(getComputedStyle(r).paddingRight));ge.to(r,{x:()=>-e(),ease:"none",scrollTrigger:{trigger:r,start:"center center",end:()=>`+=${e()}`,pin:".motion",scrub:.6,invalidateOnRefresh:!0}})}),pf.add("(max-width: 760px)",()=>{ke.create({trigger:".pipeline__stage",start:"top 75%",end:"bottom 55%",scrub:.5,onUpdate:r=>yc(r.progress*1.08)})}));const OM=new IntersectionObserver(r=>r.forEach(e=>{const t=e.target;e.isIntersecting?(t.src||(t.src=t.dataset.src),Hn||t.play().catch(()=>{})):t.pause()}),{threshold:.25});Qn(".clip video").forEach(r=>OM.observe(r));const ji=He("#lightbox"),Hs=He("#lightboxVideo");let Cl=null;function BM(r){Cl=document.activeElement,Hs.src=r,ji.setAttribute("aria-hidden","false"),ge.set(ji,{visibility:"visible"}),ge.to(ji,{opacity:1,duration:.4}),ge.fromTo(Hs,{scale:.9,y:30},{scale:1,y:0,duration:.8,ease:"expo.out"}),Ln?.stop(),Hs.play().catch(()=>{}),He("#lightboxClose").focus()}function xd(){ji.getAttribute("aria-hidden")!=="true"&&(ji.setAttribute("aria-hidden","true"),Hs.pause(),ge.to(ji,{opacity:0,duration:.3,onComplete:()=>{ge.set(ji,{visibility:"hidden"}),Hs.removeAttribute("src"),Hs.load()}}),Ln?.start(),Cl?.focus())}He("#reel").addEventListener("click",r=>{const e=r.target.closest(".clip");e&&BM(e.dataset.video)});He("#lightboxClose").addEventListener("click",xd);ji.addEventListener("click",r=>{r.target===ji&&xd()});const xl=He("#case"),Mm=He("#caseBody");function Fu(r){const e=Cn.projects.findIndex(i=>i.id===r),t=Cn.projects[e],n=Cn.projects[(e+1)%Cn.projects.length];Mm.innerHTML=`<p class="case__n mono">${ta(e+1)} / ${ta(Cn.projects.length)} — ${ut(t.year)}</p>
    <h2 class="case__title" id="caseTitle">${ut(t.title)}</h2><p class="case__sub">${ut(t.sub)}</p>
    <div class="case__grid"><div><p class="case__summary">${ut(t.summary)}</p>${t.img?`<img class="case__img" src="${t.img}" alt="${ut(t.title)}" />`:""}
      <div class="case__links">${t.links.map(([i,s])=>`<a class="btn btn--primary" href="${s}"${s.startsWith("#")?"":' target="_blank" rel="noopener"'}><span class="btn__fill"></span><span>${ut(i)}</span><span class="btn__arrow">→</span></a>`).join("")}
        <button class="btn" type="button" data-next="${n.id}"><span class="btn__fill"></span><span>${ut(pn["case.next"])} — ${ut(n.title)}</span><span class="btn__arrow">→</span></button></div></div>
      <div><h4>${ut(pn["case.results"])}</h4><div class="metrics">${t.metrics.map(([i,s])=>`<div class="metric"><b>${ut(i)}</b><span>${ut(s)}</span></div>`).join("")}</div>
        <h4>${ut(pn["case.stack"])}</h4><div class="case__stack">${t.stack.map(i=>`<i class="tag">${ut(i)}</i>`).join("")}</div>
        <h4>${ut(pn["case.built"])}</h4><ul class="case__built">${t.built.map(i=>`<li>${ut(i)}</li>`).join("")}</ul></div>${DM(An,t.id)}</div>`,He(".case__scroll").scrollTop=0,Hn||ge.from("#caseBody .case__n, #caseBody .case__title, #caseBody .case__sub, #caseBody .case__summary, #caseBody .case__img, #caseBody .metric, #caseBody .case__built li, #caseBody .case__links, #caseBody .feat",{y:40,opacity:0,duration:.9,stagger:.04,ease:"expo.out",delay:.15})}function kM(r){Cl=document.activeElement,vl=!0,xl.setAttribute("aria-hidden","false"),Ln?.stop(),Em(),ge.set(xl,{visibility:"visible"}),Hn?(ge.set(".case__scroll",{clipPath:"inset(0% 0 0 0)"}),Fu(r)):ge.timeline().fromTo(".case__curtain",{scaleY:0,transformOrigin:"bottom"},{scaleY:1,duration:.6,ease:"expo.inOut"}).add(()=>Fu(r)).fromTo(".case__scroll",{clipPath:"inset(100% 0 0 0)"},{clipPath:"inset(0% 0 0 0)",duration:.8,ease:"expo.inOut"},"-=0.15"),He("#caseClose").focus()}function Sd(){vl&&(vl=!1,xl.setAttribute("aria-hidden","true"),ge.timeline({onComplete:()=>{ge.set(xl,{visibility:"hidden"}),Ln?.start(),Cl?.focus?.()}}).to(".case__scroll",{clipPath:"inset(0 0 100% 0)",duration:Hn?0:.6,ease:"expo.inOut"}).to(".case__curtain",{scaleY:0,transformOrigin:"top",duration:Hn?0:.5,ease:"expo.inOut"},"-=0.3"))}He("#workList").addEventListener("click",r=>{const e=r.target.closest(".row");e&&kM(e.dataset.project)});Mm.addEventListener("click",r=>{const e=r.target.closest("[data-next]");e&&Fu(e.dataset.next)});He("#caseClose").addEventListener("click",Sd);const Gs=He("#menu"),Ua=He("#menuBtn");function yd(){$a&&($a=!1,Ua.setAttribute("aria-expanded","false"),Gs.setAttribute("aria-hidden","true"),He("span",Ua).textContent=pn["nav.menu"],ge.to(Gs,{clipPath:"inset(0 0 100% 0)",duration:.6,ease:"expo.inOut",onComplete:()=>ge.set(Gs,{visibility:"hidden"})}),Ln?.start())}Ua.addEventListener("click",()=>{if($a)return yd();$a=!0,Ua.setAttribute("aria-expanded","true"),Gs.setAttribute("aria-hidden","false"),He("span",Ua).textContent=pn["nav.close"],Ln?.stop(),ge.set(Gs,{visibility:"visible"}),ge.fromTo(Gs,{clipPath:"inset(0 0 100% 0)"},{clipPath:"inset(0 0 0% 0)",duration:.7,ease:"expo.inOut"}),ge.from(".menu__nav a",{yPercent:100,opacity:0,duration:.8,stagger:.06,ease:"expo.out",delay:.25})});document.addEventListener("keydown",r=>{r.key==="Escape"&&(xd(),Sd(),yd())});const Ls=He("#preview"),Mc=He("img",Ls);function Em(){ge.to(Ls,{opacity:0,duration:.3}),ge.to(".preview__inner",{clipPath:"inset(100% 0 0 0)",duration:.4,ease:"power3.in"})}if(_m&&!Hn){const r=He(".cursor"),e=He(".cursor__dot"),t=He(".cursor__ring"),n=He(".cursor__label"),i=ge.quickTo(e,"x",{duration:.08}),s=ge.quickTo(e,"y",{duration:.08}),a=ge.quickTo(t,"x",{duration:.45,ease:"power3"}),o=ge.quickTo(t,"y",{duration:.45,ease:"power3"}),l=ge.quickTo(Ls,"x",{duration:.7,ease:"power3"}),c=ge.quickTo(Ls,"y",{duration:.7,ease:"power3"}),u=ge.quickTo(Ls,"rotate",{duration:.7,ease:"power3"});let h=0;window.addEventListener("pointermove",d=>{i(d.clientX),s(d.clientY),a(d.clientX),o(d.clientY),l(d.clientX+180),c(d.clientY),u(Math.max(-10,Math.min(10,(d.clientX-h)*.6))),h=d.clientX},{passive:!0}),document.addEventListener("pointerover",d=>{const f=d.target.closest('[data-cursor="view"]'),g=d.target.closest("a, button");r.classList.toggle("is-view",!!f),r.classList.toggle("is-link",!f&&!!g),n.textContent=f?f.classList.contains("clip")?"▶":An==="fr"?"Ouvrir":"Open":"";const _=d.target.closest(".row[data-img]");_&&!vl?(Mc.getAttribute("src")!==_.dataset.img&&(Mc.src=_.dataset.img),ge.to(Ls,{opacity:1,duration:.3}),ge.to(".preview__inner",{clipPath:"inset(0% 0 0 0)",duration:.7,ease:"expo.out",overwrite:!0}),ge.fromTo(Mc,{scale:1.35},{scale:1,duration:1,ease:"expo.out",overwrite:!0})):d.target.closest(".row")||Em()}),Qn("[data-magnetic]").forEach(d=>{const f=ge.quickTo(d,"x",{duration:.6,ease:"elastic.out(1,0.5)"}),g=ge.quickTo(d,"y",{duration:.6,ease:"elastic.out(1,0.5)"});d.addEventListener("pointermove",_=>{const m=d.getBoundingClientRect();f((_.clientX-m.left-m.width/2)*.35),g((_.clientY-m.top-m.height/2)*.35)}),d.addEventListener("pointerleave",()=>{f(0),g(0)})}),Qn(".cap").forEach(d=>d.addEventListener("pointermove",f=>{const g=d.getBoundingClientRect();d.style.setProperty("--mx",`${f.clientX-g.left}px`),d.style.setProperty("--my",`${f.clientY-g.top}px`)})),Qn(".clip").forEach(d=>{d.addEventListener("pointermove",f=>{const g=d.getBoundingClientRect();ge.to(d,{rotateY:((f.clientX-g.left)/g.width-.5)*8,rotateX:-((f.clientY-g.top)/g.height-.5)*8,transformPerspective:900,duration:.5,ease:"power3"})}),d.addEventListener("pointerleave",()=>ge.to(d,{rotateX:0,rotateY:0,duration:.8,ease:"elastic.out(1,0.6)"}))})}LM({reduced:Hn,lang:An});CM({lenis:Ln,hero:nn,reduced:Hn,fine:_m,lang:An,sections:[["#top",An==="fr"?"Accueil":"Home"],["#manifeste",An==="fr"?"Manifeste":"Manifesto"],["#travaux",pn["nav.work"]],["#pipeline",pn["nav.pipeline"]],["#sous-le-capot",An==="fr"?"Sous le capot":"Under the hood"],["#motion",pn["nav.motion"]],["#capacites",An==="fr"?"Capacités":"Capabilities"],["#parcours",pn["nav.path"]],["#contact",pn["nav.contact"]]]});Sm.addEventListener("click",()=>{const r=An==="fr"?"en":"fr";try{localStorage.setItem("lang",r)}catch{}const e=()=>{const n=new URL(location.href);n.searchParams.delete("lang"),n.hash="",location.replace(n)};if(Hn)return e();const t=document.createElement("div");t.className="wipe",document.body.append(t),ge.to(t,{scaleY:1,duration:.6,ease:"expo.inOut",onComplete:e})});He("#copyBtn").addEventListener("click",async()=>{const r=He("#copyBtn .btn__label");try{await navigator.clipboard.writeText(lh.email),r.textContent=pn["contact.copied"]}catch{r.textContent=lh.email}setTimeout(()=>{r.textContent=pn["contact.copy"]},2200)});const zM=He("#clock"),HM=new Intl.DateTimeFormat("fr-FR",{timeZone:"Europe/Paris",hour:"2-digit",minute:"2-digit",second:"2-digit"}),Tm=()=>{zM.textContent=HM.format(new Date)};Tm();setInterval(Tm,1e3);document.addEventListener("visibilitychange",()=>{nn&&(document.hidden?nn.pause():nn.play())});window.addEventListener("load",()=>ke.refresh());document.fonts?.ready.then(()=>ke.refresh());
