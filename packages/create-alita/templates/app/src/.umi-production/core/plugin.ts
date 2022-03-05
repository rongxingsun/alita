// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import * as Plugin_0 from '/Users/congxiaochen/Documents/alita/examples/boilerplate/src/app.tsx';
import * as Plugin_1 from '../plugin-keepalive/runtime.tsx';
import * as Plugin_2 from '../plugin-dva/runtime.tsx';
import * as Plugin_3 from '../plugin-model/runtime.tsx';
import { PluginManager } from 'umi';

export function getPlugins() {
  return [
    {
      apply: Plugin_0,
      path: '/Users/congxiaochen/Documents/alita/examples/boilerplate/src/app.tsx',
    },
    {
      apply: Plugin_1,
      path: '/Users/congxiaochen/Documents/alita/examples/boilerplate/src/.umi-production/plugin-keepalive/runtime.tsx',
    },
    {
      apply: Plugin_2,
      path: '/Users/congxiaochen/Documents/alita/examples/boilerplate/src/.umi-production/plugin-dva/runtime.tsx',
    },
    {
      apply: Plugin_3,
      path: '/Users/congxiaochen/Documents/alita/examples/boilerplate/src/.umi-production/plugin-model/runtime.tsx',
    },
  ];
}

export function getValidKeys() {
  return ['patchRoutes','rootContainer','innerProvider','i18nProvider','accessProvider','dataflowProvider','outerProvider','render','onRouteChange','request','mobileLayout',];
}

let pluginManager = null;
export function createPluginManager() {
  pluginManager = PluginManager.create({
    plugins: getPlugins(),
    validKeys: getValidKeys(),
  });
  return pluginManager;
}

export function getPluginManager() {
  return pluginManager;
}
