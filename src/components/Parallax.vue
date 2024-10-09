<template>
  <div class="parallax">
    <!--    <div v-for="(parallax_item, index) in parallax_items" :key="index" class="parallax_header" :class="'parallax_img_' + index">-->
    <!--      <img class="object-cover lg:object-fill w-full" :src="'/src/assets/img/' + parallax_item.filename" alt=""/>-->
    <!--    </div>-->

    <div class="parallax_header parallax_img_0">
      <img alt="parralax_img_7" class="object-cover lg:object-fill w-full" src="../assets/img/7.png"/>
    </div>
    <div class="parallax_header parallax_img_1">
      <img alt="parralax_img_6" class="object-cover lg:object-fill w-full" src="../assets/img/6.png"/>
    </div>
    <div class="parallax_header parallax_img_2">
      <img alt="parralax_img_5" class="object-cover lg:object-fill w-full" src="../assets/img/5.png"/>
    </div>
    <div class="parallax_header parallax_img_3">
      <div class="-mt-16 my-auto">
        <h1 class="text-5xl lg:text-7xl text-black text-center z-10 amatic">
          Gerben Op den Kamp
        </h1>
      </div>
    </div>
    <div class="parallax_header parallax_img_4">
      <img alt="parralax_img_2" class="object-cover lg:object-fill w-full" src="../assets/img/2.png"/>
    </div>
    <div class="parallax_header parallax_img_5">
      <img alt="parralax_img_3" class="object-cover lg:object-fill w-full" src="../assets/img/3.png"/>
    </div>
    <div class="parallax_header parallax_img_6">
      <img alt="parralax_img_1" class="object-cover lg:object-fill w-full" src="../assets/img/1.png"/>
    </div>
    <div class="parallax_cover bg-white">
      <slot />
    </div>
  </div>
</template>

<script setup>

const parallax_items = [
    {
      filename: '7.png',
      type: 'image'
    }
]
</script>

<style scoped>
.parallax {
  -webkit-perspective: 100px;
  perspective: 100px;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.parallax > .parallax_img_3 {
  opacity: 0.7;
}

.parallax_header {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.parallax_header img {
  display: block;
  position: absolute;
  height: 600px;
}

.parallax_cover {
  position: absolute;
  top: 599px;
  left: 0;
  right: 0;
  z-index: 3;
}

.parallax_img_0 {
  -webkit-transform: translateZ(-300px) scale(4);
  transform: translateZ(-300px) scale(4);

}

.parallax_img_1 {
  -webkit-transform: translateZ(-250px) scale(3.5);
  transform: translateZ(-250px) scale(3.5);
}

.parallax_img_2 {
  -webkit-transform: translateZ(-200px) scale(3);
  transform: translateZ(-200px) scale(3);
}

.parallax_img_3 {
  -webkit-transform: translateZ(-150px) scale(2.5);
  transform: translateZ(-150px) scale(2.5);
  position: relative !important;
}

.parallax_img_4 {
  -webkit-transform: translateZ(-100px) scale(2);
  transform: translateZ(-100px) scale(2);
}

.parallax_img_5 {
  -webkit-transform: translateZ(-50px) scale(1.5);
  transform: translateZ(-50px) scale(1.5);
}

.parallax_img_6 {
  -webkit-transform: translateZ(0px) scale(1);
  transform: translateZ(0px) scale(1);
}
</style>
