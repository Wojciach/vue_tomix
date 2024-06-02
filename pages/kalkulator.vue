<template>
  <div class="flex flex-col justify-center items-center mb-12 ">
    <MyHeader title="Kalkultor" />
    <div class="flex flex-col md:flex-row justify-between items-start">
        <p class="mt-0 pt-0 mx-4 mb-4 font-semibold">Do cen malowania wliczone są usługi takie jak:</p>
        <ul id="list" class="mb-8 mx-8 list-disc">
          <li>Użycie podnośnika koszowego</li>
          <li>Rozstawienie rusztowania</li>
          <li>Rozłożenie mat ochronnych</li>
          <li>
            <ul>Przygotowanie powierzchni:
                <li class="pl-4">- Mycie ciśnieniowe</li>
                <li class="pl-4">- Uzupełnienie ubytków do 2m²</li>
                <li class="pl-4">- Zabezpieczenie stolarki</li>
            </ul>
          </li>
        </ul>
    </div>
    <article
      id="kalkulator"
      class="relative flex flex-col w-full text-center bg-slate-200 justify-center items-center rounded-2xl border-2 border-gray-800 border-solid shadow-xl"
    >
      <div
        class="flex flex-col justify-center shadow-lg items-center border-2 border-solid border-gray-800 px-7 pb-7 mt-4 mx-5 rounded-xl bg-slate-300"
        v-show="!samPodnosnik"
      >
        <div class="p-2 text-center  font-myCustom text-red-900 tracking-w text-xl">Kalkulator</div>
        <div class="flex flex-col mb-4">
          <label for="paint-type" class="mr-2">Wybierz rodzaj usługi:</label>
          <select
            id="paint-type"
            v-model="selectedPaintType"
            :disabled="samPodnosnik"
            class="border-2 w-full border-gray-300 rounded p-2 focus:border-red-900 focus:ring focus:ring-blue-200 focus:outline-none"
          >
            <option
              v-for="(paint, index) in calcData.farby"
              :key="index"
              :value="paint.value"> {{ paint.name }} ({{ paint.price }}zł/m²)
            </option>
          </select>
        </div>
        <div class="flex flex-row" v-show="!samPodnosnik">
          <label for="malowanie" class="flex flex-row mr-2"> Ilość m²:</label>
          <input
            id="malowanie"
            type="number"
            v-model="malowanie"
            :disabled="samPodnosnik"
            class="border-2 border-solid border-red-900 text-center"
          />
        </div>
      </div>

      <div class="flex flex-col p-2 mt-4">
        <div class="flex flex-row">
          <label for="samPodnosnik" class="flex flex-row mr-2"> Wynajmij sam podnośnik ({{ calcData.podnosnik.price }}zł/h)</label>
          <input id="samPodnosnik" type="checkbox" v-model="samPodnosnik" class="border-2 border-solid border-red-900 text-center" />
        </div>
        <div class="flex flex-row p-2" v-show="samPodnosnik">
          <label for="iloscH" class="flex flex-row mr-2">Ilość godzin:</label>
          <input
            id="iloscH"
            type="number"
            v-model="iloscH"
            :disabled="!samPodnosnik"
            class="border-2 border-solid border-red-900 text-center"
          />
        </div>
      </div>
      <div class="p-2 pb-8 text-xl font-semibold">Suma: {{ computedSum }} zł</div>
    </article>
     
  </div>
</template>

<script lang="ts" setup>
  import type { RefSymbol } from "@vue/reactivity";
import calcData from "../resources/texts/kalkulatorData.json"

  const iloscH = ref(0);
  const malowanie = ref(0);
  const samPodnosnik = ref(false);
  const selectedPaintType = ref(calcData.farby[0].value);

  const computedSum = computed(() => {
    let paintPrice = 0;

    if (!samPodnosnik.value) {
      const selectedPaint = calcData.farby.find(paint => paint.value === selectedPaintType.value);
      paintPrice = selectedPaint ? selectedPaint.price : 0;
    }

    let sum = malowanie.value * paintPrice;
    if (samPodnosnik.value) sum = calcData.podnosnik.price * iloscH.value;  // Use the correct price for the extra service
    return sum;

  })

  watch(samPodnosnik, (newVal) => {
    if (newVal) {
      malowanie.value = 0;
    } else {
      iloscH.value = 0;
    }
  });

  useHead({
    titleTemplate: '%s - Kalkulator',
  })
</script>

<style>

ul#list li::marker{
  @apply text-red-900;
}

#kalkulator:after, #kalkulator:before {
  position: absolute;
  content: '';
  z-index: -1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: auto;
  transform: scale(1.0) skewX(-12deg) translate(13px, -12px);
  @apply bg-red-800;
}

#kalkulator:before {
  transform: scale(1.0) skewX(-12deg) translate(-13px, 15px) rotate(2deg);
  @apply bg-gray-800;
}

</style>