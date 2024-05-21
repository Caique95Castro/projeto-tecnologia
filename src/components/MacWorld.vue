<template>
  <div class="container-geral-mac">
    <div class="box-title">
      <h1>MAC</h1>
      <h3>If you can dream it, Mac can do it.</h3>
    </div>
    <div class="box-content-video">
      <video
        class="video-mac"
        src="../assets/img/imageHome/video-teste-mac.mp4"
        controls
        width="800"
        autoplay
        muted
        loop
      >
        Seu navegador não suporta a teg video
      </video>
    </div>
    <div class="box-content-mac-images">
        <h1 class="titulo-1">Explore the lineup.</h1>
        <div class="box-images-info">
            <div class="images-phone">
                <img src="../assets/img/imageHome/image-mac-air.png" alt="" />
                <div class="colors-phones">
                    <div class="colors-5" style="background-color: black"></div>
                    <div class="colors-4" style="background-color: rgb(255, 229, 181)"></div>
                    <div class="colors-3" style="background-color: grey"></div>
                    <div class="colors-6" style="background-color: white"></div>
                </div>
                <h4 class="name-phone">MacBook Air 13” and 15”</h4>
                <h6>M2 or M3 chip</h6>
                <p class="title-phone">
                    Strikingly thin and fast so you can work, play, or create anywhere.
                </p>
                <div class="box-button">
                    <a class="btn-1" href=""><button class="btn-1">Learn more</button></a>
                    <a class="btn-2" href=""><button class="btn-2">Buy</button></a>
                </div>
            </div>
            <div class="images-phone">
                <img src="../assets/img/imageHome/image-mac-pro.png" alt="" />
                <div class="colors-phones">
                    <div class="colors-5" style="background-color: black"></div>
                    <div class="colors-6" style="background-color: white"></div>
                    <div class="colors-3" style="background-color: grey"></div>
                </div>
                <h4 class="name-phone">MacBook Air 13” and 15”</h4>
                <h6>M2 or M3 chip</h6>
                <p class="title-phone">
                    Strikingly thin and fast so you can work, play, or create anywhere.
                </p>
                <div class="box-button">
                    <a class="btn-1" href=""><button class="btn-1">Learn more</button></a>
                    <a class="btn-2" href=""><button class="btn-2">Buy</button></a>
                </div>
            </div>
            
            <div class="images-phone">
                <img src="../assets/img/imageHome/image-display-studio.png" alt="" />
                <br>
                <h4 class="name-phone">Studio Display</h4>
                <p class="title-phone">
                    A 5K Retina display with stellar camera and audio.
                </p>
                <div class="box-button">
                    <a class="btn-1" href=""><button class="btn-1">Learn more</button></a>
                    <a class="btn-2" href=""><button class="btn-2">Buy</button></a>
                </div>
            </div>
            <div class="images-phone">
                <img src="../assets/img/imageHome/image-display-studio-pro.png" alt="" />
                <br>
                <h4 class="name-phone">Pro Display XDR</h4>
                <p class="title-phone">
                    An advanced 6K XDR display for pro workflows.
                </p>
                <div class="box-button">
                    <a class="btn-1" href=""><button class="btn-1">Learn more</button></a>
                    <a class="btn-2" href=""><button class="btn-2">Buy</button></a>
                </div>
            </div>
            <div class="images-phone">
                <img src="../assets/img/imageHome/image-mac-mini.png" alt="" />
                <br>
                <h4 class="name-phone">Mac mini</h4>
                <h6>M2 or M2 Pro chip</h6>
                <p class="title-phone">
                    The most affordable Mac desktop with outsized performance.
                </p>
                <div class="box-button">
                    <a class="btn-1" href=""><button class="btn-1">Learn more</button></a>
                    <a class="btn-2" href=""><button class="btn-2">Buy</button></a>
                </div>
            </div>
            <div class="images-phone">
                <img src="../assets/img/imageHome/image-mac-studio.png" alt="" />
                <br>
                <h4 class="name-phone">Mac Studio</h4>
                <h6>MM2 Max or M2 Ultra chip</h6>
                <p class="title-phone">
                    Powerful performance and extensive connectivity for pro workflows.
                </p>
                <div class="box-button">
                    <a class="btn-1" href=""><button class="btn-1">Learn more</button></a>
                    <a class="btn-2" href=""><button class="btn-2">Buy</button></a>
                </div>
            </div>
        </div>
    </div>

    <FooterWorld />
  </div>
</template>

<script>
import FooterWorld from "./FooterWorld.vue";

export default {
  components: {
    FooterWorld,
  },
};
</script>

<style src="./CSS/MacApple.css" scoped></style>