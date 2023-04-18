import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('Button calls onClick function when clicked', () => {
  const mockOnClick = jest.fn();
  const buttonText = 'Click me!';
  render(<Button onClick={mockOnClick} />);
  const button = screen.getByText(buttonText);
  fireEvent.click(button);
  expect(mockOnClick).toHaveBeenCalled();
});

