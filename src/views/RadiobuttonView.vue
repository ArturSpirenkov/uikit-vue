<script setup>
import { ref } from 'vue'
import RadioButton from '@/components/RadioButton.vue'

const footballClubs = ref([
  { name: 'Nick', id: 'f1' },
  { name: 'Art', id: 'f2' },
  { name: 'Ivan', id: 'f3' },
  { name: 'Bob', id: 'f4' },
])
const selectedClub = ref('')

const disabledRadio = ref(true)
const disabledRadioChecked = ref(true)
</script>

<template>
  <h1 class="heading-1">Radiobutton</h1>
  <h2 class="heading-2">Basic</h2>
  <div class="line line_block">
    <p>Selecled Name: {{ selectedClub }}</p>
    <div v-for="club in footballClubs" :key="club.id">
      <RadioButton
        :value="club.name"
        :label="club.name"
        :id="club.id"
        name="club"
        v-model:checkedValue="selectedClub"
      />
    </div>
  </div>
  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <RadioButton
      value="Radiobutton Disabled"
      label="Radiobutton Disabled"
      id="RadiobuttonDissabled"
      name="RadiobuttonDisabled"
      :disabled="disabledRadio"
      v-model:checkedValue="disabledRadioChecked"
    />
  </div>
</template>
