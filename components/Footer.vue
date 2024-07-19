<template>
  <footer class="flex flex-row justify-between items-top bg-red-700 h-14 relative">
    <NuxtLink
      to="https://polbiz.net/"
      target="_blank"
      rel="noopener noreferrer"
      class="relative italic text-xs md:whitespace-nowrap text-gray-300 self-end text-center m-2 ml-0 rounded-full md:px-3 opacity-50 hover:opacity-100"> made by polbiz.net
    </NuxtLink>
    <nav class="font-myCustom tracking-m w-full">
        <ul id="footerList" class="text-white flex flex-row flex-wrap justify-center pt-1">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/o-nas-remonty-elewacje-malowanie">O nas</NuxtLink></li>
            <li><NuxtLink to="/produkty-renowacja-elewacji">Produkty</NuxtLink></li>
            <li><NuxtLink to="/uslugi-elewacje-gladzie-malowanie">Usługi</NuxtLink></li>
            <li><NuxtLink to="/galeria-remonty-elewacji">Galeria</NuxtLink></li>
            <li><NuxtLink to="/kalkulator-ceny-gladzie-natryskowe-malowanie">Kalkulator</NuxtLink></li>
            <li><NuxtLink to="/kontakt-firma-remonty">Kontakt</NuxtLink></li>
        </ul>
    </nav>
  </footer>
</template>

<script lang="ts" setup>


</script>

<style scoped>

#footerList li {
  @apply mx-4;
}
#footerList li:hover {
  @apply text-gray-300;
}

.router-link-active,
.router-link-exact-active {
  @apply text-gray-400;
}



</style>