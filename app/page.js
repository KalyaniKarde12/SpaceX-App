import LaunchCard from '../components/LaunchCard';
import Filters from '../components/Filters';
import { fetchLaunches } from '../utils/api';

export default async function Home({ searchParams }) {
  const launches = await fetchLaunches(searchParams);

  return (
    <div className="container">
      <h1>SpaceX Launch Programs</h1>
      <Filters currentFilters={searchParams} />
      <div className="grid">
        {launches.map((launch) => (
          <LaunchCard key={launch.flight_number} launch={launch} />
        ))}
      </div>
    </div>
  );
}
