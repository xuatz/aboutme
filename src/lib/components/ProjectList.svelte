<script>
  const projects = [
    {
      name: 'breakout-shuffler',
      type: 'software',
      url: 'https://github.com/xuatz/breakout-shuffler'
    },
    {
      name: 'Build a SSD NAS',
      type: 'hardware'
    },
    {
      name: '70kg Benchpress Goal',
      type: 'fitness'
    },
    {
      name: 'Build-Your-Own Reverse phone number lookup website',
      type: 'software'
    },
    {
      name: 'Meguro Station Community Meal Ledger',
      type: 'software'
    }
  ];
</script>

<div
  class="bg-white/90 dark:bg-gray-800 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl"
>
  <h2 class="flex items-center mb-4 text-2xl font-bold text-gray-800 dark:text-secondary-dark">
    <span class="mr-2 text-2xl">🎯</span> What I'm Working On
  </h2>
  <ul class="space-y-3">
    {#each projects as project}
      <li
        class="flex items-center p-3 transition-colors duration-200 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-yellow-50 dark:hover:bg-gray-600"
      >
        <span class="flex-shrink-0 mr-2 text-yellow-500">
          {#if project.type === 'software'}
            💻
          {:else if project.type === 'hardware'}
            🔧
          {:else if project.type === 'fitness'}
            💪
          {/if}
        </span>
        {#if project.url}
          <a
            href={project.url}
            class="text-gray-700 truncate transition-colors duration-200 dark:text-secondary-dark/70 hover:text-yellow-600 dark:hover:text-yellow-400"
          >
            {project.name}
          </a>
        {:else}
          <span class="text-gray-700 dark:text-secondary-dark/70">
            {project.name}
          </span>
        {/if}
      </li>
    {/each}
  </ul>
</div>
