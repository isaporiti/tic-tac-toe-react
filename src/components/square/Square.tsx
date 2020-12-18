import React, {useState} from 'react';

export default function Square() {
  const [token, setToken] = useState('');

  function placeToken() {
    setToken('X');
  }

  return <>
    <div aria-label="square" onClick={placeToken}>{token}</div>
  </>;
}

