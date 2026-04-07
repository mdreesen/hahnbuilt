<template>
    <section class="bg-[#0c0c0c] text-white py-32 px-10 border-t border-white/5">
      <div class="max-w-7xl mx-auto">
        <div class="mb-24">
          <span class="text-orange-600 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Capabilities</span>
          <h2 class="text-[clamp(3rem,8vw,6rem)] font-black uppercase italic leading-[0.9] tracking-tighter">
            Everything <br /> <span class="text-zinc-800">You Need.</span>
          </h2>
          <p class="mt-8 max-w-2xl text-zinc-500 text-lg leading-relaxed">
            From massive commercial foundations to custom architectural flatwork, Hahn Built delivers structural concrete that serves as the literal bedrock of Montana.
          </p>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-2 border-l border-t border-white/10">
          <div 
            v-for="(service, index) in services" 
            :key="index"
            v-gsap.from="{ 
              scrollTrigger: { trigger: '.service-item', start: 'top 90%' },
              opacity: 0, 
              y: 30, 
              delay: index * 0.1 
            }"
            class="service-item group p-12 border-r border-b border-white/10 hover:bg-zinc-900/50 transition-colors duration-500"
          >
            <div class="flex justify-between items-start mb-12">
              <span class="font-mono text-orange-600 text-sm">0{{ index + 1 }}</span>
              <div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-600 transition-colors">
                 <Icon :name="service.icon" class="w-5 h-5 text-zinc-500 group-hover:text-orange-600" />
              </div>
            </div>
            
            <h3 class="text-3xl font-black uppercase italic mb-4 tracking-tight">
              {{ service.title }}
            </h3>
            <p class="text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const services = [
    {
      title: 'Foundation Systems',
      description: 'Precision-engineered pouring for residential estates and commercial hubs. We build the base that never shifts.',
      icon: 'lucide:layers'
    },
    {
      title: 'Architectural Flatwork',
      description: 'Custom stamped and stained concrete that blurs the line between structural necessity and high-end design.',
      icon: 'lucide:layout-grid'
    },
    {
      title: 'Reinforcement & Steel',
      description: 'Industrial-grade rebar integration and structural reinforcement for high-stress Montana environments.',
      icon: 'lucide:shield-check'
    },
    {
      title: 'Site Preparation',
      description: 'Comprehensive excavation, grading, and compaction to ensure your concrete sits on a perfect foundation.',
      icon: 'lucide:mountain'
    }
  ];
  </script>