/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Ronfini & Garcia Advocacia',
  author: 'Ronfini & Garcia',
  headerTitle: '',
  description: 'Ronfini & Garcia Advocacia',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',
  siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  email: 'ronfinigarcia@gmail.com',
  phone: '+55 21 99999-9999', // Adicionando telefone
  whatsapp1: '5521984124238', // Adicionando WhatsApp
  whatsapp2: '5521975721515', // Adicionando WhatsApp
  address: 'Rua Exemplo, 123, Bairro, Cidade, Estado, 00000-000', // Adicionando endereço
  instagram: 'https://www.instagram.com',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
  },
}

module.exports = siteMetadata
