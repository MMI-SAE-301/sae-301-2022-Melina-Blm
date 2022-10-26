<script setup lang="ts">
import type { Montres } from '@/types';
import { ref } from 'vue';
import SvgMontre from '@/components/SvgMontre.vue';
import { colors } from '@/types';
import FormKitMontre from '@/components/FormKitMontre.vue'
import { useRouter } from "vue-router";
import { supabase } from '@/supabase';

let user = supabase.auth.user()

const router = useRouter();
const props = defineProps<{
    data?: Montres;
    id?: string;
}>();

const montre = ref<Montres>(props.data ?? {});

async function upsertMontre(dataForm, node) {
    const { data, error } = await supabase.from("MONTRE").upsert(dataForm);
    if (error) node.setErrors([error.message])
    else {
        node.setErrors([]);
        router.push({ name: "montres-edit-id", params: { id: data[0].id } });
    }
}
if (props.id) {
    // On charge les données de la maison
    let { data, error } = await supabase
        .from("MONTRE")
        .select("*")
        .eq("id", props.id);
    if (error) console.log("n'a pas pu charger le table Montres :", error);
    else montre.value = (data as any[])[0];
}
</script>
<template>
    <div class="p-2">
        <div class="w-64">
            <SvgMontre class="w-64" v-bind="montre" />
        </div>
        <FormKit type="form" v-model="montre" @submit="upsertMontre">
            <FormKit name="id_user" label="id_user" type="text" :value="user.id" disabled="disabled"
                outer-class="hidden"></FormKit>
            <FormKitMontre name="ecran" label="ecran" />
            <FormKitMontre name="boitier" label="boitier" />
            <FormKitMontre name="bracelet" label="bracelet" />
        </FormKit>
    </div>
</template>