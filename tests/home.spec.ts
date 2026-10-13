import { test, expect } from '@playwright/test';
test('desktop homepage loads local imagery and expertise interaction', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Behind Every Great Kitchen Is Great Design.');
  await expect(page.locator('main section')).toHaveCount(6);
  await page.locator('#projects').scrollIntoViewIfNeeded();
  await expect(page.locator('.project')).toHaveCount(3);
  await expect.poll(() => page.locator('img').evaluateAll(images => images.every(image => image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0))).toBe(true);
  await page.locator('#expertise').scrollIntoViewIfNeeded();
  await page.getByText('Commercial Kitchen Planning', { exact: true }).click();
  await expect(page.getByText('From the first brief', { exact: false })).toBeVisible();
  expect(errors).toEqual([]);
});
test('mobile menu, anchors, keyboard access and layout', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByText('Skip to content', { exact: true })).toBeFocused();
  await page.getByRole('button', { name: 'Open navigation' }).click();
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
  await page.getByRole('navigation', { name: 'Mobile navigation' }).getByText('Expertise').click();
  await expect(page).toHaveURL(/#expertise$/);
  await expect(page.getByRole('button', { name: 'Open navigation' })).toHaveAttribute('aria-expanded', 'false');
  for (const id of ['studio', 'philosophy', 'expertise', 'projects', 'process', 'contact']) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  }
});
test('reduced motion keeps content visible without animated transforms', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('h1')).toHaveCSS('opacity', '1');
  await expect(page.locator('.hero-image')).toHaveCSS('transform', 'none');
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto');
});
