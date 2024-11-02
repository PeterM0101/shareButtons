import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Ensure router is ready
    if (router.isReady) {
      void router.push('/items/1');
    }
  }, [router.isReady]);

  return null;
}
