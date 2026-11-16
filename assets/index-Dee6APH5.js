var l_=Object.defineProperty;var c_=(r,e,t)=>e in r?l_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ze=(r,e,t)=>c_(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function nr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Vp(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var hi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fo={duration:.5,overwrite:!1,delay:0},Xh,mn,Bt,Ei=1e8,Lt=1/Ei,Tu=Math.PI*2,u_=Tu/4,h_=0,Wp=Math.sqrt,d_=Math.cos,f_=Math.sin,dn=function(e){return typeof e=="string"},Vt=function(e){return typeof e=="function"},fr=function(e){return typeof e=="number"},qh=function(e){return typeof e>"u"},Yi=function(e){return typeof e=="object"},Wn=function(e){return e!==!1},Yh=function(){return typeof window<"u"},Ia=function(e){return Vt(e)||dn(e)},Xp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},En=Array.isArray,Eu=/(?:-?\.?\d|\.)+/gi,qp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Js=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,bc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yp=/[+-]=-?[.\d]+/,$p=/[^,'"\[\]\s]+/gi,p_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,Oi,wu,$h,di={},zl={},jp,Jp=function(e){return(zl=po(e,di))&&Jn},jh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},fa=function(e,t){return!t&&console.warn(e)},Zp=function(e,t){return e&&(di[e]=t)&&zl&&(zl[e]=t)||di},pa=function(){return 0},m_={suppressEvents:!0,isStart:!0,kill:!1},Ml={suppressEvents:!0,kill:!1},g_={suppressEvents:!0},Jh={},Dr=[],Au={},Kp,si={},Tc={},Od=30,bl=[],Zh="",Kh=function(e){var t=e[0],n,i;if(Yi(t)||Vt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=bl.length;i--&&!bl[i].targetTest(t););n=bl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Mm(e[i],n)))||e.splice(i,1);return e},hs=function(e){return e._gsap||Kh(wi(e))[0]._gsap},Qp=function(e,t,n){return(n=e[t])&&Vt(n)?e[t]():qh(n)&&e.getAttribute&&e.getAttribute(t)||n},Xn=function(e,t){return(e=e.split(",")).forEach(t)||e},Xt=function(e){return Math.round(e*1e5)/1e5||0},Kt=function(e){return Math.round(e*1e7)/1e7||0},eo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},__=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},kl=function(){var e=Dr.length,t=Dr.slice(0),n,i;for(Au={},Dr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Qh=function(e){return!!(e._initted||e._startAt||e.add)},em=function(e,t,n,i){Dr.length&&!mn&&kl(),e.render(t,n,!!(mn&&t<0&&Qh(e))),Dr.length&&!mn&&kl()},tm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match($p).length<2?t:dn(e)?e.trim():e},nm=function(e){return e},fi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},v_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},po=function(e,t){for(var n in t)e[n]=t[n];return e},Bd=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Yi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Hl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ko=function(e){var t=e.parent||kt,n=e.keyframes?v_(En(e.keyframes)):fi;if(Wn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},x_=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},im=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},hc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},zr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ds=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},y_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Cu=function(e,t,n,i){return e._startAt&&(mn?e._startAt.revert(Ml):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},S_=function r(e){return!e||e._ts&&r(e.parent)},zd=function(e){return e._repeat?mo(e._tTime,e=e.duration()+e._rDelay)*e:0},mo=function(e,t){var n=Math.floor(e=Kt(e/t));return e&&n===e?n-1:n},Gl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},dc=function(e){return e._end=Kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Lt)||0))},fc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Kt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),dc(e),n._dirty||ds(n,e)),e},rm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Gl(e.rawTime(),t),(!t._dur||Ca(0,t.totalDuration(),n)-t._tTime>Lt)&&t.render(n,!0)),ds(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Lt}},ki=function(e,t,n,i){return t.parent&&zr(t),t._start=Kt((fr(n)?n:n||e!==kt?xi(e,n,t):e._time)+t._delay),t._end=Kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),im(e,t,"_first","_last",e._sort?"_start":0),Ru(t)||(e._recent=t),i||rm(e,t),e._ts<0&&fc(e,e._tTime),e},sm=function(e,t){return(di.ScrollTrigger||jh("scrollTrigger",t))&&di.ScrollTrigger.create(t,e)},om=function(e,t,n,i,s){if(td(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Kp!==ai.frame)return Dr.push(e),e._lazy=[s,i],1},M_=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Ru=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},b_=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&M_(e)&&!(!e._initted&&Ru(e))||(e._ts<0||e._dp._ts<0)&&!Ru(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Ca(0,e._tDur,t),u=mo(l,a),e._yoyo&&u&1&&(o=1-o),u!==mo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||mn||i||e._zTime===Lt||!t&&e._zTime){if(!e._initted&&om(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Lt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Cu(e,t,n,!0),e._onUpdate&&!n&&ci(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ci(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&zr(e,1),!n&&!mn&&(ci(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},T_=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},go=function(e,t,n,i){var s=e._repeat,o=Kt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Kt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&fc(e,e._tTime=e._tDur*a),e.parent&&dc(e),n||ds(e.parent,e),e},kd=function(e){return e instanceof Fn?ds(e):go(e,e._dur)},E_={_start:0,endTime:pa,totalDuration:pa},xi=function r(e,t,n){var i=e.labels,s=e._recent||E_,o=e.duration()>=Ei?s.endTime(!1):e._dur,a,l,c;return dn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(En(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Qo=function(e,t,n){var i=fr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Wn(l.vars.inherit)&&l.parent;o.immediateRender=Wn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Zt(t[0],o,t[s+1])},Vr=function(e,t){return e||e===0?t(e):t},Ca=function(e,t,n){return n<e?e:n>t?t:n},Sn=function(e,t){return!dn(e)||!(t=p_.exec(e))?"":t[1]},w_=function(e,t,n){return Vr(n,function(i){return Ca(e,t,i)})},Pu=[].slice,am=function(e,t){return e&&Yi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Yi(e[0]))&&!e.nodeType&&e!==Oi},A_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return dn(i)&&!t||am(i,1)?(s=n).push.apply(s,wi(i)):n.push(i)})||n},wi=function(e,t,n){return Bt&&!t&&Bt.selector?Bt.selector(e):dn(e)&&!n&&(wu||!_o())?Pu.call((t||$h).querySelectorAll(e),0):En(e)?A_(e,n):am(e)?Pu.call(e,0):e?[e]:[]},Lu=function(e){return e=wi(e)[0]||fa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return wi(t,n.querySelectorAll?n:n===e?fa("Invalid scope")||$h.createElement("div"):e)}},lm=function(e){return e.sort(function(){return .5-Math.random()})},cm=function(e){if(Vt(e))return e;var t=Yi(e)?e:{each:e},n=fs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return dn(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,g){var _=(g||t).length,m=o[_],p,S,y,v,E,w,b,C,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Ei])[1],!M){for(b=-Ei;b<(b=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=o[_]=[],p=l?Math.min(M,_)*u-.5:i%M,S=M===Ei?0:l?_*f/M-.5:i/M|0,b=0,C=Ei,w=0;w<_;w++)y=w%M-p,v=S-(w/M|0),m[w]=E=c?Math.abs(c==="y"?v:y):Wp(y*y+v*v),E>b&&(b=E),E<C&&(C=E);i==="random"&&lm(m),m.max=b-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Sn(t.amount||t.each)||0,n=n&&_<0?xm(n):n}return _=(m[h]-m.min)/m.max||0,Kt(m.b+(n?n(_):_)*m.v)+m.u}},Du=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Kt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(fr(n)?0:Sn(n))}},um=function(e,t){var n=En(e),i,s;return!n&&Yi(e)&&(i=n=e.radius||Ei,e.values?(e=wi(e.values),(s=!fr(e[0]))&&(i*=i)):e=Du(e.increment)),Vr(t,n?Vt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ei,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:o,s||u===o||fr(o)?u:u+Sn(o)}:Du(e))},hm=function(e,t,n,i){return Vr(En(e)?!t:n===!0?!!(n=0):!i,function(){return En(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},C_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},R_=function(e,t){return function(n){return e(parseFloat(n))+(t||Sn(n))}},P_=function(e,t,n){return fm(e,t,0,1,n)},dm=function(e,t,n){return Vr(n,function(i){return e[~~t(i)]})},L_=function r(e,t,n){var i=t-e;return En(e)?dm(e,r(0,e.length),t):Vr(n,function(s){return(i+(s-e)%i)%i+e})},D_=function r(e,t,n){var i=t-e,s=i*2;return En(e)?dm(e,r(0,e.length-1),t):Vr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},ma=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?$p:Eu),n+=e.substr(t,i-t)+hm(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},fm=function(e,t,n,i,s){var o=t-e,a=i-n;return Vr(s,function(l){return n+((l-e)/o*a||0)})},I_=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=dn(e),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(En(e)&&!En(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=po(En(e)?[]:{},e));if(!u){for(l in t)ed.call(a,e,l,"get",t[l]);s=function(g){return rd(g,a)||(o?e.p:e)}}}return Vr(n,s)},Hd=function(e,t,n){var i=e.labels,s=Ei,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ci=function(e,t,n){var i=e.vars,s=i[t],o=Bt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Dr.length&&kl(),a&&(Bt=a),u=l?s.apply(c,l):s.call(c),Bt=o,u},Wo=function(e){return zr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!mn),e.progress()<1&&ci(e,"onInterrupt"),e},Zs,pm=[],mm=function(e){if(e)if(e=!e.name&&e.default||e,Yh()||e.headless){var t=e.name,n=Vt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:pa,render:rd,add:ed,kill:j_,modifier:$_,rawVars:0},o={targetTest:0,get:0,getSetter:id,aliases:{},register:0};if(_o(),e!==i){if(si[t])return;fi(i,fi(Hl(e,s),o)),po(i.prototype,po(s,Hl(e,o))),si[i.prop=t]=i,e.targetTest&&(bl.push(i),Jh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Zp(t,i),e.register&&e.register(Jn,i,qn)}else pm.push(e)},Pt=255,Xo={aqua:[0,Pt,Pt],lime:[0,Pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pt],navy:[0,0,128],white:[Pt,Pt,Pt],olive:[128,128,0],yellow:[Pt,Pt,0],orange:[Pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pt,0,0],pink:[Pt,192,203],cyan:[0,Pt,Pt],transparent:[Pt,Pt,Pt,0]},Ec=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Pt+.5|0},gm=function(e,t,n){var i=e?fr(e)?[e>>16,e>>8&Pt,e&Pt]:0:Xo.black,s,o,a,l,c,u,f,h,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Xo[e])i=Xo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Pt,i&Pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Pt,e&Pt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Eu),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Ec(l+1/3,s,o),i[1]=Ec(l,s,o),i[2]=Ec(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(qp),n&&i.length<4&&(i[3]=1),i}else i=e.match(Eu)||Xo.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Pt,o=i[1]/Pt,a=i[2]/Pt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},_m=function(e){var t=[],n=[],i=-1;return e.split(Ir).forEach(function(s){var o=s.match(Js)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Gd=function(e,t,n){var i="",s=(e+i).match(Ir),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=gm(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=_m(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Ir,"1").split(Js),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Ir),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Ir=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Xo)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),U_=/hsl[a]?\(/,vm=function(e){var t=e.join(" "),n;if(Ir.lastIndex=0,Ir.test(t))return n=U_.test(t),e[1]=Gd(e[1],n),e[0]=Gd(e[0],n,_m(e[1])),!0},ga,ai=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(m){var p=r()-i,S=m===!0,y,v,E,w;if((p>e||p<0)&&(n+=p-t),i+=p,E=i-n,y=E-o,(y>0||S)&&(w=++f.frame,h=E-f.time*1e3,f.time=E=E/1e3,o+=y+(y>=s?4:s-y),v=1),S||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](E,h,w,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){jp&&(!wu&&Yh()&&(Oi=wu=window,$h=Oi.document||{},di.gsap=Jn,(Oi.gsapVersions||(Oi.gsapVersions=[])).push(Jn.version),Jp(zl||Oi.GreenSockGlobals||!Oi.gsap&&Oi||{}),pm.forEach(mm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},ga=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ga=0,c=pa},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,S){var y=p?function(v,E,w,b){m(v,E,w,b),f.remove(y)}:m;return f.remove(m),a[S?"unshift":"push"](y),_o(),y},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f})(),_o=function(){return!ga&&ai.wake()},_t={},N_=/^[\d.\-M][\d.\-,\s]/,F_=/["']/g,O_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(F_,"").trim():+c,i=l.substr(a+1).trim();return t},B_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},z_=function(e){var t=(e+"").split("("),n=_t[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[O_(t[1])]:B_(e).split(",").map(tm)):_t._CE&&N_.test(e)?_t._CE("",e):n},xm=function(e){return function(t){return 1-e(1-t)}},ym=function r(e,t){for(var n=e._first,i;n;)n instanceof Fn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},fs=function(e,t){return e&&(Vt(e)?e:_t[e]||z_(e))||t},Ts=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Xn(e,function(a){_t[a]=di[a]=s,_t[o=a.toLowerCase()]=n;for(var l in s)_t[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_t[a+"."+l]=s[l]}),s},Sm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},wc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Tu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*f_((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Sm(a);return s=Tu/s,l.config=function(c,u){return r(e,c,u)},l},Ac=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Sm(n);return i.config=function(s){return r(e,s)},i};Xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ts(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;Ts("Elastic",wc("in"),wc("out"),wc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Ts("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ts("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ts("Circ",function(r){return-(Wp(1-r*r)-1)});Ts("Sine",function(r){return r===1?1:-d_(r*u_)+1});Ts("Back",Ac("in"),Ac("out"),Ac());_t.SteppedEase=_t.steps=di.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Lt;return function(a){return((i*Ca(0,o,a)|0)+s)*n}}};fo.ease=_t["quad.out"];Xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Zh+=r+","+r+"Params,"});var Mm=function(e,t){this.id=h_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Qp,this.set=t?t.getSetter:id},_a=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,go(this,+t.duration,1,1),this.data=t.data,Bt&&(this._ctx=Bt,Bt.data.push(this)),ga||ai.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,go(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(_o(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(fc(this,n),!s._dp||s.parent||rm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ki(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Lt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),em(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+zd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+zd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?mo(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Lt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Gl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Lt?0:this._rts,this.totalTime(Ca(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),dc(this),y_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(_o(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Lt&&(this._tTime-=Lt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ki(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Wn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Gl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=g_);var i=mn;return mn=n,Qh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),mn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,kd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,kd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(xi(this,n),Wn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Wn(i)),this._dur||(this._zTime=-Lt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Lt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Lt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Vt(n)?n:nm,a=function(){var c=i.then;i.then=null,Vt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Wo(this)},r})();fi(_a.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Lt,_prom:0,_ps:!1,_rts:1});var Fn=(function(r){Vp(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Wn(n.sortChildren),kt&&ki(n.parent||kt,nr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&sm(nr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Qo(0,arguments,this),this},t.from=function(i,s,o){return Qo(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Qo(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Ko(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Zt(i,s,xi(this,o),1),this},t.call=function(i,s,o){return ki(this,Zt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Zt(i,o,xi(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Ko(o).immediateRender=Wn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,Ko(a).immediateRender=Wn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Kt(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,g,_,m,p,S,y,v,E,w,b;if(this!==kt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,v=this._start,y=this._ts,p=!y,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(h=Kt(u%m),u===l?(_=this._repeat,h=c):(E=Kt(u/m),_=~~E,_&&_===E&&(h=c,_--),h>c&&(h=c)),E=mo(this._tTime,m),!a&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),w&&_&1&&(h=c-h,b=1),_!==E&&!this._lock){var C=w&&E&1,M=C===(w&&_&1);if(_<E&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(b?0:Kt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ci(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;ym(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=T_(this,Kt(a),Kt(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!s&&!E&&(ci(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=-Lt);break}}d=g}else{d=this._last;for(var x=i<0?i:h;d;){if(g=d._prev,(d._act||x<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,o||mn&&Qh(d)),h!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=x?-Lt:Lt);break}}d=g}}if(S&&!s&&(this.pause(),S.render(h>=a?0:-Lt)._zTime=h>=a?1:-1,this._ts))return this._start=v,dc(this),this.render(i,s,o);this._onUpdate&&!s&&ci(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&zr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(ci(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(fr(s)||(s=xi(this,s,i)),!(i instanceof _a)){if(En(i))return i.forEach(function(a){return o.add(a,s)}),this;if(dn(i))return this.addLabel(i,s);if(Vt(i))i=Zt.delayedCall(0,i);else return this}return this!==i?ki(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ei);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Zt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return dn(i)?this.removeLabel(i):Vt(i)?this.killTweensOf(i):(i.parent===this&&hc(this,i),i===this._recent&&(this._recent=this._last),ds(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Kt(ai.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=xi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Zt.delayedCall(0,s||pa,o);return a.data="isPause",this._hasPause=1,ki(this,a,xi(this,i))},t.removePause=function(i){var s=this._first;for(i=xi(this,i);s;)s._start===i&&s.data==="isPause"&&zr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Ar!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=wi(i),l=this._first,c=fr(s),u;l;)l instanceof Zt?__(l._targets,a)&&(c?(!Ar||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=xi(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Zt.to(o,fi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Lt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&go(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,fi({startAt:{time:xi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Hd(this,xi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Hd(this,xi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Lt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return ds(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ds(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Ei,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ki(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;go(o,o===kt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(kt._ts&&(em(kt,Gl(i,kt)),Kp=ai.frame),ai.frame>=Od){Od+=hi.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&hi.autoSleep&&ai._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ai.sleep()}}},e})(_a);fi(Fn.prototype,{_lock:0,_hasPause:0,_forcing:0});var k_=function(e,t,n,i,s,o,a){var l=new qn(this._pt,e,t,0,1,Cm,null,s),c=0,u=0,f,h,d,g,_,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ma(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),h=n.match(bc)||[];f=bc.exec(i);)g=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?eo(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=bc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Yp.test(i)||p)&&(l.e=0),this._pt=l,l},ed=function(e,t,n,i,s,o,a,l,c,u){Vt(i)&&(i=i(s||0,e,o));var f=e[t],h=n!=="get"?n:Vt(f)?c?e[t.indexOf("set")||!Vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Vt(f)?c?X_:wm:nd,g;if(dn(i)&&(~i.indexOf("random(")&&(i=ma(i)),i.charAt(1)==="="&&(g=eo(h,i)+(Sn(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Iu)return!isNaN(h*i)&&i!==""?(g=new qn(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?Y_:Am,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&jh(t,i),k_.call(this,e,t,h,i,d,l||hi.stringFilter,c))},H_=function(e,t,n,i,s){if(Vt(e)&&(e=ea(e,s,t,n,i)),!Yi(e)||e.style&&e.nodeType||En(e)||Xp(e))return dn(e)?ea(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=ea(e[a],s,t,n,i);return o},bm=function(e,t,n,i,s,o){var a,l,c,u;if(si[e]&&(a=new si[e]).init(s,a.rawVars?t[e]:H_(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new qn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Zs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ar,Iu,td=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,y=e._overwrite==="auto"&&!Xh,v=e.timeline,E,w,b,C,M,x,L,I,D,B,X,W,q;if(v&&(!h||!s)&&(s="none"),e._ease=fs(s,fo.ease),e._yEase=f?xm(fs(f===!0?s:f,fo.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!v&&!!i.runBackwards,!v||h&&!i.stagger){if(I=m[0]?hs(m[0]).harness:0,W=I&&i[I.prop],E=Hl(i,Jh),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Ml:m_),_._lazy=0),o){if(zr(e._startAt=Zt.set(m,fi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Wn(l),startAt:null,delay:0,onUpdate:c&&function(){return ci(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mn||!a&&!d)&&e._startAt.revert(Ml),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),b=fi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Wn(l),immediateRender:a,stagger:0,parent:p},E),W&&(b[I.prop]=W),zr(e._startAt=Zt.set(m,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mn?e._startAt.revert(Ml):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Lt,Lt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Wn(l)||l&&!g,w=0;w<m.length;w++){if(M=m[w],L=M._gsap||Kh(m)[w]._gsap,e._ptLookup[w]=B={},Au[L.id]&&Dr.length&&kl(),X=S===m?w:S.indexOf(M),I&&(D=new I).init(M,W||E,e,X,S)!==!1&&(e._pt=C=new qn(e._pt,M,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(H){B[H]=C}),D.priority&&(x=1)),!I||W)for(b in E)si[b]&&(D=bm(b,E,e,X,M,S))?D.priority&&(x=1):B[b]=C=ed.call(e,M,b,"get",E[b],X,S,0,i.stringFilter);e._op&&e._op[w]&&e.kill(M,e._op[w]),y&&e._pt&&(Ar=e,kt.killTweensOf(M,B,e.globalTime(t)),q=!e.parent,Ar=0),e._pt&&l&&(Au[L.id]=1)}x&&Rm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,h&&t<=0&&v.render(Ei,!0,!0)},G_=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Iu=1,e.vars[t]="+=0",td(e,a),Iu=0,l?fa(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Xt(n)+Sn(f.e)),f.b&&(f.b=u.s+Sn(f.b))},V_=function(e,t){var n=e[0]?hs(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=po({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},W_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(En(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ea=function(e,t,n,i,s){return Vt(e)?e.call(t,n,i,s):dn(e)&&~e.indexOf("random(")?ma(e):e},Tm=Zh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Em={};Xn(Tm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Em[r]=1});var Zt=(function(r){Vp(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ko(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,S=i.parent||kt,y=(En(n)||Xp(n)?fr(n[0]):"length"in i)?[n]:wi(n),v,E,w,b,C,M,x,L;if(a._targets=y.length?Kh(y):fa("GSAP target "+n+" not found. https://gsap.com",!hi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||Ia(c)||Ia(u)){if(i=a.vars,v=a.timeline=new Fn({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:y}),v.kill(),v.parent=v._dp=nr(a),v._start=0,h||Ia(c)||Ia(u)){if(b=y.length,x=h&&cm(h),Yi(h))for(C in h)~Tm.indexOf(C)&&(L||(L={}),L[C]=h[C]);for(E=0;E<b;E++)w=Hl(i,Em),w.stagger=0,p&&(w.yoyoEase=p),L&&po(w,L),M=y[E],w.duration=+ea(c,nr(a),E,M,y),w.delay=(+ea(u,nr(a),E,M,y)||0)-a._delay,!h&&b===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),v.to(M,w,x?x(E,M,y):0),v._ease=_t.none;v.duration()?c=u=0:a.timeline=0}else if(g){Ko(fi(v.vars.defaults,{ease:"none"})),v._ease=fs(g.ease||i.ease||"none");var I=0,D,B,X;if(En(g))g.forEach(function(W){return v.to(y,W,">")}),v.duration();else{w={};for(C in g)C==="ease"||C==="easeEach"||W_(C,g[C],w,g.easeEach);for(C in w)for(D=w[C].sort(function(W,q){return W.t-q.t}),I=0,E=0;E<D.length;E++)B=D[E],X={ease:B.e,duration:(B.t-(E?D[E-1].t:0))/100*c},X[C]=B.v,v.to(y,X,I),I+=X.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!Xh&&(Ar=nr(a),kt.killTweensOf(y),Ar=0),ki(S,nr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===Kt(S._time)&&Wn(f)&&S_(nr(a))&&S.data!=="nested")&&(a._tTime=-Lt,a.render(Math.max(0,-u)||0)),m&&sm(nr(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Lt&&!u?l:i<Lt?0:i,h,d,g,_,m,p,S,y,v;if(!c)b_(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(h=Kt(f%_),f===l?(g=this._repeat,h=c):(m=Kt(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,h=c-h),m=mo(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(y&&this._yEase&&ym(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Kt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(om(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(v||this._ease)(h/c),this._from&&(this.ratio=S=1-S),!a&&f&&!s&&!m&&(ci(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Cu(this,i,s,o),ci(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&ci(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Cu(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&zr(this,1),!s&&!(u&&!a)&&(f||a||p)&&(ci(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){ga||ai.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||td(this,c),u=this._ease(c/this._dur),G_(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(fc(this,0),this.parent||im(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Wo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ar&&Ar.vars.overwrite!==!0)._first||Wo(this),this.parent&&o!==this.timeline.totalDuration()&&go(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?wi(i):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&x_(a,l))return s==="all"&&(this._pt=0),Wo(this);for(f=this._op=this._op||[],s!=="all"&&(dn(s)&&(_={},Xn(s,function(S){return _[S]=1}),s=_),s=V_(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&hc(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Wo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Qo(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Qo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return kt.killTweensOf(i,s,o)},e})(_a);fi(Zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xn("staggerTo,staggerFrom,staggerFromTo",function(r){Zt[r]=function(){var e=new Fn,t=Pu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var nd=function(e,t,n){return e[t]=n},wm=function(e,t,n){return e[t](n)},X_=function(e,t,n,i){return e[t](i.fp,n)},q_=function(e,t,n){return e.setAttribute(t,n)},id=function(e,t){return Vt(e[t])?wm:qh(e[t])&&e.setAttribute?q_:nd},Am=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Y_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Cm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},rd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},$_=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},j_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?hc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},J_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Rm=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},qn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Am,this.d=l||this,this.set=c||nd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=J_,this.m=n,this.mt=s,this.tween=i},r})();Xn(Zh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Jh[r]=1});di.TweenMax=di.TweenLite=Zt;di.TimelineLite=di.TimelineMax=Fn;kt=new Fn({sortChildren:!1,defaults:fo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});hi.stringFilter=vm;var ps=[],Tl={},Z_=[],Vd=0,K_=0,Cc=function(e){return(Tl[e]||Z_).map(function(t){return t()})},Uu=function(){var e=Date.now(),t=[];e-Vd>2&&(Cc("matchMediaInit"),ps.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Oi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Cc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Vd=e,Cc("matchMedia"))},Pm=(function(){function r(t,n){this.selector=n&&Lu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=K_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Vt(n)&&(s=i,i=n,n=Vt);var o=this,a=function(){var c=Bt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Lu(s)),Bt=o,f=i.apply(o,arguments),Vt(f)&&o._r.push(f),Bt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Vt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Bt;Bt=null,n(this),Bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Zt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Fn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Zt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ps.length;o--;)ps[o].id===this.id&&ps.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),Q_=(function(){function r(t){this.contexts=[],this.scope=t,Bt&&Bt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Yi(n)||(n={matches:n});var o=new Pm(0,s||this.scope),a=o.conditions={},l,c,u;Bt&&!o.selector&&(o.selector=Bt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Oi.matchMedia(n[c]),l&&(ps.indexOf(o)<0&&ps.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Uu):l.addEventListener("change",Uu)));return u&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Vl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return mm(i)})},timeline:function(e){return new Fn(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,n,i){dn(e)&&(e=wi(e)[0]);var s=hs(e||{}).get,o=n?nm:tm;return n==="native"&&(n=""),e&&(t?o((si[t]&&si[t].get||s)(e,t,n,i)):function(a,l,c){return o((si[a]&&si[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=wi(e),e.length>1){var i=e.map(function(u){return Jn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=si[t],a=hs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Zs._pt=0,f.init(e,n?u+n:u,Zs,0,[e]),f.render(1,f),Zs._pt&&rd(1,Zs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Jn.to(e,fi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=fs(e.ease,fo.ease)),Bd(fo,e||{})},config:function(e){return Bd(hi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!si[a]&&!di[a]&&fa(t+" effect requires "+a+" plugin.")}),Tc[t]=function(a,l,c){return n(wi(a),fi(l||{},s),c)},o&&(Fn.prototype[t]=function(a,l,c){return this.add(Tc[t](a,Yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){_t[e]=fs(t)},parseEase:function(e,t){return arguments.length?fs(e,t):_t},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Fn(e),i,s;for(n.smoothChildTiming=Wn(e.smoothChildTiming),kt.remove(n),n._dp=0,n._time=n._tTime=kt._time,i=kt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Zt&&i.vars.onComplete===i._targets[0]))&&ki(n,i,i._start-i._delay),i=s;return ki(kt,n,0),n},context:function(e,t){return e?new Pm(e,t):Bt},matchMedia:function(e){return new Q_(e)},matchMediaRefresh:function(){return ps.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Uu()},addEventListener:function(e,t){var n=Tl[e]||(Tl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Tl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:L_,wrapYoyo:D_,distribute:cm,random:hm,snap:um,normalize:P_,getUnit:Sn,clamp:w_,splitColor:gm,toArray:wi,selector:Lu,mapRange:fm,pipe:C_,unitize:R_,interpolate:I_,shuffle:lm},install:Jp,effects:Tc,ticker:ai,updateRoot:Fn.updateRoot,plugins:si,globalTimeline:kt,core:{PropTween:qn,globals:Zp,Tween:Zt,Timeline:Fn,Animation:_a,getCache:hs,_removeLinkedListItem:hc,reverting:function(){return mn},context:function(e){return e&&Bt&&(Bt.data.push(e),e._ctx=Bt),Bt},suppressOverwrites:function(e){return Xh=e}}};Xn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Vl[r]=Zt[r]});ai.add(Fn.updateRoot);Zs=Vl.to({},{duration:0});var e0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},t0=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=e0(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Rc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(dn(s)&&(l={},Xn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}t0(a,s)}}}},Jn=Vl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)mn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Rc("roundProps",Du),Rc("modifiers"),Rc("snap",um))||Vl;Zt.version=Fn.version=Jn.version="3.13.0";jp=1;Yh()&&_o();_t.Power0;_t.Power1;_t.Power2;_t.Power3;_t.Power4;_t.Linear;_t.Quad;_t.Cubic;_t.Quart;_t.Quint;_t.Strong;_t.Elastic;_t.Back;_t.SteppedEase;_t.Bounce;_t.Sine;_t.Expo;_t.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Wd,Cr,to,sd,os,Xd,od,n0=function(){return typeof window<"u"},pr={},es=180/Math.PI,no=Math.PI/180,ws=Math.atan2,qd=1e8,ad=/([A-Z])/g,i0=/(left|right|width|margin|padding|x)/i,r0=/[\s,\(]\S/,Vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Nu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},s0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},o0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},a0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Lm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Dm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},l0=function(e,t,n){return e.style[t]=n},c0=function(e,t,n){return e.style.setProperty(t,n)},u0=function(e,t,n){return e._gsap[t]=n},h0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},d0=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},f0=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ht="transform",Yn=Ht+"Origin",p0=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in pr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Vi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=rr(i,a)}):this.tfm[e]=o.x?o[e]:rr(i,e),e===Yn&&(this.tfm.zOrigin=o.zOrigin);else return Vi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ht)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Yn,t,"")),e=Ht}(s||t)&&this.props.push(e,t,s[e])},Im=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},m0=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(ad,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=od(),(!s||!s.isStart)&&!n[Ht]&&(Im(n),i.zOrigin&&n[Yn]&&(n[Yn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Um=function(e,t){var n={target:e,props:[],revert:m0,save:p0};return e._gsap||Jn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Nm,Fu=function(e,t){var n=Cr.createElementNS?Cr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Cr.createElement(e);return n&&n.style?n:Cr.createElement(e)},Ai=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ad,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,vo(t)||t,1)||""},Yd="O,Moz,ms,Ms,Webkit".split(","),vo=function(e,t,n){var i=t||os,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Yd[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Yd[o]:"")+e},Ou=function(){n0()&&window.document&&(Wd=window,Cr=Wd.document,to=Cr.documentElement,os=Fu("div")||{style:{}},Fu("div"),Ht=vo(Ht),Yn=Ht+"Origin",os.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Nm=!!vo("perspective"),od=Jn.core.reverting,sd=1)},$d=function(e){var t=e.ownerSVGElement,n=Fu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),to.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),to.removeChild(n),s},jd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Fm=function(e){var t,n;try{t=e.getBBox()}catch{t=$d(e),n=1}return t&&(t.width||t.height)||n||(t=$d(e)),t&&!t.width&&!t.x&&!t.y?{x:+jd(e,["x","cx","x1"])||0,y:+jd(e,["y","cy","y1"])||0,width:0,height:0}:t},Om=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Fm(e))},vs=function(e,t){if(t){var n=e.style,i;t in pr&&t!==Yn&&(t=Ht),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(ad,"-$1").toLowerCase())):n.removeAttribute(t)}},Rr=function(e,t,n,i,s,o){var a=new qn(e._pt,t,n,0,1,o?Dm:Lm);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Jd={deg:1,rad:1,turn:1},g0={grid:1,flex:1},kr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=os.style,l=i0.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||Jd[i]||Jd[o])return s;if(o!=="px"&&!h&&(s=r(e,t,n,"px")),p=e.getCTM&&Om(e),(d||o==="%")&&(pr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Xt(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Cr||!_.appendChild)&&(_=Cr.body),m=_._gsap,m&&d&&m.width&&l&&m.time===ai.time&&!m.uncache)return Xt(s/m.width*f);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=f+i,g=e[u],S?e.style[t]=S:vs(e,t)}else(d||o==="%")&&!g0[Ai(_,"display")]&&(a.position=Ai(e,"position")),_===e&&(a.position="static"),_.appendChild(os),g=os[u],_.removeChild(os),a.position="absolute";return l&&d&&(m=hs(_),m.time=ai.time,m.width=_[u]),Xt(h?g*s/f:g&&s?f/g*s:0)},rr=function(e,t,n,i){var s;return sd||Ou(),t in Vi&&t!=="transform"&&(t=Vi[t],~t.indexOf(",")&&(t=t.split(",")[0])),pr[t]&&t!=="transform"?(s=xa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Xl(Ai(e,Yn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Wl[t]&&Wl[t](e,t,n)||Ai(e,t)||Qp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?kr(e,t,s,n)+n:s},_0=function(e,t,n,i){if(!n||n==="none"){var s=vo(t,e,1),o=s&&Ai(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ai(e,"borderTopColor"))}var a=new qn(this._pt,e.style,t,0,1,Cm),l=0,c=0,u,f,h,d,g,_,m,p,S,y,v,E;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ai(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Ai(e,t)||i,_?e.style[t]=_:vs(e,t)),u=[n,i],vm(u),n=u[0],i=u[1],h=n.match(Js)||[],E=i.match(Js)||[],E.length){for(;f=Js.exec(i);)m=f[0],S=i.substring(l,f.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=eo(d,m)+v),p=parseFloat(m),y=m.substr((p+"").length),l=Js.lastIndex-y.length,y||(y=y||hi.units[t]||v,l===i.length&&(i+=y,a.e+=y)),v!==y&&(d=kr(e,t,_,y)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Dm:Lm;return Yp.test(i)&&(a.e=0),this._pt=a,a},Zd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},v0=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Zd[n]||n,t[1]=Zd[i]||i,t.join(" ")},x0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],pr[a]&&(l=1,a=a==="transformOrigin"?Yn:Ht),vs(n,a);l&&(vs(n,Ht),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",xa(n,1),o.uncache=1,Im(i)))}},Wl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new qn(e._pt,t,n,0,0,x0);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},va=[1,0,0,1,0,0],Bm={},zm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Kd=function(e){var t=Ai(e,Ht);return zm(t)?va:t.substr(7).match(qp).map(Xt)},ld=function(e,t){var n=e._gsap||hs(e),i=e.style,s=Kd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?va:s):(s===va&&!e.offsetParent&&e!==to&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,to.appendChild(e)),s=Kd(e),l?i.display=l:vs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):to.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Bu=function(e,t,n,i,s,o){var a=e._gsap,l=s||ld(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],y=t.split(" "),v=parseFloat(y[0])||0,E=parseFloat(y[1])||0,w,b,C,M;n?l!==va&&(b=d*m-g*_)&&(C=v*(m/b)+E*(-_/b)+(_*S-m*p)/b,M=v*(-g/b)+E*(d/b)-(d*S-g*p)/b,v=C,E=M):(w=Fm(e),v=w.x+(~y[0].indexOf("%")?v/100*w.width:v),E=w.y+(~(y[1]||y[0]).indexOf("%")?E/100*w.height:E)),i||i!==!1&&a.smooth?(p=v-c,S=E-u,a.xOffset=f+(p*d+S*_)-p,a.yOffset=h+(p*g+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=E,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Yn]="0px 0px",o&&(Rr(o,a,"xOrigin",c,v),Rr(o,a,"yOrigin",u,E),Rr(o,a,"xOffset",f,a.xOffset),Rr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+E)},xa=function(e,t){var n=e._gsap||new Mm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ai(e,Yn)||"0",u,f,h,d,g,_,m,p,S,y,v,E,w,b,C,M,x,L,I,D,B,X,W,q,H,ne,U,ce,xe,Fe,Z,j;return u=f=h=_=m=p=S=y=v=0,d=g=1,n.svg=!!(e.getCTM&&Om(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ht]!=="none"?l[Ht]:"")),i.scale=i.rotate=i.translate="none"),b=ld(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),Bu(e,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,b)),E=n.xOrigin||0,w=n.yOrigin||0,b!==va&&(L=b[0],I=b[1],D=b[2],B=b[3],u=X=b[4],f=W=b[5],b.length===6?(d=Math.sqrt(L*L+I*I),g=Math.sqrt(B*B+D*D),_=L||I?ws(I,L)*es:0,S=D||B?ws(D,B)*es+_:0,S&&(g*=Math.abs(Math.cos(S*no))),n.svg&&(u-=E-(E*L+w*D),f-=w-(E*I+w*B))):(j=b[6],Fe=b[7],U=b[8],ce=b[9],xe=b[10],Z=b[11],u=b[12],f=b[13],h=b[14],C=ws(j,xe),m=C*es,C&&(M=Math.cos(-C),x=Math.sin(-C),q=X*M+U*x,H=W*M+ce*x,ne=j*M+xe*x,U=X*-x+U*M,ce=W*-x+ce*M,xe=j*-x+xe*M,Z=Fe*-x+Z*M,X=q,W=H,j=ne),C=ws(-D,xe),p=C*es,C&&(M=Math.cos(-C),x=Math.sin(-C),q=L*M-U*x,H=I*M-ce*x,ne=D*M-xe*x,Z=B*x+Z*M,L=q,I=H,D=ne),C=ws(I,L),_=C*es,C&&(M=Math.cos(C),x=Math.sin(C),q=L*M+I*x,H=X*M+W*x,I=I*M-L*x,W=W*M-X*x,L=q,X=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Xt(Math.sqrt(L*L+I*I+D*D)),g=Xt(Math.sqrt(W*W+j*j)),C=ws(X,W),S=Math.abs(C)>2e-4?C*es:0,v=Z?1/(Z<0?-Z:Z):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!zm(Ai(e,Ht)),q&&e.setAttribute("transform",q))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Xt(d),n.scaleY=Xt(g),n.rotation=Xt(_)+a,n.rotationX=Xt(m)+a,n.rotationY=Xt(p)+a,n.skewX=S+a,n.skewY=y+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Yn]=Xl(c)),n.xOffset=n.yOffset=0,n.force3D=hi.force3D,n.renderTransform=n.svg?S0:Nm?km:y0,n.uncache=0,n},Xl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Pc=function(e,t,n){var i=Sn(t);return Xt(parseFloat(t)+parseFloat(kr(e,"x",n+"px",i)))+i},y0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,km(e,t)},qr="0deg",Ro="0px",Yr=") ",km=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,y=n.zOrigin,v="",E=p==="auto"&&e&&e!==1||p===!0;if(y&&(f!==qr||u!==qr)){var w=parseFloat(u)*no,b=Math.sin(w),C=Math.cos(w),M;w=parseFloat(f)*no,M=Math.cos(w),o=Pc(S,o,b*M*-y),a=Pc(S,a,-Math.sin(w)*-y),l=Pc(S,l,C*M*-y+y)}m!==Ro&&(v+="perspective("+m+Yr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(E||o!==Ro||a!==Ro||l!==Ro)&&(v+=l!==Ro||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Yr),c!==qr&&(v+="rotate("+c+Yr),u!==qr&&(v+="rotateY("+u+Yr),f!==qr&&(v+="rotateX("+f+Yr),(h!==qr||d!==qr)&&(v+="skew("+h+", "+d+Yr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Yr),S.style[Ht]=v||"translate(0, 0)"},S0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,y=parseFloat(o),v=parseFloat(a),E,w,b,C,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=no,c*=no,E=Math.cos(l)*f,w=Math.sin(l)*f,b=Math.sin(l-c)*-h,C=Math.cos(l-c)*h,c&&(u*=no,M=Math.tan(c-u),M=Math.sqrt(1+M*M),b*=M,C*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),E*=M,w*=M)),E=Xt(E),w=Xt(w),b=Xt(b),C=Xt(C)):(E=f,C=h,w=b=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=kr(d,"x",o,"px"),v=kr(d,"y",a,"px")),(g||_||m||p)&&(y=Xt(y+g-(g*E+_*b)+m),v=Xt(v+_-(g*w+_*C)+p)),(i||s)&&(M=d.getBBox(),y=Xt(y+i/100*M.width),v=Xt(v+s/100*M.height)),M="matrix("+E+","+w+","+b+","+C+","+y+","+v+")",d.setAttribute("transform",M),S&&(d.style[Ht]=M)},M0=function(e,t,n,i,s){var o=360,a=dn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?es:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*qd)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*qd)%o-~~(c/o)*o)),e._pt=h=new qn(e._pt,t,n,i,c,s0),h.e=u,h.u="deg",e._props.push(n),h},Qd=function(e,t){for(var n in t)e[n]=t[n];return e},b0=function(e,t,n){var i=Qd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ht]=t,a=xa(n,1),vs(n,Ht),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ht],o[Ht]=t,a=xa(n,1),o[Ht]=c);for(l in pr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Sn(c),g=Sn(u),f=d!==g?kr(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new qn(e._pt,a,l,f,h-f,Nu),e._pt.u=g||0,e._props.push(l));Qd(a,i)};Xn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Wl[e>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return rr(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var Hm={name:"css",register:Ou,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,g,_,m,p,S,y,v,E,w,b,C;sd||Ou(),this.styles=this.styles||Um(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(si[_]&&bm(_,t,n,i,e,s)))){if(d=typeof u,g=Wl[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ma(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Ir.lastIndex=0,Ir.test(c)||(m=Sn(c),p=Sn(u)),p?m!==p&&(c=kr(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],dn(c)&&~c.indexOf("random(")&&(c=ma(c)),Sn(c+"")||c==="auto"||(c+=hi.units[_]||Sn(rr(e,_))||""),(c+"").charAt(1)==="="&&(c=rr(e,_))):c=rr(e,_),h=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),f=parseFloat(u),_ in Vi&&(_==="autoAlpha"&&(h===1&&rr(e,"visibility")==="hidden"&&f&&(h=0),C.push("visibility",0,a.visibility),Rr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Vi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in pr,y){if(this.styles.save(_),d==="string"&&u.substring(0,6)==="var(--"&&(u=Ai(e,u.substring(4,u.indexOf(")"))),f=parseFloat(u)),v||(E=e._gsap,E.renderTransform&&!t.parseTransform||xa(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,v=this._pt=new qn(this._pt,a,Ht,0,1,E.renderTransform,E,0,-1),v.dep=1),_==="scale")this._pt=new qn(this._pt,E,"scaleY",E.scaleY,(S?eo(E.scaleY,S+f):f)-E.scaleY||0,Nu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Yn,0,a[Yn]),u=v0(u),E.svg?Bu(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&Rr(this,E,"zOrigin",E.zOrigin,p),Rr(this,a,_,Xl(c),Xl(u)));continue}else if(_==="svgOrigin"){Bu(e,u,1,w,0,this);continue}else if(_ in Bm){M0(this,E,_,h,S?eo(h,S+u):u);continue}else if(_==="smoothOrigin"){Rr(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){b0(this,u,e);continue}}else _ in a||(_=vo(_)||_);if(y||(f||f===0)&&(h||h===0)&&!r0.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),p=Sn(u)||(_ in hi.units?hi.units[_]:m),m!==p&&(h=kr(e,_,c,p)),this._pt=new qn(this._pt,y?E:a,_,h,(S?eo(h,S+f):f)-h,!y&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?a0:Nu),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=o0);else if(_ in a)_0.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,i,s);else if(_!=="parseTransform"){jh(_,u);continue}y||(_ in a?C.push(_,0,a[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),o.push(_)}}b&&Rm(this)},render:function(e,t){if(t.tween._time||!od())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:rr,aliases:Vi,getSetter:function(e,t,n){var i=Vi[t];return i&&i.indexOf(",")<0&&(t=i),t in pr&&t!==Yn&&(e._gsap.x||rr(e,"x"))?n&&Xd===n?t==="scale"?h0:u0:(Xd=n||{})&&(t==="scale"?d0:f0):e.style&&!qh(e.style[t])?l0:~t.indexOf("-")?c0:id(e,t)},core:{_removeProperty:vs,_getMatrix:ld}};Jn.utils.checkPrefix=vo;Jn.core.getStyleSaver=Um;(function(r,e,t,n){var i=Xn(r+","+e+","+t,function(s){pr[s]=1});Xn(e,function(s){hi.units[s]="deg",Bm[s]=1}),Vi[i[13]]=r+","+e,Xn(n,function(s){var o=s.split(":");Vi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){hi.units[r]="px"});Jn.registerPlugin(Hm);var he=Jn.registerPlugin(Hm)||Jn;he.core.Tween;function T0(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function E0(r,e,t){return e&&T0(r.prototype,e),r}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pn,El,li,Pr,Lr,io,Gm,ts,ta,Vm,ar,Ii,Wm,Xm=function(){return pn||typeof window<"u"&&(pn=window.gsap)&&pn.registerPlugin&&pn},qm=1,Ks=[],ut=[],qi=[],na=Date.now,zu=function(e,t){return t},w0=function(){var e=ta.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ut),i.push.apply(i,qi),ut=n,qi=i,zu=function(o,a){return t[o](a)}},Ur=function(e,t){return~qi.indexOf(e)&&qi[qi.indexOf(e)+1][t]},ia=function(e){return!!~Vm.indexOf(e)},Ln=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ua="scrollLeft",Na="scrollTop",ku=function(){return ar&&ar.isPressed||ut.cache++},ql=function(e,t){var n=function i(s){if(s||s===0){qm&&(li.history.scrollRestoration="manual");var o=ar&&ar.isPressed;s=i.v=Math.round(s)||(ar&&ar.iOS?1:0),e(s),i.cacheID=ut.cache,o&&zu("ss",s)}else(t||ut.cache!==i.cacheID||zu("ref"))&&(i.cacheID=ut.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},On={s:Ua,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ql(function(r){return arguments.length?li.scrollTo(r,rn.sc()):li.pageXOffset||Pr[Ua]||Lr[Ua]||io[Ua]||0})},rn={s:Na,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:On,sc:ql(function(r){return arguments.length?li.scrollTo(On.sc(),r):li.pageYOffset||Pr[Na]||Lr[Na]||io[Na]||0})},Hn=function(e,t){return(t&&t._ctx&&t._ctx.selector||pn.utils.toArray)(e)[0]||(typeof e=="string"&&pn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},A0=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Hr=function(e,t){var n=t.s,i=t.sc;ia(e)&&(e=Pr.scrollingElement||Lr);var s=ut.indexOf(e),o=i===rn.sc?1:2;!~s&&(s=ut.push(e)-1),ut[s+o]||Ln(e,"scroll",ku);var a=ut[s+o],l=a||(ut[s+o]=ql(Ur(e,n),!0)||(ia(e)?i:ql(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=pn.getProperty(e,"scrollBehavior")==="smooth"),l},Hu=function(e,t,n){var i=e,s=e,o=na(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=na();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(g){var _=a,m=s,p=na();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},Po=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ef=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Ym=function(){ta=pn.core.globals().ScrollTrigger,ta&&ta.core&&w0()},$m=function(e){return pn=e||Xm(),!El&&pn&&typeof document<"u"&&document.body&&(li=window,Pr=document,Lr=Pr.documentElement,io=Pr.body,Vm=[li,Pr,Lr,io],pn.utils.clamp,Wm=pn.core.context||function(){},ts="onpointerenter"in io?"pointer":"mouse",Gm=qt.isTouch=li.matchMedia&&li.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in li||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ii=qt.eventTypes=("ontouchstart"in Lr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Lr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return qm=0},500),Ym(),El=1),El};On.op=rn;ut.cache=0;var qt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){El||$m(pn)||console.warn("Please gsap.registerPlugin(Observer)"),ta||Ym();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,y=n.onPress,v=n.onRelease,E=n.onRight,w=n.onLeft,b=n.onUp,C=n.onDown,M=n.onChangeX,x=n.onChangeY,L=n.onChange,I=n.onToggleX,D=n.onToggleY,B=n.onHover,X=n.onHoverEnd,W=n.onMove,q=n.ignoreCheck,H=n.isNormalizer,ne=n.onGestureStart,U=n.onGestureEnd,ce=n.onWheel,xe=n.onEnable,Fe=n.onDisable,Z=n.onClick,j=n.scrollSpeed,re=n.capture,ae=n.allowClicks,Me=n.lockAxis,qe=n.onLockAxis;this.target=a=Hn(a)||Lr,this.vars=n,d&&(d=pn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,j=j||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(li.getComputedStyle(io).lineHeight)||22);var Ue,tt,it,be,F,ht,Ye,G=this,Te=0,lt=0,Ae=n.passive||!u&&n.passive!==!1,R=Hr(a,On),T=Hr(a,rn),Y=R(),ee=T(),te=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ii[0]==="pointerdown",Q=ia(a),de=a.ownerDocument||Pr,ue=[0,0,0],Pe=[0,0,0],Le=0,se=function(){return Le=na()},fe=function(Se,Ve){return(G.event=Se)&&d&&A0(Se.target,d)||Ve&&te&&Se.pointerType!=="touch"||q&&q(Se,Ve)},Ge=function(){G._vx.reset(),G._vy.reset(),tt.pause(),f&&f(G)},Oe=function(){var Se=G.deltaX=ef(ue),Ve=G.deltaY=ef(Pe),ge=Math.abs(Se)>=i,We=Math.abs(Ve)>=i;L&&(ge||We)&&L(G,Se,Ve,ue,Pe),ge&&(E&&G.deltaX>0&&E(G),w&&G.deltaX<0&&w(G),M&&M(G),I&&G.deltaX<0!=Te<0&&I(G),Te=G.deltaX,ue[0]=ue[1]=ue[2]=0),We&&(C&&G.deltaY>0&&C(G),b&&G.deltaY<0&&b(G),x&&x(G),D&&G.deltaY<0!=lt<0&&D(G),lt=G.deltaY,Pe[0]=Pe[1]=Pe[2]=0),(be||it)&&(W&&W(G),it&&(m&&it===1&&m(G),S&&S(G),it=0),be=!1),ht&&!(ht=!1)&&qe&&qe(G),F&&(ce(G),F=!1),Ue=0},ye=function(Se,Ve,ge){ue[ge]+=Se,Pe[ge]+=Ve,G._vx.update(Se),G._vy.update(Ve),c?Ue||(Ue=requestAnimationFrame(Oe)):Oe()},Qe=function(Se,Ve){Me&&!Ye&&(G.axis=Ye=Math.abs(Se)>Math.abs(Ve)?"x":"y",ht=!0),Ye!=="y"&&(ue[2]+=Se,G._vx.update(Se,!0)),Ye!=="x"&&(Pe[2]+=Ve,G._vy.update(Ve,!0)),c?Ue||(Ue=requestAnimationFrame(Oe)):Oe()},$e=function(Se){if(!fe(Se,1)){Se=Po(Se,u);var Ve=Se.clientX,ge=Se.clientY,We=Ve-G.x,Ie=ge-G.y,pe=G.isDragging;G.x=Ve,G.y=ge,(pe||(We||Ie)&&(Math.abs(G.startX-Ve)>=s||Math.abs(G.startY-ge)>=s))&&(it=pe?2:1,pe||(G.isDragging=!0),Qe(We,Ie))}},dt=G.onPress=function(me){fe(me,1)||me&&me.button||(G.axis=Ye=null,tt.pause(),G.isPressed=!0,me=Po(me),Te=lt=0,G.startX=G.x=me.clientX,G.startY=G.y=me.clientY,G._vx.reset(),G._vy.reset(),Ln(H?a:de,Ii[1],$e,Ae,!0),G.deltaX=G.deltaY=0,y&&y(G))},P=G.onRelease=function(me){if(!fe(me,1)){Cn(H?a:de,Ii[1],$e,!0);var Se=!isNaN(G.y-G.startY),Ve=G.isDragging,ge=Ve&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),We=Po(me);!ge&&Se&&(G._vx.reset(),G._vy.reset(),u&&ae&&pn.delayedCall(.08,function(){if(na()-Le>300&&!me.defaultPrevented){if(me.target.click)me.target.click();else if(de.createEvent){var Ie=de.createEvent("MouseEvents");Ie.initMouseEvent("click",!0,!0,li,1,We.screenX,We.screenY,We.clientX,We.clientY,!1,!1,!1,!1,0,null),me.target.dispatchEvent(Ie)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,f&&Ve&&!H&&tt.restart(!0),it&&Oe(),p&&Ve&&p(G),v&&v(G,ge)}},K=function(Se){return Se.touches&&Se.touches.length>1&&(G.isGesturing=!0)&&ne(Se,G.isDragging)},k=function(){return(G.isGesturing=!1)||U(G)},V=function(Se){if(!fe(Se)){var Ve=R(),ge=T();ye((Ve-Y)*j,(ge-ee)*j,1),Y=Ve,ee=ge,f&&tt.restart(!0)}},ie=function(Se){if(!fe(Se)){Se=Po(Se,u),ce&&(F=!0);var Ve=(Se.deltaMode===1?l:Se.deltaMode===2?li.innerHeight:1)*g;ye(Se.deltaX*Ve,Se.deltaY*Ve,0),f&&!H&&tt.restart(!0)}},le=function(Se){if(!fe(Se)){var Ve=Se.clientX,ge=Se.clientY,We=Ve-G.x,Ie=ge-G.y;G.x=Ve,G.y=ge,be=!0,f&&tt.restart(!0),(We||Ie)&&Qe(We,Ie)}},De=function(Se){G.event=Se,B(G)},Ke=function(Se){G.event=Se,X(G)},st=function(Se){return fe(Se)||Po(Se,u)&&Z(G)};tt=G._dc=pn.delayedCall(h||.25,Ge).pause(),G.deltaX=G.deltaY=0,G._vx=Hu(0,50,!0),G._vy=Hu(0,50,!0),G.scrollX=R,G.scrollY=T,G.isDragging=G.isGesturing=G.isPressed=!1,Wm(this),G.enable=function(me){return G.isEnabled||(Ln(Q?de:a,"scroll",ku),o.indexOf("scroll")>=0&&Ln(Q?de:a,"scroll",V,Ae,re),o.indexOf("wheel")>=0&&Ln(a,"wheel",ie,Ae,re),(o.indexOf("touch")>=0&&Gm||o.indexOf("pointer")>=0)&&(Ln(a,Ii[0],dt,Ae,re),Ln(de,Ii[2],P),Ln(de,Ii[3],P),ae&&Ln(a,"click",se,!0,!0),Z&&Ln(a,"click",st),ne&&Ln(de,"gesturestart",K),U&&Ln(de,"gestureend",k),B&&Ln(a,ts+"enter",De),X&&Ln(a,ts+"leave",Ke),W&&Ln(a,ts+"move",le)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=be=it=!1,G._vx.reset(),G._vy.reset(),Y=R(),ee=T(),me&&me.type&&dt(me),xe&&xe(G)),G},G.disable=function(){G.isEnabled&&(Ks.filter(function(me){return me!==G&&ia(me.target)}).length||Cn(Q?de:a,"scroll",ku),G.isPressed&&(G._vx.reset(),G._vy.reset(),Cn(H?a:de,Ii[1],$e,!0)),Cn(Q?de:a,"scroll",V,re),Cn(a,"wheel",ie,re),Cn(a,Ii[0],dt,re),Cn(de,Ii[2],P),Cn(de,Ii[3],P),Cn(a,"click",se,!0),Cn(a,"click",st),Cn(de,"gesturestart",K),Cn(de,"gestureend",k),Cn(a,ts+"enter",De),Cn(a,ts+"leave",Ke),Cn(a,ts+"move",le),G.isEnabled=G.isPressed=G.isDragging=!1,Fe&&Fe(G))},G.kill=G.revert=function(){G.disable();var me=Ks.indexOf(G);me>=0&&Ks.splice(me,1),ar===G&&(ar=0)},Ks.push(G),H&&ia(a)&&(ar=G),G.enable(_)},E0(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();qt.version="3.13.0";qt.create=function(r){return new qt(r)};qt.register=$m;qt.getAll=function(){return Ks.slice()};qt.getById=function(r){return Ks.filter(function(e){return e.vars.id===r})[0]};Xm()&&pn.registerPlugin(qt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Re,$s,ct,Dt,oi,Et,cd,Yl,ya,ra,qo,Fa,xn,pc,Gu,Un,tf,nf,js,jm,Lc,Jm,In,Vu,Zm,Km,br,Wu,ud,ro,hd,$l,Xu,Dc,Oa=1,yn=Date.now,Ic=yn(),Ci=0,Yo=0,rf=function(e,t,n){var i=ii(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},sf=function(e,t){return t&&(!ii(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},C0=function r(){return Yo&&requestAnimationFrame(r)},of=function(){return pc=1},af=function(){return pc=0},Bi=function(e){return e},$o=function(e){return Math.round(e*1e5)/1e5||0},Qm=function(){return typeof window<"u"},eg=function(){return Re||Qm()&&(Re=window.gsap)&&Re.registerPlugin&&Re},xs=function(e){return!!~cd.indexOf(e)},tg=function(e){return(e==="Height"?hd:ct["inner"+e])||oi["client"+e]||Et["client"+e]},ng=function(e){return Ur(e,"getBoundingClientRect")||(xs(e)?function(){return Pl.width=ct.innerWidth,Pl.height=hd,Pl}:function(){return sr(e)})},R0=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Ur(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?tg(s):e["client"+s])||0}},P0=function(e,t){return!t||~qi.indexOf(e)?ng(e):function(){return Pl}},Wi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Ur(e,n))?o()-ng(e)()[s]:xs(e)?(oi[n]||Et[n])-tg(i):e[n]-e["offset"+i])},Ba=function(e,t){for(var n=0;n<js.length;n+=3)(!t||~t.indexOf(js[n+1]))&&e(js[n],js[n+1],js[n+2])},ii=function(e){return typeof e=="string"},Mn=function(e){return typeof e=="function"},jo=function(e){return typeof e=="number"},ns=function(e){return typeof e=="object"},Lo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Uc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},As=Math.abs,ig="left",rg="top",dd="right",fd="bottom",ms="width",gs="height",sa="Right",oa="Left",aa="Top",la="Bottom",Jt="padding",Si="margin",xo="Width",pd="Height",nn="px",Mi=function(e){return ct.getComputedStyle(e)},L0=function(e){var t=Mi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},lf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},sr=function(e,t){var n=t&&Mi(e)[Gu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Re.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},jl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},sg=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},D0=function(e){return function(t){return Re.utils.snap(sg(e),t)}},md=function(e){var t=Re.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},I0=function(e){return function(t,n){return md(sg(e))(t,n.direction)}},za=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},hn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},un=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ka=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},cf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ha={toggleActions:"play",anticipatePin:0},Jl={top:0,left:0,center:.5,bottom:1,right:1},wl=function(e,t){if(ii(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Jl?Jl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ga=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=Dt.createElement("div"),_=xs(n)||Ur(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?Et:n,S=e.indexOf("start")!==-1,y=S?c:u,v="border-color:"+y+";font-size:"+f+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===rn?dd:fd)+":"+(o+parseFloat(h))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Al(g,0,i,S),g},Al=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+xo]=1,s["border"+a+xo]=0,s[n.p]=t+"px",Re.set(e,s)},at=[],qu={},Sa,uf=function(){return yn()-Ci>34&&(Sa||(Sa=requestAnimationFrame(hr)))},Cs=function(){(!In||!In.isPressed||In.startX>Et.clientWidth)&&(ut.cache++,In?Sa||(Sa=requestAnimationFrame(hr)):hr(),Ci||Ss("scrollStart"),Ci=yn())},Nc=function(){Km=ct.innerWidth,Zm=ct.innerHeight},Jo=function(e){ut.cache++,(e===!0||!xn&&!Jm&&!Dt.fullscreenElement&&!Dt.webkitFullscreenElement&&(!Vu||Km!==ct.innerWidth||Math.abs(ct.innerHeight-Zm)>ct.innerHeight*.25))&&Yl.restart(!0)},ys={},U0=[],og=function r(){return un(Xe,"scrollEnd",r)||as(!0)},Ss=function(e){return ys[e]&&ys[e].map(function(t){return t()})||U0},ni=[],ag=function(e){for(var t=0;t<ni.length;t+=5)(!e||ni[t+4]&&ni[t+4].query===e)&&(ni[t].style.cssText=ni[t+1],ni[t].getBBox&&ni[t].setAttribute("transform",ni[t+2]||""),ni[t+3].uncache=1)},gd=function(e,t){var n;for(Un=0;Un<at.length;Un++)n=at[Un],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));$l=!0,t&&ag(t),t||Ss("revert")},lg=function(e,t){ut.cache++,(t||!Nn)&&ut.forEach(function(n){return Mn(n)&&n.cacheID++&&(n.rec=0)}),ii(e)&&(ct.history.scrollRestoration=ud=e)},Nn,_s=0,hf,N0=function(){if(hf!==_s){var e=hf=_s;requestAnimationFrame(function(){return e===_s&&as(!0)})}},cg=function(){Et.appendChild(ro),hd=!In&&ro.offsetHeight||ct.innerHeight,Et.removeChild(ro)},df=function(e){return ya(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},as=function(e,t){if(oi=Dt.documentElement,Et=Dt.body,cd=[ct,Dt,oi,Et],Ci&&!e&&!$l){hn(Xe,"scrollEnd",og);return}cg(),Nn=Xe.isRefreshing=!0,ut.forEach(function(i){return Mn(i)&&++i.cacheID&&(i.rec=i())});var n=Ss("refreshInit");jm&&Xe.sort(),t||gd(),ut.forEach(function(i){Mn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),at.slice(0).forEach(function(i){return i.refresh()}),$l=!1,at.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Xu=1,df(!0),at.forEach(function(i){var s=Wi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),df(!1),Xu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ut.forEach(function(i){Mn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),lg(ud,1),Yl.pause(),_s++,Nn=2,hr(2),at.forEach(function(i){return Mn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Nn=Xe.isRefreshing=!1,Ss("refresh")},Yu=0,Cl=1,ca,hr=function(e){if(e===2||!Nn&&!$l){Xe.isUpdating=!0,ca&&ca.update(0);var t=at.length,n=yn(),i=n-Ic>=50,s=t&&at[0].scroll();if(Cl=Yu>s?-1:1,Nn||(Yu=s),i&&(Ci&&!pc&&n-Ci>200&&(Ci=0,Ss("scrollEnd")),qo=Ic,Ic=n),Cl<0){for(Un=t;Un-- >0;)at[Un]&&at[Un].update(0,i);Cl=1}else for(Un=0;Un<t;Un++)at[Un]&&at[Un].update(0,i);Xe.isUpdating=!1}Sa=0},$u=[ig,rg,fd,dd,Si+la,Si+sa,Si+aa,Si+oa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Rl=$u.concat([ms,gs,"boxSizing","max"+xo,"max"+pd,"position",Si,Jt,Jt+aa,Jt+sa,Jt+la,Jt+oa]),F0=function(e,t,n){so(n);var i=e._gsap;if(i.spacerIsNative)so(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Fc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=$u.length,o=t.style,a=e.style,l;s--;)l=$u[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[fd]=a[dd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ms]=jl(e,On)+nn,o[gs]=jl(e,rn)+nn,o[Jt]=a[Si]=a[rg]=a[ig]="0",so(i),a[ms]=a["max"+xo]=n[ms],a[gs]=a["max"+pd]=n[gs],a[Jt]=n[Jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},O0=/([A-Z])/g,so=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Re.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(O0,"-$1").toLowerCase())}},Va=function(e){for(var t=Rl.length,n=e.style,i=[],s=0;s<t;s++)i.push(Rl[s],n[Rl[s]]);return i.t=e,i},B0=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Pl={left:0,top:0},ff=function(e,t,n,i,s,o,a,l,c,u,f,h,d,g){Mn(e)&&(e=e(l)),ii(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?wl("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,S;if(d&&d.seek(0),isNaN(e)||(e=+e),jo(e))d&&(e=Re.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&Al(a,n,i,!0);else{Mn(t)&&(t=t(l));var y=(e||"0").split(" "),v,E,w,b;S=Hn(t,l)||Et,v=sr(S)||{},(!v||!v.left&&!v.top)&&Mi(S).display==="none"&&(b=S.style.display,S.style.display="block",v=sr(S),b?S.style.display=b:S.style.removeProperty("display")),E=wl(y[0],v[i.d]),w=wl(y[1]||"0",n),e=v[i.p]-c[i.p]-u+E+s-w,a&&Al(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var C=e+n,M=o._isStart;m="scroll"+i.d2,Al(o,C,i,M&&C>20||!M&&(f?Math.max(Et[m],oi[m]):o.parentNode[m])<=C+1),f&&(c=sr(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+nn))}return d&&S&&(m=sr(S),d.seek(h),p=sr(S),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},z0=/(webkit|moz|length|cssText|inset)/i,pf=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===Et){e._stOrig=s.cssText,a=Mi(e);for(o in a)!+o&&!z0.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Re.core.getCache(e).uncache=1,t.appendChild(e)}},ug=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Wa=function(e,t,n){var i={};i[t.p]="+="+n,Re.set(e,i)},mf=function(e,t){var n=Hr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,g={};c=c||n();var _=ug(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){ut.cache++,o.tween&&hr()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Re.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},hn(e,"wheel",n.wheelHandler),Xe.isTouch&&hn(e,"touchmove",n.wheelHandler),s},Xe=(function(){function r(t,n){$s||r.register(Re)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Wu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Yo){this.update=this.refresh=this.kill=Bi;return}n=lf(ii(n)||jo(n)||n.nodeType?{trigger:n}:n,Ha);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,S=s.onSnapComplete,y=s.once,v=s.snap,E=s.pinReparent,w=s.pinSpacer,b=s.containerAnimation,C=s.fastScrollEnd,M=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?On:rn,L=!f&&f!==0,I=Hn(n.scroller||ct),D=Re.core.getCache(I),B=xs(I),X=("pinType"in n?n.pinType:Ur(I,"pinType")||B&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],q=L&&n.toggleActions.split(" "),H="markers"in n?n.markers:Ha.markers,ne=B?0:parseFloat(Mi(I)["border"+x.p2+xo])||0,U=this,ce=n.onRefreshInit&&function(){return n.onRefreshInit(U)},xe=R0(I,B,x),Fe=P0(I,B),Z=0,j=0,re=0,ae=Hr(I,x),Me,qe,Ue,tt,it,be,F,ht,Ye,G,Te,lt,Ae,R,T,Y,ee,te,Q,de,ue,Pe,Le,se,fe,Ge,Oe,ye,Qe,$e,dt,P,K,k,V,ie,le,De,Ke;if(U._startClamp=U._endClamp=!1,U._dir=x,m*=45,U.scroller=I,U.scroll=b?b.time.bind(b):ae,tt=ae(),U.vars=n,i=i||n.animation,"refreshPriority"in n&&(jm=1,n.refreshPriority===-9999&&(ca=U)),D.tweenScroll=D.tweenScroll||{top:mf(I,rn),left:mf(I,On)},U.tweenTo=Me=D.tweenScroll[x.p],U.scrubDuration=function(ge){K=jo(ge)&&ge,K?P?P.duration(ge):P=Re.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:K,paused:!0,onComplete:function(){return p&&p(U)}}):(P&&P.progress(1).kill(),P=0)},i&&(i.vars.lazy=!1,i._initted&&!U.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),U.animation=i.pause(),i.scrollTrigger=U,U.scrubDuration(f),$e=0,l||(l=i.vars.id)),v&&((!ns(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Et.style&&Re.set(B?[Et,oi]:I,{scrollBehavior:"auto"}),ut.forEach(function(ge){return Mn(ge)&&ge.target===(B?Dt.scrollingElement||oi:I)&&(ge.smooth=!1)}),Ue=Mn(v.snapTo)?v.snapTo:v.snapTo==="labels"?D0(i):v.snapTo==="labelsDirectional"?I0(i):v.directional!==!1?function(ge,We){return md(v.snapTo)(ge,yn()-j<500?0:We.direction)}:Re.utils.snap(v.snapTo),k=v.duration||{min:.1,max:2},k=ns(k)?ra(k.min,k.max):ra(k,k),V=Re.delayedCall(v.delay||K/2||.1,function(){var ge=ae(),We=yn()-j<500,Ie=Me.tween;if((We||Math.abs(U.getVelocity())<10)&&!Ie&&!pc&&Z!==ge){var pe=(ge-be)/R,Ze=i&&!L?i.totalProgress():pe,Ee=We?0:(Ze-dt)/(yn()-qo)*1e3||0,pt=Re.utils.clamp(-pe,1-pe,As(Ee/2)*Ee/.185),It=pe+(v.inertia===!1?0:pt),mt,xt,yt=v,Kn=yt.onStart,Ut=yt.onInterrupt,wn=yt.onComplete;if(mt=Ue(It,U),jo(mt)||(mt=It),xt=Math.max(0,Math.round(be+mt*R)),ge<=F&&ge>=be&&xt!==ge){if(Ie&&!Ie._initted&&Ie.data<=As(xt-ge))return;v.inertia===!1&&(pt=mt-pe),Me(xt,{duration:k(As(Math.max(As(It-Ze),As(mt-Ze))*.185/Ee/.05||0)),ease:v.ease||"power3",data:As(xt-ge),onInterrupt:function(){return V.restart(!0)&&Ut&&Ut(U)},onComplete:function(){U.update(),Z=ae(),i&&!L&&(P?P.resetTo("totalProgress",mt,i._tTime/i._tDur):i.progress(mt)),$e=dt=i&&!L?i.totalProgress():U.progress,S&&S(U),wn&&wn(U)}},ge,pt*R,xt-ge-pt*R),Kn&&Kn(U,Me.tween)}}else U.isActive&&Z!==ge&&V.restart(!0)}).pause()),l&&(qu[l]=U),h=U.trigger=Hn(h||d!==!0&&d),Ke=h&&h._gsap&&h._gsap.stRevert,Ke&&(Ke=Ke(U)),d=d===!0?h:Hn(d),ii(a)&&(a={targets:h,className:a}),d&&(g===!1||g===Si||(g=!g&&d.parentNode&&d.parentNode.style&&Mi(d.parentNode).display==="flex"?!1:Jt),U.pin=d,qe=Re.core.getCache(d),qe.spacer?T=qe.pinState:(w&&(w=Hn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),qe.spacerIsNative=!!w,w&&(qe.spacerState=Va(w))),qe.spacer=te=w||Dt.createElement("div"),te.classList.add("pin-spacer"),l&&te.classList.add("pin-spacer-"+l),qe.pinState=T=Va(d)),n.force3D!==!1&&Re.set(d,{force3D:!0}),U.spacer=te=qe.spacer,Qe=Mi(d),se=Qe[g+x.os2],de=Re.getProperty(d),ue=Re.quickSetter(d,x.a,nn),Fc(d,te,Qe),ee=Va(d)),H){lt=ns(H)?lf(H,cf):cf,G=Ga("scroller-start",l,I,x,lt,0),Te=Ga("scroller-end",l,I,x,lt,0,G),Q=G["offset"+x.op.d2];var st=Hn(Ur(I,"content")||I);ht=this.markerStart=Ga("start",l,st,x,lt,Q,0,b),Ye=this.markerEnd=Ga("end",l,st,x,lt,Q,0,b),b&&(De=Re.quickSetter([ht,Ye],x.a,nn)),!X&&!(qi.length&&Ur(I,"fixedMarkers")===!0)&&(L0(B?Et:I),Re.set([G,Te],{force3D:!0}),Ge=Re.quickSetter(G,x.a,nn),ye=Re.quickSetter(Te,x.a,nn))}if(b){var me=b.vars.onUpdate,Se=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){U.update(0,0,1),me&&me.apply(b,Se||[])})}if(U.previous=function(){return at[at.indexOf(U)-1]},U.next=function(){return at[at.indexOf(U)+1]},U.revert=function(ge,We){if(!We)return U.kill(!0);var Ie=ge!==!1||!U.enabled,pe=xn;Ie!==U.isReverted&&(Ie&&(ie=Math.max(ae(),U.scroll.rec||0),re=U.progress,le=i&&i.progress()),ht&&[ht,Ye,G,Te].forEach(function(Ze){return Ze.style.display=Ie?"none":"block"}),Ie&&(xn=U,U.update(Ie)),d&&(!E||!U.isActive)&&(Ie?F0(d,te,T):Fc(d,te,Mi(d),fe)),Ie||U.update(Ie),xn=pe,U.isReverted=Ie)},U.refresh=function(ge,We,Ie,pe){if(!((xn||!U.enabled)&&!We)){if(d&&ge&&Ci){hn(r,"scrollEnd",og);return}!Nn&&ce&&ce(U),xn=U,Me.tween&&!Ie&&(Me.tween.kill(),Me.tween=0),P&&P.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(nt){return nt.vars.immediateRender&&nt.render(0,!0,!0)})),U.isReverted||U.revert(!0,!0),U._subPinOffset=!1;var Ze=xe(),Ee=Fe(),pt=b?b.duration():Wi(I,x),It=R<=.01||!R,mt=0,xt=pe||0,yt=ns(Ie)?Ie.end:n.end,Kn=n.endTrigger||h,Ut=ns(Ie)?Ie.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),wn=U.pinnedContainer=n.pinnedContainer&&Hn(n.pinnedContainer,U),pi=h&&Math.max(0,at.indexOf(U))||0,en=pi,tn,A,z,J,$,O,oe,_e,Ce,we,ke,je,Be;for(H&&ns(Ie)&&(je=Re.getProperty(G,x.p),Be=Re.getProperty(Te,x.p));en-- >0;)O=at[en],O.end||O.refresh(0,1)||(xn=U),oe=O.pin,oe&&(oe===h||oe===d||oe===wn)&&!O.isReverted&&(we||(we=[]),we.unshift(O),O.revert(!0,!0)),O!==at[en]&&(pi--,en--);for(Mn(Ut)&&(Ut=Ut(U)),Ut=rf(Ut,"start",U),be=ff(Ut,h,Ze,x,ae(),ht,G,U,Ee,ne,X,pt,b,U._startClamp&&"_startClamp")||(d?-.001:0),Mn(yt)&&(yt=yt(U)),ii(yt)&&!yt.indexOf("+=")&&(~yt.indexOf(" ")?yt=(ii(Ut)?Ut.split(" ")[0]:"")+yt:(mt=wl(yt.substr(2),Ze),yt=ii(Ut)?Ut:(b?Re.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,be):be)+mt,Kn=h)),yt=rf(yt,"end",U),F=Math.max(be,ff(yt||(Kn?"100% 0":pt),Kn,Ze,x,ae()+mt,Ye,Te,U,Ee,ne,X,pt,b,U._endClamp&&"_endClamp"))||-.001,mt=0,en=pi;en--;)O=at[en],oe=O.pin,oe&&O.start-O._pinPush<=be&&!b&&O.end>0&&(tn=O.end-(U._startClamp?Math.max(0,O.start):O.start),(oe===h&&O.start-O._pinPush<be||oe===wn)&&isNaN(Ut)&&(mt+=tn*(1-O.progress)),oe===d&&(xt+=tn));if(be+=mt,F+=mt,U._startClamp&&(U._startClamp+=mt),U._endClamp&&!Nn&&(U._endClamp=F||-.001,F=Math.min(F,Wi(I,x))),R=F-be||(be-=.01)&&.001,It&&(re=Re.utils.clamp(0,1,Re.utils.normalize(be,F,ie))),U._pinPush=xt,ht&&mt&&(tn={},tn[x.a]="+="+mt,wn&&(tn[x.p]="-="+ae()),Re.set([ht,Ye],tn)),d&&!(Xu&&U.end>=Wi(I,x)))tn=Mi(d),J=x===rn,z=ae(),Pe=parseFloat(de(x.a))+xt,!pt&&F>1&&(ke=(B?Dt.scrollingElement||oi:I).style,ke={style:ke,value:ke["overflow"+x.a.toUpperCase()]},B&&Mi(Et)["overflow"+x.a.toUpperCase()]!=="scroll"&&(ke.style["overflow"+x.a.toUpperCase()]="scroll")),Fc(d,te,tn),ee=Va(d),A=sr(d,!0),_e=X&&Hr(I,J?On:rn)(),g?(fe=[g+x.os2,R+xt+nn],fe.t=te,en=g===Jt?jl(d,x)+R+xt:0,en&&(fe.push(x.d,en+nn),te.style.flexBasis!=="auto"&&(te.style.flexBasis=en+nn)),so(fe),wn&&at.forEach(function(nt){nt.pin===wn&&nt.vars.pinSpacing!==!1&&(nt._subPinOffset=!0)}),X&&ae(ie)):(en=jl(d,x),en&&te.style.flexBasis!=="auto"&&(te.style.flexBasis=en+nn)),X&&($={top:A.top+(J?z-be:_e)+nn,left:A.left+(J?_e:z-be)+nn,boxSizing:"border-box",position:"fixed"},$[ms]=$["max"+xo]=Math.ceil(A.width)+nn,$[gs]=$["max"+pd]=Math.ceil(A.height)+nn,$[Si]=$[Si+aa]=$[Si+sa]=$[Si+la]=$[Si+oa]="0",$[Jt]=tn[Jt],$[Jt+aa]=tn[Jt+aa],$[Jt+sa]=tn[Jt+sa],$[Jt+la]=tn[Jt+la],$[Jt+oa]=tn[Jt+oa],Y=B0(T,$,E),Nn&&ae(0)),i?(Ce=i._initted,Lc(1),i.render(i.duration(),!0,!0),Le=de(x.a)-Pe+R+xt,Oe=Math.abs(R-Le)>1,X&&Oe&&Y.splice(Y.length-2,2),i.render(0,!0,!0),Ce||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Lc(0)):Le=R,ke&&(ke.value?ke.style["overflow"+x.a.toUpperCase()]=ke.value:ke.style.removeProperty("overflow-"+x.a));else if(h&&ae()&&!b)for(A=h.parentNode;A&&A!==Et;)A._pinOffset&&(be-=A._pinOffset,F-=A._pinOffset),A=A.parentNode;we&&we.forEach(function(nt){return nt.revert(!1,!0)}),U.start=be,U.end=F,tt=it=Nn?ie:ae(),!b&&!Nn&&(tt<ie&&ae(ie),U.scroll.rec=0),U.revert(!1,!0),j=yn(),V&&(Z=-1,V.restart(!0)),xn=0,i&&L&&(i._initted||le)&&i.progress()!==le&&i.progress(le||0,!0).render(i.time(),!0,!0),(It||re!==U.progress||b||_||i&&!i._initted)&&(i&&!L&&(i._initted||re||i.vars.immediateRender!==!1)&&i.totalProgress(b&&be<-.001&&!re?Re.utils.normalize(be,F,0):re,!0),U.progress=It||(tt-be)/R===re?0:re),d&&g&&(te._pinOffset=Math.round(U.progress*Le)),P&&P.invalidate(),isNaN(je)||(je-=Re.getProperty(G,x.p),Be-=Re.getProperty(Te,x.p),Wa(G,x,je),Wa(ht,x,je-(pe||0)),Wa(Te,x,Be),Wa(Ye,x,Be-(pe||0))),It&&!Nn&&U.update(),u&&!Nn&&!Ae&&(Ae=!0,u(U),Ae=!1)}},U.getVelocity=function(){return(ae()-it)/(yn()-qo)*1e3||0},U.endAnimation=function(){Lo(U.callbackAnimation),i&&(P?P.progress(1):i.paused()?L||Lo(i,U.direction<0,1):Lo(i,i.reversed()))},U.labelToScroll=function(ge){return i&&i.labels&&(be||U.refresh()||be)+i.labels[ge]/i.duration()*R||0},U.getTrailing=function(ge){var We=at.indexOf(U),Ie=U.direction>0?at.slice(0,We).reverse():at.slice(We+1);return(ii(ge)?Ie.filter(function(pe){return pe.vars.preventOverlaps===ge}):Ie).filter(function(pe){return U.direction>0?pe.end<=be:pe.start>=F})},U.update=function(ge,We,Ie){if(!(b&&!Ie&&!ge)){var pe=Nn===!0?ie:U.scroll(),Ze=ge?0:(pe-be)/R,Ee=Ze<0?0:Ze>1?1:Ze||0,pt=U.progress,It,mt,xt,yt,Kn,Ut,wn,pi;if(We&&(it=tt,tt=b?ae():pe,v&&(dt=$e,$e=i&&!L?i.totalProgress():Ee)),m&&d&&!xn&&!Oa&&Ci&&(!Ee&&be<pe+(pe-it)/(yn()-qo)*m?Ee=1e-4:Ee===1&&F>pe+(pe-it)/(yn()-qo)*m&&(Ee=.9999)),Ee!==pt&&U.enabled){if(It=U.isActive=!!Ee&&Ee<1,mt=!!pt&&pt<1,Ut=It!==mt,Kn=Ut||!!Ee!=!!pt,U.direction=Ee>pt?1:-1,U.progress=Ee,Kn&&!xn&&(xt=Ee&&!pt?0:Ee===1?1:pt===1?2:3,L&&(yt=!Ut&&q[xt+1]!=="none"&&q[xt+1]||q[xt],pi=i&&(yt==="complete"||yt==="reset"||yt in i))),M&&(Ut||pi)&&(pi||f||!i)&&(Mn(M)?M(U):U.getTrailing(M).forEach(function(z){return z.endAnimation()})),L||(P&&!xn&&!Oa?(P._dp._time-P._start!==P._time&&P.render(P._dp._time-P._start),P.resetTo?P.resetTo("totalProgress",Ee,i._tTime/i._tDur):(P.vars.totalProgress=Ee,P.invalidate().restart())):i&&i.totalProgress(Ee,!!(xn&&(j||ge)))),d){if(ge&&g&&(te.style[g+x.os2]=se),!X)ue($o(Pe+Le*Ee));else if(Kn){if(wn=!ge&&Ee>pt&&F+1>pe&&pe+1>=Wi(I,x),E)if(!ge&&(It||wn)){var en=sr(d,!0),tn=pe-be;pf(d,Et,en.top+(x===rn?tn:0)+nn,en.left+(x===rn?0:tn)+nn)}else pf(d,te);so(It||wn?Y:ee),Oe&&Ee<1&&It||ue(Pe+(Ee===1&&!wn?Le:0))}}v&&!Me.tween&&!xn&&!Oa&&V.restart(!0),a&&(Ut||y&&Ee&&(Ee<1||!Dc))&&ya(a.targets).forEach(function(z){return z.classList[It||y?"add":"remove"](a.className)}),o&&!L&&!ge&&o(U),Kn&&!xn?(L&&(pi&&(yt==="complete"?i.pause().totalProgress(1):yt==="reset"?i.restart(!0).pause():yt==="restart"?i.restart(!0):i[yt]()),o&&o(U)),(Ut||!Dc)&&(c&&Ut&&Uc(U,c),W[xt]&&Uc(U,W[xt]),y&&(Ee===1?U.kill(!1,1):W[xt]=0),Ut||(xt=Ee===1?1:3,W[xt]&&Uc(U,W[xt]))),C&&!It&&Math.abs(U.getVelocity())>(jo(C)?C:2500)&&(Lo(U.callbackAnimation),P?P.progress(1):Lo(i,yt==="reverse"?1:!Ee,1))):L&&o&&!xn&&o(U)}if(ye){var A=b?pe/b.duration()*(b._caScrollDist||0):pe;Ge(A+(G._isFlipped?1:0)),ye(A)}De&&De(-pe/b.duration()*(b._caScrollDist||0))}},U.enable=function(ge,We){U.enabled||(U.enabled=!0,hn(I,"resize",Jo),B||hn(I,"scroll",Cs),ce&&hn(r,"refreshInit",ce),ge!==!1&&(U.progress=re=0,tt=it=Z=ae()),We!==!1&&U.refresh())},U.getTween=function(ge){return ge&&Me?Me.tween:P},U.setPositions=function(ge,We,Ie,pe){if(b){var Ze=b.scrollTrigger,Ee=b.duration(),pt=Ze.end-Ze.start;ge=Ze.start+pt*ge/Ee,We=Ze.start+pt*We/Ee}U.refresh(!1,!1,{start:sf(ge,Ie&&!!U._startClamp),end:sf(We,Ie&&!!U._endClamp)},pe),U.update()},U.adjustPinSpacing=function(ge){if(fe&&ge){var We=fe.indexOf(x.d)+1;fe[We]=parseFloat(fe[We])+ge+nn,fe[1]=parseFloat(fe[1])+ge+nn,so(fe)}},U.disable=function(ge,We){if(U.enabled&&(ge!==!1&&U.revert(!0,!0),U.enabled=U.isActive=!1,We||P&&P.pause(),ie=0,qe&&(qe.uncache=1),ce&&un(r,"refreshInit",ce),V&&(V.pause(),Me.tween&&Me.tween.kill()&&(Me.tween=0)),!B)){for(var Ie=at.length;Ie--;)if(at[Ie].scroller===I&&at[Ie]!==U)return;un(I,"resize",Jo),B||un(I,"scroll",Cs)}},U.kill=function(ge,We){U.disable(ge,We),P&&!We&&P.kill(),l&&delete qu[l];var Ie=at.indexOf(U);Ie>=0&&at.splice(Ie,1),Ie===Un&&Cl>0&&Un--,Ie=0,at.forEach(function(pe){return pe.scroller===U.scroller&&(Ie=1)}),Ie||Nn||(U.scroll.rec=0),i&&(i.scrollTrigger=null,ge&&i.revert({kill:!1}),We||i.kill()),ht&&[ht,Ye,G,Te].forEach(function(pe){return pe.parentNode&&pe.parentNode.removeChild(pe)}),ca===U&&(ca=0),d&&(qe&&(qe.uncache=1),Ie=0,at.forEach(function(pe){return pe.pin===d&&Ie++}),Ie||(qe.spacer=0)),n.onKill&&n.onKill(U)},at.push(U),U.enable(!1,!1),Ke&&Ke(U),i&&i.add&&!R){var Ve=U.update;U.update=function(){U.update=Ve,ut.cache++,be||F||U.refresh()},Re.delayedCall(.01,U.update),R=.01,be=F=0}else U.refresh();d&&N0()},r.register=function(n){return $s||(Re=n||eg(),Qm()&&window.document&&r.enable(),$s=Yo),$s},r.defaults=function(n){if(n)for(var i in n)Ha[i]=n[i];return Ha},r.disable=function(n,i){Yo=0,at.forEach(function(o){return o[i?"kill":"disable"](n)}),un(ct,"wheel",Cs),un(Dt,"scroll",Cs),clearInterval(Fa),un(Dt,"touchcancel",Bi),un(Et,"touchstart",Bi),za(un,Dt,"pointerdown,touchstart,mousedown",of),za(un,Dt,"pointerup,touchend,mouseup",af),Yl.kill(),Ba(un);for(var s=0;s<ut.length;s+=3)ka(un,ut[s],ut[s+1]),ka(un,ut[s],ut[s+2])},r.enable=function(){if(ct=window,Dt=document,oi=Dt.documentElement,Et=Dt.body,Re&&(ya=Re.utils.toArray,ra=Re.utils.clamp,Wu=Re.core.context||Bi,Lc=Re.core.suppressOverwrites||Bi,ud=ct.history.scrollRestoration||"auto",Yu=ct.pageYOffset||0,Re.core.globals("ScrollTrigger",r),Et)){Yo=1,ro=document.createElement("div"),ro.style.height="100vh",ro.style.position="absolute",cg(),C0(),qt.register(Re),r.isTouch=qt.isTouch,br=qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Vu=qt.isTouch===1,hn(ct,"wheel",Cs),cd=[ct,Dt,oi,Et],Re.matchMedia?(r.matchMedia=function(c){var u=Re.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Re.addEventListener("matchMediaInit",function(){return gd()}),Re.addEventListener("matchMediaRevert",function(){return ag()}),Re.addEventListener("matchMedia",function(){as(0,1),Ss("matchMedia")}),Re.matchMedia().add("(orientation: portrait)",function(){return Nc(),Nc})):console.warn("Requires GSAP 3.11.0 or later"),Nc(),hn(Dt,"scroll",Cs);var n=Et.hasAttribute("style"),i=Et.style,s=i.borderTopStyle,o=Re.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=sr(Et),rn.m=Math.round(a.top+rn.sc())||0,On.m=Math.round(a.left+On.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Et.setAttribute("style",""),Et.removeAttribute("style")),Fa=setInterval(uf,250),Re.delayedCall(.5,function(){return Oa=0}),hn(Dt,"touchcancel",Bi),hn(Et,"touchstart",Bi),za(hn,Dt,"pointerdown,touchstart,mousedown",of),za(hn,Dt,"pointerup,touchend,mouseup",af),Gu=Re.utils.checkPrefix("transform"),Rl.push(Gu),$s=yn(),Yl=Re.delayedCall(.2,as).pause(),js=[Dt,"visibilitychange",function(){var c=ct.innerWidth,u=ct.innerHeight;Dt.hidden?(tf=c,nf=u):(tf!==c||nf!==u)&&Jo()},Dt,"DOMContentLoaded",as,ct,"load",as,ct,"resize",Jo],Ba(hn),at.forEach(function(c){return c.enable(0,1)}),l=0;l<ut.length;l+=3)ka(un,ut[l],ut[l+1]),ka(un,ut[l],ut[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Dc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Fa)||(Fa=i)&&setInterval(uf,i),"ignoreMobileResize"in n&&(Vu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ba(un)||Ba(hn,n.autoRefreshEvents||"none"),Jm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Hn(n),o=ut.indexOf(s),a=xs(s);~o&&ut.splice(o,a?6:2),i&&(a?qi.unshift(ct,i,Et,i,oi,i):qi.unshift(s,i))},r.clearMatchMedia=function(n){at.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(ii(n)?Hn(n):n).getBoundingClientRect(),a=o[s?ms:gs]*i||0;return s?o.right-a>0&&o.left+a<ct.innerWidth:o.bottom-a>0&&o.top+a<ct.innerHeight},r.positionInViewport=function(n,i,s){ii(n)&&(n=Hn(n));var o=n.getBoundingClientRect(),a=o[s?ms:gs],l=i==null?a/2:i in Jl?Jl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ct.innerWidth:(o.top+l)/ct.innerHeight},r.killAll=function(n){if(at.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ys.killAll||[];ys={},i.forEach(function(s){return s()})}},r})();Xe.version="3.13.0";Xe.saveStyles=function(r){return r?ya(r).forEach(function(e){if(e&&e.style){var t=ni.indexOf(e);t>=0&&ni.splice(t,5),ni.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Re.core.getCache(e),Wu())}}):ni};Xe.revert=function(r,e){return gd(!r,e)};Xe.create=function(r,e){return new Xe(r,e)};Xe.refresh=function(r){return r?Jo(!0):($s||Xe.register())&&as(!0)};Xe.update=function(r){return++ut.cache&&hr(r===!0?2:0)};Xe.clearScrollMemory=lg;Xe.maxScroll=function(r,e){return Wi(r,e?On:rn)};Xe.getScrollFunc=function(r,e){return Hr(Hn(r),e?On:rn)};Xe.getById=function(r){return qu[r]};Xe.getAll=function(){return at.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Xe.isScrolling=function(){return!!Ci};Xe.snapDirectional=md;Xe.addEventListener=function(r,e){var t=ys[r]||(ys[r]=[]);~t.indexOf(e)||t.push(e)};Xe.removeEventListener=function(r,e){var t=ys[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Xe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Re.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Mn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Mn(s)&&(s=s(),hn(Xe,"refresh",function(){return s=e.batchMax()})),ya(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Xe.create(c))}),t};var gf=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Oc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(qt.isTouch?" pinch-zoom":""):"none",e===oi&&r(Et,t)},Xa={auto:1,scroll:1},k0=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Re.core.getCache(s),a=yn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Et&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Xa[(l=Mi(s)).overflowY]||Xa[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!xs(s)&&(Xa[(l=Mi(s)).overflowY]||Xa[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},hg=function(e,t,n,i){return qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&k0,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&hn(Dt,qt.eventTypes[0],vf,!1,!0)},onDisable:function(){return un(Dt,qt.eventTypes[0],vf,!0)}})},H0=/(input|label|select|textarea)/i,_f,vf=function(e){var t=H0.test(e.target.tagName);(t||_f)&&(e._gsapAllow=!0,_f=t)},G0=function(e){ns(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Hn(e.target)||oi,u=Re.core.globals().ScrollSmoother,f=u&&u.get(),h=br&&(e.content&&Hn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=Hr(c,rn),g=Hr(c,On),_=1,m=(qt.isTouch&&ct.visualViewport?ct.visualViewport.scale*ct.visualViewport.width:ct.outerWidth)/ct.innerWidth,p=0,S=Mn(i)?function(){return i(a)}:function(){return i||2.8},y,v,E=hg(c,e.type,!0,s),w=function(){return v=!1},b=Bi,C=Bi,M=function(){l=Wi(c,rn),C=ra(br?1:0,l),n&&(b=ra(0,Wi(c,On))),y=_s},x=function(){h._gsap.y=$o(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(v){requestAnimationFrame(w);var H=$o(a.deltaY/2),ne=C(d.v-H);if(h&&ne!==d.v+d.offset){d.offset=ne-d.v;var U=$o((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+U+", 0, 1)",h._gsap.y=U+"px",d.cacheID=ut.cache,hr()}return!0}d.offset&&x(),v=!0},I,D,B,X,W=function(){M(),I.isActive()&&I.vars.scrollY>l&&(d()>l?I.progress(1)&&d(l):I.resetTo("scrollY",l))};return h&&Re.set(h,{y:"+=0"}),e.ignoreCheck=function(q){return br&&q.type==="touchmove"&&L()||_>1.05&&q.type!=="touchstart"||a.isGesturing||q.touches&&q.touches.length>1},e.onPress=function(){v=!1;var q=_;_=$o((ct.visualViewport&&ct.visualViewport.scale||1)/m),I.pause(),q!==_&&Oc(c,_>1.01?!0:n?!1:"x"),D=g(),B=d(),M(),y=_s},e.onRelease=e.onGestureStart=function(q,H){if(d.offset&&x(),!H)X.restart(!0);else{ut.cache++;var ne=S(),U,ce;n&&(U=g(),ce=U+ne*.05*-q.velocityX/.227,ne*=gf(g,U,ce,Wi(c,On)),I.vars.scrollX=b(ce)),U=d(),ce=U+ne*.05*-q.velocityY/.227,ne*=gf(d,U,ce,Wi(c,rn)),I.vars.scrollY=C(ce),I.invalidate().duration(ne).play(.01),(br&&I.vars.scrollY>=l||U>=l-1)&&Re.to({},{onUpdate:W,duration:ne})}o&&o(q)},e.onWheel=function(){I._ts&&I.pause(),yn()-p>1e3&&(y=0,p=yn())},e.onChange=function(q,H,ne,U,ce){if(_s!==y&&M(),H&&n&&g(b(U[2]===H?D+(q.startX-q.x):g()+H-U[1])),ne){d.offset&&x();var xe=ce[2]===ne,Fe=xe?B+q.startY-q.y:d()+ne-ce[1],Z=C(Fe);xe&&Fe!==Z&&(B+=Z-Fe),d(Z)}(ne||H)&&hr()},e.onEnable=function(){Oc(c,n?!1:"x"),Xe.addEventListener("refresh",W),hn(ct,"resize",W),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),E.enable()},e.onDisable=function(){Oc(c,!0),un(ct,"resize",W),Xe.removeEventListener("refresh",W),E.kill()},e.lockAxis=e.lockAxis!==!1,a=new qt(e),a.iOS=br,br&&!d()&&d(1),br&&Re.ticker.add(Bi),X=a._dc,I=Re.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ug(d,d(),function(){return I.pause()})},onUpdate:hr,onComplete:X.vars.onComplete}),a};Xe.sort=function(r){if(Mn(r))return at.sort(r);var e=ct.pageYOffset||0;return Xe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ct.innerHeight}),at.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Xe.observe=function(r){return new qt(r)};Xe.normalizeScroll=function(r){if(typeof r>"u")return In;if(r===!0&&In)return In.enable();if(r===!1){In&&In.kill(),In=r;return}var e=r instanceof qt?r:G0(r);return In&&In.target===e.target&&In.kill(),xs(e.target)&&(In=e),e};Xe.core={_getVelocityProp:Hu,_inputObserver:hg,_scrollers:ut,_proxies:qi,bridge:{ss:function(){Ci||Ss("scrollStart"),Ci=yn()},ref:function(){return xn}}};eg()&&Re.registerPlugin(Xe);var V0="1.3.4";function dg(r,e,t){return Math.max(r,Math.min(e,t))}function W0(r,e,t){return(1-t)*r+t*e}function X0(r,e,t,n){return W0(r,e,1-Math.exp(-t*n))}function q0(r,e){return(r%e+e)%e}var Y0=class{constructor(){ze(this,"isRunning",!1);ze(this,"value",0);ze(this,"from",0);ze(this,"to",0);ze(this,"currentTime",0);ze(this,"lerp");ze(this,"duration");ze(this,"easing");ze(this,"onUpdate")}advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=dg(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=X0(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function $0(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var j0=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){ze(this,"width",0);ze(this,"height",0);ze(this,"scrollHeight",0);ze(this,"scrollWidth",0);ze(this,"debouncedResize");ze(this,"wrapperResizeObserver");ze(this,"contentResizeObserver");ze(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});ze(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});ze(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=$0(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},fg=class{constructor(){ze(this,"events",{})}emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},xf=100/6,gr={passive:!1},J0=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){ze(this,"touchStart",{x:0,y:0});ze(this,"lastDelta",{x:0,y:0});ze(this,"window",{width:0,height:0});ze(this,"emitter",new fg);ze(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});ze(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});ze(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});ze(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?xf:n===2?this.window.width:1,s=n===1?xf:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});ze(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,gr),this.element.addEventListener("touchstart",this.onTouchStart,gr),this.element.addEventListener("touchmove",this.onTouchMove,gr),this.element.addEventListener("touchend",this.onTouchEnd,gr)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,gr),this.element.removeEventListener("touchstart",this.onTouchStart,gr),this.element.removeEventListener("touchmove",this.onTouchMove,gr),this.element.removeEventListener("touchend",this.onTouchEnd,gr)}},yf=r=>Math.min(1,1.001-Math.pow(2,-10*r)),Z0=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:o=35,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h="vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:S=!0,autoRaf:y=!1,anchors:v=!1,autoToggle:E=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:b=!1}={}){ze(this,"_isScrolling",!1);ze(this,"_isStopped",!1);ze(this,"_isLocked",!1);ze(this,"_preventNextNativeScrollEvent",!1);ze(this,"_resetVelocityTimeout",null);ze(this,"__rafID",null);ze(this,"isTouching");ze(this,"time",0);ze(this,"userData",{});ze(this,"lastVelocity",0);ze(this,"velocity",0);ze(this,"direction",0);ze(this,"options");ze(this,"targetScroll");ze(this,"animatedScroll");ze(this,"animate",new Y0);ze(this,"emitter",new fg);ze(this,"dimensions");ze(this,"virtualScroll");ze(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});ze(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});ze(this,"onTransitionEnd",r=>{if(r.propertyName.includes("overflow")){const e=this.isHorizontal?"overflow-x":"overflow-y",t=getComputedStyle(this.rootElement)[e];["hidden","clip"].includes(t)?this.stop():this.start()}});ze(this,"onClick",r=>{const t=r.composedPath().find(n=>n instanceof HTMLAnchorElement&&(n.getAttribute("href")?.startsWith("#")||n.getAttribute("href")?.startsWith("/#")||n.getAttribute("href")?.startsWith("./#")));if(t){const n=t.getAttribute("href");if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;let s=`#${n.split("#")[1]}`;["#","/#","./#","#top","/#top","./#top"].includes(n)&&(s=0),this.scrollTo(s,i)}}});ze(this,"onPointerDown",r=>{r.button===1&&this.reset()});ze(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof u=="function"&&u?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.preventDefault();const d=i&&this.options.syncTouch,_=i&&n.type==="touchend"&&Math.abs(h)>5;_&&(h=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+h,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});ze(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});ze(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=V0,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=yf:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:S,autoRaf:y,anchors:v,autoToggle:E,allowNestedScroll:w,__experimental__naiveDimensions:b},this.dimensions=new j0(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new J0(t,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:u=!0,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let h;if(typeof r=="string"?h=document.querySelector(r):r instanceof HTMLElement&&r?.nodeType&&(h=r),h){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const d=h.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(u){this.targetScroll=this.animatedScroll=this.scroll;const h=r-this.animatedScroll;h>this.limit/2?r=r-this.limit:h<-this.limit/2&&(r=r+this.limit)}}else r=dg(0,r,this.limit);if(r===this.targetScroll){a?.(this),l?.(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=r),typeof i=="number"&&typeof s!="function"?s=yf:typeof s=="function"&&typeof i!="number"&&(i=1),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a?.(this)},onUpdate:(h,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),u&&(this.targetScroll=h),d||this.emit(),d&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??(r._lenis={});let s,o,a,l,c,u,f,h;const d=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const E=window.getComputedStyle(r);i.computedStyle=E;const w=E.overflowX,b=E.overflowY;if(s=["auto","overlay","scroll"].includes(w),o=["auto","overlay","scroll"].includes(b),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||d==="vertical"&&!o||d==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,h=r.clientHeight,a=c>f,l=u>h,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,h=i.clientHeight;if(!s&&!o||!a&&!l||d==="vertical"&&(!o||!l)||d==="horizontal"&&(!s||!a))return!1;let g;if(d==="horizontal")g="x";else if(d==="vertical")g="y";else{const E=e!==0,w=t!==0;E&&s&&a&&(g="x"),w&&o&&l&&(g="y")}if(!g)return!1;let _,m,p,S,y;if(g==="x")_=r.scrollLeft,m=c-f,p=e,S=s,y=a;else if(g==="y")_=r.scrollTop,m=u-h,p=t,S=o,y=l;else return!1;return(p>0?_<m:_>0)&&S&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?q0(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const Sf="https://johnnyrayane237.github.io/jobhunter-poste-de-pilotage/",Mf="https://johnnyrayane237.github.io/aiguilleur/",bf={fr:{meta:{title:"Johanne Pamegne — Automatisation & IA, motion design",description:"Portfolio de Johanne Rayane Nkeuchatchou Pamegne : agents IA, workflows n8n, infrastructure auto-hébergée et motion design en code. Disponible en alternance ou stage alterné."},ui:{"nav.work":"Travaux","nav.pipeline":"Pipeline","nav.motion":"Motion","nav.path":"Parcours","nav.contact":"Contact","nav.menu":"Menu","nav.close":"Fermer",status:"Disponible — alternance ou stage alterné","hero.fullname":"Johanne Rayane Nkeuchatchou Pamegne","hero.kicker":'Alternant <span class="u-accent">Automatisation &amp; IA</span><br>Motion design écrit en code',"hero.lede":"Je conçois des systèmes qui travaillent tout seuls — agents IA, workflows n8n, serveurs — et je leur donne du mouvement.","hero.scroll":"Faire défiler","hero.loc":"Saint-Denis · Île-de-France","manifesto.label":"(01) Manifeste","manifesto.text":"Je construis des systèmes qui font le travail répétitif à la place des équipes. Des agents qui lisent, trient et rédigent. Des workflows qui tournent la nuit. Une seule règle : une personne valide chaque action qui compte.","manifesto.method":"Méthode : je pilote l'IA (Claude Code) pour écrire le code, puis je teste, je mesure les coûts et je documente.","work.label":"(02) Travaux sélectionnés","work.title":"Des systèmes <em>qui tournent,</em> pas des maquettes.","work.hint":"Cliquer pour ouvrir le projet","pipeline.label":"(03) Pipeline en direct","pipeline.title":"Un e-mail entre. <em>À vous de valider.</em>","pipeline.intro":"Faites défiler : le message avance d'étape en étape, comme dans n8n. Un seul appel à Claude, une sortie JSON imposée, et rien ne part sans le clic d'une personne. Ici, cette personne, c'est vous.","pipeline.note":"Exemple fictif tiré d'un de mes projets — aucun e-mail n'est réellement envoyé.","motion.label":"(05) Motion design","motion.title":"Du mouvement <em>écrit en code.</em>","motion.intro":"Animé en HTML et GSAP avec HyperFrames, voix off ElevenLabs, montage et son avec FFmpeg — le tout piloté avec Claude Code. Le film DT Design est publié avec l'accord de la marque.","motion.play":"Lire avec le son","mdm.title":"Le Meilleur des mondes","mdm.text":"Présentation éditoriale en 4 pages verticales : mise en page en HTML et CSS, schémas SVG générés en JavaScript, export PDF automatique. Réalisée avec Tissio Fumtul Donald.","cap.label":"(06) Capacités","cap.title":"Une boîte à outils <em>de bout en bout.</em>","path.label":"(07) Parcours","path.title":"Apprendre vite, <em>livrer vraiment.</em>","contact.label":"(08) Contact","contact.title":"Parlons <em>alternance.</em>","contact.text":"Je cherche une alternance ou un stage alterné en automatisation et IA, en Île-de-France ou à distance. Rythme école / entreprise flexible, disponible dès maintenant.","contact.mail":"Écrire un e-mail","contact.cv":"Télécharger le CV","contact.copy":"Copier l'adresse","contact.copied":"Adresse copiée","footer.credit":"Conçu et codé par Johanne.","footer.top":"Haut de page","footer.time":"Heure locale","case.close":"Fermer","case.results":"Résultats mesurés","case.built":"Ce que j'ai construit","case.stack":"Outils","case.next":"Projet suivant","loader.1":"démarrage de n8n","loader.2":"connexion à Claude","loader.3":"chargement des workflows","loader.4":"validation humaine : ok","lang.switch":"Switch to English",skip:"Aller au contenu"},stats:[{n:5,suffix:"",label:"systèmes n8n construits en 2026"},{n:32,suffix:"",label:"workflows dans l'agence de doublage"},{n:102,suffix:"",label:"tests automatisés sur un seul projet"},{n:13,suffix:"/13",label:"candidatures correctement vérifiées par JobHunter"}],projects:[{id:"doublage",year:"2026",img:"media/doublage.webp",title:"Agence IA de doublage vidéo",sub:"Multi-agent · voix clonée",tags:["n8n","API Claude","ElevenLabs","Telegram"],summary:"Une vidéo envoyée sur Telegram revient doublée dans une autre langue, avec la voix d'origine. Un agent directeur coordonne une équipe d'agents : traduction, voix, contrôle qualité.",metrics:[["4 min 40","pour doubler une vidéo réelle de 2 min 10"],["8/10","au contrôle qualité, voix jamais accélérée"],["32","workflows n8n décrits en JavaScript"],["102","tests automatisés"]],built:["Bot Telegram qui répond en 3,5 à 5,6 secondes","Voix clonée avec ElevenLabs, vidéos rangées dans Google Drive","Services simulés pour tout tester sans dépenser","Construit en 3 jours, en pilotant Claude Code"],stack:["n8n","API Claude","ElevenLabs","Telegram","Google Drive","Docker","Node.js"],links:[]},{id:"jobhunter",year:"2026",img:"media/jobhunter.webp",title:"JobHunter",sub:"Système multi-agent de recherche d'alternance",tags:["n8n","Supabase","API Claude","React"],summary:"Des agents cherchent les offres, les notent, trouvent le bon contact et préparent chaque candidature. Un agent vérificateur relit tout : la base refuse un e-mail sans relecture réussie.",metrics:[["74 → 34","offres reçues puis retenues, sur un test réel"],["13/13","candidatures correctement vérifiées"],["0,07 $","coût mesuré par candidature"],["3 000","pas de simulation sans franchir une étape réservée à l'humain"]],built:["13 workflows générés depuis le code et déployés par script","Base Supabase : 21 tables protégées par RLS","Poste de pilotage React 19 + TypeScript, testé avec Vitest","Coût de chaque appel à l’IA enregistré"],stack:["n8n","Supabase","API Claude","Telegram","React 19","TypeScript","Zustand","Vitest"],links:[["Voir le poste de pilotage",Sf]]},{id:"aiguilleur",year:"2026",img:"media/aiguilleur.webp",title:"Aiguilleur IA",sub:"Tri automatique des e-mails clients",tags:["n8n","API Claude","Gmail","Google Sheets"],summary:"Il relève la boîte contact@ d'une entreprise toutes les 15 secondes. Un seul appel à Claude classe l'e-mail, mesure l'urgence, résume, rédige un brouillon et le confie au bon collègue.",metrics:[["32/32","e-mails de test bien classés"],["1,5 ct","par e-mail analysé"],["15 s","entre deux relèves de la boîte"],["85 %","de confiance minimum, sinon une personne tranche"]],built:["Relève la boîte toutes les 15 s, pièces jointes PDF et photos comprises","Une fiche claire au bon collègue : résumé, action à faire, proposition de réponse","Réponses automatiques en brouillon à valider par défaut","Déclinable par métier : syndic, commerce"],stack:["n8n","API Claude","Gmail","Google Sheets","Telegram","Docker"],links:[["Voir sous le capot","#sous-le-capot"],["Voir la présentation",Mf]]},{id:"vorchex",year:"2026",img:null,title:"Infrastructure VorcheX",sub:"Serveur d'automatisation auto-hébergé",tags:["VPS Ubuntu","Docker","Coolify","PostgreSQL"],summary:"Mon propre serveur d'automatisation : un n8n central et sa base PostgreSQL sur un VPS que j'administre, déployés avec Docker et Coolify, sous mon domaine.",metrics:[["3","ports ouverts seulement : 22, 80, 443"],["HTTPS","sur chaque sous-domaine"],["1","n8n central pour toutes les agences"],["8 Go","de RAM, architecture pensée pour tenir dedans"]],built:["DNS en joker vers le VPS, certificats automatiques","Pare-feu, fail2ban, swap, mises à jour","Sauvegarde hebdomadaire du serveur"],stack:["Ubuntu","Docker","Coolify","PostgreSQL","DNS","HTTPS"],links:[]},{id:"encaisse",year:"2026",img:null,title:"Encaisse",sub:"Recouvrement de factures BTP — en cours",tags:["n8n","PostgreSQL","Gotenberg"],summary:"Automatisation du recouvrement de factures pour le BTP : relances, PDF, envois. Tout est journalisé, et aucune action juridique ne part sans validation humaine.",metrics:[["3/3","fichiers de tests SQL au vert"],["13","règles de conception écrites avant le code"],["PDF","générés automatiquement par Gotenberg"],["0","envoi réel tant que le mode test est actif"]],built:["PostgreSQL 16, Gotenberg 8, Mailpit en développement","Montants en centimes entiers, paramètres en base","Chaque envoi contrôlé, chaque action journalisée"],stack:["n8n","PostgreSQL","Gotenberg","Docker"],links:[]},{id:"motion",year:"2026",img:"media/dt-motion.webp",title:"Motion design",sub:"Pubs et films de marque animés en code",tags:["HyperFrames","GSAP","ElevenLabs","FFmpeg"],summary:"Des pubs et un film de marque animés en code : HTML et GSAP avec HyperFrames, voix off ElevenLabs, son mixé à −14 LUFS pour Instagram et TikTok.",metrics:[["3 min","film de marque pour DT Design"],["6","publicités verticales 9:16 (30 s et 15 s)"],["4","entreprises accompagnées"],["−14 LUFS","son prêt pour les réseaux"]],built:["Storyboard, voix off, détourage par IA, contrôle qualité","Tout est piloté avec Claude Code","Extraits dans la section Motion"],stack:["HyperFrames","GSAP","ElevenLabs","FFmpeg","Claude Code"],links:[["Voir les extraits","#motion"]]}],pipeline:{nodes:[["Gmail","relève toutes les 15 s"],["Préparer","contexte + corrections"],["Claude","1 appel · JSON imposé"],["Décision","confiance ≥ 85 %"],["Brouillon","à valider"],["Alerte","Telegram"],["Journal","Google Sheets"]],log:["09:41:07  nouvel e-mail — « Fuite d'eau au 3e étage, c'est urgent »","09:41:07  contexte : résidence Les Tilleuls · 3 corrections proches","09:41:09  Claude → catégorie : sinistre · urgence : haute · confiance 0,93","09:41:09  décision : urgence haute → alerte + brouillon","09:41:10  brouillon prêt — en attente de validation","09:41:10  Telegram → équipe gestion : « Je m'en occupe ? »","09:41:10  journal Google Sheets mis à jour"],human:{index:4,btn:"Valider l'envoi",done:"validé par vous ✓",log:"09:42:16  validé par une personne — vous → réponse envoyée"}},motion:[{id:"dt-motion",src:"media/dt-motion-16x9.mp4",poster:"media/dt-motion.webp",ratio:"16/9",title:"DT Design — film de marque",meta:"16:9 · extrait 22 s"},{id:"dt-film",src:"media/dt-film-9x16.mp4",poster:"media/dt-film.webp",ratio:"9/16",title:"DT Design — « Promesses tenues »",meta:"9:16 · 30 s"},{id:"rhonda",src:"media/rhonda-intro.mp4",poster:"media/rhonda.webp",ratio:"16/9",title:"Rhonda — intro du logo",meta:"16:9 · 15 s · ma marque"},{id:"rjp",src:"media/rjp-intro.mp4",poster:"media/rjp.webp",ratio:"16/9",title:"RJP — « Prêt à courir ? »",meta:"16:9 · 10 s"},{id:"dt-logo",src:"media/dt-logo-9x16.mp4",poster:"media/dt-logo.webp",ratio:"9/16",title:"DT Design — logo animé",meta:"9:16 · 8 s"}],caps:[["Automatisation",["n8n : workflows, webhooks, nœuds Code","Gestion des erreurs et relances","API REST, JSON, cron","Gmail, Telegram, Google Sheets"]],["IA générative",["Agents et systèmes multi-agents","API Claude (Anthropic)","Prompt engineering, sorties JSON","Contrôle qualité des réponses"]],["Données",["PostgreSQL, SQL, migrations","Supabase et sécurité RLS","Google Drive, Google Sheets","Gotenberg (génération de PDF)"]],["Infrastructure",["Docker, Docker Compose","Coolify sur VPS Ubuntu","DNS, HTTPS, pare-feu, nginx","Sauvegardes et surveillance"]],["Développement",["JavaScript / Node.js, TypeScript","React, HTML, CSS","Python, Git, GitHub Actions","Tests automatisés (Vitest)"]],["Motion design",["HyperFrames, GSAP","Voix off ElevenLabs","FFmpeg : montage et mixage","Storyboard et direction artistique"]]],path:[["2026 —","Bachelor informatique, 2e année","ESIIA, Torcy","En cours. 1re année de janvier à juillet 2026."],["2026 —","Fondateur, VorcheX","Projet entrepreneurial","Démonstrateurs d'automatisation IA pour les PME et l'infrastructure qui les héberge."],["2026 —","Équipier polyvalent","McDonald's Paris Louvre","Forte cadence, procédures strictes, travail en équipe — en parallèle des études."],["2025","Baccalauréat informatique","Lycée Bilingue de Tonga Rural, Cameroun",""],["2025","Équipier polyvalent","La Paillote, Douala","Septembre à décembre 2025."],["2024","Formation en développement web","INFOPRO, Douala","Formation en présentiel, de janvier à décembre 2024."]]},en:{meta:{title:"Johanne Pamegne — Automation & AI, motion design",description:"Portfolio of Johanne Rayane Nkeuchatchou Pamegne: AI agents, n8n workflows, self-hosted infrastructure and motion design in code. Open to a work-study position (alternance) in France."},ui:{"nav.work":"Work","nav.pipeline":"Pipeline","nav.motion":"Motion","nav.path":"Path","nav.contact":"Contact","nav.menu":"Menu","nav.close":"Close",status:"Available — work-study or alternating internship","hero.fullname":"Johanne Rayane Nkeuchatchou Pamegne","hero.kicker":'<span class="u-accent">Automation &amp; AI</span> apprentice<br>Motion design written in code',"hero.lede":"I design systems that work on their own — AI agents, n8n workflows, servers — and I give them motion.","hero.scroll":"Scroll","hero.loc":"Saint-Denis · Paris region","manifesto.label":"(01) Manifesto","manifesto.text":"I build systems that take repetitive work off people’s plates. Agents that read, sort and draft. Workflows that run through the night. One rule: a person approves every action that matters.","manifesto.method":"Method: I steer AI (Claude Code) to write the code, then I test, measure costs and document.","work.label":"(02) Selected work","work.title":"Systems <em>that run,</em> not mockups.","work.hint":"Click to open the project","pipeline.label":"(03) Live pipeline","pipeline.title":"An email comes in. <em>You approve.</em>","pipeline.intro":"Scroll: the message moves step by step, like in n8n. One single Claude call, an enforced JSON output, and nothing is sent without a person’s click. Here, that person is you.","pipeline.note":"Fictional example from one of my projects — no email is actually sent.","motion.label":"(05) Motion design","motion.title":"Motion <em>written in code.</em>","motion.intro":"Animated in HTML and GSAP with HyperFrames, ElevenLabs voice-over, editing and sound with FFmpeg — all steered with Claude Code. The DT Design film is shown with the brand’s consent.","motion.play":"Play with sound","mdm.title":"Brave New World","mdm.text":"An editorial presentation in 4 vertical pages: HTML and CSS layout, SVG diagrams generated in JavaScript, automatic PDF export. Made with Tissio Fumtul Donald.","cap.label":"(06) Capabilities","cap.title":"An <em>end-to-end</em> toolkit.","path.label":"(07) Path","path.title":"Learn fast, <em>ship for real.</em>","contact.label":"(08) Contact","contact.title":"Let’s talk <em>work-study.</em>","contact.text":"I’m looking for a work-study position (alternance) or an alternating internship in automation and AI, in the Paris region or remote. Flexible school/company rhythm, available now.","contact.mail":"Send an email","contact.cv":"Download my CV","contact.copy":"Copy address","contact.copied":"Address copied","footer.credit":"Designed and built by Johanne.","footer.top":"Back to top","footer.time":"Local time","case.close":"Close","case.results":"Measured results","case.built":"What I built","case.stack":"Tools","case.next":"Next project","loader.1":"starting n8n","loader.2":"connecting to Claude","loader.3":"loading workflows","loader.4":"human approval: ok","lang.switch":"Passer en français",skip:"Skip to content"},stats:[{n:5,suffix:"",label:"n8n systems built in 2026"},{n:32,suffix:"",label:"workflows in the dubbing agency"},{n:102,suffix:"",label:"automated tests on a single project"},{n:13,suffix:"/13",label:"applications reviewed correctly by JobHunter"}],projects:[{id:"doublage",year:"2026",img:"media/doublage.webp",title:"AI video dubbing agency",sub:"Multi-agent · cloned voice",tags:["n8n","Claude API","ElevenLabs","Telegram"],summary:"Send a video on Telegram and it comes back dubbed in another language, in the original voice. A director agent coordinates a team of agents: translation, voice, quality control.",metrics:[["4 min 40","to dub a real 2 min 10 video"],["8/10","quality score, voice never sped up"],["32","n8n workflows defined in JavaScript"],["102","automated tests"]],built:["Telegram bot answering in 3.5 to 5.6 seconds","Voice cloned with ElevenLabs, videos filed in Google Drive","Mocked services to test everything at no cost","Built in 3 days by steering Claude Code"],stack:["n8n","Claude API","ElevenLabs","Telegram","Google Drive","Docker","Node.js"],links:[]},{id:"jobhunter",year:"2026",img:"media/jobhunter.webp",title:"JobHunter",sub:"Multi-agent work-study job search",tags:["n8n","Supabase","Claude API","React"],summary:"Agents find job offers, score them, look up the right contact and draft each application. A reviewer agent checks everything: the database refuses any email without a passed review.",metrics:[["74 → 34","offers received then shortlisted, real-world test"],["13/13","applications reviewed correctly"],["$0.07","measured cost per application"],["3,000","simulation steps without crossing a human-only step"]],built:["13 workflows generated from code and deployed by script","Supabase database: 21 tables secured with RLS","React 19 + TypeScript control room, tested with Vitest","Cost of every AI call recorded"],stack:["n8n","Supabase","Claude API","Telegram","React 19","TypeScript","Zustand","Vitest"],links:[["Open the control room",Sf]]},{id:"aiguilleur",year:"2026",img:"media/aiguilleur.webp",title:"Aiguilleur IA",sub:"Automatic customer email triage",tags:["n8n","Claude API","Gmail","Google Sheets"],summary:"It checks a company’s contact@ inbox every 15 seconds. One single Claude call categorises the email, rates urgency, summarises, drafts a reply and hands it to the right teammate.",metrics:[["32/32","test emails routed correctly"],["1.5 ¢","per analysed email"],["15 s","between two inbox checks"],["85 %","minimum confidence, otherwise a person decides"]],built:["Checks the inbox every 15 s, PDF and photo attachments included","A clear brief for the right teammate: summary, action, suggested reply","Automatic replies saved as drafts to approve by default","Adaptable per trade: property management, retail"],stack:["n8n","Claude API","Gmail","Google Sheets","Telegram","Docker"],links:[["See under the hood","#sous-le-capot"],["See the presentation",Mf]]},{id:"vorchex",year:"2026",img:null,title:"VorcheX infrastructure",sub:"Self-hosted automation server",tags:["Ubuntu VPS","Docker","Coolify","PostgreSQL"],summary:"My own automation server: a central n8n and its PostgreSQL database on a VPS I administer, deployed with Docker and Coolify, under my own domain.",metrics:[["3","open ports only: 22, 80, 443"],["HTTPS","on every subdomain"],["1","central n8n for every agency"],["8 GB","of RAM, architecture designed to fit"]],built:["Wildcard DNS to the VPS, automatic certificates","Firewall, fail2ban, swap, updates","Weekly server backup"],stack:["Ubuntu","Docker","Coolify","PostgreSQL","DNS","HTTPS"],links:[]},{id:"encaisse",year:"2026",img:null,title:"Encaisse",sub:"Construction invoice collection — in progress",tags:["n8n","PostgreSQL","Gotenberg"],summary:"Automated invoice collection for construction companies: reminders, PDFs, sending. Everything is logged, and no legal action goes out without human approval.",metrics:[["3/3","SQL test files passing"],["13","design rules written before the code"],["PDF","generated automatically by Gotenberg"],["0","real sends while test mode is on"]],built:["PostgreSQL 16, Gotenberg 8, Mailpit for development","Amounts stored as integer cents, settings in the database","Every send checked, every action logged"],stack:["n8n","PostgreSQL","Gotenberg","Docker"],links:[]},{id:"motion",year:"2026",img:"media/dt-motion.webp",title:"Motion design",sub:"Ads and brand films animated in code",tags:["HyperFrames","GSAP","ElevenLabs","FFmpeg"],summary:"Ads and a brand film animated in code: HTML and GSAP with HyperFrames, ElevenLabs voice-over, sound mixed at −14 LUFS for Instagram and TikTok.",metrics:[["3 min","brand film for DT Design"],["6","vertical 9:16 ads (30 s and 15 s)"],["4","companies"],["−14 LUFS","sound ready for social media"]],built:["Storyboard, voice-over, AI cut-outs, quality control","All steered with Claude Code","Excerpts in the Motion section"],stack:["HyperFrames","GSAP","ElevenLabs","FFmpeg","Claude Code"],links:[["See the excerpts","#motion"]]}],pipeline:{nodes:[["Gmail","checked every 15 s"],["Prepare","context + corrections"],["Claude","1 call · enforced JSON"],["Decision","confidence ≥ 85 %"],["Draft","awaiting approval"],["Alert","Telegram"],["Log","Google Sheets"]],log:["09:41:07  new email — “Water leak on the 3rd floor, it’s urgent”","09:41:07  context: Les Tilleuls residence · 3 similar corrections","09:41:09  Claude → category: damage · urgency: high · confidence 0.93","09:41:09  decision: high urgency → alert + draft","09:41:10  draft ready — awaiting approval","09:41:10  Telegram → property team: “Shall I take it?”","09:41:10  Google Sheets log updated"],human:{index:4,btn:"Approve & send",done:"approved by you ✓",log:"09:42:16  approved by a person — you → reply sent"}},motion:[{id:"dt-motion",src:"media/dt-motion-16x9.mp4",poster:"media/dt-motion.webp",ratio:"16/9",title:"DT Design — brand film",meta:"16:9 · 22 s excerpt"},{id:"dt-film",src:"media/dt-film-9x16.mp4",poster:"media/dt-film.webp",ratio:"9/16",title:"DT Design — “Promises kept”",meta:"9:16 · 30 s"},{id:"rhonda",src:"media/rhonda-intro.mp4",poster:"media/rhonda.webp",ratio:"16/9",title:"Rhonda — logo intro",meta:"16:9 · 15 s · my brand"},{id:"rjp",src:"media/rjp-intro.mp4",poster:"media/rjp.webp",ratio:"16/9",title:"RJP — “Ready to race?”",meta:"16:9 · 10 s"},{id:"dt-logo",src:"media/dt-logo-9x16.mp4",poster:"media/dt-logo.webp",ratio:"9/16",title:"DT Design — animated logo",meta:"9:16 · 8 s"}],caps:[["Automation",["n8n: workflows, webhooks, Code nodes","Error handling and retries","REST APIs, JSON, cron","Gmail, Telegram, Google Sheets"]],["Generative AI",["Agents and multi-agent systems","Claude API (Anthropic)","Prompt engineering, JSON outputs","Output quality control"]],["Data",["PostgreSQL, SQL, migrations","Supabase and RLS security","Google Drive, Google Sheets","Gotenberg (PDF generation)"]],["Infrastructure",["Docker, Docker Compose","Coolify on an Ubuntu VPS","DNS, HTTPS, firewall, nginx","Backups and monitoring"]],["Development",["JavaScript / Node.js, TypeScript","React, HTML, CSS","Python, Git, GitHub Actions","Automated tests (Vitest)"]],["Motion design",["HyperFrames, GSAP","ElevenLabs voice-over","FFmpeg: editing and mixing","Storyboard and art direction"]]],path:[["2026 —","Bachelor in computer science, year 2","ESIIA, Torcy","Ongoing. Year 1 from January to July 2026."],["2026 —","Founder, VorcheX","Entrepreneurial project","AI automation demos for small businesses and the infrastructure that hosts them."],["2026 —","Crew member","McDonald's Paris Louvre","High pace, strict procedures, teamwork — alongside my studies."],["2025","Baccalauréat, computer science","Lycée Bilingue de Tonga Rural, Cameroon",""],["2025","Crew member","La Paillote, Douala","September to December 2025."],["2024","Web development training","INFOPRO, Douala","In-person training, January to December 2024."]]}},Tf={email:"johannepamegne@gmail.com",phone:"07 49 16 37 92",phoneIntl:"+33749163792",github:"https://github.com/Johnnyrayane237",cv:"media/CV_Johanne-Rayane_NKEUCHATCHOU-PAMEGNE.pdf"};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _d="176",K0=0,Ef=1,Q0=2,pg=1,ev=2,tr=3,Gr=0,$n=1,Hi=2,Nr=0,oo=1,ri=2,wf=3,Af=4,tv=5,rs=100,nv=101,iv=102,rv=103,sv=104,ov=200,av=201,lv=202,cv=203,ju=204,Ju=205,uv=206,hv=207,dv=208,fv=209,pv=210,mv=211,gv=212,_v=213,vv=214,Zu=0,Ku=1,Qu=2,yo=3,eh=4,th=5,nh=6,ih=7,mg=0,xv=1,yv=2,Fr=0,Sv=1,Mv=2,bv=3,Tv=4,Ev=5,wv=6,Av=7,gg=300,So=301,Mo=302,rh=303,sh=304,mc=306,oh=1e3,ls=1001,ah=1002,Fi=1003,Cv=1004,qa=1005,Xi=1006,Bc=1007,cs=1008,$i=1009,_g=1010,vg=1011,Ma=1012,vd=1013,Ms=1014,lr=1015,Ra=1016,xd=1017,yd=1018,ba=1020,xg=35902,yg=1021,Sg=1022,Ni=1023,Ta=1026,Ea=1027,Mg=1028,Sd=1029,bg=1030,Md=1031,bd=1033,Ll=33776,Dl=33777,Il=33778,Ul=33779,lh=35840,ch=35841,uh=35842,hh=35843,dh=36196,fh=37492,ph=37496,mh=37808,gh=37809,_h=37810,vh=37811,xh=37812,yh=37813,Sh=37814,Mh=37815,bh=37816,Th=37817,Eh=37818,wh=37819,Ah=37820,Ch=37821,Nl=36492,Rh=36494,Ph=36495,Tg=36283,Lh=36284,Dh=36285,Ih=36286,Rv=3200,Pv=3201,Eg=0,Lv=1,wr="",yi="srgb",bo="srgb-linear",Zl="linear",wt="srgb",Rs=7680,Cf=519,Dv=512,Iv=513,Uv=514,wg=515,Nv=516,Fv=517,Ov=518,Bv=519,Uh=35044,Rf="300 es",cr=2e3,Kl=2001;class wo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zc=Math.PI/180,Nh=180/Math.PI;function Or(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function ft(r,e,t){return Math.max(e,Math.min(t,r))}function zv(r,e){return(r%e+e)%e}function kc(r,e,t){return(1-t)*r+t*e}function Gi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function At(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,n,i,s,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],y=i[4],v=i[7],E=i[2],w=i[5],b=i[8];return s[0]=o*_+a*S+l*E,s[3]=o*m+a*y+l*w,s[6]=o*p+a*v+l*b,s[1]=c*_+u*S+f*E,s[4]=c*m+u*y+f*w,s[7]=c*p+u*v+f*b,s[2]=h*_+d*S+g*E,s[5]=h*m+d*y+g*w,s[8]=h*p+d*v+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Hc.makeScale(e,t)),this}rotate(e){return this.premultiply(Hc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hc=new rt;function Ag(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ql(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function kv(){const r=Ql("canvas");return r.style.display="block",r}const Pf={};function Fl(r){r in Pf||(Pf[r]=!0,console.warn(r))}function Hv(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Gv(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Vv(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Lf=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Df=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wv(){const r={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===wt&&(i.r=dr(i.r),i.g=dr(i.g),i.b=dr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(i.r=ao(i.r),i.g=ao(i.g),i.b=ao(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===wr?Zl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[bo]:{primaries:e,whitePoint:n,transfer:Zl,toXYZ:Lf,fromXYZ:Df,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:Lf,fromXYZ:Df,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),r}const Mt=Wv();function dr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ao(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ps;class Xv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ps===void 0&&(Ps=Ql("canvas")),Ps.width=e.width,Ps.height=e.height;const i=Ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ql("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=dr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(dr(t[n]/255)*255):t[n]=dr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qv=0;class Td{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=Or(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Gc(i[o].image)):s.push(Gc(i[o]))}else s=Gc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Gc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yv=0;class zn extends wo{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,n=ls,i=ls,s=Xi,o=cs,a=Ni,l=$i,c=zn.DEFAULT_ANISOTROPY,u=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=Or(),this.name="",this.source=new Td(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oh:e.x=e.x-Math.floor(e.x);break;case ls:e.x=e.x<0?0:1;break;case ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oh:e.y=e.y-Math.floor(e.y);break;case ls:e.y=e.y<0?0:1;break;case ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=gg;zn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,n=0,i=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(d+1)/2,E=(p+1)/2,w=(u+h)/4,b=(f+_)/4,C=(g+m)/4;return y>v&&y>E?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=b/n):v>E?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=C/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=b/s,i=C/s),this.set(n,i,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-_)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $v extends wo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const i={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const s=new zn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Td(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends $v{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Cg extends zn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Fi,this.minFilter=Fi,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jv extends zn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Fi,this.minFilter=Fi,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pa{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const E=Math.sqrt(y),w=Math.atan2(E,p*S);m=Math.sin(m*w)/E,a=Math.sin(a*w)/E}const v=a*S;if(l=l*m+h*v,c=c*m+d*v,u=u*m+g*v,f=f*m+_*v,m===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(If.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(If.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vc=new N,If=new Pa;class La{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pi):Pi.fromBufferAttribute(s,o),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ya.copy(n.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),$a.subVectors(this.max,Do),Ls.subVectors(e.a,Do),Ds.subVectors(e.b,Do),Is.subVectors(e.c,Do),_r.subVectors(Ds,Ls),vr.subVectors(Is,Ds),$r.subVectors(Ls,Is);let t=[0,-_r.z,_r.y,0,-vr.z,vr.y,0,-$r.z,$r.y,_r.z,0,-_r.x,vr.z,0,-vr.x,$r.z,0,-$r.x,-_r.y,_r.x,0,-vr.y,vr.x,0,-$r.y,$r.x,0];return!Wc(t,Ls,Ds,Is,$a)||(t=[1,0,0,0,1,0,0,0,1],!Wc(t,Ls,Ds,Is,$a))?!1:(ja.crossVectors(_r,vr),t=[ja.x,ja.y,ja.z],Wc(t,Ls,Ds,Is,$a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ji=[new N,new N,new N,new N,new N,new N,new N,new N],Pi=new N,Ya=new La,Ls=new N,Ds=new N,Is=new N,_r=new N,vr=new N,$r=new N,Do=new N,$a=new N,ja=new N,jr=new N;function Wc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){jr.fromArray(r,s);const a=i.x*Math.abs(jr.x)+i.y*Math.abs(jr.y)+i.z*Math.abs(jr.z),l=e.dot(jr),c=t.dot(jr),u=n.dot(jr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Jv=new La,Io=new N,Xc=new N;class Da{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Jv.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const t=Io.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Io,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Xc)),this.expandByPoint(Io.copy(e.center).sub(Xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new N,qc=new N,Ja=new N,xr=new N,Yc=new N,Za=new N,$c=new N;class gc{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){qc.copy(e).add(t).multiplyScalar(.5),Ja.copy(t).sub(e).normalize(),xr.copy(this.origin).sub(qc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ja),a=xr.dot(this.direction),l=-xr.dot(Ja),c=xr.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(qc).addScaledVector(Ja,h),d}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const n=Zi.dot(this.direction),i=Zi.dot(Zi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,n,i,s){Yc.subVectors(t,e),Za.subVectors(n,e),$c.crossVectors(Yc,Za);let o=this.direction.dot($c),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xr.subVectors(this.origin,e);const l=a*this.direction.dot(Za.crossVectors(xr,Za));if(l<0)return null;const c=a*this.direction.dot(Yc.cross(xr));if(c<0||l+c>o)return null;const u=-a*xr.dot($c);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,m){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,m)}set(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),o=1/Us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zv,e,Kv)}lookAt(e,t,n){const i=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),yr.crossVectors(n,ei),yr.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),yr.crossVectors(n,ei)),yr.normalize(),Ka.crossVectors(ei,yr),i[0]=yr.x,i[4]=Ka.x,i[8]=ei.x,i[1]=yr.y,i[5]=Ka.y,i[9]=ei.y,i[2]=yr.z,i[6]=Ka.z,i[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],y=n[7],v=n[11],E=n[15],w=i[0],b=i[4],C=i[8],M=i[12],x=i[1],L=i[5],I=i[9],D=i[13],B=i[2],X=i[6],W=i[10],q=i[14],H=i[3],ne=i[7],U=i[11],ce=i[15];return s[0]=o*w+a*x+l*B+c*H,s[4]=o*b+a*L+l*X+c*ne,s[8]=o*C+a*I+l*W+c*U,s[12]=o*M+a*D+l*q+c*ce,s[1]=u*w+f*x+h*B+d*H,s[5]=u*b+f*L+h*X+d*ne,s[9]=u*C+f*I+h*W+d*U,s[13]=u*M+f*D+h*q+d*ce,s[2]=g*w+_*x+m*B+p*H,s[6]=g*b+_*L+m*X+p*ne,s[10]=g*C+_*I+m*W+p*U,s[14]=g*M+_*D+m*q+p*ce,s[3]=S*w+y*x+v*B+E*H,s[7]=S*b+y*L+v*X+E*ne,s[11]=S*C+y*I+v*W+E*U,s[15]=S*M+y*D+v*q+E*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*d-n*l*d)+_*(+t*l*d-t*c*h+s*o*h-i*o*d+i*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-t*l*f+t*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,y=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,v=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,E=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,w=t*S+n*y+i*v+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=S*b,e[1]=(_*h*s-f*m*s-_*i*d+n*m*d+f*i*p-n*h*p)*b,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*b,e[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*d-n*l*d)*b,e[4]=y*b,e[5]=(u*m*s-g*h*s+g*i*d-t*m*d-u*i*p+t*h*p)*b,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*b,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*d+t*l*d)*b,e[8]=v*b,e[9]=(g*f*s-u*_*s-g*n*d+t*_*d+u*n*p-t*f*p)*b,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*b,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*b,e[12]=E*b,e[13]=(u*_*i-g*f*i+g*n*h-t*_*h-u*n*m+t*f*m)*b,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*b,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*h+t*a*h)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,S=l*c,y=l*u,v=l*f,E=n.x,w=n.y,b=n.z;return i[0]=(1-(_+p))*E,i[1]=(d+v)*E,i[2]=(g-y)*E,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(h+p))*w,i[6]=(m+S)*w,i[7]=0,i[8]=(g+y)*b,i[9]=(m-S)*b,i[10]=(1-(h+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Us.set(i[0],i[1],i[2]).length();const o=Us.set(i[4],i[5],i[6]).length(),a=Us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Li.copy(this);const c=1/s,u=1/o,f=1/a;return Li.elements[0]*=c,Li.elements[1]*=c,Li.elements[2]*=c,Li.elements[4]*=u,Li.elements[5]*=u,Li.elements[6]*=u,Li.elements[8]*=f,Li.elements[9]*=f,Li.elements[10]*=f,t.setFromRotationMatrix(Li),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=cr){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let d,g;if(a===cr)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Kl)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=cr){const l=this.elements,c=1/(t-e),u=1/(n-i),f=1/(o-s),h=(t+e)*c,d=(n+i)*u;let g,_;if(a===cr)g=(o+s)*f,_=-2*f;else if(a===Kl)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Us=new N,Li=new Rt,Zv=new N(0,0,0),Kv=new N(1,1,1),yr=new N,Ka=new N,ei=new N,Uf=new Rt,Nf=new Pa;class ji{constructor(e=0,t=0,n=0,i=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nf.setFromEuler(this),this.setFromQuaternion(Nf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class Ed{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qv=0;const Ff=new N,Ns=new Pa,Ki=new Rt,Qa=new N,Uo=new N,ex=new N,tx=new Pa,Of=new N(1,0,0),Bf=new N(0,1,0),zf=new N(0,0,1),kf={type:"added"},nx={type:"removed"},Fs={type:"childadded",child:null},jc={type:"childremoved",child:null};class on extends wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new N,t=new ji,n=new Pa,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Rt},normalMatrix:{value:new rt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ed,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Of,e)}rotateY(e){return this.rotateOnAxis(Bf,e)}rotateZ(e){return this.rotateOnAxis(zf,e)}translateOnAxis(e,t){return Ff.copy(e).applyQuaternion(this.quaternion),this.position.add(Ff.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Of,e)}translateY(e){return this.translateOnAxis(Bf,e)}translateZ(e){return this.translateOnAxis(zf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qa.copy(e):Qa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Uo,Qa,this.up):Ki.lookAt(Qa,Uo,this.up),this.quaternion.setFromRotationMatrix(Ki),i&&(Ki.extractRotation(i.matrixWorld),Ns.setFromRotationMatrix(Ki),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kf),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nx),jc.child=e,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kf),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,ex),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,tx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}on.DEFAULT_UP=new N(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new N,Qi=new N,Jc=new N,er=new N,Os=new N,Bs=new N,Hf=new N,Zc=new N,Kc=new N,Qc=new N,eu=new Ct,tu=new Ct,nu=new Ct;class Ti{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Di.subVectors(e,t),i.cross(Di);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Di.subVectors(i,t),Qi.subVectors(n,t),Jc.subVectors(e,t);const o=Di.dot(Di),a=Di.dot(Qi),l=Di.dot(Jc),c=Qi.dot(Qi),u=Qi.dot(Jc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,er)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,er.x),l.addScaledVector(o,er.y),l.addScaledVector(a,er.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return eu.setScalar(0),tu.setScalar(0),nu.setScalar(0),eu.fromBufferAttribute(e,t),tu.fromBufferAttribute(e,n),nu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(eu,s.x),o.addScaledVector(tu,s.y),o.addScaledVector(nu,s.z),o}static isFrontFacing(e,t,n,i){return Di.subVectors(n,t),Qi.subVectors(e,t),Di.cross(Qi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Di.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ti.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Os.subVectors(i,n),Bs.subVectors(s,n),Zc.subVectors(e,n);const l=Os.dot(Zc),c=Bs.dot(Zc);if(l<=0&&c<=0)return t.copy(n);Kc.subVectors(e,i);const u=Os.dot(Kc),f=Bs.dot(Kc);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Os,o);Qc.subVectors(e,s);const d=Os.dot(Qc),g=Bs.dot(Qc);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Bs,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Hf.subVectors(s,i),a=(f-u)/(f-u+(d-g)),t.copy(i).addScaledVector(Hf,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(n).addScaledVector(Os,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},el={h:0,s:0,l:0};function iu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Mt.workingColorSpace){if(e=zv(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=iu(o,s,e+1/3),this.g=iu(o,s,e),this.b=iu(o,s,e-1/3)}return Mt.toWorkingColorSpace(this,i),this}setStyle(e,t=yi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yi){const n=Rg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return Mt.fromWorkingColorSpace(_n.copy(this),e),Math.round(ft(_n.r*255,0,255))*65536+Math.round(ft(_n.g*255,0,255))*256+Math.round(ft(_n.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(_n.copy(this),t);const n=_n.r,i=_n.g,s=_n.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=yi){Mt.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,n=_n.g,i=_n.b;return e!==yi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(el);const n=kc(Sr.h,el.h,t),i=kc(Sr.s,el.s,t),s=kc(Sr.l,el.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new et;et.NAMES=Rg;let ix=0;class Wr extends wo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Or(),this.name="",this.type="Material",this.blending=oo,this.side=Gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ju,this.blendDst=Ju,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(n.blending=this.blending),this.side!==Gr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ju&&(n.blendSrc=this.blendSrc),this.blendDst!==Ju&&(n.blendDst=this.blendDst),this.blendEquation!==rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class or extends Wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=mg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new N,tl=new Ne;let rx=0;class sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uh,this.updateRanges=[],this.gpuType=lr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tl.fromBufferAttribute(this,t),tl.applyMatrix3(e),this.setXY(t,tl.x,tl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uh&&(e.usage=this.usage),e}}class Pg extends sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lg extends sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zt extends sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let sx=0;const _i=new Rt,ru=new on,zs=new N,ti=new La,No=new La,cn=new N;class Qt extends wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ag(e)?Lg:Pg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,n){return _i.makeTranslation(e,t,n),this.applyMatrix4(_i),this}scale(e,t,n){return _i.makeScale(e,t,n),this.applyMatrix4(_i),this}lookAt(e){return ru.lookAt(e),ru.updateMatrix(),this.applyMatrix4(ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new La);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ti.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];No.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(ti.min,No.min),ti.expandByPoint(cn),cn.addVectors(ti.max,No.max),ti.expandByPoint(cn)):(ti.expandByPoint(No.min),ti.expandByPoint(No.max))}ti.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)cn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(cn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)cn.fromBufferAttribute(a,c),l&&(zs.fromBufferAttribute(e,c),cn.add(zs)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new N,l[C]=new N;const c=new N,u=new N,f=new N,h=new Ne,d=new Ne,g=new Ne,_=new N,m=new N;function p(C,M,x){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,x),h.fromBufferAttribute(s,C),d.fromBufferAttribute(s,M),g.fromBufferAttribute(s,x),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),a[C].add(_),a[M].add(_),a[x].add(_),l[C].add(m),l[M].add(m),l[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,M=S.length;C<M;++C){const x=S[C],L=x.start,I=x.count;for(let D=L,B=L+I;D<B;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const y=new N,v=new N,E=new N,w=new N;function b(C){E.fromBufferAttribute(i,C),w.copy(E);const M=a[C];y.copy(M),y.sub(E.multiplyScalar(E.dot(M))).normalize(),v.crossVectors(w,M);const L=v.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,L)}for(let C=0,M=S.length;C<M;++C){const x=S[C],L=x.start,I=x.count;for(let D=L,B=L+I;D<B;D+=3)b(e.getX(D+0)),b(e.getX(D+1)),b(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,f=new N;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new sn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gf=new Rt,Jr=new gc,nl=new Da,Vf=new N,il=new N,rl=new N,sl=new N,su=new N,ol=new N,Wf=new N,al=new N;class Wt extends on{constructor(e=new Qt,t=new or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){ol.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(su.fromBufferAttribute(f,e),o?ol.addScaledVector(su,u):ol.addScaledVector(su.sub(t),u))}t.add(ol)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nl.copy(n.boundingSphere),nl.applyMatrix4(s),Jr.copy(e.ray).recast(e.near),!(nl.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(nl,Vf)===null||Jr.origin.distanceToSquared(Vf)>(e.far-e.near)**2))&&(Gf.copy(s).invert(),Jr.copy(e.ray).applyMatrix4(Gf),!(n.boundingBox!==null&&Jr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,E=y;v<E;v+=3){const w=a.getX(v),b=a.getX(v+1),C=a.getX(v+2);i=ll(this,p,e,n,c,u,f,w,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);i=ll(this,o,e,n,c,u,f,S,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,E=y;v<E;v+=3){const w=v,b=v+1,C=v+2;i=ll(this,p,e,n,c,u,f,w,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,y=m+1,v=m+2;i=ll(this,o,e,n,c,u,f,S,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function ox(r,e,t,n,i,s,o,a){let l;if(e.side===$n?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Gr,a),l===null)return null;al.copy(a),al.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(al);return c<t.near||c>t.far?null:{distance:c,point:al.clone(),object:r}}function ll(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,il),r.getVertexPosition(l,rl),r.getVertexPosition(c,sl);const u=ox(r,e,t,n,il,rl,sl,Wf);if(u){const f=new N;Ti.getBarycoord(Wf,il,rl,sl,f),i&&(u.uv=Ti.getInterpolatedAttribute(i,a,l,c,f,new Ne)),s&&(u.uv1=Ti.getInterpolatedAttribute(s,a,l,c,f,new Ne)),o&&(u.normal=Ti.getInterpolatedAttribute(o,a,l,c,f,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new N,materialIndex:0};Ti.getNormal(il,rl,sl,h.normal),u.face=h,u.barycoord=f}return u}class bi extends Qt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(f,2));function g(_,m,p,S,y,v,E,w,b,C,M){const x=v/b,L=E/C,I=v/2,D=E/2,B=w/2,X=b+1,W=C+1;let q=0,H=0;const ne=new N;for(let U=0;U<W;U++){const ce=U*L-D;for(let xe=0;xe<X;xe++){const Fe=xe*x-I;ne[_]=Fe*S,ne[m]=ce*y,ne[p]=B,c.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[p]=w>0?1:-1,u.push(ne.x,ne.y,ne.z),f.push(xe/b),f.push(1-U/C),q+=1}}for(let U=0;U<C;U++)for(let ce=0;ce<b;ce++){const xe=h+ce+X*U,Fe=h+ce+X*(U+1),Z=h+(ce+1)+X*(U+1),j=h+(ce+1)+X*U;l.push(xe,Fe,j),l.push(Fe,Z,j),H+=6}a.addGroup(d,H,M),d+=H,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function To(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Dn(r){const e={};for(let t=0;t<r.length;t++){const n=To(r[t]);for(const i in n)e[i]=n[i]}return e}function ax(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Dg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const lx={clone:To,merge:Dn};var cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ux=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends Wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cx,this.fragmentShader=ux,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=ax(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ig extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=cr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new N,Xf=new Ne,qf=new Ne;class Gn extends Ig{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nh*2*Math.atan(Math.tan(zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,Xf,qf),t.subVectors(qf,Xf)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ks=-90,Hs=1;class hx extends on{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gn(ks,Hs,e,t);i.layers=this.layers,this.add(i);const s=new Gn(ks,Hs,e,t);s.layers=this.layers,this.add(s);const o=new Gn(ks,Hs,e,t);o.layers=this.layers,this.add(o);const a=new Gn(ks,Hs,e,t);a.layers=this.layers,this.add(a);const l=new Gn(ks,Hs,e,t);l.layers=this.layers,this.add(l);const c=new Gn(ks,Hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===cr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ug extends zn{constructor(e=[],t=So,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dx extends bs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ug(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new bi(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:To(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$n,blending:Nr});s.uniforms.tEquirect.value=t;const o=new Wt(i,s),a=t.minFilter;return t.minFilter===cs&&(t.minFilter=Xi),new hx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class us extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fx={type:"move"};class ou{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new us;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ng extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class px{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uh,this.updateRanges=[],this.version=0,this.uuid=Or()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Or()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Or()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new N;class ec{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ec(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Fh extends Wr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Gs;const Fo=new N,Vs=new N,Ws=new N,Xs=new Ne,Oo=new Ne,Fg=new Rt,cl=new N,Bo=new N,ul=new N,Yf=new Ne,au=new Ne,$f=new Ne;class jf extends on{constructor(e=new Fh){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new Qt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new px(t,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new ec(n,3,0,!1)),Gs.setAttribute("uv",new ec(n,2,3,!1))}this.geometry=Gs,this.material=e,this.center=new Ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),Fg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ws.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-Ws.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;hl(cl.set(-.5,-.5,0),Ws,o,Vs,i,s),hl(Bo.set(.5,-.5,0),Ws,o,Vs,i,s),hl(ul.set(.5,.5,0),Ws,o,Vs,i,s),Yf.set(0,0),au.set(1,0),$f.set(1,1);let a=e.ray.intersectTriangle(cl,Bo,ul,!1,Fo);if(a===null&&(hl(Bo.set(-.5,.5,0),Ws,o,Vs,i,s),au.set(0,1),a=e.ray.intersectTriangle(cl,ul,Bo,!1,Fo),a===null))return;const l=e.ray.origin.distanceTo(Fo);l<e.near||l>e.far||t.push({distance:l,point:Fo.clone(),uv:Ti.getInterpolation(Fo,cl,Bo,ul,Yf,au,$f,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function hl(r,e,t,n,i,s){Xs.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Oo.x=s*Xs.x-i*Xs.y,Oo.y=i*Xs.x+s*Xs.y):Oo.copy(Xs),r.copy(e),r.x+=Oo.x,r.y+=Oo.y,r.applyMatrix4(Fg)}const lu=new N,mx=new N,gx=new rt;class Tr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=lu.subVectors(n,t).cross(mx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(lu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gx.getNormalMatrix(e),i=this.coplanarPoint(lu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new Da,dl=new N;class wd{constructor(e=new Tr,t=new Tr,n=new Tr,i=new Tr,s=new Tr,o=new Tr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cr){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],S=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-s,h-c,m-d,v-p).normalize(),n[1].setComponents(l+s,h+c,m+d,v+p).normalize(),n[2].setComponents(l+o,h+u,m+g,v+S).normalize(),n[3].setComponents(l-o,h-u,m-g,v-S).normalize(),n[4].setComponents(l-a,h-f,m-_,v-y).normalize(),t===cr)n[5].setComponents(l+a,h+f,m+_,v+y).normalize();else if(t===Kl)n[5].setComponents(a,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){return Zr.center.set(0,0,0),Zr.radius=.7071067811865476,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(dl.x=i.normal.x>0?e.max.x:e.min.x,dl.y=i.normal.y>0?e.max.y:e.min.y,dl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Og extends Wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const tc=new N,nc=new N,Jf=new Rt,zo=new gc,fl=new Da,cu=new N,Zf=new N;class _x extends on{constructor(e=new Qt,t=new Og){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)tc.fromBufferAttribute(t,i-1),nc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=tc.distanceTo(nc);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(i),fl.radius+=s,e.ray.intersectsSphere(fl)===!1)return;Jf.copy(i).invert(),zo.copy(e.ray).applyMatrix4(Jf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),S=u.getX(_+1),y=pl(this,e,zo,l,p,S,_);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=pl(this,e,zo,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=pl(this,e,zo,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=pl(this,e,zo,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function pl(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(tc.fromBufferAttribute(a,i),nc.fromBufferAttribute(a,s),t.distanceSqToSegment(tc,nc,cu,Zf)>n)return;cu.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(cu);if(!(c<e.near||c>e.far))return{distance:c,point:Zf.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Kf=new N,Qf=new N;class vx extends _x{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Kf.fromBufferAttribute(t,i),Qf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Kf.distanceTo(Qf);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Oh extends Wr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ep=new Rt,Bh=new gc,ml=new Da,gl=new N;class ic extends on{constructor(e=new Qt,t=new Oh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ml.copy(n.boundingSphere),ml.applyMatrix4(i),ml.radius+=s,e.ray.intersectsSphere(ml)===!1)return;ep.copy(i).invert(),Bh.copy(e.ray).applyMatrix4(ep);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);gl.fromBufferAttribute(f,m),tp(gl,m,l,i,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)gl.fromBufferAttribute(f,g),tp(gl,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function tp(r,e,t,n,i,s,o){const a=Bh.distanceSqToPoint(r);if(a<t){const l=new N;Bh.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Bg extends zn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zg extends zn{constructor(e,t,n=Ms,i,s,o,a=Fi,l=Fi,c,u=Ta){if(u!==Ta&&u!==Ea)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Td(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _c extends Qt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new zt(s,3)),this.setAttribute("normal",new zt(s.slice(),3)),this.setAttribute("uv",new zt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const y=new N,v=new N,E=new N;for(let w=0;w<t.length;w+=3)d(t[w+0],y),d(t[w+1],v),d(t[w+2],E),l(y,v,E,S)}function l(S,y,v,E){const w=E+1,b=[];for(let C=0;C<=w;C++){b[C]=[];const M=S.clone().lerp(v,C/w),x=y.clone().lerp(v,C/w),L=w-C;for(let I=0;I<=L;I++)I===0&&C===w?b[C][I]=M:b[C][I]=M.clone().lerp(x,I/L)}for(let C=0;C<w;C++)for(let M=0;M<2*(w-C)-1;M++){const x=Math.floor(M/2);M%2===0?(h(b[C][x+1]),h(b[C+1][x]),h(b[C][x])):(h(b[C][x+1]),h(b[C+1][x+1]),h(b[C+1][x]))}}function c(S){const y=new N;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(S),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function u(){const S=new N;for(let y=0;y<s.length;y+=3){S.x=s[y+0],S.y=s[y+1],S.z=s[y+2];const v=m(S)/2/Math.PI+.5,E=p(S)/Math.PI+.5;o.push(v,1-E)}g(),f()}function f(){for(let S=0;S<o.length;S+=6){const y=o[S+0],v=o[S+2],E=o[S+4],w=Math.max(y,v,E),b=Math.min(y,v,E);w>.9&&b<.1&&(y<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),E<.2&&(o[S+4]+=1))}}function h(S){s.push(S.x,S.y,S.z)}function d(S,y){const v=S*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const S=new N,y=new N,v=new N,E=new N,w=new Ne,b=new Ne,C=new Ne;for(let M=0,x=0;M<s.length;M+=9,x+=6){S.set(s[M+0],s[M+1],s[M+2]),y.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),w.set(o[x+0],o[x+1]),b.set(o[x+2],o[x+3]),C.set(o[x+4],o[x+5]),E.copy(S).add(y).add(v).divideScalar(3);const L=m(E);_(w,x+0,S,L),_(b,x+2,y,L),_(C,x+4,v,L)}}function _(S,y,v,E){E<0&&S.x===1&&(o[y]=S.x-1),v.x===0&&v.z===0&&(o[y]=E/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.vertices,e.indices,e.radius,e.details)}}class mr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],h=n[i+1]-u,d=(o-u)/h;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new Ne:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new N,i=[],s=[],o=[],a=new N,l=new Rt;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ft(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(ft(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class kg extends mr{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ne){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class xx extends kg{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ad(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,i(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const _l=new N,uu=new Ad,hu=new Ad,du=new Ad;class yx extends mr{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new N){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(_l.subVectors(i[0],i[1]).add(i[0]),c=_l);const f=i[a%s],h=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(_l.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=_l),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),uu.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,_,m),hu.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,_,m),du.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(uu.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),hu.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),du.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(uu.calc(l),hu.calc(l),du.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new N().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function np(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function Sx(r,e){const t=1-r;return t*t*e}function Mx(r,e){return 2*(1-r)*r*e}function bx(r,e){return r*r*e}function ua(r,e,t,n){return Sx(r,e)+Mx(r,t)+bx(r,n)}function Tx(r,e){const t=1-r;return t*t*t*e}function Ex(r,e){const t=1-r;return 3*t*t*r*e}function wx(r,e){return 3*(1-r)*r*r*e}function Ax(r,e){return r*r*r*e}function ha(r,e,t,n,i){return Tx(r,e)+Ex(r,t)+wx(r,n)+Ax(r,i)}class Cx extends mr{constructor(e=new Ne,t=new Ne,n=new Ne,i=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ne){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ha(e,i.x,s.x,o.x,a.x),ha(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hg extends mr{constructor(e=new N,t=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new N){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ha(e,i.x,s.x,o.x,a.x),ha(e,i.y,s.y,o.y,a.y),ha(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rx extends mr{constructor(e=new Ne,t=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ne){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Px extends mr{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lx extends mr{constructor(e=new Ne,t=new Ne,n=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ne){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(ua(e,i.x,s.x,o.x),ua(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gg extends mr{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(ua(e,i.x,s.x,o.x),ua(e,i.y,s.y,o.y),ua(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dx extends mr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(np(a,l.x,c.x,u.x,f.x),np(a,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Ne().fromArray(i))}return this}}var Ix=Object.freeze({__proto__:null,ArcCurve:xx,CatmullRomCurve3:yx,CubicBezierCurve:Cx,CubicBezierCurve3:Hg,EllipseCurve:kg,LineCurve:Rx,LineCurve3:Px,QuadraticBezierCurve:Lx,QuadraticBezierCurve3:Gg,SplineCurve:Dx});class rc extends _c{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rc(e.radius,e.detail)}}class Cd extends _c{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Cd(e.radius,e.detail)}}class Br extends Qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*h-o;for(let y=0;y<c;y++){const v=y*f-s;g.push(v,-S,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const y=S+c*p,v=S+c*(p+1),E=S+1+c*(p+1),w=S+1+c*p;d.push(y,v,w),d.push(v,E,w)}this.setIndex(d),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rd extends Qt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let f=e;const h=(t-e)/i,d=new N,g=new Ne;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}f+=h}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const S=p+m,y=S,v=S+n+1,E=S+n+2,w=S+1;a.push(y,v,w),a.push(v,E,w)}}this.setIndex(a),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class wa extends Qt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new N,h=new N,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const S=[],y=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){const w=E/t;f.x=-e*Math.cos(i+w*s)*Math.sin(o+y*a),f.y=e*Math.cos(o+y*a),f.z=e*Math.sin(i+w*s)*Math.sin(o+y*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(w+v,1-y),S.push(c++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const y=u[p][S+1],v=u[p][S],E=u[p+1][S],w=u[p+1][S+1];(p!==0||o>0)&&d.push(y,v,w),(p!==n-1||l<Math.PI)&&d.push(v,E,w)}this.setIndex(d),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pd extends Qt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new N,f=new N,h=new N;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*s,m=d/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,S=(i+1)*d+g;o.push(_,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new zt(a,3)),this.setAttribute("normal",new zt(l,3)),this.setAttribute("uv",new zt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class sc extends Qt{constructor(e=new Gg(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new N,l=new N,c=new Ne;let u=new N;const f=[],h=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new zt(f,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(d,2));function _(){for(let y=0;y<t;y++)m(y);m(s===!1?t:0),S(),p()}function m(y){u=e.getPointAt(y/t,u);const v=o.normals[y],E=o.binormals[y];for(let w=0;w<=i;w++){const b=w/i*Math.PI*2,C=Math.sin(b),M=-Math.cos(b);l.x=M*v.x+C*E.x,l.y=M*v.y+C*E.y,l.z=M*v.z+C*E.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let v=1;v<=i;v++){const E=(i+1)*(y-1)+(v-1),w=(i+1)*y+(v-1),b=(i+1)*y+v,C=(i+1)*(y-1)+v;g.push(E,w,C),g.push(w,b,C)}}function S(){for(let y=0;y<=t;y++)for(let v=0;v<=i;v++)c.x=y/t,c.y=v/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new sc(new Ix[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Vg extends Wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eg,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ux extends Wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nx extends Wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ld extends on{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const fu=new Rt,ip=new N,rp=new N;class Wg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=$i,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wd,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(ip),rp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rp),t.updateMatrixWorld(),fu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const sp=new Rt,ko=new N,pu=new N;class Fx extends Wg{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ko.setFromMatrixPosition(e.matrixWorld),n.position.copy(ko),pu.copy(n.position),pu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(pu),n.updateMatrixWorld(),i.makeTranslation(-ko.x,-ko.y,-ko.z),sp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sp)}}class op extends Ld{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Xg extends Ig{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ox extends Wg{constructor(){super(new Xg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bx extends Ld{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new Ox}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zx extends Ld{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class kx extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ap=new Rt;class Hx{constructor(e,t,n=0,i=1/0){this.ray=new gc(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ed,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ap.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ap),this}intersectObject(e,t=!0,n=[]){return zh(e,this,n,t),n.sort(lp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)zh(e[i],this,n,t);return n.sort(lp),n}}function lp(r,e){return r.distance-e.distance}function zh(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)zh(s[o],e,t,!0)}}function cp(r,e,t,n){const i=Gx(n);switch(t){case yg:return r*e;case Mg:return r*e/i.components*i.byteLength;case Sd:return r*e/i.components*i.byteLength;case bg:return r*e*2/i.components*i.byteLength;case Md:return r*e*2/i.components*i.byteLength;case Sg:return r*e*3/i.components*i.byteLength;case Ni:return r*e*4/i.components*i.byteLength;case bd:return r*e*4/i.components*i.byteLength;case Ll:case Dl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Il:case Ul:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ch:case hh:return Math.max(r,16)*Math.max(e,8)/4;case lh:case uh:return Math.max(r,8)*Math.max(e,8)/2;case dh:case fh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ph:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case _h:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case vh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case xh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case yh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case bh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Th:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case wh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Nl:case Rh:case Ph:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Tg:case Lh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Dh:case Ih:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gx(r){switch(r){case $i:case _g:return{byteLength:1,components:1};case Ma:case vg:case Ra:return{byteLength:2,components:1};case xd:case yd:return{byteLength:2,components:4};case Ms:case vd:case lr:return{byteLength:4,components:1};case xg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_d}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_d);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qg(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Vx(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Wx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xx=`#ifdef USE_ALPHAHASH
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
#endif`,qx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$x=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jx=`#ifdef USE_AOMAP
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
#endif`,Zx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kx=`#ifdef USE_BATCHING
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
#endif`,Qx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ny=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iy=`#ifdef USE_IRIDESCENCE
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
#endif`,ry=`#ifdef USE_BUMPMAP
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
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fy=`#define PI 3.141592653589793
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
} // validated`,py=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,my=`vec3 transformedNormal = objectNormal;
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
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,My=`#ifdef USE_ENVMAP
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
#endif`,by=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ty=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
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
#endif`,Ay=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ry=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Py=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ly=`#ifdef USE_GRADIENTMAP
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
}`,Dy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ny=`uniform bool receiveShadow;
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
#endif`,Fy=`#ifdef USE_ENVMAP
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
#endif`,Oy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,By=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hy=`PhysicalMaterial material;
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
#endif`,Gy=`struct PhysicalMaterial {
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
}`,Vy=`
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
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$y=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ky=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qy=`#if defined( USE_POINTS_UV )
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
#endif`,eS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sS=`#ifdef USE_MORPHTARGETS
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
#endif`,oS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dS=`#ifdef USE_NORMALMAP
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
#endif`,fS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_S=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ES=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,CS=`float getShadowMask() {
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
}`,RS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PS=`#ifdef USE_SKINNING
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
#endif`,LS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DS=`#ifdef USE_SKINNING
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
#endif`,IS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,US=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,OS=`#ifdef USE_TRANSMISSION
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
#endif`,BS=`#ifdef USE_TRANSMISSION
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
#endif`,zS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WS=`uniform sampler2D t2D;
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
}`,XS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,YS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$S=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jS=`#include <common>
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
}`,JS=`#if DEPTH_PACKING == 3200
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
}`,ZS=`#define DISTANCE
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
}`,KS=`#define DISTANCE
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
}`,QS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`uniform float scale;
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
}`,nM=`uniform vec3 diffuse;
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
}`,iM=`#include <common>
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
}`,rM=`uniform vec3 diffuse;
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
}`,sM=`#define LAMBERT
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
}`,oM=`#define LAMBERT
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
}`,aM=`#define MATCAP
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
}`,lM=`#define MATCAP
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
}`,cM=`#define NORMAL
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
}`,uM=`#define NORMAL
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
}`,hM=`#define PHONG
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
}`,dM=`#define PHONG
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
}`,fM=`#define STANDARD
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
}`,pM=`#define STANDARD
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
}`,mM=`#define TOON
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
}`,gM=`#define TOON
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
}`,_M=`uniform float size;
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
}`,vM=`uniform vec3 diffuse;
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
}`,xM=`#include <common>
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
}`,yM=`uniform vec3 color;
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
}`,SM=`uniform float rotation;
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
}`,MM=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:Wx,alphahash_pars_fragment:Xx,alphamap_fragment:qx,alphamap_pars_fragment:Yx,alphatest_fragment:$x,alphatest_pars_fragment:jx,aomap_fragment:Jx,aomap_pars_fragment:Zx,batching_pars_vertex:Kx,batching_vertex:Qx,begin_vertex:ey,beginnormal_vertex:ty,bsdfs:ny,iridescence_fragment:iy,bumpmap_pars_fragment:ry,clipping_planes_fragment:sy,clipping_planes_pars_fragment:oy,clipping_planes_pars_vertex:ay,clipping_planes_vertex:ly,color_fragment:cy,color_pars_fragment:uy,color_pars_vertex:hy,color_vertex:dy,common:fy,cube_uv_reflection_fragment:py,defaultnormal_vertex:my,displacementmap_pars_vertex:gy,displacementmap_vertex:_y,emissivemap_fragment:vy,emissivemap_pars_fragment:xy,colorspace_fragment:yy,colorspace_pars_fragment:Sy,envmap_fragment:My,envmap_common_pars_fragment:by,envmap_pars_fragment:Ty,envmap_pars_vertex:Ey,envmap_physical_pars_fragment:Fy,envmap_vertex:wy,fog_vertex:Ay,fog_pars_vertex:Cy,fog_fragment:Ry,fog_pars_fragment:Py,gradientmap_pars_fragment:Ly,lightmap_pars_fragment:Dy,lights_lambert_fragment:Iy,lights_lambert_pars_fragment:Uy,lights_pars_begin:Ny,lights_toon_fragment:Oy,lights_toon_pars_fragment:By,lights_phong_fragment:zy,lights_phong_pars_fragment:ky,lights_physical_fragment:Hy,lights_physical_pars_fragment:Gy,lights_fragment_begin:Vy,lights_fragment_maps:Wy,lights_fragment_end:Xy,logdepthbuf_fragment:qy,logdepthbuf_pars_fragment:Yy,logdepthbuf_pars_vertex:$y,logdepthbuf_vertex:jy,map_fragment:Jy,map_pars_fragment:Zy,map_particle_fragment:Ky,map_particle_pars_fragment:Qy,metalnessmap_fragment:eS,metalnessmap_pars_fragment:tS,morphinstance_vertex:nS,morphcolor_vertex:iS,morphnormal_vertex:rS,morphtarget_pars_vertex:sS,morphtarget_vertex:oS,normal_fragment_begin:aS,normal_fragment_maps:lS,normal_pars_fragment:cS,normal_pars_vertex:uS,normal_vertex:hS,normalmap_pars_fragment:dS,clearcoat_normal_fragment_begin:fS,clearcoat_normal_fragment_maps:pS,clearcoat_pars_fragment:mS,iridescence_pars_fragment:gS,opaque_fragment:_S,packing:vS,premultiplied_alpha_fragment:xS,project_vertex:yS,dithering_fragment:SS,dithering_pars_fragment:MS,roughnessmap_fragment:bS,roughnessmap_pars_fragment:TS,shadowmap_pars_fragment:ES,shadowmap_pars_vertex:wS,shadowmap_vertex:AS,shadowmask_pars_fragment:CS,skinbase_vertex:RS,skinning_pars_vertex:PS,skinning_vertex:LS,skinnormal_vertex:DS,specularmap_fragment:IS,specularmap_pars_fragment:US,tonemapping_fragment:NS,tonemapping_pars_fragment:FS,transmission_fragment:OS,transmission_pars_fragment:BS,uv_pars_fragment:zS,uv_pars_vertex:kS,uv_vertex:HS,worldpos_vertex:GS,background_vert:VS,background_frag:WS,backgroundCube_vert:XS,backgroundCube_frag:qS,cube_vert:YS,cube_frag:$S,depth_vert:jS,depth_frag:JS,distanceRGBA_vert:ZS,distanceRGBA_frag:KS,equirect_vert:QS,equirect_frag:eM,linedashed_vert:tM,linedashed_frag:nM,meshbasic_vert:iM,meshbasic_frag:rM,meshlambert_vert:sM,meshlambert_frag:oM,meshmatcap_vert:aM,meshmatcap_frag:lM,meshnormal_vert:cM,meshnormal_frag:uM,meshphong_vert:hM,meshphong_frag:dM,meshphysical_vert:fM,meshphysical_frag:pM,meshtoon_vert:mM,meshtoon_frag:gM,points_vert:_M,points_frag:vM,shadow_vert:xM,shadow_frag:yM,sprite_vert:SM,sprite_frag:MM},ve={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},zi={basic:{uniforms:Dn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Dn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new et(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Dn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Dn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Dn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new et(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Dn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Dn([ve.points,ve.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Dn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Dn([ve.common,ve.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Dn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Dn([ve.sprite,ve.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Dn([ve.common,ve.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Dn([ve.lights,ve.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};zi.physical={uniforms:Dn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const vl={r:0,b:0,g:0},Kr=new ji,bM=new Rt;function TM(r,e,t,n,i,s,o){const a=new et(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const E=g(y);E===null?p(a,l):E&&E.isColor&&(p(E,1),v=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,v){const E=g(v);E&&(E.isCubeTexture||E.mapping===mc)?(u===void 0&&(u=new Wt(new bi(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:To(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Kr.copy(v.backgroundRotation),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bM.makeRotationFromEuler(Kr)),u.material.toneMapped=Mt.getTransfer(E.colorSpace)!==wt,(f!==E||h!==E.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,d=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Wt(new Br(2,2),new jn({name:"BackgroundMaterial",uniforms:To(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Mt.getTransfer(E.colorSpace)!==wt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(vl,Dg(r)),n.buffers.color.setClear(vl.r,vl.g,vl.b,v,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m,dispose:S}}function EM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(x,L,I,D,B){let X=!1;const W=f(D,I,L);s!==W&&(s=W,c(s.object)),X=d(x,D,I,B),X&&g(x,D,I,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(x,L,I,D),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function f(x,L,I){const D=I.wireframe===!0;let B=n[x.id];B===void 0&&(B={},n[x.id]=B);let X=B[L.id];X===void 0&&(X={},B[L.id]=X);let W=X[D];return W===void 0&&(W=h(l()),X[D]=W),W}function h(x){const L=[],I=[],D=[];for(let B=0;B<t;B++)L[B]=0,I[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:D,object:x,attributes:{},index:null}}function d(x,L,I,D){const B=s.attributes,X=L.attributes;let W=0;const q=I.getAttributes();for(const H in q)if(q[H].location>=0){const U=B[H];let ce=X[H];if(ce===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor)),U===void 0||U.attribute!==ce||ce&&U.data!==ce.data)return!0;W++}return s.attributesNum!==W||s.index!==D}function g(x,L,I,D){const B={},X=L.attributes;let W=0;const q=I.getAttributes();for(const H in q)if(q[H].location>=0){let U=X[H];U===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(U=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(U=x.instanceColor));const ce={};ce.attribute=U,U&&U.data&&(ce.data=U.data),B[H]=ce,W++}s.attributes=B,s.attributesNum=W,s.index=D}function _(){const x=s.newAttributes;for(let L=0,I=x.length;L<I;L++)x[L]=0}function m(x){p(x,0)}function p(x,L){const I=s.newAttributes,D=s.enabledAttributes,B=s.attributeDivisors;I[x]=1,D[x]===0&&(r.enableVertexAttribArray(x),D[x]=1),B[x]!==L&&(r.vertexAttribDivisor(x,L),B[x]=L)}function S(){const x=s.newAttributes,L=s.enabledAttributes;for(let I=0,D=L.length;I<D;I++)L[I]!==x[I]&&(r.disableVertexAttribArray(I),L[I]=0)}function y(x,L,I,D,B,X,W){W===!0?r.vertexAttribIPointer(x,L,I,B,X):r.vertexAttribPointer(x,L,I,D,B,X)}function v(x,L,I,D){_();const B=D.attributes,X=I.getAttributes(),W=L.defaultAttributeValues;for(const q in X){const H=X[q];if(H.location>=0){let ne=B[q];if(ne===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor)),ne!==void 0){const U=ne.normalized,ce=ne.itemSize,xe=e.get(ne);if(xe===void 0)continue;const Fe=xe.buffer,Z=xe.type,j=xe.bytesPerElement,re=Z===r.INT||Z===r.UNSIGNED_INT||ne.gpuType===vd;if(ne.isInterleavedBufferAttribute){const ae=ne.data,Me=ae.stride,qe=ne.offset;if(ae.isInstancedInterleavedBuffer){for(let Ue=0;Ue<H.locationSize;Ue++)p(H.location+Ue,ae.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ue=0;Ue<H.locationSize;Ue++)m(H.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,Fe);for(let Ue=0;Ue<H.locationSize;Ue++)y(H.location+Ue,ce/H.locationSize,Z,U,Me*j,(qe+ce/H.locationSize*Ue)*j,re)}else{if(ne.isInstancedBufferAttribute){for(let ae=0;ae<H.locationSize;ae++)p(H.location+ae,ne.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ae=0;ae<H.locationSize;ae++)m(H.location+ae);r.bindBuffer(r.ARRAY_BUFFER,Fe);for(let ae=0;ae<H.locationSize;ae++)y(H.location+ae,ce/H.locationSize,Z,U,ce*j,ce/H.locationSize*ae*j,re)}}else if(W!==void 0){const U=W[q];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(H.location,U);break;case 3:r.vertexAttrib3fv(H.location,U);break;case 4:r.vertexAttrib4fv(H.location,U);break;default:r.vertexAttrib1fv(H.location,U)}}}}S()}function E(){C();for(const x in n){const L=n[x];for(const I in L){const D=L[I];for(const B in D)u(D[B].object),delete D[B];delete L[I]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const L=n[x.id];for(const I in L){const D=L[I];for(const B in D)u(D[B].object),delete D[B];delete L[I]}delete n[x.id]}function b(x){for(const L in n){const I=n[L];if(I[x.id]===void 0)continue;const D=I[x.id];for(const B in D)u(D[B].object),delete D[B];delete I[x.id]}}function C(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function wM(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function AM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==Ni&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const C=b===Ra&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==$i&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==lr&&!C)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:E,maxSamples:w}}function CM(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Tr,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:n,y=S*4;let v=p.clippingState||null;l.value=v,v=u(g,h,y,d);for(let E=0;E!==y;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=d;y!==_;++y,v+=4)o.copy(f[y]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function RM(r){let e=new WeakMap;function t(o,a){return a===rh?o.mapping=So:a===sh&&(o.mapping=Mo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===rh||a===sh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new dx(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Qs=4,up=[.125,.215,.35,.446,.526,.582],ss=20,mu=new Xg,hp=new et;let gu=null,_u=0,vu=0,xu=!1;const is=(1+Math.sqrt(5))/2,qs=1/is,dp=[new N(-is,qs,0),new N(is,qs,0),new N(-qs,0,is),new N(qs,0,is),new N(0,is,-qs),new N(0,is,qs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],PM=new N;class fp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=PM}=s;gu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gu,_u,vu),this._renderer.xr.enabled=xu,e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===So||e.mapping===Mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xi,minFilter:Xi,generateMipmaps:!1,type:Ra,format:Ni,colorSpace:bo,depthBuffer:!1},i=pp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LM(s)),this._blurMaterial=DM(s,e,t)}return i}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,mu)}_sceneToCubeUV(e,t,n,i,s){const l=new Gn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(hp),f.toneMapping=Fr,f.autoClear=!1;const g=new or({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),_=new Wt(new bi,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(hp),m=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const v=this._cubeSize;xl(i,y*v,S>2?v:0,v,v),f.setRenderTarget(i),m&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===So||e.mapping===Mo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mp());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;xl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,mu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=dp[(i-s-1)%dp.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Wt(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ss-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):ss;m>ss&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);const p=[];let S=0;for(let b=0;b<ss;++b){const C=b/_,M=Math.exp(-C*C/2);p.push(M),b===0?S+=M:b<m&&(S+=2*M)}for(let b=0;b<p.length;b++)p[b]=p[b]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const v=this._sizeLods[i],E=3*v*(i>y-Qs?i-y+Qs:0),w=4*(this._cubeSize-v);xl(t,E,w,3*v,2*v),l.setRenderTarget(t),l.render(f,mu)}}function LM(r){const e=[],t=[],n=[];let i=r;const s=r-Qs+1+up.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Qs?l=up[o-r+Qs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),y=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let w=0;w<d;w++){const b=w%3*2/3-1,C=w>2?0:-1,M=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];S.set(M,_*g*w),y.set(h,m*g*w);const x=[w,w,w,w,w,w];v.set(x,p*g*w)}const E=new Qt;E.setAttribute("position",new sn(S,_)),E.setAttribute("uv",new sn(y,m)),E.setAttribute("faceIndex",new sn(v,p)),e.push(E),i>Qs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function pp(r,e,t){const n=new bs(r,e,t);return n.texture.mapping=mc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xl(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function DM(r,e,t){const n=new Float32Array(ss),i=new N(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Dd(),fragmentShader:`

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
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function mp(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dd(),fragmentShader:`

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
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function gp(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Dd(){return`

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
	`}function IM(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===rh||l===sh,u=l===So||l===Mo;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new fp(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new fp(r)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function UM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Fl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function NM(r,e,t,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],r.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let y=0,v=S.length;y<v;y+=3){const E=S[y+0],w=S[y+1],b=S[y+2];h.push(E,w,w,b,b,E)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,v=S.length/3-1;y<v;y+=3){const E=y+0,w=y+1,b=y+2;h.push(E,w,w,b,b,E)}}else return;const m=new(Ag(h)?Lg:Pg)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function FM(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*o),t.update(d,n,1)}function c(h,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,h*o,g),t.update(d,n,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*_[S];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function OM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function BM(r,e,t){const n=new WeakMap,i=new Ct;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let x=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var d=x;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let E=a.attributes.position.count*v,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const b=new Float32Array(E*w*4*f),C=new Cg(b,E,w,f);C.type=lr,C.needsUpdate=!0;const M=v*4;for(let L=0;L<f;L++){const I=p[L],D=S[L],B=y[L],X=E*w*4*L;for(let W=0;W<I.count;W++){const q=W*M;g===!0&&(i.fromBufferAttribute(I,W),b[X+q+0]=i.x,b[X+q+1]=i.y,b[X+q+2]=i.z,b[X+q+3]=0),_===!0&&(i.fromBufferAttribute(D,W),b[X+q+4]=i.x,b[X+q+5]=i.y,b[X+q+6]=i.z,b[X+q+7]=0),m===!0&&(i.fromBufferAttribute(B,W),b[X+q+8]=i.x,b[X+q+9]=i.y,b[X+q+10]=i.z,b[X+q+11]=B.itemSize===4?i.w:1)}}h={count:f,texture:C,size:new Ne(E,w)},n.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function zM(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Yg=new zn,_p=new zg(1,1),$g=new Cg,jg=new jv,Jg=new Ug,vp=[],xp=[],yp=new Float32Array(16),Sp=new Float32Array(9),Mp=new Float32Array(4);function Ao(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=vp[i];if(s===void 0&&(s=new Float32Array(i),vp[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function an(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ln(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function vc(r,e){let t=xp[e];t===void 0&&(t=new Int32Array(e),xp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function kM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function HM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2fv(this.addr,e),ln(t,e)}}function GM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;r.uniform3fv(this.addr,e),ln(t,e)}}function VM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4fv(this.addr,e),ln(t,e)}}function WM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Mp.set(n),r.uniformMatrix2fv(this.addr,!1,Mp),ln(t,n)}}function XM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Sp.set(n),r.uniformMatrix3fv(this.addr,!1,Sp),ln(t,n)}}function qM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;yp.set(n),r.uniformMatrix4fv(this.addr,!1,yp),ln(t,n)}}function YM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function $M(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2iv(this.addr,e),ln(t,e)}}function jM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3iv(this.addr,e),ln(t,e)}}function JM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4iv(this.addr,e),ln(t,e)}}function ZM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function KM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2uiv(this.addr,e),ln(t,e)}}function QM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3uiv(this.addr,e),ln(t,e)}}function eb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4uiv(this.addr,e),ln(t,e)}}function tb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(_p.compareFunction=wg,s=_p):s=Yg,t.setTexture2D(e||s,i)}function nb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||jg,i)}function ib(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Jg,i)}function rb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||$g,i)}function sb(r){switch(r){case 5126:return kM;case 35664:return HM;case 35665:return GM;case 35666:return VM;case 35674:return WM;case 35675:return XM;case 35676:return qM;case 5124:case 35670:return YM;case 35667:case 35671:return $M;case 35668:case 35672:return jM;case 35669:case 35673:return JM;case 5125:return ZM;case 36294:return KM;case 36295:return QM;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return tb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return rb}}function ob(r,e){r.uniform1fv(this.addr,e)}function ab(r,e){const t=Ao(e,this.size,2);r.uniform2fv(this.addr,t)}function lb(r,e){const t=Ao(e,this.size,3);r.uniform3fv(this.addr,t)}function cb(r,e){const t=Ao(e,this.size,4);r.uniform4fv(this.addr,t)}function ub(r,e){const t=Ao(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function hb(r,e){const t=Ao(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function db(r,e){const t=Ao(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function fb(r,e){r.uniform1iv(this.addr,e)}function pb(r,e){r.uniform2iv(this.addr,e)}function mb(r,e){r.uniform3iv(this.addr,e)}function gb(r,e){r.uniform4iv(this.addr,e)}function _b(r,e){r.uniform1uiv(this.addr,e)}function vb(r,e){r.uniform2uiv(this.addr,e)}function xb(r,e){r.uniform3uiv(this.addr,e)}function yb(r,e){r.uniform4uiv(this.addr,e)}function Sb(r,e,t){const n=this.cache,i=e.length,s=vc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Yg,s[o])}function Mb(r,e,t){const n=this.cache,i=e.length,s=vc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||jg,s[o])}function bb(r,e,t){const n=this.cache,i=e.length,s=vc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Jg,s[o])}function Tb(r,e,t){const n=this.cache,i=e.length,s=vc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||$g,s[o])}function Eb(r){switch(r){case 5126:return ob;case 35664:return ab;case 35665:return lb;case 35666:return cb;case 35674:return ub;case 35675:return hb;case 35676:return db;case 5124:case 35670:return fb;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return _b;case 36294:return vb;case 36295:return xb;case 36296:return yb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return Mb;case 35680:case 36300:case 36308:case 36293:return bb;case 36289:case 36303:case 36311:case 36292:return Tb}}class wb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sb(t.type)}}class Ab{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Eb(t.type)}}class Cb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const yu=/(\w+)(\])?(\[|\.)?/g;function bp(r,e){r.seq.push(e),r.map[e.id]=e}function Rb(r,e,t){const n=r.name,i=n.length;for(yu.lastIndex=0;;){const s=yu.exec(n),o=yu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){bp(t,c===void 0?new wb(a,r,e):new Ab(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Cb(a),bp(t,f)),t=f}}}class Ol{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Rb(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Tp(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Pb=37297;let Lb=0;function Db(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Ep=new rt;function Ib(r){Mt._getMatrix(Ep,Mt.workingColorSpace,r);const e=`mat3( ${Ep.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(r)){case Zl:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function wp(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Db(r.getShaderSource(e),o)}else return i}function Ub(r,e){const t=Ib(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Nb(r,e){let t;switch(e){case Sv:t="Linear";break;case Mv:t="Reinhard";break;case bv:t="Cineon";break;case Tv:t="ACESFilmic";break;case wv:t="AgX";break;case Av:t="Neutral";break;case Ev:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yl=new N;function Fb(){Mt.getLuminanceCoefficients(yl);const r=yl.x.toFixed(4),e=yl.y.toFixed(4),t=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ob(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function Bb(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zb(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Zo(r){return r!==""}function Ap(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kb=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(r){return r.replace(kb,Gb)}const Hb=new Map;function Gb(r,e){let t=ot[e];if(t===void 0){const n=Hb.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return kh(t)}const Vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rp(r){return r.replace(Vb,Wb)}function Wb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Pp(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function Xb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===pg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ev?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===tr&&(e="SHADOWMAP_TYPE_VSM"),e}function qb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case So:case Mo:e="ENVMAP_TYPE_CUBE";break;case mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yb(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Mo:e="ENVMAP_MODE_REFRACTION";break}return e}function $b(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case mg:e="ENVMAP_BLENDING_MULTIPLY";break;case xv:e="ENVMAP_BLENDING_MIX";break;case yv:e="ENVMAP_BLENDING_ADD";break}return e}function jb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Jb(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Xb(t),c=qb(t),u=Yb(t),f=$b(t),h=jb(t),d=Ob(t),g=Bb(s),_=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zo).join(`
`),p.length>0&&(p+=`
`)):(m=[Pp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),p=[Pp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fr?"#define TONE_MAPPING":"",t.toneMapping!==Fr?ot.tonemapping_pars_fragment:"",t.toneMapping!==Fr?Nb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,Ub("linearToOutputTexel",t.outputColorSpace),Fb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zo).join(`
`)),o=kh(o),o=Ap(o,t),o=Cp(o,t),a=kh(a),a=Ap(a,t),a=Cp(a,t),o=Rp(o),a=Rp(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Rf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+o,v=S+p+a,E=Tp(i,i.VERTEX_SHADER,y),w=Tp(i,i.FRAGMENT_SHADER,v);i.attachShader(_,E),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(L){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(_).trim(),D=i.getShaderInfoLog(E).trim(),B=i.getShaderInfoLog(w).trim();let X=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,w);else{const q=wp(i,E,"vertex"),H=wp(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+I+`
`+q+`
`+H)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(D===""||B==="")&&(W=!1);W&&(L.diagnostics={runnable:X,programLog:I,vertexShader:{log:D,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(E),i.deleteShader(w),C=new Ol(i,_),M=zb(i,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,Pb)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}let Zb=0;class Kb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Qb(e),t.set(e,n)),n}}class Qb{constructor(e){this.id=Zb++,this.code=e,this.usedTimes=0}}function e1(r,e,t,n,i,s,o){const a=new Ed,l=new Kb,c=new Set,u=[],f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,L,I,D){const B=I.fog,X=D.geometry,W=M.isMeshStandardMaterial?I.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),H=q&&q.mapping===mc?q.image.height:null,ne=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const U=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ce=U!==void 0?U.length:0;let xe=0;X.morphAttributes.position!==void 0&&(xe=1),X.morphAttributes.normal!==void 0&&(xe=2),X.morphAttributes.color!==void 0&&(xe=3);let Fe,Z,j,re;if(ne){const me=zi[ne];Fe=me.vertexShader,Z=me.fragmentShader}else Fe=M.vertexShader,Z=M.fragmentShader,l.update(M),j=l.getVertexShaderID(M),re=l.getFragmentShaderID(M);const ae=r.getRenderTarget(),Me=r.state.buffers.depth.getReversed(),qe=D.isInstancedMesh===!0,Ue=D.isBatchedMesh===!0,tt=!!M.map,it=!!M.matcap,be=!!q,F=!!M.aoMap,ht=!!M.lightMap,Ye=!!M.bumpMap,G=!!M.normalMap,Te=!!M.displacementMap,lt=!!M.emissiveMap,Ae=!!M.metalnessMap,R=!!M.roughnessMap,T=M.anisotropy>0,Y=M.clearcoat>0,ee=M.dispersion>0,te=M.iridescence>0,Q=M.sheen>0,de=M.transmission>0,ue=T&&!!M.anisotropyMap,Pe=Y&&!!M.clearcoatMap,Le=Y&&!!M.clearcoatNormalMap,se=Y&&!!M.clearcoatRoughnessMap,fe=te&&!!M.iridescenceMap,Ge=te&&!!M.iridescenceThicknessMap,Oe=Q&&!!M.sheenColorMap,ye=Q&&!!M.sheenRoughnessMap,Qe=!!M.specularMap,$e=!!M.specularColorMap,dt=!!M.specularIntensityMap,P=de&&!!M.transmissionMap,K=de&&!!M.thicknessMap,k=!!M.gradientMap,V=!!M.alphaMap,ie=M.alphaTest>0,le=!!M.alphaHash,De=!!M.extensions;let Ke=Fr;M.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Ke=r.toneMapping);const st={shaderID:ne,shaderType:M.type,shaderName:M.name,vertexShader:Fe,fragmentShader:Z,defines:M.defines,customVertexShaderID:j,customFragmentShaderID:re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ue,batchingColor:Ue&&D._colorsTexture!==null,instancing:qe,instancingColor:qe&&D.instanceColor!==null,instancingMorph:qe&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ae===null?r.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:bo,alphaToCoverage:!!M.alphaToCoverage,map:tt,matcap:it,envMap:be,envMapMode:be&&q.mapping,envMapCubeUVHeight:H,aoMap:F,lightMap:ht,bumpMap:Ye,normalMap:G,displacementMap:h&&Te,emissiveMap:lt,normalMapObjectSpace:G&&M.normalMapType===Lv,normalMapTangentSpace:G&&M.normalMapType===Eg,metalnessMap:Ae,roughnessMap:R,anisotropy:T,anisotropyMap:ue,clearcoat:Y,clearcoatMap:Pe,clearcoatNormalMap:Le,clearcoatRoughnessMap:se,dispersion:ee,iridescence:te,iridescenceMap:fe,iridescenceThicknessMap:Ge,sheen:Q,sheenColorMap:Oe,sheenRoughnessMap:ye,specularMap:Qe,specularColorMap:$e,specularIntensityMap:dt,transmission:de,transmissionMap:P,thicknessMap:K,gradientMap:k,opaque:M.transparent===!1&&M.blending===oo&&M.alphaToCoverage===!1,alphaMap:V,alphaTest:ie,alphaHash:le,combine:M.combine,mapUv:tt&&_(M.map.channel),aoMapUv:F&&_(M.aoMap.channel),lightMapUv:ht&&_(M.lightMap.channel),bumpMapUv:Ye&&_(M.bumpMap.channel),normalMapUv:G&&_(M.normalMap.channel),displacementMapUv:Te&&_(M.displacementMap.channel),emissiveMapUv:lt&&_(M.emissiveMap.channel),metalnessMapUv:Ae&&_(M.metalnessMap.channel),roughnessMapUv:R&&_(M.roughnessMap.channel),anisotropyMapUv:ue&&_(M.anisotropyMap.channel),clearcoatMapUv:Pe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Le&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(M.sheenRoughnessMap.channel),specularMapUv:Qe&&_(M.specularMap.channel),specularColorMapUv:$e&&_(M.specularColorMap.channel),specularIntensityMapUv:dt&&_(M.specularIntensityMap.channel),transmissionMapUv:P&&_(M.transmissionMap.channel),thicknessMapUv:K&&_(M.thicknessMap.channel),alphaMapUv:V&&_(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(G||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!X.attributes.uv&&(tt||V),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Me,skinning:D.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:xe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ke,decodeVideoTexture:tt&&M.map.isVideoTexture===!0&&Mt.getTransfer(M.map.colorSpace)===wt,decodeVideoTextureEmissive:lt&&M.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(M.emissiveMap.colorSpace)===wt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Hi,flipSided:M.side===$n,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:De&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&M.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return st.vertexUv1s=c.has(1),st.vertexUv2s=c.has(2),st.vertexUv3s=c.has(3),c.clear(),st}function p(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)x.push(L),x.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(S(x,M),y(x,M),x.push(r.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function S(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function y(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const x=g[M.type];let L;if(x){const I=zi[x];L=lx.clone(I.uniforms)}else L=M.uniforms;return L}function E(M,x){let L;for(let I=0,D=u.length;I<D;I++){const B=u[I];if(B.cacheKey===x){L=B,++L.usedTimes;break}}return L===void 0&&(L=new Jb(r,x,M,s),u.push(L)),L}function w(M){if(--M.usedTimes===0){const x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function b(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:C}}function t1(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function n1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Lp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Dp(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,d,g,_,m){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||n1),n.length>1&&n.sort(h||Lp),i.length>1&&i.sort(h||Lp)}function u(){for(let f=e,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function i1(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Dp,r.set(n,[o])):i>=s.length?(o=new Dp,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function r1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new et};break;case"SpotLight":t={position:new N,direction:new N,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function s1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let o1=0;function a1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function l1(r){const e=new r1,t=s1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,s=new Rt,o=new Rt;function a(c){let u=0,f=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,y=0,v=0,E=0,w=0,b=0;c.sort(a1);for(let M=0,x=c.length;M<x;M++){const L=c[M],I=L.color,D=L.intensity,B=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=I.r*D,f+=I.g*D,h+=I.b*D;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],D);b++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const q=L.shadow,H=t.get(L);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=L.shadow.matrix,S++}n.directional[d]=W,d++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(I).multiplyScalar(D),W.distance=B,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[_]=W;const q=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,q.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=q.matrix,L.castShadow){const H=t.get(L);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=X,v++}_++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(I).multiplyScalar(D),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=W,m++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const q=L.shadow,H=t.get(L);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,H.shadowCameraNear=q.camera.near,H.shadowCameraFar=q.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=W,g++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(D),W.groundColor.copy(L.groundColor).multiplyScalar(D),n.hemi[p]=W,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==S||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==E||C.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=S,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=E,C.numLightProbes=b,n.version=o1++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const y=c[p];if(y.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(y.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Ip(r){const e=new l1(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function c1(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Ip(r),e.set(i,[a])):s>=o.length?(a=new Ip(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const u1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h1=`uniform sampler2D shadow_pass;
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
}`;function d1(r,e,t){let n=new wd;const i=new Ne,s=new Ne,o=new Ct,a=new Ux({depthPacking:Pv}),l=new Nx,c={},u=t.maxTextureSize,f={[Gr]:$n,[$n]:Gr,[Hi]:Hi},h=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:u1,fragmentShader:h1}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Qt;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Wt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pg;let p=this.type;this.render=function(w,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=r.getRenderTarget(),x=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Nr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const D=p!==tr&&this.type===tr,B=p===tr&&this.type!==tr;for(let X=0,W=w.length;X<W;X++){const q=w[X],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ne=H.getFrameExtents();if(i.multiply(ne),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ne.x),i.x=s.x*ne.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ne.y),i.y=s.y*ne.y,H.mapSize.y=s.y)),H.map===null||D===!0||B===!0){const ce=this.type!==tr?{minFilter:Fi,magFilter:Fi}:{};H.map!==null&&H.map.dispose(),H.map=new bs(i.x,i.y,ce),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const U=H.getViewportCount();for(let ce=0;ce<U;ce++){const xe=H.getViewport(ce);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),I.viewport(o),H.updateMatrices(q,ce),n=H.getFrustum(),v(b,C,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===tr&&S(H,C),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,x,L)};function S(w,b){const C=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new bs(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,C,h,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,C,d,_,null)}function y(w,b,C,M){let x=null;const L=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)x=L;else if(x=C.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const I=x.uuid,D=b.uuid;let B=c[I];B===void 0&&(B={},c[I]=B);let X=B[D];X===void 0&&(X=x.clone(),B[D]=X,b.addEventListener("dispose",E)),x=X}if(x.visible=b.visible,x.wireframe=b.wireframe,M===tr?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:f[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=r.properties.get(x);I.light=C}return x}function v(w,b,C,M,x){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===tr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const D=e.update(w),B=w.material;if(Array.isArray(B)){const X=D.groups;for(let W=0,q=X.length;W<q;W++){const H=X[W],ne=B[H.materialIndex];if(ne&&ne.visible){const U=y(w,ne,M,x);w.onBeforeShadow(r,w,b,C,D,U,H),r.renderBufferDirect(C,null,D,U,w,H),w.onAfterShadow(r,w,b,C,D,U,H)}}}else if(B.visible){const X=y(w,B,M,x);w.onBeforeShadow(r,w,b,C,D,X,null),r.renderBufferDirect(C,null,D,X,w,null),w.onAfterShadow(r,w,b,C,D,X,null)}}const I=w.children;for(let D=0,B=I.length;D<B;D++)v(I[D],b,C,M,x)}function E(w){w.target.removeEventListener("dispose",E);for(const C in c){const M=c[C],x=w.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const f1={[Zu]:Ku,[Qu]:nh,[eh]:ih,[yo]:th,[Ku]:Zu,[nh]:Qu,[ih]:eh,[th]:yo};function p1(r,e){function t(){let P=!1;const K=new Ct;let k=null;const V=new Ct(0,0,0,0);return{setMask:function(ie){k!==ie&&!P&&(r.colorMask(ie,ie,ie,ie),k=ie)},setLocked:function(ie){P=ie},setClear:function(ie,le,De,Ke,st){st===!0&&(ie*=Ke,le*=Ke,De*=Ke),K.set(ie,le,De,Ke),V.equals(K)===!1&&(r.clearColor(ie,le,De,Ke),V.copy(K))},reset:function(){P=!1,k=null,V.set(-1,0,0,0)}}}function n(){let P=!1,K=!1,k=null,V=null,ie=null;return{setReversed:function(le){if(K!==le){const De=e.get("EXT_clip_control");le?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),K=le;const Ke=ie;ie=null,this.setClear(Ke)}},getReversed:function(){return K},setTest:function(le){le?ae(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(le){k!==le&&!P&&(r.depthMask(le),k=le)},setFunc:function(le){if(K&&(le=f1[le]),V!==le){switch(le){case Zu:r.depthFunc(r.NEVER);break;case Ku:r.depthFunc(r.ALWAYS);break;case Qu:r.depthFunc(r.LESS);break;case yo:r.depthFunc(r.LEQUAL);break;case eh:r.depthFunc(r.EQUAL);break;case th:r.depthFunc(r.GEQUAL);break;case nh:r.depthFunc(r.GREATER);break;case ih:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}V=le}},setLocked:function(le){P=le},setClear:function(le){ie!==le&&(K&&(le=1-le),r.clearDepth(le),ie=le)},reset:function(){P=!1,k=null,V=null,ie=null,K=!1}}}function i(){let P=!1,K=null,k=null,V=null,ie=null,le=null,De=null,Ke=null,st=null;return{setTest:function(me){P||(me?ae(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(me){K!==me&&!P&&(r.stencilMask(me),K=me)},setFunc:function(me,Se,Ve){(k!==me||V!==Se||ie!==Ve)&&(r.stencilFunc(me,Se,Ve),k=me,V=Se,ie=Ve)},setOp:function(me,Se,Ve){(le!==me||De!==Se||Ke!==Ve)&&(r.stencilOp(me,Se,Ve),le=me,De=Se,Ke=Ve)},setLocked:function(me){P=me},setClear:function(me){st!==me&&(r.clearStencil(me),st=me)},reset:function(){P=!1,K=null,k=null,V=null,ie=null,le=null,De=null,Ke=null,st=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,y=null,v=null,E=null,w=null,b=new et(0,0,0),C=0,M=!1,x=null,L=null,I=null,D=null,B=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,q=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=q>=2);let ne=null,U={};const ce=r.getParameter(r.SCISSOR_BOX),xe=r.getParameter(r.VIEWPORT),Fe=new Ct().fromArray(ce),Z=new Ct().fromArray(xe);function j(P,K,k,V){const ie=new Uint8Array(4),le=r.createTexture();r.bindTexture(P,le),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let De=0;De<k;De++)P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY?r.texImage3D(K,0,r.RGBA,1,1,V,0,r.RGBA,r.UNSIGNED_BYTE,ie):r.texImage2D(K+De,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ie);return le}const re={};re[r.TEXTURE_2D]=j(r.TEXTURE_2D,r.TEXTURE_2D,1),re[r.TEXTURE_CUBE_MAP]=j(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[r.TEXTURE_2D_ARRAY]=j(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),re[r.TEXTURE_3D]=j(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(r.DEPTH_TEST),o.setFunc(yo),Ye(!1),G(Ef),ae(r.CULL_FACE),F(Nr);function ae(P){u[P]!==!0&&(r.enable(P),u[P]=!0)}function Me(P){u[P]!==!1&&(r.disable(P),u[P]=!1)}function qe(P,K){return f[P]!==K?(r.bindFramebuffer(P,K),f[P]=K,P===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=K),P===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=K),!0):!1}function Ue(P,K){let k=d,V=!1;if(P){k=h.get(K),k===void 0&&(k=[],h.set(K,k));const ie=P.textures;if(k.length!==ie.length||k[0]!==r.COLOR_ATTACHMENT0){for(let le=0,De=ie.length;le<De;le++)k[le]=r.COLOR_ATTACHMENT0+le;k.length=ie.length,V=!0}}else k[0]!==r.BACK&&(k[0]=r.BACK,V=!0);V&&r.drawBuffers(k)}function tt(P){return g!==P?(r.useProgram(P),g=P,!0):!1}const it={[rs]:r.FUNC_ADD,[nv]:r.FUNC_SUBTRACT,[iv]:r.FUNC_REVERSE_SUBTRACT};it[rv]=r.MIN,it[sv]=r.MAX;const be={[ov]:r.ZERO,[av]:r.ONE,[lv]:r.SRC_COLOR,[ju]:r.SRC_ALPHA,[pv]:r.SRC_ALPHA_SATURATE,[dv]:r.DST_COLOR,[uv]:r.DST_ALPHA,[cv]:r.ONE_MINUS_SRC_COLOR,[Ju]:r.ONE_MINUS_SRC_ALPHA,[fv]:r.ONE_MINUS_DST_COLOR,[hv]:r.ONE_MINUS_DST_ALPHA,[mv]:r.CONSTANT_COLOR,[gv]:r.ONE_MINUS_CONSTANT_COLOR,[_v]:r.CONSTANT_ALPHA,[vv]:r.ONE_MINUS_CONSTANT_ALPHA};function F(P,K,k,V,ie,le,De,Ke,st,me){if(P===Nr){_===!0&&(Me(r.BLEND),_=!1);return}if(_===!1&&(ae(r.BLEND),_=!0),P!==tv){if(P!==m||me!==M){if((p!==rs||v!==rs)&&(r.blendEquation(r.FUNC_ADD),p=rs,v=rs),me)switch(P){case oo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ri:r.blendFunc(r.ONE,r.ONE);break;case wf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Af:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case oo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ri:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case wf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Af:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,y=null,E=null,w=null,b.set(0,0,0),C=0,m=P,M=me}return}ie=ie||K,le=le||k,De=De||V,(K!==p||ie!==v)&&(r.blendEquationSeparate(it[K],it[ie]),p=K,v=ie),(k!==S||V!==y||le!==E||De!==w)&&(r.blendFuncSeparate(be[k],be[V],be[le],be[De]),S=k,y=V,E=le,w=De),(Ke.equals(b)===!1||st!==C)&&(r.blendColor(Ke.r,Ke.g,Ke.b,st),b.copy(Ke),C=st),m=P,M=!1}function ht(P,K){P.side===Hi?Me(r.CULL_FACE):ae(r.CULL_FACE);let k=P.side===$n;K&&(k=!k),Ye(k),P.blending===oo&&P.transparent===!1?F(Nr):F(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),s.setMask(P.colorWrite);const V=P.stencilWrite;a.setTest(V),V&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),lt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ae(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(P){x!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),x=P)}function G(P){P!==K0?(ae(r.CULL_FACE),P!==L&&(P===Ef?r.cullFace(r.BACK):P===Q0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),L=P}function Te(P){P!==I&&(W&&r.lineWidth(P),I=P)}function lt(P,K,k){P?(ae(r.POLYGON_OFFSET_FILL),(D!==K||B!==k)&&(r.polygonOffset(K,k),D=K,B=k)):Me(r.POLYGON_OFFSET_FILL)}function Ae(P){P?ae(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function R(P){P===void 0&&(P=r.TEXTURE0+X-1),ne!==P&&(r.activeTexture(P),ne=P)}function T(P,K,k){k===void 0&&(ne===null?k=r.TEXTURE0+X-1:k=ne);let V=U[k];V===void 0&&(V={type:void 0,texture:void 0},U[k]=V),(V.type!==P||V.texture!==K)&&(ne!==k&&(r.activeTexture(k),ne=k),r.bindTexture(P,K||re[P]),V.type=P,V.texture=K)}function Y(){const P=U[ne];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ee(){try{r.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{r.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{r.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{r.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{r.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{r.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{r.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{r.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{r.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ge(){try{r.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Oe(P){Fe.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),Fe.copy(P))}function ye(P){Z.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),Z.copy(P))}function Qe(P,K){let k=c.get(K);k===void 0&&(k=new WeakMap,c.set(K,k));let V=k.get(P);V===void 0&&(V=r.getUniformBlockIndex(K,P.name),k.set(P,V))}function $e(P,K){const V=c.get(K).get(P);l.get(K)!==V&&(r.uniformBlockBinding(K,V,P.__bindingPointIndex),l.set(K,V))}function dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ne=null,U={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,y=null,v=null,E=null,w=null,b=new et(0,0,0),C=0,M=!1,x=null,L=null,I=null,D=null,B=null,Fe.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:Me,bindFramebuffer:qe,drawBuffers:Ue,useProgram:tt,setBlending:F,setMaterial:ht,setFlipSided:Ye,setCullFace:G,setLineWidth:Te,setPolygonOffset:lt,setScissorTest:Ae,activeTexture:R,bindTexture:T,unbindTexture:Y,compressedTexImage2D:ee,compressedTexImage3D:te,texImage2D:fe,texImage3D:Ge,updateUBOMapping:Qe,uniformBlockBinding:$e,texStorage2D:Le,texStorage3D:se,texSubImage2D:Q,texSubImage3D:de,compressedTexSubImage2D:ue,compressedTexSubImage3D:Pe,scissor:Oe,viewport:ye,reset:dt}}function m1(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,T){return d?new OffscreenCanvas(R,T):Ql("canvas")}function _(R,T,Y){let ee=1;const te=Ae(R);if((te.width>Y||te.height>Y)&&(ee=Y/Math.max(te.width,te.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(ee*te.width),de=Math.floor(ee*te.height);f===void 0&&(f=g(Q,de));const ue=T?g(Q,de):f;return ue.width=Q,ue.height=de,ue.getContext("2d").drawImage(R,0,0,Q,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Q+"x"+de+")."),ue}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(R,T,Y,ee,te=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=T;if(T===r.RED&&(Y===r.FLOAT&&(Q=r.R32F),Y===r.HALF_FLOAT&&(Q=r.R16F),Y===r.UNSIGNED_BYTE&&(Q=r.R8)),T===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(Q=r.R8UI),Y===r.UNSIGNED_SHORT&&(Q=r.R16UI),Y===r.UNSIGNED_INT&&(Q=r.R32UI),Y===r.BYTE&&(Q=r.R8I),Y===r.SHORT&&(Q=r.R16I),Y===r.INT&&(Q=r.R32I)),T===r.RG&&(Y===r.FLOAT&&(Q=r.RG32F),Y===r.HALF_FLOAT&&(Q=r.RG16F),Y===r.UNSIGNED_BYTE&&(Q=r.RG8)),T===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(Q=r.RG8UI),Y===r.UNSIGNED_SHORT&&(Q=r.RG16UI),Y===r.UNSIGNED_INT&&(Q=r.RG32UI),Y===r.BYTE&&(Q=r.RG8I),Y===r.SHORT&&(Q=r.RG16I),Y===r.INT&&(Q=r.RG32I)),T===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),Y===r.UNSIGNED_INT&&(Q=r.RGB32UI),Y===r.BYTE&&(Q=r.RGB8I),Y===r.SHORT&&(Q=r.RGB16I),Y===r.INT&&(Q=r.RGB32I)),T===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),Y===r.UNSIGNED_INT&&(Q=r.RGBA32UI),Y===r.BYTE&&(Q=r.RGBA8I),Y===r.SHORT&&(Q=r.RGBA16I),Y===r.INT&&(Q=r.RGBA32I)),T===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),T===r.RGBA){const de=te?Zl:Mt.getTransfer(ee);Y===r.FLOAT&&(Q=r.RGBA32F),Y===r.HALF_FLOAT&&(Q=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(Q=de===wt?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(R,T){let Y;return R?T===null||T===Ms||T===ba?Y=r.DEPTH24_STENCIL8:T===lr?Y=r.DEPTH32F_STENCIL8:T===Ma&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ms||T===ba?Y=r.DEPTH_COMPONENT24:T===lr?Y=r.DEPTH_COMPONENT32F:T===Ma&&(Y=r.DEPTH_COMPONENT16),Y}function E(R,T){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Fi&&R.minFilter!==Xi?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function w(R){const T=R.target;T.removeEventListener("dispose",w),C(T),T.isVideoTexture&&u.delete(T)}function b(R){const T=R.target;T.removeEventListener("dispose",b),x(T)}function C(R){const T=n.get(R);if(T.__webglInit===void 0)return;const Y=R.source,ee=h.get(Y);if(ee){const te=ee[T.__cacheKey];te.usedTimes--,te.usedTimes===0&&M(R),Object.keys(ee).length===0&&h.delete(Y)}n.remove(R)}function M(R){const T=n.get(R);r.deleteTexture(T.__webglTexture);const Y=R.source,ee=h.get(Y);delete ee[T.__cacheKey],o.memory.textures--}function x(R){const T=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(T.__webglFramebuffer[ee]))for(let te=0;te<T.__webglFramebuffer[ee].length;te++)r.deleteFramebuffer(T.__webglFramebuffer[ee][te]);else r.deleteFramebuffer(T.__webglFramebuffer[ee]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let ee=0;ee<T.__webglFramebuffer.length;ee++)r.deleteFramebuffer(T.__webglFramebuffer[ee]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ee=0;ee<T.__webglColorRenderbuffer.length;ee++)T.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ee]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Y=R.textures;for(let ee=0,te=Y.length;ee<te;ee++){const Q=n.get(Y[ee]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(Y[ee])}n.remove(R)}let L=0;function I(){L=0}function D(){const R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function B(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function X(R,T){const Y=n.get(R);if(R.isVideoTexture&&Te(R),R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(Y,R,T);return}}t.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+T)}function W(R,T){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){Z(Y,R,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+T)}function q(R,T){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){Z(Y,R,T);return}t.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+T)}function H(R,T){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){j(Y,R,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+T)}const ne={[oh]:r.REPEAT,[ls]:r.CLAMP_TO_EDGE,[ah]:r.MIRRORED_REPEAT},U={[Fi]:r.NEAREST,[Cv]:r.NEAREST_MIPMAP_NEAREST,[qa]:r.NEAREST_MIPMAP_LINEAR,[Xi]:r.LINEAR,[Bc]:r.LINEAR_MIPMAP_NEAREST,[cs]:r.LINEAR_MIPMAP_LINEAR},ce={[Dv]:r.NEVER,[Bv]:r.ALWAYS,[Iv]:r.LESS,[wg]:r.LEQUAL,[Uv]:r.EQUAL,[Ov]:r.GEQUAL,[Nv]:r.GREATER,[Fv]:r.NOTEQUAL};function xe(R,T){if(T.type===lr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Xi||T.magFilter===Bc||T.magFilter===qa||T.magFilter===cs||T.minFilter===Xi||T.minFilter===Bc||T.minFilter===qa||T.minFilter===cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ne[T.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ne[T.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ne[T.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,U[T.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ce[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Fi||T.minFilter!==qa&&T.minFilter!==cs||T.type===lr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Fe(R,T){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",w));const ee=T.source;let te=h.get(ee);te===void 0&&(te={},h.set(ee,te));const Q=B(T);if(Q!==R.__cacheKey){te[Q]===void 0&&(te[Q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),te[Q].usedTimes++;const de=te[R.__cacheKey];de!==void 0&&(te[R.__cacheKey].usedTimes--,de.usedTimes===0&&M(T)),R.__cacheKey=Q,R.__webglTexture=te[Q].texture}return Y}function Z(R,T,Y){let ee=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ee=r.TEXTURE_3D);const te=Fe(R,T),Q=T.source;t.bindTexture(ee,R.__webglTexture,r.TEXTURE0+Y);const de=n.get(Q);if(Q.version!==de.__version||te===!0){t.activeTexture(r.TEXTURE0+Y);const ue=Mt.getPrimaries(Mt.workingColorSpace),Pe=T.colorSpace===wr?null:Mt.getPrimaries(T.colorSpace),Le=T.colorSpace===wr||ue===Pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let se=_(T.image,!1,i.maxTextureSize);se=lt(T,se);const fe=s.convert(T.format,T.colorSpace),Ge=s.convert(T.type);let Oe=y(T.internalFormat,fe,Ge,T.colorSpace,T.isVideoTexture);xe(ee,T);let ye;const Qe=T.mipmaps,$e=T.isVideoTexture!==!0,dt=de.__version===void 0||te===!0,P=Q.dataReady,K=E(T,se);if(T.isDepthTexture)Oe=v(T.format===Ea,T.type),dt&&($e?t.texStorage2D(r.TEXTURE_2D,1,Oe,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,Oe,se.width,se.height,0,fe,Ge,null));else if(T.isDataTexture)if(Qe.length>0){$e&&dt&&t.texStorage2D(r.TEXTURE_2D,K,Oe,Qe[0].width,Qe[0].height);for(let k=0,V=Qe.length;k<V;k++)ye=Qe[k],$e?P&&t.texSubImage2D(r.TEXTURE_2D,k,0,0,ye.width,ye.height,fe,Ge,ye.data):t.texImage2D(r.TEXTURE_2D,k,Oe,ye.width,ye.height,0,fe,Ge,ye.data);T.generateMipmaps=!1}else $e?(dt&&t.texStorage2D(r.TEXTURE_2D,K,Oe,se.width,se.height),P&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,fe,Ge,se.data)):t.texImage2D(r.TEXTURE_2D,0,Oe,se.width,se.height,0,fe,Ge,se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){$e&&dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,K,Oe,Qe[0].width,Qe[0].height,se.depth);for(let k=0,V=Qe.length;k<V;k++)if(ye=Qe[k],T.format!==Ni)if(fe!==null)if($e){if(P)if(T.layerUpdates.size>0){const ie=cp(ye.width,ye.height,T.format,T.type);for(const le of T.layerUpdates){const De=ye.data.subarray(le*ie/ye.data.BYTES_PER_ELEMENT,(le+1)*ie/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,k,0,0,le,ye.width,ye.height,1,fe,De)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,k,0,0,0,ye.width,ye.height,se.depth,fe,ye.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,k,Oe,ye.width,ye.height,se.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?P&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,k,0,0,0,ye.width,ye.height,se.depth,fe,Ge,ye.data):t.texImage3D(r.TEXTURE_2D_ARRAY,k,Oe,ye.width,ye.height,se.depth,0,fe,Ge,ye.data)}else{$e&&dt&&t.texStorage2D(r.TEXTURE_2D,K,Oe,Qe[0].width,Qe[0].height);for(let k=0,V=Qe.length;k<V;k++)ye=Qe[k],T.format!==Ni?fe!==null?$e?P&&t.compressedTexSubImage2D(r.TEXTURE_2D,k,0,0,ye.width,ye.height,fe,ye.data):t.compressedTexImage2D(r.TEXTURE_2D,k,Oe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?P&&t.texSubImage2D(r.TEXTURE_2D,k,0,0,ye.width,ye.height,fe,Ge,ye.data):t.texImage2D(r.TEXTURE_2D,k,Oe,ye.width,ye.height,0,fe,Ge,ye.data)}else if(T.isDataArrayTexture)if($e){if(dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,K,Oe,se.width,se.height,se.depth),P)if(T.layerUpdates.size>0){const k=cp(se.width,se.height,T.format,T.type);for(const V of T.layerUpdates){const ie=se.data.subarray(V*k/se.data.BYTES_PER_ELEMENT,(V+1)*k/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,V,se.width,se.height,1,fe,Ge,ie)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,fe,Ge,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Oe,se.width,se.height,se.depth,0,fe,Ge,se.data);else if(T.isData3DTexture)$e?(dt&&t.texStorage3D(r.TEXTURE_3D,K,Oe,se.width,se.height,se.depth),P&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,fe,Ge,se.data)):t.texImage3D(r.TEXTURE_3D,0,Oe,se.width,se.height,se.depth,0,fe,Ge,se.data);else if(T.isFramebufferTexture){if(dt)if($e)t.texStorage2D(r.TEXTURE_2D,K,Oe,se.width,se.height);else{let k=se.width,V=se.height;for(let ie=0;ie<K;ie++)t.texImage2D(r.TEXTURE_2D,ie,Oe,k,V,0,fe,Ge,null),k>>=1,V>>=1}}else if(Qe.length>0){if($e&&dt){const k=Ae(Qe[0]);t.texStorage2D(r.TEXTURE_2D,K,Oe,k.width,k.height)}for(let k=0,V=Qe.length;k<V;k++)ye=Qe[k],$e?P&&t.texSubImage2D(r.TEXTURE_2D,k,0,0,fe,Ge,ye):t.texImage2D(r.TEXTURE_2D,k,Oe,fe,Ge,ye);T.generateMipmaps=!1}else if($e){if(dt){const k=Ae(se);t.texStorage2D(r.TEXTURE_2D,K,Oe,k.width,k.height)}P&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe,Ge,se)}else t.texImage2D(r.TEXTURE_2D,0,Oe,fe,Ge,se);m(T)&&p(ee),de.__version=Q.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function j(R,T,Y){if(T.image.length!==6)return;const ee=Fe(R,T),te=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+Y);const Q=n.get(te);if(te.version!==Q.__version||ee===!0){t.activeTexture(r.TEXTURE0+Y);const de=Mt.getPrimaries(Mt.workingColorSpace),ue=T.colorSpace===wr?null:Mt.getPrimaries(T.colorSpace),Pe=T.colorSpace===wr||de===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Le=T.isCompressedTexture||T.image[0].isCompressedTexture,se=T.image[0]&&T.image[0].isDataTexture,fe=[];for(let V=0;V<6;V++)!Le&&!se?fe[V]=_(T.image[V],!0,i.maxCubemapSize):fe[V]=se?T.image[V].image:T.image[V],fe[V]=lt(T,fe[V]);const Ge=fe[0],Oe=s.convert(T.format,T.colorSpace),ye=s.convert(T.type),Qe=y(T.internalFormat,Oe,ye,T.colorSpace),$e=T.isVideoTexture!==!0,dt=Q.__version===void 0||ee===!0,P=te.dataReady;let K=E(T,Ge);xe(r.TEXTURE_CUBE_MAP,T);let k;if(Le){$e&&dt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,K,Qe,Ge.width,Ge.height);for(let V=0;V<6;V++){k=fe[V].mipmaps;for(let ie=0;ie<k.length;ie++){const le=k[ie];T.format!==Ni?Oe!==null?$e?P&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ie,0,0,le.width,le.height,Oe,le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ie,Qe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ie,0,0,le.width,le.height,Oe,ye,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ie,Qe,le.width,le.height,0,Oe,ye,le.data)}}}else{if(k=T.mipmaps,$e&&dt){k.length>0&&K++;const V=Ae(fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,K,Qe,V.width,V.height)}for(let V=0;V<6;V++)if(se){$e?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,fe[V].width,fe[V].height,Oe,ye,fe[V].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Qe,fe[V].width,fe[V].height,0,Oe,ye,fe[V].data);for(let ie=0;ie<k.length;ie++){const De=k[ie].image[V].image;$e?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ie+1,0,0,De.width,De.height,Oe,ye,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ie+1,Qe,De.width,De.height,0,Oe,ye,De.data)}}else{$e?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Oe,ye,fe[V]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Qe,Oe,ye,fe[V]);for(let ie=0;ie<k.length;ie++){const le=k[ie];$e?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ie+1,0,0,Oe,ye,le.image[V]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ie+1,Qe,Oe,ye,le.image[V])}}}m(T)&&p(r.TEXTURE_CUBE_MAP),Q.__version=te.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function re(R,T,Y,ee,te,Q){const de=s.convert(Y.format,Y.colorSpace),ue=s.convert(Y.type),Pe=y(Y.internalFormat,de,ue,Y.colorSpace),Le=n.get(T),se=n.get(Y);if(se.__renderTarget=T,!Le.__hasExternalTextures){const fe=Math.max(1,T.width>>Q),Ge=Math.max(1,T.height>>Q);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,Q,Pe,fe,Ge,T.depth,0,de,ue,null):t.texImage2D(te,Q,Pe,fe,Ge,0,de,ue,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),G(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,te,se.__webglTexture,0,Ye(T)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,te,se.__webglTexture,Q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ae(R,T,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,R),T.depthBuffer){const ee=T.depthTexture,te=ee&&ee.isDepthTexture?ee.type:null,Q=v(T.stencilBuffer,te),de=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=Ye(T);G(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue,Q,T.width,T.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,Q,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Q,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,R)}else{const ee=T.textures;for(let te=0;te<ee.length;te++){const Q=ee[te],de=s.convert(Q.format,Q.colorSpace),ue=s.convert(Q.type),Pe=y(Q.internalFormat,de,ue,Q.colorSpace),Le=Ye(T);Y&&G(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,Pe,T.width,T.height):G(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Le,Pe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Pe,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Me(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(T.depthTexture);ee.__renderTarget=T,(!ee.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),X(T.depthTexture,0);const te=ee.__webglTexture,Q=Ye(T);if(T.depthTexture.format===Ta)G(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(T.depthTexture.format===Ea)G(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function qe(R){const T=n.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const ee=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ee){const te=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ee.removeEventListener("dispose",te)};ee.addEventListener("dispose",te),T.__depthDisposeCallback=te}T.__boundDepthTexture=ee}if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const ee=R.texture.mipmaps;ee&&ee.length>0?Me(T.__webglFramebuffer[0],R):Me(T.__webglFramebuffer,R)}else if(Y){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]===void 0)T.__webglDepthbuffer[ee]=r.createRenderbuffer(),ae(T.__webglDepthbuffer[ee],R,!1);else{const te=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer[ee];r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,Q)}}else{const ee=R.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),ae(T.__webglDepthbuffer,R,!1);else{const te=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,Q)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(R,T,Y){const ee=n.get(R);T!==void 0&&re(ee.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&qe(R)}function tt(R){const T=R.texture,Y=n.get(R),ee=n.get(T);R.addEventListener("dispose",b);const te=R.textures,Q=R.isWebGLCubeRenderTarget===!0,de=te.length>1;if(de||(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=T.version,o.memory.textures++),Q){Y.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[ue]=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)Y.__webglFramebuffer[ue][Pe]=r.createFramebuffer()}else Y.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ue=0;ue<T.mipmaps.length;ue++)Y.__webglFramebuffer[ue]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(de)for(let ue=0,Pe=te.length;ue<Pe;ue++){const Le=n.get(te[ue]);Le.__webglTexture===void 0&&(Le.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&G(R)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const Pe=te[ue];Y.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[ue]);const Le=s.convert(Pe.format,Pe.colorSpace),se=s.convert(Pe.type),fe=y(Pe.internalFormat,Le,se,Pe.colorSpace,R.isXRRenderTarget===!0),Ge=Ye(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,fe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,Y.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),ae(Y.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),xe(r.TEXTURE_CUBE_MAP,T);for(let ue=0;ue<6;ue++)if(T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)re(Y.__webglFramebuffer[ue][Pe],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe);else re(Y.__webglFramebuffer[ue],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(T)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ue=0,Pe=te.length;ue<Pe;ue++){const Le=te[ue],se=n.get(Le);t.bindTexture(r.TEXTURE_2D,se.__webglTexture),xe(r.TEXTURE_2D,Le),re(Y.__webglFramebuffer,R,Le,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,0),m(Le)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let ue=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,ee.__webglTexture),xe(ue,T),T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)re(Y.__webglFramebuffer[Pe],R,T,r.COLOR_ATTACHMENT0,ue,Pe);else re(Y.__webglFramebuffer,R,T,r.COLOR_ATTACHMENT0,ue,0);m(T)&&p(ue),t.unbindTexture()}R.depthBuffer&&qe(R)}function it(R){const T=R.textures;for(let Y=0,ee=T.length;Y<ee;Y++){const te=T[Y];if(m(te)){const Q=S(R),de=n.get(te).__webglTexture;t.bindTexture(Q,de),p(Q),t.unbindTexture()}}}const be=[],F=[];function ht(R){if(R.samples>0){if(G(R)===!1){const T=R.textures,Y=R.width,ee=R.height;let te=r.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=n.get(R),ue=T.length>1;if(ue)for(let Le=0;Le<T.length;Le++)t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const Pe=R.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Le=0;Le<T.length;Le++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,de.__webglColorRenderbuffer[Le]);const se=n.get(T[Le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,se,0)}r.blitFramebuffer(0,0,Y,ee,0,0,Y,ee,te,r.NEAREST),l===!0&&(be.length=0,F.length=0,be.push(r.COLOR_ATTACHMENT0+Le),R.depthBuffer&&R.resolveDepthBuffer===!1&&(be.push(Q),F.push(Q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,F)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let Le=0;Le<T.length;Le++){t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,de.__webglColorRenderbuffer[Le]);const se=n.get(T[Le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const T=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Ye(R){return Math.min(i.maxSamples,R.samples)}function G(R){const T=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Te(R){const T=o.render.frame;u.get(R)!==T&&(u.set(R,T),R.update())}function lt(R,T){const Y=R.colorSpace,ee=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Y!==bo&&Y!==wr&&(Mt.getTransfer(Y)===wt?(ee!==Ni||te!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}function Ae(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=I,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=q,this.setTextureCube=H,this.rebindTextures=Ue,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=re,this.useMultisampledRTT=G}function g1(r,e){function t(n,i=wr){let s;const o=Mt.getTransfer(i);if(n===$i)return r.UNSIGNED_BYTE;if(n===xd)return r.UNSIGNED_SHORT_4_4_4_4;if(n===yd)return r.UNSIGNED_SHORT_5_5_5_1;if(n===xg)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===_g)return r.BYTE;if(n===vg)return r.SHORT;if(n===Ma)return r.UNSIGNED_SHORT;if(n===vd)return r.INT;if(n===Ms)return r.UNSIGNED_INT;if(n===lr)return r.FLOAT;if(n===Ra)return r.HALF_FLOAT;if(n===yg)return r.ALPHA;if(n===Sg)return r.RGB;if(n===Ni)return r.RGBA;if(n===Ta)return r.DEPTH_COMPONENT;if(n===Ea)return r.DEPTH_STENCIL;if(n===Mg)return r.RED;if(n===Sd)return r.RED_INTEGER;if(n===bg)return r.RG;if(n===Md)return r.RG_INTEGER;if(n===bd)return r.RGBA_INTEGER;if(n===Ll||n===Dl||n===Il||n===Ul)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ll)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ll)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Il)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ul)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lh||n===ch||n===uh||n===hh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===lh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ch)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dh||n===fh||n===ph)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===dh||n===fh)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ph)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mh||n===gh||n===_h||n===vh||n===xh||n===yh||n===Sh||n===Mh||n===bh||n===Th||n===Eh||n===wh||n===Ah||n===Ch)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===mh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_h)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Th)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ah)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ch)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nl||n===Rh||n===Ph)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Nl)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ph)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tg||n===Lh||n===Dh||n===Ih)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Nl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Lh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ih)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ba?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const _1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v1=`
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

}`;class x1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new zn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new jn({vertexShader:_1,fragmentShader:v1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new Br(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y1 extends wo{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new x1,m=t.getContextAttributes();let p=null,S=null;const y=[],v=[],E=new Ne;let w=null;const b=new Gn;b.viewport=new Ct;const C=new Gn;C.viewport=new Ct;const M=[b,C],x=new kx;let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=y[Z];return j===void 0&&(j=new ou,y[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=y[Z];return j===void 0&&(j=new ou,y[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=y[Z];return j===void 0&&(j=new ou,y[Z]=j),j.getHandSpace()};function D(Z){const j=v.indexOf(Z.inputSource);if(j===-1)return;const re=y[j];re!==void 0&&(re.update(Z.inputSource,Z.frame,c||o),re.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",X);for(let Z=0;Z<y.length;Z++){const j=v[Z];j!==null&&(v[Z]=null,y[Z].disconnect(j))}L=null,I=null,_.reset(),e.setRenderTarget(p),d=null,h=null,f=null,i=null,S=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",B),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,ae=null,Me=null;m.depth&&(Me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=m.stencil?Ea:Ta,ae=m.stencil?ba:Ms);const qe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(qe),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new bs(h.textureWidth,h.textureHeight,{format:Ni,type:$i,depthTexture:new zg(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new bs(d.framebufferWidth,d.framebufferHeight,{format:Ni,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Fe.setContext(i),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(Z){for(let j=0;j<Z.removed.length;j++){const re=Z.removed[j],ae=v.indexOf(re);ae>=0&&(v[ae]=null,y[ae].disconnect(re))}for(let j=0;j<Z.added.length;j++){const re=Z.added[j];let ae=v.indexOf(re);if(ae===-1){for(let qe=0;qe<y.length;qe++)if(qe>=v.length){v.push(re),ae=qe;break}else if(v[qe]===null){v[qe]=re,ae=qe;break}if(ae===-1)break}const Me=y[ae];Me&&Me.connect(re)}}const W=new N,q=new N;function H(Z,j,re){W.setFromMatrixPosition(j.matrixWorld),q.setFromMatrixPosition(re.matrixWorld);const ae=W.distanceTo(q),Me=j.projectionMatrix.elements,qe=re.projectionMatrix.elements,Ue=Me[14]/(Me[10]-1),tt=Me[14]/(Me[10]+1),it=(Me[9]+1)/Me[5],be=(Me[9]-1)/Me[5],F=(Me[8]-1)/Me[0],ht=(qe[8]+1)/qe[0],Ye=Ue*F,G=Ue*ht,Te=ae/(-F+ht),lt=Te*-F;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(lt),Z.translateZ(Te),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Me[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Ae=Ue+Te,R=tt+Te,T=Ye-lt,Y=G+(ae-lt),ee=it*tt/R*Ae,te=be*tt/R*Ae;Z.projectionMatrix.makePerspective(T,Y,ee,te,Ae,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ne(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let j=Z.near,re=Z.far;_.texture!==null&&(_.depthNear>0&&(j=_.depthNear),_.depthFar>0&&(re=_.depthFar)),x.near=C.near=b.near=j,x.far=C.far=b.far=re,(L!==x.near||I!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,I=x.far),b.layers.mask=Z.layers.mask|2,C.layers.mask=Z.layers.mask|4,x.layers.mask=b.layers.mask|C.layers.mask;const ae=Z.parent,Me=x.cameras;ne(x,ae);for(let qe=0;qe<Me.length;qe++)ne(Me[qe],ae);Me.length===2?H(x,b,C):x.projectionMatrix.copy(b.projectionMatrix),U(Z,x,ae)};function U(Z,j,re){re===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(re.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Nh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ce=null;function xe(Z,j){if(u=j.getViewerPose(c||o),g=j,u!==null){const re=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let ae=!1;re.length!==x.cameras.length&&(x.cameras.length=0,ae=!0);for(let Ue=0;Ue<re.length;Ue++){const tt=re[Ue];let it=null;if(d!==null)it=d.getViewport(tt);else{const F=f.getViewSubImage(h,tt);it=F.viewport,Ue===0&&(e.setRenderTargetTextures(S,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(S))}let be=M[Ue];be===void 0&&(be=new Gn,be.layers.enable(Ue),be.viewport=new Ct,M[Ue]=be),be.matrix.fromArray(tt.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(tt.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(it.x,it.y,it.width,it.height),Ue===0&&(x.matrix.copy(be.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ae===!0&&x.cameras.push(be)}const Me=i.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&f){const Ue=f.getDepthInformation(re[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(e,Ue,i.renderState)}}for(let re=0;re<y.length;re++){const ae=v[re],Me=y[re];ae!==null&&Me!==void 0&&Me.update(ae,j,c||o)}ce&&ce(Z,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Fe=new qg;Fe.setAnimationLoop(xe),this.setAnimationLoop=function(Z){ce=Z},this.dispose=function(){}}}const Qr=new ji,S1=new Rt;function M1(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Dg(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$n&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$n&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),y=S.envMap,v=S.envMapRotation;y&&(m.envMap.value=y,Qr.copy(v),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),m.envMapRotation.value.setFromMatrix4(S1.makeRotationFromEuler(Qr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$n&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function b1(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const v=y.program;n.uniformBlockBinding(S,v)}function c(S,y){let v=i[S.id];v===void 0&&(g(S),v=u(S),i[S.id]=v,S.addEventListener("dispose",m));const E=y.program;n.updateUBOMapping(S,E);const w=e.render.frame;s[S.id]!==w&&(h(S),s[S.id]=w)}function u(S){const y=f();S.__bindingPointIndex=y;const v=r.createBuffer(),E=S.__size,w=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,E,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const y=i[S.id],v=S.uniforms,E=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,b=v.length;w<b;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,x=C.length;M<x;M++){const L=C[M];if(d(L,w,M,E)===!0){const I=L.__offset,D=Array.isArray(L.value)?L.value:[L.value];let B=0;for(let X=0;X<D.length;X++){const W=D[X],q=_(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,I+B,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,B),B+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,y,v,E){const w=S.value,b=y+"_"+v;if(E[b]===void 0)return typeof w=="number"||typeof w=="boolean"?E[b]=w:E[b]=w.clone(),!0;{const C=E[b];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return E[b]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(S){const y=S.uniforms;let v=0;const E=16;for(let b=0,C=y.length;b<C;b++){const M=Array.isArray(y[b])?y[b]:[y[b]];for(let x=0,L=M.length;x<L;x++){const I=M[x],D=Array.isArray(I.value)?I.value:[I.value];for(let B=0,X=D.length;B<X;B++){const W=D[B],q=_(W),H=v%E,ne=H%q.boundary,U=H+ne;v+=ne,U!==0&&E-U<q.storage&&(v+=E-U),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=q.storage}}}const w=v%E;return w>0&&(v+=E-w),S.__size=v,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Zg{constructor(e={}){const{canvas:t=kv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=yi;let w=0,b=0,C=null,M=-1,x=null;const L=new Ct,I=new Ct;let D=null;const B=new et(0);let X=0,W=t.width,q=t.height,H=1,ne=null,U=null;const ce=new Ct(0,0,W,q),xe=new Ct(0,0,W,q);let Fe=!1;const Z=new wd;let j=!1,re=!1;const ae=new Rt,Me=new Rt,qe=new N,Ue=new Ct,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function be(){return C===null?H:1}let F=n;function ht(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_d}`),t.addEventListener("webglcontextlost",V,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",le,!1),F===null){const z="webgl2";if(F=ht(z,A),F===null)throw ht(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ye,G,Te,lt,Ae,R,T,Y,ee,te,Q,de,ue,Pe,Le,se,fe,Ge,Oe,ye,Qe,$e,dt,P;function K(){Ye=new UM(F),Ye.init(),$e=new g1(F,Ye),G=new AM(F,Ye,e,$e),Te=new p1(F,Ye),G.reverseDepthBuffer&&h&&Te.buffers.depth.setReversed(!0),lt=new OM(F),Ae=new t1,R=new m1(F,Ye,Te,Ae,G,$e,lt),T=new RM(v),Y=new IM(v),ee=new Vx(F),dt=new EM(F,ee),te=new NM(F,ee,lt,dt),Q=new zM(F,te,ee,lt),Oe=new BM(F,G,R),se=new CM(Ae),de=new e1(v,T,Y,Ye,G,dt,se),ue=new M1(v,Ae),Pe=new i1,Le=new c1(Ye),Ge=new TM(v,T,Y,Te,Q,d,l),fe=new d1(v,Q,G),P=new b1(F,lt,G,Te),ye=new wM(F,Ye,lt),Qe=new FM(F,Ye,lt),lt.programs=de.programs,v.capabilities=G,v.extensions=Ye,v.properties=Ae,v.renderLists=Pe,v.shadowMap=fe,v.state=Te,v.info=lt}K();const k=new y1(v,F);this.xr=k,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=Ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(W,q,!1))},this.getSize=function(A){return A.set(W,q)},this.setSize=function(A,z,J=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,q=z,t.width=Math.floor(A*H),t.height=Math.floor(z*H),J===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(W*H,q*H).floor()},this.setDrawingBufferSize=function(A,z,J){W=A,q=z,H=J,t.width=Math.floor(A*J),t.height=Math.floor(z*J),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(ce)},this.setViewport=function(A,z,J,$){A.isVector4?ce.set(A.x,A.y,A.z,A.w):ce.set(A,z,J,$),Te.viewport(L.copy(ce).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(xe)},this.setScissor=function(A,z,J,$){A.isVector4?xe.set(A.x,A.y,A.z,A.w):xe.set(A,z,J,$),Te.scissor(I.copy(xe).multiplyScalar(H).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(A){Te.setScissorTest(Fe=A)},this.setOpaqueSort=function(A){ne=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,J=!0){let $=0;if(A){let O=!1;if(C!==null){const oe=C.texture.format;O=oe===bd||oe===Md||oe===Sd}if(O){const oe=C.texture.type,_e=oe===$i||oe===Ms||oe===Ma||oe===ba||oe===xd||oe===yd,Ce=Ge.getClearColor(),we=Ge.getClearAlpha(),ke=Ce.r,je=Ce.g,Be=Ce.b;_e?(g[0]=ke,g[1]=je,g[2]=Be,g[3]=we,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=ke,_[1]=je,_[2]=Be,_[3]=we,F.clearBufferiv(F.COLOR,0,_))}else $|=F.COLOR_BUFFER_BIT}z&&($|=F.DEPTH_BUFFER_BIT),J&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",V,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Ge.dispose(),Pe.dispose(),Le.dispose(),Ae.dispose(),T.dispose(),Y.dispose(),Q.dispose(),dt.dispose(),P.dispose(),de.dispose(),k.dispose(),k.removeEventListener("sessionstart",ge),k.removeEventListener("sessionend",We),Ie.stop()};function V(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=lt.autoReset,z=fe.enabled,J=fe.autoUpdate,$=fe.needsUpdate,O=fe.type;K(),lt.autoReset=A,fe.enabled=z,fe.autoUpdate=J,fe.needsUpdate=$,fe.type=O}function le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function De(A){const z=A.target;z.removeEventListener("dispose",De),Ke(z)}function Ke(A){st(A),Ae.remove(A)}function st(A){const z=Ae.get(A).programs;z!==void 0&&(z.forEach(function(J){de.releaseProgram(J)}),A.isShaderMaterial&&de.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,J,$,O,oe){z===null&&(z=tt);const _e=O.isMesh&&O.matrixWorld.determinant()<0,Ce=Kn(A,z,J,$,O);Te.setMaterial($,_e);let we=J.index,ke=1;if($.wireframe===!0){if(we=te.getWireframeAttribute(J),we===void 0)return;ke=2}const je=J.drawRange,Be=J.attributes.position;let nt=je.start*ke,bt=(je.start+je.count)*ke;oe!==null&&(nt=Math.max(nt,oe.start*ke),bt=Math.min(bt,(oe.start+oe.count)*ke)),we!==null?(nt=Math.max(nt,0),bt=Math.min(bt,we.count)):Be!=null&&(nt=Math.max(nt,0),bt=Math.min(bt,Be.count));const Yt=bt-nt;if(Yt<0||Yt===1/0)return;dt.setup(O,$,Ce,J,we);let Gt,St=ye;if(we!==null&&(Gt=ee.get(we),St=Qe,St.setIndex(Gt)),O.isMesh)$.wireframe===!0?(Te.setLineWidth($.wireframeLinewidth*be()),St.setMode(F.LINES)):St.setMode(F.TRIANGLES);else if(O.isLine){let Je=$.linewidth;Je===void 0&&(Je=1),Te.setLineWidth(Je*be()),O.isLineSegments?St.setMode(F.LINES):O.isLineLoop?St.setMode(F.LINE_LOOP):St.setMode(F.LINE_STRIP)}else O.isPoints?St.setMode(F.POINTS):O.isSprite&&St.setMode(F.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Fl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))St.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Je=O._multiDrawStarts,fn=O._multiDrawCounts,Tt=O._multiDrawCount,Ri=we?ee.get(we).bytesPerElement:1,Es=Ae.get($).currentProgram.getUniforms();for(let Qn=0;Qn<Tt;Qn++)Es.setValue(F,"_gl_DrawID",Qn),St.render(Je[Qn]/Ri,fn[Qn])}else if(O.isInstancedMesh)St.renderInstances(nt,Yt,O.count);else if(J.isInstancedBufferGeometry){const Je=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,fn=Math.min(J.instanceCount,Je);St.renderInstances(nt,Yt,fn)}else St.render(nt,Yt)};function me(A,z,J){A.transparent===!0&&A.side===Hi&&A.forceSinglePass===!1?(A.side=$n,A.needsUpdate=!0,mt(A,z,J),A.side=Gr,A.needsUpdate=!0,mt(A,z,J),A.side=Hi):mt(A,z,J)}this.compile=function(A,z,J=null){J===null&&(J=A),p=Le.get(J),p.init(z),y.push(p),J.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),A!==J&&A.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const $=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const oe=O.material;if(oe)if(Array.isArray(oe))for(let _e=0;_e<oe.length;_e++){const Ce=oe[_e];me(Ce,J,O),$.add(Ce)}else me(oe,J,O),$.add(oe)}),p=y.pop(),$},this.compileAsync=function(A,z,J=null){const $=this.compile(A,z,J);return new Promise(O=>{function oe(){if($.forEach(function(_e){Ae.get(_e).currentProgram.isReady()&&$.delete(_e)}),$.size===0){O(A);return}setTimeout(oe,10)}Ye.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Se=null;function Ve(A){Se&&Se(A)}function ge(){Ie.stop()}function We(){Ie.start()}const Ie=new qg;Ie.setAnimationLoop(Ve),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(A){Se=A,k.setAnimationLoop(A),A===null?Ie.stop():Ie.start()},k.addEventListener("sessionstart",ge),k.addEventListener("sessionend",We),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(z),z=k.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,z,C),p=Le.get(A,y.length),p.init(z),y.push(p),Me.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Z.setFromProjectionMatrix(Me),re=this.localClippingEnabled,j=se.init(this.clippingPlanes,re),m=Pe.get(A,S.length),m.init(),S.push(m),k.enabled===!0&&k.isPresenting===!0){const oe=v.xr.getDepthSensingMesh();oe!==null&&pe(oe,z,-1/0,v.sortObjects)}pe(A,z,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ne,U),it=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,it&&Ge.addToRenderList(m,A),this.info.render.frame++,j===!0&&se.beginShadows();const J=p.state.shadowsArray;fe.render(J,A,z),j===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,O=m.transmissive;if(p.setupLights(),z.isArrayCamera){const oe=z.cameras;if(O.length>0)for(let _e=0,Ce=oe.length;_e<Ce;_e++){const we=oe[_e];Ee($,O,A,we)}it&&Ge.render(A);for(let _e=0,Ce=oe.length;_e<Ce;_e++){const we=oe[_e];Ze(m,A,we,we.viewport)}}else O.length>0&&Ee($,O,A,z),it&&Ge.render(A),Ze(m,A,z);C!==null&&b===0&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(v,A,z),dt.resetDefaultState(),M=-1,x=null,y.pop(),y.length>0?(p=y[y.length-1],j===!0&&se.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function pe(A,z,J,$){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){$&&Ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Me);const _e=Q.update(A),Ce=A.material;Ce.visible&&m.push(A,_e,Ce,J,Ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Z.intersectsObject(A))){const _e=Q.update(A),Ce=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ue.copy(A.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ue.copy(_e.boundingSphere.center)),Ue.applyMatrix4(A.matrixWorld).applyMatrix4(Me)),Array.isArray(Ce)){const we=_e.groups;for(let ke=0,je=we.length;ke<je;ke++){const Be=we[ke],nt=Ce[Be.materialIndex];nt&&nt.visible&&m.push(A,_e,nt,J,Ue.z,Be)}}else Ce.visible&&m.push(A,_e,Ce,J,Ue.z,null)}}const oe=A.children;for(let _e=0,Ce=oe.length;_e<Ce;_e++)pe(oe[_e],z,J,$)}function Ze(A,z,J,$){const O=A.opaque,oe=A.transmissive,_e=A.transparent;p.setupLightsView(J),j===!0&&se.setGlobalState(v.clippingPlanes,J),$&&Te.viewport(L.copy($)),O.length>0&&pt(O,z,J),oe.length>0&&pt(oe,z,J),_e.length>0&&pt(_e,z,J),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Ee(A,z,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new bs(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Ra:$i,minFilter:cs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const oe=p.state.transmissionRenderTarget[$.id],_e=$.viewport||L;oe.setSize(_e.z*v.transmissionResolutionScale,_e.w*v.transmissionResolutionScale);const Ce=v.getRenderTarget();v.setRenderTarget(oe),v.getClearColor(B),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),it&&Ge.render(J);const we=v.toneMapping;v.toneMapping=Fr;const ke=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),j===!0&&se.setGlobalState(v.clippingPlanes,$),pt(A,J,$),R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Be=0,nt=z.length;Be<nt;Be++){const bt=z[Be],Yt=bt.object,Gt=bt.geometry,St=bt.material,Je=bt.group;if(St.side===Hi&&Yt.layers.test($.layers)){const fn=St.side;St.side=$n,St.needsUpdate=!0,It(Yt,J,$,Gt,St,Je),St.side=fn,St.needsUpdate=!0,je=!0}}je===!0&&(R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe))}v.setRenderTarget(Ce),v.setClearColor(B,X),ke!==void 0&&($.viewport=ke),v.toneMapping=we}function pt(A,z,J){const $=z.isScene===!0?z.overrideMaterial:null;for(let O=0,oe=A.length;O<oe;O++){const _e=A[O],Ce=_e.object,we=_e.geometry,ke=_e.group;let je=_e.material;je.allowOverride===!0&&$!==null&&(je=$),Ce.layers.test(J.layers)&&It(Ce,z,J,we,je,ke)}}function It(A,z,J,$,O,oe){A.onBeforeRender(v,z,J,$,O,oe),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(v,z,J,$,A,oe),O.transparent===!0&&O.side===Hi&&O.forceSinglePass===!1?(O.side=$n,O.needsUpdate=!0,v.renderBufferDirect(J,z,$,O,A,oe),O.side=Gr,O.needsUpdate=!0,v.renderBufferDirect(J,z,$,O,A,oe),O.side=Hi):v.renderBufferDirect(J,z,$,O,A,oe),A.onAfterRender(v,z,J,$,O,oe)}function mt(A,z,J){z.isScene!==!0&&(z=tt);const $=Ae.get(A),O=p.state.lights,oe=p.state.shadowsArray,_e=O.state.version,Ce=de.getParameters(A,O.state,oe,z,J),we=de.getProgramCacheKey(Ce);let ke=$.programs;$.environment=A.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(A.isMeshStandardMaterial?Y:T).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",De),ke=new Map,$.programs=ke);let je=ke.get(we);if(je!==void 0){if($.currentProgram===je&&$.lightsStateVersion===_e)return yt(A,Ce),je}else Ce.uniforms=de.getUniforms(A),A.onBeforeCompile(Ce,v),je=de.acquireProgram(Ce,we),ke.set(we,je),$.uniforms=Ce.uniforms;const Be=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=se.uniform),yt(A,Ce),$.needsLights=wn(A),$.lightsStateVersion=_e,$.needsLights&&(Be.ambientLightColor.value=O.state.ambient,Be.lightProbe.value=O.state.probe,Be.directionalLights.value=O.state.directional,Be.directionalLightShadows.value=O.state.directionalShadow,Be.spotLights.value=O.state.spot,Be.spotLightShadows.value=O.state.spotShadow,Be.rectAreaLights.value=O.state.rectArea,Be.ltc_1.value=O.state.rectAreaLTC1,Be.ltc_2.value=O.state.rectAreaLTC2,Be.pointLights.value=O.state.point,Be.pointLightShadows.value=O.state.pointShadow,Be.hemisphereLights.value=O.state.hemi,Be.directionalShadowMap.value=O.state.directionalShadowMap,Be.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Be.spotShadowMap.value=O.state.spotShadowMap,Be.spotLightMatrix.value=O.state.spotLightMatrix,Be.spotLightMap.value=O.state.spotLightMap,Be.pointShadowMap.value=O.state.pointShadowMap,Be.pointShadowMatrix.value=O.state.pointShadowMatrix),$.currentProgram=je,$.uniformsList=null,je}function xt(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=Ol.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function yt(A,z){const J=Ae.get(A);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function Kn(A,z,J,$,O){z.isScene!==!0&&(z=tt),R.resetTextureUnits();const oe=z.fog,_e=$.isMeshStandardMaterial?z.environment:null,Ce=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:bo,we=($.isMeshStandardMaterial?Y:T).get($.envMap||_e),ke=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,je=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Be=!!J.morphAttributes.position,nt=!!J.morphAttributes.normal,bt=!!J.morphAttributes.color;let Yt=Fr;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Yt=v.toneMapping);const Gt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,St=Gt!==void 0?Gt.length:0,Je=Ae.get($),fn=p.state.lights;if(j===!0&&(re===!0||A!==x)){const An=A===x&&$.id===M;se.setState($,A,An)}let Tt=!1;$.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==fn.state.version||Je.outputColorSpace!==Ce||O.isBatchedMesh&&Je.batching===!1||!O.isBatchedMesh&&Je.batching===!0||O.isBatchedMesh&&Je.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Je.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Je.instancing===!1||!O.isInstancedMesh&&Je.instancing===!0||O.isSkinnedMesh&&Je.skinning===!1||!O.isSkinnedMesh&&Je.skinning===!0||O.isInstancedMesh&&Je.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Je.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Je.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Je.instancingMorph===!1&&O.morphTexture!==null||Je.envMap!==we||$.fog===!0&&Je.fog!==oe||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==se.numPlanes||Je.numIntersection!==se.numIntersection)||Je.vertexAlphas!==ke||Je.vertexTangents!==je||Je.morphTargets!==Be||Je.morphNormals!==nt||Je.morphColors!==bt||Je.toneMapping!==Yt||Je.morphTargetsCount!==St)&&(Tt=!0):(Tt=!0,Je.__version=$.version);let Ri=Je.currentProgram;Tt===!0&&(Ri=mt($,z,O));let Es=!1,Qn=!1,Co=!1;const Ft=Ri.getUniforms(),mi=Je.uniforms;if(Te.useProgram(Ri.program)&&(Es=!0,Qn=!0,Co=!0),$.id!==M&&(M=$.id,Qn=!0),Es||x!==A){Te.buffers.depth.getReversed()?(ae.copy(A.projectionMatrix),Gv(ae),Vv(ae),Ft.setValue(F,"projectionMatrix",ae)):Ft.setValue(F,"projectionMatrix",A.projectionMatrix),Ft.setValue(F,"viewMatrix",A.matrixWorldInverse);const kn=Ft.map.cameraPosition;kn!==void 0&&kn.setValue(F,qe.setFromMatrixPosition(A.matrixWorld)),G.logarithmicDepthBuffer&&Ft.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ft.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,Qn=!0,Co=!0)}if(O.isSkinnedMesh){Ft.setOptional(F,O,"bindMatrix"),Ft.setOptional(F,O,"bindMatrixInverse");const An=O.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Ft.setValue(F,"boneTexture",An.boneTexture,R))}O.isBatchedMesh&&(Ft.setOptional(F,O,"batchingTexture"),Ft.setValue(F,"batchingTexture",O._matricesTexture,R),Ft.setOptional(F,O,"batchingIdTexture"),Ft.setValue(F,"batchingIdTexture",O._indirectTexture,R),Ft.setOptional(F,O,"batchingColorTexture"),O._colorsTexture!==null&&Ft.setValue(F,"batchingColorTexture",O._colorsTexture,R));const gi=J.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&Oe.update(O,J,Ri),(Qn||Je.receiveShadow!==O.receiveShadow)&&(Je.receiveShadow=O.receiveShadow,Ft.setValue(F,"receiveShadow",O.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(mi.envMap.value=we,mi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(mi.envMapIntensity.value=z.environmentIntensity),Qn&&(Ft.setValue(F,"toneMappingExposure",v.toneMappingExposure),Je.needsLights&&Ut(mi,Co),oe&&$.fog===!0&&ue.refreshFogUniforms(mi,oe),ue.refreshMaterialUniforms(mi,$,H,q,p.state.transmissionRenderTarget[A.id]),Ol.upload(F,xt(Je),mi,R)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ol.upload(F,xt(Je),mi,R),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ft.setValue(F,"center",O.center),Ft.setValue(F,"modelViewMatrix",O.modelViewMatrix),Ft.setValue(F,"normalMatrix",O.normalMatrix),Ft.setValue(F,"modelMatrix",O.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const An=$.uniformsGroups;for(let kn=0,Mc=An.length;kn<Mc;kn++){const Xr=An[kn];P.update(Xr,Ri),P.bind(Xr,Ri)}}return Ri}function Ut(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function wn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,z,J){const $=Ae.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Ae.get(A.texture).__webglTexture=z,Ae.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:J,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const J=Ae.get(A);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0};const pi=F.createFramebuffer();this.setRenderTarget=function(A,z=0,J=0){C=A,w=z,b=J;let $=!0,O=null,oe=!1,_e=!1;if(A){const we=Ae.get(A);if(we.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(F.FRAMEBUFFER,null),$=!1;else if(we.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(we.__hasExternalTextures)R.rebindTextures(A,Ae.get(A.texture).__webglTexture,Ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Be=A.depthTexture;if(we.__boundDepthTexture!==Be){if(Be!==null&&Ae.has(Be)&&(A.width!==Be.image.width||A.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const ke=A.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(_e=!0);const je=Ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(je[z])?O=je[z][J]:O=je[z],oe=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?O=Ae.get(A).__webglMultisampledFramebuffer:Array.isArray(je)?O=je[J]:O=je,L.copy(A.viewport),I.copy(A.scissor),D=A.scissorTest}else L.copy(ce).multiplyScalar(H).floor(),I.copy(xe).multiplyScalar(H).floor(),D=Fe;if(J!==0&&(O=pi),Te.bindFramebuffer(F.FRAMEBUFFER,O)&&$&&Te.drawBuffers(A,O),Te.viewport(L),Te.scissor(I),Te.setScissorTest(D),oe){const we=Ae.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,J)}else if(_e){const we=Ae.get(A.texture),ke=z;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.__webglTexture,J,ke)}else if(A!==null&&J!==0){const we=Ae.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,we.__webglTexture,J)}M=-1},this.readRenderTargetPixels=function(A,z,J,$,O,oe,_e){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Ce=Ce[_e]),Ce){Te.bindFramebuffer(F.FRAMEBUFFER,Ce);try{const we=A.texture,ke=we.format,je=we.type;if(!G.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-$&&J>=0&&J<=A.height-O&&F.readPixels(z,J,$,O,$e.convert(ke),$e.convert(je),oe)}finally{const we=C!==null?Ae.get(C).__webglFramebuffer:null;Te.bindFramebuffer(F.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(A,z,J,$,O,oe,_e){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Ce=Ce[_e]),Ce)if(z>=0&&z<=A.width-$&&J>=0&&J<=A.height-O){Te.bindFramebuffer(F.FRAMEBUFFER,Ce);const we=A.texture,ke=we.format,je=we.type;if(!G.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Be),F.bufferData(F.PIXEL_PACK_BUFFER,oe.byteLength,F.STREAM_READ),F.readPixels(z,J,$,O,$e.convert(ke),$e.convert(je),0);const nt=C!==null?Ae.get(C).__webglFramebuffer:null;Te.bindFramebuffer(F.FRAMEBUFFER,nt);const bt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Hv(F,bt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Be),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,oe),F.deleteBuffer(Be),F.deleteSync(bt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,J=0){const $=Math.pow(2,-J),O=Math.floor(A.image.width*$),oe=Math.floor(A.image.height*$),_e=z!==null?z.x:0,Ce=z!==null?z.y:0;R.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,J,0,0,_e,Ce,O,oe),Te.unbindTexture()};const en=F.createFramebuffer(),tn=F.createFramebuffer();this.copyTextureToTexture=function(A,z,J=null,$=null,O=0,oe=null){oe===null&&(O!==0?(Fl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=O,O=0):oe=0);let _e,Ce,we,ke,je,Be,nt,bt,Yt;const Gt=A.isCompressedTexture?A.mipmaps[oe]:A.image;if(J!==null)_e=J.max.x-J.min.x,Ce=J.max.y-J.min.y,we=J.isBox3?J.max.z-J.min.z:1,ke=J.min.x,je=J.min.y,Be=J.isBox3?J.min.z:0;else{const gi=Math.pow(2,-O);_e=Math.floor(Gt.width*gi),Ce=Math.floor(Gt.height*gi),A.isDataArrayTexture?we=Gt.depth:A.isData3DTexture?we=Math.floor(Gt.depth*gi):we=1,ke=0,je=0,Be=0}$!==null?(nt=$.x,bt=$.y,Yt=$.z):(nt=0,bt=0,Yt=0);const St=$e.convert(z.format),Je=$e.convert(z.type);let fn;z.isData3DTexture?(R.setTexture3D(z,0),fn=F.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(R.setTexture2DArray(z,0),fn=F.TEXTURE_2D_ARRAY):(R.setTexture2D(z,0),fn=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const Tt=F.getParameter(F.UNPACK_ROW_LENGTH),Ri=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Es=F.getParameter(F.UNPACK_SKIP_PIXELS),Qn=F.getParameter(F.UNPACK_SKIP_ROWS),Co=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Gt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Gt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ke),F.pixelStorei(F.UNPACK_SKIP_ROWS,je),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Be);const Ft=A.isDataArrayTexture||A.isData3DTexture,mi=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const gi=Ae.get(A),An=Ae.get(z),kn=Ae.get(gi.__renderTarget),Mc=Ae.get(An.__renderTarget);Te.bindFramebuffer(F.READ_FRAMEBUFFER,kn.__webglFramebuffer),Te.bindFramebuffer(F.DRAW_FRAMEBUFFER,Mc.__webglFramebuffer);for(let Xr=0;Xr<we;Xr++)Ft&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.get(A).__webglTexture,O,Be+Xr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.get(z).__webglTexture,oe,Yt+Xr)),F.blitFramebuffer(ke,je,_e,Ce,nt,bt,_e,Ce,F.DEPTH_BUFFER_BIT,F.NEAREST);Te.bindFramebuffer(F.READ_FRAMEBUFFER,null),Te.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(O!==0||A.isRenderTargetTexture||Ae.has(A)){const gi=Ae.get(A),An=Ae.get(z);Te.bindFramebuffer(F.READ_FRAMEBUFFER,en),Te.bindFramebuffer(F.DRAW_FRAMEBUFFER,tn);for(let kn=0;kn<we;kn++)Ft?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,gi.__webglTexture,O,Be+kn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,gi.__webglTexture,O),mi?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,An.__webglTexture,oe,Yt+kn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,An.__webglTexture,oe),O!==0?F.blitFramebuffer(ke,je,_e,Ce,nt,bt,_e,Ce,F.COLOR_BUFFER_BIT,F.NEAREST):mi?F.copyTexSubImage3D(fn,oe,nt,bt,Yt+kn,ke,je,_e,Ce):F.copyTexSubImage2D(fn,oe,nt,bt,ke,je,_e,Ce);Te.bindFramebuffer(F.READ_FRAMEBUFFER,null),Te.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else mi?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(fn,oe,nt,bt,Yt,_e,Ce,we,St,Je,Gt.data):z.isCompressedArrayTexture?F.compressedTexSubImage3D(fn,oe,nt,bt,Yt,_e,Ce,we,St,Gt.data):F.texSubImage3D(fn,oe,nt,bt,Yt,_e,Ce,we,St,Je,Gt):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,oe,nt,bt,_e,Ce,St,Je,Gt.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,oe,nt,bt,Gt.width,Gt.height,St,Gt.data):F.texSubImage2D(F.TEXTURE_2D,oe,nt,bt,_e,Ce,St,Je,Gt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Tt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ri),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Es),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Co),oe===0&&z.generateMipmaps&&F.generateMipmap(fn),Te.unbindTexture()},this.copyTextureToTexture3D=function(A,z,J=null,$=null,O=0){return Fl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,z,J,$,O)},this.initRenderTarget=function(A){Ae.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),Te.unbindTexture()},this.resetState=function(){w=0,b=0,C=null,Te.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}const T1=`
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
}`,E1=`
uniform float uTime; uniform float uMorph; uniform float uSize; uniform float uPixel;
uniform vec3 uMouse; uniform float uMouseStrength; uniform float uIntro; uniform float uVel;
attribute vec3 aPlane; attribute float aRand;
varying float vAlpha; varying float vTone; varying float vStretch;
${T1}
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
  // Défilement rapide : chaque point s'étire en traînée verticale, comme un flou de vitesse.
  vStretch = 1. + uVel * (2.2 + aRand * 2.6);
  gl_PointSize = uSize * uPixel * (.55 + aRand * .9) / -mv.z * vStretch;
  vAlpha = (.28 + .72 * (.5 + .5 * n)) * (1. - m * .35);
  vTone = aRand;
}`,w1=`
uniform vec3 uColorA; uniform vec3 uColorB; uniform float uFade;
varying float vAlpha; varying float vTone; varying float vStretch;
void main(){
  vec2 c = gl_PointCoord - .5; c.x *= vStretch; float d = length(c);
  if (d > .5) discard;
  float a = smoothstep(.5, .05, d);
  vec3 col = mix(uColorA, uColorB, step(.86, vTone));
  gl_FragColor = vec4(col, a * vAlpha * uFade / sqrt(vStretch));
}`;function A1(r,{reduced:e=!1}={}){const t=new Zg({canvas:r,antialias:!1,alpha:!0,powerPreference:"high-performance"}),n=Math.min(window.devicePixelRatio||1,1.75);t.setPixelRatio(n);const i=new Ng,s=new Gn(35,1,.1,100);s.position.set(0,0,7.2);const o=window.matchMedia("(max-width: 760px)").matches,a=o?9e3:2e4,l=new Float32Array(a*3),c=new Float32Array(a*3),u=new Float32Array(a),f=Math.PI*(3-Math.sqrt(5)),h=o?1.35:1.75,d=Math.round(Math.sqrt(a*2.2));for(let j=0;j<a;j++){const re=1-j/(a-1)*2,ae=Math.sqrt(1-re*re),Me=f*j;l[j*3]=Math.cos(Me)*ae*h,l[j*3+1]=re*h,l[j*3+2]=Math.sin(Me)*ae*h;const qe=j%d,Ue=Math.floor(j/d);c[j*3]=(qe/d-.5)*9.5,c[j*3+1]=-1.15,c[j*3+2]=(Ue/(a/d)-.5)*6.5,u[j]=Math.random()}const g=new Qt;g.setAttribute("position",new sn(l,3)),g.setAttribute("aPlane",new sn(c,3)),g.setAttribute("aRand",new sn(u,1));const _={uTime:{value:0},uMorph:{value:0},uSize:{value:o?26:30},uPixel:{value:n},uMouse:{value:new N(9,9,0)},uMouseStrength:{value:0},uIntro:{value:e?1:.001},uVel:{value:0},uColorA:{value:new et("#2F80FF")},uColorB:{value:new et("#EAF1FF")},uFade:{value:1}},m=new jn({vertexShader:E1,fragmentShader:w1,uniforms:_,transparent:!0,depthWrite:!1,blending:ri}),p=new ic(g,m);p.rotation.z=.18,i.add(p);const S=new jn({transparent:!0,depthWrite:!1,blending:ri,uniforms:{uFade:{value:1},uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:"uniform float uFade; uniform float uTime; varying vec2 vUv; void main(){ float d = length(vUv - .5) * 2.; float core = pow(max(0., 1. - d), 3.2); float ring = smoothstep(.62, .5, d) * smoothstep(.3, .5, d) * .22; vec3 c = mix(vec3(.18, .5, 1.), vec3(.75, .86, 1.), core); gl_FragColor = vec4(c, (core * .55 + ring * (.6 + .4 * sin(uTime * .8))) * uFade); }"}),y=new Wt(new Br(h*4.6,h*4.6),S);y.position.z=-.6,i.add(y);const v=o?260:620,E=new Float32Array(v*3),w=new Float32Array(v*3);for(let j=0;j<v;j++)E[j*3]=(Math.random()-.5)*13,E[j*3+1]=(Math.random()-.5)*8,E[j*3+2]=(Math.random()-.5)*6+1,w[j*3]=.08+Math.random()*.32,w[j*3+1]=Math.random(),w[j*3+2]=.4+Math.random()*1.6;const b=new Qt;b.setAttribute("position",new sn(E,3)),b.setAttribute("aSeed",new sn(w,3));const C=new jn({transparent:!0,depthWrite:!1,blending:ri,uniforms:{uTime:_.uTime,uPixel:_.uPixel,uFade:{value:1}},vertexShader:"uniform float uTime; uniform float uPixel; attribute vec3 aSeed; varying float vA; varying float vT; void main(){ vec3 p = position; p.y = mod(p.y + uTime * aSeed.x + 4., 8.) - 4.; p.x += sin(uTime * .5 + aSeed.y * 6.283) * .35; p.z += cos(uTime * .4 + aSeed.y * 9.) * .25; vec4 mv = modelViewMatrix * vec4(p, 1.); gl_Position = projectionMatrix * mv; gl_PointSize = aSeed.z * uPixel * 34. / -mv.z; vA = smoothstep(4., 2.4, abs(p.y)) * (.45 + .55 * sin(uTime * 1.7 + aSeed.y * 40.)); vT = aSeed.y; }",fragmentShader:"uniform float uFade; varying float vA; varying float vT; void main(){ float d = length(gl_PointCoord - .5); if (d > .5) discard; float a = pow(1. - d * 2., 2.2); vec3 c = mix(vec3(1., .72, .38), vec3(.35, .62, 1.), step(.42, vT)); gl_FragColor = vec4(c, a * vA * uFade * .9); }"}),M=new ic(b,C);i.add(M);const x=new Ne(9,9),L=new N(9,9,0),I=new N;let D=0;const B=j=>{x.x=j.clientX/window.innerWidth*2-1,x.y=-(j.clientY/window.innerHeight)*2+1,I.set(x.x,x.y,.5).unproject(s).sub(s.position).normalize();const re=-s.position.z/I.z;L.copy(s.position).add(I.multiplyScalar(re)),D=1};window.addEventListener("pointermove",B,{passive:!0});const X=j=>{j.gamma==null||j.beta==null||(x.x=Math.max(-1,Math.min(1,j.gamma/28)),x.y=Math.max(-1,Math.min(1,(j.beta-50)/28)))};!window.matchMedia("(hover: hover) and (pointer: fine)").matches&&!e&&window.addEventListener("deviceorientation",X,{passive:!0});const q=()=>{const j=r.clientWidth||window.innerWidth,re=r.clientHeight||window.innerHeight;t.setSize(j,re,!1),s.aspect=j/re,s.updateProjectionMatrix()};q(),window.addEventListener("resize",q);let H=!0,ne=0,U=performance.now(),ce=0,xe=0;const Fe={morph:0,fade:1,scrollTilt:0,vel:0},Z=j=>{ne=requestAnimationFrame(Z);const re=Math.min((j-U)/1e3,.05);U=j,H&&(ce+=re,xe+=re*.07,p.rotation.y=xe,p.rotation.x=Fe.scrollTilt*.55,_.uTime.value=ce,_.uMorph.value+=(Fe.morph-_.uMorph.value)*.08,_.uFade.value=Fe.fade,_.uVel.value+=(Fe.vel-_.uVel.value)*.14,Fe.vel*=.9,S.uniforms.uTime.value=ce,S.uniforms.uFade.value=Fe.fade*(1-_.uMorph.value*.85),C.uniforms.uFade.value=.35+Fe.fade*.65,y.scale.setScalar(1+Math.sin(ce*.6)*.04),s.position.x+=(x.x*.55*(Math.abs(x.x)<2?1:0)-s.position.x)*.04,s.position.y+=(x.y*.35*(Math.abs(x.y)<2?1:0)-s.position.y)*.04,s.lookAt(0,0,0),_.uMouse.value.lerp(L,.12),D*=.985,_.uMouseStrength.value+=(D-_.uMouseStrength.value)*.1,t.render(i,s))};return e?t.render(i,s):ne=requestAnimationFrame(Z),{uniforms:_,set morph(j){Fe.morph=j,e&&(_.uMorph.value=j,t.render(i,s))},set fade(j){Fe.fade=j},set tilt(j){Fe.scrollTilt=j},set velocity(j){Fe.vel=Math.max(Fe.vel,j)},play(){H=!0},pause(){H=!1},destroy(){cancelAnimationFrame(ne),window.removeEventListener("pointermove",B),window.removeEventListener("deviceorientation",X),window.removeEventListener("resize",q),t.dispose()}}}const Up={fr:{soundOn:"Son : activé",soundOff:"Son : coupé",fxOn:"Réduire les effets",fxOff:"Rétablir les effets",mail:"Écrire à"},en:{soundOn:"Sound: on",soundOff:"Sound: off",fxOn:"Reduce effects",fxOff:"Restore effects",mail:"Write to"}},Np={get:r=>{try{return localStorage.getItem(r)}catch{return null}},set:(r,e)=>{try{localStorage.setItem(r,e)}catch{}}};function C1(){let r=null,e=null,t=null,n=!1;const i=()=>{r=new(window.AudioContext||window.webkitAudioContext),e=r.createGain(),e.gain.value=0,e.connect(r.destination),t=r.createBiquadFilter(),t.type="lowpass",t.frequency.value=320,t.Q.value=.7;const o=r.createGain();o.gain.value=.5,t.connect(o),o.connect(e),[[55,"sine",.5],[82.41,"triangle",.22],[110.4,"sine",.18],[164.8,"sine",.07]].forEach(([a,l,c],u)=>{const f=r.createOscillator(),h=r.createGain(),d=r.createOscillator(),g=r.createGain();f.type=l,f.frequency.value=a,h.gain.value=c,d.frequency.value=.05+u*.03,g.gain.value=c*.5,d.connect(g),g.connect(h.gain),f.connect(h),h.connect(t),f.start(),d.start()})},s=(o,a,l,c,u="sine")=>{if(!n)return;const f=r.currentTime,h=r.createOscillator(),d=r.createGain();h.type=u,h.frequency.setValueAtTime(o,f),h.frequency.exponentialRampToValueAtTime(a,f+l),d.gain.setValueAtTime(c,f),d.gain.exponentialRampToValueAtTime(1e-4,f+l),h.connect(d),d.connect(e),h.start(f),h.stop(f+l+.02)};return{get on(){return n},toggle(){return r||i(),n=!n,r.resume(),e.gain.cancelScheduledValues(r.currentTime),e.gain.linearRampToValueAtTime(n?.16:0,r.currentTime+(n?1.2:.4)),n},hover:()=>s(1400,2100,.07,.05),click:()=>{s(220,60,.28,.35,"triangle"),s(900,1800,.12,.05)},open:()=>s(140,520,.5,.2,"sine"),velocity(o){n&&t&&t.frequency.setTargetAtTime(320+Math.min(Math.abs(o),4e3)*.35,r.currentTime,.2)}}}const Fp="ABCDEFGHKLMNPRSTUVXYZ0123456789#/<>_";function Op(r,e=.9){const t=r.dataset.txt||(r.dataset.txt=r.textContent),n={p:0};he.to(n,{p:1,duration:e,ease:"power2.out",onUpdate:()=>{const i=Math.floor(n.p*t.length);r.textContent=t.slice(0,i)+[...t.slice(i)].map(s=>s===" "?" ":Fp[Math.random()*Fp.length|0]).join("")},onComplete:()=>{r.textContent=t}})}function R1({lenis:r,hero:e,reduced:t,fine:n,lang:i,sections:s}){const o=Up[i]||Up.fr,a=document.documentElement,l=(D,B=document)=>B.querySelector(D),c=(D,B=document)=>[...B.querySelectorAll(D)],u=C1(),f=document.createElement("div");f.className="aurora",f.setAttribute("aria-hidden","true"),f.innerHTML="<i></i><i></i><i></i>",document.body.prepend(f);const h=document.createElement("a");h.className="bigmail",h.href="mailto:johannepamegne@gmail.com",h.setAttribute("aria-label",`${o.mail} johannepamegne@gmail.com`),h.innerHTML=[..."johannepamegne@gmail.com"].map(D=>`<span aria-hidden="true">${D}</span>`).join(""),l(".contact__actions").before(h);const d=document.createElement("div");d.className="hud mono",d.innerHTML=`<div class="hud__left"><button type="button" id="soundBtn" aria-pressed="false"><span class="eq"><i></i><i></i><i></i><i></i></span><span>${o.soundOff}</span></button>
    <button type="button" id="fxBtn" aria-pressed="false"><span>${o.fxOn}</span></button></div>
    <div class="hud__right"><span id="hudSection">00 — ${s[0][1]}</span><span class="hud__bar"><i id="hudBar"></i></span><span id="hudPct">000</span></div>`,document.body.append(d);const g=l("#soundBtn"),_=l("#fxBtn");g.addEventListener("click",()=>{const D=u.toggle();g.setAttribute("aria-pressed",D),g.classList.toggle("is-on",D),g.lastElementChild.textContent=D?o.soundOn:o.soundOff});const m=D=>{a.classList.toggle("fx-off",D),_.setAttribute("aria-pressed",D),_.lastElementChild.textContent=D?o.fxOff:o.fxOn,e&&(D?e.pause():e.play()),Np.set("fx",D?"off":"on")};_.addEventListener("click",()=>m(!a.classList.contains("fx-off"))),Np.get("fx")==="off"&&m(!0),document.addEventListener("pointerover",D=>{const B=D.target.closest("a, button, .row, .clip");B&&B!==document._lastHover&&(document._lastHover=B,u.hover()),B||(document._lastHover=null)}),document.addEventListener("click",D=>{D.target.closest(".row, .clip")?u.open():D.target.closest("a, button")&&u.click()});const p=l("#hudBar"),S=l("#hudPct"),y=l("#hudSection");if(Xe.create({start:0,end:"max",onUpdate:D=>{p.style.transform=`scaleX(${D.progress})`,S.textContent=String(Math.round(D.progress*100)).padStart(3,"0"),u.velocity(D.getVelocity())}}),s.forEach(([D,B],X)=>Xe.create({trigger:D,start:"top 55%",end:"bottom 55%",onToggle:W=>{W.isActive&&(y.dataset.txt=`${String(X).padStart(2,"0")} — ${B}`,t?y.textContent=y.dataset.txt:Op(y,.5))}})),t)return;c(".label").forEach(D=>Xe.create({trigger:D,start:"top 92%",once:!0,onEnter:()=>Op(D,1.1)}));const v=c("#workList, #mdmPages, #caps, .stats"),E={v:0},w=he.quickSetter(v,"skewY","deg");Xe.create({onUpdate:D=>{if(a.classList.contains("fx-off"))return;const B=he.utils.clamp(-3.5,3.5,D.getVelocity()/-420);Math.abs(B)>Math.abs(E.v)&&(E.v=B,he.to(E,{v:0,duration:.9,ease:"power3.out",overwrite:!0,onUpdate:()=>w(E.v)}))}});const b=c(".aurora i");he.ticker.add(D=>{a.classList.contains("fx-off")||b.forEach((B,X)=>{B.style.transform=`translate3d(${Math.sin(D*.11+X*2.1)*16}vw, ${Math.cos(D*.09+X*1.3)*12}vh, 0)`})}),he.to(".aurora",{opacity:1,scrollTrigger:{trigger:"#manifeste",start:"top 80%",end:"top 20%",scrub:!0}});const C=c(".bigmail span");if(he.from(C,{yPercent:110,opacity:0,rotate:8,duration:1.1,stagger:.022,ease:"expo.out",scrollTrigger:{trigger:h,start:"top 92%"}}),h.addEventListener("pointerenter",()=>he.to(C,{keyframes:[{y:"-0.22em",color:"#2f80ff",duration:.25},{y:0,color:"#eceef2",duration:.5,ease:"elastic.out(1,0.4)"}],stagger:.018,overwrite:!0})),!n)return;const M=c(".hero__line .char"),x=l(".hero__title");let L=[];const I=()=>{L=M.map(D=>{const B=D.getBoundingClientRect();return[B.left+B.width/2,B.top+B.height/2+window.scrollY]})};setTimeout(I,4200),window.addEventListener("resize",I),x.addEventListener("pointermove",D=>{L.length||I(),M.forEach((B,X)=>{const W=Math.hypot(D.clientX-L[X][0],D.clientY+window.scrollY-L[X][1]),q=Math.max(0,1-W/320);he.to(B,{y:`${-.11*q}em`,scaleY:1+.16*q,skewX:-9*q,color:q>.55?"#8ab8ff":"#eceef2",duration:.45,ease:"power3.out",overwrite:"auto"})})}),x.addEventListener("pointerleave",()=>he.to(M,{y:0,scaleY:1,skewX:0,color:"#eceef2",duration:.9,ease:"elastic.out(1,0.5)",stagger:.01})),c(".case__img, .mdm__pages img").forEach(D=>he.fromTo(D,{scale:1.08},{scale:1,ease:"none",scrollTrigger:{trigger:D,start:"top bottom",end:"bottom top",scrub:!0}}))}const P1=["tower","watchdog","report","guards","bench"],Bp={fr:{label:"(04) Sous le capot",title:"Automatiser ne suffit pas. <em>Il faut que ça tienne.</em>",intro:"Un système qui travaille seul doit se surveiller, rendre des comptes et savoir s'arrêter. Cinq exemples tirés d'un même projet.",note:"Animations de démonstration — cabinet fictif « Lisière Syndic ».",tiles:[{id:"tower",size:"xl",title:"Tour de contrôle",text:"Chaque e-mail trié apparaît en direct : catégorie, urgence, qui s'en occupe. La tour garde une copie du journal, relue au plus toutes les 10 s, pour ne jamais dépasser le quota de Google (60 lectures par minute)."},{id:"watchdog",size:"m",title:"Chien de garde",text:"Toutes les 15 minutes, il vérifie Gmail, Claude, la Google Sheet, les e-mails bloqués et le budget IA du jour. En cas de panne : alerte Telegram et e-mail, rappel toutes les 3 h, puis « tout est rentré dans l'ordre »."},{id:"report",size:"m",title:"Rapport du lundi",text:"Chaque lundi à 8 h, la direction reçoit sa semaine : e-mails triés, temps gagné, délai de prise en charge des urgences, charge de l'équipe, sujets, sécurité, coût — et un résumé sur Telegram."},{id:"relance",size:"s",title:"Urgences et relance",text:"Une urgence part sur Telegram avec un bouton « Je m'en occupe ». Sans clic en 30 minutes, l'Aiguilleur relance."},{id:"learn",size:"s",title:"Apprentissage des corrections",text:"« Mal aiguillé ? » : l'équipe corrige en un formulaire. Les 3 corrections les plus proches sont montrées à Claude à chaque nouvel e-mail."},{id:"deadline",size:"s",title:"Mémoire et échéances",text:"Claude voit les messages des 30 derniers jours du même expéditeur. Les délais légaux sont comptés en jours ouvrés, hors fériés, avec rappel la veille à 8 h."},{id:"guards",size:"l",title:"Garde-fous",text:"L'IA propose, les règles décident : pas de réponse automatique si l'expéditeur est mécontent, si l'urgence est haute ou si la confiance est sous 85 %. Faux blocs « système » neutralisés, IBAN jamais affiché en entier, et si Claude ne répond pas, l'e-mail part quand même à l'accueil."},{id:"bench",size:"l",title:"Banc d'essai et démo filmée",text:"Avant chaque démo, 32 e-mails pièges passent au banc d'essai sans rien envoyer (environ 1,5 centime par e-mail). Un script allume l'Aiguilleur, filme l'écran, envoie les e-mails et range la vidéo tout seul."},{id:"errors",size:"l",title:"Alertes d'erreur",text:"Toute exécution en échec, même une connexion Gmail coupée, est signalée — une seule fois par demi-heure pour la même erreur, pour ne pas noyer l'équipe."},{id:"multi",size:"l",title:"Une entreprise, un dossier",text:"Le moteur est commun ; chaque métier (syndic, commerce) apporte ses catégories et ses délais, chaque entreprise son profil. Workflows, Google Sheet, libellés et filtres Gmail sont générés par script."}],viz:{tower:{head:"Tour de contrôle",live:"en direct",kpis:["e-mails triés","urgences","en attente"],feed:[["09:41","Sinistre","Hugo · Gestion","u"],["09:38","Comptabilité","Lina · Compta",""],["09:35","Question","brouillon prêt","q"],["09:31","Spam","archivé","s"],["09:27","Assemblée générale","Hugo · Gestion",""],["09:22","Travaux","Inès · Technique",""],["09:18","Relance","Lina · Compta","u"]]},watchdog:{checks:["Gmail répond","Aucun e-mail bloqué > 10 min","Google Sheet joignable","Claude répond","Budget IA du jour"],next:"prochain contrôle"},report:{from:"Lundi · 08:00 — Aiguilleur IA",subj:"Votre semaine en un coup d'œil",rows:["E-mails triés","Temps gagné","Urgences prises en charge","Corrections de l'équipe ↓"]},relance:{app:"Telegram · Aiguilleur",msg:"🚨 Urgence — « Fuite d'eau au 3e étage »",btn:"Je m'en occupe",tag:"relance"},learn:{cards:["Compta → Gestion","Question → Travaux","Spam → Client"],badge:"Aiguillé d'après une correction de l'équipe"},deadline:{days:["L","M","M","J","V","S","D","L","M","M"],holiday:"férié",due:"échéance",remind:"rappel 8 h"},guards:{rules:["Expéditeur mécontent","Urgence haute","Confiance < 85 %","Bloc « système » injecté"],block:"pas de réponse auto"},bench:{lines:["$ node outils/banc-essai.js","32/32 catégories correctes · ~1,5 ct/e-mail","$ node outils/tournage.js","● REC  la démo se filme toute seule"]},errors:{lines:["✕ Connexion Gmail coupée","→ alerte Telegram + e-mail","✕ même erreur, 12 min plus tard","→ ignorée (1 alerte / 30 min)"]},multi:{trades:["syndic","commerce"],files:["profil.js","connaissances","référentiel","e-mails de test"],out:["7+ workflows","Google Sheet","libellés Gmail","filtres Gmail"]}}},en:{label:"(04) Under the hood",title:"Automating is not enough. <em>It has to hold.</em>",intro:"A system that works on its own must watch itself, report back and know when to stop. Five examples from a single project.",note:"Demo animations — fictional “Lisière Syndic” agency.",tiles:[{id:"tower",size:"xl",title:"Control tower",text:"Every sorted email shows up live: category, urgency, who handles it. The tower keeps a copy of the log, re-read at most every 10 s, so it never exceeds Google’s quota (60 reads per minute)."},{id:"watchdog",size:"m",title:"Watchdog",text:"Every 15 minutes it checks Gmail, Claude, the Google Sheet, stuck emails and the daily AI budget. If something breaks: Telegram + email alert, a reminder every 3 h, then “all back to normal”."},{id:"report",size:"m",title:"Monday report",text:"Every Monday at 8 am, management gets its week: emails sorted, time saved, urgent response times, team workload, topics, security, cost — plus a Telegram summary."},{id:"relance",size:"s",title:"Urgent alerts & follow-up",text:"An urgent email goes to Telegram with a “I’ll take it” button. No click within 30 minutes and the Dispatcher follows up."},{id:"learn",size:"s",title:"Learning from corrections",text:"“Misrouted?”: the team fixes it in one form. The 3 most similar corrections are shown to Claude with every new email."},{id:"deadline",size:"s",title:"Memory & legal deadlines",text:"Claude sees the sender’s messages from the last 30 days. Legal deadlines are counted in business days, excluding holidays, with a reminder the day before at 8 am."},{id:"guards",size:"l",title:"Guardrails",text:"AI suggests, rules decide: no automatic reply if the sender is upset, urgency is high or confidence is under 85 %. Fake “system” blocks neutralised, IBANs never shown in full, and if Claude fails the email still reaches the front desk."},{id:"bench",size:"l",title:"Test bench & filmed demo",text:"Before every demo, 32 trap emails run through the test bench without sending anything (about 1.5 ¢ each). A script turns the Dispatcher on, records the screen, sends the emails and files the video by itself."},{id:"errors",size:"l",title:"Error alerts",text:"Every failed run, even a dropped Gmail connection, is reported — only once per half hour for the same error, so the team isn’t flooded."},{id:"multi",size:"l",title:"One company, one folder",text:"The engine is shared; each trade (property management, retail) brings its categories and deadlines, each company its profile. Workflows, Google Sheet, Gmail labels and filters are generated by script."}],viz:{tower:{head:"Control tower",live:"live",kpis:["emails sorted","urgent","waiting"],feed:[["09:41","Damage","Hugo · Property","u"],["09:38","Accounting","Lina · Accounts",""],["09:35","Question","draft ready","q"],["09:31","Spam","archived","s"],["09:27","General meeting","Hugo · Property",""],["09:22","Works","Inès · Technical",""],["09:18","Follow-up","Lina · Accounts","u"]]},watchdog:{checks:["Gmail responds","No email stuck > 10 min","Google Sheet reachable","Claude responds","Daily AI budget"],next:"next check in"},report:{from:"Monday · 08:00 — AI Dispatcher",subj:"Your week at a glance",rows:["Emails sorted","Time saved","Urgent emails handled","Team corrections ↓"]},relance:{app:"Telegram · Dispatcher",msg:"🚨 Urgent — “Water leak on the 3rd floor”",btn:"I’ll take it",tag:"follow-up"},learn:{cards:["Accounts → Property","Question → Works","Spam → Client"],badge:"Routed from a team correction"},deadline:{days:["M","T","W","T","F","S","S","M","T","W"],holiday:"holiday",due:"deadline",remind:"reminder 8 am"},guards:{rules:["Upset sender","High urgency","Confidence < 85 %","Injected “system” block"],block:"no auto-reply"},bench:{lines:["$ node outils/banc-essai.js","32/32 correct categories · ~1.5 ¢/email","$ node outils/tournage.js","● REC  the demo films itself"]},errors:{lines:["✕ Gmail connection dropped","→ Telegram + email alert","✕ same error, 12 min later","→ skipped (1 alert / 30 min)"]},multi:{trades:["property","retail"],files:["profil.js","knowledge","registry","test emails"],out:["7+ workflows","Google Sheet","Gmail labels","Gmail filters"]}}}},zp={fr:{doublage:[["Le directeur","Lit sa mémoire, remplit une fiche de besoins, pose une seule question à la fois, puis montre un récapitulatif avec le coût."],["Bouton « Lancer »","Rien ne part sans un clic humain : l'IA n'a pas accès à ce bouton."],["Le studio","Découpe la parole en phrases et traduit chacune pour tenir dans son créneau. Jamais plus de 10 % d'accélération : au-delà, Claude réécrit la phrase."],["Contrôle qualité","Relit la traduction, vérifie le son (niveau, saturation, silences) et le minutage, et peut renvoyer la vidéo en correction."],["Livraison","Un dossier Google Drive par client et par langue, puis la vidéo sur Telegram avec son coût réel."],["Le réparateur","Surveille les pannes, relance une fois ce qui peut l’être sans risque et prévient sur Telegram."],["Salle de contrôle","Chaque agent au travail, en direct, en lecture seule."],["Garde-fous en base","La base refuse un clone de voix sans accord écrit enregistré ; le tunnel n'expose que les webhooks, jamais l'interface de n8n."],["Coûts mesurés","Le coût réel de chaque exécution est enregistré ; une alerte part sous 20 % de crédits ElevenLabs."],["Simulateur","Telegram, Claude, ElevenLabs et Google sont simulés : le test de bout en bout fait tourner le vrai n8n et le vrai ffmpeg sans dépenser un centime."],["Prospection prête","Un éclaireur note des créateurs, un commercial rédige dans leur langue, et chaque envoi attend une validation sur Telegram."]],jobhunter:[["Bot Telegram sécurisé","Sans le secret Telegram, refus immédiat ; un identifiant inconnu est ignoré et journalisé sans son message."],["Profileur","Lit le CV en PDF, cadre la recherche question par question et ne s’active qu’au clic sur « Confirmer »."],["Chercheur","74 opportunités reçues sur un test réel, 68 nouvelles, et 0 doublon au second passage."],["Analyste","Note chaque offre : 15 cas de test sur 15 corrects, trois fois de suite, grâce à des plafonds stricts."],["Enquêteur","Retrouve le vrai site de l'entreprise (19 cas sur 19) et n'invente jamais une adresse e-mail."],["Rédacteur et vérificateur","Le vérificateur relit chaque candidature contre le CV et l’offre ; la base refuse un e-mail sans relecture réussie."],["Coûts mesurés","0,07 $ par candidature rédigée, 0,01 $ pour noter 68 offres."],["Poste de pilotage","Radar des offres par département, agents en direct, tableau à glisser-déposer, palette Ctrl K, entonnoir et test A/B."],["Machine à états","Une seule table de règles pour le tableau, la simulation et les tests ; la page « Coulisses » la dessine à partir du code."],["Accessibilité","Clavier, annonces vocales en français, mouvement réduit et contrôles automatiques avec axe."]],aiguilleur:[["Tour de contrôle","Le journal affiché en direct, avec une copie locale pour respecter le quota de Google."],["Chien de garde","Contrôle toutes les 15 min : Gmail, Claude, Google Sheet, e-mails bloqués, budget IA."],["Rapport du lundi","La semaine de la direction, chaque lundi à 8 h, par e-mail et sur Telegram."],["Relance des urgences","Bouton « Je m’en occupe » sur Telegram, relance après 30 min sans prise en charge."],["Corrections","Les 3 corrections les plus proches guident Claude à chaque nouvel e-mail."],["Échéances légales","Délais en jours ouvrés hors fériés, rappel la veille à 8 h, direction en copie le jour J."],["Garde-fous","Règles codées en dur, anti-manipulation, IBAN masqué, repli vers l’accueil si Claude ne répond pas."],["Banc d’essai","32 e-mails pièges testés sans rien envoyer avant chaque démo."]]},en:{doublage:[["The director","Reads its memory, fills a needs sheet, asks one question at a time, then shows a summary with the cost."],["“Launch” button","Nothing starts without a human click: the AI has no access to that button."],["The studio","Splits speech into sentences and translates each to fit its original slot. Never sped up more than 10 %: beyond that, Claude rewrites the sentence."],["Quality control","Reviews the translation, checks the audio (level, clipping, silences) and timing, and can send the video back for fixes."],["Delivery","One Google Drive folder per client and language, then the video on Telegram with its real cost."],["The fixer","Watches for failures, retries once whatever is safe to retry and warns on Telegram."],["Control room","Every agent at work, live, read-only."],["Database guardrails","The database rejects a voice clone without a recorded written consent; the tunnel only exposes webhooks, never the n8n UI."],["Measured costs","The real cost of every run is stored; an alert fires under 20 % of ElevenLabs credits."],["Simulator","Telegram, Claude, ElevenLabs and Google are mocked: the end-to-end test runs real n8n and real ffmpeg for free."],["Prospecting ready","A scout rates creators, a sales agent writes in their language, and every send waits for approval on Telegram."]],jobhunter:[["Secured Telegram bot","Rejected without the Telegram secret; an unknown ID is ignored and logged without its message."],["Profiler","Reads the PDF CV, frames the search question by question and only activates on “Confirm”."],["Researcher","74 opportunities received in a real test, 68 new, and 0 duplicate on the second pass."],["Analyst","Scores each offer: 15 test cases out of 15 correct, three times in a row, thanks to strict caps."],["Investigator","Finds the company’s real website (19 cases out of 19) and never invents an email address."],["Writer and reviewer","The reviewer checks each application against the CV and the offer; the database refuses an email without a passed review."],["Measured costs","$0.07 per drafted application, $0.01 to score 68 offers."],["Control room","Offer radar by département, live agents, drag-and-drop board, Ctrl K palette, funnel and A/B test."],["State machine","One rules table for the board, the simulation and the tests; the “Backstage” page draws it from the code."],["Accessibility","Keyboard, French screen-reader announcements, reduced motion and automated axe checks."]],aiguilleur:[["Control tower","The log shown live, with a local copy to respect Google’s quota."],["Watchdog","Checks every 15 min: Gmail, Claude, Google Sheet, stuck emails, AI budget."],["Monday report","Management’s week, every Monday at 8 am, by email and Telegram."],["Urgent follow-up","“I’ll take it” button on Telegram, follow-up after 30 min without pickup."],["Corrections","The 3 closest corrections guide Claude with every new email."],["Legal deadlines","Business-day deadlines excluding holidays, reminder the day before at 8 am, management copied on the day."],["Guardrails","Hard-coded rules, anti-manipulation, masked IBAN, fallback to the front desk if Claude fails."],["Test bench","32 trap emails tested without sending anything before every demo."]]}},vt=r=>String(r).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Er=r=>String(r).padStart(2,"0"),L1={tower:r=>`<div class="viz tw" aria-hidden="true">
    <div class="tw__head mono"><span><i class="live"></i>${vt(r.head)}</span><span>${vt(r.live)}</span></div>
    <div class="tw__kpis">${r.kpis.map((e,t)=>`<div><b data-kpi="${t}">${[128,3,0][t]}</b><small>${vt(e)}</small></div>`).join("")}</div>
    <ul class="tw__feed" data-feed></ul>
    <svg class="tw__spark" viewBox="0 0 300 54" preserveAspectRatio="none"><defs><linearGradient id="twg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f80ff" stop-opacity=".45"/><stop offset="1" stop-color="#2f80ff" stop-opacity="0"/></linearGradient></defs>
      <path class="tw__area" d="M0 44 C25 40 35 30 60 32 S95 18 120 24 S160 36 185 20 S230 8 255 16 S285 10 300 6 V54 H0Z" fill="url(#twg)"/>
      <path class="tw__line" d="M0 44 C25 40 35 30 60 32 S95 18 120 24 S160 36 185 20 S230 8 255 16 S285 10 300 6" fill="none" stroke="#2f80ff" stroke-width="2"/></svg>
  </div>`,watchdog:r=>`<div class="viz wd" aria-hidden="true">
    <svg class="wd__ecg" viewBox="0 0 300 64" preserveAspectRatio="none"><path class="wd__base" d="M0 34 H300"/><path class="wd__line" d="M0 34 H48 L58 34 L66 10 L76 56 L84 34 H140 L150 34 L158 14 L168 52 L176 34 H232 L242 34 L250 10 L260 56 L268 34 H300"/></svg>
    <ul class="wd__checks mono">${r.checks.map(e=>`<li><i></i>${vt(e)}</li>`).join("")}</ul>
    <div class="wd__timer mono">${vt(r.next)} <b data-timer>15:00</b></div>
  </div>`,report:r=>`<div class="viz rp" aria-hidden="true">
    <div class="rp__from mono">${vt(r.from)}</div><div class="rp__subj">${vt(r.subj)}</div>
    ${r.rows.map((e,t)=>`<div class="rp__row"><span>${vt(e)}</span><i style="--w:${[86,64,92,34][t]}%"></i></div>`).join("")}
  </div>`,relance:r=>`<div class="viz rl" aria-hidden="true">
    <div class="rl__msg"><span class="mono">${vt(r.app)}</span><p>${vt(r.msg)}</p><span class="rl__btn">${vt(r.btn)}</span></div>
    <div class="rl__clock"><svg viewBox="0 0 80 80"><circle class="bg" cx="40" cy="40" r="34"/><circle class="fg" cx="40" cy="40" r="34"/></svg><span class="mono" data-countdown>30:00</span><em class="mono">${vt(r.tag)}</em></div>
  </div>`,learn:r=>`<div class="viz ln" aria-hidden="true">
    <div class="ln__cards">${r.cards.map((e,t)=>`<span class="ln__card mono" style="--i:${t}">${vt(e)}</span>`).join("")}</div>
    <span class="ln__arrow">→</span><span class="ln__claude">Claude</span>
    <span class="ln__badge mono">${vt(r.badge)}</span>
  </div>`,deadline:r=>`<div class="viz dl" aria-hidden="true">
    <div class="dl__days">${r.days.map((e,t)=>`<span class="dl__d${t===5||t===6?" is-off":""}${t===8?" is-hol":""}${t===9?" is-due":""}" data-day="${t}"><b>${vt(e)}</b>${t===8?`<small>${vt(r.holiday)}</small>`:""}${t===9?`<small>${vt(r.due)}</small>`:""}${t===7?`<small class="dl__rem">${vt(r.remind)}</small>`:""}</span>`).join("")}</div>
    <div class="dl__mem"><i></i><i></i><i></i><i></i><i></i><span class="mono">30 j</span></div>
  </div>`,guards:r=>`<div class="viz gd" aria-hidden="true">
    <ul class="gd__rules">${r.rules.map(e=>`<li><span class="gd__lock">🔒</span><span>${vt(e)}</span><em class="mono">${vt(r.block)}</em></li>`).join("")}</ul>
    <div class="gd__iban mono">IBAN <b data-iban>FR76 3000 6000 0112 3456 7890 189</b></div>
  </div>`,bench:r=>`<div class="viz tm" aria-hidden="true"><div class="tm__bar"><i></i><i></i><i></i></div><div class="tm__body mono" data-term data-lines="${vt(JSON.stringify(r.lines))}"></div></div>`,errors:r=>`<div class="viz er" aria-hidden="true">${r.lines.map((e,t)=>`<p class="mono${e.startsWith("✕")?" is-err":""}${t===3?" is-mute":""}" style="--i:${t}">${vt(e)}</p>`).join("")}</div>`,multi:r=>`<div class="viz mt" aria-hidden="true">
    <div class="mt__col">${r.trades.map(e=>`<span class="mt__chip">${vt(e)}</span>`).join("")}</div>
    <div class="mt__flow"><i></i><i></i><i></i></div>
    <div class="mt__col">${r.files.map(e=>`<span class="mt__file mono">${vt(e)}</span>`).join("")}</div>
    <div class="mt__flow"><i></i><i></i><i></i></div>
    <div class="mt__col">${r.out.map(e=>`<span class="mt__out mono">${vt(e)}</span>`).join("")}</div>
  </div>`};function Id(r){return Bp[r]||Bp.fr}function D1(r){const e=Id(r);return P1.map(t=>e.tiles.find(n=>n.id===t)).filter(Boolean).map((t,n)=>`<article class="tile tile--${t.size} tile--${t.id}">
    <div class="tile__viz">${L1[t.id](e.viz[t.id])}</div>
    <div class="tile__txt"><span class="tile__n mono">${Er(n+1)}</span><h3>${vt(t.title)}</h3><p>${vt(t.text)}</p></div>
  </article>`).join("")}function I1(r,e){const t=(zp[r]||zp.fr)[e];return t?`<section class="feats"><h4>${r==="fr"?"Sous le capot":"Under the hood"}</h4><div class="feats__grid">${t.map(([i,s],o)=>`<div class="feat"><span class="mono">${Er(o+1)}</span><b>${vt(i)}</b><p>${vt(s)}</p></div>`).join("")}</div></section>`:""}function U1({reduced:r,lang:e}){const t=document.getElementById("hood");if(!t)return;const n=[...t.querySelectorAll(".tile")],i=Id(e),s=I=>I.closest(".tile").classList.contains("is-live")&&!document.documentElement.classList.contains("fx-off");if(r){n.forEach(I=>I.classList.add("is-live","is-static")),N1(t,i);return}const o=new IntersectionObserver(I=>I.forEach(D=>D.target.classList.toggle("is-live",D.isIntersecting)),{threshold:.2});n.forEach(I=>o.observe(I)),he.from(n,{y:70,opacity:0,clipPath:"inset(18% 0 0 0 round 22px)",duration:1.2,ease:"expo.out",stagger:.07,scrollTrigger:{trigger:t,start:"top 82%"}});const a=window.matchMedia("(hover: hover) and (pointer: fine)").matches;n.forEach(I=>{const D=I.querySelector(".tile__viz"),B=a&&he.quickTo(I,"rotationX",{duration:.7,ease:"power3"}),X=a&&he.quickTo(I,"rotationY",{duration:.7,ease:"power3"}),W=a&&he.quickTo(D,"x",{duration:.7,ease:"power3"}),q=a&&he.quickTo(D,"y",{duration:.7,ease:"power3"});a&&he.set(I,{transformPerspective:1300}),I.addEventListener("pointermove",H=>{const ne=I.getBoundingClientRect();if(I.style.setProperty("--mx",`${H.clientX-ne.left}px`),I.style.setProperty("--my",`${H.clientY-ne.top}px`),!a||document.documentElement.classList.contains("fx-off"))return;const U=(H.clientX-ne.left)/ne.width-.5,ce=(H.clientY-ne.top)/ne.height-.5;X(U*5.5),B(-ce*5.5),W(U*12),q(ce*12)}),a&&I.addEventListener("pointerleave",()=>{B(0),X(0),W(0),q(0)})});const l=t.querySelector("[data-feed]"),c=i.viz.tower.feed,u=[...t.querySelectorAll("[data-kpi]")],f=7;let h=0,d=581;const g=I=>`${Er(Math.floor(I/60)%24)}:${Er(I%60)}`,_=([I,D,B,X])=>`<li class="t-${X||"n"}"><span class="mono">${I}</span><b>${vt(D)}</b><span>${vt(B)}</span></li>`;l&&c.slice(0,f).forEach(I=>l.insertAdjacentHTML("beforeend",_(I))),l&&setInterval(()=>{if(!s(l))return;const I=c[h++%c.length];d+=1+h%3,l.insertAdjacentHTML("afterbegin",_([g(d),I[1],I[2],I[3]]));const D=l.firstElementChild;for(he.from(D,{height:0,opacity:0,y:-14,duration:.6,ease:"expo.out"}),he.fromTo(D,{backgroundColor:"rgba(47,128,255,.28)"},{backgroundColor:"rgba(47,128,255,0)",duration:1.6});l.children.length>f;)l.lastElementChild.remove();u[0].textContent=+u[0].textContent+1,I[3]==="u"&&(u[1].textContent=+u[1].textContent+1,he.fromTo(u[1],{color:"#ff6b6b"},{color:"#eceef2",duration:1.4}))},2300);const m=[...t.querySelectorAll(".wd__checks li")],p=t.querySelector("[data-timer]");let S=0,y=900;p&&(setInterval(()=>{s(p)&&(y=y<=1?900:y-1,p.textContent=`${Er(Math.floor(y/60))}:${Er(y%60)}`)},1e3),setInterval(()=>{if(s(p)){if(S===m.length){m.forEach(I=>I.classList.remove("is-ok")),S=0;return}m[S++].classList.add("is-ok")}},700));const v=[],E=t.querySelector("[data-countdown]"),w=t.querySelector(".rl__clock .fg"),b=t.querySelector(".rl");if(b){const I=2*Math.PI*34;w.style.strokeDasharray=I,v.push([b,he.timeline({repeat:-1,paused:!0,repeatDelay:.6}).fromTo(w,{strokeDashoffset:0},{strokeDashoffset:I,duration:6,ease:"none",onUpdate(){const D=Math.round(1800*(1-this.progress()));E.textContent=`${Er(Math.floor(D/60))}:${Er(D%60)}`}}).add(()=>b.classList.add("is-fired")).to({},{duration:1.6}).add(()=>b.classList.remove("is-fired"))])}const C=[...t.querySelectorAll(".dl__d")];if(C.length){const I=he.timeline({repeat:-1,paused:!0,repeatDelay:1});C.forEach((D,B)=>{!D.classList.contains("is-off")&&!D.classList.contains("is-hol")&&I.add(()=>D.classList.add("is-count"),B*.45)}),I.add(()=>C.forEach(D=>D.classList.remove("is-count")),"+=1.4"),v.push([C[0],I])}const M=[...t.querySelectorAll(".gd__rules li")],x=t.querySelector("[data-iban]");if(x){const I=x.textContent,D=I.replace(/^(\S+)(.*)(\s\S+)$/,(X,W,q,H)=>W+q.replace(/\d/g,"•")+H),B=he.timeline({repeat:-1,paused:!0,repeatDelay:.8});M.forEach((X,W)=>B.add(()=>{M.forEach(q=>q.classList.remove("is-hit")),X.classList.add("is-hit")},W*.9)),B.add(()=>{M.forEach(X=>X.classList.remove("is-hit"))},"+=0.9"),B.add(()=>{x.textContent=D,x.classList.add("is-masked")},.5).add(()=>{x.textContent=I,x.classList.remove("is-masked")},"+=0.2"),v.push([x,B])}const L=t.querySelector("[data-term]");if(L){const I=JSON.parse(L.dataset.lines),D=he.timeline({repeat:-1,paused:!0,repeatDelay:1.6});D.add(()=>{L.innerHTML=""}),I.forEach((B,X)=>{const W={n:0};D.add(()=>L.insertAdjacentHTML("beforeend",`<p class="${B.startsWith("$")?"is-cmd":B.startsWith("●")?"is-rec":"is-out"}"></p>`)),D.to(W,{n:B.length,duration:B.startsWith("$")?B.length*.035:.25,ease:"none",onUpdate:()=>{L.children[X].textContent=B.slice(0,Math.round(W.n))}}),D.to({},{duration:.35})}),v.push([L,D])}setInterval(()=>v.forEach(([I,D])=>{s(I)?D.paused()&&D.play():D.paused()||D.pause()}),300)}function N1(r,e){const t=r.querySelector("[data-feed]");t&&(t.innerHTML=e.viz.tower.feed.slice(0,7).map(([i,s,o,a])=>`<li class="t-${a||"n"}"><span class="mono">${i}</span><b>${vt(s)}</b><span>${vt(o)}</span></li>`).join("")),r.querySelectorAll(".wd__checks li").forEach(i=>i.classList.add("is-ok"));const n=r.querySelector("[data-term]");n&&(n.innerHTML=JSON.parse(n.dataset.lines).map(i=>`<p class="${i.startsWith("$")?"is-cmd":i.startsWith("●")?"is-rec":"is-out"}">${vt(i)}</p>`).join("")),r.querySelectorAll(".dl__d:not(.is-off):not(.is-hol)").forEach(i=>i.classList.add("is-count"))}const Ho=new N;function vi(r,e,t,n,i,s){const o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;Ho.copy(e),Ho[n]=0,Ho.normalize();const c=.5*o/(o+a),u=1-Ho.angleTo(r)/l;return Math.sign(Ho[t])===1?u*c:a/(o+a)+c+c*(1-u)}class F1 extends bi{constructor(e=1,t=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new N,l=new N,c=new N(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,d=u.length/6,g=new N,_=.5/i;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),u[m+0]=c.x*Math.sign(a.x)+l.x*s,u[m+1]=c.y*Math.sign(a.y)+l.y*s,u[m+2]=c.z*Math.sign(a.z)+l.z*s,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/d)){case 0:g.set(1,0,0),h[p+0]=vi(g,l,"z","y",s,n),h[p+1]=1-vi(g,l,"y","z",s,t);break;case 1:g.set(-1,0,0),h[p+0]=1-vi(g,l,"z","y",s,n),h[p+1]=1-vi(g,l,"y","z",s,t);break;case 2:g.set(0,1,0),h[p+0]=1-vi(g,l,"x","z",s,e),h[p+1]=vi(g,l,"z","x",s,n);break;case 3:g.set(0,-1,0),h[p+0]=1-vi(g,l,"x","z",s,e),h[p+1]=1-vi(g,l,"z","x",s,n);break;case 4:g.set(0,0,1),h[p+0]=1-vi(g,l,"x","y",s,e),h[p+1]=1-vi(g,l,"y","x",s,t);break;case 5:g.set(0,0,-1),h[p+0]=vi(g,l,"x","y",s,e),h[p+1]=1-vi(g,l,"y","x",s,t);break}}}const Ot={blue:3113215,ice:9091327,green:3530891,amber:16757575,red:16734810},Pn=[[-9,0],[-6,.9],[-3,0],[0,.6],[2.8,-1.7],[4.3,1.9],[7.4,.2]],O1=[Ot.blue,Ot.blue,Ot.ice,Ot.blue,Ot.amber,Ot.red,Ot.green],kp=[[0,1,.35,Ot.blue],[1,2,1.35,Ot.blue],[2,3,2.35,Ot.blue],[3,4,3.35,Ot.amber],[3,5,4.35,Ot.red],[4,6,5.35,Ot.green],[5,6,5.35,Ot.green]],Ys=.75,Go=.085,Vo=.9,Sl=[[-.7,-9,0],[.35,-9,0],[1.1,-6,.9],[1.35,-6,.9],[2.1,-3,0],[2.35,-3,0],[3.1,0,.6],[3.35,0,.6],[4.1,2.6,-.9],[5.1,3.6,1.1],[5.35,3.8,1],[6.1,6,.3],[9,6,.3]],Hh=r=>Math.min(1,Math.max(0,r)),vn=(r,e,t)=>{const n=Hh((t-r)/(e-r));return n*n*(3-2*n)},jt=(r,e,t)=>r+(e-r)*t;function B1(){const r=document.createElement("canvas");r.width=r.height=128;const e=r.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.22,"rgba(255,255,255,.55)"),t.addColorStop(.55,"rgba(255,255,255,.13)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new Bg(r)}function z1(){const i=document.createElement("canvas");i.width=512,i.height=407;const s=i.getContext("2d"),o=()=>{s.beginPath(),s.moveTo(82,56),s.arcTo(456,56,456,351,26),s.arcTo(456,351,56,351,26),s.arcTo(56,351,56,56,26),s.arcTo(56,56,456,56,26),s.closePath()};return s.strokeStyle="#fff",s.shadowColor="#fff",s.lineWidth=10,s.shadowBlur=34,s.globalAlpha=.5,o(),s.stroke(),s.lineWidth=4,s.shadowBlur=10,s.globalAlpha=1,o(),s.stroke(),new Bg(i)}function k1(r,e){const t=new us,n=[],i=(a=.1)=>{const l=new Vg({color:1845570,emissive:e.clone(),emissiveIntensity:a,metalness:.15,roughness:.4,flatShading:!0});return l.userData.base=a,n.push(l),l},s=(a,l,c=0,u=0,f=0)=>{const h=new Wt(a,l);return h.position.set(c,u,f),t.add(h),h},o=new or({color:15397375});if(r===0){s(new bi(.74,.48,.06),i());const a=new Float32Array([-.37,.24,0,0,-.03,0,0,-.03,0,.37,.24,0]);[.034,-.034].forEach(l=>{const c=new Qt;c.setAttribute("position",new sn(a,3));const u=new vx(c,new Og({color:15397375}));u.position.z=l,t.add(u)})}else if(r===1)for(let a=0;a<3;a++)s(new bi(.66,.06,.46),i(),0,(a-1)*.17,0).rotation.y=(a-1)*.28;else if(r===2){s(new rc(.2,0),i(.45));const a=new Wt(new rc(.42,1),new or({color:e,wireframe:!0,transparent:!0,opacity:.5}));t.add(a),t.userData.shell=a}else if(r===3)s(new Cd(.36,0),i()).scale.y=1.3;else if(r===4)s(new bi(.5,.66,.04),i()),[.17,.03,-.11].forEach((a,l)=>[.025,-.025].forEach(c=>s(new bi(l===2?.2:.34,.035,.008),o,l===2?-.07:0,a,c)));else if(r===5)s(new Pd(.34,.036,10,44),i()),s(new bi(.075,.27,.075),i(.45),0,.06,0),s(new wa(.052,12,10),i(.45),0,-.17,0);else for(let a=0;a<9;a++)s(new bi(.17,.17,.17),i(),(a%3-1)*.23,(1-Math.floor(a/3))*.23,0);return{g:t,mats:n}}const Hp="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",H1=`
uniform float uFill; uniform vec3 uColor; uniform float uTime; varying vec2 vUv;
void main(){
  float on = step(.0005, uFill);
  float lit = smoothstep(uFill + .006, uFill - .006, vUv.x) * on;
  float head = smoothstep(.08, 0., abs(vUv.x - uFill)) * on * step(uFill, .9995);
  float dash = .72 + .28 * sin(vUv.x * 44. - uTime * 5.);
  vec3 col = mix(vec3(.022, .03, .055), uColor * dash * 1.2, lit) + vec3(1.) * head * .8;
  gl_FragColor = vec4(col, 1.);
  #include <colorspace_fragment>
}`,G1=`
uniform float uFill; uniform vec3 uColor; varying vec2 vUv;
void main(){
  float on = step(.0005, uFill);
  float lit = smoothstep(uFill + .01, uFill - .01, vUv.x) * on;
  float head = smoothstep(.1, 0., abs(vUv.x - uFill)) * on * step(uFill, .9995);
  gl_FragColor = vec4(uColor, lit * .17 + head * .55);
  #include <colorspace_fragment>
}`,V1=`
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
}`;function W1({section:r,mount:e,labels:t}){const n=document.documentElement,i=document.createElement("canvas");i.className="pipe3d",i.setAttribute("aria-hidden","true");const s=new Zg({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const o=document.createElement("i");o.className="pipe3d__shade",o.setAttribute("aria-hidden","true"),e.prepend(i,o),r.classList.add("is-3d");const a=new Ng,l=new Gn(30,1,.1,120),c={glow:B1(),rim:z1()},u={value:0};a.add(new zx(8229828,1.25));const f=new Bx(16777215,1.7);f.position.set(-5,9,6),a.add(f);const h=new op(11061503,0,9,2);h.position.set(0,1.2,3),a.add(h);const d={uFocus:{value:new N},uRadius:{value:16},uTime:u},g=new Wt(new Br(90,60),new jn({transparent:!0,depthWrite:!1,uniforms:d,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:V1}));g.rotation.x=-Math.PI/2,a.add(g);const _=new F1(1.9,.2,1.4,4,.08),m=Pn.map(([P,K],k)=>{const V=new et(O1[k]),ie=new us;ie.position.set(P,0,K);const le=new Wt(_,new Vg({color:1317676,metalness:.3,roughness:.42,emissive:V.clone(),emissiveIntensity:0}));le.position.y=.1;const De=new Wt(new Br(2.432,1.933),new or({map:c.rim,color:V.clone(),transparent:!0,opacity:.2,blending:ri,depthWrite:!1}));De.rotation.x=-Math.PI/2,De.position.y=.206;const Ke=new Wt(new Br(4.6,3.9),new or({map:c.glow,color:V.clone(),transparent:!0,opacity:0,blending:ri,depthWrite:!1}));Ke.rotation.x=-Math.PI/2,Ke.position.y=.012;const st=new Wt(new wa(.045,12,8),new or({color:3817810}));st.position.set(.78,.225,.53);const me=()=>{const We=new Wt(new Rd(1,1.05,72),new or({color:V.clone(),transparent:!0,opacity:0,blending:ri,side:Hi,depthWrite:!1}));return We.rotation.x=-Math.PI/2,We.position.y=.03,We},Se=me(),Ve=me(),ge=k1(k,V);return ge.g.position.y=1,ie.add(le,De,Ke,st,Se,Ve,ge.g),a.add(ie),{g:ie,body:le,rim:De,halo:Ke,led:st,ring:Se,ping:Ve,glyph:ge,accent:V,spin:k*.9}}),p=kp.map(([P,K,k,V])=>{const ie=new N(Pn[P][0],.06,Pn[P][1]),le=new N(Pn[K][0],.06,Pn[K][1]),De=(le.x-ie.x)*.5,Ke=new Hg(ie,new N(ie.x+De,.06,ie.z),new N(le.x-De,.06,le.z),le),st={uFill:{value:0},uColor:{value:new et(V)},uTime:u},me=new Wt(new sc(Ke,56,.034,8,!1),new jn({uniforms:st,vertexShader:Hp,fragmentShader:H1})),Se=new Wt(new sc(Ke,56,.13,8,!1),new jn({uniforms:st,vertexShader:Hp,fragmentShader:G1,transparent:!0,depthWrite:!1,blending:ri}));return a.add(me,Se),{curve:Ke,uniforms:st,t0:k}}),S=(P,K,k)=>{const V=new et(P),ie=new us,le=new Wt(new wa(K,18,12),new or({color:16777215})),De=new jf(new Fh({map:c.glow,color:V.clone(),blending:ri,depthWrite:!1,transparent:!0}));De.scale.setScalar(K*10),ie.add(le,De);let Ke=null;k&&(Ke=new op(V.clone(),11,7,2),ie.add(Ke));const st=[];for(let me=0;me<14;me++){const Se=new jf(new Fh({map:c.glow,color:V.clone(),blending:ri,depthWrite:!1,transparent:!0,opacity:0}));Se.scale.setScalar(K*(6-me*.32)),a.add(Se),st.push(Se)}return ie.visible=!1,a.add(ie),{g:ie,halo:De,light:Ke,trail:st,col:V,size:K}},y=(P,K)=>{P.g.visible=K>.01,P.g.scale.setScalar(Math.max(K,.001)),P.halo.material.color.copy(P.col),P.light&&(P.light.color.copy(P.col),P.light.intensity=11*K);let k=P.g.position;P.trail.forEach((V,ie)=>{if(K<=.01){V.position.copy(P.g.position),V.material.opacity=0;return}V.position.lerp(k,.42),V.material.opacity=K*Math.min(1,V.position.distanceTo(P.g.position)*2.4)*(1-ie/P.trail.length)*.75,V.material.color.copy(P.col),k=V.position})},v=S(Ot.ice,.11,!0),E=S(Ot.red,.085,!1),w=S(Ot.green,.06,!1),b=S(Ot.green,.06,!1),C=S(Ot.green,.1,!1),M=60,x=new Float32Array(M*3),L=[];for(let P=0;P<M;P++){const K=Math.random()*Math.PI*2,k=Math.random()*1.2+.15,V=1.1+Math.random()*2.4;L.push([Math.cos(K)*Math.cos(k)*V,Math.sin(k)*V,Math.sin(K)*Math.cos(k)*V])}const I=new Qt;I.setAttribute("position",new sn(x,3));const D=new ic(I,new Oh({map:c.glow,color:Ot.green,size:.2,transparent:!0,opacity:0,blending:ri,depthWrite:!1}));D.frustumCulled=!1,a.add(D);const B=240,X=new Float32Array(B*3);for(let P=0;P<B;P++)X[P*3]=-14+Math.random()*26,X[P*3+1]=.3+Math.random()*4.2,X[P*3+2]=-7+Math.random()*13;const W=new Qt;W.setAttribute("position",new sn(X,3));const q=new ic(W,new Oh({map:c.glow,color:Ot.ice,size:.07,transparent:!0,opacity:.55,blending:ri,depthWrite:!1}));a.add(q);let H=1,ne=1,U=1.6,ce=0,xe=-.7,Fe=!0,Z=!1,j=!1,re=-1,ae=0,Me=performance.now(),qe=!1,Ue=!1;const tt=new Ne(0,0),it=new Hx,be=new Tr(new N(0,1,0),-1.2),F={x:-9,z:0},ht=new N,Ye=new N,G=new N,Te=new N,lt=new N,Ae=new N,R=new N,T=new et(Ot.amber),Y=new et(Ot.green),ee=new et(Ot.ice),te=new et(3817810),Q=new et,de=new N(Pn[4][0],.55,Pn[4][1]),ue=new Array(Pn.length).fill(0),Pe=P=>{let K=0;for(;K<Sl.length-2&&P>Sl[K+1][0];)K++;const k=Sl[K],V=Sl[K+1],ie=vn(k[0],V[0],P);F.x=jt(k[1],V[1],ie),F.z=jt(k[2],V[2],ie)},Le=(P,K,k=.55)=>K.set(Pn[P][0],k,Pn[P][1]),se=(P,K,k)=>(p[P].curve.getPointAt(K,k),k.y=.5+Math.sin(Math.PI*K)*.1,k),fe=(P,K,k,V,ie)=>ie.set(jt(jt(P[0],K[0],V),jt(K[0],k[0],V),V),jt(jt(P[1],K[1],V),jt(K[1],k[1],V),V),jt(jt(P[2],K[2],V),jt(K[2],k[2],V),V));function Ge(P,K){const k=u.value;for(let pe=0;pe<ue.length;pe++)ue[pe]=vn(pe,pe+.2,xe);p.forEach(pe=>{pe.uniforms.uFill.value=vn(0,1,(xe-pe.t0)/Ys)}),re>=0&&re<1&&(re=Math.min(1,re+P/1.9),Fe=!0);const V=j?re<0?1:vn(0,.3,re):0,ie=Q.copy(T).lerp(Y,V),le=m[4];le.rim.material.color.copy(ie),le.halo.material.color.copy(ie),le.ring.material.color.copy(ie),le.ping.material.color.copy(ie),le.body.material.emissive.copy(ie),le.glyph.mats.forEach(pe=>pe.emissive.copy(ie)),p[3].uniforms.uColor.value.copy(ie);let De=1;if(xe<0){const pe=vn(0,1,(xe+.7)/.7);fe([-14,3.4,-3],[-11,3.2,-1],[Pn[0][0],.55,Pn[0][1]],pe,v.g.position),De=vn(0,.25,pe)}else{let pe=!1;for(let Ze=0;Ze<4&&!pe;Ze++){const Ee=p[Ze].t0;xe<Ee?(Le(kp[Ze][0],v.g.position),pe=!0):xe<Ee+Ys&&(se(Ze,vn(0,1,(xe-Ee)/Ys),v.g.position),pe=!0)}pe||Le(4,v.g.position,.55+(K?0:Math.sin(k*2)*.03))}v.col.copy(ee).lerp(ie,vn(3.9,4.15,xe)),y(v,De);let Ke=0;xe>=4.35?xe<4.35+Ys?(se(4,vn(0,1,(xe-4.35)/Ys),E.g.position),Ke=1):(Le(5,E.g.position),Ke=.75):Le(3,E.g.position),y(E,Ke);const st=(xe-5.35)/Ys,me=st>0&&st<1?1:0;me?(se(5,vn(0,1,st),w.g.position),se(6,vn(0,1,st),b.g.position)):(Le(st<=0?4:6,w.g.position),Le(st<=0?5:6,b.g.position)),y(w,me),y(b,me);const Se=re>0&&re<1&&ue[4]>.5;if(Se){const pe=1-(1-re)**2.2;fe([de.x,de.y,de.z],[4.2,4.8,-2.8],[12,7.5,-9],pe,C.g.position);const Ze=1-(1-re)**3;for(let Ee=0;Ee<M;Ee++)x[Ee*3]=de.x+L[Ee][0]*Ze,x[Ee*3+1]=de.y+L[Ee][1]*Ze-Ze*Ze*.7,x[Ee*3+2]=de.z+L[Ee][2]*Ze;I.attributes.position.needsUpdate=!0,D.material.opacity=(1-re)*.95}else C.g.position.copy(de),D.material.opacity=0;y(C,Se?1-vn(.7,1,re):0),m.forEach((pe,Ze)=>{const Ee=ue[Ze],pt=Ze<4?vn(Ze+.02,Ze+.12,xe)*(1-vn(Ze+.3,Ze+.45,xe)):0;pe.body.material.emissiveIntensity=Ee*.09,pe.rim.material.opacity=.2+Ee*.8,pe.halo.material.opacity=Ee*.4+pt*.15,pe.led.material.color.copy(te).lerp(Ze===4&&V<.5?T:Y,Ee),pe.ring.scale.setScalar(1+Ee*1.5),pe.ring.material.opacity=Math.sin(Math.PI*Ee)*.85;const It=Ze===4?Ee*(1-V):Ze===5?Ee:0;if(It>.01&&!K){const xt=k*(Ze===5?.9:.55)%1;pe.ping.scale.setScalar(1+xt*1.5),pe.ping.material.opacity=(1-xt)*.55*It}else pe.ping.material.opacity=0;const mt=pe.glyph;K||(pe.spin+=P*(.35+Ee*.45+pt*6)),mt.g.rotation.y=pe.spin,mt.g.position.y=1+(K?0:Math.sin(k*1.3+Ze*1.7)*.05),mt.g.scale.setScalar(.8+Ee*.2+pt*.08),mt.mats.forEach((xt,yt)=>{xt.emissiveIntensity=xt.userData.base+(Ze===6?Hh(Ee*9-yt)*1.15:Ee*1.05)+pt*.8}),mt.g.userData.shell&&(mt.g.userData.shell.rotation.x=-pe.spin*.6,mt.g.userData.shell.material.opacity=.3+Ee*.5)}),K||(q.position.y=Math.sin(k*.25)*.18),Pe(xe);const Ve=vn(0,Go,ce)*(1-vn(Vo,1,ce)),ge=Math.max(1,1.5/U),We=Math.max(1,1.9/U);ht.set(F.x+.4,.6,F.z*.5+.3),Ye.set(jt(-1.2,ht.x-1.6*ge,Ve),jt(10.5*We,ht.y+4.4*ge,Ve),jt(17.5*We,ht.z+8.4*ge,Ve)),G.set(jt(-1.2,ht.x,Ve),jt(0,ht.y,Ve),jt(1.5,ht.z,Ve)),Ue&&(Ye.x+=tt.x*.7,Ye.y+=tt.y*.35);const Ie=K||!qe?1:1-Math.exp(-P*6);Te.lerp(Ye,Ie),lt.lerp(G,Ie),qe=!0,l.position.copy(Te),l.lookAt(lt),l.updateMatrixWorld(),d.uFocus.value.set(jt(-1.2,ht.x,Ve),0,jt(1.5,ht.z,Ve)),d.uRadius.value=jt(26*We,15*ge,Ve),it.setFromCamera(tt,l),Ue&&it.ray.intersectPlane(be,R)&&h.position.lerp(R,.25),h.intensity+=((Ue?16:0)-h.intensity)*.12,t.forEach((pe,Ze)=>{Ae.set(Pn[Ze][0],0,Pn[Ze][1]+1).project(l);const Ee=(Ae.x*.5+.5)*H,pt=(-Ae.y*.5+.5)*ne,It=Ae.z<1&&Ee>-90&&Ee<H+90&&pt>ne*.2&&pt<ne+20;pe.style.transform=`translate3d(${Ee.toFixed(1)}px, ${(pt+10).toFixed(1)}px, 0)`,pe.style.opacity=It?(.42+.58*ue[Ze]).toFixed(2):"0",pe.style.visibility=It?"visible":"hidden"})}const Oe=P=>{ae=requestAnimationFrame(Oe);const K=Math.min((P-Me)/1e3,.05);if(Me=P,!Z||document.hidden)return;const k=n.classList.contains("fx-off");k&&!Fe||(k||(u.value+=K),Fe=!1,Ge(K,k),s.render(a,l))},ye=()=>{H=e.clientWidth||window.innerWidth,ne=e.clientHeight||window.innerHeight,U=H/ne,s.setSize(H,ne,!1),l.aspect=U,l.updateProjectionMatrix(),Fe=!0},Qe=new ResizeObserver(ye);Qe.observe(e),ye();const $e=new IntersectionObserver(P=>{Z=P[0].isIntersecting,Fe=!0},{rootMargin:"10% 0px"});$e.observe(e);const dt=P=>{const K=e.getBoundingClientRect(),k=(P.clientX-K.left)/K.width,V=(P.clientY-K.top)/K.height;Ue=k>=0&&k<=1&&V>=0&&V<=1,tt.set(k*2-1,1-V*2)};return window.addEventListener("pointermove",dt,{passive:!0}),ae=requestAnimationFrame(Oe),{steps:Pn.length,setProgress(P){return ce=Hh(P),xe=ce<Go?-.7+ce/Go*.7:ce<Vo?(ce-Go)/(Vo-Go)*6.6:6.6+(ce-Vo)/(1-Vo)*.4,Fe=!0,xe},validate(){j||(j=!0,re=0,Fe=!0)},destroy(){cancelAnimationFrame(ae),Qe.disconnect(),$e.disconnect(),window.removeEventListener("pointermove",dt),a.traverse(P=>{P.geometry?.dispose(),P.material&&(Array.isArray(P.material)?P.material:[P.material]).forEach(K=>K.dispose())}),c.glow.dispose(),c.rim.dispose(),s.dispose(),i.remove(),o.remove(),r.classList.remove("is-3d"),t.forEach(P=>{P.style.transform="",P.style.opacity="",P.style.visibility=""})}}}he.registerPlugin(Xe);Xe.addEventListener("refreshInit",()=>Xe.sort((r,e)=>{const t=r.trigger,n=e.trigger;return!t||!n||t===n?t===n?0:t?1:-1:t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}));const He=(r,e=document)=>e.querySelector(r),ui=(r,e=document)=>[...e.querySelectorAll(r)],Zn=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Kg=window.matchMedia("(hover: hover) and (pointer: fine)").matches,Qg=new URLSearchParams(location.search),e_=Zn||Qg.has("og");let Aa=!1,oc=!1,t_=null;try{t_=localStorage.getItem("lang")}catch{}const Bn=Qg.get("lang")||t_||((navigator.language||"fr").startsWith("fr")?"fr":"en"),bn=bf[Bn]||bf.fr,Tn=bn.ui;document.documentElement.lang=Bn;document.title=bn.meta.title;He('meta[name="description"]').setAttribute("content",bn.meta.description);ui("[data-i18n]").forEach(r=>{const e=Tn[r.dataset.i18n];e!=null&&(r.innerHTML=e)});const n_=He("#langBtn");n_.setAttribute("aria-label",Tn["lang.switch"]);He(".lang__on").textContent=Bn.toUpperCase();He(".lang__off").textContent=Bn==="fr"?"EN":"FR";const gt=r=>String(r).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Eo=r=>String(r).padStart(2,"0");He("#stats").innerHTML=bn.stats.map(r=>`<div class="stat"><div class="stat__n"><span data-count="${r.n}">0</span><small>${gt(r.suffix)}</small></div><p>${gt(r.label)}</p></div>`).join("");He("#workList").innerHTML=bn.projects.map((r,e)=>`<li><button class="row" type="button" data-project="${r.id}" data-cursor="view"${r.img?` data-img="${r.img}"`:""}>
  <span class="row__n mono">${Eo(e+1)}</span><span class="row__title">${gt(r.title)}</span><span class="row__sub">${gt(r.sub)}</span>
  <span class="row__tags">${r.tags.map(t=>`<i class="tag">${gt(t)}</i>`).join("")}</span><span class="row__arrow" aria-hidden="true">→</span></button></li>`).join("");const lo=bn.pipeline.human;He("#pipelineGraph").innerHTML=bn.pipeline.nodes.map(([r,e],t)=>`<div class="node${t===lo.index?" node--human":""}"><div class="node__box"><div class="node__i mono"><span>${Eo(t+1)}</span><b></b></div><div class="node__t">${gt(r)}</div><div class="node__d">${gt(e)}</div>${t===lo.index?`<button class="node__ok mono" type="button">${gt(lo.btn)}</button>`:""}</div><i class="node__link"></i></div>`).join("");He("#pipelineLog").innerHTML=bn.pipeline.log.map(r=>`<p>${gt(r)}</p>`).join("")+`<p class="is-human">${gt(lo.log)}</p>`;He("#reel").innerHTML=bn.motion.map((r,e)=>`<button class="clip" type="button" style="aspect-ratio:${r.ratio}" data-video="${r.src}" data-cursor="view" aria-label="${gt(Tn["motion.play"])} — ${gt(r.title)}">
  <video muted loop playsinline preload="none" poster="${r.poster}" data-src="${r.src}"></video><span class="clip__n mono">${Eo(e+1)}</span>
  <span class="clip__cap"><strong>${gt(r.title)}</strong><span class="mono">${gt(r.meta)}</span></span></button>`).join("");const xc=Id(Bn);He("#hoodLabel").textContent=xc.label;He("#hoodTitle").innerHTML=xc.title;He("#hoodIntro").textContent=xc.intro;He("#hoodNote").textContent=xc.note;He("#hood").innerHTML=D1(Bn);He("#caps").innerHTML=bn.caps.map(([r,e],t)=>`<article class="cap"><span class="cap__n mono">${Eo(t+1)}</span><h3>${gt(r)}</h3><ul>${e.map(n=>`<li>${gt(n)}</li>`).join("")}</ul></article>`).join("");He("#path").innerHTML=bn.path.map(([r,e,t,n])=>`<li class="step"><span class="step__y mono">${gt(r)}</span><div><h3>${gt(e)}</h3><p class="step__o">${gt(t)}</p></div><p class="step__d">${gt(n)}</p></li>`).join("");function i_(r,e="w"){const t=n=>{[...n.childNodes].forEach(i=>{if(i.nodeType===3){const s=document.createDocumentFragment();i.textContent.split(/(\s+)/).forEach(o=>{if(!o)return;if(/^\s+$/.test(o)){s.append(" ");return}const a=document.createElement("span");if(a.className=e,e==="w"){const l=document.createElement("span");l.textContent=o,a.append(l)}else a.textContent=o;s.append(a)}),i.replaceWith(s)}else i.nodeType===1&&t(i)})};t(r)}ui('[data-split="chars"]').forEach(r=>{const e=[...r.childNodes].map(t=>t.nodeType===3?[...t.textContent].map(n=>`<span class="char">${n}</span>`).join(""):`<span class="char">${t.outerHTML}</span>`).join("");r.innerHTML=e});ui(".title, .contact__title").forEach(r=>i_(r));i_(He("#manifestoText"),"mw");let Vn=null;Zn||(Vn=new Z0({duration:1.15,smoothWheel:!0}),Vn.on("scroll",Xe.update),he.ticker.add(r=>Vn.raf(r*1e3)),he.ticker.lagSmoothing(0),e_||Vn.stop());const X1=r=>{const e=He(r);e&&(Vn?Vn.scrollTo(e,{duration:1.6}):e.scrollIntoView())};document.addEventListener("click",r=>{const e=r.target.closest('a[href^="#"]');e&&(r.preventDefault(),Fd(),Nd(),X1(e.getAttribute("href")))});let Nt=null;try{Nt=A1(He("#gl"),{reduced:Zn})}catch{He("#gl").remove()}function q1(){document.body.classList.remove("is-loading"),Vn?.start();const r=he.timeline({defaults:{ease:"expo.out"}});Nt&&r.to(Nt.uniforms.uIntro,{value:1,duration:2.4,ease:"expo.out"},0),r.from(".hero__line .char",{yPercent:120,rotate:6,rotateX:-85,transformPerspective:700,duration:1.5,stagger:.035},.1).from(".hero__top > *, .hero__bottom > *",{y:26,opacity:0,duration:1.1,stagger:.08},.7).from(".header > *",{y:-30,opacity:0,duration:1,stagger:.08},.6).from(".hero__bottom",{"--line":0,duration:1},.6),Xe.refresh()}if(e_)He("#loader").remove(),document.body.classList.remove("is-loading"),Nt&&(Nt.uniforms.uIntro.value=1);else{const r={v:0};he.timeline({onComplete:q1}).to(".loader__log li",{opacity:1,y:0,duration:.4,stagger:.32,ease:"power2.out"},.1).to(r,{v:100,duration:1.9,ease:"power2.inOut",onUpdate:()=>{He("#loaderCount").textContent=String(Math.round(r.v)).padStart(3,"0")}},0).to("#loaderBar",{scaleX:1,duration:1.9,ease:"power2.inOut"},0).to(".loader__count, .loader__log, .loader__name",{yPercent:-40,opacity:0,duration:.6,ease:"power3.in",stagger:.04},"+=0.15").to("#loader",{clipPath:"inset(0 0 100% 0)",duration:1,ease:"expo.inOut"},"-=0.25").set("#loader",{display:"none"})}if(!Zn){Nt&&(Xe.create({trigger:".hero",start:"top top",end:"bottom top",scrub:!0,onUpdate:n=>{Nt.morph=n.progress,Nt.tilt=n.progress,Nt.fade=1-n.progress*.55}}),Xe.create({trigger:"#manifeste",start:"top 60%",endTrigger:"#contact",end:"top 80%",onEnter:()=>{Nt.fade=.3},onLeaveBack:()=>{Nt.fade=.45}}),Xe.create({trigger:"#contact",start:"top 75%",end:"bottom bottom",scrub:!0,onUpdate:n=>{Nt.morph=1-n.progress,Nt.tilt=1-n.progress,Nt.fade=.3+n.progress*.6}})),he.to(".hero__title",{yPercent:-18,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}}),he.to(".hero__line--right",{xPercent:-6,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}});const r=He("#marquee");r.innerHTML+=r.innerHTML;let e=0,t=1;Xe.create({onUpdate:n=>{const i=n.getVelocity();t=1+Math.min(Math.abs(i)/220,9)*(n.direction||1),Nt&&(Nt.velocity=Math.min(Math.abs(i)/3200,1))}}),he.ticker.add(()=>{e-=t*.9,t+=(1-t)*.06;const n=r.scrollWidth/2;e<=-n&&(e+=n),e>0&&(e-=n),r.style.transform=`translate3d(${e}px,0,0)`}),he.to("#manifestoText .mw",{opacity:1,stagger:.06,ease:"none",scrollTrigger:{trigger:"#manifestoText",start:"top 82%",end:"bottom 45%",scrub:.6}}),ui(".title, .contact__title").forEach(n=>{n.closest(".pipeline")||he.from(ui(".w > span",n),{yPercent:115,rotate:4,duration:1.25,ease:"expo.out",stagger:.06,scrollTrigger:{trigger:n,start:"top 88%"}})}),ui("[data-count]").forEach(n=>{const i={v:0},s=+n.dataset.count;he.to(i,{v:s,duration:1.8,ease:"power3.out",onUpdate:()=>{n.textContent=Math.round(i.v)},scrollTrigger:{trigger:n,start:"top 90%"}})}),he.from(".stat",{y:40,opacity:0,rotateX:-70,transformPerspective:800,transformOrigin:"50% 0%",duration:1.1,stagger:.09,ease:"expo.out",scrollTrigger:{trigger:"#stats",start:"top 88%"}}),he.from("#workList li",{y:60,opacity:0,rotateX:-32,transformPerspective:1100,transformOrigin:"50% 100%",duration:1.1,stagger:.08,ease:"expo.out",scrollTrigger:{trigger:"#workList",start:"top 85%"}}),he.from(".cap",{y:50,opacity:0,rotateX:-55,transformPerspective:900,transformOrigin:"50% 0%",duration:1.2,stagger:.08,ease:"expo.out",scrollTrigger:{trigger:"#caps",start:"top 85%"}}),ui(".step").forEach(n=>he.from(n,{y:34,opacity:0,rotateX:-40,transformPerspective:900,transformOrigin:"50% 0%",duration:1.1,ease:"expo.out",scrollTrigger:{trigger:n,start:"top 92%"}})),he.set("#mdmPages",{perspective:1500}),he.from("#mdmPages img",{yPercent:n=>20+n*12,rotateY:n=>-58+n*9,rotateX:12,z:n=>-280-n*70,opacity:.25,transformOrigin:"0% 50%",ease:"none",scrollTrigger:{trigger:"#mdmPages",start:"top bottom",end:"bottom 72%",scrub:.8}}),he.from(".contact__text, .contact__actions > *, .contact__list > div",{y:30,opacity:0,duration:1,stagger:.06,ease:"expo.out",scrollTrigger:{trigger:".contact__text",start:"top 92%"}}),Xe.create({start:200,onUpdate:n=>He("#header").classList.toggle("is-hidden",n.direction===1&&!Aa)})}const Gh=He(".pipeline"),ac=ui(".node"),Su=ui("#pipelineLog p:not(.is-human)"),Mu=He("#pipelineLog .is-human");let Ui=null,lc=!1,r_=0;function Bl(r){const e=ac.length,t=r*e;r_=r,ac.forEach((i,s)=>{i.classList.toggle("is-on",t>=s+.15),He(".node__link",i).style.setProperty("--p",Math.max(0,Math.min(1,t-s-.35)*1.6).toFixed(3))}),Su.forEach((i,s)=>i.classList.toggle("is-on",t>=s+.3)),Mu.classList.toggle("is-on",lc&&t>=lo.index+.15);const n=[...Su,Mu].filter(i=>i.classList.contains("is-on"));[...Su,Mu].forEach(i=>i.classList.toggle("is-tail",n.indexOf(i)>=Math.max(0,n.length-3)&&n.includes(i)))}He(".node__ok").addEventListener("click",()=>{lc||(lc=!0,Gh.classList.add("is-validated"),He(".node--human .node__d").textContent=lo.done,Ui?.validate(),Bl(r_))});const Gp=he.matchMedia(),yc=ui(".clip"),co=yc.map(()=>({ry:0,z:0,hx:0,hy:0}));let Vh=!1;const cc=r=>{const e=co[r];yc[r].style.transform=`${Vh?"":"perspective(900px) "}translateZ(${e.z.toFixed(1)}px) rotateY(${(e.ry+e.hy).toFixed(2)}deg) rotateX(${e.hx.toFixed(2)}deg)`};Zn?Bl(1):(Gp.add("(min-width: 761px)",()=>{he.from(".pipeline .w > span",{yPercent:115,duration:1.2,ease:"expo.out",stagger:.05,scrollTrigger:{trigger:".pipeline",start:"top 70%"}});try{Ui=W1({section:Gh,mount:He("#pipelineGraph"),labels:ac})}catch{Ui=null,Gh.classList.remove("is-3d")}Ui&&lc&&Ui.validate();const r=s=>Bl(Ui?Ui.setProgress(s)/ac.length:s*1.08),e=()=>document.documentElement.classList.contains("fx-off");Xe.create({trigger:".pipeline__pin",start:"top top",end:Ui?"+=3000":"+=2400",pin:!0,scrub:.5,onUpdate:s=>r(s.progress),onToggle:s=>{!Nt||!Ui||(s.isActive?Nt.pause():e()||Nt.play())}}),r(0);const t=He("#reel"),n=()=>Math.max(0,t.scrollWidth-window.innerWidth+parseFloat(getComputedStyle(t).paddingRight));Vh=!0;const i=()=>{const s=window.innerWidth,o=t.getBoundingClientRect().left;yc.forEach((a,l)=>{const c=he.utils.clamp(-1.4,1.4,(o+a.offsetLeft+a.offsetWidth/2-s/2)/s);co[l].ry=-c*40,co[l].z=-(Math.abs(c)**1.6)*300,cc(l)})};return he.to(t,{x:()=>-n(),ease:"none",onUpdate:i,scrollTrigger:{trigger:t,start:"center center",end:()=>`+=${n()}`,pin:".motion",scrub:.6,invalidateOnRefresh:!0,onRefresh:i}}),i(),()=>{Ui?.destroy(),Ui=null,Vh=!1,co.forEach((s,o)=>{s.ry=0,s.z=0,cc(o)}),Nt&&!e()&&Nt.play()}}),Gp.add("(max-width: 760px)",()=>{Xe.create({trigger:".pipeline__stage",start:"top 75%",end:"bottom 55%",scrub:.5,onUpdate:r=>Bl(r.progress*1.08)})}));const Y1=new IntersectionObserver(r=>r.forEach(e=>{const t=e.target;e.isIntersecting?(t.src||(t.src=t.dataset.src),Zn||t.play().catch(()=>{})):t.pause()}),{threshold:.25});ui(".clip video").forEach(r=>Y1.observe(r));const ur=He("#lightbox"),uo=He("#lightboxVideo");let Sc=null;function $1(r){Sc=document.activeElement,uo.src=r,ur.setAttribute("aria-hidden","false"),he.set(ur,{visibility:"visible"}),he.to(ur,{opacity:1,duration:.4}),he.fromTo(uo,{scale:.9,y:30},{scale:1,y:0,duration:.8,ease:"expo.out"}),Vn?.stop(),uo.play().catch(()=>{}),He("#lightboxClose").focus()}function Ud(){ur.getAttribute("aria-hidden")!=="true"&&(ur.setAttribute("aria-hidden","true"),uo.pause(),he.to(ur,{opacity:0,duration:.3,onComplete:()=>{he.set(ur,{visibility:"hidden"}),uo.removeAttribute("src"),uo.load()}}),Vn?.start(),Sc?.focus())}He("#reel").addEventListener("click",r=>{const e=r.target.closest(".clip");e&&$1(e.dataset.video)});He("#lightboxClose").addEventListener("click",Ud);ur.addEventListener("click",r=>{r.target===ur&&Ud()});const uc=He("#case"),s_=He("#caseBody");function Wh(r){const e=bn.projects.findIndex(i=>i.id===r),t=bn.projects[e],n=bn.projects[(e+1)%bn.projects.length];s_.innerHTML=`<p class="case__n mono">${Eo(e+1)} / ${Eo(bn.projects.length)} — ${gt(t.year)}</p>
    <h2 class="case__title" id="caseTitle">${gt(t.title)}</h2><p class="case__sub">${gt(t.sub)}</p>
    <div class="case__grid"><div><p class="case__summary">${gt(t.summary)}</p>${t.img?`<img class="case__img" src="${t.img}" alt="${gt(t.title)}" />`:""}
      <div class="case__links">${t.links.map(([i,s])=>`<a class="btn btn--primary" href="${s}"${s.startsWith("#")?"":' target="_blank" rel="noopener"'}><span class="btn__fill"></span><span>${gt(i)}</span><span class="btn__arrow">→</span></a>`).join("")}
        <button class="btn" type="button" data-next="${n.id}"><span class="btn__fill"></span><span>${gt(Tn["case.next"])} — ${gt(n.title)}</span><span class="btn__arrow">→</span></button></div></div>
      <div><h4>${gt(Tn["case.results"])}</h4><div class="metrics">${t.metrics.map(([i,s])=>`<div class="metric"><b>${gt(i)}</b><span>${gt(s)}</span></div>`).join("")}</div>
        <h4>${gt(Tn["case.stack"])}</h4><div class="case__stack">${t.stack.map(i=>`<i class="tag">${gt(i)}</i>`).join("")}</div>
        <h4>${gt(Tn["case.built"])}</h4><ul class="case__built">${t.built.map(i=>`<li>${gt(i)}</li>`).join("")}</ul></div>${I1(Bn,t.id)}</div>`,He(".case__scroll").scrollTop=0,Zn||he.from("#caseBody .case__n, #caseBody .case__title, #caseBody .case__sub, #caseBody .case__summary, #caseBody .case__img, #caseBody .metric, #caseBody .case__built li, #caseBody .case__links, #caseBody .feat",{y:40,opacity:0,duration:.9,stagger:.04,ease:"expo.out",delay:.15})}function j1(r){Sc=document.activeElement,oc=!0,uc.setAttribute("aria-hidden","false"),Vn?.stop(),o_(),he.set(uc,{visibility:"visible"}),Zn?(he.set(".case__scroll",{clipPath:"inset(0% 0 0 0)"}),Wh(r)):he.timeline().fromTo(".case__curtain",{scaleY:0,transformOrigin:"bottom"},{scaleY:1,duration:.6,ease:"expo.inOut"}).add(()=>Wh(r)).fromTo(".case__scroll",{clipPath:"inset(100% 0 0 0)"},{clipPath:"inset(0% 0 0 0)",duration:.8,ease:"expo.inOut"},"-=0.15"),He("#caseClose").focus()}function Nd(){oc&&(oc=!1,uc.setAttribute("aria-hidden","true"),he.timeline({onComplete:()=>{he.set(uc,{visibility:"hidden"}),Vn?.start(),Sc?.focus?.()}}).to(".case__scroll",{clipPath:"inset(0 0 100% 0)",duration:Zn?0:.6,ease:"expo.inOut"}).to(".case__curtain",{scaleY:0,transformOrigin:"top",duration:Zn?0:.5,ease:"expo.inOut"},"-=0.3"))}He("#workList").addEventListener("click",r=>{const e=r.target.closest(".row");e&&j1(e.dataset.project)});s_.addEventListener("click",r=>{const e=r.target.closest("[data-next]");e&&Wh(e.dataset.next)});He("#caseClose").addEventListener("click",Nd);const ho=He("#menu"),da=He("#menuBtn");function Fd(){Aa&&(Aa=!1,da.setAttribute("aria-expanded","false"),ho.setAttribute("aria-hidden","true"),He("span",da).textContent=Tn["nav.menu"],he.to(ho,{clipPath:"inset(0 0 100% 0)",duration:.6,ease:"expo.inOut",onComplete:()=>he.set(ho,{visibility:"hidden"})}),Vn?.start())}da.addEventListener("click",()=>{if(Aa)return Fd();Aa=!0,da.setAttribute("aria-expanded","true"),ho.setAttribute("aria-hidden","false"),He("span",da).textContent=Tn["nav.close"],Vn?.stop(),he.set(ho,{visibility:"visible"}),he.fromTo(ho,{clipPath:"inset(0 0 100% 0)"},{clipPath:"inset(0 0 0% 0)",duration:.7,ease:"expo.inOut"}),he.from(".menu__nav a",{yPercent:100,opacity:0,duration:.8,stagger:.06,ease:"expo.out",delay:.25})});document.addEventListener("keydown",r=>{r.key==="Escape"&&(Ud(),Nd(),Fd())});const ir=He("#preview"),bu=He("img",ir);function o_(){he.to(ir,{opacity:0,duration:.3}),he.to(".preview__inner",{clipPath:"inset(100% 0 0 0)",duration:.4,ease:"power3.in"})}if(Kg&&!Zn){const r=He(".cursor"),e=He(".cursor__dot"),t=He(".cursor__ring"),n=He(".cursor__label"),i=he.quickTo(e,"x",{duration:.08}),s=he.quickTo(e,"y",{duration:.08}),o=he.quickTo(t,"x",{duration:.45,ease:"power3"}),a=he.quickTo(t,"y",{duration:.45,ease:"power3"}),l=he.quickTo(ir,"x",{duration:.7,ease:"power3"}),c=he.quickTo(ir,"y",{duration:.7,ease:"power3"}),u=he.quickTo(ir,"rotate",{duration:.7,ease:"power3"});let f=0;window.addEventListener("pointermove",v=>{i(v.clientX),s(v.clientY),o(v.clientX),a(v.clientY),l(v.clientX+180),c(v.clientY),u(Math.max(-10,Math.min(10,(v.clientX-f)*.6))),f=v.clientX},{passive:!0}),document.addEventListener("pointerover",v=>{const E=v.target.closest('[data-cursor="view"]'),w=v.target.closest("a, button");r.classList.toggle("is-view",!!E),r.classList.toggle("is-link",!E&&!!w),n.textContent=E?E.classList.contains("clip")?"▶":Bn==="fr"?"Ouvrir":"Open":"";const b=v.target.closest(".row[data-img]");b&&!oc?(bu.getAttribute("src")!==b.dataset.img&&(bu.src=b.dataset.img),he.to(ir,{opacity:1,duration:.3}),he.to(".preview__inner",{clipPath:"inset(0% 0 0 0)",duration:.7,ease:"expo.out",overwrite:!0}),he.fromTo(bu,{scale:1.35},{scale:1,duration:1,ease:"expo.out",overwrite:!0})):v.target.closest(".row[data-img]")||o_()}),ui("[data-magnetic]").forEach(v=>{const E=he.quickTo(v,"x",{duration:.6,ease:"elastic.out(1,0.5)"}),w=he.quickTo(v,"y",{duration:.6,ease:"elastic.out(1,0.5)"});v.addEventListener("pointermove",b=>{const C=v.getBoundingClientRect();E((b.clientX-C.left-C.width/2)*.35),w((b.clientY-C.top-C.height/2)*.35)}),v.addEventListener("pointerleave",()=>{E(0),w(0)})}),ui(".cap").forEach(v=>v.addEventListener("pointermove",E=>{const w=v.getBoundingClientRect();v.style.setProperty("--mx",`${E.clientX-w.left}px`),v.style.setProperty("--my",`${E.clientY-w.top}px`)})),yc.forEach((v,E)=>{v.addEventListener("pointermove",w=>{const b=v.getBoundingClientRect();he.to(co[E],{hy:((w.clientX-b.left)/b.width-.5)*8,hx:-((w.clientY-b.top)/b.height-.5)*8,duration:.5,ease:"power3",overwrite:!0,onUpdate:()=>cc(E)})}),v.addEventListener("pointerleave",()=>he.to(co[E],{hx:0,hy:0,duration:.8,ease:"elastic.out(1,0.6)",overwrite:!0,onUpdate:()=>cc(E)}))});const h=He(".hero__title");he.set(h,{transformPerspective:1200});const d=he.quickTo(h,"rotationY",{duration:1.1,ease:"power3"}),g=he.quickTo(h,"rotationX",{duration:1.1,ease:"power3"});he.set(ir,{transformPerspective:900});const _=he.quickTo(ir,"rotationY",{duration:.7,ease:"power3"}),m=he.quickTo(ir,"rotationX",{duration:.7,ease:"power3"});let p=0,S=0,y=0;window.addEventListener("pointermove",v=>{window.scrollY<window.innerHeight&&(d((v.clientX/window.innerWidth-.5)*9),g(-(v.clientY/window.innerHeight-.5)*6)),_(he.utils.clamp(-28,28,(v.clientX-p)*1.4)),m(he.utils.clamp(-22,22,-(v.clientY-S)*1.4)),p=v.clientX,S=v.clientY,clearTimeout(y),y=setTimeout(()=>{_(0),m(0)},140)},{passive:!0})}U1({reduced:Zn,lang:Bn});R1({lenis:Vn,hero:Nt,reduced:Zn,fine:Kg,lang:Bn,sections:[["#top",Bn==="fr"?"Accueil":"Home"],["#manifeste",Bn==="fr"?"Manifeste":"Manifesto"],["#travaux",Tn["nav.work"]],["#pipeline",Tn["nav.pipeline"]],["#sous-le-capot",Bn==="fr"?"Sous le capot":"Under the hood"],["#motion",Tn["nav.motion"]],["#capacites",Bn==="fr"?"Capacités":"Capabilities"],["#parcours",Tn["nav.path"]],["#contact",Tn["nav.contact"]]]});n_.addEventListener("click",()=>{const r=Bn==="fr"?"en":"fr";try{localStorage.setItem("lang",r)}catch{}const e=()=>{const n=new URL(location.href);n.searchParams.delete("lang"),n.hash="",location.replace(n)};if(Zn)return e();const t=document.createElement("div");t.className="wipe",document.body.append(t),he.to(t,{scaleY:1,duration:.6,ease:"expo.inOut",onComplete:e})});He("#copyBtn").addEventListener("click",async()=>{const r=He("#copyBtn .btn__label");try{await navigator.clipboard.writeText(Tf.email),r.textContent=Tn["contact.copied"]}catch{r.textContent=Tf.email}setTimeout(()=>{r.textContent=Tn["contact.copy"]},2200)});const J1=He("#clock"),Z1=new Intl.DateTimeFormat("fr-FR",{timeZone:"Europe/Paris",hour:"2-digit",minute:"2-digit",second:"2-digit"}),a_=()=>{J1.textContent=Z1.format(new Date)};a_();setInterval(a_,1e3);document.addEventListener("visibilitychange",()=>{Nt&&(document.hidden?Nt.pause():Nt.play())});window.addEventListener("load",()=>Xe.refresh());document.fonts?.ready.then(()=>Xe.refresh());
