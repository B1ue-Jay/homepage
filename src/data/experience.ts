// Work 页：经历（research/industry）与教育。最新在上。
export type Item = {
  when: string;
  what: string;
  where: string;
  desc?: string;
};

export const experience: Item[] = [
  {
    when: '2025 - Present',
    what: 'PhD Researcher',
    where: 'MARS Lab, NTU',
    desc: 'Developing generative robot trajectory planning and visuomotor policies.',
  },
  {
    when: '2024 – 2025',
    what: 'Research Intern',
    where: 'University of York, UK',
    desc: 'Explored computer vision models for underwater object detection tasks.',
  },
    {
    when: '2023 – 2024',
    what: 'Data Analyst Intern',
    where: 'Yovo.ai, San Francisco',
    desc: 'Analyzed qualitative and quantitative college admission data to identify trends and other key metrics for US high school students.',
  },
];

export const education: Item[] = [
  {
    when: '2023 – 2024',
    what: 'M.Sc. in Computer Science with Distinction',
    where: 'Newcastle University, UK',
    //desc: 'A highlight: a key project, thesis, or distinction.',
  },
  {
    when: '2018 – 2022',
    what: 'B.A. in Art and Technology',
    where: 'Communication University of China, Nanjing',
    //desc: 'A highlight from your undergraduate years.',
  },
];

export const awards: Item[] = [
  // { when: '2024', what: 'Some Fellowship / Scholarship', where: 'Awarding Body' },
  // { when: '2023', what: 'Best Paper / Travel Award', where: 'CONF ’23' },
];
