<template>
  <g-link :to="post.path" class="postCard">
    <div
      class="img_container"
      v-bind:style="{
        backgroundImage: 'url(' + 'https://source.unsplash.com/random' + ')',
      }"
    >
      <span
        class="
          absolute
          bg-yellow bg-opacity-60
          top-2
          right-2
          px-3
          py-1
          rounded-full
          text-xs
        "
      >
        {{ post.date }}
      </span>
    </div>
    <div class="postCardContent">
      <span class="title">{{ post.title }}</span>
      <p class="text-white line-clamp-3">
        {{ post.description }}
      </p>
      <div class="flex flex-wrap mt-4">
        <div v-for="tag in post.tags" :key="tag.id" class="tag">
          #{{ tag.id }}
        </div>
      </div>
    </div>
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
  @apply bg-purple rounded-xl w-full flex flex-col overflow-hidden;
  .postCardContent {
    @apply p-6;
  }
  .title {
    @apply text-yellow font-black text-xl mb-4 block;
  }
  .img_container {
    @apply relative bg-center bg-cover bg-yellow;
    padding-top: 56.25%;
  }
  .tag {
    @apply bg-pink mr-2 mt-2 px-2 py-1 rounded;
  }
}
</style>