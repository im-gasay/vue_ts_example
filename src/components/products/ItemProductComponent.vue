<template>
  <div class="products__item">
    <div class="products__title">Алгоритмы. Построение и анализ. Т. Кормен, Ч. Лейзерсон, Р. Ривест, К. Штайн.</div>
    <div class="products__actions">
      <div class="products__amount">45 руб.</div>
      <div class="products__count">Осталось 48 шт.</div>
      <button class="products__button">Купить</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class ItemProductComponent extends Vue {

}
</script>
