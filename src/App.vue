<template>
  <NavbarComp/> <!--my nave bar-->
  
 
  <router-view/> <!--main content-->
  <FooterComp/> <!---my footer footer-->
 
  <!-- Button trigger modal -->
<!-- <button type="button" class="btn btn-primary">
  Launch demo modal
</button> -->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Checkout</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Total is :
        
        <input type="text" placeholder="Sibusiso">
        <br>
        <br>
        <input type="text" placeholder="Dyan">
           <br>
          <br>
        <input type="cel" placeholder="09736261873">
           <br>
          <br>
        <input type="email" placeholder="email@gmail.com">
           <br>
          <br>
        <input type="text" placeholder="Address">
      </div>
      <div class="payment">
        <input type="text" placeholder="Card number ***********">
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col">
              <input type="text" placeholder="Expiration date">
            </div>
            <div class="col">
             <input type="text" placeholder="card security code">
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">Pay</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
//  import component here
import NavbarComp from '@/components/NavbarComp.vue' //importing my navbar
import FooterComp from '@/components/FooterComp.vue' //importing my footer
 


export default {
  name: 'HomeView',
  components: {
    //  register component here
    NavbarComp,
 
    FooterComp,
 
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
  border: 1px solid midnightblue;
  margin: 10px;
}

input{
  width: 90%;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 5px;
}
.payment input{
  margin: 5px;
}

.payment{
  background-color: midnightblue;
  margin: 2px;
  padding: 10px;
  border-radius: 5px;
}
</style>

