<script setup lang="ts">
/*FORMULAIRE DES MONTRES*/
import type { Montres } from '@/types';
import { ref } from 'vue';
import SvgMontre from '@/components/SvgMontre.vue';
import { colors } from '@/types';
import FormKitMontre from '@/components/FormKitMontre.vue'
import { useRouter } from "vue-router";
import { supabase } from '@/supabase';
import FormMateriaux from '@/components/FormMateriaux.vue'
import { materiaux } from '@/types';

let user = supabase.auth.user()

const router = useRouter();
const props = defineProps<{
    data?: Montres;
    id?: string;
}>();

const montre = ref<Montres>(props.data ?? {});
// @ts-ignore
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
    <div class="grid grid-cols-1 lg:grid-cols-2 justify-around gap-8 mx-20 my-10 rounded">
        <div class="bg-white p-7  flex-wrap justify-center rounded-3xl shadow-lg">
            <h2 class="font-reemkufi text-2xl text-center mb-6">PREVIEW</h2>
            <SvgMontre class="w-64 text-center block m-auto" v-bind="montre" />
        </div>
        <div class="bg-white p-7 rounded-3xl shadow-lg">
            <h2 class="font-reemkufi text-2xl text-center ">CUSTOMISATION</h2>
            <div class="font-reemkufi m-6 uppercase">

                <FormKit type="form" submit-label="Add to basket" v-model="montre" @submit="upsertMontre" :config="{
                    classes: {
                        input: '',
                        label: '',
                    },
                }"
                    :submit-attrs="{ classes: { input: 'bg-blue-700 p-3 block m-auto my-4 hover:bg-blue-800 rounded-lg font-raleway text-white hover:bg-indigo-40' } }">
                    <FormKitMontre name="ecran" label="Screen -" />
                    <FormKitMontre name="boitier" label="Case - " />
                    <FormKitMontre name="bracelet" label="Bracelet -" />
                    <FormMateriaux name="" label="Matériaux -" />
                </FormKit>
            </div>
        </div>
    </div>
</template>