import { useEffect } from 'react';
import { useState } from 'react';

function MultipleReturnBasics() {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 3000);
  });
  if (isLoading) {
    return <h2>Loading .....</h2>;
  }
  return <h2>Multiple Return Basics</h2>;
}

export default MultipleReturnBasics;
