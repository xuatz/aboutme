export type AnimeStatus = 'Done' | 'Watching' | 'Backlog';

export interface AnimeItem {
  title: string;
  status: AnimeStatus;
  addedOn: string;
  recommendedBy?: string;
  rating?: string;
  review?: string;
}

export interface Season {
  name: string;
  startDate: string;
  shows: string[];
}

export interface SkippedSeason extends Season {
  watchedInstead: string;
}

export function getStatusIcon(status: AnimeStatus): string {
  switch (status) {
    case 'Done':
      return '✅';
    case 'Watching':
      return '🎬';
    default:
      return '📺';
  }
}

export function getStatusStyle(status: AnimeStatus): string {
  switch (status) {
    case 'Done':
      return 'bg-green-200 text-green-700';
    case 'Watching':
      return 'bg-yellow-200 text-yellow-700';
    default:
      return 'bg-gray-100 text-gray-600';
  }
}

export function getTobiasHarrisOverButler(item: AnimeItem, seasons: Season[]): SkippedSeason[] {
  if (item.status !== 'Backlog') return [];

  const itemAddedDate = new Date(item.addedOn);

  return seasons
    .filter((season) => new Date(season.startDate) >= itemAddedDate)
    .map((season) => ({
      ...season,
      watchedInstead: season.shows[Math.floor(Math.random() * season.shows.length)]
    }));
}
