<template>
  <footer class="footer">
    <div class="container">
      <ul class="footer__spisok" v-if="!auth">
        <li class="menu__list"><a href="/">Главная</a></li>
        <li class="menu__list"><a href="/about">Описание</a></li>
        <li class="menu__list"><a href="/profile">Личный кабинет</a></li>
      </ul>
      <div class="footer__text">
        Авторское право © 2022 Artemev Aleksandr Все права защищены.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["auth"],
  name: "Footer",
};
</script>
