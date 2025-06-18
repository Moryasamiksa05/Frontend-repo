import API from '../../api';

export const loginAdmin = (email, password) => {
  return API.post('/api/admin/login', { email, password }).then(res => res.data);
};
