import axios from "axios";


const login = async (userData) => {
  const response = await axios.post(`http://localhost:5000/api/user/admin-login`, userData);
  if(response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }
  return response.data

};

const authService = {
  login,

};

export default authService;