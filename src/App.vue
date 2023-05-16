<script setup>
import HelloWorld from './components/HeaderComponent.vue'
import 'bootstrap/js/dist/dropdown'
import FooterComponent from './components/FooterCompenent.vue'
import HeroComponent from './components/HeroComponent.vue'
import ProductComponent from './components/ProductComponent.vue'
</script>

<template>
<template>
  
</template>

  
  <header>
    <div class="wrapper">
     <HeaderComponent />
    </div>

 
  </header>

  <main>
    <HeroComponent />
    <ProductComponent />
  </main>

  <footer>
    <FooterComponent />
  </footer>
  
</template>
<style>
@import "@/assets/tailwind.css";
</style>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterCompenent from './components/FooterCompenent.vue'
import HeroComponent from './components/HeroComponent.vue'
import ProductComponent from './components/ProductComponent.vue'


  export default {
    components: {
      HeaderComponent,
      FooterComponent,
      HeroComponent,
      ProductComponent,
      
   
    },
    data() {
      return {
        value
      : ''
      }
    }

  }
</script>