(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{74:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{constructor(t,e){this.x=t,this.y=e}static zero(){return new r(0,0)}static fromAngle(t,e){return new r(Math.cos(t)*(null!=e?e:1),Math.sin(t)*(null!=e?e:1))}LengthSq(){return r.Dot(this,this)}Length(){return Math.sqrt(this.LengthSq())}Clone(){return new r(this.x,this.y)}Negate(){return new r(-this.x,-this.y)}NegateInPlace(){return this.x=-this.x,this.y=-this.y,this}static Dot(t,e){return t.x*e.x+t.y*e.y}DotWith(t){return r.Dot(this,t)}normalize(){let t=this.Length();return r.Multiply(this,1/t)}Direction(){return Math.atan2(this.y,this.x)}AddWith(t,e){const{x:n,y:r}=i(t,e);return this.x+=n,this.y+=r,this}MultWith(t,e){const{x:n,y:r}=function(t,e){if(void 0===e)return void 0!==t.x?{x:t.x,y:t.y}:{x:t,y:t};return{x:t,y:e}}(t,e);return this.x*=n,this.y*=r,this}SubtractWith(t,e){const{x:n,y:r}=i(t,e);return this.x-=n,this.y-=r,this}DivideWith(t,e){const{x:n,y:r}=i(t,e);return this.x/=n,this.y/=r,this}Equals(t){return this.x===t.x&&this.y===t.y}static add(t,e,n){const{x:a,y:o}=i(e,n);return new r(t.x+a,t.y+o)}static subtract(t,e,n){const{x:a,y:o}=i(e,n);return new r(t.x-a,t.y-o)}static Multiply(t,e,n){return void 0!==n?new r(t.x*e,t.y*n):void 0!==e.x?new r(t.x*e.x,t.y*e.y):new r(t.x*e,t.y*e)}static interpolate(t,e,n){return new r(t.x+(e.x-t.x)*n,t.y+(e.y-t.y)*n)}static componentMin(t,e){return t.x<=e.x&&t.y<=e.y?t:e.x<=t.x&&e.y<=t.y?e:new r(Math.min(t.x,e.x),Math.min(t.y,e.y))}static componentMax(t,e){return t.x>=e.x&&t.y>=e.y?t:e.x>=t.x&&e.y>=t.y?e:new r(Math.max(t.x,e.x),Math.max(t.y,e.y))}static Bezier(t,e){return 1===t.length?t[0]:2===t.length?r.add(r.Multiply(t[1],e),r.Multiply(t[0],1-e)):r.add(r.Multiply(r.Bezier(t.slice(1),e),e),r.Multiply(r.Bezier(t.slice(0,t.length-1),e),1-e))}rotate(t){const e=Math.atan2(this.y,this.x),n=this.Length();return r.fromAngle(e+t,n)}}function i(t,e){return void 0===e?{x:t.x,y:t.y}:{x:t,y:e}}},78:function(t,e,n){"use strict";function r(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS)?r:(alert(`An error occurred compiling the ${e===t.VERTEX_SHADER?"vertex":e===t.FRAGMENT_SHADER?"fragment":""} shaders: `+t.getShaderInfoLog(r)),void t.deleteShader(r))}function i(t,e,n){const i=r(t,t.VERTEX_SHADER,e),a=r(t,t.FRAGMENT_SHADER,n),o=t.createProgram();if(t.attachShader(o,i),t.attachShader(o,a),t.linkProgram(o),t.getProgramParameter(o,t.LINK_STATUS))return o;alert("Unable to initialize the shader program: "+t.getProgramInfoLog(o))}function a(t,e,n,r,i,a,o,s){t.clearColor(0,0,0,1),t.clearDepth(1),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT);{const i=t.FLOAT,a=!1,o=0,s=0;t.bindBuffer(t.ARRAY_BUFFER,n),t.vertexAttribPointer(t.getAttribLocation(e,"aVertexPosition"),r,i,a,o,s),t.enableVertexAttribArray(t.getAttribLocation(e,"aVertexPosition"))}t.useProgram(e);for(let e=0;e<a;e++){s(t,e);let{bufferOffset:n,bufferCount:r}=o(e);t.drawArrays("triangle"===i?t.TRIANGLES:"tristrip"===i?t.TRIANGLE_STRIP:t.TRIANGLE_FAN,n,r)}}function o(t,e,n,r){t.clearColor(0,0,0,1),t.clearDepth(1),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT);{const r=2,i=t.FLOAT,a=!1,o=0,s=0;t.bindBuffer(t.ARRAY_BUFFER,n),t.vertexAttribPointer(t.getAttribLocation(e,"aVertexPosition"),r,i,a,o,s),t.enableVertexAttribArray(t.getAttribLocation(e,"aVertexPosition"))}t.useProgram(e),r(t),t.drawArrays(t.TRIANGLE_STRIP,0,4)}function s(t,e,n,r,i){const a=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,a);const o=null!=e?e:-1,s=null!=r?r:1,c=null!=n?n:-1,l=null!=i?i:1,h=[l,s,c,s,l,o,c,o];return t.bufferData(t.ARRAY_BUFFER,new Float32Array(h),t.STATIC_DRAW),a}function c(t,e){const n=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,n),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW),n}n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return l}));const l="attribute vec4 aVertexPosition;\nvarying vec3 vPos;\nvoid main() {\n  vPos = vec3(aVertexPosition.xy, 0.0);\n  gl_Position = aVertexPosition;\n}"},95:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return d}));var r=n(0),i=n(15),a=n(78),o=n(13),s=n(74);class c{constructor(t,e,n){this.canvas=t,this.fragment_code=e,this.onMiddleClick=n,Object(o.b)(t,1200,600),this.cursor_anchor=null,this.mm_down=!1,this.gl=t.getContext("webgl"),this.touch_anchors={},this.canvasRange=new i.d(new i.c(0,1200),new i.c(0,600)),this.windowRange=new i.d(new i.c(-1,1),new i.c(-1,t.height/t.width)),this.init()}init(){this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.initProgram()}initProgram(){this.program=a.e(this.gl,a.a,this.fragment_code),this.buffer=a.c(this.gl)}run(){this.renderFrame(),this.canvas.addEventListener("mousedown",t=>{if(0===t.button)this.cursor_anchor=new s.a(t.offsetX,t.offsetY);else if(1===t.button){this.mm_down=!0;let e=this.canvasRange.GetPercentage(t.offsetX,t.offsetY);e=this.windowRange.GetValue(e.x,1-e.y),void 0!==this.onMiddleClick&&this.onMiddleClick(new s.a(e.x,e.y))}t.preventDefault()}),this.canvas.addEventListener("mouseup",t=>{0===t.button?this.cursor_anchor=null:1===t.button&&(this.mm_down=!1),t.preventDefault()}),this.canvas.addEventListener("mousemove",t=>{if(null!=this.cursor_anchor){const e=t.offsetX-this.cursor_anchor.x,n=t.offsetY-this.cursor_anchor.y;this.panCameraByScreenDelta(new s.a(e,n)),this.cursor_anchor=new s.a(t.offsetX,t.offsetY),this.renderFrame(),t.preventDefault()}if(this.mm_down&&void 0!==this.onMiddleClick){let e=this.canvasRange.GetPercentage(t.offsetX,t.offsetY);e=this.windowRange.GetValue(e.x,1-e.y),this.onMiddleClick(new s.a(e.x,e.y))}}),this.canvas.addEventListener("wheel",t=>{const e=t.deltaY/3,n=Math.pow(1.1,e),r=this.canvasRange.GetPercentage(t.offsetX,t.offsetY);this.windowRange.AspectScale(n,r.x,1-r.y),this.renderFrame(),t.preventDefault()}),this.canvas.addEventListener("touchstart",t=>{if(!(t.targetTouches.length>=3||0===t.targetTouches.length)){for(let e=0;e<t.targetTouches.length;e++){const n=t.targetTouches.item(e);this.touch_anchors[n.identifier]=l(n)}t.preventDefault()}}),this.canvas.addEventListener("touchmove",t=>{if(t.touches.length>=3||0===t.touches.length)return;const e=[];for(let n=0;n<t.targetTouches.length;n++){const r=t.targetTouches.item(n),i=l(r),a=this.touch_anchors[r.identifier];if(void 0===a)return;e.push([a,i]),this.touch_anchors[r.identifier]=i}if(1===e.length)this.panCameraByScreenDelta(s.a.subtract(e[0][1],e[0][0]));else if(2===e.length){const t=s.a.Multiply(s.a.add(e[0][0],e[1][0]),.5,.5),n=s.a.Multiply(s.a.add(e[0][1],e[1][1]),.5,.5),r=this.panCameraByScreenDelta(n.SubtractWith(t)),i=s.a.subtract(e[0][0],e[1][0]).Length()/s.a.subtract(e[0][1],e[1][1]).Length();this.windowRange.AspectScale(i,r.x,1-r.y)}this.renderFrame(),t.preventDefault()}),this.canvas.addEventListener("touchend",t=>{this.touch_anchors={},t.preventDefault()}),this.canvas.addEventListener("touchcancel",t=>{this.touch_anchors={},t.preventDefault()})}panCameraByScreenDelta(t){const e=this.canvasRange.GetPercentage(t.x,t.y);return this.windowRange.ShiftByPercentage(-e.x,e.y),e}renderFrame(){a.b(this.gl,this.program,this.buffer,t=>{t.uniform2fv(t.getUniformLocation(this.program,"window_pos"),[this.windowRange.xRange.min,this.windowRange.yRange.min]),t.uniform2fv(t.getUniformLocation(this.program,"window_size"),[this.windowRange.xRange.Length(),this.windowRange.yRange.Length()])})}cleanup(){}}function l(t){const e=t.target.getBoundingClientRect();return new s.a(t.pageX-e.left,t.pageY-e.top)}class h extends c{constructor(t,e){super(t,e),this.setJuliaPoint(new i.b(0,0))}setJuliaPoint(t){this.julia_point=new s.a(t.real,t.imaginary),this.julia_escape=(Math.sqrt(4*t.abs()+1)+1)/2,this.renderFrame()}renderFrame(){a.b(this.gl,this.program,this.buffer,t=>{t.uniform2fv(t.getUniformLocation(this.program,"window_pos"),[this.windowRange.xRange.min,this.windowRange.yRange.min]),t.uniform2fv(t.getUniformLocation(this.program,"window_size"),[this.windowRange.xRange.Length(),this.windowRange.yRange.Length()]),t.uniform2fv(t.getUniformLocation(this.program,"julia_coord"),[this.julia_point.x,this.julia_point.y]),t.uniform1fv(t.getUniformLocation(this.program,"julia_escape"),[this.julia_escape])})}}class u{constructor(t,e){this.canvas=t,this.juliaCanvas=e,this.mandelbrot=new c(t,"\nprecision highp float;\nvarying vec3 vPos;\nuniform vec2 window_pos;\nuniform vec2 window_size;\n\nconst int MAX_ITER = 256;\nconst float MAX_ABSSQ = 2.0;\n\nvec2 cplx_mult(vec2 a, vec2 b) {\n    return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);\n}\n\nvec2 step_mandelbrot(vec2 v, vec2 c) {\n    return cplx_mult(v, v) + c;\n}\n\nfloat cplx_abssq(vec2 v) {\n    return dot(v, v);\n}\n\nfloat iterate_mandelbrot(vec2 coords) {\n    vec2 roll = coords;\n    for(int iter = 0; iter < MAX_ITER; iter++) {\n        roll = step_mandelbrot(roll, coords);\n        if (cplx_abssq(roll) >= MAX_ABSSQ) {\n            return float(iter)/float(MAX_ITER);\n        }\n    }\n    return 1.0;\n}\n\nvec3 floatToColor(float perc) {\n    if(perc <= 0.5) {\n        return vec3(perc * 2.0, perc, 0.0);\n    }\n    perc = (perc - 0.5) * 2.0;\n    return vec3(1.0, 0.5 + perc / 2.0, perc);\n}\n\nvoid main() {\n    vec2 adjpos = vPos.xy;\n    adjpos += 1.0;\n    adjpos /= 2.0;\n    // adjpos is now 0, 1\n    // Convert that to world-space\n    adjpos = window_pos + adjpos * window_size;\n\n    float mb_perc = iterate_mandelbrot(adjpos);\n    gl_FragColor = vec4(floatToColor(mb_perc), 1.0);\n}",t=>{this.julia.setJuliaPoint(new i.b(t.x,t.y))}),this.julia=new h(e,"\nprecision highp float;\nvarying vec3 vPos;\nuniform vec2 julia_coord;\nuniform float julia_escape;\nuniform vec2 window_pos;\nuniform vec2 window_size;\n\nconst int MAX_ITER = 256;\n\nvec2 cplx_mult(vec2 a, vec2 b) {\n    return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);\n}\n\nvec2 step_julia(vec2 v) {\n    return cplx_mult(v, v) + julia_coord;\n}\n\nfloat cplx_abssq(vec2 v) {\n    return dot(v, v);\n}\n\nfloat iterate_julia(vec2 coords) {\n    vec2 roll = coords;\n    for(int iter = 0; iter < MAX_ITER; iter++) {\n        roll = step_julia(roll);\n        if (cplx_abssq(roll) >= julia_escape) {\n            return float(iter)/float(MAX_ITER);\n        }\n    }\n    return 1.0;\n}\n\nvec3 floatToColor(float perc) {\n    if(perc <= 0.5) {\n        return vec3(perc * 2.0, perc, 0.0);\n    }\n    perc = (perc - 0.5) * 2.0;\n    return vec3(1.0, 0.5 + perc / 2.0, perc);\n}\n\nvoid main() {\n    vec2 adjpos = vPos.xy;\n    adjpos += 1.0;\n    adjpos /= 2.0;\n    // adjpos is now 0, 1\n    // Convert that to world-space\n    adjpos = window_pos + adjpos * window_size;\n\n    float mb_perc = iterate_julia(adjpos);\n    gl_FragColor = vec4(floatToColor(mb_perc), 1.0);\n}"),this.mandelbrot.run(),this.julia.run()}cleanup(){this.mandelbrot.cleanup(),this.julia.cleanup()}}function d(){const t=r.useRef(),e=r.useRef();return r.useEffect(()=>{const n=new u(t.current,e.current);return()=>n.cleanup()},[t]),r.createElement("div",{className:"conway conway_body full_body"},r.createElement("canvas",{id:"canvas",ref:t}),r.createElement("canvas",{id:"jcanvas",ref:e}))}}}]);
//# sourceMappingURL=17.bundle.js.map