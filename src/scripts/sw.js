import CacheHelper from './utils/cache-helper';
import 'regenerator-runtime';

const { assets } = global.serviceWorkerOption;

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', (event) => {
  // try {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
  // } catch (error) {
  //   console.log(error);
  // }
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', (event) => {
  // console.log(event.request);
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
