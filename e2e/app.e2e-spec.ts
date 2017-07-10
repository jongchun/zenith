import { ZenithPage } from './app.po';

describe('zenith App', () => {
  let page: ZenithPage;

  beforeEach(() => {
    page = new ZenithPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
