<template>
  <div class="section-header">
    <div class="header-icon" v-bind:style="iconObj"></div>
    <div class="header-title">{{title}}</div>
    <div class="header-subtitle">{{subtitle}}</div>
  </div>
</template>

<script>

export default {
  name: 'sectionHeader',
  props: ['title', 'subtitle', 'icon'],
  data () {
    return {
      iconObj: {
        backgroundImage: 'url(../src/assets/img/header_assets/' + this.icon + ')'
      }
    }
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
  .header-icon {
    width: 90px;
    height: 60px;
    margin-bottom: 10px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .header-title {
    color: #FAECD9;
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
  @media only screen  and (max-width: 399px) {
    .header-subtitle {
      padding: 15px;
    }
  }

  @media only screen  and (min-width: 400px) and (max-width : 599px) {
    .header-subtitle {
      padding: 15px;
    }
  }

}
</style>
