<script lang="ts">
  import type { GameItem } from '$lib/types/games';
  import { getGameStatusIcon, getGameStatusStyle } from '$lib/types/games';

  export let gameBacklog: GameItem[];

  // Separate games by status
  $: rightBeforeLastBossGames = gameBacklog.filter(
    (game) => game.status === 'Right Before the Last Boss'
  );
  $: playingGames = gameBacklog.filter((game) => game.status === 'Playing');
  $: backlogGames = gameBacklog.filter((game) => game.status === 'Backlog');
  $: completedGames = gameBacklog.filter((game) => game.status === 'Completed');

  // Shuffle backlog games and combine with playing games (playing games first)
  $: shuffledBacklogGames = [...backlogGames].sort(() => Math.random() - 0.5);
  $: allFeaturedCandidates = [...playingGames, ...shuffledBacklogGames];

  // Take first 3 games for featured cards (playing games first, then random backlog)
  $: featuredGames = allFeaturedCandidates.slice(0, 3);
  $: remainingGames = allFeaturedCandidates.slice(3);
</script>

<div
  class="p-8 transition-all duration-300 transform shadow-xl bg-white/90 dark:bg-gray-800 backdrop-blur-sm rounded-2xl hover:shadow-2xl md:col-span-2"
>
  <h2 class="flex items-center mb-6 text-2xl font-bold text-gray-800 dark:text-secondary-dark">
    <span class="mr-2 text-2xl">🎮</span> Games
  </h2>

  <div class="flex gap-6">
    <!-- Left side: 3 featured game cards (70%) -->
    <div class="flex-[7] space-y-4">
      {#each featuredGames as game}
        <div
          class="p-4 transition-all duration-300 rounded-lg bg-gradient-to-r from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-gray-700/50"
        >
          <div class="flex flex-col">
            <div class="flex items-center justify-between mb-2">
              <span class="flex items-center flex-1 text-gray-700 dark:text-secondary-dark/70">
                <span
                  class="mr-2 text-yellow-500 transition-transform duration-300 hover:rotate-12"
                >
                  {getGameStatusIcon(game.status)}
                </span>
                {#if game.url}
                  <a
                    href={game.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-medium transition-colors duration-300 hover:text-yellow-600 dark:hover:text-yellow-400 underline decoration-dotted underline-offset-2"
                  >
                    {game.title}
                  </a>
                {:else}
                  <span
                    class="font-medium transition-colors duration-300 hover:text-yellow-600 dark:hover:text-yellow-400"
                  >
                    {game.title}
                  </span>
                {/if}
              </span>
              <span class={`text-sm px-2 py-1 rounded-full ${getGameStatusStyle(game.status)}`}>
                {game.status}
              </span>
            </div>
            <div class="ml-8 space-y-1">
              {#if game.platform && game.platform.length > 0}
                <p class="text-sm text-gray-500 dark:text-secondary-dark/50">
                  <span class="mr-1">🖥️</span>
                  {game.platform.join(', ')}
                </p>
              {/if}
              {#if game.genre}
                <p class="text-sm text-gray-500 dark:text-secondary-dark/50">
                  <span class="mr-1">🏷️</span>
                  {game.genre}
                </p>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Right side: Two containers stacked (30%) -->
    <div class="flex-[3] flex flex-col gap-4">
      <!-- Top right: Right Before the Last Boss games -->
      {#if rightBeforeLastBossGames.length > 0}
        <div
          class="rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800"
        >
          <div class="p-4 pb-2">
            <h3
              class="text-sm font-semibold text-orange-700 dark:text-orange-400 flex items-center"
            >
              <span class="mr-1">⚖️</span>
              Eternal Purgatory
            </h3>
          </div>
          <div class="px-4 pb-4 max-h-[160px] overflow-y-auto">
            <div class="space-y-2">
              {#each rightBeforeLastBossGames as game}
                <div class="flex items-center text-sm">
                  <span class="mr-2 text-xs">
                    {getGameStatusIcon(game.status)}
                  </span>
                  {#if game.url}
                    <a
                      href={game.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-orange-700 dark:text-orange-300 hover:text-orange-900 dark:hover:text-orange-100 transition-colors truncate"
                    >
                      {game.title}
                    </a>
                  {:else}
                    <span class="text-orange-700 dark:text-orange-300 truncate">
                      {game.title}
                    </span>
                  {/if}
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/if}

      <!-- Bottom right: More Games -->
      {#if remainingGames.length > 0}
        <div class="rounded-lg bg-gray-50 dark:bg-gray-700">
          <div class="p-4 pb-2">
            <h3 class="text-sm font-semibold text-gray-600 dark:text-gray-400">More Games</h3>
          </div>
          <div class="px-4 pb-4 max-h-[160px] overflow-y-auto">
            <div class="space-y-2">
              {#each remainingGames as game}
                <div class="flex items-center text-sm">
                  <span class="mr-2 text-xs">
                    {getGameStatusIcon(game.status)}
                  </span>
                  {#if game.url}
                    <a
                      href={game.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors truncate"
                    >
                      {game.title}
                    </a>
                  {:else}
                    <span class="text-gray-700 dark:text-gray-300 truncate">
                      {game.title}
                    </span>
                  {/if}
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/if}

      <!-- Bottom: Completed Games -->
      {#if completedGames.length > 0}
        <div
          class="rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
        >
          <div class="p-4 pb-2">
            <h3 class="text-sm font-semibold text-blue-700 dark:text-blue-400 flex items-center">
              <span class="mr-1">🏆</span>
              Completed
            </h3>
          </div>
          <div class="px-4 pb-4 max-h-[160px] overflow-y-auto">
            <div class="space-y-2">
              {#each completedGames as game}
                <div class="flex items-center text-sm">
                  <span class="mr-2 text-xs">
                    {getGameStatusIcon(game.status)}
                  </span>
                  {#if game.url}
                    <a
                      href={game.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 transition-colors truncate"
                    >
                      {game.title}
                    </a>
                  {:else}
                    <span class="text-blue-700 dark:text-blue-300 truncate">
                      {game.title}
                    </span>
                  {/if}
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
