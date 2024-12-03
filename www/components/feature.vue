<script lang="ts" setup>
import type { CryptocurrencyIconNames, LogosIconNames, PaymentIconNames, RemixIconNames } from '@blank/types'
import { Button, Icon, Item, Text } from '@blank/vue'

interface Feature {
    title: string
    description: string
    icon: RemixIconNames | LogosIconNames | CryptocurrencyIconNames | PaymentIconNames
    to: string
    soon?: boolean
}

const features: Feature[] = [
    {
        title: 'Components',
        description: '10 items',
        icon: 'remix:dashboard-line',
        to: '/',
    },
    {
        title: 'Templates',
        description: 'Soon',
        icon: 'remix:file-list-2-line',
        to: '/',
        soon: true,
    },
    {
        title: 'Blocks',
        description: 'Soon',
        icon: 'remix:layout-line',
        to: '/',
        soon: true,
    },
]
</script>

<template>
    <Item class="feature" col="full">
        <div class="header">
            <Text class="title" variant="body1" tag="span">
                Categories
            </Text>

            <Button appearance="text" size="small">
                View all
            </Button>
        </div>

        <div class="content">
            <NuxtLink v-for="feature in features" :key="feature.title" class="category" :to="feature.to" :class="{ soon: feature?.soon }">
                <div class="icon">
                    <Icon :name="feature.icon" class="iconify" />
                </div>

                <div class="text-content">
                    <Text variant="body2" tag="span" class="title">
                        {{ feature.title }}
                    </Text>
                    <Text variant="caption1" tag="span" class="description">
                        {{ feature.description }}
                    </Text>
                </div>
            </NuxtLink>
        </div>
    </Item>
</template>

<style lang="postcss">
.feature {
    @apply relative w-full px-12 h-full flex flex-col justify-between gap-4;

    .header {
        @apply flex items-center justify-between w-full border-b border-solid border-alpha-black-10 pb-4;

        .title {
            @apply text-primary-900 font-medium;
        }
    }

    .content {
        @apply h-full grid grid-cols-4 gap-4;

        .category {
            @apply flex items-center justify-start border border-solid border-alpha-black-5 hover:bg-primary-50 shadow-sm rounded-xl p-2 gap-2.5;

            &.soon {
                @apply opacity-50 pointer-events-none shadow-none;
            }

            .icon {
                @apply p-2.5 border border-solid border-alpha-black-5 rounded-md;

                .iconify {
                    @apply text-primary-900 h-6 w-6;
                }
            }

            .text-content {
                @apply flex flex-col;

                .title {
                    @apply text-primary-900;
                }

                .description {
                    @apply text-alpha-black-40;
                }
            }
        }
    }
}
</style>
