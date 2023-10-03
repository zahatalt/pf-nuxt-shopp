<template>
  <div class="home">
    <comp-h1>
      <img src="~/assets/img/home/heading1.png" alt="">
    </comp-h1>

    <lead>
      日本だけでなく世界から様々な文房具を集めています。品ぞろえは日本最大級！<br>
      定番のものからこんなものまで？というものも取り揃えております。<br>
      お気に入りの文房具をお探しください！
    </lead>

    <div class="intro">
      <comp-h2>
        どんな文房具がある？
      </comp-h2>

      <p class="intro__lead">
        ユニークな文房具達を少しだけ紹介します。もっと知りたい方は<NuxtLink to="/product" class="intro__link">こちら</NuxtLink>へ！
      </p>

      <div class="intro__item">
        <comp-h3>
          文字を書けば文字が消える！？
        </comp-h3>
        <div class="intro__img">
          <img src="~/assets/img/home/intro_img1.png" alt="">
        </div>
        <p>クレヨンの形をした消しゴムです。<br>
          見た目はクレヨンそのものなので、間違えて書こうとしたら文字が消えるなんてことも。。？</p>
      </div>

      <div class="intro__item">
        <comp-h3>
          文字を書けば文字が消える！？
        </comp-h3>
        <div class="intro__img">
          <img src="~/assets/img/home/intro_img2.png" alt="">
        </div>
        <p>クレヨンの形をした消しゴムです。<br>
          見た目はクレヨンそのものなので、書こうとしたら文字が消えるなんてことも。。？</p>
      </div>

      <btn_cmn btnLink="/shop" btnText="商品を見る" />

    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/css/pages/index.scss';
</style>

