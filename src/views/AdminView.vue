<template>
 
        <div class="container">

            <div class="row">
              <div class="col">
                <!-- Button trigger modal -->
          <button  class="btnAdd" data-bs-toggle="modal" data-bs-target="#addItem">
             Add Product
            </button>
              </div>
            </div>
          
            <div class="row">
              <div class="col">
                <table id="table">
                    <tr>
                    <th class="td">id</th>
                    <th class="td">Product</th>
                    <th class="td">Brand</th>
                    <th class="td">Price</th>
                    <th class="td">Description</th>
                    <th class="td">Image</th>
                    <th class="td"> <button id='edit_admin' type="buttton" class="btn btn-success">edit</button></th> 
                    <th class="td"><button id="delete_admin"  type="button" class="btn btn-danger">delete</button></th> 
                    </tr>
                    <tbody class="table_row">
                    </tbody>
                  </table>
              </div>
            </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
table{
    width: 100%;
    margin-bottom: 100px;
 }
.table_row{
    border-bottom: 1px solid black;
    width: 100%;
}

 .td{
    border-bottom: 1px solid black;
 }

 .td button {
    width: 100% ;
 }
.td img{
    width: 100px;
    height: 100px;
}
.btnAdd{
            float: right;
          background-color:midnightblue;
          padding: 20px;
          color: white;
           margin: 10px;
           border: 1px solid midnightblue;
           border-radius: 5px;
}
.btn{
    margin: 2px;
}
#edit_admin{
margin: 5px;
width: 30%;
}
#delete_admin{
    margin: 5px;
    width: 30%;
}
</style>