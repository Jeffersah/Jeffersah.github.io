"use strict";(self.webpackChunktrading_game=self.webpackChunktrading_game||[]).push([[754],{3130:(t,e,i)=>{function r(t,e,i){const r=t.createShader(e);return t.shaderSource(r,i),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS)?r:(console.error(i),alert(`An error occurred compiling the ${e===t.VERTEX_SHADER?"vertex":e===t.FRAGMENT_SHADER?"fragment":""} shaders: `+t.getShaderInfoLog(r)),void t.deleteShader(r))}function n(t,e,i){const n=r(t,t.VERTEX_SHADER,e),s=r(t,t.FRAGMENT_SHADER,i),o=t.createProgram();if(t.attachShader(o,n),t.attachShader(o,s),t.linkProgram(o),t.getProgramParameter(o,t.LINK_STATUS))return o;alert("Unable to initialize the shader program: "+t.getProgramInfoLog(o))}function s(t,e,i,r,n,s,o,a){t.clearColor(0,0,0,1),t.clearDepth(1),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT);{const n=t.FLOAT,s=!1,o=0,a=0;t.bindBuffer(t.ARRAY_BUFFER,i),t.vertexAttribPointer(t.getAttribLocation(e,"aVertexPosition"),r,n,s,o,a),t.enableVertexAttribArray(t.getAttribLocation(e,"aVertexPosition"))}t.useProgram(e);for(let e=0;e<s;e++){a(t,e);let{bufferOffset:i,bufferCount:r}=o(e);t.drawArrays("triangle"===n?t.TRIANGLES:"tristrip"===n?t.TRIANGLE_STRIP:t.TRIANGLE_FAN,i,r)}}function o(t,e,i,r){t.clearColor(0,0,0,1),t.clearDepth(1),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT);{const r=2,n=t.FLOAT,s=!1,o=0,a=0;t.bindBuffer(t.ARRAY_BUFFER,i),t.vertexAttribPointer(t.getAttribLocation(e,"aVertexPosition"),r,n,s,o,a),t.enableVertexAttribArray(t.getAttribLocation(e,"aVertexPosition"))}t.useProgram(e),r(t),t.drawArrays(t.TRIANGLE_STRIP,0,4)}function a(t,e,i,r,n){const s=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,s);const o=null!=e?e:-1,a=null!=r?r:1,h=null!=i?i:-1,c=null!=n?n:1,l=[c,a,h,a,c,o,h,o];return t.bufferData(t.ARRAY_BUFFER,new Float32Array(l),t.STATIC_DRAW),s}function h(t,e){const i=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,i),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW),i}i.d(e,{nr:()=>n,f:()=>s,os:()=>o,nW:()=>a,jK:()=>h,B_:()=>c,FC:()=>l});const c="attribute vec4 aVertexPosition;\nvarying vec3 vPos;\nvoid main() {\n  vPos = vec3(aVertexPosition.xy, 0.0);\n  gl_Position = aVertexPosition;\n}",l="#version 300 es\nin vec4 aVertexPosition;\nout vec3 vPos;\nvoid main() {\n  vPos = vec3(aVertexPosition.xy, 0.0);\n  gl_Position = aVertexPosition;\n}"},7774:(t,e,i)=>{i.d(e,{Z:()=>n});var r=i(2294);class n{constructor(t=!0){this.components=t?[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]]}transform(t){let e=this.multRow(this.components[0],t),i=this.multRow(this.components[1],t),n=this.multRow(this.components[2],t),s=this.multRow(this.components[3],t);return new r.Z(e/s,i/s,n/s)}mult(t){const e=new n;for(let i=0;i<4;i++)for(let r=0;r<4;r++){e.components[i][r]=0;for(let n=0;n<4;n++)e.components[i][r]+=this.components[i][n]*t.components[n][r]}return e}multRow(t,e){return t[0]*e.x+t[1]*e.y+t[2]*e.z+t[3]}colMajor(){let t=new Array(16),e=0;for(let i=0;i<4;i++)for(let r=0;r<4;r++)t[e++]=this.components[i][r];return t}rowMajor(){let t=new Array(16),e=0;for(let i=0;i<4;i++)for(let r=0;r<4;r++)t[e++]=this.components[r][i];return t}static translate(t){let e=new n;return e.components[0][3]=t.x,e.components[1][3]=t.y,e.components[2][3]=t.z,e}}},2294:(t,e,i)=>{i.d(e,{Z:()=>r});class r{constructor(t,e,i){this.x=t,this.y=e,this.z=i}static zero(){return new r(0,0,0)}lengthSq(){return this.dot(this)}length(){return Math.sqrt(this.lengthSq())}clone(){return new r(this.x,this.y,this.z)}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}normalize(){let t=this.length();return this.div(t)}mult(t,e,i){let{x:s,y:o,z:a}=n(t,e,i,!0);return new r(s*this.x,o*this.y,a*this.z)}div(t,e,i){let{x:s,y:o,z:a}=n(t,e,i,!0);return new r(this.x/s,this.y/o,this.z/a)}add(t,e,i){let{x:s,y:o,z:a}=n(t,e,i);return new r(this.x+s,this.y+o,this.z+a)}sub(t,e,i){let{x:s,y:o,z:a}=n(t,e,i);return new r(this.x-s,this.y-o,this.z-a)}}function n(t,e,i,r=!1){return void 0===e?r&&void 0===t.x?{x:t,y:t,z:t}:t:{x:t,y:e,z:i}}},7550:(t,e,i)=>{i.d(e,{Z:()=>s});var r=i(2751),n=i(7774);class s{constructor(t,e,i,r){this.real=t,this.i=e,this.j=i,this.k=r}inverse(){const t=s.Dot(this,this);return new s(this.real/t,-this.i/t,-this.j/t,-this.k/t)}static Dot(t,e){return t.real*e.real+t.i*e.i+t.j*e.j+t.k*e.k}static axisRotation(t,e){const i=Math.cos(e/2),r=Math.sin(e/2),n=t.length();return new s(i,r*t.x/n,r*t.y/n,r*t.z/n)}static multiply(t,e){return new s(t.real*e.real-t.i*e.i-t.j*e.j-t.k*e.k,t.real*e.i+t.i*e.real+t.j*e.k-t.k*e.j,t.real*e.j-t.i*e.k+t.j*e.real+t.k*e.i,t.real*e.k+t.i*e.j-t.j*e.i+t.k*e.real)}applyTransform(t){if(void 0!==t.real)return s.multiply(this,s.multiply(t,this.inverse()));{const e=new s(0,t.x,t.y,t.z),i=s.multiply(this,s.multiply(e,this.inverse()));return new r.Z(i.i,i.j,i.k)}}toMatrix(){const t=new n.Z;return t.components[0][0]=1-2*this.j*this.j-2*this.k*this.k,t.components[0][1]=2*this.i*this.j-2*this.k*this.real,t.components[0][2]=2*this.i*this.k+2*this.j*this.real,t.components[1][0]=2*this.i*this.j+2*this.k*this.real,t.components[1][1]=1-2*this.i*this.i-2*this.k*this.k,t.components[1][2]=2*this.j*this.k-2*this.i*this.real,t.components[2][0]=2*this.i*this.k-2*this.j*this.real,t.components[2][1]=2*this.j*this.k+2*this.i*this.real,t.components[2][2]=1-2*this.i*this.i-2*this.j*this.j,t}}},2751:(t,e,i)=>{i.d(e,{Z:()=>r});class r{constructor(t,e,i){this.x=t,this.y=e,this.z=i}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}length(){return Math.sqrt(this.lengthSq())}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}normalize(){return this.multiply(1/this.lengthSq())}negate(){return new r(-this.x,-this.y,-this.z)}multiply(t,e,i){n(t)||(e=null!=e?e:t,i=null!=i?i:t);var[s,o,a]=r.getxyz(t,e,i);return new r(this.x*s,this.y*o,this.z*a)}add(t,e,i){var[n,s,o]=r.getxyz(t,e,i);return new r(this.x+n,this.y+s,this.z+o)}subtract(t,e,i){var[n,s,o]=r.getxyz(t,e,i);return new r(this.x-n,this.y-s,this.z-o)}static getxyz(t,e,i){return n(t)?[t.x,t.y,t.z]:[t,e,i]}}function n(t){return void 0!==t.x}},9934:(t,e,i)=>{i.d(e,{Z:()=>r});class r{static Int(t,e){const i=Math.random();return void 0===t&&void 0===e?Math.floor(i*Number.MAX_SAFE_INTEGER):void 0===e?Math.floor(i*t):t+Math.floor(i*(e-t))}static Float(t,e){const i=Math.random();return void 0===t&&void 0===e?i:void 0===e?i*t:t+i*(e-t)}}},8754:(t,e,i)=>{i.r(e),i.d(e,{default:()=>d});var r=i(3804),n=i(9934),s=i(7774),o=i(2294),a=i(7550);class h{constructor(t,e){this.position=null!=t?t:o.Z.zero(),this.facing=null!=e?e:new a.Z(1,0,0,0)}getViewMatrix(){let t=s.Z.translate(this.position.mult(-1));return this.facing.toMatrix().mult(t)}}var c=i(3130),l=i(2751),u=i(5901);window.Q=a.Z;const m=[-1,1,1,1,1,1,-1,-1,1,1,-1,1,1,-1,-1,1,1,1,1,1,-1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,-1,1,-1,1,1,-1];class f{constructor(t){this.canvas=t,(0,u.f5)(t,1024,800),this.ctx=t.getContext("webgl"),this.program=c.nr(this.ctx,"\nattribute vec4 aVertexPosition;\nuniform mat4 project;\nuniform mat4 move;\nvarying vec3 vPos;\nvarying vec3 ptPos;\n\nvoid main() {\n  vPos = aVertexPosition.xyz;\n  vec4 transformed = project * move * aVertexPosition;\n  ptPos = transformed.xyz;\n  gl_Position = vec4(transformed.xyz, transformed.z + 1.0);\n}","\nprecision mediump float;\nvarying vec3 vPos;\nvarying vec3 ptPos;\nvoid main() {\n    vec3 adjpos = (vPos.xyz + 1.0) / 2.0;\n\n    vec3 adjPt = (ptPos + 1.0)/2.0;\n\n    float mxX = max(adjPt.x, 1.0-adjPt.x);\n\n    float distAdj = 1.0 - (ptPos.z / 6.0);\n\n    gl_FragColor = vec4(adjPt.xy * distAdj, distAdj, 1.0);\n}\n"),this.ctx.enable(this.ctx.CULL_FACE);const e=m;this.posBuffer=c.jK(this.ctx,e),this.bufferCount=e.length,this.camera=new h(new o.Z(0,0,-3)),this.renderPoints=[];for(let t=0;t<1e3;t++)this.renderPoints.push({pt:new o.Z(n.Z.Float(-2,2),n.Z.Float(-2,2),n.Z.Float(-4,4)),sc:n.Z.Float(.01,.3)});this.tickloop(0)}tickloop(t){this.tick(t);const e=t/900%1;this.camera.position.x=2*Math.sin(e*Math.PI*2),this.camera.position.z=-2*Math.cos(e*Math.PI*2),this.camera.facing=a.Z.axisRotation(new l.Z(0,1,0),e*Math.PI*2),requestAnimationFrame((()=>this.tickloop(t+1)))}tick(t){let e=this.camera.getViewMatrix().rowMajor();c.f(this.ctx,this.program,this.posBuffer,3,"tristrip",this.renderPoints.length,(t=>({bufferOffset:0,bufferCount:this.bufferCount/3})),((i,r)=>{let n=this.renderPoints[r];const s=Math.pow(Math.abs(Math.sin(2*Math.PI*((t+r)/300%1))),3);i.uniformMatrix4fv(i.getUniformLocation(this.program,"move"),!1,[n.sc*s,0,0,0,0,n.sc*s,0,0,0,0,n.sc*s,0,-n.pt.x,-n.pt.y,-n.pt.z,1]),i.uniformMatrix4fv(i.getUniformLocation(this.program,"project"),!1,e)}))}cleanup(){}}function d(){const t=r.useRef();return r.useEffect((()=>{const e=new f(t.current);return()=>e.cleanup()}),[t]),r.createElement("div",{className:"conway conway_body full_body"},r.createElement("canvas",{id:"canvas",ref:t}))}}}]);
//# sourceMappingURL=754.bundle.js.map