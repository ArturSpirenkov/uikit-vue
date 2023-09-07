<script setup lang="ts">
import { ref } from 'vue'

interface SideBarProps {
  openSidebar: boolean
}

const props = defineProps<SideBarProps>()

const links = ref([{ name: 'Button', href: '/button' }])
</script>

<template>
  <div :class="['sidebar', { sidebar_isopen: props.openSidebar }]">
    <RouterLink class="sidebar__link" v-for="link in links" :key="link.name" :to="link.href">{{
      link.name
    }}</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  left: 0;
  top: 62px;
  height: 100%;
  background: #fff;
  position: fixed;
  width: 250px;
  padding: 20px;
  transition: 0.2s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-250px);
  &_isopen {
    transform: translateX(0px);
  }
  &__link {
    display: block;
    border-radius: 12px;
    border: 2px solid #fff;
    transition: 0.2s;
    font-weight: bold;
    margin-bottom: 10px;
    &:hover {
      color: var(--primary);
    }
  }
}
</style>
