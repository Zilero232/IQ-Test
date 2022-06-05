<template>
  <section class="test">
    <div class="container">
      <Progress :progress="progress" />
      <transition name="fade">
        <Preloader v-if="preloader" />
      </transition>

      <div class="test__wrapper">
        <div class="test__wrapper-top">
          <div class="test__wrapper-top_left">
            <div class="swiper-pagination" slot="pagination"></div>
          </div>
          <div class="test__wrapper-top_right">
            <div class="test__wrapper-top_time">
              {{ reverseTimer.minutes }}:{{ reverseTimer.seconds }}
            </div>
          </div>
        </div>

        <div class="test__wrapper-bottom">
          <Swiper
            ref="sliderTest"
            :options="swiperOption"
            @slideNextTransitionStart="() => changeProgress('next')"
            @slidePrevTransitionStart="() => changeProgress('prev')"
          >
            <SwiperSlide v-for="(item, id) in filteredTests.question" :key="id">
              <TestExample :img="item.questImg" />

              <TestAnswers
                :answers="item.answers"
                @clickOption="(status) => routeResult(status)"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div class="test__wrapper-arrows">
          <!-- <div class="test__wrapper-arrow test__wrapper-arrow_prev">
            <svg
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3594 20.4133L1.97271 11L11.3594 1.58667"
                stroke="#D4D4D4"
                stroke-width="2.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div> -->

          <div class="test__wrapper-arrow test__wrapper-arrow_next">
            <svg
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.64062 20.4133L11.0273 11L1.64062 1.58667"
                stroke="#D7263D"
                stroke-width="2.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Progress from "../components/Test/Progress.vue";
import Preloader from "../components/Preloader.vue";
import TestExample from "../components/Test/TestExample.vue";
import TestAnswers from "../components/Test/TestAnswers.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".test__wrapper-arrow_next",
          prevEl: ".test__wrapper-arrow_prev",
        },
        allowTouchMove: false,
      },
      progress: 0,
      stepProgress: 0,
      selectTest: "adults",
      preloader: true,
      filteredTests: [],
      correctAnswers: 0,
      reverseTimer: {
        minutes: 19,
        seconds: 59,
      },
    };
  },
  computed: mapGetters(["allTests"]),
  components: {
    Progress,
    TestExample,
    TestAnswers,
    Preloader,
  },
  methods: {
    ...mapActions(["fetchTests"]),
    timer() {
      let _this = this;
      let time = window.setInterval(function () {
        if (
          _this.reverseTimer.seconds === 0 &&
          _this.reverseTimer.minutes !== 0
        ) {
          _this.reverseTimer.seconds = 59;
          _this.reverseTimer.minutes -= 1;
        } else if (
          _this.reverseTimer.minutes === 0 &&
          _this.reverseTimer.seconds === 0
        ) {
          window.clearInterval(time);
        } else if (
          _this.reverseTimer.minutes === 0 &&
          _this.reverseTimer.seconds === 0
        ) {
          _this.reverseTimer.seconds = 59;
          _this.reverseTimer.minutes = 59;
        } else {
          _this.reverseTimer.seconds -= 1;
        }
      }, 1000);
    },
    changeProgress(event) {
      return event == "next"
        ? (this.progress += this.stepProgress)
        : (this.progress -= this.stepProgress);
    },
    routeResult(status) {
      status ? (this.correctAnswers += 1) : this.correctAnswers;
      if (
        this.$refs.sliderTest.$swiper.activeIndex >
        this.filteredTests.question.length - 2
      ) {
        localStorage.setItem("correctAnswers", this.correctAnswers);
        localStorage.setItem("timer", this.reverseTimer.minutes);
        this.$router.push({
          path: "/result",
        });
      } else this.$refs.sliderTest.$swiper.slideNext();
    },
    async filteredArrayTests() {
      this.filteredTests = await this.allTests.filter(
        (item) => item.category == this.selectTest
      )[0];

      this.progress = this.stepProgress =
        100 / this.filteredTests.question.length;
      this.preloader = false;
    },
  },
  async mounted() {
    await this.fetchTests();
    this.filteredArrayTests();
    this.timer();
  },
};
</script>
