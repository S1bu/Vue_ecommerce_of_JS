<template>
    <div>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"><img src="https://i.postimg.cc/cLSShcqc/adidas-logo.jpg" alt=""></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                     <router-link to="/Home">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/About">About</router-link>    
                  </li>   
                  <li class="nav-item">
                    <router-link to="/Checkout">Checkout</router-link>    
                  </li>   
                  <li class="nav-item">
                    <router-link to="/Admin">Admin</router-link>    
                  </li>   
                </ul>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
nav{
  background-color:midnightblue;
}

nav img{
  width: 100px;
  height: 100px;
}
 a{
  text-decoration: none;
  font-weight: 900;
  color: white;
  margin:0 10px;
  ;
 }
</style>