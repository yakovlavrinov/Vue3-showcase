<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '../hooks/useThame'

const { theme, toggleTheme } = useTheme()
const isChecked = computed(() => theme.value === 'dark')
</script>

<template>
  <input type="checkbox" :checked="isChecked" @:change="toggleTheme" class="checkbox" id="chk" />
  <label class="label" for="chk">
    <span class="icon sun"> ☀️ </span>
    <span class="icon moon"> 🌙 </span>

    <div class="ball"></div>
  </label>
</template>

<style scoped>
.checkbox {
  opacity: 0;
  position: absolute;
}

.label {
  position: relative;
  width: 52px;
  height: 28px;
  padding: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  border-radius: 50px;

  background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.05));

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.25),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);

  transform: scale(1.4);
}

.icon {
  font-size: 14px;
  z-index: 1;
  user-select: none;
  transition: opacity 0.2s ease;
}

.moon {
  opacity: 0.4;
}

.sun {
  opacity: 1;
}

.ball {
  position: absolute;
  top: 2px;
  left: 2.5px;

  width: 22px;
  height: 22px;
  border-radius: 50%;

  background: radial-gradient(circle at top left, #ffffff, #dcdcdc);

  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.3),
    inset 0 0 2px rgba(255, 255, 255, 0.8);

  transition: transform 0.25s ease;
}

.checkbox:checked + .label .ball {
  transform: translateX(22px);
}

.checkbox:checked + .label .moon {
  opacity: 1;
}

.checkbox:checked + .label .sun {
  opacity: 0.4;
}
</style>
