<template>
  <div class="section-container services">
    <ul class="services-items"> 
      <li id="services-web" class="services-item">
        <div class="services-image"></div>
        <div class="services-copy">I code!</div>
        <div class="services-subcopy">I currently code full time.<br>Not available for coding job atm.</div>
      </li>
      <li id="services-illustration" class="services-item">
        <div class="services-image"></div>
        <div class="services-copy">I also draw!</div>
        <div class="services-subcopy">Commission available!<br><a href="mailto:cosmicmeow.works@gmail.com" target="_blank">Get in touch!</a></div>
      </li>
      <!-- <li id="services-video" class="services-item">
        <div class="services-image"></div>
        <div class="services-copy">I edit videos too!</div>
        <div class="services-subcopy">Editor for<br><a href="https://www.youtube.com/channel/UCI_0jmOfYiD4Nh7zxEqXATQ/" target="_blank">One Sky One Destiny Podcast</a></div>
      </li> -->
    </ul>
  </div>
</template>

<script>

export default {
  name: 'services',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.services {
  background-color: #FBF0DE;
  min-height: 400px;
  color: #8392B3;
  border-bottom: 10px solid #F7D3C0;
  .services-items {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .services-item {
    margin:  30px;
    &#services-web {
      .services-image {
        background-size: 50%;
        background-image: url('/src/assets/img/header_assets/bun_web.gif');
      }
    }

    &#services-illustration {
      .services-image {
        background-size: 60%;
        background-image: url('/src/assets/img/header_assets/bun_illustration.gif');
      }
    }
  }
  .services-image {
    width: 250px;
    height: 250px;
    background-color: #BBB2C2;
    border: 1px solid #FCF0DA;
    border-radius: 50%;
    position: relative;
    margin: auto;
    background-repeat: no-repeat;
    background-position: center;
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

</style>
