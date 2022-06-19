import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
        name: 'CRUD 示例',
        path: '/curd',
        component: './CURD',
    },
    {
        name: '表单设计器',
        path: '/design',
        component: './Generator',
    },
  ],
  npmClient: 'pnpm',
});

