import { useState, useEffect } from "react";
import axios from "axios";

const useWeatherHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHistory = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/weather/search-history`);
      const historyFormatted = response.data.data.map(item => ({
        ...item,
        key: item.id
      }))
      setHistory(historyFormatted);
    } catch (err) {
      console.error("Error fetching weather history", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const deleteHistory = async (id) => {
    try {
      await axios.delete(`/weather/bulk-delete`);
      fetchHistory(); // Refetch history after deletion
    } catch (err) {
      console.error("Error deleting history record", err);
      setError(err);
    }
  };

  const updateHistory = async (id, updatedRecord) => {
    try {
      await axios.put(`http://your-api-url-here.com/weather/history/${id}`, updatedRecord);
      fetchHistory(); // Refetch history after update
    } catch (err) {
      console.error("Error updating history record", err);
      setError(err);
    }
  };

  const bulkDeleteHistory = async (ids) => {
    try {
      await axios.post(`weather/bulk-delete`, { ids });
      fetchHistory(); // Refetch history after bulk deletion
    } catch (err) {
      console.error("Error deleting history records", err);
      setError(err);
    }
  };

  return { history, loading, error, deleteHistory, updateHistory, bulkDeleteHistory };
};

export default useWeatherHistory;
