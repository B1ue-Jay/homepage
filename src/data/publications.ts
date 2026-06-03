// 论文列表。作者字符串里的标记会自动渲染：
//   **名字**  → 加粗（你自己）
//   名字*     → 共同第一作者：名字右上角加 *  (equal contribution)
//   名字+     → 共同通讯作者：名字右上角加 †  (corresponding author)
// 例：authors: '**Jiaqi Bai**+, Jindou Jia*, Wei Li*, ..., Jianfei Yang+'
//   （既是你自己又是共同一作就写 **名字*** ；出现任意标记时，论文区底部会自动显示图例）
// 不需要的字段删掉即可；links 里没有的链接删掉那一项。
export type Publication = {
  year: number;
  authors: string;
  title: string;
  venue: string;
  links?: { pdf?: string; code?: string; doi?: string; project?: string; arxiv?: string };
  selected?: boolean; // true = 同时在 Research 页“精选成果”里出现
};

export const publications: Publication[] = [
  {
    year: 2026,
    authors: '**Jiaqi Bai***, Jindou Jia*, Yuxuan Hu, Gen Li, Xiangyu Chen, Tuo An, Kuangji Zuo, Jianfei Yang+',
    title: 'FLASH: Efficient Visuomotor Policy via Sparse Sampling',
    venue: 'arXiv preprint arXiv:2605.15492',
    links: { project: 'https://b1ue-jay.github.io/FLASH/', arxiv: 'https://arxiv.org/abs/2605.15492', pdf: 'https://arxiv.org/pdf/2605.15492'},
    selected: true,
  },
  {
    year: 2026,
    authors: 'Jindou Jia*, Tuo An*, Yuxuan Hu*, Gen Li, Jingliang Li, Bohan Hou, Xiangyu Chen, **Jiaqi Bai**, Bofan Lyu, Jianfei Yang+',
    title: 'MARS Policy: Multimodality Only When It Matters',
    venue: 'arXiv preprint arXiv:2605.29766',
    links: { project: 'https://lorenzo-0-0.github.io/MARS_Policy/', arxiv: 'https://arxiv.org/abs/2605.29766'},
  },
  {
    year: 2026,
    authors: 'Tuo An*, Jindou Jia*, Gen Li, Jingliang Li, Chuhao Zhou, Pengfei Liu, Bofan Lyu, **Jiaqi Bai**, Xinying Guo, Geng Li, Jianfei Yang+',
    title: 'Feedback World Model Enables Precise Guidance of Diffusion Policy',
    venue: 'arXiv preprint arXiv:2605.15705',
    links: { project: 'https://lorenzo-0-0.github.io/Feedback_World_Model/', arxiv: 'https://arxiv.org/abs/2605.15705'},
  },
    {
    year: 2026,
    authors: 'Kuangji Zuo*, Gen Li*, Bofan Lyu, Yanshuo Lu, Boyu Ma, Shijia Han, Xinyu Zhou, Xichen Yuan, Chuhao Zhou, **Jiaqi Bai**, Geng Li, Jianfei Yang+',
    title: 'Gaze2Act: Gaze-Conditioned Vision-Language-Action Policies for Interactive Robot Manipulation',
    venue: 'arXiv preprint arXiv:2605.30282',
    links: { project: 'https://zuo-kuangji.github.io/Gaze2Act/', arxiv: 'https://arxiv.org/abs/2605.30282'},
  },
  {
    year: 2026,
    authors: 'Xinyan Chen, Qinchun Li, Ruiqin Ma, **Jiaqi Bai**, Li Yi, Jianfei Yang+',
    title: 'RF-MatID: Dataset and Benchmark for Radio Frequency Material Identification',
    venue: 'ICLR 2026 - The Fourteenth International Conference on Learning Representations',
    links: { arxiv: 'https://arxiv.org/abs/2601.20377'},
  },
];
