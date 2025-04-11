<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header elevated class="bg-grey-10 text-grey-5" height-hint="98">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          :icon="menuIcon"
          @click="toggleLeftDrawer"
          :class="{'rotate': leftDrawerOpen}"
          class="menu-btn"
        />
        <span :style="textStyle">⬅ Çözümlerimizi görmek için tıklayın</span>
      </q-toolbar>

      <q-tabs align="center" class="text-center">
        <q-route-tab href="https://kayrausta.com.tr/" label="Kayraustablog.com.tr" />
      </q-tabs>
    </q-header>

    <!-- Drawer -->
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :style="drawerStyle"
      :class="{'drawer-transition': leftDrawerOpen}"
    >
      <!-- Drawer -->
    
      <q-list>
        <q-item href="https://cherryhediyelik.com/" class="text-dark" :style="itemStyle">
          <q-item-section>
            <div class="text-h6" :style="titleStyle">
              <q-avatar size="40px" class="q-mr-sm">
                <img src="https://r.resimlink.com/TScPi9.png" alt="Logo1" />
              </q-avatar>
              Cherry Hediyelik
            </div>
            <div class="text-xs" :style="descriptionStyle">En iyi hediye seçenekleri için</div>
          </q-item-section>
        </q-item>

        <q-item href="https://tarasat.com/" class="text-dark" :style="itemStyle">
          <q-item-section>
            <div class="text-h6" :style="titleStyle">
              <q-avatar size="40px" class="q-mr-sm">
                <img src="https://r.resimlink.com/g1OyfsUS2XY.png" alt="Logo2" />
              </q-avatar>
              TaraSat
            </div>
            <div class="text-xs" :style="descriptionStyle">Liste, Satış ve Stok çözümleri için</div>
          </q-item-section>
        </q-item>

        <q-item href="https://krkit.com/" class="text-dark" :style="itemStyle">
          <q-item-section>
            <div class="text-h6" :style="titleStyle">
              <q-avatar size="40px" class="q-mr-sm">
                <img src="https://r.resimlink.com/xDYpPha3.jpg" alt="Logo3" />
              </q-avatar>
              Krkit
            </div>
            <div class="text-xs" :style="descriptionStyle">Yenilikçi web geliştirme çözümleri</div>
          </q-item-section>
        </q-item>

        <!-- Sosyal Medya Linkleri -->
        <q-item href="https://www.linkedin.com/in/kayra-usta-a45761252/" class="text-dark" :style="itemStyle">
          <q-item-section>
            <div class="text-h6" :style="titleStyle">
              <q-avatar size="40px" class="q-mr-sm">
                <img src="https://r.resimlink.com/RFmL8yGfr.png" alt="LinkedIn Logo" />
              </q-avatar>
              LinkedIn
            </div>
            <div class="text-xs" :style="descriptionStyle"></div>
          </q-item-section>
        </q-item>

        <q-item href="https://github.com/KayraUsta" class="text-dark" :style="itemStyle">
          <q-item-section>
            <div class="text-h6" :style="titleStyle">
              <q-avatar size="40px" class="q-mr-sm">
                <img src="https://r.resimlink.com/JYEhxMjAflF.png" alt="GitHub Logo" />
              </q-avatar>
              GitHub
            </div>
            <div class="text-xs" :style="descriptionStyle"></div>
          </q-item-section>
        </q-item>

        <q-item href="https://www.instagram.com/cherryhediyelik" class="text-dark" :style="itemStyle">
          <q-item-section>
            <div class="text-h6" :style="titleStyle">
              <q-avatar size="40px" class="q-mr-sm">
                <img src="https://r.resimlink.com/05kKAQ.webp" alt="Instagram Logo" />
              </q-avatar>
              Cherry Hediyelik Instagram
            </div>
            <div class="text-xs" :style="descriptionStyle"></div>
          </q-item-section>
        </q-item>

        <q-item href="https://www.instagram.com/krkit" class="text-dark" :style="itemStyle">
          <q-item-section>
            <div class="text-h6" :style="titleStyle">
              <q-avatar size="40px" class="q-mr-sm">
                <img src="https://r.resimlink.com/05kKAQ.webp" alt="Krkit Instagram Logo" />
              </q-avatar>
              Krkit Instagram
            </div>
            <div class="text-xs" :style="descriptionStyle"></div>
          </q-item-section>
        </q-item>
        <q-item href="maintenance" class="text-dark" :style="itemStyle">
          <q-item-section>
            <div class="text-h6" :style="titleStyle">
              <q-avatar size="40px" class="q-mr-sm">
                <img src="https://r.resimlink.com/IJC3cwmQzT.webp" alt="Krkit Instagram Logo" />
              </q-avatar>
              Devamı Gelecek...
            </div>
            <div class="text-xs" :style="descriptionStyle"></div>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Page Container -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer class="bg-grey-10 text-grey-5 q-pa-md flex flex-center">
      <div class="text-center text-sm">
        © {{ new Date().getFullYear() }} Kayra Halil Usta - Tüm Telif Hakları Saklıdır.
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const menuIcon = ref('menu') // Hamburger iconu için durum

    const drawerStyle = {
      width: '250px',
      backgroundColor: '#3e3e3e',  // Koyu gri arka plan
      transition: 'transform 0.3s ease-in-out' // Drawer açılma kapanma animasyonu
    }

    const textStyle = {
      marginLeft: '10px',
      fontSize: '1rem',
      color: '#fff',
      fontWeight: '500',
      cursor: 'pointer'
    }

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value
      menuIcon.value = leftDrawerOpen.value ? 'close' : 'menu'  // Icon değişimi
    }

    return {
      leftDrawerOpen,
      menuIcon,
      toggleLeftDrawer,
      drawerStyle,
      textStyle
    }
  }
}
</script>

<style scoped>
/* Hamburger simgesi dönüşüm animasyonu */
.menu-btn {
  transition: transform 0.3s ease;
}

.menu-btn.rotate {
  transform: rotate(180deg);  /* Menü açıldığında hamburgeri 180 derece döndür */
}

/* Drawer açılma animasyonu */
.drawer-transition {
  transition: transform 0.3s ease;
  transform: translateX(0);
}

/* Drawer kapanırken gizlenmesi */
.q-drawer:not(.q-drawer--opened) {
  transform: translateX(-100%);
}

/* Hover efektleri */
.q-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transition: background-color 0.3s ease-in-out;
}

/* Başlık ve açıklama fontları için modern stiller */
.text-h6 {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  transition: color 0.3s ease-in-out;
}

.text-h6:hover {
  color: #481818; /* Hover sırasında renk değişimi */
}

.text-xs {
  font-size: 12px;
  color: lightgray;
  font-weight: 400;
}
</style>
