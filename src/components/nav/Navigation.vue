<template>
  <header>
    <nav>
      <g-link to="/" class="text-yellow font-black text-2xl">
        NEIWAD
        <span class="text-pink text-sm">Le blog</span>
      </g-link>
      <div class="flex-1"></div>
      <g-link class="nav__link" to="/">Home</g-link>
      <g-link class="nav__link" to="/about/">About</g-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  @apply bg-darkblue fixed top-0 w-full z-50;
}
nav {
  @apply mx-auto container px-7 h-16 flex items-center;
  .nav__link {
    @apply text-purple;
  }
}
</style>