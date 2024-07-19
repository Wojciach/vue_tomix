<template>
    <button
        v-show="showButton"
        @click="scrollToTop"
        class="fixed bottom-3 border-2 border-white right-4 bg-red-700 text-white py-2 px-4 rounded-full shadow-lg z-50"
        >
        ↑ Powrót
    </button>
</template>

<script lang="ts" setup>

  const showButton = ref(false)

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleScroll = () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.scrollHeight - windowHeight;
  // Show button if scrolled more than 200px and not near the bottom
  showButton.value = scrollTop > 200 && scrollTop < bodyHeight - 50;
};

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });


</script>

<style>

</style>