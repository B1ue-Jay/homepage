# 个人主页（Astro）

个人主页，布局/字体/排版设计为 Roboto + Quicksand、柔和渐变、999px 胶囊按钮，
中性/冷调配色，并内置 **4 套主题配色，改 1 行即可整站切换**。

- 框架：[Astro](https://astro.build/)（静态站点，默认零 JS，加载快、利于 SEO）
- 字体：Roboto（正文/标题）+ Quicksand（CTA 点缀），由 Google Fonts 引入
- 托管：推荐 GitHub Pages（已附带自动部署工作流），或 Cloudflare Pages

---

## 一、本地开发

> 本项目用 **专属 conda 环境 `homepage`（Node 20）**，
> 不使用 / 污染 conda base。所有命令都通过把该环境的 bin 前置到 PATH 来运行。

激活环境后开发（二选一）：

**方式 A：先激活环境（推荐，日常用）**

```bash
conda activate homepage
npm install      # 仅首次：依赖装进项目本地 node_modules
npm run dev      # 启动开发服务器 http://localhost:4321
npm run build    # 生成静态站点到 dist/
npm run preview  # 本地预览构建产物
```

**方式 B：不激活，直接指定环境（脚本/一次性命令用）**

```bash
PATH="/opt/anaconda3/envs/homepage/bin:$PATH" npm run dev
```

---

## 二、改内容（日常基本只动这几处）

| 想改什么 | 改哪里 |
| --- | --- |
| 姓名 / 头衔 / 学校 / 简介 / 邮箱 / 社交链接 / 时间线 | [`src/config.ts`](src/config.ts) |
| 论文列表 | [`src/data/publications.ts`](src/data/publications.ts) |
| 研究方向 | [`src/data/research.ts`](src/data/research.ts) |
| 经历 / 教育 / 获奖 | [`src/data/experience.ts`](src/data/experience.ts) |
| 教学 | [`src/data/teaching.ts`](src/data/teaching.ts) |
| 报告 / 海报 | [`src/data/presentations.ts`](src/data/presentations.ts) |
| 头像 | 把照片放进 `public/`（如 `public/me.jpg`），改 `src/pages/index.astro` 里 `<img class="avatar" src=...>` |
| 简历 PDF | 放 `public/cv.pdf`，并把 `src/config.ts` 里 `cv` 改成 `'/cv.pdf'`（留空则隐藏按钮） |

> 论文里把自己名字用 `**双星号**` 包住会自动加粗。共同贡献作者名后加"*"，通讯作者名后加 "+"

---

## 三、换主题配色（改 1 行）

打开 [`src/config.ts`](src/config.ts)，改最上面这一行的值：

```ts
export const THEME: 'slate' | 'teal' | 'eucalyptus' | 'stone' = 'slate';
```

| 值 | 配色 |
| --- | --- |
| `slate` | 冷灰蓝（默认 · 推荐） |
| `teal` | 深青灰 |
| `eucalyptus` | 鼠尾草绿 |
| `stone` | 暖石灰褐 |

四套配色的色值都定义在 [`src/styles/global.css`](src/styles/global.css) 顶部的 `[data-theme="…"]` 块里，
想自定义/再加一套，复制一个块改色值即可。

---

## 四、部署到 GitHub Pages（推荐，免费 + 自定义域名 + 免费 HTTPS）

已附带工作流 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)，推送即自动构建并发布。

1. 在 GitHub 新建一个仓库（如 `homepage`），把本项目推上去：
   ```bash
   git init && git add -A && git commit -m "init homepage"
   git branch -M main
   git remote add origin https://github.com/<你的用户名>/<仓库名>.git
   git push -u origin main
   ```
2. 仓库 **Settings → Pages → Build and deployment → Source** 选 **GitHub Actions**。
3. 几十秒后工作流跑完，站点即上线（默认 `https://<用户名>.github.io/<仓库名>`）。

### 绑定自己的域名（如 `yourname.com`）

1. 买域名（Cloudflare Registrar / Namecheap / Porkbun，约 $10/年）。
2. 仓库 **Settings → Pages → Custom domain** 填入你的域名（会自动在仓库生成 `CNAME` 文件）。
3. 到域名注册商处配置 DNS：
   - 根域名 `yourname.com`：加 4 条 A 记录指向 GitHub Pages 的 IP
     （`185.199.108.153`、`185.199.109.153`、`185.199.110.153`、`185.199.111.153`），
     有条件就再加对应 AAAA 记录；
   - `www` 子域：加 1 条 CNAME 指向 `<用户名>.github.io`。
4. 回到 Pages 页面，勾选 **Enforce HTTPS**（证书自动签发、自动续期）。
5. 把 [`astro.config.mjs`](astro.config.mjs) 里的 `site` 改成你的正式域名。

> 用自定义根域名时无需设置 `base`；若坚持用 `用户名.github.io/仓库名` 这种子路径访问，
> 需要在 `astro.config.mjs` 里加 `base: '/<仓库名>'`。

---

## 五、备选：Cloudflare Pages

免费、不限流量、自带访问统计、自动识别 Astro：
登录 Cloudflare Pages → 连接该 Git 仓库 → 构建命令 `npm run build`、输出目录 `dist` → 部署。
自定义域名同样一键 + 免费 HTTPS。

---

## 目录结构

```
src/
  config.ts            站点配置 + 主题开关（最常改）
  data/                各页面的列表内容
  styles/global.css    设计 token + 4 套配色 + 组件样式
  layouts/Base.astro   页面骨架（<html data-theme> 在这里）
  components/          Nav / Footer / SocialIcons / PageHeader
  pages/              每个 .astro = 一个页面/路由
public/                静态资源（头像、favicon、CV、CNAME…）
.github/workflows/      GitHub Pages 自动部署
```
