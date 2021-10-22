import axios from 'axios'
import { AppProject } from '../../components/models'
import { ApiMode } from '../../api/'

interface ResponseData {
  appProjects: Array<AppProject>
}

class ProjectsAPI {

  mode: ApiMode
 
  constructor() {
    this.mode = 'mock-server' // options: 'local-json' or 'mock-server'
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
}

export { ProjectsAPI }
