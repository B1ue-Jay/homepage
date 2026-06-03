// Teaching 页。
export type Teaching = {
  when: string;
  name: string;
  role: string; // e.g. Teaching Assistant / Guest Lecturer
  org: string;
};

export const teaching: Teaching[] = [
  {
    when: 'Fall 2024',
    name: 'COURSE 101 — Introduction to ___',
    role: 'Teaching Assistant',
    org: 'Your University',
  },
  {
    when: 'Spring 2024',
    name: 'COURSE 305 — Advanced ___',
    role: 'Teaching Assistant',
    org: 'Your University',
  },
];
