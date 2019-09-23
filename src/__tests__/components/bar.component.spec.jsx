import * as React from 'react';
import { render } from '@testing-library/react';

import { HomePage } from '../../app/pages/home.page';

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', () => {
      const { getByText } = render(<HomePage />);
      expect(getByText('Hello Next.js')).toBeInTheDocument();
    });
  });
});
