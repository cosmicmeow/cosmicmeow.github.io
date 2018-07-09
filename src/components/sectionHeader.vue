<template>
  <div class="section-header">
    <div class="header-title">{{title}}</div>
    <div class="header-subtitle">{{subtitle}}</div>
  </div>
</template>

<script>

export default {
  name: 'sectionHeader',
  props: ['title', 'subtitle'],
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.section-header {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  .header-title {
    border-bottom: 1px solid;
    padding-bottom: 15px;
    font-family: 'Jua', Helvetica, Arial, sans-serif;
    font-size: 24px;
  }
  .header-subtitle {
    font-size: 17px;
    padding-top: 15px;
    padding: 15px 50px;
    text-align: center;
  }
}
</style>
