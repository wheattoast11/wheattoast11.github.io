var cx=Object.defineProperty;var dx=(t,e,n)=>e in t?cx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ma=(t,e,n)=>dx(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _f="161",fx=0,qh=1,hx=2,dv=1,px=2,hi=3,Ji=0,cn=1,gi=2,Hi=0,Mo=1,Kh=2,Zh=3,Qh=4,mx=5,yr=100,gx=101,vx=102,Jh=103,ep=104,_x=200,yx=201,xx=202,Sx=203,Qc=204,Jc=205,Ex=206,wx=207,Mx=208,Tx=209,Ax=210,Cx=211,bx=212,Rx=213,Px=214,Lx=0,Nx=1,Dx=2,Ml=3,Ix=4,Ux=5,Fx=6,Ox=7,yf=0,kx=1,Bx=2,Gi=0,zx=1,Vx=2,Hx=3,Gx=4,Wx=5,$x=6,fv=300,Do=301,Io=302,ed=303,td=304,ru=306,nd=1e3,Wn=1001,id=1002,Qt=1003,tp=1004,os=1005,sn=1006,zu=1007,Sr=1008,Wi=1009,jx=1010,Xx=1011,xf=1012,hv=1013,Bi=1014,vi=1015,Us=1016,pv=1017,mv=1018,Ar=1020,Yx=1021,$n=1023,qx=1024,Kx=1025,Cr=1026,Uo=1027,Zx=1028,gv=1029,Qx=1030,vv=1031,_v=1033,Vu=33776,Hu=33777,Gu=33778,Wu=33779,np=35840,ip=35841,rp=35842,op=35843,yv=36196,sp=37492,ap=37496,lp=37808,up=37809,cp=37810,dp=37811,fp=37812,hp=37813,pp=37814,mp=37815,gp=37816,vp=37817,_p=37818,yp=37819,xp=37820,Sp=37821,$u=36492,Ep=36494,wp=36495,Jx=36283,Mp=36284,Tp=36285,Ap=36286,xv=3e3,br=3001,eS=3200,tS=3201,Sv=0,nS=1,Pn="",kt="srgb",Ei="srgb-linear",Sf="display-p3",ou="display-p3-linear",Tl="linear",ut="srgb",Al="rec709",Cl="p3",Gr=7680,Cp=519,iS=512,rS=513,oS=514,Ev=515,sS=516,aS=517,lS=518,uS=519,bp=35044,Rp="300 es",rd=1035,_i=2e3,bl=2001;class Wo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ju=Math.PI/180,od=180/Math.PI;function Js(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function an(t,e,n){return Math.max(e,Math.min(n,t))}function cS(t,e){return(t%e+e)%e}function Xu(t,e,n){return(1-n)*t+n*e}function Pp(t){return(t&t-1)===0&&t!==0}function sd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ss(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,o,s,a,l,u){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],g=i[5],_=i[8],x=r[0],p=r[3],d=r[6],m=r[1],v=r[4],E=r[7],M=r[2],w=r[5],T=r[8];return o[0]=s*x+a*m+l*M,o[3]=s*p+a*v+l*w,o[6]=s*d+a*E+l*T,o[1]=u*x+c*m+f*M,o[4]=u*p+c*v+f*w,o[7]=u*d+c*E+f*T,o[2]=h*x+g*m+_*M,o[5]=h*p+g*v+_*w,o[8]=h*d+g*E+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*s-a*u,h=a*l-c*o,g=u*o-s*l,_=n*f+i*h+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*s)*x,e[3]=h*x,e[4]=(c*n-r*l)*x,e[5]=(r*o-a*n)*x,e[6]=g*x,e[7]=(i*l-u*n)*x,e[8]=(s*n-i*o)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Yu.makeScale(e,n)),this}rotate(e){return this.premultiply(Yu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Yu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yu=new je;function wv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Rl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function dS(){const t=Rl("canvas");return t.style.display="block",t}const Lp={};function To(t){t in Lp||(Lp[t]=!0,console.warn(t))}const Np=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dp=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ga={[Ei]:{transfer:Tl,primaries:Al,toReference:t=>t,fromReference:t=>t},[kt]:{transfer:ut,primaries:Al,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ou]:{transfer:Tl,primaries:Cl,toReference:t=>t.applyMatrix3(Dp),fromReference:t=>t.applyMatrix3(Np)},[Sf]:{transfer:ut,primaries:Cl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Dp),fromReference:t=>t.applyMatrix3(Np).convertLinearToSRGB()}},fS=new Set([Ei,ou]),ot={enabled:!0,_workingColorSpace:Ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!fS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ga[e].toReference,r=ga[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ga[t].primaries},getTransfer:function(t){return t===Pn?Tl:ga[t].transfer}};function Ao(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function qu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Wr;class Mv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wr===void 0&&(Wr=Rl("canvas")),Wr.width=e.width,Wr.height=e.height;const i=Wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Wr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Rl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ao(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ao(n[i]/255)*255):n[i]=Ao(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hS=0;class Tv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=Js(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Ku(r[s].image)):o.push(Ku(r[s]))}else o=Ku(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Ku(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Mv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pS=0;class dn extends Wo{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=Wn,r=Wn,o=sn,s=Sr,a=$n,l=Wi,u=dn.DEFAULT_ANISOTROPY,c=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Js(),this.name="",this.source=new Tv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(To("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===br?kt:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nd:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nd:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return To("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?br:xv}set encoding(e){To("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===br?kt:Pn}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=fv;dn.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,n=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],g=l[5],_=l[9],x=l[2],p=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+p)<.1&&Math.abs(u+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,E=(g+1)/2,M=(d+1)/2,w=(c+h)/4,T=(f+x)/4,P=(_+p)/4;return v>E&&v>M?v<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(v),r=w/i,o=T/i):E>M?E<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(E),i=w/r,o=P/r):M<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(M),i=T/o,r=P/o),this.set(i,r,o,n),this}let m=Math.sqrt((p-_)*(p-_)+(f-x)*(f-x)+(h-c)*(h-c));return Math.abs(m)<.001&&(m=1),this.x=(p-_)/m,this.y=(f-x)/m,this.z=(h-c)/m,this.w=Math.acos((u+g+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mS extends Wo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new dt(0,0,e,n),this.scissorTest=!1,this.viewport=new dt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(To("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===br?kt:Pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new dn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Tv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends mS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Av extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gS extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ea{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=o[s+0],g=o[s+1],_=o[s+2],x=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=g,e[n+2]=_,e[n+3]=x;return}if(f!==x||l!==h||u!==g||c!==_){let p=1-a;const d=l*h+u*g+c*_+f*x,m=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const M=Math.sqrt(v),w=Math.atan2(M,d*m);p=Math.sin(p*w)/M,a=Math.sin(a*w)/M}const E=a*m;if(l=l*p+h*E,u=u*p+g*E,c=c*p+_*E,f=f*p+x*E,p===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=M,u*=M,c*=M,f*=M}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=o[s],h=o[s+1],g=o[s+2],_=o[s+3];return e[n]=a*_+c*f+l*g-u*h,e[n+1]=l*_+c*h+u*f-a*g,e[n+2]=u*_+c*g+a*h-l*f,e[n+3]=c*_-a*f-l*h-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(o/2),h=l(i/2),g=l(r/2),_=l(o/2);switch(s){case"XYZ":this._x=h*c*f+u*g*_,this._y=u*g*f-h*c*_,this._z=u*c*_+h*g*f,this._w=u*c*f-h*g*_;break;case"YXZ":this._x=h*c*f+u*g*_,this._y=u*g*f-h*c*_,this._z=u*c*_-h*g*f,this._w=u*c*f+h*g*_;break;case"ZXY":this._x=h*c*f-u*g*_,this._y=u*g*f+h*c*_,this._z=u*c*_+h*g*f,this._w=u*c*f-h*g*_;break;case"ZYX":this._x=h*c*f-u*g*_,this._y=u*g*f+h*c*_,this._z=u*c*_-h*g*f,this._w=u*c*f+h*g*_;break;case"YZX":this._x=h*c*f+u*g*_,this._y=u*g*f+h*c*_,this._z=u*c*_-h*g*f,this._w=u*c*f-h*g*_;break;case"XZY":this._x=h*c*f-u*g*_,this._y=u*g*f-h*c*_,this._z=u*c*_+h*g*f,this._w=u*c*f+h*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],h=i+a+f;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(c-l)*g,this._y=(o-u)*g,this._z=(s-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(c-l)/g,this._x=.25*g,this._y=(r+s)/g,this._z=(o+u)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(o-u)/g,this._x=(r+s)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(s-r)/g,this._x=(o+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*s+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=s*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=o*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ip.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ip.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),c=2*(a*n-o*r),f=2*(o*i-s*n);return this.x=n+l*u+s*f-a*c,this.y=i+l*c+a*u-o*f,this.z=r+l*f+o*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zu.copy(this).projectOnVector(e),this.sub(Zu)}reflect(e){return this.sub(Zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zu=new V,Ip=new ea;class ta{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Fn):Fn.fromBufferAttribute(o,s),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),va.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),va.copy(i.boundingBox)),va.applyMatrix4(e.matrixWorld),this.union(va)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(as),_a.subVectors(this.max,as),$r.subVectors(e.a,as),jr.subVectors(e.b,as),Xr.subVectors(e.c,as),bi.subVectors(jr,$r),Ri.subVectors(Xr,jr),cr.subVectors($r,Xr);let n=[0,-bi.z,bi.y,0,-Ri.z,Ri.y,0,-cr.z,cr.y,bi.z,0,-bi.x,Ri.z,0,-Ri.x,cr.z,0,-cr.x,-bi.y,bi.x,0,-Ri.y,Ri.x,0,-cr.y,cr.x,0];return!Qu(n,$r,jr,Xr,_a)||(n=[1,0,0,0,1,0,0,0,1],!Qu(n,$r,jr,Xr,_a))?!1:(ya.crossVectors(bi,Ri),n=[ya.x,ya.y,ya.z],Qu(n,$r,jr,Xr,_a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const li=[new V,new V,new V,new V,new V,new V,new V,new V],Fn=new V,va=new ta,$r=new V,jr=new V,Xr=new V,bi=new V,Ri=new V,cr=new V,as=new V,_a=new V,ya=new V,dr=new V;function Qu(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){dr.fromArray(t,o);const a=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),u=n.dot(dr),c=i.dot(dr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const vS=new ta,ls=new V,Ju=new V;class su{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):vS.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);const n=ls.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ls,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(Ju)),this.expandByPoint(ls.copy(e.center).sub(Ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new V,ec=new V,xa=new V,Pi=new V,tc=new V,Sa=new V,nc=new V;class Cv{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,n),ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ec.copy(e).add(n).multiplyScalar(.5),xa.copy(n).sub(e).normalize(),Pi.copy(this.origin).sub(ec);const o=e.distanceTo(n)*.5,s=-this.direction.dot(xa),a=Pi.dot(this.direction),l=-Pi.dot(xa),u=Pi.lengthSq(),c=Math.abs(1-s*s);let f,h,g,_;if(c>0)if(f=s*l-a,h=s*a-l,_=o*c,f>=0)if(h>=-_)if(h<=_){const x=1/c;f*=x,h*=x,g=f*(f+s*h+2*a)+h*(s*f+h+2*l)+u}else h=o,f=Math.max(0,-(s*h+a)),g=-f*f+h*(h+2*l)+u;else h=-o,f=Math.max(0,-(s*h+a)),g=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-s*o+a)),h=f>0?-o:Math.min(Math.max(-o,-l),o),g=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-o,-l),o),g=h*(h+2*l)+u):(f=Math.max(0,-(s*o+a)),h=f>0?o:Math.min(Math.max(-o,-l),o),g=-f*f+h*(h+2*l)+u);else h=s>0?-o:o,f=Math.max(0,-(s*h+a)),g=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ec).addScaledVector(xa,h),g}intersectSphere(e,n){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(o=(e.min.y-h.y)*c,s=(e.max.y-h.y)*c):(o=(e.max.y-h.y)*c,s=(e.min.y-h.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,n,i,r,o){tc.subVectors(n,e),Sa.subVectors(i,e),nc.crossVectors(tc,Sa);let s=this.direction.dot(nc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Pi.subVectors(this.origin,e);const l=a*this.direction.dot(Sa.crossVectors(Pi,Sa));if(l<0)return null;const u=a*this.direction.dot(tc.cross(Pi));if(u<0||l+u>s)return null;const c=-a*Pi.dot(nc);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,o,s,a,l,u,c,f,h,g,_,x,p){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,f,h,g,_,x,p)}set(e,n,i,r,o,s,a,l,u,c,f,h,g,_,x,p){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=o,d[5]=s,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=g,d[7]=_,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Yr.setFromMatrixColumn(e,0).length(),o=1/Yr.setFromMatrixColumn(e,1).length(),s=1/Yr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const h=s*c,g=s*f,_=a*c,x=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=g+_*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=_+g*u,n[10]=s*l}else if(e.order==="YXZ"){const h=l*c,g=l*f,_=u*c,x=u*f;n[0]=h+x*a,n[4]=_*a-g,n[8]=s*u,n[1]=s*f,n[5]=s*c,n[9]=-a,n[2]=g*a-_,n[6]=x+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*c,g=l*f,_=u*c,x=u*f;n[0]=h-x*a,n[4]=-s*f,n[8]=_+g*a,n[1]=g+_*a,n[5]=s*c,n[9]=x-h*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*c,g=s*f,_=a*c,x=a*f;n[0]=l*c,n[4]=_*u-g,n[8]=h*u+x,n[1]=l*f,n[5]=x*u+h,n[9]=g*u-_,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,g=s*u,_=a*l,x=a*u;n[0]=l*c,n[4]=x-h*f,n[8]=_*f+g,n[1]=f,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=g*f+_,n[10]=h-x*f}else if(e.order==="XZY"){const h=s*l,g=s*u,_=a*l,x=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=h*f+x,n[5]=s*c,n[9]=g*f-_,n[2]=_*f-g,n[6]=a*c,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_S,e,yS)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Li.crossVectors(i,gn),Li.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Li.crossVectors(i,gn)),Li.normalize(),Ea.crossVectors(gn,Li),r[0]=Li.x,r[4]=Ea.x,r[8]=gn.x,r[1]=Li.y,r[5]=Ea.y,r[9]=gn.y,r[2]=Li.z,r[6]=Ea.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],g=i[13],_=i[2],x=i[6],p=i[10],d=i[14],m=i[3],v=i[7],E=i[11],M=i[15],w=r[0],T=r[4],P=r[8],B=r[12],y=r[1],C=r[5],k=r[9],z=r[13],N=r[2],G=r[6],U=r[10],Z=r[14],I=r[3],O=r[7],H=r[11],X=r[15];return o[0]=s*w+a*y+l*N+u*I,o[4]=s*T+a*C+l*G+u*O,o[8]=s*P+a*k+l*U+u*H,o[12]=s*B+a*z+l*Z+u*X,o[1]=c*w+f*y+h*N+g*I,o[5]=c*T+f*C+h*G+g*O,o[9]=c*P+f*k+h*U+g*H,o[13]=c*B+f*z+h*Z+g*X,o[2]=_*w+x*y+p*N+d*I,o[6]=_*T+x*C+p*G+d*O,o[10]=_*P+x*k+p*U+d*H,o[14]=_*B+x*z+p*Z+d*X,o[3]=m*w+v*y+E*N+M*I,o[7]=m*T+v*C+E*G+M*O,o[11]=m*P+v*k+E*U+M*H,o[15]=m*B+v*z+E*Z+M*X,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],g=e[14],_=e[3],x=e[7],p=e[11],d=e[15];return _*(+o*l*f-r*u*f-o*a*h+i*u*h+r*a*g-i*l*g)+x*(+n*l*g-n*u*h+o*s*h-r*s*g+r*u*c-o*l*c)+p*(+n*u*f-n*a*g-o*s*f+i*s*g+o*a*c-i*u*c)+d*(-r*a*c-n*l*f+n*a*h+r*s*f-i*s*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],g=e[11],_=e[12],x=e[13],p=e[14],d=e[15],m=f*p*u-x*h*u+x*l*g-a*p*g-f*l*d+a*h*d,v=_*h*u-c*p*u-_*l*g+s*p*g+c*l*d-s*h*d,E=c*x*u-_*f*u+_*a*g-s*x*g-c*a*d+s*f*d,M=_*f*l-c*x*l-_*a*h+s*x*h+c*a*p-s*f*p,w=n*m+i*v+r*E+o*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=m*T,e[1]=(x*h*o-f*p*o-x*r*g+i*p*g+f*r*d-i*h*d)*T,e[2]=(a*p*o-x*l*o+x*r*u-i*p*u-a*r*d+i*l*d)*T,e[3]=(f*l*o-a*h*o-f*r*u+i*h*u+a*r*g-i*l*g)*T,e[4]=v*T,e[5]=(c*p*o-_*h*o+_*r*g-n*p*g-c*r*d+n*h*d)*T,e[6]=(_*l*o-s*p*o-_*r*u+n*p*u+s*r*d-n*l*d)*T,e[7]=(s*h*o-c*l*o+c*r*u-n*h*u-s*r*g+n*l*g)*T,e[8]=E*T,e[9]=(_*f*o-c*x*o-_*i*g+n*x*g+c*i*d-n*f*d)*T,e[10]=(s*x*o-_*a*o+_*i*u-n*x*u-s*i*d+n*a*d)*T,e[11]=(c*a*o-s*f*o-c*i*u+n*f*u+s*i*g-n*a*g)*T,e[12]=M*T,e[13]=(c*x*r-_*f*r+_*i*h-n*x*h-c*i*p+n*f*p)*T,e[14]=(_*a*r-s*x*r-_*i*l+n*x*l+s*i*p-n*a*p)*T,e[15]=(s*f*r-c*a*r+c*i*l-n*f*l-s*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,f=a+a,h=o*u,g=o*c,_=o*f,x=s*c,p=s*f,d=a*f,m=l*u,v=l*c,E=l*f,M=i.x,w=i.y,T=i.z;return r[0]=(1-(x+d))*M,r[1]=(g+E)*M,r[2]=(_-v)*M,r[3]=0,r[4]=(g-E)*w,r[5]=(1-(h+d))*w,r[6]=(p+m)*w,r[7]=0,r[8]=(_+v)*T,r[9]=(p-m)*T,r[10]=(1-(h+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Yr.set(r[0],r[1],r[2]).length();const s=Yr.set(r[4],r[5],r[6]).length(),a=Yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const u=1/o,c=1/s,f=1/a;return On.elements[0]*=u,On.elements[1]*=u,On.elements[2]*=u,On.elements[4]*=c,On.elements[5]*=c,On.elements[6]*=c,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,n.setFromRotationMatrix(On),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=_i){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let g,_;if(a===_i)g=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===bl)g=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=_i){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(s-o),h=(n+e)*u,g=(i+r)*c;let _,x;if(a===_i)_=(s+o)*f,x=-2*f;else if(a===bl)_=o*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Yr=new V,On=new Et,_S=new V(0,0,0),yS=new V(1,1,1),Li=new V,Ea=new V,gn=new V,Up=new Et,Fp=new ea;class au{constructor(e=0,n=0,i=0,r=au.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-an(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-an(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-an(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Up,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fp.setFromEuler(this),this.setFromQuaternion(Fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}au.DEFAULT_ORDER="XYZ";class bv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xS=0;const Op=new V,qr=new ea,ci=new Et,wa=new V,us=new V,SS=new V,ES=new ea,kp=new V(1,0,0),Bp=new V(0,1,0),zp=new V(0,0,1),wS={type:"added"},MS={type:"removed"};class Jt extends Wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new V,n=new au,i=new ea,r=new V(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new je}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(kp,e)}rotateY(e){return this.rotateOnAxis(Bp,e)}rotateZ(e){return this.rotateOnAxis(zp,e)}translateOnAxis(e,n){return Op.copy(e).applyQuaternion(this.quaternion),this.position.add(Op.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(kp,e)}translateY(e){return this.translateOnAxis(Bp,e)}translateZ(e){return this.translateOnAxis(zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wa.copy(e):wa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(us,wa,this.up):ci.lookAt(wa,us,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(ci),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(MS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,SS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,ES,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),f=s(e.shapes),h=s(e.skeletons),g=s(e.animations),_=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Jt.DEFAULT_UP=new V(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new V,di=new V,ic=new V,fi=new V,Kr=new V,Zr=new V,Vp=new V,rc=new V,oc=new V,sc=new V;class Jn{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){kn.subVectors(r,n),di.subVectors(i,n),ic.subVectors(e,n);const s=kn.dot(kn),a=kn.dot(di),l=kn.dot(ic),u=di.dot(di),c=di.dot(ic),f=s*u-a*a;if(f===0)return o.set(0,0,0),null;const h=1/f,g=(u*l-a*c)*h,_=(s*c-a*l)*h;return o.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,fi.x),l.addScaledVector(s,fi.y),l.addScaledVector(a,fi.z),l)}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),di.subVectors(e,n),kn.cross(di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),kn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return Jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Kr.subVectors(r,i),Zr.subVectors(o,i),rc.subVectors(e,i);const l=Kr.dot(rc),u=Zr.dot(rc);if(l<=0&&u<=0)return n.copy(i);oc.subVectors(e,r);const c=Kr.dot(oc),f=Zr.dot(oc);if(c>=0&&f<=c)return n.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(Kr,s);sc.subVectors(e,o);const g=Kr.dot(sc),_=Zr.dot(sc);if(_>=0&&g<=_)return n.copy(o);const x=g*u-l*_;if(x<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(Zr,a);const p=c*_-g*f;if(p<=0&&f-c>=0&&g-_>=0)return Vp.subVectors(o,r),a=(f-c)/(f-c+(g-_)),n.copy(r).addScaledVector(Vp,a);const d=1/(p+x+h);return s=x*d,a=h*d,n.copy(i).addScaledVector(Kr,s).addScaledVector(Zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function ac(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=cS(e,1),n=an(n,0,1),i=an(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=ac(s,o,e+1/3),this.g=ac(s,o,e),this.b=ac(s,o,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,n=kt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kt){const i=Rv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}copyLinearToSRGB(e){return this.r=qu(e.r),this.g=qu(e.g),this.b=qu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return ot.fromWorkingColorSpace(Wt.copy(this),e),Math.round(an(Wt.r*255,0,255))*65536+Math.round(an(Wt.g*255,0,255))*256+Math.round(an(Wt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,o=Wt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const f=s-a;switch(u=c<=.5?f/(s+a):f/(2-s-a),s){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=ot.workingColorSpace){return ot.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=kt){ot.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==kt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+n,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ni),e.getHSL(Ma);const i=Xu(Ni.h,Ma.h,n),r=Xu(Ni.s,Ma.s,n),o=Xu(Ni.l,Ma.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Ze;Ze.NAMES=Rv;let TS=0;class $o extends Wo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=Mo,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qc,this.blendDst=Jc,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ml,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mo&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qc&&(i.blendSrc=this.blendSrc),this.blendDst!==Jc&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ml&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pv extends $o{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new V,Ta=new Xe;class ni{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=bp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return To("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ta.fromBufferAttribute(this,n),Ta.applyMatrix3(e),this.setXY(n,Ta.x,Ta.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ss(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ss(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ss(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ss(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ss(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),o=on(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bp&&(e.usage=this.usage),e}}class Lv extends ni{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Nv extends ni{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Nn extends ni{constructor(e,n,i){super(new Float32Array(e),n,i)}}let AS=0;const Cn=new Et,lc=new Jt,Qr=new V,vn=new ta,cs=new ta,Dt=new V;class oi extends Wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wv(e)?Nv:Lv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new je().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return lc.lookAt(e),lc.updateMatrix(),this.applyMatrix4(lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Nn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ta);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];vn.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new su);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];cs.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(vn.min,cs.min),vn.expandByPoint(Dt),Dt.addVectors(vn.max,cs.max),vn.expandByPoint(Dt)):(vn.expandByPoint(cs.min),vn.expandByPoint(cs.max))}vn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Dt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Dt.fromBufferAttribute(a,u),l&&(Qr.fromBufferAttribute(e,u),Dt.add(Qr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let y=0;y<a;y++)u[y]=new V,c[y]=new V;const f=new V,h=new V,g=new V,_=new Xe,x=new Xe,p=new Xe,d=new V,m=new V;function v(y,C,k){f.fromArray(r,y*3),h.fromArray(r,C*3),g.fromArray(r,k*3),_.fromArray(s,y*2),x.fromArray(s,C*2),p.fromArray(s,k*2),h.sub(f),g.sub(f),x.sub(_),p.sub(_);const z=1/(x.x*p.y-p.x*x.y);isFinite(z)&&(d.copy(h).multiplyScalar(p.y).addScaledVector(g,-x.y).multiplyScalar(z),m.copy(g).multiplyScalar(x.x).addScaledVector(h,-p.x).multiplyScalar(z),u[y].add(d),u[C].add(d),u[k].add(d),c[y].add(m),c[C].add(m),c[k].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let y=0,C=E.length;y<C;++y){const k=E[y],z=k.start,N=k.count;for(let G=z,U=z+N;G<U;G+=3)v(i[G+0],i[G+1],i[G+2])}const M=new V,w=new V,T=new V,P=new V;function B(y){T.fromArray(o,y*3),P.copy(T);const C=u[y];M.copy(C),M.sub(T.multiplyScalar(T.dot(C))).normalize(),w.crossVectors(P,C);const z=w.dot(c[y])<0?-1:1;l[y*4]=M.x,l[y*4+1]=M.y,l[y*4+2]=M.z,l[y*4+3]=z}for(let y=0,C=E.length;y<C;++y){const k=E[y],z=k.start,N=k.count;for(let G=z,U=z+N;G<U;G+=3)B(i[G+0]),B(i[G+1]),B(i[G+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ni(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new V,o=new V,s=new V,a=new V,l=new V,u=new V,c=new V,f=new V;if(e)for(let h=0,g=e.count;h<g;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,x),s.fromBufferAttribute(n,p),c.subVectors(s,o),f.subVectors(r,o),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),c.subVectors(s,o),f.subVectors(r,o),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let g=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?g=l[x]*a.data.stride+a.offset:g=l[x]*c;for(let d=0;d<c;d++)h[_++]=u[g++]}return new ni(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new oi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],g=e(h,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const g=u[f];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],f=o[u];for(let h=0,g=f.length;h<g;h++)c.push(f[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const f=s[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hp=new Et,fr=new Cv,Aa=new su,Gp=new V,Jr=new V,eo=new V,to=new V,uc=new V,Ca=new V,ba=new Xe,Ra=new Xe,Pa=new Xe,Wp=new V,$p=new V,jp=new V,La=new V,Na=new V;class ti extends Jt{constructor(e=new oi,n=new Pv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Ca.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],f=o[l];c!==0&&(uc.fromBufferAttribute(f,e),s?Ca.addScaledVector(uc,c):Ca.addScaledVector(uc.sub(n),c))}n.add(Ca)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(o),fr.copy(e.ray).recast(e.near),!(Aa.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Aa,Gp)===null||fr.origin.distanceToSquared(Gp)>(e.far-e.near)**2))&&(Hp.copy(o).invert(),fr.copy(e.ray).applyMatrix4(Hp),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,f=o.attributes.normal,h=o.groups,g=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const p=h[_],d=s[p.materialIndex],m=Math.max(p.start,g.start),v=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let E=m,M=v;E<M;E+=3){const w=a.getX(E),T=a.getX(E+1),P=a.getX(E+2);r=Da(this,d,e,i,u,c,f,w,T,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(a.count,g.start+g.count);for(let p=_,d=x;p<d;p+=3){const m=a.getX(p),v=a.getX(p+1),E=a.getX(p+2);r=Da(this,s,e,i,u,c,f,m,v,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const p=h[_],d=s[p.materialIndex],m=Math.max(p.start,g.start),v=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let E=m,M=v;E<M;E+=3){const w=E,T=E+1,P=E+2;r=Da(this,d,e,i,u,c,f,w,T,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let p=_,d=x;p<d;p+=3){const m=p,v=p+1,E=p+2;r=Da(this,s,e,i,u,c,f,m,v,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function CS(t,e,n,i,r,o,s,a){let l;if(e.side===cn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===Ji,a),l===null)return null;Na.copy(a),Na.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Na);return u<n.near||u>n.far?null:{distance:u,point:Na.clone(),object:t}}function Da(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,Jr),t.getVertexPosition(l,eo),t.getVertexPosition(u,to);const c=CS(t,e,n,i,Jr,eo,to,La);if(c){r&&(ba.fromBufferAttribute(r,a),Ra.fromBufferAttribute(r,l),Pa.fromBufferAttribute(r,u),c.uv=Jn.getInterpolation(La,Jr,eo,to,ba,Ra,Pa,new Xe)),o&&(ba.fromBufferAttribute(o,a),Ra.fromBufferAttribute(o,l),Pa.fromBufferAttribute(o,u),c.uv1=Jn.getInterpolation(La,Jr,eo,to,ba,Ra,Pa,new Xe),c.uv2=c.uv1),s&&(Wp.fromBufferAttribute(s,a),$p.fromBufferAttribute(s,l),jp.fromBufferAttribute(s,u),c.normal=Jn.getInterpolation(La,Jr,eo,to,Wp,$p,jp,new V),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new V,materialIndex:0};Jn.getNormal(Jr,eo,to,f.normal),c.face=f}return c}class na extends oi{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],f=[];let h=0,g=0;_("z","y","x",-1,-1,i,n,e,s,o,0),_("z","y","x",1,-1,i,n,-e,s,o,1),_("x","z","y",1,1,e,i,n,r,s,2),_("x","z","y",1,-1,e,i,-n,r,s,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Nn(u,3)),this.setAttribute("normal",new Nn(c,3)),this.setAttribute("uv",new Nn(f,2));function _(x,p,d,m,v,E,M,w,T,P,B){const y=E/T,C=M/P,k=E/2,z=M/2,N=w/2,G=T+1,U=P+1;let Z=0,I=0;const O=new V;for(let H=0;H<U;H++){const X=H*C-z;for(let J=0;J<G;J++){const ge=J*y-k;O[x]=ge*m,O[p]=X*v,O[d]=N,u.push(O.x,O.y,O.z),O[x]=0,O[p]=0,O[d]=w>0?1:-1,c.push(O.x,O.y,O.z),f.push(J/T),f.push(1-H/P),Z+=1}}for(let H=0;H<P;H++)for(let X=0;X<T;X++){const J=h+X+G*H,ge=h+X+G*(H+1),$=h+(X+1)+G*(H+1),K=h+(X+1)+G*H;l.push(J,ge,K),l.push(ge,$,K),I+=6}a.addGroup(g,I,B),g+=I,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Kt(t){const e={};for(let n=0;n<t.length;n++){const i=Fo(t[n]);for(const r in i)e[r]=i[r]}return e}function bS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Dv(t){return t.getRenderTarget()===null?t.outputColorSpace:ot.workingColorSpace}const RS={clone:Fo,merge:Kt};var PS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends $o{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PS,this.fragmentShader=LS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=bS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Iv extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=_i}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new V,Xp=new Xe,Yp=new Xe;class xn extends Iv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=od*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ju*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return od*2*Math.atan(Math.tan(ju*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,n){return this.getViewBounds(e,Xp,Yp),n.subVectors(Yp,Xp)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ju*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const no=-90,io=1;class NS extends Jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(no,io,e,n);r.layers=this.layers,this.add(r);const o=new xn(no,io,e,n);o.layers=this.layers,this.add(o);const s=new xn(no,io,e,n);s.layers=this.layers,this.add(s);const a=new xn(no,io,e,n);a.layers=this.layers,this.add(a);const l=new xn(no,io,e,n);l.layers=this.layers,this.add(l);const u=new xn(no,io,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,h,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Uv extends dn{constructor(e,n,i,r,o,s,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Do,super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class DS extends Lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(To("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===br?kt:Pn),this.texture=new Uv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:sn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new na(5,5,5),o=new er({name:"CubemapFromEquirect",uniforms:Fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Hi});o.uniforms.tEquirect.value=n;const s=new ti(r,o),a=n.minFilter;return n.minFilter===Sr&&(n.minFilter=sn),new NS(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const cc=new V,IS=new V,US=new je;class pr{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=cc.subVectors(i,n).cross(IS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(cc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||US.getNormalMatrix(e),r=this.coplanarPoint(cc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new su,Ia=new V;class Ef{constructor(e=new pr,n=new pr,i=new pr,r=new pr,o=new pr,s=new pr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],g=r[8],_=r[9],x=r[10],p=r[11],d=r[12],m=r[13],v=r[14],E=r[15];if(i[0].setComponents(l-o,h-u,p-g,E-d).normalize(),i[1].setComponents(l+o,h+u,p+g,E+d).normalize(),i[2].setComponents(l+s,h+c,p+_,E+m).normalize(),i[3].setComponents(l-s,h-c,p-_,E-m).normalize(),i[4].setComponents(l-a,h-f,p-x,E-v).normalize(),n===_i)i[5].setComponents(l+a,h+f,p+x,E+v).normalize();else if(n===bl)i[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ia.x=r.normal.x>0?e.max.x:e.min.x,Ia.y=r.normal.y>0?e.max.y:e.min.y,Ia.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fv(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function FS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,h=u.usage,g=f.byteLength,_=t.createBuffer();t.bindBuffer(c,_),t.bufferData(c,f,h),u.onUploadCallback();let x;if(f instanceof Float32Array)x=t.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=t.SHORT;else if(f instanceof Uint32Array)x=t.UNSIGNED_INT;else if(f instanceof Int32Array)x=t.INT;else if(f instanceof Int8Array)x=t.BYTE;else if(f instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:g}}function o(u,c,f){const h=c.array,g=c._updateRange,_=c.updateRanges;if(t.bindBuffer(f,u),g.count===-1&&_.length===0&&t.bufferSubData(f,0,h),_.length!==0){for(let x=0,p=_.length;x<p;x++){const d=_[x];n?t.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):t.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(f,g.offset*h.BYTES_PER_ELEMENT,h,g.offset,g.count):t.bufferSubData(f,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1),c.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(f.buffer,u,c),f.version=u.version}}return{get:s,remove:a,update:l}}class lu extends oi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=n/l,g=[],_=[],x=[],p=[];for(let d=0;d<c;d++){const m=d*h-s;for(let v=0;v<u;v++){const E=v*f-o;_.push(E,-m,0),x.push(0,0,1),p.push(v/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<a;m++){const v=m+u*d,E=m+u*(d+1),M=m+1+u*(d+1),w=m+1+u*d;g.push(v,E,w),g.push(E,M,w)}this.setIndex(g),this.setAttribute("position",new Nn(_,3)),this.setAttribute("normal",new Nn(x,3)),this.setAttribute("uv",new Nn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.width,e.height,e.widthSegments,e.heightSegments)}}var OS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kS=`#ifdef USE_ALPHAHASH
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
#endif`,BS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GS=`#ifdef USE_AOMAP
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
#endif`,WS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$S=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,jS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,XS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KS=`#ifdef USE_IRIDESCENCE
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
#endif`,ZS=`#ifdef USE_BUMPMAP
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
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,oE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sE=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,aE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lE=`vec3 transformedNormal = objectNormal;
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
#endif`,uE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hE="gl_FragColor = linearToOutputTexel( gl_FragColor );",pE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,mE=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,gE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vE=`#ifdef USE_ENVMAP
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
#endif`,_E=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yE=`#ifdef USE_ENVMAP
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
#endif`,xE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ME=`#ifdef USE_GRADIENTMAP
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
}`,TE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,AE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RE=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,PE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,LE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UE=`PhysicalMaterial material;
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
#endif`,FE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,OE=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,kE=`#if defined( RE_IndirectDiffuse )
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
#endif`,BE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,GE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,WE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$E=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,XE=`#if defined( USE_POINTS_UV )
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
#endif`,YE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,QE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,JE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ew=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ow=`#ifdef USE_NORMALMAP
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
#endif`,sw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,fw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_w=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ew=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ww=`#ifdef USE_SKINNING
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
#endif`,Mw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tw=`#ifdef USE_SKINNING
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
#endif`,Aw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rw=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pw=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lw=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ow=`uniform sampler2D t2D;
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
}`,kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hw=`#include <common>
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
}`,Gw=`#if DEPTH_PACKING == 3200
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
	#endif
}`,Ww=`#define DISTANCE
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
}`,$w=`#define DISTANCE
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
}`,jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yw=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qw=`uniform vec3 diffuse;
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
}`,Kw=`#include <common>
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
}`,Zw=`uniform vec3 diffuse;
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
}`,Qw=`#define LAMBERT
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
}`,Jw=`#define LAMBERT
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
}`,eM=`#define MATCAP
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
}`,tM=`#define MATCAP
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
}`,nM=`#define NORMAL
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
}`,iM=`#define NORMAL
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
}`,rM=`#define PHONG
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
}`,oM=`#define PHONG
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
}`,sM=`#define STANDARD
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
}`,aM=`#define STANDARD
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
}`,lM=`#define TOON
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
}`,uM=`#define TOON
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
}`,cM=`uniform float size;
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
}`,dM=`uniform vec3 diffuse;
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
}`,fM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,hM=`uniform vec3 color;
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
}`,pM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,mM=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:OS,alphahash_pars_fragment:kS,alphamap_fragment:BS,alphamap_pars_fragment:zS,alphatest_fragment:VS,alphatest_pars_fragment:HS,aomap_fragment:GS,aomap_pars_fragment:WS,batching_pars_vertex:$S,batching_vertex:jS,begin_vertex:XS,beginnormal_vertex:YS,bsdfs:qS,iridescence_fragment:KS,bumpmap_pars_fragment:ZS,clipping_planes_fragment:QS,clipping_planes_pars_fragment:JS,clipping_planes_pars_vertex:eE,clipping_planes_vertex:tE,color_fragment:nE,color_pars_fragment:iE,color_pars_vertex:rE,color_vertex:oE,common:sE,cube_uv_reflection_fragment:aE,defaultnormal_vertex:lE,displacementmap_pars_vertex:uE,displacementmap_vertex:cE,emissivemap_fragment:dE,emissivemap_pars_fragment:fE,colorspace_fragment:hE,colorspace_pars_fragment:pE,envmap_fragment:mE,envmap_common_pars_fragment:gE,envmap_pars_fragment:vE,envmap_pars_vertex:_E,envmap_physical_pars_fragment:PE,envmap_vertex:yE,fog_vertex:xE,fog_pars_vertex:SE,fog_fragment:EE,fog_pars_fragment:wE,gradientmap_pars_fragment:ME,lightmap_fragment:TE,lightmap_pars_fragment:AE,lights_lambert_fragment:CE,lights_lambert_pars_fragment:bE,lights_pars_begin:RE,lights_toon_fragment:LE,lights_toon_pars_fragment:NE,lights_phong_fragment:DE,lights_phong_pars_fragment:IE,lights_physical_fragment:UE,lights_physical_pars_fragment:FE,lights_fragment_begin:OE,lights_fragment_maps:kE,lights_fragment_end:BE,logdepthbuf_fragment:zE,logdepthbuf_pars_fragment:VE,logdepthbuf_pars_vertex:HE,logdepthbuf_vertex:GE,map_fragment:WE,map_pars_fragment:$E,map_particle_fragment:jE,map_particle_pars_fragment:XE,metalnessmap_fragment:YE,metalnessmap_pars_fragment:qE,morphcolor_vertex:KE,morphnormal_vertex:ZE,morphtarget_pars_vertex:QE,morphtarget_vertex:JE,normal_fragment_begin:ew,normal_fragment_maps:tw,normal_pars_fragment:nw,normal_pars_vertex:iw,normal_vertex:rw,normalmap_pars_fragment:ow,clearcoat_normal_fragment_begin:sw,clearcoat_normal_fragment_maps:aw,clearcoat_pars_fragment:lw,iridescence_pars_fragment:uw,opaque_fragment:cw,packing:dw,premultiplied_alpha_fragment:fw,project_vertex:hw,dithering_fragment:pw,dithering_pars_fragment:mw,roughnessmap_fragment:gw,roughnessmap_pars_fragment:vw,shadowmap_pars_fragment:_w,shadowmap_pars_vertex:yw,shadowmap_vertex:xw,shadowmask_pars_fragment:Sw,skinbase_vertex:Ew,skinning_pars_vertex:ww,skinning_vertex:Mw,skinnormal_vertex:Tw,specularmap_fragment:Aw,specularmap_pars_fragment:Cw,tonemapping_fragment:bw,tonemapping_pars_fragment:Rw,transmission_fragment:Pw,transmission_pars_fragment:Lw,uv_pars_fragment:Nw,uv_pars_vertex:Dw,uv_vertex:Iw,worldpos_vertex:Uw,background_vert:Fw,background_frag:Ow,backgroundCube_vert:kw,backgroundCube_frag:Bw,cube_vert:zw,cube_frag:Vw,depth_vert:Hw,depth_frag:Gw,distanceRGBA_vert:Ww,distanceRGBA_frag:$w,equirect_vert:jw,equirect_frag:Xw,linedashed_vert:Yw,linedashed_frag:qw,meshbasic_vert:Kw,meshbasic_frag:Zw,meshlambert_vert:Qw,meshlambert_frag:Jw,meshmatcap_vert:eM,meshmatcap_frag:tM,meshnormal_vert:nM,meshnormal_frag:iM,meshphong_vert:rM,meshphong_frag:oM,meshphysical_vert:sM,meshphysical_frag:aM,meshtoon_vert:lM,meshtoon_frag:uM,points_vert:cM,points_frag:dM,shadow_vert:fM,shadow_frag:hM,sprite_vert:pM,sprite_frag:mM},ce={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Qn={basic:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Kt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Kt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Kt([ce.points,ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Kt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Kt([ce.common,ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Kt([ce.sprite,ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Kt([ce.common,ce.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Kt([ce.lights,ce.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Qn.physical={uniforms:Kt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ua={r:0,b:0,g:0};function gM(t,e,n,i,r,o,s){const a=new Ze(0);let l=o===!0?0:1,u,c,f=null,h=0,g=null;function _(p,d){let m=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?n:e).get(v)),v===null?x(a,l):v&&v.isColor&&(x(v,1),m=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ru)?(c===void 0&&(c=new ti(new na(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:Fo(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=ot.getTransfer(v.colorSpace)!==ut,(f!==v||h!==v.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,g=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new ti(new lu(2,2),new er({name:"BackgroundMaterial",uniforms:Fo(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=ot.getTransfer(v.colorSpace)!==ut,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,g=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function x(p,d){p.getRGB(Ua,Dv(t)),i.buffers.color.setClear(Ua.r,Ua.g,Ua.b,d,s)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:_}}function vM(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=p(null);let u=l,c=!1;function f(N,G,U,Z,I){let O=!1;if(s){const H=x(Z,U,G);u!==H&&(u=H,g(u.object)),O=d(N,Z,U,I),O&&m(N,Z,U,I)}else{const H=G.wireframe===!0;(u.geometry!==Z.id||u.program!==U.id||u.wireframe!==H)&&(u.geometry=Z.id,u.program=U.id,u.wireframe=H,O=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(O||c)&&(c=!1,P(N,G,U,Z),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function h(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function g(N){return i.isWebGL2?t.bindVertexArray(N):o.bindVertexArrayOES(N)}function _(N){return i.isWebGL2?t.deleteVertexArray(N):o.deleteVertexArrayOES(N)}function x(N,G,U){const Z=U.wireframe===!0;let I=a[N.id];I===void 0&&(I={},a[N.id]=I);let O=I[G.id];O===void 0&&(O={},I[G.id]=O);let H=O[Z];return H===void 0&&(H=p(h()),O[Z]=H),H}function p(N){const G=[],U=[],Z=[];for(let I=0;I<r;I++)G[I]=0,U[I]=0,Z[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:U,attributeDivisors:Z,object:N,attributes:{},index:null}}function d(N,G,U,Z){const I=u.attributes,O=G.attributes;let H=0;const X=U.getAttributes();for(const J in X)if(X[J].location>=0){const $=I[J];let K=O[J];if(K===void 0&&(J==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),J==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),$===void 0||$.attribute!==K||K&&$.data!==K.data)return!0;H++}return u.attributesNum!==H||u.index!==Z}function m(N,G,U,Z){const I={},O=G.attributes;let H=0;const X=U.getAttributes();for(const J in X)if(X[J].location>=0){let $=O[J];$===void 0&&(J==="instanceMatrix"&&N.instanceMatrix&&($=N.instanceMatrix),J==="instanceColor"&&N.instanceColor&&($=N.instanceColor));const K={};K.attribute=$,$&&$.data&&(K.data=$.data),I[J]=K,H++}u.attributes=I,u.attributesNum=H,u.index=Z}function v(){const N=u.newAttributes;for(let G=0,U=N.length;G<U;G++)N[G]=0}function E(N){M(N,0)}function M(N,G){const U=u.newAttributes,Z=u.enabledAttributes,I=u.attributeDivisors;U[N]=1,Z[N]===0&&(t.enableVertexAttribArray(N),Z[N]=1),I[N]!==G&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,G),I[N]=G)}function w(){const N=u.newAttributes,G=u.enabledAttributes;for(let U=0,Z=G.length;U<Z;U++)G[U]!==N[U]&&(t.disableVertexAttribArray(U),G[U]=0)}function T(N,G,U,Z,I,O,H){H===!0?t.vertexAttribIPointer(N,G,U,I,O):t.vertexAttribPointer(N,G,U,Z,I,O)}function P(N,G,U,Z){if(i.isWebGL2===!1&&(N.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const I=Z.attributes,O=U.getAttributes(),H=G.defaultAttributeValues;for(const X in O){const J=O[X];if(J.location>=0){let ge=I[X];if(ge===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(ge=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(ge=N.instanceColor)),ge!==void 0){const $=ge.normalized,K=ge.itemSize,ne=n.get(ge);if(ne===void 0)continue;const de=ne.buffer,ye=ne.type,ve=ne.bytesPerElement,ze=i.isWebGL2===!0&&(ye===t.INT||ye===t.UNSIGNED_INT||ge.gpuType===hv);if(ge.isInterleavedBufferAttribute){const be=ge.data,D=be.stride,nt=ge.offset;if(be.isInstancedInterleavedBuffer){for(let _e=0;_e<J.locationSize;_e++)M(J.location+_e,be.meshPerAttribute);N.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let _e=0;_e<J.locationSize;_e++)E(J.location+_e);t.bindBuffer(t.ARRAY_BUFFER,de);for(let _e=0;_e<J.locationSize;_e++)T(J.location+_e,K/J.locationSize,ye,$,D*ve,(nt+K/J.locationSize*_e)*ve,ze)}else{if(ge.isInstancedBufferAttribute){for(let be=0;be<J.locationSize;be++)M(J.location+be,ge.meshPerAttribute);N.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let be=0;be<J.locationSize;be++)E(J.location+be);t.bindBuffer(t.ARRAY_BUFFER,de);for(let be=0;be<J.locationSize;be++)T(J.location+be,K/J.locationSize,ye,$,K*ve,K/J.locationSize*be*ve,ze)}}else if(H!==void 0){const $=H[X];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(J.location,$);break;case 3:t.vertexAttrib3fv(J.location,$);break;case 4:t.vertexAttrib4fv(J.location,$);break;default:t.vertexAttrib1fv(J.location,$)}}}}w()}function B(){k();for(const N in a){const G=a[N];for(const U in G){const Z=G[U];for(const I in Z)_(Z[I].object),delete Z[I];delete G[U]}delete a[N]}}function y(N){if(a[N.id]===void 0)return;const G=a[N.id];for(const U in G){const Z=G[U];for(const I in Z)_(Z[I].object),delete Z[I];delete G[U]}delete a[N.id]}function C(N){for(const G in a){const U=a[G];if(U[N.id]===void 0)continue;const Z=U[N.id];for(const I in Z)_(Z[I].object),delete Z[I];delete U[N.id]}}function k(){z(),c=!0,u!==l&&(u=l,g(u.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:k,resetDefaultState:z,dispose:B,releaseStatesOfGeometry:y,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:E,disableUnusedAttributes:w}}function _M(t,e,n,i){const r=i.isWebGL2;let o;function s(c){o=c}function a(c,f){t.drawArrays(o,c,f),n.update(f,o,1)}function l(c,f,h){if(h===0)return;let g,_;if(r)g=t,_="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](o,c,f,h),n.update(f,o,h)}function u(c,f,h){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<h;_++)this.render(c[_],f[_]);else{g.multiDrawArraysWEBGL(o,c,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=f[x];n.update(_,o,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function yM(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=s||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,E=s||e.has("OES_texture_float"),M=v&&E,w=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:m,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:M,maxSamples:w}}function xM(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new pr,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const g=f.length!==0||h||i!==0||r;return r=h,i=f.length,g},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,h){n=c(f,h,0)},this.setState=function(f,h,g){const _=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,d=t.get(f);if(!r||_===null||_.length===0||o&&!p)o?c(null):u();else{const m=o?0:i,v=m*4;let E=d.clippingState||null;l.value=E,E=c(_,h,v,g);for(let M=0;M!==v;++M)E[M]=n[M];d.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,g,_){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const d=g+x*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(p===null||p.length<d)&&(p=new Float32Array(d));for(let v=0,E=g;v!==x;++v,E+=4)s.copy(f[v]).applyMatrix4(m,a),s.normal.toArray(p,E),p[E+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function SM(t){let e=new WeakMap;function n(s,a){return a===ed?s.mapping=Do:a===td&&(s.mapping=Io),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===ed||a===td)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new DS(l.height);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class EM extends Iv{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const lo=4,qp=[.125,.215,.35,.446,.526,.582],xr=20,dc=new EM,Kp=new Ze;let fc=null,hc=0,pc=0;const mr=(1+Math.sqrt(5))/2,ro=1/mr,Zp=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,mr,ro),new V(0,mr,-ro),new V(ro,0,mr),new V(-ro,0,mr),new V(mr,ro,0),new V(-mr,ro,0)];class Qp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){fc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fc,hc,pc),e.scissorTest=!1,Fa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Do||e.mapping===Io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Us,format:$n,colorSpace:Ei,depthBuffer:!1},r=Jp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jp(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wM(o)),this._blurMaterial=MM(o,e,n)}return r}_compileMaterial(e){const n=new ti(this._lodPlanes[0],e);this._renderer.compile(n,dc)}_sceneToCubeUV(e,n,i,r){const a=new xn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Kp),c.toneMapping=Gi,c.autoClear=!1;const g=new Pv({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),_=new ti(new na,g);let x=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,x=!0):(g.color.copy(Kp),x=!0);for(let d=0;d<6;d++){const m=d%3;m===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):m===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const v=this._cubeSize;Fa(r,m*v,d>2?v:0,v,v),c.setRenderTarget(r),x&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Do||e.mapping===Io;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=em());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new ti(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Fa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,dc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Zp[(r-1)%Zp.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new ti(this._lodPlanes[r],u),h=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*g):2*Math.PI/(2*xr-1),x=o/_,p=isFinite(o)?1+Math.floor(c*x):xr;p>xr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xr}`);const d=[];let m=0;for(let T=0;T<xr;++T){const P=T/x,B=Math.exp(-P*P/2);d.push(B),T===0?m+=B:T<p&&(m+=2*B)}for(let T=0;T<d.length;T++)d[T]=d[T]/m;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const E=this._sizeLods[r],M=3*E*(r>v-lo?r-v+lo:0),w=4*(this._cubeSize-E);Fa(n,M,w,3*E,2*E),l.setRenderTarget(n),l.render(f,dc)}}function wM(t){const e=[],n=[],i=[];let r=t;const o=t-lo+1+qp.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-lo?l=qp[s-t+lo-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],g=6,_=6,x=3,p=2,d=1,m=new Float32Array(x*_*g),v=new Float32Array(p*_*g),E=new Float32Array(d*_*g);for(let w=0;w<g;w++){const T=w%3*2/3-1,P=w>2?0:-1,B=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];m.set(B,x*_*w),v.set(h,p*_*w);const y=[w,w,w,w,w,w];E.set(y,d*_*w)}const M=new oi;M.setAttribute("position",new ni(m,x)),M.setAttribute("uv",new ni(v,p)),M.setAttribute("faceIndex",new ni(E,d)),e.push(M),r>lo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Jp(t,e,n){const i=new Lr(t,e,n);return i.texture.mapping=ru,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function MM(t,e,n){const i=new Float32Array(xr),r=new V(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wf(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function em(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wf(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function tm(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function wf(){return`

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
	`}function TM(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===ed||l===td,c=l===Do||l===Io;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Qp(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){n===null&&(n=new Qp(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",o),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function AM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function CM(t,e,n,i){const r={},o=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let p=0,d=x.length;p<d;p++)e.remove(x[p])}h.removeEventListener("dispose",s),delete r[h.id];const g=o.get(h);g&&(e.remove(g),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const _ in g){const x=g[_];for(let p=0,d=x.length;p<d;p++)e.update(x[p],t.ARRAY_BUFFER)}}function u(f){const h=[],g=f.index,_=f.attributes.position;let x=0;if(g!==null){const m=g.array;x=g.version;for(let v=0,E=m.length;v<E;v+=3){const M=m[v+0],w=m[v+1],T=m[v+2];h.push(M,w,w,T,T,M)}}else if(_!==void 0){const m=_.array;x=_.version;for(let v=0,E=m.length/3-1;v<E;v+=3){const M=v+0,w=v+1,T=v+2;h.push(M,w,w,T,T,M)}}else return;const p=new(wv(h)?Nv:Lv)(h,1);p.version=x;const d=o.get(f);d&&e.remove(d),o.set(f,p)}function c(f){const h=o.get(f);if(h){const g=f.index;g!==null&&h.version<g.version&&u(f)}else u(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function bM(t,e,n,i){const r=i.isWebGL2;let o;function s(g){o=g}let a,l;function u(g){a=g.type,l=g.bytesPerElement}function c(g,_){t.drawElements(o,_,a,g*l),n.update(_,o,1)}function f(g,_,x){if(x===0)return;let p,d;if(r)p=t,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](o,_,a,g*l,x),n.update(_,o,x)}function h(g,_,x){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<x;d++)this.render(g[d]/l,_[d]);else{p.multiDrawElementsWEBGL(o,_,0,a,g,0,x);let d=0;for(let m=0;m<x;m++)d+=_[m];n.update(d,o,1)}}this.setMode=s,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function RM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function PM(t,e){return t[0]-e[0]}function LM(t,e){return Math.abs(e[1])-Math.abs(t[1])}function NM(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new dt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=_!==void 0?_.length:0;let p=o.get(c);if(p===void 0||p.count!==x){let G=function(){z.dispose(),o.delete(c),c.removeEventListener("dispose",G)};var g=G;p!==void 0&&p.texture.dispose();const v=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,w=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let B=0;v===!0&&(B=1),E===!0&&(B=2),M===!0&&(B=3);let y=c.attributes.position.count*B,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const k=new Float32Array(y*C*4*x),z=new Av(k,y,C,x);z.type=vi,z.needsUpdate=!0;const N=B*4;for(let U=0;U<x;U++){const Z=w[U],I=T[U],O=P[U],H=y*C*4*U;for(let X=0;X<Z.count;X++){const J=X*N;v===!0&&(s.fromBufferAttribute(Z,X),k[H+J+0]=s.x,k[H+J+1]=s.y,k[H+J+2]=s.z,k[H+J+3]=0),E===!0&&(s.fromBufferAttribute(I,X),k[H+J+4]=s.x,k[H+J+5]=s.y,k[H+J+6]=s.z,k[H+J+7]=0),M===!0&&(s.fromBufferAttribute(O,X),k[H+J+8]=s.x,k[H+J+9]=s.y,k[H+J+10]=s.z,k[H+J+11]=O.itemSize===4?s.w:1)}}p={count:x,texture:z,size:new Xe(y,C)},o.set(c,p),c.addEventListener("dispose",G)}let d=0;for(let v=0;v<h.length;v++)d+=h[v];const m=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",m),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let x=i[c.id];if(x===void 0||x.length!==_){x=[];for(let E=0;E<_;E++)x[E]=[E,0];i[c.id]=x}for(let E=0;E<_;E++){const M=x[E];M[0]=E,M[1]=h[E]}x.sort(LM);for(let E=0;E<8;E++)E<_&&x[E][1]?(a[E][0]=x[E][0],a[E][1]=x[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(PM);const p=c.morphAttributes.position,d=c.morphAttributes.normal;let m=0;for(let E=0;E<8;E++){const M=a[E],w=M[0],T=M[1];w!==Number.MAX_SAFE_INTEGER&&T?(p&&c.getAttribute("morphTarget"+E)!==p[w]&&c.setAttribute("morphTarget"+E,p[w]),d&&c.getAttribute("morphNormal"+E)!==d[w]&&c.setAttribute("morphNormal"+E,d[w]),r[E]=T,m+=T):(p&&c.hasAttribute("morphTarget"+E)===!0&&c.deleteAttribute("morphTarget"+E),d&&c.hasAttribute("morphNormal"+E)===!0&&c.deleteAttribute("morphNormal"+E),r[E]=0)}const v=c.morphTargetsRelative?1:1-m;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function DM(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class Ov extends dn{constructor(e,n,i,r,o,s,a,l,u,c){if(c=c!==void 0?c:Cr,c!==Cr&&c!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Cr&&(i=Bi),i===void 0&&c===Uo&&(i=Ar),super(null,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const kv=new dn,Bv=new Ov(1,1);Bv.compareFunction=Ev;const zv=new Av,Vv=new gS,Hv=new Uv,nm=[],im=[],rm=new Float32Array(16),om=new Float32Array(9),sm=new Float32Array(4);function jo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=nm[r];if(o===void 0&&(o=new Float32Array(r),nm[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function uu(t,e){let n=im[e];n===void 0&&(n=new Int32Array(e),im[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function IM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function UM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function FM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function OM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function kM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;sm.set(i),t.uniformMatrix2fv(this.addr,!1,sm),Pt(n,i)}}function BM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;om.set(i),t.uniformMatrix3fv(this.addr,!1,om),Pt(n,i)}}function zM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;rm.set(i),t.uniformMatrix4fv(this.addr,!1,rm),Pt(n,i)}}function VM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function HM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function GM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function WM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function $M(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function jM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function XM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function YM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function qM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?Bv:kv;n.setTexture2D(e||o,r)}function KM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Vv,r)}function ZM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Hv,r)}function QM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||zv,r)}function JM(t){switch(t){case 5126:return IM;case 35664:return UM;case 35665:return FM;case 35666:return OM;case 35674:return kM;case 35675:return BM;case 35676:return zM;case 5124:case 35670:return VM;case 35667:case 35671:return HM;case 35668:case 35672:return GM;case 35669:case 35673:return WM;case 5125:return $M;case 36294:return jM;case 36295:return XM;case 36296:return YM;case 35678:case 36198:case 36298:case 36306:case 35682:return qM;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return QM}}function e1(t,e){t.uniform1fv(this.addr,e)}function t1(t,e){const n=jo(e,this.size,2);t.uniform2fv(this.addr,n)}function n1(t,e){const n=jo(e,this.size,3);t.uniform3fv(this.addr,n)}function i1(t,e){const n=jo(e,this.size,4);t.uniform4fv(this.addr,n)}function r1(t,e){const n=jo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function o1(t,e){const n=jo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function s1(t,e){const n=jo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function a1(t,e){t.uniform1iv(this.addr,e)}function l1(t,e){t.uniform2iv(this.addr,e)}function u1(t,e){t.uniform3iv(this.addr,e)}function c1(t,e){t.uniform4iv(this.addr,e)}function d1(t,e){t.uniform1uiv(this.addr,e)}function f1(t,e){t.uniform2uiv(this.addr,e)}function h1(t,e){t.uniform3uiv(this.addr,e)}function p1(t,e){t.uniform4uiv(this.addr,e)}function m1(t,e,n){const i=this.cache,r=e.length,o=uu(n,r);Rt(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||kv,o[s])}function g1(t,e,n){const i=this.cache,r=e.length,o=uu(n,r);Rt(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||Vv,o[s])}function v1(t,e,n){const i=this.cache,r=e.length,o=uu(n,r);Rt(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||Hv,o[s])}function _1(t,e,n){const i=this.cache,r=e.length,o=uu(n,r);Rt(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||zv,o[s])}function y1(t){switch(t){case 5126:return e1;case 35664:return t1;case 35665:return n1;case 35666:return i1;case 35674:return r1;case 35675:return o1;case 35676:return s1;case 5124:case 35670:return a1;case 35667:case 35671:return l1;case 35668:case 35672:return u1;case 35669:case 35673:return c1;case 5125:return d1;case 36294:return f1;case 36295:return h1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return v1;case 36289:case 36303:case 36311:case 36292:return _1}}class x1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=JM(n.type)}}class S1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=y1(n.type)}}class E1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const mc=/(\w+)(\])?(\[|\.)?/g;function am(t,e){t.seq.push(e),t.map[e.id]=e}function w1(t,e,n){const i=t.name,r=i.length;for(mc.lastIndex=0;;){const o=mc.exec(i),s=mc.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){am(n,u===void 0?new x1(a,t,e):new S1(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new E1(a),am(n,f)),n=f}}}class ll{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);w1(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function lm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const M1=37297;let T1=0;function A1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function C1(t){const e=ot.getPrimaries(ot.workingColorSpace),n=ot.getPrimaries(t);let i;switch(e===n?i="":e===Cl&&n===Al?i="LinearDisplayP3ToLinearSRGB":e===Al&&n===Cl&&(i="LinearSRGBToLinearDisplayP3"),t){case Ei:case ou:return[i,"LinearTransferOETF"];case kt:case Sf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function um(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+A1(t.getShaderSource(e),s)}else return r}function b1(t,e){const n=C1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function R1(t,e){let n;switch(e){case zx:n="Linear";break;case Vx:n="Reinhard";break;case Hx:n="OptimizedCineon";break;case Gx:n="ACESFilmic";break;case $x:n="AgX";break;case Wx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function P1(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(uo).join(`
`)}function L1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uo).join(`
`)}function N1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function D1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function uo(t){return t!==""}function cm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(t){return t.replace(I1,F1)}const U1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function F1(t,e){let n=Ge[e];if(n===void 0){const i=U1.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ad(n)}const O1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fm(t){return t.replace(O1,k1)}function k1(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function hm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function B1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===dv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===px?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function z1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Do:case Io:e="ENVMAP_TYPE_CUBE";break;case ru:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Io:e="ENVMAP_MODE_REFRACTION";break}return e}function H1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case yf:e="ENVMAP_BLENDING_MULTIPLY";break;case kx:e="ENVMAP_BLENDING_MIX";break;case Bx:e="ENVMAP_BLENDING_ADD";break}return e}function G1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function W1(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=B1(n),u=z1(n),c=V1(n),f=H1(n),h=G1(n),g=n.isWebGL2?"":P1(n),_=L1(n),x=N1(o),p=r.createProgram();let d,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(uo).join(`
`),d.length>0&&(d+=`
`),m=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(uo).join(`
`),m.length>0&&(m+=`
`)):(d=[hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uo).join(`
`),m=[g,hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Gi?R1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,b1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(uo).join(`
`)),s=ad(s),s=cm(s,n),s=dm(s,n),a=ad(a),a=cm(a,n),a=dm(a,n),s=fm(s),a=fm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=v+d+s,M=v+m+a,w=lm(r,r.VERTEX_SHADER,E),T=lm(r,r.FRAGMENT_SHADER,M);r.attachShader(p,w),r.attachShader(p,T),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function P(k){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(p).trim(),N=r.getShaderInfoLog(w).trim(),G=r.getShaderInfoLog(T).trim();let U=!0,Z=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,w,T);else{const I=um(r,w,"vertex"),O=um(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+z+`
`+I+`
`+O)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(N===""||G==="")&&(Z=!1);Z&&(k.diagnostics={runnable:U,programLog:z,vertexShader:{log:N,prefix:d},fragmentShader:{log:G,prefix:m}})}r.deleteShader(w),r.deleteShader(T),B=new ll(r,p),y=D1(r,p)}let B;this.getUniforms=function(){return B===void 0&&P(this),B};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(p,M1)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=T1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=T,this}let $1=0;class j1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new X1(e),n.set(e,i)),i}}class X1{constructor(e){this.id=$1++,this.code=e,this.usedTimes=0}}function Y1(t,e,n,i,r,o,s){const a=new bv,l=new j1,u=new Set,c=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,g=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return u.add(y),y===0?"uv":`uv${y}`}function d(y,C,k,z,N){const G=z.fog,U=N.geometry,Z=y.isMeshStandardMaterial?z.environment:null,I=(y.isMeshStandardMaterial?n:e).get(y.envMap||Z),O=I&&I.mapping===ru?I.image.height:null,H=x[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const X=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,J=X!==void 0?X.length:0;let ge=0;U.morphAttributes.position!==void 0&&(ge=1),U.morphAttributes.normal!==void 0&&(ge=2),U.morphAttributes.color!==void 0&&(ge=3);let $,K,ne,de;if(H){const st=Qn[H];$=st.vertexShader,K=st.fragmentShader}else $=y.vertexShader,K=y.fragmentShader,l.update(y),ne=l.getVertexShaderID(y),de=l.getFragmentShaderID(y);const ye=t.getRenderTarget(),ve=N.isInstancedMesh===!0,ze=N.isBatchedMesh===!0,be=!!y.map,D=!!y.matcap,nt=!!I,_e=!!y.aoMap,Ae=!!y.lightMap,xe=!!y.bumpMap,Oe=!!y.normalMap,Me=!!y.displacementMap,R=!!y.emissiveMap,A=!!y.metalnessMap,j=!!y.roughnessMap,ie=y.anisotropy>0,ee=y.clearcoat>0,re=y.iridescence>0,he=y.sheen>0,ue=y.transmission>0,fe=ie&&!!y.anisotropyMap,Se=ee&&!!y.clearcoatMap,Le=ee&&!!y.clearcoatNormalMap,te=ee&&!!y.clearcoatRoughnessMap,qe=re&&!!y.iridescenceMap,Ie=re&&!!y.iridescenceThicknessMap,Re=he&&!!y.sheenColorMap,Ee=he&&!!y.sheenRoughnessMap,se=!!y.specularMap,ke=!!y.specularColorMap,Je=!!y.specularIntensityMap,et=ue&&!!y.transmissionMap,Ve=ue&&!!y.thicknessMap,it=!!y.gradientMap,L=!!y.alphaMap,ae=y.alphaTest>0,le=!!y.alphaHash,we=!!y.extensions;let Pe=Gi;y.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Pe=t.toneMapping);const tt={isWebGL2:f,shaderID:H,shaderType:y.type,shaderName:y.name,vertexShader:$,fragmentShader:K,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:de,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:ze,instancing:ve,instancingColor:ve&&N.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:ye===null?t.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Ei,alphaToCoverage:!!y.alphaToCoverage,map:be,matcap:D,envMap:nt,envMapMode:nt&&I.mapping,envMapCubeUVHeight:O,aoMap:_e,lightMap:Ae,bumpMap:xe,normalMap:Oe,displacementMap:g&&Me,emissiveMap:R,normalMapObjectSpace:Oe&&y.normalMapType===nS,normalMapTangentSpace:Oe&&y.normalMapType===Sv,metalnessMap:A,roughnessMap:j,anisotropy:ie,anisotropyMap:fe,clearcoat:ee,clearcoatMap:Se,clearcoatNormalMap:Le,clearcoatRoughnessMap:te,iridescence:re,iridescenceMap:qe,iridescenceThicknessMap:Ie,sheen:he,sheenColorMap:Re,sheenRoughnessMap:Ee,specularMap:se,specularColorMap:ke,specularIntensityMap:Je,transmission:ue,transmissionMap:et,thicknessMap:Ve,gradientMap:it,opaque:y.transparent===!1&&y.blending===Mo&&y.alphaToCoverage===!1,alphaMap:L,alphaTest:ae,alphaHash:le,combine:y.combine,mapUv:be&&p(y.map.channel),aoMapUv:_e&&p(y.aoMap.channel),lightMapUv:Ae&&p(y.lightMap.channel),bumpMapUv:xe&&p(y.bumpMap.channel),normalMapUv:Oe&&p(y.normalMap.channel),displacementMapUv:Me&&p(y.displacementMap.channel),emissiveMapUv:R&&p(y.emissiveMap.channel),metalnessMapUv:A&&p(y.metalnessMap.channel),roughnessMapUv:j&&p(y.roughnessMap.channel),anisotropyMapUv:fe&&p(y.anisotropyMap.channel),clearcoatMapUv:Se&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:Le&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&p(y.sheenRoughnessMap.channel),specularMapUv:se&&p(y.specularMap.channel),specularColorMapUv:ke&&p(y.specularColorMap.channel),specularIntensityMapUv:Je&&p(y.specularIntensityMap.channel),transmissionMapUv:et&&p(y.transmissionMap.channel),thicknessMapUv:Ve&&p(y.thicknessMap.channel),alphaMapUv:L&&p(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Oe||ie),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(be||L),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ge,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:Pe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:be&&y.map.isVideoTexture===!0&&ot.getTransfer(y.map.colorSpace)===ut,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===gi,flipSided:y.side===cn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:we&&y.extensions.derivatives===!0,extensionFragDepth:we&&y.extensions.fragDepth===!0,extensionDrawBuffers:we&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:we&&y.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return tt.vertexUv1s=u.has(1),tt.vertexUv2s=u.has(2),tt.vertexUv3s=u.has(3),u.clear(),tt}function m(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)C.push(k),C.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(v(C,y),E(C,y),C.push(t.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function v(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function E(y,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),y.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.alphaToCoverage&&a.enable(20),y.push(a.mask)}function M(y){const C=x[y.type];let k;if(C){const z=Qn[C];k=RS.clone(z.uniforms)}else k=y.uniforms;return k}function w(y,C){let k;for(let z=0,N=c.length;z<N;z++){const G=c[z];if(G.cacheKey===C){k=G,++k.usedTimes;break}}return k===void 0&&(k=new W1(t,C,y,o),c.push(k)),k}function T(y){if(--y.usedTimes===0){const C=c.indexOf(y);c[C]=c[c.length-1],c.pop(),y.destroy()}}function P(y){l.remove(y)}function B(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:M,acquireProgram:w,releaseProgram:T,releaseShaderCache:P,programs:c,dispose:B}}function q1(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function K1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function pm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function mm(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f,h,g,_,x,p){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:g,groupOrder:_,renderOrder:f.renderOrder,z:x,group:p},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=g,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=x,d.group=p),e++,d}function a(f,h,g,_,x,p){const d=s(f,h,g,_,x,p);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):n.push(d)}function l(f,h,g,_,x,p){const d=s(f,h,g,_,x,p);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):n.unshift(d)}function u(f,h){n.length>1&&n.sort(f||K1),i.length>1&&i.sort(h||pm),r.length>1&&r.sort(h||pm)}function c(){for(let f=e,h=t.length;f<h;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:c,sort:u}}function Z1(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new mm,t.set(i,[s])):r>=o.length?(s=new mm,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function Q1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new Ze};break;case"SpotLight":n={position:new V,direction:new V,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function J1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let eT=0;function tT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function nT(t,e){const n=new Q1,i=J1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new V);const o=new V,s=new Et,a=new Et;function l(c,f){let h=0,g=0,_=0;for(let k=0;k<9;k++)r.probe[k].set(0,0,0);let x=0,p=0,d=0,m=0,v=0,E=0,M=0,w=0,T=0,P=0,B=0;c.sort(tT);const y=f===!0?Math.PI:1;for(let k=0,z=c.length;k<z;k++){const N=c[k],G=N.color,U=N.intensity,Z=N.distance,I=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=G.r*U*y,g+=G.g*U*y,_+=G.b*U*y;else if(N.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(N.sh.coefficients[O],U);B++}else if(N.isDirectionalLight){const O=n.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity*y),N.castShadow){const H=N.shadow,X=i.get(N);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,r.directionalShadow[x]=X,r.directionalShadowMap[x]=I,r.directionalShadowMatrix[x]=N.shadow.matrix,E++}r.directional[x]=O,x++}else if(N.isSpotLight){const O=n.get(N);O.position.setFromMatrixPosition(N.matrixWorld),O.color.copy(G).multiplyScalar(U*y),O.distance=Z,O.coneCos=Math.cos(N.angle),O.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),O.decay=N.decay,r.spot[d]=O;const H=N.shadow;if(N.map&&(r.spotLightMap[T]=N.map,T++,H.updateMatrices(N),N.castShadow&&P++),r.spotLightMatrix[d]=H.matrix,N.castShadow){const X=i.get(N);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,r.spotShadow[d]=X,r.spotShadowMap[d]=I,w++}d++}else if(N.isRectAreaLight){const O=n.get(N);O.color.copy(G).multiplyScalar(U),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),r.rectArea[m]=O,m++}else if(N.isPointLight){const O=n.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity*y),O.distance=N.distance,O.decay=N.decay,N.castShadow){const H=N.shadow,X=i.get(N);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,X.shadowCameraNear=H.camera.near,X.shadowCameraFar=H.camera.far,r.pointShadow[p]=X,r.pointShadowMap[p]=I,r.pointShadowMatrix[p]=N.shadow.matrix,M++}r.point[p]=O,p++}else if(N.isHemisphereLight){const O=n.get(N);O.skyColor.copy(N.color).multiplyScalar(U*y),O.groundColor.copy(N.groundColor).multiplyScalar(U*y),r.hemi[v]=O,v++}}m>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=g,r.ambient[2]=_;const C=r.hash;(C.directionalLength!==x||C.pointLength!==p||C.spotLength!==d||C.rectAreaLength!==m||C.hemiLength!==v||C.numDirectionalShadows!==E||C.numPointShadows!==M||C.numSpotShadows!==w||C.numSpotMaps!==T||C.numLightProbes!==B)&&(r.directional.length=x,r.spot.length=d,r.rectArea.length=m,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=w+T-P,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=B,C.directionalLength=x,C.pointLength=p,C.spotLength=d,C.rectAreaLength=m,C.hemiLength=v,C.numDirectionalShadows=E,C.numPointShadows=M,C.numSpotShadows=w,C.numSpotMaps=T,C.numLightProbes=B,r.version=eT++)}function u(c,f){let h=0,g=0,_=0,x=0,p=0;const d=f.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const E=c[m];if(E.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(d),h++}else if(E.isSpotLight){const M=r.spot[_];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(d),_++}else if(E.isRectAreaLight){const M=r.rectArea[x];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(d),a.identity(),s.copy(E.matrixWorld),s.premultiply(d),a.extractRotation(s),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){const M=r.point[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(d),g++}else if(E.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(d),p++}}}return{setup:l,setupView:u,state:r}}function gm(t,e){const n=new nT(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function iT(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new gm(t,e),n.set(o,[l])):s>=a.length?(l=new gm(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class rT extends $o{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oT extends $o{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aT=`uniform sampler2D shadow_pass;
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
}`;function lT(t,e,n){let i=new Ef;const r=new Xe,o=new Xe,s=new dt,a=new rT({depthPacking:tS}),l=new oT,u={},c=n.maxTextureSize,f={[Ji]:cn,[cn]:Ji,[gi]:gi},h=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:sT,fragmentShader:aT}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const _=new oi;_.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ti(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dv;let d=this.type;this.render=function(w,T,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const B=t.getRenderTarget(),y=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Hi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=d!==hi&&this.type===hi,N=d===hi&&this.type!==hi;for(let G=0,U=w.length;G<U;G++){const Z=w[G],I=Z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const O=I.getFrameExtents();if(r.multiply(O),o.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/O.x),r.x=o.x*O.x,I.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/O.y),r.y=o.y*O.y,I.mapSize.y=o.y)),I.map===null||z===!0||N===!0){const X=this.type!==hi?{minFilter:Qt,magFilter:Qt}:{};I.map!==null&&I.map.dispose(),I.map=new Lr(r.x,r.y,X),I.map.texture.name=Z.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const H=I.getViewportCount();for(let X=0;X<H;X++){const J=I.getViewport(X);s.set(o.x*J.x,o.y*J.y,o.x*J.z,o.y*J.w),k.viewport(s),I.updateMatrices(Z,X),i=I.getFrustum(),E(T,P,I.camera,Z,this.type)}I.isPointLightShadow!==!0&&this.type===hi&&m(I,P),I.needsUpdate=!1}d=this.type,p.needsUpdate=!1,t.setRenderTarget(B,y,C)};function m(w,T){const P=e.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Lr(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(T,null,P,h,x,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(T,null,P,g,x,null)}function v(w,T,P,B){let y=null;const C=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)y=C;else if(y=P.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=y.uuid,z=T.uuid;let N=u[k];N===void 0&&(N={},u[k]=N);let G=N[z];G===void 0&&(G=y.clone(),N[z]=G,T.addEventListener("dispose",M)),y=G}if(y.visible=T.visible,y.wireframe=T.wireframe,B===hi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:f[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=t.properties.get(y);k.light=P}return y}function E(w,T,P,B,y){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===hi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const z=e.update(w),N=w.material;if(Array.isArray(N)){const G=z.groups;for(let U=0,Z=G.length;U<Z;U++){const I=G[U],O=N[I.materialIndex];if(O&&O.visible){const H=v(w,O,B,y);w.onBeforeShadow(t,w,T,P,z,H,I),t.renderBufferDirect(P,null,z,H,w,I),w.onAfterShadow(t,w,T,P,z,H,I)}}}else if(N.visible){const G=v(w,N,B,y);w.onBeforeShadow(t,w,T,P,z,G,null),t.renderBufferDirect(P,null,z,G,w,null),w.onAfterShadow(t,w,T,P,z,G,null)}}const k=w.children;for(let z=0,N=k.length;z<N;z++)E(k[z],T,P,B,y)}function M(w){w.target.removeEventListener("dispose",M);for(const P in u){const B=u[P],y=w.target.uuid;y in B&&(B[y].dispose(),delete B[y])}}}function uT(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ae=new dt;let le=null;const we=new dt(0,0,0,0);return{setMask:function(Pe){le!==Pe&&!L&&(t.colorMask(Pe,Pe,Pe,Pe),le=Pe)},setLocked:function(Pe){L=Pe},setClear:function(Pe,tt,st,Tt,qt){qt===!0&&(Pe*=Tt,tt*=Tt,st*=Tt),ae.set(Pe,tt,st,Tt),we.equals(ae)===!1&&(t.clearColor(Pe,tt,st,Tt),we.copy(ae))},reset:function(){L=!1,le=null,we.set(-1,0,0,0)}}}function o(){let L=!1,ae=null,le=null,we=null;return{setTest:function(Pe){Pe?ve(t.DEPTH_TEST):ze(t.DEPTH_TEST)},setMask:function(Pe){ae!==Pe&&!L&&(t.depthMask(Pe),ae=Pe)},setFunc:function(Pe){if(le!==Pe){switch(Pe){case Lx:t.depthFunc(t.NEVER);break;case Nx:t.depthFunc(t.ALWAYS);break;case Dx:t.depthFunc(t.LESS);break;case Ml:t.depthFunc(t.LEQUAL);break;case Ix:t.depthFunc(t.EQUAL);break;case Ux:t.depthFunc(t.GEQUAL);break;case Fx:t.depthFunc(t.GREATER);break;case Ox:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=Pe}},setLocked:function(Pe){L=Pe},setClear:function(Pe){we!==Pe&&(t.clearDepth(Pe),we=Pe)},reset:function(){L=!1,ae=null,le=null,we=null}}}function s(){let L=!1,ae=null,le=null,we=null,Pe=null,tt=null,st=null,Tt=null,qt=null;return{setTest:function(Te){L||(Te?ve(t.STENCIL_TEST):ze(t.STENCIL_TEST))},setMask:function(Te){ae!==Te&&!L&&(t.stencilMask(Te),ae=Te)},setFunc:function(Te,Ue,vt){(le!==Te||we!==Ue||Pe!==vt)&&(t.stencilFunc(Te,Ue,vt),le=Te,we=Ue,Pe=vt)},setOp:function(Te,Ue,vt){(tt!==Te||st!==Ue||Tt!==vt)&&(t.stencilOp(Te,Ue,vt),tt=Te,st=Ue,Tt=vt)},setLocked:function(Te){L=Te},setClear:function(Te){qt!==Te&&(t.clearStencil(Te),qt=Te)},reset:function(){L=!1,ae=null,le=null,we=null,Pe=null,tt=null,st=null,Tt=null,qt=null}}}const a=new r,l=new o,u=new s,c=new WeakMap,f=new WeakMap;let h={},g={},_=new WeakMap,x=[],p=null,d=!1,m=null,v=null,E=null,M=null,w=null,T=null,P=null,B=new Ze(0,0,0),y=0,C=!1,k=null,z=null,N=null,G=null,U=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,O=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(H)[1]),I=O>=1):H.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),I=O>=2);let X=null,J={};const ge=t.getParameter(t.SCISSOR_BOX),$=t.getParameter(t.VIEWPORT),K=new dt().fromArray(ge),ne=new dt().fromArray($);function de(L,ae,le,we){const Pe=new Uint8Array(4),tt=t.createTexture();t.bindTexture(L,tt),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let st=0;st<le;st++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ae,0,t.RGBA,1,1,we,0,t.RGBA,t.UNSIGNED_BYTE,Pe):t.texImage2D(ae+st,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Pe);return tt}const ye={};ye[t.TEXTURE_2D]=de(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=de(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ye[t.TEXTURE_2D_ARRAY]=de(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=de(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ve(t.DEPTH_TEST),l.setFunc(Ml),Me(!1),R(qh),ve(t.CULL_FACE),xe(Hi);function ve(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function ze(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function be(L,ae){return g[L]!==ae?(t.bindFramebuffer(L,ae),g[L]=ae,i&&(L===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=ae),L===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=ae)),!0):!1}function D(L,ae){let le=x,we=!1;if(L)if(le=_.get(ae),le===void 0&&(le=[],_.set(ae,le)),L.isWebGLMultipleRenderTargets){const Pe=L.texture;if(le.length!==Pe.length||le[0]!==t.COLOR_ATTACHMENT0){for(let tt=0,st=Pe.length;tt<st;tt++)le[tt]=t.COLOR_ATTACHMENT0+tt;le.length=Pe.length,we=!0}}else le[0]!==t.COLOR_ATTACHMENT0&&(le[0]=t.COLOR_ATTACHMENT0,we=!0);else le[0]!==t.BACK&&(le[0]=t.BACK,we=!0);we&&(n.isWebGL2?t.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function nt(L){return p!==L?(t.useProgram(L),p=L,!0):!1}const _e={[yr]:t.FUNC_ADD,[gx]:t.FUNC_SUBTRACT,[vx]:t.FUNC_REVERSE_SUBTRACT};if(i)_e[Jh]=t.MIN,_e[ep]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(_e[Jh]=L.MIN_EXT,_e[ep]=L.MAX_EXT)}const Ae={[_x]:t.ZERO,[yx]:t.ONE,[xx]:t.SRC_COLOR,[Qc]:t.SRC_ALPHA,[Ax]:t.SRC_ALPHA_SATURATE,[Mx]:t.DST_COLOR,[Ex]:t.DST_ALPHA,[Sx]:t.ONE_MINUS_SRC_COLOR,[Jc]:t.ONE_MINUS_SRC_ALPHA,[Tx]:t.ONE_MINUS_DST_COLOR,[wx]:t.ONE_MINUS_DST_ALPHA,[Cx]:t.CONSTANT_COLOR,[bx]:t.ONE_MINUS_CONSTANT_COLOR,[Rx]:t.CONSTANT_ALPHA,[Px]:t.ONE_MINUS_CONSTANT_ALPHA};function xe(L,ae,le,we,Pe,tt,st,Tt,qt,Te){if(L===Hi){d===!0&&(ze(t.BLEND),d=!1);return}if(d===!1&&(ve(t.BLEND),d=!0),L!==mx){if(L!==m||Te!==C){if((v!==yr||w!==yr)&&(t.blendEquation(t.FUNC_ADD),v=yr,w=yr),Te)switch(L){case Mo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Kh:t.blendFunc(t.ONE,t.ONE);break;case Zh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Qh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Mo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Kh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Zh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Qh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,M=null,T=null,P=null,B.set(0,0,0),y=0,m=L,C=Te}return}Pe=Pe||ae,tt=tt||le,st=st||we,(ae!==v||Pe!==w)&&(t.blendEquationSeparate(_e[ae],_e[Pe]),v=ae,w=Pe),(le!==E||we!==M||tt!==T||st!==P)&&(t.blendFuncSeparate(Ae[le],Ae[we],Ae[tt],Ae[st]),E=le,M=we,T=tt,P=st),(Tt.equals(B)===!1||qt!==y)&&(t.blendColor(Tt.r,Tt.g,Tt.b,qt),B.copy(Tt),y=qt),m=L,C=!1}function Oe(L,ae){L.side===gi?ze(t.CULL_FACE):ve(t.CULL_FACE);let le=L.side===cn;ae&&(le=!le),Me(le),L.blending===Mo&&L.transparent===!1?xe(Hi):xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const we=L.stencilWrite;u.setTest(we),we&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),j(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ve(t.SAMPLE_ALPHA_TO_COVERAGE):ze(t.SAMPLE_ALPHA_TO_COVERAGE)}function Me(L){k!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),k=L)}function R(L){L!==fx?(ve(t.CULL_FACE),L!==z&&(L===qh?t.cullFace(t.BACK):L===hx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ze(t.CULL_FACE),z=L}function A(L){L!==N&&(I&&t.lineWidth(L),N=L)}function j(L,ae,le){L?(ve(t.POLYGON_OFFSET_FILL),(G!==ae||U!==le)&&(t.polygonOffset(ae,le),G=ae,U=le)):ze(t.POLYGON_OFFSET_FILL)}function ie(L){L?ve(t.SCISSOR_TEST):ze(t.SCISSOR_TEST)}function ee(L){L===void 0&&(L=t.TEXTURE0+Z-1),X!==L&&(t.activeTexture(L),X=L)}function re(L,ae,le){le===void 0&&(X===null?le=t.TEXTURE0+Z-1:le=X);let we=J[le];we===void 0&&(we={type:void 0,texture:void 0},J[le]=we),(we.type!==L||we.texture!==ae)&&(X!==le&&(t.activeTexture(le),X=le),t.bindTexture(L,ae||ye[L]),we.type=L,we.texture=ae)}function he(){const L=J[X];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ue(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(L){K.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),K.copy(L))}function Je(L){ne.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),ne.copy(L))}function et(L,ae){let le=f.get(ae);le===void 0&&(le=new WeakMap,f.set(ae,le));let we=le.get(L);we===void 0&&(we=t.getUniformBlockIndex(ae,L.name),le.set(L,we))}function Ve(L,ae){const we=f.get(ae).get(L);c.get(ae)!==we&&(t.uniformBlockBinding(ae,we,L.__bindingPointIndex),c.set(ae,we))}function it(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},X=null,J={},g={},_=new WeakMap,x=[],p=null,d=!1,m=null,v=null,E=null,M=null,w=null,T=null,P=null,B=new Ze(0,0,0),y=0,C=!1,k=null,z=null,N=null,G=null,U=null,K.set(0,0,t.canvas.width,t.canvas.height),ne.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ve,disable:ze,bindFramebuffer:be,drawBuffers:D,useProgram:nt,setBlending:xe,setMaterial:Oe,setFlipSided:Me,setCullFace:R,setLineWidth:A,setPolygonOffset:j,setScissorTest:ie,activeTexture:ee,bindTexture:re,unbindTexture:he,compressedTexImage2D:ue,compressedTexImage3D:fe,texImage2D:Ee,texImage3D:se,updateUBOMapping:et,uniformBlockBinding:Ve,texStorage2D:Ie,texStorage3D:Re,texSubImage2D:Se,texSubImage3D:Le,compressedTexSubImage2D:te,compressedTexSubImage3D:qe,scissor:ke,viewport:Je,reset:it}}function cT(t,e,n,i,r,o,s){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let f;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,A){return g?new OffscreenCanvas(R,A):Rl("canvas")}function x(R,A,j,ie){let ee=1;if((R.width>ie||R.height>ie)&&(ee=ie/Math.max(R.width,R.height)),ee<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const re=A?sd:Math.floor,he=re(ee*R.width),ue=re(ee*R.height);f===void 0&&(f=_(he,ue));const fe=j?_(he,ue):f;return fe.width=he,fe.height=ue,fe.getContext("2d").drawImage(R,0,0,he,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+he+"x"+ue+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return Pp(R.width)&&Pp(R.height)}function d(R){return a?!1:R.wrapS!==Wn||R.wrapT!==Wn||R.minFilter!==Qt&&R.minFilter!==sn}function m(R,A){return R.generateMipmaps&&A&&R.minFilter!==Qt&&R.minFilter!==sn}function v(R){t.generateMipmap(R)}function E(R,A,j,ie,ee=!1){if(a===!1)return A;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re=A;if(A===t.RED&&(j===t.FLOAT&&(re=t.R32F),j===t.HALF_FLOAT&&(re=t.R16F),j===t.UNSIGNED_BYTE&&(re=t.R8)),A===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(re=t.R8UI),j===t.UNSIGNED_SHORT&&(re=t.R16UI),j===t.UNSIGNED_INT&&(re=t.R32UI),j===t.BYTE&&(re=t.R8I),j===t.SHORT&&(re=t.R16I),j===t.INT&&(re=t.R32I)),A===t.RG&&(j===t.FLOAT&&(re=t.RG32F),j===t.HALF_FLOAT&&(re=t.RG16F),j===t.UNSIGNED_BYTE&&(re=t.RG8)),A===t.RGBA){const he=ee?Tl:ot.getTransfer(ie);j===t.FLOAT&&(re=t.RGBA32F),j===t.HALF_FLOAT&&(re=t.RGBA16F),j===t.UNSIGNED_BYTE&&(re=he===ut?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function M(R,A,j){return m(R,j)===!0||R.isFramebufferTexture&&R.minFilter!==Qt&&R.minFilter!==sn?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function w(R){return R===Qt||R===tp||R===os?t.NEAREST:t.LINEAR}function T(R){const A=R.target;A.removeEventListener("dispose",T),B(A),A.isVideoTexture&&c.delete(A)}function P(R){const A=R.target;A.removeEventListener("dispose",P),C(A)}function B(R){const A=i.get(R);if(A.__webglInit===void 0)return;const j=R.source,ie=h.get(j);if(ie){const ee=ie[A.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(R),Object.keys(ie).length===0&&h.delete(j)}i.remove(R)}function y(R){const A=i.get(R);t.deleteTexture(A.__webglTexture);const j=R.source,ie=h.get(j);delete ie[A.__cacheKey],s.memory.textures--}function C(R){const A=R.texture,j=i.get(R),ie=i.get(A);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),s.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(j.__webglFramebuffer[ee]))for(let re=0;re<j.__webglFramebuffer[ee].length;re++)t.deleteFramebuffer(j.__webglFramebuffer[ee][re]);else t.deleteFramebuffer(j.__webglFramebuffer[ee]);j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer[ee])}else{if(Array.isArray(j.__webglFramebuffer))for(let ee=0;ee<j.__webglFramebuffer.length;ee++)t.deleteFramebuffer(j.__webglFramebuffer[ee]);else t.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&t.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ee=0;ee<j.__webglColorRenderbuffer.length;ee++)j.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(j.__webglColorRenderbuffer[ee]);j.__webglDepthRenderbuffer&&t.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ee=0,re=A.length;ee<re;ee++){const he=i.get(A[ee]);he.__webglTexture&&(t.deleteTexture(he.__webglTexture),s.memory.textures--),i.remove(A[ee])}i.remove(A),i.remove(R)}let k=0;function z(){k=0}function N(){const R=k;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),k+=1,R}function G(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function U(R,A){const j=i.get(R);if(R.isVideoTexture&&Oe(R),R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){const ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(j,R,A);return}}n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+A)}function Z(R,A){const j=i.get(R);if(R.version>0&&j.__version!==R.version){K(j,R,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+A)}function I(R,A){const j=i.get(R);if(R.version>0&&j.__version!==R.version){K(j,R,A);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+A)}function O(R,A){const j=i.get(R);if(R.version>0&&j.__version!==R.version){ne(j,R,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+A)}const H={[nd]:t.REPEAT,[Wn]:t.CLAMP_TO_EDGE,[id]:t.MIRRORED_REPEAT},X={[Qt]:t.NEAREST,[tp]:t.NEAREST_MIPMAP_NEAREST,[os]:t.NEAREST_MIPMAP_LINEAR,[sn]:t.LINEAR,[zu]:t.LINEAR_MIPMAP_NEAREST,[Sr]:t.LINEAR_MIPMAP_LINEAR},J={[iS]:t.NEVER,[uS]:t.ALWAYS,[rS]:t.LESS,[Ev]:t.LEQUAL,[oS]:t.EQUAL,[lS]:t.GEQUAL,[sS]:t.GREATER,[aS]:t.NOTEQUAL};function ge(R,A,j){if(A.type===vi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===sn||A.magFilter===zu||A.magFilter===os||A.magFilter===Sr||A.minFilter===sn||A.minFilter===zu||A.minFilter===os||A.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),j?(t.texParameteri(R,t.TEXTURE_WRAP_S,H[A.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,H[A.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,H[A.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,X[A.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,X[A.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(A.wrapS!==Wn||A.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,w(A.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==Qt&&A.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,J[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Qt||A.minFilter!==os&&A.minFilter!==Sr||A.type===vi&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Us&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(t.texParameterf(R,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function $(R,A){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",T));const ie=A.source;let ee=h.get(ie);ee===void 0&&(ee={},h.set(ie,ee));const re=G(A);if(re!==R.__cacheKey){ee[re]===void 0&&(ee[re]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,j=!0),ee[re].usedTimes++;const he=ee[R.__cacheKey];he!==void 0&&(ee[R.__cacheKey].usedTimes--,he.usedTimes===0&&y(A)),R.__cacheKey=re,R.__webglTexture=ee[re].texture}return j}function K(R,A,j){let ie=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ie=t.TEXTURE_3D);const ee=$(R,A),re=A.source;n.bindTexture(ie,R.__webglTexture,t.TEXTURE0+j);const he=i.get(re);if(re.version!==he.__version||ee===!0){n.activeTexture(t.TEXTURE0+j);const ue=ot.getPrimaries(ot.workingColorSpace),fe=A.colorSpace===Pn?null:ot.getPrimaries(A.colorSpace),Se=A.colorSpace===Pn||ue===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Le=d(A)&&p(A.image)===!1;let te=x(A.image,Le,!1,r.maxTextureSize);te=Me(A,te);const qe=p(te)||a,Ie=o.convert(A.format,A.colorSpace);let Re=o.convert(A.type),Ee=E(A.internalFormat,Ie,Re,A.colorSpace,A.isVideoTexture);ge(ie,A,qe);let se;const ke=A.mipmaps,Je=a&&A.isVideoTexture!==!0&&Ee!==yv,et=he.__version===void 0||ee===!0,Ve=re.dataReady,it=M(A,te,qe);if(A.isDepthTexture)Ee=t.DEPTH_COMPONENT,a?A.type===vi?Ee=t.DEPTH_COMPONENT32F:A.type===Bi?Ee=t.DEPTH_COMPONENT24:A.type===Ar?Ee=t.DEPTH24_STENCIL8:Ee=t.DEPTH_COMPONENT16:A.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Cr&&Ee===t.DEPTH_COMPONENT&&A.type!==xf&&A.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Bi,Re=o.convert(A.type)),A.format===Uo&&Ee===t.DEPTH_COMPONENT&&(Ee=t.DEPTH_STENCIL,A.type!==Ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Ar,Re=o.convert(A.type))),et&&(Je?n.texStorage2D(t.TEXTURE_2D,1,Ee,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Ee,te.width,te.height,0,Ie,Re,null));else if(A.isDataTexture)if(ke.length>0&&qe){Je&&et&&n.texStorage2D(t.TEXTURE_2D,it,Ee,ke[0].width,ke[0].height);for(let L=0,ae=ke.length;L<ae;L++)se=ke[L],Je?Ve&&n.texSubImage2D(t.TEXTURE_2D,L,0,0,se.width,se.height,Ie,Re,se.data):n.texImage2D(t.TEXTURE_2D,L,Ee,se.width,se.height,0,Ie,Re,se.data);A.generateMipmaps=!1}else Je?(et&&n.texStorage2D(t.TEXTURE_2D,it,Ee,te.width,te.height),Ve&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,te.width,te.height,Ie,Re,te.data)):n.texImage2D(t.TEXTURE_2D,0,Ee,te.width,te.height,0,Ie,Re,te.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Je&&et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,it,Ee,ke[0].width,ke[0].height,te.depth);for(let L=0,ae=ke.length;L<ae;L++)se=ke[L],A.format!==$n?Ie!==null?Je?Ve&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,L,0,0,0,se.width,se.height,te.depth,Ie,se.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,L,Ee,se.width,se.height,te.depth,0,se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?Ve&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,L,0,0,0,se.width,se.height,te.depth,Ie,Re,se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,L,Ee,se.width,se.height,te.depth,0,Ie,Re,se.data)}else{Je&&et&&n.texStorage2D(t.TEXTURE_2D,it,Ee,ke[0].width,ke[0].height);for(let L=0,ae=ke.length;L<ae;L++)se=ke[L],A.format!==$n?Ie!==null?Je?Ve&&n.compressedTexSubImage2D(t.TEXTURE_2D,L,0,0,se.width,se.height,Ie,se.data):n.compressedTexImage2D(t.TEXTURE_2D,L,Ee,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?Ve&&n.texSubImage2D(t.TEXTURE_2D,L,0,0,se.width,se.height,Ie,Re,se.data):n.texImage2D(t.TEXTURE_2D,L,Ee,se.width,se.height,0,Ie,Re,se.data)}else if(A.isDataArrayTexture)Je?(et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,it,Ee,te.width,te.height,te.depth),Ve&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Ie,Re,te.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,te.width,te.height,te.depth,0,Ie,Re,te.data);else if(A.isData3DTexture)Je?(et&&n.texStorage3D(t.TEXTURE_3D,it,Ee,te.width,te.height,te.depth),Ve&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Ie,Re,te.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,te.width,te.height,te.depth,0,Ie,Re,te.data);else if(A.isFramebufferTexture){if(et)if(Je)n.texStorage2D(t.TEXTURE_2D,it,Ee,te.width,te.height);else{let L=te.width,ae=te.height;for(let le=0;le<it;le++)n.texImage2D(t.TEXTURE_2D,le,Ee,L,ae,0,Ie,Re,null),L>>=1,ae>>=1}}else if(ke.length>0&&qe){Je&&et&&n.texStorage2D(t.TEXTURE_2D,it,Ee,ke[0].width,ke[0].height);for(let L=0,ae=ke.length;L<ae;L++)se=ke[L],Je?Ve&&n.texSubImage2D(t.TEXTURE_2D,L,0,0,Ie,Re,se):n.texImage2D(t.TEXTURE_2D,L,Ee,Ie,Re,se);A.generateMipmaps=!1}else Je?(et&&n.texStorage2D(t.TEXTURE_2D,it,Ee,te.width,te.height),Ve&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ie,Re,te)):n.texImage2D(t.TEXTURE_2D,0,Ee,Ie,Re,te);m(A,qe)&&v(ie),he.__version=re.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function ne(R,A,j){if(A.image.length!==6)return;const ie=$(R,A),ee=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+j);const re=i.get(ee);if(ee.version!==re.__version||ie===!0){n.activeTexture(t.TEXTURE0+j);const he=ot.getPrimaries(ot.workingColorSpace),ue=A.colorSpace===Pn?null:ot.getPrimaries(A.colorSpace),fe=A.colorSpace===Pn||he===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Se=A.isCompressedTexture||A.image[0].isCompressedTexture,Le=A.image[0]&&A.image[0].isDataTexture,te=[];for(let L=0;L<6;L++)!Se&&!Le?te[L]=x(A.image[L],!1,!0,r.maxCubemapSize):te[L]=Le?A.image[L].image:A.image[L],te[L]=Me(A,te[L]);const qe=te[0],Ie=p(qe)||a,Re=o.convert(A.format,A.colorSpace),Ee=o.convert(A.type),se=E(A.internalFormat,Re,Ee,A.colorSpace),ke=a&&A.isVideoTexture!==!0,Je=re.__version===void 0||ie===!0,et=ee.dataReady;let Ve=M(A,qe,Ie);ge(t.TEXTURE_CUBE_MAP,A,Ie);let it;if(Se){ke&&Je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ve,se,qe.width,qe.height);for(let L=0;L<6;L++){it=te[L].mipmaps;for(let ae=0;ae<it.length;ae++){const le=it[ae];A.format!==$n?Re!==null?ke?et&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ae,0,0,le.width,le.height,Re,le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ae,se,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?et&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ae,0,0,le.width,le.height,Re,Ee,le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ae,se,le.width,le.height,0,Re,Ee,le.data)}}}else{it=A.mipmaps,ke&&Je&&(it.length>0&&Ve++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Ve,se,te[0].width,te[0].height));for(let L=0;L<6;L++)if(Le){ke?et&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,te[L].width,te[L].height,Re,Ee,te[L].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,se,te[L].width,te[L].height,0,Re,Ee,te[L].data);for(let ae=0;ae<it.length;ae++){const we=it[ae].image[L].image;ke?et&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ae+1,0,0,we.width,we.height,Re,Ee,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ae+1,se,we.width,we.height,0,Re,Ee,we.data)}}else{ke?et&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,Re,Ee,te[L]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,se,Re,Ee,te[L]);for(let ae=0;ae<it.length;ae++){const le=it[ae];ke?et&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ae+1,0,0,Re,Ee,le.image[L]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ae+1,se,Re,Ee,le.image[L])}}}m(A,Ie)&&v(t.TEXTURE_CUBE_MAP),re.__version=ee.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function de(R,A,j,ie,ee,re){const he=o.convert(j.format,j.colorSpace),ue=o.convert(j.type),fe=E(j.internalFormat,he,ue,j.colorSpace);if(!i.get(A).__hasExternalTextures){const Le=Math.max(1,A.width>>re),te=Math.max(1,A.height>>re);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,re,fe,Le,te,A.depth,0,he,ue,null):n.texImage2D(ee,re,fe,Le,te,0,he,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),xe(A)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,i.get(j).__webglTexture,0,Ae(A)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,i.get(j).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ye(R,A,j){if(t.bindRenderbuffer(t.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let ie=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(j||xe(A)){const ee=A.depthTexture;ee&&ee.isDepthTexture&&(ee.type===vi?ie=t.DEPTH_COMPONENT32F:ee.type===Bi&&(ie=t.DEPTH_COMPONENT24));const re=Ae(A);xe(A)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,ie,A.width,A.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,re,ie,A.width,A.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,A.width,A.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){const ie=Ae(A);j&&xe(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,A.width,A.height):xe(A)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const ie=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ee=0;ee<ie.length;ee++){const re=ie[ee],he=o.convert(re.format,re.colorSpace),ue=o.convert(re.type),fe=E(re.internalFormat,he,ue,re.colorSpace),Se=Ae(A);j&&xe(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,fe,A.width,A.height):xe(A)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Se,fe,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,fe,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ve(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),U(A.depthTexture,0);const ie=i.get(A.depthTexture).__webglTexture,ee=Ae(A);if(A.depthTexture.format===Cr)xe(A)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(A.depthTexture.format===Uo)xe(A)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ze(R){const A=i.get(R),j=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");ve(A.__webglFramebuffer,R)}else if(j){A.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[ie]),A.__webglDepthbuffer[ie]=t.createRenderbuffer(),ye(A.__webglDepthbuffer[ie],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=t.createRenderbuffer(),ye(A.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(R,A,j){const ie=i.get(R);A!==void 0&&de(ie.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&ze(R)}function D(R){const A=R.texture,j=i.get(R),ie=i.get(A);R.addEventListener("dispose",P),R.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=A.version,s.memory.textures++);const ee=R.isWebGLCubeRenderTarget===!0,re=R.isWebGLMultipleRenderTargets===!0,he=p(R)||a;if(ee){j.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer[ue]=[];for(let fe=0;fe<A.mipmaps.length;fe++)j.__webglFramebuffer[ue][fe]=t.createFramebuffer()}else j.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer=[];for(let ue=0;ue<A.mipmaps.length;ue++)j.__webglFramebuffer[ue]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(re)if(r.drawBuffers){const ue=R.texture;for(let fe=0,Se=ue.length;fe<Se;fe++){const Le=i.get(ue[fe]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&xe(R)===!1){const ue=re?A:[A];j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let fe=0;fe<ue.length;fe++){const Se=ue[fe];j.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[fe]);const Le=o.convert(Se.format,Se.colorSpace),te=o.convert(Se.type),qe=E(Se.internalFormat,Le,te,Se.colorSpace,R.isXRRenderTarget===!0),Ie=Ae(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,qe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,j.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),ye(j.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),ge(t.TEXTURE_CUBE_MAP,A,he);for(let ue=0;ue<6;ue++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let fe=0;fe<A.mipmaps.length;fe++)de(j.__webglFramebuffer[ue][fe],R,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,fe);else de(j.__webglFramebuffer[ue],R,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(A,he)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){const ue=R.texture;for(let fe=0,Se=ue.length;fe<Se;fe++){const Le=ue[fe],te=i.get(Le);n.bindTexture(t.TEXTURE_2D,te.__webglTexture),ge(t.TEXTURE_2D,Le,he),de(j.__webglFramebuffer,R,Le,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(Le,he)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ue=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ue,ie.__webglTexture),ge(ue,A,he),a&&A.mipmaps&&A.mipmaps.length>0)for(let fe=0;fe<A.mipmaps.length;fe++)de(j.__webglFramebuffer[fe],R,A,t.COLOR_ATTACHMENT0,ue,fe);else de(j.__webglFramebuffer,R,A,t.COLOR_ATTACHMENT0,ue,0);m(A,he)&&v(ue),n.unbindTexture()}R.depthBuffer&&ze(R)}function nt(R){const A=p(R)||a,j=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ie=0,ee=j.length;ie<ee;ie++){const re=j[ie];if(m(re,A)){const he=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ue=i.get(re).__webglTexture;n.bindTexture(he,ue),v(he),n.unbindTexture()}}}function _e(R){if(a&&R.samples>0&&xe(R)===!1){const A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],j=R.width,ie=R.height;let ee=t.COLOR_BUFFER_BIT;const re=[],he=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(R),fe=R.isWebGLMultipleRenderTargets===!0;if(fe)for(let Se=0;Se<A.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Se=0;Se<A.length;Se++){re.push(t.COLOR_ATTACHMENT0+Se),R.depthBuffer&&re.push(he);const Le=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Le===!1&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),fe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[Se]),Le===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[he]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[he])),fe){const te=i.get(A[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,j,ie,0,0,j,ie,ee,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let Se=0;Se<A.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,ue.__webglColorRenderbuffer[Se]);const Le=i.get(A[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,Le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Ae(R){return Math.min(r.maxSamples,R.samples)}function xe(R){const A=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Oe(R){const A=s.render.frame;c.get(R)!==A&&(c.set(R,A),R.update())}function Me(R,A){const j=R.colorSpace,ie=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===rd||j!==Ei&&j!==Pn&&(ot.getTransfer(j)===ut?a===!1?e.has("EXT_sRGB")===!0&&ie===$n?(R.format=rd,R.minFilter=sn,R.generateMipmaps=!1):A=Mv.sRGBToLinear(A):(ie!==$n||ee!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),A}this.allocateTextureUnit=N,this.resetTextureUnits=z,this.setTexture2D=U,this.setTexture2DArray=Z,this.setTexture3D=I,this.setTextureCube=O,this.rebindTextures=be,this.setupRenderTarget=D,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=de,this.useMultisampledRTT=xe}function dT(t,e,n){const i=n.isWebGL2;function r(o,s=Pn){let a;const l=ot.getTransfer(s);if(o===Wi)return t.UNSIGNED_BYTE;if(o===pv)return t.UNSIGNED_SHORT_4_4_4_4;if(o===mv)return t.UNSIGNED_SHORT_5_5_5_1;if(o===jx)return t.BYTE;if(o===Xx)return t.SHORT;if(o===xf)return t.UNSIGNED_SHORT;if(o===hv)return t.INT;if(o===Bi)return t.UNSIGNED_INT;if(o===vi)return t.FLOAT;if(o===Us)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===Yx)return t.ALPHA;if(o===$n)return t.RGBA;if(o===qx)return t.LUMINANCE;if(o===Kx)return t.LUMINANCE_ALPHA;if(o===Cr)return t.DEPTH_COMPONENT;if(o===Uo)return t.DEPTH_STENCIL;if(o===rd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===Zx)return t.RED;if(o===gv)return t.RED_INTEGER;if(o===Qx)return t.RG;if(o===vv)return t.RG_INTEGER;if(o===_v)return t.RGBA_INTEGER;if(o===Vu||o===Hu||o===Gu||o===Wu)if(l===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Vu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Wu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Vu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Hu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Gu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Wu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===np||o===ip||o===rp||o===op)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===np)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===ip)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===rp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===op)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===yv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===sp||o===ap)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===sp)return l===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===ap)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===lp||o===up||o===cp||o===dp||o===fp||o===hp||o===pp||o===mp||o===gp||o===vp||o===_p||o===yp||o===xp||o===Sp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===lp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===up)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===cp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===dp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===fp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===hp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===pp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===mp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===gp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===vp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===_p)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===yp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===xp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Sp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===$u||o===Ep||o===wp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===$u)return l===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Ep)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===wp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Jx||o===Mp||o===Tp||o===Ap)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===$u)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Mp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Tp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Ap)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Ar?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class fT extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ss extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hT={type:"move"};class gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),d=this._getHandJoint(u,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),g=.02,_=.005;u.inputState.pinching&&h>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ss;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const pT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new dn,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new er({extensions:{fragDepth:!0},vertexShader:pT,fragmentShader:mT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ti(new lu(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class vT extends Wo{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,g=null,_=null;const x=new gT,p=n.getContextAttributes();let d=null,m=null;const v=[],E=[],M=new Xe;let w=null;const T=new xn;T.layers.enable(1),T.viewport=new dt;const P=new xn;P.layers.enable(2),P.viewport=new dt;const B=[T,P],y=new fT;y.layers.enable(1),y.layers.enable(2);let C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=v[$];return K===void 0&&(K=new gc,v[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=v[$];return K===void 0&&(K=new gc,v[$]=K),K.getGripSpace()},this.getHand=function($){let K=v[$];return K===void 0&&(K=new gc,v[$]=K),K.getHandSpace()};function z($){const K=E.indexOf($.inputSource);if(K===-1)return;const ne=v[K];ne!==void 0&&(ne.update($.inputSource,$.frame,u||s),ne.dispatchEvent({type:$.type,data:$.inputSource}))}function N(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",G);for(let $=0;$<v.length;$++){const K=E[$];K!==null&&(E[$]=null,v[$].disconnect(K))}C=null,k=null,x.reset(),e.setRenderTarget(d),g=null,h=null,f=null,r=null,m=null,ge.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",N),r.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};g=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),m=new Lr(g.framebufferWidth,g.framebufferHeight,{format:$n,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let K=null,ne=null,de=null;p.depth&&(de=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=p.stencil?Uo:Cr,ne=p.stencil?Ar:Bi);const ye={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:o};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(ye),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),m=new Lr(h.textureWidth,h.textureHeight,{format:$n,type:Wi,depthTexture:new Ov(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const ve=e.properties.get(m);ve.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),ge.setContext(r),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G($){for(let K=0;K<$.removed.length;K++){const ne=$.removed[K],de=E.indexOf(ne);de>=0&&(E[de]=null,v[de].disconnect(ne))}for(let K=0;K<$.added.length;K++){const ne=$.added[K];let de=E.indexOf(ne);if(de===-1){for(let ve=0;ve<v.length;ve++)if(ve>=E.length){E.push(ne),de=ve;break}else if(E[ve]===null){E[ve]=ne,de=ve;break}if(de===-1)break}const ye=v[de];ye&&ye.connect(ne)}}const U=new V,Z=new V;function I($,K,ne){U.setFromMatrixPosition(K.matrixWorld),Z.setFromMatrixPosition(ne.matrixWorld);const de=U.distanceTo(Z),ye=K.projectionMatrix.elements,ve=ne.projectionMatrix.elements,ze=ye[14]/(ye[10]-1),be=ye[14]/(ye[10]+1),D=(ye[9]+1)/ye[5],nt=(ye[9]-1)/ye[5],_e=(ye[8]-1)/ye[0],Ae=(ve[8]+1)/ve[0],xe=ze*_e,Oe=ze*Ae,Me=de/(-_e+Ae),R=Me*-_e;K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(R),$.translateZ(Me),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const A=ze+Me,j=be+Me,ie=xe-R,ee=Oe+(de-R),re=D*be/j*A,he=nt*be/j*A;$.projectionMatrix.makePerspective(ie,ee,re,he,A,j),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function O($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;x.texture!==null&&($.near=x.depthNear,$.far=x.depthFar),y.near=P.near=T.near=$.near,y.far=P.far=T.far=$.far,(C!==y.near||k!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,k=y.far,T.near=C,T.far=k,P.near=C,P.far=k,T.updateProjectionMatrix(),P.updateProjectionMatrix(),$.updateProjectionMatrix());const K=$.parent,ne=y.cameras;O(y,K);for(let de=0;de<ne.length;de++)O(ne[de],K);ne.length===2?I(y,T,P):y.projectionMatrix.copy(T.projectionMatrix),H($,y,K)};function H($,K,ne){ne===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(ne.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=od*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null};let X=null;function J($,K){if(c=K.getViewerPose(u||s),_=K,c!==null){const ne=c.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let de=!1;ne.length!==y.cameras.length&&(y.cameras.length=0,de=!0);for(let ve=0;ve<ne.length;ve++){const ze=ne[ve];let be=null;if(g!==null)be=g.getViewport(ze);else{const nt=f.getViewSubImage(h,ze);be=nt.viewport,ve===0&&(e.setRenderTargetTextures(m,nt.colorTexture,h.ignoreDepthValues?void 0:nt.depthStencilTexture),e.setRenderTarget(m))}let D=B[ve];D===void 0&&(D=new xn,D.layers.enable(ve),D.viewport=new dt,B[ve]=D),D.matrix.fromArray(ze.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(ze.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(be.x,be.y,be.width,be.height),ve===0&&(y.matrix.copy(D.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),de===!0&&y.cameras.push(D)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const ve=f.getDepthInformation(ne[0]);ve&&ve.isValid&&ve.texture&&x.init(e,ve,r.renderState)}}for(let ne=0;ne<v.length;ne++){const de=E[ne],ye=v[ne];de!==null&&ye!==void 0&&ye.update(de,K,u||s)}x.render(e,y),X&&X($,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const ge=new Fv;ge.setAnimationLoop(J),this.setAnimationLoop=function($){X=$},this.dispose=function(){}}}function _T(t,e){function n(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Dv(t)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,m,v,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(p,d):d.isMeshToonMaterial?(o(p,d),f(p,d)):d.isMeshPhongMaterial?(o(p,d),c(p,d)):d.isMeshStandardMaterial?(o(p,d),h(p,d),d.isMeshPhysicalMaterial&&g(p,d,E)):d.isMeshMatcapMaterial?(o(p,d),_(p,d)):d.isMeshDepthMaterial?o(p,d):d.isMeshDistanceMaterial?(o(p,d),x(p,d)):d.isMeshNormalMaterial?o(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,m,v):d.isSpriteMaterial?u(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,n(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===cn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,n(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===cn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,n(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,n(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const m=e.get(d).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*v,n(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,p.aoMapTransform))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,m,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*m,p.scale.value=v*.5,d.map&&(p.map.value=d.map,n(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function g(p,d,m){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===cn&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){const m=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(m.matrixWorld),p.nearDistance.value=m.shadow.camera.near,p.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yT(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,v){const E=v.program;i.uniformBlockBinding(m,E)}function u(m,v){let E=r[m.id];E===void 0&&(_(m),E=c(m),r[m.id]=E,m.addEventListener("dispose",p));const M=v.program;i.updateUBOMapping(m,M);const w=e.render.frame;o[m.id]!==w&&(h(m),o[m.id]=w)}function c(m){const v=f();m.__bindingPointIndex=v;const E=t.createBuffer(),M=m.__size,w=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,M,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,E),E}function f(){for(let m=0;m<a;m++)if(s.indexOf(m)===-1)return s.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const v=r[m.id],E=m.uniforms,M=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let w=0,T=E.length;w<T;w++){const P=Array.isArray(E[w])?E[w]:[E[w]];for(let B=0,y=P.length;B<y;B++){const C=P[B];if(g(C,w,B,M)===!0){const k=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let N=0;for(let G=0;G<z.length;G++){const U=z[G],Z=x(U);typeof U=="number"||typeof U=="boolean"?(C.__data[0]=U,t.bufferSubData(t.UNIFORM_BUFFER,k+N,C.__data)):U.isMatrix3?(C.__data[0]=U.elements[0],C.__data[1]=U.elements[1],C.__data[2]=U.elements[2],C.__data[3]=0,C.__data[4]=U.elements[3],C.__data[5]=U.elements[4],C.__data[6]=U.elements[5],C.__data[7]=0,C.__data[8]=U.elements[6],C.__data[9]=U.elements[7],C.__data[10]=U.elements[8],C.__data[11]=0):(U.toArray(C.__data,N),N+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(m,v,E,M){const w=m.value,T=v+"_"+E;if(M[T]===void 0)return typeof w=="number"||typeof w=="boolean"?M[T]=w:M[T]=w.clone(),!0;{const P=M[T];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return M[T]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function _(m){const v=m.uniforms;let E=0;const M=16;for(let T=0,P=v.length;T<P;T++){const B=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,C=B.length;y<C;y++){const k=B[y],z=Array.isArray(k.value)?k.value:[k.value];for(let N=0,G=z.length;N<G;N++){const U=z[N],Z=x(U),I=E%M;I!==0&&M-I<Z.boundary&&(E+=M-I),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=Z.storage}}}const w=E%M;return w>0&&(E+=M-w),m.__size=E,m.__cache={},this}function x(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function p(m){const v=m.target;v.removeEventListener("dispose",p);const E=s.indexOf(v.__bindingPointIndex);s.splice(E,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function d(){for(const m in r)t.deleteBuffer(r[m]);s=[],r={},o={}}return{bind:l,update:u,dispose:d}}class Gv{constructor(e={}){const{canvas:n=dS(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=s;const g=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const d=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=Gi,this.toneMappingExposure=1;const v=this;let E=!1,M=0,w=0,T=null,P=-1,B=null;const y=new dt,C=new dt;let k=null;const z=new Ze(0);let N=0,G=n.width,U=n.height,Z=1,I=null,O=null;const H=new dt(0,0,G,U),X=new dt(0,0,G,U);let J=!1;const ge=new Ef;let $=!1,K=!1,ne=null;const de=new Et,ye=new Xe,ve=new V,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return T===null?Z:1}let D=i;function nt(b,W){for(let q=0;q<b.length;q++){const Q=b[q],Y=n.getContext(Q,W);if(Y!==null)return Y}return null}try{const b={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_f}`),n.addEventListener("webglcontextlost",it,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",ae,!1),D===null){const W=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&W.shift(),D=nt(W,b),D===null)throw nt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let _e,Ae,xe,Oe,Me,R,A,j,ie,ee,re,he,ue,fe,Se,Le,te,qe,Ie,Re,Ee,se,ke,Je;function et(){_e=new AM(D),Ae=new yM(D,_e,e),_e.init(Ae),se=new dT(D,_e,Ae),xe=new uT(D,_e,Ae),Oe=new RM(D),Me=new q1,R=new cT(D,_e,xe,Me,Ae,se,Oe),A=new SM(v),j=new TM(v),ie=new FS(D,Ae),ke=new vM(D,_e,ie,Ae),ee=new CM(D,ie,Oe,ke),re=new DM(D,ee,ie,Oe),Ie=new NM(D,Ae,R),Le=new xM(Me),he=new Y1(v,A,j,_e,Ae,ke,Le),ue=new _T(v,Me),fe=new Z1,Se=new iT(_e,Ae),qe=new gM(v,A,j,xe,re,h,l),te=new lT(v,re,Ae),Je=new yT(D,Oe,Ae,xe),Re=new _M(D,_e,Oe,Ae),Ee=new bM(D,_e,Oe,Ae),Oe.programs=he.programs,v.capabilities=Ae,v.extensions=_e,v.properties=Me,v.renderLists=fe,v.shadowMap=te,v.state=xe,v.info=Oe}et();const Ve=new vT(v,D);this.xr=Ve,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=_e.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=_e.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(G,U,!1))},this.getSize=function(b){return b.set(G,U)},this.setSize=function(b,W,q=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,U=W,n.width=Math.floor(b*Z),n.height=Math.floor(W*Z),q===!0&&(n.style.width=b+"px",n.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(G*Z,U*Z).floor()},this.setDrawingBufferSize=function(b,W,q){G=b,U=W,Z=q,n.width=Math.floor(b*q),n.height=Math.floor(W*q),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(H)},this.setViewport=function(b,W,q,Q){b.isVector4?H.set(b.x,b.y,b.z,b.w):H.set(b,W,q,Q),xe.viewport(y.copy(H).multiplyScalar(Z).floor())},this.getScissor=function(b){return b.copy(X)},this.setScissor=function(b,W,q,Q){b.isVector4?X.set(b.x,b.y,b.z,b.w):X.set(b,W,q,Q),xe.scissor(C.copy(X).multiplyScalar(Z).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(b){xe.setScissorTest(J=b)},this.setOpaqueSort=function(b){I=b},this.setTransparentSort=function(b){O=b},this.getClearColor=function(b){return b.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(b=!0,W=!0,q=!0){let Q=0;if(b){let Y=!1;if(T!==null){const pe=T.texture.format;Y=pe===_v||pe===vv||pe===gv}if(Y){const pe=T.texture.type,Ce=pe===Wi||pe===Bi||pe===xf||pe===Ar||pe===pv||pe===mv,Ne=qe.getClearColor(),Fe=qe.getClearAlpha(),We=Ne.r,Be=Ne.g,He=Ne.b;Ce?(g[0]=We,g[1]=Be,g[2]=He,g[3]=Fe,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=We,_[1]=Be,_[2]=He,_[3]=Fe,D.clearBufferiv(D.COLOR,0,_))}else Q|=D.COLOR_BUFFER_BIT}W&&(Q|=D.DEPTH_BUFFER_BIT),q&&(Q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",it,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),fe.dispose(),Se.dispose(),Me.dispose(),A.dispose(),j.dispose(),re.dispose(),ke.dispose(),Je.dispose(),he.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",qt),Ve.removeEventListener("sessionend",Te),ne&&(ne.dispose(),ne=null),Ue.stop()};function it(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=Oe.autoReset,W=te.enabled,q=te.autoUpdate,Q=te.needsUpdate,Y=te.type;et(),Oe.autoReset=b,te.enabled=W,te.autoUpdate=q,te.needsUpdate=Q,te.type=Y}function ae(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function le(b){const W=b.target;W.removeEventListener("dispose",le),we(W)}function we(b){Pe(b),Me.remove(b)}function Pe(b){const W=Me.get(b).programs;W!==void 0&&(W.forEach(function(q){he.releaseProgram(q)}),b.isShaderMaterial&&he.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,q,Q,Y,pe){W===null&&(W=ze);const Ce=Y.isMesh&&Y.matrixWorld.determinant()<0,Ne=sx(b,W,q,Q,Y);xe.setMaterial(Q,Ce);let Fe=q.index,We=1;if(Q.wireframe===!0){if(Fe=ee.getWireframeAttribute(q),Fe===void 0)return;We=2}const Be=q.drawRange,He=q.attributes.position;let xt=Be.start*We,mn=(Be.start+Be.count)*We;pe!==null&&(xt=Math.max(xt,pe.start*We),mn=Math.min(mn,(pe.start+pe.count)*We)),Fe!==null?(xt=Math.max(xt,0),mn=Math.min(mn,Fe.count)):He!=null&&(xt=Math.max(xt,0),mn=Math.min(mn,He.count));const Nt=mn-xt;if(Nt<0||Nt===1/0)return;ke.setup(Y,Q,Ne,q,Fe);let ai,ht=Re;if(Fe!==null&&(ai=ie.get(Fe),ht=Ee,ht.setIndex(ai)),Y.isMesh)Q.wireframe===!0?(xe.setLineWidth(Q.wireframeLinewidth*be()),ht.setMode(D.LINES)):ht.setMode(D.TRIANGLES);else if(Y.isLine){let $e=Q.linewidth;$e===void 0&&($e=1),xe.setLineWidth($e*be()),Y.isLineSegments?ht.setMode(D.LINES):Y.isLineLoop?ht.setMode(D.LINE_LOOP):ht.setMode(D.LINE_STRIP)}else Y.isPoints?ht.setMode(D.POINTS):Y.isSprite&&ht.setMode(D.TRIANGLES);if(Y.isBatchedMesh)ht.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)ht.renderInstances(xt,Nt,Y.count);else if(q.isInstancedBufferGeometry){const $e=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Fu=Math.min(q.instanceCount,$e);ht.renderInstances(xt,Nt,Fu)}else ht.render(xt,Nt)};function tt(b,W,q){b.transparent===!0&&b.side===gi&&b.forceSinglePass===!1?(b.side=cn,b.needsUpdate=!0,pa(b,W,q),b.side=Ji,b.needsUpdate=!0,pa(b,W,q),b.side=gi):pa(b,W,q)}this.compile=function(b,W,q=null){q===null&&(q=b),p=Se.get(q),p.init(),m.push(p),q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),b!==q&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights(v._useLegacyLights);const Q=new Set;return b.traverse(function(Y){const pe=Y.material;if(pe)if(Array.isArray(pe))for(let Ce=0;Ce<pe.length;Ce++){const Ne=pe[Ce];tt(Ne,q,Y),Q.add(Ne)}else tt(pe,q,Y),Q.add(pe)}),m.pop(),p=null,Q},this.compileAsync=function(b,W,q=null){const Q=this.compile(b,W,q);return new Promise(Y=>{function pe(){if(Q.forEach(function(Ce){Me.get(Ce).currentProgram.isReady()&&Q.delete(Ce)}),Q.size===0){Y(b);return}setTimeout(pe,10)}_e.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let st=null;function Tt(b){st&&st(b)}function qt(){Ue.stop()}function Te(){Ue.start()}const Ue=new Fv;Ue.setAnimationLoop(Tt),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(b){st=b,Ve.setAnimationLoop(b),b===null?Ue.stop():Ue.start()},Ve.addEventListener("sessionstart",qt),Ve.addEventListener("sessionend",Te),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(W),W=Ve.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,W,T),p=Se.get(b,m.length),p.init(),m.push(p),de.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ge.setFromProjectionMatrix(de),K=this.localClippingEnabled,$=Le.init(this.clippingPlanes,K),x=fe.get(b,d.length),x.init(),d.push(x),vt(b,W,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(I,O),this.info.render.frame++,$===!0&&Le.beginShadows();const q=p.state.shadowsArray;if(te.render(q,b,W),$===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1)&&qe.render(x,b),p.setupLights(v._useLegacyLights),W.isArrayCamera){const Q=W.cameras;for(let Y=0,pe=Q.length;Y<pe;Y++){const Ce=Q[Y];si(x,b,Ce,Ce.viewport)}}else si(x,b,W);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(v,b,W),ke.resetDefaultState(),P=-1,B=null,m.pop(),m.length>0?p=m[m.length-1]:p=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function vt(b,W,q,Q){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ge.intersectsSprite(b)){Q&&ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(de);const Ce=re.update(b),Ne=b.material;Ne.visible&&x.push(b,Ce,Ne,q,ve.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ge.intersectsObject(b))){const Ce=re.update(b),Ne=b.material;if(Q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ve.copy(b.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ve.copy(Ce.boundingSphere.center)),ve.applyMatrix4(b.matrixWorld).applyMatrix4(de)),Array.isArray(Ne)){const Fe=Ce.groups;for(let We=0,Be=Fe.length;We<Be;We++){const He=Fe[We],xt=Ne[He.materialIndex];xt&&xt.visible&&x.push(b,Ce,xt,q,ve.z,He)}}else Ne.visible&&x.push(b,Ce,Ne,q,ve.z,null)}}const pe=b.children;for(let Ce=0,Ne=pe.length;Ce<Ne;Ce++)vt(pe[Ce],W,q,Q)}function si(b,W,q,Q){const Y=b.opaque,pe=b.transmissive,Ce=b.transparent;p.setupLightsView(q),$===!0&&Le.setGlobalState(v.clippingPlanes,q),pe.length>0&&Gh(Y,pe,W,q),Q&&xe.viewport(y.copy(Q)),Y.length>0&&ha(Y,W,q),pe.length>0&&ha(pe,W,q),Ce.length>0&&ha(Ce,W,q),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Gh(b,W,q,Q){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const pe=Ae.isWebGL2;ne===null&&(ne=new Lr(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Us:Wi,minFilter:Sr,samples:pe?4:0})),v.getDrawingBufferSize(ye),pe?ne.setSize(ye.x,ye.y):ne.setSize(sd(ye.x),sd(ye.y));const Ce=v.getRenderTarget();v.setRenderTarget(ne),v.getClearColor(z),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();const Ne=v.toneMapping;v.toneMapping=Gi,ha(b,q,Q),R.updateMultisampleRenderTarget(ne),R.updateRenderTargetMipmap(ne);let Fe=!1;for(let We=0,Be=W.length;We<Be;We++){const He=W[We],xt=He.object,mn=He.geometry,Nt=He.material,ai=He.group;if(Nt.side===gi&&xt.layers.test(Q.layers)){const ht=Nt.side;Nt.side=cn,Nt.needsUpdate=!0,Wh(xt,q,Q,mn,Nt,ai),Nt.side=ht,Nt.needsUpdate=!0,Fe=!0}}Fe===!0&&(R.updateMultisampleRenderTarget(ne),R.updateRenderTargetMipmap(ne)),v.setRenderTarget(Ce),v.setClearColor(z,N),v.toneMapping=Ne}function ha(b,W,q){const Q=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,pe=b.length;Y<pe;Y++){const Ce=b[Y],Ne=Ce.object,Fe=Ce.geometry,We=Q===null?Ce.material:Q,Be=Ce.group;Ne.layers.test(q.layers)&&Wh(Ne,W,q,Fe,We,Be)}}function Wh(b,W,q,Q,Y,pe){b.onBeforeRender(v,W,q,Q,Y,pe),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(v,W,q,Q,b,pe),Y.transparent===!0&&Y.side===gi&&Y.forceSinglePass===!1?(Y.side=cn,Y.needsUpdate=!0,v.renderBufferDirect(q,W,Q,Y,b,pe),Y.side=Ji,Y.needsUpdate=!0,v.renderBufferDirect(q,W,Q,Y,b,pe),Y.side=gi):v.renderBufferDirect(q,W,Q,Y,b,pe),b.onAfterRender(v,W,q,Q,Y,pe)}function pa(b,W,q){W.isScene!==!0&&(W=ze);const Q=Me.get(b),Y=p.state.lights,pe=p.state.shadowsArray,Ce=Y.state.version,Ne=he.getParameters(b,Y.state,pe,W,q),Fe=he.getProgramCacheKey(Ne);let We=Q.programs;Q.environment=b.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(b.isMeshStandardMaterial?j:A).get(b.envMap||Q.environment),We===void 0&&(b.addEventListener("dispose",le),We=new Map,Q.programs=We);let Be=We.get(Fe);if(Be!==void 0){if(Q.currentProgram===Be&&Q.lightsStateVersion===Ce)return jh(b,Ne),Be}else Ne.uniforms=he.getUniforms(b),b.onBuild(q,Ne,v),b.onBeforeCompile(Ne,v),Be=he.acquireProgram(Ne,Fe),We.set(Fe,Be),Q.uniforms=Ne.uniforms;const He=Q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(He.clippingPlanes=Le.uniform),jh(b,Ne),Q.needsLights=lx(b),Q.lightsStateVersion=Ce,Q.needsLights&&(He.ambientLightColor.value=Y.state.ambient,He.lightProbe.value=Y.state.probe,He.directionalLights.value=Y.state.directional,He.directionalLightShadows.value=Y.state.directionalShadow,He.spotLights.value=Y.state.spot,He.spotLightShadows.value=Y.state.spotShadow,He.rectAreaLights.value=Y.state.rectArea,He.ltc_1.value=Y.state.rectAreaLTC1,He.ltc_2.value=Y.state.rectAreaLTC2,He.pointLights.value=Y.state.point,He.pointLightShadows.value=Y.state.pointShadow,He.hemisphereLights.value=Y.state.hemi,He.directionalShadowMap.value=Y.state.directionalShadowMap,He.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,He.spotShadowMap.value=Y.state.spotShadowMap,He.spotLightMatrix.value=Y.state.spotLightMatrix,He.spotLightMap.value=Y.state.spotLightMap,He.pointShadowMap.value=Y.state.pointShadowMap,He.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=Be,Q.uniformsList=null,Be}function $h(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=ll.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function jh(b,W){const q=Me.get(b);q.outputColorSpace=W.outputColorSpace,q.batching=W.batching,q.instancing=W.instancing,q.instancingColor=W.instancingColor,q.skinning=W.skinning,q.morphTargets=W.morphTargets,q.morphNormals=W.morphNormals,q.morphColors=W.morphColors,q.morphTargetsCount=W.morphTargetsCount,q.numClippingPlanes=W.numClippingPlanes,q.numIntersection=W.numClipIntersection,q.vertexAlphas=W.vertexAlphas,q.vertexTangents=W.vertexTangents,q.toneMapping=W.toneMapping}function sx(b,W,q,Q,Y){W.isScene!==!0&&(W=ze),R.resetTextureUnits();const pe=W.fog,Ce=Q.isMeshStandardMaterial?W.environment:null,Ne=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ei,Fe=(Q.isMeshStandardMaterial?j:A).get(Q.envMap||Ce),We=Q.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Be=!!q.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),He=!!q.morphAttributes.position,xt=!!q.morphAttributes.normal,mn=!!q.morphAttributes.color;let Nt=Gi;Q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Nt=v.toneMapping);const ai=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ht=ai!==void 0?ai.length:0,$e=Me.get(Q),Fu=p.state.lights;if($===!0&&(K===!0||b!==B)){const An=b===B&&Q.id===P;Le.setState(Q,b,An)}let _t=!1;Q.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Fu.state.version||$e.outputColorSpace!==Ne||Y.isBatchedMesh&&$e.batching===!1||!Y.isBatchedMesh&&$e.batching===!0||Y.isInstancedMesh&&$e.instancing===!1||!Y.isInstancedMesh&&$e.instancing===!0||Y.isSkinnedMesh&&$e.skinning===!1||!Y.isSkinnedMesh&&$e.skinning===!0||Y.isInstancedMesh&&$e.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&$e.instancingColor===!1&&Y.instanceColor!==null||$e.envMap!==Fe||Q.fog===!0&&$e.fog!==pe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Le.numPlanes||$e.numIntersection!==Le.numIntersection)||$e.vertexAlphas!==We||$e.vertexTangents!==Be||$e.morphTargets!==He||$e.morphNormals!==xt||$e.morphColors!==mn||$e.toneMapping!==Nt||Ae.isWebGL2===!0&&$e.morphTargetsCount!==ht)&&(_t=!0):(_t=!0,$e.__version=Q.version);let lr=$e.currentProgram;_t===!0&&(lr=pa(Q,W,Y));let Xh=!1,rs=!1,Ou=!1;const Ht=lr.getUniforms(),ur=$e.uniforms;if(xe.useProgram(lr.program)&&(Xh=!0,rs=!0,Ou=!0),Q.id!==P&&(P=Q.id,rs=!0),Xh||B!==b){Ht.setValue(D,"projectionMatrix",b.projectionMatrix),Ht.setValue(D,"viewMatrix",b.matrixWorldInverse);const An=Ht.map.cameraPosition;An!==void 0&&An.setValue(D,ve.setFromMatrixPosition(b.matrixWorld)),Ae.logarithmicDepthBuffer&&Ht.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ht.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),B!==b&&(B=b,rs=!0,Ou=!0)}if(Y.isSkinnedMesh){Ht.setOptional(D,Y,"bindMatrix"),Ht.setOptional(D,Y,"bindMatrixInverse");const An=Y.skeleton;An&&(Ae.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),Ht.setValue(D,"boneTexture",An.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Ht.setOptional(D,Y,"batchingTexture"),Ht.setValue(D,"batchingTexture",Y._matricesTexture,R));const ku=q.morphAttributes;if((ku.position!==void 0||ku.normal!==void 0||ku.color!==void 0&&Ae.isWebGL2===!0)&&Ie.update(Y,q,lr),(rs||$e.receiveShadow!==Y.receiveShadow)&&($e.receiveShadow=Y.receiveShadow,Ht.setValue(D,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(ur.envMap.value=Fe,ur.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),rs&&(Ht.setValue(D,"toneMappingExposure",v.toneMappingExposure),$e.needsLights&&ax(ur,Ou),pe&&Q.fog===!0&&ue.refreshFogUniforms(ur,pe),ue.refreshMaterialUniforms(ur,Q,Z,U,ne),ll.upload(D,$h($e),ur,R)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ll.upload(D,$h($e),ur,R),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ht.setValue(D,"center",Y.center),Ht.setValue(D,"modelViewMatrix",Y.modelViewMatrix),Ht.setValue(D,"normalMatrix",Y.normalMatrix),Ht.setValue(D,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const An=Q.uniformsGroups;for(let Bu=0,ux=An.length;Bu<ux;Bu++)if(Ae.isWebGL2){const Yh=An[Bu];Je.update(Yh,lr),Je.bind(Yh,lr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return lr}function ax(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function lx(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,W,q){Me.get(b.texture).__webglTexture=W,Me.get(b.depthTexture).__webglTexture=q;const Q=Me.get(b);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=q===void 0,Q.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,W){const q=Me.get(b);q.__webglFramebuffer=W,q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(b,W=0,q=0){T=b,M=W,w=q;let Q=!0,Y=null,pe=!1,Ce=!1;if(b){const Fe=Me.get(b);Fe.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(D.FRAMEBUFFER,null),Q=!1):Fe.__webglFramebuffer===void 0?R.setupRenderTarget(b):Fe.__hasExternalTextures&&R.rebindTextures(b,Me.get(b.texture).__webglTexture,Me.get(b.depthTexture).__webglTexture);const We=b.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ce=!0);const Be=Me.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Be[W])?Y=Be[W][q]:Y=Be[W],pe=!0):Ae.isWebGL2&&b.samples>0&&R.useMultisampledRTT(b)===!1?Y=Me.get(b).__webglMultisampledFramebuffer:Array.isArray(Be)?Y=Be[q]:Y=Be,y.copy(b.viewport),C.copy(b.scissor),k=b.scissorTest}else y.copy(H).multiplyScalar(Z).floor(),C.copy(X).multiplyScalar(Z).floor(),k=J;if(xe.bindFramebuffer(D.FRAMEBUFFER,Y)&&Ae.drawBuffers&&Q&&xe.drawBuffers(b,Y),xe.viewport(y),xe.scissor(C),xe.setScissorTest(k),pe){const Fe=Me.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+W,Fe.__webglTexture,q)}else if(Ce){const Fe=Me.get(b.texture),We=W||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Fe.__webglTexture,q||0,We)}P=-1},this.readRenderTargetPixels=function(b,W,q,Q,Y,pe,Ce){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Me.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){xe.bindFramebuffer(D.FRAMEBUFFER,Ne);try{const Fe=b.texture,We=Fe.format,Be=Fe.type;if(We!==$n&&se.convert(We)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Be===Us&&(_e.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Be!==Wi&&se.convert(Be)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===vi&&(Ae.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-Q&&q>=0&&q<=b.height-Y&&D.readPixels(W,q,Q,Y,se.convert(We),se.convert(Be),pe)}finally{const Fe=T!==null?Me.get(T).__webglFramebuffer:null;xe.bindFramebuffer(D.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(b,W,q=0){const Q=Math.pow(2,-q),Y=Math.floor(W.image.width*Q),pe=Math.floor(W.image.height*Q);R.setTexture2D(W,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,b.x,b.y,Y,pe),xe.unbindTexture()},this.copyTextureToTexture=function(b,W,q,Q=0){const Y=W.image.width,pe=W.image.height,Ce=se.convert(q.format),Ne=se.convert(q.type);R.setTexture2D(q,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,q.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,q.unpackAlignment),W.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Q,b.x,b.y,Y,pe,Ce,Ne,W.image.data):W.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Q,b.x,b.y,W.mipmaps[0].width,W.mipmaps[0].height,Ce,W.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,Q,b.x,b.y,Ce,Ne,W.image),Q===0&&q.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(b,W,q,Q,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=b.max.x-b.min.x+1,Ce=b.max.y-b.min.y+1,Ne=b.max.z-b.min.z+1,Fe=se.convert(Q.format),We=se.convert(Q.type);let Be;if(Q.isData3DTexture)R.setTexture3D(Q,0),Be=D.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)R.setTexture2DArray(Q,0),Be=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Q.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,Q.unpackAlignment);const He=D.getParameter(D.UNPACK_ROW_LENGTH),xt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),mn=D.getParameter(D.UNPACK_SKIP_PIXELS),Nt=D.getParameter(D.UNPACK_SKIP_ROWS),ai=D.getParameter(D.UNPACK_SKIP_IMAGES),ht=q.isCompressedTexture?q.mipmaps[Y]:q.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,ht.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,b.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,b.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,b.min.z),q.isDataTexture||q.isData3DTexture?D.texSubImage3D(Be,Y,W.x,W.y,W.z,pe,Ce,Ne,Fe,We,ht.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Be,Y,W.x,W.y,W.z,pe,Ce,Ne,Fe,ht.data)):D.texSubImage3D(Be,Y,W.x,W.y,W.z,pe,Ce,Ne,Fe,We,ht),D.pixelStorei(D.UNPACK_ROW_LENGTH,He),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,mn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Nt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ai),Y===0&&Q.generateMipmaps&&D.generateMipmap(Be),xe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),xe.unbindTexture()},this.resetState=function(){M=0,w=0,T=null,xe.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Sf?"display-p3":"srgb",n.unpackColorSpace=ot.workingColorSpace===ou?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?br:xv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===br?kt:Ei}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class xT extends Gv{}xT.prototype.isWebGL1Renderer=!0;let ST=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}};class Wv extends $o{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vm=new V,_m=new V,ym=new Et,vc=new Cv,Oa=new su;class ET extends Jt{constructor(e=new oi,n=new Wv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)vm.fromBufferAttribute(n,r-1),_m.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=vm.distanceTo(_m);e.setAttribute("lineDistance",new Nn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(r),Oa.radius+=o,e.ray.intersectsSphere(Oa)===!1)return;ym.copy(r).invert(),vc.copy(e.ray).applyMatrix4(ym);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new V,c=new V,f=new V,h=new V,g=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const d=Math.max(0,s.start),m=Math.min(_.count,s.start+s.count);for(let v=d,E=m-1;v<E;v+=g){const M=_.getX(v),w=_.getX(v+1);if(u.fromBufferAttribute(p,M),c.fromBufferAttribute(p,w),vc.distanceSqToSegment(u,c,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(h);P<e.near||P>e.far||n.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,s.start),m=Math.min(p.count,s.start+s.count);for(let v=d,E=m-1;v<E;v+=g){if(u.fromBufferAttribute(p,v),c.fromBufferAttribute(p,v+1),vc.distanceSqToSegment(u,c,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||n.push({distance:w,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}const xm=new V,Sm=new V;class wT extends ET{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)xm.fromBufferAttribute(n,r),Sm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+xm.distanceTo(Sm);e.setAttribute("lineDistance",new Nn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mf extends oi{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const o=[],s=[];a(r),u(i),c(),this.setAttribute("position",new Nn(o,3)),this.setAttribute("normal",new Nn(o.slice(),3)),this.setAttribute("uv",new Nn(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const v=new V,E=new V,M=new V;for(let w=0;w<n.length;w+=3)g(n[w+0],v),g(n[w+1],E),g(n[w+2],M),l(v,E,M,m)}function l(m,v,E,M){const w=M+1,T=[];for(let P=0;P<=w;P++){T[P]=[];const B=m.clone().lerp(E,P/w),y=v.clone().lerp(E,P/w),C=w-P;for(let k=0;k<=C;k++)k===0&&P===w?T[P][k]=B:T[P][k]=B.clone().lerp(y,k/C)}for(let P=0;P<w;P++)for(let B=0;B<2*(w-P)-1;B++){const y=Math.floor(B/2);B%2===0?(h(T[P][y+1]),h(T[P+1][y]),h(T[P][y])):(h(T[P][y+1]),h(T[P+1][y+1]),h(T[P+1][y]))}}function u(m){const v=new V;for(let E=0;E<o.length;E+=3)v.x=o[E+0],v.y=o[E+1],v.z=o[E+2],v.normalize().multiplyScalar(m),o[E+0]=v.x,o[E+1]=v.y,o[E+2]=v.z}function c(){const m=new V;for(let v=0;v<o.length;v+=3){m.x=o[v+0],m.y=o[v+1],m.z=o[v+2];const E=p(m)/2/Math.PI+.5,M=d(m)/Math.PI+.5;s.push(E,1-M)}_(),f()}function f(){for(let m=0;m<s.length;m+=6){const v=s[m+0],E=s[m+2],M=s[m+4],w=Math.max(v,E,M),T=Math.min(v,E,M);w>.9&&T<.1&&(v<.2&&(s[m+0]+=1),E<.2&&(s[m+2]+=1),M<.2&&(s[m+4]+=1))}}function h(m){o.push(m.x,m.y,m.z)}function g(m,v){const E=m*3;v.x=e[E+0],v.y=e[E+1],v.z=e[E+2]}function _(){const m=new V,v=new V,E=new V,M=new V,w=new Xe,T=new Xe,P=new Xe;for(let B=0,y=0;B<o.length;B+=9,y+=6){m.set(o[B+0],o[B+1],o[B+2]),v.set(o[B+3],o[B+4],o[B+5]),E.set(o[B+6],o[B+7],o[B+8]),w.set(s[y+0],s[y+1]),T.set(s[y+2],s[y+3]),P.set(s[y+4],s[y+5]),M.copy(m).add(v).add(E).divideScalar(3);const C=p(M);x(w,y+0,m,C),x(T,y+2,v,C),x(P,y+4,E,C)}}function x(m,v,E,M){M<0&&m.x===1&&(s[v]=m.x-1),E.x===0&&E.z===0&&(s[v]=M/2/Math.PI+.5)}function p(m){return Math.atan2(m.z,-m.x)}function d(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mf(e.vertices,e.indices,e.radius,e.details)}}class Tf extends Mf{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,o,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Tf(e.radius,e.detail)}}class MT extends $o{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sv,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $v extends Jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const _c=new Et,Em=new V,wm=new V;class TT{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ef,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Em.setFromMatrixPosition(e.matrixWorld),n.position.copy(Em),wm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(wm),n.updateMatrixWorld(),_c.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_c),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Mm=new Et,ds=new V,yc=new V;class AT extends TT{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),ds.setFromMatrixPosition(e.matrixWorld),i.position.copy(ds),yc.copy(i.position),yc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(yc),i.updateMatrixWorld(),r.makeTranslation(-ds.x,-ds.y,-ds.z),Mm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mm)}}class CT extends $v{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new AT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class bT extends $v{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_f}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_f);const jv=Math.sqrt(5),RT=(jv-1)/4,Ft=(5-jv)/20,ka=t=>Math.floor(t)|0,Ba=new Float64Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]);function Xv(t=Math.random){const e=PT(t),n=new Float64Array(e).map(s=>Ba[s%32*4]),i=new Float64Array(e).map(s=>Ba[s%32*4+1]),r=new Float64Array(e).map(s=>Ba[s%32*4+2]),o=new Float64Array(e).map(s=>Ba[s%32*4+3]);return function(a,l,u,c){let f,h,g,_,x;const p=(a+l+u+c)*RT,d=ka(a+p),m=ka(l+p),v=ka(u+p),E=ka(c+p),M=(d+m+v+E)*Ft,w=d-M,T=m-M,P=v-M,B=E-M,y=a-w,C=l-T,k=u-P,z=c-B;let N=0,G=0,U=0,Z=0;y>C?N++:G++,y>k?N++:U++,y>z?N++:Z++,C>k?G++:U++,C>z?G++:Z++,k>z?U++:Z++;const I=N>=3?1:0,O=G>=3?1:0,H=U>=3?1:0,X=Z>=3?1:0,J=N>=2?1:0,ge=G>=2?1:0,$=U>=2?1:0,K=Z>=2?1:0,ne=N>=1?1:0,de=G>=1?1:0,ye=U>=1?1:0,ve=Z>=1?1:0,ze=y-I+Ft,be=C-O+Ft,D=k-H+Ft,nt=z-X+Ft,_e=y-J+2*Ft,Ae=C-ge+2*Ft,xe=k-$+2*Ft,Oe=z-K+2*Ft,Me=y-ne+3*Ft,R=C-de+3*Ft,A=k-ye+3*Ft,j=z-ve+3*Ft,ie=y-1+4*Ft,ee=C-1+4*Ft,re=k-1+4*Ft,he=z-1+4*Ft,ue=d&255,fe=m&255,Se=v&255,Le=E&255;let te=.6-y*y-C*C-k*k-z*z;if(te<0)f=0;else{const se=ue+e[fe+e[Se+e[Le]]];te*=te,f=te*te*(n[se]*y+i[se]*C+r[se]*k+o[se]*z)}let qe=.6-ze*ze-be*be-D*D-nt*nt;if(qe<0)h=0;else{const se=ue+I+e[fe+O+e[Se+H+e[Le+X]]];qe*=qe,h=qe*qe*(n[se]*ze+i[se]*be+r[se]*D+o[se]*nt)}let Ie=.6-_e*_e-Ae*Ae-xe*xe-Oe*Oe;if(Ie<0)g=0;else{const se=ue+J+e[fe+ge+e[Se+$+e[Le+K]]];Ie*=Ie,g=Ie*Ie*(n[se]*_e+i[se]*Ae+r[se]*xe+o[se]*Oe)}let Re=.6-Me*Me-R*R-A*A-j*j;if(Re<0)_=0;else{const se=ue+ne+e[fe+de+e[Se+ye+e[Le+ve]]];Re*=Re,_=Re*Re*(n[se]*Me+i[se]*R+r[se]*A+o[se]*j)}let Ee=.6-ie*ie-ee*ee-re*re-he*he;if(Ee<0)x=0;else{const se=ue+1+e[fe+1+e[Se+1+e[Le+1]]];Ee*=Ee,x=Ee*Ee*(n[se]*ie+i[se]*ee+r[se]*re+o[se]*he)}return 27*(f+h+g+_+x)}}function PT(t){const n=new Uint8Array(512);for(let i=0;i<512/2;i++)n[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(t()*(256-i)),o=n[i];n[i]=n[r],n[r]=o}for(let i=256;i<512;i++)n[i]=n[i-256];return n}class LT{constructor(){this.noise4D=Xv(),this.group=new Ss,this.geometry=new oi,this.material=new Wv({color:8035999,transparent:!0,opacity:.3}),this.init()}init(){const e=[];for(let o=0;o<100;o++){let s=(Math.random()-.5)*100,a=(Math.random()-.5)*100,l=(Math.random()-.5)*100;for(let u=0;u<75;u++){e.push(new V(s,a,l));const c=.015,f=this.noise4D(s*c,a*c,l*c,Date.now()*3e-5);s+=Math.cos(f*Math.PI*2)*.4,a+=Math.sin(f*Math.PI*2)*.4,l+=(Math.cos(f*Math.PI)+Math.sin(f*Math.PI))*.2}}this.geometry.setFromPoints(e);const r=new wT(this.geometry,this.material);this.group.add(r)}update(e){this.group.rotation.x+=1e-4,this.group.rotation.y+=1e-4;const n=this.geometry.attributes.position.array;for(let i=0;i<n.length;i+=3){const r=n[i],o=n[i+1],s=n[i+2],a=.015,l=this.noise4D(r*a,o*a,s*a,e);n[i]+=Math.cos(l*Math.PI*2)*.015,n[i+1]+=Math.sin(l*Math.PI*2)*.015,n[i+2]+=Math.cos(l*Math.PI)*.015}this.geometry.attributes.position.needsUpdate=!0}}class NT{constructor(){this.spheres=[],this.geometry=new Tf(1,3),this.material=new MT({color:5270655,transparent:!0,opacity:.2,shininess:100,specular:8035999}),this.init()}init(){for(let e=0;e<15;e++){const n=new ti(this.geometry,this.material);n.position.set((Math.random()-.5)*60,(Math.random()-.5)*60,(Math.random()-.5)*60),n.scale.setScalar(Math.random()*2+1),this.spheres.push(n)}}update(e){this.spheres.forEach((n,i)=>{n.position.y+=Math.sin(e+i)*.004,n.rotation.x+=.001,n.rotation.y+=.001})}}class DT{constructor(){this.scene=new ST,this.camera=new xn(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new Gv({canvas:document.querySelector("#bg"),antialias:!0,alpha:!0}),this.flowField=new LT,this.spheres=new NT,this.time=0,this.init(),this.setupLights(),this.setupEventListeners()}init(){this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.position.setZ(30),this.scene.add(this.flowField.group),this.spheres.spheres.forEach(e=>this.scene.add(e))}setupLights(){const e=new bT(4210752,.8),n=new CT(8035999,1);n.position.set(10,10,10),this.scene.add(e),this.scene.add(n)}setupEventListeners(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}),document.addEventListener("mousemove",e=>{const n=(e.clientX-window.innerWidth/2)*4e-5,i=(e.clientY-window.innerHeight/2)*4e-5;this.flowField.group.rotation.y+=n,this.flowField.group.rotation.x+=i})}animate(){requestAnimationFrame(()=>this.animate()),this.time+=3e-4,this.flowField.update(this.time),this.spheres.update(this.time),this.renderer.render(this.scene,this.camera)}}class IT{constructor(){this.init()}init(){document.querySelectorAll(".card").forEach(n=>{n.addEventListener("mousemove",i=>{const r=n.getBoundingClientRect(),o=(i.clientX-r.left)/r.width*100,s=(i.clientY-r.top)/r.height*100;n.style.setProperty("--x",`${o}%`),n.style.setProperty("--y",`${s}%`)})})}}class UT{constructor(){this.init()}init(){const e=document.querySelectorAll(".section"),n=new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting&&r.target.classList.add("visible")})},{threshold:.1});e.forEach(i=>n.observe(i))}}function FT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yv={exports:{}},Mn={},qv={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ia=Symbol.for("react.element"),OT=Symbol.for("react.portal"),kT=Symbol.for("react.fragment"),BT=Symbol.for("react.strict_mode"),zT=Symbol.for("react.profiler"),VT=Symbol.for("react.provider"),HT=Symbol.for("react.context"),GT=Symbol.for("react.forward_ref"),WT=Symbol.for("react.suspense"),$T=Symbol.for("react.memo"),jT=Symbol.for("react.lazy"),Tm=Symbol.iterator;function XT(t){return t===null||typeof t!="object"?null:(t=Tm&&t[Tm]||t["@@iterator"],typeof t=="function"?t:null)}var Kv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zv=Object.assign,Qv={};function Xo(t,e,n){this.props=t,this.context=e,this.refs=Qv,this.updater=n||Kv}Xo.prototype.isReactComponent={};Xo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jv(){}Jv.prototype=Xo.prototype;function Af(t,e,n){this.props=t,this.context=e,this.refs=Qv,this.updater=n||Kv}var Cf=Af.prototype=new Jv;Cf.constructor=Af;Zv(Cf,Xo.prototype);Cf.isPureReactComponent=!0;var Am=Array.isArray,e0=Object.prototype.hasOwnProperty,bf={current:null},t0={key:!0,ref:!0,__self:!0,__source:!0};function n0(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)e0.call(e,i)&&!t0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ia,type:t,key:o,ref:s,props:r,_owner:bf.current}}function YT(t,e){return{$$typeof:ia,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ia}function qT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cm=/\/+/g;function xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qT(""+t.key):e.toString(36)}function ul(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ia:case OT:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+xc(s,0):i,Am(r)?(n="",t!=null&&(n=t.replace(Cm,"$&/")+"/"),ul(r,e,n,"",function(u){return u})):r!=null&&(Rf(r)&&(r=YT(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Cm,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Am(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+xc(o,a);s+=ul(o,e,n,l,r)}else if(l=XT(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+xc(o,a++),s+=ul(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function za(t,e,n){if(t==null)return t;var i=[],r=0;return ul(t,i,"","",function(o){return e.call(n,o,r++)}),i}function KT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},cl={transition:null},ZT={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:cl,ReactCurrentOwner:bf};function i0(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:za,forEach:function(t,e,n){za(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return za(t,function(){e++}),e},toArray:function(t){return za(t,function(e){return e})||[]},only:function(t){if(!Rf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Xo;Ye.Fragment=kT;Ye.Profiler=zT;Ye.PureComponent=Af;Ye.StrictMode=BT;Ye.Suspense=WT;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZT;Ye.act=i0;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Zv({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=bf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)e0.call(e,l)&&!t0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ia,type:t.type,key:r,ref:o,props:i,_owner:s}};Ye.createContext=function(t){return t={$$typeof:HT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:VT,_context:t},t.Consumer=t};Ye.createElement=n0;Ye.createFactory=function(t){var e=n0.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:GT,render:t}};Ye.isValidElement=Rf;Ye.lazy=function(t){return{$$typeof:jT,_payload:{_status:-1,_result:t},_init:KT}};Ye.memo=function(t,e){return{$$typeof:$T,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=cl.transition;cl.transition={};try{t()}finally{cl.transition=e}};Ye.unstable_act=i0;Ye.useCallback=function(t,e){return nn.current.useCallback(t,e)};Ye.useContext=function(t){return nn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return nn.current.useEffect(t,e)};Ye.useId=function(){return nn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return nn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};Ye.useRef=function(t){return nn.current.useRef(t)};Ye.useState=function(t){return nn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return nn.current.useTransition()};Ye.version="18.3.1";qv.exports=Ye;var S=qv.exports;const Ke=FT(S);var r0={exports:{}},o0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,O){var H=I.length;I.push(O);e:for(;0<H;){var X=H-1>>>1,J=I[X];if(0<r(J,O))I[X]=O,I[H]=J,H=X;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var O=I[0],H=I.pop();if(H!==O){I[0]=H;e:for(var X=0,J=I.length,ge=J>>>1;X<ge;){var $=2*(X+1)-1,K=I[$],ne=$+1,de=I[ne];if(0>r(K,H))ne<J&&0>r(de,K)?(I[X]=de,I[ne]=H,X=ne):(I[X]=K,I[$]=H,X=$);else if(ne<J&&0>r(de,H))I[X]=de,I[ne]=H,X=ne;else break e}}return O}function r(I,O){var H=I.sortIndex-O.sortIndex;return H!==0?H:I.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,h=3,g=!1,_=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var O=n(u);O!==null;){if(O.callback===null)i(u);else if(O.startTime<=I)i(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function E(I){if(x=!1,v(I),!_)if(n(l)!==null)_=!0,U(M);else{var O=n(u);O!==null&&Z(E,O.startTime-I)}}function M(I,O){_=!1,x&&(x=!1,d(P),P=-1),g=!0;var H=h;try{for(v(O),f=n(l);f!==null&&(!(f.expirationTime>O)||I&&!C());){var X=f.callback;if(typeof X=="function"){f.callback=null,h=f.priorityLevel;var J=X(f.expirationTime<=O);O=t.unstable_now(),typeof J=="function"?f.callback=J:f===n(l)&&i(l),v(O)}else i(l);f=n(l)}if(f!==null)var ge=!0;else{var $=n(u);$!==null&&Z(E,$.startTime-O),ge=!1}return ge}finally{f=null,h=H,g=!1}}var w=!1,T=null,P=-1,B=5,y=-1;function C(){return!(t.unstable_now()-y<B)}function k(){if(T!==null){var I=t.unstable_now();y=I;var O=!0;try{O=T(!0,I)}finally{O?z():(w=!1,T=null)}}else w=!1}var z;if(typeof m=="function")z=function(){m(k)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,G=N.port2;N.port1.onmessage=k,z=function(){G.postMessage(null)}}else z=function(){p(k,0)};function U(I){T=I,w||(w=!0,z())}function Z(I,O){P=p(function(){I(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,U(M))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var H=h;h=O;try{return I()}finally{h=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,O){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var H=h;h=I;try{return O()}finally{h=H}},t.unstable_scheduleCallback=function(I,O,H){var X=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?X+H:X):H=X,I){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=H+J,I={id:c++,callback:O,priorityLevel:I,startTime:H,expirationTime:J,sortIndex:-1},H>X?(I.sortIndex=H,e(u,I),n(l)===null&&I===n(u)&&(x?(d(P),P=-1):x=!0,Z(E,H-X))):(I.sortIndex=J,e(l,I),_||g||(_=!0,U(M))),I},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(I){var O=h;return function(){var H=h;h=O;try{return I.apply(this,arguments)}finally{h=H}}}})(o0);r0.exports=o0;var QT=r0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JT=S,wn=QT;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s0=new Set,Fs={};function Br(t,e){Oo(t,e),Oo(t+"Capture",e)}function Oo(t,e){for(Fs[t]=e,t=0;t<e.length;t++)s0.add(e[t])}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ld=Object.prototype.hasOwnProperty,eA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bm={},Rm={};function tA(t){return ld.call(Rm,t)?!0:ld.call(bm,t)?!1:eA.test(t)?Rm[t]=!0:(bm[t]=!0,!1)}function nA(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function iA(t,e,n,i){if(e===null||typeof e>"u"||nA(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pf=/[\-:]([a-z])/g;function Lf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pf,Lf);Vt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pf,Lf);Vt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pf,Lf);Vt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nf(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(iA(e,n,r,i)&&(n=null),i||r===null?tA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ci=JT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),co=Symbol.for("react.portal"),fo=Symbol.for("react.fragment"),Df=Symbol.for("react.strict_mode"),ud=Symbol.for("react.profiler"),a0=Symbol.for("react.provider"),l0=Symbol.for("react.context"),If=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),dd=Symbol.for("react.suspense_list"),Uf=Symbol.for("react.memo"),Ui=Symbol.for("react.lazy"),u0=Symbol.for("react.offscreen"),Pm=Symbol.iterator;function fs(t){return t===null||typeof t!="object"?null:(t=Pm&&t[Pm]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,Sc;function Es(t){if(Sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sc=e&&e[1]||""}return`
`+Sc+t}var Ec=!1;function wc(t,e){if(!t||Ec)return"";Ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ec=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Es(t):""}function rA(t){switch(t.tag){case 5:return Es(t.type);case 16:return Es("Lazy");case 13:return Es("Suspense");case 19:return Es("SuspenseList");case 0:case 2:case 15:return t=wc(t.type,!1),t;case 11:return t=wc(t.type.render,!1),t;case 1:return t=wc(t.type,!0),t;default:return""}}function fd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fo:return"Fragment";case co:return"Portal";case ud:return"Profiler";case Df:return"StrictMode";case cd:return"Suspense";case dd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case l0:return(t.displayName||"Context")+".Consumer";case a0:return(t._context.displayName||"Context")+".Provider";case If:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Uf:return e=t.displayName||null,e!==null?e:fd(t.type)||"Memo";case Ui:e=t._payload,t=t._init;try{return fd(t(e))}catch{}}return null}function oA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fd(e);case 8:return e===Df?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function c0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sA(t){var e=c0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ha(t){t._valueTracker||(t._valueTracker=sA(t))}function d0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=c0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hd(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function f0(t,e){e=e.checked,e!=null&&Nf(t,"checked",e,!1)}function pd(t,e){f0(t,e);var n=tr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?md(t,e.type,n):e.hasOwnProperty("defaultValue")&&md(t,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Nm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function md(t,e,n){(e!=="number"||Pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ws=Array.isArray;function Co(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+tr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function gd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(ws(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tr(n)}}function h0(t,e){var n=tr(e.value),i=tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Im(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function p0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?p0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ga,m0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ga=Ga||document.createElement("div"),Ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ga.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Os(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var As={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aA=["Webkit","ms","Moz","O"];Object.keys(As).forEach(function(t){aA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),As[e]=As[t]})});function g0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||As.hasOwnProperty(t)&&As[t]?(""+e).trim():e+"px"}function v0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=g0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var lA=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _d(t,e){if(e){if(lA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function yd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xd=null;function Ff(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sd=null,bo=null,Ro=null;function Um(t){if(t=sa(t)){if(typeof Sd!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=pu(e),Sd(t.stateNode,t.type,e))}}function _0(t){bo?Ro?Ro.push(t):Ro=[t]:bo=t}function y0(){if(bo){var t=bo,e=Ro;if(Ro=bo=null,Um(t),e)for(t=0;t<e.length;t++)Um(e[t])}}function x0(t,e){return t(e)}function S0(){}var Mc=!1;function E0(t,e,n){if(Mc)return t(e,n);Mc=!0;try{return x0(t,e,n)}finally{Mc=!1,(bo!==null||Ro!==null)&&(S0(),y0())}}function ks(t,e){var n=t.stateNode;if(n===null)return null;var i=pu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Ed=!1;if(wi)try{var hs={};Object.defineProperty(hs,"passive",{get:function(){Ed=!0}}),window.addEventListener("test",hs,hs),window.removeEventListener("test",hs,hs)}catch{Ed=!1}function uA(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Cs=!1,Ll=null,Nl=!1,wd=null,cA={onError:function(t){Cs=!0,Ll=t}};function dA(t,e,n,i,r,o,s,a,l){Cs=!1,Ll=null,uA.apply(cA,arguments)}function fA(t,e,n,i,r,o,s,a,l){if(dA.apply(this,arguments),Cs){if(Cs){var u=Ll;Cs=!1,Ll=null}else throw Error(oe(198));Nl||(Nl=!0,wd=u)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function w0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fm(t){if(zr(t)!==t)throw Error(oe(188))}function hA(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Fm(r),t;if(o===i)return Fm(r),e;o=o.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function M0(t){return t=hA(t),t!==null?T0(t):null}function T0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=T0(t);if(e!==null)return e;t=t.sibling}return null}var A0=wn.unstable_scheduleCallback,Om=wn.unstable_cancelCallback,pA=wn.unstable_shouldYield,mA=wn.unstable_requestPaint,St=wn.unstable_now,gA=wn.unstable_getCurrentPriorityLevel,Of=wn.unstable_ImmediatePriority,C0=wn.unstable_UserBlockingPriority,Dl=wn.unstable_NormalPriority,vA=wn.unstable_LowPriority,b0=wn.unstable_IdlePriority,cu=null,ii=null;function _A(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(cu,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:SA,yA=Math.log,xA=Math.LN2;function SA(t){return t>>>=0,t===0?32:31-(yA(t)/xA|0)|0}var Wa=64,$a=4194304;function Ms(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Il(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Ms(a):(o&=s,o!==0&&(i=Ms(o)))}else s=n&~r,s!==0?i=Ms(s):o!==0&&(i=Ms(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function EA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wA(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-jn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=EA(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Md(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function R0(){var t=Wa;return Wa<<=1,!(Wa&4194240)&&(Wa=64),t}function Tc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ra(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function MA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function kf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function P0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var L0,Bf,N0,D0,I0,Td=!1,ja=[],$i=null,ji=null,Xi=null,Bs=new Map,zs=new Map,Oi=[],TA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function km(t,e){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":Bs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zs.delete(e.pointerId)}}function ps(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=sa(e),e!==null&&Bf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function AA(t,e,n,i,r){switch(e){case"focusin":return $i=ps($i,t,e,n,i,r),!0;case"dragenter":return ji=ps(ji,t,e,n,i,r),!0;case"mouseover":return Xi=ps(Xi,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Bs.set(o,ps(Bs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,zs.set(o,ps(zs.get(o)||null,t,e,n,i,r)),!0}return!1}function U0(t){var e=Er(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=w0(n),e!==null){t.blockedOn=e,I0(t.priority,function(){N0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ad(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);xd=i,n.target.dispatchEvent(i),xd=null}else return e=sa(n),e!==null&&Bf(e),t.blockedOn=n,!1;e.shift()}return!0}function Bm(t,e,n){dl(t)&&n.delete(e)}function CA(){Td=!1,$i!==null&&dl($i)&&($i=null),ji!==null&&dl(ji)&&(ji=null),Xi!==null&&dl(Xi)&&(Xi=null),Bs.forEach(Bm),zs.forEach(Bm)}function ms(t,e){t.blockedOn===e&&(t.blockedOn=null,Td||(Td=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,CA)))}function Vs(t){function e(r){return ms(r,t)}if(0<ja.length){ms(ja[0],t);for(var n=1;n<ja.length;n++){var i=ja[n];i.blockedOn===t&&(i.blockedOn=null)}}for($i!==null&&ms($i,t),ji!==null&&ms(ji,t),Xi!==null&&ms(Xi,t),Bs.forEach(e),zs.forEach(e),n=0;n<Oi.length;n++)i=Oi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Oi.length&&(n=Oi[0],n.blockedOn===null);)U0(n),n.blockedOn===null&&Oi.shift()}var Po=Ci.ReactCurrentBatchConfig,Ul=!0;function bA(t,e,n,i){var r=rt,o=Po.transition;Po.transition=null;try{rt=1,zf(t,e,n,i)}finally{rt=r,Po.transition=o}}function RA(t,e,n,i){var r=rt,o=Po.transition;Po.transition=null;try{rt=4,zf(t,e,n,i)}finally{rt=r,Po.transition=o}}function zf(t,e,n,i){if(Ul){var r=Ad(t,e,n,i);if(r===null)Uc(t,e,i,Fl,n),km(t,i);else if(AA(r,t,e,n,i))i.stopPropagation();else if(km(t,i),e&4&&-1<TA.indexOf(t)){for(;r!==null;){var o=sa(r);if(o!==null&&L0(o),o=Ad(t,e,n,i),o===null&&Uc(t,e,i,Fl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Uc(t,e,i,null,n)}}var Fl=null;function Ad(t,e,n,i){if(Fl=null,t=Ff(i),t=Er(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=w0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fl=t,null}function F0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gA()){case Of:return 1;case C0:return 4;case Dl:case vA:return 16;case b0:return 536870912;default:return 16}default:return 16}}var zi=null,Vf=null,fl=null;function O0(){if(fl)return fl;var t,e=Vf,n=e.length,i,r="value"in zi?zi.value:zi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return fl=r.slice(t,1<i?1-i:void 0)}function hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xa(){return!0}function zm(){return!1}function Tn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Xa:zm,this.isPropagationStopped=zm,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xa)},persist:function(){},isPersistent:Xa}),e}var Yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hf=Tn(Yo),oa=gt({},Yo,{view:0,detail:0}),PA=Tn(oa),Ac,Cc,gs,du=gt({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gs&&(gs&&t.type==="mousemove"?(Ac=t.screenX-gs.screenX,Cc=t.screenY-gs.screenY):Cc=Ac=0,gs=t),Ac)},movementY:function(t){return"movementY"in t?t.movementY:Cc}}),Vm=Tn(du),LA=gt({},du,{dataTransfer:0}),NA=Tn(LA),DA=gt({},oa,{relatedTarget:0}),bc=Tn(DA),IA=gt({},Yo,{animationName:0,elapsedTime:0,pseudoElement:0}),UA=Tn(IA),FA=gt({},Yo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),OA=Tn(FA),kA=gt({},Yo,{data:0}),Hm=Tn(kA),BA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=VA[t])?!!e[t]:!1}function Gf(){return HA}var GA=gt({},oa,{key:function(t){if(t.key){var e=BA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gf,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),WA=Tn(GA),$A=gt({},du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gm=Tn($A),jA=gt({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gf}),XA=Tn(jA),YA=gt({},Yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),qA=Tn(YA),KA=gt({},du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ZA=Tn(KA),QA=[9,13,27,32],Wf=wi&&"CompositionEvent"in window,bs=null;wi&&"documentMode"in document&&(bs=document.documentMode);var JA=wi&&"TextEvent"in window&&!bs,k0=wi&&(!Wf||bs&&8<bs&&11>=bs),Wm=" ",$m=!1;function B0(t,e){switch(t){case"keyup":return QA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function z0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ho=!1;function eC(t,e){switch(t){case"compositionend":return z0(e);case"keypress":return e.which!==32?null:($m=!0,Wm);case"textInput":return t=e.data,t===Wm&&$m?null:t;default:return null}}function tC(t,e){if(ho)return t==="compositionend"||!Wf&&B0(t,e)?(t=O0(),fl=Vf=zi=null,ho=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return k0&&e.locale!=="ko"?null:e.data;default:return null}}var nC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nC[t.type]:e==="textarea"}function V0(t,e,n,i){_0(i),e=Ol(e,"onChange"),0<e.length&&(n=new Hf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Rs=null,Hs=null;function iC(t){Q0(t,0)}function fu(t){var e=go(t);if(d0(e))return t}function rC(t,e){if(t==="change")return e}var H0=!1;if(wi){var Rc;if(wi){var Pc="oninput"in document;if(!Pc){var Xm=document.createElement("div");Xm.setAttribute("oninput","return;"),Pc=typeof Xm.oninput=="function"}Rc=Pc}else Rc=!1;H0=Rc&&(!document.documentMode||9<document.documentMode)}function Ym(){Rs&&(Rs.detachEvent("onpropertychange",G0),Hs=Rs=null)}function G0(t){if(t.propertyName==="value"&&fu(Hs)){var e=[];V0(e,Hs,t,Ff(t)),E0(iC,e)}}function oC(t,e,n){t==="focusin"?(Ym(),Rs=e,Hs=n,Rs.attachEvent("onpropertychange",G0)):t==="focusout"&&Ym()}function sC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fu(Hs)}function aC(t,e){if(t==="click")return fu(e)}function lC(t,e){if(t==="input"||t==="change")return fu(e)}function uC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:uC;function Gs(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ld.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function qm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Km(t,e){var n=qm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qm(n)}}function W0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?W0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $0(){for(var t=window,e=Pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pl(t.document)}return e}function $f(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function cC(t){var e=$0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&W0(n.ownerDocument.documentElement,n)){if(i!==null&&$f(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Km(n,o);var s=Km(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dC=wi&&"documentMode"in document&&11>=document.documentMode,po=null,Cd=null,Ps=null,bd=!1;function Zm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bd||po==null||po!==Pl(i)||(i=po,"selectionStart"in i&&$f(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ps&&Gs(Ps,i)||(Ps=i,i=Ol(Cd,"onSelect"),0<i.length&&(e=new Hf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=po)))}function Ya(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mo={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},Lc={},j0={};wi&&(j0=document.createElement("div").style,"AnimationEvent"in window||(delete mo.animationend.animation,delete mo.animationiteration.animation,delete mo.animationstart.animation),"TransitionEvent"in window||delete mo.transitionend.transition);function hu(t){if(Lc[t])return Lc[t];if(!mo[t])return t;var e=mo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in j0)return Lc[t]=e[n];return t}var X0=hu("animationend"),Y0=hu("animationiteration"),q0=hu("animationstart"),K0=hu("transitionend"),Z0=new Map,Qm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(t,e){Z0.set(t,e),Br(e,[t])}for(var Nc=0;Nc<Qm.length;Nc++){var Dc=Qm[Nc],fC=Dc.toLowerCase(),hC=Dc[0].toUpperCase()+Dc.slice(1);ir(fC,"on"+hC)}ir(X0,"onAnimationEnd");ir(Y0,"onAnimationIteration");ir(q0,"onAnimationStart");ir("dblclick","onDoubleClick");ir("focusin","onFocus");ir("focusout","onBlur");ir(K0,"onTransitionEnd");Oo("onMouseEnter",["mouseout","mouseover"]);Oo("onMouseLeave",["mouseout","mouseover"]);Oo("onPointerEnter",["pointerout","pointerover"]);Oo("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ts="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ts));function Jm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,fA(i,e,void 0,t),t.currentTarget=null}function Q0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Jm(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Jm(r,a,u),o=l}}}if(Nl)throw t=wd,Nl=!1,wd=null,t}function lt(t,e){var n=e[Dd];n===void 0&&(n=e[Dd]=new Set);var i=t+"__bubble";n.has(i)||(J0(e,t,2,!1),n.add(i))}function Ic(t,e,n){var i=0;e&&(i|=4),J0(n,t,i,e)}var qa="_reactListening"+Math.random().toString(36).slice(2);function Ws(t){if(!t[qa]){t[qa]=!0,s0.forEach(function(n){n!=="selectionchange"&&(pC.has(n)||Ic(n,!1,t),Ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qa]||(e[qa]=!0,Ic("selectionchange",!1,e))}}function J0(t,e,n,i){switch(F0(e)){case 1:var r=bA;break;case 4:r=RA;break;default:r=zf}n=r.bind(null,e,n,t),r=void 0,!Ed||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Uc(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Er(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}E0(function(){var u=o,c=Ff(n),f=[];e:{var h=Z0.get(t);if(h!==void 0){var g=Hf,_=t;switch(t){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":g=WA;break;case"focusin":_="focus",g=bc;break;case"focusout":_="blur",g=bc;break;case"beforeblur":case"afterblur":g=bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Vm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=NA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=XA;break;case X0:case Y0:case q0:g=UA;break;case K0:g=qA;break;case"scroll":g=PA;break;case"wheel":g=ZA;break;case"copy":case"cut":case"paste":g=OA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Gm}var x=(e&4)!==0,p=!x&&t==="scroll",d=x?h!==null?h+"Capture":null:h;x=[];for(var m=u,v;m!==null;){v=m;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,d!==null&&(E=ks(m,d),E!=null&&x.push($s(m,E,v)))),p)break;m=m.return}0<x.length&&(h=new g(h,_,null,n,c),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==xd&&(_=n.relatedTarget||n.fromElement)&&(Er(_)||_[Mi]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Er(_):null,_!==null&&(p=zr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(x=Vm,E="onMouseLeave",d="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(x=Gm,E="onPointerLeave",d="onPointerEnter",m="pointer"),p=g==null?h:go(g),v=_==null?h:go(_),h=new x(E,m+"leave",g,n,c),h.target=p,h.relatedTarget=v,E=null,Er(c)===u&&(x=new x(d,m+"enter",_,n,c),x.target=v,x.relatedTarget=p,E=x),p=E,g&&_)t:{for(x=g,d=_,m=0,v=x;v;v=oo(v))m++;for(v=0,E=d;E;E=oo(E))v++;for(;0<m-v;)x=oo(x),m--;for(;0<v-m;)d=oo(d),v--;for(;m--;){if(x===d||d!==null&&x===d.alternate)break t;x=oo(x),d=oo(d)}x=null}else x=null;g!==null&&eg(f,h,g,x,!1),_!==null&&p!==null&&eg(f,p,_,x,!0)}}e:{if(h=u?go(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var M=rC;else if(jm(h))if(H0)M=lC;else{M=sC;var w=oC}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(M=aC);if(M&&(M=M(t,u))){V0(f,M,n,c);break e}w&&w(t,h,u),t==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&md(h,"number",h.value)}switch(w=u?go(u):window,t){case"focusin":(jm(w)||w.contentEditable==="true")&&(po=w,Cd=u,Ps=null);break;case"focusout":Ps=Cd=po=null;break;case"mousedown":bd=!0;break;case"contextmenu":case"mouseup":case"dragend":bd=!1,Zm(f,n,c);break;case"selectionchange":if(dC)break;case"keydown":case"keyup":Zm(f,n,c)}var T;if(Wf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ho?B0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(k0&&n.locale!=="ko"&&(ho||P!=="onCompositionStart"?P==="onCompositionEnd"&&ho&&(T=O0()):(zi=c,Vf="value"in zi?zi.value:zi.textContent,ho=!0)),w=Ol(u,P),0<w.length&&(P=new Hm(P,t,null,n,c),f.push({event:P,listeners:w}),T?P.data=T:(T=z0(n),T!==null&&(P.data=T)))),(T=JA?eC(t,n):tC(t,n))&&(u=Ol(u,"onBeforeInput"),0<u.length&&(c=new Hm("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=T))}Q0(f,e)})}function $s(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ol(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=ks(t,n),o!=null&&i.unshift($s(t,o,r)),o=ks(t,e),o!=null&&i.push($s(t,o,r))),t=t.return}return i}function oo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function eg(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ks(n,o),l!=null&&s.unshift($s(n,l,a))):r||(l=ks(n,o),l!=null&&s.push($s(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var mC=/\r\n?/g,gC=/\u0000|\uFFFD/g;function tg(t){return(typeof t=="string"?t:""+t).replace(mC,`
`).replace(gC,"")}function Ka(t,e,n){if(e=tg(e),tg(t)!==e&&n)throw Error(oe(425))}function kl(){}var Rd=null,Pd=null;function Ld(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nd=typeof setTimeout=="function"?setTimeout:void 0,vC=typeof clearTimeout=="function"?clearTimeout:void 0,ng=typeof Promise=="function"?Promise:void 0,_C=typeof queueMicrotask=="function"?queueMicrotask:typeof ng<"u"?function(t){return ng.resolve(null).then(t).catch(yC)}:Nd;function yC(t){setTimeout(function(){throw t})}function Fc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Vs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Vs(e)}function Yi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ig(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qo=Math.random().toString(36).slice(2),ei="__reactFiber$"+qo,js="__reactProps$"+qo,Mi="__reactContainer$"+qo,Dd="__reactEvents$"+qo,xC="__reactListeners$"+qo,SC="__reactHandles$"+qo;function Er(t){var e=t[ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mi]||n[ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ig(t);t!==null;){if(n=t[ei])return n;t=ig(t)}return e}t=n,n=t.parentNode}return null}function sa(t){return t=t[ei]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function go(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function pu(t){return t[js]||null}var Id=[],vo=-1;function rr(t){return{current:t}}function ct(t){0>vo||(t.current=Id[vo],Id[vo]=null,vo--)}function at(t,e){vo++,Id[vo]=t.current,t.current=e}var nr={},Yt=rr(nr),fn=rr(!1),Nr=nr;function ko(t,e){var n=t.type.contextTypes;if(!n)return nr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hn(t){return t=t.childContextTypes,t!=null}function Bl(){ct(fn),ct(Yt)}function rg(t,e,n){if(Yt.current!==nr)throw Error(oe(168));at(Yt,e),at(fn,n)}function e_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,oA(t)||"Unknown",r));return gt({},n,i)}function zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Nr=Yt.current,at(Yt,t),at(fn,fn.current),!0}function og(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=e_(t,e,Nr),i.__reactInternalMemoizedMergedChildContext=t,ct(fn),ct(Yt),at(Yt,t)):ct(fn),at(fn,n)}var mi=null,mu=!1,Oc=!1;function t_(t){mi===null?mi=[t]:mi.push(t)}function EC(t){mu=!0,t_(t)}function or(){if(!Oc&&mi!==null){Oc=!0;var t=0,e=rt;try{var n=mi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}mi=null,mu=!1}catch(r){throw mi!==null&&(mi=mi.slice(t+1)),A0(Of,or),r}finally{rt=e,Oc=!1}}return null}var _o=[],yo=0,Vl=null,Hl=0,bn=[],Rn=0,Dr=null,yi=1,xi="";function gr(t,e){_o[yo++]=Hl,_o[yo++]=Vl,Vl=t,Hl=e}function n_(t,e,n){bn[Rn++]=yi,bn[Rn++]=xi,bn[Rn++]=Dr,Dr=t;var i=yi;t=xi;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var o=32-jn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,yi=1<<32-jn(e)+r|n<<r|i,xi=o+t}else yi=1<<o|n<<r|i,xi=t}function jf(t){t.return!==null&&(gr(t,1),n_(t,1,0))}function Xf(t){for(;t===Vl;)Vl=_o[--yo],_o[yo]=null,Hl=_o[--yo],_o[yo]=null;for(;t===Dr;)Dr=bn[--Rn],bn[Rn]=null,xi=bn[--Rn],bn[Rn]=null,yi=bn[--Rn],bn[Rn]=null}var En=null,Sn=null,ft=!1,Gn=null;function i_(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function sg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,Sn=Yi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:yi,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,Sn=null,!0):!1;default:return!1}}function Ud(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fd(t){if(ft){var e=Sn;if(e){var n=e;if(!sg(t,e)){if(Ud(t))throw Error(oe(418));e=Yi(n.nextSibling);var i=En;e&&sg(t,e)?i_(i,n):(t.flags=t.flags&-4097|2,ft=!1,En=t)}}else{if(Ud(t))throw Error(oe(418));t.flags=t.flags&-4097|2,ft=!1,En=t}}}function ag(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function Za(t){if(t!==En)return!1;if(!ft)return ag(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ld(t.type,t.memoizedProps)),e&&(e=Sn)){if(Ud(t))throw r_(),Error(oe(418));for(;e;)i_(t,e),e=Yi(e.nextSibling)}if(ag(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=Yi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=En?Yi(t.stateNode.nextSibling):null;return!0}function r_(){for(var t=Sn;t;)t=Yi(t.nextSibling)}function Bo(){Sn=En=null,ft=!1}function Yf(t){Gn===null?Gn=[t]:Gn.push(t)}var wC=Ci.ReactCurrentBatchConfig;function vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function Qa(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lg(t){var e=t._init;return e(t._payload)}function o_(t){function e(d,m){if(t){var v=d.deletions;v===null?(d.deletions=[m],d.flags|=16):v.push(m)}}function n(d,m){if(!t)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function i(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function r(d,m){return d=Qi(d,m),d.index=0,d.sibling=null,d}function o(d,m,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<m?(d.flags|=2,m):v):(d.flags|=2,m)):(d.flags|=1048576,m)}function s(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,m,v,E){return m===null||m.tag!==6?(m=Wc(v,d.mode,E),m.return=d,m):(m=r(m,v),m.return=d,m)}function l(d,m,v,E){var M=v.type;return M===fo?c(d,m,v.props.children,E,v.key):m!==null&&(m.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ui&&lg(M)===m.type)?(E=r(m,v.props),E.ref=vs(d,m,v),E.return=d,E):(E=xl(v.type,v.key,v.props,null,d.mode,E),E.ref=vs(d,m,v),E.return=d,E)}function u(d,m,v,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=$c(v,d.mode,E),m.return=d,m):(m=r(m,v.children||[]),m.return=d,m)}function c(d,m,v,E,M){return m===null||m.tag!==7?(m=Pr(v,d.mode,E,M),m.return=d,m):(m=r(m,v),m.return=d,m)}function f(d,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Wc(""+m,d.mode,v),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Va:return v=xl(m.type,m.key,m.props,null,d.mode,v),v.ref=vs(d,null,m),v.return=d,v;case co:return m=$c(m,d.mode,v),m.return=d,m;case Ui:var E=m._init;return f(d,E(m._payload),v)}if(ws(m)||fs(m))return m=Pr(m,d.mode,v,null),m.return=d,m;Qa(d,m)}return null}function h(d,m,v,E){var M=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:a(d,m,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Va:return v.key===M?l(d,m,v,E):null;case co:return v.key===M?u(d,m,v,E):null;case Ui:return M=v._init,h(d,m,M(v._payload),E)}if(ws(v)||fs(v))return M!==null?null:c(d,m,v,E,null);Qa(d,v)}return null}function g(d,m,v,E,M){if(typeof E=="string"&&E!==""||typeof E=="number")return d=d.get(v)||null,a(m,d,""+E,M);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Va:return d=d.get(E.key===null?v:E.key)||null,l(m,d,E,M);case co:return d=d.get(E.key===null?v:E.key)||null,u(m,d,E,M);case Ui:var w=E._init;return g(d,m,v,w(E._payload),M)}if(ws(E)||fs(E))return d=d.get(v)||null,c(m,d,E,M,null);Qa(m,E)}return null}function _(d,m,v,E){for(var M=null,w=null,T=m,P=m=0,B=null;T!==null&&P<v.length;P++){T.index>P?(B=T,T=null):B=T.sibling;var y=h(d,T,v[P],E);if(y===null){T===null&&(T=B);break}t&&T&&y.alternate===null&&e(d,T),m=o(y,m,P),w===null?M=y:w.sibling=y,w=y,T=B}if(P===v.length)return n(d,T),ft&&gr(d,P),M;if(T===null){for(;P<v.length;P++)T=f(d,v[P],E),T!==null&&(m=o(T,m,P),w===null?M=T:w.sibling=T,w=T);return ft&&gr(d,P),M}for(T=i(d,T);P<v.length;P++)B=g(T,d,P,v[P],E),B!==null&&(t&&B.alternate!==null&&T.delete(B.key===null?P:B.key),m=o(B,m,P),w===null?M=B:w.sibling=B,w=B);return t&&T.forEach(function(C){return e(d,C)}),ft&&gr(d,P),M}function x(d,m,v,E){var M=fs(v);if(typeof M!="function")throw Error(oe(150));if(v=M.call(v),v==null)throw Error(oe(151));for(var w=M=null,T=m,P=m=0,B=null,y=v.next();T!==null&&!y.done;P++,y=v.next()){T.index>P?(B=T,T=null):B=T.sibling;var C=h(d,T,y.value,E);if(C===null){T===null&&(T=B);break}t&&T&&C.alternate===null&&e(d,T),m=o(C,m,P),w===null?M=C:w.sibling=C,w=C,T=B}if(y.done)return n(d,T),ft&&gr(d,P),M;if(T===null){for(;!y.done;P++,y=v.next())y=f(d,y.value,E),y!==null&&(m=o(y,m,P),w===null?M=y:w.sibling=y,w=y);return ft&&gr(d,P),M}for(T=i(d,T);!y.done;P++,y=v.next())y=g(T,d,P,y.value,E),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?P:y.key),m=o(y,m,P),w===null?M=y:w.sibling=y,w=y);return t&&T.forEach(function(k){return e(d,k)}),ft&&gr(d,P),M}function p(d,m,v,E){if(typeof v=="object"&&v!==null&&v.type===fo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Va:e:{for(var M=v.key,w=m;w!==null;){if(w.key===M){if(M=v.type,M===fo){if(w.tag===7){n(d,w.sibling),m=r(w,v.props.children),m.return=d,d=m;break e}}else if(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ui&&lg(M)===w.type){n(d,w.sibling),m=r(w,v.props),m.ref=vs(d,w,v),m.return=d,d=m;break e}n(d,w);break}else e(d,w);w=w.sibling}v.type===fo?(m=Pr(v.props.children,d.mode,E,v.key),m.return=d,d=m):(E=xl(v.type,v.key,v.props,null,d.mode,E),E.ref=vs(d,m,v),E.return=d,d=E)}return s(d);case co:e:{for(w=v.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(d,m.sibling),m=r(m,v.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else e(d,m);m=m.sibling}m=$c(v,d.mode,E),m.return=d,d=m}return s(d);case Ui:return w=v._init,p(d,m,w(v._payload),E)}if(ws(v))return _(d,m,v,E);if(fs(v))return x(d,m,v,E);Qa(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(d,m.sibling),m=r(m,v),m.return=d,d=m):(n(d,m),m=Wc(v,d.mode,E),m.return=d,d=m),s(d)):n(d,m)}return p}var zo=o_(!0),s_=o_(!1),Gl=rr(null),Wl=null,xo=null,qf=null;function Kf(){qf=xo=Wl=null}function Zf(t){var e=Gl.current;ct(Gl),t._currentValue=e}function Od(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Lo(t,e){Wl=t,qf=xo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(qf!==t)if(t={context:t,memoizedValue:e,next:null},xo===null){if(Wl===null)throw Error(oe(308));xo=t,Wl.dependencies={lanes:0,firstContext:t}}else xo=xo.next=t;return e}var wr=null;function Qf(t){wr===null?wr=[t]:wr.push(t)}function a_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Qf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ti(t,i)}function Ti(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fi=!1;function Jf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function l_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ti(t,n)}return r=i.interleaved,r===null?(e.next=e,Qf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ti(t,n)}function pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,kf(t,n)}}function ug(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $l(t,e,n,i){var r=t.updateQueue;Fi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=r.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,g=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(h=e,g=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){f=_.call(g,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(g,f,h):_,h==null)break e;f=gt({},f,h);break e;case 2:Fi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Ur|=s,t.lanes=s,t.memoizedState=f}}function cg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var aa={},ri=rr(aa),Xs=rr(aa),Ys=rr(aa);function Mr(t){if(t===aa)throw Error(oe(174));return t}function eh(t,e){switch(at(Ys,e),at(Xs,t),at(ri,aa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vd(e,t)}ct(ri),at(ri,e)}function Vo(){ct(ri),ct(Xs),ct(Ys)}function u_(t){Mr(Ys.current);var e=Mr(ri.current),n=vd(e,t.type);e!==n&&(at(Xs,t),at(ri,n))}function th(t){Xs.current===t&&(ct(ri),ct(Xs))}var pt=rr(0);function jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kc=[];function nh(){for(var t=0;t<kc.length;t++)kc[t]._workInProgressVersionPrimary=null;kc.length=0}var ml=Ci.ReactCurrentDispatcher,Bc=Ci.ReactCurrentBatchConfig,Ir=0,mt=null,Ct=null,It=null,Xl=!1,Ls=!1,qs=0,MC=0;function $t(){throw Error(oe(321))}function ih(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function rh(t,e,n,i,r,o){if(Ir=o,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ml.current=t===null||t.memoizedState===null?bC:RC,t=n(i,r),Ls){o=0;do{if(Ls=!1,qs=0,25<=o)throw Error(oe(301));o+=1,It=Ct=null,e.updateQueue=null,ml.current=PC,t=n(i,r)}while(Ls)}if(ml.current=Yl,e=Ct!==null&&Ct.next!==null,Ir=0,It=Ct=mt=null,Xl=!1,e)throw Error(oe(300));return t}function oh(){var t=qs!==0;return qs=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?mt.memoizedState=It=t:It=It.next=t,It}function Un(){if(Ct===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=It===null?mt.memoizedState:It.next;if(e!==null)It=e,Ct=t;else{if(t===null)throw Error(oe(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},It===null?mt.memoizedState=It=t:It=It.next=t}return It}function Ks(t,e){return typeof e=="function"?e(t):e}function zc(t){var e=Un(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Ir&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=i):l=l.next=f,mt.lanes|=c,Ur|=c}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,Yn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,mt.lanes|=o,Ur|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vc(t){var e=Un(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Yn(o,e.memoizedState)||(un=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function c_(){}function d_(t,e){var n=mt,i=Un(),r=e(),o=!Yn(i.memoizedState,r);if(o&&(i.memoizedState=r,un=!0),i=i.queue,sh(p_.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,Zs(9,h_.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(oe(349));Ir&30||f_(n,e,r)}return r}function f_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function h_(t,e,n,i){e.value=n,e.getSnapshot=i,m_(e)&&g_(t)}function p_(t,e,n){return n(function(){m_(e)&&g_(t)})}function m_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function g_(t){var e=Ti(t,1);e!==null&&Xn(e,t,1,-1)}function dg(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ks,lastRenderedState:t},e.queue=t,t=t.dispatch=CC.bind(null,mt,t),[e.memoizedState,t]}function Zs(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function v_(){return Un().memoizedState}function gl(t,e,n,i){var r=Zn();mt.flags|=t,r.memoizedState=Zs(1|e,n,void 0,i===void 0?null:i)}function gu(t,e,n,i){var r=Un();i=i===void 0?null:i;var o=void 0;if(Ct!==null){var s=Ct.memoizedState;if(o=s.destroy,i!==null&&ih(i,s.deps)){r.memoizedState=Zs(e,n,o,i);return}}mt.flags|=t,r.memoizedState=Zs(1|e,n,o,i)}function fg(t,e){return gl(8390656,8,t,e)}function sh(t,e){return gu(2048,8,t,e)}function __(t,e){return gu(4,2,t,e)}function y_(t,e){return gu(4,4,t,e)}function x_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function S_(t,e,n){return n=n!=null?n.concat([t]):null,gu(4,4,x_.bind(null,e,t),n)}function ah(){}function E_(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ih(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function w_(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ih(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function M_(t,e,n){return Ir&21?(Yn(n,e)||(n=R0(),mt.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function TC(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Bc.transition;Bc.transition={};try{t(!1),e()}finally{rt=n,Bc.transition=i}}function T_(){return Un().memoizedState}function AC(t,e,n){var i=Zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},A_(t))C_(e,n);else if(n=a_(t,e,n,i),n!==null){var r=en();Xn(n,t,i,r),b_(n,e,i)}}function CC(t,e,n){var i=Zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(A_(t))C_(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,s)){var l=e.interleaved;l===null?(r.next=r,Qf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=a_(t,e,r,i),n!==null&&(r=en(),Xn(n,t,i,r),b_(n,e,i))}}function A_(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function C_(t,e){Ls=Xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function b_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,kf(t,n)}}var Yl={readContext:In,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},bC={readContext:In,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:fg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gl(4194308,4,x_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return gl(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=AC.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:dg,useDebugValue:ah,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=dg(!1),e=t[0];return t=TC.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=Zn();if(ft){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Ut===null)throw Error(oe(349));Ir&30||f_(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,fg(p_.bind(null,i,o,t),[t]),i.flags|=2048,Zs(9,h_.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Zn(),e=Ut.identifierPrefix;if(ft){var n=xi,i=yi;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=qs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=MC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},RC={readContext:In,useCallback:E_,useContext:In,useEffect:sh,useImperativeHandle:S_,useInsertionEffect:__,useLayoutEffect:y_,useMemo:w_,useReducer:zc,useRef:v_,useState:function(){return zc(Ks)},useDebugValue:ah,useDeferredValue:function(t){var e=Un();return M_(e,Ct.memoizedState,t)},useTransition:function(){var t=zc(Ks)[0],e=Un().memoizedState;return[t,e]},useMutableSource:c_,useSyncExternalStore:d_,useId:T_,unstable_isNewReconciler:!1},PC={readContext:In,useCallback:E_,useContext:In,useEffect:sh,useImperativeHandle:S_,useInsertionEffect:__,useLayoutEffect:y_,useMemo:w_,useReducer:Vc,useRef:v_,useState:function(){return Vc(Ks)},useDebugValue:ah,useDeferredValue:function(t){var e=Un();return Ct===null?e.memoizedState=t:M_(e,Ct.memoizedState,t)},useTransition:function(){var t=Vc(Ks)[0],e=Un().memoizedState;return[t,e]},useMutableSource:c_,useSyncExternalStore:d_,useId:T_,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vu={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=en(),r=Zi(t),o=Si(i,r);o.payload=e,n!=null&&(o.callback=n),e=qi(t,o,r),e!==null&&(Xn(e,t,r,i),pl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=en(),r=Zi(t),o=Si(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=qi(t,o,r),e!==null&&(Xn(e,t,r,i),pl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),i=Zi(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),e=qi(t,r,i),e!==null&&(Xn(e,t,i,n),pl(e,t,i))}};function hg(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Gs(n,i)||!Gs(r,o):!0}function R_(t,e,n){var i=!1,r=nr,o=e.contextType;return typeof o=="object"&&o!==null?o=In(o):(r=hn(e)?Nr:Yt.current,i=e.contextTypes,o=(i=i!=null)?ko(t,r):nr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function pg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&vu.enqueueReplaceState(e,e.state,null)}function Bd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Jf(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=In(o):(o=hn(e)?Nr:Yt.current,r.context=ko(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(kd(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&vu.enqueueReplaceState(r,r.state,null),$l(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ho(t,e){try{var n="",i=e;do n+=rA(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Hc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var LC=typeof WeakMap=="function"?WeakMap:Map;function P_(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Kl||(Kl=!0,Kd=i),zd(t,e)},n}function L_(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){zd(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){zd(t,e),typeof i!="function"&&(Ki===null?Ki=new Set([this]):Ki.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function mg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new LC;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=$C.bind(null,t,e,n),e.then(t,t))}function gg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Si(-1,1),e.tag=2,qi(n,e,1))),n.lanes|=1),t)}var NC=Ci.ReactCurrentOwner,un=!1;function Zt(t,e,n,i){e.child=t===null?s_(e,null,n,i):zo(e,t.child,n,i)}function _g(t,e,n,i,r){n=n.render;var o=e.ref;return Lo(e,r),i=rh(t,e,n,i,o,r),n=oh(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ai(t,e,r)):(ft&&n&&jf(e),e.flags|=1,Zt(t,e,i,r),e.child)}function yg(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!mh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,N_(t,e,o,i,r)):(t=xl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Gs,n(s,i)&&t.ref===e.ref)return Ai(t,e,r)}return e.flags|=1,t=Qi(o,i),t.ref=e.ref,t.return=e,e.child=t}function N_(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Gs(o,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Ai(t,e,r)}return Vd(t,e,n,i,r)}function D_(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(Eo,yn),yn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(Eo,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,at(Eo,yn),yn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,at(Eo,yn),yn|=i;return Zt(t,e,r,n),e.child}function I_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vd(t,e,n,i,r){var o=hn(n)?Nr:Yt.current;return o=ko(e,o),Lo(e,r),n=rh(t,e,n,i,o,r),i=oh(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ai(t,e,r)):(ft&&i&&jf(e),e.flags|=1,Zt(t,e,n,r),e.child)}function xg(t,e,n,i,r){if(hn(n)){var o=!0;zl(e)}else o=!1;if(Lo(e,r),e.stateNode===null)vl(t,e),R_(e,n,i),Bd(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=In(u):(u=hn(n)?Nr:Yt.current,u=ko(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&pg(e,s,i,u),Fi=!1;var h=e.memoizedState;s.state=h,$l(e,i,s,r),l=e.memoizedState,a!==i||h!==l||fn.current||Fi?(typeof c=="function"&&(kd(e,n,c,i),l=e.memoizedState),(a=Fi||hg(e,n,a,i,h,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,l_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Vn(e.type,a),s.props=u,f=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=hn(n)?Nr:Yt.current,l=ko(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&pg(e,s,i,l),Fi=!1,h=e.memoizedState,s.state=h,$l(e,i,s,r);var _=e.memoizedState;a!==f||h!==_||fn.current||Fi?(typeof g=="function"&&(kd(e,n,g,i),_=e.memoizedState),(u=Fi||hg(e,n,u,i,h,_,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),s.props=i,s.state=_,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Hd(t,e,n,i,o,r)}function Hd(t,e,n,i,r,o){I_(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&og(e,n,!1),Ai(t,e,o);i=e.stateNode,NC.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=zo(e,t.child,null,o),e.child=zo(e,null,a,o)):Zt(t,e,a,o),e.memoizedState=i.state,r&&og(e,n,!0),e.child}function U_(t){var e=t.stateNode;e.pendingContext?rg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rg(t,e.context,!1),eh(t,e.containerInfo)}function Sg(t,e,n,i,r){return Bo(),Yf(r),e.flags|=256,Zt(t,e,n,i),e.child}var Gd={dehydrated:null,treeContext:null,retryLane:0};function Wd(t){return{baseLanes:t,cachePool:null,transitions:null}}function F_(t,e,n){var i=e.pendingProps,r=pt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(pt,r&1),t===null)return Fd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=xu(s,i,0,null),t=Pr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Wd(n),e.memoizedState=Gd,t):lh(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return DC(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Qi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Qi(a,o):(o=Pr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Wd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Gd,i}return o=t.child,t=o.sibling,i=Qi(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function lh(t,e){return e=xu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ja(t,e,n,i){return i!==null&&Yf(i),zo(e,t.child,null,n),t=lh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function DC(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Hc(Error(oe(422))),Ja(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=xu({mode:"visible",children:i.children},r,0,null),o=Pr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&zo(e,t.child,null,s),e.child.memoizedState=Wd(s),e.memoizedState=Gd,o);if(!(e.mode&1))return Ja(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(oe(419)),i=Hc(o,i,void 0),Ja(t,e,s,i)}if(a=(s&t.childLanes)!==0,un||a){if(i=Ut,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Ti(t,r),Xn(i,t,r,-1))}return ph(),i=Hc(Error(oe(421))),Ja(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=jC.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Sn=Yi(r.nextSibling),En=e,ft=!0,Gn=null,t!==null&&(bn[Rn++]=yi,bn[Rn++]=xi,bn[Rn++]=Dr,yi=t.id,xi=t.overflow,Dr=e),e=lh(e,i.children),e.flags|=4096,e)}function Eg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Od(t.return,e,n)}function Gc(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function O_(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Zt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Eg(t,n,e);else if(t.tag===19)Eg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&jl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Gc(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&jl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Gc(e,!0,n,null,o);break;case"together":Gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ai(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Qi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function IC(t,e,n){switch(e.tag){case 3:U_(e),Bo();break;case 5:u_(e);break;case 1:hn(e.type)&&zl(e);break;case 4:eh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(Gl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?F_(t,e,n):(at(pt,pt.current&1),t=Ai(t,e,n),t!==null?t.sibling:null);at(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return O_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,D_(t,e,n)}return Ai(t,e,n)}var k_,$d,B_,z_;k_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$d=function(){};B_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Mr(ri.current);var o=null;switch(n){case"input":r=hd(t,r),i=hd(t,i),o=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),o=[];break;case"textarea":r=gd(t,r),i=gd(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=kl)}_d(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&lt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};z_=function(t,e,n,i){n!==i&&(e.flags|=4)};function _s(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function UC(t,e,n){var i=e.pendingProps;switch(Xf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return hn(e.type)&&Bl(),jt(e),null;case 3:return i=e.stateNode,Vo(),ct(fn),ct(Yt),nh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(Jd(Gn),Gn=null))),$d(t,e),jt(e),null;case 5:th(e);var r=Mr(Ys.current);if(n=e.type,t!==null&&e.stateNode!=null)B_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return jt(e),null}if(t=Mr(ri.current),Za(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ei]=e,i[js]=o,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<Ts.length;r++)lt(Ts[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":Lm(i,o),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},lt("invalid",i);break;case"textarea":Dm(i,o),lt("invalid",i)}_d(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ka(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ka(i.textContent,a,t),r=["children",""+a]):Fs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&lt("scroll",i)}switch(n){case"input":Ha(i),Nm(i,o,!0);break;case"textarea":Ha(i),Im(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=kl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=p0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[ei]=e,t[js]=i,k_(t,e,!1,!1),e.stateNode=t;e:{switch(s=yd(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ts.length;r++)lt(Ts[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":Lm(t,i),r=hd(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":Dm(t,i),r=gd(t,i),lt("invalid",t);break;default:r=i}_d(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?v0(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&m0(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Os(t,l):typeof l=="number"&&Os(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Fs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&lt("scroll",t):l!=null&&Nf(t,o,l,s))}switch(n){case"input":Ha(t),Nm(t,i,!1);break;case"textarea":Ha(t),Im(t);break;case"option":i.value!=null&&t.setAttribute("value",""+tr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Co(t,!!i.multiple,o,!1):i.defaultValue!=null&&Co(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)z_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Mr(Ys.current),Mr(ri.current),Za(e)){if(i=e.stateNode,n=e.memoizedProps,i[ei]=e,(o=i.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:Ka(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ka(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return jt(e),null;case 13:if(ct(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&Sn!==null&&e.mode&1&&!(e.flags&128))r_(),Bo(),e.flags|=98560,o=!1;else if(o=Za(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(oe(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(oe(317));o[ei]=e}else Bo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),o=!1}else Gn!==null&&(Jd(Gn),Gn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?bt===0&&(bt=3):ph())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return Vo(),$d(t,e),t===null&&Ws(e.stateNode.containerInfo),jt(e),null;case 10:return Zf(e.type._context),jt(e),null;case 17:return hn(e.type)&&Bl(),jt(e),null;case 19:if(ct(pt),o=e.memoizedState,o===null)return jt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)_s(o,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=jl(t),s!==null){for(e.flags|=128,_s(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(pt,pt.current&1|2),e.child}t=t.sibling}o.tail!==null&&St()>Go&&(e.flags|=128,i=!0,_s(o,!1),e.lanes=4194304)}else{if(!i)if(t=jl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_s(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ft)return jt(e),null}else 2*St()-o.renderingStartTime>Go&&n!==1073741824&&(e.flags|=128,i=!0,_s(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=St(),e.sibling=null,n=pt.current,at(pt,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return hh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function FC(t,e){switch(Xf(e),e.tag){case 1:return hn(e.type)&&Bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vo(),ct(fn),ct(Yt),nh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return th(e),null;case 13:if(ct(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Bo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(pt),null;case 4:return Vo(),null;case 10:return Zf(e.type._context),null;case 22:case 23:return hh(),null;case 24:return null;default:return null}}var el=!1,Xt=!1,OC=typeof WeakSet=="function"?WeakSet:Set,me=null;function So(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function jd(t,e,n){try{n()}catch(i){yt(t,e,i)}}var wg=!1;function kC(t,e){if(Rd=Ul,t=$0(),$f(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(a=s+r),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===t)break t;if(h===n&&++u===r&&(a=s),h===o&&++c===i&&(l=s),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pd={focusedElem:t,selectionRange:n},Ul=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,p=_.memoizedState,d=e.stateNode,m=d.getSnapshotBeforeUpdate(e.elementType===e.type?x:Vn(e.type,x),p);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(E){yt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return _=wg,wg=!1,_}function Ns(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&jd(e,n,o)}r=r.next}while(r!==i)}}function _u(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Xd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function V_(t){var e=t.alternate;e!==null&&(t.alternate=null,V_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ei],delete e[js],delete e[Dd],delete e[xC],delete e[SC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function H_(t){return t.tag===5||t.tag===3||t.tag===4}function Mg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||H_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kl));else if(i!==4&&(t=t.child,t!==null))for(Yd(t,e,n),t=t.sibling;t!==null;)Yd(t,e,n),t=t.sibling}function qd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(qd(t,e,n),t=t.sibling;t!==null;)qd(t,e,n),t=t.sibling}var Ot=null,Hn=!1;function Ii(t,e,n){for(n=n.child;n!==null;)G_(t,e,n),n=n.sibling}function G_(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(cu,n)}catch{}switch(n.tag){case 5:Xt||So(n,e);case 6:var i=Ot,r=Hn;Ot=null,Ii(t,e,n),Ot=i,Hn=r,Ot!==null&&(Hn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(Hn?(t=Ot,n=n.stateNode,t.nodeType===8?Fc(t.parentNode,n):t.nodeType===1&&Fc(t,n),Vs(t)):Fc(Ot,n.stateNode));break;case 4:i=Ot,r=Hn,Ot=n.stateNode.containerInfo,Hn=!0,Ii(t,e,n),Ot=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&jd(n,e,s),r=r.next}while(r!==i)}Ii(t,e,n);break;case 1:if(!Xt&&(So(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){yt(n,e,a)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Ii(t,e,n),Xt=i):Ii(t,e,n);break;default:Ii(t,e,n)}}function Tg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new OC),e.forEach(function(i){var r=XC.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ot=a.stateNode,Hn=!1;break e;case 3:Ot=a.stateNode.containerInfo,Hn=!0;break e;case 4:Ot=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(Ot===null)throw Error(oe(160));G_(o,s,r),Ot=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)W_(e,t),e=e.sibling}function W_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),Kn(t),i&4){try{Ns(3,t,t.return),_u(3,t)}catch(x){yt(t,t.return,x)}try{Ns(5,t,t.return)}catch(x){yt(t,t.return,x)}}break;case 1:Bn(e,t),Kn(t),i&512&&n!==null&&So(n,n.return);break;case 5:if(Bn(e,t),Kn(t),i&512&&n!==null&&So(n,n.return),t.flags&32){var r=t.stateNode;try{Os(r,"")}catch(x){yt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&f0(r,o),yd(a,s);var u=yd(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?v0(r,f):c==="dangerouslySetInnerHTML"?m0(r,f):c==="children"?Os(r,f):Nf(r,c,f,u)}switch(a){case"input":pd(r,o);break;case"textarea":h0(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Co(r,!!o.multiple,g,!1):h!==!!o.multiple&&(o.defaultValue!=null?Co(r,!!o.multiple,o.defaultValue,!0):Co(r,!!o.multiple,o.multiple?[]:"",!1))}r[js]=o}catch(x){yt(t,t.return,x)}}break;case 6:if(Bn(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(x){yt(t,t.return,x)}}break;case 3:if(Bn(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Vs(e.containerInfo)}catch(x){yt(t,t.return,x)}break;case 4:Bn(e,t),Kn(t);break;case 13:Bn(e,t),Kn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(dh=St())),i&4&&Tg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(u=Xt)||c,Bn(e,t),Xt=u):Bn(e,t),Kn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(me=t,c=t.child;c!==null;){for(f=me=c;me!==null;){switch(h=me,g=h.child,h.tag){case 0:case 11:case 14:case 15:Ns(4,h,h.return);break;case 1:So(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){yt(i,n,x)}}break;case 5:So(h,h.return);break;case 22:if(h.memoizedState!==null){Cg(f);continue}}g!==null?(g.return=h,me=g):Cg(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=g0("display",s))}catch(x){yt(t,t.return,x)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){yt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Bn(e,t),Kn(t),i&4&&Tg(t);break;case 21:break;default:Bn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(H_(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Os(r,""),i.flags&=-33);var o=Mg(t);qd(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Mg(t);Yd(t,a,s);break;default:throw Error(oe(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function BC(t,e,n){me=t,$_(t)}function $_(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||el;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=el;var u=Xt;if(el=s,(Xt=l)&&!u)for(me=r;me!==null;)s=me,l=s.child,s.tag===22&&s.memoizedState!==null?bg(r):l!==null?(l.return=s,me=l):bg(r);for(;o!==null;)me=o,$_(o),o=o.sibling;me=r,el=a,Xt=u}Ag(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,me=o):Ag(t)}}function Ag(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||_u(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&cg(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cg(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Vs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Xt||e.flags&512&&Xd(e)}catch(h){yt(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Cg(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function bg(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_u(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var o=e.return;try{Xd(e)}catch(l){yt(e,o,l)}break;case 5:var s=e.return;try{Xd(e)}catch(l){yt(e,s,l)}}}catch(l){yt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var zC=Math.ceil,ql=Ci.ReactCurrentDispatcher,uh=Ci.ReactCurrentOwner,Dn=Ci.ReactCurrentBatchConfig,Qe=0,Ut=null,Mt=null,Bt=0,yn=0,Eo=rr(0),bt=0,Qs=null,Ur=0,yu=0,ch=0,Ds=null,ln=null,dh=0,Go=1/0,pi=null,Kl=!1,Kd=null,Ki=null,tl=!1,Vi=null,Zl=0,Is=0,Zd=null,_l=-1,yl=0;function en(){return Qe&6?St():_l!==-1?_l:_l=St()}function Zi(t){return t.mode&1?Qe&2&&Bt!==0?Bt&-Bt:wC.transition!==null?(yl===0&&(yl=R0()),yl):(t=rt,t!==0||(t=window.event,t=t===void 0?16:F0(t.type)),t):1}function Xn(t,e,n,i){if(50<Is)throw Is=0,Zd=null,Error(oe(185));ra(t,n,i),(!(Qe&2)||t!==Ut)&&(t===Ut&&(!(Qe&2)&&(yu|=n),bt===4&&ki(t,Bt)),pn(t,i),n===1&&Qe===0&&!(e.mode&1)&&(Go=St()+500,mu&&or()))}function pn(t,e){var n=t.callbackNode;wA(t,e);var i=Il(t,t===Ut?Bt:0);if(i===0)n!==null&&Om(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Om(n),e===1)t.tag===0?EC(Rg.bind(null,t)):t_(Rg.bind(null,t)),_C(function(){!(Qe&6)&&or()}),n=null;else{switch(P0(i)){case 1:n=Of;break;case 4:n=C0;break;case 16:n=Dl;break;case 536870912:n=b0;break;default:n=Dl}n=J_(n,j_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function j_(t,e){if(_l=-1,yl=0,Qe&6)throw Error(oe(327));var n=t.callbackNode;if(No()&&t.callbackNode!==n)return null;var i=Il(t,t===Ut?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ql(t,i);else{e=i;var r=Qe;Qe|=2;var o=Y_();(Ut!==t||Bt!==e)&&(pi=null,Go=St()+500,Rr(t,e));do try{GC();break}catch(a){X_(t,a)}while(!0);Kf(),ql.current=o,Qe=r,Mt!==null?e=0:(Ut=null,Bt=0,e=bt)}if(e!==0){if(e===2&&(r=Md(t),r!==0&&(i=r,e=Qd(t,r))),e===1)throw n=Qs,Rr(t,0),ki(t,i),pn(t,St()),n;if(e===6)ki(t,i);else{if(r=t.current.alternate,!(i&30)&&!VC(r)&&(e=Ql(t,i),e===2&&(o=Md(t),o!==0&&(i=o,e=Qd(t,o))),e===1))throw n=Qs,Rr(t,0),ki(t,i),pn(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:vr(t,ln,pi);break;case 3:if(ki(t,i),(i&130023424)===i&&(e=dh+500-St(),10<e)){if(Il(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){en(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Nd(vr.bind(null,t,ln,pi),e);break}vr(t,ln,pi);break;case 4:if(ki(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-jn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*zC(i/1960))-i,10<i){t.timeoutHandle=Nd(vr.bind(null,t,ln,pi),i);break}vr(t,ln,pi);break;case 5:vr(t,ln,pi);break;default:throw Error(oe(329))}}}return pn(t,St()),t.callbackNode===n?j_.bind(null,t):null}function Qd(t,e){var n=Ds;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=Ql(t,e),t!==2&&(e=ln,ln=n,e!==null&&Jd(e)),t}function Jd(t){ln===null?ln=t:ln.push.apply(ln,t)}function VC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Yn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ki(t,e){for(e&=~ch,e&=~yu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function Rg(t){if(Qe&6)throw Error(oe(327));No();var e=Il(t,0);if(!(e&1))return pn(t,St()),null;var n=Ql(t,e);if(t.tag!==0&&n===2){var i=Md(t);i!==0&&(e=i,n=Qd(t,i))}if(n===1)throw n=Qs,Rr(t,0),ki(t,e),pn(t,St()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,ln,pi),pn(t,St()),null}function fh(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(Go=St()+500,mu&&or())}}function Fr(t){Vi!==null&&Vi.tag===0&&!(Qe&6)&&No();var e=Qe;Qe|=1;var n=Dn.transition,i=rt;try{if(Dn.transition=null,rt=1,t)return t()}finally{rt=i,Dn.transition=n,Qe=e,!(Qe&6)&&or()}}function hh(){yn=Eo.current,ct(Eo)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vC(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(Xf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Bl();break;case 3:Vo(),ct(fn),ct(Yt),nh();break;case 5:th(i);break;case 4:Vo();break;case 13:ct(pt);break;case 19:ct(pt);break;case 10:Zf(i.type._context);break;case 22:case 23:hh()}n=n.return}if(Ut=t,Mt=t=Qi(t.current,null),Bt=yn=e,bt=0,Qs=null,ch=yu=Ur=0,ln=Ds=null,wr!==null){for(e=0;e<wr.length;e++)if(n=wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}wr=null}return t}function X_(t,e){do{var n=Mt;try{if(Kf(),ml.current=Yl,Xl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Xl=!1}if(Ir=0,It=Ct=mt=null,Ls=!1,qs=0,uh.current=null,n===null||n.return===null){bt=1,Qs=e,Mt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=gg(s);if(g!==null){g.flags&=-257,vg(g,s,a,o,e),g.mode&1&&mg(o,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){mg(o,u,e),ph();break e}l=Error(oe(426))}}else if(ft&&a.mode&1){var p=gg(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),vg(p,s,a,o,e),Yf(Ho(l,a));break e}}o=l=Ho(l,a),bt!==4&&(bt=2),Ds===null?Ds=[o]:Ds.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var d=P_(o,l,e);ug(o,d);break e;case 1:a=l;var m=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ki===null||!Ki.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var E=L_(o,a,e);ug(o,E);break e}}o=o.return}while(o!==null)}K_(n)}catch(M){e=M,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function Y_(){var t=ql.current;return ql.current=Yl,t===null?Yl:t}function ph(){(bt===0||bt===3||bt===2)&&(bt=4),Ut===null||!(Ur&268435455)&&!(yu&268435455)||ki(Ut,Bt)}function Ql(t,e){var n=Qe;Qe|=2;var i=Y_();(Ut!==t||Bt!==e)&&(pi=null,Rr(t,e));do try{HC();break}catch(r){X_(t,r)}while(!0);if(Kf(),Qe=n,ql.current=i,Mt!==null)throw Error(oe(261));return Ut=null,Bt=0,bt}function HC(){for(;Mt!==null;)q_(Mt)}function GC(){for(;Mt!==null&&!pA();)q_(Mt)}function q_(t){var e=Q_(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?K_(t):Mt=e,uh.current=null}function K_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=FC(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,Mt=null;return}}else if(n=UC(n,e,yn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);bt===0&&(bt=5)}function vr(t,e,n){var i=rt,r=Dn.transition;try{Dn.transition=null,rt=1,WC(t,e,n,i)}finally{Dn.transition=r,rt=i}return null}function WC(t,e,n,i){do No();while(Vi!==null);if(Qe&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(MA(t,o),t===Ut&&(Mt=Ut=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=!0,J_(Dl,function(){return No(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Dn.transition,Dn.transition=null;var s=rt;rt=1;var a=Qe;Qe|=4,uh.current=null,kC(t,n),W_(n,t),cC(Pd),Ul=!!Rd,Pd=Rd=null,t.current=n,BC(n),mA(),Qe=a,rt=s,Dn.transition=o}else t.current=n;if(tl&&(tl=!1,Vi=t,Zl=r),o=t.pendingLanes,o===0&&(Ki=null),_A(n.stateNode),pn(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Kl)throw Kl=!1,t=Kd,Kd=null,t;return Zl&1&&t.tag!==0&&No(),o=t.pendingLanes,o&1?t===Zd?Is++:(Is=0,Zd=t):Is=0,or(),null}function No(){if(Vi!==null){var t=P0(Zl),e=Dn.transition,n=rt;try{if(Dn.transition=null,rt=16>t?16:t,Vi===null)var i=!1;else{if(t=Vi,Vi=null,Zl=0,Qe&6)throw Error(oe(331));var r=Qe;for(Qe|=4,me=t.current;me!==null;){var o=me,s=o.child;if(me.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(me=u;me!==null;){var c=me;switch(c.tag){case 0:case 11:case 15:Ns(8,c,o)}var f=c.child;if(f!==null)f.return=c,me=f;else for(;me!==null;){c=me;var h=c.sibling,g=c.return;if(V_(c),c===u){me=null;break}if(h!==null){h.return=g,me=h;break}me=g}}}var _=o.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}me=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,me=s;else e:for(;me!==null;){if(o=me,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ns(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,me=d;break e}me=o.return}}var m=t.current;for(me=m;me!==null;){s=me;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,me=v;else e:for(s=m;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_u(9,a)}}catch(M){yt(a,a.return,M)}if(a===s){me=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,me=E;break e}me=a.return}}if(Qe=r,or(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(cu,t)}catch{}i=!0}return i}finally{rt=n,Dn.transition=e}}return!1}function Pg(t,e,n){e=Ho(n,e),e=P_(t,e,1),t=qi(t,e,1),e=en(),t!==null&&(ra(t,1,e),pn(t,e))}function yt(t,e,n){if(t.tag===3)Pg(t,t,n);else for(;e!==null;){if(e.tag===3){Pg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ki===null||!Ki.has(i))){t=Ho(n,t),t=L_(e,t,1),e=qi(e,t,1),t=en(),e!==null&&(ra(e,1,t),pn(e,t));break}}e=e.return}}function $C(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(Bt&n)===n&&(bt===4||bt===3&&(Bt&130023424)===Bt&&500>St()-dh?Rr(t,0):ch|=n),pn(t,e)}function Z_(t,e){e===0&&(t.mode&1?(e=$a,$a<<=1,!($a&130023424)&&($a=4194304)):e=1);var n=en();t=Ti(t,e),t!==null&&(ra(t,e,n),pn(t,n))}function jC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Z_(t,n)}function XC(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),Z_(t,n)}var Q_;Q_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,IC(t,e,n);un=!!(t.flags&131072)}else un=!1,ft&&e.flags&1048576&&n_(e,Hl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;vl(t,e),t=e.pendingProps;var r=ko(e,Yt.current);Lo(e,n),r=rh(null,e,i,t,r,n);var o=oh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(o=!0,zl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Jf(e),r.updater=vu,e.stateNode=r,r._reactInternals=e,Bd(e,i,t,n),e=Hd(null,e,i,!0,o,n)):(e.tag=0,ft&&o&&jf(e),Zt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(vl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=qC(i),t=Vn(i,t),r){case 0:e=Vd(null,e,i,t,n);break e;case 1:e=xg(null,e,i,t,n);break e;case 11:e=_g(null,e,i,t,n);break e;case 14:e=yg(null,e,i,Vn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Vd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),xg(t,e,i,r,n);case 3:e:{if(U_(e),t===null)throw Error(oe(387));i=e.pendingProps,o=e.memoizedState,r=o.element,l_(t,e),$l(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Ho(Error(oe(423)),e),e=Sg(t,e,i,n,r);break e}else if(i!==r){r=Ho(Error(oe(424)),e),e=Sg(t,e,i,n,r);break e}else for(Sn=Yi(e.stateNode.containerInfo.firstChild),En=e,ft=!0,Gn=null,n=s_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bo(),i===r){e=Ai(t,e,n);break e}Zt(t,e,i,n)}e=e.child}return e;case 5:return u_(e),t===null&&Fd(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Ld(i,r)?s=null:o!==null&&Ld(i,o)&&(e.flags|=32),I_(t,e),Zt(t,e,s,n),e.child;case 6:return t===null&&Fd(e),null;case 13:return F_(t,e,n);case 4:return eh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zo(e,null,i,n):Zt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),_g(t,e,i,r,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,at(Gl,i._currentValue),i._currentValue=s,o!==null)if(Yn(o.value,s)){if(o.children===r.children&&!fn.current){e=Ai(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Si(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Od(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(oe(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Od(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Zt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Lo(e,n),r=In(r),i=i(r),e.flags|=1,Zt(t,e,i,n),e.child;case 14:return i=e.type,r=Vn(i,e.pendingProps),r=Vn(i.type,r),yg(t,e,i,r,n);case 15:return N_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),vl(t,e),e.tag=1,hn(i)?(t=!0,zl(e)):t=!1,Lo(e,n),R_(e,i,r),Bd(e,i,r,n),Hd(null,e,i,!0,t,n);case 19:return O_(t,e,n);case 22:return D_(t,e,n)}throw Error(oe(156,e.tag))};function J_(t,e){return A0(t,e)}function YC(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new YC(t,e,n,i)}function mh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qC(t){if(typeof t=="function")return mh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===If)return 11;if(t===Uf)return 14}return 2}function Qi(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")mh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case fo:return Pr(n.children,r,o,e);case Df:s=8,r|=8;break;case ud:return t=Ln(12,n,e,r|2),t.elementType=ud,t.lanes=o,t;case cd:return t=Ln(13,n,e,r),t.elementType=cd,t.lanes=o,t;case dd:return t=Ln(19,n,e,r),t.elementType=dd,t.lanes=o,t;case u0:return xu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case a0:s=10;break e;case l0:s=9;break e;case If:s=11;break e;case Uf:s=14;break e;case Ui:s=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Ln(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Pr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function xu(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=u0,t.lanes=n,t.stateNode={isHidden:!1},t}function Wc(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function $c(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function KC(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tc(0),this.expirationTimes=Tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function gh(t,e,n,i,r,o,s,a,l){return t=new KC(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ln(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jf(o),t}function ZC(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:co,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ey(t){if(!t)return nr;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(hn(n))return e_(t,n,e)}return e}function ty(t,e,n,i,r,o,s,a,l){return t=gh(n,i,!0,t,r,o,s,a,l),t.context=ey(null),n=t.current,i=en(),r=Zi(n),o=Si(i,r),o.callback=e??null,qi(n,o,r),t.current.lanes=r,ra(t,r,i),pn(t,i),t}function Su(t,e,n,i){var r=e.current,o=en(),s=Zi(r);return n=ey(n),e.context===null?e.context=n:e.pendingContext=n,e=Si(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=qi(r,e,s),t!==null&&(Xn(t,r,s,o),pl(t,r,s)),s}function Jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vh(t,e){Lg(t,e),(t=t.alternate)&&Lg(t,e)}function QC(){return null}var ny=typeof reportError=="function"?reportError:function(t){console.error(t)};function _h(t){this._internalRoot=t}Eu.prototype.render=_h.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Su(t,e,null,null)};Eu.prototype.unmount=_h.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fr(function(){Su(null,t,null,null)}),e[Mi]=null}};function Eu(t){this._internalRoot=t}Eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=D0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Oi.length&&e!==0&&e<Oi[n].priority;n++);Oi.splice(n,0,t),n===0&&U0(t)}};function yh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ng(){}function JC(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=Jl(s);o.call(u)}}var s=ty(e,i,t,0,null,!1,!1,"",Ng);return t._reactRootContainer=s,t[Mi]=s.current,Ws(t.nodeType===8?t.parentNode:t),Fr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Jl(l);a.call(u)}}var l=gh(t,0,!1,null,null,!1,!1,"",Ng);return t._reactRootContainer=l,t[Mi]=l.current,Ws(t.nodeType===8?t.parentNode:t),Fr(function(){Su(e,l,n,i)}),l}function Mu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=Jl(s);a.call(l)}}Su(e,s,t,r)}else s=JC(n,e,t,r,i);return Jl(s)}L0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ms(e.pendingLanes);n!==0&&(kf(e,n|1),pn(e,St()),!(Qe&6)&&(Go=St()+500,or()))}break;case 13:Fr(function(){var i=Ti(t,1);if(i!==null){var r=en();Xn(i,t,1,r)}}),vh(t,1)}};Bf=function(t){if(t.tag===13){var e=Ti(t,134217728);if(e!==null){var n=en();Xn(e,t,134217728,n)}vh(t,134217728)}};N0=function(t){if(t.tag===13){var e=Zi(t),n=Ti(t,e);if(n!==null){var i=en();Xn(n,t,e,i)}vh(t,e)}};D0=function(){return rt};I0=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Sd=function(t,e,n){switch(e){case"input":if(pd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=pu(i);if(!r)throw Error(oe(90));d0(i),pd(i,r)}}}break;case"textarea":h0(t,n);break;case"select":e=n.value,e!=null&&Co(t,!!n.multiple,e,!1)}};x0=fh;S0=Fr;var eb={usingClientEntryPoint:!1,Events:[sa,go,pu,_0,y0,fh]},ys={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tb={bundleType:ys.bundleType,version:ys.version,rendererPackageName:ys.rendererPackageName,rendererConfig:ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ci.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=M0(t),t===null?null:t.stateNode},findFiberByHostInstance:ys.findFiberByHostInstance||QC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{cu=nl.inject(tb),ii=nl}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eb;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yh(e))throw Error(oe(200));return ZC(t,e,null,n)};Mn.createRoot=function(t,e){if(!yh(t))throw Error(oe(299));var n=!1,i="",r=ny;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=gh(t,1,!1,null,null,n,!1,i,r),t[Mi]=e.current,Ws(t.nodeType===8?t.parentNode:t),new _h(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=M0(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return Fr(t)};Mn.hydrate=function(t,e,n){if(!wu(e))throw Error(oe(200));return Mu(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!yh(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=ny;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=ty(e,null,t,1,n??null,r,!1,o,s),t[Mi]=e.current,Ws(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Eu(e)};Mn.render=function(t,e,n){if(!wu(e))throw Error(oe(200));return Mu(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!wu(t))throw Error(oe(40));return t._reactRootContainer?(Fr(function(){Mu(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1};Mn.unstable_batchedUpdates=fh;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!wu(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Mu(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function iy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iy)}catch(t){console.error(t)}}iy(),Yv.exports=Mn;var ef=Yv.exports,ry,Dg=ef;ry=Dg.createRoot,Dg.hydrateRoot;var oy={exports:{}},Tu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nb=S,ib=Symbol.for("react.element"),rb=Symbol.for("react.fragment"),ob=Object.prototype.hasOwnProperty,sb=nb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ab={key:!0,ref:!0,__self:!0,__source:!0};function sy(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)ob.call(e,i)&&!ab.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ib,type:t,key:o,ref:s,props:r,_owner:sb.current}}Tu.Fragment=rb;Tu.jsx=sy;Tu.jsxs=sy;oy.exports=Tu;var F=oy.exports,lb=Object.defineProperty,ay=(t,e)=>{for(var n in e)lb(t,n,{get:e[n],enumerable:!0,configurable:!0,set:i=>e[n]=()=>i})};if(typeof S.createContext!="function"){const t=['Remotion requires React.createContext, but it is "undefined".','If you are in a React Server Component, turn it into a client component by adding "use client" at the top of the file.',"","Before:",'  import {useCurrentFrame} from "remotion";',"","After:",'  "use client";','  import {useCurrentFrame} from "remotion";'];throw new Error(t.join(`
`))}function Ig(){return["NOD","E_EN","V"].join("")}var Ug=()=>["e","nv"].join(""),Lt=()=>{const t=typeof window<"u"&&window.remotion_isPlayer,e=typeof window<"u"&&typeof window.process<"u"&&typeof window.process.env<"u"&&(window.process[Ug()][Ig()]==="test"||window.process[Ug()][Ig()]==="production"&&typeof window<"u"&&typeof window.remotion_puppeteerTimeout<"u");return{isStudio:typeof window<"u"&&window.remotion_isStudio,isRendering:e,isPlayer:t}},ub=Ke.createElement,ly=[],uy=()=>{if(!Lt().isStudio)return;const t=new Proxy(ub,{apply(e,n,i){if(ly.includes(i[0])){const[r,o,...s]=i,a={...o??{},stack:new Error().stack};return Reflect.apply(e,n,[r,a,...s])}return Reflect.apply(e,n,i)}});Ke.createElement=t},la=t=>{ly.push(t),uy()},cy=S.createContext(!1),cb=({children:t})=>F.jsx(cy.Provider,{value:!0,children:t}),xh=()=>S.useContext(cy);function Sh(t){return!!t}var il="4.0.230",db=()=>{if(typeof globalThis>"u")return;const t=globalThis.remotion_imported||typeof window<"u"&&window.remotion_imported;if(t){if(t===il)return;throw new TypeError(`🚨 Multiple versions of Remotion detected: ${[il,typeof t=="string"?t:"an older version"].filter(Sh).join(" and ")}. This will cause things to break in an unexpected way.
Check that all your Remotion packages are on the same version. If your dependencies depend on Remotion, make them peer dependencies. You can also run \`npx remotion versions\` from your terminal to see which versions are mismatching.`)}globalThis.remotion_imported=il,typeof window<"u"&&(window.remotion_imported=il)},fb=(t,e)=>{const{style:n,...i}=t,r=S.useMemo(()=>({position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%",height:"100%",display:"flex",flexDirection:"column",...n}),[n]);return F.jsx("div",{ref:e,style:r,...i})},Eh=S.forwardRef(fb),tn=S.createContext(null),Ko=Ke.createContext({registerSequence:()=>{throw new Error("SequenceManagerContext not initialized")},unregisterSequence:()=>{throw new Error("SequenceManagerContext not initialized")},sequences:[]}),ua=Ke.createContext({hidden:{},setHidden:()=>{throw new Error("SequenceVisibilityToggle not initialized")}}),hb=({children:t})=>{const[e,n]=S.useState([]),[i,r]=S.useState({}),o=S.useCallback(u=>{n(c=>[...c,u])},[]),s=S.useCallback(u=>{n(c=>c.filter(f=>f.id!==u))},[]),a=S.useMemo(()=>({registerSequence:o,sequences:e,unregisterSequence:s}),[o,e,s]),l=S.useMemo(()=>({hidden:i,setHidden:r}),[i]);return F.jsx(Ko.Provider,{value:a,children:F.jsx(ua.Provider,{value:l,children:t})})},Zo=S.createContext({getNonce:()=>0,fastRefreshes:0}),wh=()=>{const t=S.useContext(Zo),[e,n]=S.useState(()=>t.getNonce()),i=S.useRef(t);return S.useEffect(()=>{i.current!==t&&(i.current=t,n(t.getNonce))},[t]),e},dy={};ay(dy,{useTimelineSetFrame:()=>Ty,useTimelinePosition:()=>Jo,usePlayingState:()=>Ch,persistCurrentFrame:()=>Ey,getInitialFrameState:()=>wy,getFrameForComposition:()=>My,TimelineContext:()=>qn,SetTimelineContext:()=>Qo});var sr=S.createContext({compositions:[],registerComposition:()=>{},unregisterComposition:()=>{},registerFolder:()=>{},unregisterFolder:()=>{},setCurrentCompositionMetadata:()=>{},updateCompositionDefaultProps:()=>{},folders:[],currentCompositionMetadata:null,canvasContent:null,setCanvasContent:()=>{}}),Au=S.createContext({props:{},updateProps:()=>{throw new Error("Not implemented")},resetUnsaved:()=>{throw new Error("Not implemented")}}),fy=Ke.createRef(),hy=({children:t})=>{const[e,n]=Ke.useState({}),i=S.useCallback(({defaultProps:s,id:a,newProps:l})=>{n(u=>({...u,[a]:typeof l=="function"?l(u[a]??s):l}))},[]),r=S.useCallback(()=>{n({})},[]);S.useImperativeHandle(fy,()=>({getProps:()=>e,setProps:n}),[e]);const o=S.useMemo(()=>({props:e,updateProps:i,resetUnsaved:r}),[e,r,i]);return F.jsx(Au.Provider,{value:o,children:t})},pb={"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";"},Fg={},mb=t=>{Fg[t]||(console.warn(t),Fg[t]=!0)},gb=t=>{for(const e of Object.keys(pb))if(t.includes(e))return{containsHex:!0,hexCode:e};return{containsHex:!1}},tf=t=>t.startsWith("/")?tf(t.substring(1)):t,vb=t=>{if(typeof window<"u"&&window.remotion_staticBase){if(t.startsWith(window.remotion_staticBase))throw new Error(`The value "${t}" is already prefixed with the static base ${window.remotion_staticBase}. You don't need to call staticFile() on it.`);return`${window.remotion_staticBase}/${tf(t)}`}return`/${tf(t)}`},_b=t=>t.split("/").map(r=>encodeURIComponent(r)).join("/"),yb=t=>{if(t===null)throw new TypeError("null was passed to staticFile()");if(typeof t>"u")throw new TypeError("undefined was passed to staticFile()");if(t.startsWith("http://")||t.startsWith("https://"))throw new TypeError(`staticFile() does not support remote URLs - got "${t}". Instead, pass the URL without wrapping it in staticFile(). See: https://remotion.dev/docs/staticfile-remote-urls`);if(t.startsWith("..")||t.startsWith("./"))throw new TypeError(`staticFile() does not support relative paths - got "${t}". Instead, pass the name of a file that is inside the public/ folder. See: https://remotion.dev/docs/staticfile-relative-paths`);if(t.startsWith("/Users")||t.startsWith("/home")||t.startsWith("/tmp")||t.startsWith("/etc")||t.startsWith("/opt")||t.startsWith("/var")||t.startsWith("C:")||t.startsWith("D:")||t.startsWith("E:"))throw new TypeError(`staticFile() does not support absolute paths - got "${t}". Instead, pass the name of a file that is inside the public/ folder. See: https://remotion.dev/docs/staticfile-relative-paths`);if(t.startsWith("public/"))throw new TypeError(`Do not include the public/ prefix when using staticFile() - got "${t}". See: https://remotion.dev/docs/staticfile-relative-paths`);const e=gb(t);e.containsHex&&mb(`WARNING: You seem to pass an already encoded path (path contains ${e.hexCode}). Since Remotion 4.0, the encoding is done by staticFile() itself. You may want to remove a encodeURIComponent() wrapping.`);const n=_b(t),i=vb(n);return i.startsWith("/")?i:`/${i}`},nf="remotion-date:",rf="remotion-file:",xb=({data:t,indent:e,staticBase:n})=>{let i=!1,r=!1,o=!1,s=!1;try{return{serializedString:JSON.stringify(t,function(l,u){const c=this[l];return c instanceof Date?(i=!0,`${nf}${c.toISOString()}`):c instanceof Map?(o=!0,u):c instanceof Set?(s=!0,u):typeof c=="string"&&n!==null&&c.startsWith(n)?(r=!0,`${rf}${c.replace(n+"/","")}`):u},e),customDateUsed:i,customFileUsed:r,mapUsed:o,setUsed:s}}catch(a){throw new Error("Could not serialize the passed input props to JSON: "+a.message)}},py=t=>JSON.parse(t,(e,n)=>typeof n=="string"&&n.startsWith(nf)?new Date(n.replace(nf,"")):typeof n=="string"&&n.startsWith(rf)?yb(n.replace(rf,"")):n),_r=t=>Lt().isStudio?py(xb({data:t,indent:2,staticBase:window.remotion_staticBase}).serializedString):t,Og=!1,Sb=()=>{Og||(Og=!0,console.warn("Called `getInputProps()` on the server. This function is not available server-side and has returned an empty object."),console.warn("To hide this warning, don't call this function on the server:"),console.warn("  typeof window === 'undefined' ? {} : getInputProps()"))},my=()=>{if(typeof window>"u")return Sb(),{};if(Lt().isPlayer)throw new Error("You cannot call `getInputProps()` from a <Player>. Instead, the props are available as React props from component that you passed as `component` prop.");const t=window.remotion_inputProps;return t?py(t):{}},kg=["h264","h265","vp8","vp9","mp3","aac","wav","prores","h264-mkv","h264-ts","gif"];function Eb(t,e){if(!(typeof t>"u")){if(typeof t!="string")throw new TypeError(`The "defaultCodec" prop ${e} must be a string, but you passed a value of type ${typeof t}.`);if(!kg.includes(t))throw new Error(`The "defaultCodec" prop ${e} must be one of ${kg.join(", ")}, but you passed ${t}.`)}}function eu(t,e,n){if(typeof t!="number")throw new Error(`The "${e}" prop ${n} must be a number, but you passed a value of type ${typeof t}`);if(isNaN(t))throw new TypeError(`The "${e}" prop ${n} must not be NaN, but is NaN.`);if(!Number.isFinite(t))throw new TypeError(`The "${e}" prop ${n} must be finite, but is ${t}.`);if(t%1!==0)throw new TypeError(`The "${e}" prop ${n} must be an integer, but is ${t}.`);if(t<=0)throw new TypeError(`The "${e}" prop ${n} must be positive, but got ${t}.`)}function Mh(t,e){const{allowFloats:n,component:i}=e;if(typeof t>"u")throw new Error(`The "durationInFrames" prop ${i} is missing.`);if(typeof t!="number")throw new Error(`The "durationInFrames" prop ${i} must be a number, but you passed a value of type ${typeof t}`);if(t<=0)throw new TypeError(`The "durationInFrames" prop ${i} must be positive, but got ${t}.`);if(!n&&t%1!==0)throw new TypeError(`The "durationInFrames" prop ${i} must be an integer, but got ${t}.`);if(!Number.isFinite(t))throw new TypeError(`The "durationInFrames" prop ${i} must be finite, but got ${t}.`)}function gy(t,e,n){if(typeof t!="number")throw new Error(`"fps" must be a number, but you passed a value of type ${typeof t} ${e}`);if(!Number.isFinite(t))throw new Error(`"fps" must be a finite, but you passed ${t} ${e}`);if(isNaN(t))throw new Error(`"fps" must not be NaN, but got ${t} ${e}`);if(t<=0)throw new TypeError(`"fps" must be positive, but got ${t} ${e}`)}var Bg=({calculated:t,compositionId:e,compositionFps:n,compositionHeight:i,compositionWidth:r,compositionDurationInFrames:o})=>{const s=`calculated by calculateMetadata() for the composition "${e}"`,a=`of the "<Composition />" component with the id "${e}"`,l=(t==null?void 0:t.width)??r??void 0;eu(l,"width",t!=null&&t.width?s:a);const u=(t==null?void 0:t.height)??i??void 0;eu(u,"height",t!=null&&t.height?s:a);const c=(t==null?void 0:t.fps)??n??null;gy(c,t!=null&&t.fps?s:a);const f=(t==null?void 0:t.durationInFrames)??o??null;Mh(f,{allowFloats:!1,component:`of the "<Composition />" component with the id "${e}"`});const h=t==null?void 0:t.defaultCodec;return Eb(h,s),{width:l,height:u,fps:c,durationInFrames:f,defaultCodec:h}},vy=({calculateMetadata:t,signal:e,defaultProps:n,originalProps:i,compositionId:r,compositionDurationInFrames:o,compositionFps:s,compositionHeight:a,compositionWidth:l})=>{const u=t?t({defaultProps:n,props:i,abortSignal:e,compositionId:r}):null;if(u!==null&&typeof u=="object"&&"then"in u)return u.then(f=>{const{height:h,width:g,durationInFrames:_,fps:x,defaultCodec:p}=Bg({calculated:f,compositionDurationInFrames:o,compositionFps:s,compositionHeight:a,compositionWidth:l,compositionId:r});return{width:g,height:h,fps:x,durationInFrames:_,id:r,defaultProps:_r(n),props:_r(f.props??i),defaultCodec:p??null}});const c=Bg({calculated:u,compositionDurationInFrames:o,compositionFps:s,compositionHeight:a,compositionWidth:l,compositionId:r});return u===null?{...c,id:r,defaultProps:_r(n??{}),props:_r(i),defaultCodec:null}:{...c,id:r,defaultProps:_r(n??{}),props:_r(u.props??i),defaultCodec:u.defaultCodec??null}},wb=t=>{try{return{type:"success",result:vy(t)}}catch(e){return{type:"error",error:e}}},Cu=S.createContext(null),_y=S.createRef(),yy=t=>!!t.calculateMetadata,xy="remotion.propsUpdatedExternally",Sy=({children:t})=>{const[e,n]=S.useState(null),{compositions:i,canvasContent:r,currentCompositionMetadata:o}=S.useContext(sr),{fastRefreshes:s}=S.useContext(Zo),a=S.useMemo(()=>i.find(P=>r&&r.type==="composition"&&r.compositionId===P.id),[r,i]),l=i.find(P=>P.id===e),{props:u}=S.useContext(Au),c=S.useMemo(()=>typeof window>"u"||Lt().isPlayer?{}:my()??{},[]),[f,h]=S.useState({}),g=S.useMemo(()=>a?u[a.id]??{}:{},[u,a]),_=S.useMemo(()=>l?u[l.id]??{}:{},[u,l]),x=!!o,p=S.useCallback(({calculateMetadata:P,combinedProps:B,compositionDurationInFrames:y,compositionFps:C,compositionHeight:k,compositionId:z,compositionWidth:N,defaultProps:G})=>{const U=new AbortController;if(x)return U;const{signal:Z}=U,I=wb({compositionId:z,calculateMetadata:P,originalProps:B,signal:Z,defaultProps:G,compositionDurationInFrames:y,compositionFps:C,compositionHeight:k,compositionWidth:N});if(I.type==="error")return h(H=>({...H,[z]:{type:"error",error:I.error}})),U;const O=I.result;return typeof O=="object"&&"then"in O?(h(H=>{const X=H[z];return(X==null?void 0:X.type)==="success"||(X==null?void 0:X.type)==="success-and-refreshing"?{...H,[z]:{type:"success-and-refreshing",result:X.result}}:{...H,[z]:{type:"loading"}}}),O.then(H=>{U.signal.aborted||h(X=>({...X,[z]:{type:"success",result:H}}))}).catch(H=>{U.signal.aborted||h(X=>({...X,[z]:{type:"error",error:H}}))})):h(H=>({...H,[z]:{type:"success",result:O}})),U},[x]),d=(r==null?void 0:r.type)==="composition"?r.compositionId:null;S.useImperativeHandle(_y,()=>({setCurrentRenderModalComposition:P=>{n(P)},reloadCurrentlySelectedComposition:()=>{if(!d)return;const P=i.find(k=>k.id===d);if(!P)throw new Error(`Could not find composition with id ${d}`);const B=u[d]??{},y={...P.defaultProps??{},...B??{}},C={...y,...c??{}};p({defaultProps:y,calculateMetadata:P.calculateMetadata,combinedProps:C,compositionDurationInFrames:P.durationInFrames??null,compositionFps:P.fps??null,compositionHeight:P.height??null,compositionWidth:P.width??null,compositionId:P.id})}}),[u,i,d,p,c]);const m=(a==null?void 0:a.id)===(l==null?void 0:l.id),v=S.useMemo(()=>({...(a==null?void 0:a.defaultProps)??{},...g??{}}),[a==null?void 0:a.defaultProps,g]),E=S.useMemo(()=>({...v,...c??{}}),[v,c]),M=a&&yy(a),w=typeof window<"u"&&window.remotion_ignoreFastRefreshUpdate&&s<=window.remotion_ignoreFastRefreshUpdate;S.useEffect(()=>{if(!w&&M){const P=p({calculateMetadata:a.calculateMetadata,combinedProps:E,compositionDurationInFrames:a.durationInFrames??null,compositionFps:a.fps??null,compositionHeight:a.height??null,compositionWidth:a.width??null,defaultProps:v,compositionId:a.id});return()=>{P.abort()}}},[M,v,p,E,a==null?void 0:a.calculateMetadata,a==null?void 0:a.durationInFrames,a==null?void 0:a.fps,a==null?void 0:a.height,a==null?void 0:a.id,a==null?void 0:a.width,w]),S.useEffect(()=>{w||window.dispatchEvent(new CustomEvent(xy,{detail:{resetUnsaved:!0}}))},[s]),S.useEffect(()=>{if(l&&!m){const P={...l.defaultProps??{},..._??{},...c??{}},B=p({calculateMetadata:l.calculateMetadata,compositionDurationInFrames:l.durationInFrames??null,compositionFps:l.fps??null,compositionHeight:l.height??null,compositionId:l.id,compositionWidth:l.width??null,defaultProps:v,combinedProps:P});return()=>{B.abort()}}},[v,p,c,m,l,_]);const T=S.useMemo(()=>{const P=i.filter(B=>B.calculateMetadata===null);return{...f,...P.reduce((B,y)=>({...B,[y.id]:{type:"success",result:{...y,defaultProps:y.defaultProps??{}}}}),{})}},[i,f]);return F.jsx(Cu.Provider,{value:T,children:t})},Th=t=>{const e=S.useContext(Cu),{props:n}=S.useContext(Au),{compositions:i,canvasContent:r,currentCompositionMetadata:o}=S.useContext(sr),s=(r==null?void 0:r.type)==="composition"?r.compositionId:null,a=t??s,l=i.find(c=>c.id===a),u=S.useMemo(()=>l?n[l.id]??{}:{},[n,l]);return S.useMemo(()=>l?o?{type:"success",result:{...o,id:l.id,props:o.props,defaultProps:l.defaultProps??{},defaultCodec:o.defaultCodec}}:yy(l)?e[l.id]?e[l.id]:null:(Mh(l.durationInFrames,{allowFloats:!1,component:`in <Composition id="${l.id}">`}),gy(l.fps,`in <Composition id="${l.id}">`),eu(l.width,"width",`in <Composition id="${l.id}">`),eu(l.height,"height",`in <Composition id="${l.id}">`),{type:"success",result:{width:l.width,height:l.height,fps:l.fps,id:l.id,durationInFrames:l.durationInFrames,defaultProps:l.defaultProps??{},props:{...l.defaultProps??{},...u??{},...typeof window>"u"||Lt().isPlayer?{}:my()??{}},defaultCodec:null}}):null,[l,e,o,u])},bu=()=>{const{canvasContent:t,compositions:e,currentCompositionMetadata:n}=S.useContext(sr),i=e.find(o=>(t==null?void 0:t.type)==="composition"&&o.id===t.compositionId),r=Th((i==null?void 0:i.id)??null);return S.useMemo(()=>!r||r.type==="error"||r.type==="loading"||!i?null:{...r.result,defaultProps:i.defaultProps??{},id:i.id,...n??{},component:i.component},[n,r,i])},qn=S.createContext({frame:{},playing:!1,playbackRate:1,rootId:"",imperativePlaying:{current:!1},setPlaybackRate:()=>{throw new Error("default")},audioAndVideoTags:{current:[]}}),Qo=S.createContext({setFrame:()=>{throw new Error("default")},setPlaying:()=>{throw new Error("default")}}),Ah=()=>"remotion.time-all",Ey=t=>{localStorage.setItem(Ah(),JSON.stringify(t))},wy=()=>{const t=localStorage.getItem(Ah())??"{}";return JSON.parse(t)},My=t=>{const e=localStorage.getItem(Ah())??"{}",n=JSON.parse(e);return n[t]!==void 0?Number(n[t]):typeof window>"u"?0:window.remotion_initialFrame??0},Jo=()=>{const t=bu(),e=S.useContext(qn);if(!t)return typeof window>"u"?0:window.remotion_initialFrame??0;const n=e.frame[t.id]??(Lt().isPlayer?0:My(t.id));return Math.min(t.durationInFrames-1,n)},Ty=()=>{const{setFrame:t}=S.useContext(Qo);return t},Ch=()=>{const{playing:t,imperativePlaying:e}=S.useContext(qn),{setPlaying:n}=S.useContext(Qo);return S.useMemo(()=>[t,n,e],[e,t,n])},Vr=S.createContext(!1),of=({children:t})=>F.jsx(Vr.Provider,{value:!0,children:t}),bh=()=>{const t=S.useContext(tn),e=(t==null?void 0:t.width)??null,n=(t==null?void 0:t.height)??null,i=(t==null?void 0:t.durationInFrames)??null,r=bu();return S.useMemo(()=>{if(!r)return null;const{id:o,durationInFrames:s,fps:a,height:l,width:u,defaultProps:c,props:f,defaultCodec:h}=r;return{id:o,width:e??u,height:n??l,fps:a,durationInFrames:i??s,defaultProps:c,props:f,defaultCodec:h}},[i,n,e,r])},ar=()=>{const t=bh(),e=S.useContext(Vr),n=xh();if(!t)throw typeof window<"u"&&window.remotion_isPlayer||n?new Error(["No video config found. Likely reasons:","- You are probably calling useVideoConfig() from outside the component passed to <Player />. See https://www.remotion.dev/docs/player/examples for how to set up the Player correctly.","- You have multiple versions of Remotion installed which causes the React context to get lost."].join("-")):new Error("No video config found. You are probably calling useVideoConfig() from a component which has not been registered as a <Composition />. See https://www.remotion.dev/docs/the-fundamentals#defining-compositions for more information.");if(!e)throw new Error("Called useVideoConfig() outside a Remotion composition.");return t},Hr=()=>{if(!S.useContext(Vr))throw Lt().isPlayer?new Error("useCurrentFrame can only be called inside a component that was passed to <Player>. See: https://www.remotion.dev/docs/player/examples"):new Error("useCurrentFrame() can only be called inside a component that was registered as a composition. See https://www.remotion.dev/docs/the-fundamentals#defining-compositions");const e=Jo(),n=S.useContext(tn),i=n?n.cumulatedFrom+n.relativeFrom:0;return e-i},Mb=({frame:t,children:e,active:n=!0})=>{const i=Hr(),r=ar();if(typeof t>"u")throw new Error("The <Freeze /> component requires a 'frame' prop, but none was passed.");if(typeof t!="number")throw new Error(`The 'frame' prop of <Freeze /> must be a number, but is of type ${typeof t}`);if(Number.isNaN(t))throw new Error("The 'frame' prop of <Freeze /> must be a real number, but it is NaN.");if(!Number.isFinite(t))throw new Error(`The 'frame' prop of <Freeze /> must be a finite number, but it is ${t}.`);const o=S.useMemo(()=>{if(typeof n=="boolean")return n;if(typeof n=="function")return n(i)},[n,i]),s=S.useContext(qn),a=S.useContext(tn),l=(a==null?void 0:a.relativeFrom)??0,u=S.useMemo(()=>o?{...s,playing:!1,imperativePlaying:{current:!1},frame:{[r.id]:t+l}}:s,[o,s,r.id,t,l]);return F.jsx(qn.Provider,{value:u,children:e})},Tb=({from:t=0,durationInFrames:e=1/0,children:n,name:i,height:r,width:o,showInTimeline:s=!0,_remotionInternalLoopDisplay:a,_remotionInternalStack:l,_remotionInternalPremountDisplay:u,...c},f)=>{const{layout:h="absolute-fill"}=c,[g]=S.useState(()=>String(Math.random())),_=S.useContext(tn),{rootId:x}=S.useContext(qn),p=_?_.cumulatedFrom+_.relativeFrom:0,d=wh();if(h!=="absolute-fill"&&h!=="none")throw new TypeError(`The layout prop of <Sequence /> expects either "absolute-fill" or "none", but you passed: ${h}`);if(h==="none"&&typeof c.style<"u")throw new TypeError('If layout="none", you may not pass a style.');if(typeof e!="number")throw new TypeError(`You passed to durationInFrames an argument of type ${typeof e}, but it must be a number.`);if(e<=0)throw new TypeError(`durationInFrames must be positive, but got ${e}`);if(typeof t!="number")throw new TypeError(`You passed to the "from" props of your <Sequence> an argument of type ${typeof t}, but it must be a number.`);if(!Number.isFinite(t))throw new TypeError(`The "from" prop of a sequence must be finite, but got ${t}.`);const m=Jo(),v=ar(),E=_?Math.min(_.durationInFrames-t,e):e,M=Math.max(0,Math.min(v.durationInFrames-t,E)),{registerSequence:w,unregisterSequence:T}=S.useContext(Ko),{hidden:P}=S.useContext(ua),B=S.useMemo(()=>(_==null?void 0:_.premounting)??!!c._remotionInternalIsPremounting,[c._remotionInternalIsPremounting,_==null?void 0:_.premounting]),y=S.useMemo(()=>({cumulatedFrom:p,relativeFrom:t,durationInFrames:M,parentFrom:(_==null?void 0:_.relativeFrom)??0,id:g,height:r??(_==null?void 0:_.height)??null,width:o??(_==null?void 0:_.width)??null,premounting:B}),[p,t,M,_,g,r,o,B]),C=S.useMemo(()=>i??"",[i]);S.useEffect(()=>{if(Lt().isStudio)return w({from:t,duration:M,id:g,displayName:C,parent:(_==null?void 0:_.id)??null,type:"sequence",rootId:x,showInTimeline:s,nonce:d,loopDisplay:a,stack:l??null,premountDisplay:u??null}),()=>{T(g)}},[e,g,i,w,C,T,_==null?void 0:_.id,M,x,t,s,d,a,l,u]);const k=Math.ceil(p+t+e-1),z=m<p+t||m>k?null:n,N=c.layout==="none"?void 0:c.style,G=S.useMemo(()=>({flexDirection:void 0,...o?{width:o}:{},...r?{height:r}:{},...N??{}}),[r,N,o]);if(f!==null&&h==="none")throw new TypeError('It is not supported to pass both a `ref` and `layout="none"` to <Sequence />.');return P[g]??!1?null:F.jsx(tn.Provider,{value:y,children:z===null?null:c.layout==="none"?z:F.jsx(Eh,{ref:f,style:G,className:c.className,children:z})})},Ab=S.forwardRef(Tb),Cb=(t,e)=>{const n=Hr();if(t.layout==="none")throw new Error('`<Sequence>` with `premountFor` prop does not support layout="none"');const{style:i,from:r=0,premountFor:o=0,...s}=t,a=n<r&&n>=r-o,l=S.useMemo(()=>({...i,opacity:a?0:1,pointerEvents:a?"none":(i==null?void 0:i.pointerEvents)??void 0}),[a,i]);return F.jsx(Mb,{frame:r,active:a,children:F.jsx(ca,{ref:e,from:r,style:l,_remotionInternalPremountDisplay:o,_remotionInternalIsPremounting:a,...s})})},bb=S.forwardRef(Cb),Rb=(t,e)=>t.layout!=="none"&&t.premountFor&&!Lt().isRendering?F.jsx(bb,{...t,ref:e}):F.jsx(Ab,{...t,ref:e}),ca=S.forwardRef(Rb),Pb=t=>{if(typeof t!="string")throw new TypeError(`The "filename" must be a string, but you passed a value of type ${typeof t}`);if(t.trim()==="")throw new Error("The `filename` must not be empty");if(!t.match(/^([0-9a-zA-Z-!_.*'()/:&$@=;+,?]+)/g))throw new Error('The `filename` must match "/^([0-9a-zA-Z-!_.*\'()/:&$@=;+,?]+)/g". Use forward slashes only, even on Windows.')},Lb=t=>{if(typeof t!="string"&&!(t instanceof Uint8Array))throw new TypeError(`The "content" must be a string or Uint8Array, but you passed a value of type ${typeof t}`);if(typeof t=="string"&&t.trim()==="")throw new Error("The `content` must not be empty")},Ay=t=>{t.type==="artifact"&&(Pb(t.filename),Lb(t.content))},es=S.createContext({registerRenderAsset:()=>{},unregisterRenderAsset:()=>{},renderAssets:[]}),Nb=({children:t})=>{const[e,n]=S.useState([]),i=S.useCallback(s=>{Ay(s),n(a=>[...a,s])},[]),r=S.useCallback(s=>{n(a=>a.filter(l=>l.id!==s))},[]);S.useLayoutEffect(()=>{typeof window<"u"&&(window.remotion_collectAssets=()=>(n([]),e))},[e]);const o=S.useMemo(()=>({registerRenderAsset:i,unregisterRenderAsset:r,renderAssets:e}),[e,i,r]);return F.jsx(es.Provider,{value:o,children:t})},Or=t=>typeof window>"u"?t:new URL(t,window.origin).href,Cy=({endAt:t,mediaDuration:e,playbackRate:n,startFrom:i})=>{let r=e;typeof t<"u"&&(r=t),typeof i<"u"&&(r-=i);const o=r/n;return Math.floor(o)};function Rh(t){let e;throw Db(t)?(e=t,e.stack||(e.stack=new Error(e.message).stack)):typeof t=="string"?e=Error(t):e=Error("Rendering was cancelled"),window.remotion_cancelledError=e.stack,e}var Db=t=>t instanceof Error?!0:!(t===null||typeof t!="object"||!("stack"in t)||typeof t.stack!="string"||!("message"in t)||typeof t.message!="string"),by=S.createContext(null),Ib=()=>Ke.useContext(by),Ru=({durationInFrames:t,times:e=1/0,children:n,name:i,...r})=>{const o=Hr(),{durationInFrames:s}=ar();if(Mh(t,{component:"of the <Loop /> component",allowFloats:!0}),typeof e!="number")throw new TypeError(`You passed to "times" an argument of type ${typeof e}, but it must be a number.`);if(e!==1/0&&e%1!==0)throw new TypeError(`The "times" prop of a loop must be an integer, but got ${e}.`);if(e<0)throw new TypeError(`The "times" prop of a loop must be at least 0, but got ${e}`);const a=Math.ceil(s/t),l=Math.min(a,e),u=r.layout==="none"?void 0:r.style,c=t*(l-1),h=Math.floor(o/t)*t,g=Math.min(h,c),_=S.useMemo(()=>({numberOfTimes:l,startOffset:-g,durationInFrames:t}),[l,t,g]),x=S.useMemo(()=>({iteration:Math.floor(o/t),durationInFrames:t}),[o,t]);return F.jsx(by.Provider,{value:x,children:F.jsx(ca,{durationInFrames:t,from:g,name:i??"<Loop>",_remotionInternalLoopDisplay:_,layout:r.layout,style:u,children:n})})};Ru.useLoop=Ib;var Pu=S.createContext({}),zg={},jc=[],Ry=({children:t})=>{const[e,n]=S.useState(()=>zg);return S.useEffect(()=>{const i=()=>{n(zg)};return jc.push(i),()=>{jc=jc.filter(r=>r!==i)}},[]),F.jsx(Pu.Provider,{value:e,children:t})},ts=t=>S.useContext(Pu)[t]??t,Py=(t,e)=>{if(typeof t.volume!="number"&&typeof t.volume!="function"&&typeof t.volume<"u")throw new TypeError(`You have passed a volume of type ${typeof t.volume} to your <${e} /> component. Volume must be a number or a function with the signature '(frame: number) => number' undefined.`);if(typeof t.volume=="number"&&t.volume<0)throw new TypeError(`You have passed a volume below 0 to your <${e} /> component. Volume must be between 0 and 1`);if(typeof t.playbackRate!="number"&&typeof t.playbackRate<"u")throw new TypeError(`You have passed a playbackRate of type ${typeof t.playbackRate} to your <${e} /> component. Playback rate must a real number or undefined.`);if(typeof t.playbackRate=="number"&&(isNaN(t.playbackRate)||!Number.isFinite(t.playbackRate)||t.playbackRate<=0))throw new TypeError(`You have passed a playbackRate of ${t.playbackRate} to your <${e} /> component. Playback rate must be a real number above 0.`)},Ly=(t,e)=>{if(typeof t<"u"){if(typeof t!="number")throw new TypeError(`type of startFrom prop must be a number, instead got type ${typeof t}.`);if(isNaN(t)||t===1/0)throw new TypeError("startFrom prop can not be NaN or Infinity.");if(t<0)throw new TypeError(`startFrom must be greater than equal to 0 instead got ${t}.`)}if(typeof e<"u"){if(typeof e!="number")throw new TypeError(`type of endAt prop must be a number, instead got type ${typeof e}.`);if(isNaN(e))throw new TypeError("endAt prop can not be NaN.");if(e<=0)throw new TypeError(`endAt must be a positive number, instead got ${e}.`)}if(e<t)throw new TypeError("endAt prop must be greater than startFrom prop.")},Ub=(t,e)=>{switch(e.type){case"got-duration":{const n=Or(e.src);return t[n]===e.durationInSeconds?t:{...t,[n]:e.durationInSeconds}}default:return t}},Ph=S.createContext({durations:{},setDurations:()=>{throw new Error("context missing")}}),Ny=({children:t})=>{const[e,n]=S.useReducer(Ub,{}),i=S.useMemo(()=>({durations:e,setDurations:n}),[e]);return F.jsx(Ph.Provider,{value:i,children:t})};function Vg(t){let e=t+1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fb(t){let e=0,n=0,i=0;for(e=0;e<t.length;e++)n=t.charCodeAt(e),i=(i<<5)-i+n,i|=0;return i}var ns=(t,e)=>{if(t===null)return Math.random();if(typeof t=="string")return Vg(Fb(t));if(typeof t=="number")return Vg(t*1e10);throw new Error("random() argument must be a number or a string")},da=()=>{const t=S.useContext(tn);return Math.min(0,(t==null?void 0:t.relativeFrom)??0)},Lu=t=>{const e=Ru.useLoop(),n=Hr(),i=da();return t==="repeat"||e===null?n+i:n+i+e.durationInFrames*e.iteration},Ob=t=>{if(/data:|blob:/.test(t.substring(0,5)))return"Data URL";const e=t.split("/").map(n=>n.split("\\")).flat(1);return e[e.length-1]},tu=(t,e,n)=>{const{current:i}=t;if(!i)return;const r=i.play();r.catch&&r.catch(o=>{if(i&&!o.message.includes("request was interrupted by a call to pause")&&!o.message.includes("The operation was aborted.")&&!o.message.includes("The fetching process for the media resource was aborted by the user agent")&&!o.message.includes("request was interrupted by a new load request")&&!o.message.includes("because the media was removed from the document")&&!(o.message.includes("user didn't interact with the document")&&i.muted)&&(console.log(`Could not play ${e} due to following error: `,o),!i.muted)){if(n){n();return}console.log("The video will be muted and we'll retry playing it."),e==="video"&&Lt().isPlayer&&console.log("Use onAutoPlayError() to handle this error yourself."),i.muted=!0,i.play()}})},fa=({frame:t,volume:e,mediaVolume:n=1,allowAmplificationDuringRender:i})=>{const r=i?1/0:1;if(typeof e=="number")return Math.min(r,e*n);if(typeof e>"u")return Number(n);const o=e(t)*n;if(typeof o!="number")throw new TypeError(`You passed in a a function to the volume prop but it did not return a number but a value of type ${typeof o} for frame ${t}`);if(Number.isNaN(o))throw new TypeError(`You passed in a function to the volume prop but it returned NaN for frame ${t}.`);if(!Number.isFinite(o))throw new TypeError(`You passed in a function to the volume prop but it returned a non-finite number for frame ${t}.`);return Math.max(0,Math.min(r,o))},Hg={},kb=t=>{Hg[t]||(console.warn(t),Hg[t]=!0)},Dy=({volume:t,mediaVolume:e,mediaRef:n,src:i,mediaType:r,playbackRate:o,displayName:s,id:a,stack:l,showInTimeline:u,premountDisplay:c,onAutoPlayError:f})=>{const h=ar(),{rootId:g,audioAndVideoTags:_}=S.useContext(qn),x=S.useContext(tn),p=x?x.relativeFrom+x.cumulatedFrom:0,[d]=Ch(),m=da(),{registerSequence:v,unregisterSequence:E}=S.useContext(Ko),[M]=S.useState(()=>t),w=wh(),T=x?Math.min(x.durationInFrames,h.durationInFrames):h.durationInFrames,P=typeof t=="function",B=S.useMemo(()=>typeof t=="number"?t:new Array(Math.floor(Math.max(0,T+m))).fill(!0).map((y,C)=>fa({frame:C+m,volume:t,mediaVolume:e,allowAmplificationDuringRender:!1})).join(","),[T,m,t,e]);S.useEffect(()=>{typeof t=="number"&&t!==M&&kb(`Remotion: The ${r} with src ${i} has changed it's volume. Prefer the callback syntax for setting volume to get better timeline display: https://www.remotion.dev/docs/using-audio/#controlling-volume`)},[M,r,i,t]),S.useEffect(()=>{var y,C;if(n.current){if(!i)throw new Error("No src passed");if(!(!Lt().isStudio&&((C=(y=window.process)==null?void 0:y.env)==null?void 0:C.NODE_ENV)!=="test")&&u)return v({type:r,src:i,id:a,duration:T,from:0,parent:(x==null?void 0:x.id)??null,displayName:s??Ob(i),rootId:g,volume:B,showInTimeline:!0,nonce:w,startMediaFrom:0-m,doesVolumeChange:P,loopDisplay:void 0,playbackRate:o,stack:l,premountDisplay:c}),()=>{E(a)}}},[p,T,a,x,i,v,g,E,h,B,P,w,n,r,m,o,s,l,u,c]),S.useEffect(()=>{const y={id:a,play:()=>{if(d)return tu(n,r,f)}};return _.current.push(y),()=>{_.current=_.current.filter(C=>C.id!==a)}},[_,a,n,r,f,d])},Bb=()=>{const[t,e]=S.useState([]),[n,i]=S.useState([]),[r,o]=S.useState([]),s=S.useRef(!1),a=S.useCallback(c=>(e(f=>[...f,c]),{unblock:()=>{e(f=>{const h=f.filter(g=>g!==c);return h.length===f.length?f:h})}}),[]),l=S.useCallback(c=>(i(f=>[...f,c]),{remove:()=>{i(f=>f.filter(h=>h!==c))}}),[]),u=S.useCallback(c=>(o(f=>[...f,c]),{remove:()=>{o(f=>f.filter(h=>h!==c))}}),[]);return S.useEffect(()=>{t.length>0&&n.forEach(c=>c())},[t]),S.useEffect(()=>{t.length===0&&r.forEach(c=>c())},[t]),S.useMemo(()=>({addBlock:a,listenForBuffering:l,listenForResume:u,buffering:s}),[a,s,l,u])},is=Ke.createContext(null),Iy=({children:t})=>{const e=Bb();return F.jsx(is.Provider,{value:e,children:t})},zb=t=>{const[e,n]=S.useState(t.buffering.current);return S.useEffect(()=>{const i=()=>{n(!0)},r=()=>{n(!1)};return t.listenForBuffering(i),t.listenForResume(r),()=>{t.listenForBuffering(()=>{}),t.listenForResume(()=>{})}},[t]),e},Lh=()=>{const t=S.useContext(is),e=t?t.addBlock:null;return S.useMemo(()=>({delayPlayback:()=>{if(!e)throw new Error("Tried to enable the buffering state, but a Remotion context was not found. This API can only be called in a component that was passed to the Remotion Player or a <Composition>. Or you might have experienced a version mismatch - run `npx remotion versions` and ensure all packages have the same version. This error is thrown by the buffer state https://remotion.dev/docs/player/buffer-state");const{unblock:n}=e({id:String(Math.random())});return{unblock:n}}}),[e])},Vb=({mediaRef:t,mediaType:e,onVariableFpsVideoDetected:n,pauseWhenBuffering:i})=>{const r=S.useRef(!1),{delayPlayback:o}=Lh(),s=S.useCallback(a=>{if(e!=="video"||!i)return;const l=t.current;if(!l||!l.requestVideoFrameCallback)return;r.current=!0;const u=o(),c=()=>{u.unblock(),l.removeEventListener("ended",c,{once:!0}),l.removeEventListener("pause",c,{once:!0}),r.current=!1},f=()=>{c()};l.requestVideoFrameCallback((h,g)=>{Math.abs(g.mediaTime-a)>.5&&n(),c()}),l.addEventListener("ended",f,{once:!0}),l.addEventListener("pause",f,{once:!0}),l.addEventListener("canplay",f,{once:!0})},[o,t,e,n,i]);return S.useMemo(()=>({isBuffering:()=>r.current,bufferUntilFirstFrame:s}),[s])},Hb=({element:t,shouldBuffer:e,isPremounting:n})=>{const i=Lh(),[r,o]=S.useState(!1);return S.useEffect(()=>{let s=[];const{current:a}=t;if(!a||!e||n)return;const l=()=>{s.forEach(f=>f()),s=[],o(!1)},u=()=>{o(!0);const{unblock:f}=i.delayPlayback(),h=()=>{l(),c()},g=()=>{l(),c()};a.addEventListener("canplay",h,{once:!0}),s.push(()=>{a.removeEventListener("canplay",h)}),a.addEventListener("error",g,{once:!0}),s.push(()=>{a.removeEventListener("error",g)}),s.push(()=>{f()})},c=()=>{a.readyState<a.HAVE_FUTURE_DATA?(u(),navigator.userAgent.includes("Firefox/")||a.load()):(a.addEventListener("waiting",u),s.push(()=>{a.removeEventListener("waiting",u)}))};return c(),()=>{l()}},[i,t,n,e]),r},Gb=({mediaRef:t,mediaType:e,lastSeek:n,onVariableFpsVideoDetected:i})=>{const r=S.useRef(null);return S.useEffect(()=>{const{current:o}=t;if(o)r.current=o.currentTime;else{r.current=null;return}if(e!=="video"){r.current=null;return}const s=o;if(!s.requestVideoFrameCallback)return;let a=()=>{};const l=()=>{if(!s)return;const u=s.requestVideoFrameCallback((c,f)=>{if(r.current!==null){const h=Math.abs(r.current-f.mediaTime),g=Math.abs(n.current===null?1/0:f.mediaTime-n.current);h>.5&&g>.5&&f.mediaTime>r.current&&i()}r.current=f.mediaTime,l()});a=()=>{s.cancelVideoFrameCallback(u),a=()=>{}}};return l(),()=>{a()}},[n,t,e,i]),r};function Wb(t,e,n,i){const{extrapolateLeft:r,extrapolateRight:o,easing:s}=i;let a=t;const[l,u]=e,[c,f]=n;if(a<l){if(r==="identity")return a;if(r==="clamp")a=l;else if(r==="wrap"){const h=u-l;a=((a-l)%h+h)%h+l}}if(a>u){if(o==="identity")return a;if(o==="clamp")a=u;else if(o==="wrap"){const h=u-l;a=((a-l)%h+h)%h+l}}return c===f?c:(a=(a-l)/(u-l),a=s(a),a=a*(f-c)+c,a)}function $b(t,e){let n;for(n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}function jb(t){for(let e=1;e<t.length;++e)if(!(t[e]>t[e-1]))throw new Error(`inputRange must be strictly monotonically increasing but got [${t.join(",")}]`)}function Gg(t,e){if(e.length<2)throw new Error(t+" must have at least 2 elements");for(const n of e){if(typeof n!="number")throw new Error(`${t} must contain only numbers`);if(!Number.isFinite(n))throw new Error(`${t} must contain only finite numbers, but got [${e.join(",")}]`)}}function Uy(t,e,n,i){if(typeof t>"u")throw new Error("input can not be undefined");if(typeof e>"u")throw new Error("inputRange can not be undefined");if(typeof n>"u")throw new Error("outputRange can not be undefined");if(e.length!==n.length)throw new Error("inputRange ("+e.length+") and outputRange ("+n.length+") must have the same length");Gg("inputRange",e),Gg("outputRange",n),jb(e);const r=(i==null?void 0:i.easing)??(l=>l);let o="extend";(i==null?void 0:i.extrapolateLeft)!==void 0&&(o=i.extrapolateLeft);let s="extend";if((i==null?void 0:i.extrapolateRight)!==void 0&&(s=i.extrapolateRight),typeof t!="number")throw new TypeError("Cannot interpolate an input which is not a number");const a=$b(t,e);return Wb(t,[e[a],e[a+1]],[n[a],n[a+1]],{easing:r,extrapolateLeft:o,extrapolateRight:s})}var Xb=({frame:t,playbackRate:e,startFrom:n})=>Uy(t,[-1,n,n+1],[-1,n,n+e]),Fy=({fps:t,frame:e,playbackRate:n,startFrom:i})=>{const r=Xb({frame:e,playbackRate:n,startFrom:i}),o=1e3/t;return r*o/1e3},Oy=(t,e)=>Math.round(t/e*100)/100,Nu=()=>{if(typeof window>"u")return!1;const t=/iP(ad|od|hone)/i.test(window.navigator.userAgent),e=/AppleWebKit/.test(window.navigator.userAgent);return t&&e},Yb=t=>Nu()&&t.startsWith("blob:"),sf=({actualFrom:t,fps:e})=>Oy(Math.max(0,-t),e),af=({duration:t,fps:e})=>Oy(t,e),qb=({actualSrc:t,actualFrom:e,duration:n,fps:i})=>{if(Yb(t)||t.startsWith("data:")||!!new URL(t,(typeof window>"u"?null:window.location.href)??"http://localhost:3000").hash||!Number.isFinite(e))return t;const o=`${t}#t=${sf({actualFrom:e,fps:i})}`;return Number.isFinite(n)?`${o},${af({duration:n,fps:i})}`:o},Kb=({prevStartFrom:t,newStartFrom:e,prevDuration:n,newDuration:i,fps:r})=>{const o=sf({actualFrom:t,fps:r}),s=sf({actualFrom:e,fps:r}),a=af({duration:n,fps:r}),l=af({duration:i,fps:r});return!(s<o||l>a)},Zb=({actualSrc:t,actualFrom:e,duration:n,fps:i})=>{const r=S.useRef(e),o=S.useRef(n),s=S.useRef(t);return(!Kb({prevStartFrom:r.current,newStartFrom:e,prevDuration:o.current,newDuration:n,fps:i})||t!==s.current)&&(r.current=e,o.current=n,s.current=t),qb({actualSrc:s.current,actualFrom:r.current,duration:o.current,fps:i})},Wg={},Qb=(t,e)=>{if(t===null||t.seekable.length===0||t.seekable.length>1||Wg[t.src])return;const n={start:t.seekable.start(0),end:t.seekable.end(0)};if(n.start===0&&n.end===0){const i=[`The media ${t.src} cannot be seeked. This could be one of few reasons:`,"1) The media resource was replaced while the video is playing but it was not loaded yet.","2) The media does not support seeking.","3) The media was loaded with security headers prventing it from being included.","Please see https://remotion.dev/docs/non-seekable-media for assistance."].join(`
`);if(e==="console-error")console.error(i);else if(e==="console-warning")console.warn(`The media ${t.src} does not support seeking. The video will render fine, but may not play correctly in the Remotion Studio and in the <Player>. See https://remotion.dev/docs/non-seekable-media for an explanation.`);else throw new Error(i);Wg[t.src]=!0}},Nh=.45,Xc=(t,e)=>{if(!t.current)return;const n=Nu()?Number(e.toFixed(1)):e;t.current.currentTime=n},ky=({mediaRef:t,src:e,mediaType:n,playbackRate:i,onlyWarnForMediaSeekingError:r,acceptableTimeshift:o,pauseWhenBuffering:s,isPremounting:a,debugSeeking:l,onAutoPlayError:u})=>{const{playbackRate:c}=S.useContext(qn),f=Hr(),h=Jo(),[g]=Ch(),_=S.useContext(is),{fps:x}=ar(),p=da(),d=S.useRef(null),m=S.useRef(null);if(!_)throw new Error("useMediaPlayback must be used inside a <BufferingContext>");const v=S.useRef({}),E=S.useCallback(()=>{e&&(l&&console.log(`Detected ${e} as a variable FPS video. Disabling buffering while seeking.`),v.current[e]=!0)},[l,e]),M=Gb({mediaRef:t,mediaType:n,lastSeek:m,onVariableFpsVideoDetected:E}),w=Fy({frame:f,playbackRate:i,startFrom:-p,fps:x}),T=Hb({element:t,shouldBuffer:s,isPremounting:a}),{bufferUntilFirstFrame:P,isBuffering:B}=Vb({mediaRef:t,mediaType:n,onVariableFpsVideoDetected:E,pauseWhenBuffering:s}),y=i*c,C=(()=>{var z;return(z=t.current)!=null&&z.duration?Math.min(t.current.duration,o??Nh):o})(),k=zb(_);S.useEffect(()=>{var N,G;if(!g){(N=t.current)==null||N.pause();return}const z=T||B();k&&!z&&((G=t.current)==null||G.pause())},[B,T,k,t,g]),S.useEffect(()=>{const z=n==="audio"?"<Audio>":"<Video>";if(!t.current)throw new Error(`No ${n} ref found`);if(!e)throw new Error(`No 'src' attribute was passed to the ${z} element.`);const N=Math.max(0,y);t.current.playbackRate!==N&&(t.current.playbackRate=N);const{duration:G}=t.current,U=!Number.isNaN(G)&&Number.isFinite(G)?Math.min(G,w):w,Z=t.current.currentTime,I=M.current??null,O=v.current[e],H=Math.abs(U-Z),X=I?Math.abs(U-I):null,J=X&&!O?X:H;if(l&&console.log({mediaTagTime:Z,rvcTime:I,shouldBeTime:U,state:t.current.readyState,playing:!t.current.paused,isVariableFpsVideo:O}),J>C&&d.current!==U){l&&console.log("Seeking",{shouldBeTime:U,isTime:Z,rvcTime:I,timeShift:J,isVariableFpsVideo:O}),Xc(t,U),m.current=U,d.current=U,g&&!O&&(y>0&&P(U),t.current.paused&&tu(t,n,u)),r||Qb(t.current,r?"console-warning":"console-error");return}const ge=g?.15:1e-5,$=Math.abs(t.current.currentTime-U)>ge,K=T||B(),ne=_.buffering.current&&!K;if(!g||ne){$&&(Xc(t,U),m.current=U);return}(t.current.paused&&!t.current.ended||h===0)&&($&&(Xc(t,U),m.current=U),tu(t,n,u),O||y>0&&P(U))},[h,C,P,_.buffering,M,l,w,B,T,t,n,r,y,g,e,u])},By=t=>{const[e,n]=S.useState(1);return S.useEffect(()=>{const i=t.current;if(!i)return;const r=()=>{n(i.volume)};return i.addEventListener("volumechange",r),()=>i.removeEventListener("volumechange",r)},[t]),S.useEffect(()=>{const i=t.current;i&&i.volume!==e&&n(i.volume)},[e,t]),e},Jb=1e-5,Dh=(t,e)=>Math.abs(t-e)<Jb,zy=({volumePropFrame:t,actualVolume:e,volume:n,mediaVolume:i,mediaRef:r})=>{S.useEffect(()=>{const o=fa({frame:t,volume:n,mediaVolume:i,allowAmplificationDuringRender:!1});!Dh(o,e)&&r.current&&(r.current.volume=o)},[e,t,r,n,i])},Ih=S.createContext({mediaMuted:!1,mediaVolume:1}),Uh=S.createContext({setMediaMuted:()=>{throw new Error("default")},setMediaVolume:()=>{throw new Error("default")}}),Fh=()=>{const{mediaVolume:t}=S.useContext(Ih),{setMediaVolume:e}=S.useContext(Uh);return S.useMemo(()=>[t,e],[t,e])},Oh=()=>{const{mediaMuted:t}=S.useContext(Ih),{setMediaMuted:e}=S.useContext(Uh);return S.useMemo(()=>[t,e],[t,e])},$g="data:audio/mp3;base64,/+MYxAAJcAV8AAgAABn//////+/gQ5BAMA+D4Pg+BAQBAEAwD4Pg+D4EBAEAQDAPg++hYBH///hUFQVBUFREDQNHmf///////+MYxBUGkAGIMAAAAP/29Xt6lUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/+MYxDUAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",eR=(t,e)=>{const n=Object.keys(t).sort(),i=Object.keys(e).sort();if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r]!==i[r]||t[n[r]]!==e[i[r]])return!1;return!0},tR=(t,e,n)=>t==="src"&&!n.startsWith("data:")&&!e.startsWith("data:")?new URL(n,window.origin).toString()!==new URL(e,window.origin).toString():n!==e,Du=S.createContext(null),Vy=({children:t,numberOfAudioTags:e,component:n})=>{const i=S.useRef([]),[r]=S.useState(e);if(e!==r)throw new Error("The number of shared audio tags has changed dynamically. Once you have set this property, you cannot change it afterwards.");const o=S.useMemo(()=>new Array(e).fill(!0).map(()=>({id:Math.random(),ref:S.createRef()})),[e]),s=S.useRef(new Array(e).fill(!1)),a=S.useCallback(()=>{o.forEach(({ref:_,id:x})=>{var m;const p=(m=i.current)==null?void 0:m.find(v=>v.id===x),{current:d}=_;if(d){if(p===void 0){d.src=$g;return}if(!p)throw new TypeError("Expected audio data to be there");Object.keys(p.props).forEach(v=>{tR(v,p.props[v],d[v])&&(d[v]=p.props[v])})}})},[o]),l=S.useCallback((_,x)=>{var w,T;const p=(w=i.current)==null?void 0:w.find(P=>P.audioId===x);if(p)return p;const d=s.current.findIndex(P=>P===!1);if(d===-1)throw new Error(`Tried to simultaneously mount ${e+1} <Audio /> tags at the same time. With the current settings, the maximum amount of <Audio /> tags is limited to ${e} at the same time. Remotion pre-mounts silent audio tags to help avoid browser autoplay restrictions. See https://remotion.dev/docs/player/autoplay#use-the-numberofsharedaudiotags-property for more information on how to increase this limit.`);const{id:m,ref:v}=o[d],E=[...s.current];E[d]=m,s.current=E;const M={props:_,id:m,el:v,audioId:x};return(T=i.current)==null||T.push(M),a(),M},[e,o,a]),u=S.useCallback(_=>{var d;const x=[...s.current],p=o.findIndex(m=>m.id===_);if(p===-1)throw new TypeError("Error occured in ");x[p]=!1,s.current=x,i.current=(d=i.current)==null?void 0:d.filter(m=>m.id!==_),a()},[o,a]),c=S.useCallback(({aud:_,audioId:x,id:p})=>{var m;let d=!1;i.current=(m=i.current)==null?void 0:m.map(v=>v.id===p?eR(_,v.props)?v:(d=!0,{...v,props:_,audioId:x}):v),d&&a()},[a]),f=S.useCallback(()=>{o.forEach(_=>{tu(_.ref,"audio",null)})},[o]),h=S.useMemo(()=>({registerAudio:l,unregisterAudio:u,updateAudio:c,playAllAudios:f,numberOfAudioTags:e}),[e,f,l,u,c]),g=S.useCallback(()=>{s.current=new Array(e).fill(!1),i.current=[],a()},[e,a]);return S.useEffect(()=>()=>{g()},[n,g]),F.jsxs(Du.Provider,{value:h,children:[o.map(({id:_,ref:x})=>F.jsx("audio",{ref:x,preload:"metadata",src:$g},_)),t]})},nR=(t,e)=>{const n=S.useContext(Du),[i]=S.useState(()=>n&&n.numberOfAudioTags>0?n.registerAudio(t,e):{el:Ke.createRef(),id:Math.random(),props:t,audioId:e}),r=Ke.useInsertionEffect??Ke.useLayoutEffect;return typeof document<"u"&&(r(()=>{n&&n.numberOfAudioTags>0&&n.updateAudio({id:i.id,aud:t,audioId:e})},[t,n,i.id,e]),r(()=>()=>{n&&n.numberOfAudioTags>0&&n.unregisterAudio(i.id)},[n,i.id])),i},iR=(t,e)=>{const[n]=S.useState(t.shouldPreMountAudioTags);if(t.shouldPreMountAudioTags!==n)throw new Error("Cannot change the behavior for pre-mounting audio tags dynamically.");const{volume:i,muted:r,playbackRate:o,shouldPreMountAudioTags:s,src:a,onDuration:l,acceptableTimeShiftInSeconds:u,_remotionInternalNeedsDurationCalculation:c,_remotionInternalNativeLoopPassed:f,_remotionInternalStack:h,_remotionDebugSeeking:g,allowAmplificationDuringRender:_,name:x,pauseWhenBuffering:p,showInTimeline:d,loopVolumeCurveBehavior:m,stack:v,...E}=t,[M]=Fh(),[w]=Oh(),T=Lu(m??"repeat"),{hidden:P}=S.useContext(ua);if(!a)throw new TypeError("No 'src' was passed to <Audio>.");const B=ts(a),y=S.useContext(tn),[C]=S.useState(()=>String(Math.random())),k=P[C]??!1,z=fa({frame:T,volume:i,mediaVolume:M,allowAmplificationDuringRender:!1}),N=S.useMemo(()=>({muted:r||w||k||z<=0,src:B,loop:f,...E}),[f,k,w,r,E,B,z]),G=S.useMemo(()=>`audio-${ns(a??"")}-${y==null?void 0:y.relativeFrom}-${y==null?void 0:y.cumulatedFrom}-${y==null?void 0:y.durationInFrames}-muted:${t.muted}-loop:${t.loop}`,[a,y==null?void 0:y.relativeFrom,y==null?void 0:y.cumulatedFrom,y==null?void 0:y.durationInFrames,t.muted,t.loop]),U=nR(N,G).el,Z=By(U);zy({volumePropFrame:T,actualVolume:Z,volume:i,mediaVolume:M,mediaRef:U}),Dy({volume:i,mediaVolume:M,mediaRef:U,src:a,mediaType:"audio",playbackRate:o??1,displayName:x??null,id:C,stack:h,showInTimeline:d,premountDisplay:null,onAutoPlayError:null}),ky({mediaRef:U,src:a,mediaType:"audio",playbackRate:o??1,onlyWarnForMediaSeekingError:!1,acceptableTimeshift:u??Nh,isPremounting:!!(y!=null&&y.premounting),pauseWhenBuffering:p,debugSeeking:g,onAutoPlayError:null}),S.useImperativeHandle(e,()=>U.current,[U]);const I=S.useRef();return I.current=l,S.useEffect(()=>{var X;const{current:O}=U;if(!O)return;if(O.duration){(X=I.current)==null||X.call(I,O.src,O.duration);return}const H=()=>{var J;(J=I.current)==null||J.call(I,O.src,O.duration)};return O.addEventListener("loadedmetadata",H),()=>{O.removeEventListener("loadedmetadata",H)}},[U,a]),n?null:F.jsx("audio",{ref:U,preload:"metadata",...N})},rR=S.forwardRef(iR);typeof window<"u"&&(window.remotion_renderReady=!1);var Sl=[];typeof window<"u"&&(window.remotion_delayRenderTimeouts={});var oR="The delayRender was called:",sR="Retries left: ",aR="- Rendering the frame will be retried.",jg=3e4,kr=(t,e)=>{var r;if(typeof t!="string"&&typeof t<"u")throw new Error("The label parameter of delayRender() must be a string or undefined, got: "+JSON.stringify(t));const n=Math.random();Sl.push(n);const i=((r=Error().stack)==null?void 0:r.replace(/^Error/g,""))??"";if(Lt().isRendering){const o=((e==null?void 0:e.timeoutInMilliseconds)??(typeof window>"u"?jg:window.remotion_puppeteerTimeout??jg))-2e3;if(typeof window<"u"){const s=((e==null?void 0:e.retries)??0)-(window.remotion_attempt-1);window.remotion_delayRenderTimeouts[n]={label:t??null,timeout:setTimeout(()=>{const a=["A delayRender()",t?`"${t}"`:null,`was called but not cleared after ${o}ms. See https://remotion.dev/docs/timeout for help.`,s>0?sR+s:null,s>0?aR:null,oR,i].filter(Sh).join(" ");Rh(Error(a))},o)}}}return typeof window<"u"&&(window.remotion_renderReady=!1),n},At=t=>{if(typeof t>"u")throw new TypeError("The continueRender() method must be called with a parameter that is the return value of delayRender(). No value was passed.");if(typeof t!="number")throw new TypeError("The parameter passed into continueRender() must be the return value of delayRender() which is a number. Got: "+JSON.stringify(t));Sl=Sl.filter(e=>e===t?(Lt().isRendering&&(clearTimeout(window.remotion_delayRenderTimeouts[t].timeout),delete window.remotion_delayRenderTimeouts[t]),!1):!0),Sl.length===0&&typeof window<"u"&&(window.remotion_renderReady=!0)},lR=(t,e)=>{const n=S.useRef(null),{volume:i,playbackRate:r,allowAmplificationDuringRender:o,onDuration:s,toneFrequency:a,_remotionInternalNeedsDurationCalculation:l,_remotionInternalNativeLoopPassed:u,acceptableTimeShiftInSeconds:c,name:f,onError:h,delayRenderRetries:g,delayRenderTimeoutInMilliseconds:_,loopVolumeCurveBehavior:x,pauseWhenBuffering:p,...d}=t,m=Jo(),v=Lu(x??"repeat"),E=Hr(),M=S.useContext(tn),{registerRenderAsset:w,unregisterRenderAsset:T}=S.useContext(es),P=S.useMemo(()=>`audio-${ns(t.src??"")}-${M==null?void 0:M.relativeFrom}-${M==null?void 0:M.cumulatedFrom}-${M==null?void 0:M.durationInFrames}`,[t.src,M==null?void 0:M.relativeFrom,M==null?void 0:M.cumulatedFrom,M==null?void 0:M.durationInFrames]),B=fa({volume:i,frame:v,mediaVolume:1,allowAmplificationDuringRender:o??!1});S.useImperativeHandle(e,()=>n.current,[]),S.useEffect(()=>{if(!t.src)throw new Error("No src passed");if(window.remotion_audioEnabled&&!t.muted&&!(B<=0))return w({type:"audio",src:Or(t.src),id:P,frame:m,volume:B,mediaFrame:E,playbackRate:t.playbackRate??1,allowAmplificationDuringRender:o??!1,toneFrequency:a??null,audioStartFrame:Math.max(0,-((M==null?void 0:M.relativeFrom)??0))}),()=>T(P)},[t.muted,t.src,w,m,P,T,B,v,E,r,t.playbackRate,o,a,M==null?void 0:M.relativeFrom]);const{src:y}=t,C=e||l;return S.useLayoutEffect(()=>{var G,U;if(((U=(G=window.process)==null?void 0:G.env)==null?void 0:U.NODE_ENV)==="test"||!C)return;const k=kr("Loading <Audio> duration with src="+y,{retries:g??void 0,timeoutInMilliseconds:_??void 0}),{current:z}=n,N=()=>{z!=null&&z.duration&&s(z.src,z.duration),At(k)};return z!=null&&z.duration?(s(z.src,z.duration),At(k)):z==null||z.addEventListener("loadedmetadata",N,{once:!0}),()=>{z==null||z.removeEventListener("loadedmetadata",N),At(k)}},[y,s,C,g,_]),C?F.jsx("audio",{ref:n,...d}):null},uR=S.forwardRef(lR),cR=(t,e)=>{const n=S.useContext(Du),{startFrom:i,endAt:r,name:o,stack:s,pauseWhenBuffering:a,showInTimeline:l,_remotionDebugSeeking:u,...c}=t,{loop:f,...h}=t,{fps:g}=ar(),_=Lt(),{durations:x,setDurations:p}=S.useContext(Ph);if(typeof t.src!="string")throw new TypeError(`The \`<Audio>\` tag requires a string for \`src\`, but got ${JSON.stringify(t.src)} instead.`);const d=ts(t.src),m=S.useCallback(M=>{console.log(M.currentTarget.error);const w=`Could not play audio with src ${d}: ${M.currentTarget.error}. See https://remotion.dev/docs/media-playback-error for help.`;f?Rh(new Error(w)):console.warn(w)},[f,d]),v=S.useCallback((M,w)=>{p({type:"got-duration",durationInSeconds:w,src:M})},[p]),E=x[Or(d)]??x[Or(t.src)];if(f&&E!==void 0){if(!Number.isFinite(E))return F.jsx(El,{...h,ref:e,_remotionInternalNativeLoopPassed:!0});const M=E*g;return F.jsx(Ru,{layout:"none",durationInFrames:Cy({endAt:r,mediaDuration:M,playbackRate:t.playbackRate??1,startFrom:i}),children:F.jsx(El,{...h,ref:e,_remotionInternalNativeLoopPassed:!0})})}if(typeof i<"u"||typeof r<"u"){Ly(i,r);const M=i??0,w=r??1/0;return F.jsx(ca,{layout:"none",from:0-M,showInTimeline:!1,durationInFrames:w,name:o,children:F.jsx(El,{_remotionInternalNeedsDurationCalculation:!!f,pauseWhenBuffering:a??!1,...c,ref:e})})}return Py(t,"Audio"),_.isRendering?F.jsx(uR,{onDuration:v,...t,ref:e,onError:m,_remotionInternalNeedsDurationCalculation:!!f}):F.jsx(rR,{_remotionInternalNativeLoopPassed:t._remotionInternalNativeLoopPassed??!1,_remotionDebugSeeking:u??!1,_remotionInternalStack:s??null,shouldPreMountAudioTags:n!==null&&n.numberOfAudioTags>0,...t,ref:e,onError:m,onDuration:v,pauseWhenBuffering:a??!1,_remotionInternalNeedsDurationCalculation:!!f,showInTimeline:l??!0})},El=S.forwardRef(cR);la(El);var dR=S.createContext({folderName:null,parentName:null}),fR={transform:"rotate(90deg)"},Xg=40,hR={color:"white",fontSize:14,fontFamily:"sans-serif"},pR={justifyContent:"center",alignItems:"center"},mR=()=>F.jsxs(Eh,{style:pR,id:"remotion-comp-loading",children:[F.jsx("style",{type:"text/css",children:`
				@keyframes anim {
					from {
						opacity: 0
					}
					to {
						opacity: 1
					}
				}
				#remotion-comp-loading {
					animation: anim 2s;
					animation-fill-mode: forwards;
				}
			`}),F.jsx("svg",{width:Xg,height:Xg,viewBox:"-100 -100 400 400",style:fR,children:F.jsx("path",{fill:"#555",stroke:"#555",strokeWidth:"100",strokeLinejoin:"round",d:"M 2 172 a 196 100 0 0 0 195 5 A 196 240 0 0 0 100 2.259 A 196 240 0 0 0 2 172 z"})}),F.jsxs("p",{style:hR,children:["Resolving ","<Suspense>","..."]})]}),_n=null,lf=()=>{if(!_n){if(typeof document>"u")throw new Error("Tried to call an API that only works in the browser from outside the browser");_n=document.createElement("div"),_n.style.position="absolute",_n.style.top="0px",_n.style.left="0px",_n.style.right="0px",_n.style.bottom="0px",_n.style.width="100%",_n.style.height="100%",_n.style.display="flex",_n.style.flexDirection="column";const t=document.createElement("div");t.style.position="fixed",t.style.top="-999999px",t.appendChild(_n),document.body.appendChild(t)}return _n},Hy=t=>S.useMemo(()=>{if("lazyComponent"in t&&typeof t.lazyComponent<"u")return Ke.lazy(t.lazyComponent);if("component"in t)return typeof document>"u"?t.component:Ke.lazy(()=>Promise.resolve({default:t.component}));throw new Error("You must pass either 'component' or 'lazyComponent'")},[t.component,t.lazyComponent]),Gy=()=>/^([a-zA-Z0-9-\u4E00-\u9FFF])+$/g,Wy=t=>t.match(Gy()),gR=t=>{if(!Wy(t))throw new Error(`Composition id can only contain a-z, A-Z, 0-9, CJK characters and -. You passed ${t}`)},vR=`Composition ID must match ${String(Gy())}`,_R=(t,e,n)=>{if(t){if(typeof t!="object")throw new Error(`"${e}" must be an object, but you passed a value of type ${typeof t}`);if(Array.isArray(t))throw new Error(`"${e}" must be an object, an array was passed ${n?`for composition "${n}"`:""}`)}},yR=()=>(S.useEffect(()=>{const t=kr("Waiting for Root component to unsuspend");return()=>At(t)},[]),null),Yg=({width:t,height:e,fps:n,durationInFrames:i,id:r,defaultProps:o,schema:s,...a})=>{const{registerComposition:l,unregisterComposition:u}=S.useContext(sr),c=bu(),f=Hy(a),h=wh(),g=xh(),_=Lt();if(S.useContext(Vr))throw g?new Error("<Composition> was mounted inside the `component` that was passed to the <Player>. See https://remotion.dev/docs/wrong-composition-mount for help."):new Error("<Composition> mounted inside another composition. See https://remotion.dev/docs/wrong-composition-mount for help.");const{folderName:p,parentName:d}=S.useContext(dR);S.useEffect(()=>{if(!r)throw new Error("No id for composition passed.");return gR(r),_R(o,"defaultProps",r),l({durationInFrames:i??void 0,fps:n??void 0,height:e??void 0,width:t??void 0,id:r,folderName:p,component:f,defaultProps:_r(o??{}),nonce:h,parentFolderName:d,schema:s??null,calculateMetadata:a.calculateMetadata??null}),()=>{u(r)}},[i,n,e,f,r,p,o,l,u,t,h,d,s,a.calculateMetadata]);const m=Th(r);if(_.isStudio&&c&&c.component===f){const v=f;return m===null||m.type!=="success"?null:ef.createPortal(F.jsx(of,{children:F.jsx(S.Suspense,{fallback:F.jsx(mR,{}),children:F.jsx(v,{...m.result.props??{}})})}),lf())}if(_.isRendering&&c&&c.component===f){const v=f;return m===null||m.type!=="success"?null:ef.createPortal(F.jsx(of,{children:F.jsx(S.Suspense,{fallback:F.jsx(yR,{}),children:F.jsx(v,{...m.result.props??{}})})}),lf())}return null},$y=Ke.createRef(),xR=({children:t,numberOfAudioTags:e})=>{const[n,i]=S.useState([]),r=S.useRef(n),[o,s]=S.useState([]),[a,l]=S.useState(null),[u,c]=S.useState(null),f=S.useCallback(v=>{i(E=>{const M=v(E);return r.current=M,M})},[]),h=S.useCallback(v=>{f(E=>{if(E.find(w=>w.id===v.id))throw new Error(`Multiple composition with id ${v.id} are registered.`);return[...E,v].slice().sort((w,T)=>w.nonce-T.nonce)})},[f]),g=S.useCallback(v=>{i(E=>E.filter(M=>M.id!==v))},[]),_=S.useCallback((v,E)=>{s(M=>[...M,{name:v,parent:E}])},[]),x=S.useCallback((v,E)=>{s(M=>M.filter(w=>!(w.name===v&&w.parent===E)))},[]);S.useImperativeHandle($y,()=>({getCompositions:()=>r.current}),[]);const p=n.find(v=>(a==null?void 0:a.type)==="composition"?v.id===a.compositionId:null),d=S.useCallback((v,E)=>{i(M=>M.map(T=>T.id===v?{...T,defaultProps:E}:T))},[]),m=S.useMemo(()=>({compositions:n,registerComposition:h,unregisterComposition:g,folders:o,registerFolder:_,unregisterFolder:x,currentCompositionMetadata:u,setCurrentCompositionMetadata:c,canvasContent:a,setCanvasContent:l,updateCompositionDefaultProps:d}),[n,h,g,o,_,x,u,a,d]);return F.jsx(sr.Provider,{value:m,children:F.jsx(hb,{children:F.jsx(Nb,{children:F.jsx(Sy,{children:F.jsx(Vy,{numberOfAudioTags:e,component:(p==null?void 0:p.component)??null,children:t})})})})})},SR=({onLoad:t,onError:e,delayRenderRetries:n,delayRenderTimeoutInMilliseconds:i,...r},o)=>{const[s]=S.useState(()=>kr(`Loading <IFrame> with source ${r.src}`,{retries:n??void 0,timeoutInMilliseconds:i??void 0})),a=S.useCallback(u=>{At(s),t==null||t(u)},[s,t]),l=S.useCallback(u=>{At(s),e?e(u):console.error("Error loading iframe:",u,"Handle the event using the onError() prop to make this message disappear.")},[s,e]);return F.jsx("iframe",{...r,ref:o,onError:l,onLoad:a})};S.forwardRef(SR);function ER(t){return 1e3*2**(t-1)}var wR=({onError:t,maxRetries:e=2,src:n,pauseWhenLoading:i,delayRenderRetries:r,delayRenderTimeoutInMilliseconds:o,onImageFrame:s,...a},l)=>{const u=S.useRef(null),c=S.useRef({}),{delayPlayback:f}=Lh(),h=S.useContext(tn);if(!n)throw new Error('No "src" prop was passed to <Img>.');S.useImperativeHandle(l,()=>u.current,[]);const g=ts(n),_=S.useCallback(p=>{if(!u.current)return;const d=u.current.src;setTimeout(()=>{var v;if(!u.current)return;const m=(v=u.current)==null?void 0:v.src;m===d&&(u.current.removeAttribute("src"),u.current.setAttribute("src",m))},p)},[]),x=S.useCallback(p=>{var d,m,v,E,M,w,T;if(c.current){if(c.current[(d=u.current)==null?void 0:d.src]=(c.current[(m=u.current)==null?void 0:m.src]??0)+1,t&&(c.current[(v=u.current)==null?void 0:v.src]??0)>e){t(p);return}if((c.current[(E=u.current)==null?void 0:E.src]??0)<=e){const P=ER(c.current[(M=u.current)==null?void 0:M.src]??0);console.warn(`Could not load image with source ${(w=u.current)==null?void 0:w.src}, retrying again in ${P}ms`),_(P);return}Rh("Error loading image with src: "+((T=u.current)==null?void 0:T.src))}},[e,t,_]);if(typeof window<"u"){const p=!!(h!=null&&h.premounting);S.useLayoutEffect(()=>{var T,P;if(((P=(T=window.process)==null?void 0:T.env)==null?void 0:P.NODE_ENV)==="test"){u.current&&(u.current.src=g);return}const d=kr("Loading <Img> with src="+g,{retries:r??void 0,timeoutInMilliseconds:o??void 0}),m=i&&!p?f().unblock:()=>{},{current:v}=u;let E=!1;const M=()=>{var B,y,C;E||((c.current[(B=u.current)==null?void 0:B.src]??0)>0&&(delete c.current[(y=u.current)==null?void 0:y.src],console.info(`Retry successful - ${(C=u.current)==null?void 0:C.src} is now loaded`)),v&&(v.src=g,s==null||s(v)),m(),At(d))},w=new Image;return w.src=g,w.decode().then(M).catch(B=>{console.warn(B),w.complete?M():w.addEventListener("load",M)}),()=>{E=!0,w.removeEventListener("load",M),m(),At(d)}},[g,f,r,o,i,p,s])}return F.jsx("img",{...a,ref:u,onError:x})};S.forwardRef(wR);var jy={};ay(jy,{makeDefaultPreviewCSS:()=>TR,injectCSS:()=>MR,OFFTHREAD_VIDEO_CLASS_NAME:()=>uf});var qg={},MR=t=>{if(typeof document>"u"||qg[t])return;const e=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.appendChild(document.createTextNode(t)),e.prepend(n),qg[t]=!0},uf="__remotion_offthreadvideo",TR=(t,e)=>t?`
    ${t} * {
      box-sizing: border-box;
    }
    ${t} *:-webkit-full-screen {
      width: 100%;
      height: 100%;
    }
    ${t} .${uf} {
      object-fit: contain;
    }
  `:`
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
	    background-color: ${e};
    }
    .${uf} {
      object-fit: contain;
    }
    `,Xy="__remotion-studio-container",AR=()=>document.getElementById(Xy),CR=null,Yc=[],bR=()=>CR,RR=t=>(Yc.push(t),()=>{Yc=Yc.filter(e=>e!==t)}),PR=({children:t,numberOfAudioTags:e})=>{const[n]=S.useState(()=>String(ns(null))),[i,r]=S.useState(()=>wy()),[o,s]=S.useState(!1),a=S.useRef(!1),[l,u]=S.useState(0),[c,f]=S.useState(1),h=S.useRef([]);typeof window<"u"&&S.useLayoutEffect(()=>{window.remotion_setFrame=(p,d,m)=>{window.remotion_attempt=m;const v=kr(`Setting the current frame to ${p}`);let E=!0;r(M=>(M[d]??window.remotion_initialFrame)===p?(E=!1,M):{...M,[d]:p}),E?requestAnimationFrame(()=>At(v)):At(v)},window.remotion_isPlayer=!1},[]);const g=S.useMemo(()=>({frame:i,playing:o,imperativePlaying:a,rootId:n,playbackRate:c,setPlaybackRate:f,audioAndVideoTags:h}),[i,c,o,n]),_=S.useMemo(()=>({setFrame:r,setPlaying:s}),[]),x=S.useMemo(()=>{let p=0;return{getNonce:()=>p++,fastRefreshes:l}},[l]);return S.useEffect(()=>{typeof __webpack_module__<"u"&&__webpack_module__.hot&&__webpack_module__.hot.addStatusHandler(p=>{p==="idle"&&u(d=>d+1)})},[]),F.jsx(Zo.Provider,{value:x,children:F.jsx(qn.Provider,{value:g,children:F.jsx(Qo.Provider,{value:_,children:F.jsx(hy,{children:F.jsx(Ry,{children:F.jsx(xR,{numberOfAudioTags:e,children:F.jsx(Ny,{children:F.jsx(Iy,{children:t})})})})})})})})},LR=()=>{if(Lt().isRendering){const t=window.remotion_envVariables;return t?{...JSON.parse(t),NODE_ENV:"production"}:{}}return{NODE_ENV:"production"}},NR=()=>{const t=LR();window.process||(window.process={}),window.process.env||(window.process.env={}),Object.keys(t).forEach(e=>{window.process.env[e]=t[e]})},DR=Ke.createContext(null),IR=S.createContext({setSize:()=>{},size:{size:"auto",translation:{x:0,y:0}}}),UR=({canvasSize:t,compositionHeight:e,compositionWidth:n,previewSize:i})=>{const r=t.height/e,o=t.width/n,s=Math.min(r,o);return i==="auto"?s:Number(i)},FR="remotion_staticFilesChanged";function OR(){const t=Ke.useContext(sr),e=Ke.useContext(qn),n=Ke.useContext(Qo),i=Ke.useContext(tn),r=Ke.useContext(Zo),o=Ke.useContext(Vr),s=Ke.useContext(Pu),a=Ke.useContext(Cu),l=Ke.useContext(es),u=Ke.useContext(Ko),c=Ke.useContext(is);return S.useMemo(()=>({compositionManagerCtx:t,timelineContext:e,setTimelineContext:n,sequenceContext:i,nonceContext:r,canUseRemotionHooksContext:o,preloadContext:s,resolveCompositionContext:a,renderAssetManagerContext:l,sequenceManagerContext:u,bufferManagerContext:c}),[t,r,i,n,e,o,s,a,l,u,c])}var kR=t=>{const{children:e,contexts:n}=t;return F.jsx(Vr.Provider,{value:n.canUseRemotionHooksContext,children:F.jsx(Zo.Provider,{value:n.nonceContext,children:F.jsx(Pu.Provider,{value:n.preloadContext,children:F.jsx(sr.Provider,{value:n.compositionManagerCtx,children:F.jsx(Ko.Provider,{value:n.sequenceManagerContext,children:F.jsx(es.Provider,{value:n.renderAssetManagerContext,children:F.jsx(Cu.Provider,{value:n.resolveCompositionContext,children:F.jsx(qn.Provider,{value:n.timelineContext,children:F.jsx(Qo.Provider,{value:n.setTimelineContext,children:F.jsx(tn.Provider,{value:n.sequenceContext,children:F.jsx(is.Provider,{value:n.bufferManagerContext,children:e})})})})})})})})})})})},De={useUnsafeVideoConfig:bh,Timeline:dy,CompositionManager:sr,SequenceManager:Ko,SequenceVisibilityToggleContext:ua,RemotionRoot:PR,useVideo:bu,getRoot:bR,useMediaVolumeState:Fh,useMediaMutedState:Oh,useLazyComponent:Hy,truthy:Sh,SequenceContext:tn,useRemotionContexts:OR,RemotionContextProvider:kR,CSSUtils:jy,setupEnvVariables:NR,MediaVolumeContext:Ih,SetMediaVolumeContext:Uh,getRemotionEnvironment:Lt,SharedAudioContext:Du,SharedAudioContextProvider:Vy,invalidCompositionErrorMessage:vR,isCompositionIdValid:Wy,getPreviewDomElement:AR,compositionsRef:$y,portalNode:lf,waitForRoot:RR,CanUseRemotionHooksProvider:of,CanUseRemotionHooks:Vr,PrefetchProvider:Ry,DurationsContextProvider:Ny,IsPlayerContextProvider:cb,useIsPlayer:xh,EditorPropsProvider:hy,EditorPropsContext:Au,usePreload:ts,NonceContext:Zo,resolveVideoConfig:vy,useResolvedVideoConfig:Th,resolveCompositionsRef:_y,ResolveCompositionConfig:Sy,REMOTION_STUDIO_CONTAINER_ELEMENT:Xy,RenderAssetManager:es,persistCurrentFrame:Ey,useTimelineSetFrame:Ty,isIosSafari:Nu,WATCH_REMOTION_STATIC_FILES:FR,addSequenceStackTraces:la,useMediaStartsAt:da,BufferingProvider:Iy,BufferingContextReact:is,enableSequenceStackTraces:uy,CurrentScaleContext:DR,PreviewSizeContext:IR,calculateScale:UR,editorPropsProviderRef:fy,PROPS_UPDATED_EXTERNALLY:xy,validateRenderAsset:Ay},Yy=S.createContext(!1),BR=({children:t})=>F.jsx(Yy.Provider,{value:!1,children:t}),zR=()=>{if(!Ke.useContext(Yy))throw new Error("This component must be inside a <Series /> component.")},VR=({children:t},e)=>(zR(),F.jsx(BR,{children:t})),HR=S.forwardRef(VR);la(HR);var GR=({ref:t,onVideoFrame:e})=>{S.useEffect(()=>{const{current:n}=t;if(!n||!e)return;let i=0;const r=()=>{t.current&&(e(t.current),i=t.current.requestVideoFrameCallback(r))};return r(),()=>{n.cancelVideoFrameCallback(i)}},[e,t])},WR=(t,e)=>{const n=S.useRef(null),{volume:i,muted:r,playbackRate:o,onlyWarnForMediaSeekingError:s,src:a,onDuration:l,acceptableTimeShift:u,acceptableTimeShiftInSeconds:c,toneFrequency:f,name:h,_remotionInternalNativeLoopPassed:g,_remotionInternalStack:_,_remotionDebugSeeking:x,style:p,pauseWhenBuffering:d,showInTimeline:m,loopVolumeCurveBehavior:v,onError:E,onAutoPlayError:M,onVideoFrame:w,crossOrigin:T,...P}=t,B=Lu(v??"repeat"),{fps:y,durationInFrames:C}=ar(),k=S.useContext(tn),{hidden:z}=S.useContext(ua),[N]=S.useState(()=>String(Math.random())),G=z[N]??!1;if(typeof u<"u")throw new Error("acceptableTimeShift has been removed. Use acceptableTimeShiftInSeconds instead.");const U=By(n),[Z]=Fh(),[I]=Oh();Dy({mediaRef:n,volume:i,mediaVolume:Z,mediaType:"video",src:a,playbackRate:t.playbackRate??1,displayName:h??null,id:N,stack:_,showInTimeline:m,premountDisplay:null,onAutoPlayError:M??null}),zy({volumePropFrame:B,actualVolume:U,volume:i,mediaVolume:Z,mediaRef:n}),ky({mediaRef:n,src:a,mediaType:"video",playbackRate:t.playbackRate??1,onlyWarnForMediaSeekingError:s,acceptableTimeshift:c??Nh,isPremounting:!!(k!=null&&k.premounting),pauseWhenBuffering:d,debugSeeking:x,onAutoPlayError:M??null});const O=k?k.relativeFrom:0,H=k?Math.min(k.durationInFrames,C):C,X=Zb({actualSrc:ts(a),actualFrom:O,duration:H,fps:y});S.useImperativeHandle(e,()=>n.current,[]),S.useEffect(()=>{const{current:K}=n;if(!K)return;const ne=()=>{var de;if(K.error){if(console.error("Error occurred in video",K==null?void 0:K.error),E){const ye=new Error(`Code ${K.error.code}: ${K.error.message}`);E(ye);return}throw new Error(`The browser threw an error while playing the video ${a}: Code ${K.error.code} - ${(de=K==null?void 0:K.error)==null?void 0:de.message}. See https://remotion.dev/docs/media-playback-error for help. Pass an onError() prop to handle the error.`)}else{if(E){const ye=new Error(`The browser threw an error while playing the video ${a}`);E(ye);return}throw new Error("The browser threw an error while playing the video")}};return K.addEventListener("error",ne,{once:!0}),()=>{K.removeEventListener("error",ne)}},[E,a]);const J=S.useRef();J.current=l,GR({ref:n,onVideoFrame:w}),S.useEffect(()=>{var de;const{current:K}=n;if(!K)return;if(K.duration){(de=J.current)==null||de.call(J,a,K.duration);return}const ne=()=>{var ye;(ye=J.current)==null||ye.call(J,a,K.duration)};return K.addEventListener("loadedmetadata",ne),()=>{K.removeEventListener("loadedmetadata",ne)}},[a]),S.useEffect(()=>{const{current:K}=n;K&&(Nu()?K.preload="metadata":K.preload="auto")},[]);const ge=S.useMemo(()=>({...p,opacity:G?0:(p==null?void 0:p.opacity)??1}),[G,p]),$=T??(w?"anonymous":void 0);return F.jsx("video",{ref:n,muted:r||I,playsInline:!0,src:X,loop:g,style:ge,disableRemotePlayback:!0,crossOrigin:$,...P})},$R=S.forwardRef(WR),Kg=t=>Math.round(t*1e5)/1e5,qc=(t,e)=>{if(Dh(t.currentTime,e))return{wait:Promise.resolve(e),cancel:()=>{}};t.currentTime=e;let n,i=null;const r=new Promise(s=>{n=t.requestVideoFrameCallback((a,l)=>{const u=l.expectedDisplayTime-a;if(u<=0){s(l.mediaTime);return}setTimeout(()=>{s(l.mediaTime)},u+150)})}),o=new Promise(s=>{const a=()=>{s()};t.addEventListener("seeked",a,{once:!0}),i=()=>{t.removeEventListener("seeked",a)}});return{wait:Promise.all([r,o]).then(([s])=>s),cancel:()=>{i==null||i(),t.cancelVideoFrameCallback(n)}}},jR=(t,e,n)=>{const i=1/n/2;let r=()=>{};return Number.isFinite(t.duration)&&t.currentTime>=t.duration&&e>=t.duration?{prom:Promise.resolve(),cancel:()=>{}}:{prom:new Promise((s,a)=>{const l=qc(t,e+i);l.wait.then(u=>{if(Math.abs(e-u)<=i)return s();const f=e>u?1:-1,h=qc(t,u+i*f);r=h.cancel,h.wait.then(g=>{const _=Math.abs(e-g);if(Kg(_)<=Kg(i))return s();const x=qc(t,e+i);return r=x.cancel,x.wait.then(()=>{s()}).catch(p=>{a(p)})}).catch(g=>{a(g)})}),r=l.cancel}),cancel:()=>{r()}}},XR=({onError:t,volume:e,allowAmplificationDuringRender:n,playbackRate:i,onDuration:r,toneFrequency:o,name:s,acceptableTimeShiftInSeconds:a,delayRenderRetries:l,delayRenderTimeoutInMilliseconds:u,loopVolumeCurveBehavior:c,...f},h)=>{const g=Jo(),_=Hr(),x=Lu(c??"repeat"),p=bh(),d=S.useRef(null),m=S.useContext(tn),v=da(),E=Lt(),{registerRenderAsset:M,unregisterRenderAsset:w}=S.useContext(es),T=S.useMemo(()=>`video-${ns(f.src??"")}-${m==null?void 0:m.cumulatedFrom}-${m==null?void 0:m.relativeFrom}-${m==null?void 0:m.durationInFrames}`,[f.src,m==null?void 0:m.cumulatedFrom,m==null?void 0:m.relativeFrom,m==null?void 0:m.durationInFrames]);if(!p)throw new Error("No video config found");const P=fa({volume:e,frame:x,mediaVolume:1,allowAmplificationDuringRender:n??!1});S.useEffect(()=>{if(!f.src)throw new Error("No src passed");if(!f.muted&&!(P<=0)&&window.remotion_audioEnabled)return M({type:"video",src:Or(f.src),id:T,frame:g,volume:P,mediaFrame:_,playbackRate:i??1,allowAmplificationDuringRender:n??!1,toneFrequency:o??null,audioStartFrame:Math.max(0,-((m==null?void 0:m.relativeFrom)??0))}),()=>w(T)},[f.muted,f.src,M,T,w,P,_,g,i,n,o,m==null?void 0:m.relativeFrom]),S.useImperativeHandle(h,()=>d.current,[]),S.useEffect(()=>{var U,Z;if(!window.remotion_videoEnabled)return;const{current:y}=d;if(!y)return;const C=Fy({frame:_,playbackRate:i||1,startFrom:-v,fps:p.fps}),k=kr(`Rendering <Video /> with src="${f.src}" at time ${C}`,{retries:l??void 0,timeoutInMilliseconds:u??void 0});if(((Z=(U=window.process)==null?void 0:U.env)==null?void 0:Z.NODE_ENV)==="test"){At(k);return}if(Dh(y.currentTime,C)){if(y.readyState>=2){At(k);return}const I=()=>{At(k)};return y.addEventListener("loadeddata",I,{once:!0}),()=>{y.removeEventListener("loadeddata",I)}}const z=()=>{At(k)},N=jR(y,C,p.fps);N.prom.then(()=>{At(k)}),y.addEventListener("ended",z,{once:!0});const G=()=>{var I;if(y!=null&&y.error){if(console.error("Error occurred in video",y==null?void 0:y.error),t)return;throw new Error(`The browser threw an error while playing the video ${f.src}: Code ${y.error.code} - ${(I=y==null?void 0:y.error)==null?void 0:I.message}. See https://remotion.dev/docs/media-playback-error for help. Pass an onError() prop to handle the error.`)}else throw new Error("The browser threw an error")};return y.addEventListener("error",G,{once:!0}),()=>{N.cancel(),y.removeEventListener("ended",z),y.removeEventListener("error",G),At(k)}},[x,f.src,i,p.fps,_,v,t,l,u]);const{src:B}=f;return E.isRendering&&S.useLayoutEffect(()=>{var z,N;if(((N=(z=window.process)==null?void 0:z.env)==null?void 0:N.NODE_ENV)==="test")return;const y=kr("Loading <Video> duration with src="+B,{retries:l??void 0,timeoutInMilliseconds:u??void 0}),{current:C}=d,k=()=>{C!=null&&C.duration&&r(B,C.duration),At(y)};return C!=null&&C.duration?(r(B,C.duration),At(y)):C==null||C.addEventListener("loadedmetadata",k,{once:!0}),()=>{C==null||C.removeEventListener("loadedmetadata",k),At(y)}},[B,r,l,u]),F.jsx("video",{ref:d,disableRemotePlayback:!0,...f})},YR=S.forwardRef(XR),qR=(t,e)=>{const{startFrom:n,endAt:i,name:r,pauseWhenBuffering:o,stack:s,_remotionInternalNativeLoopPassed:a,showInTimeline:l,onAutoPlayError:u,...c}=t,{loop:f,_remotionDebugSeeking:h,...g}=t,{fps:_}=ar(),x=Lt(),{durations:p,setDurations:d}=S.useContext(Ph);if(typeof e=="string")throw new Error("string refs are not supported");if(typeof t.src!="string")throw new TypeError(`The \`<Video>\` tag requires a string for \`src\`, but got ${JSON.stringify(t.src)} instead.`);const m=ts(t.src),v=S.useCallback((w,T)=>{d({type:"got-duration",durationInSeconds:T,src:w})},[d]),E=S.useCallback(()=>{},[]),M=p[Or(m)]??p[Or(t.src)];if(f&&M!==void 0){if(!Number.isFinite(M))return F.jsx(wl,{...g,ref:e,_remotionInternalNativeLoopPassed:!0});const w=M*_;return F.jsx(Ru,{durationInFrames:Cy({endAt:i,mediaDuration:w,playbackRate:t.playbackRate??1,startFrom:n}),layout:"none",name:r,children:F.jsx(wl,{...g,ref:e,_remotionInternalNativeLoopPassed:!0})})}if(typeof n<"u"||typeof i<"u"){Ly(n,i);const w=n??0,T=i??1/0;return F.jsx(ca,{layout:"none",from:0-w,showInTimeline:!1,durationInFrames:T,name:r,children:F.jsx(wl,{pauseWhenBuffering:o??!1,...c,ref:e})})}return Py(t,"Video"),x.isRendering?F.jsx(YR,{onDuration:v,onVideoFrame:E??null,...c,ref:e}):F.jsx($R,{onlyWarnForMediaSeekingError:!1,...c,ref:e,onVideoFrame:null,pauseWhenBuffering:o??!1,onDuration:v,_remotionInternalStack:s??null,_remotionInternalNativeLoopPassed:a??!1,_remotionDebugSeeking:h??!1,showInTimeline:l??!0,onAutoPlayError:u??void 0})},wl=S.forwardRef(qR);la(wl);db();var KR={},ZR=new Proxy(KR,{get(t,e){return e==="Bundling"||e==="Rendering"||e==="Log"||e==="Puppeteer"||e==="Output"?ZR:()=>{console.warn("⚠️  The CLI configuration has been extracted from Remotion Core."),console.warn("Update the import from the config file:"),console.warn(),console.warn("- Delete:"),console.warn('import {Config} from "remotion";'),console.warn("+ Replace:"),console.warn('import {Config} from "@remotion/cli/config";'),console.warn(),console.warn("For more information, see https://www.remotion.dev/docs/4-0-migration."),process.exit(1)}}});la(ca);function QR(t,e,n,i){const{extrapolateLeft:r,extrapolateRight:o,easing:s}=i;let a=t;const[l,u]=e,[c,f]=n;if(a<l){if(r==="identity")return a;if(r==="clamp")a=l;else if(r==="wrap"){const h=u-l;a=((a-l)%h+h)%h+l}}if(a>u){if(o==="identity")return a;if(o==="clamp")a=u;else if(o==="wrap"){const h=u-l;a=((a-l)%h+h)%h+l}}return c===f?c:(a=(a-l)/(u-l),a=s(a),a=a*(f-c)+c,a)}function JR(t,e){let n;for(n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}function e2(t){for(let e=1;e<t.length;++e)if(!(t[e]>t[e-1]))throw new Error(`inputRange must be strictly monotonically increasing but got [${t.join(",")}]`)}function Zg(t,e){if(e.length<2)throw new Error(t+" must have at least 2 elements");for(const n of e){if(typeof n!="number")throw new Error(`${t} must contain only numbers`);if(!Number.isFinite(n))throw new Error(`${t} must contain only finite numbers, but got [${e.join(",")}]`)}}function t2(t,e,n,i){if(typeof t>"u")throw new Error("input can not be undefined");if(typeof e>"u")throw new Error("inputRange can not be undefined");if(typeof n>"u")throw new Error("outputRange can not be undefined");if(e.length!==n.length)throw new Error("inputRange ("+e.length+") and outputRange ("+n.length+") must have the same length");Zg("inputRange",e),Zg("outputRange",n),e2(e);const r=l=>l;let o="extend",s="extend";if(typeof t!="number")throw new TypeError("Cannot interpolate an input which is not a number");const a=JR(t,e);return QR(t,[e[a],e[a+1]],[n[a],n[a+1]],{easing:r,extrapolateLeft:o,extrapolateRight:s})}function n2(t){return!!t}typeof window<"u"&&(window.remotion_renderReady=!1);typeof window<"u"&&(window.remotion_delayRenderTimeouts={});var i2="The delayRender was called:",r2="Retries left: ",o2="- Rendering the frame will be retried.",s2={"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";"},Qg={},a2=t=>{Qg[t]||(console.warn(t),Qg[t]=!0)},l2=t=>{for(const e of Object.keys(s2))if(t.includes(e))return{containsHex:!0,hexCode:e};return{containsHex:!1}},cf=t=>t.startsWith("/")?cf(t.substring(1)):t,u2=t=>{if(typeof window<"u"&&window.remotion_staticBase){if(t.startsWith(window.remotion_staticBase))throw new Error(`The value "${t}" is already prefixed with the static base ${window.remotion_staticBase}. You don't need to call staticFile() on it.`);return`${window.remotion_staticBase}/${cf(t)}`}return`/${cf(t)}`},c2=t=>t.split("/").map(r=>encodeURIComponent(r)).join("/"),d2=t=>{if(t===null)throw new TypeError("null was passed to staticFile()");if(typeof t>"u")throw new TypeError("undefined was passed to staticFile()");if(t.startsWith("http://")||t.startsWith("https://"))throw new TypeError(`staticFile() does not support remote URLs - got "${t}". Instead, pass the URL without wrapping it in staticFile(). See: https://remotion.dev/docs/staticfile-remote-urls`);if(t.startsWith("..")||t.startsWith("./"))throw new TypeError(`staticFile() does not support relative paths - got "${t}". Instead, pass the name of a file that is inside the public/ folder. See: https://remotion.dev/docs/staticfile-relative-paths`);if(t.startsWith("/Users")||t.startsWith("/home")||t.startsWith("/tmp")||t.startsWith("/etc")||t.startsWith("/opt")||t.startsWith("/var")||t.startsWith("C:")||t.startsWith("D:")||t.startsWith("E:"))throw new TypeError(`staticFile() does not support absolute paths - got "${t}". Instead, pass the name of a file that is inside the public/ folder. See: https://remotion.dev/docs/staticfile-relative-paths`);if(t.startsWith("public/"))throw new TypeError(`Do not include the public/ prefix when using staticFile() - got "${t}". See: https://remotion.dev/docs/staticfile-relative-paths`);const e=l2(t);e.containsHex&&a2(`WARNING: You seem to pass an already encoded path (path contains ${e.hexCode}). Since Remotion 4.0, the encoding is done by staticFile() itself. You may want to remove a encodeURIComponent() wrapping.`);const n=c2(t),i=u2(n);return i.startsWith("/")?i:`/${i}`},nu="remotion-date:",iu="remotion-file:",f2=({data:t,indent:e,staticBase:n})=>{let i=!1,r=!1,o=!1,s=!1;try{return{serializedString:JSON.stringify(t,function(l,u){const c=this[l];return c instanceof Date?(i=!0,`${nu}${c.toISOString()}`):c instanceof Map?(o=!0,u):c instanceof Set?(s=!0,u):typeof c=="string"&&n!==null&&c.startsWith(n)?(r=!0,`${iu}${c.replace(n+"/","")}`):u},e),customDateUsed:i,customFileUsed:r,mapUsed:o,setUsed:s}}catch(a){throw new Error("Could not serialize the passed input props to JSON: "+a.message)}},h2=t=>JSON.parse(t,(e,n)=>typeof n=="string"&&n.startsWith(nu)?new Date(n.replace(nu,"")):typeof n=="string"&&n.startsWith(iu)?d2(n.replace(iu,"")):n);function rl(...t){return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}function p2(){const t={rgb:void 0,rgba:void 0,hsl:void 0,hsla:void 0,hex3:void 0,hex4:void 0,hex5:void 0,hex6:void 0,hex8:void 0};return t.rgb===void 0&&(t.rgb=new RegExp("rgb"+rl(zn,zn,zn)),t.rgba=new RegExp("rgba"+rl(zn,zn,zn,zn)),t.hsl=new RegExp("hsl"+rl(zn,sl,sl)),t.hsla=new RegExp("hsla"+rl(zn,sl,sl,zn)),t.hex3=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,t.hex4=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,t.hex6=/^#([0-9a-fA-F]{6})$/,t.hex8=/^#([0-9a-fA-F]{8})$/),t}function Kc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Jg(t,e,n){const i=n<.5?n*(1+e):n+e-n*e,r=2*n-i,o=Kc(r,i,t+1/3),s=Kc(r,i,t),a=Kc(r,i,t-1/3);return Math.round(o*255)<<24|Math.round(s*255)<<16|Math.round(a*255)<<8}function so(t){const e=Number.parseInt(t,10);return e<0?0:e>255?255:e}function ev(t){return(Number.parseFloat(t)%360+360)%360/360}function tv(t){const e=Number.parseFloat(t);return e<0?0:e>1?255:Math.round(e*255)}function ol(t){const e=Number.parseFloat(t);return e<0?0:e>100?1:e/100}function m2(t){const e=p2();let n;if(e.hex6&&(n=e.hex6.exec(t)))return Number.parseInt(n[1]+"ff",16)>>>0;if(df[t]!==void 0)return df[t];if(e.rgb&&(n=e.rgb.exec(t)))return(so(n[1])<<24|so(n[2])<<16|so(n[3])<<8|255)>>>0;if(e.rgba&&(n=e.rgba.exec(t)))return(so(n[1])<<24|so(n[2])<<16|so(n[3])<<8|tv(n[4]))>>>0;if(e.hex3&&(n=e.hex3.exec(t)))return Number.parseInt(n[1]+n[1]+n[2]+n[2]+n[3]+n[3]+"ff",16)>>>0;if(e.hex8&&(n=e.hex8.exec(t)))return Number.parseInt(n[1],16)>>>0;if(e.hex4&&(n=e.hex4.exec(t)))return Number.parseInt(n[1]+n[1]+n[2]+n[2]+n[3]+n[3]+n[4]+n[4],16)>>>0;if(e.hsl&&(n=e.hsl.exec(t)))return(Jg(ev(n[1]),ol(n[2]),ol(n[3]))|255)>>>0;if(e.hsla&&(n=e.hsla.exec(t)))return(Jg(ev(n[1]),ol(n[2]),ol(n[3]))|tv(n[4]))>>>0;throw new Error(`invalid color string ${t} provided`)}function g2(t){const e=m2(t);return(e<<24|e>>>8)>>>0}var zn="[-+]?\\d*\\.?\\d+",sl=zn+"%",df={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},v2=!1,_2=({allowFloats:t,durationInFrames:e,frame:n})=>{if(typeof n>"u")throw new TypeError('Argument missing for parameter "frame"');if(typeof n!="number")throw new TypeError(`Argument passed for "frame" is not a number: ${n}`);if(!Number.isFinite(n))throw new RangeError(`Frame ${n} is not finite`);if(n%1!==0&&!t)throw new RangeError(`Argument for frame must be an integer, but got ${n}`);if(n<0&&n<-e)throw new RangeError(`Cannot use frame ${n}: Duration of composition is ${e}, therefore the lowest frame that can be rendered is ${-e}`);if(n>e-1)throw new RangeError(`Cannot use frame ${n}: Duration of composition is ${e}, therefore the highest frame that can be rendered is ${e-1}`)},y2=(t,e,n)=>{if(t){if(typeof t!="object")throw new Error(`"${e}" must be an object, but you passed a value of type ${typeof t}`);if(Array.isArray(t))throw new Error(`"${e}" must be an object, an array was passed ${n?`for composition "${n}"`:""}`)}};function x2(t,e,n){if(typeof t!="number")throw new Error(`The "${e}" prop ${n} must be a number, but you passed a value of type ${typeof t}`);if(isNaN(t))throw new TypeError(`The "${e}" prop ${n} must not be NaN, but is NaN.`);if(!Number.isFinite(t))throw new TypeError(`The "${e}" prop ${n} must be finite, but is ${t}.`);if(t%1!==0)throw new TypeError(`The "${e}" prop ${n} must be an integer, but is ${t}.`);if(t<=0)throw new TypeError(`The "${e}" prop ${n} must be positive, but got ${t}.`)}function S2(t,e){const{allowFloats:n,component:i}=e;if(typeof t>"u")throw new Error(`The "durationInFrames" prop ${i} is missing.`);if(typeof t!="number")throw new Error(`The "durationInFrames" prop ${i} must be a number, but you passed a value of type ${typeof t}`);if(t<=0)throw new TypeError(`The "durationInFrames" prop ${i} must be positive, but got ${t}.`);if(!n&&t%1!==0)throw new TypeError(`The "durationInFrames" prop ${i} must be an integer, but got ${t}.`);if(!Number.isFinite(t))throw new TypeError(`The "durationInFrames" prop ${i} must be finite, but got ${t}.`)}function E2(t,e,n){if(typeof t!="number")throw new Error(`"fps" must be a number, but you passed a value of type ${typeof t} ${e}`);if(!Number.isFinite(t))throw new Error(`"fps" must be a finite, but you passed ${t} ${e}`);if(isNaN(t))throw new Error(`"fps" must not be NaN, but got ${t} ${e}`);if(t<=0)throw new TypeError(`"fps" must be positive, but got ${t} ${e}`);if(n&&t>50)throw new TypeError("The FPS for a GIF cannot be higher than 50. Use the --every-nth-frame option to lower the FPS: https://remotion.dev/docs/render-as-gif")}var w2=({frame:t,playbackRate:e,startFrom:n})=>t2(t,[-1,n,n+1],[-1,n,n+e]),M2=t=>typeof window>"u"?t:new URL(t,window.origin).href,T2=({src:t,transparent:e,currentTime:n,toneMapped:i})=>`http://localhost:${window.remotion_proxyPort}/proxy?src=${encodeURIComponent(M2(t))}&time=${encodeURIComponent(n)}&transparent=${String(e)}&toneMapped=${String(i)}`,Iu={processColor:g2,truthy:n2,validateFps:E2,validateDimension:x2,validateDurationInFrames:S2,validateDefaultAndInputProps:y2,validateFrame:_2,serializeJSONWithDate:f2,bundleName:"bundle.js",bundleMapName:"bundle.js.map",deserializeJSONWithCustomFields:h2,DELAY_RENDER_CALLSTACK_TOKEN:i2,DELAY_RENDER_RETRY_TOKEN:o2,DELAY_RENDER_ATTEMPT_TOKEN:r2,getOffthreadVideoSource:T2,getExpectedMediaFrameUncorrected:w2,ENABLE_V5_BREAKING_CHANGES:v2,MIN_NODE_VERSION:16,MIN_BUN_VERSION:"1.0.3",colorNames:df,DATE_TOKEN:nu,FILE_TOKEN:iu},zt=25,ff=16,A2=()=>F.jsx("svg",{width:zt,height:zt,viewBox:"0 0 25 25",fill:"none",children:F.jsx("path",{d:"M8 6.375C7.40904 8.17576 7.06921 10.2486 7.01438 12.3871C6.95955 14.5255 7.19163 16.6547 7.6875 18.5625C9.95364 18.2995 12.116 17.6164 14.009 16.5655C15.902 15.5147 17.4755 14.124 18.6088 12.5C17.5158 10.8949 15.9949 9.51103 14.1585 8.45082C12.3222 7.3906 10.2174 6.68116 8 6.375Z",fill:"white",stroke:"white",strokeWidth:"6.25",strokeLinejoin:"round"})}),C2=()=>F.jsxs("svg",{viewBox:"0 0 100 100",width:zt,height:zt,children:[F.jsx("rect",{x:"25",y:"20",width:"20",height:"60",fill:"#fff",ry:"5",rx:"5"}),F.jsx("rect",{x:"55",y:"20",width:"20",height:"60",fill:"#fff",ry:"5",rx:"5"})]}),b2=({isFullscreen:t})=>{const i=t?0:3,r=t?6*1.6:6/2,o=t?6*1.6:6*2;return F.jsxs("svg",{viewBox:"0 0 32 32",height:ff,width:ff,children:[F.jsx("path",{d:`
				M ${i} ${o}
				L ${r} ${r}
				L ${o} ${i}
				`,stroke:"#fff",strokeWidth:6,fill:"none"}),F.jsx("path",{d:`
				M ${32-i} ${o}
				L ${32-r} ${r}
				L ${32-o} ${i}
				`,stroke:"#fff",strokeWidth:6,fill:"none"}),F.jsx("path",{d:`
				M ${i} ${32-o}
				L ${r} ${32-r}
				L ${o} ${32-i}
				`,stroke:"#fff",strokeWidth:6,fill:"none"}),F.jsx("path",{d:`
				M ${32-i} ${32-o}
				L ${32-r} ${32-r}
				L ${32-o} ${32-i}
				`,stroke:"#fff",strokeWidth:6,fill:"none"})]})},R2=()=>F.jsx("svg",{width:zt,height:zt,viewBox:"0 0 24 24",children:F.jsx("path",{d:"M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 101.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12A4.5 4.5 0 0014 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z",fill:"#fff"})}),P2=()=>F.jsx("svg",{width:zt,height:zt,viewBox:"0 0 24 24",children:F.jsx("path",{d:"M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z",fill:"#fff"})}),nv="__remotion_buffering_indicator",iv="__remotion_buffering_animation",L2={width:zt,height:zt,overflow:"hidden",lineHeight:"normal",fontSize:"inherit"},N2={width:14,height:14,overflow:"hidden",lineHeight:"normal",fontSize:"inherit"},D2=({type:t})=>{const e=t==="player"?L2:N2;return F.jsxs(F.Fragment,{children:[F.jsx("style",{type:"text/css",children:`
				@keyframes ${iv} {
          0% {
            rotate: 0deg;
          }
          100% {
            rotate: 360deg;
          }
        }
        
        .${nv} {
            animation: ${iv} 1s linear infinite;
        }        
			`}),F.jsx("div",{style:e,children:F.jsx("svg",{viewBox:t==="player"?"0 0 22 22":"0 0 18 18",style:e,className:nv,children:F.jsx("path",{d:t==="player"?"M 11 4 A 7 7 0 0 1 15.1145 16.66312":"M 9 2 A 7 7 0 0 1 13.1145 14.66312",stroke:"white",strokeLinecap:"round",fill:"none",strokeWidth:3})})})]})},I2=({currentSize:t,width:e,height:n,compositionWidth:i,compositionHeight:r})=>e!==void 0&&n===void 0?{aspectRatio:[i,r].join("/")}:n!==void 0&&e===void 0?{aspectRatio:[i,r].join("/")}:t?{width:i,height:r}:{width:i,height:r},qy=({previewSize:t,compositionWidth:e,compositionHeight:n,canvasSize:i})=>{const r=De.calculateScale({canvasSize:i,compositionHeight:n,compositionWidth:e,previewSize:t}),o=0-(1-r)/2,s=o*e,a=o*n,l=e*r,u=n*r,c=i.width/2-l/2,f=i.height/2-u/2;return{centerX:c,centerY:f,xCorrection:s,yCorrection:a,scale:r}},Ky=({config:t,style:e,canvasSize:n,overflowVisible:i,layout:r})=>t?{position:"relative",overflow:i?"visible":"hidden",...I2({compositionHeight:t.height,compositionWidth:t.width,currentSize:n,height:e==null?void 0:e.height,width:e==null?void 0:e.width}),opacity:r?1:0,...e}:{},Zy=({config:t,canvasSize:e,layout:n,scale:i,overflowVisible:r})=>!t||!e||!n?{}:{position:"absolute",width:t.width,height:t.height,display:"flex",transform:`scale(${i})`,marginLeft:n.xCorrection,marginTop:n.yCorrection,overflow:r?"visible":"hidden"},Qy=({layout:t,scale:e,config:n,overflowVisible:i})=>{if(!t||!n)return{};const{centerX:r,centerY:o}=t;return{width:n.width*e,height:n.height*e,display:"flex",flexDirection:"column",position:"absolute",left:r,top:o,overflow:i?"visible":"hidden"}},Jy=Ke.createContext(void 0),ex=Ke.createContext(void 0);class U2{constructor(){ma(this,"listeners",{ended:[],error:[],pause:[],play:[],ratechange:[],scalechange:[],seeked:[],timeupdate:[],frameupdate:[],fullscreenchange:[],volumechange:[],mutechange:[],waiting:[],resume:[]})}addEventListener(e,n){this.listeners[e].push(n)}removeEventListener(e,n){this.listeners[e]=this.listeners[e].filter(i=>i!==n)}dispatchEvent(e,n){this.listeners[e].forEach(i=>{i({detail:n})})}dispatchSeek(e){this.dispatchEvent("seeked",{frame:e})}dispatchVolumeChange(e){this.dispatchEvent("volumechange",{volume:e})}dispatchPause(){this.dispatchEvent("pause",void 0)}dispatchPlay(){this.dispatchEvent("play",void 0)}dispatchEnded(){this.dispatchEvent("ended",void 0)}dispatchRateChange(e){this.dispatchEvent("ratechange",{playbackRate:e})}dispatchScaleChange(e){this.dispatchEvent("scalechange",{scale:e})}dispatchError(e){this.dispatchEvent("error",{error:e})}dispatchTimeUpdate(e){this.dispatchEvent("timeupdate",e)}dispatchFrameUpdate(e){this.dispatchEvent("frameupdate",e)}dispatchFullscreenChange(e){this.dispatchEvent("fullscreenchange",e)}dispatchMuteChange(e){this.dispatchEvent("mutechange",e)}dispatchWaiting(e){this.dispatchEvent("waiting",e)}dispatchResume(e){this.dispatchEvent("resume",e)}}class F2{constructor(){ma(this,"listeners",{error:[],waiting:[],resume:[]})}addEventListener(e,n){this.listeners[e].push(n)}removeEventListener(e,n){this.listeners[e]=this.listeners[e].filter(i=>i!==n)}dispatchEvent(e,n){this.listeners[e].forEach(i=>{i({detail:n})})}dispatchError(e){this.dispatchEvent("error",{error:e})}dispatchWaiting(e){this.dispatchEvent("waiting",e)}dispatchResume(e){this.dispatchEvent("resume",e)}}var tx=t=>{const e=S.useContext(De.BufferingContextReact);if(!e)throw new Error("BufferingContextReact not found");S.useEffect(()=>{const n=e.listenForBuffering(()=>{e.buffering.current=!0,t.dispatchWaiting({})}),i=e.listenForResume(()=>{e.buffering.current=!1,t.dispatchResume({})});return()=>{n.remove(),i.remove()}},[e,t])},O2=({children:t,currentPlaybackRate:e})=>{const[n]=S.useState(()=>new U2);if(!S.useContext(De.BufferingContextReact))throw new Error("BufferingContextReact not found");return S.useEffect(()=>{e&&n.dispatchRateChange(e)},[n,e]),tx(n),F.jsx(Jy.Provider,{value:n,children:t})},kh=(t,e)=>{const[n,i]=S.useState(!1);return S.useEffect(()=>{const{current:r}=t;if(!r)return;let o;const s=()=>{e&&(clearTimeout(o),o=setTimeout(()=>{i(!1)},e===!0?3e3:e))},a=()=>{i(!0),s()},l=()=>{i(!1),clearTimeout(o)},u=()=>{i(!0),s()};return r.addEventListener("mouseenter",a),r.addEventListener("mouseleave",l),r.addEventListener("mousemove",u),()=>{r.removeEventListener("mouseenter",a),r.removeEventListener("mouseleave",l),r.removeEventListener("mousemove",u),clearTimeout(o)}},[e,t]),n},Uu=()=>{const[t,e,n]=De.Timeline.usePlayingState(),[i,r]=S.useState(!1),o=De.Timeline.useTimelinePosition(),s=S.useRef(o),a=De.Timeline.useTimelineSetFrame(),l=De.Timeline.useTimelineSetFrame(),u=S.useContext(De.SharedAudioContext),{audioAndVideoTags:c}=S.useContext(De.Timeline.TimelineContext),f=S.useRef(o);f.current=o;const h=De.useVideo(),g=De.useUnsafeVideoConfig(),_=S.useContext(Jy),x=((g==null?void 0:g.durationInFrames)??1)-1,p=o===x,d=o===0;if(!_)throw new TypeError("Expected Player event emitter context");const m=S.useContext(De.BufferingContextReact);if(!m)throw new Error("Missing the buffering context. Most likely you have a Remotion version mismatch.");const{buffering:v}=m,E=S.useCallback(k=>{h!=null&&h.id&&l(z=>({...z,[h.id]:k})),f.current=k,_.dispatchSeek(k)},[_,l,h==null?void 0:h.id]),M=S.useCallback(k=>{n.current||(r(!0),p&&E(0),u&&u.numberOfAudioTags>0&&k&&u.playAllAudios(),c.current.forEach(z=>z.play()),n.current=!0,e(!0),s.current=f.current,_.dispatchPlay())},[n,p,u,e,_,E,c]),w=S.useCallback(()=>{n.current&&(n.current=!1,e(!1),_.dispatchPause())},[_,n,e]),T=S.useCallback(()=>{n.current&&(n.current=!1,f.current=s.current,g&&(l(k=>({...k,[g.id]:s.current})),e(!1),_.dispatchPause()))},[g,_,n,e,l]),P=h==null?void 0:h.id,B=S.useCallback(k=>{if(!P)return null;n.current||a(z=>{const N=z[P]??window.remotion_initialFrame??0;return{...z,[P]:Math.max(0,N-k)}})},[n,a,P]),y=S.useCallback(k=>{if(!P)return null;n.current||a(z=>{const N=z[P]??window.remotion_initialFrame??0;return{...z,[P]:Math.min(x,N+k)}})},[P,n,x,a]);return S.useMemo(()=>({frameBack:B,frameForward:y,isLastFrame:p,emitter:_,playing:t,play:M,pause:w,seek:E,isFirstFrame:d,getCurrentFrame:()=>f.current,isPlaying:()=>n.current,isBuffering:()=>v.current,pauseAndReturnToPlayStart:T,hasPlayed:i,remotionInternal_currentFrameRef:f}),[B,y,p,_,t,M,w,E,d,T,i,n,v])},k2=({browserMediaControlsBehavior:t,videoConfig:e,playbackRate:n})=>{const{playing:i,pause:r,play:o,emitter:s,getCurrentFrame:a,seek:l}=Uu();S.useEffect(()=>{navigator.mediaSession&&t.mode!=="do-nothing"&&(i?navigator.mediaSession.playbackState="playing":navigator.mediaSession.playbackState="paused")},[t.mode,i]),S.useEffect(()=>{if(!navigator.mediaSession||t.mode==="do-nothing")return;const u=()=>{e&&navigator.mediaSession&&navigator.mediaSession.setPositionState({duration:e.durationInFrames/e.fps,playbackRate:n,position:a()/e.fps})};return s.addEventListener("timeupdate",u),()=>{s.removeEventListener("timeupdate",u)}},[t.mode,s,a,n,e]),S.useEffect(()=>{if(navigator.mediaSession&&t.mode!=="do-nothing")return navigator.mediaSession.setActionHandler("play",()=>{t.mode==="register-media-session"&&o()}),navigator.mediaSession.setActionHandler("pause",()=>{t.mode==="register-media-session"&&r()}),navigator.mediaSession.setActionHandler("seekto",u=>{t.mode==="register-media-session"&&u.seekTime!==void 0&&e&&l(Math.round(u.seekTime*e.fps))}),navigator.mediaSession.setActionHandler("seekbackward",()=>{t.mode==="register-media-session"&&e&&l(Math.max(0,Math.round((a()-10)*e.fps)))}),navigator.mediaSession.setActionHandler("seekforward",()=>{t.mode==="register-media-session"&&e&&l(Math.max(e.durationInFrames-1,Math.round((a()+10)*e.fps)))}),navigator.mediaSession.setActionHandler("previoustrack",()=>{t.mode==="register-media-session"&&l(0)}),()=>{navigator.mediaSession.metadata=null,navigator.mediaSession.setActionHandler("play",null),navigator.mediaSession.setActionHandler("pause",null),navigator.mediaSession.setActionHandler("seekto",null),navigator.mediaSession.setActionHandler("seekbackward",null),navigator.mediaSession.setActionHandler("seekforward",null),navigator.mediaSession.setActionHandler("previoustrack",null)}},[t.mode,a,r,o,l,e])},B2=({time:t,currentFrame:e,playbackSpeed:n,fps:i,actualLastFrame:r,actualFirstFrame:o,framesAdvanced:s,shouldLoop:a})=>{const u=(n<0?Math.ceil:Math.floor)(t*n/(1e3/i))-s,c=u+e,f=e>r||e<o,h=c>r||c<o,g=!a&&h&&!f;return n>0?h?{nextFrame:o,framesToAdvance:u,hasEnded:g}:{nextFrame:c,framesToAdvance:u,hasEnded:g}:h?{nextFrame:r,framesToAdvance:u,hasEnded:g}:{nextFrame:c,framesToAdvance:u,hasEnded:g}},rv=()=>typeof document>"u"?!1:document.visibilityState==="hidden",z2=()=>{const t=S.useRef(rv());return S.useEffect(()=>{const e=()=>{t.current=rv()};return document.addEventListener("visibilitychange",e),()=>{document.removeEventListener("visibilitychange",e)}},[]),t},V2=({loop:t,playbackRate:e,moveToBeginningWhenEnded:n,inFrame:i,outFrame:r,frameRef:o,browserMediaControlsBehavior:s})=>{const a=De.useUnsafeVideoConfig(),l=De.Timeline.useTimelinePosition(),{playing:u,pause:c,emitter:f}=Uu(),h=De.Timeline.useTimelineSetFrame(),g=S.useRef(null),_=z2(),x=S.useRef(null),p=S.useContext(De.BufferingContextReact);if(!p)throw new Error("Missing the buffering context. Most likely you have a Remotion version mismatch.");k2({browserMediaControlsBehavior:s,playbackRate:e,videoConfig:a}),S.useEffect(()=>{const d=p.listenForBuffering(()=>{g.current=performance.now()}),m=p.listenForResume(()=>{g.current=null});return()=>{d.remove(),m.remove()}},[p]),S.useEffect(()=>{if(!a||!u)return;let d=!1,m=null,v=performance.now(),E=0;const M=()=>{m!==null&&(m.type==="raf"?cancelAnimationFrame(m.id):clearTimeout(m.id))},w=()=>{d=!0,M()},T=()=>{const y=performance.now()-v,C=r??a.durationInFrames-1,k=i??0,z=o.current,{nextFrame:N,framesToAdvance:G,hasEnded:U}=B2({time:y,currentFrame:z,playbackSpeed:e,fps:a.fps,actualFirstFrame:k,actualLastFrame:C,framesAdvanced:E,shouldLoop:t});if(E+=G,N!==o.current&&(!U||n)&&h(Z=>({...Z,[a.id]:N})),U){w(),c(),f.dispatchEnded();return}d||P()},P=()=>{if(g.current){const y=p.listenForResume(()=>{y.remove(),!d&&(v=performance.now(),E=0,T())});return}_.current?m={type:"timeout",id:setTimeout(T,1e3/a.fps)}:m={type:"raf",id:requestAnimationFrame(T)}};P();const B=()=>{document.visibilityState!=="visible"&&(M(),T())};return window.addEventListener("visibilitychange",B),()=>{window.removeEventListener("visibilitychange",B),w()}},[a,t,c,u,h,f,e,i,r,n,_,o,g,p]),S.useEffect(()=>{const d=setInterval(()=>{x.current!==o.current&&(f.dispatchTimeUpdate({frame:o.current}),x.current=o.current)},250);return()=>clearInterval(d)},[f,o]),S.useEffect(()=>{f.dispatchFrameUpdate({frame:l})},[f,l])},Zc=[],Bh=(t,e)=>{const[n,i]=S.useState(()=>{if(!t.current)return null;const s=t.current.getClientRects();return s[0]?{width:s[0].width,height:s[0].height,left:s[0].x,top:s[0].y,windowSize:{height:window.innerHeight,width:window.innerWidth}}:null}),r=S.useMemo(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(s=>{const{contentRect:a,target:l}=s[0],u=l.getClientRects();if(!(u!=null&&u[0])){i(null);return}const c=a.width===0?1:u[0].width/a.width,f=e.shouldApplyCssTransforms?u[0].width:u[0].width*(1/c),h=e.shouldApplyCssTransforms?u[0].height:u[0].height*(1/c);i({width:f,height:h,left:u[0].x,top:u[0].y,windowSize:{height:window.innerHeight,width:window.innerWidth}})}),[e.shouldApplyCssTransforms]),o=S.useCallback(()=>{if(!t.current)return;const s=t.current.getClientRects();if(!s[0]){i(null);return}i(a=>a&&a.width===s[0].width&&a.height===s[0].height&&a.left===s[0].x&&a.top===s[0].y&&a.windowSize.height===window.innerHeight&&a.windowSize.width===window.innerWidth?a:{width:s[0].width,height:s[0].height,left:s[0].x,top:s[0].y,windowSize:{height:window.innerHeight,width:window.innerWidth}})},[t]);return S.useEffect(()=>{if(!r)return;const{current:s}=t;return s&&r.observe(s),()=>{s&&r.unobserve(s)}},[r,t,o]),S.useEffect(()=>{if(e.triggerOnWindowResize)return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[e.triggerOnWindowResize,o]),S.useEffect(()=>(Zc.push(o),()=>{Zc=Zc.filter(s=>s!==o)}),[o]),S.useMemo(()=>n?{...n,refresh:o}:null,[n,o])},ov=({playing:t,buffering:e})=>t&&e?F.jsx(D2,{type:"player"}):t?F.jsx(C2,{}):F.jsx(A2,{}),ao=12,sv=5,H2=({volume:t,isVertical:e,onBlur:n,inputRef:i,setVolume:r})=>{const o=S.useMemo(()=>{const h={paddingLeft:5,height:zt,width:Tr,display:"inline-flex",alignItems:"center"};return e?{...h,position:"absolute",transform:`rotate(-90deg) translateX(${Tr/2+zt/2}px)`}:{...h}},[e]),s=typeof Ke.useId>"u"?"volume-slider":Ke.useId(),[a]=S.useState(()=>`__remotion-volume-slider-${ns(s)}`.replace(".","")),l=S.useCallback(f=>{r(parseFloat(f.target.value))},[r]),u=S.useMemo(()=>{const f={WebkitAppearance:"none",backgroundColor:"rgba(255, 255, 255, 0.5)",borderRadius:sv/2,cursor:"pointer",height:sv,width:Tr,backgroundImage:`linear-gradient(
				to right,
				white ${t*100}%, rgba(255, 255, 255, 0) ${t*100}%
			)`};return e?{...f,bottom:zt+Tr/2}:f},[e,t]),c=`
	.${a}::-webkit-slider-thumb {
		-webkit-appearance: none;
		background-color: white;
		border-radius: ${ao/2}px;
		box-shadow: 0 0 2px black;
		height: ${ao}px;
		width: ${ao}px;
	}

	.${a}::-moz-range-thumb {
		-webkit-appearance: none;
		background-color: white;
		border-radius: ${ao/2}px;
		box-shadow: 0 0 2px black;
		height: ${ao}px;
		width: ${ao}px;
	}
`;return F.jsxs("div",{style:o,children:[F.jsx("style",{dangerouslySetInnerHTML:{__html:c}}),F.jsx("input",{ref:i,"aria-label":"Change volume",className:a,max:1,min:0,onBlur:n,onChange:l,step:.01,type:"range",value:t,style:u})]})},G2=t=>F.jsx(H2,{...t}),Tr=100,W2=({displayVerticalVolumeSlider:t,renderMuteButton:e,renderVolumeSlider:n})=>{const[i,r]=De.useMediaMutedState(),[o,s]=De.useMediaVolumeState(),[a,l]=S.useState(!1),u=S.useRef(null),c=S.useRef(null),f=kh(u,!1),h=S.useCallback(()=>{setTimeout(()=>{c.current&&document.activeElement!==c.current&&l(!1)},10)},[]),g=o===0,_=S.useCallback(()=>{if(g){s(1),r(!1);return}r(E=>!E)},[g,r,s]),x=S.useMemo(()=>({display:"inline-flex",background:"none",border:"none",justifyContent:"center",alignItems:"center",touchAction:"none",...t&&{position:"relative"}}),[t]),p=S.useMemo(()=>({display:"inline",width:zt,height:zt,cursor:"pointer",appearance:"none",background:"none",border:"none",padding:0}),[]),d=S.useCallback(({muted:E,volume:M})=>{const w=E||M===0;return F.jsx("button",{"aria-label":w?"Unmute sound":"Mute sound",title:w?"Unmute sound":"Mute sound",onClick:_,onBlur:h,onFocus:()=>l(!0),style:p,type:"button",children:w?F.jsx(R2,{}):F.jsx(P2,{})})},[h,_,p]),m=S.useMemo(()=>e?e({muted:i,volume:o}):d({muted:i,volume:o}),[i,o,d,e]),v=S.useMemo(()=>(a||f)&&!i&&!De.isIosSafari()?(n??G2)({isVertical:t,volume:o,onBlur:()=>l(!1),inputRef:c,setVolume:s}):null,[t,a,f,i,o,n,s]);return F.jsxs("div",{ref:u,style:x,children:[m,v]})};function $2(t){const[e,n]=S.useState(t),i=S.useRef(null);return S.useEffect(()=>{const r=o=>{i.current&&!i.current.contains(o.target)&&n(!1)};return document.addEventListener("pointerup",r,!0),()=>{document.removeEventListener("pointerup",r,!0)}},[]),{ref:i,isComponentVisible:e,setIsComponentVisible:n}}var j2=35,X2=70,Y2={height:30,paddingRight:15,paddingLeft:12,display:"flex",flexDirection:"row",alignItems:"center"},q2={width:22,display:"flex",alignItems:"center"},K2={width:14,height:14,color:"black"},Z2=()=>F.jsx("svg",{viewBox:"0 0 512 512",style:K2,children:F.jsx("path",{fill:"currentColor",d:"M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"})}),Q2=({rate:t,onSelect:e,selectedRate:n,keyboardSelectedRate:i})=>{const r=S.useCallback(f=>{f.stopPropagation(),f.preventDefault(),e(t)},[e,t]),[o,s]=S.useState(!1),a=S.useCallback(()=>{s(!0)},[]),l=S.useCallback(()=>{s(!1)},[]),u=i===t,c=S.useMemo(()=>({...Y2,backgroundColor:o||u?"#eee":"transparent"}),[o,u]);return F.jsxs("div",{onMouseEnter:a,onMouseLeave:l,tabIndex:0,style:c,onClick:r,children:[F.jsx("div",{style:q2,children:t===n?F.jsx(Z2,{}):null}),t.toFixed(1),"x"]},t)},J2=({setIsComponentVisible:t,playbackRates:e,canvasSize:n})=>{const{setPlaybackRate:i,playbackRate:r}=S.useContext(De.Timeline.TimelineContext),[o,s]=S.useState(r);S.useEffect(()=>{const u=c=>{if(c.preventDefault(),c.key==="ArrowUp"){const f=e.findIndex(h=>h===o);if(f===0)return;s(f===-1?e[0]:e[f-1])}else if(c.key==="ArrowDown"){const f=e.findIndex(h=>h===o);if(f===e.length-1)return;s(f===-1?e[e.length-1]:e[f+1])}else c.key==="Enter"&&(i(o),t(!1))};return window.addEventListener("keydown",u),()=>{window.removeEventListener("keydown",u)}},[e,o,i,t]);const a=S.useCallback(u=>{i(u),t(!1)},[t,i]),l=S.useMemo(()=>({position:"absolute",right:0,width:125,maxHeight:n.height-X2-j2,bottom:35,background:"#fff",borderRadius:4,overflow:"auto",color:"black",textAlign:"left"}),[n.height]);return F.jsx("div",{style:l,children:e.map(u=>F.jsx(Q2,{selectedRate:r,onSelect:a,rate:u,keyboardSelectedRate:o},u))})},eP={fontSize:13,fontWeight:"bold",color:"white",border:"2px solid white",borderRadius:20,paddingLeft:8,paddingRight:8,paddingTop:2,paddingBottom:2},hf={appearance:"none",backgroundColor:"transparent",border:"none",cursor:"pointer",paddingLeft:0,paddingRight:0,paddingTop:6,paddingBottom:6,height:37,display:"inline-flex",marginBottom:0,marginTop:0,alignItems:"center"},tP={...hf,position:"relative"},nP=({playbackRates:t,canvasSize:e})=>{const{ref:n,isComponentVisible:i,setIsComponentVisible:r}=$2(!1),{playbackRate:o}=S.useContext(De.Timeline.TimelineContext),s=S.useCallback(a=>{a.stopPropagation(),a.preventDefault(),r(l=>!l)},[r]);return F.jsx("div",{ref:n,children:F.jsxs("button",{type:"button","aria-label":"Change playback rate",style:tP,onClick:s,children:[F.jsxs("div",{style:eP,children:[o,"x"]}),i&&F.jsx(J2,{canvasSize:e,playbackRates:t,setIsComponentVisible:r})]})})},av=(t,e,n)=>Math.round(Uy(t,[0,n],[0,e-1],{extrapolateLeft:"clamp",extrapolateRight:"clamp"})),wo=5,xs=12,pf=4,iP={userSelect:"none",WebkitUserSelect:"none",paddingTop:pf,paddingBottom:pf,boxSizing:"border-box",cursor:"pointer",position:"relative",touchAction:"none"},rP={height:wo,backgroundColor:"rgba(255, 255, 255, 0.25)",width:"100%",borderRadius:wo/2},oP=t=>{let e=t;for(;e.parentElement;)e=e.parentElement;return e},sP=({durationInFrames:t,onSeekEnd:e,onSeekStart:n,inFrame:i,outFrame:r})=>{const o=S.useRef(null),s=kh(o,!1),a=Bh(o,{triggerOnWindowResize:!0,shouldApplyCssTransforms:!0}),{seek:l,play:u,pause:c,playing:f}=Uu(),h=De.Timeline.useTimelinePosition(),[g,_]=S.useState({dragging:!1}),x=(a==null?void 0:a.width)??0,p=S.useCallback(w=>{var B;if(w.button!==0)return;const T=(B=o.current)==null?void 0:B.getBoundingClientRect().left,P=av(w.clientX-T,t,x);c(),l(P),_({dragging:!0,wasPlaying:f}),n()},[t,x,c,l,f,n]),d=S.useCallback(w=>{var B;if(!a)throw new Error("Player has no size");if(!g.dragging)return;const T=(B=o.current)==null?void 0:B.getBoundingClientRect().left,P=av(w.clientX-T,t,a.width);l(P)},[g.dragging,t,l,a]),m=S.useCallback(()=>{_({dragging:!1}),g.dragging&&(g.wasPlaying?u():c(),e())},[g,e,c,u]);S.useEffect(()=>{if(!g.dragging)return;const w=oP(o.current);return w.addEventListener("pointermove",d),w.addEventListener("pointerup",m),()=>{w.removeEventListener("pointermove",d),w.removeEventListener("pointerup",m)}},[g.dragging,d,m]);const v=S.useMemo(()=>({height:xs,width:xs,borderRadius:xs/2,position:"absolute",top:pf-xs/2+5/2,backgroundColor:"white",left:Math.max(0,h/Math.max(1,t-1)*x-xs/2),boxShadow:"0 0 2px black",opacity:Number(s)}),[s,t,h,x]),E=S.useMemo(()=>({height:wo,backgroundColor:"rgba(255, 255, 255, 1)",width:(h-(i??0))/(t-1)*100+"%",marginLeft:(i??0)/(t-1)*100+"%",borderRadius:wo/2}),[t,h,i]),M=S.useMemo(()=>({height:wo,backgroundColor:"rgba(255, 255, 255, 0.25)",width:((r??t-1)-(i??0))/(t-1)*100+"%",marginLeft:(i??0)/(t-1)*100+"%",borderRadius:wo/2,position:"absolute"}),[t,i,r]);return F.jsxs("div",{ref:o,onPointerDown:p,style:iP,children:[F.jsxs("div",{style:rP,children:[F.jsx("div",{style:M}),F.jsx("div",{style:E})]}),F.jsx("div",{style:v})]})},lv=t=>{const e=Math.floor(t/60),n=Math.floor(t-e*60);return`${String(e)}:${String(n).padStart(2,"0")}`},aP=10,mf=12,lP=({allowFullscreen:t,playerWidth:e})=>S.useMemo(()=>{const i=zt,r=zt,o=t?ff:0,s=r+i+o+mf*2+aP*2,a=e-s,l=Math.max(a,0),u=l-Tr,f=(u<Tr?l:u)+s+Tr,h=e<f;return{maxTimeLabelWidth:l===0?null:l,displayVerticalVolumeSlider:h}},[t,e]),uP=[0,.013,.049,.104,.175,.259,.352,.45,.55,.648,.741,.825,.896,.951,.987],cP=[0,8.1,15.5,22.5,29,35.3,41.2,47.1,52.9,58.8,64.7,71,77.5,84.5,91.9],dP=1/.7,fP={boxSizing:"border-box",position:"absolute",bottom:0,width:"100%",paddingTop:40,paddingBottom:10,backgroundImage:`linear-gradient(to bottom,${uP.map((t,e)=>`hsla(0, 0%, 0%, ${t}) ${cP[e]*dP}%`).join(", ")}, hsl(0, 0%, 0%) 100%)`,backgroundSize:"auto 145px",display:"flex",paddingRight:mf,paddingLeft:mf,flexDirection:"column",transition:"opacity 0.3s"},hP={display:"flex",flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center",userSelect:"none",WebkitUserSelect:"none"},pP={display:"flex",flexDirection:"row",userSelect:"none",WebkitUserSelect:"none",alignItems:"center"},al={width:12},mP={height:8},gP={flex:1},vP={},_P=({durationInFrames:t,isFullscreen:e,fps:n,player:i,showVolumeControls:r,onFullscreenButtonClick:o,allowFullscreen:s,onExitFullscreenButtonClick:a,spaceKeyToPlayOrPause:l,onSeekEnd:u,onSeekStart:c,inFrame:f,outFrame:h,initiallyShowControls:g,canvasSize:_,renderPlayPauseButton:x,renderFullscreenButton:p,alwaysShowControls:d,showPlaybackRateControl:m,containerRef:v,buffering:E,hideControlsWhenPointerDoesntMove:M,onPointerDown:w,onDoubleClick:T,renderMuteButton:P,renderVolumeSlider:B})=>{const y=S.useRef(null),C=De.Timeline.useTimelinePosition(),[k,z]=S.useState(!1),N=kh(v,M),{maxTimeLabelWidth:G,displayVerticalVolumeSlider:U}=lP({allowFullscreen:s,playerWidth:(_==null?void 0:_.width)??0}),[Z,I]=S.useState(()=>{if(typeof g=="boolean")return g;if(typeof g=="number"){if(g%1!==0)throw new Error("initiallyShowControls must be an integer or a boolean");if(Number.isNaN(g))throw new Error("initiallyShowControls must not be NaN");if(!Number.isFinite(g))throw new Error("initiallyShowControls must be finite");if(g<=0)throw new Error("initiallyShowControls must be a positive integer");return g}throw new TypeError("initiallyShowControls must be a number or a boolean")}),O=S.useMemo(()=>{const ne=N||!i.playing||Z||d;return{...fP,opacity:Number(ne)}},[N,Z,i.playing,d]);S.useEffect(()=>{y.current&&l&&y.current.focus({preventScroll:!0})},[i.playing,l]),S.useEffect(()=>{z((typeof document<"u"&&(document.fullscreenEnabled||document.webkitFullscreenEnabled))??!1)},[]),S.useEffect(()=>{if(Z===!1)return;const de=setTimeout(()=>{I(!1)},Z===!0?2e3:Z);return()=>{clearInterval(de)}},[Z]);const H=S.useMemo(()=>({color:"white",fontFamily:"sans-serif",fontSize:14,maxWidth:G===null?void 0:G,overflow:"hidden",textOverflow:"ellipsis"}),[G]),X=S.useMemo(()=>{if(m===!0)return[.5,.8,1,1.2,1.5,1.8,2,2.5,3];if(Array.isArray(m)){for(const ne of m){if(typeof ne!="number")throw new Error("Every item in showPlaybackRateControl must be a number");if(ne<=0)throw new Error("Every item in showPlaybackRateControl must be positive")}return m}return null},[m]),J=S.useRef(null),ge=S.useRef(null),$=S.useCallback(ne=>{(ne.target===J.current||ne.target===ge.current)&&(w==null||w(ne))},[w]),K=S.useCallback(ne=>{(ne.target===J.current||ne.target===ge.current)&&(T==null||T(ne))},[T]);return F.jsxs("div",{ref:J,style:O,onPointerDown:$,onDoubleClick:K,children:[F.jsxs("div",{ref:ge,style:hP,children:[F.jsxs("div",{style:pP,children:[F.jsx("button",{ref:y,type:"button",style:hf,onClick:i.playing?i.pause:i.play,"aria-label":i.playing?"Pause video":"Play video",title:i.playing?"Pause video":"Play video",children:x===null?F.jsx(ov,{buffering:E,playing:i.playing}):x({playing:i.playing,isBuffering:E})??F.jsx(ov,{buffering:E,playing:i.playing})}),r?F.jsxs(F.Fragment,{children:[F.jsx("div",{style:al}),F.jsx(W2,{renderMuteButton:P,renderVolumeSlider:B,displayVerticalVolumeSlider:U})]}):null,F.jsx("div",{style:al}),F.jsxs("div",{style:H,children:[lv(C/n)," / ",lv(t/n)]}),F.jsx("div",{style:al})]}),F.jsx("div",{style:gP}),X&&_&&F.jsx(nP,{canvasSize:_,playbackRates:X}),X&&k&&s?F.jsx("div",{style:al}):null,F.jsx("div",{style:vP,children:k&&s?F.jsx("button",{type:"button","aria-label":e?"Exit fullscreen":"Enter Fullscreen",title:e?"Exit fullscreen":"Enter Fullscreen",style:hf,onClick:e?a:o,children:p===null?F.jsx(b2,{isFullscreen:e}):p({isFullscreen:e})}):null})]}),F.jsx("div",{style:mP}),F.jsx(sP,{onSeekEnd:u,onSeekStart:c,durationInFrames:t,inFrame:f,outFrame:h})]})},yP={display:"flex",justifyContent:"center",alignItems:"center",flex:1,height:"100%",width:"100%"};class nx extends Ke.Component{constructor(){super(...arguments);ma(this,"state",{hasError:null})}static getDerivedStateFromError(n){return{hasError:n}}componentDidCatch(n){this.props.onError(n)}render(){return this.state.hasError?F.jsx("div",{style:yP,children:this.props.errorFallback({error:this.state.hasError})}):this.props.children}}var zh="__remotion-player",ix=typeof document>"u",xP=t=>{let e=!1;return{promise:new Promise((i,r)=>{t.then(o=>{if(e){r({isCanceled:e,value:o});return}i(o)}).catch(o=>{r({isCanceled:e,error:o})})}),cancel:()=>{e=!0}}},SP=t=>new Promise(e=>setTimeout(e,t)),EP=()=>{const t=S.useRef([]),e=S.useCallback(o=>{t.current=[...t.current,o]},[]),n=S.useCallback(o=>{t.current=t.current.filter(s=>s!==o)},[]),i=S.useCallback(()=>t.current.map(o=>o.cancel()),[]);return S.useMemo(()=>({appendPendingPromise:e,removePendingPromise:n,clearPendingPromises:i}),[e,i,n])},wP=(t,e,n)=>{const i=EP(),r=S.useCallback(async l=>{if(l instanceof PointerEvent?l.pointerType==="touch":l.nativeEvent.pointerType==="touch"){t(l);return}i.clearPendingPromises();const u=xP(SP(200));i.appendPendingPromise(u);try{await u.promise,i.removePendingPromise(u),t(l)}catch(c){const f=c;if(i.removePendingPromise(u),!f.isCanceled)throw f.error}},[i,t]),o=S.useCallback(()=>{document.addEventListener("pointerup",l=>{r(l)},{once:!0})},[r]),s=S.useCallback(()=>{i.clearPendingPromises(),e()},[i,e]);return S.useMemo(()=>n?{handlePointerDown:o,handleDoubleClick:s}:{handlePointerDown:t,handleDoubleClick:()=>{}},[n,s,o,t])},gf=Ke.version.split(".")[0];if(gf==="0")throw new Error(`Version ${gf} of "react" is not supported by Remotion`);var MP=parseInt(gf,10)>=18,TP=({controls:t,style:e,loop:n,autoPlay:i,allowFullscreen:r,inputProps:o,clickToPlay:s,showVolumeControls:a,doubleClickToFullscreen:l,spaceKeyToPlayOrPause:u,errorFallback:c,playbackRate:f,renderLoading:h,renderPoster:g,className:_,moveToBeginningWhenEnded:x,showPosterWhenUnplayed:p,showPosterWhenEnded:d,showPosterWhenPaused:m,showPosterWhenBuffering:v,inFrame:E,outFrame:M,initiallyShowControls:w,renderFullscreen:T,renderPlayPauseButton:P,renderMuteButton:B,renderVolumeSlider:y,alwaysShowControls:C,showPlaybackRateControl:k,posterFillMode:z,bufferStateDelayInMilliseconds:N,hideControlsWhenPointerDoesntMove:G,overflowVisible:U,browserMediaControlsBehavior:Z},I)=>{const O=De.useUnsafeVideoConfig(),H=De.useVideo(),X=S.useRef(null),J=Bh(X,{triggerOnWindowResize:!1,shouldApplyCssTransforms:!1}),[ge,$]=S.useState(!1),[K,ne]=S.useState(i),[de,ye]=S.useState(()=>!1),[ve,ze]=S.useState(!1),be=S.useMemo(()=>typeof document>"u"?!1:!!(document.fullscreenEnabled||document.webkitFullscreenEnabled),[]),D=Uu();V2({loop:n,playbackRate:f,moveToBeginningWhenEnded:x,inFrame:E,outFrame:M,frameRef:D.remotionInternal_currentFrameRef,browserMediaControlsBehavior:Z}),S.useEffect(()=>{ge&&!D.playing&&($(!1),D.play())},[ge,D]),S.useEffect(()=>{const{current:Te}=X;if(!Te)return;const Ue=()=>{const vt=document.fullscreenElement===Te||document.webkitFullscreenElement===Te;ye(vt)};return document.addEventListener("fullscreenchange",Ue),document.addEventListener("webkitfullscreenchange",Ue),()=>{document.removeEventListener("fullscreenchange",Ue),document.removeEventListener("webkitfullscreenchange",Ue)}},[]);const nt=S.useCallback(Te=>{D.isPlaying()?D.pause():D.play(Te)},[D]),_e=S.useCallback(()=>{if(!r)throw new Error("allowFullscreen is false");if(!be)throw new Error("Browser doesnt support fullscreen");if(!X.current)throw new Error("No player ref found");X.current.webkitRequestFullScreen?X.current.webkitRequestFullScreen():X.current.requestFullscreen()},[r,be]),Ae=S.useCallback(()=>{document.webkitExitFullscreen?document.webkitExitFullscreen():document.exitFullscreen()},[]);S.useEffect(()=>{const{current:Te}=X;if(!Te)return;const Ue=()=>{const vt=document.webkitFullscreenElement??document.fullscreenElement;vt&&vt===X.current?D.emitter.dispatchFullscreenChange({isFullscreen:!0}):D.emitter.dispatchFullscreenChange({isFullscreen:!1})};return Te.addEventListener("webkitfullscreenchange",Ue),Te.addEventListener("fullscreenchange",Ue),()=>{Te.removeEventListener("webkitfullscreenchange",Ue),Te.removeEventListener("fullscreenchange",Ue)}},[D.emitter]);const xe=(O==null?void 0:O.durationInFrames)??1,Oe=S.useMemo(()=>!O||!J?null:qy({canvasSize:J,compositionHeight:O.height,compositionWidth:O.width,previewSize:"auto"}),[J,O]),Me=(Oe==null?void 0:Oe.scale)??1,R=S.useRef(!1);S.useEffect(()=>{if(!R.current){R.current=!0;return}D.emitter.dispatchScaleChange(Me)},[D.emitter,Me]);const{setMediaVolume:A,setMediaMuted:j}=S.useContext(De.SetMediaVolumeContext),{mediaMuted:ie,mediaVolume:ee}=S.useContext(De.MediaVolumeContext);S.useEffect(()=>{D.emitter.dispatchVolumeChange(ee)},[D.emitter,ee]);const re=ie||ee===0;S.useEffect(()=>{D.emitter.dispatchMuteChange({isMuted:re})},[D.emitter,re]);const[he,ue]=S.useState(!1);S.useEffect(()=>{let Te=null,Ue=!1;const vt=()=>{Ue=!1,requestAnimationFrame(()=>{N===0?ue(!0):Te=setTimeout(()=>{Ue||ue(!0)},N)})},si=()=>{requestAnimationFrame(()=>{Ue=!0,ue(!1),Te&&clearTimeout(Te)})};return D.emitter.addEventListener("waiting",vt),D.emitter.addEventListener("resume",si),()=>{D.emitter.removeEventListener("waiting",vt),D.emitter.removeEventListener("resume",si),ue(!1),Te&&clearTimeout(Te),Ue=!0}},[N,D.emitter]),S.useImperativeHandle(I,()=>{const Te={play:D.play,pause:()=>{$(!1),D.pause()},toggle:nt,getContainerNode:()=>X.current,getCurrentFrame:D.getCurrentFrame,isPlaying:D.isPlaying,seekTo:Ue=>{const vt=xe-1,si=Math.max(0,Math.min(vt,Ue));D.isPlaying()&&($(si!==vt||n),D.pause()),si===vt&&!n&&D.emitter.dispatchEnded(),D.seek(si)},isFullscreen:()=>{const{current:Ue}=X;return Ue?document.fullscreenElement===Ue||document.webkitFullscreenElement===Ue:!1},requestFullscreen:_e,exitFullscreen:Ae,getVolume:()=>ie?0:ee,setVolume:Ue=>{if(typeof Ue!="number")throw new TypeError(`setVolume() takes a number, got value of type ${typeof Ue}`);if(isNaN(Ue))throw new TypeError("setVolume() got a number that is NaN. Volume must be between 0 and 1.");if(Ue<0||Ue>1)throw new TypeError(`setVolume() got a number that is out of range. Must be between 0 and 1, got ${typeof Ue}`);A(Ue)},isMuted:()=>re,mute:()=>{j(!0)},unmute:()=>{j(!1)},getScale:()=>Me,pauseAndReturnToPlayStart:()=>{D.pauseAndReturnToPlayStart()}};return Object.assign(D.emitter,Te)},[xe,Ae,n,ie,re,ee,D,_e,j,A,nt,Me]);const fe=H?H.component:null,Se=S.useMemo(()=>Ky({canvasSize:J,config:O,style:e,overflowVisible:U,layout:Oe}),[J,O,Oe,U,e]),Le=S.useMemo(()=>Qy({config:O,layout:Oe,scale:Me,overflowVisible:U}),[O,Oe,U,Me]),te=S.useMemo(()=>Zy({canvasSize:J,config:O,layout:Oe,scale:Me,overflowVisible:U}),[J,O,Oe,U,Me]),qe=S.useCallback(Te=>{D.pause(),D.emitter.dispatchError(Te)},[D]),Ie=S.useCallback(Te=>{Te.stopPropagation(),_e()},[_e]),Re=S.useCallback(Te=>{Te.stopPropagation(),Ae()},[Ae]),Ee=S.useCallback(Te=>{(Te instanceof MouseEvent?Te.button===2:Te.nativeEvent.button)||nt(Te)},[nt]),se=S.useCallback(()=>{ze(!0)},[]),ke=S.useCallback(()=>{ze(!1)},[]),Je=S.useCallback(()=>{de?Ae():_e()},[Ae,de,_e]),{handlePointerDown:et,handleDoubleClick:Ve}=wP(Ee,Je,l&&r&&be);S.useEffect(()=>{K&&(D.play(),ne(!1))},[K,D]);const it=S.useMemo(()=>h?h({height:Se.height,width:Se.width,isBuffering:he}):null,[Se.height,Se.width,h,he]),L=S.useMemo(()=>({type:"scale",scale:Me}),[Me]);if(!O)return null;const ae=g?g({height:z==="player-size"?Se.height:O.height,width:z==="player-size"?Se.width:O.width,isBuffering:he}):null;if(ae===void 0)throw new TypeError("renderPoster() must return a React element, but undefined was returned");const le=ae&&[m&&!D.isPlaying()&&!ve,d&&D.isLastFrame&&!D.isPlaying(),p&&!D.hasPlayed&&!D.isPlaying(),v&&he&&D.isPlaying()].some(Boolean),{left:we,top:Pe,width:tt,height:st,...Tt}=Le,qt=F.jsxs(F.Fragment,{children:[F.jsx("div",{style:Le,onPointerDown:s?et:void 0,onDoubleClick:l?Ve:void 0,children:F.jsxs("div",{style:te,className:zh,children:[fe?F.jsx(nx,{onError:qe,errorFallback:c,children:F.jsx(De.CurrentScaleContext.Provider,{value:L,children:F.jsx(fe,{...(H==null?void 0:H.props)??{},...o??{}})})}):null,le&&z==="composition-size"?F.jsx("div",{style:{...Tt,width:O.width,height:O.height},onPointerDown:s?et:void 0,onDoubleClick:l?Ve:void 0,children:ae}):null]})}),le&&z==="player-size"?F.jsx("div",{style:Le,onPointerDown:s?et:void 0,onDoubleClick:l?Ve:void 0,children:ae}):null,t?F.jsx(_P,{fps:O.fps,durationInFrames:O.durationInFrames,player:D,containerRef:X,onFullscreenButtonClick:Ie,isFullscreen:de,allowFullscreen:r,showVolumeControls:a,onExitFullscreenButtonClick:Re,spaceKeyToPlayOrPause:u,onSeekEnd:ke,onSeekStart:se,inFrame:E,outFrame:M,initiallyShowControls:w,canvasSize:J,renderFullscreenButton:T,renderPlayPauseButton:P,alwaysShowControls:C,showPlaybackRateControl:k,buffering:he,hideControlsWhenPointerDoesntMove:G,onDoubleClick:l?Ve:void 0,onPointerDown:s?et:void 0,renderMuteButton:B,renderVolumeSlider:y}):null]});return ix&&!MP?F.jsx("div",{ref:X,style:Se,className:_,children:qt}):F.jsx("div",{ref:X,style:Se,className:_,children:F.jsx(S.Suspense,{fallback:it,children:qt})})},AP=S.forwardRef(TP),rx="remotion.volumePreference",CP=t=>{if(!(typeof window>"u"))try{window.localStorage.setItem(rx,String(t))}catch(e){console.log("Could not persist volume",e)}},bP=()=>{if(typeof window>"u")return 1;try{const t=window.localStorage.getItem(rx);return t?Number(t):1}catch{return 1}},Vh="player-comp",ox=({children:t,timelineContext:e,fps:n,compositionHeight:i,compositionWidth:r,durationInFrames:o,component:s,numberOfSharedAudioTags:a,initiallyMuted:l})=>{const u=S.useMemo(()=>({compositions:[{component:s,durationInFrames:o,height:i,width:r,fps:n,id:Vh,nonce:777,folderName:null,parentFolderName:null,schema:null,calculateMetadata:null}],folders:[],registerFolder:()=>{},unregisterFolder:()=>{},registerComposition:()=>{},unregisterComposition:()=>{},currentCompositionMetadata:null,setCurrentCompositionMetadata:()=>{},canvasContent:{type:"composition",compositionId:"player-comp"},setCanvasContent:()=>{},updateCompositionDefaultProps:()=>{}}),[s,o,i,r,n]),[c,f]=S.useState(()=>l),[h,g]=S.useState(()=>bP()),_=S.useMemo(()=>({mediaMuted:c,mediaVolume:h}),[c,h]),x=S.useCallback(d=>{g(d),CP(d)},[]),p=S.useMemo(()=>({setMediaMuted:f,setMediaVolume:x}),[x]);return F.jsx(De.CanUseRemotionHooksProvider,{children:F.jsx(De.Timeline.TimelineContext.Provider,{value:e,children:F.jsx(De.CompositionManager.Provider,{value:u,children:F.jsx(De.ResolveCompositionConfig,{children:F.jsx(De.PrefetchProvider,{children:F.jsx(De.DurationsContextProvider,{children:F.jsx(De.MediaVolumeContext.Provider,{value:_,children:F.jsx(De.SetMediaVolumeContext.Provider,{value:p,children:F.jsx(De.SharedAudioContextProvider,{numberOfAudioTags:a,component:s,children:F.jsx(De.BufferingProvider,{children:t})})})})})})})})})})},uv=(t,e)=>{if(typeof t>"u"||t===null)return t??null;if(typeof t!="number")throw new TypeError(`"${e}" must be a number, but is ${JSON.stringify(t)}`);if(Number.isNaN(t))throw new TypeError(`"${e}" must not be NaN, but is ${JSON.stringify(t)}`);if(!Number.isFinite(t))throw new TypeError(`"${e}" must be finite, but is ${JSON.stringify(t)}`);if(t%1!==0)throw new TypeError(`"${e}" must be an integer, but is ${JSON.stringify(t)}`);return t},RP=({inFrame:t,durationInFrames:e,outFrame:n})=>{const i=uv(t,"inFrame"),r=uv(n,"outFrame");if(!(i===null&&r===null)){if(i!==null&&i>e-1)throw new Error("inFrame must be less than (durationInFrames - 1), but is "+i);if(r!==null&&r>e-1)throw new Error("outFrame must be less than (durationInFrames - 1), but is "+r);if(i!==null&&i<0)throw new Error("inFrame must be greater than 0, but is "+i);if(r!==null&&r<=0)throw new Error(`outFrame must be greater than 0, but is ${r}. If you want to render a single frame, use <Thumbnail /> instead.`);if(r!==null&&i!==null&&r<=i)throw new Error("outFrame must be greater than inFrame, but is "+r+" <= "+i)}},PP=({initialFrame:t,durationInFrames:e})=>{if(typeof e!="number")throw new Error(`\`durationInFrames\` must be a number, but is ${JSON.stringify(e)}`);if(!(typeof t>"u")){if(typeof t!="number")throw new Error(`\`initialFrame\` must be a number, but is ${JSON.stringify(t)}`);if(Number.isNaN(t))throw new Error("`initialFrame` must be a number, but is NaN");if(!Number.isFinite(t))throw new Error("`initialFrame` must be a number, but is Infinity");if(t%1!==0)throw new Error(`\`initialFrame\` must be an integer, but is ${JSON.stringify(t)}`);if(t>e-1)throw new Error(`\`initialFrame\` must be less or equal than \`durationInFrames - 1\`, but is ${JSON.stringify(t)}`)}},LP=t=>{if(t!==void 0){if(t>4)throw new Error(`The highest possible playback rate is 4. You passed: ${t}`);if(t<-4)throw new Error(`The lowest possible playback rate is -4. You passed: ${t}`);if(t===0)throw new Error("A playback rate of 0 is not supported.")}},NP=Iu.validateFps,cv=Iu.validateDimension,DP=Iu.validateDurationInFrames,IP=Iu.validateDefaultAndInputProps,UP=t=>"component"in t?t.component:null,FP=({durationInFrames:t,compositionHeight:e,compositionWidth:n,fps:i,inputProps:r,style:o,controls:s=!1,loop:a=!1,autoPlay:l=!1,showVolumeControls:u=!0,allowFullscreen:c=!0,clickToPlay:f,doubleClickToFullscreen:h=!1,spaceKeyToPlayOrPause:g=!0,moveToBeginningWhenEnded:_=!0,numberOfSharedAudioTags:x=5,errorFallback:p=()=>"⚠️",playbackRate:d=1,renderLoading:m,className:v,showPosterWhenUnplayed:E,showPosterWhenEnded:M,showPosterWhenPaused:w,showPosterWhenBuffering:T,initialFrame:P,renderPoster:B,inFrame:y,outFrame:C,initiallyShowControls:k,renderFullscreenButton:z,renderPlayPauseButton:N,renderVolumeSlider:G,alwaysShowControls:U=!1,initiallyMuted:Z=!1,showPlaybackRateControl:I=!1,posterFillMode:O="player-size",bufferStateDelayInMilliseconds:H,hideControlsWhenPointerDoesntMove:X=!0,overflowVisible:J=!1,renderMuteButton:ge,browserMediaControlsBehavior:$,...K},ne)=>{if(typeof window<"u"&&S.useLayoutEffect(()=>{window.remotion_isPlayer=!0},[]),K.defaultProps!==void 0)throw new Error("The <Player /> component does not accept `defaultProps`, but some were passed. Use `inputProps` instead.");const de=UP(K);if((de==null?void 0:de.type)===Yg)throw new TypeError("'component' should not be an instance of <Composition/>. Pass the React component directly, and set the duration, fps and dimensions as separate props. See https://www.remotion.dev/docs/player/examples for an example.");if(de===Yg)throw new TypeError("'component' must not be the 'Composition' component. Pass your own React component directly, and set the duration, fps and dimensions as separate props. See https://www.remotion.dev/docs/player/examples for an example.");const ye=De.useLazyComponent(K);PP({initialFrame:P,durationInFrames:t});const[ve,ze]=S.useState(()=>({[Vh]:P??0})),[be,D]=S.useState(!1),[nt]=S.useState("player-comp"),_e=S.useRef(null),Ae=S.useRef([]),xe=S.useRef(!1),[Oe,Me]=S.useState(d);if(typeof e!="number")throw new TypeError(`'compositionHeight' must be a number but got '${typeof e}' instead`);if(typeof n!="number")throw new TypeError(`'compositionWidth' must be a number but got '${typeof n}' instead`);if(cv(e,"compositionHeight","of the <Player /> component"),cv(n,"compositionWidth","of the <Player /> component"),DP(t,{component:"of the <Player/> component",allowFloats:!1}),NP(i,"as a prop of the <Player/> component",!1),IP(r,"inputProps",null),RP({durationInFrames:t,inFrame:y,outFrame:C}),typeof s!="boolean"&&typeof s<"u")throw new TypeError(`'controls' must be a boolean or undefined but got '${typeof s}' instead`);if(typeof l!="boolean"&&typeof l<"u")throw new TypeError(`'autoPlay' must be a boolean or undefined but got '${typeof l}' instead`);if(typeof a!="boolean"&&typeof a<"u")throw new TypeError(`'loop' must be a boolean or undefined but got '${typeof a}' instead`);if(typeof h!="boolean"&&typeof h<"u")throw new TypeError(`'doubleClickToFullscreen' must be a boolean or undefined but got '${typeof h}' instead`);if(typeof u!="boolean"&&typeof u<"u")throw new TypeError(`'showVolumeControls' must be a boolean or undefined but got '${typeof u}' instead`);if(typeof c!="boolean"&&typeof c<"u")throw new TypeError(`'allowFullscreen' must be a boolean or undefined but got '${typeof c}' instead`);if(typeof f!="boolean"&&typeof f<"u")throw new TypeError(`'clickToPlay' must be a boolean or undefined but got '${typeof f}' instead`);if(typeof g!="boolean"&&typeof g<"u")throw new TypeError(`'spaceKeyToPlayOrPause' must be a boolean or undefined but got '${typeof g}' instead`);if(typeof x!="number"||x%1!==0||!Number.isFinite(x)||Number.isNaN(x)||x<0)throw new TypeError(`'numberOfSharedAudioTags' must be an integer but got '${x}' instead`);LP(Oe),S.useEffect(()=>{Me(d)},[d]),S.useImperativeHandle(ne,()=>_e.current,[]);const R=S.useMemo(()=>({frame:ve,playing:be,rootId:nt,playbackRate:Oe,imperativePlaying:xe,setPlaybackRate:ee=>{Me(ee)},audioAndVideoTags:Ae}),[ve,Oe,be,nt]),A=S.useMemo(()=>({setFrame:ze,setPlaying:D}),[ze]);typeof window<"u"&&S.useLayoutEffect(()=>{De.CSSUtils.injectCSS(De.CSSUtils.makeDefaultPreviewCSS(`.${zh}`,"#fff"))},[]);const j=S.useMemo(()=>r??{},[r]),ie=S.useMemo(()=>$??{mode:"prevent-media-session"},[$]);return F.jsx(De.IsPlayerContextProvider,{children:F.jsx(ox,{timelineContext:R,component:ye,compositionHeight:e,compositionWidth:n,durationInFrames:t,fps:i,numberOfSharedAudioTags:x,initiallyMuted:Z,children:F.jsx(De.Timeline.SetTimelineContext.Provider,{value:A,children:F.jsx(O2,{currentPlaybackRate:Oe,children:F.jsx(AP,{ref:_e,posterFillMode:O,renderLoading:m,autoPlay:!!l,loop:!!a,controls:!!s,errorFallback:p,style:o,inputProps:j,allowFullscreen:!!c,moveToBeginningWhenEnded:!!_,clickToPlay:typeof f=="boolean"?f:!!s,showVolumeControls:!!u,doubleClickToFullscreen:!!h,spaceKeyToPlayOrPause:!!g,playbackRate:Oe,className:v??void 0,showPosterWhenUnplayed:!!E,showPosterWhenEnded:!!M,showPosterWhenPaused:!!w,showPosterWhenBuffering:!!T,renderPoster:B,inFrame:y??null,outFrame:C??null,initiallyShowControls:k??!0,renderFullscreen:z??null,renderPlayPauseButton:N??null,renderMuteButton:ge??null,renderVolumeSlider:G??null,alwaysShowControls:U,showPlaybackRateControl:I,bufferStateDelayInMilliseconds:H??300,hideControlsWhenPointerDoesntMove:X,overflowVisible:J,browserMediaControlsBehavior:ie})})})})})},OP=S.forwardRef,kP=OP(FP),BP=()=>{const t=S.useContext(ex);if(!t)throw new TypeError("Expected Player event emitter context");return S.useMemo(()=>({emitter:t}),[t])},vf=Ke.version.split(".")[0];if(vf==="0")throw new Error(`Version ${vf} of "react" is not supported by Remotion`);var zP=parseInt(vf,10)>=18,VP=({style:t,inputProps:e,errorFallback:n,renderLoading:i,className:r,overflowVisible:o},s)=>{const a=De.useUnsafeVideoConfig(),l=De.useVideo(),u=S.useRef(null),c=Bh(u,{triggerOnWindowResize:!1,shouldApplyCssTransforms:!1}),f=S.useMemo(()=>!a||!c?null:qy({canvasSize:c,compositionHeight:a.height,compositionWidth:a.width,previewSize:"auto"}),[c,a]),h=(f==null?void 0:f.scale)??1,g=BP();tx(g.emitter),S.useImperativeHandle(s,()=>{const w={getContainerNode:()=>u.current,getScale:()=>h};return Object.assign(g.emitter,w)},[h,g.emitter]);const _=l?l.component:null,x=S.useMemo(()=>Ky({config:a,style:t,canvasSize:c,overflowVisible:o,layout:f}),[c,a,f,o,t]),p=S.useMemo(()=>Qy({config:a,layout:f,scale:h,overflowVisible:o}),[a,f,o,h]),d=S.useMemo(()=>Zy({canvasSize:c,config:a,layout:f,scale:h,overflowVisible:o}),[c,a,f,o,h]),m=S.useCallback(w=>{g.emitter.dispatchError(w)},[g.emitter]),v=S.useMemo(()=>i?i({height:x.height,width:x.width,isBuffering:!1}):null,[x.height,x.width,i]),E=S.useMemo(()=>({type:"scale",scale:h}),[h]);if(!a)return null;const M=F.jsx("div",{style:p,children:F.jsx("div",{style:d,className:zh,children:_?F.jsx(nx,{onError:m,errorFallback:n,children:F.jsx(De.CurrentScaleContext.Provider,{value:E,children:F.jsx(_,{...(l==null?void 0:l.props)??{},...e??{}})})}):null})});return ix&&!zP?F.jsx("div",{ref:u,style:x,className:r,children:M}):F.jsx("div",{ref:u,style:x,className:r,children:F.jsx(S.Suspense,{fallback:v,children:M})})},HP=S.forwardRef(VP),GP=({frameToDisplay:t,style:e,inputProps:n,compositionHeight:i,compositionWidth:r,durationInFrames:o,fps:s,className:a,errorFallback:l=()=>"⚠️",renderLoading:u,overflowVisible:c=!1,...f},h)=>{typeof window<"u"&&S.useLayoutEffect(()=>{window.remotion_isPlayer=!0},[]);const[g]=S.useState(()=>String(ns(null))),_=S.useRef(null),x=S.useMemo(()=>({playing:!1,frame:{[Vh]:t},rootId:g,imperativePlaying:{current:!1},playbackRate:1,setPlaybackRate:()=>{throw new Error("thumbnail")},audioAndVideoTags:{current:[]}}),[t,g]);S.useImperativeHandle(h,()=>_.current,[]);const p=De.useLazyComponent(f),[d]=S.useState(()=>new F2),m=S.useMemo(()=>n??{},[n]);return F.jsx(De.IsPlayerContextProvider,{children:F.jsx(ox,{timelineContext:x,component:p,compositionHeight:i,compositionWidth:r,durationInFrames:o,fps:s,numberOfSharedAudioTags:0,initiallyMuted:!0,children:F.jsx(ex.Provider,{value:d,children:F.jsx(HP,{ref:_,className:a,errorFallback:l,inputProps:m,renderLoading:u,style:e,overflowVisible:c})})})})},WP=S.forwardRef;WP(GP);const $P=()=>{const t=Xv();return Ke.useEffect(()=>{const e=document.getElementById("remotionCanvas");if(!e)return;const n=e.getContext("2d");let i,r=Array.from({length:100},()=>({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,size:Math.random()*2+1,speedX:(Math.random()-.5)*.5,speedY:(Math.random()-.5)*.5}));const o=s=>{e.width=window.innerWidth,e.height=window.innerHeight;const a=n.createLinearGradient(0,0,e.width,e.height);a.addColorStop(0,"rgba(122, 158, 159, 0.05)"),a.addColorStop(1,"rgba(80, 108, 127, 0.05)"),n.fillStyle=a,n.fillRect(0,0,e.width,e.height),r.forEach(l=>{const u=t(l.x*.001,l.y*.001,s*1e-4,0),c=t(l.x*.001,l.y*.001,0,s*1e-4);l.x+=l.speedX+u,l.y+=l.speedY+c,l.x<0&&(l.x=e.width),l.x>e.width&&(l.x=0),l.y<0&&(l.y=e.height),l.y>e.height&&(l.y=0),n.beginPath(),n.arc(l.x,l.y,l.size,0,Math.PI*2),n.fillStyle=`rgba(122, 158, 159, ${.1+Math.abs(u)*.5})`,n.fill()}),n.beginPath(),n.strokeStyle="rgba(122, 158, 159, 0.1)",n.lineWidth=1;for(let l=0;l<e.width;l+=50){const u=e.height/2;n.moveTo(l,u);for(let c=0;c<e.width;c+=10){const f=u+Math.sin(c*.01+s*.001)*50+t(c*.001,u*.001,s*1e-4,0)*30;n.lineTo(c,f)}}n.stroke(),i=requestAnimationFrame(o)};return o(0),()=>{i&&cancelAnimationFrame(i)}},[]),F.jsx(Eh,{style:{background:"transparent"},children:F.jsx("canvas",{id:"remotionCanvas",style:{width:"100%",height:"100%",opacity:.6,mixBlendMode:"screen"}})})},jP=()=>F.jsx(kP,{component:$P,durationInFrames:300,compositionWidth:1920,compositionHeight:1080,fps:30,style:{width:"100%",height:"100%",position:"fixed",top:0,left:0,zIndex:-1},loop:!0}),XP=new DT;XP.animate();new IT;new UT;const Hh=document.createElement("div");Hh.id="remotion-video";document.body.appendChild(Hh);const YP=ry(Hh);YP.render(Ke.createElement(jP));
