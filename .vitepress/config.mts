import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/ZhiYuDoc/",
  title: "纸语",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '服务条款', link: '/TermOfUse' },
      { text: '隐私政策', link: '/Privacy' }
    ],

    footer: {
      copyright: '<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2023028894号-1</a> Copyright © 2023 Ge Peng'
    },

//    sidebar: [
//      {
//        text: 'Examples',
//        items: [
//          { text: 'Markdown Examples', link: '/markdown-examples' },
//          { text: 'Runtime API Examples', link: '/api-examples' }
//        ]
//      }
//    ],

//    socialLinks: [
//      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
//    ]
  }
})
