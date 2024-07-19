<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <div class="basic_menu_item">
    <div class="icon_section">
      <span class="material-symbols-outlined">{{ icon }}</span>
    </div>
    <transition name="trans" mode="out-in">
    <div v-if="unfolded" class="title_section">
      {{ title }}
    </div>
  </transition>
  <div class="rightShadow"></div>
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
.bacic_menu_item::after {
  position: absolute;
  z-index: 20;
  content: 'xxx';
  width: 300px;
  background-color: aqua;
  top: 0;
  left: 0;
}

.basic_menu_item:hover {
  transform: scale(1.1);
}
.rightShadow {
  position: absolute;
  display: flex;
  z-index: -1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: auto;
  transform: skew(15deg) translateX(6px);
  @apply bg-red-700;
}

.icon_section {
  @apply flex justify-center items-center border-2 text-white p-2 border-red-700 bg-red-700;
}

.title_section {
  position: relative;
  @apply flex items-center px-2 border-2 whitespace-nowrap border-red-700  bg-white text-sm;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24,
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