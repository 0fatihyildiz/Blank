<script setup lang="ts">
import { version } from "@blank/vue/package.json";
import { Item, Button, Icon, Badge } from "@blank/vue";
</script>

<template>
    <Item col="full" class="header">
        <div class="left">
            <div class="meta">
                <NuxtImg src="logo.svg" alt="Blank" class="logo" />
                <Badge variant="neutral">
                    v{{ version }}
                </Badge>
            </div>

            <div class="navigation">
                <Button appearance="text">Documentation</Button>
                <Button appearance="text">Components</Button>
            </div>
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
        @apply flex gap-12;

        .meta {
            @apply flex gap-4 items-center;

            .logo {
                @apply size-12;
            }
        }


        .navigation {
            @apply flex gap-4;
        }
    }
}
</style>