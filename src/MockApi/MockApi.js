import axios from 'axios';
export const API_URL = 'https://65af4d452f26c3f2139a6b3d.mockapi.io/EmployeeRegister/StudentRegistration';

export const getData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};
export const putData = async (id, updatedData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      return response.data;
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  };
  export const getUserData = async (id) => {
    try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
    } catch (error) {
    console.error('Error fetching user:', error);
    
    }
   };

export const onDelete = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
};
