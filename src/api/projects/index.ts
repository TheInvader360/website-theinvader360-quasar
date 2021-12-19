import axios from 'axios'
import { AppProject, FunProject } from '../../components/models'
import { ApiMode } from '../../api/'

interface ResponseData {
  appProjects: Array<AppProject>
  funProjects: Array<FunProject>
}

class ProjectsAPI {

  mode: ApiMode
 
  constructor() {
    this.mode = 'local-json' // options: 'local-json' or 'mock-server'
  }

  async readAppProjects(): Promise<AppProject[]> {
    switch(this.mode) {
      case 'mock-server': { 
        const url = 'http://localhost:8081/projects-apps'
        try {
          const response = await axios.get<AppProject[]>(url)
          return response.data
        } catch (err) {
          throw err
        }
      }
      default: {
        try {
          const response = await axios.get<ResponseData>('data.json')
          return response.data.appProjects
        } catch (err) {
          throw err
        }
      }
    }
  }

  // readAppProject(props.id)
  async readAppProject(id: string): Promise<AppProject> {
    switch(this.mode) {
      case 'mock-server': {
        const url = `http://localhost:8081/projects-apps/${id}`
        try {
          const response = await axios.get<AppProject>(url)
          return response.data
        } catch (err) {
          throw err
        }
      }
      default: {
        try {
          const response = await axios.get<ResponseData>('data.json')
          const appProject = response.data.appProjects.find(a => a.id === +id)
          if (appProject === undefined) {
            throw new TypeError('appProject undefined');
          }
          return appProject
        } catch (err) {
          throw err
        }
      }
    }
  }

  async readFunProjects(): Promise<FunProject[]> {
    switch(this.mode) {
      case 'mock-server': {
        const url = 'http://localhost:8081/projects-fun'
        try {
          const response = await axios.get<FunProject[]>(url)
          return response.data
        } catch (err) {
          throw err
        }
      }
      default: {
        try {
          const response = await axios.get<ResponseData>('data.json')
          return response.data.funProjects
        } catch (err) {
          throw err
        }
      }
    }
  }

  // readFunProject(props.id)
  async readFunProject(id: string): Promise<FunProject> {
    switch(this.mode) {
      case 'mock-server': {
        const url = `http://localhost:8081/projects-fun/${id}`
        try {
          const response = await axios.get<FunProject>(url)
          return response.data
        } catch (err) {
          throw err
        }
      }
      default: {
        try {
          const response = await axios.get<ResponseData>('data.json')
          const funProject = response.data.funProjects.find(a => a.id === +id)
          if (funProject === undefined) {
            throw new TypeError('funProject undefined');
          }
          return funProject
        } catch (err) {
          throw err
        }
      }
    }
  }

  async readMarkdown(path: string): Promise<string> {
    const response = await axios.get<string>(path)
    return response.data
  }

}

export { ProjectsAPI }
