<script setup lang="ts">
const route = useRoute();

useHead({
  meta: [{ property: 'og:title', content: `Hahn Built: ${route.meta.title}` }],
});
</script>

<template>
  <div  class="bg-[#0c0c0c] text-[#eaeaea] min-h-screen selection:bg-orange-600 overflow-x-hidden">
    <baseNavigation />
    <slot />
    <baseFooter />
  </div>
</template>
