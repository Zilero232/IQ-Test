<template>
  <div>
    <section class="convenient">
      <div class="container">
        <div class="convenient__block">
          <div class="convenient__block-text">
            12.457 пользователей протестировано сегодня / Среднее значение.
            Оценка IQ: 100
          </div>
          <div class="convenient__block-title">
            Самый удобный <br />
            <span>IQ test</span>
          </div>
          <div class="convenient__block-subtitle">
            Проверьте свои когнитивные способности!
          </div>
          <router-link
            :to="{ path: '/test' }"
            class="obtaining__wrapper-right_btn"
            >Начать тест</router-link
          >
        </div>
      </div>
    </section>

    <section class="statistic">
      <div class="container">
        <div class="statistic__wrapper">
          <div class="statistic__wrapper-item">
            <div class="statistic__wrapper-item_img">
              <img src="@/assets/img/statistic/item-1.svg" alt="" />
            </div>
            <div class="statistic__wrapper-item_text">
              20 визуально понятных вопросов
            </div>
          </div>

          <div class="statistic__wrapper-item">
            <div class="statistic__wrapper-item_img">
              <img src="@/assets/img/statistic/item-2.svg" alt="" />
            </div>
            <div class="statistic__wrapper-item_text">
              Получение официального сертификата от компании
            </div>
          </div>

          <div class="statistic__wrapper-item">
            <div class="statistic__wrapper-item_img">
              <img src="@/assets/img/statistic/item-3.svg" alt="" />
            </div>
            <div class="statistic__wrapper-item_text">
              Определение умственных склонностей (гуманитарные науки,
              математика)
            </div>
          </div>

          <div class="statistic__wrapper-item">
            <div class="statistic__wrapper-item_img">
              <img src="@/assets/img/statistic/item-4.svg" alt="" />
            </div>
            <div class="statistic__wrapper-item_text">
              В каком направлении эффективно использовать свой мозг
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="graph">
      <div class="container">
        <div class="graph__left">
          <div class="graph__population">
            <img src="@/assets/img/graph.png" alt="" />
          </div>
        </div>
        <div class="graph__right">
          <div class="graph__wrapper">
            <div class="graph__wrapper-row">
              <div class="graph__wrapper-row_value">145-160</div>
              <div class="graph__wrapper-row_symbol">></div>
              <div class="graph__wrapper-row_text">Высоко Одаренный</div>
            </div>
            <div class="graph__wrapper-row">
              <div class="graph__wrapper-row_value">130-144</div>
              <div class="graph__wrapper-row_symbol">></div>
              <div class="graph__wrapper-row_text">Одаренный</div>
            </div>
            <div class="graph__wrapper-row">
              <div class="graph__wrapper-row_value">115-129</div>
              <div class="graph__wrapper-row_symbol">></div>
              <div class="graph__wrapper-row_text">Выше Среднего</div>
            </div>
            <div class="graph__wrapper-row">
              <div class="graph__wrapper-row_value">85-114</div>
              <div class="graph__wrapper-row_symbol">></div>
              <div class="graph__wrapper-row_text">Средний</div>
            </div>
            <div class="graph__wrapper-row">
              <div class="graph__wrapper-row_value">70-84</div>
              <div class="graph__wrapper-row_symbol">></div>
              <div class="graph__wrapper-row_text">Ниже Среднего</div>
            </div>
            <div class="graph__wrapper-row">
              <div class="graph__wrapper-row_value">Below 70</div>
              <div class="graph__wrapper-row_symbol">></div>
              <div class="graph__wrapper-row_text">Нижний Крайний</div>
            </div>
          </div>
          <div class="graph__right-text">
            Пройдите тест и узнайте, чего вы стоите!
          </div>
        </div>
      </div>
    </section>

    <section class="obtaining">
      <div class="container">
        <div class="obtaining__title">Этапы получения сертификата</div>
        <div class="obtaining__wrapper">
          <div class="obtaining__wrapper-left">
            <div class="obtaining__wrapper-left_img">
              <img src="@/assets/img/sertifacate/sertificate-1.png" alt="" />
            </div>
          </div>

          <div class="obtaining__wrapper-right">
            <ul class="obtaining__wrapper-right_spisok">
              <li>1. Приготовиться</li>
              <li>2. Завершите тест</li>
              <li>
                3. Получите свой<span> IQ показатель</span> и ваш личный
                <span>IQ Сертификат, </span> так же получите подробный
                <span>Отчет о результатах работы</span> о ваших интеллектуальных
                достоинствах и слабости!
              </li>
            </ul>
            <div class="obtaining__wrapper-right_subtext">
              *IQ Тест полностью бесплатный
            </div>
            <router-link
              :to="{ path: '/home' }"
              class="obtaining__wrapper-right_btn"
              >Начать тест</router-link
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>буд
