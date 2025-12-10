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
    <a
      href="/blog"
      class="inline-block mb-8 text-secondary-light/70 dark:text-secondary-dark/70 hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
    >
      &larr; Back to blog
    </a>

    <article class="p-8 bg-white shadow-lg dark:bg-gray-800 rounded-xl">
      <header class="mb-8 border-b border-gray-200 dark:border-gray-700 pb-8">
        <h1 class="text-3xl font-extrabold text-secondary-light dark:text-secondary-dark mb-4">
          {data.metadata.title}
        </h1>
        <p class="text-secondary-light/50 dark:text-secondary-dark/50">
          {formatDate(data.metadata.date)}
        </p>
      </header>

      <div class="prose dark:prose-dark">
        <svelte:component this={data.content} />
      </div>
    </article>
  </div>
</div>
