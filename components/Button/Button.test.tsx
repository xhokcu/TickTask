import React from 'react';
import { render } from '@testing-library/react-native';
import Button from './Button.index';

describe('Button component', () => {
  it('should render the button with the correct title', () => {
    const { getByText } = render(<Button title="Click Me" onPress={() => {}} />);

    // Butonun dogru title ile render edildigine emin olalim
    const buttonTitle = getByText('Click Me');
    expect(buttonTitle).toBeTruthy();
  });
});
