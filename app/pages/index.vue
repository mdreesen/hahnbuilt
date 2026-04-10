<script setup>
useSeoMeta({
  title: 'Hahn Built | Home',
  description: 'Home Hahn Built',
  ogDescription: 'Home Hahn Built',
  ogTitle: 'Hahn Built | Home',
  ogImage: '/images/logo.webp',
})

useHead({
  title: 'Hahn Built | Main',
  meta: [
    { name: 'Home', content: 'Hahn Built Home.' },
  ],
});
</script>

<template>
  <div class="flex flex-col gap-40">

    <appHero />

      <!-- <appRecentProjects /> -->

      <appDescription />

      <appFaq />

  </div>
</template>