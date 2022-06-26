import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueAwesomeSwiper from "vue-awesome-swiper";
import 'swiper/css/swiper.css';
Vue.use(VueAwesomeSwiper);

import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

import 'materialize-css';
import 'materialize-css/dist/css/materialize.css'

firebase.initializeApp({
  apiKey: "AIzaSyB-3KRRhEmvDw3ioJ6DvBUamEPd9OwLVsA",
  authDomain: "iq-test-463b8.firebaseapp.com",
  databaseURL: "https://iq-test-463b8-default-rtdb.firebaseio.com",
  projectId: "iq-test-463b8",
  storageBucket: "iq-test-463b8.appspot.com",
  messagingSenderId: "817047019335",
  appId: "1:817047019335:web:672911fec71ca9d795f662",
  measurementId: "G-73CFWVGT8Y",
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
