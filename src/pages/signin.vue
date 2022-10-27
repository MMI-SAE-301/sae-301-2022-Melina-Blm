<script setup lang="ts">
/*PAGE DE CONNEXION - pour accéder aux contenus, l'utilisateur doit se connecter*/
import { ref } from "@vue/reactivity";
import { supabase, user } from "../supabase";
import type { UserCredentials } from '@supabase/supabase-js'
import { useRouter } from "vue-router"


const router = useRouter()
const newUser = ref(false)
const data = ref({})
const montreMsg = ref(false)

// @ts-ignore
async function signUp(dataForm, node) {
    console.log('signup', data)
    // @ts-ignore
    const { user, error } = await supabase.auth.signUp(data.value)
    if (error) {
        console.error(error);
        node.setErrors([error.message]);
    }
}
// @ts-ignore
async function signIn(dataForm, node) {
    console.log('signin', data)
    // @ts-ignore
    const { user, error } = await supabase.auth.signIn(data.value);
    if (error) {
        console.error(error);
        node.setErrors([error.message]);
    } else {
        montreMsg.value = true;
    }
}


</script>
<template>

    <div v-if="montreMsg">Mesqage</div>


    <h1 class="text-50s font-reemkufi font-semibold tracking-widest text-dark-black text-center mt-12">TIK TAK</h1>
    <div class="bg-bg-grey">
        <h1 class="text-50s font-reemkufi font-semibold tracking-widest text-dark-black text-center">WATCHES FOR ALL
        </h1>
        <div class="flex justify-center mt-20 font-raleway">
            <section class=" text-center bg-white w-96 p-10 rounded-xl shadow-lg mb-20">
                <div class="flex flex-col space-y-4">

                    <h3 v-if="!user" class="font-reemkufi font-medium text-center text-dark-black p-5 text-lg ">
                        CONNEXION /
                        INSCRIPTION</h3>
                    <p v-if="user">Vous êtes authentifié au nom de {{ user.user_metadata.full_name }}.</p>
                    <FormKit type="form" v-if="!user" :actions="false" v-model="data">
                        <div class="space-y-4 flex flex-col">
                            <FormKit name="email" type="email" placeholder="E-mail..." :config="{
                                classes: { input: '', label: '', },
                            }" input-class="rounded-xl p-3 w-64 text-grey-dust border-zinc-200" />
                            <FormKit name="password" type="password" placeholder="Mot de passe" :config="{
                                classes: { input: '', label: '', },
                            }" input-class="rounded-xl p-3 w-64 text-grey-dust border-zinc-200 mb-6" />
                        </div>
                        <div class="flex justify-center ">
                            <div class=" flex space-x-3">
                                <FormKit type="form" submit-label="Se connecter" @submit="signIn" :config="{
                                    classes: { input: '', label: '', },
                                }"
                                    :submit-attrs="{ classes: { input: 'bg-zinc-700 hover:bg-zinc-800 border-2 p-2 px-6 text-white rounded-lg' } }" />
                                <FormKit type="form" submit-label="S'inscrire" @submit="signUp" :config="{
                                    classes: {
                                        input: '',
                                        label: '',
                                    },
                                }"
                                    :submit-attrs="{ classes: { input: 'bg-zinc-700 border-2 hover:bg-zinc-800 p-2 px-6 text-white rounded-lg' } }" />


                            </div>
                        </div>
                    </FormKit>

                    <button v-if="!user" @pointerdown="supabase.auth.signIn({ provider: 'google' })"
                        class="text-dark-black bg-zinc-200 hover:bg-zinc-300 text-center p-2 rounded-2xl"><img
                            class="inline w-6 " src="../assets/images/google.png" alt="Png Google"> Continuer
                        avec
                        Google</button>
                    <button v-if="!user" @pointerdown="supabase.auth.signIn({ provider: 'facebook' })"
                        class="text-white  bg-blue-600 hover:bg-blue-700 p-2 rounded-2xl">Continuer
                        avec
                        Facebook</button>


                    <div>
                        <button class="bg-light-dark p-2 text-white rounded-lg" v-if="user"
                            @pointerdown="supabase.auth.signOut()">
                            Se déconnecter
                        </button>

                    </div>



                </div>


            </section>
        </div>


    </div>

</template>
