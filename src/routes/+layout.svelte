<script lang="ts">
  import '../app.css';
  import NavBar from '$lib/components/NavBar.svelte';
  import { onMount } from 'svelte';

  let darkMode = false;

  onMount(() => {
    // Check system preference or stored preference
    darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', darkMode);
  });

  function toggleDarkMode() {
    darkMode = !darkMode;
    document.documentElement.classList.toggle('dark', darkMode);
  }
</script>

<div class="relative">
  <NavBar />

  <!-- Dark mode toggle -->
  <button
    class="fixed z-50 p-2 rounded-full shadow-lg bottom-4 right-4 bg-primary-light dark:bg-primary-dark"
    on:click={toggleDarkMode}
    aria-label="Toggle dark mode"
  >
    {#if darkMode}
      <!-- Sun icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-secondary-dark"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    {:else}
      <!-- Moon icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-secondary-light"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    {/if}
  </button>

  <main>
    <slot />
  </main>
</div>
