<template>
  <button :class="{checked:value}" @click="toogleSwitch"><span></span></button>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toogleSwitch = () => {
      context.emit('input', !props.value)
    }
    return { toogleSwitch }
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
    transition: left 250ms; // 切换动画
  }
  &.checked {
    background-color: blue;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
}
</style>