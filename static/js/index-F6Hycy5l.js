var $t=Object.defineProperty;var Et=Object.getOwnPropertySymbols;var Qt=Object.prototype.hasOwnProperty,Gt=Object.prototype.propertyIsEnumerable;var Bt=(t,e,i)=>e in t?$t(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,pt=(t,e)=>{for(var i in e||(e={}))Qt.call(e,i)&&Bt(t,i,e[i]);if(Et)for(var i of Et(e))Gt.call(e,i)&&Bt(t,i,e[i]);return t};var nt=(t,e,i)=>new Promise((r,n)=>{var o=a=>{try{c(i.next(a))}catch(l){n(l)}},s=a=>{try{c(i.throw(a))}catch(l){n(l)}},c=a=>a.done?r(a.value):Promise.resolve(a.value).then(o,s);c((i=i.apply(t,e)).next())});import{p as Q}from"./propTypes-D_I3dZnw.js";import{d as qt,a as bt,p as Tt,n as Wt,i as L,B as Xt,A as Zt,u as _,e as xt,F as te,y as ee,ag as ne,ay as At,Y as oe}from"./index-DizcWSWA.js";import{d as re}from"./refresh-right-Du3ZsAuC.js";var Y={},ie=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Mt={},M={};let dt;const se=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];M.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};M.getSymbolTotalCodewords=function(e){return se[e]};M.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};M.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');dt=e};M.isKanjiModeEnabled=function(){return typeof dt!="undefined"};M.toSJIS=function(e){return dt(e)};var Z={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+i)}}t.isValid=function(r){return r&&typeof r.bit!="undefined"&&r.bit>=0&&r.bit<4},t.from=function(r,n){if(t.isValid(r))return r;try{return e(r)}catch(o){return n}}})(Z);function Pt(){this.buffer=[],this.length=0}Pt.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let i=0;i<e;i++)this.putBit((t>>>e-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var ae=Pt;function j(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}j.prototype.set=function(t,e,i,r){const n=t*this.size+e;this.data[n]=i,r&&(this.reservedBit[n]=!0)};j.prototype.get=function(t,e){return this.data[t*this.size+e]};j.prototype.xor=function(t,e,i){this.data[t*this.size+e]^=i};j.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var ce=j,Rt={};(function(t){const e=M.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const n=Math.floor(r/7)+2,o=e(r),s=o===145?26:Math.ceil((o-13)/(2*n-2))*2,c=[o-7];for(let a=1;a<n-1;a++)c[a]=c[a-1]-s;return c.push(6),c.reverse()},t.getPositions=function(r){const n=[],o=t.getRowColCoords(r),s=o.length;for(let c=0;c<s;c++)for(let a=0;a<s;a++)c===0&&a===0||c===0&&a===s-1||c===s-1&&a===0||n.push([o[c],o[a]]);return n}})(Rt);var Lt={};const le=M.getSymbolSize,It=7;Lt.getPositions=function(e){const i=le(e);return[[0,0],[i-It,0],[0,i-It]]};var vt={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(n){return n!=null&&n!==""&&!isNaN(n)&&n>=0&&n<=7},t.from=function(n){return t.isValid(n)?parseInt(n,10):void 0},t.getPenaltyN1=function(n){const o=n.size;let s=0,c=0,a=0,l=null,d=null;for(let p=0;p<o;p++){c=a=0,l=d=null;for(let C=0;C<o;C++){let w=n.get(p,C);w===l?c++:(c>=5&&(s+=e.N1+(c-5)),l=w,c=1),w=n.get(C,p),w===d?a++:(a>=5&&(s+=e.N1+(a-5)),d=w,a=1)}c>=5&&(s+=e.N1+(c-5)),a>=5&&(s+=e.N1+(a-5))}return s},t.getPenaltyN2=function(n){const o=n.size;let s=0;for(let c=0;c<o-1;c++)for(let a=0;a<o-1;a++){const l=n.get(c,a)+n.get(c,a+1)+n.get(c+1,a)+n.get(c+1,a+1);(l===4||l===0)&&s++}return s*e.N2},t.getPenaltyN3=function(n){const o=n.size;let s=0,c=0,a=0;for(let l=0;l<o;l++){c=a=0;for(let d=0;d<o;d++)c=c<<1&2047|n.get(l,d),d>=10&&(c===1488||c===93)&&s++,a=a<<1&2047|n.get(d,l),d>=10&&(a===1488||a===93)&&s++}return s*e.N3},t.getPenaltyN4=function(n){let o=0;const s=n.data.length;for(let a=0;a<s;a++)o+=n.data[a];return Math.abs(Math.ceil(o*100/s/5)-10)*e.N4};function i(r,n,o){switch(r){case t.Patterns.PATTERN000:return(n+o)%2===0;case t.Patterns.PATTERN001:return n%2===0;case t.Patterns.PATTERN010:return o%3===0;case t.Patterns.PATTERN011:return(n+o)%3===0;case t.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(o/3))%2===0;case t.Patterns.PATTERN101:return n*o%2+n*o%3===0;case t.Patterns.PATTERN110:return(n*o%2+n*o%3)%2===0;case t.Patterns.PATTERN111:return(n*o%3+(n+o)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(n,o){const s=o.size;for(let c=0;c<s;c++)for(let a=0;a<s;a++)o.isReserved(a,c)||o.xor(a,c,i(n,a,c))},t.getBestMask=function(n,o){const s=Object.keys(t.Patterns).length;let c=0,a=1/0;for(let l=0;l<s;l++){o(l),t.applyMask(l,n);const d=t.getPenaltyN1(n)+t.getPenaltyN2(n)+t.getPenaltyN3(n)+t.getPenaltyN4(n);t.applyMask(l,n),d<a&&(a=d,c=l)}return c}})(vt);var x={};const v=Z,G=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],q=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];x.getBlocksCount=function(e,i){switch(i){case v.L:return G[(e-1)*4+0];case v.M:return G[(e-1)*4+1];case v.Q:return G[(e-1)*4+2];case v.H:return G[(e-1)*4+3];default:return}};x.getTotalCodewordsCount=function(e,i){switch(i){case v.L:return q[(e-1)*4+0];case v.M:return q[(e-1)*4+1];case v.Q:return q[(e-1)*4+2];case v.H:return q[(e-1)*4+3];default:return}};var Dt={},tt={};const K=new Uint8Array(512),W=new Uint8Array(256);(function(){let e=1;for(let i=0;i<255;i++)K[i]=e,W[e]=i,e<<=1,e&256&&(e^=285);for(let i=255;i<512;i++)K[i]=K[i-255]})();tt.log=function(e){if(e<1)throw new Error("log("+e+")");return W[e]};tt.exp=function(e){return K[e]};tt.mul=function(e,i){return e===0||i===0?0:K[W[e]+W[i]]};(function(t){const e=tt;t.mul=function(r,n){const o=new Uint8Array(r.length+n.length-1);for(let s=0;s<r.length;s++)for(let c=0;c<n.length;c++)o[s+c]^=e.mul(r[s],n[c]);return o},t.mod=function(r,n){let o=new Uint8Array(r);for(;o.length-n.length>=0;){const s=o[0];for(let a=0;a<n.length;a++)o[a]^=e.mul(n[a],s);let c=0;for(;c<o.length&&o[c]===0;)c++;o=o.slice(c)}return o},t.generateECPolynomial=function(r){let n=new Uint8Array([1]);for(let o=0;o<r;o++)n=t.mul(n,new Uint8Array([1,e.exp(o)]));return n}})(Dt);const _t=Dt;function gt(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}gt.prototype.initialize=function(e){this.degree=e,this.genPoly=_t.generateECPolynomial(this.degree)};gt.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(e.length+this.degree);i.set(e);const r=_t.mod(i,this.genPoly),n=this.degree-r.length;if(n>0){const o=new Uint8Array(this.degree);return o.set(r,n),o}return r};var ue=gt,Ut={},D={},ht={};ht.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var P={};const kt="[0-9]+",fe="[A-Z $%*+\\-./:]+";let J="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";J=J.replace(/u/g,"\\u");const de="(?:(?![A-Z0-9 $%*+\\-./:]|"+J+`)(?:.|[\r
]))+`;P.KANJI=new RegExp(J,"g");P.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");P.BYTE=new RegExp(de,"g");P.NUMERIC=new RegExp(kt,"g");P.ALPHANUMERIC=new RegExp(fe,"g");const ge=new RegExp("^"+J+"$"),he=new RegExp("^"+kt+"$"),we=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");P.testKanji=function(e){return ge.test(e)};P.testNumeric=function(e){return he.test(e)};P.testAlphanumeric=function(e){return we.test(e)};(function(t){const e=ht,i=P;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(o,s){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?o.ccBits[0]:s<27?o.ccBits[1]:o.ccBits[2]},t.getBestModeForData=function(o){return i.testNumeric(o)?t.NUMERIC:i.testAlphanumeric(o)?t.ALPHANUMERIC:i.testKanji(o)?t.KANJI:t.BYTE},t.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},t.isValid=function(o){return o&&o.bit&&o.ccBits};function r(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+n)}}t.from=function(o,s){if(t.isValid(o))return o;try{return r(o)}catch(c){return s}}})(D);(function(t){const e=M,i=x,r=Z,n=D,o=ht,s=7973,c=e.getBCHDigit(s);function a(C,w,y){for(let u=1;u<=40;u++)if(w<=t.getCapacity(u,y,C))return u}function l(C,w){return n.getCharCountIndicator(C,w)+4}function d(C,w){let y=0;return C.forEach(function(u){const E=l(u.mode,w);y+=E+u.getBitsLength()}),y}function p(C,w){for(let y=1;y<=40;y++)if(d(C,y)<=t.getCapacity(y,w,n.MIXED))return y}t.from=function(w,y){return o.isValid(w)?parseInt(w,10):y},t.getCapacity=function(w,y,u){if(!o.isValid(w))throw new Error("Invalid QR Code version");typeof u=="undefined"&&(u=n.BYTE);const E=e.getSymbolTotalCodewords(w),f=i.getTotalCodewordsCount(w,y),m=(E-f)*8;if(u===n.MIXED)return m;const h=m-l(u,w);switch(u){case n.NUMERIC:return Math.floor(h/10*3);case n.ALPHANUMERIC:return Math.floor(h/11*2);case n.KANJI:return Math.floor(h/13);case n.BYTE:default:return Math.floor(h/8)}},t.getBestVersionForData=function(w,y){let u;const E=r.from(y,r.M);if(Array.isArray(w)){if(w.length>1)return p(w,E);if(w.length===0)return 1;u=w[0]}else u=w;return a(u.mode,u.getLength(),E)},t.getEncodedBits=function(w){if(!o.isValid(w)||w<7)throw new Error("Invalid QR Code version");let y=w<<12;for(;e.getBCHDigit(y)-c>=0;)y^=s<<e.getBCHDigit(y)-c;return w<<12|y}})(Ut);var Ft={};const ct=M,zt=1335,me=21522,St=ct.getBCHDigit(zt);Ft.getEncodedBits=function(e,i){const r=e.bit<<3|i;let n=r<<10;for(;ct.getBCHDigit(n)-St>=0;)n^=zt<<ct.getBCHDigit(n)-St;return(r<<10|n)^me};var Ht={};const Ce=D;function k(t){this.mode=Ce.NUMERIC,this.data=t.toString()}k.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};k.prototype.getLength=function(){return this.data.length};k.prototype.getBitsLength=function(){return k.getBitsLength(this.data.length)};k.prototype.write=function(e){let i,r,n;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),n=parseInt(r,10),e.put(n,10);const o=this.data.length-i;o>0&&(r=this.data.substr(i),n=parseInt(r,10),e.put(n,o*3+1))};var ye=k;const Ee=D,ot=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function F(t){this.mode=Ee.ALPHANUMERIC,this.data=t}F.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};F.prototype.getLength=function(){return this.data.length};F.prototype.getBitsLength=function(){return F.getBitsLength(this.data.length)};F.prototype.write=function(e){let i;for(i=0;i+2<=this.data.length;i+=2){let r=ot.indexOf(this.data[i])*45;r+=ot.indexOf(this.data[i+1]),e.put(r,11)}this.data.length%2&&e.put(ot.indexOf(this.data[i]),6)};var Be=F;const pe=D;function z(t){this.mode=pe.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}z.getBitsLength=function(e){return e*8};z.prototype.getLength=function(){return this.data.length};z.prototype.getBitsLength=function(){return z.getBitsLength(this.data.length)};z.prototype.write=function(t){for(let e=0,i=this.data.length;e<i;e++)t.put(this.data[e],8)};var be=z;const Te=D,Ae=M;function H(t){this.mode=Te.KANJI,this.data=t}H.getBitsLength=function(e){return e*13};H.prototype.getLength=function(){return this.data.length};H.prototype.getBitsLength=function(){return H.getBitsLength(this.data.length)};H.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let i=Ae.toSJIS(this.data[e]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),t.put(i,13)}};var Ie=H,Vt={exports:{}};(function(t){var e={single_source_shortest_paths:function(i,r,n){var o={},s={};s[r]=0;var c=e.PriorityQueue.make();c.push(r,0);for(var a,l,d,p,C,w,y,u,E;!c.empty();){a=c.pop(),l=a.value,p=a.cost,C=i[l]||{};for(d in C)C.hasOwnProperty(d)&&(w=C[d],y=p+w,u=s[d],E=typeof s[d]=="undefined",(E||u>y)&&(s[d]=y,c.push(d,y),o[d]=l))}if(typeof n!="undefined"&&typeof s[n]=="undefined"){var f=["Could not find a path from ",r," to ",n,"."].join("");throw new Error(f)}return o},extract_shortest_path_from_predecessor_list:function(i,r){for(var n=[],o=r;o;)n.push(o),i[o],o=i[o];return n.reverse(),n},find_path:function(i,r,n){var o=e.single_source_shortest_paths(i,r,n);return e.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(i){var r=e.PriorityQueue,n={},o;i=i||{};for(o in r)r.hasOwnProperty(o)&&(n[o]=r[o]);return n.queue=[],n.sorter=i.sorter||r.default_sorter,n},default_sorter:function(i,r){return i.cost-r.cost},push:function(i,r){var n={value:i,cost:r};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(Vt);var Se=Vt.exports;(function(t){const e=D,i=ye,r=Be,n=be,o=Ie,s=P,c=M,a=Se;function l(f){return unescape(encodeURIComponent(f)).length}function d(f,m,h){const g=[];let B;for(;(B=f.exec(h))!==null;)g.push({data:B[0],index:B.index,mode:m,length:B[0].length});return g}function p(f){const m=d(s.NUMERIC,e.NUMERIC,f),h=d(s.ALPHANUMERIC,e.ALPHANUMERIC,f);let g,B;return c.isKanjiModeEnabled()?(g=d(s.BYTE,e.BYTE,f),B=d(s.KANJI,e.KANJI,f)):(g=d(s.BYTE_KANJI,e.BYTE,f),B=[]),m.concat(h,g,B).sort(function(T,N){return T.index-N.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function C(f,m){switch(m){case e.NUMERIC:return i.getBitsLength(f);case e.ALPHANUMERIC:return r.getBitsLength(f);case e.KANJI:return o.getBitsLength(f);case e.BYTE:return n.getBitsLength(f)}}function w(f){return f.reduce(function(m,h){const g=m.length-1>=0?m[m.length-1]:null;return g&&g.mode===h.mode?(m[m.length-1].data+=h.data,m):(m.push(h),m)},[])}function y(f){const m=[];for(let h=0;h<f.length;h++){const g=f[h];switch(g.mode){case e.NUMERIC:m.push([g,{data:g.data,mode:e.ALPHANUMERIC,length:g.length},{data:g.data,mode:e.BYTE,length:g.length}]);break;case e.ALPHANUMERIC:m.push([g,{data:g.data,mode:e.BYTE,length:g.length}]);break;case e.KANJI:m.push([g,{data:g.data,mode:e.BYTE,length:l(g.data)}]);break;case e.BYTE:m.push([{data:g.data,mode:e.BYTE,length:l(g.data)}])}}return m}function u(f,m){const h={},g={start:{}};let B=["start"];for(let b=0;b<f.length;b++){const T=f[b],N=[];for(let S=0;S<T.length;S++){const I=T[S],R=""+b+S;N.push(R),h[R]={node:I,lastCount:0},g[R]={};for(let U=0;U<B.length;U++){const A=B[U];h[A]&&h[A].node.mode===I.mode?(g[A][R]=C(h[A].lastCount+I.length,I.mode)-C(h[A].lastCount,I.mode),h[A].lastCount+=I.length):(h[A]&&(h[A].lastCount=I.length),g[A][R]=C(I.length,I.mode)+4+e.getCharCountIndicator(I.mode,m))}}B=N}for(let b=0;b<B.length;b++)g[B[b]].end=0;return{map:g,table:h}}function E(f,m){let h;const g=e.getBestModeForData(f);if(h=e.from(m,g),h!==e.BYTE&&h.bit<g.bit)throw new Error('"'+f+'" cannot be encoded with mode '+e.toString(h)+`.
 Suggested mode is: `+e.toString(g));switch(h===e.KANJI&&!c.isKanjiModeEnabled()&&(h=e.BYTE),h){case e.NUMERIC:return new i(f);case e.ALPHANUMERIC:return new r(f);case e.KANJI:return new o(f);case e.BYTE:return new n(f)}}t.fromArray=function(m){return m.reduce(function(h,g){return typeof g=="string"?h.push(E(g,null)):g.data&&h.push(E(g.data,g.mode)),h},[])},t.fromString=function(m,h){const g=p(m,c.isKanjiModeEnabled()),B=y(g),b=u(B,h),T=a.find_path(b.map,"start","end"),N=[];for(let S=1;S<T.length-1;S++)N.push(b.table[T[S]].node);return t.fromArray(w(N))},t.rawSplit=function(m){return t.fromArray(p(m,c.isKanjiModeEnabled()))}})(Ht);const et=M,rt=Z,Ne=ae,Me=ce,Pe=Rt,Re=Lt,lt=vt,ut=x,Le=ue,X=Ut,ve=Ft,De=D,it=Ht;function _e(t,e){const i=t.size,r=Re.getPositions(e);for(let n=0;n<r.length;n++){const o=r[n][0],s=r[n][1];for(let c=-1;c<=7;c++)if(!(o+c<=-1||i<=o+c))for(let a=-1;a<=7;a++)s+a<=-1||i<=s+a||(c>=0&&c<=6&&(a===0||a===6)||a>=0&&a<=6&&(c===0||c===6)||c>=2&&c<=4&&a>=2&&a<=4?t.set(o+c,s+a,!0,!0):t.set(o+c,s+a,!1,!0))}}function Ue(t){const e=t.size;for(let i=8;i<e-8;i++){const r=i%2===0;t.set(i,6,r,!0),t.set(6,i,r,!0)}}function ke(t,e){const i=Pe.getPositions(e);for(let r=0;r<i.length;r++){const n=i[r][0],o=i[r][1];for(let s=-2;s<=2;s++)for(let c=-2;c<=2;c++)s===-2||s===2||c===-2||c===2||s===0&&c===0?t.set(n+s,o+c,!0,!0):t.set(n+s,o+c,!1,!0)}}function Fe(t,e){const i=t.size,r=X.getEncodedBits(e);let n,o,s;for(let c=0;c<18;c++)n=Math.floor(c/3),o=c%3+i-8-3,s=(r>>c&1)===1,t.set(n,o,s,!0),t.set(o,n,s,!0)}function st(t,e,i){const r=t.size,n=ve.getEncodedBits(e,i);let o,s;for(o=0;o<15;o++)s=(n>>o&1)===1,o<6?t.set(o,8,s,!0):o<8?t.set(o+1,8,s,!0):t.set(r-15+o,8,s,!0),o<8?t.set(8,r-o-1,s,!0):o<9?t.set(8,15-o-1+1,s,!0):t.set(8,15-o-1,s,!0);t.set(r-8,8,1,!0)}function ze(t,e){const i=t.size;let r=-1,n=i-1,o=7,s=0;for(let c=i-1;c>0;c-=2)for(c===6&&c--;;){for(let a=0;a<2;a++)if(!t.isReserved(n,c-a)){let l=!1;s<e.length&&(l=(e[s]>>>o&1)===1),t.set(n,c-a,l),o--,o===-1&&(s++,o=7)}if(n+=r,n<0||i<=n){n-=r,r=-r;break}}}function He(t,e,i){const r=new Ne;i.forEach(function(a){r.put(a.mode.bit,4),r.put(a.getLength(),De.getCharCountIndicator(a.mode,t)),a.write(r)});const n=et.getSymbolTotalCodewords(t),o=ut.getTotalCodewordsCount(t,e),s=(n-o)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const c=(s-r.getLengthInBits())/8;for(let a=0;a<c;a++)r.put(a%2?17:236,8);return Ve(r,t,e)}function Ve(t,e,i){const r=et.getSymbolTotalCodewords(e),n=ut.getTotalCodewordsCount(e,i),o=r-n,s=ut.getBlocksCount(e,i),c=r%s,a=s-c,l=Math.floor(r/s),d=Math.floor(o/s),p=d+1,C=l-d,w=new Le(C);let y=0;const u=new Array(s),E=new Array(s);let f=0;const m=new Uint8Array(t.buffer);for(let T=0;T<s;T++){const N=T<a?d:p;u[T]=m.slice(y,y+N),E[T]=w.encode(u[T]),y+=N,f=Math.max(f,N)}const h=new Uint8Array(r);let g=0,B,b;for(B=0;B<f;B++)for(b=0;b<s;b++)B<u[b].length&&(h[g++]=u[b][B]);for(B=0;B<C;B++)for(b=0;b<s;b++)h[g++]=E[b][B];return h}function Oe(t,e,i,r){let n;if(Array.isArray(t))n=it.fromArray(t);else if(typeof t=="string"){let l=e;if(!l){const d=it.rawSplit(t);l=X.getBestVersionForData(d,i)}n=it.fromString(t,l||40)}else throw new Error("Invalid data");const o=X.getBestVersionForData(n,i);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=o;else if(e<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const s=He(e,i,n),c=et.getSymbolSize(e),a=new Me(c);return _e(a,e),Ue(a),ke(a,e),st(a,i,0),e>=7&&Fe(a,e),ze(a,s),isNaN(r)&&(r=lt.getBestMask(a,st.bind(null,a,i))),lt.applyMask(r,a),st(a,i,r),{modules:a,version:e,errorCorrectionLevel:i,maskPattern:r,segments:n}}Mt.create=function(e,i){if(typeof e=="undefined"||e==="")throw new Error("No input text");let r=rt.M,n,o;return typeof i!="undefined"&&(r=rt.from(i.errorCorrectionLevel,rt.M),n=X.from(i.version),o=lt.from(i.maskPattern),i.toSJISFunc&&et.setToSJISFunction(i.toSJISFunc)),Oe(e,n,r,o)};var Ot={},wt={};(function(t){function e(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(o){return[o,o]}))),r.length===6&&r.push("F","F");const n=parseInt(r.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const n=typeof r.margin=="undefined"||r.margin===null||r.margin<0?4:r.margin,o=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:o,scale:o?4:s,margin:n,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,n){return n.width&&n.width>=r+n.margin*2?n.width/(r+n.margin*2):n.scale},t.getImageWidth=function(r,n){const o=t.getScale(r,n);return Math.floor((r+n.margin*2)*o)},t.qrToImageData=function(r,n,o){const s=n.modules.size,c=n.modules.data,a=t.getScale(s,o),l=Math.floor((s+o.margin*2)*a),d=o.margin*a,p=[o.color.light,o.color.dark];for(let C=0;C<l;C++)for(let w=0;w<l;w++){let y=(C*l+w)*4,u=o.color.light;if(C>=d&&w>=d&&C<l-d&&w<l-d){const E=Math.floor((C-d)/a),f=Math.floor((w-d)/a);u=p[c[E*s+f]?1:0]}r[y++]=u.r,r[y++]=u.g,r[y++]=u.b,r[y]=u.a}}})(wt);(function(t){const e=wt;function i(n,o,s){n.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch(n){throw new Error("You need to specify a canvas element")}}t.render=function(o,s,c){let a=c,l=s;typeof a=="undefined"&&(!s||!s.getContext)&&(a=s,s=void 0),s||(l=r()),a=e.getOptions(a);const d=e.getImageWidth(o.modules.size,a),p=l.getContext("2d"),C=p.createImageData(d,d);return e.qrToImageData(C.data,o,a),i(p,l,d),p.putImageData(C,0,0),l},t.renderToDataURL=function(o,s,c){let a=c;typeof a=="undefined"&&(!s||!s.getContext)&&(a=s,s=void 0),a||(a={});const l=t.render(o,s,a),d=a.type||"image/png",p=a.rendererOpts||{};return l.toDataURL(d,p.quality)}})(Ot);var Kt={};const Ke=wt;function Nt(t,e){const i=t.a/255,r=e+'="'+t.hex+'"';return i<1?r+" "+e+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function at(t,e,i){let r=t+e;return typeof i!="undefined"&&(r+=" "+i),r}function Je(t,e,i){let r="",n=0,o=!1,s=0;for(let c=0;c<t.length;c++){const a=Math.floor(c%e),l=Math.floor(c/e);!a&&!o&&(o=!0),t[c]?(s++,c>0&&a>0&&t[c-1]||(r+=o?at("M",a+i,.5+l+i):at("m",n,0),n=0,o=!1),a+1<e&&t[c+1]||(r+=at("h",s),s=0)):n++}return r}Kt.render=function(e,i,r){const n=Ke.getOptions(i),o=e.modules.size,s=e.modules.data,c=o+n.margin*2,a=n.color.light.a?"<path "+Nt(n.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",l="<path "+Nt(n.color.dark,"stroke")+' d="'+Je(s,o,n.margin)+'"/>',d='viewBox="0 0 '+c+" "+c+'"',C='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+d+' shape-rendering="crispEdges">'+a+l+`</svg>
