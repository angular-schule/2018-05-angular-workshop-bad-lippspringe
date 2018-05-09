import { browser, element, $ } from 'protractor';

describe('reisewitz impressum', () => {

  beforeAll(() => browser.waitForAngularEnabled(false));

  it('should show the tax number', () => {

    browser.get('https://reisewitz.com/de/impressum/');
    const text = $('#index').getText();
    expect(text).toContain('DE303988016');
  });

  afterAll(() => browser.waitForAngularEnabled(true));
});
