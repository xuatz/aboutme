<script lang="ts">
  import type { ShowBacklogItem } from '$lib/types/shows';

  export let showBacklog: ShowBacklogItem[];
</script>

<ul class="grid grid-cols-1 gap-4 md:grid-cols-2">
  {#each showBacklog as item}
    <li
      class="p-4 transition-all duration-300 rounded-lg group bg-gradient-to-r from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-gray-700/50"
    >
      <div class="flex items-center justify-between gap-2 mb-2">
        <span
          class="font-medium text-gray-700 dark:text-secondary-dark/70 transition-colors duration-300 group-hover:text-yellow-600 dark:group-hover:text-yellow-400"
        >
          {item.title}
        </span>
        <span
          class="px-2 py-1 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
        >
          Backlog
        </span>
      </div>
      <p class="text-sm text-gray-500 dark:text-secondary-dark/50">{item.format}</p>
    </li>
  {/each}
</ul>
