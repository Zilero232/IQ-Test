<template>
  <div class="test__wrapper-bottom_option" @click="$emit('clickOption')">
    <div class="test__wrapper-bottom_img">
      <img :src="img" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["img"],
};
</script>
