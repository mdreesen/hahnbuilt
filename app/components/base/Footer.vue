<template>
  <footer class="text-white pt-32 pb-10 px-10 border-t border-white/5 relative overflow-hidden">

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="flex flex-col sm:flex-row justify-around gap-16 mb-24">

        <div class="md:col-span-5">
          <baseImage source="/images/logo_transparent.webp" :style="'w-48 mb-8'" alt="Hahn Built transparent logo" />

          <p class="text-zinc-400 max-w-sm mb-8 leading-relaxed">
            Specializing in high-performance concrete structures across the Flathead Valley. From Kalispell to the
            peaks, we build the bedrock of Montana.
          </p>
          <div class="flex flex-col gap-2 font-mono text-xs uppercase tracking-widest text-orange-600">
            <span>Kalispell, Montana</span>
            <span>Licensed • Bonded • Insured</span>
          </div>
        </div>

        <div class="flex flex-col gap-10">
          <span class="text-xs uppercase tracking-widest">Connect</span>
          <div>
            <a href="https://www.instagram.com/hahnbuilt/" name="instagram">
              <Icon name="skill-icons:instagram" class="w-15 h-15 text-zinc-400 group-hover:text-orange-600" />
            </a>
          </div>

        </div>
      </div>

      <div class="pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6">
        <p class="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
          © {{ new Date().getFullYear() }} Hahn Built Construction Co. All Rights Reserved.
        </p>
        <div class="flex gap-8 text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
          <a href="https://www.mdreesen.com/" name="White Raven Development" class="text-zinc-400 hover:underline">Site by White Raven Development</a>
        </div>
      </div>
    </div>
  </footer>
</template>