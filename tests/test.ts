import { expect, test } from '@playwright/test';

test('home page renders and watchlist tabs work', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'About Me', exact: true })).toBeVisible();

  const animeTab = page.getByRole('tab', { name: 'Anime', exact: true });
  const tvTab = page.getByRole('tab', { name: 'TV Shows', exact: true });
  await expect(animeTab).toHaveAttribute('aria-selected', 'true');
  await expect(page.getByRole('tabpanel', { name: 'Anime', exact: true })).toBeVisible();

  await tvTab.click();
  await expect(tvTab).toHaveAttribute('aria-selected', 'true');
  await expect(page.getByRole('tabpanel', { name: 'TV Shows' })).toContainText('Fallout');
  await expect(page.locator('#watchlist-panel-anime')).toBeHidden();

  await tvTab.press('ArrowLeft');
  await expect(animeTab).toBeFocused();
  await expect(animeTab).toHaveAttribute('aria-selected', 'true');
  await expect(page.locator('#watchlist-panel-tv')).toBeHidden();
});
