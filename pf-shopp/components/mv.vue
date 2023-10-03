<template>

  <div class="mv">
    <div class="mv__img mv__img1">
      <img src="~/assets/img/mv_img1.png" alt="">
    </div>
    <div class="mv__img mv__img2">
      <img src="~/assets/img/mv_img2.png" alt="">
    </div>
    <div class="mv__img mv__img3">
      <img src="~/assets/img/mv_img3.png" alt="">
    </div>
    <div class="mv__img mv__img4">
      <img src="~/assets/img/mv_img4.png" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .mv{
    position: relative;
    z-index: 0;
    width: 100%;
    &__img{
      position: absolute;
    }
    &__img1{
      top: 120px;
      left: -30px;
    }
    &__img2{
      top: -50px;
      left: 30px;
    }
    &__img3{
      top: -80px;
      right: 50px;
    }
    &__img4{
      top: 90px;
      right: -100px;
    }
  }
</style>