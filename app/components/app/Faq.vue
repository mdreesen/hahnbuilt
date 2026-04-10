<script setup lang="ts">
import { faqs } from '~/utils/data';
const activeIndex = ref<number | null>(null);

const toggle = (i: number) => {
  activeIndex.value = activeIndex.value === i ? null : i;
};
</script>

<template>
  <section class="text-white py-32 px-4">
    <div class="max-w-4xl mx-auto">
      
      <div class="mb-20">
        <baseHeaderSection text="Common<br><span class='text-orange-600'>Questions</span>" />
      </div>

      <div class="border-t border-white/10">
        <div 
          v-for="(faq, i) in faqs" 
          :key="i"
          class="border-b border-white/10 overflow-hidden"
        >
          <button 
            @click="toggle(i)"
            class="w-full py-10 flex items-center justify-between text-left group transition-all"
          >
            <div class="flex items-center gap-8">
              <span class="font-mono text-zinc-400 group-hover:text-orange-600 transition-colors">
                {{ (i + 1).toString().padStart(2, '0') }}
              </span>
              <span class="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                {{ faq.q }}
              </span>
            </div>
            
            <div class="relative w-6 h-6">
              <div class="absolute inset-0 bg-white h-0.5 my-auto transition-transform duration-500" :class="{ 'rotate-180': activeIndex === i }"></div>
              <div class="absolute inset-0 bg-white w-0.5 mx-auto transition-transform duration-500" :class="{ 'rotate-90 opacity-0': activeIndex === i }"></div>
            </div>
          </button>

          <div 
            v-show="activeIndex === i"
            v-gsap.from="{ height: 0, opacity: 0, duration: 0.5, ease: 'power4.out' }"
            class="pb-10 pl-8 md:pl-18 pr-5"
          >
            <p class="text-zinc-400 text-lg leading-relaxed max-w-2xl border-l-2 border-orange-600/30 pl-6">
              {{ faq.a }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>