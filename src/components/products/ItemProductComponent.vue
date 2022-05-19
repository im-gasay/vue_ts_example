<template>
  <div class="products__item">
    <div class="products__title">{{ product.title }}</div>
    <div class="products__actions">
      <div class="products__amount">{{ priceWithSelectedCourse }} руб.</div>
      <div class="products__count">Осталось {{ product.count }} шт.</div>
      <button class="products__button" @click="addProductToCart(product.id)">Купить</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import Product from "@/entites/Product";

@Component
export default class ItemProductComponent extends Vue {
  @Prop() product!: Product

  get currencyRubToUSD(): number {
    return this.$store.getters["Currency/getRub"]
  }

  get priceWithSelectedCourse(): number {
    return this.product.price * this.currencyRubToUSD
  }

  addProductToCart(id: number) {
    if (this.product.count > 0) {
      this.$store.commit('Cart/addItemToCart', id)
    }
  }
}
</script>
