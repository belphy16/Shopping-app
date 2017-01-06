import { EinkaufAppPage } from './app.po';

describe('einkauf-app App', function() {
  let page: EinkaufAppPage;

  beforeEach(() => {
    page = new EinkaufAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
