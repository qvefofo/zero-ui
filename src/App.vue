<template>
<div>
    导航栏 |
    <router-link to="/">Xing1</router-link>|
    <router-link to="/xxx">Xing2</router-link>
</div>
<router-view></router-view>
</template>

<script>
import Xing from "./components/Xing.vue";

export default {
    name: "App",
    components: {
        Xing,
    },
};
</script>
