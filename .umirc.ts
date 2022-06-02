import { defineConfig } from 'umi';

export default defineConfig({
  title: '李总周',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  headScripts: [
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/fscreen%401.0.1.js',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/Stage%400.1.4.js',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/MyMath.js',
  ],
});
