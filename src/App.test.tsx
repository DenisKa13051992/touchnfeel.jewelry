import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import App from './App';

describe('App', async () => {
  it('render', async () => {
    render(<App />);
    expect(screen.getByRole('heading')).toHaveTextContent('Home page');
  });
});
