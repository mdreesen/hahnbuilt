<template>
  <section class="h-screen flex flex-col justify-center px-12 relative overflow-hidden">
    <div class="z-10">
      <div v-gsap.from="{
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
        stagger: 0.2
      }">
        <baseHeader text="Built to<br><span class='text-orange-600'>Endure.</span>" />
      </div>
      <baseDescription v-gsap.from="{ opacity: 0, x: -50, duration: 1, delay: 0.8 }"
       text="Advanced concrete solutions for residential and commercial developments. At Hahn Built, we bridge the gap
        between architectural vision and structural permanence." />
    </div>

    <div v-gsap.to="{
      scrollTrigger: {
        trigger: 'section',
        start: 'top top',
        scrub: true
      },
      scale: 1.2
    }" class="absolute right-0 top-0 w-1/2 h-full grayscale opacity-40">
      <baseImage source="/images/home_one.webp" :style="'w-full h-full object-cover'" alt="Hahn Built Worksite" />
    </div>
  </section>
</template>
