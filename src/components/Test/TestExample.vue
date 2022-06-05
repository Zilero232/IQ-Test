<template>
  <div class="test__wrapper-bottom_example">
    <TestOption :img="img" />
  </div>
</template>

<script>
import TestOption from "./TestOption.vue";

export default {
  props: ["img"],
  components: {
    TestOption,
  },
};
</script>
