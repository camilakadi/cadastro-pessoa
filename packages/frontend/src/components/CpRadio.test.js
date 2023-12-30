import { render, fireEvent } from '@testing-library/vue';
import CpRadio from './CpRadio.vue';

describe('CpRadio', () => {
  const options = [
    { id: 'option1', value: 'Option 1', label: 'Option 1' },
    { id: 'option2', value: 'Option 2', label: 'Option 2' },
    { id: 'option3', value: 'Option 3', label: 'Option 3' }
  ];

  it('renders the radio options correctly', () => {
    const { queryAllByTestId, getByTestId } = render(CpRadio, {
      props: {
        options,
        label: 'Radio Options',
        modelValue: 'Option 2',
        required: true,
        errorMessage: 'Please select an option'
      }
    });

    const radioInputs = queryAllByTestId(/cp-radio-input/);
    expect(radioInputs.length).toBe(options.length);
    expect(getByTestId('cp-radio-label-0').textContent).toBe(options[0].label);
    expect(getByTestId('cp-radio-label-1').textContent).toBe(options[1].label);
    expect(getByTestId('cp-radio-label-2').textContent).toBe(options[2].label);
  });

  it('sets the initial selected option correctly', () => {
    const { getByTestId } = render(CpRadio, {
      props: {
        options,
        label: 'Radio Options',
        modelValue: 'Option 2',
        required: true,
        errorMessage: 'Please select an option'
      }
    });

    expect(getByTestId('cp-radio-input-0').checked).toBe(false);
    expect(getByTestId('cp-radio-input-1').checked).toBe(true);
  });

  it('emits the selected option on change', async () => {
    const { getByTestId } = render(CpRadio, {
      props: {
        options,
        label: 'Radio Options',
        modelValue: 'Option 2',
        required: true,
        errorMessage: 'Please select an option'
      }
    });

    const radioInput = getByTestId('cp-radio-input-0');
    await fireEvent.click(radioInput);

    expect(getByTestId('cp-radio-input-0').checked).toBe(true);
  });

  it('displays the error message when required and no option is selected', async () => {
    const { getByTestId } = render(CpRadio, {
      props: {
        options,
        label: 'Radio Options',
        modelValue: '',
        required: true,
        errorMessage: 'Please select an option'
      }
    });

    const errorLabel = getByTestId('cp-radio-error-label');
    expect(errorLabel.textContent).toBe('Please select an option');
  });

  it('does not display the error message when an option is selected', async () => {
    const { getByTestId } = render(CpRadio, {
      props: {
        options,
        label: 'Radio Options',
        modelValue: '',
        required: true,
        errorMessage: 'Please select an option'
      }
    });

    const radioInput = getByTestId('cp-radio-input-0');
    await fireEvent.click(radioInput);

    const errorLabel = getByTestId('cp-radio-error-label');
    expect(errorLabel).not.toBeVisible();
  });
});
