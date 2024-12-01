<script lang="ts" setup>
import { Item } from "@blank/vue";
</script>

<template>
    <Item class="feature" col="full">
        <div class="content">

        </div>
    </Item>
</template>

<style lang="postcss">
.feature {
    @apply relative w-full px-12 h-full flex justify-between gap-4;

    .content {
        @apply h-full justify-center flex flex-col gap-4;


    }
}
</style>