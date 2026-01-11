# Cloudflare Pages 部署配置

## 仓库已推送成功

GitHub 仓库: https://github.com/Andy115951/Meridians

---

## Cloudflare Pages 配置步骤

### 1. 访问 Cloudflare Dashboard
https://dash.cloudflare.com/

### 2. 创建 Pages 项目
1. 点击左侧菜单 "Workers & Pages"
2. 点击 "Create application"
3. 选择 "Pages" 标签
4. 点击 "Connect to Git"

### 3. 连接 GitHub 仓库
1. 找到并选择 `Meridians` 仓库
2. 点击 "Begin setup"

### 4. 配置构建设置

```
Project name: meridians (或自定义)

Production branch: main

Build settings:
┌─────────────────────────────────────────┐
│ Build command:     npm run build        │
│ Build output directory:  dist           │
│ Root directory:     / (留空)            │
└─────────────────────────────────────────┘
```

### 5. 环境变量（无需配置）

此项目不需要环境变量，跳过此步骤。

### 6. 部署
点击 "Save and Deploy" 开始部署。

---

## 部署完成后

你会获得一个访问地址，格式为：
```
https://meridians.pages.dev
```

或你的自定义域名。

---

## 构建文件说明

| 文件 | 说明 |
|------|------|
| `_headers` | HTTP 安全响应头配置 |
| `package.json` | 项目依赖和构建脚本 |
| `vite.config.js` | Vite 构建配置 |

---

## 自动部署配置

配置完成后，每次推送到 `main` 分支会自动触发构建部署。
