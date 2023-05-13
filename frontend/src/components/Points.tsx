import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import usePoints from '../hooks/usePoints';

const Points = () => {
  const { data, loading, error } = usePoints();

  if (loading) {
    console.log(loading);
  }

  if (error) {
    console.log(error);
  }
  
  if (data) {
    console.log(data);
  }

  return (
    <div>
        <h1>MyComponent</h1>
    </div>
  );
};

export default Points;