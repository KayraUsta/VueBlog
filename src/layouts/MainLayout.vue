<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header elevated class="bg-dark text-white">
      <q-toolbar class="q-px-lg">
        <q-btn
          flat
          dense
          round
          :icon="leftDrawerOpen ? 'close' : 'menu'"
          @click="toggleLeftDrawer"
          aria-label="Menu"
          class="q-mr-sm"
        />
        
        <q-toolbar-title class="text-weight-bold">
          <span class="cursor-pointer" @click="toggleLeftDrawer">
            {{ t('title') }}
          </span>
        </q-toolbar-title>

        <q-tabs
          active-color="white"
          indicator-color="transparent"
          inline-label
          class="desktop-only blog-tab"
        >
          <q-route-tab 
            href="/cv" 
            :label="t('cv')" 
          />
        </q-tabs>

        <q-tabs
          active-color="white"
          indicator-color="transparent"
          inline-label
          class="desktop-only blog-tab"
        >
          <q-route-tab 
            href="https://kayrausta.com.tr/" 
            :label="t('blog')" 
          />
        </q-tabs>

        <q-btn
          dense
          flat
          round
          icon="language"
          @click="toggleLang"
          :label="locale === 'tr' ? 'TR' : 'EN'"
          class="q-ml-sm text-white"
        />
      </q-toolbar>
    </q-header>

    <!-- Drawer -->
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="280"
      class="bg-dark text-white"
    >
      <q-scroll-area class="fit" style="height: calc(100vh - 50px);">
        <!-- Drawer Header -->
        <q-item class="q-pa-md bg-grey-9 text-white">
          <q-item-section>
            <div class="text-h6 text-weight-bold">{{ t('name') }}</div>
            <div class="text-caption">
              <a href="https://kayrausta.com.tr/" target="_blank" class="text-grey-4 text-no-wrap">
                {{ t('web') }}<br>kayraustablog.com.tr
              </a>
            </div>
          </q-item-section>
        </q-item>

        <!-- Projects List -->
        <q-list padding dense>
          <q-item-label header class="text-grey-4 q-px-md q-pt-md q-pb-sm">{{ t('projects') }}</q-item-label>
          
          <q-item 
            v-for="project in projects" 
            :key="project.title"
            clickable 
            v-ripple
            :href="project.link"
            target="_blank"
            class="q-py-xs q-px-md menu-item"
          >
            <q-item-section avatar>
              <q-avatar size="38px">
                <img :src="project.logo" />
              </q-avatar>
            </q-item-section>
            
            <q-item-section>
              <q-item-label class="text-weight-medium">{{ project.title }}</q-item-label>
              <q-item-label caption class="text-grey-4 ellipsis-2-lines" style="font-size: 0.7rem;">
                {{ t(project.descriptionKey) }}
              </q-item-label>
            </q-item-section>
            
            <q-item-section side>
              <q-icon name="open_in_new" size="16px" />
            </q-item-section>
          </q-item>

          <!-- Social Media List -->
          <q-item-label header class="text-grey-4 q-px-md q-pt-md q-pb-sm">{{ t('social') }}</q-item-label>
          
          <q-item 
            v-for="social in socials" 
            :key="social.title"
            clickable 
            v-ripple
            :href="social.link"
            target="_blank"
            class="q-py-xs q-px-md menu-item"
          >
            <q-item-section avatar>
              <q-avatar size="38px">
                <img :src="social.logo" />
              </q-avatar>
            </q-item-section>
            
            <q-item-section>
              <q-item-label class="text-weight-medium">{{ t(social.titleKey) }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <!-- Page Container -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer class="bg-dark text-grey-4">
      <q-toolbar class="justify-center q-pa-sm">
        <div class="text-center">
          <div class="text-caption">
            © {{ new Date().getFullYear() }} Kayra Halil Usta - {{ t('footer') }}
          </div>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const leftDrawerOpen = ref(true)
    const { t, locale } = useI18n()

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    const toggleLang = () => {
      locale.value = locale.value === 'tr' ? 'en' : 'tr'
    }

    const projects = [
      {
        title: 'Cherry Hediyelik',
        descriptionKey: 'cherryDesc',
        link: 'https://cherryhediyelik.com/',
        logo: 'src/assets/cherrylogo.png'
      },
      {
        title: 'TaraSat',
        descriptionKey: 'taraDesc',
        link: 'https://tarasat.com/',
        logo: 'src/assets/taraSat.png'
      },
      {
        title: 'Krkit',
        descriptionKey: 'krkitDesc',
        link: 'https://krkit.com/',
        logo: 'src/assets/k.jpg'
      }
    ]

    const socials = [
      {
        titleKey: 'cv',
        link: '/cv',
        logo: 'src/assets/CV.png'
      },
      {
        titleKey: 'Linkedin',
        link: 'https://www.linkedin.com/in/kayra-usta-a45761252/',
        logo: 'src/assets/ln.png'
      },
      {
        titleKey: 'Github',
        link: 'https://github.com/KayraUsta',
        logo: 'src/assets/github.png'
      },
      {
        titleKey: 'Cherry Instagram',
        link: 'https://www.instagram.com/cherryhediyelik',
        logo: 'src/assets/insta.webp'
      }
    ]

    return {
      t,
      locale,
      toggleLang,
      toggleLeftDrawer,
      leftDrawerOpen,
      projects,
      socials
    }
  }
}
</script>
