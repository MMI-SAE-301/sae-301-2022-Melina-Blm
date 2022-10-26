<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { supabase, user } from "../supabase";
import { createClient } from '@supabase/supabase-js'


async function signIn(data, node) {
    const { user, error } = await (nvlUtilisateur.value
        ? supabase.auth.signUp(data)
        : supabase.auth.signIn(data));
    if (error) {
        console.error(error);
        node.setErrors([error.message]);
    }
}
const nvlUtilisateur = ref(false);


</script>
<template>

    <h1 class="text-50s font-reemkufi font-semibold tracking-widest text-dark-black text-center mt-12">TIK TAK</h1>
    <div class="bg-bg-grey">
        <h1 class="text-50s font-reemkufi font-semibold tracking-widest text-dark-black text-center">WATCHES FOR ALL
        </h1>
        <div class="flex justify-center mt-20 font-raleway">
            <section class=" text-center bg-white w-96 p-10 rounded-xl shadow-lg mb-20">
                <div class="flex flex-col space-y-4">

                    <h3 class="font-reemkufi font-medium text-center text-dark-black p-5 text-lg ">
                        CONNEXION /
                        INSCRIPTION</h3>
                    <input class="rounded-xl text-grey-dust border-zinc-200 " type="email" placeholder="E-mail..." />
                    <input class="rounded-xl text-grey-dust border-zinc-200" type="password"
                        placeholder="Mot de passe" />
                    <button @pointerdown="supabase.auth.signIn({ provider: 'google' })"
                        class="text-dark-black bg-zinc-200 hover:bg-zinc-300  p-2 rounded-2xl">Continuer
                        avec
                        Google</button>
                    <button @pointerdown="supabase.auth.signIn({ provider: 'facebook' })"
                        class="text-white  bg-blue-600 hover:bg-blue-700 p-2 rounded-2xl">Continuer
                        avec
                        Facebook</button>

                    <div class="flex justify-center">
                        <div class="space-x-3">
                            <button class="bg-zinc-800 p-2 px-6 text-white rounded-lg">Se
                                connecter</button>

                            <button class=" bg-zinc-800  p-2 px-6 text-white
                                rounded-lg">S'inscrire</button>
                        </div>
                    </div>
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
