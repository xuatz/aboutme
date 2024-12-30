<script>
  export let animeWatchlist;
</script>

<div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl md:col-span-2">
  <h2 class="text-2xl font-bold mb-6 text-gray-800 flex items-center">
    <img 
      src="/anya.png" 
      alt="Anya" 
      class="w-9 h-9 mr-3 inline-block select-none" 
      draggable="false"
    /> Anime Watchlist
  </h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each animeWatchlist as item}
      <div class="group p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg hover:shadow-md transition-all duration-300">
        <div class="flex flex-col">
          <div class="flex items-center justify-between mb-2">
            <span class="text-gray-700 flex items-center flex-1">
              <span class="text-yellow-500 mr-2 group-hover:rotate-12 transition-transform duration-300">
                {item.status === 'Watching' ? '🎬' : '📺'}
              </span>
              <span class="group-hover:text-yellow-600 transition-colors duration-300 font-medium">
                {item.title}
              </span>
            </span>
            <span class={`text-sm px-2 py-1 rounded-full ${
              item.status === 'Watching'
                ? 'bg-yellow-200 text-yellow-700'
                : 'bg-gray-100 text-gray-600'
            }`}>
              {item.status}
            </span>
          </div>
          {#if item.recommendedBy}
            <p class="text-sm text-gray-500 ml-8">
              <span class="mr-1">👤</span>
              Recommended by {item.recommendedBy}
            </p>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>
