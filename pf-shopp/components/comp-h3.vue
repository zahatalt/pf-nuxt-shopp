<template>
  <div class="heading">
    <h3 class="heading__h3">
      <slot />
    </h3>
  </div>
</template>

<style lang="scss" scoped>
  .heading{
    margin-bottom: 30px;
    &__h3{
      @include gFontKiwi;
      font-size: 24px
    }
  } 
</style>