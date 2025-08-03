import { useRouter } from 'next/router';

const years = Array.from({ length: 15 }, (_, i) => 2006 + i);

export default function Filters() {
    const router = useRouter();
    const { query } = router;

    const toggleFilter = (key, value) => {
        const updated = { ...query };
        updated[key] = updated[key] === value.toString() ? '' : value;
        router.push({ pathname: '/', query: updated });
    };

    return (
        <div className="filters">
  <h3>Launch Year</h3>
  {years.map((year) => (
    <button
      key={year}
      className={query.launch_year == year.toString() ? 'active' : ''}
      onClick={() => toggleFilter('launch_year', year)}
    >
      {year}
    </button>
  ))}

  <h3>Successful Launch</h3>
  <button
    className={query.launch_success === 'true' ? 'active' : ''}
    onClick={() => toggleFilter('launch_success', 'true')}
  >
    True
  </button>
  <button
    className={query.launch_success === 'false' ? 'active' : ''}
    onClick={() => toggleFilter('launch_success', 'false')}
  >
    False
  </button>

  <h3>Successful Landing</h3>
  <button
    className={query.land_success === 'true' ? 'active' : ''}
    onClick={() => toggleFilter('land_success', 'true')}
  >
    True
  </button>
  <button
    className={query.land_success === 'false' ? 'active' : ''}
    onClick={() => toggleFilter('land_success', 'false')}
  >
    False
  </button>
</div>
        
    );
}
