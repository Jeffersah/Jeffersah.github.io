export const VERTEX_SHADER = `#version 300 es
in vec4 aVertexPosition;
uniform mat4 project;
uniform mat4 move;
out vec3 vPos;
out vec3 ptPos;

void main() {
  vPos = aVertexPosition.xyz;
  vec4 transformed = project * move * aVertexPosition;
  ptPos = transformed.xyz;
  gl_Position = vec4(transformed.xyz, transformed.z + 1.0);
}`;

export const FRAGMENT_SHADER = `#version 300 es
precision mediump float;
in vec3 vPos;
in vec3 ptPos;
out vec4 color;
void main() {
    vec3 adjpos = (vPos.xyz + 1.0) / 2.0;

    vec3 adjPt = (ptPos + 1.0)/2.0;

    float mxX = max(adjPt.x, 1.0-adjPt.x);

    float distAdj = 1.0 - (ptPos.z / 6.0);

    color = vec4(adjPt.xy * distAdj, distAdj, 1.0);
}
`;