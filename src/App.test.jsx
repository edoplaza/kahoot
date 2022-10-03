/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import { waitFor, render, screen } from '@testing-library/react';
import { getData } from './api';
import App from './App';
import Provider from './store/Provider';

jest.mock('./api');

describe('App', () => {
  beforeEach(() => {
    getData.mockResolvedValue();
    render(
      <Provider>
        <App />
      </Provider>
    );
  });

  test('should render the application with initial settings', async () => {
    await waitFor(() => expect(getData).toHaveBeenCalledTimes(1));

    const bonuses = screen.getByTestId('bonuses');
    expect(bonuses).toHaveTextContent('0');

    const total = screen.getByTestId('total');
    expect(total).toHaveTextContent('0');

    const button = screen.getByRole('button', { name: 'New Game' });
    expect(button).toBeInTheDocument();
  });
});
