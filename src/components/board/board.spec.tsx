import React from "react";
import {render} from "@testing-library/react";
import Board from "./Board";

describe('Board', () => {
  it('should render 9 Squares inside', () => {
    const {getAllByLabelText} = render(<Board/>);
    const squares: HTMLElement[] = getAllByLabelText('square');

    expect(squares).toHaveLength(9);
  });
});