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
  &::after {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 60px;
    background-image: url('/src/assets/img/header_assets/item_border_pattern.png');
    background-repeat: repeat;
  }
}
</style>
