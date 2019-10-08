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
  edit: async (updateUser) => {
      return await SERVICE.post('auth/edit', updateUser)
  },
  loggedin: async () => {
       return await SERVICE.get('auth/loggedin')
  }

}

export default AUTH_SERVICE;// import axios from 'axios';

