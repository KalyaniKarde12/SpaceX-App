import axios from 'axios';

export async function fetchLaunches(filters = {}) {
  const { page = 1, launch_year, launch_success, land_success } = filters;
  const url = 'https://api.spacexdata.com/v3/launches';

  try {
    const response = await axios.get(url);
    let all = response.data;

    // ✅ Apply filters
    if (launch_year) {
      all = all.filter(launch => String(launch.launch_year) === String(launch_year));
    }

    if (launch_success) {
      all = all.filter(launch => String(launch.launch_success) === String(launch_success.toLowerCase()));
    }

    if (land_success) {
      all = all.filter(launch => 
        launch.rocket?.first_stage?.cores?.some(core => 
          String(core.land_success) === String(land_success.toLowerCase())
        )
      );
    }

    const total = all.length;

    // ✅ Paginate filtered data
    const paginated = all.slice((page - 1) * 10, page * 10);

    return {
      paginated,
      total
    };
  } catch (error) {
    throw new Error('api_failed');
  }
}
