import axios from 'axios';
const baseURL = 'http://localhost:3000';

const SERVICE = axios.create({ withCredentials: true, baseURL });

const AUTH_SERVICE = {
  signup: async (user) => {
    return await SERVICE.post('auth/signup', user);
  },
  login: async (user) => {
    return await SERVICE.post('auth/login', user);
  },
  logOut: async () => {
    return await SERVICE.get('auth/logout');
  },
  edit: async (updatedUser) => {
      return await SERVICE.post('auth/edit', updatedUser)
  },
  loggedin: async () => {
       return await SERVICE.get('auth/loggedin')
  },
  deleteUser: async ()=>{
    return await SERVICE.delete('auth/delete', )
  },
  edituser: async (form)=>{
    return await SERVICE.post('auth/edit/', form)
  },

}

export default AUTH_SERVICE;// import axios from 'axios';

