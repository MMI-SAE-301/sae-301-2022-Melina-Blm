<template>

  <div class="">
    <img class="" src="../assets/images/landingwatch.jpg" alt="Image Landing Page">

  </div>
  <div class="bg-bg-grey">
    <div class=" grid grid-cols-1 lg:grid-cols-2 justify-around gap-8 p-10">
      <section class="flex-col p-10">
        <p class="font-reemkufi text-xl text-dark-black mt-2"> CHECK IT OUT !</p>
        <p class="font-raleway text-lg mt-4 ">New TikTak x Mihoko collection just launched out !<br>
          Make sure you get your hands on it before it’s too late.</p>
        <img class="w-[500px]  h-[320px]  mt-5 rounded-xl" src="../assets/images/landingwatch.jpg"
          alt="Image d'une montre">
      </section>

      <section class="flex-col p-10 ">
        <p class="font-reemkufi text-xl text-dark-black mt-2">NEW ECO-FRIENDLY DROP</p>
        <p class="font-raleway text-lg mt-4">Get your hands on our newest drop !<br>
          10% off your order for the first 100 buyers.</p>

        <img class="w-[500px] h-[320px]     mt-5 rounded-xl" src="../assets/images/handwatch.jpg"
          alt="Image d'une montre">

      </section>
    </div>
    <div class="flex justify-center">
      <button
        class=" hover:animate-pulse bg-white p-6 text-sm rounded-full border-4 border-gray-200 shadow-xl font-reemkufi text-zinc-500">
        <router-link to="/">CUSTOMIZE YOUR WATCH</router-link>
      </button>
    </div>
    <h2 class="text-50s font-reemkufi font-semibold tracking-widest text-dark-black text-center mt-12">ECO-FRIENDLY</h2>
  </div>
  <h2 class="text-50s font-reemkufi font-semibold tracking-widest text-dark-black text-center ">
    WATCHES</h2>

  <p class="font-raleway text-center m-12">Comfort. Lightness. Quality. Eco-friendly.<br>
    In Tik Tak, we make sure to offer the best possible quality and service to all of our customers.</p>

  <section class="bg-light-dark">

    <div class="flex justify-center flex-wrap gap-4 p-5">
      <img class="w-[300px] mt-16 hover:border-4 border-white " src="../assets/images/watchplant.jpg"
        alt="Image d'une plante avec une montre">
      <img class="w-[650px] mt-16 hover:border-4 border-white" src="../assets/images/woods.jpg"
        alt="Image d'une femme en forêt">
    </div>
    <h3 class="text-40s font-reemkufi  tracking-widest text-white text-center mt-12">ECO-FRIENDLY &
      SUSTAINABILITY</h3>
    <p class="text-white m-12 text-center font-raleway">For many years, we’ve been a committed company, and has
      never
      stopped to do
      so. With the
      GoGreen program, Tik Tak
      ensures the eco-responsibility of its watches and products for you to enjoy. Ensuring comfort, quality and
      eco-responsibility, you will be confident in your purchase, just like these customers were !</p>

    <div class="grid grid-cols-1 lg:grid-cols-2 justify-around gap-8 p-10   font-raleway">
      <div class="bg-white p-4 rounded-xl">
        <div class="flex items-center gap-6 ">
          <img class="w-20 " src="../assets/images/avis1.png" alt="Icone d'un utilisateur">
          <p class="font-medium">Maxine Mayfield</p>

          <p class="text-gray-500">1 month ago</p>

        </div>
        <p class="p-3">High quality eco-friendly watches !<br>
          After years of searching the perfect watches for my hobbies,
          I’ve finally found it. Recommend it.</p>
      </div>

      <div class="bg-white p-4 rounded-xl">
        <div class="flex items-center gap-6">
          <img class="w-20" src="../assets/images/avis2.png" alt="Icone d'un utilisateur">
          <p class="font-medium">Raven Reyes</p>
          <p class="text-gray-500">Yesterday</p>
        </div>
        <p class="p-3">Working in the industry, it is important to keep track of the time.<br>Tiktak stands out from the
          rest with
          their
          eco-friendly watches.</p>
      </div>
    </div>
  </section>

</template>