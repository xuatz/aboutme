import { formatDistanceToNow } from "date-fns";
import type { AnimeItem, Season } from "$lib/types/anime";

export function load() {
  const reposThatImInterestedIn = [
    "https://github.com/payloadcms/payload",
    "https://github.com/pocketbase/pocketbase",
    "https://github.com/nhost/nhost",
    "https://github.com/better-auth/better-auth",
    "https://github.com/supertokens/supertokens-core",
    "https://github.com/chroxify/feedbase",
  ];

  const shoppingWishlist = [
    { title: "Portable Dual Monitor", url: "https://www.intehill.com/products/duotrek-lr13upre-order" },
    { title: "Samsung Galaxy Z Fold 6", strikethrough: true },
    { 
      title: "SSD NAS",
      strikethrough: true,
      url: "https://www.kickstarter.com/projects/lincplus/redefining-nas-style-power-and-usability-with-lincplus",
      comments: `Pledged for LincStation N2 on kickstarter`,
    },
    {
      title: "Corne Keyboard",
      strikethrough: true,
      comments:
        "I did buy a split keyboard, but I went with Glove80 instead lol",
    },
    {
      title: "New backpack",
      strikethrough: true,
      comments: `I... accidentally bought the hemp backpack from 8000kicks on kickstarter. I honestly don't even remember pledging for it... I hope I end up liking the bag tho. It wasn't exactly cheap lol.`,
    },
    {
      title: "New checked luggage",
      strikethrough: true,
      comments: `Bought a gimmicky one for the NY Apollo Conference trip.`,
    },
    { title: "Insta360" },
    { title: "Masonry Heater" },
    { title: "Tile, or Airtags lol" }
  ];

  const animeWatchlist: AnimeItem[] = [
    {
      title: "Shin Sekai Yori",
      recommendedBy: "Steven",
      status: "Done",
      addedOn: "2024-12-31",
      rating: "7/10",
      review: "Placeholder review - to be updated",
    },
    {
      title: "86",
      recommendedBy: "XL",
      status: "Backlog",
      addedOn: "2024-12-31",
    },
    {
      title: "Cyberpunk: Edgerunners",
      status: "Backlog",
      addedOn: "2024-12-31",
    },
    {
      title: "Odd Taxi",
      status: "Backlog",
      addedOn: "2024-12-31",
    },
    {
      title: "Orb",
      status: "Backlog",
      addedOn: "2025-04-01",
    },
    {
      title: "Bartender: Kami no Glass",
      recommendedBy: "XL",
      status: "Backlog",
      addedOn: "2025-04-01",
    },
  ];

  const animesWatchedInEachSeason: Season[] = [
    {
      name: "Winter 2025",
      startDate: "2025-01-01",
      shows: [
        "Grisaia: Phantom Trigger",
        "Akuyaku Reijou Tensei Ojisan",
        "Danmachi S5",
        "Re:Zero S3",
        "Guild no Uketsukejou desu ga, Zangyou wa Iya nanode Boss wo Solo Toubatsu Shiyou to Omoimasu"
      ],
    },
  ];

  const firstDayOfWork = new Date(2014, 2, 1);
  const firstDayOfArrivalInJapan = new Date(2017, 11, 14);

  return {
    career: {
      duration: formatDistanceToNow(firstDayOfWork),
    },
    japan: {
      arrival: firstDayOfArrivalInJapan,
      duration: formatDistanceToNow(firstDayOfArrivalInJapan),
    },
    reposThatImInterestedIn,
    shoppingWishlist,
    animeWatchlist,
    animesWatchedInEachSeason,
  };
}
