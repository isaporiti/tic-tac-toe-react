import React from "react";
import Square from "../square/Square";

const SQUARE_AMOUNT: number = 9;

export default function Board() {
  function buildSquares(): JSX.Element[] {
    const squares: JSX.Element[] = [];

    for (let i: number = 0; i < SQUARE_AMOUNT; i++) {
      squares.push(<Square key={i}/>)
    }

    return squares;
  }

  return <>
    {buildSquares()}
  </>;
}