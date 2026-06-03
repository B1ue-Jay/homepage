// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ⬇️ 部署相关：
//   site  = 你的站点根域名（用于生成 canonical / sitemap 等绝对链接）
//   base  = 站点所在子路径。GitHub Pages 项目页地址是 https://<用户名>.github.io/<仓库名>/，
//           所以这里必须填 '/<仓库名>'（当前为 '/homepage'）。
//   ★ 将来若绑定自定义域名（如 https://你的域名.com 根目录），把 site 改成该域名、并删掉 base 这一行即可。
export default defineConfig({
  site: 'https://b1ue-jay.github.io',
  base: '/homepage',
  integrations: [sitemap()],
});
