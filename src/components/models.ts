export interface AppProject {
  id: number;
  name: string;
  image: string;
  description: string;
  urlPlay: string;
  urlAmazon: string;
  urlApk: string;
}

export type AppProjectOrderBy = 'id' | 'name'
