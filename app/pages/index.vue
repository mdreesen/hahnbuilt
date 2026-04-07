<template>
  <div>

    <appHero />

    <section id="projects" class="py-32 px-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

        <div v-for="(project, index) in projects" :key="index" v-gsap.from="{
          scrollTrigger: {
            trigger: '.project-card',
            start: 'top 80%',
          },
          y: 50,
          opacity: 0,
          duration: 1,
          delay: index * 0.2
        }" class="project-card relative aspect-4/5 overflow-hidden group bg-[#1a1a1a]"
          :class="index % 2 !== 0 ? 'md:mt-32' : ''">
          <img :src="project.img"
            class="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-all duration-700" />
          <div class="absolute inset-0 p-12 flex flex-col justify-end bg-linear-to-t from-black/90 to-transparent">
            <span class="text-orange-500 font-mono text-sm mb-3 uppercase tracking-widest">{{ project.type }}</span>
            <h3 class="text-5xl font-extrabold uppercase italic">{{ project.title }}</h3>
          </div>
        </div>

      </div>
    </section>

    <section>
      <appDescription />
    </section>

    <section>
      <appFaq />
    </section>

  </div>
</template>

<script setup>
const projects = [
  { title: 'The Summit Estate', type: 'Residential', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80' },
  { title: 'Ironwood Plaza', type: 'Commercial', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80' }
];
</script>