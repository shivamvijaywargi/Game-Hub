'use client'; // Error components must be Client Components

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2></h2>

      <main>
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-96 md:px-8">
          <div className="max-w-lg mx-auto space-y-3 text-center">
            <h3 className="text-indigo-600 font-semibold">
              {error.message || 'Something went wrong!'}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                onClick={
                  // Attempt to recover by trying to re-render the segment
                  () => reset()
                }
              >
                Try again
              </Button>
              <Link href="/">
                <Button variant={'outline'}>Go back Home</Button>
              </Link>
            </div>
            <p>Contact support if the issue persists.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
