<template>
  <div id="app">
    <div class="site-title">
      <span>RU</span>
      <span>AMAZON</span>
    </div>
    <products-component />
    <CartComponent />
    <footer class="footer">&copy; {{ currentYear }} Created by Konstantin Kelle with &#10084; for <a href="https://ooosoftnsk.ru/" target="_blank">SOFT/NSK</a></footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductsComponent from '@/components/products/ProductsComponent.vue';
import CartComponent from "@/components/cart/CartComponent.vue";

@Component({
  components: {
    CartComponent,
    ProductsComponent,
  },
})
export default class App extends Vue {
  currentYear = (new Date).getFullYear()
}
</script>
