<script setup lang="ts">
import { Icon, Item, Text } from '@blank/vue'
</script>

<template>
    <Item class="footer" col="full">
        <Text variant="caption1" tag="span">
            MIT License
        </Text>

        <div class="social">
            <a href="https://github.com/creators-team/Blank" target="_blank">
                <Icon name="remix:github-fill" class="size-4" />
            </a>
        </div>
    </Item>
</template>

<style scoped lang="postcss">
.footer {
    @apply px-12 pt-24 pb-5 flex justify-between items-center text-primary-400;

    .social {
        @apply flex gap-4;

        a {
            @apply flex items-center flex-shrink-0;

            .iconify {
                @apply size-6 text-zinc-500 hover:text-zinc-600;
            }
        }
    }
}
</style>
