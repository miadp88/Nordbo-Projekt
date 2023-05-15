<script setup>
import HelloWorld from './components/shared.vue'
import TheWelcome from './components/TheWelcome.vue'
import 'bootstrap/js/dist/dropdown'

</script>

<template>
<template>
  <div class="p-4 bg-gray-100">
    <h1 class="text-2xl font-bold text-gray-800">My Vue app with Tailwind!</h1>
  </div>
</template>

  
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>

 
  </header>

  <main>
    <TheWelcome />
  </main>
  
</template>
<style>
@import "@/assets/tailwind.css";
</style>

<script>
  export default {
    data() {
      return {
        value
      : ''
      }
    }

  }
</script>