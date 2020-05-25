<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>

  import FooterGuide from "./components/FooterGuide/FooterGuide";
  export default {
    name: 'App',
    components: {FooterGuide},
    mounted() {
      this.$store.dispatch('getGeohash')
      this.$store.dispatch('getCategorys')
      this.$store.dispatch('getShops')
    }
  }
</script>

<style scoped>


</style>
