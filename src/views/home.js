import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Banner1 from '../components/banner1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>welcome-to-megalophobia</title>
        <meta property="og:title" content="welcome-to-megalophobia" />
      </Helmet>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<canvas class="glslCanvas" data-textures="https://i.imgur.com/RoIW4ZQ.png,https://i.imgur.com/8A4w7RV.jpeg" width="1200" height="1240" data-fragment="
    #ifdef GL_ES
    precision mediump float;
    #endif

    uniform vec2 u_resolution;
    uniform sampler2D u_tex0;
    uniform sampler2D u_tex1;
    uniform float u_time;

    void main() 
    {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;

        vec4 noiseA = texture2D(u_tex0, vec2(fract(uv.x / 2. + u_time * 0.1), fract(uv.y / 2. + u_time * 0.05))).rgba;
        vec4 noiseB = texture2D(u_tex1, vec2(fract(uv.x / 2. - u_time * 0.02), fract(uv.y / 2. - u_time * 0.01))).rgba;

        gl_FragColor = mix(vec4(55., 146., 254., 255.) / 255., vec4(1., 1., 1., 1.), noiseA.r * noiseB.r * 1.3);
    }
"></canvas>

<script type="text/javascript" src="https://rawgit.com/patriciogonzalezvivo/glslCanvas/master/dist/GlslCanvas.js"></script>`}
          ></Script>
        </div>
      </div>
      <h1 className="home-text">███████ ██ ████████████</h1>
      <img alt="image" src="/butt%201-1500w.png" className="home-image1" />
      <Banner1></Banner1>
      <div className="home-container4 number">
        <div className="home-container5">
          <Script
            html={`<p id="demo"></p>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">

<style>
p {
  font-size: 4em;
  font-family: "Spectral"
}
</style>

<script>

var countDownDate = new Date("Mar 19, 2025 14:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const date_set = document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "WELCOME TO MEGALOPHOBIA";
  }
}, 1000);
</script>`}
          ></Script>
        </div>
      </div>
      <img alt="image" src="/flower%201-1500w.png" className="home-image2" />
      <img alt="image" src="/sky1-1500w.png" className="home-image3" />
      <img alt="image" src="/new%20project-200h.png" className="home-image4" />
      <img alt="image" src="/butt%202-900w.png" className="home-image5" />
    </div>
  )
}

export default Home
