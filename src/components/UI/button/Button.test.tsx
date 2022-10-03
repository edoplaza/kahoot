import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
const onClick = jest.fn();

test('render the button with correct props', () => {
  render(<Button name="New Game" onClick={onClick} />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(screen.getByText('New Game')).toBeTruthy();
  expect(onClick).toHaveBeenCalledTimes(1);
});
