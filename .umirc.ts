import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  mfsu: false,
  layout: {
    title: 'XRender',
  },
  // vite: {},
  routes: [
    {
      path: '/',
      redirect: '/form',
    },
    {
      name: '表单',
      path: '/form',
      component: './Form',
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
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
    ],
  ],
});
