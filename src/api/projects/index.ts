import axios from 'axios';
import { AppProject } from '../../components/models'

class ProjectsAPI {

  async readAppProjects(): Promise<AppProject[]> {
    const url = 'http://localhost:8081/projects-apps'
    try {
      const response = await axios.get<AppProject[]>(url);
      return response.data
    } catch (err) {
      throw err
    }
  }  
}

export { ProjectsAPI }
