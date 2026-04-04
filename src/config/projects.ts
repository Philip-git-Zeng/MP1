// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Research and Projects
export const researchHeadLine = "Research & Projects"
export const researchIntro = "Academic research and selected projects."

// Define new project data type（extending ActivityItemType）
export interface ResearchProjectType {
  title: string           // Project name
  description: string     // Project description/summary
  date: string           // Date
  venue?: string         // Location/publishing venue
  authors?: string[]     // Authors
  publication?: {        // Publication information
    journal?: string
    volume?: string
    pages?: string
    doi?: string
    publisher?: string
  }
  links?: {              // Related links
    pdf?: string
    code?: string
    demo?: string
  }
  tags?: string[]        // Tags
}

// Example data
export const researchProjects: Array<ResearchProjectType> = [
  {
    title: 'Blood-testis barrier-crossing extracellular vesicles for asthenozoospermia therapy via synergistic ATP replenishment and ferroptosis suppression.',
    description: 'This study constructed engineered extracellular vesicles capable of traversing the blood-testis barrier for synergistic treatment of asthenozoospermia via ATP supplementation and ferroptosis inhibition.',
    date: '2026',
    venue: 'Sir Run Run Shaw Hospital, Zhejiang University School of Medicine',
    authors: ['Xinghua Yu', 'Lingan Zeng', 'Haiyan Chen', 'Xuemei Dong', 'Fan Wen', 'Mingming Wang', 'Runqi Pan', 'Yujun Zhang', 'Wei Zhu', 'Dingyuan Yan', 'Dong Wang', 'Fei Sun'],
    publication: {
      journal: 'Biomaterials',
      volume: '327',
      pages: '123777',
      doi: '10.1016/j.biomaterials.2025.123777',
      publisher: 'Elsevier'
    },
    links: {
      pdf: 'https://www.sciencedirect.com/science/article/pii/S0142961225006969?via%3Dihub'
    },
    tags: ['EVs', 'asthenozoospermia', 'ferroptosis']
  },
  {
    title: 'An NIR-II Absorbing Injectable Hydrogel for Boosted Photo-Immunotherapy Toward Human Papillomavirus Associated Cancer',
    description: 'This study designed and validated a NIR-II light-responsive hydrogel to enhance the photoimmunotherapeutic efficacy against HPV-associated tumors.',
    date: '2025',
    venue: 'Sir Run Run Shaw Hospital, Zhejiang University School of Medicine',
    authors: ['Xinghua Yu', 'Lingan Zeng', 'Xinyue Yang', 'Zuliang Ren', 'Xuemei Dong', 'Ge Meng', 'Guogang Shan', 'Dingyuan Yan', 'Dong Wang', 'Fei Sun'],
    publication: {
      journal: 'Aggregate',
      volume: '6',
      doi: '10.1002/agt2.743',
      publisher: 'Wiley'
    },
    links: {
      pdf: 'https://onlinelibrary.wiley.com/doi/epdf/10.1002/agt2.743'
    },
    tags: ['HPV', 'immunotherapy', 'biomaterials']
  },
  {
    title: 'Recognition of cyclic dinucleotides and folates by human SLC19A1',
    description: 'Using flow cytometry, ELISA, and Western blotting, we screened and identified monoclonal antibodies against the SLC19A1 protein, which subsequently enabled its structural determination.',
    date: '2022',
    venue: 'Institute of Biophysics, Chinese Academy of Science',
    authors: ['Qixiang Zhang', 'Xuyuan Zhang', 'Yalan Zhu', 'Panpan Sun', 'Liwei Zhang', 'Junxiao Ma', 'Yong Zhang', 'Lingan Zeng', 'Xiaohua Nie', 'Yina Gao', 'Zhaolong Li', 'Songqing Liu', 'Jizhong Lou', 'Ang Gao', 'Liguo Zhang', 'Pu Gao'],
    publication: {
      journal: 'Nature',
      volume: '612',
      pages: '170-176',
      doi: '10.1038/s41586-022-05452-z',
      publisher: 'Nature Publishing Group'
    },
    links: {
      pdf: 'https://www.nature.com/articles/s41586-022-05452-z'
    },
    tags: ['SLC19A1', 'cryo-electron microscopy', 'transporter mechanism']
  }
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: 'Python Workshop',
    description:
      'Teaching basic Python programming concepts to beginners. Covering variables, control flow, and functions.',
    date: '2024-02-24',
    location: 'Shanghai',
    link: 'https://example.com/python-workshop',
  },
  {
    name: 'AI Ethics Discussion',
    description:
      'A group discussion about the ethical implications of AI development and its impact on society.',
    date: '2024-03-01',
    location: 'Shanghai',
    link: 'https://example.com/ai-ethics',
  },
  {
    name: 'Code Review Session',
    description:
      'Helping students improve their coding skills through peer code review and best practices sharing.',
    date: '2024-03-15',
    location: 'Shanghai',
  },
]

// Projects page exports (for src/app/projects/page.tsx)
export const projectHeadLine = "Projects"
export const projectIntro = "Here are some of my projects"

// Export projects array (empty for now, add your project data as needed)
export const projects: Array<ProjectItemType> = []