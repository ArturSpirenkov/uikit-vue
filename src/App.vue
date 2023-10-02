<script setup>
import LayoutHeader from '@/layout/HeaderComponents.vue';
import LayoutSidebar from '@/layout/SidebarComponents.vue';
import { ref } from 'vue';

const isOpenMenu = ref(false);

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
};
</script>

<template>
  <div class="container">
    <LayoutHeader class="header" />
    <div class="sidebar-toggle" @click="toggleMenu">
      <font-awesome-icon icon="fa-regular fa-rectangle-list" :beatFade="isOpenMenu" size="xl" />
    </div>
    <LayoutSidebar :openSidebar="isOpenMenu" />
    <div :class="['content', { content_full: !isOpenMenu }]">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  color: var(--font-color);
  height: 100vh;
}
.content {
  margin-left: 285px;
  padding-top: 62px;
  height: 100%;
  padding-left: 40px;
  transition: 0.2s;
  &_full {
    margin-left: 0;
  }
}
.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 35px;
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
</style>
