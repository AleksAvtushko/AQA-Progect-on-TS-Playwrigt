import { test, expect } from '@playwright/test';

test.describe('Check autorisation', () => {
  
  test('login button is visible', async ({ page }) => {
    const LoginButton = page.locator("xpath=//nav/ul[2]/li[1]/a/span")
    await page.goto("https://av.by/");
    await expect(LoginButton).toBeVisible;
    await expect(LoginButton).toHaveText("Войти");
  });
});