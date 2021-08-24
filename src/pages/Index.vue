<template>
  <Layout>
    <Trends />
    <Categories class="mt-8" />
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import Container from "@/components/Container";
import Trends from "@/components/pages/home/Trends";
import Categories from "@/components/pages/home/Categories";
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$static.metadata.siteDescription,
        },
      ],
    };
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
