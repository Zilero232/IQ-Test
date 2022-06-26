import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("../views/Test.vue"),
  },
  {
    path: "/result",
    name: "result",
    component: () => import("../views/Result.vue"),
  },
  {
    path: "/login",
    name: "login  ",
    meta: {
      layout: "Auth",
    },
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "Auth",
    },
    component: () => import("../views/Register.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
