<script lang="ts">
  import type { AnimeItem, Season } from '$lib/types/anime';
  import { getStatusIcon, getStatusStyle, getTobiasHarrisOverButler } from '$lib/types/anime';

  export let animeWatchlist: AnimeItem[];
  export let animesWatchedInEachSeason: Season[];
</script>

<div
  class="p-8 transition-all duration-300 transform shadow-xl bg-white/90 dark:bg-gray-800 backdrop-blur-sm rounded-2xl hover:shadow-2xl md:col-span-2"
>
  <h2 class="flex items-center mb-6 text-2xl font-bold text-gray-800 dark:text-secondary-dark">
    <img
      src="/anya.png"
      alt="Anya"
      class="inline-block mr-3 select-none w-9 h-9"
      draggable="false"
    /> Anime Watchlist
  </h2>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    {#each animeWatchlist as item}
      <div
        class="p-4 transition-all duration-300 rounded-lg group bg-gradient-to-r from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-gray-700/50"
      >
        <div class="flex flex-col">
          <div class="flex items-center justify-between mb-2">
            <span class="flex items-center flex-1 text-gray-700 dark:text-secondary-dark/70">
              <span
                class="mr-2 text-yellow-500 transition-transform duration-300 group-hover:rotate-12"
              >
                {getStatusIcon(item.status)}
              </span>
              <span
                class="font-medium transition-colors duration-300 group-hover:text-yellow-600 dark:group-hover:text-yellow-400"
              >
                {item.title}
              </span>
            </span>
            <div class="flex items-center gap-2">
              {#if item.status === 'Backlog'}
                {@const tobiasSeasons = getTobiasHarrisOverButler(item, animesWatchedInEachSeason)}
                {#if tobiasSeasons.length > 0}
                  <div class="relative group/tooltip">
                    <span
                      class="px-2 py-1 text-sm text-red-600 bg-red-100 rounded-full dark:bg-red-900 dark:text-red-300 cursor-help"
                    >
                      +{tobiasSeasons.length}
                    </span>
                    <div
                      class="absolute right-0 z-10 hidden w-64 p-2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-700 dark:border-gray-600 group-hover/tooltip:block"
                    >
                      <p class="mb-1 text-sm font-medium text-gray-700 dark:text-secondary-dark">
                        Animes watched instead:
                      </p>
                      {#each tobiasSeasons as season}
                        <div class="mb-1 text-sm text-gray-600 dark:text-secondary-dark/70">
                          <span class="font-medium">{season.name}:</span>
                          {season.watchedInstead}
                        </div>
                      {/each}
                    </div>
                  </div>
                {/if}
              {/if}
              <span class={`text-sm px-2 py-1 rounded-full ${getStatusStyle(item.status)}`}>
                {item.status}
              </span>
            </div>
          </div>
          {#if item.recommendedBy}
            <p class="ml-8 text-sm text-gray-500 dark:text-secondary-dark/50">
              <span class="mr-1">👤</span>
              Recommended by {item.recommendedBy}
            </p>
          {/if}
          {#if item.status === 'Done'}
            <div class="mt-2 ml-8">
              <p class="text-sm text-gray-700 dark:text-secondary-dark/70">
                <span class="font-medium">Rating:</span>
                {item.rating}
              </p>
              <p class="mt-1 text-sm text-gray-600 dark:text-secondary-dark/70">
                {item.review}
              </p>
            </div>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>
