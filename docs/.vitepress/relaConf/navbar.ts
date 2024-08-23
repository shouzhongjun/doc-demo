
// docs/.vitepress/relaConf/navbar.ts
import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
    { text: '首页', link: '/' },
    // {text:"个人作品展示",link:"works.md"},
    { text: '关于作者', link: 'https://github.com/ZeroBugHero' },
  {
    text: 'Golang',
    items: [
      {
        text: '基础',
        link: '/column/Travel/' // 表示docs/column/Travel/index.md
      },
      {
        text: '包',
        link: '/golang/包/' // 表示docs/column/Growing/index.md
      }
    ]
  },
  {
    text: '关于我',
    items: [
      { text: 'Github', link: 'https://github.com/Jacqueline712' },
      {
        text: '掘金',
        link: 'https://juejin.cn/user/3131845139247960/posts'
      },
      {
        text: '飞书社区',
        link: 'https://pzfqk98jn1.feishu.cn/wiki/space/7193915595975491587?ccm_open_type=lark_wiki_spaceLink'
      }
    ]
  }
];

