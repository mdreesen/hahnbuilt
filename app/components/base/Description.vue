<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        default: 'One'
    },
})
</script>
<template>
    <p class="text-zinc-400 text-xl leading-relaxed max-w-lg" v-html="text" />
</template>