(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{74:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var s=r?Object.getOwnPropertyDescriptor(e,n):null;s&&(s.get||s.set)?Object.defineProperty(a,n,s):a[n]=e[n]}a.default=e,t&&t.set(e,a);return a}(a(0)),n=i(a(16)),s=i(a(77));function i(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function h(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var a,r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(a=!(n=u(t).call(this,e))||"object"!==o(n)&&"function"!=typeof n?p(r):n).state={selected:a.parseValue(e.value,e.options)||{label:void 0===e.placeholder?"Select...":e.placeholder,value:""},isOpen:!1},a.mounted=!0,a.handleDocumentClick=a.handleDocumentClick.bind(p(a)),a.fireChangeEvent=a.fireChangeEvent.bind(p(a)),a}var a,i,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),a=t,(i=[{key:"componentWillReceiveProps",value:function(e){if(e.value){var t=this.parseValue(e.value,e.options);t!==this.state.selected&&this.setState({selected:t})}else this.setState({selected:{label:void 0===e.placeholder?"Select...":e.placeholder,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1),document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,document.removeEventListener("click",this.handleDocumentClick,!1),document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(e){this.props.onFocus&&"function"==typeof this.props.onFocus&&this.props.onFocus(this.state.isOpen),"mousedown"===e.type&&0!==e.button||(e.stopPropagation(),e.preventDefault(),this.props.disabled||this.setState({isOpen:!this.state.isOpen}))}},{key:"parseValue",value:function(e,t){var a;if("string"==typeof e)for(var r=0,n=t.length;r<n;r++)if("group"===t[r].type){var s=t[r].items.filter((function(t){return t.value===e}));s.length&&(a=s[0])}else void 0!==t[r].value&&t[r].value===e&&(a=t[r]);return a||e}},{key:"setValue",value:function(e,t){var a={selected:{value:e,label:t},isOpen:!1};this.fireChangeEvent(a),this.setState(a)}},{key:"fireChangeEvent",value:function(e){e.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(e.selected)}},{key:"renderOption",value:function(e){var t,a=e.value;void 0===a&&(a=e.label||e);var n=e.label||e.value||e,i=a===this.state.selected.value||a===this.state.selected,l=(c(t={},"".concat(this.props.baseClassName,"-option"),!0),c(t,e.className,!!e.className),c(t,"is-selected",i),t),o=(0,s.default)(l);return r.default.createElement("div",{key:a,className:o,onMouseDown:this.setValue.bind(this,a,n),onClick:this.setValue.bind(this,a,n),role:"option","aria-selected":i?"true":"false"},n)}},{key:"buildMenu",value:function(){var e=this,t=this.props,a=t.options,n=t.baseClassName,s=a.map((function(t){if("group"===t.type){var a=r.default.createElement("div",{className:"".concat(n,"-title")},t.name),s=t.items.map((function(t){return e.renderOption(t)}));return r.default.createElement("div",{className:"".concat(n,"-group"),key:t.name,role:"listbox",tabIndex:"-1"},a,s)}return e.renderOption(t)}));return s.length?s:r.default.createElement("div",{className:"".concat(n,"-noresults")},"No options found")}},{key:"handleDocumentClick",value:function(e){this.mounted&&(n.default.findDOMNode(this).contains(e.target)||this.state.isOpen&&this.setState({isOpen:!1}))}},{key:"isValueSelected",value:function(){return"string"==typeof this.state.selected||""!==this.state.selected.value}},{key:"render",value:function(){var e,t,a,n,i,l=this.props,o=l.baseClassName,h=l.controlClassName,u=l.placeholderClassName,p=l.menuClassName,d=l.arrowClassName,f=l.arrowClosed,m=l.arrowOpen,y=l.className,g=this.props.disabled?"Dropdown-disabled":"",v="string"==typeof this.state.selected?this.state.selected:this.state.selected.label,w=(0,s.default)((c(e={},"".concat(o,"-root"),!0),c(e,y,!!y),c(e,"is-open",this.state.isOpen),e)),x=(0,s.default)((c(t={},"".concat(o,"-control"),!0),c(t,h,!!h),c(t,g,!!g),t)),b=(0,s.default)((c(a={},"".concat(o,"-placeholder"),!0),c(a,u,!!u),c(a,"is-selected",this.isValueSelected()),a)),k=(0,s.default)((c(n={},"".concat(o,"-menu"),!0),c(n,p,!!p),n)),D=(0,s.default)((c(i={},"".concat(o,"-arrow"),!0),c(i,d,!!d),i)),I=r.default.createElement("div",{className:b},v),C=this.state.isOpen?r.default.createElement("div",{className:k,"aria-expanded":"true"},this.buildMenu()):null;return r.default.createElement("div",{className:w},r.default.createElement("div",{className:x,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this),"aria-haspopup":"listbox"},I,r.default.createElement("div",{className:"".concat(o,"-arrow-wrapper")},m&&f?this.state.isOpen?m:f:r.default.createElement("span",{className:D}))),C)}}])&&h(a.prototype,i),l&&h(a,l),t}(r.Component);f.defaultProps={baseClassName:"Dropdown"};var m=f;t.default=m},77:function(e,t,a){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&e.push(i)}else if("object"===s)for(var l in r)a.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},79:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(0);function n(e,t){const[a,n]=Object(r.useState)(e);return[a,e=>{t(e,a),n(e)}]}},88:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return S}));var r,n=a(0),s=a(74),i=a.n(s);!function(e){e[e.Decorative=0]="Decorative",e[e.Get=1]="Get",e[e.Compare=2]="Compare",e[e.Set=3]="Set",e[e.Swap=4]="Swap",e[e.CSwap=5]="CSwap"}(r||(r={}));var l=r;class o{constructor(e,t,a,r){this.array1=e,this.index1=t,this.array2=a,this.index2=r,this.type="compare",this.complexity=l.Compare}apply(e){}rollback(e){}}class c{constructor(e,t,a,r,n){this.srcArray=e,this.srcIndex=t,this.tgtArray=a,this.tgtIndex=r,this.replacedValue=n,this.type="copy",this.complexity=l.Set}apply(e){this.tgtArray.internalSet(this.tgtIndex,this.srcArray.internalGet(this.srcIndex).value)}rollback(e){this.tgtArray.internalSet(this.tgtIndex,this.replacedValue)}}class h{constructor(e,t,a,r){this.srcArray=e,this.srcIndex=t,this.tgtArray=a,this.tgtIndex=r,this.type="swap",this.complexity=l.Swap}apply(e){const t=this.srcArray.internalGet(this.srcIndex).value;this.srcArray.internalSet(this.srcIndex,this.tgtArray.internalGet(this.tgtIndex).value),this.tgtArray.internalSet(this.tgtIndex,t)}rollback(e){this.apply(e)}}class u{constructor(e,t,a,r){this.state=e,this.array=t,this.value=a,this.index=r}compare(e){this.state.pushDelta(new o(this.array,this.index,e.array,e.index));const t=this.value-e.value;return 0===t?0:t<0?-1:1}}class p{constructor(e,t,a){this.array=e,this.startingSize=t,this.offset=a,this.type="createSubArray",this.complexity=l.Get}apply(e){this.array.internalFill(new Array(this.startingSize)),e.internalCreateArray(this.array)}rollback(e){e.internalRemoveArray(this.array)}}class d{constructor(e,t){this.array=e,this.endingData=t,this.type="deleteSubArray",this.complexity=l.Get}apply(e){e.internalRemoveArray(this.array)}rollback(e){this.array.internalFill(this.endingData),e.internalCreateArray(this.array)}}class f{constructor(e,t,a,r){this.state=e,this.arrayId=t,this.offset=a,this.data=[];for(let t=0;t<r.length;t++)this.data.push(new u(e,this,r[t],t))}length(){return this.data.length}get(e){return this.data[e]}swap(e,t){this.state.pushDelta(new h(this,e,this,t));const a=this.data[e].value;this.data[e].value=this.data[t].value,this.data[t].value=a}set(e,t){this.state.pushDelta(new c(t.array,t.index,this,e,this.data[e].value)),this.data[e].value=t.value}getDeleteDelta(){return new d(this,this.data.map(e=>e.value))}internalSet(e,t){this.data[e].value=t}internalSwap(e,t){const a=this.data[e].value;this.data[e].value=this.data[t].value,this.data[t].value=a}internalGet(e){return this.data[e]}internalFill(e){this.data=[];for(let t=0;t<e.length;t++)this.data.push(new u(this.state,this,e[t],t))}}class m{constructor(e){this.initialValue=e,this.deltas=[],this.arrays=[new f(this,0,0,e)],this.maxValue=0;for(const t of e)t>this.maxValue&&(this.maxValue=t);this.nextArrayId=1,this.currentDeltaIndex=0,this.nextDecoratorId=0,this.requiresMemoryAllocation=!1,this.allArrayInfo=[{arrId:0,offset:0,length:e.length}]}pushDelta(e){this.deltas.push(e),this.currentDeltaIndex++}totalDeltas(){return this.deltas.length}deltaIndex(){return this.currentDeltaIndex}remainingStepsFwd(){return this.deltas.length-this.currentDeltaIndex}remainingStepsBack(){return this.currentDeltaIndex}seekTo(e){const t=Math.abs(e-this.currentDeltaIndex),a=e,r=this.deltas.length-e;a<=r&&a<=t&&(this.arrays=[this.arrays[0]],this.arrays[0].internalFill(this.initialValue),this.currentDeltaIndex=0),this.seekToInternal(e)}seekToInternal(e){for(;e>this.currentDeltaIndex;)this.apply();for(;e<this.currentDeltaIndex;)this.rollback()}apply(){if(this.currentDeltaIndex!==this.deltas.length)return this.deltas[this.currentDeltaIndex].apply(this),this.deltas[this.currentDeltaIndex++]}applyUntil(e,t){const a=[];for(let r=0;-1===e||r<e;r++){const e=this.apply();if(void 0===e)return a;if(a.push(e),e.complexity>=t)return a}return a}rollback(){if(0!==this.currentDeltaIndex)return this.deltas[--this.currentDeltaIndex].rollback(this),this.deltas[this.currentDeltaIndex]}rollbackUntil(e,t){const a=[];for(let r=0;-1===e||r<e;r++){const e=this.rollback();if(void 0===e)return a;if(a.push(e),e.complexity>=t)return a}return a}getArray(e){return this.arrays[e]}createArray(e,t){this.requiresMemoryAllocation=!0,this.allArrayInfo.push({arrId:this.nextArrayId,offset:void 0===t?0:t,length:void 0===e?0:e});const a=new f(this,this.nextArrayId++,void 0===t?0:t,new Array(void 0===e?0:e));return this.arrays.push(a),this.deltas.push(new p(a,e,t)),a}deleteArray(e){this.deltas.push(e.getDeleteDelta()),this.internalRemoveArray(e)}internalCreateArray(e){this.arrays.push(e)}internalRemoveArray(e){for(let t=0;t<this.arrays.length;t++)if(this.arrays[t]===e)return void this.arrays.splice(t,1)}doesRequireMemory(){return this.requiresMemoryAllocation}}var y=a(11),g=a(13);function v(e,t,a,r,n,s){const i=n/t,l=s/e.maxValue;return(e,t)=>{const n=a+Math.floor(i*e),o=Math.floor(l*t);return{x:n,y:r+s-o,height:o}}}var w=a(79);const x=[new class{constructor(){this.name="Bar"}repaintArr(e,t,a,r,n,s,i){const l=n/t.length(),o=Math.max(Math.floor(l),1),c=v(e,t.length(),a,r,n,s);i.fillStyle="#333";for(let e=0;e<t.length();e++){const{x:a,y:r,height:n}=c(e,t.internalGet(e).value);i.fillRect(a,r,o,n)}i.fillStyle="white";for(let e=0;e<t.length();e++){const{x:a,y:n,height:l}=c(e,t.internalGet(e).value);i.fillRect(a,s+r-l-o,o,o)}}repaint(e,t,a,r){t.fillStyle="black",t.fillRect(0,0,e.width,e.height);const n=a.getArray(0),s=e.width/n.length(),i=[],l=[],o={wx:0,wy:0,ww:e.width,wh:a.doesRequireMemory()?Math.floor(.8*e.height):e.height};for(const t of a.allArrayInfo){const r=0===t.arrId?o:{wx:Math.floor(t.offset*s),wy:Math.floor(e.height-.2*e.height),ww:Math.floor(t.length*s),wh:Math.floor(.2*e.height)};l[t.arrId]=r,i[t.arrId]=v(a,t.length,r.wx,r.wy,r.ww,r.wh)}this.repaintArr(a,n,o.wx,o.wy,o.ww,o.wh,t);for(let e=1;e<a.arrays.length;e++){const r=l[a.arrays[e].arrayId];this.repaintArr(a,a.arrays[e],r.wx,r.wy,r.ww,r.wh,t)}const c=Math.floor(e.height/20);function h(e,t,a){return i[e](t,a)}t.strokeStyle="#D00",t.lineWidth=1;for(const e of r.filter(e=>"compare"===e.type)){const a=e;t.beginPath();const{x:r,y:n}=h(a.array1.arrayId,a.index1,a.array1.get(a.index1).value),{x:s,y:i}=h(a.array2.arrayId,a.index2,a.array2.get(a.index2).value),l=Math.min(n,i)-c;t.moveTo(r,n),t.bezierCurveTo(r,l,s,l,s,i),t.stroke()}t.strokeStyle="#F80",t.lineWidth=1;for(const e of r.filter(e=>"copy"===e.type)){const a=e;t.beginPath();const{x:r,y:n}=h(a.srcArray.arrayId,a.srcIndex,a.srcArray.get(a.srcIndex).value),{x:s,y:i}=h(a.tgtArray.arrayId,a.tgtIndex,a.tgtArray.get(a.tgtIndex).value);t.moveTo(r-5,n-5),t.lineTo(r+5,n+5),t.moveTo(r+5,n-5),t.lineTo(r-5,n+5),t.moveTo(r,n),t.lineTo(s,i),t.stroke()}t.strokeStyle="#0f0",t.lineWidth=2;for(const e of r.filter(e=>"swap"===e.type)){const a=e;t.beginPath();const{x:r,y:n}=h(a.srcArray.arrayId,a.srcIndex,a.srcArray.get(a.srcIndex).value),{x:s,y:i}=h(a.tgtArray.arrayId,a.tgtIndex,a.tgtArray.get(a.tgtIndex).value),l=Math.min(n,i)-c;t.moveTo(r,n),t.bezierCurveTo(r,l,s,l,s,i),t.stroke()}}},new class{constructor(){this.name="Radial"}repaint(e,t,a,r){t.fillStyle="black",t.fillRect(0,0,e.width,e.height);const n=e.width/2,s=e.height/2,i=a.getArray(0),l=2*Math.PI/i.length();function o(e,t){const r=l*e,i=t/a.maxValue;return{x:Math.floor(n+Math.cos(r)*i*n),y:Math.floor(s+Math.sin(r)*i*s)}}t.fillStyle="#333",t.beginPath(),t.moveTo(n,s);const c=[];for(let e=0;e<i.length();e++){const{x:a,y:r}=o(e,i.internalGet(e).value);t.lineTo(a,r),c.push({x:a,y:r})}t.closePath(),t.fill(),t.fillStyle="white";for(let e=0;e<i.length();e++){const{x:a,y:r}=c[e];t.fillRect(a,r,1,1)}t.strokeStyle="#D00",t.lineWidth=1;for(const e of r.filter(e=>"compare"===e.type)){const a=e;t.beginPath();const{x:r,y:n}=o(a.index1,a.array1.get(a.index1).value),{x:s,y:i}=o(a.index2,a.array2.get(a.index2).value);t.moveTo(r,n),t.lineTo(s,i),t.stroke()}t.strokeStyle="#0f0",t.lineWidth=2;for(const e of r.filter(e=>"swap"===e.type)){const a=e;t.beginPath();const{x:r,y:n}=o(a.srcIndex,a.srcArray.get(a.srcIndex).value),{x:s,y:i}=o(a.tgtIndex,a.tgtArray.get(a.tgtIndex).value);t.moveTo(r,n),t.lineTo(s,i),t.stroke()}}}];let b,k;function D(e){const[t,a]=n.useState(e.state.deltaIndex()),[r,s]=Object(w.a)(x[0],t=>d(e.state,[],t)),[o,c]=n.useState(!1),[h,u]=n.useState(0);function p(){a(e.state.deltaIndex())}function d(e,t,a){void 0!==b&&void 0!==k&&void 0!==a&&a.repaint(b,k,e,t)}return n.useEffect(()=>{const t=document.getElementById("canvas");Object(g.b)(t,1024,800),b=t,k=t.getContext("2d"),d(e.state,[],r)},[]),n.useEffect(()=>{d(e.state,[],r)},[e.state]),function(e,t,a){const r=Object(n.useRef)(()=>{}),s=Object(n.useRef)(0),i=Object(n.useRef)(!1);Object(n.useEffect)(()=>{r.current=e},[e]),Object(n.useEffect)(()=>{function e(){r.current(),n()}function n(){if(a<=.25){const t=940,r=1-4*a,n=Math.floor(t*r)+60;s.current=setTimeout(e,n),i.current=!1}else s.current=requestAnimationFrame(e),i.current=!0}return t&&n(),()=>{i.current?cancelAnimationFrame(s.current):clearTimeout(s.current)}},[t,a])}(()=>{if(h<=.25){const t=e.state.applyUntil(10,l.Compare);p(),d(e.state,t,r)}else{const t=1/.75*(h-.25),a=Math.floor(75*t),n=[];for(let t=0;t<a;t++)n.push(...e.state.applyUntil(-1,l.Compare));p(),d(e.state,n,r)}0===e.state.remainingStepsFwd()&&c(!1)},o,h),n.createElement("div",{className:"flex row"},n.createElement("canvas",{id:"canvas"}),n.createElement("div",{className:"flex col"},n.createElement("div",{className:"flex row"},n.createElement("span",null,"Display:"),n.createElement(i.a,{options:x.map(e=>e.name),value:r.name,onChange:e=>s(Object(y.b)(x,t=>t.name===e.value))})),n.createElement("input",{type:"range",min:0,max:e.state.totalDeltas(),value:t,onChange:t=>{e.state.seekTo(t.target.valueAsNumber),p(),d(e.state,[],r)}}),n.createElement("span",null,"Step ",t," / ",e.state.totalDeltas()),n.createElement("div",{className:"flex row"},n.createElement("button",{onClick:()=>{e.state.seekTo(0),p(),d(e.state,[],r)}},"<<<"),n.createElement("button",{onClick:()=>{const t=e.state.rollbackUntil(-1,l.Set);p(),d(e.state,t,r)}},"<<"),n.createElement("button",{onClick:()=>{const t=[e.state.rollback()];p(),d(e.state,t,r)}},"<"),n.createElement("button",{onClick:()=>{const t=[e.state.apply()];p(),d(e.state,t,r)}},">"),n.createElement("button",{onClick:()=>{const t=e.state.applyUntil(-1,l.Set);p(),d(e.state,t,r)}},">>"),n.createElement("button",{onClick:()=>{e.state.seekTo(e.state.totalDeltas()),p(),d(e.state,[],r)}},">>>")),n.createElement("span",null,"Autoplay:"),n.createElement("div",{className:"flex row"},n.createElement("span",null,"Speed: "),n.createElement("input",{type:"range",min:0,max:1,step:.01,value:h,onChange:e=>u(e.target.valueAsNumber)}),n.createElement("button",{onClick:()=>c(!o)},o?"Pause":"Play"))))}var I=[new class{constructor(){this.name="SelectionSort"}sort(e,t){for(let e=0;e<t.length();e++){let a=t.get(e),r=e;for(let n=e+1;n<t.length();n++){const e=t.get(n);e.compare(a)<0&&(a=e,r=n)}r!==e&&t.swap(e,r)}}},new class{constructor(){this.name="CycleSort"}sort(e,t){const a=new Array(t.length());for(let e=0;e<a.length;e++)a[e]=!1;for(let e=0;e<t.length()-1;){if(a[e]){e++;continue}const r=t.get(e);let n=e;for(let a=e+1;a<t.length();a++)t.get(a).compare(r)<=0&&n++;for(;0===t.get(n).compare(r)&&n>e;)n--;n===e?e++:(t.swap(e,n),a[n]=!0)}}},new class{constructor(){this.name="HeapSort"}sort(e,t){for(let e=0;e<t.length();e++)this.upHeap(t,e);for(let e=t.length()-1;e>0;e--)t.swap(0,e),this.downHeap(t,e)}upHeap(e,t){for(;t>0;){const a=e.get(t),r=this.parentIndex(t),n=e.get(r);if(!(a.compare(n)>0))break;e.swap(t,r),t=r}}downHeap(e,t){let a=0;for(;a<t;){const r=this.childIndex(a);if(r>=t)return;let n=r;if(r+1<t&&e.get(n).compare(e.get(n+1))<=0&&n++,!(e.get(a).compare(e.get(n))<0))return;e.swap(a,n),a=n}}parentIndex(e){return Math.floor((e-1)/2)}childIndex(e){return 2*e+1}},new class{constructor(){this.name="WeakHeapSort"}sort(e,t){const a=new Array(t.length()).fill(!1);for(let e=t.length()-1;e>0;e--)this.fastUpheap(t,e,a);for(let e=t.length()-1;e>0;e--)t.swap(0,e),this.downHeap(t,a,e)}downHeap(e,t,a){this.downHeapSingle(e,1,t,a)}downHeapSingle(e,t,a,r){const n=a[t]?2*t+1:2*t;n<r&&this.downHeapSingle(e,n,a,r),e.get(0).compare(e.get(t))<0&&(a[t]=!a[t],e.swap(0,t))}fastUpheap(e,t,a){const r=this.fastDistinguishedAncestor(t);e.get(r).compare(e.get(t))<0&&(a[t]=!a[t],e.swap(r,t))}fastDistinguishedAncestor(e){if(0===e)return 0;for(;e%2==0;)e/=2;return Math.floor(e/2)}distinguishedAncestor(e,t){const a=Math.floor(e/2);return t[a]===(e%2==0)?a:this.distinguishedAncestor(a,t)}},new class{constructor(){this.name="SmoothSort",this.heapChildDist=[0,0,2],this.heapPrevDist=[1,1]}sort(e,t){const a=[];for(let e=0;e<t.length();e++)this.growHeap(t,a,e);for(let e=t.length()-1;e>=1;e--)this.shrinkHeap(t,a,e)}growHeap(e,t,a){if(t.length>=2&&t[t.length-2]===t[t.length-1]+1){const e=t[t.length-2]+1;t.pop(),t.pop(),t.push(e)}else t.length>0&&1===t[t.length-1]?t.push(0):t.push(1);this.trinkle(e,t,a,t.length-1)}shrinkHeap(e,t,a){const r=t.pop();this.hasChildren(r)&&(t.push(r-1),t.push(r-2),this.trinkle(e,t,this.leftChildIndex(a,r),t.length-2),this.trinkle(e,t,a-1,t.length-1))}trinkle(e,t,a,r){if(0!==r){let n=this.trinkleMax(e,a,t[r]);for(let s=r-1;s>=0;s--){const i=this.previousHeapIndex(a,t[r]);if(!(e.get(i).compare(n)>0))break;e.swap(i,a),a=i,r=s,n=this.trinkleMax(e,a,t[r])}}this.heapDown(e,a,t[r])}trinkleMax(e,t,a){if(this.hasChildren(a)){let r=e.get(t);const n=e.get(t-1);r=r.compare(n)>=0?r:n;const s=e.get(this.leftChildIndex(t,a));return r=r.compare(s)>=0?r:s,r}return e.get(t)}heapDown(e,t,a){if(!this.hasChildren(a))return;const r=this.leftChildIndex(t,a),n=t-1,s=a-1,i=a-2;e.get(r).compare(e.get(n))>0?this.heapDownCompare(e,t,r,s):this.heapDownCompare(e,t,n,i)}heapDownCompare(e,t,a,r){e.get(a).compare(e.get(t))>0&&(e.swap(t,a),this.heapDown(e,a,r))}hasChildren(e){return e>1}leftChildIndex(e,t){return e-this.getHeapChildDist(t)}previousHeapIndex(e,t){return e-this.getHeapPrevDist(t)}getHeapChildDist(e){for(;e>=this.heapChildDist.length;)this.heapChildDist.push(this.heapChildDist[this.heapChildDist.length-1]+this.heapChildDist[this.heapChildDist.length-2]);return this.heapChildDist[e]}getHeapPrevDist(e){for(;e>=this.heapPrevDist.length;)this.heapPrevDist.push(this.heapPrevDist[this.heapPrevDist.length-1]+this.heapPrevDist[this.heapPrevDist.length-2]+1);return this.heapPrevDist[e]}},new class{constructor(){this.name="Quicksort"}sort(e,t){this.recurse(t,0,t.length())}recurse(e,t,a){if(a-t<=1)return;const r=Math.floor(t+Math.random()*(a-t));e.swap(t,r);const n=e.get(t);let s=t+1,i=a-1;for(;s<=i;)e.get(s).compare(n)<0?s++:e.swap(s,i--);e.swap(t,i),this.recurse(e,t,i),this.recurse(e,i+1,a)}},new class{constructor(){this.name="QuickDualPivot"}sort(e,t){this.recurse(t,0,t.length())}recurse(e,t,a){if(a-t<=1)return;const r=Math.floor(t+Math.random()*(a-t));e.swap(t,r);const n=e.get(t);let s=t+1,i=t+1,l=a-1;for(;i<=l;)switch(e.get(i).compare(n)){case 0:i++;break;case-1:e.swap(s++,i++);break;case 1:e.swap(i,l--)}e.swap(t,l),this.recurse(e,t,s),this.recurse(e,i,a)}},new class{constructor(){this.name="MergeSort"}sort(e,t){this.recurse(e,t,0,t.length())}recurse(e,t,a,r){if(r-a<=1)return;const n=a+Math.ceil((r-a)/2);this.recurse(e,t,a,n),this.recurse(e,t,n,r);const s=e.createArray(r-a,a);let i=a,l=n,o=0;for(;i<n&&l<r;)t.get(i).compare(t.get(l))<=0?(s.set(o,t.get(i)),i++,o++):(s.set(o,t.get(l)),l++,o++);for(;i<n;)s.set(o,t.get(i)),i++,o++;for(;l<r;)s.set(o,t.get(l)),l++,o++;for(let e=0;e<r-a;e++)t.set(e+a,s.get(e));e.deleteArray(s)}}];var C=[new class{constructor(){this.name="Random"}generate(e,t){return Math.random()}},new class{constructor(){this.name="Reversed"}generate(e,t){return 1-e/t}},new class{constructor(){this.name="Near Sorted"}generate(e,t){let a=Math.floor(e+(Math.random()*(t/100)-t/50));return a<0&&(a=0),a>t&&(a=t),a/t}},new class{constructor(){this.name="Sinusoidal"}generate(e,t){const a=e/t;return Math.sin(2*a*Math.PI)/2+.5}}];function S(){const[e,t]=n.useState(1024),[a,r]=n.useState(1e3),[s,l]=n.useState(void 0),[o,c]=n.useState(void 0),[h,u]=n.useState(C[0]);return n.createElement("div",null,n.createElement("div",{className:"flex col align-center"},n.createElement("div",{className:"flex col align-stretch"},n.createElement("div",{className:"flex row justify-space-between"},n.createElement("span",null,"Array Length:"),n.createElement("input",{type:"number",value:e,onChange:e=>t(e.target.valueAsNumber)})),n.createElement("div",{className:"flex row justify-space-between"},n.createElement("span",null,"Array Max:"),n.createElement("input",{type:"number",value:a,onChange:e=>r(e.target.valueAsNumber)})),n.createElement("div",null,n.createElement("span",null,"Data: "),n.createElement(i.a,{options:C.map(e=>e.name),value:h.name,onChange:e=>u(Object(y.b)(C,t=>t.name===e.value))})),n.createElement("div",null,"Algorithm: ",n.createElement(i.a,{options:I.map(e=>e.name),value:void 0===s?void 0:s.name,onChange:e=>l(Object(y.b)(I,t=>t.name===e.value))})),n.createElement("button",{disabled:e<=0||a<=0||void 0===s,onClick:function(){const t=new Array(e);for(let e=0;e<t.length;e++)t[e]=Math.floor(h.generate(e,t.length)*a);const r=new m(t);s.sort(r,r.getArray(0)),r.seekTo(0),c(r)}},"Go!"))),void 0===o?n.createElement(n.Fragment,null):n.createElement(n.Fragment,null,n.createElement("hr",null),n.createElement(D,{state:o})))}}}]);
//# sourceMappingURL=10.bundle.js.map