<template>
    <div id="landing" class="section-container hero-banner">
      <div id="landing-back" class="landing-container parallax-container">
        </div>
      <div id="landing-middle" class="landing-container parallax-container">
        </div>
      <div id="landing-front" class="landing-container">
        <div class="stars"></div>
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
        transform: translateZ(-1px) scale(2);
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
      background-position: bottom center; 
      background-image: url('/src/assets/img/landing_assets/bun_clouds2.png');
    }
  }
  #landing-back {
    &.parallax-container::after {
      background-attachment: fixed;
      background-position: center; 
      background-image: url('/src/assets/img/landing_assets/bun_clouds1.png');
    }
  }
}

.hello {
  margin-top: 150px;
  width: 400px;
  height: 200px;
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
.stars {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url('/src/assets/img/landing_assets/bun_stars.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}


@media only screen  and (max-width: 399px) {
  .hello {
    margin-top: 120px;
  }
  .hero-banner {
    height: 600px;
  }
}

@media only screen  and (min-width: 400px) and (max-width : 599px) {
  .hello {
    margin-top: 120px;
  }
  .hero-banner {
    height: 700px;
  }
}

</style>
