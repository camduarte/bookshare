import { useCallback } from 'react';

const useDelayedReload = (delay = 2000) => {
  const delayedReload = useCallback(() => {
    setTimeout(() => {
      window.location.reload();
    }, delay);
  }, [delay]);

  return delayedReload;
};

export default useDelayedReload;
