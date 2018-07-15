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
  background: rgb(188,178,194);
  background: -moz-linear-gradient(top, rgba(188,178,194,1) 1%, rgba(150,152,181,1) 51%, rgba(130,145,179,1) 100%);
  background: -webkit-linear-gradient(top, rgba(188,178,194,1) 1%,rgba(150,152,181,1) 51%,rgba(130,145,179,1) 100%);
  background: linear-gradient(to bottom, rgba(188,178,194,1) 1%,rgba(150,152,181,1) 51%,rgba(130,145,179,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bcb2c2', endColorstr='#8291b3',GradientType=0 );
}
</style>
