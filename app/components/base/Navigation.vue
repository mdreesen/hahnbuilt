<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Main',
  to: '/',
}, {
  label: 'About',
  to: '/about',
}, {
  label: 'Projects',
  to: '/projects',
}, {
  label: 'Contact',
  to: '/contact',
}])
</script>

<template>
  <ClientOnly>
    <UHeader mode="slideover" class="fixed w-full border-none bg-transparent italic">
      <template #title>
        <NuxtLink to="/" class="flex items-center text-2xl font-extrabold h-10">
          <baseImage source="/images/logo_transparent.webp" :style="'h-25 w-auto object-contain'"
            alt="Hahn Built Logo" />
        </NuxtLink>
      </template>

      <UNavigationMenu color="neutral" :items="items" />

      <template #body>
        <UNavigationMenu color="neutral" :items="items" orientation="vertical" class="-mx-2.5 bg-black italic" />
      </template>
    </UHeader>
  </ClientOnly>
</template>
