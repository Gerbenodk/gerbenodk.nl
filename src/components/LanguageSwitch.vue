<template>
<!--    <div class="flex gap-2">-->

        <nav class="border-b border-black w-full h-12">
          <ul class="text-4xl text-center">
              <li
                  v-for="(locale, index) in locales"
                  :key="index"
                  class="px-4 text-black amatic inline-block"
              >
                  <button @click="changeLocale(locale.key)">
                      {{ locale.name }}
                  </button>
              </li>
          </ul>
        </nav>
<!--    </div>-->
</template>

<script setup>
import {useI18n} from "vue-i18n";

let { locale } = useI18n()
const changeLocale = (lang) => {
    locale.value = lang
}

const locales = {
    en: {
        'name': 'English',
        'icon': '/',
        'key': 'en'
    },
    nl: {
        'name': 'Dutch',
        'icon': '/',
        'key': 'nl'
    }
}
</script>