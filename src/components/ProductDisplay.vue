<template>
    <div class="banner">
        <h1>Product</h1>
        <div id="show">
            <div class="card" v-for="products in products" :key="products.id" >
                <img :src="products.image" class="card-img-top" :alt="products.Title">
                <div class="card-body">
                  <h5 class="card-title">{{ products.Title }}</h5>
                  <p class="card-text">{{ products.Brand }}</p>
                  <p class="card-text">{{ products.Price }}</p>
                  <p class="card-text">{{ products.Description }}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed:{
  products(){
    return this.$store.state.products
  }
},
mounted(){
  this.$store.dispatch('fetchProducts')
}
    }
</script>




<style  scoped>
.banner{
    background-color: midnightblue;
}
h1{
    text-align: center;
    font-weight: 900;
    color: white;
}

#show{
    display: grid;
    grid-template-columns:auto auto auto;
    margin: 5px;
}

.card{
    margin: 5px;
}

.card img{
    object-fit:contain;
    aspect-ratio: 3/2
}
</style>

