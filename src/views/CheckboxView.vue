<script setup>
import { ref } from 'vue';
import CheckBox from '@/components/Checkbox/CheckBox.vue';
import CheckboxGroup from '@/components/Checkbox/CheckBoxGroup.vue';

const checkboxActive = ref(true);
const checkboxDisabled = ref(true);
const checkboxDisabledChecked = ref(true);
const listOfHeroes = ref([
  { name: 'Art', id: '1' },
  { name: 'Nick', id: '2' },
  { name: 'Ivan', id: '3' },
  { name: 'Bob', id: '4' },
]);
const selectedHeroes = ref(['1', '3']);
const switchProfessional = ref(false);
</script>

<template>
  <h1 class="heading-1">Checkbox</h1>
  <h2 class="heading-2">Checkbox Active</h2>
  <div class="line">
    <CheckBox
      label="Checkbox Active"
      id="checkboxActive"
      name="checkboxActive"
      value="I like it"
      v-model:checked="checkboxActive"
    />
  </div>
  <h2 class="heading-2">Checkbox Disabled</h2>
  <div class="line">
    <CheckBox
      label="Checkbox Disabled"
      id="checkboxDisabled"
      name="checkboxDisabled"
      value="I like it"
      :disabled="checkboxDisabled"
      v-model:checked="checkboxDisabledChecked"
    />
  </div>
  <h2 class="heading-2">Checkbox Group</h2>
  <div class="line line_block">
    <p>Selected Heroes: {{ selectedHeroes }}</p>
    <CheckboxGroup v-model:value="selectedHeroes" name="heroes" :options="listOfHeroes" />
  </div>
  <h2 class="heading-2">Switch</h2>
  <div class="line line_block">
    <p>Switch: {{ switchProfessional }}</p>
    <CheckBox
      label="I'm a professional"
      id="switch"
      name="switch"
      value="I'm a professional"
      type="switch"
      v-model:checked="switchProfessional"
    />
  </div>
</template>
