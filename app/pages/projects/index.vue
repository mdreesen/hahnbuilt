<script setup lang="ts">
useSeoMeta({
  title: 'Hahn Built | Projects',
  description: 'Projects for Hahn Built',
  ogDescription: 'Projects for Hahn Built',
  ogTitle: 'Hahn Built | Projects',
  ogImage: '/images/logo.webp',
})

const projects = [
  {
    id: '01',
    title: 'The Setup',
    href: "/projects/setup",
    img: '/images/projects/setup/setup_three.webp',
  },
  {
    id: '02',
    title: 'The Pour',
    href: "/projects/pour",
    img: '/images/projects/pour/pour_three.webp',
  }
];

const activeBg = ref(projects[0].img);
const setBg = (img: string) => activeBg.value = img;
</script>

<template>
  <div class="min-h-screen text-white pt-40 pb-20 relative overflow-hidden">

    <!-- Large Background Preview (The "Ghost" Image) -->
    <div class="fixed inset-0 z-0 transition-all duration-1000 ease-in-out opacity-20 grayscale pointer-events-none">
      <baseImage :source="activeBg" :style="`w-full h-full object-cover scale-110`" alt="Background Preview" />
      <div class="absolute inset-0 bg-linear-to-b from-[#0c0c0c] via-transparent to-[#0c0c0c]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-10 relative z-10">
      <header class="mb-24">
        <span class="text-orange-600 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Archive</span>
        <baseHeader text="Projects" />
      </header>

      <div class="flex flex-col border-t border-white/10">
        <div v-for="project in projects" :key="project.id" @mouseenter="setBg(project.img)"
          class="group border-b border-white/10 py-12 cursor-pointer transition-colors hover:bg-white/5 px-4">
          <nuxt-link :to="project.href">

            <div class="grid grid-cols-1 md:grid-cols-12 items-center gap-8">

              <div class="md:col-span-1 font-mono text-zinc-400 group-hover:text-orange-600 transition-colors">
                {{ project.id }}
              </div>

              <div class="md:col-span-5">
                <span
                  class="text-4xl md:text-6xl font-black uppercase italic tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                  {{ project.title }}
                </span>
              </div>

              <div class="md:col-span-3 text-right hidden md:block">
              </div>

            </div>
          </nuxt-link>

        </div>
      </div>

      <footer
        class="mt-32 border-t border-white/5 pt-10 flex justify-between items-center text-zinc-400 font-mono text-[10px] uppercase tracking-widest">
        <span>Verified Structural Builds</span>
        <span>Montana Licensed #XXXXX</span>
      </footer>
    </div>
  </div>
</template>

<style scoped>
/* Smooth transition for the fixed background image */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>