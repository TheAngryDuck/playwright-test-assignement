import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.err.ee/');
});

test('news-submenu-culture-should-show-the-culture-page-when-clicked', async ({ page }) => {
  await page.getByLabel('Uudised', { exact: true }).hover()
  await page.getByRole('list', { name: 'Uudised alammenüü' }).getByLabel('Kultuur').click();
  await expect(page.getByLabel('PRESIDENDI RAAMATUKLUBI', { exact: true }).getByRole('heading')).toContainText('PRESIDENDI RAAMATUKLUBI');
});

test('tv-menu-option-etv-suboption-telekava-should-show-the-etv-telekava-when-clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'TV', exact: true }).hover()
    await page.getByRole('link', { name: 'ETV Telekava (avaneb uues' }).click();
    await expect(page.getByRole('button', { name: 'Kuva nädala vaade' })).toBeVisible;
  });

test('radio-menu-option-vikerraadio-suboption-saatekava-should-show-the-vikerraadio-saatekava-when-clicked', async ({ page }) => {
    await page.getByLabel('Raadio', { exact: true }).hover()
    await page.getByRole('link', { name: 'Vikerraadio Saatekava' }).click();
    await expect(page.getByRole('main')).toContainText('Saatekava');
  });

test('arhiiv-menu-option-should-navigate-to-archive-page-when-clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Arhiiv', exact: true }).click();
    await expect(page.getByRole('link', { name: 'ERR logo ARHIIV' })).toBeVisible();
  });