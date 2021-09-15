export interface CMSProduct {
  id: string;
  title: string;
  date: string;
  skill: SkillData[];
  skillreason: string;
}
export type CMSProductProps = CMSProduct[];

export interface CMSProductList {
  contents: CMSProduct[];
}

export interface SkillData {
  id: string;
  name: string;
}
