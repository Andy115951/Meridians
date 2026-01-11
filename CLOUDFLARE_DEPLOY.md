# Cloudflare Pages 部署指南

## 方式一：通过 Git 仓库部署（推荐）

### 步骤：

1. **推送代码到 GitHub**
   ```bash
   cd e:\javacode\workspace4vscode\Meridians
   git init
   git add .
   git commit -m "Initial commit"
   # 创建 GitHub 仓库后
   git remote add origin https://github.com/你的用户名/meridians.git
   git push -u origin main
   ```

2. **在 Cloudflare 创建 Pages 项目**
   - 访问 https://dash.cloudflare.com/
   - 进入 "Workers & Pages" → "Create application" → "Pages" → "Connect to Git"
   - 选择你的 GitHub 仓库
   - 构建设置：
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
   - 点击 "Save and Deploy"

3. **获取访问地址**
   部署完成后，你会获得一个 `https://your-project.pages.dev` 的地址

---

## 方式二：通过 Wrangler CLI 直接部署

### 安装 Wrangler
```bash
npm install -g wrangler
```

### 登录 Cloudflare
```bash
wrangler login
```

### 部署
```bash
cd e:\javacode\workspace4vscode\Meridians
wrangler pages publish dist --project-name=meridians
```

---

## 方式三：通过 Cloudflare Dashboard 上传（手动）

1. 运行 `npm run build` 构建
2. 访问 https://dash.cloudflare.com/
3. 进入 "Workers & Pages" → "Create application" → "Pages" → "Upload assets"
4. 上传 `dist` 文件夹内的所有文件
5. 部署完成

---

## 自定义域名（可选）

1. 在 Cloudflare Pages 项目设置中
2. 进入 "Custom domains"
3. 添加你的域名（如 `meridians.yourdomain.com`）
4. 按提示配置 DNS 记录

---

## 构建输出说明

构建后的文件位于 `dist/` 目录：
- `index.html` - 入口页面
- `assets/*.css` - 样式文件
- `assets/*.js` - JavaScript 脚本

---

## 常见问题

### 构建失败？
```bash
# 清理缓存重新构建
rm -rf node_modules dist
npm install
npm run build
```

### 路由问题？
单页应用需要配置 `routes` 配置（如果通过直接上传方式）
在 `_routes.json` 中添加：
```json
{
  "version": 1,
  "include": ["/*"],
  "exclude": ["/assets/*"]
}
```

---

## 部署后的优势

- **全球 CDN** - 自动分发到全球 300+ 节点
- **免费 SSL** - 自动 HTTPS
- **无限带宽** - 免费套餐无带宽限制
- **快速部署** - Git 推送自动触发构建
- **自定义域名** - 支持绑定自己的域名

---

*更新日期: 2026-01-11*
