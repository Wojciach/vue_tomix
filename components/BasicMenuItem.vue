<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <div class="basic_menu_item">
    <div class="icon_section">
      <div id="icon" class="material-symbols-outlined">{{ icon }}</div>
      <div id="iconShadow"></div>
    </div>
    <transition name="trans" mode="out-in">
    <div v-if="unfolded" class="title_section open-sans">
      <div id="text">{{ title }}</div>
      <div id="titleShadow"></div>
    </div>
  </transition>
  </div>
</template>

<script lang="ts" setup>

const titleVisible = ref(true);

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'title'
  },
  icon: {
    type: String,
    required: true,
    default: 'title'
  },
  unfolded: {
    type: Boolean,
    required: false,
    default: true
  }
});

</script>

<style>

.basic_menu_item {
  position: relative;
  @apply flex items-stretch justify-center text-center font-normal;
}


.basic_menu_item:hover {
  transform: scale(1.1);
}


.icon_section {
  display: relative;
  @apply flex justify-center items-center border-2 text-white p-2 border-red-800 bg-red-800 z-20 translate-x-2;
}

.icon_section #iconShadow {
  position: absolute;
  display: block;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.0) skew(15deg) translateX(-6px);
  @apply bg-red-800 outline outline-red-800;
}

.title_section {
  position: relative;
  transform: skew(15deg);
  @apply flex items-center px-2 border-2 whitespace-nowrap border-red-800 pl-4 bg-white text-sm;
}

.title_section #text {
  position: relative;
  transform: skew(-15deg);
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24,
}

#icon {
  @apply p-0 m-0 -translate-x-0.5;
}


.trans-leave-to,
.trans-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}

.trans-leave-from,
.trans-enter-to {
  opacity: 1;
  transform: translateX(-6px);
}

.trans-leave-active {
  transition: all 0;
}


.trans-enter-active {
  transition: all 0.3s;
}

</style>