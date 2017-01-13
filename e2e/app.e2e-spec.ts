import { CrystalGameAngular2Page } from './app.po';

describe('crystal-game-angular2 App', function() {
  let page: CrystalGameAngular2Page;

  beforeEach(() => {
    page = new CrystalGameAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
