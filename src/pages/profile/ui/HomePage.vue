<script setup lang="ts">
import { Button, Card, Input } from '@/shared/ui';
import { RouterLink } from 'vue-router';
import { ROUTES } from '@/shared/routes';

</script>
<template>
    <div>
        <h1>Home page</h1>
        <Card>Vue 3</Card>
        <h2>Test Card</h2>
        <p>This is a test card component.</p>
        <Input placeholder="Enter text here" />
        <Button />
        <RouterLink :to="ROUTES.HOME.PATH">Home</RouterLink>
        <RouterLink :to="ROUTES.PROFILE.PATH">Profile</RouterLink>
    </div>
</template>
<style scoped></style>