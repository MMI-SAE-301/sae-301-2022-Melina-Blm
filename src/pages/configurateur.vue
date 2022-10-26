<script setup lang="ts">
import FormsMontre from '@/components/FormsMontre.vue';
import ListesMontres from '@/components/ListesMontres.vue';
import { user } from "../supabase"


</script>
<template>
    <section v-if="user">
        <FormsMontre />

        <h2>
            un extrait de vos chaussures (<RouterLink class="text-red-600 underline" to="/">Toutes les voir
            </RouterLink>
            )
        </h2>
        <ListesMontres class="flex flex-wrap gap-2" :max="3" />
    </section>
    <section v-if="!user">

        <h1 class="text-50s font-reemkufi font-semibold tracking-widest text-dark-black text-center mt-12">TIK TAK</h1>
        <div class="bg-bg-grey">
            <h1 class="text-50s font-reemkufi font-semibold tracking-widest text-dark-black text-center">WATCHES FOR ALL
            </h1>

            <div class="flex justify-center">
                <div class="flex-col text-center font-raleway bg-white p-5  m-12 rounded-2xl ">
                    <img class="w-12" src="../assets/images/error.png" alt="">
                    <h2>Oh,oh..<br>Looks like
                        you're
                        not logged in !<span class="block font-semibold">Click on the button !</span>
                    </h2><br>
                    <div class="p-3 m-3 bg-blue-700 hover:bg-blue-800 text-white rounded-2xl">
                        <router-link to="/signin"> Sign In
                        </router-link>
                    </div>

                </div>
            </div>


        </div>
    </section>


</template>



