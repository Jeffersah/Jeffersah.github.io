(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{80:function(t,o,e){"use strict";e.r(o),e.d(o,"default",(function(){return l}));var n=e(11);let a,r;function l(){r=document.getElementById("canvas"),Object(n.b)(r,500,500),a=r.getContext("2d"),function t(){(function(){const t=a.createLinearGradient(0,0,0,500),o=(a.createLinearGradient(0,0,500,0),193*i%500/500);t.addColorStop(0,d(.3)),t.addColorStop(Math.max(0,o-.03),d(.3)),t.addColorStop(o,d(1)),t.addColorStop(Math.min(o+.03,1),d(.3)),t.addColorStop(1,d(.3)),a.fillStyle="black",a.globalAlpha=1,a.fillRect(0,0,500,500),a.globalAlpha=1,a.strokeStyle=t,a.lineWidth=1,a.beginPath(),a.moveTo(250,0),a.lineTo(400,400),a.lineTo(100,400),a.lineTo(250,0),a.stroke(),a.globalCompositeOperation="lighter";const e=r.height/100;for(let t=0;t<100;t++){const o=e*t,n=Math.floor(5*(Math.random()-.5));a.drawImage(r,0,o,r.width,e,n,o,r.width,e)}const n=r.height/100;for(let t=0;t<100;t++){const o=e*t,l=Math.floor(5*(Math.random()-.5));a.drawImage(r,o,0,n,r.height,o,l,n,r.height)}a.globalCompositeOperation="source-over",i++})(),requestAnimationFrame(()=>t())}()}let i=0;function d(t){if(t<=.5){return"rgb(0, "+Math.floor(2*t*255)+", 0)"}{const o=Math.floor(2*(t-.5)*255);return"rgb("+o+", 255, "+o+")"}}}}]);
//# sourceMappingURL=techRender.bundle.js.map