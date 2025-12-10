<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
</script>

<div
  class="min-h-screen p-8 bg-gradient-to-br from-primary-light via-primary-light to-amber-200 dark:from-primary-dark dark:via-primary-dark dark:to-gray-900"
>
  <div class="max-w-4xl mx-auto">
    <div class="mb-12 text-center">
      <h1 class="text-4xl font-extrabold text-secondary-light dark:text-secondary-dark">
        Vibe Blog
      </h1>
      <p class="mt-4 text-xl text-secondary-light/70 dark:text-secondary-dark/70">
        Thoughts, musings, and random discoveries
      </p>
    </div>

    <div class="grid gap-8">
      {#if data.posts.length === 0}
        <div
          class="p-6 transition-transform duration-300 transform bg-white shadow-lg dark:bg-gray-800 rounded-xl hover:-translate-y-1"
        >
          <p class="mb-2 text-sm text-secondary-light/50 dark:text-secondary-dark/50">
            Coming Soon
          </p>
          <h2 class="mb-4 text-2xl font-bold text-secondary-light dark:text-secondary-dark">
            Stay tuned for upcoming posts!
          </h2>
          <p class="text-secondary-light/70 dark:text-secondary-dark/70">
            This space will soon be filled with interesting thoughts, tech discoveries, and various
            other topics that catch my attention.
          </p>
        </div>
      {:else}
        {#each data.posts as post}
          <a
            href="/blog/{post.slug}"
            class="block p-6 transition-transform duration-300 transform bg-white shadow-lg dark:bg-gray-800 rounded-xl hover:-translate-y-1"
          >
            <p class="mb-2 text-sm text-secondary-light/50 dark:text-secondary-dark/50">
              {formatDate(post.date)}
            </p>
            <h2 class="mb-4 text-2xl font-bold text-secondary-light dark:text-secondary-dark">
              {post.title}
            </h2>
          </a>
        {/each}
      {/if}
    </div>
  </div>
</div>
