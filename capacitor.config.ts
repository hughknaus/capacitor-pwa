import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionicPwa',
  bundledWebRuntime: false,
  cordova: {},
  plugins: {
    splashScreen: {
      launchShowDuration: 0
    }
  },
  webDir: 'www'
};

export default config;
