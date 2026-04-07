<script setup lang="ts">
const isOpen = ref(false);

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
];

watch(isOpen, (val) => {
  if (val) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = 'auto';
});
</script>

<template>
  <nav v-gsap.from="{ y: -100, opacity: 0, duration: 1.2, ease: 'expo.out' }"
    class="fixed w-full z-100 px-6 py-6 md:px-12 md:py-10 flex justify-between items-center">
    <div class="relative z-110">
      <!-- <img src="/hahn-built-logo.png" alt="Hahn Built" class="w-32 md:w-48 h-auto" /> -->
      <NuxtImg class="w-32 md:w-48 h-auto" src="/images/logo_transparent.webp" format="webp" preload loading="eager"
        fetch-priority="high" />
    </div>

    <div class="hidden md:flex items-center gap-12">
      <ul class="flex gap-10">
        <li v-for="link in navLinks" :key="link.name">
          <a :href="link.href"
            class="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-orange-600 transition-colors duration-300">
            {{ link.name }}
          </a>
        </li>
      </ul>
      <a href="#contact"
        class="group relative px-8 py-3 overflow-hidden border border-white/20 text-[10px] font-black uppercase tracking-[0.2em]">
        <span class="relative z-10 group-hover:text-black transition-colors duration-500">Inquire</span>
        <div
          class="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo">
        </div>
      </a>
    </div>

    <button @click="isOpen = !isOpen" class="relative z-110 md:hidden flex flex-col gap-1.5 p-2 focus:outline-none">
      <span class="w-6 h-0.5 bg-white transition-all duration-500"
        :class="{ 'rotate-45 translate-y-2': isOpen }"></span>
      <span class="w-6 h-0.5 bg-white transition-opacity duration-300" :class="{ 'opacity-0': isOpen }"></span>
      <span class="w-6 h-0.5 bg-white transition-all duration-500"
        :class="{ '-rotate-45 -translate-y-2': isOpen }"></span>
    </button>

    <Transition v-gsap.to="{
      opacity: isOpen ? 1 : 0,
      x: isOpen ? 0 : '100%',
      duration: 0.6,
      ease: 'expo.inOut'
    }">
      <div v-if="isOpen" class="fixed min-h-screen inset-0 bg-black z-200 flex flex-col md:hidden">
        <div class="flex justify-between items-center px-8 py-10">
          <!-- <img src="/hahn-built-logo.png" alt="Hahn Built" class="w-32 h-auto" /> -->
          <button @click="isOpen = false" class="text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="grow flex flex-col justify-center px-8 gap-8">
          <a v-for="(link, index) in navLinks" :key="link.name" :href="link.href" @click="isOpen = false"
            v-gsap.from="{ x: -50, opacity: 0, delay: 0.2 + (index * 0.1) }"
            class="text-6xl font-black uppercase italic tracking-tighter leading-none">
            {{ link.name }}
          </a>
        </div>

        <div v-gsap.from="{ y: 50, opacity: 0, delay: 0.5 }" class="p-8 pb-16">
          <a href="#contact" @click="isOpen = false"
            class="block w-full py-6 bg-orange-600 text-black text-center font-black uppercase tracking-widest italic text-xl shadow-2xl">
            Inquire Now
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.ease-expo {
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}

/* Prevents body scroll when menu is open */
:global(body.menu-open) {
  overflow: hidden;
}
</style>