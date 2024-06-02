<template>
  <div>
    <MyHeader title="Produkty" />
    <article class="flex flex-col mt-0 pt-0">
      <p class="pt-0 mt-0">
        W Tomix Elewacje dbamy o najwyższą jakość usług, co odzwierciedla się w starannym doborze produktów, które wykorzystujemy do renowacji elewacji. Nasza firma współpracuje wyłącznie z renomowanymi dostawcami, takimi jak NAICI i ITAL POL 2, którzy zapewniają innowacyjne i efektywne rozwiązania dla branży budowlanej.
      </p>
      <p class="mb-14">
        Oto lista niektórych rekomendowanych i często używanych produktów w naszej firmie. Istnieje również możliwość użycia innych artykułów, jeśli zajdzie taka potrzeba lub na życzenie klienta. Jeśli potrzebujesz więcej informacji, prosimy o <NuxtLink to="/kontakt" class="link"> kontakt telefoniczny. </NuxtLink> 
      </p>
      <div v-for="(category, categoryName) in description" :key="categoryName">
        <MagicRectangle :text="category[0]" />
        <section
          v-for="(product, index) in category.slice(1)"
          :key="index"
          class="flex flex-col md:flex-col border-2 border-solid justify-center items-center m-4 p-4"
        >
        <h4 class="text-red-800 text-xl text-center pb-2 z-40">{{ product.name }}</h4>
          <div class="flex flex-col md:flex-row justify-center items-center">
            <div id="photoContainer" class="flex flex-row justify-center mx-4 w-44">
              <img
                id="productPhoto"
                :src="'/img/produkty/' + product.image"
                alt="product image"
              />
              <div id="photoShadow"></div>
              <div id="photoShadow2"></div>
            </div>
            <div id="textContainer" class="justify-center w-full flex flex-col items-center z-40">
              <p
                v-for="(point, subIndex) in product.subList"
                :key="subIndex"
                class="m-2"
              >
                {{ point }}
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  </div>
</template>

<script setup>
import produkt1 from '/img/produkty/naidry_t.jpg';
import produkt2 from '/img/galeria/Image6.jpg';
import produkt3 from '/img/galeria/Image7.jpg';
import description from '../resources/texts/products.json';
// definePageMeta({
//       middleware: ["dynamic-layout"]
// })

useHead({
  titleTemplate: '%s - Produkty',
})

var images = [];
images = [produkt1, produkt2, produkt3]

</script>

<style scoped>

#productPhoto {
  @apply border-2 border-solid border-white;
}

#photoContainer {
  display: block;
  position: relative;
  z-index: 30;
}

#photoShadow, #photoShadow2 {
  display: block;
  position: absolute;
  content: 'x';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scaleY(1.2) skew(-10deg);
  z-index: -10;
  @apply bg-gray-200;
}

#photoShadow2 {
  transform: scaleY(1.05) skew(8deg);
  opacity: 0.5;
  @apply bg-red-800;
}

</style>