import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PricingCard from '../PricingCard';

describe('PricingCard', () => {
  const defaultProps = {
    title: 'Test Plan',
    description: 'Test description',
    features: [{ icon: '⭐', text: 'Test feature' }],
    action: { label: 'Click Me', href: '/test' },
  };

  it('renders title and description', () => {
    render(<PricingCard {...defaultProps} />);
    expect(screen.getByText('Test Plan')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('renders features and action link', () => {
    render(<PricingCard {...defaultProps} />);
    expect(screen.getByText('Test feature')).toBeInTheDocument();
    const link = screen.getByRole('link', { name: /Click Me/i });
    expect(link).toHaveAttribute('href', '/test');
  });
}); 