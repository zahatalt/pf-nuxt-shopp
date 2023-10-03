<template>
  <div class="btn">
    <NuxtLink :to="btnLink" class="btn__inner">
      {{ btnText }}
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
  .btn{
    width: 400px;
    height: 60px;
    margin: 0 auto;
    background: $yellow1;
    border-radius: 60px;
    &__inner{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 22px;
      color: #000;
      @include gFontStick;
    }
  }
</style>

<script>
export default {
    props: ['btnLink','btnText']
}
</script>