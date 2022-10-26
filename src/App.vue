<template>
  <nav>
    <MenuTikTak />
  </nav>

  <!-- Affiche les pages -->
  <Suspense>
    <router-view class="m-2 border-2 p-2" />
  </Suspense>
  <FooterTikTakVue />
</template>

<script setup lang="ts">

import MenuTikTak from './components/Menu.vue'
import FooterTikTakVue from './components/FooterTikTak.vue';

</script>
