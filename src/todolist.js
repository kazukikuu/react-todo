import Example from './App'
import React, { useContext } from 'react';

function List() {
  const list = useContext(Example);

  return (
    <>
      <h1>{list}</h1>
    </>
  );
}

export default List;