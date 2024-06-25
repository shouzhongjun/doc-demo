import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "测试文档",
 base: '/doc-demo/',
  description: "一个测试记录的文档",
  head: [["link", { rel: "icon", href: "/image.png" }]],  // icon 图标
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/image.png',
    outlineTitle: "目录",
    outline: [2,6],
   
    nav: [
      { text: '首页', items:

      [
        {text:"首页",link:"/"},
        {text:"markdown实例",link:"/markdown-examples"},

      ]},
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'react', link: '/front-end/react' },
      { text: '两边栏', link: '/两边栏' }
    ],

    // sidebar: { "/front-end/react": set_sidebar("/front-end/react") },
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer:{
      copyright: '© 2024 My Awesome Project',
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
     
  
})
