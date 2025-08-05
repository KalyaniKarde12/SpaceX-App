'use client';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

export default function Pagination({ page, totalPages }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams.toString());

    // Update the page number but preserve all other filters
    params.set('page', newPage);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="pagination">
      <button
        className="filter-button"
        disabled={page <= 1}
        onClick={() => handlePageChange(page - 1)}
      >
        Previous
      </button>

      <span>Page {page} of {totalPages}</span>

      <button
        className="filter-button"
        disabled={page >= totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
