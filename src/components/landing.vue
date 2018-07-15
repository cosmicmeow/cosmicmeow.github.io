<template>
    <div id="landing" class="section-container hero-banner">
      <div id="landing-back" class="landing-container parallax-container">
        </div>
      <div id="landing-middle" class="landing-container parallax-container">
        </div>
      <div id="landing-front" class="landing-container">
        <div class="clouds"></div>
        <div class="hello"></div>
        <div class="bun"></div>
    </div>
      
    </div>
</template>

<script>

export default {
  name: 'landing',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.hero-banner {
  min-height: 0;
  display: block;
  padding: 0;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #FFF6EA;
  background-color: #E9BBB9;
  background-image: url('/src/assets/img/landing_assets/bun_bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
    height: 100vh;

  .landing-container{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: inherit;

    overflow-x: hidden;
    overflow-y: scroll;
    perspective: 1px;
    &.parallax-container {
      &::after {
        content: " ";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-size: 100%;
        z-index: -1;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
  #landing-front {
    transform: translateZ(0);
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
  }
  #landing-middle {
    &.parallax-container::after {
      transform: translateZ(-1px) scale(2.2);
      background-position: center; 
      background-repeat: repeat;
      background-attachment: fixed;
      background-image: url('/src/assets/img/landing_assets/bun_stars.png');
    }
  }
  #landing-back {
    &.parallax-container::after {
      transform: translateZ(-2px) scale(3.8);
      background-attachment: fixed;
      background-position: center 130px; 
      background-image: url('/src/assets/img/landing_assets/bun_clouds1.png');
    }
  }
}

.hello {
  margin-top: 150px;
  width: 500px;
  height: 240px;
  background-image: url('/src/assets/img/landing_assets/bun_greetings.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.bun {
  width: 450px;
  height: 440px;
  background-image: url('/src/assets/img/landing_assets/bun_bun.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.clouds {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url('/src/assets/img/landing_assets/bun_clouds2.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  z-index: -1;
}


@media only screen  and (max-width: 399px) {
  .hello {
    margin-top: 120px;
    width: 90%;
  }
  .hero-banner {
    height: 600px;
  }
}

@media only screen  and (min-width: 400px) and (max-width : 599px) {
  .hello {
    margin-top: 120px;
    width: 90%;
  }
  .hero-banner {
    height: 700px;
  }
}

</style>
