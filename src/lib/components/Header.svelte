<script>
  export let careerDuration;
  export let japanDuration;
</script>

<div class="mb-16 space-y-4 text-center">
  <h1 class="text-4xl font-extrabold text-primary-dark dark:text-secondary-dark">About Me</h1>
  <div class="flex flex-col justify-center gap-4 mt-6 sm:flex-row">
    <div
      class="px-6 py-3 transition-transform duration-300 transform bg-white shadow-lg rounded-xl hover:-translate-y-1 dark:bg-gray-800"
    >
      <p class="text-lg text-gray-700 dark:text-secondary-dark/70">
        🚀 Software Developer for <span class="font-semibold text-yellow-600 dark:text-yellow-400"
          >{careerDuration}</span
        >
      </p>
    </div>
    <div
      class="px-6 py-3 transition-transform duration-300 transform bg-white shadow-lg rounded-xl hover:-translate-y-1 dark:bg-gray-800"
    >
      <p class="text-lg text-gray-700 dark:text-secondary-dark/70">
        🗾 In Japan for <span class="font-semibold text-yellow-600 dark:text-yellow-400"
          >{japanDuration}</span
        >
      </p>
    </div>
  </div>
</div>
