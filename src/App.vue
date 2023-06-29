<template>
  <NavbarComp/> <!--my nave bar-->
  <BannerComp/> <!--my banner-->
  <ProductDisplay/> <!--my products-->
  <router-view/> <!--main content-->
  <FooterComp/> <!---my footer footer-->
import ProductDisplay from './components/ProductDisplay.vue'
</template>


<script>
//  import component here
import NavbarComp from '@/components/NavbarComp.vue' //importing my navbar
import FooterComp from '@/components/FooterComp.vue' //importing my footer
import BannerComp from '@/components/BannerComp'
import ProductDisplay from './components/ProductDisplay.vue'


export default {
  name: 'HomeView',
  components: {
    //  register component here
    NavbarComp,
    BannerComp,
    FooterComp,
    ProductDisplay,
}
}
async function getData() {
    let data = await fetch("https://s1bu.github.io/JSON_ECOMMERCE/products.json")
    let peopleData = await data.json()
    let extractedData = peopleData.products
    let display = document.querySelector("#show")
    extractedData.forEach(product => {
        display.innerHTML +=`
    <div class="card">
  <img src="${product.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.Title}</h5>
    <p class="card-text">Desscription :${product.Description}</p>
    <p class="card-text">Price:${product.Price}</p>
    <p class="card-text">Barnd${product.Brand}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        `
    })
}
getData()
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.card{
  width: 90%;

}
 
</style>
