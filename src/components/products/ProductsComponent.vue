<template>
  <div class="products">
    <template
        v-for="(categoryItem, categoryIndex) in getProductsInCategoryWithNames"
        v-if="categoryItem.products.length > 0"
    >
      <item-category-component :key="`category-${categoryIndex}`" :category-title="categoryItem.title"/>
      <div class="products__list" :key="`products_list-${categoryIndex}`">
        <item-product-component
            v-for="(product, productIndex) in categoryItem.products"
            :key="`product-${productIndex}`"
            :product="product"
        />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import ItemProductComponent from "@/components/products/ItemProductComponent.vue";
import ItemCategoryComponent from "@/components/products/ItemCategoryComponent.vue";
import {ProductsInCategory} from "@/store/modules/Products";

@Component({
  components: {
    ItemCategoryComponent,
    ItemProductComponent,
  }
})
export default class ProductsComponent extends Vue {
  get getProductsInCategoryWithNames(): ProductsInCategory {
    return this.$store.getters["Products/getProductsInCategoryWithNames"]
  }

  mounted () {
    this.$store.dispatch('Products/loadProducts')
    this.$store.dispatch('Products/loadNames')
  }
}
</script>
