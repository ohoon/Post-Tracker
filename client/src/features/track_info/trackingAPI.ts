import axios from 'axios';

export const fetchTrackInfo = async (rgist: string) => {
  const response = await axios.get(`/api/tracking/${rgist}`);
  return response.data;
}
