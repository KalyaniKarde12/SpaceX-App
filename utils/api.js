import axios from 'axios';

export async function fetchLaunches(filters = {}) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SPACEX_API;
    const url = new URL(baseUrl);

    // Apply filters to query params
    Object.entries(filters).forEach(([key, value]) => {
      if (value) url.searchParams.append(key, value);
    });

    const page = parseInt(filters.page || '1', 10);
    const response = await axios.get(url.toString());

    const all = response.data;
    const paginated = all.slice((page - 1) * 10, page * 10);

    return {
      paginated,
      total: all.length,
    };
  } catch (error) {
    console.error('Error fetching launches:', error);
    throw new Error('API fetch failed');
  }
}
