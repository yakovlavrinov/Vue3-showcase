<script setup lang="ts">
import ProfileCard from './ProfileCard.vue'

const user = {
  lastName: 'Sophie',
  firstName: 'Bennett',
  bio: 'Product Designer who focuses on simplicity & usability.',
  followers: 312,
  projects: 48,
}
</script>

<template>
  <div class="layout">
    <ProfileCard :user="user" />
  </div>
</template>

<style scoped lang="scss">
.layout {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}
</style>
