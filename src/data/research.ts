// Research 页的“研究方向”卡片。
export type ResearchArea = {
  title: string;
  desc: string;
};

export const researchIntro =
  'I work at the intersection of AI and Robotics. My research aims to improve generative robot trajectory planning and visuomotor policies, with an emphasis on optimization of generative algorithms (e.g., Diffusion, Flow Matching).';

export const researchAreas: ResearchArea[] = [
  // {
  //   title: 'Theme One',
  //   desc: 'One or two sentences describing this research direction, the questions it asks, and why it matters.',
  // },
  // {
  //   title: 'Theme Two',
  //   desc: 'A short description of a second line of work, the methods you use, and the kind of results you have shown.',
  // },
  // {
  //   title: 'Theme Three',
  //   desc: 'A third area — perhaps a newer or applied direction you want collaborators or employers to notice.',
  // },
];
