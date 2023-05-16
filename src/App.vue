<script setup>
import HelloWorld from './components/HeaderComponent.vue'
import 'bootstrap/js/dist/dropdown'
import FooterComponent from './components/FooterCompenent.vue'
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
    <TheWelcome />
  </main>

  <footer>
    <FooterComponent />
  </footer>
  
</template>
<style>
@import "@/assets/tailwind.css";
</style>

<script>
import HeaderComponent from "./components/HeaderComponent.vue"
  export default {
    components: {
      HeaderComponent,
      FooterComponent,
   
    },
    data() {
      return {
        value
      : ''
      }
    }

  }
</script>