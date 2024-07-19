<template>
  <div class="mx-4 md:mx-24 lg:mx-44">
    <MyHeader title="Nasze Usługi" />
    <ul>
      <li class="text-center mb-8" v-for="(value, key) in services" :key="key">
         <h3 class="text-red-700 text-xl mx-2 mb-0 md:mx-18 font-myCustom tracking-m"> {{ value.name }} </h3>
          <ul class="m-2">
            <li class="mb-4 text-left flex flex-col md:flex-row justify-center items-center" v-for="(subItem, subIndex) in value.subList" :key="subIndex">
                <div class="photo">
                  <img
                    id="photo"
                    :src="'/img/galeria/' + value.image"
                    class="w-auto h-32 z-40 object-cover"
                  />
                  <div class="photoBackground"></div>
                </div>
              <p class="w-full pl-10">{{ subItem }}</p>
            </li>
          </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import services from '../resources/texts/services.json';

// definePageMeta({
//       middleware: ["dynamic-layout"]
// })

useHead({
  titleTemplate: '%s - Usługi Renowacje Malowanie Elewacji',
})

</script>

<style scoped>

img {
  z-index: 10;
  border: 2px white solid;
}

.photo {
  position: relative;
  display: block;
  z-index: 10;
}


.photo .photoBackground {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scaleY(1.05) skew( -10deg);
  z-index: -10;
  @apply bg-gray-300
}

</style>