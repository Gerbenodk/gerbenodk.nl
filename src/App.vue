<template>
  <Parallax>
      <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <LanguageSwitch />
        <section>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 ">
            <div>
              <div class="svg">
                <headSvg class="m-auto md:72 lg:w-80 xl:96"/>
              </div>
            </div>
            <div>
              <p class="text-lg mb-4">
                <!--                My day starts with going through the latest tech developments. As an ICT-Media design-->
                <!--                student, I like to use my expertise in challenging assignments and to come to a solution-->
                <!--                both individually and in a team. At the moment I use this for various projects besides-->
                <!--                my study. I am driven to further refine my knowledge and apply it in practice. Because-->
                <!--                of my proactive and critical attitude, I dare to ask questions and set priorities where-->
                <!--                necessary.-->
                {{ $t('head.text')}}
              </p>
              <p class="font-bold mb-2">
                  {{ $t('head.more')}}
              </p>
              <a target="_blank" class="px-6 py-2 text-black border border-black hover:text-white hover:bg-black " href="/pdf/CV-Gerben.pdf">
                Curriculum vitae
              </a>


<!--                          <h1 class="text-4xl amatic">Contact</h1>-->
              <div class="mt-4 flex gap-8">
                <a target="_blank" href="https://www.linkedin.com/in/gerbenodk/">
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" class="w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                </a>
                <a target="_blank" href="https://github.com/Gerbenodk">
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-square" class="w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path></svg>
                </a>
                <a href="mailto:gerbenopdenkamp@hotmail.com?Subject=Hi%20How are you doing">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" class="my-16">
          <div class="border-b border-black">
            <h1 class="text-4xl amatic">{{ $t('projects.title')}}</h1>
          </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div>
                    <h3 class="text-lg font-bold">
                        Mumster
                    </h3>
                    <p>
                        {{ $t('projects.mumster.description')}}
                    </p>
                </div>
                <div>
                    <a href="https://www.mumster.nl/" target="_blank"><img class="img"
                                                                                src="./assets/img/mumster.png"
                                                                                alt="mumster"></a>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div>
                    <a href="https://www.ownhomepage.com/home" target="_blank"><img class="img"
                                                                                    src="./assets/img/ownhomepage.png"
                                                                                    alt="ownhomepage"></a>
                </div>
                <div class="order-first md:order-last">
                    <h3 class="text-lg font-bold">
                        Ownhomepage
                    </h3>
                    <p>
                        {{ $t('projects.ownhomepage.description')}}
                    </p>
                </div>
            </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div>
              <h3 class="text-lg font-bold">
                Beyond Selection
              </h3>
              <p>
                  {{ $t('projects.beyond.description')}}
              </p>
            </div>
            <div>
              <a href="https://beyond-selection.nl/" target="_blank"><img class="img"
                                                                          src="./assets/img/beyondselection.png"
                                                                          alt="beyondselection"></a>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div>
              <a href="https://www.kantenklaarprogramma.nl/" target="_blank"><img class="img"
                                                                                  src="./assets/img/kant.png"
                                                                                  alt="kantenklaarprogramma"></a>
            </div>
            <div class="order-first md:order-last">
              <h3 class="text-lg font-bold">
                Kant en Klaar Programma
              </h3>
              <p>
                  {{ $t('projects.kek.description')}}
              </p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div>
              <h3 class="text-lg font-bold">
                Ippon Personeelsdiensten
              </h3>
              <p>
                  {{ $t('projects.ippon.description')}}
                </p>
            </div>
            <div>
              <a href="https://ippon-personeelsdiensten.nl/" target="_blank"><img class="img"
                                                                                  src="./assets/img/ipponpersoneeldiensten.png"
                                                                                  alt="ipponpersoneelsdiensten"></a>
            </div>
          </div>

          <div class="my-16 relative">
            <h3 class="font-bold text-lg absolute text-white m-4">Digital Snowboarding</h3>
            <img alt="Snowboarding animation Img converted to SVG" id="img" src="/svg/1_000.svg" />
          </div>
        </section>
<!--        <section id="contact" class="my-12">-->
<!--          <div class="border-b border-black">-->
<!--            <h1 class="text-4xl amatic">Contact</h1>-->
<!--          </div>-->
<!--          -->
<!--        </section>-->
      </div>
  </Parallax>
</template>
<script>

import HeadSvg from './components/Head.vue';
import Parallax from "./components/Parallax.vue";
import LanguageSwitch from "./components/LanguageSwitch.vue";
export default {
  name: "Main",
  components: {
      LanguageSwitch,
    Parallax,
    HeadSvg,
  },
  data() {
    return {
      images: [
        "/svg/1_001.svg",
        "/svg/1_002.svg",
        "/svg/1_003.svg",
        "/svg/1_004.svg",
        "/svg/1_005.svg",
        "/svg/1_006.svg",
        "/svg/1_007.svg",
        "/svg/1_008.svg",
        "/svg/1_009.svg",
        "/svg/1_010.svg",
        "/svg/1_011.svg",
        "/svg/1_012.svg",
        "/svg/1_013.svg",
        "/svg/1_014.svg",
        "/svg/1_015.svg",
        "/svg/1_016.svg",
        "/svg/1_017.svg",
        "/svg/1_018.svg",
        "/svg/1_019.svg",
        "/svg/1_020.svg",
        "/svg/1_021.svg",
        "/svg/1_023.svg",
        "/svg/1_024.svg",
        "/svg/1_025.svg",
        "/svg/1_026.svg",
        "/svg/1_027.svg",
        "/svg/1_028.svg",
        "/svg/1_029.svg",
        "/svg/1_030.svg",
        "/svg/1_031.svg",
        "/svg/1_032.svg",
        "/svg/1_033.svg",
        "/svg/1_034.svg",
        "/svg/1_035.svg",
        "/svg/1_036.svg",
        "/svg/1_037.svg",
        "/svg/1_038.svg",
        "/svg/1_039.svg",
        "/svg/1_040.svg",
        "/svg/1_041.svg",
        "/svg/1_042.svg",
        "/svg/1_043.svg",
        "/svg/1_044.svg",
        "/svg/1_045.svg",
        "/svg/1_046.svg",
        "/svg/1_047.svg",
        "/svg/1_048.svg",
        "/svg/1_049.svg",
        "/svg/1_050.svg",
        "/svg/1_051.svg",
      ],
      x: 1,
    }

  },
  methods: {
    displayNextImage() {
      this.x = (this.x === this.images.length - 1) ? 1 : this.x + 1;
      document.getElementById("img").src = this.images[this.x];
    },
    start() {
      setTimeout(() => {
        setInterval(() => {
          this.displayNextImage()
        }, 100);
      }, 1000);
    }
  },
  created() {
    this.start();
  },
}
</script>
