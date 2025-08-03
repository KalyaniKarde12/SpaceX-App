import axios from 'axios';

export const fetchLaunches = async (filters = {}) => {
  let url = 'https://api.spacexdata.com/v3/launches?limit=100';
  if (filters.launch_success) url += `&launch_success=${filters.launch_success}`;
  if (filters.land_success) url += `&land_success=${filters.land_success}`;
  if (filters.launch_year) url += `&launch_year=${filters.launch_year}`;

  const response = await axios.get(url);
  return response.data;
};
