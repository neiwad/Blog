<template>
  <Container>
    <h1>En avant</h1>
    <div class="trends">
      <PostCard
        v-for="post in $static.posts.edges"
        :key="post.path"
        :post="post.node"
      />
    </div>
  </Container>
</template>

<static-query>
query {
  posts: allPost(filter: {trending: {eq: true}}) {
    edges {
      node {
        id
        path
        title
        description
        date(format: "YYYY-MM-DD")
        tags{
          id
        }
      }
    }
  }
}
</static-query>

<script>
import PostCard from "@/components/PostCard";
export default {
  components: {
    PostCard,
  },
  created() {
    console.log(this.$static);
  },
};
</script>

<style lang="scss" scoped>
.trends {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4;
  .postCard {
    @apply col-span-1 lg:col-span-4;
    &:first-child {
      @apply col-span-1 lg:col-span-6;
    }
    &:nth-child(2) {
      @apply col-span-1 lg:col-span-6;
    }
  }
}
</style>