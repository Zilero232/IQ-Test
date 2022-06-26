<template>
  <section class="login">
    <div class="container">
      <form class="col s12" @submit.prevent="submitHendler">
        <div class="row">
          <div class="input-field col s12">
            <input
              id="email"
              type="email"
              class="validate"
              v-model.trim="email"
              :class="{
                invalid:
                  ($v.email.$dirty && !$v.email.required) ||
                  ($v.email.$dirty && !$v.email.email),
              }"
            />
            <label for="email">Email</label>
            <ul class="helper-text invalid">
              <li v-for="(error, id) of $v.email.$errors" :key="id">
                {{ printError(error.$validator, error.$params) }}
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              id="password"
              type="password"
              class="validate"
              v-model.trim="password"
              :class="{
                invalid:
                  ($v.password.$dirty && !$v.password.required) ||
                  ($v.password.$dirty && !$v.password.minLength),
              }"
            />
            <label for="password">Password</label>
            <ul class="helper-text invalid">
              <li v-for="(error, id) of $v.password.$errors" :key="id">
                {{ printError(error.$validator, error.$params) }}
              </li>
            </ul>
          </div>
        </div>
        <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Авторизоваться
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { email, required, minLength } from "@vuelidate/validators";

import { mapActions } from "vuex";

export default {
  setup() {
    return { $v: useVuelidate() };
  },
  data: () => ({
    email: "",
    password: "",
  }),
  validations: () => ({
    email: { email, required },
    password: { required, minLength: minLength(6) },
  }),
  methods: {
    ...mapActions(["login"]),
    async submitHendler() {
      this.$v.$touch();
      if (this.$v.$error) return;

      const date = {
        email: this.email,
        password: this.password,
        name: this.name,
      };
      await this.login(date);
      alert("Авторизация прошла успешно");
      this.$router.push("/");
    },

    printError($name, $param) {
      switch ($name) {
        case "required":
          return "Поле не должно быть пустым";
        case "minLength":
          return (
            "Минимальная длина должна быть минимум " + $param.min + " символов"
          );
      }
    },
  },
  mounted() {},
};
</script>
