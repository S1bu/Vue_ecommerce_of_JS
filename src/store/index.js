import { createStore } from 'vuex'
const productsLink = "https://s1bu.github.io/JSON_ECOMMERCE/products.json";

export default createStore({
  state: {
    products:null
  },
  getters: {
  },
  mutations: {
    setProducts(state, products){
      state.products = products;
    }
  },
  actions: {
       // PRODUCTS
       async fetchProducts(context){
        try{
          let res = await fetch(productsLink );
          let {products } = await res.json() //assuming this be targeting the name of the array we want in the server
          context.commit('setProducts' ,products)
        }
        catch(e){
          console.log(e.message);
        }
      },
  },
  modules: {
  }
})
