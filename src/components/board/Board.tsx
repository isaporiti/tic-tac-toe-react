import React from "react";
import Square from "../square/Square";

const SQUARES_AMOUNT: number = 9;

export default function Board() {
  function buildSquares(): JSX.Element[] {
    const squares: JSX.Element[] = [];

    for (let i: number = 0; i < SQUARES_AMOUNT; i++) {
      squares.push(<Square key={i}/>)
    }

    return squares;
  }

  return <>
    {buildSquares()}
  </>;
}