export type Project = {
    slug: string;
    title: string;
    subtitle: string;       // 한 줄 설명
    period: string;
    companyu: string;
    tags: string[];        
    highlights: string[];   // 핵심 성과
    description: string;    // 상세 페이지용 긴 설명
    github?: string
    demo?: string
}

export type Experience = {
    company: string
    role: string
    period: string
    current: boolean
    description: string
    tasks: string[]
  }
  
  export type Skill = {
    category: string        // "주력" | "사용 가능"
    items: string[]
  }