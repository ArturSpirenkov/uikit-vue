<script setup>
import CheckBox from '@/components/Checkbox/CheckBox.vue'
import { ref, watch } from 'vue'

const isDarkTheme = ref(false)

const toggle = watch(isDarkTheme, () => {
  document.body.classList.toggle('dark-theme')
})
</script>

<template>
  <header class="header">
    <RouterLink to="/">UI Kit </RouterLink>
    <CheckBox
      label="Theme"
      id="theme"
      type="switch"
      v-model:checked="isDarkTheme"
      style="padding-left: 10px"
    />
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: #fff;
  font-weight: bold;
  padding: 0 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  height: 62px;
  display: flex;
  align-items: center;
  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  background-color: var(--bg-main);
}
</style>
