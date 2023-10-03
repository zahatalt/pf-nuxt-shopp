<template>
  <div class="heading">
    <h2 class="heading__h2">
      <slot />
    </h2>
  </div>
</template>

<style lang="scss" scoped>
  .heading{
    margin-bottom: 40px;
    &__h2{
      @include gFontKiwi;
      font-size: 28px
    }
  } 
</style>