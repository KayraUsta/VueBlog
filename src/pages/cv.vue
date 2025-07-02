<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="q-pa-md bg-grey-1">
              <div class="row justify-center q-mb-md">
        <q-btn 
  color="primary" 
  icon="download" 
  :label="t('downloadCV')" 
  @click="downloadCV"
/>
        </div>
        <div class="cv-container bg-white shadow-1 q-pa-lg" style="max-width: 900px;">
          <!-- Başlık ve Fotoğraf -->
          <div class="row items-center justify-between q-mb-md">
            <div>
              <h1 class="text-h3 text-weight-bold text-dark" style="margin-bottom: 0;">KAYRA HALIL USTA</h1>
              <div class="text-subtitle1 text-grey-8 q-mt-xs">
                <q-icon name="location_on" size="sm" class="q-mr-xs"/> Istanbul/Gaziosmanpasa
                <q-icon name="email" size="sm" class="q-ml-md q-mr-xs"/> kayrausta04@gmail.com
                <q-icon name="phone" size="sm" class="q-ml-md q-mr-xs"/> 0546-580-35-21
              </div>
            </div>
            <div class="profile-photo">
              <img src="/src/assets/k1.jpg" alt="Profile Photo" class="photo">
            </div>
          </div>

          <q-separator color="grey-4" class="q-mb-md"/>

          <!-- Kişisel Bilgiler -->
          <div class="section q-mb-md">
            <h2 class="section-title text-subtitle1">{{ t('personalInfo') }}</h2>
            <div class="text-body1 q-pl-sm q-pt-sm">
              <div class="row items-center q-mb-xs">
                <q-icon name="event" size="sm" class="q-mr-sm"/>
                <span>Doğum tarihi: 4 Ekim 2004</span>
              </div>
              <div class="row items-center q-mb-xs">
                <q-icon name="person" size="sm" class="q-mr-sm"/>
                <span>Cinsiyet: Erkek</span>
              </div>
              <div class="row items-center q-mb-xs">
                <q-icon name="public" size="sm" class="q-mr-sm"/>
                <span>Website: <a href="https://kayrausta.com.tr" class="text-dark">kayrausta.com.tr</a></span>
              </div>
              <div class="row items-center q-mb-xs">
                <q-icon name="work" size="sm" class="q-mr-sm"/>
                <span>LinkedIn: <a href="https://linkedin.com/in/kayra-usta-a45761252" class="text-dark">linkedin.com/in/kayra-usta</a></span>
              </div>
              <div class="row items-center">
                <q-icon name="code" size="sm" class="q-mr-sm"/>
                <span>GitHub: <a href="https://github.com/KayraUsta" class="text-dark">github.com/KayraUsta</a></span>
              </div>
            </div>
          </div>

          <q-separator color="grey-4" class="q-mb-md"/>

          <!-- Eğitim -->
          <div class="section q-mb-md">
            <h2 class="section-title text-subtitle1">{{ t('education') }}</h2>
            <div class="text-body1 q-pl-sm q-pt-sm">
              <div v-for="(edu, index) in education" :key="index" class="q-mb-sm">
                <div class="text-weight-bold">{{ edu.title }}</div>
                <div class="text-caption text-grey-7">{{ edu.institution }}</div>
                <div class="text-caption text-dark">{{ edu.period }}</div>
              </div>
            </div>
          </div>

          <q-separator color="grey-4" class="q-mb-md"/>

          <!-- İş Deneyimi -->
          <div class="section q-mb-md">
           <h2 class="section-title text-subtitle1">{{ t('experience') }}</h2>
            <div class="text-body1 q-pl-sm q-pt-sm">
              <div v-for="(exp, index) in experience" :key="index" class="q-mb-sm">
                <div class="text-weight-bold">{{ exp.position }}</div>
                <div class="text-caption text-grey-7">{{ exp.company }}</div>
                <div class="text-caption text-dark">{{ exp.period }}</div>
              </div>
            </div>
          </div>

          <q-separator color="grey-4" class="q-mb-md"/>

          <!-- Projeler -->
          <div class="section q-mb-md">
            <h2 class="section-title text-subtitle1">{{ t('projects') }}</h2>
            <div class="text-body1 q-pl-sm q-pt-sm">
              <div v-for="(project, index) in projects" :key="index" class="q-mb-sm">
                <div class="text-weight-bold">{{ project.title }}</div>
                <p class="text-caption">{{ project.description }}</p>
              </div>
            </div>
          </div>

          <q-separator color="grey-4" class="q-mb-md"/>

          <!-- Beceriler -->
          <div class="section q-mb-md">
            <h2 class="section-title text-subtitle1">{{ t('skills') }}</h2>
            <div class="q-pl-sm q-pt-sm">
              <div class="row">
                <div class="col-md-6 col-sm-12" v-for="(column, colIndex) in skillColumns" :key="colIndex">
                  <div v-for="(skill, index) in column" :key="index" class="q-mb-xs">
                    <div class="row items-center">
                      <div class="col-5 text-body1">{{ skill.name }}</div>
                      <div class="col-7">
                        <q-linear-progress 
                          :value="skill.level/100" 
                          color="dark" 
                          rounded 
                          style="height: 8px"
                          animation-speed="800"
                          :animation="skill.animate"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <q-separator color="grey-4" class="q-mb-md"/>

          <!-- Diller -->
          <div class="section q-mb-md">
            <h2 class="section-title text-subtitle1">{{ t('languages') }}</h2>
            <div class="text-body1 q-pl-sm q-pt-sm">
              <div v-for="(lang, index) in languages" :key="index" class="q-mb-xs">
                <div class="row items-center">
                  <div class="col-5">{{ lang.name }}</div>
                  <div class="col-7">
                    <q-linear-progress 
                      :value="lang.level/100" 
                      color="dark" 
                      rounded 
                      style="height: 8px"
                      animation-speed="800"
                      :animation="lang.animate"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <q-separator color="grey-4" class="q-mb-md"/>

          <!-- Sertifikalar -->
          <div class="section">
            <h2 class="section-title text-subtitle1">{{ t('certificates') }}</h2>
            <div class="text-body1 q-pl-sm q-pt-sm">
              <q-list dense separator>
                <q-item v-for="(cert, index) in certificates" :key="index" class="q-pa-none q-mb-xs">
                  <q-item-section>
                    <q-item-label class="text-caption">{{ cert }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// CV indirme fonksiyonu
function downloadCV() {
  const pdfUrl = 'src/assets/CV_Kayra_Halil_Usta.pdf'
  const link = document.createElement('a')
  link.href = pdfUrl
  link.download = 'CV_Kayra_Halil_Usta.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// Yetenekler
const skills = ref([
  { name: 'HTML', level: 85, animate: true },
  { name: 'CSS', level: 80, animate: true },
  { name: 'PHP', level: 75, animate: true },
  { name: 'Java', level: 65, animate: true },
  { name: 'Javascript', level: 82, animate: true },
  { name: 'Excel', level: 70, animate: true },
  { name: 'Photoshop', level: 78, animate: true },
  { name: 'Iletisim Becerileri', level: 90, animate: true },
  { name: 'Takım Çalışması', level: 88, animate: true },
  { name: 'Python', level: 72, animate: true },
  { name: 'Vue', level: 83, animate: true },
  { name: 'SQL', level: 77, animate: true }
])

// Becerileri iki kolona böl
const skillColumns = computed(() => {
  const mid = Math.ceil(skills.value.length / 2)
  return [skills.value.slice(0, mid), skills.value.slice(mid)]
})

// Diller
const languages = ref([
  { name: 'İngilizce', level: 50, animate: true }
])

// Eğitim bilgileri
const education = ref([
  {
    title: 'Bilgisayar Programcılığı',
    institution: 'Kırklareli Üniversitesi, Kirklareli',
    period: 'Eyl 2022 – Tem 2024'
  },
  {
    title: 'Web Tasarımı ve Kodlama (Açıköğretim)',
    institution: 'Anadolu Üniversitesi, Eskişehir',
    period: 'Eyl 2022 – Tem 2024'
  },
  {
    title: 'Oğuz Cappolat Anadolu Lisesi',
    institution: 'İstanbul/Eyüp',
    period: 'Eyl 2018 – Haz 2021'
  },
  {
    title: 'İşletme (Açıköğretim)',
    institution: 'İstanbul Üniversitesi, İstanbul',
    period: 'devam ediyor'
  }
])

// İş deneyimi
const experience = ref([
  {
    position: 'İş Süreci ve Yazılım Geliştirme Uzmanı',
    company: 'Gökkuşağı Yazılım ve Danışmanlık, İstanbul',
    period: 'devam ediyor'
  }
])

// Projeler
const projects = ref([
  {
    title: 'TaraSat – Barkod Tarama Uygulaması | Geliştirici',
    description:
      'TaraSat, barkod tarayarak ürünleri hızlıca listeleyen bir mobil/web uygulamasıdır. Bu projede, frontend ve backend entegrasyonu üzerinde çalışarak, kullanıcı arayüzü geliştirme ve veri yönetimi süreçlerinde aktif rol aldım. Vue.js, Quasar ve .NET teknolojilerini kullanarak API entegrasyonlarını gerçekleştirdik.'
  }
]
)

// Sertifikalar
const certificates = ref([
  'E-Flow Designer Pro Sertifikası',
  'E-Flow Designer Sertifikası',
  'Xpoda NoCode Intern Sertifikası',
  'BTK Akademi Microsoft PowerPoint',
  'BTK Akademi Microsoft Word',
  'BTK Akademi Ağ Temelleri',
  'BTK Akademi HTML5 ile Web Geliştirme',
  'BTK Akademi CSS Temelleri'
])
</script>


<style scoped>
.cv-container {
  margin: 0 auto;
}

.section-title {
  color: #2c3e50;
  font-weight: 600;
  margin-bottom: 0.5rem;
  padding-bottom: 0.25rem;
  border-bottom: 2px solid #000;
}

.profile-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #000;
}

.photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.q-linear-progress {
  background-color: #e0e0e0;
}

@media (max-width: 600px) {
  .profile-photo {
    width: 80px;
    height: 80px;
    margin-top: 10px;
  }
  
  .cv-container {
    padding: 15px;
  }
}


</style>