<template>
  <Layout>
    <Trends />
    <Categories />
  </Layout>
</template>

<script>
import Container from "@/components/Container";
import Trends from "@/components/pages/home/Trends";
import Categories from "@/components/pages/home/Categories";
export default {
  metaInfo: {
    title: "Hello, world!",
  },
  components: {
    Container,
    Trends,
    Categories,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
