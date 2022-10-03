import { render, screen } from '@testing-library/react';
import Provider from '../../store/Provider';
import Point from './Point';

describe('Point with default props', () => {
  test('renders Point', () => {
    render(
      <Provider>
        <Point point={{ name: 'A', points: 50 }} />
      </Provider>
    );
    expect(screen.getByTestId('point')).toBeInTheDocument();
    expect(screen.getByText('A')).toBeInTheDocument();
  });
});
