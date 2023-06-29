<template>
    <div class="banner">
        <h1>Product</h1>
        <div id="show"></div>
    </div>
</template>

<script>
    export default {
        
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
    grid-template-columns:auto auto auto auto auto;
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