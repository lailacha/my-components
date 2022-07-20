import { render } from '@testing-library/react';

import CoolComponents from './cool-components';

describe('CoolComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoolComponents />);
    expect(baseElement).toBeTruthy();
  });
});
