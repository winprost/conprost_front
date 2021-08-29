import axios from 'axios';
import {environment} from '../environments/environments.prod'

const getProjectList = async ()=>{
  const res = await axios.get(`${environment.apiUrl}/projects/projectList`);
  return res;
}

export{
  getProjectList
};