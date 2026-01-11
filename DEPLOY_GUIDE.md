# 部署指南

## 项目已准备就绪

- Git 仓库已初始化
- 代码已提交 (commit: 3510d3a)
- 构建文件已生成 (dist/ 目录)

---

## 方式一：Cloudflare Pages + GitHub（推荐）

### 1. 创建 GitHub 仓库
访问 https://github.com/new 创建仓库 `meridians`

### 2. 推送代码
```bash
cd e:\javacode\workspace4vscode\Meridians
git remote add origin https://github.com/你的用户名/meridians.git
git branch -M main
git push -u origin main
```

### 3. 在 Cloudflare 连接
- https://dash.cloudflare.com/ → Workers & Pages → Create
- Build command: `npm run build`
- Output directory: `dist`

---

## 方式二：使用 Wrangler CLI（需要 Node.js 20+）

### 升级 Node.js
下载安装 Node.js 20+: https://nodejs.org/

### 部署
```bash
npm install -g wrangler
wrangler login
wrangler pages publish dist --project-name=meridians
```

---

## 部署后访问地址
https://meridians.pages.dev
