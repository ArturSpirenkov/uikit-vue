import { createRouter, createWebHistory } from 'vue-router';

const Index = () => import('@/views/IndexView.vue');
const Button = () => import('@/views/ButtonView.vue');
const Typography = () => import('@/views/TypographyView.vue');
const Checkbox = () => import('@/views/CheckboxView.vue');
const Radiobutton = () => import('@/views/RadiobuttonView.vue');

const history = createWebHistory();

const routes = [
  {
    path: '/',
    name: 'main',
    component: Index,
  },
  {
    path: '/button',
    name: 'Button',
    component: Button,
  },
  {
    path: '/typography',
    name: 'Typography',
    component: Typography,
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: Checkbox,
  },
  {
    path: '/radiobutton',
    name: 'Radiobutton',
    component: Radiobutton,
  },
];

const router = createRouter({
  history,
  routes,
});

export default router;
