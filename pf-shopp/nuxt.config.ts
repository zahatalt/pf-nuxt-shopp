// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  // head
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: '文房具ショップ',
      meta: [{ name: 'description', content: 'Nuxt文房具' }],
      // link: [{ rel: 'icon', href: '/icon.png' }],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kiwi+Maru&family=Noto+Sans+JP:wght@400;700&family=Stick&display=swap' },
      ],
    },
  },


  // css
  css: [
    "/assets/css/reset.css",
    "/assets/css/style.scss",
  ],
  // Viteのビルドの際に、SCSSのパーシャルファイルを読み込むよう指定する
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/_common.scss";',
        },
      },
    },
  },
})
