// composables/useMenu.js
import { ref } from 'vue';

export function useMenu() {
  const unfolded = ref(true);
  const menuOpen = ref(false);

  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
}

  const menuUnfold = () => { 
    unfolded.value = !unfolded.value;
    menuOpen.value = false;
    console.log(menuOpen.value)
  };

  return {
    unfolded,
    menuUnfold,
    menuOpen,
    toggleMenu
  };
}