// Number: XII
// Title: The Hanged Man
// Author: Patricio Gonzalez Vivo

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

#include "../lib/stroke.glsl"

void main() {
    vec3 color = vec3(0.);
    vec2 st = gl_FragCoord.xy/u_resolution;
    st = (st-.5)*1.1912+.5;
    if (u_resolution.y > u_resolution.x ) {
        st.y *= u_resolution.y/u_resolution.x;
        st.y -= (u_resolution.y*.5-u_resolution.x*.5)/u_resolution.x;
    } else {
        st.x *= u_resolution.x/u_resolution.y;
        st.x -= (u_resolution.x*.5-u_resolution.y*.5)/u_resolution.y;
    }
    //START
    float sdf = .5+(st.x-st.y)*.5;
    color += stroke(sdf,.5,.1);
    
    float sdf_inv = (st.x+st.y)*.5;
    color += stroke(sdf_inv,.5,.1);
    //END
    gl_FragColor = vec4(color,1.);
}