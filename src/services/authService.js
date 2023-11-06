import axios from 'axios';

/**
 * Create a user
 *
 * @param {Object} user
 * @param {String} user.email
 * @param {String} user.password
 * @param {Date} user.dob
 */
export const signup = async (user) => {
  try {
    const response = await axios.post('/auth/signup', user);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

/**
 * User Login
 *
 * @param {Object} credentials
 * @param {String} credentials.email
 * @param {String} credentials.password
 */
export const login = async (credentials) => {
  try {
    const response = await axios.post('/auth/login', credentials);

    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${response.data.access_token}`;

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

/**
 * Get access token from local storage
 * @param {String} key
 * @param {String} value
 */
export const setToken = (key, value) => {
  try {
    const token = localStorage.setItem(key, value)

    return token;
  } catch (error) {
    throw error.response.data;
  }
};


/**
 * Get access token from local storage
 *
 */
export const getAccessToken = () => {
    const token = localStorage.getItem("accessToken")

    return token;
};
