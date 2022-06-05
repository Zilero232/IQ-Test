<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="header__logo">
        <img src="@/assets/img/logo.svg" alt="" />
      </router-link>
      <nav class="menu">
        <ul>
          <li class="menu__list"><router-link to="/">Главная</router-link></li>
          <li class="menu__list">
            <router-link to="/about">Описание</router-link>
          </li>
          <li class="menu__list">
            <router-link to="/profile">Личный кабинет</router-link>
          </li>
        </ul>
      </nav>
      <div class="menu__right">
        <div class="bar">
          <div class="bar__item"></div>
          <div class="bar__item"></div>
          <div class="bar__item"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
