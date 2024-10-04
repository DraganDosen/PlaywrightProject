import {Page, Locator} from '@playwright/test';

class Links {

   qaBtn:any;
   page: Page;
   h1TitleValue:any
   url:any
   title1:any;
   title2:any;
   getStartedBtn: Locator;
   spanValue:any;
   teamText:any;
   careerslink: any;
   serbiaBtn: any;
   listTitles:any;
   

    constructor (){
       this.qaBtn = '//button[contains(text(), "QA")]';
       this.h1TitleValue = '//h1[@class="c-txt--hero  c-hero__title"]';
       this.url = 'https://www.holycode.com/'; 
       this.title1 = '//*[@id="resources-feed"]/div[1]/h3';
       this.title2 ='//*[@id="resources-feed"]/div[2]/h3';
       this.spanValue='//*[@id="resources-feed"]/div[2]/p/span[contains(text(), "EtonDigital")]';
       this.teamText = '//*[@id="resources-feed"]/div[2]/p';
       this.careerslink = 'https://www.holycode.com/careers/';
       this.serbiaBtn='//button[@class="c-tag location"][contains(text(), "Serbia")]';
       this.listTitles= '//*[@id="resources-feed"]/div';
    }
    
}
export default Links;