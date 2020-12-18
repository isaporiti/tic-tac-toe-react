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
});