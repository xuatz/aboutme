<script lang="ts">
  import { page } from '$app/stores';
</script>

<nav class="bg-white shadow-lg">
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex">
        <div class="flex items-center flex-shrink-0">
          <a href="/" class="text-xl font-bold text-gray-800 hover:text-gray-600">
            xuatz
          </a>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
          <a
            href="/"
            class="inline-flex items-center px-1 pt-1 {$page.url.pathname === '/'
              ? 'border-b-2 border-yellow-500 text-gray-900'
              : 'text-gray-500 hover:border-b-2 hover:border-gray-300 hover:text-gray-700'}"
          >
            About
          </a>
          <a
            href="/blog"
            class="inline-flex items-center px-1 pt-1 {$page.url.pathname.startsWith('/blog')
              ? 'border-b-2 border-yellow-500 text-gray-900'
              : 'text-gray-500 hover:border-b-2 hover:border-gray-300 hover:text-gray-700'}"
          >
            Vibe Blog
          </a>
        </div>
      </div>
      
      <!-- Mobile menu button -->
      <div class="flex items-center sm:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <!-- Icon when menu is closed -->
          <svg
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu -->
  <div class="sm:hidden" id="mobile-menu">
    <div class="pt-2 pb-3 space-y-1">
      <a
        href="/"
        class="block pl-3 pr-4 py-2 {$page.url.pathname === '/'
          ? 'bg-yellow-50 border-l-4 border-yellow-500 text-yellow-700'
          : 'border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'}"
      >
        About
      </a>
      <a
        href="/blog"
        class="block pl-3 pr-4 py-2 {$page.url.pathname.startsWith('/blog')
          ? 'bg-yellow-50 border-l-4 border-yellow-500 text-yellow-700'
          : 'border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'}"
      >
        Vibe Blog
      </a>
    </div>
  </div>
</nav>
