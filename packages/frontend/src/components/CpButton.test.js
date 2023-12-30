import { render, fireEvent } from '@testing-library/vue';
import CpButton from './CpButton.vue';

describe('CpButton', () => {
  it('renders the button text correctly', () => {
    const { getByTestId } = render(CpButton, {
      props: {
        text: 'Click me'
      }
    });

    expect(getByTestId('cp-button').textContent).toBe('Click me');
  });

  it('emits the click event on click', async () => {
    const { getByTestId, emitted } = render(CpButton, {
      props: {
        text: 'Click me'
      }
    });

    const button = getByTestId('cp-button');
    await fireEvent.click(button);

    expect(emitted()).toHaveProperty('click');
  });
});
