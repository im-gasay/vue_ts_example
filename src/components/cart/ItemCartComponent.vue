<template>
  <div class="cart__item">
    <div class="cart__title">Алгоритмы. Построение и анализ. Т. Кормен, Ч. Лейзерсон, Р. Ривест, К. Штайн.</div>
    <div class="cart__actions">
      <input type="number" class="cart__count" />
      <div class="cart__text">шт. на сумму</div>
      <div class="cart__amount">360 руб.</div>
      <button class="button cart__remove">Удалить</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class ItemCartComponent extends Vue {

}
</script>