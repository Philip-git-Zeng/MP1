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
    description: 'This study explores the effectiveness of large language models in generating high-quality code. We propose a novel fine-tuning approach that improves accuracy by 15% compared to baseline models. The research includes comprehensive experiments on multiple programming languages and real-world coding tasks.',
    date: '2026',
    venue: 'Sir Run Run Shaw Hospital, Zhejiang University School of Medicine',
    authors: ['Yu X', 'Zeng L', 'et al.'],
    publication: {
      journal: 'Biomaterials',
      volume: '327',
      pages: '123-135',
      doi: '10.1016/j.biomaterials.2025.123777',
      publisher: 'Elsevier'
    },
    links: {
      pdf: 'https://www.sciencedirect.com/science/article/pii/S0142961225006969?via%3Dihub'
    },
    tags: ['LLM', 'Code Generation', 'AI']
  },
  {
    title: 'Interactive Data Visualization Framework',
    description: 'A novel web-based framework for interactive data visualization that supports real-time data streaming and user interaction. The framework has been deployed in multiple educational institutions and received positive feedback for its ease of use and performance.',
    date: '2023',
    venue: 'CHI 2023 Conference on Human Factors in Computing Systems',
    authors: ['Chen Xiao', 'Liu Yang', 'Zhao Min'],
    publication: {
      journal: 'Proceedings of the CHI Conference',
      volume: '2023',
      pages: '1-12',
      doi: '10.1145/3544548.3581234',
      publisher: 'ACM'
    },
    links: {
      pdf: 'https://example.com/framework.pdf',
      demo: 'https://framework-demo.example.com'
    },
    tags: ['Data Visualization', 'HCI', 'Web Framework']
  },
  {
    title: 'Machine Learning in Healthcare Diagnostics',
    description: 'Developing deep learning models for early detection of cardiovascular diseases using ECG signals. The model achieves 94.2% accuracy on a dataset of 10,000 patients and has been validated in clinical settings.',
    date: '2023',
    venue: 'Nature Digital Medicine',
    authors: ['Wang Wei', 'Zhang Jing', 'Li Hua', 'Chen Yu'],
    publication: {
      journal: 'Nature Digital Medicine',
      volume: '6',
      pages: '45-58',
      doi: '10.1038/s41746-023-00891-2',
      publisher: 'Nature Publishing Group'
    },
    links: {
      pdf: 'https://example.com/healthcare.pdf',
      code: 'https://github.com/example/healthcare-ml'
    },
    tags: ['Healthcare', 'Deep Learning', 'Medical AI']
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
