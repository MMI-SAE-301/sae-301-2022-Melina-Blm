<script setup lang="ts">
import { supabase } from "@/supabase";
import SvgMontre from "./SvgMontre.vue";
const props = defineProps<{
    max?: number;
}>();
const { data: montres, error } = await supabase
    .from("MONTRE")
    .select("*")
    .limit(props.max ?? 100);
if (error) {
    console.log("n'a pas pu récupérer les montres", { error });
}
</script>
<template>
    <ul>
        <li v-for="montre in montres" :key="montre.id">
            <router-link :to="{ name: 'montres-edit-id', params: { id: montre.id } }">
                <SvgMontre class="" v-bind="montre" />
            </router-link>
        </li>
    </ul>
</template>