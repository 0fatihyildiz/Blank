<script setup lang="ts">
import { Badge, Button, Icon, Item } from '@blank/vue'
import { version } from '@blank/vue/package.json'
</script>

<template>
    <Item col="full" class="header">
        <div class="left">
            <NuxtImg src="logo.svg" alt="Blank" class="logo" />
            <Badge variant="neutral">
                v{{ version }}
            </Badge>
        </div>

        <Button>
            <Icon name="remix:flashlight-fill" class="size-4" />
            Get started
        </Button>
    </Item>
</template>

<style scoped lang="postcss">
.header {
    @apply border border-alpha-black-10 px-12 flex justify-between items-center;

    .left {
        @apply flex gap-4 items-center;

        .logo {
            @apply size-12;
        }
    }

    .navigation {
        @apply flex gap-4;
    }
}
</style>
