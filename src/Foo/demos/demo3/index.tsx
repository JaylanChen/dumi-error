import React, { useEffect } from 'react';

export default () => {
  useEffect(() => {
    console.log('demo3');
  }, []);

  return <div>demo 3</div>;
};
