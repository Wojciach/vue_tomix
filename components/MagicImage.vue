<template>
<div :style="containerStyle" class="container">
  <div
    :style="dynamicStyle1"
    class="square1 saturate-50"
    :class="{'rounded-full': rounded,'animate': animate}"
  >
  </div>
  <div
    v-if="exist.includes(2)"
    :style="dynamicStyle2"
    class="square2 bg-red-300"
    :class="{'rounded-full': rounded, 'animate': animate}"
  >
  </div>
  <div
    v-if="exist.includes(3)"
    :style="dynamicStyle3"
    class="square3 bg-gray-300"
    :class="{'rounded-full': rounded, 'animate': animate}"
  >
  </div>
  <div
    v-if="exist.includes(4)"
    :style="dynamicStyle4"
    class="square4 bg-gray-300"
    :class="{'rounded-full': rounded, 'animate': animate}"
  >
  </div>
</div>

</template>

<script lang="ts" setup>

const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  maskUrl: {
    type: String,
    required: false,
  },
  width: {
    type: String,
    required: false,
    default: '250px'
  },
  height: {
    type: String,
    required: false,
    default: '250px'
  },
  shift: {
    type: String,
    required: false,
    default: '4%'
  },
  exist: {
    type: Array,
    required: false,
    default: [2,3,4]
  },
  rounded: {
    type: Boolean,
    required: false,
    default: false
  },
  animate: {
    type: Boolean,
    required: false,
    default: false
  }
});

const computedMaskUrl = computed(() => {
  return props.maskUrl || props.imageUrl;
});

//var shift = props.width * props.stroke;

var containerStyle = `
  width: ${props.width};
  height: ${props.height};
`
var dynamicStyle1 = `
   mask-image: url(${computedMaskUrl.value});
   background-image: url(${props.imageUrl});
`
var dynamicStyle2 = `
   mask-image: url(${computedMaskUrl.value});
   transform: translate(${props.shift}, ${props.shift});
`
var dynamicStyle3 = `
   mask-image: url(${computedMaskUrl.value});
   transform: translate(-${props.shift}, -${props.shift});
`
var dynamicStyle4 = `
   mask-image: url(${computedMaskUrl.value});
   transform: translate(-${props.shift}, ${props.shift});
`
</script>

<style scoped>

.container {
  position: relative;
}

.square1, .square2, .square3, .square4 {
  position: absolute;
  width: 100%;
  height: 100%;
  mask-position: center;
  mask-size: 100%;
  mask-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
}

.square1 {
  z-index: 100;
  transition: all 0.3s ease-in-out;
}

.square1.animate {
  mask-size: 100%;
}
.container:hover .square1.animate {
  mask-size:400%;
}

.container:hover .square2.animate,
.container:hover .square3.animate,
.container:hover .square4.animate {
  mask-image: none !important;
  transform: scale(0.5) !important;
}

</style>