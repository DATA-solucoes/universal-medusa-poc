<script setup lang="ts">
import HeadingText from "~/components/custom/HeadingText.vue";

definePageMeta({
  layout: "dashboard",
  title: "Dashboard | Fotolivros",
});

const client = useMedusaClient();

const { products } = await client.products.list();
</script>

<template>
  <HeadingText>Fotolivros</HeadingText>

  <div v-for="(product, key_product) in products" :key="key_product">
    <!-- <pre> {{ product }} </pre> -->
    <div>{{ product.title }}</div>
    <div>{{ product.subtitle }}</div>
  </div>
</template>

<style scoped></style>
