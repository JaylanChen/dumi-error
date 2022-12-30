import React, { useEffect } from 'react';

export default () => {
  useEffect(() => {
    console.log('demo1');
  }, []);

  return <div>demo 1</div>;
};
