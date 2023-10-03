<template>
  <NuxtLayout>
		<main class="main">
			<mv />
			<div class="main__inner">
				<NuxtPage />
			</div>
		</main>
	</NuxtLayout>
</template>

<script>

</script>

<style>
/* .layout-enter-active,
.layout-leave-active {
  transition: opacity 0.2s;
}
.layout-enter-from,
.layout-leave-active {
  opacity: 0;
} */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s;
}
.page-enter-from,
.page-leave-active {
  opacity: 0;
}
</style>