<template>
  <div id="illustration-works" class="section-container">
    <div class="page-container">
      <section-header v-bind:title="title" v-bind:subtitle="subtitle" v-bind:icon="icon"/>
      <div class="section-items">
        <item v-for="item in items" v-bind:key="item.key" v-bind:item="item" />
      </div>
    </div>
  </div>
</template>

<script>

import SectionHeader from './sectionHeader';
import Item from './item';
import illustrationItems from '../data/webData.json';

export default {
  name: 'illustration',
  components: {
    SectionHeader,
    Item,
  },
  data () {
    return {
      icon: 'bun_illustration.png',
      title: "Illustration Works",
      subtitle: "I'm also an illustrator! I am available for logo  and character designs, illustration, and conference slides creation.",
      items: illustrationItems.items,
    }
  }
}
</script>

<style lang="scss">
#illustration-works {
  background: rgb(189,178,195);
  background: -moz-linear-gradient(top, rgba(189,178,195,1) 78%, rgba(189,178,195,1) 78%, rgba(131,146,179,1) 100%);
  background: -webkit-linear-gradient(top, rgba(189,178,195,1) 78%,rgba(189,178,195,1) 78%,rgba(131,146,179,1) 100%);
  background: linear-gradient(to bottom, rgba(189,178,195,1) 78%,rgba(189,178,195,1) 78%,rgba(131,146,179,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bdb2c3', endColorstr='#8392b3',GradientType=0 );
}
</style>
