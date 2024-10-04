import { test, expect } from '@playwright/test';
test.beforeEach(async ({ page }) => {
    page.setDefaultTimeout(10000); // 10 seconds
});
test.describe('Home', () => {
    test('Open HomePage and verify title', async ({ page }) => {
        await page.goto('https://www.holycode.com/');
        const element = page.locator('//h1[@class="c-txt--hero  c-hero__title"]');


    // Assert the element is visible
    await expect(element).toBeVisible();

    // Assert the element contains specific text
    await expect(element).toHaveText('Tech Solutions to scale');
    })
    test('get started link', async ({ page }) => {
        await page.goto('https://www.holycode.com/');
      
        // Click the get started link.
        const element = await page.locator('//*[@class="c-nav-primary"]/li[3]/a/span').click();
        const openpositionlink =await page.locator('//*[@class="c-nav-primary"]li[3]/div/ul/li[2]/a').click();
        const jointext =await page.locator('//*[@class="c-txt--punchline"]');
        await expect(jointext).toBeVisible();
        });
    
})
