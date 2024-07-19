<template>
    <div class="min-w-96">
        <header
            class="shadow-sm p-4  bg-gray-100 flex items-center flex-col justify-around md:justify-between overflow-hidden"
            :class="{'md:flex-col': menuOpen, 'md:flex-row': !menuOpen}"
        >
            <div id="logoAndMenu" class="flex flex-col md:flex-row">
                <NuxtLink
                    to="/"
                    class="flex xl:flex-row items-center z-10"
                    :class="{'flex-row' : menuOpen, 'flex-col' : !menuOpen}"
                >
                    <img class="w-32" src="/logo/TOMIX.png" />
                    <!-- <div class="pseudoLogo block relative w-10 h-10 mx-4 pr-14">
                        <div class="rounded-full absolute bg-gray-700 w-10 h-10 translate-y-0.5"></div>
                        <div class="rounded-full absolute bg-red-700 w-10 h-10 z-10  translate-x-2 text-center text-white text-2xl calistoga-regular pt-1">T</div>
                    </div> -->
                    <!-- <NavLogo class="mt-1" /> -->
                </NuxtLink>
                <transition name="slide-fade" mode="out-in">
                    <nav
                        class="container p-4 flex justify-center flex-row"
                        v-if="!menuOpen"
                        key="menu"
                    >
                        <ul
                            class="flex gap-2 transition-all duration-200 flex-row flex-wrap justify-center"
                            :class="{'translate-y-full': menuOpen, 'translate-y-0': !menuOpen}"
                        >
                            <NavMenuItems :unfolded="unfolded" />
                        </ul>
                    </nav>
                </transition>
            </div>
            <div 
                id="menuControls"
                class="flex flex-row xl:flex-row md:flex-row justify-between h-full md:w-auto"
                :class="{'md:flex-row' : !menuOpen, 'md:flex-col': !menuOpen}"
            >
                    <button @click="changeLayout" class="hover:bg-gray-200 material-symbols-outlined p-2"> thumbnail_bar</button>
                    <button @click="menuUnfold" class="hover:bg-gray-200 material-symbols-outlined p-2">menu_open</button>
                    <button @click="toggleMenu" class="hover:bg-gray-200 material-symbols-outlined p-2">menu</button>
            </div>
        </header>
        <!-- Output page content -->
        <main>
            <NuxtPage />
        </main>
        <ScrollToTopButton />
        <Footer />
    </div>
</template>

<script setup>
    import { useMenu } from '~/composables/useMenu';
    const { unfolded, menuUnfold, menuOpen, toggleMenu } = useMenu();

    function changeLayout() {
        useLayout('custom');
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


