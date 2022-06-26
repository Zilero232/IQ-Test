import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import tests from "./tests";
import auth from "./auth";

export default new Vuex.Store({
  modules: {
    tests,
    auth,
  },
});
