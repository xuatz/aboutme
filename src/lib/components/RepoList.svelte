<script>
  export let repos;
</script>

<div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
  <h2 class="flex items-center mb-4 text-2xl font-bold text-gray-800">
    <span class="mr-2 text-2xl">⭐</span> Repositories that I'm Interested in~
  </h2>
  <ul class="space-y-3">
    {#each repos as repo}
      <li class="flex items-center p-3 transition-colors duration-200 rounded-lg bg-gray-50 hover:bg-yellow-50">
        <span class="flex-shrink-0 mr-2 text-yellow-500">📦</span>
        <a href={repo} class="text-gray-700 truncate transition-colors duration-200 hover:text-yellow-600">{repo}</a>
      </li>
    {/each}
  </ul>
</div>
