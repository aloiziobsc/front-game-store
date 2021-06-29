import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders Game Shop', () => {
  const { getAllByText } = render(<App />);
  const tituloText = getAllByText(/Game Shop/i)[0];
  expect(tituloText).toBeInTheDocument();
});

test('renders card game', () => {
  const { getAllByTestId, getAllByRole } = render(<App />);
  const selectItem = getAllByTestId('card-game')[0];
  const image = getAllByRole('img');
  expect(selectItem).toBeInTheDocument();
  expect(image.length).toBeGreaterThan(5);
});

test('renders 9 cards game', () => {
  const { getAllByTestId } = render(<App />);
  const selectItem = getAllByTestId('card-game');
  expect(selectItem.length).toEqual(9);
});

test('renders select order', () => {
  const { getAllByTestId } = render(<App />);
  const selectItem = getAllByTestId('select-option');
  expect(selectItem.length).toEqual(1);
});

test('renders button minus disabled', () => {
  const { getAllByRole } = render(<App />);
  const buttonMinus = getAllByRole('button')[1];
  expect(buttonMinus).toBeDisabled();
});

test('activate button -', () => {
  const { getAllByRole } = render(<App />);
  const button = getAllByRole('button')[1];
  fireEvent.click(button)
  const buttonMinus = getAllByRole('button')[0];
  expect(buttonMinus).not.toBeDisabled();
});

test('renders checkout card', () => {
  const { getByTestId } = render(<App />);
  const selectItem = getByTestId('card-checkout');
  expect(selectItem).toBeInTheDocument();
});
