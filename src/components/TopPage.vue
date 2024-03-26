<script setup lang="ts">
import toMountainButton from "@/assets/images/arrow1.png";
import toSeaButton from "@/assets/images/arrow2.png";

function setElementSizeBasedOnViewport() {
  const frame = document.getElementById("frame");
  const mountainArrow = document.getElementById("to-mountain");
  const seaArrow = document.getElementById("to-sea");

  if (frame && mountainArrow && seaArrow) {
    if (window.innerWidth > window.innerHeight) {
      // 横幅の方が大きい場合
      frame.style.height = "100vh";
      frame.style.width = "100vh";
      frame.style.top = "0";
      frame.style.left = "calc(50vw - 50vh)";
      mountainArrow.style.top = "8vh";
      mountainArrow.style.left = "61vh";
      mountainArrow.style.width = "15vh";
      seaArrow.style.top = "75vh";
      seaArrow.style.left = "26vh";
      seaArrow.style.width = "15vh";
    } else {
      // 縦幅の方が大きい場合
      frame.style.height = "100vw";
      frame.style.width = "100vw";
      frame.style.top = "calc(50vh - 50vw)";
      frame.style.left = "0";
      mountainArrow.style.top = "8vw";
      mountainArrow.style.left = "61vw";
      mountainArrow.style.width = "15vw";
      seaArrow.style.top = "75vw";
      seaArrow.style.left = "26vw";
      seaArrow.style.width = "15vw";
    }
  }
}

window.addEventListener("resize", setElementSizeBasedOnViewport);

setTimeout(() => {
  setElementSizeBasedOnViewport();
}, 50);
</script>

<template>
  <div id="frame" class="bg-img">
    <router-link id="to-mountain" to="/mountain">
      <img :src="toMountainButton" alt="mountain" />
    </router-link>
    <router-link id="to-sea" to="/sea">
      <img :src="toSeaButton" alt="sea" />
    </router-link>
  </div>
</template>

<style scoped>
.bg-img {
  background-image: url(@/assets/images/mountain-sea.png);
  background-size: cover;
  position: absolute;
}
img {
  width: 100%;
}
#to-mountain,
#to-sea {
  position: absolute;
  z-index: 1;
  display: block;
  opacity: 0.3;
}
#to-mountain:hover,
#to-sea:hover {
  transform: scale(1.2);
  opacity: 1;
  transition: 0.3s;
}
</style>
