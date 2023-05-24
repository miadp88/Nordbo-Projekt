

<script setup>
import { RouterView } from 'vue-router'


</script>

<template>
  <div class="container">
  <header>
    <headerComponent />
  </header>
   
  <main>
    <router-view></router-view>
  </main>
</div>
</template>


<script>
export default {
  mounted()
  {
    this.$router.push('/')
  }
}

</script>