<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'

const eventForButton = () => {
  alert('You clicked danger button')
}
</script>

<template>
  <h1 class="heading-1">Button</h1>
  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <ButtonComponent label="Primary" color="primary" disabled />
    <ButtonComponent label="Secondary" color="second" disabled />
  </div>
  <h2 class="heading-2">Colors</h2>
  <div class="line">
    <ButtonComponent label="Primary" color="primary" />
    <ButtonComponent label="Secondary" color="second" />
    <ButtonComponent label="Success" color="success" />
    <ButtonComponent label="Info" color="info" />
    <ButtonComponent label="Warning" color="warning" />
    <ButtonComponent label="Danger" color="danger" />
  </div>
  <h2 class="heading-2">Rounded</h2>
  <div class="line">
    <ButtonComponent label="Primary" color="primary" rounded />
    <ButtonComponent label="Secondary" color="second" rounded />
    <ButtonComponent label="Success" color="success" rounded />
    <ButtonComponent label="Info" color="info" rounded />
    <ButtonComponent label="Warning" color="warning" rounded />
    <ButtonComponent label="Danger" color="danger" rounded />
  </div>
  <h2 class="heading-2">Outlined</h2>
  <div class="line">
    <ButtonComponent label="Primary" color="primary" outlined />
    <ButtonComponent label="Secondary" color="second" outlined />
    <ButtonComponent label="Success" color="success" outlined />
    <ButtonComponent label="Info" color="info" outlined />
    <ButtonComponent label="Warning" color="warning" outlined />
    <ButtonComponent label="Danger" color="danger" outlined />
  </div>
  <h2 class="heading-2">Icon</h2>
  <div class="line">
    <ButtonComponent color="primary" icon="heart" outlined />
    <ButtonComponent color="second" icon="hand" />
    <ButtonComponent color="success" icon="address-book" outlined />
    <ButtonComponent color="info" icon="credit-card" />
    <ButtonComponent color="warning" icon="lemon" outlined />
    <ButtonComponent color="danger" icon="hourglass" />
  </div>
  <h2 class="heading-2">Size</h2>
  <div class="line">
    <ButtonComponent label="Normal" color="primary" />
    <ButtonComponent label="Large" color="primary" size="large" />
  </div>
  <h2 class="heading-2">Event</h2>
  <div class="line">
    <ButtonComponent label="@click" color="danger" @click="eventForButton" />
  </div>
</template>
