<template>
  <h1 class="text-center text-5xl text-red-700 mt-4 mb-12 font-myCustom">{{ title }}</h1>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String
})

</script>

<style>

</style>