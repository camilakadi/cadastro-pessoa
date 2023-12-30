import { render } from '@testing-library/vue';
import CpTitle from './CpTitle.vue';

describe('CpTitle', () => {
  it('renders the title correctly', () => {
    const title = 'Hello, World!';
    const { getByText } = render(CpTitle, {
      props: { title }
    });

    expect(getByText(title)).toBeInTheDocument();
  });

  it('applies the correct styles', () => {
    const title = 'Hello, World!';
    const { getByText } = render(CpTitle, {
      props: { title }
    });

    const titleElement = getByText(title);
    expect(titleElement).toHaveClass('cp-title');
  });
});
