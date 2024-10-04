import { Page, Locator } from '@playwright/test';
import { test, expect } from '@playwright/test';
// this is for auto sugestion for homepage
const fs = require('fs');
import Links from '../pages/links.page';
let lnk: Links;
let lnkbtn: any;
let linkObj = new Links();
class HomePage {
  
  page: Page;
  getStartedBtn: Locator;
  qaBtn: Locator;
  goToUrl: any;
  goTo: any;
  searchBtn: Locator;
  qaButton: any;
  title1:any;
  title2:any;
  serbiaButton:any;

  constructor(page: Page) {
    this.page = page;
    this.getStartedBtn = page.locator("text=Get started");
    this.goTo = page.goto(linkObj.careerslink);
    this.qaButton = page.locator(linkObj.qaBtn);
    this.title1 = linkObj.title1;
    this.title2 = linkObj.title2;
    this.serbiaButton = page.locator(linkObj.serbiaBtn);
  }
  async navigate() {
    await this.goTo;
    await this.page.waitForTimeout(1000);
    
  }
  async navigateToUrl() {
    await this.goTo;
   
  }
  async qaClick() {
    await this.page.waitForTimeout(1000);
    //visible and attached
    await this.page.waitForSelector(linkObj.qaBtn, { state: 'visible' });
    await this.page.waitForSelector(linkObj.qaBtn, { state: 'attached' });

    const buttonQA = await this.qaButton;
    const isEnabled = await buttonQA.isEnabled();
    //check is stable
    const isStable = await this.qaButton.evaluate(element => {
    const rect = element.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
    });

    if (isEnabled) {
      console.log('Button is enabled and clickable.');
      //click on QA button for filtering
      await buttonQA.click();
    }


  }

  async serbiaClick() {
    await this.page.waitForTimeout(1000);
    //visible and attached
    await this.page.waitForSelector(linkObj.serbiaBtn, { state: 'visible' });
    await this.page.waitForSelector(linkObj.serbiaBtn, { state: 'attached' });
    await this.page.waitForTimeout(1000);
      //visible and attached
     
  
      const buttonSerbia = await this.serbiaButton;
      const isEnabled = await buttonSerbia.isEnabled();
      //check is stable
      const isStable = await this.serbiaButton.evaluate(element => {
      const rect = element.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
      });
  
      if (isEnabled) {
        console.log('Serbia Button is enabled and clickable.');
        //click on QA button for filtering
        await buttonSerbia.click();
      }
    }
  

  async writeTitles() {
    //visible and attached
    await this.page.waitForSelector(linkObj.spanValue, { state: 'visible' });
    await this.page.waitForSelector(linkObj.spanValue, { state: 'attached' });

    const title1 = await this.page.locator(linkObj.title1).innerText();
    const title2 = await this.page.locator(linkObj.title2).innerText();
    
    console.log("text is:" + title1);
    console.log("text is:" + title2);
    //writing titles to output.txt
    fs.writeFileSync('output.txt', title1 + "; " + title2);
  }
  async listTitles() {
    //visible and attached
    const divs = await this.page.locator(linkObj.listTitles+'/h3');
  const count = await divs.count();
  console.log("count: "+count);
  // Create a writable stream
  const file = fs.createWriteStream('output.txt');
  for (let i = 0; i < count; i++) {
    const div = divs.nth(i);
    const text = await div.innerText();
    console.log(`Div ${i + 1}: ${text}`);
    file.write(`Position ${i + 1}: ${text}\n`);
  }
  file.end();
  }

  async checkSpan() {
    // visible and attached elements
    await this.page.waitForSelector(linkObj.spanValue, { state: 'visible' });
    await this.page.waitForSelector(linkObj.spanValue, { state: 'attached' });
    const teamText = await this.page.locator(linkObj.teamText).innerText();
   //comparing
    await expect(teamText).toContain("Team: EtonDigital");

    await this.page.locator(linkObj.spanValue)
    const spanText = await this.page.locator(linkObj.spanValue).textContent();

    console.log(spanText);
    await expect(spanText).toContain("EtonDigital");
  }

}
export default HomePage;