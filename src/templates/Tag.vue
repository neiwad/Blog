<template>
  <Layout :title="this.$route.params.id">
    <Container>
      <h2>All {{ $route.params.id }} posts</h2>
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </Container>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    belongsTo {
      edges {
        node {
          ...on Post {
            id
            title
            path
            description
            content
            date(format: "YYYY-MM-DD")
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from "@/components/PostCard";
export default {
  metaInfo() {
    return {
      title: this.$route.params.id,
    };
  },
  components: {
    PostCard,
  },
  computed: {
    posts() {
      return this.$page.tag.belongsTo.edges.map((e) => e.node);
    },
  },
};
</script>