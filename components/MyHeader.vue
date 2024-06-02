<template>
  <h2 class="text-center text-5xl text-red-800 mt-4 mb-12">{{ title }}</h2>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String
})

</script>

<style>

</style>