<script setup lang="ts">
/*PAGE POUR CONFIGURER LE PRODUIT ET VOIR LA LISTE DES PRODUITS*/
import FormsMontre from '@/components/FormsMontre.vue';
import ListesMontres from '@/components/ListesMontres.vue';
import { user } from "../supabase"


</script>
<template>
    <section class="" v-if="user">
        <h1 class="text-50s font-reemkufi font-semibold tracking-widest text-dark-black text-center mt-12">WATCHES</h1>
        <div class="bg-bg-grey">
            <h1 class="text-50s font-reemkufi font-semibold tracking-widest text-dark-black text-center">CUSTOMISATION
            </h1>
            <div class="">
                <FormsMontre />
            </div>
            <div class="bg-white flex flex-col text-center rounded-2xl mx-16 shadow-lg p-6 flex-wrap my-14">
                <h2 class="font-reemkufi text-2xl text-center m-7">PURCHASED PRODUCTS</h2>
                <ListesMontres class="flex flex-wrap gap-14  justify-center" :max="4" />
            </div>
        </div>
    </section>
    <section v-if="!user">

        <h1 class="text-50s font-reemkufi font-semibold tracking-widest text-dark-black text-center mt-12">TIK TAK</h1>
        <div class="bg-bg-grey">
            <h1 class="text-50s font-reemkufi font-semibold tracking-widest text-dark-black text-center">WATCHES FOR ALL
            </h1>

            <div class="flex justify-center ">
                <div class="flex-col text-center font-raleway bg-white shadow-md p-5  m-12 rounded-2xl ">
                    <img class="w-12 block m-auto mb-3 animate-pulse" src="../assets/images/error.png" alt="">
                    <h2>Oh,oh..<br>Looks like
                        you're
                        not logged in !<span class="block font-semibold">Click on the button.</span>
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



