import { useEffect } from 'react';
import { Router } from 'react-router-dom';

export const ScrollToTop =({ history }) =>{
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}

