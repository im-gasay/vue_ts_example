<template>
  <div class="cart__item">
    <div class="cart__title">{{ item.title }}</div>
    <div class="cart__actions">
      <input type="number" class="cart__count" v-model.number="count" />
      <div class="cart__text">шт. на сумму</div>
      <div class="cart__amount">{{ priceWithSelectedCourse }} руб.</div>
      <button class="button cart__remove" @click="removeCartItem">Удалить</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {CartItemWithNames} from "@/components/cart/CartComponent.vue";

@Component
export default class ItemCartComponent extends Vue {
  @Prop() item!: CartItemWithNames

  get currency(): number {
    return this.$store.getters["Currency/getRub"]
  }

  get priceWithSelectedCourse() {
    return (this.item.price * this.item.count * this.currency).toFixed(2)
  }

  get count(): number {
    return this.item.count
  }

  set count(value: number) {
    console.log(value)
    this.$store.commit('Cart/setCountCartItemById', {
      id: this.item.id,
      count: value <= 0 ? 1 : value
    })
  }

  removeCartItem() {
    this.$store.commit('Cart/removeCartItemById', this.item.id)
  }

}
</script>