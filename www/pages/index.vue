<script lang="ts" setup>
import { Container } from '@blank/vue'
</script>

<template>
    <StunningGodRay class="!absolute -z-10 opacity-20" />
    <Container class="justify-center-center max-w-7xl w-full h-full">
        <Header />
        <Hero />
        <Feature />
        <Footer />
    </Container>
</template>

<style lang="postcss">
:root {
  font-family: 'Inter', sans-serif;
}
</style>
