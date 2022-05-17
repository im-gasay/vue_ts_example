<template>
  <div class="products">
    <item-category-component />
    <div class="products__list">
      <item-product-component v-for="index in 10" :key="index"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import ItemProductComponent from "@/components/products/ItemProductComponent.vue";
import ItemCategoryComponent from "@/components/products/ItemCategoryComponent.vue";

@Component({
  components: {
    ItemCategoryComponent,
    ItemProductComponent,
  }
})
export default class ProductsComponent extends Vue {

}
</script>
