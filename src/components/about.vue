<template>
  <div id="about" class="section-container">
    <div class="page-container">
      <section-header v-bind:title="title" v-bind:icon="icon"/>
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
      icon: 'bun_about.png',
      title: "About Lookmai",
      subtitle: ""
    }
  }
}
</script>

<style lang="scss">
#about {
  position: relative;
  min-height: calc(100vh - 90px);

  background: rgb(130,145,179);
  background: -moz-linear-gradient(top, rgba(130,145,179,1) 0%, rgba(77,93,142,1) 100%);
  background: -webkit-linear-gradient(top, rgba(130,145,179,1) 0%,rgba(77,93,142,1) 100%);
  background: linear-gradient(to bottom, rgba(130,145,179,1) 0%,rgba(77,93,142,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8291b3', endColorstr='#4d5d8e',GradientType=0 );

  &::before {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-position: bottom center; 
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('/src/assets/img/landing_assets/bun_clouds2.png');

  }
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
