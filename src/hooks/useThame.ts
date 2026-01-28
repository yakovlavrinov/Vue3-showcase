import { ref } from 'vue'

const theme = ref<'light' | 'dark'>('light')

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme.value)
  }

  return { theme, toggleTheme }
}
