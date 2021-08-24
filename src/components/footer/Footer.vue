<template>
  <footer>
    <div class="bg-yellow h-32 flex items-center">
      <Container class="footer_top">
        <div>NEIWAD | Le Blog</div>
        <div>2021</div>
        <div></div>
      </Container>
    </div>
    <div class="bg-pink h-12 flex items-center justify-center">
      Gridsome + Tailwind + Netlify = LE BLOG
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  .footer_top {
    @apply flex flex-col items-center;
    @apply md:flex-row md:justify-between;
  }
}
</style>