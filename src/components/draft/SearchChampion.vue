<script setup lang="ts">
import { Field } from '@ark-ui/vue/field'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

</script>

<template>
  <Field.Root>
    <div class="input-with-icon">
      <FontAwesomeIcon class="search-icon" :icon="['fas', 'magnifying-glass']" />
      <Field.Input />
    </div>
  </Field.Root>
</template>

<style scoped>
.input-with-icon {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 10px;
  width: 16px;
  height: 16px;
  color: var(--font-color-white);
  pointer-events: none;
}

[data-scope='field'][data-part='input'] {
  height: 4vh;
  background-color: var(--color-surface);
  color: var(--font-color-white);
  border-radius: 4px;
  transition: border-color 300ms ease-in-out;
  border: 0;
  padding-left: 32px;
  font-family: Poppins;
  box-shadow: var(--box-shadow);
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
}
</style>