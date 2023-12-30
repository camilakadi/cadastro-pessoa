import { render, fireEvent } from '@testing-library/vue';
import CpInput from './CpInput.vue';

describe('CpInput', () => {
  it('renders the input label correctly', () => {
    const { getByTestId } = render(CpInput, {
      props: {
        label: 'Input Label',
        modelValue: 'Input Value',
        required: true,
        errorMessage: 'Please enter a value'
      }
    });

    expect(getByTestId('cp-input-label').textContent).toBe('Input Label');
  });

  it('renders the input value correctly', () => {
    const { getByTestId } = render(CpInput, {
      props: {
        label: 'Input Label',
        modelValue: 'Input Value',
        required: true,
        errorMessage: 'Please enter a value'
      }
    });

    expect(getByTestId('cp-input').value).toBe('Input Value');
  });

  it('emits the input value on input', async () => {
    const { getByTestId, emitted } = render(CpInput, {
      props: {
        label: 'Input Label',
        modelValue: 'Input Value',
        required: true,
        errorMessage: 'Please enter a value'
      }
    });

    const input = getByTestId('cp-input');
    await fireEvent.update(input, 'New Input Value');

    expect(emitted()).toHaveProperty('update:modelValue');
  });

  it('renders the error message correctly when the input is invalid', async () => {
    const { getByTestId } = render(CpInput, {
      props: {
        label: 'Input Label',
        modelValue: '',
        required: true,
        errorMessage: 'Please enter a value'
      }
    });

    const input = getByTestId('cp-input');
    await fireEvent.update(input, '');

    expect(getByTestId('cp-input-error').textContent).toBe('Please enter a value');
    expect(getByTestId('cp-input-error')).toBeVisible();
  });

  it('does not render the error message when the input is valid', async () => {
    const { getByTestId } = render(CpInput, {
      props: {
        label: 'Input Label',
        modelValue: 'Input Value',
        required: true,
        errorMessage: 'Please enter a value'
      }
    });

    const input = getByTestId('cp-input');
    await fireEvent.update(input, 'Input Value');

    expect(getByTestId('cp-input-error')).not.toBeVisible();
  });
});
