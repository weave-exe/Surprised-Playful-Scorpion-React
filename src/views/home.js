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
      <h1 className="home-text">███████ ██ ████████████</h1>
      <img alt="image" src="/sky1-1500w.png" className="home-image1" />
      <Banner1></Banner1>
      <div className="home-container2 number">
        <div className="home-container3">
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
      <img alt="image" src="/butt%201-1500w.png" className="home-image3" />
      <img alt="image" src="/butt%202-900w.png" className="home-image4" />
      <img src="/new%20project-200h.png" alt="image" className="home-image5" />
    </div>
  )
}

export default Home
