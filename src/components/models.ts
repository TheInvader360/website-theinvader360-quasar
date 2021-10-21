export interface AppProject {
  id: number;
  name: string;
  imagePath: string;
  description: string;
  urlPlay: string;
  urlAmazon: string;
  urlApk: string;
}

export type AppProjectOrderBy = 'id' | 'name'
