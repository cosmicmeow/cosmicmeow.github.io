<template>
  <div id="web-works" class="section-container">
    <div class="page-container">
      <section-header v-bind:title="title" v-bind:subtitle="subtitle" v-bind:icon="icon" />
      <div class="section-items">
        <item v-for="item in items" v-bind:key="item.key" v-bind:item="item" />
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue';

import SectionHeader from './sectionHeader';
import Item from './item';
import webItems from '../data/webData.json';

export default Vue.component('web' ,{
  components: {
    SectionHeader,
    Item,
  },
  data () {
    return {
      icon: 'bun_web.png',
      title: "Front End Experience",
      subtitle: "I'm a frontend developer with experiences in modern JS frameworks like React and Vue. Here are some of my favorite works that I've created over the years!",
      items: webItems.items,
    }
  }
});
</script>

<style lang="scss">
#web-works {
  background: rgb(233,187,185);
  background: -moz-linear-gradient(top, rgba(233,187,185,1) 50%, rgba(189,178,195,1) 100%);
  background: -webkit-linear-gradient(top, rgba(233,187,185,1) 50%,rgba(189,178,195,1) 100%);
  background: linear-gradient(to bottom, rgba(233,187,185,1) 50%,rgba(189,178,195,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e9bbb9', endColorstr='#bdb2c3',GradientType=0 );
}
</style>
