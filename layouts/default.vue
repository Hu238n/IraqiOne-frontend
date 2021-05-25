<template>
  <div class="container mx-auto p-20">
    <m-header></m-header>
    <nuxt />
  </div>
</template>

<style>

body {
  background: #05050d;
  font-family: 'Careem', sans-serif;
}
</style>
<script>
import MHeader from '../components/MHeader'
export default {
  components: { MHeader }
}
</script>
