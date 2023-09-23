import axios from 'axios';

export const fetchTrackInfo = async (rgist: string) => {
  const response = await axios.get(`http://localhost:8080/tracking/${rgist}`);
  return response.data;
}
