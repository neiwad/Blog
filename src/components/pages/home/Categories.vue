<template>
  <Container>
    <h2>Catégories</h2>
    <div class="categories">
      <g-link
        v-for="tag in tags"
        :key="tag.path"
        :to="tag.path"
        class="category"
      >
        <span>{{ tag.id }}</span>
      </g-link>
    </div>
  </Container>
</template>

<static-query>
query {
   posts: allPost{
    edges{
      node{
        tags{
          id
          path
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  computed: {
    tags() {
      let tags = [];
      this.$static.posts.edges.forEach((e) => {
        const postTags = e.node.tags;
        postTags.forEach((tag) => {
          if (tags.filter((t) => t.path === tag.path).length === 0) {
            tags.push(tag);
          }
        });
      });
      return tags;
    },
  },
};
</script>

<style lang="scss" scoped>
.categories {
  @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4;
  .category {
    @apply rounded-xl bg-pink inline-block h-32 flex items-center justify-center;
    @apply duration-300 hover:bg-purple hover:text-yellow;
    span {
      @apply text-white;
    }
  }
}
</style>