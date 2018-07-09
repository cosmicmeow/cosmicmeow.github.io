<template>
  <div class="item-container">
    <div class="item-image" v-bind:style="imageStyle"></div>
    <div class="item-name">{{title}}</div>
    <div class="item-copy">{{subtitle}}</div>
  </div>
</template>

<script>

export default {
  name: 'item',
  props: ['item'],
  data () {
    return {
      title: this.item.title,
      subtitle: this.item.subtitle,
      imageStyle: {
        backgroundImage: this.item.image
      }
    }
  }
}
</script>

<style lang="scss">

.section-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.item-container {
  border: 1px solid #FFF6EA;
  width: 400px;
  height: 250px;
  margin: 15px;
  padding: 15px;
}
</style>
