import { test, expect } from '@playwright/test';
const fs = require('fs');
import HomePage from '../pages/home.page';
import Links from '../pages/links.page';

let linkObj= new Links();

test.beforeEach(async ({ page }) => {
  page.setDefaultTimeout(10000); // 10 seconds
});

test.describe('Check h1 title', () => {
  test('Open HomePage and verify title', async ({ page }) => {
    await page.goto(linkObj.url);
    await page.waitForSelector(linkObj.h1TitleValue, { state: 'visible' });
    const element = await page.locator(linkObj.h1TitleValue);
    console.log("text is:" + await element.innerText());

    // Assert the element is visible
    await expect(element).toBeVisible();

    // Assert the element contains specific text
    await expect(element).toHaveText('Tech Solutions to scale');
  })
})

test.describe('Check EtonDigital is team', () => {
  test('Check EtonDigital is team for Senior QA Developer/QA Team Lead', async ({ page }) => {
    page.setDefaultTimeout(20000);
    let homePage: HomePage;
    homePage = new HomePage(page);
    await homePage.navigate()
    await homePage.qaClick()
    await homePage.checkSpanForPosition()
  })
})

test.describe('Write titles to text file', () => {
  test('Write titles to text file', async ({ page }) => {
    page.setDefaultTimeout(20000);
    let homePage: HomePage;
    homePage = new HomePage(page);
    await homePage.navigate()
    //await homePage.qaClick()
    await homePage.serbiaClick()
    await homePage.listTitles()
  })
})
