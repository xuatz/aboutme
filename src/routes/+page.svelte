<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>I've been working as a software developer for {data.lengthOfCareerSoFar} now.</p>
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