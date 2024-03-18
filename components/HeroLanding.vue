<script setup lang="ts"></script>

<template>
  <div class="flex flex-col items-center justify-around px-4 py-48 font-changa lg:flex-row lg:px-60 xl:px-72">
    <slot name="left" />
    <slot name="right" />
  </div>
</template>

<style scoped></style>
