import React, {useState} from 'react';

interface SquareProps {
  tokenProvider: () => string
}

export default function Square({tokenProvider}: SquareProps) {
  const [token, setToken] = useState('');

  function placeToken() {
    if (!token) {
      setToken(tokenProvider());
    }
  }

  return <>
    <div aria-label="square" onClick={placeToken}>{token}</div>
  </>;
}

