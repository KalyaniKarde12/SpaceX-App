// pages/index.js
import { fetchLaunches } from '../utils/api';
import LaunchCard from '../components/LaunchCard';
import Filters from '../components/Filters';

export default function Home({ launches }) {
  return (
    <div className="container">
      <h1>SpaceX Launch Programs</h1>
      <div className="main">
        <div className="sidebar">
          <Filters />
        </div>
        <div className="grid">
          {launches.map((launch) => (
            <LaunchCard key={launch.flight_number} launch={launch} />
          ))}
        </div>
      </div>
    </div>
  );
}



export async function getServerSideProps({ query }) {
    try {
        console.log('Query:', query); // Debug
        const launches = await fetchLaunches(query);
        console.log('Fetched Launches:', launches.length); // Debug
        return { props: { launches } };
    } catch (err) {
        console.error('Error fetching launches:', err);
        return { props: { launches: [] } };
    }
}

