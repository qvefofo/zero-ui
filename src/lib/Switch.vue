<template>
  <button :class="{checked}" @click="toogleSwitch"><span></span></button>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  setup(props) {
    const checked = ref(false)
    const toogleSwitch = () => {
      checked.value = !checked.value
    }
    return { checked, toogleSwitch }
  },
}
</script>
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background-color: grey;
  border-radius: $h/2;
  position: relative;
  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background-color: #fff;
    border-radius: $h2/2;
  }
  &.checked {
    background-color: blue;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
}
</style>