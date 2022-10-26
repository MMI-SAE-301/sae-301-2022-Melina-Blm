<template>
    <div class="flex items-center justify-around flex-wrap m">
        <router-link to="/" class="text-3xl p-3 font-reemkufi text-35s text-light-dark">tik tak
        </router-link>
        <div class=" ">
            <router-link class=" text-base font-outfit  text-light-dark font-medium mr-20" to="/configurateur">
                Customize
                Your Pair
            </router-link>
            <router-link class="   text-base font-outfit text-light-dark font-medium mr-20" to="/">
                About
            </router-link>
            <router-link class=" text-base font-outfit text-light-dark font-medium mr-20" to="/">
                Collections</router-link>
            <router-link class=" text-base font-outfit text-light-dark font-medium mr-20" to="/signin">
                Login / Logout</router-link>
        </div>
        <router-link class=" " to="/signin"> <img class="w-9" src="../assets/images/icon_profil.png" alt="">
        </router-link>
    </div>

</template>
<style scoped>

</style>