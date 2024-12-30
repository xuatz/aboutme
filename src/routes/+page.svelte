<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<p>I've been working as a software developer for {data.career.duration} now.</p>
<p>In Japan for {data.japan.duration}!</p>
<div>
  Some of the git repos I'm quite curious/interested about are:
  <ul>
    {#each data.reposThatImInterestedIn as repo}
      <li>{repo}</li>
    {/each}
  </ul>
</div>
<div>
  My wishlist ^^
  <ul>
    {#each data.wishlist as item}
      <li>{item}</li>
    {/each}
  </ul>
</div>
