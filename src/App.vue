<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from "@/components/layout/TheHeader.vue"
</script>

<template>
 
  <TheHeader />

  <main>
    <component :is="$route.meta.layout || 'div' ">
      <RouterView />
    </component>
  </main>

</template>

<style scoped>

</style>
