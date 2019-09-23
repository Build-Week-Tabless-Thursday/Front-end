import * as React from 'react';
import { render } from '@testing-library/react';

import { StoreService } from '@services/store.service';
import { HomePage } from '@pages/home.page';

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', () => {
      const { getByText } = render(
        <StoreService.Container>
          <HomePage />
        </StoreService.Container>
      );

      expect(getByText('Hello Next.js')).toBeInTheDocument();
    });
  });
});
