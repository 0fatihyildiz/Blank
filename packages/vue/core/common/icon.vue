<script setup lang="ts">
import type { IconProps } from '@blank/types'
import { Remix, Status } from '@blank/icons'
import { computed, defineComponent } from 'vue'

const props = withDefaults(defineProps<IconProps>(), {
    size: '24',
    color: 'currentColor',
})

const Icons: Record<string, Record<string, any>> = {
    remix: Remix,
    status: Status,
}

const [prefix, iconName] = props.name.split(':') as [keyof typeof Icons, string]

const iconData = computed(() => Icons[prefix]?.icons[iconName])

const IconNotFound = defineComponent({
    setup() {
        console.error(`Icon ${props.name} not found`)
    },
    template: '<!-- Icon not found -->',
})
</script>

<template>
    <svg
        v-if="iconData"
        :height="props.size"
        :width="props.size"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        v-html="iconData.body"
    />
    <IconNotFound v-else />
</template>
