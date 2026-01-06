<script setup lang="ts">
import Photo from './assets/Photo.png'
import VerificationIcon from './assets/VerificationIcon.svg'
import FollowersIcon from './assets/FollowersIcon.svg'
import ProjectsIcon from './assets/ProjectsIcon.svg'
import Plus from './assets/Plus.svg'
import { computed } from 'vue'

interface User {
  lastName: string
  firstName: string
  bio: string
  followers: number
  projects: number
}

// ховер дизеблет
// обработчик по желанию
// картинга из данных
// продумать другую стилизацию и смену по параметрам
// добавить переключатели в лайаут

// https://www.figma.com/design/BHf457pBw34fbyGDwscjIb/Profile-Card--Community-?node-id=1-23&t=DjJCAzaIhn1ZHWbz-0

const { user } = defineProps<{ user: User }>()

const fullName = computed(() => `${user.lastName} ${user.firstName}`)
</script>

<template>
  <div class="card">
    <div class="photo">
      <img :src="Photo" alt="Photo" />
    </div>
    <div class="info">
      <div class="title">
        <h3>{{ fullName }}</h3>
        <img :src="VerificationIcon" alt="VerificationIcon" />
      </div>
      <p>{{ user.bio }}</p>
    </div>
    <div class="stats">
      <div class="followers">
        <img :src="FollowersIcon" alt="Followers" />
        <p>{{ user.followers }}</p>
      </div>
      <div class="posts">
        <img :src="ProjectsIcon" alt="Projects" />
        <p>{{ user.projects }}</p>
      </div>
      <button><span>Follow</span><img :src="Plus" alt="Plus" /></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

.card {
  max-width: 280px;
  width: 100%;
  padding: 8px;
  border-radius: 40px;
  background-color: #fcfcfc;
  font-family: 'Inter', sans-serif;

  .photo {
    img {
      width: 264px;
      height: 280px;
      border-radius: 32px;
    }
  }
}

.info {
  padding: 0px 20px;
  margin-bottom: 20px;

  p {
    font-size: 15px;
    color: #767676;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }
}

.title {
  display: flex;
  margin: 20px 0 4px 0;
  gap: 8px;

  h3 {
    font-weight: 500;
    font-size: 22px;
    font-family: 'Inter', sans-serif;
  }
}
.stats {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 16px;

  .followers,
  .posts {
    display: flex;
    gap: 4px;

    p {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 15px;
    }
  }
}

button {
  padding: 11px 22px;
  border-radius: 32px;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(24, 24, 24, 0.03);
  box-shadow: inset 0 2px 6px 0 #fff, inset 0 -2px 4px 0 rgba(137, 137, 137, 0.08);
  background-color: #efefef;
  transition: all 0.8s;

  span {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 15px;
  }

  &:hover {
    background-color: #f5f5f5;
    transform: translateY(-1px);
    box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.8), inset 0 -2px 2px rgba(0, 0, 0, 0.05),
      0 4px 10px rgba(0, 0, 0, 0.12);

    span {
      transform: translateY(-1px);
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.12), inset 0 -1px 2px rgba(255, 255, 255, 0.6);
  }
}
</style>
