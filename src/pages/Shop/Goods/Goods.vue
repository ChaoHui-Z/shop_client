<template>
  <div>goods</div>
</template>

<script>
  export default {
    name: "Goods",
    mounted(){
      this.$store.dispatch('getGoods')
      this.$store.dispatch('getRatings')
      this.$store.dispatch('getInfo')
    }
  }
</script>

<style scoped>

</style>
