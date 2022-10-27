<template>
  <div :class="isDark ? 'dark' : ''">
    <nav>
      <MenuTikTak />
      <!--BOUTTON DARK MODE A ACTIVER SUR LA PAGE ABOUT ET COLLECTIONS
      <div>
        <button checked @click="isDark = !isDark">Dark Mode</button>

      </div>
      -->
    </nav>
    <!-- Affiche les pages -->
    <Suspense>
      <router-view class="m-2 border-2 p-2" />
    </Suspense>


    <FooterTikTakVue />
  </div>
</template>

<script setup lang="ts">

import MenuTikTak from './components/Menu.vue'
import FooterTikTakVue from './components/FooterTikTak.vue';

</script>
<script lang="ts">
export default {
  data() {
    return {
      isDark: false,
    };
  },
};
</script>
