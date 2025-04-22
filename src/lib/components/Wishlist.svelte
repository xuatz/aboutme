<script>
  export let wishlist;
</script>

<div
  class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transform hover:scale-[1.02] transition-transform duration-300"
>
  <h2 class="flex items-center mb-4 text-2xl font-bold text-gray-800 dark:text-secondary-dark">
    <span class="mr-2 text-2xl">✨</span> My Wishlist
  </h2>
  <div class="grid grid-cols-1 gap-4">
    {#each wishlist as item}
      <div
        class="p-4 transition-all duration-300 rounded-lg group bg-gradient-to-r from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-gray-700/50"
      >
        <div class="flex flex-col">
          <span class="flex items-center mb-2 text-gray-700 dark:text-secondary-dark/70">
            <span
              class="mr-2 text-yellow-500 transition-transform duration-300 group-hover:rotate-12"
            >
              {item.strikethrough ? '✅' : '🎁'}
            </span>
            <span
              class={item.strikethrough
                ? 'line-through text-gray-400 dark:text-secondary-dark/50'
                : 'group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300'}
            >
              {item.title}
            </span>
          </span>
          {#if item.comments}
            <p class="ml-8 text-sm italic text-gray-500 dark:text-secondary-dark/50">
              {item.comments}
            </p>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>
