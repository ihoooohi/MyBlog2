import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "技术博客",
  description: "Obsidian Notes 技术笔记",
  lang: 'zh-CN',
  base: process.env.VITEPRESS_BASE || '/',
  lastUpdated: true,
  cleanUrls: false,
  trailingSlash: true,
  ignoreDeadLinks: true,
  
  // Head 配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]
  ],
  
  themeConfig: {
    siteTitle: '技术博客',
    
    nav: [
      { text: '首页', link: '/' },
      { text: 'LeetCode', link: '/leetcode-notes/' },
      { text: '关于', link: '/about' }
    ],
    
    search: {
      provider: 'local'
    },
    
    sidebar: {
      '/leetcode-notes/': [
        {
          text: 'LeetCode 笔记',
          items: [
            { text: '滑动窗口', link: '/leetcode-notes/09-sliding-window/sliding-window/' },
            { text: '二分查找', link: '/leetcode-notes/02-binary-search/binary-search/' },
            { text: '递归', link: '/leetcode-notes/10-recursion/recursion/' },
            { text: 'LRU 缓存', link: '/leetcode-notes/01-lru/lru/' },
            { text: '二叉树', link: '/leetcode-notes/03-binary-tree/binary-tree-basics/' },
            { text: '动态规划', link: '/leetcode-notes/04-dp/dynamic-programming/' },
            { text: '数组', link: '/leetcode-notes/08-array/array/' },
            { text: '链表', link: '/leetcode-notes/11-linked-list/linked-list-basics/' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    
    footer: {
      message: 'Powered by VitePress + Obsidian',
      copyright: 'Copyright © 2024'
    },
    
    outline: {
      level: [2, 3],
      label: '目录'
    }
  }
})
