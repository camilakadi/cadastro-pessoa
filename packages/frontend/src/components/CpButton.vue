<template>
  <button
    data-testid="cp-button"
    :type="type"
    class="cp-button"
    :class="[buttonClass, fullWidth ? 'full-width' : '']"
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>

<script setup>
const props = defineProps({
  text: String,
  buttonClass: String,
  type: String,
  clickEvent: Function,
  fullWidth: Boolean
});

function handleClick() {
  if (!props.clickEvent) return;

  props.clickEvent();
}
</script>

<style scoped>
.cp-button {
  padding: 12px 48px;
  font-size: 16px;
  border-radius: 8px;
}

.contained {
  background-color: var(--orange);
  color: var(--white);
  border: 2px solid var(--orange);
}

.outlined {
  background-color: var(--white);
  color: var(--orange);
  border: 2px solid var(--orange);
}

.full-width {
  width: 100%;
}
</style>
