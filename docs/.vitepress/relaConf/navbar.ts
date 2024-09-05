// docs/.vitepress/relaConf/navbar.ts
import {DefaultTheme} from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [
    {text: '首页', link: '/'},
    // {text:"个人作品展示",link:"works.md"},
    {
        text: 'Golang',
        items: [
            {
                text: '基础',
                link: '/golang/basic/' // 表示docs/column/Travel/index.md
            },
            {
                text: '工具包',
                link: '/golang/library/' // 表示docs/column/Growing/index.md
            }
        ]
    },
    {
        text: '测试',
        items: [
            {
                text: '基础',
                link: '/qa/foundation/' // 表示docs//qa/foundation/index.md
            },
            {
                text: '自动化',
                link: '/qa/automation/' // 表示docs/qa/automation/index.md
            }
            ,
            {
                text: '性能测试',
                link: '/qa/performance/' // 表示docs//qa/performance/index.md
            }
        ]
    },
    {
        text: '数据库',
        items: [
            {
                text: "基础",
                link: "/databases"
            },
            {
                text: 'Mysql',
                link: '/databases/mysql/' // 表示docs/column/Travel/index.md
            },
            {
                text: 'oracle',
                link: '/databases/oracle/' // 表示docs/column/Growing/index.md
            },
            {
                text: "sqlserve",
                link: "/databases/sqlserver/"
            },
            {
                text: "postgresql",
                link: "/databases/postgresql/"
            }
        ]
    },
    {
        text: 'Linux',
        items: [
            {
                text: 'Mysql',
                link: '/databases/mysql/' // 表示docs/column/Travel/index.md
            },
            {
                text: 'oracle',
                link: '/databases/oracle/' // 表示docs/column/Growing/index.md
            },
            {
                text: "sqlserve",
                link: "/databases/sqlserver/"
            }
        ]
    },
    {
        text: '关于我',
        items: [
            {text: 'Github', link: 'https://github.com/ZeroBugHero'},
            {
                text: '飞书社区',
                link: ''
            }
        ]
    }
];

