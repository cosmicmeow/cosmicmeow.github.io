<template>
  <div id="app">
    <navbar />
    <div class="section-container hero-banner">
      <div class="hello">
        <div>Hello!</div>
        <div>I'm Lookmai!</div>
      </div>
    </div>
    <div class="section-container services">
      <ul class="services-items"> 
        <li class="services-item">
          <div class="services-image"></div>
          <div class="services-copy">I code!</div>
          <div class="services-subcopy">I currently code full time.<br>Not available for coding job atm.</div>
        </li>
        <li class="services-item">
          <div class="services-image"></div>
          <div class="services-copy">I also draw!</div>
          <div class="services-subcopy">Commission available!<br><a href="mailto:cosmicmeow.works@gmail.com" target="_blank">Get in touch!</a></div>
        </li>
      </ul>
    </div>
    <web />
    <illustration />
    <about />
  </div>
</template>

<script>

import Navbar from './components/navbar';
import Web from './components/web';
import Illustration from './components/illustration';
import About from './components/about';

export default {
  name: 'home',
  components: {
    Navbar,
    Web,
    Illustration,
    About
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Karla';
  src: url('/src/assets/fonts/Karla/Karla-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'KarlaBold';
  src: url('/src/assets/fonts/Karla/Karla-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Jua';
  src: url('/src/assets/fonts/Jua/Jua-Regular.ttf') format('truetype');
}

body {
  margin: 0;
  background-color: #FFF6EA;
  * {
    box-sizing: border-box;
  }
}
#app {
  font-family: 'Karla', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#FFF6EA;
}
.page-container {
  width: 1100px;    
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}

#web-works, #illustration-works {
  .page-container {
    padding-bottom: 60px;
    border-bottom: 1px dotted #FFF6EA;
  }
}

.section-container {
  width: 100vw;
  min-height: 100vh;
  padding: 30px;
  display: flex;
  flex: 1;
  flex-direction: row;
}

.hero-banner {
  padding-top: 180px;
  justify-content: center;
  flex-direction: row;
  border-bottom: 1px solid #FFF6EA;
  background-color: #E9BBB9;
  background: -moz-linear-gradient(top, rgba(131,146,179,0.56) 0%, rgba(189,178,195,0.68) 27%, rgba(189,178,195,0.68) 28%, rgba(233,187,185,1) 100%);
  background: -webkit-linear-gradient(top, rgba(131,146,179,0.56) 0%,rgba(189,178,195,0.68) 27%,rgba(189,178,195,0.68) 28%,rgba(233,187,185,1) 100%);
  background: linear-gradient(to bottom, rgba(131,146,179,0.56) 0%,rgba(189,178,195,0.68) 27%,rgba(189,178,195,0.68) 28%,rgba(233,187,185,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8f8392b3', endColorstr='#e9bbb9',GradientType=0 );
  .hello {
    border: 1px solid #FFF6EA;
    width: 300px;
    height: 150px;
    font-size: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Jua', Helvetica, Arial, sans-serif;
    line-height: 42px;
  }
}

.services {
  min-height: 400px;
  color: #8392B3;
  border-bottom: 10px solid #fdeddd;
  .services-items {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .services-item {
    margin: 0 30px;
  }
  .services-image {
    width: 250px;
    height: 250px;
    background-color: #BBB2C2;
    border: 1px solid #FCF0DA;
    border-radius: 50%;
    position: relative;
    margin: auto;
    &::after {
      content: "";
      width: 236px;
      height: 236px;
      position: absolute;
      top: 5px;
      left: 5px;
      border: 1px dotted #FFF6EA;
      border-radius: 50%;
    }
  }
  .services-copy {
    margin-top: 30px;
    font-size: 20px;
    font-family: 'Jua', Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .services-subcopy {
    color: #BBB2C2;
    a {
      color: #BBB2C2;
      text-decoration: none;
      position: relative;
      &::after {
        position: absolute;
        left: 0;
        bottom: -3px;
        content: "";
        height: 0px;
        margin-top: 5px;
        width: 100%;
        border-bottom: 1px dotted #BBB2C2;
      }
      &:hover {
        color: #8392B3;
        &:after {
          border-color: #8392B3;
        }
      }
    }
  }
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 15px;
}

a {
  color: #8392B3;
}

@media only screen  and (max-width: 399px) {
  .page-container {
    max-width: 100vw;
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media only screen  and (min-width: 400px) and (max-width : 599px) {
  .page-container {
    max-width: 350px;
  }
}

@media only screen  and (min-width: 500px) and (max-width : 699px) {
  .page-container {
    max-width: 450px;
  }
}

@media only screen  and (min-width: 700px) and (max-width : 799px) {
  .page-container {
    max-width: 650px;
  }
}

@media only screen  and (min-width: 800px) and (max-width : 999px) {
  .page-container {
    max-width: 750px;
  }
}

@media only screen  and (min-width: 1000px) and (max-width : 1199px) {
  .page-container {
    max-width: 900px;
  }
}

@media only screen  and (min-width : 1200px) {
  .page-container {
    max-width: 900px;
  }
}

</style>
