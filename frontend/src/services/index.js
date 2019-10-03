import axios from 'axios';
const baseURL = 'http://localhost:3000/auth';

const SERVICE = axios.create({ withCredentials: true, baseURL });

const AUTH_SERVICE = {
  signup: async (user) => {
    return await SERVICE.post('/signup', user);
  },
  login: async (user) => {
    return await SERVICE.post('/login', user);
  },
  logOut: async () => {
    return await SERVICE.get('/logout');
  },
  edit: async (updateUser) => {
      return await SERVICE.post('/edit', updateUser)
  },
  loggedin: async () => {
       return await SERVICE.get('/loggedin')
  }

};

export default AUTH_SERVICE;// import axios from 'axios';



// //process.env.NODE_ENV === 'production'
// //  ? (const baseURL = 'here should be your production endpoint')
// //  : (const baseURL = 'http://localhost:3000');

// const baseURL = 'http://localhost:3000'

// const service = axios.create({ withCredentials: true, baseURL });

// const MY_SERVICE = {
//   test: async () => {
//     return await service.get('/');
//   },
//   signup: async (user) => {
//     return await SERVICE.post('/signup', user);
//   },
//   login: async (user) => {
//     return await SERVICE.post('/login', user);
//   },
//   logOut: async () => {
//     return await SERVICE.get('/logout');
//   }
// };

// export default MY_SERVICE;
