<template>
 <BannerComp/>
 <ProductDisplay/>

</template>

<script>
import BannerComp from '@/components/BannerComp.vue'
import ProductDisplay from '@/components/ProductDisplay.vue'

  export default {
    name: 'App',
  components: {
    //  register component here
    BannerComp,
    ProductDisplay,
},
  }
</script>

<style scoped>
 
</style>