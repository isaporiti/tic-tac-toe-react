import React from 'react';
import {render} from "@testing-library/react";

import Square from "./Square";

describe('Square', () => {
  it('should initially render empty', () => {
    const {getByLabelText} = render(<Square/>);
    const square = getByLabelText('square');

    expect(square).toBeInTheDocument();
    expect(square).toBeEmptyDOMElement();
  });

  it('should draw a token when clicked', () => {
    const token = 'X';

    const {getByLabelText} = render(<Square />);
    const square = getByLabelText('square');

    expect(square).not.toHaveTextContent(token);
    square.click();
    expect(square).toHaveTextContent(token)
  });
});