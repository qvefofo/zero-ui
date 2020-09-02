<template>
  <div class="topnav">
    <div class="logo" @click="toggleMenu">LOGO</div>
    <div class="menu">
      <li>
        <router-link to="/">菜单1</router-link>
      </li>
      <li>
        <router-link to="/doc">菜单2</router-link>
      </li>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  setup(props) {
    const asideVisible = inject<Ref<boolean>>('xxx')
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value
    }
    return { toggleMenu }
  },
}
</script>
<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 16px;
  background: pink;
  position: relative;
  z-index: 10;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    cursor: pointer;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>