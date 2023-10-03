<template>
  <div class="product">
    <comp-h1>
      いろいろな文房具
    </comp-h1>
    
    <lead>
      日本、世界の文房具を紹介します！
    </lead>
    
    <div class="product-content">

      <div class="tab">
        <ul class="tab__item-group">
          <li class="tab__item" @click="select('1')" :class="{'active': show == '1'}">
            書くもの
          </li>
          <li class="tab__item" @click="select('2')" :class="{'active': show == '2'}">
            消すもの
          </li>
          <li class="tab__item" @click="select('3')" :class="{'active': show == '3'}">
            書かれるもの
          </li>
          <li class="tab__item" @click="select('4')" :class="{'active': show == '4'}">
            貼るもの
          </li>
        </ul>

        <div id="app" class="tab__content-group">
          <!-- 書くもの -->
          <div v-if="show == '1'" class="tab__content">
            <div v-for="item in product1" class="product__item">
              <!-- タイトル -->
              <comp-h3>
                {{ item.title }}
              </comp-h3>
              <div class="product__detail">
                <span class="product__notes">詳細は画像を<span class="pc">クリック！</span><span class="sp">タップ！</span></span>
                <div class="product__img-wrapper" :class='{ active : modal == item.num}'>
                  <!-- モーダル背景 -->
                  <div class="product__img-bg" @click="modalClose()" :class='{ active : modal == item.num}'></div>
                  <!-- モーダル本体 -->
                  <div id="product__img-group" class="product__img-group" @click="modalOpen(item.num)" :class='{ active : modal == item.num}'>
                    <img class="product__img" src="~/assets/img/product/intro_img1.png" alt="">
                    <p class="product__text" :class='{ active : modal == item.num}'>
                      {{ item.detail }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 消すもの -->
          <div v-else-if="show == '2'" class="tab__content">
            <div v-for="item in product2" class="product__item">
              <!-- タイトル -->
              <comp-h3>
                {{ item.title }}
              </comp-h3>
              <div class="product__detail">
                <span class="product__notes">詳細は画像を<span class="pc">クリック！</span><span class="sp">タップ！</span></span>
                <div class="product__img-wrapper" :class='{ active : modal == item.num}'>
                  <!-- モーダル背景 -->
                  <div class="product__img-bg" @click="modalClose()" :class='{ active : modal == item.num}'></div>
                  <!-- モーダル本体 -->
                  <div id="product__img-group" class="product__img-group" @click="modalOpen(item.num)" :class='{ active : modal == item.num}'>
                    <img class="product__img" src="~/assets/img/product/intro_img1.png" alt="">
                    <p class="product__text" :class='{ active : modal == item.num}'>
                      {{ item.detail }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 書かれるもの -->
          <div v-else-if="show == '3'" class="tab__content">
            <div v-for="item in product3" class="product__item">
              <!-- タイトル -->
              <comp-h3>
                {{ item.title }}
              </comp-h3>
              <div class="product__detail">
                <span class="product__notes">詳細は画像を<span class="pc">クリック！</span><span class="sp">タップ！</span></span>
                <div class="product__img-wrapper" :class='{ active : modal == item.num}'>
                  <!-- モーダル背景 -->
                  <div class="product__img-bg" @click="modalClose()" :class='{ active : modal == item.num}'></div>
                  <!-- モーダル本体 -->
                  <div id="product__img-group" class="product__img-group" @click="modalOpen(item.num)" :class='{ active : modal == item.num}'>
                    <img class="product__img" src="~/assets/img/product/intro_img1.png" alt="">
                    <p class="product__text" :class='{ active : modal == item.num}'>
                      {{ item.detail }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 貼るもの -->
          <div v-else-if="show == '4'" class="tab__content">
            <div v-for="item in product4" class="product__item">
              <!-- タイトル -->
              <comp-h3>
                {{ item.title }}
              </comp-h3>
              <div class="product__detail">
                <span class="product__notes">詳細は画像を<span class="pc">クリック！</span><span class="sp">タップ！</span></span>
                <div class="product__img-wrapper" :class='{ active : modal == item.num}'>
                  <!-- モーダル背景 -->
                  <div class="product__img-bg" @click="modalClose()" :class='{ active : modal == item.num}'></div>
                  <!-- モーダル本体 -->
                  <div id="product__img-group" class="product__img-group" @click="modalOpen(item.num)" :class='{ active : modal == item.num}'>
                    <img class="product__img" src="~/assets/img/product/intro_img1.png" alt="">
                    <p class="product__text" :class='{ active : modal == item.num}'>
                      {{ item.detail }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <btn_cmn btnLink="/shop" btnText="商品を見る" />

      </div>

    </div>
  </div>
</template>

<script setup>

  const show = ref(1),
        modal = ref(false);

  const product1 = ref(
          [
            {num:1, title: "削りたくなる鉛筆", detail: '芯の周りに虹色のテープが巻かれており削ると虹が生まれます！\nついつい削りすぎてしまいそう。' },
            {num:2, title: "見た目も値段も一流", detail: '芯の周りに虹色のテープが巻かれており削ると虹が生まれます！\nついつい削りすぎてしまいそう。' },
            {num:3, title: "でかすぎる鉛筆", detail: '芯の周りに虹色のテープが巻かれており削ると虹が生まれます！\nついつい削りすぎてしまいそう。' },
          ]
        ),
        product2 = ref(
          [
            {num:1, title: "文字を書けば文字が消える！？", detail: 'クレヨンの形をした消しゴムです。\n見た目はクレヨンそのものなので、書こうとしたら文字が消えるなんてことも。。？' },
            {num:2, title: "リアルすぎる消しゴム", detail: 'クレヨンの形をした消しゴムです。\n見た目はクレヨンそのものなので、書こうとしたら文字が消えるなんてことも。。？' },
            {num:3, title: "でかすぎる消しゴム", detail: 'クレヨンの形をした消しゴムです。\n見た目はクレヨンそのものなので、書こうとしたら文字が消えるなんてことも。。？' },
            {num:4, title: "beautiful eraser", detail: 'クレヨンの形をした消しゴムです。\n見た目はクレヨンそのものなので、書こうとしたら文字が消えるなんてことも。。？' },
          ]
        ),
        product3 = ref(
          [
            {num:1, title: "どう見ても木", detail: '木のような見た目をした付箋。\n減っていくのがもったいない。' },
          ]
        ),
        product4 = ref(
          [
            {num:1, title: "絵柄付きのテープのり", detail: 'どこまでも引いてしまいそうなテープのり。' },
            {num:2, title: "強すぎる糊", detail: 'どこまでも引いてしまいそうなテープのり。' },
          ]
  )
  
        // タブ切り替え
  const select = (num) => {
          show.value = num;
        },
        // モーダル
        modalOpen = (e) => {
          modal.value = e;
        },
        modalClose = () => {
          modal.value = false;
        }
</script>


<style lang="scss" scoped>

.tab{
  &__item-group {
    display: flex;
    justify-content: center;
  }
  &__item {
    margin-right: 20px;
    padding: 10px 20px;
    box-sizing: border-box;
    text-align: center;
    border-radius: 5px;
    border: 2px solid $mainColor1;
    cursor: pointer;
  }
  &__item.active {
    border: 2px solid #fff;
  }
  &__content-group {
    margin-bottom: 50px;
    padding-top: 25px;
  }
  &__content {
    padding: 25px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    border: 4px solid #fff;
    border-radius: 10px;
  }
}

.menu-enter-active {
  transition: opacity 0.5s;
}
.menu-leave-active {
  transition: opacity 5s;
}
.menu-enter {
  opacity: 0;
}
.menu-enter-from {
  opacity: 0;
}
.menu-enter-to {
  opacity: 1;
}
.menu-leave {
  opacity: 1;
}
.menu-leave-to {
  opacity: 0;
}
.product{
  &__item{
    margin-bottom: 100px;
    padding: 25px;
  }
  
  &__lead{
    margin-bottom: 50px;
  }
  
  &__detail{
    width: 450px;
    height: 450px;
    position: relative;
    border: 4px dashed #fff;
  }
  
  &__notes{
    padding-right: 1em;
    width: 275px;
    display: flex;
    align-items: center;
    position: absolute;
    top: -22px;
    left: 50%;
    transform: translateX(-50%);
    background: $mainColor1;
    &::before{
      margin: 0 1em;
      width: 2em;
      height: 2em;
      content: "";
      display: inline-block;
      background: url(/assets/img/product/intro_icon.png) center / contain no-repeat;
    }
  }

  &__img-wrapper{
    margin-bottom: 25px;
    padding: 20px;
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    transition: all 0.5s ease;
    // &.active{
    //   width: 100dvw;
    //   height: 100dvh;
    //   // position: fixed;
    //   top: 0;
    //   left: 0;
    //   // background-color: #000000;
    // }
  }

  &__img-bg{
    width: 100dvw;
    height: 100dvh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 8000;
    border: 2px solid #00f;
    transition: all 0.5s ease;
    opacity: 0;
    pointer-events: none;
    &.active{
      background: rgba($color: #000000, $alpha: 0.3);
      overflow: hidden;
      opacity: 1;
      pointer-events: initial;
    }
  }

  &__img-group{
    display: flex;
    align-items: center;
    position: absolute;
    // top: 0;
    // left: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5000;
    // transform: translate(0, 0);
    transition: all 0.5s ease;
    &.active{
      background: #fff;
      position: fixed;
      z-index: 9999;
      // top: 50%;
      // left: 50%;
      // transform: translate(-50%, -50%);
    }
  }

  &__img{
    width: 400px;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    position: relative;
    z-index: 6000;
    cursor: pointer;
  }

  &__text{
    padding: 2em;
    width: 0;
    box-sizing: border-box;
    position: relative;
    z-index: 7000;
    display: none;
    color: #000;
    transition: all 2s ease;
    &.active{
      width: 600px;
      display: block;
    }
  }
}


</style>