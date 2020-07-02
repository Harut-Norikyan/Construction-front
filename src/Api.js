import axios from 'axios';

const API_URL = 1 ? 'http://localhost:4000' : 'https://online-shop.am';

const api = axios.create({
  baseURL: API_URL,
});

class Api {
  static url = API_URL;

  static getProjects() {
    return api.get(`/projects/${1}`);
  }
  static getProjectById(id) {
    return api.get(`/projects/projectById/${id}`);
  }
  static getAbout() {
    return api.get('/about');
  }
}
export default Api;
