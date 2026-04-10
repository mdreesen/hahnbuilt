<script setup>
import { slideRight, slideUp } from '~/utils/gsap';
import { services } from '~/utils/data';
</script>

<template>
    <section class="text-white px-4 border-t border-white/5">
        <div class="max-w-7xl mx-auto">
            <div class="mb-24" v-gsap.from="{...slideRight}">
                <baseHeaderSection text="Everything<br><span class='text-orange-600'>You Need</span>" />
                <p class="mt-8 max-w-2xl text-zinc-200 text-lg leading-relaxed">
                    From massive commercial foundations to custom architectural flatwork, Hahn Built delivers structural
                    concrete that serves as the literal bedrock of Montana.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 border-l border-t border-white/10">
                <div v-for="(item, index) in services" :key="index" v-gsap.from="{...slideUp}"
                    class="service-item group p-12 border-r border-b border-white/10 hover:bg-zinc-900/50 transition-colors duration-500">
                    <baseCard :number="index + 1" :icon="item.icon" :title="item.title" :description="item.description" />
                </div>
            </div>
        </div>
    </section>
</template>

