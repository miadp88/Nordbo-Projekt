<script setup>
import 'bootstrap/js/dist/dropdown'
import FooterComponent from '../components/FooterCompenent.vue';
import HeroComponent from '../components/HeroComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import ProductComponent from '../components/ProductComponent.vue';
</script>

<template>
  <nav>
    <HeaderComponent />
  </nav>

  <main>
    <HeroComponent />
    <ProductComponent />
  </main>

  <footer>
    <HeaderComponent />
  </footer>
</template>
