import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders initial counter value as 0', () => {
    render(<Counter />);

    expect(screen.getByText('Counter: 0')).toBeInTheDocument();
  });

  test('increments counter when Increase button is clicked', () => {
    render(<Counter />);

    const increaseButton = screen.getByText('Increase');

    fireEvent.click(increaseButton);

    expect(screen.getByText('Counter: 1')).toBeInTheDocument();
  });

  test('decreases counter when Decrease button is clicked', () => {
    render(<Counter />);

    const increaseButton = screen.getByText('Increase');
    const decreaseButton = screen.getByText('Decrease');

    // Increase first
    fireEvent.click(increaseButton);

    // Then decrease
    fireEvent.click(decreaseButton);

    expect(screen.getByText('Counter: 0')).toBeInTheDocument();
  });

  test('does not decrease below zero', () => {
    render(<Counter />);

    const decreaseButton = screen.getByText('Decrease');

    fireEvent.click(decreaseButton);

    expect(screen.getByText('Counter: 0')).toBeInTheDocument();
  });
});
