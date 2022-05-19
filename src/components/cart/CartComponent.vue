<template>
  <div class="cart">
    <div class="cart__header">Корзина</div>
    <div class="cart__list">
      <item-cart-component v-for="(item, index) in cartWithNames" :key="index" :item="item" />
    </div>
    <div class="cart__total" v-if="totalAmount > 0">
      Общая стоимость <span>{{ totalAmount }} руб.</span>
    </div>
  </div>
</template>

<script lang="ts">
import ItemCartComponent from "@/components/cart/ItemCartComponent.vue";
import {Component, Vue} from "vue-property-decorator";
import Product from "@/entites/Product";
import {CartItem} from "@/store/modules/Cart";
import {ProductsInCategory} from "@/store/modules/Products";

export interface CartItemWithNames {
  id: number
  title: string
  count: number
  price: number
}

@Component({
  components: {ItemCartComponent}
})
export default class CartComponent extends Vue {
  get cart(): CartItem[] {
    return this.$store.getters["Cart/getCart"]
  }

  get getProductsInCategoryWithNames(): ProductsInCategory[] {
    return this.$store.getters["Products/getProductsInCategoryWithNames"]
  }

  get productsWithNames(): Product[] {
    const products: Product[] = []

    for (const item of this.getProductsInCategoryWithNames) {
      products.push(...item.products)
    }

    return products
  }

  get cartWithNames(): CartItemWithNames[] {
    const cart: CartItemWithNames[] = []

    for (const cartItem of this.cart) {
      const product = this.productsWithNames.find(item => item.id === cartItem.id)

      if (product === undefined) {
        continue
      }

      cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        count: cartItem.count,
      })
    }

    return cart
  }

  get currency(): number {
    return this.$store.getters["Currency/getRub"]
  }

  get totalAmount(): number {
    let total = 0

    for (const item of this.cartWithNames) {
      total += item.price * item.count * this.currency
    }

    return parseFloat(total.toFixed(2))
  }
}
</script>
