import { useEffect, useState } from 'react';
import Loading from './Problem5Components/Loading';

export default function Problem5() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, []); 

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div style={{ display: 'block' }}>
          Input: <input type="text" />
          <p>User is idle...</p>
        </div>
      )}
    </>
  );
}
