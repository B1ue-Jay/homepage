// Presentations 页：报告 / 海报 / 受邀演讲。
export type Talk = {
  when: string;
  title: string;
  kind: string; // Talk / Poster / Invited Talk
  venue: string;
  links?: { slides?: string; poster?: string; video?: string };
};

export const presentations: Talk[] = [
  {
    when: 'May 2025',
    title: 'Title of your talk or poster',
    kind: 'Oral Talk',
    venue: 'CONF ’25, City, Country',
    links: { slides: '#' },
  },
  {
    when: 'Nov 2024',
    title: 'Another presentation title',
    kind: 'Poster',
    venue: 'Workshop @ CONF ’24',
    links: { poster: '#' },
  },
];
