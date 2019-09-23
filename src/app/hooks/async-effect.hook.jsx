import { useEffect } from 'react';

const useAsyncEffect = (effect, deps) => {
  useEffect(() => {
    effect().catch(e => console.warn('useAsyncEffect error', e));
  }, deps);
};

export { useAsyncEffect };
