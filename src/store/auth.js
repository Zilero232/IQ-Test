import firebase from "firebase/app";

export default {
  state: {
    user: "",
  },
  actions: {
    async register({ dispatch }, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch("getUid");
        console.log(uid);
        await firebase.database().ref(`/users/${uid}/info`).set({ name });
      } catch (e) {
        alert("Произошла ошибка")
      }
    },
    async login({ dispatch }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        const uid = await dispatch("getUid");
        localStorage.setItem("token", uid);
      } catch (e) {
        alert("Не верный логин или пароль");
      }
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
  },
  mutations: {},
  getters: {},
};
