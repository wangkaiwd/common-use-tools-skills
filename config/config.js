// ref: https://umijs.org/config/
import routerConfig from './router.config';

export default {
  treeShaking: true,
  sass: {},
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'umi-demo',
      dll: true,
    }],
  ],
  routes: routerConfig,
};
