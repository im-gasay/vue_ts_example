<template>
  <div class="cart">
    <div class="cart__header">Корзина</div>
    <div class="cart__list">
      <item-cart-component v-for="index in 30" :key="index"/>
    </div>
    <div class="cart__total">
      Общая стоимость <span>380 руб.</span>
    </div>
  </div>
</template>

<script lang="ts">
import ItemCartComponent from "@/components/cart/ItemCartComponent.vue";
import {Component, Vue} from "vue-property-decorator";

@Component({
  components: {ItemCartComponent}
})
export default class CartComponent extends Vue {

}
</script>
