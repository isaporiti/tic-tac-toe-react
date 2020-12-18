import React from 'react';
import {render} from "@testing-library/react";

import Square from "./Square";

describe('Square', () => {
  it('should initially render empty', () => {
    const tokenProvider: () => string = jest.fn();

    const {getByLabelText} = render(<Square tokenProvider={tokenProvider}/>);
    const square: HTMLElement = getByLabelText('square');

    expect(square).toBeInTheDocument();
    expect(square).toBeEmptyDOMElement();
  });

  it('should draw a token when clicked', () => {
    const token: string = 'X';
    const tokenProvider: () => string = jest.fn();

    const {getByLabelText} = render(<Square tokenProvider={tokenProvider}/>);
    const square: HTMLElement = getByLabelText('square');

    expect(square).not.toHaveTextContent(token);
    square.click();
    expect(square).toHaveTextContent(token)
  });

  it('should get the token from a token provider function when clicked', () => {
    const token: string = 'X';
    const tokenProvider: () => string = jest.fn(() => {
      return token;
    });

    const {getByLabelText} = render(<Square tokenProvider={tokenProvider} />);
    const square: HTMLElement = getByLabelText('square');

    square.click();
    expect(tokenProvider).toBeCalled();
    expect(square).toHaveTextContent(token)
  });
});