export type GameStatus =
  'Playing' | 'Completed' | 'Backlog' | 'Dropped' | 'On Hold' | 'Right Before the Last Boss';

export type GamePlatform = 'PC' | 'PS5' | 'PS4' | 'Switch' | 'Steam Deck' | 'Xbox' | 'Mobile';

export interface GameItem {
  title: string;
  platform: GamePlatform[];
  status: GameStatus;
  url?: string;
  genre?: string;
  hours?: number;
  rating?: number;
  review?: string;
  priority?: 'High' | 'Medium' | 'Low';
}

export function getGameStatusIcon(status: GameStatus): string {
  const icons: Record<GameStatus, string> = {
    Playing: '🎮',
    Completed: '✅',
    Backlog: '📦',
    Dropped: '❌',
    'On Hold': '⏸️',
    'Right Before the Last Boss': '🔥'
  };
  return icons[status];
}

export function getGameStatusStyle(status: GameStatus): string {
  const styles: Record<GameStatus, string> = {
    Playing: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    Completed: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    Backlog: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
    Dropped: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
    'On Hold': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    'Right Before the Last Boss':
      'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
  };
  return styles[status];
}

export function getPriorityStyle(priority?: 'High' | 'Medium' | 'Low'): string {
  if (!priority) return '';
  const styles = {
    High: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
    Medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    Low: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
  };
  return styles[priority];
}
