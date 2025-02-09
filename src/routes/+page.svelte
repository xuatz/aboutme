<script>
  import '../app.css';
  import Header from '../lib/components/Header.svelte';
  import RepoList from '../lib/components/RepoList.svelte';
  import Wishlist from '../lib/components/Wishlist.svelte';
  import AnimeWatchlist from '../lib/components/AnimeWatchlist.svelte';
  import ProjectList from '../lib/components/ProjectList.svelte';
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="min-h-screen p-8 bg-gradient-to-br from-yellow-200 via-yellow-300 to-amber-200">
  <div class="max-w-4xl mx-auto space-y-10">
    <!-- Header Section -->
    <Header careerDuration={data.career.duration} japanDuration={data.japan.duration} />

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <RepoList repos={data.reposThatImInterestedIn} />
      <Wishlist wishlist={data.shoppingWishlist} />
      <AnimeWatchlist 
        animeWatchlist={data.animeWatchlist}
        animesWatchedInEachSeason={data.animesWatchedInEachSeason}
      />
      <ProjectList />
    </div>
  </div>
</div>
