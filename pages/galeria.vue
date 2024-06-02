<template>
  <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center mb-12 w-full">
    <div class="hover:scale-110 transition-all duration-75" v-for="(item, index) in numbers" :key="index">
      <MagicImage
        class="object-cover w-full h-full"
        :imageUrl="'/img/galeria/Image' + (index +1) + '.jpg'"
        shift="3%"
        :animate="true"
        :exist="[2,3]"
        rounded
      />
    </div>
  </div>

</template>

<script setup>

const numbers = ref(Array.from({ length: 33 }, (_, i) => i + 1));

// definePageMeta({
//       middleware: ["dynamic-layout"]
// })

useHead({
  titleTemplate: '%s - Galeria',
})

</script>

<style>

</style>