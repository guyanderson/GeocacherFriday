import { Week4projectPage } from './app.po';

describe('week4project App', () => {
  let page: Week4projectPage;

  beforeEach(() => {
    page = new Week4projectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
