import axios from 'axios';

// Function to set the Authorization token globally for all axios requests
const setAuthToken = (token) => {
  if (token) {
    // Set token to Authorization header for all requests
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Remove the Authorization header if no token
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
