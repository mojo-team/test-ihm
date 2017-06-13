import { IhmTestPage } from './app.po';

describe('ihm-test App', () => {
  let page: IhmTestPage;

  beforeEach(() => {
    page = new IhmTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
