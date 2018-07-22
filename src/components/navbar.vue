<template>
  <div class="navbar">
    <div class="navbar-container page-container">
      <div class="navbar-homebutton"></div>
      <ul>
        <li>Web</li>
        <li>Illustration</li>
        <li>About</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'navbar',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.navbar {
  height: 90px;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #FFF6EA;
  color: #8392B3;
  border-bottom: 5px solid #fdeddd;
  z-index: 1;
  .navbar-homebutton {
    height: 70px;
    width: 70px;
    background-size: contain;
    border-radius: 35px;
    background-image: url('/src/assets/img/landing_assets/bun_tiny.png');
  }
  .navbar-container {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
}

</style>
