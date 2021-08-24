<template>
  <Layout>
    <Container>
      <div
        class="cover"
        v-if="post.cover"
        v-bind:style="{
          backgroundImage: 'url(' + post.cover.src + ')',
        }"
      >
        <h1>{{ post.title }}</h1>
      </div>
      <div v-html="post.content" class="postContent"></div>
    </Container>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post(path: $path){
    title
    cover
    content
  }
}
</page-query>

<script>
export default {
  created() {
    console.log(this.$path);
  },
  computed: {
    post() {
      return this.$page.post;
    },
  },
};
</script>

<style lang='scss' scoped>
.cover {
  @apply relative bg-center bg-cover bg-yellow;
  padding-top: 56.25%;
  h1 {
    @apply absolute top-1/2 left-1/2;
    transform: translate(-50%, -50%);
  }
}
</style>

<style lang="scss">
.postContent {
  p {
    @apply leading-relaxed;
  }
  pre {
    @apply bg-white p-4 rounded-xl my-4;
    code {
      @apply text-black;
    }
  }
}
</style>