<template>
  <div>
    <component
      :is="currentStepComponent"
      :currentStep="currentStep"
      :nextStep="handleNextStep"
      :previousStep="handlePreviousStep"
      :selectedPersonType="selectedPersonType"
      :formAllData="formAllData"
      @updateSelectedPersonType="handleUpdateSelectedPersonType"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

import CpStepOne from '@/views/CpStepOne.vue';
import CpStepTwo from '@/views/CpStepTwo.vue';
import CpStepThree from '@/views/CpStepThree.vue';
import CpStepFour from '@/views/CpStepFour.vue';
import CpStepTwoPj from '@/views/CpStepTwoPj.vue';
import CpStepFourPj from '@/views/CpStepFourPj.vue';

const currentStep = ref(1);
const selectedPersonType = ref('');

const physicalPerson = {
  name: '',
  cpf: '',
  bornDate: ''
};

const legalPerson = {
  socialReason: '',
  cnpj: '',
  openingDate: ''
};

const formAllData = ref({
  ...physicalPerson,
  ...legalPerson,
  emailAddress: '',
  selectedPersonType: '',
  phone: '',
  companyBornDate: '',
  companyPhone: '',
  password: ''
});

const handleNextStep = (data) => {
  formAllData.value = { ...formAllData.value, ...data };
  currentStep.value += 1;
};

const handlePreviousStep = (data) => {
  formAllData.value = { ...formAllData.value, ...data };
  if (currentStep.value === 1) return;

  currentStep.value -= 1;
};

const handleUpdateSelectedPersonType = (value) => {
  if (value === 'physicalPerson') {
    formAllData.value = { ...formAllData.value, ...legalPerson };
  } else {
    formAllData.value = { ...formAllData.value, ...physicalPerson };
  }

  selectedPersonType.value = value;
};

const currentStepComponent = computed(() => {
  switch (currentStep.value) {
    case 1:
      return CpStepOne;
    case 2:
      return selectedPersonType.value === 'legalPerson' ? CpStepTwoPj : CpStepTwo;
    case 3:
      return CpStepThree;
    case 4:
      return selectedPersonType.value === 'legalPerson' ? CpStepFourPj : CpStepFour;
    default:
      return null;
  }
});
</script>
