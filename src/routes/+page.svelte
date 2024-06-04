<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>I've been working as a software developer for {data.lengthOfCareerSoFar} now.</p>
<p>
	Some of the git repos I'm quite curious/interested about are:
	<li>
		{#each data.reposThatImInterestedIn as repo}
			<ul>{repo}</ul>
		{/each}
	</li>
</p>