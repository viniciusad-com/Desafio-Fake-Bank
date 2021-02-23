<<<<<<< HEAD
import { browser, logging } from 'protractor';
import { AppPage } from './app.po';
=======
import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

<<<<<<< HEAD
  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('HelloWorld app is running!');
=======
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('minha-aplicacao app is running!');
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
