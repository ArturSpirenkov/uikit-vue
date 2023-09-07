<script setup lang="ts">
import { ref } from 'vue'
import HeaderView from '@/layout/HeaderComponents.vue'
import SidebarView from '@/layout/SidebarComponents.vue'

const isOpenMenu = ref(false)

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}
</script>

<template>
  <div class="container">
    <div class="sidebar-toggle" @click="toggleMenu">XXX</div>
    <HeaderView />
    <SidebarView :openSidebar="isOpenMenu" />
    <div :class="['content', { content_full: !isOpenMenu }]">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/index.scss';

.content {
  max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: 0.2s;
  background-color: aqua;
  &_full {
    margin-left: 0;
  }
}

.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 15px;
  background: var(--primary);
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 1024px) {
  .content {
    margin-left: 0;
  }
}
</style>
