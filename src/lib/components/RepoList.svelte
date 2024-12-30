<script>
  export let repos;
</script>

<div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
  <h2 class="text-2xl font-bold mb-4 text-gray-800 flex items-center">
    <span class="text-2xl mr-2">⭐</span> Repositories that I'm Interested in~
  </h2>
  <ul class="space-y-3">
    {#each repos as repo}
      <li class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors duration-200">
        <span class="text-yellow-500 mr-2">📚</span>
        <a href={repo} class="text-gray-700 hover:text-yellow-600 transition-colors duration-200">{repo}</a>
      </li>
    {/each}
  </ul>
</div>
