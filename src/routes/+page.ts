import { formatDistanceToNow } from 'date-fns';
import type { AnimeItem, Season } from '$lib/types/anime';
import type { GameItem } from '$lib/types/games';
import type { ShowBacklogItem } from '$lib/types/shows';

export function load() {
  const reposThatImInterestedIn = [
    'https://github.com/payloadcms/payload',
    'https://github.com/pocketbase/pocketbase',
    'https://github.com/nhost/nhost',
    'https://github.com/better-auth/better-auth',
    'https://github.com/supertokens/supertokens-core',
    'https://github.com/chroxify/feedbase'
  ];

  const shoppingWishlist = [
    { title: 'Samsung Galaxy Z Fold 7', strikethrough: true },
    {
      title: 'Dyson PencilVac Fluffycones',
      url: 'https://www.dyson.co.jp/vacuum-cleaners/powerbroom/pencilvac/fluffycones'
    },
    { title: 'Portable SIM Router' },
    { title: 'Sony WH-1000XM6', url: 'https://www.sony.jp/headphone/products/WH-1000XM6/' },
    { title: 'Insta360' },
    { title: 'Tile, or Airtags lol' },
    { title: 'Masonry Heater' },
    {
      title: 'Portable Dual Monitor',
      url: 'https://www.intehill.com/products/duotrek-lr13upre-order'
    },
    { title: 'Samsung Galaxy Z Fold 6', strikethrough: true },
    {
      title: 'SSD NAS',
      strikethrough: true,
      url: 'https://www.kickstarter.com/projects/lincplus/redefining-nas-style-power-and-usability-with-lincplus',
      comments: `Pledged for LincStation N2 on kickstarter`
    },
    {
      title: 'Corne Keyboard',
      strikethrough: true,
      comments: 'I did buy a split keyboard, but I went with Glove80 instead lol'
    },
    {
      title: 'New backpack',
      strikethrough: true,
      comments: `I... accidentally bought the hemp backpack from 8000kicks on kickstarter. I honestly don't even remember pledging for it... I hope I end up liking the bag tho. It wasn't exactly cheap lol.`
    },
    {
      title: 'New checked luggage',
      strikethrough: true,
      comments: `Bought a gimmicky one for the NY Apollo Conference trip.`
    }
  ];

  const animeWatchlist: AnimeItem[] = [
    {
      title: 'Shin Sekai Yori',
      recommendedBy: 'Steven',
      status: 'Done',
      addedOn: '2024-12-31',
      rating: '7/10',
      review: 'Placeholder review - to be updated'
    },
    {
      title: '86',
      recommendedBy: 'XL',
      status: 'Backlog',
      addedOn: '2024-12-31'
    },
    {
      title: 'Cyberpunk: Edgerunners',
      status: 'Backlog',
      addedOn: '2024-12-31'
    },
    {
      title: 'Odd Taxi',
      status: 'Backlog',
      addedOn: '2024-12-31'
    },
    {
      title: 'Orb',
      status: 'Backlog',
      addedOn: '2025-04-01'
    },
    {
      title: 'Bartender: Kami no Glass',
      recommendedBy: 'XL',
      status: 'Backlog',
      addedOn: '2025-04-01'
    }
  ];

  const animesWatchedInEachSeason: Season[] = [
    {
      name: 'Winter 2025',
      startDate: '2025-01-01',
      shows: [
        'Grisaia: Phantom Trigger',
        'Akuyaku Reijou Tensei Ojisan',
        'Danmachi S5',
        'Re:Zero S3',
        'Dr. Stone S4 (Cour 1)',
        'Guild no Uketsukejou desu ga, Zangyou wa Iya nanode Boss wo Solo Toubatsu Shiyou to Omoimasu'
      ]
    },
    {
      name: 'Spring 2025',
      startDate: '2025-04-01',
      shows: ['To Be Hero X', 'Working!! (Rewatch)']
    },
    {
      name: 'Summer 2025',
      startDate: '2025-07-01',
      shows: [
        'Dan Da Dan S2',
        'Seishun Buta Yarou wa Bunny Girl Senpai no Yume o Minai S2',
        'Tsuihousha Shokudou e Youkoso!',
        'Futari Solo Camp',
        'Dr. Stone S4 (Cour 2)'
      ]
    },
    {
      name: 'Fall 2025',
      startDate: '2025-10-01',
      shows: ['Spy x Family S3']
    },
    {
      name: 'Winter 2026',
      startDate: '2026-01-01',
      shows: ['Fate/strange Fake', 'Sousou no Frieren S2']
    },
    {
      name: 'Spring 2026',
      startDate: '2026-04-01',
      shows: [
        'Re:Zero kara Hajimeru Isekai Seikatsu S4 (Cour 1)',
        'Tensei Shitara Slime Datta Ken S4',
        'Dr. Stone S4 (Cour 3)',
        'Tongari Boushi no Atelier'
      ]
    },
    {
      name: 'Summer 2026',
      startDate: '2026-07-01',
      shows: [
        'Re:Zero kara Hajimeru Isekai Seikatsu S4 (Cour 2)',
        'Super no Ura de Yani Suu Futari',
        'Mushoku Tensei S3',
        'Buchigire Reijou wa Houfuku o Chikaimashita. Madousho no Chikara de Sokoku o Tatakitsubushimasu'
      ]
    }
  ];

  const showBacklog: ShowBacklogItem[] = [
    {
      title: 'Fallout',
      format: 'Live-action TV series'
    }
  ];

  const gameBacklog: GameItem[] = [
    {
      title: 'Metaphor: ReFantazio',
      platform: ['PC', 'PS5'],
      status: 'Right Before the Last Boss',
      genre: 'JRPG'
    },
    {
      title: 'Persona 5 Royal',
      platform: ['PC', 'PS5', 'Switch'],
      status: 'Right Before the Last Boss',
      genre: 'JRPG'
    },
    {
      title: 'Atelier Yumia: The Alchemist of Memories & the Envisioned Land',
      platform: ['PC'],
      status: 'Backlog',
      genre: 'JRPG',
      url: 'https://store.steampowered.com/app/3123410/Atelier_Yumia_The_Alchemist_of_Memories__the_Envisioned_Land/'
    },
    {
      title: 'Clair Obscur: Expedition 33',
      platform: ['PC'],
      status: 'Backlog',
      genre: 'Turn-based RPG',
      url: 'https://store.steampowered.com/app/1903340/Clair_Obscur_Expedition_33/'
    },
    {
      title: 'Stellar Blade',
      platform: ['PC', 'PS5'],
      status: 'Backlog',
      genre: 'Action RPG',
      url: 'https://store.steampowered.com/app/3489700/Stellar_Blade/'
    },
    {
      title: 'Fate/EXTRA Record',
      platform: ['PC', 'PS5', 'Switch'],
      status: 'Backlog',
      genre: 'JRPG'
    },
    {
      title: 'The Hundred Line -Last Defense Academy-',
      platform: ['PC'],
      status: 'Backlog',
      genre: 'Adventure',
      url: 'https://store.steampowered.com/app/3014080/The_Hundred_Line_Last_Defense_Academy/'
    },
    {
      title: 'Trails in the Sky 1st Chapter',
      platform: ['PC'],
      status: 'Backlog',
      genre: 'JRPG',
      url: 'https://store.steampowered.com/app/3375780/Trails_in_the_Sky_1st_Chapter/'
    },
    {
      title: 'No Sleep For Kaname Date - From AI: THE SOMNIUM FILES',
      platform: ['PC'],
      status: 'Backlog',
      genre: 'Adventure',
      url: 'https://store.steampowered.com/app/2752180/No_Sleep_For_Kaname_Date__From_AI_THE_SOMNIUM_FILES/'
    },
    {
      title: 'Trails Through Daybreak 2',
      platform: ['PC', 'PS5'],
      status: 'Completed',
      genre: 'JRPG'
    }
  ];

  const firstDayOfWork = new Date(2014, 2, 1);
  const firstDayOfArrivalInJapan = new Date(2017, 11, 14);

  return {
    career: {
      duration: formatDistanceToNow(firstDayOfWork)
    },
    japan: {
      arrival: firstDayOfArrivalInJapan,
      duration: formatDistanceToNow(firstDayOfArrivalInJapan)
    },
    reposThatImInterestedIn,
    shoppingWishlist,
    animeWatchlist,
    animesWatchedInEachSeason,
    showBacklog,
    gameBacklog
  };
}
