// News 模块：每个对象 = 一行新闻（最新放最上面）。
// html 字段支持 <strong>加粗</strong> 与 <a href="...">链接</a>，会按原样渲染。
export type NewsItem = {
  date: string; // 显示用日期，如 'May 2026'、'2026.01'、'Jan 2026'
  html: string;
};

export const news: NewsItem[] = [
  {
    date: 'May 2026',
    html: 'New preprint <strong>MARS Policy</strong> is out, multimodality only when it matters — see the <a href="https://lorenzo-0-0.github.io/MARS_Policy/">project page</a> / <a href="https://arxiv.org/abs/2605.29766">arXiv</a>.',
  },
  {
    date: 'May 2026',
    html: 'New preprint <strong>FLASH Policy</strong> is out — see the <a href="https://b1ue-jay.github.io/FLASH/">project page</a> / <a href="https://arxiv.org/abs/2605.15492">arXiv</a>.',
  },
  {
    date: 'May 2026',
    html: 'New preprint <strong>Feedback World Model</strong> is out — see the <a href="https://lorenzo-0-0.github.io/Feedback_World_Model/">project page</a> / <a href="https://arxiv.org/abs/2605.15705">arXiv</a>.',
  },
  {
    date: 'May 2026',
    html: 'New preprint <strong>Gaze2Act</strong> is out — see the <a href="https://zuo-kuangji.github.io/Gaze2Act/">project page</a> / <a href="https://arxiv.org/abs/2605.30282">arXiv</a>.',
  },
  {
    date: 'Jan 2026',
    html: 'Our paper <strong>RF-MatID</strong> was accepted to <a href="https://arxiv.org/abs/2601.20377">ICLR 2026</a> 🎉 — see the <a href="https://arxiv.org/abs/2601.20377">arXiv</a>.',
  },
  {
    date: 'Aug 2025',
    html: 'Started my Ph.D. in Embodied AI at <strong>MARS Lab, NTU</strong>, advised by Prof. Jianfei Yang.',
  },
];
