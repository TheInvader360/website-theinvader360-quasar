export interface AppProject {
  id: number
  name: string
  releaseDate: string
  defaultSortWeight: number
  imagePath: string
  description: string
  urlPlay: string
  urlAmazon: string
  urlGithub: string
  urlApk: string
}

export type AppProjectOrderBy = 'name' | 'releaseDate' | 'defaultSortWeight'

export interface FunProject {
  id: number
  name: string
  description: string
  markdownPath: string
}
