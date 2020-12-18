import React from "react";
import Square from "../square/Square";
import useTokenProvider from "../../hooks/token/useTokenProvider";

const SQUARE_AMOUNT: number = 9;

export default function Board() {
  const tokenProvider: () => string = useTokenProvider();

  function buildSquares(): JSX.Element[] {
    const squares: JSX.Element[] = [];

    for (let i: number = 0; i < SQUARE_AMOUNT; i++) {
      squares.push(<Square key={i} tokenProvider={tokenProvider}/>)
    }

    return squares;
  }

  return <>
    {buildSquares()}
  </>;
}