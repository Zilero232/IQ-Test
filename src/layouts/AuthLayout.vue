<template>
  <div id="app">
    <Header :auth="'auth'" />

    <div class="main">
      <router-view />
    </div>

    <Footer :auth="'auth'" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
