<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import DefaultLayout from "./layouts/DefaultLayout.vue";
import AuthLayout from "./layouts/AuthLayout.vue";

export default {
  computed: {
    layout() {
      return this.$route.meta.layout === "Auth"
        ? "AuthLayout"
        : "DefaultLayout";
    },
  },
  components: {
    DefaultLayout,
    AuthLayout,
  },
};
</script>

<style lang="scss">
@import url("./assets/styles/main.scss");
</style>
