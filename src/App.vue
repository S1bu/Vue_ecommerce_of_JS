<template>
  <NavbarComp/> <!--my nave bar-->
  <BannerComp/>
  <router-view/> <!--main content-->
  <FooterComp/> <!---my footer footer-->
</template>


<script>
//  import component here
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import BannerComp from '@/components/BannerComp.vue'

export default {
  name: 'HomeView',
  components: {
  //  register component here
  NavbarComp, //nav regostered
  FooterComp, //Footer registered
  BannerComp,
  }
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

 
</style>
