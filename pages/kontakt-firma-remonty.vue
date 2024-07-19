<template>
  <article class="flex flex-col items-center w-full">
    <MyHeader class="mb-1 md:mb-12" title="Kontakt" />
    <div class="flex flex-col w-full justify-center items-center">
      <div class="flex flex-row justify-center items-center w-full">
        <MagicImage
          class="hidden md:block"
          :exist="[2,3]"
          imageUrl="/img/galeria/Image9.jpg"
          shift="3%"
        />
        <ul class="mb-8 mx-10 pb-1">
            <li class="w-52"><img src="/logo/TOMIX.png" /></li>
            <li
              class="text-center text-xl first:text-red-700 first:text-3xl first:font-bold first:mb-2"
              v-for="(value, key) in contactData" :key="key">
              {{ value }}
            </li>
        </ul>
      </div>
      <div class="map border-wkite border-solid border-2 w-full mt-4">
        <iframe
          class="border-white border-4"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d535862.8106179542!2d15.641983747331913!3d51.39818339797092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f6f5dec8c30e3%3A0xeb22ebd7aefefc83!2sLubin!5e0!3m2!1sen!2spl!4v1716809492088!5m2!1sen!2spl"
          width="100%"
          height="250"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          >
        </iframe>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import contactData from '../resources/texts/contact.json';

// definePageMeta({
//       middleware: ["dynamic-layout"]
// })

useHead({
  titleTemplate: '%s - Kontakt Frirma Remonty',
})

</script>

<style>



</style>
