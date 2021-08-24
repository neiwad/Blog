<template>
  <g-link :to="post.path" class="postCard">
    <span class="title">{{ post.title }}</span>
    <p class="text-white">
      {{ post.description }}
    </p>
  </g-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang='scss' scoped>
.postCard {
  @apply bg-purple rounded-xl p-6 block;
  .title {
    @apply text-yellow font-black text-xl;
  }
}
</style>