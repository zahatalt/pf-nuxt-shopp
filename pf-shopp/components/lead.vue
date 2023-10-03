<template>
  <div class="lead">
    <p class="lead__text">
      <slot />
    </p>
  </div>
</template>

<style lang="scss" scoped>
  .lead{
    margin-bottom: 100px;
    font-size: 20px;
    &__text{
      display: inline-block;
    }
  }
</style>