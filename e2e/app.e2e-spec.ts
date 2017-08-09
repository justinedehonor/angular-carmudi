import { CarmudiPage } from './app.po';

describe('carmudi App', () => {
  let page: CarmudiPage;

  beforeEach(() => {
    page = new CarmudiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
