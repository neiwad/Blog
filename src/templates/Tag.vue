<template>
  <Layout :title="this.$route.params.id">
    <Container>
      <h2>All {{ $route.params.id }} posts</h2>
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
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