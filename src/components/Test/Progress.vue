<template>
  <section class="test__progress">
    <div class="container">
      <div class="test__progress-text">Прогресс</div>
      <div class="test__progress-line">
        <div
          class="test__progress-subline"
          :style="{ width: progress + '%' }"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["progress"],
};
</script>
