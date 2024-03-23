<script setup lang="ts">
defineProps<{
    name: string;
}>()
</script>

<template>
    <HeroLanding>
        <template #left>
            <HeroText :title="name" text="" />
        </template>
        <template #right>
            <p>Cette fonctionnalité sera bientôt disponible. <br>
                Rejoignez notre <NuxtLink to="https://nmty.fr/gg" class="underline hover:text-red-orange-500"
                    :external="true">serveur discord</NuxtLink> pour plus d'informations.</p>
        </template>
    </HeroLanding>
</template>