<script lang="ts" setup>
import { Item, Text } from "@blank/vue";
</script>

<template>
    <Item class="feature" col="full">
        <div class="header">
            <Text class="title" variant="body2" tag="span">
                Categories
            </Text>
        </div>
        <div class="content">

        </div>
    </Item>
</template>

<style lang="postcss">
.feature {
    @apply relative w-full px-12 h-full flex justify-between gap-4;

    .header {
        @apply border-b border-alpha-black-10 pb-4;

        .title {
            @apply text-primary-900 font-medium;
        }
    }

    .content {
        @apply h-full justify-center flex flex-col gap-4;
    }
}
</style>