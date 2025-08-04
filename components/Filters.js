'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const years = Array.from({ length: 15 }, (_, i) => 2006 + i);

export default function Filters({ currentFilters }) {
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
      <h3>Launch Year</h3>
      {years.map((year) => (
        <button key={year} onClick={() => toggleFilter('launch_year', year)}>
          {year}
        </button>
      ))}
      <h3>Successful Launch</h3>
      <button onClick={() => toggleFilter('launch_success', 'true')}>True</button>
      <button onClick={() => toggleFilter('launch_success', 'false')}>False</button>

      <h3>Successful Landing</h3>
      <button onClick={() => toggleFilter('land_success', 'true')}>True</button>
      <button onClick={() => toggleFilter('land_success', 'false')}>False</button>
    </div>
  );
}
