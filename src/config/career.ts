// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: 'Institute of Modern Biology, Nanjing University',
      title: 'Research Assistant',
      logo: 'college',
      start: 'Sep.2025',
      end: 'Present'
    },
    {
      company: 'Sir Run Run Shaw Hospital, Zhejiang University School of Medicine',
      title: 'Research Assistant',
      logo: 'college',
      start: 'Sep.2023',
      end: 'Aug.2025'
    }
  ]