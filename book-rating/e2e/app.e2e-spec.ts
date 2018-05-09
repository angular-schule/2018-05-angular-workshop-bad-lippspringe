import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('book-rating App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Book Rating');
    browser.sleep(4000);
  });
});
