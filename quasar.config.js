import { defineConfig } from '#q-app/wrappers'

export default defineConfig((/* ctx */) => {
  return {
    boot: ['i18n'],
    css: ['app.scss'],
    extras: [
      'roboto-font',
      'material-icons',
    ],
    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20'
      },
      vueRouterMode: 'history', // 'hash' yerine 'history' kullanıldı
      publicPath: '/' // Gerektiğinde 404 hatalarını önlemek için eklendi
    },
    devServer: {
      open: true
    },
    framework: {
      config: {},
      plugins: []
    },
    animations: [],
    ssr: {
      prodPort: 3000,
      middlewares: ['render'],
      pwa: false
    },
    pwa: {
      workboxMode: 'GenerateSW'
    },
    capacitor: {
      hideSplashscreen: true
    },
    electron: {
      preloadScripts: ['electron-preload'],
      inspectPort: 5858,
      bundler: 'packager',
      builder: {
        appId: 'quasar-project'
      }
    },
    bex: {
      extraScripts: []
    }
  }
})
