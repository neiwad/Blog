<template>
  <div class="flex flex-wrap">
    <div v-for="tag in tags" :key="tag.id" class="tag">#{{ tag.id }}</div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang='scss' scoped>
.tag {
  @apply bg-pink mr-2 mt-2 px-2 py-1 rounded;
}
</style>