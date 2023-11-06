import axios from 'axios';

/**
 * Create a user
 *
 * @param {Object} user
 * @param {String} user.email
 * @param {String} user.password
 * @param {Date} user.dob
 */
export const getCurrentWeather = async (city) => {
  try {
    const response = await axios.get('/weather/current', { params: { city } });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
