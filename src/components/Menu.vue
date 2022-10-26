<template>
    <header>

        <nav class="bg-white md:flex md:items-center md:justify-between">
            <router-link to="/" class=" cursor-pointer text-3xl p-3 font-reemkufi text-35s text-light-dark">tik
                tak
            </router-link>
            <ul class="md:flex md:items-center md:z-auto md:static absolute bg-white ">
                <li class="mx-6 my-6 md:my-0 ">
                    <router-link class=" text-base font-outfit  text-light-dark  " to="/configurateur">
                        Customize Your Pair</router-link>
                </li>
                <li class="mx-6 my-6 md:my-0">
                    <router-link class=" text-base font-outfit  text-light-dark " to="/notfound">About
                    </router-link>

                </li>
                <li class="mx-6 my-6 md:my-0">
                    <router-link class=" text-base font-outfit  text-light-dark  " to="/notfound">
                        Collections
                    </router-link>

                </li>
                <li class="mx-6 my-6 md:my-0">
                    <router-link class=" text-base font-outfit  text-light-dark font-semibold " to="/signin">Login /
                        Logout
                    </router-link>

                </li>
                <li class="mx-6 my-6 md:my-0 2xl:hidden">
                    <img class="w-8" src="../assets/images/icon_profil.png" alt="">
                </li>
            </ul>
        </nav>
    </header>


</template>
<style scoped>

</style>