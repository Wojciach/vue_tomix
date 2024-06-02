<template>
  <div>
    <section class="mt-10 mx-1 md:mx-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="md:col-span-2 col-span-1 mx-1">
          <p>Witamy na stronie naszej firmy, specjalizującej się w kompleksowej renowacji elewacji budynków. Nasze usługi obejmują <NuxtLink to="/uslugi" class="link">czyszczenie, malowanie oraz impregnację elewacji, </NuxtLink>co pozwala przywrócić budynkom ich pierwotny blask i zapewnić długotrwałą ochronę przed warunkami atmosferycznymi.</p>
          <p>
            <NuxtLink to="/uslugi" class="link"> Posiadamy szeroką gamę profesjonalnego sprzętu, w tym podnośnik koszowy oraz rusztowania, które są wliczone w cenę naszych usług. </NuxtLink> Dzięki temu możemy realizować nawet najbardziej wymagające projekty, dbając o bezpieczeństwo i komfort naszych pracowników oraz klientów.
            </p>
        </div>
        <!-- <img class="col-span-1" src="../img_source/lorry.png"> -->
        <div class="col-span-1 flex justify-center items-start p-4" >
          <MagicImage
            :imageUrl="'/img/galeria/Image1.jpg'"
      
            width="300px"
            height="300px"
            shift="3%"
            :exist="[2,3]"
          />
          <!-- <img src="/img_source/lorry.png"> -->
        </div>
      </section>
      <section class="mx-1 md:mx-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="col-span-1 flex justify-center items-start order-2 md:order-1 p-4">
              <MagicImage
                :imageUrl="'/img/galeria/Image2.jpg'"
      
                width="300px"
                height="300px"
                shift="3.5%"
                :exist="[2,3]" />
                <!-- <img src="/img_source/koparka_sama.png"> -->
          </div>
          <div class="col-span-1 md:col-span-2 order-1 md:order-2 text-left" >
          <p>
            Zapraszamy do <NuxtLink to="/kontakt" class="link"> współpracy i kontaktu </NuxtLink> w celu uzyskania szczegółowych informacji oraz indywidualnej wyceny.
          </p>
          <p>
            Możesz również skorzystać z naszego <NuxtLink to="/kalkulator" class="link"> kalkulatora</NuxtLink>, aby poznać orientacyją cenę uslugi.
          </p>
          <p>
            Sprawdź, jak możemy pomóc w odnowieniu i zabezpieczeniu Twojego budynku!
          </p>
          <p>
            <NuxtLink to="/galeria" class="link">
              Odwiedź nas i przekonaj się, jak nasza profesjonalna obsługa może odmienić wygląd Twojej nieruchomości!
            </NuxtLink>
          </p>
        </div>
        </section>
  </div>
</template>

<script setup>

    // definePageMeta({
    //   middleware: ["dynamic-layout"],
    // })

    useHead({
      titleTemplate: '%s - Strona Główna',
    })

</script>

<style>
p {
  @apply my-6;
}
.link {
  @apply text-red-800 font-bold;
}

</style>