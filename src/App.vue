<template>
  <nav>
    <h1 class="text-3xl p-3 font-reemkufi text-dark-black">Tik Tak</h1>
    <router-link class="" to="/"> Customize Your Pair</router-link>
    <br>

    <h4 class="text-xl font-reemkufi text-dark-black">
      <Bars3Icon class="inline-block h-5 w-5 text-blue-500" />
      menu (dans <code class="font-mono">/src/App.vue</code>)
    </h4>
    <ul>
      <li>
        <router-link class="text-red-600 underline" to="/">
          lien vers
          <code class="">/src/pages/index.vue</code>
        </router-link>
      </li>
    </ul>
  </nav>

  <!-- Affiche les pages -->
  <Suspense>
    <router-view class="m-2 border-2 p-2" />
  </Suspense>
</template>

<script setup lang="ts">

</script>
