<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        default: 'One'
    },
})
</script>

<template>
    <h2 class="text-5xl sm:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-8 italic" v-html="text" />
</template>