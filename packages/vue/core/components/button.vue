<script setup lang="ts">
interface Props {
    readonly text: string
    test: string
    test2: string
}

const { text } = defineProps<Props>()
</script>

<template>
    <button class="button">
        {{ text }}
    </button>
</template>
