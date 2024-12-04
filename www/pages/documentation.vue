<script setup lang="ts">
import { Container } from '@blank/vue';

</script>

<template>
    <Container class="justify-center-center max-w-7xl w-full px-12">
        <DocumentationHeader />
        <DocumentationSidebar />
        <DocumentationContent>
            <slot />
        </DocumentationContent>
    </Container>
</template>

<style scoped>

</style>