<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        default: 'One'
    },
})
</script>

<template>
    <h1 class="text-[clamp(4.2rem,7vw,6rem)] sm:text-[clamp(9rem,7vw,6rem)] font-black uppercase leading-[0.85] tracking-tighter mb-8" v-html="text" />
</template>