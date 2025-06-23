import API from '../../api';


export const loginAdmin = async (email, password) => {
  try {
    const response = await API.post('/api/admin/login', { email, password });

   
    if (!response.data || !response.data.token) {
      throw new Error('Invalid response from server');
    }

    return response.data;
  } catch (error) {
    
    throw error;
  }
};
