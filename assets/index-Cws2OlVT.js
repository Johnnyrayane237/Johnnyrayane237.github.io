var Ng=Object.defineProperty;var Og=(r,e,t)=>e in r?Ng(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var $e=(r,e,t)=>Og(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function dr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function hm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ro={duration:.5,overwrite:!1,delay:0},hd,An,Ht,Di=1e8,Ft=1/Di,Vu=Math.PI*2,kg=Vu/4,Bg=0,dm=Math.sqrt,zg=Math.cos,Hg=Math.sin,Sn=function(e){return typeof e=="string"},Yt=function(e){return typeof e=="function"},wr=function(e){return typeof e=="number"},dd=function(e){return typeof e>"u"},nr=function(e){return typeof e=="object"},ni=function(e){return e!==!1},fd=function(){return typeof window<"u"},sl=function(e){return Yt(e)||Sn(e)},fm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Bn=Array.isArray,Gu=/(?:-?\.?\d|\.)+/gi,pm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,uo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Vc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,mm=/[+-]=-?[.\d]+/,gm=/[^,'"\[\]\s]+/gi,Vg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Gt,Wi,Wu,pd,xi={},hc={},_m,vm=function(e){return(hc=Po(e,xi))&&ai},md=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ka=function(e,t){return!t&&console.warn(e)},xm=function(e,t){return e&&(xi[e]=t)&&hc&&(hc[e]=t)||xi},Ba=function(){return 0},Gg={suppressEvents:!0,isStart:!0,kill:!1},jl={suppressEvents:!0,kill:!1},Wg={suppressEvents:!0},gd={},Wr=[],qu={},ym,fi={},Gc={},nf=30,Jl=[],_d="",vd=function(e){var t=e[0],n,i;if(nr(t)||Yt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Jl.length;i--&&!Jl[i].targetTest(t););n=Jl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Wm(e[i],n)))||e.splice(i,1);return e},ws=function(e){return e._gsap||vd(Li(e))[0]._gsap},Mm=function(e,t,n){return(n=e[t])&&Yt(n)?e[t]():dd(n)&&e.getAttribute&&e.getAttribute(t)||n},ii=function(e,t){return(e=e.split(",")).forEach(t)||e},jt=function(e){return Math.round(e*1e5)/1e5||0},rn=function(e){return Math.round(e*1e7)/1e7||0},vo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},qg=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},dc=function(){var e=Wr.length,t=Wr.slice(0),n,i;for(qu={},Wr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},xd=function(e){return!!(e._initted||e._startAt||e.add)},Sm=function(e,t,n,i){Wr.length&&!An&&dc(),e.render(t,n,!!(An&&t<0&&xd(e))),Wr.length&&!An&&dc()},bm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(gm).length<2?t:Sn(e)?e.trim():e},wm=function(e){return e},yi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Xg=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Po=function(e,t){for(var n in t)e[n]=t[n];return e},rf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=nr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},fc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ma=function(e){var t=e.parent||Gt,n=e.keyframes?Xg(Bn(e.keyframes)):yi;if(ni(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Yg=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Tm=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Ic=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Jr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ts=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},$g=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Xu=function(e,t,n,i){return e._startAt&&(An?e._startAt.revert(jl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},jg=function r(e){return!e||e._ts&&r(e.parent)},sf=function(e){return e._repeat?Do(e._tTime,e=e.duration()+e._rDelay)*e:0},Do=function(e,t){var n=Math.floor(e=rn(e/t));return e&&n===e?n-1:n},pc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Fc=function(e){return e._end=rn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ft)||0))},Uc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=rn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Fc(e),n._dirty||Ts(n,e)),e},Em=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=pc(e.rawTime(),t),(!t._dur||tl(0,t.totalDuration(),n)-t._tTime>Ft)&&t.render(n,!0)),Ts(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ft}},Yi=function(e,t,n,i){return t.parent&&Jr(t),t._start=rn((wr(n)?n:n||e!==Gt?Ei(e,n,t):e._time)+t._delay),t._end=rn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Tm(e,t,"_first","_last",e._sort?"_start":0),Yu(t)||(e._recent=t),i||Em(e,t),e._ts<0&&Uc(e,e._tTime),e},Am=function(e,t){return(xi.ScrollTrigger||md("scrollTrigger",t))&&xi.ScrollTrigger.create(t,e)},Cm=function(e,t,n,i,s){if(Md(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!An&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ym!==mi.frame)return Wr.push(e),e._lazy=[s,i],1},Jg=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Yu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Kg=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Jg(e)&&!(!e._initted&&Yu(e))||(e._ts<0||e._dp._ts<0)&&!Yu(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=tl(0,e._tDur,t),u=Do(l,a),e._yoyo&&u&1&&(o=1-o),u!==Do(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||An||i||e._zTime===Ft||!t&&e._zTime){if(!e._initted&&Cm(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Ft:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Xu(e,t,n,!0),e._onUpdate&&!n&&_i(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&_i(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Jr(e,1),!n&&!An&&(_i(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Zg=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Lo=function(e,t,n,i){var s=e._repeat,o=rn(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:rn(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Uc(e,e._tTime=e._tDur*a),e.parent&&Fc(e),n||Ts(e.parent,e),e},of=function(e){return e instanceof jn?Ts(e):Lo(e,e._dur)},Qg={_start:0,endTime:Ba,totalDuration:Ba},Ei=function r(e,t,n){var i=e.labels,s=e._recent||Qg,o=e.duration()>=Di?s.endTime(!1):e._dur,a,l,c;return Sn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Bn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Sa=function(e,t,n){var i=wr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ni(l.vars.inherit)&&l.parent;o.immediateRender=ni(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new nn(t[0],o,t[s+1])},ts=function(e,t){return e||e===0?t(e):t},tl=function(e,t,n){return n<e?e:n>t?t:n},On=function(e,t){return!Sn(e)||!(t=Vg.exec(e))?"":t[1]},e_=function(e,t,n){return ts(n,function(i){return tl(e,t,i)})},$u=[].slice,Rm=function(e,t){return e&&nr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&nr(e[0]))&&!e.nodeType&&e!==Wi},t_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Sn(i)&&!t||Rm(i,1)?(s=n).push.apply(s,Li(i)):n.push(i)})||n},Li=function(e,t,n){return Ht&&!t&&Ht.selector?Ht.selector(e):Sn(e)&&!n&&(Wu||!Io())?$u.call((t||pd).querySelectorAll(e),0):Bn(e)?t_(e,n):Rm(e)?$u.call(e,0):e?[e]:[]},ju=function(e){return e=Li(e)[0]||ka("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Li(t,n.querySelectorAll?n:n===e?ka("Invalid scope")||pd.createElement("div"):e)}},Pm=function(e){return e.sort(function(){return .5-Math.random()})},Dm=function(e){if(Yt(e))return e;var t=nr(e)?e:{each:e},n=Es(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Sn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,m){var _=(m||t).length,g=o[_],p,x,y,v,T,w,b,C,S;if(!g){if(S=t.grid==="auto"?0:(t.grid||[1,Di])[1],!S){for(b=-Di;b<(b=m[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(g=o[_]=[],p=l?Math.min(S,_)*u-.5:i%S,x=S===Di?0:l?_*h/S-.5:i/S|0,b=0,C=Di,w=0;w<_;w++)y=w%S-p,v=x-(w/S|0),g[w]=T=c?Math.abs(c==="y"?v:y):dm(y*y+v*v),T>b&&(b=T),T<C&&(C=T);i==="random"&&Pm(g),g.max=b-C,g.min=C,g.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),g.b=_<0?s-_:s,g.u=On(t.amount||t.each)||0,n=n&&_<0?Hm(n):n}return _=(g[d]-g.min)/g.max||0,rn(g.b+(n?n(_):_)*g.v)+g.u}},Ju=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=rn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(wr(n)?0:On(n))}},Lm=function(e,t){var n=Bn(e),i,s;return!n&&nr(e)&&(i=n=e.radius||Di,e.values?(e=Li(e.values),(s=!wr(e[0]))&&(i*=i)):e=Ju(e.increment)),ts(t,n?Yt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Di,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,s||u===o||wr(o)?u:u+On(o)}:Ju(e))},Im=function(e,t,n,i){return ts(Bn(e)?!t:n===!0?!!(n=0):!i,function(){return Bn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},n_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},i_=function(e,t){return function(n){return e(parseFloat(n))+(t||On(n))}},r_=function(e,t,n){return Um(e,t,0,1,n)},Fm=function(e,t,n){return ts(n,function(i){return e[~~t(i)]})},s_=function r(e,t,n){var i=t-e;return Bn(e)?Fm(e,r(0,e.length),t):ts(n,function(s){return(i+(s-e)%i)%i+e})},o_=function r(e,t,n){var i=t-e,s=i*2;return Bn(e)?Fm(e,r(0,e.length-1),t):ts(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},za=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?gm:Gu),n+=e.substr(t,i-t)+Im(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Um=function(e,t,n,i,s){var o=t-e,a=i-n;return ts(s,function(l){return n+((l-e)/o*a||0)})},a_=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=Sn(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Bn(e)&&!Bn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(m){m*=h;var _=Math.min(d,~~m);return u[_](m-_)},n=t}else i||(e=Po(Bn(e)?[]:{},e));if(!u){for(l in t)yd.call(a,e,l,"get",t[l]);s=function(m){return wd(m,a)||(o?e.p:e)}}}return ts(n,s)},af=function(e,t,n){var i=e.labels,s=Di,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},_i=function(e,t,n){var i=e.vars,s=i[t],o=Ht,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Wr.length&&dc(),a&&(Ht=a),u=l?s.apply(c,l):s.call(c),Ht=o,u},ua=function(e){return Jr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!An),e.progress()<1&&_i(e,"onInterrupt"),e},ho,Nm=[],Om=function(e){if(e)if(e=!e.name&&e.default||e,fd()||e.headless){var t=e.name,n=Yt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ba,render:wd,add:yd,kill:b_,modifier:S_,rawVars:0},o={targetTest:0,get:0,getSetter:bd,aliases:{},register:0};if(Io(),e!==i){if(fi[t])return;yi(i,yi(fc(e,s),o)),Po(i.prototype,Po(s,fc(e,o))),fi[i.prop=t]=i,e.targetTest&&(Jl.push(i),gd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}xm(t,i),e.register&&e.register(ai,i,ri)}else Nm.push(e)},It=255,ha={aqua:[0,It,It],lime:[0,It,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,It],navy:[0,0,128],white:[It,It,It],olive:[128,128,0],yellow:[It,It,0],orange:[It,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[It,0,0],pink:[It,192,203],cyan:[0,It,It],transparent:[It,It,It,0]},Wc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*It+.5|0},km=function(e,t,n){var i=e?wr(e)?[e>>16,e>>8&It,e&It]:0:ha.black,s,o,a,l,c,u,h,d,f,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ha[e])i=ha[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&It,i&It,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&It,e&It]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(Gu),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Wc(l+1/3,s,o),i[1]=Wc(l,s,o),i[2]=Wc(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(pm),n&&i.length<4&&(i[3]=1),i}else i=e.match(Gu)||ha.transparent;i=i.map(Number)}return t&&!m&&(s=i[0]/It,o=i[1]/It,a=i[2]/It,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Bm=function(e){var t=[],n=[],i=-1;return e.split(qr).forEach(function(s){var o=s.match(uo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},lf=function(e,t,n){var i="",s=(e+i).match(qr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=km(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Bm(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(qr,"1").split(uo),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(qr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},qr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ha)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),l_=/hsl[a]?\(/,zm=function(e){var t=e.join(" "),n;if(qr.lastIndex=0,qr.test(t))return n=l_.test(t),e[1]=lf(e[1],n),e[0]=lf(e[0],n,Bm(e[1])),!0},Ha,mi=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,m=function _(g){var p=r()-i,x=g===!0,y,v,T,w;if((p>e||p<0)&&(n+=p-t),i+=p,T=i-n,y=T-o,(y>0||x)&&(w=++h.frame,d=T-h.time*1e3,h.time=T=T/1e3,o+=y+(y>=s?4:s-y),v=1),x||(l=c(_)),v)for(f=0;f<a.length;f++)a[f](T,d,w,g)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){_m&&(!Wu&&fd()&&(Wi=Wu=window,pd=Wi.document||{},xi.gsap=ai,(Wi.gsapVersions||(Wi.gsapVersions=[])).push(ai.version),vm(hc||Wi.GreenSockGlobals||!Wi.gsap&&Wi||{}),Nm.forEach(Om)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(g){return setTimeout(g,o-h.time*1e3+1|0)},Ha=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ha=0,c=Ba},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){s=1e3/(g||240),o=h.time*1e3+s},add:function(g,p,x){var y=p?function(v,T,w,b){g(v,T,w,b),h.remove(y)}:g;return h.remove(g),a[x?"unshift":"push"](y),Io(),y},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},h})(),Io=function(){return!Ha&&mi.wake()},yt={},c_=/^[\d.\-M][\d.\-,\s]/,u_=/["']/g,h_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(u_,"").trim():+c,i=l.substr(a+1).trim();return t},d_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},f_=function(e){var t=(e+"").split("("),n=yt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[h_(t[1])]:d_(e).split(",").map(bm)):yt._CE&&c_.test(e)?yt._CE("",e):n},Hm=function(e){return function(t){return 1-e(1-t)}},Vm=function r(e,t){for(var n=e._first,i;n;)n instanceof jn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Es=function(e,t){return e&&(Yt(e)?e:yt[e]||f_(e))||t},Os=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return ii(e,function(a){yt[a]=xi[a]=s,yt[o=a.toLowerCase()]=n;for(var l in s)yt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=yt[a+"."+l]=s[l]}),s},Gm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},qc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Vu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Hg((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Gm(a);return s=Vu/s,l.config=function(c,u){return r(e,c,u)},l},Xc=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Gm(n);return i.config=function(s){return r(e,s)},i};ii("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Os(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});yt.Linear.easeNone=yt.none=yt.Linear.easeIn;Os("Elastic",qc("in"),qc("out"),qc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Os("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Os("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Os("Circ",function(r){return-(dm(1-r*r)-1)});Os("Sine",function(r){return r===1?1:-zg(r*kg)+1});Os("Back",Xc("in"),Xc("out"),Xc());yt.SteppedEase=yt.steps=xi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Ft;return function(a){return((i*tl(0,o,a)|0)+s)*n}}};Ro.ease=yt["quad.out"];ii("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return _d+=r+","+r+"Params,"});var Wm=function(e,t){this.id=Bg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Mm,this.set=t?t.getSetter:bd},Va=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Lo(this,+t.duration,1,1),this.data=t.data,Ht&&(this._ctx=Ht,Ht.data.push(this)),Ha||mi.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Lo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Io(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Uc(this,n),!s._dp||s.parent||Em(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Yi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ft||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Sm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+sf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+sf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Do(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ft?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?pc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ft?0:this._rts,this.totalTime(tl(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Fc(this),$g(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Io(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ft&&(this._tTime-=Ft)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Yi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ni(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?pc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Wg);var i=An;return An=n,xd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),An=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,of(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,of(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Ei(this,n),ni(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ni(i)),this._dur||(this._zTime=-Ft),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ft:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ft,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ft)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Yt(n)?n:wm,a=function(){var c=i.then;i.then=null,Yt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ua(this)},r})();yi(Va.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ft,_prom:0,_ps:!1,_rts:1});var jn=(function(r){hm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ni(n.sortChildren),Gt&&Yi(n.parent||Gt,dr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Am(dr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Sa(0,arguments,this),this},t.from=function(i,s,o){return Sa(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Sa(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Ma(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new nn(i,s,Ei(this,o),1),this},t.call=function(i,s,o){return Yi(this,nn.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new nn(i,o,Ei(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Ma(o).immediateRender=ni(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Ma(a).immediateRender=ni(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:rn(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,m,_,g,p,x,y,v,T,w,b;if(this!==Gt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,v=this._start,y=this._ts,p=!y,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(d=rn(u%g),u===l?(_=this._repeat,d=c):(T=rn(u/g),_=~~T,_&&_===T&&(d=c,_--),d>c&&(d=c)),T=Do(this._tTime,g),!a&&this._tTime&&T!==_&&this._tTime-T*g-this._dur<=0&&(T=_),w&&_&1&&(d=c-d,b=1),_!==T&&!this._lock){var C=w&&T&1,S=C===(w&&_&1);if(_<T&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(b?0:rn(_*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&_i(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Vm(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Zg(this,rn(a),rn(d)),x&&(u-=d-(d=x._start))),this._tTime=u,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!s&&!T&&(_i(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||d>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){x=0,m&&(u+=this._zTime=-Ft);break}}f=m}else{f=this._last;for(var M=i<0?i:d;f;){if(m=f._prev,(f._act||M<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(M-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(M-f._start)*f._ts,s,o||An&&xd(f)),d!==this._time||!this._ts&&!p){x=0,m&&(u+=this._zTime=M?-Ft:Ft);break}}f=m}}if(x&&!s&&(this.pause(),x.render(d>=a?0:-Ft)._zTime=d>=a?1:-1,this._ts))return this._start=v,Fc(this),this.render(i,s,o);this._onUpdate&&!s&&_i(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Jr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(_i(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(wr(s)||(s=Ei(this,s,i)),!(i instanceof Va)){if(Bn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Sn(i))return this.addLabel(i,s);if(Yt(i))i=nn.delayedCall(0,i);else return this}return this!==i?Yi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Di);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof nn?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Sn(i)?this.removeLabel(i):Yt(i)?this.killTweensOf(i):(i.parent===this&&Ic(this,i),i===this._recent&&(this._recent=this._last),Ts(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=rn(mi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Ei(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=nn.delayedCall(0,s||Ba,o);return a.data="isPause",this._hasPause=1,Yi(this,a,Ei(this,i))},t.removePause=function(i){var s=this._first;for(i=Ei(this,i);s;)s._start===i&&s.data==="isPause"&&Jr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)kr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Li(i),l=this._first,c=wr(s),u;l;)l instanceof nn?qg(l._targets,a)&&(c?(!kr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Ei(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,m=nn.to(o,yi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ft,onStart:function(){if(o.pause(),!f){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==g&&Lo(m,g,0,1).render(m._time,!0,!0),f=1}u&&u.apply(m,h||[])}},s));return d?m.render(0):m},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,yi({startAt:{time:Ei(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),af(this,Ei(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),af(this,Ei(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ft)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Ts(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ts(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Di,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Yi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Lo(o,o===Gt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Gt._ts&&(Sm(Gt,pc(i,Gt)),ym=mi.frame),mi.frame>=nf){nf+=vi.autoSleep||120;var s=Gt._first;if((!s||!s._ts)&&vi.autoSleep&&mi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||mi.sleep()}}},e})(Va);yi(jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var p_=function(e,t,n,i,s,o,a){var l=new ri(this._pt,e,t,0,1,Jm,null,s),c=0,u=0,h,d,f,m,_,g,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=za(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),d=n.match(Vc)||[];h=Vc.exec(i);)m=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==d[u++]&&(g=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:g,c:m.charAt(1)==="="?vo(g,m)-g:parseFloat(m)-g,m:f&&f<4?Math.round:0},c=Vc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(mm.test(i)||p)&&(l.e=0),this._pt=l,l},yd=function(e,t,n,i,s,o,a,l,c,u){Yt(i)&&(i=i(s||0,e,o));var h=e[t],d=n!=="get"?n:Yt(h)?c?e[t.indexOf("set")||!Yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Yt(h)?c?x_:$m:Sd,m;if(Sn(i)&&(~i.indexOf("random(")&&(i=za(i)),i.charAt(1)==="="&&(m=vo(d,i)+(On(d)||0),(m||m===0)&&(i=m))),!u||d!==i||Ku)return!isNaN(d*i)&&i!==""?(m=new ri(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?M_:jm,0,f),c&&(m.fp=c),a&&m.modifier(a,this,e),this._pt=m):(!h&&!(t in e)&&md(t,i),p_.call(this,e,t,d,i,f,l||vi.stringFilter,c))},m_=function(e,t,n,i,s){if(Yt(e)&&(e=ba(e,s,t,n,i)),!nr(e)||e.style&&e.nodeType||Bn(e)||fm(e))return Sn(e)?ba(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=ba(e[a],s,t,n,i);return o},qm=function(e,t,n,i,s,o){var a,l,c,u;if(fi[e]&&(a=new fi[e]).init(s,a.rawVars?t[e]:m_(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new ri(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ho))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},kr,Ku,Md=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,m=e._dur,_=e._startAt,g=e._targets,p=e.parent,x=p&&p.data==="nested"?p.vars.targets:g,y=e._overwrite==="auto"&&!hd,v=e.timeline,T,w,b,C,S,M,P,U,H,N,G,W,$;if(v&&(!d||!s)&&(s="none"),e._ease=Es(s,Ro.ease),e._yEase=h?Hm(Es(h===!0?s:h,Ro.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!i.runBackwards,!v||d&&!i.stagger){if(U=g[0]?ws(g[0]).harness:0,W=U&&i[U.prop],T=fc(i,gd),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!f?_.render(-1,!0):_.revert(u&&m?jl:Gg),_._lazy=0),o){if(Jr(e._startAt=nn.set(g,yi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&ni(l),startAt:null,delay:0,onUpdate:c&&function(){return _i(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An||!a&&!f)&&e._startAt.revert(jl),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&m&&!_){if(t&&(a=!1),b=yi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ni(l),immediateRender:a,stagger:0,parent:p},T),W&&(b[U.prop]=W),Jr(e._startAt=nn.set(g,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An?e._startAt.revert(jl):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Ft,Ft);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&ni(l)||l&&!m,w=0;w<g.length;w++){if(S=g[w],P=S._gsap||vd(g)[w]._gsap,e._ptLookup[w]=N={},qu[P.id]&&Wr.length&&dc(),G=x===g?w:x.indexOf(S),U&&(H=new U).init(S,W||T,e,G,x)!==!1&&(e._pt=C=new ri(e._pt,S,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(z){N[z]=C}),H.priority&&(M=1)),!U||W)for(b in T)fi[b]&&(H=qm(b,T,e,G,S,x))?H.priority&&(M=1):N[b]=C=yd.call(e,S,b,"get",T[b],G,x,0,i.stringFilter);e._op&&e._op[w]&&e.kill(S,e._op[w]),y&&e._pt&&(kr=e,Gt.killTweensOf(S,N,e.globalTime(t)),$=!e.parent,kr=0),e._pt&&l&&(qu[P.id]=1)}M&&Km(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,d&&t<=0&&v.render(Di,!0,!0)},g_=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ku=1,e.vars[t]="+=0",Md(e,a),Ku=0,l?ka(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=jt(n)+On(h.e)),h.b&&(h.b=u.s+On(h.b))},__=function(e,t){var n=e[0]?ws(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Po({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},v_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Bn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ba=function(e,t,n,i,s){return Yt(e)?e.call(t,n,i,s):Sn(e)&&~e.indexOf("random(")?za(e):e},Xm=_d+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ym={};ii(Xm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ym[r]=1});var nn=(function(r){hm(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ma(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,g=l.scrollTrigger,p=l.yoyoEase,x=i.parent||Gt,y=(Bn(n)||fm(n)?wr(n[0]):"length"in i)?[n]:Li(n),v,T,w,b,C,S,M,P;if(a._targets=y.length?vd(y):ka("GSAP target "+n+" not found. https://gsap.com",!vi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||d||sl(c)||sl(u)){if(i=a.vars,v=a.timeline=new jn({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:y}),v.kill(),v.parent=v._dp=dr(a),v._start=0,d||sl(c)||sl(u)){if(b=y.length,M=d&&Dm(d),nr(d))for(C in d)~Xm.indexOf(C)&&(P||(P={}),P[C]=d[C]);for(T=0;T<b;T++)w=fc(i,Ym),w.stagger=0,p&&(w.yoyoEase=p),P&&Po(w,P),S=y[T],w.duration=+ba(c,dr(a),T,S,y),w.delay=(+ba(u,dr(a),T,S,y)||0)-a._delay,!d&&b===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),v.to(S,w,M?M(T,S,y):0),v._ease=yt.none;v.duration()?c=u=0:a.timeline=0}else if(m){Ma(yi(v.vars.defaults,{ease:"none"})),v._ease=Es(m.ease||i.ease||"none");var U=0,H,N,G;if(Bn(m))m.forEach(function(W){return v.to(y,W,">")}),v.duration();else{w={};for(C in m)C==="ease"||C==="easeEach"||v_(C,m[C],w,m.easeEach);for(C in w)for(H=w[C].sort(function(W,$){return W.t-$.t}),U=0,T=0;T<H.length;T++)N=H[T],G={ease:N.e,duration:(N.t-(T?H[T-1].t:0))/100*c},G[C]=N.v,v.to(y,G,U),U+=G.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return f===!0&&!hd&&(kr=dr(a),Gt.killTweensOf(y),kr=0),Yi(x,dr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!m&&a._start===rn(x._time)&&ni(h)&&jg(dr(a))&&x.data!=="nested")&&(a._tTime=-Ft,a.render(Math.max(0,-u)||0)),g&&Am(dr(a),g),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Ft&&!u?l:i<Ft?0:i,d,f,m,_,g,p,x,y,v;if(!c)Kg(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(d=rn(h%_),h===l?(m=this._repeat,d=c):(g=rn(h/_),m=~~g,m&&m===g?(d=c,m--):d>c&&(d=c)),p=this._yoyo&&m&1,p&&(v=this._yEase,d=c-d),g=Do(this._tTime,_),d===a&&!o&&this._initted&&m===g)return this._tTime=h,this;m!==g&&(y&&this._yEase&&Vm(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(rn(_*m),!0).invalidate()._lock=0))}if(!this._initted){if(Cm(this,u?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==g))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(v||this._ease)(d/c),this._from&&(this.ratio=x=1-x),!a&&h&&!s&&!g&&(_i(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Xu(this,i,s,o),_i(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!s&&this.parent&&_i(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Xu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Jr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(_i(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Ha||mi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Md(this,c),u=this._ease(c/this._dur),g_(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Uc(this,0),this.parent||Tm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ua(this):this.scrollTrigger&&this.scrollTrigger.kill(!!An),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,kr&&kr.vars.overwrite!==!0)._first||ua(this),this.parent&&o!==this.timeline.totalDuration()&&Lo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Li(i):a,c=this._ptLookup,u=this._pt,h,d,f,m,_,g,p;if((!s||s==="all")&&Yg(a,l))return s==="all"&&(this._pt=0),ua(this);for(h=this._op=this._op||[],s!=="all"&&(Sn(s)&&(_={},ii(s,function(x){return _[x]=1}),s=_),s=__(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(h[p]=s,m=d,f={}):(f=h[p]=h[p]||{},m=s);for(_ in m)g=d&&d[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&Ic(this,g,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&ua(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Sa(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Sa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Gt.killTweensOf(i,s,o)},e})(Va);yi(nn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ii("staggerTo,staggerFrom,staggerFromTo",function(r){nn[r]=function(){var e=new jn,t=$u.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Sd=function(e,t,n){return e[t]=n},$m=function(e,t,n){return e[t](n)},x_=function(e,t,n,i){return e[t](i.fp,n)},y_=function(e,t,n){return e.setAttribute(t,n)},bd=function(e,t){return Yt(e[t])?$m:dd(e[t])&&e.setAttribute?y_:Sd},jm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},M_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Jm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},wd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},S_=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},b_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ic(this,t,"_pt"):t.dep||(n=1),t=i;return!n},w_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Km=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},ri=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||jm,this.d=l||this,this.set=c||Sd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=w_,this.m=n,this.mt=s,this.tween=i},r})();ii(_d+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return gd[r]=1});xi.TweenMax=xi.TweenLite=nn;xi.TimelineLite=xi.TimelineMax=jn;Gt=new jn({sortChildren:!1,defaults:Ro,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});vi.stringFilter=zm;var As=[],Kl={},T_=[],cf=0,E_=0,Yc=function(e){return(Kl[e]||T_).map(function(t){return t()})},Zu=function(){var e=Date.now(),t=[];e-cf>2&&(Yc("matchMediaInit"),As.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Wi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Yc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),cf=e,Yc("matchMedia"))},Zm=(function(){function r(t,n){this.selector=n&&ju(n),this.data=[],this._r=[],this.isReverted=!1,this.id=E_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Yt(n)&&(s=i,i=n,n=Yt);var o=this,a=function(){var c=Ht,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=ju(s)),Ht=o,h=i.apply(o,arguments),Yt(h)&&o._r.push(h),Ht=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Yt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Ht;Ht=null,n(this),Ht=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof nn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof jn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof nn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=As.length;o--;)As[o].id===this.id&&As.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),A_=(function(){function r(t){this.contexts=[],this.scope=t,Ht&&Ht.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){nr(n)||(n={matches:n});var o=new Zm(0,s||this.scope),a=o.conditions={},l,c,u;Ht&&!o.selector&&(o.selector=Ht.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Wi.matchMedia(n[c]),l&&(As.indexOf(o)<0&&As.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Zu):l.addEventListener("change",Zu)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),mc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Om(i)})},timeline:function(e){return new jn(e)},getTweensOf:function(e,t){return Gt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Sn(e)&&(e=Li(e)[0]);var s=ws(e||{}).get,o=n?wm:bm;return n==="native"&&(n=""),e&&(t?o((fi[t]&&fi[t].get||s)(e,t,n,i)):function(a,l,c){return o((fi[a]&&fi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Li(e),e.length>1){var i=e.map(function(u){return ai.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=fi[t],a=ws(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;ho._pt=0,h.init(e,n?u+n:u,ho,0,[e]),h.render(1,h),ho._pt&&wd(1,ho)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=ai.to(e,yi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Es(e.ease,Ro.ease)),rf(Ro,e||{})},config:function(e){return rf(vi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!fi[a]&&!xi[a]&&ka(t+" effect requires "+a+" plugin.")}),Gc[t]=function(a,l,c){return n(Li(a),yi(l||{},s),c)},o&&(jn.prototype[t]=function(a,l,c){return this.add(Gc[t](a,nr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){yt[e]=Es(t)},parseEase:function(e,t){return arguments.length?Es(e,t):yt},getById:function(e){return Gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new jn(e),i,s;for(n.smoothChildTiming=ni(e.smoothChildTiming),Gt.remove(n),n._dp=0,n._time=n._tTime=Gt._time,i=Gt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof nn&&i.vars.onComplete===i._targets[0]))&&Yi(n,i,i._start-i._delay),i=s;return Yi(Gt,n,0),n},context:function(e,t){return e?new Zm(e,t):Ht},matchMedia:function(e){return new A_(e)},matchMediaRefresh:function(){return As.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Zu()},addEventListener:function(e,t){var n=Kl[e]||(Kl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Kl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:s_,wrapYoyo:o_,distribute:Dm,random:Im,snap:Lm,normalize:r_,getUnit:On,clamp:e_,splitColor:km,toArray:Li,selector:ju,mapRange:Um,pipe:n_,unitize:i_,interpolate:a_,shuffle:Pm},install:vm,effects:Gc,ticker:mi,updateRoot:jn.updateRoot,plugins:fi,globalTimeline:Gt,core:{PropTween:ri,globals:xm,Tween:nn,Timeline:jn,Animation:Va,getCache:ws,_removeLinkedListItem:Ic,reverting:function(){return An},context:function(e){return e&&Ht&&(Ht.data.push(e),e._ctx=Ht),Ht},suppressOverwrites:function(e){return hd=e}}};ii("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return mc[r]=nn[r]});mi.add(jn.updateRoot);ho=mc.to({},{duration:0});var C_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},R_=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=C_(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},$c=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Sn(s)&&(l={},ii(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}R_(a,s)}}}},ai=mc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)An?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},$c("roundProps",Ju),$c("modifiers"),$c("snap",Lm))||mc;nn.version=jn.version=ai.version="3.13.0";_m=1;fd()&&Io();yt.Power0;yt.Power1;yt.Power2;yt.Power3;yt.Power4;yt.Linear;yt.Quad;yt.Cubic;yt.Quart;yt.Quint;yt.Strong;yt.Elastic;yt.Back;yt.SteppedEase;yt.Bounce;yt.Sine;yt.Expo;yt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var uf,Br,xo,Td,xs,hf,Ed,P_=function(){return typeof window<"u"},Tr={},hs=180/Math.PI,yo=Math.PI/180,zs=Math.atan2,df=1e8,Ad=/([A-Z])/g,D_=/(left|right|width|margin|padding|x)/i,L_=/[\s,\(]\S/,Ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Qu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},I_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},F_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},U_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Qm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},e0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},N_=function(e,t,n){return e.style[t]=n},O_=function(e,t,n){return e.style.setProperty(t,n)},k_=function(e,t,n){return e._gsap[t]=n},B_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},z_=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},H_=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Wt="transform",si=Wt+"Origin",V_=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Tr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ki[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=pr(i,a)}):this.tfm[e]=o.x?o[e]:pr(i,e),e===si&&(this.tfm.zOrigin=o.zOrigin);else return Ki.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Wt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(si,t,"")),e=Wt}(s||t)&&this.props.push(e,t,s[e])},t0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},G_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ad,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ed(),(!s||!s.isStart)&&!n[Wt]&&(t0(n),i.zOrigin&&n[si]&&(n[si]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},n0=function(e,t){var n={target:e,props:[],revert:G_,save:V_};return e._gsap||ai.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},i0,eh=function(e,t){var n=Br.createElementNS?Br.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Br.createElement(e);return n&&n.style?n:Br.createElement(e)},Ii=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ad,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Fo(t)||t,1)||""},ff="O,Moz,ms,Ms,Webkit".split(","),Fo=function(e,t,n){var i=t||xs,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ff[o]+e in s););return o<0?null:(o===3?"ms":o>=0?ff[o]:"")+e},th=function(){P_()&&window.document&&(uf=window,Br=uf.document,xo=Br.documentElement,xs=eh("div")||{style:{}},eh("div"),Wt=Fo(Wt),si=Wt+"Origin",xs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",i0=!!Fo("perspective"),Ed=ai.core.reverting,Td=1)},pf=function(e){var t=e.ownerSVGElement,n=eh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),xo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),xo.removeChild(n),s},mf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},r0=function(e){var t,n;try{t=e.getBBox()}catch{t=pf(e),n=1}return t&&(t.width||t.height)||n||(t=pf(e)),t&&!t.width&&!t.x&&!t.y?{x:+mf(e,["x","cx","x1"])||0,y:+mf(e,["y","cy","y1"])||0,width:0,height:0}:t},s0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&r0(e))},Ds=function(e,t){if(t){var n=e.style,i;t in Tr&&t!==si&&(t=Wt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Ad,"-$1").toLowerCase())):n.removeAttribute(t)}},zr=function(e,t,n,i,s,o){var a=new ri(e._pt,t,n,0,1,o?e0:Qm);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},gf={deg:1,rad:1,turn:1},W_={grid:1,flex:1},Kr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=xs.style,l=D_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",m,_,g,p;if(i===o||!s||gf[i]||gf[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&s0(e),(f||o==="%")&&(Tr[t]||~t.indexOf("adius")))return m=p?e.getBBox()[l?"width":"height"]:e[u],jt(f?s/m*h:s/100*m);if(a[l?"width":"height"]=h+(d?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Br||!_.appendChild)&&(_=Br.body),g=_._gsap,g&&f&&g.width&&l&&g.time===mi.time&&!g.uncache)return jt(s/g.width*h);if(f&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+i,m=e[u],x?e.style[t]=x:Ds(e,t)}else(f||o==="%")&&!W_[Ii(_,"display")]&&(a.position=Ii(e,"position")),_===e&&(a.position="static"),_.appendChild(xs),m=xs[u],_.removeChild(xs),a.position="absolute";return l&&f&&(g=ws(_),g.time=mi.time,g.width=_[u]),jt(d?m*s/h:m&&s?h/m*s:0)},pr=function(e,t,n,i){var s;return Td||th(),t in Ki&&t!=="transform"&&(t=Ki[t],~t.indexOf(",")&&(t=t.split(",")[0])),Tr[t]&&t!=="transform"?(s=Wa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:_c(Ii(e,si))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=gc[t]&&gc[t](e,t,n)||Ii(e,t)||Mm(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Kr(e,t,s,n)+n:s},q_=function(e,t,n,i){if(!n||n==="none"){var s=Fo(t,e,1),o=s&&Ii(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ii(e,"borderTopColor"))}var a=new ri(this._pt,e.style,t,0,1,Jm),l=0,c=0,u,h,d,f,m,_,g,p,x,y,v,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ii(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Ii(e,t)||i,_?e.style[t]=_:Ds(e,t)),u=[n,i],zm(u),n=u[0],i=u[1],d=n.match(uo)||[],T=i.match(uo)||[],T.length){for(;h=uo.exec(i);)g=h[0],x=i.substring(l,h.index),m?m=(m+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(m=1),g!==(_=d[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),g.charAt(1)==="="&&(g=vo(f,g)+v),p=parseFloat(g),y=g.substr((p+"").length),l=uo.lastIndex-y.length,y||(y=y||vi.units[t]||v,l===i.length&&(i+=y,a.e+=y)),v!==y&&(f=Kr(e,t,_,y)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:f,c:p-f,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?e0:Qm;return mm.test(i)&&(a.e=0),this._pt=a,a},_f={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},X_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=_f[n]||n,t[1]=_f[i]||i,t.join(" ")},Y_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Tr[a]&&(l=1,a=a==="transformOrigin"?si:Wt),Ds(n,a);l&&(Ds(n,Wt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Wa(n,1),o.uncache=1,t0(i)))}},gc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new ri(e._pt,t,n,0,0,Y_);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ga=[1,0,0,1,0,0],o0={},a0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},vf=function(e){var t=Ii(e,Wt);return a0(t)?Ga:t.substr(7).match(pm).map(jt)},Cd=function(e,t){var n=e._gsap||ws(e),i=e.style,s=vf(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ga:s):(s===Ga&&!e.offsetParent&&e!==xo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,xo.appendChild(e)),s=vf(e),l?i.display=l:Ds(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):xo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},nh=function(e,t,n,i,s,o){var a=e._gsap,l=s||Cd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],m=l[1],_=l[2],g=l[3],p=l[4],x=l[5],y=t.split(" "),v=parseFloat(y[0])||0,T=parseFloat(y[1])||0,w,b,C,S;n?l!==Ga&&(b=f*g-m*_)&&(C=v*(g/b)+T*(-_/b)+(_*x-g*p)/b,S=v*(-m/b)+T*(f/b)-(f*x-m*p)/b,v=C,T=S):(w=r0(e),v=w.x+(~y[0].indexOf("%")?v/100*w.width:v),T=w.y+(~(y[1]||y[0]).indexOf("%")?T/100*w.height:T)),i||i!==!1&&a.smooth?(p=v-c,x=T-u,a.xOffset=h+(p*f+x*_)-p,a.yOffset=d+(p*m+x*g)-x):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=T,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[si]="0px 0px",o&&(zr(o,a,"xOrigin",c,v),zr(o,a,"yOrigin",u,T),zr(o,a,"xOffset",h,a.xOffset),zr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+T)},Wa=function(e,t){var n=e._gsap||new Wm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ii(e,si)||"0",u,h,d,f,m,_,g,p,x,y,v,T,w,b,C,S,M,P,U,H,N,G,W,$,z,oe,D,me,Le,Oe,Y,ae;return u=h=d=_=g=p=x=y=v=0,f=m=1,n.svg=!!(e.getCTM&&s0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Wt]!=="none"?l[Wt]:"")),i.scale=i.rotate=i.translate="none"),b=Cd(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),nh(e,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,b)),T=n.xOrigin||0,w=n.yOrigin||0,b!==Ga&&(P=b[0],U=b[1],H=b[2],N=b[3],u=G=b[4],h=W=b[5],b.length===6?(f=Math.sqrt(P*P+U*U),m=Math.sqrt(N*N+H*H),_=P||U?zs(U,P)*hs:0,x=H||N?zs(H,N)*hs+_:0,x&&(m*=Math.abs(Math.cos(x*yo))),n.svg&&(u-=T-(T*P+w*H),h-=w-(T*U+w*N))):(ae=b[6],Oe=b[7],D=b[8],me=b[9],Le=b[10],Y=b[11],u=b[12],h=b[13],d=b[14],C=zs(ae,Le),g=C*hs,C&&(S=Math.cos(-C),M=Math.sin(-C),$=G*S+D*M,z=W*S+me*M,oe=ae*S+Le*M,D=G*-M+D*S,me=W*-M+me*S,Le=ae*-M+Le*S,Y=Oe*-M+Y*S,G=$,W=z,ae=oe),C=zs(-H,Le),p=C*hs,C&&(S=Math.cos(-C),M=Math.sin(-C),$=P*S-D*M,z=U*S-me*M,oe=H*S-Le*M,Y=N*M+Y*S,P=$,U=z,H=oe),C=zs(U,P),_=C*hs,C&&(S=Math.cos(C),M=Math.sin(C),$=P*S+U*M,z=G*S+W*M,U=U*S-P*M,W=W*S-G*M,P=$,G=z),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,p=180-p),f=jt(Math.sqrt(P*P+U*U+H*H)),m=jt(Math.sqrt(W*W+ae*ae)),C=zs(G,W),x=Math.abs(C)>2e-4?C*hs:0,v=Y?1/(Y<0?-Y:Y):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!a0(Ii(e,Wt)),$&&e.setAttribute("transform",$))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(f*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=jt(f),n.scaleY=jt(m),n.rotation=jt(_)+a,n.rotationX=jt(g)+a,n.rotationY=jt(p)+a,n.skewX=x+a,n.skewY=y+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[si]=_c(c)),n.xOffset=n.yOffset=0,n.force3D=vi.force3D,n.renderTransform=n.svg?j_:i0?l0:$_,n.uncache=0,n},_c=function(e){return(e=e.split(" "))[0]+" "+e[1]},jc=function(e,t,n){var i=On(t);return jt(parseFloat(t)+parseFloat(Kr(e,"x",n+"px",i)))+i},$_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,l0(e,t)},is="0deg",Yo="0px",rs=") ",l0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,g=n.transformPerspective,p=n.force3D,x=n.target,y=n.zOrigin,v="",T=p==="auto"&&e&&e!==1||p===!0;if(y&&(h!==is||u!==is)){var w=parseFloat(u)*yo,b=Math.sin(w),C=Math.cos(w),S;w=parseFloat(h)*yo,S=Math.cos(w),o=jc(x,o,b*S*-y),a=jc(x,a,-Math.sin(w)*-y),l=jc(x,l,C*S*-y+y)}g!==Yo&&(v+="perspective("+g+rs),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(T||o!==Yo||a!==Yo||l!==Yo)&&(v+=l!==Yo||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+rs),c!==is&&(v+="rotate("+c+rs),u!==is&&(v+="rotateY("+u+rs),h!==is&&(v+="rotateX("+h+rs),(d!==is||f!==is)&&(v+="skew("+d+", "+f+rs),(m!==1||_!==1)&&(v+="scale("+m+", "+_+rs),x.style[Wt]=v||"translate(0, 0)"},j_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,g=n.xOffset,p=n.yOffset,x=n.forceCSS,y=parseFloat(o),v=parseFloat(a),T,w,b,C,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=yo,c*=yo,T=Math.cos(l)*h,w=Math.sin(l)*h,b=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(u*=yo,S=Math.tan(c-u),S=Math.sqrt(1+S*S),b*=S,C*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),T*=S,w*=S)),T=jt(T),w=jt(w),b=jt(b),C=jt(C)):(T=h,C=d,w=b=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=Kr(f,"x",o,"px"),v=Kr(f,"y",a,"px")),(m||_||g||p)&&(y=jt(y+m-(m*T+_*b)+g),v=jt(v+_-(m*w+_*C)+p)),(i||s)&&(S=f.getBBox(),y=jt(y+i/100*S.width),v=jt(v+s/100*S.height)),S="matrix("+T+","+w+","+b+","+C+","+y+","+v+")",f.setAttribute("transform",S),x&&(f.style[Wt]=S)},J_=function(e,t,n,i,s){var o=360,a=Sn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?hs:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*df)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*df)%o-~~(c/o)*o)),e._pt=d=new ri(e._pt,t,n,i,c,I_),d.e=u,d.u="deg",e._props.push(n),d},xf=function(e,t){for(var n in t)e[n]=t[n];return e},K_=function(e,t,n){var i=xf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Wt]=t,a=Wa(n,1),Ds(n,Wt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Wt],o[Wt]=t,a=Wa(n,1),o[Wt]=c);for(l in Tr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=On(c),m=On(u),h=f!==m?Kr(n,l,c,m):parseFloat(c),d=parseFloat(u),e._pt=new ri(e._pt,a,l,h,d-h,Qu),e._pt.u=m||0,e._props.push(l));xf(a,i)};ii("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});gc[e>1?"border"+r:r]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(m){return pr(a,m,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(m,_){return f[m]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,h)}});var c0={name:"css",register:th,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,m,_,g,p,x,y,v,T,w,b,C;Td||th(),this.styles=this.styles||n0(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(fi[_]&&qm(_,t,n,i,e,s)))){if(f=typeof u,m=gc[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=za(u)),m)m(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",qr.lastIndex=0,qr.test(c)||(g=On(c),p=On(u)),p?g!==p&&(c=Kr(e,_,c,p)+p):g&&(u+=g),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Sn(c)&&~c.indexOf("random(")&&(c=za(c)),On(c+"")||c==="auto"||(c+=vi.units[_]||On(pr(e,_))||""),(c+"").charAt(1)==="="&&(c=pr(e,_))):c=pr(e,_),d=parseFloat(c),x=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),_ in Ki&&(_==="autoAlpha"&&(d===1&&pr(e,"visibility")==="hidden"&&h&&(d=0),C.push("visibility",0,a.visibility),zr(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Ki[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in Tr,y){if(this.styles.save(_),f==="string"&&u.substring(0,6)==="var(--"&&(u=Ii(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),v||(T=e._gsap,T.renderTransform&&!t.parseTransform||Wa(e,t.parseTransform),w=t.smoothOrigin!==!1&&T.smooth,v=this._pt=new ri(this._pt,a,Wt,0,1,T.renderTransform,T,0,-1),v.dep=1),_==="scale")this._pt=new ri(this._pt,T,"scaleY",T.scaleY,(x?vo(T.scaleY,x+h):h)-T.scaleY||0,Qu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(si,0,a[si]),u=X_(u),T.svg?nh(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==T.zOrigin&&zr(this,T,"zOrigin",T.zOrigin,p),zr(this,a,_,_c(c),_c(u)));continue}else if(_==="svgOrigin"){nh(e,u,1,w,0,this);continue}else if(_ in o0){J_(this,T,_,d,x?vo(d,x+u):u);continue}else if(_==="smoothOrigin"){zr(this,T,"smooth",T.smooth,u);continue}else if(_==="force3D"){T[_]=u;continue}else if(_==="transform"){K_(this,u,e);continue}}else _ in a||(_=Fo(_)||_);if(y||(h||h===0)&&(d||d===0)&&!L_.test(u)&&_ in a)g=(c+"").substr((d+"").length),h||(h=0),p=On(u)||(_ in vi.units?vi.units[_]:g),g!==p&&(d=Kr(e,_,c,p)),this._pt=new ri(this._pt,y?T:a,_,d,(x?vo(d,x+h):h)-d,!y&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?U_:Qu),this._pt.u=p||0,g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=F_);else if(_ in a)q_.call(this,e,_,c,x?x+u:u);else if(_ in e)this.add(e,_,c||e[_],x?x+u:u,i,s);else if(_!=="parseTransform"){md(_,u);continue}y||(_ in a?C.push(_,0,a[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),o.push(_)}}b&&Km(this)},render:function(e,t){if(t.tween._time||!Ed())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:pr,aliases:Ki,getSetter:function(e,t,n){var i=Ki[t];return i&&i.indexOf(",")<0&&(t=i),t in Tr&&t!==si&&(e._gsap.x||pr(e,"x"))?n&&hf===n?t==="scale"?B_:k_:(hf=n||{})&&(t==="scale"?z_:H_):e.style&&!dd(e.style[t])?N_:~t.indexOf("-")?O_:bd(e,t)},core:{_removeProperty:Ds,_getMatrix:Cd}};ai.utils.checkPrefix=Fo;ai.core.getStyleSaver=n0;(function(r,e,t,n){var i=ii(r+","+e+","+t,function(s){Tr[s]=1});ii(e,function(s){vi.units[s]="deg",o0[s]=1}),Ki[i[13]]=r+","+e,ii(n,function(s){var o=s.split(":");Ki[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ii("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){vi.units[r]="px"});ai.registerPlugin(c0);var de=ai.registerPlugin(c0)||ai;de.core.Tween;function Z_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Q_(r,e,t){return e&&Z_(r.prototype,e),r}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var En,Zl,gi,Hr,Vr,Mo,u0,ds,wa,h0,_r,Bi,d0,f0=function(){return En||typeof window<"u"&&(En=window.gsap)&&En.registerPlugin&&En},p0=1,fo=[],_t=[],er=[],Ta=Date.now,ih=function(e,t){return t},ev=function(){var e=wa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,_t),i.push.apply(i,er),_t=n,er=i,ih=function(o,a){return t[o](a)}},Xr=function(e,t){return~er.indexOf(e)&&er[er.indexOf(e)+1][t]},Ea=function(e){return!!~h0.indexOf(e)},Wn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Hn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ol="scrollLeft",al="scrollTop",rh=function(){return _r&&_r.isPressed||_t.cache++},vc=function(e,t){var n=function i(s){if(s||s===0){p0&&(gi.history.scrollRestoration="manual");var o=_r&&_r.isPressed;s=i.v=Math.round(s)||(_r&&_r.iOS?1:0),e(s),i.cacheID=_t.cache,o&&ih("ss",s)}else(t||_t.cache!==i.cacheID||ih("ref"))&&(i.cacheID=_t.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Jn={s:ol,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:vc(function(r){return arguments.length?gi.scrollTo(r,ln.sc()):gi.pageXOffset||Hr[ol]||Vr[ol]||Mo[ol]||0})},ln={s:al,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Jn,sc:vc(function(r){return arguments.length?gi.scrollTo(Jn.sc(),r):gi.pageYOffset||Hr[al]||Vr[al]||Mo[al]||0})},Qn=function(e,t){return(t&&t._ctx&&t._ctx.selector||En.utils.toArray)(e)[0]||(typeof e=="string"&&En.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},tv=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Zr=function(e,t){var n=t.s,i=t.sc;Ea(e)&&(e=Hr.scrollingElement||Vr);var s=_t.indexOf(e),o=i===ln.sc?1:2;!~s&&(s=_t.push(e)-1),_t[s+o]||Wn(e,"scroll",rh);var a=_t[s+o],l=a||(_t[s+o]=vc(Xr(e,n),!0)||(Ea(e)?i:vc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=En.getProperty(e,"scrollBehavior")==="smooth"),l},sh=function(e,t,n){var i=e,s=e,o=Ta(),a=o,l=t||50,c=Math.max(500,l*3),u=function(m,_){var g=Ta();_||g-o>l?(s=i,i=m,a=o,o=g):n?i+=m:i=s+(m-s)/(g-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},d=function(m){var _=a,g=s,p=Ta();return(m||m===0)&&m!==i&&u(m),o===a||p-a>c?0:(i+(n?g:-g))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:d}},$o=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},yf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},m0=function(){wa=En.core.globals().ScrollTrigger,wa&&wa.core&&ev()},g0=function(e){return En=e||f0(),!Zl&&En&&typeof document<"u"&&document.body&&(gi=window,Hr=document,Vr=Hr.documentElement,Mo=Hr.body,h0=[gi,Hr,Vr,Mo],En.utils.clamp,d0=En.core.context||function(){},ds="onpointerenter"in Mo?"pointer":"mouse",u0=Kt.isTouch=gi.matchMedia&&gi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in gi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Bi=Kt.eventTypes=("ontouchstart"in Vr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Vr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return p0=0},500),m0(),Zl=1),Zl};Jn.op=ln;_t.cache=0;var Kt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Zl||g0(En)||console.warn("Please gsap.registerPlugin(Observer)"),wa||m0();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,m=n.wheelSpeed,_=n.event,g=n.onDragStart,p=n.onDragEnd,x=n.onDrag,y=n.onPress,v=n.onRelease,T=n.onRight,w=n.onLeft,b=n.onUp,C=n.onDown,S=n.onChangeX,M=n.onChangeY,P=n.onChange,U=n.onToggleX,H=n.onToggleY,N=n.onHover,G=n.onHoverEnd,W=n.onMove,$=n.ignoreCheck,z=n.isNormalizer,oe=n.onGestureStart,D=n.onGestureEnd,me=n.onWheel,Le=n.onEnable,Oe=n.onDisable,Y=n.onClick,ae=n.scrollSpeed,ce=n.capture,re=n.allowClicks,_e=n.lockAxis,Ve=n.onLockAxis;this.target=a=Qn(a)||Vr,this.vars=n,f&&(f=En.utils.toArray(f)),i=i||1e-9,s=s||0,m=m||1,ae=ae||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(gi.getComputedStyle(Mo).lineHeight)||22);var Re,rt,Je,Ee,L,xt,qe,V=this,Ce=0,ct=0,Ne=n.passive||!u&&n.passive!==!1,R=Zr(a,Jn),E=Zr(a,ln),X=R(),ne=E(),ie=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Bi[0]==="pointerdown",Z=Ea(a),ve=a.ownerDocument||Hr,he=[0,0,0],Se=[0,0,0],Ge=0,le=function(){return Ge=Ta()},pe=function(ye,Q){return(V.event=ye)&&f&&tv(ye.target,f)||Q&&ie&&ye.pointerType!=="touch"||$&&$(ye,Q)},ze=function(){V._vx.reset(),V._vy.reset(),rt.pause(),h&&h(V)},He=function(){var ye=V.deltaX=yf(he),Q=V.deltaY=yf(Se),te=Math.abs(ye)>=i,xe=Math.abs(Q)>=i;P&&(te||xe)&&P(V,ye,Q,he,Se),te&&(T&&V.deltaX>0&&T(V),w&&V.deltaX<0&&w(V),S&&S(V),U&&V.deltaX<0!=Ce<0&&U(V),Ce=V.deltaX,he[0]=he[1]=he[2]=0),xe&&(C&&V.deltaY>0&&C(V),b&&V.deltaY<0&&b(V),M&&M(V),H&&V.deltaY<0!=ct<0&&H(V),ct=V.deltaY,Se[0]=Se[1]=Se[2]=0),(Ee||Je)&&(W&&W(V),Je&&(g&&Je===1&&g(V),x&&x(V),Je=0),Ee=!1),xt&&!(xt=!1)&&Ve&&Ve(V),L&&(me(V),L=!1),Re=0},be=function(ye,Q,te){he[te]+=ye,Se[te]+=Q,V._vx.update(ye),V._vy.update(Q),c?Re||(Re=requestAnimationFrame(He)):He()},it=function(ye,Q){_e&&!qe&&(V.axis=qe=Math.abs(ye)>Math.abs(Q)?"x":"y",xt=!0),qe!=="y"&&(he[2]+=ye,V._vx.update(ye,!0)),qe!=="x"&&(Se[2]+=Q,V._vy.update(Q,!0)),c?Re||(Re=requestAnimationFrame(He)):He()},Ke=function(ye){if(!pe(ye,1)){ye=$o(ye,u);var Q=ye.clientX,te=ye.clientY,xe=Q-V.x,ge=te-V.y,ke=V.isDragging;V.x=Q,V.y=te,(ke||(xe||ge)&&(Math.abs(V.startX-Q)>=s||Math.abs(V.startY-te)>=s))&&(Je=ke?2:1,ke||(V.isDragging=!0),it(xe,ge))}},at=V.onPress=function(fe){pe(fe,1)||fe&&fe.button||(V.axis=qe=null,rt.pause(),V.isPressed=!0,fe=$o(fe),Ce=ct=0,V.startX=V.x=fe.clientX,V.startY=V.y=fe.clientY,V._vx.reset(),V._vy.reset(),Wn(z?a:ve,Bi[1],Ke,Ne,!0),V.deltaX=V.deltaY=0,y&&y(V))},F=V.onRelease=function(fe){if(!pe(fe,1)){Hn(z?a:ve,Bi[1],Ke,!0);var ye=!isNaN(V.y-V.startY),Q=V.isDragging,te=Q&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),xe=$o(fe);!te&&ye&&(V._vx.reset(),V._vy.reset(),u&&re&&En.delayedCall(.08,function(){if(Ta()-Ge>300&&!fe.defaultPrevented){if(fe.target.click)fe.target.click();else if(ve.createEvent){var ge=ve.createEvent("MouseEvents");ge.initMouseEvent("click",!0,!0,gi,1,xe.screenX,xe.screenY,xe.clientX,xe.clientY,!1,!1,!1,!1,0,null),fe.target.dispatchEvent(ge)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,h&&Q&&!z&&rt.restart(!0),Je&&He(),p&&Q&&p(V),v&&v(V,te)}},J=function(ye){return ye.touches&&ye.touches.length>1&&(V.isGesturing=!0)&&oe(ye,V.isDragging)},O=function(){return(V.isGesturing=!1)||D(V)},q=function(ye){if(!pe(ye)){var Q=R(),te=E();be((Q-X)*ae,(te-ne)*ae,1),X=Q,ne=te,h&&rt.restart(!0)}},ee=function(ye){if(!pe(ye)){ye=$o(ye,u),me&&(L=!0);var Q=(ye.deltaMode===1?l:ye.deltaMode===2?gi.innerHeight:1)*m;be(ye.deltaX*Q,ye.deltaY*Q,0),h&&!z&&rt.restart(!0)}},se=function(ye){if(!pe(ye)){var Q=ye.clientX,te=ye.clientY,xe=Q-V.x,ge=te-V.y;V.x=Q,V.y=te,Ee=!0,h&&rt.restart(!0),(xe||ge)&&it(xe,ge)}},Ie=function(ye){V.event=ye,N(V)},nt=function(ye){V.event=ye,G(V)},ut=function(ye){return pe(ye)||$o(ye,u)&&Y(V)};rt=V._dc=En.delayedCall(d||.25,ze).pause(),V.deltaX=V.deltaY=0,V._vx=sh(0,50,!0),V._vy=sh(0,50,!0),V.scrollX=R,V.scrollY=E,V.isDragging=V.isGesturing=V.isPressed=!1,d0(this),V.enable=function(fe){return V.isEnabled||(Wn(Z?ve:a,"scroll",rh),o.indexOf("scroll")>=0&&Wn(Z?ve:a,"scroll",q,Ne,ce),o.indexOf("wheel")>=0&&Wn(a,"wheel",ee,Ne,ce),(o.indexOf("touch")>=0&&u0||o.indexOf("pointer")>=0)&&(Wn(a,Bi[0],at,Ne,ce),Wn(ve,Bi[2],F),Wn(ve,Bi[3],F),re&&Wn(a,"click",le,!0,!0),Y&&Wn(a,"click",ut),oe&&Wn(ve,"gesturestart",J),D&&Wn(ve,"gestureend",O),N&&Wn(a,ds+"enter",Ie),G&&Wn(a,ds+"leave",nt),W&&Wn(a,ds+"move",se)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=Ee=Je=!1,V._vx.reset(),V._vy.reset(),X=R(),ne=E(),fe&&fe.type&&at(fe),Le&&Le(V)),V},V.disable=function(){V.isEnabled&&(fo.filter(function(fe){return fe!==V&&Ea(fe.target)}).length||Hn(Z?ve:a,"scroll",rh),V.isPressed&&(V._vx.reset(),V._vy.reset(),Hn(z?a:ve,Bi[1],Ke,!0)),Hn(Z?ve:a,"scroll",q,ce),Hn(a,"wheel",ee,ce),Hn(a,Bi[0],at,ce),Hn(ve,Bi[2],F),Hn(ve,Bi[3],F),Hn(a,"click",le,!0),Hn(a,"click",ut),Hn(ve,"gesturestart",J),Hn(ve,"gestureend",O),Hn(a,ds+"enter",Ie),Hn(a,ds+"leave",nt),Hn(a,ds+"move",se),V.isEnabled=V.isPressed=V.isDragging=!1,Oe&&Oe(V))},V.kill=V.revert=function(){V.disable();var fe=fo.indexOf(V);fe>=0&&fo.splice(fe,1),_r===V&&(_r=0)},fo.push(V),z&&Ea(a)&&(_r=V),V.enable(_)},Q_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Kt.version="3.13.0";Kt.create=function(r){return new Kt(r)};Kt.register=g0;Kt.getAll=function(){return fo.slice()};Kt.getById=function(r){return fo.filter(function(e){return e.vars.id===r})[0]};f0()&&En.registerPlugin(Kt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Be,lo,gt,Nt,pi,Et,Rd,xc,qa,Aa,da,ll,Ln,Nc,oh,Yn,Mf,Sf,co,_0,Jc,v0,Xn,ah,x0,y0,Ur,lh,Pd,So,Dd,yc,ch,Kc,cl=1,Un=Date.now,Zc=Un(),Fi=0,fa=0,bf=function(e,t,n){var i=di(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},wf=function(e,t){return t&&(!di(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},nv=function r(){return fa&&requestAnimationFrame(r)},Tf=function(){return Nc=1},Ef=function(){return Nc=0},qi=function(e){return e},pa=function(e){return Math.round(e*1e5)/1e5||0},M0=function(){return typeof window<"u"},S0=function(){return Be||M0()&&(Be=window.gsap)&&Be.registerPlugin&&Be},Ls=function(e){return!!~Rd.indexOf(e)},b0=function(e){return(e==="Height"?Dd:gt["inner"+e])||pi["client"+e]||Et["client"+e]},w0=function(e){return Xr(e,"getBoundingClientRect")||(Ls(e)?function(){return ic.width=gt.innerWidth,ic.height=Dd,ic}:function(){return gr(e)})},iv=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Xr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?b0(s):e["client"+s])||0}},rv=function(e,t){return!t||~er.indexOf(e)?w0(e):function(){return ic}},Zi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Xr(e,n))?o()-w0(e)()[s]:Ls(e)?(pi[n]||Et[n])-b0(i):e[n]-e["offset"+i])},ul=function(e,t){for(var n=0;n<co.length;n+=3)(!t||~t.indexOf(co[n+1]))&&e(co[n],co[n+1],co[n+2])},di=function(e){return typeof e=="string"},kn=function(e){return typeof e=="function"},ma=function(e){return typeof e=="number"},fs=function(e){return typeof e=="object"},jo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Qc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Hs=Math.abs,T0="left",E0="top",Ld="right",Id="bottom",Cs="width",Rs="height",Ca="Right",Ra="Left",Pa="Top",Da="Bottom",tn="padding",Ci="margin",Uo="Width",Fd="Height",an="px",Ri=function(e){return gt.getComputedStyle(e)},sv=function(e){var t=Ri(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Af=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},gr=function(e,t){var n=t&&Ri(e)[oh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Be.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Mc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},A0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},ov=function(e){return function(t){return Be.utils.snap(A0(e),t)}},Ud=function(e){var t=Be.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},av=function(e){return function(t,n){return Ud(A0(e))(t,n.direction)}},hl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},xn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},_n=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},dl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Cf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},fl={toggleActions:"play",anticipatePin:0},Sc={top:0,left:0,center:.5,bottom:1,right:1},Ql=function(e,t){if(di(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Sc?Sc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},pl=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,m=Nt.createElement("div"),_=Ls(n)||Xr(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,p=_?Et:n,x=e.indexOf("start")!==-1,y=x?c:u,v="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(v+=(i===ln?Ld:Id)+":"+(o+parseFloat(d))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=x,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=v,m.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(m,p.children[0]):p.appendChild(m),m._offset=m["offset"+i.op.d2],ec(m,0,i,x),m},ec=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Uo]=1,s["border"+a+Uo]=0,s[n.p]=t+"px",Be.set(e,s)},mt=[],uh={},Xa,Rf=function(){return Un()-Fi>34&&(Xa||(Xa=requestAnimationFrame(Sr)))},Vs=function(){(!Xn||!Xn.isPressed||Xn.startX>Et.clientWidth)&&(_t.cache++,Xn?Xa||(Xa=requestAnimationFrame(Sr)):Sr(),Fi||Fs("scrollStart"),Fi=Un())},eu=function(){y0=gt.innerWidth,x0=gt.innerHeight},ga=function(e){_t.cache++,(e===!0||!Ln&&!v0&&!Nt.fullscreenElement&&!Nt.webkitFullscreenElement&&(!ah||y0!==gt.innerWidth||Math.abs(gt.innerHeight-x0)>gt.innerHeight*.25))&&xc.restart(!0)},Is={},lv=[],C0=function r(){return _n(Xe,"scrollEnd",r)||ys(!0)},Fs=function(e){return Is[e]&&Is[e].map(function(t){return t()})||lv},hi=[],R0=function(e){for(var t=0;t<hi.length;t+=5)(!e||hi[t+4]&&hi[t+4].query===e)&&(hi[t].style.cssText=hi[t+1],hi[t].getBBox&&hi[t].setAttribute("transform",hi[t+2]||""),hi[t+3].uncache=1)},Nd=function(e,t){var n;for(Yn=0;Yn<mt.length;Yn++)n=mt[Yn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));yc=!0,t&&R0(t),t||Fs("revert")},P0=function(e,t){_t.cache++,(t||!$n)&&_t.forEach(function(n){return kn(n)&&n.cacheID++&&(n.rec=0)}),di(e)&&(gt.history.scrollRestoration=Pd=e)},$n,Ps=0,Pf,cv=function(){if(Pf!==Ps){var e=Pf=Ps;requestAnimationFrame(function(){return e===Ps&&ys(!0)})}},D0=function(){Et.appendChild(So),Dd=!Xn&&So.offsetHeight||gt.innerHeight,Et.removeChild(So)},Df=function(e){return qa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ys=function(e,t){if(pi=Nt.documentElement,Et=Nt.body,Rd=[gt,Nt,pi,Et],Fi&&!e&&!yc){xn(Xe,"scrollEnd",C0);return}D0(),$n=Xe.isRefreshing=!0,_t.forEach(function(i){return kn(i)&&++i.cacheID&&(i.rec=i())});var n=Fs("refreshInit");_0&&Xe.sort(),t||Nd(),_t.forEach(function(i){kn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),mt.slice(0).forEach(function(i){return i.refresh()}),yc=!1,mt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),ch=1,Df(!0),mt.forEach(function(i){var s=Zi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Df(!1),ch=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),_t.forEach(function(i){kn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),P0(Pd,1),xc.pause(),Ps++,$n=2,Sr(2),mt.forEach(function(i){return kn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),$n=Xe.isRefreshing=!1,Fs("refresh")},hh=0,tc=1,La,Sr=function(e){if(e===2||!$n&&!yc){Xe.isUpdating=!0,La&&La.update(0);var t=mt.length,n=Un(),i=n-Zc>=50,s=t&&mt[0].scroll();if(tc=hh>s?-1:1,$n||(hh=s),i&&(Fi&&!Nc&&n-Fi>200&&(Fi=0,Fs("scrollEnd")),da=Zc,Zc=n),tc<0){for(Yn=t;Yn-- >0;)mt[Yn]&&mt[Yn].update(0,i);tc=1}else for(Yn=0;Yn<t;Yn++)mt[Yn]&&mt[Yn].update(0,i);Xe.isUpdating=!1}Xa=0},dh=[T0,E0,Id,Ld,Ci+Da,Ci+Ca,Ci+Pa,Ci+Ra,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],nc=dh.concat([Cs,Rs,"boxSizing","max"+Uo,"max"+Fd,"position",Ci,tn,tn+Pa,tn+Ca,tn+Da,tn+Ra]),uv=function(e,t,n){bo(n);var i=e._gsap;if(i.spacerIsNative)bo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},tu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=dh.length,o=t.style,a=e.style,l;s--;)l=dh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Id]=a[Ld]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Cs]=Mc(e,Jn)+an,o[Rs]=Mc(e,ln)+an,o[tn]=a[Ci]=a[E0]=a[T0]="0",bo(i),a[Cs]=a["max"+Uo]=n[Cs],a[Rs]=a["max"+Fd]=n[Rs],a[tn]=n[tn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},hv=/([A-Z])/g,bo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Be.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(hv,"-$1").toLowerCase())}},ml=function(e){for(var t=nc.length,n=e.style,i=[],s=0;s<t;s++)i.push(nc[s],n[nc[s]]);return i.t=e,i},dv=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},ic={left:0,top:0},Lf=function(e,t,n,i,s,o,a,l,c,u,h,d,f,m){kn(e)&&(e=e(l)),di(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Ql("0"+e.substr(3),n):0));var _=f?f.time():0,g,p,x;if(f&&f.seek(0),isNaN(e)||(e=+e),ma(e))f&&(e=Be.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&ec(a,n,i,!0);else{kn(t)&&(t=t(l));var y=(e||"0").split(" "),v,T,w,b;x=Qn(t,l)||Et,v=gr(x)||{},(!v||!v.left&&!v.top)&&Ri(x).display==="none"&&(b=x.style.display,x.style.display="block",v=gr(x),b?x.style.display=b:x.style.removeProperty("display")),T=Ql(y[0],v[i.d]),w=Ql(y[1]||"0",n),e=v[i.p]-c[i.p]-u+T+s-w,a&&ec(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var C=e+n,S=o._isStart;g="scroll"+i.d2,ec(o,C,i,S&&C>20||!S&&(h?Math.max(Et[g],pi[g]):o.parentNode[g])<=C+1),h&&(c=gr(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+an))}return f&&x&&(g=gr(x),f.seek(d),p=gr(x),f._caScrollDist=g[i.p]-p[i.p],e=e/f._caScrollDist*d),f&&f.seek(_),f?e:Math.round(e)},fv=/(webkit|moz|length|cssText|inset)/i,If=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===Et){e._stOrig=s.cssText,a=Ri(e);for(o in a)!+o&&!fv.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Be.core.getCache(e).uncache=1,t.appendChild(e)}},L0=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},gl=function(e,t,n){var i={};i[t.p]="+="+n,Be.set(e,i)},Ff=function(e,t){var n=Zr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var d=o.tween,f=l.onComplete,m={};c=c||n();var _=L0(n,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){_t.cache++,o.tween&&Sr()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Be.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},xn(e,"wheel",n.wheelHandler),Xe.isTouch&&xn(e,"touchmove",n.wheelHandler),s},Xe=(function(){function r(t,n){lo||r.register(Be)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),lh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!fa){this.update=this.refresh=this.kill=qi;return}n=Af(di(n)||ma(n)||n.nodeType?{trigger:n}:n,fl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,p=s.onScrubComplete,x=s.onSnapComplete,y=s.once,v=s.snap,T=s.pinReparent,w=s.pinSpacer,b=s.containerAnimation,C=s.fastScrollEnd,S=s.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Jn:ln,P=!h&&h!==0,U=Qn(n.scroller||gt),H=Be.core.getCache(U),N=Ls(U),G=("pinType"in n?n.pinType:Xr(U,"pinType")||N&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],$=P&&n.toggleActions.split(" "),z="markers"in n?n.markers:fl.markers,oe=N?0:parseFloat(Ri(U)["border"+M.p2+Uo])||0,D=this,me=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Le=iv(U,N,M),Oe=rv(U,N),Y=0,ae=0,ce=0,re=Zr(U,M),_e,Ve,Re,rt,Je,Ee,L,xt,qe,V,Ce,ct,Ne,R,E,X,ne,ie,Z,ve,he,Se,Ge,le,pe,ze,He,be,it,Ke,at,F,J,O,q,ee,se,Ie,nt;if(D._startClamp=D._endClamp=!1,D._dir=M,g*=45,D.scroller=U,D.scroll=b?b.time.bind(b):re,rt=re(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(_0=1,n.refreshPriority===-9999&&(La=D)),H.tweenScroll=H.tweenScroll||{top:Ff(U,ln),left:Ff(U,Jn)},D.tweenTo=_e=H.tweenScroll[M.p],D.scrubDuration=function(te){J=ma(te)&&te,J?F?F.duration(te):F=Be.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:J,paused:!0,onComplete:function(){return p&&p(D)}}):(F&&F.progress(1).kill(),F=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(h),Ke=0,l||(l=i.vars.id)),v&&((!fs(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Et.style&&Be.set(N?[Et,pi]:U,{scrollBehavior:"auto"}),_t.forEach(function(te){return kn(te)&&te.target===(N?Nt.scrollingElement||pi:U)&&(te.smooth=!1)}),Re=kn(v.snapTo)?v.snapTo:v.snapTo==="labels"?ov(i):v.snapTo==="labelsDirectional"?av(i):v.directional!==!1?function(te,xe){return Ud(v.snapTo)(te,Un()-ae<500?0:xe.direction)}:Be.utils.snap(v.snapTo),O=v.duration||{min:.1,max:2},O=fs(O)?Aa(O.min,O.max):Aa(O,O),q=Be.delayedCall(v.delay||J/2||.1,function(){var te=re(),xe=Un()-ae<500,ge=_e.tween;if((xe||Math.abs(D.getVelocity())<10)&&!ge&&!Nc&&Y!==te){var ke=(te-Ee)/R,De=i&&!P?i.totalProgress():ke,Me=xe?0:(De-at)/(Un()-da)*1e3||0,we=Be.utils.clamp(-ke,1-ke,Hs(Me/2)*Me/.185),st=ke+(v.inertia===!1?0:we),ht,ot,dt=v,fn=dt.onStart,At=dt.onInterrupt,pn=dt.onComplete;if(ht=Re(st,D),ma(ht)||(ht=st),ot=Math.max(0,Math.round(Ee+ht*R)),te<=L&&te>=Ee&&ot!==te){if(ge&&!ge._initted&&ge.data<=Hs(ot-te))return;v.inertia===!1&&(we=ht-ke),_e(ot,{duration:O(Hs(Math.max(Hs(st-De),Hs(ht-De))*.185/Me/.05||0)),ease:v.ease||"power3",data:Hs(ot-te),onInterrupt:function(){return q.restart(!0)&&At&&At(D)},onComplete:function(){D.update(),Y=re(),i&&!P&&(F?F.resetTo("totalProgress",ht,i._tTime/i._tDur):i.progress(ht)),Ke=at=i&&!P?i.totalProgress():D.progress,x&&x(D),pn&&pn(D)}},te,we*R,ot-te-we*R),fn&&fn(D,_e.tween)}}else D.isActive&&Y!==te&&q.restart(!0)}).pause()),l&&(uh[l]=D),d=D.trigger=Qn(d||f!==!0&&f),nt=d&&d._gsap&&d._gsap.stRevert,nt&&(nt=nt(D)),f=f===!0?d:Qn(f),di(a)&&(a={targets:d,className:a}),f&&(m===!1||m===Ci||(m=!m&&f.parentNode&&f.parentNode.style&&Ri(f.parentNode).display==="flex"?!1:tn),D.pin=f,Ve=Be.core.getCache(f),Ve.spacer?E=Ve.pinState:(w&&(w=Qn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ve.spacerIsNative=!!w,w&&(Ve.spacerState=ml(w))),Ve.spacer=ie=w||Nt.createElement("div"),ie.classList.add("pin-spacer"),l&&ie.classList.add("pin-spacer-"+l),Ve.pinState=E=ml(f)),n.force3D!==!1&&Be.set(f,{force3D:!0}),D.spacer=ie=Ve.spacer,it=Ri(f),le=it[m+M.os2],ve=Be.getProperty(f),he=Be.quickSetter(f,M.a,an),tu(f,ie,it),ne=ml(f)),z){ct=fs(z)?Af(z,Cf):Cf,V=pl("scroller-start",l,U,M,ct,0),Ce=pl("scroller-end",l,U,M,ct,0,V),Z=V["offset"+M.op.d2];var ut=Qn(Xr(U,"content")||U);xt=this.markerStart=pl("start",l,ut,M,ct,Z,0,b),qe=this.markerEnd=pl("end",l,ut,M,ct,Z,0,b),b&&(Ie=Be.quickSetter([xt,qe],M.a,an)),!G&&!(er.length&&Xr(U,"fixedMarkers")===!0)&&(sv(N?Et:U),Be.set([V,Ce],{force3D:!0}),ze=Be.quickSetter(V,M.a,an),be=Be.quickSetter(Ce,M.a,an))}if(b){var fe=b.vars.onUpdate,ye=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){D.update(0,0,1),fe&&fe.apply(b,ye||[])})}if(D.previous=function(){return mt[mt.indexOf(D)-1]},D.next=function(){return mt[mt.indexOf(D)+1]},D.revert=function(te,xe){if(!xe)return D.kill(!0);var ge=te!==!1||!D.enabled,ke=Ln;ge!==D.isReverted&&(ge&&(ee=Math.max(re(),D.scroll.rec||0),ce=D.progress,se=i&&i.progress()),xt&&[xt,qe,V,Ce].forEach(function(De){return De.style.display=ge?"none":"block"}),ge&&(Ln=D,D.update(ge)),f&&(!T||!D.isActive)&&(ge?uv(f,ie,E):tu(f,ie,Ri(f),pe)),ge||D.update(ge),Ln=ke,D.isReverted=ge)},D.refresh=function(te,xe,ge,ke){if(!((Ln||!D.enabled)&&!xe)){if(f&&te&&Fi){xn(r,"scrollEnd",C0);return}!$n&&me&&me(D),Ln=D,_e.tween&&!ge&&(_e.tween.kill(),_e.tween=0),F&&F.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(lt){return lt.vars.immediateRender&&lt.render(0,!0,!0)})),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var De=Le(),Me=Oe(),we=b?b.duration():Zi(U,M),st=R<=.01||!R,ht=0,ot=ke||0,dt=fs(ge)?ge.end:n.end,fn=n.endTrigger||d,At=fs(ge)?ge.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),pn=D.pinnedContainer=n.pinnedContainer&&Qn(n.pinnedContainer,D),on=d&&Math.max(0,mt.indexOf(D))||0,Ot=on,Lt,A,B,K,j,k,ue,Te,Ue,Fe,je,Qe,Ye;for(z&&fs(ge)&&(Qe=Be.getProperty(V,M.p),Ye=Be.getProperty(Ce,M.p));Ot-- >0;)k=mt[Ot],k.end||k.refresh(0,1)||(Ln=D),ue=k.pin,ue&&(ue===d||ue===f||ue===pn)&&!k.isReverted&&(Fe||(Fe=[]),Fe.unshift(k),k.revert(!0,!0)),k!==mt[Ot]&&(on--,Ot--);for(kn(At)&&(At=At(D)),At=bf(At,"start",D),Ee=Lf(At,d,De,M,re(),xt,V,D,Me,oe,G,we,b,D._startClamp&&"_startClamp")||(f?-.001:0),kn(dt)&&(dt=dt(D)),di(dt)&&!dt.indexOf("+=")&&(~dt.indexOf(" ")?dt=(di(At)?At.split(" ")[0]:"")+dt:(ht=Ql(dt.substr(2),De),dt=di(At)?At:(b?Be.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Ee):Ee)+ht,fn=d)),dt=bf(dt,"end",D),L=Math.max(Ee,Lf(dt||(fn?"100% 0":we),fn,De,M,re()+ht,qe,Ce,D,Me,oe,G,we,b,D._endClamp&&"_endClamp"))||-.001,ht=0,Ot=on;Ot--;)k=mt[Ot],ue=k.pin,ue&&k.start-k._pinPush<=Ee&&!b&&k.end>0&&(Lt=k.end-(D._startClamp?Math.max(0,k.start):k.start),(ue===d&&k.start-k._pinPush<Ee||ue===pn)&&isNaN(At)&&(ht+=Lt*(1-k.progress)),ue===f&&(ot+=Lt));if(Ee+=ht,L+=ht,D._startClamp&&(D._startClamp+=ht),D._endClamp&&!$n&&(D._endClamp=L||-.001,L=Math.min(L,Zi(U,M))),R=L-Ee||(Ee-=.01)&&.001,st&&(ce=Be.utils.clamp(0,1,Be.utils.normalize(Ee,L,ee))),D._pinPush=ot,xt&&ht&&(Lt={},Lt[M.a]="+="+ht,pn&&(Lt[M.p]="-="+re()),Be.set([xt,qe],Lt)),f&&!(ch&&D.end>=Zi(U,M)))Lt=Ri(f),K=M===ln,B=re(),Se=parseFloat(ve(M.a))+ot,!we&&L>1&&(je=(N?Nt.scrollingElement||pi:U).style,je={style:je,value:je["overflow"+M.a.toUpperCase()]},N&&Ri(Et)["overflow"+M.a.toUpperCase()]!=="scroll"&&(je.style["overflow"+M.a.toUpperCase()]="scroll")),tu(f,ie,Lt),ne=ml(f),A=gr(f,!0),Te=G&&Zr(U,K?Jn:ln)(),m?(pe=[m+M.os2,R+ot+an],pe.t=ie,Ot=m===tn?Mc(f,M)+R+ot:0,Ot&&(pe.push(M.d,Ot+an),ie.style.flexBasis!=="auto"&&(ie.style.flexBasis=Ot+an)),bo(pe),pn&&mt.forEach(function(lt){lt.pin===pn&&lt.vars.pinSpacing!==!1&&(lt._subPinOffset=!0)}),G&&re(ee)):(Ot=Mc(f,M),Ot&&ie.style.flexBasis!=="auto"&&(ie.style.flexBasis=Ot+an)),G&&(j={top:A.top+(K?B-Ee:Te)+an,left:A.left+(K?Te:B-Ee)+an,boxSizing:"border-box",position:"fixed"},j[Cs]=j["max"+Uo]=Math.ceil(A.width)+an,j[Rs]=j["max"+Fd]=Math.ceil(A.height)+an,j[Ci]=j[Ci+Pa]=j[Ci+Ca]=j[Ci+Da]=j[Ci+Ra]="0",j[tn]=Lt[tn],j[tn+Pa]=Lt[tn+Pa],j[tn+Ca]=Lt[tn+Ca],j[tn+Da]=Lt[tn+Da],j[tn+Ra]=Lt[tn+Ra],X=dv(E,j,T),$n&&re(0)),i?(Ue=i._initted,Jc(1),i.render(i.duration(),!0,!0),Ge=ve(M.a)-Se+R+ot,He=Math.abs(R-Ge)>1,G&&He&&X.splice(X.length-2,2),i.render(0,!0,!0),Ue||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Jc(0)):Ge=R,je&&(je.value?je.style["overflow"+M.a.toUpperCase()]=je.value:je.style.removeProperty("overflow-"+M.a));else if(d&&re()&&!b)for(A=d.parentNode;A&&A!==Et;)A._pinOffset&&(Ee-=A._pinOffset,L-=A._pinOffset),A=A.parentNode;Fe&&Fe.forEach(function(lt){return lt.revert(!1,!0)}),D.start=Ee,D.end=L,rt=Je=$n?ee:re(),!b&&!$n&&(rt<ee&&re(ee),D.scroll.rec=0),D.revert(!1,!0),ae=Un(),q&&(Y=-1,q.restart(!0)),Ln=0,i&&P&&(i._initted||se)&&i.progress()!==se&&i.progress(se||0,!0).render(i.time(),!0,!0),(st||ce!==D.progress||b||_||i&&!i._initted)&&(i&&!P&&(i._initted||ce||i.vars.immediateRender!==!1)&&i.totalProgress(b&&Ee<-.001&&!ce?Be.utils.normalize(Ee,L,0):ce,!0),D.progress=st||(rt-Ee)/R===ce?0:ce),f&&m&&(ie._pinOffset=Math.round(D.progress*Ge)),F&&F.invalidate(),isNaN(Qe)||(Qe-=Be.getProperty(V,M.p),Ye-=Be.getProperty(Ce,M.p),gl(V,M,Qe),gl(xt,M,Qe-(ke||0)),gl(Ce,M,Ye),gl(qe,M,Ye-(ke||0))),st&&!$n&&D.update(),u&&!$n&&!Ne&&(Ne=!0,u(D),Ne=!1)}},D.getVelocity=function(){return(re()-Je)/(Un()-da)*1e3||0},D.endAnimation=function(){jo(D.callbackAnimation),i&&(F?F.progress(1):i.paused()?P||jo(i,D.direction<0,1):jo(i,i.reversed()))},D.labelToScroll=function(te){return i&&i.labels&&(Ee||D.refresh()||Ee)+i.labels[te]/i.duration()*R||0},D.getTrailing=function(te){var xe=mt.indexOf(D),ge=D.direction>0?mt.slice(0,xe).reverse():mt.slice(xe+1);return(di(te)?ge.filter(function(ke){return ke.vars.preventOverlaps===te}):ge).filter(function(ke){return D.direction>0?ke.end<=Ee:ke.start>=L})},D.update=function(te,xe,ge){if(!(b&&!ge&&!te)){var ke=$n===!0?ee:D.scroll(),De=te?0:(ke-Ee)/R,Me=De<0?0:De>1?1:De||0,we=D.progress,st,ht,ot,dt,fn,At,pn,on;if(xe&&(Je=rt,rt=b?re():ke,v&&(at=Ke,Ke=i&&!P?i.totalProgress():Me)),g&&f&&!Ln&&!cl&&Fi&&(!Me&&Ee<ke+(ke-Je)/(Un()-da)*g?Me=1e-4:Me===1&&L>ke+(ke-Je)/(Un()-da)*g&&(Me=.9999)),Me!==we&&D.enabled){if(st=D.isActive=!!Me&&Me<1,ht=!!we&&we<1,At=st!==ht,fn=At||!!Me!=!!we,D.direction=Me>we?1:-1,D.progress=Me,fn&&!Ln&&(ot=Me&&!we?0:Me===1?1:we===1?2:3,P&&(dt=!At&&$[ot+1]!=="none"&&$[ot+1]||$[ot],on=i&&(dt==="complete"||dt==="reset"||dt in i))),S&&(At||on)&&(on||h||!i)&&(kn(S)?S(D):D.getTrailing(S).forEach(function(B){return B.endAnimation()})),P||(F&&!Ln&&!cl?(F._dp._time-F._start!==F._time&&F.render(F._dp._time-F._start),F.resetTo?F.resetTo("totalProgress",Me,i._tTime/i._tDur):(F.vars.totalProgress=Me,F.invalidate().restart())):i&&i.totalProgress(Me,!!(Ln&&(ae||te)))),f){if(te&&m&&(ie.style[m+M.os2]=le),!G)he(pa(Se+Ge*Me));else if(fn){if(pn=!te&&Me>we&&L+1>ke&&ke+1>=Zi(U,M),T)if(!te&&(st||pn)){var Ot=gr(f,!0),Lt=ke-Ee;If(f,Et,Ot.top+(M===ln?Lt:0)+an,Ot.left+(M===ln?0:Lt)+an)}else If(f,ie);bo(st||pn?X:ne),He&&Me<1&&st||he(Se+(Me===1&&!pn?Ge:0))}}v&&!_e.tween&&!Ln&&!cl&&q.restart(!0),a&&(At||y&&Me&&(Me<1||!Kc))&&qa(a.targets).forEach(function(B){return B.classList[st||y?"add":"remove"](a.className)}),o&&!P&&!te&&o(D),fn&&!Ln?(P&&(on&&(dt==="complete"?i.pause().totalProgress(1):dt==="reset"?i.restart(!0).pause():dt==="restart"?i.restart(!0):i[dt]()),o&&o(D)),(At||!Kc)&&(c&&At&&Qc(D,c),W[ot]&&Qc(D,W[ot]),y&&(Me===1?D.kill(!1,1):W[ot]=0),At||(ot=Me===1?1:3,W[ot]&&Qc(D,W[ot]))),C&&!st&&Math.abs(D.getVelocity())>(ma(C)?C:2500)&&(jo(D.callbackAnimation),F?F.progress(1):jo(i,dt==="reverse"?1:!Me,1))):P&&o&&!Ln&&o(D)}if(be){var A=b?ke/b.duration()*(b._caScrollDist||0):ke;ze(A+(V._isFlipped?1:0)),be(A)}Ie&&Ie(-ke/b.duration()*(b._caScrollDist||0))}},D.enable=function(te,xe){D.enabled||(D.enabled=!0,xn(U,"resize",ga),N||xn(U,"scroll",Vs),me&&xn(r,"refreshInit",me),te!==!1&&(D.progress=ce=0,rt=Je=Y=re()),xe!==!1&&D.refresh())},D.getTween=function(te){return te&&_e?_e.tween:F},D.setPositions=function(te,xe,ge,ke){if(b){var De=b.scrollTrigger,Me=b.duration(),we=De.end-De.start;te=De.start+we*te/Me,xe=De.start+we*xe/Me}D.refresh(!1,!1,{start:wf(te,ge&&!!D._startClamp),end:wf(xe,ge&&!!D._endClamp)},ke),D.update()},D.adjustPinSpacing=function(te){if(pe&&te){var xe=pe.indexOf(M.d)+1;pe[xe]=parseFloat(pe[xe])+te+an,pe[1]=parseFloat(pe[1])+te+an,bo(pe)}},D.disable=function(te,xe){if(D.enabled&&(te!==!1&&D.revert(!0,!0),D.enabled=D.isActive=!1,xe||F&&F.pause(),ee=0,Ve&&(Ve.uncache=1),me&&_n(r,"refreshInit",me),q&&(q.pause(),_e.tween&&_e.tween.kill()&&(_e.tween=0)),!N)){for(var ge=mt.length;ge--;)if(mt[ge].scroller===U&&mt[ge]!==D)return;_n(U,"resize",ga),N||_n(U,"scroll",Vs)}},D.kill=function(te,xe){D.disable(te,xe),F&&!xe&&F.kill(),l&&delete uh[l];var ge=mt.indexOf(D);ge>=0&&mt.splice(ge,1),ge===Yn&&tc>0&&Yn--,ge=0,mt.forEach(function(ke){return ke.scroller===D.scroller&&(ge=1)}),ge||$n||(D.scroll.rec=0),i&&(i.scrollTrigger=null,te&&i.revert({kill:!1}),xe||i.kill()),xt&&[xt,qe,V,Ce].forEach(function(ke){return ke.parentNode&&ke.parentNode.removeChild(ke)}),La===D&&(La=0),f&&(Ve&&(Ve.uncache=1),ge=0,mt.forEach(function(ke){return ke.pin===f&&ge++}),ge||(Ve.spacer=0)),n.onKill&&n.onKill(D)},mt.push(D),D.enable(!1,!1),nt&&nt(D),i&&i.add&&!R){var Q=D.update;D.update=function(){D.update=Q,_t.cache++,Ee||L||D.refresh()},Be.delayedCall(.01,D.update),R=.01,Ee=L=0}else D.refresh();f&&cv()},r.register=function(n){return lo||(Be=n||S0(),M0()&&window.document&&r.enable(),lo=fa),lo},r.defaults=function(n){if(n)for(var i in n)fl[i]=n[i];return fl},r.disable=function(n,i){fa=0,mt.forEach(function(o){return o[i?"kill":"disable"](n)}),_n(gt,"wheel",Vs),_n(Nt,"scroll",Vs),clearInterval(ll),_n(Nt,"touchcancel",qi),_n(Et,"touchstart",qi),hl(_n,Nt,"pointerdown,touchstart,mousedown",Tf),hl(_n,Nt,"pointerup,touchend,mouseup",Ef),xc.kill(),ul(_n);for(var s=0;s<_t.length;s+=3)dl(_n,_t[s],_t[s+1]),dl(_n,_t[s],_t[s+2])},r.enable=function(){if(gt=window,Nt=document,pi=Nt.documentElement,Et=Nt.body,Be&&(qa=Be.utils.toArray,Aa=Be.utils.clamp,lh=Be.core.context||qi,Jc=Be.core.suppressOverwrites||qi,Pd=gt.history.scrollRestoration||"auto",hh=gt.pageYOffset||0,Be.core.globals("ScrollTrigger",r),Et)){fa=1,So=document.createElement("div"),So.style.height="100vh",So.style.position="absolute",D0(),nv(),Kt.register(Be),r.isTouch=Kt.isTouch,Ur=Kt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ah=Kt.isTouch===1,xn(gt,"wheel",Vs),Rd=[gt,Nt,pi,Et],Be.matchMedia?(r.matchMedia=function(c){var u=Be.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Be.addEventListener("matchMediaInit",function(){return Nd()}),Be.addEventListener("matchMediaRevert",function(){return R0()}),Be.addEventListener("matchMedia",function(){ys(0,1),Fs("matchMedia")}),Be.matchMedia().add("(orientation: portrait)",function(){return eu(),eu})):console.warn("Requires GSAP 3.11.0 or later"),eu(),xn(Nt,"scroll",Vs);var n=Et.hasAttribute("style"),i=Et.style,s=i.borderTopStyle,o=Be.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=gr(Et),ln.m=Math.round(a.top+ln.sc())||0,Jn.m=Math.round(a.left+Jn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Et.setAttribute("style",""),Et.removeAttribute("style")),ll=setInterval(Rf,250),Be.delayedCall(.5,function(){return cl=0}),xn(Nt,"touchcancel",qi),xn(Et,"touchstart",qi),hl(xn,Nt,"pointerdown,touchstart,mousedown",Tf),hl(xn,Nt,"pointerup,touchend,mouseup",Ef),oh=Be.utils.checkPrefix("transform"),nc.push(oh),lo=Un(),xc=Be.delayedCall(.2,ys).pause(),co=[Nt,"visibilitychange",function(){var c=gt.innerWidth,u=gt.innerHeight;Nt.hidden?(Mf=c,Sf=u):(Mf!==c||Sf!==u)&&ga()},Nt,"DOMContentLoaded",ys,gt,"load",ys,gt,"resize",ga],ul(xn),mt.forEach(function(c){return c.enable(0,1)}),l=0;l<_t.length;l+=3)dl(_n,_t[l],_t[l+1]),dl(_n,_t[l],_t[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Kc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ll)||(ll=i)&&setInterval(Rf,i),"ignoreMobileResize"in n&&(ah=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ul(_n)||ul(xn,n.autoRefreshEvents||"none"),v0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Qn(n),o=_t.indexOf(s),a=Ls(s);~o&&_t.splice(o,a?6:2),i&&(a?er.unshift(gt,i,Et,i,pi,i):er.unshift(s,i))},r.clearMatchMedia=function(n){mt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(di(n)?Qn(n):n).getBoundingClientRect(),a=o[s?Cs:Rs]*i||0;return s?o.right-a>0&&o.left+a<gt.innerWidth:o.bottom-a>0&&o.top+a<gt.innerHeight},r.positionInViewport=function(n,i,s){di(n)&&(n=Qn(n));var o=n.getBoundingClientRect(),a=o[s?Cs:Rs],l=i==null?a/2:i in Sc?Sc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/gt.innerWidth:(o.top+l)/gt.innerHeight},r.killAll=function(n){if(mt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Is.killAll||[];Is={},i.forEach(function(s){return s()})}},r})();Xe.version="3.13.0";Xe.saveStyles=function(r){return r?qa(r).forEach(function(e){if(e&&e.style){var t=hi.indexOf(e);t>=0&&hi.splice(t,5),hi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Be.core.getCache(e),lh())}}):hi};Xe.revert=function(r,e){return Nd(!r,e)};Xe.create=function(r,e){return new Xe(r,e)};Xe.refresh=function(r){return r?ga(!0):(lo||Xe.register())&&ys(!0)};Xe.update=function(r){return++_t.cache&&Sr(r===!0?2:0)};Xe.clearScrollMemory=P0;Xe.maxScroll=function(r,e){return Zi(r,e?Jn:ln)};Xe.getScrollFunc=function(r,e){return Zr(Qn(r),e?Jn:ln)};Xe.getById=function(r){return uh[r]};Xe.getAll=function(){return mt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Xe.isScrolling=function(){return!!Fi};Xe.snapDirectional=Ud;Xe.addEventListener=function(r,e){var t=Is[r]||(Is[r]=[]);~t.indexOf(e)||t.push(e)};Xe.removeEventListener=function(r,e){var t=Is[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Xe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],d=[],f=Be.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(m){h.length||f.restart(!0),h.push(m.trigger),d.push(m),s<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&kn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return kn(s)&&(s=s(),xn(Xe,"refresh",function(){return s=e.batchMax()})),qa(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Xe.create(c))}),t};var Uf=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},nu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Kt.isTouch?" pinch-zoom":""):"none",e===pi&&r(Et,t)},_l={auto:1,scroll:1},pv=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Be.core.getCache(s),a=Un(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Et&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(_l[(l=Ri(s)).overflowY]||_l[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Ls(s)&&(_l[(l=Ri(s)).overflowY]||_l[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},I0=function(e,t,n,i){return Kt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&pv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&xn(Nt,Kt.eventTypes[0],Of,!1,!0)},onDisable:function(){return _n(Nt,Kt.eventTypes[0],Of,!0)}})},mv=/(input|label|select|textarea)/i,Nf,Of=function(e){var t=mv.test(e.target.tagName);(t||Nf)&&(e._gsapAllow=!0,Nf=t)},gv=function(e){fs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Qn(e.target)||pi,u=Be.core.globals().ScrollSmoother,h=u&&u.get(),d=Ur&&(e.content&&Qn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=Zr(c,ln),m=Zr(c,Jn),_=1,g=(Kt.isTouch&&gt.visualViewport?gt.visualViewport.scale*gt.visualViewport.width:gt.outerWidth)/gt.innerWidth,p=0,x=kn(i)?function(){return i(a)}:function(){return i||2.8},y,v,T=I0(c,e.type,!0,s),w=function(){return v=!1},b=qi,C=qi,S=function(){l=Zi(c,ln),C=Aa(Ur?1:0,l),n&&(b=Aa(0,Zi(c,Jn))),y=Ps},M=function(){d._gsap.y=pa(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(v){requestAnimationFrame(w);var z=pa(a.deltaY/2),oe=C(f.v-z);if(d&&oe!==f.v+f.offset){f.offset=oe-f.v;var D=pa((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",d._gsap.y=D+"px",f.cacheID=_t.cache,Sr()}return!0}f.offset&&M(),v=!0},U,H,N,G,W=function(){S(),U.isActive()&&U.vars.scrollY>l&&(f()>l?U.progress(1)&&f(l):U.resetTo("scrollY",l))};return d&&Be.set(d,{y:"+=0"}),e.ignoreCheck=function($){return Ur&&$.type==="touchmove"&&P()||_>1.05&&$.type!=="touchstart"||a.isGesturing||$.touches&&$.touches.length>1},e.onPress=function(){v=!1;var $=_;_=pa((gt.visualViewport&&gt.visualViewport.scale||1)/g),U.pause(),$!==_&&nu(c,_>1.01?!0:n?!1:"x"),H=m(),N=f(),S(),y=Ps},e.onRelease=e.onGestureStart=function($,z){if(f.offset&&M(),!z)G.restart(!0);else{_t.cache++;var oe=x(),D,me;n&&(D=m(),me=D+oe*.05*-$.velocityX/.227,oe*=Uf(m,D,me,Zi(c,Jn)),U.vars.scrollX=b(me)),D=f(),me=D+oe*.05*-$.velocityY/.227,oe*=Uf(f,D,me,Zi(c,ln)),U.vars.scrollY=C(me),U.invalidate().duration(oe).play(.01),(Ur&&U.vars.scrollY>=l||D>=l-1)&&Be.to({},{onUpdate:W,duration:oe})}o&&o($)},e.onWheel=function(){U._ts&&U.pause(),Un()-p>1e3&&(y=0,p=Un())},e.onChange=function($,z,oe,D,me){if(Ps!==y&&S(),z&&n&&m(b(D[2]===z?H+($.startX-$.x):m()+z-D[1])),oe){f.offset&&M();var Le=me[2]===oe,Oe=Le?N+$.startY-$.y:f()+oe-me[1],Y=C(Oe);Le&&Oe!==Y&&(N+=Y-Oe),f(Y)}(oe||z)&&Sr()},e.onEnable=function(){nu(c,n?!1:"x"),Xe.addEventListener("refresh",W),xn(gt,"resize",W),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),T.enable()},e.onDisable=function(){nu(c,!0),_n(gt,"resize",W),Xe.removeEventListener("refresh",W),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new Kt(e),a.iOS=Ur,Ur&&!f()&&f(1),Ur&&Be.ticker.add(qi),G=a._dc,U=Be.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:L0(f,f(),function(){return U.pause()})},onUpdate:Sr,onComplete:G.vars.onComplete}),a};Xe.sort=function(r){if(kn(r))return mt.sort(r);var e=gt.pageYOffset||0;return Xe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+gt.innerHeight}),mt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Xe.observe=function(r){return new Kt(r)};Xe.normalizeScroll=function(r){if(typeof r>"u")return Xn;if(r===!0&&Xn)return Xn.enable();if(r===!1){Xn&&Xn.kill(),Xn=r;return}var e=r instanceof Kt?r:gv(r);return Xn&&Xn.target===e.target&&Xn.kill(),Ls(e.target)&&(Xn=e),e};Xe.core={_getVelocityProp:sh,_inputObserver:I0,_scrollers:_t,_proxies:er,bridge:{ss:function(){Fi||Fs("scrollStart"),Fi=Un()},ref:function(){return Ln}}};S0()&&Be.registerPlugin(Xe);var _v="1.3.4";function F0(r,e,t){return Math.max(r,Math.min(e,t))}function vv(r,e,t){return(1-t)*r+t*e}function xv(r,e,t,n){return vv(r,e,1-Math.exp(-t*n))}function yv(r,e){return(r%e+e)%e}var Mv=class{constructor(){$e(this,"isRunning",!1);$e(this,"value",0);$e(this,"from",0);$e(this,"to",0);$e(this,"currentTime",0);$e(this,"lerp");$e(this,"duration");$e(this,"easing");$e(this,"onUpdate")}advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=F0(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=xv(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function Sv(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var bv=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){$e(this,"width",0);$e(this,"height",0);$e(this,"scrollHeight",0);$e(this,"scrollWidth",0);$e(this,"debouncedResize");$e(this,"wrapperResizeObserver");$e(this,"contentResizeObserver");$e(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});$e(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});$e(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=Sv(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},U0=class{constructor(){$e(this,"events",{})}emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},kf=100/6,Cr={passive:!1},wv=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){$e(this,"touchStart",{x:0,y:0});$e(this,"lastDelta",{x:0,y:0});$e(this,"window",{width:0,height:0});$e(this,"emitter",new U0);$e(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});$e(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});$e(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});$e(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?kf:n===2?this.window.width:1,s=n===1?kf:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});$e(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Cr),this.element.addEventListener("touchstart",this.onTouchStart,Cr),this.element.addEventListener("touchmove",this.onTouchMove,Cr),this.element.addEventListener("touchend",this.onTouchEnd,Cr)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Cr),this.element.removeEventListener("touchstart",this.onTouchStart,Cr),this.element.removeEventListener("touchmove",this.onTouchMove,Cr),this.element.removeEventListener("touchend",this.onTouchEnd,Cr)}},Bf=r=>Math.min(1,1.001-Math.pow(2,-10*r)),Tv=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:o=35,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:d="vertical",touchMultiplier:f=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:g,virtualScroll:p,overscroll:x=!0,autoRaf:y=!1,anchors:v=!1,autoToggle:T=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:b=!1}={}){$e(this,"_isScrolling",!1);$e(this,"_isStopped",!1);$e(this,"_isLocked",!1);$e(this,"_preventNextNativeScrollEvent",!1);$e(this,"_resetVelocityTimeout",null);$e(this,"__rafID",null);$e(this,"isTouching");$e(this,"time",0);$e(this,"userData",{});$e(this,"lastVelocity",0);$e(this,"velocity",0);$e(this,"direction",0);$e(this,"options");$e(this,"targetScroll");$e(this,"animatedScroll");$e(this,"animate",new Mv);$e(this,"emitter",new U0);$e(this,"dimensions");$e(this,"virtualScroll");$e(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});$e(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});$e(this,"onTransitionEnd",r=>{if(r.propertyName.includes("overflow")){const e=this.isHorizontal?"overflow-x":"overflow-y",t=getComputedStyle(this.rootElement)[e];["hidden","clip"].includes(t)?this.stop():this.start()}});$e(this,"onClick",r=>{const t=r.composedPath().find(n=>n instanceof HTMLAnchorElement&&(n.getAttribute("href")?.startsWith("#")||n.getAttribute("href")?.startsWith("/#")||n.getAttribute("href")?.startsWith("./#")));if(t){const n=t.getAttribute("href");if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;let s=`#${n.split("#")[1]}`;["#","/#","./#","#top","/#top","./#top"].includes(n)&&(s=0),this.scrollTo(s,i)}}});$e(this,"onPointerDown",r=>{r.button===1&&this.reset()});$e(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(g=>g instanceof HTMLElement&&(typeof u=="function"&&u?.(g)||g.hasAttribute?.("data-lenis-prevent")||i&&g.hasAttribute?.("data-lenis-prevent-touch")||s&&g.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(g,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.preventDefault();const f=i&&this.options.syncTouch,_=i&&n.type==="touchend"&&Math.abs(d)>5;_&&(d=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});$e(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});$e(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=_v,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Bf:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:h,touchMultiplier:f,wheelMultiplier:m,autoResize:_,prevent:g,virtualScroll:p,overscroll:x,autoRaf:y,anchors:v,autoToggle:T,allowNestedScroll:w,__experimental__naiveDimensions:b},this.dimensions=new bv(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new wv(t,{touchMultiplier:f,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:u=!0,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let d;if(typeof r=="string"?d=document.querySelector(r):r instanceof HTMLElement&&r?.nodeType&&(d=r),d){if(this.options.wrapper!==window){const m=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?m.left:m.top}const f=d.getBoundingClientRect();r=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(u){this.targetScroll=this.animatedScroll=this.scroll;const d=r-this.animatedScroll;d>this.limit/2?r=r-this.limit:d<-this.limit/2&&(r=r+this.limit)}}else r=F0(0,r,this.limit);if(r===this.targetScroll){a?.(this),l?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=r),typeof i=="number"&&typeof s!="function"?s=Bf:typeof s=="function"&&typeof i!="number"&&(i=1),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a?.(this)},onUpdate:(d,f)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),u&&(this.targetScroll=d),f||this.emit(),f&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??(r._lenis={});let s,o,a,l,c,u,h,d;const f=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const T=window.getComputedStyle(r);i.computedStyle=T;const w=T.overflowX,b=T.overflowY;if(s=["auto","overlay","scroll"].includes(w),o=["auto","overlay","scroll"].includes(b),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||f==="vertical"&&!o||f==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,d=r.clientHeight,a=c>h,l=u>d,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=h,i.clientHeight=d}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,d=i.clientHeight;if(!s&&!o||!a&&!l||f==="vertical"&&(!o||!l)||f==="horizontal"&&(!s||!a))return!1;let m;if(f==="horizontal")m="x";else if(f==="vertical")m="y";else{const T=e!==0,w=t!==0;T&&s&&a&&(m="x"),w&&o&&l&&(m="y")}if(!m)return!1;let _,g,p,x,y;if(m==="x")_=r.scrollLeft,g=c-h,p=e,x=s,y=a;else if(m==="y")_=r.scrollTop,g=u-d,p=t,x=o,y=l;else return!1;return(p>0?_<g:_>0)&&x&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?yv(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const zf="https://johnnyrayane237.github.io/jobhunter-poste-de-pilotage/",Hf="https://johnnyrayane237.github.io/aiguilleur/",Vf="https://github.com/Johnnyrayane237/standardiste-vocal-ia",Gf="https://github.com/Johnnyrayane237/accueil-client-sms-ia",Wf="https://github.com/Johnnyrayane237/devis-ia-relance-automatique",qf="https://github.com/Johnnyrayane237/rapport-du-lundi-ia",Xf={fr:{meta:{title:"Johanne Pamegne — Automatisation & IA, motion design",description:"Portfolio de Johanne Rayane Nkeuchatchou Pamegne : agents IA, workflows n8n, infrastructure auto-hébergée et motion design en code. Disponible en alternance ou stage alterné."},ui:{"nav.work":"Travaux","nav.pipeline":"Pipeline","nav.motion":"Motion","nav.path":"Parcours","nav.contact":"Contact","nav.menu":"Menu","nav.close":"Fermer",status:"Disponible — alternance ou stage alterné","hero.fullname":"Johanne Rayane Nkeuchatchou Pamegne","hero.kicker":'Alternant <span class="u-accent">Automatisation &amp; IA</span><br>Motion design écrit en code',"hero.lede":"Je conçois des systèmes qui travaillent tout seuls — agents IA, workflows n8n, serveurs — et je leur donne du mouvement.","hero.scroll":"Faire défiler","hero.loc":"Saint-Denis · Île-de-France","manifesto.label":"(01) Manifeste","manifesto.text":"Je construis des systèmes qui font le travail répétitif à la place des équipes. Des agents qui lisent, trient et rédigent. Des workflows qui tournent la nuit. Une seule règle : une personne valide chaque action qui compte.","manifesto.method":"Méthode : je pilote l'IA (Claude Code) pour écrire le code, puis je teste, je mesure les coûts et je documente.","work.label":"(02) Travaux sélectionnés","work.title":"Des systèmes <em>qui tournent,</em> pas des maquettes.","work.hint":"Faites défiler : la sculpture change avec chaque projet","work.open":"Ouvrir le projet","quick.btn":"Recruteur pressé ?","quick.btn.time":"30 s","quick.top":"L'essentiel en 30 s","pipeline.label":"(03) Pipeline en direct","pipeline.title":"Un appel manqué. <em>À vous de choisir.</em>","pipeline.intro":"Faites défiler : l'appel manqué devient une conversation par SMS, étape par étape, comme dans n8n. L'IA comprend la demande, l'agenda propose trois créneaux vraiment libres, et le dernier mot revient au client. Ici, le client, c'est vous.","pipeline.note":"Exemple fictif tiré d'un de mes projets — aucun SMS n'est réellement envoyé.","motion.label":"(04) Motion design","motion.title":"Du mouvement <em>écrit en code.</em>","motion.intro":"Animé en HTML et GSAP avec HyperFrames, voix off ElevenLabs, montage et son avec FFmpeg — le tout piloté avec Claude Code. Le film DT Design est publié avec l'accord de la marque.","motion.play":"Lire avec le son","mdm.title":"Le Meilleur des mondes","mdm.text":"Présentation éditoriale en 4 pages verticales : mise en page en HTML et CSS, schémas SVG générés en JavaScript, export PDF automatique. Réalisée avec Tissio Fumtul Donald.","cap.label":"(05) Capacités","cap.title":"Une boîte à outils <em>de bout en bout.</em>","path.label":"(06) Parcours","path.title":"Apprendre vite, <em>livrer vraiment.</em>","contact.label":"(07) Contact","contact.title":"Parlons <em>alternance.</em>","contact.text":"Je cherche une alternance ou un stage alterné en automatisation et IA, en Île-de-France ou à distance. Le développement web m'intéresse aussi. Rythme école / entreprise flexible, disponible dès maintenant.","contact.mail":"Écrire un e-mail","contact.cv":"Télécharger le CV","contact.copy":"Copier l'adresse","contact.copied":"Adresse copiée","footer.credit":"Conçu et codé par Johanne.","footer.top":"Haut de page","footer.time":"Heure locale","case.close":"Fermer","case.results":"Résultats mesurés","case.built":"Ce que j'ai construit","case.stack":"Outils","case.next":"Projet suivant","loader.1":"démarrage de n8n","loader.2":"connexion à Claude","loader.3":"chargement des workflows","loader.4":"validation humaine : ok","lang.switch":"Switch to English",skip:"Aller au contenu"},quick:{label:"L'essentiel en 30 secondes",title:"Johanne Pamegne, <em>alternant Automatisation &amp; IA.</em>",lede:"Je construis des systèmes qui font le travail répétitif à la place des équipes : agents IA, workflows n8n, serveurs. Chaque chiffre ci-dessous est mesuré sur un vrai projet.",proofs:[["< 1 min","de la demande au devis chiffré, sans qu'aucun prix soit inventé","Devis IA et relance automatique · n8n + Claude","devis"],["69","tests automatiques, 48 blocs n8n générés par du code","Accueil client IA par SMS · n8n + Twilio","accueil-sms"],["60","blocs n8n générés par du code, 65 tests","Standardiste vocal IA · Retell + n8n","standardiste"],["0,07 $","coût mesuré par candidature","JobHunter · multi-agent + Supabase","jobhunter"]],facts:[["Je cherche","Alternance ou stage alterné en automatisation et IA, ou en développement web"],["Disponibilité","Dès maintenant"],["Rythme","Flexible, au choix de l’entreprise"],["Lieu","Île-de-France ou à distance"],["Formation","Bachelor informatique, 2e année — ESIIA, Torcy"]],stack:["n8n","Python","API Claude","Agents IA","Retell AI","Twilio","Docker","PostgreSQL","Supabase","React","GSAP"],cv:"Télécharger le CV",mail:"Écrire un e-mail",more:"Voir tout le site",see:"Voir le projet"},stats:[{n:8,suffix:"",label:"systèmes n8n construits en 2026"},{n:32,suffix:"",label:"workflows dans l'agence de doublage"},{n:102,suffix:"",label:"tests automatisés sur un seul projet"},{n:13,suffix:"/13",label:"candidatures correctement vérifiées par JobHunter"}],projects:[{id:"rapport-lundi",short:"Rapport IA",color:"#FFD84D",year:"2026",img:"media/rapport-lundi.webp",title:"Le rapport du lundi qui se vérifie tout seul",sub:"Des chiffres justes, un commentaire IA vérifié nombre par nombre",tags:["Python","pandas","API Claude","Power BI"],summary:"Chaque lundi matin, l'export des ventes devient un rapport prêt à lire : les erreurs du fichier sont trouvées et écartées, les chiffres clés calculés, et l'IA rédige le commentaire. Avant l'envoi, chaque nombre de ce commentaire est comparé aux calculs : un seul chiffre inventé, et le texte est rejeté. Démo réalisée pour une entreprise fictive, adaptable à tout service qui fait un point chiffré chaque semaine.",metrics:[["42 239 €","d'erreurs écartées en une semaine : le rapport aurait annoncé +47 % au lieu de −2,2 %"],["18/18","nombres du commentaire IA retrouvés dans les calculs, 0 inventé"],["9","erreurs du fichier trouvées et traitées, chaque décision notée"],["33","tests automatiques : si un seul échoue, rien ne part"]],built:["6 contrôles : doublons, champs vides, région retrouvée par le code postal, valeurs impossibles, montant différent de quantité × prix","L'erreur évitée chiffrée chaque semaine : le même calcul sur le fichier brut montre ce que les contrôles ont empêché","Claude reçoit seulement les chiffres calculés ; un nombre inconnu dans sa réponse et c'est un second essai, puis un texte de secours : le rapport part toujours","Rapport HTML lisible dans un e-mail, chaque nombre relié à son origine ; 4 fichiers propres pour Power BI","Lancé chaque lundi par GitHub Actions après les tests, construit en pilotant Claude Code"],stack:["Python","pandas","API Claude","pytest","GitHub Actions","Power BI"],links:[["Voir le code sur GitHub",qf]]},{id:"devis",short:"Devis IA",color:"#D2F65A",year:"2026",img:"media/devis.webp",title:"Devis IA et relance automatique",sub:"Chaque demande chiffrée, chaque devis relancé",tags:["n8n","API Claude","Devis","Relances"],summary:"Une demande écrite en quelques lignes devient un devis chiffré en moins d'une minute, à partir de la grille de prix de l'entreprise : l'IA ne fixe jamais un prix. Le responsable valide d'un geste, le client accepte en ligne, et sans réponse des relances personnalisées partent toutes seules. Démo réalisée pour une entreprise de rénovation fictive, réglable pour tout métier qui vit de devis.",metrics:[["< 1 min","de la demande au brouillon de devis chiffré"],["0","prix fixé par l'IA : chaque montant vient de la grille"],["3","relances sur mesure, arrêtées dès que le client répond"],["41","tests automatiques au vert, 44 blocs n8n"]],built:["Claude repère les ouvrages et les quantités ; le code calcule chaque montant, la TVA, l'acompte et la marge","Contrôles avant envoi : postes oubliés, doublons, quantités anormales ; un poste hors grille bloque l'envoi","Alerte sur le téléphone du responsable : rien ne part sans sa validation","Devis en ligne : le client accepte, pose une question ou décline ; l'IA lit sa réponse et conseille le responsable","Testé de bout en bout avec la vraie API Claude, construit en pilotant Claude Code"],stack:["n8n","API Claude","ntfy","Node.js","Coolify"],links:[["Voir le code sur GitHub",Wf]]},{id:"accueil-sms",short:"Accueil SMS",color:"#FF7AD9",year:"2026",img:"media/accueil-sms.webp",title:"Accueil client IA par SMS",sub:"Plus aucun client perdu, plus aucun rendez-vous oublié",tags:["n8n","API Claude","Twilio","SMS"],summary:"Quand personne ne peut décrocher, l'appelant reçoit un SMS dans la minute. L'IA comprend sa demande, propose trois créneaux vraiment libres et réserve, puis rappelle le rendez-vous, gère les annulations et la liste d'attente. Sans application : un simple SMS suffit.",metrics:[["3","créneaux vraiment libres proposés par SMS"],["48","blocs n8n générés par du code"],["69","tests automatiques au vert"],["2","rappels avant chaque rendez-vous, réponse en un mot"]],built:["Appel manqué : SMS d'accueil dans la minute, alerte au responsable sur son téléphone","Claude comprend les messages libres ; des règles de secours prennent le relais si l'IA ne répond pas","Rappels la veille à 18 h et 3 h avant : le client répond OUI, DEPLACER ou ANNULER","Place libérée offerte à la liste d'attente : le premier OUI l'emporte","Démo à deux téléphones, testée de bout en bout avec un vrai appel, construite en pilotant Claude Code"],stack:["n8n","API Claude","Twilio","ntfy","Node.js","Coolify"],links:[["Voir le code sur GitHub",Gf]]},{id:"standardiste",short:"Standardiste",color:"#C49BFF",year:"2026",img:"media/standardiste.webp",title:"Standardiste vocal IA",sub:"Une assistante qui décroche quand personne ne peut",tags:["Retell AI","n8n","API Claude","ElevenLabs"],summary:"« Lucie » répond au téléphone quand l'équipe est occupée. Elle prend, déplace et annule les rendez-vous, repère les urgences et prévient le responsable. Démo réalisée pour un plombier, réglable pour tout métier qui vit de ses rendez-vous.",metrics:[["60","blocs n8n générés par du code"],["65","tests automatiques au vert"],["6","fonctions appelées par l'agent en plein appel"],["30 j","de conservation des enregistrements (RGPD)"]],built:["Agent vocal Retell AI, voix ElevenLabs, consignes et 6 fonctions","Chaque action revérifiée avant d'écrire dans l'agenda","Urgence : alerte immédiate au responsable, puis transfert de l'appel","Récapitulatif chaque soir, effacement automatique des vieilles données","Testé en appels réels, construit en pilotant Claude Code"],stack:["Retell AI","n8n","API Claude","ElevenLabs","ntfy","Coolify","Node.js"],links:[["Voir le code sur GitHub",Vf]]},{id:"doublage",short:"Doublage",color:"#7CF5D0",year:"2026",img:"media/doublage.webp",title:"Agence IA de doublage vidéo",sub:"Multi-agent · voix clonée",tags:["n8n","API Claude","ElevenLabs","Telegram"],summary:"Une vidéo envoyée sur Telegram revient doublée dans une autre langue, avec la voix d'origine. Un agent directeur coordonne une équipe d'agents : traduction, voix, contrôle qualité.",metrics:[["4 min 40","pour doubler une vidéo réelle de 2 min 10"],["8/10","au contrôle qualité, voix jamais accélérée"],["32","workflows n8n décrits en JavaScript"],["102","tests automatisés"]],built:["Bot Telegram qui répond en 3,5 à 5,6 secondes","Voix clonée avec ElevenLabs, vidéos rangées dans Google Drive","Services simulés pour tout tester sans dépenser","Construit en 3 jours, en pilotant Claude Code"],stack:["n8n","API Claude","ElevenLabs","Telegram","Google Drive","Docker","Node.js"],links:[]},{id:"jobhunter",short:"JobHunter",color:"#35E08B",year:"2026",img:"media/jobhunter.webp",title:"JobHunter",sub:"Système multi-agent de recherche d'alternance",tags:["n8n","Supabase","API Claude","React"],summary:"Des agents cherchent les offres, les notent, trouvent le bon contact et préparent chaque candidature. Un agent vérificateur relit tout : la base refuse un e-mail sans relecture réussie.",metrics:[["74 → 34","offres reçues puis retenues, sur un test réel"],["13/13","candidatures correctement vérifiées"],["0,07 $","coût mesuré par candidature"],["3 000","pas de simulation sans franchir une étape réservée à l'humain"]],built:["13 workflows générés depuis le code et déployés par script","Base Supabase : 21 tables protégées par RLS","Poste de pilotage React 19 + TypeScript, testé avec Vitest","Coût de chaque appel à l’IA enregistré"],stack:["n8n","Supabase","API Claude","Telegram","React 19","TypeScript","Zustand","Vitest"],links:[["Voir le poste de pilotage",zf]]},{id:"aiguilleur",short:"Aiguilleur",color:"#FFB347",year:"2026",img:"media/aiguilleur.webp",title:"Aiguilleur IA",sub:"Tri automatique des e-mails clients",tags:["n8n","API Claude","Gmail","Google Sheets"],summary:"Il relève la boîte contact@ d'une entreprise toutes les 15 secondes. Un seul appel à Claude classe l'e-mail, mesure l'urgence, résume, rédige un brouillon et le confie au bon collègue.",metrics:[["32/32","e-mails de test bien classés"],["1,5 ct","par e-mail analysé"],["15 s","entre deux relèves de la boîte"],["85 %","de confiance minimum, sinon une personne tranche"]],built:["Relève la boîte toutes les 15 s, pièces jointes PDF et photos comprises","Une fiche claire au bon collègue : résumé, action à faire, proposition de réponse","Réponses automatiques en brouillon à valider par défaut","Déclinable par métier : syndic, commerce"],stack:["n8n","API Claude","Gmail","Google Sheets","Telegram","Docker"],links:[["Voir la présentation",Hf]]},{id:"vorchex",short:"VorcheX",color:"#35E08B",year:"2026",img:null,title:"Infrastructure VorcheX",sub:"Serveur d'automatisation auto-hébergé",tags:["VPS Ubuntu","Docker","Coolify","PostgreSQL"],summary:"Mon propre serveur d'automatisation : un n8n central et sa base PostgreSQL sur un VPS que j'administre, déployés avec Docker et Coolify, sous mon domaine.",metrics:[["3","ports ouverts seulement : 22, 80, 443"],["HTTPS","sur chaque sous-domaine"],["1","n8n central pour toutes les agences"],["8 Go","de RAM, architecture pensée pour tenir dedans"]],built:["DNS en joker vers le VPS, certificats automatiques","Pare-feu, fail2ban, swap, mises à jour","Sauvegarde hebdomadaire du serveur"],stack:["Ubuntu","Docker","Coolify","PostgreSQL","DNS","HTTPS"],links:[]},{id:"encaisse",short:"Encaisse",color:"#FFB347",year:"2026",img:null,title:"Encaisse",sub:"Recouvrement de factures BTP — en cours",tags:["n8n","PostgreSQL","Gotenberg"],summary:"Automatisation du recouvrement de factures pour le BTP : relances, PDF, envois. Tout est journalisé, et aucune action juridique ne part sans validation humaine.",metrics:[["3/3","fichiers de tests SQL au vert"],["13","règles de conception écrites avant le code"],["PDF","générés automatiquement par Gotenberg"],["0","envoi réel tant que le mode test est actif"]],built:["PostgreSQL 16, Gotenberg 8, Mailpit en développement","Montants en centimes entiers, paramètres en base","Chaque envoi contrôlé, chaque action journalisée"],stack:["n8n","PostgreSQL","Gotenberg","Docker"],links:[]},{id:"motion",short:"Motion",color:"#FF6B6B",year:"2026",img:"media/dt-motion.webp",title:"Motion design",sub:"Pubs et films de marque animés en code",tags:["HyperFrames","GSAP","ElevenLabs","FFmpeg"],summary:"Des pubs et un film de marque animés en code : HTML et GSAP avec HyperFrames, voix off ElevenLabs, son mixé à −14 LUFS pour Instagram et TikTok.",metrics:[["3 min","film de marque pour DT Design"],["6","publicités verticales 9:16 (30 s et 15 s)"],["4","entreprises accompagnées"],["−14 LUFS","son prêt pour les réseaux"]],built:["Storyboard, voix off, détourage par IA, contrôle qualité","Tout est piloté avec Claude Code","Extraits dans la section Motion"],stack:["HyperFrames","GSAP","ElevenLabs","FFmpeg","Claude Code"],links:[["Voir les extraits","#motion"]]}],pipeline:{nodes:[["Appel manqué","personne ne décroche"],["SMS d'accueil","dans la minute"],["Claude","comprend la demande"],["Agenda","3 créneaux vraiment libres"],["Créneaux","le client choisit"],["Alerte","au responsable"],["Suivi","tout est noté"]],log:["14:02:11  appel manqué — personne ne peut décrocher","14:02:14  SMS → « Désolé de vous avoir manqué. Que puis-je faire pour vous ? »","14:03:40  Claude → « un rendez-vous cette semaine » · urgence : normale","14:03:41  agenda → mar. 10 h · mer. 14 h · jeu. 9 h, tous libres","14:03:41  SMS → « Répondez 1, 2 ou 3 » — en attente du client","14:03:41  alerte → responsable : « Appel manqué, le client est pris en charge »","14:03:42  conversation notée, visible sur le téléphone du responsable"],human:{index:4,btn:"Répondre « 2 »",done:"choisi par vous ✓",log:"14:04:58  le client répond « 2 » — c'est vous → mercredi 14 h réservé, rappel la veille"}},motion:[{id:"dt-motion",src:"media/dt-motion-16x9.mp4",poster:"media/dt-motion.webp",ratio:"16/9",title:"DT Design — film de marque",meta:"16:9 · extrait 22 s"},{id:"dt-film",src:"media/dt-film-9x16.mp4",poster:"media/dt-film.webp",ratio:"9/16",title:"DT Design — « Promesses tenues »",meta:"9:16 · 30 s"},{id:"rhonda",src:"media/rhonda-intro.mp4",poster:"media/rhonda.webp",ratio:"16/9",title:"Rhonda — intro du logo",meta:"16:9 · 15 s · ma marque"},{id:"rjp",src:"media/rjp-intro.mp4",poster:"media/rjp.webp",ratio:"16/9",title:"RJP — « Prêt à courir ? »",meta:"16:9 · 10 s"},{id:"dt-logo",src:"media/dt-logo-9x16.mp4",poster:"media/dt-logo.webp",ratio:"9/16",title:"DT Design — logo animé",meta:"9:16 · 8 s"}],caps:[["Automatisation",["n8n : workflows, webhooks, nœuds Code","Gestion des erreurs et relances","API REST, JSON, cron","Twilio (SMS), Gmail, Telegram"]],["IA générative",["Agents vocaux (Retell AI) et multi-agents","API Claude (Anthropic)","Prompt engineering, sorties JSON","Contrôle qualité des réponses"]],["Données",["PostgreSQL, SQL, migrations","Supabase et sécurité RLS","Google Drive, Google Sheets","Gotenberg (génération de PDF)"]],["Infrastructure",["Docker, Docker Compose","Coolify sur VPS Ubuntu","DNS, HTTPS, pare-feu, nginx","Sauvegardes et surveillance"]],["Développement",["JavaScript / Node.js, TypeScript","React, HTML, CSS","Python, Git, GitHub Actions","Tests automatisés (Vitest)"]],["Motion design",["HyperFrames, GSAP","Voix off ElevenLabs","FFmpeg : montage et mixage","Storyboard et direction artistique"]]],path:[["2026 —","Bachelor informatique, 2e année","ESIIA, Torcy","En cours. 1re année de janvier à juillet 2026."],["2026 —","Fondateur, VorcheX","Projet entrepreneurial","Démonstrateurs d'automatisation IA pour les PME et l'infrastructure qui les héberge."],["2026 —","Équipier polyvalent","McDonald's Paris Louvre","Forte cadence, procédures strictes, travail en équipe — en parallèle des études."],["2025","Baccalauréat informatique","Lycée Bilingue de Tonga Rural, Cameroun",""],["2025","Équipier polyvalent","La Paillote, Douala","Septembre à décembre 2025."],["2024","Formation en développement web","INFOPRO, Douala","Formation en présentiel, de janvier à décembre 2024."]]},en:{meta:{title:"Johanne Pamegne — Automation & AI, motion design",description:"Portfolio of Johanne Rayane Nkeuchatchou Pamegne: AI agents, n8n workflows, self-hosted infrastructure and motion design in code. Open to a work-study position (alternance) in France."},ui:{"nav.work":"Work","nav.pipeline":"Pipeline","nav.motion":"Motion","nav.path":"Path","nav.contact":"Contact","nav.menu":"Menu","nav.close":"Close",status:"Available — work-study or alternating internship","hero.fullname":"Johanne Rayane Nkeuchatchou Pamegne","hero.kicker":'<span class="u-accent">Automation &amp; AI</span> apprentice<br>Motion design written in code',"hero.lede":"I design systems that work on their own — AI agents, n8n workflows, servers — and I give them motion.","hero.scroll":"Scroll","hero.loc":"Saint-Denis · Paris region","manifesto.label":"(01) Manifesto","manifesto.text":"I build systems that take repetitive work off people’s plates. Agents that read, sort and draft. Workflows that run through the night. One rule: a person approves every action that matters.","manifesto.method":"Method: I steer AI (Claude Code) to write the code, then I test, measure costs and document.","work.label":"(02) Selected work","work.title":"Systems <em>that run,</em> not mockups.","work.hint":"Scroll: the sculpture changes with each project","work.open":"Open the project","quick.btn":"Recruiter in a hurry?","quick.btn.time":"30 s","quick.top":"The essentials in 30 s","pipeline.label":"(03) Live pipeline","pipeline.title":"A missed call. <em>You choose.</em>","pipeline.intro":"Scroll: the missed call turns into a text conversation, step by step, like in n8n. The AI understands the request, the calendar offers three truly free slots, and the customer has the last word. Here, the customer is you.","pipeline.note":"Fictional example from one of my projects — no text message is actually sent.","motion.label":"(04) Motion design","motion.title":"Motion <em>written in code.</em>","motion.intro":"Animated in HTML and GSAP with HyperFrames, ElevenLabs voice-over, editing and sound with FFmpeg — all steered with Claude Code. The DT Design film is shown with the brand’s consent.","motion.play":"Play with sound","mdm.title":"Brave New World","mdm.text":"An editorial presentation in 4 vertical pages: HTML and CSS layout, SVG diagrams generated in JavaScript, automatic PDF export. Made with Tissio Fumtul Donald.","cap.label":"(05) Capabilities","cap.title":"An <em>end-to-end</em> toolkit.","path.label":"(06) Path","path.title":"Learn fast, <em>ship for real.</em>","contact.label":"(07) Contact","contact.title":"Let’s talk <em>work-study.</em>","contact.text":"I’m looking for a work-study position (alternance) or an alternating internship in automation and AI, in the Paris region or remote. I’m also open to web development. Flexible school/company rhythm, available now.","contact.mail":"Send an email","contact.cv":"Download my CV","contact.copy":"Copy address","contact.copied":"Address copied","footer.credit":"Designed and built by Johanne.","footer.top":"Back to top","footer.time":"Local time","case.close":"Close","case.results":"Measured results","case.built":"What I built","case.stack":"Tools","case.next":"Next project","loader.1":"starting n8n","loader.2":"connecting to Claude","loader.3":"loading workflows","loader.4":"human approval: ok","lang.switch":"Passer en français",skip:"Skip to content"},quick:{label:"The essentials in 30 seconds",title:"Johanne Pamegne, <em>Automation &amp; AI apprentice.</em>",lede:"I build systems that take repetitive work off people’s plates: AI agents, n8n workflows, servers. Every figure below was measured on a real project.",proofs:[["< 1 min","from request to priced quote, with no price ever invented","AI quotes and follow-up · n8n + Claude","devis"],["69","automated tests, 48 n8n nodes generated from code","AI text-message front desk · n8n + Twilio","accueil-sms"],["60","n8n nodes generated from code, 65 tests","AI voice receptionist · Retell + n8n","standardiste"],["$0.07","measured cost per application","JobHunter · multi-agent + Supabase","jobhunter"]],facts:[["Looking for","A work-study position (alternance) in automation and AI, or in web development"],["Availability","Right now"],["Rhythm","Flexible, the company decides"],["Location","Paris region or remote"],["Education","Bachelor in computer science, year 2 — ESIIA, Torcy"]],stack:["n8n","Python","Claude API","AI agents","Retell AI","Twilio","Docker","PostgreSQL","Supabase","React","GSAP"],cv:"Download my CV",mail:"Send an email",more:"See the whole site",see:"See the project"},stats:[{n:8,suffix:"",label:"n8n systems built in 2026"},{n:32,suffix:"",label:"workflows in the dubbing agency"},{n:102,suffix:"",label:"automated tests on a single project"},{n:13,suffix:"/13",label:"applications reviewed correctly by JobHunter"}],projects:[{id:"rapport-lundi",short:"AI report",color:"#FFD84D",year:"2026",img:"media/rapport-lundi.webp",title:"The Monday report that checks itself",sub:"Accurate figures, an AI commentary checked number by number",tags:["Python","pandas","Claude API","Power BI"],summary:"Every Monday morning, the sales export becomes a ready-to-read report: errors in the file are found and set aside, key figures are calculated, and the AI writes the commentary. Before it goes out, every number in that commentary is checked against the calculations: one invented figure and the text is rejected. Demo built for a fictitious company, adaptable to any team that reviews its figures every week.",metrics:[["€42,239","of errors set aside in one week: the report would have shown +47% instead of −2.2%"],["18/18","numbers in the AI commentary found in the calculations, 0 invented"],["9","file errors found and handled, every decision logged"],["33","automated tests: if a single one fails, nothing is sent"]],built:["6 checks: duplicates, empty fields, region recovered from the postcode, impossible values, amount different from quantity × price","The avoided error, measured every week: the same calculation on the raw file shows what the checks prevented","Claude only receives the calculated figures; an unknown number in its reply means a second try, then a fallback text: the report always goes out","HTML report readable in an email, every number linked to its source; 4 clean files for Power BI","Run every Monday by GitHub Actions after the tests, built by steering Claude Code"],stack:["Python","pandas","Claude API","pytest","GitHub Actions","Power BI"],links:[["See the code on GitHub",qf]]},{id:"devis",short:"AI quotes",color:"#D2F65A",year:"2026",img:"media/devis.webp",title:"AI quotes and automatic follow-up",sub:"Every request priced, every quote followed up",tags:["n8n","Claude API","Quotes","Follow-ups"],summary:"A request written in a few lines becomes a priced quote in under a minute, built from the company’s own price list: the AI never sets a price. The person in charge approves it in one tap, the customer accepts online, and if there is no answer, personalised follow-ups go out on their own. Demo built for a fictitious renovation company, configurable for any business that runs on quotes.",metrics:[["< 1 min","from request to priced draft quote"],["0","prices set by the AI: every amount comes from the price list"],["3","tailored follow-ups, stopped as soon as the customer replies"],["41","automated tests passing, 44 n8n nodes"]],built:["Claude spots the work items and quantities; code calculates every amount, VAT, deposit and margin","Checks before sending: forgotten items, duplicates, unusual quantities; an item missing from the price list blocks sending","Alert on the phone of the person in charge: nothing goes out without their approval","Online quote: the customer accepts, asks a question or declines; the AI reads the reply and advises the person in charge","Tested end to end with the real Claude API, built by steering Claude Code"],stack:["n8n","Claude API","ntfy","Node.js","Coolify"],links:[["See the code on GitHub",Wf]]},{id:"accueil-sms",short:"SMS desk",color:"#FF7AD9",year:"2026",img:"media/accueil-sms.webp",title:"AI text-message front desk",sub:"No more lost customers, no more forgotten appointments",tags:["n8n","Claude API","Twilio","SMS"],summary:"When no one can pick up, the caller gets a text within a minute. The AI understands the request, offers three truly free slots and books one, then sends reminders, handles cancellations and the waiting list. No app to install: a plain text is enough.",metrics:[["3","truly free slots offered by text"],["48","n8n nodes generated from code"],["69","automated tests passing"],["2","reminders before each appointment, one-word replies"]],built:["Missed call: welcome text within a minute, alert on the manager’s phone","Claude understands free-form messages; fallback rules take over if the AI does not answer","Reminders the evening before (6 pm) and 3 hours before: the customer replies yes, move or cancel","Freed slot offered to the waiting list: the first yes wins","Two-phone demo, tested end to end with a real call, built by steering Claude Code"],stack:["n8n","Claude API","Twilio","ntfy","Node.js","Coolify"],links:[["See the code on GitHub",Gf]]},{id:"standardiste",short:"Receptionist",color:"#C49BFF",year:"2026",img:"media/standardiste.webp",title:"AI voice receptionist",sub:"An assistant that answers when no one can",tags:["Retell AI","n8n","Claude API","ElevenLabs"],summary:"“Lucie” answers the phone when the team is busy. She books, moves and cancels appointments, spots emergencies and alerts the person in charge. Demo built for a plumber, configurable for any business that runs on appointments.",metrics:[["60","n8n nodes generated from code"],["65","automated tests passing"],["6","functions the agent calls mid-call"],["30 d","recording retention (GDPR)"]],built:["Retell AI voice agent, ElevenLabs voice, prompt and 6 functions","Every action double-checked before touching the calendar","Emergency: instant alert to the person in charge, then call transfer","Evening summary, automatic deletion of old data","Tested with real calls, built by steering Claude Code"],stack:["Retell AI","n8n","Claude API","ElevenLabs","ntfy","Coolify","Node.js"],links:[["See the code on GitHub",Vf]]},{id:"doublage",short:"Dubbing",color:"#7CF5D0",year:"2026",img:"media/doublage.webp",title:"AI video dubbing agency",sub:"Multi-agent · cloned voice",tags:["n8n","Claude API","ElevenLabs","Telegram"],summary:"Send a video on Telegram and it comes back dubbed in another language, in the original voice. A director agent coordinates a team of agents: translation, voice, quality control.",metrics:[["4 min 40","to dub a real 2 min 10 video"],["8/10","quality score, voice never sped up"],["32","n8n workflows defined in JavaScript"],["102","automated tests"]],built:["Telegram bot answering in 3.5 to 5.6 seconds","Voice cloned with ElevenLabs, videos filed in Google Drive","Mocked services to test everything at no cost","Built in 3 days by steering Claude Code"],stack:["n8n","Claude API","ElevenLabs","Telegram","Google Drive","Docker","Node.js"],links:[]},{id:"jobhunter",short:"JobHunter",color:"#35E08B",year:"2026",img:"media/jobhunter.webp",title:"JobHunter",sub:"Multi-agent work-study job search",tags:["n8n","Supabase","Claude API","React"],summary:"Agents find job offers, score them, look up the right contact and draft each application. A reviewer agent checks everything: the database refuses any email without a passed review.",metrics:[["74 → 34","offers received then shortlisted, real-world test"],["13/13","applications reviewed correctly"],["$0.07","measured cost per application"],["3,000","simulation steps without crossing a human-only step"]],built:["13 workflows generated from code and deployed by script","Supabase database: 21 tables secured with RLS","React 19 + TypeScript control room, tested with Vitest","Cost of every AI call recorded"],stack:["n8n","Supabase","Claude API","Telegram","React 19","TypeScript","Zustand","Vitest"],links:[["Open the control room",zf]]},{id:"aiguilleur",short:"Aiguilleur",color:"#FFB347",year:"2026",img:"media/aiguilleur.webp",title:"Aiguilleur IA",sub:"Automatic customer email triage",tags:["n8n","Claude API","Gmail","Google Sheets"],summary:"It checks a company’s contact@ inbox every 15 seconds. One single Claude call categorises the email, rates urgency, summarises, drafts a reply and hands it to the right teammate.",metrics:[["32/32","test emails routed correctly"],["1.5 ¢","per analysed email"],["15 s","between two inbox checks"],["85 %","minimum confidence, otherwise a person decides"]],built:["Checks the inbox every 15 s, PDF and photo attachments included","A clear brief for the right teammate: summary, action, suggested reply","Automatic replies saved as drafts to approve by default","Adaptable per trade: property management, retail"],stack:["n8n","Claude API","Gmail","Google Sheets","Telegram","Docker"],links:[["See the presentation",Hf]]},{id:"vorchex",short:"VorcheX",color:"#35E08B",year:"2026",img:null,title:"VorcheX infrastructure",sub:"Self-hosted automation server",tags:["Ubuntu VPS","Docker","Coolify","PostgreSQL"],summary:"My own automation server: a central n8n and its PostgreSQL database on a VPS I administer, deployed with Docker and Coolify, under my own domain.",metrics:[["3","open ports only: 22, 80, 443"],["HTTPS","on every subdomain"],["1","central n8n for every agency"],["8 GB","of RAM, architecture designed to fit"]],built:["Wildcard DNS to the VPS, automatic certificates","Firewall, fail2ban, swap, updates","Weekly server backup"],stack:["Ubuntu","Docker","Coolify","PostgreSQL","DNS","HTTPS"],links:[]},{id:"encaisse",short:"Encaisse",color:"#FFB347",year:"2026",img:null,title:"Encaisse",sub:"Construction invoice collection — in progress",tags:["n8n","PostgreSQL","Gotenberg"],summary:"Automated invoice collection for construction companies: reminders, PDFs, sending. Everything is logged, and no legal action goes out without human approval.",metrics:[["3/3","SQL test files passing"],["13","design rules written before the code"],["PDF","generated automatically by Gotenberg"],["0","real sends while test mode is on"]],built:["PostgreSQL 16, Gotenberg 8, Mailpit for development","Amounts stored as integer cents, settings in the database","Every send checked, every action logged"],stack:["n8n","PostgreSQL","Gotenberg","Docker"],links:[]},{id:"motion",short:"Motion",color:"#FF6B6B",year:"2026",img:"media/dt-motion.webp",title:"Motion design",sub:"Ads and brand films animated in code",tags:["HyperFrames","GSAP","ElevenLabs","FFmpeg"],summary:"Ads and a brand film animated in code: HTML and GSAP with HyperFrames, ElevenLabs voice-over, sound mixed at −14 LUFS for Instagram and TikTok.",metrics:[["3 min","brand film for DT Design"],["6","vertical 9:16 ads (30 s and 15 s)"],["4","companies"],["−14 LUFS","sound ready for social media"]],built:["Storyboard, voice-over, AI cut-outs, quality control","All steered with Claude Code","Excerpts in the Motion section"],stack:["HyperFrames","GSAP","ElevenLabs","FFmpeg","Claude Code"],links:[["See the excerpts","#motion"]]}],pipeline:{nodes:[["Missed call","nobody picks up"],["Welcome text","within a minute"],["Claude","understands the request"],["Calendar","3 truly free slots"],["Slots","the customer chooses"],["Alert","to the manager"],["Follow-up","everything logged"]],log:["14:02:11  missed call — nobody can pick up","14:02:14  text → “Sorry we missed you. How can we help?”","14:03:40  Claude → “an appointment this week” · urgency: normal","14:03:41  calendar → Tue 10 am · Wed 2 pm · Thu 9 am, all free","14:03:41  text → “Reply 1, 2 or 3” — waiting for the customer","14:03:41  alert → manager: “Missed call, the customer is being handled”","14:03:42  conversation logged, visible on the manager’s phone"],human:{index:4,btn:"Reply “2”",done:"chosen by you ✓",log:"14:04:58  the customer replies “2” — that’s you → Wednesday 2 pm booked, reminder the day before"}},motion:[{id:"dt-motion",src:"media/dt-motion-16x9.mp4",poster:"media/dt-motion.webp",ratio:"16/9",title:"DT Design — brand film",meta:"16:9 · 22 s excerpt"},{id:"dt-film",src:"media/dt-film-9x16.mp4",poster:"media/dt-film.webp",ratio:"9/16",title:"DT Design — “Promises kept”",meta:"9:16 · 30 s"},{id:"rhonda",src:"media/rhonda-intro.mp4",poster:"media/rhonda.webp",ratio:"16/9",title:"Rhonda — logo intro",meta:"16:9 · 15 s · my brand"},{id:"rjp",src:"media/rjp-intro.mp4",poster:"media/rjp.webp",ratio:"16/9",title:"RJP — “Ready to race?”",meta:"16:9 · 10 s"},{id:"dt-logo",src:"media/dt-logo-9x16.mp4",poster:"media/dt-logo.webp",ratio:"9/16",title:"DT Design — animated logo",meta:"9:16 · 8 s"}],caps:[["Automation",["n8n: workflows, webhooks, Code nodes","Error handling and retries","REST APIs, JSON, cron","Twilio (SMS), Gmail, Telegram"]],["Generative AI",["Voice agents (Retell AI) and multi-agent systems","Claude API (Anthropic)","Prompt engineering, JSON outputs","Output quality control"]],["Data",["PostgreSQL, SQL, migrations","Supabase and RLS security","Google Drive, Google Sheets","Gotenberg (PDF generation)"]],["Infrastructure",["Docker, Docker Compose","Coolify on an Ubuntu VPS","DNS, HTTPS, firewall, nginx","Backups and monitoring"]],["Development",["JavaScript / Node.js, TypeScript","React, HTML, CSS","Python, Git, GitHub Actions","Automated tests (Vitest)"]],["Motion design",["HyperFrames, GSAP","ElevenLabs voice-over","FFmpeg: editing and mixing","Storyboard and art direction"]]],path:[["2026 —","Bachelor in computer science, year 2","ESIIA, Torcy","Ongoing. Year 1 from January to July 2026."],["2026 —","Founder, VorcheX","Entrepreneurial project","AI automation demos for small businesses and the infrastructure that hosts them."],["2026 —","Crew member","McDonald's Paris Louvre","High pace, strict procedures, teamwork — alongside my studies."],["2025","Baccalauréat, computer science","Lycée Bilingue de Tonga Rural, Cameroon",""],["2025","Crew member","La Paillote, Douala","September to December 2025."],["2024","Web development training","INFOPRO, Douala","In-person training, January to December 2024."]]}},po={email:"johannepamegne@gmail.com",phone:"07 49 16 37 92",phoneIntl:"+33749163792",github:"https://github.com/Johnnyrayane237",cv:"media/CV_Johanne-Rayane_NKEUCHATCHOU-PAMEGNE.pdf"};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Od="176",Ev=0,Yf=1,Av=2,N0=1,Cv=2,hr=3,Qr=0,oi=1,$i=2,Yr=0,wo=1,Nn=2,$f=3,jf=4,Rv=5,ms=100,Pv=101,Dv=102,Lv=103,Iv=104,Fv=200,Uv=201,Nv=202,Ov=203,fh=204,ph=205,kv=206,Bv=207,zv=208,Hv=209,Vv=210,Gv=211,Wv=212,qv=213,Xv=214,mh=0,gh=1,_h=2,No=3,vh=4,xh=5,yh=6,Mh=7,O0=0,Yv=1,$v=2,$r=0,jv=1,Jv=2,Kv=3,Zv=4,Qv=5,ex=6,tx=7,k0=300,Oo=301,ko=302,Sh=303,bh=304,Oc=306,wh=1e3,Ms=1001,Th=1002,Vi=1003,nx=1004,vl=1005,Qi=1006,iu=1007,Ss=1008,ir=1009,B0=1010,z0=1011,Ya=1012,kd=1013,Us=1014,vr=1015,nl=1016,Bd=1017,zd=1018,$a=1020,H0=35902,V0=1021,G0=1022,Hi=1023,ja=1026,Ja=1027,W0=1028,Hd=1029,q0=1030,Vd=1031,Gd=1033,rc=33776,sc=33777,oc=33778,ac=33779,Eh=35840,Ah=35841,Ch=35842,Rh=35843,Ph=36196,Dh=37492,Lh=37496,Ih=37808,Fh=37809,Uh=37810,Nh=37811,Oh=37812,kh=37813,Bh=37814,zh=37815,Hh=37816,Vh=37817,Gh=37818,Wh=37819,qh=37820,Xh=37821,lc=36492,Yh=36494,$h=36495,X0=36283,jh=36284,Jh=36285,Kh=36286,ix=3200,rx=3201,Y0=0,sx=1,Or="",Ai="srgb",Bo="srgb-linear",bc="linear",Ct="srgb",Gs=7680,Jf=519,ox=512,ax=513,lx=514,$0=515,cx=516,ux=517,hx=518,dx=519,Zh=35044,Kf="300 es",xr=2e3,wc=2001;class Vo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ru=Math.PI/180,Qh=180/Math.PI;function jr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function vt(r,e,t){return Math.max(e,Math.min(t,r))}function fx(r,e){return(r%e+e)%e}function su(r,e,t){return(1-t)*r+t*e}function ji(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Rt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,t,n,i,s,o,a,l,c){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],x=i[1],y=i[4],v=i[7],T=i[2],w=i[5],b=i[8];return s[0]=o*_+a*x+l*T,s[3]=o*g+a*y+l*w,s[6]=o*p+a*v+l*b,s[1]=c*_+u*x+h*T,s[4]=c*g+u*y+h*w,s[7]=c*p+u*v+h*b,s[2]=d*_+f*x+m*T,s[5]=d*g+f*y+m*w,s[8]=d*p+f*v+m*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,m=t*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ou.makeScale(e,t)),this}rotate(e){return this.premultiply(ou.makeRotation(-e)),this}translate(e,t){return this.premultiply(ou.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ou=new ft;function j0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Tc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function px(){const r=Tc("canvas");return r.style.display="block",r}const Zf={};function cc(r){r in Zf||(Zf[r]=!0,console.warn(r))}function mx(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function gx(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _x(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qf=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ep=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vx(){const r={enabled:!0,workingColorSpace:Bo,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ct&&(i.r=br(i.r),i.g=br(i.g),i.b=br(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(i.r=To(i.r),i.g=To(i.g),i.b=To(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Or?bc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Bo]:{primaries:e,whitePoint:n,transfer:bc,toXYZ:Qf,fromXYZ:ep,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:Qf,fromXYZ:ep,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),r}const bt=vx();function br(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function To(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ws;class xx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ws===void 0&&(Ws=Tc("canvas")),Ws.width=e.width,Ws.height=e.height;const i=Ws.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ws}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=br(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(br(t[n]/255)*255):t[n]=br(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yx=0;class Wd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=jr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(au(i[o].image)):s.push(au(i[o]))}else s=au(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function au(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mx=0;class Kn extends Vo{constructor(e=Kn.DEFAULT_IMAGE,t=Kn.DEFAULT_MAPPING,n=Ms,i=Ms,s=Qi,o=Ss,a=Hi,l=ir,c=Kn.DEFAULT_ANISOTROPY,u=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=jr(),this.name="",this.source=new Wd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==k0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wh:e.x=e.x-Math.floor(e.x);break;case Ms:e.x=e.x<0?0:1;break;case Th:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wh:e.y=e.y-Math.floor(e.y);break;case Ms:e.y=e.y<0?0:1;break;case Th:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=k0;Kn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,i=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(f+1)/2,T=(p+1)/2,w=(u+d)/4,b=(h+_)/4,C=(m+g)/4;return y>v&&y>T?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=b/n):v>T?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=C/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=b/s,i=C/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sx extends Vo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const i={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const s=new Kn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Wd(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ns extends Sx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class J0 extends Kn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vi,this.minFilter=Vi,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bx extends Kn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vi,this.minFilter=Vi,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class il{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==m){let g=1-a;const p=l*d+c*f+u*m+h*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const T=Math.sqrt(y),w=Math.atan2(T,p*x);g=Math.sin(g*w)/T,a=Math.sin(a*w)/T}const v=a*x;if(l=l*g+d*v,c=c*g+f*v,u=u*g+m*v,h=h*g+_*v,g===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+u*h+l*f-c*d,e[t+1]=l*m+u*d+c*h-a*f,e[t+2]=c*m+u*f+a*d-l*h,e[t+3]=u*m-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lu.copy(this).projectOnVector(e),this.sub(lu)}reflect(e){return this.sub(lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lu=new I,tp=new il;class rl{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ni):Ni.fromBufferAttribute(s,o),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xl.copy(n.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),yl.subVectors(this.max,Jo),qs.subVectors(e.a,Jo),Xs.subVectors(e.b,Jo),Ys.subVectors(e.c,Jo),Rr.subVectors(Xs,qs),Pr.subVectors(Ys,Xs),ss.subVectors(qs,Ys);let t=[0,-Rr.z,Rr.y,0,-Pr.z,Pr.y,0,-ss.z,ss.y,Rr.z,0,-Rr.x,Pr.z,0,-Pr.x,ss.z,0,-ss.x,-Rr.y,Rr.x,0,-Pr.y,Pr.x,0,-ss.y,ss.x,0];return!cu(t,qs,Xs,Ys,yl)||(t=[1,0,0,0,1,0,0,0,1],!cu(t,qs,Xs,Ys,yl))?!1:(Ml.crossVectors(Rr,Pr),t=[Ml.x,Ml.y,Ml.z],cu(t,qs,Xs,Ys,yl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sr=[new I,new I,new I,new I,new I,new I,new I,new I],Ni=new I,xl=new rl,qs=new I,Xs=new I,Ys=new I,Rr=new I,Pr=new I,ss=new I,Jo=new I,yl=new I,Ml=new I,os=new I;function cu(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){os.fromArray(r,s);const a=i.x*Math.abs(os.x)+i.y*Math.abs(os.y)+i.z*Math.abs(os.z),l=e.dot(os),c=t.dot(os),u=n.dot(os);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const wx=new rl,Ko=new I,uu=new I;class kc{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wx.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);const t=Ko.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ko,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(uu)),this.expandByPoint(Ko.copy(e.center).sub(uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const or=new I,hu=new I,Sl=new I,Dr=new I,du=new I,bl=new I,fu=new I;class qd{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(or.copy(this.origin).addScaledVector(this.direction,t),or.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hu.copy(e).add(t).multiplyScalar(.5),Sl.copy(t).sub(e).normalize(),Dr.copy(this.origin).sub(hu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Sl),a=Dr.dot(this.direction),l=-Dr.dot(Sl),c=Dr.lengthSq(),u=Math.abs(1-o*o);let h,d,f,m;if(u>0)if(h=o*l-a,d=o*a-l,m=s*u,h>=0)if(d>=-m)if(d<=m){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(hu).addScaledVector(Sl,d),f}intersectSphere(e,t){or.subVectors(e.center,this.origin);const n=or.dot(this.direction),i=or.dot(or)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,or)!==null}intersectTriangle(e,t,n,i,s){du.subVectors(t,e),bl.subVectors(n,e),fu.crossVectors(du,bl);let o=this.direction.dot(fu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dr.subVectors(this.origin,e);const l=a*this.direction.dot(bl.crossVectors(Dr,bl));if(l<0)return null;const c=a*this.direction.dot(du.cross(Dr));if(c<0||l+c>o)return null;const u=-a*Dr.dot(fu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,m,_,g){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,f,m,_,g)}set(e,t,n,i,s,o,a,l,c,u,h,d,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/$s.setFromMatrixColumn(e,0).length(),s=1/$s.setFromMatrixColumn(e,1).length(),o=1/$s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,m=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+m*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,m=c*u,_=c*h;t[0]=d+_*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,m=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,m=a*u,_=a*h;t[0]=l*u,t[4]=m*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+m,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tx,e,Ex)}lookAt(e,t,n){const i=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),Lr.crossVectors(n,ci),Lr.lengthSq()===0&&(Math.abs(n.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),Lr.crossVectors(n,ci)),Lr.normalize(),wl.crossVectors(ci,Lr),i[0]=Lr.x,i[4]=wl.x,i[8]=ci.x,i[1]=Lr.y,i[5]=wl.y,i[9]=ci.y,i[2]=Lr.z,i[6]=wl.z,i[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],y=n[7],v=n[11],T=n[15],w=i[0],b=i[4],C=i[8],S=i[12],M=i[1],P=i[5],U=i[9],H=i[13],N=i[2],G=i[6],W=i[10],$=i[14],z=i[3],oe=i[7],D=i[11],me=i[15];return s[0]=o*w+a*M+l*N+c*z,s[4]=o*b+a*P+l*G+c*oe,s[8]=o*C+a*U+l*W+c*D,s[12]=o*S+a*H+l*$+c*me,s[1]=u*w+h*M+d*N+f*z,s[5]=u*b+h*P+d*G+f*oe,s[9]=u*C+h*U+d*W+f*D,s[13]=u*S+h*H+d*$+f*me,s[2]=m*w+_*M+g*N+p*z,s[6]=m*b+_*P+g*G+p*oe,s[10]=m*C+_*U+g*W+p*D,s[14]=m*S+_*H+g*$+p*me,s[3]=x*w+y*M+v*N+T*z,s[7]=x*b+y*P+v*G+T*oe,s[11]=x*C+y*U+v*W+T*D,s[15]=x*S+y*H+v*$+T*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+g*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],x=h*g*c-_*d*c+_*l*f-a*g*f-h*l*p+a*d*p,y=m*d*c-u*g*c-m*l*f+o*g*f+u*l*p-o*d*p,v=u*_*c-m*h*c+m*a*f-o*_*f-u*a*p+o*h*p,T=m*h*l-u*_*l-m*a*d+o*_*d+u*a*g-o*h*g,w=t*x+n*y+i*v+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=x*b,e[1]=(_*d*s-h*g*s-_*i*f+n*g*f+h*i*p-n*d*p)*b,e[2]=(a*g*s-_*l*s+_*i*c-n*g*c-a*i*p+n*l*p)*b,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*b,e[4]=y*b,e[5]=(u*g*s-m*d*s+m*i*f-t*g*f-u*i*p+t*d*p)*b,e[6]=(m*l*s-o*g*s-m*i*c+t*g*c+o*i*p-t*l*p)*b,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*b,e[8]=v*b,e[9]=(m*h*s-u*_*s-m*n*f+t*_*f+u*n*p-t*h*p)*b,e[10]=(o*_*s-m*a*s+m*n*c-t*_*c-o*n*p+t*a*p)*b,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*b,e[12]=T*b,e[13]=(u*_*i-m*h*i+m*n*d-t*_*d-u*n*g+t*h*g)*b,e[14]=(m*a*i-o*_*i-m*n*l+t*_*l+o*n*g-t*a*g)*b,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,m=s*h,_=o*u,g=o*h,p=a*h,x=l*c,y=l*u,v=l*h,T=n.x,w=n.y,b=n.z;return i[0]=(1-(_+p))*T,i[1]=(f+v)*T,i[2]=(m-y)*T,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(d+p))*w,i[6]=(g+x)*w,i[7]=0,i[8]=(m+y)*b,i[9]=(g-x)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=$s.set(i[0],i[1],i[2]).length();const o=$s.set(i[4],i[5],i[6]).length(),a=$s.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Oi.copy(this);const c=1/s,u=1/o,h=1/a;return Oi.elements[0]*=c,Oi.elements[1]*=c,Oi.elements[2]*=c,Oi.elements[4]*=u,Oi.elements[5]*=u,Oi.elements[6]*=u,Oi.elements[8]*=h,Oi.elements[9]*=h,Oi.elements[10]*=h,t.setFromRotationMatrix(Oi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=xr){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,m;if(a===xr)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===wc)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=xr){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),d=(t+e)*c,f=(n+i)*u;let m,_;if(a===xr)m=(o+s)*h,_=-2*h;else if(a===wc)m=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $s=new I,Oi=new Ut,Tx=new I(0,0,0),Ex=new I(1,1,1),Lr=new I,wl=new I,ci=new I,np=new Ut,ip=new il;class rr{constructor(e=0,t=0,n=0,i=rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return np.makeRotationFromQuaternion(e),this.setFromRotationMatrix(np,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ip.setFromEuler(this),this.setFromQuaternion(ip,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rr.DEFAULT_ORDER="XYZ";class Xd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ax=0;const rp=new I,js=new il,ar=new Ut,Tl=new I,Zo=new I,Cx=new I,Rx=new il,sp=new I(1,0,0),op=new I(0,1,0),ap=new I(0,0,1),lp={type:"added"},Px={type:"removed"},Js={type:"childadded",child:null},pu={type:"childremoved",child:null};class Mn extends Vo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new I,t=new rr,n=new il,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ut},normalMatrix:{value:new ft}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(sp,e)}rotateY(e){return this.rotateOnAxis(op,e)}rotateZ(e){return this.rotateOnAxis(ap,e)}translateOnAxis(e,t){return rp.copy(e).applyQuaternion(this.quaternion),this.position.add(rp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sp,e)}translateY(e){return this.translateOnAxis(op,e)}translateZ(e){return this.translateOnAxis(ap,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ar.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Tl.copy(e):Tl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ar.lookAt(Zo,Tl,this.up):ar.lookAt(Tl,Zo,this.up),this.quaternion.setFromRotationMatrix(ar),i&&(ar.extractRotation(i.matrixWorld),js.setFromRotationMatrix(ar),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lp),Js.child=e,this.dispatchEvent(Js),Js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Px),pu.child=e,this.dispatchEvent(pu),pu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lp),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,Cx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,Rx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Mn.DEFAULT_UP=new I(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ki=new I,lr=new I,mu=new I,cr=new I,Ks=new I,Zs=new I,cp=new I,gu=new I,_u=new I,vu=new I,xu=new Dt,yu=new Dt,Mu=new Dt;class Pi{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ki.subVectors(e,t),i.cross(ki);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ki.subVectors(i,t),lr.subVectors(n,t),mu.subVectors(e,t);const o=ki.dot(ki),a=ki.dot(lr),l=ki.dot(mu),c=lr.dot(lr),u=lr.dot(mu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,m=(o*u-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,cr)===null?!1:cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,cr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,cr.x),l.addScaledVector(o,cr.y),l.addScaledVector(a,cr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return xu.setScalar(0),yu.setScalar(0),Mu.setScalar(0),xu.fromBufferAttribute(e,t),yu.fromBufferAttribute(e,n),Mu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(xu,s.x),o.addScaledVector(yu,s.y),o.addScaledVector(Mu,s.z),o}static isFrontFacing(e,t,n,i){return ki.subVectors(n,t),lr.subVectors(e,t),ki.cross(lr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),lr.subVectors(this.a,this.b),ki.cross(lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Pi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ks.subVectors(i,n),Zs.subVectors(s,n),gu.subVectors(e,n);const l=Ks.dot(gu),c=Zs.dot(gu);if(l<=0&&c<=0)return t.copy(n);_u.subVectors(e,i);const u=Ks.dot(_u),h=Zs.dot(_u);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ks,o);vu.subVectors(e,s);const f=Ks.dot(vu),m=Zs.dot(vu);if(m>=0&&f<=m)return t.copy(s);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Zs,a);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return cp.subVectors(s,i),a=(h-u)/(h-u+(f-m)),t.copy(i).addScaledVector(cp,a);const p=1/(g+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Ks,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const K0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},El={h:0,s:0,l:0};function Su(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=bt.workingColorSpace){if(e=fx(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Su(o,s,e+1/3),this.g=Su(o,s,e),this.b=Su(o,s,e-1/3)}return bt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ai){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ai){const n=K0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}copyLinearToSRGB(e){return this.r=To(e.r),this.g=To(e.g),this.b=To(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ai){return bt.fromWorkingColorSpace(Rn.copy(this),e),Math.round(vt(Rn.r*255,0,255))*65536+Math.round(vt(Rn.g*255,0,255))*256+Math.round(vt(Rn.b*255,0,255))}getHexString(e=Ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(Rn.copy(this),t);const n=Rn.r,i=Rn.g,s=Rn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=Ai){bt.fromWorkingColorSpace(Rn.copy(this),e);const t=Rn.r,n=Rn.g,i=Rn.b;return e!==Ai?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(El);const n=su(Ir.h,El.h,t),i=su(Ir.s,El.s,t),s=su(Ir.l,El.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Ze;Ze.NAMES=K0;let Dx=0;class ks extends Vo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=wo,this.side=Qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=ph,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=No,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wo&&(n.blending=this.blending),this.side!==Qr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fh&&(n.blendSrc=this.blendSrc),this.blendDst!==ph&&(n.blendDst=this.blendDst),this.blendEquation!==ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==No&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ji extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rr,this.combine=O0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new I,Al=new We;let Lx=0;class Bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zh,this.updateRanges=[],this.gpuType=vr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Al.fromBufferAttribute(this,t),Al.applyMatrix3(e),this.setXY(t,Al.x,Al.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zh&&(e.usage=this.usage),e}}class Z0 extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Q0 extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $t extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ix=0;const bi=new Ut,bu=new Mn,Qs=new I,ui=new rl,Qo=new rl,mn=new I;class cn extends Vo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(j0(e)?Q0:Z0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ft().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,t,n){return bi.makeTranslation(e,t,n),this.applyMatrix4(bi),this}scale(e,t,n){return bi.makeScale(e,t,n),this.applyMatrix4(bi),this}lookAt(e){return bu.lookAt(e),bu.updateMatrix(),this.applyMatrix4(bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ui.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Qo.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(ui.min,Qo.min),ui.expandByPoint(mn),mn.addVectors(ui.max,Qo.max),ui.expandByPoint(mn)):(ui.expandByPoint(Qo.min),ui.expandByPoint(Qo.max))}ui.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)mn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(mn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mn.fromBufferAttribute(a,c),l&&(Qs.fromBufferAttribute(e,c),mn.add(Qs)),i=Math.max(i,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new I,l[C]=new I;const c=new I,u=new I,h=new I,d=new We,f=new We,m=new We,_=new I,g=new I;function p(C,S,M){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,S),m.fromBufferAttribute(s,M),u.sub(c),h.sub(c),f.sub(d),m.sub(d);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(P),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(P),a[C].add(_),a[S].add(_),a[M].add(_),l[C].add(g),l[S].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,S=x.length;C<S;++C){const M=x[C],P=M.start,U=M.count;for(let H=P,N=P+U;H<N;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new I,v=new I,T=new I,w=new I;function b(C){T.fromBufferAttribute(i,C),w.copy(T);const S=a[C];y.copy(S),y.sub(T.multiplyScalar(T.dot(S))).normalize(),v.crossVectors(w,S);const P=v.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,S=x.length;C<S;++C){const M=x[C],P=M.start,U=M.count;for(let H=P,N=P+U;H<N;H+=3)b(e.getX(H+0)),b(e.getX(H+1)),b(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new Bt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const up=new Ut,as=new qd,Cl=new kc,hp=new I,Rl=new I,Pl=new I,Dl=new I,wu=new I,Ll=new I,dp=new I,Il=new I;class Vt extends Mn{constructor(e=new cn,t=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Ll.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(wu.fromBufferAttribute(h,e),o?Ll.addScaledVector(wu,u):Ll.addScaledVector(wu.sub(t),u))}t.add(Ll)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cl.copy(n.boundingSphere),Cl.applyMatrix4(s),as.copy(e.ray).recast(e.near),!(Cl.containsPoint(as.origin)===!1&&(as.intersectSphere(Cl,hp)===null||as.origin.distanceToSquared(hp)>(e.far-e.near)**2))&&(up.copy(s).invert(),as.copy(e.ray).applyMatrix4(up),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,T=y;v<T;v+=3){const w=a.getX(v),b=a.getX(v+1),C=a.getX(v+2);i=Fl(this,p,e,n,c,u,h,w,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);i=Fl(this,o,e,n,c,u,h,x,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,T=y;v<T;v+=3){const w=v,b=v+1,C=v+2;i=Fl(this,p,e,n,c,u,h,w,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=g,y=g+1,v=g+2;i=Fl(this,o,e,n,c,u,h,x,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Fx(r,e,t,n,i,s,o,a){let l;if(e.side===oi?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Qr,a),l===null)return null;Il.copy(a),Il.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Il);return c<t.near||c>t.far?null:{distance:c,point:Il.clone(),object:r}}function Fl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Rl),r.getVertexPosition(l,Pl),r.getVertexPosition(c,Dl);const u=Fx(r,e,t,n,Rl,Pl,Dl,dp);if(u){const h=new I;Pi.getBarycoord(dp,Rl,Pl,Dl,h),i&&(u.uv=Pi.getInterpolatedAttribute(i,a,l,c,h,new We)),s&&(u.uv1=Pi.getInterpolatedAttribute(s,a,l,c,h,new We)),o&&(u.normal=Pi.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};Pi.getNormal(Rl,Pl,Dl,d.normal),u.face=d,u.barycoord=h}return u}class Fn extends cn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(h,2));function m(_,g,p,x,y,v,T,w,b,C,S){const M=v/b,P=T/C,U=v/2,H=T/2,N=w/2,G=b+1,W=C+1;let $=0,z=0;const oe=new I;for(let D=0;D<W;D++){const me=D*P-H;for(let Le=0;Le<G;Le++){const Oe=Le*M-U;oe[_]=Oe*x,oe[g]=me*y,oe[p]=N,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[g]=0,oe[p]=w>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(Le/b),h.push(1-D/C),$+=1}}for(let D=0;D<C;D++)for(let me=0;me<b;me++){const Le=d+me+G*D,Oe=d+me+G*(D+1),Y=d+(me+1)+G*(D+1),ae=d+(me+1)+G*D;l.push(Le,Oe,ae),l.push(Oe,Y,ae),z+=6}a.addGroup(f,z,S),f+=z,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qn(r){const e={};for(let t=0;t<r.length;t++){const n=zo(r[t]);for(const i in n)e[i]=n[i]}return e}function Ux(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function eg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const Nx={clone:zo,merge:qn};var Ox=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ox,this.fragmentShader=kx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zo(e.uniforms),this.uniformsGroups=Ux(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class tg extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=xr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fr=new I,fp=new We,pp=new We;class ei extends tg{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ru*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qh*2*Math.atan(Math.tan(ru*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z),Fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z)}getViewSize(e,t){return this.getViewBounds(e,fp,pp),t.subVectors(pp,fp)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ru*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const eo=-90,to=1;class Bx extends Mn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ei(eo,to,e,t);i.layers=this.layers,this.add(i);const s=new ei(eo,to,e,t);s.layers=this.layers,this.add(s);const o=new ei(eo,to,e,t);o.layers=this.layers,this.add(o);const a=new ei(eo,to,e,t);a.layers=this.layers,this.add(a);const l=new ei(eo,to,e,t);l.layers=this.layers,this.add(l);const c=new ei(eo,to,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===xr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ng extends Kn{constructor(e=[],t=Oo,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zx extends Ns{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ng(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Fn(5,5,5),s=new Tn({name:"CubemapFromEquirect",uniforms:zo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:oi,blending:Yr});s.uniforms.tEquirect.value=t;const o=new Vt(i,s),a=t.minFilter;return t.minFilter===Ss&&(t.minFilter=Qi),new Bx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class Gr extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hx={type:"move"};class Tu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ig extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rr,this.environmentIntensity=1,this.environmentRotation=new rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Vx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zh,this.updateRanges=[],this.version=0,this.uuid=jr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vn=new I;class Ec{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.applyMatrix4(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.applyNormalMatrix(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.transformDirection(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ji(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ji(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ji(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ji(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ec(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ed extends ks{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let no;const ea=new I,io=new I,ro=new I,so=new We,ta=new We,rg=new Ut,Ul=new I,na=new I,Nl=new I,mp=new We,Eu=new We,gp=new We;class _p extends Mn{constructor(e=new ed){if(super(),this.isSprite=!0,this.type="Sprite",no===void 0){no=new cn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Vx(t,5);no.setIndex([0,1,2,0,2,3]),no.setAttribute("position",new Ec(n,3,0,!1)),no.setAttribute("uv",new Ec(n,2,3,!1))}this.geometry=no,this.material=e,this.center=new We(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),io.setFromMatrixScale(this.matrixWorld),rg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ro.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&io.multiplyScalar(-ro.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Ol(Ul.set(-.5,-.5,0),ro,o,io,i,s),Ol(na.set(.5,-.5,0),ro,o,io,i,s),Ol(Nl.set(.5,.5,0),ro,o,io,i,s),mp.set(0,0),Eu.set(1,0),gp.set(1,1);let a=e.ray.intersectTriangle(Ul,na,Nl,!1,ea);if(a===null&&(Ol(na.set(-.5,.5,0),ro,o,io,i,s),Eu.set(0,1),a=e.ray.intersectTriangle(Ul,Nl,na,!1,ea),a===null))return;const l=e.ray.origin.distanceTo(ea);l<e.near||l>e.far||t.push({distance:l,point:ea.clone(),uv:Pi.getInterpolation(ea,Ul,na,Nl,mp,Eu,gp,new We),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ol(r,e,t,n,i,s){so.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(ta.x=s*so.x-i*so.y,ta.y=i*so.x+s*so.y):ta.copy(so),r.copy(e),r.x+=ta.x,r.y+=ta.y,r.applyMatrix4(rg)}const Au=new I,Gx=new I,Wx=new ft;class Nr{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Au.subVectors(n,t).cross(Gx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Au),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wx.getNormalMatrix(e),i=this.coplanarPoint(Au).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new kc,kl=new I;class Yd{constructor(e=new Nr,t=new Nr,n=new Nr,i=new Nr,s=new Nr,o=new Nr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xr){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],m=i[9],_=i[10],g=i[11],p=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,g-f,v-p).normalize(),n[1].setComponents(l+s,d+c,g+f,v+p).normalize(),n[2].setComponents(l+o,d+u,g+m,v+x).normalize(),n[3].setComponents(l-o,d-u,g-m,v-x).normalize(),n[4].setComponents(l-a,d-h,g-_,v-y).normalize(),t===xr)n[5].setComponents(l+a,d+h,g+_,v+y).normalize();else if(t===wc)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(kl.x=i.normal.x>0?e.max.x:e.min.x,kl.y=i.normal.y>0?e.max.y:e.min.y,kl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class td extends ks{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vp=new Ut,nd=new qd,Bl=new kc,zl=new I;class Ia extends Mn{constructor(e=new cn,t=new td){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bl.copy(n.boundingSphere),Bl.applyMatrix4(i),Bl.radius+=s,e.ray.intersectsSphere(Bl)===!1)return;vp.copy(i).invert(),nd.copy(e.ray).applyMatrix4(vp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const g=c.getX(m);zl.fromBufferAttribute(h,g),xp(zl,g,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,_=f;m<_;m++)zl.fromBufferAttribute(h,m),xp(zl,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function xp(r,e,t,n,i,s,o){const a=nd.distanceSqToPoint(r);if(a<t){const l=new I;nd.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class sg extends Kn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class og extends Kn{constructor(e,t,n=Us,i,s,o,a=Vi,l=Vi,c,u=ja){if(u!==ja&&u!==Ja)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $d extends cn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(s.slice(),3)),this.setAttribute("uv",new $t(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new I,v=new I,T=new I;for(let w=0;w<t.length;w+=3)f(t[w+0],y),f(t[w+1],v),f(t[w+2],T),l(y,v,T,x)}function l(x,y,v,T){const w=T+1,b=[];for(let C=0;C<=w;C++){b[C]=[];const S=x.clone().lerp(v,C/w),M=y.clone().lerp(v,C/w),P=w-C;for(let U=0;U<=P;U++)U===0&&C===w?b[C][U]=S:b[C][U]=S.clone().lerp(M,U/P)}for(let C=0;C<w;C++)for(let S=0;S<2*(w-C)-1;S++){const M=Math.floor(S/2);S%2===0?(d(b[C][M+1]),d(b[C+1][M]),d(b[C][M])):(d(b[C][M+1]),d(b[C+1][M+1]),d(b[C+1][M]))}}function c(x){const y=new I;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(x),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function u(){const x=new I;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];const v=g(x)/2/Math.PI+.5,T=p(x)/Math.PI+.5;o.push(v,1-T)}m(),h()}function h(){for(let x=0;x<o.length;x+=6){const y=o[x+0],v=o[x+2],T=o[x+4],w=Math.max(y,v,T),b=Math.min(y,v,T);w>.9&&b<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),T<.2&&(o[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,y){const v=x*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function m(){const x=new I,y=new I,v=new I,T=new I,w=new We,b=new We,C=new We;for(let S=0,M=0;S<s.length;S+=9,M+=6){x.set(s[S+0],s[S+1],s[S+2]),y.set(s[S+3],s[S+4],s[S+5]),v.set(s[S+6],s[S+7],s[S+8]),w.set(o[M+0],o[M+1]),b.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),T.copy(x).add(y).add(v).divideScalar(3);const P=g(T);_(w,M+0,x,P),_(b,M+2,y,P),_(C,M+4,v,P)}}function _(x,y,v,T){T<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=T/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $d(e.vertices,e.indices,e.radius,e.details)}}class Ar{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new We:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new I,i=[],s=[],o=[],a=new I,l=new Ut;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(vt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(vt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ag extends Ar{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new We){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class qx extends ag{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function jd(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Hl=new I,Cu=new jd,Ru=new jd,Pu=new jd;class Xx extends Ar{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Hl.subVectors(i[0],i[1]).add(i[0]),c=Hl);const h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Hl.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Hl),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Cu.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,_,g),Ru.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,_,g),Pu.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(Cu.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ru.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Pu.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Cu.calc(l),Ru.calc(l),Pu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function yp(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function Yx(r,e){const t=1-r;return t*t*e}function $x(r,e){return 2*(1-r)*r*e}function jx(r,e){return r*r*e}function Fa(r,e,t,n){return Yx(r,e)+$x(r,t)+jx(r,n)}function Jx(r,e){const t=1-r;return t*t*t*e}function Kx(r,e){const t=1-r;return 3*t*t*r*e}function Zx(r,e){return 3*(1-r)*r*r*e}function Qx(r,e){return r*r*r*e}function Ua(r,e,t,n,i){return Jx(r,e)+Kx(r,t)+Zx(r,n)+Qx(r,i)}class ey extends Ar{constructor(e=new We,t=new We,n=new We,i=new We){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new We){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ua(e,i.x,s.x,o.x,a.x),Ua(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lg extends Ar{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ua(e,i.x,s.x,o.x,a.x),Ua(e,i.y,s.y,o.y,a.y),Ua(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ty extends Ar{constructor(e=new We,t=new We){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new We){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new We){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ny extends Ar{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iy extends Ar{constructor(e=new We,t=new We,n=new We){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new We){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Fa(e,i.x,s.x,o.x),Fa(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cg extends Ar{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Fa(e,i.x,s.x,o.x),Fa(e,i.y,s.y,o.y),Fa(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ry extends Ar{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new We){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(yp(a,l.x,c.x,u.x,h.x),yp(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new We().fromArray(i))}return this}}var sy=Object.freeze({__proto__:null,ArcCurve:qx,CatmullRomCurve3:Xx,CubicBezierCurve:ey,CubicBezierCurve3:lg,EllipseCurve:ag,LineCurve:ty,LineCurve3:ny,QuadraticBezierCurve:iy,QuadraticBezierCurve3:cg,SplineCurve:ry});class Ac extends $d{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ac(e.radius,e.detail)}}class tr extends cn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const x=p*d-o;for(let y=0;y<c;y++){const v=y*h-s;m.push(v,-x,0),_.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const y=x+c*p,v=x+c*(p+1),T=x+1+c*(p+1),w=x+1+c*p;f.push(y,v,w),f.push(v,T,w)}this.setIndex(f),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jd extends cn{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/i,f=new I,m=new We;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const p=s+g/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let _=0;_<i;_++){const g=_*(n+1);for(let p=0;p<n;p++){const x=p+g,y=x,v=x+n+1,T=x+n+2,w=x+1;a.push(y,v,w),a.push(v,T,w)}}this.setIndex(a),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ho extends cn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new I,d=new I,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){const w=T/t;h.x=-e*Math.cos(i+w*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(i+w*s)*Math.sin(o+y*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(w+v,1-y),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const y=u[p][x+1],v=u[p][x],T=u[p+1][x],w=u[p+1][x+1];(p!==0||o>0)&&f.push(y,v,w),(p!==n-1||l<Math.PI)&&f.push(v,T,w)}this.setIndex(f),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cc extends cn{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new I,h=new I,d=new I;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const _=m/i*s,g=f/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(_),h.y=(e+t*Math.cos(g))*Math.sin(_),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const _=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,x=(i+1)*f+m;o.push(_,g,x),o.push(g,p,x)}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Rc extends cn{constructor(e=new cg(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,c=new We;let u=new I;const h=[],d=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(f,2));function _(){for(let y=0;y<t;y++)g(y);g(s===!1?t:0),x(),p()}function g(y){u=e.getPointAt(y/t,u);const v=o.normals[y],T=o.binormals[y];for(let w=0;w<=i;w++){const b=w/i*Math.PI*2,C=Math.sin(b),S=-Math.cos(b);l.x=S*v.x+C*T.x,l.y=S*v.y+C*T.y,l.z=S*v.z+C*T.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let v=1;v<=i;v++){const T=(i+1)*(y-1)+(v-1),w=(i+1)*y+(v-1),b=(i+1)*y+v,C=(i+1)*(y-1)+v;m.push(T,w,C),m.push(w,b,C)}}function x(){for(let y=0;y<=t;y++)for(let v=0;v<=i;v++)c.x=y/t,c.y=v/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Rc(new sy[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class ug extends ks{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Y0,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oy extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ix,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ay extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kd extends Mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Du=new Ut,Mp=new I,Sp=new I;class hg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=ir,this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yd,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Mp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mp),Sp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sp),t.updateMatrixWorld(),Du.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const bp=new Ut,ia=new I,Lu=new I;class ly extends hg{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ia.setFromMatrixPosition(e.matrixWorld),n.position.copy(ia),Lu.copy(n.position),Lu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Lu),n.updateMatrixWorld(),i.makeTranslation(-ia.x,-ia.y,-ia.z),bp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bp)}}class wp extends Kd{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ly}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dg extends tg{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cy extends hg{constructor(){super(new dg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uy extends Kd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new cy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hy extends Kd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class dy extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Tp=new Ut;class fy{constructor(e,t,n=0,i=1/0){this.ray=new qd(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Xd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Tp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tp),this}intersectObject(e,t=!0,n=[]){return id(e,this,n,t),n.sort(Ep),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)id(e[i],this,n,t);return n.sort(Ep),n}}function Ep(r,e){return r.distance-e.distance}function id(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)id(s[o],e,t,!0)}}function Ap(r,e,t,n){const i=py(n);switch(t){case V0:return r*e;case W0:return r*e/i.components*i.byteLength;case Hd:return r*e/i.components*i.byteLength;case q0:return r*e*2/i.components*i.byteLength;case Vd:return r*e*2/i.components*i.byteLength;case G0:return r*e*3/i.components*i.byteLength;case Hi:return r*e*4/i.components*i.byteLength;case Gd:return r*e*4/i.components*i.byteLength;case rc:case sc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case oc:case ac:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ah:case Rh:return Math.max(r,16)*Math.max(e,8)/4;case Eh:case Ch:return Math.max(r,8)*Math.max(e,8)/2;case Ph:case Dh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Lh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case kh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case zh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Hh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case qh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case lc:case Yh:case $h:return Math.ceil(r/4)*Math.ceil(e/4)*16;case X0:case jh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Jh:case Kh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function py(r){switch(r){case ir:case B0:return{byteLength:1,components:1};case Ya:case z0:case nl:return{byteLength:2,components:1};case Bd:case zd:return{byteLength:2,components:4};case Us:case kd:case vr:return{byteLength:4,components:1};case H0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Od);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fg(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function my(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],_=h[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const _=h[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var gy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_y=`#ifdef USE_ALPHAHASH
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
#endif`,vy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,My=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sy=`#ifdef USE_AOMAP
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
#endif`,by=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wy=`#ifdef USE_BATCHING
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
#endif`,Ty=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ay=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ry=`#ifdef USE_IRIDESCENCE
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
#endif`,Py=`#ifdef USE_BUMPMAP
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
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Oy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ky=`#if defined( USE_COLOR_ALPHA )
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
#endif`,By=`#define PI 3.141592653589793
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
} // validated`,zy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hy=`vec3 transformedNormal = objectNormal;
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
#endif`,Vy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$y=`#ifdef USE_ENVMAP
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
#endif`,jy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jy=`#ifdef USE_ENVMAP
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
#endif`,Ky=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zy=`#ifdef USE_ENVMAP
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
#endif`,Qy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i1=`#ifdef USE_GRADIENTMAP
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
}`,r1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a1=`uniform bool receiveShadow;
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
#endif`,l1=`#ifdef USE_ENVMAP
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
#endif`,c1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f1=`PhysicalMaterial material;
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
#endif`,p1=`struct PhysicalMaterial {
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
}`,m1=`
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
#endif`,g1=`#if defined( RE_IndirectDiffuse )
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
#endif`,_1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T1=`#if defined( USE_POINTS_UV )
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
#endif`,E1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D1=`#ifdef USE_MORPHTARGETS
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
#endif`,L1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,F1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k1=`#ifdef USE_NORMALMAP
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
#endif`,B1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,q1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eM=`float getShadowMask() {
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
}`,tM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nM=`#ifdef USE_SKINNING
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
#endif`,iM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rM=`#ifdef USE_SKINNING
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
#endif`,sM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cM=`#ifdef USE_TRANSMISSION
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
#endif`,uM=`#ifdef USE_TRANSMISSION
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
#endif`,hM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gM=`uniform sampler2D t2D;
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
}`,_M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MM=`#include <common>
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
}`,SM=`#if DEPTH_PACKING == 3200
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
}`,bM=`#define DISTANCE
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
}`,wM=`#define DISTANCE
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
}`,TM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AM=`uniform float scale;
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
}`,CM=`uniform vec3 diffuse;
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
}`,RM=`#include <common>
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
}`,PM=`uniform vec3 diffuse;
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
}`,DM=`#define LAMBERT
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
}`,LM=`#define LAMBERT
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
}`,IM=`#define MATCAP
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
}`,FM=`#define MATCAP
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
}`,UM=`#define NORMAL
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
}`,NM=`#define NORMAL
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
}`,OM=`#define PHONG
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
}`,kM=`#define PHONG
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
}`,BM=`#define STANDARD
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
}`,zM=`#define STANDARD
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
}`,HM=`#define TOON
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
}`,VM=`#define TOON
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
}`,GM=`uniform float size;
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
}`,WM=`uniform vec3 diffuse;
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
}`,qM=`#include <common>
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
}`,XM=`uniform vec3 color;
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
}`,YM=`uniform float rotation;
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
}`,$M=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:gy,alphahash_pars_fragment:_y,alphamap_fragment:vy,alphamap_pars_fragment:xy,alphatest_fragment:yy,alphatest_pars_fragment:My,aomap_fragment:Sy,aomap_pars_fragment:by,batching_pars_vertex:wy,batching_vertex:Ty,begin_vertex:Ey,beginnormal_vertex:Ay,bsdfs:Cy,iridescence_fragment:Ry,bumpmap_pars_fragment:Py,clipping_planes_fragment:Dy,clipping_planes_pars_fragment:Ly,clipping_planes_pars_vertex:Iy,clipping_planes_vertex:Fy,color_fragment:Uy,color_pars_fragment:Ny,color_pars_vertex:Oy,color_vertex:ky,common:By,cube_uv_reflection_fragment:zy,defaultnormal_vertex:Hy,displacementmap_pars_vertex:Vy,displacementmap_vertex:Gy,emissivemap_fragment:Wy,emissivemap_pars_fragment:qy,colorspace_fragment:Xy,colorspace_pars_fragment:Yy,envmap_fragment:$y,envmap_common_pars_fragment:jy,envmap_pars_fragment:Jy,envmap_pars_vertex:Ky,envmap_physical_pars_fragment:l1,envmap_vertex:Zy,fog_vertex:Qy,fog_pars_vertex:e1,fog_fragment:t1,fog_pars_fragment:n1,gradientmap_pars_fragment:i1,lightmap_pars_fragment:r1,lights_lambert_fragment:s1,lights_lambert_pars_fragment:o1,lights_pars_begin:a1,lights_toon_fragment:c1,lights_toon_pars_fragment:u1,lights_phong_fragment:h1,lights_phong_pars_fragment:d1,lights_physical_fragment:f1,lights_physical_pars_fragment:p1,lights_fragment_begin:m1,lights_fragment_maps:g1,lights_fragment_end:_1,logdepthbuf_fragment:v1,logdepthbuf_pars_fragment:x1,logdepthbuf_pars_vertex:y1,logdepthbuf_vertex:M1,map_fragment:S1,map_pars_fragment:b1,map_particle_fragment:w1,map_particle_pars_fragment:T1,metalnessmap_fragment:E1,metalnessmap_pars_fragment:A1,morphinstance_vertex:C1,morphcolor_vertex:R1,morphnormal_vertex:P1,morphtarget_pars_vertex:D1,morphtarget_vertex:L1,normal_fragment_begin:I1,normal_fragment_maps:F1,normal_pars_fragment:U1,normal_pars_vertex:N1,normal_vertex:O1,normalmap_pars_fragment:k1,clearcoat_normal_fragment_begin:B1,clearcoat_normal_fragment_maps:z1,clearcoat_pars_fragment:H1,iridescence_pars_fragment:V1,opaque_fragment:G1,packing:W1,premultiplied_alpha_fragment:q1,project_vertex:X1,dithering_fragment:Y1,dithering_pars_fragment:$1,roughnessmap_fragment:j1,roughnessmap_pars_fragment:J1,shadowmap_pars_fragment:K1,shadowmap_pars_vertex:Z1,shadowmap_vertex:Q1,shadowmask_pars_fragment:eM,skinbase_vertex:tM,skinning_pars_vertex:nM,skinning_vertex:iM,skinnormal_vertex:rM,specularmap_fragment:sM,specularmap_pars_fragment:oM,tonemapping_fragment:aM,tonemapping_pars_fragment:lM,transmission_fragment:cM,transmission_pars_fragment:uM,uv_pars_fragment:hM,uv_pars_vertex:dM,uv_vertex:fM,worldpos_vertex:pM,background_vert:mM,background_frag:gM,backgroundCube_vert:_M,backgroundCube_frag:vM,cube_vert:xM,cube_frag:yM,depth_vert:MM,depth_frag:SM,distanceRGBA_vert:bM,distanceRGBA_frag:wM,equirect_vert:TM,equirect_frag:EM,linedashed_vert:AM,linedashed_frag:CM,meshbasic_vert:RM,meshbasic_frag:PM,meshlambert_vert:DM,meshlambert_frag:LM,meshmatcap_vert:IM,meshmatcap_frag:FM,meshnormal_vert:UM,meshnormal_frag:NM,meshphong_vert:OM,meshphong_frag:kM,meshphysical_vert:BM,meshphysical_frag:zM,meshtoon_vert:HM,meshtoon_frag:VM,points_vert:GM,points_frag:WM,shadow_vert:qM,shadow_frag:XM,sprite_vert:YM,sprite_frag:$M},Ae={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Xi={basic:{uniforms:qn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:qn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:qn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:qn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:qn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:qn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:qn([Ae.points,Ae.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:qn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:qn([Ae.common,Ae.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:qn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:qn([Ae.sprite,Ae.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:qn([Ae.common,Ae.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:qn([Ae.lights,Ae.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Xi.physical={uniforms:qn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Vl={r:0,b:0,g:0},cs=new rr,jM=new Ut;function JM(r,e,t,n,i,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function m(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const T=m(y);T===null?p(a,l):T&&T.isColor&&(p(T,1),v=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,v){const T=m(v);T&&(T.isCubeTexture||T.mapping===Oc)?(u===void 0&&(u=new Vt(new Fn(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:zo(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),cs.copy(v.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jM.makeRotationFromEuler(cs)),u.material.toneMapped=bt.getTransfer(T.colorSpace)!==Ct,(h!==T||d!==T.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Vt(new tr(2,2),new Tn({name:"BackgroundMaterial",uniforms:zo(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:Qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=bt.getTransfer(T.colorSpace)!==Ct,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(Vl,eg(r)),n.buffers.color.setClear(Vl.r,Vl.g,Vl.b,v,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:g,dispose:x}}function KM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(M,P,U,H,N){let G=!1;const W=h(H,U,P);s!==W&&(s=W,c(s.object)),G=f(M,H,U,N),G&&m(M,H,U,N),N!==null&&e.update(N,r.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(M,P,U,H),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function u(M){return r.deleteVertexArray(M)}function h(M,P,U){const H=U.wireframe===!0;let N=n[M.id];N===void 0&&(N={},n[M.id]=N);let G=N[P.id];G===void 0&&(G={},N[P.id]=G);let W=G[H];return W===void 0&&(W=d(l()),G[H]=W),W}function d(M){const P=[],U=[],H=[];for(let N=0;N<t;N++)P[N]=0,U[N]=0,H[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:H,object:M,attributes:{},index:null}}function f(M,P,U,H){const N=s.attributes,G=P.attributes;let W=0;const $=U.getAttributes();for(const z in $)if($[z].location>=0){const D=N[z];let me=G[z];if(me===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),D===void 0||D.attribute!==me||me&&D.data!==me.data)return!0;W++}return s.attributesNum!==W||s.index!==H}function m(M,P,U,H){const N={},G=P.attributes;let W=0;const $=U.getAttributes();for(const z in $)if($[z].location>=0){let D=G[z];D===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(D=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(D=M.instanceColor));const me={};me.attribute=D,D&&D.data&&(me.data=D.data),N[z]=me,W++}s.attributes=N,s.attributesNum=W,s.index=H}function _(){const M=s.newAttributes;for(let P=0,U=M.length;P<U;P++)M[P]=0}function g(M){p(M,0)}function p(M,P){const U=s.newAttributes,H=s.enabledAttributes,N=s.attributeDivisors;U[M]=1,H[M]===0&&(r.enableVertexAttribArray(M),H[M]=1),N[M]!==P&&(r.vertexAttribDivisor(M,P),N[M]=P)}function x(){const M=s.newAttributes,P=s.enabledAttributes;for(let U=0,H=P.length;U<H;U++)P[U]!==M[U]&&(r.disableVertexAttribArray(U),P[U]=0)}function y(M,P,U,H,N,G,W){W===!0?r.vertexAttribIPointer(M,P,U,N,G):r.vertexAttribPointer(M,P,U,H,N,G)}function v(M,P,U,H){_();const N=H.attributes,G=U.getAttributes(),W=P.defaultAttributeValues;for(const $ in G){const z=G[$];if(z.location>=0){let oe=N[$];if(oe===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){const D=oe.normalized,me=oe.itemSize,Le=e.get(oe);if(Le===void 0)continue;const Oe=Le.buffer,Y=Le.type,ae=Le.bytesPerElement,ce=Y===r.INT||Y===r.UNSIGNED_INT||oe.gpuType===kd;if(oe.isInterleavedBufferAttribute){const re=oe.data,_e=re.stride,Ve=oe.offset;if(re.isInstancedInterleavedBuffer){for(let Re=0;Re<z.locationSize;Re++)p(z.location+Re,re.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Re=0;Re<z.locationSize;Re++)g(z.location+Re);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let Re=0;Re<z.locationSize;Re++)y(z.location+Re,me/z.locationSize,Y,D,_e*ae,(Ve+me/z.locationSize*Re)*ae,ce)}else{if(oe.isInstancedBufferAttribute){for(let re=0;re<z.locationSize;re++)p(z.location+re,oe.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let re=0;re<z.locationSize;re++)g(z.location+re);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let re=0;re<z.locationSize;re++)y(z.location+re,me/z.locationSize,Y,D,me*ae,me/z.locationSize*re*ae,ce)}}else if(W!==void 0){const D=W[$];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(z.location,D);break;case 3:r.vertexAttrib3fv(z.location,D);break;case 4:r.vertexAttrib4fv(z.location,D);break;default:r.vertexAttrib1fv(z.location,D)}}}}x()}function T(){C();for(const M in n){const P=n[M];for(const U in P){const H=P[U];for(const N in H)u(H[N].object),delete H[N];delete P[U]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const U in P){const H=P[U];for(const N in H)u(H[N].object),delete H[N];delete P[U]}delete n[M.id]}function b(M){for(const P in n){const U=n[P];if(U[M.id]===void 0)continue;const H=U[M.id];for(const N in H)u(H[N].object),delete H[N];delete U[M.id]}}function C(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function ZM(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*d[_];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function QM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==Hi&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const C=b===nl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==ir&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==vr&&!C)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:T,maxSamples:w}}function eS(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Nr,a=new ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=r.get(h);if(!i||m===null||m.length===0||s&&!g)s?u(null):c();else{const x=s?0:n,y=x*4;let v=p.clippingState||null;l.value=v,v=u(m,d,y,f);for(let T=0;T!==y;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)o.copy(h[y]).applyMatrix4(x,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function tS(r){let e=new WeakMap;function t(o,a){return a===Sh?o.mapping=Oo:a===bh&&(o.mapping=ko),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Sh||a===bh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zx(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const mo=4,Cp=[.125,.215,.35,.446,.526,.582],gs=20,Iu=new dg,Rp=new Ze;let Fu=null,Uu=0,Nu=0,Ou=!1;const ps=(1+Math.sqrt(5))/2,oo=1/ps,Pp=[new I(-ps,oo,0),new I(ps,oo,0),new I(-oo,0,ps),new I(oo,0,ps),new I(0,ps,-oo),new I(0,ps,oo),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],nS=new I;class Dp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=nS}=s;Fu=this._renderer.getRenderTarget(),Uu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fu,Uu,Nu),this._renderer.xr.enabled=Ou,e.scissorTest=!1,Gl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oo||e.mapping===ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fu=this._renderer.getRenderTarget(),Uu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qi,minFilter:Qi,generateMipmaps:!1,type:nl,format:Hi,colorSpace:Bo,depthBuffer:!1},i=Lp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iS(s)),this._blurMaterial=rS(s,e,t)}return i}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,Iu)}_sceneToCubeUV(e,t,n,i,s){const l=new ei(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Rp),h.toneMapping=$r,h.autoClear=!1;const m=new Ji({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1}),_=new Vt(new Fn,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(Rp),g=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const v=this._cubeSize;Gl(i,y*v,x>2?v:0,v,v),h.setRenderTarget(i),g&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Oo||e.mapping===ko;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ip());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Gl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Iu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Pp[(i-s-1)%Pp.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Vt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*gs-1),_=s/m,g=isFinite(s)?1+Math.floor(u*_):gs;g>gs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${gs}`);const p=[];let x=0;for(let b=0;b<gs;++b){const C=b/_,S=Math.exp(-C*C/2);p.push(S),b===0?x+=S:b<g&&(x+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const v=this._sizeLods[i],T=3*v*(i>y-mo?i-y+mo:0),w=4*(this._cubeSize-v);Gl(t,T,w,3*v,2*v),l.setRenderTarget(t),l.render(h,Iu)}}function iS(r){const e=[],t=[],n=[];let i=r;const s=r-mo+1+Cp.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-mo?l=Cp[o-r+mo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*f),y=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let w=0;w<f;w++){const b=w%3*2/3-1,C=w>2?0:-1,S=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];x.set(S,_*m*w),y.set(d,g*m*w);const M=[w,w,w,w,w,w];v.set(M,p*m*w)}const T=new cn;T.setAttribute("position",new Bt(x,_)),T.setAttribute("uv",new Bt(y,g)),T.setAttribute("faceIndex",new Bt(v,p)),e.push(T),i>mo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lp(r,e,t){const n=new Ns(r,e,t);return n.texture.mapping=Oc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gl(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function rS(r,e,t){const n=new Float32Array(gs),i=new I(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Zd(),fragmentShader:`

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
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function Ip(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zd(),fragmentShader:`

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
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function Fp(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function Zd(){return`

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
	`}function sS(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Sh||l===bh,u=l===Oo||l===ko;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Dp(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Dp(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function oS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&cc("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function aS(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,m=h.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,v=x.length;y<v;y+=3){const T=x[y+0],w=x[y+1],b=x[y+2];d.push(T,w,w,b,b,T)}}else if(m!==void 0){const x=m.array;_=m.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const T=y+0,w=y+1,b=y+2;d.push(T,w,w,b,b,T)}}else return;const g=new(j0(d)?Q0:Z0)(d,1);g.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function lS(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,d*o,m),t.update(f,n,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function h(d,f,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,m);let p=0;for(let x=0;x<m;x++)p+=f[x]*_[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function uS(r,e,t){const n=new WeakMap,i=new Dt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let T=a.attributes.position.count*v,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const b=new Float32Array(T*w*4*h),C=new J0(b,T,w,h);C.type=vr,C.needsUpdate=!0;const S=v*4;for(let P=0;P<h;P++){const U=p[P],H=x[P],N=y[P],G=T*w*4*P;for(let W=0;W<U.count;W++){const $=W*S;m===!0&&(i.fromBufferAttribute(U,W),b[G+$+0]=i.x,b[G+$+1]=i.y,b[G+$+2]=i.z,b[G+$+3]=0),_===!0&&(i.fromBufferAttribute(H,W),b[G+$+4]=i.x,b[G+$+5]=i.y,b[G+$+6]=i.z,b[G+$+7]=0),g===!0&&(i.fromBufferAttribute(N,W),b[G+$+8]=i.x,b[G+$+9]=i.y,b[G+$+10]=i.z,b[G+$+11]=N.itemSize===4?i.w:1)}}d={count:h,texture:C,size:new We(T,w)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function hS(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const pg=new Kn,Up=new og(1,1),mg=new J0,gg=new bx,_g=new ng,Np=[],Op=[],kp=new Float32Array(16),Bp=new Float32Array(9),zp=new Float32Array(4);function Go(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Np[i];if(s===void 0&&(s=new Float32Array(i),Np[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function un(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function hn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Bc(r,e){let t=Op[e];t===void 0&&(t=new Int32Array(e),Op[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function dS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function fS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2fv(this.addr,e),hn(t,e)}}function pS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;r.uniform3fv(this.addr,e),hn(t,e)}}function mS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4fv(this.addr,e),hn(t,e)}}function gS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;zp.set(n),r.uniformMatrix2fv(this.addr,!1,zp),hn(t,n)}}function _S(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;Bp.set(n),r.uniformMatrix3fv(this.addr,!1,Bp),hn(t,n)}}function vS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;kp.set(n),r.uniformMatrix4fv(this.addr,!1,kp),hn(t,n)}}function xS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function yS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2iv(this.addr,e),hn(t,e)}}function MS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;r.uniform3iv(this.addr,e),hn(t,e)}}function SS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4iv(this.addr,e),hn(t,e)}}function bS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function wS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2uiv(this.addr,e),hn(t,e)}}function TS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;r.uniform3uiv(this.addr,e),hn(t,e)}}function ES(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4uiv(this.addr,e),hn(t,e)}}function AS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Up.compareFunction=$0,s=Up):s=pg,t.setTexture2D(e||s,i)}function CS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||gg,i)}function RS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||_g,i)}function PS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||mg,i)}function DS(r){switch(r){case 5126:return dS;case 35664:return fS;case 35665:return pS;case 35666:return mS;case 35674:return gS;case 35675:return _S;case 35676:return vS;case 5124:case 35670:return xS;case 35667:case 35671:return yS;case 35668:case 35672:return MS;case 35669:case 35673:return SS;case 5125:return bS;case 36294:return wS;case 36295:return TS;case 36296:return ES;case 35678:case 36198:case 36298:case 36306:case 35682:return AS;case 35679:case 36299:case 36307:return CS;case 35680:case 36300:case 36308:case 36293:return RS;case 36289:case 36303:case 36311:case 36292:return PS}}function LS(r,e){r.uniform1fv(this.addr,e)}function IS(r,e){const t=Go(e,this.size,2);r.uniform2fv(this.addr,t)}function FS(r,e){const t=Go(e,this.size,3);r.uniform3fv(this.addr,t)}function US(r,e){const t=Go(e,this.size,4);r.uniform4fv(this.addr,t)}function NS(r,e){const t=Go(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function OS(r,e){const t=Go(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function kS(r,e){const t=Go(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function BS(r,e){r.uniform1iv(this.addr,e)}function zS(r,e){r.uniform2iv(this.addr,e)}function HS(r,e){r.uniform3iv(this.addr,e)}function VS(r,e){r.uniform4iv(this.addr,e)}function GS(r,e){r.uniform1uiv(this.addr,e)}function WS(r,e){r.uniform2uiv(this.addr,e)}function qS(r,e){r.uniform3uiv(this.addr,e)}function XS(r,e){r.uniform4uiv(this.addr,e)}function YS(r,e,t){const n=this.cache,i=e.length,s=Bc(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||pg,s[o])}function $S(r,e,t){const n=this.cache,i=e.length,s=Bc(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||gg,s[o])}function jS(r,e,t){const n=this.cache,i=e.length,s=Bc(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||_g,s[o])}function JS(r,e,t){const n=this.cache,i=e.length,s=Bc(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||mg,s[o])}function KS(r){switch(r){case 5126:return LS;case 35664:return IS;case 35665:return FS;case 35666:return US;case 35674:return NS;case 35675:return OS;case 35676:return kS;case 5124:case 35670:return BS;case 35667:case 35671:return zS;case 35668:case 35672:return HS;case 35669:case 35673:return VS;case 5125:return GS;case 36294:return WS;case 36295:return qS;case 36296:return XS;case 35678:case 36198:case 36298:case 36306:case 35682:return YS;case 35679:case 36299:case 36307:return $S;case 35680:case 36300:case 36308:case 36293:return jS;case 36289:case 36303:case 36311:case 36292:return JS}}class ZS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=DS(t.type)}}class QS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KS(t.type)}}class eb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ku=/(\w+)(\])?(\[|\.)?/g;function Hp(r,e){r.seq.push(e),r.map[e.id]=e}function tb(r,e,t){const n=r.name,i=n.length;for(ku.lastIndex=0;;){const s=ku.exec(n),o=ku.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Hp(t,c===void 0?new ZS(a,r,e):new QS(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new eb(a),Hp(t,h)),t=h}}}class uc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);tb(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Vp(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const nb=37297;let ib=0;function rb(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Gp=new ft;function sb(r){bt._getMatrix(Gp,bt.workingColorSpace,r);const e=`mat3( ${Gp.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(r)){case bc:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Wp(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+rb(r.getShaderSource(e),o)}else return i}function ob(r,e){const t=sb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ab(r,e){let t;switch(e){case jv:t="Linear";break;case Jv:t="Reinhard";break;case Kv:t="Cineon";break;case Zv:t="ACESFilmic";break;case ex:t="AgX";break;case tx:t="Neutral";break;case Qv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wl=new I;function lb(){bt.getLuminanceCoefficients(Wl);const r=Wl.x.toFixed(4),e=Wl.y.toFixed(4),t=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function ub(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hb(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function _a(r){return r!==""}function qp(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const db=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(r){return r.replace(db,pb)}const fb=new Map;function pb(r,e){let t=pt[e];if(t===void 0){const n=fb.get(e);if(n!==void 0)t=pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rd(t)}const mb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yp(r){return r.replace(mb,gb)}function gb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function $p(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function _b(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===N0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Cv?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===hr&&(e="SHADOWMAP_TYPE_VSM"),e}function vb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Oo:case ko:e="ENVMAP_TYPE_CUBE";break;case Oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xb(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ko:e="ENVMAP_MODE_REFRACTION";break}return e}function yb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case O0:e="ENVMAP_BLENDING_MULTIPLY";break;case Yv:e="ENVMAP_BLENDING_MIX";break;case $v:e="ENVMAP_BLENDING_ADD";break}return e}function Mb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Sb(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=_b(t),c=vb(t),u=xb(t),h=yb(t),d=Mb(t),f=cb(t),m=ub(s),_=i.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(_a).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(_a).join(`
`),p.length>0&&(p+=`
`)):(g=[$p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),p=[$p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$r?"#define TONE_MAPPING":"",t.toneMapping!==$r?pt.tonemapping_pars_fragment:"",t.toneMapping!==$r?ab("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,ob("linearToOutputTexel",t.outputColorSpace),lb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_a).join(`
`)),o=rd(o),o=qp(o,t),o=Xp(o,t),a=rd(a),a=qp(a,t),a=Xp(a,t),o=Yp(o),a=Yp(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Kf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+g+o,v=x+p+a,T=Vp(i,i.VERTEX_SHADER,y),w=Vp(i,i.FRAGMENT_SHADER,v);i.attachShader(_,T),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(P){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(_).trim(),H=i.getShaderInfoLog(T).trim(),N=i.getShaderInfoLog(w).trim();let G=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,T,w);else{const $=Wp(i,T,"vertex"),z=Wp(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+$+`
`+z)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(H===""||N==="")&&(W=!1);W&&(P.diagnostics={runnable:G,programLog:U,vertexShader:{log:H,prefix:g},fragmentShader:{log:N,prefix:p}})}i.deleteShader(T),i.deleteShader(w),C=new uc(i,_),S=hb(i,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,nb)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ib++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let bb=0;class wb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Tb(e),t.set(e,n)),n}}class Tb{constructor(e){this.id=bb++,this.code=e,this.usedTimes=0}}function Eb(r,e,t,n,i,s,o){const a=new Xd,l=new wb,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,P,U,H){const N=U.fog,G=H.geometry,W=S.isMeshStandardMaterial?U.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),z=$&&$.mapping===Oc?$.image.height:null,oe=m[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const D=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,me=D!==void 0?D.length:0;let Le=0;G.morphAttributes.position!==void 0&&(Le=1),G.morphAttributes.normal!==void 0&&(Le=2),G.morphAttributes.color!==void 0&&(Le=3);let Oe,Y,ae,ce;if(oe){const fe=Xi[oe];Oe=fe.vertexShader,Y=fe.fragmentShader}else Oe=S.vertexShader,Y=S.fragmentShader,l.update(S),ae=l.getVertexShaderID(S),ce=l.getFragmentShaderID(S);const re=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),Ve=H.isInstancedMesh===!0,Re=H.isBatchedMesh===!0,rt=!!S.map,Je=!!S.matcap,Ee=!!$,L=!!S.aoMap,xt=!!S.lightMap,qe=!!S.bumpMap,V=!!S.normalMap,Ce=!!S.displacementMap,ct=!!S.emissiveMap,Ne=!!S.metalnessMap,R=!!S.roughnessMap,E=S.anisotropy>0,X=S.clearcoat>0,ne=S.dispersion>0,ie=S.iridescence>0,Z=S.sheen>0,ve=S.transmission>0,he=E&&!!S.anisotropyMap,Se=X&&!!S.clearcoatMap,Ge=X&&!!S.clearcoatNormalMap,le=X&&!!S.clearcoatRoughnessMap,pe=ie&&!!S.iridescenceMap,ze=ie&&!!S.iridescenceThicknessMap,He=Z&&!!S.sheenColorMap,be=Z&&!!S.sheenRoughnessMap,it=!!S.specularMap,Ke=!!S.specularColorMap,at=!!S.specularIntensityMap,F=ve&&!!S.transmissionMap,J=ve&&!!S.thicknessMap,O=!!S.gradientMap,q=!!S.alphaMap,ee=S.alphaTest>0,se=!!S.alphaHash,Ie=!!S.extensions;let nt=$r;S.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(nt=r.toneMapping);const ut={shaderID:oe,shaderType:S.type,shaderName:S.name,vertexShader:Oe,fragmentShader:Y,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Re,batchingColor:Re&&H._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&H.instanceColor!==null,instancingMorph:Ve&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Bo,alphaToCoverage:!!S.alphaToCoverage,map:rt,matcap:Je,envMap:Ee,envMapMode:Ee&&$.mapping,envMapCubeUVHeight:z,aoMap:L,lightMap:xt,bumpMap:qe,normalMap:V,displacementMap:d&&Ce,emissiveMap:ct,normalMapObjectSpace:V&&S.normalMapType===sx,normalMapTangentSpace:V&&S.normalMapType===Y0,metalnessMap:Ne,roughnessMap:R,anisotropy:E,anisotropyMap:he,clearcoat:X,clearcoatMap:Se,clearcoatNormalMap:Ge,clearcoatRoughnessMap:le,dispersion:ne,iridescence:ie,iridescenceMap:pe,iridescenceThicknessMap:ze,sheen:Z,sheenColorMap:He,sheenRoughnessMap:be,specularMap:it,specularColorMap:Ke,specularIntensityMap:at,transmission:ve,transmissionMap:F,thicknessMap:J,gradientMap:O,opaque:S.transparent===!1&&S.blending===wo&&S.alphaToCoverage===!1,alphaMap:q,alphaTest:ee,alphaHash:se,combine:S.combine,mapUv:rt&&_(S.map.channel),aoMapUv:L&&_(S.aoMap.channel),lightMapUv:xt&&_(S.lightMap.channel),bumpMapUv:qe&&_(S.bumpMap.channel),normalMapUv:V&&_(S.normalMap.channel),displacementMapUv:Ce&&_(S.displacementMap.channel),emissiveMapUv:ct&&_(S.emissiveMap.channel),metalnessMapUv:Ne&&_(S.metalnessMap.channel),roughnessMapUv:R&&_(S.roughnessMap.channel),anisotropyMapUv:he&&_(S.anisotropyMap.channel),clearcoatMapUv:Se&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:He&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(S.sheenRoughnessMap.channel),specularMapUv:it&&_(S.specularMap.channel),specularColorMapUv:Ke&&_(S.specularColorMap.channel),specularIntensityMapUv:at&&_(S.specularIntensityMap.channel),transmissionMapUv:F&&_(S.transmissionMap.channel),thicknessMapUv:J&&_(S.thicknessMap.channel),alphaMapUv:q&&_(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(V||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!G.attributes.uv&&(rt||q),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:_e,skinning:H.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Le,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:nt,decodeVideoTexture:rt&&S.map.isVideoTexture===!0&&bt.getTransfer(S.map.colorSpace)===Ct,decodeVideoTextureEmissive:ct&&S.emissiveMap.isVideoTexture===!0&&bt.getTransfer(S.emissiveMap.colorSpace)===Ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===$i,flipSided:S.side===oi,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ie&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&S.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(x(M,S),y(M,S),M.push(r.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const M=m[S.type];let P;if(M){const U=Xi[M];P=Nx.clone(U.uniforms)}else P=S.uniforms;return P}function T(S,M){let P;for(let U=0,H=u.length;U<H;U++){const N=u[U];if(N.cacheKey===M){P=N,++P.usedTimes;break}}return P===void 0&&(P=new Sb(r,M,S,s),u.push(P)),P}function w(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function b(S){l.remove(S)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:C}}function Ab(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Cb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function jp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Jp(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,m,_,g){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function a(h,d,f,m,_,g){const p=o(h,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,m,_,g){const p=o(h,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||Cb),n.length>1&&n.sort(d||jp),i.length>1&&i.sort(d||jp)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Rb(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Jp,r.set(n,[o])):i>=s.length?(o=new Jp,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Pb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ze};break;case"SpotLight":t={position:new I,direction:new I,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function Db(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Lb=0;function Ib(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Fb(r){const e=new Pb,t=Db(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,s=new Ut,o=new Ut;function a(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,x=0,y=0,v=0,T=0,w=0,b=0;c.sort(Ib);for(let S=0,M=c.length;S<M;S++){const P=c[S],U=P.color,H=P.intensity,N=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=U.r*H,h+=U.g*H,d+=U.b*H;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],H);b++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,z=t.get(P);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=W,f++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(U).multiplyScalar(H),W.distance=N,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[_]=W;const $=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,$.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=$.matrix,P.castShadow){const z=t.get(P);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=G,v++}_++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(U).multiplyScalar(H),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=W,g++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const $=P.shadow,z=t.get(P);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,z.shadowCameraNear=$.camera.near,z.shadowCameraFar=$.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=P.shadow.matrix,y++}n.point[m]=W,m++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(H),W.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[p]=W,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==m||C.spotLength!==_||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==T||C.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,C.directionalLength=f,C.pointLength=m,C.spotLength=_,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=T,C.numLightProbes=b,n.version=Lb++)}function l(c,u){let h=0,d=0,f=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),h++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Kp(r){const e=new Fb(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Ub(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Kp(r),e.set(i,[a])):s>=o.length?(a=new Kp(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Nb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ob=`uniform sampler2D shadow_pass;
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
}`;function kb(r,e,t){let n=new Yd;const i=new We,s=new We,o=new Dt,a=new oy({depthPacking:rx}),l=new ay,c={},u=t.maxTextureSize,h={[Qr]:oi,[oi]:Qr,[$i]:$i},d=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Nb,fragmentShader:Ob}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new cn;m.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Vt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N0;let p=this.type;this.render=function(w,b,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const S=r.getRenderTarget(),M=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),U=r.state;U.setBlending(Yr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=p!==hr&&this.type===hr,N=p===hr&&this.type!==hr;for(let G=0,W=w.length;G<W;G++){const $=w[G],z=$.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const oe=z.getFrameExtents();if(i.multiply(oe),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/oe.x),i.x=s.x*oe.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/oe.y),i.y=s.y*oe.y,z.mapSize.y=s.y)),z.map===null||H===!0||N===!0){const me=this.type!==hr?{minFilter:Vi,magFilter:Vi}:{};z.map!==null&&z.map.dispose(),z.map=new Ns(i.x,i.y,me),z.map.texture.name=$.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const D=z.getViewportCount();for(let me=0;me<D;me++){const Le=z.getViewport(me);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),U.viewport(o),z.updateMatrices($,me),n=z.getFrustum(),v(b,C,z.camera,$,this.type)}z.isPointLightShadow!==!0&&this.type===hr&&x(z,C),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(S,M,P)};function x(w,b){const C=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ns(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,C,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,C,f,_,null)}function y(w,b,C,S){let M=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const U=M.uuid,H=b.uuid;let N=c[U];N===void 0&&(N={},c[U]=N);let G=N[H];G===void 0&&(G=M.clone(),N[H]=G,b.addEventListener("dispose",T)),M=G}if(M.visible=b.visible,M.wireframe=b.wireframe,S===hr?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:h[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=r.properties.get(M);U.light=C}return M}function v(w,b,C,S,M){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===hr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const H=e.update(w),N=w.material;if(Array.isArray(N)){const G=H.groups;for(let W=0,$=G.length;W<$;W++){const z=G[W],oe=N[z.materialIndex];if(oe&&oe.visible){const D=y(w,oe,S,M);w.onBeforeShadow(r,w,b,C,H,D,z),r.renderBufferDirect(C,null,H,D,w,z),w.onAfterShadow(r,w,b,C,H,D,z)}}}else if(N.visible){const G=y(w,N,S,M);w.onBeforeShadow(r,w,b,C,H,G,null),r.renderBufferDirect(C,null,H,G,w,null),w.onAfterShadow(r,w,b,C,H,G,null)}}const U=w.children;for(let H=0,N=U.length;H<N;H++)v(U[H],b,C,S,M)}function T(w){w.target.removeEventListener("dispose",T);for(const C in c){const S=c[C],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Bb={[mh]:gh,[_h]:yh,[vh]:Mh,[No]:xh,[gh]:mh,[yh]:_h,[Mh]:vh,[xh]:No};function zb(r,e){function t(){let F=!1;const J=new Dt;let O=null;const q=new Dt(0,0,0,0);return{setMask:function(ee){O!==ee&&!F&&(r.colorMask(ee,ee,ee,ee),O=ee)},setLocked:function(ee){F=ee},setClear:function(ee,se,Ie,nt,ut){ut===!0&&(ee*=nt,se*=nt,Ie*=nt),J.set(ee,se,Ie,nt),q.equals(J)===!1&&(r.clearColor(ee,se,Ie,nt),q.copy(J))},reset:function(){F=!1,O=null,q.set(-1,0,0,0)}}}function n(){let F=!1,J=!1,O=null,q=null,ee=null;return{setReversed:function(se){if(J!==se){const Ie=e.get("EXT_clip_control");se?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),J=se;const nt=ee;ee=null,this.setClear(nt)}},getReversed:function(){return J},setTest:function(se){se?re(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(se){O!==se&&!F&&(r.depthMask(se),O=se)},setFunc:function(se){if(J&&(se=Bb[se]),q!==se){switch(se){case mh:r.depthFunc(r.NEVER);break;case gh:r.depthFunc(r.ALWAYS);break;case _h:r.depthFunc(r.LESS);break;case No:r.depthFunc(r.LEQUAL);break;case vh:r.depthFunc(r.EQUAL);break;case xh:r.depthFunc(r.GEQUAL);break;case yh:r.depthFunc(r.GREATER);break;case Mh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}q=se}},setLocked:function(se){F=se},setClear:function(se){ee!==se&&(J&&(se=1-se),r.clearDepth(se),ee=se)},reset:function(){F=!1,O=null,q=null,ee=null,J=!1}}}function i(){let F=!1,J=null,O=null,q=null,ee=null,se=null,Ie=null,nt=null,ut=null;return{setTest:function(fe){F||(fe?re(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(fe){J!==fe&&!F&&(r.stencilMask(fe),J=fe)},setFunc:function(fe,ye,Q){(O!==fe||q!==ye||ee!==Q)&&(r.stencilFunc(fe,ye,Q),O=fe,q=ye,ee=Q)},setOp:function(fe,ye,Q){(se!==fe||Ie!==ye||nt!==Q)&&(r.stencilOp(fe,ye,Q),se=fe,Ie=ye,nt=Q)},setLocked:function(fe){F=fe},setClear:function(fe){ut!==fe&&(r.clearStencil(fe),ut=fe)},reset:function(){F=!1,J=null,O=null,q=null,ee=null,se=null,Ie=null,nt=null,ut=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,x=null,y=null,v=null,T=null,w=null,b=new Ze(0,0,0),C=0,S=!1,M=null,P=null,U=null,H=null,N=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,$=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(z)[1]),W=$>=1):z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),W=$>=2);let oe=null,D={};const me=r.getParameter(r.SCISSOR_BOX),Le=r.getParameter(r.VIEWPORT),Oe=new Dt().fromArray(me),Y=new Dt().fromArray(Le);function ae(F,J,O,q){const ee=new Uint8Array(4),se=r.createTexture();r.bindTexture(F,se),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ie=0;Ie<O;Ie++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(J,0,r.RGBA,1,1,q,0,r.RGBA,r.UNSIGNED_BYTE,ee):r.texImage2D(J+Ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ee);return se}const ce={};ce[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(r.DEPTH_TEST),o.setFunc(No),qe(!1),V(Yf),re(r.CULL_FACE),L(Yr);function re(F){u[F]!==!0&&(r.enable(F),u[F]=!0)}function _e(F){u[F]!==!1&&(r.disable(F),u[F]=!1)}function Ve(F,J){return h[F]!==J?(r.bindFramebuffer(F,J),h[F]=J,F===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=J),F===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=J),!0):!1}function Re(F,J){let O=f,q=!1;if(F){O=d.get(J),O===void 0&&(O=[],d.set(J,O));const ee=F.textures;if(O.length!==ee.length||O[0]!==r.COLOR_ATTACHMENT0){for(let se=0,Ie=ee.length;se<Ie;se++)O[se]=r.COLOR_ATTACHMENT0+se;O.length=ee.length,q=!0}}else O[0]!==r.BACK&&(O[0]=r.BACK,q=!0);q&&r.drawBuffers(O)}function rt(F){return m!==F?(r.useProgram(F),m=F,!0):!1}const Je={[ms]:r.FUNC_ADD,[Pv]:r.FUNC_SUBTRACT,[Dv]:r.FUNC_REVERSE_SUBTRACT};Je[Lv]=r.MIN,Je[Iv]=r.MAX;const Ee={[Fv]:r.ZERO,[Uv]:r.ONE,[Nv]:r.SRC_COLOR,[fh]:r.SRC_ALPHA,[Vv]:r.SRC_ALPHA_SATURATE,[zv]:r.DST_COLOR,[kv]:r.DST_ALPHA,[Ov]:r.ONE_MINUS_SRC_COLOR,[ph]:r.ONE_MINUS_SRC_ALPHA,[Hv]:r.ONE_MINUS_DST_COLOR,[Bv]:r.ONE_MINUS_DST_ALPHA,[Gv]:r.CONSTANT_COLOR,[Wv]:r.ONE_MINUS_CONSTANT_COLOR,[qv]:r.CONSTANT_ALPHA,[Xv]:r.ONE_MINUS_CONSTANT_ALPHA};function L(F,J,O,q,ee,se,Ie,nt,ut,fe){if(F===Yr){_===!0&&(_e(r.BLEND),_=!1);return}if(_===!1&&(re(r.BLEND),_=!0),F!==Rv){if(F!==g||fe!==S){if((p!==ms||v!==ms)&&(r.blendEquation(r.FUNC_ADD),p=ms,v=ms),fe)switch(F){case wo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nn:r.blendFunc(r.ONE,r.ONE);break;case $f:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case wo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case $f:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,y=null,T=null,w=null,b.set(0,0,0),C=0,g=F,S=fe}return}ee=ee||J,se=se||O,Ie=Ie||q,(J!==p||ee!==v)&&(r.blendEquationSeparate(Je[J],Je[ee]),p=J,v=ee),(O!==x||q!==y||se!==T||Ie!==w)&&(r.blendFuncSeparate(Ee[O],Ee[q],Ee[se],Ee[Ie]),x=O,y=q,T=se,w=Ie),(nt.equals(b)===!1||ut!==C)&&(r.blendColor(nt.r,nt.g,nt.b,ut),b.copy(nt),C=ut),g=F,S=!1}function xt(F,J){F.side===$i?_e(r.CULL_FACE):re(r.CULL_FACE);let O=F.side===oi;J&&(O=!O),qe(O),F.blending===wo&&F.transparent===!1?L(Yr):L(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const q=F.stencilWrite;a.setTest(q),q&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ct(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)}function qe(F){M!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),M=F)}function V(F){F!==Ev?(re(r.CULL_FACE),F!==P&&(F===Yf?r.cullFace(r.BACK):F===Av?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),P=F}function Ce(F){F!==U&&(W&&r.lineWidth(F),U=F)}function ct(F,J,O){F?(re(r.POLYGON_OFFSET_FILL),(H!==J||N!==O)&&(r.polygonOffset(J,O),H=J,N=O)):_e(r.POLYGON_OFFSET_FILL)}function Ne(F){F?re(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)}function R(F){F===void 0&&(F=r.TEXTURE0+G-1),oe!==F&&(r.activeTexture(F),oe=F)}function E(F,J,O){O===void 0&&(oe===null?O=r.TEXTURE0+G-1:O=oe);let q=D[O];q===void 0&&(q={type:void 0,texture:void 0},D[O]=q),(q.type!==F||q.texture!==J)&&(oe!==O&&(r.activeTexture(O),oe=O),r.bindTexture(F,J||ce[F]),q.type=F,q.texture=J)}function X(){const F=D[oe];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ne(){try{r.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{r.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{r.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{r.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{r.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{r.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ge(){try{r.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{r.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{r.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{r.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(F){Oe.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Oe.copy(F))}function be(F){Y.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Y.copy(F))}function it(F,J){let O=c.get(J);O===void 0&&(O=new WeakMap,c.set(J,O));let q=O.get(F);q===void 0&&(q=r.getUniformBlockIndex(J,F.name),O.set(F,q))}function Ke(F,J){const q=c.get(J).get(F);l.get(J)!==q&&(r.uniformBlockBinding(J,q,F.__bindingPointIndex),l.set(J,q))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},oe=null,D={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,x=null,y=null,v=null,T=null,w=null,b=new Ze(0,0,0),C=0,S=!1,M=null,P=null,U=null,H=null,N=null,Oe.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:_e,bindFramebuffer:Ve,drawBuffers:Re,useProgram:rt,setBlending:L,setMaterial:xt,setFlipSided:qe,setCullFace:V,setLineWidth:Ce,setPolygonOffset:ct,setScissorTest:Ne,activeTexture:R,bindTexture:E,unbindTexture:X,compressedTexImage2D:ne,compressedTexImage3D:ie,texImage2D:pe,texImage3D:ze,updateUBOMapping:it,uniformBlockBinding:Ke,texStorage2D:Ge,texStorage3D:le,texSubImage2D:Z,texSubImage3D:ve,compressedTexSubImage2D:he,compressedTexSubImage3D:Se,scissor:He,viewport:be,reset:at}}function Hb(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,E){return f?new OffscreenCanvas(R,E):Tc("canvas")}function _(R,E,X){let ne=1;const ie=Ne(R);if((ie.width>X||ie.height>X)&&(ne=X/Math.max(ie.width,ie.height)),ne<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(ne*ie.width),ve=Math.floor(ne*ie.height);h===void 0&&(h=m(Z,ve));const he=E?m(Z,ve):h;return he.width=Z,he.height=ve,he.getContext("2d").drawImage(R,0,0,Z,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Z+"x"+ve+")."),he}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(R,E,X,ne,ie=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=E;if(E===r.RED&&(X===r.FLOAT&&(Z=r.R32F),X===r.HALF_FLOAT&&(Z=r.R16F),X===r.UNSIGNED_BYTE&&(Z=r.R8)),E===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(Z=r.R8UI),X===r.UNSIGNED_SHORT&&(Z=r.R16UI),X===r.UNSIGNED_INT&&(Z=r.R32UI),X===r.BYTE&&(Z=r.R8I),X===r.SHORT&&(Z=r.R16I),X===r.INT&&(Z=r.R32I)),E===r.RG&&(X===r.FLOAT&&(Z=r.RG32F),X===r.HALF_FLOAT&&(Z=r.RG16F),X===r.UNSIGNED_BYTE&&(Z=r.RG8)),E===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(Z=r.RG8UI),X===r.UNSIGNED_SHORT&&(Z=r.RG16UI),X===r.UNSIGNED_INT&&(Z=r.RG32UI),X===r.BYTE&&(Z=r.RG8I),X===r.SHORT&&(Z=r.RG16I),X===r.INT&&(Z=r.RG32I)),E===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),X===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),X===r.UNSIGNED_INT&&(Z=r.RGB32UI),X===r.BYTE&&(Z=r.RGB8I),X===r.SHORT&&(Z=r.RGB16I),X===r.INT&&(Z=r.RGB32I)),E===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),X===r.UNSIGNED_INT&&(Z=r.RGBA32UI),X===r.BYTE&&(Z=r.RGBA8I),X===r.SHORT&&(Z=r.RGBA16I),X===r.INT&&(Z=r.RGBA32I)),E===r.RGB&&X===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),E===r.RGBA){const ve=ie?bc:bt.getTransfer(ne);X===r.FLOAT&&(Z=r.RGBA32F),X===r.HALF_FLOAT&&(Z=r.RGBA16F),X===r.UNSIGNED_BYTE&&(Z=ve===Ct?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(R,E){let X;return R?E===null||E===Us||E===$a?X=r.DEPTH24_STENCIL8:E===vr?X=r.DEPTH32F_STENCIL8:E===Ya&&(X=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Us||E===$a?X=r.DEPTH_COMPONENT24:E===vr?X=r.DEPTH_COMPONENT32F:E===Ya&&(X=r.DEPTH_COMPONENT16),X}function T(R,E){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Vi&&R.minFilter!==Qi?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function w(R){const E=R.target;E.removeEventListener("dispose",w),C(E),E.isVideoTexture&&u.delete(E)}function b(R){const E=R.target;E.removeEventListener("dispose",b),M(E)}function C(R){const E=n.get(R);if(E.__webglInit===void 0)return;const X=R.source,ne=d.get(X);if(ne){const ie=ne[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&S(R),Object.keys(ne).length===0&&d.delete(X)}n.remove(R)}function S(R){const E=n.get(R);r.deleteTexture(E.__webglTexture);const X=R.source,ne=d.get(X);delete ne[E.__cacheKey],o.memory.textures--}function M(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(E.__webglFramebuffer[ne]))for(let ie=0;ie<E.__webglFramebuffer[ne].length;ie++)r.deleteFramebuffer(E.__webglFramebuffer[ne][ie]);else r.deleteFramebuffer(E.__webglFramebuffer[ne]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ne])}else{if(Array.isArray(E.__webglFramebuffer))for(let ne=0;ne<E.__webglFramebuffer.length;ne++)r.deleteFramebuffer(E.__webglFramebuffer[ne]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ne=0;ne<E.__webglColorRenderbuffer.length;ne++)E.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ne]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=R.textures;for(let ne=0,ie=X.length;ne<ie;ne++){const Z=n.get(X[ne]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(X[ne])}n.remove(R)}let P=0;function U(){P=0}function H(){const R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function N(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function G(R,E){const X=n.get(R);if(R.isVideoTexture&&Ce(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(X,R,E);return}}t.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+E)}function W(R,E){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Y(X,R,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+E)}function $(R,E){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Y(X,R,E);return}t.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+E)}function z(R,E){const X=n.get(R);if(R.version>0&&X.__version!==R.version){ae(X,R,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+E)}const oe={[wh]:r.REPEAT,[Ms]:r.CLAMP_TO_EDGE,[Th]:r.MIRRORED_REPEAT},D={[Vi]:r.NEAREST,[nx]:r.NEAREST_MIPMAP_NEAREST,[vl]:r.NEAREST_MIPMAP_LINEAR,[Qi]:r.LINEAR,[iu]:r.LINEAR_MIPMAP_NEAREST,[Ss]:r.LINEAR_MIPMAP_LINEAR},me={[ox]:r.NEVER,[dx]:r.ALWAYS,[ax]:r.LESS,[$0]:r.LEQUAL,[lx]:r.EQUAL,[hx]:r.GEQUAL,[cx]:r.GREATER,[ux]:r.NOTEQUAL};function Le(R,E){if(E.type===vr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Qi||E.magFilter===iu||E.magFilter===vl||E.magFilter===Ss||E.minFilter===Qi||E.minFilter===iu||E.minFilter===vl||E.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,oe[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,oe[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,oe[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,D[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,D[E.minFilter]),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,me[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Vi||E.minFilter!==vl&&E.minFilter!==Ss||E.type===vr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Oe(R,E){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",w));const ne=E.source;let ie=d.get(ne);ie===void 0&&(ie={},d.set(ne,ie));const Z=N(E);if(Z!==R.__cacheKey){ie[Z]===void 0&&(ie[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ie[Z].usedTimes++;const ve=ie[R.__cacheKey];ve!==void 0&&(ie[R.__cacheKey].usedTimes--,ve.usedTimes===0&&S(E)),R.__cacheKey=Z,R.__webglTexture=ie[Z].texture}return X}function Y(R,E,X){let ne=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=r.TEXTURE_3D);const ie=Oe(R,E),Z=E.source;t.bindTexture(ne,R.__webglTexture,r.TEXTURE0+X);const ve=n.get(Z);if(Z.version!==ve.__version||ie===!0){t.activeTexture(r.TEXTURE0+X);const he=bt.getPrimaries(bt.workingColorSpace),Se=E.colorSpace===Or?null:bt.getPrimaries(E.colorSpace),Ge=E.colorSpace===Or||he===Se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let le=_(E.image,!1,i.maxTextureSize);le=ct(E,le);const pe=s.convert(E.format,E.colorSpace),ze=s.convert(E.type);let He=y(E.internalFormat,pe,ze,E.colorSpace,E.isVideoTexture);Le(ne,E);let be;const it=E.mipmaps,Ke=E.isVideoTexture!==!0,at=ve.__version===void 0||ie===!0,F=Z.dataReady,J=T(E,le);if(E.isDepthTexture)He=v(E.format===Ja,E.type),at&&(Ke?t.texStorage2D(r.TEXTURE_2D,1,He,le.width,le.height):t.texImage2D(r.TEXTURE_2D,0,He,le.width,le.height,0,pe,ze,null));else if(E.isDataTexture)if(it.length>0){Ke&&at&&t.texStorage2D(r.TEXTURE_2D,J,He,it[0].width,it[0].height);for(let O=0,q=it.length;O<q;O++)be=it[O],Ke?F&&t.texSubImage2D(r.TEXTURE_2D,O,0,0,be.width,be.height,pe,ze,be.data):t.texImage2D(r.TEXTURE_2D,O,He,be.width,be.height,0,pe,ze,be.data);E.generateMipmaps=!1}else Ke?(at&&t.texStorage2D(r.TEXTURE_2D,J,He,le.width,le.height),F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le.width,le.height,pe,ze,le.data)):t.texImage2D(r.TEXTURE_2D,0,He,le.width,le.height,0,pe,ze,le.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ke&&at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,J,He,it[0].width,it[0].height,le.depth);for(let O=0,q=it.length;O<q;O++)if(be=it[O],E.format!==Hi)if(pe!==null)if(Ke){if(F)if(E.layerUpdates.size>0){const ee=Ap(be.width,be.height,E.format,E.type);for(const se of E.layerUpdates){const Ie=be.data.subarray(se*ee/be.data.BYTES_PER_ELEMENT,(se+1)*ee/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,O,0,0,se,be.width,be.height,1,pe,Ie)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,O,0,0,0,be.width,be.height,le.depth,pe,be.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,O,He,be.width,be.height,le.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,O,0,0,0,be.width,be.height,le.depth,pe,ze,be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,O,He,be.width,be.height,le.depth,0,pe,ze,be.data)}else{Ke&&at&&t.texStorage2D(r.TEXTURE_2D,J,He,it[0].width,it[0].height);for(let O=0,q=it.length;O<q;O++)be=it[O],E.format!==Hi?pe!==null?Ke?F&&t.compressedTexSubImage2D(r.TEXTURE_2D,O,0,0,be.width,be.height,pe,be.data):t.compressedTexImage2D(r.TEXTURE_2D,O,He,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?F&&t.texSubImage2D(r.TEXTURE_2D,O,0,0,be.width,be.height,pe,ze,be.data):t.texImage2D(r.TEXTURE_2D,O,He,be.width,be.height,0,pe,ze,be.data)}else if(E.isDataArrayTexture)if(Ke){if(at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,J,He,le.width,le.height,le.depth),F)if(E.layerUpdates.size>0){const O=Ap(le.width,le.height,E.format,E.type);for(const q of E.layerUpdates){const ee=le.data.subarray(q*O/le.data.BYTES_PER_ELEMENT,(q+1)*O/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,q,le.width,le.height,1,pe,ze,ee)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,pe,ze,le.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,He,le.width,le.height,le.depth,0,pe,ze,le.data);else if(E.isData3DTexture)Ke?(at&&t.texStorage3D(r.TEXTURE_3D,J,He,le.width,le.height,le.depth),F&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,pe,ze,le.data)):t.texImage3D(r.TEXTURE_3D,0,He,le.width,le.height,le.depth,0,pe,ze,le.data);else if(E.isFramebufferTexture){if(at)if(Ke)t.texStorage2D(r.TEXTURE_2D,J,He,le.width,le.height);else{let O=le.width,q=le.height;for(let ee=0;ee<J;ee++)t.texImage2D(r.TEXTURE_2D,ee,He,O,q,0,pe,ze,null),O>>=1,q>>=1}}else if(it.length>0){if(Ke&&at){const O=Ne(it[0]);t.texStorage2D(r.TEXTURE_2D,J,He,O.width,O.height)}for(let O=0,q=it.length;O<q;O++)be=it[O],Ke?F&&t.texSubImage2D(r.TEXTURE_2D,O,0,0,pe,ze,be):t.texImage2D(r.TEXTURE_2D,O,He,pe,ze,be);E.generateMipmaps=!1}else if(Ke){if(at){const O=Ne(le);t.texStorage2D(r.TEXTURE_2D,J,He,O.width,O.height)}F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,ze,le)}else t.texImage2D(r.TEXTURE_2D,0,He,pe,ze,le);g(E)&&p(ne),ve.__version=Z.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ae(R,E,X){if(E.image.length!==6)return;const ne=Oe(R,E),ie=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+X);const Z=n.get(ie);if(ie.version!==Z.__version||ne===!0){t.activeTexture(r.TEXTURE0+X);const ve=bt.getPrimaries(bt.workingColorSpace),he=E.colorSpace===Or?null:bt.getPrimaries(E.colorSpace),Se=E.colorSpace===Or||ve===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ge=E.isCompressedTexture||E.image[0].isCompressedTexture,le=E.image[0]&&E.image[0].isDataTexture,pe=[];for(let q=0;q<6;q++)!Ge&&!le?pe[q]=_(E.image[q],!0,i.maxCubemapSize):pe[q]=le?E.image[q].image:E.image[q],pe[q]=ct(E,pe[q]);const ze=pe[0],He=s.convert(E.format,E.colorSpace),be=s.convert(E.type),it=y(E.internalFormat,He,be,E.colorSpace),Ke=E.isVideoTexture!==!0,at=Z.__version===void 0||ne===!0,F=ie.dataReady;let J=T(E,ze);Le(r.TEXTURE_CUBE_MAP,E);let O;if(Ge){Ke&&at&&t.texStorage2D(r.TEXTURE_CUBE_MAP,J,it,ze.width,ze.height);for(let q=0;q<6;q++){O=pe[q].mipmaps;for(let ee=0;ee<O.length;ee++){const se=O[ee];E.format!==Hi?He!==null?Ke?F&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ee,0,0,se.width,se.height,He,se.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ee,it,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ee,0,0,se.width,se.height,He,be,se.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ee,it,se.width,se.height,0,He,be,se.data)}}}else{if(O=E.mipmaps,Ke&&at){O.length>0&&J++;const q=Ne(pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,J,it,q.width,q.height)}for(let q=0;q<6;q++)if(le){Ke?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,pe[q].width,pe[q].height,He,be,pe[q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,it,pe[q].width,pe[q].height,0,He,be,pe[q].data);for(let ee=0;ee<O.length;ee++){const Ie=O[ee].image[q].image;Ke?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ee+1,0,0,Ie.width,Ie.height,He,be,Ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ee+1,it,Ie.width,Ie.height,0,He,be,Ie.data)}}else{Ke?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,He,be,pe[q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,it,He,be,pe[q]);for(let ee=0;ee<O.length;ee++){const se=O[ee];Ke?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ee+1,0,0,He,be,se.image[q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ee+1,it,He,be,se.image[q])}}}g(E)&&p(r.TEXTURE_CUBE_MAP),Z.__version=ie.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ce(R,E,X,ne,ie,Z){const ve=s.convert(X.format,X.colorSpace),he=s.convert(X.type),Se=y(X.internalFormat,ve,he,X.colorSpace),Ge=n.get(E),le=n.get(X);if(le.__renderTarget=E,!Ge.__hasExternalTextures){const pe=Math.max(1,E.width>>Z),ze=Math.max(1,E.height>>Z);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,Z,Se,pe,ze,E.depth,0,ve,he,null):t.texImage2D(ie,Z,Se,pe,ze,0,ve,he,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),V(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,ie,le.__webglTexture,0,qe(E)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ne,ie,le.__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(R,E,X){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer){const ne=E.depthTexture,ie=ne&&ne.isDepthTexture?ne.type:null,Z=v(E.stencilBuffer,ie),ve=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=qe(E);V(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he,Z,E.width,E.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,he,Z,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Z,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,R)}else{const ne=E.textures;for(let ie=0;ie<ne.length;ie++){const Z=ne[ie],ve=s.convert(Z.format,Z.colorSpace),he=s.convert(Z.type),Se=y(Z.internalFormat,ve,he,Z.colorSpace),Ge=qe(E);X&&V(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,Se,E.width,E.height):V(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ge,Se,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Se,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _e(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(E.depthTexture);ne.__renderTarget=E,(!ne.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);const ie=ne.__webglTexture,Z=qe(E);if(E.depthTexture.format===ja)V(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0);else if(E.depthTexture.format===Ja)V(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ve(R){const E=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const ne=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ne){const ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ne.removeEventListener("dispose",ie)};ne.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=ne}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const ne=R.texture.mipmaps;ne&&ne.length>0?_e(E.__webglFramebuffer[0],R):_e(E.__webglFramebuffer,R)}else if(X){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]===void 0)E.__webglDepthbuffer[ne]=r.createRenderbuffer(),re(E.__webglDepthbuffer[ne],R,!1);else{const ie=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[ne];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,Z)}}else{const ne=R.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),re(E.__webglDepthbuffer,R,!1);else{const ie=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,Z)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(R,E,X){const ne=n.get(R);E!==void 0&&ce(ne.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&Ve(R)}function rt(R){const E=R.texture,X=n.get(R),ne=n.get(E);R.addEventListener("dispose",b);const ie=R.textures,Z=R.isWebGLCubeRenderTarget===!0,ve=ie.length>1;if(ve||(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=E.version,o.memory.textures++),Z){X.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[he]=[];for(let Se=0;Se<E.mipmaps.length;Se++)X.__webglFramebuffer[he][Se]=r.createFramebuffer()}else X.__webglFramebuffer[he]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)X.__webglFramebuffer[he]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(ve)for(let he=0,Se=ie.length;he<Se;he++){const Ge=n.get(ie[he]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&V(R)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let he=0;he<ie.length;he++){const Se=ie[he];X.__webglColorRenderbuffer[he]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[he]);const Ge=s.convert(Se.format,Se.colorSpace),le=s.convert(Se.type),pe=y(Se.internalFormat,Ge,le,Se.colorSpace,R.isXRRenderTarget===!0),ze=qe(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,pe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,X.__webglColorRenderbuffer[he])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),re(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),Le(r.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)ce(X.__webglFramebuffer[he][Se],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se);else ce(X.__webglFramebuffer[he],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(E)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let he=0,Se=ie.length;he<Se;he++){const Ge=ie[he],le=n.get(Ge);t.bindTexture(r.TEXTURE_2D,le.__webglTexture),Le(r.TEXTURE_2D,Ge),ce(X.__webglFramebuffer,R,Ge,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,0),g(Ge)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let he=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(he,ne.__webglTexture),Le(he,E),E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)ce(X.__webglFramebuffer[Se],R,E,r.COLOR_ATTACHMENT0,he,Se);else ce(X.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,he,0);g(E)&&p(he),t.unbindTexture()}R.depthBuffer&&Ve(R)}function Je(R){const E=R.textures;for(let X=0,ne=E.length;X<ne;X++){const ie=E[X];if(g(ie)){const Z=x(R),ve=n.get(ie).__webglTexture;t.bindTexture(Z,ve),p(Z),t.unbindTexture()}}}const Ee=[],L=[];function xt(R){if(R.samples>0){if(V(R)===!1){const E=R.textures,X=R.width,ne=R.height;let ie=r.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=n.get(R),he=E.length>1;if(he)for(let Ge=0;Ge<E.length;Ge++)t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ge,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ge,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Se=R.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ge=0;Ge<E.length;Ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),he){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ve.__webglColorRenderbuffer[Ge]);const le=n.get(E[Ge]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,le,0)}r.blitFramebuffer(0,0,X,ne,0,0,X,ne,ie,r.NEAREST),l===!0&&(Ee.length=0,L.length=0,Ee.push(r.COLOR_ATTACHMENT0+Ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ee.push(Z),L.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ee))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),he)for(let Ge=0;Ge<E.length;Ge++){t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ge,r.RENDERBUFFER,ve.__webglColorRenderbuffer[Ge]);const le=n.get(E[Ge]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ge,r.TEXTURE_2D,le,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function qe(R){return Math.min(i.maxSamples,R.samples)}function V(R){const E=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ce(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function ct(R,E){const X=R.colorSpace,ne=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==Bo&&X!==Or&&(bt.getTransfer(X)===Ct?(ne!==Hi||ie!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=U,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=z,this.rebindTextures=Re,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=V}function Vb(r,e){function t(n,i=Or){let s;const o=bt.getTransfer(i);if(n===ir)return r.UNSIGNED_BYTE;if(n===Bd)return r.UNSIGNED_SHORT_4_4_4_4;if(n===zd)return r.UNSIGNED_SHORT_5_5_5_1;if(n===H0)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===B0)return r.BYTE;if(n===z0)return r.SHORT;if(n===Ya)return r.UNSIGNED_SHORT;if(n===kd)return r.INT;if(n===Us)return r.UNSIGNED_INT;if(n===vr)return r.FLOAT;if(n===nl)return r.HALF_FLOAT;if(n===V0)return r.ALPHA;if(n===G0)return r.RGB;if(n===Hi)return r.RGBA;if(n===ja)return r.DEPTH_COMPONENT;if(n===Ja)return r.DEPTH_STENCIL;if(n===W0)return r.RED;if(n===Hd)return r.RED_INTEGER;if(n===q0)return r.RG;if(n===Vd)return r.RG_INTEGER;if(n===Gd)return r.RGBA_INTEGER;if(n===rc||n===sc||n===oc||n===ac)if(o===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===rc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===rc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ac)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eh||n===Ah||n===Ch||n===Rh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Eh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ah)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ch)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ph||n===Dh||n===Lh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ph||n===Dh)return o===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Lh)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ih||n===Fh||n===Uh||n===Nh||n===Oh||n===kh||n===Bh||n===zh||n===Hh||n===Vh||n===Gh||n===Wh||n===qh||n===Xh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ih)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fh)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uh)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nh)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oh)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kh)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bh)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zh)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hh)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vh)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gh)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wh)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qh)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xh)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lc||n===Yh||n===$h)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===lc)return o===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$h)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===X0||n===jh||n===Jh||n===Kh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===lc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===jh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$a?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Gb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wb=`
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

}`;class qb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Kn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Tn({vertexShader:Gb,fragmentShader:Wb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new tr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xb extends Vo{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null;const _=new qb,g=t.getContextAttributes();let p=null,x=null;const y=[],v=[],T=new We;let w=null;const b=new ei;b.viewport=new Dt;const C=new ei;C.viewport=new Dt;const S=[b,C],M=new dy;let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ae=y[Y];return ae===void 0&&(ae=new Tu,y[Y]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Y){let ae=y[Y];return ae===void 0&&(ae=new Tu,y[Y]=ae),ae.getGripSpace()},this.getHand=function(Y){let ae=y[Y];return ae===void 0&&(ae=new Tu,y[Y]=ae),ae.getHandSpace()};function H(Y){const ae=v.indexOf(Y.inputSource);if(ae===-1)return;const ce=y[ae];ce!==void 0&&(ce.update(Y.inputSource,Y.frame,c||o),ce.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",G);for(let Y=0;Y<y.length;Y++){const ae=v[Y];ae!==null&&(v[Y]=null,y[Y].disconnect(ae))}P=null,U=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,i=null,x=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",N),i.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(T),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,re=null,_e=null;g.depth&&(_e=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=g.stencil?Ja:ja,re=g.stencil?$a:Us);const Ve={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Ve),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Ns(d.textureWidth,d.textureHeight,{format:Hi,type:ir,depthTexture:new og(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ce={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ns(f.framebufferWidth,f.framebufferHeight,{format:Hi,type:ir,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Oe.setContext(i),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(Y){for(let ae=0;ae<Y.removed.length;ae++){const ce=Y.removed[ae],re=v.indexOf(ce);re>=0&&(v[re]=null,y[re].disconnect(ce))}for(let ae=0;ae<Y.added.length;ae++){const ce=Y.added[ae];let re=v.indexOf(ce);if(re===-1){for(let Ve=0;Ve<y.length;Ve++)if(Ve>=v.length){v.push(ce),re=Ve;break}else if(v[Ve]===null){v[Ve]=ce,re=Ve;break}if(re===-1)break}const _e=y[re];_e&&_e.connect(ce)}}const W=new I,$=new I;function z(Y,ae,ce){W.setFromMatrixPosition(ae.matrixWorld),$.setFromMatrixPosition(ce.matrixWorld);const re=W.distanceTo($),_e=ae.projectionMatrix.elements,Ve=ce.projectionMatrix.elements,Re=_e[14]/(_e[10]-1),rt=_e[14]/(_e[10]+1),Je=(_e[9]+1)/_e[5],Ee=(_e[9]-1)/_e[5],L=(_e[8]-1)/_e[0],xt=(Ve[8]+1)/Ve[0],qe=Re*L,V=Re*xt,Ce=re/(-L+xt),ct=Ce*-L;if(ae.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ct),Y.translateZ(Ce),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),_e[10]===-1)Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Ne=Re+Ce,R=rt+Ce,E=qe-ct,X=V+(re-ct),ne=Je*rt/R*Ne,ie=Ee*rt/R*Ne;Y.projectionMatrix.makePerspective(E,X,ne,ie,Ne,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function oe(Y,ae){ae===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ae.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ae=Y.near,ce=Y.far;_.texture!==null&&(_.depthNear>0&&(ae=_.depthNear),_.depthFar>0&&(ce=_.depthFar)),M.near=C.near=b.near=ae,M.far=C.far=b.far=ce,(P!==M.near||U!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,U=M.far),b.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,M.layers.mask=b.layers.mask|C.layers.mask;const re=Y.parent,_e=M.cameras;oe(M,re);for(let Ve=0;Ve<_e.length;Ve++)oe(_e[Ve],re);_e.length===2?z(M,b,C):M.projectionMatrix.copy(b.projectionMatrix),D(Y,M,re)};function D(Y,ae,ce){ce===null?Y.matrix.copy(ae.matrixWorld):(Y.matrix.copy(ce.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ae.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Qh*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let me=null;function Le(Y,ae){if(u=ae.getViewerPose(c||o),m=ae,u!==null){const ce=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let re=!1;ce.length!==M.cameras.length&&(M.cameras.length=0,re=!0);for(let Re=0;Re<ce.length;Re++){const rt=ce[Re];let Je=null;if(f!==null)Je=f.getViewport(rt);else{const L=h.getViewSubImage(d,rt);Je=L.viewport,Re===0&&(e.setRenderTargetTextures(x,L.colorTexture,L.depthStencilTexture),e.setRenderTarget(x))}let Ee=S[Re];Ee===void 0&&(Ee=new ei,Ee.layers.enable(Re),Ee.viewport=new Dt,S[Re]=Ee),Ee.matrix.fromArray(rt.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(rt.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Je.x,Je.y,Je.width,Je.height),Re===0&&(M.matrix.copy(Ee.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),re===!0&&M.cameras.push(Ee)}const _e=i.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const Re=h.getDepthInformation(ce[0]);Re&&Re.isValid&&Re.texture&&_.init(e,Re,i.renderState)}}for(let ce=0;ce<y.length;ce++){const re=v[ce],_e=y[ce];re!==null&&_e!==void 0&&_e.update(re,ae,c||o)}me&&me(Y,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),m=null}const Oe=new fg;Oe.setAnimationLoop(Le),this.setAnimationLoop=function(Y){me=Y},this.dispose=function(){}}}const us=new rr,Yb=new Ut;function $b(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,eg(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===oi&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===oi&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,v=x.envMapRotation;y&&(g.envMap.value=y,us.copy(v),us.x*=-1,us.y*=-1,us.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),g.envMapRotation.value.setFromMatrix4(Yb.makeRotationFromEuler(us)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===oi&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jb(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(m(x),v=u(x),i[x.id]=v,x.addEventListener("dispose",g));const T=y.program;n.updateUBOMapping(x,T);const w=e.render.frame;s[x.id]!==w&&(d(x),s[x.id]=w)}function u(x){const y=h();x.__bindingPointIndex=y;const v=r.createBuffer(),T=x.__size,w=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,T,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=i[x.id],v=x.uniforms,T=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,b=v.length;w<b;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,M=C.length;S<M;S++){const P=C[S];if(f(P,w,S,T)===!0){const U=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let N=0;for(let G=0;G<H.length;G++){const W=H[G],$=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,U+N,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,N),N+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,y,v,T){const w=x.value,b=y+"_"+v;if(T[b]===void 0)return typeof w=="number"||typeof w=="boolean"?T[b]=w:T[b]=w.clone(),!0;{const C=T[b];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return T[b]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function m(x){const y=x.uniforms;let v=0;const T=16;for(let b=0,C=y.length;b<C;b++){const S=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,P=S.length;M<P;M++){const U=S[M],H=Array.isArray(U.value)?U.value:[U.value];for(let N=0,G=H.length;N<G;N++){const W=H[N],$=_(W),z=v%T,oe=z%$.boundary,D=z+oe;v+=oe,D!==0&&T-D<$.storage&&(v+=T-D),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=$.storage}}}const w=v%T;return w>0&&(v+=T-w),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class vg{constructor(e={}){const{canvas:t=px(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$r,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=Ai;let w=0,b=0,C=null,S=-1,M=null;const P=new Dt,U=new Dt;let H=null;const N=new Ze(0);let G=0,W=t.width,$=t.height,z=1,oe=null,D=null;const me=new Dt(0,0,W,$),Le=new Dt(0,0,W,$);let Oe=!1;const Y=new Yd;let ae=!1,ce=!1;const re=new Ut,_e=new Ut,Ve=new I,Re=new Dt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Ee(){return C===null?z:1}let L=n;function xt(A,B){return t.getContext(A,B)}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Od}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",se,!1),L===null){const B="webgl2";if(L=xt(B,A),L===null)throw xt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let qe,V,Ce,ct,Ne,R,E,X,ne,ie,Z,ve,he,Se,Ge,le,pe,ze,He,be,it,Ke,at,F;function J(){qe=new oS(L),qe.init(),Ke=new Vb(L,qe),V=new QM(L,qe,e,Ke),Ce=new zb(L,qe),V.reverseDepthBuffer&&d&&Ce.buffers.depth.setReversed(!0),ct=new cS(L),Ne=new Ab,R=new Hb(L,qe,Ce,Ne,V,Ke,ct),E=new tS(v),X=new sS(v),ne=new my(L),at=new KM(L,ne),ie=new aS(L,ne,ct,at),Z=new hS(L,ie,ne,ct),He=new uS(L,V,R),le=new eS(Ne),ve=new Eb(v,E,X,qe,V,at,le),he=new $b(v,Ne),Se=new Rb,Ge=new Ub(qe),ze=new JM(v,E,X,Ce,Z,f,l),pe=new kb(v,Z,V),F=new jb(L,ct,V,Ce),be=new ZM(L,qe,ct),it=new lS(L,qe,ct),ct.programs=ve.programs,v.capabilities=V,v.extensions=qe,v.properties=Ne,v.renderLists=Se,v.shadowMap=pe,v.state=Ce,v.info=ct}J();const O=new Xb(v,L);this.xr=O,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=qe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=qe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(W,$,!1))},this.getSize=function(A){return A.set(W,$)},this.setSize=function(A,B,K=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,$=B,t.width=Math.floor(A*z),t.height=Math.floor(B*z),K===!0&&(t.style.width=A+"px",t.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(W*z,$*z).floor()},this.setDrawingBufferSize=function(A,B,K){W=A,$=B,z=K,t.width=Math.floor(A*K),t.height=Math.floor(B*K),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(me)},this.setViewport=function(A,B,K,j){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,B,K,j),Ce.viewport(P.copy(me).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(Le)},this.setScissor=function(A,B,K,j){A.isVector4?Le.set(A.x,A.y,A.z,A.w):Le.set(A,B,K,j),Ce.scissor(U.copy(Le).multiplyScalar(z).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(A){Ce.setScissorTest(Oe=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){D=A},this.getClearColor=function(A){return A.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,K=!0){let j=0;if(A){let k=!1;if(C!==null){const ue=C.texture.format;k=ue===Gd||ue===Vd||ue===Hd}if(k){const ue=C.texture.type,Te=ue===ir||ue===Us||ue===Ya||ue===$a||ue===Bd||ue===zd,Ue=ze.getClearColor(),Fe=ze.getClearAlpha(),je=Ue.r,Qe=Ue.g,Ye=Ue.b;Te?(m[0]=je,m[1]=Qe,m[2]=Ye,m[3]=Fe,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=je,_[1]=Qe,_[2]=Ye,_[3]=Fe,L.clearBufferiv(L.COLOR,0,_))}else j|=L.COLOR_BUFFER_BIT}B&&(j|=L.DEPTH_BUFFER_BIT),K&&(j|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ze.dispose(),Se.dispose(),Ge.dispose(),Ne.dispose(),E.dispose(),X.dispose(),Z.dispose(),at.dispose(),F.dispose(),ve.dispose(),O.dispose(),O.removeEventListener("sessionstart",te),O.removeEventListener("sessionend",xe),ge.stop()};function q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=ct.autoReset,B=pe.enabled,K=pe.autoUpdate,j=pe.needsUpdate,k=pe.type;J(),ct.autoReset=A,pe.enabled=B,pe.autoUpdate=K,pe.needsUpdate=j,pe.type=k}function se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ie(A){const B=A.target;B.removeEventListener("dispose",Ie),nt(B)}function nt(A){ut(A),Ne.remove(A)}function ut(A){const B=Ne.get(A).programs;B!==void 0&&(B.forEach(function(K){ve.releaseProgram(K)}),A.isShaderMaterial&&ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,K,j,k,ue){B===null&&(B=rt);const Te=k.isMesh&&k.matrixWorld.determinant()<0,Ue=fn(A,B,K,j,k);Ce.setMaterial(j,Te);let Fe=K.index,je=1;if(j.wireframe===!0){if(Fe=ie.getWireframeAttribute(K),Fe===void 0)return;je=2}const Qe=K.drawRange,Ye=K.attributes.position;let lt=Qe.start*je,wt=(Qe.start+Qe.count)*je;ue!==null&&(lt=Math.max(lt,ue.start*je),wt=Math.min(wt,(ue.start+ue.count)*je)),Fe!==null?(lt=Math.max(lt,0),wt=Math.min(wt,Fe.count)):Ye!=null&&(lt=Math.max(lt,0),wt=Math.min(wt,Ye.count));const Zt=wt-lt;if(Zt<0||Zt===1/0)return;at.setup(k,j,Ue,K,Fe);let qt,St=be;if(Fe!==null&&(qt=ne.get(Fe),St=it,St.setIndex(qt)),k.isMesh)j.wireframe===!0?(Ce.setLineWidth(j.wireframeLinewidth*Ee()),St.setMode(L.LINES)):St.setMode(L.TRIANGLES);else if(k.isLine){let tt=j.linewidth;tt===void 0&&(tt=1),Ce.setLineWidth(tt*Ee()),k.isLineSegments?St.setMode(L.LINES):k.isLineLoop?St.setMode(L.LINE_LOOP):St.setMode(L.LINE_STRIP)}else k.isPoints?St.setMode(L.POINTS):k.isSprite&&St.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)cc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))St.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const tt=k._multiDrawStarts,bn=k._multiDrawCounts,Tt=k._multiDrawCount,Ui=Fe?ne.get(Fe).bytesPerElement:1,Bs=Ne.get(j).currentProgram.getUniforms();for(let li=0;li<Tt;li++)Bs.setValue(L,"_gl_DrawID",li),St.render(tt[li]/Ui,bn[li])}else if(k.isInstancedMesh)St.renderInstances(lt,Zt,k.count);else if(K.isInstancedBufferGeometry){const tt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,bn=Math.min(K.instanceCount,tt);St.renderInstances(lt,Zt,bn)}else St.render(lt,Zt)};function fe(A,B,K){A.transparent===!0&&A.side===$i&&A.forceSinglePass===!1?(A.side=oi,A.needsUpdate=!0,ht(A,B,K),A.side=Qr,A.needsUpdate=!0,ht(A,B,K),A.side=$i):ht(A,B,K)}this.compile=function(A,B,K=null){K===null&&(K=A),p=Ge.get(K),p.init(B),y.push(p),K.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),A!==K&&A.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const j=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ue=k.material;if(ue)if(Array.isArray(ue))for(let Te=0;Te<ue.length;Te++){const Ue=ue[Te];fe(Ue,K,k),j.add(Ue)}else fe(ue,K,k),j.add(ue)}),p=y.pop(),j},this.compileAsync=function(A,B,K=null){const j=this.compile(A,B,K);return new Promise(k=>{function ue(){if(j.forEach(function(Te){Ne.get(Te).currentProgram.isReady()&&j.delete(Te)}),j.size===0){k(A);return}setTimeout(ue,10)}qe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let ye=null;function Q(A){ye&&ye(A)}function te(){ge.stop()}function xe(){ge.start()}const ge=new fg;ge.setAnimationLoop(Q),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(A){ye=A,O.setAnimationLoop(A),A===null?ge.stop():ge.start()},O.addEventListener("sessionstart",te),O.addEventListener("sessionend",xe),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(B),B=O.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,B,C),p=Ge.get(A,y.length),p.init(B),y.push(p),_e.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Y.setFromProjectionMatrix(_e),ce=this.localClippingEnabled,ae=le.init(this.clippingPlanes,ce),g=Se.get(A,x.length),g.init(),x.push(g),O.enabled===!0&&O.isPresenting===!0){const ue=v.xr.getDepthSensingMesh();ue!==null&&ke(ue,B,-1/0,v.sortObjects)}ke(A,B,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(oe,D),Je=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,Je&&ze.addToRenderList(g,A),this.info.render.frame++,ae===!0&&le.beginShadows();const K=p.state.shadowsArray;pe.render(K,A,B),ae===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,k=g.transmissive;if(p.setupLights(),B.isArrayCamera){const ue=B.cameras;if(k.length>0)for(let Te=0,Ue=ue.length;Te<Ue;Te++){const Fe=ue[Te];Me(j,k,A,Fe)}Je&&ze.render(A);for(let Te=0,Ue=ue.length;Te<Ue;Te++){const Fe=ue[Te];De(g,A,Fe,Fe.viewport)}}else k.length>0&&Me(j,k,A,B),Je&&ze.render(A),De(g,A,B);C!==null&&b===0&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(v,A,B),at.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],ae===!0&&le.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function ke(A,B,K,j){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){j&&Re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_e);const Te=Z.update(A),Ue=A.material;Ue.visible&&g.push(A,Te,Ue,K,Re.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const Te=Z.update(A),Ue=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Re.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Re.copy(Te.boundingSphere.center)),Re.applyMatrix4(A.matrixWorld).applyMatrix4(_e)),Array.isArray(Ue)){const Fe=Te.groups;for(let je=0,Qe=Fe.length;je<Qe;je++){const Ye=Fe[je],lt=Ue[Ye.materialIndex];lt&&lt.visible&&g.push(A,Te,lt,K,Re.z,Ye)}}else Ue.visible&&g.push(A,Te,Ue,K,Re.z,null)}}const ue=A.children;for(let Te=0,Ue=ue.length;Te<Ue;Te++)ke(ue[Te],B,K,j)}function De(A,B,K,j){const k=A.opaque,ue=A.transmissive,Te=A.transparent;p.setupLightsView(K),ae===!0&&le.setGlobalState(v.clippingPlanes,K),j&&Ce.viewport(P.copy(j)),k.length>0&&we(k,B,K),ue.length>0&&we(ue,B,K),Te.length>0&&we(Te,B,K),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Me(A,B,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Ns(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?nl:ir,minFilter:Ss,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const ue=p.state.transmissionRenderTarget[j.id],Te=j.viewport||P;ue.setSize(Te.z*v.transmissionResolutionScale,Te.w*v.transmissionResolutionScale);const Ue=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(N),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),Je&&ze.render(K);const Fe=v.toneMapping;v.toneMapping=$r;const je=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),ae===!0&&le.setGlobalState(v.clippingPlanes,j),we(A,K,j),R.updateMultisampleRenderTarget(ue),R.updateRenderTargetMipmap(ue),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ye=0,lt=B.length;Ye<lt;Ye++){const wt=B[Ye],Zt=wt.object,qt=wt.geometry,St=wt.material,tt=wt.group;if(St.side===$i&&Zt.layers.test(j.layers)){const bn=St.side;St.side=oi,St.needsUpdate=!0,st(Zt,K,j,qt,St,tt),St.side=bn,St.needsUpdate=!0,Qe=!0}}Qe===!0&&(R.updateMultisampleRenderTarget(ue),R.updateRenderTargetMipmap(ue))}v.setRenderTarget(Ue),v.setClearColor(N,G),je!==void 0&&(j.viewport=je),v.toneMapping=Fe}function we(A,B,K){const j=B.isScene===!0?B.overrideMaterial:null;for(let k=0,ue=A.length;k<ue;k++){const Te=A[k],Ue=Te.object,Fe=Te.geometry,je=Te.group;let Qe=Te.material;Qe.allowOverride===!0&&j!==null&&(Qe=j),Ue.layers.test(K.layers)&&st(Ue,B,K,Fe,Qe,je)}}function st(A,B,K,j,k,ue){A.onBeforeRender(v,B,K,j,k,ue),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(v,B,K,j,A,ue),k.transparent===!0&&k.side===$i&&k.forceSinglePass===!1?(k.side=oi,k.needsUpdate=!0,v.renderBufferDirect(K,B,j,k,A,ue),k.side=Qr,k.needsUpdate=!0,v.renderBufferDirect(K,B,j,k,A,ue),k.side=$i):v.renderBufferDirect(K,B,j,k,A,ue),A.onAfterRender(v,B,K,j,k,ue)}function ht(A,B,K){B.isScene!==!0&&(B=rt);const j=Ne.get(A),k=p.state.lights,ue=p.state.shadowsArray,Te=k.state.version,Ue=ve.getParameters(A,k.state,ue,B,K),Fe=ve.getProgramCacheKey(Ue);let je=j.programs;j.environment=A.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(A.isMeshStandardMaterial?X:E).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,je===void 0&&(A.addEventListener("dispose",Ie),je=new Map,j.programs=je);let Qe=je.get(Fe);if(Qe!==void 0){if(j.currentProgram===Qe&&j.lightsStateVersion===Te)return dt(A,Ue),Qe}else Ue.uniforms=ve.getUniforms(A),A.onBeforeCompile(Ue,v),Qe=ve.acquireProgram(Ue,Fe),je.set(Fe,Qe),j.uniforms=Ue.uniforms;const Ye=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=le.uniform),dt(A,Ue),j.needsLights=pn(A),j.lightsStateVersion=Te,j.needsLights&&(Ye.ambientLightColor.value=k.state.ambient,Ye.lightProbe.value=k.state.probe,Ye.directionalLights.value=k.state.directional,Ye.directionalLightShadows.value=k.state.directionalShadow,Ye.spotLights.value=k.state.spot,Ye.spotLightShadows.value=k.state.spotShadow,Ye.rectAreaLights.value=k.state.rectArea,Ye.ltc_1.value=k.state.rectAreaLTC1,Ye.ltc_2.value=k.state.rectAreaLTC2,Ye.pointLights.value=k.state.point,Ye.pointLightShadows.value=k.state.pointShadow,Ye.hemisphereLights.value=k.state.hemi,Ye.directionalShadowMap.value=k.state.directionalShadowMap,Ye.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ye.spotShadowMap.value=k.state.spotShadowMap,Ye.spotLightMatrix.value=k.state.spotLightMatrix,Ye.spotLightMap.value=k.state.spotLightMap,Ye.pointShadowMap.value=k.state.pointShadowMap,Ye.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=Qe,j.uniformsList=null,Qe}function ot(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=uc.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function dt(A,B){const K=Ne.get(A);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function fn(A,B,K,j,k){B.isScene!==!0&&(B=rt),R.resetTextureUnits();const ue=B.fog,Te=j.isMeshStandardMaterial?B.environment:null,Ue=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Bo,Fe=(j.isMeshStandardMaterial?X:E).get(j.envMap||Te),je=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Qe=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ye=!!K.morphAttributes.position,lt=!!K.morphAttributes.normal,wt=!!K.morphAttributes.color;let Zt=$r;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Zt=v.toneMapping);const qt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,St=qt!==void 0?qt.length:0,tt=Ne.get(j),bn=p.state.lights;if(ae===!0&&(ce===!0||A!==M)){const zn=A===M&&j.id===S;le.setState(j,A,zn)}let Tt=!1;j.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==bn.state.version||tt.outputColorSpace!==Ue||k.isBatchedMesh&&tt.batching===!1||!k.isBatchedMesh&&tt.batching===!0||k.isBatchedMesh&&tt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&tt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&tt.instancing===!1||!k.isInstancedMesh&&tt.instancing===!0||k.isSkinnedMesh&&tt.skinning===!1||!k.isSkinnedMesh&&tt.skinning===!0||k.isInstancedMesh&&tt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&tt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&tt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&tt.instancingMorph===!1&&k.morphTexture!==null||tt.envMap!==Fe||j.fog===!0&&tt.fog!==ue||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==le.numPlanes||tt.numIntersection!==le.numIntersection)||tt.vertexAlphas!==je||tt.vertexTangents!==Qe||tt.morphTargets!==Ye||tt.morphNormals!==lt||tt.morphColors!==wt||tt.toneMapping!==Zt||tt.morphTargetsCount!==St)&&(Tt=!0):(Tt=!0,tt.__version=j.version);let Ui=tt.currentProgram;Tt===!0&&(Ui=ht(j,B,k));let Bs=!1,li=!1,Xo=!1;const kt=Ui.getUniforms(),Mi=tt.uniforms;if(Ce.useProgram(Ui.program)&&(Bs=!0,li=!0,Xo=!0),j.id!==S&&(S=j.id,li=!0),Bs||M!==A){Ce.buffers.depth.getReversed()?(re.copy(A.projectionMatrix),gx(re),_x(re),kt.setValue(L,"projectionMatrix",re)):kt.setValue(L,"projectionMatrix",A.projectionMatrix),kt.setValue(L,"viewMatrix",A.matrixWorldInverse);const Zn=kt.map.cameraPosition;Zn!==void 0&&Zn.setValue(L,Ve.setFromMatrixPosition(A.matrixWorld)),V.logarithmicDepthBuffer&&kt.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&kt.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,li=!0,Xo=!0)}if(k.isSkinnedMesh){kt.setOptional(L,k,"bindMatrix"),kt.setOptional(L,k,"bindMatrixInverse");const zn=k.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),kt.setValue(L,"boneTexture",zn.boneTexture,R))}k.isBatchedMesh&&(kt.setOptional(L,k,"batchingTexture"),kt.setValue(L,"batchingTexture",k._matricesTexture,R),kt.setOptional(L,k,"batchingIdTexture"),kt.setValue(L,"batchingIdTexture",k._indirectTexture,R),kt.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&kt.setValue(L,"batchingColorTexture",k._colorsTexture,R));const Si=K.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&He.update(k,K,Ui),(li||tt.receiveShadow!==k.receiveShadow)&&(tt.receiveShadow=k.receiveShadow,kt.setValue(L,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Mi.envMap.value=Fe,Mi.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&B.environment!==null&&(Mi.envMapIntensity.value=B.environmentIntensity),li&&(kt.setValue(L,"toneMappingExposure",v.toneMappingExposure),tt.needsLights&&At(Mi,Xo),ue&&j.fog===!0&&he.refreshFogUniforms(Mi,ue),he.refreshMaterialUniforms(Mi,j,z,$,p.state.transmissionRenderTarget[A.id]),uc.upload(L,ot(tt),Mi,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(uc.upload(L,ot(tt),Mi,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&kt.setValue(L,"center",k.center),kt.setValue(L,"modelViewMatrix",k.modelViewMatrix),kt.setValue(L,"normalMatrix",k.normalMatrix),kt.setValue(L,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const zn=j.uniformsGroups;for(let Zn=0,Hc=zn.length;Zn<Hc;Zn++){const ns=zn[Zn];F.update(ns,Ui),F.bind(ns,Ui)}}return Ui}function At(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function pn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,B,K){const j=Ne.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Ne.get(A.texture).__webglTexture=B,Ne.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:K,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){const K=Ne.get(A);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0};const on=L.createFramebuffer();this.setRenderTarget=function(A,B=0,K=0){C=A,w=B,b=K;let j=!0,k=null,ue=!1,Te=!1;if(A){const Fe=Ne.get(A);if(Fe.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(L.FRAMEBUFFER,null),j=!1;else if(Fe.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(Fe.__hasExternalTextures)R.rebindTextures(A,Ne.get(A.texture).__webglTexture,Ne.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ye=A.depthTexture;if(Fe.__boundDepthTexture!==Ye){if(Ye!==null&&Ne.has(Ye)&&(A.width!==Ye.image.width||A.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Te=!0);const Qe=Ne.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[B])?k=Qe[B][K]:k=Qe[B],ue=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?k=Ne.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?k=Qe[K]:k=Qe,P.copy(A.viewport),U.copy(A.scissor),H=A.scissorTest}else P.copy(me).multiplyScalar(z).floor(),U.copy(Le).multiplyScalar(z).floor(),H=Oe;if(K!==0&&(k=on),Ce.bindFramebuffer(L.FRAMEBUFFER,k)&&j&&Ce.drawBuffers(A,k),Ce.viewport(P),Ce.scissor(U),Ce.setScissorTest(H),ue){const Fe=Ne.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe.__webglTexture,K)}else if(Te){const Fe=Ne.get(A.texture),je=B;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.__webglTexture,K,je)}else if(A!==null&&K!==0){const Fe=Ne.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Fe.__webglTexture,K)}S=-1},this.readRenderTargetPixels=function(A,B,K,j,k,ue,Te){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ue=Ue[Te]),Ue){Ce.bindFramebuffer(L.FRAMEBUFFER,Ue);try{const Fe=A.texture,je=Fe.format,Qe=Fe.type;if(!V.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-j&&K>=0&&K<=A.height-k&&L.readPixels(B,K,j,k,Ke.convert(je),Ke.convert(Qe),ue)}finally{const Fe=C!==null?Ne.get(C).__webglFramebuffer:null;Ce.bindFramebuffer(L.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(A,B,K,j,k,ue,Te){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ue=Ue[Te]),Ue)if(B>=0&&B<=A.width-j&&K>=0&&K<=A.height-k){Ce.bindFramebuffer(L.FRAMEBUFFER,Ue);const Fe=A.texture,je=Fe.format,Qe=Fe.type;if(!V.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ye),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),L.readPixels(B,K,j,k,Ke.convert(je),Ke.convert(Qe),0);const lt=C!==null?Ne.get(C).__webglFramebuffer:null;Ce.bindFramebuffer(L.FRAMEBUFFER,lt);const wt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await mx(L,wt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ye),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue),L.deleteBuffer(Ye),L.deleteSync(wt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,K=0){const j=Math.pow(2,-K),k=Math.floor(A.image.width*j),ue=Math.floor(A.image.height*j),Te=B!==null?B.x:0,Ue=B!==null?B.y:0;R.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,Te,Ue,k,ue),Ce.unbindTexture()};const Ot=L.createFramebuffer(),Lt=L.createFramebuffer();this.copyTextureToTexture=function(A,B,K=null,j=null,k=0,ue=null){ue===null&&(k!==0?(cc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=k,k=0):ue=0);let Te,Ue,Fe,je,Qe,Ye,lt,wt,Zt;const qt=A.isCompressedTexture?A.mipmaps[ue]:A.image;if(K!==null)Te=K.max.x-K.min.x,Ue=K.max.y-K.min.y,Fe=K.isBox3?K.max.z-K.min.z:1,je=K.min.x,Qe=K.min.y,Ye=K.isBox3?K.min.z:0;else{const Si=Math.pow(2,-k);Te=Math.floor(qt.width*Si),Ue=Math.floor(qt.height*Si),A.isDataArrayTexture?Fe=qt.depth:A.isData3DTexture?Fe=Math.floor(qt.depth*Si):Fe=1,je=0,Qe=0,Ye=0}j!==null?(lt=j.x,wt=j.y,Zt=j.z):(lt=0,wt=0,Zt=0);const St=Ke.convert(B.format),tt=Ke.convert(B.type);let bn;B.isData3DTexture?(R.setTexture3D(B,0),bn=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(R.setTexture2DArray(B,0),bn=L.TEXTURE_2D_ARRAY):(R.setTexture2D(B,0),bn=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const Tt=L.getParameter(L.UNPACK_ROW_LENGTH),Ui=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Bs=L.getParameter(L.UNPACK_SKIP_PIXELS),li=L.getParameter(L.UNPACK_SKIP_ROWS),Xo=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,qt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,qt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,je),L.pixelStorei(L.UNPACK_SKIP_ROWS,Qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ye);const kt=A.isDataArrayTexture||A.isData3DTexture,Mi=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){const Si=Ne.get(A),zn=Ne.get(B),Zn=Ne.get(Si.__renderTarget),Hc=Ne.get(zn.__renderTarget);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,Zn.__webglFramebuffer),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,Hc.__webglFramebuffer);for(let ns=0;ns<Fe;ns++)kt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ne.get(A).__webglTexture,k,Ye+ns),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ne.get(B).__webglTexture,ue,Zt+ns)),L.blitFramebuffer(je,Qe,Te,Ue,lt,wt,Te,Ue,L.DEPTH_BUFFER_BIT,L.NEAREST);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||A.isRenderTargetTexture||Ne.has(A)){const Si=Ne.get(A),zn=Ne.get(B);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,Ot),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,Lt);for(let Zn=0;Zn<Fe;Zn++)kt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Si.__webglTexture,k,Ye+Zn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Si.__webglTexture,k),Mi?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,zn.__webglTexture,ue,Zt+Zn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,zn.__webglTexture,ue),k!==0?L.blitFramebuffer(je,Qe,Te,Ue,lt,wt,Te,Ue,L.COLOR_BUFFER_BIT,L.NEAREST):Mi?L.copyTexSubImage3D(bn,ue,lt,wt,Zt+Zn,je,Qe,Te,Ue):L.copyTexSubImage2D(bn,ue,lt,wt,je,Qe,Te,Ue);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Mi?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(bn,ue,lt,wt,Zt,Te,Ue,Fe,St,tt,qt.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(bn,ue,lt,wt,Zt,Te,Ue,Fe,St,qt.data):L.texSubImage3D(bn,ue,lt,wt,Zt,Te,Ue,Fe,St,tt,qt):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ue,lt,wt,Te,Ue,St,tt,qt.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ue,lt,wt,qt.width,qt.height,St,qt.data):L.texSubImage2D(L.TEXTURE_2D,ue,lt,wt,Te,Ue,St,tt,qt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Tt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ui),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Bs),L.pixelStorei(L.UNPACK_SKIP_ROWS,li),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Xo),ue===0&&B.generateMipmaps&&L.generateMipmap(bn),Ce.unbindTexture()},this.copyTextureToTexture3D=function(A,B,K=null,j=null,k=0){return cc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,B,K,j,k)},this.initRenderTarget=function(A){Ne.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),Ce.unbindTexture()},this.resetState=function(){w=0,b=0,C=null,Ce.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}const In=Math.PI*2,xg=Math.tan(35*Math.PI/360),Mt=(r,e,t)=>r+(e-r)*t,Jb=[-1.3,.05,0],vn=["cloud","name","sphere","terrain","rapport","devis","sms","voice","wave","radar","switch","server","invoice","film","dim","caps","path","end"],wn=Object.fromEntries(vn.map((r,e)=>[r,e]));function Kb(r){let e=r>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Pn(r,e){const t=new Float32Array(r*3),n=new Float32Array(r*2),i=Kb(e);let s=0;const o=c=>(i()-.5)*c,a=(c,u,h,d=0,f=0)=>{s>=r||(t[s*3]=c,t[s*3+1]=u,t[s*3+2]=h,n[s*2]=d,n[s*2+1]=f,s++)};return{rnd:i,j:o,put:a,n:c=>Math.max(1,Math.floor(r*c)),line(c,u,h,d=0,f=.012,m=0,_=1){for(let g=0;g<c;g++){const p=i();a(Mt(u[0],h[0],p)+o(f),Mt(u[1],h[1],p)+o(f),Mt(u[2],h[2],p)+o(f),d,Mt(m,_,p))}},curve(c,u,h=0,d=.012,f=0,m=1){for(let _=0;_<c;_++){const g=i(),p=u(g);a(p[0]+o(d),p[1]+o(d),p[2]+o(d),h,Mt(f,m,g))}},ring(c,u,h,d="xy",f=0,m=.012,_=null){for(let g=0;g<c;g++){const p=i()*In,x=Math.cos(p)*h,y=Math.sin(p)*h,v=d==="xy"?[x,y,0]:d==="xz"?[x,0,y]:[0,x,y];a(u[0]+v[0]+o(m),u[1]+v[1]+o(m),u[2]+v[2]+o(m),f,_??p/In)}},box(c,u,h,d=0,f=.008,m=0){for(let _=0;_<c;_++){const g=Math.floor(i()*3),p=i()-.5,x=i()<.5?-.5:.5,y=i()<.5?-.5:.5,v=g===0?[p,x,y]:g===1?[x,p,y]:[x,y,p];a(u[0]+v[0]*h[0]+o(f),u[1]+v[1]*h[1]+o(f),u[2]+v[2]*h[2]+o(f),d,m)}},shell(c,u,h,d=0,f=0){for(let m=0;m<c;m++){const _=i()*2-1,g=i()*In,p=Math.sqrt(1-_*_);a(u[0]+Math.cos(g)*p*h,u[1]+_*h,u[2]+Math.sin(g)*p*h,d,f)}},done(c=[5.2,3.2,2.6]){for(;s<r;)a(o(c[0]*2),o(c[1]*2),o(c[2]*2)-.6,0,-1);for(let u=r-1;u>0;u--){const h=Math.floor(i()*(u+1));for(let d=0;d<3;d++){const f=t[u*3+d];t[u*3+d]=t[h*3+d],t[h*3+d]=f}for(let d=0;d<2;d++){const f=n[u*2+d];n[u*2+d]=n[h*2+d],n[h*2+d]=f}}return{pos:t,meta:n}}}}function ra(r,e,t,n){const i=e-2*n,s=t-2*n,o=Math.PI*n/2,a=Math.PI/2,l=(h,d,f)=>m=>[h+Math.cos(f-m*a)*n,d+Math.sin(f-m*a)*n],c=[[i,h=>[-i/2+h*i,t/2]],[o,l(i/2,s/2,a)],[s,h=>[e/2,s/2-h*s]],[o,l(i/2,-s/2,0)],[i,h=>[i/2-h*i,-t/2]],[o,l(-i/2,-s/2,-a)],[s,h=>[-e/2,-s/2+h*s]],[o,l(-i/2,s/2,Math.PI)]];let u=r*(2*i+2*s+4*o);for(const[h,d]of c){if(u<=h)return d(h>0?u/h:0);u-=h}return c[0][1](0)}const yg={cloud(r){const e=Pn(r,11);for(let t=0;t<r;t++){const n=2.6+Math.pow(e.rnd(),.6)*6,i=e.rnd()*In;e.put(Math.cos(i)*n,e.j(3.4),Math.sin(i)*n*.7-1.2,e.rnd()>.8?1:0,0)}return e.done()},name(r){const n=document.createElement("canvas");n.width=1600,n.height=720;const i=n.getContext("2d",{willReadFrequently:!0}),s=T=>{i.font=`800 ${T}px "Inter Tight Variable", "Inter Tight", system-ui, sans-serif`;try{i.letterSpacing=`${-T*.055}px`}catch{}};let o=300;s(o);const a=Math.max(i.measureText("JOHANNE").width,i.measureText("PAMEGNE.").width);o=o*1600*.95/a,s(o);const l=Math.max(i.measureText("JOHANNE").width,i.measureText("PAMEGNE.").width),c=o*.72,u=o*.86,h=(720-(u+c))/2,d=(1600-l)/2;i.textBaseline="alphabetic",i.fillStyle="#00ff00",i.fillText("JOHANNE",d,h+c);const f=i.measureText("PAMEGNE").width,m=i.measureText(".").width,_=d+l-(f+m);i.fillText("PAMEGNE",_,h+c+u),i.fillStyle="#ff0000",i.fillText(".",_+f,h+c+u);const g=i.getImageData(0,0,1600,720).data,p=[];for(let T=0;T<720;T+=2)for(let w=0;w<1600;w+=2){const b=(T*1600+w)*4;g[b+3]>128&&p.push(w,T,g[b]>128?1:0)}if(p.length<300)return yg.sphere(r);const x=Pn(r,12),y=p.length/3,v=x.n(.94);for(let T=0;T<v;T++){const w=Math.floor(x.rnd()*y)*3;x.put((p[w]+x.j(2)-1600/2)/(1600/2),-(p[w+1]+x.j(2)-720/2)/(1600/2),x.j(.03),p[w+2],0)}return x.done([1.3,.75,.5])},sphere(r){const e=Pn(r,5),t=Math.PI*(3-Math.sqrt(5)),n=1.75;for(let i=0;i<r;i++){const s=1-i/(r-1)*2,o=Math.sqrt(1-s*s),a=t*i;e.put(Math.cos(a)*o*n,s*n,Math.sin(a)*o*n,e.rnd()>.86?1:0,0)}return e.done()},terrain(r){const e=Pn(r,6),t=Math.round(Math.sqrt(r*2.2)),n=r/t;for(let i=0;i<r;i++)e.put((i%t/t-.5)*9.5,-1.15,(Math.floor(i/t)/n-.5)*6.5,e.rnd()>.86?1:0,0);return e.done()},wave(r){const e=Pn(r,21),t=64,n=Math.floor(e.n(.66)/t);for(let i=0;i<t;i++){const s=i/(t-1),o=(s-.5)*3.9;if(Math.abs(o)<.17)continue;const a=.22+.95*Math.exp(-Math.pow(o*.62,2)),l=a*(.3+.7*Math.abs(Math.sin(i*1.7)*Math.cos(i*.63+1.2)));for(let c=0;c<n;c++){const u=Math.floor(e.rnd()*3)-1;e.put(o+e.j(.018),(e.rnd()*2-1)*l*(1-Math.abs(u)*.35),u*.3+e.j(.02),o>0?1:0,s)}}return e.ring(e.n(.1),[0,0,0],1.28,"yz",.5,.015,2),e.ring(e.n(.06),[0,0,0],.92,"yz",1,.012,3),e.done()},sms(r){const e=Pn(r,111),t=1.22,n=2.3,i=.2,s=(c,u,h,d,f,m,_,g,p,x=.008)=>{for(let y=0;y<c;y++){const v=ra(e.rnd(),u,h,d);e.put(f+v[0]+e.j(x),m+v[1]+e.j(x),_+e.j(x),g,p)}};s(e.n(.06),t,n,i,0,0,.06,0,4.1),s(e.n(.045),t,n,i,0,0,-.06,0,4),s(e.n(.035),t-.12,n-.12,i-.05,0,0,.065,0,4.2),e.line(e.n(.006),[-.14,n/2-.12,.07],[.14,n/2-.12,.07],0,.008,4,4),e.line(e.n(.006),[-.2,-n/2+.1,.07],[.2,-n/2+.1,.07],0,.008,4,4),e.shell(e.n(.008),[t/2-.2,n/2-.22,.09],.05,1,1.6);const o=[[1,.8,.27],[0,.6,.2],[1,.84,.44],[0,.28,.18],[1,.72,.24]];let a=n/2-.36;o.forEach(([c,u,h],d)=>{const f=c?t/2-.13-u/2:-t/2+.13+u/2,m=a-h/2,_=1+d*.08,g=c?1:0;s(e.n(.022),u,h,Math.min(.09,h/2),f,m,.08,g,_,.006);const p=Math.max(1,Math.round((h-.08)/.1)),x=Math.floor(e.n(.026)/p);for(let T=0;T<p;T++){const w=p===1?m:m+h/2-.12-T*.1,b=(u-.18)*(p>1&&T===p-1?.55:1),C=f-(u-.18)/2;e.line(x,[C,w,.08],[C+b,w,.08],g,.01,_,_)}const y=c?f+u/2-.06:f-u/2+.06,v=c?1:-1;e.line(e.n(.004),[y,m-h/2,.08],[y+v*.07,m-h/2-.06,.08],g,.008,_,_),a-=h+.1});for(let c=0;c<3;c++)for(let u=0,h=e.n(.045);u<h;u++){const d=e.rnd()*In;e.put(Math.cos(d)+e.j(.012),Math.sin(d)*1.3+e.j(.012),-.3+e.j(.012),.6,2+c*.1)}const l=1.48;e.ring(e.n(.025),[0,0,0],l,"xz",0,.01,3.3);for(let c=0;c<3;c++){const u=.55+c*In/3,h=[Math.cos(u)*l,0,Math.sin(u)*l],d=[-Math.sin(u),0,Math.cos(u)],f=c===1,m=3+c*.1,_=(g,p,x)=>e.put(h[0]+d[0]*g+e.j(.006),p+e.j(.006),h[2]+d[2]*g+e.j(.006),x,m);for(let g=0,p=e.n(.03);g<p;g++){const x=ra(e.rnd(),.58,.2,.1);_(x[0],x[1],f?1:.35)}if(f){for(let p=0,x=e.n(.03);p<x;p++)_((e.rnd()-.5)*.5,(e.rnd()-.5)*.13,1);const g=[[-.09,0],[-.03,-.05],[.09,.06]];for(let p=0,x=e.n(.01);p<x;p++){const y=e.rnd(),v=y<.35?0:1,T=v?(y-.35)/.65:y/.35,w=g[v],b=g[v+1];e.put(h[0]*1.03+d[0]*Mt(w[0],b[0],T),Mt(w[1],b[1],T),h[2]*1.03+d[2]*Mt(w[0],b[0],T),1,m)}}}return e.ring(e.n(.03),[0,-1.5,0],1.7,"xz",0,.012,4),e.done()},rapport(r){const e=Pn(r,151),t=.55,n=.05,i=1.4,s=2.05,o=.04,a=-.5,l=t-.56,c=t+.56,u=[1.18,.95],h=(y,v,T,w,b,C,S,M,P,U=.008)=>{for(let H=0;H<y;H++){const N=ra(e.rnd(),v,T,w);e.put(b+N[0]+e.j(U),C+N[1]+e.j(U),S+e.j(U),M,P)}};h(e.n(.07),i,s,.07,t,n,0,0,5),h(e.n(.028),i,s,.07,t+.1,n-.1,-.16,0,5),e.line(e.n(.012),[l,.9,o],[l+.5,.9,o],0,.022,5.1,5.1),e.line(e.n(.005),[l,.81,o],[l+.26,.81,o],0,.008,5,5),e.line(e.n(.01),[l,.73,o],[c,.73,o],0,.006,5,5),[[-1,.52],[1,.52],[-1,.2],[1,.2]].forEach(([y,v],T)=>{const w=t+y*.29,b=1+T*.1;h(e.n(.014),.52,.27,.04,w,v,o,0,5,.005),e.line(e.n(.004),[w-.2,v+.07,o],[w-.04,v+.07,o],0,.006,5,5),e.line(e.n(.013),[w-.2,v-.04,o],[w+.12,v-.04,o],1,.028,b,b)}),e.line(e.n(.008),[l,-.44,o],[c,-.44,o],0,.005,5,5);const d=[.35,.5,.42,.62,.55,.78,.86,.8],f=y=>{const v=y*7,T=Math.min(6,Math.floor(v)),w=v-T,b=w*w*(3-2*w);return[l+.04+y*1.04,-.42+Mt(d[T],d[T+1],b)*.4,o]};e.curve(e.n(.03),f,1,.012,2,2.5),d.forEach((y,v)=>{const T=f(v/7);for(let w=0,b=e.n(.002);w<b;w++)e.put(T[0]+e.j(.03),T[1]+e.j(.03),o,1,2+v/7*.5)});const m=[[.22,.62],[.08,.5,.82],[.36]];let _=0;[-.56,-.69,-.82].forEach((y,v)=>{const T=(c-l)*(v===2?.7:1),w=m[v].map(b=>b*(c-l));for(let b=0,C=0;b<T;C++){const S=b,M=Math.min(T,b+.05+(C*37+v*11)%7*.016);b=M+.035,!w.some(P=>S<P+.08&&M>P-.08)&&e.line(Math.max(2,Math.round(e.n(.0012)*(M-S)/.1)),[l+S,y,o],[l+M,y,o],0,.01,5,5)}w.forEach(b=>{const C=3+_++*.1;e.line(e.n(.006),[l+b-.065,y,o],[l+b+.065,y,o],1,.018,C,C)})}),e.ring(e.n(.014),[u[0],u[1],o+.03],.17,"xy",1,.008,4),e.ring(e.n(.009),[u[0],u[1],o+.03],.13,"xy",1,.006,4);const g=[[u[0]-.07,u[1]],[u[0]-.02,u[1]-.055],[u[0]+.075,u[1]+.06]];for(let y=0,v=e.n(.009);y<v;y++){const T=e.rnd(),w=T<.35?0:1,b=w?(T-.35)/.65:T/.35,C=g[w],S=g[w+1];e.put(Mt(C[0],S[0],b)+e.j(.008),Mt(C[1],S[1],b)+e.j(.008),o+.04,1,4)}e.ring(e.n(.014),[u[0],u[1],o+.03],.17,"xy",1,.008,4.5);const p=-1.65,x=a-.05;for(let y=0;y<6;y++){const v=.58-y*.2,T=5;for(let w=0,b=e.n(.03);w<b;w++){const C=Math.floor(e.rnd()*T),S=e.rnd()*.62,M=(C+S)/T,P=(C*3+y*2)%7===2;S*9%2.1>1.85||e.put(Mt(p,x,M)+e.j(.006),v+e.j(.02),.1+e.j(.02),P?.15:0,y*.15+M*.14)}}return e.line(e.n(.025),[a,-.62,.1],[a,.74,.1],1,.012,1.75,1.75),e.line(e.n(.004),[a-.08,.74,.1],[a+.08,.74,.1],1,.008,1.75,1.75),e.line(e.n(.004),[a-.08,-.62,.1],[a+.08,-.62,.1],1,.008,1.75,1.75),h(e.n(.012),.42,.14,.03,a-.12,-.98,.1,0,5,.005),e.ring(e.n(.03),[-.1,-1.32,0],1.65,"xz",0,.012,5),e.done()},devis(r){const e=Pn(r,131),t=1.5,n=2.1,i=.05,s=.04,o=(d,f,m,_,g,p,x,y,v,T=.008)=>{for(let w=0;w<d;w++){const b=ra(e.rnd(),f,m,_);e.put(g+b[0]+e.j(T),p+b[1]+e.j(T),x+e.j(T),y,v)}},a=(d,f,m,_,g,p,x,y)=>{for(let v=0;v<d;v++)e.put(Mt(f,m,e.rnd()),Mt(_,g,e.rnd()),p+e.j(.006),x,y)};o(e.n(.075),t,n,.07,0,i,0,0,5),o(e.n(.03),t,n,.07,.1,i-.1,-.16,0,5),a(e.n(.014),-.62,-.44,.8,.96,s,1,5.1),e.line(e.n(.012),[-.34,.92,s],[.04,.92,s],0,.022,5.1,5.1),e.line(e.n(.006),[-.34,.83,s],[-.1,.83,s],0,.008,5,5),e.line(e.n(.006),[.3,.92,s],[.62,.92,s],0,.008,5,5),e.line(e.n(.006),[.38,.84,s],[.62,.84,s],0,.008,5,5),e.line(e.n(.012),[-.62,.71,s],[.62,.71,s],0,.006,5,5),[.62,.48,.66,.4,.56,.5].forEach((d,f)=>{const m=.55-f*.17,_=1+f*.1;e.line(e.n(.02),[-.62,m,s],[-.62+d,m,s],0,.014,_,_),e.line(e.n(.004),[.12,m,s],[.2,m,s],0,.012,_,_),e.line(e.n(.009),[.34,m,s],[.62,m,s],1,.016,_+.05,_+.05)}),e.line(e.n(.012),[.06,-.43,s],[.62,-.43,s],0,.006,1.6,1.6),e.line(e.n(.01),[-.62,-.58,s],[-.3,-.58,s],0,.02,2,2),o(e.n(.024),.6,.2,.05,.34,-.58,s,1,2,.006),e.line(e.n(.016),[.16,-.58,s],[.54,-.58,s],1,.03,2,2),o(e.n(.012),.15,.15,.025,-.52,-.84,s,1,4,.005);const l=[[-.58,-.84],[-.53,-.89],[-.44,-.77]];for(let d=0,f=e.n(.01);d<f;d++){const m=e.rnd(),_=m<.35?0:1,g=_?(m-.35)/.65:m/.35,p=l[_],x=l[_+1];e.put(Mt(p[0],x[0],g)+e.j(.008),Mt(p[1],x[1],g)+e.j(.008),s+.02,1,4)}e.curve(e.n(.016),d=>[-.32+d*.6,-.84+Math.sin(d*15)*.035*(1-d*.5)+d*.03,s],1,.008,4,4);const c=(d,f)=>{const m=1-d,_=[-1.85,.95-f*.13,.5],g=[-1.35,1.3-f*.13,.32],p=[-.82,.4-f*.1,s];return[0,1,2].map(x=>m*m*_[x]+2*m*d*g[x]+d*d*p[x])};for(let d=0;d<3;d++){const f=13+d*3;for(let m=0,_=e.n(.045);m<_;m++){const g=Math.floor(e.rnd()*f),p=(g+e.rnd()*(.45+(g*7+d)%4*.08))/f,x=c(p,d);e.put(x[0]+e.j(.01),x[1]+e.j(.01),x[2]+e.j(.01),(g*5+d)%7===3?1:0,d/3+p*.3)}}const u=[.66,-.58,s-.06],h=(d,f)=>[u[0]+.82*f,u[1]+(1.5-d*.62)*Math.sin(f*Math.PI/2),u[2]+.3*f];for(let d=0;d<3;d++){const f=3+d*.1;for(let m=0,_=e.n(.02);m<_;m++){const g=ra(e.rnd(),.36,.24,.03);e.put(u[0]+g[0]+e.j(.006),u[1]+g[1]+e.j(.006),u[2]+e.j(.006),1,f)}e.line(e.n(.007),[u[0]-.17,u[1]+.11,u[2]],[u[0],u[1]-.02,u[2]],1,.008,f,f),e.line(e.n(.007),[u[0]+.17,u[1]+.11,u[2]],[u[0],u[1]-.02,u[2]],1,.008,f,f);for(let m=0,_=e.n(.012);m<_;m++){const g=(Math.floor(e.rnd()*22)+e.rnd()*.35)/22,p=h(d,.12+g*.88);e.put(p[0]+e.j(.008),p[1]+e.j(.008),p[2]+e.j(.008),.35,5)}}return e.line(e.n(.02),[-.7,0,s+.03],[.7,0,s+.03],1,.01,1.75,1.75),e.ring(e.n(.016),[-.52,-.84,s+.02],.12,"xy",1,.008,4.5),e.ring(e.n(.03),[0,-1.32,0],1.65,"xz",0,.012,5),e.done()},voice(r){const e=Pn(r,101),t=Jb,n=.34;e.shell(e.n(.05),t,n,1,2),e.shell(e.n(.025),t,n*.55,1,2);for(let x=0;x<3;x++)e.curve(e.n(.045),w=>{const b=Mt(-.9,.9,w);return[t[0]+Math.cos(b)*.56,t[1]+Math.sin(b)*.56,t[2]]},0,.014,1+x*.15,1+x*.15);const i=[.9,-.05,0],s=1.7,o=1.6,a=i[1]+o/2;e.box(e.n(.07),i,[s,o,.12],0,.008,4),e.line(e.n(.018),[i[0]-s/2,a-.3,.06],[i[0]+s/2,a-.3,.06],0,.008,4,4),[-.45,.45].forEach(x=>e.ring(e.n(.012),[i[0]+x,a,0],.09,"yz",1,.008,4));const l=i[0]-s/2+.07,c=a-.37,u=(s-.14)/5,h=(c-(i[1]-o/2+.07))/4;for(let x=0;x<5;x++)e.line(e.n(.006),[l+u*(x+.5)-.07,a-.15,.06],[l+u*(x+.5)+.07,a-.15,.06],0,.008,4,4);let d=null;for(let x=0;x<5;x++)for(let y=0;y<4;y++){const v=l+u*(x+.5),T=c-h*(y+.5),w=x===2&&y===1;w&&(d=[v,T,.04]),e.box(e.n(w?.02:.011),[v,T,.03],[u*.78,h*.72,.03],w?1:0,.006,w?3:x*.18+y*.03)}for(let x=0,y=e.n(.05);x<y;x++)e.put(d[0]+(e.rnd()-.5)*u*.74,d[1]+(e.rnd()-.5)*h*.68,d[2]+e.j(.03),1,3);const f=[t[0]+n+.06,t[1]+.05,0],m=[-.35,1.05,.4],_=[.5,.95,.45],g=d,p=x=>{const y=1-x;return[0,1,2].map(v=>y*y*y*f[v]+3*y*y*x*m[v]+3*y*x*x*_[v]+x*x*x*g[v])};for(let x=0,y=e.n(.13);x<y;x++){const v=e.rnd(),T=p(v),w=.085*Math.pow(1-v,1.6)*Math.sin(v*46);e.put(T[0]+e.j(.012),T[1]+w+e.j(.012),T[2]+e.j(.012),e.rnd()<.18?1:0,v*.98)}return e.ring(e.n(.04),[.1,-1.08,0],1.95,"xz",0,.012,4),e.done()},radar(r){const e=Pn(r,31),t=(s,o)=>(Math.atan2(o,s)/In+1)%1;[[.5,.06],[1,.08],[1.5,.1],[1.95,.14]].forEach(([s,o])=>e.ring(e.n(o),[0,0,0],s,"xz",0,.012));for(let s=0,o=e.n(.08);s<o;s++){const a=(e.rnd()*2-1)*1.95,l=e.rnd()<.5,c=l?a:e.j(.012),u=l?e.j(.012):a;e.put(c,0,u,0,t(c,u))}for(let s=0,o=e.n(.1);s<o;s++){const a=Math.sqrt(e.rnd())*1.95,l=e.rnd()*In;e.put(Math.cos(l)*a,e.j(.01),Math.sin(l)*a,0,l/In)}const n=Math.floor(r*.21/34),i=Math.floor(r*.05/40);for(let s=0;s<74;s++){const o=.3+e.rnd()*1.55,a=e.rnd()*In,l=Math.cos(a)*o,c=Math.sin(a)*o;if(s%2===0&&s<68){const h=.22+e.rnd()*.6;for(let d=0;d<n;d++){const f=e.rnd()<.3;e.put(l+e.j(f?.07:.022),f?h+e.j(.05):e.rnd()*h,c+e.j(f?.07:.022),1,a/In)}}else for(let h=0;h<i;h++)e.put(l+e.j(.06),e.j(.012),c+e.j(.06),.15,a/In)}return e.done()},switch(r){const e=Pn(r,41),t=(h,d,f,m)=>_=>{const g=1-_,p=g*g*g,x=3*g*g*_,y=3*g*_*_,v=_*_*_;return[p*h[0]+x*d[0]+y*f[0]+v*m[0],p*h[1]+x*d[1]+y*f[1]+v*m[1],p*h[2]+x*d[2]+y*f[2]+v*m[2]]},n=(h,d,f,m)=>{for(let _=0;_<h;_++){let g=e.rnd();const p=e.rnd()>.72;p&&(g=Math.round(g*22)/22);const x=d(g),y=d(Math.min(1,g+.01)),v=y[0]-x[0],T=y[1]-x[1],w=Math.hypot(v,T)||1,b=p?(e.rnd()*2-1)*.08:(e.rnd()<.5?1:-1)*.055;e.put(x[0]+-T/w*b+e.j(.008),x[1]+v/w*b+e.j(.008),x[2]+e.j(.008),0,Mt(f,m,g))}},i=[-.35,0,0],s=[[1.4,.98,-.3],[1.55,0,.2],[1.4,-.98,-.3]];n(e.n(.16),h=>[Mt(-1.95,i[0],h),0,0],0,.4),s.forEach(h=>{n(e.n(.15),t(i,[.4,0,0],[h[0]-.85,h[1],h[2]],h),.4,1),e.box(e.n(.05),[h[0]+.27,h[1],h[2]],[.46,.46,.46],1,.008,1),e.shell(e.n(.014),[h[0]+.27,h[1],h[2]],.09,1,1)});const o=-1.55,a=.52,l=.3,c=.2,u=e.n(.012);return e.line(u,[o-l,a-c,0],[o+l,a-c,0],1,.01,0,0),e.line(u,[o-l,a+c,0],[o+l,a+c,0],1,.01,0,0),e.line(u,[o-l,a-c,0],[o-l,a+c,0],1,.01,0,0),e.line(u,[o+l,a-c,0],[o+l,a+c,0],1,.01,0,0),e.line(u,[o-l,a+c,0],[o,a-.02,0],1,.01,0,0),e.line(u,[o+l,a+c,0],[o,a-.02,0],1,.01,0,0),e.ring(e.n(.03),i,.17,"xy",1,.01,.4),e.done()},server(r){const e=Pn(r,51),t=5,n=1.7,i=.34,s=1,o=.09,a=t*i+(t-1)*o;for(let l=0;l<t;l++){const c=-a/2+i/2+l*(i+o);e.box(e.n(.075),[0,c,0],[n,i,s]);for(let u=0,h=e.n(.035);u<h;u++)e.put(-n/2+.5+e.rnd()*(n-.62),c+(Math.floor(e.rnd()*3)-1)*.085+e.j(.006),s/2+.002,0,0);for(let u=0;u<3;u++){const h=e.rnd();for(let d=0,f=e.n(.006);d<f;d++)e.put(-n/2+.12+u*.11+e.j(.024),c+e.j(.024),s/2+.01,1,h)}}for(let l=0;l<3;l++)e.line(e.n(.045),[(l-1)*.5,a/2,0],[(l-1)*.5,a/2+1.25,0],.6,.014,0,1);return e.ring(e.n(.06),[0,-a/2-.12,0],1.45,"xz",0,.012,0),e.ring(e.n(.035),[0,-a/2-.12,0],1.05,"xz",0,.01,0),e.done()},invoice(r){const e=Pn(r,61),t=1.3,n=1.8;for(let i=0;i<3;i++){const s=-.3+i*.3,o=.14-i*.14,a=-.55+i*.55,l=-.09+i*.07,c=Math.cos(l),u=Math.sin(l),h=i===2,d=h?.36:.2,f=(m,_,g)=>e.put(s+m*c-_*u+e.j(.008),o+m*u+_*c+e.j(.008),a+e.j(.008),g,_/n+.5);for(let m=0,_=e.n(d*.3);m<_;m++){const g=Math.floor(e.rnd()*4),p=e.rnd()*2-1;f(g<2?p*t/2:(g===2?-1:1)*t/2,g<2?(g===0?-1:1)*n/2:p*n/2,0)}for(let m=0,_=e.n(d*.12);m<_;m++)f(-t/2+.12+e.rnd()*.5,n/2-.2+e.j(.05),h?1:0);for(let m=0,_=e.n(d*.5);m<_;m++){const g=Math.floor(e.rnd()*9),p=.45+g*37%10/10*.5;f(-t/2+.12+e.rnd()*(t-.24)*p,n/2-.48-g*.125,0)}for(let m=0,_=e.n(d*.08);m<_;m++)f(t/2-.12-e.rnd()*.42,-n/2+.2+e.j(.03),h?1:0)}return e.ring(e.n(.05),[.64,-.58,.62],.3,"xy",1,.012,2),e.line(e.n(.02),[.49,-.58,.62],[.59,-.69,.62],1,.014,2,2),e.line(e.n(.035),[.59,-.69,.62],[.81,-.44,.62],1,.014,2,2),e.done()},film(r){const e=Pn(r,71),t=.36,n=9,i=(c,u,h,d=.008)=>{const f=c*.7;e.put(c*1.9+e.j(d),Math.sin(c*Math.PI)*.5+Math.cos(f)*u+e.j(d),Math.cos(c*Math.PI)*.55-.2+Math.sin(f)*u+e.j(d),h,(c+1)/2)};for(let c=0,u=e.n(.2);c<u;c++)i(e.rnd()*2-1,e.rnd()<.5?t:-t,0);for(let c=0,u=e.n(.14);c<u;c++)i(Math.round((e.rnd()*2-1)*22)/22+e.j(.012),(e.rnd()<.5?1:-1)*(t-.06)+e.j(.02),0,.004);for(let c=0,u=e.n(.2);c<u;c++){const h=Math.floor(e.rnd()*n),d=-1+h*(2/n)+.02,f=d+2/n-.04,m=t-.13,_=Math.floor(e.rnd()*4),g=e.rnd();i(_<2?Mt(d,f,g):_===2?d:f,_<2?_===0?-m:m:Mt(-m,m,g),0)}for(let c=0,u=e.n(.12);c<u;c++){const h=Math.floor(e.rnd()*5)*2,d=-1+h*(2/n)+.03;i(d+e.rnd()*(2/n-.06),(e.rnd()*2-1)*(t-.15),.35)}const s=[-.2,.28],o=[-.2,-.28],a=[.3,0],l=.95;[[s,o],[o,a],[a,s]].forEach(([c,u])=>e.line(e.n(.022),[c[0],c[1],l],[u[0],u[1],l],1,.012,.5,.5));for(let c=0,u=e.n(.05);c<u;c++){let h=e.rnd(),d=e.rnd();h+d>1&&(h=1-h,d=1-d),e.put(s[0]+(o[0]-s[0])*h+(a[0]-s[0])*d,s[1]+(o[1]-s[1])*h+(a[1]-s[1])*d,l+e.j(.01),1,.5)}return e.ring(e.n(.06),[0,0,l],.58,"xy",1,.012,.5),e.done()},constellation(r){const e=Pn(r,81),t=[];for(let n=0;n<6;n++){const i=n/6*In+.3;t.push([Math.cos(i)*1.55,Math.sin(i)*1.15,n%2?.4:-.4])}return e.shell(e.n(.12),[0,0,0],.34,1,0),t.forEach((n,i)=>{e.shell(e.n(.06),n,.22,1,0),e.line(e.n(.035),[0,0,0],n,0,.012,0,1),e.line(e.n(.02),n,t[(i+1)%6],0,.01,0,1)}),e.done()},helix(r){const e=Pn(r,91),t=4.2,n=.78,i=2.4,s=(o,a)=>{const l=o*i*In+a;return[Math.cos(l)*n,(o-.5)*t,Math.sin(l)*n]};e.curve(e.n(.24),o=>s(o,0),0,.014),e.curve(e.n(.24),o=>s(o,Math.PI),0,.014);for(let o=0,a=e.n(.18);o<a;o++){const l=Math.round(e.rnd()*26)/26,c=s(l,0),u=s(l,Math.PI),h=e.rnd();e.put(Mt(c[0],u[0],h),c[1]+e.j(.01),Mt(c[2],u[2],h),0,l)}for(let o=0;o<6;o++)e.shell(e.n(.022),s(.1+o*.16,0),.13,1,.1+o*.16);return e.done()}},Zb=3.2,Qb=3.1,Gi=(r,e,t,n=1)=>{const i=r.stages&&r.stages[r.cur];if(i&&r.W){const s=i.top?-.4:0,o=xg*(7.2-s),a=o*r.aspect,l=((i.x+i.w/2)/r.W*2-1)*a,c=(1-(i.y+i.h/2)/r.H*2)*o,u=Math.min(i.w/r.W*2*a/Zb,i.h/r.H*2*o/Qb);return[l,c,s,e,i.top?t*.6:t,0,n*Math.max(.3,Math.min(i.top?.62:1,u))]}return r.mobile?[0,r.hh*.47,-.4,e,t*.6,0,.5*n]:[r.hw*.47,.05,0,e,t,0,n]},_s={cloud:{shape:"cloud",fx:0,col:["#2F80FF","#EAF1FF"],fade:0,halo:0,sway:0,pose:()=>[0,0,-1,0,0,0,1.2]},name:{shape:"name",fx:0,col:["#DCE8FF","#2F80FF"],fade:.95,halo:.2,sway:.05,pose:r=>[0,r.mobile?.25:.05,0,0,0,0,r.hw*.9]},sphere:{shape:"sphere",fx:1,col:["#2F80FF","#EAF1FF"],fade:1,halo:1,sway:0,pose:r=>[0,0,0,0,0,.18,r.mobile?.77:1]},terrain:{shape:"terrain",fx:2,col:["#2F80FF","#EAF1FF"],fade:.42,halo:0,sway:0,pose:()=>[0,0,0,.55,0,.18,1]},rapport:{shape:"rapport",fx:14,col:["#2F80FF","#FFD84D"],fade:1,halo:.35,sway:.2,pose:r=>Gi(r,.1,-.5,.95)},devis:{shape:"devis",fx:13,col:["#2F80FF","#D2F65A"],fade:1,halo:.35,sway:.2,pose:r=>Gi(r,.1,-.5,.95)},sms:{shape:"sms",fx:12,col:["#2F80FF","#FF7AD9"],fade:1,halo:.35,sway:.2,pose:r=>Gi(r,.06,-.36,.92)},voice:{shape:"voice",fx:11,col:["#2F80FF","#C49BFF"],fade:1,halo:.35,sway:.18,pose:r=>Gi(r,.06,-.42,.95)},wave:{shape:"wave",fx:3,col:["#2F80FF","#7CF5D0"],fade:1,halo:.35,sway:.22,pose:r=>Gi(r,.12,-.5,.92)},radar:{shape:"radar",fx:4,col:["#2F80FF","#35E08B"],fade:1,halo:.3,sway:.12,pose:r=>Gi(r,.95,-.25,.95)},switch:{shape:"switch",fx:5,col:["#2F80FF","#FFB347"],fade:1,halo:.3,sway:.2,pose:r=>Gi(r,.1,-.38,.95)},server:{shape:"server",fx:6,col:["#2F80FF","#35E08B"],fade:1,halo:.35,sway:.25,pose:r=>Gi(r,.24,-.62,.95)},invoice:{shape:"invoice",fx:7,col:["#5C9BFF","#FFB347"],fade:1,halo:.3,sway:.2,pose:r=>Gi(r,.08,-.48,1)},film:{shape:"film",fx:8,col:["#2F80FF","#FF6B6B"],fade:1,halo:.3,sway:.2,pose:r=>Gi(r,.1,-.35,.95)},dim:{shape:"terrain",fx:2,col:["#2F80FF","#EAF1FF"],fade:.3,halo:0,sway:0,pose:()=>[0,0,0,.55,0,.18,1]},caps:{shape:"constellation",fx:9,col:["#2F80FF","#EAF1FF"],fade:.36,halo:.12,sway:.25,pose:r=>r.mobile?[0,0,-1.4,0,0,0,.7]:[0,-.1,-1.2,.1,0,0,1.3]},path:{shape:"helix",fx:10,col:["#2F80FF","#8AB8FF"],fade:.55,halo:.15,sway:.1,pose:r=>r.mobile?[r.hw*.55,0,-1.2,0,0,.12,.7]:[r.hw*.72,0,-.4,0,0,.14,1]},end:{shape:"sphere",fx:1,col:["#2F80FF","#EAF1FF"],fade:.9,halo:1,sway:0,pose:r=>[0,0,0,0,0,.18,r.mobile?.77:1]}},ew={cloud:[6,0],name:[0,0],path:[20,1]},va=r=>ew[vn[r]]||[14,1],sa=vn.map((r,e)=>{let t=0;for(let n=0;n<e;n++)t+=va(n)[0];return t}),ql=r=>_s[r].col[1]==="#EAF1FF"?"#8AB8FF":_s[r].col[1],Xl=r=>2.4*Math.sin(r*.043)+1.1*Math.sin(r*.107+1.3),tw=r=>2.4*.043*Math.cos(r*.043)+1.1*.107*Math.cos(r*.107+1.3),Ti=96,nw=`
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
}`,iw=`
uniform float uTime; uniform float uMix; uniform float uSize; uniform float uPixel; uniform float uVel;
uniform float uFlight; uniform float uWarp; uniform float uAspect;
uniform float uFxA; uniform float uFxB; uniform float uScatter; uniform float uFocus;
uniform vec3 uMouse; uniform float uMouseStrength; uniform vec3 uPulsePos; uniform float uPulse;
attribute vec3 aTo; attribute vec2 aMetaA; attribute vec2 aMetaB; attribute vec3 aRand;
varying float vAlpha; varying float vToneA; varying float vToneB; varying float vM; varying float vStretch; varying vec2 vDir;
${nw}
mat2 rot(float a){ float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }

// Chaque forme a sa vie propre : déplacement + éclat.
vec3 life(vec3 p, vec2 meta, float id, out float glow){
  glow = 0.;
  float tone = meta.x, prm = meta.y;
  if (prm < -.5) { p.y += sin(uTime * .25 + aRand.x * 6.283) * .14; p.x += cos(uTime * .2 + aRand.y * 6.283) * .12; return p; }
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
    float d = fract(prm - uTime * .14); glow = pow(1. - d, 7.) * 1.7;
    if (tone > .9) { p.y *= .7 + .3 * sin(uTime * 1.6 + prm * 40.); glow += .25; }
  } else if (id < 5.5) {
    glow = pow(.5 + .5 * sin((prm - uTime * .22) * 12.566), 14.) * 1.9;
    if (tone > .9) glow += .2;
  } else if (id < 6.5) {
    if (tone > .9) glow = step(.42, fract(uTime * (.35 + prm * 1.3) + prm * 7.)) * 1.5 - .35;
    else if (tone > .5) glow = pow(fract(prm - uTime * .55), 5.) * 1.7;
    else glow = .12 * sin(uTime + p.y * 6.);
  } else if (id < 7.5) {
    if (prm > 1.5) glow = .5 + .45 * sin(uTime * 2.6);
    else { glow = smoothstep(.07, 0., abs(prm - (1. - fract(uTime * .22)))) * 1.7; p.z += sin(uTime * .9 + prm * 3.) * .035; }
  } else if (id < 8.5) {
    if (tone > .9) glow = .35 + .3 * sin(uTime * 2.4);
    else { p.y += sin(prm * 9.42 + uTime * 1.1) * .07; glow = pow(.5 + .5 * sin((prm - uTime * .18) * 18.85), 10.) * 1.3; }
  } else if (id < 9.5) {
    p.xy = rot(sin(uTime * .2) * .12) * p.xy;
    if (tone > .5) glow = .3 + .35 * sin(uTime * 2. + aRand.x * 30.); else glow = pow(fract(prm - uTime * .35), 6.) * 1.6;
  } else if (id > 13.5) {
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
    p.xz = rot(uTime * .3) * p.xz;
    glow = pow(fract(prm * 2. - uTime * .25), 6.) * 1.5; if (tone > .9) glow += .35;
  }
  return p;
}

void main(){
  float gA; float gB;
  vec3 a = life(position, aMetaA, uFxA, gA);
  vec3 b = life(aTo, aMetaB, uFxB, gB);
  // Une forme peut cacher un point en renvoyant un éclat < −2 : il devient transparent, sans fantôme.
  float hA = step(-2., gA), hB = step(-2., gB); gA = max(gA, -.7); gB = max(gB, -.7);
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
}`,rw=`
uniform vec3 uBaseA; uniform vec3 uAccA; uniform vec3 uBaseB; uniform vec3 uAccB; uniform float uFade;
varying float vAlpha; varying float vToneA; varying float vToneB; varying float vM; varying float vStretch; varying vec2 vDir;
void main(){
  vec2 c = gl_PointCoord - .5, dr = vec2(vDir.x, -vDir.y);
  c = vec2(dot(c, vec2(-dr.y, dr.x)) * vStretch, dot(c, dr)); float d = length(c);
  if (d > .5) discard;
  float a = smoothstep(.5, .05, d) + smoothstep(.16, 0., d) * .5;
  vec3 col = mix(mix(uBaseA, uAccA, vToneA), mix(uBaseB, uAccB, vToneB), vM);
  gl_FragColor = vec4(col, a * vAlpha * uFade / sqrt(vStretch));
}`,sw=`
uniform float uTravel; uniform float uDrift; uniform float uWarp; uniform float uPixel; uniform float uTime; uniform float uFade; uniform float uAspect; uniform float uEnd;
uniform vec3 uTint;
attribute vec4 aP; attribute vec4 aS; attribute vec3 aC;
varying float vA; varying vec2 vDir; varying float vStretch; varying vec3 vCol;
float bend(float x){ return 2.4 * sin(x * .043) + 1.1 * sin(x * .107 + 1.3); }
void main(){
  float kind = aP.w, L = ${Ti.toFixed(1)};
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
}`,ow=`
varying float vA; varying vec2 vDir; varying float vStretch; varying vec3 vCol;
void main(){
  vec2 c = gl_PointCoord - .5, dr = vec2(vDir.x, -vDir.y);
  vec2 q = vec2(dot(c, dr), dot(c, vec2(-dr.y, dr.x)) * vStretch);
  float r = length(q) * 2.; if (r > 1.) discard;
  gl_FragColor = vec4(vCol, (smoothstep(1., .0, r) * .75 + smoothstep(.45, .0, r) * .5) * vA / sqrt(vStretch));
}`,aw=`
uniform vec3 uTint; uniform float uA; uniform float uTime; uniform float uR; uniform float uSpin;
varying vec2 vUv;
void main(){
  vec2 p = (vUv - .5) * 2. * (uR + .7);
  float d = length(p), ang = atan(p.y, p.x) + uSpin;
  float core = exp(-pow((d - uR) * 10., 2.));
  float glow = exp(-pow((d - uR) * 2.4, 2.)) * .22;
  float ticks = step(.8, fract(ang * 9.5493 + uTime * .04)) * exp(-pow((d - uR - .3) * 24., 2.)) * .75;
  float arcs = smoothstep(.2, .35, sin(ang * 3. - uTime * .6)) * exp(-pow((d - uR + .2) * 20., 2.)) * .55;
  vec3 c = mix(uTint, vec3(1.), core * .4);
  gl_FragColor = vec4(c, (core + glow + ticks + arcs) * uA);
}`,lw=`
uniform vec3 uTint; uniform float uA; uniform float uTime; uniform float uLand;
varying vec2 vUv;
void main(){
  vec2 p = (vUv - .5) * 8.; float d = length(p);
  float rings = 0.;
  for (int i = 0; i < 3; i++) { float r = mod(uTime * .42 + float(i) * 1.05, 3.15) + .45; rings += exp(-pow((d - r) * 11., 2.)) * (1. - smoothstep(2.2, 3.5, r)); }
  float base = exp(-pow((d - 1.6) * 16., 2.)) + exp(-pow((d - 2.5) * 34., 2.)) * .55;
  float wave = exp(-pow((d - (1. - uLand) * 3.7) * 5., 2.)) * uLand * 3.;
  float disc = (1. - smoothstep(0., 3.6, d)) * .07;
  gl_FragColor = vec4(mix(uTint, vec3(1.), .3), (rings * .26 + base * .42 + wave + disc * .7) * uA * (1. - smoothstep(3.4, 3.95, d)));
}`,Zp="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }";function cw(r,{reduced:e=!1,onQuality:t=null}={}){const n=new vg({canvas:r,antialias:!1,alpha:!0,powerPreference:"high-performance"}),i=window.matchMedia("(max-width: 760px)").matches;let s=Math.min(window.devicePixelRatio||1,i?1.5:1.75);n.setPixelRatio(s);const o=new ig,a=new ei(35,1,.1,100);a.position.set(0,0,7.2);const l=i?11e3:26e3,c={},u=Q=>c[Q]||(c[Q]=yg[Q](l)),h=new cn,d=new Float32Array(l*3);for(let Q=0;Q<l*3;Q++)d[Q]=Math.random();const f={a:new Bt(new Float32Array(l*3),3),b:new Bt(new Float32Array(l*3),3),ma:new Bt(new Float32Array(l*2),2),mb:new Bt(new Float32Array(l*2),2)};h.setAttribute("position",f.a),h.setAttribute("aTo",f.b),h.setAttribute("aMetaA",f.ma),h.setAttribute("aMetaB",f.mb),h.setAttribute("aRand",new Bt(d,3));const m={uTime:{value:0},uMix:{value:0},uSize:{value:i?22:25},uPixel:{value:s},uVel:{value:0},uFlight:{value:0},uWarp:{value:0},uAspect:{value:1},uFxA:{value:0},uFxB:{value:0},uScatter:{value:.55},uFocus:{value:7.2},uMouse:{value:new I(9,9,0)},uMouseStrength:{value:0},uFade:{value:1},uPulsePos:{value:new I(9,9,0)},uPulse:{value:0},uBaseA:{value:new Ze},uAccA:{value:new Ze},uBaseB:{value:new Ze},uAccB:{value:new Ze}},_=new Tn({vertexShader:iw,fragmentShader:rw,uniforms:m,transparent:!0,depthWrite:!1,blending:Nn}),g=new Ia(h,_);g.frustumCulled=!1;const p=new Gr;p.add(g),o.add(p);const x=new Tn({transparent:!0,depthWrite:!1,blending:Nn,uniforms:{uFade:{value:0},uTime:m.uTime,uTint:{value:new Ze("#2F80FF")}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:"uniform float uFade; uniform float uTime; uniform vec3 uTint; varying vec2 vUv; void main(){ float d = length(vUv - .5) * 2.; float core = pow(max(0., 1. - d), 3.2); float ring = smoothstep(.62, .5, d) * smoothstep(.3, .5, d) * .22; vec3 c = mix(uTint * .75, vec3(.75, .86, 1.), core); gl_FragColor = vec4(c, (core * .55 + ring * (.6 + .4 * sin(uTime * .8))) * uFade); }"}),y=new Vt(new tr(8.05,8.05),x);o.add(y);const v=i?240:560,T=new Float32Array(v*3),w=new Float32Array(v*3);for(let Q=0;Q<v;Q++)T[Q*3]=(Math.random()-.5)*13,T[Q*3+1]=(Math.random()-.5)*8,T[Q*3+2]=(Math.random()-.5)*6+1,w[Q*3]=.08+Math.random()*.32,w[Q*3+1]=Math.random(),w[Q*3+2]=.4+Math.random()*1.6;const b=new cn;b.setAttribute("position",new Bt(T,3)),b.setAttribute("aSeed",new Bt(w,3));const C=new Tn({transparent:!0,depthWrite:!1,blending:Nn,uniforms:{uTime:m.uTime,uPixel:m.uPixel,uFade:{value:1}},vertexShader:"uniform float uTime; uniform float uPixel; attribute vec3 aSeed; varying float vA; varying float vT; void main(){ vec3 p = position; p.y = mod(p.y + uTime * aSeed.x + 4., 8.) - 4.; p.x += sin(uTime * .5 + aSeed.y * 6.283) * .35; p.z += cos(uTime * .4 + aSeed.y * 9.) * .25; vec4 mv = modelViewMatrix * vec4(p, 1.); gl_Position = projectionMatrix * mv; gl_PointSize = aSeed.z * uPixel * 34. / -mv.z; vA = smoothstep(4., 2.4, abs(p.y)) * (.45 + .55 * sin(uTime * 1.7 + aSeed.y * 40.)); vT = aSeed.y; }",fragmentShader:"uniform float uFade; varying float vA; varying float vT; void main(){ float d = length(gl_PointCoord - .5); if (d > .5) discard; float a = pow(1. - d * 2., 2.2); vec3 c = mix(vec3(1., .72, .38), vec3(.35, .62, 1.), step(.42, vT)); gl_FragColor = vec4(c, a * vA * uFade * .9); }"});o.add(new Ia(b,C));const S=i?900:2200,M=i?300:560,P=vn.length-wn.sphere,U=S+M+P,H=new Float32Array(U*4),N=new Float32Array(U*4),G=new Float32Array(U*3),W=new Ze,$=["#FFFFFF","#CFE0FF","#8AB8FF","#FFE2B8"];for(let Q=0;Q<U;Q++){let te=0,xe=-1.95,ge=0,ke=0,De=Math.random(),Me=Math.random(),we=1;if(Q<S){const st=Math.random()*In,ht=2.4+Math.pow(Math.random(),.7)*15;te=Math.cos(st)*ht,xe=Math.sin(st)*ht*.78,ge=Math.random()*Ti,we=.35+Math.pow(Math.random(),3)*1.5,W.set($[Math.floor(Math.random()*$.length)])}else if(Q<S+M){const st=(Q-S)/M;ke=1,ge=st*Ti,te=(Math.random()-.5)*.03,xe=-1.95+(Math.random()-.5)*.02;const ht=Math.round(st*Ti)%7===0&&Math.abs(st*Ti-Math.round(st*Ti))<.12;Me=ht?1:Math.random()*.25,we=ht?1.9:.55+Math.random()*.4,W.set(ht?"#CFE0FF":"#5C9BFF")}else{const st=wn.sphere+(Q-S-M);ke=2,ge=sa[st]+7.2,De=st,W.set(ql(vn[st]))}H.set([te,xe,ge,ke],Q*4),N.set([De,Me,we,0],Q*4),G.set([W.r,W.g,W.b],Q*3)}const z=new cn;z.setAttribute("position",new Bt(new Float32Array(U*3),3)),z.setAttribute("aP",new Bt(H,4)),z.setAttribute("aS",new Bt(N,4)),z.setAttribute("aC",new Bt(G,3));const oe={uTravel:{value:0},uDrift:{value:0},uWarp:m.uWarp,uPixel:m.uPixel,uTime:m.uTime,uFade:{value:1},uAspect:m.uAspect,uEnd:{value:sa[wn.end]},uTint:{value:new Ze("#2F80FF")}},D=new Ia(z,new Tn({vertexShader:sw,fragmentShader:ow,uniforms:oe,transparent:!0,depthWrite:!1,blending:Nn}));D.frustumCulled=!1,D.renderOrder=-2,o.add(D);const me=[];for(let Q=wn.sphere;Q<wn.end;Q++)va(Q)[1]&&me.push({step:Q,at:sa[Q]+va(Q)[0]*.88,tint:new Ze(ql(vn[Q+1])),r:Q===wn.end-1?4.2:3.5,spin:Q*1.7%In});const Le=[0,1,2,3].map(()=>{const Q=new Tn({vertexShader:Zp,fragmentShader:aw,transparent:!0,depthWrite:!1,blending:Nn,uniforms:{uTint:{value:new Ze},uA:{value:0},uTime:m.uTime,uR:{value:3.5},uSpin:{value:0}}}),te=new Vt(new tr(1,1),Q);return te.renderOrder=-1,te.visible=!1,o.add(te),te}),Oe=new Tn({vertexShader:Zp,fragmentShader:lw,transparent:!0,depthWrite:!1,blending:Nn,uniforms:{uTint:{value:new Ze("#5C9BFF")},uA:{value:0},uTime:m.uTime,uLand:{value:0}}}),Y=new Vt(new tr(8,8),Oe);Y.rotation.x=-Math.PI/2,Y.renderOrder=-1,Y.visible=!1,o.add(Y);const ae=sa[wn.end]+7.2,ce={hw:3.6,hh:2.27,mobile:i},re={},_e=()=>{const Q=r.clientWidth||window.innerWidth,te=r.clientHeight||window.innerHeight;n.setSize(Q,te,!1),a.aspect=Q/te,a.updateProjectionMatrix(),ce.hh=xg*7.2,ce.hw=ce.hh*a.aspect,ce.mobile=Q<=760,ce.W=Q,ce.H=te,ce.aspect=a.aspect,m.uAspect.value=a.aspect,Ve()};function Ve(){vn.forEach(Q=>{ce.cur=Q,re[Q]=_s[Q].pose(ce)})}_e(),window.addEventListener("resize",_e);let Re=-1;const rt=Q=>{Re=Q;const te=_s[vn[Q]],xe=_s[vn[Q+1]],ge=u(te.shape),ke=u(xe.shape);f.a.array.set(ge.pos),f.b.array.set(ke.pos),f.ma.array.set(ge.meta),f.mb.array.set(ke.meta),f.a.needsUpdate=f.b.needsUpdate=f.ma.needsUpdate=f.mb.needsUpdate=!0,m.uFxA.value=te.fx,m.uFxB.value=xe.fx,m.uBaseA.value.set(te.col[0]),m.uAccA.value.set(te.col[1]),m.uBaseB.value.set(xe.col[0]),m.uAccB.value.set(xe.col[1])};document.fonts?.load('800 100px "Inter Tight Variable"').then(()=>{delete c.name,Re>=0&&Re<=wn.name&&rt(Re)}).catch(()=>{});const Je=new We(0,0),Ee=new I(9,9,0),L=new I;let xt=0;const qe=Q=>{Je.x=Q.clientX/window.innerWidth*2-1,Je.y=-(Q.clientY/window.innerHeight)*2+1,L.set(Je.x,Je.y,.5).unproject(a).sub(a.position).normalize(),Ee.copy(a.position).add(L.multiplyScalar(-a.position.z/L.z)),xt=1};window.addEventListener("pointermove",qe,{passive:!0});let V=0;const Ce=Q=>{qe(Q),m.uPulsePos.value.copy(Ee),V=1};window.addEventListener("pointerdown",Ce,{passive:!0});const ct=Q=>{Q.gamma==null||Q.beta==null||(Je.x=Math.max(-1,Math.min(1,Q.gamma/28)),Je.y=Math.max(-1,Math.min(1,(Q.beta-50)/28)))};!window.matchMedia("(hover: hover) and (pointer: fine)").matches&&!e&&window.addEventListener("deviceorientation",ct,{passive:!0});let R=!0,E=0,X=performance.now(),ne=0,ie=0,Z=0,ve=0,he=1,Se=0,Ge=0,le=0,pe=0,ze=!1,He=0,be=!1,it=0;const Ke=new Ze,at=new Ze,F=new Ze,J=Q=>{const te=Math.min(vn.length-2,Math.max(0,Math.floor(Q))),xe=Math.min(1,Math.max(0,Q-te));te!==Re&&rt(te);const ge=_s[vn[te]],ke=_s[vn[te+1]],De=re[vn[te]],Me=re[vn[te+1]],we=xe*xe*(3-2*xe),st=Math.sin(we*Math.PI);m.uMix.value=xe;const ht=va(te),ot=e||ze?0:ht[1];Se=sa[te]+ht[0]*we,m.uFlight.value=ot;const dt=ot*st;a.position.z=7.2-dt*.55,a.lookAt(0,0,0),a.rotateZ(dt*(.075*(te%2?1:-1)-tw(Se+18)*.45));const fn=35+dt*11+le*4;Math.abs(a.fov-fn)>.01&&(a.fov=fn,a.updateProjectionMatrix());const At=Mt(De[2],Me[2],we)+st*.9*(1-ot);p.position.set(Mt(De[0],Me[0],we),Mt(De[1],Me[1],we),At),p.rotation.set(Mt(De[3],Me[3],we)+Je.y*-.1,Mt(De[4],Me[4],we)+Math.sin(ne*.32)*Mt(ge.sway,ke.sway,we)+Je.x*.16,Mt(De[5],Me[5],we));const pn=Mt(De[6],Me[6],we);p.scale.setScalar(pn),m.uFade.value=Mt(ge.fade,ke.fade,we)*he,m.uFocus.value=a.position.z-At,y.position.set(p.position.x,p.position.y,At-.7),y.scale.setScalar(pn*(1+Math.sin(ne*.6)*.04)),x.uniforms.uFade.value=(Mt(ge.halo,ke.halo,we)*(1-st*(.5+ot*.45))+He*.6)*he,at.set(ge.col[0]),F.set(ke.col[0]),x.uniforms.uTint.value.copy(Ke.copy(at).lerp(F,we)),C.uniforms.uFade.value=(.35+m.uFade.value*.65)*(1-le*.7),oe.uTravel.value=Se,oe.uDrift.value=pe,oe.uFade.value=he*(.75+.25*Mt(ge.fade,ke.fade,we)),at.set(ql(vn[te])),F.set(ql(vn[te+1])),oe.uTint.value.copy(at).lerp(F,we);let on=0;for(const Lt of me){const A=Lt.at-Se;if(A<.05||A>Ti||on>=Le.length)continue;const B=Le[on++],K=Lt.step===te?Math.min(1,xe/.25):0;B.visible=!0,B.position.set(Xl(Lt.at)-Xl(Se),0,7.2-A),B.scale.setScalar((Lt.r+.7)*2),B.material.uniforms.uTint.value.copy(Lt.tint),B.material.uniforms.uR.value=Lt.r,B.material.uniforms.uSpin.value=Lt.spin,B.material.uniforms.uA.value=Math.min(1,(on===1?.035:0)+K*(.22+.78*(1-O(4,13,A)))+.3*dt)*(1-O(Ti*.45,Ti,A))*O(.3,2.6,A)*he*(ze?.4:1)}for(;on<Le.length;on++)Le[on].visible=!1;const Ot=ae-Se;Y.visible=Ot>1&&Ot<Ti,Y.visible&&(Y.position.set(Xl(ae)-Xl(Se),-2.05,7.2-Ot),Oe.uniforms.uA.value=(1-O(Ti*.4,Ti,Ot))*(.3+.3*(1-O(7.4,20,Ot)))*he,Oe.uniforms.uLand.value=He)},O=(Q,te,xe)=>{const ge=Math.min(1,Math.max(0,(xe-Q)/(te-Q)));return ge*ge*(3-2*ge)};let q=0,ee=0,se=0,Ie=0;const nt=()=>{q++,q===1?(s=Math.min(s,1),n.setPixelRatio(s),m.uPixel.value=s,_e(),h.setDrawRange(0,Math.floor(l*.7))):q===2&&(h.setDrawRange(0,Math.floor(l*.42)),m.uSize.value*=1.25,ut(.45)),t?.(q)},ut=Q=>{const te=Math.floor(S*Q);H.copyWithin(te*4,S*4,U*4),N.copyWithin(te*4,S*4,U*4),G.copyWithin(te*3,S*3,U*3),z.attributes.aP.needsUpdate=z.attributes.aS.needsUpdate=z.attributes.aC.needsUpdate=!0,z.setDrawRange(0,te+M+P)},fe=Q=>{E=requestAnimationFrame(fe);const te=(Q-X)/1e3,xe=Math.min(te,.05);if(X=Q,!R)return;ne+=xe,m.uTime.value=ne,Ie+=xe,Ie>2.5&&te<.25&&q<3&&(ee+=te,se++,se>=80&&(ee/se>1/27&&nt(),ee=0,se=0));const ge=!ze&&va(Math.min(vn.length-2,Math.max(0,Math.floor(Z))))[1]?3.6:6.5;Z+=(ie-Z)*(1-Math.exp(-xe*ge)),Math.abs(ie-Z)<1e-4&&(Z=ie),a.position.x+=(Je.x*.5-a.position.x)*.04,a.position.y+=(Je.y*.32-a.position.y)*.04,ze||(pe+=xe*.6),!be&&Z>=wn.end-.02&&it<wn.end-.02&&Z>it&&!ze&&(be=!0,He=1,m.uPulsePos.value.copy(p.position),V=1),Z<wn.end-.3&&(be=!1),He=Math.max(0,He-xe*.45),it=Z,J(Z);const ke=Math.abs(Se-Ge)/Math.max(xe,.001);Ge=Se,le+=((ze?0:Math.min(1,ke/26))-le)*(1-Math.exp(-xe*7)),m.uWarp.value=le,m.uVel.value+=(ve-m.uVel.value)*.14,ve*=.9,V=Math.max(0,V-xe*.85),m.uPulse.value=V,m.uMouse.value.lerp(Ee,.12),xt*=.985,m.uMouseStrength.value+=(xt-m.uMouseStrength.value)*.1,n.render(o,a)},ye=()=>{J(Z),n.render(o,a)};return J(0),e?ye():E=requestAnimationFrame(fe),{get k(){return ie},set k(Q){ie=Q,e&&(Z=Q,ye())},jump(Q){ie=Z=Q,e&&ye()},set dim(Q){he=Q},set stages(Q){ce.stages=Q,Ve(),e&&ye()},set calm(Q){ze=!!Q,e&&ye()},set velocity(Q){ve=Math.max(ve,Q)},get level(){return q},play(){R=!0,X=performance.now()},pause(){R=!1},destroy(){cancelAnimationFrame(E),window.removeEventListener("pointermove",qe),window.removeEventListener("pointerdown",Ce),window.removeEventListener("deviceorientation",ct),window.removeEventListener("resize",_e),n.dispose()}}}const Qp={fr:{soundOn:"Son : activé",soundOff:"Son : coupé",fxOn:"Réduire les effets",fxOff:"Rétablir les effets",mail:"Écrire à",route:"Itinéraire du voyage",go:"Aller à",here:"Vous êtes ici",land:"Arrivée"},en:{soundOn:"Sound: on",soundOff:"Sound: off",fxOn:"Reduce effects",fxOff:"Restore effects",mail:"Write to",route:"Journey route",go:"Go to",here:"You are here",land:"Arrival"}},em={get:r=>{try{return localStorage.getItem(r)}catch{return null}},set:(r,e)=>{try{localStorage.setItem(r,e)}catch{}}};function uw(){let r=null,e=null,t=null,n=!1;const i=()=>{r=new(window.AudioContext||window.webkitAudioContext),e=r.createGain(),e.gain.value=0,e.connect(r.destination),t=r.createBiquadFilter(),t.type="lowpass",t.frequency.value=320,t.Q.value=.7;const o=r.createGain();o.gain.value=.5,t.connect(o),o.connect(e),[[55,"sine",.5],[82.41,"triangle",.22],[110.4,"sine",.18],[164.8,"sine",.07]].forEach(([a,l,c],u)=>{const h=r.createOscillator(),d=r.createGain(),f=r.createOscillator(),m=r.createGain();h.type=l,h.frequency.value=a,d.gain.value=c,f.frequency.value=.05+u*.03,m.gain.value=c*.5,f.connect(m),m.connect(d.gain),h.connect(d),d.connect(t),h.start(),f.start()})},s=(o,a,l,c,u="sine")=>{if(!n)return;const h=r.currentTime,d=r.createOscillator(),f=r.createGain();d.type=u,d.frequency.setValueAtTime(o,h),d.frequency.exponentialRampToValueAtTime(a,h+l),f.gain.setValueAtTime(c,h),f.gain.exponentialRampToValueAtTime(1e-4,h+l),d.connect(f),f.connect(e),d.start(h),d.stop(h+l+.02)};return{get on(){return n},toggle(){return r||i(),n=!n,r.resume(),e.gain.cancelScheduledValues(r.currentTime),e.gain.linearRampToValueAtTime(n?.16:0,r.currentTime+(n?1.2:.4)),n},hover:()=>s(1400,2100,.07,.05),click:()=>{s(220,60,.28,.35,"triangle"),s(900,1800,.12,.05)},open:()=>s(140,520,.5,.2,"sine"),velocity(o){n&&t&&t.frequency.setTargetAtTime(320+Math.min(Math.abs(o),4e3)*.35,r.currentTime,.2)}}}const tm="ABCDEFGHKLMNPRSTUVXYZ0123456789#/<>_";function Na(r,e=.9){const t=r.dataset.txt||(r.dataset.txt=r.textContent),n={p:0};de.to(n,{p:1,duration:e,ease:"power2.out",onUpdate:()=>{const i=Math.floor(n.p*t.length);r.textContent=t.slice(0,i)+[...t.slice(i)].map(s=>s===" "?" ":tm[Math.random()*tm.length|0]).join("")},onComplete:()=>{r.textContent=t}})}function hw({lenis:r,hero:e,reduced:t,fine:n,lang:i,sections:s,routeStops:o}){const a=Qp[i]||Qp.fr,l=document.documentElement,c=(N,G=document)=>G.querySelector(N),u=(N,G=document)=>[...G.querySelectorAll(N)],h=uw(),d=document.createElement("div");d.className="aurora",d.setAttribute("aria-hidden","true"),d.innerHTML="<i></i><i></i><i></i>",document.body.prepend(d);const f=document.createElement("a");f.className="bigmail",f.href="mailto:johannepamegne@gmail.com",f.setAttribute("aria-label",`${a.mail} johannepamegne@gmail.com`),f.innerHTML=[..."johannepamegne@gmail.com"].map(N=>`<span aria-hidden="true">${N}</span>`).join(""),c(".contact__actions").before(f);const m=document.createElement("div");m.className="hud mono",m.innerHTML=`<div class="hud__left"><button type="button" id="soundBtn" aria-pressed="false"><span class="eq"><i></i><i></i><i></i><i></i></span><span>${a.soundOff}</span></button>
    <button type="button" id="fxBtn" aria-pressed="false"><span>${a.fxOn}</span></button></div>
    <div class="hud__right"><span id="hudSection">00 — ${s[0][1]}</span><span class="hud__bar"><i id="hudBar"></i></span><span id="hudPct">000</span></div>`,document.body.append(m);const _=c("#soundBtn"),g=c("#fxBtn");_.addEventListener("click",()=>{const N=h.toggle();_.setAttribute("aria-pressed",N),_.classList.toggle("is-on",N),_.lastElementChild.textContent=N?a.soundOn:a.soundOff});const p=(N,G=!0)=>{l.classList.toggle("fx-off",N),e&&(e.calm=N),g.setAttribute("aria-pressed",N),g.lastElementChild.textContent=N?a.fxOff:a.fxOn,G&&em.set("fx",N?"off":"on")};if(g.addEventListener("click",()=>p(!l.classList.contains("fx-off"))),em.get("fx")==="off"&&p(!0),window.addEventListener("world:slow",()=>{l.classList.contains("fx-off")||l.classList.add("fx-lite")}),document.addEventListener("pointerover",N=>{const G=N.target.closest("a, button, .row, .clip");G&&G!==document._lastHover&&(document._lastHover=G,h.hover()),G||(document._lastHover=null)}),document.addEventListener("click",N=>{N.target.closest(".row, .clip")?h.open():N.target.closest("a, button")&&h.click()}),o){const N=document.createElement("nav");N.className="route mono",N.setAttribute("aria-label",a.route),N.innerHTML='<span class="route__line"><i></i></span><span class="route__ship" aria-hidden="true"><b></b></span>',document.body.append(N);const G=N.querySelector(".route__line i"),W=N.querySelector(".route__ship"),$=W.querySelector("b");let z=[],oe=[],D=-1,me=0;const Le=()=>{z=o(),oe.forEach(Y=>Y.remove()),oe=z.map((Y,ae)=>{const ce=document.createElement("button");return ce.type="button",ce.className="route__stop"+(Y.sub?" is-sub":""),ce.style.top=`${ae/(z.length-1)*100}%`,ce.dataset.label=Y.label,ce.setAttribute("aria-label",`${a.go} : ${Y.label}`),Y.color&&ce.style.setProperty("--c",Y.color),ce.addEventListener("click",()=>{r?r.scrollTo(Y.y,{duration:1.8}):window.scrollTo({top:Y.y,behavior:t?"auto":"smooth"})}),N.append(ce),ce}),D=-1,Oe()},Oe=()=>{if(z.length<2)return;const Y=window.scrollY;let ae=z.length-1;for(let _e=0;_e<z.length-1;_e++){const Ve=z[_e].y,Re=z[_e+1].y;if(Y<Re){ae=_e+(Re>Ve?Math.max(0,(Y-Ve)/(Re-Ve)):0);break}}const ce=ae/(z.length-1);W.style.top=`${ce*100}%`,G.style.transform=`scaleY(${ce})`;const re=Math.round(ae);if(re!==D){D=re;const _e=z[re];oe.forEach((Ve,Re)=>{Ve.classList.toggle("is-here",Re===re),Ve.classList.toggle("is-done",Re<re),Ve.toggleAttribute("aria-current",Re===re)}),N.style.setProperty("--c",_e.color||"var(--accent)"),$.dataset.txt=_e.end?`${a.land} — ${_e.label}`:_e.label,N.classList.toggle("is-landed",!!_e.end),t?$.textContent=$.dataset.txt:Na($,.45),N.classList.add("is-talking"),clearTimeout(me),_e.end||(me=setTimeout(()=>N.classList.remove("is-talking"),2600))}};Xe.addEventListener("refresh",Le),Xe.create({start:0,end:"max",onUpdate:Oe}),Le()}const x=c("#hudBar"),y=c("#hudPct"),v=c("#hudSection");if(Xe.create({start:0,end:"max",onUpdate:N=>{x.style.transform=`scaleX(${N.progress})`,y.textContent=String(Math.round(N.progress*100)).padStart(3,"0"),h.velocity(N.getVelocity())}}),s.forEach(([N,G],W)=>Xe.create({trigger:N,start:"top 55%",end:"bottom 55%",onToggle:$=>{$.isActive&&(v.dataset.txt=`${String(W).padStart(2,"0")} — ${G}`,t?v.textContent=v.dataset.txt:Na(v,.5))}})),t)return;u(".label").forEach(N=>Xe.create({trigger:N,start:"top 92%",once:!0,onEnter:()=>Na(N,1.1)}));const T=u("#workList, #mdmPages, #caps, .stats"),w={v:0},b=de.quickSetter(T,"skewY","deg");Xe.create({start:0,end:"max",onUpdate:N=>{if(l.classList.contains("fx-off"))return;const G=de.utils.clamp(-3.5,3.5,N.getVelocity()/-420);Math.abs(G)>Math.abs(w.v)&&(w.v=G,de.to(w,{v:0,duration:.9,ease:"power3.out",overwrite:!0,onUpdate:()=>b(w.v)}))}});const C=u(".aurora i");de.ticker.add(N=>{l.classList.contains("fx-off")||C.forEach((G,W)=>{G.style.transform=`translate3d(${Math.sin(N*.11+W*2.1)*16}vw, ${Math.cos(N*.09+W*1.3)*12}vh, 0)`})}),de.to(".aurora",{opacity:1,scrollTrigger:{trigger:"#manifeste",start:"top 80%",end:"top 20%",scrub:!0}});const S=u(".bigmail span");if(de.from(S,{yPercent:110,opacity:0,rotate:8,duration:1.1,stagger:.022,ease:"expo.out",scrollTrigger:{trigger:f,start:"top 92%"}}),f.addEventListener("pointerenter",()=>de.to(S,{keyframes:[{y:"-0.22em",color:"#2f80ff",duration:.25},{y:0,color:"#eceef2",duration:.5,ease:"elastic.out(1,0.4)"}],stagger:.018,overwrite:!0})),!n)return;const M=u(".hero__line .char"),P=c(".hero__title");let U=[];const H=()=>{U=M.map(N=>{const G=N.getBoundingClientRect();return[G.left+G.width/2,G.top+G.height/2+window.scrollY]})};setTimeout(H,4200),window.addEventListener("resize",H),P.addEventListener("pointermove",N=>{U.length||H(),M.forEach((G,W)=>{const $=Math.hypot(N.clientX-U[W][0],N.clientY+window.scrollY-U[W][1]),z=Math.max(0,1-$/320);de.to(G,{y:`${-.11*z}em`,scaleY:1+.16*z,skewX:-9*z,color:z>.55?"#8ab8ff":"#eceef2",duration:.45,ease:"power3.out",overwrite:"auto"})})}),P.addEventListener("pointerleave",()=>de.to(M,{y:0,scaleY:1,skewX:0,color:"#eceef2",duration:.9,ease:"elastic.out(1,0.5)",stagger:.01})),u(".case__img, .mdm__pages img").forEach(N=>de.fromTo(N,{scale:1.08},{scale:1,ease:"none",scrollTrigger:{trigger:N,start:"top bottom",end:"bottom top",scrub:!0}}))}const nm={fr:{"rapport-lundi":[["Chaque erreur trouvée","Doublons, dates ou régions manquantes, quantités négatives, virgule oubliée : 6 règles passent sur chaque ligne du fichier."],["Chaque décision notée","Retirée, corrigée, gardée ou exclue : chaque ligne touchée apparaît dans le rapport avec son numéro de commande."],["L'erreur évitée, chiffrée","Le rapport montre ce que le fichier brut aurait annoncé : 126 196 € et +47 %, au lieu de 83 957 € et −2,2 %."],["L'IA ne calcule rien","Claude reçoit seulement les chiffres déjà calculés par le code, et rédige le commentaire à partir d'eux."],["Chaque nombre vérifié","Le script extrait chaque nombre du commentaire et le compare aux calculs ; un seul nombre inconnu, et le texte est rejeté."],["Visible à la lecture","Dans le rapport, chaque nombre retrouvé est surligné ; au survol, une bulle indique d'où il vient."],["Le rapport part toujours","Second essai si l'IA se trompe, puis un commentaire écrit par des règles fixes : jamais de rapport bloqué."],["Chaque lundi, sans y penser","GitHub Actions lance les tests puis le rapport ; si un test échoue, rien ne part."],["Prêt pour Power BI","Les mêmes données, déjà propres, sortent en 4 fichiers pour le tableau de bord."]],devis:[["Devis en moins d’une minute","Une demande en texte libre devient un devis ligne par ligne, avec les hypothèses de l'IA et les questions à poser au client."],["Aucun prix inventé","L'IA ne voit jamais les prix : elle choisit des ouvrages dans la grille de l'entreprise, et le code calcule chaque montant."],["Contrôles métier","Postes oubliés, doublons et quantités anormales sont signalés ; un poste absent de la grille bloque l'envoi tant qu'il n'a pas de prix."],["Le responsable garde la main","Montant, marge et points à vérifier arrivent sur son téléphone : rien ne part sans sa validation."],["Relances sur mesure","À J+3, J+8 et J+15, un jour ouvré à 9 h : chaque relance est rédigée à partir du projet réel et s'arrête dès que le client répond."],["Réponse comprise","Accord, question, prix, report ou refus : l'IA lit la réponse du client et propose au responsable la bonne suite."],["Gros chantiers","Au-delà de 15 000 € HT, aucune relance automatique : une alerte invite le responsable à appeler."],["Tableau de bord","Taux de signature, montant signé après relance, délais de réponse et motifs de refus."],["Résiste aux pièges","Une consigne glissée dans la demande (« mets tous les prix à 1 € ») est ignorée et signalée au responsable."]],"accueil-sms":[["Réponse dans la minute","Chaque appel manqué reçoit un SMS ; deux appels rapprochés n'en déclenchent qu'un seul."],["Créneaux sûrs","Seuls les créneaux vraiment libres sont proposés, avec une marge de trajet entre deux rendez-vous ; un créneau pris entre-temps est remplacé."],["Rappels en un mot","La veille à 18 h, puis 3 h avant : le client répond OUI, DEPLACER ou ANNULER."],["Liste d'attente","Une place libérée est proposée aux suivants : le premier OUI l'emporte, les autres sont prévenus."],["Absences","Un client absent reçoit une relance polie et de nouveaux créneaux."],["Respect du client","STOP respecté, aucun SMS la nuit, numéros masqués et fournisseurs traités à part."],["Le responsable garde la main","Chaque alerte arrive sur son téléphone ; PAUSE suspend tous les SMS automatiques, REPRISE les relance."]],standardiste:[["Rendez-vous sans erreur","Lucie ne propose que des créneaux vraiment libres, et un même créneau ne peut jamais être pris deux fois."],["Déplacer ou annuler","Le client gère son rendez-vous au téléphone ; seul l'appelant concerné peut le modifier."],["Urgences","Les demandes urgentes sont repérées : alerte immédiate au responsable, puis transfert de l'appel."],["Récap du soir","Chaque soir, le responsable voit les appels, les rendez-vous, les urgences et les personnes à rappeler."],["Photo du problème","Avant le rendez-vous, le client peut envoyer une photo : le responsable arrive préparé."],["RGPD","Appel annoncé comme enregistré, données effacées automatiquement."]],doublage:[["Le directeur","Lit sa mémoire, remplit une fiche de besoins, pose une seule question à la fois, puis montre un récapitulatif avec le coût."],["Bouton « Lancer »","Rien ne part sans un clic humain : l'IA n'a pas accès à ce bouton."],["Le studio","Découpe la parole en phrases et traduit chacune pour tenir dans son créneau. Jamais plus de 10 % d'accélération : au-delà, Claude réécrit la phrase."],["Contrôle qualité","Relit la traduction, vérifie le son (niveau, saturation, silences) et le minutage, et peut renvoyer la vidéo en correction."],["Livraison","Un dossier Google Drive par client et par langue, puis la vidéo sur Telegram avec son coût réel."],["Le réparateur","Surveille les pannes, relance une fois ce qui peut l’être sans risque et prévient sur Telegram."],["Salle de contrôle","Chaque agent au travail, en direct, en lecture seule."],["Garde-fous en base","La base refuse un clone de voix sans accord écrit enregistré ; le tunnel n'expose que les webhooks, jamais l'interface de n8n."],["Coûts mesurés","Le coût réel de chaque exécution est enregistré ; une alerte part sous 20 % de crédits ElevenLabs."],["Simulateur","Telegram, Claude, ElevenLabs et Google sont simulés : le test de bout en bout fait tourner le vrai n8n et le vrai ffmpeg sans dépenser un centime."],["Prospection prête","Un éclaireur note des créateurs, un commercial rédige dans leur langue, et chaque envoi attend une validation sur Telegram."]],jobhunter:[["Bot Telegram sécurisé","Sans le secret Telegram, refus immédiat ; un identifiant inconnu est ignoré et journalisé sans son message."],["Profileur","Lit le CV en PDF, cadre la recherche question par question et ne s’active qu’au clic sur « Confirmer »."],["Chercheur","74 opportunités reçues sur un test réel, 68 nouvelles, et 0 doublon au second passage."],["Analyste","Note chaque offre : 15 cas de test sur 15 corrects, trois fois de suite, grâce à des plafonds stricts."],["Enquêteur","Retrouve le vrai site de l'entreprise (19 cas sur 19) et n'invente jamais une adresse e-mail."],["Rédacteur et vérificateur","Le vérificateur relit chaque candidature contre le CV et l’offre ; la base refuse un e-mail sans relecture réussie."],["Coûts mesurés","0,07 $ par candidature rédigée, 0,01 $ pour noter 68 offres."],["Poste de pilotage","Radar des offres par département, agents en direct, tableau à glisser-déposer, palette Ctrl K, entonnoir et test A/B."],["Machine à états","Une seule table de règles pour le tableau, la simulation et les tests ; la page « Coulisses » la dessine à partir du code."],["Accessibilité","Clavier, annonces vocales en français, mouvement réduit et contrôles automatiques avec axe."]],aiguilleur:[["Bon collègue","Une fiche claire au bon collègue : résumé, action à faire, proposition de réponse."],["Urgences","Alerte sur Telegram et relance après 30 min sans prise en charge."],["Rapport du lundi","La semaine de la direction, chaque lundi à 8 h."],["Garde-fous","Rien ne part sans validation ; repli vers l’accueil si Claude ne répond pas."]]},en:{"rapport-lundi":[["Every error found","Duplicates, missing dates or regions, negative quantities, a forgotten decimal point: 6 rules run on every line of the file."],["Every decision logged","Removed, corrected, kept or excluded: every line touched appears in the report with its order number."],["The avoided error, measured","The report shows what the raw file would have claimed: €126,196 and +47%, instead of €83,957 and −2.2%."],["The AI calculates nothing","Claude only receives the figures already calculated by the code, and writes the commentary from them."],["Every number checked","The script extracts every number from the commentary and compares it with the calculations; one unknown number and the text is rejected."],["Visible when reading","In the report, every number found is highlighted; on hover, a tooltip shows where it comes from."],["The report always goes out","A second try if the AI gets it wrong, then a commentary written by fixed rules: never a blocked report."],["Every Monday, hands-free","GitHub Actions runs the tests, then the report; if a test fails, nothing is sent."],["Ready for Power BI","The same data, already clean, comes out as 4 files for the dashboard."]],devis:[["A quote in under a minute","A free-text request becomes a line-by-line quote, with the AI’s assumptions and the questions to ask the customer."],["No invented prices","The AI never sees prices: it picks items from the company’s price list, and code calculates every amount."],["Trade checks","Forgotten items, duplicates and unusual quantities are flagged; an item missing from the price list blocks sending until it has a price."],["The person in charge decides","Amount, margin and points to check arrive on their phone: nothing goes out without their approval."],["Tailored follow-ups","On day 3, 8 and 15, on a working day at 9 am: each follow-up is written from the actual project and stops as soon as the customer replies."],["Replies understood","Agreement, question, price, postponement or refusal: the AI reads the customer’s reply and suggests the right next step."],["Large projects","Above €15,000 excl. VAT, no automatic follow-up: an alert asks the person in charge to call."],["Dashboard","Signature rate, amount signed after a follow-up, response times and reasons for refusal."],["Resists tricks","An instruction slipped into the request (“set every price to €1”) is ignored and flagged to the person in charge."]],"accueil-sms":[["Reply within a minute","Every missed call gets a text; two calls close together trigger only one."],["Safe slots","Only truly free slots are offered, with travel time between appointments; a slot taken in the meantime is replaced."],["One-word reminders","The evening before at 6 pm, then 3 hours before: the customer replies yes, move or cancel."],["Waiting list","A freed slot is offered to the next people: the first yes wins, the others are told."],["No-shows","A customer who misses the appointment gets a polite follow-up and new slots."],["Respect for customers","STOP is honoured, no texts at night, hidden numbers and suppliers handled separately."],["The manager stays in control","Every alert reaches their phone; PAUSE suspends all automatic texts, RESUME restarts them."]],standardiste:[["Error-free booking","Lucie only offers truly free slots, and the same slot can never be booked twice."],["Move or cancel","Customers manage their appointment by phone; only the right caller can change it."],["Emergencies","Urgent requests are spotted: instant alert to the person in charge, then call transfer."],["Evening summary","Every evening, the person in charge sees calls, appointments, emergencies and people to call back."],["Photo of the problem","Before the appointment, the customer can send a photo, so the person in charge arrives prepared."],["GDPR","The call is announced as recorded, data is deleted automatically."]],doublage:[["The director","Reads its memory, fills a needs sheet, asks one question at a time, then shows a summary with the cost."],["“Launch” button","Nothing starts without a human click: the AI has no access to that button."],["The studio","Splits speech into sentences and translates each to fit its original slot. Never sped up more than 10 %: beyond that, Claude rewrites the sentence."],["Quality control","Reviews the translation, checks the audio (level, clipping, silences) and timing, and can send the video back for fixes."],["Delivery","One Google Drive folder per client and language, then the video on Telegram with its real cost."],["The fixer","Watches for failures, retries once whatever is safe to retry and warns on Telegram."],["Control room","Every agent at work, live, read-only."],["Database guardrails","The database rejects a voice clone without a recorded written consent; the tunnel only exposes webhooks, never the n8n UI."],["Measured costs","The real cost of every run is stored; an alert fires under 20 % of ElevenLabs credits."],["Simulator","Telegram, Claude, ElevenLabs and Google are mocked: the end-to-end test runs real n8n and real ffmpeg for free."],["Prospecting ready","A scout rates creators, a sales agent writes in their language, and every send waits for approval on Telegram."]],jobhunter:[["Secured Telegram bot","Rejected without the Telegram secret; an unknown ID is ignored and logged without its message."],["Profiler","Reads the PDF CV, frames the search question by question and only activates on “Confirm”."],["Researcher","74 opportunities received in a real test, 68 new, and 0 duplicate on the second pass."],["Analyst","Scores each offer: 15 test cases out of 15 correct, three times in a row, thanks to strict caps."],["Investigator","Finds the company’s real website (19 cases out of 19) and never invents an email address."],["Writer and reviewer","The reviewer checks each application against the CV and the offer; the database refuses an email without a passed review."],["Measured costs","$0.07 per drafted application, $0.01 to score 68 offers."],["Control room","Offer radar by département, live agents, drag-and-drop board, Ctrl K palette, funnel and A/B test."],["State machine","One rules table for the board, the simulation and the tests; the “Backstage” page draws it from the code."],["Accessibility","Keyboard, French screen-reader announcements, reduced motion and automated axe checks."]],aiguilleur:[["Right teammate","A clear brief for the right teammate: summary, action, suggested reply."],["Emergencies","Telegram alert and follow-up after 30 min without pickup."],["Monday report","Management’s week, every Monday at 8 am."],["Guardrails","Nothing is sent without approval; fallback to the front desk if Claude fails."]]}},im=r=>String(r).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),dw=r=>String(r).padStart(2,"0");function fw(r,e){const t=(nm[r]||nm.fr)[e];return t?`<section class="feats"><h4>${r==="fr"?"Sous le capot":"Under the hood"}</h4><div class="feats__grid">${t.map(([i,s],o)=>`<div class="feat"><span class="mono">${dw(o+1)}</span><b>${im(i)}</b><p>${im(s)}</p></div>`).join("")}</div></section>`:""}const oa=new I;function wi(r,e,t,n,i,s){const o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;oa.copy(e),oa[n]=0,oa.normalize();const c=.5*o/(o+a),u=1-oa.angleTo(r)/l;return Math.sign(oa[t])===1?u*c:a/(o+a)+c+c*(1-u)}class pw extends Fn{constructor(e=1,t=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new I,l=new I,c=new I(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,f=u.length/6,m=new I,_=.5/i;for(let g=0,p=0;g<u.length;g+=3,p+=2)switch(a.fromArray(u,g),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),u[g+0]=c.x*Math.sign(a.x)+l.x*s,u[g+1]=c.y*Math.sign(a.y)+l.y*s,u[g+2]=c.z*Math.sign(a.z)+l.z*s,h[g+0]=l.x,h[g+1]=l.y,h[g+2]=l.z,Math.floor(g/f)){case 0:m.set(1,0,0),d[p+0]=wi(m,l,"z","y",s,n),d[p+1]=1-wi(m,l,"y","z",s,t);break;case 1:m.set(-1,0,0),d[p+0]=1-wi(m,l,"z","y",s,n),d[p+1]=1-wi(m,l,"y","z",s,t);break;case 2:m.set(0,1,0),d[p+0]=1-wi(m,l,"x","z",s,e),d[p+1]=wi(m,l,"z","x",s,n);break;case 3:m.set(0,-1,0),d[p+0]=1-wi(m,l,"x","z",s,e),d[p+1]=1-wi(m,l,"z","x",s,n);break;case 4:m.set(0,0,1),d[p+0]=1-wi(m,l,"x","y",s,e),d[p+1]=1-wi(m,l,"y","x",s,t);break;case 5:m.set(0,0,-1),d[p+0]=wi(m,l,"x","y",s,e),d[p+1]=1-wi(m,l,"y","x",s,t);break}}}const zt={blue:3113215,ice:9091327,green:3530891,amber:16757575,red:16734810},Gn=[[-9,0],[-6,.9],[-3,0],[0,.6],[2.8,-1.7],[4.3,1.9],[7.4,.2]],mw=[zt.blue,zt.blue,zt.ice,zt.blue,zt.amber,zt.red,zt.green],rm=[[0,1,.35,zt.blue],[1,2,1.35,zt.blue],[2,3,2.35,zt.blue],[3,4,3.35,zt.amber],[3,5,4.35,zt.red],[4,6,5.35,zt.green],[5,6,5.35,zt.green]],ao=.75,aa=.085,la=.9,Yl=[[-.7,-9,0],[.35,-9,0],[1.1,-6,.9],[1.35,-6,.9],[2.1,-3,0],[2.35,-3,0],[3.1,0,.6],[3.35,0,.6],[4.1,2.6,-.9],[5.1,3.6,1.1],[5.35,3.8,1],[6.1,6,.3],[9,6,.3]],sd=r=>Math.min(1,Math.max(0,r)),Dn=(r,e,t)=>{const n=sd((t-r)/(e-r));return n*n*(3-2*n)},en=(r,e,t)=>r+(e-r)*t;function gw(){const r=document.createElement("canvas");r.width=r.height=128;const e=r.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.22,"rgba(255,255,255,.55)"),t.addColorStop(.55,"rgba(255,255,255,.13)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new sg(r)}function _w(){const i=document.createElement("canvas");i.width=512,i.height=407;const s=i.getContext("2d"),o=()=>{s.beginPath(),s.moveTo(82,56),s.arcTo(456,56,456,351,26),s.arcTo(456,351,56,351,26),s.arcTo(56,351,56,56,26),s.arcTo(56,56,456,56,26),s.closePath()};return s.strokeStyle="#fff",s.shadowColor="#fff",s.lineWidth=10,s.shadowBlur=34,s.globalAlpha=.5,o(),s.stroke(),s.lineWidth=4,s.shadowBlur=10,s.globalAlpha=1,o(),s.stroke(),new sg(i)}function vw(r,e){const t=new Gr,n=[],i=(a=.1)=>{const l=new ug({color:1845570,emissive:e.clone(),emissiveIntensity:a,metalness:.15,roughness:.4,flatShading:!0});return l.userData.base=a,n.push(l),l},s=(a,l,c=0,u=0,h=0)=>{const d=new Vt(a,l);return d.position.set(c,u,h),t.add(d),d},o=new Ji({color:15397375});if(r===0)s(new Fn(.4,.72,.07),i()),[.04,-.04].forEach(a=>{s(new Fn(.14,.03,.008),o,0,.29,a),s(new Fn(.3,.5,.004),new Ji({color:726052}),0,-.02,a)}),[.34,.46].forEach(a=>{const l=s(new Cc(a,.022,8,24,Math.PI/2.6),i(.45),.05,.12,0);l.rotation.z=-.15});else if(r===1)s(new Fn(.72,.44,.06),i()),s(new Fn(.16,.16,.06),i(),-.2,-.22,0).rotation.z=Math.PI/4,[-.17,0,.17].forEach(a=>[.036,-.036].forEach(l=>s(new Ho(.045,12,10),o,a,.01,l)));else if(r===2){s(new Ac(.2,0),i(.45));const a=new Vt(new Ac(.42,1),new Ji({color:e,wireframe:!0,transparent:!0,opacity:.5}));t.add(a),t.userData.shell=a}else if(r===3)[.2,0,-.2].forEach((a,l)=>s(new Fn(l===1?.7:.6,.13,.07),i(l===1?.3:.1),0,a,l===1?.06:0));else if(r===4)s(new Fn(.5,.66,.04),i()),[.17,.03,-.11].forEach((a,l)=>[.025,-.025].forEach(c=>s(new Fn(l===2?.2:.34,.035,.008),o,l===2?-.07:0,a,c)));else if(r===5)s(new Cc(.34,.036,10,44),i()),s(new Fn(.075,.27,.075),i(.45),0,.06,0),s(new Ho(.052,12,10),i(.45),0,-.17,0);else for(let a=0;a<9;a++)s(new Fn(.17,.17,.17),i(),(a%3-1)*.23,(1-Math.floor(a/3))*.23,0);return{g:t,mats:n}}const sm="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",xw=`
uniform float uFill; uniform vec3 uColor; uniform float uTime; varying vec2 vUv;
void main(){
  float on = step(.0005, uFill);
  float lit = smoothstep(uFill + .006, uFill - .006, vUv.x) * on;
  float head = smoothstep(.08, 0., abs(vUv.x - uFill)) * on * step(uFill, .9995);
  float dash = .72 + .28 * sin(vUv.x * 44. - uTime * 5.);
  vec3 col = mix(vec3(.022, .03, .055), uColor * dash * 1.2, lit) + vec3(1.) * head * .8;
  gl_FragColor = vec4(col, 1.);
  #include <colorspace_fragment>
}`,yw=`
uniform float uFill; uniform vec3 uColor; varying vec2 vUv;
void main(){
  float on = step(.0005, uFill);
  float lit = smoothstep(uFill + .01, uFill - .01, vUv.x) * on;
  float head = smoothstep(.1, 0., abs(vUv.x - uFill)) * on * step(uFill, .9995);
  gl_FragColor = vec4(uColor, lit * .17 + head * .55);
  #include <colorspace_fragment>
}`,Mw=`
uniform vec3 uFocus; uniform float uRadius; uniform float uTime; varying vec3 vW;
void main(){
  vec2 g = abs(fract(vW.xz / .6) - .5);
  float d = length(g);
  float dotA = smoothstep(.065, .03, d);
  float dist = distance(vW.xz, uFocus.xz);
  float fade = smoothstep(uRadius, uRadius * .2, dist);
  float wave = smoothstep(.7, 0., abs(dist - mod(uTime * 1.6, uRadius))) * (1. - dist / uRadius);
  vec3 col = mix(vec3(.2, .26, .4), vec3(.1, .34, 1.), clamp(wave, 0., 1.));
  gl_FragColor = vec4(col, dotA * fade * (.5 + wave * .9));
  #include <colorspace_fragment>
}`;function om({section:r,mount:e,labels:t,compact:n=!1}){const i=document.documentElement,s=document.createElement("canvas");s.className="pipe3d",s.setAttribute("aria-hidden","true");const o=new vg({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"});o.setPixelRatio(Math.min(window.devicePixelRatio||1,n?1.5:2));const a=document.createElement("i");a.className="pipe3d__shade",a.setAttribute("aria-hidden","true"),e.prepend(s,a),r.classList.add("is-3d");const l=new ig,c=new ei(30,1,.1,120),u={glow:gw(),rim:_w()},h={value:0};l.add(new hy(8229828,1.25));const d=new uy(16777215,1.7);d.position.set(-5,9,6),l.add(d);const f=new wp(11061503,0,9,2);f.position.set(0,1.2,3),l.add(f);const m={uFocus:{value:new I},uRadius:{value:16},uTime:h},_=new Vt(new tr(90,60),new Tn({transparent:!0,depthWrite:!1,uniforms:m,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:Mw}));_.rotation.x=-Math.PI/2,l.add(_);const g=new pw(1.9,.2,1.4,4,.08),p=Gn.map(([J,O],q)=>{const ee=new Ze(mw[q]),se=new Gr;se.position.set(J,0,O);const Ie=new Vt(g,new ug({color:1317676,metalness:.3,roughness:.42,emissive:ee.clone(),emissiveIntensity:0}));Ie.position.y=.1;const nt=new Vt(new tr(2.432,1.933),new Ji({map:u.rim,color:ee.clone(),transparent:!0,opacity:.2,blending:Nn,depthWrite:!1}));nt.rotation.x=-Math.PI/2,nt.position.y=.206;const ut=new Vt(new tr(4.6,3.9),new Ji({map:u.glow,color:ee.clone(),transparent:!0,opacity:0,blending:Nn,depthWrite:!1}));ut.rotation.x=-Math.PI/2,ut.position.y=.012;const fe=new Vt(new Ho(.045,12,8),new Ji({color:3817810}));fe.position.set(.78,.225,.53);const ye=()=>{const ge=new Vt(new Jd(1,1.05,72),new Ji({color:ee.clone(),transparent:!0,opacity:0,blending:Nn,side:$i,depthWrite:!1}));return ge.rotation.x=-Math.PI/2,ge.position.y=.03,ge},Q=ye(),te=ye(),xe=vw(q,ee);return xe.g.position.y=1,se.add(Ie,nt,ut,fe,Q,te,xe.g),l.add(se),{g:se,body:Ie,rim:nt,halo:ut,led:fe,ring:Q,ping:te,glyph:xe,accent:ee,spin:q*.9}}),x=rm.map(([J,O,q,ee])=>{const se=new I(Gn[J][0],.06,Gn[J][1]),Ie=new I(Gn[O][0],.06,Gn[O][1]),nt=(Ie.x-se.x)*.5,ut=new lg(se,new I(se.x+nt,.06,se.z),new I(Ie.x-nt,.06,Ie.z),Ie),fe={uFill:{value:0},uColor:{value:new Ze(ee)},uTime:h},ye=new Vt(new Rc(ut,56,.034,8,!1),new Tn({uniforms:fe,vertexShader:sm,fragmentShader:xw})),Q=new Vt(new Rc(ut,56,.13,8,!1),new Tn({uniforms:fe,vertexShader:sm,fragmentShader:yw,transparent:!0,depthWrite:!1,blending:Nn}));return l.add(ye,Q),{curve:ut,uniforms:fe,t0:q}}),y=(J,O,q)=>{const ee=new Ze(J),se=new Gr,Ie=new Vt(new Ho(O,18,12),new Ji({color:16777215})),nt=new _p(new ed({map:u.glow,color:ee.clone(),blending:Nn,depthWrite:!1,transparent:!0}));nt.scale.setScalar(O*10),se.add(Ie,nt);let ut=null;q&&(ut=new wp(ee.clone(),11,7,2),se.add(ut));const fe=[];for(let ye=0;ye<14;ye++){const Q=new _p(new ed({map:u.glow,color:ee.clone(),blending:Nn,depthWrite:!1,transparent:!0,opacity:0}));Q.scale.setScalar(O*(6-ye*.32)),l.add(Q),fe.push(Q)}return se.visible=!1,l.add(se),{g:se,halo:nt,light:ut,trail:fe,col:ee,size:O}},v=(J,O)=>{J.g.visible=O>.01,J.g.scale.setScalar(Math.max(O,.001)),J.halo.material.color.copy(J.col),J.light&&(J.light.color.copy(J.col),J.light.intensity=11*O);let q=J.g.position;J.trail.forEach((ee,se)=>{if(O<=.01){ee.position.copy(J.g.position),ee.material.opacity=0;return}ee.position.lerp(q,.42),ee.material.opacity=O*Math.min(1,ee.position.distanceTo(J.g.position)*2.4)*(1-se/J.trail.length)*.75,ee.material.color.copy(J.col),q=ee.position})},T=y(zt.ice,.11,!0),w=y(zt.red,.085,!1),b=y(zt.green,.06,!1),C=y(zt.green,.06,!1),S=y(zt.green,.1,!1),M=60,P=new Float32Array(M*3),U=[];for(let J=0;J<M;J++){const O=Math.random()*Math.PI*2,q=Math.random()*1.2+.15,ee=1.1+Math.random()*2.4;U.push([Math.cos(O)*Math.cos(q)*ee,Math.sin(q)*ee,Math.sin(O)*Math.cos(q)*ee])}const H=new cn;H.setAttribute("position",new Bt(P,3));const N=new Ia(H,new td({map:u.glow,color:zt.green,size:.2,transparent:!0,opacity:0,blending:Nn,depthWrite:!1}));N.frustumCulled=!1,l.add(N);const G=240,W=new Float32Array(G*3);for(let J=0;J<G;J++)W[J*3]=-14+Math.random()*26,W[J*3+1]=.3+Math.random()*4.2,W[J*3+2]=-7+Math.random()*13;const $=new cn;$.setAttribute("position",new Bt(W,3));const z=new Ia($,new td({map:u.glow,color:zt.ice,size:.07,transparent:!0,opacity:.55,blending:Nn,depthWrite:!1}));l.add(z);let oe=1,D=1,me=1.6,Le=0,Oe=-.7,Y=!0,ae=!1,ce=!1,re=-1,_e=0,Ve=performance.now(),Re=!1,rt=!1;const Je=new We(0,0),Ee=new fy,L=new Nr(new I(0,1,0),-1.2),xt={x:-9,z:0},qe=new I,V=new I,Ce=new I,ct=new I,Ne=new I,R=new I,E=new I,X=new Ze(zt.amber),ne=new Ze(zt.green),ie=new Ze(zt.ice),Z=new Ze(3817810),ve=new Ze,he=new I(Gn[4][0],.55,Gn[4][1]),Se=new Array(Gn.length).fill(0),Ge=J=>{let O=0;for(;O<Yl.length-2&&J>Yl[O+1][0];)O++;const q=Yl[O],ee=Yl[O+1],se=Dn(q[0],ee[0],J);xt.x=en(q[1],ee[1],se),xt.z=en(q[2],ee[2],se)},le=(J,O,q=.55)=>O.set(Gn[J][0],q,Gn[J][1]),pe=(J,O,q)=>(x[J].curve.getPointAt(O,q),q.y=.5+Math.sin(Math.PI*O)*.1,q),ze=(J,O,q,ee,se)=>se.set(en(en(J[0],O[0],ee),en(O[0],q[0],ee),ee),en(en(J[1],O[1],ee),en(O[1],q[1],ee),ee),en(en(J[2],O[2],ee),en(O[2],q[2],ee),ee));function He(J,O){const q=h.value;for(let De=0;De<Se.length;De++)Se[De]=Dn(De,De+.2,Oe);x.forEach(De=>{De.uniforms.uFill.value=Dn(0,1,(Oe-De.t0)/ao)}),re>=0&&re<1&&(re=Math.min(1,re+J/1.9),Y=!0);const ee=ce?re<0?1:Dn(0,.3,re):0,se=ve.copy(X).lerp(ne,ee),Ie=p[4];Ie.rim.material.color.copy(se),Ie.halo.material.color.copy(se),Ie.ring.material.color.copy(se),Ie.ping.material.color.copy(se),Ie.body.material.emissive.copy(se),Ie.glyph.mats.forEach(De=>De.emissive.copy(se)),x[3].uniforms.uColor.value.copy(se);let nt=1;if(Oe<0){const De=Dn(0,1,(Oe+.7)/.7);ze([-14,3.4,-3],[-11,3.2,-1],[Gn[0][0],.55,Gn[0][1]],De,T.g.position),nt=Dn(0,.25,De)}else{let De=!1;for(let Me=0;Me<4&&!De;Me++){const we=x[Me].t0;Oe<we?(le(rm[Me][0],T.g.position),De=!0):Oe<we+ao&&(pe(Me,Dn(0,1,(Oe-we)/ao),T.g.position),De=!0)}De||le(4,T.g.position,.55+(O?0:Math.sin(q*2)*.03))}T.col.copy(ie).lerp(se,Dn(3.9,4.15,Oe)),v(T,nt);let ut=0;Oe>=4.35?Oe<4.35+ao?(pe(4,Dn(0,1,(Oe-4.35)/ao),w.g.position),ut=1):(le(5,w.g.position),ut=.75):le(3,w.g.position),v(w,ut);const fe=(Oe-5.35)/ao,ye=fe>0&&fe<1?1:0;ye?(pe(5,Dn(0,1,fe),b.g.position),pe(6,Dn(0,1,fe),C.g.position)):(le(fe<=0?4:6,b.g.position),le(fe<=0?5:6,C.g.position)),v(b,ye),v(C,ye);const Q=re>0&&re<1&&Se[4]>.5;if(Q){const De=1-(1-re)**2.2;ze([he.x,he.y,he.z],[4.2,4.8,-2.8],[12,7.5,-9],De,S.g.position);const Me=1-(1-re)**3;for(let we=0;we<M;we++)P[we*3]=he.x+U[we][0]*Me,P[we*3+1]=he.y+U[we][1]*Me-Me*Me*.7,P[we*3+2]=he.z+U[we][2]*Me;H.attributes.position.needsUpdate=!0,N.material.opacity=(1-re)*.95}else S.g.position.copy(he),N.material.opacity=0;v(S,Q?1-Dn(.7,1,re):0),p.forEach((De,Me)=>{const we=Se[Me],st=Me<4?Dn(Me+.02,Me+.12,Oe)*(1-Dn(Me+.3,Me+.45,Oe)):0;De.body.material.emissiveIntensity=we*.09,De.rim.material.opacity=.2+we*.8,De.halo.material.opacity=we*.4+st*.15,De.led.material.color.copy(Z).lerp(Me===4&&ee<.5?X:ne,we),De.ring.scale.setScalar(1+we*1.5),De.ring.material.opacity=Math.sin(Math.PI*we)*.85;const ht=Me===4?we*(1-ee):Me===5?we:0;if(ht>.01&&!O){const dt=q*(Me===5?.9:.55)%1;De.ping.scale.setScalar(1+dt*1.5),De.ping.material.opacity=(1-dt)*.55*ht}else De.ping.material.opacity=0;const ot=De.glyph;O||(De.spin+=J*(.35+we*.45+st*6)),ot.g.rotation.y=De.spin,ot.g.position.y=1+(O?0:Math.sin(q*1.3+Me*1.7)*.05),ot.g.scale.setScalar(.8+we*.2+st*.08),ot.mats.forEach((dt,fn)=>{dt.emissiveIntensity=dt.userData.base+(Me===6?sd(we*9-fn)*1.15:we*1.05)+st*.8}),ot.g.userData.shell&&(ot.g.userData.shell.rotation.x=-De.spin*.6,ot.g.userData.shell.material.opacity=.3+we*.5)}),O||(z.position.y=Math.sin(q*.25)*.18),Ge(Oe);const te=Dn(0,aa,Le)*(1-Dn(la,1,Le)),xe=Math.max(1,1.5/me),ge=Math.max(1,1.9/me);qe.set(xt.x+.4,.6,xt.z*.5+.3),V.set(en(-1.2,qe.x-1.6*xe,te),en(10.5*ge,qe.y+4.4*xe,te),en(17.5*ge,qe.z+8.4*xe,te)),Ce.set(en(-1.2,qe.x,te),en(0,qe.y,te),en(1.5,qe.z,te)),rt&&(V.x+=Je.x*.7,V.y+=Je.y*.35);const ke=O||!Re?1:1-Math.exp(-J*6);ct.lerp(V,ke),Ne.lerp(Ce,ke),Re=!0,c.position.copy(ct),c.lookAt(Ne),c.updateMatrixWorld(),m.uFocus.value.set(en(-1.2,qe.x,te),0,en(1.5,qe.z,te)),m.uRadius.value=en(26*ge,15*xe,te),Ee.setFromCamera(Je,c),rt&&Ee.ray.intersectPlane(L,E)&&f.position.lerp(E,.25),f.intensity+=((rt?16:0)-f.intensity)*.12,t.forEach((De,Me)=>{R.set(Gn[Me][0],0,Gn[Me][1]+1).project(c);const we=(R.x*.5+.5)*oe,st=(-R.y*.5+.5)*D,ot=(!n||te>.6&&Math.abs(Me+.1-Oe)<1.3)&&R.z<1&&we>-90&&we<oe+90&&st>D*.2&&st<D+20;De.style.transform=`translate3d(${we.toFixed(1)}px, ${(st+10).toFixed(1)}px, 0)`,De.style.opacity=ot?(.42+.58*Se[Me]).toFixed(2):"0",De.style.visibility=ot?"visible":"hidden"})}const be=J=>{_e=requestAnimationFrame(be);const O=Math.min((J-Ve)/1e3,.05);if(Ve=J,!ae||document.hidden)return;const q=i.classList.contains("fx-off");q&&!Y||(q||(h.value+=O),Y=!1,He(O,q),o.render(l,c))},it=()=>{oe=e.clientWidth||window.innerWidth,D=e.clientHeight||window.innerHeight,me=oe/D,o.setSize(oe,D,!1),c.aspect=me,me<1?c.setViewOffset(oe,D,0,-D*.1,oe,D):c.clearViewOffset(),c.updateProjectionMatrix(),Y=!0},Ke=new ResizeObserver(it);Ke.observe(e),it();const at=new IntersectionObserver(J=>{ae=J[0].isIntersecting,Y=!0},{rootMargin:"10% 0px"});at.observe(e);const F=J=>{const O=e.getBoundingClientRect(),q=(J.clientX-O.left)/O.width,ee=(J.clientY-O.top)/O.height;rt=q>=0&&q<=1&&ee>=0&&ee<=1,Je.set(q*2-1,1-ee*2)};return window.addEventListener("pointermove",F,{passive:!0}),_e=requestAnimationFrame(be),{steps:Gn.length,setProgress(J){return Le=sd(J),Oe=Le<aa?-.7+Le/aa*.7:Le<la?(Le-aa)/(la-aa)*6.6:6.6+(Le-la)/(1-la)*.4,Y=!0,Oe},validate(){ce||(ce=!0,re=0,Y=!0)},destroy(){cancelAnimationFrame(_e),Ke.disconnect(),at.disconnect(),window.removeEventListener("pointermove",F),l.traverse(J=>{J.geometry?.dispose(),J.material&&(Array.isArray(J.material)?J.material:[J.material]).forEach(O=>O.dispose())}),u.glow.dispose(),u.rim.dispose(),o.dispose(),s.remove(),a.remove(),r.classList.remove("is-3d"),t.forEach(J=>{J.style.transform="",J.style.opacity="",J.style.visibility=""})}}}de.registerPlugin(Xe);Xe.addEventListener("refreshInit",()=>Xe.sort((r,e)=>{const t=r.trigger,n=e.trigger;return!t||!n||t===n?t===n?0:t?1:-1:t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}));const Pe=(r,e=document)=>e.querySelector(r),yn=(r,e=document)=>[...e.querySelectorAll(r)],dn=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Mg=window.matchMedia("(hover: hover) and (pointer: fine)").matches,Sg=new URLSearchParams(location.search),od=dn||Sg.has("og");let Ka=!1,Za=!1,bg=null;try{bg=localStorage.getItem("lang")}catch{}const ti=Sg.get("lang")||bg||((navigator.language||"fr").startsWith("fr")?"fr":"en"),Xt=Xf[ti]||Xf.fr,Jt=Xt.ui;document.documentElement.lang=ti;document.title=Xt.meta.title;Pe('meta[name="description"]').setAttribute("content",Xt.meta.description);yn("[data-i18n]").forEach(r=>{const e=Jt[r.dataset.i18n];e!=null&&(r.innerHTML=e)});const wg=Pe("#langBtn");wg.setAttribute("aria-label",Jt["lang.switch"]);Pe(".lang__on").textContent=ti.toUpperCase();Pe(".lang__off").textContent=ti==="fr"?"EN":"FR";const et=r=>String(r).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Er=r=>String(r).padStart(2,"0");Pe("#stats").innerHTML=Xt.stats.map(r=>`<div class="stat"><div class="stat__n"><span data-count="${r.n}">0</span><small>${et(r.suffix)}</small></div><p>${et(r.label)}</p></div>`).join("");const es=Xt.projects.length;Pe("#workStage").innerHTML=Xt.projects.map((r,e)=>`<article class="slide" data-project="${r.id}" style="--c:${r.color}" aria-hidden="true">
  <p class="slide__n mono"><b>${Er(e+1)}</b> / ${Er(es)} — ${et(r.year)}</p>
  <h3 class="slide__title">${et(r.title)}</h3>
  <p class="slide__sub">${et(r.sub)}</p>
  <p class="slide__summary">${et(r.summary)}</p>
  <div class="slide__metrics">${r.metrics.slice(0,3).map(([t,n])=>`<div><b>${et(t)}</b><span>${et(n)}</span></div>`).join("")}</div>
  <div class="slide__foot"><button class="btn btn--primary slide__open" type="button" data-open="${r.id}" data-magnetic><span class="btn__fill"></span><span class="btn__label">${et(Jt["work.open"])}</span><span class="btn__arrow">→</span></button>
    <span class="slide__tags">${r.tags.map(t=>`<i class="tag">${et(t)}</i>`).join("")}</span></div></article>`).join("");Pe("#workOdo").innerHTML=Xt.projects.map((r,e)=>`<span>${Er(e+1)}</span>`).join("");Pe("#workRail").innerHTML=Xt.projects.map((r,e)=>`<button type="button" data-go="${e}"><i>${Er(e+1)}</i><span>${et(r.short)}</span></button>`).join("")+'<span class="work__bar"><i id="workBar"></i></span>';const Eo=Xt.pipeline.human;Pe("#pipelineGraph").innerHTML=Xt.pipeline.nodes.map(([r,e],t)=>`<div class="node${t===Eo.index?" node--human":""}"><div class="node__box"><div class="node__i mono"><span>${Er(t+1)}</span><b></b></div><div class="node__t">${et(r)}</div><div class="node__d">${et(e)}</div>${t===Eo.index?`<button class="node__ok mono" type="button">${et(Eo.btn)}</button>`:""}</div><i class="node__link"></i></div>`).join("");Pe("#pipelineLog").innerHTML=Xt.pipeline.log.map(r=>`<p>${et(r)}</p>`).join("")+`<p class="is-human">${et(Eo.log)}</p>`;Pe("#reel").innerHTML=Xt.motion.map((r,e)=>`<button class="clip" type="button" style="aspect-ratio:${r.ratio}" data-video="${r.src}" data-cursor="view" aria-label="${et(Jt["motion.play"])} — ${et(r.title)}">
  <video muted loop playsinline preload="none" poster="${r.poster}" data-src="${r.src}"></video><span class="clip__n mono">${Er(e+1)}</span>
  <span class="clip__cap"><strong>${et(r.title)}</strong><span class="mono">${et(r.meta)}</span></span></button>`).join("");Pe("#caps").innerHTML=Xt.caps.map(([r,e],t)=>`<article class="cap"><span class="cap__n mono">${Er(t+1)}</span><h3>${et(r)}</h3><ul>${e.map(n=>`<li>${et(n)}</li>`).join("")}</ul></article>`).join("");Pe("#path").innerHTML=Xt.path.map(([r,e,t,n])=>`<li class="step"><span class="step__y mono">${et(r)}</span><div><h3>${et(e)}</h3><p class="step__o">${et(t)}</p></div><p class="step__d">${et(n)}</p></li>`).join("");function Tg(r,e="w"){const t=n=>{[...n.childNodes].forEach(i=>{if(i.nodeType===3){const s=document.createDocumentFragment();i.textContent.split(/(\s+)/).forEach(o=>{if(!o)return;if(/^\s+$/.test(o)){s.append(" ");return}const a=document.createElement("span");if(a.className=e,e==="w"){const l=document.createElement("span");l.textContent=o,a.append(l)}else a.textContent=o;s.append(a)}),i.replaceWith(s)}else i.nodeType===1&&t(i)})};t(r)}yn('[data-split="chars"]').forEach(r=>{const e=[...r.childNodes].map(t=>t.nodeType===3?[...t.textContent].map(n=>`<span class="char">${n}</span>`).join(""):`<span class="char">${t.outerHTML}</span>`).join("");r.innerHTML=e});yn(".title, .contact__title, .slide__title").forEach(r=>Tg(r));Tg(Pe("#manifestoText"),"mw");let sn=null;dn||(sn=new Tv({duration:1.15,smoothWheel:!0}),sn.on("scroll",Xe.update),de.ticker.add(r=>sn.raf(r*1e3)),de.ticker.lagSmoothing(0),od||sn.stop());const Sw=r=>{const e=Pe(r);e&&(sn?sn.scrollTo(e,{duration:1.6}):e.scrollIntoView())};document.addEventListener("click",r=>{const e=r.target.closest('a[href^="#"]');e&&(r.preventDefault(),zc(),tf(),qo(),Sw(e.getAttribute("href")))});let Pt=null,ad=!1;try{Pt=cw(Pe("#gl"),{reduced:dn,onQuality:r=>{r>=2&&window.dispatchEvent(new CustomEvent("world:slow"))}})}catch{Pe("#gl").remove()}const Eg=[],zi={},vs=(r,e)=>{const t=Xe.create(r);return Eg.push({st:t,map:e}),t};function Ag(){if(!Pt||ad)return;let r=wn.sphere;Eg.forEach(({st:e,map:t})=>{r+=t?t(e.progress):e.progress}),Pt.k=r}const bw=r=>{const e=r*(es-1),t=Math.min(es-2,Math.floor(e)),n=Math.min(1,Math.max(0,(e-t-.22)/.56));return t+n*n*(3-2*n)};let Cg=!1;try{Cg=sessionStorage.getItem("seen")==="1",sessionStorage.setItem("seen","1")}catch{}function ld(r=0){return de.timeline({defaults:{ease:"expo.out"}}).fromTo(".hero__line .char",{yPercent:120,rotate:6,rotateX:-85,transformPerspective:700},{yPercent:0,rotate:0,rotateX:0,duration:1.5,stagger:.035},r).fromTo(".hero__top > *, .hero__bottom > *",{y:26,opacity:0},{y:0,opacity:1,duration:1.1,stagger:.08},r+.55).fromTo(".header > *",{y:-30,opacity:0},{y:0,opacity:1,duration:1,stagger:.08},r+.45).from(".hero__bottom",{"--line":0,duration:1},r+.45)}function ww(){if(document.body.classList.remove("is-loading"),!Pt){sn?.start(),ld(),Xe.refresh();return}ad=!0;const r={k:wn.cloud},e=()=>{Pt.k=r.k};de.timeline().to(r,{k:wn.name,duration:1.7,ease:"power3.out",onUpdate:e}).to(r,{k:wn.sphere,duration:1.7,ease:"power2.inOut",onUpdate:e},"+=0.55").add(()=>{ld(),sn?.start()},"-=1.25").add(()=>{ad=!1,Ag(),Xe.refresh()})}if(od||Cg)Pe("#loader").remove(),document.body.classList.remove("is-loading"),sn?.start(),Pt?.jump(wn.sphere),od||ld(.1);else{de.set(".hero__line .char",{yPercent:120}),de.set(".hero__top > *, .hero__bottom > *, .header > *",{opacity:0});const r={v:0};de.timeline().to(".loader__log li",{opacity:1,y:0,duration:.3,stagger:.22,ease:"power2.out"},.05).to(r,{v:100,duration:1.4,ease:"power2.inOut",onUpdate:()=>{Pe("#loaderCount").textContent=String(Math.round(r.v)).padStart(3,"0")}},0).to("#loaderBar",{scaleX:1,duration:1.4,ease:"power2.inOut"},0).to(".loader__count, .loader__log, .loader__name",{yPercent:-40,opacity:0,duration:.5,ease:"power3.in",stagger:.04},"+=0.1").add(ww,"-=0.1").to("#loader",{clipPath:"inset(0 0 100% 0)",duration:.9,ease:"expo.inOut"},"-=0.1").set("#loader",{display:"none"})}if(!dn){Pt&&(zi.manifeste=vs({trigger:".hero",start:"top top",end:"bottom top"}),vs({trigger:"#travaux",start:"top 75%",endTrigger:"#workPin",end:"top top"})),de.to(".hero__title",{yPercent:-18,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}}),de.to(".hero__line--right",{xPercent:-6,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}});const r=Pe("#marquee");r.innerHTML+=r.innerHTML;let e=0,t=1;Xe.create({start:0,end:"max",onUpdate:n=>{const i=n.getVelocity();t=1+Math.min(Math.abs(i)/220,9)*(n.direction||1),Pt&&(Pt.velocity=Math.min(Math.abs(i)/3200,1))}}),de.ticker.add(Ag),de.ticker.add(()=>{e-=t*.9,t+=(1-t)*.06;const n=r.scrollWidth/2;e<=-n&&(e+=n),e>0&&(e-=n),r.style.transform=`translate3d(${e}px,0,0)`}),de.to("#manifestoText .mw",{opacity:1,stagger:.06,ease:"none",scrollTrigger:{trigger:"#manifestoText",start:"top 82%",end:"bottom 45%",scrub:.6}}),yn(".title, .contact__title").forEach(n=>{n.closest(".pipeline")||de.from(yn(".w > span",n),{yPercent:115,rotate:4,duration:1.25,ease:"expo.out",stagger:.06,scrollTrigger:{trigger:n,start:"top 88%"}})}),yn("[data-count]").forEach(n=>{const i={v:0},s=+n.dataset.count;de.to(i,{v:s,duration:1.8,ease:"power3.out",onUpdate:()=>{n.textContent=Math.round(i.v)},scrollTrigger:{trigger:n,start:"top 90%"}})}),de.from(".stat",{y:40,opacity:0,rotateX:-70,transformPerspective:800,transformOrigin:"50% 0%",duration:1.1,stagger:.09,ease:"expo.out",scrollTrigger:{trigger:"#stats",start:"top 88%"}}),de.from(".cap",{y:50,opacity:0,rotateX:-55,transformPerspective:900,transformOrigin:"50% 0%",duration:1.2,stagger:.08,ease:"expo.out",scrollTrigger:{trigger:"#caps",start:"top 85%"}}),yn(".step").forEach(n=>de.from(n,{y:34,opacity:0,rotateX:-40,transformPerspective:900,transformOrigin:"50% 0%",duration:1.1,ease:"expo.out",scrollTrigger:{trigger:n,start:"top 92%"}})),de.set("#mdmPages",{perspective:1500}),de.from("#mdmPages img",{yPercent:n=>20+n*12,rotateY:n=>-58+n*9,rotateX:12,z:n=>-280-n*70,opacity:.25,transformOrigin:"0% 50%",ease:"none",scrollTrigger:{trigger:"#mdmPages",start:"top bottom",end:"bottom 72%",scrub:.8}}),de.from(".contact__text, .contact__actions > *, .contact__list > div",{y:30,opacity:0,duration:1,stagger:.06,ease:"expo.out",scrollTrigger:{trigger:".contact__text",start:"top 92%"}}),Xe.create({start:200,end:"max",onUpdate:n=>Pe("#header").classList.toggle("is-hidden",n.direction===1&&!Ka)})}const bs=yn(".slide"),Tw=yn("#workRail button"),Ew=Pe("#workOdo"),Aw=Pe("#workBar"),Qd=Pe("#workPin"),$l=r=>[...r.children];let ca=-1,yr=null;function am(r){if(r===ca)return;const e=r>ca?1:-1,t=bs[ca],n=bs[r];ca=r,Tw.forEach((i,s)=>{i.classList.toggle("is-active",s===r),i.classList.toggle("is-done",s<r),i.setAttribute("aria-current",s===r?"true":"false")}),Qd.style.setProperty("--c",Xt.projects[r].color),bs.forEach((i,s)=>i.setAttribute("aria-hidden",s===r?"false":"true")),de.to(Ew,{yPercent:-r*100/es,duration:.9,ease:"expo.inOut",overwrite:!0}),t&&(de.killTweensOf($l(t)),de.to($l(t),{y:-30*e,opacity:0,filter:"blur(8px)",duration:.34,ease:"power2.in",stagger:.02,onComplete:()=>{bs[ca]!==t&&t.classList.remove("is-active")}})),n.classList.add("is-active"),de.killTweensOf($l(n)),de.fromTo($l(n),{y:54*e,opacity:0,filter:"blur(10px)"},{y:0,opacity:1,filter:"blur(0px)",duration:.95,ease:"expo.out",stagger:.055,delay:t?.16:0,clearProps:"filter"}),de.fromTo(yn(".slide__title .w > span",n),{yPercent:115*e},{yPercent:0,duration:1.1,ease:"expo.out",stagger:.04,delay:t?.2:.05,overwrite:!0}),yn(".slide__metrics b",n).forEach((i,s)=>de.delayedCall(.3+s*.09,()=>Na(i,.7)))}dn?(Pe("#travaux").classList.add("work--static"),bs.forEach(r=>{r.classList.add("is-active"),r.setAttribute("aria-hidden","false")})):(am(0),yr=vs({trigger:Qd,start:"top top",end:()=>`+=${Math.round(window.innerHeight*.85*(es-1))}`,pin:!0,scrub:!0,invalidateOnRefresh:!0,onUpdate:r=>{am(Math.round(r.progress*(es-1))),Aw.style.transform=`scaleX(${r.progress})`}},bw),zi.pipeline=vs({trigger:".pipeline",start:"top bottom",end:"top top"}),zi.motion=Xe.create({trigger:"#motion",start:"top 30%"}),zi.caps=vs({trigger:"#capacites",start:"top bottom",end:"top 25%"}),zi.path=vs({trigger:"#parcours",start:"top bottom",end:"top 25%"}),zi.contact=vs({trigger:"#contact",start:"top 80%",end:"bottom bottom"}));function lm(){if(!Pt||dn)return;const r=Qd.getBoundingClientRect(),e=Pe("#workStage").getBoundingClientRect(),t=e.top-r.top,n=Pe("#workRail").getBoundingClientRect().top-r.top-12,i={},s=o=>o.w>60&&o.h>60?Math.min(o.w/3.2,o.h/3.1):0;bs.forEach((o,a)=>{const l=[...o.children],c=o.getBoundingClientRect(),u=c.top-r.top+Math.min(...l.map(m=>m.offsetTop))-16,h=c.left+Math.max(...l.map(m=>m.offsetLeft+m.offsetWidth))+28,d={x:h,y:t,w:e.right-h,h:n-t},f={x:e.left,y:Math.min(t,64),w:e.width,top:!0};f.h=u-f.y,i[vn[wn.rapport+a]]=s(d)>=s(f)?d:f}),Pt.stages=i}Pt&&!dn&&(lm(),Xe.addEventListener("refresh",lm));function Cw(){const r=Xe.maxScroll(window),e=i=>i?i.getBoundingClientRect().top+window.scrollY-window.innerHeight*.3:0,t=(i,s,o=!0)=>i?o?i.end:i.start:e(Pe(s)),n=[{label:ti==="fr"?"Accueil":"Home",y:0},{label:ti==="fr"?"Manifeste":"Manifesto",y:t(zi.manifeste,"#manifeste")},...Xt.projects.map((i,s)=>({label:i.short,color:i.color,sub:!0,y:yr?yr.start+(yr.end-yr.start)*(s/(es-1)):e(bs[s])})),{label:Jt["nav.pipeline"],y:t(zi.pipeline,"#pipeline")},{label:Jt["nav.motion"],y:t(zi.motion,"#motion",!1)},{label:ti==="fr"?"Capacités":"Capabilities",y:t(zi.caps,"#capacites")},{label:Jt["nav.path"],y:t(zi.path,"#parcours")},{label:Jt["nav.contact"],y:r,end:!0}];return n.forEach(i=>{i.y=Math.max(0,Math.min(r,i.y))}),n}Pe("#workRail").addEventListener("click",r=>{const e=r.target.closest("[data-go]");if(!e||!yr)return;const t=yr.start+(yr.end-yr.start)*(+e.dataset.go/(es-1));sn?sn.scrollTo(t,{duration:1.2}):window.scrollTo(0,t)});const xa=Pe(".pipeline"),go=yn(".node"),Bu=yn("#pipelineLog p:not(.is-human)"),zu=Pe("#pipelineLog .is-human");let gn=null,Qa=!1,Rg=0;function ya(r){const e=go.length,t=r*e;Rg=r,go.forEach((i,s)=>{i.classList.toggle("is-on",t>=s+.15),Pe(".node__link",i).style.setProperty("--p",Math.max(0,Math.min(1,t-s-.35)*1.6).toFixed(3))}),Bu.forEach((i,s)=>i.classList.toggle("is-on",t>=s+.3)),zu.classList.toggle("is-on",Qa&&t>=Eo.index+.15);const n=[...Bu,zu].filter(i=>i.classList.contains("is-on"));[...Bu,zu].forEach(i=>i.classList.toggle("is-tail",n.indexOf(i)>=Math.max(0,n.length-3)&&n.includes(i)))}Pe(".node__ok").addEventListener("click",()=>{Qa||(Qa=!0,xa.classList.add("is-validated"),Pe(".node--human .node__d").textContent=Eo.done,gn?.validate(),ya(Rg))});const cm=de.matchMedia(),el=yn(".clip"),mr=el.map(()=>({ry:0,z:0,hx:0,hy:0}));let cd=!1;const _o=r=>{const e=mr[r];el[r].style.transform=`${cd?"":"perspective(900px) "}translateZ(${e.z.toFixed(1)}px) rotateY(${(e.ry+e.hy).toFixed(2)}deg) rotateX(${e.hx.toFixed(2)}deg)`};dn?ya(1):(cm.add("(min-width: 761px)",()=>{de.from(".pipeline .w > span",{yPercent:115,duration:1.2,ease:"expo.out",stagger:.05,scrollTrigger:{trigger:".pipeline",start:"top 70%"}});try{gn=om({section:xa,mount:Pe("#pipelineGraph"),labels:go})}catch{gn=null,xa.classList.remove("is-3d")}gn&&Qa&&gn.validate();const r=i=>ya(gn?gn.setProgress(i)/go.length:i*1.08);Xe.create({trigger:".pipeline__pin",start:"top top",end:gn?"+=3000":"+=2400",pin:!0,scrub:.5,onUpdate:i=>r(i.progress),onToggle:i=>{!Pt||!gn||(i.isActive?Pt.pause():Pt.play())}}),r(0);const e=Pe("#reel"),t=()=>Math.max(0,e.scrollWidth-window.innerWidth+parseFloat(getComputedStyle(e).paddingRight));cd=!0;const n=()=>{const i=window.innerWidth,s=e.getBoundingClientRect().left;el.forEach((o,a)=>{const l=de.utils.clamp(-1.4,1.4,(s+o.offsetLeft+o.offsetWidth/2-i/2)/i);mr[a].ry=-l*40,mr[a].z=-(Math.abs(l)**1.6)*300,_o(a)})};return de.to(e,{x:()=>-t(),ease:"none",onUpdate:n,scrollTrigger:{trigger:e,start:"center center",end:()=>`+=${t()}`,pin:".motion",scrub:.6,invalidateOnRefresh:!0,onRefresh:n}}),n(),()=>{gn?.destroy(),gn=null,cd=!1,mr.forEach((i,s)=>{i.ry=0,i.z=0,_o(s)}),Pt&&Pt.play()}}),cm.add("(max-width: 760px)",()=>{de.from(".pipeline .w > span",{yPercent:115,duration:1.2,ease:"expo.out",stagger:.05,scrollTrigger:{trigger:".pipeline",start:"top 80%"}});try{gn=om({section:xa,mount:Pe("#pipelineGraph"),labels:go,compact:!0})}catch{gn=null,xa.classList.remove("is-3d")}if(gn){Qa&&gn.validate();const t=n=>ya(gn.setProgress(n)/go.length);Xe.create({trigger:".pipeline__pin",start:"top top",end:"+=2400",pin:!0,scrub:.5,onUpdate:n=>t(n.progress),onToggle:n=>{Pt&&(n.isActive?Pt.pause():Pt.play())}}),t(0)}else Xe.create({trigger:".pipeline__stage",start:"top 75%",end:"bottom 55%",scrub:.5,onUpdate:t=>ya(t.progress*1.08)});const r=Pe("#reel"),e=()=>{const t=window.innerWidth,n=r.getBoundingClientRect().left-r.scrollLeft;el.forEach((i,s)=>{const o=de.utils.clamp(-1.2,1.2,(n+i.offsetLeft+i.offsetWidth/2-t/2)/t);mr[s].ry=-o*26,mr[s].z=-(Math.abs(o)**1.5)*140,_o(s)})};return r.addEventListener("scroll",e,{passive:!0}),e(),()=>{r.removeEventListener("scroll",e),gn?.destroy(),gn=null,mr.forEach((t,n)=>{t.ry=0,t.z=0,_o(n)}),Pt&&Pt.play()}}));const Rw=new IntersectionObserver(r=>r.forEach(e=>{const t=e.target;e.isIntersecting?(t.src||(t.src=t.dataset.src),dn||t.play().catch(()=>{})):t.pause()}),{threshold:.25});yn(".clip video").forEach(r=>Rw.observe(r));const Mr=Pe("#lightbox"),Ao=Pe("#lightboxVideo");let Wo=null;function Pw(r){Wo=document.activeElement,Ao.src=r,Mr.setAttribute("aria-hidden","false"),de.set(Mr,{visibility:"visible"}),de.to(Mr,{opacity:1,duration:.4}),de.fromTo(Ao,{scale:.9,y:30},{scale:1,y:0,duration:.8,ease:"expo.out"}),sn?.stop(),Ao.play().catch(()=>{}),Pe("#lightboxClose").focus()}function ef(){Mr.getAttribute("aria-hidden")!=="true"&&(Mr.setAttribute("aria-hidden","true"),Ao.pause(),de.to(Mr,{opacity:0,duration:.3,onComplete:()=>{de.set(Mr,{visibility:"hidden"}),Ao.removeAttribute("src"),Ao.load()}}),sn?.start(),Wo?.focus())}Pe("#reel").addEventListener("click",r=>{const e=r.target.closest(".clip");e&&Pw(e.dataset.video)});Pe("#lightboxClose").addEventListener("click",ef);Mr.addEventListener("click",r=>{r.target===Mr&&ef()});const Pc=Pe("#case"),Pg=Pe("#caseBody");function ud(r){const e=Xt.projects.findIndex(i=>i.id===r),t=Xt.projects[e],n=Xt.projects[(e+1)%Xt.projects.length];Pg.innerHTML=`<p class="case__n mono">${Er(e+1)} / ${Er(Xt.projects.length)} — ${et(t.year)}</p>
    <h2 class="case__title" id="caseTitle">${et(t.title)}</h2><p class="case__sub">${et(t.sub)}</p>
    <div class="case__grid"><div><p class="case__summary">${et(t.summary)}</p>${t.img?`<img class="case__img" src="${t.img}" alt="${et(t.title)}" />`:""}
      <div class="case__links">${t.links.map(([i,s])=>`<a class="btn btn--primary" href="${s}"${s.startsWith("#")?"":' target="_blank" rel="noopener"'}><span class="btn__fill"></span><span>${et(i)}</span><span class="btn__arrow">→</span></a>`).join("")}
        <button class="btn" type="button" data-next="${n.id}"><span class="btn__fill"></span><span>${et(Jt["case.next"])} — ${et(n.title)}</span><span class="btn__arrow">→</span></button></div></div>
      <div><h4>${et(Jt["case.results"])}</h4><div class="metrics">${t.metrics.map(([i,s])=>`<div class="metric"><b>${et(i)}</b><span>${et(s)}</span></div>`).join("")}</div>
        <h4>${et(Jt["case.stack"])}</h4><div class="case__stack">${t.stack.map(i=>`<i class="tag">${et(i)}</i>`).join("")}</div>
        <h4>${et(Jt["case.built"])}</h4><ul class="case__built">${t.built.map(i=>`<li>${et(i)}</li>`).join("")}</ul></div>${fw(ti,t.id)}</div>`,Pe(".case__scroll").scrollTop=0,dn||de.from("#caseBody .case__n, #caseBody .case__title, #caseBody .case__sub, #caseBody .case__summary, #caseBody .case__img, #caseBody .metric, #caseBody .case__built li, #caseBody .case__links, #caseBody .feat",{y:40,opacity:0,duration:.9,stagger:.04,ease:"expo.out",delay:.15})}function Dg(r){Wo=document.activeElement,Za=!0,Pc.setAttribute("aria-hidden","false"),sn?.stop(),Fg(),de.set(Pc,{visibility:"visible"}),dn?(de.set(".case__scroll",{clipPath:"inset(0% 0 0 0)"}),ud(r)):de.timeline().fromTo(".case__curtain",{scaleY:0,transformOrigin:"bottom"},{scaleY:1,duration:.6,ease:"expo.inOut"}).add(()=>ud(r)).fromTo(".case__scroll",{clipPath:"inset(100% 0 0 0)"},{clipPath:"inset(0% 0 0 0)",duration:.8,ease:"expo.inOut"},"-=0.15"),Pe("#caseClose").focus()}function tf(){Za&&(Za=!1,Pc.setAttribute("aria-hidden","true"),de.timeline({onComplete:()=>{de.set(Pc,{visibility:"hidden"}),sn?.start(),Wo?.focus?.()}}).to(".case__scroll",{clipPath:"inset(0 0 100% 0)",duration:dn?0:.6,ease:"expo.inOut"}).to(".case__curtain",{scaleY:0,transformOrigin:"top",duration:dn?0:.5,ease:"expo.inOut"},"-=0.3"))}Pe("#workStage").addEventListener("click",r=>{const e=r.target.closest("[data-open]");e&&Dg(e.dataset.open)});const Dc=Pe("#quick"),ur=Xt.quick,um={v:1};let Lc=!1,Lg=null;Pe("#quickBody").innerHTML=`<p class="label mono">${et(ur.label)}</p>
  <h2 class="quick__title" id="quickTitle">${ur.title}</h2>
  <p class="quick__lede">${et(ur.lede)}</p>
  <div class="quick__proofs">${ur.proofs.map(([r,e,t,n])=>`<button class="proof" type="button" data-proof="${n}"><b>${et(r)}</b><span>${et(e)}</span><i class="mono">${et(t)} →</i></button>`).join("")}</div>
  <dl class="quick__facts">${ur.facts.map(([r,e])=>`<div><dt class="mono">${et(r)}</dt><dd>${et(e)}</dd></div>`).join("")}</dl>
  <div class="quick__stack">${ur.stack.map(r=>`<i class="tag">${et(r)}</i>`).join("")}</div>
  <div class="quick__actions">
    <a class="btn btn--primary" href="${po.cv}" download><span class="btn__fill"></span><span class="btn__label">${et(ur.cv)}</span><span class="btn__arrow">↓</span></a>
    <a class="btn" href="mailto:${po.email}"><span class="btn__fill"></span><span class="btn__label">${et(ur.mail)}</span><span class="btn__arrow">→</span></a>
    <a class="btn" href="tel:${po.phoneIntl}"><span class="btn__fill"></span><span class="btn__label">${po.phone}</span></a>
    <button class="btn btn--ghost" type="button" id="quickMore"><span class="btn__fill"></span><span class="btn__label">${et(ur.more)}</span><span class="btn__arrow">↓</span></button>
  </div>
  <div class="quick__timer" aria-hidden="true"><span class="quick__track"><i id="quickTimer"></i></span><span class="mono" id="quickSec">30 s</span></div>`;const Ig=r=>de.to(um,{v:r,duration:.6,overwrite:!0,onUpdate:()=>{Pt&&(Pt.dim=um.v)}});function Dw(){Lc||(Lc=!0,Wo=document.activeElement,zc(),Dc.setAttribute("aria-hidden","false"),sn?.stop(),de.set(Dc,{visibility:"visible"}),Ig(.3),Pe(".quick__panel").scrollTop=0,dn?(de.set(".quick__veil",{opacity:1}),de.set(".quick__panel",{clipPath:"inset(0 0 0% 0)"})):Lg=de.timeline().fromTo(".quick__veil",{opacity:0},{opacity:1,duration:.4}).fromTo(".quick__panel",{clipPath:"inset(0 0 100% 0)"},{clipPath:"inset(0 0 0% 0)",duration:.85,ease:"expo.inOut"},0).fromTo("#quickBody > *",{y:36,opacity:0},{y:0,opacity:1,duration:.9,stagger:.07,ease:"expo.out"},.35).fromTo(".proof",{rotateX:-60,transformPerspective:800,transformOrigin:"50% 0%",opacity:0},{rotateX:0,opacity:1,duration:1,stagger:.09,ease:"expo.out"},.5).add(()=>yn(".proof b").forEach(r=>Na(r,.8)),.6).fromTo("#quickTimer",{scaleX:0},{scaleX:1,duration:30,ease:"none",onUpdate(){Pe("#quickSec").textContent=`${Math.max(0,Math.ceil(30-this.time()))} s`}},.4),Pe("#quickClose").focus())}function qo(){Lc&&(Lc=!1,Dc.setAttribute("aria-hidden","true"),Lg?.kill(),Ig(1),de.timeline({onComplete:()=>{de.set(Dc,{visibility:"hidden"}),Za||sn?.start(),Wo?.focus?.()}}).to(".quick__panel",{clipPath:"inset(0 0 100% 0)",duration:dn?0:.55,ease:"expo.inOut"}).to(".quick__veil",{opacity:0,duration:dn?0:.3},"-=0.2"))}document.addEventListener("click",r=>{r.target.closest("[data-quick]")&&Dw()});Pe("#quickClose").addEventListener("click",qo);Pe(".quick__veil").addEventListener("click",qo);Pe("#quickMore").addEventListener("click",qo);Pe("#quickBody").addEventListener("click",r=>{const e=r.target.closest("[data-proof]");e&&(qo(),Dg(e.dataset.proof))});Pg.addEventListener("click",r=>{const e=r.target.closest("[data-next]");e&&ud(e.dataset.next)});Pe("#caseClose").addEventListener("click",tf);const Co=Pe("#menu"),Oa=Pe("#menuBtn");function zc(){Ka&&(Ka=!1,Oa.setAttribute("aria-expanded","false"),Co.setAttribute("aria-hidden","true"),Pe("span",Oa).textContent=Jt["nav.menu"],de.to(Co,{clipPath:"inset(0 0 100% 0)",duration:.6,ease:"expo.inOut",onComplete:()=>de.set(Co,{visibility:"hidden"})}),sn?.start())}Oa.addEventListener("click",()=>{if(Ka)return zc();Ka=!0,Oa.setAttribute("aria-expanded","true"),Co.setAttribute("aria-hidden","false"),Pe("span",Oa).textContent=Jt["nav.close"],sn?.stop(),de.set(Co,{visibility:"visible"}),de.fromTo(Co,{clipPath:"inset(0 0 100% 0)"},{clipPath:"inset(0 0 0% 0)",duration:.7,ease:"expo.inOut"}),de.from(".menu__nav a",{yPercent:100,opacity:0,duration:.8,stagger:.06,ease:"expo.out",delay:.25})});document.addEventListener("keydown",r=>{r.key==="Escape"&&(ef(),tf(),zc(),qo())});const fr=Pe("#preview"),Hu=Pe("img",fr);function Fg(){de.to(fr,{opacity:0,duration:.3}),de.to(".preview__inner",{clipPath:"inset(100% 0 0 0)",duration:.4,ease:"power3.in"})}if(Mg&&!dn){const r=Pe(".cursor"),e=Pe(".cursor__dot"),t=Pe(".cursor__ring"),n=Pe(".cursor__label"),i=de.quickTo(e,"x",{duration:.08}),s=de.quickTo(e,"y",{duration:.08}),o=de.quickTo(t,"x",{duration:.45,ease:"power3"}),a=de.quickTo(t,"y",{duration:.45,ease:"power3"}),l=de.quickTo(fr,"x",{duration:.7,ease:"power3"}),c=de.quickTo(fr,"y",{duration:.7,ease:"power3"}),u=de.quickTo(fr,"rotate",{duration:.7,ease:"power3"});let h=0;window.addEventListener("pointermove",v=>{i(v.clientX),s(v.clientY),o(v.clientX),a(v.clientY),l(v.clientX+180),c(v.clientY),u(Math.max(-10,Math.min(10,(v.clientX-h)*.6))),h=v.clientX},{passive:!0}),document.addEventListener("pointerover",v=>{const T=v.target.closest('[data-cursor="view"]'),w=v.target.closest("a, button");r.classList.toggle("is-view",!!T),r.classList.toggle("is-link",!T&&!!w),n.textContent=T?T.classList.contains("clip")?"▶":ti==="fr"?"Ouvrir":"Open":"";const b=v.target.closest(".row[data-img]");b&&!Za?(Hu.getAttribute("src")!==b.dataset.img&&(Hu.src=b.dataset.img),de.to(fr,{opacity:1,duration:.3}),de.to(".preview__inner",{clipPath:"inset(0% 0 0 0)",duration:.7,ease:"expo.out",overwrite:!0}),de.fromTo(Hu,{scale:1.35},{scale:1,duration:1,ease:"expo.out",overwrite:!0})):v.target.closest(".row[data-img]")||Fg()}),yn("[data-magnetic]").forEach(v=>{const T=de.quickTo(v,"x",{duration:.6,ease:"elastic.out(1,0.5)"}),w=de.quickTo(v,"y",{duration:.6,ease:"elastic.out(1,0.5)"});v.addEventListener("pointermove",b=>{const C=v.getBoundingClientRect();T((b.clientX-C.left-C.width/2)*.35),w((b.clientY-C.top-C.height/2)*.35)}),v.addEventListener("pointerleave",()=>{T(0),w(0)})}),yn(".cap").forEach(v=>v.addEventListener("pointermove",T=>{const w=v.getBoundingClientRect();v.style.setProperty("--mx",`${T.clientX-w.left}px`),v.style.setProperty("--my",`${T.clientY-w.top}px`)})),el.forEach((v,T)=>{v.addEventListener("pointermove",w=>{const b=v.getBoundingClientRect();de.to(mr[T],{hy:((w.clientX-b.left)/b.width-.5)*8,hx:-((w.clientY-b.top)/b.height-.5)*8,duration:.5,ease:"power3",overwrite:!0,onUpdate:()=>_o(T)})}),v.addEventListener("pointerleave",()=>de.to(mr[T],{hx:0,hy:0,duration:.8,ease:"elastic.out(1,0.6)",overwrite:!0,onUpdate:()=>_o(T)}))});const d=Pe(".hero__title");de.set(d,{transformPerspective:1200});const f=de.quickTo(d,"rotationY",{duration:1.1,ease:"power3"}),m=de.quickTo(d,"rotationX",{duration:1.1,ease:"power3"});de.set(fr,{transformPerspective:900});const _=de.quickTo(fr,"rotationY",{duration:.7,ease:"power3"}),g=de.quickTo(fr,"rotationX",{duration:.7,ease:"power3"});let p=0,x=0,y=0;window.addEventListener("pointermove",v=>{window.scrollY<window.innerHeight&&(f((v.clientX/window.innerWidth-.5)*9),m(-(v.clientY/window.innerHeight-.5)*6)),_(de.utils.clamp(-28,28,(v.clientX-p)*1.4)),g(de.utils.clamp(-22,22,-(v.clientY-x)*1.4)),p=v.clientX,x=v.clientY,clearTimeout(y),y=setTimeout(()=>{_(0),g(0)},140)},{passive:!0})}hw({lenis:sn,hero:Pt,reduced:dn,fine:Mg,lang:ti,routeStops:Cw,sections:[["#top",ti==="fr"?"Accueil":"Home"],["#manifeste",ti==="fr"?"Manifeste":"Manifesto"],["#travaux",Jt["nav.work"]],["#pipeline",Jt["nav.pipeline"]],["#motion",Jt["nav.motion"]],["#capacites",ti==="fr"?"Capacités":"Capabilities"],["#parcours",Jt["nav.path"]],["#contact",Jt["nav.contact"]]]});wg.addEventListener("click",()=>{const r=ti==="fr"?"en":"fr";try{localStorage.setItem("lang",r)}catch{}const e=()=>{const n=new URL(location.href);n.searchParams.delete("lang"),n.hash="",location.replace(n)};if(dn)return e();const t=document.createElement("div");t.className="wipe",document.body.append(t),de.to(t,{scaleY:1,duration:.6,ease:"expo.inOut",onComplete:e})});Pe("#copyBtn").addEventListener("click",async()=>{const r=Pe("#copyBtn .btn__label");try{await navigator.clipboard.writeText(po.email),r.textContent=Jt["contact.copied"]}catch{r.textContent=po.email}setTimeout(()=>{r.textContent=Jt["contact.copy"]},2200)});const Lw=Pe("#clock"),Iw=new Intl.DateTimeFormat("fr-FR",{timeZone:"Europe/Paris",hour:"2-digit",minute:"2-digit",second:"2-digit"}),Ug=()=>{Lw.textContent=Iw.format(new Date)};Ug();setInterval(Ug,1e3);document.addEventListener("visibilitychange",()=>{Pt&&(document.hidden?Pt.pause():Pt.play())});window.addEventListener("load",()=>Xe.refresh());document.fonts?.ready.then(()=>Xe.refresh());
