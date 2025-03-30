import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.err.ee/');
});

test('find-article-by-partial-title', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Otsingufraas' }).click();
    await page.getByRole('textbox', { name: 'Otsingufraas' }).fill('tehisaru ennustab ilma');
    await page.getByRole('button', { name: 'Otsi' }).click();
    await page.getByRole('link', { name: 'Tehisaru ennustab ilma' }).click();
    await expect(page.locator('#main')).toContainText('Raadio- ja teleuudiste lõpus kuuleme ikka ilmateadet, see on auväärne traditsioon.');
});

test('find-article-by-sentence-from-article', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Otsingufraas' }).click();
    await page.getByRole('textbox', { name: 'Otsingufraas' }).fill('Raadio- ja teleuudiste lõpus kuuleme ikka ilmateadet, see on auväärne traditsioon.');
    await page.getByRole('button', { name: 'Otsi' }).click();
    await page.getByRole('link', { name: 'Tehisaru ennustab ilma' }).click();
    await expect(page.locator('#main')).toContainText('Tehisaru ennustab ilma kiiremini kui superarvuti');
  });