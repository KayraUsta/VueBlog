<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header - Daha minimalist ve modern -->
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

    <!-- Drawer - Daha modern ve kullanıcı dostu -->
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="280"
      class="bg-dark text-white drawer-container"
    >
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <!-- Drawer Header -->
          <q-item class="q-pa-lg bg-grey-9 text-white drawer-header">
            <q-item-section>
              <div class="text-h5 text-weight-bold">Kayra Usta</div>
              <div class="text-caption">Web Çözümleri Portfolyosu</div>
            </q-item-section>
          </q-item>

          <!-- Projeler -->
          <q-item-label header class="text-grey-4 q-mt-sm">PROJELER</q-item-label>
          
          <q-item 
            v-for="project in projects" 
            :key="project.title"
            clickable 
            v-ripple
            :href="project.link"
            target="_blank"
            class="q-py-md menu-item"
          >
            <q-item-section avatar>
              <q-avatar>
                <img :src="project.logo">
              </q-avatar>
            </q-item-section>
            
            <q-item-section>
              <q-item-label class="text-weight-medium">{{ project.title }}</q-item-label>
              <q-item-label caption class="text-grey-4">{{ project.description }}</q-item-label>
            </q-item-section>
            
            <q-item-section side>
              <q-icon name="open_in_new" size="xs" />
            </q-item-section>
          </q-item>

          <!-- Sosyal Medya -->
          <q-item-label header class="text-grey-4 q-mt-sm">SOSYAL MEDYA</q-item-label>
          
          <q-item 
            v-for="social in socials" 
            :key="social.title"
            clickable 
            v-ripple
            :href="social.link"
            target="_blank"
            class="q-py-md menu-item"
          >
            <q-item-section avatar>
              <q-avatar>
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

    <!-- Footer - Daha minimalist -->
    <q-footer class="bg-dark text-grey-4">
      <q-toolbar class="justify-center q-pa-md">
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
// Modern renk paleti
.bg-dark {
  background: #121212 !important;
}

// Drawer stilleri
.drawer-container {
  .drawer-header {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }
  
  .menu-list {
    .q-item {
      border-radius: 8px;
      margin: 4px 8px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      
      &.menu-item {
        &:hover {
          background: rgba(255, 255, 255, 0.05) !important;
          transform: translateX(8px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          
          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 3px;
            background: linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%);
            border-radius: 3px 0 0 3px;
          }
        }
      }
    }
    
    .q-item__label--caption {
      opacity: 0.7;
    }
  }
}

// Blog tab hover efekti
.blog-tab {
  .q-tab {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
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
        width: 100%;
      }
    }
  }
}

// Header stilleri
.q-toolbar {
  min-height: 64px;
}

// Footer stilleri
.q-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

// Responsive ayarlar
@media (max-width: 600px) {
  .desktop-only {
    display: none;
  }
}
</style>