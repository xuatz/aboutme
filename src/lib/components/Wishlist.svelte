<script>
  export let wishlist;
</script>

<div class="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-[1.02] transition-transform duration-300">
  <h2 class="text-2xl font-bold mb-4 text-gray-800 flex items-center">
    <span class="text-2xl mr-2">✨</span> My Wishlist
  </h2>
  <div class="grid grid-cols-1 gap-4">
    {#each wishlist as item}
      <div class="group p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg hover:shadow-md transition-all duration-300">
        <div class="flex flex-col">
          <span class="text-gray-700 flex items-center mb-2">
            <span class="text-yellow-500 mr-2 group-hover:rotate-12 transition-transform duration-300">
              {item.strikethrough ? '✅' : '🎁'}
            </span>
            <span class={item.strikethrough ? 'line-through text-gray-400' : 'group-hover:text-yellow-600 transition-colors duration-300'}>
              {item.title}
            </span>
          </span>
          {#if item.comments}
            <p class="text-sm text-gray-500 ml-8 italic">{item.comments}</p>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>
