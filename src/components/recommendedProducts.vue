<template>
    <div v-for="(product,index) in products" :key="index" class="row resultWrapper">
        <div class="col-md-4 resultContent">
            <h2>{{ product.name }}</h2>
            <img :src="product.imageUrl">
            <p>
                {{ product.description }} 
            </p>
            <div>
            <div>Properties</div>
            <div v-for="(property,index) in product.properties" :key="index">
                <div style="text-transform: capitalize;">{{ property }}</div>
            </div>
            </div>
            <button v-on:click="setSelectedProduct(product)">Read More</button>
        </div>
    </div>

    <div :class="GetSelectedProductClass()">
       <div v-if="this.selectedProduct != null">
        <div>{{ this.selectedProduct.name }}</div>
        <div>{{ this.selectedProduct.description }}</div>
       </div> 
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
  export default {
        name: 'recommendedProducts',
        
    
        data() {
            return {
                selectedProduct: null,
            }
        },

        computed: {
            
          ...mapGetters({  products:"getProducts"}),

        },
        methods: {
            setSelectedProduct(product)
            {
                this.selectedProduct = product;
            },
            GetSelectedProductClass()
            {
                return this.selectedProduct == null ? "hide" : "show"
            }
        },

        mounted() {
            //this.selectedProduct = products[0];
        }
      }
</script>

<style scoped>
.hide{
    display: none;
}
.show{
    display: block;
}
</style>