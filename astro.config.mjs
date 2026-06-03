// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ⬇️ 部署后改成你的正式域名（用于生成绝对链接 / sitemap，便于被搜索引擎与招聘方检索）
export default defineConfig({
  site: 'https://your-domain.com',
  integrations: [sitemap()],
});
