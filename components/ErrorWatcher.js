'use client';
import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function ErrorWatcher() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get('error') === 'api') {
      toast((t) => (
        <div className="toast-content">
          <span>⚠️ Failed to load launch data. Please try again later.</span>
          <button onClick={() => toast.dismiss(t.id)} className="close-btn">×</button>
        </div>
      ));

      // Remove the error param after showing
      const params = new URLSearchParams(searchParams.toString());
      params.delete('error');
      router.replace(`/?${params.toString()}`, { scroll: false });
    }
  }, [searchParams, router]);

  return null;
}
