import firebase from "firebase/app";

export default {
  state: {
    tests: [],
  },  
  actions: {
    async fetchTests(ctx) {
      try {
        const tests = (
          await firebase.database().ref(`/tests`).once("value")
        ).val();

        ctx.commit("updateTests", tests);
      } catch (e) {
        console.log(e);
      }
    },

    async uploadImage(ctx, img) {
      const res = await fetch(
        "https://api.imgbb.com/1/upload?key=25d07778f225c0e305479d6cead5f80a",
        {
          method: "POST",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          Connection: "keep-alive",
          "Content-Type": "application/json",
          body: new FormData().append(img[0]),
        }
      );

      const image = await res.json();
      return image.data.url;
    },
  },
  mutations: {
    updateTests(state, tests) {
      state.tests = tests;
    },
  },
  getters: {
    allTests(state) {
      return state.tests;
    },
  },
};
