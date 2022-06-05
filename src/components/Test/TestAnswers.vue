<template>
  <div class="test__wrapper-bottom_answers">
    <TestOption
      v-for="(item, id) in answers"
      :key="id"
      :img="item.img"
      @clickOption="$emit('clickOption', item.active)"
    />
  </div>
</template>

<script>
import TestOption from "./TestOption.vue";

export default {
  props: ["answers"],
  components: {
    TestOption,
  },
  methods: {
    selectOption(status) {
      console.log(status);
    },
  },
};
</script>
