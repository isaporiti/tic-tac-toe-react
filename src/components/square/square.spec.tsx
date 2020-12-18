import React from 'react';
import {render} from "@testing-library/react";

import Square from "./Square";
import useTokenProvider from "../../hooks/token/useTokenProvider";

describe('Square', () => {
  it('should initially render empty', () => {
    const tokenProvider: () => string = jest.fn();

    const {getByLabelText} = render(<Square tokenProvider={tokenProvider}/>);
    const square: HTMLElement = getByLabelText('square');

    expect(square).toBeInTheDocument();
    expect(square).toBeEmptyDOMElement();
  });


  it('should get the token from a token provider function when clicked', () => {
    const token: string = 'X';
    const tokenProvider: () => string = jest.fn(() => {
      return token;
    });

    const {getByLabelText} = render(<Square tokenProvider={tokenProvider}/>);
    const square: HTMLElement = getByLabelText('square');

    expect(square).not.toHaveTextContent(token);
    square.click();
    expect(tokenProvider).toBeCalled();
    expect(square).toHaveTextContent(token)
  });

  it('should not change its token if already clicked and clicked again', () => {
    const tokenProvider: () => string = useTokenProvider();

    const {getByLabelText} = render(<Square tokenProvider={tokenProvider}/>);
    const square: HTMLElement = getByLabelText('square');

    const token = 'X';
    expect(square).not.toHaveTextContent(token);
    square.click();
    expect(square).toHaveTextContent(token)
    square.click();
    expect(square).toHaveTextContent(token);
    square.click();
    expect(square).toHaveTextContent(token);
  });
});