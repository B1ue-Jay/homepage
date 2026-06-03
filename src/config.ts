// ============================================================
//  全站配置 —— 日常你基本只改这个文件 + src/data/ 里的列表文件
// ============================================================

// ---- 主题配色：改这一个值即可在 4 套配色间整站切换 ----
//   'slate'       冷灰蓝（默认 · 推荐）
//   'teal'        深青灰
//   'eucalyptus'  鼠尾草绿
//   'stone'       暖石灰褐
export const THEME: 'slate' | 'teal' | 'eucalyptus' | 'stone' = 'teal';

// 是否在主 CTA 按钮上使用 Quicksand 点缀字体（仿原站的小细节）
export const CTA_ACCENT_FONT = true;

// ---- 个人基本信息 ----
export const site = {
  name: 'Jiaqi Bai', //  ← 改成你的名字（同时是导航处的 logo 字标）
  role: 'PhD Student', //  ← 头衔，如 PhD Candidate / PhD Student
  field: 'Embodied AI', //  ← 研究方向
  affiliation: 'MARS Lab, Nanyang Technological University', //  ← 学校 / 课题组
  location: 'Singapore',
  email: '9.jasonbai@gmail.com',

  // hero 区大标题下的一句话定位
  tagline: 'Building the future of Embodied AI',

  // About 区段落（数组里每个字符串是一段）
  about: [
    'PhD Researcher at NTU MARS Lab, advised by Prof. Jianfei Yang, developing generative robot trajectory planning and visuomotor policies.',
    'Explore the integration of physical priors for robust trajectory representation with the performance optimization of generative algorithms (e.g., Diffusion, Flow Matching) for real-time robotics.',
  ],

  // 简历 PDF：把文件放到 public/cv.pdf 即可；留空字符串 '' 则隐藏 “Download CV” 按钮
  cv: '',
};

// ---- 顶部导航（顺序仿原站）。删一项 = 删一个页面：同时删掉 src/pages 下对应文件 ----
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  //{ label: 'Teaching', href: '/teaching' },
  //{ label: 'Research', href: '/research' },
  { label: 'Publications', href: '/publications' },
  //{ label: 'Presentations', href: '/presentations' },
];

// ---- 社交链接。type 决定图标：email / scholar / github / linkedin / x / orcid ----
//      不需要的整项删掉即可。
export const socials = [
  { type: 'email', url: 'mailto:9.jasonbai@gmail.com', label: 'Email' },
  { type: 'scholar', url: 'https://scholar.google.com/citations?user=528YkNYAAAAJ&hl=en', label: 'Google Scholar' },
  { type: 'github', url: 'https://github.com/', label: 'GitHub' },
  { type: 'linkedin', url: 'https://www.linkedin.com/in/9jason/', label: 'LinkedIn' },
  { type: 'x', url: 'https://x.com/Jason3973699328', label: 'X' },
];

// ---- 首页 “My Journey” 时间线（最新在上）----
export const journey = [
  {
    year: '2025 – Present',
    title: 'Ph.D. in Embodied AI',
    org: 'Nanyang Technological University',
    //desc: 'One line on your thesis direction or what you focus on here.',
  },
  {
    year: '2023 – 2024',
    title: 'M.Sc. in Computer Science with Distinction',
    org: 'Newcastle University, UK',
    //desc: 'A highlight: a key project, thesis, or distinction.',
  },
  {
    year: '2018 – 2022',
    title: 'B.A. in Art and Technology',
    org: 'Communication University of China, Nanjing',
    //desc: 'A highlight from your undergraduate years.',
  },
];
