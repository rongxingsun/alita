import type { AlitaApi } from '@alita/types';

import semver from 'semver';
import { resolveProjectDep } from './resolveProjectDep';

export const checkAntdVersion = (api: AlitaApi) => {
  if (
    // @ts-ignore
    (api.pkg.dependencies && api.pkg.dependencies['antd']) ||
    // @ts-ignore
    (api.pkg.devDependencies && api.pkg.devDependencies['antd']) ||
    // egg project using `clientDependencies` in ali tnpm
    // @ts-ignore
    (api.pkg.clientDependencies && api.pkg.clientDependencies['antd'])
  ) {
    let version = '4.23.0';
    try {
      // modifyConfig 的时候 api.paths 为 {}
      const nodeModulesPath =
        resolveProjectDep({
          pkg: api.pkg,
          cwd: api.cwd,
          dep: 'antd',
        }) || `${api.cwd}/node_modules/antd`;
      version = require(`${nodeModulesPath}/package.json`).version;
    } catch (error) {}
    return semver.lt('4.22.8', version);
  }
  return true;
};
