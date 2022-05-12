<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>
        <router-link to="/">菜单1</router-link>
      </li>
      <li>
        <router-link to="/doc">菜单2</router-link>
      </li>
    </ul>
    <span class="toggleAside" @click="toggleMenu"></span>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  setup(props) {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
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
  > .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>