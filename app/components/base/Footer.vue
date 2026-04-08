<template>
  <footer class="bg-[#0c0c0c] text-white pt-32 pb-10 px-10 border-t border-white/5 relative overflow-hidden">

    <div class="absolute bottom-0 left-0 right-0 select-none pointer-events-none translate-y-1/4">
      <!-- <h2 class="text-[25vw] font-black uppercase italic text-zinc-900/30 whitespace-nowrap tracking-tighter">
        HAHN BUILT.
      </h2> -->
      <baseHeaderSection text="Hahn Built" />
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">

        <div class="md:col-span-5">
          <baseImage source="/images/logo_transparent.webp" :style="'w-48 mb-8'" alt="Hahn Built transparent logo" />

          <p class="text-zinc-500 max-w-sm mb-8 leading-relaxed">
            Specializing in high-performance concrete structures across the Flathead Valley. From Evergreen to the
            peaks, we build the bedrock of Montana.
          </p>
          <div class="flex flex-col gap-2 font-mono text-xs uppercase tracking-widest text-orange-600">
            <span>Evergreen, Montana</span>
            <span>Licensed • Bonded • Insured</span>
          </div>
        </div>

        <div class="md:col-span-2">
          <span class="text-xs font-black uppercase tracking-[0.2em] mb-8 text-zinc-300">Navigation</span>
          <ul class="flex flex-col gap-4 text-sm font-bold uppercase italic tracking-tight">
            <li>
              <baseLink to="/about" :style="'hover:text-orange-600 transition'" text="About" />
            </li>
            <li>
              <baseLink to="/projects" :style="'hover:text-orange-600 transition'" text="Projects" />
            </li>
            <li>
              <baseLink to="/contact" :style="'hover:text-orange-600 transition'" text="Contact" />
            </li>
          </ul>
        </div>

        <!-- <div class="md:col-span-2">
          <span class="text-xs font-black uppercase tracking-[0.2em] mb-8 text-zinc-300">Connect</span>
          <ul class="flex flex-col gap-4 text-sm font-bold uppercase italic tracking-tight text-zinc-500">
            <li><a href="#" class="hover:text-white transition">Instagram</a></li>
            <li><a href="#" class="hover:text-white transition">Facebook</a></li>
            <li><a href="tel:4060000000" class="hover:text-white transition">406.XXX.XXXX</a></li>
          </ul>
        </div> -->

        <div class="md:col-span-3">
          <div class="p-8 bg-zinc-900/50 border border-white/10 rounded-2xl">
            <span class="text-xs font-black uppercase tracking-widest mb-4">Ready to Manifest?</span>
            <p class="text-xs text-zinc-500 mb-6">Launch our interactive project manifest to get a rapid structural
              estimate.</p>
            <button
              class="w-full py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-colors">
              Start Manifest
            </button>
          </div>
        </div>
      </div>

      <div class="pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6">
        <p class="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          © 2026 Hahn Built Construction Co. All Rights Reserved.
        </p>
        <div class="flex gap-8 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          <!-- <a href="#" class="hover:text-white">Privacy</a>
          <a href="#" class="hover:text-white">Terms</a> -->
          <span class="text-zinc-800">Site by White Raven</span>
        </div>
      </div>
    </div>
  </footer>
</template>