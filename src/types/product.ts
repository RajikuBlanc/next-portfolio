export interface CMSProduct {
  id: string;
  title: string;
  date: string;
  skill: SkillData[];
  skillreason: string;
  commitment: string;
  hardship: string;
  images: ImagesData[];
  thumbnail: {
    url: string;
  };
  github: string;
  url: string;
}
export type CMSProductProps = CMSProduct[];

export interface CMSProductList {
  contents: CMSProduct[];
}

export interface SkillData {
  id: string;
  name: string;
}
export interface ImagesData {
  id: string;
  alt: string;
  sliderimage: {
    url: string;
  };
}
