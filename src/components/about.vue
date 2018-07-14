<template>
  <div id="about" class="section-container">
    <div class="page-container">
      <section-header v-bind:title="title"/>
    </div>
  </div>
</template>

<script>
import SectionHeader from './sectionHeader';

export default {
  name: 'about',
  components: {
    SectionHeader,
  },
  data () {
    return {
      title: "About Lookmai",
      subtitle: ""
    }
  }
}
</script>

<style lang="scss">
#about {
  position: relative;
  background-color: #8392B3;
  min-height: calc(100vh - 90px);

  background-position: bottom center; 
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/src/assets/img/landing_assets/bun_clouds2.png');

  &::after {
    opacity: 0.3;
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-attachment: fixed;
    background-size: contain;
    background-position: center;
    background-image: url('/src/assets/img/landing_assets/bun_stars.png');
  }
}
</style>
