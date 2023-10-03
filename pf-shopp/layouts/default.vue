<template>
	<header class="header">
		<nav class="nav">
			<ul class="nav__list">
				<li class="nav__item"><NuxtLink to="/" class="nav__link" active-class="nav__link--active">ホーム</NuxtLink></li>
				<li class="nav__item"><NuxtLink to="/product" class="nav__link" active-class="nav__link--active">いろんな文房具</NuxtLink></li>
				<li class="nav__item"><NuxtLink to="/shop" class="nav__link" active-class="nav__link--active">ショップ</NuxtLink></li>
				<li class="nav__item"><NuxtLink to="/contact" class="nav__link" active-class="nav__link--active">お問い合わせ</NuxtLink></li>
			</ul>
		</nav>

		<div class="basket yet">
			<div class="basket__inner">
				<img class="basket__img" src="~/assets/img/basket_black.png" alt="">
				<span class="basket__unit">1</span>
			</div>
		</div>
	</header>

	<slot />

	<footer class="footer">
		<div class="footer__img">
			<img src="~/assets/img/footer_bg.png" alt="">
		</div>
		<div class="footer__inner">
			<p class="footer__text">&copy;ぶんぼうぐ</p>
		</div>
	</footer>
</template>