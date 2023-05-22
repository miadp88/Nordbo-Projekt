<script>
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
    components: {
      HeaderComponent,

    },
    data() {
      return {
        value
      : ''
      }
    }

  }
</script>

<template>
  <header>
    <HeaderComponent/>
  </header>

  <RouterView />
</template>