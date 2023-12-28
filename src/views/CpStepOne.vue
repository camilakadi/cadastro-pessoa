<template>
  <div class="cp-step-one">
    <CpStepsNumber count="1" />

    <CpTitle title="Seja bem vindo(a)" />

    <form @submit.prevent="handleFormSubmit">
      <CpInput label="Endereço de e-mail" v-model="emailAddress" type="email" />

      <div class="cp-step-one__person-type">
        <div class="cp-step-one__type">
          <input
            type="radio"
            id="physicalPerson"
            name="physicalPerson"
            value="physicalPerson"
            v-model="personType"
          />
          <label for="physicalPerson">Pessoa física</label>
        </div>

        <div class="cp-step-one__type">
          <input
            type="radio"
            id="legalPerson"
            name="legalPerson"
            value="legalPerson"
            v-model="personType"
          />
          <label for="legalPerson">Pessoa Jurídica</label>
        </div>
      </div>

      <CpButton
        class="cp-step-one__button"
        text="Continuar"
        buttonClass="contained"
        :type="submit"
      />
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CpInput from '@/components/CpInput.vue';
import CpTitle from '@/components/CpTitle.vue';
import CpStepsNumber from '@/components/CpStepsNumber.vue';
import CpButton from '@/components/CpButton.vue';

const props = defineProps({
  nextStep: Function
});

const emailAddress = ref('');
const personType = ref('');

const handleFormSubmit = () => {
  if (!personType.value || !emailAddress.value) return;

  props.nextStep();
};
</script>

<style scoped>
.cp-step-one__person-type {
  display: flex;
  margin-bottom: 12px;
}

.cp-step-one__type {
  margin-right: 12px;
}

.cp-step-one__button {
  width: 100%;
}
</style>
