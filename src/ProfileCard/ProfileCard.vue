<script setup lang="ts">
import Photo from './assets/Photo.png'
import VerificationIcon from './assets/VerificationIcon.svg'
import FollowersIcon from './assets/FollowersIcon.svg'
import ProjectsIcon from './assets/ProjectsIcon.svg'
import Plus from './assets/Plus.svg'

interface User {
  lastName: string
  firstName: string
  bio: string
  followers: number
  projects: number
}

// https://www.figma.com/design/BHf457pBw34fbyGDwscjIb/Profile-Card--Community-?node-id=1-23&t=DjJCAzaIhn1ZHWbz-0

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
    <div class="user-card">
      <div class="user-photo">
        <img :src="Photo" alt="Photo" />
      </div>
      <div class="user-info">
        <div class="user-title">
          <h3>{{ user.lastName + ' ' + user.firstName }}</h3>
          <img :src="VerificationIcon" alt="VerificationIcon" />
        </div>
        <p>{{ user.bio }}</p>
      </div>
      <div class="user-stats">
        <div class="user-stats-followers">
          <img :src="FollowersIcon" alt="" />
          <p>{{ user.followers }}</p>
        </div>
        <div class="user-stats-post">
          <img :src="ProjectsIcon" alt="" />
          <p>{{ user.projects }}</p>
        </div>
        <button><span>Follow</span><img :src="Plus" alt="Plus" /></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  height: 100vh;
  background-color: #f5f5f5;
}

.user-card {
  width: 280px;
  height: 479px;
  margin: 0 auto;
  padding: 4px;
  border-radius: 40px;
  background-color: #fcfcfc;
}

.user-photo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-info {
  padding: 0px 20px;
}

.user-info p {
  color: #767676;
}

.user-photo img {
  width: 264px;
  height: 280px;
  border-radius: 40px;
}

.user-title {
  display: flex;
  gap: 8px;
}

.user-stats {
  display: flex;
  justify-content: space-around;
}

.user-stats-followers {
  display: flex;
  gap: 4px;
}
.user-stats-post {
  display: flex;
  gap: 4px;
}

button {
  width: 109px;
  border-radius: 32px;
  display: flex;
  gap: 4;
  justify-content: center;
  align-items: center;
}
</style>



