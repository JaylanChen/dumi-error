import React, { useEffect } from 'react';

export default () => {
  useEffect(() => {
    console.log('demo2');
  }, []);

  return <div>demo 2</div>;
};
