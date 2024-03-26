<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <main>
    <transition name="slide">
      <RouterView />
    </transition>
  </main>
</template>

<style scoped>
.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  transform: rotate3d(30deg);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
