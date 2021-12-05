import 'dotenv/config';

const stage = process.env.STAGE || 'dev';

const configs = {
  prod: {
    expo: {
      name: 'access-my-city',
      slug: 'access-my-city',
      version: '0.0.1',
      orientation: 'portrait',
      icon: './assets/icon.png',
      splash: {
        image: './assets/splash.png',
        resizeMode: 'contain',
        backgroundColor: '#ffffff',
      },
      updates: {
        fallbackToCacheTimeout: 0,
      },
      assetBundlePatterns: ['**/*'],
      ios: {
        bundleIdentifier: 'com.accessmycity.app',
      },
      android: {
        package: 'com.accessmycity.app',
      },
      web: {
        favicon: './assets/favicon.png',
      },
      extra: {
        googleApiKey: process.env.GOOGLE_MAPS_API_KEY,
      },
    },
  },
  dev: {
    expo: {
      name: 'access-my-city',
      slug: 'access-my-city',
      version: '0.0.1',
      orientation: 'portrait',
      icon: './assets/icon.png',
      splash: {
        image: './assets/splash.png',
        resizeMode: 'contain',
        backgroundColor: '#ffffff',
      },
      updates: {
        fallbackToCacheTimeout: 0,
      },
      assetBundlePatterns: ['**/*'],
      ios: {
        bundleIdentifier: 'com.accessmycity.app',
      },
      android: {
        package: 'com.accessmycity.app',
      },
      web: {
        favicon: './assets/favicon.png',
      },
      extra: {
        googleApiKey: process.env.GOOGLE_MAPS_API_KEY,
      },
    },
  },
};

export default configs[stage];
