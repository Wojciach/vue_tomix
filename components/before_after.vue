<template>
  <div class="flex flex-row">
    <img :src="image1" />
    <img :src="image2" />
    
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  image1: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
    required: true,
  }
});

</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
  object-fit: cover;

}
</style>