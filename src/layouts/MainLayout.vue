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
            Çözümlerimizi keşfedin
          </span>
        </q-toolbar-title>
        
        <q-tabs
          active-color="white"
          indicator-color="transparent"
          inline-label
          class="desktop-only blog-tab"
        >
          <q-route-tab 
            href="https://kayrausta.com.tr/" 
            label="Kayraustablog.com.tr" 
          />
        </q-tabs>
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
            <div class="text-h6 text-weight-bold">Kayra Usta</div>
            <div class="text-caption">
              <a href="https://kayrausta.com.tr/" target="_blank" class="text-grey-4 text-no-wrap">
                Web Çözümleri Portfolyosu<br>kayraustablog.com.tr
              </a>
            </div>
          </q-item-section>
        </q-item>

        <!-- Projects List -->
        <q-list padding dense>
          <q-item-label header class="text-grey-4 q-px-md q-pt-md q-pb-sm">PROJELER</q-item-label>
          
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
              <q-avatar size="28px">
                <img :src="project.logo">
              </q-avatar>
            </q-item-section>
            
            <q-item-section>
              <q-item-label class="text-weight-medium">{{ project.title }}</q-item-label>
              <q-item-label caption class="text-grey-4 ellipsis-2-lines" style="font-size: 0.7rem;">{{ project.description }}</q-item-label>
            </q-item-section>
            
            <q-item-section side>
              <q-icon name="open_in_new" size="16px" />
            </q-item-section>
          </q-item>

          <!-- Social Media List -->
          <q-item-label header class="text-grey-4 q-px-md q-pt-md q-pb-sm">SOSYAL MEDYA</q-item-label>
          
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
              <q-avatar size="28px">
                <img :src="social.logo">
              </q-avatar>
            </q-item-section>
            
            <q-item-section>
              <q-item-label class="text-weight-medium">{{ social.title }}</q-item-label>
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
            © {{ new Date().getFullYear() }} Kayra Halil Usta - Tüm Hakları Saklıdır
          </div>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const leftDrawerOpen = ref(false)
    
    const projects = [
      {
        title: 'Cherry Hediyelik',
        description: 'En iyi hediye seçenekleri için',
        link: 'https://cherryhediyelik.com/',
        logo: 'src/assets/cherrylogo.png'
      },
      {
        title: 'TaraSat',
        description: 'Liste, Satış ve Stok çözümleri',
        link: 'https://tarasat.com/',
        logo: 'src/assets/taraSat.png'
      },
      {
        title: 'Krkit',
        description: 'Yenilikçi web geliştirme çözümleri',
        link: 'https://krkit.com/',
        logo: 'src/assets/k.jpg'
      }
    ]
    
    const socials = [
      {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/kayra-usta-a45761252/',
        logo: 'src/assets/ln.png'
      },
      {
        title: 'GitHub',
        link: 'https://github.com/KayraUsta',
        logo: 'src/assets/github.png'
      },
      {
        title: 'Cherry Hediyelik Instagram',
        link: 'https://www.instagram.com/cherryhediyelik',
        logo: 'src/assets/insta.webp'
      },
      {
        title: 'Krkit Instagram',
        link: 'https://www.instagram.com/krkit',
        logo: 'src/assets/insta.webp'
      }
    ]

    return {
      leftDrawerOpen,
      projects,
      socials,
      toggleLeftDrawer: () => (leftDrawerOpen.value = !leftDrawerOpen.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-dark {
  background: #121212 !important;
}

.q-header {
  .q-toolbar {
    min-height: 50px;
  }
}

.q-drawer {
  .q-item {
    min-height: 48px;
    border-radius: 6px;
    margin: 2px 0;
    transition: all 0.2s ease;
    
    &.menu-item:hover {
      background: rgba(255, 255, 255, 0.05);
      transform: translateX(4px);
      
      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 8px;
        bottom: 8px;
        width: 2px;
        background: linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%);
        border-radius: 0 2px 2px 0;
      }
    }
    
    .q-avatar {
      font-size: 16px;
    }
    
    .q-item__label--caption {
      line-height: 1.3;
    }
  }
  
  .q-item__label--header {
    font-size: 0.75rem;
    letter-spacing: 1px;
    opacity: 0.8;
  }
}

.blog-tab {
  .q-tab {
    padding: 0 12px;
    min-height: 50px;
    
    &::before {
      content: '';
      position: absolute;
      bottom: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: white !important;
      
      &::before {
        width: calc(100% - 24px);
      }
    }
  }
}

.q-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  
  .q-toolbar {
    min-height: 40px;
  }
}

.ellipsis-2-lines {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 600px) {
  .desktop-only {
    display: none;
  }
  
  .q-drawer {
    width: 260px !important;
  }
}
</style>