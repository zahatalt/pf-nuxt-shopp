<template>
  <div class="shop">
    <comp-h1>
      オンラインショップ
    </comp-h1>
    
    <lead>
      文房具があなたを待っています。
    </lead>

    <div class="shop__content">
      <div class="shop__inner">
        <div class="shop__detail" v-if="show == '1'">
          <comp-h2>
            書くもの
          </comp-h2>

          <div class="shop__item-wrapper">
            <div class="shop__item">
              <img class="shop__img" src="~/assets/img/home/intro_img1.png" alt="">
              <div class="shop__explanation">
                <div class="shop__name">鉛筆</div>
                <span>七色に光る鉛筆です。七色に光る鉛筆です。七色に光る鉛筆です。七色に光る鉛筆です。</span>
                <span class="shop__price">200円</span>
                <button class="shop__buy yet">カートに入れる</button>
              </div>
            </div>
            <div class="shop__item">
              <img class="shop__img" src="~/assets/img/home/intro_img1.png" alt="">
              <div class="shop__explanation">
                <div class="shop__name">鉛筆</div>
                <span>七色に光る鉛筆です。七色に光る鉛筆です。七色に光る鉛筆です。七色に光る鉛筆です。</span>
                <span class="shop__price">200円</span>
                <button class="shop__buy yet">カートに入れる</button>
              </div>
            </div>
            <div class="shop__item">
              <img class="shop__img" src="~/assets/img/home/intro_img1.png" alt="">
              <div class="shop__explanation">
                <div class="shop__name">鉛筆</div>
                <span>七色に光る鉛筆です。七色に光る鉛筆です。七色に光る鉛筆です。七色に光る鉛筆です。</span>
                <span class="shop__price">200円</span>
                <button class="shop__buy yet">カートに入れる</button>
              </div>
            </div>
          </div>
        </div>

        <div class="shop__detail" v-else-if="show == '2'">
          <comp-h2>
            消すもの
          </comp-h2>

          <div class="shop__item-wrapper">
            <div class="shop__item">
              <img class="shop__img" src="~/assets/img/home/intro_img1.png" alt="">
              <div class="shop__explanation">
                <div class="shop__name">消しゴム</div>
                <span>七色に光る消しゴムです。七色に光る消しゴムです。七色に光る消しゴムです。七色に光る消しゴムです。</span>
                <span class="shop__price">100円</span>
                <button class="shop__buy yet">カートに入れる</button>
              </div>
            </div>
            <div class="shop__item">
              <img class="shop__img" src="~/assets/img/home/intro_img1.png" alt="">
              <div class="shop__explanation">
                <div class="shop__name">消しゴム</div>
                <span>七色に光る消しゴムです。七色に光る消しゴムです。七色に光る消しゴムです。七色に光る消しゴムです。</span>
                <span class="shop__price">100円</span>
                <button class="shop__buy yet">カートに入れる</button>
              </div>
            </div>
            <div class="shop__item">
              <img class="shop__img" src="~/assets/img/home/intro_img1.png" alt="">
              <div class="shop__explanation">
                <div class="shop__name">消しゴム</div>
                <span>七色に光る消しゴムです。七色に光る消しゴムです。七色に光る消しゴムです。七色に光る消しゴムです。</span>
                <span class="shop__price">100円</span>
                <button class="shop__buy yet">カートに入れる</button>
              </div>
            </div>
          </div>
        </div>

        <div class="shop__detail" v-else-if="show == '3'">
          <comp-h2>
            書かれるもの
          </comp-h2>
          <div class="shop__item-wrapper">
            <div class="shop__item">
              <img class="shop__img" src="~/assets/img/home/intro_img1.png" alt="">
              <div class="shop__explanation">
                <div class="shop__name">手帳</div>
                <span>七色に光る手帳です。七色に光る手帳です。七色に光る手帳です。七色に光る手帳です。</span>
                <span class="shop__price">500円</span>
                <button class="shop__buy yet">カートに入れる</button>
              </div>
            </div>
            <div class="shop__item">
              <img class="shop__img" src="~/assets/img/home/intro_img1.png" alt="">
              <div class="shop__explanation">
                <div class="shop__name">手帳</div>
                <span>七色に光る手帳です。七色に光る手帳です。七色に光る手帳です。七色に光る手帳です。</span>
                <span class="shop__price">500円</span>
                <button class="shop__buy yet">カートに入れる</button>
              </div>
            </div>
            <div class="shop__item">
              <img class="shop__img" src="~/assets/img/home/intro_img1.png" alt="">
              <div class="shop__explanation">
                <div class="shop__name">手帳</div>
                <span>七色に光る手帳です。七色に光る手帳です。七色に光る手帳です。七色に光る手帳です。</span>
                <span class="shop__price">500円</span>
                <button class="shop__buy yet">カートに入れる</button>
              </div>
            </div>
          </div>
        </div>

        <div class="shop__detail" v-else-if="show == '4'">
          <comp-h2>
            貼るもの
          </comp-h2>
          制作中
        </div>

        <div class="shop__detail" v-else-if="show == '5'">
          <comp-h2>
            測るもの
          </comp-h2>
          制作中
        </div>

        <div class="shop__category">
          <comp-h2>
            カテゴリー
          </comp-h2>
          <ul class="shop__menu">
            <li class="shop__list" @click="select('1')" :class="{'active': show == '1'}">書くもの</li>
            <li class="shop__list" @click="select('2')" :class="{'active': show == '2'}">消すもの</li>
            <li class="shop__list" @click="select('3')" :class="{'active': show == '3'}">書かれるもの</li>
            <li class="shop__list" @click="select('4')" :class="{'active': show == '4'}">貼るもの</li>
            <li class="shop__list" @click="select('5')" :class="{'active': show == '5'}">測るもの</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>


<script setup>

  const show = ref(1)

  // タブ切り替え
  const select = (num) => {
    show.value = num;
  }

</script>

<style lang="scss" scoped>

  :deep(.heading__h2){
    padding: 0.6em;
    background: $blue1;
    position: relative;
    &::before{
      content: "";
      width: 35px;
      height: 100%;
      background: #fff;
      position: absolute;
      top: 0;
      left: -30px;
    }
  } 

  .shop{
    &__inner{
      display: flex;
      justify-content: space-between;
    }

    &__item{
      margin-bottom: 50px;
      padding: 35px;
      width: 800px;
      display: flex;
      text-align: left;
      background: #fff url(/assets/img/shop/item_bg1.png) bottom right no-repeat;
    }

    &__img{
      width: 200px;
      height: 200px;
      margin: auto 0;
    }

    &__explanation{
      padding: 0 25px;
      position: relative;
      color: #000;
    }

    &__name{
      margin-bottom: 1em;
      font-size: 22px;
    }
    
    &__price{
      position: absolute;
      top: 0;
      right: 0;
      text-align: center;
      font-size: 22px;
      color: #df4747;
      display: block;
    }

    &__buy{
      margin: 50px auto 0;
      @include btnCmn(200px, 40px, 18px);
    }

    &__menu{
      width: 300px;
      background: #fff;
    }

    &__list{
      padding: 1em;
      color: #000;
      background: url(/assets/img/shop/list_bg1.png) no-repeat;
      background-size: contain;
      border-left: 2px solid #000;
      @include gFontKiwi;
      &:last-child{
        background: url(/assets/img/shop/list_bg2.png) no-repeat;
        background-size: contain;
      }
      &.active{
        font-weight: bold;
      }
    }
  }
</style>
