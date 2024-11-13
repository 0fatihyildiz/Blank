<script lang="ts" setup>
import useContext from '../composables/context'

useContext()
</script>

<template>
    <div class="blank__container">
        <slot />
    </div>
</template>
