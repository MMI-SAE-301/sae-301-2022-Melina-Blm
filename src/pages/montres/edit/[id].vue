<script setup lang="ts">
import FormsMontre from "../../../components/FormsMontre.vue";

defineProps<{
    id: string;
}>();
</script>
<template>
    <h1>Vous avez commandé ! </h1>
    <FormsMontre :id="id" />
    <router-link to="/">Retourner à l'accueil</router-link>

</template>