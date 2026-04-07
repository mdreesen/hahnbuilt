<template>
    <nav class="fixed w-full z-50 flex justify-between items-center px-12 py-10 mix-blend-difference">
        <NuxtImg class="w-45" src="/images/logo.webp" format="webp" preload loading="eager" fetch-priority="high" />

        <div class="flex gap-10 text-xs font-bold tracking-widest uppercase text-zinc-400">
            <a href="#projects" class="hover:text-orange-500 transition">Projects</a>
            <a href="#contact"
                class="px-6 py-2 border border-white/20 hover:bg-white hover:text-black transition">Inquire</a>
        </div>
    </nav>
</template>