"use strict";(self.webpackChunktrading_game=self.webpackChunktrading_game||[]).push([[290],{3130:(e,t,n)=>{function r(e,t,n){const r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.error(n),alert(`An error occurred compiling the ${t===e.VERTEX_SHADER?"vertex":t===e.FRAGMENT_SHADER?"fragment":""} shaders: `+e.getShaderInfoLog(r)),void e.deleteShader(r))}function i(e,t,n){const i=r(e,e.VERTEX_SHADER,t),o=r(e,e.FRAGMENT_SHADER,n),s=e.createProgram();if(e.attachShader(s,i),e.attachShader(s,o),e.linkProgram(s),e.getProgramParameter(s,e.LINK_STATUS))return s;alert("Unable to initialize the shader program: "+e.getProgramInfoLog(s))}function o(e,t,n,r,i,o,s,a){e.clearColor(0,0,0,1),e.clearDepth(1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);{const i=e.FLOAT,o=!1,s=0,a=0;e.bindBuffer(e.ARRAY_BUFFER,n),e.vertexAttribPointer(e.getAttribLocation(t,"aVertexPosition"),r,i,o,s,a),e.enableVertexAttribArray(e.getAttribLocation(t,"aVertexPosition"))}e.useProgram(t);for(let t=0;t<o;t++){a(e,t);let{bufferOffset:n,bufferCount:r}=s(t);e.drawArrays("triangle"===i?e.TRIANGLES:"tristrip"===i?e.TRIANGLE_STRIP:e.TRIANGLE_FAN,n,r)}}function s(e,t,n,r){e.clearColor(0,0,0,1),e.clearDepth(1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);{const r=2,i=e.FLOAT,o=!1,s=0,a=0;e.bindBuffer(e.ARRAY_BUFFER,n),e.vertexAttribPointer(e.getAttribLocation(t,"aVertexPosition"),r,i,o,s,a),e.enableVertexAttribArray(e.getAttribLocation(t,"aVertexPosition"))}e.useProgram(t),r(e),e.drawArrays(e.TRIANGLE_STRIP,0,4)}function a(e,t,n,r,i){const o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o);const s=null!=t?t:-1,a=null!=r?r:1,c=null!=n?n:-1,l=null!=i?i:1,h=[l,a,c,a,l,s,c,s];return e.bufferData(e.ARRAY_BUFFER,new Float32Array(h),e.STATIC_DRAW),o}function c(e,t){const n=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array(t),e.STATIC_DRAW),n}n.d(t,{nr:()=>i,f:()=>o,os:()=>s,nW:()=>a,jK:()=>c,B_:()=>l,FC:()=>h});const l="attribute vec4 aVertexPosition;\nvarying vec3 vPos;\nvoid main() {\n  vPos = vec3(aVertexPosition.xy, 0.0);\n  gl_Position = aVertexPosition;\n}",h="#version 300 es\nin vec4 aVertexPosition;\nout vec3 vPos;\nvoid main() {\n  vPos = vec3(aVertexPosition.xy, 0.0);\n  gl_Position = aVertexPosition;\n}"},3483:(e,t,n)=>{n.d(t,{Z:()=>r});const r=new class{constructor(){this.Name="Fire",this.shaderFunction="\nvec3 floatToColor(float perc) {\n    if(perc <= 0.5) {\n        return vec3(perc * 2.0, perc, 0.0);\n    }\n    perc = (perc - 0.5) * 2.0;\n    return vec3(1.0, 0.5 + perc / 2.0, perc);\n}\n    "}}},4811:(e,t,n)=>{n.d(t,{Z:()=>r});const r=new class{constructor(){this.Name="Grayscale",this.shaderFunction="\nvec3 floatToColor(float perc) {\n    return vec3(perc, perc, perc);\n}\n    "}}},8006:(e,t,n)=>{n.d(t,{Z:()=>r});const r=new class{constructor(){this.Name="Hue",this.shaderFunction="\n\nfloat fmod(float a, float b) {\n    return a - (b * floor(a/b));\n}\n\nfloat hsvComponentToRgb(vec3 hsv, float n) {\n    float k = fmod((n + hsv.x * 6.0), 6.0);\n    return hsv.z - hsv.z * hsv.y * max(min(min(k, 4.0-k),1.0), 0.0);\n}\n\nvec3 floatToColor(float perc) {\n    if(perc == 1.0) {\n        return vec3(0, 0, 0);\n    }\n    vec3 hsv = vec3(perc, 1.0, 1.0);\n    return vec3(\n        hsvComponentToRgb(hsv, 5.0),\n        hsvComponentToRgb(hsv, 3.0),\n        hsvComponentToRgb(hsv, 1.0)\n    );\n}\n    "}}},3788:(e,t,n)=>{n.d(t,{Z:()=>r});const r=new class{constructor(){this.Name="Paper",this.shaderFunction="\nvec3 floatToColor(float perc) {\n    if(perc == 1.0) {\n        return vec3(0, 0, 0);\n    }\n    return vec3(0.8, 0.8, 0.8) - (perc * 0.8);\n}\n    "}}},290:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(3804),i=n(3483),o=n(4811),s=n(8006);const a=[n(3788).Z,s.Z,o.Z,i.Z];function c(e,t){return e.map(((e,n)=>e+t[n]))}function l(e,t){return[e[0]*t[0]-e[1]*t[1]-e[2]*t[2]-e[3]*t[3],e[0]*t[1]+e[1]*t[0]-e[2]*t[3]+e[3]*t[2],e[0]*t[2]+e[1]*t[3]+e[2]*t[0]-e[3]*t[1],e[0]*t[3]-e[1]*t[2]+e[2]*t[1]+e[3]*t[0]]}const h=new class{constructor(){this.Name="Burning Ship",this.ShaderCode="\n        vec4 zabs = abs(z);\n        return c_mult(zabs, zabs) + c;\n    ",this.MaxAmplitude=16}Iterate(e,t){let n=e.map(Math.abs);return c(l(n,n),t)}},u=[new class{constructor(){this.Name="Mandelbrot",this.ShaderCode="return c_mult(z, z) + c;",this.MaxAmplitude=2}Iterate(e,t){return c(l(e,e),t)}},h];var d=n(3130);class f{constructor(e){this.canvas=e,this.gl=e.getContext("webgl2"),this.sliceWindow={x:-1,y:-1,z:0,w:2}}init(e,t){const n=this.gl,r=v.replace("[[[FRACTAL_CODE]]]",e.ShaderCode).replace("[[[COLOR_CODE]]]",t.shaderFunction).replace("[[[MAX_DIST]]]",e.MaxAmplitude.toFixed(2));this.program=d.nr(n,d.FC,r),this.buffer=d.nW(n),n.bindBuffer(n.ARRAY_BUFFER,this.buffer);const i=n.getAttribLocation(this.program,"aVertexPosition");n.vertexAttribPointer(i,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(i),n.useProgram(this.program),this.uniforms={u_window_pos:n.getUniformLocation(this.program,"u_window_pos"),u_window_size:n.getUniformLocation(this.program,"u_window_size"),u_x_axis:n.getUniformLocation(this.program,"u_x_axis"),u_y_axis:n.getUniformLocation(this.program,"u_y_axis"),u_z_slice:n.getUniformLocation(this.program,"u_z_slice")}}scroll(e,t,n){this.sliceWindow.x+=e*this.sliceWindow.w,this.sliceWindow.y+=t*this.sliceWindow.w*this.canvas.clientHeight/this.canvas.clientWidth,this.sliceWindow.z+=n*this.sliceWindow.w*this.canvas.clientHeight/this.canvas.clientWidth}zoom(e,t,n){let r=this.sliceWindow.w*e,i=this.sliceWindow.w*(this.canvas.clientHeight/this.canvas.clientWidth)*e,o=this.sliceWindow.w-r,s=this.sliceWindow.w*this.canvas.clientHeight/this.canvas.clientWidth-i;this.sliceWindow={x:this.sliceWindow.x+o*t,y:this.sliceWindow.y+s*n,z:this.sliceWindow.z,w:r}}destroy(){const e=this.gl;e.deleteProgram(this.program),e.deleteBuffer(this.buffer)}render(){let e=[this.canvas.clientWidth,this.canvas.clientHeight];this.gl.viewport(0,0,e[0],e[1]),this.canvas.width=e[0],this.canvas.height=e[1],this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.uniform2f(this.uniforms.u_window_pos,this.sliceWindow.x,this.sliceWindow.y),this.gl.uniform2f(this.uniforms.u_window_size,this.sliceWindow.w,this.sliceWindow.w*e[1]/e[0]),this.gl.uniform3f(this.uniforms.u_x_axis,1,0,0),this.gl.uniform3f(this.uniforms.u_y_axis,0,1,0),this.gl.uniform3f(this.uniforms.u_z_slice,0,0,this.sliceWindow.z),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4)}}const v="#version 300 es\n\nprecision highp float;\nuniform vec2 u_window_pos;\nuniform vec2 u_window_size;\n\nuniform vec3 u_x_axis;\nuniform vec3 u_y_axis;\nuniform vec3 u_z_slice;\n\nout vec4 outColor;\n\nconst float MAX_ABSSQ = [[[MAX_DIST]]];\n\nin vec3 vPos;\n\nconst int MAX_ITER = 256;\n\nvec4 c_mult(vec4 a, vec4 b) {\n    return vec4(\n        a.x*b.x - a.y*b.y - a.z*b.z - a.w*b.w,\n        a.x*b.y + a.y*b.x - a.z*b.w + a.w*b.z,\n        a.x*b.z + a.y*b.w + a.z*b.x - a.w*b.y,\n        a.x*b.w - a.y*b.z + a.z*b.y + a.w*b.x\n    );\n}\n\nfloat cplx_abssq(vec4 v) {\n    return dot(v, v);\n}\n\nvec4 step_fractal(vec4 z, vec4 c) {\n[[[FRACTAL_CODE]]]\n}\n\nfloat calcIterations(vec4 coords) {\n    vec4 roll = vec4(0,0,0,0);\n    for(int iter = 0; iter < MAX_ITER; iter++) {\n        roll = step_fractal(roll, coords);\n        if (cplx_abssq(roll) >= MAX_ABSSQ) {\n            return float(iter)/float(MAX_ITER);\n        }\n    }\n    return 1.0;\n}\n\n[[[COLOR_CODE]]]\n\nvoid main() {\n    vec2 adjPos = vPos.xy;\n    adjPos += 1.0;\n    adjPos /= 2.0;\n    // adjpos is now 0, 1\n    // Convert that to world-space\n    adjPos = u_window_pos + adjPos * u_window_size;\n\n    vec3 c3 = adjPos.x * u_x_axis + adjPos.y * u_y_axis + u_z_slice;\n\n    vec4 c = vec4(\n        c3.x,\n        -c3.y,\n        c3.z,\n        0.0\n    );\n\n    float mb_perc = calcIterations(c);\n    outColor = vec4(floatToColor(mb_perc), 1.0);\n}\n";class _{constructor(e,t){this.canvas2d=e,this.canvas3d=t,this.sliceRenderer=new f(e)}start(e,t){this.sliceRenderer.init(e,t),this.sliceRenderer.render()}scroll(e,t,n){this.sliceRenderer.scroll(e,t,n),this.sliceRenderer.render()}zoom(e,t,n){this.sliceRenderer.zoom(e,t,n),this.sliceRenderer.render()}destroy(){this.sliceRenderer.destroy()}}function m(){const[e,t]=r.useState(u[0]),[n,i]=r.useState(a[0]),o=r.useRef(null),s=r.useRef(null),c=r.useRef(null);let l,h;function d(e){0==(1&e.buttons)&&(l=void 0),0==(4&e.buttons)&&(h=void 0),e.preventDefault(),e.stopPropagation()}return r.useEffect((()=>{if(null===o.current||null===s.current)return;const t=new _(o.current,s.current);return c.current=t,t.start(e,n),()=>{c.current=void 0,t.destroy()}}),[o.current,s.current,e,n]),r.createElement("div",{className:"flex col align-stretch full_body"},r.createElement("div",{className:"flex row"},r.createElement("select",{onChange:e=>t(u[e.target.selectedIndex])},u.map((t=>r.createElement("option",{selected:t===e,key:t.Name},t.Name)))),r.createElement("select",{onChange:e=>i(a[e.target.selectedIndex])},a.map((e=>r.createElement("option",{selected:e===n,key:e.Name},e.Name))))),r.createElement("div",{className:"flex row grow align-stretch"},r.createElement("div",{style:{width:"50%",height:"100%"}},r.createElement("canvas",{ref:o,style:{width:"100%",height:"99%"},onMouseDown:function(e){e.preventDefault(),e.stopPropagation(),1&e.buttons&&(l=[e.clientX,e.clientY]),4&e.buttons&&(h=e.clientY)},onMouseUp:d,onMouseMove:function(e){e.preventDefault(),e.stopPropagation();let t=0,n=0,r=0;void 0!==l&&(t=e.clientX-l[0],n=e.clientY-l[1],l=[e.clientX,e.clientY]),void 0!==h&&(r=e.clientY-h,h=e.clientY),c.current.scroll(-t/e.target.clientWidth,n/e.target.clientHeight,r/e.target.clientHeight)},onWheel:function(e){e.preventDefault(),e.stopPropagation();let t=e.clientX/e.target.clientWidth,n=e.clientY/e.target.clientHeight;c.current.zoom(Math.pow(1.1,e.deltaY/Math.abs(e.deltaY)),t,1-n)},onMouseLeave:d})),r.createElement("div",{style:{width:"50%",height:"100%"}},r.createElement("canvas",{ref:s,style:{width:"100%",height:"100%"}}))))}}}]);
//# sourceMappingURL=290.bundle.js.map