<script setup lang="ts">
const projects = [
  { id: 1, title: 'Lakeside Lodge (Whitefish)', loc: 'Whitefish', img: 'images/projects/setup/setup_one.webp', span: 'high' },
  { id: 2, title: 'Foundation Pour (Kalispell)', loc: 'Kalispell', img: 'images/projects/setup/setup_two.webp', span: 'mid' },
  { id: 3, title: 'Commercial Slabs (Flathead Valley)', loc: 'Flathead Valley', img: 'images/projects/setup/setup_three.webp', span: 'low' },
  { id: 4, title: 'Mountain Retreat (Bigfork)', loc: 'Bigfork', img: 'images/projects/setup/setup_four.webp', span: 'high' },
  { id: 5, title: 'Mill Creek Bridge', loc: 'Remote MT', img: 'images/projects/setup/setup_five.webp', span: 'mid' },
  { id: 6, title: 'Structural Steel (Evergreen)', loc: 'Evergreen', img: 'images/projects/setup/setup_six.webp', span: 'low' },
];
</script>

<template>
  <section class="py-24 px-6 md:px-12 border-t border-zinc-800">

    <header class="mb-20">
      <baseHeaderSection text="Project<br><span class='text-orange-600'>Portfolio</span>" />
      <baseDescription
        text="From residential foundations to complex commercial scale, Hahn Built structures defines endurance with setup." />
    </header>

    <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
      <div v-for="project in projects" :key="project.id"
        class="break-inside-avoid group relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-sm shadow-xl transition-all duration-300 hover:border-orange-600/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-600/5">
        <div :class="[
          'relative overflow-hidden',
          project.span === 'high' ? 'aspect-3/4.5' : project.span === 'mid' ? 'aspect-square' : 'aspect-4/3'
        ]">
          <baseImage :source="project.img"
            :style="`w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110`"
            alt="Setup Concrete image" />

          <div
            class="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
            <span class="text-orange-500 font-mono text-xs uppercase tracking-widest mb-2">Hahn Built Verified</span>
          </div>
          1/div>

          <div class="p-5 flex justify-between items-center bg-zinc-900 border-t border-zinc-800">
            <span
              class="font-bold text-xs uppercase tracking-[0.2em] text-zinc-400 group-hover:text-white transition-colors duration-300">{{
              project.title }}</span>
            <div class="w-8 h-0.5 bg-zinc-700 group-hover:w-16 group-hover:bg-orange-600 transition-all duration-300">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Ensures the Pinterest effect is clean and smooth */
.break-inside-avoid {
  break-inside: avoid;
}
</style>