<script setup lang="ts">

</script>
<template>
    <div class="flex justify-center">
        <img class="w-12  mb-3 animate-pulse mt-12" src="../assets/images/error.png" alt="">
    </div>
    <h1 class="text-50s font-reemkufi font-semibold tracking-widest text-dark-black text-center mt-4 ">PAGE</h1>
    <div class="bg-bg-grey">
        <h1 class="text-50s font-reemkufi font-semibold tracking-widest text-dark-black text-center">NOT FOUND
        </h1>
        <div class="flex justify-center">
            <div class="flex-col  text-center font-ralewayp-5  m-6 rounded-2xl ">
                <h2>Welp..<br>Looks like
                    you got lost again !<span class="block font-semibold">Click on the button to get to the home
                        page.</span>
                </h2><br>
                <div class="p-3 m-3 bg-blue-700 hover:bg-blue-800 text-white rounded-2xl">
                    <router-link to="/"> HOME PAGE
                    </router-link>
                </div>

            </div>
        </div>
    </div>
</template>