# 技术博客 (Quartz Blog)

基于 VitePress + Obsidian 构建的 LeetCode 算法题解技术博客。

## 📖 项目简介

这是一个记录 LeetCode 算法题解和个人技术笔记的静态博客网站，使用 Obsidian 撰写笔记，通过 VitePress 构建发布。

## 🛠 技术栈

- **框架**: [VitePress](https://vitepress.dev/) 1.6.4
- **前端**: Vue 3.5.27
- **构建工具**: Vite
- **内容管理**: Obsidian
- **部署**: GitHub Pages

## 📚 主要内容

### LeetCode 算法笔记

- 🏁 **滑动窗口** (Sliding Window)
- 🔍 **二分查找** (Binary Search)
- 🌳 **二叉树** (Binary Tree)
- 📊 **动态规划** (Dynamic Programming)
- 🔙 **回溯算法** (Backtracking)
- 📝 **链表** (Linked List)
- 📦 **数组** (Array)
- 👆 **指针技巧** (Two Pointers)
- 🔄 **递归** (Recursion)
- 🗂 **LRU 缓存** (LRU Cache)

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

### 项目结构

```
quartz-blog/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts      # VitePress 配置文件
│   │   └── theme/          # 主题文件
│   ├── leetcode-notes/     # LeetCode 笔记
│   ├── public/             # 静态资源
│   ├── index.md            # 首页
│   └── about.md            # 关于页面
├── package.json
└── README.md
```

## 🎯 使用方法

1. **编辑笔记**: 在 `docs/leetcode-notes/` 目录下使用 Obsidian 编辑 `.md` 文件
2. **添加分类**: 在 `docs/` 下创建新目录
3. **更新侧边栏**: 修改 `docs/.vitepress/config.mts` 中的 sidebar 配置
4. **本地预览**: 运行 `npm run dev` 查看效果
5. **部署发布**: 推送到 GitHub，触发 GitHub Pages 自动部署

## 📝 配置说明

### 导航栏配置

在 `.vitepress/config.mts` 中配置导航菜单：

```typescript
nav: [
  { text: '首页', link: '/' },
  { text: 'LeetCode', link: '/leetcode-notes/' },
  { text: '关于', link: '/about' }
]
```

### 侧边栏配置

```typescript
sidebar: {
  '/leetcode-notes/': [
    {
      text: 'LeetCode 笔记',
      items: [
        { text: '滑动窗口', link: '/leetcode-notes/09-sliding-window/' },
        // 更多链接...
      ]
    }
  ]
}
```

## 🔗 相关链接

- [VitePress 文档](https://vitepress.dev/)
- [LeetCode](https://leetcode.cn/)
- [Obsidian](https://obsidian.md/)

## 📄 许可证

MIT License

---

*Built with ❤️ using VitePress + Obsidian*
