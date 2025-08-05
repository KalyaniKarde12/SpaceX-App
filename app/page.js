import LaunchCard from '../components/LaunchCard';
import Filters from '../components/Filters';
import { fetchLaunches } from '../utils/api';
import ErrorWatcher from '../components/ErrorWatcher';
import Pagination from '../components/Pagination';

export default async function Home({ searchParams }) {
  const page = parseInt(searchParams.page || '1', 10);
  let launches = [];
  let total = 0;

  try {
    const data = await fetchLaunches({ ...searchParams, page });
    launches = data.paginated;
    total = data.total;
  } catch (err) {
    // Redirect to error URL (this will trigger toast)
    return (
      <main className="container">
        <ErrorWatcher />
        <p>Something went wrong. Please refresh or try again later.</p>
      </main>
    );
  }

  const totalPages = Math.ceil(total / 10);

  return (
    <main className="container">
      <ErrorWatcher />

      <h1 className="page-title">SpaceX Launch Programs</h1>

      <div className="layout">
        <div className="sidebar">
          <Filters />
        </div>

        <div className="content">
          <p className="total-count">
            Total launches found: <strong>{total}</strong>
          </p>

          {launches.length === 0 ? (
            <p>No launches found for selected filters.</p>
          ) : (
            <div className="grid">
              {launches.map((launch) => (
                <LaunchCard
                  key={`${launch.flight_number}-${launch.launch_date_utc}`}
                  launch={launch}
                />
              ))}

            </div>
          )}

          {totalPages > 1 && (
            <Pagination
              page={page}
              totalPages={totalPages}
              searchParams={searchParams}
            />
          )}
        </div>
      </div>
    </main>
  );
}
