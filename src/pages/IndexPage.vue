<template>
  <q-page class="custom-page">
    <div class="background-wrapper">
      <img alt="Kayra Halil Usta" src="src/assets/kayra.jpg" class="background-image" />
      <div class="overlay">
        <h1 class="title">{{ t('aboutTitle') }}</h1>
        <p class="description">
          {{ t('aboutDescription') }}
        </p>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.custom-page {
  padding: 0;
  margin: 0;
  height: 100vh;
  overflow: hidden;
}

.background-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  z-index: 2;
  overflow: hidden;
}

.title {
  font-size: 3rem;
  font-weight: 600;
  color: #eee;
  text-shadow: 2px 2px 0px black, -2px -2px 0px black, -2px 2px 0px black, 2px -2px 0px black;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
}

.description {
  font-size: 1.2rem;
  color: #bbb;
  max-width: 600px;
  font-family: 'Poppins', sans-serif;
}

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

:global(body) {
  overflow: hidden;
}
</style>
