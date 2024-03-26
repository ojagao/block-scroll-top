<script setup lang="ts">
import BackButton from "@/assets/images/arrow2.png";

function setElementSizeBasedOnViewport() {
  const frame = document.getElementById("frame");
  const BackArrow = document.getElementById("to-back");

  if (frame && BackArrow) {
    if (window.innerWidth > window.innerHeight) {
      // 横幅の方が大きい場合
      frame.style.height = "100vh";
      frame.style.width = "100vh";
      frame.style.top = "0";
      frame.style.left = "calc(50vw - 50vh)";
      BackArrow.style.top = "58vh";
      BackArrow.style.left = "5vh";
      BackArrow.style.width = "15vh";
    } else {
      // 縦幅の方が大きい場合
      frame.style.height = "100vw";
      frame.style.width = "100vw";
      frame.style.top = "calc(50vh - 50vw)";
      frame.style.left = "0";
      BackArrow.style.top = "58vw";
      BackArrow.style.left = "5vw";
      BackArrow.style.width = "15vw";
    }
  }
}

window.addEventListener("resize", setElementSizeBasedOnViewport);

setTimeout(() => {
  setElementSizeBasedOnViewport();
}, 5);
</script>

<template>
  <div id="frame" class="mountain">
    <router-link id="to-back" to="/">
      <img :src="BackButton" alt="back" />
    </router-link>
  </div>
</template>

<style scoped>
.mountain {
  background-image: url(@/assets/images/mountain.png);
  background-size: cover;
  position: absolute;
}

#to-back {
  position: absolute;
  z-index: 1;
  display: block;
  opacity: 0.6;
}
#to-back:hover {
  transform: scale(1.2);
  opacity: 1;
  transition: 0.3s;
}
</style>
