<script setup lang="ts">
import type { AvatarGroupsProps } from '@blank/types'
import { computed } from 'vue'
import Avatar from './avatar.vue'

const props = withDefaults(defineProps<AvatarGroupsProps>(), {
    maxDisplay: 3,
    size: 'medium',
    rounded: 'none',
    avatars: [] as { src: string, name: string }[],
})

const displayAvatars = computed(() => props.avatars.slice(0, props.maxDisplay))
</script>

<template>
    <div class="blank__avatar-group">
        <Avatar
            v-for="(avatar, index) in displayAvatars"
            :key="index"
            :src="avatar.src"
            :name="avatar.name"
            :size="props.size"
            :rounded="props.rounded"
        >
            />
        </avatar>
    </div>
</template>