`;return typeof r=="function"&&r(null,C),C};const Ye=ie,ft=Mt,Jt=Ot,je=Kt;function mt(t,e,i,r,n){const o=[].slice.call(arguments,1),s=o.length,c=typeof o[s-1]=="function";if(!c&&!Ye())throw new Error("Callback required as last argument");if(c){if(s<2)throw new Error("Too few arguments provided");s===2?(n=i,i=e,e=r=void 0):s===3&&(e.getContext&&typeof n=="undefined"?(n=r,r=void 0):(n=r,r=i,i=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=e,e=r=void 0):s===2&&!e.getContext&&(r=i,i=e,e=void 0),new Promise(function(a,l){try{const d=ft.create(i,r);a(t(d,e,r))}catch(d){l(d)}})}try{const a=ft.create(i,r);n(null,t(a,e,r))}catch(a){n(a)}}Y.create=ft.create;Y.toCanvas=mt.bind(null,Jt.render);Y.toDataURL=mt.bind(null,Jt.renderToDataURL);Y.toString=mt.bind(null,function(t,e,i){return je.render(t,i)});const $e={tag:Q.string.validate(t=>["canvas","img"].includes(t)).def("canvas"),text:{type:[String,Array],default:null},options:{type:Object,default:()=>({})},width:Q.number.def(200),logo:{type:[String,Object],default:()=>""},disabled:Q.bool.def(!1),disabledText:Q.string.def("")},Qe=qt({name:"ReQrcode",props:$e,emits:["done","click","disabled-click"],setup(t,{emit:e}){const{toCanvas:i,toDataURL:r}=Y,n=bt(!0),o=bt(null),s=Tt(()=>String(t.text)),c=Tt(()=>({width:t.width+"px",height:t.width+"px"})),a=()=>nt(this,null,function*(){yield ee();const u=ne(t.options||{});if(t.tag==="canvas"){u.errorCorrectionLevel=u.errorCorrectionLevel||p(_(s));const E=yield d(_(s),u);u.scale=t.width===0?void 0:t.width/E*4;const f=yield i(_(o),_(s),u);if(t.logo){const m=yield l(f);e("done",m),n.value=!1}else e("done",f.toDataURL()),n.value=!1}else{const E=yield r(s.value,pt({errorCorrectionLevel:"H",width:t.width},u));_(o).src=E,e("done",E),n.value=!1}});Wt(()=>s.value,u=>{u&&a()},{deep:!0,immediate:!0});const l=u=>{const E=u.width,f=Object.assign({logoSize:.15,bgColor:"#ffffff",borderSize:.05,crossOrigin:"anonymous",borderRadius:8,logoRadius:0},At(t.logo)?{}:t.logo),{logoSize:m=.15,bgColor:h="#ffffff",borderSize:g=.05,crossOrigin:B="anonymous",borderRadius:b=8,logoRadius:T=0}=f,N=At(t.logo)?t.logo:t.logo.src,S=E*m,I=E*(1-m)/2,R=E*(m+g),U=E*(1-m-g)/2,A=u.getContext("2d");if(!A)return;C(A)(U,U,R,R,b),A.fillStyle=h,A.fill();const V=new Image;(B||T)&&V.setAttribute("crossOrigin",B),V.src=N;const Yt=O=>{A.drawImage(O,I,I,S,S)},jt=O=>{const $=document.createElement("canvas");$.width=I+S,$.height=I+S;const Ct=$.getContext("2d");if(!Ct||!A||(Ct.drawImage(O,I,I,S,S),C(A)(I,I,S,S,T),!A))return;const yt=A.createPattern($,"no-repeat");yt&&(A.fillStyle=yt,A.fill())};return new Promise(O=>{V.onload=()=>{T?jt(V):Yt(V),O(u.toDataURL())}})},d=(u,E)=>nt(this,null,function*(){const f=document.createElement("canvas");return yield i(f,u,E),f.width}),p=u=>u.length>36?"M":u.length>16?"Q":"H",C=u=>(E,f,m,h,g)=>{const B=Math.min(m,h);return g>B/2&&(g=B/2),u.beginPath(),u.moveTo(E+g,f),u.arcTo(E+m,f,E+m,f+h,g),u.arcTo(E+m,f+h,E,f+h,g),u.arcTo(E,f+h,E,f,g),u.arcTo(E,f,E+m,f,g),u.closePath(),u},w=()=>{e("click")},y=()=>{e("disabled-click")};return()=>L(te,null,[Xt(L("div",{class:"qrcode relative inline-block",style:_(c)},[t.tag==="canvas"?L("canvas",{ref:o,onClick:w},null):L("img",{ref:o,onClick:w},null),t.disabled&&L("div",{class:"qrcode--disabled absolute top-0 left-0 flex w-full h-full items-center justify-center",onClick:y},[L("div",{class:"absolute top-[50%] left-[50%] font-bold"},[L(xt("iconify-icon-offline"),{class:"cursor-pointer",icon:re,width:"30",color:"var(--el-color-primary)"},null),L("div",null,[t.disabledText])])])]),[[Zt("loading"),_(n)]])])}}),Ze=oe(Qe);export{Ze as R};