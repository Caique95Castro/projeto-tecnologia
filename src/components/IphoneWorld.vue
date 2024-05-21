<template>
  <div class="container-geral-iphone">
    <div class="box-titulo">
        <h1>IPHONE</h1>
        <h3>Designed to be loved.</h3>
    </div>
    <div class="box-content-video">
      <video
        class="content-video"
        src="../assets/img/imageHome/video-iphone-paisagem.mp4"
        controls
        width="850"
        poster="../assets/img/imageHome/video-teste.png"
        autoplay
        muted
        loop
      >Seu navegador não suporta a teg video</video>
      <video
        class="content-video-1"
        src="../assets/img/imageHome/video-iphone-iphone.mp4"
        controls
        width="600"
        height="549"
        autoplay
        muted
        loop
      >Seu navegador não suporta a teg video</video>
    </div>
    <div class="box-iphones-colors">
        <div class="images-phone">
          <img src="../assets/img/imageHome/iphone-15-pro.png" alt="">
          <div class="colors-phones">
            <div class="colors-3" style="background-color: grey;"></div>
            <div class="colors-4" style="background-color: rgb(0, 0, 92);"></div>
            <div class="colors-6" style="background-color: white;"></div>
            <div class="colors-5" style="background-color: black;"></div>
          </div>
          <h1 class="name-phone">iPhone 15 Pro</h1>
          <p class="title-phone">The ultimate iPhone.</p>
          <div class="box-button">
            <a class="btn-1" href=""><button class="btn-1">Learn more</button></a>
            <a class="btn-2" href=""><button class="btn-2">Buy</button></a>
          </div>
        </div>
        <div class="images-phone">
          <img src="../assets/img/imageHome/iphone-15-normal-2.png" alt="">
          <div class="colors-phones">
            <div class="colors-9" style="background-color: rgb(253, 227, 232);"></div>
            <div class="colors-8" style="background-color: pink;"></div>
            <div class="colors-3" style="background-color: grey;"></div>
            <div class="colors-6" style="background-color: white;"></div>
            <div class="colors-5" style="background-color: black;"></div>
          </div>
          <h1 class="name-phone">iPhone 15</h1>
          <p class="title-phone">A total powerhouse.</p>
          <div class="box-button">
            <a class="btn-1" href=""><button class="btn-1">Learn more</button></a>
            <a class="btn-2" href=""><button class="btn-2">Buy</button></a>
          </div>
        </div>
        <div class="images-phone">
          <img src="../assets/img/imageHome/iphone-15-pro.png" alt="">
          <div class="colors-phones">
            <div class="colors-1" style="background-color: red;"></div>
            <div class="colors-2" style="background-color: green;"></div>
            <div class="colors-3" style="background-color: grey;"></div>
            <div class="colors-4" style="background-color: rgb(0, 0, 92);"></div>
            <div class="colors-5" style="background-color: black;"></div>
            <div class="colors-6" style="background-color: white;"></div>
            <div class="colors-7"  style="background-color: rgb(255, 255, 71);"></div>
          </div>
          <h1 class="name-phone">iPhone 14 Pro</h1>
          <p class="title-phone">The ultimate iPhone.</p>
          <div class="box-button">
            <a class="btn-1" href=""><button class="btn-1">Learn more</button></a>
            <a class="btn-2" href=""><button class="btn-2">Buy</button></a>
          </div>
        </div>
        <div class="images-phone">
          <img src="../assets/img/imageHome/iphone-14-normal.png" alt="">
          <div class="colors-phones">
            <div class="colors-4" style="background-color: rgb(146, 146, 255);"></div>
            <div class="colors-3" style="background-color: grey;"></div>
            <div class="colors-7"  style="background-color: rgb(255, 255, 71);"></div>
            <div class="colors-5" style="background-color: black;"></div>
            <div class="colors-6" style="background-color: white;"></div>
            <div class="colors-1" style="background-color: red;"></div>
          </div>
          <h1 class="name-phone">iPhone 14</h1>
          <p class="title-phone">As amazing as ever.</p>
          <div class="box-button">
            <a class="btn-1" href=""><button class="btn-1">Learn more</button></a>
            <a class="btn-2" href=""><button class="btn-2">Buy</button></a>
          </div>
        </div>
        <div class="images-phone">
          <img src="../assets/img/imageHome/iphone-13-normal.png" alt="">
          <div class="colors-phones">
            <div class="colors-5" style="background-color: black;"></div>
            <div class="colors-6" style="background-color: white;"></div>
            <div class="colors-1" style="background-color: red;"></div>
          </div>
          <h1 class="name-phone">iPhone 13</h1>
          <p class="title-phone">Serious power. Serious value.</p>
          <div class="box-button">
            <a class="btn-1" href=""><button class="btn-1">Learn more</button></a>
            <a class="btn-2" href=""><button class="btn-2">Buy</button></a>
          </div>
        </div>
    </div>

    <FooterWorld />
  </div>
</template>
<script>
import FooterWorld from './FooterWorld.vue';

export default {
  components: {
    FooterWorld,
  }
}

</script>
<style src="./CSS/IphoneApple.css" scoped></style>