<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { ref, provide } from 'vue'
export default {
  name: 'App',
  components: {},
  setup(props) {
    const asideVisible = ref(false)
    provide('asideVisible', asideVisible)
  },
}
</script>
