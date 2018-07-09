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
  background-color: #8392B3;
  min-height: calc(100vh - 90px);
}
</style>
