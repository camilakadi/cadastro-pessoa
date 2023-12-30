import { render } from '@testing-library/vue';
import CpStepsNumber from './CpStepsNumber.vue';

describe('CpStepsNumber', () => {
  it('renders the correct count', () => {
    const { getByTestId } = render(CpStepsNumber, {
      props: {
        count: 2
      }
    });

    expect(getByTestId('cp-steps-count').textContent).toBe('2');
  });

  it('renders the correct total steps', () => {
    const { getByTestId } = render(CpStepsNumber, {
      props: {
        count: 2
      }
    });

    expect(getByTestId('cp-steps-title').textContent).toContain('Etapa 2 de 4');
  });
});
