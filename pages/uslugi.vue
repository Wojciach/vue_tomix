<template>
  <div>
    <MyHeader title="Nasze Usługi:" />
    <ul>
      <li class="text-center" v-for="(value, key) in services" :key="key">
         <span class="text-red-800 text-xl mx-2 md:mx-18"> {{ value.name }} </span>
          <ul class="m-2">
            <li class="mb-4 text-left flex flex-row justify-center items-center" v-for="(subItem, subIndex) in value.subList" :key="subIndex">
                <div class="photo">
                  <img
                    id="photo"
                    :src="'/img/galeria/' + value.image"
                    class="w-auto h-32 z-40"
                  />
                  <div class="photoBackground"></div>
                </div>
              <p class="w-2/3 pl-6">{{ subItem }}</p>
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
  titleTemplate: '%s - Usługi',
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