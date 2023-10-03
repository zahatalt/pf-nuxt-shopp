<template>
  <div class="heading">
    <h1 class="heading__h1">
      <slot />
    </h1>
  </div>
</template>

<style lang="scss" scoped>
  .heading{
    margin-bottom: 50px;
    &__h1{
      @include gFontStick;
      font-size: 32px;
    }
  } 
</style>