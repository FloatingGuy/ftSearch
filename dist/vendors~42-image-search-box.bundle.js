(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{1765:function(t,e,i){
/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */
t.exports=function(){"use strict";function t(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function e(e){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{};i%2?t(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return h(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?h(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}var s="undefined"!=typeof window&&void 0!==window.document,c=s?window:{},l=!(!s||!c.document.documentElement)&&"ontouchstart"in c.document.documentElement,p=!!s&&"PointerEvent"in c,d="".concat("cropper","-crop"),m="".concat("cropper","-disabled"),u="".concat("cropper","-hidden"),g="".concat("cropper","-hide"),f="".concat("cropper","-invisible"),v="".concat("cropper","-modal"),w="".concat("cropper","-move"),b="".concat("cropper","Action"),y="".concat("cropper","Preview"),x=l?"touchstart":"mousedown",M=l?"touchmove":"mousemove",C=l?"touchend touchcancel":"mouseup",D=p?"pointerdown":x,B=p?"pointermove":M,k=p?"pointerup pointercancel":C,O=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,T=/^data:/,E=/^data:image\/jpeg;base64,/,W=/^img|canvas$/i,H={viewMode:0,dragMode:"crop",initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},N=Number.isNaN||c.isNaN;function z(t){return"number"==typeof t&&!N(t)}var L=function(t){return t>0&&t<1/0};function Y(t){return void 0===t}function X(t){return"object"===i(t)&&null!==t}var R=Object.prototype.hasOwnProperty;function S(t){if(!X(t))return!1;try{var e=t.constructor,i=e.prototype;return e&&i&&R.call(i,"isPrototypeOf")}catch(a){return!1}}function A(t){return"function"==typeof t}var j=Array.prototype.slice;function I(t){return Array.from?Array.from(t):j.call(t)}function P(t,e){return t&&A(e)&&(Array.isArray(t)||z(t.length)?I(t).forEach((function(i,a){e.call(t,i,a,t)})):X(t)&&Object.keys(t).forEach((function(i){e.call(t,t[i],i,t)}))),t}var U=Object.assign||function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),a=1;a<e;a++)i[a-1]=arguments[a];return X(t)&&i.length>0&&i.forEach((function(e){X(e)&&Object.keys(e).forEach((function(i){t[i]=e[i]}))})),t},q=/\.\d*(?:0|9){12}\d*$/;function $(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return q.test(t)?Math.round(t*e)/e:t}var Q=/^width|height|left|top|marginLeft|marginTop$/;function K(t,e){var i=t.style;P(e,(function(t,e){Q.test(e)&&z(t)&&(t="".concat(t,"px")),i[e]=t}))}function Z(t,e){if(e)if(z(t.length))P(t,(function(t){Z(t,e)}));else if(t.classList)t.classList.add(e);else{var i=t.className.trim();i?i.indexOf(e)<0&&(t.className="".concat(i," ").concat(e)):t.className=e}}function J(t,e){e&&(z(t.length)?P(t,(function(t){J(t,e)})):t.classList?t.classList.remove(e):t.className.indexOf(e)>=0&&(t.className=t.className.replace(e,"")))}function G(t,e,i){e&&(z(t.length)?P(t,(function(t){G(t,e,i)})):i?Z(t,e):J(t,e))}var V=/([a-z\d])([A-Z])/g;function F(t){return t.replace(V,"$1-$2").toLowerCase()}function _(t,e){return X(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-".concat(F(e)))}function tt(t,e,i){X(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-".concat(F(e)),i)}var et=/\s\s*/,it=function(){var t=!1;if(s){var e=!1,i=function(){},a=Object.defineProperty({},"once",{get:function(){return t=!0,e},set:function(t){e=t}});c.addEventListener("test",i,a),c.removeEventListener("test",i,a)}return t}();function at(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=i;e.trim().split(et).forEach((function(e){if(!it){var o=t.listeners;o&&o[e]&&o[e][i]&&(n=o[e][i],delete o[e][i],0===Object.keys(o[e]).length&&delete o[e],0===Object.keys(o).length&&delete t.listeners)}t.removeEventListener(e,n,a)}))}function nt(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=i;e.trim().split(et).forEach((function(e){if(a.once&&!it){var o=t.listeners,r=void 0===o?{}:o;n=function(){delete r[e][i],t.removeEventListener(e,n,a);for(var o=arguments.length,h=new Array(o),s=0;s<o;s++)h[s]=arguments[s];i.apply(t,h)},r[e]||(r[e]={}),r[e][i]&&t.removeEventListener(e,r[e][i],a),r[e][i]=n,t.listeners=r}t.addEventListener(e,n,a)}))}function ot(t,e,i){var a;return A(Event)&&A(CustomEvent)?a=new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0}):(a=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i),t.dispatchEvent(a)}function rt(t){var e=t.getBoundingClientRect();return{left:e.left+(window.pageXOffset-document.documentElement.clientLeft),top:e.top+(window.pageYOffset-document.documentElement.clientTop)}}var ht=c.location,st=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function ct(t){var e=t.match(st);return null!==e&&(e[1]!==ht.protocol||e[2]!==ht.hostname||e[3]!==ht.port)}function lt(t){var e="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+e}function pt(t){var e=t.rotate,i=t.scaleX,a=t.scaleY,n=t.translateX,o=t.translateY,r=[];z(n)&&0!==n&&r.push("translateX(".concat(n,"px)")),z(o)&&0!==o&&r.push("translateY(".concat(o,"px)")),z(e)&&0!==e&&r.push("rotate(".concat(e,"deg)")),z(i)&&1!==i&&r.push("scaleX(".concat(i,")")),z(a)&&1!==a&&r.push("scaleY(".concat(a,")"));var h=r.length?r.join(" "):"none";return{WebkitTransform:h,msTransform:h,transform:h}}function dt(t,i){var a=t.pageX,n=t.pageY,o={endX:a,endY:n};return i?o:e({startX:a,startY:n},o)}function mt(t){var e=t.aspectRatio,i=t.height,a=t.width,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"contain",o=L(a),r=L(i);if(o&&r){var h=i*e;"contain"===n&&h>a||"cover"===n&&h<a?i=a/e:a=i*e}else o?i=a/e:r&&(a=i*e);return{width:a,height:i}}function ut(t,e,i,a){var n=e.aspectRatio,o=e.naturalWidth,h=e.naturalHeight,s=e.rotate,c=void 0===s?0:s,l=e.scaleX,p=void 0===l?1:l,d=e.scaleY,m=void 0===d?1:d,u=i.aspectRatio,g=i.naturalWidth,f=i.naturalHeight,v=a.fillColor,w=void 0===v?"transparent":v,b=a.imageSmoothingEnabled,y=void 0===b||b,x=a.imageSmoothingQuality,M=void 0===x?"low":x,C=a.maxWidth,D=void 0===C?1/0:C,B=a.maxHeight,k=void 0===B?1/0:B,O=a.minWidth,T=void 0===O?0:O,E=a.minHeight,W=void 0===E?0:E,H=document.createElement("canvas"),N=H.getContext("2d"),z=mt({aspectRatio:u,width:D,height:k}),L=mt({aspectRatio:u,width:T,height:W},"cover"),Y=Math.min(z.width,Math.max(L.width,g)),X=Math.min(z.height,Math.max(L.height,f)),R=mt({aspectRatio:n,width:D,height:k}),S=mt({aspectRatio:n,width:T,height:W},"cover"),A=Math.min(R.width,Math.max(S.width,o)),j=Math.min(R.height,Math.max(S.height,h)),I=[-A/2,-j/2,A,j];return H.width=$(Y),H.height=$(X),N.fillStyle=w,N.fillRect(0,0,Y,X),N.save(),N.translate(Y/2,X/2),N.rotate(c*Math.PI/180),N.scale(p,m),N.imageSmoothingEnabled=y,N.imageSmoothingQuality=M,N.drawImage.apply(N,[t].concat(r(I.map((function(t){return Math.floor($(t))}))))),N.restore(),H}var gt=String.fromCharCode,ft=/^data:.*,/;function vt(t){var e,i=new DataView(t);try{var a,n,o;if(255===i.getUint8(0)&&216===i.getUint8(1))for(var r=i.byteLength,h=2;h+1<r;){if(255===i.getUint8(h)&&225===i.getUint8(h+1)){n=h;break}h+=1}if(n){var s=n+10;if("Exif"===function(t,e,i){var a="";i+=e;for(var n=e;n<i;n+=1)a+=gt(t.getUint8(n));return a}(i,n+4,4)){var c=i.getUint16(s);if(((a=18761===c)||19789===c)&&42===i.getUint16(s+2,a)){var l=i.getUint32(s+4,a);l>=8&&(o=s+l)}}}if(o){var p,d,m=i.getUint16(o,a);for(d=0;d<m;d+=1)if(p=o+12*d+2,274===i.getUint16(p,a)){p+=8,e=i.getUint16(p,a),i.setUint16(p,1,a);break}}}catch(u){e=1}return e}var wt={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,i=this.container,a=this.cropper,n=Number(e.minContainerWidth),o=Number(e.minContainerHeight);Z(a,u),J(t,u);var r={width:Math.max(i.offsetWidth,n>=0?n:200),height:Math.max(i.offsetHeight,o>=0?o:100)};this.containerData=r,K(a,{width:r.width,height:r.height}),Z(t,u),J(a,u)},initCanvas:function(){var t=this.containerData,e=this.imageData,i=this.options.viewMode,a=Math.abs(e.rotate)%180==90,n=a?e.naturalHeight:e.naturalWidth,o=a?e.naturalWidth:e.naturalHeight,r=n/o,h=t.width,s=t.height;t.height*r>t.width?3===i?h=t.height*r:s=t.width/r:3===i?s=t.width/r:h=t.height*r;var c={aspectRatio:r,naturalWidth:n,naturalHeight:o,width:h,height:s};this.canvasData=c,this.limited=1===i||2===i,this.limitCanvas(!0,!0),c.width=Math.min(Math.max(c.width,c.minWidth),c.maxWidth),c.height=Math.min(Math.max(c.height,c.minHeight),c.maxHeight),c.left=(t.width-c.width)/2,c.top=(t.height-c.height)/2,c.oldLeft=c.left,c.oldTop=c.top,this.initialCanvasData=U({},c)},limitCanvas:function(t,e){var i=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=i.viewMode,h=n.aspectRatio,s=this.cropped&&o;if(t){var c=Number(i.minCanvasWidth)||0,l=Number(i.minCanvasHeight)||0;r>1?(c=Math.max(c,a.width),l=Math.max(l,a.height),3===r&&(l*h>c?c=l*h:l=c/h)):r>0&&(c?c=Math.max(c,s?o.width:0):l?l=Math.max(l,s?o.height:0):s&&(c=o.width,(l=o.height)*h>c?c=l*h:l=c/h));var p=mt({aspectRatio:h,width:c,height:l});c=p.width,l=p.height,n.minWidth=c,n.minHeight=l,n.maxWidth=1/0,n.maxHeight=1/0}if(e)if(r>(s?0:1)){var d=a.width-n.width,m=a.height-n.height;n.minLeft=Math.min(0,d),n.minTop=Math.min(0,m),n.maxLeft=Math.max(0,d),n.maxTop=Math.max(0,m),s&&this.limited&&(n.minLeft=Math.min(o.left,o.left+(o.width-n.width)),n.minTop=Math.min(o.top,o.top+(o.height-n.height)),n.maxLeft=o.left,n.maxTop=o.top,2===r&&(n.width>=a.width&&(n.minLeft=Math.min(0,d),n.maxLeft=Math.max(0,d)),n.height>=a.height&&(n.minTop=Math.min(0,m),n.maxTop=Math.max(0,m))))}else n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=a.width,n.maxTop=a.height},renderCanvas:function(t,e){var i=this.canvasData,a=this.imageData;if(e){var n=function(t){var e=t.width,i=t.height,a=t.degree;if(90==(a=Math.abs(a)%180))return{width:i,height:e};var n=a%90*Math.PI/180,o=Math.sin(n),r=Math.cos(n),h=e*r+i*o,s=e*o+i*r;return a>90?{width:s,height:h}:{width:h,height:s}}({width:a.naturalWidth*Math.abs(a.scaleX||1),height:a.naturalHeight*Math.abs(a.scaleY||1),degree:a.rotate||0}),o=n.width,r=n.height,h=i.width*(o/i.naturalWidth),s=i.height*(r/i.naturalHeight);i.left-=(h-i.width)/2,i.top-=(s-i.height)/2,i.width=h,i.height=s,i.aspectRatio=o/r,i.naturalWidth=o,i.naturalHeight=r,this.limitCanvas(!0,!1)}(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCanvas(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,K(this.canvas,U({width:i.width,height:i.height},pt({translateX:i.left,translateY:i.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,i=this.imageData,a=i.naturalWidth*(e.width/e.naturalWidth),n=i.naturalHeight*(e.height/e.naturalHeight);U(i,{width:a,height:n,left:(e.width-a)/2,top:(e.height-n)/2}),K(this.image,U({width:i.width,height:i.height},pt(U({translateX:i.left,translateY:i.top},i)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,i=t.aspectRatio||t.initialAspectRatio,a=Number(t.autoCropArea)||.8,n={width:e.width,height:e.height};i&&(e.height*i>e.width?n.height=n.width/i:n.width=n.height*i),this.cropBoxData=n,this.limitCropBox(!0,!0),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),n.width=Math.max(n.minWidth,n.width*a),n.height=Math.max(n.minHeight,n.height*a),n.left=e.left+(e.width-n.width)/2,n.top=e.top+(e.height-n.height)/2,n.oldLeft=n.left,n.oldTop=n.top,this.initialCropBoxData=U({},n)},limitCropBox:function(t,e){var i=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=this.limited,h=i.aspectRatio;if(t){var s=Number(i.minCropBoxWidth)||0,c=Number(i.minCropBoxHeight)||0,l=r?Math.min(a.width,n.width,n.width+n.left,a.width-n.left):a.width,p=r?Math.min(a.height,n.height,n.height+n.top,a.height-n.top):a.height;s=Math.min(s,a.width),c=Math.min(c,a.height),h&&(s&&c?c*h>s?c=s/h:s=c*h:s?c=s/h:c&&(s=c*h),p*h>l?p=l/h:l=p*h),o.minWidth=Math.min(s,l),o.minHeight=Math.min(c,p),o.maxWidth=l,o.maxHeight=p}e&&(r?(o.minLeft=Math.max(0,n.left),o.minTop=Math.max(0,n.top),o.maxLeft=Math.min(a.width,n.left+n.width)-o.width,o.maxTop=Math.min(a.height,n.top+n.height)-o.height):(o.minLeft=0,o.minTop=0,o.maxLeft=a.width-o.width,o.maxTop=a.height-o.height))},renderCropBox:function(){var t=this.options,e=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,t.movable&&t.cropBoxMovable&&tt(this.face,b,i.width>=e.width&&i.height>=e.height?"move":"all"),K(this.cropBox,U({width:i.width,height:i.height},pt({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),ot(this.element,"crop",this.getData())}},bt={initPreview:function(){var t=this.element,e=this.crossOrigin,i=this.options.preview,a=e?this.crossOriginUrl:this.url,n=t.alt||"The image to preview",o=document.createElement("img");if(e&&(o.crossOrigin=e),o.src=a,o.alt=n,this.viewBox.appendChild(o),this.viewBoxImage=o,i){var r=i;"string"==typeof i?r=t.ownerDocument.querySelectorAll(i):i.querySelector&&(r=[i]),this.previews=r,P(r,(function(t){var i=document.createElement("img");tt(t,y,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),e&&(i.crossOrigin=e),i.src=a,i.alt=n,i.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(i)}))}},resetPreview:function(){P(this.previews,(function(t){var e=_(t,y);K(t,{width:e.width,height:e.height}),t.innerHTML=e.html,function(t,e){if(X(t[e]))try{delete t[e]}catch(i){t[e]=void 0}else if(t.dataset)try{delete t.dataset[e]}catch(i){t.dataset[e]=void 0}else t.removeAttribute("data-".concat(F(e)))}(t,y)}))},preview:function(){var t=this.imageData,e=this.canvasData,i=this.cropBoxData,a=i.width,n=i.height,o=t.width,r=t.height,h=i.left-e.left-t.left,s=i.top-e.top-t.top;this.cropped&&!this.disabled&&(K(this.viewBoxImage,U({width:o,height:r},pt(U({translateX:-h,translateY:-s},t)))),P(this.previews,(function(e){var i=_(e,y),c=i.width,l=i.height,p=c,d=l,m=1;a&&(d=n*(m=c/a)),n&&d>l&&(p=a*(m=l/n),d=l),K(e,{width:p,height:d}),K(e.getElementsByTagName("img")[0],U({width:o*m,height:r*m},pt(U({translateX:-h*m,translateY:-s*m},t))))})))}},yt={bind:function(){var t=this.element,e=this.options,i=this.cropper;A(e.cropstart)&&nt(t,"cropstart",e.cropstart),A(e.cropmove)&&nt(t,"cropmove",e.cropmove),A(e.cropend)&&nt(t,"cropend",e.cropend),A(e.crop)&&nt(t,"crop",e.crop),A(e.zoom)&&nt(t,"zoom",e.zoom),nt(i,D,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&nt(i,"wheel",this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&nt(i,"dblclick",this.onDblclick=this.dblclick.bind(this)),nt(t.ownerDocument,B,this.onCropMove=this.cropMove.bind(this)),nt(t.ownerDocument,k,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&nt(window,"resize",this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,i=this.cropper;A(e.cropstart)&&at(t,"cropstart",e.cropstart),A(e.cropmove)&&at(t,"cropmove",e.cropmove),A(e.cropend)&&at(t,"cropend",e.cropend),A(e.crop)&&at(t,"crop",e.crop),A(e.zoom)&&at(t,"zoom",e.zoom),at(i,D,this.onCropStart),e.zoomable&&e.zoomOnWheel&&at(i,"wheel",this.onWheel,{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&at(i,"dblclick",this.onDblclick),at(t.ownerDocument,B,this.onCropMove),at(t.ownerDocument,k,this.onCropEnd),e.responsive&&at(window,"resize",this.onResize)}},xt={resize:function(){if(!this.disabled){var t,e,i=this.options,a=this.container,n=this.containerData,o=a.offsetWidth/n.width,r=a.offsetHeight/n.height,h=Math.abs(o-1)>Math.abs(r-1)?o:r;1!==h&&(i.restore&&(t=this.getCanvasData(),e=this.getCropBoxData()),this.render(),i.restore&&(this.setCanvasData(P(t,(function(e,i){t[i]=e*h}))),this.setCropBoxData(P(e,(function(t,i){e[i]=t*h})))))}},dblclick:function(){var t,e;this.disabled||"none"===this.options.dragMode||this.setDragMode((t=this.dragBox,e=d,(t.classList?t.classList.contains(e):t.className.indexOf(e)>-1)?"move":"crop"))},wheel:function(t){var e=this,i=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout((function(){e.wheeling=!1}),50),t.deltaY?a=t.deltaY>0?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=t.detail>0?1:-1),this.zoom(-a*i,t)))},cropStart:function(t){var e=t.buttons,i=t.button;if(!(this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(z(e)&&1!==e||z(i)&&0!==i||t.ctrlKey))){var a,n=this.options,o=this.pointers;t.changedTouches?P(t.changedTouches,(function(t){o[t.identifier]=dt(t)})):o[t.pointerId||0]=dt(t),a=Object.keys(o).length>1&&n.zoomable&&n.zoomOnTouch?"zoom":_(t.target,b),O.test(a)&&!1!==ot(this.element,"cropstart",{originalEvent:t,action:a})&&(t.preventDefault(),this.action=a,this.cropping=!1,"crop"===a&&(this.cropping=!0,Z(this.dragBox,v)))}},cropMove:function(t){var e=this.action;if(!this.disabled&&e){var i=this.pointers;t.preventDefault(),!1!==ot(this.element,"cropmove",{originalEvent:t,action:e})&&(t.changedTouches?P(t.changedTouches,(function(t){U(i[t.identifier]||{},dt(t,!0))})):U(i[t.pointerId||0]||{},dt(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var e=this.action,i=this.pointers;t.changedTouches?P(t.changedTouches,(function(t){delete i[t.identifier]})):delete i[t.pointerId||0],e&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,G(this.dragBox,v,this.cropped&&this.options.modal)),ot(this.element,"cropend",{originalEvent:t,action:e}))}}},Mt={change:function(t){var i,a=this.options,n=this.canvasData,o=this.containerData,r=this.cropBoxData,h=this.pointers,s=this.action,c=a.aspectRatio,l=r.left,p=r.top,d=r.width,m=r.height,g=l+d,f=p+m,v=0,w=0,b=o.width,y=o.height,x=!0;!c&&t.shiftKey&&(c=d&&m?d/m:1),this.limited&&(v=r.minLeft,w=r.minTop,b=v+Math.min(o.width,n.width,n.left+n.width),y=w+Math.min(o.height,n.height,n.top+n.height));var M=h[Object.keys(h)[0]],C={x:M.endX-M.startX,y:M.endY-M.startY},D=function(t){switch(t){case"e":g+C.x>b&&(C.x=b-g);break;case"w":l+C.x<v&&(C.x=v-l);break;case"n":p+C.y<w&&(C.y=w-p);break;case"s":f+C.y>y&&(C.y=y-f)}};switch(s){case"all":l+=C.x,p+=C.y;break;case"e":if(C.x>=0&&(g>=b||c&&(p<=w||f>=y))){x=!1;break}D("e"),(d+=C.x)<0&&(s="w",l-=d=-d),c&&(m=d/c,p+=(r.height-m)/2);break;case"n":if(C.y<=0&&(p<=w||c&&(l<=v||g>=b))){x=!1;break}D("n"),m-=C.y,p+=C.y,m<0&&(s="s",p-=m=-m),c&&(d=m*c,l+=(r.width-d)/2);break;case"w":if(C.x<=0&&(l<=v||c&&(p<=w||f>=y))){x=!1;break}D("w"),d-=C.x,l+=C.x,d<0&&(s="e",l-=d=-d),c&&(m=d/c,p+=(r.height-m)/2);break;case"s":if(C.y>=0&&(f>=y||c&&(l<=v||g>=b))){x=!1;break}D("s"),(m+=C.y)<0&&(s="n",p-=m=-m),c&&(d=m*c,l+=(r.width-d)/2);break;case"ne":if(c){if(C.y<=0&&(p<=w||g>=b)){x=!1;break}D("n"),m-=C.y,p+=C.y,d=m*c}else D("n"),D("e"),C.x>=0?g<b?d+=C.x:C.y<=0&&p<=w&&(x=!1):d+=C.x,C.y<=0?p>w&&(m-=C.y,p+=C.y):(m-=C.y,p+=C.y);d<0&&m<0?(s="sw",p-=m=-m,l-=d=-d):d<0?(s="nw",l-=d=-d):m<0&&(s="se",p-=m=-m);break;case"nw":if(c){if(C.y<=0&&(p<=w||l<=v)){x=!1;break}D("n"),m-=C.y,p+=C.y,d=m*c,l+=r.width-d}else D("n"),D("w"),C.x<=0?l>v?(d-=C.x,l+=C.x):C.y<=0&&p<=w&&(x=!1):(d-=C.x,l+=C.x),C.y<=0?p>w&&(m-=C.y,p+=C.y):(m-=C.y,p+=C.y);d<0&&m<0?(s="se",p-=m=-m,l-=d=-d):d<0?(s="ne",l-=d=-d):m<0&&(s="sw",p-=m=-m);break;case"sw":if(c){if(C.x<=0&&(l<=v||f>=y)){x=!1;break}D("w"),d-=C.x,l+=C.x,m=d/c}else D("s"),D("w"),C.x<=0?l>v?(d-=C.x,l+=C.x):C.y>=0&&f>=y&&(x=!1):(d-=C.x,l+=C.x),C.y>=0?f<y&&(m+=C.y):m+=C.y;d<0&&m<0?(s="ne",p-=m=-m,l-=d=-d):d<0?(s="se",l-=d=-d):m<0&&(s="nw",p-=m=-m);break;case"se":if(c){if(C.x>=0&&(g>=b||f>=y)){x=!1;break}D("e"),m=(d+=C.x)/c}else D("s"),D("e"),C.x>=0?g<b?d+=C.x:C.y>=0&&f>=y&&(x=!1):d+=C.x,C.y>=0?f<y&&(m+=C.y):m+=C.y;d<0&&m<0?(s="nw",p-=m=-m,l-=d=-d):d<0?(s="sw",l-=d=-d):m<0&&(s="ne",p-=m=-m);break;case"move":this.move(C.x,C.y),x=!1;break;case"zoom":this.zoom(function(t){var i=e({},t),a=0;return P(t,(function(t,e){delete i[e],P(i,(function(e){var i=Math.abs(t.startX-e.startX),n=Math.abs(t.startY-e.startY),o=Math.abs(t.endX-e.endX),r=Math.abs(t.endY-e.endY),h=Math.sqrt(i*i+n*n),s=(Math.sqrt(o*o+r*r)-h)/h;Math.abs(s)>Math.abs(a)&&(a=s)}))})),a}(h),t),x=!1;break;case"crop":if(!C.x||!C.y){x=!1;break}i=rt(this.cropper),l=M.startX-i.left,p=M.startY-i.top,d=r.minWidth,m=r.minHeight,C.x>0?s=C.y>0?"se":"ne":C.x<0&&(l-=d,s=C.y>0?"sw":"nw"),C.y<0&&(p-=m),this.cropped||(J(this.cropBox,u),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}x&&(r.width=d,r.height=m,r.left=l,r.top=p,this.action=s,this.renderCropBox()),P(h,(function(t){t.startX=t.endX,t.startY=t.endY}))}},Ct={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&Z(this.dragBox,v),J(this.cropBox,u),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=U({},this.initialImageData),this.canvasData=U({},this.initialCanvasData),this.cropBoxData=U({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(U(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),J(this.dragBox,v),Z(this.cropBox,u)),this},replace:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&t&&(this.isImg&&(this.element.src=t),e?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,P(this.previews,(function(e){e.getElementsByTagName("img")[0].src=t})))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,J(this.cropper,m)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,Z(this.cropper,m)),this},destroy:function(){var t=this.element;return t.cropper?(t.cropper=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),this):this},move:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,a=i.left,n=i.top;return this.moveTo(Y(t)?t:a+Number(t),Y(e)?e:n+Number(e))},moveTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,a=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.movable&&(z(t)&&(i.left=t,a=!0),z(e)&&(i.top=e,a=!0),a&&this.renderCanvas(!0)),this},zoom:function(t,e){var i=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(i.width*t/i.naturalWidth,null,e)},zoomTo:function(t,e,i){var a=this.options,n=this.canvasData,o=n.width,r=n.height,h=n.naturalWidth,s=n.naturalHeight;if((t=Number(t))>=0&&this.ready&&!this.disabled&&a.zoomable){var c=h*t,l=s*t;if(!1===ot(this.element,"zoom",{ratio:t,oldRatio:o/h,originalEvent:i}))return this;if(i){var p=this.pointers,d=rt(this.cropper),m=p&&Object.keys(p).length?function(t){var e=0,i=0,a=0;return P(t,(function(t){var n=t.startX,o=t.startY;e+=n,i+=o,a+=1})),{pageX:e/=a,pageY:i/=a}}(p):{pageX:i.pageX,pageY:i.pageY};n.left-=(c-o)*((m.pageX-d.left-n.left)/o),n.top-=(l-r)*((m.pageY-d.top-n.top)/r)}else S(e)&&z(e.x)&&z(e.y)?(n.left-=(c-o)*((e.x-n.left)/o),n.top-=(l-r)*((e.y-n.top)/r)):(n.left-=(c-o)/2,n.top-=(l-r)/2);n.width=c,n.height=l,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return z(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,z(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(z(e)?e:1,t)},scale:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.imageData,a=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.scalable&&(z(t)&&(i.scaleX=t,a=!0),z(e)&&(i.scaleY=e,a=!0),a&&this.renderCanvas(!0,!0)),this},getData:function(){var t,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.options,a=this.imageData,n=this.canvasData,o=this.cropBoxData;if(this.ready&&this.cropped){t={x:o.left-n.left,y:o.top-n.top,width:o.width,height:o.height};var r=a.width/a.naturalWidth;if(P(t,(function(e,i){t[i]=e/r})),e){var h=Math.round(t.y+t.height),s=Math.round(t.x+t.width);t.x=Math.round(t.x),t.y=Math.round(t.y),t.width=s-t.x,t.height=h-t.y}}else t={x:0,y:0,width:0,height:0};return i.rotatable&&(t.rotate=a.rotate||0),i.scalable&&(t.scaleX=a.scaleX||1,t.scaleY=a.scaleY||1),t},setData:function(t){var e=this.options,i=this.imageData,a=this.canvasData,n={};if(this.ready&&!this.disabled&&S(t)){var o=!1;e.rotatable&&z(t.rotate)&&t.rotate!==i.rotate&&(i.rotate=t.rotate,o=!0),e.scalable&&(z(t.scaleX)&&t.scaleX!==i.scaleX&&(i.scaleX=t.scaleX,o=!0),z(t.scaleY)&&t.scaleY!==i.scaleY&&(i.scaleY=t.scaleY,o=!0)),o&&this.renderCanvas(!0,!0);var r=i.width/i.naturalWidth;z(t.x)&&(n.left=t.x*r+a.left),z(t.y)&&(n.top=t.y*r+a.top),z(t.width)&&(n.width=t.width*r),z(t.height)&&(n.height=t.height*r),this.setCropBoxData(n)}return this},getContainerData:function(){return this.ready?U({},this.containerData):{}},getImageData:function(){return this.sized?U({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,e={};return this.ready&&P(["left","top","width","height","naturalWidth","naturalHeight"],(function(i){e[i]=t[i]})),e},setCanvasData:function(t){var e=this.canvasData,i=e.aspectRatio;return this.ready&&!this.disabled&&S(t)&&(z(t.left)&&(e.left=t.left),z(t.top)&&(e.top=t.top),z(t.width)?(e.width=t.width,e.height=t.width/i):z(t.height)&&(e.height=t.height,e.width=t.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,e=this.cropBoxData;return this.ready&&this.cropped&&(t={left:e.left,top:e.top,width:e.width,height:e.height}),t||{}},setCropBoxData:function(t){var e,i,a=this.cropBoxData,n=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&S(t)&&(z(t.left)&&(a.left=t.left),z(t.top)&&(a.top=t.top),z(t.width)&&t.width!==a.width&&(e=!0,a.width=t.width),z(t.height)&&t.height!==a.height&&(i=!0,a.height=t.height),n&&(e?a.height=a.width/n:i&&(a.width=a.height*n)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var e=this.canvasData,i=ut(this.image,this.imageData,e,t);if(!this.cropped)return i;var a=this.getData(),n=a.x,o=a.y,h=a.width,s=a.height,c=i.width/Math.floor(e.naturalWidth);1!==c&&(n*=c,o*=c,h*=c,s*=c);var l=h/s,p=mt({aspectRatio:l,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),d=mt({aspectRatio:l,width:t.minWidth||0,height:t.minHeight||0},"cover"),m=mt({aspectRatio:l,width:t.width||(1!==c?i.width:h),height:t.height||(1!==c?i.height:s)}),u=m.width,g=m.height;u=Math.min(p.width,Math.max(d.width,u)),g=Math.min(p.height,Math.max(d.height,g));var f=document.createElement("canvas"),v=f.getContext("2d");f.width=$(u),f.height=$(g),v.fillStyle=t.fillColor||"transparent",v.fillRect(0,0,u,g);var w=t.imageSmoothingEnabled,b=void 0===w||w,y=t.imageSmoothingQuality;v.imageSmoothingEnabled=b,y&&(v.imageSmoothingQuality=y);var x,M,C,D,B,k,O=i.width,T=i.height,E=n,W=o;E<=-h||E>O?(E=0,x=0,C=0,B=0):E<=0?(C=-E,E=0,B=x=Math.min(O,h+E)):E<=O&&(C=0,B=x=Math.min(h,O-E)),x<=0||W<=-s||W>T?(W=0,M=0,D=0,k=0):W<=0?(D=-W,W=0,k=M=Math.min(T,s+W)):W<=T&&(D=0,k=M=Math.min(s,T-W));var H=[E,W,x,M];if(B>0&&k>0){var N=u/h;H.push(C*N,D*N,B*N,k*N)}return v.drawImage.apply(v,[i].concat(r(H.map((function(t){return Math.floor($(t))}))))),f},setAspectRatio:function(t){var e=this.options;return this.disabled||Y(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e=this.options,i=this.dragBox,a=this.face;if(this.ready&&!this.disabled){var n="crop"===t,o=e.movable&&"move"===t;t=n||o?t:"none",e.dragMode=t,tt(i,b,t),G(i,d,n),G(i,w,o),e.cropBoxMovable||(tt(a,b,t),G(a,d,n),G(a,w,o))}return this}},Dt=c.Cropper,Bt=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(a(this,t),!e||!W.test(e.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=e,this.options=U({},H,S(i)&&i),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}var e,i,o;return e=t,o=[{key:"noConflict",value:function(){return window.Cropper=Dt,t}},{key:"setDefaults",value:function(t){U(H,S(t)&&t)}}],(i=[{key:"init",value:function(){var t,e=this.element,i=e.tagName.toLowerCase();if(!e.cropper){if(e.cropper=this,"img"===i){if(this.isImg=!0,t=e.getAttribute("src")||"",this.originalUrl=t,!t)return;t=e.src}else"canvas"===i&&window.HTMLCanvasElement&&(t=e.toDataURL());this.load(t)}}},{key:"load",value:function(t){var e=this;if(t){this.url=t,this.imageData={};var i=this.element,a=this.options;if(a.rotatable||a.scalable||(a.checkOrientation=!1),a.checkOrientation&&window.ArrayBuffer)if(T.test(t))E.test(t)?this.read((n=t.replace(ft,""),o=atob(n),r=new ArrayBuffer(o.length),P(h=new Uint8Array(r),(function(t,e){h[e]=o.charCodeAt(e)})),r)):this.clone();else{var n,o,r,h,s=new XMLHttpRequest,c=this.clone.bind(this);this.reloading=!0,this.xhr=s,s.onabort=c,s.onerror=c,s.ontimeout=c,s.onprogress=function(){"image/jpeg"!==s.getResponseHeader("content-type")&&s.abort()},s.onload=function(){e.read(s.response)},s.onloadend=function(){e.reloading=!1,e.xhr=null},a.checkCrossOrigin&&ct(t)&&i.crossOrigin&&(t=lt(t)),s.open("GET",t,!0),s.responseType="arraybuffer",s.withCredentials="use-credentials"===i.crossOrigin,s.send()}else this.clone()}}},{key:"read",value:function(t){var e=this.options,i=this.imageData,a=vt(t),n=0,o=1,r=1;if(a>1){this.url=function(t,e){for(var i=[],a=new Uint8Array(t);a.length>0;)i.push(gt.apply(null,I(a.subarray(0,8192)))),a=a.subarray(8192);return"data:".concat(e,";base64,").concat(btoa(i.join("")))}(t,"image/jpeg");var h=function(t){var e=0,i=1,a=1;switch(t){case 2:i=-1;break;case 3:e=-180;break;case 4:a=-1;break;case 5:e=90,a=-1;break;case 6:e=90;break;case 7:e=90,i=-1;break;case 8:e=-90}return{rotate:e,scaleX:i,scaleY:a}}(a);n=h.rotate,o=h.scaleX,r=h.scaleY}e.rotatable&&(i.rotate=n),e.scalable&&(i.scaleX=o,i.scaleY=r),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,i=t.crossOrigin,a=e;this.options.checkCrossOrigin&&ct(e)&&(i||(i="anonymous"),a=lt(e)),this.crossOrigin=i,this.crossOriginUrl=a;var n=document.createElement("img");i&&(n.crossOrigin=i),n.src=a||e,n.alt=t.alt||"The image to crop",this.image=n,n.onload=this.start.bind(this),n.onerror=this.stop.bind(this),Z(n,g),t.parentNode.insertBefore(n,t.nextSibling)}},{key:"start",value:function(){var t=this,e=this.image;e.onload=null,e.onerror=null,this.sizing=!0;var i=c.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(c.navigator.userAgent),a=function(e,i){U(t.imageData,{naturalWidth:e,naturalHeight:i,aspectRatio:e/i}),t.initialImageData=U({},t.imageData),t.sizing=!1,t.sized=!0,t.build()};if(!e.naturalWidth||i){var n=document.createElement("img"),o=document.body||document.documentElement;this.sizingImage=n,n.onload=function(){a(n.width,n.height),i||o.removeChild(n)},n.src=e.src,i||(n.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",o.appendChild(n))}else a(e.naturalWidth,e.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var t=this.element,e=this.options,i=this.image,a=t.parentNode,n=document.createElement("div");n.innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';var o=n.querySelector(".".concat("cropper","-container")),r=o.querySelector(".".concat("cropper","-canvas")),h=o.querySelector(".".concat("cropper","-drag-box")),s=o.querySelector(".".concat("cropper","-crop-box")),c=s.querySelector(".".concat("cropper","-face"));this.container=a,this.cropper=o,this.canvas=r,this.dragBox=h,this.cropBox=s,this.viewBox=o.querySelector(".".concat("cropper","-view-box")),this.face=c,r.appendChild(i),Z(t,u),a.insertBefore(o,t.nextSibling),this.isImg||J(i,g),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,Z(s,u),e.guides||Z(s.getElementsByClassName("".concat("cropper","-dashed")),u),e.center||Z(s.getElementsByClassName("".concat("cropper","-center")),u),e.background&&Z(o,"".concat("cropper","-bg")),e.highlight||Z(c,f),e.cropBoxMovable&&(Z(c,w),tt(c,b,"all")),e.cropBoxResizable||(Z(s.getElementsByClassName("".concat("cropper","-line")),u),Z(s.getElementsByClassName("".concat("cropper","-point")),u)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),A(e.ready)&&nt(t,"ready",e.ready,{once:!0}),ot(t,"ready")}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),J(this.element,u))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}])&&n(e.prototype,i),o&&n(e,o),t}();return U(Bt.prototype,wt,bt,yt,xt,Mt,Ct),Bt}()},1766:function(t,e,i){}}]);