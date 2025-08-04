'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const years = Array.from({ length: 15 }, (_, i) => 2006 + i);

export default function Filters() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const toggleFilter = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get(key) === value.toString()) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="filters">
      <div className="clear-filters-container">
        <button
          onClick={() => router.push(pathname)}
          className="filter-button clear"
        >
          Clear All Filters
        </button>
      </div>


      <div className="filters-section">
        <h3>Launch Year</h3>
        <hr></hr>
        {years.map((year) => (
          <button
            key={year}
            onClick={() => toggleFilter('launch_year', year)}
            className={`filter-button ${searchParams.get('launch_year') == year ? 'active' : ''}`}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="filters-section">
        <h3>Successful Launch</h3>
        <hr></hr>
        {['True', 'False'].map((val) => (
          <button
            key={val}
            onClick={() => toggleFilter('launch_success', val)}
            className={`filter-button ${searchParams.get('launch_success') == val ? 'active' : ''}`}
          >
            {val}
          </button>
        ))}
      </div>

      <div className="filters-section">
        <h3>Successful Landing</h3>
        <hr></hr>
        {['True', 'False'].map((val) => (
          <button
            key={val}
            onClick={() => toggleFilter('land_success', val)}
            className={`filter-button ${searchParams.get('land_success') == val ? 'active' : ''}`}
          >
            {val}
          </button>
        ))}
      </div>
    </div>
  );
}
