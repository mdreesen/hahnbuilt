<script setup lang="ts">
import { stats, qualityPoints } from '~/utils/data';
import { slideRight, slideUp } from '~/utils/gsap';

useSeoMeta({
    title: 'Hahn Built | About',
    description: 'About Hahn Built',
    ogDescription: 'About Hahn Built',
    ogTitle: 'Hahn Built | About',
    ogImage: '/images/logo.webp',
});
</script>

<template>
    <div class="min-h-screen pt-40 pb-20 px-4">
        <div class="max-w-7xl mx-auto flex flex-col gap-40">

            <header class="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div class="relative z-10">
                    <span class="text-orange-600 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">The
                        Mandate</span>
                    <baseHeader v-gsap.from="{ ...slideRight }"
                        text="Built to<br><span class='text-orange-600'>Outlast.</span>" />

                    <baseDescription v-gsap.from="{ ...slideUp }" text="In Montana, the environment is the ultimate inspector. At Hahn Built, we don't just pour
                        concrete; we engineer foundations that withstand the shifting frost and heavy loads of the
                        Flathead Valley." />
                </div>

                <div class="relative aspect-square bg-zinc-900 overflow-hidden group">
                    <baseImage source="/images/home_three.webp" alt="Hahn Built personal image"
                        :style="`w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-3000`" />
                    <div class="absolute inset-0 border-20 border-[#0c0c0c]"></div>
                </div>
            </header>

            <section class="grid grid-cols-2 md:grid-cols-4 gap-1 border-y border-white/10 bg-white/10">
                <div v-for="stat in stats" :key="stat.label"
                    class="py-16 flex justify-center items-center text-center group">
                    <baseCard :title="stat.label" :description="stat.value" />
                </div>
            </section>

            <section class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                <div class="lg:col-span-4">
                    <span class="text-4xl font-black uppercase italic tracking-tight mb-6">Our Bedrock</span>
                    <baseDescription text="Hahn Built was founded on the principle that a project is only as good as its base. We
                        specialize in high-spec commercial foundations and custom residential flatwork where precision
                        isn't optional—it's the standard." />

                </div>

                <div class="lg:col-span-8">
                    <div class="blueprint-img h-px bg-orange-600 mb-10"></div>
                    <div class="flex flex-col md:flex-row justify-between gap-10">
                        <div class="max-w-xs">
                            <span class="text-orange-600 font-mono text-[10px] uppercase mb-4 tracking-widest">01.
                                Precision</span>
                            <p class="text-sm text-zinc-400">Laser-leveled accuracy on every pour, ensuring a perfect
                                start for every build.</p>
                        </div>
                        <div class="max-w-xs">
                            <span class="text-orange-600 font-mono text-[10px] uppercase mb-4 tracking-widest">02.
                                Durability</span>

                            <baseDescription text="Mixed specifically for the local climate to prevent
                                cracking and structural failure." />
                        </div>
                    </div>
                </div>
            </section>

            <section class="text-white border-y border-white/5 relative overflow-hidden">

                <div
                    class="absolute top-10 right-10 font-mono text-[10px] text-zinc-500 uppercase tracking-[0.5em] hidden lg:block">
                    Spec: ASTM C94/C94M-22a
                </div>

                <div class="max-w-7xl mx-auto">
                    <div class="flex flex-col sm:flex-row gap-6 items-center">

                        <div class="lg:col-span-5 relative group gap-4">
                            <div class="relative aspect-3/4 overflow-hidden border border-white/10">
                                <baseImage source="/images/about_one.webp"
                                    :style="`w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-all duration-1000`"
                                    alt="About Image with filling concrete" />

                                <div
                                    class="absolute top-10 left-10 px-4 py-1 border border-orange-600 text-orange-600 font-mono text-[10px] uppercase tracking-widest -rotate-12">
                                    QC Passed
                                </div>
                            </div>
                        </div>

                        <div class="lg:col-span-7">
                            <baseHeaderSection text="Our <span class='text-orange-600'>Standards</span>" />


                            <div class="space-y-12">
                                <div v-for="(point, i) in qualityPoints" :key="i"
                                    class="quality-point group flex gap-8 items-start border-b border-white/5 pb-8">
                                    <div class="text-orange-600 font-mono text-lg pt-1">/0{{ i + 1 }}</div>
                                    <div>
                                        <span
                                            class="text-xl font-black uppercase italic tracking-tight mb-2 group-hover:text-orange-600 transition-colors">
                                            {{ point.title }}
                                        </span>
                                        <baseDescription :text="point.desc" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>
</template>