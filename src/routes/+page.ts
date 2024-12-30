import { formatDistanceToNow } from 'date-fns';

export function load() {
  const reposThatImInterestedIn = [
    'https://github.com/payloadcms/payload',
    'https://github.com/pocketbase/pocketbase',
    'https://github.com/nhost/nhost'
  ];

  const shoppingWishlist = [
    { title: 'Samsung Galaxy Z Fold 6', strikethrough: true },
    { title: 'SSD NAS' },
    { title: 'Corne Keyboard', strikethrough: true, comments: 'I did buy a split keyboard, but I went with Glove80 instead lol' },
    { title: 'New backpack', strikethrough: true, comments: `I... accidentally bought the hemp backpack from 8000kicks on kickstarter. I honestly don't even remember pledging for it... I hope I end up liking the bag tho. It wasn't exactly cheap lol.` },
    { title: 'New checked luggage', strikethrough: true, comments: `Bought a gimmicky one for the NY Apollo Conference trip.` },
    { title: 'Insta360' }
  ];

  const animeWatchlist = [
    {
      title: 'Shin Sekai Yori',
      recommendedBy: 'Steven',
      status: 'Watching',
    },
    {
      title: '86',
      recommendedBy: 'XL',
      status: 'Backlog',
    },
    {
      title: 'Cyberpunk: Edgerunners',
      status: 'Backlog',
    }
  ]

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
  };
}
