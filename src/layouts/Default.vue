<template>
  <div class="layout">
    <Navigation />
    <div class="content">
      <slot />
    </div>
    <Footer />
  </div>
</template>



<script>
import Navigation from "@/components/nav/Navigation";
import Footer from "@/components/footer/Footer";
export default {
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style>
.layout {
  @apply bg-darkblue min-h-screen;
}
.content {
  @apply min-h-screen py-24;
}
</style>
