<script setup lang="ts">
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.vue'
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
    <div class="toggle">
      <ThemeSwitcher />
    </div>
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

.toggle {
  position: absolute;
  top: 50px;
}
</style>
