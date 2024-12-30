<script>
  export let careerDuration;
  export let japanDuration;
</script>

<div class="text-center space-y-4 mb-16">
    <h1 class="text-4xl font-extrabold text-gray-900">
    About Me
  </h1>
  <div class="flex flex-col sm:flex-row justify-center gap-4 mt-6">
    <div class="px-6 py-3 bg-white rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
      <p class="text-lg text-gray-700">
        🚀 Software Developer for <span class="font-semibold text-yellow-600">{careerDuration}</span>
      </p>
    </div>
    <div class="px-6 py-3 bg-white rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
      <p class="text-lg text-gray-700">
        🗾 In Japan for <span class="font-semibold text-yellow-600">{japanDuration}</span>
      </p>
    </div>
  </div>
</div>
