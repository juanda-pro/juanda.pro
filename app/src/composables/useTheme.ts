import { ref, onMounted, watch } from 'vue';

const isDarkMode = ref(false);

export function useTheme() {
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
  };

  const setTheme = (dark: boolean) => {
    isDarkMode.value = dark;
  };

  const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      isDarkMode.value = true;
    } else {
      isDarkMode.value = false;
    }
  };

  // Watcher para aplicar cambios al DOM y localStorage
  watch(isDarkMode, (newValue) => {
    if (newValue) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, { immediate: true });

  return {
    isDarkMode,
    toggleTheme,
    setTheme,
    initializeTheme
  };
}