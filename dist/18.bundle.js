(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{103:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var s=n(0),i=n(76),a=n.n(i);function o(t){const e=t.options.map(t.getName);return s.createElement(a.a,{options:e,value:t.getName(t.value),onChange:e=>t.onChange(t.options.find(n=>t.getName(n)===e.value))})}},104:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return g}));var s=n(0),i=n(103);const a=[new class{constructor(){this.name="Fibonacci"}generateSeries(t,e){let n=[];for(let s=0;s<t.length;s++)n.push(t[s]%e),t[s]%=e;let s=!0;for(let i=0;i<n.length-2;i++)(t[i]+t[i+1])%e!==t[i+2]&&(s=!1);const i=s?t:t.slice(t.length-2,t.length);do{n.push((n[n.length-1]+n[n.length-2])%e)}while(!this.hasLooped(n,i));return n.splice(n.length-i.length+1,i.length-1),n}hasLooped(t,e){var n=t.length-e.length;for(let s=0;s<e.length;s++)if(t[s+n]!==e[s])return!1;return!0}},new class{constructor(){this.name="Fibonacci +1"}generateSeries(t,e){let n=[];for(let s=0;s<t.length;s++)n.push(t[s]%e),t[s]%=e;let s=!0;for(let i=0;i<n.length-2;i++)(t[i]+t[i+1]+1)%e!==t[i+2]&&(s=!1);const i=s?t:t.slice(t.length-2,t.length);do{n.push((n[n.length-1]+n[n.length-2]+1)%e)}while(!this.hasLooped(n,i));return n.splice(n.length-i.length+1,i.length-1),n}hasLooped(t,e){var n=t.length-e.length;for(let s=0;s<e.length;s++)if(t[s+n]!==e[s])return!1;return!0}},new class{constructor(){this.name="Triangle"}generateSeries(t,e){let n=[];for(let s=0;s<t.length;s++)n.push(t[s]%e),t[s]%=e;let s=!0;for(let i=0;i<n.length-1;i++)(t[i]+i+1)%e!==t[i+1]&&(s=!1);const i=s?t[0]:t[t.length-1],a=s?0:(t.length-1)%e;do{n.push((n[n.length-1]+n.length)%e)}while(!this.hasLooped(n,e,i,a));return s&&n.splice(n.length-t.length+1,t.length-1),n}hasLooped(t,e,n,s){return t[t.length-1]===n&&(t.length-1)%e===s}},new class{constructor(){this.name="Sum Of Three"}generateSeries(t,e){let n=[];for(;t.length<3;)t.splice(0,0,0);for(let s=0;s<t.length;s++)n.push(t[s]%e),t[s]%=e;let s=!0;for(let i=0;i<n.length-3;i++)(t[i]+t[i+1]+t[i+2])%e!==t[i+3]&&(s=!1);const i=s?t:t.slice(t.length-3,t.length);do{n.push((n[n.length-1]+n[n.length-2]+n[n.length-3])%e)}while(!this.hasLooped(n,i));return n.splice(n.length-i.length+1,i.length-1),n}hasLooped(t,e){var n=t.length-e.length;for(let s=0;s<e.length;s++)if(t[s+n]!==e[s])return!1;return!0}}];var o=n(13);class r extends s.Component{constructor(t){super(t),this.canvasRef=s.createRef(),this.animationTick=0,this.animationTimer=0,this.isRunningAnimation=!1}render(){return s.createElement("canvas",{ref:this.canvasRef})}componentDidMount(){this.startPaint()}componentDidUpdate(t,e){t.animate===this.props.animate&&t.visualizer===this.props.visualizer&&t.animationDuration===this.props.animationDuration||(this.stopPreviousPaint(),this.startPaint())}startPaint(){const t=this.canvasRef.current;Object(o.b)(t,500,500);const e=t.getContext("2d");e.lineWidth=3,this.clearCanvas(e),this.props.animate?(this.animationTick=0,this.isRunningAnimation=!0,this.animationTimer=requestAnimationFrame(()=>this.paintFrame(e))):this.props.visualizer.paintTotal(e,500,500)}clearCanvas(t){t.fillStyle="black",t.fillRect(0,0,500,500)}stopPreviousPaint(){this.isRunningAnimation&&cancelAnimationFrame(this.animationTimer)}paintFrame(t){this.animationTick++,this.clearCanvas(t),this.animationTick>=60*this.props.animationDuration?(this.props.visualizer.paintTotal(t,500,500),this.isRunningAnimation=!1,this.animationTick=this.animationTimer=0):(this.props.visualizer.paintFrame(t,500,500,this.animationTick/(60*this.props.animationDuration)),this.animationTimer=requestAnimationFrame(()=>this.paintFrame(t)))}}var l=n(74);class h{constructor(t,e){this.modulo=t,this.series=e,this.anchorPoints=[];const n=2*Math.PI/t;for(let t=0;t<this.modulo;t++){const e=t*n;this.anchorPoints.push(l.a.fromAngle(e,1))}}paintFrame(t,e,n,s){const i=Math.min(e,n)/2-t.lineWidth,a=s*(this.series.length-1);t.strokeStyle="white",t.beginPath(),t.arc(e/2,n/2,i,0,2*Math.PI,!1),t.stroke(),t.strokeStyle="gray",t.lineJoin=t.lineCap="round",t.beginPath();for(let s=0;s<this.series.length&&s<a;s++){let a=this.anchorPoints[this.series[s]].Clone();a.MultWith(i,i),a.AddWith(e/2,n/2),0===s?t.moveTo(a.x,a.y):t.lineTo(a.x,a.y)}const o=Math.floor(a),r=a%1;let h=this.anchorPoints[this.series[o]],c=this.anchorPoints[this.series[o+1]];const u=l.a.interpolate(h,c,r);u.MultWith(i,i),u.AddWith(e/2,n/2),t.lineTo(u.x,u.y),t.stroke(),t.strokeStyle="red",t.beginPath(),t.arc(u.x,u.y,2*t.lineWidth,0,2*Math.PI,!1),t.stroke()}paintTotal(t,e,n){const s=Math.min(e,n)/2-t.lineWidth;t.strokeStyle="white",t.beginPath(),t.arc(e/2,n/2,s,0,2*Math.PI,!1),t.stroke(),t.strokeStyle="gray",t.lineJoin=t.lineCap="round",t.beginPath();for(let i=0;i<this.series.length;i++){let a=this.anchorPoints[this.series[i]].Clone();a.MultWith(s,s),a.AddWith(e/2,n/2),0===i?t.moveTo(a.x,a.y):t.lineTo(a.x,a.y)}t.stroke()}}class c{constructor(t,e){this.modulo=t,this.series=e;const n=new l.a(0,0);this.pts=[n.Clone()],this.minExtent=n.Clone(),this.maxExtent=n.Clone();let s=2*Math.PI/t,i=0;for(let t=0;t<e.length;t++){i+=s*e[t],n.AddWith(l.a.fromAngle(i));var a=n.Clone();this.minExtent=l.a.componentMin(this.minExtent,a),this.maxExtent=l.a.componentMax(this.maxExtent,a),this.pts.push(a)}for(let t=0;t<this.pts.length;t++)this.pts[t]=new l.a((this.pts[t].x-this.minExtent.x)/(this.maxExtent.x-this.minExtent.x),(this.pts[t].y-this.minExtent.y)/(this.maxExtent.y-this.minExtent.y))}paintFrame(t,e,n,s){t.save(),t.translate(.1*e/2,.1*n/2),t.scale(.9,.9),t.strokeStyle="gray",t.lineJoin=t.lineCap="round";const i=s*(this.pts.length-1),a=Math.floor(i),o=i%1;t.beginPath(),t.moveTo(this.pts[0].x*e,this.pts[0].y*n);for(let s=1;s<this.pts.length&&s<i;s++)t.lineTo(this.pts[s].x*e,this.pts[s].y*n);let r=this.pts[a],h=this.pts[a+1];const c=l.a.interpolate(r,h,o);c.MultWith(e,n),t.lineTo(c.x,c.y),t.stroke(),t.strokeStyle="red",t.beginPath(),t.arc(c.x,c.y,2*t.lineWidth,0,2*Math.PI,!1),t.stroke(),t.restore()}paintTotal(t,e,n){t.save(),t.translate(.1*e/2,.1*n/2),t.scale(.9,.9),t.strokeStyle="gray",t.lineJoin=t.lineCap="round",t.beginPath(),t.moveTo(this.pts[0].x*e,this.pts[0].y*n);for(let s=1;s<this.pts.length;s++)t.lineTo(this.pts[s].x*e,this.pts[s].y*n);t.stroke(),t.restore()}}const u=[new l.a(1,0),new l.a(0,1),new l.a(-1,0),new l.a(0,-1)];class p{constructor(t,e){this.modulo=t,this.series=e;const n=new l.a(0,0);this.pts=[n.Clone()],this.minExtent=n.Clone(),this.maxExtent=n.Clone();let s=0;for(let t=0;t<e.length;t++){s=e[t]%2==0?s+1:s-1,s+=u.length,s%=u.length,n.AddWith(u[s]);var i=n.Clone();this.minExtent=l.a.componentMin(this.minExtent,i),this.maxExtent=l.a.componentMax(this.maxExtent,i),this.pts.push(i)}this.minExtent.x===this.maxExtent.x&&(this.minExtent.x=-1,this.maxExtent.x=1),this.minExtent.y===this.maxExtent.y&&(this.minExtent.y=-1,this.maxExtent.y=1);for(let t=0;t<this.pts.length;t++)this.pts[t]=new l.a((this.pts[t].x-this.minExtent.x)/(this.maxExtent.x-this.minExtent.x),(this.pts[t].y-this.minExtent.y)/(this.maxExtent.y-this.minExtent.y))}paintFrame(t,e,n,s){t.save(),t.translate(.1*e/2,.1*n/2),t.scale(.9,.9),t.strokeStyle="gray",t.lineJoin=t.lineCap="round";const i=s*(this.pts.length-1),a=Math.floor(i),o=i%1;t.beginPath(),t.moveTo(this.pts[0].x*e,this.pts[0].y*n);for(let s=1;s<this.pts.length&&s<i;s++)t.lineTo(this.pts[s].x*e,this.pts[s].y*n);let r=this.pts[a],h=this.pts[a+1];const c=l.a.interpolate(r,h,o);c.MultWith(e,n),t.lineTo(c.x,c.y),t.stroke(),t.strokeStyle="red",t.beginPath(),t.arc(c.x,c.y,2*t.lineWidth,0,2*Math.PI,!1),t.stroke(),t.restore()}paintTotal(t,e,n){t.save(),t.translate(.1*e/2,.1*n/2),t.scale(.9,.9),t.strokeStyle="gray",t.lineJoin=t.lineCap="round",t.beginPath(),t.moveTo(this.pts[0].x*e,this.pts[0].y*n);for(let s=1;s<this.pts.length;s++)t.lineTo(this.pts[s].x*e,this.pts[s].y*n);t.stroke(),t.restore()}}const m=[new l.a(1,0),new l.a(0,1),new l.a(-1,0),new l.a(0,-1)];class d{constructor(t,e){this.modulo=t,this.series=e;const n=new l.a(0,0);this.pts=[n.Clone()],this.minExtent=n.Clone(),this.maxExtent=n.Clone();let s=0;for(let t=0;t<e.length;t++){s=0===e[t]?s:e[t]%2==0?s+1:s-1,s+=m.length,s%=m.length,n.AddWith(m[s]);var i=n.Clone();this.minExtent=l.a.componentMin(this.minExtent,i),this.maxExtent=l.a.componentMax(this.maxExtent,i),this.pts.push(i)}this.minExtent.x===this.maxExtent.x&&(this.minExtent.x=-1,this.maxExtent.x=1),this.minExtent.y===this.maxExtent.y&&(this.minExtent.y=-1,this.maxExtent.y=1);for(let t=0;t<this.pts.length;t++)this.pts[t]=new l.a((this.pts[t].x-this.minExtent.x)/(this.maxExtent.x-this.minExtent.x),(this.pts[t].y-this.minExtent.y)/(this.maxExtent.y-this.minExtent.y))}paintFrame(t,e,n,s){t.save(),t.translate(.1*e/2,.1*n/2),t.scale(.9,.9),t.strokeStyle="gray",t.lineJoin=t.lineCap="round";const i=s*(this.pts.length-1),a=Math.floor(i),o=i%1;t.beginPath(),t.moveTo(this.pts[0].x*e,this.pts[0].y*n);for(let s=1;s<this.pts.length&&s<i;s++)t.lineTo(this.pts[s].x*e,this.pts[s].y*n);let r=this.pts[a],h=this.pts[a+1];const c=l.a.interpolate(r,h,o);c.MultWith(e,n),t.lineTo(c.x,c.y),t.stroke(),t.strokeStyle="red",t.beginPath(),t.arc(c.x,c.y,2*t.lineWidth,0,2*Math.PI,!1),t.stroke(),t.restore()}paintTotal(t,e,n){t.save(),t.translate(.1*e/2,.1*n/2),t.scale(.9,.9),t.strokeStyle="gray",t.lineJoin=t.lineCap="round",t.beginPath(),t.moveTo(this.pts[0].x*e,this.pts[0].y*n);for(let s=1;s<this.pts.length;s++)t.lineTo(this.pts[s].x*e,this.pts[s].y*n);t.stroke(),t.restore()}}class x{constructor(t,e){this.name=t,this.generate=e}}class f{constructor(t,e){this.modulo=t,this.series=e;const n=new l.a(0,0);this.pts=[n.Clone()],this.minExtent=n.Clone(),this.maxExtent=n.Clone();let s=2*Math.PI/t;for(let t=0;t<e.length;t++){const a=s*e[t];n.AddWith(l.a.fromAngle(a));var i=n.Clone();this.minExtent=l.a.componentMin(this.minExtent,i),this.maxExtent=l.a.componentMax(this.maxExtent,i),this.pts.push(i)}for(let t=0;t<this.pts.length;t++)this.pts[t]=new l.a((this.pts[t].x-this.minExtent.x)/(this.maxExtent.x-this.minExtent.x),(this.pts[t].y-this.minExtent.y)/(this.maxExtent.y-this.minExtent.y))}paintFrame(t,e,n,s){t.save(),t.translate(.1*e/2,.1*n/2),t.scale(.9,.9),t.strokeStyle="gray",t.lineJoin=t.lineCap="round";const i=s*(this.pts.length-1),a=Math.floor(i),o=i%1;t.beginPath(),t.moveTo(this.pts[0].x*e,this.pts[0].y*n);for(let s=1;s<this.pts.length&&s<i;s++)t.lineTo(this.pts[s].x*e,this.pts[s].y*n);let r=this.pts[a],h=this.pts[a+1];const c=l.a.interpolate(r,h,o);c.MultWith(e,n),t.lineTo(c.x,c.y),t.stroke(),t.strokeStyle="red",t.beginPath(),t.arc(c.x,c.y,2*t.lineWidth,0,2*Math.PI,!1),t.stroke(),t.restore()}paintTotal(t,e,n){t.save(),t.translate(.1*e/2,.1*n/2),t.scale(.9,.9),t.strokeStyle="gray",t.lineJoin=t.lineCap="round",t.beginPath(),t.moveTo(this.pts[0].x*e,this.pts[0].y*n);for(let s=1;s<this.pts.length;s++)t.lineTo(this.pts[s].x*e,this.pts[s].y*n);t.stroke(),t.restore()}}const y=[new x("Dreamcatcher",(t,e)=>new h(t,e)),new x("Angle Walk (Absolute)",(t,e)=>new f(t,e)),new x("Angle Walk (Relative)",(t,e)=>new c(t,e)),new x("Square Walk",(t,e)=>new d(t,e)),new x("Square Walk (No Zero)",(t,e)=>new p(t,e))];function g(){let[t,e]=s.useState("0 1"),[n,o]=s.useState("3"),[l,h]=s.useState(!0),[c,u]=s.useState(null),[p,m]=s.useState(y[0]),[d,x]=s.useState(a[0]),[f,g]=s.useState(5),v=function(t,e){const n=t.split(" ").map(t=>t.trim()).filter(t=>""!=t),s=[];for(let t=0;t<n.length;t++)if(s.push(parseInt(n[t])),isNaN(s[t]))return{seedError:"Failed to parse seed value "+n[t]};if(s.length<2)return{seedError:"Seed must have a length of at least 2"};const i=parseInt(e);return isNaN(i)?{moduloError:"Failed to parse modulus "+e}:{seed:s,modulo:i}}(t,n),E=void 0!==v.seed;return s.useEffect(()=>{if(E){const t=v.modulo,e=d.generateSeries(v.seed,t);u({animate:l,visualizer:p.generate(t,e),animationDuration:f})}},[l,E,v.modulo,p,d,f,JSON.stringify(v.seed)]),s.createElement("div",{className:"flex col align-center"},s.createElement("div",{className:"flex col",style:{maxWidth:"800px"}},s.createElement("div",{className:"flex row justify-space-between"},s.createElement("label",null,"Seed Values: "),s.createElement("input",{type:"text",value:t,onChange:t=>e(t.target.value),style:{marginLeft:"8px"}})),s.createElement("div",{className:"flex row justify-space-between"},s.createElement("label",null,"Modulo: "),s.createElement("input",{type:"number",value:n,onChange:t=>o(t.target.value),style:{marginLeft:"8px"}})),s.createElement("div",{className:"flex row justify-space-between"},s.createElement("label",null,"Animation Duration: "),s.createElement("div",null,l?s.createElement("input",{type:"number",value:f,onChange:t=>g(t.target.valueAsNumber)}):s.createElement(s.Fragment,null),s.createElement("input",{type:"checkbox",checked:l,onChange:t=>h(t.target.checked),style:{marginLeft:"8px"}}))),s.createElement("div",{className:"flex row justify-space-between align-center"},s.createElement("label",null,"Generator: "),s.createElement(i.a,{options:a,getName:t=>t.name,value:d,onChange:t=>x(t)})),s.createElement("div",{className:"flex row justify-space-between align-center"},s.createElement("label",null,"Visualizer: "),s.createElement(i.a,{options:y,getName:t=>t.name,value:p,onChange:t=>m(t)}))),null!==c?s.createElement(r,Object.assign({},c)):s.createElement(s.Fragment,null))}},74:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));class s{constructor(t,e){this.x=t,this.y=e}static zero(){return new s(0,0)}static fromAngle(t,e){return new s(Math.cos(t)*(null!=e?e:1),Math.sin(t)*(null!=e?e:1))}LengthSq(){return s.Dot(this,this)}Length(){return Math.sqrt(this.LengthSq())}Clone(){return new s(this.x,this.y)}Negate(){return new s(-this.x,-this.y)}NegateInPlace(){return this.x=-this.x,this.y=-this.y,this}static Dot(t,e){return t.x*e.x+t.y*e.y}DotWith(t){return s.Dot(this,t)}normalize(){let t=this.Length();return s.Multiply(this,1/t)}Direction(){return Math.atan2(this.y,this.x)}AddWith(t,e){const{x:n,y:s}=i(t,e);return this.x+=n,this.y+=s,this}MultWith(t,e){const{x:n,y:s}=function(t,e){if(void 0===e)return void 0!==t.x?{x:t.x,y:t.y}:{x:t,y:t};return{x:t,y:e}}(t,e);return this.x*=n,this.y*=s,this}SubtractWith(t,e){const{x:n,y:s}=i(t,e);return this.x-=n,this.y-=s,this}DivideWith(t,e){const{x:n,y:s}=i(t,e);return this.x/=n,this.y/=s,this}Equals(t){return this.x===t.x&&this.y===t.y}static add(t,e,n){const{x:a,y:o}=i(e,n);return new s(t.x+a,t.y+o)}static subtract(t,e,n){const{x:a,y:o}=i(e,n);return new s(t.x-a,t.y-o)}static Multiply(t,e,n){return void 0!==n?new s(t.x*e,t.y*n):void 0!==e.x?new s(t.x*e.x,t.y*e.y):new s(t.x*e,t.y*e)}static interpolate(t,e,n){return new s(t.x+(e.x-t.x)*n,t.y+(e.y-t.y)*n)}static componentMin(t,e){return t.x<=e.x&&t.y<=e.y?t:e.x<=t.x&&e.y<=t.y?e:new s(Math.min(t.x,e.x),Math.min(t.y,e.y))}static componentMax(t,e){return t.x>=e.x&&t.y>=e.y?t:e.x>=t.x&&e.y>=t.y?e:new s(Math.max(t.x,e.x),Math.max(t.y,e.y))}static Bezier(t,e){return 1===t.length?t[0]:2===t.length?s.add(s.Multiply(t[1],e),s.Multiply(t[0],1-e)):s.add(s.Multiply(s.Bezier(t.slice(1),e),e),s.Multiply(s.Bezier(t.slice(0,t.length-1),e),1-e))}rotate(t){const e=Math.atan2(this.y,this.x),n=this.Length();return s.fromAngle(e+t,n)}}function i(t,e){return void 0===e?{x:t.x,y:t.y}:{x:t,y:e}}},76:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==l(t)&&"function"!=typeof t)return{default:t};var e=r();if(e&&e.has(t))return e.get(t);var n={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var a=s?Object.getOwnPropertyDescriptor(t,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=t[i]}n.default=t,e&&e.set(t,n);return n}(n(0)),i=o(n(16)),a=o(n(81));function o(t){return t&&t.__esModule?t:{default:t}}function r(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return r=function(){return t},t}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d=function(t){function e(t){var n,s,i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),s=this,(n=!(i=u(e).call(this,t))||"object"!==l(i)&&"function"!=typeof i?p(s):i).state={selected:n.parseValue(t.value,t.options)||{label:void 0===t.placeholder?"Select...":t.placeholder,value:""},isOpen:!1},n.mounted=!0,n.handleDocumentClick=n.handleDocumentClick.bind(p(n)),n.fireChangeEvent=n.fireChangeEvent.bind(p(n)),n}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,t),n=e,(o=[{key:"componentWillReceiveProps",value:function(t){if(t.value){var e=this.parseValue(t.value,t.options);e!==this.state.selected&&this.setState({selected:e})}else this.setState({selected:{label:void 0===t.placeholder?"Select...":t.placeholder,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1),document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,document.removeEventListener("click",this.handleDocumentClick,!1),document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(t){this.props.onFocus&&"function"==typeof this.props.onFocus&&this.props.onFocus(this.state.isOpen),"mousedown"===t.type&&0!==t.button||(t.stopPropagation(),t.preventDefault(),this.props.disabled||this.setState({isOpen:!this.state.isOpen}))}},{key:"parseValue",value:function(t,e){var n;if("string"==typeof t)for(var s=0,i=e.length;s<i;s++)if("group"===e[s].type){var a=e[s].items.filter((function(e){return e.value===t}));a.length&&(n=a[0])}else void 0!==e[s].value&&e[s].value===t&&(n=e[s]);return n||t}},{key:"setValue",value:function(t,e){var n={selected:{value:t,label:e},isOpen:!1};this.fireChangeEvent(n),this.setState(n)}},{key:"fireChangeEvent",value:function(t){t.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(t.selected)}},{key:"renderOption",value:function(t){var e,n=t.value;void 0===n&&(n=t.label||t);var i=t.label||t.value||t,o=n===this.state.selected.value||n===this.state.selected,r=(h(e={},"".concat(this.props.baseClassName,"-option"),!0),h(e,t.className,!!t.className),h(e,"is-selected",o),e),l=(0,a.default)(r);return s.default.createElement("div",{key:n,className:l,onMouseDown:this.setValue.bind(this,n,i),onClick:this.setValue.bind(this,n,i),role:"option","aria-selected":o?"true":"false"},i)}},{key:"buildMenu",value:function(){var t=this,e=this.props,n=e.options,i=e.baseClassName,a=n.map((function(e){if("group"===e.type){var n=s.default.createElement("div",{className:"".concat(i,"-title")},e.name),a=e.items.map((function(e){return t.renderOption(e)}));return s.default.createElement("div",{className:"".concat(i,"-group"),key:e.name,role:"listbox",tabIndex:"-1"},n,a)}return t.renderOption(e)}));return a.length?a:s.default.createElement("div",{className:"".concat(i,"-noresults")},"No options found")}},{key:"handleDocumentClick",value:function(t){this.mounted&&(i.default.findDOMNode(this).contains(t.target)||this.state.isOpen&&this.setState({isOpen:!1}))}},{key:"isValueSelected",value:function(){return"string"==typeof this.state.selected||""!==this.state.selected.value}},{key:"render",value:function(){var t,e,n,i,o,r=this.props,l=r.baseClassName,c=r.controlClassName,u=r.placeholderClassName,p=r.menuClassName,m=r.arrowClassName,d=r.arrowClosed,x=r.arrowOpen,f=r.className,y=this.props.disabled?"Dropdown-disabled":"",g="string"==typeof this.state.selected?this.state.selected:this.state.selected.label,v=(0,a.default)((h(t={},"".concat(l,"-root"),!0),h(t,f,!!f),h(t,"is-open",this.state.isOpen),t)),E=(0,a.default)((h(e={},"".concat(l,"-control"),!0),h(e,c,!!c),h(e,y,!!y),e)),b=(0,a.default)((h(n={},"".concat(l,"-placeholder"),!0),h(n,u,!!u),h(n,"is-selected",this.isValueSelected()),n)),w=(0,a.default)((h(i={},"".concat(l,"-menu"),!0),h(i,p,!!p),i)),k=(0,a.default)((h(o={},"".concat(l,"-arrow"),!0),h(o,m,!!m),o)),C=s.default.createElement("div",{className:b},g),M=this.state.isOpen?s.default.createElement("div",{className:w,"aria-expanded":"true"},this.buildMenu()):null;return s.default.createElement("div",{className:v},s.default.createElement("div",{className:E,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this),"aria-haspopup":"listbox"},C,s.default.createElement("div",{className:"".concat(l,"-arrow-wrapper")},x&&d?this.state.isOpen?x:d:s.default.createElement("span",{className:k}))),M)}}])&&c(n.prototype,o),r&&c(n,r),e}(s.Component);d.defaultProps={baseClassName:"Dropdown"};var x=d;e.default=x},81:function(t,e,n){var s;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var s=arguments[e];if(s){var a=typeof s;if("string"===a||"number"===a)t.push(s);else if(Array.isArray(s)&&s.length){var o=i.apply(null,s);o&&t.push(o)}else if("object"===a)for(var r in s)n.call(s,r)&&s[r]&&t.push(r)}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(s=function(){return i}.apply(e,[]))||(t.exports=s)}()}}]);
//# sourceMappingURL=18.bundle.js.map