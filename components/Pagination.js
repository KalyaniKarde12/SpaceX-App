'use client';
import { useRouter } from 'next/navigation';

export default function Pagination({ page, totalPages, searchParams }) {
  const router = useRouter();

  const buildPageLink = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage);
    return `/?${params.toString()}`;
  };

  return (
    <div className="pagination">
      <button
        className="filter-button"
        onClick={() => router.push(buildPageLink(page - 1))}
        disabled={page <= 1}
      >
        Previous
      </button>

      <span>Page {page} of {totalPages}</span>

      <button
        className="filter-button"
        onClick={() => router.push(buildPageLink(page + 1))}
        disabled={page >= totalPages}
      >
        Next
      </button>
    </div>
  );
}
