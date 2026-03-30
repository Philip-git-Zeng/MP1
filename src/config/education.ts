
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'Institute of Biophysics, Chinese Academy of Sciences',
      major: 'Biology and Pharmaceutics',
      logo: 'college',
      start: '2023',
      end: '2020'
    },
    {
      school: 'Jiangxi Normal University',
      major: 'Life Science',
      logo: 'college',
      start: '2016',
      end: '2020'
    }
  ]