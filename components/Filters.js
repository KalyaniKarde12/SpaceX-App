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

    // ✅ Always reset page to 1 when filters change
    params.set('page', '1');

    router.push(`${pathname}?${params.toString()}`);
  };

  const clearAllFilters = () => {
    // ✅ Remove all filters and reset page
    router.push(`${pathname}?page=1`);
  };

  return (
    <div className="filters">
      <div className="clear-filters-container">
        <button
          onClick={clearAllFilters}
          className="filter-button clear"
        >
          Clear All Filters
        </button>
      </div>

      <div className="filters-section">
        <h3>Launch Year</h3>
        <hr />
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
        <hr />
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
        <hr />
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
