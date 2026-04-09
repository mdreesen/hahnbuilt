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
  <div>

    <appHero />

    <section>
      <appRecentProjects />
    </section>

    <section>
      <appDescription />
    </section>

    <section>
      <appFaq />
    </section>

  </div>
</template>