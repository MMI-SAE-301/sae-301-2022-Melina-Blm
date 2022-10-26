<script setup lang="ts">
import FormsMontre from "../../../components/FormsMontre.vue";

defineProps<{
    id: string;
}>();
</script>
<template>
    <h1 class="text-50s font-reemkufi font-semibold tracking-widest text-dark-black text-center mt-12 ">PURCHASE</h1>
    <div class="bg-bg-grey">
        <h1 class="text-50s font-reemkufi font-semibold tracking-widest text-dark-black text-center">COMPLETED !
        </h1>
        <div class="flex justify-center gap-8 mt-7 ">
            <router-link class="bg-blue-700 hover:bg-blue-800 p-4 rounded-2xl text-white font-raleway" to="/">HOME PAGE
            </router-link>
            <router-link class="bg-blue-700 hover:bg-blue-800 p-4 rounded-2xl text-white font-ralewa" to="/">SIGN UP
            </router-link>
        </div>
        <FormsMontre :id="id" />

    </div>
</template>