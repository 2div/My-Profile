'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

export default function useRedirectAfterSomeSeconds(seconds = 3) {
    
  const [secondsRemaining, setSecondsRemaining] = useState(seconds);
  const router = useRouter();

  useEffect(() => {
    if (secondsRemaining === 0) router.push('/');

    const timer = setTimeout(() => {
      setSecondsRemaining((prevSecondsRemaining) => prevSecondsRemaining - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [secondsRemaining]);

  return { secondsRemaining };
}