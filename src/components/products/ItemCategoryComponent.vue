<template>
  <div class="products__category-title">{{ categoryTitle }}</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class ItemCategoryComponent extends Vue {
  @Prop() categoryTitle!: string
}
</script>
