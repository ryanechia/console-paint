import { Main } from './main';

describe('main tests', function () {
  let main;

  beforeEach(() => {
    main = new Main();
  });

  it('should exist as a class', () => {
    expect(main).toBeTruthy();
  });
});
