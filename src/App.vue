<template>
  <nav>
    <MenuTikTak />

  </nav>

  <!-- Affiche les pages -->
  <Suspense>
    <router-view class="m-2 border-2 p-2" />
  </Suspense>
</template>

<script setup lang="ts">

import MenuTikTak from './components/Menu.vue'

</script>
