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
    <div>
        <button v-if="user" @pointerdown="supabase.auth.signOut()">
            Se déconnecter ({{ user.email }})
        </button>
        <FormKit v-else type="form" :submit-label="nvlUtilisateur ? 'S\'inscrire' : 'Se connecter'" @submit="signIn">
            <FormKit name="email" label="Votre eMail" type="email" />
            <FormKit name="password" label="Mot de passe" type="password" />
            <formKit label="Nouvel utilisateur ?" name="nvlUtilisateur" type="checkbox" v-model="nvlUtilisateur" />
        </FormKit>
        <div>
            <div>
                <button v-if="user" @pointerdown="supabase.auth.signOut()">
                    Se déconnecter ({{ user.email }})
                </button>
                <button v-else @pointerdown="supabase.auth.signIn({ provider: 'github' })">
                    Se connecter avec Github
                </button>
            </div>
        </div>
    </div>

</template> 