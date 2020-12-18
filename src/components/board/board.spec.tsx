import React from "react";
import {render} from "@testing-library/react";
import Board from "./Board";
import useTokenProvider from "../../hooks/token/useTokenProvider";

jest.mock('../../hooks/token/useTokenProvider');

describe('Board', () => {
  it('should render 9 Squares inside', () => {
    const {getAllByLabelText} = render(<Board/>);
    const squares: HTMLElement[] = getAllByLabelText('square');

    expect(squares).toHaveLength(9);
  });

  it('obtains a token provider from useTokenProvider', () => {
    render(<Board/>);

    expect(useTokenProvider).toBeCalledTimes(1);
  });
});