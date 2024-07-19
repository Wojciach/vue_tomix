<template>
  <div class="block relative">
    <div id="div1" class="block relative text-center bg-white border-2 border-solid border-gray-700 z-10">
      <div id="text" class="text-2xl p-2 font-semibold font-myCustom tracking-w"> {{ text }} </div>
    </div>
    <div id="div2" class="block absolute bg-gray-900 top-0 left-0 w-full h-full z-0"></div>
    <div id="div3" class="block absolute bg-red-700 top-0 left-0 w-full h-full z-0"></div>
    <div></div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  text: {
    type: String,
    required: true,
  }
})

</script>

<style>

.border-2 {
  border-width: 1px;
}

#div1 {
  transform: skew(-40deg)
}

#div1 #text {
  transform: skew(40deg)
}

#div2 {
  transform: skew(-40deg) translate(10px, 7px)
}
#div3 {
  transform: skew(-40deg) translate(-10px, -7px)
}

</style>