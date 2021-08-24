<template>
  <Layout :title="this.$route.params.id">
    <Container>
      <h2>All {{ $route.params.id }} posts</h2>
      <article v-for="post in posts" :key="post.id">
        {{ post.title }}
      </article>
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
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$route.params.id,
    };
  },
  computed: {
    posts() {
      return this.$page.tag.belongsTo.edges.map((e) => e.node);
    },
  },
};
</script>