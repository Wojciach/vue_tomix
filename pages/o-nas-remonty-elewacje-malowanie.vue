<template>
  <div>
    <img class="object-cover w-full h-36" src="/stock/stock3.jpg" />
    <div class="mx-12 md:mx-24">
      <MyHeader title="Dlaczego my" />
      <ul>
        <li class="text-center" v-for="(value, key) in services" :key="key">
           <span class="text-red-700 text-xl mx-2 md:mx-18 tracking-m font-myCustom"> {{ value.name }} </span>
            <ul class="mb-6 mt-2">
              <li class="text-center" v-for="(subItem, subIndex) in value.subList" :key="subIndex">
                {{ subItem }}
              </li>
            </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import services from '../resources/texts/dlaczego_my.json';

// definePageMeta({
//       middleware: ["dynamic-layout"]
// })

useHead({
  titleTemplate: '%s - O nas - Remonty Elewacje Czyszczenie',
})

</script>

<style scoped>


</style>