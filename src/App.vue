<template>
  <div id="app">
    <navbar />
    <landing />
    <services />
    <web />
    <illustration />
    <about />
  </div>
</template>

<script>

import Navbar from './components/navbar';
import Landing from './components/landing';
import Services from './components/services';
import Web from './components/web';
import Illustration from './components/illustration';
import About from './components/about';

export default {
  name: 'home',
  components: {
    Navbar,
    Landing,
    Services,
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
    padding-bottom: 90px;
    border-bottom: 1px dotted #FFF6EA;
  }
}

.section-container {
  width: 100vw;
  min-height: 100vh;
  padding: 30px 0;
  display: flex;
  flex: 1;
  flex-direction: row;
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
    max-width: 370px;
  }
}

@media only screen  and (min-width: 500px) and (max-width : 699px) {
  .page-container {
    max-width: 470px;
  }
  .hero-banner {
    height: 750px;
  }
}

@media only screen  and (min-width: 700px) and (max-width : 799px) {
  .page-container {
    max-width: 670px;
  }
}

@media only screen  and (min-width: 800px) and (max-width : 999px) {
  .page-container {
    max-width: 770px;
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
