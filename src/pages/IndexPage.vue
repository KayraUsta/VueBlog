<template>
  <q-page class="custom-page">
    <div class="background-wrapper">
      <img alt="Kayra Halil Usta" src="src/assets/kayra.jpg" class="background-image" />
      <div class="overlay">
        <h1 class="title">Ben Kayra Halil Usta</h1>
        <p class="description">
          Web geliştirme ve yazılımla uğraşan, tasarım ve işlevselliği bir araya getirerek insanların işini kolaylaştıran projeler yapmayı amaçlıyorum. 
          Yenilikleri takip etmeyi, öğrenmeyi ve öğrendiklerimi paylaşmayı istiyorum.
        </p>
      </div>
    </div>
  </q-page>
</template>

<script setup>
// Script gerekmediği için boş
</script>

<style scoped>
/* Sayfa içeriği sıfır padding/margin ile tam ekran görünmeli */
.custom-page {
  padding: 0;
  margin: 0;
  height: 100vh; /* Tam ekran yüksekliği */
  overflow: hidden; /* Kaydırmayı engelle */
}

/* Arka plan ve içeriği birlikte saran yapı */
.background-wrapper {
  position: relative;
  width: 100%;
  height: 100vh; /* Tam ekran yüksekliği */
  overflow: hidden; /* Kaydırmayı engelle */
}

/* Resmi ekran boyutuna göre yay */
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Resmi ekranı kaplayacak şekilde ölçeklendir */
  z-index: 1;
}

/* Transparan katman */
.overlay {
  position: absolute; /* Overlay tam kapsayıcı olacak */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Siyah transparan */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  z-index: 2;
  overflow: hidden; /* İçerik taşarsa kaydırma olmasın */
}

/* Başlık stili */
.title {
  font-size: 3rem;
  font-weight: 600;
  color: #eee;
  text-shadow: 2px 2px 0px black, -2px -2px 0px black, -2px 2px 0px black, 2px -2px 0px black;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
}

/* Açıklama stili */
.description {
  font-size: 1.2rem;
  color: #bbb;
  max-width: 600px;
  font-family: 'Poppins', sans-serif;
}

/* Mobil uyumlu */
@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .description {
    font-size: 1rem;
    padding: 0 10px;
    max-width: 100%;
  }
}

/* Body için global kaydırma engelleme */
:global(body) {
  overflow: hidden; /* Tüm sayfada kaydırmayı engelle */
}
</style>