<template>
  <div>
    <Topnav />
    <div class="topnav">
      <div class="logo"></div>
      <div class="menu"></div>
    </div>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/swich">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>

        </ol>
      </aside>
      <main>主内容</main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
import { inject, Ref } from 'vue'
export default {
  components: { Topnav },
  setup(props) {
    const asideVisible = inject<Ref<boolean>>('xxx')
    console.log('doc 获取的 asideVisible为：' + asideVisible.value)
    return { asideVisible }
  },
}
</script>
<style lang="scss" scoped>
aside {
  position: fixed;
  width: 150px;
  padding: 16px;
  top: 50px;
  left: 0;
  background-color: lightblue;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
</style>
