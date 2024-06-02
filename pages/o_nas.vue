<template>
  <div>
    <MyHeader title="Dlaczego my" />
    <ul>
      <li class="text-center" v-for="(value, key) in services" :key="key">
         <span class="text-red-800 text-xl mx-2 md:mx-18 tracking-m font-myCustom"> {{ value.name }} </span>
          <ul class="mb-6 mt-2">
            <li class="text-center" v-for="(subItem, subIndex) in value.subList" :key="subIndex">
              {{ subItem }}
            </li>
          </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import services from '../resources/texts/dlaczego_my.json';

// definePageMeta({
//       middleware: ["dynamic-layout"]
// })

useHead({
  titleTemplate: '%s - O nas',
})

</script>

<style scoped>


</style>