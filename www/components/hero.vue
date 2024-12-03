<script lang="ts" setup>
import { Avatar, AvatarGroup, Button, Icon, Item, Text } from '@blank/vue'

const { data } = await useAsyncData(
    'collaborators',
    () => $fetch('/api/creators-team/Blank'),
)
</script>

<template>
    <Item class="hero" col="full">
        <div class="content">
            <div class="text-content">
                <Text class="title" variant="h3" tag="h3">
                    Website Design System and UI Components
                </Text>

                <Text class="description" variant="body2" tag="p">
                    Build your website with our design system and UI components. Create
                    your own design system or start with our pre-built components.
                </Text>
            </div>

            <div class="buttons">
                <Button variant="secondary">
                    Components
                </Button>

                <Button>
                    <Icon name="remix:flashlight-fill" class="size-4" />
                    Get started
                </Button>
            </div>

            <div class="collobrators">
                <AvatarGroup>
                    <Avatar
                        v-for="collaborator in data?.slice(0, 4)" :key="collaborator.id" :src="collaborator.avatar_url"
                        rounded="rounded" draggable="false"
                    />
                </AvatarGroup>

                <Text v-if="data" variant="caption1" tag="p">
                    And {{ data.length - 4 }}+ more collaborators
                </Text>
            </div>
        </div>

        <NuxtImg class="placeholder" src="/Placeholder.png" alt="Placeholder" />
    </Item>
</template>

<style lang="postcss">
.hero {
    @apply relative w-full px-12 h-full flex justify-between gap-4;

    .content {
        @apply h-full justify-center flex flex-col gap-4;

        .text-content {
            @apply flex flex-col gap-1;

            .title {
                @apply text-primary-900 font-semibold;
            }

            .description {
                @apply mt-4 text-alpha-black-60 font-normal;
            }
        }

        .buttons {
            @apply mt-4 flex w-full flex-col-reverse items-center justify-center gap-4;

            @screen lg {
                @apply flex-row-reverse justify-end;
            }
        }

        .collobrators {
            @apply mt-4 flex items-center gap-2 text-alpha-black-60;
        }
    }

    .placeholder {
        @apply w-1/2 h-full object-cover;
    }
}
</style>
