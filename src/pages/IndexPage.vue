<template>
  <!-- index.html dosyasının <head> bölümüne ekleyin -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

  <q-page class="flex flex-center">
    <div :style="backgroundStyle">
      <img alt="Kayra Halil Usta" src="https://r.resimlink.com/JvFbjelHzYoS.jpg" :style="imageStyle">
      <div :style="overlayStyle">
        <h1 :style="titleStyle">Ben Kayra Halil Usta</h1>
        <p :style="textStyle">
          Web geliştirme ve yazılımla uğraşan, tasarım ve işlevselliği bir araya getirerek insanların işini kolaylaştıran projeler yapmayı amaçlıyorum. 
          Yenilikleri takip etmeyi, öğrenmeyi ve öğrendiklerimi paylaşmayı istiyorum.
        </p>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'

const backgroundStyle = reactive({
  position: 'relative',
  width: '100%',
  height: '100vh',
})

const imageStyle = reactive({
  width: '100%',
  height: '100%',
  objectFit: 'cover', // Görüntüyü doğru şekilde hizala
})

const overlayStyle = reactive({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)', // Tüm ekranı kaplayan transparan arka plan
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '10px', // İçeriklere biraz alan bırak
})

const titleStyle = reactive({
  fontSize: '3rem', // Başlık boyutu
  fontWeight: '600', // Kalın başlık
  color: '#eee',
  marginBottom: '10px',
  marginTop: '20%',
  textShadow: '2px 2px 0px black, -2px -2px 0px black, -2px 2px 0px black, 2px -2px 0px black', // Siyah çerçeve efekti
  fontFamily: '"Poppins", sans-serif', // Font
  wordBreak: 'break-word', // Uzun başlıkların kesilmemesi için
})

const textStyle = reactive({
  fontSize: '1.1rem',
  color: '#bbb', // Açıklama yazısı rengi
  maxWidth: '600px', // Metin genişliğini sınırla
  wordBreak: 'break-word', // Metin uzunluklarına göre kırılma
})

</script>

<style scoped>
  .flex-center{
    margin-top: -9%;
   
  }
@media (max-width: 768px) {
  /* Mobil uyumlu stil */
  .q-page {
    padding: 0 10px;
  }

  h1 {
    font-size: 2rem; /* Mobilde başlık boyutunu küçült */
    margin-top: 15%; /* Başlık için daha fazla üst boşluk */
  }

  p {
    font-size: 1rem; /* Açıklama metni boyutunu mobilde küçült */
    max-width: 100%; /* Açıklama metnini ekranın tamamına yay */
    padding: 0 10px;
  }

  /* Görüntü için responsive özellikler */
  .q-page img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
  .flex-center{
    background-color: black;
  }
}
</style>
