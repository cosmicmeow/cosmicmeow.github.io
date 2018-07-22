<template>
  <div class="item-container" v-bind:class="{'active': isExpanded}" v-on:click="toggle">
    <div class="item-image" v-bind:style="imageStyle"></div>
    <div class="item-details">
      <div class="item-name">{{title}}</div>
      <div class="item-client"><div class="item-label">Client:</div> {{clients}}</div>
      <div class="item-tools"><div class="item-label">Tools:</div> {{tools}}</div>
      <div class="item-copy"><div class="item-label">Details:</div> {{subtitle}}</div>
      <div class="item-url"><a v-bind:href="url" target="_blank"></a></div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue';

export default Vue.component('item', {
  props: ['item'],
  data () {
    return {
      title: this.item.title,
      subtitle: this.item.subtitle,
      imageStyle: {
        backgroundImage: 'url(\'/src/assets/img/work_assets/' + this.item.image + '_thumbnail.jpg\')'
      },
      clients: this.item.clients,
      tools: this.item.tools,
      url: this.item.url,
      isExpanded: false,
    }
  },
  methods: {
    toggle (){
      this.isExpanded = !this.isExpanded;
    }
  }
});
</script>

<style lang="scss">

.section-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.item-container {
  border: 10px solid #FBF0DE;
  border-radius: 10px;
  width: 400px;
  height: 250px;
  margin: 15px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  -webkit-box-shadow: 4px 4px 26px 0px rgba(0,0,0,0.10);
  -moz-box-shadow: 4px 4px 26px 0px rgba(0,0,0,0.10);
  box-shadow: 4px 4px 26px 0px rgba(0,0,0,0.10);
  transition: all 0.3s ease-out;
  .item-image {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    pointer-events: none;
    &::after {
      content: "";
      width: 370px;
      height: 220px;
      position: absolute;
      top: 4px;
      left: 4px;
      border: 1px dotted #FFF6EA;
      border-radius: 3px;
    }
  }
  .item-details {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 15px;
    background-color: #FBF0DE;
    transform: translateY(100%);
    transition: transform ease-out 0.3s;
    color: #BBB2C2;
    font-size: 15px;
    cursor: default;
    text-align: left;
    pointer-events: auto;

    .item-name {
      font-family: 'Jua', Helvetica, Arial, sans-serif;
      font-size: 24px;
      margin-bottom: 16px;
      color: #8392B3;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 34px;
        width: 50px;
        height: 1px;
        border-bottom: 1px dotted #BBB2C2;
      }
    }

    .item-label {
      color: #8392B3;
      display: inline;
    }

    &::before {
      content: "";
      width: 370px;
      height: 220px;
      position: absolute;
      top: 4px;
      left: 4px;
      border: 1px dotted #8392B3;
      border-radius: 3px;
      opacity: 0;
      transition: opacity ease-out 0.2s 0s;
    }

    &::after {
      content: " ";
      position: absolute;
      height: 15px;
      width: 100%;
      left: 0;
      top: -14px;
      background-image: url('/src/assets/img/header_assets/item_border_pattern.png');
      background-repeat: repeat-x;
      background-position: top;
      background-size: 20px;
    }
  }
  &.active {
    // height: 460px;
    // width: 100%;
    .item-details {
      transform: translateY(0px);
      opacity: 0.95;
      &::before {
        transition: opacity ease-out 0.3s 0.2s;
        opacity: 1;
      }
    }
  }
}
</style>
