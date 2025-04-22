<script lang="ts">
  import { page } from '$app/stores';
</script>

<nav class="bg-white shadow-lg dark:bg-gray-800">
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex">
        <div class="flex items-center flex-shrink-0">
          <a href="/" class="text-xl font-bold text-secondary-light hover:text-secondary-light/80 dark:text-secondary-dark dark:hover:text-secondary-dark/80">
            xuatz
          </a>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
          <a
            href="/"
            class="inline-flex items-center px-1 pt-1 {$page.url.pathname === '/'
              ? 'border-b-2 border-primary-light text-secondary-light dark:border-primary-dark dark:text-secondary-dark'
              : 'text-secondary-light/70 hover:border-b-2 hover:border-primary-light/50 hover:text-secondary-light dark:text-secondary-dark/70 dark:hover:border-primary-dark/50 dark:hover:text-secondary-dark'}"
          >
            About
          </a>
          <a
            href="/blog"
            class="inline-flex items-center px-1 pt-1 {$page.url.pathname.startsWith('/blog')
              ? 'border-b-2 border-primary-light text-secondary-light dark:border-primary-dark dark:text-secondary-dark'
              : 'text-secondary-light/70 hover:border-b-2 hover:border-primary-light/50 hover:text-secondary-light dark:text-secondary-dark/70 dark:hover:border-primary-dark/50 dark:hover:text-secondary-dark'}"
          >
            Blog
          </a>
        </div>
      </div>
      
      <!-- Mobile menu button -->
      <div class="flex items-center sm:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md text-secondary-light/50 hover:text-secondary-light hover:bg-primary-light/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-light dark:text-secondary-dark/50 dark:hover:text-secondary-dark dark:hover:bg-primary-dark/10 dark:focus:ring-primary-dark"
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
          ? 'bg-primary-light/10 border-l-4 border-primary-light text-secondary-light dark:bg-primary-dark/10 dark:border-primary-dark dark:text-secondary-dark'
          : 'border-l-4 border-transparent text-secondary-light/70 hover:bg-primary-light/5 hover:border-primary-light/50 hover:text-secondary-light dark:text-secondary-dark/70 dark:hover:bg-primary-dark/5 dark:hover:border-primary-dark/50 dark:hover:text-secondary-dark'}"
      >
        About
      </a>
      <a
        href="/blog"
        class="block pl-3 pr-4 py-2 {$page.url.pathname.startsWith('/blog')
          ? 'bg-primary-light/10 border-l-4 border-primary-light text-secondary-light dark:bg-primary-dark/10 dark:border-primary-dark dark:text-secondary-dark'
          : 'border-l-4 border-transparent text-secondary-light/70 hover:bg-primary-light/5 hover:border-primary-light/50 hover:text-secondary-light dark:text-secondary-dark/70 dark:hover:bg-primary-dark/5 dark:hover:border-primary-dark/50 dark:hover:text-secondary-dark'}"
      >
        Blog
      </a>
    </div>
  </div>
</nav>
