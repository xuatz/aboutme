<script lang="ts">
  import AnimeWatchlist from './AnimeWatchlist.svelte';
  import ShowBacklog from './ShowBacklog.svelte';
  import type { AnimeItem, Season } from '$lib/types/anime';
  import type { ShowBacklogItem } from '$lib/types/shows';

  export let animeWatchlist: AnimeItem[];
  export let animesWatchedInEachSeason: Season[];
  export let showBacklog: ShowBacklogItem[];

  const tabs = [
    { id: 'anime', label: 'Anime' },
    { id: 'tv', label: 'TV Shows' }
  ] as const;
  let activeTab: (typeof tabs)[number]['id'] = 'anime';

  function handleKeydown(event: KeyboardEvent, index: number) {
    let nextIndex: number;
    switch (event.key) {
      case 'ArrowRight':
        nextIndex = (index + 1) % tabs.length;
        break;
      case 'ArrowLeft':
        nextIndex = (index - 1 + tabs.length) % tabs.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    activeTab = tabs[nextIndex].id;
    document.getElementById(`watchlist-tab-${activeTab}`)?.focus();
  }
</script>

<section
  aria-labelledby="watchlist-heading"
  class="p-8 transition-all duration-300 transform shadow-xl bg-white/90 dark:bg-gray-800 backdrop-blur-sm rounded-2xl hover:shadow-2xl md:col-span-2"
>
  <h2
    id="watchlist-heading"
    class="flex items-center mb-6 text-2xl font-bold text-gray-800 dark:text-secondary-dark"
  >
    <span class="mr-3" aria-hidden="true">📺</span> Watchlist
  </h2>
  <div role="tablist" aria-label="Watchlist category" class="flex gap-2 mb-6">
    {#each tabs as tab, index}
      <button
        type="button"
        role="tab"
        id={`watchlist-tab-${tab.id}`}
        aria-selected={activeTab === tab.id}
        aria-controls={`watchlist-panel-${tab.id}`}
        tabindex={activeTab === tab.id ? 0 : -1}
        class={`px-4 py-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800 ${
          activeTab === tab.id
            ? 'bg-yellow-400 text-gray-900'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
        }`}
        on:click={() => (activeTab = tab.id)}
        on:keydown={(event) => handleKeydown(event, index)}
      >
        {tab.label}
      </button>
    {/each}
  </div>
  {#each tabs as tab}
    <div
      role="tabpanel"
      id={`watchlist-panel-${tab.id}`}
      aria-labelledby={`watchlist-tab-${tab.id}`}
      hidden={activeTab !== tab.id}
      tabindex="0"
      class="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
    >
      {#if tab.id === 'anime'}
        <AnimeWatchlist {animeWatchlist} {animesWatchedInEachSeason} />
      {:else}
        <ShowBacklog {showBacklog} />
      {/if}
    </div>
  {/each}
</section>
