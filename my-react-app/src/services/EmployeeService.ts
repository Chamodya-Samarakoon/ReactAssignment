import axios from 'axios';
const API_URL = 'http://localhost:8081/api/employees';
export const getEmployees = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};