<template>
  <div class="flex flex-col min-w-96">
      <div class="flex flex-row">
        <header class="drop-shadow-xl bg-gray-100 flex flex-col justify-start">
            <div class="sticky top-0">
                <NuxtLink to="/" class="flex flex-col items-center">
                    <img class="w-32" src="/logo/TOMIX.png" />
                    <!-- <div class="pseudoLogo block relative w-10 h-10 mx-4 mr-7 my-2">
                        <div class="rounded-full absolute bg-gray-700 w-10 h-10 translate-y-0.5"></div>
                        <div class="rounded-full absolute bg-red-700 w-10 h-10 z-10  translate-x-2 text-center text-white text-2xl calistoga-regular pt-1">T</div>
                    </div> -->
                    <!-- <div  v-if="unfolded">
                        <NavLogo />
                    </div> -->
                </NuxtLink>
                <div id="menuControls" class="flex flex-row mt-2 mb-0 justify-center flex-wrap">
                    <button @click="changeLayout" class="material-symbols-outlined thoseButtons">toolbar</button>
                    <button @click="menuUnfold" class="material-symbols-outlined thoseButtons">menu_open</button>
                    <button @click="toggleMenu" class="material-symbols-outlined thoseButtons">menu</button>
                </div>
                <transition name="slide-fade" mode="out-in">
                    <nav
                        class="container mx-auto p-4 flex justify-center flex-row mt-0 mb-2"
                        :class="{'pr-0' : !unfolded } "
                        v-if="!menuOpen"
                        key="menu"
                    >
                        <ul
                            class="flex gap-4 transition-all duration-200 flex-col flex-wrap items-start"
                            :class="{'translate-y-full': menuOpen, 'translate-y-0': !menuOpen}"
                        >
                        <NavMenuItems :unfolded="unfolded" />
                        </ul>
                    </nav>
                </transition>
            </div>
      
        </header>
        <!-- Output page content -->
        <main class="w-full mx-4" >
            <NuxtPage />
        </main>
        <ScrollToTopButton />
      </div>
      <Footer />
  </div>
</template>

<script setup>
    import { useMenu } from '~/composables/useMenu';
    const { unfolded, menuUnfold, menuOpen, toggleMenu } = useMenu();

    function changeLayout() {
        useLayout('default');
    }
    
    useHead({
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
                crossorigin: ''
            }
        ]
    })

</script>

<style>

  .thoseButtons {
    @apply hover:bg-gray-200 material-symbols-outlined ml-2 mr-4 p-0 ;
  }

  .btn.router-link-active .title_section, .btn.router-link-exact-active .title_section {
      @apply bg-gray-300 font-semibold;
  }

  .btn.router-link-active .icon_section, .btn.router-link-exact-active .icon_section {
      @apply  font-semibold text-gray-300;
  } 

  .material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
  }

  .translate-y-full {
      transform: translateY(-50px);
      opacity: 0;
      transition: transform 1.3s ease, opacity 0.3s ease;
  }
  .translate-y-0 {
      transform: translateY(0);
      opacity: 1;
      transition: transform 1.3s ease, opacity 0.3s ease;
  }

  .slide-fade-enter-active, .slide-fade-leave-active {
      transition: transform 0.3s ease, opacity 0.3s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to {
      transform: translateY(-50px);
      opacity: 0;
  }
  .slide-fade-enter-to, .slide-fade-leave {
      transform: translateY(0);
      opacity: 1;
  }

</style>


