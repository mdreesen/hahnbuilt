<script setup>
import { slideRight, slideUp, scrollTrigger } from '~/utils/gsap';
</script>

<template>
  <section class="h-screen flex flex-col justify-center px-4 relative overflow-hidden">
    <div class="z-10">
      <div v-gsap.from="{...slideRight}">
        <baseHeader text="Built to<br><span class='text-orange-600'>Endure.</span>" />
      </div>
      <baseDescription v-gsap.from="{...slideUp}"
       text="Advanced concrete solutions for residential and commercial developments. At Hahn Built, we bridge the gap
        between architectural vision and structural permanence." />
    </div>

    <div v-gsap.to="{...scrollTrigger}" class="absolute right-0 top-0 w-1/2 h-full grayscale opacity-40">
      <baseImage source="/images/home_one.webp" :style="'w-full h-full object-cover'" alt="Hahn Built Worksite" />
    </div>
  </section>
</template>
