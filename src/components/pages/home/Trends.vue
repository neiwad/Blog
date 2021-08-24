<template>
  <Container>
    <h2>En avant</h2>
    <PostCard
      v-for="post in $static.posts.edges"
      :key="post.id"
      :post="post.node"
    />
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